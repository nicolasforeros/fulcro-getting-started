goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48113 = arguments.length;
var i__5770__auto___48114 = (0);
while(true){
if((i__5770__auto___48114 < len__5769__auto___48113)){
args__5775__auto__.push((arguments[i__5770__auto___48114]));

var G__48115 = (i__5770__auto___48114 + (1));
i__5770__auto___48114 = G__48115;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47529){
var G__47530 = cljs.core.first(seq47529);
var seq47529__$1 = cljs.core.next(seq47529);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47530,seq47529__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47542 = cljs.core.seq(sources);
var chunk__47543 = null;
var count__47544 = (0);
var i__47545 = (0);
while(true){
if((i__47545 < count__47544)){
var map__47556 = chunk__47543.cljs$core$IIndexed$_nth$arity$2(null,i__47545);
var map__47556__$1 = cljs.core.__destructure_map(map__47556);
var src = map__47556__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47556__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47556__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47556__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47556__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47558){var e_48118 = e47558;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48118);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48118.message)].join('')));
}

var G__48119 = seq__47542;
var G__48120 = chunk__47543;
var G__48121 = count__47544;
var G__48122 = (i__47545 + (1));
seq__47542 = G__48119;
chunk__47543 = G__48120;
count__47544 = G__48121;
i__47545 = G__48122;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47542);
if(temp__5804__auto__){
var seq__47542__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47542__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47542__$1);
var G__48123 = cljs.core.chunk_rest(seq__47542__$1);
var G__48124 = c__5568__auto__;
var G__48125 = cljs.core.count(c__5568__auto__);
var G__48126 = (0);
seq__47542 = G__48123;
chunk__47543 = G__48124;
count__47544 = G__48125;
i__47545 = G__48126;
continue;
} else {
var map__47560 = cljs.core.first(seq__47542__$1);
var map__47560__$1 = cljs.core.__destructure_map(map__47560);
var src = map__47560__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47560__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47560__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47560__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47560__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47561){var e_48127 = e47561;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48127);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48127.message)].join('')));
}

var G__48128 = cljs.core.next(seq__47542__$1);
var G__48129 = null;
var G__48130 = (0);
var G__48131 = (0);
seq__47542 = G__48128;
chunk__47543 = G__48129;
count__47544 = G__48130;
i__47545 = G__48131;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47571 = cljs.core.seq(js_requires);
var chunk__47572 = null;
var count__47573 = (0);
var i__47574 = (0);
while(true){
if((i__47574 < count__47573)){
var js_ns = chunk__47572.cljs$core$IIndexed$_nth$arity$2(null,i__47574);
var require_str_48148 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48148);


var G__48149 = seq__47571;
var G__48150 = chunk__47572;
var G__48151 = count__47573;
var G__48152 = (i__47574 + (1));
seq__47571 = G__48149;
chunk__47572 = G__48150;
count__47573 = G__48151;
i__47574 = G__48152;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47571);
if(temp__5804__auto__){
var seq__47571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47571__$1);
var G__48153 = cljs.core.chunk_rest(seq__47571__$1);
var G__48154 = c__5568__auto__;
var G__48155 = cljs.core.count(c__5568__auto__);
var G__48156 = (0);
seq__47571 = G__48153;
chunk__47572 = G__48154;
count__47573 = G__48155;
i__47574 = G__48156;
continue;
} else {
var js_ns = cljs.core.first(seq__47571__$1);
var require_str_48157 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48157);


