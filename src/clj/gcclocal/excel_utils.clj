;;;; =========================================================
;;;; Функции для работы с excel
;;;; =========================================================
(ns gcclocal.excel-utils
  (:require [gcclocal.utils :as u]
            [gcclocal.time-utils :as tu]
            [dk.ative.docjure.spreadsheet :as xl]
            [clojure.java.io :as io]))

;;; название листа по умолчанию
(def ^:const default-workbook-name "Лист1")


(defn to-excel-str
  "Преобразование полей в excel-понятные"
  [ftype v]
  (case ftype
    :date (when v (tu/date->ddmmyyyy-w-timezone v))
    :datetime (when v (tu/datetime->str v))
    :numeric v
    (str v)))


;;; основные методы
(defn- get-workbook
  "Создать Excel лист с данными на нем"
  [workbook-name header-row rows]
  (let [wb (xl/create-workbook workbook-name
                               (into [] (cons header-row rows)))
        sheet (xl/select-sheet workbook-name wb)
        header-row (first (xl/row-seq sheet))]
    (do
      ;; выделяем строку заголовка
      (xl/set-row-style! header-row (xl/create-cell-style! wb {:background :grey_25_percent ,
                                                               :font {:bold true}}))
      wb)))


(defn create-workbook-to-local-file
  "Создать Excel файл и сохранить локально"
  [file-name workbook-name header-row rows]
  (xl/save-workbook! file-name (get-workbook workbook-name
                                             header-row
                                             rows)))


(defn create-spreadsheet-into-stream
  "Создать Excel файл и сохранить в поток"
  [out-stream workbook-name header-row rows]
  (xl/save-workbook-into-stream! out-stream
                                 (get-workbook workbook-name
                                               header-row
                                               rows)))


(defn create-from-rows-into-stream
  "Создать excel файл из строк и сохранить в поток

  out-stream - поток output для вывода
  rows - сортированный список hm строк
  headers - сортированный список заголовков и соответствий полей
  file-name - название файла"
  [out-stream rows headers]
  (create-spreadsheet-into-stream out-stream
                                  default-workbook-name
                                  (into [] (map :name headers))
                                  (into [] (map #(for [h headers]
                                                   (to-excel-str (:ftype h)
                                                                 (u/get-uni % (:field h))))
                                                rows))))



;; (let [headers [{:name "Название продукта" :field :name}
;;                {:name "Цена" :field :price}]
;;       rows [{:price 100 :name "Название 1" }
;;             {:name "Название 2" :price 200}]]
;;   (create-from-rows rows
;;                     headers
;;                     "test1.xlsx"))
