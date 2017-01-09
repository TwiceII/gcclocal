// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.diagrams.suppliershippingsplan');
goog.require('cljs.core');
goog.require('gcclocal.comm.dom_utils');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.utils');
goog.require('rum.core');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.common');
goog.require('gcclocal.comm.channels');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gcclocal.diagrams.suppliershippingsplan.app_state !== 'undefined'){
} else {
gcclocal.diagrams.suppliershippingsplan.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"total-cell-summs","total-cell-summs",628554628),new cljs.core.Keyword(null,"all-suppliers","all-suppliers",-1819310136),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"all-client-apps","all-client-apps",-1206675027),new cljs.core.Keyword(null,"all-visible-dates","all-visible-dates",-1302813937),new cljs.core.Keyword(null,"suppliers-cinfos","suppliers-cinfos",829736561),new cljs.core.Keyword(null,"selected-supplier","selected-supplier",-2059508492),new cljs.core.Keyword(null,"planpayments","planpayments",-1685641956)],[null,null,false,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-item-mode?","add-item-mode?",-1732573252),false], null),null,null,null,null,null]));
}
gcclocal.diagrams.suppliershippingsplan.state_cursor = cljs.core.partial.call(null,rum.core.cursor,gcclocal.diagrams.suppliershippingsplan.app_state);
gcclocal.diagrams.suppliershippingsplan.load_count = cljs.core.atom.call(null,(0));
gcclocal.diagrams.suppliershippingsplan.load_all_ch = cljs.core.async.chan.call(null);
gcclocal.diagrams.suppliershippingsplan.notify_ch = gcclocal.comm.channels.init_notify_ch.call(null);
gcclocal.diagrams.suppliershippingsplan.needed_ajax_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all-suppliers","all-suppliers",-1819310136),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/catalogs/suppliers/all"], null),new cljs.core.Keyword(null,"all-client-apps","all-client-apps",-1206675027),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/primarydocs/clientapplications/all"], null),new cljs.core.Keyword(null,"planpayments","planpayments",-1685641956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/moneydiagram/shippingplan/all"], null)], null);
/**
 * Обновить все данные с сервера
 */
gcclocal.diagrams.suppliershippingsplan.refresh_ajax_data = (function gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data(){
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)),true);

gcclocal.diagrams.suppliershippingsplan.turn_off_modes.call(null);

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.load_count,(0));

var seq__38598_38666 = cljs.core.seq.call(null,gcclocal.diagrams.suppliershippingsplan.needed_ajax_data);
var chunk__38599_38667 = null;
var count__38600_38668 = (0);
var i__38601_38669 = (0);
while(true){
if((i__38601_38669 < count__38600_38668)){
var vec__38602_38670 = cljs.core._nth.call(null,chunk__38599_38667,i__38601_38669);
var dname_38671 = cljs.core.nth.call(null,vec__38602_38670,(0),null);
var dval_38672 = cljs.core.nth.call(null,vec__38602_38670,(1),null);
gcclocal.comm.utils.get_json.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(dval_38672),cljs.core.PersistentArrayMap.EMPTY,((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,vec__38602_38670,dname_38671,dval_38672){
return (function (res){
if(cljs.core.truth_(gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res)))){
} else {
var c__35123__auto___38673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38673,vec__38602_38670,dname_38671,dval_38672){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38673,vec__38602_38670,dname_38671,dval_38672){
return (function (state_38613){
var state_val_38614 = (state_38613[(1)]);
if((state_val_38614 === (1))){
var inst_38605 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38606 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res);
var inst_38607 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_38606);
var inst_38608 = [inst_38607,"error"];
var inst_38609 = cljs.core.PersistentHashMap.fromArrays(inst_38605,inst_38608);
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38613__$1,(2),gcclocal.diagrams.suppliershippingsplan.notify_ch,inst_38609);
} else {
if((state_val_38614 === (2))){
var inst_38611 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38613__$1,inst_38611);
} else {
return null;
}
}
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38673,vec__38602_38670,dname_38671,dval_38672))
;
return ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto___38673,vec__38602_38670,dname_38671,dval_38672){
return (function() {
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_38618 = [null,null,null,null,null,null,null];
(statearr_38618[(0)] = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_38618[(1)] = (1));

return statearr_38618;
});
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_38613){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38619){if((e38619 instanceof Object)){
var ex__35015__auto__ = e38619;
var statearr_38620_38674 = state_38613;
(statearr_38620_38674[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38675 = state_38613;
state_38613 = G__38675;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_38613){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_38613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto___38673,vec__38602_38670,dname_38671,dval_38672))
})();
var state__35125__auto__ = (function (){var statearr_38621 = f__35124__auto__.call(null);
(statearr_38621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38673);

return statearr_38621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38673,vec__38602_38670,dname_38671,dval_38672))
);

}

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dname_38671], null)),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(res));

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38602_38670,dname_38671,dval_38672){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38602_38670,dname_38671,dval_38672){
return (function (state_38625){
var state_val_38626 = (state_38625[(1)]);
if((state_val_38626 === (1))){
var state_38625__$1 = state_38625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38625__$1,(2),gcclocal.diagrams.suppliershippingsplan.load_all_ch,true);
} else {
if((state_val_38626 === (2))){
var inst_38623 = (state_38625[(2)]);
var state_38625__$1 = state_38625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38625__$1,inst_38623);
} else {
return null;
}
}
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38602_38670,dname_38671,dval_38672))
;
return ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto__,vec__38602_38670,dname_38671,dval_38672){
return (function() {
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_38630 = [null,null,null,null,null,null,null];
(statearr_38630[(0)] = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_38630[(1)] = (1));

return statearr_38630;
});
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_38625){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38631){if((e38631 instanceof Object)){
var ex__35015__auto__ = e38631;
var statearr_38632_38676 = state_38625;
(statearr_38632_38676[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38677 = state_38625;
state_38625 = G__38677;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_38625){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_38625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto__,vec__38602_38670,dname_38671,dval_38672))
})();
var state__35125__auto__ = (function (){var statearr_38633 = f__35124__auto__.call(null);
(statearr_38633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38602_38670,dname_38671,dval_38672))
);

return c__35123__auto__;
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,vec__38602_38670,dname_38671,dval_38672))
);

