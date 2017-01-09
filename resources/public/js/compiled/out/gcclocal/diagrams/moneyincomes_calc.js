// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.diagrams.moneyincomes_calc');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
/**
 * Общая сумма с дат-денег (предпол. что в одной валюте)
 */
gcclocal.diagrams.moneyincomes_calc.total_summ_from_datemoneys = (function gcclocal$diagrams$moneyincomes_calc$total_summ_from_datemoneys(dms){
return cljs.core.reduce.call(null,(function (s,dm){
return (s + cljs.core.get_in.call(null,dm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-money","c-money",-1182799478),new cljs.core.Keyword(null,"summ","summ",-1220398077)], null)));
}),(0),dms);
});
/**
 * Общая сумма с перемещений
 */
gcclocal.diagrams.moneyincomes_calc.summ_from_movements = (function gcclocal$diagrams$moneyincomes_calc$summ_from_movements(ms){
return cljs.core.reduce.call(null,(function (s,m){
return (s + new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(m));
}),(0),ms);
});
/**
 * Получить общую сумму с данных ячейки
 *   cell-data - содержит [datemoneys], [from-movements], [to-movements]
 */
gcclocal.diagrams.moneyincomes_calc.total_summ_cd = (function gcclocal$diagrams$moneyincomes_calc$total_summ_cd(cell_data){
var noe_QMARK_ = gcclocal.comm.utils.nil_or_empty_QMARK_;
var dms = new cljs.core.Keyword(null,"datemoneys","datemoneys",660988127).cljs$core$IFn$_invoke$arity$1(cell_data);
var from_m = new cljs.core.Keyword(null,"from-movements","from-movements",-1109731299).cljs$core$IFn$_invoke$arity$1(cell_data);
var to_m = new cljs.core.Keyword(null,"to-movements","to-movements",1964048690).cljs$core$IFn$_invoke$arity$1(cell_data);
var G__43526 = (0);
var G__43526__$1 = ((cljs.core.not.call(null,noe_QMARK_.call(null,dms)))?(G__43526 + gcclocal.diagrams.moneyincomes_calc.total_summ_from_datemoneys.call(null,dms)):G__43526);
var G__43526__$2 = ((cljs.core.not.call(null,noe_QMARK_.call(null,from_m)))?(G__43526__$1 - gcclocal.diagrams.moneyincomes_calc.summ_from_movements.call(null,from_m)):G__43526__$1);
if(cljs.core.not.call(null,noe_QMARK_.call(null,to_m))){
return (G__43526__$2 + gcclocal.diagrams.moneyincomes_calc.summ_from_movements.call(null,to_m));
} else {
return G__43526__$2;
}
});
/**
 * Получить хм cell info для ячейки
 */
gcclocal.diagrams.moneyincomes_calc.new_cell_info = (function gcclocal$diagrams$moneyincomes_calc$new_cell_info(col_id,row_id,expired_QMARK_,datemoneys,from_movements,to_movements){
var misc_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-inner-datesumms","show-inner-datesumms",1152971160),true], null);
var cd = ((function (misc_data){
return (function (p1__43527_SHARP_){
return gcclocal.comm.utils.when_or_skip.call(null,p1__43527_SHARP_,(gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,p1__43527_SHARP_) < (0)),cljs.core.assoc.call(null,p1__43527_SHARP_,new cljs.core.Keyword(null,"error-cell?","error-cell?",-145257434),true));
});})(misc_data))
.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"datemoneys","datemoneys",660988127),datemoneys,new cljs.core.Keyword(null,"from-movements","from-movements",-1109731299),from_movements,new cljs.core.Keyword(null,"to-movements","to-movements",1964048690),to_movements,new cljs.core.Keyword(null,"expired?","expired?",-946987831),expired_QMARK_], null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"col-id","col-id",-929478657),col_id,new cljs.core.Keyword(null,"row-id","row-id",246619473),row_id,new cljs.core.Keyword(null,"misc-data","misc-data",-311447732),misc_data,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),cd], null);
});
/**
 * Получить данные по одной ячейке (за опред.дату и клиента)
 */
