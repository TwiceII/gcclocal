// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.catalogs.stationtraveltimes');
goog.require('cljs.core');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_();
gcclocal.catalogs.stationtraveltimes.config_headers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0421\u0442\u0430\u043D\u0446\u0438\u044F",cljs.core.cst$kw$wideness,"six",cljs.core.cst$kw$sort_DASH_field,"station"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0414\u043D\u0435\u0439 \u0432 \u043F\u0443\u0442\u0438",cljs.core.cst$kw$wideness,"five",cljs.core.cst$kw$sort_DASH_field,"days_in_travel"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",cljs.core.cst$kw$wideness,"four",cljs.core.cst$kw$sort_DASH_field,"last_edit_datetime"], null)], null);
gcclocal.catalogs.stationtraveltimes.stations_list = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
gcclocal.catalogs.stationtraveltimes.config_fields = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.select_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$station_id,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$select_DASH_options,gcclocal.catalogs.stationtraveltimes.stations_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,(function (p1__52428_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__52428_SHARP_);
}),cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",cljs.core.cst$kw$nullable_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.number_field_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$days_in_travel], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.datetime_readonly_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$last_edit_datetime], null)], null);
gcclocal.catalogs.stationtraveltimes.extract_add_row = (function gcclocal$catalogs$stationtraveltimes$extract_add_row(){
return gcclocal.comm.utils.extract_row_from_fields(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_id,cljs.core.cst$kw$days_in_travel], null),"add");
});
gcclocal.catalogs.stationtraveltimes.extract_edit_row = (function gcclocal$catalogs$stationtraveltimes$extract_edit_row(){
return gcclocal.comm.utils.extract_row_from_fields(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_id,cljs.core.cst$kw$days_in_travel], null),"edit");
});
gcclocal.catalogs.stationtraveltimes.get_name_for_delete_fn = (function gcclocal$catalogs$stationtraveltimes$get_name_for_delete_fn(selected_row){
return [cljs.core.str("\u0437\u0430\u043F\u0438\u0441\u044C \u0434\u043B\u044F "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(gcclocal.comm.utils.get_map_by_id((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gcclocal.catalogs.stationtraveltimes.stations_list) : cljs.core.deref.call(null,gcclocal.catalogs.stationtraveltimes.stations_list)),cljs.core.cst$kw$station_id.cljs$core$IFn$_invoke$arity$1(selected_row))))].join('');
});
gcclocal.catalogs.stationtraveltimes.init = (function gcclocal$catalogs$stationtraveltimes$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init stationtraveltimes"], 0));

gcclocal.comm.amethods.get_select_list_for_atom(gcclocal.catalogs.stationtraveltimes.stations_list,"/catalogs/stations/all");

return gcclocal.views.basic_catalog_crud_table.init(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$urls,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$get_DASH_rows,"/catalogs/stationtraveltimes/paging",cljs.core.cst$kw$load_DASH_to_DASH_excel,"/catalogs/stationtraveltimes/excel",cljs.core.cst$kw$add_DASH_row,"/catalogs/stationtraveltimes/add",cljs.core.cst$kw$edit_DASH_row,"/catalogs/stationtraveltimes/edit",cljs.core.cst$kw$delete_DASH_row,"/catalogs/stationtraveltimes/delete"], null),cljs.core.cst$kw$crud_DASH_params,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$config_DASH_fields,gcclocal.catalogs.stationtraveltimes.config_fields,cljs.core.cst$kw$config_DASH_headers,gcclocal.catalogs.stationtraveltimes.config_headers,cljs.core.cst$kw$extract_DASH_add_DASH_row_DASH_fn,gcclocal.catalogs.stationtraveltimes.extract_add_row,cljs.core.cst$kw$extract_DASH_edit_DASH_row_DASH_fn,gcclocal.catalogs.stationtraveltimes.extract_edit_row,cljs.core.cst$kw$get_DASH_name_DASH_for_DASH_delete_DASH_fn,gcclocal.catalogs.stationtraveltimes.get_name_for_delete_fn], null),cljs.core.cst$kw$view_DASH_dom,document.getElementById("mainpanel")], null));
});
goog.exportSymbol('gcclocal.catalogs.stationtraveltimes.init', gcclocal.catalogs.stationtraveltimes.init);
