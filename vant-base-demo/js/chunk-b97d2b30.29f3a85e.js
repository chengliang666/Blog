(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b97d2b30"],{"00ce":function(t,e,n){"use strict";n.r(e);var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},[n("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:3e3}},t._l(t.goods.thumb,(function(t){return n("van-swipe-item",{key:t},[n("img",{attrs:{src:t}})])})),1),n("van-cell-group",[n("van-cell",[n("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))]),n("div",{staticClass:"goods-price"},[t._v(t._s(t.formatPrice(t.goods.price)))])]),n("van-cell",{staticClass:"goods-express"},[n("van-col",{attrs:{span:"10"}},[t._v("运费："+t._s(t.goods.express))]),n("van-col",{attrs:{span:"14"}},[t._v("剩余："+t._s(t.goods.remain))])],1)],1),n("van-cell-group",{staticClass:"goods-cell-group"},[n("van-cell",{attrs:{value:"进入店铺",icon:"shop-o","is-link":""},on:{click:t.sorry}},[n("template",{slot:"title"},[n("span",{staticClass:"van-cell-text"},[t._v("有赞的店")]),n("van-tag",{staticClass:"goods-tag",attrs:{type:"danger"}},[t._v("官方")])],1)],2),n("van-cell",{attrs:{title:"线下门店",icon:"location-o","is-link":""},on:{click:t.sorry}})],1),n("van-cell-group",{staticClass:"goods-cell-group"},[n("van-cell",{attrs:{title:"查看商品详情","is-link":""},on:{click:t.sorry}})],1),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o"},on:{click:t.sorry}},[t._v("客服")]),n("van-goods-action-icon",{attrs:{icon:"cart-o"},on:{click:t.onClickCart}},[t._v("购物车")]),n("van-goods-action-button",{attrs:{type:"warning"},on:{click:t.sorry}},[t._v("加入购物车")]),n("van-goods-action-button",{attrs:{type:"danger"},on:{click:t.sorry}},[t._v("立即购买")])],1)],1)},a=[],s=(n("e7e5"),n("d399")),c=n("ade3"),r=(n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b"),n("1175"),n("c31d")),l=n("d282"),u=n("48f4"),d=n("9884"),f=n("b650"),v=Object(l["a"])("goods-action-button"),h=v[0],b=v[1],p=h({mixins:[Object(d["a"])("vanGoodsAction")],props:Object(r["a"])(Object(r["a"])({},u["c"]),{},{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(u["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(f["a"],{class:b([{first:this.isFirst,last:this.isLast},this.type]),attrs:{square:!0,size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),g=(n("80ee"),n("a142")),m=n("6f2f"),y=n("ad06"),k=Object(l["a"])("goods-action-icon"),O=k[0],j=k[1],C=O({mixins:[Object(d["a"])("vanGoodsAction")],props:Object(r["a"])(Object(r["a"])({},u["c"]),{},{dot:Boolean,text:String,icon:String,color:String,info:[Number,String],badge:[Number,String],iconClass:null}),methods:{onClick:function(t){this.$emit("click",t),Object(u["b"])(this.$router,this)},genIcon:function(){var t=this.$createElement,e=this.slots("icon"),n=Object(g["b"])(this.badge)?this.badge:this.info;return e?t("div",{class:j("icon")},[e,t(m["a"],{attrs:{dot:this.dot,info:n}})]):t(y["a"],{class:[j("icon"),this.iconClass],attrs:{tag:"div",dot:this.dot,info:n,name:this.icon,color:this.color}})}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"button",tabindex:"0"},class:j(),on:{click:this.onClick}},[this.genIcon(),this.slots()||this.text])}}),S=(n("4cf9"),Object(l["a"])("goods-action")),x=S[0],w=S[1],$=x({mixins:[Object(d["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:w({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),B=(n("4b0a"),n("2bb1")),N=(n("7844"),n("5596")),I=(n("0653"),n("34e9")),z=(n("c194"),n("7744")),L=(n("c3a6"),n("81e6"),n("9ffb")),P=(n("9b7e"),n("a3e2")),_={components:(i={},Object(c["a"])(i,P["a"].name,P["a"]),Object(c["a"])(i,L["a"].name,L["a"]),Object(c["a"])(i,y["a"].name,y["a"]),Object(c["a"])(i,z["a"].name,z["a"]),Object(c["a"])(i,I["a"].name,I["a"]),Object(c["a"])(i,N["a"].name,N["a"]),Object(c["a"])(i,B["a"].name,B["a"]),Object(c["a"])(i,$.name,$),Object(c["a"])(i,C.name,C),Object(c["a"])(i,p.name,p),i),data:function(){return{goods:{title:"美国伽力果（约680g/3个）",price:2680,express:"免运费",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"]}}},methods:{onClickLeft:function(){this.$router.back()},formatPrice:function(){return"¥"+(this.goods.price/100).toFixed(2)},onClickCart:function(){this.$router.push("cart")},sorry:function(){Object(s["a"])("暂无后续逻辑~")}}},T=_,E=(n("b2f1"),n("2877")),A=Object(E["a"])(T,o,a,!1,null,null,null);e["default"]=A.exports},"0653":function(t,e,n){"use strict";n("68ef"),n("5c56")},1175:function(t,e,n){},"1a04":function(t,e,n){},"34e9":function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),a=n("d282"),s=n("ba31"),c=n("b1d2"),r=Object(a["a"])("cell-group"),l=r[0],u=r[1];function d(t,e,n,i){var a,r=t("div",o()([{class:[u(),(a={},a[c["e"]]=e.border,a)]},Object(s["b"])(i,!0)]),[null==n.default?void 0:n.default()]);return e.title||n.title?t("div",[t("div",{class:u("title")},[n.title?n.title():e.title]),r]):r}d.props={title:String,border:{type:Boolean,default:!0}},e["a"]=l(d)},"4cf9":function(t,e,n){},"4d75":function(t,e,n){},"5c56":function(t,e,n){},7744:function(t,e,n){"use strict";var i=n("c31d"),o=n("2638"),a=n.n(o),s=n("d282"),c=n("a142"),r=n("ba31"),l=n("48f4"),u={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},d=n("ad06"),f=Object(s["a"])("cell"),v=f[0],h=f[1];function b(t,e,n,i){var o=e.icon,s=e.size,u=e.title,f=e.label,v=e.value,b=e.isLink,p=n.title||Object(c["b"])(u);function g(){var i=n.label||Object(c["b"])(f);if(i)return t("div",{class:[h("label"),e.labelClass]},[n.label?n.label():f])}function m(){if(p)return t("div",{class:[h("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[u]),g()])}function y(){var i=n.default||Object(c["b"])(v);if(i)return t("div",{class:[h("value",{alone:!p}),e.valueClass]},[n.default?n.default():t("span",[v])])}function k(){return n.icon?n.icon():o?t(d["a"],{class:h("left-icon"),attrs:{name:o,classPrefix:e.iconPrefix}}):void 0}function O(){var i=n["right-icon"];if(i)return i();if(b){var o=e.arrowDirection;return t(d["a"],{class:h("right-icon"),attrs:{name:o?"arrow-"+o:"arrow"}})}}function j(t){Object(r["a"])(i,"click",t),Object(l["a"])(i)}var C=b||e.clickable,S={clickable:C,center:e.center,required:e.required,borderless:!e.border};return s&&(S[s]=s),t("div",a()([{class:h(S),attrs:{role:C?"button":null,tabindex:C?0:null},on:{click:j}},Object(r["b"])(i)]),[k(),m(),y(),O(),null==n.extra?void 0:n.extra()])}b.props=Object(i["a"])(Object(i["a"])({},u),l["c"]);e["a"]=v(b)},"7b0a":function(t,e,n){},"80ee":function(t,e,n){},"81e6":function(t,e,n){"use strict";n("68ef"),n("7b0a")},"9b7e":function(t,e,n){},"9fa1":function(t,e,n){},"9ffb":function(t,e,n){"use strict";var i=n("d282"),o=n("9884"),a=Object(i["a"])("col"),s=a[0],c=a[1];e["a"]=s({mixins:[Object(o["a"])("vanRow")],props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{style:function(){var t=this.index,e=this.parent||{},n=e.spaces;if(n&&n[t]){var i=n[t],o=i.left,a=i.right;return{paddingLeft:o?o+"px":null,paddingRight:a?a+"px":null}}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],n=this.span,i=this.offset;return e(this.tag,{style:this.style,class:c((t={},t[n]=n,t["offset-"+i]=i,t)),on:{click:this.onClick}},[this.slots()])}})},a3e2:function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),a=n("d282"),s=n("ba31"),c=n("b1d2"),r=n("ad06"),l=Object(a["a"])("tag"),u=l[0],d=l[1];function f(t,e,n,i){var a,l,u=e.type,f=e.mark,v=e.plain,h=e.color,b=e.round,p=e.size,g=v?"color":"backgroundColor",m=(a={},a[g]=h,a);e.textColor&&(m.color=e.textColor);var y={mark:f,plain:v,round:b};p&&(y[p]=p);var k=e.closeable&&t(r["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(s["a"])(i,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",o()([{key:"content",style:m,class:[d([y,u]),(l={},l[c["c"]]=v,l)]},Object(s["b"])(i,!0)]),[null==n.default?void 0:n.default(),k])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=u(f)},a71a:function(t,e,n){},ade3:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},b258:function(t,e,n){},b2f1:function(t,e,n){"use strict";var i=n("9fa1"),o=n.n(i);o.a},c194:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04")},c3a6:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743")},d399:function(t,e,n){"use strict";var i=n("c31d"),o=n("2b0e"),a=n("d282"),s=n("a142"),c=0;function r(t){t?(c||document.body.classList.add("van-toast--unclickable"),c++):(c--,c||document.body.classList.remove("van-toast--unclickable"))}var l={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]}},u=n("2638"),d=n.n(u),f=n("ba31"),v=n("1325"),h=Object(a["a"])("overlay"),b=h[0],p=h[1];function g(t){Object(v["c"])(t,!0)}function m(t,e,n,o){var a=Object(i["a"])({zIndex:e.zIndex},e.customStyle);return Object(s["b"])(e.duration)&&(a.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",d()([{directives:[{name:"show",value:e.show}],style:a,class:[p(),e.className],on:{touchmove:e.lockScroll?g:s["f"]}},Object(f["b"])(o,!0)]),[null==n.default?void 0:n.default()])])}m.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}};var y=b(m);function k(t){var e=t.parentNode;e&&e.removeChild(t)}var O={className:"",customStyle:{}};function j(t){return Object(f["c"])(y,{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function C(t){var e=l.find(t);if(e){var n=t.$el,o=e.config,a=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(a.$el,n),Object(i["a"])(a,O,o,{show:!0})}}function S(t,e){var n=l.find(t);if(n)n.config=e;else{var i=j(t);l.stack.push({vm:t,config:e,overlay:i})}C(t)}function x(t){var e=l.find(t);e&&(e.overlay.show=!1)}function w(t){var e=l.find(t);e&&k(e.overlay.$el)}var $=/scroll|auto/i;function B(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&1===n.nodeType&&n!==e){var i=window.getComputedStyle(n),o=i.overflowY;if($.test(o)){if("BODY"!==n.tagName)return n;var a=window.getComputedStyle(n.parentNode),s=a.overflowY;if($.test(s))return n}n=n.parentNode}return e}var N=n("3875");function I(t){return"string"===typeof t?document.querySelector(t):t()}function z(t){var e=t.ref,n=t.afterPortal;return o["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,i=this.getContainer,o=e?this.$refs[e]:this.$el;i?t=I(i):this.$parent&&(t=this.$parent.$el),t&&t!==o.parentNode&&t.appendChild(o),n&&n.call(this)}}})}var L=n("5fbe"),P={mixins:[Object(L["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){var e=this;if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var n=t?v["b"]:v["a"];n(window,"popstate",(function(){e.close(),e.shouldReopen=!1}))}}}},_={value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function T(t){return void 0===t&&(t={}),{mixins:[N["a"],P,z({afterPortal:function(){this.overlay&&C()}})],props:_,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){this.removeLock(),w(this),this.getContainer&&k(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(l.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock())},addLock:function(){this.lockScroll&&(Object(v["b"])(document,"touchstart",this.touchStart),Object(v["b"])(document,"touchmove",this.onTouchMove),l.lockCount||document.body.classList.add("van-overflow-hidden"),l.lockCount++)},removeLock:function(){this.lockScroll&&(l.lockCount--,Object(v["a"])(document,"touchstart",this.touchStart),Object(v["a"])(document,"touchmove",this.onTouchMove),l.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(x(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=B(t.target,this.$el),i=n.scrollHeight,o=n.offsetHeight,a=n.scrollTop,s="11";0===a?s=o>=i?"00":"01":a+o>=i&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(e,2)||Object(v["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?S(t,{zIndex:l.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):x(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++l.zIndex+t}}}}var E=n("ad06"),A=n("543e"),M=Object(a["a"])("toast"),R=M[0],D=M[1],q=R({mixins:[T()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,r(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,i=this.iconPrefix,o=this.loadingType,a=e||"success"===n||"fail"===n;return a?t(E["a"],{class:D("icon"),attrs:{classPrefix:i,name:e||n}}):"loading"===n?t(A["a"],{class:D("loading"),attrs:{type:o}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(Object(s["b"])(n)&&""!==n)return"html"===e?t("div",{class:D("text"),domProps:{innerHTML:n}}):t("div",{class:D("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[D([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),F={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},H={},Y=[],G=!1,Z=Object(i["a"])({},F);function J(t){return Object(s["d"])(t)?t:{message:t}}function K(){if(s["e"])return{};if(!Y.length||G){var t=new(o["a"].extend(q))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),Y.push(t)}return Y[Y.length-1]}function Q(t){return Object(i["a"])(Object(i["a"])({},t),{},{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function U(t){void 0===t&&(t={});var e=K();return e.value&&e.updateZIndex(),t=J(t),t=Object(i["a"])(Object(i["a"])(Object(i["a"])({},Z),H[t.type||Z.type]),t),t.clear=function(){e.value=!1,t.onClose&&t.onClose(),G&&!s["e"]&&e.$on("closed",(function(){clearTimeout(e.timer),Y=Y.filter((function(t){return t!==e})),k(e.$el),e.$destroy()}))},Object(i["a"])(e,Q(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var V=function(t){return function(e){return U(Object(i["a"])({type:t},J(e)))}};["loading","success","fail"].forEach((function(t){U[t]=V(t)})),U.clear=function(t){Y.length&&(t?(Y.forEach((function(t){t.clear()})),Y=[]):G?Y.shift().clear():Y[0].clear())},U.setDefaultOptions=function(t,e){"string"===typeof t?H[t]=e:Object(i["a"])(Z,t)},U.resetDefaultOptions=function(t){"string"===typeof t?H[t]=null:(Z=Object(i["a"])({},F),H={})},U.allowMultiple=function(t){void 0===t&&(t=!0),G=t},U.install=function(){o["a"].use(q)},o["a"].prototype.$toast=U;e["a"]=U},e7e5:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("b258")}}]);
//# sourceMappingURL=chunk-b97d2b30.29f3a85e.js.map