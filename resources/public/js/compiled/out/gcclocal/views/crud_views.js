// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.views.crud_views');
goog.require('cljs.core');
goog.require('gcclocal.comm.dom_utils');
goog.require('gcclocal.comm.utils');
goog.require('rum.core');
goog.require('gcclocal.comm.amethods');
goog.require('gcclocal.views.crud_fields');
/**
 * Строка таблицы
 */
gcclocal.views.crud_views.tr_row_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (row,config_fields,edit_disabled_QMARK_,delete_disabled_QMARK_,selected_QMARK_,edit_mode_QMARK_,select_fn,start_edit_fn,delete_fn,save_edit_fn,cancel_edit_fn,custom_get_tr_class_fn){
var c_edit_mode_QMARK_ = (function (){var and__30565__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30565__auto__)){
return edit_mode_QMARK_;
} else {
return and__30565__auto__;
}
})();
return React.createElement("tr",{"onClick": ((function (c_edit_mode_QMARK_){
return (function (){
return select_fn.call(null,row);
});})(c_edit_mode_QMARK_))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(selected_QMARK_)?"active":"")),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(custom_get_tr_class_fn)?custom_get_tr_class_fn.call(null,row):""))].join('')], null))},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (c_edit_mode_QMARK_){
return (function (p1__39063_SHARP_){
return gcclocal.views.crud_fields.render_td_field_view.call(null,p1__39063_SHARP_,row,c_edit_mode_QMARK_,"edit");
});})(c_edit_mode_QMARK_))
,config_fields)),(function (){var attrs39067 = (cljs.core.truth_((function (){var and__30565__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30565__auto__)){
return edit_mode_QMARK_;
} else {
return and__30565__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.green.icon.tiny.button","div.ui.green.icon.tiny.button",1145684009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c_edit_mode_QMARK_){
return (function (p1__39064_SHARP_){
save_edit_fn.call(null,row);

return p1__39064_SHARP_.stopPropagation();
});})(c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.checkmark.icon","i.checkmark.icon",-945876964)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.red.icon.tiny.button","div.ui.red.icon.tiny.button",-1055158772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041E\u0442\u043C\u0435\u043D\u0430",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c_edit_mode_QMARK_){
return (function (){
return cancel_edit_fn.call(null);
});})(c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.remove.icon","i.remove.icon",1455856198)], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.primary.icon.tiny.button","div.ui.primary.icon.tiny.button",641563248),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var and__30565__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30565__auto__)){
return cljs.core.not.call(null,edit_disabled_QMARK_);
} else {
return and__30565__auto__;
}
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c_edit_mode_QMARK_){
return (function (p1__39065_SHARP_){
start_edit_fn.call(null);

return p1__39065_SHARP_.stopPropagation();
});})(c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.edit.icon","i.edit.icon",1808429144)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.primary.icon.tiny.button","div.ui.primary.icon.tiny.button",641563248),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var and__30565__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30565__auto__)){
return cljs.core.not.call(null,delete_disabled_QMARK_);
} else {
return and__30565__auto__;
}
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c_edit_mode_QMARK_){
return (function (p1__39066_SHARP_){
delete_fn.call(null,row);

return p1__39066_SHARP_.stopPropagation();
});})(c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.trash.icon","i.trash.icon",72810882)], null)], null)], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39067))?sablono.interpreter.attributes.call(null,attrs39067):null),((cljs.core.map_QMARK_.call(null,attrs39067))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39067)], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"tr-row-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39068__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39068 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39069__i = 0, G__39069__a = new Array(arguments.length -  0);
while (G__39069__i < G__39069__a.length) {G__39069__a[G__39069__i] = arguments[G__39069__i + 0]; ++G__39069__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39069__a,0);
} 
return G__39068__delegate.call(this,args__33795__auto__);};
G__39068.cljs$lang$maxFixedArity = 0;
G__39068.cljs$lang$applyTo = (function (arglist__39070){
var args__33795__auto__ = cljs.core.seq(arglist__39070);
return G__39068__delegate(args__33795__auto__);
});
G__39068.cljs$core$IFn$_invoke$arity$variadic = G__39068__delegate;
return G__39068;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Строка для добавления новой записи
 */
