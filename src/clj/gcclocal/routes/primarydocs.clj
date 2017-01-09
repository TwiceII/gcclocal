(ns gcclocal.routes.primarydocs
  (:require [gcclocal.utils :refer :all]
            [gcclocal.db.crud :as crud]
            [gcclocal.validation-utils :as v]
            [gcclocal.routes.route-utils :as r-utils]
            [gcclocal.routes.crud-routes :as crud-r]
            [gcclocal.model.primarydocs :as m]
            [gcclocal.model.money-calcs :as mon-c]
            [gcclocal.settings :as sett]
            [clj-time.core :as ctime]
            [ring.util.response :refer [resource-response response
                                        redirect content-type]]))



;; (defn validate-clientcontract
;;   [row]
;;   (-> {}
;;       (v/check-is-required row :name "Введите наименование")
;;       (v/check-is-int-required row :client_id
;;                                "Выберите клиента" "Неправильно указан id клиента")
;;       (v/check-is-int-required row :good_id
;;                                "Выберите товар" "Неправильно указан id товара")
;;       (v/check-is-int-required row :prepay_time
;;                                "Введите срок предоплаты" "Неправильно введен срок предоплаты")
;;       (v/check-is-int-required row :prepay_percentage
;;                                "Введите процент предоплаты" "Неправильно введен процент предоплаты")
;;       (v/check-is-int-required row :pay_time
;;                                "Введите срок оплаты" "Неправильно введен срок оплаты")
;;       (v/check-is-int-required row :pay_percentage
;;                                "Введите процент оплаты" "Неправильно введен процент оплаты")

;;       (v/check-is-date row :from_date_active "Неправильно введен ср.действия с")
;;       (v/check-is-date row :to_date_active "Неправильно введен ср.действия по")
;;       ))


(defn ftype->validation-func
  [ftype required?]
  (case ftype
    :int (if required? v/check-is-int-required v/check-is-int)
    :date (if required? v/check-is-date-required v/check-is-date)
    :string (when required? v/check-is-required)
    nil))


(defn ftype->conv-func
  [ftype]
  (case ftype
    :int to-int
    :date to-date
    :double to-double
    nil))


(defn validate-w-fields
  [row fields-hm]
  (reduce-kv (fn [errors fkey fparams]
               (if (and (:required fparams)
                        (not= :string (:type fparams)))
                 ((ftype->validation-func (:type fparams)
                                          (:required fparams))
                  errors row fkey (str "Не указано поле: " (:name fparams))
                  (str "Неправильно указано поле: " (:name fparams)))
                 ((ftype->validation-func (:type fparams)
                                          (:required fparams))
                  errors row fkey
                  (if (= :string (:type fparams))
                    (str "Не заполнено поле: " (:name fparams))
                    (str "Неправильно указано поле: " (:name fparams))))))
             {} fields-hm))


(defn convert-w-fields
  [row fields-hm]
  (reduce-kv (fn [c-row fkey fparams]
               (let [conv-fn (ftype->conv-func (:type fparams))]
                 (if conv-fn
                   (assoc c-row fkey (conv-fn (get c-row fkey)))
                   c-row)))
             row fields-hm))



(def clientcontracts-fields
  {:name                     {:name "наименование"
                              :type :string
                              :required true}
   :client_id                {:name "клиент"
                              :type :int
                              :required true}
   :good_id                  {:name "товар"
                              :type :int
                              :required true}
   :prepay-time              {:name "срок предоплаты"
                              :type :int
                              :required true}
   :prepay-percentage        {:name "процент предоплаты"
                              :type :int
                              :required true}
   :pay-time                 {:name "срок оплаты"
                              :type :int
                              :required true}
   :pay-percentage           {:name "процент оплаты"
                              :type :int
                              :required true}
   :from_date_active         {:name "ср.действия с"
                              :type :date}
   :to_date_active           {:name "ср.действия по"
                              :type :date}})

