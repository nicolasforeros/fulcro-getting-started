goog.provide('app.ui');

var options__49551__auto___57324 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__57294){
var map__57295 = p__57294;
var map__57295__$1 = cljs.core.__destructure_map(map__57295);
var props = map__57295__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57295__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57295__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57295__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__57296 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__57296__$1 = cljs.core.__destructure_map(map__57296);
var props = map__57296__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var map__57297 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__57297__$1 = cljs.core.__destructure_map(map__57297);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57297__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join(''),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (onDelete.cljs$core$IFn$_invoke$arity$1 ? onDelete.cljs$core$IFn$_invoke$arity$1(id) : onDelete.call(null,id));
})], null),"X"], null),null)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__49552__auto__){
var this__49553__auto__ = this;
var temp__5802__auto___57325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__49551__auto___57324,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___57325)){
var init_state__49554__auto___57326 = temp__5802__auto___57325;
(this__49553__auto__.state = (function (){var obj57299 = ({"fulcro$state":(function (){var G__57300 = this__49553__auto__;
var G__57301 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__49552__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__49552__auto__,"fulcro$value"));
return (init_state__49554__auto___57326.cljs$core$IFn$_invoke$arity$2 ? init_state__49554__auto___57326.cljs$core$IFn$_invoke$arity$2(G__57300,G__57301) : init_state__49554__auto___57326.call(null,G__57300,G__57301));
})()});
return obj57299;
})());
} else {
(this__49553__auto__.state = (function (){var obj57303 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj57303;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__49551__auto___57324);
app.ui.ui_person = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__49551__auto___57327 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","label","list/label",1746874574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__57305){
var map__57306 = p__57305;
var map__57306__$1 = cljs.core.__destructure_map(map__57306);
var props = map__57306__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57306__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57306__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57306__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__57307 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__57307__$1 = cljs.core.__destructure_map(map__57307);
var props = map__57307__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
var delete_person = (function (person_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57308 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","id","list/id",-1385338442),id,new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null);
return (app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1 ? app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1(G__57308) : app.mutations.delete_person.call(null,G__57308));
})()], null));
});
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57304_SHARP_){
var G__57309 = p1__57304_SHARP_;
var G__57310 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),delete_person], null);
return (app.ui.ui_person.cljs$core$IFn$_invoke$arity$2 ? app.ui.ui_person.cljs$core$IFn$_invoke$arity$2(G__57309,G__57310) : app.ui.ui_person.call(null,G__57309,G__57310));
}),people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__49552__auto__){
var this__49553__auto__ = this;
var temp__5802__auto___57328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__49551__auto___57327,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___57328)){
var init_state__49554__auto___57329 = temp__5802__auto___57328;
(this__49553__auto__.state = (function (){var obj57312 = ({"fulcro$state":(function (){var G__57313 = this__49553__auto__;
var G__57314 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__49552__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__49552__auto__,"fulcro$value"));
return (init_state__49554__auto___57329.cljs$core$IFn$_invoke$arity$2 ? init_state__49554__auto___57329.cljs$core$IFn$_invoke$arity$2(G__57313,G__57314) : init_state__49554__auto___57329.call(null,G__57313,G__57314));
})()});
return obj57312;
})());
} else {
(this__49553__auto__.state = (function (){var obj57316 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj57316;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__49551__auto___57327);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__49551__auto___57330 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friends","friends",-127631374),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),app.ui.PersonList,new cljs.core.Keyword(null,"enemies","enemies",2114285722),app.ui.PersonList], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__57317 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__57317__$1 = cljs.core.__destructure_map(map__57317);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57317__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57317__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Friends"]),(cljs.core.truth_(friends)?(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(friends) : app.ui.ui_person_list.call(null,friends)):null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Enemies"]),(cljs.core.truth_(enemies)?(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(enemies) : app.ui.ui_person_list.call(null,enemies)):null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__49552__auto__){
var this__49553__auto__ = this;
var temp__5802__auto___57331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__49551__auto___57330,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___57331)){
var init_state__49554__auto___57332 = temp__5802__auto___57331;
(this__49553__auto__.state = (function (){var obj57319 = ({"fulcro$state":(function (){var G__57320 = this__49553__auto__;
var G__57321 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__49552__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__49552__auto__,"fulcro$value"));
return (init_state__49554__auto___57332.cljs$core$IFn$_invoke$arity$2 ? init_state__49554__auto___57332.cljs$core$IFn$_invoke$arity$2(G__57320,G__57321) : init_state__49554__auto___57332.call(null,G__57320,G__57321));
})()});
return obj57319;
})());
} else {
(this__49553__auto__.state = (function (){var obj57323 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj57323;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__49551__auto___57330);

//# sourceMappingURL=app.ui.js.map
