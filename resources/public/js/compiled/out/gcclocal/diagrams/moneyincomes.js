// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.diagrams.moneyincomes');
goog.require('cljs.core');
goog.require('gcclocal.diagrams.moneyincomes_calc');
goog.require('gcclocal.comm.dom_utils');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.utils');
goog.require('rum.core');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.common');
goog.require('gcclocal.comm.channels');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gcclocal.diagrams.moneyincomes.app_state !== 'undefined'){
} else {
gcclocal.diagrams.moneyincomes.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"new-movement","new-movement",-527469567),new cljs.core.Keyword(null,"expensecategories","expensecategories",-1936222718),new cljs.core.Keyword(null,"moneymovements","moneymovements",-1587852382),new cljs.core.Keyword(null,"incomeitems","incomeitems",-662864220),new cljs.core.Keyword(null,"init-balances-on-start","init-balances-on-start",-506814809),new cljs.core.Keyword(null,"all-clients","all-clients",1756927943),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"total-i-expired-summ","total-i-expired-summ",642175145),new cljs.core.Keyword(null,"init-balances-on-end","init-balances-on-end",123357514),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"total-init-balances","total-init-balances",747678508),new cljs.core.Keyword(null,"initbalanceondate","initbalanceondate",-2109546611),new cljs.core.Keyword(null,"clientpayments","clientpayments",278754190),new cljs.core.Keyword(null,"clients-cinfos","clients-cinfos",-1458657330),new cljs.core.Keyword(null,"selected-category","selected-category",-1539830769),new cljs.core.Keyword(null,"clients-expired-cinfos","clients-expired-cinfos",1830932623),new cljs.core.Keyword(null,"all-visible-dates","all-visible-dates",-1302813937),new cljs.core.Keyword(null,"total-e-cell-summs","total-e-cell-summs",-959694736),new cljs.core.Keyword(null,"new-movement-errors","new-movement-errors",-496849040),new cljs.core.Keyword(null,"incomecategories","incomecategories",-2066678988),new cljs.core.Keyword(null,"expenseitems","expenseitems",1348907063),new cljs.core.Keyword(null,"total-i-cell-summs","total-i-cell-summs",-352188484)],[null,null,null,null,null,null,false,null,null,null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"edit-income-cat-mode?","edit-income-cat-mode?",816697222),false,new cljs.core.Keyword(null,"edit-expense-cat-mode?","edit-expense-cat-mode?",-2096923182),false,new cljs.core.Keyword(null,"add-income-cat-mode?","add-income-cat-mode?",1207873228),false,new cljs.core.Keyword(null,"add-expense-cat-mode?","add-expense-cat-mode?",1531753771),false,new cljs.core.Keyword(null,"edit-income-item-mode?","edit-income-item-mode?",2101828648),false,new cljs.core.Keyword(null,"edit-expense-item-mode?","edit-expense-item-mode?",-720466101),false,new cljs.core.Keyword(null,"add-category-item-mode?","add-category-item-mode?",174887773),false], null),null,null,null,null,null,null,null,null,null,null,null,null]));
}
gcclocal.diagrams.moneyincomes.state_cursor = cljs.core.partial.call(null,rum.core.cursor,gcclocal.diagrams.moneyincomes.app_state);
gcclocal.diagrams.moneyincomes.load_count = cljs.core.atom.call(null,(0));
gcclocal.diagrams.moneyincomes.load_all_ch = cljs.core.async.chan.call(null);
gcclocal.diagrams.moneyincomes.notify_ch = gcclocal.comm.channels.init_notify_ch.call(null);
gcclocal.diagrams.moneyincomes.needed_ajax_data = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"clientpayments","clientpayments",278754190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/clientpayments"], null),new cljs.core.Keyword(null,"moneymovements","moneymovements",-1587852382),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/moneymovement/all"], null),new cljs.core.Keyword(null,"incomecategories","incomecategories",-2066678988),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/incomecategory/all"], null),new cljs.core.Keyword(null,"incomeitems","incomeitems",-662864220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/incomeitem/all"], null),new cljs.core.Keyword(null,"expensecategories","expensecategories",-1936222718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/expensecategory/all"], null),new cljs.core.Keyword(null,"expenseitems","expenseitems",1348907063),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/expenseitem/all"], null),new cljs.core.Keyword(null,"initbalanceondate","initbalanceondate",-2109546611),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/initbalanceondate"], null)], null);
/**
 * Обновить все данные с сервера
 */
gcclocal.diagrams.moneyincomes.refresh_ajax_data = (function gcclocal$diagrams$moneyincomes$refresh_ajax_data(){
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)),true);

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.load_count,(0));

var seq__43629 = cljs.core.seq.call(null,gcclocal.diagrams.moneyincomes.needed_ajax_data);
var chunk__43630 = null;
var count__43631 = (0);
var i__43632 = (0);
while(true){
if((i__43632 < count__43631)){
var vec__43633 = cljs.core._nth.call(null,chunk__43630,i__43632);
var dname = cljs.core.nth.call(null,vec__43633,(0),null);
var dval = cljs.core.nth.call(null,vec__43633,(1),null);
gcclocal.comm.utils.get_json.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(dval),cljs.core.PersistentArrayMap.EMPTY,((function (seq__43629,chunk__43630,count__43631,i__43632,vec__43633,dname,dval){
return (function (res){
if(cljs.core.truth_(gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res)))){
} else {
var c__35123__auto___43697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43697,vec__43633,dname,dval){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43697,vec__43633,dname,dval){
return (function (state_43644){
var state_val_43645 = (state_43644[(1)]);
if((state_val_43645 === (1))){
var inst_43636 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_43637 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res);
var inst_43638 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_43637);
var inst_43639 = [inst_43638,"error"];
var inst_43640 = cljs.core.PersistentHashMap.fromArrays(inst_43636,inst_43639);
var state_43644__$1 = state_43644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43644__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_43640);
} else {
if((state_val_43645 === (2))){
var inst_43642 = (state_43644[(2)]);
var state_43644__$1 = state_43644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43644__$1,inst_43642);
} else {
return null;
}
}
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43697,vec__43633,dname,dval))
;
return ((function (seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto___43697,vec__43633,dname,dval){
return (function() {
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_43649 = [null,null,null,null,null,null,null];
(statearr_43649[(0)] = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_43649[(1)] = (1));

return statearr_43649;
});
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_43644){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43650){if((e43650 instanceof Object)){
var ex__35015__auto__ = e43650;
var statearr_43651_43698 = state_43644;
(statearr_43651_43698[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43699 = state_43644;
state_43644 = G__43699;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_43644){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_43644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto___43697,vec__43633,dname,dval))
})();
var state__35125__auto__ = (function (){var statearr_43652 = f__35124__auto__.call(null);
(statearr_43652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___43697);

return statearr_43652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43697,vec__43633,dname,dval))
);

}

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dname], null)),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(res));

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43633,dname,dval){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43633,dname,dval){
return (function (state_43656){
var state_val_43657 = (state_43656[(1)]);
if((state_val_43657 === (1))){
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43656__$1,(2),gcclocal.diagrams.moneyincomes.load_all_ch,true);
} else {
if((state_val_43657 === (2))){
var inst_43654 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43656__$1,inst_43654);
} else {
return null;
}
}
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43633,dname,dval))
;
return ((function (seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto__,vec__43633,dname,dval){
return (function() {
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_43661 = [null,null,null,null,null,null,null];
(statearr_43661[(0)] = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_43661[(1)] = (1));

return statearr_43661;
});
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_43656){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43662){if((e43662 instanceof Object)){
var ex__35015__auto__ = e43662;
var statearr_43663_43700 = state_43656;
(statearr_43663_43700[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43701 = state_43656;
state_43656 = G__43701;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_43656){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_43656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto__,vec__43633,dname,dval))
})();
var state__35125__auto__ = (function (){var statearr_43664 = f__35124__auto__.call(null);
(statearr_43664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43633,dname,dval))
);

return c__35123__auto__;
});})(seq__43629,chunk__43630,count__43631,i__43632,vec__43633,dname,dval))
);

var G__43702 = seq__43629;
var G__43703 = chunk__43630;
var G__43704 = count__43631;
var G__43705 = (i__43632 + (1));
seq__43629 = G__43702;
chunk__43630 = G__43703;
count__43631 = G__43704;
i__43632 = G__43705;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43629);
if(temp__4657__auto__){
var seq__43629__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43629__$1)){
var c__31388__auto__ = cljs.core.chunk_first.call(null,seq__43629__$1);
var G__43706 = cljs.core.chunk_rest.call(null,seq__43629__$1);
var G__43707 = c__31388__auto__;
var G__43708 = cljs.core.count.call(null,c__31388__auto__);
var G__43709 = (0);
seq__43629 = G__43706;
chunk__43630 = G__43707;
count__43631 = G__43708;
i__43632 = G__43709;
continue;
} else {
var vec__43665 = cljs.core.first.call(null,seq__43629__$1);
var dname = cljs.core.nth.call(null,vec__43665,(0),null);
var dval = cljs.core.nth.call(null,vec__43665,(1),null);
gcclocal.comm.utils.get_json.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(dval),cljs.core.PersistentArrayMap.EMPTY,((function (seq__43629,chunk__43630,count__43631,i__43632,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__){
return (function (res){
if(cljs.core.truth_(gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res)))){
} else {
var c__35123__auto___43710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43710,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43710,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__){
return (function (state_43676){
var state_val_43677 = (state_43676[(1)]);
if((state_val_43677 === (1))){
var inst_43668 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_43669 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res);
var inst_43670 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_43669);
var inst_43671 = [inst_43670,"error"];
var inst_43672 = cljs.core.PersistentHashMap.fromArrays(inst_43668,inst_43671);
var state_43676__$1 = state_43676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43676__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_43672);
} else {
if((state_val_43677 === (2))){
var inst_43674 = (state_43676[(2)]);
var state_43676__$1 = state_43676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43676__$1,inst_43674);
} else {
return null;
}
}
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43710,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__))
;
return ((function (seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto___43710,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_43681 = [null,null,null,null,null,null,null];
(statearr_43681[(0)] = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_43681[(1)] = (1));

return statearr_43681;
});
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_43676){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43682){if((e43682 instanceof Object)){
var ex__35015__auto__ = e43682;
var statearr_43683_43711 = state_43676;
(statearr_43683_43711[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43712 = state_43676;
state_43676 = G__43712;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_43676){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_43676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto___43710,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43684 = f__35124__auto__.call(null);
(statearr_43684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___43710);

return statearr_43684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto___43710,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__))
);

}

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dname], null)),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(res));

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__){
return (function (state_43688){
var state_val_43689 = (state_43688[(1)]);
if((state_val_43689 === (1))){
var state_43688__$1 = state_43688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43688__$1,(2),gcclocal.diagrams.moneyincomes.load_all_ch,true);
} else {
if((state_val_43689 === (2))){
var inst_43686 = (state_43688[(2)]);
var state_43688__$1 = state_43688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43688__$1,inst_43686);
} else {
return null;
}
}
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__))
;
return ((function (seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto__,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_43693 = [null,null,null,null,null,null,null];
(statearr_43693[(0)] = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_43693[(1)] = (1));

return statearr_43693;
});
var gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_43688){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43694){if((e43694 instanceof Object)){
var ex__35015__auto__ = e43694;
var statearr_43695_43713 = state_43688;
(statearr_43695_43713[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43714 = state_43688;
state_43688 = G__43714;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_43688){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_43688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__43629,chunk__43630,count__43631,i__43632,switch__35011__auto__,c__35123__auto__,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43696 = f__35124__auto__.call(null);
(statearr_43696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__43629,chunk__43630,count__43631,i__43632,c__35123__auto__,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__))
);

return c__35123__auto__;
});})(seq__43629,chunk__43630,count__43631,i__43632,vec__43665,dname,dval,seq__43629__$1,temp__4657__auto__))
);

