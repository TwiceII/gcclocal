// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.views.basic_catalog_crud_table');
goog.require('cljs.core');
goog.require('gcclocal.comm.dom_utils');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.utils');
goog.require('rum.core');
goog.require('gcclocal.comm.pagination');
goog.require('gcclocal.views.crud_views');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.comm.channels');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gcclocal.views.basic_catalog_crud_table.default_app_state !== 'undefined'){
} else {
gcclocal.views.basic_catalog_crud_table.default_app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total-c","total-c",425589837),(0),new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),(10),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203),(1)], null),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"last_edit_datetime",new cljs.core.Keyword(null,"default-field","default-field",-731958863),"last_edit_datetime",new cljs.core.Keyword(null,"desc?","desc?",-713120712),true], null),new cljs.core.Keyword(null,"search-str","search-str",-821246171),""], null),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),true,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),false,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),null], null));
}
gcclocal.views.basic_catalog_crud_table.get_cursor = cljs.core.partial.call(null,rum.core.cursor,gcclocal.views.basic_catalog_crud_table.default_app_state);
gcclocal.views.basic_catalog_crud_table.default_crud_cursors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"currentpage","currentpage",-480118203),new cljs.core.Keyword(null,"search-str","search-str",-821246171),new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276),new cljs.core.Keyword(null,"total-c","total-c",425589837),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"default-sort-field","default-sort-field",1985658709),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),new cljs.core.Keyword(null,"sort-field","sort-field",-941433793)],[gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"search-str","search-str",-821246171)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-c","total-c",425589837)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,cljs.core.PersistentVector.EMPTY),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"default-field","default-field",-731958863)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-row","selected-row",-750259683)], null)),gcclocal.views.basic_catalog_crud_table.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"field","field",-1302436500)], null))]);
/**
 * Вытащить мэп для добавления строки
 */
gcclocal.views.basic_catalog_crud_table.default_extract_add_row = (function gcclocal$views$basic_catalog_crud_table$default_extract_add_row(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),gcclocal.comm.dom_utils.value.call(null,gcclocal.comm.dom_utils.q.call(null,".add-name"))], null);
});
/**
 * Вытащить мэп для редактирования строки
 */
gcclocal.views.basic_catalog_crud_table.default_extract_edit_row = (function gcclocal$views$basic_catalog_crud_table$default_extract_edit_row(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),gcclocal.comm.dom_utils.value.call(null,gcclocal.comm.dom_utils.q.call(null,".edit-name"))], null);
});
/**
 * Установить настройки фильтров/пейджинга/сортировки по умолчанию
 */
gcclocal.views.basic_catalog_crud_table.reset_nav_and_filters = (function gcclocal$views$basic_catalog_crud_table$reset_nav_and_filters(cursors){
var prevpagination = cljs.core.deref.call(null,new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(cursors));
var default_sorting_field = cljs.core.deref.call(null,new cljs.core.Keyword(null,"default-sort-field","default-sort-field",1985658709).cljs$core$IFn$_invoke$arity$1(cursors));
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881).cljs$core$IFn$_invoke$arity$1(cursors),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-c","total-c",425589837),(0),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692).cljs$core$IFn$_invoke$arity$1(prevpagination),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203),(1)], null),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),default_sorting_field,new cljs.core.Keyword(null,"default-field","default-field",-731958863),default_sorting_field,new cljs.core.Keyword(null,"desc?","desc?",-713120712),true], null),new cljs.core.Keyword(null,"search-str","search-str",-821246171),""], null));
});
/**
 * Установить текущую страницу на стартовую
 */
gcclocal.views.basic_catalog_crud_table.reset_page = (function gcclocal$views$basic_catalog_crud_table$reset_page(cursors){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"currentpage","currentpage",-480118203).cljs$core$IFn$_invoke$arity$1(cursors),(1));
});
/**
 * Поменять страницу
 */