;; (validate-w-fields {:good_id 234} clientcontracts-fields)

;; (convert-w-fields {:good_id "3423" :from_date_active "12.06.2016"} clientcontracts-fields)

(defn validate-clientcontract
  [row]
  (v/validate-row row
                  (v/check-is-required :name "Введите наименование")
                  (v/check-is-int-required :client_id
                                           "Выберите клиента" "Неправильно указан id клиента")
                  (v/check-is-int-required :good_id
                                           "Выберите товар" "Неправильно указан id товара")
                  (v/check-is-int-required :prepay_time
                                           "Введите срок предоплаты" "Неправильно введен срок предоплаты")
                  (v/check-is-int-required :prepay_percentage
                                           "Введите процент предоплаты" "Неправильно введен процент предоплаты")
                  (v/check-is-int-required :pay_time
                                           "Введите срок оплаты" "Неправильно введен срок оплаты")
                  (v/check-is-int-required :pay_percentage
                                           "Введите процент оплаты" "Неправильно введен процент оплаты")
                  (v/check-is-date :from_date_active "Неправильно введен ср.действия с")
                  (v/check-is-date :to_date_active "Неправильно введен ср.действия по")))


(defn convert-clientcontract-add
  [row]
  (-> row
      (in-hm->ints [:client_id :good_id
                   :prepay_time :prepay_percentage :pay_time :pay_percentage])
      (in-hm->dates [:from_date_active :to_date_active])
      (crud/default-convert-on-add)))


(defn convert-clientcontract-edit
  [row]
  (-> row
      (in-hm->ints [:client_id :good_id
                   :prepay_time :prepay_percentage :pay_time :pay_percentage])
      (in-hm->dates [:from_date_active :to_date_active])
      (crud/default-convert-on-edit)))


(defn validate-clientapplication
  [row]
  (-> {}
      (v/check-is-date-required row :application_date
                                "Введите дату заявки" "Неправильно введена дата заявки")
      (v/check-is-required row :name "Введите наименование")
      (v/check-is-int-required row :client_id
                               "Выберите клиента" "Неправильно указан id клиента")
      (v/check-is-int-required row :client_contract_id
                               "Выберите договор" "Неправильно указан id договора")
      (v/check-is-int-required row :amount
                               "Введите количество" "Неправильно введено количество")
      (v/check-is-float-required row :summ
                               "Введите сумму" "Неправильно введена сумма")
      ))


(defn convert-clientapplication-add
  [row]
  (-> row
      (in-hm->ints [:client_id :client_contract_id :amount :c_id])
      (in-hm->dates [:application_date])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-add)
      (in-hm->float-zeros [:kt_rev :saldo])))

(defn convert-clientapplication-edit
  [row]
  (-> row
      (in-hm->ints [:client_id :client_contract_id :amount :c_id])
      (in-hm->dates [:application_date])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-edit)))


(defn validate-departure
  [row]
  (-> {}
      (v/check-is-int-required row :client_id
                               "Выберите клиента" "Неправильно указан id клиента")
      (v/check-is-required row :doc_name "Введите документ")
      (v/check-is-float-required row :summ
                               "Введите сумму" "Неправильно введена сумма")
      (v/check-is-int-required row :client_contract_id
                               "Выберите договор" "Неправильно указан id договора")
      (v/check-is-int row :client_application_id "Неправильно указан id заявки")
      (v/check-is-date-required row :doc_date
                                "Введите дату документа" "Неправильно введена дата документа")
      ))

(defn convert-departure-add
  [row]
  (-> row
      (in-hm->ints [:client_id :client_contract_id :client_application_id :c_id])
      (in-hm->dates [:doc_date])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-add)))

(defn convert-departure-edit
  [row]
  (-> row
      (in-hm->ints [:client_id :client_contract_id :client_application_id :c_id])
      (in-hm->dates [:doc_date])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-edit)))