var G__38678 = seq__38598_38666;
var G__38679 = chunk__38599_38667;
var G__38680 = count__38600_38668;
var G__38681 = (i__38601_38669 + (1));
seq__38598_38666 = G__38678;
chunk__38599_38667 = G__38679;
count__38600_38668 = G__38680;
i__38601_38669 = G__38681;
continue;
} else {
var temp__4657__auto___38682 = cljs.core.seq.call(null,seq__38598_38666);
if(temp__4657__auto___38682){
var seq__38598_38683__$1 = temp__4657__auto___38682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38598_38683__$1)){
var c__31388__auto___38684 = cljs.core.chunk_first.call(null,seq__38598_38683__$1);
var G__38685 = cljs.core.chunk_rest.call(null,seq__38598_38683__$1);
var G__38686 = c__31388__auto___38684;
var G__38687 = cljs.core.count.call(null,c__31388__auto___38684);
var G__38688 = (0);
seq__38598_38666 = G__38685;
chunk__38599_38667 = G__38686;
count__38600_38668 = G__38687;
i__38601_38669 = G__38688;
continue;
} else {
var vec__38634_38689 = cljs.core.first.call(null,seq__38598_38683__$1);
var dname_38690 = cljs.core.nth.call(null,vec__38634_38689,(0),null);
var dval_38691 = cljs.core.nth.call(null,vec__38634_38689,(1),null);
gcclocal.comm.utils.get_json.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(dval_38691),cljs.core.PersistentArrayMap.EMPTY,((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682){
return (function (res){
if(cljs.core.truth_(gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res)))){
} else {
var c__35123__auto___38692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38692,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38692,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682){
return (function (state_38645){
var state_val_38646 = (state_38645[(1)]);
if((state_val_38646 === (1))){
var inst_38637 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38638 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res);
var inst_38639 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_38638);
var inst_38640 = [inst_38639,"error"];
var inst_38641 = cljs.core.PersistentHashMap.fromArrays(inst_38637,inst_38640);
var state_38645__$1 = state_38645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38645__$1,(2),gcclocal.diagrams.suppliershippingsplan.notify_ch,inst_38641);
} else {
if((state_val_38646 === (2))){
var inst_38643 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38645__$1,inst_38643);
} else {
return null;
}
}
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38692,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682))
;
return ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto___38692,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682){
return (function() {
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_38650 = [null,null,null,null,null,null,null];
(statearr_38650[(0)] = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_38650[(1)] = (1));

return statearr_38650;
});
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_38645){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38651){if((e38651 instanceof Object)){
var ex__35015__auto__ = e38651;
var statearr_38652_38693 = state_38645;
(statearr_38652_38693[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38694 = state_38645;
state_38645 = G__38694;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_38645){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_38645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto___38692,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682))
})();
var state__35125__auto__ = (function (){var statearr_38653 = f__35124__auto__.call(null);
(statearr_38653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38692);

return statearr_38653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto___38692,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682))
);

}

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dname_38690], null)),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(res));

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682){
return (function (state_38657){
var state_val_38658 = (state_38657[(1)]);
if((state_val_38658 === (1))){
var state_38657__$1 = state_38657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38657__$1,(2),gcclocal.diagrams.suppliershippingsplan.load_all_ch,true);
} else {
if((state_val_38658 === (2))){
var inst_38655 = (state_38657[(2)]);
var state_38657__$1 = state_38657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38657__$1,inst_38655);
} else {
return null;
}
}
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682))
;
return ((function (seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto__,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682){
return (function() {
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0 = (function (){
var statearr_38662 = [null,null,null,null,null,null,null];
(statearr_38662[(0)] = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__);

(statearr_38662[(1)] = (1));

return statearr_38662;
});
var gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1 = (function (state_38657){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38663){if((e38663 instanceof Object)){
var ex__35015__auto__ = e38663;
var statearr_38664_38695 = state_38657;
(statearr_38664_38695[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38696 = state_38657;
state_38657 = G__38696;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__ = function(state_38657){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1.call(this,state_38657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$refresh_ajax_data_$_state_machine__35012__auto__;
})()
;})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,switch__35011__auto__,c__35123__auto__,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682))
})();
var state__35125__auto__ = (function (){var statearr_38665 = f__35124__auto__.call(null);
(statearr_38665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,c__35123__auto__,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682))
);

return c__35123__auto__;
});})(seq__38598_38666,chunk__38599_38667,count__38600_38668,i__38601_38669,vec__38634_38689,dname_38690,dval_38691,seq__38598_38683__$1,temp__4657__auto___38682))
);

var G__38697 = cljs.core.next.call(null,seq__38598_38683__$1);
var G__38698 = null;
var G__38699 = (0);
var G__38700 = (0);
seq__38598_38666 = G__38697;
chunk__38599_38667 = G__38698;
count__38600_38668 = G__38699;
i__38601_38669 = G__38700;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)),false);
});
/**
 * Даты видимые (не просроченные)
 */
gcclocal.diagrams.suppliershippingsplan.all_visible_dates = (function gcclocal$diagrams$suppliershippingsplan$all_visible_dates(planpayments,date_to_check){
return (function (all_dates){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,gcclocal.comm.utils.sort_dates.call(null,false,cljs.core.distinct.call(null,cljs.core.filter.call(null,(function (p1__38702_SHARP_){
var or__30577__auto__ = gcclocal.comm.utils.moment_after_QMARK_.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,p1__38702_SHARP_),gcclocal.comm.utils.iso_str__GT_moment.call(null,date_to_check));
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return gcclocal.comm.utils.moment_same_QMARK_.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,p1__38702_SHARP_),gcclocal.comm.utils.iso_str__GT_moment.call(null,date_to_check));
}
}),all_dates))));
}).call(null,cljs.core.distinct.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_to_check], null),cljs.core.mapcat.call(null,(function (p1__38701_SHARP_){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"plan_date","plan_date",256376355),new cljs.core.Keyword(null,"plan_payments","plan_payments",1088168684).cljs$core$IFn$_invoke$arity$1(p1__38701_SHARP_));
}),planpayments))));
});
gcclocal.diagrams.suppliershippingsplan.get_total_cell_summs = (function gcclocal$diagrams$suppliershippingsplan$get_total_cell_summs(all_visible_dates){
var app_s = cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.app_state);
var x = app_s;
var x__$1 = new cljs.core.Keyword(null,"planpayments","planpayments",-1685641956).cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"plan_payments","plan_payments",1088168684),x__$1);
return cljs.core.reduce.call(null,((function (x,x__$1,x__$2,app_s){
return (function (m,d){
return cljs.core.assoc.call(null,m,d,cljs.core.reduce.call(null,((function (x,x__$1,x__$2,app_s){
return (function (s,pp){
return (s + new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(pp));
});})(x,x__$1,x__$2,app_s))
,(0),cljs.core.filter.call(null,((function (x,x__$1,x__$2,app_s){
return (function (p1__38703_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plan_date","plan_date",256376355).cljs$core$IFn$_invoke$arity$1(p1__38703_SHARP_),d);
});})(x,x__$1,x__$2,app_s))
,x__$2)));
});})(x,x__$1,x__$2,app_s))
,cljs.core.PersistentArrayMap.EMPTY,all_visible_dates);
});
/**
 * Посчитать все данные
 */
