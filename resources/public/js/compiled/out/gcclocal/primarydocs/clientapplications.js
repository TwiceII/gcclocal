// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.primarydocs.clientapplications');
goog.require('cljs.core');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_.call(null);
gcclocal.primarydocs.clientapplications.config_headers = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0414\u0430\u0442\u0430 \u0437\u0430\u044F\u0432\u043A\u0438",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"application_date"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u044F\u0432\u043A\u0438",new cljs.core.Keyword(null,"wideness","wideness",926863517),"two",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"name"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041A\u043B\u0438\u0435\u043D\u0442",new cljs.core.Keyword(null,"wideness","wideness",926863517),"three",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"client"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0414\u043E\u0433\u043E\u0432\u043E\u0440",new cljs.core.Keyword(null,"wideness","wideness",926863517),"four",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"client_contract"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"amount"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0443\u043C\u043C\u0430",new cljs.core.Keyword(null,"wideness","wideness",926863517),"two",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"summ"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0414\u0430\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F",new cljs.core.Keyword(null,"wideness","wideness",926863517),"two",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"creation_datetime"], null)], null);
gcclocal.primarydocs.clientapplications.clients_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.clientapplications.clientcontracts_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.clientapplications.currencies_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.clientapplications.config_fields = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.date_with_calendar_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"application_date","application_date",347335533)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.text_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.clientapplications.clients_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__44309_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__44309_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"client_contract_id","client_contract_id",262247204),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.clientapplications.clientcontracts_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__44310_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__44310_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.number_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"amount","amount",364489504)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.cmoney_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"cmoney","cmoney",287963013),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.clientapplications.currencies_list], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.datetime_readonly_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"creation_datetime","creation_datetime",-1850213706)], null)], null);
gcclocal.primarydocs.clientapplications.extract_add_row = (function gcclocal$primarydocs$clientapplications$extract_add_row(){
return gcclocal.comm.utils.rename_keys_in_map.call(null,gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"application_date","application_date",347335533),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"client_contract_id","client_contract_id",262247204),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"cmoney-summ","cmoney-summ",-704351038),new cljs.core.Keyword(null,"cmoney-cid","cmoney-cid",965977770)], null),"add"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmoney-summ","cmoney-summ",-704351038),new cljs.core.Keyword(null,"summ","summ",-1220398077),new cljs.core.Keyword(null,"cmoney-cid","cmoney-cid",965977770),new cljs.core.Keyword(null,"c_id","c_id",-385876256)], null));
});
gcclocal.primarydocs.clientapplications.extract_edit_row = (function gcclocal$primarydocs$clientapplications$extract_edit_row(){
return gcclocal.comm.utils.rename_keys_in_map.call(null,gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"application_date","application_date",347335533),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"client_contract_id","client_contract_id",262247204),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"cmoney-summ","cmoney-summ",-704351038),new cljs.core.Keyword(null,"cmoney-cid","cmoney-cid",965977770)], null),"edit"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmoney-summ","cmoney-summ",-704351038),new cljs.core.Keyword(null,"summ","summ",-1220398077),new cljs.core.Keyword(null,"cmoney-cid","cmoney-cid",965977770),new cljs.core.Keyword(null,"c_id","c_id",-385876256)], null));
});
gcclocal.primarydocs.clientapplications.init = (function gcclocal$primarydocs$clientapplications$init(){
cljs.core.println.call(null,"init clientapps");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.clientapplications.clients_list,"/catalogs/clients/all");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.clientapplications.clientcontracts_list,"/primarydocs/clientcontracts/all");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.clientapplications.currencies_list,"/catalogs/currencies/all");

return gcclocal.views.basic_catalog_crud_table.init.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"get-rows","get-rows",-852238305),"/primarydocs/clientapplications/paging",new cljs.core.Keyword(null,"load-to-excel","load-to-excel",278907508),"/primarydocs/clientapplications/excel",new cljs.core.Keyword(null,"add-row","add-row",230649319),"/primarydocs/clientapplications/add",new cljs.core.Keyword(null,"edit-row","edit-row",1707590674),"/primarydocs/clientapplications/edit",new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),"/primarydocs/clientapplications/delete"], null),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),(20),new cljs.core.Keyword(null,"crud-params","crud-params",-1883534802),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),gcclocal.primarydocs.clientapplications.config_fields,new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),gcclocal.primarydocs.clientapplications.config_headers,new cljs.core.Keyword(null,"extract-add-row-fn","extract-add-row-fn",-812296192),gcclocal.primarydocs.clientapplications.extract_add_row,new cljs.core.Keyword(null,"extract-edit-row-fn","extract-edit-row-fn",1288611618),gcclocal.primarydocs.clientapplications.extract_edit_row], null),new cljs.core.Keyword(null,"view-dom","view-dom",-1033239877),document.getElementById("mainpanel")], null));
});
goog.exportSymbol('gcclocal.primarydocs.clientapplications.init', gcclocal.primarydocs.clientapplications.init);

//# sourceMappingURL=clientapplications.js.map