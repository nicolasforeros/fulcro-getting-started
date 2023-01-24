goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45198 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45198(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45216 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45216(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44123 = coll;
var G__44124 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44123,G__44124) : shadow.dom.lazy_native_coll_seq.call(null,G__44123,G__44124));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44169 = arguments.length;
switch (G__44169) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44178 = arguments.length;
switch (G__44178) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44194 = arguments.length;
switch (G__44194) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44214 = arguments.length;
switch (G__44214) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44224 = arguments.length;
switch (G__44224) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44276 = arguments.length;
switch (G__44276) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44300){if((e44300 instanceof Object)){
var e = e44300;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44300;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44337 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44338 = null;
var count__44339 = (0);
var i__44340 = (0);
while(true){
if((i__44340 < count__44339)){
var el = chunk__44338.cljs$core$IIndexed$_nth$arity$2(null,i__44340);
var handler_45245__$1 = ((function (seq__44337,chunk__44338,count__44339,i__44340,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44337,chunk__44338,count__44339,i__44340,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45245__$1);


var G__45247 = seq__44337;
var G__45248 = chunk__44338;
var G__45249 = count__44339;
var G__45250 = (i__44340 + (1));
seq__44337 = G__45247;
chunk__44338 = G__45248;
count__44339 = G__45249;
i__44340 = G__45250;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44337);
if(temp__5804__auto__){
var seq__44337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44337__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44337__$1);
var G__45251 = cljs.core.chunk_rest(seq__44337__$1);
var G__45252 = c__5568__auto__;
var G__45253 = cljs.core.count(c__5568__auto__);
var G__45254 = (0);
seq__44337 = G__45251;
chunk__44338 = G__45252;
count__44339 = G__45253;
i__44340 = G__45254;
continue;
} else {
var el = cljs.core.first(seq__44337__$1);
var handler_45257__$1 = ((function (seq__44337,chunk__44338,count__44339,i__44340,el,seq__44337__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44337,chunk__44338,count__44339,i__44340,el,seq__44337__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45257__$1);


var G__45258 = cljs.core.next(seq__44337__$1);
var G__45259 = null;
var G__45260 = (0);
var G__45261 = (0);
seq__44337 = G__45258;
chunk__44338 = G__45259;
count__44339 = G__45260;
i__44340 = G__45261;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44413 = arguments.length;
switch (G__44413) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44482 = cljs.core.seq(events);
var chunk__44483 = null;
var count__44484 = (0);
var i__44485 = (0);
while(true){
if((i__44485 < count__44484)){
var vec__44517 = chunk__44483.cljs$core$IIndexed$_nth$arity$2(null,i__44485);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45269 = seq__44482;
var G__45270 = chunk__44483;
var G__45271 = count__44484;
var G__45272 = (i__44485 + (1));
seq__44482 = G__45269;
chunk__44483 = G__45270;
count__44484 = G__45271;
i__44485 = G__45272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44482);
if(temp__5804__auto__){
var seq__44482__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44482__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44482__$1);
var G__45273 = cljs.core.chunk_rest(seq__44482__$1);
var G__45274 = c__5568__auto__;
var G__45275 = cljs.core.count(c__5568__auto__);
var G__45276 = (0);
seq__44482 = G__45273;
chunk__44483 = G__45274;
count__44484 = G__45275;
i__44485 = G__45276;
continue;
} else {
var vec__44525 = cljs.core.first(seq__44482__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44525,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45277 = cljs.core.next(seq__44482__$1);
var G__45278 = null;
var G__45279 = (0);
var G__45280 = (0);
seq__44482 = G__45277;
chunk__44483 = G__45278;
count__44484 = G__45279;
i__44485 = G__45280;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44538 = cljs.core.seq(styles);
var chunk__44539 = null;
var count__44540 = (0);
var i__44541 = (0);
while(true){
if((i__44541 < count__44540)){
var vec__44556 = chunk__44539.cljs$core$IIndexed$_nth$arity$2(null,i__44541);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44556,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45281 = seq__44538;
var G__45282 = chunk__44539;
var G__45283 = count__44540;
var G__45284 = (i__44541 + (1));
seq__44538 = G__45281;
chunk__44539 = G__45282;
count__44540 = G__45283;
i__44541 = G__45284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44538);
if(temp__5804__auto__){
var seq__44538__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44538__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44538__$1);
var G__45285 = cljs.core.chunk_rest(seq__44538__$1);
var G__45286 = c__5568__auto__;
var G__45287 = cljs.core.count(c__5568__auto__);
var G__45288 = (0);
seq__44538 = G__45285;
chunk__44539 = G__45286;
count__44540 = G__45287;
i__44541 = G__45288;
continue;
} else {
var vec__44560 = cljs.core.first(seq__44538__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44560,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45289 = cljs.core.next(seq__44538__$1);
var G__45290 = null;
var G__45291 = (0);
var G__45292 = (0);
seq__44538 = G__45289;
chunk__44539 = G__45290;
count__44540 = G__45291;
i__44541 = G__45292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44565_45294 = key;
var G__44565_45295__$1 = (((G__44565_45294 instanceof cljs.core.Keyword))?G__44565_45294.fqn:null);
switch (G__44565_45295__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45299 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_45299,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_45299,"aria-");
}
})())){
el.setAttribute(ks_45299,value);
} else {
(el[ks_45299] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44651){
var map__44652 = p__44651;
var map__44652__$1 = cljs.core.__destructure_map(map__44652);
var props = map__44652__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44652__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44658 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44658,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44658,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44658,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44667 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44667,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44667;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44682 = arguments.length;
switch (G__44682) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44687){
var vec__44690 = p__44687;
var seq__44691 = cljs.core.seq(vec__44690);
var first__44692 = cljs.core.first(seq__44691);
var seq__44691__$1 = cljs.core.next(seq__44691);
var nn = first__44692;
var first__44692__$1 = cljs.core.first(seq__44691__$1);
var seq__44691__$2 = cljs.core.next(seq__44691__$1);
var np = first__44692__$1;
var nc = seq__44691__$2;
var node = vec__44690;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44694 = nn;
var G__44695 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44694,G__44695) : create_fn.call(null,G__44694,G__44695));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44696 = nn;
var G__44697 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44696,G__44697) : create_fn.call(null,G__44696,G__44697));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44700 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44700,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44700,(1),null);
var seq__44703_45315 = cljs.core.seq(node_children);
var chunk__44704_45316 = null;
var count__44705_45317 = (0);
var i__44706_45318 = (0);
while(true){
if((i__44706_45318 < count__44705_45317)){
var child_struct_45320 = chunk__44704_45316.cljs$core$IIndexed$_nth$arity$2(null,i__44706_45318);
var children_45321 = shadow.dom.dom_node(child_struct_45320);
if(cljs.core.seq_QMARK_(children_45321)){
var seq__44732_45322 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45321));
var chunk__44734_45323 = null;
var count__44735_45324 = (0);
var i__44736_45325 = (0);
while(true){
if((i__44736_45325 < count__44735_45324)){
var child_45326 = chunk__44734_45323.cljs$core$IIndexed$_nth$arity$2(null,i__44736_45325);
if(cljs.core.truth_(child_45326)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45326);


var G__45328 = seq__44732_45322;
var G__45329 = chunk__44734_45323;
var G__45330 = count__44735_45324;
var G__45331 = (i__44736_45325 + (1));
seq__44732_45322 = G__45328;
chunk__44734_45323 = G__45329;
count__44735_45324 = G__45330;
i__44736_45325 = G__45331;
continue;
} else {
var G__45333 = seq__44732_45322;
var G__45334 = chunk__44734_45323;
var G__45335 = count__44735_45324;
var G__45336 = (i__44736_45325 + (1));
seq__44732_45322 = G__45333;
chunk__44734_45323 = G__45334;
count__44735_45324 = G__45335;
i__44736_45325 = G__45336;
continue;
}
} else {
var temp__5804__auto___45337 = cljs.core.seq(seq__44732_45322);
if(temp__5804__auto___45337){
var seq__44732_45339__$1 = temp__5804__auto___45337;
if(cljs.core.chunked_seq_QMARK_(seq__44732_45339__$1)){
var c__5568__auto___45340 = cljs.core.chunk_first(seq__44732_45339__$1);
var G__45342 = cljs.core.chunk_rest(seq__44732_45339__$1);
var G__45343 = c__5568__auto___45340;
var G__45344 = cljs.core.count(c__5568__auto___45340);
var G__45345 = (0);
seq__44732_45322 = G__45342;
chunk__44734_45323 = G__45343;
count__44735_45324 = G__45344;
i__44736_45325 = G__45345;
continue;
} else {
var child_45346 = cljs.core.first(seq__44732_45339__$1);
if(cljs.core.truth_(child_45346)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45346);


var G__45347 = cljs.core.next(seq__44732_45339__$1);
var G__45348 = null;
var G__45349 = (0);
var G__45350 = (0);
seq__44732_45322 = G__45347;
chunk__44734_45323 = G__45348;
count__44735_45324 = G__45349;
i__44736_45325 = G__45350;
continue;
} else {
var G__45351 = cljs.core.next(seq__44732_45339__$1);
var G__45352 = null;
var G__45353 = (0);
var G__45354 = (0);
seq__44732_45322 = G__45351;
chunk__44734_45323 = G__45352;
count__44735_45324 = G__45353;
i__44736_45325 = G__45354;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45321);
}


var G__45355 = seq__44703_45315;
var G__45356 = chunk__44704_45316;
var G__45357 = count__44705_45317;
var G__45358 = (i__44706_45318 + (1));
seq__44703_45315 = G__45355;
chunk__44704_45316 = G__45356;
count__44705_45317 = G__45357;
i__44706_45318 = G__45358;
continue;
} else {
var temp__5804__auto___45359 = cljs.core.seq(seq__44703_45315);
if(temp__5804__auto___45359){
var seq__44703_45360__$1 = temp__5804__auto___45359;
if(cljs.core.chunked_seq_QMARK_(seq__44703_45360__$1)){
var c__5568__auto___45361 = cljs.core.chunk_first(seq__44703_45360__$1);
var G__45362 = cljs.core.chunk_rest(seq__44703_45360__$1);
var G__45363 = c__5568__auto___45361;
var G__45364 = cljs.core.count(c__5568__auto___45361);
var G__45365 = (0);
seq__44703_45315 = G__45362;
chunk__44704_45316 = G__45363;
count__44705_45317 = G__45364;
i__44706_45318 = G__45365;
continue;
} else {
var child_struct_45367 = cljs.core.first(seq__44703_45360__$1);
var children_45368 = shadow.dom.dom_node(child_struct_45367);
if(cljs.core.seq_QMARK_(children_45368)){
var seq__44746_45369 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45368));
var chunk__44748_45370 = null;
var count__44749_45371 = (0);
var i__44750_45372 = (0);
while(true){
if((i__44750_45372 < count__44749_45371)){
var child_45373 = chunk__44748_45370.cljs$core$IIndexed$_nth$arity$2(null,i__44750_45372);
if(cljs.core.truth_(child_45373)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45373);


var G__45374 = seq__44746_45369;
var G__45375 = chunk__44748_45370;
var G__45376 = count__44749_45371;
var G__45377 = (i__44750_45372 + (1));
seq__44746_45369 = G__45374;
chunk__44748_45370 = G__45375;
count__44749_45371 = G__45376;
i__44750_45372 = G__45377;
continue;
} else {
var G__45378 = seq__44746_45369;
var G__45379 = chunk__44748_45370;
var G__45380 = count__44749_45371;
var G__45381 = (i__44750_45372 + (1));
seq__44746_45369 = G__45378;
chunk__44748_45370 = G__45379;
count__44749_45371 = G__45380;
i__44750_45372 = G__45381;
continue;
}
} else {
var temp__5804__auto___45382__$1 = cljs.core.seq(seq__44746_45369);
if(temp__5804__auto___45382__$1){
var seq__44746_45383__$1 = temp__5804__auto___45382__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44746_45383__$1)){
var c__5568__auto___45384 = cljs.core.chunk_first(seq__44746_45383__$1);
var G__45385 = cljs.core.chunk_rest(seq__44746_45383__$1);
var G__45386 = c__5568__auto___45384;
var G__45387 = cljs.core.count(c__5568__auto___45384);
var G__45388 = (0);
seq__44746_45369 = G__45385;
chunk__44748_45370 = G__45386;
count__44749_45371 = G__45387;
i__44750_45372 = G__45388;
continue;
} else {
var child_45389 = cljs.core.first(seq__44746_45383__$1);
if(cljs.core.truth_(child_45389)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45389);


var G__45390 = cljs.core.next(seq__44746_45383__$1);
var G__45391 = null;
var G__45392 = (0);
var G__45393 = (0);
seq__44746_45369 = G__45390;
chunk__44748_45370 = G__45391;
count__44749_45371 = G__45392;
i__44750_45372 = G__45393;
continue;
} else {
var G__45394 = cljs.core.next(seq__44746_45383__$1);
var G__45395 = null;
var G__45396 = (0);
var G__45397 = (0);
seq__44746_45369 = G__45394;
chunk__44748_45370 = G__45395;
count__44749_45371 = G__45396;
i__44750_45372 = G__45397;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45368);
}


var G__45399 = cljs.core.next(seq__44703_45360__$1);
var G__45400 = null;
var G__45401 = (0);
var G__45402 = (0);
seq__44703_45315 = G__45399;
chunk__44704_45316 = G__45400;
count__44705_45317 = G__45401;
i__44706_45318 = G__45402;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44769 = cljs.core.seq(node);
var chunk__44770 = null;
var count__44771 = (0);
var i__44772 = (0);
while(true){
if((i__44772 < count__44771)){
var n = chunk__44770.cljs$core$IIndexed$_nth$arity$2(null,i__44772);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45405 = seq__44769;
var G__45406 = chunk__44770;
var G__45407 = count__44771;
var G__45408 = (i__44772 + (1));
seq__44769 = G__45405;
chunk__44770 = G__45406;
count__44771 = G__45407;
i__44772 = G__45408;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44769);
if(temp__5804__auto__){
var seq__44769__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44769__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44769__$1);
var G__45410 = cljs.core.chunk_rest(seq__44769__$1);
var G__45411 = c__5568__auto__;
var G__45412 = cljs.core.count(c__5568__auto__);
var G__45413 = (0);
seq__44769 = G__45410;
chunk__44770 = G__45411;
count__44771 = G__45412;
i__44772 = G__45413;
continue;
} else {
var n = cljs.core.first(seq__44769__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45414 = cljs.core.next(seq__44769__$1);
var G__45415 = null;
var G__45416 = (0);
var G__45417 = (0);
seq__44769 = G__45414;
chunk__44770 = G__45415;
count__44771 = G__45416;
i__44772 = G__45417;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44786 = arguments.length;
switch (G__44786) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44794 = arguments.length;
switch (G__44794) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44805 = arguments.length;
switch (G__44805) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45426 = arguments.length;
var i__5770__auto___45427 = (0);
while(true){
if((i__5770__auto___45427 < len__5769__auto___45426)){
args__5775__auto__.push((arguments[i__5770__auto___45427]));

var G__45428 = (i__5770__auto___45427 + (1));
i__5770__auto___45427 = G__45428;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44820_45430 = cljs.core.seq(nodes);
var chunk__44821_45431 = null;
var count__44822_45432 = (0);
var i__44823_45433 = (0);
while(true){
if((i__44823_45433 < count__44822_45432)){
var node_45434 = chunk__44821_45431.cljs$core$IIndexed$_nth$arity$2(null,i__44823_45433);
fragment.appendChild(shadow.dom._to_dom(node_45434));


var G__45435 = seq__44820_45430;
var G__45436 = chunk__44821_45431;
var G__45437 = count__44822_45432;
var G__45438 = (i__44823_45433 + (1));
seq__44820_45430 = G__45435;
chunk__44821_45431 = G__45436;
count__44822_45432 = G__45437;
i__44823_45433 = G__45438;
continue;
} else {
var temp__5804__auto___45439 = cljs.core.seq(seq__44820_45430);
if(temp__5804__auto___45439){
var seq__44820_45440__$1 = temp__5804__auto___45439;
if(cljs.core.chunked_seq_QMARK_(seq__44820_45440__$1)){
var c__5568__auto___45441 = cljs.core.chunk_first(seq__44820_45440__$1);
var G__45442 = cljs.core.chunk_rest(seq__44820_45440__$1);
var G__45443 = c__5568__auto___45441;
var G__45444 = cljs.core.count(c__5568__auto___45441);
var G__45445 = (0);
seq__44820_45430 = G__45442;
chunk__44821_45431 = G__45443;
count__44822_45432 = G__45444;
i__44823_45433 = G__45445;
continue;
} else {
var node_45446 = cljs.core.first(seq__44820_45440__$1);
fragment.appendChild(shadow.dom._to_dom(node_45446));


var G__45447 = cljs.core.next(seq__44820_45440__$1);
var G__45448 = null;
var G__45449 = (0);
var G__45450 = (0);
seq__44820_45430 = G__45447;
chunk__44821_45431 = G__45448;
count__44822_45432 = G__45449;
i__44823_45433 = G__45450;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44816){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44816));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44828_45453 = cljs.core.seq(scripts);
var chunk__44829_45454 = null;
var count__44830_45455 = (0);
var i__44831_45456 = (0);
while(true){
if((i__44831_45456 < count__44830_45455)){
var vec__44839_45457 = chunk__44829_45454.cljs$core$IIndexed$_nth$arity$2(null,i__44831_45456);
var script_tag_45458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839_45457,(0),null);
var script_body_45459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839_45457,(1),null);
eval(script_body_45459);


var G__45460 = seq__44828_45453;
var G__45461 = chunk__44829_45454;
var G__45462 = count__44830_45455;
var G__45463 = (i__44831_45456 + (1));
seq__44828_45453 = G__45460;
chunk__44829_45454 = G__45461;
count__44830_45455 = G__45462;
i__44831_45456 = G__45463;
continue;
} else {
var temp__5804__auto___45464 = cljs.core.seq(seq__44828_45453);
if(temp__5804__auto___45464){
var seq__44828_45465__$1 = temp__5804__auto___45464;
if(cljs.core.chunked_seq_QMARK_(seq__44828_45465__$1)){
var c__5568__auto___45466 = cljs.core.chunk_first(seq__44828_45465__$1);
var G__45467 = cljs.core.chunk_rest(seq__44828_45465__$1);
var G__45468 = c__5568__auto___45466;
var G__45469 = cljs.core.count(c__5568__auto___45466);
var G__45470 = (0);
seq__44828_45453 = G__45467;
chunk__44829_45454 = G__45468;
count__44830_45455 = G__45469;
i__44831_45456 = G__45470;
continue;
} else {
var vec__44842_45471 = cljs.core.first(seq__44828_45465__$1);
var script_tag_45472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44842_45471,(0),null);
var script_body_45473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44842_45471,(1),null);
eval(script_body_45473);


var G__45474 = cljs.core.next(seq__44828_45465__$1);
var G__45475 = null;
var G__45476 = (0);
var G__45477 = (0);
seq__44828_45453 = G__45474;
chunk__44829_45454 = G__45475;
count__44830_45455 = G__45476;
i__44831_45456 = G__45477;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44846){
var vec__44847 = p__44846;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__44854 = arguments.length;
switch (G__44854) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__44865 = cljs.core.seq(style_keys);
var chunk__44866 = null;
var count__44867 = (0);
var i__44868 = (0);
while(true){
if((i__44868 < count__44867)){
var it = chunk__44866.cljs$core$IIndexed$_nth$arity$2(null,i__44868);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45483 = seq__44865;
var G__45484 = chunk__44866;
var G__45485 = count__44867;
var G__45486 = (i__44868 + (1));
seq__44865 = G__45483;
chunk__44866 = G__45484;
count__44867 = G__45485;
i__44868 = G__45486;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44865);
if(temp__5804__auto__){
var seq__44865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44865__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44865__$1);
var G__45487 = cljs.core.chunk_rest(seq__44865__$1);
var G__45488 = c__5568__auto__;
var G__45489 = cljs.core.count(c__5568__auto__);
var G__45490 = (0);
seq__44865 = G__45487;
chunk__44866 = G__45488;
count__44867 = G__45489;
i__44868 = G__45490;
continue;
} else {
var it = cljs.core.first(seq__44865__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45491 = cljs.core.next(seq__44865__$1);
var G__45492 = null;
var G__45493 = (0);
var G__45494 = (0);
seq__44865 = G__45491;
chunk__44866 = G__45492;
count__44867 = G__45493;
i__44868 = G__45494;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k44877,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__44888 = k44877;
var G__44888__$1 = (((G__44888 instanceof cljs.core.Keyword))?G__44888.fqn:null);
switch (G__44888__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44877,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__44890){
var vec__44891 = p__44890;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44891,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44891,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44876){
var self__ = this;
var G__44876__$1 = this;
return (new cljs.core.RecordIter((0),G__44876__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44878,other44879){
var self__ = this;
var this44878__$1 = this;
return (((!((other44879 == null)))) && ((((this44878__$1.constructor === other44879.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44878__$1.x,other44879.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44878__$1.y,other44879.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44878__$1.__extmap,other44879.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k44877){
var self__ = this;
var this__5350__auto____$1 = this;
var G__44904 = k44877;
var G__44904__$1 = (((G__44904 instanceof cljs.core.Keyword))?G__44904.fqn:null);
switch (G__44904__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44877);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__44876){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__44908 = cljs.core.keyword_identical_QMARK_;
var expr__44909 = k__5352__auto__;
if(cljs.core.truth_((pred__44908.cljs$core$IFn$_invoke$arity$2 ? pred__44908.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44909) : pred__44908.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44909)))){
return (new shadow.dom.Coordinate(G__44876,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44908.cljs$core$IFn$_invoke$arity$2 ? pred__44908.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44909) : pred__44908.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44909)))){
return (new shadow.dom.Coordinate(self__.x,G__44876,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__44876),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__44876){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44876,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44883){
var extmap__5385__auto__ = (function (){var G__44916 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44883,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44883)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44916);
} else {
return G__44916;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44883),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44883),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k44926,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__44934 = k44926;
var G__44934__$1 = (((G__44934 instanceof cljs.core.Keyword))?G__44934.fqn:null);
switch (G__44934__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44926,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__44936){
var vec__44937 = p__44936;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44937,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44937,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44925){
var self__ = this;
var G__44925__$1 = this;
return (new cljs.core.RecordIter((0),G__44925__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44927,other44928){
var self__ = this;
var this44927__$1 = this;
return (((!((other44928 == null)))) && ((((this44927__$1.constructor === other44928.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44927__$1.w,other44928.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44927__$1.h,other44928.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44927__$1.__extmap,other44928.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k44926){
var self__ = this;
var this__5350__auto____$1 = this;
var G__44947 = k44926;
var G__44947__$1 = (((G__44947 instanceof cljs.core.Keyword))?G__44947.fqn:null);
switch (G__44947__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44926);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__44925){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__44950 = cljs.core.keyword_identical_QMARK_;
var expr__44951 = k__5352__auto__;
if(cljs.core.truth_((pred__44950.cljs$core$IFn$_invoke$arity$2 ? pred__44950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44951) : pred__44950.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44951)))){
return (new shadow.dom.Size(G__44925,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44950.cljs$core$IFn$_invoke$arity$2 ? pred__44950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44951) : pred__44950.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44951)))){
return (new shadow.dom.Size(self__.w,G__44925,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__44925),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__44925){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44925,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44932){
var extmap__5385__auto__ = (function (){var G__44957 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44932,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44932)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44957);
} else {
return G__44957;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44932),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44932),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__45514 = (i + (1));
var G__45515 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45514;
ret = G__45515;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44978){
var vec__44979 = p__44978;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44979,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44979,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44987 = arguments.length;
switch (G__44987) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45519 = ps;
var G__45520 = (i + (1));
el__$1 = G__45519;
i = G__45520;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45005 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45005,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45005,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45005,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45013_45525 = cljs.core.seq(props);
var chunk__45014_45526 = null;
var count__45015_45527 = (0);
var i__45016_45528 = (0);
while(true){
if((i__45016_45528 < count__45015_45527)){
var vec__45024_45529 = chunk__45014_45526.cljs$core$IIndexed$_nth$arity$2(null,i__45016_45528);
var k_45530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45024_45529,(0),null);
var v_45531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45024_45529,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_45530);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45530),v_45531);


var G__45533 = seq__45013_45525;
var G__45534 = chunk__45014_45526;
var G__45535 = count__45015_45527;
var G__45536 = (i__45016_45528 + (1));
seq__45013_45525 = G__45533;
chunk__45014_45526 = G__45534;
count__45015_45527 = G__45535;
i__45016_45528 = G__45536;
continue;
} else {
var temp__5804__auto___45537 = cljs.core.seq(seq__45013_45525);
if(temp__5804__auto___45537){
var seq__45013_45538__$1 = temp__5804__auto___45537;
if(cljs.core.chunked_seq_QMARK_(seq__45013_45538__$1)){
var c__5568__auto___45539 = cljs.core.chunk_first(seq__45013_45538__$1);
var G__45540 = cljs.core.chunk_rest(seq__45013_45538__$1);
var G__45541 = c__5568__auto___45539;
var G__45542 = cljs.core.count(c__5568__auto___45539);
var G__45543 = (0);
seq__45013_45525 = G__45540;
chunk__45014_45526 = G__45541;
count__45015_45527 = G__45542;
i__45016_45528 = G__45543;
continue;
} else {
var vec__45031_45544 = cljs.core.first(seq__45013_45538__$1);
var k_45545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45031_45544,(0),null);
var v_45546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45031_45544,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_45545);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45545),v_45546);


var G__45548 = cljs.core.next(seq__45013_45538__$1);
var G__45549 = null;
var G__45550 = (0);
var G__45551 = (0);
seq__45013_45525 = G__45548;
chunk__45014_45526 = G__45549;
count__45015_45527 = G__45550;
i__45016_45528 = G__45551;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45046 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45046,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45046,(1),null);
var seq__45049_45555 = cljs.core.seq(node_children);
var chunk__45051_45556 = null;
var count__45052_45557 = (0);
var i__45053_45558 = (0);
while(true){
if((i__45053_45558 < count__45052_45557)){
var child_struct_45559 = chunk__45051_45556.cljs$core$IIndexed$_nth$arity$2(null,i__45053_45558);
if((!((child_struct_45559 == null)))){
if(typeof child_struct_45559 === 'string'){
var text_45561 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45561),child_struct_45559].join(''));
} else {
var children_45562 = shadow.dom.svg_node(child_struct_45559);
if(cljs.core.seq_QMARK_(children_45562)){
var seq__45087_45564 = cljs.core.seq(children_45562);
var chunk__45089_45565 = null;
var count__45090_45566 = (0);
var i__45091_45567 = (0);
while(true){
if((i__45091_45567 < count__45090_45566)){
var child_45570 = chunk__45089_45565.cljs$core$IIndexed$_nth$arity$2(null,i__45091_45567);
if(cljs.core.truth_(child_45570)){
node.appendChild(child_45570);


var G__45571 = seq__45087_45564;
var G__45572 = chunk__45089_45565;
var G__45573 = count__45090_45566;
var G__45574 = (i__45091_45567 + (1));
seq__45087_45564 = G__45571;
chunk__45089_45565 = G__45572;
count__45090_45566 = G__45573;
i__45091_45567 = G__45574;
continue;
} else {
var G__45575 = seq__45087_45564;
var G__45576 = chunk__45089_45565;
var G__45577 = count__45090_45566;
var G__45578 = (i__45091_45567 + (1));
seq__45087_45564 = G__45575;
chunk__45089_45565 = G__45576;
count__45090_45566 = G__45577;
i__45091_45567 = G__45578;
continue;
}
} else {
var temp__5804__auto___45579 = cljs.core.seq(seq__45087_45564);
if(temp__5804__auto___45579){
var seq__45087_45580__$1 = temp__5804__auto___45579;
if(cljs.core.chunked_seq_QMARK_(seq__45087_45580__$1)){
var c__5568__auto___45581 = cljs.core.chunk_first(seq__45087_45580__$1);
var G__45582 = cljs.core.chunk_rest(seq__45087_45580__$1);
var G__45583 = c__5568__auto___45581;
var G__45584 = cljs.core.count(c__5568__auto___45581);
var G__45585 = (0);
seq__45087_45564 = G__45582;
chunk__45089_45565 = G__45583;
count__45090_45566 = G__45584;
i__45091_45567 = G__45585;
continue;
} else {
var child_45586 = cljs.core.first(seq__45087_45580__$1);
if(cljs.core.truth_(child_45586)){
node.appendChild(child_45586);


var G__45587 = cljs.core.next(seq__45087_45580__$1);
var G__45588 = null;
var G__45589 = (0);
var G__45590 = (0);
seq__45087_45564 = G__45587;
chunk__45089_45565 = G__45588;
count__45090_45566 = G__45589;
i__45091_45567 = G__45590;
continue;
} else {
var G__45592 = cljs.core.next(seq__45087_45580__$1);
var G__45593 = null;
var G__45594 = (0);
var G__45595 = (0);
seq__45087_45564 = G__45592;
chunk__45089_45565 = G__45593;
count__45090_45566 = G__45594;
i__45091_45567 = G__45595;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45562);
}
}


var G__45596 = seq__45049_45555;
var G__45597 = chunk__45051_45556;
var G__45598 = count__45052_45557;
var G__45599 = (i__45053_45558 + (1));
seq__45049_45555 = G__45596;
chunk__45051_45556 = G__45597;
count__45052_45557 = G__45598;
i__45053_45558 = G__45599;
continue;
} else {
var G__45600 = seq__45049_45555;
var G__45601 = chunk__45051_45556;
var G__45602 = count__45052_45557;
var G__45603 = (i__45053_45558 + (1));
seq__45049_45555 = G__45600;
chunk__45051_45556 = G__45601;
count__45052_45557 = G__45602;
i__45053_45558 = G__45603;
continue;
}
} else {
var temp__5804__auto___45604 = cljs.core.seq(seq__45049_45555);
if(temp__5804__auto___45604){
var seq__45049_45607__$1 = temp__5804__auto___45604;
if(cljs.core.chunked_seq_QMARK_(seq__45049_45607__$1)){
var c__5568__auto___45608 = cljs.core.chunk_first(seq__45049_45607__$1);
var G__45609 = cljs.core.chunk_rest(seq__45049_45607__$1);
var G__45610 = c__5568__auto___45608;
var G__45611 = cljs.core.count(c__5568__auto___45608);
var G__45612 = (0);
seq__45049_45555 = G__45609;
chunk__45051_45556 = G__45610;
count__45052_45557 = G__45611;
i__45053_45558 = G__45612;
continue;
} else {
var child_struct_45613 = cljs.core.first(seq__45049_45607__$1);
if((!((child_struct_45613 == null)))){
if(typeof child_struct_45613 === 'string'){
var text_45616 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45616),child_struct_45613].join(''));
} else {
var children_45619 = shadow.dom.svg_node(child_struct_45613);
if(cljs.core.seq_QMARK_(children_45619)){
var seq__45102_45620 = cljs.core.seq(children_45619);
var chunk__45104_45621 = null;
var count__45105_45622 = (0);
var i__45106_45623 = (0);
while(true){
if((i__45106_45623 < count__45105_45622)){
var child_45626 = chunk__45104_45621.cljs$core$IIndexed$_nth$arity$2(null,i__45106_45623);
if(cljs.core.truth_(child_45626)){
node.appendChild(child_45626);


var G__45627 = seq__45102_45620;
var G__45628 = chunk__45104_45621;
var G__45629 = count__45105_45622;
var G__45630 = (i__45106_45623 + (1));
seq__45102_45620 = G__45627;
chunk__45104_45621 = G__45628;
count__45105_45622 = G__45629;
i__45106_45623 = G__45630;
continue;
} else {
var G__45632 = seq__45102_45620;
var G__45633 = chunk__45104_45621;
var G__45634 = count__45105_45622;
var G__45635 = (i__45106_45623 + (1));
seq__45102_45620 = G__45632;
chunk__45104_45621 = G__45633;
count__45105_45622 = G__45634;
i__45106_45623 = G__45635;
continue;
}
} else {
var temp__5804__auto___45637__$1 = cljs.core.seq(seq__45102_45620);
if(temp__5804__auto___45637__$1){
var seq__45102_45639__$1 = temp__5804__auto___45637__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45102_45639__$1)){
var c__5568__auto___45640 = cljs.core.chunk_first(seq__45102_45639__$1);
var G__45641 = cljs.core.chunk_rest(seq__45102_45639__$1);
var G__45642 = c__5568__auto___45640;
var G__45643 = cljs.core.count(c__5568__auto___45640);
var G__45644 = (0);
seq__45102_45620 = G__45641;
chunk__45104_45621 = G__45642;
count__45105_45622 = G__45643;
i__45106_45623 = G__45644;
continue;
} else {
var child_45645 = cljs.core.first(seq__45102_45639__$1);
if(cljs.core.truth_(child_45645)){
node.appendChild(child_45645);


var G__45647 = cljs.core.next(seq__45102_45639__$1);
var G__45648 = null;
var G__45649 = (0);
var G__45650 = (0);
seq__45102_45620 = G__45647;
chunk__45104_45621 = G__45648;
count__45105_45622 = G__45649;
i__45106_45623 = G__45650;
continue;
} else {
var G__45651 = cljs.core.next(seq__45102_45639__$1);
var G__45652 = null;
var G__45653 = (0);
var G__45654 = (0);
seq__45102_45620 = G__45651;
chunk__45104_45621 = G__45652;
count__45105_45622 = G__45653;
i__45106_45623 = G__45654;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45619);
}
}


var G__45655 = cljs.core.next(seq__45049_45607__$1);
var G__45656 = null;
var G__45657 = (0);
var G__45658 = (0);
seq__45049_45555 = G__45655;
chunk__45051_45556 = G__45656;
count__45052_45557 = G__45657;
i__45053_45558 = G__45658;
continue;
} else {
var G__45659 = cljs.core.next(seq__45049_45607__$1);
var G__45660 = null;
var G__45661 = (0);
var G__45662 = (0);
seq__45049_45555 = G__45659;
chunk__45051_45556 = G__45660;
count__45052_45557 = G__45661;
i__45053_45558 = G__45662;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45670 = arguments.length;
var i__5770__auto___45671 = (0);
while(true){
if((i__5770__auto___45671 < len__5769__auto___45670)){
args__5775__auto__.push((arguments[i__5770__auto___45671]));

var G__45672 = (i__5770__auto___45671 + (1));
i__5770__auto___45671 = G__45672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45129){
var G__45130 = cljs.core.first(seq45129);
var seq45129__$1 = cljs.core.next(seq45129);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45130,seq45129__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45135 = arguments.length;
switch (G__45135) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__37628__auto___45679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_45148){
var state_val_45149 = (state_45148[(1)]);
if((state_val_45149 === (1))){
var state_45148__$1 = state_45148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45148__$1,(2),once_or_cleanup);
} else {
if((state_val_45149 === (2))){
var inst_45145 = (state_45148[(2)]);
var inst_45146 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45148__$1 = (function (){var statearr_45157 = state_45148;
(statearr_45157[(7)] = inst_45145);

return statearr_45157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45148__$1,inst_45146);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37251__auto__ = null;
var shadow$dom$state_machine__37251__auto____0 = (function (){
var statearr_45159 = [null,null,null,null,null,null,null,null];
(statearr_45159[(0)] = shadow$dom$state_machine__37251__auto__);

(statearr_45159[(1)] = (1));

return statearr_45159;
});
var shadow$dom$state_machine__37251__auto____1 = (function (state_45148){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_45148);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e45164){var ex__37254__auto__ = e45164;
var statearr_45165_45680 = state_45148;
(statearr_45165_45680[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_45148[(4)]))){
var statearr_45166_45681 = state_45148;
(statearr_45166_45681[(1)] = cljs.core.first((state_45148[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45683 = state_45148;
state_45148 = G__45683;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
shadow$dom$state_machine__37251__auto__ = function(state_45148){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37251__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37251__auto____1.call(this,state_45148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37251__auto____0;
shadow$dom$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37251__auto____1;
return shadow$dom$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_45169 = f__37629__auto__();
(statearr_45169[(6)] = c__37628__auto___45679);

return statearr_45169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