gcclocal.diagrams.suppliershippingsplan.calc_all_data = (function gcclocal$diagrams$suppliershippingsplan$calc_all_data(){
var cur_app_data = cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,cljs.core.PersistentVector.EMPTY));
return ((function (cur_app_data){
return (function (p1__38704_SHARP_){
return cljs.core.assoc.call(null,p1__38704_SHARP_,new cljs.core.Keyword(null,"total-cell-summs","total-cell-summs",628554628),gcclocal.diagrams.suppliershippingsplan.get_total_cell_summs.call(null,new cljs.core.Keyword(null,"all-visible-dates","all-visible-dates",-1302813937).cljs$core$IFn$_invoke$arity$1(p1__38704_SHARP_)));
});})(cur_app_data))
.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"all-visible-dates","all-visible-dates",-1302813937),gcclocal.diagrams.suppliershippingsplan.all_visible_dates.call(null,new cljs.core.Keyword(null,"planpayments","planpayments",-1685641956).cljs$core$IFn$_invoke$arity$1(cur_app_data),gcclocal.comm.utils.current_date_iso_str.call(null))),new cljs.core.Keyword(null,"suppliers-cinfos","suppliers-cinfos",829736561),(function (){var x = cur_app_data;
var x__$1 = new cljs.core.Keyword(null,"planpayments","planpayments",-1685641956).cljs$core$IFn$_invoke$arity$1(x);
return cljs.core.reduce.call(null,((function (x,x__$1,cur_app_data){
return (function (m,p){
return cljs.core.assoc.call(null,m,cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"supplier","supplier",18255489),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"plan_date","plan_date",256376355),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plan_payments","plan_payments",1088168684)], null))));
});})(x,x__$1,cur_app_data))
,cljs.core.PersistentArrayMap.EMPTY,x__$1);
})()));
});
gcclocal.diagrams.suppliershippingsplan.calc_all_data.call(null);
/**
 * Перезаписать в app-state посчитанные данные
 */
gcclocal.diagrams.suppliershippingsplan.reset_app_state_data = (function gcclocal$diagrams$suppliershippingsplan$reset_app_state_data(){
cljs.core.println.call(null,"reset-app-state-data");

cljs.core.println.call(null,gcclocal.diagrams.suppliershippingsplan.calc_all_data.call(null));

var seq__38715_38725 = cljs.core.seq.call(null,gcclocal.diagrams.suppliershippingsplan.calc_all_data.call(null));
var chunk__38716_38726 = null;
var count__38717_38727 = (0);
var i__38718_38728 = (0);
while(true){
if((i__38718_38728 < count__38717_38727)){
var vec__38719_38729 = cljs.core._nth.call(null,chunk__38716_38726,i__38718_38728);
var k_38730 = cljs.core.nth.call(null,vec__38719_38729,(0),null);
var v_38731 = cljs.core.nth.call(null,vec__38719_38729,(1),null);
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_38730], null)),v_38731);

var G__38732 = seq__38715_38725;
var G__38733 = chunk__38716_38726;
var G__38734 = count__38717_38727;
var G__38735 = (i__38718_38728 + (1));
seq__38715_38725 = G__38732;
chunk__38716_38726 = G__38733;
count__38717_38727 = G__38734;
i__38718_38728 = G__38735;
continue;
} else {
var temp__4657__auto___38736 = cljs.core.seq.call(null,seq__38715_38725);
if(temp__4657__auto___38736){
var seq__38715_38737__$1 = temp__4657__auto___38736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38715_38737__$1)){
var c__31388__auto___38738 = cljs.core.chunk_first.call(null,seq__38715_38737__$1);
var G__38739 = cljs.core.chunk_rest.call(null,seq__38715_38737__$1);
var G__38740 = c__31388__auto___38738;
var G__38741 = cljs.core.count.call(null,c__31388__auto___38738);
var G__38742 = (0);
seq__38715_38725 = G__38739;
chunk__38716_38726 = G__38740;
count__38717_38727 = G__38741;
i__38718_38728 = G__38742;
continue;
} else {
var vec__38722_38743 = cljs.core.first.call(null,seq__38715_38737__$1);
var k_38744 = cljs.core.nth.call(null,vec__38722_38743,(0),null);
var v_38745 = cljs.core.nth.call(null,vec__38722_38743,(1),null);
cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_38744], null)),v_38745);

var G__38746 = cljs.core.next.call(null,seq__38715_38737__$1);
var G__38747 = null;
var G__38748 = (0);
var G__38749 = (0);
seq__38715_38725 = G__38746;
chunk__38716_38726 = G__38747;
count__38717_38727 = G__38748;
i__38718_38728 = G__38749;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,cljs.core.PersistentVector.EMPTY)));
});
/**
 * Инициализация каналов
 */
