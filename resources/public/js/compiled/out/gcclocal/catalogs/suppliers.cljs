(ns gcclocal.catalogs.suppliers
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)

;(println "Suppliers start")


(def config-headers
  [{:display-name "Наименование" :sort-field "name"}
   {:display-name "Дата последнего редактирования" :sort-field "last_edit_datetime"}])


(def config-fields
  [{:view fv/text-field-view :field-name :name}
   {:view fv/datetime-readonly-view :field-name :last_edit_datetime}])

(defn ^:export init []
  (println "init suppliers")
  (ct-view/init {:urls {:get-rows "/catalogs/suppliers/paging"
                        :load-to-excel "/catalogs/suppliers/excel"
                        :add-row "/catalogs/suppliers/add"
                        :edit-row "/catalogs/suppliers/edit"
                        :delete-row "/catalogs/suppliers/delete"}
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers}
                 :view-dom (.getElementById js/document "mainpanel")}))


(defn on-js-reload [])
