;;;; =========================================================
;;;; Функции для логирования в файлы
;;;; =========================================================
(ns gcclocal.logger
  (:require [gcclocal.time-utils :as tu]
            [gcclocal.settings :as sett]
            [clojure.string :as clj-s]
            [clj-time.core :as t]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.core :as appenders]))


;; (defn level-time-str
;;   [level]
;;   (str (clj-s/upper-case (name level)) " " (tu/current-time-str) ": "))

;; (t/time-zone-for-offset +6)

;; (.toTimeZone (t/time-zone-for-offset +6))

;; ;; (defn timez
;; ;;   []
;; ;;   (.toTimeZone (tu/now-datetime)))

;; (def timestamp-ops
;;  {:pattern     "yy-MMM-dd HH:mm:ssssssqwe"
;;    :locale      (java.util.Locale. "ru")
;;    ;; :timezone (java.util.TimeZone/getTimeZone "UTC")
;;    :timezone    (.toTimeZone (t/time-zone-for-offset +6))})

;; (do
;;   (timbre/merge-config! {:appenders {:timestamp-opts timestamp-ops}})
;;   (timbre/merge-config!
;;       {:appenders {:spit (appenders/spit-appender {:fname "my-file.log"})}})
;;   (timbre/info "try date"))

(defn log-name
  "Получить название для файла лога"
  [postfix]
  (str (tu/current-date-str) "-" postfix ".log"))


(defn log-trace [msg]
  ; вывод на экран
  (timbre/info msg))


(defn log-exception
  "Логирование исключений"
  [e infostr]
  ; вывод в консоль
  (clojure.stacktrace/print-stack-trace e)
  ; вывод в log файл
  (timbre/merge-config!
      {:appenders {:spit (appenders/spit-appender {:fname (log-name "exceptions") })}})
  (timbre/info (str infostr "\n"
                    (.getMessage e) "\n"
                    (apply str (interpose "\n" (.getStackTrace e))) "\n")))


(defn log-scheduler-start
  "Логирование начала выполнения задания по расписанию"
  [sch-datetime sch-postfix]
  (timbre/merge-config!
      {:appenders {:spit (appenders/spit-appender
                           {:fname (log-name sch-postfix) })}})
  (timbre/info (str "Processing " sch-postfix " at "
                    (tu/time->str sch-datetime)
                    "\n")))


(defn log-scheduler-exception
  "Логирование исключения во время выполн. задания по расписанию"
  [sch-datetime sch-postfix e]
  ; вывод в консоль
  (clojure.stacktrace/print-stack-trace e)
  ; вывод в log файл
  (timbre/merge-config!
      {:appenders {:spit (appenders/spit-appender
                           {:fname (log-name (str sch-postfix "-exception"))})}})
  (timbre/info (str "Error while processing " sch-postfix " at: "
                    (tu/time->str sch-datetime)
                    "\n"
                    (.getMessage e) "\n"
                    (apply str (interpose "\n" (.getStackTrace e))) "\n")))


(defn log-sync1c-exception
  "Логирование исключений при обработке данных с 1С"
  ([e] (log-sync1c-exception e ""))
  ([e infostr]
   ; вывод в консоль
   (clojure.stacktrace/print-stack-trace e)
   ; вывод в log файл
   (timbre/merge-config!
     {:appenders {:spit (appenders/spit-appender {:fname (log-name "sync1c-exceptions") })}})
   (timbre/info (str infostr "\n"
                     (.getMessage e) "\n"
                     (apply str (interpose "\n" (.getStackTrace e))) "\n"))))


(defn log-1c-entity-success
  "Запись в лог об успешной обработке записи из xml"
  [package-number operation-type entity-xml]
  (do
    ;; вывод в консоль
;;     (println (str package-number "\n" operation-type ": " entity-xml))
    ;; вывод в log файл
    (timbre/merge-config!
      {:appenders {:spit (appenders/spit-appender {:fname (log-name "process1c") })}})
    (timbre/info (str package-number "\n"
                      operation-type ": " entity-xml "\n"))))


(defn log-1c-total-package-stats
  "Запись в лог об результатах обработки пакета xml"
  [package-number success-count total-count]
  (do
    ;; вывод в консоль
;;     (println (str "Package #" package-number " processed succesfully: "
;;                           success-count " of " total-count))
    ;; вывод в log файл
    (timbre/merge-config!
      {:appenders {:spit (appenders/spit-appender {:fname (log-name "process1c") })}})
    (timbre/info (str "======================================================="
                      "\n"
                      "Package #" package-number " processed succesfully: "
                      success-count " of " total-count "\n"))))


(defn log-1c-processed-package-stats
  "Запись в лог об результатах обработки пакета xml"
  [package-number total-count invalid-count success-count]
  (do
    ;; вывод в log файл
    (timbre/merge-config!
      {:appenders {:spit (appenders/spit-appender {:fname (log-name "process1c") })}})
    (timbre/info (str "======================================================="
                      "\n"
                      "Package #" package-number " processed stats:\n"
                      "Total: " total-count "; "
                      "Invalid: " invalid-count "; "
                      "Successfully: " success-count "\n"))))



(defn log-1c-entity-failure
  "Запись в лог об неудавшейся обработке записи из xml"
  [package-number entity-xml e]
  (do
    ;; вывод в консоль
;;     (println (str package-number "\n"))
    (clojure.stacktrace/print-stack-trace e)
    ;; вывод в log файл
    (timbre/merge-config!
      {:appenders {:spit (appenders/spit-appender {:fname (log-name "process1c-exceptions") })}})
    (timbre/info (str package-number "\n"
                      (.getMessage e) "\n"
                      entity-xml "\n"
                      (apply str (interpose "\n" (.getStackTrace e))) "\n"))))





