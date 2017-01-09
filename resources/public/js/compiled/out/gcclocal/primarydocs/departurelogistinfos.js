// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.primarydocs.departurelogistinfos');
goog.require('cljs.core');
goog.require('gcclocal.comm.dom_utils');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.utils');
goog.require('rum.core');
goog.require('gcclocal.comm.pagination');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.views.crud_views');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.common');
goog.require('gcclocal.comm.channels');
goog.require('gcclocal.views.crud_fields');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gcclocal.primarydocs.departurelogistinfos.app_state !== 'undefined'){
} else {
gcclocal.primarydocs.departurelogistinfos.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173),new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276),new cljs.core.Keyword(null,"total-c","total-c",425589837),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908),new cljs.core.Keyword(null,"show-mode","show-mode",1909285623),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683)],[false,false,false,true,(0),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),(10),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203),(1)], null),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"shipping_date",new cljs.core.Keyword(null,"default-field","default-field",-731958863),"shipping_date",new cljs.core.Keyword(null,"desc?","desc?",-713120712),true], null),new cljs.core.Keyword(null,"search-str","search-str",-821246171),""], null),false,"active",null]));
}
if(typeof gcclocal.primarydocs.departurelogistinfos.test_sync_data !== 'undefined'){
} else {
gcclocal.primarydocs.departurelogistinfos.test_sync_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"newdlis","newdlis",-1967773122),null,new cljs.core.Keyword(null,"edit-new-dli?","edit-new-dli?",1894976601),false,new cljs.core.Keyword(null,"selected-type","selected-type",97396872),null], null));
}
gcclocal.primarydocs.departurelogistinfos.urls = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),new cljs.core.Keyword(null,"add-row","add-row",230649319),new cljs.core.Keyword(null,"add-newsync","add-newsync",1420749960),new cljs.core.Keyword(null,"deny-newsync","deny-newsync",1301719560),new cljs.core.Keyword(null,"finish-row","finish-row",-1733405488),new cljs.core.Keyword(null,"edit-row","edit-row",1707590674),new cljs.core.Keyword(null,"load-to-excel","load-to-excel",278907508),new cljs.core.Keyword(null,"unfinish-row","unfinish-row",-1704748930),new cljs.core.Keyword(null,"get-newsync","get-newsync",-103334050),new cljs.core.Keyword(null,"get-rows","get-rows",-852238305)],["/primarydocs/departurelogistinfos/delete","/primarydocs/departurelogistinfos/add","/primarydocs/addnewsync","/primarydocs/denynewsync","/primarydocs/departurelogistinfos/finish","/primarydocs/departurelogistinfos/edit","/primarydocs/departurelogistinfos/excel","/primarydocs/departurelogistinfos/unfinish","/primarydocs/newsyncdlis","/primarydocs/departurelogistinfos/paging"]);
gcclocal.primarydocs.departurelogistinfos.get_cursor = cljs.core.partial.call(null,rum.core.cursor,gcclocal.primarydocs.departurelogistinfos.app_state);
gcclocal.primarydocs.departurelogistinfos.cursors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203),new cljs.core.Keyword(null,"search-str","search-str",-821246171),new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),new cljs.core.Keyword(null,"desc-sort?","desc-sort?",-649370741),new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276),new cljs.core.Keyword(null,"total-c","total-c",425589837),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908),new cljs.core.Keyword(null,"default-sort-field","default-sort-field",1985658709),new cljs.core.Keyword(null,"show-mode","show-mode",1909285623),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),new cljs.core.Keyword(null,"sort-field","sort-field",-941433793)],[gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"search-str","search-str",-821246171)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"desc?","desc?",-713120712)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-c","total-c",425589837)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,cljs.core.PersistentVector.EMPTY),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"default-field","default-field",-731958863)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-mode","show-mode",1909285623)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-row","selected-row",-750259683)], null)),gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"field","field",-1302436500)], null))]);
gcclocal.primarydocs.departurelogistinfos.clients_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.departurelogistinfos.stations_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.departurelogistinfos.stationtraveltimes_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.departurelogistinfos.suppliers_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.departurelogistinfos.clientapplications_list = cljs.core.atom.call(null,null);
/**
 * Обновить все строки (с учетом режима: активные, заверш., все)
 */
gcclocal.primarydocs.departurelogistinfos.refresh_all_dli_rows = (function gcclocal$primarydocs$departurelogistinfos$refresh_all_dli_rows(reset_type){
var current_state_cursor = new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var loading_cursor = new cljs.core.Keyword(null,"loading-rows?","loading-rows?",-1757288276).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var rows_cursor = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var count_cursor = new cljs.core.Keyword(null,"total-c","total-c",425589837).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var show_mode = cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-mode","show-mode",1909285623)], null));
var sort_field = cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"field","field",-1302436500)], null));
var desc_sort_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"desc?","desc?",-713120712)], null));
cljs.core.reset_BANG_.call(null,loading_cursor,true);

var G__39414_39415 = (((reset_type instanceof cljs.core.Keyword))?reset_type.fqn:null);
switch (G__39414_39415) {
case "reset-all":
gcclocal.views.basic_catalog_crud_table.reset_nav_and_filters.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);

break;
case "reset-page":
gcclocal.views.basic_catalog_crud_table.reset_page.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);

break;
default:

}

gcclocal.views.basic_catalog_crud_table.turn_off_all_modes.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);

gcclocal.comm.utils.get_json.call(null,new cljs.core.Keyword(null,"get-newsync","get-newsync",-103334050).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),cljs.core.PersistentArrayMap.EMPTY,((function (current_state_cursor,loading_cursor,rows_cursor,count_cursor,show_mode,sort_field,desc_sort_QMARK_){
return (function (response){
return cljs.core.reset_BANG_.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newdlis","newdlis",-1967773122)], null)),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(response));
});})(current_state_cursor,loading_cursor,rows_cursor,count_cursor,show_mode,sort_field,desc_sort_QMARK_))
);

gcclocal.comm.amethods.refresh_rows.call(null,new cljs.core.Keyword(null,"get-rows","get-rows",-852238305).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"currentpage","currentpage",-480118203)], null)),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692)], null)),new cljs.core.Keyword(null,"ordering","ordering",1096406705),[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),new cljs.core.Keyword(null,"showmode","showmode",-1293330688),show_mode,new cljs.core.Keyword(null,"search","search",1564939822),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"search-str","search-str",-821246171)], null))], null),loading_cursor,rows_cursor,count_cursor);

return gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.departurelogistinfos.stations_list,"/catalogs/stations/all");
});
gcclocal.primarydocs.departurelogistinfos.notify_ch = gcclocal.comm.channels.init_notify_ch.call(null);
gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch = gcclocal.comm.channels.init_refresh_rows_ch.call(null,gcclocal.primarydocs.departurelogistinfos.refresh_all_dli_rows);
gcclocal.primarydocs.departurelogistinfos.change_page_ch = gcclocal.comm.channels.init_change_page_ch.call(null,(function (p1__39417_SHARP_){
return gcclocal.views.basic_catalog_crud_table.change_page.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39417_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
}));
gcclocal.primarydocs.departurelogistinfos.change_show_mode = (function gcclocal$primarydocs$departurelogistinfos$change_show_mode(show_mode){

if(cljs.core.not_EQ_.call(null,show_mode,cljs.core.deref.call(null,new cljs.core.Keyword(null,"show-mode","show-mode",1909285623).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"show-mode","show-mode",1909285623).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors),show_mode);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors),null);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors),cljs.core._EQ_.call(null,show_mode,"finished"));

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39433){
var state_val_39434 = (state_39433[(1)]);
if((state_val_39434 === (1))){
var state_39433__$1 = state_39433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39433__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,new cljs.core.Keyword(null,"reset-page","reset-page",-1507843927));
} else {
if((state_val_39434 === (2))){
var inst_39431 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39433__$1,inst_39431);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto____0 = (function (){
var statearr_39438 = [null,null,null,null,null,null,null];
(statearr_39438[(0)] = gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto__);

(statearr_39438[(1)] = (1));

return statearr_39438;
});
var gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto____1 = (function (state_39433){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39439){if((e39439 instanceof Object)){
var ex__35015__auto__ = e39439;
var statearr_39440_39442 = state_39433;
(statearr_39440_39442[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39443 = state_39433;
state_39433 = G__39443;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto__ = function(state_39433){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto____1.call(this,state_39433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39441 = f__35124__auto__.call(null);
(statearr_39441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
} else {
return null;
}
});
/**
 * Завершить поставку в пути
 */
gcclocal.primarydocs.departurelogistinfos.finish_row = (function gcclocal$primarydocs$departurelogistinfos$finish_row(id){
return gcclocal.comm.utils.post_json_with_success_check.call(null,new cljs.core.Keyword(null,"finish-row","finish-row",-1733405488).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (_){
var c__35123__auto___39532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___39532){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___39532){
return (function (state_39494){
var state_val_39495 = (state_39494[(1)]);
if((state_val_39495 === (1))){
var inst_39488 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39489 = ["\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430","success"];
var inst_39490 = cljs.core.PersistentHashMap.fromArrays(inst_39488,inst_39489);
var state_39494__$1 = state_39494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39494__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39490);
} else {
if((state_val_39495 === (2))){
var inst_39492 = (state_39494[(2)]);
var state_39494__$1 = state_39494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39494__$1,inst_39492);
} else {
return null;
}
}
});})(c__35123__auto___39532))
;
return ((function (switch__35011__auto__,c__35123__auto___39532){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0 = (function (){
var statearr_39499 = [null,null,null,null,null,null,null];
(statearr_39499[(0)] = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__);

(statearr_39499[(1)] = (1));

return statearr_39499;
});
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1 = (function (state_39494){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39500){if((e39500 instanceof Object)){
var ex__35015__auto__ = e39500;
var statearr_39501_39533 = state_39494;
(statearr_39501_39533[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39534 = state_39494;
state_39494 = G__39534;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__ = function(state_39494){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1.call(this,state_39494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___39532))
})();
var state__35125__auto__ = (function (){var statearr_39502 = f__35124__auto__.call(null);
(statearr_39502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___39532);

return statearr_39502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___39532))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39506){
var state_val_39507 = (state_39506[(1)]);
if((state_val_39507 === (1))){
var state_39506__$1 = state_39506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39506__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,new cljs.core.Keyword(null,"reset-none","reset-none",2005692792));
} else {
if((state_val_39507 === (2))){
var inst_39504 = (state_39506[(2)]);
var state_39506__$1 = state_39506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39506__$1,inst_39504);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0 = (function (){
var statearr_39511 = [null,null,null,null,null,null,null];
(statearr_39511[(0)] = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__);

(statearr_39511[(1)] = (1));

return statearr_39511;
});
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1 = (function (state_39506){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39512){if((e39512 instanceof Object)){
var ex__35015__auto__ = e39512;
var statearr_39513_39535 = state_39506;
(statearr_39513_39535[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39536 = state_39506;
state_39506 = G__39536;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__ = function(state_39506){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1.call(this,state_39506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39514 = f__35124__auto__.call(null);
(statearr_39514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39523){
var state_val_39524 = (state_39523[(1)]);
if((state_val_39524 === (1))){
var inst_39515 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39516 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_39517 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_39516);
var inst_39518 = [inst_39517,"error"];
var inst_39519 = cljs.core.PersistentHashMap.fromArrays(inst_39515,inst_39518);
var state_39523__$1 = state_39523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39523__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39519);
} else {
if((state_val_39524 === (2))){
var inst_39521 = (state_39523[(2)]);
var state_39523__$1 = state_39523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39523__$1,inst_39521);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0 = (function (){
var statearr_39528 = [null,null,null,null,null,null,null];
(statearr_39528[(0)] = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__);

(statearr_39528[(1)] = (1));

return statearr_39528;
});
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1 = (function (state_39523){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39529){if((e39529 instanceof Object)){
var ex__35015__auto__ = e39529;
var statearr_39530_39537 = state_39523;
(statearr_39530_39537[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39538 = state_39523;
state_39523 = G__39538;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__ = function(state_39523){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1.call(this,state_39523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39531 = f__35124__auto__.call(null);
(statearr_39531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Отменить завершение поставки в пути
 */
gcclocal.primarydocs.departurelogistinfos.unfinish_row = (function gcclocal$primarydocs$departurelogistinfos$unfinish_row(id){
return gcclocal.comm.utils.post_json_with_success_check.call(null,new cljs.core.Keyword(null,"unfinish-row","unfinish-row",-1704748930).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (_){
var c__35123__auto___39627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___39627){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___39627){
return (function (state_39589){
var state_val_39590 = (state_39589[(1)]);
if((state_val_39590 === (1))){
var inst_39583 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39584 = ["\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E","success"];
var inst_39585 = cljs.core.PersistentHashMap.fromArrays(inst_39583,inst_39584);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39589__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39585);
} else {
if((state_val_39590 === (2))){
var inst_39587 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39589__$1,inst_39587);
} else {
return null;
}
}
});})(c__35123__auto___39627))
;
return ((function (switch__35011__auto__,c__35123__auto___39627){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0 = (function (){
var statearr_39594 = [null,null,null,null,null,null,null];
(statearr_39594[(0)] = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__);

(statearr_39594[(1)] = (1));

return statearr_39594;
});
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1 = (function (state_39589){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39595){if((e39595 instanceof Object)){
var ex__35015__auto__ = e39595;
var statearr_39596_39628 = state_39589;
(statearr_39596_39628[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39629 = state_39589;
state_39589 = G__39629;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__ = function(state_39589){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1.call(this,state_39589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___39627))
})();
var state__35125__auto__ = (function (){var statearr_39597 = f__35124__auto__.call(null);
(statearr_39597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___39627);

return statearr_39597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___39627))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39601){
var state_val_39602 = (state_39601[(1)]);
if((state_val_39602 === (1))){
var state_39601__$1 = state_39601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39601__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,new cljs.core.Keyword(null,"reset-none","reset-none",2005692792));
} else {
if((state_val_39602 === (2))){
var inst_39599 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39601__$1,inst_39599);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0 = (function (){
var statearr_39606 = [null,null,null,null,null,null,null];
(statearr_39606[(0)] = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__);

(statearr_39606[(1)] = (1));

return statearr_39606;
});
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1 = (function (state_39601){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39607){if((e39607 instanceof Object)){
var ex__35015__auto__ = e39607;
var statearr_39608_39630 = state_39601;
(statearr_39608_39630[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39631 = state_39601;
state_39601 = G__39631;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__ = function(state_39601){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1.call(this,state_39601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39609 = f__35124__auto__.call(null);
(statearr_39609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39618){
var state_val_39619 = (state_39618[(1)]);
if((state_val_39619 === (1))){
var inst_39610 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39611 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_39612 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_39611);
var inst_39613 = [inst_39612,"error"];
var inst_39614 = cljs.core.PersistentHashMap.fromArrays(inst_39610,inst_39613);
var state_39618__$1 = state_39618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39618__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39614);
} else {
if((state_val_39619 === (2))){
var inst_39616 = (state_39618[(2)]);
var state_39618__$1 = state_39618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39618__$1,inst_39616);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0 = (function (){
var statearr_39623 = [null,null,null,null,null,null,null];
(statearr_39623[(0)] = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__);

(statearr_39623[(1)] = (1));

return statearr_39623;
});
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1 = (function (state_39618){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39624){if((e39624 instanceof Object)){
var ex__35015__auto__ = e39624;
var statearr_39625_39632 = state_39618;
(statearr_39625_39632[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39633 = state_39618;
state_39618 = G__39633;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__ = function(state_39618){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1.call(this,state_39618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39626 = f__35124__auto__.call(null);
(statearr_39626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Выбрать строку из новых, ожидающих подтверждения
 */
gcclocal.primarydocs.departurelogistinfos.select_new_dli_row = (function gcclocal$primarydocs$departurelogistinfos$select_new_dli_row(newdli){
var sel_row_cursor = new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var differs_QMARK_ = cljs.core.not_EQ_.call(null,newdli,cljs.core.deref.call(null,sel_row_cursor));
cljs.core.reset_BANG_.call(null,sel_row_cursor,((differs_QMARK_)?newdli:null));

cljs.core.reset_BANG_.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-new-dli?","edit-new-dli?",1894976601)], null)),differs_QMARK_);

cljs.core.reset_BANG_.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-type","selected-type",97396872)], null)),((differs_QMARK_)?new cljs.core.Keyword(null,"newdli","newdli",820739328):null));

return gcclocal.views.basic_catalog_crud_table.turn_off_all_modes.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});
/**
 * Кастомный метод для выделения строки
 */
gcclocal.primarydocs.departurelogistinfos.select_row_custom = (function gcclocal$primarydocs$departurelogistinfos$select_row_custom(c,r){
var sel_row_cursor = new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var differs_QMARK_ = cljs.core.not_EQ_.call(null,r,cljs.core.deref.call(null,sel_row_cursor));
gcclocal.views.basic_catalog_crud_table.select_row.call(null,c,r);

cljs.core.reset_BANG_.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-type","selected-type",97396872)], null)),((differs_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521):null));

return cljs.core.reset_BANG_.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-new-dli?","edit-new-dli?",1894976601)], null)),false);
});
/**
 * Подтвердить новую поставку
 */
gcclocal.primarydocs.departurelogistinfos.confirm_newsyncdli = (function gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli(newdli){
var newdlimap = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from_station_id","from_station_id",-1688894172),new cljs.core.Keyword(null,"to_station_id","to_station_id",1471355938),new cljs.core.Keyword(null,"travel_time","travel_time",1560517198),new cljs.core.Keyword(null,"client_application_id","client_application_id",1152236098),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"supplier_id","supplier_id",2051817331),new cljs.core.Keyword(null,"cost","cost",-1094861735),new cljs.core.Keyword(null,"wagon_amount","wagon_amount",-565689724)], null),"syncadd"),new cljs.core.Keyword(null,"newdli_id","newdli_id",-1729251714),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429),new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005),new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"from_station_code","from_station_code",-504891585),new cljs.core.Keyword(null,"from_station_code","from_station_code",-504891585).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"from_station_name","from_station_name",-1942790363),new cljs.core.Keyword(null,"from_station_name","from_station_name",-1942790363).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"to_station_code","to_station_code",-514455524),new cljs.core.Keyword(null,"to_station_code","to_station_code",-514455524).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"to_station_name","to_station_name",390308308),new cljs.core.Keyword(null,"to_station_name","to_station_name",390308308).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"current_station_code","current_station_code",27852311),new cljs.core.Keyword(null,"current_station_code","current_station_code",27852311).cljs$core$IFn$_invoke$arity$1(newdli)),new cljs.core.Keyword(null,"current_station_name","current_station_name",-1170084568),new cljs.core.Keyword(null,"current_station_name","current_station_name",-1170084568).cljs$core$IFn$_invoke$arity$1(newdli));
cljs.core.println.call(null,"confirm");

cljs.core.println.call(null,newdlimap);

return gcclocal.comm.utils.post_json_with_success_check.call(null,"/primarydocs/addnewsync",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),newdlimap], null),((function (newdlimap){
return (function (_){
var c__35123__auto___39722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___39722,newdlimap){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___39722,newdlimap){
return (function (state_39684){
var state_val_39685 = (state_39684[(1)]);
if((state_val_39685 === (1))){
var inst_39678 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39679 = ["\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430","success"];
var inst_39680 = cljs.core.PersistentHashMap.fromArrays(inst_39678,inst_39679);
var state_39684__$1 = state_39684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39684__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39680);
} else {
if((state_val_39685 === (2))){
var inst_39682 = (state_39684[(2)]);
var state_39684__$1 = state_39684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39684__$1,inst_39682);
} else {
return null;
}
}
});})(c__35123__auto___39722,newdlimap))
;
return ((function (switch__35011__auto__,c__35123__auto___39722,newdlimap){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0 = (function (){
var statearr_39689 = [null,null,null,null,null,null,null];
(statearr_39689[(0)] = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__);

(statearr_39689[(1)] = (1));

return statearr_39689;
});
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1 = (function (state_39684){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39690){if((e39690 instanceof Object)){
var ex__35015__auto__ = e39690;
var statearr_39691_39723 = state_39684;
(statearr_39691_39723[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39724 = state_39684;
state_39684 = G__39724;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__ = function(state_39684){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1.call(this,state_39684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___39722,newdlimap))
})();
var state__35125__auto__ = (function (){var statearr_39692 = f__35124__auto__.call(null);
(statearr_39692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___39722);

return statearr_39692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___39722,newdlimap))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__,newdlimap){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__,newdlimap){
return (function (state_39696){
var state_val_39697 = (state_39696[(1)]);
if((state_val_39697 === (1))){
var state_39696__$1 = state_39696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39696__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,new cljs.core.Keyword(null,"reset-page","reset-page",-1507843927));
} else {
if((state_val_39697 === (2))){
var inst_39694 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39696__$1,inst_39694);
} else {
return null;
}
}
});})(c__35123__auto__,newdlimap))
;
return ((function (switch__35011__auto__,c__35123__auto__,newdlimap){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0 = (function (){
var statearr_39701 = [null,null,null,null,null,null,null];
(statearr_39701[(0)] = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__);

(statearr_39701[(1)] = (1));

return statearr_39701;
});
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1 = (function (state_39696){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39702){if((e39702 instanceof Object)){
var ex__35015__auto__ = e39702;
var statearr_39703_39725 = state_39696;
(statearr_39703_39725[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39726 = state_39696;
state_39696 = G__39726;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__ = function(state_39696){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1.call(this,state_39696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__,newdlimap))
})();
var state__35125__auto__ = (function (){var statearr_39704 = f__35124__auto__.call(null);
(statearr_39704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__,newdlimap))
);

return c__35123__auto__;
});})(newdlimap))
,((function (newdlimap){
return (function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__,newdlimap){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__,newdlimap){
return (function (state_39713){
var state_val_39714 = (state_39713[(1)]);
if((state_val_39714 === (1))){
var inst_39705 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39706 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_39707 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_39706);
var inst_39708 = [inst_39707,"error"];
var inst_39709 = cljs.core.PersistentHashMap.fromArrays(inst_39705,inst_39708);
var state_39713__$1 = state_39713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39713__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39709);
} else {
if((state_val_39714 === (2))){
var inst_39711 = (state_39713[(2)]);
var state_39713__$1 = state_39713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39713__$1,inst_39711);
} else {
return null;
}
}
});})(c__35123__auto__,newdlimap))
;
return ((function (switch__35011__auto__,c__35123__auto__,newdlimap){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0 = (function (){
var statearr_39718 = [null,null,null,null,null,null,null];
(statearr_39718[(0)] = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__);

(statearr_39718[(1)] = (1));

return statearr_39718;
});
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1 = (function (state_39713){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39719){if((e39719 instanceof Object)){
var ex__35015__auto__ = e39719;
var statearr_39720_39727 = state_39713;
(statearr_39720_39727[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39728 = state_39713;
state_39713 = G__39728;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__ = function(state_39713){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1.call(this,state_39713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__,newdlimap))
})();
var state__35125__auto__ = (function (){var statearr_39721 = f__35124__auto__.call(null);
(statearr_39721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__,newdlimap))
);

return c__35123__auto__;
});})(newdlimap))
);
});
/**
 * Отменить новую поставку (удалить)
 */
gcclocal.primarydocs.departurelogistinfos.delete_newsyncdli = (function gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli(newdli_id){
cljs.core.println.call(null,"deleting ",newdli_id);

return gcclocal.comm.utils.post_json_with_success_check.call(null,"/primarydocs/deletenewsync",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),newdli_id], null),(function (_){
var c__35123__auto___39817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___39817){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___39817){
return (function (state_39779){
var state_val_39780 = (state_39779[(1)]);
if((state_val_39780 === (1))){
var inst_39773 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39774 = ["\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430","success"];
var inst_39775 = cljs.core.PersistentHashMap.fromArrays(inst_39773,inst_39774);
var state_39779__$1 = state_39779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39779__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39775);
} else {
if((state_val_39780 === (2))){
var inst_39777 = (state_39779[(2)]);
var state_39779__$1 = state_39779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39779__$1,inst_39777);
} else {
return null;
}
}
});})(c__35123__auto___39817))
;
return ((function (switch__35011__auto__,c__35123__auto___39817){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0 = (function (){
var statearr_39784 = [null,null,null,null,null,null,null];
(statearr_39784[(0)] = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__);

(statearr_39784[(1)] = (1));

return statearr_39784;
});
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1 = (function (state_39779){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39785){if((e39785 instanceof Object)){
var ex__35015__auto__ = e39785;
var statearr_39786_39818 = state_39779;
(statearr_39786_39818[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39819 = state_39779;
state_39779 = G__39819;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__ = function(state_39779){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1.call(this,state_39779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___39817))
})();
var state__35125__auto__ = (function (){var statearr_39787 = f__35124__auto__.call(null);
(statearr_39787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___39817);

return statearr_39787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___39817))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39791){
var state_val_39792 = (state_39791[(1)]);
if((state_val_39792 === (1))){
var state_39791__$1 = state_39791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39791__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,new cljs.core.Keyword(null,"reset-none","reset-none",2005692792));
} else {
if((state_val_39792 === (2))){
var inst_39789 = (state_39791[(2)]);
var state_39791__$1 = state_39791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39791__$1,inst_39789);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0 = (function (){
var statearr_39796 = [null,null,null,null,null,null,null];
(statearr_39796[(0)] = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__);

(statearr_39796[(1)] = (1));

return statearr_39796;
});
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1 = (function (state_39791){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39797){if((e39797 instanceof Object)){
var ex__35015__auto__ = e39797;
var statearr_39798_39820 = state_39791;
(statearr_39798_39820[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39821 = state_39791;
state_39791 = G__39821;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__ = function(state_39791){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1.call(this,state_39791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39799 = f__35124__auto__.call(null);
(statearr_39799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39808){
var state_val_39809 = (state_39808[(1)]);
if((state_val_39809 === (1))){
var inst_39800 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_39801 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_39802 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_39801);
var inst_39803 = [inst_39802,"error"];
var inst_39804 = cljs.core.PersistentHashMap.fromArrays(inst_39800,inst_39803);
var state_39808__$1 = state_39808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39808__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_39804);
} else {
if((state_val_39809 === (2))){
var inst_39806 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39808__$1,inst_39806);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0 = (function (){
var statearr_39813 = [null,null,null,null,null,null,null];
(statearr_39813[(0)] = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__);

(statearr_39813[(1)] = (1));

return statearr_39813;
});
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1 = (function (state_39808){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39814){if((e39814 instanceof Object)){
var ex__35015__auto__ = e39814;
var statearr_39815_39822 = state_39808;
(statearr_39815_39822[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39823 = state_39808;
state_39808 = G__39823;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__ = function(state_39808){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1.call(this,state_39808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39816 = f__35124__auto__.call(null);
(statearr_39816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
gcclocal.primarydocs.departurelogistinfos.extract_add_row = (function gcclocal$primarydocs$departurelogistinfos$extract_add_row(){
return gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005),new cljs.core.Keyword(null,"client_application_id","client_application_id",1152236098),new cljs.core.Keyword(null,"supplier_id","supplier_id",2051817331),new cljs.core.Keyword(null,"from_station_id","from_station_id",-1688894172),new cljs.core.Keyword(null,"to_station_id","to_station_id",1471355938),new cljs.core.Keyword(null,"station_status_id","station_status_id",1154601623),new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429),new cljs.core.Keyword(null,"arrival_date","arrival_date",166572874),new cljs.core.Keyword(null,"travel_time","travel_time",1560517198),new cljs.core.Keyword(null,"cost","cost",-1094861735)], null),"add");
});
gcclocal.primarydocs.departurelogistinfos.extract_edit_row = (function gcclocal$primarydocs$departurelogistinfos$extract_edit_row(){
return gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005),new cljs.core.Keyword(null,"client_application_id","client_application_id",1152236098),new cljs.core.Keyword(null,"supplier_id","supplier_id",2051817331),new cljs.core.Keyword(null,"from_station_id","from_station_id",-1688894172),new cljs.core.Keyword(null,"to_station_id","to_station_id",1471355938),new cljs.core.Keyword(null,"station_status_id","station_status_id",1154601623),new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429),new cljs.core.Keyword(null,"arrival_date","arrival_date",166572874),new cljs.core.Keyword(null,"travel_time","travel_time",1560517198),new cljs.core.Keyword(null,"cost","cost",-1094861735)], null),"edit");
});
gcclocal.primarydocs.departurelogistinfos.find_travel_time = (function gcclocal$primarydocs$departurelogistinfos$find_travel_time(station_id){
return cljs.core.get.call(null,gcclocal.comm.utils.find_some.call(null,(function (p1__39824_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"station_id","station_id",-1476260078).cljs$core$IFn$_invoke$arity$1(p1__39824_SHARP_),cljs.reader.read_string.call(null,station_id));
}),cljs.core.deref.call(null,gcclocal.primarydocs.departurelogistinfos.stationtraveltimes_list)),new cljs.core.Keyword(null,"days_in_travel","days_in_travel",-1574982965));
});
/**
 * Выгрузить в excel
 */
gcclocal.primarydocs.departurelogistinfos.load_to_excel = (function gcclocal$primarydocs$departurelogistinfos$load_to_excel(){
var url = new cljs.core.Keyword(null,"load-to-excel","load-to-excel",278907508).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls);
cljs.core.println.call(null,"load-to-excel! ",url);

var current_state_cursor = new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var sort_field = cljs.core.deref.call(null,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors));
var desc_sort_QMARK_ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"desc-sort?","desc-sort?",-649370741).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors));
var show_mode = cljs.core.deref.call(null,new cljs.core.Keyword(null,"show-mode","show-mode",1909285623).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors));
return window.open([cljs.core.str(url),cljs.core.str("?"),cljs.core.str(gcclocal.comm.utils.params_to_url_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ordering","ordering",1096406705),[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),new cljs.core.Keyword(null,"search","search",1564939822),cljs.core.get_in.call(null,cljs.core.deref.call(null,current_state_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-and-filters","nav-and-filters",1197032881),new cljs.core.Keyword(null,"search-str","search-str",-821246171)], null)),new cljs.core.Keyword(null,"showmode","showmode",-1293330688),show_mode], null)))].join(''));
});
gcclocal.primarydocs.departurelogistinfos.config_headers = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440.",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"shipping_date"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041D\u043E\u043C\u0435\u0440 \u0432\u0430\u0433\u043E\u043D\u0430",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"wagon_number"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0442.\u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",new cljs.core.Keyword(null,"wideness","wideness",926863517),"two",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"from_station"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0442.\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",new cljs.core.Keyword(null,"wideness","wideness",926863517),"two",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"to_station"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0442\u0430\u0442\u0443\u0441 (\u0442\u0435\u043A.\u0441\u0442\u0430\u043D\u0446\u0438\u044F)",new cljs.core.Keyword(null,"wideness","wideness",926863517),"two",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0414\u0430\u0442\u0430 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"arrival_date"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0412\u0440\u0435\u043C\u044F \u0432 \u043F\u0443\u0442\u0438 \u0434\u043D (\u043E\u0436\u0438\u0434.)",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"travel_time"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0412\u0440\u0435\u043C\u044F \u0432 \u043F\u0443\u0442\u0438(\u0444\u0430\u043A\u0442.)",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"days_fact"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0417\u0430\u044F\u0432\u043A\u0430",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"client_application"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041A\u043B\u0438\u0435\u043D\u0442",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"client_name"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",new cljs.core.Keyword(null,"wideness","wideness",926863517),"two",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"supplier_name"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"cost"], null)], null);
gcclocal.primarydocs.departurelogistinfos.config_fields = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.date_with_calendar_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.text_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"from_station_id","from_station_id",-1688894172),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.stations_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__39825_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39825_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"to_station_id","to_station_id",1471355938),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.stations_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__39826_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39826_SHARP_);
}),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),(function (v,t){
var tr_time = gcclocal.primarydocs.departurelogistinfos.find_travel_time.call(null,v);
$(".edit-travel_time").val(tr_time);

return $(".add-travel_time").val(tr_time);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.plain_text_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"station_status_name","station_status_name",1692722565)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.date_with_calendar_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"arrival_date","arrival_date",166572874),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.number_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"travel_time","travel_time",1560517198)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.custom_view,new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom-fn","custom-fn",-428525430),(function (p1__39827_SHARP_){
var days_fact = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"d_status","d_status",-873518659).cljs$core$IFn$_invoke$arity$1(p1__39827_SHARP_),(1)))?new cljs.core.Keyword(null,"days_fact","days_fact",1538541969).cljs$core$IFn$_invoke$arity$1(p1__39827_SHARP_):new cljs.core.Keyword(null,"days_fact_finished","days_fact_finished",245378615).cljs$core$IFn$_invoke$arity$1(p1__39827_SHARP_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(((days_fact > new cljs.core.Keyword(null,"travel_time","travel_time",1560517198).cljs$core$IFn$_invoke$arity$1(p1__39827_SHARP_)))?"bold":"normal")], null)], null),days_fact], null);
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"client_application_id","client_application_id",1152236098),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.clientapplications_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__39828_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39828_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_readonly_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.clients_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__39829_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39829_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"supplier_id","supplier_id",2051817331),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.suppliers_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__39830_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39830_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.money_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"cost","cost",-1094861735)], null)], null);
/**
 * 
 */
gcclocal.primarydocs.departurelogistinfos.top_panel = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (add_mode_QMARK_,add_disabled_QMARK_,on_click_add_fn,search_str,search_fn,show_mode,selected_row,selected_type){
return React.createElement("div",{"className": "ui basic clearing segment no-padding-segment"},React.createElement("div",{"style": {"float": "left", "marginRight": "20px"}},React.createElement("div",{"className": "ui compact small right floated menu"},React.createElement("a",{"onClick": (function (){
return gcclocal.primarydocs.departurelogistinfos.change_show_mode.call(null,"active");
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.call(null,show_mode,"active"))?"active":"")], null))},"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435"),React.createElement("a",{"onClick": (function (){
return gcclocal.primarydocs.departurelogistinfos.change_show_mode.call(null,"finished");
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.call(null,show_mode,"finished"))?"active":"")], null))},"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435"),React.createElement("a",{"onClick": (function (){
return gcclocal.primarydocs.departurelogistinfos.change_show_mode.call(null,"all");
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.call(null,show_mode,"all"))?"active":"")], null))},"\u0412\u0441\u0435"))),sablono.interpreter.interpret.call(null,(((cljs.core.not.call(null,add_mode_QMARK_)) && (cljs.core.not.call(null,add_disabled_QMARK_)) && (cljs.core.not_EQ_.call(null,selected_type,new cljs.core.Keyword(null,"newdli","newdli",820739328))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.primary.labeled.icon.button","div.ui.primary.labeled.icon.button",-1843159717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_add_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.plus.icon","i.plus.icon",1958903408)], null),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"], null)], null):null)),sablono.interpreter.interpret.call(null,(((!((selected_row == null))) && (cljs.core._EQ_.call(null,selected_type,new cljs.core.Keyword(null,"row","row",-570139521))) && (cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"d_status","d_status",-873518659).cljs$core$IFn$_invoke$arity$1(selected_row))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.green.labeled.icon.button","div.ui.green.labeled.icon.button",1314177123),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gcclocal.primarydocs.departurelogistinfos.finish_row.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_row));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.checkmark.icon","i.checkmark.icon",-945876964)], null),"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"], null):null)),sablono.interpreter.interpret.call(null,(((!((selected_row == null))) && (cljs.core._EQ_.call(null,selected_type,new cljs.core.Keyword(null,"row","row",-570139521))) && (cljs.core._EQ_.call(null,(3),new cljs.core.Keyword(null,"d_status","d_status",-873518659).cljs$core$IFn$_invoke$arity$1(selected_row))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.yellow.labeled.icon.button","div.ui.yellow.labeled.icon.button",-279461607),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gcclocal.primarydocs.departurelogistinfos.unfinish_row.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_row));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.undo.icon","i.undo.icon",1269953278)], null),"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435"], null):null)),sablono.interpreter.interpret.call(null,(((!((selected_row == null))) && (cljs.core._EQ_.call(null,selected_type,new cljs.core.Keyword(null,"newdli","newdli",820739328))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.labeled.icon.button","div.ui.labeled.icon.button",59212774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gcclocal.views.common.show_approve_modal.call(null,"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0435\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0443?",(function (){
return gcclocal.primarydocs.departurelogistinfos.delete_newsyncdli.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_row));
}));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ban.icon","i.ban.icon",1055783065)], null),"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"], null):null)),React.createElement("div",{"onClick": gcclocal.primarydocs.departurelogistinfos.load_to_excel, "className": "ui labeled icon button"},React.createElement("i",{"className": "file excel outline icon"}),"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432 Excel"),sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.search_input_view.call(null,search_str,search_fn)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"top-panel");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39833__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39833 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39834__i = 0, G__39834__a = new Array(arguments.length -  0);
while (G__39834__i < G__39834__a.length) {G__39834__a[G__39834__i] = arguments[G__39834__i + 0]; ++G__39834__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39834__a,0);
} 
return G__39833__delegate.call(this,args__33795__auto__);};
G__39833.cljs$lang$maxFixedArity = 0;
G__39833.cljs$lang$applyTo = (function (arglist__39835){
var args__33795__auto__ = cljs.core.seq(arglist__39835);
return G__39833__delegate(args__33795__auto__);
});
G__39833.cljs$core$IFn$_invoke$arity$variadic = G__39833__delegate;
return G__39833;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для выбора станций относительно пришедшей с сервиса
 */