gcclocal.views.basic_catalog_crud_table.change_page = (function gcclocal$views$basic_catalog_crud_table$change_page(cursors,page,refresh_rows_ch){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"currentpage","currentpage",-480118203).cljs$core$IFn$_invoke$arity$1(cursors),page);

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39140){
var state_val_39141 = (state_39140[(1)]);
if((state_val_39141 === (1))){
var state_39140__$1 = state_39140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39140__$1,(2),refresh_rows_ch,new cljs.core.Keyword(null,"reset-none","reset-none",2005692792));
} else {
if((state_val_39141 === (2))){
var inst_39138 = (state_39140[(2)]);
var state_39140__$1 = state_39140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39140__$1,inst_39138);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto____0 = (function (){
var statearr_39145 = [null,null,null,null,null,null,null];
(statearr_39145[(0)] = gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto__);

(statearr_39145[(1)] = (1));

return statearr_39145;
});
var gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto____1 = (function (state_39140){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39146){if((e39146 instanceof Object)){
var ex__35015__auto__ = e39146;
var statearr_39147_39149 = state_39140;
(statearr_39147_39149[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39150 = state_39140;
state_39140 = G__39150;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto__ = function(state_39140){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto____1.call(this,state_39140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto____0;
gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto____1;
return gcclocal$views$basic_catalog_crud_table$change_page_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39148 = f__35124__auto__.call(null);
(statearr_39148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
});
/**
 * Выкл. все режимы (добавления, редактирования и т.д.)
 */
gcclocal.views.basic_catalog_crud_table.turn_off_all_modes = (function gcclocal$views$basic_catalog_crud_table$turn_off_all_modes(cursors){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors),false);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191).cljs$core$IFn$_invoke$arity$1(cursors),false);
});
/**
 * Сортировать по полю (при этом установив стр. на 1)
 */
gcclocal.views.basic_catalog_crud_table.sort_field = (function gcclocal$views$basic_catalog_crud_table$sort_field(cursors,sort_field__$1,refresh_rows_ch){
var sort_cursor = new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(cursors);
var desc_QMARK_ = ((cljs.core._EQ_.call(null,sort_field__$1,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sort_cursor))))?cljs.core.not.call(null,new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sort_cursor))):false);
cljs.core.reset_BANG_.call(null,sort_cursor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),sort_field__$1,new cljs.core.Keyword(null,"desc?","desc?",-713120712),desc_QMARK_], null));

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__,desc_QMARK_,sort_cursor){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__,desc_QMARK_,sort_cursor){
return (function (state_39166){
var state_val_39167 = (state_39166[(1)]);
if((state_val_39167 === (1))){
var state_39166__$1 = state_39166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39166__$1,(2),refresh_rows_ch,new cljs.core.Keyword(null,"reset-page","reset-page",-1507843927));
} else {
if((state_val_39167 === (2))){
var inst_39164 = (state_39166[(2)]);
var state_39166__$1 = state_39166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39166__$1,inst_39164);
} else {
return null;
}
}
});})(c__35123__auto__,desc_QMARK_,sort_cursor))
;
return ((function (switch__35011__auto__,c__35123__auto__,desc_QMARK_,sort_cursor){
return (function() {
var gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto____0 = (function (){
var statearr_39171 = [null,null,null,null,null,null,null];
(statearr_39171[(0)] = gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto__);

(statearr_39171[(1)] = (1));

return statearr_39171;
});
var gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto____1 = (function (state_39166){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39172){if((e39172 instanceof Object)){
var ex__35015__auto__ = e39172;
var statearr_39173_39175 = state_39166;
(statearr_39173_39175[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39176 = state_39166;
state_39166 = G__39176;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto__ = function(state_39166){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto____1.call(this,state_39166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto____0;
gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto____1;
return gcclocal$views$basic_catalog_crud_table$sort_field_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__,desc_QMARK_,sort_cursor))
})();
var state__35125__auto__ = (function (){var statearr_39174 = f__35124__auto__.call(null);
(statearr_39174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__,desc_QMARK_,sort_cursor))
);

return c__35123__auto__;
});
/**
 * Искать по поиску (при этом установив стр. на 1)
 */
gcclocal.views.basic_catalog_crud_table.search = (function gcclocal$views$basic_catalog_crud_table$search(cursors,s,refresh_rows_ch){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"search-str","search-str",-821246171).cljs$core$IFn$_invoke$arity$1(cursors),s);

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39192){
var state_val_39193 = (state_39192[(1)]);
if((state_val_39193 === (1))){
var state_39192__$1 = state_39192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39192__$1,(2),refresh_rows_ch,new cljs.core.Keyword(null,"reset-page","reset-page",-1507843927));
} else {
if((state_val_39193 === (2))){
var inst_39190 = (state_39192[(2)]);
var state_39192__$1 = state_39192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39192__$1,inst_39190);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto____0 = (function (){
var statearr_39197 = [null,null,null,null,null,null,null];
(statearr_39197[(0)] = gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto__);

(statearr_39197[(1)] = (1));

return statearr_39197;
});
var gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto____1 = (function (state_39192){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39198){if((e39198 instanceof Object)){
var ex__35015__auto__ = e39198;
var statearr_39199_39201 = state_39192;
(statearr_39199_39201[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39202 = state_39192;
state_39192 = G__39202;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto__ = function(state_39192){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto____1.call(this,state_39192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto____0;
gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto____1;
return gcclocal$views$basic_catalog_crud_table$search_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39200 = f__35124__auto__.call(null);
(statearr_39200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
});
gcclocal.views.basic_catalog_crud_table.add_row = (function gcclocal$views$basic_catalog_crud_table$add_row(url,extract_add_row_fn,notify_ch,refresh_rows_ch){
return gcclocal.comm.amethods.add_row.call(null,url,(function (){var or__30577__auto__ = extract_add_row_fn;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return gcclocal.views.basic_catalog_crud_table.default_extract_add_row;
}
})().call(null),notify_ch,refresh_rows_ch);
});
gcclocal.views.basic_catalog_crud_table.cancel_add_row = (function gcclocal$views$basic_catalog_crud_table$cancel_add_row(cursors){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors),false);
});
/**
 * Выбрать (или очистить) строку
 */
gcclocal.views.basic_catalog_crud_table.select_row = (function gcclocal$views$basic_catalog_crud_table$select_row(cursors,row){
var sel_row_cursor = new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors);
cljs.core.reset_BANG_.call(null,sel_row_cursor,((cljs.core.not_EQ_.call(null,row,cljs.core.deref.call(null,sel_row_cursor)))?row:null));

return gcclocal.views.basic_catalog_crud_table.turn_off_all_modes.call(null,cursors);
});
gcclocal.views.basic_catalog_crud_table.save_edit_row = (function gcclocal$views$basic_catalog_crud_table$save_edit_row(url,row,extract_edit_row_fn,notify_ch,refresh_rows_ch){
return gcclocal.comm.amethods.edit_row.call(null,url,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row),(function (){var or__30577__auto__ = extract_edit_row_fn;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return gcclocal.views.basic_catalog_crud_table.default_extract_edit_row;
}
})().call(null),notify_ch,refresh_rows_ch);
});
gcclocal.views.basic_catalog_crud_table.cancel_edit_row = (function gcclocal$views$basic_catalog_crud_table$cancel_edit_row(cursors){
return gcclocal.views.basic_catalog_crud_table.turn_off_all_modes.call(null,cursors);
});
gcclocal.views.basic_catalog_crud_table.start_edit_row = (function gcclocal$views$basic_catalog_crud_table$start_edit_row(cursors){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191).cljs$core$IFn$_invoke$arity$1(cursors),true);
});
gcclocal.views.basic_catalog_crud_table.click_delete_row = (function gcclocal$views$basic_catalog_crud_table$click_delete_row(row){
return $("#delete-modal").modal("show");
});
gcclocal.views.basic_catalog_crud_table.delete_row = (function gcclocal$views$basic_catalog_crud_table$delete_row(url,row,notify_ch,refresh_rows_ch){
return gcclocal.comm.amethods.delete_row.call(null,url,row,notify_ch,refresh_rows_ch);
});
gcclocal.views.basic_catalog_crud_table.start_add_row = (function gcclocal$views$basic_catalog_crud_table$start_add_row(cursors){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors),true);
});
/**
 * Обновление строк
 */
gcclocal.views.basic_catalog_crud_table.refresh_all_rows = (function gcclocal$views$basic_catalog_crud_table$refresh_all_rows(cursors,url,reset_type,reset_all_fn,reset_page_fn){
var current_state_cursor = new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(cursors);
var loading_cursor = new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276).cljs$core$IFn$_invoke$arity$1(cursors);
var rows_cursor = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cursors);
var count_cursor = new cljs.core.Keyword(null,"total-c","total-c",425589837).cljs$core$IFn$_invoke$arity$1(cursors);
var sort_field = cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"field","field",-1302436500)], null));
var desc_sort_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"desc?","desc?",-713120712)], null));
cljs.core.reset_BANG_.call(null,loading_cursor,true);

