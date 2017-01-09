(ns gcclocal.primarydocs.initbalanceondate
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [
   {:display-name "Сумма" :sort-field "summ"}
   {:display-name "Дата последнего редактирования" :sort-field "last_edit_datetime"}
   ])


(def config-fields
  [{:view fv/money-field-view :field-name :summ}
   {:view fv/datetime-readonly-view :field-name :last_edit_datetime}
   ])



(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:summ] "edit")))


(defn ^:export init []
  (println "init clientapps")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/initbalanceondate/paging"
                        :edit-row "/primarydocs/initbalanceondate/edit"}
                 :pagesize 20
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
                               :add-disabled? true
                               :delete-disabled? true
                               :search-disabled? true ; поиск отключен
                               :load-to-excel-disabled? true ; выгрузка в excel отключена
                               :extract-edit-row-fn extract-edit-row}
                 :view-dom (.getElementById js/document "mainpanel")}))

