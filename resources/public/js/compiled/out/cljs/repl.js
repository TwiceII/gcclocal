// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42369){
var map__42394 = p__42369;
var map__42394__$1 = ((((!((map__42394 == null)))?((((map__42394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42394):map__42394);
var m = map__42394__$1;
var n = cljs.core.get.call(null,map__42394__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42396_42418 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42397_42419 = null;
var count__42398_42420 = (0);
var i__42399_42421 = (0);
while(true){
if((i__42399_42421 < count__42398_42420)){
var f_42422 = cljs.core._nth.call(null,chunk__42397_42419,i__42399_42421);
cljs.core.println.call(null,"  ",f_42422);

var G__42423 = seq__42396_42418;
var G__42424 = chunk__42397_42419;
var G__42425 = count__42398_42420;
var G__42426 = (i__42399_42421 + (1));
seq__42396_42418 = G__42423;
chunk__42397_42419 = G__42424;
count__42398_42420 = G__42425;
i__42399_42421 = G__42426;
continue;
} else {
var temp__4657__auto___42427 = cljs.core.seq.call(null,seq__42396_42418);
if(temp__4657__auto___42427){
var seq__42396_42428__$1 = temp__4657__auto___42427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42396_42428__$1)){
var c__31388__auto___42429 = cljs.core.chunk_first.call(null,seq__42396_42428__$1);
var G__42430 = cljs.core.chunk_rest.call(null,seq__42396_42428__$1);
var G__42431 = c__31388__auto___42429;
var G__42432 = cljs.core.count.call(null,c__31388__auto___42429);
var G__42433 = (0);
seq__42396_42418 = G__42430;
chunk__42397_42419 = G__42431;
count__42398_42420 = G__42432;
i__42399_42421 = G__42433;
continue;
} else {
var f_42434 = cljs.core.first.call(null,seq__42396_42428__$1);
cljs.core.println.call(null,"  ",f_42434);

var G__42435 = cljs.core.next.call(null,seq__42396_42428__$1);
var G__42436 = null;
var G__42437 = (0);
var G__42438 = (0);
seq__42396_42418 = G__42435;
chunk__42397_42419 = G__42436;
count__42398_42420 = G__42437;
i__42399_42421 = G__42438;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42439 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30577__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42439);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42439)))?cljs.core.second.call(null,arglists_42439):arglists_42439));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42400_42440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42401_42441 = null;
var count__42402_42442 = (0);
var i__42403_42443 = (0);
while(true){
if((i__42403_42443 < count__42402_42442)){
var vec__42404_42444 = cljs.core._nth.call(null,chunk__42401_42441,i__42403_42443);
var name_42445 = cljs.core.nth.call(null,vec__42404_42444,(0),null);
var map__42407_42446 = cljs.core.nth.call(null,vec__42404_42444,(1),null);
var map__42407_42447__$1 = ((((!((map__42407_42446 == null)))?((((map__42407_42446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42407_42446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42407_42446):map__42407_42446);
var doc_42448 = cljs.core.get.call(null,map__42407_42447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42449 = cljs.core.get.call(null,map__42407_42447__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42445);

cljs.core.println.call(null," ",arglists_42449);

if(cljs.core.truth_(doc_42448)){
cljs.core.println.call(null," ",doc_42448);
} else {
}

var G__42450 = seq__42400_42440;
var G__42451 = chunk__42401_42441;
var G__42452 = count__42402_42442;
var G__42453 = (i__42403_42443 + (1));
seq__42400_42440 = G__42450;
chunk__42401_42441 = G__42451;
count__42402_42442 = G__42452;
i__42403_42443 = G__42453;
continue;
} else {
var temp__4657__auto___42454 = cljs.core.seq.call(null,seq__42400_42440);
if(temp__4657__auto___42454){
var seq__42400_42455__$1 = temp__4657__auto___42454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42400_42455__$1)){
var c__31388__auto___42456 = cljs.core.chunk_first.call(null,seq__42400_42455__$1);
var G__42457 = cljs.core.chunk_rest.call(null,seq__42400_42455__$1);
var G__42458 = c__31388__auto___42456;
var G__42459 = cljs.core.count.call(null,c__31388__auto___42456);
var G__42460 = (0);
seq__42400_42440 = G__42457;
chunk__42401_42441 = G__42458;
count__42402_42442 = G__42459;
i__42403_42443 = G__42460;
continue;
} else {
var vec__42409_42461 = cljs.core.first.call(null,seq__42400_42455__$1);
var name_42462 = cljs.core.nth.call(null,vec__42409_42461,(0),null);
var map__42412_42463 = cljs.core.nth.call(null,vec__42409_42461,(1),null);
var map__42412_42464__$1 = ((((!((map__42412_42463 == null)))?((((map__42412_42463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42412_42463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42412_42463):map__42412_42463);
var doc_42465 = cljs.core.get.call(null,map__42412_42464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42466 = cljs.core.get.call(null,map__42412_42464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42462);

cljs.core.println.call(null," ",arglists_42466);

if(cljs.core.truth_(doc_42465)){
cljs.core.println.call(null," ",doc_42465);
} else {
}

var G__42467 = cljs.core.next.call(null,seq__42400_42455__$1);
var G__42468 = null;
var G__42469 = (0);
var G__42470 = (0);
seq__42400_42440 = G__42467;
chunk__42401_42441 = G__42468;
count__42402_42442 = G__42469;
i__42403_42443 = G__42470;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42414 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42415 = null;
var count__42416 = (0);
var i__42417 = (0);
while(true){
if((i__42417 < count__42416)){
var role = cljs.core._nth.call(null,chunk__42415,i__42417);
var temp__4657__auto___42471__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42471__$1)){
var spec_42472 = temp__4657__auto___42471__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42472));
} else {
}

var G__42473 = seq__42414;
var G__42474 = chunk__42415;
var G__42475 = count__42416;
var G__42476 = (i__42417 + (1));
seq__42414 = G__42473;
chunk__42415 = G__42474;
count__42416 = G__42475;
i__42417 = G__42476;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42414);
if(temp__4657__auto____$1){
var seq__42414__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42414__$1)){
var c__31388__auto__ = cljs.core.chunk_first.call(null,seq__42414__$1);
var G__42477 = cljs.core.chunk_rest.call(null,seq__42414__$1);
var G__42478 = c__31388__auto__;
var G__42479 = cljs.core.count.call(null,c__31388__auto__);
var G__42480 = (0);
seq__42414 = G__42477;
chunk__42415 = G__42478;
count__42416 = G__42479;
i__42417 = G__42480;
continue;
} else {
var role = cljs.core.first.call(null,seq__42414__$1);
var temp__4657__auto___42481__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42481__$2)){
var spec_42482 = temp__4657__auto___42481__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42482));
} else {
}

var G__42483 = cljs.core.next.call(null,seq__42414__$1);
var G__42484 = null;
var G__42485 = (0);
var G__42486 = (0);
seq__42414 = G__42483;
chunk__42415 = G__42484;
count__42416 = G__42485;
i__42417 = G__42486;
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

//# sourceMappingURL=repl.js.map