// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.views.crud_views');
goog.require('cljs.core');
goog.require('gcclocal.comm.dom_utils');
goog.require('gcclocal.comm.amethods');
goog.require('rum.core');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.views.crud_fields');
/**
 * Строка таблицы
 */
gcclocal.views.crud_views.tr_row_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (row,config_fields,edit_disabled_QMARK_,delete_disabled_QMARK_,selected_QMARK_,edit_mode_QMARK_,select_fn,start_edit_fn,delete_fn,save_edit_fn,cancel_edit_fn,custom_get_tr_class_fn){
var c_edit_mode_QMARK_ = (function (){var and__30375__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30375__auto__)){
return edit_mode_QMARK_;
} else {
return and__30375__auto__;
}
})();
var G__51598 = "tr";
var G__51599 = {"onClick": ((function (G__51598,c_edit_mode_QMARK_){
return (function (){
return (select_fn.cljs$core$IFn$_invoke$arity$1 ? select_fn.cljs$core$IFn$_invoke$arity$1(row) : select_fn.call(null,row));
});})(G__51598,c_edit_mode_QMARK_))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(selected_QMARK_)?"active":"")),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(custom_get_tr_class_fn)?(custom_get_tr_class_fn.cljs$core$IFn$_invoke$arity$1 ? custom_get_tr_class_fn.cljs$core$IFn$_invoke$arity$1(row) : custom_get_tr_class_fn.call(null,row)):""))].join('')], null))};
var G__51600 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__51598,G__51599,c_edit_mode_QMARK_){
return (function (p1__51593_SHARP_){
return gcclocal.views.crud_fields.render_td_field_view(p1__51593_SHARP_,row,c_edit_mode_QMARK_,"edit");
});})(G__51598,G__51599,c_edit_mode_QMARK_))
,config_fields));
var G__51601 = (function (){var attrs51597 = (cljs.core.truth_((function (){var and__30375__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30375__auto__)){
return edit_mode_QMARK_;
} else {
return and__30375__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$green$icon$tiny$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",cljs.core.cst$kw$on_DASH_click,((function (G__51598,G__51599,G__51600,c_edit_mode_QMARK_){
return (function (p1__51594_SHARP_){
(save_edit_fn.cljs$core$IFn$_invoke$arity$1 ? save_edit_fn.cljs$core$IFn$_invoke$arity$1(row) : save_edit_fn.call(null,row));

return p1__51594_SHARP_.stopPropagation();
});})(G__51598,G__51599,G__51600,c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$checkmark$icon], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$red$icon$tiny$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u041E\u0442\u043C\u0435\u043D\u0430",cljs.core.cst$kw$on_DASH_click,((function (G__51598,G__51599,G__51600,c_edit_mode_QMARK_){
return (function (){
return (cancel_edit_fn.cljs$core$IFn$_invoke$arity$0 ? cancel_edit_fn.cljs$core$IFn$_invoke$arity$0() : cancel_edit_fn.call(null));
});})(G__51598,G__51599,G__51600,c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$remove$icon], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,"visible"], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,"hidden"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$primary$icon$tiny$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,(cljs.core.truth_((function (){var and__30375__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30375__auto__)){
return cljs.core.not(edit_disabled_QMARK_);
} else {
return and__30375__auto__;
}
})())?"visible":"hidden")], null),cljs.core.cst$kw$on_DASH_click,((function (G__51598,G__51599,G__51600,c_edit_mode_QMARK_){
return (function (p1__51595_SHARP_){
(start_edit_fn.cljs$core$IFn$_invoke$arity$0 ? start_edit_fn.cljs$core$IFn$_invoke$arity$0() : start_edit_fn.call(null));

return p1__51595_SHARP_.stopPropagation();
});})(G__51598,G__51599,G__51600,c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$edit$icon], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$primary$icon$tiny$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,(cljs.core.truth_((function (){var and__30375__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__30375__auto__)){
return cljs.core.not(delete_disabled_QMARK_);
} else {
return and__30375__auto__;
}
})())?"visible":"hidden")], null),cljs.core.cst$kw$on_DASH_click,((function (G__51598,G__51599,G__51600,c_edit_mode_QMARK_){
return (function (p1__51596_SHARP_){
(delete_fn.cljs$core$IFn$_invoke$arity$1 ? delete_fn.cljs$core$IFn$_invoke$arity$1(row) : delete_fn.call(null,row));

return p1__51596_SHARP_.stopPropagation();
});})(G__51598,G__51599,G__51600,c_edit_mode_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$trash$icon], null)], null)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs51597))?sablono.interpreter.attributes(attrs51597):null),((cljs.core.map_QMARK_(attrs51597))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51597)], null)));
})();
return React.createElement(G__51598,G__51599,G__51600,G__51601);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"tr-row-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51602__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51602 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51603__i = 0, G__51603__a = new Array(arguments.length -  0);
while (G__51603__i < G__51603__a.length) {G__51603__a[G__51603__i] = arguments[G__51603__i + 0]; ++G__51603__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51603__a,0);
} 
return G__51602__delegate.call(this,args__42471__auto__);};
G__51602.cljs$lang$maxFixedArity = 0;
G__51602.cljs$lang$applyTo = (function (arglist__51604){
var args__42471__auto__ = cljs.core.seq(arglist__51604);
return G__51602__delegate(args__42471__auto__);
});
G__51602.cljs$core$IFn$_invoke$arity$variadic = G__51602__delegate;
return G__51602;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Строка для добавления новой записи
 */