gcclocal.diagrams.moneyincomes_calc.cell_info_for_date_and_client = (function gcclocal$diagrams$moneyincomes_calc$cell_info_for_date_and_client(d,client_id,all_payments,all_movements){
var client_payments = new cljs.core.Keyword(null,"payments","payments",-1324138047).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,(function (p1__43528_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,p1__43528_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),client_id)){
return p1__43528_SHARP_;
} else {
return null;
}
}),all_payments));
var datemoneys = cljs.core.filter.call(null,((function (client_payments){
return (function (p1__43529_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__43529_SHARP_),d);
});})(client_payments))
,client_payments);
var from_movements = cljs.core.filter.call(null,((function (client_payments,datemoneys){
return (function (p1__43530_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"from_date","from_date",85319821).cljs$core$IFn$_invoke$arity$1(p1__43530_SHARP_),d)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client_id","client_id",48809273).cljs$core$IFn$_invoke$arity$1(p1__43530_SHARP_),client_id));
});})(client_payments,datemoneys))
,all_movements);
var to_movements = cljs.core.filter.call(null,((function (client_payments,datemoneys,from_movements){
return (function (p1__43531_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"to_date","to_date",1818906197).cljs$core$IFn$_invoke$arity$1(p1__43531_SHARP_),d)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client_id","client_id",48809273).cljs$core$IFn$_invoke$arity$1(p1__43531_SHARP_),client_id));
});})(client_payments,datemoneys,from_movements))
,all_movements);
return gcclocal.diagrams.moneyincomes_calc.new_cell_info.call(null,d,client_id,false,datemoneys,from_movements,to_movements);
});
/**
 * Получить данные для ячейки 'просрочка' по клиенту
 */
gcclocal.diagrams.moneyincomes_calc.cell_info_for_expired = (function gcclocal$diagrams$moneyincomes_calc$cell_info_for_expired(client_id,expired_dates,all_payments,all_movements,date_to_check){
var client_payments = new cljs.core.Keyword(null,"payments","payments",-1324138047).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,(function (p1__43532_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,p1__43532_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),client_id)){
return p1__43532_SHARP_;
} else {
return null;
}
}),all_payments));
var expired_datemoneys = cljs.core.filter.call(null,((function (client_payments){
return (function (p1__43533_SHARP_){
return gcclocal.comm.utils.in_QMARK_.call(null,expired_dates,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__43533_SHARP_));
});})(client_payments))
,client_payments);
var from_movements = cljs.core.filter.call(null,((function (client_payments,expired_datemoneys){
return (function (p1__43534_SHARP_){
var and__30565__auto__ = (function (){var or__30577__auto__ = gcclocal.comm.utils.moment_before_QMARK_.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,new cljs.core.Keyword(null,"from_date","from_date",85319821).cljs$core$IFn$_invoke$arity$1(p1__43534_SHARP_)),date_to_check);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return (new cljs.core.Keyword(null,"from_date","from_date",85319821).cljs$core$IFn$_invoke$arity$1(p1__43534_SHARP_) == null);
}
})();
if(cljs.core.truth_(and__30565__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client_id","client_id",48809273).cljs$core$IFn$_invoke$arity$1(p1__43534_SHARP_),client_id);
} else {
return and__30565__auto__;
}
});})(client_payments,expired_datemoneys))
,all_movements);
var to_movements = null;
return gcclocal.diagrams.moneyincomes_calc.new_cell_info.call(null,"expired",client_id,true,expired_datemoneys,from_movements,to_movements);
});
/**
 * Получаем полные сведения для ячеек (по всем клиентам)
 *   (данные по суммам, координаты, перемещения)
 */
