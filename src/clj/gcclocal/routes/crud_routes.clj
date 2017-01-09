(ns gcclocal.routes.crud-routes
  (:require [gcclocal.utils :refer :all]
            [gcclocal.routes.route-utils :as r-utils]
            [gcclocal.time-utils :as t]
            [gcclocal.excel-utils :as xl]
            [gcclocal.model.money-calcs :as mon-c]
            [gcclocal.db.crud :as crudmodel]
            [clojure.java.io :as io]
            [compojure.core :refer [ANY GET PUT POST DELETE defroutes context routes]]
            [ring.util.response :refer [resource-response response charset
                                        redirect content-type]]
            [ring.util.codec :refer [url-encode]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.util.io :refer [piped-input-stream]]))


(defn get-basic-crud-index-page
  "Получить базовую страницу с crud таблицей"
  [req title crudnamespace]
  (r-utils/render-with-base-keys req
                                 "public/templates/crud_basic.html"
                                 {:title title :crudnamespace crudnamespace}))

(defn get-rows-with-paging
  "Получить строки с пейджингом, сортировкой, поиском"
  [{{:keys [page pagesize ordering search]} :params}
   get-rows-fn
   get-count-fn]
  ;(Thread/sleep 2000)
  (let [page-number (read-string page)
        pagesize-number (read-string pagesize)
        rows (get-rows-fn {:pagesize (or pagesize-number r-utils/PAGE-SIZE)
                           :pagenumber page-number
                           :order-by ordering
                           :search-text search})
        count-rows (:count (get-count-fn search))]
      (response {:rows rows :count count-rows})))


(defn get-rows-all
  "Получить все строки"
  [request get-all-rows-fn]
  (let [rows (get-all-rows-fn)
        count-rows (count rows)]
    (response {:rows rows
             :count count-rows})))


(defn get-row-with-id [jsonparams]
  (assoc (:row jsonparams) :id (:id jsonparams)))


(defn validate-convert-and-save-to-db
  "Сделать валидацию строки, конвертацию
  и выполнить запрос (добавление/редактирование) в бд

  row - строка, полученная с request
  validate-fn - ф-ция для валидации (если есть)
  convert-fn (необяз.) - ф-ция для конвертации (из строк в числа и т.д)
  db-fn - ф-ция для добавления/редактирования строки в бд
  "
  [row
   validate-fn
   convert-fn
   db-fn]
  (r-utils/check-for-errors-and-return-response
    (if validate-fn (validate-fn row) {})
    #(db-fn (if (nil? convert-fn)
                 row
                 (convert-fn row)))))


