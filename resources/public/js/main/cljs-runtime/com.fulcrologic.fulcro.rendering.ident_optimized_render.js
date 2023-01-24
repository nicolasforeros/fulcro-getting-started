goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__48739 = app__$1;
var map__48739__$1 = cljs.core.__destructure_map(map__48739);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__48745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__48746 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__48745,G__48746) : com.fulcrologic.fulcro.components.computed.call(null,G__48745,G__48746));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-981094612,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__48750 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__48750) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__48750));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-960838587,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__48755 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__48756 = null;
var count__48757 = (0);
var i__48758 = (0);
while(true){
if((i__48758 < count__48757)){
var c = chunk__48756.cljs$core$IIndexed$_nth$arity$2(null,i__48758);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__48915 = seq__48755;
var G__48916 = chunk__48756;
var G__48917 = count__48757;
var G__48918 = (i__48758 + (1));
seq__48755 = G__48915;
chunk__48756 = G__48916;
count__48757 = G__48917;
i__48758 = G__48918;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48755);
if(temp__5804__auto__){
var seq__48755__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48755__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48755__$1);
var G__48920 = cljs.core.chunk_rest(seq__48755__$1);
var G__48921 = c__5568__auto__;
var G__48922 = cljs.core.count(c__5568__auto__);
var G__48923 = (0);
seq__48755 = G__48920;
chunk__48756 = G__48921;
count__48757 = G__48922;
i__48758 = G__48923;
continue;
} else {
var c = cljs.core.first(seq__48755__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__48926 = cljs.core.next(seq__48755__$1);
var G__48927 = null;
var G__48928 = (0);
var G__48929 = (0);
seq__48755 = G__48926;
chunk__48756 = G__48927;
count__48757 = G__48928;
i__48758 = G__48929;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__48767 = app__$1;
var map__48767__$1 = cljs.core.__destructure_map(map__48767);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48767__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__48768 = cljs.core.deref(runtime_atom);
var map__48768__$1 = cljs.core.__destructure_map(map__48768);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48768__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__48769 = indexes;
var map__48769__$1 = cljs.core.__destructure_map(map__48769);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__48770 = cljs.core.seq(classes);
var chunk__48771 = null;
var count__48772 = (0);
var i__48773 = (0);
while(true){
if((i__48773 < count__48772)){
var class$ = chunk__48771.cljs$core$IIndexed$_nth$arity$2(null,i__48773);
var seq__48797_48934 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__48799_48935 = null;
var count__48800_48936 = (0);
var i__48801_48937 = (0);
while(true){
if((i__48801_48937 < count__48800_48936)){
var component_48938 = chunk__48799_48935.cljs$core$IIndexed$_nth$arity$2(null,i__48801_48937);
var component_ident_48939 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_48938) : com.fulcrologic.fulcro.components.get_ident.call(null,component_48938));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_48939,component_48938);


var G__48943 = seq__48797_48934;
var G__48944 = chunk__48799_48935;
var G__48945 = count__48800_48936;
var G__48946 = (i__48801_48937 + (1));
seq__48797_48934 = G__48943;
chunk__48799_48935 = G__48944;
count__48800_48936 = G__48945;
i__48801_48937 = G__48946;
continue;
} else {
var temp__5804__auto___48948 = cljs.core.seq(seq__48797_48934);
if(temp__5804__auto___48948){
var seq__48797_48950__$1 = temp__5804__auto___48948;
if(cljs.core.chunked_seq_QMARK_(seq__48797_48950__$1)){
var c__5568__auto___48952 = cljs.core.chunk_first(seq__48797_48950__$1);
var G__48953 = cljs.core.chunk_rest(seq__48797_48950__$1);
var G__48954 = c__5568__auto___48952;
var G__48955 = cljs.core.count(c__5568__auto___48952);
var G__48956 = (0);
seq__48797_48934 = G__48953;
chunk__48799_48935 = G__48954;
count__48800_48936 = G__48955;
i__48801_48937 = G__48956;
continue;
} else {
var component_48957 = cljs.core.first(seq__48797_48950__$1);
var component_ident_48959 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_48957) : com.fulcrologic.fulcro.components.get_ident.call(null,component_48957));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_48959,component_48957);


var G__48960 = cljs.core.next(seq__48797_48950__$1);
var G__48961 = null;
var G__48962 = (0);
var G__48963 = (0);
seq__48797_48934 = G__48960;
chunk__48799_48935 = G__48961;
count__48800_48936 = G__48962;
i__48801_48937 = G__48963;
continue;
}
} else {
}
}
break;
}


