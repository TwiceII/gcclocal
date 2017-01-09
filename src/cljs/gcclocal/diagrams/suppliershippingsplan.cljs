(ns gcclocal.diagrams.suppliershippingsplan
  (:require [gcclocal.comm.utils :as u]
            [gcclocal.comm.amethods :as m]
            [gcclocal.comm.channels :as ch]
            [gcclocal.views.crud-fields :as fv]
            [gcclocal.comm.dom-utils :as dom]
            [gcclocal.views.common :as com-v]
            [rum.core :as rum]
            [cljs.core.async :as a])
  (:require-macros [cljs.core.async.macros :as am]))


(enable-console-print!)

;; состояние страницы
(defonce app-state (atom
                     {:all-suppliers nil
                      :all-client-apps nil
                      :planpayments nil
;;                       [{:supplier {:id 66
;;                                                  :name "Жайремский гок"}
;;                                       :plan_payments
;;                                       [{:plan_date "2017-01-10T00:00:00Z"
;;                                         :client_application_id 2120
;;                                         :supplier_id 66
;;                                         :amount 1000
;;                                         :cost_summ 2000
;;                                         :c_id 2}
;;                                        {:plan_date "2017-01-08T00:00:00Z"
;;                                         :client_application_id 2120
;;                                         :supplier_id 66
;;                                         :amount 1600
;;                                         :cost_summ 4000
;;                                         :c_id 2}]}
;;                                      {:supplier {:id 67
;;                                                  :name "Не важно"}
;;                                       :plan_payments
;;                                       [{:plan_date "2017-01-08T00:00:00Z"
;;                                         :client_application_id 2119
;;                                         :supplier_id 67
;;                                         :amount 500
;;                                         :cost_summ 1200
;;                                         :c_id 2}]}]

                      ;; заполняются через calc-data
                      :all-visible-dates nil
                      :suppliers-cinfos nil
                      :total-cell-summs nil

                      :selected-cell nil
                      :selected-supplier nil
                      :loading? false

                      ;; разнообразные режимы
                      :modes {:add-item-mode? false}
                      }))

(def state-cursor (partial rum/cursor app-state))

;; счетчик загруженных данных
(def load-count (atom 0))

;; канал проверки, что все данные с ajax загрузились
(def load-all-ch (a/chan))
; канал для сообщений
(def notify-ch (ch/init-notify-ch))

; данные с ajax которые нужно загрузить
(def needed-ajax-data
  {:all-suppliers {:url "/catalogs/suppliers/all"}
   :all-client-apps {:url "/primarydocs/clientapplications/all"}
   :planpayments {:url "/moneydiagram/shippingplan/all"}
   })


(declare turn-off-modes)

(defn refresh-ajax-data
  "Обновить все данные с сервера"
  []
  (do
    (reset! (state-cursor [:loading?]) true)
    (turn-off-modes)
    (reset! load-count 0)
    (doseq [[dname dval] needed-ajax-data]
      (do
        (u/get-json
          (:url dval)
          {}
          (fn [res]
            (when-not (u/nil-or-empty? (:errors res))
              (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors res))
                                      :type "error"})))
            (reset! (state-cursor [dname]) (:rows res))
            (am/go
              (a/>! load-all-ch true))))))
     (reset! (state-cursor [:loading?]) false)
    ))


;;; ===========================
;;; Предварительные расчеты
;;; ===========================

(defn all-visible-dates
  "Даты видимые (не просроченные)"
  [planpayments date-to-check]
  (->> planpayments
       (mapcat #(map :plan_date (:plan_payments %)))
       (concat [date-to-check])
       distinct
       ((fn[all-dates]
         (into []
               (u/sort-dates
                 false
                 (distinct
                   (filter #(or (u/moment-after? (u/iso-str->moment %)
                                                 (u/iso-str->moment date-to-check))
                                (u/moment-same? (u/iso-str->moment %)
                                                (u/iso-str->moment date-to-check)))
                                   all-dates))))))))


