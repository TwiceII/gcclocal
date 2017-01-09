// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.diagrams.moneyincomes');
goog.require('cljs.core');
goog.require('gcclocal.diagrams.moneyincomes_calc');
goog.require('gcclocal.comm.dom_utils');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.amethods');
goog.require('rum.core');
goog.require('gcclocal.views.crud_fields');
goog.require('gcclocal.comm.channels');
goog.require('gcclocal.views.common');
cljs.core.enable_console_print_BANG_();
if(typeof gcclocal.diagrams.moneyincomes.app_state !== 'undefined'){
} else {
gcclocal.diagrams.moneyincomes.app_state = (function (){var G__53627 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$new_DASH_movement,cljs.core.cst$kw$expensecategories,cljs.core.cst$kw$moneymovements,cljs.core.cst$kw$incomeitems,cljs.core.cst$kw$init_DASH_balances_DASH_on_DASH_start,cljs.core.cst$kw$all_DASH_clients,cljs.core.cst$kw$loading_QMARK_,cljs.core.cst$kw$total_DASH_i_DASH_expired_DASH_summ,cljs.core.cst$kw$init_DASH_balances_DASH_on_DASH_end,cljs.core.cst$kw$selected_DASH_cell,cljs.core.cst$kw$modes,cljs.core.cst$kw$total_DASH_init_DASH_balances,cljs.core.cst$kw$initbalanceondate,cljs.core.cst$kw$clientpayments,cljs.core.cst$kw$clients_DASH_cinfos,cljs.core.cst$kw$selected_DASH_category,cljs.core.cst$kw$clients_DASH_expired_DASH_cinfos,cljs.core.cst$kw$all_DASH_visible_DASH_dates,cljs.core.cst$kw$total_DASH_e_DASH_cell_DASH_summs,cljs.core.cst$kw$new_DASH_movement_DASH_errors,cljs.core.cst$kw$incomecategories,cljs.core.cst$kw$expenseitems,cljs.core.cst$kw$total_DASH_i_DASH_cell_DASH_summs],[null,null,null,null,null,null,false,null,null,null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$edit_DASH_income_DASH_cat_DASH_mode_QMARK_,false,cljs.core.cst$kw$edit_DASH_expense_DASH_cat_DASH_mode_QMARK_,false,cljs.core.cst$kw$add_DASH_income_DASH_cat_DASH_mode_QMARK_,false,cljs.core.cst$kw$add_DASH_expense_DASH_cat_DASH_mode_QMARK_,false,cljs.core.cst$kw$edit_DASH_income_DASH_item_DASH_mode_QMARK_,false,cljs.core.cst$kw$edit_DASH_expense_DASH_item_DASH_mode_QMARK_,false,cljs.core.cst$kw$add_DASH_category_DASH_item_DASH_mode_QMARK_,false], null),null,null,null,null,null,null,null,null,null,null,null,null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53627) : cljs.core.atom.call(null,G__53627));
})();
}
gcclocal.diagrams.moneyincomes.state_cursor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,gcclocal.diagrams.moneyincomes.app_state);
gcclocal.diagrams.moneyincomes.load_count = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
gcclocal.diagrams.moneyincomes.load_all_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
gcclocal.diagrams.moneyincomes.notify_ch = gcclocal.comm.channels.init_notify_ch();
gcclocal.diagrams.moneyincomes.needed_ajax_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$clientpayments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/moneydiagram/clientpayments"], null),cljs.core.cst$kw$moneymovements,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/moneydiagram/moneymovement/all"], null),cljs.core.cst$kw$incomecategories,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/moneydiagram/incomecategory/all"], null),cljs.core.cst$kw$incomeitems,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/moneydiagram/incomeitem/all"], null),cljs.core.cst$kw$expensecategories,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/moneydiagram/expensecategory/all"], null),cljs.core.cst$kw$expenseitems,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/moneydiagram/expenseitem/all"], null),cljs.core.cst$kw$initbalanceondate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/moneydiagram/initbalanceondate"], null)], null);
/**
 * Обновить все данные с сервера
 */
gcclocal.diagrams.moneyincomes.refresh_ajax_data = (function gcclocal$diagrams$moneyincomes$refresh_ajax_data(){
var G__53675_53720 = (function (){var G__53677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53677) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53677));
})();
var G__53676_53721 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53675_53720,G__53676_53721) : cljs.core.reset_BANG_.call(null,G__53675_53720,G__53676_53721));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(gcclocal.diagrams.moneyincomes.load_count,(0)) : cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.load_count,(0)));

var seq__53678 = cljs.core.seq(gcclocal.diagrams.moneyincomes.needed_ajax_data);
var chunk__53679 = null;
var count__53680 = (0);
var i__53681 = (0);
while(true){
if((i__53681 < count__53680)){
var vec__53682 = chunk__53679.cljs$core$IIndexed$_nth$arity$2(null,i__53681);
var dname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53682,(0),null);
var dval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53682,(1),null);
gcclocal.comm.utils.get_json(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(dval),cljs.core.PersistentArrayMap.EMPTY,((function (seq__53678,chunk__53679,count__53680,i__53681,vec__53682,dname,dval){
return (function (res){
var G__53686_53722 = (function (){var G__53688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dname], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53688) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53688));
})();
var G__53687_53723 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(res);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53686_53722,G__53687_53723) : cljs.core.reset_BANG_.call(null,G__53686_53722,G__53687_53723));

var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53682,dname,dval){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53682,dname,dval){
return (function (state_53692){
var state_val_53693 = (state_53692[(1)]);
if((state_val_53693 === (1))){
var state_53692__$1 = state_53692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53692__$1,(2),gcclocal.diagrams.moneyincomes.load_all_ch,true);
} else {
if((state_val_53693 === (2))){
var inst_53690 = (state_53692[(2)]);
var state_53692__$1 = state_53692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53692__$1,inst_53690);
} else {
return null;
}
}
});})(seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53682,dname,dval))
;
return ((function (seq__53678,chunk__53679,count__53680,i__53681,switch__37982__auto__,c__38096__auto__,vec__53682,dname,dval){
return (function() {
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____0 = (function (){
var statearr_53697 = [null,null,null,null,null,null,null];
(statearr_53697[(0)] = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__);

(statearr_53697[(1)] = (1));

return statearr_53697;
});
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____1 = (function (state_53692){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53692);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53698){if((e53698 instanceof Object)){
var ex__37986__auto__ = e53698;
var statearr_53699_53724 = state_53692;
(statearr_53699_53724[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53692);

return cljs.core.cst$kw$recur;
} else {
throw e53698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53725 = state_53692;
state_53692 = G__53725;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__ = function(state_53692){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____1.call(this,state_53692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__;
})()
;})(seq__53678,chunk__53679,count__53680,i__53681,switch__37982__auto__,c__38096__auto__,vec__53682,dname,dval))
})();
var state__38098__auto__ = (function (){var statearr_53700 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53682,dname,dval))
);

return c__38096__auto__;
});})(seq__53678,chunk__53679,count__53680,i__53681,vec__53682,dname,dval))
);

var G__53726 = seq__53678;
var G__53727 = chunk__53679;
var G__53728 = count__53680;
var G__53729 = (i__53681 + (1));
seq__53678 = G__53726;
chunk__53679 = G__53727;
count__53680 = G__53728;
i__53681 = G__53729;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__53678);
if(temp__4657__auto__){
var seq__53678__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53678__$1)){
var c__31198__auto__ = cljs.core.chunk_first(seq__53678__$1);
var G__53730 = cljs.core.chunk_rest(seq__53678__$1);
var G__53731 = c__31198__auto__;
var G__53732 = cljs.core.count(c__31198__auto__);
var G__53733 = (0);
seq__53678 = G__53730;
chunk__53679 = G__53731;
count__53680 = G__53732;
i__53681 = G__53733;
continue;
} else {
var vec__53701 = cljs.core.first(seq__53678__$1);
var dname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53701,(0),null);
var dval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53701,(1),null);
gcclocal.comm.utils.get_json(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(dval),cljs.core.PersistentArrayMap.EMPTY,((function (seq__53678,chunk__53679,count__53680,i__53681,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__){
return (function (res){
var G__53705_53734 = (function (){var G__53707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dname], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53707) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53707));
})();
var G__53706_53735 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(res);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53705_53734,G__53706_53735) : cljs.core.reset_BANG_.call(null,G__53705_53734,G__53706_53735));

var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__){
return (function (state_53711){
var state_val_53712 = (state_53711[(1)]);
if((state_val_53712 === (1))){
var state_53711__$1 = state_53711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53711__$1,(2),gcclocal.diagrams.moneyincomes.load_all_ch,true);
} else {
if((state_val_53712 === (2))){
var inst_53709 = (state_53711[(2)]);
var state_53711__$1 = state_53711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53711__$1,inst_53709);
} else {
return null;
}
}
});})(seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__))
;
return ((function (seq__53678,chunk__53679,count__53680,i__53681,switch__37982__auto__,c__38096__auto__,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____0 = (function (){
var statearr_53716 = [null,null,null,null,null,null,null];
(statearr_53716[(0)] = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__);

(statearr_53716[(1)] = (1));

return statearr_53716;
});
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____1 = (function (state_53711){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53711);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53717){if((e53717 instanceof Object)){
var ex__37986__auto__ = e53717;
var statearr_53718_53736 = state_53711;
(statearr_53718_53736[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53711);

return cljs.core.cst$kw$recur;
} else {
throw e53717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53737 = state_53711;
state_53711 = G__53737;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__ = function(state_53711){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____1.call(this,state_53711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__37983__auto__;
})()
;})(seq__53678,chunk__53679,count__53680,i__53681,switch__37982__auto__,c__38096__auto__,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__))
})();
var state__38098__auto__ = (function (){var statearr_53719 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(seq__53678,chunk__53679,count__53680,i__53681,c__38096__auto__,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__))
);

return c__38096__auto__;
});})(seq__53678,chunk__53679,count__53680,i__53681,vec__53701,dname,dval,seq__53678__$1,temp__4657__auto__))
);

var G__53738 = cljs.core.next(seq__53678__$1);
var G__53739 = null;
var G__53740 = (0);
var G__53741 = (0);
seq__53678 = G__53738;
chunk__53679 = G__53739;
count__53680 = G__53740;
i__53681 = G__53741;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Посчитать все данные
 */
gcclocal.diagrams.moneyincomes.calc_all_data = (function gcclocal$diagrams$moneyincomes$calc_all_data(){
var G__53761_53777 = (function (){var G__53763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53763) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53763));
})();
var G__53762_53778 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53761_53777,G__53762_53778) : cljs.core.reset_BANG_.call(null,G__53761_53777,G__53762_53778));

var G__53765_53779 = (function (){var G__53767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_clients], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53767) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53767));
})();
var G__53766_53780 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$client,(function (){var G__53769 = (function (){var G__53770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientpayments], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53770) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53770));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53769) : cljs.core.deref.call(null,G__53769));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53765_53779,G__53766_53780) : cljs.core.reset_BANG_.call(null,G__53765_53779,G__53766_53780));

var cur_app_data = (function (){var G__53772 = (function (){var G__53773 = cljs.core.PersistentVector.EMPTY;
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53773) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53773));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53772) : cljs.core.deref.call(null,G__53772));
})();
var date_to_check = gcclocal.comm.utils.current_date();
var all_clients = (function (){var G__53775 = (function (){var G__53776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_clients], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53776) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53776));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53775) : cljs.core.deref.call(null,G__53775));
})();
var client_payments = cljs.core.cst$kw$clientpayments.cljs$core$IFn$_invoke$arity$1(cur_app_data);
var all_movements = cljs.core.cst$kw$moneymovements.cljs$core$IFn$_invoke$arity$1(cur_app_data);
var income_items = cljs.core.cst$kw$incomeitems.cljs$core$IFn$_invoke$arity$1(cur_app_data);
var expense_items = cljs.core.cst$kw$expenseitems.cljs$core$IFn$_invoke$arity$1(cur_app_data);
var init_balance_on_date = cljs.core.cst$kw$initbalanceondate.cljs$core$IFn$_invoke$arity$1(cur_app_data);
var calc_hmap = gcclocal.diagrams.moneyincomes_calc.calc_data(date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["=== calced-data ==="], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$clients_DASH_expired_DASH_cinfos.cljs$core$IFn$_invoke$arity$1(calc_hmap)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(gcclocal.diagrams.moneyincomes.app_state,((function (cur_app_data,date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date,calc_hmap){
return (function (p1__53742_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__53742_SHARP_,calc_hmap], 0));
});})(cur_app_data,date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date,calc_hmap))
);
});
/**
 * Инициализация каналов
 */
