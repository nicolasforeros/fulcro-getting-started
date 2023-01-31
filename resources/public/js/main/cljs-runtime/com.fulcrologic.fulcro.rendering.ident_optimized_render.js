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
var map__50656 = app__$1;
var map__50656__$1 = cljs.core.__destructure_map(map__50656);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50656__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
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
var new_props = (function (){var G__50657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__50658 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__50657,G__50658) : com.fulcrologic.fulcro.components.computed.call(null,G__50657,G__50658));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,249286893);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__50659 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__50659) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__50659));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1109187324);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__50664 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__50665 = null;
var count__50666 = (0);
var i__50667 = (0);
while(true){
if((i__50667 < count__50666)){
var c = chunk__50665.cljs$core$IIndexed$_nth$arity$2(null,i__50667);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__50798 = seq__50664;
var G__50799 = chunk__50665;
var G__50800 = count__50666;
var G__50801 = (i__50667 + (1));
seq__50664 = G__50798;
chunk__50665 = G__50799;
count__50666 = G__50800;
i__50667 = G__50801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50664);
if(temp__5804__auto__){
var seq__50664__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50664__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50664__$1);
var G__50802 = cljs.core.chunk_rest(seq__50664__$1);
var G__50803 = c__5568__auto__;
var G__50804 = cljs.core.count(c__5568__auto__);
var G__50805 = (0);
seq__50664 = G__50802;
chunk__50665 = G__50803;
count__50666 = G__50804;
i__50667 = G__50805;
continue;
} else {
var c = cljs.core.first(seq__50664__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__50806 = cljs.core.next(seq__50664__$1);
var G__50807 = null;
var G__50808 = (0);
var G__50809 = (0);
seq__50664 = G__50806;
chunk__50665 = G__50807;
count__50666 = G__50808;
i__50667 = G__50809;
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

var map__50670 = app__$1;
var map__50670__$1 = cljs.core.__destructure_map(map__50670);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50670__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__50671 = cljs.core.deref(runtime_atom);
var map__50671__$1 = cljs.core.__destructure_map(map__50671);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__50672 = indexes;
var map__50672__$1 = cljs.core.__destructure_map(map__50672);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__50673 = cljs.core.seq(classes);
var chunk__50674 = null;
var count__50675 = (0);
var i__50676 = (0);
while(true){
if((i__50676 < count__50675)){
var class$ = chunk__50674.cljs$core$IIndexed$_nth$arity$2(null,i__50676);
var seq__50689_50812 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__50691_50813 = null;
var count__50692_50814 = (0);
var i__50693_50815 = (0);
while(true){
if((i__50693_50815 < count__50692_50814)){
var component_50816 = chunk__50691_50813.cljs$core$IIndexed$_nth$arity$2(null,i__50693_50815);
var component_ident_50818 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50816) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50816));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50818,component_50816);


var G__50819 = seq__50689_50812;
var G__50820 = chunk__50691_50813;
var G__50821 = count__50692_50814;
var G__50822 = (i__50693_50815 + (1));
seq__50689_50812 = G__50819;
chunk__50691_50813 = G__50820;
count__50692_50814 = G__50821;
i__50693_50815 = G__50822;
continue;
} else {
var temp__5804__auto___50823 = cljs.core.seq(seq__50689_50812);
if(temp__5804__auto___50823){
var seq__50689_50824__$1 = temp__5804__auto___50823;
if(cljs.core.chunked_seq_QMARK_(seq__50689_50824__$1)){
var c__5568__auto___50825 = cljs.core.chunk_first(seq__50689_50824__$1);
var G__50826 = cljs.core.chunk_rest(seq__50689_50824__$1);
var G__50827 = c__5568__auto___50825;
var G__50828 = cljs.core.count(c__5568__auto___50825);
var G__50829 = (0);
seq__50689_50812 = G__50826;
chunk__50691_50813 = G__50827;
count__50692_50814 = G__50828;
i__50693_50815 = G__50829;
continue;
} else {
var component_50830 = cljs.core.first(seq__50689_50824__$1);
var component_ident_50831 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50830) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50830));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50831,component_50830);


