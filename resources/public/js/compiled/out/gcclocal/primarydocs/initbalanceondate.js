// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.primarydocs.initbalanceondate');
goog.require('cljs.core');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_.call(null);
gcclocal.primarydocs.initbalanceondate.config_headers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0443\u043C\u043C\u0430",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"summ"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"last_edit_datetime"], null)], null);
gcclocal.primarydocs.initbalanceondate.config_fields = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.money_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"summ","summ",-1220398077)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.datetime_readonly_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"last_edit_datetime","last_edit_datetime",-1040317786)], null)], null);
gcclocal.primarydocs.initbalanceondate.extract_edit_row = (function gcclocal$primarydocs$initbalanceondate$extract_edit_row(){
return gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summ","summ",-1220398077)], null),"edit");
});
gcclocal.primarydocs.initbalanceondate.init = (function gcclocal$primarydocs$initbalanceondate$init(){
cljs.core.println.call(null,"init clientapps");

return gcclocal.views.basic_catalog_crud_table.init.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-rows","get-rows",-852238305),"/primarydocs/initbalanceondate/paging",new cljs.core.Keyword(null,"edit-row","edit-row",1707590674),"/primarydocs/initbalanceondate/edit"], null),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),(20),new cljs.core.Keyword(null,"crud-params","crud-params",-1883534802),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),gcclocal.primarydocs.initbalanceondate.config_fields,new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),gcclocal.primarydocs.initbalanceondate.config_headers,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908),true,new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173),true,new cljs.core.Keyword(null,"search-disabled?","search-disabled?",-282613927),true,new cljs.core.Keyword(null,"load-to-excel-disabled?","load-to-excel-disabled?",-27156580),true,new cljs.core.Keyword(null,"extract-edit-row-fn","extract-edit-row-fn",1288611618),gcclocal.primarydocs.initbalanceondate.extract_edit_row], null),new cljs.core.Keyword(null,"view-dom","view-dom",-1033239877),document.getElementById("mainpanel")], null));
});
goog.exportSymbol('gcclocal.primarydocs.initbalanceondate.init', gcclocal.primarydocs.initbalanceondate.init);

//# sourceMappingURL=initbalanceondate.js.map