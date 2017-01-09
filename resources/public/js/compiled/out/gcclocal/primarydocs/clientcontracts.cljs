(ns gcclocal.primarydocs.clientcontracts
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)



(def config-headers
  [{:display-name "Наименование" :wideness "three" :sort-field "name"}
   {:display-name "Клиент" :wideness "three" :sort-field "client"}
   {:display-name "Товар" :wideness "three" :sort-field "good"}
   {:display-name "Предопл. %" :wideness "one" :sort-field "prepay_percentage"}
   {:display-name "Предопл. дн" :wideness "one" :sort-field "prepay_time"}
   {:display-name "Опл. %" :wideness "one" :sort-field "pay_percentage"}
   {:display-name "Опл. дн" :wideness "one" :sort-field "pay_time"}
   {:display-name "Ср.действия с" :wideness "one" :sort-field "from_date_active"}
   {:display-name "Ср.действия по" :wideness "one" :sort-field "to_date_active"}
   ])

(def clients-list (atom nil))
(def goods-list (atom nil))


(def config-fields
  [{:view fv/text-field-view :field-name :name}
   {:view fv/select-view :field-name :client_id
    :misc-params {:select-options clients-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/select-view :field-name :good_id
    :misc-params {:select-options goods-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/number-field-view :field-name :prepay_percentage}
   {:view fv/number-field-view :field-name :prepay_time}
   {:view fv/number-field-view :field-name :pay_percentage}
   {:view fv/number-field-view :field-name :pay_time}
   {:view fv/date-with-calendar-view :field-name :from_date_active}
   {:view fv/date-with-calendar-view :field-name :to_date_active}
   ])


(defn extract-add-row
  []
  (-> (utils/extract-row-from-fields [:name
                                  :client_id
                                  :good_id
                                  :prepay_percentage
                                  :prepay_time
                                  :pay_percentage
                                  :pay_time
                                  :from_date_active
                                  :to_date_active] "add")))

(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:name
                                  :client_id
                                  :good_id
                                  :prepay_percentage
                                  :prepay_time
                                  :pay_percentage
                                  :pay_time
                                  :from_date_active
                                  :to_date_active] "edit")))

(defn ^:export init []
  (println "init clientcontracts")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  (m/get-select-list-for-atom goods-list "/catalogs/goods/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/primarydocs/clientcontracts/paging"
                        :load-to-excel "/primarydocs/clientcontracts/excel"
                        :add-row "/primarydocs/clientcontracts/add"
                        :edit-row "/primarydocs/clientcontracts/edit"
                        :delete-row "/primarydocs/clientcontracts/delete"}
                 :pagesize 20
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
;;                                :add-disabled? true
;;                                :delete-disabled? true
                               :extract-add-row-fn extract-add-row
                               :extract-edit-row-fn extract-edit-row}
                 :view-dom (.getElementById js/document "mainpanel")}))

