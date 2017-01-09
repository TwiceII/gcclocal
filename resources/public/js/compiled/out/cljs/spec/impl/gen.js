// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41088 = arguments.length;
var i__31653__auto___41089 = (0);
while(true){
if((i__31653__auto___41089 < len__31652__auto___41088)){
args__31659__auto__.push((arguments[i__31653__auto___41089]));

var G__41090 = (i__31653__auto___41089 + (1));
i__31653__auto___41089 = G__41090;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq41087){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41087));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41092 = arguments.length;
var i__31653__auto___41093 = (0);
while(true){
if((i__31653__auto___41093 < len__31652__auto___41092)){
args__31659__auto__.push((arguments[i__31653__auto___41093]));

var G__41094 = (i__31653__auto___41093 + (1));
i__31653__auto___41093 = G__41094;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq41091){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41091));
});

var g_QMARK__41095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_41096 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41095){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__41095))
,null));
var mkg_41097 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41095,g_41096){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__41095,g_41096))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__41095,g_41096,mkg_41097){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__41095).call(null,x);
});})(g_QMARK__41095,g_41096,mkg_41097))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__41095,g_41096,mkg_41097){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_41097).call(null,gfn);
});})(g_QMARK__41095,g_41096,mkg_41097))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__41095,g_41096,mkg_41097){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_41096).call(null,generator);
});})(g_QMARK__41095,g_41096,mkg_41097))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__41059__auto___41115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__41059__auto___41115){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41116 = arguments.length;
var i__31653__auto___41117 = (0);
while(true){
if((i__31653__auto___41117 < len__31652__auto___41116)){
args__31659__auto__.push((arguments[i__31653__auto___41117]));

var G__41118 = (i__31653__auto___41117 + (1));
i__31653__auto___41117 = G__41118;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41115))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41115),args);
});})(g__41059__auto___41115))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__41059__auto___41115){
return (function (seq41098){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41098));
});})(g__41059__auto___41115))
;


var g__41059__auto___41119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__41059__auto___41119){
return (function cljs$spec$impl$gen$list(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41120 = arguments.length;
var i__31653__auto___41121 = (0);
while(true){
if((i__31653__auto___41121 < len__31652__auto___41120)){
args__31659__auto__.push((arguments[i__31653__auto___41121]));

var G__41122 = (i__31653__auto___41121 + (1));
i__31653__auto___41121 = G__41122;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41119))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41119),args);
});})(g__41059__auto___41119))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__41059__auto___41119){
return (function (seq41099){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41099));
});})(g__41059__auto___41119))
;


var g__41059__auto___41123 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__41059__auto___41123){
return (function cljs$spec$impl$gen$map(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41124 = arguments.length;
var i__31653__auto___41125 = (0);
while(true){
if((i__31653__auto___41125 < len__31652__auto___41124)){
args__31659__auto__.push((arguments[i__31653__auto___41125]));

var G__41126 = (i__31653__auto___41125 + (1));
i__31653__auto___41125 = G__41126;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41123))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41123),args);
});})(g__41059__auto___41123))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__41059__auto___41123){
return (function (seq41100){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41100));
});})(g__41059__auto___41123))
;


var g__41059__auto___41127 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__41059__auto___41127){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41128 = arguments.length;
var i__31653__auto___41129 = (0);
while(true){
if((i__31653__auto___41129 < len__31652__auto___41128)){
args__31659__auto__.push((arguments[i__31653__auto___41129]));

var G__41130 = (i__31653__auto___41129 + (1));
i__31653__auto___41129 = G__41130;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41127))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41127),args);
});})(g__41059__auto___41127))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__41059__auto___41127){
return (function (seq41101){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41101));
});})(g__41059__auto___41127))
;


