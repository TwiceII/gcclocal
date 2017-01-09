// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__50720__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__50717 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__50718 = cljs.core.seq(vec__50717);
var first__50719 = cljs.core.first(seq__50718);
var seq__50718__$1 = cljs.core.next(seq__50718);
var tag = first__50719;
var body = seq__50718__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__50720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50721__i = 0, G__50721__a = new Array(arguments.length -  0);
while (G__50721__i < G__50721__a.length) {G__50721__a[G__50721__i] = arguments[G__50721__i + 0]; ++G__50721__i;}
  args = new cljs.core.IndexedSeq(G__50721__a,0);
} 
return G__50720__delegate.call(this,args);};
G__50720.cljs$lang$maxFixedArity = 0;
G__50720.cljs$lang$applyTo = (function (arglist__50722){
var args = cljs.core.seq(arglist__50722);
return G__50720__delegate(args);
});
G__50720.cljs$core$IFn$_invoke$arity$variadic = G__50720__delegate;
return G__50720;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__31167__auto__ = (function sablono$core$update_arglists_$_iter__50729(s__50730){
return (new cljs.core.LazySeq(null,(function (){
var s__50730__$1 = s__50730;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__50730__$1);
if(temp__4657__auto__){
var s__50730__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50730__$2)){
var c__31165__auto__ = cljs.core.chunk_first(s__50730__$2);
var size__31166__auto__ = cljs.core.count(c__31165__auto__);
var b__50732 = cljs.core.chunk_buffer(size__31166__auto__);
if((function (){var i__50731 = (0);
while(true){
if((i__50731 < size__31166__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31165__auto__,i__50731);
cljs.core.chunk_append(b__50732,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__50735 = (i__50731 + (1));
i__50731 = G__50735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50732),sablono$core$update_arglists_$_iter__50729(cljs.core.chunk_rest(s__50730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50732),null);
}
} else {
var args = cljs.core.first(s__50730__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__50729(cljs.core.rest(s__50730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31167__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31469__auto__ = [];
var len__31462__auto___50743 = arguments.length;
var i__31463__auto___50744 = (0);
while(true){
if((i__31463__auto___50744 < len__31462__auto___50743)){
args__31469__auto__.push((arguments[i__31463__auto___50744]));

var G__50745 = (i__31463__auto___50744 + (1));
i__31463__auto___50744 = G__50745;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((0) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31470__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__31167__auto__ = (function sablono$core$iter__50737(s__50738){
return (new cljs.core.LazySeq(null,(function (){
var s__50738__$1 = s__50738;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__50738__$1);
if(temp__4657__auto__){
var s__50738__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50738__$2)){
var c__31165__auto__ = cljs.core.chunk_first(s__50738__$2);
var size__31166__auto__ = cljs.core.count(c__31165__auto__);
var b__50740 = cljs.core.chunk_buffer(size__31166__auto__);
if((function (){var i__50739 = (0);
while(true){
if((i__50739 < size__31166__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31165__auto__,i__50739);
cljs.core.chunk_append(b__50740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__50746 = (i__50739 + (1));
i__50739 = G__50746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50740),sablono$core$iter__50737(cljs.core.chunk_rest(s__50738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50740),null);
}
} else {
var style = cljs.core.first(s__50738__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__50737(cljs.core.rest(s__50738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31167__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq50736){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50736));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__50751 = goog.dom.getDocument().body;
var G__50752 = (function (){var G__50753 = "script";
var G__50754 = {"src": src};
return goog.dom.createDom(G__50753,G__50754);
})();
return goog.dom.appendChild(G__50751,G__50752);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to50755 = (function sablono$core$link_to50755(var_args){
var args__31469__auto__ = [];
var len__31462__auto___50758 = arguments.length;
var i__31463__auto___50759 = (0);
while(true){
if((i__31463__auto___50759 < len__31462__auto___50758)){
args__31469__auto__.push((arguments[i__31463__auto___50759]));

var G__50760 = (i__31463__auto___50759 + (1));
i__31463__auto___50759 = G__50760;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to50755.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

sablono.core.link_to50755.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to50755.cljs$lang$maxFixedArity = (1);

sablono.core.link_to50755.cljs$lang$applyTo = (function (seq50756){
var G__50757 = cljs.core.first(seq50756);
var seq50756__$1 = cljs.core.next(seq50756);
return sablono.core.link_to50755.cljs$core$IFn$_invoke$arity$variadic(G__50757,seq50756__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to50755);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to50761 = (function sablono$core$mail_to50761(var_args){
var args__31469__auto__ = [];
var len__31462__auto___50768 = arguments.length;
var i__31463__auto___50769 = (0);
while(true){
if((i__31463__auto___50769 < len__31462__auto___50768)){
args__31469__auto__.push((arguments[i__31463__auto___50769]));

var G__50770 = (i__31463__auto___50769 + (1));
i__31463__auto___50769 = G__50770;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to50761.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

sablono.core.mail_to50761.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__50764){
var vec__50765 = p__50764;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50765,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__30387__auto__ = content;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to50761.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to50761.cljs$lang$applyTo = (function (seq50762){
var G__50763 = cljs.core.first(seq50762);
var seq50762__$1 = cljs.core.next(seq50762);
return sablono.core.mail_to50761.cljs$core$IFn$_invoke$arity$variadic(G__50763,seq50762__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to50761);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list50771 = (function sablono$core$unordered_list50771(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__31167__auto__ = (function sablono$core$unordered_list50771_$_iter__50778(s__50779){
return (new cljs.core.LazySeq(null,(function (){
var s__50779__$1 = s__50779;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__50779__$1);
if(temp__4657__auto__){
var s__50779__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50779__$2)){
var c__31165__auto__ = cljs.core.chunk_first(s__50779__$2);
var size__31166__auto__ = cljs.core.count(c__31165__auto__);
var b__50781 = cljs.core.chunk_buffer(size__31166__auto__);
if((function (){var i__50780 = (0);
while(true){
if((i__50780 < size__31166__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31165__auto__,i__50780);
cljs.core.chunk_append(b__50781,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__50784 = (i__50780 + (1));
i__50780 = G__50784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50781),sablono$core$unordered_list50771_$_iter__50778(cljs.core.chunk_rest(s__50779__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50781),null);
}
} else {
var x = cljs.core.first(s__50779__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list50771_$_iter__50778(cljs.core.rest(s__50779__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31167__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list50771);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list50785 = (function sablono$core$ordered_list50785(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__31167__auto__ = (function sablono$core$ordered_list50785_$_iter__50792(s__50793){
return (new cljs.core.LazySeq(null,(function (){
var s__50793__$1 = s__50793;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__50793__$1);
if(temp__4657__auto__){
var s__50793__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50793__$2)){
var c__31165__auto__ = cljs.core.chunk_first(s__50793__$2);
var size__31166__auto__ = cljs.core.count(c__31165__auto__);
var b__50795 = cljs.core.chunk_buffer(size__31166__auto__);
if((function (){var i__50794 = (0);
while(true){
if((i__50794 < size__31166__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31165__auto__,i__50794);
cljs.core.chunk_append(b__50795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__50798 = (i__50794 + (1));
i__50794 = G__50798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50795),sablono$core$ordered_list50785_$_iter__50792(cljs.core.chunk_rest(s__50793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50795),null);
}
} else {
var x = cljs.core.first(s__50793__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list50785_$_iter__50792(cljs.core.rest(s__50793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31167__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list50785);
/**
 * Create an image element.
 */
sablono.core.image50799 = (function sablono$core$image50799(var_args){
var args50800 = [];
var len__31462__auto___50803 = arguments.length;
var i__31463__auto___50804 = (0);
while(true){
if((i__31463__auto___50804 < len__31462__auto___50803)){
args50800.push((arguments[i__31463__auto___50804]));

var G__50805 = (i__31463__auto___50804 + (1));
i__31463__auto___50804 = G__50805;
continue;
} else {
}
break;
}

var G__50802 = args50800.length;
switch (G__50802) {
case 1:
return sablono.core.image50799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image50799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50800.length)].join('')));

}
});

sablono.core.image50799.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image50799.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image50799.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image50799);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50807_SHARP_,p2__50808_SHARP_){
return [cljs.core.str(p1__50807_SHARP_),cljs.core.str("["),cljs.core.str(p2__50808_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50809_SHARP_,p2__50810_SHARP_){
return [cljs.core.str(p1__50809_SHARP_),cljs.core.str("-"),cljs.core.str(p2__50810_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__30387__auto__ = value;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field50811 = (function sablono$core$color_field50811(var_args){
var args50812 = [];
var len__31462__auto___50879 = arguments.length;
var i__31463__auto___50880 = (0);
while(true){
if((i__31463__auto___50880 < len__31462__auto___50879)){
args50812.push((arguments[i__31463__auto___50880]));

var G__50881 = (i__31463__auto___50880 + (1));
i__31463__auto___50880 = G__50881;
continue;
} else {
}
break;
}

var G__50814 = args50812.length;
switch (G__50814) {
case 1:
return sablono.core.color_field50811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field50811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50812.length)].join('')));

}
});

sablono.core.color_field50811.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.color_field50811.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.color_field50811.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.color_field50811.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field50811);

/**
 * Creates a date input field.
 */
sablono.core.date_field50815 = (function sablono$core$date_field50815(var_args){
var args50816 = [];
var len__31462__auto___50883 = arguments.length;
var i__31463__auto___50884 = (0);
while(true){
if((i__31463__auto___50884 < len__31462__auto___50883)){
args50816.push((arguments[i__31463__auto___50884]));

var G__50885 = (i__31463__auto___50884 + (1));
i__31463__auto___50884 = G__50885;
continue;
} else {
}
break;
}

var G__50818 = args50816.length;
switch (G__50818) {
case 1:
return sablono.core.date_field50815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field50815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50816.length)].join('')));

}
});

sablono.core.date_field50815.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.date_field50815.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.date_field50815.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.date_field50815.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field50815);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field50819 = (function sablono$core$datetime_field50819(var_args){
var args50820 = [];
var len__31462__auto___50887 = arguments.length;
var i__31463__auto___50888 = (0);
while(true){
if((i__31463__auto___50888 < len__31462__auto___50887)){
args50820.push((arguments[i__31463__auto___50888]));

var G__50889 = (i__31463__auto___50888 + (1));
i__31463__auto___50888 = G__50889;
continue;
} else {
}
break;
}

var G__50822 = args50820.length;
switch (G__50822) {
case 1:
return sablono.core.datetime_field50819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field50819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50820.length)].join('')));

}
});

sablono.core.datetime_field50819.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.datetime_field50819.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.datetime_field50819.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.datetime_field50819.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field50819);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field50823 = (function sablono$core$datetime_local_field50823(var_args){
var args50824 = [];
var len__31462__auto___50891 = arguments.length;
var i__31463__auto___50892 = (0);
while(true){
if((i__31463__auto___50892 < len__31462__auto___50891)){
args50824.push((arguments[i__31463__auto___50892]));

var G__50893 = (i__31463__auto___50892 + (1));
i__31463__auto___50892 = G__50893;
continue;
} else {
}
break;
}

var G__50826 = args50824.length;
switch (G__50826) {
case 1:
return sablono.core.datetime_local_field50823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field50823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50824.length)].join('')));

}
});

sablono.core.datetime_local_field50823.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.datetime_local_field50823.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.datetime_local_field50823.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.datetime_local_field50823.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field50823);

/**
 * Creates a email input field.
 */
sablono.core.email_field50827 = (function sablono$core$email_field50827(var_args){
var args50828 = [];
var len__31462__auto___50895 = arguments.length;
var i__31463__auto___50896 = (0);
while(true){
if((i__31463__auto___50896 < len__31462__auto___50895)){
args50828.push((arguments[i__31463__auto___50896]));

var G__50897 = (i__31463__auto___50896 + (1));
i__31463__auto___50896 = G__50897;
continue;
} else {
}
break;
}

var G__50830 = args50828.length;
switch (G__50830) {
case 1:
return sablono.core.email_field50827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field50827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50828.length)].join('')));

}
});

sablono.core.email_field50827.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.email_field50827.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.email_field50827.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.email_field50827.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field50827);

/**
 * Creates a file input field.
 */
sablono.core.file_field50831 = (function sablono$core$file_field50831(var_args){
var args50832 = [];
var len__31462__auto___50899 = arguments.length;
var i__31463__auto___50900 = (0);
while(true){
if((i__31463__auto___50900 < len__31462__auto___50899)){
args50832.push((arguments[i__31463__auto___50900]));

var G__50901 = (i__31463__auto___50900 + (1));
i__31463__auto___50900 = G__50901;
continue;
} else {
}
break;
}

var G__50834 = args50832.length;
switch (G__50834) {
case 1:
return sablono.core.file_field50831.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field50831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50832.length)].join('')));

}
});

sablono.core.file_field50831.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.file_field50831.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.file_field50831.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.file_field50831.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field50831);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field50835 = (function sablono$core$hidden_field50835(var_args){
var args50836 = [];
var len__31462__auto___50903 = arguments.length;
var i__31463__auto___50904 = (0);
while(true){
if((i__31463__auto___50904 < len__31462__auto___50903)){
args50836.push((arguments[i__31463__auto___50904]));

var G__50905 = (i__31463__auto___50904 + (1));
i__31463__auto___50904 = G__50905;
continue;
} else {
}
break;
}

var G__50838 = args50836.length;
switch (G__50838) {
case 1:
return sablono.core.hidden_field50835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field50835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50836.length)].join('')));

}
});

sablono.core.hidden_field50835.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.hidden_field50835.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.hidden_field50835.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.hidden_field50835.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field50835);

/**
 * Creates a month input field.
 */
sablono.core.month_field50839 = (function sablono$core$month_field50839(var_args){
var args50840 = [];
var len__31462__auto___50907 = arguments.length;
var i__31463__auto___50908 = (0);
while(true){
if((i__31463__auto___50908 < len__31462__auto___50907)){
args50840.push((arguments[i__31463__auto___50908]));

var G__50909 = (i__31463__auto___50908 + (1));
i__31463__auto___50908 = G__50909;
continue;
} else {
}
break;
}

var G__50842 = args50840.length;
switch (G__50842) {
case 1:
return sablono.core.month_field50839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field50839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50840.length)].join('')));

}
});

sablono.core.month_field50839.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.month_field50839.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.month_field50839.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.month_field50839.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field50839);

/**
 * Creates a number input field.
 */
sablono.core.number_field50843 = (function sablono$core$number_field50843(var_args){
var args50844 = [];
var len__31462__auto___50911 = arguments.length;
var i__31463__auto___50912 = (0);
while(true){
if((i__31463__auto___50912 < len__31462__auto___50911)){
args50844.push((arguments[i__31463__auto___50912]));

var G__50913 = (i__31463__auto___50912 + (1));
i__31463__auto___50912 = G__50913;
continue;
} else {
}
break;
}

var G__50846 = args50844.length;
switch (G__50846) {
case 1:
return sablono.core.number_field50843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field50843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50844.length)].join('')));

}
});

sablono.core.number_field50843.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.number_field50843.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.number_field50843.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.number_field50843.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field50843);

/**
 * Creates a password input field.
 */
sablono.core.password_field50847 = (function sablono$core$password_field50847(var_args){
var args50848 = [];
var len__31462__auto___50915 = arguments.length;
var i__31463__auto___50916 = (0);
while(true){
if((i__31463__auto___50916 < len__31462__auto___50915)){
args50848.push((arguments[i__31463__auto___50916]));

var G__50917 = (i__31463__auto___50916 + (1));
i__31463__auto___50916 = G__50917;
continue;
} else {
}
break;
}

var G__50850 = args50848.length;
switch (G__50850) {
case 1:
return sablono.core.password_field50847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field50847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50848.length)].join('')));

}
});

sablono.core.password_field50847.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.password_field50847.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.password_field50847.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.password_field50847.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field50847);

/**
 * Creates a range input field.
 */
sablono.core.range_field50851 = (function sablono$core$range_field50851(var_args){
var args50852 = [];
var len__31462__auto___50919 = arguments.length;
var i__31463__auto___50920 = (0);
while(true){
if((i__31463__auto___50920 < len__31462__auto___50919)){
args50852.push((arguments[i__31463__auto___50920]));

var G__50921 = (i__31463__auto___50920 + (1));
i__31463__auto___50920 = G__50921;
continue;
} else {
}
break;
}

var G__50854 = args50852.length;
switch (G__50854) {
case 1:
return sablono.core.range_field50851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field50851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50852.length)].join('')));

}
});

sablono.core.range_field50851.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.range_field50851.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.range_field50851.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.range_field50851.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field50851);

/**
 * Creates a search input field.
 */
sablono.core.search_field50855 = (function sablono$core$search_field50855(var_args){
var args50856 = [];
var len__31462__auto___50923 = arguments.length;
var i__31463__auto___50924 = (0);
while(true){
if((i__31463__auto___50924 < len__31462__auto___50923)){
args50856.push((arguments[i__31463__auto___50924]));

var G__50925 = (i__31463__auto___50924 + (1));
i__31463__auto___50924 = G__50925;
continue;
} else {
}
break;
}

var G__50858 = args50856.length;
switch (G__50858) {
case 1:
return sablono.core.search_field50855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field50855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50856.length)].join('')));

}
});

sablono.core.search_field50855.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.search_field50855.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.search_field50855.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.search_field50855.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field50855);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field50859 = (function sablono$core$tel_field50859(var_args){
var args50860 = [];
var len__31462__auto___50927 = arguments.length;
var i__31463__auto___50928 = (0);
while(true){
if((i__31463__auto___50928 < len__31462__auto___50927)){
args50860.push((arguments[i__31463__auto___50928]));

var G__50929 = (i__31463__auto___50928 + (1));
i__31463__auto___50928 = G__50929;
continue;
} else {
}
break;
}

var G__50862 = args50860.length;
switch (G__50862) {
case 1:
return sablono.core.tel_field50859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field50859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50860.length)].join('')));

}
});

