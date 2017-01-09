(ns gcclocal.catalogs.goods
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
  (println "init clients")
  (ct-view/init {:urls {:get-rows "/catalogs/goods/paging"
                        :add-row "/catalogs/goods/add"
                        :edit-row "/catalogs/goods/edit"
                        :load-to-excel "/catalogs/goods/excel"
                        :delete-row "/catalogs/goods/delete"}
               :crud-params {:config-fields config-fields
                             :config-headers config-headers}
               :view-dom (.getElementById js/document "mainpanel")}))