var G__48967 = seq__48770;
var G__48968 = chunk__48771;
var G__48969 = count__48772;
var G__48970 = (i__48773 + (1));
seq__48770 = G__48967;
chunk__48771 = G__48968;
count__48772 = G__48969;
i__48773 = G__48970;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48770);
if(temp__5804__auto__){
var seq__48770__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48770__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48770__$1);
var G__48973 = cljs.core.chunk_rest(seq__48770__$1);
var G__48974 = c__5568__auto__;
var G__48975 = cljs.core.count(c__5568__auto__);
var G__48976 = (0);
seq__48770 = G__48973;
chunk__48771 = G__48974;
count__48772 = G__48975;
i__48773 = G__48976;
continue;
} else {
var class$ = cljs.core.first(seq__48770__$1);
var seq__48808_48977 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__48810_48978 = null;
var count__48811_48979 = (0);
var i__48812_48980 = (0);
while(true){
if((i__48812_48980 < count__48811_48979)){
var component_48982 = chunk__48810_48978.cljs$core$IIndexed$_nth$arity$2(null,i__48812_48980);
var component_ident_48985 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_48982) : com.fulcrologic.fulcro.components.get_ident.call(null,component_48982));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_48985,component_48982);


var G__48988 = seq__48808_48977;
var G__48989 = chunk__48810_48978;
var G__48990 = count__48811_48979;
var G__48991 = (i__48812_48980 + (1));
seq__48808_48977 = G__48988;
chunk__48810_48978 = G__48989;
count__48811_48979 = G__48990;
i__48812_48980 = G__48991;
continue;
} else {
var temp__5804__auto___48992__$1 = cljs.core.seq(seq__48808_48977);
if(temp__5804__auto___48992__$1){
var seq__48808_48993__$1 = temp__5804__auto___48992__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48808_48993__$1)){
var c__5568__auto___48995 = cljs.core.chunk_first(seq__48808_48993__$1);
var G__48996 = cljs.core.chunk_rest(seq__48808_48993__$1);
var G__48997 = c__5568__auto___48995;
var G__48998 = cljs.core.count(c__5568__auto___48995);
var G__48999 = (0);
seq__48808_48977 = G__48996;
chunk__48810_48978 = G__48997;
count__48811_48979 = G__48998;
i__48812_48980 = G__48999;
continue;
} else {
var component_49000 = cljs.core.first(seq__48808_48993__$1);
var component_ident_49001 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_49000) : com.fulcrologic.fulcro.components.get_ident.call(null,component_49000));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_49001,component_49000);


var G__49002 = cljs.core.next(seq__48808_48993__$1);
var G__49003 = null;
var G__49004 = (0);
var G__49005 = (0);
seq__48808_48977 = G__49002;
chunk__48810_48978 = G__49003;
count__48811_48979 = G__49004;
i__48812_48980 = G__49005;
continue;
}
} else {
}
}
break;
}


