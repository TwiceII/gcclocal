(ns gcclocal.diagrams.moneyincomes
  (:require [gcclocal.comm.utils :as u]
            [gcclocal.diagrams.moneyincomes-calc :as mc]
            [gcclocal.comm.amethods :as m]
            [gcclocal.comm.channels :as ch]
            [gcclocal.views.crud-fields :as fv]
            [gcclocal.comm.dom-utils :as dom]
            [gcclocal.views.common :as com-v]
            [rum.core :as rum]
            [cljs.core.async :as a])
  (:require-macros [cljs.core.async.macros :as am]))

(enable-console-print!)


(defonce app-state (atom
                     {:all-clients nil
                      :clientpayments nil
                      :moneymovements nil
                      :incomecategories nil
                      :incomeitems nil
                      :expensecategories nil
                      :expenseitems nil
                      :initbalanceondate nil

                      ; заполняются через calc-data
                      :all-visible-dates nil
                      :clients-cinfos nil
                      :clients-expired-cinfos nil
                      :total-i-cell-summs nil
                      :total-i-expired-summ nil
                      :total-e-cell-summs nil
                      :init-balances-on-end nil
                      :init-balances-on-start nil
                      :total-init-balances nil

                      :selected-cell nil
                      :selected-category nil
                      :loading? false

                      ; для создаваемого перемещения
                      :new-movement nil
                      :new-movement-errors nil

                      ; разнообразные режимы
                      :modes {; режим редактирования категории
                              :edit-income-cat-mode? false
                              :edit-expense-cat-mode? false
                              ; режим добавления категории
                              :add-income-cat-mode? false
                              :add-expense-cat-mode? false
                              ; режим редактирования записи категории
                              :edit-income-item-mode? false
                              :edit-expense-item-mode? false
                              ; режим добавления записи на категорию
                              :add-category-item-mode? false}
                      }))

(def state-cursor (partial rum/cursor app-state))

; счетчик загруженных данных
(def load-count (atom 0))

; канал проверки, что все данные с ajax загрузились
(def load-all-ch (a/chan))
; канал для сообщений
(def notify-ch (ch/init-notify-ch))

; данные с ajax которые нужно загрузить
(def needed-ajax-data
  {:clientpayments {:url "/moneydiagram/clientpayments"}
   :moneymovements {:url "/moneydiagram/moneymovement/all"}
   :incomecategories {:url "/moneydiagram/incomecategory/all"}
   :incomeitems {:url "/moneydiagram/incomeitem/all"}
   :expensecategories {:url "/moneydiagram/expensecategory/all"}
   :expenseitems {:url "/moneydiagram/expenseitem/all"}
   :initbalanceondate {:url "/moneydiagram/initbalanceondate"}
   })


(defn refresh-ajax-data
  "Обновить все данные с сервера"
  []
  (do
    (reset! (state-cursor [:loading?]) true)
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
              (a/>! load-all-ch true))))))))



(defn calc-all-data
  "Посчитать все данные"
  []
  (reset! (state-cursor [:loading?]) false)
  (reset! (state-cursor [:all-clients])
            (map :client @(state-cursor [:clientpayments])))
  (let [cur-app-data @(state-cursor [])
        date-to-check (u/current-date)
        all-clients @(state-cursor [:all-clients])
        client-payments (:clientpayments cur-app-data)
        all-movements (:moneymovements cur-app-data)
        income-items (:incomeitems cur-app-data)
        expense-items (:expenseitems cur-app-data)
        init-balance-on-date (:initbalanceondate cur-app-data)

        calc-hmap (mc/calc-data date-to-check
                                all-clients
                                client-payments
                                all-movements
                                income-items
                                expense-items
                                init-balance-on-date)]
    (println "=== calced-data ===")
    ;(println "clients-cinfos")
    ;(println (:clients-cinfos calc-hmap))
    (println (:clients-expired-cinfos calc-hmap))
    ; сливаем результат в основной app-state атом
    (swap! app-state #(merge % calc-hmap ))))


(defn init-channels
  "Инициализация каналов"
  []
  ; прослушивание кол-ва загруж.данных
  (am/go (while true
           (do
             (let [x (a/<! load-all-ch)]
               (swap! load-count inc)
               ; когда все данные загрузились - вычисляем
               (if (= @load-count (count needed-ajax-data))
                 (do
                   (calc-all-data)
                   )))))))




;======================== ajax methods ==========================
(declare hide-popup)
(declare turn-off-modes)

(defn success-notify-and-refresh
  "Вывести сообщение об успешности операции и обновить все данные"
  [message]
  (do
    (am/go (a/>! notify-ch {:text message
                            :type "success"}))
    (refresh-ajax-data)))

(defn submit-new-movement
  "Добавление перемещения"
  []
  (let [new-movement @(state-cursor [:new-movement])]
    (u/post-json-with-success-check
      "/moneydiagram/moneymovement/add"
      {:row {:client_id (get-in new-movement [:client :id])
             :from_date (:from-date new-movement)
             :to_date (:to-date new-movement)
             :amount (:amount new-movement)
             :max_amount (:max-amount new-movement)
             :is_from_expired (:from-expired? new-movement)
             :comment (:comment new-movement)}}
      (fn [_]
        (do
          (.modal (js/$ ".ui.modal") "hide")
          (success-notify-and-refresh "Передвижение добавлено")))
      (fn [r]
        (do
          (reset! (state-cursor [:new-movement-errors]) (:errors r)))))))


(defn delete-movement
  "Удаление перемещения"
  [movement-id]
  (do
    (hide-popup)
    (u/post-json-with-success-check
      "/moneydiagram/moneymovement/delete"
      {:id movement-id}
      (fn [_]
        (do
          (success-notify-and-refresh "Передвижение успешно удалено")))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text "Ошибка при удалении передвижения"
                                  :type "error"})))))))


