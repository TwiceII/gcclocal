;;;; =========================================================
;;;; Функции для автоматизации с 1С
;;;; =========================================================
(ns gcclocal.model.processing1c
  (:require [gcclocal.db.sqlutils :as sql]
            [honeysql.helpers :as s]
            [gcclocal.time-utils :as tu]
            [gcclocal.logger :as logger]
            [gcclocal.db.crud :as crud]
            [gcclocal.utils :as u]
            [gcclocal.xml-utils :as xml-u]
            [gcclocal.model.money-calcs :as mon-c]))
;;; consts
(def ^:const update-code "U") ; код редактирования/добавления
(def ^:const delete-code "D") ; код удаления
(def ^:const uuid-column "uuid_1c") ; столбец в таблицах для UUID от 1С (строка)
(def ^:const uuid-column-key (keyword uuid-column)) ; ; столбец в таблицах для UUID от 1С (ключ.слово)


;;; records
(defrecord client-entry [uuid id name operation])
(defrecord contract-entry [uuid id name client operation])
(defrecord order-entry [uuid number date client contract product-num sum currency operation])
(defrecord payment-entry [uuid number date client contract order sum currency operation])
(defrecord selling-entry [uuid number date client contract order sum currency operation])
(defrecord posting-entry [uuid number date client contract order sum currency operation])


;;; ===========================================================================
;;; SQL helpers

(defn- get-by-uuid [table-key uuid]
  "Получить сущность по uuid_1c"
  (sql/m-select-single (->
                         (s/select :*)
                         (s/from table-key)
                         (s/where [:= uuid-column-key uuid]))))


(defn- delete-row-by-uuid
  "Удалить (архивировать сущность) по uuid_1c"
  [table-key uuid]
  ;; если не найдет по такому uuid то просто ничего не произойдет
  (sql/update-by-field table-key uuid-column uuid {:status 2}))


(defn- entry->default-add-row
  [entry]
  (-> {uuid-column-key (:uuid entry)}
      crud/default-convert-on-add))


(defn- entry->default-edit-row
  [entry]
  (-> {uuid-column-key (:uuid entry)}
      ;; статус меняем на 1 т.к редактирование предполагает,
      ;; что сущность не удалена
      (assoc :status 1)
      crud/default-convert-on-edit))


(defn- check-foreign-uuid
  "Проверить, что внешний ключ (UUID) на таблицу существует"
  [errors f-str f-tablekey f-field entry]
  (if-let [f-uuid (get entry f-field)]
    (if-not (get-by-uuid f-tablekey f-uuid)
      (conj errors (str f-str " с таким UUID не найден(-а)"))
      errors)
    (conj errors (str "Не передан id для '" f-str "'"))))


(defn- assoc-foreign-field
  "Назначить в строку ссылку на внешний id, найденный по uuid"
  [row row-key f-tablekey f-field entry ]
  (if-let [f-entity (get-by-uuid f-tablekey (get entry f-field))]
    (assoc row row-key (:id f-entity))
    (assoc row row-key nil)))
    ;row))



;; (check-foreign-id []
;;                   {:id "23423" :client "875734d1-4e5d-11e6-9787-001e0bd49bb4"}
;;                   :client
;;                   :catalogs_client
;;                   "Клиент")