gcclocal.primarydocs.departurelogistinfos.td_dli_station_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,station_name,station_code,class_name){
var f_station = gcclocal.comm.utils.find_some.call(null,(function (p1__39836_SHARP_){
return cljs.core._EQ_.call(null,station_code,new cljs.core.Keyword(null,"sync_station_code","sync_station_code",-1457517702).cljs$core$IFn$_invoke$arity$1(p1__39836_SHARP_));
}),rum.core.react.call(null,gcclocal.primarydocs.departurelogistinfos.stations_list));
var attrs39838 = station_name;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39838))?sablono.interpreter.attributes.call(null,attrs39838):null),((cljs.core.map_QMARK_.call(null,attrs39838))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,gcclocal.views.crud_fields.select_view.call(null,edit_mode_QMARK_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f_station),class_name,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.stations_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),((function (attrs39838,f_station){
return (function (p1__39837_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39837_SHARP_);
});})(attrs39838,f_station))
,new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0446\u0438\u044E",new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),((function (attrs39838,f_station){
return (function (v,t){
if(cljs.core._EQ_.call(null,class_name,"syncadd-to_station_id")){
var tr_time = gcclocal.primarydocs.departurelogistinfos.find_travel_time.call(null,v);
return $(".syncadd-travel_time").val(tr_time);
} else {
return null;
}
});})(attrs39838,f_station))
,new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39838),sablono.interpreter.interpret.call(null,gcclocal.views.crud_fields.select_view.call(null,edit_mode_QMARK_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f_station),class_name,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.stations_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),((function (attrs39838,f_station){
return (function (p1__39837_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39837_SHARP_);
});})(attrs39838,f_station))
,new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0446\u0438\u044E",new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),((function (attrs39838,f_station){
return (function (v,t){
if(cljs.core._EQ_.call(null,class_name,"syncadd-to_station_id")){
var tr_time = gcclocal.primarydocs.departurelogistinfos.find_travel_time.call(null,v);
return $(".syncadd-travel_time").val(tr_time);
} else {
return null;
}
});})(attrs39838,f_station))
,new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)))], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"td-dli-station-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39839__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39839 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39840__i = 0, G__39840__a = new Array(arguments.length -  0);
while (G__39840__i < G__39840__a.length) {G__39840__a[G__39840__i] = arguments[G__39840__i + 0]; ++G__39840__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39840__a,0);
} 
return G__39839__delegate.call(this,args__33795__auto__);};
G__39839.cljs$lang$maxFixedArity = 0;
G__39839.cljs$lang$applyTo = (function (arglist__39841){
var args__33795__auto__ = cljs.core.seq(arglist__39841);
return G__39839__delegate(args__33795__auto__);
});
G__39839.cljs$core$IFn$_invoke$arity$variadic = G__39839__delegate;
return G__39839;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Строка с новой поставкой, ожидающей подтверждения
 */