sablono.core.tel_field50859.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.tel_field50859.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.tel_field50859.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.tel_field50859.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field50859);

/**
 * Creates a text input field.
 */
sablono.core.text_field50863 = (function sablono$core$text_field50863(var_args){
var args50864 = [];
var len__31462__auto___50931 = arguments.length;
var i__31463__auto___50932 = (0);
while(true){
if((i__31463__auto___50932 < len__31462__auto___50931)){
args50864.push((arguments[i__31463__auto___50932]));

var G__50933 = (i__31463__auto___50932 + (1));
i__31463__auto___50932 = G__50933;
continue;
} else {
}
break;
}

var G__50866 = args50864.length;
switch (G__50866) {
case 1:
return sablono.core.text_field50863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field50863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50864.length)].join('')));

}
});

sablono.core.text_field50863.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.text_field50863.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.text_field50863.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.text_field50863.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field50863);

/**
 * Creates a time input field.
 */
sablono.core.time_field50867 = (function sablono$core$time_field50867(var_args){
var args50868 = [];
var len__31462__auto___50935 = arguments.length;
var i__31463__auto___50936 = (0);
while(true){
if((i__31463__auto___50936 < len__31462__auto___50935)){
args50868.push((arguments[i__31463__auto___50936]));

var G__50937 = (i__31463__auto___50936 + (1));
i__31463__auto___50936 = G__50937;
continue;
} else {
}
break;
}

var G__50870 = args50868.length;
switch (G__50870) {
case 1:
return sablono.core.time_field50867.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field50867.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50868.length)].join('')));

}
});