var G__39204_39205 = (((reset_type instanceof cljs.core.Keyword))?reset_type.fqn:null);
switch (G__39204_39205) {
case "reset-all":
reset_all_fn.call(null);

break;
case "reset-page":
reset_page_fn.call(null);

break;
default:

}

gcclocal.views.basic_catalog_crud_table.turn_off_all_modes.call(null,cursors);

return gcclocal.comm.amethods.refresh_rows.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page","page",849072397),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203)], null)),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692)], null)),new cljs.core.Keyword(null,"ordering","ordering",1096406705),[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),new cljs.core.Keyword(null,"search","search",1564939822),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"search-str","search-str",-821246171)], null))], null),loading_cursor,rows_cursor,count_cursor);
});
/**
 * Выгрузить в excel
 */
gcclocal.views.basic_catalog_crud_table.load_to_excel = (function gcclocal$views$basic_catalog_crud_table$load_to_excel(cursors,url){
cljs.core.println.call(null,"load-to-excel! ",url);

var current_state_cursor = new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(cursors);
var sort_field = cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"field","field",-1302436500)], null));
var desc_sort_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"desc?","desc?",-713120712)], null));
return window.open([cljs.core.str(url),cljs.core.str("?"),cljs.core.str(gcclocal.comm.utils.params_to_url_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ordering","ordering",1096406705),[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),new cljs.core.Keyword(null,"search","search",1564939822),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"search-str","search-str",-821246171)], null))], null)))].join(''));
});
gcclocal.views.basic_catalog_crud_table.init_channels_and_watchers = (function gcclocal$views$basic_catalog_crud_table$init_channels_and_watchers(cursors){
return cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors),new cljs.core.Keyword(null,"add-mode","add-mode",-787708809),(function (k,cursor,old_v,new_v){
if((cljs.core.not_EQ_.call(null,new_v,old_v)) && (cljs.core._EQ_.call(null,new_v,true))){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors),null);
} else {
return null;
}
}));
});
/**
 * 
 */
