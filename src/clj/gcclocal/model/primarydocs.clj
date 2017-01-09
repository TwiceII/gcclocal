(ns gcclocal.model.primarydocs
  (:require [gcclocal.db.sqlutils :as sql]
            [gcclocal.model.base-calcs :as bc]
            [gcclocal.model.money-calcs :as mn]
            [gcclocal.time-utils :as t]
            [gcclocal.db.crud :as crud]
            [gcclocal.validation-utils :as v]
            [gcclocal.utils :as u]
            [honeysql.core :as hs]
            [clj-time.core :as ctime]
            [clj-time.coerce :as ctime-c]
            [honeysql.helpers :as s]))


;;; ------------------------------------------------------
;;; настройки для запросов (basemaps)

(def clientcontracts-basemap
  "Настройки для запроса к договорам"
  {:table :primarydocs_clientcontract
   :syn :pc
   :joins [[:catalogs_client :c :id
            :pc.client_id [:name "client_name"]]
           [:catalogs_good :g :id
            :pc.good_id [:name "good_name"]]]
   :search [:pc.name :c.name :g.name]
   :order-spec {"client" "client_name"
                "good" "good_name"}})


(def clientapplications-basemap
  "Настройки для запроса к заявкам"
  {:table :primarydocs_clientapplication
   :syn :ca
   :joins [[:catalogs_client :c :id
            :ca.client_id [:name "client_name"]]
           [:primarydocs_clientcontract :cc :id
            :ca.client_contract_id [:name "contract_name"]]]
   :search [:ca.name :c.name :cc.name]
   :order-spec {"client" "client_name"
                "client_contract" "contract_name"}})


(def departures-basemap
  "Настройки для запроса к поставкам"
  {:table :primarydocs_departure
   :syn :d
   :joins [[:catalogs_client :c :id
            :d.client_id [:name "client_name"]]
           [:primarydocs_clientcontract :cc :id
            :d.client_contract_id [:name "contract_name"]]
           [:primarydocs_clientapplication :ca :id
            :d.client_application_id [:name "app_name"]]]
   ;; доп.поля
   :extra-selects [[:cc.pay_time "contract_pay_time"]
                   (hs/raw "d.doc_date + interval '1' day * cc.pay_time as planned_payment_date")]
   :search [:d.doc_name :c.name :cc.name :ca.name]
   :order-spec {"client" "client_name"
                "client_contract" "contract_name"
                "client_application" "app_name"}})


(def clientpayments-basemap
  "Настройки для запроса к оплатам по клиентам"
  {:table :clientpayments
   :syn :cp
   :joins [[:catalogs_client :c :id
            :cp.client_id [:name "client_name"]]
           [:primarydocs_clientcontract :cc :id
            :cp.client_contract_id [:name "contract_name"]]
           [:primarydocs_clientapplication :ca :id
            :cp.client_application_id [:name "app_name"]]]
   :search [:cp.name :ca.name :c.name :cc.name]
   :order-spec {"client" "client_name"
                "client_contract" "contract_name"
                "client_application" "app_name"}})


(def clientfines-basemap
  "Настройки для запроса к штрафам по клиентам"
  {:table :clientfines
   :syn :cf
   :joins [[:catalogs_client :c :id
            :cf.client_id [:name "client_name"]]
           [:primarydocs_clientcontract :cc :id
            :cf.client_contract_id [:name "contract_name"]]
           [:primarydocs_clientapplication :ca :id
            :cf.client_application_id [:name "app_name"]]]
   :search [:cf.doc_name :ca.name :c.name :cc.name]
   :order-spec {"client" "client_name"
                "client_contract" "contract_name"
                "client_application" "app_name"}})


(def clientinitincomes-basemap
  "Настройки для запроса по вход.остаткам по клиентам и заявкам"
  {:table :clientinitincomes
   :syn :i
   :joins [[:catalogs_client :c :id
            :i.client_id [:name "client_name"]]
           [:primarydocs_clientapplication :ca :id
            :i.client_application_id [:name "app_name"]]]
   :search [:c.name :ca.name]
   :order-spec {"client" "client_name"
                "client_application" "app_name"}})


