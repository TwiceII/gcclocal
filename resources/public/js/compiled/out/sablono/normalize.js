// Compiled by ClojureScript 1.9.89 {}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$__$1){
if((class$__$1 == null)){
return null;
} else {
if(cljs.core.list_QMARK_.call(null,class$__$1)){
if((cljs.core.first.call(null,class$__$1) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
return cljs.core.map.call(null,sablono.normalize.class_name,class$__$1);
}
} else {
if((class$__$1 instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
if(typeof class$__$1 === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
if((class$__$1 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name.call(null,class$__$1)], null);
} else {
if(((cljs.core.set_QMARK_.call(null,class$__$1)) || (cljs.core.sequential_QMARK_.call(null,class$__$1))) && (cljs.core.every_QMARK_.call(null,(function (p1__32714_SHARP_){
return ((p1__32714_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__32714_SHARP_ === 'string');
}),class$__$1))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$__$1);
} else {
if((cljs.core.set_QMARK_.call(null,class$__$1)) || (cljs.core.sequential_QMARK_.call(null,class$__$1))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$__$1);
} else {
return class$__$1;

}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__32716 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.call(null,G__32716,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),sablono.normalize.class$);
} else {
return G__32716;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__31659__auto__ = [];
var len__31652__auto___32719 = arguments.length;
var i__31653__auto___32720 = (0);
while(true){
if((i__31653__auto___32720 < len__31652__auto___32719)){
args__31659__auto__.push((arguments[i__31653__auto___32720]));

var G__32721 = (i__31653__auto___32720 + (1));
i__31653__auto___32720 = G__32721;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.call(null,sablono.normalize.attributes,maps);
var classes = cljs.core.map.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps__$1);
var classes__$1 = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,classes));
var G__32718 = cljs.core.apply.call(null,cljs.core.merge,maps__$1);
if(!(cljs.core.empty_QMARK_.call(null,classes__$1))){
return cljs.core.assoc.call(null,G__32718,new cljs.core.Keyword(null,"class","class",-2030961996),classes__$1);
} else {
return G__32718;
}
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq32717){
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32717));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__32727 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__32727,(0),null);
var names = cljs.core.nth.call(null,vec__32727,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first.call(null,cljs.core.map.call(null,sablono.normalize.strip_css,cljs.core.filter.call(null,((function (matches,vec__32727,tag_name,names){
return (function (p1__32722_SHARP_){
return cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__32722_SHARP_));
});})(matches,vec__32727,tag_name,names))
,names))),cljs.core.vec.call(null,cljs.core.map.call(null,sablono.normalize.strip_css,cljs.core.filter.call(null,((function (matches,vec__32727,tag_name,names){
return (function (p1__32723_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__32723_SHARP_));
});})(matches,vec__32727,tag_name,names))
,names)))], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,((typeof x === 'string')?(function (){var x__31411__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31411__auto__);
})():(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))?(function (){var x__31411__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31411__auto__);
})():(((cljs.core.list_QMARK_.call(null,x)) && ((x instanceof cljs.core.Symbol)))?(function (){var x__31411__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31411__auto__);
})():((cljs.core.list_QMARK_.call(null,x))?x:(((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,x))) && (!(typeof cljs.core.first.call(null,x) === 'string')) && (cljs.core.not.call(null,sablono.util.element_QMARK_.call(null,cljs.core.first.call(null,x)))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1))))?sablono$normalize$children.call(null,cljs.core.first.call(null,x)):((cljs.core.sequential_QMARK_.call(null,x))?x:(function (){var x__31411__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31411__auto__);
})()
)))))));
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__32730){
var vec__32737 = p__32730;
var seq__32738 = cljs.core.seq.call(null,vec__32737);
var first__32739 = cljs.core.first.call(null,seq__32738);
var seq__32738__$1 = cljs.core.next.call(null,seq__32738);
var tag = first__32739;
var content = seq__32738__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw cljs.core.ex_info.call(null,[cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
} else {
}

var vec__32740 = sablono.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__32740,(0),null);
var id = cljs.core.nth.call(null,vec__32740,(1),null);
var class$ = cljs.core.nth.call(null,vec__32740,(2),null);
var tag_attrs = sablono.normalize.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.call(null,tag_attrs,map_attrs),sablono.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes.call(null,tag_attrs),sablono.normalize.children.call(null,content)], null);
}
});

//# sourceMappingURL=normalize.js.map