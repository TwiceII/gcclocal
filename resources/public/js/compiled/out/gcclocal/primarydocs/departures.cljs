(ns gcclocal.primarydocs.departures
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [{:display-name "Документ" :wideness "two" :sort-field "doc_name"}
   {:display-name "Дата документа" :wideness "one" :sort-field "doc_date"}
   {:display-name "Клиент" :wideness "three" :sort-field "client"}
   {:display-name "Договор" :wideness "three" :sort-field "client_contract"}
   {:display-name "Заявка" :wideness "three" :sort-field "client_application"}
   {:display-name "Сумма" :wideness "two" :sort-field "summ"}
   {:display-name "Дата план.опл" :wideness "one" :sort-field "planned_payment_date"}
   {:display-name "Дата добавления" :wideness "one" :sort-field "creation_datetime"}
   ])


(def clients-list (atom nil))
(def clientcontracts-list (atom nil))
(def clientapplications-list (atom nil))
(def currencies-list (atom nil))


(def config-fields
  [{:view fv/text-field-view :field-name :doc_name}
   {:view fv/date-with-calendar-view :field-name :doc_date}
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
   {:view fv/date-readonly-view :field-name :planned_payment_date}
   {:view fv/datetime-readonly-view :field-name :creation_datetime}])


(defn extract-add-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :doc_name
                                      :cmoney-summ
                                      :client_contract_id
                                      :client_application_id
                                      :doc_date] "add")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))


(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:client_id
                                      :doc_name
                                      :cmoney-summ
                                      :client_contract_id
                                      :client_application_id
                                      :doc_date] "edit")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))


(defn ^:export init []
  (println "init departures")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  (m/get-select-list-for-atom clientcontracts-list "/primarydocs/clientcontracts/all")
  (m/get-select-list-for-atom clientapplications-list "/primarydocs/clientapplications/all")
  (m/get-select-list-for-atom currencies-list "/catalogs/currencies/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/departures/paging"
                        :load-to-excel "/primarydocs/departures/excel"
                        :add-row "/primarydocs/departures/add"
                        :edit-row "/primarydocs/departures/edit"
                        :delete-row "/primarydocs/departures/delete"}
                 :pagesize 20
                 :default-sorting-field "doc_date"
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
;;                                :add-disabled? true
;;                                :edit-disabled? true
;;                                :delete-disabled? true
                               :extract-add-row-fn extract-add-row
                               :extract-edit-row-fn extract-edit-row
                               :get-name-for-delete-fn #(:doc_name %)}
                 :view-dom (.getElementById js/document "mainpanel")}))
