// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.views.crud_fields');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.dom_utils');
goog.require('rum.core');
/**
 * 
 */
gcclocal.views.crud_fields.custom_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (view_code){
return sablono.interpreter.interpret(view_code);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"custom-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51418__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51418 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51419__i = 0, G__51419__a = new Array(arguments.length -  0);
while (G__51419__i < G__51419__a.length) {G__51419__a[G__51419__i] = arguments[G__51419__i + 0]; ++G__51419__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51419__a,0);
} 
return G__51418__delegate.call(this,args__42471__auto__);};
G__51418.cljs$lang$maxFixedArity = 0;
G__51418.cljs$lang$applyTo = (function (arglist__51420){
var args__42471__auto__ = cljs.core.seq(arglist__51420);
return G__51418__delegate(args__42471__auto__);
});
G__51418.cljs$core$IFn$_invoke$arity$variadic = G__51418__delegate;
return G__51418;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Нарисовать вьюшку с td и полем для редактирования
 */
gcclocal.views.crud_fields.render_td_field_view = (function gcclocal$views$crud_fields$render_td_field_view(field_params,row,c_edit_mode_QMARK_,class_name_prefix){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(field_params),gcclocal.views.crud_fields.custom_view))?(function (){var custom_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(field_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$misc_DASH_params,cljs.core.cst$kw$custom_DASH_fn], null));
var G__51422 = (custom_fn.cljs$core$IFn$_invoke$arity$1 ? custom_fn.cljs$core$IFn$_invoke$arity$1(row) : custom_fn.call(null,row));
return (gcclocal.views.crud_fields.custom_view.cljs$core$IFn$_invoke$arity$1 ? gcclocal.views.crud_fields.custom_view.cljs$core$IFn$_invoke$arity$1(G__51422) : gcclocal.views.crud_fields.custom_view.call(null,G__51422));
})():cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(field_params).call(null,c_edit_mode_QMARK_,cljs.core.cst$kw$field_DASH_name.cljs$core$IFn$_invoke$arity$1(field_params).call(null,row),[cljs.core.str(class_name_prefix),cljs.core.str("-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$field_DASH_name.cljs$core$IFn$_invoke$arity$1(field_params)))].join(''),cljs.core.cst$kw$misc_DASH_params.cljs$core$IFn$_invoke$arity$1(field_params)))], null);
});
/**
 * Просто текст
 */
gcclocal.views.crud_fields.plain_text_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (_,value,___$1){
var attrs51423 = value;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51423))?sablono.interpreter.attributes(attrs51423):null),((cljs.core.map_QMARK_(attrs51423))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51423)], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"plain-text-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51424__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51424 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51425__i = 0, G__51425__a = new Array(arguments.length -  0);
while (G__51425__i < G__51425__a.length) {G__51425__a[G__51425__i] = arguments[G__51425__i + 0]; ++G__51425__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51425__a,0);
} 
return G__51424__delegate.call(this,args__42471__auto__);};
G__51424.cljs$lang$maxFixedArity = 0;
G__51424.cljs$lang$applyTo = (function (arglist__51426){
var args__42471__auto__ = cljs.core.seq(arglist__51426);
return G__51424__delegate(args__42471__auto__);
});
G__51424.cljs$core$IFn$_invoke$arity$variadic = G__51424__delegate;
return G__51424;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для текстового значения
 */
gcclocal.views.crud_fields.text_field_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value,class_name){
if(cljs.core.truth_(edit_mode_QMARK_)){
var G__51429 = "div";
var G__51430 = {"className": "ui fluid small input"};
var G__51431 = sablono.interpreter.create_element("input",{"type": "text", "defaultValue": value, "onClick": ((function (G__51429,G__51430){
return (function (p1__51427_SHARP_){
return p1__51427_SHARP_.stopPropagation();
});})(G__51429,G__51430))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))});
return React.createElement(G__51429,G__51430,G__51431);
} else {
var attrs51428 = value;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51428))?sablono.interpreter.attributes(attrs51428):null),((cljs.core.map_QMARK_(attrs51428))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51428)], null)));
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"text-field-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51432__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51432 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51433__i = 0, G__51433__a = new Array(arguments.length -  0);
while (G__51433__i < G__51433__a.length) {G__51433__a[G__51433__i] = arguments[G__51433__i + 0]; ++G__51433__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51433__a,0);
} 
return G__51432__delegate.call(this,args__42471__auto__);};
G__51432.cljs$lang$maxFixedArity = 0;
G__51432.cljs$lang$applyTo = (function (arglist__51434){
var args__42471__auto__ = cljs.core.seq(arglist__51434);
return G__51432__delegate(args__42471__auto__);
});
G__51432.cljs$core$IFn$_invoke$arity$variadic = G__51432__delegate;
return G__51432;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для числового значения
 */