var g__41059__auto___41131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__41059__auto___41131){
return (function cljs$spec$impl$gen$set(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41132 = arguments.length;
var i__31653__auto___41133 = (0);
while(true){
if((i__31653__auto___41133 < len__31652__auto___41132)){
args__31659__auto__.push((arguments[i__31653__auto___41133]));

var G__41134 = (i__31653__auto___41133 + (1));
i__31653__auto___41133 = G__41134;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41131))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41131),args);
});})(g__41059__auto___41131))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__41059__auto___41131){
return (function (seq41102){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41102));
});})(g__41059__auto___41131))
;


var g__41059__auto___41135 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__41059__auto___41135){
return (function cljs$spec$impl$gen$vector(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41136 = arguments.length;
var i__31653__auto___41137 = (0);
while(true){
if((i__31653__auto___41137 < len__31652__auto___41136)){
args__31659__auto__.push((arguments[i__31653__auto___41137]));

var G__41138 = (i__31653__auto___41137 + (1));
i__31653__auto___41137 = G__41138;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41135))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41135){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41135),args);
});})(g__41059__auto___41135))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__41059__auto___41135){
return (function (seq41103){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41103));
});})(g__41059__auto___41135))
;


var g__41059__auto___41139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__41059__auto___41139){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41140 = arguments.length;
var i__31653__auto___41141 = (0);
while(true){
if((i__31653__auto___41141 < len__31652__auto___41140)){
args__31659__auto__.push((arguments[i__31653__auto___41141]));

var G__41142 = (i__31653__auto___41141 + (1));
i__31653__auto___41141 = G__41142;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41139))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41139),args);
});})(g__41059__auto___41139))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__41059__auto___41139){
return (function (seq41104){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41104));
});})(g__41059__auto___41139))
;


var g__41059__auto___41143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__41059__auto___41143){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41144 = arguments.length;
var i__31653__auto___41145 = (0);
while(true){
if((i__31653__auto___41145 < len__31652__auto___41144)){
args__31659__auto__.push((arguments[i__31653__auto___41145]));

var G__41146 = (i__31653__auto___41145 + (1));
i__31653__auto___41145 = G__41146;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41143))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41143),args);
});})(g__41059__auto___41143))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__41059__auto___41143){
return (function (seq41105){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41105));
});})(g__41059__auto___41143))
;


var g__41059__auto___41147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__41059__auto___41147){
return (function cljs$spec$impl$gen$elements(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41148 = arguments.length;
var i__31653__auto___41149 = (0);
while(true){
if((i__31653__auto___41149 < len__31652__auto___41148)){
args__31659__auto__.push((arguments[i__31653__auto___41149]));

var G__41150 = (i__31653__auto___41149 + (1));
i__31653__auto___41149 = G__41150;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41147))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41147){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41147),args);
});})(g__41059__auto___41147))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__41059__auto___41147){
return (function (seq41106){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41106));
});})(g__41059__auto___41147))
;


var g__41059__auto___41151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__41059__auto___41151){
return (function cljs$spec$impl$gen$bind(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41152 = arguments.length;
var i__31653__auto___41153 = (0);
while(true){
if((i__31653__auto___41153 < len__31652__auto___41152)){
args__31659__auto__.push((arguments[i__31653__auto___41153]));

var G__41154 = (i__31653__auto___41153 + (1));
i__31653__auto___41153 = G__41154;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41151))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41151){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41151),args);
});})(g__41059__auto___41151))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__41059__auto___41151){
return (function (seq41107){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41107));
});})(g__41059__auto___41151))
;


var g__41059__auto___41155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__41059__auto___41155){
return (function cljs$spec$impl$gen$choose(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41156 = arguments.length;
var i__31653__auto___41157 = (0);
while(true){
if((i__31653__auto___41157 < len__31652__auto___41156)){
args__31659__auto__.push((arguments[i__31653__auto___41157]));

var G__41158 = (i__31653__auto___41157 + (1));
i__31653__auto___41157 = G__41158;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41155))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41155){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41155),args);
});})(g__41059__auto___41155))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__41059__auto___41155){
return (function (seq41108){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41108));
});})(g__41059__auto___41155))
;


