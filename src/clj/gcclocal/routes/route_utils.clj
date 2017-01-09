(ns gcclocal.routes.route-utils
  (:require [gcclocal.utils :refer :all]
            [gcclocal.time-utils :as tu]
            [gcclocal.model.money-calcs :as mon-c]
            [gcclocal.settings :as sett]
            [gcclocal.logger :as logger]
            [selmer.parser :refer [render-file render]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.util.response :refer [resource-response response
                                        redirect content-type]]))

; кол-во строк на странице по умолчанию
(def PAGE-SIZE 10)

(defn render-with-base-keys
  "Отрендерить нужную страницу
  со включением базовых параметров (юзер и т.д)"
  [req filename tmap]
  (let [user (:user (:session req))
        dev-mode sett/dev-mode]
    (render-file filename (-> tmap
                              (assoc :display-username (:username user))
                              (assoc :dev-mode dev-mode)))))

;============================== Кастомные хэндлеры =========================
(defn wrap-exception-handling
  "Handler для эксепшенов"
  [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception e
        (do
          (logger/log-exception e (:uri request))
          {:status 500 :body (str "Exception occured: "
                                  (.getMessage e))})))))

(defn wrap-exception-json
  "Handler для эксепшенов, который возвращает JSON"
  [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception e
        (do
          (logger/log-exception e (:uri request))
          (response {:success false
                     :errors {:general [(.getMessage e)]}}))))))


(defn wrap-authenticated
  "Аутентификация пользователя"
  [handler]
  (fn [{{user :user} :session :as req}]
    (if (nil? user)
      ; возврат на главную страницу
      (redirect "/login")
      (handler req))

  ;; без проверки (для тестов)
;;    (handler req)
    ))


(defn wrap-user
  "Закидывать юзера в сессию"
  [handler]
  (fn [{user :user :as req}]
    (do
      (if (nil? user)
        (handler req)
        (handler (assoc req :user (user)))))))


(defn convert-json-with-dates
  "Обработчик, который переводит JodaTime даты в java.util.Date
  (т.к стандартный wrap-json-response не умеет парсить JodaTime)"
  [handler]
  (fn [request]
    (let [response (handler request)]
      (if (coll? (:body response))
        (let [response-with-java-dates (update-in response [:body]
                                                  tu/in-hm-joda-dates->java-dates)]
          response-with-java-dates)
        response))))


(defn in-json-summ-c-id->cmoney
  "Обработчик, который переводит поля :summ и :c-id
  в :cmoney {:summ(число) :currency(код строка)}
  для чтения"
  [handler]
  (fn [request]
    (let [response (handler request)]
      (if (coll? (:body response))
        (let [response-with-cmoney (update-in response [:body]
                                              mon-c/in-hm-c-money->cmoney)]
          response-with-cmoney)
        response))))



(defn wrap-custom-json
  "Кастомный json обработчик,
  который делает предварительные шаги прежде чем отдать wrap-json-response"
  [handler]
  (-> handler
      wrap-exception-json
      convert-json-with-dates
      in-json-summ-c-id->cmoney
      wrap-json-response))

;=========================================================================

(defn check-for-errors-and-return-response
  "Проверить на ошибки и
  взависимости от их наличия отдать нужный результат (json)"
  [errors main-fn ]
  (if (nil-or-empty? errors)
    (do
      (main-fn)
      (response {:success true}))
    (response {:success false
               :errors errors})))