gcclocal.views.crud_fields.number_field_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value,class_name){
if(cljs.core.truth_(edit_mode_QMARK_)){
var G__51437 = "div";
var G__51438 = {"className": "ui fluid small input"};
var G__51439 = sablono.interpreter.create_element("input",{"type": "number", "defaultValue": value, "onClick": ((function (G__51437,G__51438){
return (function (p1__51435_SHARP_){
return p1__51435_SHARP_.stopPropagation();
});})(G__51437,G__51438))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))});
return React.createElement(G__51437,G__51438,G__51439);
} else {
var attrs51436 = value;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51436))?sablono.interpreter.attributes(attrs51436):null),((cljs.core.map_QMARK_(attrs51436))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51436)], null)));
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"number-field-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51440__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51440 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51441__i = 0, G__51441__a = new Array(arguments.length -  0);
while (G__51441__i < G__51441__a.length) {G__51441__a[G__51441__i] = arguments[G__51441__i + 0]; ++G__51441__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51441__a,0);
} 
return G__51440__delegate.call(this,args__42471__auto__);};
G__51440.cljs$lang$maxFixedArity = 0;
G__51440.cljs$lang$applyTo = (function (arglist__51442){
var args__42471__auto__ = cljs.core.seq(arglist__51442);
return G__51440__delegate(args__42471__auto__);
});
G__51440.cljs$core$IFn$_invoke$arity$variadic = G__51440__delegate;
return G__51440;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для денег
 */
gcclocal.views.crud_fields.money_field_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value,class_name){
if(cljs.core.truth_(edit_mode_QMARK_)){
var G__51445 = "div";
var G__51446 = {"className": "ui fluid small input"};
var G__51447 = sablono.interpreter.create_element("input",{"type": "number", "step": "0.01", "defaultValue": value, "onClick": ((function (G__51445,G__51446){
return (function (p1__51443_SHARP_){
return p1__51443_SHARP_.stopPropagation();
});})(G__51445,G__51446))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))});
return React.createElement(G__51445,G__51446,G__51447);
} else {
var attrs51444 = gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1(value);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51444))?sablono.interpreter.attributes(attrs51444):null),((cljs.core.map_QMARK_(attrs51444))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51444)], null)));
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"money-field-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51448__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51448 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51449__i = 0, G__51449__a = new Array(arguments.length -  0);
while (G__51449__i < G__51449__a.length) {G__51449__a[G__51449__i] = arguments[G__51449__i + 0]; ++G__51449__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51449__a,0);
} 
return G__51448__delegate.call(this,args__42471__auto__);};
G__51448.cljs$lang$maxFixedArity = 0;
G__51448.cljs$lang$applyTo = (function (arglist__51450){
var args__42471__auto__ = cljs.core.seq(arglist__51450);
return G__51448__delegate(args__42471__auto__);
});
G__51448.cljs$core$IFn$_invoke$arity$variadic = G__51448__delegate;
return G__51448;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.views.crud_fields.on_cmoney_update = (function gcclocal$views$crud_fields$on_cmoney_update(state){
var rcomp_51457 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
(function (){var G__51455 = (function (){var G__51456 = ReactDOM.findDOMNode(rcomp_51457);
return $(G__51456);
})().find(".dropdown");
return $(G__51455);
})().dropdown({"onChange": ((function (rcomp_51457){
return (function (val,text,_){
return cljs.core.List.EMPTY;
});})(rcomp_51457))
, "fullTextSearch": true});

return state;
});
/**
 * Поле для денег c валютой
 */
