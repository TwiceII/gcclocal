// Compiled by ClojureScript 1.9.89 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__33233__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33230 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__33231 = cljs.core.seq.call(null,vec__33230);
var first__33232 = cljs.core.first.call(null,seq__33231);
var seq__33231__$1 = cljs.core.next.call(null,seq__33231);
var tag = first__33232;
var body = seq__33231__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33234__i = 0, G__33234__a = new Array(arguments.length -  0);
while (G__33234__i < G__33234__a.length) {G__33234__a[G__33234__i] = arguments[G__33234__i + 0]; ++G__33234__i;}
  args = new cljs.core.IndexedSeq(G__33234__a,0);
} 
return G__33233__delegate.call(this,args);};
G__33233.cljs$lang$maxFixedArity = 0;
G__33233.cljs$lang$applyTo = (function (arglist__33235){
var args = cljs.core.seq(arglist__33235);
return G__33233__delegate(args);
});
G__33233.cljs$core$IFn$_invoke$arity$variadic = G__33233__delegate;
return G__33233;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__31357__auto__ = (function sablono$core$update_arglists_$_iter__33240(s__33241){
return (new cljs.core.LazySeq(null,(function (){
var s__33241__$1 = s__33241;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33241__$1);
if(temp__4657__auto__){
var s__33241__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33241__$2)){
var c__31355__auto__ = cljs.core.chunk_first.call(null,s__33241__$2);
var size__31356__auto__ = cljs.core.count.call(null,c__31355__auto__);
var b__33243 = cljs.core.chunk_buffer.call(null,size__31356__auto__);
if((function (){var i__33242 = (0);
while(true){
if((i__33242 < size__31356__auto__)){
var args = cljs.core._nth.call(null,c__31355__auto__,i__33242);
cljs.core.chunk_append.call(null,b__33243,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33244 = (i__33242 + (1));
i__33242 = G__33244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33243),sablono$core$update_arglists_$_iter__33240.call(null,cljs.core.chunk_rest.call(null,s__33241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33243),null);
}
} else {
var args = cljs.core.first.call(null,s__33241__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__33240.call(null,cljs.core.rest.call(null,s__33241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31357__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31659__auto__ = [];
var len__31652__auto___33250 = arguments.length;
var i__31653__auto___33251 = (0);
while(true){
if((i__31653__auto___33251 < len__31652__auto___33250)){
args__31659__auto__.push((arguments[i__31653__auto___33251]));

var G__33252 = (i__31653__auto___33251 + (1));
i__31653__auto___33251 = G__33252;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__31357__auto__ = (function sablono$core$iter__33246(s__33247){
return (new cljs.core.LazySeq(null,(function (){
var s__33247__$1 = s__33247;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33247__$1);
if(temp__4657__auto__){
var s__33247__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33247__$2)){
var c__31355__auto__ = cljs.core.chunk_first.call(null,s__33247__$2);
var size__31356__auto__ = cljs.core.count.call(null,c__31355__auto__);
var b__33249 = cljs.core.chunk_buffer.call(null,size__31356__auto__);
if((function (){var i__33248 = (0);
while(true){
if((i__33248 < size__31356__auto__)){
var style = cljs.core._nth.call(null,c__31355__auto__,i__33248);
cljs.core.chunk_append.call(null,b__33249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__33253 = (i__33248 + (1));
i__33248 = G__33253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33249),sablono$core$iter__33246.call(null,cljs.core.chunk_rest.call(null,s__33247__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33249),null);
}
} else {
var style = cljs.core.first.call(null,s__33247__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__33246.call(null,cljs.core.rest.call(null,s__33247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31357__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq33245){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33245));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to33254 = (function sablono$core$link_to33254(var_args){
var args__31659__auto__ = [];
var len__31652__auto___33257 = arguments.length;
var i__31653__auto___33258 = (0);
while(true){
if((i__31653__auto___33258 < len__31652__auto___33257)){
args__31659__auto__.push((arguments[i__31653__auto___33258]));

var G__33259 = (i__31653__auto___33258 + (1));
i__31653__auto___33258 = G__33259;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((1) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to33254.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31660__auto__);
});

sablono.core.link_to33254.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to33254.cljs$lang$maxFixedArity = (1);

sablono.core.link_to33254.cljs$lang$applyTo = (function (seq33255){
var G__33256 = cljs.core.first.call(null,seq33255);
var seq33255__$1 = cljs.core.next.call(null,seq33255);
return sablono.core.link_to33254.cljs$core$IFn$_invoke$arity$variadic(G__33256,seq33255__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33254);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to33260 = (function sablono$core$mail_to33260(var_args){
var args__31659__auto__ = [];
var len__31652__auto___33267 = arguments.length;
var i__31653__auto___33268 = (0);
while(true){
if((i__31653__auto___33268 < len__31652__auto___33267)){
args__31659__auto__.push((arguments[i__31653__auto___33268]));

var G__33269 = (i__31653__auto___33268 + (1));
i__31653__auto___33268 = G__33269;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((1) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to33260.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31660__auto__);
});

sablono.core.mail_to33260.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__33263){
var vec__33264 = p__33263;
var content = cljs.core.nth.call(null,vec__33264,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__30577__auto__ = content;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to33260.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to33260.cljs$lang$applyTo = (function (seq33261){
var G__33262 = cljs.core.first.call(null,seq33261);
var seq33261__$1 = cljs.core.next.call(null,seq33261);
return sablono.core.mail_to33260.cljs$core$IFn$_invoke$arity$variadic(G__33262,seq33261__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33260);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list33270 = (function sablono$core$unordered_list33270(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__31357__auto__ = (function sablono$core$unordered_list33270_$_iter__33275(s__33276){
return (new cljs.core.LazySeq(null,(function (){
var s__33276__$1 = s__33276;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33276__$1);
if(temp__4657__auto__){
var s__33276__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33276__$2)){
var c__31355__auto__ = cljs.core.chunk_first.call(null,s__33276__$2);
var size__31356__auto__ = cljs.core.count.call(null,c__31355__auto__);
var b__33278 = cljs.core.chunk_buffer.call(null,size__31356__auto__);
if((function (){var i__33277 = (0);
while(true){
if((i__33277 < size__31356__auto__)){
var x = cljs.core._nth.call(null,c__31355__auto__,i__33277);
cljs.core.chunk_append.call(null,b__33278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33279 = (i__33277 + (1));
i__33277 = G__33279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33278),sablono$core$unordered_list33270_$_iter__33275.call(null,cljs.core.chunk_rest.call(null,s__33276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33278),null);
}
} else {
var x = cljs.core.first.call(null,s__33276__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list33270_$_iter__33275.call(null,cljs.core.rest.call(null,s__33276__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31357__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33270);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list33280 = (function sablono$core$ordered_list33280(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__31357__auto__ = (function sablono$core$ordered_list33280_$_iter__33285(s__33286){
return (new cljs.core.LazySeq(null,(function (){
var s__33286__$1 = s__33286;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33286__$1);
if(temp__4657__auto__){
var s__33286__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33286__$2)){
var c__31355__auto__ = cljs.core.chunk_first.call(null,s__33286__$2);
var size__31356__auto__ = cljs.core.count.call(null,c__31355__auto__);
var b__33288 = cljs.core.chunk_buffer.call(null,size__31356__auto__);
if((function (){var i__33287 = (0);
while(true){
if((i__33287 < size__31356__auto__)){
var x = cljs.core._nth.call(null,c__31355__auto__,i__33287);
cljs.core.chunk_append.call(null,b__33288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33289 = (i__33287 + (1));
i__33287 = G__33289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33288),sablono$core$ordered_list33280_$_iter__33285.call(null,cljs.core.chunk_rest.call(null,s__33286__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33288),null);
}
} else {
var x = cljs.core.first.call(null,s__33286__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list33280_$_iter__33285.call(null,cljs.core.rest.call(null,s__33286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31357__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33280);
/**
 * Create an image element.
 */
sablono.core.image33290 = (function sablono$core$image33290(var_args){
var args33291 = [];
var len__31652__auto___33294 = arguments.length;
var i__31653__auto___33295 = (0);
while(true){
if((i__31653__auto___33295 < len__31652__auto___33294)){
args33291.push((arguments[i__31653__auto___33295]));

var G__33296 = (i__31653__auto___33295 + (1));
i__31653__auto___33295 = G__33296;
continue;
} else {
}
break;
}

var G__33293 = args33291.length;
switch (G__33293) {
case 1:
return sablono.core.image33290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image33290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33291.length)].join('')));

}
});

sablono.core.image33290.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image33290.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image33290.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33290);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__33298_SHARP_,p2__33299_SHARP_){
return [cljs.core.str(p1__33298_SHARP_),cljs.core.str("["),cljs.core.str(p2__33299_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__33300_SHARP_,p2__33301_SHARP_){
return [cljs.core.str(p1__33300_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33301_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30577__auto__ = value;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field33302 = (function sablono$core$color_field33302(var_args){
var args33303 = [];
var len__31652__auto___33370 = arguments.length;
var i__31653__auto___33371 = (0);
while(true){
if((i__31653__auto___33371 < len__31652__auto___33370)){
args33303.push((arguments[i__31653__auto___33371]));

var G__33372 = (i__31653__auto___33371 + (1));
i__31653__auto___33371 = G__33372;
continue;
} else {
}
break;
}

var G__33305 = args33303.length;
switch (G__33305) {
case 1:
return sablono.core.color_field33302.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field33302.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33303.length)].join('')));

}
});

sablono.core.color_field33302.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.color_field33302.call(null,name__33217__auto__,null);
});

sablono.core.color_field33302.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.color_field33302.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33302);

/**
 * Creates a date input field.
 */
sablono.core.date_field33306 = (function sablono$core$date_field33306(var_args){
var args33307 = [];
var len__31652__auto___33374 = arguments.length;
var i__31653__auto___33375 = (0);
while(true){
if((i__31653__auto___33375 < len__31652__auto___33374)){
args33307.push((arguments[i__31653__auto___33375]));

var G__33376 = (i__31653__auto___33375 + (1));
i__31653__auto___33375 = G__33376;
continue;
} else {
}
break;
}

var G__33309 = args33307.length;
switch (G__33309) {
case 1:
return sablono.core.date_field33306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field33306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33307.length)].join('')));

}
});

sablono.core.date_field33306.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.date_field33306.call(null,name__33217__auto__,null);
});

sablono.core.date_field33306.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.date_field33306.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33306);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field33310 = (function sablono$core$datetime_field33310(var_args){
var args33311 = [];
var len__31652__auto___33378 = arguments.length;
var i__31653__auto___33379 = (0);
while(true){
if((i__31653__auto___33379 < len__31652__auto___33378)){
args33311.push((arguments[i__31653__auto___33379]));

var G__33380 = (i__31653__auto___33379 + (1));
i__31653__auto___33379 = G__33380;
continue;
} else {
}
break;
}

var G__33313 = args33311.length;
switch (G__33313) {
case 1:
return sablono.core.datetime_field33310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field33310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33311.length)].join('')));

}
});

sablono.core.datetime_field33310.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.datetime_field33310.call(null,name__33217__auto__,null);
});

sablono.core.datetime_field33310.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.datetime_field33310.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33310);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field33314 = (function sablono$core$datetime_local_field33314(var_args){
var args33315 = [];
var len__31652__auto___33382 = arguments.length;
var i__31653__auto___33383 = (0);
while(true){
if((i__31653__auto___33383 < len__31652__auto___33382)){
args33315.push((arguments[i__31653__auto___33383]));

var G__33384 = (i__31653__auto___33383 + (1));
i__31653__auto___33383 = G__33384;
continue;
} else {
}
break;
}

var G__33317 = args33315.length;
switch (G__33317) {
case 1:
return sablono.core.datetime_local_field33314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field33314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33315.length)].join('')));

}
});

sablono.core.datetime_local_field33314.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.datetime_local_field33314.call(null,name__33217__auto__,null);
});

sablono.core.datetime_local_field33314.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.datetime_local_field33314.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33314);

/**
 * Creates a email input field.
 */
sablono.core.email_field33318 = (function sablono$core$email_field33318(var_args){
var args33319 = [];
var len__31652__auto___33386 = arguments.length;
var i__31653__auto___33387 = (0);
while(true){
if((i__31653__auto___33387 < len__31652__auto___33386)){
args33319.push((arguments[i__31653__auto___33387]));

var G__33388 = (i__31653__auto___33387 + (1));
i__31653__auto___33387 = G__33388;
continue;
} else {
}
break;
}

var G__33321 = args33319.length;
switch (G__33321) {
case 1:
return sablono.core.email_field33318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field33318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33319.length)].join('')));

}
});

sablono.core.email_field33318.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.email_field33318.call(null,name__33217__auto__,null);
});

sablono.core.email_field33318.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.email_field33318.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33318);

/**
 * Creates a file input field.
 */
sablono.core.file_field33322 = (function sablono$core$file_field33322(var_args){
var args33323 = [];
var len__31652__auto___33390 = arguments.length;
var i__31653__auto___33391 = (0);
while(true){
if((i__31653__auto___33391 < len__31652__auto___33390)){
args33323.push((arguments[i__31653__auto___33391]));

var G__33392 = (i__31653__auto___33391 + (1));
i__31653__auto___33391 = G__33392;
continue;
} else {
}
break;
}

var G__33325 = args33323.length;
switch (G__33325) {
case 1:
return sablono.core.file_field33322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field33322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33323.length)].join('')));

}
});

sablono.core.file_field33322.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.file_field33322.call(null,name__33217__auto__,null);
});

sablono.core.file_field33322.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.file_field33322.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33322);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field33326 = (function sablono$core$hidden_field33326(var_args){
var args33327 = [];
var len__31652__auto___33394 = arguments.length;
var i__31653__auto___33395 = (0);
while(true){
if((i__31653__auto___33395 < len__31652__auto___33394)){
args33327.push((arguments[i__31653__auto___33395]));

var G__33396 = (i__31653__auto___33395 + (1));
i__31653__auto___33395 = G__33396;
continue;
} else {
}
break;
}

var G__33329 = args33327.length;
switch (G__33329) {
case 1:
return sablono.core.hidden_field33326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field33326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33327.length)].join('')));

}
});

sablono.core.hidden_field33326.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.hidden_field33326.call(null,name__33217__auto__,null);
});

sablono.core.hidden_field33326.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.hidden_field33326.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33326);

/**
 * Creates a month input field.
 */
sablono.core.month_field33330 = (function sablono$core$month_field33330(var_args){
var args33331 = [];
var len__31652__auto___33398 = arguments.length;
var i__31653__auto___33399 = (0);
while(true){
if((i__31653__auto___33399 < len__31652__auto___33398)){
args33331.push((arguments[i__31653__auto___33399]));

var G__33400 = (i__31653__auto___33399 + (1));
i__31653__auto___33399 = G__33400;
continue;
} else {
}
break;
}

var G__33333 = args33331.length;
switch (G__33333) {
case 1:
return sablono.core.month_field33330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field33330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33331.length)].join('')));

}
});

sablono.core.month_field33330.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.month_field33330.call(null,name__33217__auto__,null);
});

sablono.core.month_field33330.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.month_field33330.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33330);

/**
 * Creates a number input field.
 */
sablono.core.number_field33334 = (function sablono$core$number_field33334(var_args){
var args33335 = [];
var len__31652__auto___33402 = arguments.length;
var i__31653__auto___33403 = (0);
while(true){
if((i__31653__auto___33403 < len__31652__auto___33402)){
args33335.push((arguments[i__31653__auto___33403]));

var G__33404 = (i__31653__auto___33403 + (1));
i__31653__auto___33403 = G__33404;
continue;
} else {
}
break;
}

var G__33337 = args33335.length;
switch (G__33337) {
case 1:
return sablono.core.number_field33334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field33334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33335.length)].join('')));

}
});