;;; ===========================================================================
;;; параметры для записей
;;; :index - очередность
;;; :xml-tag - тэг внутри xml пакета для документа
;;; :table-key - таблица связанного документа
(def entry-params
  {:client       {:index 1 ; клиент
                  :xml-tag :Client
                  :table-key :catalogs_client
                  :record-fn ->client-entry
                  :fields [:UUID :id :Name :Operation]
                  :check-delete-fn (fn[_](-> [])) ;; !!! TODO
                  :check-update-or-add-fn (fn[_](-> []))
                  :convert-on-update-fn #(-> %
                                             entry->default-edit-row
                                             (assoc :name (:name %)))
                  :convert-on-add-fn #(-> %
                                          entry->default-add-row
                                          (assoc :name (:name %)))}

   :contract      {:index 2 ; договор
                   :xml-tag :Contract
                   :table-key :primarydocs_clientcontract
                   :record-fn ->contract-entry
                   :fields [:UUID :id :Name :Client :Operation]
                   :check-delete-fn (fn[_](-> [])) ;; !!! TODO
                   :check-update-or-add-fn #(let [errors []]
                                              (check-foreign-uuid errors "Клиент" :catalogs_client :client %))

                   :convert-on-update-fn (fn [e] (-> e
                                                     entry->default-edit-row
                                                     (assoc :name (:name e))
                                                     (assoc-foreign-field :client_id :catalogs_client :client e)))

                   :convert-on-add-fn (fn [e] (-> e
                                                  entry->default-add-row
                                                  ;; предварит.поля
                                                  (u/in-hm->int-zeros [:prepay_percentage
                                                                       :prepay_time
                                                                       :pay_percentage
                                                                       :pay_time])
                                                  (assoc :name (:name e))
                                                  (assoc-foreign-field :client_id :catalogs_client :client e)))}

   :order         {:index 3 ; заявка
                   :xml-tag :Order
                   :table-key :primarydocs_clientapplication
                   :record-fn ->order-entry
                   :fields [:UUID :Number :Date :Client :Contract :ProductNum :Sum :Currency :Operation]
                   :check-delete-fn (fn[_](-> [])) ;; !!! TODO
                   :check-update-or-add-fn #(-> []
                                                (check-foreign-uuid "Клиент"
                                                                    :catalogs_client :client %)
                                                (check-foreign-uuid "Договор"
                                                                    :primarydocs_clientcontract :contract %))
                   :convert-on-add-fn (fn [e] (-> e
                                                  entry->default-add-row
                                                  ;; предварит.поля
                                                  (u/in-hm->float-zeros [:kt_rev :saldo])
                                                  (assoc :name (:number e))
                                                  (assoc :application_date (tu/parse (:date e)))
                                                  (assoc-foreign-field :client_id :catalogs_client :client e)
                                                  (assoc-foreign-field :client_contract_id
                                                                       :primarydocs_clientcontract
                                                                       :contract e)
                                                  (assoc :amount (u/to-double (:product-num e)))
                                                  (assoc :summ (u/to-double (:sum e)))
                                                  (assoc :c_id (mon-c/ccode->id (:currency e)))))

                   :convert-on-update-fn (fn [e] (-> e
                                                     entry->default-edit-row
                                                     (assoc :name (:number e))
                                                     (assoc :application_date (tu/parse (:date e)))
                                                     (assoc-foreign-field :client_id :catalogs_client :client e)
                                                     (assoc-foreign-field :client_contract_id
                                                                          :primarydocs_clientcontract
                                                                          :contract e)
                                                     (assoc :amount (u/to-double (:product-num e)))
                                                     (assoc :summ (u/to-double (:sum e)))
                                                     (assoc :c_id (mon-c/ccode->id (:currency e)))))}

   :payment       {:index 4 ; оплата от клиентов
                   :xml-tag :Payment
                   :table-key :clientpayments
                   :record-fn ->payment-entry
                   :fields [:UUID :Number :Date :Client :Contract :Order :Sum :Currency :Operation]
                   :check-delete-fn (fn[_](-> [])) ;; !!! TODO
                   :check-update-or-add-fn #(-> []
                                                (check-foreign-uuid "Клиент"
                                                                    :catalogs_client :client %)
                                                (check-foreign-uuid "Договор"
                                                                    :primarydocs_clientcontract :contract %))
                   :convert-on-add-fn (fn[e](-> e
                                                entry->default-add-row
                                                (assoc :name (:number e))
                                                (assoc :doc_date (tu/parse (:date e)))
                                                (assoc-foreign-field :client_id :catalogs_client :client e)
                                                (assoc-foreign-field :client_contract_id
                                                                     :primarydocs_clientcontract
                                                                     :contract e)
                                                (assoc-foreign-field :client_application_id
                                                                     :primarydocs_clientapplication
                                                                     :order e)
                                                (assoc :summ (u/to-double (:sum e)))
                                                (assoc :c_id (mon-c/ccode->id (:currency e)))))
                   :convert-on-update-fn (fn[e](-> e
                                                   entry->default-edit-row
                                                   (assoc :name (:number e))
                                                   (assoc :doc_date (tu/parse (:date e)))
                                                   (assoc-foreign-field :client_id :catalogs_client :client e)
                                                   (assoc-foreign-field :client_contract_id
                                                                        :primarydocs_clientcontract
                                                                        :contract e)
                                                   (assoc-foreign-field :client_application_id
                                                                        :primarydocs_clientapplication
                                                                        :order e)
                                                   (assoc :summ (u/to-double (:sum e)))
                                                   (assoc :c_id (mon-c/ccode->id (:currency e)))))}

   :selling       {:index 5 ; реализации
                   :xml-tag :Selling
                   :table-key :primarydocs_departure
                   :record-fn ->selling-entry
                   :fields [:UUID :Number :Date :Client :Contract :Order :Sum :Currency :Operation]
                   :check-delete-fn (fn[_](-> [])) ;; !!! TODO
                   :check-update-or-add-fn #(-> []
                                                (check-foreign-uuid "Клиент"
                                                                    :catalogs_client :client %)
                                                (check-foreign-uuid "Договор"
                                                                    :primarydocs_clientcontract :contract %))
                   :convert-on-add-fn (fn[e](-> e
                                                entry->default-add-row
                                                (assoc :doc_name (:number e))
                                                (assoc :doc_date (tu/parse (:date e)))
                                                (assoc-foreign-field :client_id :catalogs_client :client e)
                                                (assoc-foreign-field :client_contract_id
                                                                     :primarydocs_clientcontract
                                                                     :contract e)
                                                (assoc-foreign-field :client_application_id
                                                                     :primarydocs_clientapplication
                                                                     :order e)
                                                (assoc :summ (u/to-double (:sum e)))
                                                (assoc :c_id (mon-c/ccode->id (:currency e)))))
                   :convert-on-update-fn (fn[e](-> e
                                                   entry->default-edit-row
                                                   (assoc :doc_name (:number e))
                                                   (assoc :doc_date (tu/parse (:date e)))
                                                   (assoc-foreign-field :client_id :catalogs_client :client e)
                                                   (assoc-foreign-field :client_contract_id
                                                                        :primarydocs_clientcontract
                                                                        :contract e)
                                                   (assoc-foreign-field :client_application_id
                                                                        :primarydocs_clientapplication
                                                                        :order e)
                                                   (assoc :summ (u/to-double (:sum e)))
                                                   (assoc :c_id (mon-c/ccode->id (:currency e)))))}

   :posting       {:index 6 ; штрафы клиентам
                   :xml-tag :Posting
                   :table-key :clientfines
                   :record-fn ->posting-entry
                   :fields [:UUID :Number :Date :Client :Contract :Order :Sum :Currency :Operation]
                   :check-delete-fn (fn[_](-> [])) ;; !!! TODO
                   :check-update-or-add-fn #(-> []
                                                (check-foreign-uuid "Клиент"
                                                                    :catalogs_client :client %)
                                                (check-foreign-uuid "Договор"
                                                                    :primarydocs_clientcontract :contract %))
                   :convert-on-add-fn (fn[e](-> e
                                                entry->default-add-row
                                                (assoc :doc_name (:number e))
                                                (assoc :doc_date (tu/parse (:date e)))
                                                (assoc-foreign-field :client_id :catalogs_client :client e)
                                                (assoc-foreign-field :client_contract_id
                                                                     :primarydocs_clientcontract
                                                                     :contract e)
                                                (assoc-foreign-field :client_application_id
                                                                     :primarydocs_clientapplication
                                                                     :order e)
                                                (assoc :summ (u/to-double (:sum e)))
                                                (assoc :c_id (mon-c/ccode->id (:currency e)))))
                   :convert-on-update-fn (fn[e](-> e
                                                   entry->default-edit-row
                                                   (assoc :doc_name (:number e))
                                                   (assoc :doc_date (tu/parse (:date e)))
                                                   (assoc-foreign-field :client_id :catalogs_client :client e)
                                                   (assoc-foreign-field :client_contract_id
                                                                     :primarydocs_clientcontract
                                                                     :contract e)
                                                   (assoc-foreign-field :client_application_id
                                                                        :primarydocs_clientapplication
                                                                        :order e)
                                                   (assoc :summ (u/to-double (:sum e)))
                                                   (assoc :c_id (mon-c/ccode->id (:currency e)))))}


   })