gcclocal.diagrams.moneyincomes.init_channels = (function gcclocal$diagrams$moneyincomes$init_channels(){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_53842){
var state_val_53843 = (state_53842[(1)]);
if((state_val_53843 === (7))){
var inst_53825 = (state_53842[(2)]);
var inst_53826 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(gcclocal.diagrams.moneyincomes.load_count,cljs.core.inc);
var inst_53827 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gcclocal.diagrams.moneyincomes.load_count) : cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.load_count));
var inst_53828 = cljs.core.count(gcclocal.diagrams.moneyincomes.needed_ajax_data);
var inst_53829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53827,inst_53828);
var state_53842__$1 = (function (){var statearr_53844 = state_53842;
(statearr_53844[(7)] = inst_53825);

(statearr_53844[(8)] = inst_53826);

return statearr_53844;
})();
if(inst_53829){
var statearr_53845_53863 = state_53842__$1;
(statearr_53845_53863[(1)] = (8));

} else {
var statearr_53846_53864 = state_53842__$1;
(statearr_53846_53864[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_53843 === (1))){
var state_53842__$1 = state_53842;
var statearr_53847_53865 = state_53842__$1;
(statearr_53847_53865[(2)] = null);

(statearr_53847_53865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_53843 === (4))){
var state_53842__$1 = state_53842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53842__$1,(7),gcclocal.diagrams.moneyincomes.load_all_ch);
} else {
if((state_val_53843 === (6))){
var inst_53838 = (state_53842[(2)]);
var state_53842__$1 = state_53842;
var statearr_53848_53866 = state_53842__$1;
(statearr_53848_53866[(2)] = inst_53838);

(statearr_53848_53866[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_53843 === (3))){
var inst_53840 = (state_53842[(2)]);
var state_53842__$1 = state_53842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53842__$1,inst_53840);
} else {
if((state_val_53843 === (2))){
var state_53842__$1 = state_53842;
var statearr_53849_53867 = state_53842__$1;
(statearr_53849_53867[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_53843 === (9))){
var state_53842__$1 = state_53842;
var statearr_53851_53868 = state_53842__$1;
(statearr_53851_53868[(2)] = null);

(statearr_53851_53868[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_53843 === (5))){
var state_53842__$1 = state_53842;
var statearr_53852_53869 = state_53842__$1;
(statearr_53852_53869[(2)] = null);

(statearr_53852_53869[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_53843 === (10))){
var inst_53834 = (state_53842[(2)]);
var state_53842__$1 = (function (){var statearr_53853 = state_53842;
(statearr_53853[(9)] = inst_53834);

return statearr_53853;
})();
var statearr_53854_53870 = state_53842__$1;
(statearr_53854_53870[(2)] = null);

(statearr_53854_53870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_53843 === (8))){
var inst_53831 = gcclocal.diagrams.moneyincomes.calc_all_data();
var state_53842__$1 = state_53842;
var statearr_53855_53871 = state_53842__$1;
(statearr_53855_53871[(2)] = inst_53831);

(statearr_53855_53871[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto____0 = (function (){
var statearr_53859 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53859[(0)] = gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto__);

(statearr_53859[(1)] = (1));

return statearr_53859;
});
var gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto____1 = (function (state_53842){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53842);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53860){if((e53860 instanceof Object)){
var ex__37986__auto__ = e53860;
var statearr_53861_53872 = state_53842;
(statearr_53861_53872[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53842);

return cljs.core.cst$kw$recur;
} else {
throw e53860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53873 = state_53842;
state_53842 = G__53873;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto__ = function(state_53842){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto____1.call(this,state_53842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_53862 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
});
/**
 * Вывести сообщение об успешности операции и обновить все данные
 */
gcclocal.diagrams.moneyincomes.success_notify_and_refresh = (function gcclocal$diagrams$moneyincomes$success_notify_and_refresh(message){
var c__38096__auto___53904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___53904){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___53904){
return (function (state_53895){
var state_val_53896 = (state_53895[(1)]);
if((state_val_53896 === (1))){
var inst_53889 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_53890 = [message,"success"];
var inst_53891 = cljs.core.PersistentHashMap.fromArrays(inst_53889,inst_53890);
var state_53895__$1 = state_53895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53895__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_53891);
} else {
if((state_val_53896 === (2))){
var inst_53893 = (state_53895[(2)]);
var state_53895__$1 = state_53895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53895__$1,inst_53893);
} else {
return null;
}
}
});})(c__38096__auto___53904))
;
return ((function (switch__37982__auto__,c__38096__auto___53904){
return (function() {
var gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto____0 = (function (){
var statearr_53900 = [null,null,null,null,null,null,null];
(statearr_53900[(0)] = gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto__);

(statearr_53900[(1)] = (1));

return statearr_53900;
});
var gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto____1 = (function (state_53895){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53895);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53901){if((e53901 instanceof Object)){
var ex__37986__auto__ = e53901;
var statearr_53902_53905 = state_53895;
(statearr_53902_53905[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53895);

return cljs.core.cst$kw$recur;
} else {
throw e53901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53906 = state_53895;
state_53895 = G__53906;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto__ = function(state_53895){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto____1.call(this,state_53895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___53904))
})();
var state__38098__auto__ = (function (){var statearr_53903 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___53904);

return statearr_53903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___53904))
);


return gcclocal.diagrams.moneyincomes.refresh_ajax_data();
});
/**
 * Добавление перемещения
 */
gcclocal.diagrams.moneyincomes.submit_new_movement = (function gcclocal$diagrams$moneyincomes$submit_new_movement(){
var new_movement = (function (){var G__53915 = (function (){var G__53916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53916) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53916));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53915) : cljs.core.deref.call(null,G__53915));
})();
return gcclocal.comm.utils.post_json_with_success_check("/moneydiagram/moneymovement/add",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$client_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_movement,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client,cljs.core.cst$kw$id], null)),cljs.core.cst$kw$from_date,cljs.core.cst$kw$from_DASH_date.cljs$core$IFn$_invoke$arity$1(new_movement),cljs.core.cst$kw$to_date,cljs.core.cst$kw$to_DASH_date.cljs$core$IFn$_invoke$arity$1(new_movement),cljs.core.cst$kw$amount,cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(new_movement),cljs.core.cst$kw$max_amount,cljs.core.cst$kw$max_DASH_amount.cljs$core$IFn$_invoke$arity$1(new_movement),cljs.core.cst$kw$is_from_expired,cljs.core.cst$kw$from_DASH_expired_QMARK_.cljs$core$IFn$_invoke$arity$1(new_movement),cljs.core.cst$kw$comment,cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(new_movement)], null)], null),((function (new_movement){
return (function (_){
$(".ui.modal").modal("hide");

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u041F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E");
});})(new_movement))
,((function (new_movement){
return (function (r){
var G__53918 = (function (){var G__53920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement_DASH_errors], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__53920) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__53920));
})();
var G__53919 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53918,G__53919) : cljs.core.reset_BANG_.call(null,G__53918,G__53919));
});})(new_movement))
);
});
/**
 * Удаление перемещения
 */
gcclocal.diagrams.moneyincomes.delete_movement = (function gcclocal$diagrams$moneyincomes$delete_movement(movement_id){
(gcclocal.diagrams.moneyincomes.hide_popup.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.hide_popup.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.hide_popup.call(null));

return gcclocal.comm.utils.post_json_with_success_check("/moneydiagram/moneymovement/delete",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,movement_id], null),(function (_){
return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u041F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E");
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_53942){
var state_val_53943 = (state_53942[(1)]);
if((state_val_53943 === (1))){
var inst_53936 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_53937 = ["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F","error"];
var inst_53938 = cljs.core.PersistentHashMap.fromArrays(inst_53936,inst_53937);
var state_53942__$1 = state_53942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53942__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_53938);
} else {
if((state_val_53943 === (2))){
var inst_53940 = (state_53942[(2)]);
var state_53942__$1 = state_53942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53942__$1,inst_53940);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto____0 = (function (){
var statearr_53947 = [null,null,null,null,null,null,null];
(statearr_53947[(0)] = gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto__);

(statearr_53947[(1)] = (1));

return statearr_53947;
});
var gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto____1 = (function (state_53942){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53942);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53948){if((e53948 instanceof Object)){
var ex__37986__auto__ = e53948;
var statearr_53949_53951 = state_53942;
(statearr_53949_53951[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53942);

return cljs.core.cst$kw$recur;
} else {
throw e53948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53952 = state_53942;
state_53942 = G__53952;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto__ = function(state_53942){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto____1.call(this,state_53942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_53950 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Добавить новую категорию
 */
gcclocal.diagrams.moneyincomes.add_category = (function gcclocal$diagrams$moneyincomes$add_category(category_type,input_el){
return gcclocal.comm.utils.post_json_with_success_check([cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type))?"incomecategory":"expensecategory")),cljs.core.str("/add")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,input_el.target.value], null)], null),(function (_){
(gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.turn_off_modes.call(null));

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430");
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_53978){
var state_val_53979 = (state_53978[(1)]);
if((state_val_53979 === (1))){
var inst_53970 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_53971 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_53972 = gcclocal.comm.utils.get_errors_str_from_map(inst_53971);
var inst_53973 = [inst_53972,"error"];
var inst_53974 = cljs.core.PersistentHashMap.fromArrays(inst_53970,inst_53973);
var state_53978__$1 = state_53978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53978__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_53974);
} else {
if((state_val_53979 === (2))){
var inst_53976 = (state_53978[(2)]);
var state_53978__$1 = state_53978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53978__$1,inst_53976);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto____0 = (function (){
var statearr_53983 = [null,null,null,null,null,null,null];
(statearr_53983[(0)] = gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto__);

(statearr_53983[(1)] = (1));

return statearr_53983;
});
var gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto____1 = (function (state_53978){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53978);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53984){if((e53984 instanceof Object)){
var ex__37986__auto__ = e53984;
var statearr_53985_53987 = state_53978;
(statearr_53985_53987[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53978);

return cljs.core.cst$kw$recur;
} else {
throw e53984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53988 = state_53978;
state_53978 = G__53988;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto__ = function(state_53978){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto____1.call(this,state_53978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$add_category_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_53986 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Удалить категорию
 */
gcclocal.diagrams.moneyincomes.delete_category = (function gcclocal$diagrams$moneyincomes$delete_category(category_type,id){
return gcclocal.comm.utils.post_json_with_success_check([cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type))?"incomecategory":"expensecategory")),cljs.core.str("/delete")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),(function (_){
(gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.turn_off_modes.call(null));

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0430");
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_54010){
var state_val_54011 = (state_54010[(1)]);
if((state_val_54011 === (1))){
var inst_54004 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_54005 = ["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438","error"];
var inst_54006 = cljs.core.PersistentHashMap.fromArrays(inst_54004,inst_54005);
var state_54010__$1 = state_54010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54010__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_54006);
} else {
if((state_val_54011 === (2))){
var inst_54008 = (state_54010[(2)]);
var state_54010__$1 = state_54010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54010__$1,inst_54008);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto____0 = (function (){
var statearr_54015 = [null,null,null,null,null,null,null];
(statearr_54015[(0)] = gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto__);

(statearr_54015[(1)] = (1));

return statearr_54015;
});
var gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto____1 = (function (state_54010){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_54010);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e54016){if((e54016 instanceof Object)){
var ex__37986__auto__ = e54016;
var statearr_54017_54019 = state_54010;
(statearr_54017_54019[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54010);

return cljs.core.cst$kw$recur;
} else {
throw e54016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__54020 = state_54010;
state_54010 = G__54020;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto__ = function(state_54010){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto____1.call(this,state_54010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_54018 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_54018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_54018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Редактировать категорию
 */
gcclocal.diagrams.moneyincomes.edit_category = (function gcclocal$diagrams$moneyincomes$edit_category(category_type,input_el,id){
return gcclocal.comm.utils.post_json_with_success_check([cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type))?"incomecategory":"expensecategory")),cljs.core.str("/edit")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,input_el.target.value], null)], null),(function (_){
(gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.turn_off_modes.call(null));

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_54046){
var state_val_54047 = (state_54046[(1)]);
if((state_val_54047 === (1))){
var inst_54038 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_54039 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_54040 = gcclocal.comm.utils.get_errors_str_from_map(inst_54039);
var inst_54041 = [inst_54040,"error"];
var inst_54042 = cljs.core.PersistentHashMap.fromArrays(inst_54038,inst_54041);
var state_54046__$1 = state_54046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54046__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_54042);
} else {
if((state_val_54047 === (2))){
var inst_54044 = (state_54046[(2)]);
var state_54046__$1 = state_54046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54046__$1,inst_54044);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto____0 = (function (){
var statearr_54051 = [null,null,null,null,null,null,null];
(statearr_54051[(0)] = gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto__);

(statearr_54051[(1)] = (1));

return statearr_54051;
});
var gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto____1 = (function (state_54046){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_54046);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e54052){if((e54052 instanceof Object)){
var ex__37986__auto__ = e54052;
var statearr_54053_54055 = state_54046;
(statearr_54053_54055[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54046);

return cljs.core.cst$kw$recur;
} else {
throw e54052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__54056 = state_54046;
state_54046 = G__54056;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto__ = function(state_54046){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto____1.call(this,state_54046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_54054 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_54054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_54054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Добавить запись категории
 */
gcclocal.diagrams.moneyincomes.add_category_item = (function gcclocal$diagrams$moneyincomes$add_category_item(category_type,category_id,item_date,summ){
return gcclocal.comm.utils.post_json_with_success_check([cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type))?"incomeitem":"expenseitem")),cljs.core.str("/add")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item_date,item_date,cljs.core.cst$kw$category_id,category_id,cljs.core.cst$kw$summ,summ], null)], null),(function (_){
(gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.turn_off_modes.call(null));

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430");
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_54082){
var state_val_54083 = (state_54082[(1)]);
if((state_val_54083 === (1))){
var inst_54074 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_54075 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_54076 = gcclocal.comm.utils.get_errors_str_from_map(inst_54075);
var inst_54077 = [inst_54076,"error"];
var inst_54078 = cljs.core.PersistentHashMap.fromArrays(inst_54074,inst_54077);
var state_54082__$1 = state_54082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54082__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_54078);
} else {
if((state_val_54083 === (2))){
var inst_54080 = (state_54082[(2)]);
var state_54082__$1 = state_54082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54082__$1,inst_54080);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto____0 = (function (){
var statearr_54087 = [null,null,null,null,null,null,null];
(statearr_54087[(0)] = gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto__);

(statearr_54087[(1)] = (1));

return statearr_54087;
});
var gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto____1 = (function (state_54082){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_54082);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e54088){if((e54088 instanceof Object)){
var ex__37986__auto__ = e54088;
var statearr_54089_54091 = state_54082;
(statearr_54089_54091[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54082);

return cljs.core.cst$kw$recur;
} else {
throw e54088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__54092 = state_54082;
state_54082 = G__54092;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto__ = function(state_54082){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto____1.call(this,state_54082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_54090 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_54090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_54090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Добавить запись категории
 */
gcclocal.diagrams.moneyincomes.edit_category_item = (function gcclocal$diagrams$moneyincomes$edit_category_item(category_type,edited_item,summ){
return gcclocal.comm.utils.post_json_with_success_check([cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type))?"incomeitem":"expenseitem")),cljs.core.str("/edit")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(edited_item),cljs.core.cst$kw$row,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item_date,cljs.core.cst$kw$item_date.cljs$core$IFn$_invoke$arity$1(edited_item),cljs.core.cst$kw$category_id,cljs.core.cst$kw$category_id.cljs$core$IFn$_invoke$arity$1(edited_item),cljs.core.cst$kw$summ,summ], null)], null),(function (_){
(gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.turn_off_modes.call(null));

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_54118){
var state_val_54119 = (state_54118[(1)]);
if((state_val_54119 === (1))){
var inst_54110 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_54111 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_54112 = gcclocal.comm.utils.get_errors_str_from_map(inst_54111);
var inst_54113 = [inst_54112,"error"];
var inst_54114 = cljs.core.PersistentHashMap.fromArrays(inst_54110,inst_54113);
var state_54118__$1 = state_54118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54118__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_54114);
} else {
if((state_val_54119 === (2))){
var inst_54116 = (state_54118[(2)]);
var state_54118__$1 = state_54118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54118__$1,inst_54116);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto____0 = (function (){
var statearr_54123 = [null,null,null,null,null,null,null];
(statearr_54123[(0)] = gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto__);

(statearr_54123[(1)] = (1));

return statearr_54123;
});
var gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto____1 = (function (state_54118){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_54118);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e54124){if((e54124 instanceof Object)){
var ex__37986__auto__ = e54124;
var statearr_54125_54127 = state_54118;
(statearr_54125_54127[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54118);

return cljs.core.cst$kw$recur;
} else {
throw e54124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__54128 = state_54118;
state_54118 = G__54128;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto__ = function(state_54118){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto____1.call(this,state_54118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_54126 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_54126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_54126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
gcclocal.diagrams.moneyincomes.delete_category_item = (function gcclocal$diagrams$moneyincomes$delete_category_item(category_type,id){
return gcclocal.comm.utils.post_json_with_success_check([cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type))?"incomeitem":"expenseitem")),cljs.core.str("/delete")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),(function (_){
(gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.turn_off_modes.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.turn_off_modes.call(null));

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh("\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430");
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_54150){
var state_val_54151 = (state_54150[(1)]);
if((state_val_54151 === (1))){
var inst_54144 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_54145 = ["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043F\u0438\u0441\u0438","error"];
var inst_54146 = cljs.core.PersistentHashMap.fromArrays(inst_54144,inst_54145);
var state_54150__$1 = state_54150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54150__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_54146);
} else {
if((state_val_54151 === (2))){
var inst_54148 = (state_54150[(2)]);
var state_54150__$1 = state_54150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54150__$1,inst_54148);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto__ = null;
var gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto____0 = (function (){
var statearr_54155 = [null,null,null,null,null,null,null];
(statearr_54155[(0)] = gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto__);

(statearr_54155[(1)] = (1));

return statearr_54155;
});
var gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto____1 = (function (state_54150){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_54150);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e54156){if((e54156 instanceof Object)){
var ex__37986__auto__ = e54156;
var statearr_54157_54159 = state_54150;
(statearr_54157_54159[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54150);

return cljs.core.cst$kw$recur;
} else {
throw e54156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__54160 = state_54150;
state_54150 = G__54160;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto__ = function(state_54150){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto____1.call(this,state_54150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto____0;
gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto____1;
return gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_54158 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_54158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_54158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Сделать высоту всей строки = высоте самой высокой ячейки
 *   (чтобы исправить баг с фикс.столбцом)
 */
gcclocal.diagrams.moneyincomes.set_tr_height_to_max = (function gcclocal$diagrams$moneyincomes$set_tr_height_to_max(react_tr_elem){
var tr_elem = ReactDOM.findDOMNode(react_tr_elem);
var max_h = (new $(tr_elem)).find(">:first-child").height();
return (new $(tr_elem)).height((max_h + (10)));
});
/**
 * Показать попап окошко для ячейки
 */
gcclocal.diagrams.moneyincomes.show_popup = (function gcclocal$diagrams$moneyincomes$show_popup(evt){
return (new $(evt.target)).popup((function (){var obj54164 = {"popup":(new $(".ui.popup")),"hoverable":true,"on":"manual","hideOnScroll":true,"exclusive":true,"position":"bottom center"};
return obj54164;
})()).popup("show");
});
/**
 * Скрыть все попапы
 */
gcclocal.diagrams.moneyincomes.hide_popup = (function gcclocal$diagrams$moneyincomes$hide_popup(){
return $(".inner").popup("hide all");
});
/**
 * Показать контекстное меню для добавления записи в категорию
 */
gcclocal.diagrams.moneyincomes.show_custom_add_popup = (function gcclocal$diagrams$moneyincomes$show_custom_add_popup(elem){
var top_offset_54173 = [cljs.core.str(((new $(elem)).offset().top - (40))),cljs.core.str("px")].join('');
var left_offset_54174 = [cljs.core.str(((new $(elem)).offset().left + (10))),cljs.core.str("px")].join('');
(new $(".custom-add-menu")).css({"top": top_offset_54173, "left": left_offset_54174});

var G__54170 = (function (){var G__54172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_category_DASH_item_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54172) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54172));
})();
var G__54171 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54170,G__54171) : cljs.core.reset_BANG_.call(null,G__54170,G__54171));
});
/**
 * Отключить режим показа контекстного меню
 *   для добавления записи в категорию
 */
gcclocal.diagrams.moneyincomes.turn_off_add_custom_item_mode = (function gcclocal$diagrams$moneyincomes$turn_off_add_custom_item_mode(){
var G__54180 = (function (){var G__54182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_category_DASH_item_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54182) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54182));
})();
var G__54181 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54180,G__54181) : cljs.core.reset_BANG_.call(null,G__54180,G__54181));
});
/**
 * Выбрать ячейку (в поступлениях от клиента)
 */
gcclocal.diagrams.moneyincomes.select_cell = (function gcclocal$diagrams$moneyincomes$select_cell(cell_info){
var G__54188 = (function (){var G__54190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_cell], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54190) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54190));
})();
var G__54189 = cell_info;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54188,G__54189) : cljs.core.reset_BANG_.call(null,G__54188,G__54189));
});
/**
 * Убрать выделение с ячейки
 */
gcclocal.diagrams.moneyincomes.deselect_cell = (function gcclocal$diagrams$moneyincomes$deselect_cell(){
var G__54196_54199 = (function (){var G__54198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_cell], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54198) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54198));
})();
var G__54197_54200 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54196_54199,G__54197_54200) : cljs.core.reset_BANG_.call(null,G__54196_54199,G__54197_54200));

return gcclocal.diagrams.moneyincomes.hide_popup();
});
/**
 * Проверка, что ячейка выделена
 */
gcclocal.diagrams.moneyincomes.cell_selected_QMARK_ = (function gcclocal$diagrams$moneyincomes$cell_selected_QMARK_(cell_info){
var sel_cell = (function (){var G__54205 = (function (){var G__54206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_cell], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54206) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54206));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54205) : cljs.core.deref.call(null,G__54205));
})();
return (!((sel_cell == null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$row_DASH_id.cljs$core$IFn$_invoke$arity$1(cell_info),cljs.core.cst$kw$row_DASH_id.cljs$core$IFn$_invoke$arity$1(sel_cell))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$col_DASH_id.cljs$core$IFn$_invoke$arity$1(cell_info),cljs.core.cst$kw$col_DASH_id.cljs$core$IFn$_invoke$arity$1(sel_cell)));
});
/**
 * Выбрать категорию
 */
gcclocal.diagrams.moneyincomes.select_category = (function gcclocal$diagrams$moneyincomes$select_category(category_id,category_type){
var G__54212 = (function (){var G__54214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_category], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54214) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54214));
})();
var G__54213 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$category_DASH_id,category_id,cljs.core.cst$kw$category_DASH_type,category_type], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54212,G__54213) : cljs.core.reset_BANG_.call(null,G__54212,G__54213));
});
/**
 * Убрать выделение с категории
 */
