// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.comm.utils');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('gcclocal.comm.dom_utils');
gcclocal.comm.utils.nil_or_empty_QMARK_ = (function gcclocal$comm$utils$nil_or_empty_QMARK_(x){
return ((x == null)) || (cljs.core.empty_QMARK_.call(null,x));
});
/**
 * true if coll contains elm
 */
gcclocal.comm.utils.in_QMARK_ = (function gcclocal$comm$utils$in_QMARK_(coll,elm){
return cljs.core.some.call(null,(function (p1__32578_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__32578_SHARP_);
}),coll);
});
/**
 * Найти в векторе/списке элемент,
 *   который удовлетв. условию
 */
gcclocal.comm.utils.find_some = (function gcclocal$comm$utils$find_some(pred_fn,l){
return cljs.core.some.call(null,(function (p1__32579_SHARP_){
if(cljs.core.truth_(pred_fn.call(null,p1__32579_SHARP_))){
return p1__32579_SHARP_;
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

if(!(clojure.string.blank_QMARK_.call(null,iso_str))){
return gcclocal.comm.utils.iso_str__GT_moment.call(null,iso_str).format("DD.MM.YYYY");
} else {
return null;
}
});
gcclocal.comm.utils.ddmmyyyy__GT_iso_date_str = (function gcclocal$comm$utils$ddmmyyyy__GT_iso_date_str(ddmmyyyy_str){
return moment(ddmmyyyy_str,"DD.MM.YYYY",true).format("YYYY.MM.DD");
});
gcclocal.comm.utils.ddmmyyyy__GT_real_iso_date_str = (function gcclocal$comm$utils$ddmmyyyy__GT_real_iso_date_str(ddmmyyyy_str){

if(!(clojure.string.blank_QMARK_.call(null,ddmmyyyy_str))){
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
 * Получить текущую дату в iso строке
 */
gcclocal.comm.utils.current_date_iso_str = (function gcclocal$comm$utils$current_date_iso_str(){
return gcclocal.comm.utils.ddmmyyyy__GT_real_iso_date_str.call(null,gcclocal.comm.utils.current_date.call(null).format("DD.MM.YYYY"));
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
var G__32581 = cond_fn_str;
switch (G__32581) {
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
gcclocal.comm.utils.moment_same_QMARK_ = cljs.core.partial.call(null,gcclocal.comm.utils.moment_comparison,"isSame");
gcclocal.comm.utils.moment_before_QMARK_ = cljs.core.partial.call(null,gcclocal.comm.utils.moment_comparison,"isBefore");
gcclocal.comm.utils.moment_after_QMARK_ = cljs.core.partial.call(null,gcclocal.comm.utils.moment_comparison,"isAfter");
gcclocal.comm.utils.str_moment_comparison = (function gcclocal$comm$utils$str_moment_comparison(comp_fn,dstr1,dstr2){
return comp_fn.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,dstr1),gcclocal.comm.utils.iso_str__GT_moment.call(null,dstr2));
});
gcclocal.comm.utils.str_moment_after_QMARK_ = cljs.core.partial.call(null,gcclocal.comm.utils.str_moment_comparison,gcclocal.comm.utils.moment_after_QMARK_);
gcclocal.comm.utils.str_moment_before_QMARK_ = cljs.core.partial.call(null,gcclocal.comm.utils.str_moment_comparison,gcclocal.comm.utils.moment_before_QMARK_);
gcclocal.comm.utils.str_moment_same_QMARK_ = cljs.core.partial.call(null,gcclocal.comm.utils.str_moment_comparison,gcclocal.comm.utils.moment_same_QMARK_);
/**
 * Сортировать список дат в формате строк
 */
gcclocal.comm.utils.sort_dates = (function gcclocal$comm$utils$sort_dates(desc_QMARK_,dates_in_str){
var dates_in_vector = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,dates_in_str);
return cljs.core.sort.call(null,(cljs.core.truth_(desc_QMARK_)?gcclocal.comm.utils.str_moment_after_QMARK_:gcclocal.comm.utils.str_moment_before_QMARK_),dates_in_vector);
});
/**
 * Вывести число с разделениями, запятой и т.д
 */
gcclocal.comm.utils.get_number_with_decimals_str = (function gcclocal$comm$utils$get_number_with_decimals_str(var_args){
var args32583 = [];
var len__31652__auto___32586 = arguments.length;
var i__31653__auto___32587 = (0);
while(true){
if((i__31653__auto___32587 < len__31652__auto___32586)){
args32583.push((arguments[i__31653__auto___32587]));

var G__32588 = (i__31653__auto___32587 + (1));
i__31653__auto___32587 = G__32588;
continue;
} else {
}
break;
}

var G__32585 = args32583.length;
switch (G__32585) {
case 1:
return gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32583.length)].join('')));

}
});

gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1 = (function (input){
return gcclocal.comm.utils.get_number_with_decimals_str.call(null,input,false);
});

gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2 = (function (input,show_dash_if_zero_QMARK_){
if((input == null)){
return "";
} else {
if(cljs.core.truth_((function (){var and__30565__auto__ = show_dash_if_zero_QMARK_;
if(cljs.core.truth_(and__30565__auto__)){
return cljs.core._EQ_.call(null,input,(0));
} else {
return and__30565__auto__;
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
return gcclocal.comm.utils.get_number_with_decimals_str.call(null,(cljs.core.truth_(input)?Math.round(input):null),true);
});
/**
 * Отображение денег с 0
 */
gcclocal.comm.utils.money_str_with_zero = (function gcclocal$comm$utils$money_str_with_zero(input){
return gcclocal.comm.utils.get_number_with_decimals_str.call(null,Math.round(input),false);
});
/**
 * Найти хм с нужным ключом и значением в списке хм
 */
gcclocal.comm.utils.get_map_by_key = (function gcclocal$comm$utils$get_map_by_key(allmaps,mkey,mvalue){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core._EQ_.call(null,mkey.call(null,m),mvalue);
}),allmaps));
});
/**
 * Найти хм с нужным id в списке хм
 */
gcclocal.comm.utils.get_map_by_id = (function gcclocal$comm$utils$get_map_by_id(allmaps,id){
return gcclocal.comm.utils.get_map_by_key.call(null,allmaps,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
/**
 * Получить строку из хм ошибок
 */
gcclocal.comm.utils.get_errors_str_from_map = (function gcclocal$comm$utils$get_errors_str_from_map(errors_map){
return cljs.core.reduce.call(null,(function (result_str,p__32595){
var vec__32596 = p__32595;
var k = cljs.core.nth.call(null,vec__32596,(0),null);
var v = cljs.core.nth.call(null,vec__32596,(1),null);
return [cljs.core.str(result_str),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32596,k,v){
return (function (p1__32590_SHARP_){
return [cljs.core.str("-"),cljs.core.str(p1__32590_SHARP_),cljs.core.str("\n")].join('');
});})(vec__32596,k,v))
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
var msg_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(message);
var msg_text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(message);
return $.notify(msg_text,{"className": msg_type, "autoHideDelay": (3000)});
});
/**
 * Получить результат get-ом
 */
gcclocal.comm.utils.get_ajax = (function gcclocal$comm$utils$get_ajax(url,get_params,success_handler){
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),get_params,new cljs.core.Keyword(null,"handler","handler",-195596612),success_handler], null));
});
/**
 * Конвертировать хм параметров в параметры для url
 */
gcclocal.comm.utils.params_to_url_str = (function gcclocal$comm$utils$params_to_url_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__32603){
var vec__32604 = p__32603;
var k = cljs.core.nth.call(null,vec__32604,(0),null);
var v = cljs.core.nth.call(null,vec__32604,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.seq.call(null,params)));
});
/**
 * Получить json get-ом
 */
gcclocal.comm.utils.get_json = (function gcclocal$comm$utils$get_json(url,get_params,success_handler){
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),get_params,new cljs.core.Keyword(null,"handler","handler",-195596612),success_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
/**
 * Отправить post-ом json и получить json ответ
 */
gcclocal.comm.utils.post_json = (function gcclocal$comm$utils$post_json(url,post_params,success_handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),post_params,new cljs.core.Keyword(null,"handler","handler",-195596612),success_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gcclocal.comm.utils.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null)], null));
});
/**
 * Отправить постом json с проверкой поля success у json ответа
 */