(defn validate-factclientpayment
  [row]
  (-> {}
      (v/check-is-int-required row :client_id
                               "Выберите клиента" "Неправильно указан id клиента")
      (v/check-is-float-required row :summ
                               "Введите сумму" "Неправильно введена сумма")
      ))

(defn convert-factclientpayment-add
  [row]
  (-> row
      (in-hm->ints [:client_id])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-add)))

(defn convert-factclientpayment-edit
  [row]
  (-> row
      (in-hm->ints [:client_id])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-edit)))


(defn validate-clientpayment
  [row]
  (-> {}
      (v/check-is-int-required row :client_id
                               "Выберите клиента" "Неправильно указан id клиента")
      (v/check-is-required row :name "Введите документ")
      (v/check-is-float-required row :summ
                               "Введите сумму" "Неправильно введена сумма")
      (v/check-is-int-required row :client_contract_id
                               "Выберите договор" "Неправильно указан id договора")
      (v/check-is-int row :client_application_id "Неправильно указан id заявки")
      (v/check-is-date-required row :doc_date
                                "Введите дату документа" "Неправильно введена дата документа")
      ))

(defn convert-clientpayment-add
  [row]
  (-> row
      (in-hm->ints [:client_id :client_contract_id :client_application_id :c_id])
      (in-hm->dates [:doc_date])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-add)))

(defn convert-clientpayment-edit
  [row]
  (-> row
      (in-hm->ints [:client_id :client_contract_id :client_application_id :c_id])
      (in-hm->dates [:doc_date])
      (in-hm->doubles [:summ])
      (crud/default-convert-on-edit)))

;;;
;;; Вход.остатки по клиентам и заявкам
;;;
(defn validate-clientinitincome
  [row]
  (-> {}
      (v/check-is-int-required row :client_id
                               "Выберите клиента" "Неправильно указан id клиента")
      (v/check-is-float-required row :summ
                               "Введите сумму" "Неправильно введена сумма")
      (v/check-is-date-required row :doc_date
                                "Введите дату документа" "Неправильно введена дата документа")
      ))

(defn convert-clientinitincome-add
  [row]
  (-> row
      (in-hm->ints [:client_id :client_application_id :c_id])
      (in-hm->doubles [:summ])
      (in-hm->dates [:doc_date])
      (crud/default-convert-on-add)))

(defn convert-clientinitincome-edit
  [row]
  (-> row
      (in-hm->ints [:client_id :client_application_id :c_id])
      (in-hm->doubles [:summ])
      (in-hm->dates [:doc_date])
      (crud/default-convert-on-edit)))


(defn validate-initclientincome-edit
  [row]
  (-> {}
      (v/check-is-int-required row :client_id
                               "Выберите клиента" "Неправильно указан id клиента")
      (v/check-is-float-required row :summ
                               "Введите сумму" "Неправильно введена сумма")
      (v/check-is-date-required row :doc_date
                                "Введите дату документа" "Неправильно введена дата документа")
      ))

(defn convert-initclientincome-edit
  [row]
  (-> row
      (in-hm->ints [:client_id :c_id])
      (in-hm->doubles [:summ])
      (in-hm->dates [:doc_date])
      (crud/default-convert-on-edit)))

(defn convert-initbalanceondate-edit
  [row]
  (-> row
      (in-hm->doubles [:summ])
      (crud/default-convert-on-edit)))


(defn get-dli-rows-with-paging
  "Получить строки с пейджингом, сортировкой, поиском для поставок в пути"
  [{{:keys [page pagesize ordering search showmode]} :params}]
  (let [page-number (read-string page)
        pagesize-number (read-string pagesize)
        rows (m/get-departurelogistinfos-with-params
               {:pagesize (or pagesize-number r-utils/PAGE-SIZE)
                :pagenumber page-number
                :order-by ordering
                :showmode showmode
                :search-text search})
        count-rows (:count (m/get-departurelogistinfos-count showmode search))]
      (response {:rows rows :count count-rows})))