(defn add-category
  "Добавить новую категорию"
  [category-type input-el]
  (do
    (u/post-json-with-success-check
      (str "/moneydiagram/" (if (= :income category-type)
                              "incomecategory" "expensecategory")
           "/add")
      {:row {:name (.-value (.-target input-el))}}
      (fn [_]
        (do
          (turn-off-modes)
          (success-notify-and-refresh "Категория добавлена")))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn delete-category
  "Удалить категорию"
  [category-type id]
  (do
    (u/post-json-with-success-check
      (str "/moneydiagram/" (if (= :income category-type)
                              "incomecategory" "expensecategory")
           "/delete")
      {:id id}
      (fn [_]
        (do
          (turn-off-modes)
          (success-notify-and-refresh "Категория удалена")))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text "Ошибка при удалении категории"
                                  :type "error"})))))))


(defn edit-category
  "Редактировать категорию"
  [category-type input-el id]
  (do
    (u/post-json-with-success-check
      (str "/moneydiagram/" (if (= :income category-type)
                              "incomecategory" "expensecategory")
           "/edit")
      {:id id
       :row {:name (.-value (.-target input-el))}}
      (fn [_]
        (do
          (turn-off-modes)
          (success-notify-and-refresh "Категория отредактирована")))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn add-category-item
  "Добавить запись категории"
  [category-type category-id item-date summ]
  (do
    (u/post-json-with-success-check
      (str "/moneydiagram/" (if (= :income category-type)
                              "incomeitem" "expenseitem")
           "/add")
      {:row {:item_date item-date
             :category_id category-id
             :summ summ}}
      (fn [_]
        (do
          (turn-off-modes)
          (success-notify-and-refresh "Запись добавлена")))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn edit-category-item
  "Добавить запись категории"
  [category-type edited-item summ]
  (do
    (u/post-json-with-success-check
      (str "/moneydiagram/" (if (= :income category-type)
                              "incomeitem" "expenseitem")
           "/edit")
      {:id (:id edited-item)
       :row {:item_date (:item_date edited-item)
             :category_id (:category_id edited-item)
             :summ summ}}
      (fn [_]
        (do
          (turn-off-modes)
          (success-notify-and-refresh "Запись отредактирована")))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn delete-category-item
  [category-type id]
  (do
    (u/post-json-with-success-check
      (str "/moneydiagram/" (if (= :income category-type)
                              "incomeitem" "expenseitem")
           "/delete")
      {:id id}
      (fn [_]
        (do
          (turn-off-modes)
          (success-notify-and-refresh "Запись удалена")))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text "Ошибка при удалении записи"
                                  :type "error"})))))))


;======================== view methods ==========================

;; (defn select-cell
;;   "Выбрать ячейку (в поступлениях от клиента)"
;;   [row-id col-id cell-data misc-data]
;;   (reset! (state-cursor [:selected-cell]) {:row-id row-id
;;                                            :col-id col-id
;;                                            :cell-data cell-data
;;                                            :misc-data misc-data }))


(defn set-tr-height-to-max
  "Сделать высоту всей строки = высоте самой высокой ячейки
  (чтобы исправить баг с фикс.столбцом)"
  [react-tr-elem]
  (let [tr-elem (.findDOMNode js/ReactDOM react-tr-elem)
        max-h (-> (js/$. tr-elem)
                  (.find ">:first-child")
                  (.height))]
    (.height (js/$. tr-elem) (+ max-h 10))))


(defn show-popup
  "Показать попап окошко для ячейки"
  [evt]
  (.popup (.popup (js/$. (.-target evt))
                  (js-obj "popup" (js/$. ".ui.popup")
                          "hoverable" true
                          "on" "manual"
                          "hideOnScroll" true
                          "exclusive" true
                          "position" "bottom center"))
          "show"))


(defn hide-popup
  "Скрыть все попапы"
  []
  (.popup (js/$ ".inner") "hide all"))


(defn show-custom-add-popup
  "Показать контекстное меню для добавления записи в категорию"
  [elem]
  (do
    (let [top-offset (-> (js/$. elem)
                         (.offset)
                         (.-top)
                         (- 40)
                         (str "px"))
          left-offset (-> (js/$. elem)
                          (.offset)
                          (.-left)
                          (+ 10)
                          (str "px"))]
      (.css (js/$. ".custom-add-menu") #js {:top top-offset
                                            :left left-offset}))
    (reset! (state-cursor [:modes :add-category-item-mode?]) true)))