gcclocal.diagrams.moneyincomes_calc.clients_cell_infos = (function gcclocal$diagrams$moneyincomes_calc$clients_cell_infos(all_clients,all_visible_dates,all_payments,all_movements){
return cljs.core.reduce.call(null,(function (ci_hm,client){
return cljs.core.assoc.call(null,ci_hm,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(client),cljs.core.reduce.call(null,(function (m,d){
return cljs.core.assoc.call(null,m,d,gcclocal.diagrams.moneyincomes_calc.cell_info_for_date_and_client.call(null,d,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(client),all_payments,all_movements));
}),cljs.core.PersistentArrayMap.EMPTY,all_visible_dates));
}),cljs.core.PersistentArrayMap.EMPTY,all_clients);
});
/**
 * Получить просрочки по клиентам
 */
gcclocal.diagrams.moneyincomes_calc.clients_expired_cell_infos = (function gcclocal$diagrams$moneyincomes_calc$clients_expired_cell_infos(all_clients,expired_dates,all_payments,all_movements,date_to_check){
return cljs.core.reduce.call(null,(function (ci_hm,client){
return cljs.core.assoc.call(null,ci_hm,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(client),gcclocal.diagrams.moneyincomes_calc.cell_info_for_expired.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(client),expired_dates,all_payments,all_movements,date_to_check));
}),cljs.core.PersistentArrayMap.EMPTY,all_clients);
});
/**
 * Получить уникальные даты со всех источников
 */
gcclocal.diagrams.moneyincomes_calc.all_unique_dates = (function gcclocal$diagrams$moneyincomes_calc$all_unique_dates(clientpayments,movements,incomeitems,expenseitems){
var client_dates = cljs.core.mapcat.call(null,(function (p1__43535_SHARP_){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"payments","payments",-1324138047).cljs$core$IFn$_invoke$arity$1(p1__43535_SHARP_));
}),clientpayments);
var movement_dates = cljs.core.mapcat.call(null,((function (client_dates){
return (function (p1__43536_SHARP_){
var G__43538 = cljs.core.PersistentVector.EMPTY;
var G__43538__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"from_date","from_date",85319821).cljs$core$IFn$_invoke$arity$1(p1__43536_SHARP_))?cljs.core.conj.call(null,G__43538,new cljs.core.Keyword(null,"from_date","from_date",85319821).cljs$core$IFn$_invoke$arity$1(p1__43536_SHARP_)):G__43538);
if(cljs.core.truth_(new cljs.core.Keyword(null,"to_date","to_date",1818906197).cljs$core$IFn$_invoke$arity$1(p1__43536_SHARP_))){
return cljs.core.conj.call(null,G__43538__$1,new cljs.core.Keyword(null,"to_date","to_date",1818906197).cljs$core$IFn$_invoke$arity$1(p1__43536_SHARP_));
} else {
return G__43538__$1;
}
});})(client_dates))
,movements);
var iitems_dates = cljs.core.map.call(null,new cljs.core.Keyword(null,"item_date","item_date",1321645722),incomeitems);
var eitems_dates = cljs.core.map.call(null,new cljs.core.Keyword(null,"item_date","item_date",1321645722),expenseitems);
return cljs.core.distinct.call(null,cljs.core.concat.call(null,client_dates,movement_dates,iitems_dates,eitems_dates));
});
/**
 * Даты видимые (не просроченные)
 */
gcclocal.diagrams.moneyincomes_calc.all_visible_dates = (function gcclocal$diagrams$moneyincomes_calc$all_visible_dates(all_dates,date_to_check){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,gcclocal.comm.utils.sort_dates.call(null,false,cljs.core.distinct.call(null,cljs.core.filter.call(null,(function (p1__43539_SHARP_){
var or__30577__auto__ = gcclocal.comm.utils.moment_after_QMARK_.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,p1__43539_SHARP_),date_to_check);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return gcclocal.comm.utils.moment_same_QMARK_.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,p1__43539_SHARP_),date_to_check);
}
}),all_dates))));
});
/**
 * Просроченные даты
 */
gcclocal.diagrams.moneyincomes_calc.all_expired_dates = (function gcclocal$diagrams$moneyincomes_calc$all_expired_dates(all_dates,date_to_check){
return cljs.core.filter.call(null,(function (p1__43540_SHARP_){
return gcclocal.comm.utils.moment_before_QMARK_.call(null,gcclocal.comm.utils.iso_str__GT_moment.call(null,p1__43540_SHARP_),date_to_check);
}),all_dates);
});
/**
 * Получить за определенную дату итого по записям (расхода или дохода)
 */
