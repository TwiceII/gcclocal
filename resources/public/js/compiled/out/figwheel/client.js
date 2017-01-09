// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__42755 = cljs.core._EQ_;
var expr__42756 = (function (){var or__30577__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e42759){if((e42759 instanceof Error)){
var e = e42759;
return false;
} else {
throw e42759;

}
}})();
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__42755.call(null,"true",expr__42756))){
return true;
} else {
if(cljs.core.truth_(pred__42755.call(null,"false",expr__42756))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__42756)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e42761){if((e42761 instanceof Error)){
var e = e42761;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e42761;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__31659__auto__ = [];
var len__31652__auto___42763 = arguments.length;
var i__31653__auto___42764 = (0);
while(true){
if((i__31653__auto___42764 < len__31652__auto___42763)){
args__31659__auto__.push((arguments[i__31653__auto___42764]));

var G__42765 = (i__31653__auto___42764 + (1));
i__31653__auto___42764 = G__42765;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq42762){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42762));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42766){
var map__42769 = p__42766;
var map__42769__$1 = ((((!((map__42769 == null)))?((((map__42769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42769):map__42769);
var message = cljs.core.get.call(null,map__42769__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42769__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30577__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30577__auto__)){
return or__30577__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30565__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30565__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30565__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35123__auto___42931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___42931,ch){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___42931,ch){
return (function (state_42900){
var state_val_42901 = (state_42900[(1)]);
if((state_val_42901 === (7))){
var inst_42896 = (state_42900[(2)]);
var state_42900__$1 = state_42900;
var statearr_42902_42932 = state_42900__$1;
(statearr_42902_42932[(2)] = inst_42896);

(statearr_42902_42932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (1))){
var state_42900__$1 = state_42900;
var statearr_42903_42933 = state_42900__$1;
(statearr_42903_42933[(2)] = null);

(statearr_42903_42933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (4))){
var inst_42853 = (state_42900[(7)]);
var inst_42853__$1 = (state_42900[(2)]);
var state_42900__$1 = (function (){var statearr_42904 = state_42900;
(statearr_42904[(7)] = inst_42853__$1);

return statearr_42904;
})();
if(cljs.core.truth_(inst_42853__$1)){
var statearr_42905_42934 = state_42900__$1;
(statearr_42905_42934[(1)] = (5));

} else {
var statearr_42906_42935 = state_42900__$1;
(statearr_42906_42935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (15))){
var inst_42860 = (state_42900[(8)]);
var inst_42875 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42860);
var inst_42876 = cljs.core.first.call(null,inst_42875);
var inst_42877 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42876);
var inst_42878 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42877)].join('');
var inst_42879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42878);
var state_42900__$1 = state_42900;
var statearr_42907_42936 = state_42900__$1;
(statearr_42907_42936[(2)] = inst_42879);

(statearr_42907_42936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (13))){
var inst_42884 = (state_42900[(2)]);
var state_42900__$1 = state_42900;
var statearr_42908_42937 = state_42900__$1;
(statearr_42908_42937[(2)] = inst_42884);

(statearr_42908_42937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (6))){
var state_42900__$1 = state_42900;
var statearr_42909_42938 = state_42900__$1;
(statearr_42909_42938[(2)] = null);

(statearr_42909_42938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (17))){
var inst_42882 = (state_42900[(2)]);
var state_42900__$1 = state_42900;
var statearr_42910_42939 = state_42900__$1;
(statearr_42910_42939[(2)] = inst_42882);

(statearr_42910_42939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (3))){
var inst_42898 = (state_42900[(2)]);
var state_42900__$1 = state_42900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42900__$1,inst_42898);
} else {
if((state_val_42901 === (12))){
var inst_42859 = (state_42900[(9)]);
var inst_42873 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42859,opts);
var state_42900__$1 = state_42900;
if(cljs.core.truth_(inst_42873)){
var statearr_42911_42940 = state_42900__$1;
(statearr_42911_42940[(1)] = (15));

} else {
var statearr_42912_42941 = state_42900__$1;
(statearr_42912_42941[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (2))){
var state_42900__$1 = state_42900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42900__$1,(4),ch);
} else {
if((state_val_42901 === (11))){
var inst_42860 = (state_42900[(8)]);
var inst_42865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42866 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42860);
var inst_42867 = cljs.core.async.timeout.call(null,(1000));
var inst_42868 = [inst_42866,inst_42867];
var inst_42869 = (new cljs.core.PersistentVector(null,2,(5),inst_42865,inst_42868,null));
var state_42900__$1 = state_42900;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42900__$1,(14),inst_42869);
} else {
if((state_val_42901 === (9))){
var inst_42860 = (state_42900[(8)]);
var inst_42886 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42887 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42860);
var inst_42888 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42887);
var inst_42889 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42888)].join('');
var inst_42890 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42889);
var state_42900__$1 = (function (){var statearr_42913 = state_42900;
(statearr_42913[(10)] = inst_42886);

return statearr_42913;
})();
var statearr_42914_42942 = state_42900__$1;
(statearr_42914_42942[(2)] = inst_42890);

(statearr_42914_42942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (5))){
var inst_42853 = (state_42900[(7)]);
var inst_42855 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42856 = (new cljs.core.PersistentArrayMap(null,2,inst_42855,null));
var inst_42857 = (new cljs.core.PersistentHashSet(null,inst_42856,null));
var inst_42858 = figwheel.client.focus_msgs.call(null,inst_42857,inst_42853);
var inst_42859 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42858);
var inst_42860 = cljs.core.first.call(null,inst_42858);
var inst_42861 = figwheel.client.autoload_QMARK_.call(null);
var state_42900__$1 = (function (){var statearr_42915 = state_42900;
(statearr_42915[(8)] = inst_42860);

(statearr_42915[(9)] = inst_42859);

return statearr_42915;
})();
if(cljs.core.truth_(inst_42861)){
var statearr_42916_42943 = state_42900__$1;
(statearr_42916_42943[(1)] = (8));

} else {
var statearr_42917_42944 = state_42900__$1;
(statearr_42917_42944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (14))){
var inst_42871 = (state_42900[(2)]);
var state_42900__$1 = state_42900;
var statearr_42918_42945 = state_42900__$1;
(statearr_42918_42945[(2)] = inst_42871);

(statearr_42918_42945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (16))){
var state_42900__$1 = state_42900;
var statearr_42919_42946 = state_42900__$1;
(statearr_42919_42946[(2)] = null);

(statearr_42919_42946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (10))){
var inst_42892 = (state_42900[(2)]);
var state_42900__$1 = (function (){var statearr_42920 = state_42900;
(statearr_42920[(11)] = inst_42892);

return statearr_42920;
})();
var statearr_42921_42947 = state_42900__$1;
(statearr_42921_42947[(2)] = null);

(statearr_42921_42947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42901 === (8))){
var inst_42859 = (state_42900[(9)]);
var inst_42863 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42859,opts);
var state_42900__$1 = state_42900;
if(cljs.core.truth_(inst_42863)){
var statearr_42922_42948 = state_42900__$1;
(statearr_42922_42948[(1)] = (11));

} else {
var statearr_42923_42949 = state_42900__$1;
(statearr_42923_42949[(1)] = (12));

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
});})(c__35123__auto___42931,ch))
;
return ((function (switch__35011__auto__,c__35123__auto___42931,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35012__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35012__auto____0 = (function (){
var statearr_42927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42927[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35012__auto__);

(statearr_42927[(1)] = (1));

return statearr_42927;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35012__auto____1 = (function (state_42900){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_42900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e42928){if((e42928 instanceof Object)){
var ex__35015__auto__ = e42928;
var statearr_42929_42950 = state_42900;
(statearr_42929_42950[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42951 = state_42900;
state_42900 = G__42951;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35012__auto__ = function(state_42900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35012__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35012__auto____1.call(this,state_42900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35012__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35012__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___42931,ch))
})();
var state__35125__auto__ = (function (){var statearr_42930 = f__35124__auto__.call(null);
(statearr_42930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___42931);

return statearr_42930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___42931,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42952_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42952_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42959 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42959){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_42957 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_42958 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42958;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42957;
}}catch (e42956){if((e42956 instanceof Error)){
var e = e42956;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42959], null));
} else {
var e = e42956;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_42959))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42960){
var map__42969 = p__42960;
var map__42969__$1 = ((((!((map__42969 == null)))?((((map__42969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42969):map__42969);
var opts = map__42969__$1;
var build_id = cljs.core.get.call(null,map__42969__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42969,map__42969__$1,opts,build_id){
return (function (p__42971){
var vec__42972 = p__42971;
var seq__42973 = cljs.core.seq.call(null,vec__42972);
var first__42974 = cljs.core.first.call(null,seq__42973);
var seq__42973__$1 = cljs.core.next.call(null,seq__42973);
var map__42975 = first__42974;
var map__42975__$1 = ((((!((map__42975 == null)))?((((map__42975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42975):map__42975);
var msg = map__42975__$1;
var msg_name = cljs.core.get.call(null,map__42975__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42973__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42972,seq__42973,first__42974,seq__42973__$1,map__42975,map__42975__$1,msg,msg_name,_,map__42969,map__42969__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42972,seq__42973,first__42974,seq__42973__$1,map__42975,map__42975__$1,msg,msg_name,_,map__42969,map__42969__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42969,map__42969__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42983){
var vec__42984 = p__42983;
var seq__42985 = cljs.core.seq.call(null,vec__42984);
var first__42986 = cljs.core.first.call(null,seq__42985);
var seq__42985__$1 = cljs.core.next.call(null,seq__42985);
var map__42987 = first__42986;
var map__42987__$1 = ((((!((map__42987 == null)))?((((map__42987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42987):map__42987);
var msg = map__42987__$1;
var msg_name = cljs.core.get.call(null,map__42987__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42985__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42989){
var map__43001 = p__42989;
var map__43001__$1 = ((((!((map__43001 == null)))?((((map__43001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43001):map__43001);
var on_compile_warning = cljs.core.get.call(null,map__43001__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43001__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43001,map__43001__$1,on_compile_warning,on_compile_fail){
return (function (p__43003){
var vec__43004 = p__43003;
var seq__43005 = cljs.core.seq.call(null,vec__43004);
var first__43006 = cljs.core.first.call(null,seq__43005);
var seq__43005__$1 = cljs.core.next.call(null,seq__43005);
var map__43007 = first__43006;
var map__43007__$1 = ((((!((map__43007 == null)))?((((map__43007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43007):map__43007);
var msg = map__43007__$1;
var msg_name = cljs.core.get.call(null,map__43007__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43005__$1;
var pred__43009 = cljs.core._EQ_;
var expr__43010 = msg_name;
if(cljs.core.truth_(pred__43009.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43010))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43009.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43010))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43001,map__43001__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__,msg_hist,msg_names,msg){
return (function (state_43226){
var state_val_43227 = (state_43226[(1)]);
if((state_val_43227 === (7))){
var inst_43150 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43150)){
var statearr_43228_43274 = state_43226__$1;
(statearr_43228_43274[(1)] = (8));

} else {
var statearr_43229_43275 = state_43226__$1;
(statearr_43229_43275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (20))){
var inst_43220 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43230_43276 = state_43226__$1;
(statearr_43230_43276[(2)] = inst_43220);

(statearr_43230_43276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (27))){
var inst_43216 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43231_43277 = state_43226__$1;
(statearr_43231_43277[(2)] = inst_43216);

(statearr_43231_43277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (1))){
var inst_43143 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43143)){
var statearr_43232_43278 = state_43226__$1;
(statearr_43232_43278[(1)] = (2));

} else {
var statearr_43233_43279 = state_43226__$1;
(statearr_43233_43279[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (24))){
var inst_43218 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43234_43280 = state_43226__$1;
(statearr_43234_43280[(2)] = inst_43218);

(statearr_43234_43280[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (4))){
var inst_43224 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43226__$1,inst_43224);
} else {
if((state_val_43227 === (15))){
var inst_43222 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43235_43281 = state_43226__$1;
(statearr_43235_43281[(2)] = inst_43222);

(statearr_43235_43281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (21))){
var inst_43181 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43236_43282 = state_43226__$1;
(statearr_43236_43282[(2)] = inst_43181);

(statearr_43236_43282[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (31))){
var inst_43205 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43205)){
var statearr_43237_43283 = state_43226__$1;
(statearr_43237_43283[(1)] = (34));

} else {
var statearr_43238_43284 = state_43226__$1;
(statearr_43238_43284[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (32))){
var inst_43214 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43239_43285 = state_43226__$1;
(statearr_43239_43285[(2)] = inst_43214);

(statearr_43239_43285[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (33))){
var inst_43203 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43240_43286 = state_43226__$1;
(statearr_43240_43286[(2)] = inst_43203);

(statearr_43240_43286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (13))){
var inst_43164 = figwheel.client.heads_up.clear.call(null);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(16),inst_43164);
} else {
if((state_val_43227 === (22))){
var inst_43185 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43186 = figwheel.client.heads_up.append_message.call(null,inst_43185);
var state_43226__$1 = state_43226;
var statearr_43241_43287 = state_43226__$1;
(statearr_43241_43287[(2)] = inst_43186);

(statearr_43241_43287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (36))){
var inst_43212 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43242_43288 = state_43226__$1;
(statearr_43242_43288[(2)] = inst_43212);

(statearr_43242_43288[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (29))){
var inst_43196 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43243_43289 = state_43226__$1;
(statearr_43243_43289[(2)] = inst_43196);

(statearr_43243_43289[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (6))){
var inst_43145 = (state_43226[(7)]);
var state_43226__$1 = state_43226;
var statearr_43244_43290 = state_43226__$1;
(statearr_43244_43290[(2)] = inst_43145);

(statearr_43244_43290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (28))){
var inst_43192 = (state_43226[(2)]);
var inst_43193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43194 = figwheel.client.heads_up.display_warning.call(null,inst_43193);
var state_43226__$1 = (function (){var statearr_43245 = state_43226;
(statearr_43245[(8)] = inst_43192);

return statearr_43245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(29),inst_43194);
} else {
if((state_val_43227 === (25))){
var inst_43190 = figwheel.client.heads_up.clear.call(null);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(28),inst_43190);
} else {
if((state_val_43227 === (34))){
var inst_43207 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(37),inst_43207);
} else {
if((state_val_43227 === (17))){
var inst_43172 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43246_43291 = state_43226__$1;
(statearr_43246_43291[(2)] = inst_43172);

(statearr_43246_43291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (3))){
var inst_43162 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43162)){
var statearr_43247_43292 = state_43226__$1;
(statearr_43247_43292[(1)] = (13));

} else {
var statearr_43248_43293 = state_43226__$1;
(statearr_43248_43293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (12))){
var inst_43158 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43249_43294 = state_43226__$1;
(statearr_43249_43294[(2)] = inst_43158);

(statearr_43249_43294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (2))){
var inst_43145 = (state_43226[(7)]);
var inst_43145__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43226__$1 = (function (){var statearr_43250 = state_43226;
(statearr_43250[(7)] = inst_43145__$1);

return statearr_43250;
})();
if(cljs.core.truth_(inst_43145__$1)){
var statearr_43251_43295 = state_43226__$1;
(statearr_43251_43295[(1)] = (5));

} else {
var statearr_43252_43296 = state_43226__$1;
(statearr_43252_43296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (23))){
var inst_43188 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43188)){
var statearr_43253_43297 = state_43226__$1;
(statearr_43253_43297[(1)] = (25));

} else {
var statearr_43254_43298 = state_43226__$1;
(statearr_43254_43298[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (35))){
var state_43226__$1 = state_43226;
var statearr_43255_43299 = state_43226__$1;
(statearr_43255_43299[(2)] = null);

(statearr_43255_43299[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (19))){
var inst_43183 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43183)){
var statearr_43256_43300 = state_43226__$1;
(statearr_43256_43300[(1)] = (22));

} else {
var statearr_43257_43301 = state_43226__$1;
(statearr_43257_43301[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (11))){
var inst_43154 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43258_43302 = state_43226__$1;
(statearr_43258_43302[(2)] = inst_43154);

(statearr_43258_43302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (9))){
var inst_43156 = figwheel.client.heads_up.clear.call(null);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(12),inst_43156);
} else {
if((state_val_43227 === (5))){
var inst_43147 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43226__$1 = state_43226;
var statearr_43259_43303 = state_43226__$1;
(statearr_43259_43303[(2)] = inst_43147);

(statearr_43259_43303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (14))){
var inst_43174 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43174)){
var statearr_43260_43304 = state_43226__$1;
(statearr_43260_43304[(1)] = (18));

} else {
var statearr_43261_43305 = state_43226__$1;
(statearr_43261_43305[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (26))){
var inst_43198 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43198)){
var statearr_43262_43306 = state_43226__$1;
(statearr_43262_43306[(1)] = (30));

} else {
var statearr_43263_43307 = state_43226__$1;
(statearr_43263_43307[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (16))){
var inst_43166 = (state_43226[(2)]);
var inst_43167 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43168 = figwheel.client.format_messages.call(null,inst_43167);
var inst_43169 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43170 = figwheel.client.heads_up.display_error.call(null,inst_43168,inst_43169);
var state_43226__$1 = (function (){var statearr_43264 = state_43226;
(statearr_43264[(9)] = inst_43166);

return statearr_43264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(17),inst_43170);
} else {
if((state_val_43227 === (30))){
var inst_43200 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43201 = figwheel.client.heads_up.display_warning.call(null,inst_43200);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(33),inst_43201);
} else {
if((state_val_43227 === (10))){
var inst_43160 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43265_43308 = state_43226__$1;
(statearr_43265_43308[(2)] = inst_43160);

(statearr_43265_43308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (18))){
var inst_43176 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43177 = figwheel.client.format_messages.call(null,inst_43176);
var inst_43178 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43179 = figwheel.client.heads_up.display_error.call(null,inst_43177,inst_43178);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(21),inst_43179);
} else {
if((state_val_43227 === (37))){
var inst_43209 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43266_43309 = state_43226__$1;
(statearr_43266_43309[(2)] = inst_43209);

(statearr_43266_43309[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (8))){
var inst_43152 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(11),inst_43152);
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
});})(c__35123__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35011__auto__,c__35123__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto____0 = (function (){
var statearr_43270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43270[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto__);

(statearr_43270[(1)] = (1));

return statearr_43270;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto____1 = (function (state_43226){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43271){if((e43271 instanceof Object)){
var ex__35015__auto__ = e43271;
var statearr_43272_43310 = state_43226;
(statearr_43272_43310[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43311 = state_43226;
state_43226 = G__43311;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto__ = function(state_43226){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto____1.call(this,state_43226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__,msg_hist,msg_names,msg))
})();
var state__35125__auto__ = (function (){var statearr_43273 = f__35124__auto__.call(null);
(statearr_43273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__,msg_hist,msg_names,msg))
);

return c__35123__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35123__auto___43374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto___43374,ch){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto___43374,ch){
return (function (state_43357){
var state_val_43358 = (state_43357[(1)]);
if((state_val_43358 === (1))){
var state_43357__$1 = state_43357;
var statearr_43359_43375 = state_43357__$1;
(statearr_43359_43375[(2)] = null);

(statearr_43359_43375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (2))){
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43357__$1,(4),ch);
} else {
if((state_val_43358 === (3))){
var inst_43355 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43357__$1,inst_43355);
} else {
if((state_val_43358 === (4))){
var inst_43345 = (state_43357[(7)]);
var inst_43345__$1 = (state_43357[(2)]);
var state_43357__$1 = (function (){var statearr_43360 = state_43357;
(statearr_43360[(7)] = inst_43345__$1);

return statearr_43360;
})();
if(cljs.core.truth_(inst_43345__$1)){
var statearr_43361_43376 = state_43357__$1;
(statearr_43361_43376[(1)] = (5));

} else {
var statearr_43362_43377 = state_43357__$1;
(statearr_43362_43377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (5))){
var inst_43345 = (state_43357[(7)]);
var inst_43347 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43345);
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43357__$1,(8),inst_43347);
} else {
if((state_val_43358 === (6))){
var state_43357__$1 = state_43357;
var statearr_43363_43378 = state_43357__$1;
(statearr_43363_43378[(2)] = null);

(statearr_43363_43378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (7))){
var inst_43353 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43364_43379 = state_43357__$1;
(statearr_43364_43379[(2)] = inst_43353);

(statearr_43364_43379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (8))){
var inst_43349 = (state_43357[(2)]);
var state_43357__$1 = (function (){var statearr_43365 = state_43357;
(statearr_43365[(8)] = inst_43349);

return statearr_43365;
})();
var statearr_43366_43380 = state_43357__$1;
(statearr_43366_43380[(2)] = null);

(statearr_43366_43380[(1)] = (2));


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
});})(c__35123__auto___43374,ch))
;
return ((function (switch__35011__auto__,c__35123__auto___43374,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35012__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35012__auto____0 = (function (){
var statearr_43370 = [null,null,null,null,null,null,null,null,null];
(statearr_43370[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35012__auto__);

(statearr_43370[(1)] = (1));

return statearr_43370;
});
var figwheel$client$heads_up_plugin_$_state_machine__35012__auto____1 = (function (state_43357){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43371){if((e43371 instanceof Object)){
var ex__35015__auto__ = e43371;
var statearr_43372_43381 = state_43357;
(statearr_43372_43381[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43382 = state_43357;
state_43357 = G__43382;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35012__auto__ = function(state_43357){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35012__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35012__auto____1.call(this,state_43357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35012__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35012__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto___43374,ch))
})();
var state__35125__auto__ = (function (){var statearr_43373 = f__35124__auto__.call(null);
(statearr_43373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto___43374);

return statearr_43373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto___43374,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35123__auto__){
return (function (){
var f__35124__auto__ = (function (){var switch__35011__auto__ = ((function (c__35123__auto__){
return (function (state_43403){
var state_val_43404 = (state_43403[(1)]);
if((state_val_43404 === (1))){
var inst_43398 = cljs.core.async.timeout.call(null,(3000));
var state_43403__$1 = state_43403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43403__$1,(2),inst_43398);
} else {
if((state_val_43404 === (2))){
var inst_43400 = (state_43403[(2)]);
var inst_43401 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43403__$1 = (function (){var statearr_43405 = state_43403;
(statearr_43405[(7)] = inst_43400);

return statearr_43405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43403__$1,inst_43401);
} else {
return null;
}
}
});})(c__35123__auto__))
;
return ((function (switch__35011__auto__,c__35123__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35012__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35012__auto____0 = (function (){
var statearr_43409 = [null,null,null,null,null,null,null,null];
(statearr_43409[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35012__auto__);

(statearr_43409[(1)] = (1));

return statearr_43409;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35012__auto____1 = (function (state_43403){
while(true){
var ret_value__35013__auto__ = (function (){try{while(true){
var result__35014__auto__ = switch__35011__auto__.call(null,state_43403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35014__auto__;
}
break;
}
}catch (e43410){if((e43410 instanceof Object)){
var ex__35015__auto__ = e43410;
var statearr_43411_43413 = state_43403;
(statearr_43411_43413[(5)] = ex__35015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43414 = state_43403;
state_43403 = G__43414;
continue;
} else {
return ret_value__35013__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35012__auto__ = function(state_43403){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35012__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35012__auto____1.call(this,state_43403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35012__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35012__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35012__auto__;
})()
;})(switch__35011__auto__,c__35123__auto__))
})();
var state__35125__auto__ = (function (){var statearr_43412 = f__35124__auto__.call(null);
(statearr_43412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35123__auto__);

return statearr_43412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35125__auto__);
});})(c__35123__auto__))
);

return c__35123__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43415){
var map__43422 = p__43415;
var map__43422__$1 = ((((!((map__43422 == null)))?((((map__43422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43422):map__43422);
var ed = map__43422__$1;
var formatted_exception = cljs.core.get.call(null,map__43422__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43422__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43422__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43424_43428 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43425_43429 = null;
var count__43426_43430 = (0);
var i__43427_43431 = (0);
while(true){
if((i__43427_43431 < count__43426_43430)){
var msg_43432 = cljs.core._nth.call(null,chunk__43425_43429,i__43427_43431);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43432);

var G__43433 = seq__43424_43428;
var G__43434 = chunk__43425_43429;
var G__43435 = count__43426_43430;
var G__43436 = (i__43427_43431 + (1));
seq__43424_43428 = G__43433;
chunk__43425_43429 = G__43434;
count__43426_43430 = G__43435;
i__43427_43431 = G__43436;
continue;
} else {
var temp__4657__auto___43437 = cljs.core.seq.call(null,seq__43424_43428);
if(temp__4657__auto___43437){
var seq__43424_43438__$1 = temp__4657__auto___43437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43424_43438__$1)){
var c__31388__auto___43439 = cljs.core.chunk_first.call(null,seq__43424_43438__$1);
var G__43440 = cljs.core.chunk_rest.call(null,seq__43424_43438__$1);
var G__43441 = c__31388__auto___43439;
var G__43442 = cljs.core.count.call(null,c__31388__auto___43439);
var G__43443 = (0);
seq__43424_43428 = G__43440;
chunk__43425_43429 = G__43441;
count__43426_43430 = G__43442;
i__43427_43431 = G__43443;
continue;
} else {
var msg_43444 = cljs.core.first.call(null,seq__43424_43438__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43444);

var G__43445 = cljs.core.next.call(null,seq__43424_43438__$1);
var G__43446 = null;
var G__43447 = (0);
var G__43448 = (0);
seq__43424_43428 = G__43445;
chunk__43425_43429 = G__43446;
count__43426_43430 = G__43447;
i__43427_43431 = G__43448;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43449){
var map__43452 = p__43449;
var map__43452__$1 = ((((!((map__43452 == null)))?((((map__43452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43452):map__43452);
var w = map__43452__$1;
var message = cljs.core.get.call(null,map__43452__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30565__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30565__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30565__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43464 = cljs.core.seq.call(null,plugins);
var chunk__43465 = null;
var count__43466 = (0);
var i__43467 = (0);
while(true){
if((i__43467 < count__43466)){
var vec__43468 = cljs.core._nth.call(null,chunk__43465,i__43467);
var k = cljs.core.nth.call(null,vec__43468,(0),null);
var plugin = cljs.core.nth.call(null,vec__43468,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43474 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43464,chunk__43465,count__43466,i__43467,pl_43474,vec__43468,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43474.call(null,msg_hist);
});})(seq__43464,chunk__43465,count__43466,i__43467,pl_43474,vec__43468,k,plugin))
);
} else {
}

var G__43475 = seq__43464;
var G__43476 = chunk__43465;
var G__43477 = count__43466;
var G__43478 = (i__43467 + (1));
seq__43464 = G__43475;
chunk__43465 = G__43476;
count__43466 = G__43477;
i__43467 = G__43478;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43464);
if(temp__4657__auto__){
var seq__43464__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43464__$1)){
var c__31388__auto__ = cljs.core.chunk_first.call(null,seq__43464__$1);
var G__43479 = cljs.core.chunk_rest.call(null,seq__43464__$1);
var G__43480 = c__31388__auto__;
var G__43481 = cljs.core.count.call(null,c__31388__auto__);
var G__43482 = (0);
seq__43464 = G__43479;
chunk__43465 = G__43480;
count__43466 = G__43481;
i__43467 = G__43482;
continue;
} else {
var vec__43471 = cljs.core.first.call(null,seq__43464__$1);
var k = cljs.core.nth.call(null,vec__43471,(0),null);
var plugin = cljs.core.nth.call(null,vec__43471,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43483 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43464,chunk__43465,count__43466,i__43467,pl_43483,vec__43471,k,plugin,seq__43464__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43483.call(null,msg_hist);
});})(seq__43464,chunk__43465,count__43466,i__43467,pl_43483,vec__43471,k,plugin,seq__43464__$1,temp__4657__auto__))
);
} else {
}

var G__43484 = cljs.core.next.call(null,seq__43464__$1);
var G__43485 = null;
var G__43486 = (0);
var G__43487 = (0);
seq__43464 = G__43484;
chunk__43465 = G__43485;
count__43466 = G__43486;
i__43467 = G__43487;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args43488 = [];
var len__31652__auto___43491 = arguments.length;
var i__31653__auto___43492 = (0);
while(true){
if((i__31653__auto___43492 < len__31652__auto___43491)){
args43488.push((arguments[i__31653__auto___43492]));

var G__43493 = (i__31653__auto___43492 + (1));
i__31653__auto___43492 = G__43493;
continue;
} else {
}
break;
}

var G__43490 = args43488.length;
switch (G__43490) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43488.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31659__auto__ = [];
var len__31652__auto___43499 = arguments.length;
var i__31653__auto___43500 = (0);
while(true){
if((i__31653__auto___43500 < len__31652__auto___43499)){
args__31659__auto__.push((arguments[i__31653__auto___43500]));

var G__43501 = (i__31653__auto___43500 + (1));
i__31653__auto___43500 = G__43501;
continue;
} else {
}
break;
}

var argseq__31660__auto__ = ((((0) < args__31659__auto__.length))?(new cljs.core.IndexedSeq(args__31659__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31660__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43496){
var map__43497 = p__43496;
var map__43497__$1 = ((((!((map__43497 == null)))?((((map__43497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43497):map__43497);
var opts = map__43497__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43495){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43495));
});


//# sourceMappingURL=client.js.map