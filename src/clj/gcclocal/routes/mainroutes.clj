;;;; =========================================================
;;;; Основные руты (для главной, авторизации и т.д.)
;;;; =========================================================
(ns gcclocal.routes.mainroutes
  (:require [gcclocal.model.users :as user-model]
            [gcclocal.settings :as sett]
            [gcclocal.routes.route-utils :as ru]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [selmer.parser :refer [render-file render]]
            [ring.util.response :refer [resource-response response
                                        redirect content-type]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response]]))


(defn get-index
  "Главная (с полями для авторизации)"
  [req]
  (ru/render-with-base-keys req "public/templates/index.html" {}))


(defn get-login
  "Страница авторизации"
  [req]
  (ru/render-with-base-keys req "public/templates/login.html" {}))


(defn post-login
  "Вход (авторизация) пользователя"
  [{{username :username password :password} :body
    session :session :as req}]
  (if-let [user (user-model/get-user-by-username-and-password username password)]
    ; если есть пользователь
    (do
      (assoc
        (response {:success true :redirect-url "/"})
          :session (assoc session :user user)))
    ; иначе
    (response {:success false :errors ["Неправильно введены логин или пароль"]})))


(defn get-logout
  "Выход пользователя"
  [{session :session}]
  (assoc (redirect "/")
         :session (dissoc session :user)))