gcclocal.views.crud_views.tr_add_row_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (config_fields,add_mode_QMARK_,on_add_fn,on_cancel_fn){
var attrs51606 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51605_SHARP_){
return gcclocal.views.crud_fields.render_td_field_view(p1__51605_SHARP_,null,add_mode_QMARK_,"add");
}),config_fields);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tr",((cljs.core.map_QMARK_(attrs51606))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),attrs51606], 0))):{"className": "positive"}),((cljs.core.map_QMARK_(attrs51606))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51635 = "td";
var G__51636 = null;
var G__51637 = (function (){var G__51648 = "div";
var G__51649 = null;
var G__51650 = (function (){var G__51652 = "div";
var G__51653 = {"title": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", "onClick": on_add_fn, "className": "ui green icon tiny button"};
var G__51654 = (function (){var G__51655 = "i";
var G__51656 = {"className": "checkmark icon"};
return React.createElement(G__51655,G__51656);
})();
return React.createElement(G__51652,G__51653,G__51654);
})();
var G__51651 = (function (){var G__51657 = "div";
var G__51658 = {"title": "\u041E\u0442\u043C\u0435\u043D\u0430", "onClick": on_cancel_fn, "className": "ui red icon tiny button"};
var G__51659 = (function (){var G__51660 = "i";
var G__51661 = {"className": "remove icon"};
return React.createElement(G__51660,G__51661);
})();
return React.createElement(G__51657,G__51658,G__51659);
})();
return React.createElement(G__51648,G__51649,G__51650,G__51651);
})();
return React.createElement(G__51635,G__51636,G__51637);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51606),(function (){var G__51690 = "td";
var G__51691 = null;
var G__51692 = (function (){var G__51703 = "div";
var G__51704 = null;
var G__51705 = (function (){var G__51707 = "div";
var G__51708 = {"title": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", "onClick": on_add_fn, "className": "ui green icon tiny button"};
var G__51709 = (function (){var G__51710 = "i";
var G__51711 = {"className": "checkmark icon"};
return React.createElement(G__51710,G__51711);
})();
return React.createElement(G__51707,G__51708,G__51709);
})();
var G__51706 = (function (){var G__51712 = "div";
var G__51713 = {"title": "\u041E\u0442\u043C\u0435\u043D\u0430", "onClick": on_cancel_fn, "className": "ui red icon tiny button"};
var G__51714 = (function (){var G__51715 = "i";
var G__51716 = {"className": "remove icon"};
return React.createElement(G__51715,G__51716);
})();
return React.createElement(G__51712,G__51713,G__51714);
})();
return React.createElement(G__51703,G__51704,G__51705,G__51706);
})();
return React.createElement(G__51690,G__51691,G__51692);
})()], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"tr-add-row-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51717__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51717 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51718__i = 0, G__51718__a = new Array(arguments.length -  0);
while (G__51718__i < G__51718__a.length) {G__51718__a[G__51718__i] = arguments[G__51718__i + 0]; ++G__51718__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51718__a,0);
} 
return G__51717__delegate.call(this,args__42471__auto__);};
G__51717.cljs$lang$maxFixedArity = 0;
G__51717.cljs$lang$applyTo = (function (arglist__51719){
var args__42471__auto__ = cljs.core.seq(arglist__51719);
return G__51717__delegate(args__42471__auto__);
});
G__51717.cljs$core$IFn$_invoke$arity$variadic = G__51717__delegate;
return G__51717;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Вьюшка для заголовка столбца
 */
