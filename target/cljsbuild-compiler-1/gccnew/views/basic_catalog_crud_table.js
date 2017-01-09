// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.views.basic_catalog_crud_table');
goog.require('cljs.core');
goog.require('gcclocal.comm.dom_utils');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.pagination');
goog.require('gcclocal.comm.amethods');
goog.require('rum.core');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.views.crud_views');
goog.require('gcclocal.views.crud_fields');
goog.require('gcclocal.comm.channels');
cljs.core.enable_console_print_BANG_();
if(typeof gcclocal.views.basic_catalog_crud_table.default_app_state !== 'undefined'){
} else {
gcclocal.views.basic_catalog_crud_table.default_app_state = (function (){var G__52050 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$loading_DASH_rows_QMARK_,true,cljs.core.cst$kw$rows,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$total_DASH_c,(0),cljs.core.cst$kw$nav_DASH_and_DASH_filters,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pagination,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pagesize,(10),cljs.core.cst$kw$currentpage,(1)], null),cljs.core.cst$kw$sorting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"last_edit_datetime",cljs.core.cst$kw$default_DASH_field,"last_edit_datetime",cljs.core.cst$kw$desc_QMARK_,true], null),cljs.core.cst$kw$search_DASH_str,""], null),cljs.core.cst$kw$add_DASH_mode_QMARK_,true,cljs.core.cst$kw$edit_DASH_mode_QMARK_,false,cljs.core.cst$kw$selected_DASH_row,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52050) : cljs.core.atom.call(null,G__52050));
})();
}
gcclocal.views.basic_catalog_crud_table.get_cursor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,gcclocal.views.basic_catalog_crud_table.default_app_state);
gcclocal.views.basic_catalog_crud_table.default_crud_cursors = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$currentpage,cljs.core.cst$kw$search_DASH_str,cljs.core.cst$kw$edit_DASH_mode_QMARK_,cljs.core.cst$kw$add_DASH_mode_QMARK_,cljs.core.cst$kw$loading_DASH_rows_QMARK_,cljs.core.cst$kw$total_DASH_c,cljs.core.cst$kw$rows,cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$app_DASH_state,cljs.core.cst$kw$pagination,cljs.core.cst$kw$default_DASH_sort_DASH_field,cljs.core.cst$kw$sorting,cljs.core.cst$kw$pagesize,cljs.core.cst$kw$selected_DASH_row,cljs.core.cst$kw$sort_DASH_field],[(function (){var G__52051 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$currentpage], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52051) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52051));
})(),(function (){var G__52052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$search_DASH_str], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52052) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52052));
})(),(function (){var G__52053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edit_DASH_mode_QMARK_], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52053) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52053));
})(),(function (){var G__52054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_mode_QMARK_], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52054) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52054));
})(),(function (){var G__52055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_DASH_rows_QMARK_], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52055) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52055));
})(),(function (){var G__52056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$total_DASH_c], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52056) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52056));
})(),(function (){var G__52057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rows], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52057) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52057));
})(),(function (){var G__52058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52058) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52058));
})(),(function (){var G__52059 = cljs.core.PersistentVector.EMPTY;
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52059) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52059));
})(),(function (){var G__52060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52060) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52060));
})(),(function (){var G__52061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$default_DASH_field], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52061) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52061));
})(),(function (){var G__52062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52062) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52062));
})(),(function (){var G__52063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$pagesize], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52063) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52063));
})(),(function (){var G__52064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_row], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52064) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52064));
})(),(function (){var G__52065 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$field], null);
return (gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.basic_catalog_crud_table.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52065) : gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,G__52065));
})()]);
/**
 * Вытащить мэп для добавления строки
 */
gcclocal.views.basic_catalog_crud_table.default_extract_add_row = (function gcclocal$views$basic_catalog_crud_table$default_extract_add_row(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,gcclocal.comm.dom_utils.value(gcclocal.comm.dom_utils.q(".add-name"))], null);
});
/**
 * Вытащить мэп для редактирования строки
 */
gcclocal.views.basic_catalog_crud_table.default_extract_edit_row = (function gcclocal$views$basic_catalog_crud_table$default_extract_edit_row(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,gcclocal.comm.dom_utils.value(gcclocal.comm.dom_utils.q(".edit-name"))], null);
});
/**
 * Установить настройки фильтров/пейджинга/сортировки по умолчанию
 */
