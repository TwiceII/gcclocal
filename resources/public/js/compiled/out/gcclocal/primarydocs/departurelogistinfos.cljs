(ns gcclocal.primarydocs.departurelogistinfos
  (:require [gcclocal.views.basic-catalog-crud-table :as bc]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.pagination :as pg]
            [gcclocal.comm.dom-utils :as dom]
            [gcclocal.views.crud-fields :as fv]
            [gcclocal.views.crud-views :as cv]
            [gcclocal.views.common :as com-v]
            [gcclocal.comm.channels :as ch]
            [gcclocal.comm.amethods :as m]
            [rum.core :as rum]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :as a])
  (:require-macros [cljs.core.async.macros :as am]))

(enable-console-print!)


; состояние страницы (по умолчанию для всех crud)
(defonce app-state
  (atom
    { :loading-rows? true
      :rows []
      :total-c 0
      :nav-and-filters {:pagination {:pagesize 10 :currentpage 1}
                        :sorting {:field "shipping_date"
                                  :default-field "shipping_date"
                                  :desc? true}
                        :search-str ""}
      :show-mode "active" ;; active finished all
      :add-mode? false
      :add-disabled? false
      :delete-disabled? false
      :edit-mode? false
      :selected-row nil}))

(defonce test-sync-data
  (atom {:newdlis nil
         :edit-new-dli? false
         :selected-type nil
         }))

(def urls {:get-rows "/primarydocs/departurelogistinfos/paging"
           :load-to-excel "/primarydocs/departurelogistinfos/excel"
           :add-row "/primarydocs/departurelogistinfos/add"
           :edit-row "/primarydocs/departurelogistinfos/edit"
           :finish-row "/primarydocs/departurelogistinfos/finish"
           :unfinish-row "/primarydocs/departurelogistinfos/unfinish"
           :delete-row "/primarydocs/departurelogistinfos/delete"
           :get-newsync "/primarydocs/newsyncdlis"
           :add-newsync "/primarydocs/addnewsync"
           :deny-newsync "/primarydocs/denynewsync"
           })

(def get-cursor (partial rum/cursor app-state))

; курсоры для состояния
(def cursors
  {:app-state (get-cursor [])
   :rows (get-cursor [:rows])
   :loading-rows? (get-cursor [:loading-rows?])
   :total-c (get-cursor [:total-c])
   :nav-and-filters (get-cursor [:nav-and-filters])
   :pagination (get-cursor [:nav-and-filters :pagination])
   :currentpage (get-cursor [:nav-and-filters :pagination :currentpage])
   :pagesize (get-cursor [:nav-and-filters :pagination :pagesize])
   :sorting (get-cursor [:nav-and-filters :sorting])
   :sort-field (get-cursor [:nav-and-filters :sorting :field])
   :desc-sort? (get-cursor [:nav-and-filters :sorting :desc?])
   :default-sort-field (get-cursor [:nav-and-filters :sorting :default-field])
   :search-str (get-cursor [:nav-and-filters :search-str])
   :add-mode? (get-cursor [:add-mode?])
   :add-disabled? (get-cursor [:add-disabled?])
   :delete-disabled? (get-cursor [:delete-disabled?])
   :edit-mode? (get-cursor [:edit-mode?])
   :show-mode (get-cursor [:show-mode])
   :selected-row (get-cursor [:selected-row])})

; доп.справочники
(def clients-list (atom nil))
(def stations-list (atom nil))
(def stationtraveltimes-list (atom nil))
(def suppliers-list (atom nil))
(def clientapplications-list (atom nil))


