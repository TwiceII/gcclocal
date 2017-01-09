// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('gcclocal.comm.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.utils');
/**
 * Инициализация канала для сообщений
 */
gcclocal.comm.channels.init_notify_ch = (function gcclocal$comm$channels$init_notify_ch(){
var notify_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__38096__auto___51912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___51912,notify_ch){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___51912,notify_ch){
return (function (state_51896){
var state_val_51897 = (state_51896[(1)]);
if((state_val_51897 === (1))){
var state_51896__$1 = state_51896;
var statearr_51898_51913 = state_51896__$1;
(statearr_51898_51913[(2)] = null);

(statearr_51898_51913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_51897 === (2))){
var state_51896__$1 = state_51896;
var statearr_51899_51914 = state_51896__$1;
(statearr_51899_51914[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_51897 === (3))){
var inst_51894 = (state_51896[(2)]);
var state_51896__$1 = state_51896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51896__$1,inst_51894);
} else {
if((state_val_51897 === (4))){
var state_51896__$1 = state_51896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51896__$1,(7),notify_ch);
} else {
if((state_val_51897 === (5))){
var state_51896__$1 = state_51896;
var statearr_51901_51915 = state_51896__$1;
(statearr_51901_51915[(2)] = null);

(statearr_51901_51915[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_51897 === (6))){
var inst_51892 = (state_51896[(2)]);
var state_51896__$1 = state_51896;
var statearr_51902_51916 = state_51896__$1;
(statearr_51902_51916[(2)] = inst_51892);

(statearr_51902_51916[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_51897 === (7))){
var inst_51887 = (state_51896[(2)]);
var inst_51888 = gcclocal.comm.utils.notify_message(inst_51887);
var state_51896__$1 = (function (){var statearr_51903 = state_51896;
(statearr_51903[(7)] = inst_51888);

return statearr_51903;
})();
var statearr_51904_51917 = state_51896__$1;
(statearr_51904_51917[(2)] = null);

(statearr_51904_51917[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__38096__auto___51912,notify_ch))
;
return ((function (switch__37982__auto__,c__38096__auto___51912,notify_ch){
return (function() {
var gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto__ = null;
var gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto____0 = (function (){
var statearr_51908 = [null,null,null,null,null,null,null,null];
(statearr_51908[(0)] = gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto__);

(statearr_51908[(1)] = (1));

return statearr_51908;
});
var gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto____1 = (function (state_51896){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_51896);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e51909){if((e51909 instanceof Object)){
var ex__37986__auto__ = e51909;
var statearr_51910_51918 = state_51896;
(statearr_51910_51918[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51896);

return cljs.core.cst$kw$recur;
} else {
throw e51909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__51919 = state_51896;
state_51896 = G__51919;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto__ = function(state_51896){
switch(arguments.length){
case 0:
return gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto____1.call(this,state_51896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto____0;
gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto____1;
return gcclocal$comm$channels$init_notify_ch_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___51912,notify_ch))
})();
var state__38098__auto__ = (function (){var statearr_51911 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_51911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___51912);

return statearr_51911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___51912,notify_ch))
);


return notify_ch;
});
/**
 * Инициализация канала для обновления строк
 */
gcclocal.comm.channels.init_refresh_rows_ch = (function gcclocal$comm$channels$init_refresh_rows_ch(refresh_fn){
var refresh_rows_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__38096__auto___51976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___51976,refresh_rows_ch){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___51976,refresh_rows_ch){
return (function (state_51960){
var state_val_51961 = (state_51960[(1)]);
if((state_val_51961 === (1))){
var state_51960__$1 = state_51960;
var statearr_51962_51977 = state_51960__$1;
(statearr_51962_51977[(2)] = null);

(statearr_51962_51977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_51961 === (2))){
var state_51960__$1 = state_51960;
var statearr_51963_51978 = state_51960__$1;
(statearr_51963_51978[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_51961 === (3))){
var inst_51958 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51960__$1,inst_51958);
} else {
if((state_val_51961 === (4))){
var state_51960__$1 = state_51960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51960__$1,(7),refresh_rows_ch);
} else {
if((state_val_51961 === (5))){
var state_51960__$1 = state_51960;
var statearr_51965_51979 = state_51960__$1;
(statearr_51965_51979[(2)] = null);

(statearr_51965_51979[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_51961 === (6))){
var inst_51956 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
var statearr_51966_51980 = state_51960__$1;
(statearr_51966_51980[(2)] = inst_51956);

(statearr_51966_51980[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_51961 === (7))){
var inst_51951 = (state_51960[(2)]);
var inst_51952 = (refresh_fn.cljs$core$IFn$_invoke$arity$1 ? refresh_fn.cljs$core$IFn$_invoke$arity$1(inst_51951) : refresh_fn.call(null,inst_51951));
var state_51960__$1 = (function (){var statearr_51967 = state_51960;
(statearr_51967[(7)] = inst_51952);

return statearr_51967;
})();
var statearr_51968_51981 = state_51960__$1;
(statearr_51968_51981[(2)] = null);

(statearr_51968_51981[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__38096__auto___51976,refresh_rows_ch))
;
return ((function (switch__37982__auto__,c__38096__auto___51976,refresh_rows_ch){
return (function() {
var gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto__ = null;
var gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto____0 = (function (){
var statearr_51972 = [null,null,null,null,null,null,null,null];
(statearr_51972[(0)] = gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto__);

(statearr_51972[(1)] = (1));

return statearr_51972;
});
var gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto____1 = (function (state_51960){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_51960);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e51973){if((e51973 instanceof Object)){
var ex__37986__auto__ = e51973;
var statearr_51974_51982 = state_51960;
(statearr_51974_51982[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51960);

return cljs.core.cst$kw$recur;
} else {
throw e51973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__51983 = state_51960;
state_51960 = G__51983;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto__ = function(state_51960){
switch(arguments.length){
case 0:
return gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto____1.call(this,state_51960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto____0;
gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto____1;
return gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___51976,refresh_rows_ch))
})();
var state__38098__auto__ = (function (){var statearr_51975 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_51975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___51976);

return statearr_51975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___51976,refresh_rows_ch))
);


return refresh_rows_ch;
});
/**
 * Иниц. канала для смены страницы
 */
gcclocal.comm.channels.init_change_page_ch = (function gcclocal$comm$channels$init_change_page_ch(change_page_fn){
var change_page_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__38096__auto___52040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38096__auto___52040,change_page_ch){
return (function (){
var f__38097__auto__ = (function (){var switch__37982__auto__ = ((function (c__38096__auto___52040,change_page_ch){
return (function (state_52024){
var state_val_52025 = (state_52024[(1)]);
if((state_val_52025 === (1))){
var state_52024__$1 = state_52024;
var statearr_52026_52041 = state_52024__$1;
(statearr_52026_52041[(2)] = null);

(statearr_52026_52041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_52025 === (2))){
var state_52024__$1 = state_52024;
var statearr_52027_52042 = state_52024__$1;
(statearr_52027_52042[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_52025 === (3))){
var inst_52022 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52024__$1,inst_52022);
} else {
if((state_val_52025 === (4))){
var state_52024__$1 = state_52024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52024__$1,(7),change_page_ch);
} else {
if((state_val_52025 === (5))){
var state_52024__$1 = state_52024;
var statearr_52029_52043 = state_52024__$1;
(statearr_52029_52043[(2)] = null);

(statearr_52029_52043[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_52025 === (6))){
var inst_52020 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
var statearr_52030_52044 = state_52024__$1;
(statearr_52030_52044[(2)] = inst_52020);

(statearr_52030_52044[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_52025 === (7))){
var inst_52015 = (state_52024[(2)]);
var inst_52016 = (change_page_fn.cljs$core$IFn$_invoke$arity$1 ? change_page_fn.cljs$core$IFn$_invoke$arity$1(inst_52015) : change_page_fn.call(null,inst_52015));
var state_52024__$1 = (function (){var statearr_52031 = state_52024;
(statearr_52031[(7)] = inst_52016);

return statearr_52031;
})();
var statearr_52032_52045 = state_52024__$1;
(statearr_52032_52045[(2)] = null);

(statearr_52032_52045[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__38096__auto___52040,change_page_ch))
;
return ((function (switch__37982__auto__,c__38096__auto___52040,change_page_ch){
return (function() {
var gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto__ = null;
var gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto____0 = (function (){
var statearr_52036 = [null,null,null,null,null,null,null,null];
(statearr_52036[(0)] = gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto__);

(statearr_52036[(1)] = (1));

return statearr_52036;
});
var gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto____1 = (function (state_52024){
while(true){
var ret_value__37984__auto__ = (function (){try{while(true){
var result__37985__auto__ = switch__37982__auto__(state_52024);
if(cljs.core.keyword_identical_QMARK_(result__37985__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__37985__auto__;
}
break;
}
}catch (e52037){if((e52037 instanceof Object)){
var ex__37986__auto__ = e52037;
var statearr_52038_52046 = state_52024;
(statearr_52038_52046[(5)] = ex__37986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52024);

return cljs.core.cst$kw$recur;
} else {
throw e52037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37984__auto__,cljs.core.cst$kw$recur)){
var G__52047 = state_52024;
state_52024 = G__52047;
continue;
} else {
return ret_value__37984__auto__;
}
break;
}
});
gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto__ = function(state_52024){
switch(arguments.length){
case 0:
return gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto____0.call(this);
case 1:
return gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto____1.call(this,state_52024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto____0;
gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto____1;
return gcclocal$comm$channels$init_change_page_ch_$_state_machine__37983__auto__;
})()
;})(switch__37982__auto__,c__38096__auto___52040,change_page_ch))
})();
var state__38098__auto__ = (function (){var statearr_52039 = (f__38097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38097__auto__.cljs$core$IFn$_invoke$arity$0() : f__38097__auto__.call(null));
(statearr_52039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38096__auto___52040);

return statearr_52039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38098__auto__);
});})(c__38096__auto___52040,change_page_ch))
);


return change_page_ch;
});
