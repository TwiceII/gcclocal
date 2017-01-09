;; =========================================================
;; Функции для работы с заданиями по расписанию
;; =========================================================
(ns gcclocal.scheduler
  (:require [gcclocal.utils :as u]
            [gcclocal.logger :as log]
            [gcclocal.model.logist-sync :refer [process-wagons-sync]]
            [clj-time.core :as t]
            [clj-time.periodic :refer [periodic-seq]]
            [chime :refer [chime-at]]))


(defn common-handler
  "Общий обработчик заданий с логированием"
  [schedule-time handler-fn postfix]
  (try
    (log/log-scheduler-start schedule-time postfix)
    (handler-fn schedule-time)
    (catch Exception e (do
                         (log/log-exception e "error on scheduler")
                         (log/log-scheduler-exception schedule-time
                                                      postfix
                                                      e)))))

(defn schedule-handler
  "Обработчик заданий"
  [handler-fn postfix]
  (fn [schedule-time]
    (common-handler schedule-time handler-fn postfix)))


(defn start-schedule!
  "Запустить задание"
  [sch-hm]
  (chime-at (:schedule sch-hm)
            (schedule-handler (:task-fn sch-hm)
                              (:postfix sch-hm))))


;;=========================================================================
; список заданий по расписанию
(def all-schedules
  [{:postfix "wagon-sync"
    :schedule (periodic-seq (t/now) ; каждые полчаса
                            (-> 30 t/minutes))
    :task-fn process-wagons-sync}])


(defn start-all-schedules!
  "Запустить все задания по расписанию"
  []
  (println "start-all-schedules")
  (doseq [s all-schedules]
    (do
      (println "started " (:postfix s))
      (start-schedule! s))))