(defn post-row-add
  "Добавление новой строки"
  [{{row :row} :body}
   validation-fn
   convert-fn
   add-fn ; либо add-fn должен быть указан либо table-key
   table-key ; optional
   ]
  (validate-convert-and-save-to-db
    row
    validation-fn
    convert-fn
    ; если не указана функция для добавления, используем стандартную
    (or add-fn #(crudmodel/default-add-row table-key %))))


(defn post-row-edit
  "Редактирование строки"
  [{{id :id row :row :as jsonparams} :body}
   validation-fn
   convert-fn
   edit-fn ; либо edit-fn должен быть указан либо table-key
   table-key ; optional
   ]
  (validate-convert-and-save-to-db
    (get-row-with-id jsonparams)
    validation-fn
    convert-fn
    ; если не указана функция для редактирования, используем стандартную
    (or edit-fn #(crudmodel/default-edit-row table-key id %))))


(defn post-row-delete
  "Удаление строки"
  [{{id :id} :body}
   validation-fn
   delete-fn ; либо delete-fn указан либо table-key
   table-key ; optional
   ]
   (r-utils/check-for-errors-and-return-response
     validation-fn ;нет проверки на удаление
     (or delete-fn #(crudmodel/default-archivate-row table-key id))))


(defn params->params-for-excel
  "Получить из параметров request-а параметры для excel
  (игнорирование пейджинга и т.д.)"
  [{{:keys [page pagesize ordering search] :as params} :params}]
  {:order-by ordering
   :search-text search})


(defn excel-with-params
  "Базовая ф-ция получения excel-файла из crud-таблицы"
  [get-rows-fn file-prefix headers
   params-for-excel]
;;   (println ">>>>>>>>>>>>>")
;;   (println "excel-with-params")
;;   (println get-rows-fn)
;;   (println file-prefix)
;;   (println headers)
;;   (println params)
;;   (println "<<<<<<<<<<<<<")
  (let [file-name (str file-prefix "-" (t/current-date-str) ".xlsx")
        ;; не учитываем пейджинг, получаем все строки
        rows (get-rows-fn params-for-excel)]
    (println "file-name: " file-name)
    (-> (response (piped-input-stream (fn [out-stream]
                                        (xl/create-from-rows-into-stream
                                          out-stream
                                          rows
                                          headers)
                                          )))
        (assoc :headers {"Content-Type"
                         ;; holy shit this content-type is looooong
                         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                         "Content-Disposition"
                         (str "attachment; filename=" (url-encode file-name))})
        (charset "UTF-8")
        )))


;;; ===============================================================
(defn get-basic-crud-routes
  "Получить руты для базового CRUD (без страниц и т.д.)"
  [{:keys [route-name
           get-all-rows-fn
           validate-add-fn
           convert-add-fn
           add-fn
           validate-edit-fn
           convert-edit-fn
           edit-fn
           validate-delete-fn
           delete-fn
           table-key] :as p}]
  (let [get-all-rows-r (GET (str "/" route-name "/all") []
                            (r-utils/wrap-custom-json
                              #(get-rows-all % get-all-rows-fn)))
        ; рут для добавления строки
        post-add-r (POST (str "/" route-name "/add") []
                         (r-utils/wrap-custom-json
                           #(post-row-add %
                                          validate-add-fn
                                          convert-add-fn
                                          add-fn
                                          table-key)))

        ; рут для редактирования строки
        post-edit-r (POST (str "/" route-name "/edit") []
                          (r-utils/wrap-custom-json
                            #(post-row-edit %
                                        validate-edit-fn
                                        convert-edit-fn
                                        edit-fn
                                        table-key)))

        ; рут для удаления строки
        post-delete-r (POST (str "/" route-name "/delete") []
                            (r-utils/wrap-custom-json
                              #(post-row-delete %
                                                validate-delete-fn
                                                delete-fn
                                                table-key)))
        ; основные руты: CRUD
        all-routes [get-all-rows-r post-add-r post-edit-r post-delete-r]]
    (apply routes all-routes)))





(defn get-routes-for-crud
  "Получить руты для CRUD сущности с пейджингом и основной страницей"
  [{:keys [route-name
           title
           crudnamespace
           custom-get-rows-with-paging-fn
           get-rows-fn
           get-count-fn
           get-all-rows-fn
           add-disabled? ; запрет на добавление
           validate-add-fn ; валидация строки перед добавлением
           convert-add-fn ; конвертирование строки перед добавлением
           add-fn
           edit-disabled? ; запрет на редактирование
           validate-edit-fn ; валидация строки перед редактированием
           convert-edit-fn ; конвертирование строки перед редактированием
           edit-fn
           delete-disabled? ; запрет на удаление
           load-to-excel-disabled? ; запрет на экспорт в Excel
           excel-columns
           validate-delete-fn
           delete-fn
           table-key
           ] :as p}]
  (let [get-index-r (GET (str "/" route-name) []
                         #(get-basic-crud-index-page % title crudnamespace))

        ;; рут для пейджинга с параметрами
        get-paging-r (GET (str "/" route-name "/paging") []
                          (r-utils/wrap-custom-json
                            #(if custom-get-rows-with-paging-fn
                               (do
                                 (custom-get-rows-with-paging-fn %))
                               (do
                                 (get-rows-with-paging % get-rows-fn get-count-fn)))))

        ;; рут для экспорта в Excel
        get-excel-r (if load-to-excel-disabled?
                      nil
                      (GET (str "/" route-name "/excel") req
                           (excel-with-params #(-> %
                                                   get-rows-fn
                                                   mon-c/in-hm-c-money->cmoney)
                                              title
                                              excel-columns
                                              (params->params-for-excel req))))

        ;; рут для добавления строки
        post-add-r (if add-disabled?
                     nil
                     (POST (str "/" route-name "/add") []
                         (r-utils/wrap-custom-json
                           #(post-row-add %
                                          validate-add-fn
                                          convert-add-fn
                                          add-fn
                                          table-key))))

        ; рут для редактирования строки
        post-edit-r (if edit-disabled?
                     nil
                     (POST (str "/" route-name "/edit") []
                          (r-utils/wrap-custom-json
                            #(post-row-edit %
                                        validate-edit-fn
                                        convert-edit-fn
                                        edit-fn
                                        table-key))))

        ; рут для удаления строки
        post-delete-r (if delete-disabled?
                       nil
                        (POST (str "/" route-name "/delete") []
                            (r-utils/wrap-custom-json
                              #(post-row-delete %
                                                validate-delete-fn
                                                delete-fn
                                                table-key))))

        ; основные руты: CRUD (если есть доступ)  + основная страница
        all-main-r (-> [get-index-r get-paging-r]
                       (#(if load-to-excel-disabled? % (conj % get-excel-r)))
                       (#(if add-disabled? % (conj % post-add-r)))
                       (#(if edit-disabled? % (conj % post-edit-r)))
                       (#(if delete-disabled? % (conj % post-delete-r))))

        ; добавляем рут для get-all, если указана функция
        result-r (if (not (nil? get-all-rows-fn))
                   (conj all-main-r (GET (str "/" route-name "/all") []
                                         (r-utils/wrap-custom-json
                                           #(get-rows-all % get-all-rows-fn))))
                   all-main-r)]
    (apply routes result-r)))
