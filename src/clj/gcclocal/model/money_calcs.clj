(ns gcclocal.model.money-calcs
  (:require [gcclocal.utils :as u]
            [gcclocal.time-utils :as tu]
            [gcclocal.db.sqlutils :as sql]
            [gcclocal.logger :as logger]
            [honeysql.helpers :as s]
            [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clj-time.core :as t]
            [clojure.string :refer [blank?]]
            [clojure.data.zip.xml :as zip-xml]))


;; ----------------------- Валюты из БД -------------------------
(defn all-currencies-from-db
  "Получить все валюты из базы"
  []
  (println "getting all currencies from db")
  (sql/m-select (sql/q-select-all :currencies)))

; мемоизированная версия получения всех валют с БД
(def get-all-currencies (memoize all-currencies-from-db))

;----- список "констант" полученных один раз
; все валюты
(defonce all-currencies (get-all-currencies))
; основная валюта
(defonce default-currency (u/get-map-by-key (get-all-currencies)
                                            :is_main
                                            true))

(defn currency-by-ccode
  [ccode]
  (u/not-nil-or-throw
    (str "Валюта с кодом " ccode " не найдена")
    (u/get-map-by-key all-currencies :ccode ccode)))

(defn currency-by-id
  [id]
  (u/not-nil-or-throw
    (str "Валюта с id " id " не найдена")
    (u/get-map-by-id all-currencies id)))

(defn ccode->id
  [ccode]
  (get (currency-by-ccode ccode) :id))

(defn id->ccode
  [id]
  (get (currency-by-id id) :ccode))


(defn write-rate-to-history
  "Записать курс по валюте за дату в таблицу истории"
  [currency-id rate rate-date]
  (sql/insert-with-return :currency_rates_history
                          {:currency_id currency-id
                           :rate rate
                           :rate_date (tu/only-date rate-date)}))


(defn get-rate-from-history
  "Получить курс за дату по валюте в таблице истории"
  [currency-id rate-date]
  (when-let [c (sql/m-select-single (-> (s/select :*)
                                        (s/from :currency_rates_history)
                                        (s/where [:= :rate_date (tu/only-date rate-date)]
                                                 [:= :currency_id currency-id])))]
    (:rate c)))



;; --------------------- Курсы с сервиса ------------------------

(defonce ^:private uri-rates-for-date
  "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=")

(defn- xmlnode->rate-item
  [node]
  (reduce (fn [rate-item field]
            (assoc rate-item field (zip-xml/text (zip-xml/xml1-> node field))))
          {} [:fullname :title :description]))


(defn- service-rates-for-date-str
  "Получить курсы валют за дату
  (дата в строчном виде в формате дд.мм.гггг)"
  [d-str]
  (try
    (let [root-data (-> (str uri-rates-for-date d-str)
                        xml/parse
                        zip/xml-zip)]
      ; если ошибка
      (when-let [error (zip-xml/xml1-> root-data :rates :error)]
        (throw (Exception. (str "Ошибка при получении информации с nationalbank.kz: "
                                (zip-xml/text error)))))
      ; если информация
      (when-let [info (zip-xml/xml1-> root-data :rates :info)]
        (throw (Exception. (str "Сообщение при получении информации с nationalbank.kz: "
                                (zip-xml/text info)))))
      ; если все хорошо
      (map xmlnode->rate-item
           (zip-xml/xml-> root-data :rates :item)))
    ;; если где-то произошло исключение, записываем в лог и возвр. пустой результат
    (catch Exception e (do
                         (logger/log-exception e "Ошибка при получении курса с nationalbank.kz")
                         nil))))


;; мемоизированная версия ф-ции
(def memoize-service-rates-for-date-str (memoize service-rates-for-date-str))


(defn service-rates-for-date-m
  "Получить курсы валют за дату из сервиса
  (дата в JodaTime)
  "
  [d]
  (memoize-service-rates-for-date-str (tu/date->ddmmyyyy d)))


