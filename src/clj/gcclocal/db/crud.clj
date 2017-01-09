(ns gcclocal.db.crud
  (:require [gcclocal.db.sqlutils :as sql]
            [honeysql.helpers :as s]
            [clj-time.core :as ctime]))


(defn default-get-all-rows
  "Получить все записи по таблице (с учетом статуса)"
  [table-key]
  (sql/m-select (sql/q-base-select table-key)))


(defn get-by-id [table-key id]
  (sql/m-select-single (->
                         (s/select :*)
                         (s/from table-key)
                         (s/where [:= :id id]))))


(defn get-rows-where [table-key where-clause]
  "Получить строки, удовлетворяющие условию (проверка на статус вложенная)"
  (sql/m-select (-> (sql/q-base-select table-key)
                    (s/merge-where where-clause))))


(defn get-row-where [table-key where-clause]
  "Получить строку с where"
  (let [rows (get-rows-where table-key where-clause)]
    (if (> (count rows) 1)
      (throw (Exception. "More than 1 row was found in get-row-where"))
      (first rows))))

;; (default-get-all-rows :catalogs_client)
;; (get-rows-where :catalogs_client [:= :id 170])


(defn default-convert-on-add
  "По умолчанию заполнение служ.полей при добавлении"
  [row]
  (assoc row :creation_datetime (ctime/now)
             :last_edit_datetime (ctime/now)
             :status 1))


(defn default-convert-on-edit
  "По умолчанию заполнение служ.полей при редактировании"
  [row]
  (assoc row :last_edit_datetime (ctime/now)))


(defn default-add-row
  "Добавить новую запись по дефолту"
  [table-key row]
  (println row)
  (sql/insert-with-return table-key row))


(defn default-edit-row
  "Редактировать запись по дефолту"
  [table-key id row]
  (sql/update-by-id table-key id row))


(defn edit-with-service-fields
  "Редактировать запись с заполнением служ.полей"
  [table-key id row]
  (sql/update-by-id table-key id (default-convert-on-edit row)))


(defn default-archivate-row
  "Архивировать запись по дефолту"
  [table-key id]
  (sql/update-by-id table-key id {:status 2}))


(defn get-rows-w-params
  "Базовая ф-ция для получения строк по настройкам
  для запроса и переданным параметрам"
  [basemap params]
  (sql/get-w-params-from-basemap basemap params))


(defn get-count-w-params
  "Базовая ф-ция для получения кол-ва строк по настройкам
  для запроса и переданным параметрам"
  [basemap params]
  (sql/get-count-from-basemap basemap params))


;;===================================================================



;; (default-add-row :catalogs_client {:name "some" :status 1
;;                                    :uuid_1c "fb4ff6ca-2ba1-11e6-8293-bc5ff4e29a11"
;;                                    })












