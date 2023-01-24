goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__37628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37629__auto__ = (function (){var switch__37250__auto__ = (function (state_43187){
var state_val_43188 = (state_43187[(1)]);
if((state_val_43188 === (7))){
var inst_43183 = (state_43187[(2)]);
var state_43187__$1 = state_43187;
var statearr_43192_43273 = state_43187__$1;
(statearr_43192_43273[(2)] = inst_43183);

(statearr_43192_43273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (1))){
var state_43187__$1 = state_43187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43187__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_43188 === (4))){
var inst_43185 = (state_43187[(2)]);
var state_43187__$1 = state_43187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43187__$1,inst_43185);
} else {
if((state_val_43188 === (6))){
var inst_43181 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_43187__$1 = state_43187;
var statearr_43197_43274 = state_43187__$1;
(statearr_43197_43274[(2)] = inst_43181);

(statearr_43197_43274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (3))){
var inst_43164 = (state_43187[(7)]);
var state_43187__$1 = state_43187;
if(cljs.core.truth_(inst_43164)){
var statearr_43198_43275 = state_43187__$1;
(statearr_43198_43275[(1)] = (5));

} else {
var statearr_43199_43276 = state_43187__$1;
(statearr_43199_43276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (12))){
var inst_43178 = (state_43187[(2)]);
var inst_43164 = inst_43178;
var state_43187__$1 = (function (){var statearr_43201 = state_43187;
(statearr_43201[(7)] = inst_43164);

return statearr_43201;
})();
var statearr_43203_43277 = state_43187__$1;
(statearr_43203_43277[(2)] = null);

(statearr_43203_43277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (2))){
var inst_43163 = (state_43187[(2)]);
var inst_43164 = inst_43163;
var state_43187__$1 = (function (){var statearr_43208 = state_43187;
(statearr_43208[(7)] = inst_43164);

return statearr_43208;
})();
var statearr_43209_43278 = state_43187__$1;
(statearr_43209_43278[(2)] = null);

(statearr_43209_43278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (11))){
var _ = (function (){var statearr_43210 = state_43187;
(statearr_43210[(4)] = cljs.core.rest((state_43187[(4)])));

return statearr_43210;
})();
var state_43187__$1 = state_43187;
var ex43200 = (state_43187__$1[(2)]);
var statearr_43211_43279 = state_43187__$1;
(statearr_43211_43279[(5)] = ex43200);


var statearr_43213_43280 = state_43187__$1;
(statearr_43213_43280[(1)] = (10));

(statearr_43213_43280[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (9))){
var inst_43176 = (state_43187[(2)]);
var state_43187__$1 = (function (){var statearr_43216 = state_43187;
(statearr_43216[(8)] = inst_43176);

return statearr_43216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43187__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_43188 === (5))){
var state_43187__$1 = state_43187;
var statearr_43217_43281 = state_43187__$1;
(statearr_43217_43281[(2)] = null);

(statearr_43217_43281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (10))){
var inst_43167 = (state_43187[(2)]);
var state_43187__$1 = (function (){var statearr_43218 = state_43187;
(statearr_43218[(9)] = inst_43167);

return statearr_43218;
})();
var statearr_43220_43282 = state_43187__$1;
(statearr_43220_43282[(2)] = null);

(statearr_43220_43282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43188 === (8))){
var inst_43164 = (state_43187[(7)]);
var _ = (function (){var statearr_43222 = state_43187;
(statearr_43222[(4)] = cljs.core.cons((11),(state_43187[(4)])));

return statearr_43222;
})();
var inst_43173 = (inst_43164.cljs$core$IFn$_invoke$arity$0 ? inst_43164.cljs$core$IFn$_invoke$arity$0() : inst_43164.call(null));
var ___$1 = (function (){var statearr_43223 = state_43187;
(statearr_43223[(4)] = cljs.core.rest((state_43187[(4)])));

return statearr_43223;
})();
var state_43187__$1 = state_43187;
var statearr_43224_43283 = state_43187__$1;
(statearr_43224_43283[(2)] = inst_43173);

(statearr_43224_43283[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__37251__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__37251__auto____0 = (function (){
var statearr_43225 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43225[(0)] = com$fulcrologic$guardrails$core$state_machine__37251__auto__);

(statearr_43225[(1)] = (1));

return statearr_43225;
});
var com$fulcrologic$guardrails$core$state_machine__37251__auto____1 = (function (state_43187){
while(true){
var ret_value__37252__auto__ = (function (){try{while(true){
var result__37253__auto__ = switch__37250__auto__(state_43187);
if(cljs.core.keyword_identical_QMARK_(result__37253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37253__auto__;
}
break;
}
}catch (e43227){var ex__37254__auto__ = e43227;
var statearr_43228_43284 = state_43187;
(statearr_43228_43284[(2)] = ex__37254__auto__);


if(cljs.core.seq((state_43187[(4)]))){
var statearr_43229_43285 = state_43187;
(statearr_43229_43285[(1)] = cljs.core.first((state_43187[(4)])));

} else {
throw ex__37254__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43286 = state_43187;
state_43187 = G__43286;
continue;
} else {
return ret_value__37252__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__37251__auto__ = function(state_43187){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__37251__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__37251__auto____1.call(this,state_43187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__37251__auto____0;
com$fulcrologic$guardrails$core$state_machine__37251__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__37251__auto____1;
return com$fulcrologic$guardrails$core$state_machine__37251__auto__;
})()
})();
var state__37630__auto__ = (function (){var statearr_43230 = f__37629__auto__();
(statearr_43230[(6)] = c__37628__auto__);

return statearr_43230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37630__auto__);
}));

return c__37628__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__43231 = data;
var map__43231__$1 = cljs.core.__destructure_map(map__43231);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__43239,spec,value){
var map__43240 = p__43239;
var map__43240__$1 = cljs.core.__destructure_map(map__43240);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43240__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43240__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43240__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43240__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43240__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43240__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_43289 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__43290 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_43291 = (cljs.core.truth_(vargs_QMARK__43290)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_43292 = (cljs.core.truth_(vargs_QMARK__43290)?((cljs.core.map_QMARK_(varg_43291))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_43291))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_43291))):value);
var valid_exception_43293 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_43292)){
} else {
var problem_43294 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_43292,expound_opts);
var description_43295 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_43294)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_43293,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_43295,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_43292], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_43295,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e43241){var e_43298 = e43241;
com.fulcrologic.guardrails.utils.report_exception(e_43298,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_43299 = (com.fulcrologic.guardrails.core.now_ms() - start_43289);
if((duration_43299 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_43299),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_43293))){
throw cljs.core.deref(valid_exception_43293);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
