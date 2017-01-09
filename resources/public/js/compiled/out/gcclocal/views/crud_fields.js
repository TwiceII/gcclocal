// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.views.crud_fields');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.dom_utils');
goog.require('rum.core');
/**
 * 
 */
gcclocal.views.crud_fields.custom_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (view_code){
return sablono.interpreter.interpret.call(null,view_code);
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"custom-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38206__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38206 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38207__i = 0, G__38207__a = new Array(arguments.length -  0);
while (G__38207__i < G__38207__a.length) {G__38207__a[G__38207__i] = arguments[G__38207__i + 0]; ++G__38207__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38207__a,0);
} 
return G__38206__delegate.call(this,args__33795__auto__);};
G__38206.cljs$lang$maxFixedArity = 0;
G__38206.cljs$lang$applyTo = (function (arglist__38208){
var args__33795__auto__ = cljs.core.seq(arglist__38208);
return G__38206__delegate(args__33795__auto__);
});
G__38206.cljs$core$IFn$_invoke$arity$variadic = G__38206__delegate;
return G__38206;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Нарисовать вьюшку с td и полем для редактирования
 */
gcclocal.views.crud_fields.render_td_field_view = (function gcclocal$views$crud_fields$render_td_field_view(field_params,row,c_edit_mode_QMARK_,class_name_prefix){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(field_params),gcclocal.views.crud_fields.custom_view))?(function (){var custom_fn = cljs.core.get_in.call(null,field_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515),new cljs.core.Keyword(null,"custom-fn","custom-fn",-428525430)], null));
return gcclocal.views.crud_fields.custom_view.call(null,custom_fn.call(null,row));
})():new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(field_params).call(null,c_edit_mode_QMARK_,new cljs.core.Keyword(null,"field-name","field-name",1300687948).cljs$core$IFn$_invoke$arity$1(field_params).call(null,row),[cljs.core.str(class_name_prefix),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"field-name","field-name",1300687948).cljs$core$IFn$_invoke$arity$1(field_params)))].join(''),new cljs.core.Keyword(null,"misc-params","misc-params",-1680585515).cljs$core$IFn$_invoke$arity$1(field_params)))], null);
});
/**
 * Просто текст
 */
gcclocal.views.crud_fields.plain_text_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (_,value,___$1){
var attrs38209 = value;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38209))?sablono.interpreter.attributes.call(null,attrs38209):null),((cljs.core.map_QMARK_.call(null,attrs38209))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38209)], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"plain-text-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38210__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38210 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38211__i = 0, G__38211__a = new Array(arguments.length -  0);
while (G__38211__i < G__38211__a.length) {G__38211__a[G__38211__i] = arguments[G__38211__i + 0]; ++G__38211__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38211__a,0);
} 
return G__38210__delegate.call(this,args__33795__auto__);};
G__38210.cljs$lang$maxFixedArity = 0;
G__38210.cljs$lang$applyTo = (function (arglist__38212){
var args__33795__auto__ = cljs.core.seq(arglist__38212);
return G__38210__delegate(args__33795__auto__);
});
G__38210.cljs$core$IFn$_invoke$arity$variadic = G__38210__delegate;
return G__38210;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для текстового значения
 */
gcclocal.views.crud_fields.text_field_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value,class_name){
if(cljs.core.truth_(edit_mode_QMARK_)){
return React.createElement("div",{"className": "ui fluid small input"},sablono.interpreter.create_element.call(null,"input",{"type": "text", "defaultValue": value, "onClick": (function (p1__38213_SHARP_){
return p1__38213_SHARP_.stopPropagation();
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))}));
} else {
var attrs38214 = value;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38214))?sablono.interpreter.attributes.call(null,attrs38214):null),((cljs.core.map_QMARK_.call(null,attrs38214))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38214)], null)));
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"text-field-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38215__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38215 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38216__i = 0, G__38216__a = new Array(arguments.length -  0);
while (G__38216__i < G__38216__a.length) {G__38216__a[G__38216__i] = arguments[G__38216__i + 0]; ++G__38216__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38216__a,0);
} 
return G__38215__delegate.call(this,args__33795__auto__);};
G__38215.cljs$lang$maxFixedArity = 0;
G__38215.cljs$lang$applyTo = (function (arglist__38217){
var args__33795__auto__ = cljs.core.seq(arglist__38217);
return G__38215__delegate(args__33795__auto__);
});
G__38215.cljs$core$IFn$_invoke$arity$variadic = G__38215__delegate;
return G__38215;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для числового значения
 */
