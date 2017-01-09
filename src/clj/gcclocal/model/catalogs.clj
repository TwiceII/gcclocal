(ns gcclocal.model.catalogs
  (:require [gcclocal.db.sqlutils :as sql]
            [honeysql.core :as hs]
            [clj-time.core :as ctime]
            [clj-time.coerce :as ctime-c]
            [honeysql.helpers :as s]))


(defn get-basic-rows-with-params
  "Получить записи по обычному справочнику
  исходя из параметров пейджинга, сортировки, фильтров и т.д."
  [table-key {:keys [pagesize pagenumber order-by search-text] :as params }]
  (sql/m-select (->
                  (s/select :*)
                  (s/from table-key)
                  (s/where [:= :status 1])
                  (sql/where-substr :name search-text)
                  (sql/limit-offset pagenumber pagesize)
                  (sql/order-by-field order-by))))


(defn get-basic-rows-count
  "Получить кол-во записей по обычному справочнику"
  ([table-key] (get-basic-rows-count table-key nil))
  ([table-key search-text]
    (sql/m-select-single (->
                  (s/select :%count.*)
                  (s/from table-key)
                  (s/where [:= :status 1])
                  (sql/where-substr :name search-text)))))


(def stationtraveltimes-basemap
  {:table :catalogs_stationtraveltime
   :syn :st
   :joins [[:catalogs_station :s :id
            :st.station_id [:name "station_name"]]]
   :search [:s.name]
   :order-spec {"station" "station_name"}})

(def get-stationtraveltimes-with-params
  "Получить строки для времени в пути"
  (partial sql/get-w-params-from-basemap stationtraveltimes-basemap))

(def get-stationtraveltimes-count
  "Получить кол-во времени в пути"
  (partial sql/get-count-from-basemap stationtraveltimes-basemap))