(def initclientincomes-basemap
  "Настройки для запроса по вход.остаткам по клиентам"
  {:table :primarydocs_initclientincomes
   :syn :i
   :joins [[:catalogs_client :c :id
            :i.client_id [:name "client_name"]]]
   :search [:c.name]
   :order-spec {"client" "client_name"}})

;;; ------------------------------------------------------
;;; остальные методы



(defn get-initbalanceondate
  [{:keys [pagesize pagenumber order-by search-text]}]
  (sql/m-select (->
                  (s/select :i.*)
                  (s/from [:primarydocs_initbalanceondate :i])
                  (s/where [:= :i.status 1]))))


(defn last-balance-by-currency
  "Получить последнее значение остатка на дату"
  [currency-id]
  (sql/m-select-single (->
                         (s/select :*)
                         (s/from :balances_on_dates)
                         (s/order-by [:balance_date :desc]
                                     [:creation_datetime :desc])
                         (s/where [:= :balance_currency currency-id])
                         (s/limit 1))))


(defn last-total-balance-on-date
  []
  (->> (sql/m-select (-> (s/select :balance_currency)
                         (s/modifiers :distinct)
                         (s/from :balances_on_dates)))
       ;; получаем все используемые валюты
       (map :balance_currency)
       ;; последние значения остатка
       (map last-balance-by-currency)
       ;(u/side-eff-return->> #(println "hey " %))
       ;; переводим валюты и суммируем
       (reduce (fn[summ b]
                 (let [cmoney (mn/->c-money (:balance_summ b)
                                            (:balance_currency b))]
                   (+ summ (mn/summ-in-default cmoney))))
               0)
       ;; упаковываем в нужный формат
       (assoc {} :summ)
       (conj [])))

(last-total-balance-on-date)

(def departurelogistinfos-baseparams
  "Настройки для запроса по поставкам в пути"
  {:table :primarydocs_departurelogistinfo
   :syn :dl
   :joins [[:primarydocs_clientapplication :ca :id
            :dl.client_application_id [:name "app_name"]]
           [:catalogs_client :c :id
            :ca.client_id [:name "client_name"]]
           [:catalogs_supplier :s :id
            :dl.supplier_id [:name "supplier_name"]]
           [:catalogs_station :st_from :id
            :dl.from_station_id [:name "station_from_name"]]
           [:catalogs_station :st_to :id
            :dl.to_station_id [:name "station_to_name"]]]
   :extra-selects [:ca.client_id
                   (hs/raw "current_date::date - dl.shipping_date::date as days_fact")
                   (hs/raw "dl.finished_datetime::date - dl.shipping_date::date as days_fact_finished")
                   [(-> (s/select :current_station_name)
                        (s/from :forsync_editdlis)
                        (s/where [:= :wagon_number :dl.wagon_number])
                        (s/order-by [:creation_datetime :desc])
                        (s/limit 1)) :station_status_name]]
   :search [:ca.name :c.name :dl.wagon_number :s.name :st_from.name :st_to.name]
   :order-spec {"client_name" "client_name"
                "client_application" "app_name"
                "supplier_name" "supplier_name"
                "from_station" "station_from_name"
                "to_station" "station_to_name"
                "days_fact" "days_fact"
                }})


(defn get-departurelogistinfos-with-params
  "Получить поставки с пути по параметрам (с текущей станцией)"
  [{:keys [pagesize pagenumber order-by showmode search-text] :as params}]
  (let [where-status (case showmode
                       "active" [:= :dl.d_status 1]
                       "finished" [:= :dl.d_status 3]
                       "all" [:in :dl.d_status [1 3]])]
    (sql/m-select
      (->
        (sql/query-rows-from-basemap-and-params departurelogistinfos-baseparams
                                                params)
        (s/merge-where where-status)))))


(defn get-departurelogistinfos-count
  "Получить количество поставок в пути"
  ([showmode] (get-departurelogistinfos-count showmode nil))
  ([showmode search-text]
   (let [where-status (case showmode
                       "active" [:= :dl.d_status 1]
                       "finished" [:= :dl.d_status 3]
                       "all" [:in :dl.d_status [1 3]])]
     (sql/m-select-single
       (->
         (sql/query-count-from-basemap-and-params departurelogistinfos-baseparams
                                                  search-text)
         (s/merge-where where-status))))))


(defn initincomes-in-dms-by-client-id
  "Получить входящие остатки по клиенту в виде списка datemoney"
  [client-id]
  (try
    (when-let [init-incomes (crud/get-row-where :primarydocs_initclientincomes
                                                [:= :client_id client-id])]
      [(bc/parts->datemoney
        (:summ init-incomes)
        (:c_id init-incomes)
        (:doc_date init-incomes)
        nil)])
    (catch Exception e (do
                         (println "error on get-initincomes-in-dss-by-client")
                         nil))))


(defn clientinitincomes-by-client-id
  "Получить входящие остатки по клиенту и заявкам"
  [client-id]
  (sql/select-with-inner-fields
    (-> (s/select :ci.*)
        (s/from [:clientinitincomes :ci])
        (s/where [:= :ci.status 1])
        (s/merge-where [:= :ci.client_id client-id]))
    [(sql/inner-field-param :primarydocs_clientapplication :ca
                            :ci.client_application_id
                            [:clientapplication])]))


(defn clientinitincomes->datemoney
  "Перевести вход.остаток по клиенту и заявке в {дата, деньги, заявка}"
  [clientinitincome]
  (bc/->datemoney (mn/hm->c-money clientinitincome)
                  (:doc_date clientinitincome)
                  (:clientapplication clientinitincome)))



(defn factclientpayments-sum-by-client-id
  "Получить сумму всех оплат по клиенту"
  [client-id]
  (try
    (:summ (crud/get-row-where :primarydocs_factclientpayment
                               [:= :client_id client-id]))
    (catch Exception e (do
                         (println e)
                         0))))


(defn clientpayments-by-client-id
  "Получить все оплаты по клиенту"
  [client-id]
  (crud/get-rows-where :clientpayments [:= :client_id client-id]))


(defn clientfines-by-client-id
  "Получить все штрафы по клиенту"
  [client-id]
  (crud/get-rows-where :clientfines [:= :client_id client-id]))


(defn get-all-new-sync-dlis
  "Получить все поставки к подтверждению (сорт. по дате отправки)"
  []
  (sql/m-select (->
                  (s/select :*)
                  (s/from :forsync_newdlis)
                  (s/where [:= :status 1])
                  (s/order-by :shipping_date))))


(defn add-new-sync-deplogistinfo
  "Добавить новую поставку, подтвержденную с сервиса"
  [row]
  (let [dli-row (u/hm->copy-w-keyws row
                                    [:wagon_number
                                     :creation_datetime
                                     :last_edit_datetime
                                     :departure_status_id
                                     :status
                                     :from_station_id
                                     :to_station_id
                                     :client_application_id
                                     :supplier_id
                                     :cost
                                     :wagon_amount
                                     :travel_time
                                     :shipping_date
                                     :shipping_time])]
    (sql/in-transaction tr-conn
      ; добавляем запись в поступления в пути
      (sql/insert-with-return :primarydocs_departurelogistinfo dli-row)
      ; меняем статус у поступления с сервиса
      (sql/update-by-id :forsync_newdlis (:newdli_id row) {:status 3})
      ; если указана текущая станция, то добавляем в табл.обновлений новую запись
      (when (and (not (nil? (:current_station_name row)))
                 (not (nil? (:current_station_code row))))
        (sql/insert-with-return :forsync_editdlis
                                {:creation_datetime (ctime/now)
                                 :status 1
                                 :current_arrival_date (ctime/now)
                                 :current_station_name (:current_station_name row)
                                 :current_station_code (:current_station_code row)
                                 :wagon_number (:wagon_number row)}))
      ; у станций ставим новые коды с сервиса
      (sql/update-by-id :catalogs_station
                        (:from_station_id row)
                        {:sync_station_code (:from_station_code row)})
      (sql/update-by-id :catalogs_station
                        (:to_station_id row)
                        {:sync_station_code (:to_station_code row)}))))


(defn delete-new-sync-deplogistinfo
  "Удаление (отменить подтверждение) новой поставки, пришедшей с сервиса"
  [newdli-id]
  (sql/update-by-id :forsync_newdlis newdli-id {:status 2}))



(defn last-balance-on-date
  "Получить последнее значение остатка на дату"
  []
  (sql/m-select-single (->
                         (s/select :*)
                         (s/from :balances_on_dates)
                         (s/order-by [:balance_date :desc])
                         (s/limit 1))))


(defn already-has-summ?
  "Есть ли такой остаток уже в базе за последнее число"
  [summ]
  (= (double summ)
     (double (:balance_summ (last-balance-on-date)))))


;; (already-has-summ? 340000)

;;; ------------------------------------------------------
;;; LEGACY CODE

;; (defn get-clientapplications-with-params
;;   "Получить строки для заявок"
;;   [{:keys [pagesize pagenumber order-by search-text]}]
;;   (let [order-fieldname (sql/get-order-fieldname order-by)
;;         result-order-by (case order-fieldname
;;                           "client" (str (sql/get-order-type-str order-by) "c.name")
;;                           "client_contract" (str (sql/get-order-type-str order-by) "cc.name")
;;                           order-by)]
;;     (sql/m-select (->
;;                     (s/select :ca.*)
;;                     (s/from [:primarydocs_clientapplication :ca])
;;                     (s/left-join [:catalogs_client :c] [:= :c.id :ca.client_id])
;;                     (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                        [:= :cc.id :ca.client_contract_id])
;;                     (s/where [:= :ca.status 1])
;;                     (sql/where-substrs [:ca.name :c.name :cc.name] search-text)
;;                     (sql/limit-offset pagenumber pagesize)
;;                     (sql/order-by-field result-order-by)))))



;; (defn get-clientapplications-count
;;   "Получить кол-во заявок"
;;   ([] (get-clientcontracts-count nil))
;;   ([search-text]
;;     (sql/m-select-single (->
;;                             (s/select :%count.*)
;;                             (s/from [:primarydocs_clientapplication :ca])
;;                             (s/left-join [:catalogs_client :c] [:= :c.id :ca.client_id])
;;                             (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                                [:= :cc.id :ca.client_contract_id])
;;                             (s/where [:= :ca.status 1])
;;                             (sql/where-substrs [:ca.name :c.name :cc.name] search-text)))))


;; (defn get-departures-with-params
;;   "Получить строки для поставок"
;;   [{:keys [pagesize pagenumber order-by search-text]}]
;;   (let [order-fieldname (sql/get-order-fieldname order-by)
;;         result-order-by (case order-fieldname
;;                           "client" (str (sql/get-order-type-str order-by) "c.name")
;;                           "client_contract" (str (sql/get-order-type-str order-by) "cc.name")
;;                           "client_application" (str (sql/get-order-type-str order-by) "ca.name")
;;                           order-by)]
;; ;; старый код для получения даты план.оплаты (теперь берется напрямую с запроса к бд)
;; ;;     (map #(assoc %
;; ;;                  :planned_payment_date
;; ;;                  (get-planned-payment-date-for-departure %))
;;          (sql/m-select (->
;;                     (s/select :d.* [:cc.pay_time "contract_pay_time"]
;;                               (hs/raw "d.doc_date + interval '1' day * cc.pay_time as planned_payment_date"))
;;                     (s/from [:primarydocs_departure :d])
;;                     (s/left-join [:catalogs_client :c] [:= :c.id :d.client_id])
;;                     (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                        [:= :cc.id :d.client_contract_id])
;;                     (s/merge-left-join [:primarydocs_clientapplication :ca]
;;                                        [:= :ca.id :d.client_application_id])
;;                     (s/where [:= :d.status 1])
;;                     (sql/where-substrs [:d.doc_name :ca.name :c.name :cc.name] search-text)
;;                     (sql/limit-offset pagenumber pagesize)
;;                     (sql/order-by-field result-order-by)))))


;; (defn get-departures-count
;;   "Получить кол-во поставок"
;;   ([] (get-departures-count nil))
;;   ([search-text]
;;     (sql/m-select-single (->
;;                             (s/select :%count.*)
;;                             (s/from [:primarydocs_departure :d])
;;                             (s/merge-left-join [:catalogs_client :c] [:= :c.id :d.client_id])
;;                             (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                                [:= :cc.id :d.client_contract_id])
;;                             (s/merge-left-join [:primarydocs_clientapplication :ca]
;;                                                [:= :ca.id :d.client_application_id])
;;                             (s/where [:= :d.status 1])
;;                             (sql/where-substrs [:d.doc_name :ca.name :c.name :cc.name] search-text)))))


;; (defn get-factclientpayments-with-params
;;   "Получить факт.суммы оплат клиентов"
;;   [{:keys [pagesize pagenumber order-by search-text]}]
;;   (let [order-fieldname (sql/get-order-fieldname order-by)
;;         result-order-by (case order-fieldname
;;                           "client" (str (sql/get-order-type-str order-by) "c.name")
;;                           order-by)]
;;     (sql/m-select (->
;;                     (s/select :f.*)
;;                     (s/from [:primarydocs_factclientpayment :f])
;;                     (s/left-join [:catalogs_client :c] [:= :c.id :f.client_id])
;;                     (s/where [:= :f.status 1])
;;                     (sql/where-substrs [:c.name] search-text)
;;                     (sql/limit-offset pagenumber pagesize)
;;                     (sql/order-by-field result-order-by)))))

;; (defn get-factclientpayments-count
;;   "Получить кол-во факт.сумм оплат клиентов"
;;   ([] (get-factclientpayments-count nil))
;;   ([search-text]
;;     (sql/m-select-single (->
;;                             (s/select :%count.*)
;;                             (s/from [:primarydocs_factclientpayment :f])
;;                             (s/left-join [:catalogs_client :c] [:= :c.id :f.client_id])
;;                             (s/where [:= :f.status 1])
;;                             (sql/where-substrs [:c.name] search-text)))))


;; (defn get-clientpayments-with-params
;;   "Получить оплаты клиентов"
;;   [{:keys [pagesize pagenumber order-by search-text]}]
;;   (let [order-fieldname (sql/get-order-fieldname order-by)
;;         result-order-by (case order-fieldname
;;                           "client" (str (sql/get-order-type-str order-by) "c.name")
;;                           "client_contract" (str (sql/get-order-type-str order-by) "cc.name")
;;                           "client_application" (str (sql/get-order-type-str order-by) "ca.name")
;;                           order-by)]
;;     (sql/m-select (->
;;                     (s/select :cp.*)
;;                     (s/from [:clientpayments :cp])
;;                     (s/left-join [:catalogs_client :c] [:= :c.id :cp.client_id])
;;                     (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                        [:= :cc.id :cp.client_contract_id])
;;                     (s/merge-left-join [:primarydocs_clientapplication :ca]
;;                                        [:= :ca.id :cp.client_application_id])
;;                     (s/where [:= :cp.status 1])
;;                     (sql/where-substrs [:cp.name :ca.name :c.name :cc.name] search-text)
;;                     (sql/limit-offset pagenumber pagesize)
;;                     (sql/order-by-field result-order-by)))))


;; (defn get-clientpayments-count
;;   "Получить кол-во оплат клиентов"
;;   ([] (get-departures-count nil))
;;   ([search-text]
;;     (sql/m-select-single (->
;;                             (s/select :%count.*)
;;                             (s/from [:clientpayments :cp])
;;                             (s/merge-left-join [:catalogs_client :c] [:= :c.id :cp.client_id])
;;                             (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                                [:= :cc.id :cp.client_contract_id])
;;                             (s/merge-left-join [:primarydocs_clientapplication :ca]
;;                                                [:= :ca.id :cp.client_application_id])
;;                             (s/where [:= :cp.status 1])
;;                             (sql/where-substrs [:cp.name :ca.name :c.name :cc.name] search-text)))))


;; (defn get-clientfines-with-params
;;   "Получить штрафы по клиентам"
;;   [{:keys [pagesize pagenumber order-by search-text]}]
;;   (let [order-fieldname (sql/get-order-fieldname order-by)
;;         result-order-by (case order-fieldname
;;                           "client" (str (sql/get-order-type-str order-by) "c.name")
;;                           "client_contract" (str (sql/get-order-type-str order-by) "cc.name")
;;                           "client_application" (str (sql/get-order-type-str order-by) "ca.name")
;;                           order-by)]
;;     (sql/m-select (->
;;                     (s/select :cf.*)
;;                     (s/from [:clientfines :cf])
;;                     (s/left-join [:catalogs_client :c] [:= :c.id :cf.client_id])
;;                     (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                        [:= :cc.id :cf.client_contract_id])
;;                     (s/merge-left-join [:primarydocs_clientapplication :ca]
;;                                        [:= :ca.id :cf.client_application_id])
;;                     (s/where [:= :cf.status 1])
;;                     (sql/where-substrs [:cf.doc_name :ca.name :c.name :cc.name] search-text)
;;                     (sql/limit-offset pagenumber pagesize)
;;                     (sql/order-by-field result-order-by)))))


;; (defn get-clientfines-count
;;   "Получить кол-во штрафов по клиентам"
;;   ([] (get-departures-count nil))
;;   ([search-text]
;;     (sql/m-select-single (->
;;                             (s/select :%count.*)
;;                             (s/from [:clientfines :cf])
;;                             (s/merge-left-join [:catalogs_client :c] [:= :c.id :cf.client_id])
;;                             (s/merge-left-join [:primarydocs_clientcontract :cc]
;;                                                [:= :cc.id :cf.client_contract_id])
;;                             (s/merge-left-join [:primarydocs_clientapplication :ca]
;;                                                [:= :ca.id :cf.client_application_id])
;;                             (s/where [:= :cf.status 1])
;;                             (sql/where-substrs [:cf.doc_name :ca.name :c.name :cc.name] search-text)))))


;; (defn get-initclientincomes-with-params
;;   "Получить входящие остатки по клиентам"
;;   [{:keys [pagesize pagenumber order-by search-text]}]
;;   (let [order-fieldname (sql/get-order-fieldname order-by)
;;         result-order-by (case order-fieldname
;;                           "client" (str (sql/get-order-type-str order-by) "c.name")
;;                           order-by)]
;;     (sql/m-select (->
;;                     (s/select :i.*)
;;                     (s/from [:primarydocs_initclientincomes :i])
;;                     (s/left-join [:catalogs_client :c] [:= :c.id :i.client_id])
;;                     (s/where [:= :i.status 1])
;;                     (sql/where-substrs [:c.name] search-text)
;;                     (sql/limit-offset pagenumber pagesize)
;;                     (sql/order-by-field result-order-by)))))


;; (defn get-initclientincomes-count
;;   "Получить кол-во входящих остатков по клиентам"
;;   ([] (get-initclientincomes-count nil))
;;   ([search-text]
;;     (sql/m-select-single (->
;;                             (s/select :%count.*)
;;                             (s/from [:primarydocs_initclientincomes :i])
;;                             (s/left-join [:catalogs_client :c] [:= :c.id :i.client_id])
;;                             (s/where [:= :i.status 1])
;;                             (sql/where-substrs [:c.name] search-text)))))


;; (defn get-departurelogistinfos-with-params
;;   "Получить поставки с пути по параметрам (с текущей станцией)"
;;   [{:keys [pagesize pagenumber order-by showmode search-text]}]
;;   (let [where-status (case showmode
;;                        "active" [:= :dl.status 1]
;;                        "finished" [:= :dl.status 3]
;;                        "all" [:in :dl.status [1 3]])
;;         order-fieldname (sql/get-order-fieldname order-by)
;;         result-order-by (case order-fieldname
;;                           "client_application" (str (sql/get-order-type-str order-by) "ca.name")
;;                           "client_name" (str (sql/get-order-type-str order-by) "client_name")
;;                           "supplier_name" (str (sql/get-order-type-str order-by) "s.name")
;;                           "from_station" (str (sql/get-order-type-str order-by) "st_from.name")
;;                           "to_station" (str (sql/get-order-type-str order-by) "st_to.name")
;;                           order-by)]
;;     (sql/m-select (->
;;                     (s/select :dl.* :ca.client_id [:c.name "client_name"]
;;                               [(-> (s/select :current_station_name)
;;                                    (s/from :forsync_editdlis)
;;                                    (s/where [:= :wagon_number :dl.wagon_number])
;;                                    (s/order-by [:creation_datetime :desc])
;;                                    (s/limit 1)) :station_status_name])
;;                     (s/from [:primarydocs_departurelogistinfo :dl])
;;                     (s/left-join [:primarydocs_clientapplication :ca]
;;                                  [:= :ca.id :dl.client_application_id])
;;                     (s/merge-left-join [:catalogs_client :c]
;;                                        [:= :c.id :ca.client_id])
;;                     (s/merge-left-join [:catalogs_supplier :s]
;;                                        [:= :s.id :dl.supplier_id])
;;                     (s/merge-left-join [:catalogs_station :st_from]
;;                                        [:= :st_from.id :dl.from_station_id])
;;                     (s/merge-left-join [:catalogs_station :st_to]
;;                                        [:= :st_to.id :dl.to_station_id])
;;                     (s/where where-status)
;;                     (sql/where-substrs [:ca.name :dl.wagon_number :s.name
;;                                         :st_from.name :st_to.name] search-text)
;;                     (sql/limit-offset pagenumber pagesize)
;;                     (sql/order-by-field result-order-by)))))


;; (defn get-departurelogistinfos-count
;;   "Получить количество поставок в пути"
;;   ([showmode] (get-departurelogistinfos-count showmode nil))
;;   ([showmode search-text]
;;    (let [where-status (case showmode
;;                        "active" [:= :dl.status 1]
;;                        "finished" [:= :dl.status 3]
;;                        "all" [:in :dl.status [1 3]])]
;;      (sql/m-select-single (->
;;                             (s/select :%count.*)
;;                             (s/from [:primarydocs_departurelogistinfo :dl])
;;                             (s/left-join [:primarydocs_clientapplication :ca]
;;                                          [:= :ca.id :dl.client_application_id])
;;                             (s/merge-left-join [:catalogs_supplier :s]
;;                                                [:= :s.id :dl.supplier_id])
;;                             (s/merge-left-join [:catalogs_station :st_from]
;;                                                [:= :st_from.id :dl.from_station_id])
;;                             (s/merge-left-join [:catalogs_station :st_to]
;;                                                [:= :st_to.id :dl.to_station_id])
;;                             (s/merge-left-join [:catalogs_station :st_status]
;;                                                [:= :st_status.id :dl.station_status_id])
;;                             (s/where where-status)
;;                             (sql/where-substrs [:ca.name :dl.wagon_number :s.name
;;                                                 :st_from.name :st_to.name :st_status.name] search-text))))))
