// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.views.common');
goog.require('cljs.core');
goog.require('rum.core');
gcclocal.views.common.modal_atom = (function (){var G__52654 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$header,null,cljs.core.cst$kw$text,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52654) : cljs.core.atom.call(null,G__52654));
})();
/**
 * Показать модальное окно подтверждения
 *   с текстом и функцией, которая последует при подтв.
 */
gcclocal.views.common.show_approve_modal = (function gcclocal$views$common$show_approve_modal(var_args){
var args52655 = [];
var len__31462__auto___52660 = arguments.length;
var i__31463__auto___52661 = (0);
while(true){
if((i__31463__auto___52661 < len__31462__auto___52660)){
args52655.push((arguments[i__31463__auto___52661]));

var G__52662 = (i__31463__auto___52661 + (1));
i__31463__auto___52661 = G__52662;
continue;
} else {
}
break;
}

var G__52657 = args52655.length;
switch (G__52657) {
case 2:
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52655.length)].join('')));

}
});

gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$2 = (function (text,approve_fn){
return gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$3(null,text,approve_fn);
});

gcclocal.views.common.show_approve_modal.cljs$core$IFn$_invoke$arity$3 = (function (header,text,approve_fn){
var G__52658_52664 = gcclocal.views.common.modal_atom;
var G__52659_52665 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,text,cljs.core.cst$kw$header,header], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__52658_52664,G__52659_52665) : cljs.core.reset_BANG_.call(null,G__52658_52664,G__52659_52665));

return $("#global-approve-modal").modal({"detachable": false, "onApprove": (function (){
return (approve_fn.cljs$core$IFn$_invoke$arity$0 ? approve_fn.cljs$core$IFn$_invoke$arity$0() : approve_fn.call(null));
})}).modal("show");
});

gcclocal.views.common.show_approve_modal.cljs$lang$maxFixedArity = 3;

/**
 * Модальное окно подтверждения какого-либо действия (например удаления)
 */
gcclocal.views.common.basic_approve_modal_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (){
var options = rum.core.react(gcclocal.views.common.modal_atom);
var attrs52666 = (cljs.core.truth_(cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(options))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$header,cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(options)], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs52666))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"global-approve-modal",cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","small","modal"], null)], null),attrs52666], 0))):{"id": "global-approve-modal", "className": "ui small modal"}),((cljs.core.map_QMARK_(attrs52666))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52672 = "div";
var G__52673 = {"className": "content"};
var G__52674 = (function (){var attrs52671 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs52671))?sablono.interpreter.attributes(attrs52671):null),((cljs.core.map_QMARK_(attrs52671))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs52671)], null)));
})();
return React.createElement(G__52672,G__52673,G__52674);
})(),(function (){var G__52675 = "div";
var G__52676 = {"className": "actions"};
var G__52677 = (function (){var G__52679 = "div";
var G__52680 = {"className": "ui deny button"};
var G__52681 = "\u041D\u0435\u0442";
return React.createElement(G__52679,G__52680,G__52681);
})();
var G__52678 = (function (){var G__52682 = "div";
var G__52683 = {"className": "ui approve positive button"};
var G__52684 = "\u0414\u0430";
return React.createElement(G__52682,G__52683,G__52684);
})();
return React.createElement(G__52675,G__52676,G__52677,G__52678);
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs52666),(function (){var G__52686 = "div";
var G__52687 = {"className": "content"};
var G__52688 = (function (){var attrs52685 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs52685))?sablono.interpreter.attributes(attrs52685):null),((cljs.core.map_QMARK_(attrs52685))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs52685)], null)));
})();
return React.createElement(G__52686,G__52687,G__52688);
})(),(function (){var G__52689 = "div";
var G__52690 = {"className": "actions"};
var G__52691 = (function (){var G__52693 = "div";
var G__52694 = {"className": "ui deny button"};
var G__52695 = "\u041D\u0435\u0442";
return React.createElement(G__52693,G__52694,G__52695);
})();
var G__52692 = (function (){var G__52696 = "div";
var G__52697 = {"className": "ui approve positive button"};
var G__52698 = "\u0414\u0430";
return React.createElement(G__52696,G__52697,G__52698);
})();
return React.createElement(G__52689,G__52690,G__52691,G__52692);
})()], null)));
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"basic-approve-modal-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__52699__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__52699 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__52700__i = 0, G__52700__a = new Array(arguments.length -  0);
while (G__52700__i < G__52700__a.length) {G__52700__a[G__52700__i] = arguments[G__52700__i + 0]; ++G__52700__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__52700__a,0);
} 
return G__52699__delegate.call(this,args__42471__auto__);};
G__52699.cljs$lang$maxFixedArity = 0;
G__52699.cljs$lang$applyTo = (function (arglist__52701){
var args__42471__auto__ = cljs.core.seq(arglist__52701);
return G__52699__delegate(args__42471__auto__);
});
G__52699.cljs$core$IFn$_invoke$arity$variadic = G__52699__delegate;
return G__52699;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