var G__50832 = cljs.core.next(seq__50689_50824__$1);
var G__50833 = null;
var G__50834 = (0);
var G__50835 = (0);
seq__50689_50812 = G__50832;
chunk__50691_50813 = G__50833;
count__50692_50814 = G__50834;
i__50693_50815 = G__50835;
continue;
}
} else {
}
}
break;
}


var G__50836 = seq__50673;
var G__50837 = chunk__50674;
var G__50838 = count__50675;
var G__50839 = (i__50676 + (1));
seq__50673 = G__50836;
chunk__50674 = G__50837;
count__50675 = G__50838;
i__50676 = G__50839;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50673);
if(temp__5804__auto__){
var seq__50673__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50673__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50673__$1);
var G__50841 = cljs.core.chunk_rest(seq__50673__$1);
var G__50842 = c__5568__auto__;
var G__50843 = cljs.core.count(c__5568__auto__);
var G__50844 = (0);
seq__50673 = G__50841;
chunk__50674 = G__50842;
count__50675 = G__50843;
i__50676 = G__50844;
continue;
} else {
var class$ = cljs.core.first(seq__50673__$1);
var seq__50696_50845 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__50698_50846 = null;
var count__50699_50847 = (0);
var i__50700_50848 = (0);
while(true){
if((i__50700_50848 < count__50699_50847)){
var component_50849 = chunk__50698_50846.cljs$core$IIndexed$_nth$arity$2(null,i__50700_50848);
var component_ident_50850 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50849) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50849));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50850,component_50849);


var G__50851 = seq__50696_50845;
var G__50852 = chunk__50698_50846;
var G__50853 = count__50699_50847;
var G__50854 = (i__50700_50848 + (1));
seq__50696_50845 = G__50851;
chunk__50698_50846 = G__50852;
count__50699_50847 = G__50853;
i__50700_50848 = G__50854;
continue;
} else {
var temp__5804__auto___50855__$1 = cljs.core.seq(seq__50696_50845);
if(temp__5804__auto___50855__$1){
var seq__50696_50856__$1 = temp__5804__auto___50855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50696_50856__$1)){
var c__5568__auto___50858 = cljs.core.chunk_first(seq__50696_50856__$1);
var G__50859 = cljs.core.chunk_rest(seq__50696_50856__$1);
var G__50860 = c__5568__auto___50858;
var G__50861 = cljs.core.count(c__5568__auto___50858);
var G__50862 = (0);
seq__50696_50845 = G__50859;
chunk__50698_50846 = G__50860;
count__50699_50847 = G__50861;
i__50700_50848 = G__50862;
continue;
} else {
var component_50863 = cljs.core.first(seq__50696_50856__$1);
var component_ident_50864 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50863) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50863));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50864,component_50863);


var G__50865 = cljs.core.next(seq__50696_50856__$1);
var G__50866 = null;
var G__50867 = (0);
var G__50868 = (0);
seq__50696_50845 = G__50865;
chunk__50698_50846 = G__50866;
count__50699_50847 = G__50867;
i__50700_50848 = G__50868;
continue;
}
} else {
}
}
break;
}


