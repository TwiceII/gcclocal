// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.primarydocs.departurelogistinfos');
goog.require('cljs.core');
goog.require('gcclocal.comm.dom_utils');
goog.require('cljs.core.async');
goog.require('gcclocal.views.basic_catalog_crud_table');
goog.require('gcclocal.comm.pagination');
goog.require('gcclocal.comm.amethods');
goog.require('rum.core');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.views.crud_views');
goog.require('gcclocal.views.crud_fields');
goog.require('gcclocal.comm.channels');
goog.require('gcclocal.views.common');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
if(typeof gcclocal.primarydocs.departurelogistinfos.app_state !== 'undefined'){
} else {
gcclocal.primarydocs.departurelogistinfos.app_state = (function (){var G__52704 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$delete_DASH_disabled_QMARK_,cljs.core.cst$kw$edit_DASH_mode_QMARK_,cljs.core.cst$kw$add_DASH_mode_QMARK_,cljs.core.cst$kw$loading_DASH_rows_QMARK_,cljs.core.cst$kw$total_DASH_c,cljs.core.cst$kw$rows,cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$add_DASH_disabled_QMARK_,cljs.core.cst$kw$show_DASH_mode,cljs.core.cst$kw$selected_DASH_row],[false,false,false,true,(0),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pagination,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pagesize,(10),cljs.core.cst$kw$currentpage,(1)], null),cljs.core.cst$kw$sorting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"shipping_date",cljs.core.cst$kw$default_DASH_field,"shipping_date",cljs.core.cst$kw$desc_QMARK_,true], null),cljs.core.cst$kw$search_DASH_str,""], null),false,"active",null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52704) : cljs.core.atom.call(null,G__52704));
})();
}
if(typeof gcclocal.primarydocs.departurelogistinfos.test_sync_data !== 'undefined'){
} else {
gcclocal.primarydocs.departurelogistinfos.test_sync_data = (function (){var G__52705 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$newdlis,null,cljs.core.cst$kw$edit_DASH_new_DASH_dli_QMARK_,false,cljs.core.cst$kw$selected_DASH_type,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52705) : cljs.core.atom.call(null,G__52705));
})();
}
gcclocal.primarydocs.departurelogistinfos.urls = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$delete_DASH_row,cljs.core.cst$kw$add_DASH_row,cljs.core.cst$kw$add_DASH_newsync,cljs.core.cst$kw$deny_DASH_newsync,cljs.core.cst$kw$finish_DASH_row,cljs.core.cst$kw$edit_DASH_row,cljs.core.cst$kw$load_DASH_to_DASH_excel,cljs.core.cst$kw$unfinish_DASH_row,cljs.core.cst$kw$get_DASH_newsync,cljs.core.cst$kw$get_DASH_rows],["/primarydocs/departurelogistinfos/delete","/primarydocs/departurelogistinfos/add","/primarydocs/addnewsync","/primarydocs/denynewsync","/primarydocs/departurelogistinfos/finish","/primarydocs/departurelogistinfos/edit","/primarydocs/departurelogistinfos/excel","/primarydocs/departurelogistinfos/unfinish","/primarydocs/newsyncdlis","/primarydocs/departurelogistinfos/paging"]);
gcclocal.primarydocs.departurelogistinfos.get_cursor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,gcclocal.primarydocs.departurelogistinfos.app_state);
gcclocal.primarydocs.departurelogistinfos.cursors = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$delete_DASH_disabled_QMARK_,cljs.core.cst$kw$currentpage,cljs.core.cst$kw$search_DASH_str,cljs.core.cst$kw$edit_DASH_mode_QMARK_,cljs.core.cst$kw$add_DASH_mode_QMARK_,cljs.core.cst$kw$desc_DASH_sort_QMARK_,cljs.core.cst$kw$loading_DASH_rows_QMARK_,cljs.core.cst$kw$total_DASH_c,cljs.core.cst$kw$rows,cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$app_DASH_state,cljs.core.cst$kw$pagination,cljs.core.cst$kw$add_DASH_disabled_QMARK_,cljs.core.cst$kw$default_DASH_sort_DASH_field,cljs.core.cst$kw$show_DASH_mode,cljs.core.cst$kw$sorting,cljs.core.cst$kw$pagesize,cljs.core.cst$kw$selected_DASH_row,cljs.core.cst$kw$sort_DASH_field],[(function (){var G__52706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_disabled_QMARK_], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52706) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52706));
})(),(function (){var G__52707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$currentpage], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52707) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52707));
})(),(function (){var G__52708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$search_DASH_str], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52708) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52708));
})(),(function (){var G__52709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edit_DASH_mode_QMARK_], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52709) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52709));
})(),(function (){var G__52710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_mode_QMARK_], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52710) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52710));
})(),(function (){var G__52711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$desc_QMARK_], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52711) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52711));
})(),(function (){var G__52712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_DASH_rows_QMARK_], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52712) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52712));
})(),(function (){var G__52713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$total_DASH_c], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52713) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52713));
})(),(function (){var G__52714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rows], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52714) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52714));
})(),(function (){var G__52715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52715) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52715));
})(),(function (){var G__52716 = cljs.core.PersistentVector.EMPTY;
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52716) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52716));
})(),(function (){var G__52717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52717) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52717));
})(),(function (){var G__52718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_disabled_QMARK_], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52718) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52718));
})(),(function (){var G__52719 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$default_DASH_field], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52719) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52719));
})(),(function (){var G__52720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_mode], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52720) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52720));
})(),(function (){var G__52721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52721) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52721));
})(),(function (){var G__52722 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$pagesize], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52722) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52722));
})(),(function (){var G__52723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_row], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52723) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52723));
})(),(function (){var G__52724 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$field], null);
return (gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1 ? gcclocal.primarydocs.departurelogistinfos.get_cursor.cljs$core$IFn$_invoke$arity$1(G__52724) : gcclocal.primarydocs.departurelogistinfos.get_cursor.call(null,G__52724));
})()]);
gcclocal.primarydocs.departurelogistinfos.clients_list = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
gcclocal.primarydocs.departurelogistinfos.stations_list = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
gcclocal.primarydocs.departurelogistinfos.stationtraveltimes_list = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
gcclocal.primarydocs.departurelogistinfos.suppliers_list = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
gcclocal.primarydocs.departurelogistinfos.clientapplications_list = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
/**
 * Обновить все строки (с учетом режима: активные, заверш., все)
 */
gcclocal.primarydocs.departurelogistinfos.refresh_all_dli_rows = (function gcclocal$primarydocs$departurelogistinfos$refresh_all_dli_rows(reset_type){
var current_state_cursor = cljs.core.cst$kw$app_DASH_state.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var loading_cursor = cljs.core.cst$kw$loading_DASH_rows_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var rows_cursor = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var count_cursor = cljs.core.cst$kw$total_DASH_c.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var show_mode = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_mode], null));
var sort_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$field], null));
var desc_sort_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$sorting,cljs.core.cst$kw$desc_QMARK_], null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(loading_cursor,true) : cljs.core.reset_BANG_.call(null,loading_cursor,true));

var G__52728_52731 = (((reset_type instanceof cljs.core.Keyword))?reset_type.fqn:null);
switch (G__52728_52731) {
case "reset-all":
gcclocal.views.basic_catalog_crud_table.reset_nav_and_filters(gcclocal.primarydocs.departurelogistinfos.cursors);

break;
case "reset-page":
gcclocal.views.basic_catalog_crud_table.reset_page(gcclocal.primarydocs.departurelogistinfos.cursors);

break;
default:

}

gcclocal.views.basic_catalog_crud_table.turn_off_all_modes(gcclocal.primarydocs.departurelogistinfos.cursors);

gcclocal.comm.utils.get_json(cljs.core.cst$kw$get_DASH_newsync.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),cljs.core.PersistentArrayMap.EMPTY,((function (current_state_cursor,loading_cursor,rows_cursor,count_cursor,show_mode,sort_field,desc_sort_QMARK_){
return (function (response){
var G__52729 = rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$newdlis], null));
var G__52730 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(response);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52729,G__52730) : cljs.core.reset_BANG_.call(null,G__52729,G__52730));
});})(current_state_cursor,loading_cursor,rows_cursor,count_cursor,show_mode,sort_field,desc_sort_QMARK_))
);

gcclocal.comm.amethods.refresh_rows(cljs.core.cst$kw$get_DASH_rows.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$page,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$currentpage], null)),cljs.core.cst$kw$pagesize,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$pagination,cljs.core.cst$kw$pagesize], null)),cljs.core.cst$kw$ordering,[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),cljs.core.cst$kw$showmode,show_mode,cljs.core.cst$kw$search,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$search_DASH_str], null))], null),loading_cursor,rows_cursor,count_cursor);

return gcclocal.comm.amethods.get_select_list_for_atom(gcclocal.primarydocs.departurelogistinfos.stations_list,"/catalogs/stations/all");
});
gcclocal.primarydocs.departurelogistinfos.notify_ch = gcclocal.comm.channels.init_notify_ch();
gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch = gcclocal.comm.channels.init_refresh_rows_ch(gcclocal.primarydocs.departurelogistinfos.refresh_all_dli_rows);
gcclocal.primarydocs.departurelogistinfos.change_page_ch = gcclocal.comm.channels.init_change_page_ch((function (p1__52733_SHARP_){
return gcclocal.views.basic_catalog_crud_table.change_page(gcclocal.primarydocs.departurelogistinfos.cursors,p1__52733_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
}));
gcclocal.primarydocs.departurelogistinfos.change_show_mode = (function gcclocal$primarydocs$departurelogistinfos$change_show_mode(show_mode){

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(show_mode,(function (){var G__52753 = cljs.core.cst$kw$show_DASH_mode.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__52753) : cljs.core.deref.call(null,G__52753));
})())){
var G__52754_52772 = cljs.core.cst$kw$show_DASH_mode.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var G__52755_52773 = show_mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52754_52772,G__52755_52773) : cljs.core.reset_BANG_.call(null,G__52754_52772,G__52755_52773));

var G__52756_52774 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var G__52757_52775 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52756_52774,G__52757_52775) : cljs.core.reset_BANG_.call(null,G__52756_52774,G__52757_52775));

var G__52758_52776 = cljs.core.cst$kw$add_DASH_disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var G__52759_52777 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_mode,"finished");
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52758_52776,G__52759_52777) : cljs.core.reset_BANG_.call(null,G__52758_52776,G__52759_52777));