gcclocal.views.crud_fields.cmoney_field_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value,class_name,p__51460){
var map__51461 = p__51460;
var map__51461__$1 = ((((!((map__51461 == null)))?((((map__51461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51461):map__51461);
var select_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,cljs.core.cst$kw$select_DASH_options);
if(cljs.core.truth_(edit_mode_QMARK_)){
var G__51464 = "div";
var G__51465 = {"onClick": ((function (G__51464,map__51461,map__51461__$1,select_options){
return (function (p1__51458_SHARP_){
return p1__51458_SHARP_.stopPropagation();
});})(G__51464,map__51461,map__51461__$1,select_options))
, "className": "ui fluid small right labeled input"};
var G__51466 = sablono.interpreter.create_element("input",{"type": "number", "step": "0.01", "defaultValue": cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(value), "onClick": ((function (G__51464,G__51465,map__51461,map__51461__$1,select_options){
return (function (p1__51459_SHARP_){
return p1__51459_SHARP_.stopPropagation();
});})(G__51464,G__51465,map__51461,map__51461__$1,select_options))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(class_name),cljs.core.str("-summ")].join('')], null))});
var G__51467 = (function (){var G__51473 = "div";
var G__51474 = {"className": "ui basic selection dropdown label currency-selection"};
var G__51475 = sablono.interpreter.create_element("input",{"type": "hidden", "defaultValue": cljs.core.cst$kw$c_id.cljs$core$IFn$_invoke$arity$1(value), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(class_name),cljs.core.str("-cid")].join('')], null))});
var G__51476 = (function (){var G__51479 = "i";
var G__51480 = {"className": "dropdown icon"};
return React.createElement(G__51479,G__51480);
})();
var G__51477 = (function (){var G__51481 = "div";
var G__51482 = {"className": "default text"};
var G__51483 = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C";
return React.createElement(G__51481,G__51482,G__51483);
})();
var G__51478 = (function (){var attrs51472 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__51473,G__51474,G__51475,G__51476,G__51477,G__51464,G__51465,G__51466,map__51461,map__51461__$1,select_options){
return (function (opt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_value,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(opt)], null),cljs.core.cst$kw$ccode.cljs$core$IFn$_invoke$arity$1(opt)], null);
});})(G__51473,G__51474,G__51475,G__51476,G__51477,G__51464,G__51465,G__51466,map__51461,map__51461__$1,select_options))
,rum.core.react(select_options));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51472))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs51472], 0))):{"className": "menu"}),((cljs.core.map_QMARK_(attrs51472))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51472)], null)));
})();
return React.createElement(G__51473,G__51474,G__51475,G__51476,G__51477,G__51478);
})();
return React.createElement(G__51464,G__51465,G__51466,G__51467);
} else {
var attrs51463 = gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(value));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51463))?sablono.interpreter.attributes(attrs51463):null),((cljs.core.map_QMARK_(attrs51463))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51463),sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null)));
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_update,gcclocal.views.crud_fields.on_cmoney_update], null)], null)),"cmoney-field-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51484__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51484 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51485__i = 0, G__51485__a = new Array(arguments.length -  0);
while (G__51485__i < G__51485__a.length) {G__51485__a[G__51485__i] = arguments[G__51485__i + 0]; ++G__51485__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51485__a,0);
} 
return G__51484__delegate.call(this,args__42471__auto__);};
G__51484.cljs$lang$maxFixedArity = 0;
G__51484.cljs$lang$applyTo = (function (arglist__51486){
var args__42471__auto__ = cljs.core.seq(arglist__51486);
return G__51484__delegate(args__42471__auto__);
});
G__51484.cljs$core$IFn$_invoke$arity$variadic = G__51484__delegate;
return G__51484;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для денег с валютой (для чтения)
 */
