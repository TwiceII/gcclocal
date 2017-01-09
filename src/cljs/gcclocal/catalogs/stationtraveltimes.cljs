(ns gcclocal.catalogs.stationtraveltimes
  (:require [gcclocal.views.basic-catalog-crud-table :as ct-view]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]))

(enable-console-print!)



(def config-headers
  [{:display-name "Станция" :wideness "six" :sort-field "station"}
   {:display-name "Дней в пути" :wideness "five" :sort-field "days_in_travel"}
   {:display-name "Дата последнего редактирования" :wideness "four"  :sort-field "last_edit_datetime"}])

; список станций для выбора
(def stations-list (atom nil))

(def config-fields
  [{:view fv/select-view :field-name :station_id
    :misc-params {:select-options stations-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/number-field-view :field-name :days_in_travel}
   {:view fv/datetime-readonly-view :field-name :last_edit_datetime}])


(defn extract-add-row
  []
  (utils/extract-row-from-fields [:station_id :days_in_travel] "add"))


(defn extract-edit-row
  []
  (utils/extract-row-from-fields [:station_id :days_in_travel] "edit"))

(defn get-name-for-delete-fn
  [selected-row]
  (str "запись для " (:name (utils/get-map-by-id
                              @stations-list
                              (:station_id selected-row)))))


(defn ^:export init []
  (println "init stationtraveltimes")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom stations-list "/catalogs/stations/all")
  ; вывести на экран
  (ct-view/init {:urls {:get-rows "/catalogs/stationtraveltimes/paging"
                        :load-to-excel "/catalogs/stationtraveltimes/excel"
                        :add-row "/catalogs/stationtraveltimes/add"
                        :edit-row "/catalogs/stationtraveltimes/edit"
                        :delete-row "/catalogs/stationtraveltimes/delete"}
                 :crud-params {:config-fields config-fields
                               :config-headers config-headers
                               :extract-add-row-fn extract-add-row
                               :extract-edit-row-fn extract-edit-row
                               :get-name-for-delete-fn get-name-for-delete-fn}
                 :view-dom (.getElementById js/document "mainpanel")}))


