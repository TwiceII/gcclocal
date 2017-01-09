// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.utils');
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var G__51038 = rum.core.state(comp);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51038) : cljs.core.deref.call(null,G__51038));
})());
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_(classes)){
} else {
throw (new Error("Assert failed: (sequential? classes)"));
}

var init = rum.utils.collect(cljs.core.cst$kw$init,classes);
var will_mount = rum.utils.collect(cljs.core.cst$kw$will_DASH_mount,classes);
var did_mount = rum.utils.collect(cljs.core.cst$kw$did_DASH_mount,classes);
var transfer_state = rum.utils.collect(cljs.core.cst$kw$transfer_DASH_state,classes);
var should_update = rum.utils.collect(cljs.core.cst$kw$should_DASH_update,classes);
var will_update = rum.utils.collect(cljs.core.cst$kw$will_DASH_update,classes);
var render = cljs.core.first(rum.utils.collect(cljs.core.cst$kw$render,classes));
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__51040_SHARP_,p2__51039_SHARP_){
return (p2__51039_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__51039_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__51040_SHARP_) : p2__51039_SHARP_.call(null,p1__51040_SHARP_));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.utils.collect(cljs.core.cst$kw$wrap_DASH_render,classes));
var did_update = rum.utils.collect(cljs.core.cst$kw$did_DASH_update,classes);
var will_unmount = rum.utils.collect(cljs.core.cst$kw$will_DASH_unmount,classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((props[":rum/initial-state"]),init,cljs.core.array_seq([props], 0));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.utils.collect(cljs.core.cst$kw$child_DASH_context,classes);
var class_properties = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.utils.collect(cljs.core.cst$kw$class_DASH_properties,classes));
var G__51070 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__51071 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51071) : cljs.core.deref.call(null,G__51071));
})();
var next_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$,cljs.core.cst$kw$rum_SLASH_id,cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state(next_props)], 0));
var next_state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__51042_SHARP_,p2__51041_SHARP_){
return (p2__51041_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__51041_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__51042_SHARP_) : p2__51041_SHARP_.call(null,old_state,p1__51042_SHARP_));
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_(next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__51072 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51072) : cljs.core.deref.call(null,G__51072));
})();
var new_state = (function (){var G__51073 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51073) : cljs.core.deref.call(null,G__51073));
})();
var or__30387__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__51043_SHARP_){
return (p1__51043_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__51043_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__51043_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__51074 = (function (){var G__51077 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__51077) : wrapped_render.call(null,G__51077));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51074,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51074,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = (function (){var G__51078 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51078) : cljs.core.deref.call(null,G__51078));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__51044_SHARP_){
return (p1__51044_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51044_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__51044_SHARP_.call(null,state));
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.utils.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$,cljs.core.cst$kw$rum_SLASH_id,rum.utils.next_id()], null),props__GT_state(props)], 0));
return {":rum/state": cljs.core.volatile_BANG_(state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties], 0)));
return React.createClass(G__51070);
});
rum.core.schedule = (function (){var or__30387__auto__ = (function (){var and__30375__auto__ = typeof window !== 'undefined';
if(and__30375__auto__){
var or__30387__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
var or__30387__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__30387__auto____$1)){
return or__30387__auto____$1;
} else {
var or__30387__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__30387__auto____$2)){
return or__30387__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__30375__auto__;
}
})();
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return ((function (or__30387__auto__){
return (function (p1__51079_SHARP_){
return setTimeout(p1__51079_SHARP_,(16));
});
;})(or__30387__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare((keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null,y)));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by(rum.core.compare_by(rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

var seq__51086 = cljs.core.seq(queue);
var chunk__51088 = null;
var count__51089 = (0);
var i__51090 = (0);
while(true){
if((i__51090 < count__51089)){
var comp = chunk__51088.cljs$core$IIndexed$_nth$arity$2(null,i__51090);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__51092 = seq__51086;
var G__51093 = chunk__51088;
var G__51094 = count__51089;
var G__51095 = (i__51090 + (1));
seq__51086 = G__51092;
chunk__51088 = G__51093;
count__51089 = G__51094;
i__51090 = G__51095;
continue;
} else {
var G__51096 = seq__51086;
var G__51097 = chunk__51088;
var G__51098 = count__51089;
var G__51099 = (i__51090 + (1));
seq__51086 = G__51096;
chunk__51088 = G__51097;
count__51089 = G__51098;
i__51090 = G__51099;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__51086);
if(temp__4657__auto__){
var seq__51086__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51086__$1)){
var c__31198__auto__ = cljs.core.chunk_first(seq__51086__$1);
var G__51100 = cljs.core.chunk_rest(seq__51086__$1);
var G__51101 = c__31198__auto__;
var G__51102 = cljs.core.count(c__31198__auto__);
var G__51103 = (0);
seq__51086 = G__51100;
chunk__51088 = G__51101;
count__51089 = G__51102;
i__51090 = G__51103;
continue;
} else {
var comp = cljs.core.first(seq__51086__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__51104 = cljs.core.next(seq__51086__$1);
var G__51105 = null;
var G__51106 = (0);
var G__51107 = (0);
seq__51086 = G__51104;
chunk__51088 = G__51105;
count__51089 = G__51106;
i__51090 = G__51107;
continue;
} else {
var G__51108 = cljs.core.next(seq__51086__$1);
var G__51109 = null;
var G__51110 = (0);
var G__51111 = (0);
seq__51086 = G__51108;
chunk__51088 = G__51109;
count__51089 = G__51110;
i__51090 = G__51111;
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
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return ReactDOM.render(component,node);
});
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_fn,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_fn,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__31469__auto__ = [];
var len__31462__auto___51119 = arguments.length;
var i__31463__auto___51120 = (0);
while(true){
if((i__31463__auto___51120 < len__31462__auto___51119)){
args__31469__auto__.push((arguments[i__31463__auto___51120]));

var G__51121 = (i__31463__auto___51120 + (1));
i__31463__auto___51120 = G__51121;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((2) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((2)),(0),null)):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31470__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__51115){
var vec__51116 = p__51115;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51116,(0),null);
var props__$1 = (function (){var or__30387__auto__ = props;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq51112){
var G__51113 = cljs.core.first(seq51112);
var seq51112__$1 = cljs.core.next(seq51112);
var G__51114 = cljs.core.first(seq51112__$1);
var seq51112__$2 = cljs.core.next(seq51112__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__51113,G__51114,seq51112__$2);
});

rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return cljs.core.cst$kw$rum_SLASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
var G__51125 = element;
var G__51126 = {"key": key};
var G__51127 = null;
return React.cloneElement(G__51125,G__51126,G__51127);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
var G__51131 = element;
var G__51132 = {"ref": ref};
var G__51133 = null;
return React.cloneElement(G__51131,G__51132,G__51133);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__31469__auto__ = [];
var len__31462__auto___51140 = arguments.length;
var i__31463__auto___51141 = (0);
while(true){
if((i__31463__auto___51141 < len__31462__auto___51140)){
args__31469__auto__.push((arguments[i__31463__auto___51141]));

var G__51142 = (i__31463__auto___51141 + (1));
i__31463__auto___51141 = G__51142;
continue;
} else {
}
break;
}

var argseq__31470__auto__ = ((((1) < args__31469__auto__.length))?(new cljs.core.IndexedSeq(args__31469__auto__.slice((1)),(0),null)):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31470__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__51136){
var vec__51137 = p__51136;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51137,(0),null);
var key__$1 = (function (){var or__30387__auto__ = key;
if(cljs.core.truth_(or__30387__auto__)){
return or__30387__auto__;
} else {
return cljs.core.cst$kw$rum_SLASH_local;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transfer_DASH_state,((function (key__$1,vec__51137,key){
return (function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,key__$1,(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(key__$1) : old.call(null,key__$1)));
});})(key__$1,vec__51137,key))
,cljs.core.cst$kw$will_DASH_mount,((function (key__$1,vec__51137,key){
return (function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key__$1,((function (local_state,component,key__$1,vec__51137,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component,key__$1,vec__51137,key))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key__$1,local_state);
});})(key__$1,vec__51137,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq51134){
var G__51135 = cljs.core.first(seq51134);
var seq51134__$1 = cljs.core.next(seq51134);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__51135,seq51134__$1);
});

rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.cst$kw$rum_SLASH_refs,cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_51143 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__51144 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51144,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51144,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = rum.core.reactive_key(state);
var seq__51147_51159 = cljs.core.seq(old_reactions);
var chunk__51148_51160 = null;
var count__51149_51161 = (0);
var i__51150_51162 = (0);
while(true){
if((i__51150_51162 < count__51149_51161)){
var ref_51163 = chunk__51148_51160.cljs$core$IIndexed$_nth$arity$2(null,i__51150_51162);
if(cljs.core.contains_QMARK_(new_reactions,ref_51163)){
} else {
cljs.core.remove_watch(ref_51163,key);
}

var G__51164 = seq__51147_51159;
var G__51165 = chunk__51148_51160;
var G__51166 = count__51149_51161;
var G__51167 = (i__51150_51162 + (1));
seq__51147_51159 = G__51164;
chunk__51148_51160 = G__51165;
count__51149_51161 = G__51166;
i__51150_51162 = G__51167;
continue;
} else {
var temp__4657__auto___51168 = cljs.core.seq(seq__51147_51159);
if(temp__4657__auto___51168){
var seq__51147_51169__$1 = temp__4657__auto___51168;
if(cljs.core.chunked_seq_QMARK_(seq__51147_51169__$1)){
var c__31198__auto___51170 = cljs.core.chunk_first(seq__51147_51169__$1);
var G__51171 = cljs.core.chunk_rest(seq__51147_51169__$1);
var G__51172 = c__31198__auto___51170;
var G__51173 = cljs.core.count(c__31198__auto___51170);
var G__51174 = (0);
seq__51147_51159 = G__51171;
chunk__51148_51160 = G__51172;
count__51149_51161 = G__51173;
i__51150_51162 = G__51174;
continue;
} else {
var ref_51175 = cljs.core.first(seq__51147_51169__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_51175)){
} else {
cljs.core.remove_watch(ref_51175,key);
}

var G__51176 = cljs.core.next(seq__51147_51169__$1);
var G__51177 = null;
var G__51178 = (0);
var G__51179 = (0);
seq__51147_51159 = G__51176;
chunk__51148_51160 = G__51177;
count__51149_51161 = G__51178;
i__51150_51162 = G__51179;
continue;
}
} else {
}
}
break;
}

var seq__51151_51180 = cljs.core.seq(new_reactions);
var chunk__51152_51181 = null;
var count__51153_51182 = (0);
var i__51154_51183 = (0);
while(true){
if((i__51154_51183 < count__51153_51182)){
var ref_51184 = chunk__51152_51181.cljs$core$IIndexed$_nth$arity$2(null,i__51154_51183);
if(cljs.core.contains_QMARK_(old_reactions,ref_51184)){
} else {
cljs.core.add_watch(ref_51184,key,((function (seq__51151_51180,chunk__51152_51181,count__51153_51182,i__51154_51183,ref_51184,comp,old_reactions,vec__51144,dom,next_state,new_reactions,key,_STAR_reactions_STAR_51143){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__51151_51180,chunk__51152_51181,count__51153_51182,i__51154_51183,ref_51184,comp,old_reactions,vec__51144,dom,next_state,new_reactions,key,_STAR_reactions_STAR_51143))
);
}

var G__51185 = seq__51151_51180;
var G__51186 = chunk__51152_51181;
var G__51187 = count__51153_51182;
var G__51188 = (i__51154_51183 + (1));
seq__51151_51180 = G__51185;
chunk__51152_51181 = G__51186;
count__51153_51182 = G__51187;
i__51154_51183 = G__51188;
continue;
} else {
var temp__4657__auto___51189 = cljs.core.seq(seq__51151_51180);
if(temp__4657__auto___51189){
var seq__51151_51190__$1 = temp__4657__auto___51189;
if(cljs.core.chunked_seq_QMARK_(seq__51151_51190__$1)){
var c__31198__auto___51191 = cljs.core.chunk_first(seq__51151_51190__$1);
var G__51192 = cljs.core.chunk_rest(seq__51151_51190__$1);
var G__51193 = c__31198__auto___51191;
var G__51194 = cljs.core.count(c__31198__auto___51191);
var G__51195 = (0);
seq__51151_51180 = G__51192;
chunk__51152_51181 = G__51193;
count__51153_51182 = G__51194;
i__51154_51183 = G__51195;
continue;
} else {
var ref_51196 = cljs.core.first(seq__51151_51190__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_51196)){
} else {
cljs.core.add_watch(ref_51196,key,((function (seq__51151_51180,chunk__51152_51181,count__51153_51182,i__51154_51183,ref_51196,seq__51151_51190__$1,temp__4657__auto___51189,comp,old_reactions,vec__51144,dom,next_state,new_reactions,key,_STAR_reactions_STAR_51143){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__51151_51180,chunk__51152_51181,count__51153_51182,i__51154_51183,ref_51196,seq__51151_51190__$1,temp__4657__auto___51189,comp,old_reactions,vec__51144,dom,next_state,new_reactions,key,_STAR_reactions_STAR_51143))
);
}

var G__51197 = cljs.core.next(seq__51151_51190__$1);
var G__51198 = null;
var G__51199 = (0);
var G__51200 = (0);
seq__51151_51180 = G__51197;
chunk__51152_51181 = G__51198;
count__51153_51182 = G__51199;
i__51154_51183 = G__51200;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_51143;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_51201 = rum.core.reactive_key(state);
var seq__51155_51202 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__51156_51203 = null;
var count__51157_51204 = (0);
var i__51158_51205 = (0);
while(true){
if((i__51158_51205 < count__51157_51204)){
var ref_51206 = chunk__51156_51203.cljs$core$IIndexed$_nth$arity$2(null,i__51158_51205);
cljs.core.remove_watch(ref_51206,key_51201);

var G__51207 = seq__51155_51202;
var G__51208 = chunk__51156_51203;
var G__51209 = count__51157_51204;
var G__51210 = (i__51158_51205 + (1));
seq__51155_51202 = G__51207;
chunk__51156_51203 = G__51208;
count__51157_51204 = G__51209;
i__51158_51205 = G__51210;
continue;
} else {
var temp__4657__auto___51211 = cljs.core.seq(seq__51155_51202);
if(temp__4657__auto___51211){
var seq__51155_51212__$1 = temp__4657__auto___51211;
if(cljs.core.chunked_seq_QMARK_(seq__51155_51212__$1)){
var c__31198__auto___51213 = cljs.core.chunk_first(seq__51155_51212__$1);
var G__51214 = cljs.core.chunk_rest(seq__51155_51212__$1);
var G__51215 = c__31198__auto___51213;
var G__51216 = cljs.core.count(c__31198__auto___51213);
var G__51217 = (0);
seq__51155_51202 = G__51214;
chunk__51156_51203 = G__51215;
count__51157_51204 = G__51216;
i__51158_51205 = G__51217;
continue;
} else {
var ref_51218 = cljs.core.first(seq__51155_51212__$1);
cljs.core.remove_watch(ref_51218,key_51201);

var G__51219 = cljs.core.next(seq__51155_51212__$1);
var G__51220 = null;
var G__51221 = (0);
var G__51222 = (0);
seq__51155_51202 = G__51219;
chunk__51156_51203 = G__51220;
count__51157_51204 = G__51221;
i__51158_51205 = G__51222;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$rum_SLASH_refs);
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
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
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__51223 = cljs.core._deref(self__.parent);
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__51223) : self__.getter.call(null,G__51223));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.parent,(function (){var x__31221__auto__ = this$__$1;
return cljs.core._conj((function (){var x__31221__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__31221__auto____$1);
})(),x__31221__auto__);
})(),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(oldp) : self__.getter.call(null,oldp));
var new$ = (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(newp) : self__.getter.call(null,newp));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : f.call(null,key,this$__$1,old,new$));
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
cljs.core.remove_watch(self__.parent,(function (){var x__31221__auto__ = this$__$1;
return cljs.core._conj((function (){var x__31221__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__31221__auto____$1);
})(),x__31221__auto__);
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__51224 = cljs.core._deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51224) : f.call(null,G__51224));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__51225 = cljs.core._deref(this$__$1);
var G__51226 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__51225,G__51226) : f.call(null,G__51225,G__51226));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__51227 = cljs.core._deref(this$__$1);
var G__51228 = a;
var G__51229 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__51227,G__51228,G__51229) : f.call(null,G__51227,G__51228,G__51229));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core._deref(this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(cljs.core._deref(this$__$1),writer,opts);

return cljs.core._write(writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$getter,cljs.core.cst$sym$setter], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__30993__auto__,writer__30994__auto__,opt__30995__auto__){
return cljs.core._write(writer__30994__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__51230_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__51230_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__51231_SHARP_,p2__51232_SHARP_){
return cljs.core.assoc_in(p1__51231_SHARP_,path,p2__51232_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter(focus,what);
return ref.setter.call(null,where,focus__$1);
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51233_SHARP_){
if(((!((p1__51233_SHARP_ == null)))?((((p1__51233_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__51233_SHARP_.cljs$core$IDeref$))?true:(((!p1__51233_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__51233_SHARP_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__51233_SHARP_))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__51233_SHARP_) : cljs.core.deref.call(null,p1__51233_SHARP_));
} else {
return p1__51233_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.cst$kw$rum_SLASH_om_DASH_args,cljs.core.cst$kw$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state)));
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var vec__51236 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51236,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51236,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum_SLASH_om_DASH_args,rum.core.deref_args(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var seq__51239_51255 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__51241_51256 = null;
var count__51242_51257 = (0);
var i__51243_51258 = (0);
while(true){
if((i__51243_51258 < count__51242_51257)){
var arg_51259 = chunk__51241_51256.cljs$core$IIndexed$_nth$arity$2(null,i__51243_51258);
if(((!((arg_51259 == null)))?((((arg_51259.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_51259.cljs$core$IWatchable$))?true:(((!arg_51259.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51259):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51259))){
cljs.core.add_watch(arg_51259,rum.core.cursored_key(state),((function (seq__51239_51255,chunk__51241_51256,count__51242_51257,i__51243_51258,arg_51259){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__51239_51255,chunk__51241_51256,count__51242_51257,i__51243_51258,arg_51259))
);

var G__51260 = seq__51239_51255;
var G__51261 = chunk__51241_51256;
var G__51262 = count__51242_51257;
var G__51263 = (i__51243_51258 + (1));
seq__51239_51255 = G__51260;
chunk__51241_51256 = G__51261;
count__51242_51257 = G__51262;
i__51243_51258 = G__51263;
continue;
} else {
var G__51264 = seq__51239_51255;
var G__51265 = chunk__51241_51256;
var G__51266 = count__51242_51257;
var G__51267 = (i__51243_51258 + (1));
seq__51239_51255 = G__51264;
chunk__51241_51256 = G__51265;
count__51242_51257 = G__51266;
i__51243_51258 = G__51267;
continue;
}
} else {
var temp__4657__auto___51268 = cljs.core.seq(seq__51239_51255);
if(temp__4657__auto___51268){
var seq__51239_51269__$1 = temp__4657__auto___51268;
if(cljs.core.chunked_seq_QMARK_(seq__51239_51269__$1)){
var c__31198__auto___51270 = cljs.core.chunk_first(seq__51239_51269__$1);
var G__51271 = cljs.core.chunk_rest(seq__51239_51269__$1);
var G__51272 = c__31198__auto___51270;
var G__51273 = cljs.core.count(c__31198__auto___51270);
var G__51274 = (0);
seq__51239_51255 = G__51271;
chunk__51241_51256 = G__51272;
count__51242_51257 = G__51273;
i__51243_51258 = G__51274;
continue;
} else {
var arg_51275 = cljs.core.first(seq__51239_51269__$1);
if(((!((arg_51275 == null)))?((((arg_51275.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_51275.cljs$core$IWatchable$))?true:(((!arg_51275.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51275):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51275))){
cljs.core.add_watch(arg_51275,rum.core.cursored_key(state),((function (seq__51239_51255,chunk__51241_51256,count__51242_51257,i__51243_51258,arg_51275,seq__51239_51269__$1,temp__4657__auto___51268){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__51239_51255,chunk__51241_51256,count__51242_51257,i__51243_51258,arg_51275,seq__51239_51269__$1,temp__4657__auto___51268))
);

var G__51276 = cljs.core.next(seq__51239_51269__$1);
var G__51277 = null;
var G__51278 = (0);
var G__51279 = (0);
seq__51239_51255 = G__51276;
chunk__51241_51256 = G__51277;
count__51242_51257 = G__51278;
i__51243_51258 = G__51279;
continue;
} else {
var G__51280 = cljs.core.next(seq__51239_51269__$1);
var G__51281 = null;
var G__51282 = (0);
var G__51283 = (0);
seq__51239_51255 = G__51280;
chunk__51241_51256 = G__51281;
count__51242_51257 = G__51282;
i__51243_51258 = G__51283;
continue;
}
}
} else {
}
}
break;
}

return state;
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var seq__51247_51284 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__51249_51285 = null;
var count__51250_51286 = (0);
var i__51251_51287 = (0);
while(true){
if((i__51251_51287 < count__51250_51286)){
var arg_51288 = chunk__51249_51285.cljs$core$IIndexed$_nth$arity$2(null,i__51251_51287);
if(((!((arg_51288 == null)))?((((arg_51288.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_51288.cljs$core$IWatchable$))?true:(((!arg_51288.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51288):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51288))){
cljs.core.remove_watch(arg_51288,rum.core.cursored_key(state));

var G__51289 = seq__51247_51284;
var G__51290 = chunk__51249_51285;
var G__51291 = count__51250_51286;
var G__51292 = (i__51251_51287 + (1));
seq__51247_51284 = G__51289;
chunk__51249_51285 = G__51290;
count__51250_51286 = G__51291;
i__51251_51287 = G__51292;
continue;
} else {
var G__51293 = seq__51247_51284;
var G__51294 = chunk__51249_51285;
var G__51295 = count__51250_51286;
var G__51296 = (i__51251_51287 + (1));
seq__51247_51284 = G__51293;
chunk__51249_51285 = G__51294;
count__51250_51286 = G__51295;
i__51251_51287 = G__51296;
continue;
}
} else {
var temp__4657__auto___51297 = cljs.core.seq(seq__51247_51284);
if(temp__4657__auto___51297){
var seq__51247_51298__$1 = temp__4657__auto___51297;
if(cljs.core.chunked_seq_QMARK_(seq__51247_51298__$1)){
var c__31198__auto___51299 = cljs.core.chunk_first(seq__51247_51298__$1);
var G__51300 = cljs.core.chunk_rest(seq__51247_51298__$1);
var G__51301 = c__31198__auto___51299;
var G__51302 = cljs.core.count(c__31198__auto___51299);
var G__51303 = (0);
seq__51247_51284 = G__51300;
chunk__51249_51285 = G__51301;
count__51250_51286 = G__51302;
i__51251_51287 = G__51303;
continue;
} else {
var arg_51304 = cljs.core.first(seq__51247_51298__$1);
if(((!((arg_51304 == null)))?((((arg_51304.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_51304.cljs$core$IWatchable$))?true:(((!arg_51304.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51304):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_51304))){
cljs.core.remove_watch(arg_51304,rum.core.cursored_key(state));

var G__51305 = cljs.core.next(seq__51247_51298__$1);
var G__51306 = null;
var G__51307 = (0);
var G__51308 = (0);
seq__51247_51284 = G__51305;
chunk__51249_51285 = G__51306;
count__51250_51286 = G__51307;
i__51251_51287 = G__51308;
continue;
} else {
var G__51309 = cljs.core.next(seq__51247_51298__$1);
var G__51310 = null;
var G__51311 = (0);
var G__51312 = (0);
seq__51247_51284 = G__51309;
chunk__51249_51285 = G__51310;
count__51250_51286 = G__51311;
i__51251_51287 = G__51312;
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
