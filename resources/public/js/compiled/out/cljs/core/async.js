// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args35168 = [];
var len__31652__auto___35174 = arguments.length;
var i__31653__auto___35175 = (0);
while(true){
if((i__31653__auto___35175 < len__31652__auto___35174)){
args35168.push((arguments[i__31653__auto___35175]));

var G__35176 = (i__31653__auto___35175 + (1));
i__31653__auto___35175 = G__35176;
continue;
} else {
}
break;
}

var G__35170 = args35168.length;
switch (G__35170) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35168.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35171 = (function (f,blockable,meta35172){
this.f = f;
this.blockable = blockable;
this.meta35172 = meta35172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35173,meta35172__$1){
var self__ = this;
var _35173__$1 = this;
return (new cljs.core.async.t_cljs$core$async35171(self__.f,self__.blockable,meta35172__$1));
});

cljs.core.async.t_cljs$core$async35171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35173){
var self__ = this;
var _35173__$1 = this;
return self__.meta35172;
});

cljs.core.async.t_cljs$core$async35171.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35172","meta35172",1018383032,null)], null);
});

cljs.core.async.t_cljs$core$async35171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35171";

cljs.core.async.t_cljs$core$async35171.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async35171");
});

cljs.core.async.__GT_t_cljs$core$async35171 = (function cljs$core$async$__GT_t_cljs$core$async35171(f__$1,blockable__$1,meta35172){
return (new cljs.core.async.t_cljs$core$async35171(f__$1,blockable__$1,meta35172));
});

}

return (new cljs.core.async.t_cljs$core$async35171(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args35180 = [];
var len__31652__auto___35183 = arguments.length;
var i__31653__auto___35184 = (0);
while(true){
if((i__31653__auto___35184 < len__31652__auto___35183)){
args35180.push((arguments[i__31653__auto___35184]));

var G__35185 = (i__31653__auto___35184 + (1));
i__31653__auto___35184 = G__35185;
continue;
} else {
}
break;
}

var G__35182 = args35180.length;
switch (G__35182) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35180.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args35187 = [];
var len__31652__auto___35190 = arguments.length;
var i__31653__auto___35191 = (0);
while(true){
if((i__31653__auto___35191 < len__31652__auto___35190)){
args35187.push((arguments[i__31653__auto___35191]));

var G__35192 = (i__31653__auto___35191 + (1));
i__31653__auto___35191 = G__35192;
continue;
} else {
}
break;
}

var G__35189 = args35187.length;
switch (G__35189) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35187.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args35194 = [];
var len__31652__auto___35197 = arguments.length;
var i__31653__auto___35198 = (0);
while(true){
if((i__31653__auto___35198 < len__31652__auto___35197)){
args35194.push((arguments[i__31653__auto___35198]));

var G__35199 = (i__31653__auto___35198 + (1));
i__31653__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var G__35196 = args35194.length;
switch (G__35196) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35194.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35201 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35201);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35201,ret){
return (function (){
return fn1.call(null,val_35201);
});})(val_35201,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args35202 = [];
var len__31652__auto___35205 = arguments.length;
var i__31653__auto___35206 = (0);
while(true){
if((i__31653__auto___35206 < len__31652__auto___35205)){
args35202.push((arguments[i__31653__auto___35206]));

var G__35207 = (i__31653__auto___35206 + (1));
i__31653__auto___35206 = G__35207;
continue;
} else {
}
break;
}

var G__35204 = args35202.length;
switch (G__35204) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35202.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31492__auto___35209 = n;
var x_35210 = (0);
while(true){
if((x_35210 < n__31492__auto___35209)){
(a[x_35210] = (0));

var G__35211 = (x_35210 + (1));
x_35210 = G__35211;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35212 = (i + (1));
i = G__35212;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35216 = (function (alt_flag,flag,meta35217){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35217 = meta35217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35218,meta35217__$1){
var self__ = this;
var _35218__$1 = this;
return (new cljs.core.async.t_cljs$core$async35216(self__.alt_flag,self__.flag,meta35217__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35218){
var self__ = this;
var _35218__$1 = this;
return self__.meta35217;
});})(flag))
;

cljs.core.async.t_cljs$core$async35216.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35216.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35217","meta35217",512332896,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35216";

cljs.core.async.t_cljs$core$async35216.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async35216");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35216 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35216(alt_flag__$1,flag__$1,meta35217){
return (new cljs.core.async.t_cljs$core$async35216(alt_flag__$1,flag__$1,meta35217));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35216(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35222 = (function (alt_handler,flag,cb,meta35223){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35223 = meta35223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35224,meta35223__$1){
var self__ = this;
var _35224__$1 = this;
return (new cljs.core.async.t_cljs$core$async35222(self__.alt_handler,self__.flag,self__.cb,meta35223__$1));
});

cljs.core.async.t_cljs$core$async35222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35224){
var self__ = this;
var _35224__$1 = this;
return self__.meta35223;
});

cljs.core.async.t_cljs$core$async35222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35223","meta35223",2091868148,null)], null);
});

cljs.core.async.t_cljs$core$async35222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35222";

cljs.core.async.t_cljs$core$async35222.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async35222");
});

cljs.core.async.__GT_t_cljs$core$async35222 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35222(alt_handler__$1,flag__$1,cb__$1,meta35223){
return (new cljs.core.async.t_cljs$core$async35222(alt_handler__$1,flag__$1,cb__$1,meta35223));
});

}