gcclocal.views.crud_views.th_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (header,wideness,sort_field_name,is_active_QMARK_,desc_QMARK_,sort_fn){
var wide_class = (cljs.core.truth_(wideness)?[cljs.core.str(wideness),cljs.core.str(" wide ")].join(''):"");
var sort_class = [cljs.core.str([cljs.core.str(wide_class),cljs.core.str((cljs.core.truth_(is_active_QMARK_)?"sorted ":""))].join('')),cljs.core.str((cljs.core.truth_(desc_QMARK_)?"descending":"ascending"))].join('');
var G__51720 = "th";
var G__51721 = {"title": header, "onClick": ((function (G__51720,wide_class,sort_class){
return (function (){
if(!((sort_field_name == null))){
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(sort_field_name) : sort_fn.call(null,sort_field_name));
} else {
return null;
}
});})(G__51720,wide_class,sort_class))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort_class], null))};
var G__51722 = sablono.interpreter.interpret(header);
return React.createElement(G__51720,G__51721,G__51722);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"th-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51723__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51723 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51724__i = 0, G__51724__a = new Array(arguments.length -  0);
while (G__51724__i < G__51724__a.length) {G__51724__a[G__51724__i] = arguments[G__51724__i + 0]; ++G__51724__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51724__a,0);
} 
return G__51723__delegate.call(this,args__42471__auto__);};
G__51723.cljs$lang$maxFixedArity = 0;
G__51723.cljs$lang$applyTo = (function (arglist__51725){
var args__42471__auto__ = cljs.core.seq(arglist__51725);
return G__51723__delegate(args__42471__auto__);
});
G__51723.cljs$core$IFn$_invoke$arity$variadic = G__51723__delegate;
return G__51723;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Инпут для поиска по подстроке
 */
gcclocal.views.crud_views.search_input_view = (function (){var render_mixin__42468__auto__ = rum.core.render_comp__GT_mixin((function (rcomp,search_str,search_fn){
var on_search_fn = (function (_){
var search_val = gcclocal.comm.dom_utils.value(gcclocal.comm.dom_utils.find_in_rcomp(rcomp,"input"));
return (search_fn.cljs$core$IFn$_invoke$arity$1 ? search_fn.cljs$core$IFn$_invoke$arity$1(search_val) : search_fn.call(null,search_val));
});
var G__51727 = "div";
var G__51728 = {"style": {"float": "right"}, "className": "ui action input"};
var G__51729 = sablono.interpreter.create_element("input",{"type": "text", "placeholder": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C", "defaultValue": search_str, "onKeyPress": ((function (G__51727,G__51728,on_search_fn){
return (function (p1__51726_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__51726_SHARP_.key)){
return on_search_fn(p1__51726_SHARP_);
} else {
return null;
}
});})(G__51727,G__51728,on_search_fn))
});
var G__51730 = (function (){var G__51733 = "button";
var G__51734 = {"onClick": on_search_fn, "className": "ui icon button"};
var G__51735 = (function (){var G__51736 = "i";
var G__51737 = {"className": "search icon"};
return React.createElement(G__51736,G__51737);
})();
return React.createElement(G__51733,G__51734,G__51735);
})();
return React.createElement(G__51727,G__51728,G__51729,G__51730);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"search-input-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51738__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51738 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51739__i = 0, G__51739__a = new Array(arguments.length -  0);
while (G__51739__i < G__51739__a.length) {G__51739__a[G__51739__i] = arguments[G__51739__i + 0]; ++G__51739__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51739__a,0);
} 
return G__51738__delegate.call(this,args__42471__auto__);};
G__51738.cljs$lang$maxFixedArity = 0;
G__51738.cljs$lang$applyTo = (function (arglist__51740){
var args__42471__auto__ = cljs.core.seq(arglist__51740);
return G__51738__delegate(args__42471__auto__);
});
G__51738.cljs$core$IFn$_invoke$arity$variadic = G__51738__delegate;
return G__51738;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.views.crud_views.on_update_delete_modal = (function gcclocal$views$crud_views$on_update_delete_modal(state){
var approve_delete_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state),(2));
var id_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state),(1));
return $("#delete-modal").modal({"detachable": false, "onApprove": ((function (approve_delete_fn,id_row){
return (function (){
return (approve_delete_fn.cljs$core$IFn$_invoke$arity$1 ? approve_delete_fn.cljs$core$IFn$_invoke$arity$1(id_row) : approve_delete_fn.call(null,id_row));
});})(approve_delete_fn,id_row))
});
});
/**
 * Модальное окно удаления строки
 */