gcclocal.primarydocs.departurelogistinfos.new_dli_tr_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (newdli,selected_QMARK_,edit_mode_QMARK_){
var in_edit_QMARK_ = (function (){var and__30565__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30565__auto__)){
return edit_mode_QMARK_;
} else {
return and__30565__auto__;
}
})();
return React.createElement("tr",{"onClick": ((function (in_edit_QMARK_){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.select_new_dli_row.call(null,newdli);
});})(in_edit_QMARK_))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(selected_QMARK_)?"active":"")),cljs.core.str(" ")].join('')], null))},(function (){var attrs39846 = gcclocal.views.crud_fields.date_readonly_view.call(null,in_edit_QMARK_,new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005).cljs$core$IFn$_invoke$arity$1(newdli));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39846))?sablono.interpreter.attributes.call(null,attrs39846):null),((cljs.core.map_QMARK_.call(null,attrs39846))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39846)], null)));
})(),(function (){var attrs39847 = new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429).cljs$core$IFn$_invoke$arity$1(newdli);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39847))?sablono.interpreter.attributes.call(null,attrs39847):null),((cljs.core.map_QMARK_.call(null,attrs39847))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39847)], null)));
})(),sablono.interpreter.interpret.call(null,gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.call(null,in_edit_QMARK_,new cljs.core.Keyword(null,"from_station_name","from_station_name",-1942790363).cljs$core$IFn$_invoke$arity$1(newdli),new cljs.core.Keyword(null,"from_station_code","from_station_code",-504891585).cljs$core$IFn$_invoke$arity$1(newdli),"syncadd-from_station_id")),sablono.interpreter.interpret.call(null,gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.call(null,in_edit_QMARK_,new cljs.core.Keyword(null,"to_station_name","to_station_name",390308308).cljs$core$IFn$_invoke$arity$1(newdli),new cljs.core.Keyword(null,"to_station_code","to_station_code",-514455524).cljs$core$IFn$_invoke$arity$1(newdli),"syncadd-to_station_id")),(function (){var attrs39848 = new cljs.core.Keyword(null,"current_station_name","current_station_name",-1170084568).cljs$core$IFn$_invoke$arity$1(newdli);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39848))?sablono.interpreter.attributes.call(null,attrs39848):null),((cljs.core.map_QMARK_.call(null,attrs39848))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39848)], null)));
})(),(function (){var attrs39849 = gcclocal.views.crud_fields.number_field_view.call(null,in_edit_QMARK_,null,"syncadd-travel_time");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39849))?sablono.interpreter.attributes.call(null,attrs39849):null),((cljs.core.map_QMARK_.call(null,attrs39849))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39849)], null)));
})(),(function (){var attrs39850 = gcclocal.views.crud_fields.select_view.call(null,in_edit_QMARK_,null,"syncadd-client_application_id",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.clientapplications_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),((function (in_edit_QMARK_){
return (function (p1__39842_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39842_SHARP_);
});})(in_edit_QMARK_))
,new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39850))?sablono.interpreter.attributes.call(null,attrs39850):null),((cljs.core.map_QMARK_.call(null,attrs39850))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39850)], null)));
})(),(function (){var attrs39851 = gcclocal.views.crud_fields.select_view.call(null,in_edit_QMARK_,null,"syncadd-supplier_id",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.departurelogistinfos.suppliers_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),((function (in_edit_QMARK_){
return (function (p1__39843_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39843_SHARP_);
});})(in_edit_QMARK_))
,new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39851))?sablono.interpreter.attributes.call(null,attrs39851):null),((cljs.core.map_QMARK_.call(null,attrs39851))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39851)], null)));
})(),(function (){var attrs39852 = gcclocal.views.crud_fields.money_field_view.call(null,in_edit_QMARK_,null,"syncadd-cost");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39852))?sablono.interpreter.attributes.call(null,attrs39852):null),((cljs.core.map_QMARK_.call(null,attrs39852))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39852)], null)));
})(),(function (){var attrs39853 = gcclocal.views.crud_fields.number_field_view.call(null,in_edit_QMARK_,(69),"syncadd-wagon_amount");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39853))?sablono.interpreter.attributes.call(null,attrs39853):null),((cljs.core.map_QMARK_.call(null,attrs39853))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39853)], null)));
})(),(function (){var attrs39854 = (cljs.core.truth_(in_edit_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.green.icon.tiny.button","div.ui.green.icon.tiny.button",1145684009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (in_edit_QMARK_){
return (function (p1__39844_SHARP_){
gcclocal.primarydocs.departurelogistinfos.confirm_newsyncdli.call(null,newdli);

return p1__39844_SHARP_.stopPropagation();
});})(in_edit_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.checkmark.icon","i.checkmark.icon",-945876964)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.red.icon.tiny.button","div.ui.red.icon.tiny.button",-1055158772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041E\u0442\u043C\u0435\u043D\u0430",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (in_edit_QMARK_){
return (function (p1__39845_SHARP_){
gcclocal.primarydocs.departurelogistinfos.select_new_dli_row.call(null,newdli);

return p1__39845_SHARP_.stopPropagation();
});})(in_edit_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.remove.icon","i.remove.icon",1455856198)], null)], null)], null):null);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39854))?sablono.interpreter.attributes.call(null,attrs39854):null),((cljs.core.map_QMARK_.call(null,attrs39854))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39854)], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"new-dli-tr-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39855__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39855 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39856__i = 0, G__39856__a = new Array(arguments.length -  0);
while (G__39856__i < G__39856__a.length) {G__39856__a[G__39856__i] = arguments[G__39856__i + 0]; ++G__39856__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39856__a,0);
} 
return G__39855__delegate.call(this,args__33795__auto__);};
G__39855.cljs$lang$maxFixedArity = 0;
G__39855.cljs$lang$applyTo = (function (arglist__39857){
var args__33795__auto__ = cljs.core.seq(arglist__39857);
return G__39855__delegate(args__33795__auto__);
});
G__39855.cljs$core$IFn$_invoke$arity$variadic = G__39855__delegate;
return G__39855;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Новые поставки для подтверждения с sigis
 */
gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (newdlis,selected_item,edit_mode_QMARK_){
return React.createElement("div",{"className": "sync-new-dlis"},(function (){var attrs39859 = [cljs.core.str("\u041D\u043E\u0432\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044E ("),cljs.core.str(cljs.core.count.call(null,newdlis)),cljs.core.str(")")].join('');
return cljs.core.apply.call(null,React.createElement,"h4",((cljs.core.map_QMARK_.call(null,attrs39859))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","teal","header"], null)], null),attrs39859)):{"className": "ui teal header"}),((cljs.core.map_QMARK_.call(null,attrs39859))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39859)], null)));
})(),React.createElement("table",{"className": "ui small selectable celled fixed table with-overflow-tds"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{"className": "one wide"},"\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440."),React.createElement("th",{"className": "one wide"},"\u041D\u043E\u043C\u0435\u0440 \u0432\u0430\u0433\u043E\u043D\u0430"),React.createElement("th",{"className": "two wide"},"\u0421\u0442.\u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"),React.createElement("th",{"className": "two wide"},"\u0421\u0442.\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"),React.createElement("th",{"className": "two wide"},"\u0421\u0442\u0430\u0442\u0443\u0441 (\u0442\u0435\u043A.\u0441\u0442\u0430\u043D\u0446\u0438\u044F)"),React.createElement("th",{"className": "one wide"},"\u0412\u0440\u0435\u043C\u044F \u0432 \u043F\u0443\u0442\u0438 (\u043E\u0436\u0438\u0434.)"),React.createElement("th",{"className": "two wide"},"\u0417\u0430\u044F\u0432\u043A\u0430"),React.createElement("th",{"className": "two wide"},"\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A"),React.createElement("th",{"className": "two wide"},"\u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"),React.createElement("th",{"className": "one wide"},"\u0412\u0435\u0441 \u0433\u0440\u0443\u0437\u0430"),React.createElement("th",{"className": "control-th"}))),(function (){var attrs39862 = cljs.core.map.call(null,(function (p1__39858_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.new_dli_tr_view.call(null,p1__39858_SHARP_,cljs.core._EQ_.call(null,selected_item,p1__39858_SHARP_),edit_mode_QMARK_);
}),newdlis);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs39862))?sablono.interpreter.attributes.call(null,attrs39862):null),((cljs.core.map_QMARK_.call(null,attrs39862))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39862)], null)));
})()));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"sync-new-dlis-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39863__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39863 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39864__i = 0, G__39864__a = new Array(arguments.length -  0);
while (G__39864__i < G__39864__a.length) {G__39864__a[G__39864__i] = arguments[G__39864__i + 0]; ++G__39864__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39864__a,0);
} 
return G__39863__delegate.call(this,args__33795__auto__);};
G__39863.cljs$lang$maxFixedArity = 0;
G__39863.cljs$lang$applyTo = (function (arglist__39865){
var args__33795__auto__ = cljs.core.seq(arglist__39865);
return G__39863__delegate(args__33795__auto__);
});
G__39863.cljs$core$IFn$_invoke$arity$variadic = G__39863__delegate;
return G__39863;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.comm.utils.moment_after_QMARK_.call(null,gcclocal.comm.utils.current_date.call(null),gcclocal.comm.utils.add_days_moment.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,"2016-07-15T00:00:00Z"),(14)));
/**
 * 
 */