(defn refresh-all-dli-rows
  "Обновить все строки (с учетом режима: активные, заверш., все)"
  [reset-type]
  (let [current-state-cursor (:app-state cursors)
        loading-cursor (:loading-rows? cursors)
        rows-cursor (:rows cursors)
        count-cursor (:total-c cursors)
        show-mode (get-in @current-state-cursor [:show-mode])
        sort-field (get-in @current-state-cursor [:nav-and-filters :sorting :field])
        desc-sort? (get-in @current-state-cursor [:nav-and-filters :sorting :desc?])]
    (do
      (reset! loading-cursor true)
      ; сбрасываем фильтры и пейджинг
      (case reset-type
        :reset-all (bc/reset-nav-and-filters cursors)
        :reset-page (bc/reset-page cursors)
        nil)
      ; выкл. все режимы
      (bc/turn-off-all-modes cursors)
      ; обновляем новые поставки, ожидающие подтверждения
      (utils/get-json
        (:get-newsync urls)
        {}
        (fn [response]
          (reset! (rum/cursor test-sync-data [:newdlis]) (:rows response))))
      ; обновляем строки
      (m/refresh-rows
        (:get-rows urls)
        {:page (get-in @current-state-cursor [:nav-and-filters :pagination :currentpage])
         :pagesize (get-in @current-state-cursor [:nav-and-filters :pagination :pagesize])
         :ordering (str (if desc-sort? "-" "") sort-field)
         :showmode show-mode
         :search (get-in @current-state-cursor [:nav-and-filters :search-str])}
        loading-cursor
        rows-cursor
        count-cursor)
      ; обновляем справочник станций
      (m/get-select-list-for-atom stations-list "/catalogs/stations/all")
      )))