var G__48159 = cljs.core.next(seq__47571__$1);
var G__48160 = null;
var G__48161 = (0);
var G__48162 = (0);
seq__47571 = G__48159;
chunk__47572 = G__48160;
count__47573 = G__48161;
i__47574 = G__48162;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47578){
var map__47579 = p__47578;
var map__47579__$1 = cljs.core.__destructure_map(map__47579);
var msg = map__47579__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47579__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47579__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47580(s__47581){
return (new cljs.core.LazySeq(null,(function (){
var s__47581__$1 = s__47581;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47581__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__47589 = cljs.core.first(xs__6360__auto__);
var map__47589__$1 = cljs.core.__destructure_map(map__47589);
var src = map__47589__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47589__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47589__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__47581__$1,map__47589,map__47589__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47579,map__47579__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47580_$_iter__47582(s__47583){
return (new cljs.core.LazySeq(null,((function (s__47581__$1,map__47589,map__47589__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47579,map__47579__$1,msg,info,reload_info){
return (function (){
var s__47583__$1 = s__47583;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47583__$1);
if(temp__5804__auto____$1){
var s__47583__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47583__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47583__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47585 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47584 = (0);
while(true){
if((i__47584 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__47584);
cljs.core.chunk_append(b__47585,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48166 = (i__47584 + (1));
i__47584 = G__48166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47585),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47580_$_iter__47582(cljs.core.chunk_rest(s__47583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47585),null);
}
} else {
var warning = cljs.core.first(s__47583__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47580_$_iter__47582(cljs.core.rest(s__47583__$2)));
}
} else {
return null;
}
break;
}
});})(s__47581__$1,map__47589,map__47589__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47579,map__47579__$1,msg,info,reload_info))
,null,null));
});})(s__47581__$1,map__47589,map__47589__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47579,map__47579__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47580(cljs.core.rest(s__47581__$1)));
} else {
var G__48167 = cljs.core.rest(s__47581__$1);
s__47581__$1 = G__48167;
continue;
}
} else {
var G__48168 = cljs.core.rest(s__47581__$1);
s__47581__$1 = G__48168;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47597_48169 = cljs.core.seq(warnings);
var chunk__47598_48170 = null;
var count__47601_48171 = (0);
var i__47603_48172 = (0);
while(true){
if((i__47603_48172 < count__47601_48171)){
var map__47609_48173 = chunk__47598_48170.cljs$core$IIndexed$_nth$arity$2(null,i__47603_48172);
var map__47609_48174__$1 = cljs.core.__destructure_map(map__47609_48173);
var w_48175 = map__47609_48174__$1;
var msg_48176__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47609_48174__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47609_48174__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47609_48174__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47609_48174__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48179)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48177),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48178),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48176__$1)].join(''));


var G__48180 = seq__47597_48169;
var G__48181 = chunk__47598_48170;
var G__48182 = count__47601_48171;
var G__48183 = (i__47603_48172 + (1));
seq__47597_48169 = G__48180;
chunk__47598_48170 = G__48181;
count__47601_48171 = G__48182;
i__47603_48172 = G__48183;
continue;
} else {
var temp__5804__auto___48184 = cljs.core.seq(seq__47597_48169);
if(temp__5804__auto___48184){
var seq__47597_48185__$1 = temp__5804__auto___48184;
if(cljs.core.chunked_seq_QMARK_(seq__47597_48185__$1)){
var c__5568__auto___48186 = cljs.core.chunk_first(seq__47597_48185__$1);
var G__48188 = cljs.core.chunk_rest(seq__47597_48185__$1);
var G__48189 = c__5568__auto___48186;
var G__48190 = cljs.core.count(c__5568__auto___48186);
var G__48191 = (0);
seq__47597_48169 = G__48188;
chunk__47598_48170 = G__48189;
count__47601_48171 = G__48190;
i__47603_48172 = G__48191;
continue;
} else {
var map__47611_48193 = cljs.core.first(seq__47597_48185__$1);
var map__47611_48194__$1 = cljs.core.__destructure_map(map__47611_48193);
var w_48195 = map__47611_48194__$1;
var msg_48196__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47611_48194__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47611_48194__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47611_48194__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47611_48194__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48199)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48197),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48198),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48196__$1)].join(''));


