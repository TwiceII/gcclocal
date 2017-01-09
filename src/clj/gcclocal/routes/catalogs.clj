(ns gcclocal.routes.catalogs
  (:require [gcclocal.utils :refer :all]
            [gcclocal.db.crud :as crud]
            [gcclocal.validation-utils :as v]
            [gcclocal.model.catalogs :as m-catalogs]))


(defn validate-basic-catalog
  "Валидация при добавлении/редактировании обычных справочников"
  [row]
  (-> {}
      (v/check-is-required row :name "Введите наименование")))


(defn validate-stationtraveltime
  [row]
  (-> {}
      (v/check-is-int-required row :station_id "Выберите станцию" "Неправильно указан id станции")
      (v/check-is-int-required row :days_in_travel "Введите количество дней" "Неправильно указано кол-во дней")))


(defn get-params-for-basic-catalog
  "Получить параметры рута для базовых справочников (у к-ых только наименование)"
  [r-name title table-key]
  {:route-name r-name
   :title title
   :crudnamespace (str "gcclocal.catalogs." r-name)
   :get-rows-fn #(m-catalogs/get-basic-rows-with-params table-key %)
   :get-count-fn #(m-catalogs/get-basic-rows-count table-key %)
   :get-all-rows-fn #(crud/default-get-all-rows table-key)
   :excel-columns [{:name "Наименование"
                    :field :name
                    :ftype :text}
                   {:name "Дата последнего редактирования"
                    :field :last_edit_datetime
                    :ftype :datetime}]
   :validate-add-fn validate-basic-catalog
   :convert-add-fn crud/default-convert-on-add
   :validate-edit-fn validate-basic-catalog
   :convert-edit-fn crud/default-convert-on-edit
   :table-key table-key})


;; параметры для CRUD рутов справочников
(def crud-routes-params
  {:client             (get-params-for-basic-catalog
                         "clients"
                         "Справочник клиентов"
                         :catalogs_client)

   :supplier           (get-params-for-basic-catalog
                         "suppliers"
                         "Справочник поставщиков"
                         :catalogs_supplier)

   :good               (get-params-for-basic-catalog
                         "goods"
                         "Справочник товаров"
                         :catalogs_good)

   :station            (get-params-for-basic-catalog
                         "stations"
                         "Справочник станций"
                         :catalogs_station)

   :stationtraveltime  {:route-name "stationtraveltimes"
                        :title "Время ожидания на станциях"
                        :crudnamespace "gcclocal.catalogs.stationtraveltimes"
                        :get-rows-fn m-catalogs/get-stationtraveltimes-with-params
                        :get-all-rows-fn #(crud/default-get-all-rows :catalogs_stationtraveltime)
                        :get-count-fn m-catalogs/get-stationtraveltimes-count
                        :excel-columns [{:name "Станция"
                                         :field :station_name
                                         :ftype :text}
                                        {:name "Дней в пути"
                                         :field :days_in_travel
                                         :ftype :numeric}
                                        {:name "Дата последнего редактирования"
                                         :field :last_edit_datetime
                                         :ftype :datetime}]
                        :validate-add-fn validate-stationtraveltime
                        :convert-add-fn #(-> %
                                             (in-hm->ints [:station_id :days_in_travel])
                                             (crud/default-convert-on-add))
                        :validate-edit-fn validate-stationtraveltime
                        :convert-edit-fn #(-> %
                                             (in-hm->ints [:station_id :days_in_travel])
                                             (crud/default-convert-on-edit))
                        :table-key :catalogs_stationtraveltime}})