var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_52763){
var state_val_52764 = (state_52763[(1)]);
if((state_val_52764 === (1))){
var state_52763__$1 = state_52763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52763__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,cljs.core.cst$kw$reset_DASH_page);
} else {
if((state_val_52764 === (2))){
var inst_52761 = (state_52763[(2)]);
var state_52763__$1 = state_52763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52763__$1,inst_52761);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto____0 = (function (){
var statearr_52768 = [null,null,null,null,null,null,null];
(statearr_52768[(0)] = gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto__);

(statearr_52768[(1)] = (1));

return statearr_52768;
});
var gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto____1 = (function (state_52763){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52763);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52769){if((e52769 instanceof Object)){
var ex__37986__auto__ = e52769;
var statearr_52770_52778 = state_52763;
(statearr_52770_52778[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52763);

return cljs.core.cst$kw$recur;
} else {
throw e52769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52779 = state_52763;
state_52763 = G__52779;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto__ = function(state_52763){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto____1.call(this,state_52763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$change_show_mode_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_52771 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
} else {
return null;
}
});
/**
 * Завершить поставку в пути
 */
gcclocal.primarydocs.departurelogistinfos.finish_row = (function gcclocal$primarydocs$departurelogistinfos$finish_row(id){
return gcclocal.comm.utils.post_json_with_success_check(cljs.core.cst$kw$finish_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),(function (_){
var c__38096__auto___52868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___52868){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___52868){
return (function (state_52830){
var state_val_52831 = (state_52830[(1)]);
if((state_val_52831 === (1))){
var inst_52824 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_52825 = ["\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430","success"];
var inst_52826 = cljs.core.PersistentHashMap.fromArrays(inst_52824,inst_52825);
var state_52830__$1 = state_52830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52830__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_52826);
} else {
if((state_val_52831 === (2))){
var inst_52828 = (state_52830[(2)]);
var state_52830__$1 = state_52830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52830__$1,inst_52828);
} else {
return null;
}
}
});})(c__38096__auto___52868))
;
return ((function (switch__37982__auto__,c__38096__auto___52868){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0 = (function (){
var statearr_52835 = [null,null,null,null,null,null,null];
(statearr_52835[(0)] = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__);

(statearr_52835[(1)] = (1));

return statearr_52835;
});
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1 = (function (state_52830){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52830);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52836){if((e52836 instanceof Object)){
var ex__37986__auto__ = e52836;
var statearr_52837_52869 = state_52830;
(statearr_52837_52869[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52830);

return cljs.core.cst$kw$recur;
} else {
throw e52836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52870 = state_52830;
state_52830 = G__52870;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__ = function(state_52830){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1.call(this,state_52830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___52868))
})();
var state__38098__auto__ = (function (){var statearr_52838 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___52868);

return statearr_52838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___52868))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_52842){
var state_val_52843 = (state_52842[(1)]);
if((state_val_52843 === (1))){
var state_52842__$1 = state_52842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52842__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,cljs.core.cst$kw$reset_DASH_none);
} else {
if((state_val_52843 === (2))){
var inst_52840 = (state_52842[(2)]);
var state_52842__$1 = state_52842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52842__$1,inst_52840);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0 = (function (){
var statearr_52847 = [null,null,null,null,null,null,null];
(statearr_52847[(0)] = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__);

(statearr_52847[(1)] = (1));

return statearr_52847;
});
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1 = (function (state_52842){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52842);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52848){if((e52848 instanceof Object)){
var ex__37986__auto__ = e52848;
var statearr_52849_52871 = state_52842;
(statearr_52849_52871[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52842);

return cljs.core.cst$kw$recur;
} else {
throw e52848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52872 = state_52842;
state_52842 = G__52872;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__ = function(state_52842){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1.call(this,state_52842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_52850 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_52859){
var state_val_52860 = (state_52859[(1)]);
if((state_val_52860 === (1))){
var inst_52851 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_52852 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_52853 = gcclocal.comm.utils.get_errors_str_from_map(inst_52852);
var inst_52854 = [inst_52853,"error"];
var inst_52855 = cljs.core.PersistentHashMap.fromArrays(inst_52851,inst_52854);
var state_52859__$1 = state_52859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52859__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_52855);
} else {
if((state_val_52860 === (2))){
var inst_52857 = (state_52859[(2)]);
var state_52859__$1 = state_52859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52859__$1,inst_52857);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0 = (function (){
var statearr_52864 = [null,null,null,null,null,null,null];
(statearr_52864[(0)] = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__);

(statearr_52864[(1)] = (1));

return statearr_52864;
});
var gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1 = (function (state_52859){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52859);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52865){if((e52865 instanceof Object)){
var ex__37986__auto__ = e52865;
var statearr_52866_52873 = state_52859;
(statearr_52866_52873[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52859);

return cljs.core.cst$kw$recur;
} else {
throw e52865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52874 = state_52859;
state_52859 = G__52874;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__ = function(state_52859){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1.call(this,state_52859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$finish_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_52867 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Отменить завершение поставки в пути
 */
gcclocal.primarydocs.departurelogistinfos.unfinish_row = (function gcclocal$primarydocs$departurelogistinfos$unfinish_row(id){
return gcclocal.comm.utils.post_json_with_success_check(cljs.core.cst$kw$unfinish_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),(function (_){
var c__38096__auto___52963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___52963){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___52963){
return (function (state_52925){
var state_val_52926 = (state_52925[(1)]);
if((state_val_52926 === (1))){
var inst_52919 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_52920 = ["\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E","success"];
var inst_52921 = cljs.core.PersistentHashMap.fromArrays(inst_52919,inst_52920);
var state_52925__$1 = state_52925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52925__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_52921);
} else {
if((state_val_52926 === (2))){
var inst_52923 = (state_52925[(2)]);
var state_52925__$1 = state_52925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52925__$1,inst_52923);
} else {
return null;
}
}
});})(c__38096__auto___52963))
;
return ((function (switch__37982__auto__,c__38096__auto___52963){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0 = (function (){
var statearr_52930 = [null,null,null,null,null,null,null];
(statearr_52930[(0)] = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__);

(statearr_52930[(1)] = (1));

return statearr_52930;
});
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1 = (function (state_52925){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52925);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52931){if((e52931 instanceof Object)){
var ex__37986__auto__ = e52931;
var statearr_52932_52964 = state_52925;
(statearr_52932_52964[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52925);

return cljs.core.cst$kw$recur;
} else {
throw e52931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52965 = state_52925;
state_52925 = G__52965;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__ = function(state_52925){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1.call(this,state_52925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___52963))
})();
var state__38098__auto__ = (function (){var statearr_52933 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___52963);

return statearr_52933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___52963))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_52937){
var state_val_52938 = (state_52937[(1)]);
if((state_val_52938 === (1))){
var state_52937__$1 = state_52937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52937__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,cljs.core.cst$kw$reset_DASH_none);
} else {
if((state_val_52938 === (2))){
var inst_52935 = (state_52937[(2)]);
var state_52937__$1 = state_52937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52937__$1,inst_52935);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0 = (function (){
var statearr_52942 = [null,null,null,null,null,null,null];
(statearr_52942[(0)] = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__);

(statearr_52942[(1)] = (1));

return statearr_52942;
});
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1 = (function (state_52937){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52937);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52943){if((e52943 instanceof Object)){
var ex__37986__auto__ = e52943;
var statearr_52944_52966 = state_52937;
(statearr_52944_52966[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52937);

return cljs.core.cst$kw$recur;
} else {
throw e52943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52967 = state_52937;
state_52937 = G__52967;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__ = function(state_52937){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1.call(this,state_52937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_52945 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_52954){
var state_val_52955 = (state_52954[(1)]);
if((state_val_52955 === (1))){
var inst_52946 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_52947 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_52948 = gcclocal.comm.utils.get_errors_str_from_map(inst_52947);
var inst_52949 = [inst_52948,"error"];
var inst_52950 = cljs.core.PersistentHashMap.fromArrays(inst_52946,inst_52949);
var state_52954__$1 = state_52954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52954__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_52950);
} else {
if((state_val_52955 === (2))){
var inst_52952 = (state_52954[(2)]);
var state_52954__$1 = state_52954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52954__$1,inst_52952);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0 = (function (){
var statearr_52959 = [null,null,null,null,null,null,null];
(statearr_52959[(0)] = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__);

(statearr_52959[(1)] = (1));

return statearr_52959;
});
var gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1 = (function (state_52954){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52954);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52960){if((e52960 instanceof Object)){
var ex__37986__auto__ = e52960;
var statearr_52961_52968 = state_52954;
(statearr_52961_52968[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52954);

return cljs.core.cst$kw$recur;
} else {
throw e52960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52969 = state_52954;
state_52954 = G__52969;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__ = function(state_52954){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1.call(this,state_52954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$unfinish_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_52962 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_52962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Выбрать строку из новых, ожидающих подтверждения
 */
gcclocal.primarydocs.departurelogistinfos.select_new_dli_row = (function gcclocal$primarydocs$departurelogistinfos$select_new_dli_row(newdli){
var sel_row_cursor = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var differs_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(newdli,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sel_row_cursor) : cljs.core.deref.call(null,sel_row_cursor)));
var G__52976_52982 = sel_row_cursor;
var G__52977_52983 = ((differs_QMARK_)?newdli:null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52976_52982,G__52977_52983) : cljs.core.reset_BANG_.call(null,G__52976_52982,G__52977_52983));

var G__52978_52984 = rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edit_DASH_new_DASH_dli_QMARK_], null));
var G__52979_52985 = differs_QMARK_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52978_52984,G__52979_52985) : cljs.core.reset_BANG_.call(null,G__52978_52984,G__52979_52985));

var G__52980_52986 = rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_type], null));
var G__52981_52987 = ((differs_QMARK_)?cljs.core.cst$kw$newdli:null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52980_52986,G__52981_52987) : cljs.core.reset_BANG_.call(null,G__52980_52986,G__52981_52987));

return gcclocal.views.basic_catalog_crud_table.turn_off_all_modes(gcclocal.primarydocs.departurelogistinfos.cursors);
});
/**
 * Кастомный метод для выделения строки
 */
gcclocal.primarydocs.departurelogistinfos.select_row_custom = (function gcclocal$primarydocs$departurelogistinfos$select_row_custom(c,r){
var sel_row_cursor = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var differs_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sel_row_cursor) : cljs.core.deref.call(null,sel_row_cursor)));
gcclocal.views.basic_catalog_crud_table.select_row(c,r);

var G__52992_52996 = rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_type], null));
var G__52993_52997 = ((differs_QMARK_)?cljs.core.cst$kw$row:null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52992_52996,G__52993_52997) : cljs.core.reset_BANG_.call(null,G__52992_52996,G__52993_52997));

var G__52994 = rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edit_DASH_new_DASH_dli_QMARK_], null));
var G__52995 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52994,G__52995) : cljs.core.reset_BANG_.call(null,G__52994,G__52995));
});
/**
 * Подтвердить новую поставку
 */
gcclocal.primarydocs.departurelogistinfos.confirm_newsyncdli = (function gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli(newdli){
var newdlimap = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gcclocal.comm.utils.extract_row_from_fields(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$from_station_id,cljs.core.cst$kw$to_station_id,cljs.core.cst$kw$travel_time,cljs.core.cst$kw$client_application_id,cljs.core.cst$kw$client_id,cljs.core.cst$kw$supplier_id,cljs.core.cst$kw$cost,cljs.core.cst$kw$wagon_amount], null),"syncadd"),cljs.core.cst$kw$newdli_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$wagon_number,cljs.core.cst$kw$wagon_number.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$shipping_date,cljs.core.cst$kw$shipping_date.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$from_station_code,cljs.core.cst$kw$from_station_code.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$from_station_name,cljs.core.cst$kw$from_station_name.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$to_station_code,cljs.core.cst$kw$to_station_code.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$to_station_name,cljs.core.cst$kw$to_station_name.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$current_station_code,cljs.core.cst$kw$current_station_code.cljs$core$IFn$_invoke$arity$1(newdli)),cljs.core.cst$kw$current_station_name,cljs.core.cst$kw$current_station_name.cljs$core$IFn$_invoke$arity$1(newdli));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["confirm"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([newdlimap], 0));

return gcclocal.comm.utils.post_json_with_success_check("/primarydocs/addnewsync",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,newdlimap], null),((function (newdlimap){
return (function (_){
var c__38096__auto___53086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___53086,newdlimap){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___53086,newdlimap){
return (function (state_53048){
var state_val_53049 = (state_53048[(1)]);
if((state_val_53049 === (1))){
var inst_53042 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_53043 = ["\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430","success"];
var inst_53044 = cljs.core.PersistentHashMap.fromArrays(inst_53042,inst_53043);
var state_53048__$1 = state_53048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53048__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_53044);
} else {
if((state_val_53049 === (2))){
var inst_53046 = (state_53048[(2)]);
var state_53048__$1 = state_53048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53048__$1,inst_53046);
} else {
return null;
}
}
});})(c__38096__auto___53086,newdlimap))
;
return ((function (switch__37982__auto__,c__38096__auto___53086,newdlimap){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0 = (function (){
var statearr_53053 = [null,null,null,null,null,null,null];
(statearr_53053[(0)] = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__);

(statearr_53053[(1)] = (1));

return statearr_53053;
});
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1 = (function (state_53048){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53048);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53054){if((e53054 instanceof Object)){
var ex__37986__auto__ = e53054;
var statearr_53055_53087 = state_53048;
(statearr_53055_53087[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53048);

return cljs.core.cst$kw$recur;
} else {
throw e53054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53088 = state_53048;
state_53048 = G__53088;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__ = function(state_53048){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1.call(this,state_53048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___53086,newdlimap))
})();
var state__38098__auto__ = (function (){var statearr_53056 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___53086);

return statearr_53056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___53086,newdlimap))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__,newdlimap){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__,newdlimap){
return (function (state_53060){
var state_val_53061 = (state_53060[(1)]);
if((state_val_53061 === (1))){
var state_53060__$1 = state_53060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53060__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,cljs.core.cst$kw$reset_DASH_page);
} else {
if((state_val_53061 === (2))){
var inst_53058 = (state_53060[(2)]);
var state_53060__$1 = state_53060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53060__$1,inst_53058);
} else {
return null;
}
}
});})(c__38096__auto__,newdlimap))
;
return ((function (switch__37982__auto__,c__38096__auto__,newdlimap){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0 = (function (){
var statearr_53065 = [null,null,null,null,null,null,null];
(statearr_53065[(0)] = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__);

(statearr_53065[(1)] = (1));

return statearr_53065;
});
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1 = (function (state_53060){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53060);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53066){if((e53066 instanceof Object)){
var ex__37986__auto__ = e53066;
var statearr_53067_53089 = state_53060;
(statearr_53067_53089[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53060);

return cljs.core.cst$kw$recur;
} else {
throw e53066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53090 = state_53060;
state_53060 = G__53090;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__ = function(state_53060){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1.call(this,state_53060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__,newdlimap))
})();
var state__38098__auto__ = (function (){var statearr_53068 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__,newdlimap))
);

return c__38096__auto__;
});})(newdlimap))
,((function (newdlimap){
return (function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__,newdlimap){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__,newdlimap){
return (function (state_53077){
var state_val_53078 = (state_53077[(1)]);
if((state_val_53078 === (1))){
var inst_53069 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_53070 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_53071 = gcclocal.comm.utils.get_errors_str_from_map(inst_53070);
var inst_53072 = [inst_53071,"error"];
var inst_53073 = cljs.core.PersistentHashMap.fromArrays(inst_53069,inst_53072);
var state_53077__$1 = state_53077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53077__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_53073);
} else {
if((state_val_53078 === (2))){
var inst_53075 = (state_53077[(2)]);
var state_53077__$1 = state_53077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53077__$1,inst_53075);
} else {
return null;
}
}
});})(c__38096__auto__,newdlimap))
;
return ((function (switch__37982__auto__,c__38096__auto__,newdlimap){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0 = (function (){
var statearr_53082 = [null,null,null,null,null,null,null];
(statearr_53082[(0)] = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__);

(statearr_53082[(1)] = (1));

return statearr_53082;
});
var gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1 = (function (state_53077){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53077);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53083){if((e53083 instanceof Object)){
var ex__37986__auto__ = e53083;
var statearr_53084_53091 = state_53077;
(statearr_53084_53091[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53077);

return cljs.core.cst$kw$recur;
} else {
throw e53083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53092 = state_53077;
state_53077 = G__53092;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__ = function(state_53077){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1.call(this,state_53077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$confirm_newsyncdli_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__,newdlimap))
})();
var state__38098__auto__ = (function (){var statearr_53085 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__,newdlimap))
);

return c__38096__auto__;
});})(newdlimap))
);
});
/**
 * Отменить новую поставку (удалить)
 */