gcclocal.views.crud_fields.number_field_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value,class_name){
if(cljs.core.truth_(edit_mode_QMARK_)){
return React.createElement("div",{"className": "ui fluid small input"},sablono.interpreter.create_element.call(null,"input",{"type": "number", "defaultValue": value, "onClick": (function (p1__38218_SHARP_){
return p1__38218_SHARP_.stopPropagation();
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))}));
} else {
var attrs38219 = value;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38219))?sablono.interpreter.attributes.call(null,attrs38219):null),((cljs.core.map_QMARK_.call(null,attrs38219))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38219)], null)));
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"number-field-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38220__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38220 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38221__i = 0, G__38221__a = new Array(arguments.length -  0);
while (G__38221__i < G__38221__a.length) {G__38221__a[G__38221__i] = arguments[G__38221__i + 0]; ++G__38221__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38221__a,0);
} 
return G__38220__delegate.call(this,args__33795__auto__);};
G__38220.cljs$lang$maxFixedArity = 0;
G__38220.cljs$lang$applyTo = (function (arglist__38222){
var args__33795__auto__ = cljs.core.seq(arglist__38222);
return G__38220__delegate(args__33795__auto__);
});
G__38220.cljs$core$IFn$_invoke$arity$variadic = G__38220__delegate;
return G__38220;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для денег
 */
gcclocal.views.crud_fields.money_field_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value,class_name){
if(cljs.core.truth_(edit_mode_QMARK_)){
return React.createElement("div",{"className": "ui fluid small input"},sablono.interpreter.create_element.call(null,"input",{"type": "number", "step": "0.01", "defaultValue": value, "onClick": (function (p1__38223_SHARP_){
return p1__38223_SHARP_.stopPropagation();
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))}));
} else {
var attrs38224 = gcclocal.comm.utils.get_number_with_decimals_str.call(null,value);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38224))?sablono.interpreter.attributes.call(null,attrs38224):null),((cljs.core.map_QMARK_.call(null,attrs38224))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38224)], null)));
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"money-field-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38225__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38225 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38226__i = 0, G__38226__a = new Array(arguments.length -  0);
while (G__38226__i < G__38226__a.length) {G__38226__a[G__38226__i] = arguments[G__38226__i + 0]; ++G__38226__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38226__a,0);
} 
return G__38225__delegate.call(this,args__33795__auto__);};
G__38225.cljs$lang$maxFixedArity = 0;
G__38225.cljs$lang$applyTo = (function (arglist__38227){
var args__33795__auto__ = cljs.core.seq(arglist__38227);
return G__38225__delegate(args__33795__auto__);
});
G__38225.cljs$core$IFn$_invoke$arity$variadic = G__38225__delegate;
return G__38225;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.views.crud_fields.on_cmoney_update = (function gcclocal$views$crud_fields$on_cmoney_update(state){
cljs.core.println.call(null,"on-cmoney-update");

var rcomp_38228 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
$($(ReactDOM.findDOMNode(rcomp_38228)).find(".ui.dropdown")).dropdown({"fullTextSearch": true});

return state;
});
gcclocal.views.crud_fields.on_cmoney_afterrender = (function gcclocal$views$crud_fields$on_cmoney_afterrender(os,state){
$(".ui.dropdown").dropdown({"fullTextSearch": true});

return state;
});
/**
 * Поле для денег c валютой
 */