gcclocal.views.crud_views.delete_modal_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (name,id_row,on_approve_delete){
var G__51746 = "div";
var G__51747 = {"id": "delete-modal", "className": "ui small modal"};
var G__51748 = (function (){var attrs51741 = [cljs.core.str("\u0423\u0434\u0430\u043B\u0438\u0442\u044C "),cljs.core.str(name)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51741))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs51741], 0))):{"className": "header"}),((cljs.core.map_QMARK_(attrs51741))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51741)], null)));
})();
var G__51749 = (function (){var G__51751 = "div";
var G__51752 = {"className": "content"};
var G__51753 = React.createElement("p",null,"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C?");
return React.createElement(G__51751,G__51752,G__51753);
})();
var G__51750 = (function (){var G__51754 = "div";
var G__51755 = {"className": "actions"};
var G__51756 = (function (){var G__51758 = "div";
var G__51759 = {"className": "ui approve button"};
var G__51760 = "\u0414\u0430";
return React.createElement(G__51758,G__51759,G__51760);
})();
var G__51757 = (function (){var G__51761 = "div";
var G__51762 = {"className": "ui cancel button"};
var G__51763 = "\u041E\u0442\u043C\u0435\u043D\u0430";
return React.createElement(G__51761,G__51762,G__51763);
})();
return React.createElement(G__51754,G__51755,G__51756,G__51757);
})();
return React.createElement(G__51746,G__51747,G__51748,G__51749,G__51750);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_update,gcclocal.views.crud_views.on_update_delete_modal], null)], null)),"delete-modal-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51764__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51764 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51765__i = 0, G__51765__a = new Array(arguments.length -  0);
while (G__51765__i < G__51765__a.length) {G__51765__a[G__51765__i] = arguments[G__51765__i + 0]; ++G__51765__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51765__a,0);
} 
return G__51764__delegate.call(this,args__42471__auto__);};
G__51764.cljs$lang$maxFixedArity = 0;
G__51764.cljs$lang$applyTo = (function (arglist__51766){
var args__42471__auto__ = cljs.core.seq(arglist__51766);
return G__51764__delegate(args__42471__auto__);
});
G__51764.cljs$core$IFn$_invoke$arity$variadic = G__51764__delegate;
return G__51764;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Вьюшка для верхней части по умолчанию (кнопка добавления + поиск)
 */
