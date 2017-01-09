// Compiled by ClojureScript 1.9.89 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.utils');
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error("Assert failed: (sequential? classes)"));
}

var init = rum.utils.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.utils.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.utils.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__33852_SHARP_,p2__33851_SHARP_){
return p2__33851_SHARP_.call(null,p1__33852_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.utils.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.utils.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.utils.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var class_properties = cljs.core.reduce.call(null,cljs.core.merge,rum.utils.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),classes));
return React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__33854_SHARP_,p2__33853_SHARP_){
return p2__33853_SHARP_.call(null,old_state,p1__33854_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__30577__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__33855_SHARP_){
return p1__33855_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__33860 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__33860,(0),null);
var next_state = cljs.core.nth.call(null,vec__33860,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__33856_SHARP_){
return p1__33856_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.utils.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.utils.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties)));
});
rum.core.schedule = (function (){var or__30577__auto__ = (function (){var and__30565__auto__ = typeof window !== 'undefined';
if(and__30565__auto__){
var or__30577__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
var or__30577__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__30577__auto____$1)){
return or__30577__auto____$1;
} else {
var or__30577__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__30577__auto____$2)){
return or__30577__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__30565__auto__;
}
})();
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return ((function (or__30577__auto__){
return (function (p1__33863_SHARP_){
return setTimeout(p1__33863_SHARP_,(16));
});
;})(or__30577__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__33870 = cljs.core.seq.call(null,queue);
var chunk__33872 = null;
var count__33873 = (0);
var i__33874 = (0);
while(true){
if((i__33874 < count__33873)){
var comp = cljs.core._nth.call(null,chunk__33872,i__33874);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__33876 = seq__33870;
var G__33877 = chunk__33872;
var G__33878 = count__33873;
var G__33879 = (i__33874 + (1));
seq__33870 = G__33876;
chunk__33872 = G__33877;
count__33873 = G__33878;
i__33874 = G__33879;
continue;
} else {
var G__33880 = seq__33870;
var G__33881 = chunk__33872;
var G__33882 = count__33873;
var G__33883 = (i__33874 + (1));
seq__33870 = G__33880;
chunk__33872 = G__33881;
count__33873 = G__33882;
i__33874 = G__33883;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33870);
if(temp__4657__auto__){
var seq__33870__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33870__$1)){
var c__31388__auto__ = cljs.core.chunk_first.call(null,seq__33870__$1);
var G__33884 = cljs.core.chunk_rest.call(null,seq__33870__$1);
var G__33885 = c__31388__auto__;
var G__33886 = cljs.core.count.call(null,c__31388__auto__);
var G__33887 = (0);
seq__33870 = G__33884;
chunk__33872 = G__33885;
count__33873 = G__33886;
i__33874 = G__33887;
continue;
} else {
var comp = cljs.core.first.call(null,seq__33870__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__33888 = cljs.core.next.call(null,seq__33870__$1);
var G__33889 = null;
var G__33890 = (0);
var G__33891 = (0);
seq__33870 = G__33888;
chunk__33872 = G__33889;
count__33873 = G__33890;
i__33874 = G__33891;
continue;
} else {
var G__33892 = cljs.core.next.call(null,seq__33870__$1);
var G__33893 = null;
var G__33894 = (0);
var G__33895 = (0);
seq__33870 = G__33892;
chunk__33872 = G__33893;
count__33873 = G__33894;
i__33874 = G__33895;
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
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return ReactDOM.render(component,node);
});
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__31659__auto__ = [];
var len__31652__auto___33903 = arguments.length;
var i__31653__auto___33904 = (0);
while(true){
if((i__31653__auto___33904 < len__31652__auto___33903)){
args__31659__auto__.push((arguments[i__31653__auto___33904]));

var G__33905 = (i__31653__auto___33904 + (1));
i__31653__auto___33904 = G__33905;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((2) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((2)),(0),null)):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31660__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__33899){
var vec__33900 = p__33899;
var props = cljs.core.nth.call(null,vec__33900,(0),null);
var props__$1 = (function (){var or__30577__auto__ = props;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq33896){
var G__33897 = cljs.core.first.call(null,seq33896);
var seq33896__$1 = cljs.core.next.call(null,seq33896);
var G__33898 = cljs.core.first.call(null,seq33896__$1);
var seq33896__$2 = cljs.core.next.call(null,seq33896__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__33897,G__33898,seq33896__$2);
});

rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__31659__auto__ = [];
var len__31652__auto___33912 = arguments.length;
var i__31653__auto___33913 = (0);
while(true){
if((i__31653__auto___33913 < len__31652__auto___33912)){
args__31659__auto__.push((arguments[i__31653__auto___33913]));

var G__33914 = (i__31653__auto___33913 + (1));
i__31653__auto___33913 = G__33914;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((1) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((1)),(0),null)):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31660__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__33908){
var vec__33909 = p__33908;
var key = cljs.core.nth.call(null,vec__33909,(0),null);
var key__$1 = (function (){var or__30577__auto__ = key;
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__33909,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__33909,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__33909,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__33909,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__33909,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__33909,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq33906){
var G__33907 = cljs.core.first.call(null,seq33906);
var seq33906__$1 = cljs.core.next.call(null,seq33906);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__33907,seq33906__$1);
});

rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_33915 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__33916 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__33916,(0),null);
var next_state = cljs.core.nth.call(null,vec__33916,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__33919_33931 = cljs.core.seq.call(null,old_reactions);
var chunk__33920_33932 = null;
var count__33921_33933 = (0);
var i__33922_33934 = (0);
while(true){
if((i__33922_33934 < count__33921_33933)){
var ref_33935 = cljs.core._nth.call(null,chunk__33920_33932,i__33922_33934);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_33935)){
} else {
cljs.core.remove_watch.call(null,ref_33935,key);
}

var G__33936 = seq__33919_33931;
var G__33937 = chunk__33920_33932;
var G__33938 = count__33921_33933;
var G__33939 = (i__33922_33934 + (1));
seq__33919_33931 = G__33936;
chunk__33920_33932 = G__33937;
count__33921_33933 = G__33938;
i__33922_33934 = G__33939;
continue;
} else {
var temp__4657__auto___33940 = cljs.core.seq.call(null,seq__33919_33931);
if(temp__4657__auto___33940){
var seq__33919_33941__$1 = temp__4657__auto___33940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33919_33941__$1)){
var c__31388__auto___33942 = cljs.core.chunk_first.call(null,seq__33919_33941__$1);
var G__33943 = cljs.core.chunk_rest.call(null,seq__33919_33941__$1);
var G__33944 = c__31388__auto___33942;
var G__33945 = cljs.core.count.call(null,c__31388__auto___33942);
var G__33946 = (0);
seq__33919_33931 = G__33943;
chunk__33920_33932 = G__33944;
count__33921_33933 = G__33945;
i__33922_33934 = G__33946;
continue;
} else {
var ref_33947 = cljs.core.first.call(null,seq__33919_33941__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_33947)){
} else {
cljs.core.remove_watch.call(null,ref_33947,key);
}

var G__33948 = cljs.core.next.call(null,seq__33919_33941__$1);
var G__33949 = null;
var G__33950 = (0);
var G__33951 = (0);
seq__33919_33931 = G__33948;
chunk__33920_33932 = G__33949;
count__33921_33933 = G__33950;
i__33922_33934 = G__33951;
continue;
}
} else {
}
}
break;
}