gcclocal.views.basic_catalog_crud_table.reset_nav_and_filters = (function gcclocal$views$basic_catalog_crud_table$reset_nav_and_filters(cursors){
var prevpagination = (function (){var G__52070 = cljs.core.cst$kw$pagination.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52070) : cljs.core.deref.call(null,G__52070));
})();
var default_sorting_field = (function (){var G__52071 = cljs.core.cst$kw$default_DASH_sort_DASH_field.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52071) : cljs.core.deref.call(null,G__52071));
})();
var G__52072 = cljs.core.cst$kw$nav_DASH_and_DASH_filters.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52073 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pagination,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$total_DASH_c,(0),cljs.core.cst$kw$pagesize,cljs.core.cst$kw$pagesize.cljs$core$IFn$_invoke$arity$1(prevpagination),cljs.core.cst$kw$currentpage,(1)], null),cljs.core.cst$kw$sorting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,default_sorting_field,cljs.core.cst$kw$default_DASH_field,default_sorting_field,cljs.core.cst$kw$desc_QMARK_,true], null),cljs.core.cst$kw$search_DASH_str,""], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52072,G__52073) : cljs.core.reset_BANG_.call(null,G__52072,G__52073));
});
/**
 * Установить текущую страницу на стартовую
 */
gcclocal.views.basic_catalog_crud_table.reset_page = (function gcclocal$views$basic_catalog_crud_table$reset_page(cursors){
var G__52076 = cljs.core.cst$kw$currentpage.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52077 = (1);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52076,G__52077) : cljs.core.reset_BANG_.call(null,G__52076,G__52077));
});
/**
 * Поменять страницу
 */
gcclocal.views.basic_catalog_crud_table.change_page = (function gcclocal$views$basic_catalog_crud_table$change_page(cursors,page,refresh_rows_ch){
var G__52092_52106 = cljs.core.cst$kw$currentpage.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52093_52107 = page;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52092_52106,G__52093_52107) : cljs.core.reset_BANG_.call(null,G__52092_52106,G__52093_52107));

var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_52097){
var state_val_52098 = (state_52097[(1)]);
if((state_val_52098 === (1))){
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52097__$1,(2),refresh_rows_ch,cljs.core.cst$kw$reset_DASH_none);
} else {
if((state_val_52098 === (2))){
var inst_52095 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52097__$1,inst_52095);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto____0 = (function (){
var statearr_52102 = [null,null,null,null,null,null,null];
(statearr_52102[(0)] = gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto__);

(statearr_52102[(1)] = (1));

return statearr_52102;
});
var gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto____1 = (function (state_52097){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52097);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52103){if((e52103 instanceof Object)){
var ex__37986__auto__ = e52103;
var statearr_52104_52108 = state_52097;
(statearr_52104_52108[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52097);

return cljs.core.cst$kw$recur;
} else {
throw e52103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52109 = state_52097;
state_52097 = G__52109;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto__ = function(state_52097){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto____1.call(this,state_52097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto____0;
gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto____1;
return gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_52105 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
});
/**
 * Выкл. все режимы (добавления, редактирования и т.д.)
 */
gcclocal.views.basic_catalog_crud_table.turn_off_all_modes = (function gcclocal$views$basic_catalog_crud_table$turn_off_all_modes(cursors){
var G__52114_52118 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52115_52119 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52114_52118,G__52115_52119) : cljs.core.reset_BANG_.call(null,G__52114_52118,G__52115_52119));

var G__52116 = cljs.core.cst$kw$edit_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52117 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52116,G__52117) : cljs.core.reset_BANG_.call(null,G__52116,G__52117));
});
/**
 * Сортировать по полю (при этом установив стр. на 1)
 */
gcclocal.views.basic_catalog_crud_table.sort_field = (function gcclocal$views$basic_catalog_crud_table$sort_field(cursors,sort_field__$1,refresh_rows_ch){
var sort_cursor = cljs.core.cst$kw$sorting.cljs$core$IFn$_invoke$arity$1(cursors);
var desc_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_field__$1,cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sort_cursor) : cljs.core.deref.call(null,sort_cursor)))))?cljs.core.not(cljs.core.cst$kw$desc_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sort_cursor) : cljs.core.deref.call(null,sort_cursor)))):false);
var G__52134_52148 = sort_cursor;
var G__52135_52149 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,sort_field__$1,cljs.core.cst$kw$desc_QMARK_,desc_QMARK_], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52134_52148,G__52135_52149) : cljs.core.reset_BANG_.call(null,G__52134_52148,G__52135_52149));