var G__50869 = cljs.core.next(seq__50673__$1);
var G__50870 = null;
var G__50871 = (0);
var G__50872 = (0);
seq__50673 = G__50869;
chunk__50674 = G__50870;
count__50675 = G__50871;
i__50676 = G__50872;
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
var map__50706 = app__$1;
var map__50706__$1 = cljs.core.__destructure_map(map__50706);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50706__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__50707 = cljs.core.deref(runtime_atom);
var map__50707__$1 = cljs.core.__destructure_map(map__50707);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__50708 = indexes;
var map__50708__$1 = cljs.core.__destructure_map(map__50708);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50708__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50708__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50703_SHARP_,p2__50704_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__50703_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__50704_SHARP_) : class__GT_components.call(null,p2__50704_SHARP_)));
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
var map__50721 = app__$1;
var map__50721__$1 = cljs.core.__destructure_map(map__50721);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50721__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50721__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__50722 = cljs.core.deref(runtime_atom);
var map__50722__$1 = cljs.core.__destructure_map(map__50722);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__50723 = indexes;
var map__50723__$1 = cljs.core.__destructure_map(map__50723);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__50727 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__50727__$1 = cljs.core.__destructure_map(map__50727);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50727__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50727__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__50730_50876 = cljs.core.seq(limited_to_render);
var chunk__50732_50877 = null;
var count__50733_50878 = (0);
var i__50734_50879 = (0);
while(true){
if((i__50734_50879 < count__50733_50878)){
var c_50880 = chunk__50732_50877.cljs$core$IIndexed$_nth$arity$2(null,i__50734_50879);
var ident_50882 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_50880) : com.fulcrologic.fulcro.components.get_ident.call(null,c_50880));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_50882,c_50880);


var G__50883 = seq__50730_50876;
var G__50884 = chunk__50732_50877;
var G__50885 = count__50733_50878;
var G__50886 = (i__50734_50879 + (1));
seq__50730_50876 = G__50883;
chunk__50732_50877 = G__50884;
count__50733_50878 = G__50885;
i__50734_50879 = G__50886;
continue;
} else {
var temp__5804__auto___50887 = cljs.core.seq(seq__50730_50876);
if(temp__5804__auto___50887){
var seq__50730_50888__$1 = temp__5804__auto___50887;
if(cljs.core.chunked_seq_QMARK_(seq__50730_50888__$1)){
var c__5568__auto___50889 = cljs.core.chunk_first(seq__50730_50888__$1);
var G__50890 = cljs.core.chunk_rest(seq__50730_50888__$1);
var G__50891 = c__5568__auto___50889;
var G__50892 = cljs.core.count(c__5568__auto___50889);
var G__50893 = (0);
seq__50730_50876 = G__50890;
chunk__50732_50877 = G__50891;
count__50733_50878 = G__50892;
i__50734_50879 = G__50893;
continue;
} else {
var c_50894 = cljs.core.first(seq__50730_50888__$1);
var ident_50895 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_50894) : com.fulcrologic.fulcro.components.get_ident.call(null,c_50894));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_50895,c_50894);


var G__50897 = cljs.core.next(seq__50730_50888__$1);
var G__50898 = null;
var G__50899 = (0);
var G__50900 = (0);
seq__50730_50876 = G__50897;
chunk__50732_50877 = G__50898;
count__50733_50878 = G__50899;
i__50734_50879 = G__50900;
continue;
}
} else {
}
}
break;
}

