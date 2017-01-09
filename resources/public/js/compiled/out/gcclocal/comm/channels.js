// Compiled by ClojureScript 1.9.89 {}
goog.provide('gcclocal.comm.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gcclocal.comm.utils');
/**
 * Инициализация канала для сообщений
 */
gcclocal.comm.channels.init_notify_ch = (function gcclocal$comm$channels$init_notify_ch(){
var notify_ch = cljs.core.async.chan.call(null);
var c__35123__auto___38392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___38392,notify_ch){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___38392,notify_ch){
return (function (state_38376){
var state_val_38377 = (state_38376[(1)]);
if((state_val_38377 === (1))){
var state_38376__$1 = state_38376;
var statearr_38378_38393 = state_38376__$1;
(statearr_38378_38393[(2)] = null);

(statearr_38378_38393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38377 === (2))){
var state_38376__$1 = state_38376;
var statearr_38379_38394 = state_38376__$1;
(statearr_38379_38394[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38377 === (3))){
var inst_38374 = (state_38376[(2)]);
var state_38376__$1 = state_38376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38376__$1,inst_38374);
} else {
if((state_val_38377 === (4))){
var state_38376__$1 = state_38376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38376__$1,(7),notify_ch);
} else {
if((state_val_38377 === (5))){
var state_38376__$1 = state_38376;
var statearr_38381_38395 = state_38376__$1;
(statearr_38381_38395[(2)] = null);

(statearr_38381_38395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38377 === (6))){
var inst_38372 = (state_38376[(2)]);
var state_38376__$1 = state_38376;
var statearr_38382_38396 = state_38376__$1;
(statearr_38382_38396[(2)] = inst_38372);

(statearr_38382_38396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38377 === (7))){
var inst_38367 = (state_38376[(2)]);
var inst_38368 = gcclocal.comm.utils.notify_message.call(null,inst_38367);
var state_38376__$1 = (function (){var statearr_38383 = state_38376;
(statearr_38383[(7)] = inst_38368);

return statearr_38383;
})();
var statearr_38384_38397 = state_38376__$1;
(statearr_38384_38397[(2)] = null);

(statearr_38384_38397[(1)] = (2));


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
});})(c__35123__auto___38392,notify_ch))
;
return ((function (switch__35011__auto__,c__35123__auto___38392,notify_ch){
return (function() {
var gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto__ = null;
var gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto____0 = (function (){
var statearr_38388 = [null,null,null,null,null,null,null,null];
(statearr_38388[(0)] = gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto__);

(statearr_38388[(1)] = (1));

return statearr_38388;
});
var gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto____1 = (function (state_38376){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38389){if((e38389 instanceof Object)){
var ex__35015__auto__ = e38389;
var statearr_38390_38398 = state_38376;
(statearr_38390_38398[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38399 = state_38376;
state_38376 = G__38399;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto__ = function(state_38376){
switch(arguments.length){
case 0:
return gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto____1.call(this,state_38376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto____0;
gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto____1;
return gcclocal$comm$channels$init_notify_ch_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___38392,notify_ch))
})();
var state__35125__auto__ = (function (){var statearr_38391 = f__35124__auto__.call(null);
(statearr_38391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38392);

return statearr_38391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___38392,notify_ch))
);


return notify_ch;
});
/**
 * Инициализация канала для обновления строк
 */
gcclocal.comm.channels.init_refresh_rows_ch = (function gcclocal$comm$channels$init_refresh_rows_ch(refresh_fn){
var refresh_rows_ch = cljs.core.async.chan.call(null);
var c__35123__auto___38456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___38456,refresh_rows_ch){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___38456,refresh_rows_ch){
return (function (state_38440){
var state_val_38441 = (state_38440[(1)]);
if((state_val_38441 === (1))){
var state_38440__$1 = state_38440;
var statearr_38442_38457 = state_38440__$1;
(statearr_38442_38457[(2)] = null);

(statearr_38442_38457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (2))){
var state_38440__$1 = state_38440;
var statearr_38443_38458 = state_38440__$1;
(statearr_38443_38458[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (3))){
var inst_38438 = (state_38440[(2)]);
var state_38440__$1 = state_38440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38440__$1,inst_38438);
} else {
if((state_val_38441 === (4))){
var state_38440__$1 = state_38440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38440__$1,(7),refresh_rows_ch);
} else {
if((state_val_38441 === (5))){
var state_38440__$1 = state_38440;
var statearr_38445_38459 = state_38440__$1;
(statearr_38445_38459[(2)] = null);

(statearr_38445_38459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (6))){
var inst_38436 = (state_38440[(2)]);
var state_38440__$1 = state_38440;
var statearr_38446_38460 = state_38440__$1;
(statearr_38446_38460[(2)] = inst_38436);

(statearr_38446_38460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (7))){
var inst_38431 = (state_38440[(2)]);
var inst_38432 = refresh_fn.call(null,inst_38431);
var state_38440__$1 = (function (){var statearr_38447 = state_38440;
(statearr_38447[(7)] = inst_38432);

return statearr_38447;
})();
var statearr_38448_38461 = state_38440__$1;
(statearr_38448_38461[(2)] = null);

(statearr_38448_38461[(1)] = (2));


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
});})(c__35123__auto___38456,refresh_rows_ch))
;
return ((function (switch__35011__auto__,c__35123__auto___38456,refresh_rows_ch){
return (function() {
var gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto__ = null;
var gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto____0 = (function (){
var statearr_38452 = [null,null,null,null,null,null,null,null];
(statearr_38452[(0)] = gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto__);

(statearr_38452[(1)] = (1));

return statearr_38452;
});
var gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto____1 = (function (state_38440){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38453){if((e38453 instanceof Object)){
var ex__35015__auto__ = e38453;
var statearr_38454_38462 = state_38440;
(statearr_38454_38462[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38463 = state_38440;
state_38440 = G__38463;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto__ = function(state_38440){
switch(arguments.length){
case 0:
return gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto____1.call(this,state_38440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto____0;
gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto____1;
return gcclocal$comm$channels$init_refresh_rows_ch_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___38456,refresh_rows_ch))
})();
var state__35125__auto__ = (function (){var statearr_38455 = f__35124__auto__.call(null);
(statearr_38455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38456);

return statearr_38455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___38456,refresh_rows_ch))
);


return refresh_rows_ch;
});
/**
 * Иниц. канала для смены страницы
 */
gcclocal.comm.channels.init_change_page_ch = (function gcclocal$comm$channels$init_change_page_ch(change_page_fn){
var change_page_ch = cljs.core.async.chan.call(null);
var c__35123__auto___38520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___38520,change_page_ch){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___38520,change_page_ch){
return (function (state_38504){
var state_val_38505 = (state_38504[(1)]);
if((state_val_38505 === (1))){
var state_38504__$1 = state_38504;
var statearr_38506_38521 = state_38504__$1;
(statearr_38506_38521[(2)] = null);

(statearr_38506_38521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38505 === (2))){
var state_38504__$1 = state_38504;
var statearr_38507_38522 = state_38504__$1;
(statearr_38507_38522[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38505 === (3))){
var inst_38502 = (state_38504[(2)]);
var state_38504__$1 = state_38504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38504__$1,inst_38502);
} else {
if((state_val_38505 === (4))){
var state_38504__$1 = state_38504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38504__$1,(7),change_page_ch);
} else {
if((state_val_38505 === (5))){
var state_38504__$1 = state_38504;
var statearr_38509_38523 = state_38504__$1;
(statearr_38509_38523[(2)] = null);

(statearr_38509_38523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38505 === (6))){
var inst_38500 = (state_38504[(2)]);
var state_38504__$1 = state_38504;
var statearr_38510_38524 = state_38504__$1;
(statearr_38510_38524[(2)] = inst_38500);

(statearr_38510_38524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38505 === (7))){
var inst_38495 = (state_38504[(2)]);
var inst_38496 = change_page_fn.call(null,inst_38495);
var state_38504__$1 = (function (){var statearr_38511 = state_38504;
(statearr_38511[(7)] = inst_38496);

return statearr_38511;
})();
var statearr_38512_38525 = state_38504__$1;
(statearr_38512_38525[(2)] = null);

(statearr_38512_38525[(1)] = (2));


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
});})(c__35123__auto___38520,change_page_ch))
;
return ((function (switch__35011__auto__,c__35123__auto___38520,change_page_ch){
return (function() {
var gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto__ = null;
var gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto____0 = (function (){
var statearr_38516 = [null,null,null,null,null,null,null,null];
(statearr_38516[(0)] = gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto__);

(statearr_38516[(1)] = (1));

return statearr_38516;
});
var gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto____1 = (function (state_38504){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_38504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e38517){if((e38517 instanceof Object)){
var ex__35015__auto__ = e38517;
var statearr_38518_38526 = state_38504;
(statearr_38518_38526[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38527 = state_38504;
state_38504 = G__38527;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto__ = function(state_38504){
switch(arguments.length){
case 0:
return gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto____0.call(this);
case 1:
return gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto____1.call(this,state_38504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto____0;
gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto____1;
return gcclocal$comm$channels$init_change_page_ch_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___38520,change_page_ch))
})();
var state__35125__auto__ = (function (){var statearr_38519 = f__35124__auto__.call(null);
(statearr_38519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___38520);

return statearr_38519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___38520,change_page_ch))
);


return change_page_ch;
});

//# sourceMappingURL=channels.js.map