;;; список отсортированных по порядку ключов параметров (т.к. keys иногда может возвращать не в том порядке)
(def all-sorted-entry-keys (map :name-e (sort-by :index
                                                     (reduce-kv (fn[vect k v](conj vect (assoc v :name-e k)))
                                                                [] entry-params))))


;;;
;;; Запись в историю всех обработок 1С
;;;

(defn write-to-db-success-entry
  "Записать успешно обработанную строку с 1С"
  [package-number entry-key entry op-type xml-zipper]
  (let [new-row (-> {}
                    (assoc :operation_date (tu/now-datetime)
                           :package_number package-number
                           :operation_status 1
                           :xml_desc (xml-u/zipper->xml-in-str xml-zipper)
                           :description nil
                           :operation_type op-type
                           :entity_type (str entry-key)
                           :entity_name (or (:name entry)
                                            (:number entry))
                           :entity_uuid_1c (:uuid entry)))]
    (crud/default-add-row :sync1_all_processings new-row)))


(defn write-to-db-failure-entry
  "Записать не обработанную строку с 1С"
  [package-number entry-key op-type xml-zipper error-msg]
  (let [new-row (-> {}
                    (assoc :operation_date (tu/now-datetime)
                           :package_number package-number
                           :operation_status 2
                           :xml_desc (xml-u/zipper->xml-in-str xml-zipper)
                           :description (.getMessage error-msg)
                           :operation_type op-type
                           :entity_type (str entry-key)
                           :entity_name nil
                           :entity_uuid_1c nil))]
    (crud/default-add-row :sync1_all_processings new-row)))


