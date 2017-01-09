;;;; =========================================================
;;;; Функции валидации значений/полей и т.д.
;;;; =========================================================
(ns gcclocal.validation-utils
  (:require [clojure.string :refer [blank? lower-case]]
            [gcclocal.db.sqlutils :as sql]
            [honeysql.helpers :as s]
            [gcclocal.db.crud :as crud]
            [gcclocal.utils :refer [add-to-vector-into-map to-date] :as u]))


(defn re-integer?
  "Regex проверка строки на целое число"
  [to-check]
  (and (not (nil? to-check))
       (re-matches (re-pattern "\\d+") to-check)))

(defn re-float?
  "Regex проверка строки на веществ. число"
  [to-check]
  (and (not (nil? to-check))
       (re-matches (re-pattern "[\\-\\+]?[0-9]*(\\.[0-9]+)?") to-check)))

(defn re-boolean?
  "Проверка строки на булеан"
  [to-check]
  (case (lower-case to-check)
    "true" true
    "false" true
    false))

(defn is-date-in-valid-format?
  "Проверка что строка валидная для дат (в формате ДД.ММ.ГГГГ или js iso)"
  [date-str]
  (try
    (do
      (to-date date-str)
      true)
    (catch Exception e false)))

;; ======================= основные методы для проверки значения ================
(defn is-int?
  [v]
  (or (integer? v) (not (nil? (re-integer? (str v))))))

(defn is-float?
  [v]
  (or (float? v) (not (nil? (re-float? (str v))))))

(defn is-boolean?
  [v]
  (or (instance? Boolean v) (re-boolean? (str v))))

(defn is-date?
  [v]
  (or (instance? org.joda.time.DateTime v) (is-date-in-valid-format? v)))

; ========================= валидации с записью ошибок ========================
(defn main-check
  "Базовая функция валидации"
  [check-fn required? errors row fieldkey error-msg1 error-msg2]
  (let [row-val (fieldkey row)]
    (if (blank? (str row-val))
      (if required?
        (add-to-vector-into-map errors fieldkey error-msg1)
        errors)
      (u/when-or-skip errors
                      (not (check-fn row-val))
                      #(add-to-vector-into-map % fieldkey error-msg2)))))

(defn check-required-and
  "Проверка, что поле обязательное и затем другая проверка"
  [check-fn errors row fieldkey error-msg1 error-msg2]
  (main-check check-fn true
              errors row fieldkey error-msg1 error-msg2))

(defn check-not-required-and
  "Проверка, что поле необязательное и затем другая проверка"
  [check-fn errors row fieldkey error-msg]
  (main-check check-fn false
              errors row fieldkey nil error-msg))


; проверка, что просто поле обязательное (обычно для строк)
(defn check-is-required
  [errors row fieldkey error-msg]
  (check-required-and #(-> %) errors row fieldkey error-msg nil))

; Проверка поля на целое число
(def check-is-int (partial check-not-required-and is-int?))
(def check-is-int-required (partial check-required-and is-int?))

; Проверка поля на веществ. число
(def check-is-float (partial check-not-required-and is-float?))
(def check-is-float-required (partial check-required-and is-float?))

; Проверка поля на дату в формате ДД.ММ.ГГГГ"
(def check-is-date (partial check-not-required-and is-date?))
(def check-is-date-required (partial check-required-and is-date?))

; Проверка поля на булево значение
(def check-is-boolean (partial check-not-required-and is-boolean?))
(def check-is-boolean-required (partial check-required-and is-boolean?))


(defn- get-f
  [func row & args]
  (apply list (conj (apply conj args) row func)))


(defmacro validate-row
  [row & body]
  `(-> {}
       ~@(map #(get-f (first %)
                      row
                      (rest %)) body)))


;; (macroexpand-1 '(validate-row {:good_id 213}
;;                             (check-is-int :good_id "Блабла")
;;                             (check-is-float :summ "324" "354")))

;; (validate-row {:name "asd" :client-id "1qwe"}
;;               (check-is-int :name "blablab!")
;;               (check-is-int-required :client-id "blablab!2" "shmlabn"))
