goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.scope(function(){
  com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__51670 = arguments.length;
switch (G__51670) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__51676){
var map__51677 = p__51676;
var map__51677__$1 = cljs.core.__destructure_map(map__51677);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51677__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51677__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__51682 = app__$2;
var G__51682__$1 = (((G__51682 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__51682));
var G__51682__$2 = (((G__51682__$1 == null))?null:cljs.core.deref(G__51682__$1));
if((G__51682__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__51682__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__5043__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(initialized_QMARK_));
} else {
return and__5043__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__51687_51856 = app__$2;
var G__51688_51857 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__51687_51856,G__51688_51857) : schedule_render_BANG_.call(null,G__51687_51856,G__51688_51857));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,521853524);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,-884292714);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__51698 = arguments.length;
switch (G__51698) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__51706){
var map__51707 = p__51706;
var map__51707__$1 = cljs.core.__destructure_map(map__51707);
var options = map__51707__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51707__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,919555590);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,-1414184857);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__51709 = app__$1;
var G__51709__$1 = (((G__51709 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__51709));
if((G__51709__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51709__$1);
}
})();
var known_roots = (function (){var G__51710 = app__$1;
var G__51710__$1 = (((G__51710 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__51710));
var G__51710__$2 = (((G__51710__$1 == null))?null:cljs.core.deref(G__51710__$1));
if((G__51710__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__51710__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__51711 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__51713 = null;
var count__51714 = (0);
var i__51715 = (0);
while(true){
if((i__51715 < count__51714)){
var k = chunk__51713.cljs$core$IIndexed$_nth$arity$2(null,i__51715);
var cls_51868 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_51869 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_51868,state_map);
var root_props_51870 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_51869,state_map,state_map);
var seq__51741_51871 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__51742_51872 = null;
var count__51743_51873 = (0);
var i__51744_51874 = (0);
while(true){
if((i__51744_51874 < count__51743_51873)){
var root_51875 = chunk__51742_51872.cljs$core$IIndexed$_nth$arity$2(null,i__51744_51874);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_51875,root_props_51870);


var G__51878 = seq__51741_51871;
var G__51879 = chunk__51742_51872;
var G__51880 = count__51743_51873;
var G__51881 = (i__51744_51874 + (1));
seq__51741_51871 = G__51878;
chunk__51742_51872 = G__51879;
count__51743_51873 = G__51880;
i__51744_51874 = G__51881;
continue;
} else {
var temp__5804__auto___51883 = cljs.core.seq(seq__51741_51871);
if(temp__5804__auto___51883){
var seq__51741_51884__$1 = temp__5804__auto___51883;
if(cljs.core.chunked_seq_QMARK_(seq__51741_51884__$1)){
var c__5568__auto___51885 = cljs.core.chunk_first(seq__51741_51884__$1);
var G__51886 = cljs.core.chunk_rest(seq__51741_51884__$1);
var G__51887 = c__5568__auto___51885;
var G__51888 = cljs.core.count(c__5568__auto___51885);
var G__51889 = (0);
seq__51741_51871 = G__51886;
chunk__51742_51872 = G__51887;
count__51743_51873 = G__51888;
i__51744_51874 = G__51889;
continue;
} else {
var root_51890 = cljs.core.first(seq__51741_51884__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_51890,root_props_51870);


var G__51891 = cljs.core.next(seq__51741_51884__$1);
var G__51892 = null;
var G__51893 = (0);
var G__51894 = (0);
seq__51741_51871 = G__51891;
chunk__51742_51872 = G__51892;
count__51743_51873 = G__51893;
i__51744_51874 = G__51894;
continue;
}
} else {
}
}
break;
}


var G__51895 = seq__51711;
var G__51896 = chunk__51713;
var G__51897 = count__51714;
var G__51898 = (i__51715 + (1));
seq__51711 = G__51895;
chunk__51713 = G__51896;
count__51714 = G__51897;
i__51715 = G__51898;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51711);
if(temp__5804__auto__){
var seq__51711__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51711__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51711__$1);
var G__51900 = cljs.core.chunk_rest(seq__51711__$1);
var G__51901 = c__5568__auto__;
var G__51902 = cljs.core.count(c__5568__auto__);
var G__51903 = (0);
seq__51711 = G__51900;
chunk__51713 = G__51901;
count__51714 = G__51902;
i__51715 = G__51903;
continue;
} else {
var k = cljs.core.first(seq__51711__$1);
var cls_51904 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_51905 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_51904,state_map);
var root_props_51906 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_51905,state_map,state_map);
var seq__51754_51907 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__51755_51908 = null;
var count__51756_51909 = (0);
var i__51757_51910 = (0);
while(true){
if((i__51757_51910 < count__51756_51909)){
var root_51912 = chunk__51755_51908.cljs$core$IIndexed$_nth$arity$2(null,i__51757_51910);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_51912,root_props_51906);


var G__51913 = seq__51754_51907;
var G__51914 = chunk__51755_51908;
var G__51915 = count__51756_51909;
var G__51916 = (i__51757_51910 + (1));
seq__51754_51907 = G__51913;
chunk__51755_51908 = G__51914;
count__51756_51909 = G__51915;
i__51757_51910 = G__51916;
continue;
} else {
var temp__5804__auto___51917__$1 = cljs.core.seq(seq__51754_51907);
if(temp__5804__auto___51917__$1){
var seq__51754_51918__$1 = temp__5804__auto___51917__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51754_51918__$1)){
var c__5568__auto___51919 = cljs.core.chunk_first(seq__51754_51918__$1);
var G__51920 = cljs.core.chunk_rest(seq__51754_51918__$1);
var G__51921 = c__5568__auto___51919;
var G__51922 = cljs.core.count(c__5568__auto___51919);
var G__51923 = (0);
seq__51754_51907 = G__51920;
chunk__51755_51908 = G__51921;
count__51756_51909 = G__51922;
i__51757_51910 = G__51923;
continue;
} else {
var root_51926 = cljs.core.first(seq__51754_51918__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_51926,root_props_51906);


var G__51928 = cljs.core.next(seq__51754_51918__$1);
var G__51929 = null;
var G__51930 = (0);
var G__51931 = (0);
seq__51754_51907 = G__51928;
chunk__51755_51908 = G__51929;
count__51756_51909 = G__51930;
i__51757_51910 = G__51931;
continue;
}
} else {
}
}
break;
}


