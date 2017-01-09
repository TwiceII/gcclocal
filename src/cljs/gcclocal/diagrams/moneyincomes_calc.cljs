(ns gcclocal.diagrams.moneyincomes-calc
  (:require [gcclocal.comm.utils :as u]))


(defn total-summ-from-datemoneys
  "Общая сумма с дат-денег (предпол. что в одной валюте)"
  [dms]
  (reduce (fn [s dm] (+ s (get-in dm [:c-money :summ]))) 0 dms))


(defn summ-from-movements
  "Общая сумма с перемещений"
  [ms]
  (reduce (fn [s m] (+ s (:amount m))) 0 ms))


(defn total-summ-cd
  "Получить общую сумму с данных ячейки
  cell-data - содержит [datemoneys], [from-movements], [to-movements]"
  [cell-data]
  (let [noe? u/nil-or-empty?
        dms (:datemoneys cell-data)
        from-m (:from-movements cell-data)
        to-m (:to-movements cell-data)]
    (cond-> 0
            (not (noe? dms)) (+ (total-summ-from-datemoneys dms))
            (not (noe? from-m)) (- (summ-from-movements from-m))
            (not (noe? to-m)) (+ (summ-from-movements to-m)))))


(defn new-cell-info
  "Получить хм cell info для ячейки"
  [col-id row-id expired?
   datemoneys from-movements to-movements]
  (let [misc-data {:show-inner-datesumms true}
        cd (->
             {:datemoneys datemoneys
              :from-movements from-movements
              :to-movements to-movements
              :expired? expired?}
             (#(u/when-or-skip % (< (total-summ-cd %) 0)
                                  (assoc % :error-cell? true))))]
    {:col-id col-id
     :row-id row-id
     :misc-data misc-data
     :cell-data cd}))


(defn cell-info-for-date-and-client
  "Получить данные по одной ячейке (за опред.дату и клиента)"
  [d client-id all-payments all-movements]
  (let [client-payments (:payments (some #(when (= (get-in % [:client :id]) client-id) %)
                                         all-payments))
        datemoneys (filter #(= (:date %) d) client-payments)
        from-movements (filter #(and (= (:from_date %) d)
                                     (= (:client_id %) client-id)) all-movements)
        to-movements (filter #(and (= (:to_date %) d)
                                   (= (:client_id %) client-id)) all-movements)]
    (new-cell-info d client-id false
                    datemoneys from-movements to-movements)))


(defn cell-info-for-expired
  "Получить данные для ячейки 'просрочка' по клиенту"
  [client-id expired-dates all-payments all-movements date-to-check]
  (let [client-payments (:payments (some #(when (= (get-in % [:client :id]) client-id) %)
                                         all-payments))
        expired-datemoneys (filter #(u/in? expired-dates (:date %))
                                  client-payments)
        from-movements (filter #(and (or (u/moment-before? (u/iso-str->moment (:from_date %))
                                                           date-to-check)
                                         (nil? (:from_date %)))
                                     (= (:client_id %) client-id))
                               all-movements)
        ; перемещений НА просрочку не может быть
        to-movements nil]
    (new-cell-info "expired" client-id true
                    expired-datemoneys from-movements to-movements)))


(defn clients-cell-infos
  "Получаем полные сведения для ячеек (по всем клиентам)
  (данные по суммам, координаты, перемещения)"
  [all-clients all-visible-dates all-payments all-movements]
  (do
    (reduce (fn [ci-hm client]
              (assoc ci-hm
                (:id client)
                (reduce (fn [m d]
                          (assoc m d
                            (cell-info-for-date-and-client
                              d (:id client)
                              all-payments all-movements)))
                        {}
                        all-visible-dates)))
            {}
            all-clients)))


(defn clients-expired-cell-infos
  "Получить просрочки по клиентам"
  [all-clients expired-dates all-payments all-movements date-to-check]
  (do
    (reduce (fn [ci-hm client]
              (assoc ci-hm (:id client)
                (cell-info-for-expired (:id client) expired-dates
                                       all-payments all-movements
                                       date-to-check)))
            {}
            all-clients)))


(defn all-unique-dates
  "Получить уникальные даты со всех источников"
  [clientpayments movements incomeitems expenseitems]
  (let [ ; даты с оплат клиентов
         client-dates (mapcat #(map :date (:payments %)) clientpayments)
         ; даты с передвижений
         movement-dates (mapcat #(cond-> []
                                        (:from_date %) (conj (:from_date %))
                                        (:to_date %) (conj (:to_date %)))
                                movements)
         ; даты с записей категорий
         iitems-dates (map :item_date incomeitems)
         eitems-dates (map :item_date expenseitems)]
    (-> (concat client-dates movement-dates iitems-dates eitems-dates)
        distinct)))