gcclocal.views.crud_fields.cmoney_field_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value,class_name,p__38231){
var map__38232 = p__38231;
var map__38232__$1 = ((((!((map__38232 == null)))?((((map__38232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38232):map__38232);
var select_options = cljs.core.get.call(null,map__38232__$1,new cljs.core.Keyword(null,"select-options","select-options",-341918243));
if(cljs.core.truth_(edit_mode_QMARK_)){
return React.createElement("div",{"onClick": ((function (map__38232,map__38232__$1,select_options){
return (function (p1__38229_SHARP_){
return p1__38229_SHARP_.stopPropagation();
});})(map__38232,map__38232__$1,select_options))
, "className": "ui fluid small right labeled input"},sablono.interpreter.create_element.call(null,"input",{"type": "number", "step": "0.01", "defaultValue": new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(value), "onClick": ((function (map__38232,map__38232__$1,select_options){
return (function (p1__38230_SHARP_){
return p1__38230_SHARP_.stopPropagation();
});})(map__38232,map__38232__$1,select_options))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(class_name),cljs.core.str("-summ")].join('')], null))}),React.createElement("div",{"className": "ui basic selection dropdown label currency-selection"},sablono.interpreter.create_element.call(null,"input",{"type": "hidden", "defaultValue": new cljs.core.Keyword(null,"c_id","c_id",-385876256).cljs$core$IFn$_invoke$arity$1(value), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(class_name),cljs.core.str("-cid")].join('')], null))}),React.createElement("i",{"className": "dropdown icon"}),React.createElement("div",{"className": "default text"},"\u0412\u044B\u0431\u0440\u0430\u0442\u044C"),(function (){var attrs38239 = cljs.core.map.call(null,((function (map__38232,map__38232__$1,select_options){
return (function (opt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-value","data-value",-1897915206),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opt)], null),new cljs.core.Keyword(null,"ccode","ccode",770731037).cljs$core$IFn$_invoke$arity$1(opt)], null);
});})(map__38232,map__38232__$1,select_options))
,rum.core.react.call(null,select_options));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38239))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs38239)):{"className": "menu"}),((cljs.core.map_QMARK_.call(null,attrs38239))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38239)], null)));
})()));
} else {
var attrs38234 = gcclocal.comm.utils.get_number_with_decimals_str.call(null,new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(value));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38234))?sablono.interpreter.attributes.call(null,attrs38234):null),((cljs.core.map_QMARK_.call(null,attrs38234))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38234),sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null)));
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),gcclocal.views.crud_fields.on_cmoney_afterrender,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),gcclocal.views.crud_fields.on_cmoney_update], null)], null)),"cmoney-field-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38240__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38240 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38241__i = 0, G__38241__a = new Array(arguments.length -  0);
while (G__38241__i < G__38241__a.length) {G__38241__a[G__38241__i] = arguments[G__38241__i + 0]; ++G__38241__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38241__a,0);
} 
return G__38240__delegate.call(this,args__33795__auto__);};
G__38240.cljs$lang$maxFixedArity = 0;
G__38240.cljs$lang$applyTo = (function (arglist__38242){
var args__33795__auto__ = cljs.core.seq(arglist__38242);
return G__38240__delegate(args__33795__auto__);
});
G__38240.cljs$core$IFn$_invoke$arity$variadic = G__38240__delegate;
return G__38240;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для денег с валютой (для чтения)
 */
gcclocal.views.crud_fields.cmoney_readonly_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value){
var attrs38243 = gcclocal.comm.utils.get_number_with_decimals_str.call(null,new cljs.core.Keyword(null,"summ","summ",-1220398077).cljs$core$IFn$_invoke$arity$1(value));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38243))?sablono.interpreter.attributes.call(null,attrs38243):null),((cljs.core.map_QMARK_.call(null,attrs38243))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38243),sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value),"KZT"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(value))].join('')], null):null))], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"cmoney-readonly-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38244__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38244 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38245__i = 0, G__38245__a = new Array(arguments.length -  0);
while (G__38245__i < G__38245__a.length) {G__38245__a[G__38245__i] = arguments[G__38245__i + 0]; ++G__38245__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38245__a,0);
} 
return G__38244__delegate.call(this,args__33795__auto__);};
G__38244.cljs$lang$maxFixedArity = 0;
G__38244.cljs$lang$applyTo = (function (arglist__38246){
var args__33795__auto__ = cljs.core.seq(arglist__38246);
return G__38244__delegate(args__33795__auto__);
});
G__38244.cljs$core$IFn$_invoke$arity$variadic = G__38244__delegate;
return G__38244;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для ридонли даты
 */
