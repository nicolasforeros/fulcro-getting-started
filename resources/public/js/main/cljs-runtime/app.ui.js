goog.provide('app.ui');

var options__35024__auto___45741 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__45695){
var map__45696 = p__45695;
var map__45696__$1 = cljs.core.__destructure_map(map__45696);
var props = map__45696__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45696__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45696__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45696__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__45697){
var map__45698 = p__45697;
var map__45698__$1 = cljs.core.__destructure_map(map__45698);
var params = map__45698__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45698__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","name","person/name",549444500),name,new cljs.core.Keyword("person","age","person/age",387881455),age], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__45699 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__45699__$1 = cljs.core.__destructure_map(map__45699);
var props = map__45699__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45699__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45699__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45699__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var map__45700 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__45700__$1 = cljs.core.__destructure_map(map__45700);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45700__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
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
app.ui.Person = (function app$ui$Person(props__35025__auto__){
var this__35026__auto__ = this;
var temp__5802__auto___45742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35024__auto___45741,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___45742)){
var init_state__35027__auto___45743 = temp__5802__auto___45742;
(this__35026__auto__.state = (function (){var obj45702 = ({"fulcro$state":(function (){var G__45703 = this__35026__auto__;
var G__45704 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__35025__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__35025__auto__,"fulcro$value"));
return (init_state__35027__auto___45743.cljs$core$IFn$_invoke$arity$2 ? init_state__35027__auto___45743.cljs$core$IFn$_invoke$arity$2(G__45703,G__45704) : init_state__35027__auto___45743.call(null,G__45703,G__45704));
})()});
return obj45702;
})());
} else {
(this__35026__auto__.state = (function (){var obj45706 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj45706;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__35024__auto___45741);
app.ui.ui_person = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__35024__auto___45744 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","label","list/label",1746874574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","people","list/people",1438389142),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__45708){
var map__45709 = p__45708;
var map__45709__$1 = cljs.core.__destructure_map(map__45709);
var props = map__45709__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45709__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45709__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45709__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__45710){
var map__45711 = p__45710;
var map__45711__$1 = cljs.core.__destructure_map(map__45711);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45711__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45711__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("list","id","list/id",-1385338442),id,new cljs.core.Keyword("list","label","list/label",1746874574),label,new cljs.core.Keyword("list","people","list/people",1438389142),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"friends","friends",-127631374)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45712 = app.ui.Person;
var G__45713 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Sally",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__45712,G__45713) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__45712,G__45713));
})(),(function (){var G__45714 = app.ui.Person;
var G__45715 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Joe",new cljs.core.Keyword(null,"age","age",-604307804),(22)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__45714,G__45715) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__45714,G__45715));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45716 = app.ui.Person;
var G__45717 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Fred",new cljs.core.Keyword(null,"age","age",-604307804),(11)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__45716,G__45717) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__45716,G__45717));
})(),(function (){var G__45718 = app.ui.Person;
var G__45719 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"Bobby",new cljs.core.Keyword(null,"age","age",-604307804),(55)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__45718,G__45719) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__45718,G__45719));
})()], null))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__45720 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__45720__$1 = cljs.core.__destructure_map(map__45720);
var props = map__45720__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45720__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45720__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45720__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
var delete_person = (function (person_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45721 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","id","list/id",-1385338442),id,new cljs.core.Keyword("person","id","person/id",-392409377),person_id], null);
return (app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1 ? app.mutations.delete_person.cljs$core$IFn$_invoke$arity$1(G__45721) : app.mutations.delete_person.call(null,G__45721));
})()], null));
});
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45707_SHARP_){
var G__45722 = p1__45707_SHARP_;
var G__45723 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),delete_person], null);
return (app.ui.ui_person.cljs$core$IFn$_invoke$arity$2 ? app.ui.ui_person.cljs$core$IFn$_invoke$arity$2(G__45722,G__45723) : app.ui.ui_person.call(null,G__45722,G__45723));
}),people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__35025__auto__){
var this__35026__auto__ = this;
var temp__5802__auto___45745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35024__auto___45744,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___45745)){
var init_state__35027__auto___45746 = temp__5802__auto___45745;
(this__35026__auto__.state = (function (){var obj45725 = ({"fulcro$state":(function (){var G__45726 = this__35026__auto__;
var G__45727 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__35025__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__35025__auto__,"fulcro$value"));
return (init_state__35027__auto___45746.cljs$core$IFn$_invoke$arity$2 ? init_state__35027__auto___45746.cljs$core$IFn$_invoke$arity$2(G__45726,G__45727) : init_state__35027__auto___45746.call(null,G__45726,G__45727));
})()});
return obj45725;
})());
} else {
(this__35026__auto__.state = (function (){var obj45729 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj45729;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__35024__auto___45744);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__35024__auto___45747 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friends","friends",-127631374),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(function (){var G__45730 = app.ui.PersonList;
var G__45731 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.Keyword(null,"label","label",1718410804),"Friends"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__45730,G__45731) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__45730,G__45731));
})(),new cljs.core.Keyword(null,"enemies","enemies",2114285722),(function (){var G__45732 = app.ui.PersonList;
var G__45733 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword(null,"label","label",1718410804),"Enemies"], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__45732,G__45733) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__45732,G__45733));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__45734 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__45734__$1 = cljs.core.__destructure_map(map__45734);
var friends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45734__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45734__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(friends) : app.ui.ui_person_list.call(null,friends)),(app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(enemies) : app.ui.ui_person_list.call(null,enemies))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__35025__auto__){
var this__35026__auto__ = this;
var temp__5802__auto___45748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35024__auto___45747,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___45748)){
var init_state__35027__auto___45749 = temp__5802__auto___45748;
(this__35026__auto__.state = (function (){var obj45736 = ({"fulcro$state":(function (){var G__45737 = this__35026__auto__;
var G__45738 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__35025__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__35025__auto__,"fulcro$value"));
return (init_state__35027__auto___45749.cljs$core$IFn$_invoke$arity$2 ? init_state__35027__auto___45749.cljs$core$IFn$_invoke$arity$2(G__45737,G__45738) : init_state__35027__auto___45749.call(null,G__45737,G__45738));
})()});
return obj45736;
})());
} else {
(this__35026__auto__.state = (function (){var obj45740 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj45740;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__35024__auto___45747);

//# sourceMappingURL=app.ui.js.map