gcclocal.views.crud_views.default_top_panel_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (search_str,add_disabled_QMARK_,search_disabled_QMARK_,add_mode_QMARK_,on_click_add_fn,search_fn,load_to_excel_disabled_QMARK_,load_to_excel_fn){
var G__51767 = "div";
var G__51768 = {"className": "ui basic clearing segment no-padding-segment"};
var G__51769 = sablono.interpreter.interpret((((cljs.core.not(add_mode_QMARK_)) && (cljs.core.not(add_disabled_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"left"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"ui primary labeled icon button",cljs.core.cst$kw$on_DASH_click,on_click_add_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$plus$icon], null),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"], null)], null):null));
var G__51770 = sablono.interpreter.interpret(((cljs.core.not(load_to_excel_disabled_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"ui labeled icon button",cljs.core.cst$kw$on_DASH_click,load_to_excel_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$file$excel$outline$icon], null),"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432 Excel"], null):null));
var G__51771 = sablono.interpreter.interpret(((cljs.core.not(search_disabled_QMARK_))?(gcclocal.views.crud_views.search_input_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.views.crud_views.search_input_view.cljs$core$IFn$_invoke$arity$2(search_str,search_fn) : gcclocal.views.crud_views.search_input_view.call(null,search_str,search_fn)):null));
return React.createElement(G__51767,G__51768,G__51769,G__51770,G__51771);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"default-top-panel-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51772__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51772 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51773__i = 0, G__51773__a = new Array(arguments.length -  0);
while (G__51773__i < G__51773__a.length) {G__51773__a[G__51773__i] = arguments[G__51773__i + 0]; ++G__51773__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51773__a,0);
} 
return G__51772__delegate.call(this,args__42471__auto__);};
G__51772.cljs$lang$maxFixedArity = 0;
G__51772.cljs$lang$applyTo = (function (arglist__51774){
var args__42471__auto__ = cljs.core.seq(arglist__51774);
return G__51772__delegate(args__42471__auto__);
});
G__51772.cljs$core$IFn$_invoke$arity$variadic = G__51772__delegate;
return G__51772;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Заголовки таблицы
 */
gcclocal.views.crud_views.table_thead = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (config_headers,sorting_map,sort_fn){
var G__51790 = "thead";
var G__51791 = null;
var G__51792 = (function (){var attrs51775 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__51790,G__51791){
return (function (h_params){
var G__51793 = cljs.core.cst$kw$display_DASH_name.cljs$core$IFn$_invoke$arity$1(h_params);
var G__51794 = cljs.core.cst$kw$wideness.cljs$core$IFn$_invoke$arity$1(h_params);
var G__51795 = cljs.core.cst$kw$sort_DASH_field.cljs$core$IFn$_invoke$arity$1(h_params);
var G__51796 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sort_DASH_field.cljs$core$IFn$_invoke$arity$1(h_params),cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(sorting_map));
var G__51797 = cljs.core.cst$kw$desc_QMARK_.cljs$core$IFn$_invoke$arity$1(sorting_map);
var G__51798 = sort_fn;
return (gcclocal.views.crud_views.th_view.cljs$core$IFn$_invoke$arity$6 ? gcclocal.views.crud_views.th_view.cljs$core$IFn$_invoke$arity$6(G__51793,G__51794,G__51795,G__51796,G__51797,G__51798) : gcclocal.views.crud_views.th_view.call(null,G__51793,G__51794,G__51795,G__51796,G__51797,G__51798));
});})(G__51790,G__51791))
,config_headers);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tr",((cljs.core.map_QMARK_(attrs51775))?sablono.interpreter.attributes(attrs51775):null),((cljs.core.map_QMARK_(attrs51775))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51799 = "th";
var G__51800 = {"className": "control-th"};
return React.createElement(G__51799,G__51800);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51775),(function (){var G__51801 = "th";
var G__51802 = {"className": "control-th"};
return React.createElement(G__51801,G__51802);
})()], null)));
})();
return React.createElement(G__51790,G__51791,G__51792);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"table-thead");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51803__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51803 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51804__i = 0, G__51804__a = new Array(arguments.length -  0);
while (G__51804__i < G__51804__a.length) {G__51804__a[G__51804__i] = arguments[G__51804__i + 0]; ++G__51804__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51804__a,0);
} 
return G__51803__delegate.call(this,args__42471__auto__);};
G__51803.cljs$lang$maxFixedArity = 0;
G__51803.cljs$lang$applyTo = (function (arglist__51805){
var args__42471__auto__ = cljs.core.seq(arglist__51805);
return G__51803__delegate(args__42471__auto__);
});
G__51803.cljs$core$IFn$_invoke$arity$variadic = G__51803__delegate;
return G__51803;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Строка 'строки не найдены'
 */
