goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46746 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46747 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46747);

try{try{var seq__46748 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46749 = null;
var count__46750 = (0);
var i__46751 = (0);
while(true){
if((i__46751 < count__46750)){
var vec__46758 = chunk__46749.cljs$core$IIndexed$_nth$arity$2(null,i__46751);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46758,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46758,(1),null);
var temp__5733__auto___46803 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46803)){
var effect_fn_46804 = temp__5733__auto___46803;
(effect_fn_46804.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46804.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46804.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46805 = seq__46748;
var G__46806 = chunk__46749;
var G__46807 = count__46750;
var G__46808 = (i__46751 + (1));
seq__46748 = G__46805;
chunk__46749 = G__46806;
count__46750 = G__46807;
i__46751 = G__46808;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46748);
if(temp__5735__auto__){
var seq__46748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46748__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46748__$1);
var G__46809 = cljs.core.chunk_rest(seq__46748__$1);
var G__46810 = c__4609__auto__;
var G__46811 = cljs.core.count(c__4609__auto__);
var G__46812 = (0);
seq__46748 = G__46809;
chunk__46749 = G__46810;
count__46750 = G__46811;
i__46751 = G__46812;
continue;
} else {
var vec__46761 = cljs.core.first(seq__46748__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46761,(1),null);
var temp__5733__auto___46813 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46813)){
var effect_fn_46814 = temp__5733__auto___46813;
(effect_fn_46814.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46814.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46814.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46815 = cljs.core.next(seq__46748__$1);
var G__46816 = null;
var G__46817 = (0);
var G__46818 = (0);
seq__46748 = G__46815;
chunk__46749 = G__46816;
count__46750 = G__46817;
i__46751 = G__46818;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45912__auto___46819 = re_frame.interop.now();
var duration__45913__auto___46820 = (end__45912__auto___46819 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45913__auto___46820,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45912__auto___46819);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46746);
}} else {
var seq__46764 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46765 = null;
var count__46766 = (0);
var i__46767 = (0);
while(true){
if((i__46767 < count__46766)){
var vec__46774 = chunk__46765.cljs$core$IIndexed$_nth$arity$2(null,i__46767);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46774,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46774,(1),null);
var temp__5733__auto___46821 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46821)){
var effect_fn_46822 = temp__5733__auto___46821;
(effect_fn_46822.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46822.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46822.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46823 = seq__46764;
var G__46824 = chunk__46765;
var G__46825 = count__46766;
var G__46826 = (i__46767 + (1));
seq__46764 = G__46823;
chunk__46765 = G__46824;
count__46766 = G__46825;
i__46767 = G__46826;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46764);
if(temp__5735__auto__){
var seq__46764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46764__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46764__$1);
var G__46827 = cljs.core.chunk_rest(seq__46764__$1);
var G__46828 = c__4609__auto__;
var G__46829 = cljs.core.count(c__4609__auto__);
var G__46830 = (0);
seq__46764 = G__46827;
chunk__46765 = G__46828;
count__46766 = G__46829;
i__46767 = G__46830;
continue;
} else {
var vec__46779 = cljs.core.first(seq__46764__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46779,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46779,(1),null);
var temp__5733__auto___46831 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46831)){
var effect_fn_46832 = temp__5733__auto___46831;
(effect_fn_46832.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46832.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46832.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46833 = cljs.core.next(seq__46764__$1);
var G__46834 = null;
var G__46835 = (0);
var G__46836 = (0);
seq__46764 = G__46833;
chunk__46765 = G__46834;
count__46766 = G__46835;
i__46767 = G__46836;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46782 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46783 = null;
var count__46784 = (0);
var i__46785 = (0);
while(true){
if((i__46785 < count__46784)){
var map__46791 = chunk__46783.cljs$core$IIndexed$_nth$arity$2(null,i__46785);
var map__46791__$1 = (((((!((map__46791 == null))))?(((((map__46791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46791):map__46791);
var effect = map__46791__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46791__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46791__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46782,chunk__46783,count__46784,i__46785,map__46791,map__46791__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46782,chunk__46783,count__46784,i__46785,map__46791,map__46791__$1,effect,ms,dispatch))
,ms);
}


var G__46840 = seq__46782;
var G__46841 = chunk__46783;
var G__46842 = count__46784;
var G__46843 = (i__46785 + (1));
seq__46782 = G__46840;
chunk__46783 = G__46841;
count__46784 = G__46842;
i__46785 = G__46843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46782);
if(temp__5735__auto__){
var seq__46782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46782__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46782__$1);
var G__46844 = cljs.core.chunk_rest(seq__46782__$1);
var G__46845 = c__4609__auto__;
var G__46846 = cljs.core.count(c__4609__auto__);
var G__46847 = (0);
seq__46782 = G__46844;
chunk__46783 = G__46845;
count__46784 = G__46846;
i__46785 = G__46847;
continue;
} else {
var map__46793 = cljs.core.first(seq__46782__$1);
var map__46793__$1 = (((((!((map__46793 == null))))?(((((map__46793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46793):map__46793);
var effect = map__46793__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46793__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46793__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46782,chunk__46783,count__46784,i__46785,map__46793,map__46793__$1,effect,ms,dispatch,seq__46782__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46782,chunk__46783,count__46784,i__46785,map__46793,map__46793__$1,effect,ms,dispatch,seq__46782__$1,temp__5735__auto__))
,ms);
}


var G__46850 = cljs.core.next(seq__46782__$1);
var G__46851 = null;
var G__46852 = (0);
var G__46853 = (0);
seq__46782 = G__46850;
chunk__46783 = G__46851;
count__46784 = G__46852;
i__46785 = G__46853;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46795 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46796 = null;
var count__46797 = (0);
var i__46798 = (0);
while(true){
if((i__46798 < count__46797)){
var event = chunk__46796.cljs$core$IIndexed$_nth$arity$2(null,i__46798);
re_frame.router.dispatch(event);


var G__46858 = seq__46795;
var G__46859 = chunk__46796;
var G__46860 = count__46797;
var G__46861 = (i__46798 + (1));
seq__46795 = G__46858;
chunk__46796 = G__46859;
count__46797 = G__46860;
i__46798 = G__46861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46795);
if(temp__5735__auto__){
var seq__46795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46795__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46795__$1);
var G__46862 = cljs.core.chunk_rest(seq__46795__$1);
var G__46863 = c__4609__auto__;
var G__46864 = cljs.core.count(c__4609__auto__);
var G__46865 = (0);
seq__46795 = G__46862;
chunk__46796 = G__46863;
count__46797 = G__46864;
i__46798 = G__46865;
continue;
} else {
var event = cljs.core.first(seq__46795__$1);
re_frame.router.dispatch(event);


var G__46866 = cljs.core.next(seq__46795__$1);
var G__46867 = null;
var G__46868 = (0);
var G__46869 = (0);
seq__46795 = G__46866;
chunk__46796 = G__46867;
count__46797 = G__46868;
i__46798 = G__46869;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46799 = cljs.core.seq(value);
var chunk__46800 = null;
var count__46801 = (0);
var i__46802 = (0);
while(true){
if((i__46802 < count__46801)){
var event = chunk__46800.cljs$core$IIndexed$_nth$arity$2(null,i__46802);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46872 = seq__46799;
var G__46873 = chunk__46800;
var G__46874 = count__46801;
var G__46875 = (i__46802 + (1));
seq__46799 = G__46872;
chunk__46800 = G__46873;
count__46801 = G__46874;
i__46802 = G__46875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46799);
if(temp__5735__auto__){
var seq__46799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46799__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46799__$1);
var G__46876 = cljs.core.chunk_rest(seq__46799__$1);
var G__46877 = c__4609__auto__;
var G__46878 = cljs.core.count(c__4609__auto__);
var G__46879 = (0);
seq__46799 = G__46876;
chunk__46800 = G__46877;
count__46801 = G__46878;
i__46802 = G__46879;
continue;
} else {
var event = cljs.core.first(seq__46799__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46882 = cljs.core.next(seq__46799__$1);
var G__46883 = null;
var G__46884 = (0);
var G__46885 = (0);
seq__46799 = G__46882;
chunk__46800 = G__46883;
count__46801 = G__46884;
i__46802 = G__46885;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map