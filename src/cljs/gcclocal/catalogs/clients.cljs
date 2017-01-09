(ns gcclocal.catalogs.clients
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)

(def config-headers
  [{:display-name "Наименование" :sort-field "name"}
   {:display-name "Дата последнего редактирования" :sort-field "last_edit_datetime"}
   ])



(def config-fields
  [{:view fv/text-field-view :field-name :name}
   {:view fv/datetime-readonly-view :field-name :last_edit_datetime}])


(defn extract-add-row
  []
  (utils/extract-row-from-fields [:name] "add"))


(defn ^:export init []
  (println "init clients")
  (ct-view/init {:urls {:get-rows "/catalogs/clients/paging"
                        :add-row "/catalogs/clients/add"
                        :edit-row "/catalogs/clients/edit"
                        :load-to-excel "/catalogs/clients/excel"
                        :delete-row "/catalogs/clients/delete"}
               :view-dom (.getElementById js/document "mainpanel")
               :crud-params {:config-fields config-fields
                             :config-headers config-headers
;;                              :add-disabled? true
;;                              :edit-disabled? true
;;                              :delete-disabled? true
                             }}))
