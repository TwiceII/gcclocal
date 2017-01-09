(ns gcclocal.views.basic-catalog-crud-table
  (:require [gcclocal.comm.pagination :as pg]
            [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.comm.channels :as ch]
            [gcclocal.views.crud-fields :as fv]
            [gcclocal.comm.dom-utils :as dom]
            [gcclocal.views.crud-views :as cv]
            [rum.core :as rum]
            [cljs.core.async :as a])
  (:require-macros [cljs.core.async.macros :as am]))

(enable-console-print!)


; состояние страницы (по умолчанию для всех crud)
(defonce default-app-state
  (atom
    { :loading-rows? true
      :rows []
      :total-c 0
      :nav-and-filters {:pagination {:pagesize 10 :currentpage 1}
                        :sorting {:field "last_edit_datetime"
                                  :default-field "last_edit_datetime"
                                  :desc? true}
                        :search-str ""}
      :add-mode? true
      :edit-mode? false
      :selected-row nil}))

(def get-cursor (partial rum/cursor default-app-state))

; курсоры для состояния
(def default-crud-cursors
  {:app-state (get-cursor [])
   :loading-rows? (get-cursor [:loading-rows?])
   :rows (get-cursor [:rows])
   :total-c (get-cursor [:total-c])
   :nav-and-filters (get-cursor [:nav-and-filters])
   :pagination (get-cursor [:nav-and-filters :pagination])
   :currentpage (get-cursor [:nav-and-filters :pagination :currentpage])
   :pagesize (get-cursor [:nav-and-filters :pagination :pagesize])
   :sorting (get-cursor [:nav-and-filters :sorting])
   :sort-field (get-cursor [:nav-and-filters :sorting :field])
   :default-sort-field (get-cursor [:nav-and-filters :sorting :default-field])
   :search-str (get-cursor [:nav-and-filters :search-str])
   :add-mode? (get-cursor [:add-mode?])
   :edit-mode? (get-cursor [:edit-mode?])
   :selected-row (get-cursor [:selected-row])})

;;================ Basic functions ===========================
(defn default-extract-add-row
  "Вытащить мэп для добавления строки"
  []
  {:name (dom/value (dom/q ".add-name"))})

(defn default-extract-edit-row
  "Вытащить мэп для редактирования строки"
  []
  {:name (dom/value (dom/q ".edit-name"))})

(defn reset-nav-and-filters
  "Установить настройки фильтров/пейджинга/сортировки по умолчанию"
  [cursors]
  (let [prevpagination @(:pagination cursors)
        default-sorting-field @(:default-sort-field cursors)]
    (reset! (:nav-and-filters cursors)
            {:pagination {:total-c 0 :pagesize (:pagesize prevpagination) :currentpage 1}
             :sorting {:field default-sorting-field
                       :default-field default-sorting-field
                       :desc? true}
             :search-str ""})))

(defn reset-page
  "Установить текущую страницу на стартовую"
  [cursors]
  (reset! (:currentpage cursors) 1))


(defn change-page
  "Поменять страницу"
  [cursors page refresh-rows-ch]
  (do
    (reset! (:currentpage cursors) page)
    (am/go (a/>! refresh-rows-ch :reset-none))))


(defn turn-off-all-modes
  "Выкл. все режимы (добавления, редактирования и т.д.)"
  [cursors]
  (reset! (:add-mode? cursors) false)
  (reset! (:edit-mode? cursors) false))


(defn sort-field
  "Сортировать по полю (при этом установив стр. на 1)"
  [cursors sort-field refresh-rows-ch]
  (let [sort-cursor (:sorting cursors)]
    (let [desc? (if (= sort-field (:field @sort-cursor))
                  (not (:desc? @sort-cursor))
                  false)]
      (reset! sort-cursor  {:field sort-field :desc? desc?})
      (am/go (a/>! refresh-rows-ch :reset-page)))))


(defn search
  "Искать по поиску (при этом установив стр. на 1)"
  [cursors s refresh-rows-ch]
  (do
    (reset! (:search-str cursors) s)
    (am/go (a/>! refresh-rows-ch :reset-page))))


