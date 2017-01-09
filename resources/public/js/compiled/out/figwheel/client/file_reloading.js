// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30577__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30577__auto__){
return or__30577__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30577__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39967_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39967_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39972 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39973 = null;
var count__39974 = (0);
var i__39975 = (0);
while(true){
if((i__39975 < count__39974)){
var n = cljs.core._nth.call(null,chunk__39973,i__39975);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39976 = seq__39972;
var G__39977 = chunk__39973;
var G__39978 = count__39974;
var G__39979 = (i__39975 + (1));
seq__39972 = G__39976;
chunk__39973 = G__39977;
count__39974 = G__39978;
i__39975 = G__39979;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39972);
if(temp__4657__auto__){
var seq__39972__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39972__$1)){
var c__31388__auto__ = cljs.core.chunk_first.call(null,seq__39972__$1);
var G__39980 = cljs.core.chunk_rest.call(null,seq__39972__$1);
var G__39981 = c__31388__auto__;
var G__39982 = cljs.core.count.call(null,c__31388__auto__);
var G__39983 = (0);
seq__39972 = G__39980;
chunk__39973 = G__39981;
count__39974 = G__39982;
i__39975 = G__39983;
continue;
} else {
var n = cljs.core.first.call(null,seq__39972__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39984 = cljs.core.next.call(null,seq__39972__$1);
var G__39985 = null;
var G__39986 = (0);
var G__39987 = (0);
seq__39972 = G__39984;
chunk__39973 = G__39985;
count__39974 = G__39986;
i__39975 = G__39987;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40038_40049 = cljs.core.seq.call(null,deps);
var chunk__40039_40050 = null;
var count__40040_40051 = (0);
var i__40041_40052 = (0);
while(true){
if((i__40041_40052 < count__40040_40051)){
var dep_40053 = cljs.core._nth.call(null,chunk__40039_40050,i__40041_40052);
topo_sort_helper_STAR_.call(null,dep_40053,(depth + (1)),state);

var G__40054 = seq__40038_40049;
var G__40055 = chunk__40039_40050;
var G__40056 = count__40040_40051;
var G__40057 = (i__40041_40052 + (1));
seq__40038_40049 = G__40054;
chunk__40039_40050 = G__40055;
count__40040_40051 = G__40056;
i__40041_40052 = G__40057;
continue;
} else {
var temp__4657__auto___40058 = cljs.core.seq.call(null,seq__40038_40049);
if(temp__4657__auto___40058){
var seq__40038_40059__$1 = temp__4657__auto___40058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40038_40059__$1)){
var c__31388__auto___40060 = cljs.core.chunk_first.call(null,seq__40038_40059__$1);
var G__40061 = cljs.core.chunk_rest.call(null,seq__40038_40059__$1);
var G__40062 = c__31388__auto___40060;
var G__40063 = cljs.core.count.call(null,c__31388__auto___40060);
var G__40064 = (0);
seq__40038_40049 = G__40061;
chunk__40039_40050 = G__40062;
count__40040_40051 = G__40063;
i__40041_40052 = G__40064;
continue;
} else {
var dep_40065 = cljs.core.first.call(null,seq__40038_40059__$1);
topo_sort_helper_STAR_.call(null,dep_40065,(depth + (1)),state);

var G__40066 = cljs.core.next.call(null,seq__40038_40059__$1);
var G__40067 = null;
var G__40068 = (0);
var G__40069 = (0);
seq__40038_40049 = G__40066;
chunk__40039_40050 = G__40067;
count__40040_40051 = G__40068;
i__40041_40052 = G__40069;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40042){
var vec__40046 = p__40042;
var seq__40047 = cljs.core.seq.call(null,vec__40046);
var first__40048 = cljs.core.first.call(null,seq__40047);
var seq__40047__$1 = cljs.core.next.call(null,seq__40047);
var x = first__40048;
var xs = seq__40047__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40046,seq__40047,first__40048,seq__40047__$1,x,xs,get_deps__$1){
return (function (p1__39988_SHARP_){
return clojure.set.difference.call(null,p1__39988_SHARP_,x);
});})(vec__40046,seq__40047,first__40048,seq__40047__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40082 = cljs.core.seq.call(null,provides);
var chunk__40083 = null;
var count__40084 = (0);
var i__40085 = (0);
while(true){
if((i__40085 < count__40084)){
var prov = cljs.core._nth.call(null,chunk__40083,i__40085);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40086_40094 = cljs.core.seq.call(null,requires);
var chunk__40087_40095 = null;
var count__40088_40096 = (0);
var i__40089_40097 = (0);
while(true){
if((i__40089_40097 < count__40088_40096)){
var req_40098 = cljs.core._nth.call(null,chunk__40087_40095,i__40089_40097);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40098,prov);

var G__40099 = seq__40086_40094;
var G__40100 = chunk__40087_40095;
var G__40101 = count__40088_40096;
var G__40102 = (i__40089_40097 + (1));
seq__40086_40094 = G__40099;
chunk__40087_40095 = G__40100;
count__40088_40096 = G__40101;
i__40089_40097 = G__40102;
continue;
} else {
var temp__4657__auto___40103 = cljs.core.seq.call(null,seq__40086_40094);
if(temp__4657__auto___40103){
var seq__40086_40104__$1 = temp__4657__auto___40103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40086_40104__$1)){
var c__31388__auto___40105 = cljs.core.chunk_first.call(null,seq__40086_40104__$1);
var G__40106 = cljs.core.chunk_rest.call(null,seq__40086_40104__$1);
var G__40107 = c__31388__auto___40105;
var G__40108 = cljs.core.count.call(null,c__31388__auto___40105);
var G__40109 = (0);
seq__40086_40094 = G__40106;
chunk__40087_40095 = G__40107;
count__40088_40096 = G__40108;
i__40089_40097 = G__40109;
continue;
} else {
var req_40110 = cljs.core.first.call(null,seq__40086_40104__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40110,prov);

var G__40111 = cljs.core.next.call(null,seq__40086_40104__$1);
var G__40112 = null;
var G__40113 = (0);
var G__40114 = (0);
seq__40086_40094 = G__40111;
chunk__40087_40095 = G__40112;
count__40088_40096 = G__40113;
i__40089_40097 = G__40114;
continue;
}
} else {
}
}
break;
}

var G__40115 = seq__40082;
var G__40116 = chunk__40083;
var G__40117 = count__40084;
var G__40118 = (i__40085 + (1));
seq__40082 = G__40115;
chunk__40083 = G__40116;
count__40084 = G__40117;
i__40085 = G__40118;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40082);
if(temp__4657__auto__){
var seq__40082__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40082__$1)){
var c__31388__auto__ = cljs.core.chunk_first.call(null,seq__40082__$1);
var G__40119 = cljs.core.chunk_rest.call(null,seq__40082__$1);
var G__40120 = c__31388__auto__;
var G__40121 = cljs.core.count.call(null,c__31388__auto__);
var G__40122 = (0);
seq__40082 = G__40119;
chunk__40083 = G__40120;
count__40084 = G__40121;
i__40085 = G__40122;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40082__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40090_40123 = cljs.core.seq.call(null,requires);
var chunk__40091_40124 = null;
var count__40092_40125 = (0);
var i__40093_40126 = (0);
while(true){
if((i__40093_40126 < count__40092_40125)){
var req_40127 = cljs.core._nth.call(null,chunk__40091_40124,i__40093_40126);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40127,prov);

var G__40128 = seq__40090_40123;
var G__40129 = chunk__40091_40124;
var G__40130 = count__40092_40125;
var G__40131 = (i__40093_40126 + (1));
seq__40090_40123 = G__40128;
chunk__40091_40124 = G__40129;
count__40092_40125 = G__40130;
i__40093_40126 = G__40131;
continue;
} else {
var temp__4657__auto___40132__$1 = cljs.core.seq.call(null,seq__40090_40123);
if(temp__4657__auto___40132__$1){
var seq__40090_40133__$1 = temp__4657__auto___40132__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40090_40133__$1)){
var c__31388__auto___40134 = cljs.core.chunk_first.call(null,seq__40090_40133__$1);
var G__40135 = cljs.core.chunk_rest.call(null,seq__40090_40133__$1);
var G__40136 = c__31388__auto___40134;
var G__40137 = cljs.core.count.call(null,c__31388__auto___40134);
var G__40138 = (0);
seq__40090_40123 = G__40135;
chunk__40091_40124 = G__40136;
count__40092_40125 = G__40137;
i__40093_40126 = G__40138;
continue;
} else {
var req_40139 = cljs.core.first.call(null,seq__40090_40133__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40139,prov);

var G__40140 = cljs.core.next.call(null,seq__40090_40133__$1);
var G__40141 = null;
var G__40142 = (0);
var G__40143 = (0);
seq__40090_40123 = G__40140;
chunk__40091_40124 = G__40141;
count__40092_40125 = G__40142;
i__40093_40126 = G__40143;
continue;
}
} else {
}
}
break;
}