(defn get-total-cell-summs
  [all-visible-dates]
  (let [app-s @app-state]
    (as-> app-s x
          (:planpayments x)
          (mapcat :plan_payments x)
          (reduce (fn [m d]
                    (assoc m d
                      (reduce (fn [s pp] (+ s (:amount pp)))
                              0
                              (filter #(= (:plan_date %) d) x))))
                  {} all-visible-dates)
          )))


(defn calc-all-data
  "Посчитать все данные"
  []
  (let [cur-app-data @(state-cursor [])]
    (-> {}
        (assoc
          :all-visible-dates (all-visible-dates (:planpayments cur-app-data)
                                                (u/current-date-iso-str)))
        (assoc
          :suppliers-cinfos (as-> cur-app-data x
                                  (:planpayments x)
                                  (reduce (fn [m p]
                                            (assoc m (get-in p [:supplier :id])
                                              (group-by :plan_date (get-in p [:plan_payments]))))
                                          {} x)))
        (#(assoc %
            :total-cell-summs (get-total-cell-summs (:all-visible-dates %)))))))

(calc-all-data)

(defn reset-app-state-data
  "Перезаписать в app-state посчитанные данные"
  []
  (println "reset-app-state-data")
  (println (calc-all-data))
  (doseq [[k v] (calc-all-data)]
    (reset! (state-cursor [k]) v))
  (println @(state-cursor [])))


(defn init-channels
  "Инициализация каналов"
  []
  ;; прослушивание кол-ва загруж.данных
  (am/go (while true
           (do
             (let [x (a/<! load-all-ch)]
               (swap! load-count inc)
               ; когда все данные загрузились - вычисляем
               (if (= @load-count (count needed-ajax-data))
                 (do
                   (reset-app-state-data)
                   )))))))

;;; ================================
;;; Методы для данных
;;; ================================
(defn get-app-by-id
  [app-id]
  (->> @(state-cursor [:all-client-apps])
       (filter #(= (:id %) app-id))
       first))

;;; ================================
;;; Методы для вьюшек
;;; ================================
(defn success-notify-and-refresh
  "Вывести сообщение об успешности операции и обновить все данные"
  [message]
  (do
    (am/go (a/>! notify-ch {:text message
                            :type "success"}))
    (refresh-ajax-data)))

(defn select-cell
  "Выбрать ячейку плана"
  [cell-info]
  (println "selecting cell: ")
  (println cell-info)
  (reset! (state-cursor [:selected-supplier]) nil)
  (reset! (state-cursor [:selected-cell]) cell-info))


(defn deselect-cell
  "Убрать выделение с ячейки"
  []
  (reset! (state-cursor [:selected-cell]) nil))


(defn cell-selected?
  "Проверка, что ячейка выделена"
  [cell-info]
  (when-let [sel-cell @(state-cursor [:selected-cell])]
    (= sel-cell cell-info)))


(defn turn-off-modes
  "Отключить все режимы"
  []
  (do
    (swap! (state-cursor [:modes])
           #(reduce-kv (fn [m k v]
                         (assoc m k false))
                         {}
                         %))
    (deselect-cell)
    ; очищаем значения в попап меню для записей
    (.val (js/$ "#customItemDateInput") "")
    (.val (js/$ "#customItemSummInput") "")))


(defn select-supplier
  "Выбрать поставщика"
  [supplier]
  (println "select-supplier: " supplier)
  (when (not= supplier @(state-cursor [:selected-supplier]))
    (do
      (turn-off-modes)
      (reset! (state-cursor [:selected-supplier]) supplier))))


(defn get-add-item-values
  "Получить запись для добавления"
  [selected-supplier]
  (-> {}
      (assoc :supplier_id (:id selected-supplier))
      (assoc :plan_date (dom/value-from-dom "#itemDateInput"))
      (assoc :client_application_id (dom/value-from-dom "#itemClientApp"))
      (assoc :amount (dom/value-from-dom "#itemAmountInput"))))


(defn show-custom-add-popup
  "Показать контекстное меню для добавления оплаты по поставщику"
  [elem]
  (do
    (let [top-offset (-> (js/$. elem)
                         (.offset)
                         (.-top)
                         (- 50)
                         (str "px"))
          left-offset (-> (js/$. elem)
                          (.offset)
                          (.-left)
                          (+ 10)
                          (str "px"))]
      (.css (js/$. ".custom-add-menu") #js {:top top-offset
                                            :left left-offset}))
    (reset! (state-cursor [:modes :add-item-mode?]) true)))


(defn turn-add-item-popup-on
  "Открыть окно для добавления оплаты по поставщику"
  [evt]
  (println "turn-add-item-popup-on")
  (show-custom-add-popup (.-target evt)))


(defn turn-off-add-custom-item-mode
  "Отключить режим показа контекстного меню
  для добавления оплаты"
  []
  (println "turn-off-add-custom-item-mode")
  (reset! (state-cursor [:modes :add-item-mode?]) false))


(defn add-item
  "Добавление новой записи плана"
  [evt selected-supplier]
  (println "add-item!")
  (let [new-item (get-add-item-values selected-supplier)]
    (u/post-json-with-success-check
      "/moneydiagram/shippingplan/add"
      {:row new-item}
      (fn [_]
        (success-notify-and-refresh "План добавлен"))
      (fn [r]
        (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                :type "error"}))))
    (println new-item)))