gcclocal.diagrams.moneyincomes.deselect_category = (function gcclocal$diagrams$moneyincomes$deselect_category(){
var G__54220 = (function (){var G__54222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_category], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54222) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54222));
})();
var G__54221 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54220,G__54221) : cljs.core.reset_BANG_.call(null,G__54220,G__54221));
});
/**
 * Проверка, что категория выделена
 */
gcclocal.diagrams.moneyincomes.category_selected_QMARK_ = (function gcclocal$diagrams$moneyincomes$category_selected_QMARK_(category_id,category_type){
var sel_cat = (function (){var G__54227 = (function (){var G__54228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_category], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54228) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54228));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54227) : cljs.core.deref.call(null,G__54227));
})();
return (!((sel_cat == null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category_DASH_id.cljs$core$IFn$_invoke$arity$1(sel_cat),category_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category_DASH_type.cljs$core$IFn$_invoke$arity$1(sel_cat),category_type));
});
/**
 * Найти cell-data по дате и клиенту
 */
gcclocal.diagrams.moneyincomes.cell_data_by_date_from_client = (function gcclocal$diagrams$moneyincomes$cell_data_by_date_from_client(client_id,d){
var client_cinfos = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__54233 = (function (){var G__54234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clients_DASH_cinfos], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54234) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54234));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54233) : cljs.core.deref.call(null,G__54233));
})(),client_id);
return cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(client_cinfos,d));
});
/**
 * Функция при смене 'даты с' при добавлении перемещения
 *   (для обновления макс.суммы)
 */
gcclocal.diagrams.moneyincomes.change_from_date_in_movement = (function gcclocal$diagrams$moneyincomes$change_from_date_in_movement(date_str,client){
var date_iso = gcclocal.comm.utils.ddmmyyyy__GT_real_iso_date_str(date_str);
var cell_d = gcclocal.diagrams.moneyincomes.cell_data_by_date_from_client(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(client),date_iso);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var G__54237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54237) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54237));
})(),((function (date_iso,cell_d){
return (function (p1__54235_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54235_SHARP_,cljs.core.cst$kw$from_DASH_date,date_iso),cljs.core.cst$kw$max_DASH_amount,gcclocal.diagrams.moneyincomes_calc.total_summ_cd(cell_d));
});})(date_iso,cell_d))
);
});
/**
 * Функция при смене 'даты на' при добавлении перемещения
 */
gcclocal.diagrams.moneyincomes.change_to_date_in_movement = (function gcclocal$diagrams$moneyincomes$change_to_date_in_movement(date_str){
var date_iso = gcclocal.comm.utils.ddmmyyyy__GT_real_iso_date_str(date_str);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var G__54240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54240) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54240));
})(),((function (date_iso){
return (function (p1__54238_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54238_SHARP_,cljs.core.cst$kw$to_DASH_date,date_iso);
});})(date_iso))
);
});
/**
 * Включить режим добавления категории
 */
gcclocal.diagrams.moneyincomes.turn_add_category_mode_on = (function gcclocal$diagrams$moneyincomes$turn_add_category_mode_on(category_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type)){
var G__54250 = (function (){var G__54252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_income_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54252) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54252));
})();
var G__54251 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54250,G__54251) : cljs.core.reset_BANG_.call(null,G__54250,G__54251));
} else {
var G__54254 = (function (){var G__54256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_expense_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54256) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54256));
})();
var G__54255 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54254,G__54255) : cljs.core.reset_BANG_.call(null,G__54254,G__54255));
}
});
/**
 * Включить режим редактирования категории
 */
gcclocal.diagrams.moneyincomes.turn_edit_category_mode_on = (function gcclocal$diagrams$moneyincomes$turn_edit_category_mode_on(category_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type)){
var G__54266 = (function (){var G__54268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_income_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54268) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54268));
})();
var G__54267 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54266,G__54267) : cljs.core.reset_BANG_.call(null,G__54266,G__54267));
} else {
var G__54270 = (function (){var G__54272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_expense_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54272) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54272));
})();
var G__54271 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54270,G__54271) : cljs.core.reset_BANG_.call(null,G__54270,G__54271));
}
});
/**
 * Включить режим редактирования ячейки категории
 */
gcclocal.diagrams.moneyincomes.turn_edit_category_item_mode_on = (function gcclocal$diagrams$moneyincomes$turn_edit_category_item_mode_on(category_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$income,category_type)){
var G__54282 = (function (){var G__54284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_income_DASH_item_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54284) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54284));
})();
var G__54283 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54282,G__54283) : cljs.core.reset_BANG_.call(null,G__54282,G__54283));
} else {
var G__54286 = (function (){var G__54288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_expense_DASH_item_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54288) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54288));
})();
var G__54287 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54286,G__54287) : cljs.core.reset_BANG_.call(null,G__54286,G__54287));
}
});
gcclocal.diagrams.moneyincomes.turn_add_item_popup_on = (function gcclocal$diagrams$moneyincomes$turn_add_item_popup_on(evt){
return gcclocal.diagrams.moneyincomes.show_custom_add_popup(evt.target);
});
/**
 * Открыть модальное окно добавления перемещения НА эту ячейку
 */
gcclocal.diagrams.moneyincomes.show_modal_to_movement = (function gcclocal$diagrams$moneyincomes$show_modal_to_movement(selected_cell){
gcclocal.diagrams.moneyincomes.hide_popup();

var client_54312 = gcclocal.comm.utils.find_some((function (p1__54289_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__54289_SHARP_),cljs.core.cst$kw$row_DASH_id.cljs$core$IFn$_invoke$arity$1(selected_cell));
}),(function (){var G__54302 = (function (){var G__54303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_clients], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54303) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54303));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54302) : cljs.core.deref.call(null,G__54302));
})());
var to_date_54313 = cljs.core.cst$kw$col_DASH_id.cljs$core$IFn$_invoke$arity$1(selected_cell);
var G__54305_54314 = (function (){var G__54307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54307) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54307));
})();
var G__54306_54315 = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$move_DASH_type,cljs.core.cst$kw$to_DASH_this_DASH_cell,cljs.core.cst$kw$client,client_54312,cljs.core.cst$kw$from_DASH_date,null,cljs.core.cst$kw$to_DASH_date,to_date_54313,cljs.core.cst$kw$amount,(0),cljs.core.cst$kw$comment,null,cljs.core.cst$kw$max_DASH_amount,(0),cljs.core.cst$kw$from_DASH_expired_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cell_DASH_data,cljs.core.cst$kw$expired_QMARK_], null))], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54305_54314,G__54306_54315) : cljs.core.reset_BANG_.call(null,G__54305_54314,G__54306_54315));

var G__54309_54316 = (function (){var G__54311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement_DASH_errors], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54311) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54311));
})();
var G__54310_54317 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54309_54316,G__54310_54317) : cljs.core.reset_BANG_.call(null,G__54309_54316,G__54310_54317));

return $("#addMovementModal").modal("show");
});
/**
 * Открыть модальное окно добавления перемещения С этой ячейки
 */