var G__43715 = cljs.core.next.call(null,seq__43629__$1);
var G__43716 = null;
var G__43717 = (0);
var G__43718 = (0);
seq__43629 = G__43715;
chunk__43630 = G__43716;
count__43631 = G__43717;
i__43632 = G__43718;
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
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)),false);

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-clients","all-clients",1756927943)], null)),cljs.core.map.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clientpayments","clientpayments",278754190)], null)))));

var cur_app_data = cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,cljs.core.PersistentVector.EMPTY));
var date_to_check = gcclocal.comm.utils.current_date.call(null);
var all_clients = cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-clients","all-clients",1756927943)], null)));
var client_payments = new cljs.core.Keyword(null,"clientpayments","clientpayments",278754190).cljs$core$IFn$_invoke$arity$1(cur_app_data);
var all_movements = new cljs.core.Keyword(null,"moneymovements","moneymovements",-1587852382).cljs$core$IFn$_invoke$arity$1(cur_app_data);
var income_items = new cljs.core.Keyword(null,"incomeitems","incomeitems",-662864220).cljs$core$IFn$_invoke$arity$1(cur_app_data);
var expense_items = new cljs.core.Keyword(null,"expenseitems","expenseitems",1348907063).cljs$core$IFn$_invoke$arity$1(cur_app_data);
var init_balance_on_date = new cljs.core.Keyword(null,"initbalanceondate","initbalanceondate",-2109546611).cljs$core$IFn$_invoke$arity$1(cur_app_data);
var calc_hmap = gcclocal.diagrams.moneyincomes_calc.calc_data.call(null,date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date);
cljs.core.println.call(null,"=== calced-data ===");

cljs.core.println.call(null,new cljs.core.Keyword(null,"clients-expired-cinfos","clients-expired-cinfos",1830932623).cljs$core$IFn$_invoke$arity$1(calc_hmap));

return cljs.core.swap_BANG_.call(null,gcclocal.diagrams.moneyincomes.app_state,((function (cur_app_data,date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date,calc_hmap){
return (function (p1__43719_SHARP_){
return cljs.core.merge.call(null,p1__43719_SHARP_,calc_hmap);
});})(cur_app_data,date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date,calc_hmap))
);
});
/**
 * Инициализация каналов
 */