gcclocal.primarydocs.departurelogistinfos.delete_newsyncdli = (function gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli(newdli_id){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["deleting ",newdli_id], 0));

return gcclocal.comm.utils.post_json_with_success_check("/primarydocs/deletenewsync",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,newdli_id], null),(function (_){
var c__38096__auto___53181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___53181){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___53181){
return (function (state_53143){
var state_val_53144 = (state_53143[(1)]);
if((state_val_53144 === (1))){
var inst_53137 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_53138 = ["\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430","success"];
var inst_53139 = cljs.core.PersistentHashMap.fromArrays(inst_53137,inst_53138);
var state_53143__$1 = state_53143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53143__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_53139);
} else {
if((state_val_53144 === (2))){
var inst_53141 = (state_53143[(2)]);
var state_53143__$1 = state_53143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53143__$1,inst_53141);
} else {
return null;
}
}
});})(c__38096__auto___53181))
;
return ((function (switch__37982__auto__,c__38096__auto___53181){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0 = (function (){
var statearr_53148 = [null,null,null,null,null,null,null];
(statearr_53148[(0)] = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__);

(statearr_53148[(1)] = (1));

return statearr_53148;
});
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1 = (function (state_53143){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53143);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53149){if((e53149 instanceof Object)){
var ex__37986__auto__ = e53149;
var statearr_53150_53182 = state_53143;
(statearr_53150_53182[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53143);

return cljs.core.cst$kw$recur;
} else {
throw e53149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53183 = state_53143;
state_53143 = G__53183;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__ = function(state_53143){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1.call(this,state_53143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___53181))
})();
var state__38098__auto__ = (function (){var statearr_53151 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___53181);

return statearr_53151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___53181))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_53155){
var state_val_53156 = (state_53155[(1)]);
if((state_val_53156 === (1))){
var state_53155__$1 = state_53155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53155__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,cljs.core.cst$kw$reset_DASH_none);
} else {
if((state_val_53156 === (2))){
var inst_53153 = (state_53155[(2)]);
var state_53155__$1 = state_53155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53155__$1,inst_53153);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0 = (function (){
var statearr_53160 = [null,null,null,null,null,null,null];
(statearr_53160[(0)] = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__);

(statearr_53160[(1)] = (1));

return statearr_53160;
});
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1 = (function (state_53155){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53155);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53161){if((e53161 instanceof Object)){
var ex__37986__auto__ = e53161;
var statearr_53162_53184 = state_53155;
(statearr_53162_53184[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53155);

return cljs.core.cst$kw$recur;
} else {
throw e53161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53185 = state_53155;
state_53155 = G__53185;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__ = function(state_53155){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1.call(this,state_53155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_53163 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_53172){
var state_val_53173 = (state_53172[(1)]);
if((state_val_53173 === (1))){
var inst_53164 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_53165 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_53166 = gcclocal.comm.utils.get_errors_str_from_map(inst_53165);
var inst_53167 = [inst_53166,"error"];
var inst_53168 = cljs.core.PersistentHashMap.fromArrays(inst_53164,inst_53167);
var state_53172__$1 = state_53172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53172__$1,(2),gcclocal.primarydocs.departurelogistinfos.notify_ch,inst_53168);
} else {
if((state_val_53173 === (2))){
var inst_53170 = (state_53172[(2)]);
var state_53172__$1 = state_53172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53172__$1,inst_53170);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0 = (function (){
var statearr_53177 = [null,null,null,null,null,null,null];
(statearr_53177[(0)] = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__);

(statearr_53177[(1)] = (1));

return statearr_53177;
});
var gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1 = (function (state_53172){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53172);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53178){if((e53178 instanceof Object)){
var ex__37986__auto__ = e53178;
var statearr_53179_53186 = state_53172;
(statearr_53179_53186[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53172);

return cljs.core.cst$kw$recur;
} else {
throw e53178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53187 = state_53172;
state_53172 = G__53187;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__ = function(state_53172){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1.call(this,state_53172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$delete_newsyncdli_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_53180 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_53180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
gcclocal.primarydocs.departurelogistinfos.extract_add_row = (function gcclocal$primarydocs$departurelogistinfos$extract_add_row(){
return gcclocal.comm.utils.extract_row_from_fields(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shipping_date,cljs.core.cst$kw$client_application_id,cljs.core.cst$kw$supplier_id,cljs.core.cst$kw$from_station_id,cljs.core.cst$kw$to_station_id,cljs.core.cst$kw$station_status_id,cljs.core.cst$kw$wagon_number,cljs.core.cst$kw$arrival_date,cljs.core.cst$kw$travel_time,cljs.core.cst$kw$cost], null),"add");
});
gcclocal.primarydocs.departurelogistinfos.extract_edit_row = (function gcclocal$primarydocs$departurelogistinfos$extract_edit_row(){
return gcclocal.comm.utils.extract_row_from_fields(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shipping_date,cljs.core.cst$kw$client_application_id,cljs.core.cst$kw$supplier_id,cljs.core.cst$kw$from_station_id,cljs.core.cst$kw$to_station_id,cljs.core.cst$kw$station_status_id,cljs.core.cst$kw$wagon_number,cljs.core.cst$kw$arrival_date,cljs.core.cst$kw$travel_time,cljs.core.cst$kw$cost], null),"edit");
});
gcclocal.primarydocs.departurelogistinfos.find_travel_time = (function gcclocal$primarydocs$departurelogistinfos$find_travel_time(station_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(gcclocal.comm.utils.find_some((function (p1__53188_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$station_id.cljs$core$IFn$_invoke$arity$1(p1__53188_SHARP_),cljs.reader.read_string(station_id));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.stationtraveltimes_list) : cljs.core.deref.call(null,gcclocal.primarydocs.departurelogistinfos.stationtraveltimes_list))),cljs.core.cst$kw$days_in_travel);
});
/**
 * Выгрузить в excel
 */
gcclocal.primarydocs.departurelogistinfos.load_to_excel = (function gcclocal$primarydocs$departurelogistinfos$load_to_excel(){
var url = cljs.core.cst$kw$load_DASH_to_DASH_excel.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["load-to-excel! ",url], 0));

var current_state_cursor = cljs.core.cst$kw$app_DASH_state.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
var sort_field = (function (){var G__53192 = cljs.core.cst$kw$sort_DASH_field.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53192) : cljs.core.deref.call(null,G__53192));
})();
var desc_sort_QMARK_ = (function (){var G__53193 = cljs.core.cst$kw$desc_DASH_sort_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53193) : cljs.core.deref.call(null,G__53193));
})();
var show_mode = (function (){var G__53194 = cljs.core.cst$kw$show_DASH_mode.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53194) : cljs.core.deref.call(null,G__53194));
})();
return window.open([cljs.core.str(url),cljs.core.str("?"),cljs.core.str(gcclocal.comm.utils.params_to_url_str(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ordering,[cljs.core.str((cljs.core.truth_(desc_sort_QMARK_)?"-":"")),cljs.core.str(sort_field)].join(''),cljs.core.cst$kw$search,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_state_cursor) : cljs.core.deref.call(null,current_state_cursor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_DASH_and_DASH_filters,cljs.core.cst$kw$search_DASH_str], null)),cljs.core.cst$kw$showmode,show_mode], null)))].join(''));
});
gcclocal.primarydocs.departurelogistinfos.config_headers = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440.",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"shipping_date"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u041D\u043E\u043C\u0435\u0440 \u0432\u0430\u0433\u043E\u043D\u0430",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"wagon_number"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0421\u0442.\u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",cljs.core.cst$kw$wideness,"two",cljs.core.cst$kw$sort_DASH_field,"from_station"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0421\u0442.\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",cljs.core.cst$kw$wideness,"two",cljs.core.cst$kw$sort_DASH_field,"to_station"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0421\u0442\u0430\u0442\u0443\u0441 (\u0442\u0435\u043A.\u0441\u0442\u0430\u043D\u0446\u0438\u044F)",cljs.core.cst$kw$wideness,"two",cljs.core.cst$kw$sort_DASH_field,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0414\u0430\u0442\u0430 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"arrival_date"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0412\u0440\u0435\u043C\u044F \u0432 \u043F\u0443\u0442\u0438 \u0434\u043D (\u043E\u0436\u0438\u0434.)",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"travel_time"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0412\u0440\u0435\u043C\u044F \u0432 \u043F\u0443\u0442\u0438(\u0444\u0430\u043A\u0442.)",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"days_fact"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0417\u0430\u044F\u0432\u043A\u0430",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"client_application"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u041A\u043B\u0438\u0435\u043D\u0442",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"client_name"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",cljs.core.cst$kw$wideness,"two",cljs.core.cst$kw$sort_DASH_field,"supplier_name"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"\u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",cljs.core.cst$kw$wideness,"one",cljs.core.cst$kw$sort_DASH_field,"cost"], null)], null);
gcclocal.primarydocs.departurelogistinfos.config_fields = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.date_with_calendar_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$shipping_date], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.text_field_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$wagon_number], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.select_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$from_station_id,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.stations_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,(function (p1__53195_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53195_SHARP_);
}),cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",cljs.core.cst$kw$nullable_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.select_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$to_station_id,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.stations_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,(function (p1__53196_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53196_SHARP_);
}),cljs.core.cst$kw$on_DASH_change_DASH_fn,(function (v,t){
var tr_time = gcclocal.primarydocs.departurelogistinfos.find_travel_time(v);
$(".edit-travel_time").val(tr_time);

return $(".add-travel_time").val(tr_time);
}),cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",cljs.core.cst$kw$nullable_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.plain_text_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$station_status_name], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.date_with_calendar_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$arrival_date,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nullable_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.number_field_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$travel_time], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.custom_view,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$custom_DASH_fn,(function (p1__53197_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$d_status.cljs$core$IFn$_invoke$arity$1(p1__53197_SHARP_),(1))){
var days_fact = cljs.core.cst$kw$days_fact.cljs$core$IFn$_invoke$arity$1(p1__53197_SHARP_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,(((days_fact > cljs.core.cst$kw$travel_time.cljs$core$IFn$_invoke$arity$1(p1__53197_SHARP_)))?"bold":"normal")], null)], null),days_fact], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.select_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$client_application_id,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.clientapplications_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,(function (p1__53198_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53198_SHARP_);
}),cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",cljs.core.cst$kw$nullable_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.select_readonly_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$client_id,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.clients_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,(function (p1__53199_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53199_SHARP_);
}),cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.select_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$supplier_id,cljs.core.cst$kw$misc_DASH_params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.suppliers_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,(function (p1__53200_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53200_SHARP_);
}),cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",cljs.core.cst$kw$nullable_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,gcclocal.views.crud_fields.money_field_view,cljs.core.cst$kw$field_DASH_name,cljs.core.cst$kw$cost], null)], null);
/**
 * 
 */
