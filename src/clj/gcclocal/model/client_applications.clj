;; =========================================================
;; функции для работы с клиентскими заявками
;; =========================================================
(ns gcclocal.model.client-applications
  (:require [gcclocal.utils :as u]
            [gcclocal.time-utils :as tu]
            [gcclocal.settings :as sett]
            [gcclocal.model.base-calcs :as b-calcs]
            [gcclocal.model.money-calcs :as mc]
            [clj-time.core :as ctime]))

(defn price
  "Получить цену заявки"
  [client-app]
  ; сумма заявки / кол-во
  ; TODO: добавить сюда потом учет валюты
  (let [summ (double (:summ client-app))
        amount (double (:amount client-app))]
    (or (when (and (> summ 0)
                   (> amount 0))
          (/ summ amount))
        0)))

(defn prepay-date
  "Получить дату предоплаты для этой заявки"
  [client-app]
  (when client-app
    (let [contract (:clientcontract client-app)]
      (when (nil? (:application_date client-app))
        (throw (Exception. "Отсутствует обяз.поле :application_date внутри заявки")))
      (when (and (not (nil? contract)) (> (:prepay_percentage contract) 0))
        (let [date-to-check (-> (:application_date client-app)
                                (ctime/plus (ctime/days (or (:prepay_time contract) 0))))
              last-date (-> (sett/main-date-to-check)
                            (ctime/minus (ctime/days (:days-to-prepay sett/business-consts))))]
          ; если еще актуальна предоплата (45 дней с момента заявки)
          (when (ctime/after? date-to-check last-date)
            ; если позже сегодняшнего дня
            (if (ctime/after? date-to-check (sett/main-date-to-check))
              ; получаем дату с учетом выходных
              (tu/date-considering-weekends date-to-check)
              ; иначе получаем в виде месяца-года
              (ctime/date-time (ctime/year date-to-check) (ctime/month date-to-check) 1))))))))


(defn prepay
  "Получить сумму предоплаты (по договору)"
  [client-app]
  (let [summ (:summ client-app)
        contract (:clientcontract client-app)]
    (if (and (not (nil? contract))
             (> summ 0))
      (-> summ
          (* (:prepay_percentage contract))
          (/ 100))
      0)))


(defn prepay-c-money
  "Получить сумму (с валютой) предоплаты по договору"
  [client-app]
  (let [summ (:summ client-app)
        contract (:clientcontract client-app)]
    (mc/->c-money
      (if (and (not (nil? contract))
               (> summ 0))
        (-> summ
            (* (:prepay_percentage contract))
            (/ 100))
        0)
      (:c_id client-app))))


(defn prepay-total
  "Получить сумму предоплаты итого (для сводной таблицы уже)"
  [client-app]
  (let [prepay (prepay client-app)
        total (- prepay (- (or (:kt_rev client-app) 0) (or (:saldo client-app) 0)))]
    (if (and (not (nil? (prepay-date client-app)))
             (> total 0))
      total
      0)))


(defn prepay-total-c-money
  "Получить сумму (с валютой) предоплаты по заявке
  с учетом всех факторов типа даты предоплаты, сальдо и т.д."
  [client-app]
  (let [prep-cmoney (prepay-c-money client-app)
        total-summ (- (:summ prep-cmoney) (- (or (:kt_rev client-app) 0) (or (:saldo client-app) 0)))]
    (mc/->c-money
      (if (and (not (nil? (prepay-date client-app)))
               (> total-summ 0))
        total-summ
        0)
      (:c-id prep-cmoney))))




(defn dms->repaid-dms
  "Получить список [дата-деньги] с учетом предоплаты
	client-app - заявка
	dms-linked-to-app - список поставок в виде [дата-деньги], связанные с этой заявкой"
  [client-app dms-linked-to-app]
  ; т.к предоплата всегда гасится, несмотря на её дату, можем пренебречь вычислением её даты
	; и брать только её сумму
  (let [prep-total-cmoney (prepay-total-c-money client-app)]
    ; если есть сумма предоплаты
    (if (> (:summ prep-total-cmoney) 0)
      ; погашаем поставки суммой предоплаты
      (b-calcs/repay-datemoneys prep-total-cmoney dms-linked-to-app)
      ; иначе возвращаем поставки нетронутыми
      dms-linked-to-app)))


;; (def test-c-app {:id 1
;;                  :summ 1000
;;                  :c_id 3
;;                  :kt_rev 50
;;                  :saldo 20
;;                  :application_date (ctime/date-time 2016 8 12)
;;                  :clientcontract {:prepay_percentage 20}})

;; (prepay-c-money test-c-app)

;; (prepay-total-c-money test-c-app)

;; (dms->repaid-dms test-c-app [(b-calcs/->datemoney
;;                                (mc/->c-money 50 3)
;;                                (ctime/date-time 2016 8 6)
;;                                nil)
;;                              (b-calcs/->datemoney
;;                                (mc/->c-money 300 3)
;;                                (ctime/date-time 2016 8 1)
;;                                nil)
;;                              (b-calcs/->datemoney
;;                                (mc/->c-money 200 3)
;;                                (ctime/date-time 2016 8 20)
;;                                nil)])
















