(defn delete-item
  "Удаление записи плана"
  [item-id]
  (println "delete-item-click!")
  (u/post-json-with-success-check
    "/moneydiagram/shippingplan/delete"
    {:id item-id}
    (fn [_]
      (success-notify-and-refresh "План удален"))
    (fn [r]
      (am/go (a/>! notify-ch {:text "Ошибка при удалении плана"
                              :type "error"})))))



;;; ================================
;;; Вьюшки
;;; ================================
(rum/defc supplier-payment-cell-view < rum/reactive
  "Ячейка с плановой оплатой"
  [cell-info is-selected?]
  (let [app (get-app-by-id (:client_application_id cell-info))]
    [:td {:class (when cell-info (str "hoverable " (when is-selected? "selected-cell")))
          :on-click #(select-cell cell-info)}
     (when is-selected?
       [:i.remove.blue.inverted.bordered.link.mini.icon
         {:style {:float "left"}
          :on-click #(do
                       (com-v/show-approve-modal
                         (str "Удаление записи")
                         (str "Вы действительно хотите удалить эту запись?")
                         (fn[] (delete-item (:id cell-info))))
                       (.stopPropagation %))
          :title "Удалить запись"}])
     (when app
       [:span {:style {:font-style "italic" :margin-right "5px"}}
        (:name app) ": "])
     [:span (u/money-str (:amount cell-info))]]))


(rum/defc supplier-td-view < rum/reactive
  "Первая ячейка с поставщиком"
  [supplier
   selected-supplier]
  (let [selected? (= selected-supplier supplier)]
    ;; имя поставщика
    [:td {:class (when selected? "selected-cell")
          :on-click #(select-supplier supplier)}
     (:name supplier)
     (when selected?
       [:i.add.blue.inverted.bordered.link.mini.icon.add-item-icon
         {:style {:float "right"}
          :title "Добавить оплату на поставщика"
          :on-click #(do
                       (turn-add-item-popup-on %)
                       (.stopPropagation %))}])
     ]))


(rum/defc supplier-payment-plan-tr-view < rum/reactive
  "Строка плановых оплат поставщику"
  [supplier
   all-visible-dates
   supplier-cinfos
   selected-supplier]
  (println "suppliers-cinfos: " supplier-cinfos)
  [:tr
   (supplier-td-view supplier selected-supplier)
   ;; оплаты по датам
   (map #(let [c-info (first (get supplier-cinfos %))]
           (supplier-payment-cell-view c-info
                                       (cell-selected? c-info)))
        all-visible-dates)
   ;; итого
   [:td (u/money-str (reduce-kv (fn [s k v] (+ s (:amount (first v))))
                                0 supplier-cinfos))]])

;;
;; Попап для добавления оплаты по поставщику
;;
(defn on-mount-custom-popup [state]
  (.pickmeup (js/$ "#itemDateInput") #js {:format "d.m.Y"
                                                :default_date false
                                                :hide_on_select true})
  (.dropdown (js/$ ".ui.search.dropdown"))
  )