sablono.core.number_field33334.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.number_field33334.call(null,name__33217__auto__,null);
});

sablono.core.number_field33334.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.number_field33334.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33334);

/**
 * Creates a password input field.
 */
sablono.core.password_field33338 = (function sablono$core$password_field33338(var_args){
var args33339 = [];
var len__31652__auto___33406 = arguments.length;
var i__31653__auto___33407 = (0);
while(true){
if((i__31653__auto___33407 < len__31652__auto___33406)){
args33339.push((arguments[i__31653__auto___33407]));

var G__33408 = (i__31653__auto___33407 + (1));
i__31653__auto___33407 = G__33408;
continue;
} else {
}
break;
}

var G__33341 = args33339.length;
switch (G__33341) {
case 1:
return sablono.core.password_field33338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field33338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33339.length)].join('')));

}
});

sablono.core.password_field33338.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.password_field33338.call(null,name__33217__auto__,null);
});

sablono.core.password_field33338.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.password_field33338.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33338);

/**
 * Creates a range input field.
 */
sablono.core.range_field33342 = (function sablono$core$range_field33342(var_args){
var args33343 = [];
var len__31652__auto___33410 = arguments.length;
var i__31653__auto___33411 = (0);
while(true){
if((i__31653__auto___33411 < len__31652__auto___33410)){
args33343.push((arguments[i__31653__auto___33411]));

var G__33412 = (i__31653__auto___33411 + (1));
i__31653__auto___33411 = G__33412;
continue;
} else {
}
break;
}

var G__33345 = args33343.length;
switch (G__33345) {
case 1:
return sablono.core.range_field33342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field33342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33343.length)].join('')));

}
});

