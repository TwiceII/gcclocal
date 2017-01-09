// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.comm.utils');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('gcclocal.comm.dom_utils');
gcclocal.comm.utils.nil_or_empty_QMARK_ = (function gcclocal$comm$utils$nil_or_empty_QMARK_(x){
return ((x == null)) || (cljs.core.empty_QMARK_(x));
});
/**
 * true if coll contains elm
 */
gcclocal.comm.utils.in_QMARK_ = (function gcclocal$comm$utils$in_QMARK_(coll,elm){
return cljs.core.some((function (p1__47259_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__47259_SHARP_);
}),coll);
});
/**
 * Найти в векторе/списке элемент,
 *   который удовлетв. условию
 */
gcclocal.comm.utils.find_some = (function gcclocal$comm$utils$find_some(pred_fn,l){
return cljs.core.some((function (p1__47260_SHARP_){
if(cljs.core.truth_((pred_fn.cljs$core$IFn$_invoke$arity$1 ? pred_fn.cljs$core$IFn$_invoke$arity$1(p1__47260_SHARP_) : pred_fn.call(null,p1__47260_SHARP_)))){
return p1__47260_SHARP_;
} else {
return null;
}
}),l);
});
gcclocal.comm.utils.iso_str__GT_moment = (function gcclocal$comm$utils$iso_str__GT_moment(iso_str){
return (new moment(iso_str));
});
gcclocal.comm.utils.to_print_datetime = (function gcclocal$comm$utils$to_print_datetime(iso_str){
return moment.utc(iso_str).format("DD.MM.YYYY HH:mm:ss");
});
gcclocal.comm.utils.to_print_date = (function gcclocal$comm$utils$to_print_date(iso_str){

if(!(clojure.string.blank_QMARK_(iso_str))){
return gcclocal.comm.utils.iso_str__GT_moment(iso_str).format("DD.MM.YYYY");
} else {
return null;
}
});
gcclocal.comm.utils.ddmmyyyy__GT_iso_date_str = (function gcclocal$comm$utils$ddmmyyyy__GT_iso_date_str(ddmmyyyy_str){
return moment(ddmmyyyy_str,"DD.MM.YYYY",true).format("YYYY.MM.DD");
});
gcclocal.comm.utils.ddmmyyyy__GT_real_iso_date_str = (function gcclocal$comm$utils$ddmmyyyy__GT_real_iso_date_str(ddmmyyyy_str){

if(!(clojure.string.blank_QMARK_(ddmmyyyy_str))){
return [cljs.core.str(moment(ddmmyyyy_str,"DD.MM.YYYY",true).format("YYYY-MM-DD")),cljs.core.str("T00:00:00Z")].join('');
} else {
return null;
}
});
/**
 * Получить текущую дату
 */
gcclocal.comm.utils.current_date = (function gcclocal$comm$utils$current_date(){
var cdatetime = (new moment());
return (new moment((new Date(cdatetime.year(),cdatetime.month(),cdatetime.date()))));
});
/**
 * Получить дату с добавлением кол-ва дней
 */
gcclocal.comm.utils.add_days_moment = (function gcclocal$comm$utils$add_days_moment(moment_d,days){
return moment_d.add(days,"days");
});
/**
 * Получить разницу между двумя датами в днях
 */
gcclocal.comm.utils.diff_in_days = (function gcclocal$comm$utils$diff_in_days(moment1,moment2){
return moment1.diff(moment2,"days");
});
gcclocal.comm.utils.moment_comparison = (function gcclocal$comm$utils$moment_comparison(cond_fn_str,moment_date1,moment_date2){
var G__47262 = cond_fn_str;
switch (G__47262) {
case "isSame":
return moment_date1.isSame(moment_date2);

break;
case "isBefore":
return moment_date1.isBefore(moment_date2);

break;
case "isAfter":
return moment_date1.isAfter(moment_date2);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cond_fn_str)].join('')));

}
});
gcclocal.comm.utils.moment_same_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gcclocal.comm.utils.moment_comparison,"isSame");
gcclocal.comm.utils.moment_before_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gcclocal.comm.utils.moment_comparison,"isBefore");
gcclocal.comm.utils.moment_after_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gcclocal.comm.utils.moment_comparison,"isAfter");
gcclocal.comm.utils.str_moment_comparison = (function gcclocal$comm$utils$str_moment_comparison(comp_fn,dstr1,dstr2){
var G__47266 = gcclocal.comm.utils.iso_str__GT_moment(dstr1);
var G__47267 = gcclocal.comm.utils.iso_str__GT_moment(dstr2);
return (comp_fn.cljs$core$IFn$_invoke$arity$2 ? comp_fn.cljs$core$IFn$_invoke$arity$2(G__47266,G__47267) : comp_fn.call(null,G__47266,G__47267));
});
gcclocal.comm.utils.str_moment_after_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gcclocal.comm.utils.str_moment_comparison,gcclocal.comm.utils.moment_after_QMARK_);
gcclocal.comm.utils.str_moment_before_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gcclocal.comm.utils.str_moment_comparison,gcclocal.comm.utils.moment_before_QMARK_);
gcclocal.comm.utils.str_moment_same_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gcclocal.comm.utils.str_moment_comparison,gcclocal.comm.utils.moment_same_QMARK_);
/**
 * Сортировать список дат в формате строк
 */