(rum/defc custom-popup-item-menu < {:did-mount on-mount-custom-popup}
  "Кастомное попап меню для добавления оплаты по поставщику"
  [selected-supplier add-item-mode? client-apps]
  [:div.custom-add-menu.custom-animation
   {:style {:visibility (if add-item-mode? "visible" "hidden")}}
   [:div.custom-item-popup
    [:div {:style {:height "12px"}}
     [:i.remove.icon.link.close-popup-icon
      {:on-click #(turn-off-add-custom-item-mode)}]]
    [:div.ui.small.form
     [:div.two.fields
      [:div.field
       [:label "Дата"]
       [:input {:type "text" :id "itemDateInput"}]]
      [:div.field
       [:label "Тоннаж"]
       [:input {:type "number" :step "0.01" :id "itemAmountInput"}]]
      ]
     [:div.two.fields
      [:div.field
       [:label "Заявка"]
       [:div.ui.fluid.search.selection.dropdown
        [:input {:type "hidden" :id "itemClientApp"}]
        [:i.dropdown.icon]
        [:div.default.text "Выбрать"]
        [:div.menu
         (map #(-> [:div.item {:data-value (:id %)} (:name %)])
              client-apps)]
        ]]
      [:div.field
       [:label "Себестоимость"]
       [:input {:type "number" :readOnly "readOnly" :id "itemSummInput22"}]]]
     [:div.ui.mini.button
      {:title "Добавить"
       :on-click #(add-item % selected-supplier)}
      [:i.add.icon] "Добавить"]
     [:div.ui.mini.button
      {:title "Отмена"
       :on-click #(turn-off-add-custom-item-mode)}
      [:i.ban.icon] "Отмена"]]]])



;; Главная вьюшка
(rum/defc main-view < rum/reactive
  "Основная вьюшка"
  []
  (let [is-loading? (rum/react (state-cursor [:loading?]))
        all-suppliers (rum/react (state-cursor [:all-suppliers]))
        all-client-apps (rum/react (state-cursor [:all-client-apps]))
        all-visible-d (rum/react (state-cursor [:all-visible-dates]))
        selected-supplier (rum/react (state-cursor [:selected-supplier]))
        suppliers-cinfos (rum/react (state-cursor [:suppliers-cinfos]))
        total-cell-summs (rum/react (state-cursor [:total-cell-summs]))
        selected-cell (rum/react (state-cursor [:selected-cell]))
        add-item-mode? (rum/react (state-cursor [:modes :add-item-mode?]))
        ]
    [:div
     ;; loader
     [:div.ui.active.centered.inline.loader
      {:style {:visibility (if is-loading? "visible" "hidden")}}]
     ;; сама таблица
     [:div.outer {:style {:margin-top "3em"}}
      [:div.inner
       [:table {:class ["ui compact celled very basic table"
                        "diagram-clients-table"
                        "fixed-first-column-table"]}
        [:thead
         [:tr
          [:th "Поставщики"]
          (map #(-> [:th {:style {:text-align "right"}} (u/to-print-date %)])
               all-visible-d)
          [:th {:style {:text-align "center" :min-width "80px"}} "Итого"]]]
        [:tbody
         ;; оплаты поставщикам
         (map #(supplier-payment-plan-tr-view %
                                              all-visible-d
                                              (get suppliers-cinfos (:id %))
                                              selected-supplier)
              all-suppliers)
         ;; итого по датам
         [:tr.total-row
          [:td "Итого"]
          (map #(-> [:td (u/money-str (get total-cell-summs %))])
               all-visible-d)
          ;; общее итого
          [:td (u/money-str (reduce-kv (fn [s k v] (+ s v)) 0 total-cell-summs))]]

         ]]]]

       ;; попап
       ;(cell-popup-view selected-cell)]]
     ;; кастомное попап меню для добавления записи в категорию
     (custom-popup-item-menu selected-supplier
                             add-item-mode?
                             all-client-apps)
     ;; общее модальное окно для подтверждения действия
     (com-v/basic-approve-modal-view)
     ]))



;;; ================================
;;; Основной метод
;;; ================================
(defn ^:export init []
  (do
    (println "supplierpaymentsplan")
    (init-channels)
    (refresh-ajax-data)
    (rum/mount (main-view) (.getElementById js/document "maintable"))))


(defn ^:export printatom []
  (do
    (println @app-state)))
