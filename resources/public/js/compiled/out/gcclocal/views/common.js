// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.views.common');
goog.require('cljs.core');
goog.require('rum.core');
gcclocal.views.common.modal_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null));
/**
 * Показать модальное окно подтверждения
 *   с текстом и функцией, которая последует при подтв.
 */
gcclocal.views.common.show_approve_modal = (function gcclocal$views$common$show_approve_modal(var_args){
var args38317 = [];
var len__31652__auto___38320 = arguments.length;
var i__31653__auto___38321 = (0);
while(true){
if((i__31653__auto___38321 < len__31652__auto___38320)){
args38317.push((arguments[i__31653__auto___38321]));

var G__38322 = (i__31653__auto___38321 + (1));
i__31653__auto___38321 = G__38322;
continue;
} else {
}
break;
}

var G__38319 = args38317.length;
switch (G__38319) {
case 2:
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38317.length)].join('')));

}
});

gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$2 = (function (text,approve_fn){
return gcclocal.views.common.show_approve_modal.call(null,null,text,approve_fn);
});

gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$3 = (function (header,text,approve_fn){
cljs.core.reset_BANG_.call(null,gcclocal.views.common.modal_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"header","header",119441134),header], null));

return $("#global-approve-modal").modal({"detachable": false, "onApprove": (function (){
return approve_fn.call(null);
})}).modal("show");
});

gcclocal.views.common.show_approve_modal.cljs$lang$maxFixedArity = 3;

/**
 * Модальное окно подтверждения какого-либо действия (например удаления)
 */
gcclocal.views.common.basic_approve_modal_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var options = rum.core.react.call(null,gcclocal.views.common.modal_atom);
var attrs38324 = (cljs.core.truth_(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(options))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(options)], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38324))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"global-approve-modal",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","small","modal"], null)], null),attrs38324)):{"id": "global-approve-modal", "className": "ui small modal"}),((cljs.core.map_QMARK_.call(null,attrs38324))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"className": "content"},(function (){var attrs38329 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs38329))?sablono.interpreter.attributes.call(null,attrs38329):null),((cljs.core.map_QMARK_.call(null,attrs38329))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38329)], null)));
})()),React.createElement("div",{"className": "actions"},React.createElement("div",{"className": "ui deny button"},"\u041D\u0435\u0442"),React.createElement("div",{"className": "ui approve positive button"},"\u0414\u0430"))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38324),React.createElement("div",{"className": "content"},(function (){var attrs38330 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs38330))?sablono.interpreter.attributes.call(null,attrs38330):null),((cljs.core.map_QMARK_.call(null,attrs38330))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38330)], null)));
})()),React.createElement("div",{"className": "actions"},React.createElement("div",{"className": "ui deny button"},"\u041D\u0435\u0442"),React.createElement("div",{"className": "ui approve positive button"},"\u0414\u0430"))], null)));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"basic-approve-modal-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__38331__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__38331 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__38332__i = 0, G__38332__a = new Array(arguments.length -  0);
while (G__38332__i < G__38332__a.length) {G__38332__a[G__38332__i] = arguments[G__38332__i + 0]; ++G__38332__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__38332__a,0);
} 
return G__38331__delegate.call(this,args__33795__auto__);};
G__38331.cljs$lang$maxFixedArity = 0;
G__38331.cljs$lang$applyTo = (function (arglist__38333){
var args__33795__auto__ = cljs.core.seq(arglist__38333);
return G__38331__delegate(args__33795__auto__);
});
G__38331.cljs$core$IFn$_invoke$arity$variadic = G__38331__delegate;
return G__38331;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();

//# sourceMappingURL=common.js.map