gcclocal.views.basic_catalog_crud_table.crud_main_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (cursors,crud_urls,p__39212,p__39213){
var map__39214 = p__39212;
var map__39214__$1 = ((((!((map__39214 == null)))?((((map__39214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39214):map__39214);
var channels = map__39214__$1;
var change_page_ch = cljs.core.get.call(null,map__39214__$1,new cljs.core.Keyword(null,"change-page-ch","change-page-ch",-1181126500));
var refresh_rows_ch = cljs.core.get.call(null,map__39214__$1,new cljs.core.Keyword(null,"refresh-rows-ch","refresh-rows-ch",-755521971));
var notify_ch = cljs.core.get.call(null,map__39214__$1,new cljs.core.Keyword(null,"notify-ch","notify-ch",1093760105));
var map__39215 = p__39213;
var map__39215__$1 = ((((!((map__39215 == null)))?((((map__39215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39215):map__39215);
var config = map__39215__$1;
var search_disabled_QMARK_ = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"search-disabled?","search-disabled?",-282613927));
var load_to_excel_disabled_QMARK_ = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"load-to-excel-disabled?","load-to-excel-disabled?",-27156580));
var extract_add_row_fn = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"extract-add-row-fn","extract-add-row-fn",-812296192));
var extract_edit_row_fn = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"extract-edit-row-fn","extract-edit-row-fn",1288611618));
var delete_disabled_QMARK_ = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173));
var edit_disabled_QMARK_ = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"edit-disabled?","edit-disabled?",-192999315));
var config_headers = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"config-headers","config-headers",2144375121));
var add_disabled_QMARK_ = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908));
var config_fields = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"config-fields","config-fields",1456621207));
var get_name_for_delete_fn = cljs.core.get.call(null,map__39215__$1,new cljs.core.Keyword(null,"get-name-for-delete-fn","get-name-for-delete-fn",-228162504));
var current_app_state = rum.core.react.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(cursors));
var is_loading_QMARK_ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276).cljs$core$IFn$_invoke$arity$1(cursors));
return React.createElement("div",null,React.createElement("div",{"style": {"visibility": (cljs.core.truth_(is_loading_QMARK_)?"visible":"hidden")}, "className": "ui active centered inline loader"}),(function (){var attrs39218 = gcclocal.comm.pagination.pagination_view.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(cursors)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"total-c","total-c",425589837).cljs$core$IFn$_invoke$arity$1(cursors)),change_page_ch);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39218))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","dimmable","basic","segment"], null)], null),attrs39218)):{"className": "ui dimmable basic segment"}),((cljs.core.map_QMARK_.call(null,attrs39218))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.default_top_panel_view.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"search-str","search-str",-821246171).cljs$core$IFn$_invoke$arity$1(cursors)),add_disabled_QMARK_,search_disabled_QMARK_,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors)),((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39207_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search.call(null,cursors,p1__39207_SHARP_,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,load_to_excel_disabled_QMARK_,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.load_to_excel.call(null,cursors,new cljs.core.Keyword(null,"load-to-excel","load-to-excel",278907508).cljs$core$IFn$_invoke$arity$1(crud_urls));
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
)),sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.default_crud_table_view.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173),new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),new cljs.core.Keyword(null,"select-row-fn","select-row-fn",1428247972),new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),new cljs.core.Keyword(null,"start-edit-row-fn","start-edit-row-fn",-1336749305),new cljs.core.Keyword(null,"add-row-fn","add-row-fn",1400597160),new cljs.core.Keyword(null,"save-edit-row-fn","save-edit-row-fn",-1949641335),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),new cljs.core.Keyword(null,"edit-disabled?","edit-disabled?",-192999315),new cljs.core.Keyword(null,"delete-row-fn","delete-row-fn",-1002083091),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),new cljs.core.Keyword(null,"sorting-map","sorting-map",1725768082),new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908),new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),new cljs.core.Keyword(null,"cancel-edit-row-fn","cancel-edit-row-fn",562380475),new cljs.core.Keyword(null,"cancel-add-fn","cancel-add-fn",-106728963),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683)],[delete_disabled_QMARK_,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39208_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field.call(null,cursors,p1__39208_SHARP_,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39209_SHARP_){
return gcclocal.views.basic_catalog_crud_table.select_row.call(null,cursors,p1__39209_SHARP_);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191).cljs$core$IFn$_invoke$arity$1(cursors)),((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row.call(null,new cljs.core.Keyword(null,"add-row","add-row",230649319).cljs$core$IFn$_invoke$arity$1(crud_urls),extract_add_row_fn,notify_ch,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39210_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row.call(null,new cljs.core.Keyword(null,"edit-row","edit-row",1707590674).cljs$core$IFn$_invoke$arity$1(crud_urls),p1__39210_SHARP_,extract_edit_row_fn,notify_ch,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors)),edit_disabled_QMARK_,gcclocal.views.basic_catalog_crud_table.click_delete_row,cljs.core.deref.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cursors)),config_headers,cljs.core.deref.call(null,new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(cursors)),add_disabled_QMARK_,config_fields,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors))]))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,delete_disabled_QMARK_))?gcclocal.views.crud_views.delete_modal_view.call(null,(function (){var or__30577__auto__ = get_name_for_delete_fn;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177);
}
})().call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors))),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors))),((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39211_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349).cljs$core$IFn$_invoke$arity$1(crud_urls),p1__39211_SHARP_,notify_ch,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
):null))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39218),sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.default_top_panel_view.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"search-str","search-str",-821246171).cljs$core$IFn$_invoke$arity$1(cursors)),add_disabled_QMARK_,search_disabled_QMARK_,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors)),((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39207_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search.call(null,cursors,p1__39207_SHARP_,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,load_to_excel_disabled_QMARK_,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.load_to_excel.call(null,cursors,new cljs.core.Keyword(null,"load-to-excel","load-to-excel",278907508).cljs$core$IFn$_invoke$arity$1(crud_urls));
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
)),sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.default_crud_table_view.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173),new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),new cljs.core.Keyword(null,"select-row-fn","select-row-fn",1428247972),new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),new cljs.core.Keyword(null,"start-edit-row-fn","start-edit-row-fn",-1336749305),new cljs.core.Keyword(null,"add-row-fn","add-row-fn",1400597160),new cljs.core.Keyword(null,"save-edit-row-fn","save-edit-row-fn",-1949641335),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),new cljs.core.Keyword(null,"edit-disabled?","edit-disabled?",-192999315),new cljs.core.Keyword(null,"delete-row-fn","delete-row-fn",-1002083091),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),new cljs.core.Keyword(null,"sorting-map","sorting-map",1725768082),new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908),new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),new cljs.core.Keyword(null,"cancel-edit-row-fn","cancel-edit-row-fn",562380475),new cljs.core.Keyword(null,"cancel-add-fn","cancel-add-fn",-106728963),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683)],[delete_disabled_QMARK_,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39208_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field.call(null,cursors,p1__39208_SHARP_,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39209_SHARP_){
return gcclocal.views.basic_catalog_crud_table.select_row.call(null,cursors,p1__39209_SHARP_);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191).cljs$core$IFn$_invoke$arity$1(cursors)),((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row.call(null,new cljs.core.Keyword(null,"add-row","add-row",230649319).cljs$core$IFn$_invoke$arity$1(crud_urls),extract_add_row_fn,notify_ch,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39210_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row.call(null,new cljs.core.Keyword(null,"edit-row","edit-row",1707590674).cljs$core$IFn$_invoke$arity$1(crud_urls),p1__39210_SHARP_,extract_edit_row_fn,notify_ch,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(cursors)),edit_disabled_QMARK_,gcclocal.views.basic_catalog_crud_table.click_delete_row,cljs.core.deref.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cursors)),config_headers,cljs.core.deref.call(null,new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(cursors)),add_disabled_QMARK_,config_fields,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row.call(null,cursors);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors))]))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,delete_disabled_QMARK_))?gcclocal.views.crud_views.delete_modal_view.call(null,(function (){var or__30577__auto__ = get_name_for_delete_fn;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177);
}
})().call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors))),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(cursors))),((function (attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn){
return (function (p1__39211_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349).cljs$core$IFn$_invoke$arity$1(crud_urls),p1__39211_SHARP_,notify_ch,refresh_rows_ch);
});})(attrs39218,current_app_state,is_loading_QMARK_,map__39214,map__39214__$1,channels,change_page_ch,refresh_rows_ch,notify_ch,map__39215,map__39215__$1,config,search_disabled_QMARK_,load_to_excel_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,delete_disabled_QMARK_,edit_disabled_QMARK_,config_headers,add_disabled_QMARK_,config_fields,get_name_for_delete_fn))
):null))], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"crud-main-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39219__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39219 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39220__i = 0, G__39220__a = new Array(arguments.length -  0);
while (G__39220__i < G__39220__a.length) {G__39220__a[G__39220__i] = arguments[G__39220__i + 0]; ++G__39220__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39220__a,0);
} 
return G__39219__delegate.call(this,args__33795__auto__);};
G__39219.cljs$lang$maxFixedArity = 0;
G__39219.cljs$lang$applyTo = (function (arglist__39221){
var args__33795__auto__ = cljs.core.seq(arglist__39221);
return G__39219__delegate(args__33795__auto__);
});
G__39219.cljs$core$IFn$_invoke$arity$variadic = G__39219__delegate;
return G__39219;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Инициализация модуля CRUD
 */