gcclocal.views.crud_fields.date_readonly_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value){
var attrs38247 = ((!((value == null)))?gcclocal.comm.utils.to_print_date.call(null,value):"");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38247))?sablono.interpreter.attributes.call(null,attrs38247):null),((cljs.core.map_QMARK_.call(null,attrs38247))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38247)], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"date-readonly-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38248__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38248 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38249__i = 0, G__38249__a = new Array(arguments.length -  0);
while (G__38249__i < G__38249__a.length) {G__38249__a[G__38249__i] = arguments[G__38249__i + 0]; ++G__38249__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38249__a,0);
} 
return G__38248__delegate.call(this,args__33795__auto__);};
G__38248.cljs$lang$maxFixedArity = 0;
G__38248.cljs$lang$applyTo = (function (arglist__38250){
var args__33795__auto__ = cljs.core.seq(arglist__38250);
return G__38248__delegate(args__33795__auto__);
});
G__38248.cljs$core$IFn$_invoke$arity$variadic = G__38248__delegate;
return G__38248;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для ридонли даты-времени
 */
gcclocal.views.crud_fields.datetime_readonly_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value){
var attrs38251 = ((!((value == null)))?gcclocal.comm.utils.to_print_datetime.call(null,value):"");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38251))?sablono.interpreter.attributes.call(null,attrs38251):null),((cljs.core.map_QMARK_.call(null,attrs38251))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38251)], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"datetime-readonly-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38252__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38252 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38253__i = 0, G__38253__a = new Array(arguments.length -  0);
while (G__38253__i < G__38253__a.length) {G__38253__a[G__38253__i] = arguments[G__38253__i + 0]; ++G__38253__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38253__a,0);
} 
return G__38252__delegate.call(this,args__33795__auto__);};
G__38252.cljs$lang$maxFixedArity = 0;
G__38252.cljs$lang$applyTo = (function (arglist__38254){
var args__33795__auto__ = cljs.core.seq(arglist__38254);
return G__38252__delegate(args__33795__auto__);
});
G__38252.cljs$core$IFn$_invoke$arity$variadic = G__38252__delegate;
return G__38252;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.views.crud_fields.on_input_with_calendar_mount = (function gcclocal$views$crud_fields$on_input_with_calendar_mount(state){
var rcomp_38255 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var pickmeup_config_38256 = {"format": "d.m.Y", "default_date": false, "hide_on_select": true};
$(ReactDOM.findDOMNode(rcomp_38255)).pickmeup(pickmeup_config_38256);

return state;
});
/**
 * Инпут с календарем
 */
gcclocal.views.crud_fields.input_with_calendar_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (value,class_name){
return sablono.interpreter.create_element.call(null,"input",{"readOnly": "readonly", "defaultValue": ((!((value == null)))?gcclocal.comm.utils.to_print_date.call(null,value):null), "onClick": (function (p1__38257_SHARP_){
return p1__38257_SHARP_.stopPropagation();
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))});
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),gcclocal.views.crud_fields.on_input_with_calendar_mount], null)], null)),"input-with-calendar-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38258__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38258 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38259__i = 0, G__38259__a = new Array(arguments.length -  0);
while (G__38259__i < G__38259__a.length) {G__38259__a[G__38259__i] = arguments[G__38259__i + 0]; ++G__38259__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38259__a,0);
} 
return G__38258__delegate.call(this,args__33795__auto__);};
G__38258.cljs$lang$maxFixedArity = 0;
G__38258.cljs$lang$applyTo = (function (arglist__38260){
var args__33795__auto__ = cljs.core.seq(arglist__38260);
return G__38258__delegate(args__33795__auto__);
});
G__38258.cljs$core$IFn$_invoke$arity$variadic = G__38258__delegate;
return G__38258;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для выбора даты с календаря
 */
