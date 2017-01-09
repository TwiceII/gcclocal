// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.primarydocs.clientcontracts');
goog.require('cljs.core');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.crud_fields');
cljs.core.enable_console_print_BANG_.call(null);
gcclocal.primarydocs.clientcontracts.config_headers = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",new cljs.core.Keyword(null,"wideness","wideness",926863517),"three",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"name"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041A\u043B\u0438\u0435\u043D\u0442",new cljs.core.Keyword(null,"wideness","wideness",926863517),"three",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"client"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0422\u043E\u0432\u0430\u0440",new cljs.core.Keyword(null,"wideness","wideness",926863517),"three",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"good"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041F\u0440\u0435\u0434\u043E\u043F\u043B. %",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"prepay_percentage"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041F\u0440\u0435\u0434\u043E\u043F\u043B. \u0434\u043D",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"prepay_time"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041E\u043F\u043B. %",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"pay_percentage"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u041E\u043F\u043B. \u0434\u043D",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"pay_time"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0440.\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"from_date_active"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"\u0421\u0440.\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E",new cljs.core.Keyword(null,"wideness","wideness",926863517),"one",new cljs.core.Keyword(null,"sort-field","sort-field",-941433793),"to_date_active"], null)], null);
gcclocal.primarydocs.clientcontracts.clients_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.clientcontracts.goods_list = cljs.core.atom.call(null,null);
gcclocal.primarydocs.clientcontracts.config_fields = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.text_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.clientcontracts.clients_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__44277_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__44277_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.select_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"good_id","good_id",-615855180),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"select-options","select-options",-341918243),gcclocal.primarydocs.clientcontracts.goods_list,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895),(function (p1__44278_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__44278_SHARP_);
}),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.number_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"prepay_percentage","prepay_percentage",-1548943891)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.number_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"prepay_time","prepay_time",1286154097)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.number_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"pay_percentage","pay_percentage",567567169)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.number_field_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"pay_time","pay_time",-821282183)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.date_with_calendar_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"from_date_active","from_date_active",1752936553)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),gcclocal.views.crud_fields.date_with_calendar_view,new cljs.core.Keyword(null,"field-name","field-name",1300687948),new cljs.core.Keyword(null,"to_date_active","to_date_active",-1452251718)], null)], null);
gcclocal.primarydocs.clientcontracts.extract_add_row = (function gcclocal$primarydocs$clientcontracts$extract_add_row(){
return gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"good_id","good_id",-615855180),new cljs.core.Keyword(null,"prepay_percentage","prepay_percentage",-1548943891),new cljs.core.Keyword(null,"prepay_time","prepay_time",1286154097),new cljs.core.Keyword(null,"pay_percentage","pay_percentage",567567169),new cljs.core.Keyword(null,"pay_time","pay_time",-821282183),new cljs.core.Keyword(null,"from_date_active","from_date_active",1752936553),new cljs.core.Keyword(null,"to_date_active","to_date_active",-1452251718)], null),"add");
});
gcclocal.primarydocs.clientcontracts.extract_edit_row = (function gcclocal$primarydocs$clientcontracts$extract_edit_row(){
return gcclocal.comm.utils.extract_row_from_fields.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"client_id","client_id",48809273),new cljs.core.Keyword(null,"good_id","good_id",-615855180),new cljs.core.Keyword(null,"prepay_percentage","prepay_percentage",-1548943891),new cljs.core.Keyword(null,"prepay_time","prepay_time",1286154097),new cljs.core.Keyword(null,"pay_percentage","pay_percentage",567567169),new cljs.core.Keyword(null,"pay_time","pay_time",-821282183),new cljs.core.Keyword(null,"from_date_active","from_date_active",1752936553),new cljs.core.Keyword(null,"to_date_active","to_date_active",-1452251718)], null),"edit");
});
gcclocal.primarydocs.clientcontracts.init = (function gcclocal$primarydocs$clientcontracts$init(){
cljs.core.println.call(null,"init clientcontracts");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.clientcontracts.clients_list,"/catalogs/clients/all");

gcclocal.comm.amethods.get_select_list_for_atom.call(null,gcclocal.primarydocs.clientcontracts.goods_list,"/catalogs/goods/all");

return gcclocal.views.basic_catalog_crud_table.init.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"get-rows","get-rows",-852238305),"/primarydocs/clientcontracts/paging",new cljs.core.Keyword(null,"load-to-excel","load-to-excel",278907508),"/primarydocs/clientcontracts/excel",new cljs.core.Keyword(null,"add-row","add-row",230649319),"/primarydocs/clientcontracts/add",new cljs.core.Keyword(null,"edit-row","edit-row",1707590674),"/primarydocs/clientcontracts/edit",new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),"/primarydocs/clientcontracts/delete"], null),new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692),(20),new cljs.core.Keyword(null,"crud-params","crud-params",-1883534802),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"config-fields","config-fields",1456621207),gcclocal.primarydocs.clientcontracts.config_fields,new cljs.core.Keyword(null,"config-headers","config-headers",2144375121),gcclocal.primarydocs.clientcontracts.config_headers,new cljs.core.Keyword(null,"extract-add-row-fn","extract-add-row-fn",-812296192),gcclocal.primarydocs.clientcontracts.extract_add_row,new cljs.core.Keyword(null,"extract-edit-row-fn","extract-edit-row-fn",1288611618),gcclocal.primarydocs.clientcontracts.extract_edit_row], null),new cljs.core.Keyword(null,"view-dom","view-dom",-1033239877),document.getElementById("mainpanel")], null));
});
goog.exportSymbol('gcclocal.primarydocs.clientcontracts.init', gcclocal.primarydocs.clientcontracts.init);

//# sourceMappingURL=clientcontracts.js.map