var G__40144 = cljs.core.next.call(null,seq__40082__$1);
var G__40145 = null;
var G__40146 = (0);
var G__40147 = (0);
seq__40082 = G__40144;
chunk__40083 = G__40145;
count__40084 = G__40146;
i__40085 = G__40147;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40152_40156 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40153_40157 = null;
var count__40154_40158 = (0);
var i__40155_40159 = (0);
while(true){
if((i__40155_40159 < count__40154_40158)){
var ns_40160 = cljs.core._nth.call(null,chunk__40153_40157,i__40155_40159);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40160);

var G__40161 = seq__40152_40156;
var G__40162 = chunk__40153_40157;
var G__40163 = count__40154_40158;
var G__40164 = (i__40155_40159 + (1));
seq__40152_40156 = G__40161;
chunk__40153_40157 = G__40162;
count__40154_40158 = G__40163;
i__40155_40159 = G__40164;
continue;
} else {
var temp__4657__auto___40165 = cljs.core.seq.call(null,seq__40152_40156);
if(temp__4657__auto___40165){
var seq__40152_40166__$1 = temp__4657__auto___40165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40152_40166__$1)){
var c__31388__auto___40167 = cljs.core.chunk_first.call(null,seq__40152_40166__$1);
var G__40168 = cljs.core.chunk_rest.call(null,seq__40152_40166__$1);
var G__40169 = c__31388__auto___40167;
var G__40170 = cljs.core.count.call(null,c__31388__auto___40167);
var G__40171 = (0);
seq__40152_40156 = G__40168;
chunk__40153_40157 = G__40169;
count__40154_40158 = G__40170;
i__40155_40159 = G__40171;
continue;
} else {
var ns_40172 = cljs.core.first.call(null,seq__40152_40166__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40172);

var G__40173 = cljs.core.next.call(null,seq__40152_40166__$1);
var G__40174 = null;
var G__40175 = (0);
var G__40176 = (0);
seq__40152_40156 = G__40173;
chunk__40153_40157 = G__40174;
count__40154_40158 = G__40175;
i__40155_40159 = G__40176;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30577__auto__ = goog.require__;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40177__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40178__i = 0, G__40178__a = new Array(arguments.length -  0);
while (G__40178__i < G__40178__a.length) {G__40178__a[G__40178__i] = arguments[G__40178__i + 0]; ++G__40178__i;}
  args = new cljs.core.IndexedSeq(G__40178__a,0);
} 
return G__40177__delegate.call(this,args);};
G__40177.cljs$lang$maxFixedArity = 0;
G__40177.cljs$lang$applyTo = (function (arglist__40179){
var args = cljs.core.seq(arglist__40179);
return G__40177__delegate(args);
});
G__40177.cljs$core$IFn$_invoke$arity$variadic = G__40177__delegate;
return G__40177;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40181 = cljs.core._EQ_;
var expr__40182 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40181.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40182))){
var path_parts = ((function (pred__40181,expr__40182){
return (function (p1__40180_SHARP_){
return clojure.string.split.call(null,p1__40180_SHARP_,/[\/\\]/);
});})(pred__40181,expr__40182))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40181,expr__40182){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40184){if((e40184 instanceof Error)){
var e = e40184;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40184;

}
}})());
});
;})(path_parts,sep,root,pred__40181,expr__40182))
} else {
if(cljs.core.truth_(pred__40181.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40182))){
return ((function (pred__40181,expr__40182){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40181,expr__40182){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40181,expr__40182))
);

return deferred.addErrback(((function (deferred,pred__40181,expr__40182){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40181,expr__40182))
);
});
;})(pred__40181,expr__40182))
} else {
return ((function (pred__40181,expr__40182){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40181,expr__40182))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40185,callback){
var map__40188 = p__40185;
var map__40188__$1 = ((((!((map__40188 == null)))?((((map__40188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40188):map__40188);
var file_msg = map__40188__$1;
var request_url = cljs.core.get.call(null,map__40188__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40188,map__40188__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40188,map__40188__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_40212){
var state_val_40213 = (state_40212[(1)]);
if((state_val_40213 === (7))){
var inst_40208 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
var statearr_40214_40234 = state_40212__$1;
(statearr_40214_40234[(2)] = inst_40208);

(statearr_40214_40234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (1))){
var state_40212__$1 = state_40212;
var statearr_40215_40235 = state_40212__$1;
(statearr_40215_40235[(2)] = null);

(statearr_40215_40235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (4))){
var inst_40192 = (state_40212[(7)]);
var inst_40192__$1 = (state_40212[(2)]);
var state_40212__$1 = (function (){var statearr_40216 = state_40212;
(statearr_40216[(7)] = inst_40192__$1);

return statearr_40216;
})();
if(cljs.core.truth_(inst_40192__$1)){
var statearr_40217_40236 = state_40212__$1;
(statearr_40217_40236[(1)] = (5));

} else {
var statearr_40218_40237 = state_40212__$1;
(statearr_40218_40237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (6))){
var state_40212__$1 = state_40212;
var statearr_40219_40238 = state_40212__$1;
(statearr_40219_40238[(2)] = null);

(statearr_40219_40238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (3))){
var inst_40210 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40212__$1,inst_40210);
} else {
if((state_val_40213 === (2))){
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40212__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40213 === (11))){
var inst_40204 = (state_40212[(2)]);
var state_40212__$1 = (function (){var statearr_40220 = state_40212;
(statearr_40220[(8)] = inst_40204);

return statearr_40220;
})();
var statearr_40221_40239 = state_40212__$1;
(statearr_40221_40239[(2)] = null);

(statearr_40221_40239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (9))){
var inst_40196 = (state_40212[(9)]);
var inst_40198 = (state_40212[(10)]);
var inst_40200 = inst_40198.call(null,inst_40196);
var state_40212__$1 = state_40212;
var statearr_40222_40240 = state_40212__$1;
(statearr_40222_40240[(2)] = inst_40200);

(statearr_40222_40240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (5))){
var inst_40192 = (state_40212[(7)]);
var inst_40194 = figwheel.client.file_reloading.blocking_load.call(null,inst_40192);
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40212__$1,(8),inst_40194);
} else {
if((state_val_40213 === (10))){
var inst_40196 = (state_40212[(9)]);
var inst_40202 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40196);
var state_40212__$1 = state_40212;
var statearr_40223_40241 = state_40212__$1;
(statearr_40223_40241[(2)] = inst_40202);

(statearr_40223_40241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (8))){
var inst_40192 = (state_40212[(7)]);
var inst_40198 = (state_40212[(10)]);
var inst_40196 = (state_40212[(2)]);
var inst_40197 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40198__$1 = cljs.core.get.call(null,inst_40197,inst_40192);
var state_40212__$1 = (function (){var statearr_40224 = state_40212;
(statearr_40224[(9)] = inst_40196);

(statearr_40224[(10)] = inst_40198__$1);

return statearr_40224;
})();
if(cljs.core.truth_(inst_40198__$1)){
var statearr_40225_40242 = state_40212__$1;
(statearr_40225_40242[(1)] = (9));

} else {
var statearr_40226_40243 = state_40212__$1;
(statearr_40226_40243[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35012__auto__ = null;
var figwheel$client$file_reloading$state_machine__35012__auto____0 = (function (){
var statearr_40230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40230[(0)] = figwheel$client$file_reloading$state_machine__35012__auto__);

(statearr_40230[(1)] = (1));

return statearr_40230;
});
var figwheel$client$file_reloading$state_machine__35012__auto____1 = (function (state_40212){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_40212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e40231){if((e40231 instanceof Object)){
var ex__35015__auto__ = e40231;
var statearr_40232_40244 = state_40212;
(statearr_40232_40244[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40245 = state_40212;
state_40212 = G__40245;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35012__auto__ = function(state_40212){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35012__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35012__auto____1.call(this,state_40212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35012__auto____0;
figwheel$client$file_reloading$state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35012__auto____1;
return figwheel$client$file_reloading$state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_40233 = f__35124__auto__.call(null);
(statearr_40233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_40233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40246,callback){
var map__40249 = p__40246;
var map__40249__$1 = ((((!((map__40249 == null)))?((((map__40249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40249):map__40249);
var file_msg = map__40249__$1;
var namespace = cljs.core.get.call(null,map__40249__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40249,map__40249__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40249,map__40249__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40251){
var map__40254 = p__40251;
var map__40254__$1 = ((((!((map__40254 == null)))?((((map__40254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40254):map__40254);
var file_msg = map__40254__$1;
var namespace = cljs.core.get.call(null,map__40254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30565__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__30565__auto__){
var or__30577__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
var or__30577__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30577__auto____$1)){
return or__30577__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30565__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40256,callback){
var map__40259 = p__40256;
var map__40259__$1 = ((((!((map__40259 == null)))?((((map__40259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40259):map__40259);
var file_msg = map__40259__$1;
var request_url = cljs.core.get.call(null,map__40259__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40259__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35123__auto___40363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___40363,out){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___40363,out){
return (function (state_40345){
var state_val_40346 = (state_40345[(1)]);
if((state_val_40346 === (1))){
var inst_40319 = cljs.core.seq.call(null,files);
var inst_40320 = cljs.core.first.call(null,inst_40319);
var inst_40321 = cljs.core.next.call(null,inst_40319);
var inst_40322 = files;
var state_40345__$1 = (function (){var statearr_40347 = state_40345;
(statearr_40347[(7)] = inst_40320);

(statearr_40347[(8)] = inst_40321);

(statearr_40347[(9)] = inst_40322);

return statearr_40347;
})();
var statearr_40348_40364 = state_40345__$1;
(statearr_40348_40364[(2)] = null);

(statearr_40348_40364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (2))){
var inst_40328 = (state_40345[(10)]);
var inst_40322 = (state_40345[(9)]);
var inst_40327 = cljs.core.seq.call(null,inst_40322);
var inst_40328__$1 = cljs.core.first.call(null,inst_40327);
var inst_40329 = cljs.core.next.call(null,inst_40327);
var inst_40330 = (inst_40328__$1 == null);
var inst_40331 = cljs.core.not.call(null,inst_40330);
var state_40345__$1 = (function (){var statearr_40349 = state_40345;
(statearr_40349[(10)] = inst_40328__$1);

(statearr_40349[(11)] = inst_40329);

return statearr_40349;
})();
if(inst_40331){
var statearr_40350_40365 = state_40345__$1;
(statearr_40350_40365[(1)] = (4));

} else {
var statearr_40351_40366 = state_40345__$1;
(statearr_40351_40366[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (3))){
var inst_40343 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40345__$1,inst_40343);
} else {
if((state_val_40346 === (4))){
var inst_40328 = (state_40345[(10)]);
var inst_40333 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40328);
var state_40345__$1 = state_40345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40345__$1,(7),inst_40333);
} else {
if((state_val_40346 === (5))){
var inst_40339 = cljs.core.async.close_BANG_.call(null,out);
var state_40345__$1 = state_40345;
var statearr_40352_40367 = state_40345__$1;
(statearr_40352_40367[(2)] = inst_40339);

(statearr_40352_40367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (6))){
var inst_40341 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
var statearr_40353_40368 = state_40345__$1;
(statearr_40353_40368[(2)] = inst_40341);

(statearr_40353_40368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (7))){
var inst_40329 = (state_40345[(11)]);
var inst_40335 = (state_40345[(2)]);
var inst_40336 = cljs.core.async.put_BANG_.call(null,out,inst_40335);
var inst_40322 = inst_40329;
var state_40345__$1 = (function (){var statearr_40354 = state_40345;
(statearr_40354[(9)] = inst_40322);

(statearr_40354[(12)] = inst_40336);

return statearr_40354;
})();
var statearr_40355_40369 = state_40345__$1;
(statearr_40355_40369[(2)] = null);

(statearr_40355_40369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__35123__auto___40363,out))
;
return ((function (switch__35011__auto__,c__35123__auto___40363,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto____0 = (function (){
var statearr_40359 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40359[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto__);

(statearr_40359[(1)] = (1));

return statearr_40359;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto____1 = (function (state_40345){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_40345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e40360){if((e40360 instanceof Object)){
var ex__35015__auto__ = e40360;
var statearr_40361_40370 = state_40345;
(statearr_40361_40370[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40371 = state_40345;
state_40345 = G__40371;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto__ = function(state_40345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto____1.call(this,state_40345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___40363,out))
})();
var state__35125__auto__ = (function (){var statearr_40362 = f__35124__auto__.call(null);
(statearr_40362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___40363);

return statearr_40362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___40363,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40372,opts){
var map__40376 = p__40372;
var map__40376__$1 = ((((!((map__40376 == null)))?((((map__40376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40376):map__40376);
var eval_body__$1 = cljs.core.get.call(null,map__40376__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40376__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30565__auto__ = eval_body__$1;
if(cljs.core.truth_(and__30565__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__30565__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40378){var e = e40378;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40379_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40379_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40388){
var vec__40389 = p__40388;
var k = cljs.core.nth.call(null,vec__40389,(0),null);
var v = cljs.core.nth.call(null,vec__40389,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40392){
var vec__40393 = p__40392;
var k = cljs.core.nth.call(null,vec__40393,(0),null);
var v = cljs.core.nth.call(null,vec__40393,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40399,p__40400){
var map__40647 = p__40399;
var map__40647__$1 = ((((!((map__40647 == null)))?((((map__40647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40647):map__40647);
var opts = map__40647__$1;
var before_jsload = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40648 = p__40400;
var map__40648__$1 = ((((!((map__40648 == null)))?((((map__40648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40648):map__40648);
var msg = map__40648__$1;
var files = cljs.core.get.call(null,map__40648__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40648__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40648__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40801){
var state_val_40802 = (state_40801[(1)]);
if((state_val_40802 === (7))){
var inst_40665 = (state_40801[(7)]);
var inst_40664 = (state_40801[(8)]);
var inst_40662 = (state_40801[(9)]);
var inst_40663 = (state_40801[(10)]);
var inst_40670 = cljs.core._nth.call(null,inst_40663,inst_40665);
var inst_40671 = figwheel.client.file_reloading.eval_body.call(null,inst_40670,opts);
var inst_40672 = (inst_40665 + (1));
var tmp40803 = inst_40664;
var tmp40804 = inst_40662;
var tmp40805 = inst_40663;
var inst_40662__$1 = tmp40804;
var inst_40663__$1 = tmp40805;
var inst_40664__$1 = tmp40803;
var inst_40665__$1 = inst_40672;
var state_40801__$1 = (function (){var statearr_40806 = state_40801;
(statearr_40806[(7)] = inst_40665__$1);

(statearr_40806[(8)] = inst_40664__$1);

(statearr_40806[(11)] = inst_40671);

(statearr_40806[(9)] = inst_40662__$1);

(statearr_40806[(10)] = inst_40663__$1);

return statearr_40806;
})();
var statearr_40807_40893 = state_40801__$1;
(statearr_40807_40893[(2)] = null);

(statearr_40807_40893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (20))){
var inst_40705 = (state_40801[(12)]);
var inst_40713 = figwheel.client.file_reloading.sort_files.call(null,inst_40705);
var state_40801__$1 = state_40801;
var statearr_40808_40894 = state_40801__$1;
(statearr_40808_40894[(2)] = inst_40713);

(statearr_40808_40894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (27))){
var state_40801__$1 = state_40801;
var statearr_40809_40895 = state_40801__$1;
(statearr_40809_40895[(2)] = null);

(statearr_40809_40895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (1))){
var inst_40654 = (state_40801[(13)]);
var inst_40651 = before_jsload.call(null,files);
var inst_40652 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40653 = (function (){return ((function (inst_40654,inst_40651,inst_40652,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40396_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40396_SHARP_);
});
;})(inst_40654,inst_40651,inst_40652,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40654__$1 = cljs.core.filter.call(null,inst_40653,files);
var inst_40655 = cljs.core.not_empty.call(null,inst_40654__$1);
var state_40801__$1 = (function (){var statearr_40810 = state_40801;
(statearr_40810[(14)] = inst_40651);

(statearr_40810[(13)] = inst_40654__$1);

(statearr_40810[(15)] = inst_40652);

return statearr_40810;
})();
if(cljs.core.truth_(inst_40655)){
var statearr_40811_40896 = state_40801__$1;
(statearr_40811_40896[(1)] = (2));

} else {
var statearr_40812_40897 = state_40801__$1;
(statearr_40812_40897[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (24))){
var state_40801__$1 = state_40801;
var statearr_40813_40898 = state_40801__$1;
(statearr_40813_40898[(2)] = null);

(statearr_40813_40898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (39))){
var inst_40755 = (state_40801[(16)]);
var state_40801__$1 = state_40801;
var statearr_40814_40899 = state_40801__$1;
(statearr_40814_40899[(2)] = inst_40755);

(statearr_40814_40899[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (46))){
var inst_40796 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
var statearr_40815_40900 = state_40801__$1;
(statearr_40815_40900[(2)] = inst_40796);

(statearr_40815_40900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (4))){
var inst_40699 = (state_40801[(2)]);
var inst_40700 = cljs.core.List.EMPTY;
var inst_40701 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40700);
var inst_40702 = (function (){return ((function (inst_40699,inst_40700,inst_40701,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40397_SHARP_){
var and__30565__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40397_SHARP_);
if(cljs.core.truth_(and__30565__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40397_SHARP_));
} else {
return and__30565__auto__;
}
});
;})(inst_40699,inst_40700,inst_40701,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40703 = cljs.core.filter.call(null,inst_40702,files);
var inst_40704 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40705 = cljs.core.concat.call(null,inst_40703,inst_40704);
var state_40801__$1 = (function (){var statearr_40816 = state_40801;
(statearr_40816[(17)] = inst_40699);

(statearr_40816[(18)] = inst_40701);

(statearr_40816[(12)] = inst_40705);

return statearr_40816;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40817_40901 = state_40801__$1;
(statearr_40817_40901[(1)] = (16));

} else {
var statearr_40818_40902 = state_40801__$1;
(statearr_40818_40902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (15))){
var inst_40689 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
var statearr_40819_40903 = state_40801__$1;
(statearr_40819_40903[(2)] = inst_40689);

(statearr_40819_40903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (21))){
var inst_40715 = (state_40801[(19)]);
var inst_40715__$1 = (state_40801[(2)]);
var inst_40716 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40715__$1);
var state_40801__$1 = (function (){var statearr_40820 = state_40801;
(statearr_40820[(19)] = inst_40715__$1);

return statearr_40820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40801__$1,(22),inst_40716);
} else {
if((state_val_40802 === (31))){
var inst_40799 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40801__$1,inst_40799);
} else {
if((state_val_40802 === (32))){
var inst_40755 = (state_40801[(16)]);
var inst_40760 = inst_40755.cljs$lang$protocol_mask$partition0$;
var inst_40761 = (inst_40760 & (64));
var inst_40762 = inst_40755.cljs$core$ISeq$;
var inst_40763 = (inst_40761) || (inst_40762);
var state_40801__$1 = state_40801;
if(cljs.core.truth_(inst_40763)){
var statearr_40821_40904 = state_40801__$1;
(statearr_40821_40904[(1)] = (35));

} else {
var statearr_40822_40905 = state_40801__$1;
(statearr_40822_40905[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (40))){
var inst_40776 = (state_40801[(20)]);
var inst_40775 = (state_40801[(2)]);
var inst_40776__$1 = cljs.core.get.call(null,inst_40775,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40777 = cljs.core.get.call(null,inst_40775,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40778 = cljs.core.not_empty.call(null,inst_40776__$1);
var state_40801__$1 = (function (){var statearr_40823 = state_40801;
(statearr_40823[(21)] = inst_40777);

(statearr_40823[(20)] = inst_40776__$1);

return statearr_40823;
})();
if(cljs.core.truth_(inst_40778)){
var statearr_40824_40906 = state_40801__$1;
(statearr_40824_40906[(1)] = (41));

} else {
var statearr_40825_40907 = state_40801__$1;
(statearr_40825_40907[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (33))){
var state_40801__$1 = state_40801;
var statearr_40826_40908 = state_40801__$1;
(statearr_40826_40908[(2)] = false);

(statearr_40826_40908[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (13))){
var inst_40675 = (state_40801[(22)]);
var inst_40679 = cljs.core.chunk_first.call(null,inst_40675);
var inst_40680 = cljs.core.chunk_rest.call(null,inst_40675);
var inst_40681 = cljs.core.count.call(null,inst_40679);
var inst_40662 = inst_40680;
var inst_40663 = inst_40679;
var inst_40664 = inst_40681;
var inst_40665 = (0);
var state_40801__$1 = (function (){var statearr_40827 = state_40801;
(statearr_40827[(7)] = inst_40665);

(statearr_40827[(8)] = inst_40664);

(statearr_40827[(9)] = inst_40662);

(statearr_40827[(10)] = inst_40663);

return statearr_40827;
})();
var statearr_40828_40909 = state_40801__$1;
(statearr_40828_40909[(2)] = null);

(statearr_40828_40909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (22))){
var inst_40719 = (state_40801[(23)]);
var inst_40715 = (state_40801[(19)]);
var inst_40723 = (state_40801[(24)]);
var inst_40718 = (state_40801[(25)]);
var inst_40718__$1 = (state_40801[(2)]);
var inst_40719__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40718__$1);
var inst_40720 = (function (){var all_files = inst_40715;
var res_SINGLEQUOTE_ = inst_40718__$1;
var res = inst_40719__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40719,inst_40715,inst_40723,inst_40718,inst_40718__$1,inst_40719__$1,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40398_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40398_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40719,inst_40715,inst_40723,inst_40718,inst_40718__$1,inst_40719__$1,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40721 = cljs.core.filter.call(null,inst_40720,inst_40718__$1);
var inst_40722 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40723__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40722);
var inst_40724 = cljs.core.not_empty.call(null,inst_40723__$1);
var state_40801__$1 = (function (){var statearr_40829 = state_40801;
(statearr_40829[(23)] = inst_40719__$1);

(statearr_40829[(24)] = inst_40723__$1);

(statearr_40829[(25)] = inst_40718__$1);

(statearr_40829[(26)] = inst_40721);

return statearr_40829;
})();
if(cljs.core.truth_(inst_40724)){
var statearr_40830_40910 = state_40801__$1;
(statearr_40830_40910[(1)] = (23));

} else {
var statearr_40831_40911 = state_40801__$1;
(statearr_40831_40911[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (36))){
var state_40801__$1 = state_40801;
var statearr_40832_40912 = state_40801__$1;
(statearr_40832_40912[(2)] = false);

(statearr_40832_40912[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (41))){
var inst_40776 = (state_40801[(20)]);
var inst_40780 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40781 = cljs.core.map.call(null,inst_40780,inst_40776);
var inst_40782 = cljs.core.pr_str.call(null,inst_40781);
var inst_40783 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40782)].join('');
var inst_40784 = figwheel.client.utils.log.call(null,inst_40783);
var state_40801__$1 = state_40801;
var statearr_40833_40913 = state_40801__$1;
(statearr_40833_40913[(2)] = inst_40784);

(statearr_40833_40913[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (43))){
var inst_40777 = (state_40801[(21)]);
var inst_40787 = (state_40801[(2)]);
var inst_40788 = cljs.core.not_empty.call(null,inst_40777);
var state_40801__$1 = (function (){var statearr_40834 = state_40801;
(statearr_40834[(27)] = inst_40787);

return statearr_40834;
})();
if(cljs.core.truth_(inst_40788)){
var statearr_40835_40914 = state_40801__$1;
(statearr_40835_40914[(1)] = (44));

} else {
var statearr_40836_40915 = state_40801__$1;
(statearr_40836_40915[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (29))){
var inst_40719 = (state_40801[(23)]);
var inst_40755 = (state_40801[(16)]);
var inst_40715 = (state_40801[(19)]);
var inst_40723 = (state_40801[(24)]);
var inst_40718 = (state_40801[(25)]);
var inst_40721 = (state_40801[(26)]);
var inst_40751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40754 = (function (){var all_files = inst_40715;
var res_SINGLEQUOTE_ = inst_40718;
var res = inst_40719;
var files_not_loaded = inst_40721;
var dependencies_that_loaded = inst_40723;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40755,inst_40715,inst_40723,inst_40718,inst_40721,inst_40751,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40753){
var map__40837 = p__40753;
var map__40837__$1 = ((((!((map__40837 == null)))?((((map__40837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40837):map__40837);
var namespace = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40755,inst_40715,inst_40723,inst_40718,inst_40721,inst_40751,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40755__$1 = cljs.core.group_by.call(null,inst_40754,inst_40721);
var inst_40757 = (inst_40755__$1 == null);
var inst_40758 = cljs.core.not.call(null,inst_40757);
var state_40801__$1 = (function (){var statearr_40839 = state_40801;
(statearr_40839[(16)] = inst_40755__$1);

(statearr_40839[(28)] = inst_40751);

return statearr_40839;
})();
if(inst_40758){
var statearr_40840_40916 = state_40801__$1;
(statearr_40840_40916[(1)] = (32));

} else {
var statearr_40841_40917 = state_40801__$1;
(statearr_40841_40917[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (44))){
var inst_40777 = (state_40801[(21)]);
var inst_40790 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40777);
var inst_40791 = cljs.core.pr_str.call(null,inst_40790);
var inst_40792 = [cljs.core.str("not required: "),cljs.core.str(inst_40791)].join('');
var inst_40793 = figwheel.client.utils.log.call(null,inst_40792);
var state_40801__$1 = state_40801;
var statearr_40842_40918 = state_40801__$1;
(statearr_40842_40918[(2)] = inst_40793);

(statearr_40842_40918[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (6))){
var inst_40696 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
var statearr_40843_40919 = state_40801__$1;
(statearr_40843_40919[(2)] = inst_40696);

(statearr_40843_40919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (28))){
var inst_40721 = (state_40801[(26)]);
var inst_40748 = (state_40801[(2)]);
var inst_40749 = cljs.core.not_empty.call(null,inst_40721);
var state_40801__$1 = (function (){var statearr_40844 = state_40801;
(statearr_40844[(29)] = inst_40748);

return statearr_40844;
})();
if(cljs.core.truth_(inst_40749)){
var statearr_40845_40920 = state_40801__$1;
(statearr_40845_40920[(1)] = (29));

} else {
var statearr_40846_40921 = state_40801__$1;
(statearr_40846_40921[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (25))){
var inst_40719 = (state_40801[(23)]);
var inst_40735 = (state_40801[(2)]);
var inst_40736 = cljs.core.not_empty.call(null,inst_40719);
var state_40801__$1 = (function (){var statearr_40847 = state_40801;
(statearr_40847[(30)] = inst_40735);

return statearr_40847;
})();
if(cljs.core.truth_(inst_40736)){
var statearr_40848_40922 = state_40801__$1;
(statearr_40848_40922[(1)] = (26));

} else {
var statearr_40849_40923 = state_40801__$1;
(statearr_40849_40923[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (34))){
var inst_40770 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
if(cljs.core.truth_(inst_40770)){
var statearr_40850_40924 = state_40801__$1;
(statearr_40850_40924[(1)] = (38));

} else {
var statearr_40851_40925 = state_40801__$1;
(statearr_40851_40925[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (17))){
var state_40801__$1 = state_40801;
var statearr_40852_40926 = state_40801__$1;
(statearr_40852_40926[(2)] = recompile_dependents);

(statearr_40852_40926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (3))){
var state_40801__$1 = state_40801;
var statearr_40853_40927 = state_40801__$1;
(statearr_40853_40927[(2)] = null);

(statearr_40853_40927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (12))){
var inst_40692 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
var statearr_40854_40928 = state_40801__$1;
(statearr_40854_40928[(2)] = inst_40692);

(statearr_40854_40928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (2))){
var inst_40654 = (state_40801[(13)]);
var inst_40661 = cljs.core.seq.call(null,inst_40654);
var inst_40662 = inst_40661;
var inst_40663 = null;
var inst_40664 = (0);
var inst_40665 = (0);
var state_40801__$1 = (function (){var statearr_40855 = state_40801;
(statearr_40855[(7)] = inst_40665);

(statearr_40855[(8)] = inst_40664);

(statearr_40855[(9)] = inst_40662);

(statearr_40855[(10)] = inst_40663);

return statearr_40855;
})();
var statearr_40856_40929 = state_40801__$1;
(statearr_40856_40929[(2)] = null);

(statearr_40856_40929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (23))){
var inst_40719 = (state_40801[(23)]);
var inst_40715 = (state_40801[(19)]);
var inst_40723 = (state_40801[(24)]);
var inst_40718 = (state_40801[(25)]);
var inst_40721 = (state_40801[(26)]);
var inst_40726 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40728 = (function (){var all_files = inst_40715;
var res_SINGLEQUOTE_ = inst_40718;
var res = inst_40719;
var files_not_loaded = inst_40721;
var dependencies_that_loaded = inst_40723;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40715,inst_40723,inst_40718,inst_40721,inst_40726,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40727){
var map__40857 = p__40727;
var map__40857__$1 = ((((!((map__40857 == null)))?((((map__40857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40857):map__40857);
var request_url = cljs.core.get.call(null,map__40857__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40715,inst_40723,inst_40718,inst_40721,inst_40726,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40729 = cljs.core.reverse.call(null,inst_40723);
var inst_40730 = cljs.core.map.call(null,inst_40728,inst_40729);
var inst_40731 = cljs.core.pr_str.call(null,inst_40730);
var inst_40732 = figwheel.client.utils.log.call(null,inst_40731);
var state_40801__$1 = (function (){var statearr_40859 = state_40801;
(statearr_40859[(31)] = inst_40726);

return statearr_40859;
})();
var statearr_40860_40930 = state_40801__$1;
(statearr_40860_40930[(2)] = inst_40732);

(statearr_40860_40930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (35))){
var state_40801__$1 = state_40801;
var statearr_40861_40931 = state_40801__$1;
(statearr_40861_40931[(2)] = true);

(statearr_40861_40931[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (19))){
var inst_40705 = (state_40801[(12)]);
var inst_40711 = figwheel.client.file_reloading.expand_files.call(null,inst_40705);
var state_40801__$1 = state_40801;
var statearr_40862_40932 = state_40801__$1;
(statearr_40862_40932[(2)] = inst_40711);

(statearr_40862_40932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (11))){
var state_40801__$1 = state_40801;
var statearr_40863_40933 = state_40801__$1;
(statearr_40863_40933[(2)] = null);

(statearr_40863_40933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (9))){
var inst_40694 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
var statearr_40864_40934 = state_40801__$1;
(statearr_40864_40934[(2)] = inst_40694);

(statearr_40864_40934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (5))){
var inst_40665 = (state_40801[(7)]);
var inst_40664 = (state_40801[(8)]);
var inst_40667 = (inst_40665 < inst_40664);
var inst_40668 = inst_40667;
var state_40801__$1 = state_40801;
if(cljs.core.truth_(inst_40668)){
var statearr_40865_40935 = state_40801__$1;
(statearr_40865_40935[(1)] = (7));

} else {
var statearr_40866_40936 = state_40801__$1;
(statearr_40866_40936[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (14))){
var inst_40675 = (state_40801[(22)]);
var inst_40684 = cljs.core.first.call(null,inst_40675);
var inst_40685 = figwheel.client.file_reloading.eval_body.call(null,inst_40684,opts);
var inst_40686 = cljs.core.next.call(null,inst_40675);
var inst_40662 = inst_40686;
var inst_40663 = null;
var inst_40664 = (0);
var inst_40665 = (0);
var state_40801__$1 = (function (){var statearr_40867 = state_40801;
(statearr_40867[(32)] = inst_40685);

(statearr_40867[(7)] = inst_40665);

(statearr_40867[(8)] = inst_40664);

(statearr_40867[(9)] = inst_40662);

(statearr_40867[(10)] = inst_40663);

return statearr_40867;
})();
var statearr_40868_40937 = state_40801__$1;
(statearr_40868_40937[(2)] = null);

(statearr_40868_40937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (45))){
var state_40801__$1 = state_40801;
var statearr_40869_40938 = state_40801__$1;
(statearr_40869_40938[(2)] = null);

(statearr_40869_40938[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (26))){
var inst_40719 = (state_40801[(23)]);
var inst_40715 = (state_40801[(19)]);
var inst_40723 = (state_40801[(24)]);
var inst_40718 = (state_40801[(25)]);
var inst_40721 = (state_40801[(26)]);
var inst_40738 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40740 = (function (){var all_files = inst_40715;
var res_SINGLEQUOTE_ = inst_40718;
var res = inst_40719;
var files_not_loaded = inst_40721;
var dependencies_that_loaded = inst_40723;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40715,inst_40723,inst_40718,inst_40721,inst_40738,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40739){
var map__40870 = p__40739;
var map__40870__$1 = ((((!((map__40870 == null)))?((((map__40870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40870):map__40870);
var namespace = cljs.core.get.call(null,map__40870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40870__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40715,inst_40723,inst_40718,inst_40721,inst_40738,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40741 = cljs.core.map.call(null,inst_40740,inst_40719);
var inst_40742 = cljs.core.pr_str.call(null,inst_40741);
var inst_40743 = figwheel.client.utils.log.call(null,inst_40742);
var inst_40744 = (function (){var all_files = inst_40715;
var res_SINGLEQUOTE_ = inst_40718;
var res = inst_40719;
var files_not_loaded = inst_40721;
var dependencies_that_loaded = inst_40723;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40715,inst_40723,inst_40718,inst_40721,inst_40738,inst_40740,inst_40741,inst_40742,inst_40743,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40719,inst_40715,inst_40723,inst_40718,inst_40721,inst_40738,inst_40740,inst_40741,inst_40742,inst_40743,state_val_40802,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40745 = setTimeout(inst_40744,(10));
var state_40801__$1 = (function (){var statearr_40872 = state_40801;
(statearr_40872[(33)] = inst_40738);

(statearr_40872[(34)] = inst_40743);

return statearr_40872;
})();
var statearr_40873_40939 = state_40801__$1;
(statearr_40873_40939[(2)] = inst_40745);

(statearr_40873_40939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (16))){
var state_40801__$1 = state_40801;
var statearr_40874_40940 = state_40801__$1;
(statearr_40874_40940[(2)] = reload_dependents);

(statearr_40874_40940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (38))){
var inst_40755 = (state_40801[(16)]);
var inst_40772 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40755);
var state_40801__$1 = state_40801;
var statearr_40875_40941 = state_40801__$1;
(statearr_40875_40941[(2)] = inst_40772);

(statearr_40875_40941[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (30))){
var state_40801__$1 = state_40801;
var statearr_40876_40942 = state_40801__$1;
(statearr_40876_40942[(2)] = null);

(statearr_40876_40942[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (10))){
var inst_40675 = (state_40801[(22)]);
var inst_40677 = cljs.core.chunked_seq_QMARK_.call(null,inst_40675);
var state_40801__$1 = state_40801;
if(inst_40677){
var statearr_40877_40943 = state_40801__$1;
(statearr_40877_40943[(1)] = (13));

} else {
var statearr_40878_40944 = state_40801__$1;
(statearr_40878_40944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (18))){
var inst_40709 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
if(cljs.core.truth_(inst_40709)){
var statearr_40879_40945 = state_40801__$1;
(statearr_40879_40945[(1)] = (19));

} else {
var statearr_40880_40946 = state_40801__$1;
(statearr_40880_40946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (42))){
var state_40801__$1 = state_40801;
var statearr_40881_40947 = state_40801__$1;
(statearr_40881_40947[(2)] = null);

(statearr_40881_40947[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (37))){
var inst_40767 = (state_40801[(2)]);
var state_40801__$1 = state_40801;
var statearr_40882_40948 = state_40801__$1;
(statearr_40882_40948[(2)] = inst_40767);

(statearr_40882_40948[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40802 === (8))){
var inst_40675 = (state_40801[(22)]);
var inst_40662 = (state_40801[(9)]);
var inst_40675__$1 = cljs.core.seq.call(null,inst_40662);
var state_40801__$1 = (function (){var statearr_40883 = state_40801;
(statearr_40883[(22)] = inst_40675__$1);

return statearr_40883;
})();
if(inst_40675__$1){
var statearr_40884_40949 = state_40801__$1;
(statearr_40884_40949[(1)] = (10));

} else {
var statearr_40885_40950 = state_40801__$1;
(statearr_40885_40950[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35011__auto__,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto____0 = (function (){
var statearr_40889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40889[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto__);

(statearr_40889[(1)] = (1));

return statearr_40889;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto____1 = (function (state_40801){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_40801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e40890){if((e40890 instanceof Object)){
var ex__35015__auto__ = e40890;
var statearr_40891_40951 = state_40801;
(statearr_40891_40951[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40952 = state_40801;
state_40801 = G__40952;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto__ = function(state_40801){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto____1.call(this,state_40801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35125__auto__ = (function (){var statearr_40892 = f__35124__auto__.call(null);
(statearr_40892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_40892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__,map__40647,map__40647__$1,opts,before_jsload,on_jsload,reload_dependents,map__40648,map__40648__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35123__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40955,link){
var map__40958 = p__40955;
var map__40958__$1 = ((((!((map__40958 == null)))?((((map__40958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40958):map__40958);
var file = cljs.core.get.call(null,map__40958__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40958,map__40958__$1,file){
return (function (p1__40953_SHARP_,p2__40954_SHARP_){
if(cljs.core._EQ_.call(null,p1__40953_SHARP_,p2__40954_SHARP_)){
return p1__40953_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40958,map__40958__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40964){
var map__40965 = p__40964;
var map__40965__$1 = ((((!((map__40965 == null)))?((((map__40965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40965):map__40965);
var match_length = cljs.core.get.call(null,map__40965__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40965__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40960_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40960_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args40967 = [];
var len__31652__auto___40970 = arguments.length;
var i__31653__auto___40971 = (0);
while(true){
if((i__31653__auto___40971 < len__31652__auto___40970)){
args40967.push((arguments[i__31653__auto___40971]));

var G__40972 = (i__31653__auto___40971 + (1));
i__31653__auto___40971 = G__40972;
continue;
} else {
}
break;
}

var G__40969 = args40967.length;
switch (G__40969) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40967.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40974_SHARP_,p2__40975_SHARP_){
return cljs.core.assoc.call(null,p1__40974_SHARP_,cljs.core.get.call(null,p2__40975_SHARP_,key),p2__40975_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40976){
var map__40979 = p__40976;
var map__40979__$1 = ((((!((map__40979 == null)))?((((map__40979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40979):map__40979);
var f_data = map__40979__$1;
var file = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40981,files_msg){
var map__40988 = p__40981;
var map__40988__$1 = ((((!((map__40988 == null)))?((((map__40988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40988):map__40988);
var opts = map__40988__$1;
var on_cssload = cljs.core.get.call(null,map__40988__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40990_40994 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40991_40995 = null;
var count__40992_40996 = (0);
var i__40993_40997 = (0);
while(true){
if((i__40993_40997 < count__40992_40996)){
var f_40998 = cljs.core._nth.call(null,chunk__40991_40995,i__40993_40997);
figwheel.client.file_reloading.reload_css_file.call(null,f_40998);

var G__40999 = seq__40990_40994;
var G__41000 = chunk__40991_40995;
var G__41001 = count__40992_40996;
var G__41002 = (i__40993_40997 + (1));
seq__40990_40994 = G__40999;
chunk__40991_40995 = G__41000;
count__40992_40996 = G__41001;
i__40993_40997 = G__41002;
continue;
} else {
var temp__4657__auto___41003 = cljs.core.seq.call(null,seq__40990_40994);
if(temp__4657__auto___41003){
var seq__40990_41004__$1 = temp__4657__auto___41003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40990_41004__$1)){
var c__31388__auto___41005 = cljs.core.chunk_first.call(null,seq__40990_41004__$1);
var G__41006 = cljs.core.chunk_rest.call(null,seq__40990_41004__$1);
var G__41007 = c__31388__auto___41005;
var G__41008 = cljs.core.count.call(null,c__31388__auto___41005);
var G__41009 = (0);
seq__40990_40994 = G__41006;
chunk__40991_40995 = G__41007;
count__40992_40996 = G__41008;
i__40993_40997 = G__41009;
continue;
} else {
var f_41010 = cljs.core.first.call(null,seq__40990_41004__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41010);

var G__41011 = cljs.core.next.call(null,seq__40990_41004__$1);
var G__41012 = null;
var G__41013 = (0);
var G__41014 = (0);
seq__40990_40994 = G__41011;
chunk__40991_40995 = G__41012;
count__40992_40996 = G__41013;
i__40993_40997 = G__41014;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40988,map__40988__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40988,map__40988__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map