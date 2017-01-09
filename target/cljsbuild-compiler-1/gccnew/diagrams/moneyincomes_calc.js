// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.diagrams.moneyincomes_calc');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
/**
 * Общая сумма с дат-денег (предпол. что в одной валюте)
 */
gcclocal.diagrams.moneyincomes_calc.total_summ_from_datemoneys = (function gcclocal$diagrams$moneyincomes_calc$total_summ_from_datemoneys(dms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,dm){
return (s + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c_DASH_money,cljs.core.cst$kw$summ], null)));
}),(0),dms);
});
/**
 * Общая сумма с перемещений
 */
gcclocal.diagrams.moneyincomes_calc.summ_from_movements = (function gcclocal$diagrams$moneyincomes_calc$summ_from_movements(ms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,m){
return (s + cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(m));
}),(0),ms);
});
/**
 * Получить общую сумму с данных ячейки
 *   cell-data - содержит [datemoneys], [from-movements], [to-movements]
 */
gcclocal.diagrams.moneyincomes_calc.total_summ_cd = (function gcclocal$diagrams$moneyincomes_calc$total_summ_cd(cell_data){
var noe_QMARK_ = gcclocal.comm.utils.nil_or_empty_QMARK_;
var dms = cljs.core.cst$kw$datemoneys.cljs$core$IFn$_invoke$arity$1(cell_data);
var from_m = cljs.core.cst$kw$from_DASH_movements.cljs$core$IFn$_invoke$arity$1(cell_data);
var to_m = cljs.core.cst$kw$to_DASH_movements.cljs$core$IFn$_invoke$arity$1(cell_data);
var G__52432 = (0);
var G__52432__$1 = ((cljs.core.not((noe_QMARK_.cljs$core$IFn$_invoke$arity$1 ? noe_QMARK_.cljs$core$IFn$_invoke$arity$1(dms) : noe_QMARK_.call(null,dms))))?(G__52432 + gcclocal.diagrams.moneyincomes_calc.total_summ_from_datemoneys(dms)):G__52432);
var G__52432__$2 = ((cljs.core.not((noe_QMARK_.cljs$core$IFn$_invoke$arity$1 ? noe_QMARK_.cljs$core$IFn$_invoke$arity$1(from_m) : noe_QMARK_.call(null,from_m))))?(G__52432__$1 - gcclocal.diagrams.moneyincomes_calc.summ_from_movements(from_m)):G__52432__$1);
if(cljs.core.not((noe_QMARK_.cljs$core$IFn$_invoke$arity$1 ? noe_QMARK_.cljs$core$IFn$_invoke$arity$1(to_m) : noe_QMARK_.call(null,to_m)))){
return (G__52432__$2 + gcclocal.diagrams.moneyincomes_calc.summ_from_movements(to_m));
} else {
return G__52432__$2;
}
});
/**
 * Получить хм cell info для ячейки
 */
gcclocal.diagrams.moneyincomes_calc.new_cell_info = (function gcclocal$diagrams$moneyincomes_calc$new_cell_info(col_id,row_id,expired_QMARK_,datemoneys,from_movements,to_movements){
var misc_data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_inner_DASH_datesumms,true], null);
var cd = ((function (misc_data){
return (function (p1__52433_SHARP_){
return gcclocal.comm.utils.when_or_skip(p1__52433_SHARP_,(gcclocal.diagrams.moneyincomes_calc.total_summ_cd(p1__52433_SHARP_) < (0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52433_SHARP_,cljs.core.cst$kw$error_DASH_cell_QMARK_,true));
});})(misc_data))
.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$datemoneys,datemoneys,cljs.core.cst$kw$from_DASH_movements,from_movements,cljs.core.cst$kw$to_DASH_movements,to_movements,cljs.core.cst$kw$expired_QMARK_,expired_QMARK_], null));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$col_DASH_id,col_id,cljs.core.cst$kw$row_DASH_id,row_id,cljs.core.cst$kw$misc_DASH_data,misc_data,cljs.core.cst$kw$cell_DASH_data,cd], null);
});
/**
 * Получить данные по одной ячейке (за опред.дату и клиента)
 */