gcclocal.diagrams.moneyincomes.show_modal_from_movement = (function gcclocal$diagrams$moneyincomes$show_modal_from_movement(selected_cell){
gcclocal.diagrams.moneyincomes.hide_popup();

var client_54341 = gcclocal.comm.utils.find_some((function (p1__54318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__54318_SHARP_),cljs.core.cst$kw$row_DASH_id.cljs$core$IFn$_invoke$arity$1(selected_cell));
}),(function (){var G__54331 = (function (){var G__54332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_clients], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54332) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54332));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54331) : cljs.core.deref.call(null,G__54331));
})());
var from_date_54342 = cljs.core.cst$kw$col_DASH_id.cljs$core$IFn$_invoke$arity$1(selected_cell);
var max_amount_54343 = gcclocal.diagrams.moneyincomes_calc.total_summ_cd(cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(selected_cell));
var G__54334_54344 = (function (){var G__54336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54336) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54336));
})();
var G__54335_54345 = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$move_DASH_type,cljs.core.cst$kw$from_DASH_this_DASH_cell,cljs.core.cst$kw$client,client_54341,cljs.core.cst$kw$from_DASH_date,from_date_54342,cljs.core.cst$kw$to_DASH_date,null,cljs.core.cst$kw$amount,(0),cljs.core.cst$kw$comment,null,cljs.core.cst$kw$max_DASH_amount,max_amount_54343,cljs.core.cst$kw$from_DASH_expired_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cell_DASH_data,cljs.core.cst$kw$expired_QMARK_], null))], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54334_54344,G__54335_54345) : cljs.core.reset_BANG_.call(null,G__54334_54344,G__54335_54345));

var G__54338_54346 = (function (){var G__54340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement_DASH_errors], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54340) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54340));
})();
var G__54339_54347 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54338_54346,G__54339_54347) : cljs.core.reset_BANG_.call(null,G__54338_54346,G__54339_54347));

return $("#addMovementModal").modal("show");
});
/**
 * Отключить все режимы
 */
gcclocal.diagrams.moneyincomes.turn_off_modes = (function gcclocal$diagrams$moneyincomes$turn_off_modes(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var G__54350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54350) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54350));
})(),(function (p1__54348_SHARP_){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,false);
}),cljs.core.PersistentArrayMap.EMPTY,p1__54348_SHARP_);
}));

$("#customItemDateInput").val("");

return $("#customItemSummInput").val("");
});
/**
 * Инициализация watcher-ов
 */
gcclocal.diagrams.moneyincomes.init_watchers = (function gcclocal$diagrams$moneyincomes$init_watchers(){
cljs.core.add_watch((function (){var G__54366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_cell], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54366) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54366));
})(),cljs.core.cst$kw$sel_DASH_cell_DASH_watch,(function (k,a,old_s,new_s){
if((new_s == null)){
return null;
} else {
gcclocal.diagrams.moneyincomes.deselect_category();

return gcclocal.diagrams.moneyincomes.turn_off_modes();
}
}));

cljs.core.add_watch((function (){var G__54367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_category], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54367) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54367));
})(),cljs.core.cst$kw$sel_DASH_cat_DASH_watch,(function (k,a,old_s,new_s){
if((new_s == null)){
return null;
} else {
gcclocal.diagrams.moneyincomes.deselect_cell();

return gcclocal.diagrams.moneyincomes.turn_off_modes();
}
}));

var watch_fn_54381 = (function (k,a,old_s,new_s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_s,true)){
return gcclocal.diagrams.moneyincomes.deselect_cell();
} else {
return null;
}
});
cljs.core.add_watch((function (){var G__54368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_income_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54368) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54368));
})(),cljs.core.cst$kw$add_DASH_income_DASH_cat_DASH_watch,watch_fn_54381);

cljs.core.add_watch((function (){var G__54369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_expense_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54369) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54369));
})(),cljs.core.cst$kw$add_DASH_expense_DASH_cat_DASH_watch,watch_fn_54381);

cljs.core.some((function (p__54370){
var vec__54371 = p__54370;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54371,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$a1,true,cljs.core.cst$kw$a2,false], null));

return window.addEventListener("keydown",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),(e["keyCode"]))){
if(cljs.core.truth_(cljs.core.some((function (p__54374){
var vec__54375 = p__54374;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54375,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true);
}),(function (){var G__54379 = (function (){var G__54380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54380) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54380));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54379) : cljs.core.deref.call(null,G__54379));
})()))){
return gcclocal.diagrams.moneyincomes.turn_off_modes();
} else {
gcclocal.diagrams.moneyincomes.deselect_cell();

return gcclocal.diagrams.moneyincomes.deselect_category();
}
} else {
return null;
}
}));
});
gcclocal.diagrams.moneyincomes.on_update_tr = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_update,(function (p1__54382_SHARP_){
return gcclocal.diagrams.moneyincomes.set_tr_height_to_max(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(p1__54382_SHARP_));
})], null);
/**
 * Ячейка для поступления клиента
 *   (применяется также для просрочки)
 */
gcclocal.diagrams.moneyincomes.client_income_cell_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (cell_info,is_selected_QMARK_){
var G__54384 = "td";
var G__54385 = {"onClick": ((function (G__54384){
return (function (p1__54383_SHARP_){
gcclocal.diagrams.moneyincomes.select_cell(cell_info);

return gcclocal.diagrams.moneyincomes.show_popup(p1__54383_SHARP_);
});})(G__54384))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("hoverable "),cljs.core.str((cljs.core.truth_(is_selected_QMARK_)?"selected-cell ":"")),cljs.core.str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cell_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cell_DASH_data,cljs.core.cst$kw$error_DASH_cell_QMARK_], null)))?"error ":(((cljs.core.not(gcclocal.comm.utils.nil_or_empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cell_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cell_DASH_data,cljs.core.cst$kw$from_DASH_movements], null))))) || (cljs.core.not(gcclocal.comm.utils.nil_or_empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cell_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cell_DASH_data,cljs.core.cst$kw$to_DASH_movements], null))))))?"positive ":"")))].join('')], null))};
var G__54386 = sablono.interpreter.interpret(gcclocal.comm.utils.money_str(gcclocal.diagrams.moneyincomes_calc.total_summ_cd(cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(cell_info))));
return React.createElement(G__54384,G__54385,G__54386);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"client-income-cell-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54387__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54387 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54388__i = 0, G__54388__a = new Array(arguments.length -  0);
while (G__54388__i < G__54388__a.length) {G__54388__a[G__54388__i] = arguments[G__54388__i + 0]; ++G__54388__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54388__a,0);
} 
return G__54387__delegate.call(this,args__42471__auto__);};
G__54387.cljs$lang$maxFixedArity = 0;
G__54387.cljs$lang$applyTo = (function (arglist__54389){
var args__42471__auto__ = cljs.core.seq(arglist__54389);
return G__54387__delegate(args__42471__auto__);
});
G__54387.cljs$core$IFn$_invoke$arity$variadic = G__54387__delegate;
return G__54387;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Строка поступлений от клиента
 */
gcclocal.diagrams.moneyincomes.client_income_tr_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (client,all_visible_dates,client_cinfos,expired_cinfo){
var G__54397 = "tr";
var G__54398 = null;
var G__54399 = (function (){var attrs54391 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(client);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54391))?sablono.interpreter.attributes(attrs54391):null),((cljs.core.map_QMARK_(attrs54391))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54391)], null)));
})();
var G__54400 = sablono.interpreter.interpret((function (){var G__54403 = expired_cinfo;
var G__54404 = gcclocal.diagrams.moneyincomes.cell_selected_QMARK_(expired_cinfo);
return (gcclocal.diagrams.moneyincomes.client_income_cell_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.diagrams.moneyincomes.client_income_cell_view.cljs$core$IFn$_invoke$arity$2(G__54403,G__54404) : gcclocal.diagrams.moneyincomes.client_income_cell_view.call(null,G__54403,G__54404));
})());
var G__54401 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54397,G__54398,G__54399,G__54400){
return (function (p1__54390_SHARP_){
var c_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(client_cinfos,p1__54390_SHARP_);
var G__54405 = c_info;
var G__54406 = gcclocal.diagrams.moneyincomes.cell_selected_QMARK_(c_info);
return (gcclocal.diagrams.moneyincomes.client_income_cell_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.diagrams.moneyincomes.client_income_cell_view.cljs$core$IFn$_invoke$arity$2(G__54405,G__54406) : gcclocal.diagrams.moneyincomes.client_income_cell_view.call(null,G__54405,G__54406));
});})(G__54397,G__54398,G__54399,G__54400))
,all_visible_dates));
var G__54402 = (function (){var attrs54392 = gcclocal.comm.utils.money_str((((0) + cljs.core.reduce_kv(((function (G__54397,G__54398,G__54399,G__54400,G__54401){
return (function (summ,k,v){
return (summ + gcclocal.diagrams.moneyincomes_calc.total_summ_cd(cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(v)));
});})(G__54397,G__54398,G__54399,G__54400,G__54401))
,(0),client_cinfos)) + gcclocal.diagrams.moneyincomes_calc.total_summ_cd(cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(expired_cinfo))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54392))?sablono.interpreter.attributes(attrs54392):null),((cljs.core.map_QMARK_(attrs54392))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54392)], null)));
})();
return React.createElement(G__54397,G__54398,G__54399,G__54400,G__54401,G__54402);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"client-income-tr-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54407__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54407 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54408__i = 0, G__54408__a = new Array(arguments.length -  0);
while (G__54408__i < G__54408__a.length) {G__54408__a[G__54408__i] = arguments[G__54408__i + 0]; ++G__54408__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54408__a,0);
} 
return G__54407__delegate.call(this,args__42471__auto__);};
G__54407.cljs$lang$maxFixedArity = 0;
G__54407.cljs$lang$applyTo = (function (arglist__54409){
var args__42471__auto__ = cljs.core.seq(arglist__54409);
return G__54407__delegate(args__42471__auto__);
});
G__54407.cljs$core$IFn$_invoke$arity$variadic = G__54407__delegate;
return G__54407;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Строка для добавления новой категории
 */
gcclocal.diagrams.moneyincomes.add_custom_category_tr_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (category_type,all_visible_dates,add_category_mode_QMARK_){
var G__54416 = "tr";
var G__54417 = {"className": "income-row"};
var G__54418 = (function (){var attrs54411 = (cljs.core.truth_(add_category_mode_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$fluid$input$to_DASH_left_DASH_side_DASH_margin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small_DASH_rect_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$auto_DASH_focus,true,cljs.core.cst$kw$on_DASH_key_DASH_press,((function (G__54416,G__54417){
return (function (p1__54410_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__54410_SHARP_.key)){
return gcclocal.diagrams.moneyincomes.add_category(category_type,p1__54410_SHARP_);
} else {
return null;
}
});})(G__54416,G__54417))
,cljs.core.cst$kw$placeholder,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$add_DASH_category_DASH_span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__54416,G__54417){
return (function (){
return gcclocal.diagrams.moneyincomes.turn_add_category_mode_on(category_type);
});})(G__54416,G__54417))
], null),"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54411))?sablono.interpreter.attributes(attrs54411):null),((cljs.core.map_QMARK_(attrs54411))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54411)], null)));
})();
var G__54419 = React.createElement("td",null);
var G__54420 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54416,G__54417,G__54418,G__54419){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td], null);
});})(G__54416,G__54417,G__54418,G__54419))
,all_visible_dates));
var G__54421 = React.createElement("td",null);
return React.createElement(G__54416,G__54417,G__54418,G__54419,G__54420,G__54421);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcclocal.diagrams.moneyincomes.on_update_tr], null)),"add-custom-category-tr-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54422__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54422 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54423__i = 0, G__54423__a = new Array(arguments.length -  0);
while (G__54423__i < G__54423__a.length) {G__54423__a[G__54423__i] = arguments[G__54423__i + 0]; ++G__54423__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54423__a,0);
} 
return G__54422__delegate.call(this,args__42471__auto__);};
G__54422.cljs$lang$maxFixedArity = 0;
G__54422.cljs$lang$applyTo = (function (arglist__54424){
var args__42471__auto__ = cljs.core.seq(arglist__54424);
return G__54422__delegate(args__42471__auto__);
});
G__54422.cljs$core$IFn$_invoke$arity$variadic = G__54422__delegate;
return G__54422;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info = (function gcclocal$diagrams$moneyincomes$cat_item__GT_cell_info(cat_type,cat_id,d){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row_DASH_id,[cljs.core.str(cat_id),cljs.core.str("_"),cljs.core.str(cljs.core.name(cat_type)),cljs.core.str("_cat")].join(''),cljs.core.cst$kw$col_DASH_id,d], null);
});
/**
 * Ячейка для записи категории
 */
