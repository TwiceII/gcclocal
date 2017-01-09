;;;; =========================================================
;;;; Функции для работы с поставками
;;;; =========================================================
(ns gcclocal.model.departures
  (:require [gcclocal.db.sqlutils :as sql]
            [gcclocal.model.base-calcs :as bc]
            [gcclocal.model.money-calcs :as mn]
            [honeysql.core :as hs]
            [clj-time.core :as ctime]
            [honeysql.helpers :as s]))


(defn departures-by-client-id
  "Получить список поставок по клиенту со всеми вложенными полями"
  [client-id]
  (sql/select-with-inner-fields
    (-> (s/select :d.*)
        (s/from [:primarydocs_departure :d])
        (s/where [:= :d.status 1])
        (s/merge-where [:= :d.client_id client-id]))
    [(sql/inner-field-param :primarydocs_clientcontract :cc
                            :d.client_contract_id
                            [:clientcontract])
     (sql/inner-field-param :primarydocs_clientapplication :ca
                            :d.client_application_id
                            [:clientapplication])]))


(defn planned-payment-date
  "Получить плановую дату оплаты поставки"
  [d]
  (ctime/plus (:doc_date d)
              (ctime/days (or (get-in d [:clientcontract :pay_time]) 0))))


(defn departure->datemoney
  "Перевести поставку в {дата, деньги} и клиентской заявкой"
  [departure]
  (bc/->datemoney (mn/hm->c-money departure)
                  (planned-payment-date departure)
                  (:clientapplication departure)))