(defn add-row
  [url extract-add-row-fn notify-ch refresh-rows-ch]
  (m/add-row url
             ((or extract-add-row-fn default-extract-add-row))
             notify-ch
             refresh-rows-ch))


(defn cancel-add-row
  [cursors]
  (reset! (:add-mode? cursors) false))


(defn select-row
  "Выбрать (или очистить) строку"
  [cursors row]
  (let [sel-row-cursor (:selected-row cursors)]
    (do
      (reset! sel-row-cursor (if (not= row @sel-row-cursor) row nil))
      (turn-off-all-modes cursors))))


(defn save-edit-row
  [url row extract-edit-row-fn notify-ch refresh-rows-ch]
  (m/edit-row url
              (:id row)
              ((or extract-edit-row-fn default-extract-edit-row))
              notify-ch
              refresh-rows-ch))


(defn cancel-edit-row
  [cursors]
  (turn-off-all-modes cursors))


(defn start-edit-row
  [cursors]
  (reset! (:edit-mode? cursors) true))


(defn click-delete-row
  [row]
  (.modal (js/$ "#delete-modal") "show"))


(defn delete-row
  [url row notify-ch refresh-rows-ch]
  (m/delete-row url row notify-ch refresh-rows-ch))


(defn start-add-row
  [cursors]
  (reset! (:add-mode? cursors) true))


(defn refresh-all-rows
  "Обновление строк"
  [cursors
   url
   reset-type
   reset-all-fn
   reset-page-fn]
  (let [current-state-cursor (:app-state cursors)
        loading-cursor (:loading-rows? cursors)
        rows-cursor (:rows cursors)
        count-cursor (:total-c cursors)
        sort-field (get-in @current-state-cursor [:nav-and-filters :sorting :field])
        desc-sort? (get-in @current-state-cursor [:nav-and-filters :sorting :desc?])]
    (do
      (reset! loading-cursor true)
      (case reset-type
        :reset-all (reset-all-fn)
        :reset-page (reset-page-fn)
        nil)
      (turn-off-all-modes cursors)
      (m/refresh-rows
        url
        {:page (get-in @current-state-cursor [:nav-and-filters :pagination :currentpage])
         :pagesize (get-in @current-state-cursor [:nav-and-filters :pagination :pagesize])
         :ordering (str (if desc-sort? "-" "") sort-field)
         :search (get-in @current-state-cursor [:nav-and-filters :search-str])}
        loading-cursor
        rows-cursor
        count-cursor))))


(defn load-to-excel
  "Выгрузить в excel"
  [cursors url]
  (println "load-to-excel! " url)
  (let [current-state-cursor (:app-state cursors)
        sort-field (get-in @current-state-cursor [:nav-and-filters :sorting :field])
        desc-sort? (get-in @current-state-cursor [:nav-and-filters :sorting :desc?])]
    (.open js/window
           (str url "?"
                (utils/params-to-url-str
                  {:ordering (str (if desc-sort? "-" "") sort-field)
                   :search (get-in @current-state-cursor [:nav-and-filters :search-str])})))))

;;     (utils/get-ajax
;;       url
;;       {:ordering (str (if desc-sort? "-" "") sort-field)
;;        :search (get-in @current-state-cursor [:nav-and-filters :search-str])}
;;       (fn [response]
;;         (println "return excel file")))))


;==========================================================================

(defn init-channels-and-watchers
  [cursors]
  (do
    ; при включении режима добавления убираем выделение со строк
    (add-watch (:add-mode? cursors) :add-mode
               (fn [k cursor old-v new-v]
                 (when (and (not= new-v old-v) (= new-v true))
                   (reset! (:selected-row cursors) nil)
                   )))))