gcclocal.primarydocs.departurelogistinfos.top_panel = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (add_mode_QMARK_,add_disabled_QMARK_,on_click_add_fn,search_str,search_fn,show_mode,selected_row,selected_type){
var G__53201 = "div";
var G__53202 = {"className": "ui basic clearing segment no-padding-segment"};
var G__53203 = (function (){var G__53210 = "div";
var G__53211 = {"style": {"float": "left", "marginRight": "20px"}};
var G__53212 = (function (){var G__53213 = "div";
var G__53214 = {"className": "ui compact small right floated menu"};
var G__53215 = (function (){var G__53218 = "a";
var G__53219 = {"onClick": ((function (G__53218,G__53213,G__53214,G__53210,G__53211,G__53201,G__53202){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.change_show_mode("active");
});})(G__53218,G__53213,G__53214,G__53210,G__53211,G__53201,G__53202))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_mode,"active"))?"active":"")], null))};
var G__53220 = "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435";
return React.createElement(G__53218,G__53219,G__53220);
})();
var G__53216 = (function (){var G__53221 = "a";
var G__53222 = {"onClick": ((function (G__53221,G__53213,G__53214,G__53215,G__53210,G__53211,G__53201,G__53202){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.change_show_mode("finished");
});})(G__53221,G__53213,G__53214,G__53215,G__53210,G__53211,G__53201,G__53202))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_mode,"finished"))?"active":"")], null))};
var G__53223 = "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435";
return React.createElement(G__53221,G__53222,G__53223);
})();
var G__53217 = (function (){var G__53224 = "a";
var G__53225 = {"onClick": ((function (G__53224,G__53213,G__53214,G__53215,G__53216,G__53210,G__53211,G__53201,G__53202){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.change_show_mode("all");
});})(G__53224,G__53213,G__53214,G__53215,G__53216,G__53210,G__53211,G__53201,G__53202))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_mode,"all"))?"active":"")], null))};
var G__53226 = "\u0412\u0441\u0435";
return React.createElement(G__53224,G__53225,G__53226);
})();
return React.createElement(G__53213,G__53214,G__53215,G__53216,G__53217);
})();
return React.createElement(G__53210,G__53211,G__53212);
})();
var G__53204 = sablono.interpreter.interpret((((cljs.core.not(add_mode_QMARK_)) && (cljs.core.not(add_disabled_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_type,cljs.core.cst$kw$newdli)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"left"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$primary$labeled$icon$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,on_click_add_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$plus$icon], null),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"], null)], null):null));
var G__53205 = sablono.interpreter.interpret((((!((selected_row == null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_type,cljs.core.cst$kw$row)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.cst$kw$d_status.cljs$core$IFn$_invoke$arity$1(selected_row))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$green$labeled$icon$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__53201,G__53202,G__53203,G__53204){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.finish_row(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(selected_row));
});})(G__53201,G__53202,G__53203,G__53204))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$checkmark$icon], null),"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"], null):null));
var G__53206 = sablono.interpreter.interpret((((!((selected_row == null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_type,cljs.core.cst$kw$row)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.cst$kw$d_status.cljs$core$IFn$_invoke$arity$1(selected_row))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$yellow$labeled$icon$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__53201,G__53202,G__53203,G__53204,G__53205){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.unfinish_row(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(selected_row));
});})(G__53201,G__53202,G__53203,G__53204,G__53205))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$undo$icon], null),"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435"], null):null));
var G__53207 = sablono.interpreter.interpret((((!((selected_row == null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_type,cljs.core.cst$kw$newdli)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$labeled$icon$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__53201,G__53202,G__53203,G__53204,G__53205,G__53206){
return (function (){
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$2("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0435\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0443?",((function (G__53201,G__53202,G__53203,G__53204,G__53205,G__53206){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.delete_newsyncdli(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(selected_row));
});})(G__53201,G__53202,G__53203,G__53204,G__53205,G__53206))
);
});})(G__53201,G__53202,G__53203,G__53204,G__53205,G__53206))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ban$icon], null),"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"], null):null));
var G__53208 = (function (){var G__53229 = "div";
var G__53230 = {"onClick": gcclocal.primarydocs.departurelogistinfos.load_to_excel, "className": "ui labeled icon button"};
var G__53231 = (function (){var G__53233 = "i";
var G__53234 = {"className": "file excel outline icon"};
return React.createElement(G__53233,G__53234);
})();
var G__53232 = "\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432 Excel";
return React.createElement(G__53229,G__53230,G__53231,G__53232);
})();
var G__53209 = sablono.interpreter.interpret((gcclocal.views.crud_views.search_input_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.views.crud_views.search_input_view.cljs$core$IFn$_invoke$arity$2(search_str,search_fn) : gcclocal.views.crud_views.search_input_view.call(null,search_str,search_fn)));
return React.createElement(G__53201,G__53202,G__53203,G__53204,G__53205,G__53206,G__53207,G__53208,G__53209);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"top-panel");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__53235__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__53235 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__53236__i = 0, G__53236__a = new Array(arguments.length -  0);
while (G__53236__i < G__53236__a.length) {G__53236__a[G__53236__i] = arguments[G__53236__i + 0]; ++G__53236__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__53236__a,0);
} 
return G__53235__delegate.call(this,args__42471__auto__);};
G__53235.cljs$lang$maxFixedArity = 0;
G__53235.cljs$lang$applyTo = (function (arglist__53237){
var args__42471__auto__ = cljs.core.seq(arglist__53237);
return G__53235__delegate(args__42471__auto__);
});
G__53235.cljs$core$IFn$_invoke$arity$variadic = G__53235__delegate;
return G__53235;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для выбора станций относительно пришедшей с сервиса
 */
