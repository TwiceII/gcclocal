(ns gcclocal.primarydocs.factclientpayments
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [{:display-name "Клиент" :sort-field "client"}
   {:display-name "Сумма" :sort-field "summ"}
   {:display-name "Дата последнего редактирования" :sort-field "last_edit_datetime"}
   ])

(def clients-list (atom nil))

(def config-fields
  [{:view fv/select-view :field-name :client_id
    :misc-params {:select-options clients-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/money-field-view :field-name :summ}
   {:view fv/datetime-readonly-view :field-name :last_edit_datetime}
   ])


(defn extract-add-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :summ] "add")))

(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :summ] "edit")))

(defn get-name-for-delete-fn
  [selected-row]
  (str "запись для " (:name (utils/get-map-by-id
                              @clients-list
                              (:client_id selected-row)))))

(defn ^:export init []
  (println "init factclientpayments")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/factclientpayments/paging"
                        :add-row "/primarydocs/factclientpayments/add"
                        :edit-row "/primarydocs/factclientpayments/edit"
                        :delete-row "/primarydocs/factclientpayments/delete"}
                 :pagesize 20
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
                               :extract-add-row-fn extract-add-row
                               :extract-edit-row-fn extract-edit-row
                               :get-name-for-delete-fn get-name-for-delete-fn}
                 :view-dom (.getElementById js/document "mainpanel")}))

