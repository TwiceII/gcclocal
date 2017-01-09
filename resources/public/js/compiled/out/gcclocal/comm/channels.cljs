(ns gcclocal.comm.channels
  (:require [cljs.core.async :as a]
            [gcclocal.comm.utils :as utils])
  (:require-macros [cljs.core.async.macros :as am]))


(defn init-notify-ch
  "Инициализация канала для сообщений"
  []
  (let [notify-ch (a/chan)]
    (do
      ; прослушивание канала по выводу сообщений на экран
      (am/go (while true
               (let [message-params (a/<! notify-ch)]
                 (utils/notify-message message-params))))
      notify-ch)))


(defn init-refresh-rows-ch
  "Инициализация канала для обновления строк"
  [refresh-fn]
  (let [refresh-rows-ch (a/chan)]
    (do
      ; прослушивание канала по обновлению строк
      (am/go (while true
               (do
                 (let [x (a/<! refresh-rows-ch)]
                   (refresh-fn x)))))
      refresh-rows-ch)))

(defn init-change-page-ch
  "Иниц. канала для смены страницы"
  [change-page-fn]
  (let [change-page-ch (a/chan)]
    (do
      ; прослушивание канала по изменению номера страницы
      (am/go (while true
               (let [page (a/<! change-page-ch)]
                 (change-page-fn page))))
      change-page-ch)))