gcclocal.views.crud_fields.cmoney_readonly_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value){
var attrs51487 = gcclocal.comm.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$summ.cljs$core$IFn$_invoke$arity$1(value));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51487))?sablono.interpreter.attributes(attrs51487):null),((cljs.core.map_QMARK_(attrs51487))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51487),sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$currency.cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"cmoney-readonly-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51488__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51488 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51489__i = 0, G__51489__a = new Array(arguments.length -  0);
while (G__51489__i < G__51489__a.length) {G__51489__a[G__51489__i] = arguments[G__51489__i + 0]; ++G__51489__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51489__a,0);
} 
return G__51488__delegate.call(this,args__42471__auto__);};
G__51488.cljs$lang$maxFixedArity = 0;
G__51488.cljs$lang$applyTo = (function (arglist__51490){
var args__42471__auto__ = cljs.core.seq(arglist__51490);
return G__51488__delegate(args__42471__auto__);
});
G__51488.cljs$core$IFn$_invoke$arity$variadic = G__51488__delegate;
return G__51488;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для ридонли даты
 */
gcclocal.views.crud_fields.date_readonly_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value){
var attrs51491 = ((!((value == null)))?gcclocal.comm.utils.to_print_date(value):"");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51491))?sablono.interpreter.attributes(attrs51491):null),((cljs.core.map_QMARK_(attrs51491))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51491)], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"date-readonly-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51492__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51492 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51493__i = 0, G__51493__a = new Array(arguments.length -  0);
while (G__51493__i < G__51493__a.length) {G__51493__a[G__51493__i] = arguments[G__51493__i + 0]; ++G__51493__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51493__a,0);
} 
return G__51492__delegate.call(this,args__42471__auto__);};
G__51492.cljs$lang$maxFixedArity = 0;
G__51492.cljs$lang$applyTo = (function (arglist__51494){
var args__42471__auto__ = cljs.core.seq(arglist__51494);
return G__51492__delegate(args__42471__auto__);
});
G__51492.cljs$core$IFn$_invoke$arity$variadic = G__51492__delegate;
return G__51492;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для ридонли даты-времени
 */
gcclocal.views.crud_fields.datetime_readonly_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value){
var attrs51495 = ((!((value == null)))?gcclocal.comm.utils.to_print_datetime(value):"");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51495))?sablono.interpreter.attributes(attrs51495):null),((cljs.core.map_QMARK_(attrs51495))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51495)], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"datetime-readonly-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51496__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51496 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51497__i = 0, G__51497__a = new Array(arguments.length -  0);
while (G__51497__i < G__51497__a.length) {G__51497__a[G__51497__i] = arguments[G__51497__i + 0]; ++G__51497__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51497__a,0);
} 
return G__51496__delegate.call(this,args__42471__auto__);};
G__51496.cljs$lang$maxFixedArity = 0;
G__51496.cljs$lang$applyTo = (function (arglist__51498){
var args__42471__auto__ = cljs.core.seq(arglist__51498);
return G__51496__delegate(args__42471__auto__);
});
G__51496.cljs$core$IFn$_invoke$arity$variadic = G__51496__delegate;
return G__51496;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.views.crud_fields.on_input_with_calendar_mount = (function gcclocal$views$crud_fields$on_input_with_calendar_mount(state){
var rcomp_51501 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var pickmeup_config_51502 = {"format": "d.m.Y", "default_date": false, "hide_on_select": true};
(function (){var G__51500 = ReactDOM.findDOMNode(rcomp_51501);
return $(G__51500);
})().pickmeup(pickmeup_config_51502);

return state;
});
/**
 * Инпут с календарем
 */
gcclocal.views.crud_fields.input_with_calendar_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (value,class_name){
return sablono.interpreter.create_element("input",{"readOnly": "readonly", "defaultValue": ((!((value == null)))?gcclocal.comm.utils.to_print_date(value):null), "onClick": (function (p1__51503_SHARP_){
return p1__51503_SHARP_.stopPropagation();
}), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))});
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,gcclocal.views.crud_fields.on_input_with_calendar_mount], null)], null)),"input-with-calendar-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51504__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51504 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51505__i = 0, G__51505__a = new Array(arguments.length -  0);
while (G__51505__i < G__51505__a.length) {G__51505__a[G__51505__i] = arguments[G__51505__i + 0]; ++G__51505__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51505__a,0);
} 
return G__51504__delegate.call(this,args__42471__auto__);};
G__51504.cljs$lang$maxFixedArity = 0;
G__51504.cljs$lang$applyTo = (function (arglist__51506){
var args__42471__auto__ = cljs.core.seq(arglist__51506);
return G__51504__delegate(args__42471__auto__);
});
G__51504.cljs$core$IFn$_invoke$arity$variadic = G__51504__delegate;
return G__51504;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для выбора даты с календаря
 */
