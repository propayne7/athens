goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60721,p__60722){
var map__60723 = p__60721;
var map__60723__$1 = (((((!((map__60723 == null))))?(((((map__60723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60723):map__60723);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60724 = p__60722;
var map__60724__$1 = (((((!((map__60724 == null))))?(((((map__60724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60724):map__60724);
var msg = map__60724__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60724__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60727,p__60728){
var map__60729 = p__60727;
var map__60729__$1 = (((((!((map__60729 == null))))?(((((map__60729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60729):map__60729);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60730 = p__60728;
var map__60730__$1 = (((((!((map__60730 == null))))?(((((map__60730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60730):map__60730);
var msg = map__60730__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60730__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60733 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60735 = null;
var count__60736 = (0);
var i__60737 = (0);
while(true){
if((i__60737 < count__60736)){
var map__60743 = chunk__60735.cljs$core$IIndexed$_nth$arity$2(null,i__60737);
var map__60743__$1 = (((((!((map__60743 == null))))?(((((map__60743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60743):map__60743);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60743__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60790 = seq__60733;
var G__60791 = chunk__60735;
var G__60792 = count__60736;
var G__60793 = (i__60737 + (1));
seq__60733 = G__60790;
chunk__60735 = G__60791;
count__60736 = G__60792;
i__60737 = G__60793;
continue;
} else {
var G__60794 = seq__60733;
var G__60795 = chunk__60735;
var G__60796 = count__60736;
var G__60797 = (i__60737 + (1));
seq__60733 = G__60794;
chunk__60735 = G__60795;
count__60736 = G__60796;
i__60737 = G__60797;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60733);
if(temp__5735__auto__){
var seq__60733__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60733__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60733__$1);
var G__60798 = cljs.core.chunk_rest(seq__60733__$1);
var G__60799 = c__4609__auto__;
var G__60800 = cljs.core.count(c__4609__auto__);
var G__60801 = (0);
seq__60733 = G__60798;
chunk__60735 = G__60799;
count__60736 = G__60800;
i__60737 = G__60801;
continue;
} else {
var map__60745 = cljs.core.first(seq__60733__$1);
var map__60745__$1 = (((((!((map__60745 == null))))?(((((map__60745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60745):map__60745);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60745__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60802 = cljs.core.next(seq__60733__$1);
var G__60803 = null;
var G__60804 = (0);
var G__60805 = (0);
seq__60733 = G__60802;
chunk__60735 = G__60803;
count__60736 = G__60804;
i__60737 = G__60805;
continue;
} else {
var G__60806 = cljs.core.next(seq__60733__$1);
var G__60807 = null;
var G__60808 = (0);
var G__60809 = (0);
seq__60733 = G__60806;
chunk__60735 = G__60807;
count__60736 = G__60808;
i__60737 = G__60809;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60747,msg){
var map__60748 = p__60747;
var map__60748__$1 = (((((!((map__60748 == null))))?(((((map__60748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60748):map__60748);
var runtime = map__60748__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60750,key,p__60751){
var map__60752 = p__60750;
var map__60752__$1 = (((((!((map__60752 == null))))?(((((map__60752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60752):map__60752);
var state = map__60752__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60753 = p__60751;
var map__60753__$1 = (((((!((map__60753 == null))))?(((((map__60753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60753):map__60753);
var spec = map__60753__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60756,key,spec){
var map__60757 = p__60756;
var map__60757__$1 = (((((!((map__60757 == null))))?(((((map__60757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60757):map__60757);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60764){
var map__60765 = p__60764;
var map__60765__$1 = (((((!((map__60765 == null))))?(((((map__60765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60765):map__60765);
var runtime = map__60765__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60765__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60759_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60759_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60760_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60760_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60761_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60761_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60762_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60762_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60763_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60763_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60767,key){
var map__60768 = p__60767;
var map__60768__$1 = (((((!((map__60768 == null))))?(((((map__60768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60768):map__60768);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60768__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60770,p__60771){
var map__60772 = p__60770;
var map__60772__$1 = (((((!((map__60772 == null))))?(((((map__60772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60772):map__60772);
var runtime = map__60772__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60773 = p__60771;
var map__60773__$1 = (((((!((map__60773 == null))))?(((((map__60773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60773):map__60773);
var msg = map__60773__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60773__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60776 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60778 = null;
var count__60779 = (0);
var i__60780 = (0);
while(true){
if((i__60780 < count__60779)){
var map__60786 = chunk__60778.cljs$core$IIndexed$_nth$arity$2(null,i__60780);
var map__60786__$1 = (((((!((map__60786 == null))))?(((((map__60786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60786):map__60786);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60786__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60810 = seq__60776;
var G__60811 = chunk__60778;
var G__60812 = count__60779;
var G__60813 = (i__60780 + (1));
seq__60776 = G__60810;
chunk__60778 = G__60811;
count__60779 = G__60812;
i__60780 = G__60813;
continue;
} else {
var G__60814 = seq__60776;
var G__60815 = chunk__60778;
var G__60816 = count__60779;
var G__60817 = (i__60780 + (1));
seq__60776 = G__60814;
chunk__60778 = G__60815;
count__60779 = G__60816;
i__60780 = G__60817;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60776);
if(temp__5735__auto__){
var seq__60776__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60776__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60776__$1);
var G__60818 = cljs.core.chunk_rest(seq__60776__$1);
var G__60819 = c__4609__auto__;
var G__60820 = cljs.core.count(c__4609__auto__);
var G__60821 = (0);
seq__60776 = G__60818;
chunk__60778 = G__60819;
count__60779 = G__60820;
i__60780 = G__60821;
continue;
} else {
var map__60788 = cljs.core.first(seq__60776__$1);
var map__60788__$1 = (((((!((map__60788 == null))))?(((((map__60788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60788):map__60788);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60788__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60822 = cljs.core.next(seq__60776__$1);
var G__60823 = null;
var G__60824 = (0);
var G__60825 = (0);
seq__60776 = G__60822;
chunk__60778 = G__60823;
count__60779 = G__60824;
i__60780 = G__60825;
continue;
} else {
var G__60826 = cljs.core.next(seq__60776__$1);
var G__60827 = null;
var G__60828 = (0);
var G__60829 = (0);
seq__60776 = G__60826;
chunk__60778 = G__60827;
count__60779 = G__60828;
i__60780 = G__60829;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map