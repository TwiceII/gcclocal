;;;; =========================================================
;;;; Руты для работы с графиком поступления денег
;;;; =========================================================
(ns gcclocal.routes.money-diagram
  (:require [gcclocal.validation-utils :as v]
            [gcclocal.utils :as u]
            [gcclocal.settings :as sett]
            [gcclocal.model.categories-and-items :as ci]
            [gcclocal.db.crud :as crud]
            [gcclocal.routes.route-utils :as r-utils]
            [gcclocal.model.main-calc :as mc]
            [gcclocal.model.primarydocs :as pd]
            [ring.util.response :refer [response]]
            [clojure.set :refer [rename-keys]]
            [clj-time.core :as t]))


(defn validate-category
  [row]
  (-> {}
      (v/check-is-required row :name "Необходимо ввести название категории")))

(defn convert-category-add
  [row]
  (-> row
      (assoc :creation_datetime (t/now)
             :status 1)))


(defn validate-item-add
  [row table-key]
  (-> {}
      (v/check-is-date-required row :item_date
                                "Не передана дата"
                                "Дата в неправильном формате")
      (v/check-is-int-required row :category_id
                               "Не указана категория"
                               "Категория в неправильном формате")
      (v/check-is-float-required row :summ
                                 "Не передана сумма"
                                 "Сумма в неправильном формате")
      ; если нет предыдущих ошибок
      (#(u/when-or-skip % (and (not (:item_date %))
                               (not (:category_id %)))
                          (fn [e] (-> e
                                      ((fn [e]
                                         (u/when-or-skip
                                           e
                                           (t/before?
                                             (u/to-date (:item_date row))
                                             (sett/main-date-to-check))
                                           (fn [e] (u/add-to-vector-into-map
                                                     e
                                                     :item_date
                                                     "Нельзя ставить за прошедшие даты")))))
                                      ((fn [e]
                                         (u/when-or-skip
                                           e
                                           (ci/date-already-has-item?
                                             table-key
                                             (u/to-date (:item_date row))
                                             (u/to-int (:category_id row)))
                                           (fn [e] (u/add-to-vector-into-map
                                                     e
                                                     :item_date
                                                     "На эту дату уже есть запись")))))))))))


(defn validate-item-edit
  [row table-key]
  (-> {}
      (v/check-is-date-required row :item_date
                                "Не передана дата"
                                "Дата в неправильном формате")
      (v/check-is-int-required row :category_id
                               "Не указана категория"
                               "Категория в неправильном формате")
      (v/check-is-float-required row :summ
                                 "Не передана сумма"
                                 "Сумма в неправильном формате")
      ; если нет предыдущих ошибок
      (#(u/when-or-skip % (and (not (:item_date %))
                               (not (:category_id %)))
                          (fn [e] (-> e
                                      ((fn [e]
                                         (u/when-or-skip
                                           e
                                           (t/before?
                                             (u/to-date (:item_date row))
                                             (sett/main-date-to-check))
                                           (fn [e] (u/add-to-vector-into-map
                                                     e
                                                     :item_date
                                                     "Нельзя ставить за прошедшие даты")))))))))))


(defn convert-item-add
  [row]
  (-> row
      (u/in-hm->dates [:item_date])
      (u/in-hm->ints [:category_id])
      (u/in-hm->doubles [:summ])
      (crud/default-convert-on-add)))


(defn convert-item-edit
  [row]
  (-> row
      (u/in-hm->dates [:item_date])
      (u/in-hm->ints [:category_id])
      (u/in-hm->doubles [:summ])
      (crud/default-convert-on-edit)))