gcclocal.views.crud_views.tr_add_row_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (config_fields,add_mode_QMARK_,on_add_fn,on_cancel_fn){
var attrs39072 = cljs.core.map.call(null,(function (p1__39071_SHARP_){
return gcclocal.views.crud_fields.render_td_field_view.call(null,p1__39071_SHARP_,null,add_mode_QMARK_,"add");
}),config_fields);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39072))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),attrs39072)):{"className": "positive"}),((cljs.core.map_QMARK_.call(null,attrs39072))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("td",null,React.createElement("div",null,React.createElement("div",{"title": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", "onClick": on_add_fn, "className": "ui green icon tiny button"},React.createElement("i",{"className": "checkmark icon"})),React.createElement("div",{"title": "\u041E\u0442\u043C\u0435\u043D\u0430", "onClick": on_cancel_fn, "className": "ui red icon tiny button"},React.createElement("i",{"className": "remove icon"}))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39072),React.createElement("td",null,React.createElement("div",null,React.createElement("div",{"title": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", "onClick": on_add_fn, "className": "ui green icon tiny button"},React.createElement("i",{"className": "checkmark icon"})),React.createElement("div",{"title": "\u041E\u0442\u043C\u0435\u043D\u0430", "onClick": on_cancel_fn, "className": "ui red icon tiny button"},React.createElement("i",{"className": "remove icon"}))))], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"tr-add-row-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39081__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39081 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39082__i = 0, G__39082__a = new Array(arguments.length -  0);
while (G__39082__i < G__39082__a.length) {G__39082__a[G__39082__i] = arguments[G__39082__i + 0]; ++G__39082__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39082__a,0);
} 
return G__39081__delegate.call(this,args__33795__auto__);};
G__39081.cljs$lang$maxFixedArity = 0;
G__39081.cljs$lang$applyTo = (function (arglist__39083){
var args__33795__auto__ = cljs.core.seq(arglist__39083);
return G__39081__delegate(args__33795__auto__);
});
G__39081.cljs$core$IFn$_invoke$arity$variadic = G__39081__delegate;
return G__39081;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Вьюшка для заголовка столбца
 */
gcclocal.views.crud_views.th_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (header,wideness,sort_field_name,is_active_QMARK_,desc_QMARK_,sort_fn){
var wide_class = (cljs.core.truth_(wideness)?[cljs.core.str(wideness),cljs.core.str(" wide ")].join(''):"");
var sort_class = [cljs.core.str([cljs.core.str(wide_class),cljs.core.str((cljs.core.truth_(is_active_QMARK_)?"sorted ":""))].join('')),cljs.core.str((cljs.core.truth_(desc_QMARK_)?"descending":"ascending"))].join('');
return React.createElement("th",{"title": header, "onClick": ((function (wide_class,sort_class){
return (function (){
if(!((sort_field_name == null))){
return sort_fn.call(null,sort_field_name);
} else {
return null;
}
});})(wide_class,sort_class))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort_class], null))},sablono.interpreter.interpret.call(null,header));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"th-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39084__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39084 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39085__i = 0, G__39085__a = new Array(arguments.length -  0);
while (G__39085__i < G__39085__a.length) {G__39085__a[G__39085__i] = arguments[G__39085__i + 0]; ++G__39085__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39085__a,0);
} 
return G__39084__delegate.call(this,args__33795__auto__);};
G__39084.cljs$lang$maxFixedArity = 0;
G__39084.cljs$lang$applyTo = (function (arglist__39086){
var args__33795__auto__ = cljs.core.seq(arglist__39086);
return G__39084__delegate(args__33795__auto__);
});
G__39084.cljs$core$IFn$_invoke$arity$variadic = G__39084__delegate;
return G__39084;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Инпут для поиска по подстроке
 */