;; ============================== вьюшки ==========================================
(rum/defc crud-main-view < rum/reactive
  [cursors
   crud-urls
   {:keys [change-page-ch
           refresh-rows-ch
           notify-ch]
    :as channels}
   {:keys [config-fields
           config-headers
           add-disabled?
           edit-disabled?
           delete-disabled?
           search-disabled?
           load-to-excel-disabled?
           extract-add-row-fn
           extract-edit-row-fn
           get-name-for-delete-fn]
    :as config}]
  (let [current-app-state (rum/react (:app-state cursors))
        is-loading? @(:loading-rows? cursors)]
    [:div
     [:div.ui.active.centered.inline.loader
      {:style {:visibility (if is-loading? "visible" "hidden")}}]
     [:div.ui.dimmable.basic.segment
;;        (when is-loading?
;;          [:div.ui.active.inverted.dimmer])
       (pg/pagination-view @(:pagination cursors)
                           @(:total-c cursors)
                           change-page-ch)
       (cv/default-top-panel-view @(:search-str cursors)
                                  add-disabled?
                                  search-disabled?
                                  @(:add-mode? cursors)
                                  #(start-add-row cursors)
                                  #(search cursors % refresh-rows-ch)
                                  load-to-excel-disabled?
                                  #(load-to-excel cursors
                                                  (:load-to-excel crud-urls)))
        (cv/default-crud-table-view
           {:rows @(:rows cursors)
            :config-fields config-fields
            :config-headers config-headers
            :add-disabled? add-disabled?
            :edit-disabled? edit-disabled?
            :delete-disabled? delete-disabled?
            :add-mode? @(:add-mode? cursors)
            :edit-mode? @(:edit-mode? cursors)
            :selected-row @(:selected-row cursors)
            :sorting-map @(:sorting cursors)
            :sort-fn #(sort-field cursors % refresh-rows-ch)
            :add-row-fn #(add-row (:add-row crud-urls)
                                     extract-add-row-fn
                                     notify-ch
                                     refresh-rows-ch)
            :cancel-add-fn #(cancel-add-row cursors)
            :select-row-fn #(select-row cursors %)
            :start-edit-row-fn #(start-edit-row cursors)
            :save-edit-row-fn #(save-edit-row (:edit-row crud-urls)
                                                 %
                                                 extract-edit-row-fn
                                                 notify-ch
                                                 refresh-rows-ch)
            :cancel-edit-row-fn #(cancel-edit-row cursors)
            :delete-row-fn click-delete-row})
       (when (not delete-disabled?)
         (cv/delete-modal-view
           ((or get-name-for-delete-fn :name) @(:selected-row cursors))
           (:id @(:selected-row cursors))
           #(delete-row (:delete-row crud-urls)
                           %
                           notify-ch
                           refresh-rows-ch)))]]))

(defn init
  "Инициализация модуля CRUD"
  [{:keys [urls
           pagesize
           default-sorting-field
           view-dom]
           {:keys [config-fields
                   config-headers
                   add-disabled?
                   edit-disabled?
                   delete-disabled?
                   search-disabled?
                   extract-add-row-fn
                   extract-edit-row-fn
                   get-name-for-delete-fn]
            :as crud-table-main-config} :crud-params
    :as params}]
  (let [cursors default-crud-cursors
        ; канал для обновления строк
        refresh-rows-ch (ch/init-refresh-rows-ch
                          (fn [reset-type]
                            (refresh-all-rows cursors
                                              (:get-rows urls)
                                              reset-type
                                              #(reset-nav-and-filters cursors)
                                              #(reset-page cursors))))
        ; канал для смены страницы
        change-page-ch (ch/init-change-page-ch
                         #(change-page cursors % refresh-rows-ch))
        ; канал для вывода сообщения на экран
        notify-ch (ch/init-notify-ch)]
    (do
      (init-channels-and-watchers cursors)
      (when pagesize
        (do
          (reset! (:pagesize cursors) pagesize)))
      (when default-sorting-field
        (do
          (reset! (:default-sort-field cursors) default-sorting-field)
          (reset! (:sort-field cursors) default-sorting-field)))
      (am/go (a/>! refresh-rows-ch true))
      (rum/mount (crud-main-view cursors
                                 urls
                                 {:change-page-ch change-page-ch
                                  :refresh-rows-ch refresh-rows-ch
                                  :notify-ch notify-ch}
                                 crud-table-main-config) view-dom))))

