;;;; =========================================================
;;;; Руты для автоматизации с 1С
;;;; =========================================================
(ns gcclocal.routes.sync1c-routes
  (:require [gcclocal.db.sqlutils :as sql]
            [gcclocal.time-utils :as tu]
            [gcclocal.logger :as logger]
            [gcclocal.db.crud :as crud]
            [gcclocal.xml-utils :as xml-u]
            [gcclocal.model.processing-new :as proc-n]
            [ring.mock.request :as mock]))

;; статусы пакетов в истории (успешно обработанные и необработанные)
(defonce ^:const status-success 1)
(defonce ^:const status-failure 2)


(defn- write-package-to-history
  "Записать обработку пакета в историю"
  [package-id status]
  (sql/insert-with-return :sync1c_packageshistory
                          {:status status
                           :package_id (str package-id)
                           :package_date (tu/now-datetime)}))

(defn- write-package-to-history-with-stats
  "Записать обработку пакета в историю (+ статы)"
  [package-id status total-stats]
  (sql/insert-with-return :sync1c_packageshistory
                          {:status status
                           :package_id (str package-id)
                           :package_date (tu/now-datetime)
                           :total_count (:total total-stats)
                           :success_count (:success-processed total-stats)
                           :invalid_count (:invalid total-stats)
                           }))


(defn- failure-result
  "Вернуть отрицательный ответ (xml-строку)"
  [error]
  (xml-u/hiccup->xml-str [:result {}
                          [:status {} "failure"]
                          [:error {} error]]))


(defn- success-result
  "Вернуть положительный ответ (xml-строку)"
  []
  (xml-u/hiccup->xml-str [:result {}
                          [:status {} "success"]]))


(defn- package-already-processed?
  "Проверка, что пакет был обработан"
  [package-id]
  (println "-- package-already-processed?")
  (println package-id)
  (println "-----")
  ;; проверяем в базе с таким package-id
  ;; и чтобы статус был "успешно обработан"
  (sql/has-where? :sync1c_packageshistory
                  [:and [:= :status status-success]
                        [:= :package_id (str package-id)]]))


;;;; =========================================================================

;;; TEST for 1C
(defn get-success-checkpackagestatus
  "Проверка пакета от 1С: был ли он уже обработан - success"
  [package-id]
  (success-result))


;;; TEST for 1C
(defn get-failure-checkpackagestatus
  "Проверка пакета от 1С: был ли он уже обработан - failure"
  [package-id]
  (failure-result "package already processed"))


;;; TEST for 1C
(defn post-success-processpackage
  "Обработка пакета от 1С - success"
  [req]
  (success-result))

;;; TEST for 1C
(defn post-failure-processpackage
  "Обработка пакета от 1С - failure"
  [req]
  (failure-result "server error"))

;;;; ========================================================================


(defn get-checkpackagestatus
  "Проверка пакета от 1С: был ли он уже обработан"
  [package-id]
  (try
    ;; если передан нормально id
    (if package-id
      ;; если такого нет - то положительный ответ, иначе отрицательный
      (if (package-already-processed? package-id)
        (failure-result "package already processed")
        (success-result))
      (failure-result "no packageid received"))
    (catch Exception e (do
                         ;; запись в лог
                         (logger/log-sync1c-exception e)
                         ;; возврат отриц.результата
                         (failure-result (.getMessage e))))))


(defn post-proccesspackage
  "Обработка пакета от 1С, основная ф-ция"
  [req]
  (println "--- post-proccesspackage ---")
  ;; обработка
  (try
    ;; парсим и получаем все данные
    (xml-u/with-open-stream-to-xml
      (:body req)
      (fn [package-data]
        (let [package-number (xml-u/zipper->value package-data :package :PackageNumber)]
          ;; если передан нормально id пакета
          (if package-number
            (try
              ;; доп.проверка на то, что еще не обработали этот пакет
              (if (not (package-already-processed? package-number))
                (->> package-data
                     ;; обрабатываем пакет
                     proc-n/process-xml-package
                     ;; запись в таблицу пакетов успешную обработку со статами
                     (write-package-to-history-with-stats package-number status-success)
                     ;; возврат успешного результата
                     ((fn[_] (success-result))))
                ;; отриц.результат, пакет уже был обработан
                (failure-result "package already processed"))
              ;; если возникла ошибка при обработке, то запись в таблицу пакетов
              (catch Exception e (do
                                   (write-package-to-history package-number
                                                             status-failure)
                                   (throw e))))
            ;; выдаем исключение, что id не передано
            (throw (Exception. "no packageid received"))))))
    ;; если на каком-либо этапе возникла ошибка
    (catch Exception e (do
                         ;; запись в лог
                         (logger/log-sync1c-exception e)
                         ;; возврат отрицательного результата
                         (failure-result (.getMessage e))))))