var G__49006 = cljs.core.next(seq__48770__$1);
var G__49007 = null;
var G__49008 = (0);
var G__49009 = (0);
seq__48770 = G__49006;
chunk__48771 = G__49007;
count__48772 = G__49008;
i__48773 = G__49009;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__48826 = app__$1;
var map__48826__$1 = cljs.core.__destructure_map(map__48826);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48826__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__48827 = cljs.core.deref(runtime_atom);
var map__48827__$1 = cljs.core.__destructure_map(map__48827);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__48828 = indexes;
var map__48828__$1 = cljs.core.__destructure_map(map__48828);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48828__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48828__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48824_SHARP_,p2__48825_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__48824_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__48825_SHARP_) : class__GT_components.call(null,p2__48825_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__48836 = app__$1;
var map__48836__$1 = cljs.core.__destructure_map(map__48836);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48836__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48836__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__48837 = cljs.core.deref(runtime_atom);
var map__48837__$1 = cljs.core.__destructure_map(map__48837);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__48838 = indexes;
var map__48838__$1 = cljs.core.__destructure_map(map__48838);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48838__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48838__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48838__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48838__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__48841 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__48841__$1 = cljs.core.__destructure_map(map__48841);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__48842_49022 = cljs.core.seq(limited_to_render);
var chunk__48844_49023 = null;
var count__48845_49024 = (0);
var i__48846_49025 = (0);
while(true){
if((i__48846_49025 < count__48845_49024)){
var c_49029 = chunk__48844_49023.cljs$core$IIndexed$_nth$arity$2(null,i__48846_49025);
var ident_49030 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_49029) : com.fulcrologic.fulcro.components.get_ident.call(null,c_49029));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_49030,c_49029);


var G__49031 = seq__48842_49022;
var G__49032 = chunk__48844_49023;
var G__49033 = count__48845_49024;
var G__49034 = (i__48846_49025 + (1));
seq__48842_49022 = G__49031;
chunk__48844_49023 = G__49032;
count__48845_49024 = G__49033;
i__48846_49025 = G__49034;
continue;
} else {
var temp__5804__auto___49035 = cljs.core.seq(seq__48842_49022);
if(temp__5804__auto___49035){
var seq__48842_49036__$1 = temp__5804__auto___49035;
if(cljs.core.chunked_seq_QMARK_(seq__48842_49036__$1)){
var c__5568__auto___49037 = cljs.core.chunk_first(seq__48842_49036__$1);
var G__49038 = cljs.core.chunk_rest(seq__48842_49036__$1);
var G__49039 = c__5568__auto___49037;
var G__49040 = cljs.core.count(c__5568__auto___49037);
var G__49041 = (0);
seq__48842_49022 = G__49038;
chunk__48844_49023 = G__49039;
count__48845_49024 = G__49040;
i__48846_49025 = G__49041;
continue;
} else {
var c_49043 = cljs.core.first(seq__48842_49036__$1);
var ident_49044 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_49043) : com.fulcrologic.fulcro.components.get_ident.call(null,c_49043));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_49044,c_49043);


var G__49045 = cljs.core.next(seq__48842_49036__$1);
var G__49046 = null;
var G__49047 = (0);
var G__49048 = (0);
seq__48842_49022 = G__49045;
chunk__48844_49023 = G__49046;
count__48845_49024 = G__49047;
i__48846_49025 = G__49048;
continue;
}
} else {
}
}
break;
}