sablono.core.time_field50867.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.time_field50867.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.time_field50867.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.time_field50867.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field50867);

/**
 * Creates a url input field.
 */
sablono.core.url_field50871 = (function sablono$core$url_field50871(var_args){
var args50872 = [];
var len__31462__auto___50939 = arguments.length;
var i__31463__auto___50940 = (0);
while(true){
if((i__31463__auto___50940 < len__31462__auto___50939)){
args50872.push((arguments[i__31463__auto___50940]));

var G__50941 = (i__31463__auto___50940 + (1));
i__31463__auto___50940 = G__50941;
continue;
} else {
}
break;
}

var G__50874 = args50872.length;
switch (G__50874) {
case 1:
return sablono.core.url_field50871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field50871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50872.length)].join('')));

}
});

sablono.core.url_field50871.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.url_field50871.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.url_field50871.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.url_field50871.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field50871);

/**
 * Creates a week input field.
 */
sablono.core.week_field50875 = (function sablono$core$week_field50875(var_args){
var args50876 = [];
var len__31462__auto___50943 = arguments.length;
var i__31463__auto___50944 = (0);
while(true){
if((i__31463__auto___50944 < len__31462__auto___50943)){
args50876.push((arguments[i__31463__auto___50944]));

var G__50945 = (i__31463__auto___50944 + (1));
i__31463__auto___50944 = G__50945;
continue;
} else {
}
break;
}

var G__50878 = args50876.length;
switch (G__50878) {
case 1:
return sablono.core.week_field50875.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field50875.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50876.length)].join('')));

}
});

