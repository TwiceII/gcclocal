(ns gcclocal.base-calcs-test
  (:require [expectations :refer :all]
            [gcclocal.model.base-calcs :refer :all]
            [gcclocal.model.money-calcs :as mc]
            [clj-time.core :as t]
            ;[gcclocal.time-utils :as tu]
            ;[gcclocal.model.money-calcs :refer :all]
            ))


;(expect 346.24 (rate-of-cur-for-date "USD" (tu/now-datetime)))
(expect 3 (+ 1 2))

; если передали пустой список datemoney которым загашают,
; то возвращает пустой список
(expect [] (repay-datemoneys nil nil))



; если передали только одни поставки без оплаты
(expect [(map->datemoney {:c-money (mc/map->c-money {:summ 1000, :c-id 2})
                         :date "2016 8 10"
                         :clientapplication nil})]
        (repay-datemoneys nil
                          [(->datemoney
                             (mc/c-money-w-code 1000 "KZT")
                             "2016 8 10"
                             nil)]))