(defn turn-off-add-custom-item-mode
  "Отключить режим показа контекстного меню
  для добавления записи в категорию"
  []
  (reset! (state-cursor [:modes :add-category-item-mode?]) false))


(defn select-cell
  "Выбрать ячейку (в поступлениях от клиента)"
  [cell-info]
  (reset! (state-cursor [:selected-cell]) cell-info))


(defn deselect-cell
  "Убрать выделение с ячейки"
  []
  (do
    (reset! (state-cursor [:selected-cell]) nil)
    (hide-popup)))


(defn cell-selected?
  "Проверка, что ячейка выделена"
  [cell-info]
  (let [sel-cell @(state-cursor [:selected-cell])]
    (and (not (nil? sel-cell))
         (= (:row-id cell-info) (:row-id sel-cell))
         (= (:col-id cell-info) (:col-id sel-cell)))))


(defn select-category
  "Выбрать категорию"
  [category-id category-type]
  (reset! (state-cursor [:selected-category]) {:category-id category-id
                                               :category-type category-type}))


(defn deselect-category
  "Убрать выделение с категории"
  []
  (reset! (state-cursor [:selected-category]) nil))


(defn category-selected?
  "Проверка, что категория выделена"
  [category-id category-type]
  (let [sel-cat @(state-cursor [:selected-category])]
    (and (not (nil? sel-cat))
         (= (:category-id sel-cat) category-id)
         (= (:category-type sel-cat) category-type))))


(defn cell-data-by-date-from-client
  "Найти cell-data по дате и клиенту"
  [client-id d]
  (let [client-cinfos (get @(state-cursor [:clients-cinfos]) client-id)]
    (:cell-data (get client-cinfos d))))


(defn change-from-date-in-movement
  "Функция при смене 'даты с' при добавлении перемещения
  (для обновления макс.суммы)"
  [date-str client]
  (let [date-iso (u/ddmmyyyy->real-iso-date-str date-str)
        cell-d (cell-data-by-date-from-client (:id client) date-iso)]
    (swap! (state-cursor [:new-movement])
           #(-> %
                (assoc :from-date date-iso)
                (assoc :max-amount
                  (mc/total-summ-cd cell-d))))))


(defn change-to-date-in-movement
  "Функция при смене 'даты на' при добавлении перемещения"
  [date-str]
  (let [date-iso (u/ddmmyyyy->real-iso-date-str date-str)]
    (swap! (state-cursor [:new-movement])
           #(-> %
                (assoc :to-date date-iso)))))


(defn turn-add-category-mode-on
  "Включить режим добавления категории"
  [category-type]
  (if (= :income category-type)
    (reset! (state-cursor [:modes :add-income-cat-mode?]) true)
    (reset! (state-cursor [:modes :add-expense-cat-mode?]) true)))


(defn turn-edit-category-mode-on
  "Включить режим редактирования категории"
  [category-type]
  (do
    (if (= :income category-type)
      (reset! (state-cursor [:modes :edit-income-cat-mode?]) true)
      (reset! (state-cursor [:modes :edit-expense-cat-mode?]) true))))


(defn turn-edit-category-item-mode-on
  "Включить режим редактирования ячейки категории"
  [category-type]
  (if (= :income category-type)
    (reset! (state-cursor [:modes :edit-income-item-mode?]) true)
    (reset! (state-cursor [:modes :edit-expense-item-mode?]) true)))


(defn turn-add-item-popup-on
  [evt]
  (show-custom-add-popup (.-target evt)))


(defn show-modal-to-movement
  "Открыть модальное окно добавления перемещения НА эту ячейку"
  [selected-cell]
  (do
    (hide-popup)
    (let [client (u/find-some #(= (:id %) (:row-id selected-cell))
                              @(state-cursor [:all-clients]))
          to-date (:col-id selected-cell)]
      (reset! (state-cursor [:new-movement])
              {:move-type :to-this-cell
               :client client
               :from-date nil
               :to-date to-date
               :amount 0
               :comment nil
               :max-amount 0
               :from-expired? (get-in selected-cell [:cell-data :expired?])})
      (reset! (state-cursor [:new-movement-errors]) nil))
    (.modal (js/$ "#addMovementModal") "show")))


