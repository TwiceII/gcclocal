(ns gcclocal.model.users
  (:require [gcclocal.db.sqlutils :as sql]
            [honeysql.helpers :as s]))


(defn get-user-by-username-and-password
  [username password]
  (sql/m-select-single
    (->
      (s/select :*)
      (s/from :cljgcc_users)
      (s/where [:and [:= :username username] [:= :password password]]))))


(defn get-user
  [username password]
  (if-let [user (get-user-by-username-and-password username password)]
    (:username user)
    (str "login failure")))
