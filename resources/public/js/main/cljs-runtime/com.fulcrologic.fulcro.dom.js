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
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__53302){
var vec__53303 = p__53302;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53303,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53303,(1),null);
var pair = vec__53303;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__53311){
var vec__53313 = p__53311;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53313,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53313,(1),null);
var pair = vec__53313;
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
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__53326){
var vec__53327 = p__53326;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__53330 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53330,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__53330;
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
var G__53337 = arguments.length;
switch (G__53337) {
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
var G__53339 = component.refs;
var G__53339__$1 = (((G__53339 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__53339,name));
if((G__53339__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__53339__$1);
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
var G__53344 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__53346 = (function (){var G__53348 = r;
if((G__53348 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__53348);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__53346) : ref.call(null,G__53346));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__53344) : factory.call(null,G__53344));
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
var G__53355 = arguments.length;
switch (G__53355) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___55536 = arguments.length;
var i__5770__auto___55537 = (0);
while(true){
if((i__5770__auto___55537 < len__5769__auto___55536)){
args_arr__5794__auto__.push((arguments[i__5770__auto___55537]));

var G__55538 = (i__5770__auto___55537 + (1));
i__5770__auto___55537 = G__55538;
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
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq53352){
var G__53353 = cljs.core.first(seq53352);
var seq53352__$1 = cljs.core.next(seq53352);
var G__53354 = cljs.core.first(seq53352__$1);
var seq53352__$2 = cljs.core.next(seq53352__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53353,G__53354,seq53352__$2);
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
var G__53375 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__53375) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__53375));
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

var x53378_55540 = ctor.prototype;
(x53378_55540.onChange = (function (event){
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

(x53378_55540.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__53376_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__53376_SHARP_);
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,2141884075);
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

(x53378_55540.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__55541__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__55541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55542__i = 0, G__55542__a = new Array(arguments.length -  0);
while (G__55542__i < G__55542__a.length) {G__55542__a[G__55542__i] = arguments[G__55542__i + 0]; ++G__55542__i;}
  args = new cljs.core.IndexedSeq(G__55542__a,0,null);
} 
return G__55541__delegate.call(this,args);};
G__55541.cljs$lang$maxFixedArity = 0;
G__55541.cljs$lang$applyTo = (function (arglist__55543){
var args = cljs.core.seq(arglist__55543);
return G__55541__delegate(args);
});
G__55541.cljs$core$IFn$_invoke$arity$variadic = G__55541__delegate;
return G__55541;
})()
;
return (function() { 
var G__55544__delegate = function (props,children){
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
var G__55544 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__55545__i = 0, G__55545__a = new Array(arguments.length -  1);
while (G__55545__i < G__55545__a.length) {G__55545__a[G__55545__i] = arguments[G__55545__i + 1]; ++G__55545__i;}
  children = new cljs.core.IndexedSeq(G__55545__a,0,null);
} 
return G__55544__delegate.call(this,props,children);};
G__55544.cljs$lang$maxFixedArity = 1;
G__55544.cljs$lang$applyTo = (function (arglist__55546){
var props = cljs.core.first(arglist__55546);
var children = cljs.core.rest(arglist__55546);
return G__55544__delegate(props,children);
});
G__55544.cljs$core$IFn$_invoke$arity$variadic = G__55544__delegate;
return G__55544;
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
var G__53391 = tag;
switch (G__53391) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53391)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__53395 = arguments.length;
switch (G__53395) {
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
var vec__53398 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__53399 = cljs.core.seq(vec__53398);
var first__53400 = cljs.core.first(seq__53399);
var seq__53399__$1 = cljs.core.next(seq__53399);
var head = first__53400;
var tail = seq__53399__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__53403 = (function (){var G__53404 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53404,tail);

return G__53404;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53403) : f.call(null,G__53403));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__53407 = (function (){var G__53408 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53408,args);

return G__53408;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53407) : f.call(null,G__53407));
} else {
if(cljs.core.object_QMARK_(head)){
var G__53409 = (function (){var G__53410 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53410,tail);

return G__53410;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53409) : f.call(null,G__53409));
} else {
if(cljs.core.map_QMARK_(head)){
var G__53411 = (function (){var G__53412 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__53412,tail);

return G__53412;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53411) : f.call(null,G__53411));
} else {
var G__53414 = (function (){var G__53415 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53415,args);

return G__53415;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53414) : f.call(null,G__53414));

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
var G__53419 = arguments.length;
switch (G__53419) {
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
var vec__53425 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__53426 = cljs.core.seq(vec__53425);
var first__53427 = cljs.core.first(seq__53426);
var seq__53426__$1 = cljs.core.next(seq__53426);
var head = first__53427;
var tail = seq__53426__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53428 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53428,tail);

return G__53428;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53429 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53429,args);

return G__53429;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53430 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53430,tail);

return G__53430;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53431 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__53431,tail);

return G__53431;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53433 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53433,args);