gcclocal.diagrams.moneyincomes.custom_category_cell_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (cat_type,cat_id,d,cat_item,is_selected_QMARK_,edit_mode_QMARK_){
var G__54426 = "td";
var G__54427 = {"onClick": ((function (G__54426){
return (function (){
return gcclocal.diagrams.moneyincomes.select_cell(gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info(cat_type,cat_id,d));
});})(G__54426))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("hoverable "),cljs.core.str((cljs.core.truth_(is_selected_QMARK_)?"selected-cell ":""))].join('')], null))};
var G__54428 = (cljs.core.truth_(is_selected_QMARK_)?(cljs.core.truth_(edit_mode_QMARK_)?(function (){var G__54429 = "div";
var G__54430 = {"className": "ui fluid input to-left-side-margin"};
var G__54431 = sablono.interpreter.create_element("input",{"type": "number", "step": "0.01", "autoFocus": true, "placeholder": "0", "onKeyPress": ((function (G__54429,G__54430,G__54426,G__54427){
return (function (p1__54425_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__54425_SHARP_.key)){
if(cljs.core.truth_(cat_item)){
return gcclocal.diagrams.moneyincomes.edit_category_item(cat_type,cat_item,p1__54425_SHARP_.target.value);
} else {
return gcclocal.diagrams.moneyincomes.add_category_item(cat_type,cat_id,d,p1__54425_SHARP_.target.value);
}
} else {
return null;
}
});})(G__54429,G__54430,G__54426,G__54427))
, "defaultValue": cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(cat_item), "className": "small-rect-input right-aligned"});
return React.createElement(G__54429,G__54430,G__54431);
})():(cljs.core.truth_(cat_item)?(function (){var G__54437 = "div";
var G__54438 = null;
var G__54439 = (function (){var G__54441 = "i";
var G__54442 = {"style": {"fontSize": ".65rem"}, "onClick": ((function (G__54441,G__54437,G__54438,G__54426,G__54427){
return (function (){
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$2("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C?",((function (G__54441,G__54437,G__54438,G__54426,G__54427){
return (function (){
return gcclocal.diagrams.moneyincomes.delete_category_item(cat_type,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat_item));
});})(G__54441,G__54437,G__54438,G__54426,G__54427))
);
});})(G__54441,G__54437,G__54438,G__54426,G__54427))
, "title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C", "className": "remove blue inverted bordered mini link icon left-floated-icon"};
return React.createElement(G__54441,G__54442);
})();
var G__54440 = (function (){var G__54443 = "span";
var G__54444 = {"onClick": ((function (G__54443,G__54437,G__54438,G__54439,G__54426,G__54427){
return (function (){
return gcclocal.diagrams.moneyincomes.turn_edit_category_item_mode_on(cat_type);
});})(G__54443,G__54437,G__54438,G__54439,G__54426,G__54427))
, "className": "editable-span"};
var G__54445 = sablono.interpreter.interpret(gcclocal.comm.utils.money_str(cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(cat_item)));
return React.createElement(G__54443,G__54444,G__54445);
})();
return React.createElement(G__54437,G__54438,G__54439,G__54440);
})():(function (){var G__54449 = "div";
var G__54450 = null;
var G__54451 = (function (){var G__54452 = "span";
var G__54453 = {"onClick": ((function (G__54452,G__54449,G__54450,G__54426,G__54427){
return (function (){
return gcclocal.diagrams.moneyincomes.turn_edit_category_item_mode_on(cat_type);
});})(G__54452,G__54449,G__54450,G__54426,G__54427))
, "className": "editable-span italic-text-link"};
var G__54454 = "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C";
return React.createElement(G__54452,G__54453,G__54454);
})();
return React.createElement(G__54449,G__54450,G__54451);
})())):sablono.interpreter.interpret(gcclocal.comm.utils.money_str((cljs.core.truth_(cat_item)?cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(cat_item):(0)))));
return React.createElement(G__54426,G__54427,G__54428);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"custom-category-cell-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54455__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54455 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54456__i = 0, G__54456__a = new Array(arguments.length -  0);
while (G__54456__i < G__54456__a.length) {G__54456__a[G__54456__i] = arguments[G__54456__i + 0]; ++G__54456__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54456__a,0);
} 
return G__54455__delegate.call(this,args__42471__auto__);};
G__54455.cljs$lang$maxFixedArity = 0;
G__54455.cljs$lang$applyTo = (function (arglist__54457){
var args__42471__auto__ = cljs.core.seq(arglist__54457);
return G__54455__delegate(args__42471__auto__);
});
G__54455.cljs$core$IFn$_invoke$arity$variadic = G__54455__delegate;
return G__54455;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Первый столбец в строке категории
 */
gcclocal.diagrams.moneyincomes.custom_category_head_td_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (category_type,category,cat_is_selected_QMARK_,cat_edit_mode_QMARK_){
var G__54460 = "td";
var G__54461 = {"onClick": ((function (G__54460){
return (function (){
return gcclocal.diagrams.moneyincomes.select_category(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category),category_type);
});})(G__54460))
};
var G__54462 = (cljs.core.truth_(cat_is_selected_QMARK_)?(cljs.core.truth_(cat_edit_mode_QMARK_)?(function (){var G__54463 = "div";
var G__54464 = {"className": "ui fluid input to-left-side-margin"};
var G__54465 = sablono.interpreter.create_element("input",{"type": "text", "name": "editCatNameInput", "autoFocus": true, "onKeyPress": ((function (G__54463,G__54464,G__54460,G__54461){
return (function (p1__54458_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__54458_SHARP_.key)){
return gcclocal.diagrams.moneyincomes.edit_category(category_type,p1__54458_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category));
} else {
return null;
}
});})(G__54463,G__54464,G__54460,G__54461))
, "defaultValue": cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(category), "className": "small-rect-input"});
return React.createElement(G__54463,G__54464,G__54465);
})():(function (){var G__54473 = "div";
var G__54474 = null;
var G__54475 = (function (){var G__54478 = "span";
var G__54479 = {"onClick": ((function (G__54478,G__54473,G__54474,G__54460,G__54461){
return (function (){
return gcclocal.diagrams.moneyincomes.turn_edit_category_mode_on(category_type);
});})(G__54478,G__54473,G__54474,G__54460,G__54461))
, "className": "editable-span"};
var G__54480 = sablono.interpreter.interpret(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(category));
return React.createElement(G__54478,G__54479,G__54480);
})();
var G__54476 = (function (){var G__54481 = "i";
var G__54482 = {"style": {"float": "right"}, "title": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "onClick": ((function (G__54481,G__54473,G__54474,G__54475,G__54460,G__54461){
return (function (p1__54459_SHARP_){
gcclocal.diagrams.moneyincomes.turn_add_item_popup_on(p1__54459_SHARP_);

return p1__54459_SHARP_.stopPropagation();
});})(G__54481,G__54473,G__54474,G__54475,G__54460,G__54461))
, "className": "add blue inverted bordered link mini icon add-item-icon"};
return React.createElement(G__54481,G__54482);
})();
var G__54477 = (function (){var G__54483 = "i";
var G__54484 = {"style": {"float": "right"}, "onClick": ((function (G__54483,G__54473,G__54474,G__54475,G__54476,G__54460,G__54461){
return (function (){
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$3([cljs.core.str("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \""),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(category)),cljs.core.str("\"")].join(''),[cljs.core.str("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C\n                            \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0435\u0451 \u0437\u0430\u043F\u0438\u0441\u044F\u043C\u0438?")].join(''),((function (G__54483,G__54473,G__54474,G__54475,G__54476,G__54460,G__54461){
return (function (){
return gcclocal.diagrams.moneyincomes.delete_category(category_type,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category));
});})(G__54483,G__54473,G__54474,G__54475,G__54476,G__54460,G__54461))
);
});})(G__54483,G__54473,G__54474,G__54475,G__54476,G__54460,G__54461))
, "title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "className": "remove blue inverted bordered link mini icon"};
return React.createElement(G__54483,G__54484);
})();
return React.createElement(G__54473,G__54474,G__54475,G__54476,G__54477);
})()):sablono.interpreter.interpret(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(category)));
return React.createElement(G__54460,G__54461,G__54462);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"custom-category-head-td-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54485__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54485 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54486__i = 0, G__54486__a = new Array(arguments.length -  0);
while (G__54486__i < G__54486__a.length) {G__54486__a[G__54486__i] = arguments[G__54486__i + 0]; ++G__54486__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54486__a,0);
} 
return G__54485__delegate.call(this,args__42471__auto__);};
G__54485.cljs$lang$maxFixedArity = 0;
G__54485.cljs$lang$applyTo = (function (arglist__54487){
var args__42471__auto__ = cljs.core.seq(arglist__54487);
return G__54485__delegate(args__42471__auto__);
});
G__54485.cljs$core$IFn$_invoke$arity$variadic = G__54485__delegate;
return G__54485;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Строка для категории (расхода/дохода)
 */
gcclocal.diagrams.moneyincomes.custom_category_tr_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (category_type,category,cat_items,all_visible_dates,cat_item_edit_mode_QMARK_,cat_edit_mode_QMARK_,cat_is_selected_QMARK_){
var attrs54489 = (gcclocal.diagrams.moneyincomes.custom_category_head_td_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.diagrams.moneyincomes.custom_category_head_td_view.cljs$core$IFn$_invoke$arity$4(category_type,category,cat_is_selected_QMARK_,cat_edit_mode_QMARK_) : gcclocal.diagrams.moneyincomes.custom_category_head_td_view.call(null,category_type,category,cat_is_selected_QMARK_,cat_edit_mode_QMARK_));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tr",((cljs.core.map_QMARK_(attrs54489))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["income-row"], null)], null),attrs54489], 0))):{"className": "income-row"}),((cljs.core.map_QMARK_(attrs54489))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("td",null),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs54489){
return (function (d){
var cat_item = gcclocal.comm.utils.find_some(((function (attrs54489){
return (function (p1__54488_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_date.cljs$core$IFn$_invoke$arity$1(p1__54488_SHARP_),d);
});})(attrs54489))
,cat_items);
var G__54496 = category_type;
var G__54497 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category);
var G__54498 = d;
var G__54499 = cat_item;
var G__54500 = gcclocal.diagrams.moneyincomes.cell_selected_QMARK_(gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info(category_type,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category),d));
var G__54501 = cat_item_edit_mode_QMARK_;
return (gcclocal.diagrams.moneyincomes.custom_category_cell_view.cljs$core$IFn$_invoke$arity$6 ? gcclocal.diagrams.moneyincomes.custom_category_cell_view.cljs$core$IFn$_invoke$arity$6(G__54496,G__54497,G__54498,G__54499,G__54500,G__54501) : gcclocal.diagrams.moneyincomes.custom_category_cell_view.call(null,G__54496,G__54497,G__54498,G__54499,G__54500,G__54501));
});})(attrs54489))
,all_visible_dates)),(function (){var attrs54492 = gcclocal.comm.utils.money_str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs54489){
return (function (s,i){
return (s + cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(i));
});})(attrs54489))
,(0),cat_items));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54492))?sablono.interpreter.attributes(attrs54492):null),((cljs.core.map_QMARK_(attrs54492))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54492)], null)));
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54489),React.createElement("td",null),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs54489){
return (function (d){
var cat_item = gcclocal.comm.utils.find_some(((function (attrs54489){
return (function (p1__54488_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_date.cljs$core$IFn$_invoke$arity$1(p1__54488_SHARP_),d);
});})(attrs54489))
,cat_items);
var G__54502 = category_type;
var G__54503 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category);
var G__54504 = d;
var G__54505 = cat_item;
var G__54506 = gcclocal.diagrams.moneyincomes.cell_selected_QMARK_(gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info(category_type,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category),d));
var G__54507 = cat_item_edit_mode_QMARK_;
return (gcclocal.diagrams.moneyincomes.custom_category_cell_view.cljs$core$IFn$_invoke$arity$6 ? gcclocal.diagrams.moneyincomes.custom_category_cell_view.cljs$core$IFn$_invoke$arity$6(G__54502,G__54503,G__54504,G__54505,G__54506,G__54507) : gcclocal.diagrams.moneyincomes.custom_category_cell_view.call(null,G__54502,G__54503,G__54504,G__54505,G__54506,G__54507));
});})(attrs54489))
,all_visible_dates)),(function (){var attrs54495 = gcclocal.comm.utils.money_str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs54489){
return (function (s,i){
return (s + cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(i));
});})(attrs54489))
,(0),cat_items));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54495))?sablono.interpreter.attributes(attrs54495):null),((cljs.core.map_QMARK_(attrs54495))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54495)], null)));
})()], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcclocal.diagrams.moneyincomes.on_update_tr], null)),"custom-category-tr-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54508__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54508 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54509__i = 0, G__54509__a = new Array(arguments.length -  0);
while (G__54509__i < G__54509__a.length) {G__54509__a[G__54509__i] = arguments[G__54509__i + 0]; ++G__54509__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54509__a,0);
} 
return G__54508__delegate.call(this,args__42471__auto__);};
G__54508.cljs$lang$maxFixedArity = 0;
G__54508.cljs$lang$applyTo = (function (arglist__54510){
var args__42471__auto__ = cljs.core.seq(arglist__54510);
return G__54508__delegate(args__42471__auto__);
});
G__54508.cljs$core$IFn$_invoke$arity$variadic = G__54508__delegate;
return G__54508;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.diagrams.moneyincomes.date_span_view = (function gcclocal$diagrams$moneyincomes$date_span_view(d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),gcclocal.comm.utils.to_print_date(d)], null);
});
gcclocal.diagrams.moneyincomes.c_app_span_view = (function gcclocal$diagrams$moneyincomes$c_app_span_view(c_app){
if(cljs.core.truth_(c_app)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_style,"italic"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(c_app)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"#e25a5a"], null)], null),"\u0431\u0435\u0437 \u0437\u0430\u044F\u0432\u043A\u0438"], null);
}
});
/**
 * Список передвижений внутри попапа
 */
gcclocal.diagrams.moneyincomes.movements_in_popup_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (movement_type,movement){
var from_m_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(movement_type,cljs.core.cst$kw$from);
var G__54513 = "div";
var G__54514 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("item "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$error_DASH_movement_QMARK_.cljs$core$IFn$_invoke$arity$1(movement))?"error-movement":""))].join('')], null))};
var G__54515 = (function (){var G__54522 = "i";
var G__54523 = {"style": {"display": "inline-block"}, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon "),cljs.core.str(((from_m_QMARK_)?"forward mail":"arrow down"))].join('')], null))};
return React.createElement(G__54522,G__54523);
})();
var G__54516 = sablono.interpreter.interpret(gcclocal.comm.utils.money_str(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(movement)));
var G__54517 = ((from_m_QMARK_)?" \u043D\u0430 ":" \u0441 ");
var G__54518 = ((from_m_QMARK_)?sablono.interpreter.interpret(gcclocal.diagrams.moneyincomes.date_span_view(cljs.core.cst$kw$to_date.cljs$core$IFn$_invoke$arity$1(movement))):(cljs.core.truth_(cljs.core.cst$kw$from_date.cljs$core$IFn$_invoke$arity$1(movement))?sablono.interpreter.interpret(gcclocal.diagrams.moneyincomes.date_span_view(cljs.core.cst$kw$from_date.cljs$core$IFn$_invoke$arity$1(movement))):"\u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438"));
var G__54519 = (function (){var G__54524 = "i";
var G__54525 = {"style": {"display": "inline-block", "paddingTop": "0px"}, "title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", "onClick": ((function (G__54524,G__54513,G__54514,G__54515,G__54516,G__54517,G__54518,from_m_QMARK_){
return (function (){
gcclocal.diagrams.moneyincomes.hide_popup();

return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$2("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435\n                                          \u0437\u0430 \u044D\u0442\u0443 \u0434\u0430\u0442\u0443?",((function (G__54524,G__54513,G__54514,G__54515,G__54516,G__54517,G__54518,from_m_QMARK_){
return (function (){
return gcclocal.diagrams.moneyincomes.delete_movement(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(movement));
});})(G__54524,G__54513,G__54514,G__54515,G__54516,G__54517,G__54518,from_m_QMARK_))
);
});})(G__54524,G__54513,G__54514,G__54515,G__54516,G__54517,G__54518,from_m_QMARK_))
, "className": "remove link icon"};
return React.createElement(G__54524,G__54525);
})();
var G__54520 = React.createElement("br",null);
var G__54521 = (function (){var G__54526 = "span";
var G__54527 = {"style": {"fontStyle": "italic"}};
var G__54528 = sablono.interpreter.interpret(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(movement));
return React.createElement(G__54526,G__54527,G__54528);
})();
return React.createElement(G__54513,G__54514,G__54515,G__54516,G__54517,G__54518,G__54519,G__54520,G__54521);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"movements-in-popup-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54529__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54529 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54530__i = 0, G__54530__a = new Array(arguments.length -  0);
while (G__54530__i < G__54530__a.length) {G__54530__a[G__54530__i] = arguments[G__54530__i + 0]; ++G__54530__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54530__a,0);
} 
return G__54529__delegate.call(this,args__42471__auto__);};
G__54529.cljs$lang$maxFixedArity = 0;
G__54529.cljs$lang$applyTo = (function (arglist__54531){
var args__42471__auto__ = cljs.core.seq(arglist__54531);
return G__54529__delegate(args__42471__auto__);
});
G__54529.cljs$core$IFn$_invoke$arity$variadic = G__54529__delegate;
return G__54529;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Попап окно для ячеек поступлений
 */
