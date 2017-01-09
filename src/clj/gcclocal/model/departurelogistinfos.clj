;; =========================================================
;; функции для работы с поставками в пути
;; =========================================================
(ns gcclocal.model.departurelogistinfos
  (:require [gcclocal.db.sqlutils :as sql]
            [gcclocal.db.crud :as crud]
            [gcclocal.model.client-applications :as c-apps]
            [gcclocal.model.base-calcs :as bc]
            [gcclocal.model.money-calcs :as mn]
            [gcclocal.settings :as sett]
            [honeysql.core :as hs]
            [clj-time.core :as ctime]
            [gcclocal.validation-utils :as v]
            [honeysql.helpers :as s]))


(defn dlis-by-client-id
  "Получить поставки в пути по id клиента (со всеми вложенными полями)"
  [client-id]
  (sql/select-with-inner-fields
    (-> (s/select :dli.*)
        (s/from [:primarydocs_departurelogistinfo :dli])
        (s/where [:= :dli.status 1])
        (s/merge-where [:= :dli.d_status 1])
        (s/merge-where [:= :ca.client_id client-id]))
    [(sql/inner-field-param :primarydocs_clientapplication :ca
                            :dli.client_application_id
                            [:clientapplication])
     (sql/inner-field-param :primarydocs_clientcontract :cc
                            :ca.client_contract_id
                            [:clientapplication :clientcontract])]))


(defn plan-date-invoice
  "Получить план.дату счф для поставки в пути
  если поставка еще не завершена, а план.дата уже прошла,
  то начинаем с проверяемой даты (всегда сдвигаем)
  "
  [dli date-to-check]
  ;(println "plan-date-invoice")
  ;(println date-to-check)
  (let [planned-date (-> (:shipping_date dli)
                         (ctime/plus (ctime/days (or (:travel_time dli) 0))))
        ;; вычисляем дату, с которого вести
        ;; если срок плановый еще не прошел
        date-from (if (ctime/after? planned-date date-to-check)
                    planned-date
                    date-to-check)]
    (-> date-from
        (ctime/plus (ctime/days (or (:shipping_time dli) 0))))))


(defn plan-date-payment
  "Получить план.дату оплаты поставки в пути"
  [dli date-to-check]
  (-> (plan-date-invoice dli date-to-check)
      (ctime/plus (ctime/days (or (get-in dli [:clientapplication
                                               :clientcontract
                                               :pay_time]) 0)))))


(defn cmoney-sale
  "Получить сумму денег поставки в пути (сумму продажи с валютой)"
  [dli]
  (mn/->c-money
    ; Цена по заявке * кол-во тонн в вагоне
    (* (:wagon_amount dli) (c-apps/price (:clientapplication dli)))
    (get-in dli [:clientapplication :c_id])))



(defn dli->datemoney-as-sale
  "Конвертировать поставку в пути в {дата, деньги} и заявкой"
  [dli date-to-check]
  (bc/->datemoney (cmoney-sale dli)
                  (plan-date-payment dli date-to-check)
                  (:clientapplication dli)))

;; (dli->datemoney-as-sale (first (filter #(and (= (:d_status %) 1)
;;                                              (= (:client_application_id %) 2058))
;;                                        (dlis-by-client-id 5340))) (sett/main-date-to-check))


;; (let [dli (->> (dlis-by-client-id 139)
;;                (filter #(= (:id %) 394))
;;                first)]
;;   (dli->datemoney-as-sale dli))







