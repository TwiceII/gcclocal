// Compiled by ClojureScript 1.9.89 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31851,handler){
var map__31852 = p__31851;
var map__31852__$1 = ((((!((map__31852 == null)))?((((map__31852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31852):map__31852);
var uri = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31852,map__31852__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31850_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31850_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31852,map__31852__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31864 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31864)){
var response_type_31865 = temp__4657__auto___31864;
this$__$1.responseType = cljs.core.name.call(null,response_type_31865);
} else {
}

var seq__31854_31866 = cljs.core.seq.call(null,headers);
var chunk__31855_31867 = null;
var count__31856_31868 = (0);
var i__31857_31869 = (0);
while(true){
if((i__31857_31869 < count__31856_31868)){
var vec__31858_31870 = cljs.core._nth.call(null,chunk__31855_31867,i__31857_31869);
var k_31871 = cljs.core.nth.call(null,vec__31858_31870,(0),null);
var v_31872 = cljs.core.nth.call(null,vec__31858_31870,(1),null);
this$__$1.setRequestHeader(k_31871,v_31872);

var G__31873 = seq__31854_31866;
var G__31874 = chunk__31855_31867;
var G__31875 = count__31856_31868;
var G__31876 = (i__31857_31869 + (1));
seq__31854_31866 = G__31873;
chunk__31855_31867 = G__31874;
count__31856_31868 = G__31875;
i__31857_31869 = G__31876;
continue;
} else {
var temp__4657__auto___31877 = cljs.core.seq.call(null,seq__31854_31866);
if(temp__4657__auto___31877){
var seq__31854_31878__$1 = temp__4657__auto___31877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31854_31878__$1)){
var c__31388__auto___31879 = cljs.core.chunk_first.call(null,seq__31854_31878__$1);
var G__31880 = cljs.core.chunk_rest.call(null,seq__31854_31878__$1);
var G__31881 = c__31388__auto___31879;
var G__31882 = cljs.core.count.call(null,c__31388__auto___31879);
var G__31883 = (0);
seq__31854_31866 = G__31880;
chunk__31855_31867 = G__31881;
count__31856_31868 = G__31882;
i__31857_31869 = G__31883;
continue;
} else {
var vec__31861_31884 = cljs.core.first.call(null,seq__31854_31878__$1);
var k_31885 = cljs.core.nth.call(null,vec__31861_31884,(0),null);
var v_31886 = cljs.core.nth.call(null,vec__31861_31884,(1),null);
this$__$1.setRequestHeader(k_31885,v_31886);

var G__31887 = cljs.core.next.call(null,seq__31854_31878__$1);
var G__31888 = null;
var G__31889 = (0);
var G__31890 = (0);
seq__31854_31866 = G__31887;
chunk__31855_31867 = G__31888;
count__31856_31868 = G__31889;
i__31857_31869 = G__31890;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30577__auto__ = body;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
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
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map