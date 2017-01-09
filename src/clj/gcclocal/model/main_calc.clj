;;;; =========================================================
;;;; Основные ф-ции типа получения оплат клиента для графика и т.д.
;;;; =========================================================
(ns gcclocal.model.main-calc
  (:require [gcclocal.db.sqlutils :as sql]
            [clojure.java.jdbc :as jdbc]
            [gcclocal.db.crud :as crud]
            [gcclocal.model.catalogs :as catalogs]
            [gcclocal.model.primarydocs :as pd]
            [gcclocal.utils :as u]
            [gcclocal.time-utils :as tu]
            [gcclocal.settings :as sett]
            [gcclocal.model.client-applications :as c-apps]
            [gcclocal.model.departurelogistinfos :as dli-s]
            [gcclocal.model.departures :as dep-s]
            [gcclocal.model.base-calcs :as b-calcs]
            [gcclocal.model.money-calcs :as mc]
            [clojure.pprint :as pp]
            [honeysql.core :as hs]
            [clj-time.core :as ctime]
            [honeysql.helpers :as s]))

;;; =================================================
;;; Вспомогательные функции
;;;
(defn client-id->client-apps
  "Получить все заявки, используемые клиентом"
  [client-id]
  (jdbc/query sql/db
              ["
               SELECT *
               FROM	primarydocs_clientapplication
               WHERE id in
               (
                 SELECT DISTINCT *
                 FROM
                 (
                   SELECT client_application_id
                   FROM primarydocs_departure
                   WHERE
                   client_id = ? AND status  = 1 AND
                   client_application_id is NOT NULL

                   UNION
                   SELECT dli.client_application_id
                   FROM primarydocs_departurelogistinfo dli
                   LEFT JOIN primarydocs_clientapplication ca ON ca.id = dli.client_application_id
                   WHERE
                     ca.client_id = ? AND dli.status  = 1 AND dli.d_status = 1 AND
                     dli.client_application_id is NOT NULL
                  ) as m)" client-id client-id]))


(defn filter-only-no-app
  "Отфильтровать и оставить только записи, у которых не указана заявка"
  [coll]
  (filter #(and (nil? (:client_application_id %))
                (nil? (:clientapplication %))) coll))


(defn filter-by-app-id
  "Отфильтровать и оставить только записи с указанной id заявки"
  [app-id coll]
  (filter #(or (= app-id (:client_application_id %))
               (= app-id (get-in % [:clientapplication :id])))
           coll))


;;; =================================================
;;; Функции для погашения суммы оплат и поставок
;;;
(defn repay-payments-with-dms
  "Погасить связанные оплаты, штрафы и поставки
  (у всех должна быть одинаковая заявка либо у всех отсутствовать),
  сортировать по дням и избавиться от пустых (с суммой 0)"
  [payments fines dep-dms main-c-id client-app]
;;   (println "payments")
;;   (println payments)
;;   (println "dep-dms")
;;   (println dep-dms)
;;   (println "fines")
;;   (println fines)
;;   (println "sum")
  ;;; ------------------------------------------------------------------------------------
  (as-> dep-dms x
        (b-calcs/repay-datemoneys
          ; получить полную сумму оплат (с учетом штрафов) в виде денег
          (mc/->c-money
            (-> 0
                (#(reduce (fn [summ payment]
                            (+ summ (-> payment
                                        mc/hm->c-money
                                        (mc/c-money->to-c-id
                                          main-c-id
                                          (:doc_date payment))
                                        :summ)))
                          %
                          payments))
                ;; складываем в общую сумму оплаты и штрафы
                (#(reduce (fn [summ fine]
                            (+ summ (-> fine
                                        mc/hm->c-money
                                        (mc/c-money->to-c-id
                                          main-c-id
                                          (:doc_date fine))
                                        :summ)))
                          %
                          fines)))
            main-c-id)
          x)
        ;; переводим все в тг
        (map #(assoc % :c-money (mc/c-money->to-c-id (:c-money %)
                                                     (:id mc/default-currency)))
             x)
        ;; избавляемся от записей с суммой 0
        (remove #(= (get-in % [:c-money :summ]) (double 0)) x)
        ;; группируем по дням и сортируем (все в тг)
        (b-calcs/datemoneys-grouped-by-dates-one-curr-one-app x
                                                              (:id mc/default-currency)
                                                              client-app)
        ))

;(= 0.0 (double 0))

(defn repay-by-client-app
  "Погасить оплаты, штрафы и поставки, привязанные к одной заявке
  payments - список оплат, привязанных к заявке
  fines - список штрафов, привязанных к заявке
  dep-dms - список поставок в виде [дата-деньги], привязанные к заявке
  "
  [payments fines dep-dms client-app]
  (repay-payments-with-dms payments
                           fines
                           dep-dms
                           ; получить основную валюту, в которой будут производиться вычисления
                           ; это валюта поставок
                           (get-in (first dep-dms) [:c-money :c-id])
                           client-app))



(defn repay-wo-app
  "Погасить 'безымянные' оплаты, штрафы и поставки, не привязанные к заявкам
  payments - список оплат
  dep-dms - список поставок в виде [дата-деньги]"
  [payments fines dep-dms]
  (repay-payments-with-dms payments
                           fines
                           dep-dms
                           ; получить основную валюту, в которой будут производиться вычисления
                           ; валюта поставок либо валюта по умолчанию
                           (or (get-in (last dep-dms) [:c-money :c-id])
                               (:id mc/default-currency))
                           nil))