(defn validate-departurelogistinfo
  [row]
  (-> {}
      (v/check-is-date-required row :shipping_date
                                "Выберите дату отгр." "Неправильно введена дата отгр.")
      (v/check-is-date row :arrival_date "Неправильно введена дата прибытия")
      (v/check-is-int-required row :client_application_id
                               "Выберите заявку" "Неправильно указан id заявки")
      (v/check-is-int-required row :supplier_id
                               "Выберите поставщика" "Неправильно указан id поставщика")
      (v/check-is-int-required row :from_station_id
                               "Выберите ст. отправления" "Неправильно указан id станции отправления")
      (v/check-is-int-required row :to_station_id
                               "Выберите ст. назначения" "Неправильно указан id станции назначения")
      (v/check-is-required row :wagon_number "Введите номер вагона")
      (v/check-is-int-required row :travel_time
                               "Введите время в пути" "Неправильно введено время в пути")
      (v/check-is-float-required row :cost
                               "Введите себестоиость" "Неправильно введена себестоимость")
      ))


(defn convert-add-departurelogistinfo
  [row]
  (-> row
      (in-hm->ints [:client_application_id :supplier_id :station_status_id
                   :from_station_id :to_station_id :travel_time])
      (in-hm->doubles [:cost])
      (in-hm->dates [:shipping_date :arrival_date])
      (assoc :creation_datetime (ctime/now)
        :last_edit_datetime (ctime/now)
        :wagon_amount (:tonns-in-wagon sett/business-consts)
        :shipping_time (:shipping-time sett/business-consts)
        :departure_status_id (:dep-status-on-add sett/business-consts)
        :status 1)))


(defn convert-edit-departurelogistinfo
  [row]
  (-> row
      (in-hm->ints [:client_application_id :supplier_id :station_status_id
                   :from_station_id :to_station_id :travel_time])
      (in-hm->doubles [:cost])
      (in-hm->dates [:shipping_date :arrival_date])
      (crud/default-convert-on-edit)))


(defn finish-departurelogistinfo-row
  "Завершить поставку"
  [{{id :id} :body}]
  (do
    (crud/edit-with-service-fields :primarydocs_departurelogistinfo id {:d_status 3
                                                                        :finished_datetime (ctime/now)})
    (response {:success true})))


(defn unfinish-departurelogistinfo-row
  "Отменить завершение поставки"
  [{{id :id} :body}]
  (do
    (crud/edit-with-service-fields :primarydocs_departurelogistinfo id {:d_status 1
                                                                        :finished_datetime nil})
    (response {:success true})))


(defn excel-dli
  [req]
  (let [showmode (get-in req [:params :showmode])]
    (crud-r/excel-with-params #(-> %
                            m/get-departurelogistinfos-with-params
                            mon-c/in-hm-c-money->cmoney)
                              (case showmode
                                "active" "Активные поставки в пути"
                                "finished" "Завершенные поставки в пути"
                                "all" "Все поставки в пути")
                              [{:name "Дата отгр."
                                :field :shipping_date
                                :ftype :date}
                               {:name "Номер вагона"
                                :field :wagon_number
                                :ftype :text}
                               {:name "Cт.отправления"
                                :field :station_from_name
                                :ftype :text}
                               {:name "Cт.назначения"
                                :field :station_to_name
                                :ftype :text}
                               {:name "Статус (тек.станция)"
                                :field :station_status_name
                                :ftype :text}
                               {:name "Дата прибытия"
                                :field :arrival_date
                                :ftype :date}
                               {:name "Время в пути дн. (ожид)"
                                :field :travel_time
                                :ftype :numeric}
                               {:name "Время в пути дн. (факт)"
                                :field (if (not= showmode "finished") :days_fact nil)
                                :ftype :numeric}
                               {:name "Заявка"
                                :field :app_name
                                :ftype :text}
                               {:name "Клиент"
                                :field :client_name
                                :ftype :text}
                               {:name "Поставщик"
                                :field :supplier_name
                                :ftype :text}
                               {:name "Себестоимость"
                                :field :cost
                                :ftype :numeric}]
                              (-> (crud-r/params->params-for-excel req)
                                  (assoc :showmode showmode)))))