sablono.core.range_field33342.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.range_field33342.call(null,name__33217__auto__,null);
});

sablono.core.range_field33342.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.range_field33342.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33342);

/**
 * Creates a search input field.
 */
sablono.core.search_field33346 = (function sablono$core$search_field33346(var_args){
var args33347 = [];
var len__31652__auto___33414 = arguments.length;
var i__31653__auto___33415 = (0);
while(true){
if((i__31653__auto___33415 < len__31652__auto___33414)){
args33347.push((arguments[i__31653__auto___33415]));

var G__33416 = (i__31653__auto___33415 + (1));
i__31653__auto___33415 = G__33416;
continue;
} else {
}
break;
}

var G__33349 = args33347.length;
switch (G__33349) {
case 1:
return sablono.core.search_field33346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field33346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33347.length)].join('')));

}
});

sablono.core.search_field33346.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.search_field33346.call(null,name__33217__auto__,null);
});

sablono.core.search_field33346.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.search_field33346.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33346);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field33350 = (function sablono$core$tel_field33350(var_args){
var args33351 = [];
var len__31652__auto___33418 = arguments.length;
var i__31653__auto___33419 = (0);
while(true){
if((i__31653__auto___33419 < len__31652__auto___33418)){
args33351.push((arguments[i__31653__auto___33419]));

var G__33420 = (i__31653__auto___33419 + (1));
i__31653__auto___33419 = G__33420;
continue;
} else {
}
break;
}

var G__33353 = args33351.length;
switch (G__33353) {
case 1:
return sablono.core.tel_field33350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field33350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33351.length)].join('')));

}
});

