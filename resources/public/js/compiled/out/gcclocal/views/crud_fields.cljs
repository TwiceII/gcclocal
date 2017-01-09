(ns gcclocal.views.crud-fields
  (:require [gcclocal.comm.utils :as utils]
            [gcclocal.comm.dom-utils :as dom]
            [rum.core :as rum]))


(rum/defc custom-view
  [view-code]
  view-code)

(defn render-td-field-view
  "Нарисовать вьюшку с td и полем для редактирования"
  [field-params row c-edit-mode? class-name-prefix]
  [:td
   (if (= (:view field-params) custom-view)
     ; если спец.вьюшка
     (let [custom-fn (get-in field-params [:misc-params :custom-fn])]
       (custom-view (custom-fn row)))
     ; иначе по шаблонам:
      ; соотв.вьюшка
     ((:view field-params)
      ; нах-ся ли в режиме редактирования
      c-edit-mode?
      ; значение поля из строки
      ((:field-name field-params) row)
      ; класс, по которому получить значение потом
      (str class-name-prefix "-" (name (:field-name field-params)))
      ; дополнительные параметры в виде хэшмэпа(если есть)
      (:misc-params field-params)))])



(rum/defc plain-text-view
  "Просто текст"
  [_ value _]
  [:div value])


(rum/defc text-field-view
  "Поле для текстового значения"
  [edit-mode? value class-name]
  (if edit-mode?
    [:div.ui.fluid.small.input
     [:input {:class class-name
              :type "text"
              :default-value value
              :on-click #(.stopPropagation %)}]]
    [:div value]))


(rum/defc number-field-view
  "Поле для числового значения"
  [edit-mode? value class-name]
  (if edit-mode?
    [:div.ui.fluid.small.input
     [:input {:class class-name
              :type "number"
              :default-value value
              :on-click #(.stopPropagation %)}]]
    [:div value]))


(rum/defc money-field-view
  "Поле для денег"
  [edit-mode? value class-name]
  (if edit-mode?
    [:div.ui.fluid.small.input
     [:input {:class class-name
              :type "number"
              :step "0.01"
              :default-value value
              :on-click #(.stopPropagation %)}]]
    [:div (utils/get-number-with-decimals-str value)]))


(defn on-cmoney-update
  [state]
  (do
    (println "on-cmoney-update")
    (let [rcomp (:rum/react-component state)]
      (-> js/ReactDOM
          (.findDOMNode rcomp)
          js/$
          (.find ".ui.dropdown")
          js/$
          (.dropdown #js {:fullTextSearch true})
          ))
    state))

(defn on-cmoney-afterrender
  [os state]
  (do
    (-> ".ui.dropdown"
        js/$
        (.dropdown #js {:fullTextSearch true}))
;;     (let [rcomp (:rum/react-component state)]
;;       (println (-> js/ReactDOM
;;                  (.findDOMNode rcomp)
;;                  js/$
;;                  (.find ".ui.dropdown")
;;                  js/$))
;;       (-> js/ReactDOM
;;           (.findDOMNode rcomp)
;;           js/$
;;           (.find ".ui.dropdown")
;;           js/$
;;           (.dropdown #js {:fullTextSearch true})
;;           ))
    state))


(rum/defc cmoney-field-view < rum/reactive {:did-mount on-cmoney-afterrender
                                            :did-update on-cmoney-update
                                            }
  "Поле для денег c валютой"
  [edit-mode?
   value
   class-name
   {:keys [select-options]}]
  ;; при редактировании
  (if edit-mode?
    [:div.ui.fluid.small.right.labeled.input {:on-click #(.stopPropagation %)}
     [:input {:class (str class-name "-summ")
              :type "number"
              :step "0.01"
              :default-value (:summ value)
              :on-click #(.stopPropagation %)}]
     [:div.ui.basic.selection.dropdown.label.currency-selection
      [:input {:type "hidden"
               :default-value (:c_id value)
               :class (str class-name "-cid")}]
      [:i.dropdown.icon]
      [:div.default.text "Выбрать"]
      [:div.menu
       (map (fn [opt]
            [:div.item {:data-value (:id opt)} (:ccode opt)])
          ;(if (nil? select-options) [] @select-options))]]
          (rum/react select-options))]]]
    ;; при просмотре
    [:div (utils/get-number-with-decimals-str (:summ value))
     (when (not= (:currency value) "KZT")
       [:span {:style {:font-weight "bold"}} (str " "
                                                (:currency value))])]))


(rum/defc cmoney-readonly-view
  "Поле для денег с валютой (для чтения)"
  [edit-mode? value]
  [:div (utils/get-number-with-decimals-str (:summ value))
   (when (not= (:currency value) "KZT")
     [:span {:style {:font-weight "bold"}} (str " "
                                                (:currency value))])])


(rum/defc date-readonly-view
  "Поле для ридонли даты"
  [edit-mode? value]
  [:div (if (not (nil? value)) (utils/to-print-date value)
          "")])

(rum/defc datetime-readonly-view
  "Поле для ридонли даты-времени"
  [edit-mode? value]
  [:div (if (not (nil? value)) (utils/to-print-datetime value)
          "")])

;;----------------------------------< date-with-calendar-view
(defn on-input-with-calendar-mount [state]
  (do
    (let [rcomp (:rum/react-component state)
          pickmeup-config #js {:format "d.m.Y"
                               :default_date false
                               :hide_on_select true}]
      (.pickmeup (js/$ (.findDOMNode js/ReactDOM rcomp)) pickmeup-config))
    state))


(rum/defc input-with-calendar-view < {:did-mount on-input-with-calendar-mount}
  "Инпут с календарем"
  [value class-name]
  [:input {:class class-name
           :read-only "readonly"
           :default-value (if (not (nil? value)) (utils/to-print-date value) nil)
           :on-click #(.stopPropagation %)}])


(rum/defcc date-with-calendar-view
  "Поле для выбора даты с календаря"
  [rcomp edit-mode? value class-name
   {:keys [nullable?]}]
  (if edit-mode?
    [:div.ui.fluid.small.input
     (input-with-calendar-view value class-name)
     ; иконка для очищения поля
     (when nullable?
       [:i.remove.icon.link.icon-near-dropdown
        {:title "Очистить поле"
         :on-click #(do
                      (set! (.-value (dom/find-in-rcomp rcomp "input")) "")
                      (.stopPropagation %)
                      ;(.pickmeup (js/$ (dom/find-in-rcomp rcomp "input")) "clear")
                      )}])]
    [:div (if (not (nil? value)) (utils/to-print-date value)
          "")]))

;; ----------------------------------< dropdown menu
(defn on-dropdown-mount [state]
  "При рендере дропдауна, подключаем semantic-ui dropdown()"
  (do
    (println "on dropdown mount")
    (println (get-in (into [] (:rum/args state)) [2 :on-change-fn]))
    (let [rcomp (:rum/react-component state)
          on-change-fn (get-in (into [] (:rum/args state)) [2 :on-change-fn])]
      (-> js/ReactDOM
          (.findDOMNode rcomp)
          js/$
          (.find ".dropdown")
          js/$
          (.dropdown #js {:onChange (fn [val text _]
                                      (println "change to " val)
                                      (if on-change-fn
                                        (on-change-fn val text)))
                          :fullTextSearch true})
          ))


;;       (.dropdown (js/$ (.find (js/$ (.findDOMNode js/ReactDOM rcomp)) ".dropdown"))

;;                  ))
    state))

(rum/defcc dropdown-view < {:did-mount on-dropdown-mount} < rum/reactive
  "Вьюшка для дропдаун меню с поиском"
  [rcomp
   value
   class-name
   {:keys [select-options
           get-option-name-fn
           default-text
           on-change-fn
           nullable?]}]
  ; сам дропдаун
  [:div.ui.fluid.small.input {:on-click #(.stopPropagation %)}
   [:div.ui.fluid.search.selection.dropdown {:style {:min-width 0}}
    [:input {:type "hidden"
             :default-value value
             :class class-name}]
    [:i.dropdown.icon]
    [:div.default.text default-text]
    [:div.menu
     (map (fn [opt]
            [:div.item {:data-value (:id opt)} (get-option-name-fn opt)])
          ;(if (nil? select-options) [] @select-options))]]
          (rum/react select-options))]]
   ; иконка для очищения поля
   (when nullable?
     [:i.remove.icon.link.icon-near-dropdown
      {:title "Очистить поле"
       :on-click #(.dropdown (js/$ (.find (js/$ (.findDOMNode js/ReactDOM rcomp)) ".dropdown"))
                             "clear")}])])


(rum/defc select-view < rum/reactive
  "Поле для выбора из списка"
  [edit-mode?
   value
   class-name
   {:keys [select-options
           get-option-name-fn
           default-text
           nullable?] :as misc-params}]
  (let [sel-options (rum/react select-options)]
    ; если еще не загрузилось
    (if (nil? sel-options)
      [:div {:style {:font-style "italic"}} "загрузка..."]
      ; если уже загрузилось
      ; если в режиме редактирования
      (if edit-mode?
        (dropdown-view value class-name misc-params)
        ; если не в режиме редактирования
        ; то просто находим текст
        (let [selected-option (first(filter #(= (:id %) value) sel-options))]
          [:div (get-option-name-fn selected-option)])))))

(rum/defc select-readonly-view < rum/reactive
  "Поле для выбора из списка (только для вывода на экран)"
  [edit-mode?
   value
   class-name
   {:keys [select-options
           get-option-name-fn
           default-text
           nullable?] :as misc-params}]
  (let [sel-options (rum/react select-options)]
    ; если еще не загрузилось
    (if (nil? sel-options)
      [:div {:style {:font-style "italic"}} "загрузка..."]
      ; если уже загрузилось
      ; просто находим текст
      (let [selected-option (first(filter #(= (:id %) value) sel-options))]
        [:div (get-option-name-fn selected-option)]))))


(rum/defc select-readonly-w-hidden-input-view < rum/reactive
  "Поле для выбора из списка (для вывода на экран) и редактирования (передается скрытый id)"
  [edit-mode?
   value
   class-name
   {:keys [select-options
           get-option-name-fn
           default-text
           nullable?] :as misc-params}]
  (let [sel-options (rum/react select-options)]
    ; если еще не загрузилось
    (if (nil? sel-options)
      [:div {:style {:font-style "italic"}} "загрузка..."]
      ; если уже загрузилось
      ; просто находим текст
      (let [selected-option (first(filter #(= (:id %) value) sel-options))]
        [:div
         (when edit-mode?
           [:input {:type "hidden"
                    :default-value value
                    :class class-name}])
         [:div
          (get-option-name-fn selected-option)]]))))











;; ---------------------------------- dropdown menu >