gcclocal.views.crud_views.search_input_view = (function (){var render_mixin__33792__auto__ = rum.core.render_comp__GT_mixin.call(null,(function (rcomp,search_str,search_fn){
var on_search_fn = (function (_){
var search_val = gcclocal.comm.dom_utils.value.call(null,gcclocal.comm.dom_utils.find_in_rcomp.call(null,rcomp,"input"));
return search_fn.call(null,search_val);
});
return React.createElement("div",{"style": {"float": "right"}, "className": "ui action input"},sablono.interpreter.create_element.call(null,"input",{"type": "text", "placeholder": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C", "defaultValue": search_str, "onKeyPress": ((function (on_search_fn){
return (function (p1__39087_SHARP_){
if(cljs.core._EQ_.call(null,"Enter",p1__39087_SHARP_.key)){
return on_search_fn.call(null,p1__39087_SHARP_);
} else {
return null;
}
});})(on_search_fn))
}),React.createElement("button",{"onClick": on_search_fn, "className": "ui icon button"},React.createElement("i",{"className": "search icon"})));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"search-input-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39090__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39090 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39091__i = 0, G__39091__a = new Array(arguments.length -  0);
while (G__39091__i < G__39091__a.length) {G__39091__a[G__39091__i] = arguments[G__39091__i + 0]; ++G__39091__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39091__a,0);
} 
return G__39090__delegate.call(this,args__33795__auto__);};
G__39090.cljs$lang$maxFixedArity = 0;
G__39090.cljs$lang$applyTo = (function (arglist__39092){
var args__33795__auto__ = cljs.core.seq(arglist__39092);
return G__39090__delegate(args__33795__auto__);
});
G__39090.cljs$core$IFn$_invoke$arity$variadic = G__39090__delegate;
return G__39090;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.views.crud_views.on_update_delete_modal = (function gcclocal$views$crud_views$on_update_delete_modal(state){
var approve_delete_fn = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
var id_row = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(1));
return $("#delete-modal").modal({"detachable": false, "onApprove": ((function (approve_delete_fn,id_row){
return (function (){
return approve_delete_fn.call(null,id_row);
});})(approve_delete_fn,id_row))
});
});
/**
 * Модальное окно удаления строки
 */
gcclocal.views.crud_views.delete_modal_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (name,id_row,on_approve_delete){
return React.createElement("div",{"id": "delete-modal", "className": "ui small modal"},(function (){var attrs39093 = [cljs.core.str("\u0423\u0434\u0430\u043B\u0438\u0442\u044C "),cljs.core.str(name)].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39093))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs39093)):{"className": "header"}),((cljs.core.map_QMARK_.call(null,attrs39093))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39093)], null)));
})(),React.createElement("div",{"className": "content"},React.createElement("p",null,"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C?")),React.createElement("div",{"className": "actions"},React.createElement("div",{"className": "ui approve button"},"\u0414\u0430"),React.createElement("div",{"className": "ui cancel button"},"\u041E\u0442\u043C\u0435\u043D\u0430")));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),gcclocal.views.crud_views.on_update_delete_modal], null)], null)),"delete-modal-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39098__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39098 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39099__i = 0, G__39099__a = new Array(arguments.length -  0);
while (G__39099__i < G__39099__a.length) {G__39099__a[G__39099__i] = arguments[G__39099__i + 0]; ++G__39099__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39099__a,0);
} 
return G__39098__delegate.call(this,args__33795__auto__);};
G__39098.cljs$lang$maxFixedArity = 0;
G__39098.cljs$lang$applyTo = (function (arglist__39100){
var args__33795__auto__ = cljs.core.seq(arglist__39100);
return G__39098__delegate(args__33795__auto__);
});
G__39098.cljs$core$IFn$_invoke$arity$variadic = G__39098__delegate;
return G__39098;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Вьюшка для верхней части по умолчанию (кнопка добавления + поиск)
 */
