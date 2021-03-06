// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.comm.dom_utils');
goog.require('cljs.core');
goog.require('clojure.string');
gcclocal.comm.dom_utils.q = (function gcclocal$comm$dom_utils$q(selector){
return document.querySelector(selector);
});
gcclocal.comm.dom_utils.rcomp__GT_js$ = (function gcclocal$comm$dom_utils$rcomp__GT_js$(react_comp){
return $(ReactDOM.findDOMNode(react_comp));
});
gcclocal.comm.dom_utils.find_in_rcomp = (function gcclocal$comm$dom_utils$find_in_rcomp(react_comp,sel_str){
var elem = gcclocal.comm.dom_utils.rcomp__GT_js$.call(null,react_comp).find(sel_str);
return (elem[(0)]);
});
gcclocal.comm.dom_utils.set_value_BANG_ = (function gcclocal$comm$dom_utils$set_value_BANG_(el,value){
return el.value = value;
});
gcclocal.comm.dom_utils.value = (function gcclocal$comm$dom_utils$value(el){
if((el == null)){
return null;
} else {
var val = el.value;
if(clojure.string.blank_QMARK_.call(null,val)){
return null;
} else {
return clojure.string.trim.call(null,val);
}
}
});
gcclocal.comm.dom_utils.date_value = (function gcclocal$comm$dom_utils$date_value(el){
var temp__4657__auto__ = gcclocal.comm.dom_utils.value.call(null,el);
if(cljs.core.truth_(temp__4657__auto__)){
var val = temp__4657__auto__;
var val__$1 = Date.parse(val);
if(cljs.core.truth_(isNaN(val__$1))){
return null;
} else {
return (new Date(val__$1));
}
} else {
return null;
}
});
gcclocal.comm.dom_utils.array_value = (function gcclocal$comm$dom_utils$array_value(el){
var temp__4657__auto__ = gcclocal.comm.dom_utils.value.call(null,el);
if(cljs.core.truth_(temp__4657__auto__)){
var val = temp__4657__auto__;
return clojure.string.split.call(null,val,/\s+/);
} else {
return null;
}
});
gcclocal.comm.dom_utils.value_from_dom = (function gcclocal$comm$dom_utils$value_from_dom(selector){
return gcclocal.comm.dom_utils.value.call(null,gcclocal.comm.dom_utils.q.call(null,selector));
});
gcclocal.comm.dom_utils.greet = (function gcclocal$comm$dom_utils$greet(){
return console.log("Hello world!");
});
goog.exportSymbol('gcclocal.comm.dom_utils.greet', gcclocal.comm.dom_utils.greet);

//# sourceMappingURL=dom_utils.js.map