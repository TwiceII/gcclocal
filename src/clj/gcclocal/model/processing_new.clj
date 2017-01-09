;;;; =========================================================
;;;; Функции для автоматизации с 1С
;;;; =========================================================
(ns gcclocal.model.processing-new
  (:require [gcclocal.db.sqlutils :as sql]
            [honeysql.helpers :as s]
            [gcclocal.time-utils :as tu]
            [gcclocal.logger :as logger]
            [gcclocal.db.crud :as crud]
            [gcclocal.utils :as u]
            [gcclocal.xml-utils :as xml-u]
            [gcclocal.validation-utils :as v]
            [gcclocal.model.money-calcs :as mon-c]
            [gcclocal.model.primarydocs :as pd]
            [clojure.data.xml :as xml]
            [clojure.zip :as zip]
            [clojure.string :refer [blank? lower-case]]
            [clj-time.core :as t]
            [clojure.pprint :refer [pprint]]))

;;; ---------------------------------------------------------------------
;;; Настройки
;;;
(def e-meta {:Client          {:group :clients
                               :table :catalogs_client
                               :ent-name "Клиент"}
             :Supplier        {:group :suppliers
                               :table :catalogs_supplier
                               :ent-name "Поставщик"}
             :Contract        {:group :contracts
                               :table :primarydocs_clientcontract
                               :ent-name "Договор с клиентом"}
             :Order           {:group :orders
                               :table :primarydocs_clientapplication
                               :ent-name "Заявка"}
             :Payment         {:group :payments
                               :table {:Client :clientpayments
                                       :Supplier :supplier_payments_from}
                               :ent-name "Платежка входящая"}
             :Selling         {:group :sellings
                               :table {:Client :primarydocs_departure
                                       :Supplier :supplier_sellings}
                               :ent-name "Реализация ТМЗ и услуг"}
             :Posting         {:group :postings
                               :table {:Client :clientfines
                                       :Supplier :supplier_shippings}
                               :ent-name "Поступление ТМЗ"}
             :PaymentOut      {:group :paymentouts
                               :table :supplier_payments
                               :ent-name "Платежка исходящая"}})


(def base-fields {:UUID {:ftype :main-uuid
                         :row-field :uuid_1c}
                  :Operation {:ftype :op-type}})

(def base-and-name-fields (merge base-fields {:Name {:ftype :str
                                                     :row-field :name}}))


(def client-or-supplier-fields (merge base-fields
                                      {:Supplier {:ftype :foreign-uuid
                                                  :row-field :supplier_id
                                                  :optional? true
                                                  :foreign-meta (:Supplier e-meta)}
                                       :Client {:ftype :foreign-uuid
                                                :row-field :client_id
                                                :optional? true
                                                :foreign-meta (:Client e-meta)}}))

(def cmoney-fields {:Sum {:ftype :numeric
                          :row-field :summ}
                    :Currency {:ftype :currency
                               :row-field :c_id}})


(def entry-params
    ;; клиенты
    {:Client             {:index 1
                          :e-meta (:Client e-meta)
                          :fields base-and-name-fields}
     ;; поставщики
     :Supplier           {:index 2
                          :e-meta (:Supplier e-meta)
                          :fields base-and-name-fields}
     ;; договоры
     :Contract           {:index 3
                          :e-meta (:Contract e-meta)
                          :fields (merge base-and-name-fields
                                         {:Client {:ftype :foreign-uuid
                                                   :row-field :client_id
                                                   :foreign-meta (:Client e-meta)}})}
     ;; заявки
     :Order              {:index 4
                          :e-meta (:Order e-meta)
                          :fields (merge base-fields
                                         cmoney-fields
                                         {:Number {:ftype :str
                                                   :row-field :name}
                                          :Date {:ftype :date
                                                 :row-field :application_date}
                                          :ProductNum {:ftype :numeric
                                                       :row-field :amount}
                                          :Client {:ftype :foreign-uuid
                                                   :row-field :client_id
                                                   :foreign-meta (:Client e-meta)}
                                          :Contract {:ftype :foreign-uuid
                                                     :row-field :client_contract_id
                                                     :foreign-meta (:Contract e-meta)}})}
     ;; платежные поручения входящие
     :Payment            {:index 5
                          :e-meta (:Payment e-meta)
                          :fields (merge client-or-supplier-fields
                                         cmoney-fields
                                         {:Number {:ftype :str
                                                   :row-field :name}
                                          :Date {:ftype :date
                                                 :row-field :doc_date}
                                          :Contract {:ftype :foreign-uuid
                                                     :row-field :client_contract_id
                                                     :optional? true
                                                     :foreign-meta (:Contract e-meta)}
                                          :Order {:ftype :foreign-uuid
                                                  :row-field :client_application_id
                                                  :optional? true
                                                  :foreign-meta (:Order e-meta)}})
                          :mut-exclusives [:Client :Supplier]}
     ;; реализации ТМЗ
     :Selling            {:index 6
                          :e-meta (:Selling e-meta)
                          :fields (merge client-or-supplier-fields
                                         cmoney-fields
                                         {:Number {:ftype :str
                                                   :row-field :doc_name}
                                          :Date {:ftype :date
                                                 :row-field :doc_date}
                                          :Contract {:ftype :foreign-uuid
                                                     :row-field :client_contract_id
                                                     :optional? true
                                                     :foreign-meta (:Contract e-meta)}
                                          :Order {:ftype :foreign-uuid
                                                  :row-field :client_application_id
                                                  :optional? true
                                                  :foreign-meta (:Order e-meta)}})
                          :mut-exclusives [:Client :Supplier]}
     ;; поступления ТМЗ
     :Posting            {:index 7
                          :e-meta (:Posting e-meta)
                          :fields (merge client-or-supplier-fields
                                         cmoney-fields
                                         {:Number {:ftype :str
                                                   :row-field :doc_name}
                                          :Date {:ftype :date
                                                 :row-field :doc_date}
                                          :Contract {:ftype :foreign-uuid
                                                     :row-field :client_contract_id
                                                     :optional? true
                                                     :foreign-meta (:Contract e-meta)}
                                          :Order {:ftype :foreign-uuid
                                                  :row-field :client_application_id
                                                  :optional? true
                                                  :foreign-meta (:Order e-meta)}})
                          :mut-exclusives [:Client :Supplier]}

     ;; платежные поручения исходящие
     :PaymentOut         {:index 8
                          :e-meta (:PaymentOut e-meta)
                          :fields (merge base-fields
                                         cmoney-fields
                                         {:Number {:ftype :str
                                                   :row-field :name}
                                          :Date {:ftype :date
                                                 :row-field :doc_date}
                                          :Supplier {:ftype :foreign-uuid
                                                     :row-field :supplier_id
                                                     :foreign-meta (:Supplier e-meta)}})}
     })

