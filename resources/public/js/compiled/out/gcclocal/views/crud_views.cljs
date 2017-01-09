(ns gcclocal.views.crud-views
  (:require [gcclocal.comm.utils :as utils]
            [gcclocal.comm.amethods :as m]
            [gcclocal.views.crud-fields :as fv]
            [gcclocal.comm.dom-utils :as dom]
            [rum.core :as rum]))

(rum/defc tr-row-view
  "Строка таблицы"
  [row
   config-fields
   edit-disabled?
   delete-disabled?
   selected?
   edit-mode?
   select-fn
   start-edit-fn
   delete-fn
   save-edit-fn
   cancel-edit-fn
   custom-get-tr-class-fn]
  (let [c-edit-mode? (and selected? edit-mode?)]
    [:tr {:class (str (if selected? "active" "") " "
                      (if custom-get-tr-class-fn
                        (custom-get-tr-class-fn row)
                        ""))
          :on-click #(select-fn row)}
     ; показываем соотв. инпуты для каждого из поля
     (map #(fv/render-td-field-view % row c-edit-mode? "edit") config-fields)
     ; столбец с кнопками
     [:td
      (if (and selected? edit-mode?)
        [:div
         ; кнопка сохранить
         [:div.ui.green.icon.tiny.button {:title "Сохранить"
                                          :on-click #(do
                                                       (save-edit-fn row)
                                                       (.stopPropagation %))}
          [:i.checkmark.icon]]
         ; кнопка отмены
         [:div.ui.red.icon.tiny.button {:title "Отмена"
                                        :on-click #(cancel-edit-fn)}
          [:i.remove.icon]]]

        ; кнопки редактировать и удалить
        [:div {:style (if selected?
                        {:visibility "visible"}
                        {:visibility "hidden"})}
         [:div.ui.primary.icon.tiny.button
          {:title "Редактировать"
           :style {:visibility (if (and selected? (not edit-disabled?))
                                 "visible" "hidden")}
           :on-click #(do
                        (start-edit-fn)
                        (.stopPropagation %))}
           [:i.edit.icon]]
         [:div.ui.primary.icon.tiny.button
          {:title "Удалить"
           :style {:visibility (if (and selected? (not delete-disabled?))
                                 "visible" "hidden")}
           :on-click #(do
                        (delete-fn row)
                        (.stopPropagation %))}
           [:i.trash.icon]]])]]))

(rum/defc tr-add-row-view
  "Строка для добавления новой записи"
  [config-fields add-mode? on-add-fn on-cancel-fn]
  [:tr.positive
   (map #(fv/render-td-field-view % nil add-mode? "add") config-fields)
   [:td
    [:div
     [:div.ui.green.icon.tiny.button {:title "Сохранить"
                                      :on-click on-add-fn}
      [:i.checkmark.icon]]
     [:div.ui.red.icon.tiny.button
            {:title "Отмена"
            :on-click on-cancel-fn}
      [:i.remove.icon]]]]])


(rum/defc th-view
  "Вьюшка для заголовка столбца"
  [header wideness sort-field-name is-active? desc? sort-fn]
  (let [wide-class (if wideness (str wideness " wide ") "")
        sort-class (-> wide-class
                     (str (if is-active? "sorted " ""))
                     (str (if desc? "descending" "ascending")))]
    [:th {:class sort-class
          :title header
          :on-click #(when (not (nil? sort-field-name))
                       (sort-fn sort-field-name))}
     header]))



(rum/defcc search-input-view
  "Инпут для поиска по подстроке"
  [rcomp search-str search-fn]
  (let [on-search-fn (fn [_]
                       (let [search-val (dom/value (dom/find-in-rcomp rcomp "input"))]
                         (search-fn search-val)))]
  [:div.ui.action.input {:style {:float "right"}}
   [:input {:type "text"
            :placeholder "Поиск по названиям"
            :default-value search-str
            :on-key-press #(when (= "Enter" (.-key %)) (on-search-fn %))
            }]
     [:button {:class "ui icon button"
             :on-click on-search-fn}
    [:i.search.icon]]]))


