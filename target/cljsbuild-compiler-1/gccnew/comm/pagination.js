// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.comm.pagination');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
/**
 * Получить общее количество страниц
 */
gcclocal.comm.pagination.get_pages_count = (function gcclocal$comm$pagination$get_pages_count(total_c,pagesize){
var pagecount = (function (){var G__51316 = (total_c / pagesize);
return Math.floor(G__51316);
})();
if((cljs.core.rem(total_c,pagesize) > (0))){
return (pagecount + (1));
} else {
return pagecount;
}
});
gcclocal.comm.pagination.sortpages = (function gcclocal$comm$pagination$sortpages(allpages){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),allpages);
});
/**
 * Получить мэп всех страниц исходя из
 *   общего количества, размера страницы и текущей страницы
 */
gcclocal.comm.pagination.get_pages = (function gcclocal$comm$pagination$get_pages(total_c,pagesize,currentpage){
var get_page_map = (function (pagename,pageval){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$linkname,pagename,cljs.core.cst$kw$is_DASH_active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pageval,currentpage)], null);
});
var pagecount = gcclocal.comm.pagination.get_pages_count(total_c,pagesize);
var min_p = (currentpage - (2));
var max_p = (currentpage + (2));
var add_prev_if_needed = ((function (get_page_map,pagecount,min_p,max_p){
return (function (all_p){
if((min_p > (2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all_p,(min_p - (1)),get_page_map("...",(min_p - (1))));
} else {
return all_p;
}
});})(get_page_map,pagecount,min_p,max_p))
;
var add_next_if_needed = ((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed){
return (function (all_p){
if((max_p < (pagecount - (1)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all_p,(max_p + (1)),get_page_map("...",(max_p + (1))));
} else {
return all_p;
}
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed))
;
var add_in_range = ((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed){
return (function (all_p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed){
return (function (all_p_map,pagenum){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all_p_map,pagenum,get_page_map([cljs.core.str(pagenum)].join(''),pagenum));
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed))
,all_p,cljs.core.range.cljs$core$IFn$_invoke$arity$2((((min_p > (1)))?min_p:(1)),(((max_p < pagecount))?(max_p + (1)):(pagecount + (1)))));
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed))
;
var add_last = ((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed,add_in_range){
return (function (all_p){
if((pagecount > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all_p,pagecount,get_page_map([cljs.core.str(pagecount)].join(''),pagecount));
} else {
return all_p;
}
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed,add_in_range))
;
var all_pages = new cljs.core.PersistentArrayMap(null, 1, [(1),get_page_map("1",(1))], null);
return gcclocal.comm.pagination.sortpages(add_next_if_needed(add_prev_if_needed(add_in_range(add_last(all_pages)))));
});
gcclocal.comm.pagination.change_page = (function gcclocal$comm$pagination$change_page(pageval,click_ch){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_51332){
var state_val_51333 = (state_51332[(1)]);
if((state_val_51333 === (1))){
var state_51332__$1 = state_51332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51332__$1,(2),click_ch,pageval);
} else {
if((state_val_51333 === (2))){
var inst_51330 = (state_51332[(2)]);
var state_51332__$1 = state_51332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51332__$1,inst_51330);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$comm$pagination$change_page_$_state_machine__37983__auto__ = null;
var gcclocal$comm$pagination$change_page_$_state_machine__37983__auto____0 = (function (){
var statearr_51337 = [null,null,null,null,null,null,null];
(statearr_51337[(0)] = gcclocal$comm$pagination$change_page_$_state_machine__37983__auto__);

(statearr_51337[(1)] = (1));

return statearr_51337;
});
var gcclocal$comm$pagination$change_page_$_state_machine__37983__auto____1 = (function (state_51332){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_51332);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e51338){if((e51338 instanceof Object)){
var ex__37986__auto__ = e51338;
var statearr_51339_51341 = state_51332;
(statearr_51339_51341[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51332);

return cljs.core.cst$kw$recur;
} else {
throw e51338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__51342 = state_51332;
state_51332 = G__51342;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$pagination$change_page_$_state_machine__37983__auto__ = function(state_51332){
switch(arguments.length){
case 0:
return gcclocal$comm$pagination$change_page_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$pagination$change_page_$_state_machine__37983__auto____1.call(this,state_51332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$pagination$change_page_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$pagination$change_page_$_state_machine__37983__auto____0;
gcclocal$comm$pagination$change_page_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$pagination$change_page_$_state_machine__37983__auto____1;
return gcclocal$comm$pagination$change_page_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_51340 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_51340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_51340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
});
/**
 * 
 */
gcclocal.comm.pagination.page_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (pagename,pageval,is_active,click_ch){
var G__51343 = "a";
var G__51344 = {"onClick": ((function (G__51343){
return (function (){
return gcclocal.comm.pagination.change_page(pageval,click_ch);
});})(G__51343))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("item pageBtn "),cljs.core.str((cljs.core.truth_(is_active)?"active":""))].join('')], null))};
var G__51345 = sablono.interpreter.interpret(pagename);
return React.createElement(G__51343,G__51344,G__51345);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"page-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51346__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51346 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51347__i = 0, G__51347__a = new Array(arguments.length -  0);
while (G__51347__i < G__51347__a.length) {G__51347__a[G__51347__i] = arguments[G__51347__i + 0]; ++G__51347__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51347__a,0);
} 
return G__51346__delegate.call(this,args__42471__auto__);};
G__51346.cljs$lang$maxFixedArity = 0;
G__51346.cljs$lang$applyTo = (function (arglist__51348){
var args__42471__auto__ = cljs.core.seq(arglist__51348);
return G__51346__delegate(args__42471__auto__);
});
G__51346.cljs$core$IFn$_invoke$arity$variadic = G__51346__delegate;
return G__51346;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
/**
 * Основная вьюшка пейджинга
 */
gcclocal.comm.pagination.pagination_view = (function (){var render_mixin__42468__auto__ = rum.core.render__GT_mixin((function (p__51349,total_c,click_ch){
var map__51350 = p__51349;
var map__51350__$1 = ((((!((map__51350 == null)))?((((map__51350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51350):map__51350);
var pagesize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350__$1,cljs.core.cst$kw$pagesize);
var currentpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350__$1,cljs.core.cst$kw$currentpage);
var from_c = (((total_c > (0)))?((pagesize * (currentpage - (1))) + (1)):(0));
var to_c = (((total_c > (pagesize * currentpage)))?(pagesize * currentpage):total_c);
var formatted_str = goog.string.format("\u0412\u0441\u0435\u0433\u043E: %d, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E: %d - %d",total_c,from_c,to_c);
var G__51352 = "div";
var G__51353 = {"style": {"marginTop": (0)}, "className": "ui clearing basic segment"};
var G__51354 = (function (){var G__51356 = "h4";
var G__51357 = {"className": "ui left floated header"};
var G__51358 = sablono.interpreter.interpret(formatted_str);
return React.createElement(G__51356,G__51357,G__51358);
})();
var G__51355 = (function (){var G__51359 = "div";
var G__51360 = {"className": "ui small pagination right floated menu"};
var G__51361 = (function (){var G__51366 = "a";
var G__51367 = {"onClick": ((function (G__51366,G__51359,G__51360,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage){
return (function (){
if((currentpage > (1))){
return gcclocal.comm.pagination.change_page((currentpage - (1)),click_ch);
} else {
return null;
}
});})(G__51366,G__51359,G__51360,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon item prevBtn "),cljs.core.str((((currentpage <= (1)))?"disabled":""))].join('')], null))};
var G__51368 = (function (){var G__51369 = "i";
var G__51370 = {"className": "left arrow icon"};
return React.createElement(G__51369,G__51370);
})();
return React.createElement(G__51366,G__51367,G__51368);
})();
var G__51362 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__31167__auto__ = ((function (G__51359,G__51360,G__51361,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage){
return (function gcclocal$comm$pagination$iter__51371(s__51372){
return (new cljs.core.LazySeq(null,((function (G__51359,G__51360,G__51361,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage){
return (function (){
var s__51372__$1 = s__51372;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__51372__$1);
if(temp__4657__auto__){
var s__51372__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51372__$2)){
var c__31165__auto__ = cljs.core.chunk_first(s__51372__$2);
var size__31166__auto__ = cljs.core.count(c__31165__auto__);
var b__51374 = cljs.core.chunk_buffer(size__31166__auto__);
if((function (){var i__51373 = (0);
while(true){
if((i__51373 < size__31166__auto__)){
var vec__51391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31165__auto__,i__51373);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51391,(1),null);
cljs.core.chunk_append(b__51374,sablono.interpreter.interpret((function (){var G__51394 = cljs.core.cst$kw$linkname.cljs$core$IFn$_invoke$arity$1(v);
var G__51395 = k;
var G__51396 = cljs.core.cst$kw$is_DASH_active.cljs$core$IFn$_invoke$arity$1(v);
var G__51397 = click_ch;
return (gcclocal.comm.pagination.page_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.comm.pagination.page_view.cljs$core$IFn$_invoke$arity$4(G__51394,G__51395,G__51396,G__51397) : gcclocal.comm.pagination.page_view.call(null,G__51394,G__51395,G__51396,G__51397));
})()));

var G__51412 = (i__51373 + (1));
i__51373 = G__51412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51374),gcclocal$comm$pagination$iter__51371(cljs.core.chunk_rest(s__51372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51374),null);
}
} else {
var vec__51398 = cljs.core.first(s__51372__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(1),null);
return cljs.core.cons(sablono.interpreter.interpret((function (){var G__51401 = cljs.core.cst$kw$linkname.cljs$core$IFn$_invoke$arity$1(v);
var G__51402 = k;
var G__51403 = cljs.core.cst$kw$is_DASH_active.cljs$core$IFn$_invoke$arity$1(v);
var G__51404 = click_ch;
return (gcclocal.comm.pagination.page_view.cljs$core$IFn$_invoke$arity$4 ? gcclocal.comm.pagination.page_view.cljs$core$IFn$_invoke$arity$4(G__51401,G__51402,G__51403,G__51404) : gcclocal.comm.pagination.page_view.call(null,G__51401,G__51402,G__51403,G__51404));
})()),gcclocal$comm$pagination$iter__51371(cljs.core.rest(s__51372__$2)));
}
} else {
return null;
}
break;
}
});})(G__51359,G__51360,G__51361,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage))
,null,null));
});})(G__51359,G__51360,G__51361,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage))
;
return iter__31167__auto__(gcclocal.comm.pagination.get_pages(total_c,pagesize,currentpage));
})());
var G__51363 = (function (){var pagecount = gcclocal.comm.pagination.get_pages_count(total_c,pagesize);
var G__51407 = "a";
var G__51408 = {"onClick": ((function (G__51407,pagecount,G__51359,G__51360,G__51361,G__51362,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage){
return (function (){
if((currentpage < pagecount)){
return gcclocal.comm.pagination.change_page((currentpage + (1)),click_ch);
} else {
return null;
}
});})(G__51407,pagecount,G__51359,G__51360,G__51361,G__51362,G__51352,G__51353,G__51354,from_c,to_c,formatted_str,map__51350,map__51350__$1,pagesize,currentpage))
, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon item nextBtn "),cljs.core.str((((currentpage >= pagecount))?"disabled":""))].join('')], null))};
var G__51409 = (function (){var G__51410 = "i";
var G__51411 = {"className": "right arrow icon"};
return React.createElement(G__51410,G__51411);
})();
return React.createElement(G__51407,G__51408,G__51409);
})();
return React.createElement(G__51359,G__51360,G__51361,G__51362,G__51363);
})();
return React.createElement(G__51352,G__51353,G__51354,G__51355);
}));
var class__42469__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__42468__auto__], null),null),"pagination-view");
var ctor__42470__auto__ = ((function (render_mixin__42468__auto__,class__42469__auto__){
return (function() { 
var G__51413__delegate = function (args__42471__auto__){
var state__42472__auto__ = rum.core.args__GT_state(args__42471__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__42469__auto__,state__42472__auto__,cljs.core.array_seq([null], 0));
};
var G__51413 = function (var_args){
var args__42471__auto__ = null;
if (arguments.length > 0) {
var G__51414__i = 0, G__51414__a = new Array(arguments.length -  0);
while (G__51414__i < G__51414__a.length) {G__51414__a[G__51414__i] = arguments[G__51414__i + 0]; ++G__51414__i;}
  args__42471__auto__ = new cljs.core.IndexedSeq(G__51414__a,0);
} 
return G__51413__delegate.call(this,args__42471__auto__);};
G__51413.cljs$lang$maxFixedArity = 0;
G__51413.cljs$lang$applyTo = (function (arglist__51415){
var args__42471__auto__ = cljs.core.seq(arglist__51415);
return G__51413__delegate(args__42471__auto__);
});
G__51413.cljs$core$IFn$_invoke$arity$variadic = G__51413__delegate;
return G__51413;
})()
;})(render_mixin__42468__auto__,class__42469__auto__))
;
return cljs.core.with_meta(ctor__42470__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__42469__auto__], null));
})();