gcclocal.comm.utils.sort_dates = (function gcclocal$comm$utils$sort_dates(desc_QMARK_,dates_in_str){
var dates_in_vector = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,dates_in_str);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(desc_QMARK_)?gcclocal.comm.utils.str_moment_after_QMARK_:gcclocal.comm.utils.str_moment_before_QMARK_),dates_in_vector);
});
/**
 * Вывести число с разделениями, запятой и т.д
 */
gcclocal.comm.utils.get_number_with_decimals_str = (function gcclocal$comm$utils$get_number_with_decimals_str(var_args){
var args47268 = [];
var len__31462__auto___47271 = arguments.length;
var i__31463__auto___47272 = (0);
while(true){
if((i__31463__auto___47272 < len__31462__auto___47271)){
args47268.push((arguments[i__31463__auto___47272]));

var G__47273 = (i__31463__auto___47272 + (1));
i__31463__auto___47272 = G__47273;
continue;
} else {
}
break;
}

var G__47270 = args47268.length;
switch (G__47270) {
case 1:
return gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47268.length)].join('')));

}
});

gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1 = (function (input){
return gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2(input,false);
});

gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2 = (function (input,show_dash_if_zero_QMARK_){
if((input == null)){
return "";
} else {
if(cljs.core.truth_((function (){var and__30375__auto__ = show_dash_if_zero_QMARK_;
if(cljs.core.truth_(and__30375__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,(0));
} else {
return and__30375__auto__;
}
})())){
return "-";
} else {
var js_reg = (new RegExp("\\B(?=(\\d{3})+(?!\\d))","g"));
var n = input.toString().replace(js_reg," ");
return n;
}
}
});

gcclocal.comm.utils.get_number_with_decimals_str.cljs$lang$maxFixedArity = 2;

/**
 * Основной способ отображения денег (для поступления денег)
 *   с '-' вместо 0
 */
gcclocal.comm.utils.money_str = (function gcclocal$comm$utils$money_str(input){
return gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2(Math.round(input),true);
});
/**
 * Отображение денег с 0
 */
gcclocal.comm.utils.money_str_with_zero = (function gcclocal$comm$utils$money_str_with_zero(input){
return gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2(Math.round(input),false);
});
/**
 * Найти хм с нужным ключом и значением в списке хм
 */
gcclocal.comm.utils.get_map_by_key = (function gcclocal$comm$utils$get_map_by_key(allmaps,mkey,mvalue){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((mkey.cljs$core$IFn$_invoke$arity$1 ? mkey.cljs$core$IFn$_invoke$arity$1(m) : mkey.call(null,m)),mvalue);
}),allmaps));
});
/**
 * Найти хм с нужным id в списке хм
 */
gcclocal.comm.utils.get_map_by_id = (function gcclocal$comm$utils$get_map_by_id(allmaps,id){
return gcclocal.comm.utils.get_map_by_key(allmaps,cljs.core.cst$kw$id,id);
});
/**
 * Получить строку из хм ошибок
 */
gcclocal.comm.utils.get_errors_str_from_map = (function gcclocal$comm$utils$get_errors_str_from_map(errors_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result_str,p__47280){
var vec__47281 = p__47280;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47281,(1),null);
return [cljs.core.str(result_str),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__47281,k,v){
return (function (p1__47275_SHARP_){
return [cljs.core.str("-"),cljs.core.str(p1__47275_SHARP_),cljs.core.str("\n")].join('');
});})(vec__47281,k,v))
,v)))].join('');
}),"",errors_map);
});
/**
 * Вывод сообщения на экран
 *   message {:type ''
 *         :text '' }
 *   
 */
