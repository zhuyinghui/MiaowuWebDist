webpackJsonp([6],{"/bPy":function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"publicgraytitle"},[e("div",{staticClass:"back",on:{click:this.backhome}},[e("i",{staticClass:"el-icon-arrow-left"}),this._v("返回首页")]),this._v(" "),e("h3",[this._t("default")],2),this._v(" "),e("div")])},staticRenderFns:[]};var s=a("VU/8")({name:"publicgrayTitle",methods:{backhome:function(){this.$router.push("/")}}},i,!1,function(t){a("6L52")},"data-v-2e97e844",null);e.a=s.exports},"6L52":function(t,e){},C6p2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BO1k"),s=a.n(i),n=a("/bPy"),o=a("7+uW"),l={name:"myEvaluate",components:{PublicgrayTitle:n.a},data:function(){return{list:[]}},methods:{getevaluate:function(){var t=this,e=localStorage.getItem("userid");this.axios.get(this.$domain+"/api/evaluateInfo",{params:{userid:e}}).then(function(e){t.list=e.data;var a=0,i=!0,n=!1,l=void 0;try{for(var c,r=s()(e.data);!(i=(c=r.next()).done);i=!0){var u=c.value;t.axios.get(t.$domain+"/api/goodsList/goods",{params:{goodsid:u.goodsid}}).then(function(e){var i=e.data[0];console.log(i),o.default.set(t.list[a],"goodsname",i.name[0]),o.default.set(t.list[a],"price",i.price[0]),o.default.set(t.list[a],"goodsimg",t.$domain+"/"+i.picture),console.log(t.list[a].goodsname),a++}).catch(function(t){console.log(t)})}}catch(t){n=!0,l=t}finally{try{!i&&r.return&&r.return()}finally{if(n)throw l}}}).catch(function(t){console.log(t)})},delEvaluate:function(t){var e=this,a=localStorage.getItem("userid");this.axios.delete(this.$domain+"/api/evaluateInfo",{params:{userid:a,goodsid:t}}).then(function(t){e.getevaluate()}).catch(function(t){console.log(t)})}},mounted:function(){this.getevaluate()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PublicgrayTitle",[t._v("我的评价")]),t._v(" "),a("div",t._l(t.list,function(e,i){return a("ul",{key:i,staticClass:"evalua"},[a("li",[a("ul",[a("li",[a("img",{attrs:{src:e.goodsimg}})]),t._v(" "),a("li",[t._v("商品名称："+t._s(e.goodsname))]),t._v(" "),a("li",[t._v("单价："+t._s(e.price)+"元")])])]),t._v(" "),a("li",[t._v("评论内容："+t._s(e.words))]),t._v(" "),a("li",[t._v("评分："+t._s(e.grade+e.grade2+e.grade3))]),t._v(" "),a("el-button",{staticClass:"btn",attrs:{size:"small"},on:{click:function(a){t.delEvaluate(e.goodsid)}}},[t._v("删除评价")])],1)}),0)],1)},staticRenderFns:[]};var r=a("VU/8")(l,c,!1,function(t){a("cyfJ")},null,null);e.default=r.exports},cyfJ:function(t,e){}});
//# sourceMappingURL=6.e7e936a2df93bdb35b9a.js.map