// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__46629,handler){
var map__46630 = p__46629;
var map__46630__$1 = ((((!((map__46630 == null)))?((((map__46630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46630):map__46630);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46630__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46630__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46630__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46630__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46630__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46630__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46630__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__46630,map__46630__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__46628_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__46628_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__46630,map__46630__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___46642 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___46642)){
var response_type_46643 = temp__4657__auto___46642;
this$__$1.responseType = cljs.core.name(response_type_46643);
} else {
}

var seq__46632_46644 = cljs.core.seq(headers);
var chunk__46633_46645 = null;
var count__46634_46646 = (0);
var i__46635_46647 = (0);
while(true){
if((i__46635_46647 < count__46634_46646)){
var vec__46636_46648 = chunk__46633_46645.cljs$core$IIndexed$_nth$arity$2(null,i__46635_46647);
var k_46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46636_46648,(0),null);
var v_46650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46636_46648,(1),null);
this$__$1.setRequestHeader(k_46649,v_46650);

var G__46651 = seq__46632_46644;
var G__46652 = chunk__46633_46645;
var G__46653 = count__46634_46646;
var G__46654 = (i__46635_46647 + (1));
seq__46632_46644 = G__46651;
chunk__46633_46645 = G__46652;
count__46634_46646 = G__46653;
i__46635_46647 = G__46654;
continue;
} else {
var temp__4657__auto___46655 = cljs.core.seq(seq__46632_46644);
if(temp__4657__auto___46655){
var seq__46632_46656__$1 = temp__4657__auto___46655;
if(cljs.core.chunked_seq_QMARK_(seq__46632_46656__$1)){
var c__31198__auto___46657 = cljs.core.chunk_first(seq__46632_46656__$1);
var G__46658 = cljs.core.chunk_rest(seq__46632_46656__$1);
var G__46659 = c__31198__auto___46657;
var G__46660 = cljs.core.count(c__31198__auto___46657);
var G__46661 = (0);
seq__46632_46644 = G__46658;
chunk__46633_46645 = G__46659;
count__46634_46646 = G__46660;
i__46635_46647 = G__46661;
continue;
} else {
var vec__46639_46662 = cljs.core.first(seq__46632_46656__$1);
var k_46663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46639_46662,(0),null);
var v_46664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46639_46662,(1),null);
this$__$1.setRequestHeader(k_46663,v_46664);

var G__46665 = cljs.core.next(seq__46632_46656__$1);
var G__46666 = null;
var G__46667 = (0);
var G__46668 = (0);
seq__46632_46644 = G__46665;
chunk__46633_46645 = G__46666;
count__46634_46646 = G__46667;
i__46635_46647 = G__46668;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30387__auto__ = body;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