gcclocal.diagrams.moneyincomes.cell_popup_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (selected_cell){
var cell_data = cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(selected_cell);
var G__54537 = "div";
var G__54538 = {"className": "ui popup"};
var G__54539 = (function (){var attrs54536 = ((cljs.core.not(cljs.core.cst$kw$expired_QMARK_.cljs$core$IFn$_invoke$arity$1(cell_data)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$ui$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u043D\u0430 \u044D\u0442\u0443 \u044F\u0447\u0435\u0439\u043A\u0443",cljs.core.cst$kw$on_DASH_click,((function (G__54537,G__54538,cell_data){
return (function (){
return gcclocal.diagrams.moneyincomes.show_modal_to_movement(selected_cell);
});})(G__54537,G__54538,cell_data))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$arrow$down$icon], null)], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs54536))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","fluid","tiny","icon","buttons"], null)], null),attrs54536], 0))):{"className": "ui fluid tiny icon buttons"}),((cljs.core.map_QMARK_(attrs54536))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54543 = "button";
var G__54544 = {"title": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441 \u044D\u0442\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0438", "onClick": ((function (G__54543,attrs54536,G__54537,G__54538,cell_data){
return (function (){
return gcclocal.diagrams.moneyincomes.show_modal_from_movement(selected_cell);
});})(G__54543,attrs54536,G__54537,G__54538,cell_data))
, "className": "ui button"};
var G__54545 = (function (){var G__54546 = "i";
var G__54547 = {"className": "forward mail icon"};
return React.createElement(G__54546,G__54547);
})();
return React.createElement(G__54543,G__54544,G__54545);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54536),(function (){var G__54550 = "button";
var G__54551 = {"title": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441 \u044D\u0442\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0438", "onClick": ((function (G__54550,attrs54536,G__54537,G__54538,cell_data){
return (function (){
return gcclocal.diagrams.moneyincomes.show_modal_from_movement(selected_cell);
});})(G__54550,attrs54536,G__54537,G__54538,cell_data))
, "className": "ui button"};
var G__54552 = (function (){var G__54553 = "i";
var G__54554 = {"className": "forward mail icon"};
return React.createElement(G__54553,G__54554);
})();
return React.createElement(G__54550,G__54551,G__54552);
})()], null)));
})();
var G__54540 = (function (){var G__54557 = "div";
var G__54558 = {"className": "ui list"};
var G__54559 = (function (){var G__54563 = "div";
var G__54564 = {"className": "ui divider"};
return React.createElement(G__54563,G__54564);
})();
var G__54560 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$misc_DASH_data,cljs.core.cst$kw$show_DASH_inner_DASH_datesumms], null)))?(cljs.core.truth_(cljs.core.cst$kw$expired_QMARK_.cljs$core$IFn$_invoke$arity$1(cell_data))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54557,G__54558,G__54559,G__54537,G__54538,G__54539,cell_data){
return (function (p1__54532_SHARP_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,gcclocal.diagrams.moneyincomes.date_span_view(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p1__54532_SHARP_)),", ",gcclocal.diagrams.moneyincomes.c_app_span_view(cljs.core.cst$kw$clientapplication.cljs$core$IFn$_invoke$arity$1(p1__54532_SHARP_)),":  ",gcclocal.comm.utils.money_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__54532_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c_DASH_money,cljs.core.cst$kw$summ], null)))], null);
});})(G__54557,G__54558,G__54559,G__54537,G__54538,G__54539,cell_data))
,cljs.core.cst$kw$datemoneys.cljs$core$IFn$_invoke$arity$1(cell_data)):cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54557,G__54558,G__54559,G__54537,G__54538,G__54539,cell_data){
return (function (p1__54533_SHARP_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,gcclocal.diagrams.moneyincomes.c_app_span_view(cljs.core.cst$kw$clientapplication.cljs$core$IFn$_invoke$arity$1(p1__54533_SHARP_)),":  ",gcclocal.comm.utils.money_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__54533_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c_DASH_money,cljs.core.cst$kw$summ], null)))], null);
});})(G__54557,G__54558,G__54559,G__54537,G__54538,G__54539,cell_data))
,cljs.core.cst$kw$datemoneys.cljs$core$IFn$_invoke$arity$1(cell_data))):null));
var G__54561 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54557,G__54558,G__54559,G__54560,G__54537,G__54538,G__54539,cell_data){
return (function (p1__54534_SHARP_){
return (gcclocal.diagrams.moneyincomes.movements_in_popup_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.diagrams.moneyincomes.movements_in_popup_view.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from,p1__54534_SHARP_) : gcclocal.diagrams.moneyincomes.movements_in_popup_view.call(null,cljs.core.cst$kw$from,p1__54534_SHARP_));
});})(G__54557,G__54558,G__54559,G__54560,G__54537,G__54538,G__54539,cell_data))
,cljs.core.cst$kw$from_DASH_movements.cljs$core$IFn$_invoke$arity$1(cell_data)));
var G__54562 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54557,G__54558,G__54559,G__54560,G__54561,G__54537,G__54538,G__54539,cell_data){
return (function (p1__54535_SHARP_){
return (gcclocal.diagrams.moneyincomes.movements_in_popup_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.diagrams.moneyincomes.movements_in_popup_view.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to,p1__54535_SHARP_) : gcclocal.diagrams.moneyincomes.movements_in_popup_view.call(null,cljs.core.cst$kw$to,p1__54535_SHARP_));
});})(G__54557,G__54558,G__54559,G__54560,G__54561,G__54537,G__54538,G__54539,cell_data))
,cljs.core.cst$kw$to_DASH_movements.cljs$core$IFn$_invoke$arity$1(cell_data)));
return React.createElement(G__54557,G__54558,G__54559,G__54560,G__54561,G__54562);
})();
return React.createElement(G__54537,G__54538,G__54539,G__54540);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"cell-popup-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54565__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54565 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54566__i = 0, G__54566__a = new Array(arguments.length -  0);
while (G__54566__i < G__54566__a.length) {G__54566__a[G__54566__i] = arguments[G__54566__i + 0]; ++G__54566__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54566__a,0);
} 
return G__54565__delegate.call(this,args__42471__auto__);};
G__54565.cljs$lang$maxFixedArity = 0;
G__54565.cljs$lang$applyTo = (function (arglist__54567){
var args__42471__auto__ = cljs.core.seq(arglist__54567);
return G__54565__delegate(args__42471__auto__);
});
G__54565.cljs$core$IFn$_invoke$arity$variadic = G__54565__delegate;
return G__54565;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.diagrams.moneyincomes.on_add_modal_update = (function gcclocal$diagrams$moneyincomes$on_add_modal_update(state){
var rcomp_54570 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var new_movement_54571 = cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var pickmeup_config_54572 = cljs.core.clj__GT_js((function (){var G__54569 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$format,"d.m.Y",cljs.core.cst$kw$default_date,false,cljs.core.cst$kw$hide_on_select,true], null);
var G__54569__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement_54571)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54569,cljs.core.cst$kw$change,((function (G__54569,rcomp_54570,new_movement_54571){
return (function (formatted_date){
return gcclocal.diagrams.moneyincomes.change_from_date_in_movement(formatted_date,cljs.core.cst$kw$client.cljs$core$IFn$_invoke$arity$1(new_movement_54571));
});})(G__54569,rcomp_54570,new_movement_54571))
):G__54569);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement_54571))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54569__$1,cljs.core.cst$kw$change,((function (G__54569,G__54569__$1,rcomp_54570,new_movement_54571){
return (function (formatted_date){
return gcclocal.diagrams.moneyincomes.change_to_date_in_movement(formatted_date);
});})(G__54569,G__54569__$1,rcomp_54570,new_movement_54571))
);
} else {
return G__54569__$1;
}
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement_54571))){
$("#toDateInput").pickmeup("destroy");

$("#fromDateInput").pickmeup(pickmeup_config_54572);

$("#fromDateInput").pickmeup("clear");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement_54571))){
$("#fromDateInput").pickmeup("destroy");

$("#toDateInput").pickmeup(pickmeup_config_54572);

$("#toDateInput").pickmeup("clear");
} else {
}

gcclocal.comm.dom_utils.rcomp__GT_js$(rcomp_54570).modal({"onApprove": ((function (rcomp_54570,new_movement_54571,pickmeup_config_54572){
return (function (){
gcclocal.diagrams.moneyincomes.submit_new_movement();

return false;
});})(rcomp_54570,new_movement_54571,pickmeup_config_54572))
});

return state;
});
/**
 * Модальное окно добавления перемещения
 */
gcclocal.diagrams.moneyincomes.add_movement_modal_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (new_movement,error_msgs){
var G__54579 = "div";
var G__54580 = {"id": "addMovementModal", "className": "ui small modal"};
var G__54581 = (function (){var attrs54576 = [cljs.core.str("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_movement,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client,cljs.core.cst$kw$name], null)))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs54576))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs54576], 0))):{"className": "header"}),((cljs.core.map_QMARK_(attrs54576))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54576)], null)));
})();
var G__54582 = (function (){var G__54584 = "div";
var G__54585 = {"className": "content"};
var G__54586 = (function (){var G__54588 = "div";
var G__54589 = {"className": "ui form"};
var G__54590 = (function (){var G__54592 = "div";
var G__54593 = {"className": "fields"};
var G__54594 = (function (){var G__54599 = "div";
var G__54600 = {"className": "five wide field"};
var G__54601 = React.createElement("label",null,"\u0421 \u0434\u0430\u0442\u044B");
var G__54602 = (cljs.core.truth_(cljs.core.cst$kw$from_DASH_expired_QMARK_.cljs$core$IFn$_invoke$arity$1(new_movement))?(function (){var G__54605 = "div";
var G__54606 = {"className": "expired-form-label"};
var G__54607 = "\u0421 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438";
return React.createElement(G__54605,G__54606,G__54607);
})():sablono.interpreter.create_element("input",{"type": "text", "id": "fromDateInput", "readOnly": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement)))?"readonly":""), "value": gcclocal.comm.utils.to_print_date(cljs.core.cst$kw$from_DASH_date.cljs$core$IFn$_invoke$arity$1(new_movement)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement)))?"read-dateinput":"")], null))}));
return React.createElement(G__54599,G__54600,G__54601,G__54602);
})();
var G__54595 = (function (){var G__54610 = "div";
var G__54611 = {"className": "five wide field"};
var G__54612 = React.createElement("label",null,"\u041D\u0430 \u0434\u0430\u0442\u0443");
var G__54613 = sablono.interpreter.create_element("input",{"type": "text", "id": "toDateInput", "readOnly": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement)))?"readonly":""), "value": gcclocal.comm.utils.to_print_date(cljs.core.cst$kw$to_DASH_date.cljs$core$IFn$_invoke$arity$1(new_movement)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to_DASH_this_DASH_cell,cljs.core.cst$kw$move_DASH_type.cljs$core$IFn$_invoke$arity$1(new_movement)))?"read-dateinput":"")], null))});
return React.createElement(G__54610,G__54611,G__54612,G__54613);
})();
var G__54596 = (function (){var G__54616 = "div";
var G__54617 = {"className": "six wide field"};
var G__54618 = React.createElement("label",null,"\u0421\u0443\u043C\u043C\u0430");
var G__54619 = (function (){var G__54621 = "div";
var G__54622 = {"className": "ui right labeled input"};
var G__54623 = sablono.interpreter.create_element("input",{"type": "number", "placeholder": "0", "id": "amountInput", "value": cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(new_movement), "onChange": ((function (G__54621,G__54622,G__54616,G__54617,G__54618,G__54592,G__54593,G__54594,G__54595,G__54588,G__54589,G__54584,G__54585,G__54579,G__54580,G__54581){
return (function (p1__54573_SHARP_){
var G__54626 = (function (){var G__54628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement,cljs.core.cst$kw$amount], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54628) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54628));
})();
var G__54627 = p1__54573_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54626,G__54627) : cljs.core.reset_BANG_.call(null,G__54626,G__54627));
});})(G__54621,G__54622,G__54616,G__54617,G__54618,G__54592,G__54593,G__54594,G__54595,G__54588,G__54589,G__54584,G__54585,G__54579,G__54580,G__54581))
});
var G__54624 = (function (){var attrs54620 = gcclocal.comm.utils.money_str_with_zero(cljs.core.cst$kw$max_DASH_amount.cljs$core$IFn$_invoke$arity$1(new_movement));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs54620))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","label"], null)], null),attrs54620], 0))):{"className": "ui label"}),((cljs.core.map_QMARK_(attrs54620))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54620)], null)));
})();
return React.createElement(G__54621,G__54622,G__54623,G__54624);
})();
return React.createElement(G__54616,G__54617,G__54618,G__54619);
})();
return React.createElement(G__54592,G__54593,G__54594,G__54595,G__54596);
})();
var G__54591 = (function (){var G__54631 = "div";
var G__54632 = {"className": "field"};
var G__54633 = React.createElement("label",null,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");
var G__54634 = sablono.interpreter.create_element("input",{"type": "text", "id": "commentInput", "value": cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(new_movement), "onChange": ((function (G__54631,G__54632,G__54633,G__54588,G__54589,G__54590,G__54584,G__54585,G__54579,G__54580,G__54581){
return (function (p1__54574_SHARP_){
var G__54636 = (function (){var G__54638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement,cljs.core.cst$kw$comment], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54638) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54638));
})();
var G__54637 = p1__54574_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54636,G__54637) : cljs.core.reset_BANG_.call(null,G__54636,G__54637));
});})(G__54631,G__54632,G__54633,G__54588,G__54589,G__54590,G__54584,G__54585,G__54579,G__54580,G__54581))
});
return React.createElement(G__54631,G__54632,G__54633,G__54634);
})();
return React.createElement(G__54588,G__54589,G__54590,G__54591);
})();
var G__54587 = sablono.interpreter.interpret(((cljs.core.not(gcclocal.comm.utils.nil_or_empty_QMARK_(error_msgs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$error$message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54584,G__54585,G__54586,G__54579,G__54580,G__54581){
return (function (p1__54575_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,p1__54575_SHARP_], null);
});})(G__54584,G__54585,G__54586,G__54579,G__54580,G__54581))
,error_msgs)], null)], null):null));
return React.createElement(G__54584,G__54585,G__54586,G__54587);
})();
var G__54583 = (function (){var G__54639 = "div";
var G__54640 = {"className": "actions"};
var G__54641 = (function (){var G__54643 = "div";
var G__54644 = {"className": "ui deny button"};
var G__54645 = "\u041E\u0442\u043C\u0435\u043D\u0430";
return React.createElement(G__54643,G__54644,G__54645);
})();
var G__54642 = (function (){var G__54646 = "div";
var G__54647 = {"className": "ui positive right labeled icon button"};
var G__54648 = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C";
var G__54649 = (function (){var G__54650 = "i";
var G__54651 = {"className": "add icon"};
return React.createElement(G__54650,G__54651);
})();
return React.createElement(G__54646,G__54647,G__54648,G__54649);
})();
return React.createElement(G__54639,G__54640,G__54641,G__54642);
})();
return React.createElement(G__54579,G__54580,G__54581,G__54582,G__54583);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_update,gcclocal.diagrams.moneyincomes.on_add_modal_update], null)], null)),"add-movement-modal-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54652__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54652 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54653__i = 0, G__54653__a = new Array(arguments.length -  0);
while (G__54653__i < G__54653__a.length) {G__54653__a[G__54653__i] = arguments[G__54653__i + 0]; ++G__54653__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54653__a,0);
} 
return G__54652__delegate.call(this,args__42471__auto__);};
G__54652.cljs$lang$maxFixedArity = 0;
G__54652.cljs$lang$applyTo = (function (arglist__54654){
var args__42471__auto__ = cljs.core.seq(arglist__54654);
return G__54652__delegate(args__42471__auto__);
});
G__54652.cljs$core$IFn$_invoke$arity$variadic = G__54652__delegate;
return G__54652;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.diagrams.moneyincomes.on_mount_custom_popup = (function gcclocal$diagrams$moneyincomes$on_mount_custom_popup(state){
return $("#customItemDateInput").pickmeup({"format": "d.m.Y", "default_date": false, "hide_on_select": true});
});
/**
 * Кастомное попап меню для добавления записи в категорию
 */
