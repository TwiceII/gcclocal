// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('rum.utils');
goog.require('cljs.core');
var last_id_50536 = cljs.core.volatile_BANG_((0));
rum.utils.next_id = ((function (last_id_50536){
return (function rum$utils$next_id(){
return cljs.core._vreset_BANG_(last_id_50536,(cljs.core._deref(last_id_50536) + (1)));
});})(last_id_50536))
;
rum.utils.collect = (function rum$utils$collect(fn_key,classes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_key,classes));
});
rum.utils.call_all = (function rum$utils$call_all(var_args){
var args__31469__auto__ = [];
var len__31462__auto___50540 = arguments.length;
var i__31463__auto___50541 = (0);
while(true){
if((i__31463__auto___50541 < len__31462__auto___50540)){
args__31469__auto__.push((arguments[i__31463__auto___50541]));

var G__50542 = (i__31463__auto___50541 + (1));
i__31463__auto___50541 = G__50542;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((2) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((2)),(0),null)):null);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31470__auto__);
});

rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.utils.call_all.cljs$lang$maxFixedArity = (2);

rum.utils.call_all.cljs$lang$applyTo = (function (seq50537){
var G__50538 = cljs.core.first(seq50537);
var seq50537__$1 = cljs.core.next(seq50537);
var G__50539 = cljs.core.first(seq50537__$1);
var seq50537__$2 = cljs.core.next(seq50537__$1);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic(G__50538,G__50539,seq50537__$2);
});