(defn show-modal-from-movement
  "Открыть модальное окно добавления перемещения С этой ячейки"
  [selected-cell]
  (do
    (hide-popup)
    (let [client (u/find-some #(= (:id %) (:row-id selected-cell))
                              @(state-cursor [:all-clients]))
          from-date (:col-id selected-cell)
          max-amount (mc/total-summ-cd (:cell-data selected-cell))]
      (reset! (state-cursor [:new-movement])
              {:move-type :from-this-cell
               :client client
               :from-date from-date
               :to-date nil
               :amount 0
               :comment nil
               :max-amount max-amount
               :from-expired? (get-in selected-cell [:cell-data :expired?])})
      (reset! (state-cursor [:new-movement-errors]) nil))
    (.modal (js/$ "#addMovementModal") "show")))

(defn turn-off-modes
  "Отключить все режимы"
  []
  (do
    (swap! (state-cursor [:modes])
           #(reduce-kv (fn [m k v]
                         (assoc m k false))
                         {}
                         %))
    ; очищаем значения в попап меню для записей
    (.val (js/$ "#customItemDateInput") "")
    (.val (js/$ "#customItemSummInput") "")))


;---------------------------------------- watchers ---------------------------------
(defn init-watchers
  "Инициализация watcher-ов"
  []
  (do
    ; при изменении выбранной ячейки
    (add-watch (state-cursor [:selected-cell]) :sel-cell-watch
               (fn [k a old-s new-s]
                 (when-not (nil? new-s)
                   ; убираем выделение с категории
                   (deselect-category)
                   ; отключаем все режимы
                   (turn-off-modes))))

    ; при выделении категории
    (add-watch (state-cursor [:selected-category]) :sel-cat-watch
               (fn [k a old-s new-s]
                 (when-not (nil? new-s)
                   ; убираем выделение с ячеек
                   (deselect-cell)
                   ; отключаем все режимы
                   (turn-off-modes)
                   )))

    ; при включении режима добавления новой категории
    (let [watch-fn (fn [k a old-s new-s]
                     (if (= new-s true)
                       (deselect-cell)))]
      (do
        (add-watch (state-cursor [:modes :add-income-cat-mode?]) :add-income-cat-watch
                   watch-fn)
        (add-watch (state-cursor [:modes :add-expense-cat-mode?]) :add-expense-cat-watch
                   watch-fn)))

    (some (fn[[k v]](= v true)) {:a1 true  :a2 false})

    ; глобальная проверка при нажатии escape
    (.addEventListener js/window "keydown"
                       (fn [e]
                         (when (= 27 (aget e "keyCode"))
                           ; если включен какой-то режим, отключаем
                           (if (some (fn[[k v]](= v true)) @(state-cursor [:modes]))
                             (turn-off-modes)
                             ; иначе убираем все выделения
                             (do
                               (deselect-cell)
                               (deselect-category))))))))




;=========================== views ==============================

; миксин при обновлении строки обновляем ее высоту
(def on-update-tr {:did-update #(set-tr-height-to-max
                                  (:rum/react-component %))})

(rum/defc client-income-cell-view
  "Ячейка для поступления клиента
  (применяется также для просрочки)"
  [cell-info is-selected?]
  [:td {:class (str "hoverable "
                    (if is-selected? "selected-cell " "")
                    ; TODO: добавить также проверки на ошибочные перемещения
                    (if (get-in cell-info [:cell-data :error-cell?])
                      "error "
                      (if (or (not (u/nil-or-empty? (get-in cell-info
                                                            [:cell-data :from-movements])))
                              (not (u/nil-or-empty? (get-in cell-info
                                                            [:cell-data :to-movements]))))
                      "positive " "")))
        :on-click #(do
                     (select-cell cell-info)
                     (show-popup %))}
   (u/money-str (mc/total-summ-cd (:cell-data cell-info)))])



(rum/defc client-income-tr-view < rum/reactive
  "Строка поступлений от клиента"
  [client
   all-visible-dates
   client-cinfos
   expired-cinfo]
  [:tr
   ; имя клиента
   [:td (:name client)]
   ; просрочка
   (client-income-cell-view expired-cinfo (cell-selected? expired-cinfo))
   ; ячейки (список датсумм)
   (map #(let [c-info (get client-cinfos %)]
           (client-income-cell-view c-info
                                    (cell-selected? c-info)))
        all-visible-dates)
   ; итого (суммируем просрочку + список датсумм для каждой ячейки)
   [:td (u/money-str (-> 0
                      (+ (reduce-kv (fn [summ k v]
                                   (+ summ (mc/total-summ-cd (:cell-data v))))
                                 0 client-cinfos))
                      (+ (mc/total-summ-cd (:cell-data expired-cinfo)))))]])