;;; ===========================================================================
;;; Process entries

(defn- validate-fields
  "Проверка, что у записи заполнены все поля
  (кроме заявки - Order)
  (и кроме id, от которого можно вообще избавиться в xml)"
  [entry]
  ;; прерывается и выдает исключение, если хотя бы одно из правил не выполнилось
  (when-not (:uuid entry) (throw (Exception. "Не передан UUID")))
  (when-not (and (:operation entry)
                 (or (= (:operation entry) update-code)
                     (= (:operation entry) delete-code)))
    (throw (Exception. "Не передан или передан неправильно Operation (д.б. либо U, либо D)")))
  ;; если редактирование или добавление, то проверяем на заполненность ост.поля
  (when (= (:operation entry) update-code)
    ;; все поля (кроме order и id) должны быть заполнены
    (doseq [k (keys entry)]
      (when (and (not= k :id)
                 (not= k :order)
                 (nil? (get entry k)))
        (throw (Exception. (str "Не передано поле " k " в записи"))))))
  ;; если прошло все проверки, значит валидная запись
  true)



(defn- process-entry
  "Основной метод обработки записи по сущности

  entry-key - ключ для entry-params
  entry - сама запись

  возвращает тип операции (DELETE, ADD, UPDATE)"
  [entry-key entry]
  ;; сначала валидируем обяз.поля
  (when (validate-fields entry)
    (let [operation (:operation entry)
          uuid (:uuid entry)
          e-params (get entry-params entry-key)]

      ;; при удалении
      (if (= operation delete-code)
        (do
          ;; проверка на возможность удаления
          (let [errors ((:check-delete-fn e-params) entry)]
            (if (u/nil-or-empty? errors)
              ;; === удаляем
              (do
                (delete-row-by-uuid (:table-key e-params) uuid)
                "DELETE") ; возвр.тип операции
              ;; иначе склеиваем сообщения ошибок
              (throw (Exception. (clojure.string/join "; " errors))))))

        ;; при редактировании или добавлении
        (do
          ;; валидация на ссылки и прочее
          (let [errors ((:check-update-or-add-fn e-params) entry)]
            (if (u/nil-or-empty? errors)
              ;;; === при редактировании
              (if-let [row (get-by-uuid (:table-key e-params) uuid)]
                (do
                  (crud/default-edit-row (:table-key e-params)
                                         (:id row)
                                         ;; конвертируем перед редактированием
                                         ((:convert-on-update-fn e-params) entry))
                  "UPDATE") ; возвр.тип операции
                ;;; === при добавлении
                (do
                  (crud/default-add-row (:table-key e-params)
                                        ;; конвертируем перед добавлением
                                        ((:convert-on-add-fn e-params) entry))
                  "ADD")) ; возвр.тип операции
              ;; иначе склеиваем сообщения ошибок
              (throw (Exception. (clojure.string/join "; " errors))))))))))



;;; ===========================================================================
;;; Work with XML-package

(defn- xml-zipper->entry
  "Преобразовать xml-zipper в запись"
  [entry-key xml-zipper]
  (let [params (get entry-params entry-key)]
    (apply (:record-fn params)
           (for [field (:fields params)]
             (xml-u/zipper->value xml-zipper field)))))


(defn- logging-success-entry
  "Логирование успешного результата"
  [package-number entry-key entry zipper]
  (let [op (xml-u/zipper->value zipper :Operation)]
    (do
      (write-to-db-success-entry package-number
                                 entry-key
                                 entry
                                 op
                                 zipper)
      (logger/log-1c-entity-success package-number
                                    op
                                    (xml-u/zipper->xml-in-str zipper)))))