gcclocal.views.basic_catalog_crud_table.init = (function gcclocal$views$basic_catalog_crud_table$init(p__39223){
var map__39240 = p__39223;
var map__39240__$1 = ((((!((map__39240 == null)))?((((map__39240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39240):map__39240);
var params = map__39240__$1;
var map__39241 = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"crud-params","crud-params",-1883534802));
var map__39241__$1 = ((((!((map__39241 == null)))?((((map__39241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39241):map__39241);
var crud_table_main_config = map__39241__$1;
var config_fields = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"config-fields","config-fields",1456621207));
var config_headers = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"config-headers","config-headers",2144375121));
var add_disabled_QMARK_ = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908));
var edit_disabled_QMARK_ = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"edit-disabled?","edit-disabled?",-192999315));
var delete_disabled_QMARK_ = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173));
var search_disabled_QMARK_ = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"search-disabled?","search-disabled?",-282613927));
var extract_add_row_fn = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"extract-add-row-fn","extract-add-row-fn",-812296192));
var extract_edit_row_fn = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"extract-edit-row-fn","extract-edit-row-fn",1288611618));
var get_name_for_delete_fn = cljs.core.get.call(null,map__39241__$1,new cljs.core.Keyword(null,"get-name-for-delete-fn","get-name-for-delete-fn",-228162504));
var urls = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"urls","urls",-190753757));
var pagesize = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692));
var default_sorting_field = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"default-sorting-field","default-sorting-field",1219901093));
var view_dom = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"view-dom","view-dom",-1033239877));
var cursors = gcclocal.views.basic_catalog_crud_table.default_crud_cursors;
var refresh_rows_ch = gcclocal.comm.channels.init_refresh_rows_ch.call(null,((function (cursors,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (reset_type){
return gcclocal.views.basic_catalog_crud_table.refresh_all_rows.call(null,cursors,new cljs.core.Keyword(null,"get-rows","get-rows",-852238305).cljs$core$IFn$_invoke$arity$1(urls),reset_type,((function (cursors,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (){
return gcclocal.views.basic_catalog_crud_table.reset_nav_and_filters.call(null,cursors);
});})(cursors,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
,((function (cursors,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (){
return gcclocal.views.basic_catalog_crud_table.reset_page.call(null,cursors);
});})(cursors,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);
});})(cursors,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);
var change_page_ch = gcclocal.comm.channels.init_change_page_ch.call(null,((function (cursors,refresh_rows_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (p1__39222_SHARP_){
return gcclocal.views.basic_catalog_crud_table.change_page.call(null,cursors,p1__39222_SHARP_,refresh_rows_ch);
});})(cursors,refresh_rows_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);
var notify_ch = gcclocal.comm.channels.init_notify_ch.call(null);
gcclocal.views.basic_catalog_crud_table.init_channels_and_watchers.call(null,cursors);

if(cljs.core.truth_(pagesize)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692).cljs$core$IFn$_invoke$arity$1(cursors),pagesize);
} else {
}

if(cljs.core.truth_(default_sorting_field)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"default-sort-field","default-sort-field",1985658709).cljs$core$IFn$_invoke$arity$1(cursors),default_sorting_field);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793).cljs$core$IFn$_invoke$arity$1(cursors),default_sorting_field);
} else {
}

