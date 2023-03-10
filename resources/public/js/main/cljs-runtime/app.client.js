goog.provide('app.client');
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.app,app.ui.Root,"app");

com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.app,new cljs.core.Keyword(null,"friends","friends",-127631374),app.ui.PersonList);

com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.app,new cljs.core.Keyword(null,"enemies","enemies",2114285722),app.ui.PersonList);

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
app.client.refresh = (function app$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.app,app.ui.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app.application.app);

return console.log("Hot reload");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