; каналы
(def notify-ch (ch/init-notify-ch))
(def refresh-rows-ch (ch/init-refresh-rows-ch refresh-all-dli-rows))
(def change-page-ch (ch/init-change-page-ch
                      #(bc/change-page cursors % refresh-rows-ch)))


;============================== methods ================================
(defn change-show-mode [show-mode]
  "Поменять тип поставок в пути"
  (when (not= show-mode @(:show-mode cursors))
    (reset! (:show-mode cursors) show-mode)
    (reset! (:selected-row cursors) nil)
    (reset! (:add-disabled? cursors) (= show-mode "finished"))
    (am/go (a/>! refresh-rows-ch :reset-page))))

(defn finish-row
  "Завершить поставку в пути"
  [id]
  (do
    (utils/post-json-with-success-check
      (:finish-row urls)
      {:id id}
      (fn [_]
        (do
          (am/go (a/>! notify-ch {:text "Поставка завершена"
                                  :type "success"}))
          (am/go (a/>! refresh-rows-ch :reset-none))))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (utils/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))

(defn unfinish-row
  "Отменить завершение поставки в пути"
  [id]
  (do
    (utils/post-json-with-success-check
      (:unfinish-row urls)
      {:id id}
      (fn [_]
        (do
          (am/go (a/>! notify-ch {:text "Завершение поставки отменено"
                                  :type "success"}))
          (am/go (a/>! refresh-rows-ch :reset-none))))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (utils/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn select-new-dli-row
  "Выбрать строку из новых, ожидающих подтверждения"
  [newdli]
  (let [sel-row-cursor (:selected-row cursors)
        differs? (not= newdli @sel-row-cursor)]
    (do
      (reset! sel-row-cursor (if differs? newdli nil))
      (reset! (rum/cursor test-sync-data [:edit-new-dli?]) differs?)
      (reset! (rum/cursor test-sync-data [:selected-type])
              (if differs? :newdli nil))
      (bc/turn-off-all-modes cursors))))


(defn select-row-custom
  "Кастомный метод для выделения строки"
  [c r]
  (let [sel-row-cursor (:selected-row cursors)
        differs? (not= r @sel-row-cursor)]
    (do
      (bc/select-row c r)
      (reset! (rum/cursor test-sync-data [:selected-type])
              (if differs? :row nil))
      (reset! (rum/cursor test-sync-data [:edit-new-dli?]) false))))


(defn confirm-newsyncdli
  "Подтвердить новую поставку"
  [newdli]
  (let [newdlimap (-> (utils/extract-row-from-fields
                        [:from_station_id
                         :to_station_id
                         :travel_time
                         :client_application_id
                         :client_id
                         :supplier_id
                         :cost
                         :wagon_amount] "syncadd")
                      (assoc :newdli_id (:id newdli))
                      (assoc :wagon_number (:wagon_number newdli))
                      (assoc :shipping_date (:shipping_date newdli))
                      (assoc :from_station_code (:from_station_code newdli))
                      (assoc :from_station_name (:from_station_name newdli))
                      (assoc :to_station_code (:to_station_code newdli))
                      (assoc :to_station_name (:to_station_name newdli))
                      (assoc :current_station_code (:current_station_code newdli))
                      (assoc :current_station_name (:current_station_name newdli)))]
    (println "confirm")
    (println newdlimap)
    (utils/post-json-with-success-check
      "/primarydocs/addnewsync"
      {:row newdlimap}
      (fn [_]
        (do
          (am/go (a/>! notify-ch {:text "Поставка подтверждена"
                                  :type "success"}))
          (am/go (a/>! refresh-rows-ch :reset-page))))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (utils/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn delete-newsyncdli
  "Отменить новую поставку (удалить)"
  [newdli-id]
  (println "deleting " newdli-id)
  (utils/post-json-with-success-check
    "/primarydocs/deletenewsync"
    {:id newdli-id}
    (fn [_]
      (am/go (a/>! notify-ch {:text "Поставка удалена"
                                  :type "success"}))
      (am/go (a/>! refresh-rows-ch :reset-none)))
    (fn [r]
      (am/go (a/>! notify-ch {:text (utils/get-errors-str-from-map (:errors r))
                                  :type "error"})))))


(defn extract-add-row
  []
  (-> (utils/extract-row-from-fields [:shipping_date
                                      :client_application_id
                                      :supplier_id
                                      :from_station_id
                                      :to_station_id
                                      :station_status_id
                                      :wagon_number
                                      :arrival_date
                                      :travel_time
                                      :cost] "add")))

(defn extract-edit-row
  []
  (-> (utils/extract-row-from-fields [:shipping_date
                                      :client_application_id
                                      :supplier_id
                                      :from_station_id
                                      :to_station_id
                                      :station_status_id
                                      :wagon_number
                                      :arrival_date
                                      :travel_time
                                      :cost] "edit")))


;; (rum/defc deptype-menu-view
;;   "Переключатель типа поставок в пути с лоадером"
;;   [show-mode loading-rows?]
;;   [:div.ui.clearing.basic.segment
;;    [:div.ui.compact.small.right.floated.menu
;;     [:a.item {:class (if (= show-mode "active") "active" "")
;;               :on-click #(change-show-mode "active")} "Активные"]
;;     [:a.item {:class (if (= show-mode "finished") "active" "")
;;               :on-click #(change-show-mode "finished")} "Завершенные"]
;;     [:a.item {:class (if (= show-mode "all") "active" "")
;;               :on-click #(change-show-mode "all")} "Все"]]
;;    (when loading-rows?
;;      [:div.ui.active.inline.loader-dli.loader])])


(defn find-travel-time
  [station-id]
  (get (utils/find-some #(= (:station_id %) (read-string station-id))
                        @stationtraveltimes-list)
       :days_in_travel))


(defn load-to-excel
  "Выгрузить в excel"
  []
  (let [url (:load-to-excel urls)]
    (println "load-to-excel! " url)
    (let [current-state-cursor (:app-state cursors)
          sort-field @(:sort-field cursors)
          desc-sort? @(:desc-sort? cursors)
          show-mode @(:show-mode cursors)]
      (.open js/window
             (str url "?"
                  (utils/params-to-url-str
                    {:ordering (str (if desc-sort? "-" "") sort-field)
                     :search (get-in @current-state-cursor [:nav-and-filters :search-str])
                     :showmode show-mode}))))))

;; (utils/find-some
;;   #(= (:station_id %) "173")
;;   [{:id 156, :days_in_travel 9, :station_id 172}
;;  {:id 157, :days_in_travel 20, :station_id 173}
;;  {:id 158, :days_in_travel 14, :station_id 174}
;;  {:id 159, :days_in_travel 14, :station_id 175}
;;  {:id 160, :days_in_travel 14, :station_id 176}
;;  {:id 161, :days_in_travel 14, :station_id 177}
;;  {:id 162, :days_in_travel 14, :station_id 178}
;;  {:id 163, :days_in_travel 14, :station_id 179}
;;  {:id 164, :days_in_travel 14, :station_id 180}
;;  {:id 165, :days_in_travel 14, :station_id 181}
;;  {:id 166, :days_in_travel 10, :station_id 182}
;;  {:id 167, :days_in_travel 10, :station_id 183}
;;  {:id 168, :days_in_travel 14, :station_id 184}
;;  {:id 169, :days_in_travel 14, :station_id 185}
;;  {:id 170, :days_in_travel 14, :station_id 186}
;;  {:id 171, :days_in_travel 14, :station_id 207}])



(def config-headers
  [{:display-name "Дата отгр." :wideness "one" :sort-field "shipping_date"}
   {:display-name "Номер вагона" :wideness "one" :sort-field "wagon_number"}
   {:display-name "Ст.отправления" :wideness "two" :sort-field "from_station"}
   {:display-name "Ст.назначения" :wideness "two" :sort-field "to_station"}
   {:display-name "Статус (тек.станция)" :wideness "two" :sort-field nil}
   {:display-name "Дата прибытия" :wideness "one" :sort-field "arrival_date"}
   {:display-name "Время в пути дн (ожид.)" :wideness "one" :sort-field "travel_time"}
   {:display-name "Время в пути(факт.)" :wideness "one" :sort-field "days_fact"}
   {:display-name "Заявка" :wideness "one" :sort-field "client_application"}
   {:display-name "Клиент" :wideness "one" :sort-field "client_name"}
   {:display-name "Поставщик" :wideness "two" :sort-field "supplier_name"}
   {:display-name "Себестоимость" :wideness "one" :sort-field "cost"}])


(def config-fields
  [{:view fv/date-with-calendar-view :field-name :shipping_date}
   {:view fv/text-field-view :field-name :wagon_number}
   {:view fv/select-view :field-name :from_station_id
    :misc-params {:select-options stations-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/select-view :field-name :to_station_id
    :misc-params {:select-options stations-list
                  :get-option-name-fn #(:name %)
                  ; при выборе станции от, получаем кол-во дней
                  :on-change-fn (fn [v t]
                                  (let [tr-time (find-travel-time v)]
                                    (.val (js/$ ".edit-travel_time") tr-time)
                                    (.val (js/$ ".add-travel_time") tr-time)))
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/plain-text-view :field-name :station_status_name}
   {:view fv/date-with-calendar-view :field-name :arrival_date
    :misc-params {:nullable? true}}
   {:view fv/number-field-view :field-name :travel_time}
   {:view fv/custom-view :misc-params {:custom-fn
                                       #(->
                                          (let [days-fact (if (= (:d_status %) 1)
                                                            (:days_fact %)
                                                            (:days_fact_finished %))]
                                            [:div {:style {:font-weight (if (> days-fact
                                                                               (:travel_time %))
                                                                            "bold"
                                                                            "normal")}}
                                             days-fact]))}}
   {:view fv/select-view :field-name :client_application_id
    :misc-params {:select-options clientapplications-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/select-readonly-view :field-name :client_id
    :misc-params {:select-options clients-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"}}
   {:view fv/select-view :field-name :supplier_id
    :misc-params {:select-options suppliers-list
                  :get-option-name-fn #(:name %)
                  :default-text "Выбрать"
                  :nullable? false}}
   {:view fv/money-field-view :field-name :cost}])

;; ============================== views ==================================
(rum/defc top-panel
  [add-mode?
   add-disabled?
   on-click-add-fn
   search-str
   search-fn
   show-mode
   selected-row
   selected-type]
  [:div {:class "ui basic clearing segment no-padding-segment"}
   [:div {:style {:float "left" :margin-right "20px"}}
    [:div.ui.compact.small.right.floated.menu
     [:a.item {:class (if (= show-mode "active") "active" "")
               :on-click #(change-show-mode "active")} "Активные"]
     [:a.item {:class (if (= show-mode "finished") "active" "")
               :on-click #(change-show-mode "finished")} "Завершенные"]
     [:a.item {:class (if (= show-mode "all") "active" "")
               :on-click #(change-show-mode "all")} "Все"]]]
   ; Кнопка добавления
   (when (and (not add-mode?) (not add-disabled?) (not= selected-type :newdli))
     [:div {:style {:float "left"}}
      [:div.ui.primary.labeled.icon.button
             {:on-click on-click-add-fn}
       [:i.plus.icon] "Добавить"]])
   ; Кнопка завершения
   (when (and (not (nil? selected-row))
              (= selected-type :row)
              (= 1 (:d_status selected-row)))
     [:div.ui.green.labeled.icon.button
      {:on-click #(finish-row (:id selected-row))}
      [:i.checkmark.icon] "Завершить"])
   ; Кнопка отмены завершения
   (when (and (not (nil? selected-row))
              (= selected-type :row)
              (= 3 (:d_status selected-row)))
     [:div.ui.yellow.labeled.icon.button
      {:on-click #(unfinish-row (:id selected-row))}
      [:i.undo.icon] "Отменить завершение"])
   ; Кнопка удаления неподтвер. записи
   (when (and (not (nil? selected-row))
              (= selected-type :newdli))
     [:div.ui.labeled.icon.button
      {:on-click #(com-v/show-approve-modal
                    "Вы действительно хотите удалить неподтвержденную поставку?"
                    (fn [] (delete-newsyncdli (:id selected-row))))}
      [:i.ban.icon] "Удалить"])
   ;; Кнопка выгрузки в Excel
   [:div {:class "ui labeled icon button"
            :on-click load-to-excel}
      [:i.file.excel.outline.icon] "Выгрузить в Excel"]

   ; поле для поиска
   (cv/search-input-view search-str search-fn)])


;; ================= для синхронизации вьюшки =======================
(rum/defc td-dli-station-view < rum/reactive
  "Поле для выбора станций относительно пришедшей с сервиса"
  [edit-mode? station-name station-code class-name]
  (let [f-station (utils/find-some #(= station-code (:sync_station_code %))
                                   (rum/react stations-list))]
    [:td
     station-name
     (fv/select-view edit-mode?
                     (:id f-station)
                     class-name
                     {:select-options stations-list
                      :get-option-name-fn #(:name %)
                      :default-text "Выбрать станцию"
                      ; при выборе станции от, получаем кол-во дней
                      :on-change-fn (fn [v t]
                                      (if (= class-name "syncadd-to_station_id")
                                        (let [tr-time (find-travel-time v)]
                                          (.val (js/$ ".syncadd-travel_time") tr-time))))
                      :nullable? false})]))


(rum/defc new-dli-tr-view
  "Строка с новой поставкой, ожидающей подтверждения"
  [newdli selected? edit-mode?]
  (let [in-edit? (and selected? edit-mode?)]
    [:tr {:class (str (if selected? "active" "") " ")
          :on-click #(select-new-dli-row newdli)}
     [:td (fv/date-readonly-view in-edit? (:shipping_date newdli))]
     [:td (:wagon_number newdli)]
     (td-dli-station-view in-edit?
                          (:from_station_name newdli)
                          (:from_station_code newdli)
                          "syncadd-from_station_id")
     (td-dli-station-view in-edit?
                          (:to_station_name newdli)
                          (:to_station_code newdli)
                          "syncadd-to_station_id")
     [:td (:current_station_name newdli)]
     [:td (fv/number-field-view in-edit?
                                nil
                                "syncadd-travel_time")]
     [:td
      (fv/select-view in-edit?
                      nil
                      "syncadd-client_application_id"
                      {:select-options clientapplications-list
                       :get-option-name-fn #(:name %)
                       :default-text "Выбрать заявку"
                       :nullable? false})]
     [:td
      (fv/select-view in-edit?
                      nil
                      "syncadd-supplier_id"
                      {:select-options suppliers-list
                       :get-option-name-fn #(:name %)
                       :default-text "Выбрать поставщика"
                       :nullable? false})]
     [:td
      (fv/money-field-view in-edit?
                           nil
                           "syncadd-cost")]
     [:td (fv/number-field-view in-edit?
                                69
                                "syncadd-wagon_amount")]
     [:td
      (if in-edit?
        [:div
         ; кнопка подтверждения
         [:div.ui.green.icon.tiny.button {:title "Подтвердить"
                                          :on-click #(do
                                                       (confirm-newsyncdli newdli)
                                                       (.stopPropagation %))}
          [:i.checkmark.icon]]
         ; кнопка отмены
         [:div.ui.red.icon.tiny.button {:title "Отмена"
                                        :on-click #(do
                                                     (select-new-dli-row newdli)
                                                     (.stopPropagation %))}
          [:i.remove.icon]]])
        ]]))


(rum/defc sync-new-dlis-view
  "Новые поставки для подтверждения с sigis"
  [newdlis selected-item edit-mode?]
  [:div {:class "sync-new-dlis"}
   [:h4.ui.teal.header (str "Новые поставки к подтверждению (" (count newdlis) ")")]
   ; Таблица с новыми поставками
   [:table {:class "ui small selectable celled fixed table with-overflow-tds"}
    [:thead
     [:tr
      [:th.one.wide "Дата отгр." ]
      [:th.one.wide "Номер вагона"]
      [:th.two.wide "Ст.отправления"]
      [:th.two.wide "Ст.назначения"]
      [:th.two.wide "Статус (тек.станция)"]
      [:th.one.wide "Время в пути (ожид.)"]
      [:th.two.wide "Заявка"]
      [:th.two.wide "Поставщик"]
      [:th.two.wide "Себестоимость"]
      [:th.one.wide "Вес груза"]
      [:th {:class "control-th"}]]]
    [:tbody
     (map #(new-dli-tr-view %
                            (= selected-item %)
                            edit-mode?)
          newdlis)]]])


(utils/moment-after?
  (utils/current-date)
  (utils/add-days-moment (utils/iso-str->moment "2016-07-15T00:00:00Z") 14))



;; ==============================================================================
(rum/defc main-view < rum/reactive
  []
  (let [current-app-state (rum/react (:app-state cursors))
        newdlis (rum/react (rum/cursor test-sync-data [:newdlis]))

        selected-type (rum/react (rum/cursor test-sync-data [:selected-type]))]
    [:div
;;      (deptype-menu-view @(:show-mode cursors)
;;                         @(:loading-rows? cursors))
     (pg/pagination-view @(:pagination cursors)
                         @(:total-c cursors)
                         change-page-ch)
     (top-panel @(:add-mode? cursors)
                @(:add-disabled? cursors)
                #(bc/start-add-row cursors)
                @(:search-str cursors)
                #(bc/search cursors % refresh-rows-ch)
                @(:show-mode cursors)
                @(:selected-row cursors)
                selected-type)
     (when (and (not= @(:show-mode cursors) "finished")
                (not (utils/nil-or-empty? newdlis)))
       (sync-new-dlis-view newdlis
                           @(:selected-row cursors)
                           (rum/react (rum/cursor test-sync-data [:edit-new-dli?]))))
     (cv/default-crud-table-view
       {:rows @(:rows cursors)
        ; красим в нужный цвет строку
        :custom-get-tr-class-fn #(cond-> ""
                                         ; если завершенная
                                         (= 3 (:d_status %)) (str "finished-tr")
                                         ; если просроченная (в пути больше, чем планировалось)
                                         (and (= 1 (:d_status %))
                                              (utils/moment-after?
                                                (utils/current-date)
                                                (utils/add-days-moment
                                                  (utils/iso-str->moment (:shipping_date %))
                                                  (:travel_time %)))) (str "negative"))
        :config-fields config-fields
        :config-headers config-headers
        :add-disabled? @(:add-disabled? cursors)
        :edit-disabled? false
        :delete-disabled? false
        :add-mode? @(:add-mode? cursors)
        :edit-mode? @(:edit-mode? cursors)
        :selected-row @(:selected-row cursors)
        :select-row-fn #(select-row-custom cursors %)
        :sorting-map @(:sorting cursors)
        :sort-fn #(bc/sort-field cursors % refresh-rows-ch)
        :add-row-fn #(bc/add-row (:add-row urls)
                                 extract-add-row
                                 notify-ch
                                 refresh-rows-ch)
        :cancel-add-fn #(bc/cancel-add-row cursors)
        :selected-row-fn #(select-row-custom cursors %)
        :start-edit-row-fn #(bc/start-edit-row cursors)
        :save-edit-row-fn #(bc/save-edit-row (:edit-row urls)
                                             %
                                             extract-edit-row
                                             notify-ch
                                             refresh-rows-ch)
        :cancel-edit-row-fn #(bc/cancel-edit-row cursors)
        :delete-row-fn bc/click-delete-row})
     (when (not @(:delete-disabled? cursors))
       (cv/delete-modal-view
         (:wagon_number @(:selected-row cursors))
         (:id @(:selected-row cursors))
         #(bc/delete-row (:delete-row urls)
                      %
                      notify-ch
                      refresh-rows-ch)))
     ; модальное окно для подтверждения удаления
     (com-v/basic-approve-modal-view)
     ]))


(defn ^:export init []
  (println "init dlis")
  ; загрузить нужные справочники
  (m/get-select-list-for-atom clients-list "/catalogs/clients/all")
  (m/get-select-list-for-atom stations-list "/catalogs/stations/all")
  (m/get-select-list-for-atom stationtraveltimes-list "/catalogs/stationtraveltimes/all")
  (m/get-select-list-for-atom suppliers-list "/catalogs/suppliers/all")
  (m/get-select-list-for-atom clientapplications-list "/primarydocs/clientapplications/all")
  ; обновляем данные
  (am/go (a/>! refresh-rows-ch true))
  ; вывести на экран
  (rum/mount (main-view) (.getElementById js/document "mainpanel")))


(defn on-js-reload [])
