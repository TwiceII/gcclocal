(ns gcclocal.catalogs.stations
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [{:display-name "Наименование" :sort-field "name"}
   {:display-name "Дата последнего редактирования" :sort-field "last_edit_datetime"}])


(def config-fields
  [{:view fv/text-field-view :field-name :name}
   {:view fv/datetime-readonly-view :field-name :last_edit_datetime}])


(defn ^:export init []
  (println "init stations")
  (ct-view/init {:urls {:get-rows "/catalogs/stations/paging"
                        :add-row "/catalogs/stations/add"
                        :edit-row "/catalogs/stations/edit"
                        :load-to-excel "/catalogs/stations/excel"
                        :delete-row "/catalogs/stations/delete"}
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers}
                 :view-dom (.getElementById js/document "mainpanel")}))