var seq__48852 = cljs.core.seq(limited_idents);
var chunk__48853 = null;
var count__48854 = (0);
var i__48855 = (0);
while(true){
if((i__48855 < count__48854)){
var i = chunk__48853.cljs$core$IIndexed$_nth$arity$2(null,i__48855);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__49051 = seq__48852;
var G__49052 = chunk__48853;
var G__49053 = count__48854;
var G__49054 = (i__48855 + (1));
seq__48852 = G__49051;
chunk__48853 = G__49052;
count__48854 = G__49053;
i__48855 = G__49054;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48852);
if(temp__5804__auto__){
var seq__48852__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48852__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48852__$1);
var G__49055 = cljs.core.chunk_rest(seq__48852__$1);
var G__49056 = c__5568__auto__;
var G__49057 = cljs.core.count(c__5568__auto__);
var G__49058 = (0);
seq__48852 = G__49055;
chunk__48853 = G__49056;
count__48854 = G__49057;
i__48855 = G__49058;
continue;
} else {
var i = cljs.core.first(seq__48852__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__49061 = cljs.core.next(seq__48852__$1);
var G__49062 = null;
var G__49063 = (0);
var G__49064 = (0);
seq__48852 = G__49061;
chunk__48853 = G__49062;
count__48854 = G__49063;
i__48855 = G__49064;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__48864 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__48864__$1 = cljs.core.__destructure_map(map__48864);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48864__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48864__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__48870_49068 = cljs.core.seq(all_idents);
var chunk__48871_49069 = null;
var count__48872_49070 = (0);
var i__48873_49071 = (0);
while(true){
if((i__48873_49071 < count__48872_49070)){
var i_49072 = chunk__48871_49069.cljs$core$IIndexed$_nth$arity$2(null,i__48873_49071);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_49072);


var G__49073 = seq__48870_49068;
var G__49074 = chunk__48871_49069;
var G__49075 = count__48872_49070;
var G__49076 = (i__48873_49071 + (1));
seq__48870_49068 = G__49073;
chunk__48871_49069 = G__49074;
count__48872_49070 = G__49075;
i__48873_49071 = G__49076;
continue;
} else {
var temp__5804__auto___49078 = cljs.core.seq(seq__48870_49068);
if(temp__5804__auto___49078){
var seq__48870_49080__$1 = temp__5804__auto___49078;
if(cljs.core.chunked_seq_QMARK_(seq__48870_49080__$1)){
var c__5568__auto___49082 = cljs.core.chunk_first(seq__48870_49080__$1);
var G__49083 = cljs.core.chunk_rest(seq__48870_49080__$1);
var G__49084 = c__5568__auto___49082;
var G__49085 = cljs.core.count(c__5568__auto___49082);
var G__49086 = (0);
seq__48870_49068 = G__49083;
chunk__48871_49069 = G__49084;
count__48872_49070 = G__49085;
i__48873_49071 = G__49086;
continue;
} else {
var i_49090 = cljs.core.first(seq__48870_49080__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_49090);


var G__49091 = cljs.core.next(seq__48870_49080__$1);
var G__49092 = null;
var G__49093 = (0);
var G__49094 = (0);
seq__48870_49068 = G__49091;
chunk__48871_49069 = G__49092;
count__48872_49070 = G__49093;
i__48873_49071 = G__49094;
continue;
}
} else {
}
}
break;
}

var seq__48880 = cljs.core.seq(extra_to_force);
var chunk__48881 = null;
var count__48882 = (0);
var i__48883 = (0);
while(true){
if((i__48883 < count__48882)){
var c = chunk__48881.cljs$core$IIndexed$_nth$arity$2(null,i__48883);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__49096 = seq__48880;
var G__49097 = chunk__48881;
var G__49098 = count__48882;
var G__49099 = (i__48883 + (1));
seq__48880 = G__49096;
chunk__48881 = G__49097;
count__48882 = G__49098;
i__48883 = G__49099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48880);
if(temp__5804__auto__){
var seq__48880__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48880__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48880__$1);
var G__49102 = cljs.core.chunk_rest(seq__48880__$1);
var G__49103 = c__5568__auto__;
var G__49104 = cljs.core.count(c__5568__auto__);
var G__49105 = (0);
seq__48880 = G__49102;
chunk__48881 = G__49103;
count__48882 = G__49104;
i__48883 = G__49105;
continue;
} else {
var c = cljs.core.first(seq__48880__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__49110 = cljs.core.next(seq__48880__$1);
var G__49111 = null;
var G__49112 = (0);
var G__49113 = (0);
seq__48880 = G__49110;
chunk__48881 = G__49111;
count__48882 = G__49112;
i__48883 = G__49113;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__48893 = arguments.length;
switch (G__48893) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__48899){
var map__48900 = p__48899;
var map__48900__$1 = cljs.core.__destructure_map(map__48900);
var options = map__48900__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48900__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48900__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e48901){var e = e48901;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,421272581,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