gcclocal.diagrams.suppliershippingsplan.init_channels = (function gcclocal$diagrams$suppliershippingsplan$init_channels(){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_38811){
var state_val_38812 = (state_38811[(1)]);
if((state_val_38812 === (7))){
var inst_38794 = (state_38811[(2)]);
var inst_38795 = cljs.core.swap_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.load_count,cljs.core.inc);
var inst_38796 = cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.load_count);
var inst_38797 = cljs.core.count.call(null,gcclocal.diagrams.suppliershippingsplan.needed_ajax_data);
var inst_38798 = cljs.core._EQ_.call(null,inst_38796,inst_38797);
var state_38811__$1 = (function (){var statearr_38813 = state_38811;
(statearr_38813[(7)] = inst_38794);

(statearr_38813[(8)] = inst_38795);

return statearr_38813;
})();
if(inst_38798){
var statearr_38814_38832 = state_38811__$1;
(statearr_38814_38832[(1)] = (8));

} else {
var statearr_38815_38833 = state_38811__$1;
(statearr_38815_38833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38812 === (1))){
var state_38811__$1 = state_38811;
var statearr_38816_38834 = state_38811__$1;
(statearr_38816_38834[(2)] = null);

(statearr_38816_38834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38812 === (4))){
var state_38811__$1 = state_38811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38811__$1,(7),gcclocal.diagrams.suppliershippingsplan.load_all_ch);
} else {
if((state_val_38812 === (6))){
var inst_38807 = (state_38811[(2)]);
var state_38811__$1 = state_38811;
var statearr_38817_38835 = state_38811__$1;
(statearr_38817_38835[(2)] = inst_38807);

(statearr_38817_38835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38812 === (3))){
var inst_38809 = (state_38811[(2)]);
var state_38811__$1 = state_38811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38811__$1,inst_38809);
} else {
if((state_val_38812 === (2))){
var state_38811__$1 = state_38811;
var statearr_38818_38836 = state_38811__$1;
(statearr_38818_38836[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38812 === (9))){
var state_38811__$1 = state_38811;
var statearr_38820_38837 = state_38811__$1;
(statearr_38820_38837[(2)] = null);

(statearr_38820_38837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38812 === (5))){
var state_38811__$1 = state_38811;
var statearr_38821_38838 = state_38811__$1;
(statearr_38821_38838[(2)] = null);

(statearr_38821_38838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38812 === (10))){
var inst_38803 = (state_38811[(2)]);
var state_38811__$1 = (function (){var statearr_38822 = state_38811;
(statearr_38822[(9)] = inst_38803);

return statearr_38822;
})();
var statearr_38823_38839 = state_38811__$1;
(statearr_38823_38839[(2)] = null);

(statearr_38823_38839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38812 === (8))){
var inst_38800 = gcclocal.diagrams.suppliershippingsplan.reset_app_state_data.call(null);
var state_38811__$1 = state_38811;
var statearr_38824_38840 = state_38811__$1;
(statearr_38824_38840[(2)] = inst_38800);

(statearr_38824_38840[(1)] = (10));


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
var gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto____0 = (function (){
var statearr_38828 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38828[(0)] = gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto__);

(statearr_38828[(1)] = (1));

return statearr_38828;
});
var gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto____1 = (function (state_38811){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38829){if((e38829 instanceof Object)){
var ex__35015__auto__ = e38829;
var statearr_38830_38841 = state_38811;
(statearr_38830_38841[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38842 = state_38811;
state_38811 = G__38842;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto__ = function(state_38811){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto____1.call(this,state_38811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$init_channels_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_38831 = f__35124__auto__.call(null);
(statearr_38831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
});
gcclocal.diagrams.suppliershippingsplan.get_app_by_id = (function gcclocal$diagrams$suppliershippingsplan$get_app_by_id(app_id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__38843_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38843_SHARP_),app_id);
}),cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-client-apps","all-client-apps",-1206675027)], null)))));
});
/**
 * Вывести сообщение об успешности операции и обновить все данные
 */
gcclocal.diagrams.suppliershippingsplan.success_notify_and_refresh = (function gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh(message){
var c__35123__auto___38874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___38874){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___38874){
return (function (state_38865){
var state_val_38866 = (state_38865[(1)]);
if((state_val_38866 === (1))){
var inst_38859 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38860 = [message,"success"];
var inst_38861 = cljs.core.PersistentHashMap.fromArrays(inst_38859,inst_38860);
var state_38865__$1 = state_38865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38865__$1,(2),gcclocal.diagrams.suppliershippingsplan.notify_ch,inst_38861);
} else {
if((state_val_38866 === (2))){
var inst_38863 = (state_38865[(2)]);
var state_38865__$1 = state_38865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38865__$1,inst_38863);
} else {
return null;
}
}
});})(c__35123__auto___38874))
;
return ((function (switch__35011__auto__,c__35123__auto___38874){
return (function() {
var gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto____0 = (function (){
var statearr_38870 = [null,null,null,null,null,null,null];
(statearr_38870[(0)] = gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto__);

(statearr_38870[(1)] = (1));

return statearr_38870;
});
var gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto____1 = (function (state_38865){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38871){if((e38871 instanceof Object)){
var ex__35015__auto__ = e38871;
var statearr_38872_38875 = state_38865;
(statearr_38872_38875[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38876 = state_38865;
state_38865 = G__38876;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto__ = function(state_38865){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto____1.call(this,state_38865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$success_notify_and_refresh_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___38874))
})();
var state__35125__auto__ = (function (){var statearr_38873 = f__35124__auto__.call(null);
(statearr_38873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38874);

return statearr_38873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___38874))
);


return gcclocal.diagrams.suppliershippingsplan.refresh_ajax_data.call(null);
});
/**
 * Выбрать ячейку плана
 */
gcclocal.diagrams.suppliershippingsplan.select_cell = (function gcclocal$diagrams$suppliershippingsplan$select_cell(cell_info){
cljs.core.println.call(null,"selecting cell: ");

cljs.core.println.call(null,cell_info);

cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-supplier","selected-supplier",-2059508492)], null)),null);

return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)),cell_info);
});
/**
 * Убрать выделение с ячейки
 */
gcclocal.diagrams.suppliershippingsplan.deselect_cell = (function gcclocal$diagrams$suppliershippingsplan$deselect_cell(){
return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)),null);
});
/**
 * Проверка, что ячейка выделена
 */