var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__,desc_QMARK_,sort_cursor){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__,desc_QMARK_,sort_cursor){
return (function (state_52139){
var state_val_52140 = (state_52139[(1)]);
if((state_val_52140 === (1))){
var state_52139__$1 = state_52139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52139__$1,(2),refresh_rows_ch,cljs.core.cst$kw$reset_DASH_page);
} else {
if((state_val_52140 === (2))){
var inst_52137 = (state_52139[(2)]);
var state_52139__$1 = state_52139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52139__$1,inst_52137);
} else {
return null;
}
}
});})(c__38096__auto__,desc_QMARK_,sort_cursor))
;
return ((function (switch__37982__auto__,c__38096__auto__,desc_QMARK_,sort_cursor){
return (function() {
var gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto____0 = (function (){
var statearr_52144 = [null,null,null,null,null,null,null];
(statearr_52144[(0)] = gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto__);

(statearr_52144[(1)] = (1));

return statearr_52144;
});
var gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto____1 = (function (state_52139){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52139);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52145){if((e52145 instanceof Object)){
var ex__37986__auto__ = e52145;
var statearr_52146_52150 = state_52139;
(statearr_52146_52150[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52139);

return cljs.core.cst$kw$recur;
} else {
throw e52145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52151 = state_52139;
state_52139 = G__52151;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto__ = function(state_52139){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto____1.call(this,state_52139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto____0;
gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto____1;
return gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__,desc_QMARK_,sort_cursor))
})();
var state__38098__auto__ = (function (){var statearr_52147 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__,desc_QMARK_,sort_cursor))
);

return c__38096__auto__;
});
/**
 * Искать по поиску (при этом установив стр. на 1)
 */
gcclocal.views.basic_catalog_crud_table.search = (function gcclocal$views$basic_catalog_crud_table$search(cursors,s,refresh_rows_ch){
var G__52166_52180 = cljs.core.cst$kw$search_DASH_str.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52167_52181 = s;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52166_52180,G__52167_52181) : cljs.core.reset_BANG_.call(null,G__52166_52180,G__52167_52181));

var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_52171){
var state_val_52172 = (state_52171[(1)]);
if((state_val_52172 === (1))){
var state_52171__$1 = state_52171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52171__$1,(2),refresh_rows_ch,cljs.core.cst$kw$reset_DASH_page);
} else {
if((state_val_52172 === (2))){
var inst_52169 = (state_52171[(2)]);
var state_52171__$1 = state_52171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52171__$1,inst_52169);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto____0 = (function (){
var statearr_52176 = [null,null,null,null,null,null,null];
(statearr_52176[(0)] = gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto__);

(statearr_52176[(1)] = (1));

return statearr_52176;
});
var gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto____1 = (function (state_52171){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52171);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52177){if((e52177 instanceof Object)){
var ex__37986__auto__ = e52177;
var statearr_52178_52182 = state_52171;
(statearr_52178_52182[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52171);

return cljs.core.cst$kw$recur;
} else {
throw e52177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52183 = state_52171;
state_52171 = G__52183;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto__ = function(state_52171){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto____1.call(this,state_52171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto____0;
gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto____1;
return gcclocal$views$basic_catalog_crud_table$search_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_52179 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
});
gcclocal.views.basic_catalog_crud_table.add_row = (function gcclocal$views$basic_catalog_crud_table$add_row(url,extract_add_row_fn,notify_ch,refresh_rows_ch){
return gcclocal.comm.amethods.add_row(url,(function (){var or__30387__auto__ = extract_add_row_fn;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return gcclocal.views.basic_catalog_crud_table.default_extract_add_row;
}
})().call(null),notify_ch,refresh_rows_ch);
});
gcclocal.views.basic_catalog_crud_table.cancel_add_row = (function gcclocal$views$basic_catalog_crud_table$cancel_add_row(cursors){
var G__52186 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52187 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52186,G__52187) : cljs.core.reset_BANG_.call(null,G__52186,G__52187));
});
/**
 * Выбрать (или очистить) строку
 */
gcclocal.views.basic_catalog_crud_table.select_row = (function gcclocal$views$basic_catalog_crud_table$select_row(cursors,row){
var sel_row_cursor = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52190_52192 = sel_row_cursor;
var G__52191_52193 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(row,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sel_row_cursor) : cljs.core.deref.call(null,sel_row_cursor))))?row:null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52190_52192,G__52191_52193) : cljs.core.reset_BANG_.call(null,G__52190_52192,G__52191_52193));