var G__51933 = cljs.core.next(seq__51711__$1);
var G__51934 = null;
var G__51935 = (0);
var G__51936 = (0);
seq__51711 = G__51933;
chunk__51713 = G__51934;
count__51714 = G__51935;
i__51715 = G__51936;
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
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__51759 = app__$1;
var map__51759__$1 = cljs.core.__destructure_map(map__51759);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51760 = cljs.core.deref(runtime_atom);
var map__51760__$1 = cljs.core.__destructure_map(map__51760);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51760__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__51761 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__51761__$1 = cljs.core.__destructure_map(map__51761);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51761__$1,true);
var seq__51762 = cljs.core.seq(limited_idents);
var chunk__51763 = null;
var count__51764 = (0);
var i__51765 = (0);
while(true){
if((i__51765 < count__51764)){
var i = chunk__51763.cljs$core$IIndexed$_nth$arity$2(null,i__51765);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__51944 = seq__51762;
var G__51945 = chunk__51763;
var G__51946 = count__51764;
var G__51947 = (i__51765 + (1));
seq__51762 = G__51944;
chunk__51763 = G__51945;
count__51764 = G__51946;
i__51765 = G__51947;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51762);
if(temp__5804__auto__){
var seq__51762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51762__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51762__$1);
var G__51951 = cljs.core.chunk_rest(seq__51762__$1);
var G__51952 = c__5568__auto__;
var G__51953 = cljs.core.count(c__5568__auto__);
var G__51954 = (0);
seq__51762 = G__51951;
chunk__51763 = G__51952;
count__51764 = G__51953;
i__51765 = G__51954;
continue;
} else {
var i = cljs.core.first(seq__51762__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__51956 = cljs.core.next(seq__51762__$1);
var G__51957 = null;
var G__51958 = (0);
var G__51959 = (0);
seq__51762 = G__51956;
chunk__51763 = G__51957;
count__51764 = G__51958;
i__51765 = G__51959;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__51772 = arguments.length;
switch (G__51772) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__51783){
var map__51784 = p__51783;
var map__51784__$1 = cljs.core.__destructure_map(map__51784);
var options = map__51784__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51784__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51784__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e51786){var e = e51786;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,68071436);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object.extend(cls.prototype,module$node_modules$react$index.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__51643__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fulcro_app;
}
})();
var d__51644__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__51795 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__51796 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__51797 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__51798 = app__51643__auto__;
var _STAR_shared_STAR__temp_val__51799 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__51643__auto__);
var _STAR_depth_STAR__temp_val__51800 = d__51644__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__51798);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51799);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51800);

try{var _STAR_denormalize_time_STAR__orig_val__51803 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__51804 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__51804);

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__51809 = fulcro_app;
var G__51809__$1 = (((G__51809 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__51809));
if((G__51809__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51809__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__51811 = props;
var G__51812 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__51811,G__51812) : ui_root.call(null,G__51811,G__51812));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__51803);
}}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51797);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51796);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__51795);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__51818 = arguments.length;
switch (G__51818) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var _STAR_denormalize_time_STAR__orig_val__51834 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__51835 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__51835);

try{var state_map = (function (){var G__51836 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__51836__$1 = (((G__51836 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__51836));
if((G__51836__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51836__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__51841 = (function (){var or__5045__auto__ = props;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__51842 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__51841,G__51842) : ui_factory.call(null,G__51841,G__51842));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__51834);
}});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