gcclocal.views.crud_fields.date_with_calendar_view = (function (){var render_mixin__42468__auto__ = rum.core.render_comp__GT_mixin((function (rcomp,edit_mode_QMARK_,value,class_name,p__51508){
var map__51509 = p__51508;
var map__51509__$1 = ((((!((map__51509 == null)))?((((map__51509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51509):map__51509);
var nullable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,cljs.core.cst$kw$nullable_QMARK_);
if(cljs.core.truth_(edit_mode_QMARK_)){
var attrs51511 = (gcclocal.views.crud_fields.input_with_calendar_view.cljs$core$IFn$_invoke$arity$2 ? gcclocal.views.crud_fields.input_with_calendar_view.cljs$core$IFn$_invoke$arity$2(value,class_name) : gcclocal.views.crud_fields.input_with_calendar_view.call(null,value,class_name));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51511))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","fluid","small","input"], null)], null),attrs51511], 0))):{"className": "ui fluid small input"}),((cljs.core.map_QMARK_(attrs51511))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((cljs.core.truth_(nullable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$remove$icon$link$icon_DASH_near_DASH_dropdown,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",cljs.core.cst$kw$on_DASH_click,((function (attrs51511,map__51509,map__51509__$1,nullable_QMARK_){
return (function (p1__51507_SHARP_){
gcclocal.comm.dom_utils.find_in_rcomp(rcomp,"input").value = "";

return p1__51507_SHARP_.stopPropagation();
});})(attrs51511,map__51509,map__51509__$1,nullable_QMARK_))
], null)], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51511),sablono.interpreter.interpret((cljs.core.truth_(nullable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$remove$icon$link$icon_DASH_near_DASH_dropdown,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",cljs.core.cst$kw$on_DASH_click,((function (attrs51511,map__51509,map__51509__$1,nullable_QMARK_){
return (function (p1__51507_SHARP_){
gcclocal.comm.dom_utils.find_in_rcomp(rcomp,"input").value = "";

return p1__51507_SHARP_.stopPropagation();
});})(attrs51511,map__51509,map__51509__$1,nullable_QMARK_))
], null)], null):null))], null)));
} else {
var attrs51512 = ((!((value == null)))?gcclocal.comm.utils.to_print_date(value):"");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51512))?sablono.interpreter.attributes(attrs51512):null),((cljs.core.map_QMARK_(attrs51512))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51512)], null)));
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"date-with-calendar-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51513__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51513 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51514__i = 0, G__51514__a = new Array(arguments.length -  0);
while (G__51514__i < G__51514__a.length) {G__51514__a[G__51514__i] = arguments[G__51514__i + 0]; ++G__51514__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51514__a,0);
} 
return G__51513__delegate.call(this,args__42471__auto__);};
G__51513.cljs$lang$maxFixedArity = 0;
G__51513.cljs$lang$applyTo = (function (arglist__51515){
var args__42471__auto__ = cljs.core.seq(arglist__51515);
return G__51513__delegate(args__42471__auto__);
});
G__51513.cljs$core$IFn$_invoke$arity$variadic = G__51513__delegate;
return G__51513;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.views.crud_fields.on_dropdown_mount = (function gcclocal$views$crud_fields$on_dropdown_mount(state){

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["on dropdown mount"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),cljs.core.cst$kw$on_DASH_change_DASH_fn], null))], 0));