sablono.core.tel_field33350.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.tel_field33350.call(null,name__33217__auto__,null);
});

sablono.core.tel_field33350.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.tel_field33350.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33350);

/**
 * Creates a text input field.
 */
sablono.core.text_field33354 = (function sablono$core$text_field33354(var_args){
var args33355 = [];
var len__31652__auto___33422 = arguments.length;
var i__31653__auto___33423 = (0);
while(true){
if((i__31653__auto___33423 < len__31652__auto___33422)){
args33355.push((arguments[i__31653__auto___33423]));

var G__33424 = (i__31653__auto___33423 + (1));
i__31653__auto___33423 = G__33424;
continue;
} else {
}
break;
}

var G__33357 = args33355.length;
switch (G__33357) {
case 1:
return sablono.core.text_field33354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field33354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33355.length)].join('')));

}
});

sablono.core.text_field33354.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.text_field33354.call(null,name__33217__auto__,null);
});

sablono.core.text_field33354.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.text_field33354.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33354);

/**
 * Creates a time input field.
 */
sablono.core.time_field33358 = (function sablono$core$time_field33358(var_args){
var args33359 = [];
var len__31652__auto___33426 = arguments.length;
var i__31653__auto___33427 = (0);
while(true){
if((i__31653__auto___33427 < len__31652__auto___33426)){
args33359.push((arguments[i__31653__auto___33427]));

var G__33428 = (i__31653__auto___33427 + (1));
i__31653__auto___33427 = G__33428;
continue;
} else {
}
break;
}

var G__33361 = args33359.length;
switch (G__33361) {
case 1:
return sablono.core.time_field33358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field33358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33359.length)].join('')));

}
});