gcclocal.primarydocs.departurelogistinfos.td_dli_station_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,station_name,station_code,class_name){
var f_station = gcclocal.comm.utils.find_some((function (p1__53238_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(station_code,cljs.core.cst$kw$sync_station_code.cljs$core$IFn$_invoke$arity$1(p1__53238_SHARP_));
}),rum.core.react(gcclocal.primarydocs.departurelogistinfos.stations_list));
var attrs53240 = station_name;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53240))?sablono.interpreter.attributes(attrs53240):null),((cljs.core.map_QMARK_(attrs53240))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__53241 = edit_mode_QMARK_;
var G__53242 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(f_station);
var G__53243 = class_name;
var G__53244 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.stations_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,((function (G__53241,G__53242,G__53243,attrs53240,f_station){
return (function (p1__53239_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53239_SHARP_);
});})(G__53241,G__53242,G__53243,attrs53240,f_station))
,cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0446\u0438\u044E",cljs.core.cst$kw$on_DASH_change_DASH_fn,((function (G__53241,G__53242,G__53243,attrs53240,f_station){
return (function (v,t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"syncadd-to_station_id")){
var tr_time = gcclocal.primarydocs.departurelogistinfos.find_travel_time(v);
return $(".syncadd-travel_time").val(tr_time);
} else {
return null;
}
});})(G__53241,G__53242,G__53243,attrs53240,f_station))
,cljs.core.cst$kw$nullable_QMARK_,false], null);
return (gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4(G__53241,G__53242,G__53243,G__53244) : gcclocal.views.crud_fields.select_view.call(null,G__53241,G__53242,G__53243,G__53244));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53240),sablono.interpreter.interpret((function (){var G__53245 = edit_mode_QMARK_;
var G__53246 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(f_station);
var G__53247 = class_name;
var G__53248 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.stations_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,((function (G__53245,G__53246,G__53247,attrs53240,f_station){
return (function (p1__53239_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53239_SHARP_);
});})(G__53245,G__53246,G__53247,attrs53240,f_station))
,cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0446\u0438\u044E",cljs.core.cst$kw$on_DASH_change_DASH_fn,((function (G__53245,G__53246,G__53247,attrs53240,f_station){
return (function (v,t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"syncadd-to_station_id")){
var tr_time = gcclocal.primarydocs.departurelogistinfos.find_travel_time(v);
return $(".syncadd-travel_time").val(tr_time);
} else {
return null;
}
});})(G__53245,G__53246,G__53247,attrs53240,f_station))
,cljs.core.cst$kw$nullable_QMARK_,false], null);
return (gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4(G__53245,G__53246,G__53247,G__53248) : gcclocal.views.crud_fields.select_view.call(null,G__53245,G__53246,G__53247,G__53248));
})())], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"td-dli-station-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__53249__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__53249 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__53250__i = 0, G__53250__a = new Array(arguments.length -  0);
while (G__53250__i < G__53250__a.length) {G__53250__a[G__53250__i] = arguments[G__53250__i + 0]; ++G__53250__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__53250__a,0);
} 
return G__53249__delegate.call(this,args__42471__auto__);};
G__53249.cljs$lang$maxFixedArity = 0;
G__53249.cljs$lang$applyTo = (function (arglist__53251){
var args__42471__auto__ = cljs.core.seq(arglist__53251);
return G__53249__delegate(args__42471__auto__);
});
G__53249.cljs$core$IFn$_invoke$arity$variadic = G__53249__delegate;
return G__53249;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Строка с новой поставкой, ожидающей подтверждения
 */
