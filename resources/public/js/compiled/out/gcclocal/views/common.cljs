(ns gcclocal.views.common
  (:require [rum.core :as rum]))


(def modal-atom (atom {:header nil
                       :text nil}))

(defn show-approve-modal
  "Показать модальное окно подтверждения
  с текстом и функцией, которая последует при подтв."
  ([text approve-fn] (show-approve-modal nil text approve-fn))
  ([header text approve-fn]
   (do
     (reset! modal-atom {:text text :header header})
     (.modal (.modal (js/$ "#global-approve-modal")
                     #js {:detachable false
                          :onApprove #(approve-fn)})
             "show"))))


(rum/defc basic-approve-modal-view < rum/reactive
  "Модальное окно подтверждения какого-либо действия (например удаления)"
  []
  (let [options (rum/react modal-atom)]
    [:div.ui.small.modal#global-approve-modal
     (when (:header options)
       [:div.header (:header options)])
     [:div.content
      [:p (:text options)]]
     [:div.actions
      [:div.ui.deny.button "Нет"]
      [:div.ui.approve.positive.button "Да"]]]))
