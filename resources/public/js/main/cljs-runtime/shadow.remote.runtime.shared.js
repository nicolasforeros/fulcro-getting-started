goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45961,res){
var map__45962 = p__45961;
var map__45962__$1 = cljs.core.__destructure_map(map__45962);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45962__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45962__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45963 = res;
var G__45963__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45963,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45963);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45963__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45963__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45967 = arguments.length;
switch (G__45967) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45971,msg,handlers,timeout_after_ms){
var map__45972 = p__45971;
var map__45972__$1 = cljs.core.__destructure_map(map__45972);
var runtime = map__45972__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46192 = arguments.length;
var i__5770__auto___46193 = (0);
while(true){
if((i__5770__auto___46193 < len__5769__auto___46192)){
args__5775__auto__.push((arguments[i__5770__auto___46193]));

var G__46194 = (i__5770__auto___46193 + (1));
i__5770__auto___46193 = G__46194;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45999,ev,args){
var map__46004 = p__45999;
var map__46004__$1 = cljs.core.__destructure_map(map__46004);
var runtime = map__46004__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46004__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46005 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46008 = null;
var count__46009 = (0);
var i__46010 = (0);
while(true){
if((i__46010 < count__46009)){
var ext = chunk__46008.cljs$core$IIndexed$_nth$arity$2(null,i__46010);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46195 = seq__46005;
var G__46196 = chunk__46008;
var G__46197 = count__46009;
var G__46198 = (i__46010 + (1));
seq__46005 = G__46195;
chunk__46008 = G__46196;
count__46009 = G__46197;
i__46010 = G__46198;
continue;
} else {
var G__46199 = seq__46005;
var G__46200 = chunk__46008;
var G__46201 = count__46009;
var G__46202 = (i__46010 + (1));
seq__46005 = G__46199;
chunk__46008 = G__46200;
count__46009 = G__46201;
i__46010 = G__46202;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46005);
if(temp__5804__auto__){
var seq__46005__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46005__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46005__$1);
var G__46208 = cljs.core.chunk_rest(seq__46005__$1);
var G__46209 = c__5568__auto__;
var G__46210 = cljs.core.count(c__5568__auto__);
var G__46211 = (0);
seq__46005 = G__46208;
chunk__46008 = G__46209;
count__46009 = G__46210;
i__46010 = G__46211;
continue;
} else {
var ext = cljs.core.first(seq__46005__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46218 = cljs.core.next(seq__46005__$1);
var G__46219 = null;
var G__46220 = (0);
var G__46221 = (0);
seq__46005 = G__46218;
chunk__46008 = G__46219;
count__46009 = G__46220;
i__46010 = G__46221;
continue;
} else {
var G__46224 = cljs.core.next(seq__46005__$1);
var G__46225 = null;
var G__46226 = (0);
var G__46227 = (0);
seq__46005 = G__46224;
chunk__46008 = G__46225;
count__46009 = G__46226;
i__46010 = G__46227;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45985){
var G__45986 = cljs.core.first(seq45985);
var seq45985__$1 = cljs.core.next(seq45985);
var G__45987 = cljs.core.first(seq45985__$1);
var seq45985__$2 = cljs.core.next(seq45985__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45986,G__45987,seq45985__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46040,p__46041){
var map__46042 = p__46040;
var map__46042__$1 = cljs.core.__destructure_map(map__46042);
var runtime = map__46042__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46043 = p__46041;
var map__46043__$1 = cljs.core.__destructure_map(map__46043);
var msg = map__46043__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46043__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46050 = cljs.core.deref(state_ref);
var map__46050__$1 = cljs.core.__destructure_map(map__46050);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46050__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46050__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46051){
var map__46052 = p__46051;
var map__46052__$1 = cljs.core.__destructure_map(map__46052);
var runtime = map__46052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46056,msg){
var map__46057 = p__46056;
var map__46057__$1 = cljs.core.__destructure_map(map__46057);
var runtime = map__46057__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46057__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46066,key,p__46067){
var map__46068 = p__46066;
var map__46068__$1 = cljs.core.__destructure_map(map__46068);
var state = map__46068__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46068__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46069 = p__46067;
var map__46069__$1 = cljs.core.__destructure_map(map__46069);
var spec = map__46069__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46069__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46074,key,spec){
var map__46075 = p__46074;
var map__46075__$1 = cljs.core.__destructure_map(map__46075);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46075__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46077_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46077_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46078_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46078_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46079_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46079_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46080_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46080_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46081_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46081_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46098,key){
var map__46099 = p__46098;
var map__46099__$1 = cljs.core.__destructure_map(map__46099);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46099__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46105,msg){
var map__46106 = p__46105;
var map__46106__$1 = cljs.core.__destructure_map(map__46106);
var runtime = map__46106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46114,p__46115){
var map__46116 = p__46114;
var map__46116__$1 = cljs.core.__destructure_map(map__46116);
var runtime = map__46116__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46116__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46117 = p__46115;
var map__46117__$1 = cljs.core.__destructure_map(map__46117);
var msg = map__46117__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46117__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46117__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46122 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46125 = null;
var count__46126 = (0);
var i__46127 = (0);
while(true){
if((i__46127 < count__46126)){
var map__46155 = chunk__46125.cljs$core$IIndexed$_nth$arity$2(null,i__46127);
var map__46155__$1 = cljs.core.__destructure_map(map__46155);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46155__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46305 = seq__46122;
var G__46306 = chunk__46125;
var G__46307 = count__46126;
var G__46308 = (i__46127 + (1));
seq__46122 = G__46305;
chunk__46125 = G__46306;
count__46126 = G__46307;
i__46127 = G__46308;
continue;
} else {
var G__46309 = seq__46122;
var G__46310 = chunk__46125;
var G__46311 = count__46126;
var G__46312 = (i__46127 + (1));
seq__46122 = G__46309;
chunk__46125 = G__46310;
count__46126 = G__46311;
i__46127 = G__46312;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46122);
if(temp__5804__auto__){
var seq__46122__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46122__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46122__$1);
var G__46313 = cljs.core.chunk_rest(seq__46122__$1);
var G__46314 = c__5568__auto__;
var G__46315 = cljs.core.count(c__5568__auto__);
var G__46316 = (0);
seq__46122 = G__46313;
chunk__46125 = G__46314;
count__46126 = G__46315;
i__46127 = G__46316;
continue;
} else {
var map__46173 = cljs.core.first(seq__46122__$1);
var map__46173__$1 = cljs.core.__destructure_map(map__46173);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46317 = cljs.core.next(seq__46122__$1);
var G__46318 = null;
var G__46319 = (0);
var G__46320 = (0);
seq__46122 = G__46317;
chunk__46125 = G__46318;
count__46126 = G__46319;
i__46127 = G__46320;
continue;
} else {
var G__46321 = cljs.core.next(seq__46122__$1);
var G__46322 = null;
var G__46323 = (0);
var G__46324 = (0);
seq__46122 = G__46321;
chunk__46125 = G__46322;
count__46126 = G__46323;
i__46127 = G__46324;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