gcclocal.diagrams.moneyincomes.custom_popup_item_menu = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (selected_category,add_item_mode_QMARK_){
var G__54655 = "div";
var G__54656 = {"style": {"visibility": (cljs.core.truth_(add_item_mode_QMARK_)?"visible":"hidden")}, "className": "custom-add-menu custom-animation"};
var G__54657 = (function (){var G__54660 = "div";
var G__54661 = {"className": "custom-item-popup"};
var G__54662 = (function (){var G__54665 = "i";
var G__54666 = {"onClick": ((function (G__54665,G__54660,G__54661,G__54655,G__54656){
return (function (){
return gcclocal.diagrams.moneyincomes.turn_off_add_custom_item_mode();
});})(G__54665,G__54660,G__54661,G__54655,G__54656))
, "className": "remove icon link close-popup-icon"};
return React.createElement(G__54665,G__54666);
})();
var G__54663 = (function (){var G__54667 = "div";
var G__54668 = {"className": "ui small input"};
var G__54669 = sablono.interpreter.create_element("input",{"type": "text", "placeholder": "\u0414\u0430\u0442\u0430", "id": "customItemDateInput", "className": "for-date"});
return React.createElement(G__54667,G__54668,G__54669);
})();
var G__54664 = (function (){var G__54672 = "div";
var G__54673 = {"className": "ui small action input"};
var G__54674 = sablono.interpreter.create_element("input",{"type": "number", "id": "customItemSummInput", "placeholder": "\u0421\u0443\u043C\u043C\u0430"});
var G__54675 = (function (){var G__54678 = "div";
var G__54679 = {"title": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C", "onClick": ((function (G__54678,G__54672,G__54673,G__54674,G__54660,G__54661,G__54662,G__54663,G__54655,G__54656){
return (function (){
return gcclocal.diagrams.moneyincomes.add_category_item(cljs.core.cst$kw$category_DASH_type.cljs$core$IFn$_invoke$arity$1(selected_category),cljs.core.cst$kw$category_DASH_id.cljs$core$IFn$_invoke$arity$1(selected_category),gcclocal.comm.dom_utils.value_from_dom("#customItemDateInput"),gcclocal.comm.dom_utils.value_from_dom("#customItemSummInput"));
});})(G__54678,G__54672,G__54673,G__54674,G__54660,G__54661,G__54662,G__54663,G__54655,G__54656))
, "className": "ui icon button"};
var G__54680 = (function (){var G__54681 = "i";
var G__54682 = {"className": "add icon"};
return React.createElement(G__54681,G__54682);
})();
return React.createElement(G__54678,G__54679,G__54680);
})();
return React.createElement(G__54672,G__54673,G__54674,G__54675);
})();
return React.createElement(G__54660,G__54661,G__54662,G__54663,G__54664);
})();
return React.createElement(G__54655,G__54656,G__54657);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,gcclocal.diagrams.moneyincomes.on_mount_custom_popup], null)], null)),"custom-popup-item-menu");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__54683__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__54683 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__54684__i = 0, G__54684__a = new Array(arguments.length -  0);
while (G__54684__i < G__54684__a.length) {G__54684__a[G__54684__i] = arguments[G__54684__i + 0]; ++G__54684__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__54684__a,0);
} 
return G__54683__delegate.call(this,args__42471__auto__);};
G__54683.cljs$lang$maxFixedArity = 0;
G__54683.cljs$lang$applyTo = (function (arglist__54685){
var args__42471__auto__ = cljs.core.seq(arglist__54685);
return G__54683__delegate(args__42471__auto__);
});
G__54683.cljs$core$IFn$_invoke$arity$variadic = G__54683__delegate;
return G__54683;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * 
 */