;;; =================================================
;;; Основные функции
;;;
(defn all-dms-of-client
  "Получить все поставки + вход.остатки в виде {дата-деньги}"
  [client-id date-to-check]
  (let [deps (dep-s/departures-by-client-id client-id)
        dlis (dli-s/dlis-by-client-id client-id)
        clientinitincomes (pd/clientinitincomes-by-client-id client-id)

        ;; все поставки в виде дата-деньги (+ заявка внутри)
        all-deps-as-dms (concat (map dep-s/departure->datemoney deps)
                                (map #(dli-s/dli->datemoney-as-sale % date-to-check) dlis)
                                (map pd/clientinitincomes->datemoney clientinitincomes))
        ;; начальные поставки (входящие остатки)
        ;;initincomes (pd/initincomes-in-dms-by-client-id client-id)

        ;; общее
;;         total-dms (concat all-deps-as-dms
;;                           initincomes)

        ; учитываем выходные для дат
        w-weekends-dms (tu/dss-consider-weekends-and-date-to-check all-deps-as-dms ;total-dms
                                                                   date-to-check)
        ; отсортированные по дате
        sorted-dms (tu/sort-by-date-key w-weekends-dms)]
    sorted-dms))

;; (pd/clientinitincomes-by-client-id 5243)
;; (map pd/clientinitincomes->datemoney (pd/clientinitincomes-by-client-id 5243))



(defn get-calcs-by-app
  "Получить все расчеты выплат по конкретной заявке"
  [all-dms all-payments all-fines client-app]
  (let [client-app-id (:id client-app)]
    (repay-by-client-app (filter-by-app-id client-app-id all-payments)
                         (filter-by-app-id client-app-id all-fines)
                         ;; фильтруем поставки
                         (->> all-dms
                              (filter-by-app-id client-app-id)
                              ;; и получаем список с учетом предолпат
                              (c-apps/dms->repaid-dms client-app))
                         client-app)))


(defn get-calcs-wo-apps
  "Получить все расчеты выплат по безымянным поставкам, оплатам и штрафам клиента"
  [all-dms all-payments all-fines]
  (repay-wo-app (filter-only-no-app all-payments)
                (filter-only-no-app all-fines)
                (filter-only-no-app all-dms)))



(defn payments-by-client
  "Получить график оплат по клиенту"
  [client-id date-to-check]
  (let [ ;; используемые клиентом заявки
         client-apps (client-id->client-apps client-id)
         ;; все поставки (включая вход.остатки) по клиенту в виде дата-деньги (безым. и с заявкой)
         all-dms (all-dms-of-client client-id date-to-check)
         ;; все оплаты клиента (безым. и с заявкой)
         all-payments (pd/clientpayments-by-client-id client-id)
         ;; все штрафы клиента (безым. и с заявкой)
         all-fines (pd/clientfines-by-client-id client-id)

         ;; расчеты для безымянных поставок, оплат и штрафов
         calcs-wo-apps (get-calcs-wo-apps all-dms all-payments all-fines)
         ;; расчеты для поставок, оплат и штрафов сгруппированных по заявке
         calcs-of-apps (mapcat (fn [c-app]
                                 (get-calcs-by-app all-dms
                                                   all-payments
                                                   all-fines
                                                   c-app))
                               client-apps)
         ;; объединяем и сортируем по дате
         result (->
                  (concat calcs-wo-apps
                          calcs-of-apps)
                  tu/sort-by-date-key)]
;;     (println all-dms)
;;     (println all-payments)
;;     (println "--------")
;;     (println calcs-wo-apps)
    result))


;(payments-by-client 5320 (sett/main-date-to-check))


;;; =================================================
;;; Основная функция получения всех выплат по всем клиентам
;;;

(defn payments-from-clients
  "Получить выплаты от клиентов в виде
	[клиент - его выплаты (список datemoney)"
  [date-to-check]
  (->> (crud/default-get-all-rows :catalogs_client) ; все клиенты
       ;; для распараллеливания по клиентам
       (pmap #(-> {:client {:id (:id %)
                           :name (:name %)}
                  :payments (payments-by-client (:id %) date-to-check)
                  }))
       (doall)))


(defn test-payments-from-clients
  []
  (payments-from-clients (sett/main-date-to-check)))



(defn shippingplans-of-suppliers
  "Получить плановые отгрузки поставщиков
  (указанные логистом)"
  [date-to-check]
  (let [all-plans (sql/m-select (-> (s/select :*)
                                    (s/from :supplier_shippings_plans)
                                    (s/where [:= :status 1])
                                    (s/merge-where [:>= :plan_date date-to-check])))]
    (->> (crud/default-get-all-rows :catalogs_supplier) ; все поставщики
         (map (fn [s] (-> {:supplier {:id (:id s)
                                      :name (:name s)}
                           :plan_payments (filter #(= (:supplier_id %)
                                                      (:id s)) all-plans)}))))))

(shippingplans-of-suppliers (sett/main-date-to-check))

;(get-calcs-by-client 5340 (sett/main-date-to-check))

;; (repay-wo-app
;;   [{:doc_date (ctime/date-time 2016 8 1)
;;     :summ 200000
;;     :c_id 2}
;;    {:doc_date (ctime/date-time 2016 8 3)
;;     :summ 1000
;;     :c_id 3}]

;;   [{:doc_date (ctime/date-time 2016 8 1)
;;     :summ 100000
;;     :c_id 2}]

;;   [{:date (ctime/date-time 2016 8 15)
;;     :c-money (mc/->c-money 2400 3)
;;     :clientapplication nil}
;;    {:date (ctime/date-time 2016 8 10)
;;     :c-money (mc/->c-money 24000 2)
;;     :clientapplication nil}
;;    {:date (ctime/date-time 2016 8 12)
;;     :c-money (mc/->c-money 500 3)
;;     :clientapplication nil}]
;;   )

