(ns gcclocal.primarydocs.clientfines
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)


(def config-headers
  [{:display-name "Дата документа" :wideness "two" :sort-field "doc_date"}
   {:display-name "Документ" :wideness "two" :sort-field "doc_name"}
   {:display-name "Клиент" :wideness "three" :sort-field "client"}
   {:display-name "Договор" :wideness "three" :sort-field "client_contract"}
   {:display-name "Заявка" :wideness "three" :sort-field "client_application"}
   {:display-name "Сумма" :wideness "one" :sort-field "summ"}
   {:display-name "Дата добавления" :wideness "two" :sort-field "creation_datetime"}
   ])


(def clients-list (atom nil))
(def clientcontracts-list (atom nil))
(def clientapplications-list (atom nil))


(def config-fields
  [{:view fv/date-with-calendar-view :field-name :doc_date}
   {:view fv/text-field-view :field-name :doc_name}
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
   {:view fv/cmoney-readonly-view :field-name :cmoney}
   {:view fv/datetime-readonly-view :field-name :creation_datetime}
   ])



(defn ^:export init []
  (println "init clientfines")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  (m/get-select-list-for-atom clientcontracts-list "/primarydocs/clientcontracts/all")
  (m/get-select-list-for-atom clientapplications-list "/primarydocs/clientapplications/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/clientfines/paging"
                        :load-to-excel "/primarydocs/clientfines/excel"}
                 :pagesize 20
                 :default-sorting-field "doc_date"
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
                               :add-disabled? true
                               :edit-disabled? true
                               :delete-disabled? true}
                 :view-dom (.getElementById js/document "mainpanel")}))