return G__53433;
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
var len__5769__auto___55570 = arguments.length;
var i__5770__auto___55571 = (0);
while(true){
if((i__5770__auto___55571 < len__5769__auto___55570)){
args__5775__auto__.push((arguments[i__5770__auto___55571]));

var G__55572 = (i__5770__auto___55571 + (1));
i__5770__auto___55571 = G__55572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53439 = conformed_args__52031__auto__;
var map__53439__$1 = cljs.core.__destructure_map(map__53439);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq53437){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53437));
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
var len__5769__auto___55580 = arguments.length;
var i__5770__auto___55581 = (0);
while(true){
if((i__5770__auto___55581 < len__5769__auto___55580)){
args__5775__auto__.push((arguments[i__5770__auto___55581]));

var G__55582 = (i__5770__auto___55581 + (1));
i__5770__auto___55581 = G__55582;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53442 = conformed_args__52031__auto__;
var map__53442__$1 = cljs.core.__destructure_map(map__53442);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq53441){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53441));
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
var len__5769__auto___55583 = arguments.length;
var i__5770__auto___55584 = (0);
while(true){
if((i__5770__auto___55584 < len__5769__auto___55583)){
args__5775__auto__.push((arguments[i__5770__auto___55584]));

var G__55585 = (i__5770__auto___55584 + (1));
i__5770__auto___55584 = G__55585;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53450 = conformed_args__52031__auto__;
var map__53450__$1 = cljs.core.__destructure_map(map__53450);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq53446){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53446));
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
var len__5769__auto___55587 = arguments.length;
var i__5770__auto___55588 = (0);
while(true){
if((i__5770__auto___55588 < len__5769__auto___55587)){
args__5775__auto__.push((arguments[i__5770__auto___55588]));

var G__55589 = (i__5770__auto___55588 + (1));
i__5770__auto___55588 = G__55589;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53454 = conformed_args__52031__auto__;
var map__53454__$1 = cljs.core.__destructure_map(map__53454);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq53452){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53452));
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
var len__5769__auto___55590 = arguments.length;
var i__5770__auto___55591 = (0);
while(true){
if((i__5770__auto___55591 < len__5769__auto___55590)){
args__5775__auto__.push((arguments[i__5770__auto___55591]));

var G__55592 = (i__5770__auto___55591 + (1));
i__5770__auto___55591 = G__55592;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53461 = conformed_args__52031__auto__;
var map__53461__$1 = cljs.core.__destructure_map(map__53461);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53461__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53461__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq53459){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53459));
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
var len__5769__auto___55593 = arguments.length;
var i__5770__auto___55594 = (0);
while(true){
if((i__5770__auto___55594 < len__5769__auto___55593)){
args__5775__auto__.push((arguments[i__5770__auto___55594]));

var G__55595 = (i__5770__auto___55594 + (1));
i__5770__auto___55594 = G__55595;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53468 = conformed_args__52031__auto__;
var map__53468__$1 = cljs.core.__destructure_map(map__53468);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq53465){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53465));
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
var len__5769__auto___55596 = arguments.length;
var i__5770__auto___55597 = (0);
while(true){
if((i__5770__auto___55597 < len__5769__auto___55596)){
args__5775__auto__.push((arguments[i__5770__auto___55597]));

var G__55598 = (i__5770__auto___55597 + (1));
i__5770__auto___55597 = G__55598;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53479 = conformed_args__52031__auto__;
var map__53479__$1 = cljs.core.__destructure_map(map__53479);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq53474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53474));
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
var len__5769__auto___55603 = arguments.length;
var i__5770__auto___55606 = (0);
while(true){
if((i__5770__auto___55606 < len__5769__auto___55603)){
args__5775__auto__.push((arguments[i__5770__auto___55606]));

var G__55607 = (i__5770__auto___55606 + (1));
i__5770__auto___55606 = G__55607;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53484 = conformed_args__52031__auto__;
var map__53484__$1 = cljs.core.__destructure_map(map__53484);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq53482){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53482));
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
var len__5769__auto___55608 = arguments.length;
var i__5770__auto___55609 = (0);
while(true){
if((i__5770__auto___55609 < len__5769__auto___55608)){
args__5775__auto__.push((arguments[i__5770__auto___55609]));

var G__55610 = (i__5770__auto___55609 + (1));
i__5770__auto___55609 = G__55610;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53491 = conformed_args__52031__auto__;
var map__53491__$1 = cljs.core.__destructure_map(map__53491);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53491__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53491__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq53486){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53486));
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
var len__5769__auto___55613 = arguments.length;
var i__5770__auto___55614 = (0);
while(true){
if((i__5770__auto___55614 < len__5769__auto___55613)){
args__5775__auto__.push((arguments[i__5770__auto___55614]));

var G__55615 = (i__5770__auto___55614 + (1));
i__5770__auto___55614 = G__55615;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53495 = conformed_args__52031__auto__;
var map__53495__$1 = cljs.core.__destructure_map(map__53495);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq53492){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53492));
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
var len__5769__auto___55616 = arguments.length;
var i__5770__auto___55617 = (0);
while(true){
if((i__5770__auto___55617 < len__5769__auto___55616)){
args__5775__auto__.push((arguments[i__5770__auto___55617]));

var G__55618 = (i__5770__auto___55617 + (1));
i__5770__auto___55617 = G__55618;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53501 = conformed_args__52031__auto__;
var map__53501__$1 = cljs.core.__destructure_map(map__53501);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq53498){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53498));
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
var len__5769__auto___55620 = arguments.length;
var i__5770__auto___55621 = (0);
while(true){
if((i__5770__auto___55621 < len__5769__auto___55620)){
args__5775__auto__.push((arguments[i__5770__auto___55621]));

var G__55622 = (i__5770__auto___55621 + (1));
i__5770__auto___55621 = G__55622;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53507 = conformed_args__52031__auto__;
var map__53507__$1 = cljs.core.__destructure_map(map__53507);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq53504){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53504));
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
var len__5769__auto___55628 = arguments.length;
var i__5770__auto___55629 = (0);
while(true){
if((i__5770__auto___55629 < len__5769__auto___55628)){
args__5775__auto__.push((arguments[i__5770__auto___55629]));

var G__55630 = (i__5770__auto___55629 + (1));
i__5770__auto___55629 = G__55630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53513 = conformed_args__52031__auto__;
var map__53513__$1 = cljs.core.__destructure_map(map__53513);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq53510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53510));
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
var len__5769__auto___55641 = arguments.length;
var i__5770__auto___55642 = (0);
while(true){
if((i__5770__auto___55642 < len__5769__auto___55641)){
args__5775__auto__.push((arguments[i__5770__auto___55642]));

var G__55643 = (i__5770__auto___55642 + (1));
i__5770__auto___55642 = G__55643;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53518 = conformed_args__52031__auto__;
var map__53518__$1 = cljs.core.__destructure_map(map__53518);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq53515){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53515));
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
var len__5769__auto___55647 = arguments.length;
var i__5770__auto___55648 = (0);
while(true){
if((i__5770__auto___55648 < len__5769__auto___55647)){
args__5775__auto__.push((arguments[i__5770__auto___55648]));

var G__55649 = (i__5770__auto___55648 + (1));
i__5770__auto___55648 = G__55649;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53524 = conformed_args__52031__auto__;
var map__53524__$1 = cljs.core.__destructure_map(map__53524);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq53521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53521));
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
var len__5769__auto___55652 = arguments.length;
var i__5770__auto___55653 = (0);
while(true){
if((i__5770__auto___55653 < len__5769__auto___55652)){
args__5775__auto__.push((arguments[i__5770__auto___55653]));

var G__55654 = (i__5770__auto___55653 + (1));
i__5770__auto___55653 = G__55654;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53536 = conformed_args__52031__auto__;
var map__53536__$1 = cljs.core.__destructure_map(map__53536);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq53534){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53534));
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
var len__5769__auto___55655 = arguments.length;
var i__5770__auto___55656 = (0);
while(true){
if((i__5770__auto___55656 < len__5769__auto___55655)){
args__5775__auto__.push((arguments[i__5770__auto___55656]));

var G__55657 = (i__5770__auto___55656 + (1));
i__5770__auto___55656 = G__55657;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53546 = conformed_args__52031__auto__;
var map__53546__$1 = cljs.core.__destructure_map(map__53546);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq53541){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53541));
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
var len__5769__auto___55664 = arguments.length;
var i__5770__auto___55665 = (0);
while(true){
if((i__5770__auto___55665 < len__5769__auto___55664)){
args__5775__auto__.push((arguments[i__5770__auto___55665]));

var G__55667 = (i__5770__auto___55665 + (1));
i__5770__auto___55665 = G__55667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53554 = conformed_args__52031__auto__;
var map__53554__$1 = cljs.core.__destructure_map(map__53554);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq53551){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53551));
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
var len__5769__auto___55670 = arguments.length;
var i__5770__auto___55671 = (0);
while(true){
if((i__5770__auto___55671 < len__5769__auto___55670)){
args__5775__auto__.push((arguments[i__5770__auto___55671]));

var G__55672 = (i__5770__auto___55671 + (1));
i__5770__auto___55671 = G__55672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53559 = conformed_args__52031__auto__;
var map__53559__$1 = cljs.core.__destructure_map(map__53559);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq53556){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53556));
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
var len__5769__auto___55675 = arguments.length;
var i__5770__auto___55676 = (0);
while(true){
if((i__5770__auto___55676 < len__5769__auto___55675)){
args__5775__auto__.push((arguments[i__5770__auto___55676]));

var G__55677 = (i__5770__auto___55676 + (1));
i__5770__auto___55676 = G__55677;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53565 = conformed_args__52031__auto__;
var map__53565__$1 = cljs.core.__destructure_map(map__53565);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq53561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53561));
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
var len__5769__auto___55680 = arguments.length;
var i__5770__auto___55681 = (0);
while(true){
if((i__5770__auto___55681 < len__5769__auto___55680)){
args__5775__auto__.push((arguments[i__5770__auto___55681]));

var G__55682 = (i__5770__auto___55681 + (1));
i__5770__auto___55681 = G__55682;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53569 = conformed_args__52031__auto__;
var map__53569__$1 = cljs.core.__destructure_map(map__53569);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq53566){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53566));
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
var len__5769__auto___55684 = arguments.length;
var i__5770__auto___55686 = (0);
while(true){
if((i__5770__auto___55686 < len__5769__auto___55684)){
args__5775__auto__.push((arguments[i__5770__auto___55686]));

var G__55688 = (i__5770__auto___55686 + (1));
i__5770__auto___55686 = G__55688;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53572 = conformed_args__52031__auto__;
var map__53572__$1 = cljs.core.__destructure_map(map__53572);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq53570){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53570));
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
var len__5769__auto___55689 = arguments.length;
var i__5770__auto___55690 = (0);
while(true){
if((i__5770__auto___55690 < len__5769__auto___55689)){
args__5775__auto__.push((arguments[i__5770__auto___55690]));

var G__55691 = (i__5770__auto___55690 + (1));
i__5770__auto___55690 = G__55691;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53577 = conformed_args__52031__auto__;
var map__53577__$1 = cljs.core.__destructure_map(map__53577);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq53576){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53576));
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
var len__5769__auto___55692 = arguments.length;
var i__5770__auto___55693 = (0);
while(true){
if((i__5770__auto___55693 < len__5769__auto___55692)){
args__5775__auto__.push((arguments[i__5770__auto___55693]));

var G__55694 = (i__5770__auto___55693 + (1));
i__5770__auto___55693 = G__55694;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53582 = conformed_args__52031__auto__;
var map__53582__$1 = cljs.core.__destructure_map(map__53582);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq53578){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53578));
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
var len__5769__auto___55701 = arguments.length;
var i__5770__auto___55702 = (0);
while(true){
if((i__5770__auto___55702 < len__5769__auto___55701)){
args__5775__auto__.push((arguments[i__5770__auto___55702]));

var G__55703 = (i__5770__auto___55702 + (1));
i__5770__auto___55702 = G__55703;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53589 = conformed_args__52031__auto__;
var map__53589__$1 = cljs.core.__destructure_map(map__53589);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq53587){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53587));
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
var len__5769__auto___55705 = arguments.length;
var i__5770__auto___55706 = (0);
while(true){
if((i__5770__auto___55706 < len__5769__auto___55705)){
args__5775__auto__.push((arguments[i__5770__auto___55706]));

var G__55707 = (i__5770__auto___55706 + (1));
i__5770__auto___55706 = G__55707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53593 = conformed_args__52031__auto__;
var map__53593__$1 = cljs.core.__destructure_map(map__53593);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53593__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53593__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53593__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq53592){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53592));
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
var len__5769__auto___55710 = arguments.length;
var i__5770__auto___55711 = (0);
while(true){
if((i__5770__auto___55711 < len__5769__auto___55710)){
args__5775__auto__.push((arguments[i__5770__auto___55711]));

var G__55712 = (i__5770__auto___55711 + (1));
i__5770__auto___55711 = G__55712;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53600 = conformed_args__52031__auto__;
var map__53600__$1 = cljs.core.__destructure_map(map__53600);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq53598){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53598));
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
var len__5769__auto___55715 = arguments.length;
var i__5770__auto___55716 = (0);
while(true){
if((i__5770__auto___55716 < len__5769__auto___55715)){
args__5775__auto__.push((arguments[i__5770__auto___55716]));

var G__55718 = (i__5770__auto___55716 + (1));
i__5770__auto___55716 = G__55718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53606 = conformed_args__52031__auto__;
var map__53606__$1 = cljs.core.__destructure_map(map__53606);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq53603){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53603));
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
var len__5769__auto___55719 = arguments.length;
var i__5770__auto___55720 = (0);
while(true){
if((i__5770__auto___55720 < len__5769__auto___55719)){
args__5775__auto__.push((arguments[i__5770__auto___55720]));

var G__55724 = (i__5770__auto___55720 + (1));
i__5770__auto___55720 = G__55724;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53622 = conformed_args__52031__auto__;
var map__53622__$1 = cljs.core.__destructure_map(map__53622);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq53620){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53620));
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
var len__5769__auto___55727 = arguments.length;
var i__5770__auto___55728 = (0);
while(true){
if((i__5770__auto___55728 < len__5769__auto___55727)){
args__5775__auto__.push((arguments[i__5770__auto___55728]));

var G__55729 = (i__5770__auto___55728 + (1));
i__5770__auto___55728 = G__55729;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53627 = conformed_args__52031__auto__;
var map__53627__$1 = cljs.core.__destructure_map(map__53627);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq53625){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53625));
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
var len__5769__auto___55734 = arguments.length;
var i__5770__auto___55735 = (0);
while(true){
if((i__5770__auto___55735 < len__5769__auto___55734)){
args__5775__auto__.push((arguments[i__5770__auto___55735]));

var G__55736 = (i__5770__auto___55735 + (1));
i__5770__auto___55735 = G__55736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53633 = conformed_args__52031__auto__;
var map__53633__$1 = cljs.core.__destructure_map(map__53633);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq53630){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53630));
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
var len__5769__auto___55740 = arguments.length;
var i__5770__auto___55741 = (0);
while(true){
if((i__5770__auto___55741 < len__5769__auto___55740)){
args__5775__auto__.push((arguments[i__5770__auto___55741]));

var G__55750 = (i__5770__auto___55741 + (1));
i__5770__auto___55741 = G__55750;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53638 = conformed_args__52031__auto__;
var map__53638__$1 = cljs.core.__destructure_map(map__53638);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq53635){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53635));
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
var len__5769__auto___55753 = arguments.length;
var i__5770__auto___55754 = (0);
while(true){
if((i__5770__auto___55754 < len__5769__auto___55753)){
args__5775__auto__.push((arguments[i__5770__auto___55754]));

var G__55755 = (i__5770__auto___55754 + (1));
i__5770__auto___55754 = G__55755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53643 = conformed_args__52031__auto__;
var map__53643__$1 = cljs.core.__destructure_map(map__53643);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq53640){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53640));
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
var len__5769__auto___55756 = arguments.length;
var i__5770__auto___55757 = (0);
while(true){
if((i__5770__auto___55757 < len__5769__auto___55756)){
args__5775__auto__.push((arguments[i__5770__auto___55757]));

var G__55758 = (i__5770__auto___55757 + (1));
i__5770__auto___55757 = G__55758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53648 = conformed_args__52031__auto__;
var map__53648__$1 = cljs.core.__destructure_map(map__53648);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq53645){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53645));
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
var len__5769__auto___55759 = arguments.length;
var i__5770__auto___55760 = (0);
while(true){
if((i__5770__auto___55760 < len__5769__auto___55759)){
args__5775__auto__.push((arguments[i__5770__auto___55760]));

var G__55761 = (i__5770__auto___55760 + (1));
i__5770__auto___55760 = G__55761;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53653 = conformed_args__52031__auto__;
var map__53653__$1 = cljs.core.__destructure_map(map__53653);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53653__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53653__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53653__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq53651){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53651));
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
var len__5769__auto___55762 = arguments.length;
var i__5770__auto___55764 = (0);
while(true){
if((i__5770__auto___55764 < len__5769__auto___55762)){
args__5775__auto__.push((arguments[i__5770__auto___55764]));

var G__55765 = (i__5770__auto___55764 + (1));
i__5770__auto___55764 = G__55765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53659 = conformed_args__52031__auto__;
var map__53659__$1 = cljs.core.__destructure_map(map__53659);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq53656){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53656));
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
var len__5769__auto___55767 = arguments.length;
var i__5770__auto___55768 = (0);
while(true){
if((i__5770__auto___55768 < len__5769__auto___55767)){
args__5775__auto__.push((arguments[i__5770__auto___55768]));

var G__55770 = (i__5770__auto___55768 + (1));
i__5770__auto___55768 = G__55770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53664 = conformed_args__52031__auto__;
var map__53664__$1 = cljs.core.__destructure_map(map__53664);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq53661){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53661));
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
var len__5769__auto___55772 = arguments.length;
var i__5770__auto___55774 = (0);
while(true){
if((i__5770__auto___55774 < len__5769__auto___55772)){
args__5775__auto__.push((arguments[i__5770__auto___55774]));

var G__55775 = (i__5770__auto___55774 + (1));
i__5770__auto___55774 = G__55775;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53669 = conformed_args__52031__auto__;
var map__53669__$1 = cljs.core.__destructure_map(map__53669);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq53667){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53667));
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
var len__5769__auto___55778 = arguments.length;
var i__5770__auto___55779 = (0);
while(true){
if((i__5770__auto___55779 < len__5769__auto___55778)){
args__5775__auto__.push((arguments[i__5770__auto___55779]));

var G__55780 = (i__5770__auto___55779 + (1));
i__5770__auto___55779 = G__55780;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53674 = conformed_args__52031__auto__;
var map__53674__$1 = cljs.core.__destructure_map(map__53674);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq53672){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53672));
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
var len__5769__auto___55783 = arguments.length;
var i__5770__auto___55784 = (0);
while(true){
if((i__5770__auto___55784 < len__5769__auto___55783)){
args__5775__auto__.push((arguments[i__5770__auto___55784]));

var G__55785 = (i__5770__auto___55784 + (1));
i__5770__auto___55784 = G__55785;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53678 = conformed_args__52031__auto__;
var map__53678__$1 = cljs.core.__destructure_map(map__53678);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq53677){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53677));
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
var len__5769__auto___55787 = arguments.length;
var i__5770__auto___55788 = (0);
while(true){
if((i__5770__auto___55788 < len__5769__auto___55787)){
args__5775__auto__.push((arguments[i__5770__auto___55788]));

var G__55789 = (i__5770__auto___55788 + (1));
i__5770__auto___55788 = G__55789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53680 = conformed_args__52031__auto__;
var map__53680__$1 = cljs.core.__destructure_map(map__53680);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq53679){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53679));
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
var len__5769__auto___55792 = arguments.length;
var i__5770__auto___55793 = (0);
while(true){
if((i__5770__auto___55793 < len__5769__auto___55792)){
args__5775__auto__.push((arguments[i__5770__auto___55793]));

var G__55794 = (i__5770__auto___55793 + (1));
i__5770__auto___55793 = G__55794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53682 = conformed_args__52031__auto__;
var map__53682__$1 = cljs.core.__destructure_map(map__53682);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq53681){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53681));
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
var len__5769__auto___55795 = arguments.length;
var i__5770__auto___55796 = (0);
while(true){
if((i__5770__auto___55796 < len__5769__auto___55795)){
args__5775__auto__.push((arguments[i__5770__auto___55796]));

var G__55797 = (i__5770__auto___55796 + (1));
i__5770__auto___55796 = G__55797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53684 = conformed_args__52031__auto__;
var map__53684__$1 = cljs.core.__destructure_map(map__53684);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq53683){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53683));
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
var len__5769__auto___55798 = arguments.length;
var i__5770__auto___55799 = (0);
while(true){
if((i__5770__auto___55799 < len__5769__auto___55798)){
args__5775__auto__.push((arguments[i__5770__auto___55799]));

var G__55801 = (i__5770__auto___55799 + (1));
i__5770__auto___55799 = G__55801;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53686 = conformed_args__52031__auto__;
var map__53686__$1 = cljs.core.__destructure_map(map__53686);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq53685){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53685));
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
var len__5769__auto___55803 = arguments.length;
var i__5770__auto___55804 = (0);
while(true){
if((i__5770__auto___55804 < len__5769__auto___55803)){
args__5775__auto__.push((arguments[i__5770__auto___55804]));

var G__55805 = (i__5770__auto___55804 + (1));
i__5770__auto___55804 = G__55805;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53715 = conformed_args__52031__auto__;
var map__53715__$1 = cljs.core.__destructure_map(map__53715);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq53695){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53695));
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
var len__5769__auto___55806 = arguments.length;
var i__5770__auto___55807 = (0);
while(true){
if((i__5770__auto___55807 < len__5769__auto___55806)){
args__5775__auto__.push((arguments[i__5770__auto___55807]));

var G__55808 = (i__5770__auto___55807 + (1));
i__5770__auto___55807 = G__55808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53743 = conformed_args__52031__auto__;
var map__53743__$1 = cljs.core.__destructure_map(map__53743);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq53742){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53742));
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
var len__5769__auto___55810 = arguments.length;
var i__5770__auto___55811 = (0);
while(true){
if((i__5770__auto___55811 < len__5769__auto___55810)){
args__5775__auto__.push((arguments[i__5770__auto___55811]));

var G__55813 = (i__5770__auto___55811 + (1));
i__5770__auto___55811 = G__55813;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53748 = conformed_args__52031__auto__;
var map__53748__$1 = cljs.core.__destructure_map(map__53748);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq53745){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53745));
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
var len__5769__auto___55814 = arguments.length;
var i__5770__auto___55815 = (0);
while(true){
if((i__5770__auto___55815 < len__5769__auto___55814)){
args__5775__auto__.push((arguments[i__5770__auto___55815]));

var G__55816 = (i__5770__auto___55815 + (1));
i__5770__auto___55815 = G__55816;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53755 = conformed_args__52031__auto__;
var map__53755__$1 = cljs.core.__destructure_map(map__53755);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq53749){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53749));
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
var len__5769__auto___55819 = arguments.length;
var i__5770__auto___55820 = (0);
while(true){
if((i__5770__auto___55820 < len__5769__auto___55819)){
args__5775__auto__.push((arguments[i__5770__auto___55820]));

var G__55821 = (i__5770__auto___55820 + (1));
i__5770__auto___55820 = G__55821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53789 = conformed_args__52031__auto__;
var map__53789__$1 = cljs.core.__destructure_map(map__53789);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq53772){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53772));
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
var len__5769__auto___55822 = arguments.length;
var i__5770__auto___55823 = (0);
while(true){
if((i__5770__auto___55823 < len__5769__auto___55822)){
args__5775__auto__.push((arguments[i__5770__auto___55823]));

var G__55824 = (i__5770__auto___55823 + (1));
i__5770__auto___55823 = G__55824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53800 = conformed_args__52031__auto__;
var map__53800__$1 = cljs.core.__destructure_map(map__53800);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53800__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53800__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53800__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq53796){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53796));
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
var len__5769__auto___55827 = arguments.length;
var i__5770__auto___55828 = (0);
while(true){
if((i__5770__auto___55828 < len__5769__auto___55827)){
args__5775__auto__.push((arguments[i__5770__auto___55828]));

var G__55831 = (i__5770__auto___55828 + (1));
i__5770__auto___55828 = G__55831;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53808 = conformed_args__52031__auto__;
var map__53808__$1 = cljs.core.__destructure_map(map__53808);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq53804){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53804));
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
var len__5769__auto___55832 = arguments.length;
var i__5770__auto___55833 = (0);
while(true){
if((i__5770__auto___55833 < len__5769__auto___55832)){
args__5775__auto__.push((arguments[i__5770__auto___55833]));

var G__55834 = (i__5770__auto___55833 + (1));
i__5770__auto___55833 = G__55834;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53811 = conformed_args__52031__auto__;
var map__53811__$1 = cljs.core.__destructure_map(map__53811);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq53809){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53809));
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
var len__5769__auto___55835 = arguments.length;
var i__5770__auto___55836 = (0);
while(true){
if((i__5770__auto___55836 < len__5769__auto___55835)){
args__5775__auto__.push((arguments[i__5770__auto___55836]));

var G__55837 = (i__5770__auto___55836 + (1));
i__5770__auto___55836 = G__55837;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53823 = conformed_args__52031__auto__;
var map__53823__$1 = cljs.core.__destructure_map(map__53823);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq53819){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53819));
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
var len__5769__auto___55840 = arguments.length;
var i__5770__auto___55841 = (0);
while(true){
if((i__5770__auto___55841 < len__5769__auto___55840)){
args__5775__auto__.push((arguments[i__5770__auto___55841]));

var G__55842 = (i__5770__auto___55841 + (1));
i__5770__auto___55841 = G__55842;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53833 = conformed_args__52031__auto__;
var map__53833__$1 = cljs.core.__destructure_map(map__53833);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq53824){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53824));
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
var len__5769__auto___55843 = arguments.length;
var i__5770__auto___55844 = (0);
while(true){
if((i__5770__auto___55844 < len__5769__auto___55843)){
args__5775__auto__.push((arguments[i__5770__auto___55844]));

var G__55845 = (i__5770__auto___55844 + (1));
i__5770__auto___55844 = G__55845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53844 = conformed_args__52031__auto__;
var map__53844__$1 = cljs.core.__destructure_map(map__53844);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq53840){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53840));
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
var len__5769__auto___55846 = arguments.length;
var i__5770__auto___55847 = (0);
while(true){
if((i__5770__auto___55847 < len__5769__auto___55846)){
args__5775__auto__.push((arguments[i__5770__auto___55847]));

var G__55848 = (i__5770__auto___55847 + (1));
i__5770__auto___55847 = G__55848;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53856 = conformed_args__52031__auto__;
var map__53856__$1 = cljs.core.__destructure_map(map__53856);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq53854){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53854));
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
var len__5769__auto___55849 = arguments.length;
var i__5770__auto___55850 = (0);
while(true){
if((i__5770__auto___55850 < len__5769__auto___55849)){
args__5775__auto__.push((arguments[i__5770__auto___55850]));

var G__55851 = (i__5770__auto___55850 + (1));
i__5770__auto___55850 = G__55851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53859 = conformed_args__52031__auto__;
var map__53859__$1 = cljs.core.__destructure_map(map__53859);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq53858){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53858));
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
var len__5769__auto___55852 = arguments.length;
var i__5770__auto___55853 = (0);
while(true){
if((i__5770__auto___55853 < len__5769__auto___55852)){
args__5775__auto__.push((arguments[i__5770__auto___55853]));

var G__55854 = (i__5770__auto___55853 + (1));
i__5770__auto___55853 = G__55854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53861 = conformed_args__52031__auto__;
var map__53861__$1 = cljs.core.__destructure_map(map__53861);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq53860){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53860));
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
var len__5769__auto___55856 = arguments.length;
var i__5770__auto___55857 = (0);
while(true){
if((i__5770__auto___55857 < len__5769__auto___55856)){
args__5775__auto__.push((arguments[i__5770__auto___55857]));

var G__55858 = (i__5770__auto___55857 + (1));
i__5770__auto___55857 = G__55858;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53894 = conformed_args__52031__auto__;
var map__53894__$1 = cljs.core.__destructure_map(map__53894);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq53876){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53876));
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
var len__5769__auto___55859 = arguments.length;
var i__5770__auto___55860 = (0);
while(true){
if((i__5770__auto___55860 < len__5769__auto___55859)){
args__5775__auto__.push((arguments[i__5770__auto___55860]));

var G__55861 = (i__5770__auto___55860 + (1));
i__5770__auto___55860 = G__55861;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53916 = conformed_args__52031__auto__;
var map__53916__$1 = cljs.core.__destructure_map(map__53916);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq53901){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53901));
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
var len__5769__auto___55862 = arguments.length;
var i__5770__auto___55863 = (0);
while(true){
if((i__5770__auto___55863 < len__5769__auto___55862)){
args__5775__auto__.push((arguments[i__5770__auto___55863]));

var G__55864 = (i__5770__auto___55863 + (1));
i__5770__auto___55863 = G__55864;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53954 = conformed_args__52031__auto__;
var map__53954__$1 = cljs.core.__destructure_map(map__53954);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq53945){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53945));
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
var len__5769__auto___55866 = arguments.length;
var i__5770__auto___55867 = (0);
while(true){
if((i__5770__auto___55867 < len__5769__auto___55866)){
args__5775__auto__.push((arguments[i__5770__auto___55867]));

var G__55868 = (i__5770__auto___55867 + (1));
i__5770__auto___55867 = G__55868;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53964 = conformed_args__52031__auto__;
var map__53964__$1 = cljs.core.__destructure_map(map__53964);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq53962){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53962));
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
var len__5769__auto___55869 = arguments.length;
var i__5770__auto___55870 = (0);
while(true){
if((i__5770__auto___55870 < len__5769__auto___55869)){
args__5775__auto__.push((arguments[i__5770__auto___55870]));

var G__55871 = (i__5770__auto___55870 + (1));
i__5770__auto___55870 = G__55871;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53974 = conformed_args__52031__auto__;
var map__53974__$1 = cljs.core.__destructure_map(map__53974);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq53965){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53965));
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
var len__5769__auto___55872 = arguments.length;
var i__5770__auto___55873 = (0);
while(true){
if((i__5770__auto___55873 < len__5769__auto___55872)){
args__5775__auto__.push((arguments[i__5770__auto___55873]));

var G__55874 = (i__5770__auto___55873 + (1));
i__5770__auto___55873 = G__55874;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53984 = conformed_args__52031__auto__;
var map__53984__$1 = cljs.core.__destructure_map(map__53984);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq53977){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53977));
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
var len__5769__auto___55875 = arguments.length;
var i__5770__auto___55876 = (0);
while(true){
if((i__5770__auto___55876 < len__5769__auto___55875)){
args__5775__auto__.push((arguments[i__5770__auto___55876]));

var G__55877 = (i__5770__auto___55876 + (1));
i__5770__auto___55876 = G__55877;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54005 = conformed_args__52031__auto__;
var map__54005__$1 = cljs.core.__destructure_map(map__54005);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq53994){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53994));
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
var len__5769__auto___55879 = arguments.length;
var i__5770__auto___55880 = (0);
while(true){
if((i__5770__auto___55880 < len__5769__auto___55879)){
args__5775__auto__.push((arguments[i__5770__auto___55880]));

var G__55881 = (i__5770__auto___55880 + (1));
i__5770__auto___55880 = G__55881;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54092 = conformed_args__52031__auto__;
var map__54092__$1 = cljs.core.__destructure_map(map__54092);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq54046){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54046));
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
var len__5769__auto___55882 = arguments.length;
var i__5770__auto___55883 = (0);
while(true){
if((i__5770__auto___55883 < len__5769__auto___55882)){
args__5775__auto__.push((arguments[i__5770__auto___55883]));

var G__55884 = (i__5770__auto___55883 + (1));
i__5770__auto___55883 = G__55884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54125 = conformed_args__52031__auto__;
var map__54125__$1 = cljs.core.__destructure_map(map__54125);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq54121){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54121));
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
var len__5769__auto___55885 = arguments.length;
var i__5770__auto___55886 = (0);
while(true){
if((i__5770__auto___55886 < len__5769__auto___55885)){
args__5775__auto__.push((arguments[i__5770__auto___55886]));

var G__55887 = (i__5770__auto___55886 + (1));
i__5770__auto___55886 = G__55887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54150 = conformed_args__52031__auto__;
var map__54150__$1 = cljs.core.__destructure_map(map__54150);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq54139){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54139));
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
var len__5769__auto___55888 = arguments.length;
var i__5770__auto___55889 = (0);
while(true){
if((i__5770__auto___55889 < len__5769__auto___55888)){
args__5775__auto__.push((arguments[i__5770__auto___55889]));

var G__55890 = (i__5770__auto___55889 + (1));
i__5770__auto___55889 = G__55890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54166 = conformed_args__52031__auto__;
var map__54166__$1 = cljs.core.__destructure_map(map__54166);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq54162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54162));
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
var len__5769__auto___55892 = arguments.length;
var i__5770__auto___55893 = (0);
while(true){
if((i__5770__auto___55893 < len__5769__auto___55892)){
args__5775__auto__.push((arguments[i__5770__auto___55893]));

var G__55894 = (i__5770__auto___55893 + (1));
i__5770__auto___55893 = G__55894;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54180 = conformed_args__52031__auto__;
var map__54180__$1 = cljs.core.__destructure_map(map__54180);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq54174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54174));
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
var len__5769__auto___55895 = arguments.length;
var i__5770__auto___55896 = (0);
while(true){
if((i__5770__auto___55896 < len__5769__auto___55895)){
args__5775__auto__.push((arguments[i__5770__auto___55896]));

var G__55897 = (i__5770__auto___55896 + (1));
i__5770__auto___55896 = G__55897;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54200 = conformed_args__52031__auto__;
var map__54200__$1 = cljs.core.__destructure_map(map__54200);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq54192){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54192));
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
var len__5769__auto___55898 = arguments.length;
var i__5770__auto___55899 = (0);
while(true){
if((i__5770__auto___55899 < len__5769__auto___55898)){
args__5775__auto__.push((arguments[i__5770__auto___55899]));

var G__55900 = (i__5770__auto___55899 + (1));
i__5770__auto___55899 = G__55900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54219 = conformed_args__52031__auto__;
var map__54219__$1 = cljs.core.__destructure_map(map__54219);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq54203){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54203));
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
var len__5769__auto___55902 = arguments.length;
var i__5770__auto___55903 = (0);
while(true){
if((i__5770__auto___55903 < len__5769__auto___55902)){
args__5775__auto__.push((arguments[i__5770__auto___55903]));

var G__55904 = (i__5770__auto___55903 + (1));
i__5770__auto___55903 = G__55904;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54243 = conformed_args__52031__auto__;
var map__54243__$1 = cljs.core.__destructure_map(map__54243);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq54230){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54230));
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
var len__5769__auto___55905 = arguments.length;
var i__5770__auto___55906 = (0);
while(true){
if((i__5770__auto___55906 < len__5769__auto___55905)){
args__5775__auto__.push((arguments[i__5770__auto___55906]));

var G__55907 = (i__5770__auto___55906 + (1));
i__5770__auto___55906 = G__55907;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54267 = conformed_args__52031__auto__;
var map__54267__$1 = cljs.core.__destructure_map(map__54267);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq54245){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54245));
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
var len__5769__auto___55908 = arguments.length;
var i__5770__auto___55909 = (0);
while(true){
if((i__5770__auto___55909 < len__5769__auto___55908)){
args__5775__auto__.push((arguments[i__5770__auto___55909]));

var G__55910 = (i__5770__auto___55909 + (1));
i__5770__auto___55909 = G__55910;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54293 = conformed_args__52031__auto__;
var map__54293__$1 = cljs.core.__destructure_map(map__54293);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq54278){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54278));
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
var len__5769__auto___55911 = arguments.length;
var i__5770__auto___55912 = (0);
while(true){
if((i__5770__auto___55912 < len__5769__auto___55911)){
args__5775__auto__.push((arguments[i__5770__auto___55912]));

var G__55913 = (i__5770__auto___55912 + (1));
i__5770__auto___55912 = G__55913;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54300 = conformed_args__52031__auto__;
var map__54300__$1 = cljs.core.__destructure_map(map__54300);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq54298){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54298));
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
var len__5769__auto___55914 = arguments.length;
var i__5770__auto___55915 = (0);
while(true){
if((i__5770__auto___55915 < len__5769__auto___55914)){
args__5775__auto__.push((arguments[i__5770__auto___55915]));

var G__55916 = (i__5770__auto___55915 + (1));
i__5770__auto___55915 = G__55916;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54313 = conformed_args__52031__auto__;
var map__54313__$1 = cljs.core.__destructure_map(map__54313);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq54306){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54306));
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
var len__5769__auto___55917 = arguments.length;
var i__5770__auto___55918 = (0);
while(true){
if((i__5770__auto___55918 < len__5769__auto___55917)){
args__5775__auto__.push((arguments[i__5770__auto___55918]));

var G__55919 = (i__5770__auto___55918 + (1));
i__5770__auto___55918 = G__55919;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54324 = conformed_args__52031__auto__;
var map__54324__$1 = cljs.core.__destructure_map(map__54324);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq54316){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54316));
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
var len__5769__auto___55920 = arguments.length;
var i__5770__auto___55921 = (0);
while(true){
if((i__5770__auto___55921 < len__5769__auto___55920)){
args__5775__auto__.push((arguments[i__5770__auto___55921]));

var G__55922 = (i__5770__auto___55921 + (1));
i__5770__auto___55921 = G__55922;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54339 = conformed_args__52031__auto__;
var map__54339__$1 = cljs.core.__destructure_map(map__54339);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq54332){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54332));
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
var len__5769__auto___55923 = arguments.length;
var i__5770__auto___55924 = (0);
while(true){
if((i__5770__auto___55924 < len__5769__auto___55923)){
args__5775__auto__.push((arguments[i__5770__auto___55924]));

var G__55925 = (i__5770__auto___55924 + (1));
i__5770__auto___55924 = G__55925;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54356 = conformed_args__52031__auto__;
var map__54356__$1 = cljs.core.__destructure_map(map__54356);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq54346){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54346));
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
var len__5769__auto___55926 = arguments.length;
var i__5770__auto___55927 = (0);
while(true){
if((i__5770__auto___55927 < len__5769__auto___55926)){
args__5775__auto__.push((arguments[i__5770__auto___55927]));

var G__55928 = (i__5770__auto___55927 + (1));
i__5770__auto___55927 = G__55928;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54382 = conformed_args__52031__auto__;
var map__54382__$1 = cljs.core.__destructure_map(map__54382);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq54372){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54372));
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
var len__5769__auto___55929 = arguments.length;
var i__5770__auto___55930 = (0);
while(true){
if((i__5770__auto___55930 < len__5769__auto___55929)){
args__5775__auto__.push((arguments[i__5770__auto___55930]));

var G__55931 = (i__5770__auto___55930 + (1));
i__5770__auto___55930 = G__55931;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54397 = conformed_args__52031__auto__;
var map__54397__$1 = cljs.core.__destructure_map(map__54397);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq54393){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54393));
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
var len__5769__auto___55932 = arguments.length;
var i__5770__auto___55933 = (0);
while(true){
if((i__5770__auto___55933 < len__5769__auto___55932)){
args__5775__auto__.push((arguments[i__5770__auto___55933]));

var G__55934 = (i__5770__auto___55933 + (1));
i__5770__auto___55933 = G__55934;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54412 = conformed_args__52031__auto__;
var map__54412__$1 = cljs.core.__destructure_map(map__54412);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq54400){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54400));
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
var len__5769__auto___55935 = arguments.length;
var i__5770__auto___55936 = (0);
while(true){
if((i__5770__auto___55936 < len__5769__auto___55935)){
args__5775__auto__.push((arguments[i__5770__auto___55936]));

var G__55937 = (i__5770__auto___55936 + (1));
i__5770__auto___55936 = G__55937;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54426 = conformed_args__52031__auto__;
var map__54426__$1 = cljs.core.__destructure_map(map__54426);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq54415){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54415));
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
var len__5769__auto___55938 = arguments.length;
var i__5770__auto___55939 = (0);
while(true){
if((i__5770__auto___55939 < len__5769__auto___55938)){
args__5775__auto__.push((arguments[i__5770__auto___55939]));

var G__55940 = (i__5770__auto___55939 + (1));
i__5770__auto___55939 = G__55940;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54443 = conformed_args__52031__auto__;
var map__54443__$1 = cljs.core.__destructure_map(map__54443);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq54439){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54439));
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
var len__5769__auto___55941 = arguments.length;
var i__5770__auto___55942 = (0);
while(true){
if((i__5770__auto___55942 < len__5769__auto___55941)){
args__5775__auto__.push((arguments[i__5770__auto___55942]));

var G__55943 = (i__5770__auto___55942 + (1));
i__5770__auto___55942 = G__55943;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54454 = conformed_args__52031__auto__;
var map__54454__$1 = cljs.core.__destructure_map(map__54454);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq54449){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54449));
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
var len__5769__auto___55944 = arguments.length;
var i__5770__auto___55945 = (0);
while(true){
if((i__5770__auto___55945 < len__5769__auto___55944)){
args__5775__auto__.push((arguments[i__5770__auto___55945]));

var G__55946 = (i__5770__auto___55945 + (1));
i__5770__auto___55945 = G__55946;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54464 = conformed_args__52031__auto__;
var map__54464__$1 = cljs.core.__destructure_map(map__54464);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq54458){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54458));
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
var len__5769__auto___55947 = arguments.length;
var i__5770__auto___55948 = (0);
while(true){
if((i__5770__auto___55948 < len__5769__auto___55947)){
args__5775__auto__.push((arguments[i__5770__auto___55948]));

var G__55949 = (i__5770__auto___55948 + (1));
i__5770__auto___55948 = G__55949;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54480 = conformed_args__52031__auto__;
var map__54480__$1 = cljs.core.__destructure_map(map__54480);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq54474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54474));
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
var len__5769__auto___55950 = arguments.length;
var i__5770__auto___55951 = (0);
while(true){
if((i__5770__auto___55951 < len__5769__auto___55950)){
args__5775__auto__.push((arguments[i__5770__auto___55951]));

var G__55952 = (i__5770__auto___55951 + (1));
i__5770__auto___55951 = G__55952;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54499 = conformed_args__52031__auto__;
var map__54499__$1 = cljs.core.__destructure_map(map__54499);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq54490){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54490));
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
var len__5769__auto___55953 = arguments.length;
var i__5770__auto___55954 = (0);
while(true){
if((i__5770__auto___55954 < len__5769__auto___55953)){
args__5775__auto__.push((arguments[i__5770__auto___55954]));

var G__55955 = (i__5770__auto___55954 + (1));
i__5770__auto___55954 = G__55955;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54503 = conformed_args__52031__auto__;
var map__54503__$1 = cljs.core.__destructure_map(map__54503);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq54501){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54501));
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
var len__5769__auto___55956 = arguments.length;
var i__5770__auto___55957 = (0);
while(true){
if((i__5770__auto___55957 < len__5769__auto___55956)){
args__5775__auto__.push((arguments[i__5770__auto___55957]));

var G__55958 = (i__5770__auto___55957 + (1));
i__5770__auto___55957 = G__55958;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54518 = conformed_args__52031__auto__;
var map__54518__$1 = cljs.core.__destructure_map(map__54518);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq54510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54510));
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
var len__5769__auto___55959 = arguments.length;
var i__5770__auto___55960 = (0);
while(true){
if((i__5770__auto___55960 < len__5769__auto___55959)){
args__5775__auto__.push((arguments[i__5770__auto___55960]));

var G__55961 = (i__5770__auto___55960 + (1));
i__5770__auto___55960 = G__55961;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54534 = conformed_args__52031__auto__;
var map__54534__$1 = cljs.core.__destructure_map(map__54534);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq54525){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54525));
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
var len__5769__auto___55962 = arguments.length;
var i__5770__auto___55963 = (0);
while(true){
if((i__5770__auto___55963 < len__5769__auto___55962)){
args__5775__auto__.push((arguments[i__5770__auto___55963]));

var G__55964 = (i__5770__auto___55963 + (1));
i__5770__auto___55963 = G__55964;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54544 = conformed_args__52031__auto__;
var map__54544__$1 = cljs.core.__destructure_map(map__54544);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54544__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54544__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54544__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq54538){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54538));
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
var len__5769__auto___55965 = arguments.length;
var i__5770__auto___55966 = (0);
while(true){
if((i__5770__auto___55966 < len__5769__auto___55965)){
args__5775__auto__.push((arguments[i__5770__auto___55966]));

var G__55967 = (i__5770__auto___55966 + (1));
i__5770__auto___55966 = G__55967;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54554 = conformed_args__52031__auto__;
var map__54554__$1 = cljs.core.__destructure_map(map__54554);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq54547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54547));
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
var len__5769__auto___55968 = arguments.length;
var i__5770__auto___55969 = (0);
while(true){
if((i__5770__auto___55969 < len__5769__auto___55968)){
args__5775__auto__.push((arguments[i__5770__auto___55969]));

var G__55970 = (i__5770__auto___55969 + (1));
i__5770__auto___55969 = G__55970;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54564 = conformed_args__52031__auto__;
var map__54564__$1 = cljs.core.__destructure_map(map__54564);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq54558){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54558));
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
var len__5769__auto___55971 = arguments.length;
var i__5770__auto___55972 = (0);
while(true){
if((i__5770__auto___55972 < len__5769__auto___55971)){
args__5775__auto__.push((arguments[i__5770__auto___55972]));

var G__55973 = (i__5770__auto___55972 + (1));
i__5770__auto___55972 = G__55973;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54572 = conformed_args__52031__auto__;
var map__54572__$1 = cljs.core.__destructure_map(map__54572);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq54570){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54570));
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
var len__5769__auto___55974 = arguments.length;
var i__5770__auto___55975 = (0);
while(true){
if((i__5770__auto___55975 < len__5769__auto___55974)){
args__5775__auto__.push((arguments[i__5770__auto___55975]));

var G__55976 = (i__5770__auto___55975 + (1));
i__5770__auto___55975 = G__55976;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54588 = conformed_args__52031__auto__;
var map__54588__$1 = cljs.core.__destructure_map(map__54588);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq54581){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54581));
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
var len__5769__auto___55977 = arguments.length;
var i__5770__auto___55978 = (0);
while(true){
if((i__5770__auto___55978 < len__5769__auto___55977)){
args__5775__auto__.push((arguments[i__5770__auto___55978]));

var G__55979 = (i__5770__auto___55978 + (1));
i__5770__auto___55978 = G__55979;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54596 = conformed_args__52031__auto__;
var map__54596__$1 = cljs.core.__destructure_map(map__54596);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq54592){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54592));
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
var len__5769__auto___55980 = arguments.length;
var i__5770__auto___55981 = (0);
while(true){
if((i__5770__auto___55981 < len__5769__auto___55980)){
args__5775__auto__.push((arguments[i__5770__auto___55981]));

var G__55982 = (i__5770__auto___55981 + (1));
i__5770__auto___55981 = G__55982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54611 = conformed_args__52031__auto__;
var map__54611__$1 = cljs.core.__destructure_map(map__54611);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq54601){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54601));
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
var len__5769__auto___55983 = arguments.length;
var i__5770__auto___55984 = (0);
while(true){
if((i__5770__auto___55984 < len__5769__auto___55983)){
args__5775__auto__.push((arguments[i__5770__auto___55984]));

var G__55985 = (i__5770__auto___55984 + (1));
i__5770__auto___55984 = G__55985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54617 = conformed_args__52031__auto__;
var map__54617__$1 = cljs.core.__destructure_map(map__54617);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq54615){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54615));
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
var len__5769__auto___55986 = arguments.length;
var i__5770__auto___55987 = (0);
while(true){
if((i__5770__auto___55987 < len__5769__auto___55986)){
args__5775__auto__.push((arguments[i__5770__auto___55987]));

var G__55988 = (i__5770__auto___55987 + (1));
i__5770__auto___55987 = G__55988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54625 = conformed_args__52031__auto__;
var map__54625__$1 = cljs.core.__destructure_map(map__54625);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq54623){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54623));
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
var len__5769__auto___55989 = arguments.length;
var i__5770__auto___55990 = (0);
while(true){
if((i__5770__auto___55990 < len__5769__auto___55989)){
args__5775__auto__.push((arguments[i__5770__auto___55990]));

var G__55991 = (i__5770__auto___55990 + (1));
i__5770__auto___55990 = G__55991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54638 = conformed_args__52031__auto__;
var map__54638__$1 = cljs.core.__destructure_map(map__54638);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq54632){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54632));
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
var len__5769__auto___55992 = arguments.length;
var i__5770__auto___55993 = (0);
while(true){
if((i__5770__auto___55993 < len__5769__auto___55992)){
args__5775__auto__.push((arguments[i__5770__auto___55993]));

var G__55994 = (i__5770__auto___55993 + (1));
i__5770__auto___55993 = G__55994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54647 = conformed_args__52031__auto__;
var map__54647__$1 = cljs.core.__destructure_map(map__54647);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq54644){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54644));
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
var len__5769__auto___55995 = arguments.length;
var i__5770__auto___55996 = (0);
while(true){
if((i__5770__auto___55996 < len__5769__auto___55995)){
args__5775__auto__.push((arguments[i__5770__auto___55996]));

var G__55997 = (i__5770__auto___55996 + (1));
i__5770__auto___55996 = G__55997;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54669 = conformed_args__52031__auto__;
var map__54669__$1 = cljs.core.__destructure_map(map__54669);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq54663){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54663));
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
var len__5769__auto___55998 = arguments.length;
var i__5770__auto___55999 = (0);
while(true){
if((i__5770__auto___55999 < len__5769__auto___55998)){
args__5775__auto__.push((arguments[i__5770__auto___55999]));

var G__56000 = (i__5770__auto___55999 + (1));
i__5770__auto___55999 = G__56000;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54682 = conformed_args__52031__auto__;
var map__54682__$1 = cljs.core.__destructure_map(map__54682);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq54677){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54677));
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
var len__5769__auto___56001 = arguments.length;
var i__5770__auto___56002 = (0);
while(true){
if((i__5770__auto___56002 < len__5769__auto___56001)){
args__5775__auto__.push((arguments[i__5770__auto___56002]));

var G__56003 = (i__5770__auto___56002 + (1));
i__5770__auto___56002 = G__56003;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54692 = conformed_args__52031__auto__;
var map__54692__$1 = cljs.core.__destructure_map(map__54692);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq54683){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54683));
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
var len__5769__auto___56004 = arguments.length;
var i__5770__auto___56005 = (0);
while(true){
if((i__5770__auto___56005 < len__5769__auto___56004)){
args__5775__auto__.push((arguments[i__5770__auto___56005]));

var G__56006 = (i__5770__auto___56005 + (1));
i__5770__auto___56005 = G__56006;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54697 = conformed_args__52031__auto__;
var map__54697__$1 = cljs.core.__destructure_map(map__54697);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq54694){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54694));
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
var len__5769__auto___56007 = arguments.length;
var i__5770__auto___56008 = (0);
while(true){
if((i__5770__auto___56008 < len__5769__auto___56007)){
args__5775__auto__.push((arguments[i__5770__auto___56008]));

var G__56009 = (i__5770__auto___56008 + (1));
i__5770__auto___56008 = G__56009;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54706 = conformed_args__52031__auto__;
var map__54706__$1 = cljs.core.__destructure_map(map__54706);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq54702){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54702));
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
var len__5769__auto___56010 = arguments.length;
var i__5770__auto___56011 = (0);
while(true){
if((i__5770__auto___56011 < len__5769__auto___56010)){
args__5775__auto__.push((arguments[i__5770__auto___56011]));

var G__56012 = (i__5770__auto___56011 + (1));
i__5770__auto___56011 = G__56012;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54713 = conformed_args__52031__auto__;
var map__54713__$1 = cljs.core.__destructure_map(map__54713);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq54710){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54710));
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
var len__5769__auto___56013 = arguments.length;
var i__5770__auto___56014 = (0);
while(true){
if((i__5770__auto___56014 < len__5769__auto___56013)){
args__5775__auto__.push((arguments[i__5770__auto___56014]));

var G__56015 = (i__5770__auto___56014 + (1));
i__5770__auto___56014 = G__56015;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54721 = conformed_args__52031__auto__;
var map__54721__$1 = cljs.core.__destructure_map(map__54721);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq54717){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54717));
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
var len__5769__auto___56016 = arguments.length;
var i__5770__auto___56017 = (0);
while(true){
if((i__5770__auto___56017 < len__5769__auto___56016)){
args__5775__auto__.push((arguments[i__5770__auto___56017]));

var G__56018 = (i__5770__auto___56017 + (1));
i__5770__auto___56017 = G__56018;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54731 = conformed_args__52031__auto__;
var map__54731__$1 = cljs.core.__destructure_map(map__54731);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq54725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54725));
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
var len__5769__auto___56019 = arguments.length;
var i__5770__auto___56020 = (0);
while(true){
if((i__5770__auto___56020 < len__5769__auto___56019)){
args__5775__auto__.push((arguments[i__5770__auto___56020]));

var G__56021 = (i__5770__auto___56020 + (1));
i__5770__auto___56020 = G__56021;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54739 = conformed_args__52031__auto__;
var map__54739__$1 = cljs.core.__destructure_map(map__54739);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq54737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54737));
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
var len__5769__auto___56022 = arguments.length;
var i__5770__auto___56023 = (0);
while(true){
if((i__5770__auto___56023 < len__5769__auto___56022)){
args__5775__auto__.push((arguments[i__5770__auto___56023]));

var G__56024 = (i__5770__auto___56023 + (1));
i__5770__auto___56023 = G__56024;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54758 = conformed_args__52031__auto__;
var map__54758__$1 = cljs.core.__destructure_map(map__54758);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq54748){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54748));
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
var len__5769__auto___56025 = arguments.length;
var i__5770__auto___56026 = (0);
while(true){
if((i__5770__auto___56026 < len__5769__auto___56025)){
args__5775__auto__.push((arguments[i__5770__auto___56026]));

var G__56027 = (i__5770__auto___56026 + (1));
i__5770__auto___56026 = G__56027;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54765 = conformed_args__52031__auto__;
var map__54765__$1 = cljs.core.__destructure_map(map__54765);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq54759){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54759));
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
var len__5769__auto___56028 = arguments.length;
var i__5770__auto___56029 = (0);
while(true){
if((i__5770__auto___56029 < len__5769__auto___56028)){
args__5775__auto__.push((arguments[i__5770__auto___56029]));

var G__56030 = (i__5770__auto___56029 + (1));
i__5770__auto___56029 = G__56030;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54774 = conformed_args__52031__auto__;
var map__54774__$1 = cljs.core.__destructure_map(map__54774);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq54771){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54771));
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
var len__5769__auto___56031 = arguments.length;
var i__5770__auto___56032 = (0);
while(true){
if((i__5770__auto___56032 < len__5769__auto___56031)){
args__5775__auto__.push((arguments[i__5770__auto___56032]));

var G__56033 = (i__5770__auto___56032 + (1));
i__5770__auto___56032 = G__56033;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54794 = conformed_args__52031__auto__;
var map__54794__$1 = cljs.core.__destructure_map(map__54794);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq54778){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54778));
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
var len__5769__auto___56034 = arguments.length;
var i__5770__auto___56035 = (0);
while(true){
if((i__5770__auto___56035 < len__5769__auto___56034)){
args__5775__auto__.push((arguments[i__5770__auto___56035]));

var G__56036 = (i__5770__auto___56035 + (1));
i__5770__auto___56035 = G__56036;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54808 = conformed_args__52031__auto__;
var map__54808__$1 = cljs.core.__destructure_map(map__54808);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq54801){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54801));
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
var len__5769__auto___56037 = arguments.length;
var i__5770__auto___56038 = (0);
while(true){
if((i__5770__auto___56038 < len__5769__auto___56037)){
args__5775__auto__.push((arguments[i__5770__auto___56038]));

var G__56039 = (i__5770__auto___56038 + (1));
i__5770__auto___56038 = G__56039;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54823 = conformed_args__52031__auto__;
var map__54823__$1 = cljs.core.__destructure_map(map__54823);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq54816){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54816));
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
var len__5769__auto___56040 = arguments.length;
var i__5770__auto___56041 = (0);
while(true){
if((i__5770__auto___56041 < len__5769__auto___56040)){
args__5775__auto__.push((arguments[i__5770__auto___56041]));

var G__56042 = (i__5770__auto___56041 + (1));
i__5770__auto___56041 = G__56042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54837 = conformed_args__52031__auto__;
var map__54837__$1 = cljs.core.__destructure_map(map__54837);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq54833){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54833));
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
var len__5769__auto___56043 = arguments.length;
var i__5770__auto___56044 = (0);
while(true){
if((i__5770__auto___56044 < len__5769__auto___56043)){
args__5775__auto__.push((arguments[i__5770__auto___56044]));

var G__56045 = (i__5770__auto___56044 + (1));
i__5770__auto___56044 = G__56045;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54849 = conformed_args__52031__auto__;
var map__54849__$1 = cljs.core.__destructure_map(map__54849);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq54842){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54842));
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
var len__5769__auto___56046 = arguments.length;
var i__5770__auto___56047 = (0);
while(true){
if((i__5770__auto___56047 < len__5769__auto___56046)){
args__5775__auto__.push((arguments[i__5770__auto___56047]));

var G__56048 = (i__5770__auto___56047 + (1));
i__5770__auto___56047 = G__56048;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54855 = conformed_args__52031__auto__;
var map__54855__$1 = cljs.core.__destructure_map(map__54855);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq54853){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54853));
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
var len__5769__auto___56049 = arguments.length;
var i__5770__auto___56050 = (0);
while(true){
if((i__5770__auto___56050 < len__5769__auto___56049)){
args__5775__auto__.push((arguments[i__5770__auto___56050]));

var G__56051 = (i__5770__auto___56050 + (1));
i__5770__auto___56050 = G__56051;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54860 = conformed_args__52031__auto__;
var map__54860__$1 = cljs.core.__destructure_map(map__54860);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq54857){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54857));
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
var len__5769__auto___56052 = arguments.length;
var i__5770__auto___56053 = (0);
while(true){
if((i__5770__auto___56053 < len__5769__auto___56052)){
args__5775__auto__.push((arguments[i__5770__auto___56053]));

var G__56054 = (i__5770__auto___56053 + (1));
i__5770__auto___56053 = G__56054;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54865 = conformed_args__52031__auto__;
var map__54865__$1 = cljs.core.__destructure_map(map__54865);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq54862){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54862));
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
var len__5769__auto___56055 = arguments.length;
var i__5770__auto___56056 = (0);
while(true){
if((i__5770__auto___56056 < len__5769__auto___56055)){
args__5775__auto__.push((arguments[i__5770__auto___56056]));

var G__56057 = (i__5770__auto___56056 + (1));
i__5770__auto___56056 = G__56057;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54871 = conformed_args__52031__auto__;
var map__54871__$1 = cljs.core.__destructure_map(map__54871);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq54868){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54868));
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
var len__5769__auto___56058 = arguments.length;
var i__5770__auto___56059 = (0);
while(true){
if((i__5770__auto___56059 < len__5769__auto___56058)){
args__5775__auto__.push((arguments[i__5770__auto___56059]));

var G__56060 = (i__5770__auto___56059 + (1));
i__5770__auto___56059 = G__56060;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54876 = conformed_args__52031__auto__;
var map__54876__$1 = cljs.core.__destructure_map(map__54876);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq54873){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54873));
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
var len__5769__auto___56061 = arguments.length;
var i__5770__auto___56062 = (0);
while(true){
if((i__5770__auto___56062 < len__5769__auto___56061)){
args__5775__auto__.push((arguments[i__5770__auto___56062]));

var G__56063 = (i__5770__auto___56062 + (1));
i__5770__auto___56062 = G__56063;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54896 = conformed_args__52031__auto__;
var map__54896__$1 = cljs.core.__destructure_map(map__54896);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq54889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54889));
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
var len__5769__auto___56064 = arguments.length;
var i__5770__auto___56065 = (0);
while(true){
if((i__5770__auto___56065 < len__5769__auto___56064)){
args__5775__auto__.push((arguments[i__5770__auto___56065]));

var G__56066 = (i__5770__auto___56065 + (1));
i__5770__auto___56065 = G__56066;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54906 = conformed_args__52031__auto__;
var map__54906__$1 = cljs.core.__destructure_map(map__54906);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq54901){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54901));
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
var len__5769__auto___56067 = arguments.length;
var i__5770__auto___56068 = (0);
while(true){
if((i__5770__auto___56068 < len__5769__auto___56067)){
args__5775__auto__.push((arguments[i__5770__auto___56068]));

var G__56069 = (i__5770__auto___56068 + (1));
i__5770__auto___56068 = G__56069;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54916 = conformed_args__52031__auto__;
var map__54916__$1 = cljs.core.__destructure_map(map__54916);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq54912){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54912));
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
var len__5769__auto___56070 = arguments.length;
var i__5770__auto___56071 = (0);
while(true){
if((i__5770__auto___56071 < len__5769__auto___56070)){
args__5775__auto__.push((arguments[i__5770__auto___56071]));

var G__56072 = (i__5770__auto___56071 + (1));
i__5770__auto___56071 = G__56072;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54926 = conformed_args__52031__auto__;
var map__54926__$1 = cljs.core.__destructure_map(map__54926);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq54919){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54919));
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
var len__5769__auto___56073 = arguments.length;
var i__5770__auto___56074 = (0);
while(true){
if((i__5770__auto___56074 < len__5769__auto___56073)){
args__5775__auto__.push((arguments[i__5770__auto___56074]));

var G__56075 = (i__5770__auto___56074 + (1));
i__5770__auto___56074 = G__56075;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54933 = conformed_args__52031__auto__;
var map__54933__$1 = cljs.core.__destructure_map(map__54933);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq54930){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54930));
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
var len__5769__auto___56076 = arguments.length;
var i__5770__auto___56077 = (0);
while(true){
if((i__5770__auto___56077 < len__5769__auto___56076)){
args__5775__auto__.push((arguments[i__5770__auto___56077]));

var G__56078 = (i__5770__auto___56077 + (1));
i__5770__auto___56077 = G__56078;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54945 = conformed_args__52031__auto__;
var map__54945__$1 = cljs.core.__destructure_map(map__54945);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq54936){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54936));
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
var len__5769__auto___56079 = arguments.length;
var i__5770__auto___56080 = (0);
while(true){
if((i__5770__auto___56080 < len__5769__auto___56079)){
args__5775__auto__.push((arguments[i__5770__auto___56080]));

var G__56081 = (i__5770__auto___56080 + (1));
i__5770__auto___56080 = G__56081;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54955 = conformed_args__52031__auto__;
var map__54955__$1 = cljs.core.__destructure_map(map__54955);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq54948){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54948));
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
var len__5769__auto___56082 = arguments.length;
var i__5770__auto___56083 = (0);
while(true){
if((i__5770__auto___56083 < len__5769__auto___56082)){
args__5775__auto__.push((arguments[i__5770__auto___56083]));

var G__56084 = (i__5770__auto___56083 + (1));
i__5770__auto___56083 = G__56084;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54966 = conformed_args__52031__auto__;
var map__54966__$1 = cljs.core.__destructure_map(map__54966);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq54959){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54959));
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
var len__5769__auto___56085 = arguments.length;
var i__5770__auto___56086 = (0);
while(true){
if((i__5770__auto___56086 < len__5769__auto___56085)){
args__5775__auto__.push((arguments[i__5770__auto___56086]));

var G__56087 = (i__5770__auto___56086 + (1));
i__5770__auto___56086 = G__56087;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54974 = conformed_args__52031__auto__;
var map__54974__$1 = cljs.core.__destructure_map(map__54974);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq54969){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54969));
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
var len__5769__auto___56088 = arguments.length;
var i__5770__auto___56089 = (0);
while(true){
if((i__5770__auto___56089 < len__5769__auto___56088)){
args__5775__auto__.push((arguments[i__5770__auto___56089]));

var G__56090 = (i__5770__auto___56089 + (1));
i__5770__auto___56089 = G__56090;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54979 = conformed_args__52031__auto__;
var map__54979__$1 = cljs.core.__destructure_map(map__54979);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq54977){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54977));
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
var len__5769__auto___56091 = arguments.length;
var i__5770__auto___56092 = (0);
while(true){
if((i__5770__auto___56092 < len__5769__auto___56091)){
args__5775__auto__.push((arguments[i__5770__auto___56092]));

var G__56093 = (i__5770__auto___56092 + (1));
i__5770__auto___56092 = G__56093;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55002 = conformed_args__52031__auto__;
var map__55002__$1 = cljs.core.__destructure_map(map__55002);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq54994){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54994));
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
var len__5769__auto___56094 = arguments.length;
var i__5770__auto___56095 = (0);
while(true){
if((i__5770__auto___56095 < len__5769__auto___56094)){
args__5775__auto__.push((arguments[i__5770__auto___56095]));

var G__56096 = (i__5770__auto___56095 + (1));
i__5770__auto___56095 = G__56096;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55022 = conformed_args__52031__auto__;
var map__55022__$1 = cljs.core.__destructure_map(map__55022);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq55012){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55012));
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
var len__5769__auto___56097 = arguments.length;
var i__5770__auto___56098 = (0);
while(true){
if((i__5770__auto___56098 < len__5769__auto___56097)){
args__5775__auto__.push((arguments[i__5770__auto___56098]));

var G__56099 = (i__5770__auto___56098 + (1));
i__5770__auto___56098 = G__56099;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55034 = conformed_args__52031__auto__;
var map__55034__$1 = cljs.core.__destructure_map(map__55034);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55034__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55034__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55034__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq55029){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55029));
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
var len__5769__auto___56100 = arguments.length;
var i__5770__auto___56101 = (0);
while(true){
if((i__5770__auto___56101 < len__5769__auto___56100)){
args__5775__auto__.push((arguments[i__5770__auto___56101]));

var G__56102 = (i__5770__auto___56101 + (1));
i__5770__auto___56101 = G__56102;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55044 = conformed_args__52031__auto__;
var map__55044__$1 = cljs.core.__destructure_map(map__55044);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq55041){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55041));
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
var len__5769__auto___56103 = arguments.length;
var i__5770__auto___56104 = (0);
while(true){
if((i__5770__auto___56104 < len__5769__auto___56103)){
args__5775__auto__.push((arguments[i__5770__auto___56104]));

var G__56105 = (i__5770__auto___56104 + (1));
i__5770__auto___56104 = G__56105;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55054 = conformed_args__52031__auto__;
var map__55054__$1 = cljs.core.__destructure_map(map__55054);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq55049){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55049));
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
var len__5769__auto___56106 = arguments.length;
var i__5770__auto___56107 = (0);
while(true){
if((i__5770__auto___56107 < len__5769__auto___56106)){
args__5775__auto__.push((arguments[i__5770__auto___56107]));

var G__56108 = (i__5770__auto___56107 + (1));
i__5770__auto___56107 = G__56108;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55062 = conformed_args__52031__auto__;
var map__55062__$1 = cljs.core.__destructure_map(map__55062);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq55057){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55057));
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
var len__5769__auto___56109 = arguments.length;
var i__5770__auto___56110 = (0);
while(true){
if((i__5770__auto___56110 < len__5769__auto___56109)){
args__5775__auto__.push((arguments[i__5770__auto___56110]));

var G__56111 = (i__5770__auto___56110 + (1));
i__5770__auto___56110 = G__56111;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55077 = conformed_args__52031__auto__;
var map__55077__$1 = cljs.core.__destructure_map(map__55077);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq55067){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55067));
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
var len__5769__auto___56112 = arguments.length;
var i__5770__auto___56113 = (0);
while(true){
if((i__5770__auto___56113 < len__5769__auto___56112)){
args__5775__auto__.push((arguments[i__5770__auto___56113]));

var G__56114 = (i__5770__auto___56113 + (1));
i__5770__auto___56113 = G__56114;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55083 = conformed_args__52031__auto__;
var map__55083__$1 = cljs.core.__destructure_map(map__55083);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq55082){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55082));
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
var len__5769__auto___56115 = arguments.length;
var i__5770__auto___56116 = (0);
while(true){
if((i__5770__auto___56116 < len__5769__auto___56115)){
args__5775__auto__.push((arguments[i__5770__auto___56116]));

var G__56117 = (i__5770__auto___56116 + (1));
i__5770__auto___56116 = G__56117;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55088 = conformed_args__52031__auto__;
var map__55088__$1 = cljs.core.__destructure_map(map__55088);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq55084){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55084));
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
var len__5769__auto___56118 = arguments.length;
var i__5770__auto___56119 = (0);
while(true){
if((i__5770__auto___56119 < len__5769__auto___56118)){
args__5775__auto__.push((arguments[i__5770__auto___56119]));

var G__56120 = (i__5770__auto___56119 + (1));
i__5770__auto___56119 = G__56120;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55090 = conformed_args__52031__auto__;
var map__55090__$1 = cljs.core.__destructure_map(map__55090);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq55089){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55089));
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
var len__5769__auto___56121 = arguments.length;
var i__5770__auto___56122 = (0);
while(true){
if((i__5770__auto___56122 < len__5769__auto___56121)){
args__5775__auto__.push((arguments[i__5770__auto___56122]));

var G__56123 = (i__5770__auto___56122 + (1));
i__5770__auto___56122 = G__56123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55095 = conformed_args__52031__auto__;
var map__55095__$1 = cljs.core.__destructure_map(map__55095);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq55091){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55091));
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
var len__5769__auto___56124 = arguments.length;
var i__5770__auto___56125 = (0);
while(true){
if((i__5770__auto___56125 < len__5769__auto___56124)){
args__5775__auto__.push((arguments[i__5770__auto___56125]));

var G__56126 = (i__5770__auto___56125 + (1));
i__5770__auto___56125 = G__56126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55099 = conformed_args__52031__auto__;
var map__55099__$1 = cljs.core.__destructure_map(map__55099);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq55098){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55098));
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
var len__5769__auto___56127 = arguments.length;
var i__5770__auto___56128 = (0);
while(true){
if((i__5770__auto___56128 < len__5769__auto___56127)){
args__5775__auto__.push((arguments[i__5770__auto___56128]));

var G__56129 = (i__5770__auto___56128 + (1));
i__5770__auto___56128 = G__56129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55106 = conformed_args__52031__auto__;
var map__55106__$1 = cljs.core.__destructure_map(map__55106);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq55105){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55105));
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
var len__5769__auto___56130 = arguments.length;
var i__5770__auto___56131 = (0);
while(true){
if((i__5770__auto___56131 < len__5769__auto___56130)){
args__5775__auto__.push((arguments[i__5770__auto___56131]));

var G__56132 = (i__5770__auto___56131 + (1));
i__5770__auto___56131 = G__56132;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55111 = conformed_args__52031__auto__;
var map__55111__$1 = cljs.core.__destructure_map(map__55111);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55111__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55111__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55111__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq55107){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55107));
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
var len__5769__auto___56133 = arguments.length;
var i__5770__auto___56134 = (0);
while(true){
if((i__5770__auto___56134 < len__5769__auto___56133)){
args__5775__auto__.push((arguments[i__5770__auto___56134]));

var G__56135 = (i__5770__auto___56134 + (1));
i__5770__auto___56134 = G__56135;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55114 = conformed_args__52031__auto__;
var map__55114__$1 = cljs.core.__destructure_map(map__55114);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq55113){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55113));
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
var len__5769__auto___56136 = arguments.length;
var i__5770__auto___56137 = (0);
while(true){
if((i__5770__auto___56137 < len__5769__auto___56136)){
args__5775__auto__.push((arguments[i__5770__auto___56137]));

var G__56138 = (i__5770__auto___56137 + (1));
i__5770__auto___56137 = G__56138;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55120 = conformed_args__52031__auto__;
var map__55120__$1 = cljs.core.__destructure_map(map__55120);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55120__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55120__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55120__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq55119){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55119));
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
var len__5769__auto___56139 = arguments.length;
var i__5770__auto___56140 = (0);
while(true){
if((i__5770__auto___56140 < len__5769__auto___56139)){
args__5775__auto__.push((arguments[i__5770__auto___56140]));

var G__56141 = (i__5770__auto___56140 + (1));
i__5770__auto___56140 = G__56141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55125 = conformed_args__52031__auto__;
var map__55125__$1 = cljs.core.__destructure_map(map__55125);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq55121){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55121));
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
var len__5769__auto___56142 = arguments.length;
var i__5770__auto___56143 = (0);
while(true){
if((i__5770__auto___56143 < len__5769__auto___56142)){
args__5775__auto__.push((arguments[i__5770__auto___56143]));

var G__56144 = (i__5770__auto___56143 + (1));
i__5770__auto___56143 = G__56144;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55137 = conformed_args__52031__auto__;
var map__55137__$1 = cljs.core.__destructure_map(map__55137);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq55131){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55131));
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
var len__5769__auto___56145 = arguments.length;
var i__5770__auto___56146 = (0);
while(true){
if((i__5770__auto___56146 < len__5769__auto___56145)){
args__5775__auto__.push((arguments[i__5770__auto___56146]));

var G__56147 = (i__5770__auto___56146 + (1));
i__5770__auto___56146 = G__56147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55145 = conformed_args__52031__auto__;
var map__55145__$1 = cljs.core.__destructure_map(map__55145);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq55142){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55142));
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
var len__5769__auto___56148 = arguments.length;
var i__5770__auto___56149 = (0);
while(true){
if((i__5770__auto___56149 < len__5769__auto___56148)){
args__5775__auto__.push((arguments[i__5770__auto___56149]));

var G__56150 = (i__5770__auto___56149 + (1));
i__5770__auto___56149 = G__56150;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55153 = conformed_args__52031__auto__;
var map__55153__$1 = cljs.core.__destructure_map(map__55153);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq55148){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55148));
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
var len__5769__auto___56151 = arguments.length;
var i__5770__auto___56152 = (0);
while(true){
if((i__5770__auto___56152 < len__5769__auto___56151)){
args__5775__auto__.push((arguments[i__5770__auto___56152]));

var G__56153 = (i__5770__auto___56152 + (1));
i__5770__auto___56152 = G__56153;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55161 = conformed_args__52031__auto__;
var map__55161__$1 = cljs.core.__destructure_map(map__55161);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq55156){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55156));
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
var len__5769__auto___56154 = arguments.length;
var i__5770__auto___56155 = (0);
while(true){
if((i__5770__auto___56155 < len__5769__auto___56154)){
args__5775__auto__.push((arguments[i__5770__auto___56155]));

var G__56156 = (i__5770__auto___56155 + (1));
i__5770__auto___56155 = G__56156;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55172 = conformed_args__52031__auto__;
var map__55172__$1 = cljs.core.__destructure_map(map__55172);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq55168){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55168));
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
var len__5769__auto___56157 = arguments.length;
var i__5770__auto___56158 = (0);
while(true){
if((i__5770__auto___56158 < len__5769__auto___56157)){
args__5775__auto__.push((arguments[i__5770__auto___56158]));

var G__56159 = (i__5770__auto___56158 + (1));
i__5770__auto___56158 = G__56159;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55181 = conformed_args__52031__auto__;
var map__55181__$1 = cljs.core.__destructure_map(map__55181);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55181__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55181__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55181__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq55176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55176));
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
var len__5769__auto___56160 = arguments.length;
var i__5770__auto___56161 = (0);
while(true){
if((i__5770__auto___56161 < len__5769__auto___56160)){
args__5775__auto__.push((arguments[i__5770__auto___56161]));

var G__56162 = (i__5770__auto___56161 + (1));
i__5770__auto___56161 = G__56162;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55185 = conformed_args__52031__auto__;
var map__55185__$1 = cljs.core.__destructure_map(map__55185);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq55183){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55183));
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
var len__5769__auto___56163 = arguments.length;
var i__5770__auto___56164 = (0);
while(true){
if((i__5770__auto___56164 < len__5769__auto___56163)){
args__5775__auto__.push((arguments[i__5770__auto___56164]));

var G__56165 = (i__5770__auto___56164 + (1));
i__5770__auto___56164 = G__56165;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55193 = conformed_args__52031__auto__;
var map__55193__$1 = cljs.core.__destructure_map(map__55193);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq55188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55188));
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
var len__5769__auto___56166 = arguments.length;
var i__5770__auto___56167 = (0);
while(true){
if((i__5770__auto___56167 < len__5769__auto___56166)){
args__5775__auto__.push((arguments[i__5770__auto___56167]));

var G__56168 = (i__5770__auto___56167 + (1));
i__5770__auto___56167 = G__56168;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55202 = conformed_args__52031__auto__;
var map__55202__$1 = cljs.core.__destructure_map(map__55202);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq55199){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55199));
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
var len__5769__auto___56169 = arguments.length;
var i__5770__auto___56170 = (0);
while(true){
if((i__5770__auto___56170 < len__5769__auto___56169)){
args__5775__auto__.push((arguments[i__5770__auto___56170]));

var G__56171 = (i__5770__auto___56170 + (1));
i__5770__auto___56170 = G__56171;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55208 = conformed_args__52031__auto__;
var map__55208__$1 = cljs.core.__destructure_map(map__55208);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq55205){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55205));
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
var len__5769__auto___56172 = arguments.length;
var i__5770__auto___56173 = (0);
while(true){
if((i__5770__auto___56173 < len__5769__auto___56172)){
args__5775__auto__.push((arguments[i__5770__auto___56173]));

var G__56174 = (i__5770__auto___56173 + (1));
i__5770__auto___56173 = G__56174;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55212 = conformed_args__52031__auto__;
var map__55212__$1 = cljs.core.__destructure_map(map__55212);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq55211){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55211));
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
var len__5769__auto___56175 = arguments.length;
var i__5770__auto___56176 = (0);
while(true){
if((i__5770__auto___56176 < len__5769__auto___56175)){
args__5775__auto__.push((arguments[i__5770__auto___56176]));

var G__56177 = (i__5770__auto___56176 + (1));
i__5770__auto___56176 = G__56177;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55225 = conformed_args__52031__auto__;
var map__55225__$1 = cljs.core.__destructure_map(map__55225);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq55224){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55224));
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
var len__5769__auto___56178 = arguments.length;
var i__5770__auto___56179 = (0);
while(true){
if((i__5770__auto___56179 < len__5769__auto___56178)){
args__5775__auto__.push((arguments[i__5770__auto___56179]));

var G__56180 = (i__5770__auto___56179 + (1));
i__5770__auto___56179 = G__56180;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55235 = conformed_args__52031__auto__;
var map__55235__$1 = cljs.core.__destructure_map(map__55235);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq55227){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55227));
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
var len__5769__auto___56181 = arguments.length;
var i__5770__auto___56182 = (0);
while(true){
if((i__5770__auto___56182 < len__5769__auto___56181)){
args__5775__auto__.push((arguments[i__5770__auto___56182]));

var G__56183 = (i__5770__auto___56182 + (1));
i__5770__auto___56182 = G__56183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55239 = conformed_args__52031__auto__;
var map__55239__$1 = cljs.core.__destructure_map(map__55239);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq55236){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55236));
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
var len__5769__auto___56184 = arguments.length;
var i__5770__auto___56185 = (0);
while(true){
if((i__5770__auto___56185 < len__5769__auto___56184)){
args__5775__auto__.push((arguments[i__5770__auto___56185]));

var G__56186 = (i__5770__auto___56185 + (1));
i__5770__auto___56185 = G__56186;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55250 = conformed_args__52031__auto__;
var map__55250__$1 = cljs.core.__destructure_map(map__55250);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq55245){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55245));
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
var len__5769__auto___56187 = arguments.length;
var i__5770__auto___56188 = (0);
while(true){
if((i__5770__auto___56188 < len__5769__auto___56187)){
args__5775__auto__.push((arguments[i__5770__auto___56188]));

var G__56189 = (i__5770__auto___56188 + (1));
i__5770__auto___56188 = G__56189;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55257 = conformed_args__52031__auto__;
var map__55257__$1 = cljs.core.__destructure_map(map__55257);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq55253){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55253));
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
var len__5769__auto___56190 = arguments.length;
var i__5770__auto___56191 = (0);
while(true){
if((i__5770__auto___56191 < len__5769__auto___56190)){
args__5775__auto__.push((arguments[i__5770__auto___56191]));

var G__56192 = (i__5770__auto___56191 + (1));
i__5770__auto___56191 = G__56192;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55263 = conformed_args__52031__auto__;
var map__55263__$1 = cljs.core.__destructure_map(map__55263);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq55262){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55262));
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
var len__5769__auto___56193 = arguments.length;
var i__5770__auto___56194 = (0);
while(true){
if((i__5770__auto___56194 < len__5769__auto___56193)){
args__5775__auto__.push((arguments[i__5770__auto___56194]));

var G__56195 = (i__5770__auto___56194 + (1));
i__5770__auto___56194 = G__56195;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55270 = conformed_args__52031__auto__;
var map__55270__$1 = cljs.core.__destructure_map(map__55270);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq55269){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55269));
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
var len__5769__auto___56196 = arguments.length;
var i__5770__auto___56197 = (0);
while(true){
if((i__5770__auto___56197 < len__5769__auto___56196)){
args__5775__auto__.push((arguments[i__5770__auto___56197]));

var G__56198 = (i__5770__auto___56197 + (1));
i__5770__auto___56197 = G__56198;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55274 = conformed_args__52031__auto__;
var map__55274__$1 = cljs.core.__destructure_map(map__55274);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq55271){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55271));
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
var len__5769__auto___56199 = arguments.length;
var i__5770__auto___56200 = (0);
while(true){
if((i__5770__auto___56200 < len__5769__auto___56199)){
args__5775__auto__.push((arguments[i__5770__auto___56200]));

var G__56201 = (i__5770__auto___56200 + (1));
i__5770__auto___56200 = G__56201;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55277 = conformed_args__52031__auto__;
var map__55277__$1 = cljs.core.__destructure_map(map__55277);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq55275){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55275));
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
var len__5769__auto___56202 = arguments.length;
var i__5770__auto___56203 = (0);
while(true){
if((i__5770__auto___56203 < len__5769__auto___56202)){
args__5775__auto__.push((arguments[i__5770__auto___56203]));

var G__56204 = (i__5770__auto___56203 + (1));
i__5770__auto___56203 = G__56204;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55282 = conformed_args__52031__auto__;
var map__55282__$1 = cljs.core.__destructure_map(map__55282);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55282__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55282__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55282__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq55280){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55280));
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
var len__5769__auto___56205 = arguments.length;
var i__5770__auto___56206 = (0);
while(true){
if((i__5770__auto___56206 < len__5769__auto___56205)){
args__5775__auto__.push((arguments[i__5770__auto___56206]));

var G__56207 = (i__5770__auto___56206 + (1));
i__5770__auto___56206 = G__56207;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55287 = conformed_args__52031__auto__;
var map__55287__$1 = cljs.core.__destructure_map(map__55287);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq55285){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55285));
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
var len__5769__auto___56208 = arguments.length;
var i__5770__auto___56209 = (0);
while(true){
if((i__5770__auto___56209 < len__5769__auto___56208)){
args__5775__auto__.push((arguments[i__5770__auto___56209]));

var G__56210 = (i__5770__auto___56209 + (1));
i__5770__auto___56209 = G__56210;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55292 = conformed_args__52031__auto__;
var map__55292__$1 = cljs.core.__destructure_map(map__55292);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq55288){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55288));
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
var len__5769__auto___56211 = arguments.length;
var i__5770__auto___56212 = (0);
while(true){
if((i__5770__auto___56212 < len__5769__auto___56211)){
args__5775__auto__.push((arguments[i__5770__auto___56212]));

var G__56213 = (i__5770__auto___56212 + (1));
i__5770__auto___56212 = G__56213;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55298 = conformed_args__52031__auto__;
var map__55298__$1 = cljs.core.__destructure_map(map__55298);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq55295){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55295));
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
var len__5769__auto___56214 = arguments.length;
var i__5770__auto___56215 = (0);
while(true){
if((i__5770__auto___56215 < len__5769__auto___56214)){
args__5775__auto__.push((arguments[i__5770__auto___56215]));

var G__56216 = (i__5770__auto___56215 + (1));
i__5770__auto___56215 = G__56216;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55301 = conformed_args__52031__auto__;
var map__55301__$1 = cljs.core.__destructure_map(map__55301);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq55300){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55300));
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
var len__5769__auto___56217 = arguments.length;
var i__5770__auto___56218 = (0);
while(true){
if((i__5770__auto___56218 < len__5769__auto___56217)){
args__5775__auto__.push((arguments[i__5770__auto___56218]));

var G__56219 = (i__5770__auto___56218 + (1));
i__5770__auto___56218 = G__56219;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55303 = conformed_args__52031__auto__;
var map__55303__$1 = cljs.core.__destructure_map(map__55303);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq55302){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55302));
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
var len__5769__auto___56220 = arguments.length;
var i__5770__auto___56221 = (0);
while(true){
if((i__5770__auto___56221 < len__5769__auto___56220)){
args__5775__auto__.push((arguments[i__5770__auto___56221]));

var G__56222 = (i__5770__auto___56221 + (1));
i__5770__auto___56221 = G__56222;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55311 = conformed_args__52031__auto__;
var map__55311__$1 = cljs.core.__destructure_map(map__55311);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55311__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55311__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55311__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq55307){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55307));
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
var len__5769__auto___56223 = arguments.length;
var i__5770__auto___56224 = (0);
while(true){
if((i__5770__auto___56224 < len__5769__auto___56223)){
args__5775__auto__.push((arguments[i__5770__auto___56224]));

var G__56225 = (i__5770__auto___56224 + (1));
i__5770__auto___56224 = G__56225;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55319 = conformed_args__52031__auto__;
var map__55319__$1 = cljs.core.__destructure_map(map__55319);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq55315){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55315));
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
var len__5769__auto___56226 = arguments.length;
var i__5770__auto___56227 = (0);
while(true){
if((i__5770__auto___56227 < len__5769__auto___56226)){
args__5775__auto__.push((arguments[i__5770__auto___56227]));

var G__56228 = (i__5770__auto___56227 + (1));
i__5770__auto___56227 = G__56228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55345 = conformed_args__52031__auto__;
var map__55345__$1 = cljs.core.__destructure_map(map__55345);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55345__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq55326){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55326));
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
var len__5769__auto___56229 = arguments.length;
var i__5770__auto___56230 = (0);
while(true){
if((i__5770__auto___56230 < len__5769__auto___56229)){
args__5775__auto__.push((arguments[i__5770__auto___56230]));

var G__56231 = (i__5770__auto___56230 + (1));
i__5770__auto___56230 = G__56231;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55352 = conformed_args__52031__auto__;
var map__55352__$1 = cljs.core.__destructure_map(map__55352);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq55350){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55350));
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
var len__5769__auto___56232 = arguments.length;
var i__5770__auto___56233 = (0);
while(true){
if((i__5770__auto___56233 < len__5769__auto___56232)){
args__5775__auto__.push((arguments[i__5770__auto___56233]));

var G__56234 = (i__5770__auto___56233 + (1));
i__5770__auto___56233 = G__56234;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55354 = conformed_args__52031__auto__;
var map__55354__$1 = cljs.core.__destructure_map(map__55354);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq55353){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55353));
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
var len__5769__auto___56235 = arguments.length;
var i__5770__auto___56236 = (0);
while(true){
if((i__5770__auto___56236 < len__5769__auto___56235)){
args__5775__auto__.push((arguments[i__5770__auto___56236]));

var G__56237 = (i__5770__auto___56236 + (1));
i__5770__auto___56236 = G__56237;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55360 = conformed_args__52031__auto__;
var map__55360__$1 = cljs.core.__destructure_map(map__55360);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55360__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55360__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55360__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq55355){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55355));
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
var len__5769__auto___56238 = arguments.length;
var i__5770__auto___56239 = (0);
while(true){
if((i__5770__auto___56239 < len__5769__auto___56238)){
args__5775__auto__.push((arguments[i__5770__auto___56239]));

var G__56240 = (i__5770__auto___56239 + (1));
i__5770__auto___56239 = G__56240;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55412 = conformed_args__52031__auto__;
var map__55412__$1 = cljs.core.__destructure_map(map__55412);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq55384){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55384));
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
var len__5769__auto___56241 = arguments.length;
var i__5770__auto___56242 = (0);
while(true){
if((i__5770__auto___56242 < len__5769__auto___56241)){
args__5775__auto__.push((arguments[i__5770__auto___56242]));

var G__56243 = (i__5770__auto___56242 + (1));
i__5770__auto___56242 = G__56243;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55453 = conformed_args__52031__auto__;
var map__55453__$1 = cljs.core.__destructure_map(map__55453);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55453__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55453__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55453__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq55432){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55432));
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
var len__5769__auto___56244 = arguments.length;
var i__5770__auto___56245 = (0);
while(true){
if((i__5770__auto___56245 < len__5769__auto___56244)){
args__5775__auto__.push((arguments[i__5770__auto___56245]));

var G__56246 = (i__5770__auto___56245 + (1));
i__5770__auto___56245 = G__56246;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55456 = conformed_args__52031__auto__;
var map__55456__$1 = cljs.core.__destructure_map(map__55456);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq55454){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55454));
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
var len__5769__auto___56247 = arguments.length;
var i__5770__auto___56248 = (0);
while(true){
if((i__5770__auto___56248 < len__5769__auto___56247)){
args__5775__auto__.push((arguments[i__5770__auto___56248]));

var G__56249 = (i__5770__auto___56248 + (1));
i__5770__auto___56248 = G__56249;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55468 = conformed_args__52031__auto__;
var map__55468__$1 = cljs.core.__destructure_map(map__55468);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq55467){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55467));
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
var len__5769__auto___56250 = arguments.length;
var i__5770__auto___56251 = (0);
while(true){
if((i__5770__auto___56251 < len__5769__auto___56250)){
args__5775__auto__.push((arguments[i__5770__auto___56251]));

var G__56252 = (i__5770__auto___56251 + (1));
i__5770__auto___56251 = G__56252;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55475 = conformed_args__52031__auto__;
var map__55475__$1 = cljs.core.__destructure_map(map__55475);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq55472){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55472));
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
var len__5769__auto___56253 = arguments.length;
var i__5770__auto___56254 = (0);
while(true){
if((i__5770__auto___56254 < len__5769__auto___56253)){
args__5775__auto__.push((arguments[i__5770__auto___56254]));

var G__56255 = (i__5770__auto___56254 + (1));
i__5770__auto___56254 = G__56255;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55488 = conformed_args__52031__auto__;
var map__55488__$1 = cljs.core.__destructure_map(map__55488);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq55481){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55481));
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
var len__5769__auto___56256 = arguments.length;
var i__5770__auto___56257 = (0);
while(true){
if((i__5770__auto___56257 < len__5769__auto___56256)){
args__5775__auto__.push((arguments[i__5770__auto___56257]));

var G__56258 = (i__5770__auto___56257 + (1));
i__5770__auto___56257 = G__56258;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55493 = conformed_args__52031__auto__;
var map__55493__$1 = cljs.core.__destructure_map(map__55493);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq55490){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55490));
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
var len__5769__auto___56259 = arguments.length;
var i__5770__auto___56260 = (0);
while(true){
if((i__5770__auto___56260 < len__5769__auto___56259)){
args__5775__auto__.push((arguments[i__5770__auto___56260]));

var G__56261 = (i__5770__auto___56260 + (1));
i__5770__auto___56260 = G__56261;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55498 = conformed_args__52031__auto__;
var map__55498__$1 = cljs.core.__destructure_map(map__55498);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq55495){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55495));
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
var len__5769__auto___56262 = arguments.length;
var i__5770__auto___56263 = (0);
while(true){
if((i__5770__auto___56263 < len__5769__auto___56262)){
args__5775__auto__.push((arguments[i__5770__auto___56263]));

var G__56264 = (i__5770__auto___56263 + (1));
i__5770__auto___56263 = G__56264;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55502 = conformed_args__52031__auto__;
var map__55502__$1 = cljs.core.__destructure_map(map__55502);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq55499){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55499));
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
var len__5769__auto___56265 = arguments.length;
var i__5770__auto___56266 = (0);
while(true){
if((i__5770__auto___56266 < len__5769__auto___56265)){
args__5775__auto__.push((arguments[i__5770__auto___56266]));

var G__56267 = (i__5770__auto___56266 + (1));
i__5770__auto___56266 = G__56267;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55506 = conformed_args__52031__auto__;
var map__55506__$1 = cljs.core.__destructure_map(map__55506);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq55505){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55505));
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
var len__5769__auto___56268 = arguments.length;
var i__5770__auto___56269 = (0);
while(true){
if((i__5770__auto___56269 < len__5769__auto___56268)){
args__5775__auto__.push((arguments[i__5770__auto___56269]));

var G__56270 = (i__5770__auto___56269 + (1));
i__5770__auto___56269 = G__56270;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55509 = conformed_args__52031__auto__;
var map__55509__$1 = cljs.core.__destructure_map(map__55509);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq55507){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55507));
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
var len__5769__auto___56271 = arguments.length;
var i__5770__auto___56272 = (0);
while(true){
if((i__5770__auto___56272 < len__5769__auto___56271)){
args__5775__auto__.push((arguments[i__5770__auto___56272]));

var G__56273 = (i__5770__auto___56272 + (1));
i__5770__auto___56272 = G__56273;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55514 = conformed_args__52031__auto__;
var map__55514__$1 = cljs.core.__destructure_map(map__55514);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq55513){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55513));
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
var len__5769__auto___56274 = arguments.length;
var i__5770__auto___56275 = (0);
while(true){
if((i__5770__auto___56275 < len__5769__auto___56274)){
args__5775__auto__.push((arguments[i__5770__auto___56275]));

var G__56276 = (i__5770__auto___56275 + (1));
i__5770__auto___56275 = G__56276;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55517 = conformed_args__52031__auto__;
var map__55517__$1 = cljs.core.__destructure_map(map__55517);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq55515){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55515));
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
var len__5769__auto___56277 = arguments.length;
var i__5770__auto___56278 = (0);
while(true){
if((i__5770__auto___56278 < len__5769__auto___56277)){
args__5775__auto__.push((arguments[i__5770__auto___56278]));

var G__56279 = (i__5770__auto___56278 + (1));
i__5770__auto___56278 = G__56279;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52031__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55522 = conformed_args__52031__auto__;
var map__55522__$1 = cljs.core.__destructure_map(map__55522);
var attrs__52032__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__52034__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52033__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__52033__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52033__auto__);
var attrs_value__52035__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52032__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52035__auto__], null),children__52033__auto____$1),css__52034__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq55520){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55520));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