gcclocal.diagrams.moneyincomes.init_channels = (function gcclocal$diagrams$moneyincomes$init_channels(){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_43781){
var state_val_43782 = (state_43781[(1)]);
if((state_val_43782 === (7))){
var inst_43764 = (state_43781[(2)]);
var inst_43765 = cljs.core.swap_BANG_.call(null,gcclocal.diagrams.moneyincomes.load_count,cljs.core.inc);
var inst_43766 = cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.load_count);
var inst_43767 = cljs.core.count.call(null,gcclocal.diagrams.moneyincomes.needed_ajax_data);
var inst_43768 = cljs.core._EQ_.call(null,inst_43766,inst_43767);
var state_43781__$1 = (function (){var statearr_43783 = state_43781;
(statearr_43783[(7)] = inst_43765);

(statearr_43783[(8)] = inst_43764);

return statearr_43783;
})();
if(inst_43768){
var statearr_43784_43802 = state_43781__$1;
(statearr_43784_43802[(1)] = (8));

} else {
var statearr_43785_43803 = state_43781__$1;
(statearr_43785_43803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43782 === (1))){
var state_43781__$1 = state_43781;
var statearr_43786_43804 = state_43781__$1;
(statearr_43786_43804[(2)] = null);

(statearr_43786_43804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43782 === (4))){
var state_43781__$1 = state_43781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43781__$1,(7),gcclocal.diagrams.moneyincomes.load_all_ch);
} else {
if((state_val_43782 === (6))){
var inst_43777 = (state_43781[(2)]);
var state_43781__$1 = state_43781;
var statearr_43787_43805 = state_43781__$1;
(statearr_43787_43805[(2)] = inst_43777);

(statearr_43787_43805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43782 === (3))){
var inst_43779 = (state_43781[(2)]);
var state_43781__$1 = state_43781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43781__$1,inst_43779);
} else {
if((state_val_43782 === (2))){
var state_43781__$1 = state_43781;
var statearr_43788_43806 = state_43781__$1;
(statearr_43788_43806[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43782 === (9))){
var state_43781__$1 = state_43781;
var statearr_43790_43807 = state_43781__$1;
(statearr_43790_43807[(2)] = null);

(statearr_43790_43807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43782 === (5))){
var state_43781__$1 = state_43781;
var statearr_43791_43808 = state_43781__$1;
(statearr_43791_43808[(2)] = null);

(statearr_43791_43808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43782 === (10))){
var inst_43773 = (state_43781[(2)]);
var state_43781__$1 = (function (){var statearr_43792 = state_43781;
(statearr_43792[(9)] = inst_43773);

return statearr_43792;
})();
var statearr_43793_43809 = state_43781__$1;
(statearr_43793_43809[(2)] = null);

(statearr_43793_43809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43782 === (8))){
var inst_43770 = gcclocal.diagrams.moneyincomes.calc_all_data.call(null);
var state_43781__$1 = state_43781;
var statearr_43794_43810 = state_43781__$1;
(statearr_43794_43810[(2)] = inst_43770);

(statearr_43794_43810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto____0 = (function (){
var statearr_43798 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43798[(0)] = gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto__);

(statearr_43798[(1)] = (1));

return statearr_43798;
});
var gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto____1 = (function (state_43781){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43799){if((e43799 instanceof Object)){
var ex__35015__auto__ = e43799;
var statearr_43800_43811 = state_43781;
(statearr_43800_43811[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43812 = state_43781;
state_43781 = G__43812;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto__ = function(state_43781){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto____1.call(this,state_43781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$init_channels_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43801 = f__35124__auto__.call(null);
(statearr_43801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
});
/**
 * Вывести сообщение об успешности операции и обновить все данные
 */
gcclocal.diagrams.moneyincomes.success_notify_and_refresh = (function gcclocal$diagrams$moneyincomes$success_notify_and_refresh(message){
var c__35123__auto___43843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___43843){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___43843){
return (function (state_43834){
var state_val_43835 = (state_43834[(1)]);
if((state_val_43835 === (1))){
var inst_43828 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_43829 = [message,"success"];
var inst_43830 = cljs.core.PersistentHashMap.fromArrays(inst_43828,inst_43829);
var state_43834__$1 = state_43834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43834__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_43830);
} else {
if((state_val_43835 === (2))){
var inst_43832 = (state_43834[(2)]);
var state_43834__$1 = state_43834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43834__$1,inst_43832);
} else {
return null;
}
}
});})(c__35123__auto___43843))
;
return ((function (switch__35011__auto__,c__35123__auto___43843){
return (function() {
var gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto____0 = (function (){
var statearr_43839 = [null,null,null,null,null,null,null];
(statearr_43839[(0)] = gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto__);

(statearr_43839[(1)] = (1));

return statearr_43839;
});
var gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto____1 = (function (state_43834){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43840){if((e43840 instanceof Object)){
var ex__35015__auto__ = e43840;
var statearr_43841_43844 = state_43834;
(statearr_43841_43844[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43845 = state_43834;
state_43834 = G__43845;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto__ = function(state_43834){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto____1.call(this,state_43834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$success_notify_and_refresh_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___43843))
})();
var state__35125__auto__ = (function (){var statearr_43842 = f__35124__auto__.call(null);
(statearr_43842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___43843);

return statearr_43842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___43843))
);


return gcclocal.diagrams.moneyincomes.refresh_ajax_data.call(null);
});
/**
 * Добавление перемещения
 */
gcclocal.diagrams.moneyincomes.submit_new_movement = (function gcclocal$diagrams$moneyincomes$submit_new_movement(){
var new_movement = cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567)], null)));
return gcclocal.comm.utils.post_json_with_success_check.call(null,"/moneydiagram/moneymovement/add",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"client_id","client_id",48809273),cljs.core.get_in.call(null,new_movement,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"from_date","from_date",85319821),new cljs.core.Keyword(null,"from-date","from-date",1469949792).cljs$core$IFn$_invoke$arity$1(new_movement),new cljs.core.Keyword(null,"to_date","to_date",1818906197),new cljs.core.Keyword(null,"to-date","to-date",500848648).cljs$core$IFn$_invoke$arity$1(new_movement),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(new_movement),new cljs.core.Keyword(null,"max_amount","max_amount",-354156297),new cljs.core.Keyword(null,"max-amount","max-amount",911610642).cljs$core$IFn$_invoke$arity$1(new_movement),new cljs.core.Keyword(null,"is_from_expired","is_from_expired",1503742835),new cljs.core.Keyword(null,"from-expired?","from-expired?",-463755158).cljs$core$IFn$_invoke$arity$1(new_movement),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(new_movement)], null)], null),((function (new_movement){
return (function (_){
$(".ui.modal").modal("hide");

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u041F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E");
});})(new_movement))
,((function (new_movement){
return (function (r){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement-errors","new-movement-errors",-496849040)], null)),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r));
});})(new_movement))
);
});
/**
 * Удаление перемещения
 */
gcclocal.diagrams.moneyincomes.delete_movement = (function gcclocal$diagrams$moneyincomes$delete_movement(movement_id){
gcclocal.diagrams.moneyincomes.hide_popup.call(null);

return gcclocal.comm.utils.post_json_with_success_check.call(null,"/moneydiagram/moneymovement/delete",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),movement_id], null),(function (_){
return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u041F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_43867){
var state_val_43868 = (state_43867[(1)]);
if((state_val_43868 === (1))){
var inst_43861 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_43862 = ["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F","error"];
var inst_43863 = cljs.core.PersistentHashMap.fromArrays(inst_43861,inst_43862);
var state_43867__$1 = state_43867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43867__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_43863);
} else {
if((state_val_43868 === (2))){
var inst_43865 = (state_43867[(2)]);
var state_43867__$1 = state_43867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43867__$1,inst_43865);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto____0 = (function (){
var statearr_43872 = [null,null,null,null,null,null,null];
(statearr_43872[(0)] = gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto__);

(statearr_43872[(1)] = (1));

return statearr_43872;
});
var gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto____1 = (function (state_43867){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43873){if((e43873 instanceof Object)){
var ex__35015__auto__ = e43873;
var statearr_43874_43876 = state_43867;
(statearr_43874_43876[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43877 = state_43867;
state_43867 = G__43877;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto__ = function(state_43867){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto____1.call(this,state_43867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$delete_movement_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43875 = f__35124__auto__.call(null);
(statearr_43875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Добавить новую категорию
 */
gcclocal.diagrams.moneyincomes.add_category = (function gcclocal$diagrams$moneyincomes$add_category(category_type,input_el){
return gcclocal.comm.utils.post_json_with_success_check.call(null,[cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type))?"incomecategory":"expensecategory")),cljs.core.str("/add")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),input_el.target.value], null)], null),(function (_){
gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_43903){
var state_val_43904 = (state_43903[(1)]);
if((state_val_43904 === (1))){
var inst_43895 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_43896 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_43897 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_43896);
var inst_43898 = [inst_43897,"error"];
var inst_43899 = cljs.core.PersistentHashMap.fromArrays(inst_43895,inst_43898);
var state_43903__$1 = state_43903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43903__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_43899);
} else {
if((state_val_43904 === (2))){
var inst_43901 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43903__$1,inst_43901);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto____0 = (function (){
var statearr_43908 = [null,null,null,null,null,null,null];
(statearr_43908[(0)] = gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto__);

(statearr_43908[(1)] = (1));

return statearr_43908;
});
var gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto____1 = (function (state_43903){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43909){if((e43909 instanceof Object)){
var ex__35015__auto__ = e43909;
var statearr_43910_43912 = state_43903;
(statearr_43910_43912[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43913 = state_43903;
state_43903 = G__43913;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto__ = function(state_43903){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto____1.call(this,state_43903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$add_category_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43911 = f__35124__auto__.call(null);
(statearr_43911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Удалить категорию
 */
gcclocal.diagrams.moneyincomes.delete_category = (function gcclocal$diagrams$moneyincomes$delete_category(category_type,id){
return gcclocal.comm.utils.post_json_with_success_check.call(null,[cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type))?"incomecategory":"expensecategory")),cljs.core.str("/delete")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (_){
gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0430");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_43935){
var state_val_43936 = (state_43935[(1)]);
if((state_val_43936 === (1))){
var inst_43929 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_43930 = ["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438","error"];
var inst_43931 = cljs.core.PersistentHashMap.fromArrays(inst_43929,inst_43930);
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43935__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_43931);
} else {
if((state_val_43936 === (2))){
var inst_43933 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43935__$1,inst_43933);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto____0 = (function (){
var statearr_43940 = [null,null,null,null,null,null,null];
(statearr_43940[(0)] = gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto__);

(statearr_43940[(1)] = (1));

return statearr_43940;
});
var gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto____1 = (function (state_43935){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43941){if((e43941 instanceof Object)){
var ex__35015__auto__ = e43941;
var statearr_43942_43944 = state_43935;
(statearr_43942_43944[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43945 = state_43935;
state_43935 = G__43945;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto__ = function(state_43935){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto____1.call(this,state_43935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$delete_category_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43943 = f__35124__auto__.call(null);
(statearr_43943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Редактировать категорию
 */
gcclocal.diagrams.moneyincomes.edit_category = (function gcclocal$diagrams$moneyincomes$edit_category(category_type,input_el,id){
return gcclocal.comm.utils.post_json_with_success_check.call(null,[cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type))?"incomecategory":"expensecategory")),cljs.core.str("/edit")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),input_el.target.value], null)], null),(function (_){
gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_43971){
var state_val_43972 = (state_43971[(1)]);
if((state_val_43972 === (1))){
var inst_43963 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_43964 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_43965 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_43964);
var inst_43966 = [inst_43965,"error"];
var inst_43967 = cljs.core.PersistentHashMap.fromArrays(inst_43963,inst_43966);
var state_43971__$1 = state_43971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43971__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_43967);
} else {
if((state_val_43972 === (2))){
var inst_43969 = (state_43971[(2)]);
var state_43971__$1 = state_43971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43971__$1,inst_43969);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto____0 = (function (){
var statearr_43976 = [null,null,null,null,null,null,null];
(statearr_43976[(0)] = gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto__);

(statearr_43976[(1)] = (1));

return statearr_43976;
});
var gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto____1 = (function (state_43971){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43977){if((e43977 instanceof Object)){
var ex__35015__auto__ = e43977;
var statearr_43978_43980 = state_43971;
(statearr_43978_43980[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43981 = state_43971;
state_43971 = G__43981;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto__ = function(state_43971){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto____1.call(this,state_43971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$edit_category_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43979 = f__35124__auto__.call(null);
(statearr_43979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Добавить запись категории
 */
gcclocal.diagrams.moneyincomes.add_category_item = (function gcclocal$diagrams$moneyincomes$add_category_item(category_type,category_id,item_date,summ){
return gcclocal.comm.utils.post_json_with_success_check.call(null,[cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type))?"incomeitem":"expenseitem")),cljs.core.str("/add")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item_date","item_date",1321645722),item_date,new cljs.core.Keyword(null,"category_id","category_id",-15558562),category_id,new cljs.core.Keyword(null,"summ","summ",-1220398077),summ], null)], null),(function (_){
gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_44007){
var state_val_44008 = (state_44007[(1)]);
if((state_val_44008 === (1))){
var inst_43999 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_44000 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_44001 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_44000);
var inst_44002 = [inst_44001,"error"];
var inst_44003 = cljs.core.PersistentHashMap.fromArrays(inst_43999,inst_44002);
var state_44007__$1 = state_44007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44007__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_44003);
} else {
if((state_val_44008 === (2))){
var inst_44005 = (state_44007[(2)]);
var state_44007__$1 = state_44007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44007__$1,inst_44005);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto____0 = (function (){
var statearr_44012 = [null,null,null,null,null,null,null];
(statearr_44012[(0)] = gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto__);

(statearr_44012[(1)] = (1));

return statearr_44012;
});
var gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto____1 = (function (state_44007){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_44007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e44013){if((e44013 instanceof Object)){
var ex__35015__auto__ = e44013;
var statearr_44014_44016 = state_44007;
(statearr_44014_44016[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44017 = state_44007;
state_44007 = G__44017;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto__ = function(state_44007){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto____1.call(this,state_44007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$add_category_item_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_44015 = f__35124__auto__.call(null);
(statearr_44015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_44015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Добавить запись категории
 */
gcclocal.diagrams.moneyincomes.edit_category_item = (function gcclocal$diagrams$moneyincomes$edit_category_item(category_type,edited_item,summ){
return gcclocal.comm.utils.post_json_with_success_check.call(null,[cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type))?"incomeitem":"expenseitem")),cljs.core.str("/edit")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(edited_item),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item_date","item_date",1321645722),new cljs.core.Keyword(null,"item_date","item_date",1321645722).cljs$core$IFn$_invoke$arity$1(edited_item),new cljs.core.Keyword(null,"category_id","category_id",-15558562),new cljs.core.Keyword(null,"category_id","category_id",-15558562).cljs$core$IFn$_invoke$arity$1(edited_item),new cljs.core.Keyword(null,"summ","summ",-1220398077),summ], null)], null),(function (_){
gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_44043){
var state_val_44044 = (state_44043[(1)]);
if((state_val_44044 === (1))){
var inst_44035 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_44036 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_44037 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_44036);
var inst_44038 = [inst_44037,"error"];
var inst_44039 = cljs.core.PersistentHashMap.fromArrays(inst_44035,inst_44038);
var state_44043__$1 = state_44043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44043__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_44039);
} else {
if((state_val_44044 === (2))){
var inst_44041 = (state_44043[(2)]);
var state_44043__$1 = state_44043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44043__$1,inst_44041);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto____0 = (function (){
var statearr_44048 = [null,null,null,null,null,null,null];
(statearr_44048[(0)] = gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto__);

(statearr_44048[(1)] = (1));

return statearr_44048;
});
var gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto____1 = (function (state_44043){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_44043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e44049){if((e44049 instanceof Object)){
var ex__35015__auto__ = e44049;
var statearr_44050_44052 = state_44043;
(statearr_44050_44052[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44053 = state_44043;
state_44043 = G__44053;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto__ = function(state_44043){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto____1.call(this,state_44043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$edit_category_item_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_44051 = f__35124__auto__.call(null);
(statearr_44051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_44051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
gcclocal.diagrams.moneyincomes.delete_category_item = (function gcclocal$diagrams$moneyincomes$delete_category_item(category_type,id){
return gcclocal.comm.utils.post_json_with_success_check.call(null,[cljs.core.str("/moneydiagram/"),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type))?"incomeitem":"expenseitem")),cljs.core.str("/delete")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (_){
gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);

return gcclocal.diagrams.moneyincomes.success_notify_and_refresh.call(null,"\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_44075){
var state_val_44076 = (state_44075[(1)]);
if((state_val_44076 === (1))){
var inst_44069 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_44070 = ["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043F\u0438\u0441\u0438","error"];
var inst_44071 = cljs.core.PersistentHashMap.fromArrays(inst_44069,inst_44070);
var state_44075__$1 = state_44075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44075__$1,(2),gcclocal.diagrams.moneyincomes.notify_ch,inst_44071);
} else {
if((state_val_44076 === (2))){
var inst_44073 = (state_44075[(2)]);
var state_44075__$1 = state_44075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44075__$1,inst_44073);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto____0 = (function (){
var statearr_44080 = [null,null,null,null,null,null,null];
(statearr_44080[(0)] = gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto__);

(statearr_44080[(1)] = (1));

return statearr_44080;
});
var gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto____1 = (function (state_44075){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_44075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e44081){if((e44081 instanceof Object)){
var ex__35015__auto__ = e44081;
var statearr_44082_44084 = state_44075;
(statearr_44082_44084[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44085 = state_44075;
state_44075 = G__44085;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto__ = function(state_44075){
switch(arguments.length){
case 0:
return gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto____1.call(this,state_44075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto____0;
gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto____1;
return gcclocal$diagrams$moneyincomes$delete_category_item_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_44083 = f__35124__auto__.call(null);
(statearr_44083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_44083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
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
return (new $(evt.target)).popup((function (){var obj44089 = {"popup":(new $(".ui.popup")),"hoverable":true,"on":"manual","hideOnScroll":true,"exclusive":true,"position":"bottom center"};
return obj44089;
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
var top_offset_44090 = [cljs.core.str(((new $(elem)).offset().top - (40))),cljs.core.str("px")].join('');
var left_offset_44091 = [cljs.core.str(((new $(elem)).offset().left + (10))),cljs.core.str("px")].join('');
(new $(".custom-add-menu")).css({"top": top_offset_44090, "left": left_offset_44091});

return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-category-item-mode?","add-category-item-mode?",174887773)], null)),true);
});
/**
 * Отключить режим показа контекстного меню
 *   для добавления записи в категорию
 */
gcclocal.diagrams.moneyincomes.turn_off_add_custom_item_mode = (function gcclocal$diagrams$moneyincomes$turn_off_add_custom_item_mode(){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-category-item-mode?","add-category-item-mode?",174887773)], null)),false);
});
/**
 * Выбрать ячейку (в поступлениях от клиента)
 */
gcclocal.diagrams.moneyincomes.select_cell = (function gcclocal$diagrams$moneyincomes$select_cell(cell_info){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)),cell_info);
});
/**
 * Убрать выделение с ячейки
 */
gcclocal.diagrams.moneyincomes.deselect_cell = (function gcclocal$diagrams$moneyincomes$deselect_cell(){
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)),null);

return gcclocal.diagrams.moneyincomes.hide_popup.call(null);
});
/**
 * Проверка, что ячейка выделена
 */
gcclocal.diagrams.moneyincomes.cell_selected_QMARK_ = (function gcclocal$diagrams$moneyincomes$cell_selected_QMARK_(cell_info){
var sel_cell = cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)));
return (!((sel_cell == null))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(cell_info),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(sel_cell))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"col-id","col-id",-929478657).cljs$core$IFn$_invoke$arity$1(cell_info),new cljs.core.Keyword(null,"col-id","col-id",-929478657).cljs$core$IFn$_invoke$arity$1(sel_cell)));
});
/**
 * Выбрать категорию
 */
gcclocal.diagrams.moneyincomes.select_category = (function gcclocal$diagrams$moneyincomes$select_category(category_id,category_type){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-category","selected-category",-1539830769)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category-id","category-id",1171211503),category_id,new cljs.core.Keyword(null,"category-type","category-type",981142811),category_type], null));
});
/**
 * Убрать выделение с категории
 */
gcclocal.diagrams.moneyincomes.deselect_category = (function gcclocal$diagrams$moneyincomes$deselect_category(){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-category","selected-category",-1539830769)], null)),null);
});
/**
 * Проверка, что категория выделена
 */
gcclocal.diagrams.moneyincomes.category_selected_QMARK_ = (function gcclocal$diagrams$moneyincomes$category_selected_QMARK_(category_id,category_type){
var sel_cat = cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-category","selected-category",-1539830769)], null)));
return (!((sel_cat == null))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category-id","category-id",1171211503).cljs$core$IFn$_invoke$arity$1(sel_cat),category_id)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category-type","category-type",981142811).cljs$core$IFn$_invoke$arity$1(sel_cat),category_type));
});
/**
 * Найти cell-data по дате и клиенту
 */
gcclocal.diagrams.moneyincomes.cell_data_by_date_from_client = (function gcclocal$diagrams$moneyincomes$cell_data_by_date_from_client(client_id,d){
var client_cinfos = cljs.core.get.call(null,cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clients-cinfos","clients-cinfos",-1458657330)], null))),client_id);
return new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,client_cinfos,d));
});
/**
 * Функция при смене 'даты с' при добавлении перемещения
 *   (для обновления макс.суммы)
 */
gcclocal.diagrams.moneyincomes.change_from_date_in_movement = (function gcclocal$diagrams$moneyincomes$change_from_date_in_movement(date_str,client){
var date_iso = gcclocal.comm.utils.ddmmyyyy__GT_real_iso_date_str.call(null,date_str);
var cell_d = gcclocal.diagrams.moneyincomes.cell_data_by_date_from_client.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(client),date_iso);
return cljs.core.swap_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567)], null)),((function (date_iso,cell_d){
return (function (p1__44092_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__44092_SHARP_,new cljs.core.Keyword(null,"from-date","from-date",1469949792),date_iso),new cljs.core.Keyword(null,"max-amount","max-amount",911610642),gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,cell_d));
});})(date_iso,cell_d))
);
});
/**
 * Функция при смене 'даты на' при добавлении перемещения
 */
gcclocal.diagrams.moneyincomes.change_to_date_in_movement = (function gcclocal$diagrams$moneyincomes$change_to_date_in_movement(date_str){
var date_iso = gcclocal.comm.utils.ddmmyyyy__GT_real_iso_date_str.call(null,date_str);
return cljs.core.swap_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567)], null)),((function (date_iso){
return (function (p1__44093_SHARP_){
return cljs.core.assoc.call(null,p1__44093_SHARP_,new cljs.core.Keyword(null,"to-date","to-date",500848648),date_iso);
});})(date_iso))
);
});
/**
 * Включить режим добавления категории
 */
gcclocal.diagrams.moneyincomes.turn_add_category_mode_on = (function gcclocal$diagrams$moneyincomes$turn_add_category_mode_on(category_type){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type)){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-income-cat-mode?","add-income-cat-mode?",1207873228)], null)),true);
} else {
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-expense-cat-mode?","add-expense-cat-mode?",1531753771)], null)),true);
}
});
/**
 * Включить режим редактирования категории
 */
gcclocal.diagrams.moneyincomes.turn_edit_category_mode_on = (function gcclocal$diagrams$moneyincomes$turn_edit_category_mode_on(category_type){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type)){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-income-cat-mode?","edit-income-cat-mode?",816697222)], null)),true);
} else {
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-expense-cat-mode?","edit-expense-cat-mode?",-2096923182)], null)),true);
}
});
/**
 * Включить режим редактирования ячейки категории
 */
gcclocal.diagrams.moneyincomes.turn_edit_category_item_mode_on = (function gcclocal$diagrams$moneyincomes$turn_edit_category_item_mode_on(category_type){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"income","income",654385502),category_type)){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-income-item-mode?","edit-income-item-mode?",2101828648)], null)),true);
} else {
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-expense-item-mode?","edit-expense-item-mode?",-720466101)], null)),true);
}
});
gcclocal.diagrams.moneyincomes.turn_add_item_popup_on = (function gcclocal$diagrams$moneyincomes$turn_add_item_popup_on(evt){
return gcclocal.diagrams.moneyincomes.show_custom_add_popup.call(null,evt.target);
});
/**
 * Открыть модальное окно добавления перемещения НА эту ячейку
 */
gcclocal.diagrams.moneyincomes.show_modal_to_movement = (function gcclocal$diagrams$moneyincomes$show_modal_to_movement(selected_cell){
gcclocal.diagrams.moneyincomes.hide_popup.call(null);

var client_44095 = gcclocal.comm.utils.find_some.call(null,(function (p1__44094_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44094_SHARP_),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(selected_cell));
}),cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-clients","all-clients",1756927943)], null))));
var to_date_44096 = new cljs.core.Keyword(null,"col-id","col-id",-929478657).cljs$core$IFn$_invoke$arity$1(selected_cell);
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567)], null)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"move-type","move-type",1684389954),new cljs.core.Keyword(null,"to-this-cell","to-this-cell",2045997486),new cljs.core.Keyword(null,"client","client",-1323448117),client_44095,new cljs.core.Keyword(null,"from-date","from-date",1469949792),null,new cljs.core.Keyword(null,"to-date","to-date",500848648),to_date_44096,new cljs.core.Keyword(null,"amount","amount",364489504),(0),new cljs.core.Keyword(null,"comment","comment",532206069),null,new cljs.core.Keyword(null,"max-amount","max-amount",911610642),(0),new cljs.core.Keyword(null,"from-expired?","from-expired?",-463755158),cljs.core.get_in.call(null,selected_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),new cljs.core.Keyword(null,"expired?","expired?",-946987831)], null))], null));

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement-errors","new-movement-errors",-496849040)], null)),null);

return $("#addMovementModal").modal("show");
});
/**
 * Открыть модальное окно добавления перемещения С этой ячейки
 */
gcclocal.diagrams.moneyincomes.show_modal_from_movement = (function gcclocal$diagrams$moneyincomes$show_modal_from_movement(selected_cell){
gcclocal.diagrams.moneyincomes.hide_popup.call(null);

var client_44098 = gcclocal.comm.utils.find_some.call(null,(function (p1__44097_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44097_SHARP_),new cljs.core.Keyword(null,"row-id","row-id",246619473).cljs$core$IFn$_invoke$arity$1(selected_cell));
}),cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-clients","all-clients",1756927943)], null))));
var from_date_44099 = new cljs.core.Keyword(null,"col-id","col-id",-929478657).cljs$core$IFn$_invoke$arity$1(selected_cell);
var max_amount_44100 = gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(selected_cell));
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567)], null)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"move-type","move-type",1684389954),new cljs.core.Keyword(null,"from-this-cell","from-this-cell",-2017414336),new cljs.core.Keyword(null,"client","client",-1323448117),client_44098,new cljs.core.Keyword(null,"from-date","from-date",1469949792),from_date_44099,new cljs.core.Keyword(null,"to-date","to-date",500848648),null,new cljs.core.Keyword(null,"amount","amount",364489504),(0),new cljs.core.Keyword(null,"comment","comment",532206069),null,new cljs.core.Keyword(null,"max-amount","max-amount",911610642),max_amount_44100,new cljs.core.Keyword(null,"from-expired?","from-expired?",-463755158),cljs.core.get_in.call(null,selected_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),new cljs.core.Keyword(null,"expired?","expired?",-946987831)], null))], null));

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement-errors","new-movement-errors",-496849040)], null)),null);