gcclocal.diagrams.moneyincomes_calc.total_for_date_in_items = (function gcclocal$diagrams$moneyincomes_calc$total_for_date_in_items(items,d){
return cljs.core.reduce.call(null,(function (summ,item){
return (summ + new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(item));
}),(0),cljs.core.filter.call(null,(function (p1__43541_SHARP_){
return cljs.core._EQ_.call(null,d,new cljs.core.Keyword(null,"item_date","item_date",1321645722).cljs$core$IFn$_invoke$arity$1(p1__43541_SHARP_));
}),items));
});
/**
 * Получить значения для строки итого (по датам)
 *   для поступлений денег
 */
gcclocal.diagrams.moneyincomes_calc.total_income_cell_summs = (function gcclocal$diagrams$moneyincomes_calc$total_income_cell_summs(all_visible_dates,cl_cell_infos,income_cat_items){
var total_i = cljs.core.reduce.call(null,(function (totals_m,d){
var cc_sum = cljs.core.reduce_kv.call(null,(function (summ,client_key,datesmap){
return (summ + gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,datesmap,d))));
}),(0),cl_cell_infos);
var ic_summ = gcclocal.diagrams.moneyincomes_calc.total_for_date_in_items.call(null,income_cat_items,d);
return cljs.core.assoc.call(null,totals_m,d,(cc_sum + ic_summ));
}),cljs.core.PersistentArrayMap.EMPTY,all_visible_dates);
return total_i;
});
/**
 * Получить итоговую сумму по просрочкам (для поступлений)
 */
gcclocal.diagrams.moneyincomes_calc.total_income_expired_summ = (function gcclocal$diagrams$moneyincomes_calc$total_income_expired_summ(cl_expired_cinfos_map){
return cljs.core.reduce_kv.call(null,(function (s,k,v){
return (s + gcclocal.diagrams.moneyincomes_calc.total_summ_cd.call(null,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646).cljs$core$IFn$_invoke$arity$1(v)));
}),(0),cl_expired_cinfos_map);
});
/**
 * Получить значения для строки итого (по датам)
 *   по расходам
 */
gcclocal.diagrams.moneyincomes_calc.total_expense_cell_summs = (function gcclocal$diagrams$moneyincomes_calc$total_expense_cell_summs(all_visible_dates,expense_cat_items){
return cljs.core.reduce.call(null,(function (totals_m,d){
var ec_summ = gcclocal.diagrams.moneyincomes_calc.total_for_date_in_items.call(null,expense_cat_items,d);
return cljs.core.assoc.call(null,totals_m,d,ec_summ);
}),cljs.core.PersistentArrayMap.EMPTY,all_visible_dates);
});
/**
 * Получить остатки на конец по датам
 */
gcclocal.diagrams.moneyincomes_calc.init_balance_on_end = (function gcclocal$diagrams$moneyincomes_calc$init_balance_on_end(init_balance,all_visible_dates,total_income_summs,total_expense_summs){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__43546,d){
var vec__43547 = p__43546;
var balance_m = cljs.core.nth.call(null,vec__43547,(0),null);
var acc_s = cljs.core.nth.call(null,vec__43547,(1),null);
var summ = ((acc_s + (function (){var or__30577__auto__ = cljs.core.get.call(null,total_income_summs,d);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return (0);
}
})()) - (function (){var or__30577__auto__ = cljs.core.get.call(null,total_expense_summs,d);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return (0);
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,balance_m,d,summ),summ], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,init_balance], null),all_visible_dates));
});
/**
 * Получить остатки на начало
 */