return (new cljs.core.async.t_cljs$core$async35222(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35225_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35225_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35226_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35226_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30577__auto__ = wport;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35227 = (i + (1));
i = G__35227;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30577__auto__ = ret;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30565__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30565__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30565__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__31659__auto__ = [];
var len__31652__auto___35233 = arguments.length;
var i__31653__auto___35234 = (0);
while(true){
if((i__31653__auto___35234 < len__31652__auto___35233)){
args__31659__auto__.push((arguments[i__31653__auto___35234]));

var G__35235 = (i__31653__auto___35234 + (1));
i__31653__auto___35234 = G__35235;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((1) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31660__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35230){
var map__35231 = p__35230;
var map__35231__$1 = ((((!((map__35231 == null)))?((((map__35231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35231):map__35231);
var opts = map__35231__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35228){
var G__35229 = cljs.core.first.call(null,seq35228);
var seq35228__$1 = cljs.core.next.call(null,seq35228);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35229,seq35228__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args35236 = [];
var len__31652__auto___35286 = arguments.length;
var i__31653__auto___35287 = (0);
while(true){
if((i__31653__auto___35287 < len__31652__auto___35286)){
args35236.push((arguments[i__31653__auto___35287]));

var G__35288 = (i__31653__auto___35287 + (1));
i__31653__auto___35287 = G__35288;
continue;
} else {
}
break;
}

var G__35238 = args35236.length;
switch (G__35238) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35236.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35123__auto___35290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___35290){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___35290){
return (function (state_35262){
var state_val_35263 = (state_35262[(1)]);
if((state_val_35263 === (7))){
var inst_35258 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
var statearr_35264_35291 = state_35262__$1;
(statearr_35264_35291[(2)] = inst_35258);

(statearr_35264_35291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (1))){
var state_35262__$1 = state_35262;
var statearr_35265_35292 = state_35262__$1;
(statearr_35265_35292[(2)] = null);

(statearr_35265_35292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (4))){
var inst_35241 = (state_35262[(7)]);
var inst_35241__$1 = (state_35262[(2)]);
var inst_35242 = (inst_35241__$1 == null);
var state_35262__$1 = (function (){var statearr_35266 = state_35262;
(statearr_35266[(7)] = inst_35241__$1);

return statearr_35266;
})();
if(cljs.core.truth_(inst_35242)){
var statearr_35267_35293 = state_35262__$1;
(statearr_35267_35293[(1)] = (5));

} else {
var statearr_35268_35294 = state_35262__$1;
(statearr_35268_35294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (13))){
var state_35262__$1 = state_35262;
var statearr_35269_35295 = state_35262__$1;
(statearr_35269_35295[(2)] = null);

(statearr_35269_35295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (6))){
var inst_35241 = (state_35262[(7)]);
var state_35262__$1 = state_35262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35262__$1,(11),to,inst_35241);
} else {
if((state_val_35263 === (3))){
var inst_35260 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35262__$1,inst_35260);
} else {
if((state_val_35263 === (12))){
var state_35262__$1 = state_35262;
var statearr_35270_35296 = state_35262__$1;
(statearr_35270_35296[(2)] = null);

(statearr_35270_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (2))){
var state_35262__$1 = state_35262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35262__$1,(4),from);
} else {
if((state_val_35263 === (11))){
var inst_35251 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
if(cljs.core.truth_(inst_35251)){
var statearr_35271_35297 = state_35262__$1;
(statearr_35271_35297[(1)] = (12));

} else {
var statearr_35272_35298 = state_35262__$1;
(statearr_35272_35298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (9))){
var state_35262__$1 = state_35262;
var statearr_35273_35299 = state_35262__$1;
(statearr_35273_35299[(2)] = null);

(statearr_35273_35299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (5))){
var state_35262__$1 = state_35262;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35274_35300 = state_35262__$1;
(statearr_35274_35300[(1)] = (8));

} else {
var statearr_35275_35301 = state_35262__$1;
(statearr_35275_35301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (14))){
var inst_35256 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
var statearr_35276_35302 = state_35262__$1;
(statearr_35276_35302[(2)] = inst_35256);

(statearr_35276_35302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (10))){
var inst_35248 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
var statearr_35277_35303 = state_35262__$1;
(statearr_35277_35303[(2)] = inst_35248);

(statearr_35277_35303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (8))){
var inst_35245 = cljs.core.async.close_BANG_.call(null,to);
var state_35262__$1 = state_35262;
var statearr_35278_35304 = state_35262__$1;
(statearr_35278_35304[(2)] = inst_35245);

(statearr_35278_35304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___35290))
;
return ((function (switch__35011__auto__,c__35123__auto___35290){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_35282 = [null,null,null,null,null,null,null,null];
(statearr_35282[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_35282[(1)] = (1));

return statearr_35282;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_35262){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35283){if((e35283 instanceof Object)){
var ex__35015__auto__ = e35283;
var statearr_35284_35305 = state_35262;
(statearr_35284_35305[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35306 = state_35262;
state_35262 = G__35306;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_35262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_35262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___35290))
})();
var state__35125__auto__ = (function (){var statearr_35285 = f__35124__auto__.call(null);
(statearr_35285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___35290);

return statearr_35285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___35290))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35494){
var vec__35495 = p__35494;
var v = cljs.core.nth.call(null,vec__35495,(0),null);
var p = cljs.core.nth.call(null,vec__35495,(1),null);
var job = vec__35495;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35123__auto___35681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___35681,res,vec__35495,v,p,job,jobs,results){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___35681,res,vec__35495,v,p,job,jobs,results){
return (function (state_35502){
var state_val_35503 = (state_35502[(1)]);
if((state_val_35503 === (1))){
var state_35502__$1 = state_35502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35502__$1,(2),res,v);
} else {
if((state_val_35503 === (2))){
var inst_35499 = (state_35502[(2)]);
var inst_35500 = cljs.core.async.close_BANG_.call(null,res);
var state_35502__$1 = (function (){var statearr_35504 = state_35502;
(statearr_35504[(7)] = inst_35499);

return statearr_35504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35502__$1,inst_35500);
} else {
return null;
}
}
});})(c__35123__auto___35681,res,vec__35495,v,p,job,jobs,results))
;
return ((function (switch__35011__auto__,c__35123__auto___35681,res,vec__35495,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0 = (function (){
var statearr_35508 = [null,null,null,null,null,null,null,null];
(statearr_35508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__);

(statearr_35508[(1)] = (1));

return statearr_35508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1 = (function (state_35502){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35509){if((e35509 instanceof Object)){
var ex__35015__auto__ = e35509;
var statearr_35510_35682 = state_35502;
(statearr_35510_35682[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35683 = state_35502;
state_35502 = G__35683;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = function(state_35502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1.call(this,state_35502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___35681,res,vec__35495,v,p,job,jobs,results))
})();
var state__35125__auto__ = (function (){var statearr_35511 = f__35124__auto__.call(null);
(statearr_35511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___35681);

return statearr_35511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___35681,res,vec__35495,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35512){
var vec__35513 = p__35512;
var v = cljs.core.nth.call(null,vec__35513,(0),null);
var p = cljs.core.nth.call(null,vec__35513,(1),null);
var job = vec__35513;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31492__auto___35684 = n;
var __35685 = (0);
while(true){
if((__35685 < n__31492__auto___35684)){
var G__35516_35686 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35516_35686) {
case "compute":
var c__35123__auto___35688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35685,c__35123__auto___35688,G__35516_35686,n__31492__auto___35684,jobs,results,process,async){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (__35685,c__35123__auto___35688,G__35516_35686,n__31492__auto___35684,jobs,results,process,async){
return (function (state_35529){
var state_val_35530 = (state_35529[(1)]);
if((state_val_35530 === (1))){
var state_35529__$1 = state_35529;
var statearr_35531_35689 = state_35529__$1;
(statearr_35531_35689[(2)] = null);

(statearr_35531_35689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (2))){
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35529__$1,(4),jobs);
} else {
if((state_val_35530 === (3))){
var inst_35527 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35529__$1,inst_35527);
} else {
if((state_val_35530 === (4))){
var inst_35519 = (state_35529[(2)]);
var inst_35520 = process.call(null,inst_35519);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35520)){
var statearr_35532_35690 = state_35529__$1;
(statearr_35532_35690[(1)] = (5));

} else {
var statearr_35533_35691 = state_35529__$1;
(statearr_35533_35691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (5))){
var state_35529__$1 = state_35529;
var statearr_35534_35692 = state_35529__$1;
(statearr_35534_35692[(2)] = null);

(statearr_35534_35692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (6))){
var state_35529__$1 = state_35529;
var statearr_35535_35693 = state_35529__$1;
(statearr_35535_35693[(2)] = null);

(statearr_35535_35693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (7))){
var inst_35525 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35536_35694 = state_35529__$1;
(statearr_35536_35694[(2)] = inst_35525);

(statearr_35536_35694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35685,c__35123__auto___35688,G__35516_35686,n__31492__auto___35684,jobs,results,process,async))
;
return ((function (__35685,switch__35011__auto__,c__35123__auto___35688,G__35516_35686,n__31492__auto___35684,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0 = (function (){
var statearr_35540 = [null,null,null,null,null,null,null];
(statearr_35540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__);

(statearr_35540[(1)] = (1));

return statearr_35540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1 = (function (state_35529){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object)){
var ex__35015__auto__ = e35541;
var statearr_35542_35695 = state_35529;
(statearr_35542_35695[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35696 = state_35529;
state_35529 = G__35696;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = function(state_35529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1.call(this,state_35529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__;
})()
;})(__35685,switch__35011__auto__,c__35123__auto___35688,G__35516_35686,n__31492__auto___35684,jobs,results,process,async))
})();
var state__35125__auto__ = (function (){var statearr_35543 = f__35124__auto__.call(null);
(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___35688);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(__35685,c__35123__auto___35688,G__35516_35686,n__31492__auto___35684,jobs,results,process,async))
);


break;
case "async":
var c__35123__auto___35697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35685,c__35123__auto___35697,G__35516_35686,n__31492__auto___35684,jobs,results,process,async){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (__35685,c__35123__auto___35697,G__35516_35686,n__31492__auto___35684,jobs,results,process,async){
return (function (state_35556){
var state_val_35557 = (state_35556[(1)]);
if((state_val_35557 === (1))){
var state_35556__$1 = state_35556;
var statearr_35558_35698 = state_35556__$1;
(statearr_35558_35698[(2)] = null);

(statearr_35558_35698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (2))){
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(4),jobs);
} else {
if((state_val_35557 === (3))){
var inst_35554 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35556__$1,inst_35554);
} else {
if((state_val_35557 === (4))){
var inst_35546 = (state_35556[(2)]);
var inst_35547 = async.call(null,inst_35546);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35547)){
var statearr_35559_35699 = state_35556__$1;
(statearr_35559_35699[(1)] = (5));

} else {
var statearr_35560_35700 = state_35556__$1;
(statearr_35560_35700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (5))){
var state_35556__$1 = state_35556;
var statearr_35561_35701 = state_35556__$1;
(statearr_35561_35701[(2)] = null);

(statearr_35561_35701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (6))){
var state_35556__$1 = state_35556;
var statearr_35562_35702 = state_35556__$1;
(statearr_35562_35702[(2)] = null);

(statearr_35562_35702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (7))){
var inst_35552 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35563_35703 = state_35556__$1;
(statearr_35563_35703[(2)] = inst_35552);

(statearr_35563_35703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35685,c__35123__auto___35697,G__35516_35686,n__31492__auto___35684,jobs,results,process,async))
;
return ((function (__35685,switch__35011__auto__,c__35123__auto___35697,G__35516_35686,n__31492__auto___35684,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0 = (function (){
var statearr_35567 = [null,null,null,null,null,null,null];
(statearr_35567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__);

(statearr_35567[(1)] = (1));

return statearr_35567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1 = (function (state_35556){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35568){if((e35568 instanceof Object)){
var ex__35015__auto__ = e35568;
var statearr_35569_35704 = state_35556;
(statearr_35569_35704[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35705 = state_35556;
state_35556 = G__35705;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = function(state_35556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1.call(this,state_35556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__;
})()
;})(__35685,switch__35011__auto__,c__35123__auto___35697,G__35516_35686,n__31492__auto___35684,jobs,results,process,async))
})();
var state__35125__auto__ = (function (){var statearr_35570 = f__35124__auto__.call(null);
(statearr_35570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___35697);

return statearr_35570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(__35685,c__35123__auto___35697,G__35516_35686,n__31492__auto___35684,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35706 = (__35685 + (1));
__35685 = G__35706;
continue;
} else {
}
break;
}

var c__35123__auto___35707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___35707,jobs,results,process,async){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___35707,jobs,results,process,async){
return (function (state_35592){
var state_val_35593 = (state_35592[(1)]);
if((state_val_35593 === (1))){
var state_35592__$1 = state_35592;
var statearr_35594_35708 = state_35592__$1;
(statearr_35594_35708[(2)] = null);

(statearr_35594_35708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35593 === (2))){
var state_35592__$1 = state_35592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35592__$1,(4),from);
} else {
if((state_val_35593 === (3))){
var inst_35590 = (state_35592[(2)]);
var state_35592__$1 = state_35592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35592__$1,inst_35590);
} else {
if((state_val_35593 === (4))){
var inst_35573 = (state_35592[(7)]);
var inst_35573__$1 = (state_35592[(2)]);
var inst_35574 = (inst_35573__$1 == null);
var state_35592__$1 = (function (){var statearr_35595 = state_35592;
(statearr_35595[(7)] = inst_35573__$1);

return statearr_35595;
})();
if(cljs.core.truth_(inst_35574)){
var statearr_35596_35709 = state_35592__$1;
(statearr_35596_35709[(1)] = (5));

} else {
var statearr_35597_35710 = state_35592__$1;
(statearr_35597_35710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35593 === (5))){
var inst_35576 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35592__$1 = state_35592;
var statearr_35598_35711 = state_35592__$1;
(statearr_35598_35711[(2)] = inst_35576);

(statearr_35598_35711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35593 === (6))){
var inst_35573 = (state_35592[(7)]);
var inst_35578 = (state_35592[(8)]);
var inst_35578__$1 = cljs.core.async.chan.call(null,(1));
var inst_35579 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35580 = [inst_35573,inst_35578__$1];
var inst_35581 = (new cljs.core.PersistentVector(null,2,(5),inst_35579,inst_35580,null));
var state_35592__$1 = (function (){var statearr_35599 = state_35592;
(statearr_35599[(8)] = inst_35578__$1);

return statearr_35599;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35592__$1,(8),jobs,inst_35581);
} else {
if((state_val_35593 === (7))){
var inst_35588 = (state_35592[(2)]);
var state_35592__$1 = state_35592;
var statearr_35600_35712 = state_35592__$1;
(statearr_35600_35712[(2)] = inst_35588);

(statearr_35600_35712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35593 === (8))){
var inst_35578 = (state_35592[(8)]);
var inst_35583 = (state_35592[(2)]);
var state_35592__$1 = (function (){var statearr_35601 = state_35592;
(statearr_35601[(9)] = inst_35583);

return statearr_35601;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35592__$1,(9),results,inst_35578);
} else {
if((state_val_35593 === (9))){
var inst_35585 = (state_35592[(2)]);
var state_35592__$1 = (function (){var statearr_35602 = state_35592;
(statearr_35602[(10)] = inst_35585);

return statearr_35602;
})();
var statearr_35603_35713 = state_35592__$1;
(statearr_35603_35713[(2)] = null);

(statearr_35603_35713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___35707,jobs,results,process,async))
;
return ((function (switch__35011__auto__,c__35123__auto___35707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0 = (function (){
var statearr_35607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__);

(statearr_35607[(1)] = (1));

return statearr_35607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1 = (function (state_35592){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35608){if((e35608 instanceof Object)){
var ex__35015__auto__ = e35608;
var statearr_35609_35714 = state_35592;
(statearr_35609_35714[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35715 = state_35592;
state_35592 = G__35715;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = function(state_35592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1.call(this,state_35592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___35707,jobs,results,process,async))
})();
var state__35125__auto__ = (function (){var statearr_35610 = f__35124__auto__.call(null);
(statearr_35610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___35707);

return statearr_35610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___35707,jobs,results,process,async))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__,jobs,results,process,async){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__,jobs,results,process,async){
return (function (state_35648){
var state_val_35649 = (state_35648[(1)]);
if((state_val_35649 === (7))){
var inst_35644 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35650_35716 = state_35648__$1;
(statearr_35650_35716[(2)] = inst_35644);

(statearr_35650_35716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (20))){
var state_35648__$1 = state_35648;
var statearr_35651_35717 = state_35648__$1;
(statearr_35651_35717[(2)] = null);

(statearr_35651_35717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (1))){
var state_35648__$1 = state_35648;
var statearr_35652_35718 = state_35648__$1;
(statearr_35652_35718[(2)] = null);

(statearr_35652_35718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (4))){
var inst_35613 = (state_35648[(7)]);
var inst_35613__$1 = (state_35648[(2)]);
var inst_35614 = (inst_35613__$1 == null);
var state_35648__$1 = (function (){var statearr_35653 = state_35648;
(statearr_35653[(7)] = inst_35613__$1);

return statearr_35653;
})();
if(cljs.core.truth_(inst_35614)){
var statearr_35654_35719 = state_35648__$1;
(statearr_35654_35719[(1)] = (5));

} else {
var statearr_35655_35720 = state_35648__$1;
(statearr_35655_35720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (15))){
var inst_35626 = (state_35648[(8)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35648__$1,(18),to,inst_35626);
} else {
if((state_val_35649 === (21))){
var inst_35639 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35656_35721 = state_35648__$1;
(statearr_35656_35721[(2)] = inst_35639);

(statearr_35656_35721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (13))){
var inst_35641 = (state_35648[(2)]);
var state_35648__$1 = (function (){var statearr_35657 = state_35648;
(statearr_35657[(9)] = inst_35641);

return statearr_35657;
})();
var statearr_35658_35722 = state_35648__$1;
(statearr_35658_35722[(2)] = null);

(statearr_35658_35722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (6))){
var inst_35613 = (state_35648[(7)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35648__$1,(11),inst_35613);
} else {
if((state_val_35649 === (17))){
var inst_35634 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
if(cljs.core.truth_(inst_35634)){
var statearr_35659_35723 = state_35648__$1;
(statearr_35659_35723[(1)] = (19));

} else {
var statearr_35660_35724 = state_35648__$1;
(statearr_35660_35724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (3))){
var inst_35646 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35648__$1,inst_35646);
} else {
if((state_val_35649 === (12))){
var inst_35623 = (state_35648[(10)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35648__$1,(14),inst_35623);
} else {
if((state_val_35649 === (2))){
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35648__$1,(4),results);
} else {
if((state_val_35649 === (19))){
var state_35648__$1 = state_35648;
var statearr_35661_35725 = state_35648__$1;
(statearr_35661_35725[(2)] = null);

(statearr_35661_35725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (11))){
var inst_35623 = (state_35648[(2)]);
var state_35648__$1 = (function (){var statearr_35662 = state_35648;
(statearr_35662[(10)] = inst_35623);

return statearr_35662;
})();
var statearr_35663_35726 = state_35648__$1;
(statearr_35663_35726[(2)] = null);

(statearr_35663_35726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (9))){
var state_35648__$1 = state_35648;
var statearr_35664_35727 = state_35648__$1;
(statearr_35664_35727[(2)] = null);

(statearr_35664_35727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (5))){
var state_35648__$1 = state_35648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35665_35728 = state_35648__$1;
(statearr_35665_35728[(1)] = (8));

} else {
var statearr_35666_35729 = state_35648__$1;
(statearr_35666_35729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (14))){
var inst_35626 = (state_35648[(8)]);
var inst_35628 = (state_35648[(11)]);
var inst_35626__$1 = (state_35648[(2)]);
var inst_35627 = (inst_35626__$1 == null);
var inst_35628__$1 = cljs.core.not.call(null,inst_35627);
var state_35648__$1 = (function (){var statearr_35667 = state_35648;
(statearr_35667[(8)] = inst_35626__$1);

(statearr_35667[(11)] = inst_35628__$1);

return statearr_35667;
})();
if(inst_35628__$1){
var statearr_35668_35730 = state_35648__$1;
(statearr_35668_35730[(1)] = (15));

} else {
var statearr_35669_35731 = state_35648__$1;
(statearr_35669_35731[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (16))){
var inst_35628 = (state_35648[(11)]);
var state_35648__$1 = state_35648;
var statearr_35670_35732 = state_35648__$1;
(statearr_35670_35732[(2)] = inst_35628);

(statearr_35670_35732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (10))){
var inst_35620 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35671_35733 = state_35648__$1;
(statearr_35671_35733[(2)] = inst_35620);

(statearr_35671_35733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (18))){
var inst_35631 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35672_35734 = state_35648__$1;
(statearr_35672_35734[(2)] = inst_35631);

(statearr_35672_35734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (8))){
var inst_35617 = cljs.core.async.close_BANG_.call(null,to);
var state_35648__$1 = state_35648;
var statearr_35673_35735 = state_35648__$1;
(statearr_35673_35735[(2)] = inst_35617);

(statearr_35673_35735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto__,jobs,results,process,async))
;
return ((function (switch__35011__auto__,c__35123__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0 = (function (){
var statearr_35677 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__);

(statearr_35677[(1)] = (1));

return statearr_35677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1 = (function (state_35648){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35678){if((e35678 instanceof Object)){
var ex__35015__auto__ = e35678;
var statearr_35679_35736 = state_35648;
(statearr_35679_35736[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35737 = state_35648;
state_35648 = G__35737;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__ = function(state_35648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1.call(this,state_35648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__,jobs,results,process,async))
})();
var state__35125__auto__ = (function (){var statearr_35680 = f__35124__auto__.call(null);
(statearr_35680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_35680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__,jobs,results,process,async))
);

return c__35123__auto__;
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
var args35738 = [];
var len__31652__auto___35741 = arguments.length;
var i__31653__auto___35742 = (0);
while(true){
if((i__31653__auto___35742 < len__31652__auto___35741)){
args35738.push((arguments[i__31653__auto___35742]));

var G__35743 = (i__31653__auto___35742 + (1));
i__31653__auto___35742 = G__35743;
continue;
} else {
}
break;
}

var G__35740 = args35738.length;
switch (G__35740) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35738.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args35745 = [];
var len__31652__auto___35748 = arguments.length;
var i__31653__auto___35749 = (0);
while(true){
if((i__31653__auto___35749 < len__31652__auto___35748)){
args35745.push((arguments[i__31653__auto___35749]));

var G__35750 = (i__31653__auto___35749 + (1));
i__31653__auto___35749 = G__35750;
continue;
} else {
}
break;
}

var G__35747 = args35745.length;
switch (G__35747) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35745.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args35752 = [];
var len__31652__auto___35805 = arguments.length;
var i__31653__auto___35806 = (0);
while(true){
if((i__31653__auto___35806 < len__31652__auto___35805)){
args35752.push((arguments[i__31653__auto___35806]));

var G__35807 = (i__31653__auto___35806 + (1));
i__31653__auto___35806 = G__35807;
continue;
} else {
}
break;
}

var G__35754 = args35752.length;
switch (G__35754) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35752.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35123__auto___35809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___35809,tc,fc){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___35809,tc,fc){
return (function (state_35780){
var state_val_35781 = (state_35780[(1)]);
if((state_val_35781 === (7))){
var inst_35776 = (state_35780[(2)]);
var state_35780__$1 = state_35780;
var statearr_35782_35810 = state_35780__$1;
(statearr_35782_35810[(2)] = inst_35776);

(statearr_35782_35810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (1))){
var state_35780__$1 = state_35780;
var statearr_35783_35811 = state_35780__$1;
(statearr_35783_35811[(2)] = null);

(statearr_35783_35811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (4))){
var inst_35757 = (state_35780[(7)]);
var inst_35757__$1 = (state_35780[(2)]);
var inst_35758 = (inst_35757__$1 == null);
var state_35780__$1 = (function (){var statearr_35784 = state_35780;
(statearr_35784[(7)] = inst_35757__$1);

return statearr_35784;
})();
if(cljs.core.truth_(inst_35758)){
var statearr_35785_35812 = state_35780__$1;
(statearr_35785_35812[(1)] = (5));

} else {
var statearr_35786_35813 = state_35780__$1;
(statearr_35786_35813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (13))){
var state_35780__$1 = state_35780;
var statearr_35787_35814 = state_35780__$1;
(statearr_35787_35814[(2)] = null);

(statearr_35787_35814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (6))){
var inst_35757 = (state_35780[(7)]);
var inst_35763 = p.call(null,inst_35757);
var state_35780__$1 = state_35780;
if(cljs.core.truth_(inst_35763)){
var statearr_35788_35815 = state_35780__$1;
(statearr_35788_35815[(1)] = (9));

} else {
var statearr_35789_35816 = state_35780__$1;
(statearr_35789_35816[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (3))){
var inst_35778 = (state_35780[(2)]);
var state_35780__$1 = state_35780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35780__$1,inst_35778);
} else {
if((state_val_35781 === (12))){
var state_35780__$1 = state_35780;
var statearr_35790_35817 = state_35780__$1;
(statearr_35790_35817[(2)] = null);

(statearr_35790_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (2))){
var state_35780__$1 = state_35780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35780__$1,(4),ch);
} else {
if((state_val_35781 === (11))){
var inst_35757 = (state_35780[(7)]);
var inst_35767 = (state_35780[(2)]);
var state_35780__$1 = state_35780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35780__$1,(8),inst_35767,inst_35757);
} else {
if((state_val_35781 === (9))){
var state_35780__$1 = state_35780;
var statearr_35791_35818 = state_35780__$1;
(statearr_35791_35818[(2)] = tc);

(statearr_35791_35818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (5))){
var inst_35760 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35761 = cljs.core.async.close_BANG_.call(null,fc);
var state_35780__$1 = (function (){var statearr_35792 = state_35780;
(statearr_35792[(8)] = inst_35760);

return statearr_35792;
})();
var statearr_35793_35819 = state_35780__$1;
(statearr_35793_35819[(2)] = inst_35761);

(statearr_35793_35819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (14))){
var inst_35774 = (state_35780[(2)]);
var state_35780__$1 = state_35780;
var statearr_35794_35820 = state_35780__$1;
(statearr_35794_35820[(2)] = inst_35774);

(statearr_35794_35820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (10))){
var state_35780__$1 = state_35780;
var statearr_35795_35821 = state_35780__$1;
(statearr_35795_35821[(2)] = fc);

(statearr_35795_35821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (8))){
var inst_35769 = (state_35780[(2)]);
var state_35780__$1 = state_35780;
if(cljs.core.truth_(inst_35769)){
var statearr_35796_35822 = state_35780__$1;
(statearr_35796_35822[(1)] = (12));

} else {
var statearr_35797_35823 = state_35780__$1;
(statearr_35797_35823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___35809,tc,fc))
;
return ((function (switch__35011__auto__,c__35123__auto___35809,tc,fc){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_35801 = [null,null,null,null,null,null,null,null,null];
(statearr_35801[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_35801[(1)] = (1));

return statearr_35801;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_35780){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35802){if((e35802 instanceof Object)){
var ex__35015__auto__ = e35802;
var statearr_35803_35824 = state_35780;
(statearr_35803_35824[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35825 = state_35780;
state_35780 = G__35825;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_35780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_35780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___35809,tc,fc))
})();
var state__35125__auto__ = (function (){var statearr_35804 = f__35124__auto__.call(null);
(statearr_35804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___35809);

return statearr_35804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___35809,tc,fc))
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
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_35889){
var state_val_35890 = (state_35889[(1)]);
if((state_val_35890 === (7))){
var inst_35885 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35891_35912 = state_35889__$1;
(statearr_35891_35912[(2)] = inst_35885);

(statearr_35891_35912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (1))){
var inst_35869 = init;
var state_35889__$1 = (function (){var statearr_35892 = state_35889;
(statearr_35892[(7)] = inst_35869);

return statearr_35892;
})();
var statearr_35893_35913 = state_35889__$1;
(statearr_35893_35913[(2)] = null);

(statearr_35893_35913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (4))){
var inst_35872 = (state_35889[(8)]);
var inst_35872__$1 = (state_35889[(2)]);
var inst_35873 = (inst_35872__$1 == null);
var state_35889__$1 = (function (){var statearr_35894 = state_35889;
(statearr_35894[(8)] = inst_35872__$1);

return statearr_35894;
})();
if(cljs.core.truth_(inst_35873)){
var statearr_35895_35914 = state_35889__$1;
(statearr_35895_35914[(1)] = (5));

} else {
var statearr_35896_35915 = state_35889__$1;
(statearr_35896_35915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (6))){
var inst_35876 = (state_35889[(9)]);
var inst_35872 = (state_35889[(8)]);
var inst_35869 = (state_35889[(7)]);
var inst_35876__$1 = f.call(null,inst_35869,inst_35872);
var inst_35877 = cljs.core.reduced_QMARK_.call(null,inst_35876__$1);
var state_35889__$1 = (function (){var statearr_35897 = state_35889;
(statearr_35897[(9)] = inst_35876__$1);

return statearr_35897;
})();
if(inst_35877){
var statearr_35898_35916 = state_35889__$1;
(statearr_35898_35916[(1)] = (8));

} else {
var statearr_35899_35917 = state_35889__$1;
(statearr_35899_35917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (3))){
var inst_35887 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35889__$1,inst_35887);
} else {
if((state_val_35890 === (2))){
var state_35889__$1 = state_35889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35889__$1,(4),ch);
} else {
if((state_val_35890 === (9))){
var inst_35876 = (state_35889[(9)]);
var inst_35869 = inst_35876;
var state_35889__$1 = (function (){var statearr_35900 = state_35889;
(statearr_35900[(7)] = inst_35869);

return statearr_35900;
})();
var statearr_35901_35918 = state_35889__$1;
(statearr_35901_35918[(2)] = null);

(statearr_35901_35918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (5))){
var inst_35869 = (state_35889[(7)]);
var state_35889__$1 = state_35889;
var statearr_35902_35919 = state_35889__$1;
(statearr_35902_35919[(2)] = inst_35869);

(statearr_35902_35919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (10))){
var inst_35883 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35903_35920 = state_35889__$1;
(statearr_35903_35920[(2)] = inst_35883);

(statearr_35903_35920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (8))){
var inst_35876 = (state_35889[(9)]);
var inst_35879 = cljs.core.deref.call(null,inst_35876);
var state_35889__$1 = state_35889;
var statearr_35904_35921 = state_35889__$1;
(statearr_35904_35921[(2)] = inst_35879);

(statearr_35904_35921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35012__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35012__auto____0 = (function (){
var statearr_35908 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35908[(0)] = cljs$core$async$reduce_$_state_machine__35012__auto__);

(statearr_35908[(1)] = (1));

return statearr_35908;
});
var cljs$core$async$reduce_$_state_machine__35012__auto____1 = (function (state_35889){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35909){if((e35909 instanceof Object)){
var ex__35015__auto__ = e35909;
var statearr_35910_35922 = state_35889;
(statearr_35910_35922[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35923 = state_35889;
state_35889 = G__35923;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35012__auto__ = function(state_35889){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35012__auto____1.call(this,state_35889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35012__auto____0;
cljs$core$async$reduce_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35012__auto____1;
return cljs$core$async$reduce_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_35911 = f__35124__auto__.call(null);
(statearr_35911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_35911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
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
var args35924 = [];
var len__31652__auto___35976 = arguments.length;
var i__31653__auto___35977 = (0);
while(true){
if((i__31653__auto___35977 < len__31652__auto___35976)){
args35924.push((arguments[i__31653__auto___35977]));

var G__35978 = (i__31653__auto___35977 + (1));
i__31653__auto___35977 = G__35978;
continue;
} else {
}
break;
}

var G__35926 = args35924.length;
switch (G__35926) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35924.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_35951){
var state_val_35952 = (state_35951[(1)]);
if((state_val_35952 === (7))){
var inst_35933 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_35953_35980 = state_35951__$1;
(statearr_35953_35980[(2)] = inst_35933);

(statearr_35953_35980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (1))){
var inst_35927 = cljs.core.seq.call(null,coll);
var inst_35928 = inst_35927;
var state_35951__$1 = (function (){var statearr_35954 = state_35951;
(statearr_35954[(7)] = inst_35928);

return statearr_35954;
})();
var statearr_35955_35981 = state_35951__$1;
(statearr_35955_35981[(2)] = null);

(statearr_35955_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (4))){
var inst_35928 = (state_35951[(7)]);
var inst_35931 = cljs.core.first.call(null,inst_35928);
var state_35951__$1 = state_35951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35951__$1,(7),ch,inst_35931);
} else {
if((state_val_35952 === (13))){
var inst_35945 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_35956_35982 = state_35951__$1;
(statearr_35956_35982[(2)] = inst_35945);

(statearr_35956_35982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (6))){
var inst_35936 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
if(cljs.core.truth_(inst_35936)){
var statearr_35957_35983 = state_35951__$1;
(statearr_35957_35983[(1)] = (8));

} else {
var statearr_35958_35984 = state_35951__$1;
(statearr_35958_35984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (3))){
var inst_35949 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35951__$1,inst_35949);
} else {
if((state_val_35952 === (12))){
var state_35951__$1 = state_35951;
var statearr_35959_35985 = state_35951__$1;
(statearr_35959_35985[(2)] = null);

(statearr_35959_35985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (2))){
var inst_35928 = (state_35951[(7)]);
var state_35951__$1 = state_35951;
if(cljs.core.truth_(inst_35928)){
var statearr_35960_35986 = state_35951__$1;
(statearr_35960_35986[(1)] = (4));

} else {
var statearr_35961_35987 = state_35951__$1;
(statearr_35961_35987[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (11))){
var inst_35942 = cljs.core.async.close_BANG_.call(null,ch);
var state_35951__$1 = state_35951;
var statearr_35962_35988 = state_35951__$1;
(statearr_35962_35988[(2)] = inst_35942);

(statearr_35962_35988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (9))){
var state_35951__$1 = state_35951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35963_35989 = state_35951__$1;
(statearr_35963_35989[(1)] = (11));

} else {
var statearr_35964_35990 = state_35951__$1;
(statearr_35964_35990[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (5))){
var inst_35928 = (state_35951[(7)]);
var state_35951__$1 = state_35951;
var statearr_35965_35991 = state_35951__$1;
(statearr_35965_35991[(2)] = inst_35928);

(statearr_35965_35991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (10))){
var inst_35947 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_35966_35992 = state_35951__$1;
(statearr_35966_35992[(2)] = inst_35947);

(statearr_35966_35992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (8))){
var inst_35928 = (state_35951[(7)]);
var inst_35938 = cljs.core.next.call(null,inst_35928);
var inst_35928__$1 = inst_35938;
var state_35951__$1 = (function (){var statearr_35967 = state_35951;
(statearr_35967[(7)] = inst_35928__$1);

return statearr_35967;
})();
var statearr_35968_35993 = state_35951__$1;
(statearr_35968_35993[(2)] = null);

(statearr_35968_35993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_35951){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_35951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e35973){if((e35973 instanceof Object)){
var ex__35015__auto__ = e35973;
var statearr_35974_35994 = state_35951;
(statearr_35974_35994[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35995 = state_35951;
state_35951 = G__35995;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_35951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_35951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_35975 = f__35124__auto__.call(null);
(statearr_35975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_35975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__31240__auto__ = (((_ == null))?null:_);
var m__31241__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,_);
} else {
var m__31241__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31241__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m,ch);
} else {
var m__31241__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m);
} else {
var m__31241__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36221 = (function (mult,ch,cs,meta36222){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36222 = meta36222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36223,meta36222__$1){
var self__ = this;
var _36223__$1 = this;
return (new cljs.core.async.t_cljs$core$async36221(self__.mult,self__.ch,self__.cs,meta36222__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36223){
var self__ = this;
var _36223__$1 = this;
return self__.meta36222;
});})(cs))
;

cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36221.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36222","meta36222",1908857378,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36221";

cljs.core.async.t_cljs$core$async36221.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async36221");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36221 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36221(mult__$1,ch__$1,cs__$1,meta36222){
return (new cljs.core.async.t_cljs$core$async36221(mult__$1,ch__$1,cs__$1,meta36222));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36221(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35123__auto___36446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___36446,cs,m,dchan,dctr,done){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___36446,cs,m,dchan,dctr,done){
return (function (state_36358){
var state_val_36359 = (state_36358[(1)]);
if((state_val_36359 === (7))){
var inst_36354 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36360_36447 = state_36358__$1;
(statearr_36360_36447[(2)] = inst_36354);

(statearr_36360_36447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (20))){
var inst_36257 = (state_36358[(7)]);
var inst_36269 = cljs.core.first.call(null,inst_36257);
var inst_36270 = cljs.core.nth.call(null,inst_36269,(0),null);
var inst_36271 = cljs.core.nth.call(null,inst_36269,(1),null);
var state_36358__$1 = (function (){var statearr_36361 = state_36358;
(statearr_36361[(8)] = inst_36270);

return statearr_36361;
})();
if(cljs.core.truth_(inst_36271)){
var statearr_36362_36448 = state_36358__$1;
(statearr_36362_36448[(1)] = (22));

} else {
var statearr_36363_36449 = state_36358__$1;
(statearr_36363_36449[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (27))){
var inst_36306 = (state_36358[(9)]);
var inst_36226 = (state_36358[(10)]);
var inst_36301 = (state_36358[(11)]);
var inst_36299 = (state_36358[(12)]);
var inst_36306__$1 = cljs.core._nth.call(null,inst_36299,inst_36301);
var inst_36307 = cljs.core.async.put_BANG_.call(null,inst_36306__$1,inst_36226,done);
var state_36358__$1 = (function (){var statearr_36364 = state_36358;
(statearr_36364[(9)] = inst_36306__$1);

return statearr_36364;
})();
if(cljs.core.truth_(inst_36307)){
var statearr_36365_36450 = state_36358__$1;
(statearr_36365_36450[(1)] = (30));

} else {
var statearr_36366_36451 = state_36358__$1;
(statearr_36366_36451[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (1))){
var state_36358__$1 = state_36358;
var statearr_36367_36452 = state_36358__$1;
(statearr_36367_36452[(2)] = null);

(statearr_36367_36452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (24))){
var inst_36257 = (state_36358[(7)]);
var inst_36276 = (state_36358[(2)]);
var inst_36277 = cljs.core.next.call(null,inst_36257);
var inst_36235 = inst_36277;
var inst_36236 = null;
var inst_36237 = (0);
var inst_36238 = (0);
var state_36358__$1 = (function (){var statearr_36368 = state_36358;
(statearr_36368[(13)] = inst_36237);

(statearr_36368[(14)] = inst_36235);

(statearr_36368[(15)] = inst_36276);

(statearr_36368[(16)] = inst_36238);

(statearr_36368[(17)] = inst_36236);

return statearr_36368;
})();
var statearr_36369_36453 = state_36358__$1;
(statearr_36369_36453[(2)] = null);

(statearr_36369_36453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (39))){
var state_36358__$1 = state_36358;
var statearr_36373_36454 = state_36358__$1;
(statearr_36373_36454[(2)] = null);

(statearr_36373_36454[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (4))){
var inst_36226 = (state_36358[(10)]);
var inst_36226__$1 = (state_36358[(2)]);
var inst_36227 = (inst_36226__$1 == null);
var state_36358__$1 = (function (){var statearr_36374 = state_36358;
(statearr_36374[(10)] = inst_36226__$1);

return statearr_36374;
})();
if(cljs.core.truth_(inst_36227)){
var statearr_36375_36455 = state_36358__$1;
(statearr_36375_36455[(1)] = (5));

} else {
var statearr_36376_36456 = state_36358__$1;
(statearr_36376_36456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (15))){
var inst_36237 = (state_36358[(13)]);
var inst_36235 = (state_36358[(14)]);
var inst_36238 = (state_36358[(16)]);
var inst_36236 = (state_36358[(17)]);
var inst_36253 = (state_36358[(2)]);
var inst_36254 = (inst_36238 + (1));
var tmp36370 = inst_36237;
var tmp36371 = inst_36235;
var tmp36372 = inst_36236;
var inst_36235__$1 = tmp36371;
var inst_36236__$1 = tmp36372;
var inst_36237__$1 = tmp36370;
var inst_36238__$1 = inst_36254;
var state_36358__$1 = (function (){var statearr_36377 = state_36358;
(statearr_36377[(13)] = inst_36237__$1);

(statearr_36377[(18)] = inst_36253);

(statearr_36377[(14)] = inst_36235__$1);

(statearr_36377[(16)] = inst_36238__$1);

(statearr_36377[(17)] = inst_36236__$1);

return statearr_36377;
})();
var statearr_36378_36457 = state_36358__$1;
(statearr_36378_36457[(2)] = null);

(statearr_36378_36457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (21))){
var inst_36280 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36382_36458 = state_36358__$1;
(statearr_36382_36458[(2)] = inst_36280);

(statearr_36382_36458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (31))){
var inst_36306 = (state_36358[(9)]);
var inst_36310 = done.call(null,null);
var inst_36311 = cljs.core.async.untap_STAR_.call(null,m,inst_36306);
var state_36358__$1 = (function (){var statearr_36383 = state_36358;
(statearr_36383[(19)] = inst_36310);

return statearr_36383;
})();
var statearr_36384_36459 = state_36358__$1;
(statearr_36384_36459[(2)] = inst_36311);

(statearr_36384_36459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (32))){
var inst_36298 = (state_36358[(20)]);
var inst_36301 = (state_36358[(11)]);
var inst_36299 = (state_36358[(12)]);
var inst_36300 = (state_36358[(21)]);
var inst_36313 = (state_36358[(2)]);
var inst_36314 = (inst_36301 + (1));
var tmp36379 = inst_36298;
var tmp36380 = inst_36299;
var tmp36381 = inst_36300;
var inst_36298__$1 = tmp36379;
var inst_36299__$1 = tmp36380;
var inst_36300__$1 = tmp36381;
var inst_36301__$1 = inst_36314;
var state_36358__$1 = (function (){var statearr_36385 = state_36358;
(statearr_36385[(20)] = inst_36298__$1);

(statearr_36385[(22)] = inst_36313);

(statearr_36385[(11)] = inst_36301__$1);

(statearr_36385[(12)] = inst_36299__$1);

(statearr_36385[(21)] = inst_36300__$1);

return statearr_36385;
})();
var statearr_36386_36460 = state_36358__$1;
(statearr_36386_36460[(2)] = null);

(statearr_36386_36460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (40))){
var inst_36326 = (state_36358[(23)]);
var inst_36330 = done.call(null,null);
var inst_36331 = cljs.core.async.untap_STAR_.call(null,m,inst_36326);
var state_36358__$1 = (function (){var statearr_36387 = state_36358;
(statearr_36387[(24)] = inst_36330);

return statearr_36387;
})();
var statearr_36388_36461 = state_36358__$1;
(statearr_36388_36461[(2)] = inst_36331);

(statearr_36388_36461[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (33))){
var inst_36317 = (state_36358[(25)]);
var inst_36319 = cljs.core.chunked_seq_QMARK_.call(null,inst_36317);
var state_36358__$1 = state_36358;
if(inst_36319){
var statearr_36389_36462 = state_36358__$1;
(statearr_36389_36462[(1)] = (36));

} else {
var statearr_36390_36463 = state_36358__$1;
(statearr_36390_36463[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (13))){
var inst_36247 = (state_36358[(26)]);
var inst_36250 = cljs.core.async.close_BANG_.call(null,inst_36247);
var state_36358__$1 = state_36358;
var statearr_36391_36464 = state_36358__$1;
(statearr_36391_36464[(2)] = inst_36250);

(statearr_36391_36464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (22))){
var inst_36270 = (state_36358[(8)]);
var inst_36273 = cljs.core.async.close_BANG_.call(null,inst_36270);
var state_36358__$1 = state_36358;
var statearr_36392_36465 = state_36358__$1;
(statearr_36392_36465[(2)] = inst_36273);

(statearr_36392_36465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (36))){
var inst_36317 = (state_36358[(25)]);
var inst_36321 = cljs.core.chunk_first.call(null,inst_36317);
var inst_36322 = cljs.core.chunk_rest.call(null,inst_36317);
var inst_36323 = cljs.core.count.call(null,inst_36321);
var inst_36298 = inst_36322;
var inst_36299 = inst_36321;
var inst_36300 = inst_36323;
var inst_36301 = (0);
var state_36358__$1 = (function (){var statearr_36393 = state_36358;
(statearr_36393[(20)] = inst_36298);

(statearr_36393[(11)] = inst_36301);

(statearr_36393[(12)] = inst_36299);

(statearr_36393[(21)] = inst_36300);

return statearr_36393;
})();
var statearr_36394_36466 = state_36358__$1;
(statearr_36394_36466[(2)] = null);

(statearr_36394_36466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (41))){
var inst_36317 = (state_36358[(25)]);
var inst_36333 = (state_36358[(2)]);
var inst_36334 = cljs.core.next.call(null,inst_36317);
var inst_36298 = inst_36334;
var inst_36299 = null;
var inst_36300 = (0);
var inst_36301 = (0);
var state_36358__$1 = (function (){var statearr_36395 = state_36358;
(statearr_36395[(20)] = inst_36298);

(statearr_36395[(11)] = inst_36301);

(statearr_36395[(27)] = inst_36333);

(statearr_36395[(12)] = inst_36299);

(statearr_36395[(21)] = inst_36300);

return statearr_36395;
})();
var statearr_36396_36467 = state_36358__$1;
(statearr_36396_36467[(2)] = null);

(statearr_36396_36467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (43))){
var state_36358__$1 = state_36358;
var statearr_36397_36468 = state_36358__$1;
(statearr_36397_36468[(2)] = null);

(statearr_36397_36468[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (29))){
var inst_36342 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36398_36469 = state_36358__$1;
(statearr_36398_36469[(2)] = inst_36342);

(statearr_36398_36469[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (44))){
var inst_36351 = (state_36358[(2)]);
var state_36358__$1 = (function (){var statearr_36399 = state_36358;
(statearr_36399[(28)] = inst_36351);

return statearr_36399;
})();
var statearr_36400_36470 = state_36358__$1;
(statearr_36400_36470[(2)] = null);

(statearr_36400_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (6))){
var inst_36290 = (state_36358[(29)]);
var inst_36289 = cljs.core.deref.call(null,cs);
var inst_36290__$1 = cljs.core.keys.call(null,inst_36289);
var inst_36291 = cljs.core.count.call(null,inst_36290__$1);
var inst_36292 = cljs.core.reset_BANG_.call(null,dctr,inst_36291);
var inst_36297 = cljs.core.seq.call(null,inst_36290__$1);
var inst_36298 = inst_36297;
var inst_36299 = null;
var inst_36300 = (0);
var inst_36301 = (0);
var state_36358__$1 = (function (){var statearr_36401 = state_36358;
(statearr_36401[(20)] = inst_36298);

(statearr_36401[(29)] = inst_36290__$1);

(statearr_36401[(30)] = inst_36292);

(statearr_36401[(11)] = inst_36301);

(statearr_36401[(12)] = inst_36299);

(statearr_36401[(21)] = inst_36300);

return statearr_36401;
})();
var statearr_36402_36471 = state_36358__$1;
(statearr_36402_36471[(2)] = null);

(statearr_36402_36471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (28))){
var inst_36298 = (state_36358[(20)]);
var inst_36317 = (state_36358[(25)]);
var inst_36317__$1 = cljs.core.seq.call(null,inst_36298);
var state_36358__$1 = (function (){var statearr_36403 = state_36358;
(statearr_36403[(25)] = inst_36317__$1);

return statearr_36403;
})();
if(inst_36317__$1){
var statearr_36404_36472 = state_36358__$1;
(statearr_36404_36472[(1)] = (33));

} else {
var statearr_36405_36473 = state_36358__$1;
(statearr_36405_36473[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (25))){
var inst_36301 = (state_36358[(11)]);
var inst_36300 = (state_36358[(21)]);
var inst_36303 = (inst_36301 < inst_36300);
var inst_36304 = inst_36303;
var state_36358__$1 = state_36358;
if(cljs.core.truth_(inst_36304)){
var statearr_36406_36474 = state_36358__$1;
(statearr_36406_36474[(1)] = (27));

} else {
var statearr_36407_36475 = state_36358__$1;
(statearr_36407_36475[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (34))){
var state_36358__$1 = state_36358;
var statearr_36408_36476 = state_36358__$1;
(statearr_36408_36476[(2)] = null);

(statearr_36408_36476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (17))){
var state_36358__$1 = state_36358;
var statearr_36409_36477 = state_36358__$1;
(statearr_36409_36477[(2)] = null);

(statearr_36409_36477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (3))){
var inst_36356 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36358__$1,inst_36356);
} else {
if((state_val_36359 === (12))){
var inst_36285 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36410_36478 = state_36358__$1;
(statearr_36410_36478[(2)] = inst_36285);

(statearr_36410_36478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (2))){
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36358__$1,(4),ch);
} else {
if((state_val_36359 === (23))){
var state_36358__$1 = state_36358;
var statearr_36411_36479 = state_36358__$1;
(statearr_36411_36479[(2)] = null);

(statearr_36411_36479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (35))){
var inst_36340 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36412_36480 = state_36358__$1;
(statearr_36412_36480[(2)] = inst_36340);

(statearr_36412_36480[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (19))){
var inst_36257 = (state_36358[(7)]);
var inst_36261 = cljs.core.chunk_first.call(null,inst_36257);
var inst_36262 = cljs.core.chunk_rest.call(null,inst_36257);
var inst_36263 = cljs.core.count.call(null,inst_36261);
var inst_36235 = inst_36262;
var inst_36236 = inst_36261;
var inst_36237 = inst_36263;
var inst_36238 = (0);
var state_36358__$1 = (function (){var statearr_36413 = state_36358;
(statearr_36413[(13)] = inst_36237);

(statearr_36413[(14)] = inst_36235);

(statearr_36413[(16)] = inst_36238);

(statearr_36413[(17)] = inst_36236);

return statearr_36413;
})();
var statearr_36414_36481 = state_36358__$1;
(statearr_36414_36481[(2)] = null);

(statearr_36414_36481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (11))){
var inst_36235 = (state_36358[(14)]);
var inst_36257 = (state_36358[(7)]);
var inst_36257__$1 = cljs.core.seq.call(null,inst_36235);
var state_36358__$1 = (function (){var statearr_36415 = state_36358;
(statearr_36415[(7)] = inst_36257__$1);

return statearr_36415;
})();
if(inst_36257__$1){
var statearr_36416_36482 = state_36358__$1;
(statearr_36416_36482[(1)] = (16));

} else {
var statearr_36417_36483 = state_36358__$1;
(statearr_36417_36483[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (9))){
var inst_36287 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36418_36484 = state_36358__$1;
(statearr_36418_36484[(2)] = inst_36287);

(statearr_36418_36484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (5))){
var inst_36233 = cljs.core.deref.call(null,cs);
var inst_36234 = cljs.core.seq.call(null,inst_36233);
var inst_36235 = inst_36234;
var inst_36236 = null;
var inst_36237 = (0);
var inst_36238 = (0);
var state_36358__$1 = (function (){var statearr_36419 = state_36358;
(statearr_36419[(13)] = inst_36237);

(statearr_36419[(14)] = inst_36235);

(statearr_36419[(16)] = inst_36238);

(statearr_36419[(17)] = inst_36236);

return statearr_36419;
})();
var statearr_36420_36485 = state_36358__$1;
(statearr_36420_36485[(2)] = null);

(statearr_36420_36485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (14))){
var state_36358__$1 = state_36358;
var statearr_36421_36486 = state_36358__$1;
(statearr_36421_36486[(2)] = null);

(statearr_36421_36486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (45))){
var inst_36348 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36422_36487 = state_36358__$1;
(statearr_36422_36487[(2)] = inst_36348);

(statearr_36422_36487[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (26))){
var inst_36290 = (state_36358[(29)]);
var inst_36344 = (state_36358[(2)]);
var inst_36345 = cljs.core.seq.call(null,inst_36290);
var state_36358__$1 = (function (){var statearr_36423 = state_36358;
(statearr_36423[(31)] = inst_36344);

return statearr_36423;
})();
if(inst_36345){
var statearr_36424_36488 = state_36358__$1;
(statearr_36424_36488[(1)] = (42));

} else {
var statearr_36425_36489 = state_36358__$1;
(statearr_36425_36489[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (16))){
var inst_36257 = (state_36358[(7)]);
var inst_36259 = cljs.core.chunked_seq_QMARK_.call(null,inst_36257);
var state_36358__$1 = state_36358;
if(inst_36259){
var statearr_36426_36490 = state_36358__$1;
(statearr_36426_36490[(1)] = (19));

} else {
var statearr_36427_36491 = state_36358__$1;
(statearr_36427_36491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (38))){
var inst_36337 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36428_36492 = state_36358__$1;
(statearr_36428_36492[(2)] = inst_36337);

(statearr_36428_36492[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (30))){
var state_36358__$1 = state_36358;
var statearr_36429_36493 = state_36358__$1;
(statearr_36429_36493[(2)] = null);

(statearr_36429_36493[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (10))){
var inst_36238 = (state_36358[(16)]);
var inst_36236 = (state_36358[(17)]);
var inst_36246 = cljs.core._nth.call(null,inst_36236,inst_36238);
var inst_36247 = cljs.core.nth.call(null,inst_36246,(0),null);
var inst_36248 = cljs.core.nth.call(null,inst_36246,(1),null);
var state_36358__$1 = (function (){var statearr_36430 = state_36358;
(statearr_36430[(26)] = inst_36247);

return statearr_36430;
})();
if(cljs.core.truth_(inst_36248)){
var statearr_36431_36494 = state_36358__$1;
(statearr_36431_36494[(1)] = (13));

} else {
var statearr_36432_36495 = state_36358__$1;
(statearr_36432_36495[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (18))){
var inst_36283 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36433_36496 = state_36358__$1;
(statearr_36433_36496[(2)] = inst_36283);

(statearr_36433_36496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (42))){
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36358__$1,(45),dchan);
} else {
if((state_val_36359 === (37))){
var inst_36326 = (state_36358[(23)]);
var inst_36226 = (state_36358[(10)]);
var inst_36317 = (state_36358[(25)]);
var inst_36326__$1 = cljs.core.first.call(null,inst_36317);
var inst_36327 = cljs.core.async.put_BANG_.call(null,inst_36326__$1,inst_36226,done);
var state_36358__$1 = (function (){var statearr_36434 = state_36358;
(statearr_36434[(23)] = inst_36326__$1);

return statearr_36434;
})();
if(cljs.core.truth_(inst_36327)){
var statearr_36435_36497 = state_36358__$1;
(statearr_36435_36497[(1)] = (39));

} else {
var statearr_36436_36498 = state_36358__$1;
(statearr_36436_36498[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (8))){
var inst_36237 = (state_36358[(13)]);
var inst_36238 = (state_36358[(16)]);
var inst_36240 = (inst_36238 < inst_36237);
var inst_36241 = inst_36240;
var state_36358__$1 = state_36358;
if(cljs.core.truth_(inst_36241)){
var statearr_36437_36499 = state_36358__$1;
(statearr_36437_36499[(1)] = (10));

} else {
var statearr_36438_36500 = state_36358__$1;
(statearr_36438_36500[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___36446,cs,m,dchan,dctr,done))
;
return ((function (switch__35011__auto__,c__35123__auto___36446,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35012__auto__ = null;
var cljs$core$async$mult_$_state_machine__35012__auto____0 = (function (){
var statearr_36442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36442[(0)] = cljs$core$async$mult_$_state_machine__35012__auto__);

(statearr_36442[(1)] = (1));

return statearr_36442;
});
var cljs$core$async$mult_$_state_machine__35012__auto____1 = (function (state_36358){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_36358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e36443){if((e36443 instanceof Object)){
var ex__35015__auto__ = e36443;
var statearr_36444_36501 = state_36358;
(statearr_36444_36501[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36502 = state_36358;
state_36358 = G__36502;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35012__auto__ = function(state_36358){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35012__auto____1.call(this,state_36358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35012__auto____0;
cljs$core$async$mult_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35012__auto____1;
return cljs$core$async$mult_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___36446,cs,m,dchan,dctr,done))
})();
var state__35125__auto__ = (function (){var statearr_36445 = f__35124__auto__.call(null);
(statearr_36445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___36446);

return statearr_36445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___36446,cs,m,dchan,dctr,done))
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
var args36503 = [];
var len__31652__auto___36506 = arguments.length;
var i__31653__auto___36507 = (0);
while(true){
if((i__31653__auto___36507 < len__31652__auto___36506)){
args36503.push((arguments[i__31653__auto___36507]));

var G__36508 = (i__31653__auto___36507 + (1));
i__31653__auto___36507 = G__36508;
continue;
} else {
}
break;
}

var G__36505 = args36503.length;
switch (G__36505) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36503.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m,ch);
} else {
var m__31241__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m,ch);
} else {
var m__31241__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m);
} else {
var m__31241__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m,state_map);
} else {
var m__31241__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31240__auto__ = (((m == null))?null:m);
var m__31241__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,m,mode);
} else {
var m__31241__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31659__auto__ = [];
var len__31652__auto___36520 = arguments.length;
var i__31653__auto___36521 = (0);
while(true){
if((i__31653__auto___36521 < len__31652__auto___36520)){
args__31659__auto__.push((arguments[i__31653__auto___36521]));

var G__36522 = (i__31653__auto___36521 + (1));
i__31653__auto___36521 = G__36522;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((3) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31660__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36514){
var map__36515 = p__36514;
var map__36515__$1 = ((((!((map__36515 == null)))?((((map__36515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36515):map__36515);
var opts = map__36515__$1;
var statearr_36517_36523 = state;
(statearr_36517_36523[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__36515,map__36515__$1,opts){
return (function (val){
var statearr_36518_36524 = state;
(statearr_36518_36524[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36515,map__36515__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_36519_36525 = state;
(statearr_36519_36525[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36510){
var G__36511 = cljs.core.first.call(null,seq36510);
var seq36510__$1 = cljs.core.next.call(null,seq36510);
var G__36512 = cljs.core.first.call(null,seq36510__$1);
var seq36510__$2 = cljs.core.next.call(null,seq36510__$1);
var G__36513 = cljs.core.first.call(null,seq36510__$2);
var seq36510__$3 = cljs.core.next.call(null,seq36510__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36511,G__36512,G__36513,seq36510__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36691 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36692){
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
this.meta36692 = meta36692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36693,meta36692__$1){
var self__ = this;
var _36693__$1 = this;
return (new cljs.core.async.t_cljs$core$async36691(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36692__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36693){
var self__ = this;
var _36693__$1 = this;
return self__.meta36692;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36692","meta36692",-153297012,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36691";

cljs.core.async.t_cljs$core$async36691.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async36691");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36691 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36691(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36692){
return (new cljs.core.async.t_cljs$core$async36691(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36692));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36691(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35123__auto___36856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___36856,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___36856,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36793){
var state_val_36794 = (state_36793[(1)]);
if((state_val_36794 === (7))){
var inst_36709 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36795_36857 = state_36793__$1;
(statearr_36795_36857[(2)] = inst_36709);

(statearr_36795_36857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (20))){
var inst_36721 = (state_36793[(7)]);
var state_36793__$1 = state_36793;
var statearr_36796_36858 = state_36793__$1;
(statearr_36796_36858[(2)] = inst_36721);

(statearr_36796_36858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (27))){
var state_36793__$1 = state_36793;
var statearr_36797_36859 = state_36793__$1;
(statearr_36797_36859[(2)] = null);

(statearr_36797_36859[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (1))){
var inst_36697 = (state_36793[(8)]);
var inst_36697__$1 = calc_state.call(null);
var inst_36699 = (inst_36697__$1 == null);
var inst_36700 = cljs.core.not.call(null,inst_36699);
var state_36793__$1 = (function (){var statearr_36798 = state_36793;
(statearr_36798[(8)] = inst_36697__$1);

return statearr_36798;
})();
if(inst_36700){
var statearr_36799_36860 = state_36793__$1;
(statearr_36799_36860[(1)] = (2));

} else {
var statearr_36800_36861 = state_36793__$1;
(statearr_36800_36861[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (24))){
var inst_36753 = (state_36793[(9)]);
var inst_36744 = (state_36793[(10)]);
var inst_36767 = (state_36793[(11)]);
var inst_36767__$1 = inst_36744.call(null,inst_36753);
var state_36793__$1 = (function (){var statearr_36801 = state_36793;
(statearr_36801[(11)] = inst_36767__$1);

return statearr_36801;
})();
if(cljs.core.truth_(inst_36767__$1)){
var statearr_36802_36862 = state_36793__$1;
(statearr_36802_36862[(1)] = (29));

} else {
var statearr_36803_36863 = state_36793__$1;
(statearr_36803_36863[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (4))){
var inst_36712 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36712)){
var statearr_36804_36864 = state_36793__$1;
(statearr_36804_36864[(1)] = (8));

} else {
var statearr_36805_36865 = state_36793__$1;
(statearr_36805_36865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (15))){
var inst_36738 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36738)){
var statearr_36806_36866 = state_36793__$1;
(statearr_36806_36866[(1)] = (19));

} else {
var statearr_36807_36867 = state_36793__$1;
(statearr_36807_36867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (21))){
var inst_36743 = (state_36793[(12)]);
var inst_36743__$1 = (state_36793[(2)]);
var inst_36744 = cljs.core.get.call(null,inst_36743__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36745 = cljs.core.get.call(null,inst_36743__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36746 = cljs.core.get.call(null,inst_36743__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36793__$1 = (function (){var statearr_36808 = state_36793;
(statearr_36808[(13)] = inst_36745);

(statearr_36808[(10)] = inst_36744);

(statearr_36808[(12)] = inst_36743__$1);

return statearr_36808;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36793__$1,(22),inst_36746);
} else {
if((state_val_36794 === (31))){
var inst_36775 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36775)){
var statearr_36809_36868 = state_36793__$1;
(statearr_36809_36868[(1)] = (32));

} else {
var statearr_36810_36869 = state_36793__$1;
(statearr_36810_36869[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (32))){
var inst_36752 = (state_36793[(14)]);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36793__$1,(35),out,inst_36752);
} else {
if((state_val_36794 === (33))){
var inst_36743 = (state_36793[(12)]);
var inst_36721 = inst_36743;
var state_36793__$1 = (function (){var statearr_36811 = state_36793;
(statearr_36811[(7)] = inst_36721);

return statearr_36811;
})();
var statearr_36812_36870 = state_36793__$1;
(statearr_36812_36870[(2)] = null);

(statearr_36812_36870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (13))){
var inst_36721 = (state_36793[(7)]);
var inst_36728 = inst_36721.cljs$lang$protocol_mask$partition0$;
var inst_36729 = (inst_36728 & (64));
var inst_36730 = inst_36721.cljs$core$ISeq$;
var inst_36731 = (inst_36729) || (inst_36730);
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36731)){
var statearr_36813_36871 = state_36793__$1;
(statearr_36813_36871[(1)] = (16));

} else {
var statearr_36814_36872 = state_36793__$1;
(statearr_36814_36872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (22))){
var inst_36753 = (state_36793[(9)]);
var inst_36752 = (state_36793[(14)]);
var inst_36751 = (state_36793[(2)]);
var inst_36752__$1 = cljs.core.nth.call(null,inst_36751,(0),null);
var inst_36753__$1 = cljs.core.nth.call(null,inst_36751,(1),null);
var inst_36754 = (inst_36752__$1 == null);
var inst_36755 = cljs.core._EQ_.call(null,inst_36753__$1,change);
var inst_36756 = (inst_36754) || (inst_36755);
var state_36793__$1 = (function (){var statearr_36815 = state_36793;
(statearr_36815[(9)] = inst_36753__$1);

(statearr_36815[(14)] = inst_36752__$1);

return statearr_36815;
})();
if(cljs.core.truth_(inst_36756)){
var statearr_36816_36873 = state_36793__$1;
(statearr_36816_36873[(1)] = (23));

} else {
var statearr_36817_36874 = state_36793__$1;
(statearr_36817_36874[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (36))){
var inst_36743 = (state_36793[(12)]);
var inst_36721 = inst_36743;
var state_36793__$1 = (function (){var statearr_36818 = state_36793;
(statearr_36818[(7)] = inst_36721);

return statearr_36818;
})();
var statearr_36819_36875 = state_36793__$1;
(statearr_36819_36875[(2)] = null);

(statearr_36819_36875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (29))){
var inst_36767 = (state_36793[(11)]);
var state_36793__$1 = state_36793;
var statearr_36820_36876 = state_36793__$1;
(statearr_36820_36876[(2)] = inst_36767);

(statearr_36820_36876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (6))){
var state_36793__$1 = state_36793;
var statearr_36821_36877 = state_36793__$1;
(statearr_36821_36877[(2)] = false);

(statearr_36821_36877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (28))){
var inst_36763 = (state_36793[(2)]);
var inst_36764 = calc_state.call(null);
var inst_36721 = inst_36764;
var state_36793__$1 = (function (){var statearr_36822 = state_36793;
(statearr_36822[(15)] = inst_36763);

(statearr_36822[(7)] = inst_36721);

return statearr_36822;
})();
var statearr_36823_36878 = state_36793__$1;
(statearr_36823_36878[(2)] = null);

(statearr_36823_36878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (25))){
var inst_36789 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36824_36879 = state_36793__$1;
(statearr_36824_36879[(2)] = inst_36789);

(statearr_36824_36879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (34))){
var inst_36787 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36825_36880 = state_36793__$1;
(statearr_36825_36880[(2)] = inst_36787);

(statearr_36825_36880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (17))){
var state_36793__$1 = state_36793;
var statearr_36826_36881 = state_36793__$1;
(statearr_36826_36881[(2)] = false);

(statearr_36826_36881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (3))){
var state_36793__$1 = state_36793;
var statearr_36827_36882 = state_36793__$1;
(statearr_36827_36882[(2)] = false);

(statearr_36827_36882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (12))){
var inst_36791 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36793__$1,inst_36791);
} else {
if((state_val_36794 === (2))){
var inst_36697 = (state_36793[(8)]);
var inst_36702 = inst_36697.cljs$lang$protocol_mask$partition0$;
var inst_36703 = (inst_36702 & (64));
var inst_36704 = inst_36697.cljs$core$ISeq$;
var inst_36705 = (inst_36703) || (inst_36704);
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36705)){
var statearr_36828_36883 = state_36793__$1;
(statearr_36828_36883[(1)] = (5));

} else {
var statearr_36829_36884 = state_36793__$1;
(statearr_36829_36884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (23))){
var inst_36752 = (state_36793[(14)]);
var inst_36758 = (inst_36752 == null);
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36758)){
var statearr_36830_36885 = state_36793__$1;
(statearr_36830_36885[(1)] = (26));

} else {
var statearr_36831_36886 = state_36793__$1;
(statearr_36831_36886[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (35))){
var inst_36778 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36778)){
var statearr_36832_36887 = state_36793__$1;
(statearr_36832_36887[(1)] = (36));

} else {
var statearr_36833_36888 = state_36793__$1;
(statearr_36833_36888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (19))){
var inst_36721 = (state_36793[(7)]);
var inst_36740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36721);
var state_36793__$1 = state_36793;
var statearr_36834_36889 = state_36793__$1;
(statearr_36834_36889[(2)] = inst_36740);

(statearr_36834_36889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (11))){
var inst_36721 = (state_36793[(7)]);
var inst_36725 = (inst_36721 == null);
var inst_36726 = cljs.core.not.call(null,inst_36725);
var state_36793__$1 = state_36793;
if(inst_36726){
var statearr_36835_36890 = state_36793__$1;
(statearr_36835_36890[(1)] = (13));

} else {
var statearr_36836_36891 = state_36793__$1;
(statearr_36836_36891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (9))){
var inst_36697 = (state_36793[(8)]);
var state_36793__$1 = state_36793;
var statearr_36837_36892 = state_36793__$1;
(statearr_36837_36892[(2)] = inst_36697);

(statearr_36837_36892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (5))){
var state_36793__$1 = state_36793;
var statearr_36838_36893 = state_36793__$1;
(statearr_36838_36893[(2)] = true);

(statearr_36838_36893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (14))){
var state_36793__$1 = state_36793;
var statearr_36839_36894 = state_36793__$1;
(statearr_36839_36894[(2)] = false);

(statearr_36839_36894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (26))){
var inst_36753 = (state_36793[(9)]);
var inst_36760 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36753);
var state_36793__$1 = state_36793;
var statearr_36840_36895 = state_36793__$1;
(statearr_36840_36895[(2)] = inst_36760);

(statearr_36840_36895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (16))){
var state_36793__$1 = state_36793;
var statearr_36841_36896 = state_36793__$1;
(statearr_36841_36896[(2)] = true);

(statearr_36841_36896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (38))){
var inst_36783 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36842_36897 = state_36793__$1;
(statearr_36842_36897[(2)] = inst_36783);

(statearr_36842_36897[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (30))){
var inst_36745 = (state_36793[(13)]);
var inst_36753 = (state_36793[(9)]);
var inst_36744 = (state_36793[(10)]);
var inst_36770 = cljs.core.empty_QMARK_.call(null,inst_36744);
var inst_36771 = inst_36745.call(null,inst_36753);
var inst_36772 = cljs.core.not.call(null,inst_36771);
var inst_36773 = (inst_36770) && (inst_36772);
var state_36793__$1 = state_36793;
var statearr_36843_36898 = state_36793__$1;
(statearr_36843_36898[(2)] = inst_36773);

(statearr_36843_36898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (10))){
var inst_36697 = (state_36793[(8)]);
var inst_36717 = (state_36793[(2)]);
var inst_36718 = cljs.core.get.call(null,inst_36717,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36719 = cljs.core.get.call(null,inst_36717,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36720 = cljs.core.get.call(null,inst_36717,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36721 = inst_36697;
var state_36793__$1 = (function (){var statearr_36844 = state_36793;
(statearr_36844[(16)] = inst_36720);

(statearr_36844[(7)] = inst_36721);

(statearr_36844[(17)] = inst_36718);

(statearr_36844[(18)] = inst_36719);

return statearr_36844;
})();
var statearr_36845_36899 = state_36793__$1;
(statearr_36845_36899[(2)] = null);

(statearr_36845_36899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (18))){
var inst_36735 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36846_36900 = state_36793__$1;
(statearr_36846_36900[(2)] = inst_36735);

(statearr_36846_36900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (37))){
var state_36793__$1 = state_36793;
var statearr_36847_36901 = state_36793__$1;
(statearr_36847_36901[(2)] = null);

(statearr_36847_36901[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (8))){
var inst_36697 = (state_36793[(8)]);
var inst_36714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36697);
var state_36793__$1 = state_36793;
var statearr_36848_36902 = state_36793__$1;
(statearr_36848_36902[(2)] = inst_36714);

(statearr_36848_36902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___36856,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35011__auto__,c__35123__auto___36856,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35012__auto__ = null;
var cljs$core$async$mix_$_state_machine__35012__auto____0 = (function (){
var statearr_36852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36852[(0)] = cljs$core$async$mix_$_state_machine__35012__auto__);

(statearr_36852[(1)] = (1));

return statearr_36852;
});
var cljs$core$async$mix_$_state_machine__35012__auto____1 = (function (state_36793){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_36793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e36853){if((e36853 instanceof Object)){
var ex__35015__auto__ = e36853;
var statearr_36854_36903 = state_36793;
(statearr_36854_36903[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_36793;
state_36793 = G__36904;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35012__auto__ = function(state_36793){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35012__auto____1.call(this,state_36793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35012__auto____0;
cljs$core$async$mix_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35012__auto____1;
return cljs$core$async$mix_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___36856,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35125__auto__ = (function (){var statearr_36855 = f__35124__auto__.call(null);
(statearr_36855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___36856);

return statearr_36855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___36856,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31240__auto__ = (((p == null))?null:p);
var m__31241__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31241__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31240__auto__ = (((p == null))?null:p);
var m__31241__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,p,v,ch);
} else {
var m__31241__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args36905 = [];
var len__31652__auto___36908 = arguments.length;
var i__31653__auto___36909 = (0);
while(true){
if((i__31653__auto___36909 < len__31652__auto___36908)){
args36905.push((arguments[i__31653__auto___36909]));

var G__36910 = (i__31653__auto___36909 + (1));
i__31653__auto___36909 = G__36910;
continue;
} else {
}
break;
}

var G__36907 = args36905.length;
switch (G__36907) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36905.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31240__auto__ = (((p == null))?null:p);
var m__31241__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,p);
} else {
var m__31241__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31240__auto__ = (((p == null))?null:p);
var m__31241__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31240__auto__)]);
if(!((m__31241__auto__ == null))){
return m__31241__auto__.call(null,p,v);
} else {
var m__31241__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31241__auto____$1 == null))){
return m__31241__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args36913 = [];
var len__31652__auto___37038 = arguments.length;
var i__31653__auto___37039 = (0);
while(true){
if((i__31653__auto___37039 < len__31652__auto___37038)){
args36913.push((arguments[i__31653__auto___37039]));

var G__37040 = (i__31653__auto___37039 + (1));
i__31653__auto___37039 = G__37040;
continue;
} else {
}
break;
}

var G__36915 = args36913.length;
switch (G__36915) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36913.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30577__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30577__auto__,mults){
return (function (p1__36912_SHARP_){
if(cljs.core.truth_(p1__36912_SHARP_.call(null,topic))){
return p1__36912_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36912_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30577__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36916 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36917){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36917 = meta36917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36918,meta36917__$1){
var self__ = this;
var _36918__$1 = this;
return (new cljs.core.async.t_cljs$core$async36916(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36917__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36918){
var self__ = this;
var _36918__$1 = this;
return self__.meta36917;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36917","meta36917",604073180,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36916";

cljs.core.async.t_cljs$core$async36916.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async36916");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36916 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36916(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36917){
return (new cljs.core.async.t_cljs$core$async36916(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36917));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36916(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35123__auto___37042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37042,mults,ensure_mult,p){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37042,mults,ensure_mult,p){
return (function (state_36990){
var state_val_36991 = (state_36990[(1)]);
if((state_val_36991 === (7))){
var inst_36986 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_36992_37043 = state_36990__$1;
(statearr_36992_37043[(2)] = inst_36986);

(statearr_36992_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (20))){
var state_36990__$1 = state_36990;
var statearr_36993_37044 = state_36990__$1;
(statearr_36993_37044[(2)] = null);

(statearr_36993_37044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (1))){
var state_36990__$1 = state_36990;
var statearr_36994_37045 = state_36990__$1;
(statearr_36994_37045[(2)] = null);

(statearr_36994_37045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (24))){
var inst_36969 = (state_36990[(7)]);
var inst_36978 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36969);
var state_36990__$1 = state_36990;
var statearr_36995_37046 = state_36990__$1;
(statearr_36995_37046[(2)] = inst_36978);

(statearr_36995_37046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (4))){
var inst_36921 = (state_36990[(8)]);
var inst_36921__$1 = (state_36990[(2)]);
var inst_36922 = (inst_36921__$1 == null);
var state_36990__$1 = (function (){var statearr_36996 = state_36990;
(statearr_36996[(8)] = inst_36921__$1);

return statearr_36996;
})();
if(cljs.core.truth_(inst_36922)){
var statearr_36997_37047 = state_36990__$1;
(statearr_36997_37047[(1)] = (5));

} else {
var statearr_36998_37048 = state_36990__$1;
(statearr_36998_37048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (15))){
var inst_36963 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_36999_37049 = state_36990__$1;
(statearr_36999_37049[(2)] = inst_36963);

(statearr_36999_37049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (21))){
var inst_36983 = (state_36990[(2)]);
var state_36990__$1 = (function (){var statearr_37000 = state_36990;
(statearr_37000[(9)] = inst_36983);

return statearr_37000;
})();
var statearr_37001_37050 = state_36990__$1;
(statearr_37001_37050[(2)] = null);

(statearr_37001_37050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (13))){
var inst_36945 = (state_36990[(10)]);
var inst_36947 = cljs.core.chunked_seq_QMARK_.call(null,inst_36945);
var state_36990__$1 = state_36990;
if(inst_36947){
var statearr_37002_37051 = state_36990__$1;
(statearr_37002_37051[(1)] = (16));

} else {
var statearr_37003_37052 = state_36990__$1;
(statearr_37003_37052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (22))){
var inst_36975 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
if(cljs.core.truth_(inst_36975)){
var statearr_37004_37053 = state_36990__$1;
(statearr_37004_37053[(1)] = (23));

} else {
var statearr_37005_37054 = state_36990__$1;
(statearr_37005_37054[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (6))){
var inst_36969 = (state_36990[(7)]);
var inst_36971 = (state_36990[(11)]);
var inst_36921 = (state_36990[(8)]);
var inst_36969__$1 = topic_fn.call(null,inst_36921);
var inst_36970 = cljs.core.deref.call(null,mults);
var inst_36971__$1 = cljs.core.get.call(null,inst_36970,inst_36969__$1);
var state_36990__$1 = (function (){var statearr_37006 = state_36990;
(statearr_37006[(7)] = inst_36969__$1);

(statearr_37006[(11)] = inst_36971__$1);

return statearr_37006;
})();
if(cljs.core.truth_(inst_36971__$1)){
var statearr_37007_37055 = state_36990__$1;
(statearr_37007_37055[(1)] = (19));

} else {
var statearr_37008_37056 = state_36990__$1;
(statearr_37008_37056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (25))){
var inst_36980 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_37009_37057 = state_36990__$1;
(statearr_37009_37057[(2)] = inst_36980);

(statearr_37009_37057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (17))){
var inst_36945 = (state_36990[(10)]);
var inst_36954 = cljs.core.first.call(null,inst_36945);
var inst_36955 = cljs.core.async.muxch_STAR_.call(null,inst_36954);
var inst_36956 = cljs.core.async.close_BANG_.call(null,inst_36955);
var inst_36957 = cljs.core.next.call(null,inst_36945);
var inst_36931 = inst_36957;
var inst_36932 = null;
var inst_36933 = (0);
var inst_36934 = (0);
var state_36990__$1 = (function (){var statearr_37010 = state_36990;
(statearr_37010[(12)] = inst_36932);

(statearr_37010[(13)] = inst_36956);

(statearr_37010[(14)] = inst_36934);

(statearr_37010[(15)] = inst_36931);

(statearr_37010[(16)] = inst_36933);

return statearr_37010;
})();
var statearr_37011_37058 = state_36990__$1;
(statearr_37011_37058[(2)] = null);

(statearr_37011_37058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (3))){
var inst_36988 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36990__$1,inst_36988);
} else {
if((state_val_36991 === (12))){
var inst_36965 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_37012_37059 = state_36990__$1;
(statearr_37012_37059[(2)] = inst_36965);

(statearr_37012_37059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (2))){
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36990__$1,(4),ch);
} else {
if((state_val_36991 === (23))){
var state_36990__$1 = state_36990;
var statearr_37013_37060 = state_36990__$1;
(statearr_37013_37060[(2)] = null);

(statearr_37013_37060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (19))){
var inst_36971 = (state_36990[(11)]);
var inst_36921 = (state_36990[(8)]);
var inst_36973 = cljs.core.async.muxch_STAR_.call(null,inst_36971);
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36990__$1,(22),inst_36973,inst_36921);
} else {
if((state_val_36991 === (11))){
var inst_36931 = (state_36990[(15)]);
var inst_36945 = (state_36990[(10)]);
var inst_36945__$1 = cljs.core.seq.call(null,inst_36931);
var state_36990__$1 = (function (){var statearr_37014 = state_36990;
(statearr_37014[(10)] = inst_36945__$1);

return statearr_37014;
})();
if(inst_36945__$1){
var statearr_37015_37061 = state_36990__$1;
(statearr_37015_37061[(1)] = (13));

} else {
var statearr_37016_37062 = state_36990__$1;
(statearr_37016_37062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (9))){
var inst_36967 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_37017_37063 = state_36990__$1;
(statearr_37017_37063[(2)] = inst_36967);

(statearr_37017_37063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (5))){
var inst_36928 = cljs.core.deref.call(null,mults);
var inst_36929 = cljs.core.vals.call(null,inst_36928);
var inst_36930 = cljs.core.seq.call(null,inst_36929);
var inst_36931 = inst_36930;
var inst_36932 = null;
var inst_36933 = (0);
var inst_36934 = (0);
var state_36990__$1 = (function (){var statearr_37018 = state_36990;
(statearr_37018[(12)] = inst_36932);

(statearr_37018[(14)] = inst_36934);

(statearr_37018[(15)] = inst_36931);

(statearr_37018[(16)] = inst_36933);

return statearr_37018;
})();
var statearr_37019_37064 = state_36990__$1;
(statearr_37019_37064[(2)] = null);

(statearr_37019_37064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (14))){
var state_36990__$1 = state_36990;
var statearr_37023_37065 = state_36990__$1;
(statearr_37023_37065[(2)] = null);

(statearr_37023_37065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (16))){
var inst_36945 = (state_36990[(10)]);
var inst_36949 = cljs.core.chunk_first.call(null,inst_36945);
var inst_36950 = cljs.core.chunk_rest.call(null,inst_36945);
var inst_36951 = cljs.core.count.call(null,inst_36949);
var inst_36931 = inst_36950;
var inst_36932 = inst_36949;
var inst_36933 = inst_36951;
var inst_36934 = (0);
var state_36990__$1 = (function (){var statearr_37024 = state_36990;
(statearr_37024[(12)] = inst_36932);

(statearr_37024[(14)] = inst_36934);

(statearr_37024[(15)] = inst_36931);

(statearr_37024[(16)] = inst_36933);

return statearr_37024;
})();
var statearr_37025_37066 = state_36990__$1;
(statearr_37025_37066[(2)] = null);

(statearr_37025_37066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (10))){
var inst_36932 = (state_36990[(12)]);
var inst_36934 = (state_36990[(14)]);
var inst_36931 = (state_36990[(15)]);
var inst_36933 = (state_36990[(16)]);
var inst_36939 = cljs.core._nth.call(null,inst_36932,inst_36934);
var inst_36940 = cljs.core.async.muxch_STAR_.call(null,inst_36939);
var inst_36941 = cljs.core.async.close_BANG_.call(null,inst_36940);
var inst_36942 = (inst_36934 + (1));
var tmp37020 = inst_36932;
var tmp37021 = inst_36931;
var tmp37022 = inst_36933;
var inst_36931__$1 = tmp37021;
var inst_36932__$1 = tmp37020;
var inst_36933__$1 = tmp37022;
var inst_36934__$1 = inst_36942;
var state_36990__$1 = (function (){var statearr_37026 = state_36990;
(statearr_37026[(12)] = inst_36932__$1);

(statearr_37026[(17)] = inst_36941);

(statearr_37026[(14)] = inst_36934__$1);

(statearr_37026[(15)] = inst_36931__$1);

(statearr_37026[(16)] = inst_36933__$1);

return statearr_37026;
})();
var statearr_37027_37067 = state_36990__$1;
(statearr_37027_37067[(2)] = null);

(statearr_37027_37067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (18))){
var inst_36960 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_37028_37068 = state_36990__$1;
(statearr_37028_37068[(2)] = inst_36960);

(statearr_37028_37068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (8))){
var inst_36934 = (state_36990[(14)]);
var inst_36933 = (state_36990[(16)]);
var inst_36936 = (inst_36934 < inst_36933);
var inst_36937 = inst_36936;
var state_36990__$1 = state_36990;
if(cljs.core.truth_(inst_36937)){
var statearr_37029_37069 = state_36990__$1;
(statearr_37029_37069[(1)] = (10));

} else {
var statearr_37030_37070 = state_36990__$1;
(statearr_37030_37070[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___37042,mults,ensure_mult,p))
;
return ((function (switch__35011__auto__,c__35123__auto___37042,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37034[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37034[(1)] = (1));

return statearr_37034;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_36990){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_36990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37035){if((e37035 instanceof Object)){
var ex__35015__auto__ = e37035;
var statearr_37036_37071 = state_36990;
(statearr_37036_37071[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37072 = state_36990;
state_36990 = G__37072;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_36990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_36990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37042,mults,ensure_mult,p))
})();
var state__35125__auto__ = (function (){var statearr_37037 = f__35124__auto__.call(null);
(statearr_37037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37042);

return statearr_37037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37042,mults,ensure_mult,p))
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
var args37073 = [];
var len__31652__auto___37076 = arguments.length;
var i__31653__auto___37077 = (0);
while(true){
if((i__31653__auto___37077 < len__31652__auto___37076)){
args37073.push((arguments[i__31653__auto___37077]));

var G__37078 = (i__31653__auto___37077 + (1));
i__31653__auto___37077 = G__37078;
continue;
} else {
}
break;
}

var G__37075 = args37073.length;
switch (G__37075) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37073.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args37080 = [];
var len__31652__auto___37083 = arguments.length;
var i__31653__auto___37084 = (0);
while(true){
if((i__31653__auto___37084 < len__31652__auto___37083)){
args37080.push((arguments[i__31653__auto___37084]));

var G__37085 = (i__31653__auto___37084 + (1));
i__31653__auto___37084 = G__37085;
continue;
} else {
}
break;
}

var G__37082 = args37080.length;
switch (G__37082) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37080.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args37087 = [];
var len__31652__auto___37158 = arguments.length;
var i__31653__auto___37159 = (0);
while(true){
if((i__31653__auto___37159 < len__31652__auto___37158)){
args37087.push((arguments[i__31653__auto___37159]));

var G__37160 = (i__31653__auto___37159 + (1));
i__31653__auto___37159 = G__37160;
continue;
} else {
}
break;
}

var G__37089 = args37087.length;
switch (G__37089) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37087.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35123__auto___37162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37128){
var state_val_37129 = (state_37128[(1)]);
if((state_val_37129 === (7))){
var state_37128__$1 = state_37128;
var statearr_37130_37163 = state_37128__$1;
(statearr_37130_37163[(2)] = null);

(statearr_37130_37163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (1))){
var state_37128__$1 = state_37128;
var statearr_37131_37164 = state_37128__$1;
(statearr_37131_37164[(2)] = null);

(statearr_37131_37164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (4))){
var inst_37092 = (state_37128[(7)]);
var inst_37094 = (inst_37092 < cnt);
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37094)){
var statearr_37132_37165 = state_37128__$1;
(statearr_37132_37165[(1)] = (6));

} else {
var statearr_37133_37166 = state_37128__$1;
(statearr_37133_37166[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (15))){
var inst_37124 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37134_37167 = state_37128__$1;
(statearr_37134_37167[(2)] = inst_37124);

(statearr_37134_37167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (13))){
var inst_37117 = cljs.core.async.close_BANG_.call(null,out);
var state_37128__$1 = state_37128;
var statearr_37135_37168 = state_37128__$1;
(statearr_37135_37168[(2)] = inst_37117);

(statearr_37135_37168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (6))){
var state_37128__$1 = state_37128;
var statearr_37136_37169 = state_37128__$1;
(statearr_37136_37169[(2)] = null);

(statearr_37136_37169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (3))){
var inst_37126 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37128__$1,inst_37126);
} else {
if((state_val_37129 === (12))){
var inst_37114 = (state_37128[(8)]);
var inst_37114__$1 = (state_37128[(2)]);
var inst_37115 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37114__$1);
var state_37128__$1 = (function (){var statearr_37137 = state_37128;
(statearr_37137[(8)] = inst_37114__$1);

return statearr_37137;
})();
if(cljs.core.truth_(inst_37115)){
var statearr_37138_37170 = state_37128__$1;
(statearr_37138_37170[(1)] = (13));

} else {
var statearr_37139_37171 = state_37128__$1;
(statearr_37139_37171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (2))){
var inst_37091 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37092 = (0);
var state_37128__$1 = (function (){var statearr_37140 = state_37128;
(statearr_37140[(9)] = inst_37091);

(statearr_37140[(7)] = inst_37092);

return statearr_37140;
})();
var statearr_37141_37172 = state_37128__$1;
(statearr_37141_37172[(2)] = null);

(statearr_37141_37172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (11))){
var inst_37092 = (state_37128[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37128,(10),Object,null,(9));
var inst_37101 = chs__$1.call(null,inst_37092);
var inst_37102 = done.call(null,inst_37092);
var inst_37103 = cljs.core.async.take_BANG_.call(null,inst_37101,inst_37102);
var state_37128__$1 = state_37128;
var statearr_37142_37173 = state_37128__$1;
(statearr_37142_37173[(2)] = inst_37103);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37128__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (9))){
var inst_37092 = (state_37128[(7)]);
var inst_37105 = (state_37128[(2)]);
var inst_37106 = (inst_37092 + (1));
var inst_37092__$1 = inst_37106;
var state_37128__$1 = (function (){var statearr_37143 = state_37128;
(statearr_37143[(10)] = inst_37105);

(statearr_37143[(7)] = inst_37092__$1);

return statearr_37143;
})();
var statearr_37144_37174 = state_37128__$1;
(statearr_37144_37174[(2)] = null);

(statearr_37144_37174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (5))){
var inst_37112 = (state_37128[(2)]);
var state_37128__$1 = (function (){var statearr_37145 = state_37128;
(statearr_37145[(11)] = inst_37112);

return statearr_37145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37128__$1,(12),dchan);
} else {
if((state_val_37129 === (14))){
var inst_37114 = (state_37128[(8)]);
var inst_37119 = cljs.core.apply.call(null,f,inst_37114);
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37128__$1,(16),out,inst_37119);
} else {
if((state_val_37129 === (16))){
var inst_37121 = (state_37128[(2)]);
var state_37128__$1 = (function (){var statearr_37146 = state_37128;
(statearr_37146[(12)] = inst_37121);

return statearr_37146;
})();
var statearr_37147_37175 = state_37128__$1;
(statearr_37147_37175[(2)] = null);

(statearr_37147_37175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (10))){
var inst_37096 = (state_37128[(2)]);
var inst_37097 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37128__$1 = (function (){var statearr_37148 = state_37128;
(statearr_37148[(13)] = inst_37096);

return statearr_37148;
})();
var statearr_37149_37176 = state_37128__$1;
(statearr_37149_37176[(2)] = inst_37097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37128__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (8))){
var inst_37110 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37150_37177 = state_37128__$1;
(statearr_37150_37177[(2)] = inst_37110);

(statearr_37150_37177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___37162,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35011__auto__,c__35123__auto___37162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37154[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37154[(1)] = (1));

return statearr_37154;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_37128){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37155){if((e37155 instanceof Object)){
var ex__35015__auto__ = e37155;
var statearr_37156_37178 = state_37128;
(statearr_37156_37178[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37179 = state_37128;
state_37128 = G__37179;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_37128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_37128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37162,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35125__auto__ = (function (){var statearr_37157 = f__35124__auto__.call(null);
(statearr_37157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37162);

return statearr_37157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37162,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args37181 = [];
var len__31652__auto___37239 = arguments.length;
var i__31653__auto___37240 = (0);
while(true){
if((i__31653__auto___37240 < len__31652__auto___37239)){
args37181.push((arguments[i__31653__auto___37240]));

var G__37241 = (i__31653__auto___37240 + (1));
i__31653__auto___37240 = G__37241;
continue;
} else {
}
break;
}

var G__37183 = args37181.length;
switch (G__37183) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37181.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35123__auto___37243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37243,out){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37243,out){
return (function (state_37215){
var state_val_37216 = (state_37215[(1)]);
if((state_val_37216 === (7))){
var inst_37195 = (state_37215[(7)]);
var inst_37194 = (state_37215[(8)]);
var inst_37194__$1 = (state_37215[(2)]);
var inst_37195__$1 = cljs.core.nth.call(null,inst_37194__$1,(0),null);
var inst_37196 = cljs.core.nth.call(null,inst_37194__$1,(1),null);
var inst_37197 = (inst_37195__$1 == null);
var state_37215__$1 = (function (){var statearr_37217 = state_37215;
(statearr_37217[(9)] = inst_37196);

(statearr_37217[(7)] = inst_37195__$1);

(statearr_37217[(8)] = inst_37194__$1);

return statearr_37217;
})();
if(cljs.core.truth_(inst_37197)){
var statearr_37218_37244 = state_37215__$1;
(statearr_37218_37244[(1)] = (8));

} else {
var statearr_37219_37245 = state_37215__$1;
(statearr_37219_37245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (1))){
var inst_37184 = cljs.core.vec.call(null,chs);
var inst_37185 = inst_37184;
var state_37215__$1 = (function (){var statearr_37220 = state_37215;
(statearr_37220[(10)] = inst_37185);

return statearr_37220;
})();
var statearr_37221_37246 = state_37215__$1;
(statearr_37221_37246[(2)] = null);

(statearr_37221_37246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (4))){
var inst_37185 = (state_37215[(10)]);
var state_37215__$1 = state_37215;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37215__$1,(7),inst_37185);
} else {
if((state_val_37216 === (6))){
var inst_37211 = (state_37215[(2)]);
var state_37215__$1 = state_37215;
var statearr_37222_37247 = state_37215__$1;
(statearr_37222_37247[(2)] = inst_37211);

(statearr_37222_37247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (3))){
var inst_37213 = (state_37215[(2)]);
var state_37215__$1 = state_37215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37215__$1,inst_37213);
} else {
if((state_val_37216 === (2))){
var inst_37185 = (state_37215[(10)]);
var inst_37187 = cljs.core.count.call(null,inst_37185);
var inst_37188 = (inst_37187 > (0));
var state_37215__$1 = state_37215;
if(cljs.core.truth_(inst_37188)){
var statearr_37224_37248 = state_37215__$1;
(statearr_37224_37248[(1)] = (4));

} else {
var statearr_37225_37249 = state_37215__$1;
(statearr_37225_37249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (11))){
var inst_37185 = (state_37215[(10)]);
var inst_37204 = (state_37215[(2)]);
var tmp37223 = inst_37185;
var inst_37185__$1 = tmp37223;
var state_37215__$1 = (function (){var statearr_37226 = state_37215;
(statearr_37226[(11)] = inst_37204);

(statearr_37226[(10)] = inst_37185__$1);

return statearr_37226;
})();
var statearr_37227_37250 = state_37215__$1;
(statearr_37227_37250[(2)] = null);

(statearr_37227_37250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (9))){
var inst_37195 = (state_37215[(7)]);
var state_37215__$1 = state_37215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37215__$1,(11),out,inst_37195);
} else {
if((state_val_37216 === (5))){
var inst_37209 = cljs.core.async.close_BANG_.call(null,out);
var state_37215__$1 = state_37215;
var statearr_37228_37251 = state_37215__$1;
(statearr_37228_37251[(2)] = inst_37209);

(statearr_37228_37251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (10))){
var inst_37207 = (state_37215[(2)]);
var state_37215__$1 = state_37215;
var statearr_37229_37252 = state_37215__$1;
(statearr_37229_37252[(2)] = inst_37207);

(statearr_37229_37252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (8))){
var inst_37196 = (state_37215[(9)]);
var inst_37195 = (state_37215[(7)]);
var inst_37194 = (state_37215[(8)]);
var inst_37185 = (state_37215[(10)]);
var inst_37199 = (function (){var cs = inst_37185;
var vec__37190 = inst_37194;
var v = inst_37195;
var c = inst_37196;
return ((function (cs,vec__37190,v,c,inst_37196,inst_37195,inst_37194,inst_37185,state_val_37216,c__35123__auto___37243,out){
return (function (p1__37180_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37180_SHARP_);
});
;})(cs,vec__37190,v,c,inst_37196,inst_37195,inst_37194,inst_37185,state_val_37216,c__35123__auto___37243,out))
})();
var inst_37200 = cljs.core.filterv.call(null,inst_37199,inst_37185);
var inst_37185__$1 = inst_37200;
var state_37215__$1 = (function (){var statearr_37230 = state_37215;
(statearr_37230[(10)] = inst_37185__$1);

return statearr_37230;
})();
var statearr_37231_37253 = state_37215__$1;
(statearr_37231_37253[(2)] = null);

(statearr_37231_37253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___37243,out))
;
return ((function (switch__35011__auto__,c__35123__auto___37243,out){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37235 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37235[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37235[(1)] = (1));

return statearr_37235;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_37215){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37236){if((e37236 instanceof Object)){
var ex__35015__auto__ = e37236;
var statearr_37237_37254 = state_37215;
(statearr_37237_37254[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37255 = state_37215;
state_37215 = G__37255;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_37215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_37215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37243,out))
})();
var state__35125__auto__ = (function (){var statearr_37238 = f__35124__auto__.call(null);
(statearr_37238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37243);

return statearr_37238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37243,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args37256 = [];
var len__31652__auto___37305 = arguments.length;
var i__31653__auto___37306 = (0);
while(true){
if((i__31653__auto___37306 < len__31652__auto___37305)){
args37256.push((arguments[i__31653__auto___37306]));

var G__37307 = (i__31653__auto___37306 + (1));
i__31653__auto___37306 = G__37307;
continue;
} else {
}
break;
}

var G__37258 = args37256.length;
switch (G__37258) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37256.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35123__auto___37309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37309,out){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37309,out){
return (function (state_37282){
var state_val_37283 = (state_37282[(1)]);
if((state_val_37283 === (7))){
var inst_37264 = (state_37282[(7)]);
var inst_37264__$1 = (state_37282[(2)]);
var inst_37265 = (inst_37264__$1 == null);
var inst_37266 = cljs.core.not.call(null,inst_37265);
var state_37282__$1 = (function (){var statearr_37284 = state_37282;
(statearr_37284[(7)] = inst_37264__$1);

return statearr_37284;
})();
if(inst_37266){
var statearr_37285_37310 = state_37282__$1;
(statearr_37285_37310[(1)] = (8));

} else {
var statearr_37286_37311 = state_37282__$1;
(statearr_37286_37311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (1))){
var inst_37259 = (0);
var state_37282__$1 = (function (){var statearr_37287 = state_37282;
(statearr_37287[(8)] = inst_37259);

return statearr_37287;
})();
var statearr_37288_37312 = state_37282__$1;
(statearr_37288_37312[(2)] = null);

(statearr_37288_37312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (4))){
var state_37282__$1 = state_37282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37282__$1,(7),ch);
} else {
if((state_val_37283 === (6))){
var inst_37277 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
var statearr_37289_37313 = state_37282__$1;
(statearr_37289_37313[(2)] = inst_37277);

(statearr_37289_37313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (3))){
var inst_37279 = (state_37282[(2)]);
var inst_37280 = cljs.core.async.close_BANG_.call(null,out);
var state_37282__$1 = (function (){var statearr_37290 = state_37282;
(statearr_37290[(9)] = inst_37279);

return statearr_37290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37282__$1,inst_37280);
} else {
if((state_val_37283 === (2))){
var inst_37259 = (state_37282[(8)]);
var inst_37261 = (inst_37259 < n);
var state_37282__$1 = state_37282;
if(cljs.core.truth_(inst_37261)){
var statearr_37291_37314 = state_37282__$1;
(statearr_37291_37314[(1)] = (4));

} else {
var statearr_37292_37315 = state_37282__$1;
(statearr_37292_37315[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (11))){
var inst_37259 = (state_37282[(8)]);
var inst_37269 = (state_37282[(2)]);
var inst_37270 = (inst_37259 + (1));
var inst_37259__$1 = inst_37270;
var state_37282__$1 = (function (){var statearr_37293 = state_37282;
(statearr_37293[(10)] = inst_37269);

(statearr_37293[(8)] = inst_37259__$1);

return statearr_37293;
})();
var statearr_37294_37316 = state_37282__$1;
(statearr_37294_37316[(2)] = null);

(statearr_37294_37316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (9))){
var state_37282__$1 = state_37282;
var statearr_37295_37317 = state_37282__$1;
(statearr_37295_37317[(2)] = null);

(statearr_37295_37317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (5))){
var state_37282__$1 = state_37282;
var statearr_37296_37318 = state_37282__$1;
(statearr_37296_37318[(2)] = null);

(statearr_37296_37318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (10))){
var inst_37274 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
var statearr_37297_37319 = state_37282__$1;
(statearr_37297_37319[(2)] = inst_37274);

(statearr_37297_37319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (8))){
var inst_37264 = (state_37282[(7)]);
var state_37282__$1 = state_37282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37282__$1,(11),out,inst_37264);
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
});})(c__35123__auto___37309,out))
;
return ((function (switch__35011__auto__,c__35123__auto___37309,out){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37301[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37301[(1)] = (1));

return statearr_37301;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_37282){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37302){if((e37302 instanceof Object)){
var ex__35015__auto__ = e37302;
var statearr_37303_37320 = state_37282;
(statearr_37303_37320[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37321 = state_37282;
state_37282 = G__37321;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_37282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_37282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37309,out))
})();
var state__35125__auto__ = (function (){var statearr_37304 = f__35124__auto__.call(null);
(statearr_37304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37309);

return statearr_37304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37309,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37329 = (function (map_LT_,f,ch,meta37330){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37330 = meta37330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37331,meta37330__$1){
var self__ = this;
var _37331__$1 = this;
return (new cljs.core.async.t_cljs$core$async37329(self__.map_LT_,self__.f,self__.ch,meta37330__$1));
});

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37331){
var self__ = this;
var _37331__$1 = this;
return self__.meta37330;
});

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37332 = (function (map_LT_,f,ch,meta37330,_,fn1,meta37333){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37330 = meta37330;
this._ = _;
this.fn1 = fn1;
this.meta37333 = meta37333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37334,meta37333__$1){
var self__ = this;
var _37334__$1 = this;
return (new cljs.core.async.t_cljs$core$async37332(self__.map_LT_,self__.f,self__.ch,self__.meta37330,self__._,self__.fn1,meta37333__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37334){
var self__ = this;
var _37334__$1 = this;
return self__.meta37333;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37322_SHARP_){
return f1.call(null,(((p1__37322_SHARP_ == null))?null:self__.f.call(null,p1__37322_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37332.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37330","meta37330",2089173130,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37329","cljs.core.async/t_cljs$core$async37329",-122447188,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37333","meta37333",1415872021,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37332";

cljs.core.async.t_cljs$core$async37332.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async37332");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37332 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37332(map_LT___$1,f__$1,ch__$1,meta37330__$1,___$2,fn1__$1,meta37333){
return (new cljs.core.async.t_cljs$core$async37332(map_LT___$1,f__$1,ch__$1,meta37330__$1,___$2,fn1__$1,meta37333));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37332(self__.map_LT_,self__.f,self__.ch,self__.meta37330,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30565__auto__ = ret;
if(cljs.core.truth_(and__30565__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30565__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37330","meta37330",2089173130,null)], null);
});

cljs.core.async.t_cljs$core$async37329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37329";

cljs.core.async.t_cljs$core$async37329.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async37329");
});

cljs.core.async.__GT_t_cljs$core$async37329 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37329(map_LT___$1,f__$1,ch__$1,meta37330){
return (new cljs.core.async.t_cljs$core$async37329(map_LT___$1,f__$1,ch__$1,meta37330));
});

}

return (new cljs.core.async.t_cljs$core$async37329(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37338 = (function (map_GT_,f,ch,meta37339){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37339 = meta37339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37340,meta37339__$1){
var self__ = this;
var _37340__$1 = this;
return (new cljs.core.async.t_cljs$core$async37338(self__.map_GT_,self__.f,self__.ch,meta37339__$1));
});

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37340){
var self__ = this;
var _37340__$1 = this;
return self__.meta37339;
});

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37339","meta37339",-1700188511,null)], null);
});

cljs.core.async.t_cljs$core$async37338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37338";

cljs.core.async.t_cljs$core$async37338.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async37338");
});

cljs.core.async.__GT_t_cljs$core$async37338 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37338(map_GT___$1,f__$1,ch__$1,meta37339){
return (new cljs.core.async.t_cljs$core$async37338(map_GT___$1,f__$1,ch__$1,meta37339));
});

}

return (new cljs.core.async.t_cljs$core$async37338(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37344 = (function (filter_GT_,p,ch,meta37345){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37345 = meta37345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37346,meta37345__$1){
var self__ = this;
var _37346__$1 = this;
return (new cljs.core.async.t_cljs$core$async37344(self__.filter_GT_,self__.p,self__.ch,meta37345__$1));
});

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37346){
var self__ = this;
var _37346__$1 = this;
return self__.meta37345;
});

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37345","meta37345",2136605288,null)], null);
});

cljs.core.async.t_cljs$core$async37344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37344";

cljs.core.async.t_cljs$core$async37344.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cljs.core.async/t_cljs$core$async37344");
});

cljs.core.async.__GT_t_cljs$core$async37344 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37344(filter_GT___$1,p__$1,ch__$1,meta37345){
return (new cljs.core.async.t_cljs$core$async37344(filter_GT___$1,p__$1,ch__$1,meta37345));
});

}

return (new cljs.core.async.t_cljs$core$async37344(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args37347 = [];
var len__31652__auto___37391 = arguments.length;
var i__31653__auto___37392 = (0);
while(true){
if((i__31653__auto___37392 < len__31652__auto___37391)){
args37347.push((arguments[i__31653__auto___37392]));

var G__37393 = (i__31653__auto___37392 + (1));
i__31653__auto___37392 = G__37393;
continue;
} else {
}
break;
}

var G__37349 = args37347.length;
switch (G__37349) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37347.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35123__auto___37395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37395,out){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37395,out){
return (function (state_37370){
var state_val_37371 = (state_37370[(1)]);
if((state_val_37371 === (7))){
var inst_37366 = (state_37370[(2)]);
var state_37370__$1 = state_37370;
var statearr_37372_37396 = state_37370__$1;
(statearr_37372_37396[(2)] = inst_37366);

(statearr_37372_37396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (1))){
var state_37370__$1 = state_37370;
var statearr_37373_37397 = state_37370__$1;
(statearr_37373_37397[(2)] = null);

(statearr_37373_37397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (4))){
var inst_37352 = (state_37370[(7)]);
var inst_37352__$1 = (state_37370[(2)]);
var inst_37353 = (inst_37352__$1 == null);
var state_37370__$1 = (function (){var statearr_37374 = state_37370;
(statearr_37374[(7)] = inst_37352__$1);

return statearr_37374;
})();
if(cljs.core.truth_(inst_37353)){
var statearr_37375_37398 = state_37370__$1;
(statearr_37375_37398[(1)] = (5));

} else {
var statearr_37376_37399 = state_37370__$1;
(statearr_37376_37399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (6))){
var inst_37352 = (state_37370[(7)]);
var inst_37357 = p.call(null,inst_37352);
var state_37370__$1 = state_37370;
if(cljs.core.truth_(inst_37357)){
var statearr_37377_37400 = state_37370__$1;
(statearr_37377_37400[(1)] = (8));

} else {
var statearr_37378_37401 = state_37370__$1;
(statearr_37378_37401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (3))){
var inst_37368 = (state_37370[(2)]);
var state_37370__$1 = state_37370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37370__$1,inst_37368);
} else {
if((state_val_37371 === (2))){
var state_37370__$1 = state_37370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37370__$1,(4),ch);
} else {
if((state_val_37371 === (11))){
var inst_37360 = (state_37370[(2)]);
var state_37370__$1 = state_37370;
var statearr_37379_37402 = state_37370__$1;
(statearr_37379_37402[(2)] = inst_37360);

(statearr_37379_37402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (9))){
var state_37370__$1 = state_37370;
var statearr_37380_37403 = state_37370__$1;
(statearr_37380_37403[(2)] = null);

(statearr_37380_37403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (5))){
var inst_37355 = cljs.core.async.close_BANG_.call(null,out);
var state_37370__$1 = state_37370;
var statearr_37381_37404 = state_37370__$1;
(statearr_37381_37404[(2)] = inst_37355);

(statearr_37381_37404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (10))){
var inst_37363 = (state_37370[(2)]);
var state_37370__$1 = (function (){var statearr_37382 = state_37370;
(statearr_37382[(8)] = inst_37363);

return statearr_37382;
})();
var statearr_37383_37405 = state_37370__$1;
(statearr_37383_37405[(2)] = null);

(statearr_37383_37405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (8))){
var inst_37352 = (state_37370[(7)]);
var state_37370__$1 = state_37370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37370__$1,(11),out,inst_37352);
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
});})(c__35123__auto___37395,out))
;
return ((function (switch__35011__auto__,c__35123__auto___37395,out){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37387 = [null,null,null,null,null,null,null,null,null];
(statearr_37387[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37387[(1)] = (1));

return statearr_37387;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_37370){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37388){if((e37388 instanceof Object)){
var ex__35015__auto__ = e37388;
var statearr_37389_37406 = state_37370;
(statearr_37389_37406[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37407 = state_37370;
state_37370 = G__37407;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_37370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_37370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37395,out))
})();
var state__35125__auto__ = (function (){var statearr_37390 = f__35124__auto__.call(null);
(statearr_37390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37395);

return statearr_37390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37395,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args37408 = [];
var len__31652__auto___37411 = arguments.length;
var i__31653__auto___37412 = (0);
while(true){
if((i__31653__auto___37412 < len__31652__auto___37411)){
args37408.push((arguments[i__31653__auto___37412]));

var G__37413 = (i__31653__auto___37412 + (1));
i__31653__auto___37412 = G__37413;
continue;
} else {
}
break;
}

var G__37410 = args37408.length;
switch (G__37410) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37408.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_37580){
var state_val_37581 = (state_37580[(1)]);
if((state_val_37581 === (7))){
var inst_37576 = (state_37580[(2)]);
var state_37580__$1 = state_37580;
var statearr_37582_37623 = state_37580__$1;
(statearr_37582_37623[(2)] = inst_37576);

(statearr_37582_37623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (20))){
var inst_37546 = (state_37580[(7)]);
var inst_37557 = (state_37580[(2)]);
var inst_37558 = cljs.core.next.call(null,inst_37546);
var inst_37532 = inst_37558;
var inst_37533 = null;
var inst_37534 = (0);
var inst_37535 = (0);
var state_37580__$1 = (function (){var statearr_37583 = state_37580;
(statearr_37583[(8)] = inst_37535);

(statearr_37583[(9)] = inst_37557);

(statearr_37583[(10)] = inst_37534);

(statearr_37583[(11)] = inst_37533);

(statearr_37583[(12)] = inst_37532);

return statearr_37583;
})();
var statearr_37584_37624 = state_37580__$1;
(statearr_37584_37624[(2)] = null);

(statearr_37584_37624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (1))){
var state_37580__$1 = state_37580;
var statearr_37585_37625 = state_37580__$1;
(statearr_37585_37625[(2)] = null);

(statearr_37585_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (4))){
var inst_37521 = (state_37580[(13)]);
var inst_37521__$1 = (state_37580[(2)]);
var inst_37522 = (inst_37521__$1 == null);
var state_37580__$1 = (function (){var statearr_37586 = state_37580;
(statearr_37586[(13)] = inst_37521__$1);

return statearr_37586;
})();
if(cljs.core.truth_(inst_37522)){
var statearr_37587_37626 = state_37580__$1;
(statearr_37587_37626[(1)] = (5));

} else {
var statearr_37588_37627 = state_37580__$1;
(statearr_37588_37627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (15))){
var state_37580__$1 = state_37580;
var statearr_37592_37628 = state_37580__$1;
(statearr_37592_37628[(2)] = null);

(statearr_37592_37628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (21))){
var state_37580__$1 = state_37580;
var statearr_37593_37629 = state_37580__$1;
(statearr_37593_37629[(2)] = null);

(statearr_37593_37629[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (13))){
var inst_37535 = (state_37580[(8)]);
var inst_37534 = (state_37580[(10)]);
var inst_37533 = (state_37580[(11)]);
var inst_37532 = (state_37580[(12)]);
var inst_37542 = (state_37580[(2)]);
var inst_37543 = (inst_37535 + (1));
var tmp37589 = inst_37534;
var tmp37590 = inst_37533;
var tmp37591 = inst_37532;
var inst_37532__$1 = tmp37591;
var inst_37533__$1 = tmp37590;
var inst_37534__$1 = tmp37589;
var inst_37535__$1 = inst_37543;
var state_37580__$1 = (function (){var statearr_37594 = state_37580;
(statearr_37594[(8)] = inst_37535__$1);

(statearr_37594[(14)] = inst_37542);

(statearr_37594[(10)] = inst_37534__$1);

(statearr_37594[(11)] = inst_37533__$1);

(statearr_37594[(12)] = inst_37532__$1);

return statearr_37594;
})();
var statearr_37595_37630 = state_37580__$1;
(statearr_37595_37630[(2)] = null);

(statearr_37595_37630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (22))){
var state_37580__$1 = state_37580;
var statearr_37596_37631 = state_37580__$1;
(statearr_37596_37631[(2)] = null);

(statearr_37596_37631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (6))){
var inst_37521 = (state_37580[(13)]);
var inst_37530 = f.call(null,inst_37521);
var inst_37531 = cljs.core.seq.call(null,inst_37530);
var inst_37532 = inst_37531;
var inst_37533 = null;
var inst_37534 = (0);
var inst_37535 = (0);
var state_37580__$1 = (function (){var statearr_37597 = state_37580;
(statearr_37597[(8)] = inst_37535);

(statearr_37597[(10)] = inst_37534);

(statearr_37597[(11)] = inst_37533);

(statearr_37597[(12)] = inst_37532);

return statearr_37597;
})();
var statearr_37598_37632 = state_37580__$1;
(statearr_37598_37632[(2)] = null);

(statearr_37598_37632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (17))){
var inst_37546 = (state_37580[(7)]);
var inst_37550 = cljs.core.chunk_first.call(null,inst_37546);
var inst_37551 = cljs.core.chunk_rest.call(null,inst_37546);
var inst_37552 = cljs.core.count.call(null,inst_37550);
var inst_37532 = inst_37551;
var inst_37533 = inst_37550;
var inst_37534 = inst_37552;
var inst_37535 = (0);
var state_37580__$1 = (function (){var statearr_37599 = state_37580;
(statearr_37599[(8)] = inst_37535);

(statearr_37599[(10)] = inst_37534);

(statearr_37599[(11)] = inst_37533);

(statearr_37599[(12)] = inst_37532);

return statearr_37599;
})();
var statearr_37600_37633 = state_37580__$1;
(statearr_37600_37633[(2)] = null);

(statearr_37600_37633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (3))){
var inst_37578 = (state_37580[(2)]);
var state_37580__$1 = state_37580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37580__$1,inst_37578);
} else {
if((state_val_37581 === (12))){
var inst_37566 = (state_37580[(2)]);
var state_37580__$1 = state_37580;
var statearr_37601_37634 = state_37580__$1;
(statearr_37601_37634[(2)] = inst_37566);

(statearr_37601_37634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (2))){
var state_37580__$1 = state_37580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37580__$1,(4),in$);
} else {
if((state_val_37581 === (23))){
var inst_37574 = (state_37580[(2)]);
var state_37580__$1 = state_37580;
var statearr_37602_37635 = state_37580__$1;
(statearr_37602_37635[(2)] = inst_37574);

(statearr_37602_37635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (19))){
var inst_37561 = (state_37580[(2)]);
var state_37580__$1 = state_37580;
var statearr_37603_37636 = state_37580__$1;
(statearr_37603_37636[(2)] = inst_37561);

(statearr_37603_37636[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (11))){
var inst_37546 = (state_37580[(7)]);
var inst_37532 = (state_37580[(12)]);
var inst_37546__$1 = cljs.core.seq.call(null,inst_37532);
var state_37580__$1 = (function (){var statearr_37604 = state_37580;
(statearr_37604[(7)] = inst_37546__$1);

return statearr_37604;
})();
if(inst_37546__$1){
var statearr_37605_37637 = state_37580__$1;
(statearr_37605_37637[(1)] = (14));

} else {
var statearr_37606_37638 = state_37580__$1;
(statearr_37606_37638[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (9))){
var inst_37568 = (state_37580[(2)]);
var inst_37569 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37580__$1 = (function (){var statearr_37607 = state_37580;
(statearr_37607[(15)] = inst_37568);

return statearr_37607;
})();
if(cljs.core.truth_(inst_37569)){
var statearr_37608_37639 = state_37580__$1;
(statearr_37608_37639[(1)] = (21));

} else {
var statearr_37609_37640 = state_37580__$1;
(statearr_37609_37640[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (5))){
var inst_37524 = cljs.core.async.close_BANG_.call(null,out);
var state_37580__$1 = state_37580;
var statearr_37610_37641 = state_37580__$1;
(statearr_37610_37641[(2)] = inst_37524);

(statearr_37610_37641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (14))){
var inst_37546 = (state_37580[(7)]);
var inst_37548 = cljs.core.chunked_seq_QMARK_.call(null,inst_37546);
var state_37580__$1 = state_37580;
if(inst_37548){
var statearr_37611_37642 = state_37580__$1;
(statearr_37611_37642[(1)] = (17));

} else {
var statearr_37612_37643 = state_37580__$1;
(statearr_37612_37643[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (16))){
var inst_37564 = (state_37580[(2)]);
var state_37580__$1 = state_37580;
var statearr_37613_37644 = state_37580__$1;
(statearr_37613_37644[(2)] = inst_37564);

(statearr_37613_37644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37581 === (10))){
var inst_37535 = (state_37580[(8)]);
var inst_37533 = (state_37580[(11)]);
var inst_37540 = cljs.core._nth.call(null,inst_37533,inst_37535);
var state_37580__$1 = state_37580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37580__$1,(13),out,inst_37540);
} else {
if((state_val_37581 === (18))){
var inst_37546 = (state_37580[(7)]);
var inst_37555 = cljs.core.first.call(null,inst_37546);
var state_37580__$1 = state_37580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37580__$1,(20),out,inst_37555);
} else {
if((state_val_37581 === (8))){
var inst_37535 = (state_37580[(8)]);
var inst_37534 = (state_37580[(10)]);
var inst_37537 = (inst_37535 < inst_37534);
var inst_37538 = inst_37537;
var state_37580__$1 = state_37580;
if(cljs.core.truth_(inst_37538)){
var statearr_37614_37645 = state_37580__$1;
(statearr_37614_37645[(1)] = (10));

} else {
var statearr_37615_37646 = state_37580__$1;
(statearr_37615_37646[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35012__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35012__auto____0 = (function (){
var statearr_37619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37619[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35012__auto__);

(statearr_37619[(1)] = (1));

return statearr_37619;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35012__auto____1 = (function (state_37580){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37620){if((e37620 instanceof Object)){
var ex__35015__auto__ = e37620;
var statearr_37621_37647 = state_37580;
(statearr_37621_37647[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37648 = state_37580;
state_37580 = G__37648;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35012__auto__ = function(state_37580){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35012__auto____1.call(this,state_37580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35012__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35012__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_37622 = f__35124__auto__.call(null);
(statearr_37622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_37622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args37649 = [];
var len__31652__auto___37652 = arguments.length;
var i__31653__auto___37653 = (0);
while(true){
if((i__31653__auto___37653 < len__31652__auto___37652)){
args37649.push((arguments[i__31653__auto___37653]));

var G__37654 = (i__31653__auto___37653 + (1));
i__31653__auto___37653 = G__37654;
continue;
} else {
}
break;
}

var G__37651 = args37649.length;
switch (G__37651) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37649.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args37656 = [];
var len__31652__auto___37659 = arguments.length;
var i__31653__auto___37660 = (0);
while(true){
if((i__31653__auto___37660 < len__31652__auto___37659)){
args37656.push((arguments[i__31653__auto___37660]));

var G__37661 = (i__31653__auto___37660 + (1));
i__31653__auto___37660 = G__37661;
continue;
} else {
}
break;
}

var G__37658 = args37656.length;
switch (G__37658) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37656.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args37663 = [];
var len__31652__auto___37714 = arguments.length;
var i__31653__auto___37715 = (0);
while(true){
if((i__31653__auto___37715 < len__31652__auto___37714)){
args37663.push((arguments[i__31653__auto___37715]));

var G__37716 = (i__31653__auto___37715 + (1));
i__31653__auto___37715 = G__37716;
continue;
} else {
}
break;
}

var G__37665 = args37663.length;
switch (G__37665) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37663.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35123__auto___37718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37718,out){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37718,out){
return (function (state_37689){
var state_val_37690 = (state_37689[(1)]);
if((state_val_37690 === (7))){
var inst_37684 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37691_37719 = state_37689__$1;
(statearr_37691_37719[(2)] = inst_37684);

(statearr_37691_37719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (1))){
var inst_37666 = null;
var state_37689__$1 = (function (){var statearr_37692 = state_37689;
(statearr_37692[(7)] = inst_37666);

return statearr_37692;
})();
var statearr_37693_37720 = state_37689__$1;
(statearr_37693_37720[(2)] = null);

(statearr_37693_37720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (4))){
var inst_37669 = (state_37689[(8)]);
var inst_37669__$1 = (state_37689[(2)]);
var inst_37670 = (inst_37669__$1 == null);
var inst_37671 = cljs.core.not.call(null,inst_37670);
var state_37689__$1 = (function (){var statearr_37694 = state_37689;
(statearr_37694[(8)] = inst_37669__$1);

return statearr_37694;
})();
if(inst_37671){
var statearr_37695_37721 = state_37689__$1;
(statearr_37695_37721[(1)] = (5));

} else {
var statearr_37696_37722 = state_37689__$1;
(statearr_37696_37722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (6))){
var state_37689__$1 = state_37689;
var statearr_37697_37723 = state_37689__$1;
(statearr_37697_37723[(2)] = null);

(statearr_37697_37723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (3))){
var inst_37686 = (state_37689[(2)]);
var inst_37687 = cljs.core.async.close_BANG_.call(null,out);
var state_37689__$1 = (function (){var statearr_37698 = state_37689;
(statearr_37698[(9)] = inst_37686);

return statearr_37698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37689__$1,inst_37687);
} else {
if((state_val_37690 === (2))){
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(4),ch);
} else {
if((state_val_37690 === (11))){
var inst_37669 = (state_37689[(8)]);
var inst_37678 = (state_37689[(2)]);
var inst_37666 = inst_37669;
var state_37689__$1 = (function (){var statearr_37699 = state_37689;
(statearr_37699[(10)] = inst_37678);

(statearr_37699[(7)] = inst_37666);

return statearr_37699;
})();
var statearr_37700_37724 = state_37689__$1;
(statearr_37700_37724[(2)] = null);

(statearr_37700_37724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (9))){
var inst_37669 = (state_37689[(8)]);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37689__$1,(11),out,inst_37669);
} else {
if((state_val_37690 === (5))){
var inst_37669 = (state_37689[(8)]);
var inst_37666 = (state_37689[(7)]);
var inst_37673 = cljs.core._EQ_.call(null,inst_37669,inst_37666);
var state_37689__$1 = state_37689;
if(inst_37673){
var statearr_37702_37725 = state_37689__$1;
(statearr_37702_37725[(1)] = (8));

} else {
var statearr_37703_37726 = state_37689__$1;
(statearr_37703_37726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (10))){
var inst_37681 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37704_37727 = state_37689__$1;
(statearr_37704_37727[(2)] = inst_37681);

(statearr_37704_37727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (8))){
var inst_37666 = (state_37689[(7)]);
var tmp37701 = inst_37666;
var inst_37666__$1 = tmp37701;
var state_37689__$1 = (function (){var statearr_37705 = state_37689;
(statearr_37705[(7)] = inst_37666__$1);

return statearr_37705;
})();
var statearr_37706_37728 = state_37689__$1;
(statearr_37706_37728[(2)] = null);

(statearr_37706_37728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___37718,out))
;
return ((function (switch__35011__auto__,c__35123__auto___37718,out){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37710[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37710[(1)] = (1));

return statearr_37710;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_37689){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37711){if((e37711 instanceof Object)){
var ex__35015__auto__ = e37711;
var statearr_37712_37729 = state_37689;
(statearr_37712_37729[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37730 = state_37689;
state_37689 = G__37730;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_37689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_37689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37718,out))
})();
var state__35125__auto__ = (function (){var statearr_37713 = f__35124__auto__.call(null);
(statearr_37713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37718);

return statearr_37713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37718,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37731 = [];
var len__31652__auto___37801 = arguments.length;
var i__31653__auto___37802 = (0);
while(true){
if((i__31653__auto___37802 < len__31652__auto___37801)){
args37731.push((arguments[i__31653__auto___37802]));

var G__37803 = (i__31653__auto___37802 + (1));
i__31653__auto___37802 = G__37803;
continue;
} else {
}
break;
}

var G__37733 = args37731.length;
switch (G__37733) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37731.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35123__auto___37805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37805,out){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37805,out){
return (function (state_37771){
var state_val_37772 = (state_37771[(1)]);
if((state_val_37772 === (7))){
var inst_37767 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37773_37806 = state_37771__$1;
(statearr_37773_37806[(2)] = inst_37767);

(statearr_37773_37806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (1))){
var inst_37734 = (new Array(n));
var inst_37735 = inst_37734;
var inst_37736 = (0);
var state_37771__$1 = (function (){var statearr_37774 = state_37771;
(statearr_37774[(7)] = inst_37736);

(statearr_37774[(8)] = inst_37735);

return statearr_37774;
})();
var statearr_37775_37807 = state_37771__$1;
(statearr_37775_37807[(2)] = null);

(statearr_37775_37807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (4))){
var inst_37739 = (state_37771[(9)]);
var inst_37739__$1 = (state_37771[(2)]);
var inst_37740 = (inst_37739__$1 == null);
var inst_37741 = cljs.core.not.call(null,inst_37740);
var state_37771__$1 = (function (){var statearr_37776 = state_37771;
(statearr_37776[(9)] = inst_37739__$1);

return statearr_37776;
})();
if(inst_37741){
var statearr_37777_37808 = state_37771__$1;
(statearr_37777_37808[(1)] = (5));

} else {
var statearr_37778_37809 = state_37771__$1;
(statearr_37778_37809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (15))){
var inst_37761 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37779_37810 = state_37771__$1;
(statearr_37779_37810[(2)] = inst_37761);

(statearr_37779_37810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (13))){
var state_37771__$1 = state_37771;
var statearr_37780_37811 = state_37771__$1;
(statearr_37780_37811[(2)] = null);

(statearr_37780_37811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (6))){
var inst_37736 = (state_37771[(7)]);
var inst_37757 = (inst_37736 > (0));
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37757)){
var statearr_37781_37812 = state_37771__$1;
(statearr_37781_37812[(1)] = (12));

} else {
var statearr_37782_37813 = state_37771__$1;
(statearr_37782_37813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (3))){
var inst_37769 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37771__$1,inst_37769);
} else {
if((state_val_37772 === (12))){
var inst_37735 = (state_37771[(8)]);
var inst_37759 = cljs.core.vec.call(null,inst_37735);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37771__$1,(15),out,inst_37759);
} else {
if((state_val_37772 === (2))){
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(4),ch);
} else {
if((state_val_37772 === (11))){
var inst_37751 = (state_37771[(2)]);
var inst_37752 = (new Array(n));
var inst_37735 = inst_37752;
var inst_37736 = (0);
var state_37771__$1 = (function (){var statearr_37783 = state_37771;
(statearr_37783[(7)] = inst_37736);

(statearr_37783[(8)] = inst_37735);

(statearr_37783[(10)] = inst_37751);

return statearr_37783;
})();
var statearr_37784_37814 = state_37771__$1;
(statearr_37784_37814[(2)] = null);

(statearr_37784_37814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (9))){
var inst_37735 = (state_37771[(8)]);
var inst_37749 = cljs.core.vec.call(null,inst_37735);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37771__$1,(11),out,inst_37749);
} else {
if((state_val_37772 === (5))){
var inst_37736 = (state_37771[(7)]);
var inst_37739 = (state_37771[(9)]);
var inst_37735 = (state_37771[(8)]);
var inst_37744 = (state_37771[(11)]);
var inst_37743 = (inst_37735[inst_37736] = inst_37739);
var inst_37744__$1 = (inst_37736 + (1));
var inst_37745 = (inst_37744__$1 < n);
var state_37771__$1 = (function (){var statearr_37785 = state_37771;
(statearr_37785[(12)] = inst_37743);

(statearr_37785[(11)] = inst_37744__$1);

return statearr_37785;
})();
if(cljs.core.truth_(inst_37745)){
var statearr_37786_37815 = state_37771__$1;
(statearr_37786_37815[(1)] = (8));

} else {
var statearr_37787_37816 = state_37771__$1;
(statearr_37787_37816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (14))){
var inst_37764 = (state_37771[(2)]);
var inst_37765 = cljs.core.async.close_BANG_.call(null,out);
var state_37771__$1 = (function (){var statearr_37789 = state_37771;
(statearr_37789[(13)] = inst_37764);

return statearr_37789;
})();
var statearr_37790_37817 = state_37771__$1;
(statearr_37790_37817[(2)] = inst_37765);

(statearr_37790_37817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (10))){
var inst_37755 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37791_37818 = state_37771__$1;
(statearr_37791_37818[(2)] = inst_37755);

(statearr_37791_37818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (8))){
var inst_37735 = (state_37771[(8)]);
var inst_37744 = (state_37771[(11)]);
var tmp37788 = inst_37735;
var inst_37735__$1 = tmp37788;
var inst_37736 = inst_37744;
var state_37771__$1 = (function (){var statearr_37792 = state_37771;
(statearr_37792[(7)] = inst_37736);

(statearr_37792[(8)] = inst_37735__$1);

return statearr_37792;
})();
var statearr_37793_37819 = state_37771__$1;
(statearr_37793_37819[(2)] = null);

(statearr_37793_37819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___37805,out))
;
return ((function (switch__35011__auto__,c__35123__auto___37805,out){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37797[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37797[(1)] = (1));

return statearr_37797;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_37771){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37798){if((e37798 instanceof Object)){
var ex__35015__auto__ = e37798;
var statearr_37799_37820 = state_37771;
(statearr_37799_37820[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37821 = state_37771;
state_37771 = G__37821;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_37771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_37771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37805,out))
})();
var state__35125__auto__ = (function (){var statearr_37800 = f__35124__auto__.call(null);
(statearr_37800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37805);

return statearr_37800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37805,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37822 = [];
var len__31652__auto___37896 = arguments.length;
var i__31653__auto___37897 = (0);
while(true){
if((i__31653__auto___37897 < len__31652__auto___37896)){
args37822.push((arguments[i__31653__auto___37897]));

var G__37898 = (i__31653__auto___37897 + (1));
i__31653__auto___37897 = G__37898;
continue;
} else {
}
break;
}

var G__37824 = args37822.length;
switch (G__37824) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37822.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35123__auto___37900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___37900,out){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___37900,out){
return (function (state_37866){
var state_val_37867 = (state_37866[(1)]);
if((state_val_37867 === (7))){
var inst_37862 = (state_37866[(2)]);
var state_37866__$1 = state_37866;
var statearr_37868_37901 = state_37866__$1;
(statearr_37868_37901[(2)] = inst_37862);

(statearr_37868_37901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (1))){
var inst_37825 = [];
var inst_37826 = inst_37825;
var inst_37827 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37866__$1 = (function (){var statearr_37869 = state_37866;
(statearr_37869[(7)] = inst_37826);

(statearr_37869[(8)] = inst_37827);

return statearr_37869;
})();
var statearr_37870_37902 = state_37866__$1;
(statearr_37870_37902[(2)] = null);

(statearr_37870_37902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (4))){
var inst_37830 = (state_37866[(9)]);
var inst_37830__$1 = (state_37866[(2)]);
var inst_37831 = (inst_37830__$1 == null);
var inst_37832 = cljs.core.not.call(null,inst_37831);
var state_37866__$1 = (function (){var statearr_37871 = state_37866;
(statearr_37871[(9)] = inst_37830__$1);

return statearr_37871;
})();
if(inst_37832){
var statearr_37872_37903 = state_37866__$1;
(statearr_37872_37903[(1)] = (5));

} else {
var statearr_37873_37904 = state_37866__$1;
(statearr_37873_37904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (15))){
var inst_37856 = (state_37866[(2)]);
var state_37866__$1 = state_37866;
var statearr_37874_37905 = state_37866__$1;
(statearr_37874_37905[(2)] = inst_37856);

(statearr_37874_37905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (13))){
var state_37866__$1 = state_37866;
var statearr_37875_37906 = state_37866__$1;
(statearr_37875_37906[(2)] = null);

(statearr_37875_37906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (6))){
var inst_37826 = (state_37866[(7)]);
var inst_37851 = inst_37826.length;
var inst_37852 = (inst_37851 > (0));
var state_37866__$1 = state_37866;
if(cljs.core.truth_(inst_37852)){
var statearr_37876_37907 = state_37866__$1;
(statearr_37876_37907[(1)] = (12));

} else {
var statearr_37877_37908 = state_37866__$1;
(statearr_37877_37908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (3))){
var inst_37864 = (state_37866[(2)]);
var state_37866__$1 = state_37866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37866__$1,inst_37864);
} else {
if((state_val_37867 === (12))){
var inst_37826 = (state_37866[(7)]);
var inst_37854 = cljs.core.vec.call(null,inst_37826);
var state_37866__$1 = state_37866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37866__$1,(15),out,inst_37854);
} else {
if((state_val_37867 === (2))){
var state_37866__$1 = state_37866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37866__$1,(4),ch);
} else {
if((state_val_37867 === (11))){
var inst_37830 = (state_37866[(9)]);
var inst_37834 = (state_37866[(10)]);
var inst_37844 = (state_37866[(2)]);
var inst_37845 = [];
var inst_37846 = inst_37845.push(inst_37830);
var inst_37826 = inst_37845;
var inst_37827 = inst_37834;
var state_37866__$1 = (function (){var statearr_37878 = state_37866;
(statearr_37878[(11)] = inst_37844);

(statearr_37878[(12)] = inst_37846);

(statearr_37878[(7)] = inst_37826);

(statearr_37878[(8)] = inst_37827);

return statearr_37878;
})();
var statearr_37879_37909 = state_37866__$1;
(statearr_37879_37909[(2)] = null);

(statearr_37879_37909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (9))){
var inst_37826 = (state_37866[(7)]);
var inst_37842 = cljs.core.vec.call(null,inst_37826);
var state_37866__$1 = state_37866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37866__$1,(11),out,inst_37842);
} else {
if((state_val_37867 === (5))){
var inst_37830 = (state_37866[(9)]);
var inst_37834 = (state_37866[(10)]);
var inst_37827 = (state_37866[(8)]);
var inst_37834__$1 = f.call(null,inst_37830);
var inst_37835 = cljs.core._EQ_.call(null,inst_37834__$1,inst_37827);
var inst_37836 = cljs.core.keyword_identical_QMARK_.call(null,inst_37827,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37837 = (inst_37835) || (inst_37836);
var state_37866__$1 = (function (){var statearr_37880 = state_37866;
(statearr_37880[(10)] = inst_37834__$1);

return statearr_37880;
})();
if(cljs.core.truth_(inst_37837)){
var statearr_37881_37910 = state_37866__$1;
(statearr_37881_37910[(1)] = (8));

} else {
var statearr_37882_37911 = state_37866__$1;
(statearr_37882_37911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (14))){
var inst_37859 = (state_37866[(2)]);
var inst_37860 = cljs.core.async.close_BANG_.call(null,out);
var state_37866__$1 = (function (){var statearr_37884 = state_37866;
(statearr_37884[(13)] = inst_37859);

return statearr_37884;
})();
var statearr_37885_37912 = state_37866__$1;
(statearr_37885_37912[(2)] = inst_37860);

(statearr_37885_37912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (10))){
var inst_37849 = (state_37866[(2)]);
var state_37866__$1 = state_37866;
var statearr_37886_37913 = state_37866__$1;
(statearr_37886_37913[(2)] = inst_37849);

(statearr_37886_37913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37867 === (8))){
var inst_37830 = (state_37866[(9)]);
var inst_37834 = (state_37866[(10)]);
var inst_37826 = (state_37866[(7)]);
var inst_37839 = inst_37826.push(inst_37830);
var tmp37883 = inst_37826;
var inst_37826__$1 = tmp37883;
var inst_37827 = inst_37834;
var state_37866__$1 = (function (){var statearr_37887 = state_37866;
(statearr_37887[(7)] = inst_37826__$1);

(statearr_37887[(8)] = inst_37827);

(statearr_37887[(14)] = inst_37839);

return statearr_37887;
})();
var statearr_37888_37914 = state_37866__$1;
(statearr_37888_37914[(2)] = null);

(statearr_37888_37914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35123__auto___37900,out))
;
return ((function (switch__35011__auto__,c__35123__auto___37900,out){
return (function() {
var cljs$core$async$state_machine__35012__auto__ = null;
var cljs$core$async$state_machine__35012__auto____0 = (function (){
var statearr_37892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37892[(0)] = cljs$core$async$state_machine__35012__auto__);

(statearr_37892[(1)] = (1));

return statearr_37892;
});
var cljs$core$async$state_machine__35012__auto____1 = (function (state_37866){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37893){if((e37893 instanceof Object)){
var ex__35015__auto__ = e37893;
var statearr_37894_37915 = state_37866;
(statearr_37894_37915[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37916 = state_37866;
state_37866 = G__37916;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
cljs$core$async$state_machine__35012__auto__ = function(state_37866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35012__auto____1.call(this,state_37866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35012__auto____0;
cljs$core$async$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35012__auto____1;
return cljs$core$async$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___37900,out))
})();
var state__35125__auto__ = (function (){var statearr_37895 = f__35124__auto__.call(null);
(statearr_37895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___37900);

return statearr_37895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___37900,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map