return $("#addMovementModal").modal("show");
});
/**
 * Отключить все режимы
 */
gcclocal.diagrams.moneyincomes.turn_off_modes = (function gcclocal$diagrams$moneyincomes$turn_off_modes(){
cljs.core.swap_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092)], null)),(function (p1__44101_SHARP_){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,false);
}),cljs.core.PersistentArrayMap.EMPTY,p1__44101_SHARP_);
}));

$("#customItemDateInput").val("");

return $("#customItemSummInput").val("");
});
/**
 * Инициализация watcher-ов
 */
gcclocal.diagrams.moneyincomes.init_watchers = (function gcclocal$diagrams$moneyincomes$init_watchers(){
cljs.core.add_watch.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)),new cljs.core.Keyword(null,"sel-cell-watch","sel-cell-watch",498167577),(function (k,a,old_s,new_s){
if((new_s == null)){
return null;
} else {
gcclocal.diagrams.moneyincomes.deselect_category.call(null);

return gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);
}
}));

cljs.core.add_watch.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-category","selected-category",-1539830769)], null)),new cljs.core.Keyword(null,"sel-cat-watch","sel-cat-watch",-1049321637),(function (k,a,old_s,new_s){
if((new_s == null)){
return null;
} else {
gcclocal.diagrams.moneyincomes.deselect_cell.call(null);

return gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);
}
}));

var watch_fn_44118 = (function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,new_s,true)){
return gcclocal.diagrams.moneyincomes.deselect_cell.call(null);
} else {
return null;
}
});
cljs.core.add_watch.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-income-cat-mode?","add-income-cat-mode?",1207873228)], null)),new cljs.core.Keyword(null,"add-income-cat-watch","add-income-cat-watch",-1028317765),watch_fn_44118);

cljs.core.add_watch.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-expense-cat-mode?","add-expense-cat-mode?",1531753771)], null)),new cljs.core.Keyword(null,"add-expense-cat-watch","add-expense-cat-watch",-1472284542),watch_fn_44118);

cljs.core.some.call(null,(function (p__44110){
var vec__44111 = p__44110;
var k = cljs.core.nth.call(null,vec__44111,(0),null);
var v = cljs.core.nth.call(null,vec__44111,(1),null);
return cljs.core._EQ_.call(null,v,true);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a1","a1",553780937),true,new cljs.core.Keyword(null,"a2","a2",424956801),false], null));

return window.addEventListener("keydown",(function (e){
if(cljs.core._EQ_.call(null,(27),(e["keyCode"]))){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p__44114){
var vec__44115 = p__44114;
var k = cljs.core.nth.call(null,vec__44115,(0),null);
var v = cljs.core.nth.call(null,vec__44115,(1),null);
return cljs.core._EQ_.call(null,v,true);
}),cljs.core.deref.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092)], null)))))){
return gcclocal.diagrams.moneyincomes.turn_off_modes.call(null);
} else {
gcclocal.diagrams.moneyincomes.deselect_cell.call(null);

return gcclocal.diagrams.moneyincomes.deselect_category.call(null);
}
} else {
return null;
}
}));
});
gcclocal.diagrams.moneyincomes.on_update_tr = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (p1__44119_SHARP_){
return gcclocal.diagrams.moneyincomes.set_tr_height_to_max.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(p1__44119_SHARP_));
})], null);
/**
 * Ячейка для поступления клиента
 *   (применяется также для просрочки)
 */