var seq__50745 = cljs.core.seq(limited_idents);
var chunk__50746 = null;
var count__50747 = (0);
var i__50748 = (0);
while(true){
if((i__50748 < count__50747)){
var i = chunk__50746.cljs$core$IIndexed$_nth$arity$2(null,i__50748);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__50901 = seq__50745;
var G__50902 = chunk__50746;
var G__50903 = count__50747;
var G__50904 = (i__50748 + (1));
seq__50745 = G__50901;
chunk__50746 = G__50902;
count__50747 = G__50903;
i__50748 = G__50904;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50745);
if(temp__5804__auto__){
var seq__50745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50745__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50745__$1);
var G__50905 = cljs.core.chunk_rest(seq__50745__$1);
var G__50906 = c__5568__auto__;
var G__50907 = cljs.core.count(c__5568__auto__);
var G__50908 = (0);
seq__50745 = G__50905;
chunk__50746 = G__50906;
count__50747 = G__50907;
i__50748 = G__50908;
continue;
} else {
var i = cljs.core.first(seq__50745__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__50910 = cljs.core.next(seq__50745__$1);
var G__50911 = null;
var G__50912 = (0);
var G__50913 = (0);
seq__50745 = G__50910;
chunk__50746 = G__50911;
count__50747 = G__50912;
i__50748 = G__50913;
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
var map__50762 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__50762__$1 = cljs.core.__destructure_map(map__50762);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50762__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50762__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__50766_50914 = cljs.core.seq(all_idents);
var chunk__50767_50915 = null;
var count__50768_50916 = (0);
var i__50769_50917 = (0);
while(true){
if((i__50769_50917 < count__50768_50916)){
var i_50918 = chunk__50767_50915.cljs$core$IIndexed$_nth$arity$2(null,i__50769_50917);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_50918);


var G__50919 = seq__50766_50914;
var G__50920 = chunk__50767_50915;
var G__50921 = count__50768_50916;
var G__50922 = (i__50769_50917 + (1));
seq__50766_50914 = G__50919;
chunk__50767_50915 = G__50920;
count__50768_50916 = G__50921;
i__50769_50917 = G__50922;
continue;
} else {
var temp__5804__auto___50923 = cljs.core.seq(seq__50766_50914);
if(temp__5804__auto___50923){
var seq__50766_50924__$1 = temp__5804__auto___50923;
if(cljs.core.chunked_seq_QMARK_(seq__50766_50924__$1)){
var c__5568__auto___50925 = cljs.core.chunk_first(seq__50766_50924__$1);
var G__50926 = cljs.core.chunk_rest(seq__50766_50924__$1);
var G__50927 = c__5568__auto___50925;
var G__50928 = cljs.core.count(c__5568__auto___50925);
var G__50929 = (0);
seq__50766_50914 = G__50926;
chunk__50767_50915 = G__50927;
count__50768_50916 = G__50928;
i__50769_50917 = G__50929;
continue;
} else {
var i_50930 = cljs.core.first(seq__50766_50924__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_50930);


var G__50931 = cljs.core.next(seq__50766_50924__$1);
var G__50932 = null;
var G__50933 = (0);
var G__50934 = (0);
seq__50766_50914 = G__50931;
chunk__50767_50915 = G__50932;
count__50768_50916 = G__50933;
i__50769_50917 = G__50934;
continue;
}
} else {
}
}
break;
}

var seq__50775 = cljs.core.seq(extra_to_force);
var chunk__50776 = null;
var count__50777 = (0);
var i__50778 = (0);
while(true){
if((i__50778 < count__50777)){
var c = chunk__50776.cljs$core$IIndexed$_nth$arity$2(null,i__50778);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__50935 = seq__50775;
var G__50936 = chunk__50776;
var G__50937 = count__50777;
var G__50938 = (i__50778 + (1));
seq__50775 = G__50935;
chunk__50776 = G__50936;
count__50777 = G__50937;
i__50778 = G__50938;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50775);
if(temp__5804__auto__){
var seq__50775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50775__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50775__$1);
var G__50939 = cljs.core.chunk_rest(seq__50775__$1);
var G__50940 = c__5568__auto__;
var G__50941 = cljs.core.count(c__5568__auto__);
var G__50942 = (0);
seq__50775 = G__50939;
chunk__50776 = G__50940;
count__50777 = G__50941;
i__50778 = G__50942;
continue;
} else {
var c = cljs.core.first(seq__50775__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__50943 = cljs.core.next(seq__50775__$1);
var G__50944 = null;
var G__50945 = (0);
var G__50946 = (0);
seq__50775 = G__50943;
chunk__50776 = G__50944;
count__50777 = G__50945;
i__50778 = G__50946;
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
var G__50784 = arguments.length;
switch (G__50784) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__50787){
var map__50788 = p__50787;
var map__50788__$1 = cljs.core.__destructure_map(map__50788);
var options = map__50788__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50788__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50788__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e50790){var e = e50790;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,174962561);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
