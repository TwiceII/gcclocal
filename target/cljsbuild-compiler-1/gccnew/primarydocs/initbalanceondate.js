// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.primarydocs.initbalanceondate');
goog.require('cljs.core');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_();
gcclocal.primarydocs.initbalanceondate.config_headers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_name,"\u0421\u0443\u043C\u043C\u0430",cljs.core.cst$kw$sort_DASH_field,"summ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_name,"\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",cljs.core.cst$kw$sort_DASH_field,"last_edit_datetime"], null)], null);
gcclocal.primarydocs.initbalanceondate.config_fields = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.money_field_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$summ], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.datetime_readonly_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$last_edit_datetime], null)], null);
gcclocal.primarydocs.initbalanceondate.extract_edit_row = (function gcclocal$primarydocs$initbalanceondate$extract_edit_row(){
return gcclocal.comm.utils.extract_row_from_fields(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$summ], null),"edit");
});
gcclocal.primarydocs.initbalanceondate.init = (function gcclocal$primarydocs$initbalanceondate$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init clientapps"], 0));

return gcclocal.views.basic_catalog_crud_table.init(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$urls,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get_DASH_rows,"/primarydocs/initbalanceondate/paging",cljs.core.cst$kw$edit_DASH_row,"/primarydocs/initbalanceondate/edit"], null),cljs.core.cst$kw$pagesize,(20),cljs.core.cst$kw$crud_DASH_params,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$config_DASH_fields,gcclocal.primarydocs.initbalanceondate.config_fields,cljs.core.cst$kw$config_DASH_headers,gcclocal.primarydocs.initbalanceondate.config_headers,cljs.core.cst$kw$add_DASH_disabled_QMARK_,true,cljs.core.cst$kw$delete_DASH_disabled_QMARK_,true,cljs.core.cst$kw$search_DASH_disabled_QMARK_,true,cljs.core.cst$kw$load_DASH_to_DASH_excel_DASH_disabled_QMARK_,true,cljs.core.cst$kw$extract_DASH_edit_DASH_row_DASH_fn,gcclocal.primarydocs.initbalanceondate.extract_edit_row], null),cljs.core.cst$kw$view_DASH_dom,document.getElementById("mainpanel")], null));
});
goog.exportSymbol('gcclocal.primarydocs.initbalanceondate.init', gcclocal.primarydocs.initbalanceondate.init);
