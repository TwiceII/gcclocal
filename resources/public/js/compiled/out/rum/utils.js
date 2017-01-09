// Compiled by ClojureScript 1.9.89 {}
goog.provide('rum.utils');
goog.require('cljs.core');
var last_id_32617 = cljs.core.volatile_BANG_.call(null,(0));
rum.utils.next_id = ((function (last_id_32617){
return (function rum$utils$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_32617,(cljs.core._deref.call(null,last_id_32617) + (1)));
});})(last_id_32617))
;
rum.utils.collect = (function rum$utils$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.utils.call_all = (function rum$utils$call_all(var_args){
var args__31659__auto__ = [];
var len__31652__auto___32621 = arguments.length;
var i__31653__auto___32622 = (0);
while(true){
if((i__31653__auto___32622 < len__31652__auto___32621)){
args__31659__auto__.push((arguments[i__31653__auto___32622]));

var G__32623 = (i__31653__auto___32622 + (1));
i__31653__auto___32622 = G__32623;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((2) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((2)),(0),null)):null);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31660__auto__);
});

rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.utils.call_all.cljs$lang$maxFixedArity = (2);

rum.utils.call_all.cljs$lang$applyTo = (function (seq32618){
var G__32619 = cljs.core.first.call(null,seq32618);
var seq32618__$1 = cljs.core.next.call(null,seq32618);
var G__32620 = cljs.core.first.call(null,seq32618__$1);
var seq32618__$2 = cljs.core.next.call(null,seq32618__$1);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic(G__32619,G__32620,seq32618__$2);
});


//# sourceMappingURL=utils.js.map