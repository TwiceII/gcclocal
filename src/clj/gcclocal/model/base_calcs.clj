;; =========================================================
;; Базовые функции для работы с датасуммами и т.д.
;; =========================================================
(ns gcclocal.model.base-calcs
  (:require [gcclocal.utils :as u]
            [gcclocal.model.money-calcs :as mc]
            [gcclocal.time-utils :as tu]
            [clj-time.core :as t]
            ))

; record для денег на дату с привязкой к заявке
(defrecord datemoney [c-money date clientapplication])


(defn parts->datemoney
  "Конструктор для получения datemoney"
  [summ c-id date clientapplication]
  (->datemoney (mc/->c-money summ c-id)
               date
               clientapplication))


(defn repay-datemoneys
  "Получить список datemoney по загашению какой-то начальной величины.
  Весь результирующий список конвертируется в одну валюту
  (по умолчанию в валюте начальной величины, которую загашают)

	init-cmoney-to-repay - начальная величина денег (c-money), которую загашают
	init-datesumms - список datemoney, которым загашают
  (может быть как по дням, так и по месяцам)
  currency-id - явно указанная валюта, в которую конвертируются все величины в расчете
  (если не указана, берется валюта начальной величины)
  "
  ([init-cmoney-to-repay init-datemoneys] (repay-datemoneys init-cmoney-to-repay init-datemoneys
                                                            (or (:c-id init-cmoney-to-repay)
                                                                (:id mc/default-currency))))
  ([init-cmoney-to-repay init-datemoneys currency-id]
   (let [ ; сортируем список datemoneys
          sorted-datemoneys (tu/sort-by-date-key init-datemoneys)
          ; основная валюта, в которой будут производиться расчеты
          main-c-id currency-id
          ; конвертируем начальную величину в основную валюту
          init-cmoney-in-main-c (mc/c-money->to-c-id init-cmoney-to-repay main-c-id)]
     ; пробегаемся по всем датам и послед. погашаем сумму
     (loop [result-dmoneys []
            check-dmoneys sorted-datemoneys
            cmoney-to-repay (or init-cmoney-in-main-c
                                (mc/->c-money 0 main-c-id))]
       (if (empty? check-dmoneys)
         result-dmoneys
         (let [[dmoney & remaining-dmoneys] check-dmoneys]
           ; конв. datemoney в нужную валюту
           (let [summ-in-main-c (:summ (mc/c-money->to-c-id (:c-money dmoney)
                                                            main-c-id))]
             (recur
               (conj result-dmoneys
                     (->datemoney
                       (mc/->c-money
                         (u/subtr-or-zero summ-in-main-c (:summ cmoney-to-repay))
                         main-c-id)
                       (:date dmoney)
                       (:clientapplication dmoney)))
               ; передаем оставшиеся dmoneys
               remaining-dmoneys
               ; уменьшаем общую сумму
               (assoc cmoney-to-repay :summ (u/subtr-or-zero (:summ cmoney-to-repay)
                                                             summ-in-main-c))))))))))


;; (repay-datemoneys nil
;;                   [(->datemoney
;;                      (mc/c-money-w-code 1000 "USD")
;;                      (t/date-time 2016 8 10)
;;                      nil)
;;                    (->datemoney
;;                      (mc/c-money-w-code 500 "USD")
;;                      (t/date-time 2016 8 9)
;;                      nil)
;;                    (->datemoney
;;                      (mc/c-money-w-code 2000 "USD")
;;                      (t/date-time 2016 8 12)
;;                      nil)] 3)


(defn datemoneys-grouped-by-dates-one-curr-one-app
  "Сгруппировать массив справочника datemoney (все в одной валюте, все ссылаются на одну поставку)
  по дням
  only-non-null - признак, чтобы брать только не нулевые суммы (если не передан, то true)"
  ([dms c-id client-app] (datemoneys-grouped-by-dates-one-curr-one-app dms c-id client-app true))
  ([dms c-id client-app only-non-null?]
   ; сначала получаем в виде хм
   (let [dms-hm
         (reduce (fn[m dm]
                   ; если брать только не нулевые суммы
                   (if (and only-non-null?
                            (= (get-in dm [:c-money :summ]) 0))
                     m
                     (update m (:date dm) (fn[old-dms]
                                            (update-in old-dms
                                                       [:summ]
                                                       #(+ (or % 0) (get-in dm [:c-money :summ])))))))
                        {} dms)
         ; потом в виде вектора мэпов
         dms-vect (reduce-kv (fn [vect k v]
                               (conj vect (->datemoney
                                            (mc/->c-money (:summ v) c-id)
                                            k
                                            client-app)))
                             [] dms-hm)]
     (tu/sort-by-date-key dms-vect))))

;; (datemoneys-grouped-by-dates-one-curr-one-app
;;   [(->datemoney
;;      (mc/->c-money 200 2)
;;      (t/date-time 2016 6 12)
;;      nil)
;;    (->datemoney
;;      (mc/->c-money 600 2)
;;      (t/date-time 2016 6 7)
;;      nil)
;;    (->datemoney
;;      (mc/->c-money 0 2)
;;      (t/date-time 2016 6 2)
;;      nil)
;;    (->datemoney
;;      (mc/->c-money 25 2)
;;      (t/date-time 2016 6 1)
;;      {:id 34})
;;    (->datemoney
;;      (mc/->c-money 10 2)
;;      (t/date-time 2016 6 7)
;;      {:id 34})]
;;   2
;;   {:id "yep"}
;;   )