gcclocal.views.crud_fields.date_with_calendar_view = (function (){var render_mixin__33792__auto__ = rum.core.render_comp__GT_mixin.call(null,(function (rcomp,edit_mode_QMARK_,value,class_name,p__38262){
var map__38263 = p__38262;
var map__38263__$1 = ((((!((map__38263 == null)))?((((map__38263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38263):map__38263);
var nullable_QMARK_ = cljs.core.get.call(null,map__38263__$1,new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174));
if(cljs.core.truth_(edit_mode_QMARK_)){
var attrs38265 = gcclocal.views.crud_fields.input_with_calendar_view.call(null,value,class_name);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38265))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","fluid","small","input"], null)], null),attrs38265)):{"className": "ui fluid small input"}),((cljs.core.map_QMARK_.call(null,attrs38265))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(cljs.core.truth_(nullable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.remove.icon.link.icon-near-dropdown","i.remove.icon.link.icon-near-dropdown",1106174077),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs38265,map__38263,map__38263__$1,nullable_QMARK_){
return (function (p1__38261_SHARP_){
gcclocal.comm.dom_utils.find_in_rcomp.call(null,rcomp,"input").value = "";

return p1__38261_SHARP_.stopPropagation();
});})(attrs38265,map__38263,map__38263__$1,nullable_QMARK_))
], null)], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38265),sablono.interpreter.interpret.call(null,(cljs.core.truth_(nullable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.remove.icon.link.icon-near-dropdown","i.remove.icon.link.icon-near-dropdown",1106174077),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs38265,map__38263,map__38263__$1,nullable_QMARK_){
return (function (p1__38261_SHARP_){
gcclocal.comm.dom_utils.find_in_rcomp.call(null,rcomp,"input").value = "";

return p1__38261_SHARP_.stopPropagation();
});})(attrs38265,map__38263,map__38263__$1,nullable_QMARK_))
], null)], null):null))], null)));
} else {
var attrs38266 = ((!((value == null)))?gcclocal.comm.utils.to_print_date.call(null,value):"");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38266))?sablono.interpreter.attributes.call(null,attrs38266):null),((cljs.core.map_QMARK_.call(null,attrs38266))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38266)], null)));
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"date-with-calendar-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38267__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38267 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38268__i = 0, G__38268__a = new Array(arguments.length -  0);
while (G__38268__i < G__38268__a.length) {G__38268__a[G__38268__i] = arguments[G__38268__i + 0]; ++G__38268__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38268__a,0);
} 
return G__38267__delegate.call(this,args__33795__auto__);};
G__38267.cljs$lang$maxFixedArity = 0;
G__38267.cljs$lang$applyTo = (function (arglist__38269){
var args__33795__auto__ = cljs.core.seq(arglist__38269);
return G__38267__delegate(args__33795__auto__);
});
G__38267.cljs$core$IFn$_invoke$arity$variadic = G__38267__delegate;
return G__38267;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.views.crud_fields.on_dropdown_mount = (function gcclocal$views$crud_fields$on_dropdown_mount(state){

cljs.core.println.call(null,"on dropdown mount");

cljs.core.println.call(null,cljs.core.get_in.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275)], null)));

var rcomp_38270 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var on_change_fn_38271 = cljs.core.get_in.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275)], null));
$($(ReactDOM.findDOMNode(rcomp_38270)).find(".dropdown")).dropdown({"onChange": ((function (rcomp_38270,on_change_fn_38271){
return (function (val,text,_){
cljs.core.println.call(null,"change to ",val);

if(cljs.core.truth_(on_change_fn_38271)){
return on_change_fn_38271.call(null,val,text);
} else {
return null;
}
});})(rcomp_38270,on_change_fn_38271))
, "fullTextSearch": true});

return state;
});
/**
 * Вьюшка для дропдаун меню с поиском
 */