gcclocal.diagrams.moneyincomes.client_income_cell_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (cell_info,is_selected_QMARK_){
return React.createElement("td",{"onClick": (function (p1__44120_SHARP_){
gcclocal.diagrams.moneyincomes.select_cell.call(null,cell_info);

return gcclocal.diagrams.moneyincomes.show_popup.call(null,p1__44120_SHARP_);
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("hoverable "),cljs.core.str((cljs.core.truth_(is_selected_QMARK_)?"selected-cell ":"")),cljs.core.str((cljs.core.truth_(cljs.core.get_in.call(null,cell_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),new cljs.core.Keyword(null,"error-cell?","error-cell?",-145257434)], null)))?"error ":(((cljs.core.not.call(null,gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,cljs.core.get_in.call(null,cell_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),new cljs.core.Keyword(null,"from-movements","from-movements",-1109731299)], null))))) || (cljs.core.not.call(null,gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,cljs.core.get_in.call(null,cell_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),new cljs.core.Keyword(null,"to-movements","to-movements",1964048690)], null))))))?"positive ":"")))].join('')], null))},sablono.interpreter.interpret.call(null,gcclocal.comm.utils.money_str.call(null,gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(cell_info)))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"client-income-cell-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44121__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44121 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44122__i = 0, G__44122__a = new Array(arguments.length -  0);
while (G__44122__i < G__44122__a.length) {G__44122__a[G__44122__i] = arguments[G__44122__i + 0]; ++G__44122__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44122__a,0);
} 
return G__44121__delegate.call(this,args__33795__auto__);};
G__44121.cljs$lang$maxFixedArity = 0;
G__44121.cljs$lang$applyTo = (function (arglist__44123){
var args__33795__auto__ = cljs.core.seq(arglist__44123);
return G__44121__delegate(args__33795__auto__);
});
G__44121.cljs$core$IFn$_invoke$arity$variadic = G__44121__delegate;
return G__44121;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Строка поступлений от клиента
 */
gcclocal.diagrams.moneyincomes.client_income_tr_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (client,all_visible_dates,client_cinfos,expired_cinfo){
return React.createElement("tr",null,(function (){var attrs44125 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(client);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44125))?sablono.interpreter.attributes.call(null,attrs44125):null),((cljs.core.map_QMARK_.call(null,attrs44125))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44125)], null)));
})(),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.client_income_cell_view.call(null,expired_cinfo,gcclocal.diagrams.moneyincomes.cell_selected_QMARK_.call(null,expired_cinfo))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,(function (p1__44124_SHARP_){
var c_info = cljs.core.get.call(null,client_cinfos,p1__44124_SHARP_);
return gcclocal.diagrams.moneyincomes.client_income_cell_view.call(null,c_info,gcclocal.diagrams.moneyincomes.cell_selected_QMARK_.call(null,c_info));
}),all_visible_dates)),(function (){var attrs44126 = gcclocal.comm.utils.money_str.call(null,(((0) + cljs.core.reduce_kv.call(null,(function (summ,k,v){
return (summ + gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(v)));
}),(0),client_cinfos)) + gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(expired_cinfo))));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44126))?sablono.interpreter.attributes.call(null,attrs44126):null),((cljs.core.map_QMARK_.call(null,attrs44126))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44126)], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"client-income-tr-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44127__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44127 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44128__i = 0, G__44128__a = new Array(arguments.length -  0);
while (G__44128__i < G__44128__a.length) {G__44128__a[G__44128__i] = arguments[G__44128__i + 0]; ++G__44128__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44128__a,0);
} 
return G__44127__delegate.call(this,args__33795__auto__);};
G__44127.cljs$lang$maxFixedArity = 0;
G__44127.cljs$lang$applyTo = (function (arglist__44129){
var args__33795__auto__ = cljs.core.seq(arglist__44129);
return G__44127__delegate(args__33795__auto__);
});
G__44127.cljs$core$IFn$_invoke$arity$variadic = G__44127__delegate;
return G__44127;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Строка для добавления новой категории
 */
gcclocal.diagrams.moneyincomes.add_custom_category_tr_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (category_type,all_visible_dates,add_category_mode_QMARK_){
return React.createElement("tr",{"className": "income-row"},(function (){var attrs44131 = (cljs.core.truth_(add_category_mode_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.fluid.input.to-left-side-margin","div.ui.fluid.input.to-left-side-margin",-1836630024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.small-rect-input","input.small-rect-input",752568318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__44130_SHARP_){
if(cljs.core._EQ_.call(null,"Enter",p1__44130_SHARP_.key)){
return gcclocal.diagrams.moneyincomes.add_category.call(null,category_type,p1__44130_SHARP_);
} else {
return null;
}
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.add-category-span","span.add-category-span",96372025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gcclocal.diagrams.moneyincomes.turn_add_category_mode_on.call(null,category_type);
})], null),"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44131))?sablono.interpreter.attributes.call(null,attrs44131):null),((cljs.core.map_QMARK_.call(null,attrs44131))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44131)], null)));
})(),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null);
}),all_visible_dates)),React.createElement("td",null));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcclocal.diagrams.moneyincomes.on_update_tr], null)),"add-custom-category-tr-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44136__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44136 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44137__i = 0, G__44137__a = new Array(arguments.length -  0);
while (G__44137__i < G__44137__a.length) {G__44137__a[G__44137__i] = arguments[G__44137__i + 0]; ++G__44137__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44137__a,0);
} 
return G__44136__delegate.call(this,args__33795__auto__);};
G__44136.cljs$lang$maxFixedArity = 0;
G__44136.cljs$lang$applyTo = (function (arglist__44138){
var args__33795__auto__ = cljs.core.seq(arglist__44138);
return G__44136__delegate(args__33795__auto__);
});
G__44136.cljs$core$IFn$_invoke$arity$variadic = G__44136__delegate;
return G__44136;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info = (function gcclocal$diagrams$moneyincomes$cat_item__GT_cell_info(cat_type,cat_id,d){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-id","row-id",246619473),[cljs.core.str(cat_id),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,cat_type)),cljs.core.str("_cat")].join(''),new cljs.core.Keyword(null,"col-id","col-id",-929478657),d], null);
});
/**
 * Ячейка для записи категории
 */
gcclocal.diagrams.moneyincomes.custom_category_cell_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (cat_type,cat_id,d,cat_item,is_selected_QMARK_,edit_mode_QMARK_){
return React.createElement("td",{"onClick": (function (){
return gcclocal.diagrams.moneyincomes.select_cell.call(null,gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info.call(null,cat_type,cat_id,d));
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("hoverable "),cljs.core.str((cljs.core.truth_(is_selected_QMARK_)?"selected-cell ":""))].join('')], null))},(cljs.core.truth_(is_selected_QMARK_)?(cljs.core.truth_(edit_mode_QMARK_)?React.createElement("div",{"className": "ui fluid input to-left-side-margin"},sablono.interpreter.create_element.call(null,"input",{"type": "number", "step": "0.01", "autoFocus": true, "placeholder": "0", "onKeyPress": (function (p1__44139_SHARP_){
if(cljs.core._EQ_.call(null,"Enter",p1__44139_SHARP_.key)){
if(cljs.core.truth_(cat_item)){
return gcclocal.diagrams.moneyincomes.edit_category_item.call(null,cat_type,cat_item,p1__44139_SHARP_.target.value);
} else {
return gcclocal.diagrams.moneyincomes.add_category_item.call(null,cat_type,cat_id,d,p1__44139_SHARP_.target.value);
}
} else {
return null;
}
}), "defaultValue": new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(cat_item), "className": "small-rect-input right-aligned"})):(cljs.core.truth_(cat_item)?React.createElement("div",null,React.createElement("i",{"style": {"fontSize": ".65rem"}, "onClick": (function (){
return gcclocal.views.common.show_approve_modal.call(null,"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C?",(function (){
return gcclocal.diagrams.moneyincomes.delete_category_item.call(null,cat_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat_item));
}));
}), "title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C", "className": "remove blue inverted bordered mini link icon left-floated-icon"}),React.createElement("span",{"onClick": (function (){
return gcclocal.diagrams.moneyincomes.turn_edit_category_item_mode_on.call(null,cat_type);
}), "className": "editable-span"},sablono.interpreter.interpret.call(null,gcclocal.comm.utils.money_str.call(null,new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(cat_item))))):React.createElement("div",null,React.createElement("span",{"onClick": (function (){
return gcclocal.diagrams.moneyincomes.turn_edit_category_item_mode_on.call(null,cat_type);
}), "className": "editable-span italic-text-link"},"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")))):sablono.interpreter.interpret.call(null,gcclocal.comm.utils.money_str.call(null,(cljs.core.truth_(cat_item)?new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(cat_item):(0))))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"custom-category-cell-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44140__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44140 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44141__i = 0, G__44141__a = new Array(arguments.length -  0);
while (G__44141__i < G__44141__a.length) {G__44141__a[G__44141__i] = arguments[G__44141__i + 0]; ++G__44141__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44141__a,0);
} 
return G__44140__delegate.call(this,args__33795__auto__);};
G__44140.cljs$lang$maxFixedArity = 0;
G__44140.cljs$lang$applyTo = (function (arglist__44142){
var args__33795__auto__ = cljs.core.seq(arglist__44142);
return G__44140__delegate(args__33795__auto__);
});
G__44140.cljs$core$IFn$_invoke$arity$variadic = G__44140__delegate;
return G__44140;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Первый столбец в строке категории
 */
gcclocal.diagrams.moneyincomes.custom_category_head_td_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (category_type,category,cat_is_selected_QMARK_,cat_edit_mode_QMARK_){
return React.createElement("td",{"onClick": (function (){
return gcclocal.diagrams.moneyincomes.select_category.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category),category_type);
})},(cljs.core.truth_(cat_is_selected_QMARK_)?(cljs.core.truth_(cat_edit_mode_QMARK_)?React.createElement("div",{"className": "ui fluid input to-left-side-margin"},sablono.interpreter.create_element.call(null,"input",{"type": "text", "name": "editCatNameInput", "autoFocus": true, "onKeyPress": (function (p1__44143_SHARP_){
if(cljs.core._EQ_.call(null,"Enter",p1__44143_SHARP_.key)){
return gcclocal.diagrams.moneyincomes.edit_category.call(null,category_type,p1__44143_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category));
} else {
return null;
}
}), "defaultValue": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category), "className": "small-rect-input"})):React.createElement("div",null,React.createElement("span",{"onClick": (function (){
return gcclocal.diagrams.moneyincomes.turn_edit_category_mode_on.call(null,category_type);
}), "className": "editable-span"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category))),React.createElement("i",{"style": {"float": "right"}, "title": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "onClick": (function (p1__44144_SHARP_){
gcclocal.diagrams.moneyincomes.turn_add_item_popup_on.call(null,p1__44144_SHARP_);

return p1__44144_SHARP_.stopPropagation();
}), "className": "add blue inverted bordered link mini icon add-item-icon"}),React.createElement("i",{"style": {"float": "right"}, "onClick": (function (){
return gcclocal.views.common.show_approve_modal.call(null,[cljs.core.str("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \""),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category)),cljs.core.str("\"")].join(''),[cljs.core.str("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C\n                            \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0435\u0451 \u0437\u0430\u043F\u0438\u0441\u044F\u043C\u0438?")].join(''),(function (){
return gcclocal.diagrams.moneyincomes.delete_category.call(null,category_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category));
}));
}), "title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "className": "remove blue inverted bordered link mini icon"}))):sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"custom-category-head-td-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44145__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44145 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44146__i = 0, G__44146__a = new Array(arguments.length -  0);
while (G__44146__i < G__44146__a.length) {G__44146__a[G__44146__i] = arguments[G__44146__i + 0]; ++G__44146__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44146__a,0);
} 
return G__44145__delegate.call(this,args__33795__auto__);};
G__44145.cljs$lang$maxFixedArity = 0;
G__44145.cljs$lang$applyTo = (function (arglist__44147){
var args__33795__auto__ = cljs.core.seq(arglist__44147);
return G__44145__delegate(args__33795__auto__);
});
G__44145.cljs$core$IFn$_invoke$arity$variadic = G__44145__delegate;
return G__44145;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Строка для категории (расхода/дохода)
 */