gcclocal.primarydocs.departurelogistinfos.main_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var current_app_state = rum.core.react.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors));
var newdlis = rum.core.react.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newdlis","newdlis",-1967773122)], null)));
var selected_type = rum.core.react.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-type","selected-type",97396872)], null)));
var attrs39873 = gcclocal.comm.pagination.pagination_view.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"total-c","total-c",425589837).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),gcclocal.primarydocs.departurelogistinfos.change_page_ch);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39873))?sablono.interpreter.attributes.call(null,attrs39873):null),((cljs.core.map_QMARK_.call(null,attrs39873))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,gcclocal.primarydocs.departurelogistinfos.top_panel.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"search-str","search-str",-821246171).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39866_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39866_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"show-mode","show-mode",1909285623).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),selected_type)),sablono.interpreter.interpret.call(null,(((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"show-mode","show-mode",1909285623).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),"finished")) && (cljs.core.not.call(null,gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,newdlis))))?gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.call(null,newdlis,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),rum.core.react.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-new-dli?","edit-new-dli?",1894976601)], null)))):null)),sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.default_crud_table_view.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173),new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),new cljs.core.Keyword(null,"select-row-fn","select-row-fn",1428247972),new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),new cljs.core.Keyword(null,"start-edit-row-fn","start-edit-row-fn",-1336749305),new cljs.core.Keyword(null,"add-row-fn","add-row-fn",1400597160),new cljs.core.Keyword(null,"save-edit-row-fn","save-edit-row-fn",-1949641335),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),new cljs.core.Keyword(null,"edit-disabled?","edit-disabled?",-192999315),new cljs.core.Keyword(null,"delete-row-fn","delete-row-fn",-1002083091),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),new cljs.core.Keyword(null,"sorting-map","sorting-map",1725768082),new cljs.core.Keyword(null,"custom-get-tr-class-fn","custom-get-tr-class-fn",-1254397421),new cljs.core.Keyword(null,"selected-row-fn","selected-row-fn",326492244),new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908),new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),new cljs.core.Keyword(null,"cancel-edit-row-fn","cancel-edit-row-fn",562380475),new cljs.core.Keyword(null,"cancel-add-fn","cancel-add-fn",-106728963),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683)],[false,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39869_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39869_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39868_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39868_SHARP_);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row.call(null,new cljs.core.Keyword(null,"add-row","add-row",230649319).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),gcclocal.primarydocs.departurelogistinfos.extract_add_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39871_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row.call(null,new cljs.core.Keyword(null,"edit-row","edit-row",1707590674).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__39871_SHARP_,gcclocal.primarydocs.departurelogistinfos.extract_edit_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),false,gcclocal.views.basic_catalog_crud_table.click_delete_row,cljs.core.deref.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),gcclocal.primarydocs.departurelogistinfos.config_headers,cljs.core.deref.call(null,new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39867_SHARP_){
var G__39874 = "";
var G__39874__$1 = ((cljs.core._EQ_.call(null,(3),new cljs.core.Keyword(null,"d_status","d_status",-873518659).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_)))?[cljs.core.str(G__39874),cljs.core.str("finished-tr")].join(''):G__39874);
if(cljs.core.truth_((function (){var and__30565__auto__ = cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"d_status","d_status",-873518659).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_));
if(and__30565__auto__){
return gcclocal.comm.utils.moment_after_QMARK_.call(null,gcclocal.comm.utils.current_date.call(null),gcclocal.comm.utils.add_days_moment.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_)),new cljs.core.Keyword(null,"travel_time","travel_time",1560517198).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_)));
} else {
return and__30565__auto__;
}
})())){
return [cljs.core.str(G__39874__$1),cljs.core.str("negative")].join('');
} else {
return G__39874__$1;
}
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39870_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39870_SHARP_);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),gcclocal.primarydocs.departurelogistinfos.config_fields,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))]))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))))?gcclocal.views.crud_views.delete_modal_view.call(null,new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39872_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__39872_SHARP_,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
):null)),sablono.interpreter.interpret.call(null,gcclocal.views.common.basic_approve_modal_view.call(null))], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39873),sablono.interpreter.interpret.call(null,gcclocal.primarydocs.departurelogistinfos.top_panel.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"search-str","search-str",-821246171).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39866_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39866_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"show-mode","show-mode",1909285623).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),selected_type)),sablono.interpreter.interpret.call(null,(((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"show-mode","show-mode",1909285623).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),"finished")) && (cljs.core.not.call(null,gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,newdlis))))?gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.call(null,newdlis,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),rum.core.react.call(null,rum.core.cursor.call(null,gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-new-dli?","edit-new-dli?",1894976601)], null)))):null)),sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.default_crud_table_view.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173),new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),new cljs.core.Keyword(null,"select-row-fn","select-row-fn",1428247972),new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191),new cljs.core.Keyword(null,"start-edit-row-fn","start-edit-row-fn",-1336749305),new cljs.core.Keyword(null,"add-row-fn","add-row-fn",1400597160),new cljs.core.Keyword(null,"save-edit-row-fn","save-edit-row-fn",-1949641335),new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482),new cljs.core.Keyword(null,"edit-disabled?","edit-disabled?",-192999315),new cljs.core.Keyword(null,"delete-row-fn","delete-row-fn",-1002083091),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),new cljs.core.Keyword(null,"sorting-map","sorting-map",1725768082),new cljs.core.Keyword(null,"custom-get-tr-class-fn","custom-get-tr-class-fn",-1254397421),new cljs.core.Keyword(null,"selected-row-fn","selected-row-fn",326492244),new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908),new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),new cljs.core.Keyword(null,"cancel-edit-row-fn","cancel-edit-row-fn",562380475),new cljs.core.Keyword(null,"cancel-add-fn","cancel-add-fn",-106728963),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683)],[false,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39869_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39869_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39868_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39868_SHARP_);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row.call(null,new cljs.core.Keyword(null,"add-row","add-row",230649319).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),gcclocal.primarydocs.departurelogistinfos.extract_add_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39871_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row.call(null,new cljs.core.Keyword(null,"edit-row","edit-row",1707590674).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__39871_SHARP_,gcclocal.primarydocs.departurelogistinfos.extract_edit_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),false,gcclocal.views.basic_catalog_crud_table.click_delete_row,cljs.core.deref.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),gcclocal.primarydocs.departurelogistinfos.config_headers,cljs.core.deref.call(null,new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39867_SHARP_){
var G__39875 = "";
var G__39875__$1 = ((cljs.core._EQ_.call(null,(3),new cljs.core.Keyword(null,"d_status","d_status",-873518659).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_)))?[cljs.core.str(G__39875),cljs.core.str("finished-tr")].join(''):G__39875);
if(cljs.core.truth_((function (){var and__30565__auto__ = cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"d_status","d_status",-873518659).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_));
if(and__30565__auto__){
return gcclocal.comm.utils.moment_after_QMARK_.call(null,gcclocal.comm.utils.current_date.call(null),gcclocal.comm.utils.add_days_moment.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,new cljs.core.Keyword(null,"shipping_date","shipping_date",1500027005).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_)),new cljs.core.Keyword(null,"travel_time","travel_time",1560517198).cljs$core$IFn$_invoke$arity$1(p1__39867_SHARP_)));
} else {
return and__30565__auto__;
}
})())){
return [cljs.core.str(G__39875__$1),cljs.core.str("negative")].join('');
} else {
return G__39875__$1;
}
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39870_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom.call(null,gcclocal.primarydocs.departurelogistinfos.cursors,p1__39870_SHARP_);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors)),gcclocal.primarydocs.departurelogistinfos.config_fields,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row.call(null,gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs39873,current_app_state,newdlis,selected_type))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))]))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))))?gcclocal.views.crud_views.delete_modal_view.call(null,new cljs.core.Keyword(null,"wagon_number","wagon_number",713271429).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors))),((function (attrs39873,current_app_state,newdlis,selected_type){
return (function (p1__39872_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349).cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__39872_SHARP_,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs39873,current_app_state,newdlis,selected_type))
):null)),sablono.interpreter.interpret.call(null,gcclocal.views.common.basic_approve_modal_view.call(null))], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"main-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39876__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39876 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39877__i = 0, G__39877__a = new Array(arguments.length -  0);
while (G__39877__i < G__39877__a.length) {G__39877__a[G__39877__i] = arguments[G__39877__i + 0]; ++G__39877__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39877__a,0);
} 
return G__39876__delegate.call(this,args__33795__auto__);};
G__39876.cljs$lang$maxFixedArity = 0;
G__39876.cljs$lang$applyTo = (function (arglist__39878){
var args__33795__auto__ = cljs.core.seq(arglist__39878);
return G__39876__delegate(args__33795__auto__);
});
G__39876.cljs$core$IFn$_invoke$arity$variadic = G__39876__delegate;
return G__39876;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.primarydocs.departurelogistinfos.init = (function gcclocal$primarydocs$departurelogistinfos$init(){
cljs.core.println.call(null,"init dlis");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.departurelogistinfos.clients_list,"/catalogs/clients/all");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.departurelogistinfos.stations_list,"/catalogs/stations/all");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.departurelogistinfos.stationtraveltimes_list,"/catalogs/stationtraveltimes/all");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.departurelogistinfos.suppliers_list,"/catalogs/suppliers/all");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.departurelogistinfos.clientapplications_list,"/primarydocs/clientapplications/all");