var G__48203 = cljs.core.next(seq__47597_48185__$1);
var G__48204 = null;
var G__48205 = (0);
var G__48206 = (0);
seq__47597_48169 = G__48203;
chunk__47598_48170 = G__48204;
count__47601_48171 = G__48205;
i__47603_48172 = G__48206;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47577_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47577_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47632){
var map__47633 = p__47632;
var map__47633__$1 = cljs.core.__destructure_map(map__47633);
var msg = map__47633__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47633__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47633__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47636 = cljs.core.seq(updates);
var chunk__47638 = null;
var count__47639 = (0);
var i__47640 = (0);
while(true){
if((i__47640 < count__47639)){
var path = chunk__47638.cljs$core$IIndexed$_nth$arity$2(null,i__47640);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47843_48212 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47847_48213 = null;
var count__47848_48214 = (0);
var i__47849_48215 = (0);
while(true){
if((i__47849_48215 < count__47848_48214)){
var node_48216 = chunk__47847_48213.cljs$core$IIndexed$_nth$arity$2(null,i__47849_48215);
if(cljs.core.not(node_48216.shadow$old)){
var path_match_48219 = shadow.cljs.devtools.client.browser.match_paths(node_48216.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48219)){
var new_link_48223 = (function (){var G__47890 = node_48216.cloneNode(true);
G__47890.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48219),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47890;
})();
(node_48216.shadow$old = true);

(new_link_48223.onload = ((function (seq__47843_48212,chunk__47847_48213,count__47848_48214,i__47849_48215,seq__47636,chunk__47638,count__47639,i__47640,new_link_48223,path_match_48219,node_48216,path,map__47633,map__47633__$1,msg,updates,reload_info){
return (function (e){
var seq__47891_48224 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47893_48225 = null;
var count__47894_48226 = (0);
var i__47895_48227 = (0);
while(true){
if((i__47895_48227 < count__47894_48226)){
var map__47901_48229 = chunk__47893_48225.cljs$core$IIndexed$_nth$arity$2(null,i__47895_48227);
var map__47901_48230__$1 = cljs.core.__destructure_map(map__47901_48229);
var task_48231 = map__47901_48230__$1;
var fn_str_48232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47901_48230__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47901_48230__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48237 = goog.getObjectByName(fn_str_48232,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48233)].join(''));

(fn_obj_48237.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48237.cljs$core$IFn$_invoke$arity$2(path,new_link_48223) : fn_obj_48237.call(null,path,new_link_48223));


var G__48238 = seq__47891_48224;
var G__48239 = chunk__47893_48225;
var G__48240 = count__47894_48226;
var G__48241 = (i__47895_48227 + (1));
seq__47891_48224 = G__48238;
chunk__47893_48225 = G__48239;
count__47894_48226 = G__48240;
i__47895_48227 = G__48241;
continue;
} else {
var temp__5804__auto___48242 = cljs.core.seq(seq__47891_48224);
if(temp__5804__auto___48242){
var seq__47891_48243__$1 = temp__5804__auto___48242;
if(cljs.core.chunked_seq_QMARK_(seq__47891_48243__$1)){
var c__5568__auto___48245 = cljs.core.chunk_first(seq__47891_48243__$1);
var G__48247 = cljs.core.chunk_rest(seq__47891_48243__$1);
var G__48248 = c__5568__auto___48245;
var G__48249 = cljs.core.count(c__5568__auto___48245);
var G__48250 = (0);
seq__47891_48224 = G__48247;
chunk__47893_48225 = G__48248;
count__47894_48226 = G__48249;
i__47895_48227 = G__48250;
continue;
} else {
var map__47903_48251 = cljs.core.first(seq__47891_48243__$1);
var map__47903_48252__$1 = cljs.core.__destructure_map(map__47903_48251);
var task_48253 = map__47903_48252__$1;
var fn_str_48254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47903_48252__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47903_48252__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48256 = goog.getObjectByName(fn_str_48254,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48255)].join(''));

(fn_obj_48256.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48256.cljs$core$IFn$_invoke$arity$2(path,new_link_48223) : fn_obj_48256.call(null,path,new_link_48223));


var G__48257 = cljs.core.next(seq__47891_48243__$1);
var G__48258 = null;
var G__48259 = (0);
var G__48260 = (0);
seq__47891_48224 = G__48257;
chunk__47893_48225 = G__48258;
count__47894_48226 = G__48259;
i__47895_48227 = G__48260;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48216);
});})(seq__47843_48212,chunk__47847_48213,count__47848_48214,i__47849_48215,seq__47636,chunk__47638,count__47639,i__47640,new_link_48223,path_match_48219,node_48216,path,map__47633,map__47633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48219], 0));

goog.dom.insertSiblingAfter(new_link_48223,node_48216);


var G__48261 = seq__47843_48212;
var G__48262 = chunk__47847_48213;
var G__48263 = count__47848_48214;
var G__48264 = (i__47849_48215 + (1));
seq__47843_48212 = G__48261;
chunk__47847_48213 = G__48262;
count__47848_48214 = G__48263;
i__47849_48215 = G__48264;
continue;
} else {
var G__48265 = seq__47843_48212;
var G__48266 = chunk__47847_48213;
var G__48267 = count__47848_48214;
var G__48268 = (i__47849_48215 + (1));
seq__47843_48212 = G__48265;
chunk__47847_48213 = G__48266;
count__47848_48214 = G__48267;
i__47849_48215 = G__48268;
continue;
}
} else {
var G__48269 = seq__47843_48212;
var G__48270 = chunk__47847_48213;
var G__48271 = count__47848_48214;
var G__48272 = (i__47849_48215 + (1));
seq__47843_48212 = G__48269;
chunk__47847_48213 = G__48270;
count__47848_48214 = G__48271;
i__47849_48215 = G__48272;
continue;
}
} else {
var temp__5804__auto___48273 = cljs.core.seq(seq__47843_48212);
if(temp__5804__auto___48273){
var seq__47843_48274__$1 = temp__5804__auto___48273;
if(cljs.core.chunked_seq_QMARK_(seq__47843_48274__$1)){
var c__5568__auto___48275 = cljs.core.chunk_first(seq__47843_48274__$1);
var G__48276 = cljs.core.chunk_rest(seq__47843_48274__$1);
var G__48277 = c__5568__auto___48275;
var G__48278 = cljs.core.count(c__5568__auto___48275);
var G__48279 = (0);
seq__47843_48212 = G__48276;
chunk__47847_48213 = G__48277;
count__47848_48214 = G__48278;
i__47849_48215 = G__48279;
continue;
} else {
var node_48280 = cljs.core.first(seq__47843_48274__$1);
if(cljs.core.not(node_48280.shadow$old)){
var path_match_48281 = shadow.cljs.devtools.client.browser.match_paths(node_48280.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48281)){
var new_link_48284 = (function (){var G__47906 = node_48280.cloneNode(true);
G__47906.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48281),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47906;
})();
(node_48280.shadow$old = true);

(new_link_48284.onload = ((function (seq__47843_48212,chunk__47847_48213,count__47848_48214,i__47849_48215,seq__47636,chunk__47638,count__47639,i__47640,new_link_48284,path_match_48281,node_48280,seq__47843_48274__$1,temp__5804__auto___48273,path,map__47633,map__47633__$1,msg,updates,reload_info){
return (function (e){
var seq__47907_48288 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47909_48289 = null;
var count__47910_48290 = (0);
var i__47911_48291 = (0);
while(true){
if((i__47911_48291 < count__47910_48290)){
var map__47928_48292 = chunk__47909_48289.cljs$core$IIndexed$_nth$arity$2(null,i__47911_48291);
var map__47928_48293__$1 = cljs.core.__destructure_map(map__47928_48292);
var task_48294 = map__47928_48293__$1;
var fn_str_48295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47928_48293__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47928_48293__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48297 = goog.getObjectByName(fn_str_48295,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48296)].join(''));

(fn_obj_48297.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48297.cljs$core$IFn$_invoke$arity$2(path,new_link_48284) : fn_obj_48297.call(null,path,new_link_48284));


var G__48299 = seq__47907_48288;
var G__48300 = chunk__47909_48289;
var G__48301 = count__47910_48290;
var G__48302 = (i__47911_48291 + (1));
seq__47907_48288 = G__48299;
chunk__47909_48289 = G__48300;
count__47910_48290 = G__48301;
i__47911_48291 = G__48302;
continue;
} else {
var temp__5804__auto___48304__$1 = cljs.core.seq(seq__47907_48288);
if(temp__5804__auto___48304__$1){
var seq__47907_48307__$1 = temp__5804__auto___48304__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47907_48307__$1)){
var c__5568__auto___48308 = cljs.core.chunk_first(seq__47907_48307__$1);
var G__48309 = cljs.core.chunk_rest(seq__47907_48307__$1);
var G__48310 = c__5568__auto___48308;
var G__48311 = cljs.core.count(c__5568__auto___48308);
var G__48312 = (0);
seq__47907_48288 = G__48309;
chunk__47909_48289 = G__48310;
count__47910_48290 = G__48311;
i__47911_48291 = G__48312;
continue;
} else {
var map__47937_48313 = cljs.core.first(seq__47907_48307__$1);
var map__47937_48314__$1 = cljs.core.__destructure_map(map__47937_48313);
var task_48315 = map__47937_48314__$1;
var fn_str_48316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47937_48314__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47937_48314__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48319 = goog.getObjectByName(fn_str_48316,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48317)].join(''));

(fn_obj_48319.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48319.cljs$core$IFn$_invoke$arity$2(path,new_link_48284) : fn_obj_48319.call(null,path,new_link_48284));


var G__48320 = cljs.core.next(seq__47907_48307__$1);
var G__48321 = null;
var G__48322 = (0);
var G__48323 = (0);
seq__47907_48288 = G__48320;
chunk__47909_48289 = G__48321;
count__47910_48290 = G__48322;
i__47911_48291 = G__48323;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48280);
});})(seq__47843_48212,chunk__47847_48213,count__47848_48214,i__47849_48215,seq__47636,chunk__47638,count__47639,i__47640,new_link_48284,path_match_48281,node_48280,seq__47843_48274__$1,temp__5804__auto___48273,path,map__47633,map__47633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48281], 0));

goog.dom.insertSiblingAfter(new_link_48284,node_48280);


var G__48324 = cljs.core.next(seq__47843_48274__$1);
var G__48325 = null;
var G__48326 = (0);
var G__48327 = (0);
seq__47843_48212 = G__48324;
chunk__47847_48213 = G__48325;
count__47848_48214 = G__48326;
i__47849_48215 = G__48327;
continue;
} else {
var G__48328 = cljs.core.next(seq__47843_48274__$1);
var G__48329 = null;
var G__48330 = (0);
var G__48331 = (0);
seq__47843_48212 = G__48328;
chunk__47847_48213 = G__48329;
count__47848_48214 = G__48330;
i__47849_48215 = G__48331;
continue;
}
} else {
var G__48332 = cljs.core.next(seq__47843_48274__$1);
var G__48333 = null;
var G__48334 = (0);
var G__48335 = (0);
seq__47843_48212 = G__48332;
chunk__47847_48213 = G__48333;
count__47848_48214 = G__48334;
i__47849_48215 = G__48335;
continue;
}
}
} else {
}
}
break;
}


