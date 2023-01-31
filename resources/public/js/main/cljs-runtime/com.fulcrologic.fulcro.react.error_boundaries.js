goog.provide('com.fulcrologic.fulcro.react.error_boundaries');
/**
 * A `(fn [react-element exception] what-to-render)`. Called in order to render an alternate for UI segments that have crashed.
 * Defaults to a simple div containing the error header and message as standard HTML elements.
 */
com.fulcrologic.fulcro.react.error_boundaries._STAR_render_error_STAR_ = (function com$fulcrologic$fulcro$react$error_boundaries$_STAR_render_error_STAR_(this$,cause){
return "There was an error.";
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.react !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries.BodyContainer !== 'undefined')){
} else {
com.fulcrologic.fulcro.react.error_boundaries.BodyContainer = (function com$fulcrologic$fulcro$react$error_boundaries$BodyContainer(js_props__50159__auto__){
var render__50160__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.fulcro.react.error_boundaries.BodyContainer)));
var vec__50453 = com.fulcrologic.fulcro.components.use_fulcro(js_props__50159__auto__,com.fulcrologic.fulcro.react.error_boundaries.BodyContainer);
var this__50161__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50453,(0),null);
var props__50162__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50453,(1),null);
return (render__50160__auto__.cljs$core$IFn$_invoke$arity$2 ? render__50160__auto__.cljs$core$IFn$_invoke$arity$2(this__50161__auto__,props__50162__auto__) : render__50160__auto__.call(null,this__50161__auto__,props__50162__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.fulcro.react.error-boundaries","BodyContainer","com.fulcrologic.fulcro.react.error-boundaries/BodyContainer",1372108272),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$react$error_boundaries$render_BodyContainer(this$,p__50460){
var map__50461 = p__50460;
var map__50461__$1 = cljs.core.__destructure_map(map__50461);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50461__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50461__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__50462 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__50463 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__50464 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__50465 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__50466 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__50470 = this$;
var G__50471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__50470,G__50471) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__50470,G__50471));
}
})();
var _STAR_depth_STAR__temp_val__50467 = ((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__50472 = this$;
var G__50473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$depth"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__50472,G__50473) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__50472,G__50473));
}
})() + (1));
var _STAR_shared_STAR__temp_val__50468 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__50476 = this$;
var G__50477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__50476,G__50477) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__50476,G__50477));
}
})());
var _STAR_parent_STAR__temp_val__50469 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__50466);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__50467);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__50468);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__50469);

try{var parent__50054__auto__ = parent;
var app__50055__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__50054__auto__);
}
})();
var d__50056__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (com.fulcrologic.fulcro.components.depth(parent__50054__auto__) + (1));
}
})();
var s__50057__auto__ = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__50055__auto__);
var p__50058__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return parent__50054__auto__;
}
})();
var _STAR_app_STAR__orig_val__50485 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__50486 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__50487 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__50488 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__50489 = app__50055__auto__;
var _STAR_depth_STAR__temp_val__50490 = d__50056__auto__;
var _STAR_shared_STAR__temp_val__50491 = s__50057__auto__;
var _STAR_parent_STAR__temp_val__50492 = p__50058__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__50489);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__50490);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__50491);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__50492);

try{return (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__50488);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__50487);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__50486);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__50485);
}}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__50465);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__50464);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__50463);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__50462);
}}));
})], null));
com.fulcrologic.fulcro.react.error_boundaries.ui_body_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer);

var options__50163__auto___50530 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_np,_ns){
return true;
}),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),(function (error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword(null,"cause","cause",231901252),error], null);
}),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (_this,error,_info){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.react.error-boundaries",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_message(error)], null);
}),null)),null,46884848);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$react$error_boundaries$render_ErrorBoundary(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__50497 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50497__$1 = cljs.core.__destructure_map(map__50497);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50497__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50497__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
if(cljs.core.truth_(error)){
return com.fulcrologic.fulcro.react.error_boundaries._STAR_render_error_STAR_.call(null,this$,cause);
} else {
return (com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.call(null,props));
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.react !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary = (function com$fulcrologic$fulcro$react$error_boundaries$ErrorBoundary(props__50164__auto__){
var this__50165__auto__ = this;
var temp__5802__auto___50532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50163__auto___50530,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___50532)){
var init_state__50166__auto___50533 = temp__5802__auto___50532;
(this__50165__auto__.state = (function (){var obj50506 = ({"fulcro$state":(function (){var G__50507 = this__50165__auto__;
var G__50508 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__50164__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__50164__auto__,"fulcro$value"));
return (init_state__50166__auto___50533.cljs$core$IFn$_invoke$arity$2 ? init_state__50166__auto___50533.cljs$core$IFn$_invoke$arity$2(G__50507,G__50508) : init_state__50166__auto___50533.call(null,G__50507,G__50508));
})()});
return obj50506;
})());
} else {
(this__50165__auto__.state = (function (){var obj50515 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj50515;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary,new cljs.core.Keyword("com.fulcrologic.fulcro.react.error-boundaries","ErrorBoundary","com.fulcrologic.fulcro.react.error-boundaries/ErrorBoundary",-892633009),options__50163__auto___50530);
com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary);

//# sourceMappingURL=com.fulcrologic.fulcro.react.error_boundaries.js.map