;; (let [xml-str
;;       "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
;;        <package>
;;          <PackageNumber>1491</PackageNumber>
;;          <Supplier>
;;            <UUID>875734d1-4e5d-11e6-9787-001e0bd49cc4</UUID>
;;            <id>000000011</id>
;;            <Name>Test Supplier</Name>
;;            <Operation>U</Operation>
;;          </Supplier>
;;          <Supplier>
;;            <UUID>87573443-4e5d-11e6-9787-001e0bd49cc8</UUID>
;;            <id>000000014</id>
;;            <Name>qwe</Name>
;;            <Operation>U</Operation>
;;          </Supplier>
;;          <Posting>
;;            <UUID>775734d1-4e5d-11e6-9787-001e0bd49cc7</UUID>
;;            <id>000000012</id>
;;            <Date>2015-09-08</Date>
;;            <Name>Posting 1</Name>
;;            <Sum>35454.56</Sum>
;;            <Currency>KZT</Currency>
;;            <Supplier>43534fdf</Supplier>
;;            <Operation>U</Operation>
;;          </Posting>
;;        </package>"

;;       req (->  (mock/request :post "/sync1c/proccesspackage")
;;                (mock/body xml-str)
;;                (mock/content-type "text/xml"))]
;;   (post-proccesspackage2 req))



;; (let [req
;;       (-> (mock/request :post "/sync1c/proccesspackage")
;;           (mock/body "<?xml version=\"1.0\" encoding=\"UTF-8\"?><package><packageid>00001M</packageid></package>")
;;           (mock/content-type "text/xml"))]
;;   (post-proccesspackage req))


;; (let [req
;;       (-> (mock/request :post "/sync1c/proccesspackage")
;;           (mock/body "<?xml version=\"1.0\" encoding=\"windows-1251\"?>
;; <package xmlns=\"http://www.order-package.org\"
;;   xmlns:xs=\"http://www.w3.org/2001/XMLSchema\"
;;   xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">
;;   <packageNumber>0001</packageNumber>
;;   <Client>
;;     <UUID>875734d1-4e5d-11e6-9787-001e0bd49bb4</UUID>
;;     <id>000001159</id>
;;     <Name xsi:type=\"xs:string\">Sauda CO Limited China Hong Kong</Name>
;;     <Operation>U</Operation>
;;   </Client>
;;   <Client>
;;     <UUID>875734d1-4e5d-11e6-9787-001e0bd49bb5</UUID>
;;     <id>000001160</id>
;;     <Name xsi:type=\"xs:string\">Some other</Name>
;;     <Operation>U</Operation>
;;   </Client>
;;   <Contract>
;;     <UUID>875734d2-4e5d-11e6-9787-001e0bd49bb4</UUID>
;;     <Name xsi:type=\"xs:string\">Без договора</Name>
;;     <Client>875734d1-4e5d-11e6-9787-001e0bd49bb5</Client>
;;     <Operation>U</Operation>
;;   </Contract>
;;   <Order>
;;     <UUID>ca147a5d-dc25-11e4-aa95-002522978826</UUID>
;;     <Number>1</Number>
;;     <Date>2015-02-11</Date>
;;     <Client>875734d1-4e5d-11e6-9787-001e0bd49bb5</Client>
;;     <Contract>875734d2-4e5d-11e6-9787-001e0bd49bb4</Contract>
;;     <ProductNum>3036</ProductNum>
;;     <Sum>734712</Sum>
;;     <Currency>RUB</Currency>
;;     <Operation>U</Operation>
;;   </Order>
;;   <Payment>
;;     <UUID>5a3a1d27-731e-11e6-9787-001e0bd49bb4</UUID>
;;     <Number>00000000214</Number>
;;     <Date>2016-09-01</Date>
;;     <Client>875734d1-4e5d-11e6-9787-001e0bd49bb5</Client>
;;     <Contract>875734d2-4e5d-11e6-9787-001e0bd49bb4</Contract>
;;     <Order/>
;;     <Sum>3753000</Sum>
;;     <Currency>KZT</Currency>
;;     <Operation>U</Operation>
;;   </Payment>
;;   <Selling>
;;     <UUID>4ef70d95-4919-11e4-b66b-0023268fb7a7</UUID>
;;     <Number>0470</Number>
;;     <Date>2014-09-26</Date>
;;     <Client>875734d1-4e5d-11e6-9787-001e0bd49bb5</Client>
;;     <Contract>875734d2-4e5d-11e6-9787-001e0bd49bb4</Contract>
;;     <Order>ca147a5d-dc25-11e4-aa95-002522978826</Order>
;;     <Sum></Sum>
;;     <Currency>KZT</Currency>
;;     <Operation>U</Operation>
;;   </Selling>
;;   <Posting>
;;     <UUID>edf770ae-d6bc-11e5-b8ee-bc5ff4e29a11</UUID>
;;     <Number>00000002299</Number>
;;     <Date>2015-11-30</Date>
;;     <Client>875734d1-4e5d-11e6-9787-001e0bd49bb5</Client>
;;     <Contract>875734d2-4e5d-11e6-9787-001e0bd49bb4</Contract>
;;     <Order>ca147a5d-dc25-11e4-aa95-002522978826</Order>
;;     <Sum>1540</Sum>
;;     <Currency>USD</Currency>
;;     <Operation>U</Operation>
;;   </Posting>
;; </package>")
;;           (mock/content-type "text/xml"))]
;;   (post-proccesspackage req))