return gcclocal.views.basic_catalog_crud_table.turn_off_all_modes(cursors);
});
gcclocal.views.basic_catalog_crud_table.save_edit_row = (function gcclocal$views$basic_catalog_crud_table$save_edit_row(url,row,extract_edit_row_fn,notify_ch,refresh_rows_ch){
return gcclocal.comm.amethods.edit_row(url,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row),(function (){var or__30387__auto__ = extract_edit_row_fn;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return gcclocal.views.basic_catalog_crud_table.default_extract_edit_row;
}
})().call(null),notify_ch,refresh_rows_ch);
});
gcclocal.views.basic_catalog_crud_table.cancel_edit_row = (function gcclocal$views$basic_catalog_crud_table$cancel_edit_row(cursors){
return gcclocal.views.basic_catalog_crud_table.turn_off_all_modes(cursors);
});
gcclocal.views.basic_catalog_crud_table.start_edit_row = (function gcclocal$views$basic_catalog_crud_table$start_edit_row(cursors){
var G__52196 = cljs.core.cst$kw$edit_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52197 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52196,G__52197) : cljs.core.reset_BANG_.call(null,G__52196,G__52197));
});
gcclocal.views.basic_catalog_crud_table.click_delete_row = (function gcclocal$views$basic_catalog_crud_table$click_delete_row(row){
return $("#delete-modal").modal("show");
});
gcclocal.views.basic_catalog_crud_table.delete_row = (function gcclocal$views$basic_catalog_crud_table$delete_row(url,row,notify_ch,refresh_rows_ch){
return gcclocal.comm.amethods.delete_row(url,row,notify_ch,refresh_rows_ch);
});
gcclocal.views.basic_catalog_crud_table.start_add_row = (function gcclocal$views$basic_catalog_crud_table$start_add_row(cursors){
var G__52200 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52201 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52200,G__52201) : cljs.core.reset_BANG_.call(null,G__52200,G__52201));
});
/**
 * Обновление строк
 */
gcclocal.views.basic_catalog_crud_table.refresh_all_rows = (function gcclocal$views$basic_catalog_crud_table$refresh_all_rows(cursors,url,reset_type,reset_all_fn,reset_page_fn){
var current_state_cursor = cljs.core.cst$kw$app_DASH_state.cljs$core$IFn$_invoke$arity$1(cursors);
var loading_cursor = cljs.core.cst$kw$loading_DASH_rows_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
var rows_cursor = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cursors);
var count_cursor = cljs.core.cst$kw$total_DASH_c.cljs$core$IFn$_invoke$arity$1(cursors);
var sort_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$field], null));
var desc_sort_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$desc_QMARK_], null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(loading_cursor,true) : cljs.core.reset_BANG_.call(null,loading_cursor,true));

var G__52203_52204 = (((reset_type instanceof cljs.core.Keyword))?reset_type.fqn:null);
switch (G__52203_52204) {
case "reset-all":
(reset_all_fn.cljs$core$IFn$_invoke$arity$0 ? reset_all_fn.cljs$core$IFn$_invoke$arity$0() : reset_all_fn.call(null));

break;
case "reset-page":
(reset_page_fn.cljs$core$IFn$_invoke$arity$0 ? reset_page_fn.cljs$core$IFn$_invoke$arity$0() : reset_page_fn.call(null));

break;
default:

}

gcclocal.views.basic_catalog_crud_table.turn_off_all_modes(cursors);

return gcclocal.comm.amethods.refresh_rows(url,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$page,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$currentpage], null)),cljs.core.cst$kw$pagesize,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$pagesize], null)),cljs.core.cst$kw$ordering,[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),cljs.core.cst$kw$search,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$search_DASH_str], null))], null),loading_cursor,rows_cursor,count_cursor);
});
/**
 * Выгрузить в excel
 */
gcclocal.views.basic_catalog_crud_table.load_to_excel = (function gcclocal$views$basic_catalog_crud_table$load_to_excel(cursors,url){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["load-to-excel! ",url], 0));

var current_state_cursor = cljs.core.cst$kw$app_DASH_state.cljs$core$IFn$_invoke$arity$1(cursors);
var sort_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$field], null));
var desc_sort_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$desc_QMARK_], null));
return window.open([cljs.core.str(url),cljs.core.str("?"),cljs.core.str(gcclocal.comm.utils.params_to_url_str(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ordering,[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),cljs.core.cst$kw$search,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$search_DASH_str], null))], null)))].join(''));
});
gcclocal.views.basic_catalog_crud_table.init_channels_and_watchers = (function gcclocal$views$basic_catalog_crud_table$init_channels_and_watchers(cursors){
return cljs.core.add_watch(cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors),cljs.core.cst$kw$add_DASH_mode,(function (k,cursor,old_v,new_v){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_v,old_v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_v,true))){
var G__52208 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52209 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52208,G__52209) : cljs.core.reset_BANG_.call(null,G__52208,G__52209));
} else {
return null;
}
}));
});
/**
 * 
 */
