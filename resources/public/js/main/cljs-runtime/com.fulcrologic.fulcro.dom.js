goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__50495){
var vec__50496 = p__50495;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50496,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50496,(1),null);
var pair = vec__50496;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__50501){
var vec__50502 = p__50501;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(1),null);
var pair = vec__50502;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__50521){
var vec__50522 = p__50521;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50522,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50522,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__50525 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50525,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__50525;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__50544 = arguments.length;
switch (G__50544) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__50550 = component.refs;
var G__50550__$1 = (((G__50550 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__50550,name));
if((G__50550__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__50550__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__50555 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__50557 = (function (){var G__50559 = r;
if((G__50559 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__50559);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__50557) : ref.call(null,G__50557));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__50555) : factory.call(null,G__50555));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__50571 = arguments.length;
switch (G__50571) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___53038 = arguments.length;
var i__5770__auto___53039 = (0);
while(true){
if((i__5770__auto___53039 < len__5769__auto___53038)){
args_arr__5794__auto__.push((arguments[i__5770__auto___53039]));

var G__53040 = (i__5770__auto___53039 + (1));
i__5770__auto___53039 = G__53040;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq50567){
var G__50568 = cljs.core.first(seq50567);
var seq50567__$1 = cljs.core.next(seq50567);
var G__50569 = cljs.core.first(seq50567__$1);
var seq50567__$2 = cljs.core.next(seq50567__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50568,G__50569,seq50567__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__50618 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50618) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__50618));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x50635_53043 = ctor.prototype;
(x50635_53043.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x50635_53043.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__50622_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__50622_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-284127788,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x50635_53043.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__53044__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__53044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53045__i = 0, G__53045__a = new Array(arguments.length -  0);
while (G__53045__i < G__53045__a.length) {G__53045__a[G__53045__i] = arguments[G__53045__i + 0]; ++G__53045__i;}
  args = new cljs.core.IndexedSeq(G__53045__a,0,null);
} 
return G__53044__delegate.call(this,args);};
G__53044.cljs$lang$maxFixedArity = 0;
G__53044.cljs$lang$applyTo = (function (arglist__53046){
var args = cljs.core.seq(arglist__53046);
return G__53044__delegate(args);
});
G__53044.cljs$core$IFn$_invoke$arity$variadic = G__53044__delegate;
return G__53044;
})()
;
return (function() { 
var G__53047__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__53047 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__53048__i = 0, G__53048__a = new Array(arguments.length -  1);
while (G__53048__i < G__53048__a.length) {G__53048__a[G__53048__i] = arguments[G__53048__i + 1]; ++G__53048__i;}
  children = new cljs.core.IndexedSeq(G__53048__a,0,null);
} 
return G__53047__delegate.call(this,props,children);};
G__53047.cljs$lang$maxFixedArity = 1;
G__53047.cljs$lang$applyTo = (function (arglist__53049){
var props = cljs.core.first(arglist__53049);
var children = cljs.core.rest(arglist__53049);
return G__53047__delegate(props,children);
});
G__53047.cljs$core$IFn$_invoke$arity$variadic = G__53047__delegate;
return G__53047;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__50681 = tag;
switch (G__50681) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50681)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__50689 = arguments.length;
switch (G__50689) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__50692 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__50693 = cljs.core.seq(vec__50692);
var first__50694 = cljs.core.first(seq__50693);
var seq__50693__$1 = cljs.core.next(seq__50693);
var head = first__50694;
var tail = seq__50693__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__50696 = (function (){var G__50697 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50697,tail);

return G__50697;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50696) : f.call(null,G__50696));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__50700 = (function (){var G__50703 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50703,args);

return G__50703;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50700) : f.call(null,G__50700));
} else {
if(cljs.core.object_QMARK_(head)){
var G__50708 = (function (){var G__50709 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50709,tail);

return G__50709;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50708) : f.call(null,G__50708));
} else {
if(cljs.core.map_QMARK_(head)){
var G__50711 = (function (){var G__50712 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__50712,tail);

return G__50712;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50711) : f.call(null,G__50711));
} else {
var G__50714 = (function (){var G__50715 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50715,args);

return G__50715;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50714) : f.call(null,G__50714));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__50723 = arguments.length;
switch (G__50723) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__50733 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__50734 = cljs.core.seq(vec__50733);
var first__50735 = cljs.core.first(seq__50734);
var seq__50734__$1 = cljs.core.next(seq__50734);
var head = first__50735;
var tail = seq__50734__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__50736 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50736,tail);

return G__50736;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__50737 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50737,args);

return G__50737;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__50738 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50738,tail);

return G__50738;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__50742 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__50742,tail);

return G__50742;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__50748 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__50748,args);

