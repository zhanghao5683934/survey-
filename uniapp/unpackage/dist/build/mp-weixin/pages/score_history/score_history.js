(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/score_history/score_history"],{"1e30":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),o={data:function(){return{course_info:{},history:{},reason_arr:{1:"每日登录",2:"阅读文章",3:"留言",4:"答题",5:"商城兑换"}}},onLoad:function(){this.getScoreHistory()},methods:{getScoreHistory:function(){var e=this;t.request({url:n.globalData.site_url+"/appapi/?s=User.GetScoreHistory",method:"GET",data:{uid:n.globalData.userInfo.id,token:n.globalData.userInfo.token},success:function(t){console.log(t),0==t.data.data.code&&(e.history=t.data.data.info[0])},fail:function(){},complete:function(){}})}}};e.default=o}).call(this,n("543d")["default"])},"36b2":function(t,e,n){},3845:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"73c4":function(t,e,n){"use strict";n.r(e);var o=n("1e30"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},aa60:function(t,e,n){"use strict";n.r(e);var o=n("3845"),a=n("73c4");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d334");var u,c=n("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=i.exports},d334:function(t,e,n){"use strict";var o=n("36b2"),a=n.n(o);a.a},e3e1:function(t,e,n){"use strict";(function(t){n("c5a6");o(n("66fd"));var e=o(n("aa60"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["e3e1","common/runtime","common/vendor"]]]);