gcclocal.diagrams.moneyincomes_calc.cell_info_for_date_and_client = (function gcclocal$diagrams$moneyincomes_calc$cell_info_for_date_and_client(d,client_id,all_payments,all_movements){
var client_payments = cljs.core.cst$kw$payments.cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__52434_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__52434_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client,cljs.core.cst$kw$id], null)),client_id)){
return p1__52434_SHARP_;
} else {
return null;
}
}),all_payments));
var datemoneys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (client_payments){
return (function (p1__52435_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p1__52435_SHARP_),d);
});})(client_payments))
,client_payments);
var from_movements = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (client_payments,datemoneys){
return (function (p1__52436_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from_date.cljs$core$IFn$_invoke$arity$1(p1__52436_SHARP_),d)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$client_id.cljs$core$IFn$_invoke$arity$1(p1__52436_SHARP_),client_id));
});})(client_payments,datemoneys))
,all_movements);
var to_movements = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (client_payments,datemoneys,from_movements){
return (function (p1__52437_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to_date.cljs$core$IFn$_invoke$arity$1(p1__52437_SHARP_),d)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$client_id.cljs$core$IFn$_invoke$arity$1(p1__52437_SHARP_),client_id));
});})(client_payments,datemoneys,from_movements))
,all_movements);
return gcclocal.diagrams.moneyincomes_calc.new_cell_info(d,client_id,false,datemoneys,from_movements,to_movements);
});
/**
 * Получить данные для ячейки 'просрочка' по клиенту
 */
gcclocal.diagrams.moneyincomes_calc.cell_info_for_expired = (function gcclocal$diagrams$moneyincomes_calc$cell_info_for_expired(client_id,expired_dates,all_payments,all_movements,date_to_check){
var client_payments = cljs.core.cst$kw$payments.cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__52438_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__52438_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client,cljs.core.cst$kw$id], null)),client_id)){
return p1__52438_SHARP_;
} else {
return null;
}
}),all_payments));
var expired_datemoneys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (client_payments){
return (function (p1__52439_SHARP_){
return gcclocal.comm.utils.in_QMARK_(expired_dates,cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p1__52439_SHARP_));
});})(client_payments))
,client_payments);
var from_movements = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (client_payments,expired_datemoneys){
return (function (p1__52440_SHARP_){
var and__30375__auto__ = (function (){var or__30387__auto__ = (function (){var G__52455 = gcclocal.comm.utils.iso_str__GT_moment(cljs.core.cst$kw$from_date.cljs$core$IFn$_invoke$arity$1(p1__52440_SHARP_));
var G__52456 = date_to_check;
return (gcclocal.comm.utils.moment_before_QMARK_.cljs$core$IFn$_invoke$arity$2 ? gcclocal.comm.utils.moment_before_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52455,G__52456) : gcclocal.comm.utils.moment_before_QMARK_.call(null,G__52455,G__52456));
})();
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return (cljs.core.cst$kw$from_date.cljs$core$IFn$_invoke$arity$1(p1__52440_SHARP_) == null);
}
})();
if(cljs.core.truth_(and__30375__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$client_id.cljs$core$IFn$_invoke$arity$1(p1__52440_SHARP_),client_id);
} else {
return and__30375__auto__;
}
});})(client_payments,expired_datemoneys))
,all_movements);
var to_movements = null;
return gcclocal.diagrams.moneyincomes_calc.new_cell_info("expired",client_id,true,expired_datemoneys,from_movements,to_movements);
});
/**
 * Получаем полные сведения для ячеек (по всем клиентам)
 *   (данные по суммам, координаты, перемещения)
 */
gcclocal.diagrams.moneyincomes_calc.clients_cell_infos = (function gcclocal$diagrams$moneyincomes_calc$clients_cell_infos(all_clients,all_visible_dates,all_payments,all_movements){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ci_hm,client){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ci_hm,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(client),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,d){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,d,gcclocal.diagrams.moneyincomes_calc.cell_info_for_date_and_client(d,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(client),all_payments,all_movements));
}),cljs.core.PersistentArrayMap.EMPTY,all_visible_dates));
}),cljs.core.PersistentArrayMap.EMPTY,all_clients);
});
/**
 * Получить просрочки по клиентам
 */
gcclocal.diagrams.moneyincomes_calc.clients_expired_cell_infos = (function gcclocal$diagrams$moneyincomes_calc$clients_expired_cell_infos(all_clients,expired_dates,all_payments,all_movements,date_to_check){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ci_hm,client){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ci_hm,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(client),gcclocal.diagrams.moneyincomes_calc.cell_info_for_expired(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(client),expired_dates,all_payments,all_movements,date_to_check));
}),cljs.core.PersistentArrayMap.EMPTY,all_clients);
});
/**
 * Получить уникальные даты со всех источников
 */
