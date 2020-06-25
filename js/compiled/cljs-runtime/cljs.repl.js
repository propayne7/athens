goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53438){
var map__53439 = p__53438;
var map__53439__$1 = (((((!((map__53439 == null))))?(((((map__53439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53439):map__53439);
var m = map__53439__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53441_53566 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53442_53567 = null;
var count__53443_53568 = (0);
var i__53444_53569 = (0);
while(true){
if((i__53444_53569 < count__53443_53568)){
var f_53570 = chunk__53442_53567.cljs$core$IIndexed$_nth$arity$2(null,i__53444_53569);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53570], 0));


var G__53571 = seq__53441_53566;
var G__53572 = chunk__53442_53567;
var G__53573 = count__53443_53568;
var G__53574 = (i__53444_53569 + (1));
seq__53441_53566 = G__53571;
chunk__53442_53567 = G__53572;
count__53443_53568 = G__53573;
i__53444_53569 = G__53574;
continue;
} else {
var temp__5735__auto___53575 = cljs.core.seq(seq__53441_53566);
if(temp__5735__auto___53575){
var seq__53441_53576__$1 = temp__5735__auto___53575;
if(cljs.core.chunked_seq_QMARK_(seq__53441_53576__$1)){
var c__4609__auto___53577 = cljs.core.chunk_first(seq__53441_53576__$1);
var G__53579 = cljs.core.chunk_rest(seq__53441_53576__$1);
var G__53580 = c__4609__auto___53577;
var G__53581 = cljs.core.count(c__4609__auto___53577);
var G__53582 = (0);
seq__53441_53566 = G__53579;
chunk__53442_53567 = G__53580;
count__53443_53568 = G__53581;
i__53444_53569 = G__53582;
continue;
} else {
var f_53583 = cljs.core.first(seq__53441_53576__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53583], 0));


var G__53584 = cljs.core.next(seq__53441_53576__$1);
var G__53585 = null;
var G__53586 = (0);
var G__53587 = (0);
seq__53441_53566 = G__53584;
chunk__53442_53567 = G__53585;
count__53443_53568 = G__53586;
i__53444_53569 = G__53587;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53588 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53588], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53588)))?cljs.core.second(arglists_53588):arglists_53588)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53446_53589 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53447_53590 = null;
var count__53448_53591 = (0);
var i__53449_53592 = (0);
while(true){
if((i__53449_53592 < count__53448_53591)){
var vec__53461_53596 = chunk__53447_53590.cljs$core$IIndexed$_nth$arity$2(null,i__53449_53592);
var name_53597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53461_53596,(0),null);
var map__53464_53598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53461_53596,(1),null);
var map__53464_53599__$1 = (((((!((map__53464_53598 == null))))?(((((map__53464_53598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53464_53598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53464_53598):map__53464_53598);
var doc_53600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53464_53599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53464_53599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53597], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53601], 0));

if(cljs.core.truth_(doc_53600)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53600], 0));
} else {
}


var G__53603 = seq__53446_53589;
var G__53604 = chunk__53447_53590;
var G__53605 = count__53448_53591;
var G__53606 = (i__53449_53592 + (1));
seq__53446_53589 = G__53603;
chunk__53447_53590 = G__53604;
count__53448_53591 = G__53605;
i__53449_53592 = G__53606;
continue;
} else {
var temp__5735__auto___53607 = cljs.core.seq(seq__53446_53589);
if(temp__5735__auto___53607){
var seq__53446_53608__$1 = temp__5735__auto___53607;
if(cljs.core.chunked_seq_QMARK_(seq__53446_53608__$1)){
var c__4609__auto___53609 = cljs.core.chunk_first(seq__53446_53608__$1);
var G__53610 = cljs.core.chunk_rest(seq__53446_53608__$1);
var G__53611 = c__4609__auto___53609;
var G__53612 = cljs.core.count(c__4609__auto___53609);
var G__53613 = (0);
seq__53446_53589 = G__53610;
chunk__53447_53590 = G__53611;
count__53448_53591 = G__53612;
i__53449_53592 = G__53613;
continue;
} else {
var vec__53466_53614 = cljs.core.first(seq__53446_53608__$1);
var name_53615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466_53614,(0),null);
var map__53469_53616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466_53614,(1),null);
var map__53469_53617__$1 = (((((!((map__53469_53616 == null))))?(((((map__53469_53616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53469_53616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53469_53616):map__53469_53616);
var doc_53618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53469_53617__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53469_53617__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53615], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53619], 0));

if(cljs.core.truth_(doc_53618)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53618], 0));
} else {
}


var G__53621 = cljs.core.next(seq__53446_53608__$1);
var G__53622 = null;
var G__53623 = (0);
var G__53624 = (0);
seq__53446_53589 = G__53621;
chunk__53447_53590 = G__53622;
count__53448_53591 = G__53623;
i__53449_53592 = G__53624;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53471 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53472 = null;
var count__53473 = (0);
var i__53474 = (0);
while(true){
if((i__53474 < count__53473)){
var role = chunk__53472.cljs$core$IIndexed$_nth$arity$2(null,i__53474);
var temp__5735__auto___53625__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53625__$1)){
var spec_53626 = temp__5735__auto___53625__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53626)], 0));
} else {
}


