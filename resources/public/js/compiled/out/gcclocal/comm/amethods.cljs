(ns gcclocal.comm.amethods
  (:require
    [gcclocal.comm.utils :as u]
    [cljs.core.async :as a]
    [ajax.core :refer [GET POST
                       json-request-format json-response-format
                       url-request-format ajax-request]])
  (:require-macros [cljs.core.async.macros :as am]))


(defn refresh-rows
  "Обновить все строки через ajax-запрос"
  [url get-params loading-cursor rows-cursor count-cursor]
  (do
    (u/get-json
      url
      get-params
      (fn [response]
        (do
          (do
            (reset! rows-cursor (:rows response))
            (reset! count-cursor (:count response))
            (reset! loading-cursor false)))))))


(defn add-row
  "Добавить новую строку"
  [url row notify-ch refresh-rows-ch]
  (do
    (u/post-json-with-success-check
      url
      {:row row}
      (fn [_]
        (do
          (am/go (a/>! notify-ch {:text "Строка успешно добавлена"
                                  :type "success"}))
          (am/go (a/>! refresh-rows-ch :reset-all))))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn edit-row
  "Редактирование строки"
  [url id row notify-ch refresh-rows-ch]
  (do
    (u/post-json-with-success-check
      url
      {:row row :id id}
      (fn [_]
        (do
          (am/go (a/>! notify-ch {:text "Строка успешно отредактирована"
                                  :type "success"}))
          (am/go (a/>! refresh-rows-ch :reset-none))))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn delete-row
  "Удаление строки"
  [url id notify-ch refresh-rows-ch]
  (do
    (u/post-json-with-success-check
      url
      {:id id}
      (fn [_]
        (do
          (am/go (a/>! notify-ch {:text "Строка успешно удалена"
                                  :type "success"}))
           (am/go (a/>! refresh-rows-ch :reset-none))))
      (fn [r]
        (do
          (am/go (a/>! notify-ch {:text (u/get-errors-str-from-map (:errors r))
                                  :type "error"})))))))


(defn get-select-list-for
  "Получить по ajax справочники"
  [url]
  (let [s-list (atom nil)]
    (u/get-json url {} (fn [resp]
                         (reset! s-list (:rows resp))))
    s-list))


(defn get-select-list-for-atom
  "Получить по ajax справочник для переданного атома"
  [r-atom url]
  (u/get-json url {} (fn [resp]
                         (reset! r-atom (:rows resp)))))











