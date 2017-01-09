// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.main.login');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.dom_utils');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_();
if(typeof gcclocal.main.login.form_errors !== 'undefined'){
} else {
gcclocal.main.login.form_errors = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
gcclocal.main.login.post_login = (function gcclocal$main$login$post_login(){
var username = gcclocal.comm.dom_utils.value_from_dom("[name='username']");
var password = gcclocal.comm.dom_utils.value_from_dom("[name='password']");
return gcclocal.comm.utils.post_json_with_success_check("/login",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password], null),((function (username,password){
return (function (r){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["success login"], 0));

return window.location = cljs.core.cst$kw$redirect_DASH_url.cljs$core$IFn$_invoke$arity$1(r);
});})(username,password))
,((function (username,password){
return (function (r){
var G__55046 = gcclocal.main.login.form_errors;
var G__55047 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55046,G__55047) : cljs.core.reset_BANG_.call(null,G__55046,G__55047));
});})(username,password))
);
});
/**
 * 
 */
gcclocal.main.login.login_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (){
var errors = rum.core.react(gcclocal.main.login.form_errors);
var G__55052 = "div";
var G__55053 = {"className": "column"};
var G__55054 = (function (){var G__55056 = "div";
var G__55057 = {"className": "ui teal image huge header"};
var G__55058 = (function (){var G__55060 = "img";
var G__55061 = {"src": "images/logo_gcc.png", "className": "image"};
return React.createElement(G__55060,G__55061);
})();
var G__55059 = (function (){var G__55062 = "div";
var G__55063 = {"className": "content"};
var G__55064 = "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443";
return React.createElement(G__55062,G__55063,G__55064);
})();
return React.createElement(G__55056,G__55057,G__55058,G__55059);
})();
var G__55055 = (function (){var G__55065 = "form";
var G__55066 = {"onSubmit": ((function (G__55065,G__55052,G__55053,G__55054,errors){
return (function (p1__55048_SHARP_){
gcclocal.main.login.post_login();

return p1__55048_SHARP_.preventDefault();
});})(G__55065,G__55052,G__55053,G__55054,errors))
, "className": "ui large form error"};
var G__55067 = (function (){var G__55074 = "div";
var G__55075 = {"className": "ui stacked segment"};
var G__55076 = (function (){var G__55080 = "div";
var G__55081 = {"className": "field"};
var G__55082 = (function (){var G__55083 = "div";
var G__55084 = {"className": "ui left icon input"};
var G__55085 = (function (){var G__55087 = "i";
var G__55088 = {"className": "user icon"};
return React.createElement(G__55087,G__55088);
})();
var G__55086 = sablono.interpreter.create_element("input",{"type": "text", "name": "username", "placeholder": "\u041B\u043E\u0433\u0438\u043D"});
return React.createElement(G__55083,G__55084,G__55085,G__55086);
})();
return React.createElement(G__55080,G__55081,G__55082);
})();
var G__55077 = (function (){var G__55089 = "div";
var G__55090 = {"className": "field"};
var G__55091 = (function (){var G__55092 = "div";
var G__55093 = {"className": "ui left icon input"};
var G__55094 = (function (){var G__55096 = "i";
var G__55097 = {"className": "lock icon"};
return React.createElement(G__55096,G__55097);
})();
var G__55095 = sablono.interpreter.create_element("input",{"type": "password", "name": "password", "placeholder": "\u041F\u0430\u0440\u043E\u043B\u044C"});
return React.createElement(G__55092,G__55093,G__55094,G__55095);
})();
return React.createElement(G__55089,G__55090,G__55091);
})();
var G__55078 = sablono.interpreter.interpret(((cljs.core.not(gcclocal.comm.utils.nil_or_empty_QMARK_(errors)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ui$error$message,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__55074,G__55075,G__55076,G__55077,G__55065,G__55066,G__55052,G__55053,G__55054,errors){
return (function (p1__55049_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,p1__55049_SHARP_], null);
});})(G__55074,G__55075,G__55076,G__55077,G__55065,G__55066,G__55052,G__55053,G__55054,errors))
,errors)], null)], null):null));
var G__55079 = (function (){var G__55098 = "button";
var G__55099 = {"className": "ui fluid large teal button"};
var G__55100 = "\u0412\u043E\u0439\u0442\u0438";
return React.createElement(G__55098,G__55099,G__55100);
})();
return React.createElement(G__55074,G__55075,G__55076,G__55077,G__55078,G__55079);
})();
return React.createElement(G__55065,G__55066,G__55067);
})();
return React.createElement(G__55052,G__55053,G__55054,G__55055);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"login-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__55101__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__55101 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__55102__i = 0, G__55102__a = new Array(arguments.length -  0);
while (G__55102__i < G__55102__a.length) {G__55102__a[G__55102__i] = arguments[G__55102__i + 0]; ++G__55102__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__55102__a,0);
} 
return G__55101__delegate.call(this,args__42471__auto__);};
G__55101.cljs$lang$maxFixedArity = 0;
G__55101.cljs$lang$applyTo = (function (arglist__55103){
var args__42471__auto__ = cljs.core.seq(arglist__55103);
return G__55101__delegate(args__42471__auto__);
});
G__55101.cljs$core$IFn$_invoke$arity$variadic = G__55101__delegate;
return G__55101;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
gcclocal.main.login.init = (function gcclocal$main$login$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init login"], 0));

return rum.core.mount((gcclocal.main.login.login_view.cljs$core$IFn$_invoke$arity$0 ? gcclocal.main.login.login_view.cljs$core$IFn$_invoke$arity$0() : gcclocal.main.login.login_view.call(null)),document.getElementById("mainp"));
});
goog.exportSymbol('gcclocal.main.login.init', gcclocal.main.login.init);
