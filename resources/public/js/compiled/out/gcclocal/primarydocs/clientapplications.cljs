(ns gcclocal.primarydocs.clientapplications
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [{:display-name "Дата заявки" :wideness "one" :sort-field "application_date"}
   {:display-name "Номер заявки" :wideness "two" :sort-field "name"}
   {:display-name "Клиент" :wideness "three" :sort-field "client"}
   {:display-name "Договор" :wideness "four" :sort-field "client_contract"}
   {:display-name "Количество" :wideness "one" :sort-field "amount"}
   {:display-name "Сумма" :wideness "two" :sort-field "summ"}
   {:display-name "Дата добавления" :wideness "two" :sort-field "creation_datetime"}
   ])

(def clients-list (atom nil))
(def clientcontracts-list (atom nil))
(def currencies-list (atom nil))

(def config-fields
  [{:view fv/date-with-calendar-view :field-name :application_date}
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
   {:view fv/number-field-view :field-name :amount}
   {:view fv/cmoney-field-view :field-name :cmoney
    :misc-params {:select-options currencies-list}}
   {:view fv/datetime-readonly-view :field-name :creation_datetime}
   ])


(defn extract-add-row
  []
  (-> (utils/extract-row-from-fields [:application_date
                                      :name
                                      :client_id
                                      :client_contract_id
                                      :amount
                                      :cmoney-summ
                                      :cmoney-cid] "add")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))


(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:application_date
                                      :name
                                      :client_id
                                      :client_contract_id
                                      :amount
                                      :cmoney-summ
                                      :cmoney-cid] "edit")
      (utils/rename-keys-in-map {:cmoney-summ :summ :cmoney-cid :c_id})))


(defn ^:export init []
  (println "init clientapps")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  (m/get-select-list-for-atom clientcontracts-list "/primarydocs/clientcontracts/all")
  (m/get-select-list-for-atom currencies-list "/catalogs/currencies/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/clientapplications/paging"
                        :load-to-excel "/primarydocs/clientapplications/excel"
                        :add-row "/primarydocs/clientapplications/add"
                        :edit-row "/primarydocs/clientapplications/edit"
                        :delete-row "/primarydocs/clientapplications/delete"}
                 :pagesize 20
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
;;                                :add-disabled? true
;;                                :edit-disabled? true
;;                                :delete-disabled? true
                               :extract-add-row-fn extract-add-row
                               :extract-edit-row-fn extract-edit-row}
                 :view-dom (.getElementById js/document "mainpanel")}))

