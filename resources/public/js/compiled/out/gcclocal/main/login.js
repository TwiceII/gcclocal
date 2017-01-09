// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.main.login');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
goog.require('gcclocal.comm.dom_utils');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gcclocal.main.login.form_errors !== 'undefined'){
} else {
gcclocal.main.login.form_errors = cljs.core.atom.call(null,null);
}
gcclocal.main.login.post_login = (function gcclocal$main$login$post_login(){
var username = gcclocal.comm.dom_utils.value_from_dom.call(null,"[name='username']");
var password = gcclocal.comm.dom_utils.value_from_dom.call(null,"[name='password']");
return gcclocal.comm.utils.post_json_with_success_check.call(null,"/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null),((function (username,password){
return (function (r){
cljs.core.println.call(null,"success login");

return window.location = new cljs.core.Keyword(null,"redirect-url","redirect-url",1795705632).cljs$core$IFn$_invoke$arity$1(r);
});})(username,password))
,((function (username,password){
return (function (r){
return cljs.core.reset_BANG_.call(null,gcclocal.main.login.form_errors,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r));
});})(username,password))
);
});
/**
 * 
 */
gcclocal.main.login.login_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var errors = rum.core.react.call(null,gcclocal.main.login.form_errors);
return React.createElement("div",{"className": "column"},React.createElement("div",{"className": "ui teal image huge header"},React.createElement("img",{"src": "images/logo_brk.png", "className": "image"}),React.createElement("div",{"className": "content"},"\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")),React.createElement("form",{"onSubmit": ((function (errors){
return (function (p1__44364_SHARP_){
gcclocal.main.login.post_login.call(null);

return p1__44364_SHARP_.preventDefault();
});})(errors))
, "className": "ui large form error"},React.createElement("div",{"className": "ui stacked segment"},React.createElement("div",{"className": "field"},React.createElement("div",{"className": "ui left icon input"},React.createElement("i",{"className": "user icon"}),sablono.interpreter.create_element.call(null,"input",{"type": "text", "name": "username", "placeholder": "\u041B\u043E\u0433\u0438\u043D"}))),React.createElement("div",{"className": "field"},React.createElement("div",{"className": "ui left icon input"},React.createElement("i",{"className": "lock icon"}),sablono.interpreter.create_element.call(null,"input",{"type": "password", "name": "password", "placeholder": "\u041F\u0430\u0440\u043E\u043B\u044C"}))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,gcclocal.comm.utils.nil_or_empty_QMARK_.call(null,errors)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.error.message","div.ui.error.message",-658647675),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),cljs.core.map.call(null,((function (errors){
return (function (p1__44365_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),p1__44365_SHARP_], null);
});})(errors))
,errors)], null)], null):null)),React.createElement("button",{"className": "ui fluid large teal button"},"\u0412\u043E\u0439\u0442\u0438"))));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"login-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__44374__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__44374 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__44375__i = 0, G__44375__a = new Array(arguments.length -  0);
while (G__44375__i < G__44375__a.length) {G__44375__a[G__44375__i] = arguments[G__44375__i + 0]; ++G__44375__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__44375__a,0);
} 
return G__44374__delegate.call(this,args__33795__auto__);};
G__44374.cljs$lang$maxFixedArity = 0;
G__44374.cljs$lang$applyTo = (function (arglist__44376){
var args__33795__auto__ = cljs.core.seq(arglist__44376);
return G__44374__delegate(args__33795__auto__);
});
G__44374.cljs$core$IFn$_invoke$arity$variadic = G__44374__delegate;
return G__44374;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
gcclocal.main.login.init = (function gcclocal$main$login$init(){
cljs.core.println.call(null,"init login");

return rum.core.mount.call(null,gcclocal.main.login.login_view.call(null),document.getElementById("mainp"));
});
goog.exportSymbol('gcclocal.main.login.init', gcclocal.main.login.init);

//# sourceMappingURL=login.js.map