;; ================================== для синхронизации с сервисом ===========================
(defn get-all-new-sync-rows
  "Получить все активные новые поставки, ожидающие подтверждения"
  [r]
  (crud-r/get-rows-all r #(m/get-all-new-sync-dlis)))


(defn validate-add-new-sync-dli
  [newdli]
  (-> {}
    (v/check-is-int-required newdli :newdli_id
                             "Не указан id поставки к подтверждению"
                             "Неправильно указан id поставки к подтверждению")
    (v/check-is-required newdli :wagon_number "Не указан номер вагона")
    (v/check-is-int-required newdli :to_station_code
                             "Не указан код станции назн." "Неправильно указан код ст.назн")
    (v/check-is-date-required newdli :shipping_date "Не указана дата отгр."
                              "Неправильно указана дата отгр.")
    (v/check-is-required newdli :from_station_name
                         "Не указано название станции отпр.")
    (v/check-is-int-required newdli :from_station_code
                             "Не указан код станции отпр." "Неправильно указан код ст.отпр")
    (v/check-is-required newdli :to_station_name
                         "Не указано название станции назн.")
    (v/check-is-int-required newdli :to_station_code
                             "Не указан код станции назн." "Неправильно указан код ст.назн")
    (v/check-is-int newdli :current_station_code "Не указан код тек.станции.")

    (v/check-is-int-required newdli :from_station_id
                             "Не указана станция отправления" "Неправильно указана ст.отпр")
    (v/check-is-int-required newdli :to_station_id
                             "Не указана станция назначения" "Неправильно указана ст.назн")
    (v/check-is-int-required newdli :client_application_id
                             "Не указана заявка" "Неправильно указан id заявки")
    (v/check-is-int-required newdli :supplier_id
                             "Не указан поставщик" "Неправильно указан id поставщика")
    (v/check-is-float-required newdli :cost
                             "Не указана себестоимость" "Неправильно указана себестоимость")
    (v/check-is-int-required newdli :wagon_amount
                             "Не указан вес груза" "Неправильно указан вес груза")
    (v/check-is-int-required newdli :travel_time
                             "Не указано время в пути (ожид.)"
                             "Неправильно указано время в пути (ожид.)")))


(defn convert-add-new-sync-dli
  [row]
  (-> row
      (in-hm->ints [:client_application_id :supplier_id
                    :from_station_id :to_station_id :travel_time
                    :wagon_amount
                    :newdli_id
                    :from_station_code :to_station_code :current_station_code])
      (in-hm->doubles [:cost])
      (in-hm->dates [:shipping_date])
      (assoc :creation_datetime (ctime/now)
        :last_edit_datetime (ctime/now)
        :shipping_time (:shipping-time sett/business-consts)
        :departure_status_id (:dep-status-on-add sett/business-consts)
        :status 1)
      ))


(defn add-new-sync-dli
  "Подтвердить создание новой поставки, ожидающей подтверждения"
  [{{row :row} :body}]
  (crud-r/validate-convert-and-save-to-db
    row
    validate-add-new-sync-dli
    convert-add-new-sync-dli
    ; если не указана функция для добавления, используем стандартную
    m/add-new-sync-deplogistinfo))


(defn delete-new-sync-dli
  "Отменить подтверждение (удалить) новую поставку"
  [{{id :id} :body}]
  (r-utils/check-for-errors-and-return-response
    (when (nil? id) {:common ["Не указан id удаляемой поставки"]})
    #(m/delete-new-sync-deplogistinfo id)))



;; =============================================================================================

; параметры для CRUD основных документов
(def crud-routes-params
  {:clientcontract     {:route-name "clientcontracts"
                        :title "Договоры"
                        :crudnamespace "gcclocal.primarydocs.clientcontracts"
                        :get-rows-fn #(crud/get-rows-w-params m/clientcontracts-basemap %)
                        :get-count-fn #(crud/get-count-w-params m/clientcontracts-basemap %)
                        :get-all-rows-fn #(crud/default-get-all-rows :primarydocs_clientcontract)
                        :validate-add-fn validate-clientcontract
                        :convert-add-fn convert-clientcontract-add
                        :validate-edit-fn validate-clientcontract
                        :convert-edit-fn convert-clientcontract-edit
                        :excel-columns [{:name "Наименование"
                                         :field :name
                                         :ftype :text}
                                        {:name "Клиент"
                                         :field :client_name
                                         :ftype :text}
                                        {:name "Товар"
                                         :field :good_name
                                         :ftype :text}
                                        {:name "Предоплата %"
                                         :field :prepay_percentage
                                         :ftype :numeric}
                                        {:name "Предоплата дн."
                                         :field :prepay_time
                                         :ftype :numeric}
                                        {:name "Оплата %"
                                         :field :pay_percentage
                                         :ftype :numeric}
                                        {:name "Оплата дн."
                                         :field :pay_time
                                         :ftype :numeric}
                                        {:name "Срок действия с"
                                         :field :from_date_active
                                         :ftype :date}
                                        {:name "Срок действия по"
                                         :field :to_date_active
                                         :ftype :date}]
                        :table-key :primarydocs_clientcontract}

   :clientapplication  {:route-name "clientapplications"
                        :title "Заявки"
                        :crudnamespace "gcclocal.primarydocs.clientapplications"
                        :get-rows-fn #(crud/get-rows-w-params m/clientapplications-basemap %)
                        :get-count-fn #(crud/get-count-w-params m/clientapplications-basemap %)
                        :get-all-rows-fn #(crud/default-get-all-rows :primarydocs_clientapplication)
                        :validate-add-fn validate-clientapplication
                        :convert-add-fn convert-clientapplication-add
                        :validate-edit-fn validate-clientapplication
                        :convert-edit-fn convert-clientapplication-edit
                        :excel-columns [{:name "Дата заявки"
                                         :field :application_date
                                         :ftype :date}
                                        {:name "Номер заявки"
                                         :field :name
                                         :ftype :text}
                                        {:name "Клиент"
                                         :field :client_name
                                         :ftype :text}
                                        {:name "Договор"
                                         :field :contract_name
                                         :ftype :text}
                                        {:name "Количество"
                                         :field :amount
                                         :ftype :numeric}
                                        {:name "Сумма"
                                         :field [:cmoney :summ]
                                         :ftype :numeric}
                                        {:name "Валюта"
                                         :field [:cmoney :currency]
                                         :ftype :text}
                                        {:name "Дата добавления"
                                         :field :creation_datetime
                                         :ftype :datetime}]
                        :table-key :primarydocs_clientapplication}

   :departure          {:route-name "departures"
                        :title "Поставки"
                        :crudnamespace "gcclocal.primarydocs.departures"
                        :get-rows-fn #(crud/get-rows-w-params m/departures-basemap %)
                        :get-count-fn #(crud/get-count-w-params m/departures-basemap %)
                        :validate-add-fn validate-departure
                        :convert-add-fn convert-departure-add
                        :validate-edit-fn validate-departure
                        :convert-edit-fn convert-departure-edit
                        :excel-columns [{:name "Документ"
                                         :field :doc_name
                                         :ftype :text}
                                        {:name "Дата документа"
                                         :field :doc_date
                                         :ftype :date}
                                        {:name "Клиент"
                                         :field :client_name
                                         :ftype :text}
                                        {:name "Договор"
                                         :field :contract_name
                                         :ftype :text}
                                        {:name "Заявка"
                                         :field :app_name
                                         :ftype :text}
                                        {:name "Сумма"
                                         :field [:cmoney :summ]
                                         :ftype :numeric}
                                        {:name "Валюта"
                                         :field [:cmoney :currency]
                                         :ftype :text}
                                        {:name "Дата план. опл"
                                         :field :planned_payment_date
                                         :ftype :date}
                                        {:name "Дата добавления"
                                         :field :creation_datetime
                                         :ftype :datetime}]
                        :table-key :primarydocs_departure}

  :departurelogistinfo {:route-name "departurelogistinfos"
                        :title "В пути"
                        :custom-get-rows-with-paging-fn get-dli-rows-with-paging
                        :crudnamespace "gcclocal.primarydocs.departurelogistinfos"
                        :validate-add-fn validate-departurelogistinfo
                        :convert-add-fn convert-add-departurelogistinfo
                        :validate-edit-fn validate-departurelogistinfo
                        :convert-edit-fn convert-edit-departurelogistinfo
                        ;; на самом деле не отключен, просто кастомный
                        ;; см. (excel-dli)
                        :load-to-excel-disabled? true
                        ;:add-fn #(println "add-departurelogistinfo" %)
                        :table-key :primarydocs_departurelogistinfo}

   :clientpayments     {:route-name "clientpayments"
                        :title "Оплаты клиентов"
                        :crudnamespace "gcclocal.primarydocs.clientpayments"
                        :get-rows-fn #(crud/get-rows-w-params m/clientpayments-basemap %)
                        :get-count-fn #(crud/get-count-w-params m/clientpayments-basemap %)
                        :validate-add-fn validate-clientpayment
                        :convert-add-fn convert-clientpayment-add
                        :validate-edit-fn validate-clientpayment
                        :convert-edit-fn convert-clientpayment-edit
                        :excel-columns [{:name "Дата документа"
                                         :field :doc_date
                                         :ftype :date}
                                        {:name "Документ"
                                         :field :name
                                         :ftype :text}
                                        {:name "Клиент"
                                         :field :client_name
                                         :ftype :text}
                                        {:name "Договор"
                                         :field :contract_name
                                         :ftype :text}
                                        {:name "Заявка"
                                         :field :app_name
                                         :ftype :text}
                                        {:name "Сумма"
                                         :field [:cmoney :summ]
                                         :ftype :numeric}
                                        {:name "Валюта"
                                         :field [:cmoney :currency]
                                         :ftype :text}
                                        {:name "Дата добавления"
                                         :field :creation_datetime
                                         :ftype :datetime}]
                        :table-key :clientpayments}

   :clientfines        {:route-name "clientfines"
                        :title "Штрафы по клиентам"
                        :crudnamespace "gcclocal.primarydocs.clientfines"
                        :get-rows-fn #(crud/get-rows-w-params m/clientfines-basemap %)
                        :get-count-fn #(crud/get-count-w-params m/clientfines-basemap %)
                        :add-disabled? true
                        :edit-disabled? true
                        :delete-disabled? true
                        :excel-columns [{:name "Дата документа"
                                         :field :doc_date
                                         :ftype :date}
                                        {:name "Документ"
                                         :field :doc_name
                                         :ftype :text}
                                        {:name "Клиент"
                                         :field :client_name
                                         :ftype :text}
                                        {:name "Договор"
                                         :field :contract_name
                                         :ftype :text}
                                        {:name "Заявка"
                                         :field :app_name
                                         :ftype :text}
                                        {:name "Сумма"
                                         :field [:cmoney :summ]
                                         :ftype :numeric}
                                        {:name "Валюта"
                                         :field [:cmoney :currency]
                                         :ftype :text}
                                        {:name "Дата добавления"
                                         :field :creation_datetime
                                         :ftype :datetime}]
                        :table-key :clientfines}

;;    :factclientpayment  {:route-name "factclientpayments"
;;                         :title "Фактические суммы оплат клиентов"
;;                         :crudnamespace "gcclocal.primarydocs.factclientpayments"
;;                         :get-rows-fn m/get-factclientpayments-with-params
;;                         :get-count-fn m/get-factclientpayments-count
;;                         :validate-add-fn validate-factclientpayment
;;                         :convert-add-fn convert-factclientpayment-add
;;                         :validate-edit-fn validate-factclientpayment
;;                         :convert-edit-fn convert-factclientpayment-edit
;;                         :table-key :primarydocs_factclientpayment}
   :clientinitincomes  {:route-name "clientinitincomes"
                        :title "Входящие остатки по клиентам и заявкам"
                        :crudnamespace "gcclocal.primarydocs.clientinitincomes"
                        :get-rows-fn #(crud/get-rows-w-params m/clientinitincomes-basemap %)
                        :get-count-fn #(crud/get-count-w-params m/clientinitincomes-basemap %)
                        :get-all-rows-fn #(crud/default-get-all-rows :clientinitincomes)
                        :validate-add-fn validate-clientinitincome
                        :convert-add-fn convert-clientinitincome-add
                        :validate-edit-fn validate-clientinitincome
                        :convert-edit-fn convert-clientinitincome-edit
                        :excel-columns [{:name "Клиент"
                                         :field :client_name
                                         :ftype :text}
                                        {:name "Заявка"
                                         :field :app_name
                                         :ftype :text}
                                        {:name "Сумма"
                                         :field [:cmoney :summ]
                                         :ftype :numeric}
                                        {:name "Валюта"
                                         :field [:cmoney :currency]
                                         :ftype :text}
                                        {:name "Дата документа"
                                         :field :doc_date
                                         :ftype :date}
                                        {:name "Дата посл. редактирования"
                                         :field :last_edit_datetime
                                         :ftype :datetime}]
                        :table-key :clientinitincomes}

   :initclientincome   {:route-name "initclientincomes"
                        :title "Входящие остатки по клиентам"
                        :crudnamespace "gcclocal.primarydocs.initclientincomes"
                        :get-rows-fn #(crud/get-rows-w-params m/initclientincomes-basemap %)
                        :get-count-fn #(crud/get-count-w-params m/initclientincomes-basemap %)
                        :add-disabled? true ; нельзя добавлять новые строки
                        :validate-edit-fn validate-initclientincome-edit
                        :convert-edit-fn convert-initclientincome-edit
                        :excel-columns [{:name "Клиент"
                                         :field :client_name
                                         :ftype :text}
                                        {:name "Сумма"
                                         :field [:cmoney :summ]
                                         :ftype :numeric}
                                        {:name "Валюта"
                                         :field [:cmoney :currency]
                                         :ftype :text}
                                        {:name "Дата документа"
                                         :field :doc_date
                                         :ftype :date}
                                        {:name "Дата посл. редактирования"
                                         :field :last_edit_datetime
                                         :ftype :datetime}]
                        :table-key :primarydocs_initclientincomes}

   :initbalanceondate {:route-name "initbalanceondate"
                       :title "Текущий остаток на начало"
                       :crudnamespace "gcclocal.primarydocs.initbalanceondate"
                       :get-rows-fn m/get-initbalanceondate
                       :get-count-fn (fn [_] {:count 1}) ; всегда только одна строка
                       :add-disabled? true ; нельзя добавлять
                       :validate-edit-fn #(v/check-is-float-required
                                            {} % :summ
                                            "Введите сумму" "Неправильно введена сумма")
                       :convert-edit-fn convert-initbalanceondate-edit
                       :delete-disabled? true ; нельзя удалять
                       :load-to-excel-disabled? true ; не выгружается в excel
                       :table-key :primarydocs_initbalanceondate}
   })