;; поля для остатков
(def remain-fields-params
  {:Date {:ftype :date
          :row-field :balance_date}
   :Currency {:ftype :currency
              :row-field :balance_currency}
   :CurrencySum {:ftype :numeric
                 :row-field :balance_summ}})


(defn remain->str
  "Получить в строчном виде хм остатка"
  [remain]
  (str (tu/datetime-raw->str (:balance_date remain)) ": "
       (:balance_summ remain) " " (mon-c/id->ccode (:balance_currency remain))))


;;; -------------------------------------------------------------------------
;;; SQL helpers
(defn- get-by-uuid [table-key uuid]
  "Получить сущность по uuid_1c"
  (sql/m-select-single (->
                         (s/select :*)
                         (s/from table-key)
                         (s/where [:= :uuid_1c uuid]))))


(defn- delete-row-by-uuid
  "Удалить (архивировать сущность) по uuid_1c"
  [table-key uuid]
  ;; если не найдет по такому uuid то просто ничего не произойдет
  (sql/update-by-field table-key "uuid_1c" uuid {:status 2}))


(defn has-uuid-in-prev-ops?
  "Есть ли uuid по сущности в предыдущих операциях"
  [uuid entry-key prev-ops]
  (as-> prev-ops x
        (get x entry-key)
        (filter #(or (= (:operation-type %) :update)
                     (= (:operation-type %) :add))
                x)
        (some #(= (get-in % [:row :uuid_1c]) uuid) x)))


(defn has-uuid-of-entry?
  "Есть ли uuid по сущности где-либо: в базе или в пред.операциях"
  [uuid entry-key entry-table-key prev-ops]
  ;; либо в базе должно быть, либо в списке предыдущих
  (or (has-uuid-in-prev-ops? uuid entry-key prev-ops)
      (get-by-uuid entry-table-key uuid)))



(defn add-new-remain
  "Добавить остаток"
  [remain-row]
  (crud/default-add-row :balances_on_dates (-> remain-row
                                               (assoc :creation_datetime (tu/now-datetime)))))

;;; -------------------------------------------------------------------------
;;; Валидация
;;;
(defn- add-new-error
  "Добавить новый вектор с ошибками"
  [error-type errors error-msg]
  (conj errors {:error-msg error-msg
                :error-type error-type}))

(def add-critical-error (partial add-new-error :critical))
(def add-tolerable-error (partial add-new-error :tolerable))

(defn has-critical-errors?
  "Проверка, что среди ошибок есть критические"
  [errors]
  (some (fn [v] (some #(= :critical (get % :error-type)) v)) (vals errors)))

(defn errors->str
  "Получить все ошибки в одной строке, разделенные точкой-запятыми (для исключений)"
  [errors]
  (->> errors
       seq
       vals
       (mapcat #(map :error-msg %))
       (interpose "; ")
       (apply str)))


(defn required-field-wrapper
  [entry-row entry-tag field val-fn]
  (let [v (get entry-row entry-tag)]
    (if (not (blank? v))
      (val-fn v)
      (if (:optional? field)
        []
        (add-critical-error [] (str "Не передано поле: " entry-tag))))))

;; --- мультиметоды по валидации
(defmulti validate-field
  "Валидация полей в entry"
  (fn [entry-row entry-tag field & extra-params] (:ftype field)))

(defmethod validate-field :op-type
  [entry-row entry-tag field]
  (required-field-wrapper
    entry-row
    entry-tag
    field
    #(if (or (= % "U")
             (= % "D"))
       [] ; нет ошибок
       (add-critical-error [] (str "Тип операции Operation " %
                                   " неопознан (должен быть U или D)")))))

(defmethod validate-field :main-uuid
  [entry-row entry-tag field]
  (required-field-wrapper
    entry-row
    entry-tag
    field
    #(if (= (count %) 36)
      [] ; нет ошибок
      (add-critical-error [] "UUID неправильного формата"))))

(defmethod validate-field :numeric
  [entry-row entry-tag field]
  (required-field-wrapper
    entry-row
    entry-tag
    field
    #(if (v/is-float? %)
       []
       (add-tolerable-error [] (str "Неправильный формат для числа " entry-tag ": " %)))))

(defmethod validate-field :str
  [entry-row entry-tag field]
  (required-field-wrapper
    entry-row
    entry-tag
    field
    (fn[_](-> []))))

(defmethod validate-field :date
  [entry-row entry-tag field]
  (required-field-wrapper
    entry-row
    entry-tag
    field
    (fn[d](if (v/is-date? d)
            []
            (add-tolerable-error [] ("Неправильный формат для даты " entry-tag ": " d))))))


(defmethod validate-field :foreign-uuid
  [entry-row entry-tag field prev-ops]
  (required-field-wrapper
    entry-row
    entry-tag
    field
    (fn[f-uuid]
      (let[{{f-group :group f-table :table f-str :ent-name} :foreign-meta} field]
       (if-not (has-uuid-of-entry? f-uuid f-group f-table prev-ops)
         (add-tolerable-error [] (str f-str " с таким UUID не найден(-а)"))
         [])))))


(defmethod validate-field :default
  [entry-row entry-tag field]
  (required-field-wrapper
    entry-row
    entry-tag
    field
    (fn[_](-> []))))


(defn validate-entry
  "Валидация entry по его параметрам (для Update и Add)
  возвращает список ошибок (если есть), либо пустой"
  [entry entry-params prev-ops]
  (let [fields (:fields entry-params)
        errors {}]
    (-> errors
        ;; валидируем по каждому полю и получаем список ошибок
        ((fn[e](reduce-kv (fn [m tag field]
                            (u/if-not-empty-let
                              [f-errors (if (= (:ftype field) :foreign-uuid)
                                          (validate-field entry tag field prev-ops) ; для :foreign-uuid передаем еще остальные операции
                                          (validate-field entry tag field))]
                              (assoc m tag f-errors)
                              m))
                          e
                          fields
                          )))
        ;; валидируем взаимноисключающие поля типа Client и Supplier (если есть)
        (u/not-empty-fn-or-skip
          (:mut-exclusives entry-params)
          (fn[m-es prev-errors]
            ;; только 1 поле из списка взаимоискл. должно быть заполнено
            (if (not= 1 (count (filter #(not (blank? (get entry %))) m-es)))
              (assoc prev-errors :general (add-critical-error [] (str "Хотя бы/только 1 поле из " m-es
                                                            " должно быть заполнено")))
              prev-errors))) ; нормально, возвращаем пред.ошибки
        )))


(defn check-single-field
  [errors-map tag entry entry-params]
  (let [field (get-in entry-params [:fields tag])]
    (cond-> errors-map
            (not (nil? field)) (u/not-empty-or-skip [e (validate-field entry tag field)]
                                                    (assoc tag e)))))

(defn check-main-fields
  "Проверка основных полей документа (UUID и Operation)"
  [entry entry-params]
  (-> {}
      (check-single-field :Operation entry entry-params)
      (check-single-field :UUID entry entry-params)))

;;; ---------------------------------------------------------------------
;;; Конвертирование полей из entry в row для записи в БД
;;;
(defn check-empty-or-convert
  [entry-value field conv-fn]
  (if (blank? entry-value)
    (if (:optional? field)
      nil
      (throw (Exception. "Обяз.поле пустое (упущено на этапе валидации?)")))
    (conv-fn entry-value)))

(defmulti entry-value->row-field
  "Мультиметод конвертирования поля из entry в поле для row"
  (fn [entry-value field] (:ftype field)))

(defmethod entry-value->row-field :numeric
  [entry-value field]
  (check-empty-or-convert entry-value
                          field
                          #(u/to-double %)))

(defmethod entry-value->row-field :str
  [entry-value field]
  (check-empty-or-convert entry-value
                          field
                          #(-> %)))

(defmethod entry-value->row-field :date
  [entry-value field]
  (check-empty-or-convert entry-value
                          field
                          #(-> (tu/parse %))))

(defmethod entry-value->row-field :currency
  [entry-value field]
  (check-empty-or-convert entry-value
                          field
                          #(-> (mon-c/ccode->id %))))

(defmethod entry-value->row-field :foreign-uuid
  [entry-value field]
  (check-empty-or-convert entry-value
                          field
                          #(-> {:f-table (get-in field [:foreign-meta :table])
                                :f-uuid %})))

(defmethod entry-value->row-field :default
  [entry-value field]
  (check-empty-or-convert entry-value
                          field
                          #(-> %)))


(defn entry-values->row-fields
  "Конвертировать поля entry в поля row по параметрам"
  [entry field-params]
  (-> {}
      ;; конвертируем каждое поле в отдельности
      (#(reduce-kv (fn [row t field]
                     (let [v (get entry t)]
                       (if (and v (:row-field field))
                         (assoc row (:row-field field) (entry-value->row-field v field))
                         row)))
                   % field-params))))


(defn convert-to-row
  "Конвертировать в строку для операции"
  [entry entry-params]
  ;; сначала конвертируем каждое поле в отдельности
  (-> (entry-values->row-fields entry (:fields entry-params))
      ;; убираем лишние поля (если взаимоисключающие есть)
      (u/not-empty-fn-or-skip
        (:mut-exclusives entry-params)
        (fn[m-es prev-row]
          (->> m-es ; все тэги взаимоисключающие
               (remove #(not (blank? (get entry %)))) ; удаляем которые заполнены
               (map #(get-in entry-params [:fields % :row-field])) ; получаем соотв.названия полей
               ;; удаляем все эти поля из результата
               (reduce (fn[r field-to-delete]
                         (dissoc r field-to-delete))
                       prev-row))))))

;;; ---------------------------------------------------------------------
;;; Создание операций из entry
;;;

;; operation-types
;; :invalid
;; :delete
;; :update
;; :add

(defn invalid-op
  [zipper errors]
  {:operation-type :invalid
   :zipper zipper
   :errors errors})

(defn correct-table-for-entry
  "Получить подходящую таблицу для entry (если может быть несколько)"
  [entry entry-params]
  (let [table (get-in entry-params [:e-meta :table])]
    (if (coll? table)
      (->> (keys table) ; все проверяемые теги
           (reduce (fn [m tag] (assoc m tag (get entry tag)))
                   {})
           (u/keys-where #(not (blank? %))) ; находим все ключи, у которых есть зн-ия
           (#(if (not= (count %) 1) ; только 1 ключ тэга должен найтись
               (throw (Exception. "Невозможно соотнести нужную таблицу по заполненным полям"))
               (first %))) ; вытаскиваем первый (и единственный) ключ тэга
           (get table)) ; получаем название таблицы по тегу
      table)))

(defmulti op-from-operation
  "Получить операцию взависимости от поля Operation внутри записи"
  (fn [zipper entry entry-params prev-ops] (:Operation entry)))

;; удаление
(defmethod op-from-operation "D"
  [zipper entry entry-params prev-ops]
  (let [{:keys [e-meta check-delete-fn]} entry-params
        uuid (:UUID entry)]
    (u/if-not-empty-let
      [errors (when check-delete-fn (check-delete-fn entry prev-ops))]
      ;; если возникли ошибки при валидации
      (invalid-op zipper errors)
      ;; если нет ошибок
      {:operation-type :delete
       :table-key (:table e-meta)
       :zipper zipper
       :row {:uuid uuid}})))


;; добавление или редактирование
(defmethod op-from-operation "U"
  [zipper entry entry-params prev-ops]
  (-> (validate-entry entry entry-params prev-ops) ; валидация полей на ошибки
      (#(u/if-not-empty-let ; есть ли ошибки при валидации
          [e %]
          ;; если есть ошибки
          (do
            (when (has-critical-errors? e) ; когда критич.ошибки
              (throw (Exception. (str " Errors: " (errors->str e)
                                      " XML: " (xml-u/zipper->xml-in-str zipper)))))
            (invalid-op zipper e)) ; когда обычные ошибки
          ;; если нет, конвертируем в операцию добавления или редактирования
          (let [correct-table (correct-table-for-entry entry entry-params)]
            ;; если есть уже такая запись
            (if-let [existing-row (get-by-uuid correct-table (:UUID entry))]
              ;; операция редактирования
              (let [update-row (-> (convert-to-row entry entry-params)
                                   (assoc :id (:id existing-row)) ; ставим id
                                   ;; статус меняем на 1 т.к редактирование предполагает,
                                   ;; что сущность не удалена
                                   (assoc :status 1)
                                   (crud/default-convert-on-edit))]
                {:operation-type :update
                 :table-key correct-table
                 :zipper zipper
                 :row update-row})
              ;; операция добавления
              (let [add-row (-> (convert-to-row entry entry-params)
                                (crud/default-convert-on-add))]
                {:operation-type :add
                 :table-key correct-table
                 :zipper zipper
                 :row add-row})))))))


(defn entry->op
  [zipper entry entry-params prev-ops]
  (u/if-not-empty-let
    [main-errors (check-main-fields entry entry-params)]
    ;; возникли серьезные ошибки
    (do
      (println "Serious errors")
      (println main-errors)
      (throw (Exception. (errors->str main-errors))))
    ;; получить операцию по полю Operation внутри записи
    (op-from-operation zipper entry entry-params prev-ops)))


;;; =================================================
;;; Запись в БД
;;; =================================================

;; Запись в историю всех обработок 1С
(defn- write-to-db-success-entry
  "Записать успешно обработанную строку с 1С"
  [package-number group-key row op-type actual-op xml-zipper]
  (let [new-h-row (-> {}
                      (assoc :operation_date (tu/now-datetime)
                        :package_number package-number
                        :operation_status 1
                        :xml_desc (xml-u/zipper->xml-in-str xml-zipper)
                        :description nil
                        :operation_type op-type
                        :actual_operation actual-op
                        :entity_type (str group-key)
                        :entity_name (or (:name row)
                                         (:number row))
                        :entity_uuid_1c (:uuid_1c row)))]
    (crud/default-add-row :sync1_all_processings new-h-row)))


(defn- write-to-db-failure-entry
  "Записать не обработанную строку с 1С"
  [package-number group-key op-type xml-zipper error-msg uuid]
  (let [new-h-row (-> {}
                      (assoc :operation_date (tu/now-datetime)
                        :package_number package-number
                        :operation_status 2
                        :xml_desc (xml-u/zipper->xml-in-str xml-zipper)
                        :description error-msg
                        :operation_type op-type
                        :actual_operation nil
                        :entity_type (str group-key)
                        :entity_name nil
                        :entity_uuid_1c uuid))]
    (crud/default-add-row :sync1_all_processings new-h-row)))


(defn- write-to-db-new-remain
  [package-number xml-zipper remain-row]
  (let [new-row (assoc {}
                  :package_number package-number
                  :operation_date (tu/now-datetime)
                  :operation_status 1
                  :xml_desc (xml-u/zipper->xml-in-str xml-zipper)
                  :operation_type "R" ;; добавление нового остатка
                  :entity_type ":remains"
                  :entity_name (remain->str remain-row))]
    (crud/default-add-row :sync1_all_processings new-row)))



(defn- logging-success-entry
  "Логирование успешного результата"
  [package-number group-key row actual-op zipper]
  (let [op-type (xml-u/zipper->value zipper :Operation)]
    (do
      (write-to-db-success-entry package-number
                                 group-key
                                 row
                                 op-type
                                 actual-op
                                 zipper)
      (logger/log-1c-entity-success package-number
                                    op-type
                                    (xml-u/zipper->xml-in-str zipper)))))


(defn- logging-failure-entry
  "Логирование неудачного результата"
  [package-number group-key zipper error-msg]
  (let [op-type (xml-u/zipper->value zipper :Operation)
        uuid (xml-u/zipper->value zipper :UUID)]
    (do
      (write-to-db-failure-entry package-number
                                 group-key
                                 op-type
                                 zipper
                                 error-msg
                                 uuid)
      (logger/log-1c-entity-failure package-number
                                    (xml-u/zipper->xml-in-str zipper)
                                    (Exception. error-msg)))))

;;;
;;; Мультиметоды для обработки операции в БД
;;;
(defmulti write-op-to-db (fn [pnumber group-key op] (:operation-type op)))

(defn op-row->db-row
  "Конвертировать строку row внутри операции
  в конечную строку для добавления/редактирования в БД"
  [op-row]
  (reduce-kv (fn [db-row k v]
               (assoc
                 db-row k
                 (if (coll? v) ; если внешний ключ
                   (-> (get-by-uuid (:f-table v) (:f-uuid v))
                       :id)
                   v)))
             {} op-row))


(defmethod write-op-to-db :invalid
  [pnumber group-key op]
  (do
    ;; записываем в лог исключение
    ;; записываем в историю и логи
    (logging-failure-entry pnumber
                           group-key
                           (:zipper op)
                           (errors->str (:errors op)))))


(defmethod write-op-to-db :delete
  [pnumber group-key op]
  (do
    (let [db-row (get op :row)
          zipper (get op :zipper)
          table (:table-key op)]
      (if (coll? table)
        ;; если несколько таблиц указано
        (doseq [t (vals table)]
          ;; удаляем сущности
          (delete-row-by-uuid t (:uuid_1c db-row)))
        ;; иначе только с 1 таблицы
        (delete-row-by-uuid table (:uuid_1c db-row)))
      ;; записываем в историю и логи
      (logging-success-entry pnumber
                             group-key
                             db-row
                             (str (:operation-type op))
                             zipper))))


(defmethod write-op-to-db :update
  [pnumber group-key op]
  (do
    (let [db-row (op-row->db-row (:row op))
          zipper (get op :zipper)]
      ;; редактируем сущность
      (crud/default-edit-row (:table-key op) (:id db-row) db-row)
      ;; записываем в историю и логи
      (logging-success-entry pnumber
                             group-key
                             db-row
                             (str (:operation-type op))
                             zipper))))


(defmethod write-op-to-db :add
  [pnumber group-key op]
  (do
    (let [db-row (op-row->db-row (:row op))
          zipper (get op :zipper)]
      ;; добавляем сущность
      (crud/default-add-row (:table-key op) db-row)
      ;; записываем в историю и логи
      (logging-success-entry pnumber
                             group-key
                             db-row
                             (str (:operation-type op))
                             zipper))))

;; ;; ---------------------------------------------------------------------

(defn process-op
  "Обработка операции (запись в базу)
  возвращает true при удачной обработке и false при возникновении исключения"
  [pnumber group-key op]
  (try
    (do
      ;; записывам в БД и историю
      (write-op-to-db pnumber group-key op)
      ;; возвращаем полож.результат
      true)
    (catch Exception e (do
                         (println "Error on processing to db")
                         ;; записываем в логи
                         (logger/log-exception e "Error on processing to db from sync1c")
                         (logger/log-sync1c-exception e)
                         ;; возвращаем отриц.результат
                         false))))


(defn process-op-group
  "Обработка группы операций"
  [pnumber group-key ops]
  (println "Processing group to db: " group-key)
  (let [process-results (map #(process-op pnumber group-key %) ops)]
    {:group group-key
     :total (count ops)
     :invalid (count (filter #(= (:operation-type %)
                                 :invalid) ops))
     :success-processed (count (filter true? process-results))}))


(defn process-doc-operations
  "Обработка всех операций по документам и справочникам
  возвращает вектор сгруппированных результатов обработок"
  [pnumber ops]
  (-> ops
      ;; результаты обработок по группам
      (#(reduce (fn [v group]
                  (conj v (process-op-group pnumber
                                            group
                                            (get % group))))
                []
                (map (fn[t](get-in entry-params [t :e-meta :group]))
                     (u/keys-sorted-by-inner-field entry-params :index))))))


;;; ==============================================================
;;; Работа с xml
;;; ==============================================================
(defn zipper->map
  [zipper fields]
  (reduce (fn [m field]
            (if-let [v (xml-u/zipper->value zipper field)]
              (assoc m field v)
              m))
          {} fields))

;; (zipper->map
;;   (xml-u/str->zipper
;;     "<Selling>
;;       <UUID>4ef70d95-4919-11e4-b66b-0023268fb7a7</UUID>
;;       <Number>0470</Number>
;;       <Date>2014-09-26</Date>
;;       <Client>875734d1-4e5d-11e6-9787-001e0bd49bb5</Client>
;;       <Contract></Contract>
;;       <Operation>U</Operation>
;;     </Selling>")
;;   [:UUID :Number :Date :Client :Contract :Order :Someother])


(defn zipper->op
  "Получить из тегов документа операцию
  zipper - xml зиппер документа
  entry-params - параметры документа (ф-ции валидации, конвертации и т.д.)
  prev-ops - предыдущий список операций"
  [zipper
   entry-params
   prev-ops]
  (-> zipper
      (zipper->map (keys (:fields entry-params)))
      (#(entry->op zipper % entry-params prev-ops))))


(zipper->op
  (xml-u/str->zipper
    "<Posting>
		<UUID>f3328d91-ad43-11e6-9787-001e0bd49bb4</UUID>
		<Number>00000001545</Number>
		<Date>2016-10-28</Date>
		<Supplier>a6863c5d-605f-11e2-b7de-0019d1abd593</Supplier>
		<Order/>
		<Sum>5793792</Sum>
		<Currency>KZT</Currency>
		<Operation>U</Operation>
	</Posting>")
  (:Posting entry-params)
  [])


(defn zippers->ops
  [package-zipper all-entry-params]
  (->
    (reduce (fn [all-ops entry-tag]
              (let [entry-p (get all-entry-params entry-tag)
                    group-key (get-in entry-p [:e-meta :group])
                    group-zippers (xml-u/zipper->inners package-zipper :package entry-tag)]
                (assoc all-ops group-key (doall (map #(zipper->op %
                                                                  entry-p
                                                                  all-ops)
                                                     group-zippers)))))
            {}
            (u/keys-sorted-by-inner-field all-entry-params :index))))


;;; --------------------------------------------------------------------
;;; Обработка остатков
;;;
(defn already-has-remain?
  "Проверка, что остаток с такой суммой и валютой уже есть (как последний)
  либо что дата проверяемого остатка раньше той, что есть в базе"
  [remain-row]
  (when-let [last-r (pd/last-balance-by-currency (:balance_currency remain-row))]
    (or (t/before? (:balance_date remain-row)
                   (:balance_date last-r))
        (= (double (:balance_summ remain-row))
           (double (:balance_summ last-r))))))


(defn remain-zipper->row
  [r-zipper pnumber]
  (-> r-zipper
      (zipper->map (keys remain-fields-params))
      (entry-values->row-fields remain-fields-params)
      (assoc :package_number pnumber)))


(defn process-remain
  "Обработать остаток и вернуть хм со статусом"
  [pnumber remain-zipper]
  (-> remain-zipper
      (remain-zipper->row pnumber)
      (#(if (already-has-remain? %)
          {:remain-row %
           :remain-zipper remain-zipper
           :new? false} ;; не обновляем и возвр. признак false, что не добавили
          (do
            (add-new-remain %) ; добавляем в базу
            {:remain-row %
             :remain-zipper remain-zipper
             :new? true}))))) ; возвр. признак true, что добавили


;; (process-remain "test01" (xml-u/str->zipper
;;                       "<Remain>
;;                         <Date>2016-12-30T10:09:15</Date>
;;                         <Sum>4740559.07</Sum>
;;                         <Currency>KZT</Currency>
;;                         <CurrencySum>4740559.07</CurrencySum>
;;                       </Remain>"))

(defn- process-remains
  "Обработать остатки"
  [package-params]
  (let [{:keys [pnumber package-zipper]} package-params]
    (as-> package-zipper x
          (xml-u/zipper->inners x :package :Remain)
          (doall (map #(process-remain pnumber %) x))
          (#(assoc package-params
              :process-remains-stats
              (reduce (fn [st rr]
                        (when (:new? rr)
                          (write-to-db-new-remain pnumber
                                                  (:remain-zipper rr)
                                                  (:remain-row rr)))
                        (assoc st (remain->str (:remain-row rr)) (:new? rr)))
                      {} x))))))


;;; ---------------------------------------------------------------------
;;; Главные функции для обработки
;;;
(defn- get-total-stats
  "Получить общие статы по обработке пакета"
  [stats]
  (reduce (fn[total-stats gr-stats]
            (-> total-stats
                (update :total + (:total gr-stats))
                (update :invalid + (:invalid gr-stats))
                (update :success-processed + (:success-processed gr-stats))))
          {:total 0 :invalid 0 :success-processed 0} stats))


(defn- process-doc-package-and-get-stats!
  "Обработки пакета в виде xml-зипперов (док-в и справочников)
  и вернуть сгруппированные статы"
  [package-params]
  (let [{:keys [pnumber package-zipper]} package-params]
    (as-> package-zipper x
          ;; переводим зипперы в операции
          (zippers->ops x entry-params)
          ;; обрабатываем их
          (process-doc-operations pnumber x)
          ;; получаем общие статы
          (get-total-stats x)
          ;; добавляем их в общий список параметров
          (assoc package-params
            :process-doc-package-stats
            x))))

;;;
;;; main fn
;;;
(defn process-xml-package
  "Главная ф-ия для обработки xml пакета,
  возвращает общие результаты обработки"
  [package-zipper]
  (try
    (let [pnumber (xml-u/zipper->value package-zipper :package :PackageNumber)]
      (if (not (clojure.string/blank? pnumber))
        (->> {:pnumber pnumber
              :package-zipper package-zipper}
             ;; обрабатываем остатки
             process-remains
             ;; обрабатываем документы
             process-doc-package-and-get-stats!
             ;; выводим на экран и в лог рез-ты обработки
             ;; и возвращаем результат
             (u/side-eff-return->>
               #(logger/log-1c-processed-package-stats
                   pnumber
                   (get-in % [:process-doc-package-stats :total])
                   (get-in % [:process-doc-package-stats :invalid])
                   (get-in % [:process-doc-package-stats :success-processed]))))
        (throw (Exception. "packageNumber is empty"))))
    (catch Exception e (do
                         (logger/log-exception e "Global error on processing xml-package")
                         (throw e)))))


(defn process-local-xml
  "Ф-ция для обработки локального xml-файла"
  [filename]
  (xml-u/with-open-xml-file
    filename
    process-xml-package))


(defn get-ops-from-xml
  [filename]
  (xml-u/with-open-xml-file
    filename
    #(zippers->ops % entry-params)))


;; (process-local-xml "main.xml")

;; (pprint (get-ops-from-xml "main.xml"))

;;;
;;; TEST
;;;
(comment
  (def xml-example
    "<package>
        <PackageNumber>128</PackageNumber>
        <Remain>
          <Date>2016-12-21T14:19:55</Date>
          <Sum>9455575.31</Sum>
          <Currency>KZT</Currency>
          <CurrencySum>9455575.31</CurrencySum>
        </Remain>
        <Remain>
          <Date>2016-12-21T14:19:55</Date>
          <Sum>28967544.53</Sum>
          <Currency>USD</Currency>
          <CurrencySum>90025</CurrencySum>
        </Remain>
        <Supplier>
          <UUID>875734d1-4e5d-11e6-9787-001e0bd49cc4</UUID>
          <id>000000011</id>
          <Name>Test Supplier</Name>
          <Operation>U</Operation>
        </Supplier>
        <Supplier>
          <UUID>87573443-4e5d-11e6-9787-001e0bd49cc8</UUID>
          <id>000000014</id>
          <Name>qwe</Name>
          <Operation>U</Operation>
        </Supplier>
        <Posting>
          <UUID>775734d1-4e5d-11e6-9787-001e0bd49cc7</UUID>
          <id>000000012</id>
          <Date>2015-09-08</Date>
          <Name>Posting 1</Name>
          <Sum>35454.56</Sum>
          <Currency>KZT</Currency>
          <Supplier>43534fdf</Supplier>
          <Operation>U</Operation>
        </Posting>
    </package>
    ")
  (def example-zipper
    (-> xml-example
        java.io.StringReader.
        xml/parse
        zip/xml-zip
        ))


;; (validate-entry
;;   {:UUID "875734d1-4e5d-11e6-9787-001e0bd49cc4" :Operation "E"
;;    :Supplier "ss5734d1-4e5d-11e6-9787-001e0bd4cc8"
;;    :Client ""
;;    :Sum "4124"}
;;   (:Posting entry-params)
;;   {})


;; (convert-to-row {:UUID "875734d1-4e5d-11e6-9787-001e0bd49cc4" :Operation "U"
;;                  :Supplier ""
;;                  :Client "0415b7a5-4e4a-4e5b-b888-0311bb87f00"
;;                  :Sum "7676.76"
;;                  :Date "22.10.2012"
;;                  :Name "somename"
;;                  :Currency "KZT"}
;;                 (:Posting entry-params))


  ;; (let [test-xml "<Supplier>
;;                   <UUID>875734d1-4e5d-11e6-9787-001e0bd49cc4</UUID>
;;                   <id>000000011</id>
;;                   <Name>Test Supplier22</Name>
;;                   <Operation>U</Operation>
;;                 </Supplier>"]
;;   (process-op "124"
;;               :suppliers
;;               {:operation-type :add
;;                :table-key :catalogs_supplier
;;                :zipper (xml-u/str->zipper test-xml)
;;                :row {:uuid_1c "875734d1-4e5d-11e6-9787-001e0bd49cc6"
;;                      :id 67
;;                      :name "Test Supplier29"
;;                      :creation_datetime (tu/now-datetime)
;;                      :last_edit_datetime (tu/now-datetime)
;;                      :status 1}}))


;; (process-op-group "22323"
;;                   :suppliers
;;                   [{:operation-type :delete
;;                     :table-key {:Client :clientfines, :Supplier :supplier_shippings}
;;                     :row {:uuid "775734d1-4e5d-11e6-9787-001e0bd49cc7"}}
;;                    {:operation-type :invalid
;;                     :errors {:Supplier [{:error-msg "Поставщик с таким UUID не найден(-а)"
;;                                          :error-type :tolerable}]}}])

  ;; (process-remain
;;   "123"
;;   (xml-u/str->zipper
;;     "<Remain>
;;       <Date>2016-12-21T14:22:06</Date>
;;       <Sum>28967544.53</Sum>
;;       <Currency>USD</Currency>
;;       <CurrencySum>90025</CurrencySum>
;;     </Remain>"))


;; (already-has-remain?
;;   {:balance_date (tu/parse "2016-12-21T20:19:55+06")
;;    :balance_currency 2
;;    :balance_summ 9455575.31
;;    :package_number "909"})



;; (str (process-doc-operations "7777"
;;                         {:suppliers
;;                          [{:operation-type :delete
;;                            :table-key {:Client :clientfines, :Supplier :supplier_shippings}
;;                            :row {:uuid "775734d1-4e5d-11e6-9787-001e0bd49cc7"}}
;;                           {:operation-type :invalid
;;                            :errors {:Supplier [{:error-msg "Поставщик с таким UUID не найден(-а)"
;;                                                 :error-type :tolerable}]}}]}))




;; (entry->op
;;   {}
;;   {:UUID "5647dd4e-c775-11e2-a644-0023268fb7a7" :Operation "E"
;;    :Supplier ""
;;    :Client "0415b7a5-4e4a-4e5b-b888-0311bb87f00"
;;    :Sum "4124.2"}
;;   (:Posting entry-params)
;;   {:clients [{:operation-type :update
;;               :row {:uuid_1c "0415b7a5-4e4a-4e5b-b888-0311bb87f00"}}]
;;    })


(zipper->map
  (xml-u/str->zipper
    "<Remain>
      <Date>2016-12-21T14:22:06</Date>
      <Sum>28967544.53</Sum>
      <Currency>USD</Currency>
      <CurrencySum>90025</CurrencySum>
    </Remain>")
  [:Date :Currency :CurrencySum])




  )


;; (xml-u/with-open-xml-file "primer.xml"
;;                           (fn [p]
;;                             (process-xml-package p)))





































