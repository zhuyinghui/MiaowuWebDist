webpackJsonp([13],{HRAs:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("vUA0"),a={name:"cat",data:function(){return{somatotype:"",furlength:"",variety:!0,ifchecked:"",catname:"全部商品",catsummarize:"",catid:0,total:40,pagesize:5,currentpage:1}},components:{goodsNav:e("dnTX").a,headNav:i.a},methods:{closevariety:function(){this.variety=!this.variety},choosecat:function(t){var s=this;this.classlist.forEach(function(e){e.classid[0]===t&&(s.catname=e.classname[0],s.catsummarize=e.summarize[0],s.catid=e.classid[0])}),this.total=this.goodsselect.length,this.currentpage=1},showall:function(){this.catid=0,this.catname="全部",this.catsummarize="",this.total=this.goodsselect.length,this.currentpage=1},currentchange:function(t){this.currentpage=t}},computed:{classlist:function(){return this.$GoodsClass},goodslist:function(){return this.$GoodsList},afterselect:function(){return this.somatotype&&"全部"!==this.somatotype||this.furlength&&"全部"!==this.furlength?"小型"!==this.somatotype||this.furlength&&"全部"!==this.furlength?"中型"!==this.somatotype||this.furlength&&"全部"!==this.furlength?"大型"!==this.somatotype||this.furlength&&"全部"!==this.furlength?this.somatotype&&"全部"!==this.somatotype||"长毛"!==this.furlength?this.somatotype&&"全部"!==this.somatotype||"短毛"!==this.furlength?"小型"===this.somatotype&&"长毛"===this.furlength?this.classlist.filter(function(t){return"小型"===t.somatotype[0]&&"长毛"===t.furlength[0]}):"小型"===this.somatotype&&"短毛"===this.furlength?this.classlist.filter(function(t){return"小型"===t.somatotype[0]&&"短毛"===t.furlength[0]}):"中型"===this.somatotype&&"长毛"===this.furlength?this.classlist.filter(function(t){return"中型"===t.somatotype[0]&&"长毛"===t.furlength[0]}):"中型"===this.somatotype&&"短毛"===this.furlength?this.classlist.filter(function(t){return"中型"===t.somatotype[0]&&"短毛"===t.furlength[0]}):"大型"===this.somatotype&&"长毛"===this.furlength?this.classlist.filter(function(t){return"大型"===t.somatotype[0]&&"长毛"===t.furlength[0]}):"大型"===this.somatotype&&"短毛"===this.furlength?this.classlist.filter(function(t){return"大型"===t.somatotype[0]&&"短毛"===t.furlength[0]}):void 0:this.classlist.filter(function(t){return"短毛"===t.furlength[0]}):this.classlist.filter(function(t){return"长毛"===t.furlength[0]}):this.classlist.filter(function(t){return"大型"===t.somatotype[0]}):this.classlist.filter(function(t){return"中型"===t.somatotype[0]}):this.classlist.filter(function(t){return"小型"===t.somatotype[0]}):this.classlist},goodsselect:function(){var t=this;return 0===this.catid?this.goodslist:this.goodslist.filter(function(s){return s.classid[0]===t.catid})},pageselect:function(){var t=this;return this.goodsselect.forEach(function(s,e){t.$set(s,"num",e)}),this.goodsselect.filter(function(s){return s.num>=(t.currentpage-1)*t.pagesize&&s.num<t.currentpage*t.pagesize})}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("head-nav"),t._v(" "),e("div",{staticClass:"variety"},[e("div",{staticClass:"title"},[e("h2",[t._v("42种猫")]),t._v(" "),e("div",{staticClass:"filtrate"},[e("div",[t._v("\n          按体型：\n          "),e("el-radio-group",{attrs:{size:"mini",fill:"#cc0033"},model:{value:t.somatotype,callback:function(s){t.somatotype=s},expression:"somatotype"}},[e("el-radio-button",{attrs:{label:"全部",value:"0"}}),t._v(" "),e("el-radio-button",{attrs:{label:"小型",value:"1"}}),t._v(" "),e("el-radio-button",{attrs:{label:"中型",value:"2"}}),t._v(" "),e("el-radio-button",{attrs:{label:"大型",value:"3"}})],1)],1),t._v(" "),e("div",[t._v("\n          按毛长：\n          "),e("el-radio-group",{attrs:{size:"mini",fill:"#cc0033"},model:{value:t.furlength,callback:function(s){t.furlength=s},expression:"furlength"}},[e("el-radio-button",{attrs:{label:"全部"}}),t._v(" "),e("el-radio-button",{attrs:{label:"短毛"}}),t._v(" "),e("el-radio-button",{attrs:{label:"长毛"}})],1)],1)]),t._v(" "),e("div",{staticClass:"close",on:{click:t.closevariety}},[t.variety?e("div",[t._v("\n          收起 "),e("i",{staticClass:"el-icon-arrow-up"})]):e("div",[t._v("\n          展开 "),e("i",{staticClass:"el-icon-arrow-down"})])])]),t._v(" "),e("transition",{attrs:{name:"el-zoom-in-top"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.variety,expression:"variety"}],staticClass:"variety-items"},t._l(t.afterselect,function(s){return e("div",{staticClass:"variety-item"},[e("img",{attrs:{src:s.classimgs},on:{click:function(e){t.choosecat(s.classid[0])}}}),t._v(" "),e("font",[t._v(t._s(s.classname[0]))])],1)}),0)])],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("h2",[t._v(t._s(t.catname))]),e("font",{directives:[{name:"show",rawName:"v-show",value:t.catid,expression:"catid"}],staticClass:"showall",on:{click:t.showall}},[t._v("返回全部商品")]),e("font",[t._v(t._s(t.catsummarize))])],1),t._v(" "),e("div",{staticClass:"goods"},t._l(t.pageselect,function(t,s){return e("goods-nav",{key:s,attrs:{item:t}})}),1),t._v(" "),e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pagesize,"current-page":t.currentpage},on:{"current-change":t.currentchange}})],1)],1)},staticRenderFns:[]};var o=e("VU/8")(a,n,!1,function(t){e("S5cg")},"data-v-5f96c7f7",null);s.default=o.exports},S5cg:function(t,s){}});
//# sourceMappingURL=13.0453227d3851459b4720.js.map