(defn validate-moneymovement
  [row]
  (let [add-error u/add-to-vector-into-map]
    (-> {}
        ; валидация переданного клиента
        (v/check-is-int-required row :client_id
                                 "Не передан клиент"
                                 "Неправильное значение для клиента")
        ; валидация макс.суммы
        (v/check-is-float-required row :max_amount
                                   "Не передана макс.сумма"
                                   "Неправильно передана макс.сумма")
        (u/when-or-skip (<= (u/to-double (or (:max_amount row) 1)) 0)
                        #(add-error % :max-amount
                                   "Невозможно переместить сумму с даты, не имеющей денег"))
        ; валидация суммы
        (v/check-is-float-required row :amount
                                   "Введите сумму" "Неправильно введена сумма")
        (#(u/when-or-skip
            % (not (:amount %))
            (fn [e]
              (let [amount-v (u/to-double (:amount row))]
                (-> %
                    (u/when-or-skip (<= amount-v 0)
                                    (fn [e] (add-error e :amount
                                               "Сумма должна быть больше 0")))
                    (u/when-or-skip (and (not (:max_amount %))
                                         (> amount-v
                                            (u/to-double (:max_amount row))))
                                    (fn [e] (add-error e :amount
                                               "Сумма не должна превышать максимально возможную"))))))))
        ; валидация "перемещено с просрочки"
        (v/check-is-boolean-required row :is_from_expired
                                     "Не передано просрочка или нет"
                                     "Неправильное значение для \"просрочка или нет\"")
        ; валидация "даты с" и "даты на"
        (#(u/when-or-skip
            % (not (:is_from_expired %))
            (fn [e]
              (let [is-from-expired? (u/to-boolean (:is_from_expired row))]
                (-> e
                    ((fn [e]
                      ; если не с "просрочки", то проверяем дату
                      (if (not is-from-expired?)
                        (-> e
                          (v/check-is-date-required row :from_date
                                                    "Не введена 'дата с'"
                                                    "Неправильный формат 'даты с'")
                          ((fn [ee] (u/when-or-skip ee (and (not (:from_date ee))
                                                           (t/before?
                                                             (u/to-date (:from_date row))
                                                             (sett/main-date-to-check)))
                                                   (fn [e] (add-error e :from_date
                                                              "'Дата с' должна быть позже текущей"))))))
                        ; если с просрочки, то "дата с" не учитывается
                        e)))
                    ((fn [e]
                      (-> e
                        ; "дата НА" должна всегда быть
                        (v/check-is-date-required row :to_date
                                                  "Не введена 'дата на'"
                                                  "Неправильный формат 'даты на'")
                        ((fn [e]
                           (u/when-or-skip e (not (:to_date e))
                                           (fn [e]
                                             (-> e
                                                 (u/when-or-skip
                                                   (t/before?
                                                     (u/to-date (:to_date row))
                                                     (sett/main-date-to-check))
                                                   (fn[e](add-error e :to_date "'Дата на' не должна быть прошедшей")))
                                                 (u/when-or-skip
                                                   (not is-from-expired?)
                                                   (fn [e]
                                                     (-> e
                                                       (u/when-or-skip (and
                                                                         (not (:from_date e))
                                                                         (t/equal?
                                                                           (u/to-date (:to_date row))
                                                                           (u/to-date (:from_date row))))
                                                                       (fn [e](add-error e :to_date "Даты должны быть разными")))))))))))))))))))
        ; валидация комментария
        (v/check-is-required row :comment "Необходимо ввести комментарий"))))

;; (validate-moneymovement {:max_amount "1000.45" :amount "2000" :is_from_expired "false"
;;                          :from_date "03.08.2016" :to_date "04.08.2016"
;;                          :comment "hey there"
;;                          })

(defn convert-moneymovement-add
  [row]
  (-> row
      (#(if (:is_from_expired %)
         (assoc % :from_date nil)
         %))
      (u/in-hm->remove [:max_amount])
      (u/in-hm->ints [:client_id])
      (u/in-hm->dates [:from_date :to_date])
      (u/in-hm->doubles [:amount])
      (u/in-hm->booleans  [:is_from_expired])
      (assoc :creation_datetime (t/now)
             :status 1)))

(defn validate-paymentplan
  [row]
  (-> {}
      (v/check-is-int-required row :client_application_id
                               "Введите заявку" "Неправильно введена заявка")
      (v/check-is-float-required row :amount
                                 "Введите тоннаж" "Неправильно введен тоннаж")
      (v/check-is-date-required row :plan_date
                                "Введите дату" "Неправильно введена дата")
      (v/check-is-int-required row :supplier_id
                               "Не передан поставщик" "Неправильно передан поставщик")))

(defn convert-paymentplan-add
  [row]
  (-> row
      (u/in-hm->ints [:supplier_id :client_application_id])
      (u/in-hm->dates [:plan_date])
      (u/in-hm->doubles [:amount])
;;       (rename-keys {:date :plan_date :clientapp :client_application_id})
      (assoc :creation_datetime (t/now)
             :status 1
             :last_edit_datetime (t/now))))


