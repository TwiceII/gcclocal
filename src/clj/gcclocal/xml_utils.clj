;;;; =========================================================
;;;; Функции для работы с xml
;;;; =========================================================
(ns gcclocal.xml-utils
  (:require [clojure.data.xml :as xml]
            [clojure.zip :as zip]
            [clojure.java.io :as io]
            [clojure.data.zip.xml :as zip-xml]))


(defn hiccup->xml-element
  [hiccup-vector]
  (xml/sexp-as-element hiccup-vector))


(defn hiccup->xml-str
  "Преобразовать hiccup в xml строку"
  [hiccup-vector]
  (xml/emit-str (hiccup->xml-element hiccup-vector)))



(defn parse-string [string]
  (xml/parse-str string))


(defn pre-process-node
  "Заменить :xsi/type на xsi:type внутри нода
  (для норм.проглатывания by emit-str)"
  [xml-node]
  (clojure.walk/postwalk #(if (= % :xsi/type) :xsi:type %)
                         xml-node))


(defn zipper->xml-in-str
  "Получить zipper в xml строке (для логирования и прочего)
  без верхней <?xml version..> и т.д"
  [xml-zipper]
  (-> xml-zipper
      zip/node
      pre-process-node
      xml/emit-str
      (clojure.string/replace "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" "")))
  ;(xml/emit-str (pre-process-node (zip/node xml-zipper))))


(defn zipper->value
  "Получить значение поля из zipper"
  [xml-zipper & fields]
  (->> fields
       (apply zip-xml/xml1-> xml-zipper)
       (#(when % (zip-xml/text %)))
       (#(if (clojure.string/blank? %) nil %))))


(defn zipper->inners
  "Получить зипперы для внутренних подтэгов"
  [xml-zipper & inner-tags]
  (apply zip-xml/xml-> xml-zipper inner-tags))


(defn str->zipper
  "Перевести xml строку в зиппер"
  [xml-str]
  (-> xml-str
    java.io.StringReader.
    xml/parse
    zip/xml-zip
    (#(zipper->inners % (get (first %) :tag)))
    first))


;;; работа с потоками

(defn with-open-stream-to-xml
  "Считать с потока байтов в xml в зиппер-виде
  и отправляет в обрабатывающую функцию

  input-bytes - поток байтов
  process-fn - функция для обработки xml в зиппер-виде"
  [input-bytes process-fn]
  (with-open [stream (io/input-stream input-bytes)]
    (-> stream
        xml/parse
        zip/xml-zip
        process-fn)))


(defn with-open-xml-file
  "Считать файл xml из dev-resources"
  [filename process-fn]
  (-> filename
      io/resource
      io/file
      (with-open-stream-to-xml process-fn)))

;; (with-open-xml-file
;;   "primer.xml" (fn [_] (println "Hey there")))


;; (hiccup->xml-str [:result {}
;;                   [:status {} "success"]])

;; (hiccup->xml-str [:result {}
;;                   [:status {} "failure"]
;;                   [:error {} "errrrr"]])

;; (let [testdata (dev-resources-file->xml-zip "testpackage.xml")]
;;   (zipper->value testdata :package :packageNumber))