(defn all-visible-dates
  "Даты видимые (не просроченные)"
  [all-dates date-to-check]
  (into []
        (u/sort-dates false
          (distinct (filter #(or (u/moment-after? (u/iso-str->moment %)
                                                  date-to-check)
                                 (u/moment-same? (u/iso-str->moment %)
                                                 date-to-check))
                            all-dates)))))

(defn all-expired-dates
  "Просроченные даты"
  [all-dates date-to-check]
  (filter #(u/moment-before? (u/iso-str->moment %) date-to-check) all-dates))


(defn total-for-date-in-items
  "Получить за определенную дату итого по записям (расхода или дохода)"
  [items d]
  (reduce (fn [summ item] (+ summ (:summ item)))
          0
          (filter #(= d (:item_date %)) items)))


(defn total-income-cell-summs
  "Получить значения для строки итого (по датам)
  для поступлений денег"
  [all-visible-dates cl-cell-infos income-cat-items]
  (let [total-i (reduce (fn [totals-m d]
            (let [cc-sum (reduce-kv (fn [summ client-key datesmap]
                                      (+ summ (total-summ-cd
                                                (:cell-data (get datesmap d)))))
                                    0 cl-cell-infos)
                  ic-summ (total-for-date-in-items income-cat-items d)]
              (assoc totals-m d (+ cc-sum ic-summ))))
          {} all-visible-dates)]
    total-i))


(defn total-income-expired-summ
  "Получить итоговую сумму по просрочкам (для поступлений)"
  [cl-expired-cinfos-map]
  (reduce-kv (fn[s k v]
              (+ s (total-summ-cd (:cell-data v))))
              0 cl-expired-cinfos-map))


(defn total-expense-cell-summs
  "Получить значения для строки итого (по датам)
  по расходам"
  [all-visible-dates expense-cat-items]
  (reduce (fn [totals-m d]
            (let [ec-summ (total-for-date-in-items expense-cat-items d)]
              (assoc totals-m d ec-summ)))
          {} all-visible-dates))


(defn init-balance-on-end
  "Получить остатки на конец по датам"
  [init-balance all-visible-dates
   total-income-summs total-expense-summs]
  (first (reduce (fn [[balance-m acc-s] d]
                   (let [summ (-> acc-s
                                  (+ (or (get total-income-summs d) 0))
                                  (- (or (get total-expense-summs d) 0)))]
                     [(assoc balance-m d summ)
                      summ]))
                 [{} init-balance], all-visible-dates)))


(defn init-balance-on-start
  "Получить остатки на начало"
  [init-balance all-visible-dates
   init-bs-on-end]
  (-> {}
      (#(reduce (fn [balance-m [d1 d2]]
                  (assoc balance-m d2 (get init-bs-on-end d1)))
                % (partition 2 1 all-visible-dates)))
      (assoc (first all-visible-dates) init-balance)))


(defn total-init-balance
  "Получить итого остатки"
  [init-bs-on-end all-visible-dates]
  (or (get init-bs-on-end (last all-visible-dates)) 0))



(defn calc-data
  "Посчитать все данные и вернуть в виде хм"
  [date-to-check
   all-clients
   client-payments
   all-movements
   income-items
   expense-items
   init-balance-on-date
   ]
  (let [all-dates (all-unique-dates client-payments
                                    all-movements
                                    income-items
                                    expense-items)
        all-visible-d (all-visible-dates all-dates date-to-check)
        clients-cinfos (clients-cell-infos all-clients
                                           all-visible-d
                                           client-payments
                                           all-movements)
        all-expired-d (all-expired-dates all-dates date-to-check)
        client-expired-cinfos (clients-expired-cell-infos all-clients
                                                          all-expired-d
                                                          client-payments
                                                          all-movements
                                                          date-to-check)
        total-i-cell-summs (total-income-cell-summs all-visible-d
                                                    clients-cinfos
                                                    income-items)
        total-i-expired-summ (total-income-expired-summ client-expired-cinfos)
        total-e-cell-summs (total-expense-cell-summs all-visible-d
                                                     expense-items)
        init-bs-on-end (init-balance-on-end init-balance-on-date
                                            all-visible-d
                                            total-i-cell-summs
                                            total-e-cell-summs)
        init-bs-on-start (init-balance-on-start init-balance-on-date
                                                all-visible-d
                                                init-bs-on-end)
        total-init-bs (total-init-balance init-bs-on-end all-visible-d)]
    {:all-visible-dates all-visible-d
     :clients-cinfos clients-cinfos
     :clients-expired-cinfos client-expired-cinfos
     :total-i-cell-summs total-i-cell-summs
     :total-i-expired-summ total-i-expired-summ
     :total-e-cell-summs total-e-cell-summs
     :init-balances-on-end init-bs-on-end
     :init-balances-on-start init-bs-on-start
     :total-init-balances total-init-bs}))