sablono.core.time_field33358.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.time_field33358.call(null,name__33217__auto__,null);
});

sablono.core.time_field33358.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.time_field33358.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33358);

/**
 * Creates a url input field.
 */
sablono.core.url_field33362 = (function sablono$core$url_field33362(var_args){
var args33363 = [];
var len__31652__auto___33430 = arguments.length;
var i__31653__auto___33431 = (0);
while(true){
if((i__31653__auto___33431 < len__31652__auto___33430)){
args33363.push((arguments[i__31653__auto___33431]));

var G__33432 = (i__31653__auto___33431 + (1));
i__31653__auto___33431 = G__33432;
continue;
} else {
}
break;
}

var G__33365 = args33363.length;
switch (G__33365) {
case 1:
return sablono.core.url_field33362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field33362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33363.length)].join('')));

}
});

sablono.core.url_field33362.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.url_field33362.call(null,name__33217__auto__,null);
});

sablono.core.url_field33362.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.url_field33362.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33362);

/**
 * Creates a week input field.
 */
sablono.core.week_field33366 = (function sablono$core$week_field33366(var_args){
var args33367 = [];
var len__31652__auto___33434 = arguments.length;
var i__31653__auto___33435 = (0);
while(true){
if((i__31653__auto___33435 < len__31652__auto___33434)){
args33367.push((arguments[i__31653__auto___33435]));

var G__33436 = (i__31653__auto___33435 + (1));
i__31653__auto___33435 = G__33436;
continue;
} else {
}
break;
}

var G__33369 = args33367.length;
switch (G__33369) {
case 1:
return sablono.core.week_field33366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field33366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33367.length)].join('')));

}
});