gcclocal.diagrams.moneyincomes.main_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (){
var is_loading_QMARK_ = rum.core.react((function (){var G__54694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54694) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54694));
})());
var all_clients = rum.core.react((function (){var G__54695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_clients], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54695) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54695));
})());
var clients_cinfos = rum.core.react((function (){var G__54696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clients_DASH_cinfos], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54696) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54696));
})());
var expired_cinfos = rum.core.react((function (){var G__54697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clients_DASH_expired_DASH_cinfos], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54697) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54697));
})());
var income_categories = rum.core.react((function (){var G__54698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$incomecategories], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54698) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54698));
})());
var income_items = rum.core.react((function (){var G__54699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$incomeitems], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54699) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54699));
})());
var expense_categories = rum.core.react((function (){var G__54700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expensecategories], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54700) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54700));
})());
var expense_items = rum.core.react((function (){var G__54701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expenseitems], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54701) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54701));
})());
var total_i_expired_summ = rum.core.react((function (){var G__54702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$total_DASH_i_DASH_expired_DASH_summ], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54702) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54702));
})());
var total_i_cell_summs = rum.core.react((function (){var G__54703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$total_DASH_i_DASH_cell_DASH_summs], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54703) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54703));
})());
var total_e_cell_summs = rum.core.react((function (){var G__54704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$total_DASH_e_DASH_cell_DASH_summs], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54704) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54704));
})());
var init_bs_on_start = rum.core.react((function (){var G__54705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$init_DASH_balances_DASH_on_DASH_start], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54705) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54705));
})());
var init_bs_on_end = rum.core.react((function (){var G__54706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$init_DASH_balances_DASH_on_DASH_end], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54706) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54706));
})());
var selected_cell = rum.core.react((function (){var G__54707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_cell], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54707) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54707));
})());
var selected_category = rum.core.react((function (){var G__54708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_category], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54708) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54708));
})());
var all_visible_d = rum.core.react((function (){var G__54709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_visible_DASH_dates], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54709) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54709));
})());
var new_movement = rum.core.react((function (){var G__54710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54710) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54710));
})());
var new_movement_errors = rum.core.react((function (){var G__54711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_movement_DASH_errors], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54711) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54711));
})());
var add_income_cat_mode_QMARK_ = rum.core.react((function (){var G__54712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_income_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54712) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54712));
})());
var add_expense_cat_mode_QMARK_ = rum.core.react((function (){var G__54713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_expense_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54713) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54713));
})());
var edit_income_cat_mode_QMARK_ = rum.core.react((function (){var G__54714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_income_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54714) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54714));
})());
var edit_expense_cat_mode_QMARK_ = rum.core.react((function (){var G__54715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_expense_DASH_cat_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54715) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54715));
})());
var edit_i_item_mode_QMARK_ = rum.core.react((function (){var G__54716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_income_DASH_item_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54716) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54716));
})());
var edit_e_item_mode_QMARK_ = rum.core.react((function (){var G__54717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$edit_DASH_expense_DASH_item_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54717) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54717));
})());
var add_category_item_mode_QMARK_ = rum.core.react((function (){var G__54718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modes,cljs.core.cst$kw$add_DASH_category_DASH_item_DASH_mode_QMARK_], null);
return (gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.state_cursor.cljs$core$IFn$_invoke$arity$1(G__54718) : gcclocal.diagrams.moneyincomes.state_cursor.call(null,G__54718));
})());
var G__54896 = "div";
var G__54897 = null;
var G__54898 = (function (){var G__54903 = "div";
var G__54904 = {"style": {"visibility": (cljs.core.truth_(is_loading_QMARK_)?"visible":"hidden")}, "className": "ui active centered inline loader"};
return React.createElement(G__54903,G__54904);
})();
var G__54899 = (function (){var G__54905 = "div";
var G__54906 = {"style": {"marginTop": "3em"}, "className": "outer"};
var G__54907 = (function (){var G__54908 = "div";
var G__54909 = {"className": "inner"};
var G__54910 = (function (){var G__54912 = "table";
var G__54913 = {"className": "ui compact celled very basic table diagram-clients-table fixed-first-column-table"};
var G__54914 = (function (){var G__54934 = "thead";
var G__54935 = null;
var G__54936 = (function (){var G__54943 = "tr";
var G__54944 = null;
var G__54945 = React.createElement("th",null,"\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
var G__54946 = (function (){var G__54949 = "th";
var G__54950 = {"style": {"textAlign": "center"}};
var G__54951 = "\u041F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0430";
return React.createElement(G__54949,G__54950,G__54951);
})();
var G__54947 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54943,G__54944,G__54945,G__54946,G__54934,G__54935,G__54912,G__54913,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54686_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),gcclocal.comm.utils.to_print_date(p1__54686_SHARP_)], null);
});})(G__54943,G__54944,G__54945,G__54946,G__54934,G__54935,G__54912,G__54913,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__54948 = (function (){var G__54952 = "th";
var G__54953 = {"style": {"textAlign": "center", "minWidth": "80px"}};
var G__54954 = "\u0418\u0442\u043E\u0433\u043E";
return React.createElement(G__54952,G__54953,G__54954);
})();
return React.createElement(G__54943,G__54944,G__54945,G__54946,G__54947,G__54948);
})();
return React.createElement(G__54934,G__54935,G__54936);
})();
var G__54915 = (function (){var attrs54728 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54687_SHARP_){
var G__54955 = p1__54687_SHARP_;
var G__54956 = all_visible_d;
var G__54957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clients_cinfos,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__54687_SHARP_));
var G__54958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expired_cinfos,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__54687_SHARP_));
return (gcclocal.diagrams.moneyincomes.client_income_tr_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.diagrams.moneyincomes.client_income_tr_view.cljs$core$IFn$_invoke$arity$4(G__54955,G__54956,G__54957,G__54958) : gcclocal.diagrams.moneyincomes.client_income_tr_view.call(null,G__54955,G__54956,G__54957,G__54958));
});})(G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_clients);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs54728))?sablono.interpreter.attributes(attrs54728):null),((cljs.core.map_QMARK_(attrs54728))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
var G__54959 = cljs.core.cst$kw$income;
var G__54960 = cat;
var G__54961 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__54959,G__54960,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54688_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category_id.cljs$core$IFn$_invoke$arity$1(p1__54688_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat));
});})(G__54959,G__54960,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_items);
var G__54962 = all_visible_d;
var G__54963 = edit_i_item_mode_QMARK_;
var G__54964 = edit_income_cat_mode_QMARK_;
var G__54965 = gcclocal.diagrams.moneyincomes.category_selected_QMARK_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat),cljs.core.cst$kw$income);
return (gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7 ? gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7(G__54959,G__54960,G__54961,G__54962,G__54963,G__54964,G__54965) : gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,G__54959,G__54960,G__54961,G__54962,G__54963,G__54964,G__54965));
});})(attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_categories)),sablono.interpreter.interpret((gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$income,all_visible_d,add_income_cat_mode_QMARK_) : gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,cljs.core.cst$kw$income,all_visible_d,add_income_cat_mode_QMARK_))),(function (){var G__54966 = "tr";
var G__54967 = {"className": "total-row"};
var G__54968 = React.createElement("td",null,"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F");
var G__54969 = (function (){var attrs54791 = gcclocal.comm.utils.money_str(total_i_expired_summ);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54791))?sablono.interpreter.attributes(attrs54791):null),((cljs.core.map_QMARK_(attrs54791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54791)], null)));
})();
var G__54970 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54966,G__54967,G__54968,G__54969,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54689_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_i_cell_summs,p1__54689_SHARP_))], null);
});})(G__54966,G__54967,G__54968,G__54969,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__54971 = (function (){var attrs54792 = gcclocal.comm.utils.money_str((cljs.core.reduce_kv(((function (G__54966,G__54967,G__54968,G__54969,G__54970,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(G__54966,G__54967,G__54968,G__54969,G__54970,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_i_cell_summs) + total_i_expired_summ));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54792))?sablono.interpreter.attributes(attrs54792):null),((cljs.core.map_QMARK_(attrs54792))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54792)], null)));
})();
return React.createElement(G__54966,G__54967,G__54968,G__54969,G__54970,G__54971);
})(),(function (){var G__54972 = "tr";
var G__54973 = {"className": "total-row"};
var G__54974 = React.createElement("td",null,"\u0420\u0430\u0441\u0445\u043E\u0434\u044B");
var G__54975 = React.createElement("td",null);
var G__54976 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54972,G__54973,G__54974,G__54975,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54690_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_e_cell_summs,p1__54690_SHARP_))], null);
});})(G__54972,G__54973,G__54974,G__54975,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__54977 = (function (){var attrs54803 = gcclocal.comm.utils.money_str(cljs.core.reduce_kv(((function (G__54972,G__54973,G__54974,G__54975,G__54976,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(G__54972,G__54973,G__54974,G__54975,G__54976,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_e_cell_summs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54803))?sablono.interpreter.attributes(attrs54803):null),((cljs.core.map_QMARK_(attrs54803))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54803)], null)));
})();
return React.createElement(G__54972,G__54973,G__54974,G__54975,G__54976,G__54977);
})(),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
var G__54978 = cljs.core.cst$kw$expense;
var G__54979 = cat;
var G__54980 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__54978,G__54979,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54691_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category_id.cljs$core$IFn$_invoke$arity$1(p1__54691_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat));
});})(G__54978,G__54979,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_items);
var G__54981 = all_visible_d;
var G__54982 = edit_e_item_mode_QMARK_;
var G__54983 = edit_expense_cat_mode_QMARK_;
var G__54984 = gcclocal.diagrams.moneyincomes.category_selected_QMARK_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat),cljs.core.cst$kw$expense);
return (gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7 ? gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7(G__54978,G__54979,G__54980,G__54981,G__54982,G__54983,G__54984) : gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,G__54978,G__54979,G__54980,G__54981,G__54982,G__54983,G__54984));
});})(attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_categories)),sablono.interpreter.interpret((gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$expense,all_visible_d,add_expense_cat_mode_QMARK_) : gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,cljs.core.cst$kw$expense,all_visible_d,add_expense_cat_mode_QMARK_))),(function (){var G__54985 = "tr";
var G__54986 = {"className": "total-row"};
var G__54987 = React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u043E");
var G__54988 = React.createElement("td",null);
var G__54989 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54985,G__54986,G__54987,G__54988,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54692_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_bs_on_start,p1__54692_SHARP_))], null);
});})(G__54985,G__54986,G__54987,G__54988,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__54990 = (function (){var attrs54821 = gcclocal.comm.utils.money_str(gcclocal.diagrams.moneyincomes_calc.total_init_balance(init_bs_on_end,all_visible_d));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54821))?sablono.interpreter.attributes(attrs54821):null),((cljs.core.map_QMARK_(attrs54821))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54821)], null)));
})();
return React.createElement(G__54985,G__54986,G__54987,G__54988,G__54989,G__54990);
})(),(function (){var G__54991 = "tr";
var G__54992 = {"className": "total-row"};
var G__54993 = React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043A\u043E\u043D\u0435\u0446");
var G__54994 = React.createElement("td",null);
var G__54995 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54991,G__54992,G__54993,G__54994,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54693_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_bs_on_end,p1__54693_SHARP_))], null);
});})(G__54991,G__54992,G__54993,G__54994,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__54996 = (function (){var attrs54832 = gcclocal.comm.utils.money_str(gcclocal.diagrams.moneyincomes_calc.total_init_balance(init_bs_on_end,all_visible_d));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54832))?sablono.interpreter.attributes(attrs54832):null),((cljs.core.map_QMARK_(attrs54832))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54832)], null)));
})();
return React.createElement(G__54991,G__54992,G__54993,G__54994,G__54995,G__54996);
})()], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54728),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
var G__54997 = cljs.core.cst$kw$income;
var G__54998 = cat;
var G__54999 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__54997,G__54998,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54688_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category_id.cljs$core$IFn$_invoke$arity$1(p1__54688_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat));
});})(G__54997,G__54998,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_items);
var G__55000 = all_visible_d;
var G__55001 = edit_i_item_mode_QMARK_;
var G__55002 = edit_income_cat_mode_QMARK_;
var G__55003 = gcclocal.diagrams.moneyincomes.category_selected_QMARK_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat),cljs.core.cst$kw$income);
return (gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7 ? gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7(G__54997,G__54998,G__54999,G__55000,G__55001,G__55002,G__55003) : gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,G__54997,G__54998,G__54999,G__55000,G__55001,G__55002,G__55003));
});})(attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_categories)),sablono.interpreter.interpret((gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$income,all_visible_d,add_income_cat_mode_QMARK_) : gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,cljs.core.cst$kw$income,all_visible_d,add_income_cat_mode_QMARK_))),(function (){var G__55004 = "tr";
var G__55005 = {"className": "total-row"};
var G__55006 = React.createElement("td",null,"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F");
var G__55007 = (function (){var attrs54848 = gcclocal.comm.utils.money_str(total_i_expired_summ);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54848))?sablono.interpreter.attributes(attrs54848):null),((cljs.core.map_QMARK_(attrs54848))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54848)], null)));
})();
var G__55008 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__55004,G__55005,G__55006,G__55007,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54689_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_i_cell_summs,p1__54689_SHARP_))], null);
});})(G__55004,G__55005,G__55006,G__55007,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__55009 = (function (){var attrs54849 = gcclocal.comm.utils.money_str((cljs.core.reduce_kv(((function (G__55004,G__55005,G__55006,G__55007,G__55008,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(G__55004,G__55005,G__55006,G__55007,G__55008,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_i_cell_summs) + total_i_expired_summ));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54849))?sablono.interpreter.attributes(attrs54849):null),((cljs.core.map_QMARK_(attrs54849))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54849)], null)));
})();
return React.createElement(G__55004,G__55005,G__55006,G__55007,G__55008,G__55009);
})(),(function (){var G__55010 = "tr";
var G__55011 = {"className": "total-row"};
var G__55012 = React.createElement("td",null,"\u0420\u0430\u0441\u0445\u043E\u0434\u044B");
var G__55013 = React.createElement("td",null);
var G__55014 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__55010,G__55011,G__55012,G__55013,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54690_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_e_cell_summs,p1__54690_SHARP_))], null);
});})(G__55010,G__55011,G__55012,G__55013,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__55015 = (function (){var attrs54860 = gcclocal.comm.utils.money_str(cljs.core.reduce_kv(((function (G__55010,G__55011,G__55012,G__55013,G__55014,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(G__55010,G__55011,G__55012,G__55013,G__55014,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_e_cell_summs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54860))?sablono.interpreter.attributes(attrs54860):null),((cljs.core.map_QMARK_(attrs54860))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54860)], null)));
})();
return React.createElement(G__55010,G__55011,G__55012,G__55013,G__55014,G__55015);
})(),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
var G__55016 = cljs.core.cst$kw$expense;
var G__55017 = cat;
var G__55018 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__55016,G__55017,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54691_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$category_id.cljs$core$IFn$_invoke$arity$1(p1__54691_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat));
});})(G__55016,G__55017,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_items);
var G__55019 = all_visible_d;
var G__55020 = edit_e_item_mode_QMARK_;
var G__55021 = edit_expense_cat_mode_QMARK_;
var G__55022 = gcclocal.diagrams.moneyincomes.category_selected_QMARK_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cat),cljs.core.cst$kw$expense);
return (gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7 ? gcclocal.diagrams.moneyincomes.custom_category_tr_view.cljs$core$IFn$_invoke$arity$7(G__55016,G__55017,G__55018,G__55019,G__55020,G__55021,G__55022) : gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,G__55016,G__55017,G__55018,G__55019,G__55020,G__55021,G__55022));
});})(attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_categories)),sablono.interpreter.interpret((gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$expense,all_visible_d,add_expense_cat_mode_QMARK_) : gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,cljs.core.cst$kw$expense,all_visible_d,add_expense_cat_mode_QMARK_))),(function (){var G__55023 = "tr";
var G__55024 = {"className": "total-row"};
var G__55025 = React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u043E");
var G__55026 = React.createElement("td",null);
var G__55027 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__55023,G__55024,G__55025,G__55026,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54692_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_bs_on_start,p1__54692_SHARP_))], null);
});})(G__55023,G__55024,G__55025,G__55026,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__55028 = (function (){var attrs54878 = gcclocal.comm.utils.money_str(gcclocal.diagrams.moneyincomes_calc.total_init_balance(init_bs_on_end,all_visible_d));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54878))?sablono.interpreter.attributes(attrs54878):null),((cljs.core.map_QMARK_(attrs54878))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54878)], null)));
})();
return React.createElement(G__55023,G__55024,G__55025,G__55026,G__55027,G__55028);
})(),(function (){var G__55029 = "tr";
var G__55030 = {"className": "total-row"};
var G__55031 = React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043A\u043E\u043D\u0435\u0446");
var G__55032 = React.createElement("td",null);
var G__55033 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__55029,G__55030,G__55031,G__55032,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__54693_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,gcclocal.comm.utils.money_str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_bs_on_end,p1__54693_SHARP_))], null);
});})(G__55029,G__55030,G__55031,G__55032,attrs54728,G__54912,G__54913,G__54914,G__54908,G__54909,G__54905,G__54906,G__54896,G__54897,G__54898,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d));
var G__55034 = (function (){var attrs54889 = gcclocal.comm.utils.money_str(gcclocal.diagrams.moneyincomes_calc.total_init_balance(init_bs_on_end,all_visible_d));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs54889))?sablono.interpreter.attributes(attrs54889):null),((cljs.core.map_QMARK_(attrs54889))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54889)], null)));
})();
return React.createElement(G__55029,G__55030,G__55031,G__55032,G__55033,G__55034);
})()], null)));
})();
return React.createElement(G__54912,G__54913,G__54914,G__54915);
})();
var G__54911 = sablono.interpreter.interpret((gcclocal.diagrams.moneyincomes.cell_popup_view.cljs$core$IFn$_invoke$arity$1 ? gcclocal.diagrams.moneyincomes.cell_popup_view.cljs$core$IFn$_invoke$arity$1(selected_cell) : gcclocal.diagrams.moneyincomes.cell_popup_view.call(null,selected_cell)));
return React.createElement(G__54908,G__54909,G__54910,G__54911);
})();
return React.createElement(G__54905,G__54906,G__54907);
})();
var G__54900 = sablono.interpreter.interpret((gcclocal.diagrams.moneyincomes.add_movement_modal_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.diagrams.moneyincomes.add_movement_modal_view.cljs$core$IFn$_invoke$arity$2(new_movement,new_movement_errors) : gcclocal.diagrams.moneyincomes.add_movement_modal_view.call(null,new_movement,new_movement_errors)));
var G__54901 = sablono.interpreter.interpret((gcclocal.diagrams.moneyincomes.custom_popup_item_menu.cljs$core$IFn$_invoke$arity$2 ? gcclocal.diagrams.moneyincomes.custom_popup_item_menu.cljs$core$IFn$_invoke$arity$2(selected_category,add_category_item_mode_QMARK_) : gcclocal.diagrams.moneyincomes.custom_popup_item_menu.call(null,selected_category,add_category_item_mode_QMARK_)));
var G__54902 = sablono.interpreter.interpret((gcclocal.views.common.basic_approve_modal_view.cljs$core$IFn$_invoke$arity$0 ? gcclocal.views.common.basic_approve_modal_view.cljs$core$IFn$_invoke$arity$0() : gcclocal.views.common.basic_approve_modal_view.call(null)));
return React.createElement(G__54896,G__54897,G__54898,G__54899,G__54900,G__54901,G__54902);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"main-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__55035__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__55035 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__55036__i = 0, G__55036__a = new Array(arguments.length -  0);
while (G__55036__i < G__55036__a.length) {G__55036__a[G__55036__i] = arguments[G__55036__i + 0]; ++G__55036__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__55036__a,0);
} 
return G__55035__delegate.call(this,args__42471__auto__);};
G__55035.cljs$lang$maxFixedArity = 0;
G__55035.cljs$lang$applyTo = (function (arglist__55037){
var args__42471__auto__ = cljs.core.seq(arglist__55037);
return G__55035__delegate(args__42471__auto__);
});
G__55035.cljs$core$IFn$_invoke$arity$variadic = G__55035__delegate;
return G__55035;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.diagrams.moneyincomes.init = (function gcclocal$diagrams$moneyincomes$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init moneyincomes"], 0));

gcclocal.diagrams.moneyincomes.init_channels();

gcclocal.diagrams.moneyincomes.init_watchers();

gcclocal.diagrams.moneyincomes.refresh_ajax_data();

return rum.core.mount((gcclocal.diagrams.moneyincomes.main_view.cljs$core$IFn$_invoke$arity$0 ? gcclocal.diagrams.moneyincomes.main_view.cljs$core$IFn$_invoke$arity$0() : gcclocal.diagrams.moneyincomes.main_view.call(null)),document.getElementById("maintable"));
});
goog.exportSymbol('gcclocal.diagrams.moneyincomes.init', gcclocal.diagrams.moneyincomes.init);
