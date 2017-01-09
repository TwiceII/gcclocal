;; =========================================================
;; функции для работы с передвижениями денег
;; =========================================================
(ns gcclocal.model.movements
  (:require [gcclocal.db.sqlutils :as sql]
            [gcclocal.db.crud :as crud]))


(defn all-movements
  "Все передвижения"
  []
  (crud/default-get-all-rows :mainapp_moneymovement))