var g__41059__auto___41159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__41059__auto___41159){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41160 = arguments.length;
var i__31653__auto___41161 = (0);
while(true){
if((i__31653__auto___41161 < len__31652__auto___41160)){
args__31659__auto__.push((arguments[i__31653__auto___41161]));

var G__41162 = (i__31653__auto___41161 + (1));
i__31653__auto___41161 = G__41162;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41159))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41159){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41159),args);
});})(g__41059__auto___41159))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__41059__auto___41159){
return (function (seq41109){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41109));
});})(g__41059__auto___41159))
;


var g__41059__auto___41163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__41059__auto___41163){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41164 = arguments.length;
var i__31653__auto___41165 = (0);
while(true){
if((i__31653__auto___41165 < len__31652__auto___41164)){
args__31659__auto__.push((arguments[i__31653__auto___41165]));

var G__41166 = (i__31653__auto___41165 + (1));
i__31653__auto___41165 = G__41166;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41163))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41163){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41163),args);
});})(g__41059__auto___41163))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__41059__auto___41163){
return (function (seq41110){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41110));
});})(g__41059__auto___41163))
;


var g__41059__auto___41167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__41059__auto___41167){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41168 = arguments.length;
var i__31653__auto___41169 = (0);
while(true){
if((i__31653__auto___41169 < len__31652__auto___41168)){
args__31659__auto__.push((arguments[i__31653__auto___41169]));

var G__41170 = (i__31653__auto___41169 + (1));
i__31653__auto___41169 = G__41170;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41167))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41167),args);
});})(g__41059__auto___41167))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__41059__auto___41167){
return (function (seq41111){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41111));
});})(g__41059__auto___41167))
;


var g__41059__auto___41171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__41059__auto___41171){
return (function cljs$spec$impl$gen$sample(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41172 = arguments.length;
var i__31653__auto___41173 = (0);
while(true){
if((i__31653__auto___41173 < len__31652__auto___41172)){
args__31659__auto__.push((arguments[i__31653__auto___41173]));

var G__41174 = (i__31653__auto___41173 + (1));
i__31653__auto___41173 = G__41174;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41171))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41171),args);
});})(g__41059__auto___41171))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__41059__auto___41171){
return (function (seq41112){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41112));
});})(g__41059__auto___41171))
;


var g__41059__auto___41175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__41059__auto___41175){
return (function cljs$spec$impl$gen$return(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41176 = arguments.length;
var i__31653__auto___41177 = (0);
while(true){
if((i__31653__auto___41177 < len__31652__auto___41176)){
args__31659__auto__.push((arguments[i__31653__auto___41177]));

var G__41178 = (i__31653__auto___41177 + (1));
i__31653__auto___41177 = G__41178;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41175))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41175),args);
});})(g__41059__auto___41175))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__41059__auto___41175){
return (function (seq41113){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41113));
});})(g__41059__auto___41175))
;


var g__41059__auto___41179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__41059__auto___41179){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41180 = arguments.length;
var i__31653__auto___41181 = (0);
while(true){
if((i__31653__auto___41181 < len__31652__auto___41180)){
args__31659__auto__.push((arguments[i__31653__auto___41181]));

var G__41182 = (i__31653__auto___41181 + (1));
i__31653__auto___41181 = G__41182;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41059__auto___41179))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41059__auto___41179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41059__auto___41179),args);
});})(g__41059__auto___41179))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__41059__auto___41179){
return (function (seq41114){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41114));
});})(g__41059__auto___41179))
;

var g__41072__auto___41204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__41072__auto___41204){
return (function cljs$spec$impl$gen$any(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41205 = arguments.length;
var i__31653__auto___41206 = (0);
while(true){
if((i__31653__auto___41206 < len__31652__auto___41205)){
args__31659__auto__.push((arguments[i__31653__auto___41206]));

var G__41207 = (i__31653__auto___41206 + (1));
i__31653__auto___41206 = G__41207;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41204))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41204){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41204);
});})(g__41072__auto___41204))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__41072__auto___41204){
return (function (seq41183){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41183));
});})(g__41072__auto___41204))
;