; ------------------------------  категории и их записи -----------------------------------

(rum/defc add-custom-category-tr-view < on-update-tr
  "Строка для добавления новой категории"
  [category-type all-visible-dates add-category-mode?]
  [:tr.income-row
   [:td
    (if add-category-mode?
      [:div.ui.fluid.input.to-left-side-margin
       [:input.small-rect-input {:type "text"
                                 :auto-focus true
                                 :on-key-press #(when (= "Enter" (.-key %))
                                                  (add-category category-type %))
                                 :placeholder "Введите название новой категории"}]]
      [:span.add-category-span {:on-click #(turn-add-category-mode-on category-type)}
       "добавить категорию"])]
   [:td]
   (map #(-> [:td]) all-visible-dates)
   [:td]])


(defn cat-item->cell-info
  [cat-type cat-id d]
  {:row-id (str cat-id "_" (name cat-type) "_cat")
   :col-id d})


(rum/defc custom-category-cell-view
  "Ячейка для записи категории"
  [cat-type cat-id d cat-item is-selected? edit-mode?]
  [:td {:class (str "hoverable " (if is-selected? "selected-cell " ""))
        :on-click #(select-cell (cat-item->cell-info cat-type cat-id d))}
   ; если выделена ячейка
   (if is-selected?
     ; если ячейка в режиме редактирования
     (if edit-mode?
       [:div.ui.fluid.input.to-left-side-margin
        [:input.small-rect-input.right-aligned
         {:type "number" :step "0.01"
          :auto-focus true
          :placeholder "0"
          :on-key-press #(when (= "Enter" (.-key %))
                           (if cat-item
                             (edit-category-item cat-type
                                                 cat-item
                                                 (.-value (.-target %)))
                             (add-category-item cat-type
                                                cat-id
                                                d
                                                (.-value (.-target %)))))
          :default-value (:summ cat-item) }]]
       ; если в обычном режиме просмотра
       ; если есть запись на эту дату
       (if cat-item
         [:div
          [:i.remove.blue.inverted.bordered.mini.link.icon.left-floated-icon
           {:style {:font-size ".65rem"}
            :on-click #(com-v/show-approve-modal
                         "Вы действительно хотите удалить эту запись?"
                         (fn [] (delete-category-item cat-type (:id cat-item))))
            :title "Удалить запись"}]
          [:span.editable-span
           {:on-click #(turn-edit-category-item-mode-on cat-type)}
           (u/money-str (:summ cat-item))]]
         ; если нет записи на эту дату
         [:div
          [:span.editable-span.italic-text-link
           {:on-click #(turn-edit-category-item-mode-on cat-type)}
           "добавить"]]))
     ; если не выделена ячейка, просто отображаем
     (u/money-str (if cat-item (:summ cat-item) 0)))])


(rum/defc custom-category-head-td-view
  "Первый столбец в строке категории"
  [category-type category
   cat-is-selected? cat-edit-mode?]
  [:td {:on-click #(select-category (:id category) category-type) }
   ; если выделена ячейка
   (if cat-is-selected?
     ; если в режиме редактирования
     (if cat-edit-mode?
       [:div.ui.fluid.input.to-left-side-margin
        [:input.small-rect-input {:type "text" :name "editCatNameInput"
                                  :auto-focus true
                                  :on-key-press #(when (= "Enter" (.-key %))
                                                   (edit-category category-type
                                                                  %
                                                                  (:id category)))
                                  :default-value (:name category)}]]
       ; если в обычном режиме
       [:div
        [:span.editable-span
         {:on-click #(turn-edit-category-mode-on category-type)}
         (:name category)]
        [:i.add.blue.inverted.bordered.link.mini.icon.add-item-icon
         {:style {:float "right"}
          :title "Добавить запись на категорию"
          :on-click #(do
                       (turn-add-item-popup-on %)
                       (.stopPropagation %))}]
        [:i.remove.blue.inverted.bordered.link.mini.icon
         {:style {:float "right"}
          :on-click #(com-v/show-approve-modal
                       (str "Удаление категории \"" (:name category) "\"")
                       (str "Вы действительно хотите удалить
                            категорию со всеми её записями?")
                       (fn[] (delete-category category-type (:id category))))
          :title "Удалить категорию"}]])
     ; если ячейка не выделена
     (:name category))])



(rum/defc custom-category-tr-view < on-update-tr
  "Строка для категории (расхода/дохода)"
  [category-type
   category
   cat-items
   all-visible-dates
   cat-item-edit-mode? ; режим редактирования записи
   cat-edit-mode? ; режим редактирования самой категории
   cat-is-selected?]
  [:tr.income-row
   ; название категории
   (custom-category-head-td-view category-type
                                 category
                                 cat-is-selected?
                                 cat-edit-mode?)
   ; просрочка
   [:td]
   ; ячейки
   (map (fn[d](let [cat-item (u/find-some #(= (:item_date %) d) cat-items)]
                (custom-category-cell-view
                  category-type
                  (:id category)
                  d
                  cat-item
                  (cell-selected? (cat-item->cell-info category-type
                                                       (:id category)
                                                       d))
                  cat-item-edit-mode?
                  )))
        all-visible-dates)
   ; итого
   [:td (u/money-str (reduce (fn[s i] (+ s (:summ i))) 0 cat-items))]])



(defn date-span-view
  [d]
  [:span {:style {:font-weight "bold"}} (u/to-print-date d)])

(defn c-app-span-view
  [c-app]
  (if c-app
    [:span {:style {:font-style "italic"}} (:name c-app)]
    [:span {:style {:font-style "italic" :color "#e25a5a"}} "без заявки"]))

;-------------------------- всплывающие окна и попапы -------------------------------
(rum/defc movements-in-popup-view
  "Список передвижений внутри попапа"
  [movement-type movement]
  (let [from-m? (= movement-type :from)]
    [:div {:class (str "item " (if (:error-movement? movement) "error-movement" ""))}
     [:i {:class (str "icon " (if from-m? "forward mail" "arrow down"))
          :style {:display "inline-block"}}]
     (u/money-str (:amount movement))
     (if from-m? " на " " с ")
     (if from-m?
       (date-span-view (:to_date movement))
       (if (:from_date movement)
         (date-span-view (:from_date movement))
         "просрочки"))
     [:i.remove.link.icon {:style {:display "inline-block"
                                   :padding-top "0px"}
                           :title "Удалить"
                           :on-click #(do
                                        (hide-popup)
                                        (com-v/show-approve-modal
                                          "Вы действительно хотите удалить перемещение
                                          за эту дату?"
                                          (fn[] (delete-movement (:id movement)))))}]
     [:br]
     [:span {:style {:font-style "italic"}} (:comment movement)]]))


(rum/defc cell-popup-view
  "Попап окно для ячеек поступлений"
  [selected-cell]
  (let [cell-data (:cell-data selected-cell)]
      [:div.ui.popup
       ; кнопки для перемещения
       [:div.ui.fluid.tiny.icon.buttons
        (when (not (:expired? cell-data))
          [:button.ui.button {:title "Перенести на эту ячейку"
                              :on-click #(show-modal-to-movement selected-cell)
                              }
           [:i.arrow.down.icon]])
        [:button.ui.button {:title "Перенести с этой ячейки"
                            :on-click #(show-modal-from-movement selected-cell)
                            }
         [:i.forward.mail.icon]]]
       [:div.ui.divider]
       ; список датсумм и перемещений
       [:div.ui.list.payments-list
        ; датысуммы
        (when (get-in selected-cell [:misc-data :show-inner-datesumms])
          (if (:expired? cell-data)
            (map #(-> [:div.item
                       (date-span-view (:date %))
                       ", "
                       (c-app-span-view (:clientapplication %))
                       ":  "
                       (u/money-str (get-in % [:c-money :summ]))])
                 (:datemoneys cell-data))
            (map #(-> [:div.item
                       (c-app-span-view (:clientapplication %))
                       ":  "
                       (u/money-str (get-in % [:c-money :summ]))
                       ])
                 (:datemoneys cell-data))))
        ; перемещения
        (map #(movements-in-popup-view :from %) (:from-movements cell-data))
        (map #(movements-in-popup-view :to %) (:to-movements cell-data))]]))



(defn on-add-modal-update [state]
  (do
    (let [rcomp (:rum/react-component state)
          new-movement (first (:rum/args state))
          pickmeup-config (clj->js (cond->
                                     {:format "d.m.Y"
                                      :default_date false
                                      :hide_on_select true}
                                     (= :to-this-cell (:move-type new-movement))
                                     (assoc :change
                                       (fn [formatted_date]
                                         (change-from-date-in-movement
                                           formatted_date
                                           (:client new-movement))))
                                     (= :from-this-cell (:move-type new-movement))
                                     (assoc :change
                                       (fn [formatted_date]
                                         (change-to-date-in-movement
                                           formatted_date)))))]
      (when (= :to-this-cell (:move-type new-movement))
        (do
          (.pickmeup (js/$ "#toDateInput") "destroy")
          (.pickmeup (js/$ "#fromDateInput") pickmeup-config)
          (.pickmeup (js/$ "#fromDateInput") "clear")))
      (when (= :from-this-cell (:move-type new-movement))
        (do
          (.pickmeup (js/$ "#fromDateInput") "destroy")
          (.pickmeup (js/$ "#toDateInput") pickmeup-config)
          (.pickmeup (js/$ "#toDateInput") "clear")))
      (.modal (dom/rcomp->js$ rcomp) #js {:onApprove #(do
                                                        (submit-new-movement)
                                                        false)}))
    state))


(rum/defc add-movement-modal-view < {:did-update on-add-modal-update }
  "Модальное окно добавления перемещения"
  [new-movement error-msgs]
  [:div.ui.small.modal {:id "addMovementModal"}
   [:div.header (str "Добавить перемещение по клиенту " (get-in new-movement [:client :name]))]
   [:div.content
    [:div.ui.form
     [:div.fields
      [:div.five.wide.field
       [:label "С даты"]
       (if (:from-expired? new-movement)
         [:div.expired-form-label "С просрочки"]
         [:input {:type "text" :id "fromDateInput"
                  :read-only (if (= :from-this-cell (:move-type new-movement))
                               "readonly" "")
                  :class (if (= :from-this-cell (:move-type new-movement))
                         "read-dateinput" "")
                  :value (u/to-print-date (:from-date new-movement))}])]
      [:div.five.wide.field
       [:label "На дату"]
       [:input {:type "text" :id "toDateInput"
                :read-only (if (= :to-this-cell (:move-type new-movement))
                             "readonly" "")
                :class (if (= :to-this-cell (:move-type new-movement))
                         "read-dateinput" "")
                :value (u/to-print-date (:to-date new-movement))}]]
      [:div.six.wide.field
       [:label "Сумма"]
       [:div.ui.right.labeled.input
        [:input {:type "number" :placeholder "0"
                 :id "amountInput" :value (:amount new-movement)
                 :on-change #(reset! (state-cursor [:new-movement :amount]) (.-value (.-target %)))}]
        [:div.ui.label (u/money-str-with-zero (:max-amount new-movement))]]]]
     [:div.field
      [:label "Комментарий"]
      [:input {:type "text" :id "commentInput"
               :value (:comment new-movement)
               :on-change #(reset! (state-cursor [:new-movement :comment])
                                   (.-value (.-target %)))}]]]
    (when (not (u/nil-or-empty? error-msgs))
      [:div.ui.error.message
       [:ul
        (map #(-> [:li %]) error-msgs)]])]
   [:div.actions
    [:div.ui.deny.button "Отмена"]
    [:div.ui.positive.right.labeled.icon.button
     "Добавить"
     [:i.add.icon]]]])

(defn on-mount-custom-popup [state]
  (.pickmeup (js/$ "#customItemDateInput") #js {:format "d.m.Y"
                                                :default_date false
                                                :hide_on_select true}))

(rum/defc custom-popup-item-menu < {:did-mount on-mount-custom-popup}
  "Кастомное попап меню для добавления записи в категорию"
  [selected-category add-item-mode?]
  [:div.custom-add-menu.custom-animation
   {:style {:visibility (if add-item-mode? "visible" "hidden")}}
   [:div.custom-item-popup
    [:i.remove.icon.link.close-popup-icon
     {:on-click #(turn-off-add-custom-item-mode)}]
    [:div.ui.small.input
     [:input.for-date {:type "text"
                       :placeholder "Дата"
                       :id "customItemDateInput"}]]
    [:div.ui.small.action.input
     [:input {:type "number" :id "customItemSummInput" :placeholder "Сумма"}]
     [:div.ui.icon.button
      {:title "Добавить"
       :on-click #(add-category-item (:category-type selected-category)
                                     (:category-id selected-category)
                                     (dom/value-from-dom "#customItemDateInput")
                                     (dom/value-from-dom "#customItemSummInput"))}
      [:i.add.icon]]]]])

;-------------------------------- Главная вьюшка -------------------------------------
(rum/defc main-view < rum/reactive
  []
  (let [is-loading? (rum/react (state-cursor [:loading?]))
        all-clients (rum/react (state-cursor [:all-clients]))
        clients-cinfos (rum/react (state-cursor [:clients-cinfos]))
        expired-cinfos (rum/react (state-cursor [:clients-expired-cinfos]))
        income-categories (rum/react (state-cursor [:incomecategories]))
        income-items (rum/react (state-cursor [:incomeitems]))
        expense-categories (rum/react (state-cursor [:expensecategories]))
        expense-items (rum/react (state-cursor [:expenseitems]))
        total-i-expired-summ (rum/react (state-cursor [:total-i-expired-summ]))
        total-i-cell-summs (rum/react (state-cursor [:total-i-cell-summs]))
        total-e-cell-summs (rum/react (state-cursor [:total-e-cell-summs]))
        init-bs-on-start (rum/react (state-cursor [:init-balances-on-start]))
        init-bs-on-end (rum/react (state-cursor [:init-balances-on-end]))
        selected-cell  (rum/react (state-cursor [:selected-cell]))
        selected-category (rum/react (state-cursor [:selected-category]))
        all-visible-d (rum/react (state-cursor [:all-visible-dates]))
        new-movement (rum/react (state-cursor [:new-movement]))
        new-movement-errors (rum/react (state-cursor [:new-movement-errors]))
        add-income-cat-mode? (rum/react (state-cursor [:modes :add-income-cat-mode?]))
        add-expense-cat-mode? (rum/react (state-cursor [:modes :add-expense-cat-mode?]))
        edit-income-cat-mode? (rum/react (state-cursor [:modes :edit-income-cat-mode?]))
        edit-expense-cat-mode? (rum/react (state-cursor [:modes :edit-expense-cat-mode?]))
        edit-i-item-mode? (rum/react (state-cursor [:modes :edit-income-item-mode?]))
        edit-e-item-mode? (rum/react (state-cursor [:modes :edit-expense-item-mode?]))
        add-category-item-mode? (rum/react (state-cursor [:modes :add-category-item-mode?]))
        ]
    [:div
     ; loader
     [:div.ui.active.centered.inline.loader
      {:style {:visibility (if is-loading? "visible" "hidden")}}]
     ; сама таблица
     [:div.outer {:style {:margin-top "3em"}}
      [:div.inner
       [:table {:class ["ui compact celled very basic table"
                        "diagram-clients-table"
                        "fixed-first-column-table"]}
        [:thead
         [:tr
          [:th "Клиенты"]
          [:th {:style {:text-align "center"}} "Просрочка"]
          (map #(-> [:th {:style {:text-align "right"}} (u/to-print-date %)])
               all-visible-d)
          [:th {:style {:text-align "center" :min-width "80px"}} "Итого"]]]
        [:tbody
         ; поступления от клиентов
         (map #(client-income-tr-view %
                                      all-visible-d
                                      (get clients-cinfos (:id %))
                                      (get expired-cinfos (:id %)))
              all-clients)

         ; статьи дохода
         (map (fn [cat]
                (custom-category-tr-view :income
                                         cat
                                         (filter #(= (:category_id %)
                                                     (:id cat))
                                                 income-items)
                                         all-visible-d
                                         edit-i-item-mode?
                                         edit-income-cat-mode?
                                         (category-selected? (:id cat) :income)))
              income-categories)

         ; для новой категории
         (add-custom-category-tr-view :income all-visible-d add-income-cat-mode?)

         ; итого поступления
         [:tr.total-row
          [:td "Итого поступления"]
          [:td (u/money-str total-i-expired-summ)]
          (map #(-> [:td (u/money-str (get total-i-cell-summs %))])
               all-visible-d)
          ; общее итого поступлений
          [:td (u/money-str (->
                              (+ (reduce-kv (fn [s k v] (+ s v)) 0 total-i-cell-summs))
                              (+ total-i-expired-summ)))]]

         ; расходы
         [:tr.total-row
          [:td "Расходы"]
          [:td]
          (map #(-> [:td (u/money-str (get total-e-cell-summs %))])
               all-visible-d)
          ; общее итого расходов
          [:td (u/money-str (reduce-kv (fn [s k v] (+ s v)) 0 total-e-cell-summs))]]

         ; статьи расхода
         (map (fn [cat]
                (custom-category-tr-view :expense
                                         cat
                                         (filter #(= (:category_id %)
                                                     (:id cat))
                                                 expense-items)
                                         all-visible-d
                                         edit-e-item-mode?
                                         edit-expense-cat-mode?
                                         (category-selected? (:id cat) :expense)))
              expense-categories)

         ; для новой категории
         (add-custom-category-tr-view :expense all-visible-d add-expense-cat-mode?)

         ; остаток на начало
         [:tr.total-row
          [:td "Остаток на начало"]
          [:td]
          (map #(-> [:td (u/money-str (get init-bs-on-start %))])
               all-visible-d)
          [:td (u/money-str (mc/total-init-balance init-bs-on-end all-visible-d))]]

         ; остаток на конец
         [:tr.total-row
          [:td "Остаток на конец"]
          [:td]
          (map #(-> [:td (u/money-str (get init-bs-on-end %))])
               all-visible-d)
          [:td (u/money-str (mc/total-init-balance init-bs-on-end all-visible-d))]]]]

       ; попап
       (cell-popup-view selected-cell)]]
     ; модальное окно для добавления перемещения
     (add-movement-modal-view new-movement new-movement-errors)
     ; кастомное попап меню для добавления записи в категорию
     (custom-popup-item-menu selected-category add-category-item-mode?)
     ; общее модальное окно для подтверждения действия
     (com-v/basic-approve-modal-view)
     ]))



(defn ^:export init []
  (do
    (println "init moneyincomes")
    (init-channels)
    (init-watchers)
    (refresh-ajax-data)
    (rum/mount (main-view) (.getElementById js/document "maintable"))))
