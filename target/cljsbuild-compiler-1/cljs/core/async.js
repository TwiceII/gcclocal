// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args47451 = [];
var len__31462__auto___47457 = arguments.length;
var i__31463__auto___47458 = (0);
while(true){
if((i__31463__auto___47458 < len__31462__auto___47457)){
args47451.push((arguments[i__31463__auto___47458]));

var G__47459 = (i__31463__auto___47458 + (1));
i__31463__auto___47458 = G__47459;
continue;
} else {
}
break;
}

var G__47453 = args47451.length;
switch (G__47453) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47451.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47454 = (function (f,blockable,meta47455){
this.f = f;
this.blockable = blockable;
this.meta47455 = meta47455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47456,meta47455__$1){
var self__ = this;
var _47456__$1 = this;
return (new cljs.core.async.t_cljs$core$async47454(self__.f,self__.blockable,meta47455__$1));
});

cljs.core.async.t_cljs$core$async47454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47456){
var self__ = this;
var _47456__$1 = this;
return self__.meta47455;
});

cljs.core.async.t_cljs$core$async47454.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta47455], null);
});

cljs.core.async.t_cljs$core$async47454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47454";

cljs.core.async.t_cljs$core$async47454.cljs$lang$ctorPrWriter = (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async47454");
});

cljs.core.async.__GT_t_cljs$core$async47454 = (function cljs$core$async$__GT_t_cljs$core$async47454(f__$1,blockable__$1,meta47455){
return (new cljs.core.async.t_cljs$core$async47454(f__$1,blockable__$1,meta47455));
});

}

return (new cljs.core.async.t_cljs$core$async47454(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args47463 = [];
var len__31462__auto___47466 = arguments.length;
var i__31463__auto___47467 = (0);
while(true){
if((i__31463__auto___47467 < len__31462__auto___47466)){
args47463.push((arguments[i__31463__auto___47467]));

var G__47468 = (i__31463__auto___47467 + (1));
i__31463__auto___47467 = G__47468;
continue;
} else {
}
break;
}

var G__47465 = args47463.length;
switch (G__47465) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47463.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args47470 = [];
var len__31462__auto___47473 = arguments.length;
var i__31463__auto___47474 = (0);
while(true){
if((i__31463__auto___47474 < len__31462__auto___47473)){
args47470.push((arguments[i__31463__auto___47474]));

var G__47475 = (i__31463__auto___47474 + (1));
i__31463__auto___47474 = G__47475;
continue;
} else {
}
break;
}

var G__47472 = args47470.length;
switch (G__47472) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47470.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args47477 = [];
var len__31462__auto___47480 = arguments.length;
var i__31463__auto___47481 = (0);
while(true){
if((i__31463__auto___47481 < len__31462__auto___47480)){
args47477.push((arguments[i__31463__auto___47481]));

var G__47482 = (i__31463__auto___47481 + (1));
i__31463__auto___47481 = G__47482;
continue;
} else {
}
break;
}

var G__47479 = args47477.length;
switch (G__47479) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47477.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47484 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47484) : fn1.call(null,val_47484));
} else {
cljs.core.async.impl.dispatch.run(((function (val_47484,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47484) : fn1.call(null,val_47484));
});})(val_47484,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args47485 = [];
var len__31462__auto___47488 = arguments.length;
var i__31463__auto___47489 = (0);
while(true){
if((i__31463__auto___47489 < len__31462__auto___47488)){
args47485.push((arguments[i__31463__auto___47489]));

var G__47490 = (i__31463__auto___47489 + (1));
i__31463__auto___47489 = G__47490;
continue;
} else {
}
break;
}

var G__47487 = args47485.length;
switch (G__47487) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47485.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31302__auto___47492 = n;
var x_47493 = (0);
while(true){
if((x_47493 < n__31302__auto___47492)){
(a[x_47493] = (0));

var G__47494 = (x_47493 + (1));
x_47493 = G__47494;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__47495 = (i + (1));
i = G__47495;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async47499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47499 = (function (alt_flag,flag,meta47500){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta47500 = meta47500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47501,meta47500__$1){
var self__ = this;
var _47501__$1 = this;
return (new cljs.core.async.t_cljs$core$async47499(self__.alt_flag,self__.flag,meta47500__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47501){
var self__ = this;
var _47501__$1 = this;
return self__.meta47500;
});})(flag))
;

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47499.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta47500], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47499";

cljs.core.async.t_cljs$core$async47499.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async47499");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47499 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47499(alt_flag__$1,flag__$1,meta47500){
return (new cljs.core.async.t_cljs$core$async47499(alt_flag__$1,flag__$1,meta47500));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47499(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47505 = (function (alt_handler,flag,cb,meta47506){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta47506 = meta47506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47507,meta47506__$1){
var self__ = this;
var _47507__$1 = this;
return (new cljs.core.async.t_cljs$core$async47505(self__.alt_handler,self__.flag,self__.cb,meta47506__$1));
});

cljs.core.async.t_cljs$core$async47505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47507){
var self__ = this;
var _47507__$1 = this;
return self__.meta47506;
});

cljs.core.async.t_cljs$core$async47505.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async47505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta47506], null);
});

cljs.core.async.t_cljs$core$async47505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47505";

cljs.core.async.t_cljs$core$async47505.cljs$lang$ctorPrWriter = (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async47505");
});

cljs.core.async.__GT_t_cljs$core$async47505 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47505(alt_handler__$1,flag__$1,cb__$1,meta47506){
return (new cljs.core.async.t_cljs$core$async47505(alt_handler__$1,flag__$1,cb__$1,meta47506));
});

}