var g__41072__auto___41208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__41072__auto___41208){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41209 = arguments.length;
var i__31653__auto___41210 = (0);
while(true){
if((i__31653__auto___41210 < len__31652__auto___41209)){
args__31659__auto__.push((arguments[i__31653__auto___41210]));

var G__41211 = (i__31653__auto___41210 + (1));
i__31653__auto___41210 = G__41211;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41208))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41208){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41208);
});})(g__41072__auto___41208))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__41072__auto___41208){
return (function (seq41184){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41184));
});})(g__41072__auto___41208))
;


var g__41072__auto___41212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__41072__auto___41212){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41213 = arguments.length;
var i__31653__auto___41214 = (0);
while(true){
if((i__31653__auto___41214 < len__31652__auto___41213)){
args__31659__auto__.push((arguments[i__31653__auto___41214]));

var G__41215 = (i__31653__auto___41214 + (1));
i__31653__auto___41214 = G__41215;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41212))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41212){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41212);
});})(g__41072__auto___41212))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__41072__auto___41212){
return (function (seq41185){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41185));
});})(g__41072__auto___41212))
;


var g__41072__auto___41216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__41072__auto___41216){
return (function cljs$spec$impl$gen$char(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41217 = arguments.length;
var i__31653__auto___41218 = (0);
while(true){
if((i__31653__auto___41218 < len__31652__auto___41217)){
args__31659__auto__.push((arguments[i__31653__auto___41218]));

var G__41219 = (i__31653__auto___41218 + (1));
i__31653__auto___41218 = G__41219;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41216))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41216){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41216);
});})(g__41072__auto___41216))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__41072__auto___41216){
return (function (seq41186){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41186));
});})(g__41072__auto___41216))
;


var g__41072__auto___41220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__41072__auto___41220){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41221 = arguments.length;
var i__31653__auto___41222 = (0);
while(true){
if((i__31653__auto___41222 < len__31652__auto___41221)){
args__31659__auto__.push((arguments[i__31653__auto___41222]));

var G__41223 = (i__31653__auto___41222 + (1));
i__31653__auto___41222 = G__41223;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41220))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41220){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41220);
});})(g__41072__auto___41220))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__41072__auto___41220){
return (function (seq41187){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41187));
});})(g__41072__auto___41220))
;


var g__41072__auto___41224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__41072__auto___41224){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41225 = arguments.length;
var i__31653__auto___41226 = (0);
while(true){
if((i__31653__auto___41226 < len__31652__auto___41225)){
args__31659__auto__.push((arguments[i__31653__auto___41226]));

var G__41227 = (i__31653__auto___41226 + (1));
i__31653__auto___41226 = G__41227;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41224))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41224){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41224);
});})(g__41072__auto___41224))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__41072__auto___41224){
return (function (seq41188){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41188));
});})(g__41072__auto___41224))
;


var g__41072__auto___41228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__41072__auto___41228){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41229 = arguments.length;
var i__31653__auto___41230 = (0);
while(true){
if((i__31653__auto___41230 < len__31652__auto___41229)){
args__31659__auto__.push((arguments[i__31653__auto___41230]));

var G__41231 = (i__31653__auto___41230 + (1));
i__31653__auto___41230 = G__41231;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41228))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41228){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41228);
});})(g__41072__auto___41228))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__41072__auto___41228){
return (function (seq41189){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41189));
});})(g__41072__auto___41228))
;


var g__41072__auto___41232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__41072__auto___41232){
return (function cljs$spec$impl$gen$double(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41233 = arguments.length;
var i__31653__auto___41234 = (0);
while(true){
if((i__31653__auto___41234 < len__31652__auto___41233)){
args__31659__auto__.push((arguments[i__31653__auto___41234]));

var G__41235 = (i__31653__auto___41234 + (1));
i__31653__auto___41234 = G__41235;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41232))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41232){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41232);
});})(g__41072__auto___41232))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__41072__auto___41232){
return (function (seq41190){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41190));
});})(g__41072__auto___41232))
;