gcclocal.diagrams.moneyincomes_calc.all_unique_dates = (function gcclocal$diagrams$moneyincomes_calc$all_unique_dates(clientpayments,movements,incomeitems,expenseitems){
var client_dates = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52457_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$date,cljs.core.cst$kw$payments.cljs$core$IFn$_invoke$arity$1(p1__52457_SHARP_));
}),cljs.core.array_seq([clientpayments], 0));
var movement_dates = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (client_dates){
return (function (p1__52458_SHARP_){
var G__52460 = cljs.core.PersistentVector.EMPTY;
var G__52460__$1 = (cljs.core.truth_(cljs.core.cst$kw$from_date.cljs$core$IFn$_invoke$arity$1(p1__52458_SHARP_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52460,cljs.core.cst$kw$from_date.cljs$core$IFn$_invoke$arity$1(p1__52458_SHARP_)):G__52460);
if(cljs.core.truth_(cljs.core.cst$kw$to_date.cljs$core$IFn$_invoke$arity$1(p1__52458_SHARP_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52460__$1,cljs.core.cst$kw$to_date.cljs$core$IFn$_invoke$arity$1(p1__52458_SHARP_));
} else {
return G__52460__$1;
}
});})(client_dates))
,cljs.core.array_seq([movements], 0));
var iitems_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_date,incomeitems);
var eitems_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item_date,expenseitems);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(client_dates,movement_dates,cljs.core.array_seq([iitems_dates,eitems_dates], 0)));
});
/**
 * Даты видимые (не просроченные)
 */
gcclocal.diagrams.moneyincomes_calc.all_visible_dates = (function gcclocal$diagrams$moneyincomes_calc$all_visible_dates(all_dates,date_to_check){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,gcclocal.comm.utils.sort_dates(false,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52461_SHARP_){
var or__30387__auto__ = (function (){var G__52470 = gcclocal.comm.utils.iso_str__GT_moment(p1__52461_SHARP_);
var G__52471 = date_to_check;
return (gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2 ? gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52470,G__52471) : gcclocal.comm.utils.moment_after_QMARK_.call(null,G__52470,G__52471));
})();
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
var G__52472 = gcclocal.comm.utils.iso_str__GT_moment(p1__52461_SHARP_);
var G__52473 = date_to_check;
return (gcclocal.comm.utils.moment_same_QMARK_.cljs$core$IFn$_invoke$arity$2 ? gcclocal.comm.utils.moment_same_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52472,G__52473) : gcclocal.comm.utils.moment_same_QMARK_.call(null,G__52472,G__52473));
}
}),all_dates))));
});
/**
 * Просроченные даты
 */
gcclocal.diagrams.moneyincomes_calc.all_expired_dates = (function gcclocal$diagrams$moneyincomes_calc$all_expired_dates(all_dates,date_to_check){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52474_SHARP_){
var G__52477 = gcclocal.comm.utils.iso_str__GT_moment(p1__52474_SHARP_);
var G__52478 = date_to_check;
return (gcclocal.comm.utils.moment_before_QMARK_.cljs$core$IFn$_invoke$arity$2 ? gcclocal.comm.utils.moment_before_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52477,G__52478) : gcclocal.comm.utils.moment_before_QMARK_.call(null,G__52477,G__52478));
}),all_dates);
});
/**
 * Получить за определенную дату итого по записям (расхода или дохода)
 */
gcclocal.diagrams.moneyincomes_calc.total_for_date_in_items = (function gcclocal$diagrams$moneyincomes_calc$total_for_date_in_items(items,d){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (summ,item){
return (summ + cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(item));
}),(0),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52479_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,cljs.core.cst$kw$item_date.cljs$core$IFn$_invoke$arity$1(p1__52479_SHARP_));
}),items));
});
/**
 * Получить значения для строки итого (по датам)
 *   для поступлений денег
 */
gcclocal.diagrams.moneyincomes_calc.total_income_cell_summs = (function gcclocal$diagrams$moneyincomes_calc$total_income_cell_summs(all_visible_dates,cl_cell_infos,income_cat_items){
var total_i = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (totals_m,d){
var cc_sum = cljs.core.reduce_kv((function (summ,client_key,datesmap){
return (summ + gcclocal.diagrams.moneyincomes_calc.total_summ_cd(cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(datesmap,d))));
}),(0),cl_cell_infos);
var ic_summ = gcclocal.diagrams.moneyincomes_calc.total_for_date_in_items(income_cat_items,d);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(totals_m,d,(cc_sum + ic_summ));
}),cljs.core.PersistentArrayMap.EMPTY,all_visible_dates);
return total_i;
});
/**
 * Получить итоговую сумму по просрочкам (для поступлений)
 */
gcclocal.diagrams.moneyincomes_calc.total_income_expired_summ = (function gcclocal$diagrams$moneyincomes_calc$total_income_expired_summ(cl_expired_cinfos_map){
return cljs.core.reduce_kv((function (s,k,v){
return (s + gcclocal.diagrams.moneyincomes_calc.total_summ_cd(cljs.core.cst$kw$cell_DASH_data.cljs$core$IFn$_invoke$arity$1(v)));
}),(0),cl_expired_cinfos_map);
});
/**
 * Получить значения для строки итого (по датам)
 *   по расходам
 */
