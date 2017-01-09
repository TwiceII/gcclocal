;;;; =========================================================
;;;; Основной код сервера с иниц-цией всех рутов
;;;; =========================================================
(ns gcclocal.server
  (:require [compojure.core :refer [ANY GET PUT POST DELETE defroutes context routes]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.util.response :refer [resource-response response charset
                                        redirect content-type]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.mock.request :as mock]
            [gcclocal.utils :refer :all]
            [gcclocal.routes.mainroutes :as mr]
            [gcclocal.model.primarydocs :as m-pd]
            [gcclocal.model.money-calcs :as mon-c]
            [gcclocal.routes.crud-routes :as cr]
            [gcclocal.db.crud :as crud]
            [gcclocal.model.catalogs :as m-catalogs]
            [gcclocal.routes.catalogs :as r-catalogs]
            [gcclocal.routes.route-utils :as r-utils]
            [gcclocal.routes.primarydocs :as r-primarydocs]
            [gcclocal.routes.money-diagram :as r-md]
            [gcclocal.routes.sync1c-routes :as r-sync1c]
            [gcclocal.logger :as logger]
            [gcclocal.scheduler :refer [start-all-schedules!]]
            )
  (:gen-class))


;;; руты для справочников
(defroutes catalog-routes
  (cr/get-routes-for-crud (:client r-catalogs/crud-routes-params))
  (cr/get-routes-for-crud (:supplier r-catalogs/crud-routes-params))
  (cr/get-routes-for-crud (:good r-catalogs/crud-routes-params))
  (cr/get-routes-for-crud (:station r-catalogs/crud-routes-params))
  (cr/get-routes-for-crud (:stationtraveltime r-catalogs/crud-routes-params))
  (GET "/currencies/all" [] (r-utils/wrap-custom-json
                              (fn[r](cr/get-rows-all r
                                                     #(crud/default-get-all-rows :currencies)))))
  (route/resources "/"))


;;; руты для основных документов
(defroutes primarydoc-routes
  (cr/get-routes-for-crud (:clientcontract r-primarydocs/crud-routes-params))
  (cr/get-routes-for-crud (:clientapplication r-primarydocs/crud-routes-params))
  (cr/get-routes-for-crud (:departure r-primarydocs/crud-routes-params))
  (cr/get-routes-for-crud (:departurelogistinfo r-primarydocs/crud-routes-params))
  (POST
    (str "/" (get-in r-primarydocs/crud-routes-params
                     [:departurelogistinfo :route-name]) "/finish")
        [] (r-utils/wrap-custom-json
             r-primarydocs/finish-departurelogistinfo-row))
  (POST
    (str "/" (get-in r-primarydocs/crud-routes-params
                     [:departurelogistinfo :route-name]) "/unfinish")
        [] (r-utils/wrap-custom-json
             r-primarydocs/unfinish-departurelogistinfo-row))
  (cr/get-routes-for-crud (:clientpayments r-primarydocs/crud-routes-params))
  (cr/get-routes-for-crud (:clientfines r-primarydocs/crud-routes-params))
  (cr/get-routes-for-crud (:clientinitincomes r-primarydocs/crud-routes-params))
  (cr/get-routes-for-crud (:initclientincome r-primarydocs/crud-routes-params))
  (cr/get-routes-for-crud (:initbalanceondate r-primarydocs/crud-routes-params))
  (GET "/newsyncdlis" [] (r-utils/wrap-custom-json
                           r-primarydocs/get-all-new-sync-rows))
  (POST "/addnewsync" [] (r-utils/wrap-custom-json
                           r-primarydocs/add-new-sync-dli))
  (POST "/deletenewsync" [] (r-utils/wrap-custom-json
                              r-primarydocs/delete-new-sync-dli))
  (GET "/departurelogistinfos/excel" [] r-primarydocs/excel-dli)
  (route/resources "/"))


;;; руты для диаграм
(defroutes moneydiagram-routes
  (cr/get-basic-crud-routes (:incomecategory r-md/crud-routes-params))
  (cr/get-basic-crud-routes (:expensecategory r-md/crud-routes-params))
  (cr/get-basic-crud-routes (:incomeitem r-md/crud-routes-params))
  (cr/get-basic-crud-routes (:expenseitem r-md/crud-routes-params))
  (cr/get-basic-crud-routes (:moneymovement r-md/crud-routes-params))
  (cr/get-basic-crud-routes (:shippingplan r-md/crud-routes-params))
  (GET "/moneyincomes" [] r-md/moneyincomes-index)
  (GET "/suppliershippingsplan" [] r-md/suppliershippingsplan-index)
  (GET "/clientpayments" [] (r-utils/wrap-custom-json
                              r-md/get-payments-from-clients))
  (GET "/initbalanceondate" [] (r-utils/wrap-custom-json
                                 r-md/get-init-balance-on-date))
  (route/resources "/"))


(defn xml-response
  [r]
  (-> r
      response
      (content-type "text/xml")))

;;; руты для синхронизации с 1С
(defroutes sync1-routes
;;   (GET "/successcheckpackagestatus" [packageid] (xml-response
;;                                                   (r-sync1c/get-success-checkpackagestatus packageid)))
;;   (GET "/failurecheckpackagestatus" [packageid] (xml-response
;;                                                   (r-sync1c/get-failure-checkpackagestatus packageid)))
;;   (POST "/successprocesspackage" [] #(xml-response (r-sync1c/post-success-processpackage %)))
;;   (POST "/failureprocesspackage" [] #(xml-response (r-sync1c/post-failure-processpackage %)))
  (GET "/checkpackagestatus" [packageid] (xml-response
                                           (r-sync1c/get-checkpackagestatus packageid)))
  (POST "/proccesspackage" [] #(xml-response (r-sync1c/post-proccesspackage %))))


;;; все руты приложения
(defroutes app-routes
  (context "/catalogs" []
           (r-utils/wrap-authenticated catalog-routes))
  (context "/primarydocs" []
           (r-utils/wrap-authenticated primarydoc-routes))
  (context "/moneydiagram" []
           (r-utils/wrap-authenticated moneydiagram-routes))
  (context "/sync1c" []
           sync1-routes)
  (GET "/" [] (r-utils/wrap-authenticated mr/get-index))
  (GET "/login" [] mr/get-login)
  (POST "/login" [] (wrap-json-response mr/post-login))
  (GET "/logout" [] mr/get-logout)
  (route/resources "/")
  (route/not-found "Not Found"))

;;; базовая цепочка хэндлеров
(def http-handler
  (-> app-routes
      (wrap-defaults (assoc site-defaults :security false))
      (wrap-json-body {:keywords? true :bigdecimals? true})
      r-utils/wrap-user
      r-utils/wrap-exception-handling))


(defn start-web-server!
  "Запуск веб-сервера"
  [port]
  (let [port (Integer. (or port (env :port) 81))]
    (run-jetty http-handler {:port port :join? false})))


(defn start-app!
  "Запуск приложения (основной метод)"
  [port]
  (do
    (println "App started...")
    (start-all-schedules!)
    (start-web-server! port)))


;;; функция запуска приложения
(defn -main [& [port]]
  (start-app! port))


























