(ns gcclocal.comm.utils
  (:require [ajax.core :refer [GET POST
                               json-request-format json-response-format
                               url-request-format ajax-request]]
            [clojure.string :as cs]
            [gcclocal.comm.dom-utils :as dom]))

;; ================= Базовые функции ================
(defn nil-or-empty? [x]
  (or (nil? x) (empty? x)))

(defn in?
  "true if coll contains elm"
  [coll elm]
  (some #(= elm %) coll))

(defn find-some
  "Найти в векторе/списке элемент,
  который удовлетв. условию"
  [pred-fn l]
  (some #(when (pred-fn %) %) l))


;; =================== Работа с датами в momentjs ==================
(defn iso-str->moment [iso-str]
  (js/moment. iso-str))


(defn to-print-datetime [iso-str]
  (.format
           ;;(iso-str->moment iso-str)
           (.utc js/moment iso-str)
    "DD.MM.YYYY HH:mm:ss"))


(defn to-print-date [iso-str]
  "Показать дату (строка в ISO) в формате ДД.ММ.ГГГГ"
  (when (not (cs/blank? iso-str))
    (.format (iso-str->moment iso-str) "DD.MM.YYYY")))


(defn ddmmyyyy->iso-date-str [ddmmyyyy-str]
  (.format (js/moment ddmmyyyy-str "DD.MM.YYYY" true) "YYYY.MM.DD"))


(defn ddmmyyyy->real-iso-date-str [ddmmyyyy-str]
  "Перевести в ISO8601 с учетом зоны (т.е не в UTC)"
  (when (not (cs/blank? ddmmyyyy-str))
    (str (.format (js/moment ddmmyyyy-str "DD.MM.YYYY" true) "YYYY-MM-DD")
         "T00:00:00Z")))


(defn current-date
  "Получить текущую дату"
  []
  (let [cdatetime (js/moment.)]
    (js/moment. (js/Date. (.year cdatetime)
                          (.month cdatetime)
                          (.date cdatetime)))))

(defn current-date-iso-str
  "Получить текущую дату в iso строке"
  []
  (-> (current-date)
      (.format "DD.MM.YYYY")
      (ddmmyyyy->real-iso-date-str)))


(defn add-days-moment
  "Получить дату с добавлением кол-ва дней"
  [moment-d days]
  (.add moment-d days "days"))




(defn diff-in-days
  "Получить разницу между двумя датами в днях"
  [moment1 moment2]
  ;; var a = moment([2007, 0, 29]);
  ;; var b = moment([2007, 0, 28]);
  ;; a.diff(b, 'days') // 1
  (.diff moment1 moment2 "days"))


; сравнения дат в формате momentjs
(defn moment-comparison
  [cond-fn-str moment-date1 moment-date2]
  ; убогий хак, т.к непонятно как вызвать переданную js ф-цию
  (case cond-fn-str
    "isSame" (.isSame moment-date1 moment-date2)
    "isBefore" (.isBefore moment-date1 moment-date2)
    "isAfter" (.isAfter moment-date1 moment-date2)))


(def moment-same? (partial moment-comparison "isSame"))
(def moment-before? (partial moment-comparison"isBefore"))
(def moment-after? (partial moment-comparison "isAfter"))


(defn str-moment-comparison
  [comp-fn dstr1 dstr2]
  (comp-fn (iso-str->moment dstr1)
           (iso-str->moment dstr2)))


(def str-moment-after? (partial str-moment-comparison moment-after?))
(def str-moment-before? (partial str-moment-comparison moment-before?))
(def str-moment-same? (partial str-moment-comparison moment-same?))


(defn sort-dates
  "Сортировать список дат в формате строк"
  [desc? dates-in-str]
  (let [dates-in-vector (into [] dates-in-str)]
    (sort (if desc?
            str-moment-after?
            str-moment-before?) dates-in-vector)))

;; =================================================================

(defn get-number-with-decimals-str
  "Вывести число с разделениями, запятой и т.д"
  ([input] (get-number-with-decimals-str input false))
  ([input show-dash-if-zero?]
   (if (nil? input)
     ""
     (if (and show-dash-if-zero? (= input 0))
      "-"
       (let [js-reg (js/RegExp. "\\B(?=(\\d{3})+(?!\\d))" "g")
            n (.replace (.toString input) js-reg " ")]
        n)))))


(defn money-str
  "Основной способ отображения денег (для поступления денег)
  с '-' вместо 0"
  [input]
  (get-number-with-decimals-str (when input (js/Math.round input))
                                true))


(defn money-str-with-zero
  "Отображение денег с 0"
  [input]
  (get-number-with-decimals-str (js/Math.round input)
                                false))


(defn get-map-by-key
  "Найти хм с нужным ключом и значением в списке хм"
  [allmaps mkey mvalue]
  (first(filter (fn [m] (= (mkey m) mvalue)) allmaps)))


(defn get-map-by-id
  "Найти хм с нужным id в списке хм"
  [allmaps id]
  (get-map-by-key allmaps :id id))


(defn get-errors-str-from-map
  "Получить строку из хм ошибок"
  [errors-map]
  (reduce
    (fn [result-str [k v]]
      (str result-str (apply str (map #(str "-" % "\n") v))))
    ""
    errors-map))


(defn notify-message
  "Вывод сообщения на экран
  message {:type ''
           :text '' }
  "
  [message]
  (let [msg-type (:type message)
        msg-text (:text message)]
    (.notify js/$ msg-text #js {:className msg-type :autoHideDelay 3000})))


(defn get-ajax
  "Получить результат get-ом"
  [url get-params success-handler]
  (GET url
       {:params get-params
        :handler success-handler}))


(defn params-to-url-str
  "Конвертировать хм параметров в параметры для url"
  [params]
  (->> (seq params)
       (map (fn [[k v]] (str (name k) "=" v)))
       (cs/join "&")))


(defn get-json
  "Получить json get-ом"
  [url get-params success-handler]
  (GET url
       {:params get-params
        :handler success-handler
        :response-format :json
        :keywords? true}))


(defn post-json
  "Отправить post-ом json и получить json ответ"
  [url post-params success-handler]
  (POST url
        {:params post-params
         :handler success-handler
         :error-handler error-handler
         :response-format :json
         :keywords? true
         :format (json-request-format)}))


(defn post-json-with-success-check
  "Отправить постом json с проверкой поля success у json ответа"
  [url post-params on-success-fn on-failure-fn]
  (let [success-handler (fn [response]
                          (if (:success response)
                            (on-success-fn response)
                            (on-failure-fn response)))]
    (post-json url post-params success-handler)))


(defn extract-row-from-fields
  "Получить значение строки по инпутам с соотв.названиями

  Предполагает, что у инпутов классы имеют те же названия, что и поля, н-р
  :name и add-name

  fieldnames - вектор кейнэймов для полей
  dom-prefix - префикс для добавления или редактирования (add/edit)
  "
  [fieldnames dom-prefix]
  (reduce (fn [row-map fieldname]
            (let
              [field-sel (str "." dom-prefix "-" (name fieldname))]
              (assoc row-map fieldname (dom/value-from-dom field-sel))))
          {}
          fieldnames))


(defn in-list?
  "Проверка, находится ли элемент в векторе или списке"
  [l value]
  (not (nil? (some #{value} l))))


(defn when-or-skip
  "Для -> макроса: если условие выполнилось,
  то применить ф-цию, иначе вернуть старое значение"
  [prev condition cond-fn]
  (if condition
    (cond-fn prev)
    prev))


(defn rename-keys-in-map
  [map kmap]
  (reduce
     (fn [m [old new]]
       (if (contains? map old)
         (assoc m new (get map old))
         m))
     (apply dissoc map (keys kmap)) kmap))



