gcclocal.primarydocs.departurelogistinfos.new_dli_tr_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (newdli,selected_QMARK_,edit_mode_QMARK_){
var in_edit_QMARK_ = (function (){var and__30375__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30375__auto__)){
return edit_mode_QMARK_;
} else {
return and__30375__auto__;
}
})();
var G__53265 = "tr";
var G__53266 = {"onClick": ((function (G__53265,in_edit_QMARK_){
return (function (){
return gcclocal.primarydocs.departurelogistinfos.select_new_dli_row(newdli);
});})(G__53265,in_edit_QMARK_))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(selected_QMARK_)?"active":"")),cljs.core.str(" ")].join('')], null))};
var G__53267 = (function (){var attrs53256 = (function (){var G__53278 = in_edit_QMARK_;
var G__53279 = cljs.core.cst$kw$shipping_date.cljs$core$IFn$_invoke$arity$1(newdli);
return (gcclocal.views.crud_fields.date_readonly_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.views.crud_fields.date_readonly_view.cljs$core$IFn$_invoke$arity$2(G__53278,G__53279) : gcclocal.views.crud_fields.date_readonly_view.call(null,G__53278,G__53279));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53256))?sablono.interpreter.attributes(attrs53256):null),((cljs.core.map_QMARK_(attrs53256))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53256)], null)));
})();
var G__53268 = (function (){var attrs53257 = cljs.core.cst$kw$wagon_number.cljs$core$IFn$_invoke$arity$1(newdli);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53257))?sablono.interpreter.attributes(attrs53257):null),((cljs.core.map_QMARK_(attrs53257))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53257)], null)));
})();
var G__53269 = sablono.interpreter.interpret((function (){var G__53280 = in_edit_QMARK_;
var G__53281 = cljs.core.cst$kw$from_station_name.cljs$core$IFn$_invoke$arity$1(newdli);
var G__53282 = cljs.core.cst$kw$from_station_code.cljs$core$IFn$_invoke$arity$1(newdli);
var G__53283 = "syncadd-from_station_id";
return (gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.cljs$core$IFn$_invoke$arity$4(G__53280,G__53281,G__53282,G__53283) : gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.call(null,G__53280,G__53281,G__53282,G__53283));
})());
var G__53270 = sablono.interpreter.interpret((function (){var G__53284 = in_edit_QMARK_;
var G__53285 = cljs.core.cst$kw$to_station_name.cljs$core$IFn$_invoke$arity$1(newdli);
var G__53286 = cljs.core.cst$kw$to_station_code.cljs$core$IFn$_invoke$arity$1(newdli);
var G__53287 = "syncadd-to_station_id";
return (gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.cljs$core$IFn$_invoke$arity$4(G__53284,G__53285,G__53286,G__53287) : gcclocal.primarydocs.departurelogistinfos.td_dli_station_view.call(null,G__53284,G__53285,G__53286,G__53287));
})());
var G__53271 = (function (){var attrs53258 = cljs.core.cst$kw$current_station_name.cljs$core$IFn$_invoke$arity$1(newdli);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53258))?sablono.interpreter.attributes(attrs53258):null),((cljs.core.map_QMARK_(attrs53258))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53258)], null)));
})();
var G__53272 = (function (){var attrs53259 = (gcclocal.views.crud_fields.number_field_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_fields.number_field_view.cljs$core$IFn$_invoke$arity$3(in_edit_QMARK_,null,"syncadd-travel_time") : gcclocal.views.crud_fields.number_field_view.call(null,in_edit_QMARK_,null,"syncadd-travel_time"));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53259))?sablono.interpreter.attributes(attrs53259):null),((cljs.core.map_QMARK_(attrs53259))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53259)], null)));
})();
var G__53273 = (function (){var attrs53260 = (function (){var G__53288 = in_edit_QMARK_;
var G__53289 = null;
var G__53290 = "syncadd-client_application_id";
var G__53291 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.clientapplications_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,((function (G__53288,G__53289,G__53290,G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,in_edit_QMARK_){
return (function (p1__53252_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53252_SHARP_);
});})(G__53288,G__53289,G__53290,G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,in_edit_QMARK_))
,cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",cljs.core.cst$kw$nullable_QMARK_,false], null);
return (gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4(G__53288,G__53289,G__53290,G__53291) : gcclocal.views.crud_fields.select_view.call(null,G__53288,G__53289,G__53290,G__53291));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53260))?sablono.interpreter.attributes(attrs53260):null),((cljs.core.map_QMARK_(attrs53260))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53260)], null)));
})();
var G__53274 = (function (){var attrs53261 = (function (){var G__53292 = in_edit_QMARK_;
var G__53293 = null;
var G__53294 = "syncadd-supplier_id";
var G__53295 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$select_DASH_options,gcclocal.primarydocs.departurelogistinfos.suppliers_list,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn,((function (G__53292,G__53293,G__53294,G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,G__53273,in_edit_QMARK_){
return (function (p1__53253_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__53253_SHARP_);
});})(G__53292,G__53293,G__53294,G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,G__53273,in_edit_QMARK_))
,cljs.core.cst$kw$default_DASH_text,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",cljs.core.cst$kw$nullable_QMARK_,false], null);
return (gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.views.crud_fields.select_view.cljs$core$IFn$_invoke$arity$4(G__53292,G__53293,G__53294,G__53295) : gcclocal.views.crud_fields.select_view.call(null,G__53292,G__53293,G__53294,G__53295));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53261))?sablono.interpreter.attributes(attrs53261):null),((cljs.core.map_QMARK_(attrs53261))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53261)], null)));
})();
var G__53275 = (function (){var attrs53262 = (gcclocal.views.crud_fields.money_field_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_fields.money_field_view.cljs$core$IFn$_invoke$arity$3(in_edit_QMARK_,null,"syncadd-cost") : gcclocal.views.crud_fields.money_field_view.call(null,in_edit_QMARK_,null,"syncadd-cost"));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53262))?sablono.interpreter.attributes(attrs53262):null),((cljs.core.map_QMARK_(attrs53262))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53262)], null)));
})();
var G__53276 = (function (){var attrs53263 = (gcclocal.views.crud_fields.number_field_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_fields.number_field_view.cljs$core$IFn$_invoke$arity$3(in_edit_QMARK_,(69),"syncadd-wagon_amount") : gcclocal.views.crud_fields.number_field_view.call(null,in_edit_QMARK_,(69),"syncadd-wagon_amount"));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53263))?sablono.interpreter.attributes(attrs53263):null),((cljs.core.map_QMARK_(attrs53263))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53263)], null)));
})();
var G__53277 = (function (){var attrs53264 = (cljs.core.truth_(in_edit_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$green$icon$tiny$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",cljs.core.cst$kw$on_DASH_click,((function (G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,G__53273,G__53274,G__53275,G__53276,in_edit_QMARK_){
return (function (p1__53254_SHARP_){
gcclocal.primarydocs.departurelogistinfos.confirm_newsyncdli(newdli);

return p1__53254_SHARP_.stopPropagation();
});})(G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,G__53273,G__53274,G__53275,G__53276,in_edit_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$checkmark$icon], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$red$icon$tiny$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u041E\u0442\u043C\u0435\u043D\u0430",cljs.core.cst$kw$on_DASH_click,((function (G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,G__53273,G__53274,G__53275,G__53276,in_edit_QMARK_){
return (function (p1__53255_SHARP_){
gcclocal.primarydocs.departurelogistinfos.select_new_dli_row(newdli);

return p1__53255_SHARP_.stopPropagation();
});})(G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,G__53273,G__53274,G__53275,G__53276,in_edit_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$remove$icon], null)], null)], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs53264))?sablono.interpreter.attributes(attrs53264):null),((cljs.core.map_QMARK_(attrs53264))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53264)], null)));
})();
return React.createElement(G__53265,G__53266,G__53267,G__53268,G__53269,G__53270,G__53271,G__53272,G__53273,G__53274,G__53275,G__53276,G__53277);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"new-dli-tr-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__53296__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__53296 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__53297__i = 0, G__53297__a = new Array(arguments.length -  0);
while (G__53297__i < G__53297__a.length) {G__53297__a[G__53297__i] = arguments[G__53297__i + 0]; ++G__53297__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__53297__a,0);
} 
return G__53296__delegate.call(this,args__42471__auto__);};
G__53296.cljs$lang$maxFixedArity = 0;
G__53296.cljs$lang$applyTo = (function (arglist__53298){
var args__42471__auto__ = cljs.core.seq(arglist__53298);
return G__53296__delegate(args__42471__auto__);
});
G__53296.cljs$core$IFn$_invoke$arity$variadic = G__53296__delegate;
return G__53296;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Новые поставки для подтверждения с sigis
 */
gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (newdlis,selected_item,edit_mode_QMARK_){
var G__53301 = "div";
var G__53302 = {"className": "sync-new-dlis"};
var G__53303 = (function (){var attrs53300 = [cljs.core.str("\u041D\u043E\u0432\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044E ("),cljs.core.str(cljs.core.count(newdlis)),cljs.core.str(")")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs53300))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","teal","header"], null)], null),attrs53300], 0))):{"className": "ui teal header"}),((cljs.core.map_QMARK_(attrs53300))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53300)], null)));
})();
var G__53304 = (function (){var G__53308 = "table";
var G__53309 = {"className": "ui small selectable celled fixed table with-overflow-tds"};
var G__53310 = (function (){var G__53389 = "thead";
var G__53390 = null;
var G__53391 = (function (){var G__53424 = "tr";
var G__53425 = null;
var G__53426 = (function (){var G__53437 = "th";
var G__53438 = {"className": "one wide"};
var G__53439 = "\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440.";
return React.createElement(G__53437,G__53438,G__53439);
})();
var G__53427 = (function (){var G__53440 = "th";
var G__53441 = {"className": "one wide"};
var G__53442 = "\u041D\u043E\u043C\u0435\u0440 \u0432\u0430\u0433\u043E\u043D\u0430";
return React.createElement(G__53440,G__53441,G__53442);
})();
var G__53428 = (function (){var G__53443 = "th";
var G__53444 = {"className": "two wide"};
var G__53445 = "\u0421\u0442.\u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F";
return React.createElement(G__53443,G__53444,G__53445);
})();
var G__53429 = (function (){var G__53446 = "th";
var G__53447 = {"className": "two wide"};
var G__53448 = "\u0421\u0442.\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F";
return React.createElement(G__53446,G__53447,G__53448);
})();
var G__53430 = (function (){var G__53449 = "th";
var G__53450 = {"className": "two wide"};
var G__53451 = "\u0421\u0442\u0430\u0442\u0443\u0441 (\u0442\u0435\u043A.\u0441\u0442\u0430\u043D\u0446\u0438\u044F)";
return React.createElement(G__53449,G__53450,G__53451);
})();
var G__53431 = (function (){var G__53452 = "th";
var G__53453 = {"className": "one wide"};
var G__53454 = "\u0412\u0440\u0435\u043C\u044F \u0432 \u043F\u0443\u0442\u0438 (\u043E\u0436\u0438\u0434.)";
return React.createElement(G__53452,G__53453,G__53454);
})();
var G__53432 = (function (){var G__53455 = "th";
var G__53456 = {"className": "two wide"};
var G__53457 = "\u0417\u0430\u044F\u0432\u043A\u0430";
return React.createElement(G__53455,G__53456,G__53457);
})();
var G__53433 = (function (){var G__53458 = "th";
var G__53459 = {"className": "two wide"};
var G__53460 = "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A";
return React.createElement(G__53458,G__53459,G__53460);
})();
var G__53434 = (function (){var G__53461 = "th";
var G__53462 = {"className": "two wide"};
var G__53463 = "\u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C";
return React.createElement(G__53461,G__53462,G__53463);
})();
var G__53435 = (function (){var G__53464 = "th";
var G__53465 = {"className": "one wide"};
var G__53466 = "\u0412\u0435\u0441 \u0433\u0440\u0443\u0437\u0430";
return React.createElement(G__53464,G__53465,G__53466);
})();
var G__53436 = (function (){var G__53467 = "th";
var G__53468 = {"className": "control-th"};
return React.createElement(G__53467,G__53468);
})();
return React.createElement(G__53424,G__53425,G__53426,G__53427,G__53428,G__53429,G__53430,G__53431,G__53432,G__53433,G__53434,G__53435,G__53436);
})();
return React.createElement(G__53389,G__53390,G__53391);
})();
var G__53311 = (function (){var attrs53307 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__53308,G__53309,G__53310,G__53301,G__53302,G__53303){
return (function (p1__53299_SHARP_){
var G__53469 = p1__53299_SHARP_;
var G__53470 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_item,p1__53299_SHARP_);
var G__53471 = edit_mode_QMARK_;
return (gcclocal.primarydocs.departurelogistinfos.new_dli_tr_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.primarydocs.departurelogistinfos.new_dli_tr_view.cljs$core$IFn$_invoke$arity$3(G__53469,G__53470,G__53471) : gcclocal.primarydocs.departurelogistinfos.new_dli_tr_view.call(null,G__53469,G__53470,G__53471));
});})(G__53308,G__53309,G__53310,G__53301,G__53302,G__53303))
,newdlis);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs53307))?sablono.interpreter.attributes(attrs53307):null),((cljs.core.map_QMARK_(attrs53307))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53307)], null)));
})();
return React.createElement(G__53308,G__53309,G__53310,G__53311);
})();
return React.createElement(G__53301,G__53302,G__53303,G__53304);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"sync-new-dlis-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__53472__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__53472 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__53473__i = 0, G__53473__a = new Array(arguments.length -  0);
while (G__53473__i < G__53473__a.length) {G__53473__a[G__53473__i] = arguments[G__53473__i + 0]; ++G__53473__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__53473__a,0);
} 
return G__53472__delegate.call(this,args__42471__auto__);};
G__53472.cljs$lang$maxFixedArity = 0;
G__53472.cljs$lang$applyTo = (function (arglist__53474){
var args__42471__auto__ = cljs.core.seq(arglist__53474);
return G__53472__delegate(args__42471__auto__);
});
G__53472.cljs$core$IFn$_invoke$arity$variadic = G__53472__delegate;
return G__53472;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
var G__53475_53477 = gcclocal.comm.utils.current_date();
var G__53476_53478 = gcclocal.comm.utils.add_days_moment(gcclocal.comm.utils.iso_str__GT_moment("2016-07-15T00:00:00Z"),(14));
(gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2 ? gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2(G__53475_53477,G__53476_53478) : gcclocal.comm.utils.moment_after_QMARK_.call(null,G__53475_53477,G__53476_53478));
/**
 * 
 */