(defn find-currency-in-rates
  [cur-str all-rates]
  (when (u/nil-or-empty? all-rates)
    (throw (Exception. "Список курсов пустой")))
  (when (blank? cur-str)
    (throw (Exception. "Передан пустой идентификатор валюты")))
  (let [f-cur (first (filter #(= (:title %) cur-str) all-rates))]
    (if (nil? f-cur)
      (throw (Exception. (str "Не найдена валюта с таким идентификатором: " cur-str)))
      f-cur)))


(defn get-rate-from-service
  "Получить курс валюты за дату из сервиса nationalbank.kz"
  [ccode d]
  (let [all-rates (service-rates-for-date-m d)]
    ;; если смогли получить список курсов за дату
    (if all-rates
      ;; находим нужную и вытаскиваем поле
      (as-> all-rates r
            (find-currency-in-rates ccode r)
            (get r :description)
            (u/to-double r)))))


(defn exrate-for-date
  "Получить курс нужной валюты (отн-но ТГ) за нужную дату
  ccode - код валюты (например 'USD')
  d - дата в JodaTime
  "
  [ccode d]
  ;; курс для основной валюты (KZT) всегда 1
  (if  (= (:ccode default-currency) ccode)
    1
    ;; для остальных валют:
    ;; сначала ищем по истории в базе
    (if-let [r-from-history (get-rate-from-history (ccode->id ccode) d)]
      (do
        ;(println "found from history: " ccode ", " d)
        r-from-history)
      ;; если нет, обращаемся в сервис
      (do
        ;(println "not found rate from history: " ccode ", " d)
        (if-let [r-from-service (get-rate-from-service ccode d)]
          (do
            ;; записываем в историю курс с сервиса
            (write-rate-to-history (ccode->id ccode)
                                   r-from-service
                                   d)
            ;; возвращаем значение
            r-from-service)
          ;; !!! TODO: сделать значения по умолчанию
          1 ; пока просто возвращаем 1
          )))))


(defn exrate-between-for-date
  "Получить курс валюты 1 отн-но валюты 2 за нужную дату
  ccode1 - код валюты 1
  ccode2 - код валюты 2
  "
  [ccode1 ccode2 d]
  (let [c1-rate (exrate-for-date ccode1 d)
        c2-rate (exrate-for-date ccode2 d)]
    (u/to-double (/ (u/to-double c1-rate)
                    (u/to-double c2-rate)))))


;; ============= основные методы работы с курсами и валютами ===============

; record для обозначения денег в валюте
; содержит сумму и id валюты с базы
(defrecord c-money [summ c-id])


(defn c-money-w-code
  "Получить record для денег с использованием
  суммы и кода валюты (например 2000 USD)"
  [summ ccode]
  (->c-money summ (ccode->id ccode)))


(defn hm->c-money
  "Получить record по деньгам из хм по дефолтным полям
  (должен содержать :summ и :c_id)"
  [hm]
  (->c-money (:summ hm)
             (:c_id hm)))


(defn money-with-rate
  "Получить сумму с нужным курсом
  (просто перемножение суммы на курс, епт)"
  [summ exrate]
  (* summ exrate))


(defn summ-in-currency
  "Получить сумму в нужной валюте (за курс опред.даты)
  c-money - record для денег
  to-c-id - id нужной валюты
  d-for-exrate - дата JodaTime для курса (если не указана, берется сегодн.)
  "
  ([c-money to-c-id] (summ-in-currency c-money to-c-id
                                       (gcclocal.settings/main-date-to-check)))
  ([c-money to-c-id d-for-exrate]
   (if (not= (:c-id c-money) to-c-id)
     (let [rate (exrate-between-for-date (id->ccode (:c-id c-money))
                                         (id->ccode to-c-id)
                                         d-for-exrate)]
       (money-with-rate (:summ c-money) rate))
     (:summ c-money))))


(defn summ-in-default
  "Получить сумму в основной валюте"
  ([c-money] (summ-in-default c-money (tu/now-datetime)))
  ([c-money d-for-exrate]
   (summ-in-currency c-money (:id default-currency) d-for-exrate)))


(defn c-money->to-c-id
  "Конвертировать c-money в c-money с другой валютой
  c-money - начальные c-money
  to-c-id - id нужной валюты
  d-for-exrate - дата JodaTime для курса (если не указана, берется сегодн.)
  "
  ([c-money to-c-id] (c-money->to-c-id c-money to-c-id (tu/now-datetime)))
  ([c-money to-c-id d-for-exrate]
   (when c-money
     (->c-money
       (summ-in-currency c-money to-c-id d-for-exrate)
       to-c-id))))


(defn in-hm-c-money->cmoney
  "Преобразовать все записи в хм из :summ и :c-id в :cmoney {:summ :c_id :currency} "
  [obj]
  (let [convert-fn (fn [x] (if (and (contains? x :summ)
                                    (contains? x :c_id))
                            (-> x
                                (assoc :cmoney {:summ (:summ x)
                                                :c_id (:c_id x)
                                                :currency (id->ccode (:c_id x))})
                                (dissoc :summ)
                                (dissoc :c_id))
                            x))]
    (clojure.walk/postwalk (fn [x]
                             (if (map? x)
                               (convert-fn x)
                               x))
                           obj)))