return (new cljs.core.async.t_cljs$core$async47505(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47508_SHARP_){
var G__47512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47508_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47512) : fret.call(null,G__47512));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47509_SHARP_){
var G__47513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47509_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47513) : fret.call(null,G__47513));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__30387__auto__ = wport;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47514 = (i + (1));
i = G__47514;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30387__auto__ = ret;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__30375__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__30375__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__30375__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47520 = arguments.length;
var i__31463__auto___47521 = (0);
while(true){
if((i__31463__auto___47521 < len__31462__auto___47520)){
args__31469__auto__.push((arguments[i__31463__auto___47521]));

var G__47522 = (i__31463__auto___47521 + (1));
i__31463__auto___47521 = G__47522;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47517){
var map__47518 = p__47517;
var map__47518__$1 = ((((!((map__47518 == null)))?((((map__47518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47518):map__47518);
var opts = map__47518__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47515){
var G__47516 = cljs.core.first(seq47515);
var seq47515__$1 = cljs.core.next(seq47515);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47516,seq47515__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args47523 = [];
var len__31462__auto___47573 = arguments.length;
var i__31463__auto___47574 = (0);
while(true){
if((i__31463__auto___47574 < len__31462__auto___47573)){
args47523.push((arguments[i__31463__auto___47574]));

var G__47575 = (i__31463__auto___47574 + (1));
i__31463__auto___47574 = G__47575;
continue;
} else {
}
break;
}

var G__47525 = args47523.length;
switch (G__47525) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47523.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38096__auto___47577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___47577){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___47577){
return (function (state_47549){
var state_val_47550 = (state_47549[(1)]);
if((state_val_47550 === (7))){
var inst_47545 = (state_47549[(2)]);
var state_47549__$1 = state_47549;
var statearr_47551_47578 = state_47549__$1;
(statearr_47551_47578[(2)] = inst_47545);

(statearr_47551_47578[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (1))){
var state_47549__$1 = state_47549;
var statearr_47552_47579 = state_47549__$1;
(statearr_47552_47579[(2)] = null);

(statearr_47552_47579[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (4))){
var inst_47528 = (state_47549[(7)]);
var inst_47528__$1 = (state_47549[(2)]);
var inst_47529 = (inst_47528__$1 == null);
var state_47549__$1 = (function (){var statearr_47553 = state_47549;
(statearr_47553[(7)] = inst_47528__$1);

return statearr_47553;
})();
if(cljs.core.truth_(inst_47529)){
var statearr_47554_47580 = state_47549__$1;
(statearr_47554_47580[(1)] = (5));

} else {
var statearr_47555_47581 = state_47549__$1;
(statearr_47555_47581[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (13))){
var state_47549__$1 = state_47549;
var statearr_47556_47582 = state_47549__$1;
(statearr_47556_47582[(2)] = null);

(statearr_47556_47582[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (6))){
var inst_47528 = (state_47549[(7)]);
var state_47549__$1 = state_47549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47549__$1,(11),to,inst_47528);
} else {
if((state_val_47550 === (3))){
var inst_47547 = (state_47549[(2)]);
var state_47549__$1 = state_47549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47549__$1,inst_47547);
} else {
if((state_val_47550 === (12))){
var state_47549__$1 = state_47549;
var statearr_47557_47583 = state_47549__$1;
(statearr_47557_47583[(2)] = null);

(statearr_47557_47583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (2))){
var state_47549__$1 = state_47549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47549__$1,(4),from);
} else {
if((state_val_47550 === (11))){
var inst_47538 = (state_47549[(2)]);
var state_47549__$1 = state_47549;
if(cljs.core.truth_(inst_47538)){
var statearr_47558_47584 = state_47549__$1;
(statearr_47558_47584[(1)] = (12));

} else {
var statearr_47559_47585 = state_47549__$1;
(statearr_47559_47585[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (9))){
var state_47549__$1 = state_47549;
var statearr_47560_47586 = state_47549__$1;
(statearr_47560_47586[(2)] = null);

(statearr_47560_47586[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (5))){
var state_47549__$1 = state_47549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47561_47587 = state_47549__$1;
(statearr_47561_47587[(1)] = (8));

} else {
var statearr_47562_47588 = state_47549__$1;
(statearr_47562_47588[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (14))){
var inst_47543 = (state_47549[(2)]);
var state_47549__$1 = state_47549;
var statearr_47563_47589 = state_47549__$1;
(statearr_47563_47589[(2)] = inst_47543);

(statearr_47563_47589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (10))){
var inst_47535 = (state_47549[(2)]);
var state_47549__$1 = state_47549;
var statearr_47564_47590 = state_47549__$1;
(statearr_47564_47590[(2)] = inst_47535);

(statearr_47564_47590[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47550 === (8))){
var inst_47532 = cljs.core.async.close_BANG_(to);
var state_47549__$1 = state_47549;
var statearr_47565_47591 = state_47549__$1;
(statearr_47565_47591[(2)] = inst_47532);

(statearr_47565_47591[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___47577))
;
return ((function (switch__37982__auto__,c__38096__auto___47577){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_47569 = [null,null,null,null,null,null,null,null];
(statearr_47569[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_47569[(1)] = (1));

return statearr_47569;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_47549){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_47549);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e47570){if((e47570 instanceof Object)){
var ex__37986__auto__ = e47570;
var statearr_47571_47592 = state_47549;
(statearr_47571_47592[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47549);

return cljs.core.cst$kw$recur;
} else {
throw e47570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__47593 = state_47549;
state_47549 = G__47593;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_47549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_47549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___47577))
})();
var state__38098__auto__ = (function (){var statearr_47572 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_47572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___47577);

return statearr_47572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___47577))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__47781){
var vec__47782 = p__47781;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47782,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47782,(1),null);
var job = vec__47782;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38096__auto___47968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___47968,res,vec__47782,v,p,job,jobs,results){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___47968,res,vec__47782,v,p,job,jobs,results){
return (function (state_47789){
var state_val_47790 = (state_47789[(1)]);
if((state_val_47790 === (1))){
var state_47789__$1 = state_47789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47789__$1,(2),res,v);
} else {
if((state_val_47790 === (2))){
var inst_47786 = (state_47789[(2)]);
var inst_47787 = cljs.core.async.close_BANG_(res);
var state_47789__$1 = (function (){var statearr_47791 = state_47789;
(statearr_47791[(7)] = inst_47786);

return statearr_47791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47789__$1,inst_47787);
} else {
return null;
}
}
});})(c__38096__auto___47968,res,vec__47782,v,p,job,jobs,results))
;
return ((function (switch__37982__auto__,c__38096__auto___47968,res,vec__47782,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0 = (function (){
var statearr_47795 = [null,null,null,null,null,null,null,null];
(statearr_47795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__);

(statearr_47795[(1)] = (1));

return statearr_47795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1 = (function (state_47789){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_47789);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e47796){if((e47796 instanceof Object)){
var ex__37986__auto__ = e47796;
var statearr_47797_47969 = state_47789;
(statearr_47797_47969[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47789);

return cljs.core.cst$kw$recur;
} else {
throw e47796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__47970 = state_47789;
state_47789 = G__47970;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = function(state_47789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1.call(this,state_47789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___47968,res,vec__47782,v,p,job,jobs,results))
})();
var state__38098__auto__ = (function (){var statearr_47798 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_47798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___47968);

return statearr_47798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___47968,res,vec__47782,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47799){
var vec__47800 = p__47799;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47800,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47800,(1),null);
var job = vec__47800;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__31302__auto___47971 = n;
var __47972 = (0);
while(true){
if((__47972 < n__31302__auto___47971)){
var G__47803_47973 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47803_47973) {
case "compute":
var c__38096__auto___47975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47972,c__38096__auto___47975,G__47803_47973,n__31302__auto___47971,jobs,results,process,async){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (__47972,c__38096__auto___47975,G__47803_47973,n__31302__auto___47971,jobs,results,process,async){
return (function (state_47816){
var state_val_47817 = (state_47816[(1)]);
if((state_val_47817 === (1))){
var state_47816__$1 = state_47816;
var statearr_47818_47976 = state_47816__$1;
(statearr_47818_47976[(2)] = null);

(statearr_47818_47976[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47817 === (2))){
var state_47816__$1 = state_47816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47816__$1,(4),jobs);
} else {
if((state_val_47817 === (3))){
var inst_47814 = (state_47816[(2)]);
var state_47816__$1 = state_47816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47816__$1,inst_47814);
} else {
if((state_val_47817 === (4))){
var inst_47806 = (state_47816[(2)]);
var inst_47807 = process(inst_47806);
var state_47816__$1 = state_47816;
if(cljs.core.truth_(inst_47807)){
var statearr_47819_47977 = state_47816__$1;
(statearr_47819_47977[(1)] = (5));

} else {
var statearr_47820_47978 = state_47816__$1;
(statearr_47820_47978[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47817 === (5))){
var state_47816__$1 = state_47816;
var statearr_47821_47979 = state_47816__$1;
(statearr_47821_47979[(2)] = null);

(statearr_47821_47979[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47817 === (6))){
var state_47816__$1 = state_47816;
var statearr_47822_47980 = state_47816__$1;
(statearr_47822_47980[(2)] = null);

(statearr_47822_47980[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47817 === (7))){
var inst_47812 = (state_47816[(2)]);
var state_47816__$1 = state_47816;
var statearr_47823_47981 = state_47816__$1;
(statearr_47823_47981[(2)] = inst_47812);

(statearr_47823_47981[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__47972,c__38096__auto___47975,G__47803_47973,n__31302__auto___47971,jobs,results,process,async))
;
return ((function (__47972,switch__37982__auto__,c__38096__auto___47975,G__47803_47973,n__31302__auto___47971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0 = (function (){
var statearr_47827 = [null,null,null,null,null,null,null];
(statearr_47827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__);

(statearr_47827[(1)] = (1));

return statearr_47827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1 = (function (state_47816){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_47816);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e47828){if((e47828 instanceof Object)){
var ex__37986__auto__ = e47828;
var statearr_47829_47982 = state_47816;
(statearr_47829_47982[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47816);

return cljs.core.cst$kw$recur;
} else {
throw e47828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__47983 = state_47816;
state_47816 = G__47983;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = function(state_47816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1.call(this,state_47816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__;
})()
;})(__47972,switch__37982__auto__,c__38096__auto___47975,G__47803_47973,n__31302__auto___47971,jobs,results,process,async))
})();
var state__38098__auto__ = (function (){var statearr_47830 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_47830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___47975);

return statearr_47830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(__47972,c__38096__auto___47975,G__47803_47973,n__31302__auto___47971,jobs,results,process,async))
);


break;
case "async":
var c__38096__auto___47984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47972,c__38096__auto___47984,G__47803_47973,n__31302__auto___47971,jobs,results,process,async){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (__47972,c__38096__auto___47984,G__47803_47973,n__31302__auto___47971,jobs,results,process,async){
return (function (state_47843){
var state_val_47844 = (state_47843[(1)]);
if((state_val_47844 === (1))){
var state_47843__$1 = state_47843;
var statearr_47845_47985 = state_47843__$1;
(statearr_47845_47985[(2)] = null);

(statearr_47845_47985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47844 === (2))){
var state_47843__$1 = state_47843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47843__$1,(4),jobs);
} else {
if((state_val_47844 === (3))){
var inst_47841 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47843__$1,inst_47841);
} else {
if((state_val_47844 === (4))){
var inst_47833 = (state_47843[(2)]);
var inst_47834 = async(inst_47833);
var state_47843__$1 = state_47843;
if(cljs.core.truth_(inst_47834)){
var statearr_47846_47986 = state_47843__$1;
(statearr_47846_47986[(1)] = (5));

} else {
var statearr_47847_47987 = state_47843__$1;
(statearr_47847_47987[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47844 === (5))){
var state_47843__$1 = state_47843;
var statearr_47848_47988 = state_47843__$1;
(statearr_47848_47988[(2)] = null);

(statearr_47848_47988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47844 === (6))){
var state_47843__$1 = state_47843;
var statearr_47849_47989 = state_47843__$1;
(statearr_47849_47989[(2)] = null);

(statearr_47849_47989[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47844 === (7))){
var inst_47839 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47850_47990 = state_47843__$1;
(statearr_47850_47990[(2)] = inst_47839);

(statearr_47850_47990[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__47972,c__38096__auto___47984,G__47803_47973,n__31302__auto___47971,jobs,results,process,async))
;
return ((function (__47972,switch__37982__auto__,c__38096__auto___47984,G__47803_47973,n__31302__auto___47971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0 = (function (){
var statearr_47854 = [null,null,null,null,null,null,null];
(statearr_47854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__);

(statearr_47854[(1)] = (1));

return statearr_47854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1 = (function (state_47843){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_47843);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e47855){if((e47855 instanceof Object)){
var ex__37986__auto__ = e47855;
var statearr_47856_47991 = state_47843;
(statearr_47856_47991[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47843);

return cljs.core.cst$kw$recur;
} else {
throw e47855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__47992 = state_47843;
state_47843 = G__47992;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = function(state_47843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1.call(this,state_47843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__;
})()
;})(__47972,switch__37982__auto__,c__38096__auto___47984,G__47803_47973,n__31302__auto___47971,jobs,results,process,async))
})();
var state__38098__auto__ = (function (){var statearr_47857 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_47857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___47984);

return statearr_47857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(__47972,c__38096__auto___47984,G__47803_47973,n__31302__auto___47971,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__47993 = (__47972 + (1));
__47972 = G__47993;
continue;
} else {
}
break;
}

var c__38096__auto___47994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___47994,jobs,results,process,async){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___47994,jobs,results,process,async){
return (function (state_47879){
var state_val_47880 = (state_47879[(1)]);
if((state_val_47880 === (1))){
var state_47879__$1 = state_47879;
var statearr_47881_47995 = state_47879__$1;
(statearr_47881_47995[(2)] = null);

(statearr_47881_47995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47880 === (2))){
var state_47879__$1 = state_47879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47879__$1,(4),from);
} else {
if((state_val_47880 === (3))){
var inst_47877 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47879__$1,inst_47877);
} else {
if((state_val_47880 === (4))){
var inst_47860 = (state_47879[(7)]);
var inst_47860__$1 = (state_47879[(2)]);
var inst_47861 = (inst_47860__$1 == null);
var state_47879__$1 = (function (){var statearr_47882 = state_47879;
(statearr_47882[(7)] = inst_47860__$1);

return statearr_47882;
})();
if(cljs.core.truth_(inst_47861)){
var statearr_47883_47996 = state_47879__$1;
(statearr_47883_47996[(1)] = (5));

} else {
var statearr_47884_47997 = state_47879__$1;
(statearr_47884_47997[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47880 === (5))){
var inst_47863 = cljs.core.async.close_BANG_(jobs);
var state_47879__$1 = state_47879;
var statearr_47885_47998 = state_47879__$1;
(statearr_47885_47998[(2)] = inst_47863);

(statearr_47885_47998[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47880 === (6))){
var inst_47860 = (state_47879[(7)]);
var inst_47865 = (state_47879[(8)]);
var inst_47865__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47867 = [inst_47860,inst_47865__$1];
var inst_47868 = (new cljs.core.PersistentVector(null,2,(5),inst_47866,inst_47867,null));
var state_47879__$1 = (function (){var statearr_47886 = state_47879;
(statearr_47886[(8)] = inst_47865__$1);

return statearr_47886;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47879__$1,(8),jobs,inst_47868);
} else {
if((state_val_47880 === (7))){
var inst_47875 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
var statearr_47887_47999 = state_47879__$1;
(statearr_47887_47999[(2)] = inst_47875);

(statearr_47887_47999[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47880 === (8))){
var inst_47865 = (state_47879[(8)]);
var inst_47870 = (state_47879[(2)]);
var state_47879__$1 = (function (){var statearr_47888 = state_47879;
(statearr_47888[(9)] = inst_47870);

return statearr_47888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47879__$1,(9),results,inst_47865);
} else {
if((state_val_47880 === (9))){
var inst_47872 = (state_47879[(2)]);
var state_47879__$1 = (function (){var statearr_47889 = state_47879;
(statearr_47889[(10)] = inst_47872);

return statearr_47889;
})();
var statearr_47890_48000 = state_47879__$1;
(statearr_47890_48000[(2)] = null);

(statearr_47890_48000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___47994,jobs,results,process,async))
;
return ((function (switch__37982__auto__,c__38096__auto___47994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0 = (function (){
var statearr_47894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__);

(statearr_47894[(1)] = (1));

return statearr_47894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1 = (function (state_47879){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_47879);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e47895){if((e47895 instanceof Object)){
var ex__37986__auto__ = e47895;
var statearr_47896_48001 = state_47879;
(statearr_47896_48001[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47879);

return cljs.core.cst$kw$recur;
} else {
throw e47895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__48002 = state_47879;
state_47879 = G__48002;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = function(state_47879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1.call(this,state_47879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___47994,jobs,results,process,async))
})();
var state__38098__auto__ = (function (){var statearr_47897 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_47897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___47994);

return statearr_47897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___47994,jobs,results,process,async))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__,jobs,results,process,async){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__,jobs,results,process,async){
return (function (state_47935){
var state_val_47936 = (state_47935[(1)]);
if((state_val_47936 === (7))){
var inst_47931 = (state_47935[(2)]);
var state_47935__$1 = state_47935;
var statearr_47937_48003 = state_47935__$1;
(statearr_47937_48003[(2)] = inst_47931);

(statearr_47937_48003[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (20))){
var state_47935__$1 = state_47935;
var statearr_47938_48004 = state_47935__$1;
(statearr_47938_48004[(2)] = null);

(statearr_47938_48004[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (1))){
var state_47935__$1 = state_47935;
var statearr_47939_48005 = state_47935__$1;
(statearr_47939_48005[(2)] = null);

(statearr_47939_48005[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (4))){
var inst_47900 = (state_47935[(7)]);
var inst_47900__$1 = (state_47935[(2)]);
var inst_47901 = (inst_47900__$1 == null);
var state_47935__$1 = (function (){var statearr_47940 = state_47935;
(statearr_47940[(7)] = inst_47900__$1);

return statearr_47940;
})();
if(cljs.core.truth_(inst_47901)){
var statearr_47941_48006 = state_47935__$1;
(statearr_47941_48006[(1)] = (5));

} else {
var statearr_47942_48007 = state_47935__$1;
(statearr_47942_48007[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (15))){
var inst_47913 = (state_47935[(8)]);
var state_47935__$1 = state_47935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47935__$1,(18),to,inst_47913);
} else {
if((state_val_47936 === (21))){
var inst_47926 = (state_47935[(2)]);
var state_47935__$1 = state_47935;
var statearr_47943_48008 = state_47935__$1;
(statearr_47943_48008[(2)] = inst_47926);

(statearr_47943_48008[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (13))){
var inst_47928 = (state_47935[(2)]);
var state_47935__$1 = (function (){var statearr_47944 = state_47935;
(statearr_47944[(9)] = inst_47928);

return statearr_47944;
})();
var statearr_47945_48009 = state_47935__$1;
(statearr_47945_48009[(2)] = null);

(statearr_47945_48009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (6))){
var inst_47900 = (state_47935[(7)]);
var state_47935__$1 = state_47935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47935__$1,(11),inst_47900);
} else {
if((state_val_47936 === (17))){
var inst_47921 = (state_47935[(2)]);
var state_47935__$1 = state_47935;
if(cljs.core.truth_(inst_47921)){
var statearr_47946_48010 = state_47935__$1;
(statearr_47946_48010[(1)] = (19));

} else {
var statearr_47947_48011 = state_47935__$1;
(statearr_47947_48011[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (3))){
var inst_47933 = (state_47935[(2)]);
var state_47935__$1 = state_47935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47935__$1,inst_47933);
} else {
if((state_val_47936 === (12))){
var inst_47910 = (state_47935[(10)]);
var state_47935__$1 = state_47935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47935__$1,(14),inst_47910);
} else {
if((state_val_47936 === (2))){
var state_47935__$1 = state_47935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47935__$1,(4),results);
} else {
if((state_val_47936 === (19))){
var state_47935__$1 = state_47935;
var statearr_47948_48012 = state_47935__$1;
(statearr_47948_48012[(2)] = null);

(statearr_47948_48012[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (11))){
var inst_47910 = (state_47935[(2)]);
var state_47935__$1 = (function (){var statearr_47949 = state_47935;
(statearr_47949[(10)] = inst_47910);

return statearr_47949;
})();
var statearr_47950_48013 = state_47935__$1;
(statearr_47950_48013[(2)] = null);

(statearr_47950_48013[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (9))){
var state_47935__$1 = state_47935;
var statearr_47951_48014 = state_47935__$1;
(statearr_47951_48014[(2)] = null);

(statearr_47951_48014[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (5))){
var state_47935__$1 = state_47935;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47952_48015 = state_47935__$1;
(statearr_47952_48015[(1)] = (8));

} else {
var statearr_47953_48016 = state_47935__$1;
(statearr_47953_48016[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (14))){
var inst_47913 = (state_47935[(8)]);
var inst_47915 = (state_47935[(11)]);
var inst_47913__$1 = (state_47935[(2)]);
var inst_47914 = (inst_47913__$1 == null);
var inst_47915__$1 = cljs.core.not(inst_47914);
var state_47935__$1 = (function (){var statearr_47954 = state_47935;
(statearr_47954[(8)] = inst_47913__$1);

(statearr_47954[(11)] = inst_47915__$1);

return statearr_47954;
})();
if(inst_47915__$1){
var statearr_47955_48017 = state_47935__$1;
(statearr_47955_48017[(1)] = (15));

} else {
var statearr_47956_48018 = state_47935__$1;
(statearr_47956_48018[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (16))){
var inst_47915 = (state_47935[(11)]);
var state_47935__$1 = state_47935;
var statearr_47957_48019 = state_47935__$1;
(statearr_47957_48019[(2)] = inst_47915);

(statearr_47957_48019[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (10))){
var inst_47907 = (state_47935[(2)]);
var state_47935__$1 = state_47935;
var statearr_47958_48020 = state_47935__$1;
(statearr_47958_48020[(2)] = inst_47907);

(statearr_47958_48020[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (18))){
var inst_47918 = (state_47935[(2)]);
var state_47935__$1 = state_47935;
var statearr_47959_48021 = state_47935__$1;
(statearr_47959_48021[(2)] = inst_47918);

(statearr_47959_48021[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47936 === (8))){
var inst_47904 = cljs.core.async.close_BANG_(to);
var state_47935__$1 = state_47935;
var statearr_47960_48022 = state_47935__$1;
(statearr_47960_48022[(2)] = inst_47904);

(statearr_47960_48022[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto__,jobs,results,process,async))
;
return ((function (switch__37982__auto__,c__38096__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0 = (function (){
var statearr_47964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__);

(statearr_47964[(1)] = (1));

return statearr_47964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1 = (function (state_47935){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_47935);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e47965){if((e47965 instanceof Object)){
var ex__37986__auto__ = e47965;
var statearr_47966_48023 = state_47935;
(statearr_47966_48023[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47935);

return cljs.core.cst$kw$recur;
} else {
throw e47965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__48024 = state_47935;
state_47935 = G__48024;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__ = function(state_47935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1.call(this,state_47935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__,jobs,results,process,async))
})();
var state__38098__auto__ = (function (){var statearr_47967 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_47967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_47967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__,jobs,results,process,async))
);

return c__38096__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args48025 = [];
var len__31462__auto___48028 = arguments.length;
var i__31463__auto___48029 = (0);
while(true){
if((i__31463__auto___48029 < len__31462__auto___48028)){
args48025.push((arguments[i__31463__auto___48029]));

var G__48030 = (i__31463__auto___48029 + (1));
i__31463__auto___48029 = G__48030;
continue;
} else {
}
break;
}

var G__48027 = args48025.length;
switch (G__48027) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48025.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args48032 = [];
var len__31462__auto___48035 = arguments.length;
var i__31463__auto___48036 = (0);
while(true){
if((i__31463__auto___48036 < len__31462__auto___48035)){
args48032.push((arguments[i__31463__auto___48036]));

var G__48037 = (i__31463__auto___48036 + (1));
i__31463__auto___48036 = G__48037;
continue;
} else {
}
break;
}

var G__48034 = args48032.length;
switch (G__48034) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48032.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args48039 = [];
var len__31462__auto___48092 = arguments.length;
var i__31463__auto___48093 = (0);
while(true){
if((i__31463__auto___48093 < len__31462__auto___48092)){
args48039.push((arguments[i__31463__auto___48093]));

var G__48094 = (i__31463__auto___48093 + (1));
i__31463__auto___48093 = G__48094;
continue;
} else {
}
break;
}

var G__48041 = args48039.length;
switch (G__48041) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48039.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38096__auto___48096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___48096,tc,fc){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___48096,tc,fc){
return (function (state_48067){
var state_val_48068 = (state_48067[(1)]);
if((state_val_48068 === (7))){
var inst_48063 = (state_48067[(2)]);
var state_48067__$1 = state_48067;
var statearr_48069_48097 = state_48067__$1;
(statearr_48069_48097[(2)] = inst_48063);

(statearr_48069_48097[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (1))){
var state_48067__$1 = state_48067;
var statearr_48070_48098 = state_48067__$1;
(statearr_48070_48098[(2)] = null);

(statearr_48070_48098[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (4))){
var inst_48044 = (state_48067[(7)]);
var inst_48044__$1 = (state_48067[(2)]);
var inst_48045 = (inst_48044__$1 == null);
var state_48067__$1 = (function (){var statearr_48071 = state_48067;
(statearr_48071[(7)] = inst_48044__$1);

return statearr_48071;
})();
if(cljs.core.truth_(inst_48045)){
var statearr_48072_48099 = state_48067__$1;
(statearr_48072_48099[(1)] = (5));

} else {
var statearr_48073_48100 = state_48067__$1;
(statearr_48073_48100[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (13))){
var state_48067__$1 = state_48067;
var statearr_48074_48101 = state_48067__$1;
(statearr_48074_48101[(2)] = null);

(statearr_48074_48101[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (6))){
var inst_48044 = (state_48067[(7)]);
var inst_48050 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48044) : p.call(null,inst_48044));
var state_48067__$1 = state_48067;
if(cljs.core.truth_(inst_48050)){
var statearr_48075_48102 = state_48067__$1;
(statearr_48075_48102[(1)] = (9));

} else {
var statearr_48076_48103 = state_48067__$1;
(statearr_48076_48103[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (3))){
var inst_48065 = (state_48067[(2)]);
var state_48067__$1 = state_48067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48067__$1,inst_48065);
} else {
if((state_val_48068 === (12))){
var state_48067__$1 = state_48067;
var statearr_48077_48104 = state_48067__$1;
(statearr_48077_48104[(2)] = null);

(statearr_48077_48104[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (2))){
var state_48067__$1 = state_48067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48067__$1,(4),ch);
} else {
if((state_val_48068 === (11))){
var inst_48044 = (state_48067[(7)]);
var inst_48054 = (state_48067[(2)]);
var state_48067__$1 = state_48067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48067__$1,(8),inst_48054,inst_48044);
} else {
if((state_val_48068 === (9))){
var state_48067__$1 = state_48067;
var statearr_48078_48105 = state_48067__$1;
(statearr_48078_48105[(2)] = tc);

(statearr_48078_48105[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (5))){
var inst_48047 = cljs.core.async.close_BANG_(tc);
var inst_48048 = cljs.core.async.close_BANG_(fc);
var state_48067__$1 = (function (){var statearr_48079 = state_48067;
(statearr_48079[(8)] = inst_48047);

return statearr_48079;
})();
var statearr_48080_48106 = state_48067__$1;
(statearr_48080_48106[(2)] = inst_48048);

(statearr_48080_48106[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (14))){
var inst_48061 = (state_48067[(2)]);
var state_48067__$1 = state_48067;
var statearr_48081_48107 = state_48067__$1;
(statearr_48081_48107[(2)] = inst_48061);

(statearr_48081_48107[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (10))){
var state_48067__$1 = state_48067;
var statearr_48082_48108 = state_48067__$1;
(statearr_48082_48108[(2)] = fc);

(statearr_48082_48108[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48068 === (8))){
var inst_48056 = (state_48067[(2)]);
var state_48067__$1 = state_48067;
if(cljs.core.truth_(inst_48056)){
var statearr_48083_48109 = state_48067__$1;
(statearr_48083_48109[(1)] = (12));

} else {
var statearr_48084_48110 = state_48067__$1;
(statearr_48084_48110[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___48096,tc,fc))
;
return ((function (switch__37982__auto__,c__38096__auto___48096,tc,fc){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_48088 = [null,null,null,null,null,null,null,null,null];
(statearr_48088[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_48088[(1)] = (1));

return statearr_48088;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_48067){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_48067);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e48089){if((e48089 instanceof Object)){
var ex__37986__auto__ = e48089;
var statearr_48090_48111 = state_48067;
(statearr_48090_48111[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48067);

return cljs.core.cst$kw$recur;
} else {
throw e48089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__48112 = state_48067;
state_48067 = G__48112;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_48067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_48067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___48096,tc,fc))
})();
var state__38098__auto__ = (function (){var statearr_48091 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_48091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___48096);

return statearr_48091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___48096,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_48176){
var state_val_48177 = (state_48176[(1)]);
if((state_val_48177 === (7))){
var inst_48172 = (state_48176[(2)]);
var state_48176__$1 = state_48176;
var statearr_48178_48199 = state_48176__$1;
(statearr_48178_48199[(2)] = inst_48172);

(statearr_48178_48199[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48177 === (1))){
var inst_48156 = init;
var state_48176__$1 = (function (){var statearr_48179 = state_48176;
(statearr_48179[(7)] = inst_48156);

return statearr_48179;
})();
var statearr_48180_48200 = state_48176__$1;
(statearr_48180_48200[(2)] = null);

(statearr_48180_48200[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48177 === (4))){
var inst_48159 = (state_48176[(8)]);
var inst_48159__$1 = (state_48176[(2)]);
var inst_48160 = (inst_48159__$1 == null);
var state_48176__$1 = (function (){var statearr_48181 = state_48176;
(statearr_48181[(8)] = inst_48159__$1);

return statearr_48181;
})();
if(cljs.core.truth_(inst_48160)){
var statearr_48182_48201 = state_48176__$1;
(statearr_48182_48201[(1)] = (5));

} else {
var statearr_48183_48202 = state_48176__$1;
(statearr_48183_48202[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48177 === (6))){
var inst_48163 = (state_48176[(9)]);
var inst_48156 = (state_48176[(7)]);
var inst_48159 = (state_48176[(8)]);
var inst_48163__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48156,inst_48159) : f.call(null,inst_48156,inst_48159));
var inst_48164 = cljs.core.reduced_QMARK_(inst_48163__$1);
var state_48176__$1 = (function (){var statearr_48184 = state_48176;
(statearr_48184[(9)] = inst_48163__$1);

return statearr_48184;
})();
if(inst_48164){
var statearr_48185_48203 = state_48176__$1;
(statearr_48185_48203[(1)] = (8));

} else {
var statearr_48186_48204 = state_48176__$1;
(statearr_48186_48204[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48177 === (3))){
var inst_48174 = (state_48176[(2)]);
var state_48176__$1 = state_48176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48176__$1,inst_48174);
} else {
if((state_val_48177 === (2))){
var state_48176__$1 = state_48176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48176__$1,(4),ch);
} else {
if((state_val_48177 === (9))){
var inst_48163 = (state_48176[(9)]);
var inst_48156 = inst_48163;
var state_48176__$1 = (function (){var statearr_48187 = state_48176;
(statearr_48187[(7)] = inst_48156);

return statearr_48187;
})();
var statearr_48188_48205 = state_48176__$1;
(statearr_48188_48205[(2)] = null);

(statearr_48188_48205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48177 === (5))){
var inst_48156 = (state_48176[(7)]);
var state_48176__$1 = state_48176;
var statearr_48189_48206 = state_48176__$1;
(statearr_48189_48206[(2)] = inst_48156);

(statearr_48189_48206[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48177 === (10))){
var inst_48170 = (state_48176[(2)]);
var state_48176__$1 = state_48176;
var statearr_48190_48207 = state_48176__$1;
(statearr_48190_48207[(2)] = inst_48170);

(statearr_48190_48207[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48177 === (8))){
var inst_48163 = (state_48176[(9)]);
var inst_48166 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_48163) : cljs.core.deref.call(null,inst_48163));
var state_48176__$1 = state_48176;
var statearr_48191_48208 = state_48176__$1;
(statearr_48191_48208[(2)] = inst_48166);

(statearr_48191_48208[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37983__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37983__auto____0 = (function (){
var statearr_48195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48195[(0)] = cljs$core$async$reduce_$_state_machine__37983__auto__);

(statearr_48195[(1)] = (1));

return statearr_48195;
});
var cljs$core$async$reduce_$_state_machine__37983__auto____1 = (function (state_48176){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_48176);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e48196){if((e48196 instanceof Object)){
var ex__37986__auto__ = e48196;
var statearr_48197_48209 = state_48176;
(statearr_48197_48209[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48176);

return cljs.core.cst$kw$recur;
} else {
throw e48196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__48210 = state_48176;
state_48176 = G__48210;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37983__auto__ = function(state_48176){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37983__auto____1.call(this,state_48176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37983__auto____0;
cljs$core$async$reduce_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37983__auto____1;
return cljs$core$async$reduce_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_48198 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_48198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_48198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args48211 = [];
var len__31462__auto___48263 = arguments.length;
var i__31463__auto___48264 = (0);
while(true){
if((i__31463__auto___48264 < len__31462__auto___48263)){
args48211.push((arguments[i__31463__auto___48264]));

var G__48265 = (i__31463__auto___48264 + (1));
i__31463__auto___48264 = G__48265;
continue;
} else {
}
break;
}

var G__48213 = args48211.length;
switch (G__48213) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48211.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_48238){
var state_val_48239 = (state_48238[(1)]);
if((state_val_48239 === (7))){
var inst_48220 = (state_48238[(2)]);
var state_48238__$1 = state_48238;
var statearr_48240_48267 = state_48238__$1;
(statearr_48240_48267[(2)] = inst_48220);

(statearr_48240_48267[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (1))){
var inst_48214 = cljs.core.seq(coll);
var inst_48215 = inst_48214;
var state_48238__$1 = (function (){var statearr_48241 = state_48238;
(statearr_48241[(7)] = inst_48215);

return statearr_48241;
})();
var statearr_48242_48268 = state_48238__$1;
(statearr_48242_48268[(2)] = null);

(statearr_48242_48268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (4))){
var inst_48215 = (state_48238[(7)]);
var inst_48218 = cljs.core.first(inst_48215);
var state_48238__$1 = state_48238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48238__$1,(7),ch,inst_48218);
} else {
if((state_val_48239 === (13))){
var inst_48232 = (state_48238[(2)]);
var state_48238__$1 = state_48238;
var statearr_48243_48269 = state_48238__$1;
(statearr_48243_48269[(2)] = inst_48232);

(statearr_48243_48269[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (6))){
var inst_48223 = (state_48238[(2)]);
var state_48238__$1 = state_48238;
if(cljs.core.truth_(inst_48223)){
var statearr_48244_48270 = state_48238__$1;
(statearr_48244_48270[(1)] = (8));

} else {
var statearr_48245_48271 = state_48238__$1;
(statearr_48245_48271[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (3))){
var inst_48236 = (state_48238[(2)]);
var state_48238__$1 = state_48238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48238__$1,inst_48236);
} else {
if((state_val_48239 === (12))){
var state_48238__$1 = state_48238;
var statearr_48246_48272 = state_48238__$1;
(statearr_48246_48272[(2)] = null);

(statearr_48246_48272[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (2))){
var inst_48215 = (state_48238[(7)]);
var state_48238__$1 = state_48238;
if(cljs.core.truth_(inst_48215)){
var statearr_48247_48273 = state_48238__$1;
(statearr_48247_48273[(1)] = (4));

} else {
var statearr_48248_48274 = state_48238__$1;
(statearr_48248_48274[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (11))){
var inst_48229 = cljs.core.async.close_BANG_(ch);
var state_48238__$1 = state_48238;
var statearr_48249_48275 = state_48238__$1;
(statearr_48249_48275[(2)] = inst_48229);

(statearr_48249_48275[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (9))){
var state_48238__$1 = state_48238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48250_48276 = state_48238__$1;
(statearr_48250_48276[(1)] = (11));

} else {
var statearr_48251_48277 = state_48238__$1;
(statearr_48251_48277[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (5))){
var inst_48215 = (state_48238[(7)]);
var state_48238__$1 = state_48238;
var statearr_48252_48278 = state_48238__$1;
(statearr_48252_48278[(2)] = inst_48215);

(statearr_48252_48278[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (10))){
var inst_48234 = (state_48238[(2)]);
var state_48238__$1 = state_48238;
var statearr_48253_48279 = state_48238__$1;
(statearr_48253_48279[(2)] = inst_48234);

(statearr_48253_48279[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48239 === (8))){
var inst_48215 = (state_48238[(7)]);
var inst_48225 = cljs.core.next(inst_48215);
var inst_48215__$1 = inst_48225;
var state_48238__$1 = (function (){var statearr_48254 = state_48238;
(statearr_48254[(7)] = inst_48215__$1);

return statearr_48254;
})();
var statearr_48255_48280 = state_48238__$1;
(statearr_48255_48280[(2)] = null);

(statearr_48255_48280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_48259 = [null,null,null,null,null,null,null,null];
(statearr_48259[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_48259[(1)] = (1));

return statearr_48259;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_48238){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_48238);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e48260){if((e48260 instanceof Object)){
var ex__37986__auto__ = e48260;
var statearr_48261_48281 = state_48238;
(statearr_48261_48281[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48238);

return cljs.core.cst$kw$recur;
} else {
throw e48260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__48282 = state_48238;
state_48238 = G__48282;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_48238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_48238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_48262 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_48262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_48262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__31050__auto__ = (((_ == null))?null:_);
var m__31051__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__31051__auto__.call(null,_));
} else {
var m__31051__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__31051__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$3 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__31051__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__31051__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__31051__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__31051__auto__.call(null,m,ch));
} else {
var m__31051__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__31051__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__31051__auto__.call(null,m));
} else {
var m__31051__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__31051__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__48511 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48511) : cljs.core.atom.call(null,G__48511));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48512 = (function (mult,ch,cs,meta48513){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta48513 = meta48513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48514,meta48513__$1){
var self__ = this;
var _48514__$1 = this;
return (new cljs.core.async.t_cljs$core$async48512(self__.mult,self__.ch,self__.cs,meta48513__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48514){
var self__ = this;
var _48514__$1 = this;
return self__.meta48513;
});})(cs))
;

cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48512.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__48515_48739 = self__.cs;
var G__48516_48740 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48515_48739,G__48516_48740) : cljs.core.reset_BANG_.call(null,G__48515_48739,G__48516_48740));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48512.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta48513], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48512";

cljs.core.async.t_cljs$core$async48512.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async48512");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48512 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48512(mult__$1,ch__$1,cs__$1,meta48513){
return (new cljs.core.async.t_cljs$core$async48512(mult__$1,ch__$1,cs__$1,meta48513));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48512(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38096__auto___48741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___48741,cs,m,dchan,dctr,done){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___48741,cs,m,dchan,dctr,done){
return (function (state_48651){
var state_val_48652 = (state_48651[(1)]);
if((state_val_48652 === (7))){
var inst_48647 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48653_48742 = state_48651__$1;
(statearr_48653_48742[(2)] = inst_48647);

(statearr_48653_48742[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (20))){
var inst_48550 = (state_48651[(7)]);
var inst_48562 = cljs.core.first(inst_48550);
var inst_48563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48562,(0),null);
var inst_48564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48562,(1),null);
var state_48651__$1 = (function (){var statearr_48654 = state_48651;
(statearr_48654[(8)] = inst_48563);

return statearr_48654;
})();
if(cljs.core.truth_(inst_48564)){
var statearr_48655_48743 = state_48651__$1;
(statearr_48655_48743[(1)] = (22));

} else {
var statearr_48656_48744 = state_48651__$1;
(statearr_48656_48744[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (27))){
var inst_48519 = (state_48651[(9)]);
var inst_48599 = (state_48651[(10)]);
var inst_48594 = (state_48651[(11)]);
var inst_48592 = (state_48651[(12)]);
var inst_48599__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48592,inst_48594);
var inst_48600 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48599__$1,inst_48519,done);
var state_48651__$1 = (function (){var statearr_48657 = state_48651;
(statearr_48657[(10)] = inst_48599__$1);

return statearr_48657;
})();
if(cljs.core.truth_(inst_48600)){
var statearr_48658_48745 = state_48651__$1;
(statearr_48658_48745[(1)] = (30));

} else {
var statearr_48659_48746 = state_48651__$1;
(statearr_48659_48746[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (1))){
var state_48651__$1 = state_48651;
var statearr_48660_48747 = state_48651__$1;
(statearr_48660_48747[(2)] = null);

(statearr_48660_48747[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (24))){
var inst_48550 = (state_48651[(7)]);
var inst_48569 = (state_48651[(2)]);
var inst_48570 = cljs.core.next(inst_48550);
var inst_48528 = inst_48570;
var inst_48529 = null;
var inst_48530 = (0);
var inst_48531 = (0);
var state_48651__$1 = (function (){var statearr_48661 = state_48651;
(statearr_48661[(13)] = inst_48569);

(statearr_48661[(14)] = inst_48528);

(statearr_48661[(15)] = inst_48530);

(statearr_48661[(16)] = inst_48529);

(statearr_48661[(17)] = inst_48531);

return statearr_48661;
})();
var statearr_48662_48748 = state_48651__$1;
(statearr_48662_48748[(2)] = null);

(statearr_48662_48748[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (39))){
var state_48651__$1 = state_48651;
var statearr_48666_48749 = state_48651__$1;
(statearr_48666_48749[(2)] = null);

(statearr_48666_48749[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (4))){
var inst_48519 = (state_48651[(9)]);
var inst_48519__$1 = (state_48651[(2)]);
var inst_48520 = (inst_48519__$1 == null);
var state_48651__$1 = (function (){var statearr_48667 = state_48651;
(statearr_48667[(9)] = inst_48519__$1);

return statearr_48667;
})();
if(cljs.core.truth_(inst_48520)){
var statearr_48668_48750 = state_48651__$1;
(statearr_48668_48750[(1)] = (5));

} else {
var statearr_48669_48751 = state_48651__$1;
(statearr_48669_48751[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (15))){
var inst_48528 = (state_48651[(14)]);
var inst_48530 = (state_48651[(15)]);
var inst_48529 = (state_48651[(16)]);
var inst_48531 = (state_48651[(17)]);
var inst_48546 = (state_48651[(2)]);
var inst_48547 = (inst_48531 + (1));
var tmp48663 = inst_48528;
var tmp48664 = inst_48530;
var tmp48665 = inst_48529;
var inst_48528__$1 = tmp48663;
var inst_48529__$1 = tmp48665;
var inst_48530__$1 = tmp48664;
var inst_48531__$1 = inst_48547;
var state_48651__$1 = (function (){var statearr_48670 = state_48651;
(statearr_48670[(14)] = inst_48528__$1);

(statearr_48670[(15)] = inst_48530__$1);

(statearr_48670[(16)] = inst_48529__$1);

(statearr_48670[(18)] = inst_48546);

(statearr_48670[(17)] = inst_48531__$1);

return statearr_48670;
})();
var statearr_48671_48752 = state_48651__$1;
(statearr_48671_48752[(2)] = null);

(statearr_48671_48752[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (21))){
var inst_48573 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48675_48753 = state_48651__$1;
(statearr_48675_48753[(2)] = inst_48573);

(statearr_48675_48753[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (31))){
var inst_48599 = (state_48651[(10)]);
var inst_48603 = done(null);
var inst_48604 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48599);
var state_48651__$1 = (function (){var statearr_48676 = state_48651;
(statearr_48676[(19)] = inst_48603);

return statearr_48676;
})();
var statearr_48677_48754 = state_48651__$1;
(statearr_48677_48754[(2)] = inst_48604);

(statearr_48677_48754[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (32))){
var inst_48591 = (state_48651[(20)]);
var inst_48594 = (state_48651[(11)]);
var inst_48592 = (state_48651[(12)]);
var inst_48593 = (state_48651[(21)]);
var inst_48606 = (state_48651[(2)]);
var inst_48607 = (inst_48594 + (1));
var tmp48672 = inst_48591;
var tmp48673 = inst_48592;
var tmp48674 = inst_48593;
var inst_48591__$1 = tmp48672;
var inst_48592__$1 = tmp48673;
var inst_48593__$1 = tmp48674;
var inst_48594__$1 = inst_48607;
var state_48651__$1 = (function (){var statearr_48678 = state_48651;
(statearr_48678[(20)] = inst_48591__$1);

(statearr_48678[(11)] = inst_48594__$1);

(statearr_48678[(12)] = inst_48592__$1);

(statearr_48678[(22)] = inst_48606);

(statearr_48678[(21)] = inst_48593__$1);

return statearr_48678;
})();
var statearr_48679_48755 = state_48651__$1;
(statearr_48679_48755[(2)] = null);

(statearr_48679_48755[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (40))){
var inst_48619 = (state_48651[(23)]);
var inst_48623 = done(null);
var inst_48624 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48619);
var state_48651__$1 = (function (){var statearr_48680 = state_48651;
(statearr_48680[(24)] = inst_48623);

return statearr_48680;
})();
var statearr_48681_48756 = state_48651__$1;
(statearr_48681_48756[(2)] = inst_48624);

(statearr_48681_48756[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (33))){
var inst_48610 = (state_48651[(25)]);
var inst_48612 = cljs.core.chunked_seq_QMARK_(inst_48610);
var state_48651__$1 = state_48651;
if(inst_48612){
var statearr_48682_48757 = state_48651__$1;
(statearr_48682_48757[(1)] = (36));

} else {
var statearr_48683_48758 = state_48651__$1;
(statearr_48683_48758[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (13))){
var inst_48540 = (state_48651[(26)]);
var inst_48543 = cljs.core.async.close_BANG_(inst_48540);
var state_48651__$1 = state_48651;
var statearr_48684_48759 = state_48651__$1;
(statearr_48684_48759[(2)] = inst_48543);

(statearr_48684_48759[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (22))){
var inst_48563 = (state_48651[(8)]);
var inst_48566 = cljs.core.async.close_BANG_(inst_48563);
var state_48651__$1 = state_48651;
var statearr_48685_48760 = state_48651__$1;
(statearr_48685_48760[(2)] = inst_48566);

(statearr_48685_48760[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (36))){
var inst_48610 = (state_48651[(25)]);
var inst_48614 = cljs.core.chunk_first(inst_48610);
var inst_48615 = cljs.core.chunk_rest(inst_48610);
var inst_48616 = cljs.core.count(inst_48614);
var inst_48591 = inst_48615;
var inst_48592 = inst_48614;
var inst_48593 = inst_48616;
var inst_48594 = (0);
var state_48651__$1 = (function (){var statearr_48686 = state_48651;
(statearr_48686[(20)] = inst_48591);

(statearr_48686[(11)] = inst_48594);

(statearr_48686[(12)] = inst_48592);

(statearr_48686[(21)] = inst_48593);

return statearr_48686;
})();
var statearr_48687_48761 = state_48651__$1;
(statearr_48687_48761[(2)] = null);

(statearr_48687_48761[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (41))){
var inst_48610 = (state_48651[(25)]);
var inst_48626 = (state_48651[(2)]);
var inst_48627 = cljs.core.next(inst_48610);
var inst_48591 = inst_48627;
var inst_48592 = null;
var inst_48593 = (0);
var inst_48594 = (0);
var state_48651__$1 = (function (){var statearr_48688 = state_48651;
(statearr_48688[(27)] = inst_48626);

(statearr_48688[(20)] = inst_48591);

(statearr_48688[(11)] = inst_48594);

(statearr_48688[(12)] = inst_48592);

(statearr_48688[(21)] = inst_48593);

return statearr_48688;
})();
var statearr_48689_48762 = state_48651__$1;
(statearr_48689_48762[(2)] = null);

(statearr_48689_48762[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (43))){
var state_48651__$1 = state_48651;
var statearr_48690_48763 = state_48651__$1;
(statearr_48690_48763[(2)] = null);

(statearr_48690_48763[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (29))){
var inst_48635 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48691_48764 = state_48651__$1;
(statearr_48691_48764[(2)] = inst_48635);

(statearr_48691_48764[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (44))){
var inst_48644 = (state_48651[(2)]);
var state_48651__$1 = (function (){var statearr_48692 = state_48651;
(statearr_48692[(28)] = inst_48644);

return statearr_48692;
})();
var statearr_48693_48765 = state_48651__$1;
(statearr_48693_48765[(2)] = null);

(statearr_48693_48765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (6))){
var inst_48583 = (state_48651[(29)]);
var inst_48582 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_48583__$1 = cljs.core.keys(inst_48582);
var inst_48584 = cljs.core.count(inst_48583__$1);
var inst_48585 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_48584) : cljs.core.reset_BANG_.call(null,dctr,inst_48584));
var inst_48590 = cljs.core.seq(inst_48583__$1);
var inst_48591 = inst_48590;
var inst_48592 = null;
var inst_48593 = (0);
var inst_48594 = (0);
var state_48651__$1 = (function (){var statearr_48694 = state_48651;
(statearr_48694[(29)] = inst_48583__$1);

(statearr_48694[(20)] = inst_48591);

(statearr_48694[(11)] = inst_48594);

(statearr_48694[(12)] = inst_48592);

(statearr_48694[(21)] = inst_48593);

(statearr_48694[(30)] = inst_48585);

return statearr_48694;
})();
var statearr_48695_48766 = state_48651__$1;
(statearr_48695_48766[(2)] = null);

(statearr_48695_48766[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (28))){
var inst_48610 = (state_48651[(25)]);
var inst_48591 = (state_48651[(20)]);
var inst_48610__$1 = cljs.core.seq(inst_48591);
var state_48651__$1 = (function (){var statearr_48696 = state_48651;
(statearr_48696[(25)] = inst_48610__$1);

return statearr_48696;
})();
if(inst_48610__$1){
var statearr_48697_48767 = state_48651__$1;
(statearr_48697_48767[(1)] = (33));

} else {
var statearr_48698_48768 = state_48651__$1;
(statearr_48698_48768[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (25))){
var inst_48594 = (state_48651[(11)]);
var inst_48593 = (state_48651[(21)]);
var inst_48596 = (inst_48594 < inst_48593);
var inst_48597 = inst_48596;
var state_48651__$1 = state_48651;
if(cljs.core.truth_(inst_48597)){
var statearr_48699_48769 = state_48651__$1;
(statearr_48699_48769[(1)] = (27));

} else {
var statearr_48700_48770 = state_48651__$1;
(statearr_48700_48770[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (34))){
var state_48651__$1 = state_48651;
var statearr_48701_48771 = state_48651__$1;
(statearr_48701_48771[(2)] = null);

(statearr_48701_48771[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (17))){
var state_48651__$1 = state_48651;
var statearr_48702_48772 = state_48651__$1;
(statearr_48702_48772[(2)] = null);

(statearr_48702_48772[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (3))){
var inst_48649 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48651__$1,inst_48649);
} else {
if((state_val_48652 === (12))){
var inst_48578 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48703_48773 = state_48651__$1;
(statearr_48703_48773[(2)] = inst_48578);

(statearr_48703_48773[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (2))){
var state_48651__$1 = state_48651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48651__$1,(4),ch);
} else {
if((state_val_48652 === (23))){
var state_48651__$1 = state_48651;
var statearr_48704_48774 = state_48651__$1;
(statearr_48704_48774[(2)] = null);

(statearr_48704_48774[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (35))){
var inst_48633 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48705_48775 = state_48651__$1;
(statearr_48705_48775[(2)] = inst_48633);

(statearr_48705_48775[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (19))){
var inst_48550 = (state_48651[(7)]);
var inst_48554 = cljs.core.chunk_first(inst_48550);
var inst_48555 = cljs.core.chunk_rest(inst_48550);
var inst_48556 = cljs.core.count(inst_48554);
var inst_48528 = inst_48555;
var inst_48529 = inst_48554;
var inst_48530 = inst_48556;
var inst_48531 = (0);
var state_48651__$1 = (function (){var statearr_48706 = state_48651;
(statearr_48706[(14)] = inst_48528);

(statearr_48706[(15)] = inst_48530);

(statearr_48706[(16)] = inst_48529);

(statearr_48706[(17)] = inst_48531);

return statearr_48706;
})();
var statearr_48707_48776 = state_48651__$1;
(statearr_48707_48776[(2)] = null);

(statearr_48707_48776[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (11))){
var inst_48528 = (state_48651[(14)]);
var inst_48550 = (state_48651[(7)]);
var inst_48550__$1 = cljs.core.seq(inst_48528);
var state_48651__$1 = (function (){var statearr_48708 = state_48651;
(statearr_48708[(7)] = inst_48550__$1);

return statearr_48708;
})();
if(inst_48550__$1){
var statearr_48709_48777 = state_48651__$1;
(statearr_48709_48777[(1)] = (16));

} else {
var statearr_48710_48778 = state_48651__$1;
(statearr_48710_48778[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (9))){
var inst_48580 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48711_48779 = state_48651__$1;
(statearr_48711_48779[(2)] = inst_48580);

(statearr_48711_48779[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (5))){
var inst_48526 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_48527 = cljs.core.seq(inst_48526);
var inst_48528 = inst_48527;
var inst_48529 = null;
var inst_48530 = (0);
var inst_48531 = (0);
var state_48651__$1 = (function (){var statearr_48712 = state_48651;
(statearr_48712[(14)] = inst_48528);

(statearr_48712[(15)] = inst_48530);

(statearr_48712[(16)] = inst_48529);

(statearr_48712[(17)] = inst_48531);

return statearr_48712;
})();
var statearr_48713_48780 = state_48651__$1;
(statearr_48713_48780[(2)] = null);

(statearr_48713_48780[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (14))){
var state_48651__$1 = state_48651;
var statearr_48714_48781 = state_48651__$1;
(statearr_48714_48781[(2)] = null);

(statearr_48714_48781[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (45))){
var inst_48641 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48715_48782 = state_48651__$1;
(statearr_48715_48782[(2)] = inst_48641);

(statearr_48715_48782[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (26))){
var inst_48583 = (state_48651[(29)]);
var inst_48637 = (state_48651[(2)]);
var inst_48638 = cljs.core.seq(inst_48583);
var state_48651__$1 = (function (){var statearr_48716 = state_48651;
(statearr_48716[(31)] = inst_48637);

return statearr_48716;
})();
if(inst_48638){
var statearr_48717_48783 = state_48651__$1;
(statearr_48717_48783[(1)] = (42));

} else {
var statearr_48718_48784 = state_48651__$1;
(statearr_48718_48784[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (16))){
var inst_48550 = (state_48651[(7)]);
var inst_48552 = cljs.core.chunked_seq_QMARK_(inst_48550);
var state_48651__$1 = state_48651;
if(inst_48552){
var statearr_48719_48785 = state_48651__$1;
(statearr_48719_48785[(1)] = (19));

} else {
var statearr_48720_48786 = state_48651__$1;
(statearr_48720_48786[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (38))){
var inst_48630 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48721_48787 = state_48651__$1;
(statearr_48721_48787[(2)] = inst_48630);

(statearr_48721_48787[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (30))){
var state_48651__$1 = state_48651;
var statearr_48722_48788 = state_48651__$1;
(statearr_48722_48788[(2)] = null);

(statearr_48722_48788[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (10))){
var inst_48529 = (state_48651[(16)]);
var inst_48531 = (state_48651[(17)]);
var inst_48539 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48529,inst_48531);
var inst_48540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48539,(0),null);
var inst_48541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48539,(1),null);
var state_48651__$1 = (function (){var statearr_48723 = state_48651;
(statearr_48723[(26)] = inst_48540);

return statearr_48723;
})();
if(cljs.core.truth_(inst_48541)){
var statearr_48724_48789 = state_48651__$1;
(statearr_48724_48789[(1)] = (13));

} else {
var statearr_48725_48790 = state_48651__$1;
(statearr_48725_48790[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (18))){
var inst_48576 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48726_48791 = state_48651__$1;
(statearr_48726_48791[(2)] = inst_48576);

(statearr_48726_48791[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (42))){
var state_48651__$1 = state_48651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48651__$1,(45),dchan);
} else {
if((state_val_48652 === (37))){
var inst_48519 = (state_48651[(9)]);
var inst_48610 = (state_48651[(25)]);
var inst_48619 = (state_48651[(23)]);
var inst_48619__$1 = cljs.core.first(inst_48610);
var inst_48620 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48619__$1,inst_48519,done);
var state_48651__$1 = (function (){var statearr_48727 = state_48651;
(statearr_48727[(23)] = inst_48619__$1);

return statearr_48727;
})();
if(cljs.core.truth_(inst_48620)){
var statearr_48728_48792 = state_48651__$1;
(statearr_48728_48792[(1)] = (39));

} else {
var statearr_48729_48793 = state_48651__$1;
(statearr_48729_48793[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48652 === (8))){
var inst_48530 = (state_48651[(15)]);
var inst_48531 = (state_48651[(17)]);
var inst_48533 = (inst_48531 < inst_48530);
var inst_48534 = inst_48533;
var state_48651__$1 = state_48651;
if(cljs.core.truth_(inst_48534)){
var statearr_48730_48794 = state_48651__$1;
(statearr_48730_48794[(1)] = (10));

} else {
var statearr_48731_48795 = state_48651__$1;
(statearr_48731_48795[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___48741,cs,m,dchan,dctr,done))
;
return ((function (switch__37982__auto__,c__38096__auto___48741,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37983__auto__ = null;
var cljs$core$async$mult_$_state_machine__37983__auto____0 = (function (){
var statearr_48735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48735[(0)] = cljs$core$async$mult_$_state_machine__37983__auto__);

(statearr_48735[(1)] = (1));

return statearr_48735;
});
var cljs$core$async$mult_$_state_machine__37983__auto____1 = (function (state_48651){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_48651);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e48736){if((e48736 instanceof Object)){
var ex__37986__auto__ = e48736;
var statearr_48737_48796 = state_48651;
(statearr_48737_48796[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48651);

return cljs.core.cst$kw$recur;
} else {
throw e48736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__48797 = state_48651;
state_48651 = G__48797;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37983__auto__ = function(state_48651){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37983__auto____1.call(this,state_48651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37983__auto____0;
cljs$core$async$mult_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37983__auto____1;
return cljs$core$async$mult_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___48741,cs,m,dchan,dctr,done))
})();
var state__38098__auto__ = (function (){var statearr_48738 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_48738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___48741);

return statearr_48738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___48741,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args48798 = [];
var len__31462__auto___48801 = arguments.length;
var i__31463__auto___48802 = (0);
while(true){
if((i__31463__auto___48802 < len__31462__auto___48801)){
args48798.push((arguments[i__31463__auto___48802]));

var G__48803 = (i__31463__auto___48802 + (1));
i__31463__auto___48802 = G__48803;
continue;
} else {
}
break;
}

var G__48800 = args48798.length;
switch (G__48800) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48798.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__31051__auto__.call(null,m,ch));
} else {
var m__31051__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__31051__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__31051__auto__.call(null,m,ch));
} else {
var m__31051__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__31051__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__31051__auto__.call(null,m));
} else {
var m__31051__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__31051__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__31051__auto__.call(null,m,state_map));
} else {
var m__31051__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__31051__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31050__auto__ = (((m == null))?null:m);
var m__31051__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__31051__auto__.call(null,m,mode));
} else {
var m__31051__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__31051__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31469__auto__ = [];
var len__31462__auto___48815 = arguments.length;
var i__31463__auto___48816 = (0);
while(true){
if((i__31463__auto___48816 < len__31462__auto___48815)){
args__31469__auto__.push((arguments[i__31463__auto___48816]));

var G__48817 = (i__31463__auto___48816 + (1));
i__31463__auto___48816 = G__48817;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((3) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31470__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48809){
var map__48810 = p__48809;
var map__48810__$1 = ((((!((map__48810 == null)))?((((map__48810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48810):map__48810);
var opts = map__48810__$1;
var statearr_48812_48818 = state;
(statearr_48812_48818[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__48810,map__48810__$1,opts){
return (function (val){
var statearr_48813_48819 = state;
(statearr_48813_48819[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__48810,map__48810__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48814_48820 = state;
(statearr_48814_48820[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48805){
var G__48806 = cljs.core.first(seq48805);
var seq48805__$1 = cljs.core.next(seq48805);
var G__48807 = cljs.core.first(seq48805__$1);
var seq48805__$2 = cljs.core.next(seq48805__$1);
var G__48808 = cljs.core.first(seq48805__$2);
var seq48805__$3 = cljs.core.next(seq48805__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48806,G__48807,G__48808,seq48805__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__48989 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48989) : cljs.core.atom.call(null,G__48989));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48990 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48991){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48991 = meta48991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48992,meta48991__$1){
var self__ = this;
var _48992__$1 = this;
return (new cljs.core.async.t_cljs$core$async48990(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48991__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48992){
var self__ = this;
var _48992__$1 = this;
return self__.meta48991;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__48993_49157 = self__.cs;
var G__48994_49158 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48993_49157,G__48994_49158) : cljs.core.reset_BANG_.call(null,G__48993_49157,G__48994_49158));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta48991], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48990";

cljs.core.async.t_cljs$core$async48990.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async48990");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48990 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48990(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48991){
return (new cljs.core.async.t_cljs$core$async48990(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48991));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48990(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38096__auto___49159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___49159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___49159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49094){
var state_val_49095 = (state_49094[(1)]);
if((state_val_49095 === (7))){
var inst_49010 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
var statearr_49096_49160 = state_49094__$1;
(statearr_49096_49160[(2)] = inst_49010);

(statearr_49096_49160[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (20))){
var inst_49022 = (state_49094[(7)]);
var state_49094__$1 = state_49094;
var statearr_49097_49161 = state_49094__$1;
(statearr_49097_49161[(2)] = inst_49022);

(statearr_49097_49161[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (27))){
var state_49094__$1 = state_49094;
var statearr_49098_49162 = state_49094__$1;
(statearr_49098_49162[(2)] = null);

(statearr_49098_49162[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (1))){
var inst_48998 = (state_49094[(8)]);
var inst_48998__$1 = calc_state();
var inst_49000 = (inst_48998__$1 == null);
var inst_49001 = cljs.core.not(inst_49000);
var state_49094__$1 = (function (){var statearr_49099 = state_49094;
(statearr_49099[(8)] = inst_48998__$1);

return statearr_49099;
})();
if(inst_49001){
var statearr_49100_49163 = state_49094__$1;
(statearr_49100_49163[(1)] = (2));

} else {
var statearr_49101_49164 = state_49094__$1;
(statearr_49101_49164[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (24))){
var inst_49054 = (state_49094[(9)]);
var inst_49068 = (state_49094[(10)]);
var inst_49045 = (state_49094[(11)]);
var inst_49068__$1 = (inst_49045.cljs$core$IFn$_invoke$arity$1 ? inst_49045.cljs$core$IFn$_invoke$arity$1(inst_49054) : inst_49045.call(null,inst_49054));
var state_49094__$1 = (function (){var statearr_49102 = state_49094;
(statearr_49102[(10)] = inst_49068__$1);

return statearr_49102;
})();
if(cljs.core.truth_(inst_49068__$1)){
var statearr_49103_49165 = state_49094__$1;
(statearr_49103_49165[(1)] = (29));

} else {
var statearr_49104_49166 = state_49094__$1;
(statearr_49104_49166[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (4))){
var inst_49013 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
if(cljs.core.truth_(inst_49013)){
var statearr_49105_49167 = state_49094__$1;
(statearr_49105_49167[(1)] = (8));

} else {
var statearr_49106_49168 = state_49094__$1;
(statearr_49106_49168[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (15))){
var inst_49039 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
if(cljs.core.truth_(inst_49039)){
var statearr_49107_49169 = state_49094__$1;
(statearr_49107_49169[(1)] = (19));

} else {
var statearr_49108_49170 = state_49094__$1;
(statearr_49108_49170[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (21))){
var inst_49044 = (state_49094[(12)]);
var inst_49044__$1 = (state_49094[(2)]);
var inst_49045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49044__$1,cljs.core.cst$kw$solos);
var inst_49046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49044__$1,cljs.core.cst$kw$mutes);
var inst_49047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49044__$1,cljs.core.cst$kw$reads);
var state_49094__$1 = (function (){var statearr_49109 = state_49094;
(statearr_49109[(13)] = inst_49046);

(statearr_49109[(12)] = inst_49044__$1);

(statearr_49109[(11)] = inst_49045);

return statearr_49109;
})();
return cljs.core.async.ioc_alts_BANG_(state_49094__$1,(22),inst_49047);
} else {
if((state_val_49095 === (31))){
var inst_49076 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
if(cljs.core.truth_(inst_49076)){
var statearr_49110_49171 = state_49094__$1;
(statearr_49110_49171[(1)] = (32));

} else {
var statearr_49111_49172 = state_49094__$1;
(statearr_49111_49172[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (32))){
var inst_49053 = (state_49094[(14)]);
var state_49094__$1 = state_49094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49094__$1,(35),out,inst_49053);
} else {
if((state_val_49095 === (33))){
var inst_49044 = (state_49094[(12)]);
var inst_49022 = inst_49044;
var state_49094__$1 = (function (){var statearr_49112 = state_49094;
(statearr_49112[(7)] = inst_49022);

return statearr_49112;
})();
var statearr_49113_49173 = state_49094__$1;
(statearr_49113_49173[(2)] = null);

(statearr_49113_49173[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (13))){
var inst_49022 = (state_49094[(7)]);
var inst_49029 = inst_49022.cljs$lang$protocol_mask$partition0$;
var inst_49030 = (inst_49029 & (64));
var inst_49031 = inst_49022.cljs$core$ISeq$;
var inst_49032 = (inst_49030) || (inst_49031);
var state_49094__$1 = state_49094;
if(cljs.core.truth_(inst_49032)){
var statearr_49114_49174 = state_49094__$1;
(statearr_49114_49174[(1)] = (16));

} else {
var statearr_49115_49175 = state_49094__$1;
(statearr_49115_49175[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (22))){
var inst_49054 = (state_49094[(9)]);
var inst_49053 = (state_49094[(14)]);
var inst_49052 = (state_49094[(2)]);
var inst_49053__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49052,(0),null);
var inst_49054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49052,(1),null);
var inst_49055 = (inst_49053__$1 == null);
var inst_49056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49054__$1,change);
var inst_49057 = (inst_49055) || (inst_49056);
var state_49094__$1 = (function (){var statearr_49116 = state_49094;
(statearr_49116[(9)] = inst_49054__$1);

(statearr_49116[(14)] = inst_49053__$1);

return statearr_49116;
})();
if(cljs.core.truth_(inst_49057)){
var statearr_49117_49176 = state_49094__$1;
(statearr_49117_49176[(1)] = (23));

} else {
var statearr_49118_49177 = state_49094__$1;
(statearr_49118_49177[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (36))){
var inst_49044 = (state_49094[(12)]);
var inst_49022 = inst_49044;
var state_49094__$1 = (function (){var statearr_49119 = state_49094;
(statearr_49119[(7)] = inst_49022);

return statearr_49119;
})();
var statearr_49120_49178 = state_49094__$1;
(statearr_49120_49178[(2)] = null);

(statearr_49120_49178[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (29))){
var inst_49068 = (state_49094[(10)]);
var state_49094__$1 = state_49094;
var statearr_49121_49179 = state_49094__$1;
(statearr_49121_49179[(2)] = inst_49068);

(statearr_49121_49179[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (6))){
var state_49094__$1 = state_49094;
var statearr_49122_49180 = state_49094__$1;
(statearr_49122_49180[(2)] = false);

(statearr_49122_49180[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (28))){
var inst_49064 = (state_49094[(2)]);
var inst_49065 = calc_state();
var inst_49022 = inst_49065;
var state_49094__$1 = (function (){var statearr_49123 = state_49094;
(statearr_49123[(15)] = inst_49064);

(statearr_49123[(7)] = inst_49022);

return statearr_49123;
})();
var statearr_49124_49181 = state_49094__$1;
(statearr_49124_49181[(2)] = null);

(statearr_49124_49181[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (25))){
var inst_49090 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
var statearr_49125_49182 = state_49094__$1;
(statearr_49125_49182[(2)] = inst_49090);

(statearr_49125_49182[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (34))){
var inst_49088 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
var statearr_49126_49183 = state_49094__$1;
(statearr_49126_49183[(2)] = inst_49088);

(statearr_49126_49183[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (17))){
var state_49094__$1 = state_49094;
var statearr_49127_49184 = state_49094__$1;
(statearr_49127_49184[(2)] = false);

(statearr_49127_49184[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (3))){
var state_49094__$1 = state_49094;
var statearr_49128_49185 = state_49094__$1;
(statearr_49128_49185[(2)] = false);

(statearr_49128_49185[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (12))){
var inst_49092 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49094__$1,inst_49092);
} else {
if((state_val_49095 === (2))){
var inst_48998 = (state_49094[(8)]);
var inst_49003 = inst_48998.cljs$lang$protocol_mask$partition0$;
var inst_49004 = (inst_49003 & (64));
var inst_49005 = inst_48998.cljs$core$ISeq$;
var inst_49006 = (inst_49004) || (inst_49005);
var state_49094__$1 = state_49094;
if(cljs.core.truth_(inst_49006)){
var statearr_49129_49186 = state_49094__$1;
(statearr_49129_49186[(1)] = (5));

} else {
var statearr_49130_49187 = state_49094__$1;
(statearr_49130_49187[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (23))){
var inst_49053 = (state_49094[(14)]);
var inst_49059 = (inst_49053 == null);
var state_49094__$1 = state_49094;
if(cljs.core.truth_(inst_49059)){
var statearr_49131_49188 = state_49094__$1;
(statearr_49131_49188[(1)] = (26));

} else {
var statearr_49132_49189 = state_49094__$1;
(statearr_49132_49189[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (35))){
var inst_49079 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
if(cljs.core.truth_(inst_49079)){
var statearr_49133_49190 = state_49094__$1;
(statearr_49133_49190[(1)] = (36));

} else {
var statearr_49134_49191 = state_49094__$1;
(statearr_49134_49191[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (19))){
var inst_49022 = (state_49094[(7)]);
var inst_49041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49022);
var state_49094__$1 = state_49094;
var statearr_49135_49192 = state_49094__$1;
(statearr_49135_49192[(2)] = inst_49041);

(statearr_49135_49192[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (11))){
var inst_49022 = (state_49094[(7)]);
var inst_49026 = (inst_49022 == null);
var inst_49027 = cljs.core.not(inst_49026);
var state_49094__$1 = state_49094;
if(inst_49027){
var statearr_49136_49193 = state_49094__$1;
(statearr_49136_49193[(1)] = (13));

} else {
var statearr_49137_49194 = state_49094__$1;
(statearr_49137_49194[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (9))){
var inst_48998 = (state_49094[(8)]);
var state_49094__$1 = state_49094;
var statearr_49138_49195 = state_49094__$1;
(statearr_49138_49195[(2)] = inst_48998);

(statearr_49138_49195[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (5))){
var state_49094__$1 = state_49094;
var statearr_49139_49196 = state_49094__$1;
(statearr_49139_49196[(2)] = true);

(statearr_49139_49196[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (14))){
var state_49094__$1 = state_49094;
var statearr_49140_49197 = state_49094__$1;
(statearr_49140_49197[(2)] = false);

(statearr_49140_49197[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (26))){
var inst_49054 = (state_49094[(9)]);
var inst_49061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49054);
var state_49094__$1 = state_49094;
var statearr_49141_49198 = state_49094__$1;
(statearr_49141_49198[(2)] = inst_49061);

(statearr_49141_49198[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (16))){
var state_49094__$1 = state_49094;
var statearr_49142_49199 = state_49094__$1;
(statearr_49142_49199[(2)] = true);

(statearr_49142_49199[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (38))){
var inst_49084 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
var statearr_49143_49200 = state_49094__$1;
(statearr_49143_49200[(2)] = inst_49084);

(statearr_49143_49200[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (30))){
var inst_49054 = (state_49094[(9)]);
var inst_49046 = (state_49094[(13)]);
var inst_49045 = (state_49094[(11)]);
var inst_49071 = cljs.core.empty_QMARK_(inst_49045);
var inst_49072 = (inst_49046.cljs$core$IFn$_invoke$arity$1 ? inst_49046.cljs$core$IFn$_invoke$arity$1(inst_49054) : inst_49046.call(null,inst_49054));
var inst_49073 = cljs.core.not(inst_49072);
var inst_49074 = (inst_49071) && (inst_49073);
var state_49094__$1 = state_49094;
var statearr_49144_49201 = state_49094__$1;
(statearr_49144_49201[(2)] = inst_49074);

(statearr_49144_49201[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (10))){
var inst_48998 = (state_49094[(8)]);
var inst_49018 = (state_49094[(2)]);
var inst_49019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49018,cljs.core.cst$kw$solos);
var inst_49020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49018,cljs.core.cst$kw$mutes);
var inst_49021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49018,cljs.core.cst$kw$reads);
var inst_49022 = inst_48998;
var state_49094__$1 = (function (){var statearr_49145 = state_49094;
(statearr_49145[(16)] = inst_49019);

(statearr_49145[(17)] = inst_49021);

(statearr_49145[(7)] = inst_49022);

(statearr_49145[(18)] = inst_49020);

return statearr_49145;
})();
var statearr_49146_49202 = state_49094__$1;
(statearr_49146_49202[(2)] = null);

(statearr_49146_49202[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (18))){
var inst_49036 = (state_49094[(2)]);
var state_49094__$1 = state_49094;
var statearr_49147_49203 = state_49094__$1;
(statearr_49147_49203[(2)] = inst_49036);

(statearr_49147_49203[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (37))){
var state_49094__$1 = state_49094;
var statearr_49148_49204 = state_49094__$1;
(statearr_49148_49204[(2)] = null);

(statearr_49148_49204[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49095 === (8))){
var inst_48998 = (state_49094[(8)]);
var inst_49015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48998);
var state_49094__$1 = state_49094;
var statearr_49149_49205 = state_49094__$1;
(statearr_49149_49205[(2)] = inst_49015);

(statearr_49149_49205[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___49159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37982__auto__,c__38096__auto___49159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37983__auto__ = null;
var cljs$core$async$mix_$_state_machine__37983__auto____0 = (function (){
var statearr_49153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49153[(0)] = cljs$core$async$mix_$_state_machine__37983__auto__);

(statearr_49153[(1)] = (1));

return statearr_49153;
});
var cljs$core$async$mix_$_state_machine__37983__auto____1 = (function (state_49094){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49094);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e49154){if((e49154 instanceof Object)){
var ex__37986__auto__ = e49154;
var statearr_49155_49206 = state_49094;
(statearr_49155_49206[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49094);

return cljs.core.cst$kw$recur;
} else {
throw e49154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__49207 = state_49094;
state_49094 = G__49207;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37983__auto__ = function(state_49094){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37983__auto____1.call(this,state_49094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37983__auto____0;
cljs$core$async$mix_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37983__auto____1;
return cljs$core$async$mix_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___49159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38098__auto__ = (function (){var statearr_49156 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_49156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___49159);

return statearr_49156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___49159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31050__auto__ = (((p == null))?null:p);
var m__31051__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$4 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__31051__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__31051__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__31051__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31050__auto__ = (((p == null))?null:p);
var m__31051__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$3 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__31051__auto__.call(null,p,v,ch));
} else {
var m__31051__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__31051__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args49208 = [];
var len__31462__auto___49211 = arguments.length;
var i__31463__auto___49212 = (0);
while(true){
if((i__31463__auto___49212 < len__31462__auto___49211)){
args49208.push((arguments[i__31463__auto___49212]));

var G__49213 = (i__31463__auto___49212 + (1));
i__31463__auto___49212 = G__49213;
continue;
} else {
}
break;
}

var G__49210 = args49208.length;
switch (G__49210) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49208.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31050__auto__ = (((p == null))?null:p);
var m__31051__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__31051__auto__.call(null,p));
} else {
var m__31051__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__31051__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31050__auto__ = (((p == null))?null:p);
var m__31051__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31050__auto__)]);
if(!((m__31051__auto__ == null))){
return (m__31051__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__31051__auto__.call(null,p,v));
} else {
var m__31051__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31051__auto____$1 == null))){
return (m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31051__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__31051__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args49216 = [];
var len__31462__auto___49344 = arguments.length;
var i__31463__auto___49345 = (0);
while(true){
if((i__31463__auto___49345 < len__31462__auto___49344)){
args49216.push((arguments[i__31463__auto___49345]));

var G__49346 = (i__31463__auto___49345 + (1));
i__31463__auto___49345 = G__49346;
continue;
} else {
}
break;
}

var G__49218 = args49216.length;
switch (G__49218) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49216.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__49219 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49219) : cljs.core.atom.call(null,G__49219));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__30387__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__30387__auto__,mults){
return (function (p1__49215_SHARP_){
if(cljs.core.truth_((p1__49215_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49215_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49215_SHARP_.call(null,topic)))){
return p1__49215_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49215_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__30387__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49220 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49221){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49221 = meta49221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49222,meta49221__$1){
var self__ = this;
var _49222__$1 = this;
return (new cljs.core.async.t_cljs$core$async49220(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49221__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49222){
var self__ = this;
var _49222__$1 = this;
return self__.meta49221;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__49223 = self__.mults;
var G__49224 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49223,G__49224) : cljs.core.reset_BANG_.call(null,G__49223,G__49224));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta49221], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49220";

cljs.core.async.t_cljs$core$async49220.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async49220");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49220 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49220(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49221){
return (new cljs.core.async.t_cljs$core$async49220(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49221));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49220(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38096__auto___49348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___49348,mults,ensure_mult,p){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___49348,mults,ensure_mult,p){
return (function (state_49296){
var state_val_49297 = (state_49296[(1)]);
if((state_val_49297 === (7))){
var inst_49292 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
var statearr_49298_49349 = state_49296__$1;
(statearr_49298_49349[(2)] = inst_49292);

(statearr_49298_49349[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (20))){
var state_49296__$1 = state_49296;
var statearr_49299_49350 = state_49296__$1;
(statearr_49299_49350[(2)] = null);

(statearr_49299_49350[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (1))){
var state_49296__$1 = state_49296;
var statearr_49300_49351 = state_49296__$1;
(statearr_49300_49351[(2)] = null);

(statearr_49300_49351[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (24))){
var inst_49275 = (state_49296[(7)]);
var inst_49284 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49275);
var state_49296__$1 = state_49296;
var statearr_49301_49352 = state_49296__$1;
(statearr_49301_49352[(2)] = inst_49284);

(statearr_49301_49352[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (4))){
var inst_49227 = (state_49296[(8)]);
var inst_49227__$1 = (state_49296[(2)]);
var inst_49228 = (inst_49227__$1 == null);
var state_49296__$1 = (function (){var statearr_49302 = state_49296;
(statearr_49302[(8)] = inst_49227__$1);

return statearr_49302;
})();
if(cljs.core.truth_(inst_49228)){
var statearr_49303_49353 = state_49296__$1;
(statearr_49303_49353[(1)] = (5));

} else {
var statearr_49304_49354 = state_49296__$1;
(statearr_49304_49354[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (15))){
var inst_49269 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
var statearr_49305_49355 = state_49296__$1;
(statearr_49305_49355[(2)] = inst_49269);

(statearr_49305_49355[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (21))){
var inst_49289 = (state_49296[(2)]);
var state_49296__$1 = (function (){var statearr_49306 = state_49296;
(statearr_49306[(9)] = inst_49289);

return statearr_49306;
})();
var statearr_49307_49356 = state_49296__$1;
(statearr_49307_49356[(2)] = null);

(statearr_49307_49356[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (13))){
var inst_49251 = (state_49296[(10)]);
var inst_49253 = cljs.core.chunked_seq_QMARK_(inst_49251);
var state_49296__$1 = state_49296;
if(inst_49253){
var statearr_49308_49357 = state_49296__$1;
(statearr_49308_49357[(1)] = (16));

} else {
var statearr_49309_49358 = state_49296__$1;
(statearr_49309_49358[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (22))){
var inst_49281 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
if(cljs.core.truth_(inst_49281)){
var statearr_49310_49359 = state_49296__$1;
(statearr_49310_49359[(1)] = (23));

} else {
var statearr_49311_49360 = state_49296__$1;
(statearr_49311_49360[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (6))){
var inst_49275 = (state_49296[(7)]);
var inst_49227 = (state_49296[(8)]);
var inst_49277 = (state_49296[(11)]);
var inst_49275__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49227) : topic_fn.call(null,inst_49227));
var inst_49276 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_49277__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49276,inst_49275__$1);
var state_49296__$1 = (function (){var statearr_49312 = state_49296;
(statearr_49312[(7)] = inst_49275__$1);

(statearr_49312[(11)] = inst_49277__$1);

return statearr_49312;
})();
if(cljs.core.truth_(inst_49277__$1)){
var statearr_49313_49361 = state_49296__$1;
(statearr_49313_49361[(1)] = (19));

} else {
var statearr_49314_49362 = state_49296__$1;
(statearr_49314_49362[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (25))){
var inst_49286 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
var statearr_49315_49363 = state_49296__$1;
(statearr_49315_49363[(2)] = inst_49286);

(statearr_49315_49363[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (17))){
var inst_49251 = (state_49296[(10)]);
var inst_49260 = cljs.core.first(inst_49251);
var inst_49261 = cljs.core.async.muxch_STAR_(inst_49260);
var inst_49262 = cljs.core.async.close_BANG_(inst_49261);
var inst_49263 = cljs.core.next(inst_49251);
var inst_49237 = inst_49263;
var inst_49238 = null;
var inst_49239 = (0);
var inst_49240 = (0);
var state_49296__$1 = (function (){var statearr_49316 = state_49296;
(statearr_49316[(12)] = inst_49239);

(statearr_49316[(13)] = inst_49240);

(statearr_49316[(14)] = inst_49237);

(statearr_49316[(15)] = inst_49262);

(statearr_49316[(16)] = inst_49238);

return statearr_49316;
})();
var statearr_49317_49364 = state_49296__$1;
(statearr_49317_49364[(2)] = null);

(statearr_49317_49364[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (3))){
var inst_49294 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49296__$1,inst_49294);
} else {
if((state_val_49297 === (12))){
var inst_49271 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
var statearr_49318_49365 = state_49296__$1;
(statearr_49318_49365[(2)] = inst_49271);

(statearr_49318_49365[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (2))){
var state_49296__$1 = state_49296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49296__$1,(4),ch);
} else {
if((state_val_49297 === (23))){
var state_49296__$1 = state_49296;
var statearr_49319_49366 = state_49296__$1;
(statearr_49319_49366[(2)] = null);

(statearr_49319_49366[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (19))){
var inst_49227 = (state_49296[(8)]);
var inst_49277 = (state_49296[(11)]);
var inst_49279 = cljs.core.async.muxch_STAR_(inst_49277);
var state_49296__$1 = state_49296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49296__$1,(22),inst_49279,inst_49227);
} else {
if((state_val_49297 === (11))){
var inst_49237 = (state_49296[(14)]);
var inst_49251 = (state_49296[(10)]);
var inst_49251__$1 = cljs.core.seq(inst_49237);
var state_49296__$1 = (function (){var statearr_49320 = state_49296;
(statearr_49320[(10)] = inst_49251__$1);

return statearr_49320;
})();
if(inst_49251__$1){
var statearr_49321_49367 = state_49296__$1;
(statearr_49321_49367[(1)] = (13));

} else {
var statearr_49322_49368 = state_49296__$1;
(statearr_49322_49368[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (9))){
var inst_49273 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
var statearr_49323_49369 = state_49296__$1;
(statearr_49323_49369[(2)] = inst_49273);

(statearr_49323_49369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (5))){
var inst_49234 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_49235 = cljs.core.vals(inst_49234);
var inst_49236 = cljs.core.seq(inst_49235);
var inst_49237 = inst_49236;
var inst_49238 = null;
var inst_49239 = (0);
var inst_49240 = (0);
var state_49296__$1 = (function (){var statearr_49324 = state_49296;
(statearr_49324[(12)] = inst_49239);

(statearr_49324[(13)] = inst_49240);

(statearr_49324[(14)] = inst_49237);

(statearr_49324[(16)] = inst_49238);

return statearr_49324;
})();
var statearr_49325_49370 = state_49296__$1;
(statearr_49325_49370[(2)] = null);

(statearr_49325_49370[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (14))){
var state_49296__$1 = state_49296;
var statearr_49329_49371 = state_49296__$1;
(statearr_49329_49371[(2)] = null);

(statearr_49329_49371[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (16))){
var inst_49251 = (state_49296[(10)]);
var inst_49255 = cljs.core.chunk_first(inst_49251);
var inst_49256 = cljs.core.chunk_rest(inst_49251);
var inst_49257 = cljs.core.count(inst_49255);
var inst_49237 = inst_49256;
var inst_49238 = inst_49255;
var inst_49239 = inst_49257;
var inst_49240 = (0);
var state_49296__$1 = (function (){var statearr_49330 = state_49296;
(statearr_49330[(12)] = inst_49239);

(statearr_49330[(13)] = inst_49240);

(statearr_49330[(14)] = inst_49237);

(statearr_49330[(16)] = inst_49238);

return statearr_49330;
})();
var statearr_49331_49372 = state_49296__$1;
(statearr_49331_49372[(2)] = null);

(statearr_49331_49372[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (10))){
var inst_49239 = (state_49296[(12)]);
var inst_49240 = (state_49296[(13)]);
var inst_49237 = (state_49296[(14)]);
var inst_49238 = (state_49296[(16)]);
var inst_49245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49238,inst_49240);
var inst_49246 = cljs.core.async.muxch_STAR_(inst_49245);
var inst_49247 = cljs.core.async.close_BANG_(inst_49246);
var inst_49248 = (inst_49240 + (1));
var tmp49326 = inst_49239;
var tmp49327 = inst_49237;
var tmp49328 = inst_49238;
var inst_49237__$1 = tmp49327;
var inst_49238__$1 = tmp49328;
var inst_49239__$1 = tmp49326;
var inst_49240__$1 = inst_49248;
var state_49296__$1 = (function (){var statearr_49332 = state_49296;
(statearr_49332[(12)] = inst_49239__$1);

(statearr_49332[(13)] = inst_49240__$1);

(statearr_49332[(14)] = inst_49237__$1);

(statearr_49332[(17)] = inst_49247);

(statearr_49332[(16)] = inst_49238__$1);

return statearr_49332;
})();
var statearr_49333_49373 = state_49296__$1;
(statearr_49333_49373[(2)] = null);

(statearr_49333_49373[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (18))){
var inst_49266 = (state_49296[(2)]);
var state_49296__$1 = state_49296;
var statearr_49334_49374 = state_49296__$1;
(statearr_49334_49374[(2)] = inst_49266);

(statearr_49334_49374[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49297 === (8))){
var inst_49239 = (state_49296[(12)]);
var inst_49240 = (state_49296[(13)]);
var inst_49242 = (inst_49240 < inst_49239);
var inst_49243 = inst_49242;
var state_49296__$1 = state_49296;
if(cljs.core.truth_(inst_49243)){
var statearr_49335_49375 = state_49296__$1;
(statearr_49335_49375[(1)] = (10));

} else {
var statearr_49336_49376 = state_49296__$1;
(statearr_49336_49376[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___49348,mults,ensure_mult,p))
;
return ((function (switch__37982__auto__,c__38096__auto___49348,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_49340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49340[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_49340[(1)] = (1));

return statearr_49340;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_49296){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49296);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e49341){if((e49341 instanceof Object)){
var ex__37986__auto__ = e49341;
var statearr_49342_49377 = state_49296;
(statearr_49342_49377[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49296);

return cljs.core.cst$kw$recur;
} else {
throw e49341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__49378 = state_49296;
state_49296 = G__49378;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_49296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_49296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___49348,mults,ensure_mult,p))
})();
var state__38098__auto__ = (function (){var statearr_49343 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_49343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___49348);

return statearr_49343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___49348,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args49379 = [];
var len__31462__auto___49382 = arguments.length;
var i__31463__auto___49383 = (0);
while(true){
if((i__31463__auto___49383 < len__31462__auto___49382)){
args49379.push((arguments[i__31463__auto___49383]));

var G__49384 = (i__31463__auto___49383 + (1));
i__31463__auto___49383 = G__49384;
continue;
} else {
}
break;
}

var G__49381 = args49379.length;
switch (G__49381) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49379.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args49386 = [];
var len__31462__auto___49389 = arguments.length;
var i__31463__auto___49390 = (0);
while(true){
if((i__31463__auto___49390 < len__31462__auto___49389)){
args49386.push((arguments[i__31463__auto___49390]));

var G__49391 = (i__31463__auto___49390 + (1));
i__31463__auto___49390 = G__49391;
continue;
} else {
}
break;
}

var G__49388 = args49386.length;
switch (G__49388) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49386.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args49393 = [];
var len__31462__auto___49464 = arguments.length;
var i__31463__auto___49465 = (0);
while(true){
if((i__31463__auto___49465 < len__31462__auto___49464)){
args49393.push((arguments[i__31463__auto___49465]));

var G__49466 = (i__31463__auto___49465 + (1));
i__31463__auto___49465 = G__49466;
continue;
} else {
}
break;
}

var G__49395 = args49393.length;
switch (G__49395) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49393.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__38096__auto___49468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___49468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___49468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49434){
var state_val_49435 = (state_49434[(1)]);
if((state_val_49435 === (7))){
var state_49434__$1 = state_49434;
var statearr_49436_49469 = state_49434__$1;
(statearr_49436_49469[(2)] = null);

(statearr_49436_49469[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (1))){
var state_49434__$1 = state_49434;
var statearr_49437_49470 = state_49434__$1;
(statearr_49437_49470[(2)] = null);

(statearr_49437_49470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (4))){
var inst_49398 = (state_49434[(7)]);
var inst_49400 = (inst_49398 < cnt);
var state_49434__$1 = state_49434;
if(cljs.core.truth_(inst_49400)){
var statearr_49438_49471 = state_49434__$1;
(statearr_49438_49471[(1)] = (6));

} else {
var statearr_49439_49472 = state_49434__$1;
(statearr_49439_49472[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (15))){
var inst_49430 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
var statearr_49440_49473 = state_49434__$1;
(statearr_49440_49473[(2)] = inst_49430);

(statearr_49440_49473[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (13))){
var inst_49423 = cljs.core.async.close_BANG_(out);
var state_49434__$1 = state_49434;
var statearr_49441_49474 = state_49434__$1;
(statearr_49441_49474[(2)] = inst_49423);

(statearr_49441_49474[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (6))){
var state_49434__$1 = state_49434;
var statearr_49442_49475 = state_49434__$1;
(statearr_49442_49475[(2)] = null);

(statearr_49442_49475[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (3))){
var inst_49432 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49434__$1,inst_49432);
} else {
if((state_val_49435 === (12))){
var inst_49420 = (state_49434[(8)]);
var inst_49420__$1 = (state_49434[(2)]);
var inst_49421 = cljs.core.some(cljs.core.nil_QMARK_,inst_49420__$1);
var state_49434__$1 = (function (){var statearr_49443 = state_49434;
(statearr_49443[(8)] = inst_49420__$1);

return statearr_49443;
})();
if(cljs.core.truth_(inst_49421)){
var statearr_49444_49476 = state_49434__$1;
(statearr_49444_49476[(1)] = (13));

} else {
var statearr_49445_49477 = state_49434__$1;
(statearr_49445_49477[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (2))){
var inst_49397 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_49398 = (0);
var state_49434__$1 = (function (){var statearr_49446 = state_49434;
(statearr_49446[(7)] = inst_49398);

(statearr_49446[(9)] = inst_49397);

return statearr_49446;
})();
var statearr_49447_49478 = state_49434__$1;
(statearr_49447_49478[(2)] = null);

(statearr_49447_49478[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (11))){
var inst_49398 = (state_49434[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49434,(10),Object,null,(9));
var inst_49407 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49398) : chs__$1.call(null,inst_49398));
var inst_49408 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49398) : done.call(null,inst_49398));
var inst_49409 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49407,inst_49408);
var state_49434__$1 = state_49434;
var statearr_49448_49479 = state_49434__$1;
(statearr_49448_49479[(2)] = inst_49409);


cljs.core.async.impl.ioc_helpers.process_exception(state_49434__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (9))){
var inst_49398 = (state_49434[(7)]);
var inst_49411 = (state_49434[(2)]);
var inst_49412 = (inst_49398 + (1));
var inst_49398__$1 = inst_49412;
var state_49434__$1 = (function (){var statearr_49449 = state_49434;
(statearr_49449[(7)] = inst_49398__$1);

(statearr_49449[(10)] = inst_49411);

return statearr_49449;
})();
var statearr_49450_49480 = state_49434__$1;
(statearr_49450_49480[(2)] = null);

(statearr_49450_49480[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (5))){
var inst_49418 = (state_49434[(2)]);
var state_49434__$1 = (function (){var statearr_49451 = state_49434;
(statearr_49451[(11)] = inst_49418);

return statearr_49451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49434__$1,(12),dchan);
} else {
if((state_val_49435 === (14))){
var inst_49420 = (state_49434[(8)]);
var inst_49425 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49420);
var state_49434__$1 = state_49434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49434__$1,(16),out,inst_49425);
} else {
if((state_val_49435 === (16))){
var inst_49427 = (state_49434[(2)]);
var state_49434__$1 = (function (){var statearr_49452 = state_49434;
(statearr_49452[(12)] = inst_49427);

return statearr_49452;
})();
var statearr_49453_49481 = state_49434__$1;
(statearr_49453_49481[(2)] = null);

(statearr_49453_49481[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (10))){
var inst_49402 = (state_49434[(2)]);
var inst_49403 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49434__$1 = (function (){var statearr_49454 = state_49434;
(statearr_49454[(13)] = inst_49402);

return statearr_49454;
})();
var statearr_49455_49482 = state_49434__$1;
(statearr_49455_49482[(2)] = inst_49403);


cljs.core.async.impl.ioc_helpers.process_exception(state_49434__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_49435 === (8))){
var inst_49416 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
var statearr_49456_49483 = state_49434__$1;
(statearr_49456_49483[(2)] = inst_49416);

(statearr_49456_49483[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___49468,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37982__auto__,c__38096__auto___49468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_49460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49460[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_49460[(1)] = (1));

return statearr_49460;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_49434){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49434);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e49461){if((e49461 instanceof Object)){
var ex__37986__auto__ = e49461;
var statearr_49462_49484 = state_49434;
(statearr_49462_49484[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49434);

return cljs.core.cst$kw$recur;
} else {
throw e49461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__49485 = state_49434;
state_49434 = G__49485;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_49434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_49434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___49468,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38098__auto__ = (function (){var statearr_49463 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_49463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___49468);

return statearr_49463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___49468,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args49487 = [];
var len__31462__auto___49545 = arguments.length;
var i__31463__auto___49546 = (0);
while(true){
if((i__31463__auto___49546 < len__31462__auto___49545)){
args49487.push((arguments[i__31463__auto___49546]));

var G__49547 = (i__31463__auto___49546 + (1));
i__31463__auto___49546 = G__49547;
continue;
} else {
}
break;
}

var G__49489 = args49487.length;
switch (G__49489) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49487.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38096__auto___49549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___49549,out){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___49549,out){
return (function (state_49521){
var state_val_49522 = (state_49521[(1)]);
if((state_val_49522 === (7))){
var inst_49501 = (state_49521[(7)]);
var inst_49500 = (state_49521[(8)]);
var inst_49500__$1 = (state_49521[(2)]);
var inst_49501__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49500__$1,(0),null);
var inst_49502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49500__$1,(1),null);
var inst_49503 = (inst_49501__$1 == null);
var state_49521__$1 = (function (){var statearr_49523 = state_49521;
(statearr_49523[(7)] = inst_49501__$1);

(statearr_49523[(9)] = inst_49502);

(statearr_49523[(8)] = inst_49500__$1);

return statearr_49523;
})();
if(cljs.core.truth_(inst_49503)){
var statearr_49524_49550 = state_49521__$1;
(statearr_49524_49550[(1)] = (8));

} else {
var statearr_49525_49551 = state_49521__$1;
(statearr_49525_49551[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49522 === (1))){
var inst_49490 = cljs.core.vec(chs);
var inst_49491 = inst_49490;
var state_49521__$1 = (function (){var statearr_49526 = state_49521;
(statearr_49526[(10)] = inst_49491);

return statearr_49526;
})();
var statearr_49527_49552 = state_49521__$1;
(statearr_49527_49552[(2)] = null);

(statearr_49527_49552[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49522 === (4))){
var inst_49491 = (state_49521[(10)]);
var state_49521__$1 = state_49521;
return cljs.core.async.ioc_alts_BANG_(state_49521__$1,(7),inst_49491);
} else {
if((state_val_49522 === (6))){
var inst_49517 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49528_49553 = state_49521__$1;
(statearr_49528_49553[(2)] = inst_49517);

(statearr_49528_49553[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49522 === (3))){
var inst_49519 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49521__$1,inst_49519);
} else {
if((state_val_49522 === (2))){
var inst_49491 = (state_49521[(10)]);
var inst_49493 = cljs.core.count(inst_49491);
var inst_49494 = (inst_49493 > (0));
var state_49521__$1 = state_49521;
if(cljs.core.truth_(inst_49494)){
var statearr_49530_49554 = state_49521__$1;
(statearr_49530_49554[(1)] = (4));

} else {
var statearr_49531_49555 = state_49521__$1;
(statearr_49531_49555[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49522 === (11))){
var inst_49491 = (state_49521[(10)]);
var inst_49510 = (state_49521[(2)]);
var tmp49529 = inst_49491;
var inst_49491__$1 = tmp49529;
var state_49521__$1 = (function (){var statearr_49532 = state_49521;
(statearr_49532[(11)] = inst_49510);

(statearr_49532[(10)] = inst_49491__$1);

return statearr_49532;
})();
var statearr_49533_49556 = state_49521__$1;
(statearr_49533_49556[(2)] = null);

(statearr_49533_49556[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49522 === (9))){
var inst_49501 = (state_49521[(7)]);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49521__$1,(11),out,inst_49501);
} else {
if((state_val_49522 === (5))){
var inst_49515 = cljs.core.async.close_BANG_(out);
var state_49521__$1 = state_49521;
var statearr_49534_49557 = state_49521__$1;
(statearr_49534_49557[(2)] = inst_49515);

(statearr_49534_49557[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49522 === (10))){
var inst_49513 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49535_49558 = state_49521__$1;
(statearr_49535_49558[(2)] = inst_49513);

(statearr_49535_49558[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49522 === (8))){
var inst_49501 = (state_49521[(7)]);
var inst_49502 = (state_49521[(9)]);
var inst_49491 = (state_49521[(10)]);
var inst_49500 = (state_49521[(8)]);
var inst_49505 = (function (){var cs = inst_49491;
var vec__49496 = inst_49500;
var v = inst_49501;
var c = inst_49502;
return ((function (cs,vec__49496,v,c,inst_49501,inst_49502,inst_49491,inst_49500,state_val_49522,c__38096__auto___49549,out){
return (function (p1__49486_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49486_SHARP_);
});
;})(cs,vec__49496,v,c,inst_49501,inst_49502,inst_49491,inst_49500,state_val_49522,c__38096__auto___49549,out))
})();
var inst_49506 = cljs.core.filterv(inst_49505,inst_49491);
var inst_49491__$1 = inst_49506;
var state_49521__$1 = (function (){var statearr_49536 = state_49521;
(statearr_49536[(10)] = inst_49491__$1);

return statearr_49536;
})();
var statearr_49537_49559 = state_49521__$1;
(statearr_49537_49559[(2)] = null);

(statearr_49537_49559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___49549,out))
;
return ((function (switch__37982__auto__,c__38096__auto___49549,out){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_49541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49541[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_49541[(1)] = (1));

return statearr_49541;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_49521){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49521);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e49542){if((e49542 instanceof Object)){
var ex__37986__auto__ = e49542;
var statearr_49543_49560 = state_49521;
(statearr_49543_49560[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49521);

return cljs.core.cst$kw$recur;
} else {
throw e49542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__49561 = state_49521;
state_49521 = G__49561;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_49521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_49521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___49549,out))
})();
var state__38098__auto__ = (function (){var statearr_49544 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_49544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___49549);

return statearr_49544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___49549,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args49562 = [];
var len__31462__auto___49611 = arguments.length;
var i__31463__auto___49612 = (0);
while(true){
if((i__31463__auto___49612 < len__31462__auto___49611)){
args49562.push((arguments[i__31463__auto___49612]));

var G__49613 = (i__31463__auto___49612 + (1));
i__31463__auto___49612 = G__49613;
continue;
} else {
}
break;
}

var G__49564 = args49562.length;
switch (G__49564) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49562.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38096__auto___49615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___49615,out){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___49615,out){
return (function (state_49588){
var state_val_49589 = (state_49588[(1)]);
if((state_val_49589 === (7))){
var inst_49570 = (state_49588[(7)]);
var inst_49570__$1 = (state_49588[(2)]);
var inst_49571 = (inst_49570__$1 == null);
var inst_49572 = cljs.core.not(inst_49571);
var state_49588__$1 = (function (){var statearr_49590 = state_49588;
(statearr_49590[(7)] = inst_49570__$1);

return statearr_49590;
})();
if(inst_49572){
var statearr_49591_49616 = state_49588__$1;
(statearr_49591_49616[(1)] = (8));

} else {
var statearr_49592_49617 = state_49588__$1;
(statearr_49592_49617[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (1))){
var inst_49565 = (0);
var state_49588__$1 = (function (){var statearr_49593 = state_49588;
(statearr_49593[(8)] = inst_49565);

return statearr_49593;
})();
var statearr_49594_49618 = state_49588__$1;
(statearr_49594_49618[(2)] = null);

(statearr_49594_49618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (4))){
var state_49588__$1 = state_49588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49588__$1,(7),ch);
} else {
if((state_val_49589 === (6))){
var inst_49583 = (state_49588[(2)]);
var state_49588__$1 = state_49588;
var statearr_49595_49619 = state_49588__$1;
(statearr_49595_49619[(2)] = inst_49583);

(statearr_49595_49619[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (3))){
var inst_49585 = (state_49588[(2)]);
var inst_49586 = cljs.core.async.close_BANG_(out);
var state_49588__$1 = (function (){var statearr_49596 = state_49588;
(statearr_49596[(9)] = inst_49585);

return statearr_49596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49588__$1,inst_49586);
} else {
if((state_val_49589 === (2))){
var inst_49565 = (state_49588[(8)]);
var inst_49567 = (inst_49565 < n);
var state_49588__$1 = state_49588;
if(cljs.core.truth_(inst_49567)){
var statearr_49597_49620 = state_49588__$1;
(statearr_49597_49620[(1)] = (4));

} else {
var statearr_49598_49621 = state_49588__$1;
(statearr_49598_49621[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (11))){
var inst_49565 = (state_49588[(8)]);
var inst_49575 = (state_49588[(2)]);
var inst_49576 = (inst_49565 + (1));
var inst_49565__$1 = inst_49576;
var state_49588__$1 = (function (){var statearr_49599 = state_49588;
(statearr_49599[(10)] = inst_49575);

(statearr_49599[(8)] = inst_49565__$1);

return statearr_49599;
})();
var statearr_49600_49622 = state_49588__$1;
(statearr_49600_49622[(2)] = null);

(statearr_49600_49622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (9))){
var state_49588__$1 = state_49588;
var statearr_49601_49623 = state_49588__$1;
(statearr_49601_49623[(2)] = null);

(statearr_49601_49623[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (5))){
var state_49588__$1 = state_49588;
var statearr_49602_49624 = state_49588__$1;
(statearr_49602_49624[(2)] = null);

(statearr_49602_49624[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (10))){
var inst_49580 = (state_49588[(2)]);
var state_49588__$1 = state_49588;
var statearr_49603_49625 = state_49588__$1;
(statearr_49603_49625[(2)] = inst_49580);

(statearr_49603_49625[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49589 === (8))){
var inst_49570 = (state_49588[(7)]);
var state_49588__$1 = state_49588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49588__$1,(11),out,inst_49570);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___49615,out))
;
return ((function (switch__37982__auto__,c__38096__auto___49615,out){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_49607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49607[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_49607[(1)] = (1));

return statearr_49607;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_49588){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49588);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e49608){if((e49608 instanceof Object)){
var ex__37986__auto__ = e49608;
var statearr_49609_49626 = state_49588;
(statearr_49609_49626[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49588);

return cljs.core.cst$kw$recur;
} else {
throw e49608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__49627 = state_49588;
state_49588 = G__49627;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_49588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_49588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___49615,out))
})();
var state__38098__auto__ = (function (){var statearr_49610 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_49610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___49615);

return statearr_49610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___49615,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49637 = (function (map_LT_,f,ch,meta49638){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49638 = meta49638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49639,meta49638__$1){
var self__ = this;
var _49639__$1 = this;
return (new cljs.core.async.t_cljs$core$async49637(self__.map_LT_,self__.f,self__.ch,meta49638__$1));
});

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49639){
var self__ = this;
var _49639__$1 = this;
return self__.meta49638;
});

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49640 = (function (map_LT_,f,ch,meta49638,_,fn1,meta49641){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49638 = meta49638;
this._ = _;
this.fn1 = fn1;
this.meta49641 = meta49641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49642,meta49641__$1){
var self__ = this;
var _49642__$1 = this;
return (new cljs.core.async.t_cljs$core$async49640(self__.map_LT_,self__.f,self__.ch,self__.meta49638,self__._,self__.fn1,meta49641__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49642){
var self__ = this;
var _49642__$1 = this;
return self__.meta49641;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49640.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49640.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49628_SHARP_){
var G__49643 = (((p1__49628_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49628_SHARP_) : self__.f.call(null,p1__49628_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49643) : f1.call(null,G__49643));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49640.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta49638,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async49637], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta49641], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49640";

cljs.core.async.t_cljs$core$async49640.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async49640");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49640 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49640(map_LT___$1,f__$1,ch__$1,meta49638__$1,___$2,fn1__$1,meta49641){
return (new cljs.core.async.t_cljs$core$async49640(map_LT___$1,f__$1,ch__$1,meta49638__$1,___$2,fn1__$1,meta49641));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49640(self__.map_LT_,self__.f,self__.ch,self__.meta49638,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30375__auto__ = ret;
if(cljs.core.truth_(and__30375__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__30375__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49644 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49644) : self__.f.call(null,G__49644));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta49638], null);
});

cljs.core.async.t_cljs$core$async49637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49637";

cljs.core.async.t_cljs$core$async49637.cljs$lang$ctorPrWriter = (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async49637");
});

cljs.core.async.__GT_t_cljs$core$async49637 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49637(map_LT___$1,f__$1,ch__$1,meta49638){
return (new cljs.core.async.t_cljs$core$async49637(map_LT___$1,f__$1,ch__$1,meta49638));
});

}

return (new cljs.core.async.t_cljs$core$async49637(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49648 = (function (map_GT_,f,ch,meta49649){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta49649 = meta49649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49650,meta49649__$1){
var self__ = this;
var _49650__$1 = this;
return (new cljs.core.async.t_cljs$core$async49648(self__.map_GT_,self__.f,self__.ch,meta49649__$1));
});

cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49650){
var self__ = this;
var _49650__$1 = this;
return self__.meta49649;
});

cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async49648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta49649], null);
});

cljs.core.async.t_cljs$core$async49648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49648";

cljs.core.async.t_cljs$core$async49648.cljs$lang$ctorPrWriter = (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async49648");
});

cljs.core.async.__GT_t_cljs$core$async49648 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49648(map_GT___$1,f__$1,ch__$1,meta49649){
return (new cljs.core.async.t_cljs$core$async49648(map_GT___$1,f__$1,ch__$1,meta49649));
});

}

return (new cljs.core.async.t_cljs$core$async49648(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49654 = (function (filter_GT_,p,ch,meta49655){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta49655 = meta49655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49656,meta49655__$1){
var self__ = this;
var _49656__$1 = this;
return (new cljs.core.async.t_cljs$core$async49654(self__.filter_GT_,self__.p,self__.ch,meta49655__$1));
});

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49656){
var self__ = this;
var _49656__$1 = this;
return self__.meta49655;
});

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta49655], null);
});

cljs.core.async.t_cljs$core$async49654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49654";

cljs.core.async.t_cljs$core$async49654.cljs$lang$ctorPrWriter = (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"cljs.core.async/t_cljs$core$async49654");
});

cljs.core.async.__GT_t_cljs$core$async49654 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49654(filter_GT___$1,p__$1,ch__$1,meta49655){
return (new cljs.core.async.t_cljs$core$async49654(filter_GT___$1,p__$1,ch__$1,meta49655));
});

}

return (new cljs.core.async.t_cljs$core$async49654(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args49657 = [];
var len__31462__auto___49701 = arguments.length;
var i__31463__auto___49702 = (0);
while(true){
if((i__31463__auto___49702 < len__31462__auto___49701)){
args49657.push((arguments[i__31463__auto___49702]));

var G__49703 = (i__31463__auto___49702 + (1));
i__31463__auto___49702 = G__49703;
continue;
} else {
}
break;
}

var G__49659 = args49657.length;
switch (G__49659) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49657.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38096__auto___49705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___49705,out){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___49705,out){
return (function (state_49680){
var state_val_49681 = (state_49680[(1)]);
if((state_val_49681 === (7))){
var inst_49676 = (state_49680[(2)]);
var state_49680__$1 = state_49680;
var statearr_49682_49706 = state_49680__$1;
(statearr_49682_49706[(2)] = inst_49676);

(statearr_49682_49706[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (1))){
var state_49680__$1 = state_49680;
var statearr_49683_49707 = state_49680__$1;
(statearr_49683_49707[(2)] = null);

(statearr_49683_49707[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (4))){
var inst_49662 = (state_49680[(7)]);
var inst_49662__$1 = (state_49680[(2)]);
var inst_49663 = (inst_49662__$1 == null);
var state_49680__$1 = (function (){var statearr_49684 = state_49680;
(statearr_49684[(7)] = inst_49662__$1);

return statearr_49684;
})();
if(cljs.core.truth_(inst_49663)){
var statearr_49685_49708 = state_49680__$1;
(statearr_49685_49708[(1)] = (5));

} else {
var statearr_49686_49709 = state_49680__$1;
(statearr_49686_49709[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (6))){
var inst_49662 = (state_49680[(7)]);
var inst_49667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49662) : p.call(null,inst_49662));
var state_49680__$1 = state_49680;
if(cljs.core.truth_(inst_49667)){
var statearr_49687_49710 = state_49680__$1;
(statearr_49687_49710[(1)] = (8));

} else {
var statearr_49688_49711 = state_49680__$1;
(statearr_49688_49711[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (3))){
var inst_49678 = (state_49680[(2)]);
var state_49680__$1 = state_49680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49680__$1,inst_49678);
} else {
if((state_val_49681 === (2))){
var state_49680__$1 = state_49680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49680__$1,(4),ch);
} else {
if((state_val_49681 === (11))){
var inst_49670 = (state_49680[(2)]);
var state_49680__$1 = state_49680;
var statearr_49689_49712 = state_49680__$1;
(statearr_49689_49712[(2)] = inst_49670);

(statearr_49689_49712[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (9))){
var state_49680__$1 = state_49680;
var statearr_49690_49713 = state_49680__$1;
(statearr_49690_49713[(2)] = null);

(statearr_49690_49713[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (5))){
var inst_49665 = cljs.core.async.close_BANG_(out);
var state_49680__$1 = state_49680;
var statearr_49691_49714 = state_49680__$1;
(statearr_49691_49714[(2)] = inst_49665);

(statearr_49691_49714[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (10))){
var inst_49673 = (state_49680[(2)]);
var state_49680__$1 = (function (){var statearr_49692 = state_49680;
(statearr_49692[(8)] = inst_49673);

return statearr_49692;
})();
var statearr_49693_49715 = state_49680__$1;
(statearr_49693_49715[(2)] = null);

(statearr_49693_49715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49681 === (8))){
var inst_49662 = (state_49680[(7)]);
var state_49680__$1 = state_49680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49680__$1,(11),out,inst_49662);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___49705,out))
;
return ((function (switch__37982__auto__,c__38096__auto___49705,out){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_49697 = [null,null,null,null,null,null,null,null,null];
(statearr_49697[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_49697[(1)] = (1));

return statearr_49697;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_49680){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49680);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e49698){if((e49698 instanceof Object)){
var ex__37986__auto__ = e49698;
var statearr_49699_49716 = state_49680;
(statearr_49699_49716[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49680);

return cljs.core.cst$kw$recur;
} else {
throw e49698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__49717 = state_49680;
state_49680 = G__49717;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_49680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_49680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___49705,out))
})();
var state__38098__auto__ = (function (){var statearr_49700 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_49700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___49705);

return statearr_49700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___49705,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args49718 = [];
var len__31462__auto___49721 = arguments.length;
var i__31463__auto___49722 = (0);
while(true){
if((i__31463__auto___49722 < len__31462__auto___49721)){
args49718.push((arguments[i__31463__auto___49722]));

var G__49723 = (i__31463__auto___49722 + (1));
i__31463__auto___49722 = G__49723;
continue;
} else {
}
break;
}

var G__49720 = args49718.length;
switch (G__49720) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49718.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_49890){
var state_val_49891 = (state_49890[(1)]);
if((state_val_49891 === (7))){
var inst_49886 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49892_49933 = state_49890__$1;
(statearr_49892_49933[(2)] = inst_49886);

(statearr_49892_49933[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (20))){
var inst_49856 = (state_49890[(7)]);
var inst_49867 = (state_49890[(2)]);
var inst_49868 = cljs.core.next(inst_49856);
var inst_49842 = inst_49868;
var inst_49843 = null;
var inst_49844 = (0);
var inst_49845 = (0);
var state_49890__$1 = (function (){var statearr_49893 = state_49890;
(statearr_49893[(8)] = inst_49867);

(statearr_49893[(9)] = inst_49845);

(statearr_49893[(10)] = inst_49843);

(statearr_49893[(11)] = inst_49842);

(statearr_49893[(12)] = inst_49844);

return statearr_49893;
})();
var statearr_49894_49934 = state_49890__$1;
(statearr_49894_49934[(2)] = null);

(statearr_49894_49934[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (1))){
var state_49890__$1 = state_49890;
var statearr_49895_49935 = state_49890__$1;
(statearr_49895_49935[(2)] = null);

(statearr_49895_49935[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (4))){
var inst_49831 = (state_49890[(13)]);
var inst_49831__$1 = (state_49890[(2)]);
var inst_49832 = (inst_49831__$1 == null);
var state_49890__$1 = (function (){var statearr_49896 = state_49890;
(statearr_49896[(13)] = inst_49831__$1);

return statearr_49896;
})();
if(cljs.core.truth_(inst_49832)){
var statearr_49897_49936 = state_49890__$1;
(statearr_49897_49936[(1)] = (5));

} else {
var statearr_49898_49937 = state_49890__$1;
(statearr_49898_49937[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (15))){
var state_49890__$1 = state_49890;
var statearr_49902_49938 = state_49890__$1;
(statearr_49902_49938[(2)] = null);

(statearr_49902_49938[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (21))){
var state_49890__$1 = state_49890;
var statearr_49903_49939 = state_49890__$1;
(statearr_49903_49939[(2)] = null);

(statearr_49903_49939[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (13))){
var inst_49845 = (state_49890[(9)]);
var inst_49843 = (state_49890[(10)]);
var inst_49842 = (state_49890[(11)]);
var inst_49844 = (state_49890[(12)]);
var inst_49852 = (state_49890[(2)]);
var inst_49853 = (inst_49845 + (1));
var tmp49899 = inst_49843;
var tmp49900 = inst_49842;
var tmp49901 = inst_49844;
var inst_49842__$1 = tmp49900;
var inst_49843__$1 = tmp49899;
var inst_49844__$1 = tmp49901;
var inst_49845__$1 = inst_49853;
var state_49890__$1 = (function (){var statearr_49904 = state_49890;
(statearr_49904[(9)] = inst_49845__$1);

(statearr_49904[(10)] = inst_49843__$1);

(statearr_49904[(14)] = inst_49852);

(statearr_49904[(11)] = inst_49842__$1);

(statearr_49904[(12)] = inst_49844__$1);

return statearr_49904;
})();
var statearr_49905_49940 = state_49890__$1;
(statearr_49905_49940[(2)] = null);

(statearr_49905_49940[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (22))){
var state_49890__$1 = state_49890;
var statearr_49906_49941 = state_49890__$1;
(statearr_49906_49941[(2)] = null);

(statearr_49906_49941[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (6))){
var inst_49831 = (state_49890[(13)]);
var inst_49840 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49831) : f.call(null,inst_49831));
var inst_49841 = cljs.core.seq(inst_49840);
var inst_49842 = inst_49841;
var inst_49843 = null;
var inst_49844 = (0);
var inst_49845 = (0);
var state_49890__$1 = (function (){var statearr_49907 = state_49890;
(statearr_49907[(9)] = inst_49845);

(statearr_49907[(10)] = inst_49843);

(statearr_49907[(11)] = inst_49842);

(statearr_49907[(12)] = inst_49844);

return statearr_49907;
})();
var statearr_49908_49942 = state_49890__$1;
(statearr_49908_49942[(2)] = null);

(statearr_49908_49942[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (17))){
var inst_49856 = (state_49890[(7)]);
var inst_49860 = cljs.core.chunk_first(inst_49856);
var inst_49861 = cljs.core.chunk_rest(inst_49856);
var inst_49862 = cljs.core.count(inst_49860);
var inst_49842 = inst_49861;
var inst_49843 = inst_49860;
var inst_49844 = inst_49862;
var inst_49845 = (0);
var state_49890__$1 = (function (){var statearr_49909 = state_49890;
(statearr_49909[(9)] = inst_49845);

(statearr_49909[(10)] = inst_49843);

(statearr_49909[(11)] = inst_49842);

(statearr_49909[(12)] = inst_49844);

return statearr_49909;
})();
var statearr_49910_49943 = state_49890__$1;
(statearr_49910_49943[(2)] = null);

(statearr_49910_49943[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (3))){
var inst_49888 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49890__$1,inst_49888);
} else {
if((state_val_49891 === (12))){
var inst_49876 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49911_49944 = state_49890__$1;
(statearr_49911_49944[(2)] = inst_49876);

(statearr_49911_49944[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (2))){
var state_49890__$1 = state_49890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49890__$1,(4),in$);
} else {
if((state_val_49891 === (23))){
var inst_49884 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49912_49945 = state_49890__$1;
(statearr_49912_49945[(2)] = inst_49884);

(statearr_49912_49945[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (19))){
var inst_49871 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49913_49946 = state_49890__$1;
(statearr_49913_49946[(2)] = inst_49871);

(statearr_49913_49946[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (11))){
var inst_49856 = (state_49890[(7)]);
var inst_49842 = (state_49890[(11)]);
var inst_49856__$1 = cljs.core.seq(inst_49842);
var state_49890__$1 = (function (){var statearr_49914 = state_49890;
(statearr_49914[(7)] = inst_49856__$1);

return statearr_49914;
})();
if(inst_49856__$1){
var statearr_49915_49947 = state_49890__$1;
(statearr_49915_49947[(1)] = (14));

} else {
var statearr_49916_49948 = state_49890__$1;
(statearr_49916_49948[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (9))){
var inst_49878 = (state_49890[(2)]);
var inst_49879 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49890__$1 = (function (){var statearr_49917 = state_49890;
(statearr_49917[(15)] = inst_49878);

return statearr_49917;
})();
if(cljs.core.truth_(inst_49879)){
var statearr_49918_49949 = state_49890__$1;
(statearr_49918_49949[(1)] = (21));

} else {
var statearr_49919_49950 = state_49890__$1;
(statearr_49919_49950[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (5))){
var inst_49834 = cljs.core.async.close_BANG_(out);
var state_49890__$1 = state_49890;
var statearr_49920_49951 = state_49890__$1;
(statearr_49920_49951[(2)] = inst_49834);

(statearr_49920_49951[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (14))){
var inst_49856 = (state_49890[(7)]);
var inst_49858 = cljs.core.chunked_seq_QMARK_(inst_49856);
var state_49890__$1 = state_49890;
if(inst_49858){
var statearr_49921_49952 = state_49890__$1;
(statearr_49921_49952[(1)] = (17));

} else {
var statearr_49922_49953 = state_49890__$1;
(statearr_49922_49953[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (16))){
var inst_49874 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49923_49954 = state_49890__$1;
(statearr_49923_49954[(2)] = inst_49874);

(statearr_49923_49954[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49891 === (10))){
var inst_49845 = (state_49890[(9)]);
var inst_49843 = (state_49890[(10)]);
var inst_49850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49843,inst_49845);
var state_49890__$1 = state_49890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49890__$1,(13),out,inst_49850);
} else {
if((state_val_49891 === (18))){
var inst_49856 = (state_49890[(7)]);
var inst_49865 = cljs.core.first(inst_49856);
var state_49890__$1 = state_49890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49890__$1,(20),out,inst_49865);
} else {
if((state_val_49891 === (8))){
var inst_49845 = (state_49890[(9)]);
var inst_49844 = (state_49890[(12)]);
var inst_49847 = (inst_49845 < inst_49844);
var inst_49848 = inst_49847;
var state_49890__$1 = state_49890;
if(cljs.core.truth_(inst_49848)){
var statearr_49924_49955 = state_49890__$1;
(statearr_49924_49955[(1)] = (10));

} else {
var statearr_49925_49956 = state_49890__$1;
(statearr_49925_49956[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37983__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37983__auto____0 = (function (){
var statearr_49929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49929[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37983__auto__);

(statearr_49929[(1)] = (1));

return statearr_49929;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37983__auto____1 = (function (state_49890){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49890);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e49930){if((e49930 instanceof Object)){
var ex__37986__auto__ = e49930;
var statearr_49931_49957 = state_49890;
(statearr_49931_49957[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49890);

return cljs.core.cst$kw$recur;
} else {
throw e49930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__49958 = state_49890;
state_49890 = G__49958;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37983__auto__ = function(state_49890){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37983__auto____1.call(this,state_49890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37983__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37983__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_49932 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_49932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_49932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args49959 = [];
var len__31462__auto___49962 = arguments.length;
var i__31463__auto___49963 = (0);
while(true){
if((i__31463__auto___49963 < len__31462__auto___49962)){
args49959.push((arguments[i__31463__auto___49963]));

var G__49964 = (i__31463__auto___49963 + (1));
i__31463__auto___49963 = G__49964;
continue;
} else {
}
break;
}

var G__49961 = args49959.length;
switch (G__49961) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49959.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args49966 = [];
var len__31462__auto___49969 = arguments.length;
var i__31463__auto___49970 = (0);
while(true){
if((i__31463__auto___49970 < len__31462__auto___49969)){
args49966.push((arguments[i__31463__auto___49970]));

var G__49971 = (i__31463__auto___49970 + (1));
i__31463__auto___49970 = G__49971;
continue;
} else {
}
break;
}

var G__49968 = args49966.length;
switch (G__49968) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49966.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args49973 = [];
var len__31462__auto___50024 = arguments.length;
var i__31463__auto___50025 = (0);
while(true){
if((i__31463__auto___50025 < len__31462__auto___50024)){
args49973.push((arguments[i__31463__auto___50025]));

var G__50026 = (i__31463__auto___50025 + (1));
i__31463__auto___50025 = G__50026;
continue;
} else {
}
break;
}

var G__49975 = args49973.length;
switch (G__49975) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49973.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38096__auto___50028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___50028,out){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___50028,out){
return (function (state_49999){
var state_val_50000 = (state_49999[(1)]);
if((state_val_50000 === (7))){
var inst_49994 = (state_49999[(2)]);
var state_49999__$1 = state_49999;
var statearr_50001_50029 = state_49999__$1;
(statearr_50001_50029[(2)] = inst_49994);

(statearr_50001_50029[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50000 === (1))){
var inst_49976 = null;
var state_49999__$1 = (function (){var statearr_50002 = state_49999;
(statearr_50002[(7)] = inst_49976);

return statearr_50002;
})();
var statearr_50003_50030 = state_49999__$1;
(statearr_50003_50030[(2)] = null);

(statearr_50003_50030[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50000 === (4))){
var inst_49979 = (state_49999[(8)]);
var inst_49979__$1 = (state_49999[(2)]);
var inst_49980 = (inst_49979__$1 == null);
var inst_49981 = cljs.core.not(inst_49980);
var state_49999__$1 = (function (){var statearr_50004 = state_49999;
(statearr_50004[(8)] = inst_49979__$1);

return statearr_50004;
})();
if(inst_49981){
var statearr_50005_50031 = state_49999__$1;
(statearr_50005_50031[(1)] = (5));

} else {
var statearr_50006_50032 = state_49999__$1;
(statearr_50006_50032[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50000 === (6))){
var state_49999__$1 = state_49999;
var statearr_50007_50033 = state_49999__$1;
(statearr_50007_50033[(2)] = null);

(statearr_50007_50033[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50000 === (3))){
var inst_49996 = (state_49999[(2)]);
var inst_49997 = cljs.core.async.close_BANG_(out);
var state_49999__$1 = (function (){var statearr_50008 = state_49999;
(statearr_50008[(9)] = inst_49996);

return statearr_50008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49999__$1,inst_49997);
} else {
if((state_val_50000 === (2))){
var state_49999__$1 = state_49999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49999__$1,(4),ch);
} else {
if((state_val_50000 === (11))){
var inst_49979 = (state_49999[(8)]);
var inst_49988 = (state_49999[(2)]);
var inst_49976 = inst_49979;
var state_49999__$1 = (function (){var statearr_50009 = state_49999;
(statearr_50009[(7)] = inst_49976);

(statearr_50009[(10)] = inst_49988);

return statearr_50009;
})();
var statearr_50010_50034 = state_49999__$1;
(statearr_50010_50034[(2)] = null);

(statearr_50010_50034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50000 === (9))){
var inst_49979 = (state_49999[(8)]);
var state_49999__$1 = state_49999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49999__$1,(11),out,inst_49979);
} else {
if((state_val_50000 === (5))){
var inst_49976 = (state_49999[(7)]);
var inst_49979 = (state_49999[(8)]);
var inst_49983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49979,inst_49976);
var state_49999__$1 = state_49999;
if(inst_49983){
var statearr_50012_50035 = state_49999__$1;
(statearr_50012_50035[(1)] = (8));

} else {
var statearr_50013_50036 = state_49999__$1;
(statearr_50013_50036[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50000 === (10))){
var inst_49991 = (state_49999[(2)]);
var state_49999__$1 = state_49999;
var statearr_50014_50037 = state_49999__$1;
(statearr_50014_50037[(2)] = inst_49991);

(statearr_50014_50037[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50000 === (8))){
var inst_49976 = (state_49999[(7)]);
var tmp50011 = inst_49976;
var inst_49976__$1 = tmp50011;
var state_49999__$1 = (function (){var statearr_50015 = state_49999;
(statearr_50015[(7)] = inst_49976__$1);

return statearr_50015;
})();
var statearr_50016_50038 = state_49999__$1;
(statearr_50016_50038[(2)] = null);

(statearr_50016_50038[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___50028,out))
;
return ((function (switch__37982__auto__,c__38096__auto___50028,out){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_50020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50020[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_50020[(1)] = (1));

return statearr_50020;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_49999){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_49999);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50021){if((e50021 instanceof Object)){
var ex__37986__auto__ = e50021;
var statearr_50022_50039 = state_49999;
(statearr_50022_50039[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49999);

return cljs.core.cst$kw$recur;
} else {
throw e50021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50040 = state_49999;
state_49999 = G__50040;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_49999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_49999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___50028,out))
})();
var state__38098__auto__ = (function (){var statearr_50023 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___50028);

return statearr_50023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___50028,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args50041 = [];
var len__31462__auto___50111 = arguments.length;
var i__31463__auto___50112 = (0);
while(true){
if((i__31463__auto___50112 < len__31462__auto___50111)){
args50041.push((arguments[i__31463__auto___50112]));

var G__50113 = (i__31463__auto___50112 + (1));
i__31463__auto___50112 = G__50113;
continue;
} else {
}
break;
}

var G__50043 = args50041.length;
switch (G__50043) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50041.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38096__auto___50115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___50115,out){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___50115,out){
return (function (state_50081){
var state_val_50082 = (state_50081[(1)]);
if((state_val_50082 === (7))){
var inst_50077 = (state_50081[(2)]);
var state_50081__$1 = state_50081;
var statearr_50083_50116 = state_50081__$1;
(statearr_50083_50116[(2)] = inst_50077);

(statearr_50083_50116[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (1))){
var inst_50044 = (new Array(n));
var inst_50045 = inst_50044;
var inst_50046 = (0);
var state_50081__$1 = (function (){var statearr_50084 = state_50081;
(statearr_50084[(7)] = inst_50046);

(statearr_50084[(8)] = inst_50045);

return statearr_50084;
})();
var statearr_50085_50117 = state_50081__$1;
(statearr_50085_50117[(2)] = null);

(statearr_50085_50117[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (4))){
var inst_50049 = (state_50081[(9)]);
var inst_50049__$1 = (state_50081[(2)]);
var inst_50050 = (inst_50049__$1 == null);
var inst_50051 = cljs.core.not(inst_50050);
var state_50081__$1 = (function (){var statearr_50086 = state_50081;
(statearr_50086[(9)] = inst_50049__$1);

return statearr_50086;
})();
if(inst_50051){
var statearr_50087_50118 = state_50081__$1;
(statearr_50087_50118[(1)] = (5));

} else {
var statearr_50088_50119 = state_50081__$1;
(statearr_50088_50119[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (15))){
var inst_50071 = (state_50081[(2)]);
var state_50081__$1 = state_50081;
var statearr_50089_50120 = state_50081__$1;
(statearr_50089_50120[(2)] = inst_50071);

(statearr_50089_50120[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (13))){
var state_50081__$1 = state_50081;
var statearr_50090_50121 = state_50081__$1;
(statearr_50090_50121[(2)] = null);

(statearr_50090_50121[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (6))){
var inst_50046 = (state_50081[(7)]);
var inst_50067 = (inst_50046 > (0));
var state_50081__$1 = state_50081;
if(cljs.core.truth_(inst_50067)){
var statearr_50091_50122 = state_50081__$1;
(statearr_50091_50122[(1)] = (12));

} else {
var statearr_50092_50123 = state_50081__$1;
(statearr_50092_50123[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (3))){
var inst_50079 = (state_50081[(2)]);
var state_50081__$1 = state_50081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50081__$1,inst_50079);
} else {
if((state_val_50082 === (12))){
var inst_50045 = (state_50081[(8)]);
var inst_50069 = cljs.core.vec(inst_50045);
var state_50081__$1 = state_50081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50081__$1,(15),out,inst_50069);
} else {
if((state_val_50082 === (2))){
var state_50081__$1 = state_50081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50081__$1,(4),ch);
} else {
if((state_val_50082 === (11))){
var inst_50061 = (state_50081[(2)]);
var inst_50062 = (new Array(n));
var inst_50045 = inst_50062;
var inst_50046 = (0);
var state_50081__$1 = (function (){var statearr_50093 = state_50081;
(statearr_50093[(7)] = inst_50046);

(statearr_50093[(10)] = inst_50061);

(statearr_50093[(8)] = inst_50045);

return statearr_50093;
})();
var statearr_50094_50124 = state_50081__$1;
(statearr_50094_50124[(2)] = null);

(statearr_50094_50124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (9))){
var inst_50045 = (state_50081[(8)]);
var inst_50059 = cljs.core.vec(inst_50045);
var state_50081__$1 = state_50081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50081__$1,(11),out,inst_50059);
} else {
if((state_val_50082 === (5))){
var inst_50054 = (state_50081[(11)]);
var inst_50046 = (state_50081[(7)]);
var inst_50045 = (state_50081[(8)]);
var inst_50049 = (state_50081[(9)]);
var inst_50053 = (inst_50045[inst_50046] = inst_50049);
var inst_50054__$1 = (inst_50046 + (1));
var inst_50055 = (inst_50054__$1 < n);
var state_50081__$1 = (function (){var statearr_50095 = state_50081;
(statearr_50095[(11)] = inst_50054__$1);

(statearr_50095[(12)] = inst_50053);

return statearr_50095;
})();
if(cljs.core.truth_(inst_50055)){
var statearr_50096_50125 = state_50081__$1;
(statearr_50096_50125[(1)] = (8));

} else {
var statearr_50097_50126 = state_50081__$1;
(statearr_50097_50126[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (14))){
var inst_50074 = (state_50081[(2)]);
var inst_50075 = cljs.core.async.close_BANG_(out);
var state_50081__$1 = (function (){var statearr_50099 = state_50081;
(statearr_50099[(13)] = inst_50074);

return statearr_50099;
})();
var statearr_50100_50127 = state_50081__$1;
(statearr_50100_50127[(2)] = inst_50075);

(statearr_50100_50127[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (10))){
var inst_50065 = (state_50081[(2)]);
var state_50081__$1 = state_50081;
var statearr_50101_50128 = state_50081__$1;
(statearr_50101_50128[(2)] = inst_50065);

(statearr_50101_50128[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50082 === (8))){
var inst_50054 = (state_50081[(11)]);
var inst_50045 = (state_50081[(8)]);
var tmp50098 = inst_50045;
var inst_50045__$1 = tmp50098;
var inst_50046 = inst_50054;
var state_50081__$1 = (function (){var statearr_50102 = state_50081;
(statearr_50102[(7)] = inst_50046);

(statearr_50102[(8)] = inst_50045__$1);

return statearr_50102;
})();
var statearr_50103_50129 = state_50081__$1;
(statearr_50103_50129[(2)] = null);

(statearr_50103_50129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___50115,out))
;
return ((function (switch__37982__auto__,c__38096__auto___50115,out){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_50107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50107[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_50107[(1)] = (1));

return statearr_50107;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_50081){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50081);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50108){if((e50108 instanceof Object)){
var ex__37986__auto__ = e50108;
var statearr_50109_50130 = state_50081;
(statearr_50109_50130[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50081);

return cljs.core.cst$kw$recur;
} else {
throw e50108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50131 = state_50081;
state_50081 = G__50131;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_50081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_50081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___50115,out))
})();
var state__38098__auto__ = (function (){var statearr_50110 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___50115);

return statearr_50110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___50115,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args50132 = [];
var len__31462__auto___50206 = arguments.length;
var i__31463__auto___50207 = (0);
while(true){
if((i__31463__auto___50207 < len__31462__auto___50206)){
args50132.push((arguments[i__31463__auto___50207]));

var G__50208 = (i__31463__auto___50207 + (1));
i__31463__auto___50207 = G__50208;
continue;
} else {
}
break;
}

var G__50134 = args50132.length;
switch (G__50134) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50132.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38096__auto___50210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___50210,out){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___50210,out){
return (function (state_50176){
var state_val_50177 = (state_50176[(1)]);
if((state_val_50177 === (7))){
var inst_50172 = (state_50176[(2)]);
var state_50176__$1 = state_50176;
var statearr_50178_50211 = state_50176__$1;
(statearr_50178_50211[(2)] = inst_50172);

(statearr_50178_50211[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (1))){
var inst_50135 = [];
var inst_50136 = inst_50135;
var inst_50137 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_50176__$1 = (function (){var statearr_50179 = state_50176;
(statearr_50179[(7)] = inst_50136);

(statearr_50179[(8)] = inst_50137);

return statearr_50179;
})();
var statearr_50180_50212 = state_50176__$1;
(statearr_50180_50212[(2)] = null);

(statearr_50180_50212[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (4))){
var inst_50140 = (state_50176[(9)]);
var inst_50140__$1 = (state_50176[(2)]);
var inst_50141 = (inst_50140__$1 == null);
var inst_50142 = cljs.core.not(inst_50141);
var state_50176__$1 = (function (){var statearr_50181 = state_50176;
(statearr_50181[(9)] = inst_50140__$1);

return statearr_50181;
})();
if(inst_50142){
var statearr_50182_50213 = state_50176__$1;
(statearr_50182_50213[(1)] = (5));

} else {
var statearr_50183_50214 = state_50176__$1;
(statearr_50183_50214[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (15))){
var inst_50166 = (state_50176[(2)]);
var state_50176__$1 = state_50176;
var statearr_50184_50215 = state_50176__$1;
(statearr_50184_50215[(2)] = inst_50166);

(statearr_50184_50215[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (13))){
var state_50176__$1 = state_50176;
var statearr_50185_50216 = state_50176__$1;
(statearr_50185_50216[(2)] = null);

(statearr_50185_50216[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (6))){
var inst_50136 = (state_50176[(7)]);
var inst_50161 = inst_50136.length;
var inst_50162 = (inst_50161 > (0));
var state_50176__$1 = state_50176;
if(cljs.core.truth_(inst_50162)){
var statearr_50186_50217 = state_50176__$1;
(statearr_50186_50217[(1)] = (12));

} else {
var statearr_50187_50218 = state_50176__$1;
(statearr_50187_50218[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (3))){
var inst_50174 = (state_50176[(2)]);
var state_50176__$1 = state_50176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50176__$1,inst_50174);
} else {
if((state_val_50177 === (12))){
var inst_50136 = (state_50176[(7)]);
var inst_50164 = cljs.core.vec(inst_50136);
var state_50176__$1 = state_50176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50176__$1,(15),out,inst_50164);
} else {
if((state_val_50177 === (2))){
var state_50176__$1 = state_50176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50176__$1,(4),ch);
} else {
if((state_val_50177 === (11))){
var inst_50144 = (state_50176[(10)]);
var inst_50140 = (state_50176[(9)]);
var inst_50154 = (state_50176[(2)]);
var inst_50155 = [];
var inst_50156 = inst_50155.push(inst_50140);
var inst_50136 = inst_50155;
var inst_50137 = inst_50144;
var state_50176__$1 = (function (){var statearr_50188 = state_50176;
(statearr_50188[(11)] = inst_50154);

(statearr_50188[(12)] = inst_50156);

(statearr_50188[(7)] = inst_50136);

(statearr_50188[(8)] = inst_50137);

return statearr_50188;
})();
var statearr_50189_50219 = state_50176__$1;
(statearr_50189_50219[(2)] = null);

(statearr_50189_50219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (9))){
var inst_50136 = (state_50176[(7)]);
var inst_50152 = cljs.core.vec(inst_50136);
var state_50176__$1 = state_50176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50176__$1,(11),out,inst_50152);
} else {
if((state_val_50177 === (5))){
var inst_50144 = (state_50176[(10)]);
var inst_50140 = (state_50176[(9)]);
var inst_50137 = (state_50176[(8)]);
var inst_50144__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50140) : f.call(null,inst_50140));
var inst_50145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50144__$1,inst_50137);
var inst_50146 = cljs.core.keyword_identical_QMARK_(inst_50137,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_50147 = (inst_50145) || (inst_50146);
var state_50176__$1 = (function (){var statearr_50190 = state_50176;
(statearr_50190[(10)] = inst_50144__$1);

return statearr_50190;
})();
if(cljs.core.truth_(inst_50147)){
var statearr_50191_50220 = state_50176__$1;
(statearr_50191_50220[(1)] = (8));

} else {
var statearr_50192_50221 = state_50176__$1;
(statearr_50192_50221[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (14))){
var inst_50169 = (state_50176[(2)]);
var inst_50170 = cljs.core.async.close_BANG_(out);
var state_50176__$1 = (function (){var statearr_50194 = state_50176;
(statearr_50194[(13)] = inst_50169);

return statearr_50194;
})();
var statearr_50195_50222 = state_50176__$1;
(statearr_50195_50222[(2)] = inst_50170);

(statearr_50195_50222[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (10))){
var inst_50159 = (state_50176[(2)]);
var state_50176__$1 = state_50176;
var statearr_50196_50223 = state_50176__$1;
(statearr_50196_50223[(2)] = inst_50159);

(statearr_50196_50223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50177 === (8))){
var inst_50144 = (state_50176[(10)]);
var inst_50140 = (state_50176[(9)]);
var inst_50136 = (state_50176[(7)]);
var inst_50149 = inst_50136.push(inst_50140);
var tmp50193 = inst_50136;
var inst_50136__$1 = tmp50193;
var inst_50137 = inst_50144;
var state_50176__$1 = (function (){var statearr_50197 = state_50176;
(statearr_50197[(7)] = inst_50136__$1);

(statearr_50197[(14)] = inst_50149);

(statearr_50197[(8)] = inst_50137);

return statearr_50197;
})();
var statearr_50198_50224 = state_50176__$1;
(statearr_50198_50224[(2)] = null);

(statearr_50198_50224[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38096__auto___50210,out))
;
return ((function (switch__37982__auto__,c__38096__auto___50210,out){
return (function() {
var cljs$core$async$state_machine__37983__auto__ = null;
var cljs$core$async$state_machine__37983__auto____0 = (function (){
var statearr_50202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50202[(0)] = cljs$core$async$state_machine__37983__auto__);

(statearr_50202[(1)] = (1));

return statearr_50202;
});
var cljs$core$async$state_machine__37983__auto____1 = (function (state_50176){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50176);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50203){if((e50203 instanceof Object)){
var ex__37986__auto__ = e50203;
var statearr_50204_50225 = state_50176;
(statearr_50204_50225[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50176);

return cljs.core.cst$kw$recur;
} else {
throw e50203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50226 = state_50176;
state_50176 = G__50226;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
cljs$core$async$state_machine__37983__auto__ = function(state_50176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37983__auto____1.call(this,state_50176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37983__auto____0;
cljs$core$async$state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37983__auto____1;
return cljs$core$async$state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___50210,out))
})();
var state__38098__auto__ = (function (){var statearr_50205 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___50210);

return statearr_50205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___50210,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

