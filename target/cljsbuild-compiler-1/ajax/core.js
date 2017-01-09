// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response(interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request(interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31009__auto__,k__31010__auto__){
var self__ = this;
var this__31009__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__31009__auto____$1,k__31010__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31011__auto__,k46918,else__31012__auto__){
var self__ = this;
var this__31011__auto____$1 = this;
var G__46920 = (((k46918 instanceof cljs.core.Keyword))?k46918.fqn:null);
switch (G__46920) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46918,else__31012__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__46921,opts){
var self__ = this;
var map__46922 = p__46921;
var map__46922__$1 = ((((!((map__46922 == null)))?((((map__46922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46922):map__46922);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46922__$1,cljs.core.cst$kw$request);
var map__46924 = this;
var map__46924__$1 = ((((!((map__46924 == null)))?((((map__46924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46924):map__46924);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46924__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__46926,xhrio){
var self__ = this;
var map__46927 = p__46926;
var map__46927__$1 = ((((!((map__46927 == null)))?((((map__46927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46927):map__46927);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46927__$1,cljs.core.cst$kw$response);
var map__46929 = this;
var map__46929__$1 = ((((!((map__46929 == null)))?((((map__46929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46929):map__46929);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46929__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31023__auto__,writer__31024__auto__,opts__31025__auto__){
var self__ = this;
var this__31023__auto____$1 = this;
var pr_pair__31026__auto__ = ((function (this__31023__auto____$1){
return (function (keyval__31027__auto__){
return cljs.core.pr_sequential_writer(writer__31024__auto__,cljs.core.pr_writer,""," ","",opts__31025__auto__,keyval__31027__auto__);
});})(this__31023__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31024__auto__,pr_pair__31026__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__31025__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46917){
var self__ = this;
var G__46917__$1 = this;
return (new cljs.core.RecordIter((0),G__46917__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31007__auto__){
var self__ = this;
var this__31007__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31003__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31013__auto__){
var self__ = this;
var this__31013__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31004__auto__){
var self__ = this;
var this__31004__auto____$1 = this;
var h__30822__auto__ = self__.__hash;
if(!((h__30822__auto__ == null))){
return h__30822__auto__;
} else {
var h__30822__auto____$1 = cljs.core.hash_imap(this__31004__auto____$1);
self__.__hash = h__30822__auto____$1;

return h__30822__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31005__auto__,other__31006__auto__){
var self__ = this;
var this__31005__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30375__auto__ = other__31006__auto__;
if(cljs.core.truth_(and__30375__auto__)){
var and__30375__auto____$1 = (this__31005__auto____$1.constructor === other__31006__auto__.constructor);
if(and__30375__auto____$1){
return cljs.core.equiv_map(this__31005__auto____$1,other__31006__auto__);
} else {
return and__30375__auto____$1;
}
} else {
return and__30375__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31018__auto__,k__31019__auto__){
var self__ = this;
var this__31018__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__31019__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31018__auto____$1),self__.__meta),k__31019__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31019__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31016__auto__,k__31017__auto__,G__46917){
var self__ = this;
var this__31016__auto____$1 = this;
var pred__46931 = cljs.core.keyword_identical_QMARK_;
var expr__46932 = k__31017__auto__;
if(cljs.core.truth_((pred__46931.cljs$core$IFn$_invoke$arity$2 ? pred__46931.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__46932) : pred__46931.call(null,cljs.core.cst$kw$name,expr__46932)))){
return (new ajax.core.StandardInterceptor(G__46917,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46931.cljs$core$IFn$_invoke$arity$2 ? pred__46931.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$request,expr__46932) : pred__46931.call(null,cljs.core.cst$kw$request,expr__46932)))){
return (new ajax.core.StandardInterceptor(self__.name,G__46917,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46931.cljs$core$IFn$_invoke$arity$2 ? pred__46931.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response,expr__46932) : pred__46931.call(null,cljs.core.cst$kw$response,expr__46932)))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__46917,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31017__auto__,G__46917),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31021__auto__){
var self__ = this;
var this__31021__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31008__auto__,G__46917){
var self__ = this;
var this__31008__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__46917,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31014__auto__,entry__31015__auto__){
var self__ = this;
var this__31014__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31015__auto__)){
return cljs.core._assoc(this__31014__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31014__auto____$1,entry__31015__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__31043__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__31043__auto__,writer__31044__auto__){
return cljs.core._write(writer__31044__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__46919){
return (new ajax.core.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__46919),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__46919),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__46919),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46919,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__30387__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__46935,xhrio){
var map__46938 = p__46935;
var map__46938__$1 = ((((!((map__46938 == null)))?((((map__46938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46938):map__46938);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str(ajax.core.exception_message(e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.array_seq([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__31469__auto__ = [];
var len__31462__auto___46944 = arguments.length;
var i__31463__auto___46945 = (0);
while(true){
if((i__31463__auto___46945 < len__31462__auto___46944)){
args__31469__auto__.push((arguments[i__31463__auto___46945]));

var G__46946 = (i__31463__auto___46945 + (1));
i__31463__auto___46945 = G__46946;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((3) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31470__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq46940){
var G__46941 = cljs.core.first(seq46940);
var seq46940__$1 = cljs.core.next(seq46940);
var G__46942 = cljs.core.first(seq46940__$1);
var seq46940__$2 = cljs.core.next(seq46940__$1);
var G__46943 = cljs.core.first(seq46940__$2);
var seq46940__$3 = cljs.core.next(seq46940__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__46941,G__46942,G__46943,seq46940__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46947_SHARP_){
return [cljs.core.str(p1__46947_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31009__auto__,k__31010__auto__){
var self__ = this;
var this__31009__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__31009__auto____$1,k__31010__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31011__auto__,k46950,else__31012__auto__){
var self__ = this;
var this__31011__auto____$1 = this;
var G__46952 = (((k46950 instanceof cljs.core.Keyword))?k46950.fqn:null);
switch (G__46952) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46950,else__31012__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__46953,request){
var self__ = this;
var map__46954 = p__46953;
var map__46954__$1 = ((((!((map__46954 == null)))?((((map__46954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46954):map__46954);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46954__$1,cljs.core.cst$kw$content_DASH_type);
var map__46956 = this;
var map__46956__$1 = ((((!((map__46956 == null)))?((((map__46956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46956):map__46956);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46956__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__46956,map__46956__$1,content_type__$2,map__46954,map__46954__$1,content_type__$1){
return (function (p1__46948_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header(content_type__$2)], null),(function (){var or__30387__auto__ = p1__46948_SHARP_;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__46956,map__46956__$1,content_type__$2,map__46954,map__46954__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__46958,xhrio){
var self__ = this;
var map__46959 = p__46958;
var map__46959__$1 = ((((!((map__46959 == null)))?((((map__46959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46959):map__46959);
var format = map__46959__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46959__$1,cljs.core.cst$kw$read);
var map__46961 = this;
var map__46961__$1 = ((((!((map__46961 == null)))?((((map__46961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46961):map__46961);
var format__$1 = map__46961__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46961__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
var G__46964 = status;
switch (G__46964) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request failed.",cljs.core.cst$kw$failed) : fail.call(null,"Request failed.",cljs.core.cst$kw$failed));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request aborted by client.",cljs.core.cst$kw$aborted) : fail.call(null,"Request aborted by client.",cljs.core.cst$kw$aborted));
} else {
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request timed out.",cljs.core.cst$kw$timeout) : fail.call(null,"Request timed out.",cljs.core.cst$kw$timeout));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__46966 = ajax.protocols._status_text(xhrio);
var G__46967 = cljs.core.cst$kw$error;
var G__46968 = cljs.core.cst$kw$response;
var G__46969 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__46966,G__46967,G__46968,G__46969) : fail.call(null,G__46966,G__46967,G__46968,G__46969));
}
}catch (e46965){if((e46965 instanceof Object)){
var e = e46965;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e46965;

}
}
}
}catch (e46963){if((e46963 instanceof Object)){
var e = e46963;
var message = e.message;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e46963;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31023__auto__,writer__31024__auto__,opts__31025__auto__){
var self__ = this;
var this__31023__auto____$1 = this;
var pr_pair__31026__auto__ = ((function (this__31023__auto____$1){
return (function (keyval__31027__auto__){
return cljs.core.pr_sequential_writer(writer__31024__auto__,cljs.core.pr_writer,""," ","",opts__31025__auto__,keyval__31027__auto__);
});})(this__31023__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31024__auto__,pr_pair__31026__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__31025__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46949){
var self__ = this;
var G__46949__$1 = this;
return (new cljs.core.RecordIter((0),G__46949__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31007__auto__){
var self__ = this;
var this__31007__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31003__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31013__auto__){
var self__ = this;
var this__31013__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31004__auto__){
var self__ = this;
var this__31004__auto____$1 = this;
var h__30822__auto__ = self__.__hash;
if(!((h__30822__auto__ == null))){
return h__30822__auto__;
} else {
var h__30822__auto____$1 = cljs.core.hash_imap(this__31004__auto____$1);
self__.__hash = h__30822__auto____$1;

return h__30822__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31005__auto__,other__31006__auto__){
var self__ = this;
var this__31005__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30375__auto__ = other__31006__auto__;
if(cljs.core.truth_(and__30375__auto__)){
var and__30375__auto____$1 = (this__31005__auto____$1.constructor === other__31006__auto__.constructor);
if(and__30375__auto____$1){
return cljs.core.equiv_map(this__31005__auto____$1,other__31006__auto__);
} else {
return and__30375__auto____$1;
}
} else {
return and__30375__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31018__auto__,k__31019__auto__){
var self__ = this;
var this__31018__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__31019__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31018__auto____$1),self__.__meta),k__31019__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31019__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31016__auto__,k__31017__auto__,G__46949){
var self__ = this;
var this__31016__auto____$1 = this;
var pred__46970 = cljs.core.keyword_identical_QMARK_;
var expr__46971 = k__31017__auto__;
if(cljs.core.truth_((pred__46970.cljs$core$IFn$_invoke$arity$2 ? pred__46970.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$read,expr__46971) : pred__46970.call(null,cljs.core.cst$kw$read,expr__46971)))){
return (new ajax.core.ResponseFormat(G__46949,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46970.cljs$core$IFn$_invoke$arity$2 ? pred__46970.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$description,expr__46971) : pred__46970.call(null,cljs.core.cst$kw$description,expr__46971)))){
return (new ajax.core.ResponseFormat(self__.read,G__46949,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46970.cljs$core$IFn$_invoke$arity$2 ? pred__46970.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content_DASH_type,expr__46971) : pred__46970.call(null,cljs.core.cst$kw$content_DASH_type,expr__46971)))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__46949,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31017__auto__,G__46949),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31021__auto__){
var self__ = this;
var this__31021__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31008__auto__,G__46949){
var self__ = this;
var this__31008__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__46949,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31014__auto__,entry__31015__auto__){
var self__ = this;
var this__31014__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31015__auto__)){
return cljs.core._assoc(this__31014__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31014__auto____$1,entry__31015__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__31043__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__31043__auto__,writer__31044__auto__){
return cljs.core._write(writer__31044__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__46951){
return (new ajax.core.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__46951),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__46951),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__46951),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46951,cljs.core.cst$kw$read,cljs.core.array_seq([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return (function (){var G__46976 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__46976);
})().toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args46977 = [];
var len__31462__auto___46986 = arguments.length;
var i__31463__auto___46987 = (0);
while(true){
if((i__31463__auto___46987 < len__31462__auto___46986)){
args46977.push((arguments[i__31463__auto___46987]));

var G__46988 = (i__31463__auto___46987 + (1));
i__31463__auto___46987 = G__46988;
continue;
} else {
}
break;
}

var G__46979 = args46977.length;
switch (G__46979) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46977.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
var G__46980 = prefix;
var G__46981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__46980,G__46981) : ajax.core.param_to_str.call(null,G__46980,G__46981));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
var G__46982 = prefix;
var G__46983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__46982,G__46983) : ajax.core.param_to_str.call(null,G__46982,G__46983));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
var G__46984 = prefix;
var G__46985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__46984,G__46985) : ajax.core.param_to_str.call(null,G__46984,G__46985));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args46990 = [];
var len__31462__auto___47001 = arguments.length;
var i__31463__auto___47002 = (0);
while(true){
if((i__31463__auto___47002 < len__31462__auto___47001)){
args46990.push((arguments[i__31463__auto___47002]));

var G__47003 = (i__31463__auto___47002 + (1));
i__31463__auto___47002 = G__47003;
continue;
} else {
}
break;
}

var G__46992 = args46990.length;
switch (G__46992) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46990.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__46993){
var vec__46994 = p__46993;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46994,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46994,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__46997){
var vec__46998 = p__46997;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46998,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46998,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;

ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47009){
var vec__47010 = p__47009;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47010,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47010,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.array_seq([cljs.core.seq(params)], 0))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args47013 = [];
var len__31462__auto___47016 = arguments.length;
var i__31463__auto___47017 = (0);
while(true){
if((i__31463__auto___47017 < len__31462__auto___47016)){
args47013.push((arguments[i__31463__auto___47017]));

var G__47018 = (i__31463__auto___47017 + (1));
i__31463__auto___47017 = G__47018;
continue;
} else {
}
break;
}

var G__47015 = args47013.length;
switch (G__47015) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47013.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31009__auto__,k__31010__auto__){
var self__ = this;
var this__31009__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__31009__auto____$1,k__31010__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31011__auto__,k47021,else__31012__auto__){
var self__ = this;
var this__31011__auto____$1 = this;
var G__47023 = (((k47021 instanceof cljs.core.Keyword))?k47021.fqn:null);
switch (G__47023) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47021,else__31012__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__47024){
var self__ = this;
var map__47025 = p__47024;
var map__47025__$1 = ((((!((map__47025 == null)))?((((map__47025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47025):map__47025);
var request = map__47025__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47025__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31023__auto__,writer__31024__auto__,opts__31025__auto__){
var self__ = this;
var this__31023__auto____$1 = this;
var pr_pair__31026__auto__ = ((function (this__31023__auto____$1){
return (function (keyval__31027__auto__){
return cljs.core.pr_sequential_writer(writer__31024__auto__,cljs.core.pr_writer,""," ","",opts__31025__auto__,keyval__31027__auto__);
});})(this__31023__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31024__auto__,pr_pair__31026__auto__,"#ajax.core.ProcessGet{",", ","}",opts__31025__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47020){
var self__ = this;
var G__47020__$1 = this;
return (new cljs.core.RecordIter((0),G__47020__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params_DASH_to_DASH_str], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31007__auto__){
var self__ = this;
var this__31007__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31003__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31013__auto__){
var self__ = this;
var this__31013__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31004__auto__){
var self__ = this;
var this__31004__auto____$1 = this;
var h__30822__auto__ = self__.__hash;
if(!((h__30822__auto__ == null))){
return h__30822__auto__;
} else {
var h__30822__auto____$1 = cljs.core.hash_imap(this__31004__auto____$1);
self__.__hash = h__30822__auto____$1;

return h__30822__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31005__auto__,other__31006__auto__){
var self__ = this;
var this__31005__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30375__auto__ = other__31006__auto__;
if(cljs.core.truth_(and__30375__auto__)){
var and__30375__auto____$1 = (this__31005__auto____$1.constructor === other__31006__auto__.constructor);
if(and__30375__auto____$1){
return cljs.core.equiv_map(this__31005__auto____$1,other__31006__auto__);
} else {
return and__30375__auto____$1;
}
} else {
return and__30375__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31018__auto__,k__31019__auto__){
var self__ = this;
var this__31018__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params_DASH_to_DASH_str,null], null), null),k__31019__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31018__auto____$1),self__.__meta),k__31019__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31019__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31016__auto__,k__31017__auto__,G__47020){
var self__ = this;
var this__31016__auto____$1 = this;
var pred__47027 = cljs.core.keyword_identical_QMARK_;
var expr__47028 = k__31017__auto__;
if(cljs.core.truth_((pred__47027.cljs$core$IFn$_invoke$arity$2 ? pred__47027.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params_DASH_to_DASH_str,expr__47028) : pred__47027.call(null,cljs.core.cst$kw$params_DASH_to_DASH_str,expr__47028)))){
return (new ajax.core.ProcessGet(G__47020,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31017__auto__,G__47020),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31021__auto__){
var self__ = this;
var this__31021__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31008__auto__,G__47020){
var self__ = this;
var this__31008__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__47020,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31014__auto__,entry__31015__auto__){
var self__ = this;
var this__31014__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31015__auto__)){
return cljs.core._assoc(this__31014__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31014__auto____$1,entry__31015__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params_DASH_to_DASH_str], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__31043__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__31043__auto__,writer__31044__auto__){
return cljs.core._write(writer__31044__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__47022){
return (new ajax.core.ProcessGet(cljs.core.cst$kw$params_DASH_to_DASH_str.cljs$core$IFn$_invoke$arity$1(G__47022),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47022,cljs.core.cst$kw$params_DASH_to_DASH_str),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31009__auto__,k__31010__auto__){
var self__ = this;
var this__31009__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__31009__auto____$1,k__31010__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31011__auto__,k47032,else__31012__auto__){
var self__ = this;
var this__31011__auto____$1 = this;
var G__47034 = k47032;
switch (G__47034) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47032,else__31012__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__47035){
var self__ = this;
var map__47036 = p__47035;
var map__47036__$1 = ((((!((map__47036 == null)))?((((map__47036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47036):map__47036);
var request = map__47036__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47036__$1,cljs.core.cst$kw$body);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47036__$1,cljs.core.cst$kw$params);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31023__auto__,writer__31024__auto__,opts__31025__auto__){
var self__ = this;
var this__31023__auto____$1 = this;
var pr_pair__31026__auto__ = ((function (this__31023__auto____$1){
return (function (keyval__31027__auto__){
return cljs.core.pr_sequential_writer(writer__31024__auto__,cljs.core.pr_writer,""," ","",opts__31025__auto__,keyval__31027__auto__);
});})(this__31023__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31024__auto__,pr_pair__31026__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__31025__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47031){
var self__ = this;
var G__47031__$1 = this;
return (new cljs.core.RecordIter((0),G__47031__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31007__auto__){
var self__ = this;
var this__31007__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31003__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31013__auto__){
var self__ = this;
var this__31013__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31004__auto__){
var self__ = this;
var this__31004__auto____$1 = this;
var h__30822__auto__ = self__.__hash;
if(!((h__30822__auto__ == null))){
return h__30822__auto__;
} else {
var h__30822__auto____$1 = cljs.core.hash_imap(this__31004__auto____$1);
self__.__hash = h__30822__auto____$1;

return h__30822__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31005__auto__,other__31006__auto__){
var self__ = this;
var this__31005__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30375__auto__ = other__31006__auto__;
if(cljs.core.truth_(and__30375__auto__)){
var and__30375__auto____$1 = (this__31005__auto____$1.constructor === other__31006__auto__.constructor);
if(and__30375__auto____$1){
return cljs.core.equiv_map(this__31005__auto____$1,other__31006__auto__);
} else {
return and__30375__auto____$1;
}
} else {
return and__30375__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31018__auto__,k__31019__auto__){
var self__ = this;
var this__31018__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__31019__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31018__auto____$1),self__.__meta),k__31019__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31019__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31016__auto__,k__31017__auto__,G__47031){
var self__ = this;
var this__31016__auto____$1 = this;
var pred__47038 = cljs.core.keyword_identical_QMARK_;
var expr__47039 = k__31017__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31017__auto__,G__47031),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31021__auto__){
var self__ = this;
var this__31021__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31008__auto__,G__47031){
var self__ = this;
var this__31008__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__47031,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31014__auto__,entry__31015__auto__){
var self__ = this;
var this__31014__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31015__auto__)){
return cljs.core._assoc(this__31014__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31014__auto____$1,entry__31015__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__31043__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__31043__auto__,writer__31044__auto__){
return cljs.core._write(writer__31044__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__47033){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__47033),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31009__auto__,k__31010__auto__){
var self__ = this;
var this__31009__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__31009__auto____$1,k__31010__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31011__auto__,k47043,else__31012__auto__){
var self__ = this;
var this__31011__auto____$1 = this;
var G__47045 = k47043;
switch (G__47045) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47043,else__31012__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__47046){
var self__ = this;
var map__47047 = p__47046;
var map__47047__$1 = ((((!((map__47047 == null)))?((((map__47047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47047):map__47047);
var request = map__47047__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__47049 = ajax.core.get_request_format(format);
var map__47049__$1 = ((((!((map__47049 == null)))?((((map__47049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47049):map__47049);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47049__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47049__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.core.apply_request_format(write,params):ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__30387__auto__ = headers;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.array_seq([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.core.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31023__auto__,writer__31024__auto__,opts__31025__auto__){
var self__ = this;
var this__31023__auto____$1 = this;
var pr_pair__31026__auto__ = ((function (this__31023__auto____$1){
return (function (keyval__31027__auto__){
return cljs.core.pr_sequential_writer(writer__31024__auto__,cljs.core.pr_writer,""," ","",opts__31025__auto__,keyval__31027__auto__);
});})(this__31023__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31024__auto__,pr_pair__31026__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__31025__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47042){
var self__ = this;
var G__47042__$1 = this;
return (new cljs.core.RecordIter((0),G__47042__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31007__auto__){
var self__ = this;
var this__31007__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31003__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31013__auto__){
var self__ = this;
var this__31013__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31004__auto__){
var self__ = this;
var this__31004__auto____$1 = this;
var h__30822__auto__ = self__.__hash;
if(!((h__30822__auto__ == null))){
return h__30822__auto__;
} else {
var h__30822__auto____$1 = cljs.core.hash_imap(this__31004__auto____$1);
self__.__hash = h__30822__auto____$1;

return h__30822__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31005__auto__,other__31006__auto__){
var self__ = this;
var this__31005__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30375__auto__ = other__31006__auto__;
if(cljs.core.truth_(and__30375__auto__)){
var and__30375__auto____$1 = (this__31005__auto____$1.constructor === other__31006__auto__.constructor);
if(and__30375__auto____$1){
return cljs.core.equiv_map(this__31005__auto____$1,other__31006__auto__);
} else {
return and__30375__auto____$1;
}
} else {
return and__30375__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31018__auto__,k__31019__auto__){
var self__ = this;
var this__31018__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__31019__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31018__auto____$1),self__.__meta),k__31019__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31019__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31016__auto__,k__31017__auto__,G__47042){
var self__ = this;
var this__31016__auto____$1 = this;
var pred__47051 = cljs.core.keyword_identical_QMARK_;
var expr__47052 = k__31017__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31017__auto__,G__47042),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31021__auto__){
var self__ = this;
var this__31021__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31008__auto__,G__47042){
var self__ = this;
var this__31008__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__47042,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31014__auto__,entry__31015__auto__){
var self__ = this;
var this__31014__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31015__auto__)){
return cljs.core._assoc(this__31014__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31015__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31014__auto____$1,entry__31015__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__31043__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__31043__auto__,writer__31044__auto__){
return cljs.core._write(writer__31044__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__47044){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__47044),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__47055){
var map__47058 = p__47055;
var map__47058__$1 = ((((!((map__47058 == null)))?((((map__47058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47058):map__47058);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47058__$1,cljs.core.cst$kw$type);
var or__30387__auto__ = type;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__30387__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args47060 = [];
var len__31462__auto___47063 = arguments.length;
var i__31463__auto___47064 = (0);
while(true){
if((i__31463__auto___47064 < len__31462__auto___47063)){
args47060.push((arguments[i__31463__auto___47064]));

var G__47065 = (i__31463__auto___47064 + (1));
i__31463__auto___47064 = G__47065;
continue;
} else {
}
break;
}

var G__47062 = args47060.length;
switch (G__47062) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47060.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type(request);
var mime_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.transit_write_fn(type,request),cljs.core.cst$kw$content_DASH_type,[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__30387__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read(reader,ajax.protocols._body(response));
if(cljs.core.truth_(cljs.core.cst$kw$raw.cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args47067 = [];
var len__31462__auto___47070 = arguments.length;
var i__31463__auto___47071 = (0);
while(true){
if((i__31463__auto___47071 < len__31462__auto___47070)){
args47067.push((arguments[i__31463__auto___47071]));

var G__47072 = (i__31463__auto___47071 + (1));
i__31463__auto___47071 = G__47072;
continue;
} else {
}
break;
}

var G__47069 = args47067.length;
switch (G__47069) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47067.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.core.transit_type(request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.transit_read_fn(request),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(ajax.core.params_to_str),cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args47074 = [];
var len__31462__auto___47077 = arguments.length;
var i__31463__auto___47078 = (0);
while(true){
if((i__31463__auto___47078 < len__31462__auto___47077)){
args47074.push((arguments[i__31463__auto___47078]));

var G__47079 = (i__31463__auto___47078 + (1));
i__31463__auto___47078 = G__47079;
continue;
} else {
}
break;
}

var G__47076 = args47074.length;
switch (G__47076) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47074.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__30375__auto__ = prefix;
if(cljs.core.truth_(and__30375__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__30375__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args47081 = [];
var len__31462__auto___47084 = arguments.length;
var i__31463__auto___47085 = (0);
while(true){
if((i__31463__auto___47085 < len__31462__auto___47084)){
args47081.push((arguments[i__31463__auto___47085]));

var G__47086 = (i__31463__auto___47085 + (1));
i__31463__auto___47085 = G__47086;
continue;
} else {
}
break;
}

var G__47083 = args47081.length;
switch (G__47083) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47081.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args47088 = [];
var len__31462__auto___47094 = arguments.length;
var i__31463__auto___47095 = (0);
while(true){
if((i__31463__auto___47095 < len__31462__auto___47094)){
args47088.push((arguments[i__31463__auto___47095]));

var G__47096 = (i__31463__auto___47095 + (1));
i__31463__auto___47095 = G__47096;
continue;
} else {
}
break;
}

var G__47090 = args47088.length;
switch (G__47090) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47088.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__47091){
var map__47092 = p__47091;
var map__47092__$1 = ((((!((map__47092 == null)))?((((map__47092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47092):map__47092);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092__$1,cljs.core.cst$kw$raw);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args47098 = [];
var len__31462__auto___47101 = arguments.length;
var i__31463__auto___47102 = (0);
while(true){
if((i__31463__auto___47102 < len__31462__auto___47101)){
args47098.push((arguments[i__31463__auto___47102]));

var G__47103 = (i__31463__auto___47102 + (1));
i__31463__auto___47102 = G__47103;
continue;
} else {
}
break;
}

var G__47100 = args47098.length;
switch (G__47100) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47098.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args47105 = [];
var len__31462__auto___47108 = arguments.length;
var i__31463__auto___47109 = (0);
while(true){
if((i__31463__auto___47109 < len__31462__auto___47108)){
args47105.push((arguments[i__31463__auto___47109]));

var G__47110 = (i__31463__auto___47109 + (1));
i__31463__auto___47109 = G__47110;
continue;
} else {
}
break;
}

var G__47107 = args47105.length;
switch (G__47107) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47105.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args47112 = [];
var len__31462__auto___47115 = arguments.length;
var i__31463__auto___47116 = (0);
while(true){
if((i__31463__auto___47116 < len__31462__auto___47115)){
args47112.push((arguments[i__31463__auto___47116]));

var G__47117 = (i__31463__auto___47116 + (1));
i__31463__auto___47116 = G__47117;
continue;
} else {
}
break;
}

var G__47114 = args47112.length;
switch (G__47114) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47112.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args47119 = [];
var len__31462__auto___47122 = arguments.length;
var i__31463__auto___47123 = (0);
while(true){
if((i__31463__auto___47123 < len__31462__auto___47122)){
args47119.push((arguments[i__31463__auto___47123]));

var G__47124 = (i__31463__auto___47123 + (1));
i__31463__auto___47123 = G__47124;
continue;
} else {
}
break;
}

var G__47121 = args47119.length;
switch (G__47121) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47119.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__47126){
var map__47129 = p__47126;
var map__47129__$1 = ((((!((map__47129 == null)))?((((map__47129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47129):map__47129);
var request = map__47129__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.core.get_content_type(response),request);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args47131 = [];
var len__31462__auto___47134 = arguments.length;
var i__31463__auto___47135 = (0);
while(true){
if((i__31463__auto___47135 < len__31462__auto___47134)){
args47131.push((arguments[i__31463__auto___47135]));

var G__47136 = (i__31463__auto___47135 + (1));
i__31463__auto___47135 = G__47136;
continue;
} else {
}
break;
}

var G__47133 = args47131.length;
switch (G__47133) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47131.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__47138){
var map__47141 = p__47138;
var map__47141__$1 = ((((!((map__47141 == null)))?((((map__47141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47141):map__47141);
var request = map__47141__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47141__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.array_seq([response_format], 0));
} else {
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args47143 = [];
var len__31462__auto___47146 = arguments.length;
var i__31463__auto___47147 = (0);
while(true){
if((i__31463__auto___47147 < len__31462__auto___47146)){
args47143.push((arguments[i__31463__auto___47147]));

var G__47148 = (i__31463__auto___47147 + (1));
i__31463__auto___47147 = G__47148;
continue;
} else {
}
break;
}

var G__47145 = args47143.length;
switch (G__47145) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47143.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__47150){
var map__47153 = p__47150;
var map__47153__$1 = ((((!((map__47153 == null)))?((((map__47153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47153):map__47153);
var opts = map__47153__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47153__$1,cljs.core.cst$kw$response_DASH_format);
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(response_format);
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args47155 = [];
var len__31462__auto___47158 = arguments.length;
var i__31463__auto___47159 = (0);
while(true){
if((i__31463__auto___47159 < len__31462__auto___47158)){
args47155.push((arguments[i__31463__auto___47159]));

var G__47160 = (i__31463__auto___47159 + (1));
i__31463__auto___47159 = G__47160;
continue;
} else {
}
break;
}

var G__47157 = args47155.length;
switch (G__47157) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47155.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__47162){
var map__47165 = p__47162;
var map__47165__$1 = ((((!((map__47165 == null)))?((((map__47165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47165):map__47165);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47165__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.core.throw_error("No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = (function (){var G__47167 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47167) : cljs.core.atom.call(null,G__47167));
})();
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format(request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.core.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__47168_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__30387__auto__ = p1__47168_SHARP_;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_interceptors) : cljs.core.deref.call(null,ajax.core.default_interceptors));
}
})(),cljs.core.array_seq([ajax.core.request_interceptors], 0));
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__47169){
var map__47172 = p__47169;
var map__47172__$1 = ((((!((map__47172 == null)))?((((map__47172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47172):map__47172);
var request = map__47172__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172__$1,cljs.core.cst$kw$interceptors);
var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__30387__auto__ = cljs.core.cst$kw$api.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return ajax.core.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request(ajax.core.normalize_request(request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__47175 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__47175) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "text":
return ajax.core.text_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),ajax$core$keyword_response_format_element(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__47180 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__47180) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "text":
return (ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null));

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47182_SHARP_){
return ajax.core.keyword_response_format_element(p1__47182_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element(format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args47183 = [];
var len__31462__auto___47200 = arguments.length;
var i__31463__auto___47201 = (0);
while(true){
if((i__31463__auto___47201 < len__31462__auto___47200)){
args47183.push((arguments[i__31463__auto___47201]));

var G__47202 = (i__31463__auto___47201 + (1));
i__31463__auto___47201 = G__47202;
continue;
} else {
}
break;
}

var G__47185 = args47183.length;
switch (G__47185) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47183.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__47186,p__47187){
var map__47188 = p__47186;
var map__47188__$1 = ((((!((map__47188 == null)))?((((map__47188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47188):map__47188);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,cljs.core.cst$kw$finally);
var vec__47189 = p__47187;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47189,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47189,(1),null);
var temp__4655__auto___47204 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___47204)){
var h_47205 = temp__4655__auto___47204;
(h_47205.cljs$core$IFn$_invoke$arity$1 ? h_47205.cljs$core$IFn$_invoke$arity$1(result) : h_47205.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__47193){
var map__47194 = p__47193;
var map__47194__$1 = ((((!((map__47194 == null)))?((((map__47194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47194):map__47194);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47194__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47194__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47194__$1,cljs.core.cst$kw$finally);
return ((function (map__47194,map__47194__$1,handler,error_handler,finally$){
return (function (p__47196){
var vec__47197 = p__47196;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47197,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47197,(1),null);
var temp__4655__auto___47206 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___47206)){
var h_47207 = temp__4655__auto___47206;
(h_47207.cljs$core$IFn$_invoke$arity$1 ? h_47207.cljs$core$IFn$_invoke$arity$1(result) : h_47207.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__47194,map__47194__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;

ajax.core.transform_opts = (function ajax$core$transform_opts(p__47208){
var map__47211 = p__47208;
var map__47211__$1 = ((((!((map__47211 == null)))?((((map__47211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47211):map__47211);
var opts = map__47211__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47211__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47211__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47211__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47211__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47211__$1,cljs.core.cst$kw$body);

var needs_format = ((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"));
var rf = (cljs.core.truth_((function (){var or__30387__auto__ = format;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.array_seq([cljs.core.cst$kw$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47215 = arguments.length;
var i__31463__auto___47216 = (0);
while(true){
if((i__31463__auto___47216 < len__31462__auto___47215)){
args__31469__auto__.push((arguments[i__31463__auto___47216]));

var G__47217 = (i__31463__auto___47216 + (1));
i__31463__auto___47216 = G__47217;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq47213){
var G__47214 = cljs.core.first(seq47213);
var seq47213__$1 = cljs.core.next(seq47213);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__47214,seq47213__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47220 = arguments.length;
var i__31463__auto___47221 = (0);
while(true){
if((i__31463__auto___47221 < len__31462__auto___47220)){
args__31469__auto__.push((arguments[i__31463__auto___47221]));

var G__47222 = (i__31463__auto___47221 + (1));
i__31463__auto___47221 = G__47222;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq47218){
var G__47219 = cljs.core.first(seq47218);
var seq47218__$1 = cljs.core.next(seq47218);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__47219,seq47218__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47225 = arguments.length;
var i__31463__auto___47226 = (0);
while(true){
if((i__31463__auto___47226 < len__31462__auto___47225)){
args__31469__auto__.push((arguments[i__31463__auto___47226]));

var G__47227 = (i__31463__auto___47226 + (1));
i__31463__auto___47226 = G__47227;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq47223){
var G__47224 = cljs.core.first(seq47223);
var seq47223__$1 = cljs.core.next(seq47223);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__47224,seq47223__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47230 = arguments.length;
var i__31463__auto___47231 = (0);
while(true){
if((i__31463__auto___47231 < len__31462__auto___47230)){
args__31469__auto__.push((arguments[i__31463__auto___47231]));

var G__47232 = (i__31463__auto___47231 + (1));
i__31463__auto___47231 = G__47232;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq47228){
var G__47229 = cljs.core.first(seq47228);
var seq47228__$1 = cljs.core.next(seq47228);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__47229,seq47228__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47235 = arguments.length;
var i__31463__auto___47236 = (0);
while(true){
if((i__31463__auto___47236 < len__31462__auto___47235)){
args__31469__auto__.push((arguments[i__31463__auto___47236]));

var G__47237 = (i__31463__auto___47236 + (1));
i__31463__auto___47236 = G__47237;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq47233){
var G__47234 = cljs.core.first(seq47233);
var seq47233__$1 = cljs.core.next(seq47233);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__47234,seq47233__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47240 = arguments.length;
var i__31463__auto___47241 = (0);
while(true){
if((i__31463__auto___47241 < len__31462__auto___47240)){
args__31469__auto__.push((arguments[i__31463__auto___47241]));

var G__47242 = (i__31463__auto___47241 + (1));
i__31463__auto___47241 = G__47242;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq47238){
var G__47239 = cljs.core.first(seq47238);
var seq47238__$1 = cljs.core.next(seq47238);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__47239,seq47238__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47245 = arguments.length;
var i__31463__auto___47246 = (0);
while(true){
if((i__31463__auto___47246 < len__31462__auto___47245)){
args__31469__auto__.push((arguments[i__31463__auto___47246]));

var G__47247 = (i__31463__auto___47246 + (1));
i__31463__auto___47246 = G__47247;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq47243){
var G__47244 = cljs.core.first(seq47243);
var seq47243__$1 = cljs.core.next(seq47243);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__47244,seq47243__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__31469__auto__ = [];
var len__31462__auto___47250 = arguments.length;
var i__31463__auto___47251 = (0);
while(true){
if((i__31463__auto___47251 < len__31462__auto___47250)){
args__31469__auto__.push((arguments[i__31463__auto___47251]));

var G__47252 = (i__31463__auto___47251 + (1));
i__31463__auto___47251 = G__47252;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36526__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__36526__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__36526__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq47248){
var G__47249 = cljs.core.first(seq47248);
var seq47248__$1 = cljs.core.next(seq47248);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__47249,seq47248__$1);
});

