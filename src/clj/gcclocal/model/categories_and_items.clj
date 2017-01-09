;; =========================================================
;; функции для работы с категориями (расхода/дохода)
;; и их записями
;; =========================================================
(ns gcclocal.model.categories-and-items
  (:require [gcclocal.db.sqlutils :as sql]
            [gcclocal.db.crud :as crud]
            [gcclocal.settings :as sett]
            [clj-time.core :as t]
            [honeysql.core :as h]
            [honeysql.helpers :as s]))


(defn actual-category-items
  "Получить все актуальные записи кастомных категорий (дохода/расхода и т.д)"
  [items-tk category-tk]
  (let [base-sql (sql/q-base-select items-tk :i)]
    (sql/m-select (-> base-sql
                      (s/merge-left-join [category-tk :c] [:= :c.id :i.category_id])
                      (s/merge-where [:= :c.status 1])
                      (s/merge-where [:>= :i.item_date (sett/main-date-to-check)])
                      (sql/order-by-field "-creation_datetime")))))

; актуальные записи по доходам
(def actual-income-items (partial actual-category-items
                                  :mainapp_incomeitem
                                  :mainapp_incomecategory))
; актуальные записи по расходам
(def actual-expense-items (partial actual-category-items
                                  :mainapp_expenseitem
                                  :mainapp_expensecategory))

(defn date-already-has-item?
  "Проверка, что за эту дату и за эту категорию уже есть запись"
  [table-key d cat-id]
  (> (:count (sql/m-select-single (->
                                    (s/select :%count.*)
                                    (s/from table-key)
                                    (s/where [:= :status 1])
                                    (s/merge-where [:= :category_id cat-id])
                                    (s/merge-where [:= :item_date d])))) 0))


;; (date-already-has-item? :mainapp_expenseitem (t/date-time 2016 3 20) 3)

