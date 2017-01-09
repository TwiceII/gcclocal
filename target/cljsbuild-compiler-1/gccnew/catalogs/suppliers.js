// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.catalogs.suppliers');
goog.require('cljs.core');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_();
gcclocal.catalogs.suppliers.config_headers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_name,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",cljs.core.cst$kw$sort_DASH_field,"name"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_name,"\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",cljs.core.cst$kw$sort_DASH_field,"last_edit_datetime"], null)], null);
gcclocal.catalogs.suppliers.config_fields = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.text_field_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$name], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.datetime_readonly_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$last_edit_datetime], null)], null);
gcclocal.catalogs.suppliers.init = (function gcclocal$catalogs$suppliers$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init suppliers"], 0));

return gcclocal.views.basic_catalog_crud_table.init(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$urls,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$get_DASH_rows,"/catalogs/suppliers/paging",cljs.core.cst$kw$load_DASH_to_DASH_excel,"/catalogs/suppliers/excel",cljs.core.cst$kw$add_DASH_row,"/catalogs/suppliers/add",cljs.core.cst$kw$edit_DASH_row,"/catalogs/suppliers/edit",cljs.core.cst$kw$delete_DASH_row,"/catalogs/suppliers/delete"], null),cljs.core.cst$kw$crud_DASH_params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config_DASH_fields,gcclocal.catalogs.suppliers.config_fields,cljs.core.cst$kw$config_DASH_headers,gcclocal.catalogs.suppliers.config_headers], null),cljs.core.cst$kw$view_DASH_dom,document.getElementById("mainpanel")], null));
});
goog.exportSymbol('gcclocal.catalogs.suppliers.init', gcclocal.catalogs.suppliers.init);
gcclocal.catalogs.suppliers.on_js_reload = (function gcclocal$catalogs$suppliers$on_js_reload(){
return null;
});