var c__35123__auto___39903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___39903){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___39903){
return (function (state_39894){
var state_val_39895 = (state_39894[(1)]);
if((state_val_39895 === (1))){
var state_39894__$1 = state_39894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39894__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,true);
} else {
if((state_val_39895 === (2))){
var inst_39892 = (state_39894[(2)]);
var state_39894__$1 = state_39894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39894__$1,inst_39892);
} else {
return null;
}
}
});})(c__35123__auto___39903))
;
return ((function (switch__35011__auto__,c__35123__auto___39903){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto____0 = (function (){
var statearr_39899 = [null,null,null,null,null,null,null];
(statearr_39899[(0)] = gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto__);

(statearr_39899[(1)] = (1));

return statearr_39899;
});
var gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto____1 = (function (state_39894){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39900){if((e39900 instanceof Object)){
var ex__35015__auto__ = e39900;
var statearr_39901_39904 = state_39894;
(statearr_39901_39904[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39905 = state_39894;
state_39894 = G__39905;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto__ = function(state_39894){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto____1.call(this,state_39894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto____0;
gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto____1;
return gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___39903))
})();
var state__35125__auto__ = (function (){var statearr_39902 = f__35124__auto__.call(null);
(statearr_39902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___39903);

return statearr_39902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___39903))
);


return rum.core.mount.call(null,gcclocal.primarydocs.departurelogistinfos.main_view.call(null),document.getElementById("mainpanel"));
});
goog.exportSymbol('gcclocal.primarydocs.departurelogistinfos.init', gcclocal.primarydocs.departurelogistinfos.init);
gcclocal.primarydocs.departurelogistinfos.on_js_reload = (function gcclocal$primarydocs$departurelogistinfos$on_js_reload(){
return null;
});

//# sourceMappingURL=departurelogistinfos.js.map