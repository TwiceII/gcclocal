(ns gcclocal.settings
  (:require [clj-time.core :as t]
            [clj-time.local :as tl]))

; включен ли режим разработки
; от этого зависит, какой код будет в html страницах
; и прочее
(def dev-mode false)


; бизнес-константы
(def business-consts
  {:tonns-in-wagon 69 ; кол-во тонн в одном вагоне
   :shipping-time 3 ; кол-во дней для разгрузки вагона
   :days-to-prepay 45 ; кол-во дней в течении которых актуальна предоплата,
   :dep-status-on-add 2 ; статус при добавлении поставки "в пути"
   })


(defn main-date-to-check
  []
  "Получить дату (со временем 00:00:00),
  относительно которой проверяется просрочка и т.д"
  (let [now-d (t/now)]
    (tl/to-local-date-time
      (t/date-time (t/year now-d) (t/month now-d) (t/day now-d)))))