gcclocal.diagrams.suppliershippingsplan.cell_selected_QMARK_ = (function gcclocal$diagrams$suppliershippingsplan$cell_selected_QMARK_(cell_info){
var temp__4657__auto__ = cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)));
if(cljs.core.truth_(temp__4657__auto__)){
var sel_cell = temp__4657__auto__;
return cljs.core._EQ_.call(null,sel_cell,cell_info);
} else {
return null;
}
});
/**
 * Отключить все режимы
 */
gcclocal.diagrams.suppliershippingsplan.turn_off_modes = (function gcclocal$diagrams$suppliershippingsplan$turn_off_modes(){
cljs.core.swap_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092)], null)),(function (p1__38877_SHARP_){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,false);
}),cljs.core.PersistentArrayMap.EMPTY,p1__38877_SHARP_);
}));

gcclocal.diagrams.suppliershippingsplan.deselect_cell.call(null);

$("#customItemDateInput").val("");

return $("#customItemSummInput").val("");
});
/**
 * Выбрать поставщика
 */
gcclocal.diagrams.suppliershippingsplan.select_supplier = (function gcclocal$diagrams$suppliershippingsplan$select_supplier(supplier){
cljs.core.println.call(null,"select-supplier: ",supplier);

if(cljs.core.not_EQ_.call(null,supplier,cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-supplier","selected-supplier",-2059508492)], null))))){
gcclocal.diagrams.suppliershippingsplan.turn_off_modes.call(null);

return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-supplier","selected-supplier",-2059508492)], null)),supplier);
} else {
return null;
}
});
/**
 * Получить запись для добавления
 */
gcclocal.diagrams.suppliershippingsplan.get_add_item_values = (function gcclocal$diagrams$suppliershippingsplan$get_add_item_values(selected_supplier){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"supplier_id","supplier_id",2051817331),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_supplier)),new cljs.core.Keyword(null,"plan_date","plan_date",256376355),gcclocal.comm.dom_utils.value_from_dom.call(null,"#itemDateInput")),new cljs.core.Keyword(null,"client_application_id","client_application_id",1152236098),gcclocal.comm.dom_utils.value_from_dom.call(null,"#itemClientApp")),new cljs.core.Keyword(null,"amount","amount",364489504),gcclocal.comm.dom_utils.value_from_dom.call(null,"#itemAmountInput"));
});
/**
 * Показать контекстное меню для добавления оплаты по поставщику
 */
gcclocal.diagrams.suppliershippingsplan.show_custom_add_popup = (function gcclocal$diagrams$suppliershippingsplan$show_custom_add_popup(elem){
var top_offset_38878 = [cljs.core.str(((new $(elem)).offset().top - (50))),cljs.core.str("px")].join('');
var left_offset_38879 = [cljs.core.str(((new $(elem)).offset().left + (10))),cljs.core.str("px")].join('');
(new $(".custom-add-menu")).css({"top": top_offset_38878, "left": left_offset_38879});

return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-item-mode?","add-item-mode?",-1732573252)], null)),true);
});
/**
 * Открыть окно для добавления оплаты по поставщику
 */
gcclocal.diagrams.suppliershippingsplan.turn_add_item_popup_on = (function gcclocal$diagrams$suppliershippingsplan$turn_add_item_popup_on(evt){
cljs.core.println.call(null,"turn-add-item-popup-on");

return gcclocal.diagrams.suppliershippingsplan.show_custom_add_popup.call(null,evt.target);
});
/**
 * Отключить режим показа контекстного меню
 *   для добавления оплаты
 */
gcclocal.diagrams.suppliershippingsplan.turn_off_add_custom_item_mode = (function gcclocal$diagrams$suppliershippingsplan$turn_off_add_custom_item_mode(){
cljs.core.println.call(null,"turn-off-add-custom-item-mode");

return cljs.core.reset_BANG_.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-item-mode?","add-item-mode?",-1732573252)], null)),false);
});
/**
 * Добавление новой записи плана
 */
gcclocal.diagrams.suppliershippingsplan.add_item = (function gcclocal$diagrams$suppliershippingsplan$add_item(evt,selected_supplier){
cljs.core.println.call(null,"add-item!");

var new_item = gcclocal.diagrams.suppliershippingsplan.get_add_item_values.call(null,selected_supplier);
gcclocal.comm.utils.post_json_with_success_check.call(null,"/moneydiagram/shippingplan/add",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new_item], null),((function (new_item){
return (function (_){
return gcclocal.diagrams.suppliershippingsplan.success_notify_and_refresh.call(null,"\u041F\u043B\u0430\u043D \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D");
});})(new_item))
,((function (new_item){
return (function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__,new_item){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__,new_item){
return (function (state_38905){
var state_val_38906 = (state_38905[(1)]);
if((state_val_38906 === (1))){
var inst_38897 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38898 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_38899 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_38898);
var inst_38900 = [inst_38899,"error"];
var inst_38901 = cljs.core.PersistentHashMap.fromArrays(inst_38897,inst_38900);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38905__$1,(2),gcclocal.diagrams.suppliershippingsplan.notify_ch,inst_38901);
} else {
if((state_val_38906 === (2))){
var inst_38903 = (state_38905[(2)]);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38905__$1,inst_38903);
} else {
return null;
}
}
});})(c__35123__auto__,new_item))
;
return ((function (switch__35011__auto__,c__35123__auto__,new_item){
return (function() {
var gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto____0 = (function (){
var statearr_38910 = [null,null,null,null,null,null,null];
(statearr_38910[(0)] = gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto__);

(statearr_38910[(1)] = (1));

return statearr_38910;
});
var gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto____1 = (function (state_38905){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38911){if((e38911 instanceof Object)){
var ex__35015__auto__ = e38911;
var statearr_38912_38914 = state_38905;
(statearr_38912_38914[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38915 = state_38905;
state_38905 = G__38915;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto__ = function(state_38905){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto____1.call(this,state_38905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$add_item_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__,new_item))
})();
var state__35125__auto__ = (function (){var statearr_38913 = f__35124__auto__.call(null);
(statearr_38913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__,new_item))
);

return c__35123__auto__;
});})(new_item))
);

return cljs.core.println.call(null,new_item);
});
/**
 * Удаление записи плана
 */