gcclocal.diagrams.moneyincomes_calc.total_expense_cell_summs = (function gcclocal$diagrams$moneyincomes_calc$total_expense_cell_summs(all_visible_dates,expense_cat_items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (totals_m,d){
var ec_summ = gcclocal.diagrams.moneyincomes_calc.total_for_date_in_items(expense_cat_items,d);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(totals_m,d,ec_summ);
}),cljs.core.PersistentArrayMap.EMPTY,all_visible_dates);
});
/**
 * Получить остатки на конец по датам
 */
gcclocal.diagrams.moneyincomes_calc.init_balance_on_end = (function gcclocal$diagrams$moneyincomes_calc$init_balance_on_end(init_balance,all_visible_dates,total_income_summs,total_expense_summs){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52484,d){
var vec__52485 = p__52484;
var balance_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52485,(0),null);
var acc_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52485,(1),null);
var summ = ((acc_s + (function (){var or__30387__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_income_summs,d);
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return (0);
}
})()) - (function (){var or__30387__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_expense_summs,d);
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return (0);
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(balance_m,d,summ),summ], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,init_balance], null),all_visible_dates));
});
/**
 * Получить остатки на начало
 */
gcclocal.diagrams.moneyincomes_calc.init_balance_on_start = (function gcclocal$diagrams$moneyincomes_calc$init_balance_on_start(init_balance,all_visible_dates,init_bs_on_end){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (p1__52488_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (balance_m,p__52493){
var vec__52494 = p__52493;
var d1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52494,(0),null);
var d2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52494,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(balance_m,d2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_bs_on_end,d1));
}),p1__52488_SHARP_,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),all_visible_dates));
}).call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(all_visible_dates),init_balance);
});
/**
 * Получить итого остатки
 */
gcclocal.diagrams.moneyincomes_calc.total_init_balance = (function gcclocal$diagrams$moneyincomes_calc$total_init_balance(init_bs_on_end,all_visible_dates){
var or__30387__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_bs_on_end,cljs.core.last(all_visible_dates));
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return (0);
}
});
/**
 * Посчитать все данные и вернуть в виде хм
 */
gcclocal.diagrams.moneyincomes_calc.calc_data = (function gcclocal$diagrams$moneyincomes_calc$calc_data(date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date){
var all_dates = gcclocal.diagrams.moneyincomes_calc.all_unique_dates(client_payments,all_movements,income_items,expense_items);
var all_visible_d = gcclocal.diagrams.moneyincomes_calc.all_visible_dates(all_dates,date_to_check);
var clients_cinfos = gcclocal.diagrams.moneyincomes_calc.clients_cell_infos(all_clients,all_visible_d,client_payments,all_movements);
var all_expired_d = gcclocal.diagrams.moneyincomes_calc.all_expired_dates(all_dates,date_to_check);
var client_expired_cinfos = gcclocal.diagrams.moneyincomes_calc.clients_expired_cell_infos(all_clients,all_expired_d,client_payments,all_movements,date_to_check);
var total_i_cell_summs = gcclocal.diagrams.moneyincomes_calc.total_income_cell_summs(all_visible_d,clients_cinfos,income_items);
var total_i_expired_summ = gcclocal.diagrams.moneyincomes_calc.total_income_expired_summ(client_expired_cinfos);
var total_e_cell_summs = gcclocal.diagrams.moneyincomes_calc.total_expense_cell_summs(all_visible_d,expense_items);
var init_bs_on_end = gcclocal.diagrams.moneyincomes_calc.init_balance_on_end(init_balance_on_date,all_visible_d,total_i_cell_summs,total_e_cell_summs);
var init_bs_on_start = gcclocal.diagrams.moneyincomes_calc.init_balance_on_start(init_balance_on_date,all_visible_d,init_bs_on_end);
var total_init_bs = gcclocal.diagrams.moneyincomes_calc.total_init_balance(init_bs_on_end,all_visible_d);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$init_DASH_balances_DASH_on_DASH_start,cljs.core.cst$kw$total_DASH_i_DASH_expired_DASH_summ,cljs.core.cst$kw$init_DASH_balances_DASH_on_DASH_end,cljs.core.cst$kw$total_DASH_init_DASH_balances,cljs.core.cst$kw$clients_DASH_cinfos,cljs.core.cst$kw$clients_DASH_expired_DASH_cinfos,cljs.core.cst$kw$all_DASH_visible_DASH_dates,cljs.core.cst$kw$total_DASH_e_DASH_cell_DASH_summs,cljs.core.cst$kw$total_DASH_i_DASH_cell_DASH_summs],[init_bs_on_start,total_i_expired_summ,init_bs_on_end,total_init_bs,clients_cinfos,client_expired_cinfos,all_visible_d,total_e_cell_summs,total_i_cell_summs]);
});
