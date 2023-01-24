goog.provide('app.ui');

var options__35024__auto___41652 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__41629 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__41629__$1 = cljs.core.__destructure_map(map__41629);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41629__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41629__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join('')], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__35025__auto__){
var this__35026__auto__ = this;
var temp__5802__auto___41653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35024__auto___41652,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___41653)){
var init_state__35027__auto___41654 = temp__5802__auto___41653;
(this__35026__auto__.state = (function (){var obj41631 = ({"fulcro$state":(function (){var G__41632 = this__35026__auto__;
var G__41633 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__35025__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__35025__auto__,"fulcro$value"));
return (init_state__35027__auto___41654.cljs$core$IFn$_invoke$arity$2 ? init_state__35027__auto___41654.cljs$core$IFn$_invoke$arity$2(G__41632,G__41633) : init_state__35027__auto___41654.call(null,G__41632,G__41633));
})()});
return obj41631;
})());
} else {
(this__35026__auto__.state = (function (){var obj41635 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj41635;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__35024__auto___41652);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__35024__auto___41655 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__41636 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__41636__$1 = cljs.core.__destructure_map(map__41636);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41636__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41636__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.ui_person,people)], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__35025__auto__){
var this__35026__auto__ = this;
var temp__5802__auto___41656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35024__auto___41655,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___41656)){
var init_state__35027__auto___41657 = temp__5802__auto___41656;
(this__35026__auto__.state = (function (){var obj41638 = ({"fulcro$state":(function (){var G__41639 = this__35026__auto__;
var G__41640 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__35025__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__35025__auto__,"fulcro$value"));
return (init_state__35027__auto___41657.cljs$core$IFn$_invoke$arity$2 ? init_state__35027__auto___41657.cljs$core$IFn$_invoke$arity$2(G__41639,G__41640) : init_state__35027__auto___41657.call(null,G__41639,G__41640));
})()});
return obj41638;
})());
} else {
(this__35026__auto__.state = (function (){var obj41642 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj41642;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__35024__auto___41655);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__35024__auto___41658 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__41643 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__41643__$1 = cljs.core.__destructure_map(map__41643);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41643__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var ui_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),"Friends",new cljs.core.Keyword("list","people","list/people",1438389142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Sally",new cljs.core.Keyword("person","age","person/age",387881455),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Joe",new cljs.core.Keyword("person","age","person/age",387881455),(22)], null)], null)], null),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),"Enemies",new cljs.core.Keyword("list","people","list/people",1438389142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Fred",new cljs.core.Keyword("person","age","person/age",387881455),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Bobby",new cljs.core.Keyword("person","age","person/age",387881455),(55)], null)], null)], null)], null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41644 = new cljs.core.Keyword(null,"friends","friends",-127631374).cljs$core$IFn$_invoke$arity$1(ui_data);
return (app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(G__41644) : app.ui.ui_person_list.call(null,G__41644));
})(),(function (){var G__41645 = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(ui_data);
return (app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(G__41645) : app.ui.ui_person_list.call(null,G__41645));
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__35025__auto__){
var this__35026__auto__ = this;
var temp__5802__auto___41659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35024__auto___41658,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___41659)){
var init_state__35027__auto___41660 = temp__5802__auto___41659;
(this__35026__auto__.state = (function (){var obj41647 = ({"fulcro$state":(function (){var G__41648 = this__35026__auto__;
var G__41649 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__35025__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__35025__auto__,"fulcro$value"));
return (init_state__35027__auto___41660.cljs$core$IFn$_invoke$arity$2 ? init_state__35027__auto___41660.cljs$core$IFn$_invoke$arity$2(G__41648,G__41649) : init_state__35027__auto___41660.call(null,G__41648,G__41649));
})()});
return obj41647;
})());
} else {
(this__35026__auto__.state = (function (){var obj41651 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj41651;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__35024__auto___41658);

//# sourceMappingURL=app.ui.js.map
