webpackJsonp([13],{"6N35":function(t,e){},HePk:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("BO1k"),n=i.n(a),o=i("gBtx"),r=i.n(o),s=i("7+uW"),l=(i("NYxO"),{name:"myOrder",components:{PublicgrayTitle:i("/bPy").a},data:function(){return{myorderlist:[],Timer:[],goodsidlist:[]}},methods:{initData:function(){var t=this,e=localStorage.getItem("userid");this.axios.get(this.$domain+"/api/orderForm",{params:{userid:e}}).then(function(e){t.myorderlist=e.data;var i=new Date,a=r()(i.getTime()/1e3),o=function(e){var i=e.dueDate-a,n=1;i<0&&(i=0,n=0),s.default.set(e,"time",i),s.default.set(e,"iftime",n);var o=setInterval(function(){e.time<=0?clearInterval(o):e.time--},1e3);t.Timer.push(o)},l=!0,c=!1,u=void 0;try{for(var d,v=n()(t.myorderlist);!(l=(d=v.next()).done);l=!0){o(d.value)}}catch(t){c=!0,u=t}finally{try{!l&&v.return&&v.return()}finally{if(c)throw u}}t.ifevaluated()}).catch(function(t){console.log(+t)})},comfirm_receipt:function(t,e){var i=this;this.$confirm("您确定要确认收货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.$message({type:"success",message:"您已成功确认收货！"}),i.myorderlist.forEach(function(a,n){t===n&&(i.clearTimer(t,e),a.iftime=0)})})},clearTimer:function(t,e){var i=this.Timer[t];clearInterval(i),this.axios.get(this.$domain+"/api/orderForm/update",{params:{orderid:e}}).then(function(t){console.log(t.data)}).catch(function(t){console.log(t)})},looklogistics:function(){this.$router.push({path:"logistics"})},evaluatenow:function(t,e){this.$router.push({path:"/evaluate",query:{id:t}}),this.$store.state.evalgoods=e},ifevaluated:function(){var t=this,e=localStorage.getItem("userid");this.axios.get(this.$domain+"/api/evaluateInfo",{params:{userid:e}}).then(function(e){var i=e.data,a=[],o=!0,r=!1,l=void 0;try{for(var c,u=n()(i);!(o=(c=u.next()).done);o=!0){var d=c.value;a.push(d.goodsid)}}catch(t){r=!0,l=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw l}}var v=!0,f=!1,m=void 0;try{for(var _,h=n()(t.myorderlist);!(v=(_=h.next()).done);v=!0){var g=_.value;s.default.set(g,"ifeval",0);for(var p=0;p<a.length;p++)g.goodsid===a[p]&&(g.ifeval=1)}}catch(t){f=!0,m=t}finally{try{!v&&h.return&&h.return()}finally{if(f)throw m}}}).catch(function(t){console.log(t)})},deleteOrder:function(t){var e=this;this.axios.delete(this.$domain+"/api/orderForm",{params:{orderid:t}}).then(function(t){console.log(t.data),e.initData()}).catch(function(t){console.log(t)})}},mounted:function(){this.initData()}}),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("publicgray-title",[t._v("我的订单")]),t._v(" "),t.myorderlist.length?a("div",{staticClass:"container"},t._l(t.myorderlist,function(e,i){return a("div",{key:i,staticClass:"content"},[a("h4",[t._v("商品"+t._s(i+1)),a("i",{staticClass:"el-icon-arrow-right"})]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:e.goodsimg,alt:"订单图片"}})]),t._v(" "),a("li",[t._v("商品名称："+t._s(e.goodsname))]),t._v(" "),a("li",[t._v("共"+t._s(e.count)+"件商品")]),t._v(" "),a("li",[t._v("单价："+t._s(e.price)+"元")]),t._v(" "),a("li",[t._v("邮费："+t._s(e.postage)+"元")]),t._v(" "),a("li",[t._v("合计："+t._s(e.price*e.count*1+1*e.postage)+"元")])]),t._v(" "),a("div",{staticClass:"bottom"},[1===e.iftime?[a("span",[t._v("距离自动收货还有：\n          "+t._s(Number.parseInt(e.time/86400))+"天\n          "+t._s(Number.parseInt(e.time%86400/3600))+"时\n          "+t._s(Number.parseInt(e.time%86400%3600/60))+"分\n          "+t._s(e.time%86400%60)+"秒\n        ")]),t._v(" "),a("el-button",{on:{click:function(a){t.comfirm_receipt(i,e._id)}}},[t._v("确认收货")]),t._v(" "),a("el-button",{on:{click:t.looklogistics}},[t._v("查看物流")])]:[a("el-button",{attrs:{type:"danger",disabled:""}},[t._v("已签收")]),t._v(" "),0===e.ifeval?a("el-button",{on:{click:function(i){t.evaluatenow(e.goodsid,e)}}},[t._v("立即评价")]):t._e(),t._v(" "),1===e.ifeval?a("el-button",{attrs:{type:"danger",disabled:""}},[t._v("已评价")]):t._e(),t._v(" "),a("el-button",{on:{click:function(i){t.deleteOrder(e._id)}}},[t._v("删除订单")])]],2)])}),0):a("div",{staticClass:"empty"},[a("img",{attrs:{src:i("9vqY"),alt:"我的订单为空"}})])],1)},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(t){i("6N35")},"data-v-4aabbbd6",null);e.default=u.exports}});
//# sourceMappingURL=13.90f3e67b5202672168d0.js.map