var rcomp_51522 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var on_change_fn_51523 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),cljs.core.cst$kw$on_DASH_change_DASH_fn], null));
(function (){var G__51520 = (function (){var G__51521 = ReactDOM.findDOMNode(rcomp_51522);
return $(G__51521);
})().find(".dropdown");
return $(G__51520);
})().dropdown({"onChange": ((function (rcomp_51522,on_change_fn_51523){
return (function (val,text,_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["change to ",val], 0));

if(cljs.core.truth_(on_change_fn_51523)){
return (on_change_fn_51523.cljs$core$IFn$_invoke$arity$2 ? on_change_fn_51523.cljs$core$IFn$_invoke$arity$2(val,text) : on_change_fn_51523.call(null,val,text));
} else {
return null;
}
});})(rcomp_51522,on_change_fn_51523))
, "fullTextSearch": true});

return state;
});
/**
 * Вьюшка для дропдаун меню с поиском
 */
gcclocal.views.crud_fields.dropdown_view = (function (){var render_mixin__42468__auto__ = rum.core.render_comp__GT_mixin((function (rcomp,value,class_name,p__51525){
var map__51526 = p__51525;
var map__51526__$1 = ((((!((map__51526 == null)))?((((map__51526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51526):map__51526);
var select_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,cljs.core.cst$kw$select_DASH_options);
var get_option_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn);
var default_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,cljs.core.cst$kw$default_DASH_text);
var on_change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,cljs.core.cst$kw$on_DASH_change_DASH_fn);
var nullable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,cljs.core.cst$kw$nullable_QMARK_);
var G__51528 = "div";
var G__51529 = {"onClick": ((function (G__51528,map__51526,map__51526__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_){
return (function (p1__51524_SHARP_){
return p1__51524_SHARP_.stopPropagation();
});})(G__51528,map__51526,map__51526__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_))
, "className": "ui fluid small input"};
var G__51530 = (function (){var G__51536 = "div";
var G__51537 = {"style": {"minWidth": (0)}, "className": "ui fluid search selection dropdown"};
var G__51538 = sablono.interpreter.create_element("input",{"type": "hidden", "defaultValue": value, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))});
var G__51539 = (function (){var G__51542 = "i";
var G__51543 = {"className": "dropdown icon"};
return React.createElement(G__51542,G__51543);
})();
var G__51540 = (function (){var attrs51534 = default_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51534))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default","text"], null)], null),attrs51534], 0))):{"className": "default text"}),((cljs.core.map_QMARK_(attrs51534))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51534)], null)));
})();
var G__51541 = (function (){var attrs51535 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__51536,G__51537,G__51538,G__51539,G__51540,G__51528,G__51529,map__51526,map__51526__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_){
return (function (opt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_value,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(opt)], null),(get_option_name_fn.cljs$core$IFn$_invoke$arity$1 ? get_option_name_fn.cljs$core$IFn$_invoke$arity$1(opt) : get_option_name_fn.call(null,opt))], null);
});})(G__51536,G__51537,G__51538,G__51539,G__51540,G__51528,G__51529,map__51526,map__51526__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_))
,rum.core.react(select_options));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51535))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs51535], 0))):{"className": "menu"}),((cljs.core.map_QMARK_(attrs51535))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51535)], null)));
})();
return React.createElement(G__51536,G__51537,G__51538,G__51539,G__51540,G__51541);
})();
var G__51531 = sablono.interpreter.interpret((cljs.core.truth_(nullable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$remove$icon$link$icon_DASH_near_DASH_dropdown,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",cljs.core.cst$kw$on_DASH_click,((function (G__51528,G__51529,G__51530,map__51526,map__51526__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_){
return (function (){
return (function (){var G__51545 = (function (){var G__51546 = ReactDOM.findDOMNode(rcomp);
return $(G__51546);
})().find(".dropdown");
return $(G__51545);
})().dropdown("clear");
});})(G__51528,G__51529,G__51530,map__51526,map__51526__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_))
], null)], null):null));
return React.createElement(G__51528,G__51529,G__51530,G__51531);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,gcclocal.views.crud_fields.on_dropdown_mount], null),rum.core.reactive], null)),"dropdown-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51547__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51547 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51548__i = 0, G__51548__a = new Array(arguments.length -  0);
while (G__51548__i < G__51548__a.length) {G__51548__a[G__51548__i] = arguments[G__51548__i + 0]; ++G__51548__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51548__a,0);
} 
return G__51547__delegate.call(this,args__42471__auto__);};
G__51547.cljs$lang$maxFixedArity = 0;
G__51547.cljs$lang$applyTo = (function (arglist__51549){
var args__42471__auto__ = cljs.core.seq(arglist__51549);
return G__51547__delegate(args__42471__auto__);
});
G__51547.cljs$core$IFn$_invoke$arity$variadic = G__51547__delegate;
return G__51547;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для выбора из списка
 */
