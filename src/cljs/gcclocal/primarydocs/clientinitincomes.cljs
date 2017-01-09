(ns gcclocal.primarydocs.clientinitincomes
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [{:display-name "Клиент" :sort-field "client"}
   {:display-name "Заявка" :sort-field "client_application"}
   {:display-name "Сумма" :sort-field "summ"}
   {:display-name "Дата документа" :sort-field "doc_date"}
   {:display-name "Дата последнего редактирования" :sort-field "last_edit_datetime"}
   ])

(def clients-list (atom nil))
(def client-apps-list (atom nil))
(def currencies-list (atom nil))

(def config-fields
  [{:view fv/select-view :field-name :client_id
    :misc-params {:select-options clients-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"}}
   {:view fv/select-view :field-name :client_application_id
    :misc-params {:select-options client-apps-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"}}
   {:view fv/cmoney-field-view :field-name :cmoney
    :misc-params {:select-options currencies-list}}
   {:view fv/date-with-calendar-view :field-name :doc_date}
   {:view fv/datetime-readonly-view :field-name :last_edit_datetime}
   ])


(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :client_application_id
                                      :cmoney-summ
                                      :cmoney-cid
                                      :doc_date] "edit")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))


(defn extract-add-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :client_application_id
                                      :cmoney-summ
                                      :cmoney-cid
                                      :doc_date] "add")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))


(defn ^:export init []
  (println "init clientinitincomes")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  (m/get-select-list-for-atom client-apps-list "/primarydocs/clientapplications/all")
  (m/get-select-list-for-atom currencies-list "/catalogs/currencies/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/clientinitincomes/paging"
                        :load-to-excel "/primarydocs/clientinitincomes/excel"
                        :add-row "/primarydocs/clientinitincomes/add"
                        :edit-row "/primarydocs/clientinitincomes/edit"
                        :delete-row "/primarydocs/clientinitincomes/delete"}
                 :pagesize 20
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
                               :extract-edit-row-fn extract-edit-row
                               :extract-add-row-fn extract-add-row}
                 :view-dom (.getElementById js/document "mainpanel")}))


