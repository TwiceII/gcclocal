(ns gcclocal.comm.pagination
  (:require [rum.core :as rum]
            [goog.string :as gstring]
            [goog.string.format]
            [cljs.core.async :as a])
  (:require-macros [cljs.core.async.macros :as am]))


(defn get-pages-count
  "Получить общее количество страниц"
  [total-c pagesize]
  (let [pagecount (Math/floor (/ total-c pagesize))]
    (if (> (rem total-c pagesize) 0)
      (inc pagecount)
      pagecount)))


(defn sortpages [allpages]
  "Сортировка мэпа страниц по ключу"
  (into (sorted-map) allpages))


(defn get-pages
  "Получить мэп всех страниц исходя из
  общего количества, размера страницы и текущей страницы"
  [total-c pagesize currentpage]
  (let [
        ; функция получения мэпа для страниц
        get-page-map (fn [pagename pageval]{:linkname pagename
                                          :is-active (= pageval currentpage)})
        ; общее число страниц
        pagecount (get-pages-count total-c pagesize)
        ; мин. и макс. видные соседние значения отн-но текущей
        min-p (- currentpage 2)
        max-p (+ currentpage 2)
        ; добавить стр. "..." предыдущую, если надо
        add-prev-if-needed (fn [all-p]
                             (if (> min-p 2)
                               (assoc all-p (dec min-p) (get-page-map "..." (dec min-p)))
                               all-p))
        ; добавить стр. "..." следующую, если надо
        add-next-if-needed (fn [all-p]
                             (if (< max-p (dec pagecount))
                               (assoc all-p (inc max-p) (get-page-map "..." (inc max-p)))
                             all-p))
        ; добавить все соседние страницы отн-но текущей
        add-in-range (fn [all-p]
                       (reduce (fn[all-p-map, pagenum]
                            (assoc all-p-map pagenum (get-page-map (str pagenum) pagenum)))
                          all-p
                          (range
                            (if (> min-p 1) min-p 1)
                            (if (< max-p pagecount) (inc max-p) (inc pagecount)))))
        ; добавляем посл.элемент (если не всего одна страница)
        add-last (fn [all-p]
                   (if (> pagecount 1)
                     (assoc all-p pagecount (get-page-map (str pagecount) pagecount))
                     all-p))
        ; начальный список (только первый элемент)
        all-pages {1 (get-page-map "1" 1)}]
    ; из начального списка получаем целый
    (-> all-pages
        (add-last)
        (add-in-range)
        (add-prev-if-needed)
        (add-next-if-needed)
        (sortpages)
        )))


(defn change-page [pageval click-ch]
  (do
    (am/go (a/>! click-ch pageval))))


(rum/defc page-view [pagename pageval is-active click-ch]
  [:a {:class (str "item pageBtn " (if is-active "active" ""))
       :on-click #(change-page pageval click-ch)}
   pagename])


(rum/defc pagination-view
  "Основная вьюшка пейджинга"
  [{:keys [pagesize currentpage]} total-c click-ch]
  (let [from-c (if (> total-c 0)
                 (+ (* pagesize (- currentpage 1)) 1)
                 0)
        to-c (if (> total-c (* pagesize currentpage))
               (* pagesize currentpage)
               total-c)
        formatted-str (gstring/format "Всего: %d, показано: %d - %d"
                              total-c from-c to-c)]
    [:div {:class "ui clearing basic segment" :style {:margin-top 0}}
     ; заголовок "Всего: показано"
     [:h4 {:class "ui left floated header"} formatted-str]
     [:div {:class "ui small pagination right floated menu"}

      ; стрелка влево
      [:a {:class (str "icon item prevBtn " (if (<= currentpage 1) "disabled" ""))
           :on-click #(when (> currentpage 1)
                        (change-page (dec currentpage) click-ch))}
       [:i {:class "left arrow icon"}]]

      ; сами страницы
      (for [[k v] (get-pages total-c pagesize currentpage)]
        (page-view (:linkname v) k (:is-active v) click-ch))

      ; стрелка вправо
      (let [pagecount (get-pages-count total-c pagesize)]
        [:a {:class (str "icon item nextBtn " (if (>= currentpage pagecount) "disabled" ""))
             :on-click #(when (< currentpage pagecount)
                          (change-page (inc currentpage) click-ch))}
         [:i {:class "right arrow icon"}]])]]))

