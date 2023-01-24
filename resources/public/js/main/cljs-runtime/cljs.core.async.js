goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37702 = (function (f,blockable,meta37703){
this.f = f;
this.blockable = blockable;
this.meta37703 = meta37703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37704,meta37703__$1){
var self__ = this;
var _37704__$1 = this;
return (new cljs.core.async.t_cljs$core$async37702(self__.f,self__.blockable,meta37703__$1));
}));

(cljs.core.async.t_cljs$core$async37702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37704){
var self__ = this;
var _37704__$1 = this;
return self__.meta37703;
}));

(cljs.core.async.t_cljs$core$async37702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37703","meta37703",354249436,null)], null);
}));

(cljs.core.async.t_cljs$core$async37702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37702");

(cljs.core.async.t_cljs$core$async37702.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37702.
 */
cljs.core.async.__GT_t_cljs$core$async37702 = (function cljs$core$async$__GT_t_cljs$core$async37702(f,blockable,meta37703){
return (new cljs.core.async.t_cljs$core$async37702(f,blockable,meta37703));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37701 = arguments.length;
switch (G__37701) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async37702(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__37720 = arguments.length;
switch (G__37720) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37723 = arguments.length;
switch (G__37723) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__37726 = arguments.length;
switch (G__37726) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40114 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40114) : fn1.call(null,val_40114));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40114) : fn1.call(null,val_40114));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37736 = arguments.length;
switch (G__37736) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___40125 = n;
var x_40126 = (0);
while(true){
if((x_40126 < n__5636__auto___40125)){
(a[x_40126] = x_40126);

var G__40130 = (x_40126 + (1));
x_40126 = G__40130;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37741 = (function (flag,meta37742){
this.flag = flag;
this.meta37742 = meta37742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37743,meta37742__$1){
var self__ = this;
var _37743__$1 = this;
return (new cljs.core.async.t_cljs$core$async37741(self__.flag,meta37742__$1));
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37743){
var self__ = this;
var _37743__$1 = this;
return self__.meta37742;
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37742","meta37742",-478368234,null)], null);
}));

(cljs.core.async.t_cljs$core$async37741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37741");

(cljs.core.async.t_cljs$core$async37741.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37741.
 */
cljs.core.async.__GT_t_cljs$core$async37741 = (function cljs$core$async$__GT_t_cljs$core$async37741(flag,meta37742){
return (new cljs.core.async.t_cljs$core$async37741(flag,meta37742));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async37741(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37760 = (function (flag,cb,meta37761){
this.flag = flag;
this.cb = cb;
this.meta37761 = meta37761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37762,meta37761__$1){
var self__ = this;
var _37762__$1 = this;
return (new cljs.core.async.t_cljs$core$async37760(self__.flag,self__.cb,meta37761__$1));
}));

(cljs.core.async.t_cljs$core$async37760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37762){
var self__ = this;
var _37762__$1 = this;
return self__.meta37761;
}));

(cljs.core.async.t_cljs$core$async37760.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37761","meta37761",-1743579628,null)], null);
}));

(cljs.core.async.t_cljs$core$async37760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37760");

(cljs.core.async.t_cljs$core$async37760.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37760.
 */
cljs.core.async.__GT_t_cljs$core$async37760 = (function cljs$core$async$__GT_t_cljs$core$async37760(flag,cb,meta37761){
return (new cljs.core.async.t_cljs$core$async37760(flag,cb,meta37761));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async37760(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37770_SHARP_){
var G__37778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37770_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37778) : fret.call(null,G__37778));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37772_SHARP_){
var G__37780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37772_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37780) : fret.call(null,G__37780));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40153 = (i + (1));
i = G__40153;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___40154 = arguments.length;
var i__5770__auto___40155 = (0);
while(true){
if((i__5770__auto___40155 < len__5769__auto___40154)){
args__5775__auto__.push((arguments[i__5770__auto___40155]));

var G__40156 = (i__5770__auto___40155 + (1));
i__5770__auto___40155 = G__40156;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37785){
var map__37786 = p__37785;
var map__37786__$1 = cljs.core.__destructure_map(map__37786);
var opts = map__37786__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37781){
var G__37782 = cljs.core.first(seq37781);
var seq37781__$1 = cljs.core.next(seq37781);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37782,seq37781__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
return cljs.core.deref(ret);
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
var G__37789 = arguments.length;
switch (G__37789) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37628__auto___40162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_37852){
var state_val_37853 = (state_37852[(1)]);
if((state_val_37853 === (7))){
var inst_37846 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
var statearr_37859_40164 = state_37852__$1;
(statearr_37859_40164[(2)] = inst_37846);

(statearr_37859_40164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (1))){
var state_37852__$1 = state_37852;
var statearr_37860_40166 = state_37852__$1;
(statearr_37860_40166[(2)] = null);

(statearr_37860_40166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (4))){
var inst_37809 = (state_37852[(7)]);
var inst_37809__$1 = (state_37852[(2)]);
var inst_37822 = (inst_37809__$1 == null);
var state_37852__$1 = (function (){var statearr_37861 = state_37852;
(statearr_37861[(7)] = inst_37809__$1);

return statearr_37861;
})();
if(cljs.core.truth_(inst_37822)){
var statearr_37862_40169 = state_37852__$1;
(statearr_37862_40169[(1)] = (5));

} else {
var statearr_37864_40170 = state_37852__$1;
(statearr_37864_40170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (13))){
var state_37852__$1 = state_37852;
var statearr_37866_40171 = state_37852__$1;
(statearr_37866_40171[(2)] = null);

(statearr_37866_40171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (6))){
var inst_37809 = (state_37852[(7)]);
var state_37852__$1 = state_37852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37852__$1,(11),to,inst_37809);
} else {
if((state_val_37853 === (3))){
var inst_37849 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37852__$1,inst_37849);
} else {
if((state_val_37853 === (12))){
var state_37852__$1 = state_37852;
var statearr_37872_40172 = state_37852__$1;
(statearr_37872_40172[(2)] = null);

(statearr_37872_40172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (2))){
var state_37852__$1 = state_37852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37852__$1,(4),from);
} else {
if((state_val_37853 === (11))){
var inst_37833 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
if(cljs.core.truth_(inst_37833)){
var statearr_37874_40175 = state_37852__$1;
(statearr_37874_40175[(1)] = (12));

} else {
var statearr_37875_40176 = state_37852__$1;
(statearr_37875_40176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (9))){
var state_37852__$1 = state_37852;
var statearr_37876_40177 = state_37852__$1;
(statearr_37876_40177[(2)] = null);

(statearr_37876_40177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (5))){
var state_37852__$1 = state_37852;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37877_40179 = state_37852__$1;
(statearr_37877_40179[(1)] = (8));

} else {
var statearr_37878_40180 = state_37852__$1;
(statearr_37878_40180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (14))){
var inst_37844 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
var statearr_37879_40181 = state_37852__$1;
(statearr_37879_40181[(2)] = inst_37844);

(statearr_37879_40181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (10))){
var inst_37830 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
var statearr_37883_40182 = state_37852__$1;
(statearr_37883_40182[(2)] = inst_37830);

(statearr_37883_40182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (8))){
var inst_37826 = cljs.core.async.close_BANG_(to);
var state_37852__$1 = state_37852;
var statearr_37884_40184 = state_37852__$1;
(statearr_37884_40184[(2)] = inst_37826);

(statearr_37884_40184[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_37885 = [null,null,null,null,null,null,null,null];
(statearr_37885[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_37885[(1)] = (1));

return statearr_37885;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_37852){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_37852);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e37886){var ex__37254__auto__ = e37886;
var statearr_37887_40188 = state_37852;
(statearr_37887_40188[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_37852[(4)]))){
var statearr_37888_40189 = state_37852;
(statearr_37888_40189[(1)] = cljs.core.first((state_37852[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40191 = state_37852;
state_37852 = G__40191;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_37852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_37852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_37892 = f__37629__auto__();
(statearr_37892[(6)] = c__37628__auto___40162);

return statearr_37892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__37896){
var vec__37897 = p__37896;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37897,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37897,(1),null);
var job = vec__37897;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37628__auto___40194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_37906){
var state_val_37907 = (state_37906[(1)]);
if((state_val_37907 === (1))){
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37906__$1,(2),res,v);
} else {
if((state_val_37907 === (2))){
var inst_37903 = (state_37906[(2)]);
var inst_37904 = cljs.core.async.close_BANG_(res);
var state_37906__$1 = (function (){var statearr_37908 = state_37906;
(statearr_37908[(7)] = inst_37903);

return statearr_37908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37906__$1,inst_37904);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0 = (function (){
var statearr_37911 = [null,null,null,null,null,null,null,null];
(statearr_37911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__);

(statearr_37911[(1)] = (1));

return statearr_37911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1 = (function (state_37906){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_37906);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e37912){var ex__37254__auto__ = e37912;
var statearr_37913_40197 = state_37906;
(statearr_37913_40197[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_37906[(4)]))){
var statearr_37914_40198 = state_37906;
(statearr_37914_40198[(1)] = cljs.core.first((state_37906[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40199 = state_37906;
state_37906 = G__40199;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = function(state_37906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1.call(this,state_37906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_37917 = f__37629__auto__();
(statearr_37917[(6)] = c__37628__auto___40194);

return statearr_37917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37918){
var vec__37919 = p__37918;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37919,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37919,(1),null);
var job = vec__37919;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___40201 = n;
var __40202 = (0);
while(true){
if((__40202 < n__5636__auto___40201)){
var G__37922_40203 = type;
var G__37922_40204__$1 = (((G__37922_40203 instanceof cljs.core.Keyword))?G__37922_40203.fqn:null);
switch (G__37922_40204__$1) {
case "compute":
var c__37628__auto___40206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40202,c__37628__auto___40206,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async){
return (function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = ((function (__40202,c__37628__auto___40206,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async){
return (function (state_37939){
var state_val_37940 = (state_37939[(1)]);
if((state_val_37940 === (1))){
var state_37939__$1 = state_37939;
var statearr_37941_40207 = state_37939__$1;
(statearr_37941_40207[(2)] = null);

(statearr_37941_40207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (2))){
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37939__$1,(4),jobs);
} else {
if((state_val_37940 === (3))){
var inst_37937 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37939__$1,inst_37937);
} else {
if((state_val_37940 === (4))){
var inst_37927 = (state_37939[(2)]);
var inst_37930 = process__$1(inst_37927);
var state_37939__$1 = state_37939;
if(cljs.core.truth_(inst_37930)){
var statearr_37942_40209 = state_37939__$1;
(statearr_37942_40209[(1)] = (5));

} else {
var statearr_37943_40210 = state_37939__$1;
(statearr_37943_40210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (5))){
var state_37939__$1 = state_37939;
var statearr_37944_40211 = state_37939__$1;
(statearr_37944_40211[(2)] = null);

(statearr_37944_40211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (6))){
var state_37939__$1 = state_37939;
var statearr_37945_40212 = state_37939__$1;
(statearr_37945_40212[(2)] = null);

(statearr_37945_40212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (7))){
var inst_37935 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_37946_40213 = state_37939__$1;
(statearr_37946_40213[(2)] = inst_37935);

(statearr_37946_40213[(1)] = (3));


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
});})(__40202,c__37628__auto___40206,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async))
;
return ((function (__40202,switch__37250__auto__,c__37628__auto___40206,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0 = (function (){
var statearr_37947 = [null,null,null,null,null,null,null];
(statearr_37947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__);

(statearr_37947[(1)] = (1));

return statearr_37947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1 = (function (state_37939){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_37939);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e37948){var ex__37254__auto__ = e37948;
var statearr_37949_40216 = state_37939;
(statearr_37949_40216[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_37939[(4)]))){
var statearr_37950_40217 = state_37939;
(statearr_37950_40217[(1)] = cljs.core.first((state_37939[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40218 = state_37939;
state_37939 = G__40218;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = function(state_37939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1.call(this,state_37939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__;
})()
;})(__40202,switch__37250__auto__,c__37628__auto___40206,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async))
})();
var state__37630__auto__ = (function (){var statearr_37953 = f__37629__auto__();
(statearr_37953[(6)] = c__37628__auto___40206);

return statearr_37953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
});})(__40202,c__37628__auto___40206,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async))
);


break;
case "async":
var c__37628__auto___40220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40202,c__37628__auto___40220,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async){
return (function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = ((function (__40202,c__37628__auto___40220,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async){
return (function (state_37971){
var state_val_37972 = (state_37971[(1)]);
if((state_val_37972 === (1))){
var state_37971__$1 = state_37971;
var statearr_37978_40222 = state_37971__$1;
(statearr_37978_40222[(2)] = null);

(statearr_37978_40222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37972 === (2))){
var state_37971__$1 = state_37971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37971__$1,(4),jobs);
} else {
if((state_val_37972 === (3))){
var inst_37966 = (state_37971[(2)]);
var state_37971__$1 = state_37971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37971__$1,inst_37966);
} else {
if((state_val_37972 === (4))){
var inst_37957 = (state_37971[(2)]);
var inst_37958 = async(inst_37957);
var state_37971__$1 = state_37971;
if(cljs.core.truth_(inst_37958)){
var statearr_37983_40223 = state_37971__$1;
(statearr_37983_40223[(1)] = (5));

} else {
var statearr_37984_40225 = state_37971__$1;
(statearr_37984_40225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37972 === (5))){
var state_37971__$1 = state_37971;
var statearr_37985_40227 = state_37971__$1;
(statearr_37985_40227[(2)] = null);

(statearr_37985_40227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37972 === (6))){
var state_37971__$1 = state_37971;
var statearr_37987_40228 = state_37971__$1;
(statearr_37987_40228[(2)] = null);

(statearr_37987_40228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37972 === (7))){
var inst_37964 = (state_37971[(2)]);
var state_37971__$1 = state_37971;
var statearr_37988_40229 = state_37971__$1;
(statearr_37988_40229[(2)] = inst_37964);

(statearr_37988_40229[(1)] = (3));


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
});})(__40202,c__37628__auto___40220,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async))
;
return ((function (__40202,switch__37250__auto__,c__37628__auto___40220,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0 = (function (){
var statearr_37990 = [null,null,null,null,null,null,null];
(statearr_37990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__);

(statearr_37990[(1)] = (1));

return statearr_37990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1 = (function (state_37971){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_37971);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e37991){var ex__37254__auto__ = e37991;
var statearr_37992_40232 = state_37971;
(statearr_37992_40232[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_37971[(4)]))){
var statearr_37993_40234 = state_37971;
(statearr_37993_40234[(1)] = cljs.core.first((state_37971[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40235 = state_37971;
state_37971 = G__40235;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = function(state_37971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1.call(this,state_37971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__;
})()
;})(__40202,switch__37250__auto__,c__37628__auto___40220,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async))
})();
var state__37630__auto__ = (function (){var statearr_37996 = f__37629__auto__();
(statearr_37996[(6)] = c__37628__auto___40220);

return statearr_37996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
});})(__40202,c__37628__auto___40220,G__37922_40203,G__37922_40204__$1,n__5636__auto___40201,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37922_40204__$1)].join('')));

}

var G__40238 = (__40202 + (1));
__40202 = G__40238;
continue;
} else {
}
break;
}

var c__37628__auto___40239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38021){
var state_val_38022 = (state_38021[(1)]);
if((state_val_38022 === (7))){
var inst_38017 = (state_38021[(2)]);
var state_38021__$1 = state_38021;
var statearr_38025_40240 = state_38021__$1;
(statearr_38025_40240[(2)] = inst_38017);

(statearr_38025_40240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (1))){
var state_38021__$1 = state_38021;
var statearr_38027_40241 = state_38021__$1;
(statearr_38027_40241[(2)] = null);

(statearr_38027_40241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (4))){
var inst_38000 = (state_38021[(7)]);
var inst_38000__$1 = (state_38021[(2)]);
var inst_38001 = (inst_38000__$1 == null);
var state_38021__$1 = (function (){var statearr_38031 = state_38021;
(statearr_38031[(7)] = inst_38000__$1);

return statearr_38031;
})();
if(cljs.core.truth_(inst_38001)){
var statearr_38032_40242 = state_38021__$1;
(statearr_38032_40242[(1)] = (5));

} else {
var statearr_38033_40243 = state_38021__$1;
(statearr_38033_40243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (6))){
var inst_38000 = (state_38021[(7)]);
var inst_38006 = (state_38021[(8)]);
var inst_38006__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38009 = [inst_38000,inst_38006__$1];
var inst_38010 = (new cljs.core.PersistentVector(null,2,(5),inst_38007,inst_38009,null));
var state_38021__$1 = (function (){var statearr_38035 = state_38021;
(statearr_38035[(8)] = inst_38006__$1);

return statearr_38035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38021__$1,(8),jobs,inst_38010);
} else {
if((state_val_38022 === (3))){
var inst_38019 = (state_38021[(2)]);
var state_38021__$1 = state_38021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38021__$1,inst_38019);
} else {
if((state_val_38022 === (2))){
var state_38021__$1 = state_38021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38021__$1,(4),from);
} else {
if((state_val_38022 === (9))){
var inst_38014 = (state_38021[(2)]);
var state_38021__$1 = (function (){var statearr_38036 = state_38021;
(statearr_38036[(9)] = inst_38014);

return statearr_38036;
})();
var statearr_38037_40247 = state_38021__$1;
(statearr_38037_40247[(2)] = null);

(statearr_38037_40247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (5))){
var inst_38003 = cljs.core.async.close_BANG_(jobs);
var state_38021__$1 = state_38021;
var statearr_38038_40250 = state_38021__$1;
(statearr_38038_40250[(2)] = inst_38003);

(statearr_38038_40250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (8))){
var inst_38006 = (state_38021[(8)]);
var inst_38012 = (state_38021[(2)]);
var state_38021__$1 = (function (){var statearr_38040 = state_38021;
(statearr_38040[(10)] = inst_38012);

return statearr_38040;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38021__$1,(9),results,inst_38006);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0 = (function (){
var statearr_38042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__);

(statearr_38042[(1)] = (1));

return statearr_38042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1 = (function (state_38021){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38021);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38047){var ex__37254__auto__ = e38047;
var statearr_38049_40251 = state_38021;
(statearr_38049_40251[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38021[(4)]))){
var statearr_38050_40252 = state_38021;
(statearr_38050_40252[(1)] = cljs.core.first((state_38021[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40256 = state_38021;
state_38021 = G__40256;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = function(state_38021){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1.call(this,state_38021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38051 = f__37629__auto__();
(statearr_38051[(6)] = c__37628__auto___40239);

return statearr_38051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


var c__37628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38091){
var state_val_38092 = (state_38091[(1)]);
if((state_val_38092 === (7))){
var inst_38087 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38094_40259 = state_38091__$1;
(statearr_38094_40259[(2)] = inst_38087);

(statearr_38094_40259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (20))){
var state_38091__$1 = state_38091;
var statearr_38095_40260 = state_38091__$1;
(statearr_38095_40260[(2)] = null);

(statearr_38095_40260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (1))){
var state_38091__$1 = state_38091;
var statearr_38096_40261 = state_38091__$1;
(statearr_38096_40261[(2)] = null);

(statearr_38096_40261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (4))){
var inst_38054 = (state_38091[(7)]);
var inst_38054__$1 = (state_38091[(2)]);
var inst_38055 = (inst_38054__$1 == null);
var state_38091__$1 = (function (){var statearr_38097 = state_38091;
(statearr_38097[(7)] = inst_38054__$1);

return statearr_38097;
})();
if(cljs.core.truth_(inst_38055)){
var statearr_38099_40262 = state_38091__$1;
(statearr_38099_40262[(1)] = (5));

} else {
var statearr_38100_40263 = state_38091__$1;
(statearr_38100_40263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (15))){
var inst_38068 = (state_38091[(8)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38091__$1,(18),to,inst_38068);
} else {
if((state_val_38092 === (21))){
var inst_38081 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38103_40264 = state_38091__$1;
(statearr_38103_40264[(2)] = inst_38081);

(statearr_38103_40264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (13))){
var inst_38083 = (state_38091[(2)]);
var state_38091__$1 = (function (){var statearr_38105 = state_38091;
(statearr_38105[(9)] = inst_38083);

return statearr_38105;
})();
var statearr_38106_40267 = state_38091__$1;
(statearr_38106_40267[(2)] = null);

(statearr_38106_40267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (6))){
var inst_38054 = (state_38091[(7)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38091__$1,(11),inst_38054);
} else {
if((state_val_38092 === (17))){
var inst_38076 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
if(cljs.core.truth_(inst_38076)){
var statearr_38109_40269 = state_38091__$1;
(statearr_38109_40269[(1)] = (19));

} else {
var statearr_38110_40270 = state_38091__$1;
(statearr_38110_40270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (3))){
var inst_38089 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38091__$1,inst_38089);
} else {
if((state_val_38092 === (12))){
var inst_38064 = (state_38091[(10)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38091__$1,(14),inst_38064);
} else {
if((state_val_38092 === (2))){
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38091__$1,(4),results);
} else {
if((state_val_38092 === (19))){
var state_38091__$1 = state_38091;
var statearr_38115_40273 = state_38091__$1;
(statearr_38115_40273[(2)] = null);

(statearr_38115_40273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (11))){
var inst_38064 = (state_38091[(2)]);
var state_38091__$1 = (function (){var statearr_38116 = state_38091;
(statearr_38116[(10)] = inst_38064);

return statearr_38116;
})();
var statearr_38117_40276 = state_38091__$1;
(statearr_38117_40276[(2)] = null);

(statearr_38117_40276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (9))){
var state_38091__$1 = state_38091;
var statearr_38118_40277 = state_38091__$1;
(statearr_38118_40277[(2)] = null);

(statearr_38118_40277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (5))){
var state_38091__$1 = state_38091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38119_40279 = state_38091__$1;
(statearr_38119_40279[(1)] = (8));

} else {
var statearr_38120_40280 = state_38091__$1;
(statearr_38120_40280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (14))){
var inst_38070 = (state_38091[(11)]);
var inst_38068 = (state_38091[(8)]);
var inst_38068__$1 = (state_38091[(2)]);
var inst_38069 = (inst_38068__$1 == null);
var inst_38070__$1 = cljs.core.not(inst_38069);
var state_38091__$1 = (function (){var statearr_38121 = state_38091;
(statearr_38121[(11)] = inst_38070__$1);

(statearr_38121[(8)] = inst_38068__$1);

return statearr_38121;
})();
if(inst_38070__$1){
var statearr_38122_40283 = state_38091__$1;
(statearr_38122_40283[(1)] = (15));

} else {
var statearr_38123_40284 = state_38091__$1;
(statearr_38123_40284[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (16))){
var inst_38070 = (state_38091[(11)]);
var state_38091__$1 = state_38091;
var statearr_38124_40287 = state_38091__$1;
(statearr_38124_40287[(2)] = inst_38070);

(statearr_38124_40287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (10))){
var inst_38061 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38125_40290 = state_38091__$1;
(statearr_38125_40290[(2)] = inst_38061);

(statearr_38125_40290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (18))){
var inst_38073 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38126_40293 = state_38091__$1;
(statearr_38126_40293[(2)] = inst_38073);

(statearr_38126_40293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (8))){
var inst_38058 = cljs.core.async.close_BANG_(to);
var state_38091__$1 = state_38091;
var statearr_38127_40294 = state_38091__$1;
(statearr_38127_40294[(2)] = inst_38058);

(statearr_38127_40294[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0 = (function (){
var statearr_38128 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__);

(statearr_38128[(1)] = (1));

return statearr_38128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1 = (function (state_38091){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38091);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38129){var ex__37254__auto__ = e38129;
var statearr_38132_40300 = state_38091;
(statearr_38132_40300[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38091[(4)]))){
var statearr_38133_40303 = state_38091;
(statearr_38133_40303[(1)] = cljs.core.first((state_38091[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40304 = state_38091;
state_38091 = G__40304;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__ = function(state_38091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1.call(this,state_38091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38136 = f__37629__auto__();
(statearr_38136[(6)] = c__37628__auto__);

return statearr_38136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

return c__37628__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38145 = arguments.length;
switch (G__38145) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__38158 = arguments.length;
switch (G__38158) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__38172 = arguments.length;
switch (G__38172) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37628__auto___40320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38205){
var state_val_38206 = (state_38205[(1)]);
if((state_val_38206 === (7))){
var inst_38200 = (state_38205[(2)]);
var state_38205__$1 = state_38205;
var statearr_38214_40321 = state_38205__$1;
(statearr_38214_40321[(2)] = inst_38200);

(statearr_38214_40321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (1))){
var state_38205__$1 = state_38205;
var statearr_38221_40322 = state_38205__$1;
(statearr_38221_40322[(2)] = null);

(statearr_38221_40322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (4))){
var inst_38181 = (state_38205[(7)]);
var inst_38181__$1 = (state_38205[(2)]);
var inst_38182 = (inst_38181__$1 == null);
var state_38205__$1 = (function (){var statearr_38230 = state_38205;
(statearr_38230[(7)] = inst_38181__$1);

return statearr_38230;
})();
if(cljs.core.truth_(inst_38182)){
var statearr_38231_40325 = state_38205__$1;
(statearr_38231_40325[(1)] = (5));

} else {
var statearr_38232_40327 = state_38205__$1;
(statearr_38232_40327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (13))){
var state_38205__$1 = state_38205;
var statearr_38233_40328 = state_38205__$1;
(statearr_38233_40328[(2)] = null);

(statearr_38233_40328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (6))){
var inst_38181 = (state_38205[(7)]);
var inst_38187 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38181) : p.call(null,inst_38181));
var state_38205__$1 = state_38205;
if(cljs.core.truth_(inst_38187)){
var statearr_38236_40331 = state_38205__$1;
(statearr_38236_40331[(1)] = (9));

} else {
var statearr_38237_40332 = state_38205__$1;
(statearr_38237_40332[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (3))){
var inst_38202 = (state_38205[(2)]);
var state_38205__$1 = state_38205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38205__$1,inst_38202);
} else {
if((state_val_38206 === (12))){
var state_38205__$1 = state_38205;
var statearr_38240_40333 = state_38205__$1;
(statearr_38240_40333[(2)] = null);

(statearr_38240_40333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (2))){
var state_38205__$1 = state_38205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38205__$1,(4),ch);
} else {
if((state_val_38206 === (11))){
var inst_38181 = (state_38205[(7)]);
var inst_38191 = (state_38205[(2)]);
var state_38205__$1 = state_38205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38205__$1,(8),inst_38191,inst_38181);
} else {
if((state_val_38206 === (9))){
var state_38205__$1 = state_38205;
var statearr_38244_40334 = state_38205__$1;
(statearr_38244_40334[(2)] = tc);

(statearr_38244_40334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (5))){
var inst_38184 = cljs.core.async.close_BANG_(tc);
var inst_38185 = cljs.core.async.close_BANG_(fc);
var state_38205__$1 = (function (){var statearr_38247 = state_38205;
(statearr_38247[(8)] = inst_38184);

return statearr_38247;
})();
var statearr_38249_40335 = state_38205__$1;
(statearr_38249_40335[(2)] = inst_38185);

(statearr_38249_40335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (14))){
var inst_38198 = (state_38205[(2)]);
var state_38205__$1 = state_38205;
var statearr_38251_40336 = state_38205__$1;
(statearr_38251_40336[(2)] = inst_38198);

(statearr_38251_40336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (10))){
var state_38205__$1 = state_38205;
var statearr_38252_40338 = state_38205__$1;
(statearr_38252_40338[(2)] = fc);

(statearr_38252_40338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38206 === (8))){
var inst_38193 = (state_38205[(2)]);
var state_38205__$1 = state_38205;
if(cljs.core.truth_(inst_38193)){
var statearr_38253_40339 = state_38205__$1;
(statearr_38253_40339[(1)] = (12));

} else {
var statearr_38254_40340 = state_38205__$1;
(statearr_38254_40340[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_38257 = [null,null,null,null,null,null,null,null,null];
(statearr_38257[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_38257[(1)] = (1));

return statearr_38257;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_38205){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38205);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38258){var ex__37254__auto__ = e38258;
var statearr_38259_40341 = state_38205;
(statearr_38259_40341[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38205[(4)]))){
var statearr_38260_40342 = state_38205;
(statearr_38260_40342[(1)] = cljs.core.first((state_38205[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40343 = state_38205;
state_38205 = G__40343;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_38205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_38205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38265 = f__37629__auto__();
(statearr_38265[(6)] = c__37628__auto___40320);

return statearr_38265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38291){
var state_val_38292 = (state_38291[(1)]);
if((state_val_38292 === (7))){
var inst_38283 = (state_38291[(2)]);
var state_38291__$1 = state_38291;
var statearr_38294_40348 = state_38291__$1;
(statearr_38294_40348[(2)] = inst_38283);

(statearr_38294_40348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (1))){
var inst_38266 = init;
var inst_38267 = inst_38266;
var state_38291__$1 = (function (){var statearr_38295 = state_38291;
(statearr_38295[(7)] = inst_38267);

return statearr_38295;
})();
var statearr_38296_40354 = state_38291__$1;
(statearr_38296_40354[(2)] = null);

(statearr_38296_40354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (4))){
var inst_38270 = (state_38291[(8)]);
var inst_38270__$1 = (state_38291[(2)]);
var inst_38271 = (inst_38270__$1 == null);
var state_38291__$1 = (function (){var statearr_38301 = state_38291;
(statearr_38301[(8)] = inst_38270__$1);

return statearr_38301;
})();
if(cljs.core.truth_(inst_38271)){
var statearr_38302_40357 = state_38291__$1;
(statearr_38302_40357[(1)] = (5));

} else {
var statearr_38303_40358 = state_38291__$1;
(statearr_38303_40358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (6))){
var inst_38274 = (state_38291[(9)]);
var inst_38267 = (state_38291[(7)]);
var inst_38270 = (state_38291[(8)]);
var inst_38274__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38267,inst_38270) : f.call(null,inst_38267,inst_38270));
var inst_38275 = cljs.core.reduced_QMARK_(inst_38274__$1);
var state_38291__$1 = (function (){var statearr_38305 = state_38291;
(statearr_38305[(9)] = inst_38274__$1);

return statearr_38305;
})();
if(inst_38275){
var statearr_38306_40364 = state_38291__$1;
(statearr_38306_40364[(1)] = (8));

} else {
var statearr_38310_40365 = state_38291__$1;
(statearr_38310_40365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (3))){
var inst_38285 = (state_38291[(2)]);
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38291__$1,inst_38285);
} else {
if((state_val_38292 === (2))){
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38291__$1,(4),ch);
} else {
if((state_val_38292 === (9))){
var inst_38274 = (state_38291[(9)]);
var inst_38267 = inst_38274;
var state_38291__$1 = (function (){var statearr_38311 = state_38291;
(statearr_38311[(7)] = inst_38267);

return statearr_38311;
})();
var statearr_38312_40367 = state_38291__$1;
(statearr_38312_40367[(2)] = null);

(statearr_38312_40367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (5))){
var inst_38267 = (state_38291[(7)]);
var state_38291__$1 = state_38291;
var statearr_38313_40368 = state_38291__$1;
(statearr_38313_40368[(2)] = inst_38267);

(statearr_38313_40368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (10))){
var inst_38281 = (state_38291[(2)]);
var state_38291__$1 = state_38291;
var statearr_38314_40372 = state_38291__$1;
(statearr_38314_40372[(2)] = inst_38281);

(statearr_38314_40372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (8))){
var inst_38274 = (state_38291[(9)]);
var inst_38277 = cljs.core.deref(inst_38274);
var state_38291__$1 = state_38291;
var statearr_38315_40374 = state_38291__$1;
(statearr_38315_40374[(2)] = inst_38277);

(statearr_38315_40374[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37251__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37251__auto____0 = (function (){
var statearr_38317 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38317[(0)] = cljs$core$async$reduce_$_state_machine__37251__auto__);

(statearr_38317[(1)] = (1));

return statearr_38317;
});
var cljs$core$async$reduce_$_state_machine__37251__auto____1 = (function (state_38291){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38291);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38318){var ex__37254__auto__ = e38318;
var statearr_38321_40377 = state_38291;
(statearr_38321_40377[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38291[(4)]))){
var statearr_38322_40378 = state_38291;
(statearr_38322_40378[(1)] = cljs.core.first((state_38291[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40383 = state_38291;
state_38291 = G__40383;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37251__auto__ = function(state_38291){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37251__auto____1.call(this,state_38291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37251__auto____0;
cljs$core$async$reduce_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37251__auto____1;
return cljs$core$async$reduce_$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38323 = f__37629__auto__();
(statearr_38323[(6)] = c__37628__auto__);

return statearr_38323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

return c__37628__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38335){
var state_val_38336 = (state_38335[(1)]);
if((state_val_38336 === (1))){
var inst_38330 = cljs.core.async.reduce(f__$1,init,ch);
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38335__$1,(2),inst_38330);
} else {
if((state_val_38336 === (2))){
var inst_38332 = (state_38335[(2)]);
var inst_38333 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38332) : f__$1.call(null,inst_38332));
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38335__$1,inst_38333);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37251__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37251__auto____0 = (function (){
var statearr_38344 = [null,null,null,null,null,null,null];
(statearr_38344[(0)] = cljs$core$async$transduce_$_state_machine__37251__auto__);

(statearr_38344[(1)] = (1));

return statearr_38344;
});
var cljs$core$async$transduce_$_state_machine__37251__auto____1 = (function (state_38335){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38335);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38345){var ex__37254__auto__ = e38345;
var statearr_38346_40386 = state_38335;
(statearr_38346_40386[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38335[(4)]))){
var statearr_38347_40388 = state_38335;
(statearr_38347_40388[(1)] = cljs.core.first((state_38335[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40391 = state_38335;
state_38335 = G__40391;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37251__auto__ = function(state_38335){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37251__auto____1.call(this,state_38335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37251__auto____0;
cljs$core$async$transduce_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37251__auto____1;
return cljs$core$async$transduce_$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38351 = f__37629__auto__();
(statearr_38351[(6)] = c__37628__auto__);

return statearr_38351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

return c__37628__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__38353 = arguments.length;
switch (G__38353) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38381){
var state_val_38382 = (state_38381[(1)]);
if((state_val_38382 === (7))){
var inst_38363 = (state_38381[(2)]);
var state_38381__$1 = state_38381;
var statearr_38384_40400 = state_38381__$1;
(statearr_38384_40400[(2)] = inst_38363);

(statearr_38384_40400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (1))){
var inst_38357 = cljs.core.seq(coll);
var inst_38358 = inst_38357;
var state_38381__$1 = (function (){var statearr_38385 = state_38381;
(statearr_38385[(7)] = inst_38358);

return statearr_38385;
})();
var statearr_38386_40401 = state_38381__$1;
(statearr_38386_40401[(2)] = null);

(statearr_38386_40401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (4))){
var inst_38358 = (state_38381[(7)]);
var inst_38361 = cljs.core.first(inst_38358);
var state_38381__$1 = state_38381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38381__$1,(7),ch,inst_38361);
} else {
if((state_val_38382 === (13))){
var inst_38375 = (state_38381[(2)]);
var state_38381__$1 = state_38381;
var statearr_38388_40403 = state_38381__$1;
(statearr_38388_40403[(2)] = inst_38375);

(statearr_38388_40403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (6))){
var inst_38366 = (state_38381[(2)]);
var state_38381__$1 = state_38381;
if(cljs.core.truth_(inst_38366)){
var statearr_38389_40404 = state_38381__$1;
(statearr_38389_40404[(1)] = (8));

} else {
var statearr_38390_40405 = state_38381__$1;
(statearr_38390_40405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (3))){
var inst_38379 = (state_38381[(2)]);
var state_38381__$1 = state_38381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38381__$1,inst_38379);
} else {
if((state_val_38382 === (12))){
var state_38381__$1 = state_38381;
var statearr_38391_40406 = state_38381__$1;
(statearr_38391_40406[(2)] = null);

(statearr_38391_40406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (2))){
var inst_38358 = (state_38381[(7)]);
var state_38381__$1 = state_38381;
if(cljs.core.truth_(inst_38358)){
var statearr_38392_40407 = state_38381__$1;
(statearr_38392_40407[(1)] = (4));

} else {
var statearr_38394_40408 = state_38381__$1;
(statearr_38394_40408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (11))){
var inst_38372 = cljs.core.async.close_BANG_(ch);
var state_38381__$1 = state_38381;
var statearr_38396_40409 = state_38381__$1;
(statearr_38396_40409[(2)] = inst_38372);

(statearr_38396_40409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (9))){
var state_38381__$1 = state_38381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38397_40410 = state_38381__$1;
(statearr_38397_40410[(1)] = (11));

} else {
var statearr_38398_40411 = state_38381__$1;
(statearr_38398_40411[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (5))){
var inst_38358 = (state_38381[(7)]);
var state_38381__$1 = state_38381;
var statearr_38399_40412 = state_38381__$1;
(statearr_38399_40412[(2)] = inst_38358);

(statearr_38399_40412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (10))){
var inst_38377 = (state_38381[(2)]);
var state_38381__$1 = state_38381;
var statearr_38401_40413 = state_38381__$1;
(statearr_38401_40413[(2)] = inst_38377);

(statearr_38401_40413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38382 === (8))){
var inst_38358 = (state_38381[(7)]);
var inst_38368 = cljs.core.next(inst_38358);
var inst_38358__$1 = inst_38368;
var state_38381__$1 = (function (){var statearr_38402 = state_38381;
(statearr_38402[(7)] = inst_38358__$1);

return statearr_38402;
})();
var statearr_38406_40414 = state_38381__$1;
(statearr_38406_40414[(2)] = null);

(statearr_38406_40414[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_38411 = [null,null,null,null,null,null,null,null];
(statearr_38411[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_38411[(1)] = (1));

return statearr_38411;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_38381){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38381);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38412){var ex__37254__auto__ = e38412;
var statearr_38413_40420 = state_38381;
(statearr_38413_40420[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38381[(4)]))){
var statearr_38414_40423 = state_38381;
(statearr_38414_40423[(1)] = cljs.core.first((state_38381[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40424 = state_38381;
state_38381 = G__40424;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_38381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_38381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38415 = f__37629__auto__();
(statearr_38415[(6)] = c__37628__auto__);

return statearr_38415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

return c__37628__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38417 = arguments.length;
switch (G__38417) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_40433 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_40433(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40438 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_40438(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40443 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_40443(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40444 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_40444(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38434 = (function (ch,cs,meta38436){
this.ch = ch;
this.cs = cs;
this.meta38436 = meta38436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38438,meta38436__$1){
var self__ = this;
var _38438__$1 = this;
return (new cljs.core.async.t_cljs$core$async38434(self__.ch,self__.cs,meta38436__$1));
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38438){
var self__ = this;
var _38438__$1 = this;
return self__.meta38436;
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38436","meta38436",-1635397699,null)], null);
}));

(cljs.core.async.t_cljs$core$async38434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38434");

(cljs.core.async.t_cljs$core$async38434.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38434.
 */
cljs.core.async.__GT_t_cljs$core$async38434 = (function cljs$core$async$__GT_t_cljs$core$async38434(ch,cs,meta38436){
return (new cljs.core.async.t_cljs$core$async38434(ch,cs,meta38436));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async38434(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37628__auto___40451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38578){
var state_val_38579 = (state_38578[(1)]);
if((state_val_38579 === (7))){
var inst_38574 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38580_40456 = state_38578__$1;
(statearr_38580_40456[(2)] = inst_38574);

(statearr_38580_40456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (20))){
var inst_38478 = (state_38578[(7)]);
var inst_38490 = cljs.core.first(inst_38478);
var inst_38491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38490,(0),null);
var inst_38492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38490,(1),null);
var state_38578__$1 = (function (){var statearr_38581 = state_38578;
(statearr_38581[(8)] = inst_38491);

return statearr_38581;
})();
if(cljs.core.truth_(inst_38492)){
var statearr_38582_40461 = state_38578__$1;
(statearr_38582_40461[(1)] = (22));

} else {
var statearr_38583_40463 = state_38578__$1;
(statearr_38583_40463[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (27))){
var inst_38520 = (state_38578[(9)]);
var inst_38522 = (state_38578[(10)]);
var inst_38527 = (state_38578[(11)]);
var inst_38447 = (state_38578[(12)]);
var inst_38527__$1 = cljs.core._nth(inst_38520,inst_38522);
var inst_38528 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38527__$1,inst_38447,done);
var state_38578__$1 = (function (){var statearr_38584 = state_38578;
(statearr_38584[(11)] = inst_38527__$1);

return statearr_38584;
})();
if(cljs.core.truth_(inst_38528)){
var statearr_38585_40473 = state_38578__$1;
(statearr_38585_40473[(1)] = (30));

} else {
var statearr_38586_40478 = state_38578__$1;
(statearr_38586_40478[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (1))){
var state_38578__$1 = state_38578;
var statearr_38589_40479 = state_38578__$1;
(statearr_38589_40479[(2)] = null);

(statearr_38589_40479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (24))){
var inst_38478 = (state_38578[(7)]);
var inst_38497 = (state_38578[(2)]);
var inst_38498 = cljs.core.next(inst_38478);
var inst_38456 = inst_38498;
var inst_38457 = null;
var inst_38458 = (0);
var inst_38459 = (0);
var state_38578__$1 = (function (){var statearr_38593 = state_38578;
(statearr_38593[(13)] = inst_38459);

(statearr_38593[(14)] = inst_38458);

(statearr_38593[(15)] = inst_38456);

(statearr_38593[(16)] = inst_38497);

(statearr_38593[(17)] = inst_38457);

return statearr_38593;
})();
var statearr_38594_40480 = state_38578__$1;
(statearr_38594_40480[(2)] = null);

(statearr_38594_40480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (39))){
var state_38578__$1 = state_38578;
var statearr_38601_40482 = state_38578__$1;
(statearr_38601_40482[(2)] = null);

(statearr_38601_40482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (4))){
var inst_38447 = (state_38578[(12)]);
var inst_38447__$1 = (state_38578[(2)]);
var inst_38448 = (inst_38447__$1 == null);
var state_38578__$1 = (function (){var statearr_38602 = state_38578;
(statearr_38602[(12)] = inst_38447__$1);

return statearr_38602;
})();
if(cljs.core.truth_(inst_38448)){
var statearr_38603_40488 = state_38578__$1;
(statearr_38603_40488[(1)] = (5));

} else {
var statearr_38604_40489 = state_38578__$1;
(statearr_38604_40489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (15))){
var inst_38459 = (state_38578[(13)]);
var inst_38458 = (state_38578[(14)]);
var inst_38456 = (state_38578[(15)]);
var inst_38457 = (state_38578[(17)]);
var inst_38474 = (state_38578[(2)]);
var inst_38475 = (inst_38459 + (1));
var tmp38598 = inst_38458;
var tmp38599 = inst_38456;
var tmp38600 = inst_38457;
var inst_38456__$1 = tmp38599;
var inst_38457__$1 = tmp38600;
var inst_38458__$1 = tmp38598;
var inst_38459__$1 = inst_38475;
var state_38578__$1 = (function (){var statearr_38605 = state_38578;
(statearr_38605[(18)] = inst_38474);

(statearr_38605[(13)] = inst_38459__$1);

(statearr_38605[(14)] = inst_38458__$1);

(statearr_38605[(15)] = inst_38456__$1);

(statearr_38605[(17)] = inst_38457__$1);

return statearr_38605;
})();
var statearr_38606_40493 = state_38578__$1;
(statearr_38606_40493[(2)] = null);

(statearr_38606_40493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (21))){
var inst_38501 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38610_40494 = state_38578__$1;
(statearr_38610_40494[(2)] = inst_38501);

(statearr_38610_40494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (31))){
var inst_38527 = (state_38578[(11)]);
var inst_38531 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38527);
var state_38578__$1 = state_38578;
var statearr_38611_40496 = state_38578__$1;
(statearr_38611_40496[(2)] = inst_38531);

(statearr_38611_40496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (32))){
var inst_38520 = (state_38578[(9)]);
var inst_38522 = (state_38578[(10)]);
var inst_38519 = (state_38578[(19)]);
var inst_38521 = (state_38578[(20)]);
var inst_38533 = (state_38578[(2)]);
var inst_38534 = (inst_38522 + (1));
var tmp38607 = inst_38520;
var tmp38608 = inst_38519;
var tmp38609 = inst_38521;
var inst_38519__$1 = tmp38608;
var inst_38520__$1 = tmp38607;
var inst_38521__$1 = tmp38609;
var inst_38522__$1 = inst_38534;
var state_38578__$1 = (function (){var statearr_38616 = state_38578;
(statearr_38616[(9)] = inst_38520__$1);

(statearr_38616[(10)] = inst_38522__$1);

(statearr_38616[(19)] = inst_38519__$1);

(statearr_38616[(20)] = inst_38521__$1);

(statearr_38616[(21)] = inst_38533);

return statearr_38616;
})();
var statearr_38617_40501 = state_38578__$1;
(statearr_38617_40501[(2)] = null);

(statearr_38617_40501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (40))){
var inst_38546 = (state_38578[(22)]);
var inst_38550 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38546);
var state_38578__$1 = state_38578;
var statearr_38618_40502 = state_38578__$1;
(statearr_38618_40502[(2)] = inst_38550);

(statearr_38618_40502[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (33))){
var inst_38537 = (state_38578[(23)]);
var inst_38539 = cljs.core.chunked_seq_QMARK_(inst_38537);
var state_38578__$1 = state_38578;
if(inst_38539){
var statearr_38619_40503 = state_38578__$1;
(statearr_38619_40503[(1)] = (36));

} else {
var statearr_38621_40504 = state_38578__$1;
(statearr_38621_40504[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (13))){
var inst_38468 = (state_38578[(24)]);
var inst_38471 = cljs.core.async.close_BANG_(inst_38468);
var state_38578__$1 = state_38578;
var statearr_38623_40505 = state_38578__$1;
(statearr_38623_40505[(2)] = inst_38471);

(statearr_38623_40505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (22))){
var inst_38491 = (state_38578[(8)]);
var inst_38494 = cljs.core.async.close_BANG_(inst_38491);
var state_38578__$1 = state_38578;
var statearr_38624_40506 = state_38578__$1;
(statearr_38624_40506[(2)] = inst_38494);

(statearr_38624_40506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (36))){
var inst_38537 = (state_38578[(23)]);
var inst_38541 = cljs.core.chunk_first(inst_38537);
var inst_38542 = cljs.core.chunk_rest(inst_38537);
var inst_38543 = cljs.core.count(inst_38541);
var inst_38519 = inst_38542;
var inst_38520 = inst_38541;
var inst_38521 = inst_38543;
var inst_38522 = (0);
var state_38578__$1 = (function (){var statearr_38625 = state_38578;
(statearr_38625[(9)] = inst_38520);

(statearr_38625[(10)] = inst_38522);

(statearr_38625[(19)] = inst_38519);

(statearr_38625[(20)] = inst_38521);

return statearr_38625;
})();
var statearr_38626_40508 = state_38578__$1;
(statearr_38626_40508[(2)] = null);

(statearr_38626_40508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (41))){
var inst_38537 = (state_38578[(23)]);
var inst_38552 = (state_38578[(2)]);
var inst_38553 = cljs.core.next(inst_38537);
var inst_38519 = inst_38553;
var inst_38520 = null;
var inst_38521 = (0);
var inst_38522 = (0);
var state_38578__$1 = (function (){var statearr_38631 = state_38578;
(statearr_38631[(25)] = inst_38552);

(statearr_38631[(9)] = inst_38520);

(statearr_38631[(10)] = inst_38522);

(statearr_38631[(19)] = inst_38519);

(statearr_38631[(20)] = inst_38521);

return statearr_38631;
})();
var statearr_38632_40509 = state_38578__$1;
(statearr_38632_40509[(2)] = null);

(statearr_38632_40509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (43))){
var state_38578__$1 = state_38578;
var statearr_38633_40510 = state_38578__$1;
(statearr_38633_40510[(2)] = null);

(statearr_38633_40510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (29))){
var inst_38562 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38634_40512 = state_38578__$1;
(statearr_38634_40512[(2)] = inst_38562);

(statearr_38634_40512[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (44))){
var inst_38571 = (state_38578[(2)]);
var state_38578__$1 = (function (){var statearr_38637 = state_38578;
(statearr_38637[(26)] = inst_38571);

return statearr_38637;
})();
var statearr_38639_40513 = state_38578__$1;
(statearr_38639_40513[(2)] = null);

(statearr_38639_40513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (6))){
var inst_38511 = (state_38578[(27)]);
var inst_38510 = cljs.core.deref(cs);
var inst_38511__$1 = cljs.core.keys(inst_38510);
var inst_38512 = cljs.core.count(inst_38511__$1);
var inst_38513 = cljs.core.reset_BANG_(dctr,inst_38512);
var inst_38518 = cljs.core.seq(inst_38511__$1);
var inst_38519 = inst_38518;
var inst_38520 = null;
var inst_38521 = (0);
var inst_38522 = (0);
var state_38578__$1 = (function (){var statearr_38640 = state_38578;
(statearr_38640[(9)] = inst_38520);

(statearr_38640[(10)] = inst_38522);

(statearr_38640[(19)] = inst_38519);

(statearr_38640[(20)] = inst_38521);

(statearr_38640[(28)] = inst_38513);

(statearr_38640[(27)] = inst_38511__$1);

return statearr_38640;
})();
var statearr_38642_40514 = state_38578__$1;
(statearr_38642_40514[(2)] = null);

(statearr_38642_40514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (28))){
var inst_38537 = (state_38578[(23)]);
var inst_38519 = (state_38578[(19)]);
var inst_38537__$1 = cljs.core.seq(inst_38519);
var state_38578__$1 = (function (){var statearr_38643 = state_38578;
(statearr_38643[(23)] = inst_38537__$1);

return statearr_38643;
})();
if(inst_38537__$1){
var statearr_38644_40517 = state_38578__$1;
(statearr_38644_40517[(1)] = (33));

} else {
var statearr_38645_40518 = state_38578__$1;
(statearr_38645_40518[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (25))){
var inst_38522 = (state_38578[(10)]);
var inst_38521 = (state_38578[(20)]);
var inst_38524 = (inst_38522 < inst_38521);
var inst_38525 = inst_38524;
var state_38578__$1 = state_38578;
if(cljs.core.truth_(inst_38525)){
var statearr_38646_40519 = state_38578__$1;
(statearr_38646_40519[(1)] = (27));

} else {
var statearr_38647_40520 = state_38578__$1;
(statearr_38647_40520[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (34))){
var state_38578__$1 = state_38578;
var statearr_38648_40523 = state_38578__$1;
(statearr_38648_40523[(2)] = null);

(statearr_38648_40523[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (17))){
var state_38578__$1 = state_38578;
var statearr_38649_40524 = state_38578__$1;
(statearr_38649_40524[(2)] = null);

(statearr_38649_40524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (3))){
var inst_38576 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38578__$1,inst_38576);
} else {
if((state_val_38579 === (12))){
var inst_38506 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38650_40528 = state_38578__$1;
(statearr_38650_40528[(2)] = inst_38506);

(statearr_38650_40528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (2))){
var state_38578__$1 = state_38578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38578__$1,(4),ch);
} else {
if((state_val_38579 === (23))){
var state_38578__$1 = state_38578;
var statearr_38652_40531 = state_38578__$1;
(statearr_38652_40531[(2)] = null);

(statearr_38652_40531[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (35))){
var inst_38560 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38653_40532 = state_38578__$1;
(statearr_38653_40532[(2)] = inst_38560);

(statearr_38653_40532[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (19))){
var inst_38478 = (state_38578[(7)]);
var inst_38482 = cljs.core.chunk_first(inst_38478);
var inst_38483 = cljs.core.chunk_rest(inst_38478);
var inst_38484 = cljs.core.count(inst_38482);
var inst_38456 = inst_38483;
var inst_38457 = inst_38482;
var inst_38458 = inst_38484;
var inst_38459 = (0);
var state_38578__$1 = (function (){var statearr_38655 = state_38578;
(statearr_38655[(13)] = inst_38459);

(statearr_38655[(14)] = inst_38458);

(statearr_38655[(15)] = inst_38456);

(statearr_38655[(17)] = inst_38457);

return statearr_38655;
})();
var statearr_38656_40537 = state_38578__$1;
(statearr_38656_40537[(2)] = null);

(statearr_38656_40537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (11))){
var inst_38456 = (state_38578[(15)]);
var inst_38478 = (state_38578[(7)]);
var inst_38478__$1 = cljs.core.seq(inst_38456);
var state_38578__$1 = (function (){var statearr_38657 = state_38578;
(statearr_38657[(7)] = inst_38478__$1);

return statearr_38657;
})();
if(inst_38478__$1){
var statearr_38658_40538 = state_38578__$1;
(statearr_38658_40538[(1)] = (16));

} else {
var statearr_38661_40539 = state_38578__$1;
(statearr_38661_40539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (9))){
var inst_38508 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38664_40540 = state_38578__$1;
(statearr_38664_40540[(2)] = inst_38508);

(statearr_38664_40540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (5))){
var inst_38454 = cljs.core.deref(cs);
var inst_38455 = cljs.core.seq(inst_38454);
var inst_38456 = inst_38455;
var inst_38457 = null;
var inst_38458 = (0);
var inst_38459 = (0);
var state_38578__$1 = (function (){var statearr_38665 = state_38578;
(statearr_38665[(13)] = inst_38459);

(statearr_38665[(14)] = inst_38458);

(statearr_38665[(15)] = inst_38456);

(statearr_38665[(17)] = inst_38457);

return statearr_38665;
})();
var statearr_38666_40542 = state_38578__$1;
(statearr_38666_40542[(2)] = null);

(statearr_38666_40542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (14))){
var state_38578__$1 = state_38578;
var statearr_38667_40544 = state_38578__$1;
(statearr_38667_40544[(2)] = null);

(statearr_38667_40544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (45))){
var inst_38568 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38668_40546 = state_38578__$1;
(statearr_38668_40546[(2)] = inst_38568);

(statearr_38668_40546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (26))){
var inst_38511 = (state_38578[(27)]);
var inst_38564 = (state_38578[(2)]);
var inst_38565 = cljs.core.seq(inst_38511);
var state_38578__$1 = (function (){var statearr_38669 = state_38578;
(statearr_38669[(29)] = inst_38564);

return statearr_38669;
})();
if(inst_38565){
var statearr_38670_40549 = state_38578__$1;
(statearr_38670_40549[(1)] = (42));

} else {
var statearr_38671_40551 = state_38578__$1;
(statearr_38671_40551[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (16))){
var inst_38478 = (state_38578[(7)]);
var inst_38480 = cljs.core.chunked_seq_QMARK_(inst_38478);
var state_38578__$1 = state_38578;
if(inst_38480){
var statearr_38673_40552 = state_38578__$1;
(statearr_38673_40552[(1)] = (19));

} else {
var statearr_38674_40553 = state_38578__$1;
(statearr_38674_40553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (38))){
var inst_38556 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38675_40556 = state_38578__$1;
(statearr_38675_40556[(2)] = inst_38556);

(statearr_38675_40556[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (30))){
var state_38578__$1 = state_38578;
var statearr_38676_40558 = state_38578__$1;
(statearr_38676_40558[(2)] = null);

(statearr_38676_40558[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (10))){
var inst_38459 = (state_38578[(13)]);
var inst_38457 = (state_38578[(17)]);
var inst_38467 = cljs.core._nth(inst_38457,inst_38459);
var inst_38468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38467,(0),null);
var inst_38469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38467,(1),null);
var state_38578__$1 = (function (){var statearr_38677 = state_38578;
(statearr_38677[(24)] = inst_38468);

return statearr_38677;
})();
if(cljs.core.truth_(inst_38469)){
var statearr_38678_40563 = state_38578__$1;
(statearr_38678_40563[(1)] = (13));

} else {
var statearr_38679_40564 = state_38578__$1;
(statearr_38679_40564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (18))){
var inst_38504 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38680_40569 = state_38578__$1;
(statearr_38680_40569[(2)] = inst_38504);

(statearr_38680_40569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (42))){
var state_38578__$1 = state_38578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38578__$1,(45),dchan);
} else {
if((state_val_38579 === (37))){
var inst_38537 = (state_38578[(23)]);
var inst_38546 = (state_38578[(22)]);
var inst_38447 = (state_38578[(12)]);
var inst_38546__$1 = cljs.core.first(inst_38537);
var inst_38547 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38546__$1,inst_38447,done);
var state_38578__$1 = (function (){var statearr_38681 = state_38578;
(statearr_38681[(22)] = inst_38546__$1);

return statearr_38681;
})();
if(cljs.core.truth_(inst_38547)){
var statearr_38682_40572 = state_38578__$1;
(statearr_38682_40572[(1)] = (39));

} else {
var statearr_38683_40573 = state_38578__$1;
(statearr_38683_40573[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (8))){
var inst_38459 = (state_38578[(13)]);
var inst_38458 = (state_38578[(14)]);
var inst_38461 = (inst_38459 < inst_38458);
var inst_38462 = inst_38461;
var state_38578__$1 = state_38578;
if(cljs.core.truth_(inst_38462)){
var statearr_38684_40576 = state_38578__$1;
(statearr_38684_40576[(1)] = (10));

} else {
var statearr_38685_40578 = state_38578__$1;
(statearr_38685_40578[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__37251__auto__ = null;
var cljs$core$async$mult_$_state_machine__37251__auto____0 = (function (){
var statearr_38686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38686[(0)] = cljs$core$async$mult_$_state_machine__37251__auto__);

(statearr_38686[(1)] = (1));

return statearr_38686;
});
var cljs$core$async$mult_$_state_machine__37251__auto____1 = (function (state_38578){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38578);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38689){var ex__37254__auto__ = e38689;
var statearr_38690_40579 = state_38578;
(statearr_38690_40579[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38578[(4)]))){
var statearr_38697_40580 = state_38578;
(statearr_38697_40580[(1)] = cljs.core.first((state_38578[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40581 = state_38578;
state_38578 = G__40581;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37251__auto__ = function(state_38578){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37251__auto____1.call(this,state_38578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37251__auto____0;
cljs$core$async$mult_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37251__auto____1;
return cljs$core$async$mult_$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38699 = f__37629__auto__();
(statearr_38699[(6)] = c__37628__auto___40451);

return statearr_38699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38702 = arguments.length;
switch (G__38702) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_40599 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40599(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40602 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40602(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40605 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40605(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40609 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40609(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40616 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40616(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40619 = arguments.length;
var i__5770__auto___40621 = (0);
while(true){
if((i__5770__auto___40621 < len__5769__auto___40619)){
args__5775__auto__.push((arguments[i__5770__auto___40621]));

var G__40622 = (i__5770__auto___40621 + (1));
i__5770__auto___40621 = G__40622;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38723){
var map__38724 = p__38723;
var map__38724__$1 = cljs.core.__destructure_map(map__38724);
var opts = map__38724__$1;
var statearr_38725_40624 = state;
(statearr_38725_40624[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38730_40625 = state;
(statearr_38730_40625[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_38732_40626 = state;
(statearr_38732_40626[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38719){
var G__38720 = cljs.core.first(seq38719);
var seq38719__$1 = cljs.core.next(seq38719);
var G__38721 = cljs.core.first(seq38719__$1);
var seq38719__$2 = cljs.core.next(seq38719__$1);
var G__38722 = cljs.core.first(seq38719__$2);
var seq38719__$3 = cljs.core.next(seq38719__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38720,G__38721,G__38722,seq38719__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38739 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38740){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38740 = meta38740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38741,meta38740__$1){
var self__ = this;
var _38741__$1 = this;
return (new cljs.core.async.t_cljs$core$async38739(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38740__$1));
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38741){
var self__ = this;
var _38741__$1 = this;
return self__.meta38740;
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38740","meta38740",2102431256,null)], null);
}));

(cljs.core.async.t_cljs$core$async38739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38739");

(cljs.core.async.t_cljs$core$async38739.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38739.
 */
cljs.core.async.__GT_t_cljs$core$async38739 = (function cljs$core$async$__GT_t_cljs$core$async38739(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38740){
return (new cljs.core.async.t_cljs$core$async38739(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38740));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async38739(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__37628__auto___40638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_38829){
var state_val_38830 = (state_38829[(1)]);
if((state_val_38830 === (7))){
var inst_38781 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
if(cljs.core.truth_(inst_38781)){
var statearr_38831_40640 = state_38829__$1;
(statearr_38831_40640[(1)] = (8));

} else {
var statearr_38832_40646 = state_38829__$1;
(statearr_38832_40646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (20))){
var inst_38774 = (state_38829[(7)]);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38829__$1,(23),out,inst_38774);
} else {
if((state_val_38830 === (1))){
var inst_38757 = calc_state();
var inst_38758 = cljs.core.__destructure_map(inst_38757);
var inst_38759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38758,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38758,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38758,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38762 = inst_38757;
var state_38829__$1 = (function (){var statearr_38836 = state_38829;
(statearr_38836[(8)] = inst_38760);

(statearr_38836[(9)] = inst_38759);

(statearr_38836[(10)] = inst_38761);

(statearr_38836[(11)] = inst_38762);

return statearr_38836;
})();
var statearr_38837_40648 = state_38829__$1;
(statearr_38837_40648[(2)] = null);

(statearr_38837_40648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (24))){
var inst_38765 = (state_38829[(12)]);
var inst_38762 = inst_38765;
var state_38829__$1 = (function (){var statearr_38838 = state_38829;
(statearr_38838[(11)] = inst_38762);

return statearr_38838;
})();
var statearr_38839_40649 = state_38829__$1;
(statearr_38839_40649[(2)] = null);

(statearr_38839_40649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (4))){
var inst_38776 = (state_38829[(13)]);
var inst_38774 = (state_38829[(7)]);
var inst_38773 = (state_38829[(2)]);
var inst_38774__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38773,(0),null);
var inst_38775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38773,(1),null);
var inst_38776__$1 = (inst_38774__$1 == null);
var state_38829__$1 = (function (){var statearr_38840 = state_38829;
(statearr_38840[(13)] = inst_38776__$1);

(statearr_38840[(7)] = inst_38774__$1);

(statearr_38840[(14)] = inst_38775);

return statearr_38840;
})();
if(cljs.core.truth_(inst_38776__$1)){
var statearr_38841_40653 = state_38829__$1;
(statearr_38841_40653[(1)] = (5));

} else {
var statearr_38844_40654 = state_38829__$1;
(statearr_38844_40654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (15))){
var inst_38799 = (state_38829[(15)]);
var inst_38766 = (state_38829[(16)]);
var inst_38799__$1 = cljs.core.empty_QMARK_(inst_38766);
var state_38829__$1 = (function (){var statearr_38846 = state_38829;
(statearr_38846[(15)] = inst_38799__$1);

return statearr_38846;
})();
if(inst_38799__$1){
var statearr_38847_40656 = state_38829__$1;
(statearr_38847_40656[(1)] = (17));

} else {
var statearr_38848_40657 = state_38829__$1;
(statearr_38848_40657[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (21))){
var inst_38765 = (state_38829[(12)]);
var inst_38762 = inst_38765;
var state_38829__$1 = (function (){var statearr_38849 = state_38829;
(statearr_38849[(11)] = inst_38762);

return statearr_38849;
})();
var statearr_38850_40660 = state_38829__$1;
(statearr_38850_40660[(2)] = null);

(statearr_38850_40660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (13))){
var inst_38792 = (state_38829[(2)]);
var inst_38793 = calc_state();
var inst_38762 = inst_38793;
var state_38829__$1 = (function (){var statearr_38852 = state_38829;
(statearr_38852[(17)] = inst_38792);

(statearr_38852[(11)] = inst_38762);

return statearr_38852;
})();
var statearr_38853_40662 = state_38829__$1;
(statearr_38853_40662[(2)] = null);

(statearr_38853_40662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (22))){
var inst_38819 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38854_40663 = state_38829__$1;
(statearr_38854_40663[(2)] = inst_38819);

(statearr_38854_40663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (6))){
var inst_38775 = (state_38829[(14)]);
var inst_38779 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38775,change);
var state_38829__$1 = state_38829;
var statearr_38855_40665 = state_38829__$1;
(statearr_38855_40665[(2)] = inst_38779);

(statearr_38855_40665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (25))){
var state_38829__$1 = state_38829;
var statearr_38860_40666 = state_38829__$1;
(statearr_38860_40666[(2)] = null);

(statearr_38860_40666[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (17))){
var inst_38767 = (state_38829[(18)]);
var inst_38775 = (state_38829[(14)]);
var inst_38801 = (inst_38767.cljs$core$IFn$_invoke$arity$1 ? inst_38767.cljs$core$IFn$_invoke$arity$1(inst_38775) : inst_38767.call(null,inst_38775));
var inst_38802 = cljs.core.not(inst_38801);
var state_38829__$1 = state_38829;
var statearr_38861_40667 = state_38829__$1;
(statearr_38861_40667[(2)] = inst_38802);

(statearr_38861_40667[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (3))){
var inst_38823 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38829__$1,inst_38823);
} else {
if((state_val_38830 === (12))){
var state_38829__$1 = state_38829;
var statearr_38862_40668 = state_38829__$1;
(statearr_38862_40668[(2)] = null);

(statearr_38862_40668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (2))){
var inst_38765 = (state_38829[(12)]);
var inst_38762 = (state_38829[(11)]);
var inst_38765__$1 = cljs.core.__destructure_map(inst_38762);
var inst_38766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38765__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38765__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38765__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38829__$1 = (function (){var statearr_38863 = state_38829;
(statearr_38863[(18)] = inst_38767);

(statearr_38863[(16)] = inst_38766);

(statearr_38863[(12)] = inst_38765__$1);

return statearr_38863;
})();
return cljs.core.async.ioc_alts_BANG_(state_38829__$1,(4),inst_38768);
} else {
if((state_val_38830 === (23))){
var inst_38810 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
if(cljs.core.truth_(inst_38810)){
var statearr_38864_40672 = state_38829__$1;
(statearr_38864_40672[(1)] = (24));

} else {
var statearr_38865_40673 = state_38829__$1;
(statearr_38865_40673[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (19))){
var inst_38805 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38871_40674 = state_38829__$1;
(statearr_38871_40674[(2)] = inst_38805);

(statearr_38871_40674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (11))){
var inst_38775 = (state_38829[(14)]);
var inst_38789 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38775);
var state_38829__$1 = state_38829;
var statearr_38872_40675 = state_38829__$1;
(statearr_38872_40675[(2)] = inst_38789);

(statearr_38872_40675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (9))){
var inst_38796 = (state_38829[(19)]);
var inst_38775 = (state_38829[(14)]);
var inst_38766 = (state_38829[(16)]);
var inst_38796__$1 = (inst_38766.cljs$core$IFn$_invoke$arity$1 ? inst_38766.cljs$core$IFn$_invoke$arity$1(inst_38775) : inst_38766.call(null,inst_38775));
var state_38829__$1 = (function (){var statearr_38873 = state_38829;
(statearr_38873[(19)] = inst_38796__$1);

return statearr_38873;
})();
if(cljs.core.truth_(inst_38796__$1)){
var statearr_38874_40676 = state_38829__$1;
(statearr_38874_40676[(1)] = (14));

} else {
var statearr_38875_40677 = state_38829__$1;
(statearr_38875_40677[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (5))){
var inst_38776 = (state_38829[(13)]);
var state_38829__$1 = state_38829;
var statearr_38876_40678 = state_38829__$1;
(statearr_38876_40678[(2)] = inst_38776);

(statearr_38876_40678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (14))){
var inst_38796 = (state_38829[(19)]);
var state_38829__$1 = state_38829;
var statearr_38877_40679 = state_38829__$1;
(statearr_38877_40679[(2)] = inst_38796);

(statearr_38877_40679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (26))){
var inst_38815 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38878_40681 = state_38829__$1;
(statearr_38878_40681[(2)] = inst_38815);

(statearr_38878_40681[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (16))){
var inst_38807 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
if(cljs.core.truth_(inst_38807)){
var statearr_38879_40683 = state_38829__$1;
(statearr_38879_40683[(1)] = (20));

} else {
var statearr_38880_40684 = state_38829__$1;
(statearr_38880_40684[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (10))){
var inst_38821 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38881_40685 = state_38829__$1;
(statearr_38881_40685[(2)] = inst_38821);

(statearr_38881_40685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (18))){
var inst_38799 = (state_38829[(15)]);
var state_38829__$1 = state_38829;
var statearr_38882_40688 = state_38829__$1;
(statearr_38882_40688[(2)] = inst_38799);

(statearr_38882_40688[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (8))){
var inst_38774 = (state_38829[(7)]);
var inst_38786 = (inst_38774 == null);
var state_38829__$1 = state_38829;
if(cljs.core.truth_(inst_38786)){
var statearr_38883_40691 = state_38829__$1;
(statearr_38883_40691[(1)] = (11));

} else {
var statearr_38884_40693 = state_38829__$1;
(statearr_38884_40693[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__37251__auto__ = null;
var cljs$core$async$mix_$_state_machine__37251__auto____0 = (function (){
var statearr_38885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38885[(0)] = cljs$core$async$mix_$_state_machine__37251__auto__);

(statearr_38885[(1)] = (1));

return statearr_38885;
});
var cljs$core$async$mix_$_state_machine__37251__auto____1 = (function (state_38829){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_38829);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e38886){var ex__37254__auto__ = e38886;
var statearr_38887_40695 = state_38829;
(statearr_38887_40695[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_38829[(4)]))){
var statearr_38888_40696 = state_38829;
(statearr_38888_40696[(1)] = cljs.core.first((state_38829[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40698 = state_38829;
state_38829 = G__40698;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37251__auto__ = function(state_38829){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37251__auto____1.call(this,state_38829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37251__auto____0;
cljs$core$async$mix_$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37251__auto____1;
return cljs$core$async$mix_$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_38889 = f__37629__auto__();
(statearr_38889[(6)] = c__37628__auto___40638);

return statearr_38889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_40704 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40704(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40707 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40707(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40709 = (function() {
var G__40710 = null;
var G__40710__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__40710__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__40710 = function(p,v){
switch(arguments.length){
case 1:
return G__40710__1.call(this,p);
case 2:
return G__40710__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40710.cljs$core$IFn$_invoke$arity$1 = G__40710__1;
G__40710.cljs$core$IFn$_invoke$arity$2 = G__40710__2;
return G__40710;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38907 = arguments.length;
switch (G__38907) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40709(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40709(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38917 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38918){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38918 = meta38918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38919,meta38918__$1){
var self__ = this;
var _38919__$1 = this;
return (new cljs.core.async.t_cljs$core$async38917(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38918__$1));
}));

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38919){
var self__ = this;
var _38919__$1 = this;
return self__.meta38918;
}));

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38918","meta38918",400463833,null)], null);
}));

(cljs.core.async.t_cljs$core$async38917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38917");

(cljs.core.async.t_cljs$core$async38917.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38917.
 */
cljs.core.async.__GT_t_cljs$core$async38917 = (function cljs$core$async$__GT_t_cljs$core$async38917(ch,topic_fn,buf_fn,mults,ensure_mult,meta38918){
return (new cljs.core.async.t_cljs$core$async38917(ch,topic_fn,buf_fn,mults,ensure_mult,meta38918));
});


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
var G__38915 = arguments.length;
switch (G__38915) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38908_SHARP_){
if(cljs.core.truth_((p1__38908_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38908_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38908_SHARP_.call(null,topic)))){
return p1__38908_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38908_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async38917(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__37628__auto___40740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39002){
var state_val_39004 = (state_39002[(1)]);
if((state_val_39004 === (7))){
var inst_38998 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39006_40745 = state_39002__$1;
(statearr_39006_40745[(2)] = inst_38998);

(statearr_39006_40745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (20))){
var state_39002__$1 = state_39002;
var statearr_39007_40746 = state_39002__$1;
(statearr_39007_40746[(2)] = null);

(statearr_39007_40746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (1))){
var state_39002__$1 = state_39002;
var statearr_39008_40750 = state_39002__$1;
(statearr_39008_40750[(2)] = null);

(statearr_39008_40750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (24))){
var inst_38981 = (state_39002[(7)]);
var inst_38990 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38981);
var state_39002__$1 = state_39002;
var statearr_39010_40751 = state_39002__$1;
(statearr_39010_40751[(2)] = inst_38990);

(statearr_39010_40751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (4))){
var inst_38933 = (state_39002[(8)]);
var inst_38933__$1 = (state_39002[(2)]);
var inst_38934 = (inst_38933__$1 == null);
var state_39002__$1 = (function (){var statearr_39014 = state_39002;
(statearr_39014[(8)] = inst_38933__$1);

return statearr_39014;
})();
if(cljs.core.truth_(inst_38934)){
var statearr_39015_40756 = state_39002__$1;
(statearr_39015_40756[(1)] = (5));

} else {
var statearr_39016_40757 = state_39002__$1;
(statearr_39016_40757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (15))){
var inst_38975 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39017_40759 = state_39002__$1;
(statearr_39017_40759[(2)] = inst_38975);

(statearr_39017_40759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (21))){
var inst_38995 = (state_39002[(2)]);
var state_39002__$1 = (function (){var statearr_39018 = state_39002;
(statearr_39018[(9)] = inst_38995);

return statearr_39018;
})();
var statearr_39019_40760 = state_39002__$1;
(statearr_39019_40760[(2)] = null);

(statearr_39019_40760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (13))){
var inst_38957 = (state_39002[(10)]);
var inst_38959 = cljs.core.chunked_seq_QMARK_(inst_38957);
var state_39002__$1 = state_39002;
if(inst_38959){
var statearr_39020_40761 = state_39002__$1;
(statearr_39020_40761[(1)] = (16));

} else {
var statearr_39021_40762 = state_39002__$1;
(statearr_39021_40762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (22))){
var inst_38987 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
if(cljs.core.truth_(inst_38987)){
var statearr_39022_40766 = state_39002__$1;
(statearr_39022_40766[(1)] = (23));

} else {
var statearr_39023_40769 = state_39002__$1;
(statearr_39023_40769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (6))){
var inst_38983 = (state_39002[(11)]);
var inst_38981 = (state_39002[(7)]);
var inst_38933 = (state_39002[(8)]);
var inst_38981__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38933) : topic_fn.call(null,inst_38933));
var inst_38982 = cljs.core.deref(mults);
var inst_38983__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38982,inst_38981__$1);
var state_39002__$1 = (function (){var statearr_39025 = state_39002;
(statearr_39025[(11)] = inst_38983__$1);

(statearr_39025[(7)] = inst_38981__$1);

return statearr_39025;
})();
if(cljs.core.truth_(inst_38983__$1)){
var statearr_39026_40772 = state_39002__$1;
(statearr_39026_40772[(1)] = (19));

} else {
var statearr_39029_40774 = state_39002__$1;
(statearr_39029_40774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (25))){
var inst_38992 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39030_40775 = state_39002__$1;
(statearr_39030_40775[(2)] = inst_38992);

(statearr_39030_40775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (17))){
var inst_38957 = (state_39002[(10)]);
var inst_38966 = cljs.core.first(inst_38957);
var inst_38967 = cljs.core.async.muxch_STAR_(inst_38966);
var inst_38968 = cljs.core.async.close_BANG_(inst_38967);
var inst_38969 = cljs.core.next(inst_38957);
var inst_38943 = inst_38969;
var inst_38944 = null;
var inst_38945 = (0);
var inst_38946 = (0);
var state_39002__$1 = (function (){var statearr_39031 = state_39002;
(statearr_39031[(12)] = inst_38945);

(statearr_39031[(13)] = inst_38946);

(statearr_39031[(14)] = inst_38944);

(statearr_39031[(15)] = inst_38968);

(statearr_39031[(16)] = inst_38943);

return statearr_39031;
})();
var statearr_39032_40779 = state_39002__$1;
(statearr_39032_40779[(2)] = null);

(statearr_39032_40779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (3))){
var inst_39000 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39002__$1,inst_39000);
} else {
if((state_val_39004 === (12))){
var inst_38977 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39033_40785 = state_39002__$1;
(statearr_39033_40785[(2)] = inst_38977);

(statearr_39033_40785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (2))){
var state_39002__$1 = state_39002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39002__$1,(4),ch);
} else {
if((state_val_39004 === (23))){
var state_39002__$1 = state_39002;
var statearr_39034_40786 = state_39002__$1;
(statearr_39034_40786[(2)] = null);

(statearr_39034_40786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (19))){
var inst_38983 = (state_39002[(11)]);
var inst_38933 = (state_39002[(8)]);
var inst_38985 = cljs.core.async.muxch_STAR_(inst_38983);
var state_39002__$1 = state_39002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39002__$1,(22),inst_38985,inst_38933);
} else {
if((state_val_39004 === (11))){
var inst_38957 = (state_39002[(10)]);
var inst_38943 = (state_39002[(16)]);
var inst_38957__$1 = cljs.core.seq(inst_38943);
var state_39002__$1 = (function (){var statearr_39035 = state_39002;
(statearr_39035[(10)] = inst_38957__$1);

return statearr_39035;
})();
if(inst_38957__$1){
var statearr_39036_40787 = state_39002__$1;
(statearr_39036_40787[(1)] = (13));

} else {
var statearr_39038_40789 = state_39002__$1;
(statearr_39038_40789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (9))){
var inst_38979 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39039_40792 = state_39002__$1;
(statearr_39039_40792[(2)] = inst_38979);

(statearr_39039_40792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (5))){
var inst_38940 = cljs.core.deref(mults);
var inst_38941 = cljs.core.vals(inst_38940);
var inst_38942 = cljs.core.seq(inst_38941);
var inst_38943 = inst_38942;
var inst_38944 = null;
var inst_38945 = (0);
var inst_38946 = (0);
var state_39002__$1 = (function (){var statearr_39041 = state_39002;
(statearr_39041[(12)] = inst_38945);

(statearr_39041[(13)] = inst_38946);

(statearr_39041[(14)] = inst_38944);

(statearr_39041[(16)] = inst_38943);

return statearr_39041;
})();
var statearr_39042_40796 = state_39002__$1;
(statearr_39042_40796[(2)] = null);

(statearr_39042_40796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (14))){
var state_39002__$1 = state_39002;
var statearr_39046_40798 = state_39002__$1;
(statearr_39046_40798[(2)] = null);

(statearr_39046_40798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (16))){
var inst_38957 = (state_39002[(10)]);
var inst_38961 = cljs.core.chunk_first(inst_38957);
var inst_38962 = cljs.core.chunk_rest(inst_38957);
var inst_38963 = cljs.core.count(inst_38961);
var inst_38943 = inst_38962;
var inst_38944 = inst_38961;
var inst_38945 = inst_38963;
var inst_38946 = (0);
var state_39002__$1 = (function (){var statearr_39047 = state_39002;
(statearr_39047[(12)] = inst_38945);

(statearr_39047[(13)] = inst_38946);

(statearr_39047[(14)] = inst_38944);

(statearr_39047[(16)] = inst_38943);

return statearr_39047;
})();
var statearr_39048_40804 = state_39002__$1;
(statearr_39048_40804[(2)] = null);

(statearr_39048_40804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (10))){
var inst_38945 = (state_39002[(12)]);
var inst_38946 = (state_39002[(13)]);
var inst_38944 = (state_39002[(14)]);
var inst_38943 = (state_39002[(16)]);
var inst_38951 = cljs.core._nth(inst_38944,inst_38946);
var inst_38952 = cljs.core.async.muxch_STAR_(inst_38951);
var inst_38953 = cljs.core.async.close_BANG_(inst_38952);
var inst_38954 = (inst_38946 + (1));
var tmp39043 = inst_38945;
var tmp39044 = inst_38944;
var tmp39045 = inst_38943;
var inst_38943__$1 = tmp39045;
var inst_38944__$1 = tmp39044;
var inst_38945__$1 = tmp39043;
var inst_38946__$1 = inst_38954;
var state_39002__$1 = (function (){var statearr_39049 = state_39002;
(statearr_39049[(12)] = inst_38945__$1);

(statearr_39049[(13)] = inst_38946__$1);

(statearr_39049[(14)] = inst_38944__$1);

(statearr_39049[(16)] = inst_38943__$1);

(statearr_39049[(17)] = inst_38953);

return statearr_39049;
})();
var statearr_39050_40806 = state_39002__$1;
(statearr_39050_40806[(2)] = null);

(statearr_39050_40806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (18))){
var inst_38972 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39053_40811 = state_39002__$1;
(statearr_39053_40811[(2)] = inst_38972);

(statearr_39053_40811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (8))){
var inst_38945 = (state_39002[(12)]);
var inst_38946 = (state_39002[(13)]);
var inst_38948 = (inst_38946 < inst_38945);
var inst_38949 = inst_38948;
var state_39002__$1 = state_39002;
if(cljs.core.truth_(inst_38949)){
var statearr_39054_40815 = state_39002__$1;
(statearr_39054_40815[(1)] = (10));

} else {
var statearr_39055_40817 = state_39002__$1;
(statearr_39055_40817[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39056[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39056[(1)] = (1));

return statearr_39056;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39002){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39002);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39057){var ex__37254__auto__ = e39057;
var statearr_39058_40820 = state_39002;
(statearr_39058_40820[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39002[(4)]))){
var statearr_39059_40822 = state_39002;
(statearr_39059_40822[(1)] = cljs.core.first((state_39002[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40826 = state_39002;
state_39002 = G__40826;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39060 = f__37629__auto__();
(statearr_39060[(6)] = c__37628__auto___40740);

return statearr_39060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39064 = arguments.length;
switch (G__39064) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__39069 = arguments.length;
switch (G__39069) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__39077 = arguments.length;
switch (G__39077) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__37628__auto___40849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39126){
var state_val_39127 = (state_39126[(1)]);
if((state_val_39127 === (7))){
var state_39126__$1 = state_39126;
var statearr_39133_40851 = state_39126__$1;
(statearr_39133_40851[(2)] = null);

(statearr_39133_40851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (1))){
var state_39126__$1 = state_39126;
var statearr_39134_40852 = state_39126__$1;
(statearr_39134_40852[(2)] = null);

(statearr_39134_40852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (4))){
var inst_39083 = (state_39126[(7)]);
var inst_39084 = (state_39126[(8)]);
var inst_39086 = (inst_39084 < inst_39083);
var state_39126__$1 = state_39126;
if(cljs.core.truth_(inst_39086)){
var statearr_39137_40853 = state_39126__$1;
(statearr_39137_40853[(1)] = (6));

} else {
var statearr_39138_40854 = state_39126__$1;
(statearr_39138_40854[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (15))){
var inst_39109 = (state_39126[(9)]);
var inst_39114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39109);
var state_39126__$1 = state_39126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39126__$1,(17),out,inst_39114);
} else {
if((state_val_39127 === (13))){
var inst_39109 = (state_39126[(9)]);
var inst_39109__$1 = (state_39126[(2)]);
var inst_39110 = cljs.core.some(cljs.core.nil_QMARK_,inst_39109__$1);
var state_39126__$1 = (function (){var statearr_39143 = state_39126;
(statearr_39143[(9)] = inst_39109__$1);

return statearr_39143;
})();
if(cljs.core.truth_(inst_39110)){
var statearr_39145_40860 = state_39126__$1;
(statearr_39145_40860[(1)] = (14));

} else {
var statearr_39149_40861 = state_39126__$1;
(statearr_39149_40861[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (6))){
var state_39126__$1 = state_39126;
var statearr_39150_40865 = state_39126__$1;
(statearr_39150_40865[(2)] = null);

(statearr_39150_40865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (17))){
var inst_39118 = (state_39126[(2)]);
var state_39126__$1 = (function (){var statearr_39177 = state_39126;
(statearr_39177[(10)] = inst_39118);

return statearr_39177;
})();
var statearr_39178_40868 = state_39126__$1;
(statearr_39178_40868[(2)] = null);

(statearr_39178_40868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (3))){
var inst_39124 = (state_39126[(2)]);
var state_39126__$1 = state_39126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39126__$1,inst_39124);
} else {
if((state_val_39127 === (12))){
var _ = (function (){var statearr_39180 = state_39126;
(statearr_39180[(4)] = cljs.core.rest((state_39126[(4)])));

return statearr_39180;
})();
var state_39126__$1 = state_39126;
var ex39172 = (state_39126__$1[(2)]);
var statearr_39184_40869 = state_39126__$1;
(statearr_39184_40869[(5)] = ex39172);


if((ex39172 instanceof Object)){
var statearr_39185_40870 = state_39126__$1;
(statearr_39185_40870[(1)] = (11));

(statearr_39185_40870[(5)] = null);

} else {
throw ex39172;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (2))){
var inst_39082 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39083 = cnt;
var inst_39084 = (0);
var state_39126__$1 = (function (){var statearr_39188 = state_39126;
(statearr_39188[(11)] = inst_39082);

(statearr_39188[(7)] = inst_39083);

(statearr_39188[(8)] = inst_39084);

return statearr_39188;
})();
var statearr_39189_40871 = state_39126__$1;
(statearr_39189_40871[(2)] = null);

(statearr_39189_40871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (11))){
var inst_39088 = (state_39126[(2)]);
var inst_39089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39126__$1 = (function (){var statearr_39190 = state_39126;
(statearr_39190[(12)] = inst_39088);

return statearr_39190;
})();
var statearr_39191_40873 = state_39126__$1;
(statearr_39191_40873[(2)] = inst_39089);

(statearr_39191_40873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (9))){
var inst_39084 = (state_39126[(8)]);
var _ = (function (){var statearr_39193 = state_39126;
(statearr_39193[(4)] = cljs.core.cons((12),(state_39126[(4)])));

return statearr_39193;
})();
var inst_39095 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39084) : chs__$1.call(null,inst_39084));
var inst_39096 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39084) : done.call(null,inst_39084));
var inst_39097 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39095,inst_39096);
var ___$1 = (function (){var statearr_39197 = state_39126;
(statearr_39197[(4)] = cljs.core.rest((state_39126[(4)])));

return statearr_39197;
})();
var state_39126__$1 = state_39126;
var statearr_39198_40879 = state_39126__$1;
(statearr_39198_40879[(2)] = inst_39097);

(statearr_39198_40879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (5))){
var inst_39107 = (state_39126[(2)]);
var state_39126__$1 = (function (){var statearr_39199 = state_39126;
(statearr_39199[(13)] = inst_39107);

return statearr_39199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39126__$1,(13),dchan);
} else {
if((state_val_39127 === (14))){
var inst_39112 = cljs.core.async.close_BANG_(out);
var state_39126__$1 = state_39126;
var statearr_39200_40880 = state_39126__$1;
(statearr_39200_40880[(2)] = inst_39112);

(statearr_39200_40880[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (16))){
var inst_39122 = (state_39126[(2)]);
var state_39126__$1 = state_39126;
var statearr_39201_40881 = state_39126__$1;
(statearr_39201_40881[(2)] = inst_39122);

(statearr_39201_40881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (10))){
var inst_39084 = (state_39126[(8)]);
var inst_39100 = (state_39126[(2)]);
var inst_39101 = (inst_39084 + (1));
var inst_39084__$1 = inst_39101;
var state_39126__$1 = (function (){var statearr_39202 = state_39126;
(statearr_39202[(14)] = inst_39100);

(statearr_39202[(8)] = inst_39084__$1);

return statearr_39202;
})();
var statearr_39203_40884 = state_39126__$1;
(statearr_39203_40884[(2)] = null);

(statearr_39203_40884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (8))){
var inst_39105 = (state_39126[(2)]);
var state_39126__$1 = state_39126;
var statearr_39204_40885 = state_39126__$1;
(statearr_39204_40885[(2)] = inst_39105);

(statearr_39204_40885[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39205[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39205[(1)] = (1));

return statearr_39205;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39126){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39126);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39206){var ex__37254__auto__ = e39206;
var statearr_39207_40891 = state_39126;
(statearr_39207_40891[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39126[(4)]))){
var statearr_39208_40892 = state_39126;
(statearr_39208_40892[(1)] = cljs.core.first((state_39126[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40894 = state_39126;
state_39126 = G__40894;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39211 = f__37629__auto__();
(statearr_39211[(6)] = c__37628__auto___40849);

return statearr_39211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39214 = arguments.length;
switch (G__39214) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37628__auto___40900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39250){
var state_val_39251 = (state_39250[(1)]);
if((state_val_39251 === (7))){
var inst_39229 = (state_39250[(7)]);
var inst_39230 = (state_39250[(8)]);
var inst_39229__$1 = (state_39250[(2)]);
var inst_39230__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39229__$1,(0),null);
var inst_39231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39229__$1,(1),null);
var inst_39232 = (inst_39230__$1 == null);
var state_39250__$1 = (function (){var statearr_39252 = state_39250;
(statearr_39252[(7)] = inst_39229__$1);

(statearr_39252[(8)] = inst_39230__$1);

(statearr_39252[(9)] = inst_39231);

return statearr_39252;
})();
if(cljs.core.truth_(inst_39232)){
var statearr_39253_40902 = state_39250__$1;
(statearr_39253_40902[(1)] = (8));

} else {
var statearr_39254_40903 = state_39250__$1;
(statearr_39254_40903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (1))){
var inst_39219 = cljs.core.vec(chs);
var inst_39220 = inst_39219;
var state_39250__$1 = (function (){var statearr_39255 = state_39250;
(statearr_39255[(10)] = inst_39220);

return statearr_39255;
})();
var statearr_39256_40904 = state_39250__$1;
(statearr_39256_40904[(2)] = null);

(statearr_39256_40904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (4))){
var inst_39220 = (state_39250[(10)]);
var state_39250__$1 = state_39250;
return cljs.core.async.ioc_alts_BANG_(state_39250__$1,(7),inst_39220);
} else {
if((state_val_39251 === (6))){
var inst_39246 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39260_40909 = state_39250__$1;
(statearr_39260_40909[(2)] = inst_39246);

(statearr_39260_40909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (3))){
var inst_39248 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39250__$1,inst_39248);
} else {
if((state_val_39251 === (2))){
var inst_39220 = (state_39250[(10)]);
var inst_39222 = cljs.core.count(inst_39220);
var inst_39223 = (inst_39222 > (0));
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39223)){
var statearr_39262_40910 = state_39250__$1;
(statearr_39262_40910[(1)] = (4));

} else {
var statearr_39263_40911 = state_39250__$1;
(statearr_39263_40911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (11))){
var inst_39220 = (state_39250[(10)]);
var inst_39239 = (state_39250[(2)]);
var tmp39261 = inst_39220;
var inst_39220__$1 = tmp39261;
var state_39250__$1 = (function (){var statearr_39264 = state_39250;
(statearr_39264[(10)] = inst_39220__$1);

(statearr_39264[(11)] = inst_39239);

return statearr_39264;
})();
var statearr_39265_40912 = state_39250__$1;
(statearr_39265_40912[(2)] = null);

(statearr_39265_40912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (9))){
var inst_39230 = (state_39250[(8)]);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39250__$1,(11),out,inst_39230);
} else {
if((state_val_39251 === (5))){
var inst_39244 = cljs.core.async.close_BANG_(out);
var state_39250__$1 = state_39250;
var statearr_39266_40914 = state_39250__$1;
(statearr_39266_40914[(2)] = inst_39244);

(statearr_39266_40914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (10))){
var inst_39242 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39267_40915 = state_39250__$1;
(statearr_39267_40915[(2)] = inst_39242);

(statearr_39267_40915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (8))){
var inst_39220 = (state_39250[(10)]);
var inst_39229 = (state_39250[(7)]);
var inst_39230 = (state_39250[(8)]);
var inst_39231 = (state_39250[(9)]);
var inst_39234 = (function (){var cs = inst_39220;
var vec__39225 = inst_39229;
var v = inst_39230;
var c = inst_39231;
return (function (p1__39212_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39212_SHARP_);
});
})();
var inst_39235 = cljs.core.filterv(inst_39234,inst_39220);
var inst_39220__$1 = inst_39235;
var state_39250__$1 = (function (){var statearr_39271 = state_39250;
(statearr_39271[(10)] = inst_39220__$1);

return statearr_39271;
})();
var statearr_39272_40916 = state_39250__$1;
(statearr_39272_40916[(2)] = null);

(statearr_39272_40916[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39274 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39274[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39274[(1)] = (1));

return statearr_39274;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39250){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39250);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39276){var ex__37254__auto__ = e39276;
var statearr_39277_40924 = state_39250;
(statearr_39277_40924[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39250[(4)]))){
var statearr_39278_40926 = state_39250;
(statearr_39278_40926[(1)] = cljs.core.first((state_39250[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40928 = state_39250;
state_39250 = G__40928;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39279 = f__37629__auto__();
(statearr_39279[(6)] = c__37628__auto___40900);

return statearr_39279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__39284 = arguments.length;
switch (G__39284) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37628__auto___40936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39318){
var state_val_39319 = (state_39318[(1)]);
if((state_val_39319 === (7))){
var inst_39297 = (state_39318[(7)]);
var inst_39297__$1 = (state_39318[(2)]);
var inst_39298 = (inst_39297__$1 == null);
var inst_39299 = cljs.core.not(inst_39298);
var state_39318__$1 = (function (){var statearr_39321 = state_39318;
(statearr_39321[(7)] = inst_39297__$1);

return statearr_39321;
})();
if(inst_39299){
var statearr_39325_40940 = state_39318__$1;
(statearr_39325_40940[(1)] = (8));

} else {
var statearr_39329_40941 = state_39318__$1;
(statearr_39329_40941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (1))){
var inst_39292 = (0);
var state_39318__$1 = (function (){var statearr_39330 = state_39318;
(statearr_39330[(8)] = inst_39292);

return statearr_39330;
})();
var statearr_39331_40942 = state_39318__$1;
(statearr_39331_40942[(2)] = null);

(statearr_39331_40942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (4))){
var state_39318__$1 = state_39318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39318__$1,(7),ch);
} else {
if((state_val_39319 === (6))){
var inst_39313 = (state_39318[(2)]);
var state_39318__$1 = state_39318;
var statearr_39332_40944 = state_39318__$1;
(statearr_39332_40944[(2)] = inst_39313);

(statearr_39332_40944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (3))){
var inst_39315 = (state_39318[(2)]);
var inst_39316 = cljs.core.async.close_BANG_(out);
var state_39318__$1 = (function (){var statearr_39335 = state_39318;
(statearr_39335[(9)] = inst_39315);

return statearr_39335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39318__$1,inst_39316);
} else {
if((state_val_39319 === (2))){
var inst_39292 = (state_39318[(8)]);
var inst_39294 = (inst_39292 < n);
var state_39318__$1 = state_39318;
if(cljs.core.truth_(inst_39294)){
var statearr_39336_40946 = state_39318__$1;
(statearr_39336_40946[(1)] = (4));

} else {
var statearr_39337_40947 = state_39318__$1;
(statearr_39337_40947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (11))){
var inst_39292 = (state_39318[(8)]);
var inst_39305 = (state_39318[(2)]);
var inst_39306 = (inst_39292 + (1));
var inst_39292__$1 = inst_39306;
var state_39318__$1 = (function (){var statearr_39338 = state_39318;
(statearr_39338[(10)] = inst_39305);

(statearr_39338[(8)] = inst_39292__$1);

return statearr_39338;
})();
var statearr_39339_40954 = state_39318__$1;
(statearr_39339_40954[(2)] = null);

(statearr_39339_40954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (9))){
var state_39318__$1 = state_39318;
var statearr_39340_40955 = state_39318__$1;
(statearr_39340_40955[(2)] = null);

(statearr_39340_40955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (5))){
var state_39318__$1 = state_39318;
var statearr_39341_40956 = state_39318__$1;
(statearr_39341_40956[(2)] = null);

(statearr_39341_40956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (10))){
var inst_39310 = (state_39318[(2)]);
var state_39318__$1 = state_39318;
var statearr_39342_40957 = state_39318__$1;
(statearr_39342_40957[(2)] = inst_39310);

(statearr_39342_40957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39319 === (8))){
var inst_39297 = (state_39318[(7)]);
var state_39318__$1 = state_39318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39318__$1,(11),out,inst_39297);
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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39346[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39346[(1)] = (1));

return statearr_39346;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39318){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39318);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39347){var ex__37254__auto__ = e39347;
var statearr_39348_40968 = state_39318;
(statearr_39348_40968[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39318[(4)]))){
var statearr_39349_40969 = state_39318;
(statearr_39349_40969[(1)] = cljs.core.first((state_39318[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40970 = state_39318;
state_39318 = G__40970;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39350 = f__37629__auto__();
(statearr_39350[(6)] = c__37628__auto___40936);

return statearr_39350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39357 = (function (f,ch,meta39353,_,fn1,meta39358){
this.f = f;
this.ch = ch;
this.meta39353 = meta39353;
this._ = _;
this.fn1 = fn1;
this.meta39358 = meta39358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39359,meta39358__$1){
var self__ = this;
var _39359__$1 = this;
return (new cljs.core.async.t_cljs$core$async39357(self__.f,self__.ch,self__.meta39353,self__._,self__.fn1,meta39358__$1));
}));

(cljs.core.async.t_cljs$core$async39357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39359){
var self__ = this;
var _39359__$1 = this;
return self__.meta39358;
}));

(cljs.core.async.t_cljs$core$async39357.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39357.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39351_SHARP_){
var G__39363 = (((p1__39351_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39351_SHARP_) : self__.f.call(null,p1__39351_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39363) : f1.call(null,G__39363));
});
}));

(cljs.core.async.t_cljs$core$async39357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39353","meta39353",965813530,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39352","cljs.core.async/t_cljs$core$async39352",996366467,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39358","meta39358",133121388,null)], null);
}));

(cljs.core.async.t_cljs$core$async39357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39357");

(cljs.core.async.t_cljs$core$async39357.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39357.
 */
cljs.core.async.__GT_t_cljs$core$async39357 = (function cljs$core$async$__GT_t_cljs$core$async39357(f,ch,meta39353,_,fn1,meta39358){
return (new cljs.core.async.t_cljs$core$async39357(f,ch,meta39353,_,fn1,meta39358));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39352 = (function (f,ch,meta39353){
this.f = f;
this.ch = ch;
this.meta39353 = meta39353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39354,meta39353__$1){
var self__ = this;
var _39354__$1 = this;
return (new cljs.core.async.t_cljs$core$async39352(self__.f,self__.ch,meta39353__$1));
}));

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39354){
var self__ = this;
var _39354__$1 = this;
return self__.meta39353;
}));

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async39357(self__.f,self__.ch,self__.meta39353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39364 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39364) : self__.f.call(null,G__39364));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39353","meta39353",965813530,null)], null);
}));

(cljs.core.async.t_cljs$core$async39352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39352");

(cljs.core.async.t_cljs$core$async39352.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39352.
 */
cljs.core.async.__GT_t_cljs$core$async39352 = (function cljs$core$async$__GT_t_cljs$core$async39352(f,ch,meta39353){
return (new cljs.core.async.t_cljs$core$async39352(f,ch,meta39353));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39366 = (function (f,ch,meta39367){
this.f = f;
this.ch = ch;
this.meta39367 = meta39367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39368,meta39367__$1){
var self__ = this;
var _39368__$1 = this;
return (new cljs.core.async.t_cljs$core$async39366(self__.f,self__.ch,meta39367__$1));
}));

(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39368){
var self__ = this;
var _39368__$1 = this;
return self__.meta39367;
}));

(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39367","meta39367",-575520531,null)], null);
}));

(cljs.core.async.t_cljs$core$async39366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39366");

(cljs.core.async.t_cljs$core$async39366.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39366.
 */
cljs.core.async.__GT_t_cljs$core$async39366 = (function cljs$core$async$__GT_t_cljs$core$async39366(f,ch,meta39367){
return (new cljs.core.async.t_cljs$core$async39366(f,ch,meta39367));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39366(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39375 = (function (p,ch,meta39376){
this.p = p;
this.ch = ch;
this.meta39376 = meta39376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39377,meta39376__$1){
var self__ = this;
var _39377__$1 = this;
return (new cljs.core.async.t_cljs$core$async39375(self__.p,self__.ch,meta39376__$1));
}));

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39377){
var self__ = this;
var _39377__$1 = this;
return self__.meta39376;
}));

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39376","meta39376",479191598,null)], null);
}));

(cljs.core.async.t_cljs$core$async39375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39375");

(cljs.core.async.t_cljs$core$async39375.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39375.
 */
cljs.core.async.__GT_t_cljs$core$async39375 = (function cljs$core$async$__GT_t_cljs$core$async39375(p,ch,meta39376){
return (new cljs.core.async.t_cljs$core$async39375(p,ch,meta39376));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async39375(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39387 = arguments.length;
switch (G__39387) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37628__auto___41006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39423){
var state_val_39424 = (state_39423[(1)]);
if((state_val_39424 === (7))){
var inst_39418 = (state_39423[(2)]);
var state_39423__$1 = state_39423;
var statearr_39429_41007 = state_39423__$1;
(statearr_39429_41007[(2)] = inst_39418);

(statearr_39429_41007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (1))){
var state_39423__$1 = state_39423;
var statearr_39431_41008 = state_39423__$1;
(statearr_39431_41008[(2)] = null);

(statearr_39431_41008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (4))){
var inst_39403 = (state_39423[(7)]);
var inst_39403__$1 = (state_39423[(2)]);
var inst_39404 = (inst_39403__$1 == null);
var state_39423__$1 = (function (){var statearr_39435 = state_39423;
(statearr_39435[(7)] = inst_39403__$1);

return statearr_39435;
})();
if(cljs.core.truth_(inst_39404)){
var statearr_39436_41010 = state_39423__$1;
(statearr_39436_41010[(1)] = (5));

} else {
var statearr_39437_41013 = state_39423__$1;
(statearr_39437_41013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (6))){
var inst_39403 = (state_39423[(7)]);
var inst_39409 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39403) : p.call(null,inst_39403));
var state_39423__$1 = state_39423;
if(cljs.core.truth_(inst_39409)){
var statearr_39440_41018 = state_39423__$1;
(statearr_39440_41018[(1)] = (8));

} else {
var statearr_39442_41019 = state_39423__$1;
(statearr_39442_41019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (3))){
var inst_39420 = (state_39423[(2)]);
var state_39423__$1 = state_39423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39423__$1,inst_39420);
} else {
if((state_val_39424 === (2))){
var state_39423__$1 = state_39423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39423__$1,(4),ch);
} else {
if((state_val_39424 === (11))){
var inst_39412 = (state_39423[(2)]);
var state_39423__$1 = state_39423;
var statearr_39446_41021 = state_39423__$1;
(statearr_39446_41021[(2)] = inst_39412);

(statearr_39446_41021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (9))){
var state_39423__$1 = state_39423;
var statearr_39448_41022 = state_39423__$1;
(statearr_39448_41022[(2)] = null);

(statearr_39448_41022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (5))){
var inst_39407 = cljs.core.async.close_BANG_(out);
var state_39423__$1 = state_39423;
var statearr_39449_41023 = state_39423__$1;
(statearr_39449_41023[(2)] = inst_39407);

(statearr_39449_41023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (10))){
var inst_39415 = (state_39423[(2)]);
var state_39423__$1 = (function (){var statearr_39452 = state_39423;
(statearr_39452[(8)] = inst_39415);

return statearr_39452;
})();
var statearr_39453_41024 = state_39423__$1;
(statearr_39453_41024[(2)] = null);

(statearr_39453_41024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39424 === (8))){
var inst_39403 = (state_39423[(7)]);
var state_39423__$1 = state_39423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39423__$1,(11),out,inst_39403);
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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39458 = [null,null,null,null,null,null,null,null,null];
(statearr_39458[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39458[(1)] = (1));

return statearr_39458;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39423){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39423);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39459){var ex__37254__auto__ = e39459;
var statearr_39461_41026 = state_39423;
(statearr_39461_41026[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39423[(4)]))){
var statearr_39462_41029 = state_39423;
(statearr_39462_41029[(1)] = cljs.core.first((state_39423[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41033 = state_39423;
state_39423 = G__41033;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39463 = f__37629__auto__();
(statearr_39463[(6)] = c__37628__auto___41006);

return statearr_39463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39465 = arguments.length;
switch (G__39465) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39542){
var state_val_39543 = (state_39542[(1)]);
if((state_val_39543 === (7))){
var inst_39536 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
var statearr_39551_41038 = state_39542__$1;
(statearr_39551_41038[(2)] = inst_39536);

(statearr_39551_41038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (20))){
var inst_39504 = (state_39542[(7)]);
var inst_39517 = (state_39542[(2)]);
var inst_39518 = cljs.core.next(inst_39504);
var inst_39488 = inst_39518;
var inst_39489 = null;
var inst_39490 = (0);
var inst_39491 = (0);
var state_39542__$1 = (function (){var statearr_39553 = state_39542;
(statearr_39553[(8)] = inst_39488);

(statearr_39553[(9)] = inst_39490);

(statearr_39553[(10)] = inst_39489);

(statearr_39553[(11)] = inst_39491);

(statearr_39553[(12)] = inst_39517);

return statearr_39553;
})();
var statearr_39554_41042 = state_39542__$1;
(statearr_39554_41042[(2)] = null);

(statearr_39554_41042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (1))){
var state_39542__$1 = state_39542;
var statearr_39556_41045 = state_39542__$1;
(statearr_39556_41045[(2)] = null);

(statearr_39556_41045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (4))){
var inst_39475 = (state_39542[(13)]);
var inst_39475__$1 = (state_39542[(2)]);
var inst_39477 = (inst_39475__$1 == null);
var state_39542__$1 = (function (){var statearr_39560 = state_39542;
(statearr_39560[(13)] = inst_39475__$1);

return statearr_39560;
})();
if(cljs.core.truth_(inst_39477)){
var statearr_39562_41048 = state_39542__$1;
(statearr_39562_41048[(1)] = (5));

} else {
var statearr_39563_41049 = state_39542__$1;
(statearr_39563_41049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (15))){
var state_39542__$1 = state_39542;
var statearr_39567_41050 = state_39542__$1;
(statearr_39567_41050[(2)] = null);

(statearr_39567_41050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (21))){
var state_39542__$1 = state_39542;
var statearr_39568_41051 = state_39542__$1;
(statearr_39568_41051[(2)] = null);

(statearr_39568_41051[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (13))){
var inst_39488 = (state_39542[(8)]);
var inst_39490 = (state_39542[(9)]);
var inst_39489 = (state_39542[(10)]);
var inst_39491 = (state_39542[(11)]);
var inst_39500 = (state_39542[(2)]);
var inst_39501 = (inst_39491 + (1));
var tmp39564 = inst_39488;
var tmp39565 = inst_39490;
var tmp39566 = inst_39489;
var inst_39488__$1 = tmp39564;
var inst_39489__$1 = tmp39566;
var inst_39490__$1 = tmp39565;
var inst_39491__$1 = inst_39501;
var state_39542__$1 = (function (){var statearr_39573 = state_39542;
(statearr_39573[(8)] = inst_39488__$1);

(statearr_39573[(9)] = inst_39490__$1);

(statearr_39573[(10)] = inst_39489__$1);

(statearr_39573[(11)] = inst_39491__$1);

(statearr_39573[(14)] = inst_39500);

return statearr_39573;
})();
var statearr_39576_41055 = state_39542__$1;
(statearr_39576_41055[(2)] = null);

(statearr_39576_41055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (22))){
var state_39542__$1 = state_39542;
var statearr_39577_41059 = state_39542__$1;
(statearr_39577_41059[(2)] = null);

(statearr_39577_41059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (6))){
var inst_39475 = (state_39542[(13)]);
var inst_39486 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39475) : f.call(null,inst_39475));
var inst_39487 = cljs.core.seq(inst_39486);
var inst_39488 = inst_39487;
var inst_39489 = null;
var inst_39490 = (0);
var inst_39491 = (0);
var state_39542__$1 = (function (){var statearr_39579 = state_39542;
(statearr_39579[(8)] = inst_39488);

(statearr_39579[(9)] = inst_39490);

(statearr_39579[(10)] = inst_39489);

(statearr_39579[(11)] = inst_39491);

return statearr_39579;
})();
var statearr_39582_41063 = state_39542__$1;
(statearr_39582_41063[(2)] = null);

(statearr_39582_41063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (17))){
var inst_39504 = (state_39542[(7)]);
var inst_39509 = cljs.core.chunk_first(inst_39504);
var inst_39510 = cljs.core.chunk_rest(inst_39504);
var inst_39511 = cljs.core.count(inst_39509);
var inst_39488 = inst_39510;
var inst_39489 = inst_39509;
var inst_39490 = inst_39511;
var inst_39491 = (0);
var state_39542__$1 = (function (){var statearr_39585 = state_39542;
(statearr_39585[(8)] = inst_39488);

(statearr_39585[(9)] = inst_39490);

(statearr_39585[(10)] = inst_39489);

(statearr_39585[(11)] = inst_39491);

return statearr_39585;
})();
var statearr_39586_41068 = state_39542__$1;
(statearr_39586_41068[(2)] = null);

(statearr_39586_41068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (3))){
var inst_39538 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39542__$1,inst_39538);
} else {
if((state_val_39543 === (12))){
var inst_39526 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
var statearr_39589_41075 = state_39542__$1;
(statearr_39589_41075[(2)] = inst_39526);

(statearr_39589_41075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (2))){
var state_39542__$1 = state_39542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39542__$1,(4),in$);
} else {
if((state_val_39543 === (23))){
var inst_39534 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
var statearr_39591_41076 = state_39542__$1;
(statearr_39591_41076[(2)] = inst_39534);

(statearr_39591_41076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (19))){
var inst_39521 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
var statearr_39594_41077 = state_39542__$1;
(statearr_39594_41077[(2)] = inst_39521);

(statearr_39594_41077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (11))){
var inst_39488 = (state_39542[(8)]);
var inst_39504 = (state_39542[(7)]);
var inst_39504__$1 = cljs.core.seq(inst_39488);
var state_39542__$1 = (function (){var statearr_39595 = state_39542;
(statearr_39595[(7)] = inst_39504__$1);

return statearr_39595;
})();
if(inst_39504__$1){
var statearr_39598_41078 = state_39542__$1;
(statearr_39598_41078[(1)] = (14));

} else {
var statearr_39599_41079 = state_39542__$1;
(statearr_39599_41079[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (9))){
var inst_39528 = (state_39542[(2)]);
var inst_39529 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39542__$1 = (function (){var statearr_39602 = state_39542;
(statearr_39602[(15)] = inst_39528);

return statearr_39602;
})();
if(cljs.core.truth_(inst_39529)){
var statearr_39603_41083 = state_39542__$1;
(statearr_39603_41083[(1)] = (21));

} else {
var statearr_39605_41084 = state_39542__$1;
(statearr_39605_41084[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (5))){
var inst_39479 = cljs.core.async.close_BANG_(out);
var state_39542__$1 = state_39542;
var statearr_39606_41085 = state_39542__$1;
(statearr_39606_41085[(2)] = inst_39479);

(statearr_39606_41085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (14))){
var inst_39504 = (state_39542[(7)]);
var inst_39507 = cljs.core.chunked_seq_QMARK_(inst_39504);
var state_39542__$1 = state_39542;
if(inst_39507){
var statearr_39608_41087 = state_39542__$1;
(statearr_39608_41087[(1)] = (17));

} else {
var statearr_39609_41088 = state_39542__$1;
(statearr_39609_41088[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (16))){
var inst_39524 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
var statearr_39610_41089 = state_39542__$1;
(statearr_39610_41089[(2)] = inst_39524);

(statearr_39610_41089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (10))){
var inst_39489 = (state_39542[(10)]);
var inst_39491 = (state_39542[(11)]);
var inst_39497 = cljs.core._nth(inst_39489,inst_39491);
var state_39542__$1 = state_39542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39542__$1,(13),out,inst_39497);
} else {
if((state_val_39543 === (18))){
var inst_39504 = (state_39542[(7)]);
var inst_39514 = cljs.core.first(inst_39504);
var state_39542__$1 = state_39542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39542__$1,(20),out,inst_39514);
} else {
if((state_val_39543 === (8))){
var inst_39490 = (state_39542[(9)]);
var inst_39491 = (state_39542[(11)]);
var inst_39493 = (inst_39491 < inst_39490);
var inst_39494 = inst_39493;
var state_39542__$1 = state_39542;
if(cljs.core.truth_(inst_39494)){
var statearr_39614_41091 = state_39542__$1;
(statearr_39614_41091[(1)] = (10));

} else {
var statearr_39615_41092 = state_39542__$1;
(statearr_39615_41092[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37251__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37251__auto____0 = (function (){
var statearr_39618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39618[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37251__auto__);

(statearr_39618[(1)] = (1));

return statearr_39618;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37251__auto____1 = (function (state_39542){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39542);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39620){var ex__37254__auto__ = e39620;
var statearr_39621_41096 = state_39542;
(statearr_39621_41096[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39542[(4)]))){
var statearr_39622_41097 = state_39542;
(statearr_39622_41097[(1)] = cljs.core.first((state_39542[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41098 = state_39542;
state_39542 = G__41098;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37251__auto__ = function(state_39542){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37251__auto____1.call(this,state_39542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37251__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37251__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39625 = f__37629__auto__();
(statearr_39625[(6)] = c__37628__auto__);

return statearr_39625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

return c__37628__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39630 = arguments.length;
switch (G__39630) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39637 = arguments.length;
switch (G__39637) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39645 = arguments.length;
switch (G__39645) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37628__auto___41105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39674){
var state_val_39675 = (state_39674[(1)]);
if((state_val_39675 === (7))){
var inst_39669 = (state_39674[(2)]);
var state_39674__$1 = state_39674;
var statearr_39681_41109 = state_39674__$1;
(statearr_39681_41109[(2)] = inst_39669);

(statearr_39681_41109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (1))){
var inst_39649 = null;
var state_39674__$1 = (function (){var statearr_39684 = state_39674;
(statearr_39684[(7)] = inst_39649);

return statearr_39684;
})();
var statearr_39685_41110 = state_39674__$1;
(statearr_39685_41110[(2)] = null);

(statearr_39685_41110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (4))){
var inst_39653 = (state_39674[(8)]);
var inst_39653__$1 = (state_39674[(2)]);
var inst_39655 = (inst_39653__$1 == null);
var inst_39656 = cljs.core.not(inst_39655);
var state_39674__$1 = (function (){var statearr_39688 = state_39674;
(statearr_39688[(8)] = inst_39653__$1);

return statearr_39688;
})();
if(inst_39656){
var statearr_39689_41113 = state_39674__$1;
(statearr_39689_41113[(1)] = (5));

} else {
var statearr_39692_41114 = state_39674__$1;
(statearr_39692_41114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (6))){
var state_39674__$1 = state_39674;
var statearr_39694_41117 = state_39674__$1;
(statearr_39694_41117[(2)] = null);

(statearr_39694_41117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (3))){
var inst_39671 = (state_39674[(2)]);
var inst_39672 = cljs.core.async.close_BANG_(out);
var state_39674__$1 = (function (){var statearr_39696 = state_39674;
(statearr_39696[(9)] = inst_39671);

return statearr_39696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39674__$1,inst_39672);
} else {
if((state_val_39675 === (2))){
var state_39674__$1 = state_39674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39674__$1,(4),ch);
} else {
if((state_val_39675 === (11))){
var inst_39653 = (state_39674[(8)]);
var inst_39663 = (state_39674[(2)]);
var inst_39649 = inst_39653;
var state_39674__$1 = (function (){var statearr_39698 = state_39674;
(statearr_39698[(7)] = inst_39649);

(statearr_39698[(10)] = inst_39663);

return statearr_39698;
})();
var statearr_39700_41120 = state_39674__$1;
(statearr_39700_41120[(2)] = null);

(statearr_39700_41120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (9))){
var inst_39653 = (state_39674[(8)]);
var state_39674__$1 = state_39674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39674__$1,(11),out,inst_39653);
} else {
if((state_val_39675 === (5))){
var inst_39653 = (state_39674[(8)]);
var inst_39649 = (state_39674[(7)]);
var inst_39658 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39653,inst_39649);
var state_39674__$1 = state_39674;
if(inst_39658){
var statearr_39703_41122 = state_39674__$1;
(statearr_39703_41122[(1)] = (8));

} else {
var statearr_39704_41123 = state_39674__$1;
(statearr_39704_41123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (10))){
var inst_39666 = (state_39674[(2)]);
var state_39674__$1 = state_39674;
var statearr_39705_41126 = state_39674__$1;
(statearr_39705_41126[(2)] = inst_39666);

(statearr_39705_41126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (8))){
var inst_39649 = (state_39674[(7)]);
var tmp39701 = inst_39649;
var inst_39649__$1 = tmp39701;
var state_39674__$1 = (function (){var statearr_39707 = state_39674;
(statearr_39707[(7)] = inst_39649__$1);

return statearr_39707;
})();
var statearr_39708_41129 = state_39674__$1;
(statearr_39708_41129[(2)] = null);

(statearr_39708_41129[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39713[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39713[(1)] = (1));

return statearr_39713;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39674){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39674);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39716){var ex__37254__auto__ = e39716;
var statearr_39717_41130 = state_39674;
(statearr_39717_41130[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39674[(4)]))){
var statearr_39718_41132 = state_39674;
(statearr_39718_41132[(1)] = cljs.core.first((state_39674[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41136 = state_39674;
state_39674 = G__41136;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39721 = f__37629__auto__();
(statearr_39721[(6)] = c__37628__auto___41105);

return statearr_39721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39741 = arguments.length;
switch (G__39741) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37628__auto___41143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39802){
var state_val_39803 = (state_39802[(1)]);
if((state_val_39803 === (7))){
var inst_39798 = (state_39802[(2)]);
var state_39802__$1 = state_39802;
var statearr_39809_41145 = state_39802__$1;
(statearr_39809_41145[(2)] = inst_39798);

(statearr_39809_41145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (1))){
var inst_39754 = (new Array(n));
var inst_39756 = inst_39754;
var inst_39757 = (0);
var state_39802__$1 = (function (){var statearr_39811 = state_39802;
(statearr_39811[(7)] = inst_39756);

(statearr_39811[(8)] = inst_39757);

return statearr_39811;
})();
var statearr_39815_41147 = state_39802__$1;
(statearr_39815_41147[(2)] = null);

(statearr_39815_41147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (4))){
var inst_39762 = (state_39802[(9)]);
var inst_39762__$1 = (state_39802[(2)]);
var inst_39763 = (inst_39762__$1 == null);
var inst_39764 = cljs.core.not(inst_39763);
var state_39802__$1 = (function (){var statearr_39818 = state_39802;
(statearr_39818[(9)] = inst_39762__$1);

return statearr_39818;
})();
if(inst_39764){
var statearr_39819_41148 = state_39802__$1;
(statearr_39819_41148[(1)] = (5));

} else {
var statearr_39820_41149 = state_39802__$1;
(statearr_39820_41149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (15))){
var inst_39792 = (state_39802[(2)]);
var state_39802__$1 = state_39802;
var statearr_39821_41151 = state_39802__$1;
(statearr_39821_41151[(2)] = inst_39792);

(statearr_39821_41151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (13))){
var state_39802__$1 = state_39802;
var statearr_39822_41152 = state_39802__$1;
(statearr_39822_41152[(2)] = null);

(statearr_39822_41152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (6))){
var inst_39757 = (state_39802[(8)]);
var inst_39788 = (inst_39757 > (0));
var state_39802__$1 = state_39802;
if(cljs.core.truth_(inst_39788)){
var statearr_39825_41155 = state_39802__$1;
(statearr_39825_41155[(1)] = (12));

} else {
var statearr_39826_41156 = state_39802__$1;
(statearr_39826_41156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (3))){
var inst_39800 = (state_39802[(2)]);
var state_39802__$1 = state_39802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39802__$1,inst_39800);
} else {
if((state_val_39803 === (12))){
var inst_39756 = (state_39802[(7)]);
var inst_39790 = cljs.core.vec(inst_39756);
var state_39802__$1 = state_39802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39802__$1,(15),out,inst_39790);
} else {
if((state_val_39803 === (2))){
var state_39802__$1 = state_39802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39802__$1,(4),ch);
} else {
if((state_val_39803 === (11))){
var inst_39780 = (state_39802[(2)]);
var inst_39781 = (new Array(n));
var inst_39756 = inst_39781;
var inst_39757 = (0);
var state_39802__$1 = (function (){var statearr_39831 = state_39802;
(statearr_39831[(7)] = inst_39756);

(statearr_39831[(10)] = inst_39780);

(statearr_39831[(8)] = inst_39757);

return statearr_39831;
})();
var statearr_39832_41163 = state_39802__$1;
(statearr_39832_41163[(2)] = null);

(statearr_39832_41163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (9))){
var inst_39756 = (state_39802[(7)]);
var inst_39778 = cljs.core.vec(inst_39756);
var state_39802__$1 = state_39802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39802__$1,(11),out,inst_39778);
} else {
if((state_val_39803 === (5))){
var inst_39769 = (state_39802[(11)]);
var inst_39756 = (state_39802[(7)]);
var inst_39762 = (state_39802[(9)]);
var inst_39757 = (state_39802[(8)]);
var inst_39767 = (inst_39756[inst_39757] = inst_39762);
var inst_39769__$1 = (inst_39757 + (1));
var inst_39771 = (inst_39769__$1 < n);
var state_39802__$1 = (function (){var statearr_39834 = state_39802;
(statearr_39834[(11)] = inst_39769__$1);

(statearr_39834[(12)] = inst_39767);

return statearr_39834;
})();
if(cljs.core.truth_(inst_39771)){
var statearr_39837_41169 = state_39802__$1;
(statearr_39837_41169[(1)] = (8));

} else {
var statearr_39838_41170 = state_39802__$1;
(statearr_39838_41170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (14))){
var inst_39795 = (state_39802[(2)]);
var inst_39796 = cljs.core.async.close_BANG_(out);
var state_39802__$1 = (function (){var statearr_39841 = state_39802;
(statearr_39841[(13)] = inst_39795);

return statearr_39841;
})();
var statearr_39844_41172 = state_39802__$1;
(statearr_39844_41172[(2)] = inst_39796);

(statearr_39844_41172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (10))){
var inst_39784 = (state_39802[(2)]);
var state_39802__$1 = state_39802;
var statearr_39845_41173 = state_39802__$1;
(statearr_39845_41173[(2)] = inst_39784);

(statearr_39845_41173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (8))){
var inst_39769 = (state_39802[(11)]);
var inst_39756 = (state_39802[(7)]);
var tmp39839 = inst_39756;
var inst_39756__$1 = tmp39839;
var inst_39757 = inst_39769;
var state_39802__$1 = (function (){var statearr_39848 = state_39802;
(statearr_39848[(7)] = inst_39756__$1);

(statearr_39848[(8)] = inst_39757);

return statearr_39848;
})();
var statearr_39850_41174 = state_39802__$1;
(statearr_39850_41174[(2)] = null);

(statearr_39850_41174[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39852[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39852[(1)] = (1));

return statearr_39852;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39802){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39802);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e39853){var ex__37254__auto__ = e39853;
var statearr_39854_41175 = state_39802;
(statearr_39854_41175[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39802[(4)]))){
var statearr_39855_41176 = state_39802;
(statearr_39855_41176[(1)] = cljs.core.first((state_39802[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41178 = state_39802;
state_39802 = G__41178;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_39862 = f__37629__auto__();
(statearr_39862[(6)] = c__37628__auto___41143);

return statearr_39862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39868 = arguments.length;
switch (G__39868) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37628__auto___41180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_39923){
var state_val_39924 = (state_39923[(1)]);
if((state_val_39924 === (7))){
var inst_39918 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39931_41181 = state_39923__$1;
(statearr_39931_41181[(2)] = inst_39918);

(statearr_39931_41181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (1))){
var inst_39875 = [];
var inst_39876 = inst_39875;
var inst_39877 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39923__$1 = (function (){var statearr_39933 = state_39923;
(statearr_39933[(7)] = inst_39877);

(statearr_39933[(8)] = inst_39876);

return statearr_39933;
})();
var statearr_39934_41183 = state_39923__$1;
(statearr_39934_41183[(2)] = null);

(statearr_39934_41183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (4))){
var inst_39880 = (state_39923[(9)]);
var inst_39880__$1 = (state_39923[(2)]);
var inst_39881 = (inst_39880__$1 == null);
var inst_39882 = cljs.core.not(inst_39881);
var state_39923__$1 = (function (){var statearr_39937 = state_39923;
(statearr_39937[(9)] = inst_39880__$1);

return statearr_39937;
})();
if(inst_39882){
var statearr_39942_41187 = state_39923__$1;
(statearr_39942_41187[(1)] = (5));

} else {
var statearr_39943_41189 = state_39923__$1;
(statearr_39943_41189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (15))){
var inst_39876 = (state_39923[(8)]);
var inst_39909 = cljs.core.vec(inst_39876);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39923__$1,(18),out,inst_39909);
} else {
if((state_val_39924 === (13))){
var inst_39904 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39946_41192 = state_39923__$1;
(statearr_39946_41192[(2)] = inst_39904);

(statearr_39946_41192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (6))){
var inst_39876 = (state_39923[(8)]);
var inst_39906 = inst_39876.length;
var inst_39907 = (inst_39906 > (0));
var state_39923__$1 = state_39923;
if(cljs.core.truth_(inst_39907)){
var statearr_39947_41194 = state_39923__$1;
(statearr_39947_41194[(1)] = (15));

} else {
var statearr_39948_41195 = state_39923__$1;
(statearr_39948_41195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (17))){
var inst_39914 = (state_39923[(2)]);
var inst_39915 = cljs.core.async.close_BANG_(out);
var state_39923__$1 = (function (){var statearr_39950 = state_39923;
(statearr_39950[(10)] = inst_39914);

return statearr_39950;
})();
var statearr_39951_41197 = state_39923__$1;
(statearr_39951_41197[(2)] = inst_39915);

(statearr_39951_41197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (3))){
var inst_39921 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39923__$1,inst_39921);
} else {
if((state_val_39924 === (12))){
var inst_39876 = (state_39923[(8)]);
var inst_39896 = cljs.core.vec(inst_39876);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39923__$1,(14),out,inst_39896);
} else {
if((state_val_39924 === (2))){
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39923__$1,(4),ch);
} else {
if((state_val_39924 === (11))){
var inst_39876 = (state_39923[(8)]);
var inst_39880 = (state_39923[(9)]);
var inst_39884 = (state_39923[(11)]);
var inst_39893 = inst_39876.push(inst_39880);
var tmp39952 = inst_39876;
var inst_39876__$1 = tmp39952;
var inst_39877 = inst_39884;
var state_39923__$1 = (function (){var statearr_39959 = state_39923;
(statearr_39959[(7)] = inst_39877);

(statearr_39959[(8)] = inst_39876__$1);

(statearr_39959[(12)] = inst_39893);

return statearr_39959;
})();
var statearr_39961_41199 = state_39923__$1;
(statearr_39961_41199[(2)] = null);

(statearr_39961_41199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (9))){
var inst_39877 = (state_39923[(7)]);
var inst_39889 = cljs.core.keyword_identical_QMARK_(inst_39877,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39923__$1 = state_39923;
var statearr_39962_41202 = state_39923__$1;
(statearr_39962_41202[(2)] = inst_39889);

(statearr_39962_41202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (5))){
var inst_39877 = (state_39923[(7)]);
var inst_39885 = (state_39923[(13)]);
var inst_39880 = (state_39923[(9)]);
var inst_39884 = (state_39923[(11)]);
var inst_39884__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39880) : f.call(null,inst_39880));
var inst_39885__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39884__$1,inst_39877);
var state_39923__$1 = (function (){var statearr_39964 = state_39923;
(statearr_39964[(13)] = inst_39885__$1);

(statearr_39964[(11)] = inst_39884__$1);

return statearr_39964;
})();
if(inst_39885__$1){
var statearr_39965_41205 = state_39923__$1;
(statearr_39965_41205[(1)] = (8));

} else {
var statearr_39968_41206 = state_39923__$1;
(statearr_39968_41206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (14))){
var inst_39880 = (state_39923[(9)]);
var inst_39884 = (state_39923[(11)]);
var inst_39898 = (state_39923[(2)]);
var inst_39900 = [];
var inst_39901 = inst_39900.push(inst_39880);
var inst_39876 = inst_39900;
var inst_39877 = inst_39884;
var state_39923__$1 = (function (){var statearr_39969 = state_39923;
(statearr_39969[(7)] = inst_39877);

(statearr_39969[(14)] = inst_39898);

(statearr_39969[(8)] = inst_39876);

(statearr_39969[(15)] = inst_39901);

return statearr_39969;
})();
var statearr_39974_41208 = state_39923__$1;
(statearr_39974_41208[(2)] = null);

(statearr_39974_41208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (16))){
var state_39923__$1 = state_39923;
var statearr_39981_41209 = state_39923__$1;
(statearr_39981_41209[(2)] = null);

(statearr_39981_41209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (10))){
var inst_39891 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
if(cljs.core.truth_(inst_39891)){
var statearr_39986_41212 = state_39923__$1;
(statearr_39986_41212[(1)] = (11));

} else {
var statearr_39987_41213 = state_39923__$1;
(statearr_39987_41213[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (18))){
var inst_39911 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39991_41216 = state_39923__$1;
(statearr_39991_41216[(2)] = inst_39911);

(statearr_39991_41216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (8))){
var inst_39885 = (state_39923[(13)]);
var state_39923__$1 = state_39923;
var statearr_39992_41217 = state_39923__$1;
(statearr_39992_41217[(2)] = inst_39885);

(statearr_39992_41217[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__37251__auto__ = null;
var cljs$core$async$state_machine__37251__auto____0 = (function (){
var statearr_39998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39998[(0)] = cljs$core$async$state_machine__37251__auto__);

(statearr_39998[(1)] = (1));

return statearr_39998;
});
var cljs$core$async$state_machine__37251__auto____1 = (function (state_39923){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_39923);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e40000){var ex__37254__auto__ = e40000;
var statearr_40001_41219 = state_39923;
(statearr_40001_41219[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_39923[(4)]))){
var statearr_40005_41222 = state_39923;
(statearr_40005_41222[(1)] = cljs.core.first((state_39923[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41225 = state_39923;
state_39923 = G__41225;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
cljs$core$async$state_machine__37251__auto__ = function(state_39923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37251__auto____1.call(this,state_39923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37251__auto____0;
cljs$core$async$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37251__auto____1;
return cljs$core$async$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_40010 = f__37629__auto__();
(statearr_40010[(6)] = c__37628__auto___41180);

return statearr_40010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
