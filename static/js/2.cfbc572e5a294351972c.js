webpackJsonp([2],{FCrV:function(t,a,s){t.exports=s.p+"static/img/cat2.023a76a.jpg"},KWgD:function(t,a,s){t.exports=s.p+"static/img/cat1.9f5f561.jpg"},Y9vA:function(t,a,s){t.exports=s.p+"static/img/cat5.3aa9b09.jpg"},hEWO:function(t,a){},r0AQ:function(t,a,s){t.exports=s.p+"static/img/cat4.3700aac.jpg"},rx7m:function(t,a){},vkyI:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("gBtx"),r=s.n(e),v=s("vUA0"),i=s("dnTX"),_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"foott"},[s("div",{staticClass:"footertop"},[s("div",{staticClass:"title"},[s("h3",[t._v("订单服务")]),t._v(" "),s("h3",[t._v("服务支持")]),t._v(" "),s("h3",[t._v("自助服务")]),t._v(" "),s("h3",[t._v("媒体中心")]),t._v(" "),s("h3",[t._v("关于公司")]),t._v(" "),s("h3",[t._v("关注我们")])]),t._v(" "),s("ul",{staticClass:"list"},[s("li",[s("a",{attrs:{href:""}},[t._v("购买指南")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("售后服务")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("热点咨询")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("新闻动态")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("公司简介")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("新浪微博")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("支付方式")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("维修门店")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("预约购买")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("官方视频")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("加入我们")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("官方微信")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("送货政策")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("零售门店")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("订单物流")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("图片资源")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("联系我们")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("官方贴吧")])])]),t._v(" "),s("div",{staticClass:"phone"},[s("h2",[t._v("177-7329-7786")]),t._v(" "),s("h5",[t._v("周一至周日 9:00-18:00")]),t._v(" "),s("button",[t._v("在线帮助")])])]),t._v(" "),s("div",{staticClass:"footerbottom"},[s("ul",{staticClass:"line1"},[s("li",[s("h5",[t._v("喵呜网")])]),t._v(" "),s("li",[t._v("丨")]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("法律声明")])]),t._v(" "),s("li",[t._v("丨")]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("隐私条款")])]),t._v(" "),s("li",[t._v("丨")]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("开发者中心")])])]),t._v(" "),s("a",{staticClass:"line2",attrs:{href:""}},[t._v("\n      湘ICP备案19005953号  \n    ")])])])}]};var n=s("VU/8")({name:"footNav"},_,!1,function(t){s("rx7m")},"data-v-5009c245",null).exports,l=s("VNyQ"),o={data:function(){return{player:[s("KWgD"),s("FCrV"),s("K/38"),s("r0AQ"),s("Y9vA")],goodslist:[],username:this.$route.query.name,len:0}},components:{goodsNav:i.a,footNav:n,headNav:v.a},methods:{changesome:function(){for(var t=[],a=0;a<10;){var s=r()(Math.random()*this.len);t.push(this.$GoodsList[s]),a++}this.goodslist=t}},mounted:function(){var t=this;Object(l.b)(function(a){t.$store.state.goodslist=a,t.len=a.length,t.changesome()})}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("head-nav",{attrs:{username:t.username}}),t._v(" "),s("el-carousel",{attrs:{interval:4e3,type:"card",height:"400px"}},t._l(t.player,function(t){return s("el-carousel-item",{key:t},[s("img",{staticClass:"player",attrs:{src:t,alt:"轮播广告"}})])}),1),t._v(" "),s("div",[s("div",{staticClass:"publicredtitle"},[s("div"),t._v(" "),s("h2",[t._v("热门推荐")]),t._v(" "),s("div",{staticClass:"changesome",on:{click:t.changesome}},[s("i",{staticClass:"el-icon-refresh"}),t._v("换一批")])]),t._v(" "),s("div",{staticClass:"goods"},t._l(t.goodslist,function(t,a){return s("goods-nav",{key:a,attrs:{item:t}})}),1)]),t._v(" "),s("foot-nav")],1)},staticRenderFns:[]};var h=s("VU/8")(o,c,!1,function(t){s("hEWO")},"data-v-095ee2dd",null);a.default=h.exports}});
//# sourceMappingURL=2.cfbc572e5a294351972c.js.map