;; (convert-paymentplan-add
;;   {:supplier_id "4324"
;;    :clientapp "6546"
;;    :date "26.01.2017"
;;    :amount "5435.34"})

(def crud-routes-params
  {:incomecategory          {:route-name "incomecategory"
                             :get-all-rows-fn #(crud/default-get-all-rows
                                                 :mainapp_incomecategory)
                             :validate-add-fn validate-category
                             :convert-add-fn convert-category-add
                             :validate-edit-fn validate-category
                             :table-key :mainapp_incomecategory}
   :expensecategory         {:route-name "expensecategory"
                             :get-all-rows-fn #(crud/default-get-all-rows
                                                 :mainapp_expensecategory)
                             :convert-add-fn convert-category-add
                             :validate-add-fn validate-category
                             :validate-edit-fn validate-category
                             :table-key :mainapp_expensecategory}
   :incomeitem              {:route-name "incomeitem"
                             :get-all-rows-fn ci/actual-income-items
                             :validate-add-fn #(validate-item-add % :mainapp_incomeitem)
                             :convert-add-fn convert-item-add
                             :validate-edit-fn #(validate-item-edit % :mainapp_incomeitem)
                             :convert-edit-fn convert-item-edit
                             :table-key :mainapp_incomeitem}
   :expenseitem             {:route-name "expenseitem"
                             :get-all-rows-fn ci/actual-expense-items
                             :validate-add-fn #(validate-item-add % :mainapp_expenseitem)
                             :convert-add-fn convert-item-add
                             :validate-edit-fn #(validate-item-edit % :mainapp_expenseitem)
                             :convert-edit-fn convert-item-edit
                             :table-key :mainapp_expenseitem}
   :moneymovement           {:route-name "moneymovement"
                             :get-all-rows-fn #(crud/default-get-all-rows
                                                 :mainapp_moneymovement)
                             :validate-add-fn validate-moneymovement
                             :convert-add-fn convert-moneymovement-add
;;                              :add-fn #(do
;;                                         (println "add-movement")
;;                                         (println %))
                             :validate-edit-fn validate-moneymovement
                             :table-key :mainapp_moneymovement}
   :shippingplan            {:route-name "shippingplan"
                             :get-all-rows-fn #(mc/shippingplans-of-suppliers (sett/main-date-to-check))
                             :validate-add-fn validate-paymentplan
                             :convert-add-fn convert-paymentplan-add
                             :table-key :supplier_shippings_plans}
   })

(defn moneyincomes-index
  "Главная для поступления"
  [req]
  (r-utils/render-with-base-keys req "public/templates/moneyincomediagram.html"
                                 {:title "График поступления денег"}))


(defn suppliershippingsplan-index
  "График план.поставок от поставщиков"
  [req]
  (r-utils/render-with-base-keys req "public/templates/suppliershippingsplan.html"
                                 {:title "График плановых поставок от поставщиков"}))


;; (defn add-supplierpaymentplan
;;   [req]
;;   (r-utils/check-for-errors-and-return-response
;;     (validate-paymentplan (get-in req [:body :row]))
;;     #(println "successfull add supplierpaymentplan")))


(defn to-json-client-payments
  [payments]
  ; делаем короткую версию :clientapplication
  (map #(update %
                :clientapplication
                (fn[ov]
                  (when (not (nil? ov))
                    {:id (get ov :id)
                     :name (get ov :name)})))
       payments))

;; (->
;;   (map #(update % :payments (fn[ov](to-json-client-payments ov)))
;;        all-payments))

(defn get-payments-from-clients
  "Получить оплаты от клиентов"
  [req]
  (let [rows (->> (mc/payments-from-clients (sett/main-date-to-check))
                  (map #(update % :payments (fn[ov](to-json-client-payments ov))))
                  ;; отфильтровываем без оплат клиентов
                  (filter #(not (u/nil-or-empty? (:payments %)))))]
    (response {:rows rows})))


(defn get-init-balance-on-date
  "Получить начальный баланс"
  [req]
  (let [rows (pd/last-total-balance-on-date)
        summ (if (u/nil-or-empty? rows)
               0
               (:summ (first rows)))]
    (response {:rows summ})))


(defn get-all-planpayments-for-suppliers
  "Получить плановые оплаты по поставщикам"
  [req]
  (let [rows nil]
    (response {:rows rows})))