gcclocal.views.basic_catalog_crud_table.crud_main_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (cursors,crud_urls,p__52215,p__52216){
var map__52217 = p__52215;
var map__52217__$1 = ((((!((map__52217 == null)))?((((map__52217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52217):map__52217);
var channels = map__52217__$1;
var change_page_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52217__$1,cljs.core.cst$kw$change_DASH_page_DASH_ch);
var refresh_rows_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52217__$1,cljs.core.cst$kw$refresh_DASH_rows_DASH_ch);
var notify_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52217__$1,cljs.core.cst$kw$notify_DASH_ch);
var map__52218 = p__52216;
var map__52218__$1 = ((((!((map__52218 == null)))?((((map__52218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52218):map__52218);
var config = map__52218__$1;
var search_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$search_DASH_disabled_QMARK_);
var load_to_excel_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$load_DASH_to_DASH_excel_DASH_disabled_QMARK_);
var extract_add_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$extract_DASH_add_DASH_row_DASH_fn);
var extract_edit_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$extract_DASH_edit_DASH_row_DASH_fn);
var delete_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$delete_DASH_disabled_QMARK_);
var edit_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$edit_DASH_disabled_QMARK_);
var config_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$config_DASH_headers);
var add_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$add_DASH_disabled_QMARK_);
var config_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$config_DASH_fields);
var get_name_for_delete_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,cljs.core.cst$kw$get_DASH_name_DASH_for_DASH_delete_DASH_fn);
var current_app_state = rum.core.react(cljs.core.cst$kw$app_DASH_state.cljs$core$IFn$_invoke$arity$1(cursors));
var is_loading_QMARK_ = (function (){var G__52221 = cljs.core.cst$kw$loading_DASH_rows_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52221) : cljs.core.deref.call(null,G__52221));
})();
var G__52287 = "div";
var G__52288 = null;
var G__52289 = (function (){var G__52291 = "div";
var G__52292 = {"style": {"visibility": (cljs.core.truth_(is_loading_QMARK_)?"visible":"hidden")}, "className": "ui active centered inline loader"};
return React.createElement(G__52291,G__52292);
})();
var G__52290 = (function (){var attrs52222 = (function (){var G__52294 = (function (){var G__52297 = cljs.core.cst$kw$pagination.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52297) : cljs.core.deref.call(null,G__52297));
})();
var G__52295 = (function (){var G__52298 = cljs.core.cst$kw$total_DASH_c.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52298) : cljs.core.deref.call(null,G__52298));
})();
var G__52296 = change_page_ch;
return (gcclocal.comm.pagination.pagination_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.comm.pagination.pagination_view.cljs$core$IFn$_invoke$arity$3(G__52294,G__52295,G__52296) : gcclocal.comm.pagination.pagination_view.call(null,G__52294,G__52295,G__52296));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs52222))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","dimmable","basic","segment"], null)], null),attrs52222], 0))):{"className": "ui dimmable basic segment"}),((cljs.core.map_QMARK_(attrs52222))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__52300 = (function (){var G__52308 = cljs.core.cst$kw$search_DASH_str.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52308) : cljs.core.deref.call(null,G__52308));
})();
var G__52301 = add_disabled_QMARK_;
var G__52302 = search_disabled_QMARK_;
var G__52303 = (function (){var G__52309 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52309) : cljs.core.deref.call(null,G__52309));
})();
var G__52304 = ((function (G__52300,G__52301,G__52302,G__52303,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row(cursors);
});})(G__52300,G__52301,G__52302,G__52303,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
var G__52305 = ((function (G__52300,G__52301,G__52302,G__52303,G__52304,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52210_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search(cursors,p1__52210_SHARP_,refresh_rows_ch);
});})(G__52300,G__52301,G__52302,G__52303,G__52304,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
var G__52306 = load_to_excel_disabled_QMARK_;
var G__52307 = ((function (G__52300,G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.load_to_excel(cursors,cljs.core.cst$kw$load_DASH_to_DASH_excel.cljs$core$IFn$_invoke$arity$1(crud_urls));
});})(G__52300,G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
return (gcclocal.views.crud_views.default_top_panel_view.cljs$core$IFn$_invoke$arity$8 ? gcclocal.views.crud_views.default_top_panel_view.cljs$core$IFn$_invoke$arity$8(G__52300,G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307) : gcclocal.views.crud_views.default_top_panel_view.call(null,G__52300,G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307));
})()),sablono.interpreter.interpret((function (){var G__52315 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$delete_DASH_disabled_QMARK_,cljs.core.cst$kw$sort_DASH_fn,cljs.core.cst$kw$select_DASH_row_DASH_fn,cljs.core.cst$kw$edit_DASH_mode_QMARK_,cljs.core.cst$kw$start_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_row_DASH_fn,cljs.core.cst$kw$save_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_mode_QMARK_,cljs.core.cst$kw$edit_DASH_disabled_QMARK_,cljs.core.cst$kw$delete_DASH_row_DASH_fn,cljs.core.cst$kw$rows,cljs.core.cst$kw$config_DASH_headers,cljs.core.cst$kw$sorting_DASH_map,cljs.core.cst$kw$add_DASH_disabled_QMARK_,cljs.core.cst$kw$config_DASH_fields,cljs.core.cst$kw$cancel_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$cancel_DASH_add_DASH_fn,cljs.core.cst$kw$selected_DASH_row],[delete_disabled_QMARK_,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52211_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field(cursors,p1__52211_SHARP_,refresh_rows_ch);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52212_SHARP_){
return gcclocal.views.basic_catalog_crud_table.select_row(cursors,p1__52212_SHARP_);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,(function (){var G__52316 = cljs.core.cst$kw$edit_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52316) : cljs.core.deref.call(null,G__52316));
})(),((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row(cursors);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row(cljs.core.cst$kw$add_DASH_row.cljs$core$IFn$_invoke$arity$1(crud_urls),extract_add_row_fn,notify_ch,refresh_rows_ch);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52213_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row(cljs.core.cst$kw$edit_DASH_row.cljs$core$IFn$_invoke$arity$1(crud_urls),p1__52213_SHARP_,extract_edit_row_fn,notify_ch,refresh_rows_ch);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,(function (){var G__52317 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52317) : cljs.core.deref.call(null,G__52317));
})(),edit_disabled_QMARK_,gcclocal.views.basic_catalog_crud_table.click_delete_row,(function (){var G__52318 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52318) : cljs.core.deref.call(null,G__52318));
})(),config_headers,(function (){var G__52319 = cljs.core.cst$kw$sorting.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52319) : cljs.core.deref.call(null,G__52319));
})(),add_disabled_QMARK_,config_fields,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row(cursors);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row(cursors);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,(function (){var G__52320 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52320) : cljs.core.deref.call(null,G__52320));
})()]);
return (gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1(G__52315) : gcclocal.views.crud_views.default_crud_table_view.call(null,G__52315));
})()),sablono.interpreter.interpret(((cljs.core.not(delete_disabled_QMARK_))?(function (){var G__52322 = (function (){var or__30387__auto__ = get_name_for_delete_fn;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cljs.core.cst$kw$name;
}
})().call(null,(function (){var G__52325 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52325) : cljs.core.deref.call(null,G__52325));
})());
var G__52323 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1((function (){var G__52326 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52326) : cljs.core.deref.call(null,G__52326));
})());
var G__52324 = ((function (G__52322,G__52323,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52214_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row(cljs.core.cst$kw$delete_DASH_row.cljs$core$IFn$_invoke$arity$1(crud_urls),p1__52214_SHARP_,notify_ch,refresh_rows_ch);
});})(G__52322,G__52323,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
return (gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3(G__52322,G__52323,G__52324) : gcclocal.views.crud_views.delete_modal_view.call(null,G__52322,G__52323,G__52324));
})():null))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs52222),sablono.interpreter.interpret((function (){var G__52328 = (function (){var G__52336 = cljs.core.cst$kw$search_DASH_str.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52336) : cljs.core.deref.call(null,G__52336));
})();
var G__52329 = add_disabled_QMARK_;
var G__52330 = search_disabled_QMARK_;
var G__52331 = (function (){var G__52337 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52337) : cljs.core.deref.call(null,G__52337));
})();
var G__52332 = ((function (G__52328,G__52329,G__52330,G__52331,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row(cursors);
});})(G__52328,G__52329,G__52330,G__52331,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
var G__52333 = ((function (G__52328,G__52329,G__52330,G__52331,G__52332,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52210_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search(cursors,p1__52210_SHARP_,refresh_rows_ch);
});})(G__52328,G__52329,G__52330,G__52331,G__52332,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
var G__52334 = load_to_excel_disabled_QMARK_;
var G__52335 = ((function (G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.load_to_excel(cursors,cljs.core.cst$kw$load_DASH_to_DASH_excel.cljs$core$IFn$_invoke$arity$1(crud_urls));
});})(G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
return (gcclocal.views.crud_views.default_top_panel_view.cljs$core$IFn$_invoke$arity$8 ? gcclocal.views.crud_views.default_top_panel_view.cljs$core$IFn$_invoke$arity$8(G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335) : gcclocal.views.crud_views.default_top_panel_view.call(null,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335));
})()),sablono.interpreter.interpret((function (){var G__52343 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$delete_DASH_disabled_QMARK_,cljs.core.cst$kw$sort_DASH_fn,cljs.core.cst$kw$select_DASH_row_DASH_fn,cljs.core.cst$kw$edit_DASH_mode_QMARK_,cljs.core.cst$kw$start_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_row_DASH_fn,cljs.core.cst$kw$save_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_mode_QMARK_,cljs.core.cst$kw$edit_DASH_disabled_QMARK_,cljs.core.cst$kw$delete_DASH_row_DASH_fn,cljs.core.cst$kw$rows,cljs.core.cst$kw$config_DASH_headers,cljs.core.cst$kw$sorting_DASH_map,cljs.core.cst$kw$add_DASH_disabled_QMARK_,cljs.core.cst$kw$config_DASH_fields,cljs.core.cst$kw$cancel_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$cancel_DASH_add_DASH_fn,cljs.core.cst$kw$selected_DASH_row],[delete_disabled_QMARK_,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52211_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field(cursors,p1__52211_SHARP_,refresh_rows_ch);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52212_SHARP_){
return gcclocal.views.basic_catalog_crud_table.select_row(cursors,p1__52212_SHARP_);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,(function (){var G__52344 = cljs.core.cst$kw$edit_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52344) : cljs.core.deref.call(null,G__52344));
})(),((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row(cursors);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row(cljs.core.cst$kw$add_DASH_row.cljs$core$IFn$_invoke$arity$1(crud_urls),extract_add_row_fn,notify_ch,refresh_rows_ch);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52213_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row(cljs.core.cst$kw$edit_DASH_row.cljs$core$IFn$_invoke$arity$1(crud_urls),p1__52213_SHARP_,extract_edit_row_fn,notify_ch,refresh_rows_ch);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,(function (){var G__52345 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52345) : cljs.core.deref.call(null,G__52345));
})(),edit_disabled_QMARK_,gcclocal.views.basic_catalog_crud_table.click_delete_row,(function (){var G__52346 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52346) : cljs.core.deref.call(null,G__52346));
})(),config_headers,(function (){var G__52347 = cljs.core.cst$kw$sorting.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52347) : cljs.core.deref.call(null,G__52347));
})(),add_disabled_QMARK_,config_fields,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row(cursors);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row(cursors);
});})(attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,(function (){var G__52348 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52348) : cljs.core.deref.call(null,G__52348));
})()]);
return (gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1(G__52343) : gcclocal.views.crud_views.default_crud_table_view.call(null,G__52343));
})()),sablono.interpreter.interpret(((cljs.core.not(delete_disabled_QMARK_))?(function (){var G__52350 = (function (){var or__30387__auto__ = get_name_for_delete_fn;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cljs.core.cst$kw$name;
}
})().call(null,(function (){var G__52353 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52353) : cljs.core.deref.call(null,G__52353));
})());
var G__52351 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1((function (){var G__52354 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52354) : cljs.core.deref.call(null,G__52354));
})());
var G__52352 = ((function (G__52350,G__52351,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__52214_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row(cljs.core.cst$kw$delete_DASH_row.cljs$core$IFn$_invoke$arity$1(crud_urls),p1__52214_SHARP_,notify_ch,refresh_rows_ch);
});})(G__52350,G__52351,attrs52222,G__52287,G__52288,G__52289,current_app_state,is_loading_QMARK_,map__52217,map__52217__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__52218,map__52218__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
;
return (gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3(G__52350,G__52351,G__52352) : gcclocal.views.crud_views.delete_modal_view.call(null,G__52350,G__52351,G__52352));
})():null))], null)));
})();
return React.createElement(G__52287,G__52288,G__52289,G__52290);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"crud-main-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__52355__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__52355 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__52356__i = 0, G__52356__a = new Array(arguments.length -  0);
while (G__52356__i < G__52356__a.length) {G__52356__a[G__52356__i] = arguments[G__52356__i + 0]; ++G__52356__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__52356__a,0);
} 
return G__52355__delegate.call(this,args__42471__auto__);};
G__52355.cljs$lang$maxFixedArity = 0;
G__52355.cljs$lang$applyTo = (function (arglist__52357){
var args__42471__auto__ = cljs.core.seq(arglist__52357);
return G__52355__delegate(args__42471__auto__);
});
G__52355.cljs$core$IFn$_invoke$arity$variadic = G__52355__delegate;
return G__52355;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Инициализация модуля CRUD
 */