sablono.core.week_field50875.cljs$core$IFn$_invoke$arity$1 = (function (name__41862__auto__){
return sablono.core.week_field50875.cljs$core$IFn$_invoke$arity$2(name__41862__auto__,null);
});

sablono.core.week_field50875.cljs$core$IFn$_invoke$arity$2 = (function (name__41862__auto__,value__41863__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__41862__auto__,value__41863__auto__);
});

sablono.core.week_field50875.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field50875);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box50947 = (function sablono$core$check_box50947(var_args){
var args50948 = [];
var len__31462__auto___50951 = arguments.length;
var i__31463__auto___50952 = (0);
while(true){
if((i__31463__auto___50952 < len__31462__auto___50951)){
args50948.push((arguments[i__31463__auto___50952]));

var G__50953 = (i__31463__auto___50952 + (1));
i__31463__auto___50952 = G__50953;
continue;
} else {
}
break;
}

var G__50950 = args50948.length;
switch (G__50950) {
case 1:
return sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50948.length)].join('')));

}
});

sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box50947.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__30387__auto__ = value;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box50947.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box50947);
/**
 * Creates a radio button.
 */
sablono.core.radio_button50955 = (function sablono$core$radio_button50955(var_args){
var args50956 = [];
var len__31462__auto___50959 = arguments.length;
var i__31463__auto___50960 = (0);
while(true){
if((i__31463__auto___50960 < len__31462__auto___50959)){
args50956.push((arguments[i__31463__auto___50960]));

var G__50961 = (i__31463__auto___50960 + (1));
i__31463__auto___50960 = G__50961;
continue;
} else {
}
break;
}

var G__50958 = args50956.length;
switch (G__50958) {
case 1:
return sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50956.length)].join('')));

}
});

sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button50955.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__30387__auto__ = value;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button50955.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button50955);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__50964 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__50964);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options50965 = (function sablono$core$select_options50965(coll){
var iter__31167__auto__ = (function sablono$core$select_options50965_$_iter__50984(s__50985){
return (new cljs.core.LazySeq(null,(function (){
var s__50985__$1 = s__50985;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__50985__$1);
if(temp__4657__auto__){
var s__50985__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50985__$2)){
var c__31165__auto__ = cljs.core.chunk_first(s__50985__$2);
var size__31166__auto__ = cljs.core.count(c__31165__auto__);
var b__50987 = cljs.core.chunk_buffer(size__31166__auto__);
if((function (){var i__50986 = (0);
while(true){
if((i__50986 < size__31166__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31165__auto__,i__50986);
cljs.core.chunk_append(b__50987,((cljs.core.sequential_QMARK_(x))?(function (){var vec__50996 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options50965(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__51002 = (i__50986 + (1));
i__50986 = G__51002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50987),sablono$core$select_options50965_$_iter__50984(cljs.core.chunk_rest(s__50985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50987),null);
}
} else {
var x = cljs.core.first(s__50985__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__50999 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50999,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50999,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50999,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options50965(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options50965_$_iter__50984(cljs.core.rest(s__50985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31167__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options50965);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down51003 = (function sablono$core$drop_down51003(var_args){
var args51004 = [];
var len__31462__auto___51007 = arguments.length;
var i__31463__auto___51008 = (0);
while(true){
if((i__31463__auto___51008 < len__31462__auto___51007)){
args51004.push((arguments[i__31463__auto___51008]));

var G__51009 = (i__31463__auto___51008 + (1));
i__31463__auto___51008 = G__51009;
continue;
} else {
}
break;
}

var G__51006 = args51004.length;
switch (G__51006) {
case 2:
return sablono.core.drop_down51003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down51003.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51004.length)].join('')));

}
});

sablono.core.drop_down51003.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down51003.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down51003.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down51003.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down51003);
/**
 * Creates a text area element.
 */
sablono.core.text_area51011 = (function sablono$core$text_area51011(var_args){
var args51012 = [];
var len__31462__auto___51015 = arguments.length;
var i__31463__auto___51016 = (0);
while(true){
if((i__31463__auto___51016 < len__31462__auto___51015)){
args51012.push((arguments[i__31463__auto___51016]));

var G__51017 = (i__31463__auto___51016 + (1));
i__31463__auto___51016 = G__51017;
continue;
} else {
}
break;
}

var G__51014 = args51012.length;
switch (G__51014) {
case 1:
return sablono.core.text_area51011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area51011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51012.length)].join('')));

}
});

sablono.core.text_area51011.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area51011.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area51011.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__30387__auto__ = value;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area51011.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area51011);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label51019 = (function sablono$core$label51019(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label51019);
/**
 * Creates a submit button.
 */
sablono.core.submit_button51020 = (function sablono$core$submit_button51020(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button51020);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button51021 = (function sablono$core$reset_button51021(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button51021);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to51022 = (function sablono$core$form_to51022(var_args){
var args__31469__auto__ = [];
var len__31462__auto___51032 = arguments.length;
var i__31463__auto___51033 = (0);
while(true){
if((i__31463__auto___51033 < len__31462__auto___51032)){
args__31469__auto__.push((arguments[i__31463__auto___51033]));

var G__51034 = (i__31463__auto___51033 + (1));
i__31463__auto___51033 = G__51034;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to51022.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

sablono.core.form_to51022.cljs$core$IFn$_invoke$arity$variadic = (function (p__51025,body){
var vec__51026 = p__51025;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__51029 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__51030 = "_method";
var G__51031 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__51029,G__51030,G__51031) : sablono.core.hidden_field.call(null,G__51029,G__51030,G__51031));
})()], null)),body));
});

sablono.core.form_to51022.cljs$lang$maxFixedArity = (1);

sablono.core.form_to51022.cljs$lang$applyTo = (function (seq51023){
var G__51024 = cljs.core.first(seq51023);
var seq51023__$1 = cljs.core.next(seq51023);
return sablono.core.form_to51022.cljs$core$IFn$_invoke$arity$variadic(G__51024,seq51023__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to51022);
