webpackJsonp([14],{NPot:function(t,s){},faY4:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={name:"goodsDetail",components:{PublicgrayTitle:i("mSJ0").a},data:function(){return{id:this.$route.query.goodsid,name:"",price:0,postage:0,inventory:0,evallist:[]}},methods:{addcount:function(){this.$store.commit("addcount"),this.goodsdetail.count===this.inventory&&this.$message({message:"商品添加数量达到上限！",type:"warning"})},subcount:function(){this.$store.commit("subcount")},addshopcar:function(t){this.$store.commit("addshopcar",t),this.$alert("成功加入商品到购物车！","提示",{confirmButtonText:"确定"})},buynow:function(){this.$store.commit("buynow")},getevaluate:function(){var t=this,s=this.$route.query.goodsid;this.axios.get(this.$domain+"/api/evaluateInfo/goods",{params:{goodsid:s}}).then(function(s){console.log(s.data),t.evallist=s.data}).catch(function(t){console.log(t)})}},computed:{goodsdetail:function(){return this.$store.state.goodsdetail},totalprice:function(){var t=this.goodsdetail.count*this.price+this.postage;return t.toFixed(2)}},mounted:function(){this.$store.commit("selectgoods",this.id),this.name=this.goodsdetail.name[0],this.price=1*this.goodsdetail.price[0],this.postage=1*this.goodsdetail.postage[0],this.inventory=1*this.goodsdetail.inventory[0],this.getevaluate()}},e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("publicgray-title",[t._v("商品详情")]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"imgs"},[i("img",{attrs:{src:t.goodsdetail.goodsimgs}}),t._v(" "),t._l(5,function(s){return[i("img",{staticClass:"smallpic",attrs:{src:t.goodsdetail.goodsimgs}})]})],2),t._v(" "),i("ul",{staticClass:"infos"},[i("li",[i("h3",[t._v(t._s(t.name))])]),t._v(" "),i("li",[t._v("价格："),i("div",{staticClass:"price"},[t._v("￥"+t._s(t.price))])]),t._v(" "),i("li",[t._v("运费："),i("font",[t._v("￥"+t._s(t.postage))])],1),t._v(" "),i("li",[t._v("数量：\n        "),i("i",{staticClass:"el-icon-remove",on:{click:t.subcount}}),t._v(" "),i("div",{staticClass:"count"},[t._v(t._s(t.goodsdetail.count))]),t._v(" "),i("i",{staticClass:"el-icon-circle-plus",on:{click:t.addcount}})]),t._v(" "),i("li",[t._v("库存："+t._s(t.inventory))]),t._v(" "),i("li",[t._v("总计："),i("font",[t._v("￥"+t._s(t.totalprice))])],1),t._v(" "),i("li",[i("el-button",{on:{click:function(s){t.addshopcar(t.id)}}},[t._v("加入购物车")]),t._v(" "),i("div",{staticClass:"space"}),t._v(" "),i("router-link",{attrs:{to:"/orderForm"}},[i("el-button",{attrs:{type:"danger"},on:{click:t.buynow}},[t._v("立即购买")])],1)],1)])]),t._v(" "),i("div",{staticClass:"evaluate"},[i("h3",[t._v("用户评价")]),t._v(" "),t._l(t.evallist,function(s,o){return i("ul",{key:o},[i("li",[i("h4",[t._v(t._s(s.username)+" : ")])]),t._v(" "),i("li",[t._v(t._s(s.words))]),t._v(" "),i("li",{staticClass:"grade"},[t._v("评分："+t._s(s.grade+s.grade2+s.grade3))])])})],2)],1)},staticRenderFns:[]};var a=i("VU/8")(o,e,!1,function(t){i("NPot")},"data-v-532440be",null);s.default=a.exports}});
//# sourceMappingURL=14.e141d0535b7cfec56ddc.js.map