gcclocal.views.basic_catalog_crud_table.init = (function gcclocal$views$basic_catalog_crud_table$init(p__52359){
var map__52386 = p__52359;
var map__52386__$1 = ((((!((map__52386 == null)))?((((map__52386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52386):map__52386);
var params = map__52386__$1;
var map__52387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52386__$1,cljs.core.cst$kw$crud_DASH_params);
var map__52387__$1 = ((((!((map__52387 == null)))?((((map__52387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52387):map__52387);
var crud_table_main_config = map__52387__$1;
var config_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$config_DASH_fields);
var config_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$config_DASH_headers);
var add_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$add_DASH_disabled_QMARK_);
var edit_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$edit_DASH_disabled_QMARK_);
var delete_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$delete_DASH_disabled_QMARK_);
var search_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$search_DASH_disabled_QMARK_);
var extract_add_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$extract_DASH_add_DASH_row_DASH_fn);
var extract_edit_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$extract_DASH_edit_DASH_row_DASH_fn);
var get_name_for_delete_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,cljs.core.cst$kw$get_DASH_name_DASH_for_DASH_delete_DASH_fn);
var urls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52386__$1,cljs.core.cst$kw$urls);
var pagesize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52386__$1,cljs.core.cst$kw$pagesize);
var default_sorting_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52386__$1,cljs.core.cst$kw$default_DASH_sorting_DASH_field);
var view_dom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52386__$1,cljs.core.cst$kw$view_DASH_dom);
var cursors = gcclocal.views.basic_catalog_crud_table.default_crud_cursors;
var refresh_rows_ch = gcclocal.comm.channels.init_refresh_rows_ch(((function (cursors,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (reset_type){
return gcclocal.views.basic_catalog_crud_table.refresh_all_rows(cursors,cljs.core.cst$kw$get_DASH_rows.cljs$core$IFn$_invoke$arity$1(urls),reset_type,((function (cursors,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (){
return gcclocal.views.basic_catalog_crud_table.reset_nav_and_filters(cursors);
});})(cursors,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
,((function (cursors,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (){
return gcclocal.views.basic_catalog_crud_table.reset_page(cursors);
});})(cursors,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);
});})(cursors,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);
var change_page_ch = gcclocal.comm.channels.init_change_page_ch(((function (cursors,refresh_rows_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (p1__52358_SHARP_){
return gcclocal.views.basic_catalog_crud_table.change_page(cursors,p1__52358_SHARP_,refresh_rows_ch);
});})(cursors,refresh_rows_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);
var notify_ch = gcclocal.comm.channels.init_notify_ch();
gcclocal.views.basic_catalog_crud_table.init_channels_and_watchers(cursors);

if(cljs.core.truth_(pagesize)){
var G__52390_52412 = cljs.core.cst$kw$pagesize.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52391_52413 = pagesize;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52390_52412,G__52391_52413) : cljs.core.reset_BANG_.call(null,G__52390_52412,G__52391_52413));
} else {
}

if(cljs.core.truth_(default_sorting_field)){
var G__52392_52414 = cljs.core.cst$kw$default_DASH_sort_DASH_field.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52393_52415 = default_sorting_field;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52392_52414,G__52393_52415) : cljs.core.reset_BANG_.call(null,G__52392_52414,G__52393_52415));

var G__52394_52416 = cljs.core.cst$kw$sort_DASH_field.cljs$core$IFn$_invoke$arity$1(cursors);
var G__52395_52417 = default_sorting_field;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52394_52416,G__52395_52417) : cljs.core.reset_BANG_.call(null,G__52394_52416,G__52395_52417));
} else {
}

