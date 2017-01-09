// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.catalogs.suppliers');
goog.require('cljs.core');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_.call(null);
gcclocal.catalogs.suppliers.config_headers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"last_edit_datetime"], null)], null);
gcclocal.catalogs.suppliers.config_fields = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.text_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.datetime_readonly_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"last_edit_datetime","last_edit_datetime",-1040317786)], null)], null);
gcclocal.catalogs.suppliers.init = (function gcclocal$catalogs$suppliers$init(){
cljs.core.println.call(null,"init suppliers");

return gcclocal.views.basic_catalog_crud_table.init.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"get-rows","get-rows",-852238305),"/catalogs/suppliers/paging",new cljs.core.Keyword(null,"load-to-excel","load-to-excel",278907508),"/catalogs/suppliers/excel",new cljs.core.Keyword(null,"add-row","add-row",230649319),"/catalogs/suppliers/add",new cljs.core.Keyword(null,"edit-row","edit-row",1707590674),"/catalogs/suppliers/edit",new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),"/catalogs/suppliers/delete"], null),new cljs.core.Keyword(null,"crud-params","crud-params",-1883534802),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),gcclocal.catalogs.suppliers.config_fields,new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),gcclocal.catalogs.suppliers.config_headers], null),new cljs.core.Keyword(null,"view-dom","view-dom",-1033239877),document.getElementById("mainpanel")], null));
});
goog.exportSymbol('gcclocal.catalogs.suppliers.init', gcclocal.catalogs.suppliers.init);
gcclocal.catalogs.suppliers.on_js_reload = (function gcclocal$catalogs$suppliers$on_js_reload(){
return null;
});

//# sourceMappingURL=suppliers.js.map