(defn- logging-failure-entry
  "Логирование неудачного результата"
  [package-number entry-key zipper error-msg]
  (try
    (let [op (xml-u/zipper->value zipper :Operation)]
      (do
        (write-to-db-failure-entry package-number
                                   entry-key
                                   op
                                   zipper
                                   error-msg)
        (logger/log-1c-entity-failure package-number
                                      (xml-u/zipper->xml-in-str zipper)
                                      error-msg)))
    (catch Exception e (do
                         (logger/log-exception e "ошибка при логировании неудачного результата обработки 1С")
                         (logger/log-sync1c-exception e)))))


(defn- try-get-and-process-entry!
  "Обработка xml-записи с ловлей исключений
  (при исключении записывается в лог)
  возвращает true, если обработка прошла успешно
  иначе false"
  [package-number entry-key zipper]
  (try
          ;; конвертируем xml в запись
    (let [entry (xml-zipper->entry entry-key zipper)
          ;; обрабатываем её
          processed-entry (process-entry entry-key entry)]
      ;; записываем успешную обработку
      (logging-success-entry package-number
                             entry-key
                             entry
                             zipper)

;;       (->> entry
;;            ;; обрабатываем её
;;            (process-entry entry-key)
;;            ;; записываем успешную обработку
;;            (logging-success-entry package-number
;;                                   entry-key
;;                                   entry
;;                                   zipper)))
;;          ((fn[op](logger/log-1c-entity-success package-number
;;                                                op
;;                                                (xml-u/zipper->xml-in-str zipper)))))
      ;; возвращаем успешный результат
      true)
    ;; если возникло исключение, то записываем в лог,
    (catch Exception e (do
                         (logging-failure-entry package-number
                                                entry-key
                                                zipper
                                                e)
;;                          (logger/log-1c-entity-failure package-number
;;                                                        (xml-u/zipper->xml-in-str zipper)
;;                                                        e)
                         ;; возвращаем неудачный результат
                         false))))


(defn- process-entries-group!
  "Обработать группу записей (клиенты/договоры и т.д.)"
  [package-number package-data entry-key]
  (println (str "process-entries-group! " package-number ", " entry-key))
  (let [entry-p (get entry-params entry-key)
        tag (:xml-tag entry-p)
        ;; все записи из xml с этим тегом
        xml-zippers (xml-u/zipper->inners package-data :package tag)
        ;; общее кол-во записей
        total-count (do
;;                       (println xml-zippers)
;;                       (println (count xml-zippers))
                      (count xml-zippers))
        ;; и получаем список true false успешности обработки
        process-results (map #(try-get-and-process-entry! package-number entry-key %)
                             xml-zippers)
        ;; кол-во успешно обработанных записей
        success-count (count (filter true? process-results))]
    ;; вывод на экран
;;     (println "---------------------------------------")
;;     (println (str "Processed " (str entry-key) ": "
;;                   success-count " of " total-count))
    ;; возвращаем кол-во успешных и кол-во всего по этой группе
    [success-count total-count]))



(defn process-xml-package
  "Обработка xml пакета от 1С

  package-data - xml данные отпарсенные и zip/xml-zip-нутые"
  [package-data]
  (println "---- process-xml-package ----")
  (try
    (let [package-number (xml-u/zipper->value package-data :package :PackageNumber)]
      (if (not (clojure.string/blank? package-number))
        (do
          (let [total-process-stats
                (reduce (fn[total-stats entry-key]
                          ;; пробегаемся по каждой группе и получаем результаты
                          (let [group-stats (process-entries-group! package-number
                                                                    package-data
                                                                    entry-key)]
                            ;; обновляем общие результаты
                            (-> total-stats
                                (update :success + (get group-stats 0))
                                (update :total + (get group-stats 1)))))
                        {:success 0 :total 0}
                        all-sorted-entry-keys)]
            ;; выводим на экран и в лог результаты обработки пакета
            (logger/log-1c-total-package-stats package-number
                                               (:success total-process-stats)
                                               (:total total-process-stats))))
        (throw (Exception. "packageNumber is empty"))))
    (catch Exception e (do
                         ;; (println e)
                         (throw e)))))


;;; ===========================================================================
;;; processing local

(defn process-local-xml
  []
  (xml-u/with-open-xml-file
    "pervich.xml"
    process-xml-package))


;(process-local-xml)