(defn on-update-delete-modal [state]
  (let [approve-delete-fn (nth (:rum/args state) 2)
        id-row (nth (:rum/args state) 1)]
    (.modal (js/$ "#delete-modal")
            #js {:detachable false
                 :onApprove #(approve-delete-fn id-row)})))

(rum/defc delete-modal-view < {:did-update on-update-delete-modal}
  "Модальное окно удаления строки"
  [name id-row on-approve-delete]
  [:div.ui.small.modal#delete-modal
   [:div.header (str "Удалить " name)]
   [:div.content
    [:p "Вы действительно хотите удалить эту запись?"]]
   [:div.actions
    [:div.ui.approve.button "Да"]
    [:div.ui.cancel.button "Отмена"]]])

(rum/defc default-top-panel-view
  "Вьюшка для верхней части по умолчанию (кнопка добавления + поиск)"
  [search-str
   add-disabled? search-disabled? add-mode?
   on-click-add-fn search-fn
   load-to-excel-disabled?
   load-to-excel-fn]
  [:div {:class "ui basic clearing segment no-padding-segment"}
   ; Кнопка добавления
   (when (and (not add-mode?) (not add-disabled?))
     [:div {:style {:float "left"}}
      [:div {:class "ui primary labeled icon button"
             :on-click on-click-add-fn}
       [:i.plus.icon] "Добавить"]])
   ;; кнопка выгрузки в excel
   (when (not load-to-excel-disabled?)
     [:div {:class "ui labeled icon button"
            :on-click load-to-excel-fn}
      [:i.file.excel.outline.icon] "Выгрузить в Excel"])

   ; поле для поиска
   (when (not search-disabled?)
     (search-input-view search-str search-fn))])

(rum/defc table-thead
  "Заголовки таблицы"
  [config-headers sorting-map sort-fn]
  [:thead
    [:tr
     (map (fn [h-params]
            (th-view (:display-name h-params)
                     (:wideness h-params)
                     (:sort-field h-params)
                     (= (:sort-field h-params) (:field sorting-map))
                     (:desc? sorting-map)
                     sort-fn))
          config-headers)
     [:th {:class "control-th"}]]])


(rum/defc tr-rows-not-found
  "Строка 'строки не найдены'"
  [config-headers]
  [:tr
   [:td {:col-span (inc (count config-headers))
         :style {:text-align "center"
         :color "#AAA"}}
        "Нет данных"]])


(rum/defc default-crud-table-view
  "Таблица CRUD по умолчанию"
  [{:keys [rows
           config-fields
           config-headers
           custom-get-tr-class-fn
           add-disabled?
           edit-disabled?
           delete-disabled?
           add-mode?
           edit-mode?
           selected-row
           sorting-map
           sort-fn
           add-row-fn
           cancel-add-fn
           select-row-fn
           start-edit-row-fn
           save-edit-row-fn
           cancel-edit-row-fn
           delete-row-fn] :as params}]
  [:table {:class "ui selectable small celled fixed sortable table
                   with-overflow-tds
                   crud-main-table"
           :style {:margin-top "1em !important"}}
   ; заголовок таблицы
   (table-thead config-headers sorting-map sort-fn)
   ; тело таблицы
   [:tbody
    (when (and add-mode? (not add-disabled?))
      (tr-add-row-view config-fields
                       add-mode?
                       add-row-fn
                       cancel-add-fn))
    (if (> (count rows) 0)
      ; если есть строки
      (map #(tr-row-view %
                         config-fields
                         edit-disabled?
                         delete-disabled?
                         (= % selected-row)
                         edit-mode?
                         select-row-fn
                         start-edit-row-fn
                         delete-row-fn
                         save-edit-row-fn
                         cancel-edit-row-fn
                         custom-get-tr-class-fn)
           rows)
      ; если результаты не найдены
      (tr-rows-not-found config-headers))
    ]])