gcclocal.diagrams.suppliershippingsplan.delete_item = (function gcclocal$diagrams$suppliershippingsplan$delete_item(item_id){
cljs.core.println.call(null,"delete-item-click!");

return gcclocal.comm.utils.post_json_with_success_check.call(null,"/moneydiagram/shippingplan/delete",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),item_id], null),(function (_){
return gcclocal.diagrams.suppliershippingsplan.success_notify_and_refresh.call(null,"\u041F\u043B\u0430\u043D \u0443\u0434\u0430\u043B\u0435\u043D");
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_38937){
var state_val_38938 = (state_38937[(1)]);
if((state_val_38938 === (1))){
var inst_38931 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38932 = ["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043F\u043B\u0430\u043D\u0430","error"];
var inst_38933 = cljs.core.PersistentHashMap.fromArrays(inst_38931,inst_38932);
var state_38937__$1 = state_38937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38937__$1,(2),gcclocal.diagrams.suppliershippingsplan.notify_ch,inst_38933);
} else {
if((state_val_38938 === (2))){
var inst_38935 = (state_38937[(2)]);
var state_38937__$1 = state_38937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38937__$1,inst_38935);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto__ = null;
var gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto____0 = (function (){
var statearr_38942 = [null,null,null,null,null,null,null];
(statearr_38942[(0)] = gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto__);

(statearr_38942[(1)] = (1));

return statearr_38942;
});
var gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto____1 = (function (state_38937){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38943){if((e38943 instanceof Object)){
var ex__35015__auto__ = e38943;
var statearr_38944_38946 = state_38937;
(statearr_38944_38946[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38947 = state_38937;
state_38937 = G__38947;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto__ = function(state_38937){
switch(arguments.length){
case 0:
return gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto____1.call(this,state_38937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto____0;
gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto____1;
return gcclocal$diagrams$suppliershippingsplan$delete_item_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_38945 = f__35124__auto__.call(null);
(statearr_38945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Ячейка с плановой оплатой
 */
gcclocal.diagrams.suppliershippingsplan.supplier_payment_cell_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (cell_info,is_selected_QMARK_){
var app = gcclocal.diagrams.suppliershippingsplan.get_app_by_id.call(null,new cljs.core.Keyword(null,"client_application_id","client_application_id",1152236098).cljs$core$IFn$_invoke$arity$1(cell_info));
return React.createElement("td",{"onClick": ((function (app){
return (function (){
return gcclocal.diagrams.suppliershippingsplan.select_cell.call(null,cell_info);
});})(app))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cell_info)?[cljs.core.str("hoverable "),cljs.core.str((cljs.core.truth_(is_selected_QMARK_)?"selected-cell":null))].join(''):null)], null))},sablono.interpreter.interpret.call(null,(cljs.core.truth_(is_selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.remove.blue.inverted.bordered.link.mini.icon","i.remove.blue.inverted.bordered.link.mini.icon",914696209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (app){
return (function (p1__38948_SHARP_){
gcclocal.views.common.show_approve_modal.call(null,[cljs.core.str("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438")].join(''),[cljs.core.str("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C?")].join(''),((function (app){
return (function (){
return gcclocal.diagrams.suppliershippingsplan.delete_item.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_info));
});})(app))
);

return p1__38948_SHARP_.stopPropagation();
});})(app))
,new cljs.core.Keyword(null,"title","title",636505583),"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"], null)], null):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(app)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app),": "], null):null)),(function (){var attrs38949 = gcclocal.comm.utils.money_str.call(null,new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(cell_info));
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs38949))?sablono.interpreter.attributes.call(null,attrs38949):null),((cljs.core.map_QMARK_.call(null,attrs38949))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38949)], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"supplier-payment-cell-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38950__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38950 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38951__i = 0, G__38951__a = new Array(arguments.length -  0);
while (G__38951__i < G__38951__a.length) {G__38951__a[G__38951__i] = arguments[G__38951__i + 0]; ++G__38951__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38951__a,0);
} 
return G__38950__delegate.call(this,args__33795__auto__);};
G__38950.cljs$lang$maxFixedArity = 0;
G__38950.cljs$lang$applyTo = (function (arglist__38952){
var args__33795__auto__ = cljs.core.seq(arglist__38952);
return G__38950__delegate(args__33795__auto__);
});
G__38950.cljs$core$IFn$_invoke$arity$variadic = G__38950__delegate;
return G__38950;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Первая ячейка с поставщиком
 */
gcclocal.diagrams.suppliershippingsplan.supplier_td_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (supplier,selected_supplier){
var selected_QMARK_ = cljs.core._EQ_.call(null,selected_supplier,supplier);
return React.createElement("td",{"onClick": ((function (selected_QMARK_){
return (function (){
return gcclocal.diagrams.suppliershippingsplan.select_supplier.call(null,supplier);
});})(selected_QMARK_))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((selected_QMARK_)?"selected-cell":null)], null))},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(supplier)),sablono.interpreter.interpret.call(null,((selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.add.blue.inverted.bordered.link.mini.icon.add-item-icon","i.add.blue.inverted.bordered.link.mini.icon.add-item-icon",-924941435),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"title","title",636505583),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443 \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_){
return (function (p1__38953_SHARP_){
gcclocal.diagrams.suppliershippingsplan.turn_add_item_popup_on.call(null,p1__38953_SHARP_);

return p1__38953_SHARP_.stopPropagation();
});})(selected_QMARK_))
], null)], null):null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"supplier-td-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38954__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38954 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38955__i = 0, G__38955__a = new Array(arguments.length -  0);
while (G__38955__i < G__38955__a.length) {G__38955__a[G__38955__i] = arguments[G__38955__i + 0]; ++G__38955__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38955__a,0);
} 
return G__38954__delegate.call(this,args__33795__auto__);};
G__38954.cljs$lang$maxFixedArity = 0;
G__38954.cljs$lang$applyTo = (function (arglist__38956){
var args__33795__auto__ = cljs.core.seq(arglist__38956);
return G__38954__delegate(args__33795__auto__);
});
G__38954.cljs$core$IFn$_invoke$arity$variadic = G__38954__delegate;
return G__38954;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Строка плановых оплат поставщику
 */
