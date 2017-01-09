(ns gcclocal.primarydocs.clientpayments
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [{:display-name "Дата документа" :wideness "two" :sort-field "doc_date"}
   {:display-name "Документ" :wideness "two" :sort-field "name"}
   {:display-name "Клиент" :wideness "two" :sort-field "client"}
   {:display-name "Договор" :wideness "three" :sort-field "client_contract"}
   {:display-name "Заявка" :wideness "three" :sort-field "client_application"}
   {:display-name "Сумма" :wideness "two" :sort-field "summ"}
   {:display-name "Дата добавления" :wideness "two" :sort-field "creation_datetime"}
   ])


(def clients-list (atom nil))
(def clientcontracts-list (atom nil))
(def clientapplications-list (atom nil))
(def currencies-list (atom nil))


(def config-fields
  [{:view fv/date-with-calendar-view :field-name :doc_date}
   {:view fv/text-field-view :field-name :name}
   {:view fv/select-view :field-name :client_id
    :misc-params {:select-options clients-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/select-view :field-name :client_contract_id
    :misc-params {:select-options clientcontracts-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/select-view :field-name :client_application_id
    :misc-params {:select-options clientapplications-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? true}}
   {:view fv/cmoney-field-view :field-name :cmoney
    :misc-params {:select-options currencies-list}}
   {:view fv/datetime-readonly-view :field-name :creation_datetime}
   ])


(defn extract-add-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :name
                                      :cmoney-summ
                                      :client_contract_id
                                      :client_application_id
                                      :doc_date] "add")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))

(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :name
                                      :cmoney-summ
                                      :client_contract_id
                                      :client_application_id
                                      :doc_date] "edit")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))


(defn ^:export init []
  (println "init clientpayments")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  (m/get-select-list-for-atom clientcontracts-list "/primarydocs/clientcontracts/all")
  (m/get-select-list-for-atom clientapplications-list "/primarydocs/clientapplications/all")
  (m/get-select-list-for-atom currencies-list "/catalogs/currencies/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/clientpayments/paging"
                        :load-to-excel "/primarydocs/clientpayments/excel"
                        :add-row "/primarydocs/clientpayments/add"
                        :edit-row "/primarydocs/clientpayments/edit"
                        :delete-row "/primarydocs/clientpayments/delete"}
                 :pagesize 20
                 :default-sorting-field "doc_date"
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
;;                                :add-disabled? true
;;                                :edit-disabled? true
;;                                :delete-disabled? true
                               :extract-add-row-fn extract-add-row
                               :extract-edit-row-fn extract-edit-row
                               :get-name-for-delete-fn #(:name %)}
                 :view-dom (.getElementById js/document "mainpanel")}))