return G__50748;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53057 = arguments.length;
var i__5770__auto___53058 = (0);
while(true){
if((i__5770__auto___53058 < len__5769__auto___53057)){
args__5775__auto__.push((arguments[i__5770__auto___53058]));

var G__53059 = (i__5770__auto___53058 + (1));
i__5770__auto___53058 = G__53059;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50787 = conformed_args__49162__auto__;
var map__50787__$1 = cljs.core.__destructure_map(map__50787);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq50781){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50781));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53060 = arguments.length;
var i__5770__auto___53061 = (0);
while(true){
if((i__5770__auto___53061 < len__5769__auto___53060)){
args__5775__auto__.push((arguments[i__5770__auto___53061]));

var G__53062 = (i__5770__auto___53061 + (1));
i__5770__auto___53061 = G__53062;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50797 = conformed_args__49162__auto__;
var map__50797__$1 = cljs.core.__destructure_map(map__50797);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50797__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50797__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq50792){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50792));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53064 = arguments.length;
var i__5770__auto___53065 = (0);
while(true){
if((i__5770__auto___53065 < len__5769__auto___53064)){
args__5775__auto__.push((arguments[i__5770__auto___53065]));

var G__53067 = (i__5770__auto___53065 + (1));
i__5770__auto___53065 = G__53067;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50810 = conformed_args__49162__auto__;
var map__50810__$1 = cljs.core.__destructure_map(map__50810);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq50803){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53070 = arguments.length;
var i__5770__auto___53071 = (0);
while(true){
if((i__5770__auto___53071 < len__5769__auto___53070)){
args__5775__auto__.push((arguments[i__5770__auto___53071]));

var G__53072 = (i__5770__auto___53071 + (1));
i__5770__auto___53071 = G__53072;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50815 = conformed_args__49162__auto__;
var map__50815__$1 = cljs.core.__destructure_map(map__50815);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq50814){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50814));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53073 = arguments.length;
var i__5770__auto___53074 = (0);
while(true){
if((i__5770__auto___53074 < len__5769__auto___53073)){
args__5775__auto__.push((arguments[i__5770__auto___53074]));

var G__53075 = (i__5770__auto___53074 + (1));
i__5770__auto___53074 = G__53075;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50831 = conformed_args__49162__auto__;
var map__50831__$1 = cljs.core.__destructure_map(map__50831);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq50822){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53076 = arguments.length;
var i__5770__auto___53077 = (0);
while(true){
if((i__5770__auto___53077 < len__5769__auto___53076)){
args__5775__auto__.push((arguments[i__5770__auto___53077]));

var G__53078 = (i__5770__auto___53077 + (1));
i__5770__auto___53077 = G__53078;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50835 = conformed_args__49162__auto__;
var map__50835__$1 = cljs.core.__destructure_map(map__50835);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq50833){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50833));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53079 = arguments.length;
var i__5770__auto___53080 = (0);
while(true){
if((i__5770__auto___53080 < len__5769__auto___53079)){
args__5775__auto__.push((arguments[i__5770__auto___53080]));

var G__53081 = (i__5770__auto___53080 + (1));
i__5770__auto___53080 = G__53081;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50844 = conformed_args__49162__auto__;
var map__50844__$1 = cljs.core.__destructure_map(map__50844);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq50839){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50839));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53082 = arguments.length;
var i__5770__auto___53083 = (0);
while(true){
if((i__5770__auto___53083 < len__5769__auto___53082)){
args__5775__auto__.push((arguments[i__5770__auto___53083]));

var G__53084 = (i__5770__auto___53083 + (1));
i__5770__auto___53083 = G__53084;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50852 = conformed_args__49162__auto__;
var map__50852__$1 = cljs.core.__destructure_map(map__50852);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq50848){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50848));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53087 = arguments.length;
var i__5770__auto___53088 = (0);
while(true){
if((i__5770__auto___53088 < len__5769__auto___53087)){
args__5775__auto__.push((arguments[i__5770__auto___53088]));

var G__53089 = (i__5770__auto___53088 + (1));
i__5770__auto___53088 = G__53089;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50863 = conformed_args__49162__auto__;
var map__50863__$1 = cljs.core.__destructure_map(map__50863);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq50856){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50856));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53090 = arguments.length;
var i__5770__auto___53091 = (0);
while(true){
if((i__5770__auto___53091 < len__5769__auto___53090)){
args__5775__auto__.push((arguments[i__5770__auto___53091]));

var G__53092 = (i__5770__auto___53091 + (1));
i__5770__auto___53091 = G__53092;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50872 = conformed_args__49162__auto__;
var map__50872__$1 = cljs.core.__destructure_map(map__50872);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq50865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50865));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53093 = arguments.length;
var i__5770__auto___53094 = (0);
while(true){
if((i__5770__auto___53094 < len__5769__auto___53093)){
args__5775__auto__.push((arguments[i__5770__auto___53094]));

var G__53095 = (i__5770__auto___53094 + (1));
i__5770__auto___53094 = G__53095;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50887 = conformed_args__49162__auto__;
var map__50887__$1 = cljs.core.__destructure_map(map__50887);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq50884){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50884));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53096 = arguments.length;
var i__5770__auto___53097 = (0);
while(true){
if((i__5770__auto___53097 < len__5769__auto___53096)){
args__5775__auto__.push((arguments[i__5770__auto___53097]));

var G__53098 = (i__5770__auto___53097 + (1));
i__5770__auto___53097 = G__53098;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50896 = conformed_args__49162__auto__;
var map__50896__$1 = cljs.core.__destructure_map(map__50896);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq50891){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50891));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53099 = arguments.length;
var i__5770__auto___53100 = (0);
while(true){
if((i__5770__auto___53100 < len__5769__auto___53099)){
args__5775__auto__.push((arguments[i__5770__auto___53100]));

var G__53101 = (i__5770__auto___53100 + (1));
i__5770__auto___53100 = G__53101;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50903 = conformed_args__49162__auto__;
var map__50903__$1 = cljs.core.__destructure_map(map__50903);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq50898){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50898));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53104 = arguments.length;
var i__5770__auto___53105 = (0);
while(true){
if((i__5770__auto___53105 < len__5769__auto___53104)){
args__5775__auto__.push((arguments[i__5770__auto___53105]));

var G__53106 = (i__5770__auto___53105 + (1));
i__5770__auto___53105 = G__53106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50906 = conformed_args__49162__auto__;
var map__50906__$1 = cljs.core.__destructure_map(map__50906);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq50905){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50905));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53107 = arguments.length;
var i__5770__auto___53108 = (0);
while(true){
if((i__5770__auto___53108 < len__5769__auto___53107)){
args__5775__auto__.push((arguments[i__5770__auto___53108]));

var G__53109 = (i__5770__auto___53108 + (1));
i__5770__auto___53108 = G__53109;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50916 = conformed_args__49162__auto__;
var map__50916__$1 = cljs.core.__destructure_map(map__50916);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq50915){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50915));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53112 = arguments.length;
var i__5770__auto___53113 = (0);
while(true){
if((i__5770__auto___53113 < len__5769__auto___53112)){
args__5775__auto__.push((arguments[i__5770__auto___53113]));

var G__53114 = (i__5770__auto___53113 + (1));
i__5770__auto___53113 = G__53114;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50927 = conformed_args__49162__auto__;
var map__50927__$1 = cljs.core.__destructure_map(map__50927);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq50919){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50919));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53116 = arguments.length;
var i__5770__auto___53117 = (0);
while(true){
if((i__5770__auto___53117 < len__5769__auto___53116)){
args__5775__auto__.push((arguments[i__5770__auto___53117]));

var G__53118 = (i__5770__auto___53117 + (1));
i__5770__auto___53117 = G__53118;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50935 = conformed_args__49162__auto__;
var map__50935__$1 = cljs.core.__destructure_map(map__50935);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq50928){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50928));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53119 = arguments.length;
var i__5770__auto___53120 = (0);
while(true){
if((i__5770__auto___53120 < len__5769__auto___53119)){
args__5775__auto__.push((arguments[i__5770__auto___53120]));

var G__53121 = (i__5770__auto___53120 + (1));
i__5770__auto___53120 = G__53121;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50946 = conformed_args__49162__auto__;
var map__50946__$1 = cljs.core.__destructure_map(map__50946);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50946__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50946__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50946__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq50940){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50940));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53122 = arguments.length;
var i__5770__auto___53123 = (0);
while(true){
if((i__5770__auto___53123 < len__5769__auto___53122)){
args__5775__auto__.push((arguments[i__5770__auto___53123]));

var G__53124 = (i__5770__auto___53123 + (1));
i__5770__auto___53123 = G__53124;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50956 = conformed_args__49162__auto__;
var map__50956__$1 = cljs.core.__destructure_map(map__50956);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq50947){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50947));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53127 = arguments.length;
var i__5770__auto___53128 = (0);
while(true){
if((i__5770__auto___53128 < len__5769__auto___53127)){
args__5775__auto__.push((arguments[i__5770__auto___53128]));

var G__53129 = (i__5770__auto___53128 + (1));
i__5770__auto___53128 = G__53129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50967 = conformed_args__49162__auto__;
var map__50967__$1 = cljs.core.__destructure_map(map__50967);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq50962){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50962));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53131 = arguments.length;
var i__5770__auto___53133 = (0);
while(true){
if((i__5770__auto___53133 < len__5769__auto___53131)){
args__5775__auto__.push((arguments[i__5770__auto___53133]));

var G__53134 = (i__5770__auto___53133 + (1));
i__5770__auto___53133 = G__53134;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50976 = conformed_args__49162__auto__;
var map__50976__$1 = cljs.core.__destructure_map(map__50976);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq50969){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50969));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53136 = arguments.length;
var i__5770__auto___53137 = (0);
while(true){
if((i__5770__auto___53137 < len__5769__auto___53136)){
args__5775__auto__.push((arguments[i__5770__auto___53137]));

var G__53138 = (i__5770__auto___53137 + (1));
i__5770__auto___53137 = G__53138;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50982 = conformed_args__49162__auto__;
var map__50982__$1 = cljs.core.__destructure_map(map__50982);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq50978){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53139 = arguments.length;
var i__5770__auto___53140 = (0);
while(true){
if((i__5770__auto___53140 < len__5769__auto___53139)){
args__5775__auto__.push((arguments[i__5770__auto___53140]));

var G__53141 = (i__5770__auto___53140 + (1));
i__5770__auto___53140 = G__53141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50999 = conformed_args__49162__auto__;
var map__50999__$1 = cljs.core.__destructure_map(map__50999);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq50988){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50988));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53142 = arguments.length;
var i__5770__auto___53143 = (0);
while(true){
if((i__5770__auto___53143 < len__5769__auto___53142)){
args__5775__auto__.push((arguments[i__5770__auto___53143]));

var G__53144 = (i__5770__auto___53143 + (1));
i__5770__auto___53143 = G__53144;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51040 = conformed_args__49162__auto__;
var map__51040__$1 = cljs.core.__destructure_map(map__51040);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq51000){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53145 = arguments.length;
var i__5770__auto___53146 = (0);
while(true){
if((i__5770__auto___53146 < len__5769__auto___53145)){
args__5775__auto__.push((arguments[i__5770__auto___53146]));

var G__53147 = (i__5770__auto___53146 + (1));
i__5770__auto___53146 = G__53147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51088 = conformed_args__49162__auto__;
var map__51088__$1 = cljs.core.__destructure_map(map__51088);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq51070){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51070));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53148 = arguments.length;
var i__5770__auto___53149 = (0);
while(true){
if((i__5770__auto___53149 < len__5769__auto___53148)){
args__5775__auto__.push((arguments[i__5770__auto___53149]));

var G__53150 = (i__5770__auto___53149 + (1));
i__5770__auto___53149 = G__53150;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51093 = conformed_args__49162__auto__;
var map__51093__$1 = cljs.core.__destructure_map(map__51093);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq51091){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51091));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53151 = arguments.length;
var i__5770__auto___53152 = (0);
while(true){
if((i__5770__auto___53152 < len__5769__auto___53151)){
args__5775__auto__.push((arguments[i__5770__auto___53152]));

var G__53153 = (i__5770__auto___53152 + (1));
i__5770__auto___53152 = G__53153;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51100 = conformed_args__49162__auto__;
var map__51100__$1 = cljs.core.__destructure_map(map__51100);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq51096){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51096));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53154 = arguments.length;
var i__5770__auto___53155 = (0);
while(true){
if((i__5770__auto___53155 < len__5769__auto___53154)){
args__5775__auto__.push((arguments[i__5770__auto___53155]));

var G__53156 = (i__5770__auto___53155 + (1));
i__5770__auto___53155 = G__53156;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51104 = conformed_args__49162__auto__;
var map__51104__$1 = cljs.core.__destructure_map(map__51104);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq51103){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51103));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53158 = arguments.length;
var i__5770__auto___53159 = (0);
while(true){
if((i__5770__auto___53159 < len__5769__auto___53158)){
args__5775__auto__.push((arguments[i__5770__auto___53159]));

var G__53160 = (i__5770__auto___53159 + (1));
i__5770__auto___53159 = G__53160;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51112 = conformed_args__49162__auto__;
var map__51112__$1 = cljs.core.__destructure_map(map__51112);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51112__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51112__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51112__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq51107){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51107));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53165 = arguments.length;
var i__5770__auto___53166 = (0);
while(true){
if((i__5770__auto___53166 < len__5769__auto___53165)){
args__5775__auto__.push((arguments[i__5770__auto___53166]));

var G__53167 = (i__5770__auto___53166 + (1));
i__5770__auto___53166 = G__53167;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51114 = conformed_args__49162__auto__;
var map__51114__$1 = cljs.core.__destructure_map(map__51114);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq51113){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51113));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53169 = arguments.length;
var i__5770__auto___53170 = (0);
while(true){
if((i__5770__auto___53170 < len__5769__auto___53169)){
args__5775__auto__.push((arguments[i__5770__auto___53170]));

var G__53175 = (i__5770__auto___53170 + (1));
i__5770__auto___53170 = G__53175;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51121 = conformed_args__49162__auto__;
var map__51121__$1 = cljs.core.__destructure_map(map__51121);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq51118){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51118));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53181 = arguments.length;
var i__5770__auto___53182 = (0);
while(true){
if((i__5770__auto___53182 < len__5769__auto___53181)){
args__5775__auto__.push((arguments[i__5770__auto___53182]));

var G__53183 = (i__5770__auto___53182 + (1));
i__5770__auto___53182 = G__53183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51128 = conformed_args__49162__auto__;
var map__51128__$1 = cljs.core.__destructure_map(map__51128);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq51125){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51125));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53189 = arguments.length;
var i__5770__auto___53191 = (0);
while(true){
if((i__5770__auto___53191 < len__5769__auto___53189)){
args__5775__auto__.push((arguments[i__5770__auto___53191]));

var G__53192 = (i__5770__auto___53191 + (1));
i__5770__auto___53191 = G__53192;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51134 = conformed_args__49162__auto__;
var map__51134__$1 = cljs.core.__destructure_map(map__51134);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq51129){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51129));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53193 = arguments.length;
var i__5770__auto___53194 = (0);
while(true){
if((i__5770__auto___53194 < len__5769__auto___53193)){
args__5775__auto__.push((arguments[i__5770__auto___53194]));

var G__53195 = (i__5770__auto___53194 + (1));
i__5770__auto___53194 = G__53195;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51139 = conformed_args__49162__auto__;
var map__51139__$1 = cljs.core.__destructure_map(map__51139);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq51136){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51136));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53196 = arguments.length;
var i__5770__auto___53197 = (0);
while(true){
if((i__5770__auto___53197 < len__5769__auto___53196)){
args__5775__auto__.push((arguments[i__5770__auto___53197]));

var G__53198 = (i__5770__auto___53197 + (1));
i__5770__auto___53197 = G__53198;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51155 = conformed_args__49162__auto__;
var map__51155__$1 = cljs.core.__destructure_map(map__51155);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq51140){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51140));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53200 = arguments.length;
var i__5770__auto___53201 = (0);
while(true){
if((i__5770__auto___53201 < len__5769__auto___53200)){
args__5775__auto__.push((arguments[i__5770__auto___53201]));

var G__53202 = (i__5770__auto___53201 + (1));
i__5770__auto___53201 = G__53202;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51161 = conformed_args__49162__auto__;
var map__51161__$1 = cljs.core.__destructure_map(map__51161);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq51158){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51158));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53203 = arguments.length;
var i__5770__auto___53204 = (0);
while(true){
if((i__5770__auto___53204 < len__5769__auto___53203)){
args__5775__auto__.push((arguments[i__5770__auto___53204]));

var G__53205 = (i__5770__auto___53204 + (1));
i__5770__auto___53204 = G__53205;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51167 = conformed_args__49162__auto__;
var map__51167__$1 = cljs.core.__destructure_map(map__51167);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq51164){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51164));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53208 = arguments.length;
var i__5770__auto___53209 = (0);
while(true){
if((i__5770__auto___53209 < len__5769__auto___53208)){
args__5775__auto__.push((arguments[i__5770__auto___53209]));

var G__53210 = (i__5770__auto___53209 + (1));
i__5770__auto___53209 = G__53210;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51172 = conformed_args__49162__auto__;
var map__51172__$1 = cljs.core.__destructure_map(map__51172);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq51169){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53212 = arguments.length;
var i__5770__auto___53213 = (0);
while(true){
if((i__5770__auto___53213 < len__5769__auto___53212)){
args__5775__auto__.push((arguments[i__5770__auto___53213]));

var G__53214 = (i__5770__auto___53213 + (1));
i__5770__auto___53213 = G__53214;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51177 = conformed_args__49162__auto__;
var map__51177__$1 = cljs.core.__destructure_map(map__51177);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq51175){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51175));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53215 = arguments.length;
var i__5770__auto___53216 = (0);
while(true){
if((i__5770__auto___53216 < len__5769__auto___53215)){
args__5775__auto__.push((arguments[i__5770__auto___53216]));

var G__53217 = (i__5770__auto___53216 + (1));
i__5770__auto___53216 = G__53217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51182 = conformed_args__49162__auto__;
var map__51182__$1 = cljs.core.__destructure_map(map__51182);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq51180){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51180));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53218 = arguments.length;
var i__5770__auto___53219 = (0);
while(true){
if((i__5770__auto___53219 < len__5769__auto___53218)){
args__5775__auto__.push((arguments[i__5770__auto___53219]));

var G__53220 = (i__5770__auto___53219 + (1));
i__5770__auto___53219 = G__53220;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51188 = conformed_args__49162__auto__;
var map__51188__$1 = cljs.core.__destructure_map(map__51188);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq51185){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51185));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53221 = arguments.length;
var i__5770__auto___53222 = (0);
while(true){
if((i__5770__auto___53222 < len__5769__auto___53221)){
args__5775__auto__.push((arguments[i__5770__auto___53222]));

var G__53223 = (i__5770__auto___53222 + (1));
i__5770__auto___53222 = G__53223;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51193 = conformed_args__49162__auto__;
var map__51193__$1 = cljs.core.__destructure_map(map__51193);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq51190){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51190));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53226 = arguments.length;
var i__5770__auto___53227 = (0);
while(true){
if((i__5770__auto___53227 < len__5769__auto___53226)){
args__5775__auto__.push((arguments[i__5770__auto___53227]));

var G__53228 = (i__5770__auto___53227 + (1));
i__5770__auto___53227 = G__53228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51198 = conformed_args__49162__auto__;
var map__51198__$1 = cljs.core.__destructure_map(map__51198);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq51195){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51195));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53231 = arguments.length;
var i__5770__auto___53232 = (0);
while(true){
if((i__5770__auto___53232 < len__5769__auto___53231)){
args__5775__auto__.push((arguments[i__5770__auto___53232]));

var G__53233 = (i__5770__auto___53232 + (1));
i__5770__auto___53232 = G__53233;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51203 = conformed_args__49162__auto__;
var map__51203__$1 = cljs.core.__destructure_map(map__51203);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq51200){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51200));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53234 = arguments.length;
var i__5770__auto___53235 = (0);
while(true){
if((i__5770__auto___53235 < len__5769__auto___53234)){
args__5775__auto__.push((arguments[i__5770__auto___53235]));

var G__53236 = (i__5770__auto___53235 + (1));
i__5770__auto___53235 = G__53236;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51208 = conformed_args__49162__auto__;
var map__51208__$1 = cljs.core.__destructure_map(map__51208);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq51205){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51205));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53237 = arguments.length;
var i__5770__auto___53238 = (0);
while(true){
if((i__5770__auto___53238 < len__5769__auto___53237)){
args__5775__auto__.push((arguments[i__5770__auto___53238]));

var G__53241 = (i__5770__auto___53238 + (1));
i__5770__auto___53238 = G__53241;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51213 = conformed_args__49162__auto__;
var map__51213__$1 = cljs.core.__destructure_map(map__51213);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq51211){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51211));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53243 = arguments.length;
var i__5770__auto___53244 = (0);
while(true){
if((i__5770__auto___53244 < len__5769__auto___53243)){
args__5775__auto__.push((arguments[i__5770__auto___53244]));

var G__53245 = (i__5770__auto___53244 + (1));
i__5770__auto___53244 = G__53245;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51215 = conformed_args__49162__auto__;
var map__51215__$1 = cljs.core.__destructure_map(map__51215);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq51214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53246 = arguments.length;
var i__5770__auto___53247 = (0);
while(true){
if((i__5770__auto___53247 < len__5769__auto___53246)){
args__5775__auto__.push((arguments[i__5770__auto___53247]));

var G__53248 = (i__5770__auto___53247 + (1));
i__5770__auto___53247 = G__53248;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51217 = conformed_args__49162__auto__;
var map__51217__$1 = cljs.core.__destructure_map(map__51217);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq51216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51216));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53250 = arguments.length;
var i__5770__auto___53251 = (0);
while(true){
if((i__5770__auto___53251 < len__5769__auto___53250)){
args__5775__auto__.push((arguments[i__5770__auto___53251]));

var G__53252 = (i__5770__auto___53251 + (1));
i__5770__auto___53251 = G__53252;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51226 = conformed_args__49162__auto__;
var map__51226__$1 = cljs.core.__destructure_map(map__51226);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51226__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51226__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51226__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq51220){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51220));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53253 = arguments.length;
var i__5770__auto___53254 = (0);
while(true){
if((i__5770__auto___53254 < len__5769__auto___53253)){
args__5775__auto__.push((arguments[i__5770__auto___53254]));

var G__53255 = (i__5770__auto___53254 + (1));
i__5770__auto___53254 = G__53255;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51229 = conformed_args__49162__auto__;
var map__51229__$1 = cljs.core.__destructure_map(map__51229);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq51228){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51228));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53256 = arguments.length;
var i__5770__auto___53257 = (0);
while(true){
if((i__5770__auto___53257 < len__5769__auto___53256)){
args__5775__auto__.push((arguments[i__5770__auto___53257]));

var G__53259 = (i__5770__auto___53257 + (1));
i__5770__auto___53257 = G__53259;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51251 = conformed_args__49162__auto__;
var map__51251__$1 = cljs.core.__destructure_map(map__51251);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq51230){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53261 = arguments.length;
var i__5770__auto___53262 = (0);
while(true){
if((i__5770__auto___53262 < len__5769__auto___53261)){
args__5775__auto__.push((arguments[i__5770__auto___53262]));

var G__53263 = (i__5770__auto___53262 + (1));
i__5770__auto___53262 = G__53263;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51294 = conformed_args__49162__auto__;
var map__51294__$1 = cljs.core.__destructure_map(map__51294);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq51274){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51274));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53266 = arguments.length;
var i__5770__auto___53267 = (0);
while(true){
if((i__5770__auto___53267 < len__5769__auto___53266)){
args__5775__auto__.push((arguments[i__5770__auto___53267]));

var G__53268 = (i__5770__auto___53267 + (1));
i__5770__auto___53267 = G__53268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51298 = conformed_args__49162__auto__;
var map__51298__$1 = cljs.core.__destructure_map(map__51298);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq51295){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51295));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53269 = arguments.length;
var i__5770__auto___53270 = (0);
while(true){
if((i__5770__auto___53270 < len__5769__auto___53269)){
args__5775__auto__.push((arguments[i__5770__auto___53270]));

var G__53271 = (i__5770__auto___53270 + (1));
i__5770__auto___53270 = G__53271;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51309 = conformed_args__49162__auto__;
var map__51309__$1 = cljs.core.__destructure_map(map__51309);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq51307){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51307));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53277 = arguments.length;
var i__5770__auto___53278 = (0);
while(true){
if((i__5770__auto___53278 < len__5769__auto___53277)){
args__5775__auto__.push((arguments[i__5770__auto___53278]));

var G__53279 = (i__5770__auto___53278 + (1));
i__5770__auto___53278 = G__53279;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51359 = conformed_args__49162__auto__;
var map__51359__$1 = cljs.core.__destructure_map(map__51359);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq51331){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51331));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53288 = arguments.length;
var i__5770__auto___53289 = (0);
while(true){
if((i__5770__auto___53289 < len__5769__auto___53288)){
args__5775__auto__.push((arguments[i__5770__auto___53289]));

var G__53292 = (i__5770__auto___53289 + (1));
i__5770__auto___53289 = G__53292;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51368 = conformed_args__49162__auto__;
var map__51368__$1 = cljs.core.__destructure_map(map__51368);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq51366){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51366));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53293 = arguments.length;
var i__5770__auto___53294 = (0);
while(true){
if((i__5770__auto___53294 < len__5769__auto___53293)){
args__5775__auto__.push((arguments[i__5770__auto___53294]));

var G__53295 = (i__5770__auto___53294 + (1));
i__5770__auto___53294 = G__53295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51371 = conformed_args__49162__auto__;
var map__51371__$1 = cljs.core.__destructure_map(map__51371);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq51370){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51370));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53296 = arguments.length;
var i__5770__auto___53297 = (0);
while(true){
if((i__5770__auto___53297 < len__5769__auto___53296)){
args__5775__auto__.push((arguments[i__5770__auto___53297]));

var G__53298 = (i__5770__auto___53297 + (1));
i__5770__auto___53297 = G__53298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51376 = conformed_args__49162__auto__;
var map__51376__$1 = cljs.core.__destructure_map(map__51376);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq51374){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51374));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53299 = arguments.length;
var i__5770__auto___53300 = (0);
while(true){
if((i__5770__auto___53300 < len__5769__auto___53299)){
args__5775__auto__.push((arguments[i__5770__auto___53300]));

var G__53301 = (i__5770__auto___53300 + (1));
i__5770__auto___53300 = G__53301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51392 = conformed_args__49162__auto__;
var map__51392__$1 = cljs.core.__destructure_map(map__51392);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq51377){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51377));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53304 = arguments.length;
var i__5770__auto___53305 = (0);
while(true){
if((i__5770__auto___53305 < len__5769__auto___53304)){
args__5775__auto__.push((arguments[i__5770__auto___53305]));

var G__53306 = (i__5770__auto___53305 + (1));
i__5770__auto___53305 = G__53306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51412 = conformed_args__49162__auto__;
var map__51412__$1 = cljs.core.__destructure_map(map__51412);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq51408){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51408));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53309 = arguments.length;
var i__5770__auto___53310 = (0);
while(true){
if((i__5770__auto___53310 < len__5769__auto___53309)){
args__5775__auto__.push((arguments[i__5770__auto___53310]));

var G__53311 = (i__5770__auto___53310 + (1));
i__5770__auto___53310 = G__53311;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51430 = conformed_args__49162__auto__;
var map__51430__$1 = cljs.core.__destructure_map(map__51430);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq51419){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51419));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53312 = arguments.length;
var i__5770__auto___53313 = (0);
while(true){
if((i__5770__auto___53313 < len__5769__auto___53312)){
args__5775__auto__.push((arguments[i__5770__auto___53313]));

var G__53314 = (i__5770__auto___53313 + (1));
i__5770__auto___53313 = G__53314;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51443 = conformed_args__49162__auto__;
var map__51443__$1 = cljs.core.__destructure_map(map__51443);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq51438){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51438));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53316 = arguments.length;
var i__5770__auto___53317 = (0);
while(true){
if((i__5770__auto___53317 < len__5769__auto___53316)){
args__5775__auto__.push((arguments[i__5770__auto___53317]));

var G__53318 = (i__5770__auto___53317 + (1));
i__5770__auto___53317 = G__53318;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51454 = conformed_args__49162__auto__;
var map__51454__$1 = cljs.core.__destructure_map(map__51454);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq51452){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51452));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53321 = arguments.length;
var i__5770__auto___53322 = (0);
while(true){
if((i__5770__auto___53322 < len__5769__auto___53321)){
args__5775__auto__.push((arguments[i__5770__auto___53322]));

var G__53323 = (i__5770__auto___53322 + (1));
i__5770__auto___53322 = G__53323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51461 = conformed_args__49162__auto__;
var map__51461__$1 = cljs.core.__destructure_map(map__51461);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq51455){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53324 = arguments.length;
var i__5770__auto___53325 = (0);
while(true){
if((i__5770__auto___53325 < len__5769__auto___53324)){
args__5775__auto__.push((arguments[i__5770__auto___53325]));

var G__53326 = (i__5770__auto___53325 + (1));
i__5770__auto___53325 = G__53326;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51468 = conformed_args__49162__auto__;
var map__51468__$1 = cljs.core.__destructure_map(map__51468);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq51463){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51463));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53329 = arguments.length;
var i__5770__auto___53330 = (0);
while(true){
if((i__5770__auto___53330 < len__5769__auto___53329)){
args__5775__auto__.push((arguments[i__5770__auto___53330]));

var G__53331 = (i__5770__auto___53330 + (1));
i__5770__auto___53330 = G__53331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51480 = conformed_args__49162__auto__;
var map__51480__$1 = cljs.core.__destructure_map(map__51480);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq51474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51474));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53333 = arguments.length;
var i__5770__auto___53334 = (0);
while(true){
if((i__5770__auto___53334 < len__5769__auto___53333)){
args__5775__auto__.push((arguments[i__5770__auto___53334]));

var G__53335 = (i__5770__auto___53334 + (1));
i__5770__auto___53334 = G__53335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51501 = conformed_args__49162__auto__;
var map__51501__$1 = cljs.core.__destructure_map(map__51501);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq51492){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51492));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53338 = arguments.length;
var i__5770__auto___53339 = (0);
while(true){
if((i__5770__auto___53339 < len__5769__auto___53338)){
args__5775__auto__.push((arguments[i__5770__auto___53339]));

var G__53340 = (i__5770__auto___53339 + (1));
i__5770__auto___53339 = G__53340;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51552 = conformed_args__49162__auto__;
var map__51552__$1 = cljs.core.__destructure_map(map__51552);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq51517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51517));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53341 = arguments.length;
var i__5770__auto___53342 = (0);
while(true){
if((i__5770__auto___53342 < len__5769__auto___53341)){
args__5775__auto__.push((arguments[i__5770__auto___53342]));

var G__53343 = (i__5770__auto___53342 + (1));
i__5770__auto___53342 = G__53343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51582 = conformed_args__49162__auto__;
var map__51582__$1 = cljs.core.__destructure_map(map__51582);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq51564){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51564));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53344 = arguments.length;
var i__5770__auto___53345 = (0);
while(true){
if((i__5770__auto___53345 < len__5769__auto___53344)){
args__5775__auto__.push((arguments[i__5770__auto___53345]));

var G__53346 = (i__5770__auto___53345 + (1));
i__5770__auto___53345 = G__53346;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51597 = conformed_args__49162__auto__;
var map__51597__$1 = cljs.core.__destructure_map(map__51597);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq51586){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51586));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53349 = arguments.length;
var i__5770__auto___53350 = (0);
while(true){
if((i__5770__auto___53350 < len__5769__auto___53349)){
args__5775__auto__.push((arguments[i__5770__auto___53350]));

var G__53351 = (i__5770__auto___53350 + (1));
i__5770__auto___53350 = G__53351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51619 = conformed_args__49162__auto__;
var map__51619__$1 = cljs.core.__destructure_map(map__51619);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq51608){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51608));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53352 = arguments.length;
var i__5770__auto___53353 = (0);
while(true){
if((i__5770__auto___53353 < len__5769__auto___53352)){
args__5775__auto__.push((arguments[i__5770__auto___53353]));

var G__53354 = (i__5770__auto___53353 + (1));
i__5770__auto___53353 = G__53354;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51634 = conformed_args__49162__auto__;
var map__51634__$1 = cljs.core.__destructure_map(map__51634);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq51628){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51628));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53356 = arguments.length;
var i__5770__auto___53357 = (0);
while(true){
if((i__5770__auto___53357 < len__5769__auto___53356)){
args__5775__auto__.push((arguments[i__5770__auto___53357]));

var G__53359 = (i__5770__auto___53357 + (1));
i__5770__auto___53357 = G__53359;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51653 = conformed_args__49162__auto__;
var map__51653__$1 = cljs.core.__destructure_map(map__51653);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51653__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51653__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51653__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq51642){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51642));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53360 = arguments.length;
var i__5770__auto___53361 = (0);
while(true){
if((i__5770__auto___53361 < len__5769__auto___53360)){
args__5775__auto__.push((arguments[i__5770__auto___53361]));

var G__53362 = (i__5770__auto___53361 + (1));
i__5770__auto___53361 = G__53362;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51687 = conformed_args__49162__auto__;
var map__51687__$1 = cljs.core.__destructure_map(map__51687);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq51668){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53365 = arguments.length;
var i__5770__auto___53366 = (0);
while(true){
if((i__5770__auto___53366 < len__5769__auto___53365)){
args__5775__auto__.push((arguments[i__5770__auto___53366]));

var G__53367 = (i__5770__auto___53366 + (1));
i__5770__auto___53366 = G__53367;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51735 = conformed_args__49162__auto__;
var map__51735__$1 = cljs.core.__destructure_map(map__51735);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq51708){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51708));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53368 = arguments.length;
var i__5770__auto___53369 = (0);
while(true){
if((i__5770__auto___53369 < len__5769__auto___53368)){
args__5775__auto__.push((arguments[i__5770__auto___53369]));

var G__53370 = (i__5770__auto___53369 + (1));
i__5770__auto___53369 = G__53370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51771 = conformed_args__49162__auto__;
var map__51771__$1 = cljs.core.__destructure_map(map__51771);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq51761){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51761));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53371 = arguments.length;
var i__5770__auto___53372 = (0);
while(true){
if((i__5770__auto___53372 < len__5769__auto___53371)){
args__5775__auto__.push((arguments[i__5770__auto___53372]));

var G__53373 = (i__5770__auto___53372 + (1));
i__5770__auto___53372 = G__53373;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51806 = conformed_args__49162__auto__;
var map__51806__$1 = cljs.core.__destructure_map(map__51806);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq51792){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51792));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53378 = arguments.length;
var i__5770__auto___53379 = (0);
while(true){
if((i__5770__auto___53379 < len__5769__auto___53378)){
args__5775__auto__.push((arguments[i__5770__auto___53379]));

var G__53380 = (i__5770__auto___53379 + (1));
i__5770__auto___53379 = G__53380;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51822 = conformed_args__49162__auto__;
var map__51822__$1 = cljs.core.__destructure_map(map__51822);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq51808){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53381 = arguments.length;
var i__5770__auto___53382 = (0);
while(true){
if((i__5770__auto___53382 < len__5769__auto___53381)){
args__5775__auto__.push((arguments[i__5770__auto___53382]));

var G__53383 = (i__5770__auto___53382 + (1));
i__5770__auto___53382 = G__53383;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51828 = conformed_args__49162__auto__;
var map__51828__$1 = cljs.core.__destructure_map(map__51828);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq51825){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51825));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53384 = arguments.length;
var i__5770__auto___53385 = (0);
while(true){
if((i__5770__auto___53385 < len__5769__auto___53384)){
args__5775__auto__.push((arguments[i__5770__auto___53385]));

var G__53386 = (i__5770__auto___53385 + (1));
i__5770__auto___53385 = G__53386;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51832 = conformed_args__49162__auto__;
var map__51832__$1 = cljs.core.__destructure_map(map__51832);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq51830){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53389 = arguments.length;
var i__5770__auto___53390 = (0);
while(true){
if((i__5770__auto___53390 < len__5769__auto___53389)){
args__5775__auto__.push((arguments[i__5770__auto___53390]));

var G__53391 = (i__5770__auto___53390 + (1));
i__5770__auto___53390 = G__53391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51844 = conformed_args__49162__auto__;
var map__51844__$1 = cljs.core.__destructure_map(map__51844);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq51840){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53392 = arguments.length;
var i__5770__auto___53393 = (0);
while(true){
if((i__5770__auto___53393 < len__5769__auto___53392)){
args__5775__auto__.push((arguments[i__5770__auto___53393]));

var G__53394 = (i__5770__auto___53393 + (1));
i__5770__auto___53393 = G__53394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51852 = conformed_args__49162__auto__;
var map__51852__$1 = cljs.core.__destructure_map(map__51852);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq51847){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51847));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53395 = arguments.length;
var i__5770__auto___53396 = (0);
while(true){
if((i__5770__auto___53396 < len__5769__auto___53395)){
args__5775__auto__.push((arguments[i__5770__auto___53396]));

var G__53397 = (i__5770__auto___53396 + (1));
i__5770__auto___53396 = G__53397;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51863 = conformed_args__49162__auto__;
var map__51863__$1 = cljs.core.__destructure_map(map__51863);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq51856){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51856));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53398 = arguments.length;
var i__5770__auto___53399 = (0);
while(true){
if((i__5770__auto___53399 < len__5769__auto___53398)){
args__5775__auto__.push((arguments[i__5770__auto___53399]));

var G__53400 = (i__5770__auto___53399 + (1));
i__5770__auto___53399 = G__53400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51872 = conformed_args__49162__auto__;
var map__51872__$1 = cljs.core.__destructure_map(map__51872);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq51870){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53401 = arguments.length;
var i__5770__auto___53402 = (0);
while(true){
if((i__5770__auto___53402 < len__5769__auto___53401)){
args__5775__auto__.push((arguments[i__5770__auto___53402]));

var G__53403 = (i__5770__auto___53402 + (1));
i__5770__auto___53402 = G__53403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51881 = conformed_args__49162__auto__;
var map__51881__$1 = cljs.core.__destructure_map(map__51881);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq51879){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53404 = arguments.length;
var i__5770__auto___53405 = (0);
while(true){
if((i__5770__auto___53405 < len__5769__auto___53404)){
args__5775__auto__.push((arguments[i__5770__auto___53405]));

var G__53406 = (i__5770__auto___53405 + (1));
i__5770__auto___53405 = G__53406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51903 = conformed_args__49162__auto__;
var map__51903__$1 = cljs.core.__destructure_map(map__51903);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq51896){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51896));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53407 = arguments.length;
var i__5770__auto___53408 = (0);
while(true){
if((i__5770__auto___53408 < len__5769__auto___53407)){
args__5775__auto__.push((arguments[i__5770__auto___53408]));

var G__53409 = (i__5770__auto___53408 + (1));
i__5770__auto___53408 = G__53409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51925 = conformed_args__49162__auto__;
var map__51925__$1 = cljs.core.__destructure_map(map__51925);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq51913){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51913));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53411 = arguments.length;
var i__5770__auto___53412 = (0);
while(true){
if((i__5770__auto___53412 < len__5769__auto___53411)){
args__5775__auto__.push((arguments[i__5770__auto___53412]));

var G__53413 = (i__5770__auto___53412 + (1));
i__5770__auto___53412 = G__53413;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51932 = conformed_args__49162__auto__;
var map__51932__$1 = cljs.core.__destructure_map(map__51932);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq51928){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51928));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53414 = arguments.length;
var i__5770__auto___53415 = (0);
while(true){
if((i__5770__auto___53415 < len__5769__auto___53414)){
args__5775__auto__.push((arguments[i__5770__auto___53415]));

var G__53416 = (i__5770__auto___53415 + (1));
i__5770__auto___53415 = G__53416;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51936 = conformed_args__49162__auto__;
var map__51936__$1 = cljs.core.__destructure_map(map__51936);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51936__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq51933){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51933));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53417 = arguments.length;
var i__5770__auto___53418 = (0);
while(true){
if((i__5770__auto___53418 < len__5769__auto___53417)){
args__5775__auto__.push((arguments[i__5770__auto___53418]));

var G__53419 = (i__5770__auto___53418 + (1));
i__5770__auto___53418 = G__53419;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51950 = conformed_args__49162__auto__;
var map__51950__$1 = cljs.core.__destructure_map(map__51950);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq51948){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51948));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53421 = arguments.length;
var i__5770__auto___53422 = (0);
while(true){
if((i__5770__auto___53422 < len__5769__auto___53421)){
args__5775__auto__.push((arguments[i__5770__auto___53422]));

var G__53423 = (i__5770__auto___53422 + (1));
i__5770__auto___53422 = G__53423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51968 = conformed_args__49162__auto__;
var map__51968__$1 = cljs.core.__destructure_map(map__51968);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq51962){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51962));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53424 = arguments.length;
var i__5770__auto___53425 = (0);
while(true){
if((i__5770__auto___53425 < len__5769__auto___53424)){
args__5775__auto__.push((arguments[i__5770__auto___53425]));

var G__53426 = (i__5770__auto___53425 + (1));
i__5770__auto___53425 = G__53426;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51980 = conformed_args__49162__auto__;
var map__51980__$1 = cljs.core.__destructure_map(map__51980);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq51976){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53427 = arguments.length;
var i__5770__auto___53428 = (0);
while(true){
if((i__5770__auto___53428 < len__5769__auto___53427)){
args__5775__auto__.push((arguments[i__5770__auto___53428]));

var G__53429 = (i__5770__auto___53428 + (1));
i__5770__auto___53428 = G__53429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51987 = conformed_args__49162__auto__;
var map__51987__$1 = cljs.core.__destructure_map(map__51987);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq51983){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51983));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53430 = arguments.length;
var i__5770__auto___53431 = (0);
while(true){
if((i__5770__auto___53431 < len__5769__auto___53430)){
args__5775__auto__.push((arguments[i__5770__auto___53431]));

var G__53432 = (i__5770__auto___53431 + (1));
i__5770__auto___53431 = G__53432;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51996 = conformed_args__49162__auto__;
var map__51996__$1 = cljs.core.__destructure_map(map__51996);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq51993){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51993));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53433 = arguments.length;
var i__5770__auto___53434 = (0);
while(true){
if((i__5770__auto___53434 < len__5769__auto___53433)){
args__5775__auto__.push((arguments[i__5770__auto___53434]));

var G__53435 = (i__5770__auto___53434 + (1));
i__5770__auto___53434 = G__53435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52008 = conformed_args__49162__auto__;
var map__52008__$1 = cljs.core.__destructure_map(map__52008);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq52001){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52001));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53437 = arguments.length;
var i__5770__auto___53438 = (0);
while(true){
if((i__5770__auto___53438 < len__5769__auto___53437)){
args__5775__auto__.push((arguments[i__5770__auto___53438]));

var G__53439 = (i__5770__auto___53438 + (1));
i__5770__auto___53438 = G__53439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52022 = conformed_args__49162__auto__;
var map__52022__$1 = cljs.core.__destructure_map(map__52022);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52022__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52022__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52022__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq52014){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53440 = arguments.length;
var i__5770__auto___53441 = (0);
while(true){
if((i__5770__auto___53441 < len__5769__auto___53440)){
args__5775__auto__.push((arguments[i__5770__auto___53441]));

var G__53442 = (i__5770__auto___53441 + (1));
i__5770__auto___53441 = G__53442;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52037 = conformed_args__49162__auto__;
var map__52037__$1 = cljs.core.__destructure_map(map__52037);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq52027){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52027));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53443 = arguments.length;
var i__5770__auto___53444 = (0);
while(true){
if((i__5770__auto___53444 < len__5769__auto___53443)){
args__5775__auto__.push((arguments[i__5770__auto___53444]));

var G__53445 = (i__5770__auto___53444 + (1));
i__5770__auto___53444 = G__53445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52041 = conformed_args__49162__auto__;
var map__52041__$1 = cljs.core.__destructure_map(map__52041);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq52039){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52039));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53446 = arguments.length;
var i__5770__auto___53447 = (0);
while(true){
if((i__5770__auto___53447 < len__5769__auto___53446)){
args__5775__auto__.push((arguments[i__5770__auto___53447]));

var G__53448 = (i__5770__auto___53447 + (1));
i__5770__auto___53447 = G__53448;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52045 = conformed_args__49162__auto__;
var map__52045__$1 = cljs.core.__destructure_map(map__52045);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq52044){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52044));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53455 = arguments.length;
var i__5770__auto___53456 = (0);
while(true){
if((i__5770__auto___53456 < len__5769__auto___53455)){
args__5775__auto__.push((arguments[i__5770__auto___53456]));

var G__53457 = (i__5770__auto___53456 + (1));
i__5770__auto___53456 = G__53457;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52057 = conformed_args__49162__auto__;
var map__52057__$1 = cljs.core.__destructure_map(map__52057);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq52053){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52053));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53459 = arguments.length;
var i__5770__auto___53460 = (0);
while(true){
if((i__5770__auto___53460 < len__5769__auto___53459)){
args__5775__auto__.push((arguments[i__5770__auto___53460]));

var G__53461 = (i__5770__auto___53460 + (1));
i__5770__auto___53460 = G__53461;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52066 = conformed_args__49162__auto__;
var map__52066__$1 = cljs.core.__destructure_map(map__52066);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq52065){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52065));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53462 = arguments.length;
var i__5770__auto___53463 = (0);
while(true){
if((i__5770__auto___53463 < len__5769__auto___53462)){
args__5775__auto__.push((arguments[i__5770__auto___53463]));

var G__53464 = (i__5770__auto___53463 + (1));
i__5770__auto___53463 = G__53464;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52079 = conformed_args__49162__auto__;
var map__52079__$1 = cljs.core.__destructure_map(map__52079);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq52072){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52072));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53468 = arguments.length;
var i__5770__auto___53469 = (0);
while(true){
if((i__5770__auto___53469 < len__5769__auto___53468)){
args__5775__auto__.push((arguments[i__5770__auto___53469]));

var G__53470 = (i__5770__auto___53469 + (1));
i__5770__auto___53469 = G__53470;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52088 = conformed_args__49162__auto__;
var map__52088__$1 = cljs.core.__destructure_map(map__52088);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq52082){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52082));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53472 = arguments.length;
var i__5770__auto___53473 = (0);
while(true){
if((i__5770__auto___53473 < len__5769__auto___53472)){
args__5775__auto__.push((arguments[i__5770__auto___53473]));

var G__53474 = (i__5770__auto___53473 + (1));
i__5770__auto___53473 = G__53474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52100 = conformed_args__49162__auto__;
var map__52100__$1 = cljs.core.__destructure_map(map__52100);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq52092){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52092));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53475 = arguments.length;
var i__5770__auto___53476 = (0);
while(true){
if((i__5770__auto___53476 < len__5769__auto___53475)){
args__5775__auto__.push((arguments[i__5770__auto___53476]));

var G__53477 = (i__5770__auto___53476 + (1));
i__5770__auto___53476 = G__53477;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52108 = conformed_args__49162__auto__;
var map__52108__$1 = cljs.core.__destructure_map(map__52108);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq52103){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52103));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53478 = arguments.length;
var i__5770__auto___53479 = (0);
while(true){
if((i__5770__auto___53479 < len__5769__auto___53478)){
args__5775__auto__.push((arguments[i__5770__auto___53479]));

var G__53480 = (i__5770__auto___53479 + (1));
i__5770__auto___53479 = G__53480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52115 = conformed_args__49162__auto__;
var map__52115__$1 = cljs.core.__destructure_map(map__52115);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq52113){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52113));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53481 = arguments.length;
var i__5770__auto___53482 = (0);
while(true){
if((i__5770__auto___53482 < len__5769__auto___53481)){
args__5775__auto__.push((arguments[i__5770__auto___53482]));

var G__53483 = (i__5770__auto___53482 + (1));
i__5770__auto___53482 = G__53483;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52125 = conformed_args__49162__auto__;
var map__52125__$1 = cljs.core.__destructure_map(map__52125);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq52120){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52120));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53484 = arguments.length;
var i__5770__auto___53485 = (0);
while(true){
if((i__5770__auto___53485 < len__5769__auto___53484)){
args__5775__auto__.push((arguments[i__5770__auto___53485]));

var G__53486 = (i__5770__auto___53485 + (1));
i__5770__auto___53485 = G__53486;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52136 = conformed_args__49162__auto__;
var map__52136__$1 = cljs.core.__destructure_map(map__52136);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq52130){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52130));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53487 = arguments.length;
var i__5770__auto___53488 = (0);
while(true){
if((i__5770__auto___53488 < len__5769__auto___53487)){
args__5775__auto__.push((arguments[i__5770__auto___53488]));

var G__53489 = (i__5770__auto___53488 + (1));
i__5770__auto___53488 = G__53489;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52143 = conformed_args__49162__auto__;
var map__52143__$1 = cljs.core.__destructure_map(map__52143);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq52137){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52137));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53490 = arguments.length;
var i__5770__auto___53491 = (0);
while(true){
if((i__5770__auto___53491 < len__5769__auto___53490)){
args__5775__auto__.push((arguments[i__5770__auto___53491]));

var G__53492 = (i__5770__auto___53491 + (1));
i__5770__auto___53491 = G__53492;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52147 = conformed_args__49162__auto__;
var map__52147__$1 = cljs.core.__destructure_map(map__52147);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq52146){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52146));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53493 = arguments.length;
var i__5770__auto___53494 = (0);
while(true){
if((i__5770__auto___53494 < len__5769__auto___53493)){
args__5775__auto__.push((arguments[i__5770__auto___53494]));

var G__53495 = (i__5770__auto___53494 + (1));
i__5770__auto___53494 = G__53495;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52156 = conformed_args__49162__auto__;
var map__52156__$1 = cljs.core.__destructure_map(map__52156);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq52150){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52150));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53496 = arguments.length;
var i__5770__auto___53497 = (0);
while(true){
if((i__5770__auto___53497 < len__5769__auto___53496)){
args__5775__auto__.push((arguments[i__5770__auto___53497]));

var G__53498 = (i__5770__auto___53497 + (1));
i__5770__auto___53497 = G__53498;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52163 = conformed_args__49162__auto__;
var map__52163__$1 = cljs.core.__destructure_map(map__52163);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq52160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52160));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53499 = arguments.length;
var i__5770__auto___53500 = (0);
while(true){
if((i__5770__auto___53500 < len__5769__auto___53499)){
args__5775__auto__.push((arguments[i__5770__auto___53500]));

var G__53501 = (i__5770__auto___53500 + (1));
i__5770__auto___53500 = G__53501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52171 = conformed_args__49162__auto__;
var map__52171__$1 = cljs.core.__destructure_map(map__52171);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq52165){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52165));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53502 = arguments.length;
var i__5770__auto___53503 = (0);
while(true){
if((i__5770__auto___53503 < len__5769__auto___53502)){
args__5775__auto__.push((arguments[i__5770__auto___53503]));

var G__53504 = (i__5770__auto___53503 + (1));
i__5770__auto___53503 = G__53504;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52180 = conformed_args__49162__auto__;
var map__52180__$1 = cljs.core.__destructure_map(map__52180);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq52174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52174));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53505 = arguments.length;
var i__5770__auto___53506 = (0);
while(true){
if((i__5770__auto___53506 < len__5769__auto___53505)){
args__5775__auto__.push((arguments[i__5770__auto___53506]));

var G__53507 = (i__5770__auto___53506 + (1));
i__5770__auto___53506 = G__53507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52187 = conformed_args__49162__auto__;
var map__52187__$1 = cljs.core.__destructure_map(map__52187);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq52181){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52181));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53508 = arguments.length;
var i__5770__auto___53509 = (0);
while(true){
if((i__5770__auto___53509 < len__5769__auto___53508)){
args__5775__auto__.push((arguments[i__5770__auto___53509]));

var G__53510 = (i__5770__auto___53509 + (1));
i__5770__auto___53509 = G__53510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52196 = conformed_args__49162__auto__;
var map__52196__$1 = cljs.core.__destructure_map(map__52196);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq52193){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52193));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53511 = arguments.length;
var i__5770__auto___53512 = (0);
while(true){
if((i__5770__auto___53512 < len__5769__auto___53511)){
args__5775__auto__.push((arguments[i__5770__auto___53512]));

var G__53513 = (i__5770__auto___53512 + (1));
i__5770__auto___53512 = G__53513;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52214 = conformed_args__49162__auto__;
var map__52214__$1 = cljs.core.__destructure_map(map__52214);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq52206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52206));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53514 = arguments.length;
var i__5770__auto___53515 = (0);
while(true){
if((i__5770__auto___53515 < len__5769__auto___53514)){
args__5775__auto__.push((arguments[i__5770__auto___53515]));

var G__53516 = (i__5770__auto___53515 + (1));
i__5770__auto___53515 = G__53516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52227 = conformed_args__49162__auto__;
var map__52227__$1 = cljs.core.__destructure_map(map__52227);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq52223){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52223));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53517 = arguments.length;
var i__5770__auto___53518 = (0);
while(true){
if((i__5770__auto___53518 < len__5769__auto___53517)){
args__5775__auto__.push((arguments[i__5770__auto___53518]));

var G__53519 = (i__5770__auto___53518 + (1));
i__5770__auto___53518 = G__53519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52234 = conformed_args__49162__auto__;
var map__52234__$1 = cljs.core.__destructure_map(map__52234);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq52232){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52232));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53520 = arguments.length;
var i__5770__auto___53521 = (0);
while(true){
if((i__5770__auto___53521 < len__5769__auto___53520)){
args__5775__auto__.push((arguments[i__5770__auto___53521]));

var G__53522 = (i__5770__auto___53521 + (1));
i__5770__auto___53521 = G__53522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52245 = conformed_args__49162__auto__;
var map__52245__$1 = cljs.core.__destructure_map(map__52245);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq52242){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52242));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53523 = arguments.length;
var i__5770__auto___53524 = (0);
while(true){
if((i__5770__auto___53524 < len__5769__auto___53523)){
args__5775__auto__.push((arguments[i__5770__auto___53524]));

var G__53525 = (i__5770__auto___53524 + (1));
i__5770__auto___53524 = G__53525;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52257 = conformed_args__49162__auto__;
var map__52257__$1 = cljs.core.__destructure_map(map__52257);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq52253){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52253));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53526 = arguments.length;
var i__5770__auto___53527 = (0);
while(true){
if((i__5770__auto___53527 < len__5769__auto___53526)){
args__5775__auto__.push((arguments[i__5770__auto___53527]));

var G__53528 = (i__5770__auto___53527 + (1));
i__5770__auto___53527 = G__53528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52267 = conformed_args__49162__auto__;
var map__52267__$1 = cljs.core.__destructure_map(map__52267);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq52261){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52261));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53529 = arguments.length;
var i__5770__auto___53530 = (0);
while(true){
if((i__5770__auto___53530 < len__5769__auto___53529)){
args__5775__auto__.push((arguments[i__5770__auto___53530]));

var G__53531 = (i__5770__auto___53530 + (1));
i__5770__auto___53530 = G__53531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52276 = conformed_args__49162__auto__;
var map__52276__$1 = cljs.core.__destructure_map(map__52276);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq52270){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52270));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53532 = arguments.length;
var i__5770__auto___53533 = (0);
while(true){
if((i__5770__auto___53533 < len__5769__auto___53532)){
args__5775__auto__.push((arguments[i__5770__auto___53533]));

var G__53534 = (i__5770__auto___53533 + (1));
i__5770__auto___53533 = G__53534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52285 = conformed_args__49162__auto__;
var map__52285__$1 = cljs.core.__destructure_map(map__52285);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq52279){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52279));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53535 = arguments.length;
var i__5770__auto___53536 = (0);
while(true){
if((i__5770__auto___53536 < len__5769__auto___53535)){
args__5775__auto__.push((arguments[i__5770__auto___53536]));

var G__53537 = (i__5770__auto___53536 + (1));
i__5770__auto___53536 = G__53537;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52293 = conformed_args__49162__auto__;
var map__52293__$1 = cljs.core.__destructure_map(map__52293);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq52287){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52287));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53538 = arguments.length;
var i__5770__auto___53539 = (0);
while(true){
if((i__5770__auto___53539 < len__5769__auto___53538)){
args__5775__auto__.push((arguments[i__5770__auto___53539]));

var G__53540 = (i__5770__auto___53539 + (1));
i__5770__auto___53539 = G__53540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52307 = conformed_args__49162__auto__;
var map__52307__$1 = cljs.core.__destructure_map(map__52307);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq52302){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52302));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53541 = arguments.length;
var i__5770__auto___53542 = (0);
while(true){
if((i__5770__auto___53542 < len__5769__auto___53541)){
args__5775__auto__.push((arguments[i__5770__auto___53542]));

var G__53543 = (i__5770__auto___53542 + (1));
i__5770__auto___53542 = G__53543;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52316 = conformed_args__49162__auto__;
var map__52316__$1 = cljs.core.__destructure_map(map__52316);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq52308){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52308));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53544 = arguments.length;
var i__5770__auto___53545 = (0);
while(true){
if((i__5770__auto___53545 < len__5769__auto___53544)){
args__5775__auto__.push((arguments[i__5770__auto___53545]));

var G__53546 = (i__5770__auto___53545 + (1));
i__5770__auto___53545 = G__53546;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52323 = conformed_args__49162__auto__;
var map__52323__$1 = cljs.core.__destructure_map(map__52323);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq52320){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52320));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53547 = arguments.length;
var i__5770__auto___53548 = (0);
while(true){
if((i__5770__auto___53548 < len__5769__auto___53547)){
args__5775__auto__.push((arguments[i__5770__auto___53548]));

var G__53549 = (i__5770__auto___53548 + (1));
i__5770__auto___53548 = G__53549;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52342 = conformed_args__49162__auto__;
var map__52342__$1 = cljs.core.__destructure_map(map__52342);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq52327){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52327));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53550 = arguments.length;
var i__5770__auto___53551 = (0);
while(true){
if((i__5770__auto___53551 < len__5769__auto___53550)){
args__5775__auto__.push((arguments[i__5770__auto___53551]));

var G__53552 = (i__5770__auto___53551 + (1));
i__5770__auto___53551 = G__53552;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52356 = conformed_args__49162__auto__;
var map__52356__$1 = cljs.core.__destructure_map(map__52356);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq52350){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52350));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53553 = arguments.length;
var i__5770__auto___53554 = (0);
while(true){
if((i__5770__auto___53554 < len__5769__auto___53553)){
args__5775__auto__.push((arguments[i__5770__auto___53554]));

var G__53555 = (i__5770__auto___53554 + (1));
i__5770__auto___53554 = G__53555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52366 = conformed_args__49162__auto__;
var map__52366__$1 = cljs.core.__destructure_map(map__52366);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52366__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52366__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52366__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq52359){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52359));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53556 = arguments.length;
var i__5770__auto___53557 = (0);
while(true){
if((i__5770__auto___53557 < len__5769__auto___53556)){
args__5775__auto__.push((arguments[i__5770__auto___53557]));

var G__53558 = (i__5770__auto___53557 + (1));
i__5770__auto___53557 = G__53558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52383 = conformed_args__49162__auto__;
var map__52383__$1 = cljs.core.__destructure_map(map__52383);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq52378){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52378));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53559 = arguments.length;
var i__5770__auto___53560 = (0);
while(true){
if((i__5770__auto___53560 < len__5769__auto___53559)){
args__5775__auto__.push((arguments[i__5770__auto___53560]));

var G__53561 = (i__5770__auto___53560 + (1));
i__5770__auto___53560 = G__53561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52392 = conformed_args__49162__auto__;
var map__52392__$1 = cljs.core.__destructure_map(map__52392);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq52388){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52388));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53562 = arguments.length;
var i__5770__auto___53563 = (0);
while(true){
if((i__5770__auto___53563 < len__5769__auto___53562)){
args__5775__auto__.push((arguments[i__5770__auto___53563]));

var G__53564 = (i__5770__auto___53563 + (1));
i__5770__auto___53563 = G__53564;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52400 = conformed_args__49162__auto__;
var map__52400__$1 = cljs.core.__destructure_map(map__52400);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq52395){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52395));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53565 = arguments.length;
var i__5770__auto___53566 = (0);
while(true){
if((i__5770__auto___53566 < len__5769__auto___53565)){
args__5775__auto__.push((arguments[i__5770__auto___53566]));

var G__53567 = (i__5770__auto___53566 + (1));
i__5770__auto___53566 = G__53567;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52406 = conformed_args__49162__auto__;
var map__52406__$1 = cljs.core.__destructure_map(map__52406);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq52404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52404));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53568 = arguments.length;
var i__5770__auto___53569 = (0);
while(true){
if((i__5770__auto___53569 < len__5769__auto___53568)){
args__5775__auto__.push((arguments[i__5770__auto___53569]));

var G__53570 = (i__5770__auto___53569 + (1));
i__5770__auto___53569 = G__53570;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52412 = conformed_args__49162__auto__;
var map__52412__$1 = cljs.core.__destructure_map(map__52412);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq52409){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53571 = arguments.length;
var i__5770__auto___53572 = (0);
while(true){
if((i__5770__auto___53572 < len__5769__auto___53571)){
args__5775__auto__.push((arguments[i__5770__auto___53572]));

var G__53573 = (i__5770__auto___53572 + (1));
i__5770__auto___53572 = G__53573;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52416 = conformed_args__49162__auto__;
var map__52416__$1 = cljs.core.__destructure_map(map__52416);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq52414){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52414));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53574 = arguments.length;
var i__5770__auto___53575 = (0);
while(true){
if((i__5770__auto___53575 < len__5769__auto___53574)){
args__5775__auto__.push((arguments[i__5770__auto___53575]));

var G__53576 = (i__5770__auto___53575 + (1));
i__5770__auto___53575 = G__53576;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52422 = conformed_args__49162__auto__;
var map__52422__$1 = cljs.core.__destructure_map(map__52422);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq52419){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52419));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53577 = arguments.length;
var i__5770__auto___53578 = (0);
while(true){
if((i__5770__auto___53578 < len__5769__auto___53577)){
args__5775__auto__.push((arguments[i__5770__auto___53578]));

var G__53579 = (i__5770__auto___53578 + (1));
i__5770__auto___53578 = G__53579;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52427 = conformed_args__49162__auto__;
var map__52427__$1 = cljs.core.__destructure_map(map__52427);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq52424){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52424));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53580 = arguments.length;
var i__5770__auto___53581 = (0);
while(true){
if((i__5770__auto___53581 < len__5769__auto___53580)){
args__5775__auto__.push((arguments[i__5770__auto___53581]));

var G__53582 = (i__5770__auto___53581 + (1));
i__5770__auto___53581 = G__53582;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52441 = conformed_args__49162__auto__;
var map__52441__$1 = cljs.core.__destructure_map(map__52441);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq52436){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52436));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53583 = arguments.length;
var i__5770__auto___53584 = (0);
while(true){
if((i__5770__auto___53584 < len__5769__auto___53583)){
args__5775__auto__.push((arguments[i__5770__auto___53584]));

var G__53585 = (i__5770__auto___53584 + (1));
i__5770__auto___53584 = G__53585;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52450 = conformed_args__49162__auto__;
var map__52450__$1 = cljs.core.__destructure_map(map__52450);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq52447){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52447));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53586 = arguments.length;
var i__5770__auto___53587 = (0);
while(true){
if((i__5770__auto___53587 < len__5769__auto___53586)){
args__5775__auto__.push((arguments[i__5770__auto___53587]));

var G__53588 = (i__5770__auto___53587 + (1));
i__5770__auto___53587 = G__53588;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52462 = conformed_args__49162__auto__;
var map__52462__$1 = cljs.core.__destructure_map(map__52462);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq52456){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52456));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53589 = arguments.length;
var i__5770__auto___53590 = (0);
while(true){
if((i__5770__auto___53590 < len__5769__auto___53589)){
args__5775__auto__.push((arguments[i__5770__auto___53590]));

var G__53591 = (i__5770__auto___53590 + (1));
i__5770__auto___53590 = G__53591;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52471 = conformed_args__49162__auto__;
var map__52471__$1 = cljs.core.__destructure_map(map__52471);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq52465){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53592 = arguments.length;
var i__5770__auto___53593 = (0);
while(true){
if((i__5770__auto___53593 < len__5769__auto___53592)){
args__5775__auto__.push((arguments[i__5770__auto___53593]));

var G__53594 = (i__5770__auto___53593 + (1));
i__5770__auto___53593 = G__53594;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52479 = conformed_args__49162__auto__;
var map__52479__$1 = cljs.core.__destructure_map(map__52479);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq52472){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52472));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53595 = arguments.length;
var i__5770__auto___53596 = (0);
while(true){
if((i__5770__auto___53596 < len__5769__auto___53595)){
args__5775__auto__.push((arguments[i__5770__auto___53596]));

var G__53597 = (i__5770__auto___53596 + (1));
i__5770__auto___53596 = G__53597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52484 = conformed_args__49162__auto__;
var map__52484__$1 = cljs.core.__destructure_map(map__52484);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq52483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53598 = arguments.length;
var i__5770__auto___53599 = (0);
while(true){
if((i__5770__auto___53599 < len__5769__auto___53598)){
args__5775__auto__.push((arguments[i__5770__auto___53599]));

var G__53600 = (i__5770__auto___53599 + (1));
i__5770__auto___53599 = G__53600;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52495 = conformed_args__49162__auto__;
var map__52495__$1 = cljs.core.__destructure_map(map__52495);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq52489){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52489));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53601 = arguments.length;
var i__5770__auto___53602 = (0);
while(true){
if((i__5770__auto___53602 < len__5769__auto___53601)){
args__5775__auto__.push((arguments[i__5770__auto___53602]));

var G__53603 = (i__5770__auto___53602 + (1));
i__5770__auto___53602 = G__53603;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52505 = conformed_args__49162__auto__;
var map__52505__$1 = cljs.core.__destructure_map(map__52505);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq52499){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52499));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53604 = arguments.length;
var i__5770__auto___53605 = (0);
while(true){
if((i__5770__auto___53605 < len__5769__auto___53604)){
args__5775__auto__.push((arguments[i__5770__auto___53605]));

var G__53606 = (i__5770__auto___53605 + (1));
i__5770__auto___53605 = G__53606;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52515 = conformed_args__49162__auto__;
var map__52515__$1 = cljs.core.__destructure_map(map__52515);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq52512){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52512));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53607 = arguments.length;
var i__5770__auto___53608 = (0);
while(true){
if((i__5770__auto___53608 < len__5769__auto___53607)){
args__5775__auto__.push((arguments[i__5770__auto___53608]));

var G__53609 = (i__5770__auto___53608 + (1));
i__5770__auto___53608 = G__53609;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52525 = conformed_args__49162__auto__;
var map__52525__$1 = cljs.core.__destructure_map(map__52525);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq52521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52521));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53610 = arguments.length;
var i__5770__auto___53611 = (0);
while(true){
if((i__5770__auto___53611 < len__5769__auto___53610)){
args__5775__auto__.push((arguments[i__5770__auto___53611]));

var G__53612 = (i__5770__auto___53611 + (1));
i__5770__auto___53611 = G__53612;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52536 = conformed_args__49162__auto__;
var map__52536__$1 = cljs.core.__destructure_map(map__52536);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq52530){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52530));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53613 = arguments.length;
var i__5770__auto___53614 = (0);
while(true){
if((i__5770__auto___53614 < len__5769__auto___53613)){
args__5775__auto__.push((arguments[i__5770__auto___53614]));

var G__53615 = (i__5770__auto___53614 + (1));
i__5770__auto___53614 = G__53615;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52552 = conformed_args__49162__auto__;
var map__52552__$1 = cljs.core.__destructure_map(map__52552);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq52546){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52546));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53616 = arguments.length;
var i__5770__auto___53617 = (0);
while(true){
if((i__5770__auto___53617 < len__5769__auto___53616)){
args__5775__auto__.push((arguments[i__5770__auto___53617]));

var G__53618 = (i__5770__auto___53617 + (1));
i__5770__auto___53617 = G__53618;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52573 = conformed_args__49162__auto__;
var map__52573__$1 = cljs.core.__destructure_map(map__52573);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq52565){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53619 = arguments.length;
var i__5770__auto___53620 = (0);
while(true){
if((i__5770__auto___53620 < len__5769__auto___53619)){
args__5775__auto__.push((arguments[i__5770__auto___53620]));

var G__53621 = (i__5770__auto___53620 + (1));
i__5770__auto___53620 = G__53621;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52585 = conformed_args__49162__auto__;
var map__52585__$1 = cljs.core.__destructure_map(map__52585);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq52582){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52582));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53622 = arguments.length;
var i__5770__auto___53623 = (0);
while(true){
if((i__5770__auto___53623 < len__5769__auto___53622)){
args__5775__auto__.push((arguments[i__5770__auto___53623]));

var G__53624 = (i__5770__auto___53623 + (1));
i__5770__auto___53623 = G__53624;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52595 = conformed_args__49162__auto__;
var map__52595__$1 = cljs.core.__destructure_map(map__52595);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq52593){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52593));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53625 = arguments.length;
var i__5770__auto___53626 = (0);
while(true){
if((i__5770__auto___53626 < len__5769__auto___53625)){
args__5775__auto__.push((arguments[i__5770__auto___53626]));

var G__53627 = (i__5770__auto___53626 + (1));
i__5770__auto___53626 = G__53627;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52604 = conformed_args__49162__auto__;
var map__52604__$1 = cljs.core.__destructure_map(map__52604);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq52599){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53628 = arguments.length;
var i__5770__auto___53629 = (0);
while(true){
if((i__5770__auto___53629 < len__5769__auto___53628)){
args__5775__auto__.push((arguments[i__5770__auto___53629]));

var G__53630 = (i__5770__auto___53629 + (1));
i__5770__auto___53629 = G__53630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52614 = conformed_args__49162__auto__;
var map__52614__$1 = cljs.core.__destructure_map(map__52614);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq52608){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52608));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53631 = arguments.length;
var i__5770__auto___53632 = (0);
while(true){
if((i__5770__auto___53632 < len__5769__auto___53631)){
args__5775__auto__.push((arguments[i__5770__auto___53632]));

var G__53633 = (i__5770__auto___53632 + (1));
i__5770__auto___53632 = G__53633;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52622 = conformed_args__49162__auto__;
var map__52622__$1 = cljs.core.__destructure_map(map__52622);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq52617){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53634 = arguments.length;
var i__5770__auto___53635 = (0);
while(true){
if((i__5770__auto___53635 < len__5769__auto___53634)){
args__5775__auto__.push((arguments[i__5770__auto___53635]));

var G__53636 = (i__5770__auto___53635 + (1));
i__5770__auto___53635 = G__53636;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52636 = conformed_args__49162__auto__;
var map__52636__$1 = cljs.core.__destructure_map(map__52636);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq52631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52631));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53637 = arguments.length;
var i__5770__auto___53638 = (0);
while(true){
if((i__5770__auto___53638 < len__5769__auto___53637)){
args__5775__auto__.push((arguments[i__5770__auto___53638]));

var G__53639 = (i__5770__auto___53638 + (1));
i__5770__auto___53638 = G__53639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52641 = conformed_args__49162__auto__;
var map__52641__$1 = cljs.core.__destructure_map(map__52641);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq52640){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52640));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53640 = arguments.length;
var i__5770__auto___53641 = (0);
while(true){
if((i__5770__auto___53641 < len__5769__auto___53640)){
args__5775__auto__.push((arguments[i__5770__auto___53641]));

var G__53642 = (i__5770__auto___53641 + (1));
i__5770__auto___53641 = G__53642;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52646 = conformed_args__49162__auto__;
var map__52646__$1 = cljs.core.__destructure_map(map__52646);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq52642){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52642));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53643 = arguments.length;
var i__5770__auto___53644 = (0);
while(true){
if((i__5770__auto___53644 < len__5769__auto___53643)){
args__5775__auto__.push((arguments[i__5770__auto___53644]));

var G__53645 = (i__5770__auto___53644 + (1));
i__5770__auto___53644 = G__53645;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52650 = conformed_args__49162__auto__;
var map__52650__$1 = cljs.core.__destructure_map(map__52650);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq52649){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52649));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53646 = arguments.length;
var i__5770__auto___53647 = (0);
while(true){
if((i__5770__auto___53647 < len__5769__auto___53646)){
args__5775__auto__.push((arguments[i__5770__auto___53647]));

var G__53648 = (i__5770__auto___53647 + (1));
i__5770__auto___53647 = G__53648;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52657 = conformed_args__49162__auto__;
var map__52657__$1 = cljs.core.__destructure_map(map__52657);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq52652){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52652));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53649 = arguments.length;
var i__5770__auto___53650 = (0);
while(true){
if((i__5770__auto___53650 < len__5769__auto___53649)){
args__5775__auto__.push((arguments[i__5770__auto___53650]));

var G__53651 = (i__5770__auto___53650 + (1));
i__5770__auto___53650 = G__53651;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52659 = conformed_args__49162__auto__;
var map__52659__$1 = cljs.core.__destructure_map(map__52659);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq52658){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53652 = arguments.length;
var i__5770__auto___53653 = (0);
while(true){
if((i__5770__auto___53653 < len__5769__auto___53652)){
args__5775__auto__.push((arguments[i__5770__auto___53653]));

var G__53654 = (i__5770__auto___53653 + (1));
i__5770__auto___53653 = G__53654;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52665 = conformed_args__49162__auto__;
var map__52665__$1 = cljs.core.__destructure_map(map__52665);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq52664){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52664));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53655 = arguments.length;
var i__5770__auto___53656 = (0);
while(true){
if((i__5770__auto___53656 < len__5769__auto___53655)){
args__5775__auto__.push((arguments[i__5770__auto___53656]));

var G__53657 = (i__5770__auto___53656 + (1));
i__5770__auto___53656 = G__53657;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52671 = conformed_args__49162__auto__;
var map__52671__$1 = cljs.core.__destructure_map(map__52671);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq52667){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52667));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53658 = arguments.length;
var i__5770__auto___53659 = (0);
while(true){
if((i__5770__auto___53659 < len__5769__auto___53658)){
args__5775__auto__.push((arguments[i__5770__auto___53659]));

var G__53660 = (i__5770__auto___53659 + (1));
i__5770__auto___53659 = G__53660;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52674 = conformed_args__49162__auto__;
var map__52674__$1 = cljs.core.__destructure_map(map__52674);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq52672){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52672));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53661 = arguments.length;
var i__5770__auto___53662 = (0);
while(true){
if((i__5770__auto___53662 < len__5769__auto___53661)){
args__5775__auto__.push((arguments[i__5770__auto___53662]));

var G__53663 = (i__5770__auto___53662 + (1));
i__5770__auto___53662 = G__53663;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52683 = conformed_args__49162__auto__;
var map__52683__$1 = cljs.core.__destructure_map(map__52683);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq52677){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52677));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53664 = arguments.length;
var i__5770__auto___53665 = (0);
while(true){
if((i__5770__auto___53665 < len__5769__auto___53664)){
args__5775__auto__.push((arguments[i__5770__auto___53665]));

var G__53666 = (i__5770__auto___53665 + (1));
i__5770__auto___53665 = G__53666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52693 = conformed_args__49162__auto__;
var map__52693__$1 = cljs.core.__destructure_map(map__52693);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq52689){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53667 = arguments.length;
var i__5770__auto___53668 = (0);
while(true){
if((i__5770__auto___53668 < len__5769__auto___53667)){
args__5775__auto__.push((arguments[i__5770__auto___53668]));

var G__53669 = (i__5770__auto___53668 + (1));
i__5770__auto___53668 = G__53669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52698 = conformed_args__49162__auto__;
var map__52698__$1 = cljs.core.__destructure_map(map__52698);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq52696){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52696));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53670 = arguments.length;
var i__5770__auto___53671 = (0);
while(true){
if((i__5770__auto___53671 < len__5769__auto___53670)){
args__5775__auto__.push((arguments[i__5770__auto___53671]));

var G__53672 = (i__5770__auto___53671 + (1));
i__5770__auto___53671 = G__53672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52706 = conformed_args__49162__auto__;
var map__52706__$1 = cljs.core.__destructure_map(map__52706);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq52703){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53673 = arguments.length;
var i__5770__auto___53674 = (0);
while(true){
if((i__5770__auto___53674 < len__5769__auto___53673)){
args__5775__auto__.push((arguments[i__5770__auto___53674]));

var G__53675 = (i__5770__auto___53674 + (1));
i__5770__auto___53674 = G__53675;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52715 = conformed_args__49162__auto__;
var map__52715__$1 = cljs.core.__destructure_map(map__52715);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq52709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53676 = arguments.length;
var i__5770__auto___53677 = (0);
while(true){
if((i__5770__auto___53677 < len__5769__auto___53676)){
args__5775__auto__.push((arguments[i__5770__auto___53677]));

var G__53678 = (i__5770__auto___53677 + (1));
i__5770__auto___53677 = G__53678;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52723 = conformed_args__49162__auto__;
var map__52723__$1 = cljs.core.__destructure_map(map__52723);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq52720){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52720));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53679 = arguments.length;
var i__5770__auto___53680 = (0);
while(true){
if((i__5770__auto___53680 < len__5769__auto___53679)){
args__5775__auto__.push((arguments[i__5770__auto___53680]));

var G__53681 = (i__5770__auto___53680 + (1));
i__5770__auto___53680 = G__53681;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52733 = conformed_args__49162__auto__;
var map__52733__$1 = cljs.core.__destructure_map(map__52733);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq52728){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52728));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53682 = arguments.length;
var i__5770__auto___53683 = (0);
while(true){
if((i__5770__auto___53683 < len__5769__auto___53682)){
args__5775__auto__.push((arguments[i__5770__auto___53683]));

var G__53684 = (i__5770__auto___53683 + (1));
i__5770__auto___53683 = G__53684;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52738 = conformed_args__49162__auto__;
var map__52738__$1 = cljs.core.__destructure_map(map__52738);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq52736){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53685 = arguments.length;
var i__5770__auto___53686 = (0);
while(true){
if((i__5770__auto___53686 < len__5769__auto___53685)){
args__5775__auto__.push((arguments[i__5770__auto___53686]));

var G__53687 = (i__5770__auto___53686 + (1));
i__5770__auto___53686 = G__53687;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52746 = conformed_args__49162__auto__;
var map__52746__$1 = cljs.core.__destructure_map(map__52746);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq52741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53688 = arguments.length;
var i__5770__auto___53689 = (0);
while(true){
if((i__5770__auto___53689 < len__5769__auto___53688)){
args__5775__auto__.push((arguments[i__5770__auto___53689]));

var G__53690 = (i__5770__auto___53689 + (1));
i__5770__auto___53689 = G__53690;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52751 = conformed_args__49162__auto__;
var map__52751__$1 = cljs.core.__destructure_map(map__52751);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq52748){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52748));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53691 = arguments.length;
var i__5770__auto___53692 = (0);
while(true){
if((i__5770__auto___53692 < len__5769__auto___53691)){
args__5775__auto__.push((arguments[i__5770__auto___53692]));

var G__53693 = (i__5770__auto___53692 + (1));
i__5770__auto___53692 = G__53693;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52757 = conformed_args__49162__auto__;
var map__52757__$1 = cljs.core.__destructure_map(map__52757);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq52756){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53694 = arguments.length;
var i__5770__auto___53695 = (0);
while(true){
if((i__5770__auto___53695 < len__5769__auto___53694)){
args__5775__auto__.push((arguments[i__5770__auto___53695]));

var G__53696 = (i__5770__auto___53695 + (1));
i__5770__auto___53695 = G__53696;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52762 = conformed_args__49162__auto__;
var map__52762__$1 = cljs.core.__destructure_map(map__52762);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq52760){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53697 = arguments.length;
var i__5770__auto___53698 = (0);
while(true){
if((i__5770__auto___53698 < len__5769__auto___53697)){
args__5775__auto__.push((arguments[i__5770__auto___53698]));

var G__53699 = (i__5770__auto___53698 + (1));
i__5770__auto___53698 = G__53699;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52767 = conformed_args__49162__auto__;
var map__52767__$1 = cljs.core.__destructure_map(map__52767);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq52766){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53700 = arguments.length;
var i__5770__auto___53701 = (0);
while(true){
if((i__5770__auto___53701 < len__5769__auto___53700)){
args__5775__auto__.push((arguments[i__5770__auto___53701]));

var G__53702 = (i__5770__auto___53701 + (1));
i__5770__auto___53701 = G__53702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52780 = conformed_args__49162__auto__;
var map__52780__$1 = cljs.core.__destructure_map(map__52780);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq52779){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52779));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53703 = arguments.length;
var i__5770__auto___53704 = (0);
while(true){
if((i__5770__auto___53704 < len__5769__auto___53703)){
args__5775__auto__.push((arguments[i__5770__auto___53704]));

var G__53705 = (i__5770__auto___53704 + (1));
i__5770__auto___53704 = G__53705;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52789 = conformed_args__49162__auto__;
var map__52789__$1 = cljs.core.__destructure_map(map__52789);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq52784){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52784));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53706 = arguments.length;
var i__5770__auto___53707 = (0);
while(true){
if((i__5770__auto___53707 < len__5769__auto___53706)){
args__5775__auto__.push((arguments[i__5770__auto___53707]));

var G__53708 = (i__5770__auto___53707 + (1));
i__5770__auto___53707 = G__53708;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52795 = conformed_args__49162__auto__;
var map__52795__$1 = cljs.core.__destructure_map(map__52795);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq52794){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52794));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53709 = arguments.length;
var i__5770__auto___53710 = (0);
while(true){
if((i__5770__auto___53710 < len__5769__auto___53709)){
args__5775__auto__.push((arguments[i__5770__auto___53710]));

var G__53711 = (i__5770__auto___53710 + (1));
i__5770__auto___53710 = G__53711;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52806 = conformed_args__49162__auto__;
var map__52806__$1 = cljs.core.__destructure_map(map__52806);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq52798){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52798));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53712 = arguments.length;
var i__5770__auto___53713 = (0);
while(true){
if((i__5770__auto___53713 < len__5769__auto___53712)){
args__5775__auto__.push((arguments[i__5770__auto___53713]));

var G__53714 = (i__5770__auto___53713 + (1));
i__5770__auto___53713 = G__53714;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52809 = conformed_args__49162__auto__;
var map__52809__$1 = cljs.core.__destructure_map(map__52809);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq52807){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52807));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53715 = arguments.length;
var i__5770__auto___53716 = (0);
while(true){
if((i__5770__auto___53716 < len__5769__auto___53715)){
args__5775__auto__.push((arguments[i__5770__auto___53716]));

var G__53717 = (i__5770__auto___53716 + (1));
i__5770__auto___53716 = G__53717;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52818 = conformed_args__49162__auto__;
var map__52818__$1 = cljs.core.__destructure_map(map__52818);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq52817){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52817));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53718 = arguments.length;
var i__5770__auto___53719 = (0);
while(true){
if((i__5770__auto___53719 < len__5769__auto___53718)){
args__5775__auto__.push((arguments[i__5770__auto___53719]));

var G__53720 = (i__5770__auto___53719 + (1));
i__5770__auto___53719 = G__53720;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52825 = conformed_args__49162__auto__;
var map__52825__$1 = cljs.core.__destructure_map(map__52825);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq52820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53721 = arguments.length;
var i__5770__auto___53722 = (0);
while(true){
if((i__5770__auto___53722 < len__5769__auto___53721)){
args__5775__auto__.push((arguments[i__5770__auto___53722]));

var G__53723 = (i__5770__auto___53722 + (1));
i__5770__auto___53722 = G__53723;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52829 = conformed_args__49162__auto__;
var map__52829__$1 = cljs.core.__destructure_map(map__52829);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq52826){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52826));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53724 = arguments.length;
var i__5770__auto___53725 = (0);
while(true){
if((i__5770__auto___53725 < len__5769__auto___53724)){
args__5775__auto__.push((arguments[i__5770__auto___53725]));

var G__53726 = (i__5770__auto___53725 + (1));
i__5770__auto___53725 = G__53726;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52832 = conformed_args__49162__auto__;
var map__52832__$1 = cljs.core.__destructure_map(map__52832);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq52830){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53727 = arguments.length;
var i__5770__auto___53728 = (0);
while(true){
if((i__5770__auto___53728 < len__5769__auto___53727)){
args__5775__auto__.push((arguments[i__5770__auto___53728]));

var G__53729 = (i__5770__auto___53728 + (1));
i__5770__auto___53728 = G__53729;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52837 = conformed_args__49162__auto__;
var map__52837__$1 = cljs.core.__destructure_map(map__52837);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq52835){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52835));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53730 = arguments.length;
var i__5770__auto___53731 = (0);
while(true){
if((i__5770__auto___53731 < len__5769__auto___53730)){
args__5775__auto__.push((arguments[i__5770__auto___53731]));

var G__53732 = (i__5770__auto___53731 + (1));
i__5770__auto___53731 = G__53732;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52841 = conformed_args__49162__auto__;
var map__52841__$1 = cljs.core.__destructure_map(map__52841);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq52839){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52839));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53733 = arguments.length;
var i__5770__auto___53734 = (0);
while(true){
if((i__5770__auto___53734 < len__5769__auto___53733)){
args__5775__auto__.push((arguments[i__5770__auto___53734]));

var G__53735 = (i__5770__auto___53734 + (1));
i__5770__auto___53734 = G__53735;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52845 = conformed_args__49162__auto__;
var map__52845__$1 = cljs.core.__destructure_map(map__52845);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq52843){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52843));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53736 = arguments.length;
var i__5770__auto___53737 = (0);
while(true){
if((i__5770__auto___53737 < len__5769__auto___53736)){
args__5775__auto__.push((arguments[i__5770__auto___53737]));

var G__53738 = (i__5770__auto___53737 + (1));
i__5770__auto___53737 = G__53738;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52852 = conformed_args__49162__auto__;
var map__52852__$1 = cljs.core.__destructure_map(map__52852);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq52848){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52848));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53739 = arguments.length;
var i__5770__auto___53740 = (0);
while(true){
if((i__5770__auto___53740 < len__5769__auto___53739)){
args__5775__auto__.push((arguments[i__5770__auto___53740]));

var G__53741 = (i__5770__auto___53740 + (1));
i__5770__auto___53740 = G__53741;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52856 = conformed_args__49162__auto__;
var map__52856__$1 = cljs.core.__destructure_map(map__52856);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq52854){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52854));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53742 = arguments.length;
var i__5770__auto___53743 = (0);
while(true){
if((i__5770__auto___53743 < len__5769__auto___53742)){
args__5775__auto__.push((arguments[i__5770__auto___53743]));

var G__53744 = (i__5770__auto___53743 + (1));
i__5770__auto___53743 = G__53744;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52858 = conformed_args__49162__auto__;
var map__52858__$1 = cljs.core.__destructure_map(map__52858);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq52857){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53745 = arguments.length;
var i__5770__auto___53746 = (0);
while(true){
if((i__5770__auto___53746 < len__5769__auto___53745)){
args__5775__auto__.push((arguments[i__5770__auto___53746]));

var G__53747 = (i__5770__auto___53746 + (1));
i__5770__auto___53746 = G__53747;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52860 = conformed_args__49162__auto__;
var map__52860__$1 = cljs.core.__destructure_map(map__52860);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq52859){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52859));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53748 = arguments.length;
var i__5770__auto___53749 = (0);
while(true){
if((i__5770__auto___53749 < len__5769__auto___53748)){
args__5775__auto__.push((arguments[i__5770__auto___53749]));

var G__53750 = (i__5770__auto___53749 + (1));
i__5770__auto___53749 = G__53750;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52868 = conformed_args__49162__auto__;
var map__52868__$1 = cljs.core.__destructure_map(map__52868);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq52864){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52864));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53751 = arguments.length;
var i__5770__auto___53752 = (0);
while(true){
if((i__5770__auto___53752 < len__5769__auto___53751)){
args__5775__auto__.push((arguments[i__5770__auto___53752]));

var G__53753 = (i__5770__auto___53752 + (1));
i__5770__auto___53752 = G__53753;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52876 = conformed_args__49162__auto__;
var map__52876__$1 = cljs.core.__destructure_map(map__52876);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq52872){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52872));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53754 = arguments.length;
var i__5770__auto___53755 = (0);
while(true){
if((i__5770__auto___53755 < len__5769__auto___53754)){
args__5775__auto__.push((arguments[i__5770__auto___53755]));

var G__53756 = (i__5770__auto___53755 + (1));
i__5770__auto___53755 = G__53756;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49162__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52902 = conformed_args__49162__auto__;
var map__52902__$1 = cljs.core.__destructure_map(map__52902);
var attrs__49163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__49165__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49164__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__49164__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49164__auto__);
var attrs_value__49166__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__49163__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49166__auto__], null),children__49164__auto____$1),css__49165__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq52890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52890));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