var G__48336 = seq__47636;
var G__48337 = chunk__47638;
var G__48338 = count__47639;
var G__48339 = (i__47640 + (1));
seq__47636 = G__48336;
chunk__47638 = G__48337;
count__47639 = G__48338;
i__47640 = G__48339;
continue;
} else {
var G__48340 = seq__47636;
var G__48341 = chunk__47638;
var G__48342 = count__47639;
var G__48343 = (i__47640 + (1));
seq__47636 = G__48340;
chunk__47638 = G__48341;
count__47639 = G__48342;
i__47640 = G__48343;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47636);
if(temp__5804__auto__){
var seq__47636__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47636__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47636__$1);
var G__48344 = cljs.core.chunk_rest(seq__47636__$1);
var G__48345 = c__5568__auto__;
var G__48346 = cljs.core.count(c__5568__auto__);
var G__48347 = (0);
seq__47636 = G__48344;
chunk__47638 = G__48345;
count__47639 = G__48346;
i__47640 = G__48347;
continue;
} else {
var path = cljs.core.first(seq__47636__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47943_48348 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47947_48349 = null;
var count__47948_48350 = (0);
var i__47949_48351 = (0);
while(true){
if((i__47949_48351 < count__47948_48350)){
var node_48353 = chunk__47947_48349.cljs$core$IIndexed$_nth$arity$2(null,i__47949_48351);
if(cljs.core.not(node_48353.shadow$old)){
var path_match_48354 = shadow.cljs.devtools.client.browser.match_paths(node_48353.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48354)){
var new_link_48356 = (function (){var G__48000 = node_48353.cloneNode(true);
G__48000.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48354),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48000;
})();
(node_48353.shadow$old = true);

(new_link_48356.onload = ((function (seq__47943_48348,chunk__47947_48349,count__47948_48350,i__47949_48351,seq__47636,chunk__47638,count__47639,i__47640,new_link_48356,path_match_48354,node_48353,path,seq__47636__$1,temp__5804__auto__,map__47633,map__47633__$1,msg,updates,reload_info){
return (function (e){
var seq__48001_48357 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48003_48358 = null;
var count__48004_48359 = (0);
var i__48005_48360 = (0);
while(true){
if((i__48005_48360 < count__48004_48359)){
var map__48016_48361 = chunk__48003_48358.cljs$core$IIndexed$_nth$arity$2(null,i__48005_48360);
var map__48016_48362__$1 = cljs.core.__destructure_map(map__48016_48361);
var task_48363 = map__48016_48362__$1;
var fn_str_48364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016_48362__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016_48362__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48366 = goog.getObjectByName(fn_str_48364,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48365)].join(''));

(fn_obj_48366.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48366.cljs$core$IFn$_invoke$arity$2(path,new_link_48356) : fn_obj_48366.call(null,path,new_link_48356));


var G__48367 = seq__48001_48357;
var G__48368 = chunk__48003_48358;
var G__48369 = count__48004_48359;
var G__48370 = (i__48005_48360 + (1));
seq__48001_48357 = G__48367;
chunk__48003_48358 = G__48368;
count__48004_48359 = G__48369;
i__48005_48360 = G__48370;
continue;
} else {
var temp__5804__auto___48371__$1 = cljs.core.seq(seq__48001_48357);
if(temp__5804__auto___48371__$1){
var seq__48001_48372__$1 = temp__5804__auto___48371__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48001_48372__$1)){
var c__5568__auto___48373 = cljs.core.chunk_first(seq__48001_48372__$1);
var G__48374 = cljs.core.chunk_rest(seq__48001_48372__$1);
var G__48375 = c__5568__auto___48373;
var G__48376 = cljs.core.count(c__5568__auto___48373);
var G__48377 = (0);
seq__48001_48357 = G__48374;
chunk__48003_48358 = G__48375;
count__48004_48359 = G__48376;
i__48005_48360 = G__48377;
continue;
} else {
var map__48018_48378 = cljs.core.first(seq__48001_48372__$1);
var map__48018_48379__$1 = cljs.core.__destructure_map(map__48018_48378);
var task_48380 = map__48018_48379__$1;
var fn_str_48381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018_48379__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018_48379__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48384 = goog.getObjectByName(fn_str_48381,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48382)].join(''));

(fn_obj_48384.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48384.cljs$core$IFn$_invoke$arity$2(path,new_link_48356) : fn_obj_48384.call(null,path,new_link_48356));


var G__48385 = cljs.core.next(seq__48001_48372__$1);
var G__48386 = null;
var G__48387 = (0);
var G__48388 = (0);
seq__48001_48357 = G__48385;
chunk__48003_48358 = G__48386;
count__48004_48359 = G__48387;
i__48005_48360 = G__48388;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48353);
});})(seq__47943_48348,chunk__47947_48349,count__47948_48350,i__47949_48351,seq__47636,chunk__47638,count__47639,i__47640,new_link_48356,path_match_48354,node_48353,path,seq__47636__$1,temp__5804__auto__,map__47633,map__47633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48354], 0));

goog.dom.insertSiblingAfter(new_link_48356,node_48353);


var G__48391 = seq__47943_48348;
var G__48392 = chunk__47947_48349;
var G__48393 = count__47948_48350;
var G__48394 = (i__47949_48351 + (1));
seq__47943_48348 = G__48391;
chunk__47947_48349 = G__48392;
count__47948_48350 = G__48393;
i__47949_48351 = G__48394;
continue;
} else {
var G__48395 = seq__47943_48348;
var G__48396 = chunk__47947_48349;
var G__48397 = count__47948_48350;
var G__48398 = (i__47949_48351 + (1));
seq__47943_48348 = G__48395;
chunk__47947_48349 = G__48396;
count__47948_48350 = G__48397;
i__47949_48351 = G__48398;
continue;
}
} else {
var G__48400 = seq__47943_48348;
var G__48401 = chunk__47947_48349;
var G__48402 = count__47948_48350;
var G__48403 = (i__47949_48351 + (1));
seq__47943_48348 = G__48400;
chunk__47947_48349 = G__48401;
count__47948_48350 = G__48402;
i__47949_48351 = G__48403;
continue;
}
} else {
var temp__5804__auto___48404__$1 = cljs.core.seq(seq__47943_48348);
if(temp__5804__auto___48404__$1){
var seq__47943_48405__$1 = temp__5804__auto___48404__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47943_48405__$1)){
var c__5568__auto___48406 = cljs.core.chunk_first(seq__47943_48405__$1);
var G__48407 = cljs.core.chunk_rest(seq__47943_48405__$1);
var G__48408 = c__5568__auto___48406;
var G__48409 = cljs.core.count(c__5568__auto___48406);
var G__48410 = (0);
seq__47943_48348 = G__48407;
chunk__47947_48349 = G__48408;
count__47948_48350 = G__48409;
i__47949_48351 = G__48410;
continue;
} else {
var node_48411 = cljs.core.first(seq__47943_48405__$1);
if(cljs.core.not(node_48411.shadow$old)){
var path_match_48412 = shadow.cljs.devtools.client.browser.match_paths(node_48411.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48412)){
var new_link_48413 = (function (){var G__48025 = node_48411.cloneNode(true);
G__48025.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48412),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48025;
})();
(node_48411.shadow$old = true);

(new_link_48413.onload = ((function (seq__47943_48348,chunk__47947_48349,count__47948_48350,i__47949_48351,seq__47636,chunk__47638,count__47639,i__47640,new_link_48413,path_match_48412,node_48411,seq__47943_48405__$1,temp__5804__auto___48404__$1,path,seq__47636__$1,temp__5804__auto__,map__47633,map__47633__$1,msg,updates,reload_info){
return (function (e){
var seq__48026_48414 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48028_48415 = null;
var count__48029_48416 = (0);
var i__48030_48417 = (0);
while(true){
if((i__48030_48417 < count__48029_48416)){
var map__48048_48418 = chunk__48028_48415.cljs$core$IIndexed$_nth$arity$2(null,i__48030_48417);
var map__48048_48419__$1 = cljs.core.__destructure_map(map__48048_48418);
var task_48420 = map__48048_48419__$1;
var fn_str_48421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48048_48419__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48048_48419__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48423 = goog.getObjectByName(fn_str_48421,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48422)].join(''));

(fn_obj_48423.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48423.cljs$core$IFn$_invoke$arity$2(path,new_link_48413) : fn_obj_48423.call(null,path,new_link_48413));


var G__48425 = seq__48026_48414;
var G__48426 = chunk__48028_48415;
var G__48427 = count__48029_48416;
var G__48428 = (i__48030_48417 + (1));
seq__48026_48414 = G__48425;
chunk__48028_48415 = G__48426;
count__48029_48416 = G__48427;
i__48030_48417 = G__48428;
continue;
} else {
var temp__5804__auto___48429__$2 = cljs.core.seq(seq__48026_48414);
if(temp__5804__auto___48429__$2){
var seq__48026_48430__$1 = temp__5804__auto___48429__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48026_48430__$1)){
var c__5568__auto___48431 = cljs.core.chunk_first(seq__48026_48430__$1);
var G__48432 = cljs.core.chunk_rest(seq__48026_48430__$1);
var G__48433 = c__5568__auto___48431;
var G__48434 = cljs.core.count(c__5568__auto___48431);
var G__48435 = (0);
seq__48026_48414 = G__48432;
chunk__48028_48415 = G__48433;
count__48029_48416 = G__48434;
i__48030_48417 = G__48435;
continue;
} else {
var map__48051_48436 = cljs.core.first(seq__48026_48430__$1);
var map__48051_48437__$1 = cljs.core.__destructure_map(map__48051_48436);
var task_48438 = map__48051_48437__$1;
var fn_str_48439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48051_48437__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48051_48437__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48442 = goog.getObjectByName(fn_str_48439,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48440)].join(''));

(fn_obj_48442.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48442.cljs$core$IFn$_invoke$arity$2(path,new_link_48413) : fn_obj_48442.call(null,path,new_link_48413));


var G__48444 = cljs.core.next(seq__48026_48430__$1);
var G__48445 = null;
var G__48446 = (0);
var G__48447 = (0);
seq__48026_48414 = G__48444;
chunk__48028_48415 = G__48445;
count__48029_48416 = G__48446;
i__48030_48417 = G__48447;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48411);
});})(seq__47943_48348,chunk__47947_48349,count__47948_48350,i__47949_48351,seq__47636,chunk__47638,count__47639,i__47640,new_link_48413,path_match_48412,node_48411,seq__47943_48405__$1,temp__5804__auto___48404__$1,path,seq__47636__$1,temp__5804__auto__,map__47633,map__47633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48412], 0));