gcclocal.comm.utils.notify_message = (function gcclocal$comm$utils$notify_message(message){
var msg_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(message);
var msg_text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(message);
return $.notify(msg_text,{"className": msg_type, "autoHideDelay": (3000)});
});
gcclocal.comm.utils.error_handler = (function gcclocal$comm$utils$error_handler(p__47284){
var map__47287 = p__47284;
var map__47287__$1 = ((((!((map__47287 == null)))?((((map__47287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47287):map__47287);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47287__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47287__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
/**
 * Получить результат get-ом
 */
gcclocal.comm.utils.get_ajax = (function gcclocal$comm$utils$get_ajax(url,get_params,success_handler){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,get_params,cljs.core.cst$kw$handler,success_handler], null)], 0));
});
/**
 * Конвертировать хм параметров в параметры для url
 */
gcclocal.comm.utils.params_to_url_str = (function gcclocal$comm$utils$params_to_url_str(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47293){
var vec__47294 = p__47293;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47294,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.seq(params)));
});
/**
 * Получить json get-ом
 */
gcclocal.comm.utils.get_json = (function gcclocal$comm$utils$get_json(url,get_params,success_handler){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,get_params,cljs.core.cst$kw$handler,success_handler,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true], null)], 0));
});
/**
 * Отправить post-ом json и получить json ответ
 */
gcclocal.comm.utils.post_json = (function gcclocal$comm$utils$post_json(url,post_params,success_handler){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$params,post_params,cljs.core.cst$kw$handler,success_handler,cljs.core.cst$kw$error_DASH_handler,gcclocal.comm.utils.error_handler,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$format,ajax.core.json_request_format()], null)], 0));
});
/**
 * Отправить постом json с проверкой поля success у json ответа
 */
gcclocal.comm.utils.post_json_with_success_check = (function gcclocal$comm$utils$post_json_with_success_check(url,post_params,on_success_fn,on_failure_fn){
var success_handler = (function (response){
if(cljs.core.truth_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(response))){
return (on_success_fn.cljs$core$IFn$_invoke$arity$1 ? on_success_fn.cljs$core$IFn$_invoke$arity$1(response) : on_success_fn.call(null,response));
} else {
return (on_failure_fn.cljs$core$IFn$_invoke$arity$1 ? on_failure_fn.cljs$core$IFn$_invoke$arity$1(response) : on_failure_fn.call(null,response));
}
});
return gcclocal.comm.utils.post_json(url,post_params,success_handler);
});
/**
 * Получить значение строки по инпутам с соотв.названиями
 * 
 *   Предполагает, что у инпутов классы имеют те же названия, что и поля, н-р
 *   :name и add-name
 * 
 *   fieldnames - вектор кейнэймов для полей
 *   dom-prefix - префикс для добавления или редактирования (add/edit)
 *   
 */
gcclocal.comm.utils.extract_row_from_fields = (function gcclocal$comm$utils$extract_row_from_fields(fieldnames,dom_prefix){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (row_map,fieldname){
var field_sel = [cljs.core.str("."),cljs.core.str(dom_prefix),cljs.core.str("-"),cljs.core.str(cljs.core.name(fieldname))].join('');
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row_map,fieldname,gcclocal.comm.dom_utils.value_from_dom(field_sel));
}),cljs.core.PersistentArrayMap.EMPTY,fieldnames);
});
/**
 * Проверка, находится ли элемент в векторе или списке
 */
gcclocal.comm.utils.in_list_QMARK_ = (function gcclocal$comm$utils$in_list_QMARK_(l,value){
return !((cljs.core.some(cljs.core.PersistentHashSet.fromArray([value], true),l) == null));
});
/**
 * Для -> макроса: если условие выполнилось,
 *   то применить ф-цию, иначе вернуть старое значение
 */
gcclocal.comm.utils.when_or_skip = (function gcclocal$comm$utils$when_or_skip(prev,condition,cond_fn){
if(cljs.core.truth_(condition)){
return (cond_fn.cljs$core$IFn$_invoke$arity$1 ? cond_fn.cljs$core$IFn$_invoke$arity$1(prev) : cond_fn.call(null,prev));
} else {
return prev;
}
});
gcclocal.comm.utils.rename_keys_in_map = (function gcclocal$comm$utils$rename_keys_in_map(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__47301){
var vec__47302 = p__47301;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47302,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47302,(1),null);
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