var G__53627 = seq__53471;
var G__53628 = chunk__53472;
var G__53629 = count__53473;
var G__53630 = (i__53474 + (1));
seq__53471 = G__53627;
chunk__53472 = G__53628;
count__53473 = G__53629;
i__53474 = G__53630;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53471);
if(temp__5735__auto____$1){
var seq__53471__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53471__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53471__$1);
var G__53631 = cljs.core.chunk_rest(seq__53471__$1);
var G__53632 = c__4609__auto__;
var G__53633 = cljs.core.count(c__4609__auto__);
var G__53634 = (0);
seq__53471 = G__53631;
chunk__53472 = G__53632;
count__53473 = G__53633;
i__53474 = G__53634;
continue;
} else {
var role = cljs.core.first(seq__53471__$1);
var temp__5735__auto___53635__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53635__$2)){
var spec_53636 = temp__5735__auto___53635__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53636)], 0));
} else {
}


var G__53637 = cljs.core.next(seq__53471__$1);
var G__53638 = null;
var G__53639 = (0);
var G__53640 = (0);
seq__53471 = G__53637;
chunk__53472 = G__53638;
count__53473 = G__53639;
i__53474 = G__53640;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53642 = cljs.core.ex_cause(t);
via = G__53641;
t = G__53642;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53492 = datafied_throwable;
var map__53492__$1 = (((((!((map__53492 == null))))?(((((map__53492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53492):map__53492);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53492__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53492__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53492__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53493 = cljs.core.last(via);
var map__53493__$1 = (((((!((map__53493 == null))))?(((((map__53493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53493):map__53493);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53493__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53493__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53493__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53494 = data;
var map__53494__$1 = (((((!((map__53494 == null))))?(((((map__53494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53494):map__53494);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53494__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53494__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53494__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53495 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53495__$1 = (((((!((map__53495 == null))))?(((((map__53495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53495):map__53495);
var top_data = map__53495__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53500 = phase;
var G__53500__$1 = (((G__53500 instanceof cljs.core.Keyword))?G__53500.fqn:null);
switch (G__53500__$1) {
case "read-source":
var map__53501 = data;
var map__53501__$1 = (((((!((map__53501 == null))))?(((((map__53501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53501):map__53501);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53503 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53503__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53503,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53503);
var G__53503__$2 = (cljs.core.truth_((function (){var fexpr__53504 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53504.cljs$core$IFn$_invoke$arity$1 ? fexpr__53504.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53504.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53503__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53503__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53503__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53505 = top_data;
var G__53505__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53505,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53505);
var G__53505__$2 = (cljs.core.truth_((function (){var fexpr__53506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53506.cljs$core$IFn$_invoke$arity$1 ? fexpr__53506.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53506.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53505__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53505__$1);
var G__53505__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53505__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53505__$2);
var G__53505__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53505__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53505__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53505__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53505__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53507 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53507,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53507,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53507,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53507,(3),null);
var G__53511 = top_data;
var G__53511__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53511,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53511);
var G__53511__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53511__$1);
var G__53511__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53511__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53511__$2);
var G__53511__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53511__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53511__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53511__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53511__$4;
}

break;
case "execution":
var vec__53512 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53512,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53512,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53512,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53512,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53491_SHARP_){
var or__4185__auto__ = (p1__53491_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__53516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53516.cljs$core$IFn$_invoke$arity$1 ? fexpr__53516.cljs$core$IFn$_invoke$arity$1(p1__53491_SHARP_) : fexpr__53516.call(null,p1__53491_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__53517 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53517__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53517,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53517);
var G__53517__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53517__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53517__$1);
var G__53517__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53517__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53517__$2);
var G__53517__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53517__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53517__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53517__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53517__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53500__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53522){
var map__53523 = p__53522;
var map__53523__$1 = (((((!((map__53523 == null))))?(((((map__53523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53523):map__53523);
var triage_data = map__53523__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53525 = phase;
var G__53525__$1 = (((G__53525 instanceof cljs.core.Keyword))?G__53525.fqn:null);
switch (G__53525__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53526 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53527 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53528 = loc;
var G__53529 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53530_53650 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53531_53651 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53532_53652 = true;
var _STAR_print_fn_STAR__temp_val__53533_53653 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53532_53652);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53533_53653);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53519_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53519_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53531_53651);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53530_53650);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53526,G__53527,G__53528,G__53529) : format.call(null,G__53526,G__53527,G__53528,G__53529));

break;
case "macroexpansion":
var G__53534 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53535 = cause_type;
var G__53536 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53537 = loc;
var G__53538 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53534,G__53535,G__53536,G__53537,G__53538) : format.call(null,G__53534,G__53535,G__53536,G__53537,G__53538));

break;
case "compile-syntax-check":
var G__53539 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53540 = cause_type;
var G__53541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53542 = loc;
var G__53543 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53539,G__53540,G__53541,G__53542,G__53543) : format.call(null,G__53539,G__53540,G__53541,G__53542,G__53543));

break;
case "compilation":
var G__53544 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53545 = cause_type;
var G__53546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53547 = loc;
var G__53548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53544,G__53545,G__53546,G__53547,G__53548) : format.call(null,G__53544,G__53545,G__53546,G__53547,G__53548));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53549 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53550 = symbol;
var G__53551 = loc;
var G__53552 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53553_53654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53554_53655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53555_53656 = true;
var _STAR_print_fn_STAR__temp_val__53556_53657 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53555_53656);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53556_53657);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53520_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53520_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53554_53655);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53553_53654);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53549,G__53550,G__53551,G__53552) : format.call(null,G__53549,G__53550,G__53551,G__53552));
} else {
var G__53557 = "Execution error%s at %s(%s).\n%s\n";
var G__53558 = cause_type;
var G__53559 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53560 = loc;
var G__53561 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53557,G__53558,G__53559,G__53560,G__53561) : format.call(null,G__53557,G__53558,G__53559,G__53560,G__53561));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53525__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map