gcclocal.diagrams.suppliershippingsplan.supplier_payment_plan_tr_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (supplier,all_visible_dates,supplier_cinfos,selected_supplier){
cljs.core.println.call(null,"suppliers-cinfos: ",supplier_cinfos);

var attrs38958 = gcclocal.diagrams.suppliershippingsplan.supplier_td_view.call(null,supplier,selected_supplier);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38958))?sablono.interpreter.attributes.call(null,attrs38958):null),((cljs.core.map_QMARK_.call(null,attrs38958))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38958){
return (function (p1__38957_SHARP_){
var c_info = cljs.core.first.call(null,cljs.core.get.call(null,supplier_cinfos,p1__38957_SHARP_));
return gcclocal.diagrams.suppliershippingsplan.supplier_payment_cell_view.call(null,c_info,gcclocal.diagrams.suppliershippingsplan.cell_selected_QMARK_.call(null,c_info));
});})(attrs38958))
,all_visible_dates)),(function (){var attrs38959 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce_kv.call(null,((function (attrs38958){
return (function (s,k,v){
return (s + new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,v)));
});})(attrs38958))
,(0),supplier_cinfos));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38959))?sablono.interpreter.attributes.call(null,attrs38959):null),((cljs.core.map_QMARK_.call(null,attrs38959))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38959)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38958),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38958){
return (function (p1__38957_SHARP_){
var c_info = cljs.core.first.call(null,cljs.core.get.call(null,supplier_cinfos,p1__38957_SHARP_));
return gcclocal.diagrams.suppliershippingsplan.supplier_payment_cell_view.call(null,c_info,gcclocal.diagrams.suppliershippingsplan.cell_selected_QMARK_.call(null,c_info));
});})(attrs38958))
,all_visible_dates)),(function (){var attrs38960 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce_kv.call(null,((function (attrs38958){
return (function (s,k,v){
return (s + new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,v)));
});})(attrs38958))
,(0),supplier_cinfos));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38960))?sablono.interpreter.attributes.call(null,attrs38960):null),((cljs.core.map_QMARK_.call(null,attrs38960))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38960)], null)));
})()], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"supplier-payment-plan-tr-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38961__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38961 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38962__i = 0, G__38962__a = new Array(arguments.length -  0);
while (G__38962__i < G__38962__a.length) {G__38962__a[G__38962__i] = arguments[G__38962__i + 0]; ++G__38962__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38962__a,0);
} 
return G__38961__delegate.call(this,args__33795__auto__);};
G__38961.cljs$lang$maxFixedArity = 0;
G__38961.cljs$lang$applyTo = (function (arglist__38963){
var args__33795__auto__ = cljs.core.seq(arglist__38963);
return G__38961__delegate(args__33795__auto__);
});
G__38961.cljs$core$IFn$_invoke$arity$variadic = G__38961__delegate;
return G__38961;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.diagrams.suppliershippingsplan.on_mount_custom_popup = (function gcclocal$diagrams$suppliershippingsplan$on_mount_custom_popup(state){
$("#itemDateInput").pickmeup({"format": "d.m.Y", "default_date": false, "hide_on_select": true});

return $(".ui.search.dropdown").dropdown();
});
/**
 * Кастомное попап меню для добавления оплаты по поставщику
 */
gcclocal.diagrams.suppliershippingsplan.custom_popup_item_menu = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (selected_supplier,add_item_mode_QMARK_,client_apps){
return React.createElement("div",{"style": {"visibility": (cljs.core.truth_(add_item_mode_QMARK_)?"visible":"hidden")}, "className": "custom-add-menu custom-animation"},React.createElement("div",{"className": "custom-item-popup"},React.createElement("div",{"style": {"height": "12px"}},React.createElement("i",{"onClick": (function (){
return gcclocal.diagrams.suppliershippingsplan.turn_off_add_custom_item_mode.call(null);
}), "className": "remove icon link close-popup-icon"})),React.createElement("div",{"className": "ui small form"},React.createElement("div",{"className": "two fields"},React.createElement("div",{"className": "field"},React.createElement("label",null,"\u0414\u0430\u0442\u0430"),sablono.interpreter.create_element.call(null,"input",{"type": "text", "id": "itemDateInput"})),React.createElement("div",{"className": "field"},React.createElement("label",null,"\u0422\u043E\u043D\u043D\u0430\u0436"),sablono.interpreter.create_element.call(null,"input",{"type": "number", "step": "0.01", "id": "itemAmountInput"}))),React.createElement("div",{"className": "two fields"},React.createElement("div",{"className": "field"},React.createElement("label",null,"\u0417\u0430\u044F\u0432\u043A\u0430"),React.createElement("div",{"className": "ui fluid search selection dropdown"},sablono.interpreter.create_element.call(null,"input",{"type": "hidden", "id": "itemClientApp"}),React.createElement("i",{"className": "dropdown icon"}),React.createElement("div",{"className": "default text"},"\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),(function (){var attrs38978 = cljs.core.map.call(null,(function (p1__38964_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-value","data-value",-1897915206),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38964_SHARP_)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38964_SHARP_)], null);
}),client_apps);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38978))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs38978)):{"className": "menu"}),((cljs.core.map_QMARK_.call(null,attrs38978))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38978)], null)));
})())),React.createElement("div",{"className": "field"},React.createElement("label",null,"\u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"),sablono.interpreter.create_element.call(null,"input",{"type": "number", "readOnly": "readOnly", "id": "itemSummInput22"}))),React.createElement("div",{"title": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C", "onClick": (function (p1__38965_SHARP_){
return gcclocal.diagrams.suppliershippingsplan.add_item.call(null,p1__38965_SHARP_,selected_supplier);
}), "className": "ui mini button"},React.createElement("i",{"className": "add icon"}),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"),React.createElement("div",{"title": "\u041E\u0442\u043C\u0435\u043D\u0430", "onClick": (function (){
return gcclocal.diagrams.suppliershippingsplan.turn_off_add_custom_item_mode.call(null);
}), "className": "ui mini button"},React.createElement("i",{"className": "ban icon"}),"\u041E\u0442\u043C\u0435\u043D\u0430"))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),gcclocal.diagrams.suppliershippingsplan.on_mount_custom_popup], null)], null)),"custom-popup-item-menu");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38983__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38983 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38984__i = 0, G__38984__a = new Array(arguments.length -  0);
while (G__38984__i < G__38984__a.length) {G__38984__a[G__38984__i] = arguments[G__38984__i + 0]; ++G__38984__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38984__a,0);
} 
return G__38983__delegate.call(this,args__33795__auto__);};
G__38983.cljs$lang$maxFixedArity = 0;
G__38983.cljs$lang$applyTo = (function (arglist__38985){
var args__33795__auto__ = cljs.core.seq(arglist__38985);
return G__38983__delegate(args__33795__auto__);
});
G__38983.cljs$core$IFn$_invoke$arity$variadic = G__38983__delegate;
return G__38983;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Основная вьюшка
 */