gcclocal.views.crud_views.tr_rows_not_found = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (config_headers){
var G__51809 = "tr";
var G__51810 = null;
var G__51811 = (function (){var G__51812 = "td";
var G__51813 = {"colSpan": (cljs.core.count(config_headers) + (1)), "style": {"textAlign": "center", "color": "#AAA"}};
var G__51814 = "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445";
return React.createElement(G__51812,G__51813,G__51814);
})();
return React.createElement(G__51809,G__51810,G__51811);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"tr-rows-not-found");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51815__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51815 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51816__i = 0, G__51816__a = new Array(arguments.length -  0);
while (G__51816__i < G__51816__a.length) {G__51816__a[G__51816__i] = arguments[G__51816__i + 0]; ++G__51816__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51816__a,0);
} 
return G__51815__delegate.call(this,args__42471__auto__);};
G__51815.cljs$lang$maxFixedArity = 0;
G__51815.cljs$lang$applyTo = (function (arglist__51817){
var args__42471__auto__ = cljs.core.seq(arglist__51817);
return G__51815__delegate(args__42471__auto__);
});
G__51815.cljs$core$IFn$_invoke$arity$variadic = G__51815__delegate;
return G__51815;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Таблица CRUD по умолчанию
 */
gcclocal.views.crud_views.default_crud_table_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (p__51819){
var map__51820 = p__51819;
var map__51820__$1 = ((((!((map__51820 == null)))?((((map__51820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51820):map__51820);
var params = map__51820__$1;
var cancel_edit_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$cancel_DASH_edit_DASH_row_DASH_fn);
var cancel_add_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$cancel_DASH_add_DASH_fn);
var selected_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$selected_DASH_row);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$sort_DASH_fn);
var delete_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$delete_DASH_disabled_QMARK_);
var select_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$select_DASH_row_DASH_fn);
var edit_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$edit_DASH_mode_QMARK_);
var start_edit_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$start_DASH_edit_DASH_row_DASH_fn);
var add_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$add_DASH_row_DASH_fn);
var save_edit_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$save_DASH_edit_DASH_row_DASH_fn);
var add_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$add_DASH_mode_QMARK_);
var edit_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$edit_DASH_disabled_QMARK_);
var delete_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$delete_DASH_row_DASH_fn);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$rows);
var config_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$config_DASH_headers);
var sorting_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$sorting_DASH_map);
var custom_get_tr_class_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$custom_DASH_get_DASH_tr_DASH_class_DASH_fn);
var add_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$add_DASH_disabled_QMARK_);
var config_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51820__$1,cljs.core.cst$kw$config_DASH_fields);
var G__51823 = "table";
var G__51824 = {"style": {"marginTop": "1em !important"}, "className": "ui selectable small celled fixed sortable table\n                   with-overflow-tds\n                   crud-main-table"};
var G__51825 = sablono.interpreter.interpret((gcclocal.views.crud_views.table_thead.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_views.table_thead.cljs$core$IFn$_invoke$arity$3(config_headers,sorting_map,sort_fn) : gcclocal.views.crud_views.table_thead.call(null,config_headers,sorting_map,sort_fn)));
var G__51826 = (function (){var attrs51822 = (cljs.core.truth_((function (){var and__30375__auto__ = add_mode_QMARK_;
if(cljs.core.truth_(and__30375__auto__)){
return cljs.core.not(add_disabled_QMARK_);
} else {
return and__30375__auto__;
}
})())?(gcclocal.views.crud_views.tr_add_row_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.views.crud_views.tr_add_row_view.cljs$core$IFn$_invoke$arity$4(config_fields,add_mode_QMARK_,add_row_fn,cancel_add_fn) : gcclocal.views.crud_views.tr_add_row_view.call(null,config_fields,add_mode_QMARK_,add_row_fn,cancel_add_fn)):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs51822))?sablono.interpreter.attributes(attrs51822):null),((cljs.core.map_QMARK_(attrs51822))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core.count(rows) > (0)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs51822,G__51823,G__51824,G__51825,map__51820,map__51820__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields){
return (function (p1__51818_SHARP_){
var G__51827 = p1__51818_SHARP_;
var G__51828 = config_fields;
var G__51829 = edit_disabled_QMARK_;
var G__51830 = delete_disabled_QMARK_;
var G__51831 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__51818_SHARP_,selected_row);
var G__51832 = edit_mode_QMARK_;
var G__51833 = select_row_fn;
var G__51834 = start_edit_row_fn;
var G__51835 = delete_row_fn;
var G__51836 = save_edit_row_fn;
var G__51837 = cancel_edit_row_fn;
var G__51838 = custom_get_tr_class_fn;
return (gcclocal.views.crud_views.tr_row_view.cljs$core$IFn$_invoke$arity$12 ? gcclocal.views.crud_views.tr_row_view.cljs$core$IFn$_invoke$arity$12(G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833,G__51834,G__51835,G__51836,G__51837,G__51838) : gcclocal.views.crud_views.tr_row_view.call(null,G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833,G__51834,G__51835,G__51836,G__51837,G__51838));
});})(attrs51822,G__51823,G__51824,G__51825,map__51820,map__51820__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields))
,rows)):sablono.interpreter.interpret((gcclocal.views.crud_views.tr_rows_not_found.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.crud_views.tr_rows_not_found.cljs$core$IFn$_invoke$arity$1(config_headers) : gcclocal.views.crud_views.tr_rows_not_found.call(null,config_headers))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51822),(((cljs.core.count(rows) > (0)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs51822,G__51823,G__51824,G__51825,map__51820,map__51820__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields){
return (function (p1__51818_SHARP_){
var G__51839 = p1__51818_SHARP_;
var G__51840 = config_fields;
var G__51841 = edit_disabled_QMARK_;
var G__51842 = delete_disabled_QMARK_;
var G__51843 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__51818_SHARP_,selected_row);
var G__51844 = edit_mode_QMARK_;
var G__51845 = select_row_fn;
var G__51846 = start_edit_row_fn;
var G__51847 = delete_row_fn;
var G__51848 = save_edit_row_fn;
var G__51849 = cancel_edit_row_fn;
var G__51850 = custom_get_tr_class_fn;
return (gcclocal.views.crud_views.tr_row_view.cljs$core$IFn$_invoke$arity$12 ? gcclocal.views.crud_views.tr_row_view.cljs$core$IFn$_invoke$arity$12(G__51839,G__51840,G__51841,G__51842,G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850) : gcclocal.views.crud_views.tr_row_view.call(null,G__51839,G__51840,G__51841,G__51842,G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850));
});})(attrs51822,G__51823,G__51824,G__51825,map__51820,map__51820__$1,params,cancel_edit_row_fn,cancel_add_fn,selected_row,sort_fn,delete_disabled_QMARK_,select_row_fn,edit_mode_QMARK_,start_edit_row_fn,add_row_fn,save_edit_row_fn,add_mode_QMARK_,edit_disabled_QMARK_,delete_row_fn,rows,config_headers,sorting_map,custom_get_tr_class_fn,add_disabled_QMARK_,config_fields))
,rows)):sablono.interpreter.interpret((gcclocal.views.crud_views.tr_rows_not_found.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.crud_views.tr_rows_not_found.cljs$core$IFn$_invoke$arity$1(config_headers) : gcclocal.views.crud_views.tr_rows_not_found.call(null,config_headers))))], null)));
})();
return React.createElement(G__51823,G__51824,G__51825,G__51826);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"default-crud-table-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51851__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51851 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51852__i = 0, G__51852__a = new Array(arguments.length -  0);
while (G__51852__i < G__51852__a.length) {G__51852__a[G__51852__i] = arguments[G__51852__i + 0]; ++G__51852__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51852__a,0);
} 
return G__51851__delegate.call(this,args__42471__auto__);};
G__51851.cljs$lang$maxFixedArity = 0;
G__51851.cljs$lang$applyTo = (function (arglist__51853){
var args__42471__auto__ = cljs.core.seq(arglist__51853);
return G__51851__delegate(args__42471__auto__);
});
G__51851.cljs$core$IFn$_invoke$arity$variadic = G__51851__delegate;
return G__51851;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