gcclocal.views.crud_fields.dropdown_view = (function (){var render_mixin__33792__auto__ = rum.core.render_comp__GT_mixin.call(null,(function (rcomp,value,class_name,p__38273){
var map__38274 = p__38273;
var map__38274__$1 = ((((!((map__38274 == null)))?((((map__38274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38274):map__38274);
var select_options = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"select-options","select-options",-341918243));
var get_option_name_fn = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895));
var default_text = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"default-text","default-text",-631230836));
var on_change_fn = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var nullable_QMARK_ = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174));
return React.createElement("div",{"onClick": ((function (map__38274,map__38274__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_){
return (function (p1__38272_SHARP_){
return p1__38272_SHARP_.stopPropagation();
});})(map__38274,map__38274__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_))
, "className": "ui fluid small input"},React.createElement("div",{"style": {"minWidth": (0)}, "className": "ui fluid search selection dropdown"},sablono.interpreter.create_element.call(null,"input",{"type": "hidden", "defaultValue": value, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))}),React.createElement("i",{"className": "dropdown icon"}),(function (){var attrs38278 = default_text;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38278))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default","text"], null)], null),attrs38278)):{"className": "default text"}),((cljs.core.map_QMARK_.call(null,attrs38278))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38278)], null)));
})(),(function (){var attrs38279 = cljs.core.map.call(null,((function (map__38274,map__38274__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_){
return (function (opt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-value","data-value",-1897915206),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opt)], null),get_option_name_fn.call(null,opt)], null);
});})(map__38274,map__38274__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_))
,rum.core.react.call(null,select_options));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38279))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs38279)):{"className": "menu"}),((cljs.core.map_QMARK_.call(null,attrs38279))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38279)], null)));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(nullable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.remove.icon.link.icon-near-dropdown","i.remove.icon.link.icon-near-dropdown",1106174077),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__38274,map__38274__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_){
return (function (){
return $($(ReactDOM.findDOMNode(rcomp)).find(".dropdown")).dropdown("clear");
});})(map__38274,map__38274__$1,select_options,get_option_name_fn,default_text,on_change_fn,nullable_QMARK_))
], null)], null):null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),gcclocal.views.crud_fields.on_dropdown_mount], null),rum.core.reactive], null)),"dropdown-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38280__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38280 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38281__i = 0, G__38281__a = new Array(arguments.length -  0);
while (G__38281__i < G__38281__a.length) {G__38281__a[G__38281__i] = arguments[G__38281__i + 0]; ++G__38281__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38281__a,0);
} 
return G__38280__delegate.call(this,args__33795__auto__);};
G__38280.cljs$lang$maxFixedArity = 0;
G__38280.cljs$lang$applyTo = (function (arglist__38282){
var args__33795__auto__ = cljs.core.seq(arglist__38282);
return G__38280__delegate(args__33795__auto__);
});
G__38280.cljs$core$IFn$_invoke$arity$variadic = G__38280__delegate;
return G__38280;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для выбора из списка
 */
gcclocal.views.crud_fields.select_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value,class_name,p__38284){
var map__38285 = p__38284;
var map__38285__$1 = ((((!((map__38285 == null)))?((((map__38285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38285):map__38285);
var misc_params = map__38285__$1;
var select_options = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"select-options","select-options",-341918243));
var get_option_name_fn = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895));
var default_text = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"default-text","default-text",-631230836));
var nullable_QMARK_ = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174));
var sel_options = rum.core.react.call(null,select_options);
if((sel_options == null)){
return React.createElement("div",{"style": {"fontStyle": "italic"}},"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
} else {
if(cljs.core.truth_(edit_mode_QMARK_)){
return sablono.interpreter.interpret.call(null,gcclocal.views.crud_fields.dropdown_view.call(null,value,class_name,misc_params));
} else {
var selected_option = cljs.core.first.call(null,cljs.core.filter.call(null,((function (sel_options,map__38285,map__38285__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_){
return (function (p1__38283_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38283_SHARP_),value);
});})(sel_options,map__38285,map__38285__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_))
,sel_options));
var attrs38289 = get_option_name_fn.call(null,selected_option);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38289))?sablono.interpreter.attributes.call(null,attrs38289):null),((cljs.core.map_QMARK_.call(null,attrs38289))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38289)], null)));
}
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"select-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38290__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38290 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38291__i = 0, G__38291__a = new Array(arguments.length -  0);
while (G__38291__i < G__38291__a.length) {G__38291__a[G__38291__i] = arguments[G__38291__i + 0]; ++G__38291__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38291__a,0);
} 
return G__38290__delegate.call(this,args__33795__auto__);};
G__38290.cljs$lang$maxFixedArity = 0;
G__38290.cljs$lang$applyTo = (function (arglist__38292){
var args__33795__auto__ = cljs.core.seq(arglist__38292);
return G__38290__delegate(args__33795__auto__);
});
G__38290.cljs$core$IFn$_invoke$arity$variadic = G__38290__delegate;
return G__38290;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для выбора из списка (только для вывода на экран)
 */