gcclocal.diagrams.moneyincomes.custom_category_tr_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (category_type,category,cat_items,all_visible_dates,cat_item_edit_mode_QMARK_,cat_edit_mode_QMARK_,cat_is_selected_QMARK_){
var attrs44149 = gcclocal.diagrams.moneyincomes.custom_category_head_td_view.call(null,category_type,category,cat_is_selected_QMARK_,cat_edit_mode_QMARK_);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs44149))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["income-row"], null)], null),attrs44149)):{"className": "income-row"}),((cljs.core.map_QMARK_.call(null,attrs44149))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44149){
return (function (d){
var cat_item = gcclocal.comm.utils.find_some.call(null,((function (attrs44149){
return (function (p1__44148_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item_date","item_date",1321645722).cljs$core$IFn$_invoke$arity$1(p1__44148_SHARP_),d);
});})(attrs44149))
,cat_items);
return gcclocal.diagrams.moneyincomes.custom_category_cell_view.call(null,category_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category),d,cat_item,gcclocal.diagrams.moneyincomes.cell_selected_QMARK_.call(null,gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info.call(null,category_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category),d)),cat_item_edit_mode_QMARK_);
});})(attrs44149))
,all_visible_dates)),(function (){var attrs44152 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce.call(null,((function (attrs44149){
return (function (s,i){
return (s + new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(i));
});})(attrs44149))
,(0),cat_items));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44152))?sablono.interpreter.attributes.call(null,attrs44152):null),((cljs.core.map_QMARK_.call(null,attrs44152))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44152)], null)));
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44149),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44149){
return (function (d){
var cat_item = gcclocal.comm.utils.find_some.call(null,((function (attrs44149){
return (function (p1__44148_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item_date","item_date",1321645722).cljs$core$IFn$_invoke$arity$1(p1__44148_SHARP_),d);
});})(attrs44149))
,cat_items);
return gcclocal.diagrams.moneyincomes.custom_category_cell_view.call(null,category_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category),d,cat_item,gcclocal.diagrams.moneyincomes.cell_selected_QMARK_.call(null,gcclocal.diagrams.moneyincomes.cat_item__GT_cell_info.call(null,category_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category),d)),cat_item_edit_mode_QMARK_);
});})(attrs44149))
,all_visible_dates)),(function (){var attrs44155 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce.call(null,((function (attrs44149){
return (function (s,i){
return (s + new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(i));
});})(attrs44149))
,(0),cat_items));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44155))?sablono.interpreter.attributes.call(null,attrs44155):null),((cljs.core.map_QMARK_.call(null,attrs44155))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44155)], null)));
})()], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcclocal.diagrams.moneyincomes.on_update_tr], null)),"custom-category-tr-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44156__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44156 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44157__i = 0, G__44157__a = new Array(arguments.length -  0);
while (G__44157__i < G__44157__a.length) {G__44157__a[G__44157__i] = arguments[G__44157__i + 0]; ++G__44157__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44157__a,0);
} 
return G__44156__delegate.call(this,args__33795__auto__);};
G__44156.cljs$lang$maxFixedArity = 0;
G__44156.cljs$lang$applyTo = (function (arglist__44158){
var args__33795__auto__ = cljs.core.seq(arglist__44158);
return G__44156__delegate(args__33795__auto__);
});
G__44156.cljs$core$IFn$_invoke$arity$variadic = G__44156__delegate;
return G__44156;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.diagrams.moneyincomes.date_span_view = (function gcclocal$diagrams$moneyincomes$date_span_view(d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),gcclocal.comm.utils.to_print_date.call(null,d)], null);
});
gcclocal.diagrams.moneyincomes.c_app_span_view = (function gcclocal$diagrams$moneyincomes$c_app_span_view(c_app){
if(cljs.core.truth_(c_app)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c_app)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"color","color",1011675173),"#e25a5a"], null)], null),"\u0431\u0435\u0437 \u0437\u0430\u044F\u0432\u043A\u0438"], null);
}
});
/**
 * Список передвижений внутри попапа
 */
gcclocal.diagrams.moneyincomes.movements_in_popup_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (movement_type,movement){
var from_m_QMARK_ = cljs.core._EQ_.call(null,movement_type,new cljs.core.Keyword(null,"from","from",1815293044));
return React.createElement("div",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("item "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"error-movement?","error-movement?",473426555).cljs$core$IFn$_invoke$arity$1(movement))?"error-movement":""))].join('')], null))},React.createElement("i",{"style": {"display": "inline-block"}, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon "),cljs.core.str(((from_m_QMARK_)?"forward mail":"arrow down"))].join('')], null))}),sablono.interpreter.interpret.call(null,gcclocal.comm.utils.money_str.call(null,new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(movement))),((from_m_QMARK_)?" \u043D\u0430 ":" \u0441 "),((from_m_QMARK_)?sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.date_span_view.call(null,new cljs.core.Keyword(null,"to_date","to_date",1818906197).cljs$core$IFn$_invoke$arity$1(movement))):(cljs.core.truth_(new cljs.core.Keyword(null,"from_date","from_date",85319821).cljs$core$IFn$_invoke$arity$1(movement))?sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.date_span_view.call(null,new cljs.core.Keyword(null,"from_date","from_date",85319821).cljs$core$IFn$_invoke$arity$1(movement))):"\u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438")),React.createElement("i",{"style": {"display": "inline-block", "paddingTop": "0px"}, "title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", "onClick": ((function (from_m_QMARK_){
return (function (){
gcclocal.diagrams.moneyincomes.hide_popup.call(null);

return gcclocal.views.common.show_approve_modal.call(null,"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435\n                                          \u0437\u0430 \u044D\u0442\u0443 \u0434\u0430\u0442\u0443?",((function (from_m_QMARK_){
return (function (){
return gcclocal.diagrams.moneyincomes.delete_movement.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(movement));
});})(from_m_QMARK_))
);
});})(from_m_QMARK_))
, "className": "remove link icon"}),React.createElement("br",null),React.createElement("span",{"style": {"fontStyle": "italic"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(movement))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"movements-in-popup-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44161__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44161 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44162__i = 0, G__44162__a = new Array(arguments.length -  0);
while (G__44162__i < G__44162__a.length) {G__44162__a[G__44162__i] = arguments[G__44162__i + 0]; ++G__44162__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44162__a,0);
} 
return G__44161__delegate.call(this,args__33795__auto__);};
G__44161.cljs$lang$maxFixedArity = 0;
G__44161.cljs$lang$applyTo = (function (arglist__44163){
var args__33795__auto__ = cljs.core.seq(arglist__44163);
return G__44161__delegate(args__33795__auto__);
});
G__44161.cljs$core$IFn$_invoke$arity$variadic = G__44161__delegate;
return G__44161;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Попап окно для ячеек поступлений
 */
gcclocal.diagrams.moneyincomes.cell_popup_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (selected_cell){
var cell_data = new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(selected_cell);
return React.createElement("div",{"className": "ui popup"},(function (){var attrs44168 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"expired?","expired?",-946987831).cljs$core$IFn$_invoke$arity$1(cell_data)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u043D\u0430 \u044D\u0442\u0443 \u044F\u0447\u0435\u0439\u043A\u0443",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_data){
return (function (){
return gcclocal.diagrams.moneyincomes.show_modal_to_movement.call(null,selected_cell);
});})(cell_data))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.arrow.down.icon","i.arrow.down.icon",1036461602)], null)], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44168))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","fluid","tiny","icon","buttons"], null)], null),attrs44168)):{"className": "ui fluid tiny icon buttons"}),((cljs.core.map_QMARK_.call(null,attrs44168))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("button",{"title": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441 \u044D\u0442\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0438", "onClick": ((function (attrs44168,cell_data){
return (function (){
return gcclocal.diagrams.moneyincomes.show_modal_from_movement.call(null,selected_cell);
});})(attrs44168,cell_data))
, "className": "ui button"},React.createElement("i",{"className": "forward mail icon"}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44168),React.createElement("button",{"title": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441 \u044D\u0442\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0438", "onClick": ((function (attrs44168,cell_data){
return (function (){
return gcclocal.diagrams.moneyincomes.show_modal_from_movement.call(null,selected_cell);
});})(attrs44168,cell_data))
, "className": "ui button"},React.createElement("i",{"className": "forward mail icon"}))], null)));
})(),React.createElement("div",{"className": "ui divider"}),(function (){var attrs44171 = (cljs.core.truth_(cljs.core.get_in.call(null,selected_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"misc-data","misc-data",-311447732),new cljs.core.Keyword(null,"show-inner-datesumms","show-inner-datesumms",1152971160)], null)))?(cljs.core.truth_(new cljs.core.Keyword(null,"expired?","expired?",-946987831).cljs$core$IFn$_invoke$arity$1(cell_data))?cljs.core.map.call(null,((function (cell_data){
return (function (p1__44164_SHARP_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),gcclocal.diagrams.moneyincomes.date_span_view.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__44164_SHARP_)),", ",gcclocal.diagrams.moneyincomes.c_app_span_view.call(null,new cljs.core.Keyword(null,"clientapplication","clientapplication",110117812).cljs$core$IFn$_invoke$arity$1(p1__44164_SHARP_)),":  ",gcclocal.comm.utils.money_str.call(null,cljs.core.get_in.call(null,p1__44164_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-money","c-money",-1182799478),new cljs.core.Keyword(null,"summ","summ",-1220398077)], null)))], null);
});})(cell_data))
,new cljs.core.Keyword(null,"datemoneys","datemoneys",660988127).cljs$core$IFn$_invoke$arity$1(cell_data)):cljs.core.map.call(null,((function (cell_data){
return (function (p1__44165_SHARP_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),gcclocal.diagrams.moneyincomes.c_app_span_view.call(null,new cljs.core.Keyword(null,"clientapplication","clientapplication",110117812).cljs$core$IFn$_invoke$arity$1(p1__44165_SHARP_)),":  ",gcclocal.comm.utils.money_str.call(null,cljs.core.get_in.call(null,p1__44165_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-money","c-money",-1182799478),new cljs.core.Keyword(null,"summ","summ",-1220398077)], null)))], null);
});})(cell_data))
,new cljs.core.Keyword(null,"datemoneys","datemoneys",660988127).cljs$core$IFn$_invoke$arity$1(cell_data))):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44171))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","list","payments-list"], null)], null),attrs44171)):{"className": "ui list payments-list"}),((cljs.core.map_QMARK_.call(null,attrs44171))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44171,cell_data){
return (function (p1__44166_SHARP_){
return gcclocal.diagrams.moneyincomes.movements_in_popup_view.call(null,new cljs.core.Keyword(null,"from","from",1815293044),p1__44166_SHARP_);
});})(attrs44171,cell_data))
,new cljs.core.Keyword(null,"from-movements","from-movements",-1109731299).cljs$core$IFn$_invoke$arity$1(cell_data))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44171,cell_data){
return (function (p1__44167_SHARP_){
return gcclocal.diagrams.moneyincomes.movements_in_popup_view.call(null,new cljs.core.Keyword(null,"to","to",192099007),p1__44167_SHARP_);
});})(attrs44171,cell_data))
,new cljs.core.Keyword(null,"to-movements","to-movements",1964048690).cljs$core$IFn$_invoke$arity$1(cell_data)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44171),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44171,cell_data){
return (function (p1__44166_SHARP_){
return gcclocal.diagrams.moneyincomes.movements_in_popup_view.call(null,new cljs.core.Keyword(null,"from","from",1815293044),p1__44166_SHARP_);
});})(attrs44171,cell_data))
,new cljs.core.Keyword(null,"from-movements","from-movements",-1109731299).cljs$core$IFn$_invoke$arity$1(cell_data))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44171,cell_data){
return (function (p1__44167_SHARP_){
return gcclocal.diagrams.moneyincomes.movements_in_popup_view.call(null,new cljs.core.Keyword(null,"to","to",192099007),p1__44167_SHARP_);
});})(attrs44171,cell_data))
,new cljs.core.Keyword(null,"to-movements","to-movements",1964048690).cljs$core$IFn$_invoke$arity$1(cell_data)))], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"cell-popup-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44176__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44176 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44177__i = 0, G__44177__a = new Array(arguments.length -  0);
while (G__44177__i < G__44177__a.length) {G__44177__a[G__44177__i] = arguments[G__44177__i + 0]; ++G__44177__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44177__a,0);
} 
return G__44176__delegate.call(this,args__33795__auto__);};
G__44176.cljs$lang$maxFixedArity = 0;
G__44176.cljs$lang$applyTo = (function (arglist__44178){
var args__33795__auto__ = cljs.core.seq(arglist__44178);
return G__44176__delegate(args__33795__auto__);
});
G__44176.cljs$core$IFn$_invoke$arity$variadic = G__44176__delegate;
return G__44176;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.diagrams.moneyincomes.on_add_modal_update = (function gcclocal$diagrams$moneyincomes$on_add_modal_update(state){
var rcomp_44181 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var new_movement_44182 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var pickmeup_config_44183 = cljs.core.clj__GT_js.call(null,(function (){var G__44180 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"d.m.Y",new cljs.core.Keyword(null,"default_date","default_date",-1572895704),false,new cljs.core.Keyword(null,"hide_on_select","hide_on_select",1295698145),true], null);
var G__44180__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to-this-cell","to-this-cell",2045997486),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement_44182)))?cljs.core.assoc.call(null,G__44180,new cljs.core.Keyword(null,"change","change",-1163046502),((function (G__44180,rcomp_44181,new_movement_44182){
return (function (formatted_date){
return gcclocal.diagrams.moneyincomes.change_from_date_in_movement.call(null,formatted_date,new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(new_movement_44182));
});})(G__44180,rcomp_44181,new_movement_44182))
):G__44180);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"from-this-cell","from-this-cell",-2017414336),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement_44182))){
return cljs.core.assoc.call(null,G__44180__$1,new cljs.core.Keyword(null,"change","change",-1163046502),((function (G__44180,G__44180__$1,rcomp_44181,new_movement_44182){
return (function (formatted_date){
return gcclocal.diagrams.moneyincomes.change_to_date_in_movement.call(null,formatted_date);
});})(G__44180,G__44180__$1,rcomp_44181,new_movement_44182))
);
} else {
return G__44180__$1;
}
})());
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to-this-cell","to-this-cell",2045997486),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement_44182))){
$("#toDateInput").pickmeup("destroy");