gcclocal.diagrams.suppliershippingsplan.main_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var is_loading_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
var all_suppliers = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-suppliers","all-suppliers",-1819310136)], null)));
var all_client_apps = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-client-apps","all-client-apps",-1206675027)], null)));
var all_visible_d = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-visible-dates","all-visible-dates",-1302813937)], null)));
var selected_supplier = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-supplier","selected-supplier",-2059508492)], null)));
var suppliers_cinfos = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suppliers-cinfos","suppliers-cinfos",829736561)], null)));
var total_cell_summs = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-cell-summs","total-cell-summs",628554628)], null)));
var selected_cell = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)));
var add_item_mode_QMARK_ = rum.core.react.call(null,gcclocal.diagrams.suppliershippingsplan.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"add-item-mode?","add-item-mode?",-1732573252)], null)));
return React.createElement("div",null,React.createElement("div",{"style": {"visibility": (cljs.core.truth_(is_loading_QMARK_)?"visible":"hidden")}, "className": "ui active centered inline loader"}),React.createElement("div",{"style": {"marginTop": "3em"}, "className": "outer"},React.createElement("div",{"className": "inner"},React.createElement("table",{"className": "ui compact celled very basic table diagram-clients-table fixed-first-column-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_){
return (function (p1__38986_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),gcclocal.comm.utils.to_print_date.call(null,p1__38986_SHARP_)], null);
});})(is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_))
,all_visible_d)),React.createElement("th",{"style": {"textAlign": "center", "minWidth": "80px"}},"\u0418\u0442\u043E\u0433\u043E"))),(function (){var attrs38989 = cljs.core.map.call(null,((function (is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_){
return (function (p1__38987_SHARP_){
return gcclocal.diagrams.suppliershippingsplan.supplier_payment_plan_tr_view.call(null,p1__38987_SHARP_,all_visible_d,cljs.core.get.call(null,suppliers_cinfos,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38987_SHARP_)),selected_supplier);
});})(is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_))
,all_suppliers);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs38989))?sablono.interpreter.attributes.call(null,attrs38989):null),((cljs.core.map_QMARK_.call(null,attrs38989))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u0418\u0442\u043E\u0433\u043E"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_){
return (function (p1__38988_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,total_cell_summs,p1__38988_SHARP_))], null);
});})(attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs38996 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce_kv.call(null,((function (attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_))
,(0),total_cell_summs));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38996))?sablono.interpreter.attributes.call(null,attrs38996):null),((cljs.core.map_QMARK_.call(null,attrs38996))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38996)], null)));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38989),React.createElement("tr",{"className": "total-row"},React.createElement("td",null,"\u0418\u0442\u043E\u0433\u043E"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_){
return (function (p1__38988_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),gcclocal.comm.utils.money_str.call(null,cljs.core.get.call(null,total_cell_summs,p1__38988_SHARP_))], null);
});})(attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_))
,all_visible_d)),(function (){var attrs38999 = gcclocal.comm.utils.money_str.call(null,cljs.core.reduce_kv.call(null,((function (attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_){
return (function (s,k,v){
return (s + v);
});})(attrs38989,is_loading_QMARK_,all_suppliers,all_client_apps,all_visible_d,selected_supplier,suppliers_cinfos,total_cell_summs,selected_cell,add_item_mode_QMARK_))
,(0),total_cell_summs));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38999))?sablono.interpreter.attributes.call(null,attrs38999):null),((cljs.core.map_QMARK_.call(null,attrs38999))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38999)], null)));
})())], null)));
})()))),sablono.interpreter.interpret.call(null,gcclocal.diagrams.suppliershippingsplan.custom_popup_item_menu.call(null,selected_supplier,add_item_mode_QMARK_,all_client_apps)),sablono.interpreter.interpret.call(null,gcclocal.views.common.basic_approve_modal_view.call(null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"main-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39000__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39000 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39001__i = 0, G__39001__a = new Array(arguments.length -  0);
while (G__39001__i < G__39001__a.length) {G__39001__a[G__39001__i] = arguments[G__39001__i + 0]; ++G__39001__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39001__a,0);
} 
return G__39000__delegate.call(this,args__33795__auto__);};
G__39000.cljs$lang$maxFixedArity = 0;
G__39000.cljs$lang$applyTo = (function (arglist__39002){
var args__33795__auto__ = cljs.core.seq(arglist__39002);
return G__39000__delegate(args__33795__auto__);
});
G__39000.cljs$core$IFn$_invoke$arity$variadic = G__39000__delegate;
return G__39000;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.diagrams.suppliershippingsplan.init = (function gcclocal$diagrams$suppliershippingsplan$init(){
cljs.core.println.call(null,"supplierpaymentsplan");

gcclocal.diagrams.suppliershippingsplan.init_channels.call(null);

gcclocal.diagrams.suppliershippingsplan.refresh_ajax_data.call(null);

return rum.core.mount.call(null,gcclocal.diagrams.suppliershippingsplan.main_view.call(null),document.getElementById("maintable"));
});
goog.exportSymbol('gcclocal.diagrams.suppliershippingsplan.init', gcclocal.diagrams.suppliershippingsplan.init);
gcclocal.diagrams.suppliershippingsplan.printatom = (function gcclocal$diagrams$suppliershippingsplan$printatom(){
return cljs.core.println.call(null,cljs.core.deref.call(null,gcclocal.diagrams.suppliershippingsplan.app_state));
});
goog.exportSymbol('gcclocal.diagrams.suppliershippingsplan.printatom', gcclocal.diagrams.suppliershippingsplan.printatom);

//# sourceMappingURL=suppliershippingsplan.js.map