var g__41072__auto___41236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__41072__auto___41236){
return (function cljs$spec$impl$gen$int(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41237 = arguments.length;
var i__31653__auto___41238 = (0);
while(true){
if((i__31653__auto___41238 < len__31652__auto___41237)){
args__31659__auto__.push((arguments[i__31653__auto___41238]));

var G__41239 = (i__31653__auto___41238 + (1));
i__31653__auto___41238 = G__41239;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41236))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41236){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41236);
});})(g__41072__auto___41236))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__41072__auto___41236){
return (function (seq41191){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41191));
});})(g__41072__auto___41236))
;


var g__41072__auto___41240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__41072__auto___41240){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41241 = arguments.length;
var i__31653__auto___41242 = (0);
while(true){
if((i__31653__auto___41242 < len__31652__auto___41241)){
args__31659__auto__.push((arguments[i__31653__auto___41242]));

var G__41243 = (i__31653__auto___41242 + (1));
i__31653__auto___41242 = G__41243;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41240))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41240){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41240);
});})(g__41072__auto___41240))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__41072__auto___41240){
return (function (seq41192){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41192));
});})(g__41072__auto___41240))
;


var g__41072__auto___41244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__41072__auto___41244){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41245 = arguments.length;
var i__31653__auto___41246 = (0);
while(true){
if((i__31653__auto___41246 < len__31652__auto___41245)){
args__31659__auto__.push((arguments[i__31653__auto___41246]));

var G__41247 = (i__31653__auto___41246 + (1));
i__31653__auto___41246 = G__41247;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41244))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41244){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41244);
});})(g__41072__auto___41244))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__41072__auto___41244){
return (function (seq41193){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41193));
});})(g__41072__auto___41244))
;


var g__41072__auto___41248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__41072__auto___41248){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41249 = arguments.length;
var i__31653__auto___41250 = (0);
while(true){
if((i__31653__auto___41250 < len__31652__auto___41249)){
args__31659__auto__.push((arguments[i__31653__auto___41250]));

var G__41251 = (i__31653__auto___41250 + (1));
i__31653__auto___41250 = G__41251;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41248))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41248){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41248);
});})(g__41072__auto___41248))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__41072__auto___41248){
return (function (seq41194){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41194));
});})(g__41072__auto___41248))
;


var g__41072__auto___41252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__41072__auto___41252){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41253 = arguments.length;
var i__31653__auto___41254 = (0);
while(true){
if((i__31653__auto___41254 < len__31652__auto___41253)){
args__31659__auto__.push((arguments[i__31653__auto___41254]));

var G__41255 = (i__31653__auto___41254 + (1));
i__31653__auto___41254 = G__41255;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41252))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41252){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41252);
});})(g__41072__auto___41252))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__41072__auto___41252){
return (function (seq41195){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41195));
});})(g__41072__auto___41252))
;


var g__41072__auto___41256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__41072__auto___41256){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41257 = arguments.length;
var i__31653__auto___41258 = (0);
while(true){
if((i__31653__auto___41258 < len__31652__auto___41257)){
args__31659__auto__.push((arguments[i__31653__auto___41258]));

var G__41259 = (i__31653__auto___41258 + (1));
i__31653__auto___41258 = G__41259;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41256))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41256){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41256);
});})(g__41072__auto___41256))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__41072__auto___41256){
return (function (seq41196){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41196));
});})(g__41072__auto___41256))
;


var g__41072__auto___41260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__41072__auto___41260){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41261 = arguments.length;
var i__31653__auto___41262 = (0);
while(true){
if((i__31653__auto___41262 < len__31652__auto___41261)){
args__31659__auto__.push((arguments[i__31653__auto___41262]));

var G__41263 = (i__31653__auto___41262 + (1));
i__31653__auto___41262 = G__41263;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41260))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41260){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41260);
});})(g__41072__auto___41260))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__41072__auto___41260){
return (function (seq41197){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41197));
});})(g__41072__auto___41260))
;