gcclocal.diagrams.moneyincomes_calc.init_balance_on_start = (function gcclocal$diagrams$moneyincomes_calc$init_balance_on_start(init_balance,all_visible_dates,init_bs_on_end){
return cljs.core.assoc.call(null,(function (p1__43550_SHARP_){
return cljs.core.reduce.call(null,(function (balance_m,p__43555){
var vec__43556 = p__43555;
var d1 = cljs.core.nth.call(null,vec__43556,(0),null);
var d2 = cljs.core.nth.call(null,vec__43556,(1),null);
return cljs.core.assoc.call(null,balance_m,d2,cljs.core.get.call(null,init_bs_on_end,d1));
}),p1__43550_SHARP_,cljs.core.partition.call(null,(2),(1),all_visible_dates));
}).call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,all_visible_dates),init_balance);
});
/**
 * Получить итого остатки
 */
gcclocal.diagrams.moneyincomes_calc.total_init_balance = (function gcclocal$diagrams$moneyincomes_calc$total_init_balance(init_bs_on_end,all_visible_dates){
var or__30577__auto__ = cljs.core.get.call(null,init_bs_on_end,cljs.core.last.call(null,all_visible_dates));
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return (0);
}
});
/**
 * Посчитать все данные и вернуть в виде хм
 */
gcclocal.diagrams.moneyincomes_calc.calc_data = (function gcclocal$diagrams$moneyincomes_calc$calc_data(date_to_check,all_clients,client_payments,all_movements,income_items,expense_items,init_balance_on_date){
var all_dates = gcclocal.diagrams.moneyincomes_calc.all_unique_dates.call(null,client_payments,all_movements,income_items,expense_items);
var all_visible_d = gcclocal.diagrams.moneyincomes_calc.all_visible_dates.call(null,all_dates,date_to_check);
var clients_cinfos = gcclocal.diagrams.moneyincomes_calc.clients_cell_infos.call(null,all_clients,all_visible_d,client_payments,all_movements);
var all_expired_d = gcclocal.diagrams.moneyincomes_calc.all_expired_dates.call(null,all_dates,date_to_check);
var client_expired_cinfos = gcclocal.diagrams.moneyincomes_calc.clients_expired_cell_infos.call(null,all_clients,all_expired_d,client_payments,all_movements,date_to_check);
var total_i_cell_summs = gcclocal.diagrams.moneyincomes_calc.total_income_cell_summs.call(null,all_visible_d,clients_cinfos,income_items);
var total_i_expired_summ = gcclocal.diagrams.moneyincomes_calc.total_income_expired_summ.call(null,client_expired_cinfos);
var total_e_cell_summs = gcclocal.diagrams.moneyincomes_calc.total_expense_cell_summs.call(null,all_visible_d,expense_items);
var init_bs_on_end = gcclocal.diagrams.moneyincomes_calc.init_balance_on_end.call(null,init_balance_on_date,all_visible_d,total_i_cell_summs,total_e_cell_summs);
var init_bs_on_start = gcclocal.diagrams.moneyincomes_calc.init_balance_on_start.call(null,init_balance_on_date,all_visible_d,init_bs_on_end);
var total_init_bs = gcclocal.diagrams.moneyincomes_calc.total_init_balance.call(null,init_bs_on_end,all_visible_d);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"init-balances-on-start","init-balances-on-start",-506814809),new cljs.core.Keyword(null,"total-i-expired-summ","total-i-expired-summ",642175145),new cljs.core.Keyword(null,"init-balances-on-end","init-balances-on-end",123357514),new cljs.core.Keyword(null,"total-init-balances","total-init-balances",747678508),new cljs.core.Keyword(null,"clients-cinfos","clients-cinfos",-1458657330),new cljs.core.Keyword(null,"clients-expired-cinfos","clients-expired-cinfos",1830932623),new cljs.core.Keyword(null,"all-visible-dates","all-visible-dates",-1302813937),new cljs.core.Keyword(null,"total-e-cell-summs","total-e-cell-summs",-959694736),new cljs.core.Keyword(null,"total-i-cell-summs","total-i-cell-summs",-352188484)],[init_bs_on_start,total_i_expired_summ,init_bs_on_end,total_init_bs,clients_cinfos,client_expired_cinfos,all_visible_d,total_e_cell_summs,total_i_cell_summs]);
});

//# sourceMappingURL=moneyincomes_calc.js.map