$("#fromDateInput").pickmeup(pickmeup_config_44183);

$("#fromDateInput").pickmeup("clear");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"from-this-cell","from-this-cell",-2017414336),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement_44182))){
$("#fromDateInput").pickmeup("destroy");

$("#toDateInput").pickmeup(pickmeup_config_44183);

$("#toDateInput").pickmeup("clear");
} else {
}

gcclocal.comm.dom_utils.rcomp__GT_js$.call(null,rcomp_44181).modal({"onApprove": ((function (rcomp_44181,new_movement_44182,pickmeup_config_44183){
return (function (){
gcclocal.diagrams.moneyincomes.submit_new_movement.call(null);

return false;
});})(rcomp_44181,new_movement_44182,pickmeup_config_44183))
});

return state;
});
/**
 * Модальное окно добавления перемещения
 */
gcclocal.diagrams.moneyincomes.add_movement_modal_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (new_movement,error_msgs){
return React.createElement("div",{"id": "addMovementModal", "className": "ui small modal"},(function (){var attrs44187 = [cljs.core.str("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 "),cljs.core.str(cljs.core.get_in.call(null,new_movement,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"name","name",1843675177)], null)))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44187))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs44187)):{"className": "header"}),((cljs.core.map_QMARK_.call(null,attrs44187))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44187)], null)));
})(),React.createElement("div",{"className": "content"},React.createElement("div",{"className": "ui form"},React.createElement("div",{"className": "fields"},React.createElement("div",{"className": "five wide field"},React.createElement("label",null,"\u0421 \u0434\u0430\u0442\u044B"),(cljs.core.truth_(new cljs.core.Keyword(null,"from-expired?","from-expired?",-463755158).cljs$core$IFn$_invoke$arity$1(new_movement))?React.createElement("div",{"className": "expired-form-label"},"\u0421 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438"):sablono.interpreter.create_element.call(null,"input",{"type": "text", "id": "fromDateInput", "readOnly": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"from-this-cell","from-this-cell",-2017414336),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement)))?"readonly":""), "value": gcclocal.comm.utils.to_print_date.call(null,new cljs.core.Keyword(null,"from-date","from-date",1469949792).cljs$core$IFn$_invoke$arity$1(new_movement)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"from-this-cell","from-this-cell",-2017414336),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement)))?"read-dateinput":"")], null))}))),React.createElement("div",{"className": "five wide field"},React.createElement("label",null,"\u041D\u0430 \u0434\u0430\u0442\u0443"),sablono.interpreter.create_element.call(null,"input",{"type": "text", "id": "toDateInput", "readOnly": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to-this-cell","to-this-cell",2045997486),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement)))?"readonly":""), "value": gcclocal.comm.utils.to_print_date.call(null,new cljs.core.Keyword(null,"to-date","to-date",500848648).cljs$core$IFn$_invoke$arity$1(new_movement)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to-this-cell","to-this-cell",2045997486),new cljs.core.Keyword(null,"move-type","move-type",1684389954).cljs$core$IFn$_invoke$arity$1(new_movement)))?"read-dateinput":"")], null))})),React.createElement("div",{"className": "six wide field"},React.createElement("label",null,"\u0421\u0443\u043C\u043C\u0430"),React.createElement("div",{"className": "ui right labeled input"},sablono.interpreter.create_element.call(null,"input",{"type": "number", "placeholder": "0", "id": "amountInput", "value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(new_movement), "onChange": (function (p1__44184_SHARP_){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),p1__44184_SHARP_.target.value);
})}),(function (){var attrs44198 = gcclocal.comm.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"max-amount","max-amount",911610642).cljs$core$IFn$_invoke$arity$1(new_movement));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44198))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","label"], null)], null),attrs44198)):{"className": "ui label"}),((cljs.core.map_QMARK_.call(null,attrs44198))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44198)], null)));
})()))),React.createElement("div",{"className": "field"},React.createElement("label",null,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),sablono.interpreter.create_element.call(null,"input",{"type": "text", "id": "commentInput", "value": new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(new_movement), "onChange": (function (p1__44185_SHARP_){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567),new cljs.core.Keyword(null,"comment","comment",532206069)], null)),p1__44185_SHARP_.target.value);
})}))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,error_msgs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.error.message","div.ui.error.message",-658647675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (p1__44186_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),p1__44186_SHARP_], null);
}),error_msgs)], null)], null):null))),React.createElement("div",{"className": "actions"},React.createElement("div",{"className": "ui deny button"},"\u041E\u0442\u043C\u0435\u043D\u0430"),React.createElement("div",{"className": "ui positive right labeled icon button"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",React.createElement("i",{"className": "add icon"}))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),gcclocal.diagrams.moneyincomes.on_add_modal_update], null)], null)),"add-movement-modal-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44201__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44201 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44202__i = 0, G__44202__a = new Array(arguments.length -  0);
while (G__44202__i < G__44202__a.length) {G__44202__a[G__44202__i] = arguments[G__44202__i + 0]; ++G__44202__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44202__a,0);
} 
return G__44201__delegate.call(this,args__33795__auto__);};
G__44201.cljs$lang$maxFixedArity = 0;
G__44201.cljs$lang$applyTo = (function (arglist__44203){
var args__33795__auto__ = cljs.core.seq(arglist__44203);
return G__44201__delegate(args__33795__auto__);
});
G__44201.cljs$core$IFn$_invoke$arity$variadic = G__44201__delegate;
return G__44201;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.diagrams.moneyincomes.on_mount_custom_popup = (function gcclocal$diagrams$moneyincomes$on_mount_custom_popup(state){
return $("#customItemDateInput").pickmeup({"format": "d.m.Y", "default_date": false, "hide_on_select": true});
});
/**
 * Кастомное попап меню для добавления записи в категорию
 */
gcclocal.diagrams.moneyincomes.custom_popup_item_menu = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (selected_category,add_item_mode_QMARK_){
return React.createElement("div",{"style": {"visibility": (cljs.core.truth_(add_item_mode_QMARK_)?"visible":"hidden")}, "className": "custom-add-menu custom-animation"},React.createElement("div",{"className": "custom-item-popup"},React.createElement("i",{"onClick": (function (){
return gcclocal.diagrams.moneyincomes.turn_off_add_custom_item_mode.call(null);
}), "className": "remove icon link close-popup-icon"}),React.createElement("div",{"className": "ui small input"},sablono.interpreter.create_element.call(null,"input",{"type": "text", "placeholder": "\u0414\u0430\u0442\u0430", "id": "customItemDateInput", "className": "for-date"})),React.createElement("div",{"className": "ui small action input"},sablono.interpreter.create_element.call(null,"input",{"type": "number", "id": "customItemSummInput", "placeholder": "\u0421\u0443\u043C\u043C\u0430"}),React.createElement("div",{"title": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C", "onClick": (function (){
return gcclocal.diagrams.moneyincomes.add_category_item.call(null,new cljs.core.Keyword(null,"category-type","category-type",981142811).cljs$core$IFn$_invoke$arity$1(selected_category),new cljs.core.Keyword(null,"category-id","category-id",1171211503).cljs$core$IFn$_invoke$arity$1(selected_category),gcclocal.comm.dom_utils.value_from_dom.call(null,"#customItemDateInput"),gcclocal.comm.dom_utils.value_from_dom.call(null,"#customItemSummInput"));
}), "className": "ui icon button"},React.createElement("i",{"className": "add icon"})))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),gcclocal.diagrams.moneyincomes.on_mount_custom_popup], null)], null)),"custom-popup-item-menu");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44210__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44210 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44211__i = 0, G__44211__a = new Array(arguments.length -  0);
while (G__44211__i < G__44211__a.length) {G__44211__a[G__44211__i] = arguments[G__44211__i + 0]; ++G__44211__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44211__a,0);
} 
return G__44210__delegate.call(this,args__33795__auto__);};
G__44210.cljs$lang$maxFixedArity = 0;
G__44210.cljs$lang$applyTo = (function (arglist__44212){
var args__33795__auto__ = cljs.core.seq(arglist__44212);
return G__44210__delegate(args__33795__auto__);
});
G__44210.cljs$core$IFn$_invoke$arity$variadic = G__44210__delegate;
return G__44210;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * 
 */