gcclocal.primarydocs.departurelogistinfos.main_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (){
var current_app_state = rum.core.react(cljs.core.cst$kw$app_DASH_state.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors));
var newdlis = rum.core.react(rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$newdlis], null)));
var selected_type = rum.core.react(rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_type], null)));
var attrs53486 = (function (){var G__53488 = (function (){var G__53491 = cljs.core.cst$kw$pagination.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53491) : cljs.core.deref.call(null,G__53491));
})();
var G__53489 = (function (){var G__53492 = cljs.core.cst$kw$total_DASH_c.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53492) : cljs.core.deref.call(null,G__53492));
})();
var G__53490 = gcclocal.primarydocs.departurelogistinfos.change_page_ch;
return (gcclocal.comm.pagination.pagination_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.comm.pagination.pagination_view.cljs$core$IFn$_invoke$arity$3(G__53488,G__53489,G__53490) : gcclocal.comm.pagination.pagination_view.call(null,G__53488,G__53489,G__53490));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53486))?sablono.interpreter.attributes(attrs53486):null),((cljs.core.map_QMARK_(attrs53486))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__53494 = (function (){var G__53502 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53502) : cljs.core.deref.call(null,G__53502));
})();
var G__53495 = (function (){var G__53503 = cljs.core.cst$kw$add_DASH_disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53503) : cljs.core.deref.call(null,G__53503));
})();
var G__53496 = ((function (G__53494,G__53495,attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(G__53494,G__53495,attrs53486,current_app_state,newdlis,selected_type))
;
var G__53497 = (function (){var G__53504 = cljs.core.cst$kw$search_DASH_str.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53504) : cljs.core.deref.call(null,G__53504));
})();
var G__53498 = ((function (G__53494,G__53495,G__53496,G__53497,attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53479_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53479_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(G__53494,G__53495,G__53496,G__53497,attrs53486,current_app_state,newdlis,selected_type))
;
var G__53499 = (function (){var G__53505 = cljs.core.cst$kw$show_DASH_mode.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53505) : cljs.core.deref.call(null,G__53505));
})();
var G__53500 = (function (){var G__53506 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53506) : cljs.core.deref.call(null,G__53506));
})();
var G__53501 = selected_type;
return (gcclocal.primarydocs.departurelogistinfos.top_panel.cljs$core$IFn$_invoke$arity$8 ? gcclocal.primarydocs.departurelogistinfos.top_panel.cljs$core$IFn$_invoke$arity$8(G__53494,G__53495,G__53496,G__53497,G__53498,G__53499,G__53500,G__53501) : gcclocal.primarydocs.departurelogistinfos.top_panel.call(null,G__53494,G__53495,G__53496,G__53497,G__53498,G__53499,G__53500,G__53501));
})()),sablono.interpreter.interpret((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__53508 = cljs.core.cst$kw$show_DASH_mode.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53508) : cljs.core.deref.call(null,G__53508));
})(),"finished")) && (cljs.core.not(gcclocal.comm.utils.nil_or_empty_QMARK_(newdlis))))?(function (){var G__53510 = newdlis;
var G__53511 = (function (){var G__53513 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53513) : cljs.core.deref.call(null,G__53513));
})();
var G__53512 = rum.core.react(rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edit_DASH_new_DASH_dli_QMARK_], null)));
return (gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.cljs$core$IFn$_invoke$arity$3(G__53510,G__53511,G__53512) : gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.call(null,G__53510,G__53511,G__53512));
})():null)),sablono.interpreter.interpret((function (){var G__53525 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$delete_DASH_disabled_QMARK_,cljs.core.cst$kw$sort_DASH_fn,cljs.core.cst$kw$select_DASH_row_DASH_fn,cljs.core.cst$kw$edit_DASH_mode_QMARK_,cljs.core.cst$kw$start_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_row_DASH_fn,cljs.core.cst$kw$save_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_mode_QMARK_,cljs.core.cst$kw$edit_DASH_disabled_QMARK_,cljs.core.cst$kw$delete_DASH_row_DASH_fn,cljs.core.cst$kw$rows,cljs.core.cst$kw$config_DASH_headers,cljs.core.cst$kw$sorting_DASH_map,cljs.core.cst$kw$custom_DASH_get_DASH_tr_DASH_class_DASH_fn,cljs.core.cst$kw$selected_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_disabled_QMARK_,cljs.core.cst$kw$config_DASH_fields,cljs.core.cst$kw$cancel_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$cancel_DASH_add_DASH_fn,cljs.core.cst$kw$selected_DASH_row],[false,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53482_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53482_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53481_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53481_SHARP_);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53526 = cljs.core.cst$kw$edit_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53526) : cljs.core.deref.call(null,G__53526));
})(),((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row(cljs.core.cst$kw$add_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),gcclocal.primarydocs.departurelogistinfos.extract_add_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53484_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row(cljs.core.cst$kw$edit_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__53484_SHARP_,gcclocal.primarydocs.departurelogistinfos.extract_edit_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53527 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53527) : cljs.core.deref.call(null,G__53527));
})(),false,gcclocal.views.basic_catalog_crud_table.click_delete_row,(function (){var G__53528 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53528) : cljs.core.deref.call(null,G__53528));
})(),gcclocal.primarydocs.departurelogistinfos.config_headers,(function (){var G__53529 = cljs.core.cst$kw$sorting.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53529) : cljs.core.deref.call(null,G__53529));
})(),((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53480_SHARP_){
var G__53530 = "";
var G__53530__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.cst$kw$d_status.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_)))?[cljs.core.str(G__53530),cljs.core.str("finished-tr")].join(''):G__53530);
if(cljs.core.truth_((function (){var and__30375__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.cst$kw$d_status.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_));
if(and__30375__auto__){
var G__53533 = gcclocal.comm.utils.current_date();
var G__53534 = gcclocal.comm.utils.add_days_moment(gcclocal.comm.utils.iso_str__GT_moment(cljs.core.cst$kw$shipping_date.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_)),cljs.core.cst$kw$travel_time.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_));
return (gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2 ? gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2(G__53533,G__53534) : gcclocal.comm.utils.moment_after_QMARK_.call(null,G__53533,G__53534));
} else {
return and__30375__auto__;
}
})())){
return [cljs.core.str(G__53530__$1),cljs.core.str("negative")].join('');
} else {
return G__53530__$1;
}
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53483_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53483_SHARP_);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53535 = cljs.core.cst$kw$add_DASH_disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53535) : cljs.core.deref.call(null,G__53535));
})(),gcclocal.primarydocs.departurelogistinfos.config_fields,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53536 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53536) : cljs.core.deref.call(null,G__53536));
})()]);
return (gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1(G__53525) : gcclocal.views.crud_views.default_crud_table_view.call(null,G__53525));
})()),sablono.interpreter.interpret(((cljs.core.not((function (){var G__53537 = cljs.core.cst$kw$delete_DASH_disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53537) : cljs.core.deref.call(null,G__53537));
})()))?(function (){var G__53539 = cljs.core.cst$kw$wagon_number.cljs$core$IFn$_invoke$arity$1((function (){var G__53542 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53542) : cljs.core.deref.call(null,G__53542));
})());
var G__53540 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1((function (){var G__53543 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53543) : cljs.core.deref.call(null,G__53543));
})());
var G__53541 = ((function (G__53539,G__53540,attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53485_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row(cljs.core.cst$kw$delete_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__53485_SHARP_,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(G__53539,G__53540,attrs53486,current_app_state,newdlis,selected_type))
;
return (gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3(G__53539,G__53540,G__53541) : gcclocal.views.crud_views.delete_modal_view.call(null,G__53539,G__53540,G__53541));
})():null)),sablono.interpreter.interpret((gcclocal.views.common.basic_approve_modal_view.cljs$core$IFn$_invoke$arity$0 ? gcclocal.views.common.basic_approve_modal_view.cljs$core$IFn$_invoke$arity$0() : gcclocal.views.common.basic_approve_modal_view.call(null)))], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53486),sablono.interpreter.interpret((function (){var G__53545 = (function (){var G__53553 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53553) : cljs.core.deref.call(null,G__53553));
})();
var G__53546 = (function (){var G__53554 = cljs.core.cst$kw$add_DASH_disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53554) : cljs.core.deref.call(null,G__53554));
})();
var G__53547 = ((function (G__53545,G__53546,attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_add_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(G__53545,G__53546,attrs53486,current_app_state,newdlis,selected_type))
;
var G__53548 = (function (){var G__53555 = cljs.core.cst$kw$search_DASH_str.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53555) : cljs.core.deref.call(null,G__53555));
})();
var G__53549 = ((function (G__53545,G__53546,G__53547,G__53548,attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53479_SHARP_){
return gcclocal.views.basic_catalog_crud_table.search(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53479_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(G__53545,G__53546,G__53547,G__53548,attrs53486,current_app_state,newdlis,selected_type))
;
var G__53550 = (function (){var G__53556 = cljs.core.cst$kw$show_DASH_mode.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53556) : cljs.core.deref.call(null,G__53556));
})();
var G__53551 = (function (){var G__53557 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53557) : cljs.core.deref.call(null,G__53557));
})();
var G__53552 = selected_type;
return (gcclocal.primarydocs.departurelogistinfos.top_panel.cljs$core$IFn$_invoke$arity$8 ? gcclocal.primarydocs.departurelogistinfos.top_panel.cljs$core$IFn$_invoke$arity$8(G__53545,G__53546,G__53547,G__53548,G__53549,G__53550,G__53551,G__53552) : gcclocal.primarydocs.departurelogistinfos.top_panel.call(null,G__53545,G__53546,G__53547,G__53548,G__53549,G__53550,G__53551,G__53552));
})()),sablono.interpreter.interpret((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__53559 = cljs.core.cst$kw$show_DASH_mode.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53559) : cljs.core.deref.call(null,G__53559));
})(),"finished")) && (cljs.core.not(gcclocal.comm.utils.nil_or_empty_QMARK_(newdlis))))?(function (){var G__53561 = newdlis;
var G__53562 = (function (){var G__53564 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53564) : cljs.core.deref.call(null,G__53564));
})();
var G__53563 = rum.core.react(rum.core.cursor(gcclocal.primarydocs.departurelogistinfos.test_sync_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edit_DASH_new_DASH_dli_QMARK_], null)));
return (gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.cljs$core$IFn$_invoke$arity$3(G__53561,G__53562,G__53563) : gcclocal.primarydocs.departurelogistinfos.sync_new_dlis_view.call(null,G__53561,G__53562,G__53563));
})():null)),sablono.interpreter.interpret((function (){var G__53576 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$delete_DASH_disabled_QMARK_,cljs.core.cst$kw$sort_DASH_fn,cljs.core.cst$kw$select_DASH_row_DASH_fn,cljs.core.cst$kw$edit_DASH_mode_QMARK_,cljs.core.cst$kw$start_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_row_DASH_fn,cljs.core.cst$kw$save_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_mode_QMARK_,cljs.core.cst$kw$edit_DASH_disabled_QMARK_,cljs.core.cst$kw$delete_DASH_row_DASH_fn,cljs.core.cst$kw$rows,cljs.core.cst$kw$config_DASH_headers,cljs.core.cst$kw$sorting_DASH_map,cljs.core.cst$kw$custom_DASH_get_DASH_tr_DASH_class_DASH_fn,cljs.core.cst$kw$selected_DASH_row_DASH_fn,cljs.core.cst$kw$add_DASH_disabled_QMARK_,cljs.core.cst$kw$config_DASH_fields,cljs.core.cst$kw$cancel_DASH_edit_DASH_row_DASH_fn,cljs.core.cst$kw$cancel_DASH_add_DASH_fn,cljs.core.cst$kw$selected_DASH_row],[false,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53482_SHARP_){
return gcclocal.views.basic_catalog_crud_table.sort_field(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53482_SHARP_,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53481_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53481_SHARP_);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53577 = cljs.core.cst$kw$edit_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53577) : cljs.core.deref.call(null,G__53577));
})(),((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.start_edit_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.add_row(cljs.core.cst$kw$add_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),gcclocal.primarydocs.departurelogistinfos.extract_add_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53484_SHARP_){
return gcclocal.views.basic_catalog_crud_table.save_edit_row(cljs.core.cst$kw$edit_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__53484_SHARP_,gcclocal.primarydocs.departurelogistinfos.extract_edit_row,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53578 = cljs.core.cst$kw$add_DASH_mode_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53578) : cljs.core.deref.call(null,G__53578));
})(),false,gcclocal.views.basic_catalog_crud_table.click_delete_row,(function (){var G__53579 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53579) : cljs.core.deref.call(null,G__53579));
})(),gcclocal.primarydocs.departurelogistinfos.config_headers,(function (){var G__53580 = cljs.core.cst$kw$sorting.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53580) : cljs.core.deref.call(null,G__53580));
})(),((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53480_SHARP_){
var G__53581 = "";
var G__53581__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.cst$kw$d_status.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_)))?[cljs.core.str(G__53581),cljs.core.str("finished-tr")].join(''):G__53581);
if(cljs.core.truth_((function (){var and__30375__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.cst$kw$d_status.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_));
if(and__30375__auto__){
var G__53584 = gcclocal.comm.utils.current_date();
var G__53585 = gcclocal.comm.utils.add_days_moment(gcclocal.comm.utils.iso_str__GT_moment(cljs.core.cst$kw$shipping_date.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_)),cljs.core.cst$kw$travel_time.cljs$core$IFn$_invoke$arity$1(p1__53480_SHARP_));
return (gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2 ? gcclocal.comm.utils.moment_after_QMARK_.cljs$core$IFn$_invoke$arity$2(G__53584,G__53585) : gcclocal.comm.utils.moment_after_QMARK_.call(null,G__53584,G__53585));
} else {
return and__30375__auto__;
}
})())){
return [cljs.core.str(G__53581__$1),cljs.core.str("negative")].join('');
} else {
return G__53581__$1;
}
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53483_SHARP_){
return gcclocal.primarydocs.departurelogistinfos.select_row_custom(gcclocal.primarydocs.departurelogistinfos.cursors,p1__53483_SHARP_);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53586 = cljs.core.cst$kw$add_DASH_disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53586) : cljs.core.deref.call(null,G__53586));
})(),gcclocal.primarydocs.departurelogistinfos.config_fields,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_edit_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs53486,current_app_state,newdlis,selected_type))
,((function (attrs53486,current_app_state,newdlis,selected_type){
return (function (){
return gcclocal.views.basic_catalog_crud_table.cancel_add_row(gcclocal.primarydocs.departurelogistinfos.cursors);
});})(attrs53486,current_app_state,newdlis,selected_type))
,(function (){var G__53587 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53587) : cljs.core.deref.call(null,G__53587));
})()]);
return (gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.crud_views.default_crud_table_view.cljs$core$IFn$_invoke$arity$1(G__53576) : gcclocal.views.crud_views.default_crud_table_view.call(null,G__53576));
})()),sablono.interpreter.interpret(((cljs.core.not((function (){var G__53588 = cljs.core.cst$kw$delete_DASH_disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53588) : cljs.core.deref.call(null,G__53588));
})()))?(function (){var G__53590 = cljs.core.cst$kw$wagon_number.cljs$core$IFn$_invoke$arity$1((function (){var G__53593 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53593) : cljs.core.deref.call(null,G__53593));
})());
var G__53591 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1((function (){var G__53594 = cljs.core.cst$kw$selected_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.cursors);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53594) : cljs.core.deref.call(null,G__53594));
})());
var G__53592 = ((function (G__53590,G__53591,attrs53486,current_app_state,newdlis,selected_type){
return (function (p1__53485_SHARP_){
return gcclocal.views.basic_catalog_crud_table.delete_row(cljs.core.cst$kw$delete_DASH_row.cljs$core$IFn$_invoke$arity$1(gcclocal.primarydocs.departurelogistinfos.urls),p1__53485_SHARP_,gcclocal.primarydocs.departurelogistinfos.notify_ch,gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch);
});})(G__53590,G__53591,attrs53486,current_app_state,newdlis,selected_type))
;
return (gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_views.delete_modal_view.cljs$core$IFn$_invoke$arity$3(G__53590,G__53591,G__53592) : gcclocal.views.crud_views.delete_modal_view.call(null,G__53590,G__53591,G__53592));
})():null)),sablono.interpreter.interpret((gcclocal.views.common.basic_approve_modal_view.cljs$core$IFn$_invoke$arity$0 ? gcclocal.views.common.basic_approve_modal_view.cljs$core$IFn$_invoke$arity$0() : gcclocal.views.common.basic_approve_modal_view.call(null)))], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"main-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__53595__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__53595 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__53596__i = 0, G__53596__a = new Array(arguments.length -  0);
while (G__53596__i < G__53596__a.length) {G__53596__a[G__53596__i] = arguments[G__53596__i + 0]; ++G__53596__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__53596__a,0);
} 
return G__53595__delegate.call(this,args__42471__auto__);};
G__53595.cljs$lang$maxFixedArity = 0;
G__53595.cljs$lang$applyTo = (function (arglist__53597){
var args__42471__auto__ = cljs.core.seq(arglist__53597);
return G__53595__delegate(args__42471__auto__);
});
G__53595.cljs$core$IFn$_invoke$arity$variadic = G__53595__delegate;
return G__53595;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.primarydocs.departurelogistinfos.init = (function gcclocal$primarydocs$departurelogistinfos$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init dlis"], 0));

gcclocal.comm.amethods.get_select_list_for_atom(gcclocal.primarydocs.departurelogistinfos.clients_list,"/catalogs/clients/all");

gcclocal.comm.amethods.get_select_list_for_atom(gcclocal.primarydocs.departurelogistinfos.stations_list,"/catalogs/stations/all");

gcclocal.comm.amethods.get_select_list_for_atom(gcclocal.primarydocs.departurelogistinfos.stationtraveltimes_list,"/catalogs/stationtraveltimes/all");

gcclocal.comm.amethods.get_select_list_for_atom(gcclocal.primarydocs.departurelogistinfos.suppliers_list,"/catalogs/suppliers/all");

gcclocal.comm.amethods.get_select_list_for_atom(gcclocal.primarydocs.departurelogistinfos.clientapplications_list,"/primarydocs/clientapplications/all");

var c__38096__auto___53622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___53622){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___53622){
return (function (state_53613){
var state_val_53614 = (state_53613[(1)]);
if((state_val_53614 === (1))){
var state_53613__$1 = state_53613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53613__$1,(2),gcclocal.primarydocs.departurelogistinfos.refresh_rows_ch,true);
} else {
if((state_val_53614 === (2))){
var inst_53611 = (state_53613[(2)]);
var state_53613__$1 = state_53613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53613__$1,inst_53611);
} else {
return null;
}
}
});})(c__38096__auto___53622))
;
return ((function (switch__37982__auto__,c__38096__auto___53622){
return (function() {
var gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto__ = null;
var gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto____0 = (function (){
var statearr_53618 = [null,null,null,null,null,null,null];
(statearr_53618[(0)] = gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto__);

(statearr_53618[(1)] = (1));

return statearr_53618;
});
var gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto____1 = (function (state_53613){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_53613);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e53619){if((e53619 instanceof Object)){
var ex__37986__auto__ = e53619;
var statearr_53620_53623 = state_53613;
(statearr_53620_53623[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53613);

return cljs.core.cst$kw$recur;
} else {
throw e53619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__53624 = state_53613;
state_53613 = G__53624;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto__ = function(state_53613){
switch(arguments.length){
case 0:
return gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto____1.call(this,state_53613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto____0;
gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto____1;
return gcclocal$primarydocs$departurelogistinfos$init_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___53622))
})();
var state__38098__auto__ = (function (){var statearr_53621 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_53621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___53622);

return statearr_53621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___53622))
);


return rum.core.mount((gcclocal.primarydocs.departurelogistinfos.main_view.cljs$core$IFn$_invoke$arity$0 ? gcclocal.primarydocs.departurelogistinfos.main_view.cljs$core$IFn$_invoke$arity$0() : gcclocal.primarydocs.departurelogistinfos.main_view.call(null)),document.getElementById("mainpanel"));
});
goog.exportSymbol('gcclocal.primarydocs.departurelogistinfos.init', gcclocal.primarydocs.departurelogistinfos.init);
gcclocal.primarydocs.departurelogistinfos.on_js_reload = (function gcclocal$primarydocs$departurelogistinfos$on_js_reload(){
return null;
});
