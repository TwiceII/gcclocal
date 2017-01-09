(ns gcclocal.main.login
  (:require [gcclocal.comm.utils :as u]
            [gcclocal.comm.dom-utils :as dom]
            [rum.core :as rum]))


(enable-console-print!)


(defonce form-errors (atom nil))

(defn post-login
  []
  (let [username (dom/value-from-dom "[name='username']")
        password (dom/value-from-dom "[name='password']")]
    (u/post-json-with-success-check
      "/login"
      {:username username
       :password password}
      (fn [r]
        (do
          (println "success login")
          (set! (.-location js/window) (:redirect-url r))))
      (fn [r]
        (reset! form-errors (:errors r))))
    ))

(rum/defc login-view < rum/reactive
  []
  (let [errors (rum/react form-errors)]
    [:div.column
     [:div.ui.teal.image.huge.header
      [:img.image {:src "images/logo_brk.png"}]
      [:div.content "Войдите в систему"]]
     [:form.ui.large.form.error
      {:on-submit #(do
                     (post-login)
                     (.preventDefault %))}
      [:div.ui.stacked.segment
       [:div.field
        [:div.ui.left.icon.input
         [:i.user.icon]
         [:input {:type "text" :name "username"
                  :placeholder "Логин"}]]]
       [:div.field
        [:div.ui.left.icon.input
         [:i.lock.icon]
         [:input {:type "password" :name "password"
                  :placeholder "Пароль"}]]]
       (when (not (u/nil-or-empty? errors))
        [:div.ui.error.message
         [:ul {:style {:text-align "left"}}
          (map #(-> [:li %]) errors)]])
       [:button.ui.fluid.large.teal.button
        "Войти"]]]]))


(defn ^:export init []
  (println "init login")
  (rum/mount (login-view) (.getElementById js/document "mainp")))




