// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.comm.amethods');
goog.require('cljs.core');
goog.require('gcclocal.comm.utils');
goog.require('cljs.core.async');
goog.require('ajax.core');
/**
 * Обновить все строки через ajax-запрос
 */
gcclocal.comm.amethods.refresh_rows = (function gcclocal$comm$amethods$refresh_rows(url,get_params,loading_cursor,rows_cursor,count_cursor){
return gcclocal.comm.utils.get_json.call(null,url,get_params,(function (response){
cljs.core.reset_BANG_.call(null,rows_cursor,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(response));

cljs.core.reset_BANG_.call(null,count_cursor,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(response));

return cljs.core.reset_BANG_.call(null,loading_cursor,false);
}));
});
/**
 * Добавить новую строку
 */
gcclocal.comm.amethods.add_row = (function gcclocal$comm$amethods$add_row(url,row,notify_ch,refresh_rows_ch){
return gcclocal.comm.utils.post_json_with_success_check.call(null,url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),row], null),(function (_){
var c__35123__auto___38007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___38007){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___38007){
return (function (state_37969){
var state_val_37970 = (state_37969[(1)]);
if((state_val_37970 === (1))){
var inst_37963 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37964 = ["\u0421\u0442\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430","success"];
var inst_37965 = cljs.core.PersistentHashMap.fromArrays(inst_37963,inst_37964);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37969__$1,(2),notify_ch,inst_37965);
} else {
if((state_val_37970 === (2))){
var inst_37967 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37969__$1,inst_37967);
} else {
return null;
}
}
});})(c__35123__auto___38007))
;
return ((function (switch__35011__auto__,c__35123__auto___38007){
return (function() {
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0 = (function (){
var statearr_37974 = [null,null,null,null,null,null,null];
(statearr_37974[(0)] = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__);

(statearr_37974[(1)] = (1));

return statearr_37974;
});
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1 = (function (state_37969){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37975){if((e37975 instanceof Object)){
var ex__35015__auto__ = e37975;
var statearr_37976_38008 = state_37969;
(statearr_37976_38008[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_37969;
state_37969 = G__38009;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__ = function(state_37969){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1.call(this,state_37969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___38007))
})();
var state__35125__auto__ = (function (){var statearr_37977 = f__35124__auto__.call(null);
(statearr_37977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38007);

return statearr_37977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___38007))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_37981){
var state_val_37982 = (state_37981[(1)]);
if((state_val_37982 === (1))){
var state_37981__$1 = state_37981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37981__$1,(2),refresh_rows_ch,new cljs.core.Keyword(null,"reset-all","reset-all",315619250));
} else {
if((state_val_37982 === (2))){
var inst_37979 = (state_37981[(2)]);
var state_37981__$1 = state_37981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37981__$1,inst_37979);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0 = (function (){
var statearr_37986 = [null,null,null,null,null,null,null];
(statearr_37986[(0)] = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__);

(statearr_37986[(1)] = (1));

return statearr_37986;
});
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1 = (function (state_37981){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e37987){if((e37987 instanceof Object)){
var ex__35015__auto__ = e37987;
var statearr_37988_38010 = state_37981;
(statearr_37988_38010[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38011 = state_37981;
state_37981 = G__38011;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__ = function(state_37981){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1.call(this,state_37981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_37989 = f__35124__auto__.call(null);
(statearr_37989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_37989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_37998){
var state_val_37999 = (state_37998[(1)]);
if((state_val_37999 === (1))){
var inst_37990 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37991 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_37992 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_37991);
var inst_37993 = [inst_37992,"error"];
var inst_37994 = cljs.core.PersistentHashMap.fromArrays(inst_37990,inst_37993);
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37998__$1,(2),notify_ch,inst_37994);
} else {
if((state_val_37999 === (2))){
var inst_37996 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37998__$1,inst_37996);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0 = (function (){
var statearr_38003 = [null,null,null,null,null,null,null];
(statearr_38003[(0)] = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__);

(statearr_38003[(1)] = (1));

return statearr_38003;
});
var gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1 = (function (state_37998){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_37998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38004){if((e38004 instanceof Object)){
var ex__35015__auto__ = e38004;
var statearr_38005_38012 = state_37998;
(statearr_38005_38012[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38013 = state_37998;
state_37998 = G__38013;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__ = function(state_37998){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1.call(this,state_37998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$add_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$add_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_38006 = f__35124__auto__.call(null);
(statearr_38006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Редактирование строки
 */
gcclocal.comm.amethods.edit_row = (function gcclocal$comm$amethods$edit_row(url,id,row,notify_ch,refresh_rows_ch){
return gcclocal.comm.utils.post_json_with_success_check.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (_){
var c__35123__auto___38102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___38102){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___38102){
return (function (state_38064){
var state_val_38065 = (state_38064[(1)]);
if((state_val_38065 === (1))){
var inst_38058 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38059 = ["\u0421\u0442\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430","success"];
var inst_38060 = cljs.core.PersistentHashMap.fromArrays(inst_38058,inst_38059);
var state_38064__$1 = state_38064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38064__$1,(2),notify_ch,inst_38060);
} else {
if((state_val_38065 === (2))){
var inst_38062 = (state_38064[(2)]);
var state_38064__$1 = state_38064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38064__$1,inst_38062);
} else {
return null;
}
}
});})(c__35123__auto___38102))
;
return ((function (switch__35011__auto__,c__35123__auto___38102){
return (function() {
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0 = (function (){
var statearr_38069 = [null,null,null,null,null,null,null];
(statearr_38069[(0)] = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__);

(statearr_38069[(1)] = (1));

return statearr_38069;
});
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1 = (function (state_38064){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38070){if((e38070 instanceof Object)){
var ex__35015__auto__ = e38070;
var statearr_38071_38103 = state_38064;
(statearr_38071_38103[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38104 = state_38064;
state_38064 = G__38104;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__ = function(state_38064){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1.call(this,state_38064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___38102))
})();
var state__35125__auto__ = (function (){var statearr_38072 = f__35124__auto__.call(null);
(statearr_38072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38102);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___38102))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_38076){
var state_val_38077 = (state_38076[(1)]);
if((state_val_38077 === (1))){
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38076__$1,(2),refresh_rows_ch,new cljs.core.Keyword(null,"reset-none","reset-none",2005692792));
} else {
if((state_val_38077 === (2))){
var inst_38074 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38076__$1,inst_38074);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0 = (function (){
var statearr_38081 = [null,null,null,null,null,null,null];
(statearr_38081[(0)] = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__);

(statearr_38081[(1)] = (1));

return statearr_38081;
});
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1 = (function (state_38076){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38082){if((e38082 instanceof Object)){
var ex__35015__auto__ = e38082;
var statearr_38083_38105 = state_38076;
(statearr_38083_38105[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_38076;
state_38076 = G__38106;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__ = function(state_38076){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1.call(this,state_38076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_38084 = f__35124__auto__.call(null);
(statearr_38084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_38093){
var state_val_38094 = (state_38093[(1)]);
if((state_val_38094 === (1))){
var inst_38085 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38086 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_38087 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_38086);
var inst_38088 = [inst_38087,"error"];
var inst_38089 = cljs.core.PersistentHashMap.fromArrays(inst_38085,inst_38088);
var state_38093__$1 = state_38093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38093__$1,(2),notify_ch,inst_38089);
} else {
if((state_val_38094 === (2))){
var inst_38091 = (state_38093[(2)]);
var state_38093__$1 = state_38093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38093__$1,inst_38091);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0 = (function (){
var statearr_38098 = [null,null,null,null,null,null,null];
(statearr_38098[(0)] = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__);

(statearr_38098[(1)] = (1));

return statearr_38098;
});
var gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1 = (function (state_38093){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38099){if((e38099 instanceof Object)){
var ex__35015__auto__ = e38099;
var statearr_38100_38107 = state_38093;
(statearr_38100_38107[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38108 = state_38093;
state_38093 = G__38108;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__ = function(state_38093){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1.call(this,state_38093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$edit_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_38101 = f__35124__auto__.call(null);
(statearr_38101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Удаление строки
 */
gcclocal.comm.amethods.delete_row = (function gcclocal$comm$amethods$delete_row(url,id,notify_ch,refresh_rows_ch){
return gcclocal.comm.utils.post_json_with_success_check.call(null,url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (_){
var c__35123__auto___38197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___38197){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___38197){
return (function (state_38159){
var state_val_38160 = (state_38159[(1)]);
if((state_val_38160 === (1))){
var inst_38153 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38154 = ["\u0421\u0442\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0430","success"];
var inst_38155 = cljs.core.PersistentHashMap.fromArrays(inst_38153,inst_38154);
var state_38159__$1 = state_38159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38159__$1,(2),notify_ch,inst_38155);
} else {
if((state_val_38160 === (2))){
var inst_38157 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38159__$1,inst_38157);
} else {
return null;
}
}
});})(c__35123__auto___38197))
;
return ((function (switch__35011__auto__,c__35123__auto___38197){
return (function() {
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0 = (function (){
var statearr_38164 = [null,null,null,null,null,null,null];
(statearr_38164[(0)] = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__);

(statearr_38164[(1)] = (1));

return statearr_38164;
});
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1 = (function (state_38159){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38165){if((e38165 instanceof Object)){
var ex__35015__auto__ = e38165;
var statearr_38166_38198 = state_38159;
(statearr_38166_38198[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38199 = state_38159;
state_38159 = G__38199;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__ = function(state_38159){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1.call(this,state_38159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___38197))
})();
var state__35125__auto__ = (function (){var statearr_38167 = f__35124__auto__.call(null);
(statearr_38167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38197);

return statearr_38167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___38197))
);


var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_38171){
var state_val_38172 = (state_38171[(1)]);
if((state_val_38172 === (1))){
var state_38171__$1 = state_38171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38171__$1,(2),refresh_rows_ch,new cljs.core.Keyword(null,"reset-none","reset-none",2005692792));
} else {
if((state_val_38172 === (2))){
var inst_38169 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38171__$1,inst_38169);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0 = (function (){
var statearr_38176 = [null,null,null,null,null,null,null];
(statearr_38176[(0)] = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__);

(statearr_38176[(1)] = (1));

return statearr_38176;
});
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1 = (function (state_38171){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38177){if((e38177 instanceof Object)){
var ex__35015__auto__ = e38177;
var statearr_38178_38200 = state_38171;
(statearr_38178_38200[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38201 = state_38171;
state_38171 = G__38201;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__ = function(state_38171){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1.call(this,state_38171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_38179 = f__35124__auto__.call(null);
(statearr_38179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}),(function (r){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_38188){
var state_val_38189 = (state_38188[(1)]);
if((state_val_38189 === (1))){
var inst_38180 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38181 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(r);
var inst_38182 = gcclocal.comm.utils.get_errors_str_from_map.call(null,inst_38181);
var inst_38183 = [inst_38182,"error"];
var inst_38184 = cljs.core.PersistentHashMap.fromArrays(inst_38180,inst_38183);
var state_38188__$1 = state_38188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38188__$1,(2),notify_ch,inst_38184);
} else {
if((state_val_38189 === (2))){
var inst_38186 = (state_38188[(2)]);
var state_38188__$1 = state_38188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38188__$1,inst_38186);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__ = null;
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0 = (function (){
var statearr_38193 = [null,null,null,null,null,null,null];
(statearr_38193[(0)] = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__);

(statearr_38193[(1)] = (1));

return statearr_38193;
});
var gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1 = (function (state_38188){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38194){if((e38194 instanceof Object)){
var ex__35015__auto__ = e38194;
var statearr_38195_38202 = state_38188;
(statearr_38195_38202[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38203 = state_38188;
state_38188 = G__38203;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__ = function(state_38188){
switch(arguments.length){
case 0:
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1.call(this,state_38188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____0;
gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto____1;
return gcclocal$comm$amethods$delete_row_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_38196 = f__35124__auto__.call(null);
(statearr_38196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_38196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
}));
});
/**
 * Получить по ajax справочники
 */
gcclocal.comm.amethods.get_select_list_for = (function gcclocal$comm$amethods$get_select_list_for(url){
var s_list = cljs.core.atom.call(null,null);
gcclocal.comm.utils.get_json.call(null,url,cljs.core.PersistentArrayMap.EMPTY,((function (s_list){
return (function (resp){
return cljs.core.reset_BANG_.call(null,s_list,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(resp));
});})(s_list))
);

return s_list;
});
/**
 * Получить по ajax справочник для переданного атома
 */
gcclocal.comm.amethods.get_select_list_for_atom = (function gcclocal$comm$amethods$get_select_list_for_atom(r_atom,url){
return gcclocal.comm.utils.get_json.call(null,url,cljs.core.PersistentArrayMap.EMPTY,(function (resp){
return cljs.core.reset_BANG_.call(null,r_atom,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(resp));
}));
});

//# sourceMappingURL=amethods.js.map