var c__38096__auto___52418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___52418,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___52418,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (state_52399){
var state_val_52400 = (state_52399[(1)]);
if((state_val_52400 === (1))){
var state_52399__$1 = state_52399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52399__$1,(2),refresh_rows_ch,true);
} else {
if((state_val_52400 === (2))){
var inst_52397 = (state_52399[(2)]);
var state_52399__$1 = state_52399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52399__$1,inst_52397);
} else {
return null;
}
}
});})(c__38096__auto___52418,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
;
return ((function (switch__37982__auto__,c__38096__auto___52418,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function() {
var gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto____0 = (function (){
var statearr_52404 = [null,null,null,null,null,null,null];
(statearr_52404[(0)] = gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto__);

(statearr_52404[(1)] = (1));

return statearr_52404;
});
var gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto____1 = (function (state_52399){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52399);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52405){if((e52405 instanceof Object)){
var ex__37986__auto__ = e52405;
var statearr_52406_52419 = state_52399;
(statearr_52406_52419[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52399);

return cljs.core.cst$kw$recur;
} else {
throw e52405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52420 = state_52399;
state_52399 = G__52420;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto__ = function(state_52399){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto____1.call(this,state_52399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto____0;
gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto____1;
return gcclocal$views$basic_catalog_crud_table$init_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___52418,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
})();
var state__38098__auto__ = (function (){var statearr_52407 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___52418);

return statearr_52407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___52418,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__52386,map__52386__$1,params,map__52387,map__52387__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);


return rum.core.mount((function (){var G__52408 = cursors;
var G__52409 = urls;
var G__52410 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$change_DASH_page_DASH_ch,change_page_ch,cljs.core.cst$kw$refresh_DASH_rows_DASH_ch,refresh_rows_ch,cljs.core.cst$kw$notify_DASH_ch,notify_ch], null);
var G__52411 = crud_table_main_config;
return (gcclocal.views.basic_catalog_crud_table.crud_main_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.views.basic_catalog_crud_table.crud_main_view.cljs$core$IFn$_invoke$arity$4(G__52408,G__52409,G__52410,G__52411) : gcclocal.views.basic_catalog_crud_table.crud_main_view.call(null,G__52408,G__52409,G__52410,G__52411));
})(),view_dom);
});