gcclocal.views.crud_fields.select_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value,class_name,p__51551){
var map__51552 = p__51551;
var map__51552__$1 = ((((!((map__51552 == null)))?((((map__51552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51552):map__51552);
var misc_params = map__51552__$1;
var select_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51552__$1,cljs.core.cst$kw$select_DASH_options);
var get_option_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51552__$1,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn);
var default_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51552__$1,cljs.core.cst$kw$default_DASH_text);
var nullable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51552__$1,cljs.core.cst$kw$nullable_QMARK_);
var sel_options = rum.core.react(select_options);
if((sel_options == null)){
var G__51556 = "div";
var G__51557 = {"style": {"fontStyle": "italic"}};
var G__51558 = "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...";
return React.createElement(G__51556,G__51557,G__51558);
} else {
if(cljs.core.truth_(edit_mode_QMARK_)){
return sablono.interpreter.interpret((gcclocal.views.crud_fields.dropdown_view.cljs$core$IFn$_invoke$arity$3 ? gcclocal.views.crud_fields.dropdown_view.cljs$core$IFn$_invoke$arity$3(value,class_name,misc_params) : gcclocal.views.crud_fields.dropdown_view.call(null,value,class_name,misc_params)));
} else {
var selected_option = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sel_options,map__51552,map__51552__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_){
return (function (p1__51550_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__51550_SHARP_),value);
});})(sel_options,map__51552,map__51552__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_))
,sel_options));
var attrs51559 = (get_option_name_fn.cljs$core$IFn$_invoke$arity$1 ? get_option_name_fn.cljs$core$IFn$_invoke$arity$1(selected_option) : get_option_name_fn.call(null,selected_option));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51559))?sablono.interpreter.attributes(attrs51559):null),((cljs.core.map_QMARK_(attrs51559))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51559)], null)));
}
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"select-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51560__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51560 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51561__i = 0, G__51561__a = new Array(arguments.length -  0);
while (G__51561__i < G__51561__a.length) {G__51561__a[G__51561__i] = arguments[G__51561__i + 0]; ++G__51561__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51561__a,0);
} 
return G__51560__delegate.call(this,args__42471__auto__);};
G__51560.cljs$lang$maxFixedArity = 0;
G__51560.cljs$lang$applyTo = (function (arglist__51562){
var args__42471__auto__ = cljs.core.seq(arglist__51562);
return G__51560__delegate(args__42471__auto__);
});
G__51560.cljs$core$IFn$_invoke$arity$variadic = G__51560__delegate;
return G__51560;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для выбора из списка (только для вывода на экран)
 */