gcclocal.diagrams.moneyincomes.main_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var is_loading_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
var all_clients = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-clients","all-clients",1756927943)], null)));
var clients_cinfos = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clients-cinfos","clients-cinfos",-1458657330)], null)));
var expired_cinfos = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clients-expired-cinfos","clients-expired-cinfos",1830932623)], null)));
var income_categories = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"incomecategories","incomecategories",-2066678988)], null)));
var income_items = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"incomeitems","incomeitems",-662864220)], null)));
var expense_categories = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expensecategories","expensecategories",-1936222718)], null)));
var expense_items = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expenseitems","expenseitems",1348907063)], null)));
var total_i_expired_summ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-i-expired-summ","total-i-expired-summ",642175145)], null)));
var total_i_cell_summs = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-i-cell-summs","total-i-cell-summs",-352188484)], null)));
var total_e_cell_summs = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-e-cell-summs","total-e-cell-summs",-959694736)], null)));
var init_bs_on_start = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-balances-on-start","init-balances-on-start",-506814809)], null)));
var init_bs_on_end = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-balances-on-end","init-balances-on-end",123357514)], null)));
var selected_cell = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)));
var selected_category = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-category","selected-category",-1539830769)], null)));
var all_visible_d = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-visible-dates","all-visible-dates",-1302813937)], null)));
var new_movement = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement","new-movement",-527469567)], null)));
var new_movement_errors = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movement-errors","new-movement-errors",-496849040)], null)));
var add_income_cat_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-income-cat-mode?","add-income-cat-mode?",1207873228)], null)));
var add_expense_cat_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-expense-cat-mode?","add-expense-cat-mode?",1531753771)], null)));
var edit_income_cat_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-income-cat-mode?","edit-income-cat-mode?",816697222)], null)));
var edit_expense_cat_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-expense-cat-mode?","edit-expense-cat-mode?",-2096923182)], null)));
var edit_i_item_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-income-item-mode?","edit-income-item-mode?",2101828648)], null)));
var edit_e_item_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"edit-expense-item-mode?","edit-expense-item-mode?",-720466101)], null)));
var add_category_item_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.moneyincomes.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-category-item-mode?","add-category-item-mode?",174887773)], null)));
return React.createElement("div",null,React.createElement("div",{"style": {"visibility": (cljs.core.truth_(is_loading_QMARK_)?"visible":"hidden")}, "className": "ui active centered inline loader"}),React.createElement("div",{"style": {"marginTop": "3em"}, "className": "outer"},React.createElement("div",{"className": "inner"},React.createElement("table",{"className": "ui compact celled very basic table diagram-clients-table fixed-first-column-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"\u041A\u043B\u0438\u0435\u043D\u0442\u044B"),React.createElement("th",{"style": {"textAlign": "center"}},"\u041F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0430"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44213_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),gcclocal.comm.utils.to_print_date.call(null,p1__44213_SHARP_)], null);
});})(is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),React.createElement("th",{"style": {"textAlign": "center", "minWidth": "80px"}},"\u0418\u0442\u043E\u0433\u043E"))),(function (){var attrs44221 = cljs.core.map.call(null,((function (is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44214_SHARP_){
return gcclocal.diagrams.moneyincomes.client_income_tr_view.call(null,p1__44214_SHARP_,all_visible_d,cljs.core.get.call(null,clients_cinfos,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44214_SHARP_)),cljs.core.get.call(null,expired_cinfos,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44214_SHARP_)));
});})(is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_clients);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs44221))?sablono.interpreter.attributes.call(null,attrs44221):null),((cljs.core.map_QMARK_.call(null,attrs44221))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
return gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,new cljs.core.Keyword(null,"income","income",654385502),cat,cljs.core.filter.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44215_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category_id","category_id",-15558562).cljs$core$IFn$_invoke$arity$1(p1__44215_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_items),all_visible_d,edit_i_item_mode_QMARK_,edit_income_cat_mode_QMARK_,gcclocal.diagrams.moneyincomes.category_selected_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"income","income",654385502)));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_categories)),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,new cljs.core.Keyword(null,"income","income",654385502),all_visible_d,add_income_cat_mode_QMARK_)),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F"),(function (){var attrs44230 = gcclocal.comm.utils.money_str.call(null,total_i_expired_summ);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44230))?sablono.interpreter.attributes.call(null,attrs44230):null),((cljs.core.map_QMARK_.call(null,attrs44230))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44230)], null)));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44216_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,total_i_cell_summs,p1__44216_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44231 = gcclocal.comm.utils.money_str.call(null,(cljs.core.reduce_kv.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_i_cell_summs) + total_i_expired_summ));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44231))?sablono.interpreter.attributes.call(null,attrs44231):null),((cljs.core.map_QMARK_.call(null,attrs44231))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44231)], null)));
})()),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u0420\u0430\u0441\u0445\u043E\u0434\u044B"),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44217_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,total_e_cell_summs,p1__44217_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44236 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce_kv.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_e_cell_summs));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44236))?sablono.interpreter.attributes.call(null,attrs44236):null),((cljs.core.map_QMARK_.call(null,attrs44236))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44236)], null)));
})()),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
return gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,new cljs.core.Keyword(null,"expense","expense",1909150212),cat,cljs.core.filter.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44218_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category_id","category_id",-15558562).cljs$core$IFn$_invoke$arity$1(p1__44218_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_items),all_visible_d,edit_e_item_mode_QMARK_,edit_expense_cat_mode_QMARK_,gcclocal.diagrams.moneyincomes.category_selected_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"expense","expense",1909150212)));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_categories)),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,new cljs.core.Keyword(null,"expense","expense",1909150212),all_visible_d,add_expense_cat_mode_QMARK_)),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u043E"),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44219_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,init_bs_on_start,p1__44219_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44241 = gcclocal.comm.utils.money_str.call(null,gcclocal.diagrams.moneyincomes_calc.total_init_balance.call(null,init_bs_on_end,all_visible_d));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44241))?sablono.interpreter.attributes.call(null,attrs44241):null),((cljs.core.map_QMARK_.call(null,attrs44241))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44241)], null)));
})()),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043A\u043E\u043D\u0435\u0446"),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44220_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,init_bs_on_end,p1__44220_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44246 = gcclocal.comm.utils.money_str.call(null,gcclocal.diagrams.moneyincomes_calc.total_init_balance.call(null,init_bs_on_end,all_visible_d));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44246))?sablono.interpreter.attributes.call(null,attrs44246):null),((cljs.core.map_QMARK_.call(null,attrs44246))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44246)], null)));
})())], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44221),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
return gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,new cljs.core.Keyword(null,"income","income",654385502),cat,cljs.core.filter.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44215_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category_id","category_id",-15558562).cljs$core$IFn$_invoke$arity$1(p1__44215_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_items),all_visible_d,edit_i_item_mode_QMARK_,edit_income_cat_mode_QMARK_,gcclocal.diagrams.moneyincomes.category_selected_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"income","income",654385502)));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,income_categories)),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,new cljs.core.Keyword(null,"income","income",654385502),all_visible_d,add_income_cat_mode_QMARK_)),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F"),(function (){var attrs44249 = gcclocal.comm.utils.money_str.call(null,total_i_expired_summ);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44249))?sablono.interpreter.attributes.call(null,attrs44249):null),((cljs.core.map_QMARK_.call(null,attrs44249))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44249)], null)));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44216_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,total_i_cell_summs,p1__44216_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44250 = gcclocal.comm.utils.money_str.call(null,(cljs.core.reduce_kv.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_i_cell_summs) + total_i_expired_summ));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44250))?sablono.interpreter.attributes.call(null,attrs44250):null),((cljs.core.map_QMARK_.call(null,attrs44250))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44250)], null)));
})()),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u0420\u0430\u0441\u0445\u043E\u0434\u044B"),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44217_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,total_e_cell_summs,p1__44217_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44255 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce_kv.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,(0),total_e_cell_summs));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44255))?sablono.interpreter.attributes.call(null,attrs44255):null),((cljs.core.map_QMARK_.call(null,attrs44255))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44255)], null)));
})()),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (cat){
return gcclocal.diagrams.moneyincomes.custom_category_tr_view.call(null,new cljs.core.Keyword(null,"expense","expense",1909150212),cat,cljs.core.filter.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44218_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category_id","category_id",-15558562).cljs$core$IFn$_invoke$arity$1(p1__44218_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_items),all_visible_d,edit_e_item_mode_QMARK_,edit_expense_cat_mode_QMARK_,gcclocal.diagrams.moneyincomes.category_selected_QMARK_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"expense","expense",1909150212)));
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,expense_categories)),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.add_custom_category_tr_view.call(null,new cljs.core.Keyword(null,"expense","expense",1909150212),all_visible_d,add_expense_cat_mode_QMARK_)),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u043E"),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44219_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,init_bs_on_start,p1__44219_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44260 = gcclocal.comm.utils.money_str.call(null,gcclocal.diagrams.moneyincomes_calc.total_init_balance.call(null,init_bs_on_end,all_visible_d));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44260))?sablono.interpreter.attributes.call(null,attrs44260):null),((cljs.core.map_QMARK_.call(null,attrs44260))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44260)], null)));
})()),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u043A\u043E\u043D\u0435\u0446"),React.createElement("td",null),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_){
return (function (p1__44220_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,init_bs_on_end,p1__44220_SHARP_))], null);
});})(attrs44221,is_loading_QMARK_,all_clients,clients_cinfos,expired_cinfos,income_categories,income_items,expense_categories,expense_items,total_i_expired_summ,total_i_cell_summs,total_e_cell_summs,init_bs_on_start,init_bs_on_end,selected_cell,selected_category,all_visible_d,new_movement,new_movement_errors,add_income_cat_mode_QMARK_,add_expense_cat_mode_QMARK_,edit_income_cat_mode_QMARK_,edit_expense_cat_mode_QMARK_,edit_i_item_mode_QMARK_,edit_e_item_mode_QMARK_,add_category_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs44265 = gcclocal.comm.utils.money_str.call(null,gcclocal.diagrams.moneyincomes_calc.total_init_balance.call(null,init_bs_on_end,all_visible_d));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs44265))?sablono.interpreter.attributes.call(null,attrs44265):null),((cljs.core.map_QMARK_.call(null,attrs44265))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44265)], null)));
})())], null)));
})()),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.cell_popup_view.call(null,selected_cell)))),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.add_movement_modal_view.call(null,new_movement,new_movement_errors)),sablono.interpreter.interpret.call(null,gcclocal.diagrams.moneyincomes.custom_popup_item_menu.call(null,selected_category,add_category_item_mode_QMARK_)),sablono.interpreter.interpret.call(null,gcclocal.views.common.basic_approve_modal_view.call(null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"main-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44266__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44266 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44267__i = 0, G__44267__a = new Array(arguments.length -  0);
while (G__44267__i < G__44267__a.length) {G__44267__a[G__44267__i] = arguments[G__44267__i + 0]; ++G__44267__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44267__a,0);
} 
return G__44266__delegate.call(this,args__33795__auto__);};
G__44266.cljs$lang$maxFixedArity = 0;
G__44266.cljs$lang$applyTo = (function (arglist__44268){
var args__33795__auto__ = cljs.core.seq(arglist__44268);
return G__44266__delegate(args__33795__auto__);
});
G__44266.cljs$core$IFn$_invoke$arity$variadic = G__44266__delegate;
return G__44266;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.diagrams.moneyincomes.init = (function gcclocal$diagrams$moneyincomes$init(){
cljs.core.println.call(null,"init moneyincomes");

gcclocal.diagrams.moneyincomes.init_channels.call(null);

gcclocal.diagrams.moneyincomes.init_watchers.call(null);

gcclocal.diagrams.moneyincomes.refresh_ajax_data.call(null);

return rum.core.mount.call(null,gcclocal.diagrams.moneyincomes.main_view.call(null),document.getElementById("maintable"));
});
goog.exportSymbol('gcclocal.diagrams.moneyincomes.init', gcclocal.diagrams.moneyincomes.init);

//# sourceMappingURL=moneyincomes.js.map