sablono.core.week_field33366.cljs$core$IFn$_invoke$arity$1 = (function (name__33217__auto__){
return sablono.core.week_field33366.call(null,name__33217__auto__,null);
});

sablono.core.week_field33366.cljs$core$IFn$_invoke$arity$2 = (function (name__33217__auto__,value__33218__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__33217__auto__,value__33218__auto__);
});

sablono.core.week_field33366.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33366);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box33438 = (function sablono$core$check_box33438(var_args){
var args33439 = [];
var len__31652__auto___33442 = arguments.length;
var i__31653__auto___33443 = (0);
while(true){
if((i__31653__auto___33443 < len__31652__auto___33442)){
args33439.push((arguments[i__31653__auto___33443]));

var G__33444 = (i__31653__auto___33443 + (1));
i__31653__auto___33443 = G__33444;
continue;
} else {
}
break;
}

var G__33441 = args33439.length;
switch (G__33441) {
case 1:
return sablono.core.check_box33438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box33438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box33438.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33439.length)].join('')));

}
});

sablono.core.check_box33438.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box33438.call(null,name,null);
});

sablono.core.check_box33438.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box33438.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box33438.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30577__auto__ = value;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box33438.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33438);
/**
 * Creates a radio button.
 */
sablono.core.radio_button33446 = (function sablono$core$radio_button33446(var_args){
var args33447 = [];
var len__31652__auto___33450 = arguments.length;
var i__31653__auto___33451 = (0);
while(true){
if((i__31653__auto___33451 < len__31652__auto___33450)){
args33447.push((arguments[i__31653__auto___33451]));

var G__33452 = (i__31653__auto___33451 + (1));
i__31653__auto___33451 = G__33452;
continue;
} else {
}
break;
}

var G__33449 = args33447.length;
switch (G__33449) {
case 1:
return sablono.core.radio_button33446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button33446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button33446.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33447.length)].join('')));

}
});

sablono.core.radio_button33446.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button33446.call(null,group,null);
});

