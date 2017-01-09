(ns gcclocal.model.logist-sync
  (:require [gcclocal.db.sqlutils :as sql]
            [gcclocal.time-utils :as t]
            [gcclocal.utils :as u]
            [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clojure.data.zip.xml :as zip-xml]
            [honeysql.core :as honey-sql]
            [honeysql.helpers :as s]))


(def uri "https://www.railwagonlocation.com/xml/export.php?name=globalcc_XML&password=uAGqraAY&request_type=get_user_vagons&all_operations=n")


(defn xml->dli-hms
  "Получить массив хм поставок из XML запроса к вагонам"
  []
  (let [root-data (-> uri
                      xml/parse
                      zip/xml-zip)]
    (for [v (zip-xml/xml-> root-data :data :vagon)]
      (let [v-info-> #(->> %
                           (zip-xml/xml1-> v :vagon_info)
                           zip-xml/text)
            v-pos-> #(->> %
                          (zip-xml/xml1-> v :position)
                           zip-xml/text)
            ]
        {:wagon_number (v-info-> :vagon_no)
         :from_station_name (v-info-> :from_name)
         :from_station_code (v-info-> :from_code)
         :to_station_name (v-info-> :to_name)
         :to_station_code (v-info-> :to_code)
         :send_date (v-info-> :send_date)

         :current_position_date (v-pos-> :current_position_date)
         :current_station_name (v-pos-> :current_position)
         :current_station_code (v-pos-> :current_position_code)
         }))))


(defn should-update?
  "Проверка, что вагон с таким номером уже есть в таблице поставок в пути
  и надо обновить инфу"
  [dli-hm]
  (let [wagon-number (:wagon_number dli-hm)
        top-info (sql/m-select-single (-> (s/select :*)
                                       (s/from :forsync_editdlis)
                                       (s/where [:= :wagon_number wagon-number])
                                       (s/order-by [:creation_datetime :desc])
                                       (s/limit 1)))]
    (and (sql/has-where? :primarydocs_departurelogistinfo
                         [:and [:= :wagon_number wagon-number]
                               [:= :status 1]])
         (not= (:current_station_code top-info)
               (u/to-int (:current_station_code dli-hm))))))



(defn new-dli?
  "Проверка, что вагон с таким номером еще не добавлен"
  [dli-hm]
  ; TODO: optim: заменить на 1 sql запрос?
  (and (not (sql/has-where? :forsync_newdlis [:= :wagon_number (:wagon_number dli-hm)]))
       (not (sql/has-where? :primarydocs_departurelogistinfo [:= :wagon_number (:wagon_number dli-hm)]))))


(defn add-newdli
  [newdli-hm]
  (sql/insert-with-return :forsync_newdlis
                          {:status 1
                           :creation_datetime (t/now-datetime)
                           :wagon_number (:wagon_number newdli-hm)
                           :shipping_date (t/parse-date-sync
                                            (:send_date newdli-hm))
                           :from_station_name (:from_station_name newdli-hm)
                           :from_station_code (u/to-int (:from_station_code newdli-hm))
                           :to_station_name (:to_station_name newdli-hm)
                           :to_station_code (u/to-int (:to_station_code newdli-hm))
                           :current_station_name (:current_station_name newdli-hm)
                           :current_station_code (u/to-int (:current_station_code newdli-hm))
                           }))


(defn add-editdli
  [editdli-hm]
  (sql/insert-with-return :forsync_editdlis
                          {:status 1
                           :creation_datetime (t/now-datetime)
                           :current_station_name (:current_station_name editdli-hm)
                           :current_station_code (u/to-int (:current_station_code editdli-hm))
                           :current_arrival_date (t/parse-datetime-sync
                                                   (:current_position_date editdli-hm))
                           :wagon_number (:wagon_number editdli-hm)}))


(defn process-dlis
  "Обработка каждой полученной поставки
  (пришедшие в виде хэшмэпа)"
  [dlis]
  (doseq [dli dlis]
    (if (new-dli? dli)
      (do
        (println "New dli: " (:wagon_number dli))
        (add-newdli dli))
      (if (should-update? dli)
        (do
          (println "should update " (:wagon_number dli))
          (add-editdli dli))
        (println "should not update" (:wagon_number dli))))))

;; ========================== Основной метод ===============================
(defn process-wagons-sync
  [sync-time]
  (process-dlis (xml->dli-hms)))