gcclocal.views.crud_views.default_top_panel_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (search_str,add_disabled_QMARK_,search_disabled_QMARK_,add_mode_QMARK_,on_click_add_fn,search_fn,load_to_excel_disabled_QMARK_,load_to_excel_fn){
return React.createElement("div",{"className": "ui basic clearing segment no-padding-segment"},sablono.interpreter.interpret.call(null,(((cljs.core.not.call(null,add_mode_QMARK_)) && (cljs.core.not.call(null,add_disabled_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui primary labeled icon button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_add_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.plus.icon","i.plus.icon",1958903408)], null),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"], null)], null):null)),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,load_to_excel_disabled_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui labeled icon button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),load_to_excel_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.file.excel.outline.icon","i.file.excel.outline.icon",1017751324)], null),"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432 Excel"], null):null)),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,search_disabled_QMARK_))?gcclocal.views.crud_views.search_input_view.call(null,search_str,search_fn):null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"default-top-panel-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39101__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39101 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39102__i = 0, G__39102__a = new Array(arguments.length -  0);
while (G__39102__i < G__39102__a.length) {G__39102__a[G__39102__i] = arguments[G__39102__i + 0]; ++G__39102__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39102__a,0);
} 
return G__39101__delegate.call(this,args__33795__auto__);};
G__39101.cljs$lang$maxFixedArity = 0;
G__39101.cljs$lang$applyTo = (function (arglist__39103){
var args__33795__auto__ = cljs.core.seq(arglist__39103);
return G__39101__delegate(args__33795__auto__);
});
G__39101.cljs$core$IFn$_invoke$arity$variadic = G__39101__delegate;
return G__39101;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Заголовки таблицы
 */
gcclocal.views.crud_views.table_thead = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (config_headers,sorting_map,sort_fn){
return React.createElement("thead",null,(function (){var attrs39104 = cljs.core.map.call(null,(function (h_params){
return gcclocal.views.crud_views.th_view.call(null,new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(h_params),new cljs.core.Keyword(null,"wideness","wideness",926863517).cljs$core$IFn$_invoke$arity$1(h_params),new cljs.core.Keyword(null,"sort-field","sort-field",-941433793).cljs$core$IFn$_invoke$arity$1(h_params),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sort-field","sort-field",-941433793).cljs$core$IFn$_invoke$arity$1(h_params),new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(sorting_map)),new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(sorting_map),sort_fn);
}),config_headers);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39104))?sablono.interpreter.attributes.call(null,attrs39104):null),((cljs.core.map_QMARK_.call(null,attrs39104))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("th",{"className": "control-th"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39104),React.createElement("th",{"className": "control-th"})], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"table-thead");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39109__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39109 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39110__i = 0, G__39110__a = new Array(arguments.length -  0);
while (G__39110__i < G__39110__a.length) {G__39110__a[G__39110__i] = arguments[G__39110__i + 0]; ++G__39110__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39110__a,0);
} 
return G__39109__delegate.call(this,args__33795__auto__);};
G__39109.cljs$lang$maxFixedArity = 0;
G__39109.cljs$lang$applyTo = (function (arglist__39111){
var args__33795__auto__ = cljs.core.seq(arglist__39111);
return G__39109__delegate(args__33795__auto__);
});
G__39109.cljs$core$IFn$_invoke$arity$variadic = G__39109__delegate;
return G__39109;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Строка 'строки не найдены'
 */