var c__35123__auto___39256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___39256,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___39256,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function (state_39247){
var state_val_39248 = (state_39247[(1)]);
if((state_val_39248 === (1))){
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39247__$1,(2),refresh_rows_ch,true);
} else {
if((state_val_39248 === (2))){
var inst_39245 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39247__$1,inst_39245);
} else {
return null;
}
}
});})(c__35123__auto___39256,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
;
return ((function (switch__35011__auto__,c__35123__auto___39256,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom){
return (function() {
var gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto__ = null;
var gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto____0 = (function (){
var statearr_39252 = [null,null,null,null,null,null,null];
(statearr_39252[(0)] = gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto__);

(statearr_39252[(1)] = (1));

return statearr_39252;
});
var gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto____1 = (function (state_39247){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39253){if((e39253 instanceof Object)){
var ex__35015__auto__ = e39253;
var statearr_39254_39257 = state_39247;
(statearr_39254_39257[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39258 = state_39247;
state_39247 = G__39258;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto__ = function(state_39247){
switch(arguments.length){
case 0:
return gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto____1.call(this,state_39247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto____0;
gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto____1;
return gcclocal$views$basic_catalog_crud_table$init_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___39256,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
})();
var state__35125__auto__ = (function (){var statearr_39255 = f__35124__auto__.call(null);
(statearr_39255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___39256);

return statearr_39255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___39256,cursors,refresh_rows_ch,change_page_ch,notify_ch,map__39240,map__39240__$1,params,map__39241,map__39241__$1,crud_table_main_config,config_fields,config_headers,add_disabled_QMARK_,edit_disabled_QMARK_,delete_disabled_QMARK_,search_disabled_QMARK_,extract_add_row_fn,extract_edit_row_fn,get_name_for_delete_fn,urls,pagesize,default_sorting_field,view_dom))
);


return rum.core.mount.call(null,gcclocal.views.basic_catalog_crud_table.crud_main_view.call(null,cursors,urls,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"change-page-ch","change-page-ch",-1181126500),change_page_ch,new cljs.core.Keyword(null,"refresh-rows-ch","refresh-rows-ch",-755521971),refresh_rows_ch,new cljs.core.Keyword(null,"notify-ch","notify-ch",1093760105),notify_ch], null),crud_table_main_config),view_dom);
});

//# sourceMappingURL=basic_catalog_crud_table.js.map