gcclocal.comm.utils.post_json_with_success_check = (function gcclocal$comm$utils$post_json_with_success_check(url,post_params,on_success_fn,on_failure_fn){
var success_handler = (function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(response))){
return on_success_fn.call(null,response);
} else {
return on_failure_fn.call(null,response);
}
});
return gcclocal.comm.utils.post_json.call(null,url,post_params,success_handler);
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
return cljs.core.reduce.call(null,(function (row_map,fieldname){
var field_sel = [cljs.core.str("."),cljs.core.str(dom_prefix),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,fieldname))].join('');
return cljs.core.assoc.call(null,row_map,fieldname,gcclocal.comm.dom_utils.value_from_dom.call(null,field_sel));
}),cljs.core.PersistentArrayMap.EMPTY,fieldnames);
});
/**
 * Проверка, находится ли элемент в векторе или списке
 */
gcclocal.comm.utils.in_list_QMARK_ = (function gcclocal$comm$utils$in_list_QMARK_(l,value){
return !((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([value], true),l) == null));
});
/**
 * Для -> макроса: если условие выполнилось,
 *   то применить ф-цию, иначе вернуть старое значение
 */
gcclocal.comm.utils.when_or_skip = (function gcclocal$comm$utils$when_or_skip(prev,condition,cond_fn){
if(cljs.core.truth_(condition)){
return cond_fn.call(null,prev);
} else {
return prev;
}
});
gcclocal.comm.utils.rename_keys_in_map = (function gcclocal$comm$utils$rename_keys_in_map(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__32611){
var vec__32612 = p__32611;
var old = cljs.core.nth.call(null,vec__32612,(0),null);
var new$ = cljs.core.nth.call(null,vec__32612,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});

//# sourceMappingURL=utils.js.map