gcclocal.views.crud_fields.select_readonly_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value,class_name,p__51564){
var map__51565 = p__51564;
var map__51565__$1 = ((((!((map__51565 == null)))?((((map__51565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51565):map__51565);
var misc_params = map__51565__$1;
var select_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51565__$1,cljs.core.cst$kw$select_DASH_options);
var get_option_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51565__$1,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn);
var default_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51565__$1,cljs.core.cst$kw$default_DASH_text);
var nullable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51565__$1,cljs.core.cst$kw$nullable_QMARK_);
var sel_options = rum.core.react(select_options);
if((sel_options == null)){
var G__51570 = "div";
var G__51571 = {"style": {"fontStyle": "italic"}};
var G__51572 = "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...";
return React.createElement(G__51570,G__51571,G__51572);
} else {
var selected_option = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sel_options,map__51565,map__51565__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_){
return (function (p1__51563_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__51563_SHARP_),value);
});})(sel_options,map__51565,map__51565__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_))
,sel_options));
var attrs51569 = (get_option_name_fn.cljs$core$IFn$_invoke$arity$1 ? get_option_name_fn.cljs$core$IFn$_invoke$arity$1(selected_option) : get_option_name_fn.call(null,selected_option));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51569))?sablono.interpreter.attributes(attrs51569):null),((cljs.core.map_QMARK_(attrs51569))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51569)], null)));
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"select-readonly-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51573__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51573 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51574__i = 0, G__51574__a = new Array(arguments.length -  0);
while (G__51574__i < G__51574__a.length) {G__51574__a[G__51574__i] = arguments[G__51574__i + 0]; ++G__51574__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51574__a,0);
} 
return G__51573__delegate.call(this,args__42471__auto__);};
G__51573.cljs$lang$maxFixedArity = 0;
G__51573.cljs$lang$applyTo = (function (arglist__51575){
var args__42471__auto__ = cljs.core.seq(arglist__51575);
return G__51573__delegate(args__42471__auto__);
});
G__51573.cljs$core$IFn$_invoke$arity$variadic = G__51573__delegate;
return G__51573;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Поле для выбора из списка (для вывода на экран) и редактирования (передается скрытый id)
 */
gcclocal.views.crud_fields.select_readonly_w_hidden_input_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (edit_mode_QMARK_,value,class_name,p__51577){
var map__51578 = p__51577;
var map__51578__$1 = ((((!((map__51578 == null)))?((((map__51578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51578):map__51578);
var misc_params = map__51578__$1;
var select_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51578__$1,cljs.core.cst$kw$select_DASH_options);
var get_option_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51578__$1,cljs.core.cst$kw$get_DASH_option_DASH_name_DASH_fn);
var default_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51578__$1,cljs.core.cst$kw$default_DASH_text);
var nullable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51578__$1,cljs.core.cst$kw$nullable_QMARK_);
var sel_options = rum.core.react(select_options);
if((sel_options == null)){
var G__51585 = "div";
var G__51586 = {"style": {"fontStyle": "italic"}};
var G__51587 = "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...";
return React.createElement(G__51585,G__51586,G__51587);
} else {
var selected_option = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sel_options,map__51578,map__51578__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_){
return (function (p1__51576_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__51576_SHARP_),value);
});})(sel_options,map__51578,map__51578__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_))
,sel_options));
var attrs51582 = (cljs.core.truth_(edit_mode_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"hidden",cljs.core.cst$kw$default_DASH_value,value,cljs.core.cst$kw$class,class_name], null)], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51582))?sablono.interpreter.attributes(attrs51582):null),((cljs.core.map_QMARK_(attrs51582))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51583 = (get_option_name_fn.cljs$core$IFn$_invoke$arity$1 ? get_option_name_fn.cljs$core$IFn$_invoke$arity$1(selected_option) : get_option_name_fn.call(null,selected_option));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51583))?sablono.interpreter.attributes(attrs51583):null),((cljs.core.map_QMARK_(attrs51583))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51583)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51582),(function (){var attrs51584 = (get_option_name_fn.cljs$core$IFn$_invoke$arity$1 ? get_option_name_fn.cljs$core$IFn$_invoke$arity$1(selected_option) : get_option_name_fn.call(null,selected_option));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs51584))?sablono.interpreter.attributes(attrs51584):null),((cljs.core.map_QMARK_(attrs51584))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51584)], null)));
})()], null)));
}
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"select-readonly-w-hidden-input-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51588__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51588 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51589__i = 0, G__51589__a = new Array(arguments.length -  0);
while (G__51589__i < G__51589__a.length) {G__51589__a[G__51589__i] = arguments[G__51589__i + 0]; ++G__51589__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51589__a,0);
} 
return G__51588__delegate.call(this,args__42471__auto__);};
G__51588.cljs$lang$maxFixedArity = 0;
G__51588.cljs$lang$applyTo = (function (arglist__51590){
var args__42471__auto__ = cljs.core.seq(arglist__51590);
return G__51588__delegate(args__42471__auto__);
});
G__51588.cljs$core$IFn$_invoke$arity$variadic = G__51588__delegate;
return G__51588;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