sablono.core.radio_button33446.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button33446.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button33446.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30577__auto__ = value;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button33446.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33446);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options33454 = (function sablono$core$select_options33454(coll){
var iter__31357__auto__ = (function sablono$core$select_options33454_$_iter__33471(s__33472){
return (new cljs.core.LazySeq(null,(function (){
var s__33472__$1 = s__33472;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33472__$1);
if(temp__4657__auto__){
var s__33472__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33472__$2)){
var c__31355__auto__ = cljs.core.chunk_first.call(null,s__33472__$2);
var size__31356__auto__ = cljs.core.count.call(null,c__31355__auto__);
var b__33474 = cljs.core.chunk_buffer.call(null,size__31356__auto__);
if((function (){var i__33473 = (0);
while(true){
if((i__33473 < size__31356__auto__)){
var x = cljs.core._nth.call(null,c__31355__auto__,i__33473);
cljs.core.chunk_append.call(null,b__33474,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33481 = x;
var text = cljs.core.nth.call(null,vec__33481,(0),null);
var val = cljs.core.nth.call(null,vec__33481,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33481,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options33454.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__33487 = (i__33473 + (1));
i__33473 = G__33487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33474),sablono$core$select_options33454_$_iter__33471.call(null,cljs.core.chunk_rest.call(null,s__33472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33474),null);
}
} else {
var x = cljs.core.first.call(null,s__33472__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33484 = x;
var text = cljs.core.nth.call(null,vec__33484,(0),null);
var val = cljs.core.nth.call(null,vec__33484,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33484,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options33454.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options33454_$_iter__33471.call(null,cljs.core.rest.call(null,s__33472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31357__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33454);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down33488 = (function sablono$core$drop_down33488(var_args){
var args33489 = [];
var len__31652__auto___33492 = arguments.length;
var i__31653__auto___33493 = (0);
while(true){
if((i__31653__auto___33493 < len__31652__auto___33492)){
args33489.push((arguments[i__31653__auto___33493]));

var G__33494 = (i__31653__auto___33493 + (1));
i__31653__auto___33493 = G__33494;
continue;
} else {
}
break;
}

var G__33491 = args33489.length;
switch (G__33491) {
case 2:
return sablono.core.drop_down33488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down33488.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33489.length)].join('')));

}
});

sablono.core.drop_down33488.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down33488.call(null,name,options,null);
});

sablono.core.drop_down33488.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down33488.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33488);
/**
 * Creates a text area element.
 */
sablono.core.text_area33496 = (function sablono$core$text_area33496(var_args){
var args33497 = [];
var len__31652__auto___33500 = arguments.length;
var i__31653__auto___33501 = (0);
while(true){
if((i__31653__auto___33501 < len__31652__auto___33500)){
args33497.push((arguments[i__31653__auto___33501]));

var G__33502 = (i__31653__auto___33501 + (1));
i__31653__auto___33501 = G__33502;
continue;
} else {
}
break;
}

var G__33499 = args33497.length;
switch (G__33499) {
case 1:
return sablono.core.text_area33496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area33496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33497.length)].join('')));

}
});

sablono.core.text_area33496.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area33496.call(null,name,null);
});

sablono.core.text_area33496.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30577__auto__ = value;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area33496.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33496);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label33504 = (function sablono$core$label33504(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33504);
/**
 * Creates a submit button.
 */
sablono.core.submit_button33505 = (function sablono$core$submit_button33505(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33505);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button33506 = (function sablono$core$reset_button33506(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33506);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to33507 = (function sablono$core$form_to33507(var_args){
var args__31659__auto__ = [];
var len__31652__auto___33514 = arguments.length;
var i__31653__auto___33515 = (0);
while(true){
if((i__31653__auto___33515 < len__31652__auto___33514)){
args__31659__auto__.push((arguments[i__31653__auto___33515]));

var G__33516 = (i__31653__auto___33515 + (1));
i__31653__auto___33515 = G__33516;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((1) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to33507.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31660__auto__);
});

sablono.core.form_to33507.cljs$core$IFn$_invoke$arity$variadic = (function (p__33510,body){
var vec__33511 = p__33510;
var method = cljs.core.nth.call(null,vec__33511,(0),null);
var action = cljs.core.nth.call(null,vec__33511,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to33507.cljs$lang$maxFixedArity = (1);

sablono.core.form_to33507.cljs$lang$applyTo = (function (seq33508){
var G__33509 = cljs.core.first.call(null,seq33508);
var seq33508__$1 = cljs.core.next.call(null,seq33508);
return sablono.core.form_to33507.cljs$core$IFn$_invoke$arity$variadic(G__33509,seq33508__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33507);

//# sourceMappingURL=core.js.map