gcclocal.views.crud_fields.select_readonly_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value,class_name,p__38294){
var map__38295 = p__38294;
var map__38295__$1 = ((((!((map__38295 == null)))?((((map__38295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38295):map__38295);
var misc_params = map__38295__$1;
var select_options = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"select-options","select-options",-341918243));
var get_option_name_fn = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895));
var default_text = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"default-text","default-text",-631230836));
var nullable_QMARK_ = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174));
var sel_options = rum.core.react.call(null,select_options);
if((sel_options == null)){
return React.createElement("div",{"style": {"fontStyle": "italic"}},"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
} else {
var selected_option = cljs.core.first.call(null,cljs.core.filter.call(null,((function (sel_options,map__38295,map__38295__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_){
return (function (p1__38293_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38293_SHARP_),value);
});})(sel_options,map__38295,map__38295__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_))
,sel_options));
var attrs38299 = get_option_name_fn.call(null,selected_option);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38299))?sablono.interpreter.attributes.call(null,attrs38299):null),((cljs.core.map_QMARK_.call(null,attrs38299))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38299)], null)));
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"select-readonly-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38300__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38300 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38301__i = 0, G__38301__a = new Array(arguments.length -  0);
while (G__38301__i < G__38301__a.length) {G__38301__a[G__38301__i] = arguments[G__38301__i + 0]; ++G__38301__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38301__a,0);
} 
return G__38300__delegate.call(this,args__33795__auto__);};
G__38300.cljs$lang$maxFixedArity = 0;
G__38300.cljs$lang$applyTo = (function (arglist__38302){
var args__33795__auto__ = cljs.core.seq(arglist__38302);
return G__38300__delegate(args__33795__auto__);
});
G__38300.cljs$core$IFn$_invoke$arity$variadic = G__38300__delegate;
return G__38300;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Поле для выбора из списка (для вывода на экран) и редактирования (передается скрытый id)
 */
gcclocal.views.crud_fields.select_readonly_w_hidden_input_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (edit_mode_QMARK_,value,class_name,p__38304){
var map__38305 = p__38304;
var map__38305__$1 = ((((!((map__38305 == null)))?((((map__38305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38305):map__38305);
var misc_params = map__38305__$1;
var select_options = cljs.core.get.call(null,map__38305__$1,new cljs.core.Keyword(null,"select-options","select-options",-341918243));
var get_option_name_fn = cljs.core.get.call(null,map__38305__$1,new cljs.core.Keyword(null,"get-option-name-fn","get-option-name-fn",1799680895));
var default_text = cljs.core.get.call(null,map__38305__$1,new cljs.core.Keyword(null,"default-text","default-text",-631230836));
var nullable_QMARK_ = cljs.core.get.call(null,map__38305__$1,new cljs.core.Keyword(null,"nullable?","nullable?",-1144745174));
var sel_options = rum.core.react.call(null,select_options);
if((sel_options == null)){
return React.createElement("div",{"style": {"fontStyle": "italic"}},"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
} else {
var selected_option = cljs.core.first.call(null,cljs.core.filter.call(null,((function (sel_options,map__38305,map__38305__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_){
return (function (p1__38303_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38303_SHARP_),value);
});})(sel_options,map__38305,map__38305__$1,misc_params,select_options,get_option_name_fn,default_text,nullable_QMARK_))
,sel_options));
var attrs38309 = (cljs.core.truth_(edit_mode_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"class","class",-2030961996),class_name], null)], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38309))?sablono.interpreter.attributes.call(null,attrs38309):null),((cljs.core.map_QMARK_.call(null,attrs38309))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38310 = get_option_name_fn.call(null,selected_option);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38310))?sablono.interpreter.attributes.call(null,attrs38310):null),((cljs.core.map_QMARK_.call(null,attrs38310))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38310)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38309),(function (){var attrs38311 = get_option_name_fn.call(null,selected_option);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38311))?sablono.interpreter.attributes.call(null,attrs38311):null),((cljs.core.map_QMARK_.call(null,attrs38311))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38311)], null)));
})()], null)));
}
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"select-readonly-w-hidden-input-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38312__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38312 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38313__i = 0, G__38313__a = new Array(arguments.length -  0);
while (G__38313__i < G__38313__a.length) {G__38313__a[G__38313__i] = arguments[G__38313__i + 0]; ++G__38313__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38313__a,0);
} 
return G__38312__delegate.call(this,args__33795__auto__);};
G__38312.cljs$lang$maxFixedArity = 0;
G__38312.cljs$lang$applyTo = (function (arglist__38314){
var args__33795__auto__ = cljs.core.seq(arglist__38314);
return G__38312__delegate(args__33795__auto__);
});
G__38312.cljs$core$IFn$_invoke$arity$variadic = G__38312__delegate;
return G__38312;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();

//# sourceMappingURL=crud_fields.js.map