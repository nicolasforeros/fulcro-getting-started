goog.provide('app.ui');

var options__38139__auto___42049 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__42003){
var map__42004 = p__42003;
var map__42004__$1 = cljs.core.__destructure_map(map__42004);
var props = map__42004__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42004__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42004__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42004__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__42005){
var map__42006 = p__42005;
var map__42006__$1 = cljs.core.__destructure_map(map__42006);
var params = map__42006__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42006__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42007 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42007__$1 = cljs.core.__destructure_map(map__42007);
var props = map__42007__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42007__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42007__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42007__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var map__42008 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__42008__$1 = cljs.core.__destructure_map(map__42008);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42008__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
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
app.ui.Person = (function app$ui$Person(props__38140__auto__){
var this__38141__auto__ = this;
var temp__5802__auto___42050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__38139__auto___42049,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___42050)){
var init_state__38142__auto___42051 = temp__5802__auto___42050;
(this__38141__auto__.state = (function (){var obj42010 = ({"fulcro$state":(function (){var G__42011 = this__38141__auto__;
var G__42012 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__38140__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__38140__auto__,"fulcro$value"));
return (init_state__38142__auto___42051.cljs$core$IFn$_invoke$arity$2 ? init_state__38142__auto___42051.cljs$core$IFn$_invoke$arity$2(G__42011,G__42012) : init_state__38142__auto___42051.call(null,G__42011,G__42012));
})()});
return obj42010;
})());
} else {
(this__38141__auto__.state = (function (){var obj42014 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj42014;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__38139__auto___42049);
app.ui.ui_person = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__38139__auto___42052 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","label","list/label",1746874574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__42016){
var map__42017 = p__42016;
var map__42017__$1 = cljs.core.__destructure_map(map__42017);
var props = map__42017__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42017__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42017__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42017__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__42018){
var map__42019 = p__42018;
var map__42019__$1 = cljs.core.__destructure_map(map__42019);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42019__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42019__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("list","id","list/id",-1385338442),id,new cljs.core.Keyword("list","label","list/label",1746874574),label,new cljs.core.Keyword("list","people","list/people",1438389142),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"friends","friends",-127631374)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42020 = app.ui.Person;
var G__42021 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Sally",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42020,G__42021) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42020,G__42021));
})(),(function (){var G__42022 = app.ui.Person;
var G__42023 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Joe",new cljs.core.Keyword(null,"age","age",-604307804),(22)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42022,G__42023) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42022,G__42023));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42024 = app.ui.Person;
var G__42025 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Fred",new cljs.core.Keyword(null,"age","age",-604307804),(11)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42024,G__42025) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42024,G__42025));
})(),(function (){var G__42026 = app.ui.Person;
var G__42027 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"Bobby",new cljs.core.Keyword(null,"age","age",-604307804),(55)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42026,G__42027) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42026,G__42027));
})()], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42028 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42028__$1 = cljs.core.__destructure_map(map__42028);
var props = map__42028__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42028__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42028__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42028__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
var delete_person = (function (person_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42029 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","id","list/id",-1385338442),id,new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null);
return (app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1 ? app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1(G__42029) : app.mutations.delete_person.call(null,G__42029));
})()], null));
});
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42015_SHARP_){
var G__42030 = p1__42015_SHARP_;
var G__42031 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),delete_person], null);
return (app.ui.ui_person.cljs$core$IFn$_invoke$arity$2 ? app.ui.ui_person.cljs$core$IFn$_invoke$arity$2(G__42030,G__42031) : app.ui.ui_person.call(null,G__42030,G__42031));
}),people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__38140__auto__){
var this__38141__auto__ = this;
var temp__5802__auto___42053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__38139__auto___42052,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___42053)){
var init_state__38142__auto___42054 = temp__5802__auto___42053;
(this__38141__auto__.state = (function (){var obj42033 = ({"fulcro$state":(function (){var G__42034 = this__38141__auto__;
var G__42035 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__38140__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__38140__auto__,"fulcro$value"));
return (init_state__38142__auto___42054.cljs$core$IFn$_invoke$arity$2 ? init_state__38142__auto___42054.cljs$core$IFn$_invoke$arity$2(G__42034,G__42035) : init_state__38142__auto___42054.call(null,G__42034,G__42035));
})()});
return obj42033;
})());
} else {
(this__38141__auto__.state = (function (){var obj42037 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj42037;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__38139__auto___42052);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__38139__auto___42055 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friends","friends",-127631374),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(function (){var G__42038 = app.ui.PersonList;
var G__42039 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.Keyword(null,"label","label",1718410804),"Friends"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42038,G__42039) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42038,G__42039));
})(),new cljs.core.Keyword(null,"enemies","enemies",2114285722),(function (){var G__42040 = app.ui.PersonList;
var G__42041 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword(null,"label","label",1718410804),"Enemies"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42040,G__42041) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42040,G__42041));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42042 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42042__$1 = cljs.core.__destructure_map(map__42042);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42042__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42042__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(friends) : app.ui.ui_person_list.call(null,friends)),(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(enemies) : app.ui.ui_person_list.call(null,enemies))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__38140__auto__){
var this__38141__auto__ = this;
var temp__5802__auto___42056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__38139__auto___42055,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___42056)){
var init_state__38142__auto___42057 = temp__5802__auto___42056;
(this__38141__auto__.state = (function (){var obj42044 = ({"fulcro$state":(function (){var G__42045 = this__38141__auto__;
var G__42046 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__38140__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__38140__auto__,"fulcro$value"));
return (init_state__38142__auto___42057.cljs$core$IFn$_invoke$arity$2 ? init_state__38142__auto___42057.cljs$core$IFn$_invoke$arity$2(G__42045,G__42046) : init_state__38142__auto___42057.call(null,G__42045,G__42046));
})()});
return obj42044;
})());
} else {
(this__38141__auto__.state = (function (){var obj42048 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj42048;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__38139__auto___42055);

//# sourceMappingURL=app.ui.js.map