gcclocal.views.crud_views.tr_rows_not_found = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (config_headers){
return React.createElement("tr",null,React.createElement("td",{"colSpan": (cljs.core.count.call(null,config_headers) + (1)), "style": {"textAlign": "center", "color": "#AAA"}},"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"tr-rows-not-found");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39112__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39112 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39113__i = 0, G__39113__a = new Array(arguments.length -  0);
while (G__39113__i < G__39113__a.length) {G__39113__a[G__39113__i] = arguments[G__39113__i + 0]; ++G__39113__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39113__a,0);
} 
return G__39112__delegate.call(this,args__33795__auto__);};
G__39112.cljs$lang$maxFixedArity = 0;
G__39112.cljs$lang$applyTo = (function (arglist__39114){
var args__33795__auto__ = cljs.core.seq(arglist__39114);
return G__39112__delegate(args__33795__auto__);
});
G__39112.cljs$core$IFn$_invoke$arity$variadic = G__39112__delegate;
return G__39112;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Таблица CRUD по умолчанию
 */
gcclocal.views.crud_views.default_crud_table_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (p__39116){
var map__39117 = p__39116;
var map__39117__$1 = ((((!((map__39117 == null)))?((((map__39117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39117):map__39117);
var params = map__39117__$1;
var cancel_edit_row_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"cancel-edit-row-fn","cancel-edit-row-fn",562380475));
var cancel_add_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"cancel-add-fn","cancel-add-fn",-106728963));
var selected_row = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683));
var sort_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011));
var delete_disabled_QMARK_ = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"delete-disabled?","delete-disabled?",-2024926173));
var select_row_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"select-row-fn","select-row-fn",1428247972));
var edit_mode_QMARK_ = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"edit-mode?","edit-mode?",1089481191));
var start_edit_row_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"start-edit-row-fn","start-edit-row-fn",-1336749305));
var add_row_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"add-row-fn","add-row-fn",1400597160));
var save_edit_row_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"save-edit-row-fn","save-edit-row-fn",-1949641335));
var add_mode_QMARK_ = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"add-mode?","add-mode?",265761482));
var edit_disabled_QMARK_ = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"edit-disabled?","edit-disabled?",-192999315));
var delete_row_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"delete-row-fn","delete-row-fn",-1002083091));
var rows = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var config_headers = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"config-headers","config-headers",2144375121));
var sorting_map = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"sorting-map","sorting-map",1725768082));
var custom_get_tr_class_fn = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"custom-get-tr-class-fn","custom-get-tr-class-fn",-1254397421));
var add_disabled_QMARK_ = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"add-disabled?","add-disabled?",2139101908));
var config_fields = cljs.core.get.call(null,map__39117__$1,new cljs.core.Keyword(null,"config-fields","config-fields",1456621207));
return React.createElement("table",{"style": {"marginTop": "1em !important"}, "className": "ui selectable small celled fixed sortable table\n                   with-overflow-tds\n                   crud-main-table"},sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.table_thead.call(null,config_headers,sorting_map,sort_fn)),(function (){var attrs39119 = (cljs.core.truth_((function (){var and__30565__auto__ = add_mode_QMARK_;
if(cljs.core.truth_(and__30565__auto__)){
return cljs.core.not.call(null,add_disabled_QMARK_);
} else {
return and__30565__auto__;
}
})())?gcclocal.views.crud_views.tr_add_row_view.call(null,config_fields,add_mode_QMARK_,add_row_fn,cancel_add_fn):null);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs39119))?sablono.interpreter.attributes.call(null,attrs39119):null),((cljs.core.map_QMARK_.call(null,attrs39119))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core.count.call(null,rows) > (0)))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs39119,map__39117,map__39117__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields){
return (function (p1__39115_SHARP_){
return gcclocal.views.crud_views.tr_row_view.call(null,p1__39115_SHARP_,config_fields,edit_disabled_QMARK_,delete_disabled_QMARK_,cljs.core._EQ_.call(null,p1__39115_SHARP_,selected_row),edit_mode_QMARK_,select_row_fn,start_edit_row_fn,delete_row_fn,save_edit_row_fn,cancel_edit_row_fn,custom_get_tr_class_fn);
});})(attrs39119,map__39117,map__39117__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields))
,rows)):sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.tr_rows_not_found.call(null,config_headers)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39119),(((cljs.core.count.call(null,rows) > (0)))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs39119,map__39117,map__39117__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields){
return (function (p1__39115_SHARP_){
return gcclocal.views.crud_views.tr_row_view.call(null,p1__39115_SHARP_,config_fields,edit_disabled_QMARK_,delete_disabled_QMARK_,cljs.core._EQ_.call(null,p1__39115_SHARP_,selected_row),edit_mode_QMARK_,select_row_fn,start_edit_row_fn,delete_row_fn,save_edit_row_fn,cancel_edit_row_fn,custom_get_tr_class_fn);
});})(attrs39119,map__39117,map__39117__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields))
,rows)):sablono.interpreter.interpret.call(null,gcclocal.views.crud_views.tr_rows_not_found.call(null,config_headers)))], null)));
})());
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"default-crud-table-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39120__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39120 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39121__i = 0, G__39121__a = new Array(arguments.length -  0);
while (G__39121__i < G__39121__a.length) {G__39121__a[G__39121__i] = arguments[G__39121__i + 0]; ++G__39121__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39121__a,0);
} 
return G__39120__delegate.call(this,args__33795__auto__);};
G__39120.cljs$lang$maxFixedArity = 0;
G__39120.cljs$lang$applyTo = (function (arglist__39122){
var args__33795__auto__ = cljs.core.seq(arglist__39122);
return G__39120__delegate(args__33795__auto__);
});
G__39120.cljs$core$IFn$_invoke$arity$variadic = G__39120__delegate;
return G__39120;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();

//# sourceMappingURL=crud_views.js.map