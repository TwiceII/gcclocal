// Compiled by ClojureScript 1.9.89 {}
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
var pagecount = Math.floor((total_c / pagesize));
if((cljs.core.rem.call(null,total_c,pagesize) > (0))){
return (pagecount + (1));
} else {
return pagecount;
}
});
gcclocal.comm.pagination.sortpages = (function gcclocal$comm$pagination$sortpages(allpages){

return cljs.core.into.call(null,cljs.core.sorted_map.call(null),allpages);
});
/**
 * Получить мэп всех страниц исходя из
 *   общего количества, размера страницы и текущей страницы
 */
gcclocal.comm.pagination.get_pages = (function gcclocal$comm$pagination$get_pages(total_c,pagesize,currentpage){
var get_page_map = (function (pagename,pageval){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linkname","linkname",-381454968),pagename,new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core._EQ_.call(null,pageval,currentpage)], null);
});
var pagecount = gcclocal.comm.pagination.get_pages_count.call(null,total_c,pagesize);
var min_p = (currentpage - (2));
var max_p = (currentpage + (2));
var add_prev_if_needed = ((function (get_page_map,pagecount,min_p,max_p){
return (function (all_p){
if((min_p > (2))){
return cljs.core.assoc.call(null,all_p,(min_p - (1)),get_page_map.call(null,"...",(min_p - (1))));
} else {
return all_p;
}
});})(get_page_map,pagecount,min_p,max_p))
;
var add_next_if_needed = ((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed){
return (function (all_p){
if((max_p < (pagecount - (1)))){
return cljs.core.assoc.call(null,all_p,(max_p + (1)),get_page_map.call(null,"...",(max_p + (1))));
} else {
return all_p;
}
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed))
;
var add_in_range = ((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed){
return (function (all_p){
return cljs.core.reduce.call(null,((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed){
return (function (all_p_map,pagenum){
return cljs.core.assoc.call(null,all_p_map,pagenum,get_page_map.call(null,[cljs.core.str(pagenum)].join(''),pagenum));
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed))
,all_p,cljs.core.range.call(null,(((min_p > (1)))?min_p:(1)),(((max_p < pagecount))?(max_p + (1)):(pagecount + (1)))));
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed))
;
var add_last = ((function (get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed,add_in_range){
return (function (all_p){
if((pagecount > (1))){
return cljs.core.assoc.call(null,all_p,pagecount,get_page_map.call(null,[cljs.core.str(pagecount)].join(''),pagecount));
} else {
return all_p;
}
});})(get_page_map,pagecount,min_p,max_p,add_prev_if_needed,add_next_if_needed,add_in_range))
;
var all_pages = new cljs.core.PersistentArrayMap(null, 1, [(1),get_page_map.call(null,"1",(1))], null);
return gcclocal.comm.pagination.sortpages.call(null,add_next_if_needed.call(null,add_prev_if_needed.call(null,add_in_range.call(null,add_last.call(null,all_pages)))));
});
gcclocal.comm.pagination.change_page = (function gcclocal$comm$pagination$change_page(pageval,click_ch){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_39020){
var state_val_39021 = (state_39020[(1)]);
if((state_val_39021 === (1))){
var state_39020__$1 = state_39020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39020__$1,(2),click_ch,pageval);
} else {
if((state_val_39021 === (2))){
var inst_39018 = (state_39020[(2)]);
var state_39020__$1 = state_39020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39020__$1,inst_39018);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$comm$pagination$change_page_$_state_machine__35012__auto__ = null;
var gcclocal$comm$pagination$change_page_$_state_machine__35012__auto____0 = (function (){
var statearr_39025 = [null,null,null,null,null,null,null];
(statearr_39025[(0)] = gcclocal$comm$pagination$change_page_$_state_machine__35012__auto__);

(statearr_39025[(1)] = (1));

return statearr_39025;
});
var gcclocal$comm$pagination$change_page_$_state_machine__35012__auto____1 = (function (state_39020){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_39020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e39026){if((e39026 instanceof Object)){
var ex__35015__auto__ = e39026;
var statearr_39027_39029 = state_39020;
(statearr_39027_39029[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39030 = state_39020;
state_39020 = G__39030;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$pagination$change_page_$_state_machine__35012__auto__ = function(state_39020){
switch(arguments.length){
case 0:
return gcclocal$comm$pagination$change_page_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$pagination$change_page_$_state_machine__35012__auto____1.call(this,state_39020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$pagination$change_page_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$pagination$change_page_$_state_machine__35012__auto____0;
gcclocal$comm$pagination$change_page_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$pagination$change_page_$_state_machine__35012__auto____1;
return gcclocal$comm$pagination$change_page_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_39028 = f__35124__auto__.call(null);
(statearr_39028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_39028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
});
/**
 * 
 */
gcclocal.comm.pagination.page_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (pagename,pageval,is_active,click_ch){
return React.createElement("a",{"onClick": (function (){
return gcclocal.comm.pagination.change_page.call(null,pageval,click_ch);
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("item pageBtn "),cljs.core.str((cljs.core.truth_(is_active)?"active":""))].join('')], null))},sablono.interpreter.interpret.call(null,pagename));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"page-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39031__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39031 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39032__i = 0, G__39032__a = new Array(arguments.length -  0);
while (G__39032__i < G__39032__a.length) {G__39032__a[G__39032__i] = arguments[G__39032__i + 0]; ++G__39032__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39032__a,0);
} 
return G__39031__delegate.call(this,args__33795__auto__);};
G__39031.cljs$lang$maxFixedArity = 0;
G__39031.cljs$lang$applyTo = (function (arglist__39033){
var args__33795__auto__ = cljs.core.seq(arglist__39033);
return G__39031__delegate(args__33795__auto__);
});
G__39031.cljs$core$IFn$_invoke$arity$variadic = G__39031__delegate;
return G__39031;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();
/**
 * Основная вьюшка пейджинга
 */
gcclocal.comm.pagination.pagination_view = (function (){var render_mixin__33792__auto__ = rum.core.render__GT_mixin.call(null,(function (p__39034,total_c,click_ch){
var map__39035 = p__39034;
var map__39035__$1 = ((((!((map__39035 == null)))?((((map__39035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39035):map__39035);
var pagesize = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"pagesize","pagesize",-2100914692));
var currentpage = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"currentpage","currentpage",-480118203));
var from_c = (((total_c > (0)))?((pagesize * (currentpage - (1))) + (1)):(0));
var to_c = (((total_c > (pagesize * currentpage)))?(pagesize * currentpage):total_c);
var formatted_str = goog.string.format("\u0412\u0441\u0435\u0433\u043E: %d, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E: %d - %d",total_c,from_c,to_c);
return React.createElement("div",{"style": {"marginTop": (0)}, "className": "ui clearing basic segment"},React.createElement("h4",{"className": "ui left floated header"},sablono.interpreter.interpret.call(null,formatted_str)),React.createElement("div",{"className": "ui small pagination right floated menu"},React.createElement("a",{"onClick": ((function (from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage){
return (function (){
if((currentpage > (1))){
return gcclocal.comm.pagination.change_page.call(null,(currentpage - (1)),click_ch);
} else {
return null;
}
});})(from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon item prevBtn "),cljs.core.str((((currentpage <= (1)))?"disabled":""))].join('')], null))},React.createElement("i",{"className": "left arrow icon"})),cljs.core.into_array.call(null,(function (){var iter__31357__auto__ = ((function (from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage){
return (function gcclocal$comm$pagination$iter__39039(s__39040){
return (new cljs.core.LazySeq(null,((function (from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage){
return (function (){
var s__39040__$1 = s__39040;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39040__$1);
if(temp__4657__auto__){
var s__39040__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39040__$2)){
var c__31355__auto__ = cljs.core.chunk_first.call(null,s__39040__$2);
var size__31356__auto__ = cljs.core.count.call(null,c__31355__auto__);
var b__39042 = cljs.core.chunk_buffer.call(null,size__31356__auto__);
if((function (){var i__39041 = (0);
while(true){
if((i__39041 < size__31356__auto__)){
var vec__39049 = cljs.core._nth.call(null,c__31355__auto__,i__39041);
var k = cljs.core.nth.call(null,vec__39049,(0),null);
var v = cljs.core.nth.call(null,vec__39049,(1),null);
cljs.core.chunk_append.call(null,b__39042,sablono.interpreter.interpret.call(null,gcclocal.comm.pagination.page_view.call(null,new cljs.core.Keyword(null,"linkname","linkname",-381454968).cljs$core$IFn$_invoke$arity$1(v),k,new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(v),click_ch)));

var G__39057 = (i__39041 + (1));
i__39041 = G__39057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39042),gcclocal$comm$pagination$iter__39039.call(null,cljs.core.chunk_rest.call(null,s__39040__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39042),null);
}
} else {
var vec__39052 = cljs.core.first.call(null,s__39040__$2);
var k = cljs.core.nth.call(null,vec__39052,(0),null);
var v = cljs.core.nth.call(null,vec__39052,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,gcclocal.comm.pagination.page_view.call(null,new cljs.core.Keyword(null,"linkname","linkname",-381454968).cljs$core$IFn$_invoke$arity$1(v),k,new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(v),click_ch)),gcclocal$comm$pagination$iter__39039.call(null,cljs.core.rest.call(null,s__39040__$2)));
}
} else {
return null;
}
break;
}
});})(from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage))
,null,null));
});})(from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage))
;
return iter__31357__auto__.call(null,gcclocal.comm.pagination.get_pages.call(null,total_c,pagesize,currentpage));
})()),(function (){var pagecount = gcclocal.comm.pagination.get_pages_count.call(null,total_c,pagesize);
return React.createElement("a",{"onClick": ((function (pagecount,from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage){
return (function (){
if((currentpage < pagecount)){
return gcclocal.comm.pagination.change_page.call(null,(currentpage + (1)),click_ch);
} else {
return null;
}
});})(pagecount,from_c,to_c,formatted_str,map__39035,map__39035__$1,pagesize,currentpage))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon item nextBtn "),cljs.core.str((((currentpage >= pagecount))?"disabled":""))].join('')], null))},React.createElement("i",{"className": "right arrow icon"}));
})()));
}));
var class__33793__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__33792__auto__], null),null),"pagination-view");
var ctor__33794__auto__ = ((function (render_mixin__33792__auto__,class__33793__auto__){
return (function() { 
var G__39058__delegate = function (args__33795__auto__){
var state__33796__auto__ = rum.core.args__GT_state.call(null,args__33795__auto__);
return rum.core.element.call(null,class__33793__auto__,state__33796__auto__,null);
};
var G__39058 = function (var_args){
var args__33795__auto__ = null;
if (arguments.length > 0) {
var G__39059__i = 0, G__39059__a = new Array(arguments.length -  0);
while (G__39059__i < G__39059__a.length) {G__39059__a[G__39059__i] = arguments[G__39059__i + 0]; ++G__39059__i;}
  args__33795__auto__ = new cljs.core.IndexedSeq(G__39059__a,0);
} 
return G__39058__delegate.call(this,args__33795__auto__);};
G__39058.cljs$lang$maxFixedArity = 0;
G__39058.cljs$lang$applyTo = (function (arglist__39060){
var args__33795__auto__ = cljs.core.seq(arglist__39060);
return G__39058__delegate(args__33795__auto__);
});
G__39058.cljs$core$IFn$_invoke$arity$variadic = G__39058__delegate;
return G__39058;
})()
;})(render_mixin__33792__auto__,class__33793__auto__))
;
return cljs.core.with_meta.call(null,ctor__33794__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__33793__auto__], null));
})();

//# sourceMappingURL=pagination.js.map