var seq__33923_33952 = cljs.core.seq.call(null,new_reactions);
var chunk__33924_33953 = null;
var count__33925_33954 = (0);
var i__33926_33955 = (0);
while(true){
if((i__33926_33955 < count__33925_33954)){
var ref_33956 = cljs.core._nth.call(null,chunk__33924_33953,i__33926_33955);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_33956)){
} else {
cljs.core.add_watch.call(null,ref_33956,key,((function (seq__33923_33952,chunk__33924_33953,count__33925_33954,i__33926_33955,ref_33956,comp,old_reactions,vec__33916,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33915){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__33923_33952,chunk__33924_33953,count__33925_33954,i__33926_33955,ref_33956,comp,old_reactions,vec__33916,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33915))
);
}

var G__33957 = seq__33923_33952;
var G__33958 = chunk__33924_33953;
var G__33959 = count__33925_33954;
var G__33960 = (i__33926_33955 + (1));
seq__33923_33952 = G__33957;
chunk__33924_33953 = G__33958;
count__33925_33954 = G__33959;
i__33926_33955 = G__33960;
continue;
} else {
var temp__4657__auto___33961 = cljs.core.seq.call(null,seq__33923_33952);
if(temp__4657__auto___33961){
var seq__33923_33962__$1 = temp__4657__auto___33961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33923_33962__$1)){
var c__31388__auto___33963 = cljs.core.chunk_first.call(null,seq__33923_33962__$1);
var G__33964 = cljs.core.chunk_rest.call(null,seq__33923_33962__$1);
var G__33965 = c__31388__auto___33963;
var G__33966 = cljs.core.count.call(null,c__31388__auto___33963);
var G__33967 = (0);
seq__33923_33952 = G__33964;
chunk__33924_33953 = G__33965;
count__33925_33954 = G__33966;
i__33926_33955 = G__33967;
continue;
} else {
var ref_33968 = cljs.core.first.call(null,seq__33923_33962__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_33968)){
} else {
cljs.core.add_watch.call(null,ref_33968,key,((function (seq__33923_33952,chunk__33924_33953,count__33925_33954,i__33926_33955,ref_33968,seq__33923_33962__$1,temp__4657__auto___33961,comp,old_reactions,vec__33916,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33915){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__33923_33952,chunk__33924_33953,count__33925_33954,i__33926_33955,ref_33968,seq__33923_33962__$1,temp__4657__auto___33961,comp,old_reactions,vec__33916,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33915))
);
}

var G__33969 = cljs.core.next.call(null,seq__33923_33962__$1);
var G__33970 = null;
var G__33971 = (0);
var G__33972 = (0);
seq__33923_33952 = G__33969;
chunk__33924_33953 = G__33970;
count__33925_33954 = G__33971;
i__33926_33955 = G__33972;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_33915;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_33973 = rum.core.reactive_key.call(null,state);
var seq__33927_33974 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__33928_33975 = null;
var count__33929_33976 = (0);
var i__33930_33977 = (0);
while(true){
if((i__33930_33977 < count__33929_33976)){
var ref_33978 = cljs.core._nth.call(null,chunk__33928_33975,i__33930_33977);
cljs.core.remove_watch.call(null,ref_33978,key_33973);

var G__33979 = seq__33927_33974;
var G__33980 = chunk__33928_33975;
var G__33981 = count__33929_33976;
var G__33982 = (i__33930_33977 + (1));
seq__33927_33974 = G__33979;
chunk__33928_33975 = G__33980;
count__33929_33976 = G__33981;
i__33930_33977 = G__33982;
continue;
} else {
var temp__4657__auto___33983 = cljs.core.seq.call(null,seq__33927_33974);
if(temp__4657__auto___33983){
var seq__33927_33984__$1 = temp__4657__auto___33983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33927_33984__$1)){
var c__31388__auto___33985 = cljs.core.chunk_first.call(null,seq__33927_33984__$1);
var G__33986 = cljs.core.chunk_rest.call(null,seq__33927_33984__$1);
var G__33987 = c__31388__auto___33985;
var G__33988 = cljs.core.count.call(null,c__31388__auto___33985);
var G__33989 = (0);
seq__33927_33974 = G__33986;
chunk__33928_33975 = G__33987;
count__33929_33976 = G__33988;
i__33930_33977 = G__33989;
continue;
} else {
var ref_33990 = cljs.core.first.call(null,seq__33927_33984__$1);
cljs.core.remove_watch.call(null,ref_33990,key_33973);

var G__33991 = cljs.core.next.call(null,seq__33927_33984__$1);
var G__33992 = null;
var G__33993 = (0);
var G__33994 = (0);
seq__33927_33974 = G__33991;
chunk__33928_33975 = G__33992;
count__33929_33976 = G__33993;
i__33930_33977 = G__33994;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,(function (){var x__31411__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__31411__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31411__auto____$1);
})(),x__31411__auto__);
})(),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,(function (){var x__31411__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__31411__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31411__auto____$1);
})(),x__31411__auto__);
})());

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__31183__auto__,writer__31184__auto__,opt__31185__auto__){
return cljs.core._write.call(null,writer__31184__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__33995_SHARP_){
return cljs.core.get_in.call(null,p1__33995_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__33996_SHARP_,p2__33997_SHARP_){
return cljs.core.assoc_in.call(null,p1__33996_SHARP_,path,p2__33997_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
return ref.setter.call(null,where,focus__$1);
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__33998_SHARP_){
if(((!((p1__33998_SHARP_ == null)))?((((p1__33998_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__33998_SHARP_.cljs$core$IDeref$))?true:(((!p1__33998_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__33998_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__33998_SHARP_))){
return cljs.core.deref.call(null,p1__33998_SHARP_);
} else {
return p1__33998_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__34001 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__34001,(0),null);
var next_state = cljs.core.nth.call(null,vec__34001,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__34004_34020 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__34006_34021 = null;
var count__34007_34022 = (0);
var i__34008_34023 = (0);
while(true){
if((i__34008_34023 < count__34007_34022)){
var arg_34024 = cljs.core._nth.call(null,chunk__34006_34021,i__34008_34023);
if(((!((arg_34024 == null)))?((((arg_34024.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_34024.cljs$core$IWatchable$))?true:(((!arg_34024.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34024):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34024))){
cljs.core.add_watch.call(null,arg_34024,rum.core.cursored_key.call(null,state),((function (seq__34004_34020,chunk__34006_34021,count__34007_34022,i__34008_34023,arg_34024){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__34004_34020,chunk__34006_34021,count__34007_34022,i__34008_34023,arg_34024))
);

var G__34025 = seq__34004_34020;
var G__34026 = chunk__34006_34021;
var G__34027 = count__34007_34022;
var G__34028 = (i__34008_34023 + (1));
seq__34004_34020 = G__34025;
chunk__34006_34021 = G__34026;
count__34007_34022 = G__34027;
i__34008_34023 = G__34028;
continue;
} else {
var G__34029 = seq__34004_34020;
var G__34030 = chunk__34006_34021;
var G__34031 = count__34007_34022;
var G__34032 = (i__34008_34023 + (1));
seq__34004_34020 = G__34029;
chunk__34006_34021 = G__34030;
count__34007_34022 = G__34031;
i__34008_34023 = G__34032;
continue;
}
} else {
var temp__4657__auto___34033 = cljs.core.seq.call(null,seq__34004_34020);
if(temp__4657__auto___34033){
var seq__34004_34034__$1 = temp__4657__auto___34033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34004_34034__$1)){
var c__31388__auto___34035 = cljs.core.chunk_first.call(null,seq__34004_34034__$1);
var G__34036 = cljs.core.chunk_rest.call(null,seq__34004_34034__$1);
var G__34037 = c__31388__auto___34035;
var G__34038 = cljs.core.count.call(null,c__31388__auto___34035);
var G__34039 = (0);
seq__34004_34020 = G__34036;
chunk__34006_34021 = G__34037;
count__34007_34022 = G__34038;
i__34008_34023 = G__34039;
continue;
} else {
var arg_34040 = cljs.core.first.call(null,seq__34004_34034__$1);
if(((!((arg_34040 == null)))?((((arg_34040.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_34040.cljs$core$IWatchable$))?true:(((!arg_34040.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34040):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34040))){
cljs.core.add_watch.call(null,arg_34040,rum.core.cursored_key.call(null,state),((function (seq__34004_34020,chunk__34006_34021,count__34007_34022,i__34008_34023,arg_34040,seq__34004_34034__$1,temp__4657__auto___34033){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__34004_34020,chunk__34006_34021,count__34007_34022,i__34008_34023,arg_34040,seq__34004_34034__$1,temp__4657__auto___34033))
);

var G__34041 = cljs.core.next.call(null,seq__34004_34034__$1);
var G__34042 = null;
var G__34043 = (0);
var G__34044 = (0);
seq__34004_34020 = G__34041;
chunk__34006_34021 = G__34042;
count__34007_34022 = G__34043;
i__34008_34023 = G__34044;
continue;
} else {
var G__34045 = cljs.core.next.call(null,seq__34004_34034__$1);
var G__34046 = null;
var G__34047 = (0);
var G__34048 = (0);
seq__34004_34020 = G__34045;
chunk__34006_34021 = G__34046;
count__34007_34022 = G__34047;
i__34008_34023 = G__34048;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__34012_34049 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__34014_34050 = null;
var count__34015_34051 = (0);
var i__34016_34052 = (0);
while(true){
if((i__34016_34052 < count__34015_34051)){
var arg_34053 = cljs.core._nth.call(null,chunk__34014_34050,i__34016_34052);
if(((!((arg_34053 == null)))?((((arg_34053.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_34053.cljs$core$IWatchable$))?true:(((!arg_34053.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34053):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34053))){
cljs.core.remove_watch.call(null,arg_34053,rum.core.cursored_key.call(null,state));

var G__34054 = seq__34012_34049;
var G__34055 = chunk__34014_34050;
var G__34056 = count__34015_34051;
var G__34057 = (i__34016_34052 + (1));
seq__34012_34049 = G__34054;
chunk__34014_34050 = G__34055;
count__34015_34051 = G__34056;
i__34016_34052 = G__34057;
continue;
} else {
var G__34058 = seq__34012_34049;
var G__34059 = chunk__34014_34050;
var G__34060 = count__34015_34051;
var G__34061 = (i__34016_34052 + (1));
seq__34012_34049 = G__34058;
chunk__34014_34050 = G__34059;
count__34015_34051 = G__34060;
i__34016_34052 = G__34061;
continue;
}
} else {
var temp__4657__auto___34062 = cljs.core.seq.call(null,seq__34012_34049);
if(temp__4657__auto___34062){
var seq__34012_34063__$1 = temp__4657__auto___34062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34012_34063__$1)){
var c__31388__auto___34064 = cljs.core.chunk_first.call(null,seq__34012_34063__$1);
var G__34065 = cljs.core.chunk_rest.call(null,seq__34012_34063__$1);
var G__34066 = c__31388__auto___34064;
var G__34067 = cljs.core.count.call(null,c__31388__auto___34064);
var G__34068 = (0);
seq__34012_34049 = G__34065;
chunk__34014_34050 = G__34066;
count__34015_34051 = G__34067;
i__34016_34052 = G__34068;
continue;
} else {
var arg_34069 = cljs.core.first.call(null,seq__34012_34063__$1);
if(((!((arg_34069 == null)))?((((arg_34069.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_34069.cljs$core$IWatchable$))?true:(((!arg_34069.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34069):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_34069))){
cljs.core.remove_watch.call(null,arg_34069,rum.core.cursored_key.call(null,state));

var G__34070 = cljs.core.next.call(null,seq__34012_34063__$1);
var G__34071 = null;
var G__34072 = (0);
var G__34073 = (0);
seq__34012_34049 = G__34070;
chunk__34014_34050 = G__34071;
count__34015_34051 = G__34072;
i__34016_34052 = G__34073;
continue;
} else {
var G__34074 = cljs.core.next.call(null,seq__34012_34063__$1);
var G__34075 = null;
var G__34076 = (0);
var G__34077 = (0);
seq__34012_34049 = G__34074;
chunk__34014_34050 = G__34075;
count__34015_34051 = G__34076;
i__34016_34052 = G__34077;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=core.js.map