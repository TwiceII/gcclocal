// Compiled by ClojureScript 1.9.89 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__31897_31901 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__31898_31902 = null;
var count__31899_31903 = (0);
var i__31900_31904 = (0);
while(true){
if((i__31900_31904 < count__31899_31903)){
var k_31905 = cljs.core._nth.call(null,chunk__31898_31902,i__31900_31904);
var v_31906 = (b[k_31905]);
(a[k_31905] = v_31906);

var G__31907 = seq__31897_31901;
var G__31908 = chunk__31898_31902;
var G__31909 = count__31899_31903;
var G__31910 = (i__31900_31904 + (1));
seq__31897_31901 = G__31907;
chunk__31898_31902 = G__31908;
count__31899_31903 = G__31909;
i__31900_31904 = G__31910;
continue;
} else {
var temp__4657__auto___31911 = cljs.core.seq.call(null,seq__31897_31901);
if(temp__4657__auto___31911){
var seq__31897_31912__$1 = temp__4657__auto___31911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31897_31912__$1)){
var c__31388__auto___31913 = cljs.core.chunk_first.call(null,seq__31897_31912__$1);
var G__31914 = cljs.core.chunk_rest.call(null,seq__31897_31912__$1);
var G__31915 = c__31388__auto___31913;
var G__31916 = cljs.core.count.call(null,c__31388__auto___31913);
var G__31917 = (0);
seq__31897_31901 = G__31914;
chunk__31898_31902 = G__31915;
count__31899_31903 = G__31916;
i__31900_31904 = G__31917;
continue;
} else {
var k_31918 = cljs.core.first.call(null,seq__31897_31912__$1);
var v_31919 = (b[k_31918]);
(a[k_31918] = v_31919);

var G__31920 = cljs.core.next.call(null,seq__31897_31912__$1);
var G__31921 = null;
var G__31922 = (0);
var G__31923 = (0);
seq__31897_31901 = G__31920;
chunk__31898_31902 = G__31921;
count__31899_31903 = G__31922;
i__31900_31904 = G__31923;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args31924 = [];
var len__31652__auto___31927 = arguments.length;
var i__31653__auto___31928 = (0);
while(true){
if((i__31653__auto___31928 < len__31652__auto___31927)){
args31924.push((arguments[i__31653__auto___31928]));

var G__31929 = (i__31653__auto___31928 + (1));
i__31653__auto___31928 = G__31929;
continue;
} else {
}
break;
}

var G__31926 = args31924.length;
switch (G__31926) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31924.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__31931 = (i + (2));
var G__31932 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__31931;
ret = G__31932;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31933_31937 = cljs.core.seq.call(null,v);
var chunk__31934_31938 = null;
var count__31935_31939 = (0);
var i__31936_31940 = (0);
while(true){
if((i__31936_31940 < count__31935_31939)){
var x_31941 = cljs.core._nth.call(null,chunk__31934_31938,i__31936_31940);
ret.push(x_31941);

var G__31942 = seq__31933_31937;
var G__31943 = chunk__31934_31938;
var G__31944 = count__31935_31939;
var G__31945 = (i__31936_31940 + (1));
seq__31933_31937 = G__31942;
chunk__31934_31938 = G__31943;
count__31935_31939 = G__31944;
i__31936_31940 = G__31945;
continue;
} else {
var temp__4657__auto___31946 = cljs.core.seq.call(null,seq__31933_31937);
if(temp__4657__auto___31946){
var seq__31933_31947__$1 = temp__4657__auto___31946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31933_31947__$1)){
var c__31388__auto___31948 = cljs.core.chunk_first.call(null,seq__31933_31947__$1);
var G__31949 = cljs.core.chunk_rest.call(null,seq__31933_31947__$1);
var G__31950 = c__31388__auto___31948;
var G__31951 = cljs.core.count.call(null,c__31388__auto___31948);
var G__31952 = (0);
seq__31933_31937 = G__31949;
chunk__31934_31938 = G__31950;
count__31935_31939 = G__31951;
i__31936_31940 = G__31952;
continue;
} else {
var x_31953 = cljs.core.first.call(null,seq__31933_31947__$1);
ret.push(x_31953);

var G__31954 = cljs.core.next.call(null,seq__31933_31947__$1);
var G__31955 = null;
var G__31956 = (0);
var G__31957 = (0);
seq__31933_31937 = G__31954;
chunk__31934_31938 = G__31955;
count__31935_31939 = G__31956;
i__31936_31940 = G__31957;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31958_31962 = cljs.core.seq.call(null,v);
var chunk__31959_31963 = null;
var count__31960_31964 = (0);
var i__31961_31965 = (0);
while(true){
if((i__31961_31965 < count__31960_31964)){
var x_31966 = cljs.core._nth.call(null,chunk__31959_31963,i__31961_31965);
ret.push(x_31966);

var G__31967 = seq__31958_31962;
var G__31968 = chunk__31959_31963;
var G__31969 = count__31960_31964;
var G__31970 = (i__31961_31965 + (1));
seq__31958_31962 = G__31967;
chunk__31959_31963 = G__31968;
count__31960_31964 = G__31969;
i__31961_31965 = G__31970;
continue;
} else {
var temp__4657__auto___31971 = cljs.core.seq.call(null,seq__31958_31962);
if(temp__4657__auto___31971){
var seq__31958_31972__$1 = temp__4657__auto___31971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31958_31972__$1)){
var c__31388__auto___31973 = cljs.core.chunk_first.call(null,seq__31958_31972__$1);
var G__31974 = cljs.core.chunk_rest.call(null,seq__31958_31972__$1);
var G__31975 = c__31388__auto___31973;
var G__31976 = cljs.core.count.call(null,c__31388__auto___31973);
var G__31977 = (0);
seq__31958_31962 = G__31974;
chunk__31959_31963 = G__31975;
count__31960_31964 = G__31976;
i__31961_31965 = G__31977;
continue;
} else {
var x_31978 = cljs.core.first.call(null,seq__31958_31972__$1);
ret.push(x_31978);

var G__31979 = cljs.core.next.call(null,seq__31958_31972__$1);
var G__31980 = null;
var G__31981 = (0);
var G__31982 = (0);
seq__31958_31962 = G__31979;
chunk__31959_31963 = G__31980;
count__31960_31964 = G__31981;
i__31961_31965 = G__31982;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31983_31987 = cljs.core.seq.call(null,v);
var chunk__31984_31988 = null;
var count__31985_31989 = (0);
var i__31986_31990 = (0);
while(true){
if((i__31986_31990 < count__31985_31989)){
var x_31991 = cljs.core._nth.call(null,chunk__31984_31988,i__31986_31990);
ret.push(x_31991);

var G__31992 = seq__31983_31987;
var G__31993 = chunk__31984_31988;
var G__31994 = count__31985_31989;
var G__31995 = (i__31986_31990 + (1));
seq__31983_31987 = G__31992;
chunk__31984_31988 = G__31993;
count__31985_31989 = G__31994;
i__31986_31990 = G__31995;
continue;
} else {
var temp__4657__auto___31996 = cljs.core.seq.call(null,seq__31983_31987);
if(temp__4657__auto___31996){
var seq__31983_31997__$1 = temp__4657__auto___31996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31983_31997__$1)){
var c__31388__auto___31998 = cljs.core.chunk_first.call(null,seq__31983_31997__$1);
var G__31999 = cljs.core.chunk_rest.call(null,seq__31983_31997__$1);
var G__32000 = c__31388__auto___31998;
var G__32001 = cljs.core.count.call(null,c__31388__auto___31998);
var G__32002 = (0);
seq__31983_31987 = G__31999;
chunk__31984_31988 = G__32000;
count__31985_31989 = G__32001;
i__31986_31990 = G__32002;
continue;
} else {
var x_32003 = cljs.core.first.call(null,seq__31983_31997__$1);
ret.push(x_32003);

var G__32004 = cljs.core.next.call(null,seq__31983_31997__$1);
var G__32005 = null;
var G__32006 = (0);
var G__32007 = (0);
seq__31983_31987 = G__32004;
chunk__31984_31988 = G__32005;
count__31985_31989 = G__32006;
i__31986_31990 = G__32007;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args32008 = [];
var len__31652__auto___32023 = arguments.length;
var i__31653__auto___32024 = (0);
while(true){
if((i__31653__auto___32024 < len__31652__auto___32023)){
args32008.push((arguments[i__31653__auto___32024]));

var G__32025 = (i__31653__auto___32024 + (1));
i__31653__auto___32024 = G__32025;
continue;
} else {
}
break;
}

var G__32010 = args32008.length;
switch (G__32010) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32008.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__32011 = obj;
G__32011.push(kfn.call(null,k),vfn.call(null,v));

return G__32011;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x32012 = cljs.core.clone.call(null,handlers);
x32012.forEach = ((function (x32012,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__32013 = cljs.core.seq.call(null,coll);
var chunk__32014 = null;
var count__32015 = (0);
var i__32016 = (0);
while(true){
if((i__32016 < count__32015)){
var vec__32017 = cljs.core._nth.call(null,chunk__32014,i__32016);
var k = cljs.core.nth.call(null,vec__32017,(0),null);
var v = cljs.core.nth.call(null,vec__32017,(1),null);
f.call(null,v,k);

var G__32027 = seq__32013;
var G__32028 = chunk__32014;
var G__32029 = count__32015;
var G__32030 = (i__32016 + (1));
seq__32013 = G__32027;
chunk__32014 = G__32028;
count__32015 = G__32029;
i__32016 = G__32030;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32013);
if(temp__4657__auto__){
var seq__32013__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32013__$1)){
var c__31388__auto__ = cljs.core.chunk_first.call(null,seq__32013__$1);
var G__32031 = cljs.core.chunk_rest.call(null,seq__32013__$1);
var G__32032 = c__31388__auto__;
var G__32033 = cljs.core.count.call(null,c__31388__auto__);
var G__32034 = (0);
seq__32013 = G__32031;
chunk__32014 = G__32032;
count__32015 = G__32033;
i__32016 = G__32034;
continue;
} else {
var vec__32020 = cljs.core.first.call(null,seq__32013__$1);
var k = cljs.core.nth.call(null,vec__32020,(0),null);
var v = cljs.core.nth.call(null,vec__32020,(1),null);
f.call(null,v,k);

var G__32035 = cljs.core.next.call(null,seq__32013__$1);
var G__32036 = null;
var G__32037 = (0);
var G__32038 = (0);
seq__32013 = G__32035;
chunk__32014 = G__32036;
count__32015 = G__32037;
i__32016 = G__32038;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32012,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x32012;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args32039 = [];
var len__31652__auto___32045 = arguments.length;
var i__31653__auto___32046 = (0);
while(true){
if((i__31653__auto___32046 < len__31652__auto___32045)){
args32039.push((arguments[i__31653__auto___32046]));

var G__32047 = (i__31653__auto___32046 + (1));
i__31653__auto___32046 = G__32047;
continue;
} else {
}
break;
}

var G__32041 = args32039.length;
switch (G__32041) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32039.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit32042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit32042 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta32043){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta32043 = meta32043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit32042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32044,meta32043__$1){
var self__ = this;
var _32044__$1 = this;
return (new cognitect.transit.t_cognitect$transit32042(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta32043__$1));
});

cognitect.transit.t_cognitect$transit32042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32044){
var self__ = this;
var _32044__$1 = this;
return self__.meta32043;
});

cognitect.transit.t_cognitect$transit32042.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32042.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32042.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32042.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta32043","meta32043",-613682429,null)], null);
});

cognitect.transit.t_cognitect$transit32042.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit32042.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit32042";

cognitect.transit.t_cognitect$transit32042.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"cognitect.transit/t_cognitect$transit32042");
});

cognitect.transit.__GT_t_cognitect$transit32042 = (function cognitect$transit$__GT_t_cognitect$transit32042(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32043){
return (new cognitect.transit.t_cognitect$transit32042(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32043));
});

}

return (new cognitect.transit.t_cognitect$transit32042(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__30577__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map