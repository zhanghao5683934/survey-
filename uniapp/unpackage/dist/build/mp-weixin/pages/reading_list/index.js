(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reading_list/index"],{"2e27":function(t,i,n){"use strict";n.r(i);var s=n("7646"),e=n("a454");for(var a in e)"default"!==a&&function(t){n.d(i,t,(function(){return e[t]}))}(a);n("5d9c");var r,c=n("f0c5"),o=Object(c["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],r);i["default"]=o.exports},"3e7f":function(t,i,n){"use strict";(function(t){n("c5a6");s(n("66fd"));var i=s(n("2e27"));function s(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},"5d9c":function(t,i,n){"use strict";var s=n("7c8c"),e=n.n(s);e.a},"6c58":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e(n("89dc"));function e(t){return t&&t.__esModule?t:{default:t}}function a(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}var r=getApp(),c=t.getBackgroundAudioManager({}),o={data:function(){return{is_show_result:"0",start_time:0,reading_id:"0",info:[],index:-1,is_zhe_show:"0",is_zhe_top:"0",scrollH:0,check_ti:"",tiList:[],current:"0",tilist_c:{},currentQid:1,ti_info_abc:["A","B","C","D","E","F","G","H"],right_cuo:[],user_answer:{dui_num:0,cuo_num:0,ti_data:[]},panduan:{is_end:"0"},user_ans:{},dingxiang:{ans:[],key:{0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7"},start_check:[],abc:[]},result:{}}},onShow:function(){""!=r.globalData.userInfo||t.navigateTo({url:"../login/index"})},onReady:function(){var i=this;t.getSystemInfo({success:function(t){i.windowHeight=t.windowHeight,i.scrollH=750*t.windowHeight/t.windowWidth-450,i.scrollH=750*t.windowHeight/t.windowWidth-parseInt(t.safeArea.top)-530}})},onUnload:function(){c.stop()},onLoad:function(t){var i=this,n=r.globalData.site_url+"/appapi/?s=Home.getReadingList";s.default.requestApi(n,{id:t.id}).then((function(t){if(i.info=t.data.info[0],void 0!=t.data.info[0].list)for(var n=0;n<t.data.info[0].list.length;n++){var s=t.data.info[0].list[n];s.playInfo={isplay:0,length:"00:00"}}}))},methods:{resetDati:function(){for(var t in this.current="0",this.is_show_result="0",this.user_ans.length=0,this.start_time=0,this.currentQid="1",this.right_cuo.length=0,this.user_answer.ti_data.length=0,this.user_ans={},this.tiList)this.dingxiang.ans[t]=[],this.dingxiang.abc[t]=[];this.result={}},datiAgain:function(){this.resetDati()},backIndex:function(){t.reLaunch({url:"../index/index"})},closeDati:function(i){var n,s=this,e=this;"0"==i&&t.showModal((n={title:"是否退出本次答题?",content:"退出后，本次答题不计入成绩",showCancel:!1,cancelText:"取消",cancelColor:"#969696"},a(n,"showCancel",!0),a(n,"confirmText","确认退出"),a(n,"confirmColor","#FE5A13"),a(n,"success",(function(t){t.confirm&&(e.is_zhe_show="0",e.is_zhe_top="0",s.resetDati())})),a(n,"fail",(function(){})),a(n,"complete",(function(){})),n));"1"==i&&(e.is_zhe_show="0",e.is_zhe_top="0")},checkDingxiang:function(t){0==this.start_time&&(this.start_time=Date.now());var i=this.current;if("is_checked"!=this.dingxiang.abc[i][t]){this.dingxiang.abc[i][t]="is_checked",this.$set(this.dingxiang.abc[i],t,"is_checked");var n=this.tiList[i].answer.rs;n.split(",");for(var s in this.dingxiang.key)this.dingxiang.key[s]++;var e=this.tiList[this.current].id;void 0==this.user_ans[e]&&(this.user_ans[e]=[]);var a=this.dingxiang.ans[i];"-1"!=a.indexOf(t)?(this.dingxiang.ans[i].splice(a.indexOf(t),1),this.dingxiang.abc[i][t]="is_checked",this.$set(this.dingxiang.abc[i],t,"is_checked"),this.user_ans[e].splice(a.indexOf(t),1)):(this.dingxiang.ans[i].push(t),this.dingxiang.abc[i][t]="is_checked",this.$set(this.dingxiang.abc[i],t,"is_checked"),console.log(this.user_ans),this.user_ans[e].push(t)),this.user_answer.ti_data[this.current]="is_end"}},checkDanxuan:function(t){0==this.start_time&&(this.start_time=Date.now());var i=this.tiList[this.current].answer.rs;"is_end"!=this.user_answer.ti_data[this.current]&&this.setAnsCache(i,t)},checkPanduan:function(t){if(0==this.start_time&&(this.start_time=Date.now()),"is_end"!=this.user_answer.ti_data[this.current]){this.tiList[this.current].id.toString();var i=this.tiList[this.current].answer.rs;this.setAnsCache(i,t)}},setAnsCache:function(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=this;r.globalData;s.user_answer.ti_data[s.current]="is_end",s.$set(s.user_answer.ti_data,s.current,"is_end"),""==n&&(t==i?(s.user_answer.dui_num++,s.right_cuo[s.current]="1",s.$set(s.right_cuo,s.current,"1")):(s.user_answer.cuo_num++,s.right_cuo[s.current]="0",s.$set(s.right_cuo,s.current,"0")),console.log(s.right_cuo),s.user_ans[s.tiList[s.current].id]=i)},getTestsList:function(){var i=this;t.request({url:r.globalData.site_url+"/appapi/?s=Tests.getTestsList",method:"GET",data:{reading_id:this.reading_id,uid:r.globalData.userInfo.id,token:r.globalData.userInfo.token},success:function(n){var s=n.data.data.code;if(0==s||(t.showToast({icon:"none",title:n.data.data.msg}),700!=s)){var e=n.data.data.info[0];if(e.length<1)i.tiList.length=0;else{for(var a in e)e[a].answer=JSON.parse(e[a].answer),i.dingxiang.ans[a]=[],i.dingxiang.abc[a]=[];i.tiList=e}}else t.navigateTo({url:"../login/index"})},fail:function(){t.showToast({title:"网络错误,请重试"})}})},checkTi:function(i){if(this.check_ti=i,"1"==i){if("0"==this.current)return;this.current--,this.currentQid--}if("2"==i){if("is_end"!=this.user_answer.ti_data[this.current])return void t.showToast({icon:"none",title:"请先答当前题目"});this.current==this.tiList.length-1&&this.subTests(),this.current++,this.currentQid++}},subTests:function(){var i=this,n=r.globalData.site_url+"/appapi/?s=Tests.subTests";t.request({url:n,method:"GET",data:{uid:r.globalData.userInfo.id,token:r.globalData.userInfo.token,testsid:i.reading_id,answer:JSON.stringify(i.user_ans),start_time:i.start_time},success:function(n){if(0==n.data.data.code){i.result=n.data.data.info;var s=n.data.data.info["res_score"];s>0&&t.showToast({title:"积分+"+s,image:"../../static/images/jifen_shan.png",mask:!0}),setTimeout((function(){i.is_show_result="1"}),1e3)}else t.showToast({icon:"none",title:"提交失败, 请重试"})},fail:function(){t.showToast({icon:"none",title:"网络错误"})}})},play:function(t){var i=t.currentTarget.dataset.index,n=t.currentTarget.dataset.isplay,s=t.currentTarget.dataset.url;this.info;-1!=this.index&&this.index!=i&&(this.info.list[this.index].playInfo.isplay=2),c.title=this.info.list[i].title,0==n&&(this.info.list[i].playInfo.isplay=1,c.src=s,c.play()),1==n&&(this.info.list[i].playInfo.isplay=2,this.index!=i&&(c.src=s),c.pause()),2==n&&(this.info.list[i].playInfo.isplay=1,this.index!=i&&(c.src=s),c.play()),this.$forceUpdate(),this.index=i,this.reading_id=t.currentTarget.dataset.id,this.getTestsList()}},created:function(){var t=this;c.onEnded((function(){t.tiList.length<1||(t.is_zhe_show="1",t.is_zhe_top="1")}))}};i.default=o}).call(this,n("543d")["default"])},7646:function(t,i,n){"use strict";var s;n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return s}));var e=function(){var t=this,i=t.$createElement,n=(t._self._c,"1"==t.is_zhe_show&&void 0!=t.tiList[t.current]&&"0"==t.is_show_result&&"2"==t.tiList[t.current].type?t.__map(t.tiList[t.current].answer.ans,(function(i,n){var s=t.__get_orig(i),e="is_checked"==t.dingxiang.abc[t.current][n]?t.tiList[t.current].answer.rs.indexOf(n):null,a="is_checked"==t.dingxiang.abc[t.current][n]&&"-1"==e?t.tiList[t.current].answer.rs.indexOf(n):null,r="is_checked"==t.dingxiang.abc[t.current][n]&&"-1"==e?t.dingxiang.ans[t.current].indexOf(n):null;return{$orig:s,g0:e,g1:a,g2:r}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},a=[]},"7c8c":function(t,i,n){},a454:function(t,i,n){"use strict";n.r(i);var s=n("6c58"),e=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(i,t,(function(){return s[t]}))}(a);i["default"]=e.a}},[["3e7f","common/runtime","common/vendor"]]]);