goog.dom.insertSiblingAfter(new_link_48413,node_48411);


var G__48450 = cljs.core.next(seq__47943_48405__$1);
var G__48451 = null;
var G__48452 = (0);
var G__48453 = (0);
seq__47943_48348 = G__48450;
chunk__47947_48349 = G__48451;
count__47948_48350 = G__48452;
i__47949_48351 = G__48453;
continue;
} else {
var G__48454 = cljs.core.next(seq__47943_48405__$1);
var G__48455 = null;
var G__48456 = (0);
var G__48457 = (0);
seq__47943_48348 = G__48454;
chunk__47947_48349 = G__48455;
count__47948_48350 = G__48456;
i__47949_48351 = G__48457;
continue;
}
} else {
var G__48458 = cljs.core.next(seq__47943_48405__$1);
var G__48459 = null;
var G__48460 = (0);
var G__48461 = (0);
seq__47943_48348 = G__48458;
chunk__47947_48349 = G__48459;
count__47948_48350 = G__48460;
i__47949_48351 = G__48461;
continue;
}
}
} else {
}
}
break;
}


var G__48462 = cljs.core.next(seq__47636__$1);
var G__48463 = null;
var G__48464 = (0);
var G__48465 = (0);
seq__47636 = G__48462;
chunk__47638 = G__48463;
count__47639 = G__48464;
i__47640 = G__48465;
continue;
} else {
var G__48466 = cljs.core.next(seq__47636__$1);
var G__48468 = null;
var G__48469 = (0);
var G__48470 = (0);
seq__47636 = G__48466;
chunk__47638 = G__48468;
count__47639 = G__48469;
i__47640 = G__48470;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48066){
var map__48067 = p__48066;
var map__48067__$1 = cljs.core.__destructure_map(map__48067);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48067__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48074){
var map__48075 = p__48074;
var map__48075__$1 = cljs.core.__destructure_map(map__48075);
var _ = map__48075__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48075__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48078,done,error){
var map__48080 = p__48078;
var map__48080__$1 = cljs.core.__destructure_map(map__48080);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48080__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48083,done,error){
var map__48084 = p__48083;
var map__48084__$1 = cljs.core.__destructure_map(map__48084);
var msg = map__48084__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48084__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48084__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48084__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48085){
var map__48086 = p__48085;
var map__48086__$1 = cljs.core.__destructure_map(map__48086);
var src = map__48086__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48089 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48089) : done.call(null,G__48089));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48090){
var map__48091 = p__48090;
var map__48091__$1 = cljs.core.__destructure_map(map__48091);
var msg__$1 = map__48091__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48091__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48092){var ex = e48092;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48094){
var map__48095 = p__48094;
var map__48095__$1 = cljs.core.__destructure_map(map__48095);
var env = map__48095__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48095__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48103){
var map__48104 = p__48103;
var map__48104__$1 = cljs.core.__destructure_map(map__48104);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48104__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48104__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48106){
var map__48107 = p__48106;
var map__48107__$1 = cljs.core.__destructure_map(map__48107);
var svc = map__48107__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48107__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
