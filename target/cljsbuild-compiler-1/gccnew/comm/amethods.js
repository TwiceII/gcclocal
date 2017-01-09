// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.comm.amethods');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
goog.require('cljs.core.async');
goog.require('ajax.core');
/**
 * Обновить все строки через ajax-запрос
 */
gcclocal.comm.amethods.refresh_rows = (function gcclocal$comm$amethods$refresh_rows(url,get_params,loading_cursor,rows_cursor,count_cursor){
return gcclocal.comm.utils.get_json(url,get_params,(function (response){
var G__50233_50237 = rows_cursor;
var G__50234_50238 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(response);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50233_50237,G__50234_50238) : cljs.core.reset_BANG_.call(null,G__50233_50237,G__50234_50238));

var G__50235_50239 = count_cursor;
var G__50236_50240 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(response);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50235_50239,G__50236_50240) : cljs.core.reset_BANG_.call(null,G__50235_50239,G__50236_50240));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(loading_cursor,false) : cljs.core.reset_BANG_.call(null,loading_cursor,false));
}));
});
/**
 * Добавить новую строку
 */
gcclocal.comm.amethods.add_row = (function gcclocal$comm$amethods$add_row(url,row,notify_ch,refresh_rows_ch){
return gcclocal.comm.utils.post_json_with_success_check(url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,row], null),(function (_){
var c__38096__auto___50329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___50329){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___50329){
return (function (state_50291){
var state_val_50292 = (state_50291[(1)]);
if((state_val_50292 === (1))){
var inst_50285 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_50286 = ["\u0421\u0442\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430","success"];
var inst_50287 = cljs.core.PersistentHashMap.fromArrays(inst_50285,inst_50286);
var state_50291__$1 = state_50291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50291__$1,(2),notify_ch,inst_50287);
} else {
if((state_val_50292 === (2))){
var inst_50289 = (state_50291[(2)]);
var state_50291__$1 = state_50291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50291__$1,inst_50289);
} else {
return null;
}
}
});})(c__38096__auto___50329))
;
return ((function (switch__37982__auto__,c__38096__auto___50329){
return (function() {
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50296 = [null,null,null,null,null,null,null];
(statearr_50296[(0)] = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__);

(statearr_50296[(1)] = (1));

return statearr_50296;
});
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1 = (function (state_50291){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50291);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50297){if((e50297 instanceof Object)){
var ex__37986__auto__ = e50297;
var statearr_50298_50330 = state_50291;
(statearr_50298_50330[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50291);

return cljs.core.cst$kw$recur;
} else {
throw e50297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50331 = state_50291;
state_50291 = G__50331;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__ = function(state_50291){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1.call(this,state_50291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___50329))
})();
var state__38098__auto__ = (function (){var statearr_50299 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___50329);

return statearr_50299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___50329))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_50303){
var state_val_50304 = (state_50303[(1)]);
if((state_val_50304 === (1))){
var state_50303__$1 = state_50303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50303__$1,(2),refresh_rows_ch,cljs.core.cst$kw$reset_DASH_all);
} else {
if((state_val_50304 === (2))){
var inst_50301 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50303__$1,inst_50301);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50308 = [null,null,null,null,null,null,null];
(statearr_50308[(0)] = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__);

(statearr_50308[(1)] = (1));

return statearr_50308;
});
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1 = (function (state_50303){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50303);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50309){if((e50309 instanceof Object)){
var ex__37986__auto__ = e50309;
var statearr_50310_50332 = state_50303;
(statearr_50310_50332[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50303);

return cljs.core.cst$kw$recur;
} else {
throw e50309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50333 = state_50303;
state_50303 = G__50333;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__ = function(state_50303){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1.call(this,state_50303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_50311 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_50311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_50320){
var state_val_50321 = (state_50320[(1)]);
if((state_val_50321 === (1))){
var inst_50312 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_50313 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_50314 = gcclocal.comm.utils.get_errors_str_from_map(inst_50313);
var inst_50315 = [inst_50314,"error"];
var inst_50316 = cljs.core.PersistentHashMap.fromArrays(inst_50312,inst_50315);
var state_50320__$1 = state_50320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50320__$1,(2),notify_ch,inst_50316);
} else {
if((state_val_50321 === (2))){
var inst_50318 = (state_50320[(2)]);
var state_50320__$1 = state_50320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50320__$1,inst_50318);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50325 = [null,null,null,null,null,null,null];
(statearr_50325[(0)] = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__);

(statearr_50325[(1)] = (1));

return statearr_50325;
});
var gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1 = (function (state_50320){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50320);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50326){if((e50326 instanceof Object)){
var ex__37986__auto__ = e50326;
var statearr_50327_50334 = state_50320;
(statearr_50327_50334[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50320);

return cljs.core.cst$kw$recur;
} else {
throw e50326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50335 = state_50320;
state_50320 = G__50335;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__ = function(state_50320){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1.call(this,state_50320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$add_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$add_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_50328 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_50328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Редактирование строки
 */
gcclocal.comm.amethods.edit_row = (function gcclocal$comm$amethods$edit_row(url,id,row,notify_ch,refresh_rows_ch){
return gcclocal.comm.utils.post_json_with_success_check(url,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row,row,cljs.core.cst$kw$id,id], null),(function (_){
var c__38096__auto___50424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___50424){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___50424){
return (function (state_50386){
var state_val_50387 = (state_50386[(1)]);
if((state_val_50387 === (1))){
var inst_50380 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_50381 = ["\u0421\u0442\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430","success"];
var inst_50382 = cljs.core.PersistentHashMap.fromArrays(inst_50380,inst_50381);
var state_50386__$1 = state_50386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50386__$1,(2),notify_ch,inst_50382);
} else {
if((state_val_50387 === (2))){
var inst_50384 = (state_50386[(2)]);
var state_50386__$1 = state_50386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50386__$1,inst_50384);
} else {
return null;
}
}
});})(c__38096__auto___50424))
;
return ((function (switch__37982__auto__,c__38096__auto___50424){
return (function() {
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50391 = [null,null,null,null,null,null,null];
(statearr_50391[(0)] = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__);

(statearr_50391[(1)] = (1));

return statearr_50391;
});
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1 = (function (state_50386){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50386);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50392){if((e50392 instanceof Object)){
var ex__37986__auto__ = e50392;
var statearr_50393_50425 = state_50386;
(statearr_50393_50425[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50386);

return cljs.core.cst$kw$recur;
} else {
throw e50392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50426 = state_50386;
state_50386 = G__50426;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__ = function(state_50386){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1.call(this,state_50386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___50424))
})();
var state__38098__auto__ = (function (){var statearr_50394 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___50424);

return statearr_50394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___50424))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_50398){
var state_val_50399 = (state_50398[(1)]);
if((state_val_50399 === (1))){
var state_50398__$1 = state_50398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50398__$1,(2),refresh_rows_ch,cljs.core.cst$kw$reset_DASH_none);
} else {
if((state_val_50399 === (2))){
var inst_50396 = (state_50398[(2)]);
var state_50398__$1 = state_50398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50398__$1,inst_50396);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50403 = [null,null,null,null,null,null,null];
(statearr_50403[(0)] = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__);

(statearr_50403[(1)] = (1));

return statearr_50403;
});
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1 = (function (state_50398){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50398);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50404){if((e50404 instanceof Object)){
var ex__37986__auto__ = e50404;
var statearr_50405_50427 = state_50398;
(statearr_50405_50427[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50398);

return cljs.core.cst$kw$recur;
} else {
throw e50404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50428 = state_50398;
state_50398 = G__50428;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__ = function(state_50398){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1.call(this,state_50398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_50406 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_50406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_50415){
var state_val_50416 = (state_50415[(1)]);
if((state_val_50416 === (1))){
var inst_50407 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_50408 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_50409 = gcclocal.comm.utils.get_errors_str_from_map(inst_50408);
var inst_50410 = [inst_50409,"error"];
var inst_50411 = cljs.core.PersistentHashMap.fromArrays(inst_50407,inst_50410);
var state_50415__$1 = state_50415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50415__$1,(2),notify_ch,inst_50411);
} else {
if((state_val_50416 === (2))){
var inst_50413 = (state_50415[(2)]);
var state_50415__$1 = state_50415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50415__$1,inst_50413);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50420 = [null,null,null,null,null,null,null];
(statearr_50420[(0)] = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__);

(statearr_50420[(1)] = (1));

return statearr_50420;
});
var gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1 = (function (state_50415){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50415);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50421){if((e50421 instanceof Object)){
var ex__37986__auto__ = e50421;
var statearr_50422_50429 = state_50415;
(statearr_50422_50429[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50415);

return cljs.core.cst$kw$recur;
} else {
throw e50421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50430 = state_50415;
state_50415 = G__50430;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__ = function(state_50415){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1.call(this,state_50415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$edit_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_50423 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_50423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Удаление строки
 */
gcclocal.comm.amethods.delete_row = (function gcclocal$comm$amethods$delete_row(url,id,notify_ch,refresh_rows_ch){
return gcclocal.comm.utils.post_json_with_success_check(url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),(function (_){
var c__38096__auto___50519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___50519){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___50519){
return (function (state_50481){
var state_val_50482 = (state_50481[(1)]);
if((state_val_50482 === (1))){
var inst_50475 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_50476 = ["\u0421\u0442\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0430","success"];
var inst_50477 = cljs.core.PersistentHashMap.fromArrays(inst_50475,inst_50476);
var state_50481__$1 = state_50481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50481__$1,(2),notify_ch,inst_50477);
} else {
if((state_val_50482 === (2))){
var inst_50479 = (state_50481[(2)]);
var state_50481__$1 = state_50481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50481__$1,inst_50479);
} else {
return null;
}
}
});})(c__38096__auto___50519))
;
return ((function (switch__37982__auto__,c__38096__auto___50519){
return (function() {
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50486 = [null,null,null,null,null,null,null];
(statearr_50486[(0)] = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__);

(statearr_50486[(1)] = (1));

return statearr_50486;
});
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1 = (function (state_50481){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50481);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50487){if((e50487 instanceof Object)){
var ex__37986__auto__ = e50487;
var statearr_50488_50520 = state_50481;
(statearr_50488_50520[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50481);

return cljs.core.cst$kw$recur;
} else {
throw e50487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50521 = state_50481;
state_50481 = G__50521;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__ = function(state_50481){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1.call(this,state_50481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___50519))
})();
var state__38098__auto__ = (function (){var statearr_50489 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___50519);

return statearr_50489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___50519))
);


var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_50493){
var state_val_50494 = (state_50493[(1)]);
if((state_val_50494 === (1))){
var state_50493__$1 = state_50493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50493__$1,(2),refresh_rows_ch,cljs.core.cst$kw$reset_DASH_none);
} else {
if((state_val_50494 === (2))){
var inst_50491 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50493__$1,inst_50491);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50498 = [null,null,null,null,null,null,null];
(statearr_50498[(0)] = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__);

(statearr_50498[(1)] = (1));

return statearr_50498;
});
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1 = (function (state_50493){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50493);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50499){if((e50499 instanceof Object)){
var ex__37986__auto__ = e50499;
var statearr_50500_50522 = state_50493;
(statearr_50500_50522[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50493);

return cljs.core.cst$kw$recur;
} else {
throw e50499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50523 = state_50493;
state_50493 = G__50523;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__ = function(state_50493){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1.call(this,state_50493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_50501 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_50501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}),(function (r){
var c__38096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto__){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto__){
return (function (state_50510){
var state_val_50511 = (state_50510[(1)]);
if((state_val_50511 === (1))){
var inst_50502 = [cljs.core.cst$kw$text,cljs.core.cst$kw$type];
var inst_50503 = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(r);
var inst_50504 = gcclocal.comm.utils.get_errors_str_from_map(inst_50503);
var inst_50505 = [inst_50504,"error"];
var inst_50506 = cljs.core.PersistentHashMap.fromArrays(inst_50502,inst_50505);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50510__$1,(2),notify_ch,inst_50506);
} else {
if((state_val_50511 === (2))){
var inst_50508 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50510__$1,inst_50508);
} else {
return null;
}
}
});})(c__38096__auto__))
;
return ((function (switch__37982__auto__,c__38096__auto__){
return (function() {
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__ = null;
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0 = (function (){
var statearr_50515 = [null,null,null,null,null,null,null];
(statearr_50515[(0)] = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__);

(statearr_50515[(1)] = (1));

return statearr_50515;
});
var gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1 = (function (state_50510){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_50510);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e50516){if((e50516 instanceof Object)){
var ex__37986__auto__ = e50516;
var statearr_50517_50524 = state_50510;
(statearr_50517_50524[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50510);

return cljs.core.cst$kw$recur;
} else {
throw e50516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__50525 = state_50510;
state_50510 = G__50525;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__ = function(state_50510){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1.call(this,state_50510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____0;
gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto____1;
return gcclocal$comm$amethods$delete_row_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto__))
})();
var state__38098__auto__ = (function (){var statearr_50518 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_50518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto__);

return statearr_50518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto__))
);

return c__38096__auto__;
}));
});
/**
 * Получить по ajax справочники
 */
gcclocal.comm.amethods.get_select_list_for = (function gcclocal$comm$amethods$get_select_list_for(url){
var s_list = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
gcclocal.comm.utils.get_json(url,cljs.core.PersistentArrayMap.EMPTY,((function (s_list){
return (function (resp){
var G__50528 = s_list;
var G__50529 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(resp);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50528,G__50529) : cljs.core.reset_BANG_.call(null,G__50528,G__50529));
});})(s_list))
);

return s_list;
});
/**
 * Получить по ajax справочник для переданного атома
 */
gcclocal.comm.amethods.get_select_list_for_atom = (function gcclocal$comm$amethods$get_select_list_for_atom(r_atom,url){
return gcclocal.comm.utils.get_json(url,cljs.core.PersistentArrayMap.EMPTY,(function (resp){
var G__50532 = r_atom;
var G__50533 = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(resp);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50532,G__50533) : cljs.core.reset_BANG_.call(null,G__50532,G__50533));
}));
});