var g__41072__auto___41264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__41072__auto___41264){
return (function cljs$spec$impl$gen$string(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41265 = arguments.length;
var i__31653__auto___41266 = (0);
while(true){
if((i__31653__auto___41266 < len__31652__auto___41265)){
args__31659__auto__.push((arguments[i__31653__auto___41266]));

var G__41267 = (i__31653__auto___41266 + (1));
i__31653__auto___41266 = G__41267;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41264))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41264){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41264);
});})(g__41072__auto___41264))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__41072__auto___41264){
return (function (seq41198){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41198));
});})(g__41072__auto___41264))
;


var g__41072__auto___41268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__41072__auto___41268){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41269 = arguments.length;
var i__31653__auto___41270 = (0);
while(true){
if((i__31653__auto___41270 < len__31652__auto___41269)){
args__31659__auto__.push((arguments[i__31653__auto___41270]));

var G__41271 = (i__31653__auto___41270 + (1));
i__31653__auto___41270 = G__41271;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41268))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41268){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41268);
});})(g__41072__auto___41268))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__41072__auto___41268){
return (function (seq41199){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41199));
});})(g__41072__auto___41268))
;


var g__41072__auto___41272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__41072__auto___41272){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41273 = arguments.length;
var i__31653__auto___41274 = (0);
while(true){
if((i__31653__auto___41274 < len__31652__auto___41273)){
args__31659__auto__.push((arguments[i__31653__auto___41274]));

var G__41275 = (i__31653__auto___41274 + (1));
i__31653__auto___41274 = G__41275;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41272))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41272){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41272);
});})(g__41072__auto___41272))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__41072__auto___41272){
return (function (seq41200){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41200));
});})(g__41072__auto___41272))
;


var g__41072__auto___41276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__41072__auto___41276){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41277 = arguments.length;
var i__31653__auto___41278 = (0);
while(true){
if((i__31653__auto___41278 < len__31652__auto___41277)){
args__31659__auto__.push((arguments[i__31653__auto___41278]));

var G__41279 = (i__31653__auto___41278 + (1));
i__31653__auto___41278 = G__41279;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41276))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41276){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41276);
});})(g__41072__auto___41276))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__41072__auto___41276){
return (function (seq41201){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41201));
});})(g__41072__auto___41276))
;


var g__41072__auto___41280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__41072__auto___41280){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41281 = arguments.length;
var i__31653__auto___41282 = (0);
while(true){
if((i__31653__auto___41282 < len__31652__auto___41281)){
args__31659__auto__.push((arguments[i__31653__auto___41282]));

var G__41283 = (i__31653__auto___41282 + (1));
i__31653__auto___41282 = G__41283;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41280))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41280){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41280);
});})(g__41072__auto___41280))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__41072__auto___41280){
return (function (seq41202){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41202));
});})(g__41072__auto___41280))
;


var g__41072__auto___41284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__41072__auto___41284){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41285 = arguments.length;
var i__31653__auto___41286 = (0);
while(true){
if((i__31653__auto___41286 < len__31652__auto___41285)){
args__31659__auto__.push((arguments[i__31653__auto___41286]));

var G__41287 = (i__31653__auto___41286 + (1));
i__31653__auto___41286 = G__41287;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});})(g__41072__auto___41284))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41072__auto___41284){
return (function (args){
return cljs.core.deref.call(null,g__41072__auto___41284);
});})(g__41072__auto___41284))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__41072__auto___41284){
return (function (seq41203){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41203));
});})(g__41072__auto___41284))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__31659__auto__ = [];
var len__31652__auto___41290 = arguments.length;
var i__31653__auto___41291 = (0);
while(true){
if((i__31653__auto___41291 < len__31652__auto___41290)){
args__31659__auto__.push((arguments[i__31653__auto___41291]));

var G__41292 = (i__31653__auto___41291 + (1));
i__31653__auto___41291 = G__41292;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__41288_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__41288_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq41289){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41289));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__41293_SHARP_){
return (new Date(p1__41293_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map