(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(t,e,r){var content=r(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("f516bba2",content,!0,{sourceMap:!1})},154:function(t,e,r){var content=r(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("4f29a18e",content,!0,{sourceMap:!1})},155:function(t,e,r){var content=r(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("42e4bc6f",content,!0,{sourceMap:!1})},156:function(t,e,r){"use strict";var n=r(4),o=r(17),l=r(20),c=r(104),d=r(61),v=r(9),f=r(43).f,h=r(62).f,_=r(8).f,x=r(158).trim,m=n.Number,y=m,w=m.prototype,C="Number"==l(r(77)(w)),k="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=k?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,v=c.length;i<v;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof m&&(C?v((function(){w.valueOf.call(r)})):"Number"!=l(r))?c(new y(N(e)),r,m):N(e)};for(var S,E=r(7)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)o(y,S=E[I])&&!o(m,S)&&_(m,S,h(y,S));m.prototype=w,w.constructor=m,r(10)(n,"Number",m)}},157:function(t,e,r){"use strict";var n={props:{header:{type:String,default:""},color:{type:String,default:"green"},textColor:{type:String,default:"white"},id:{type:String,default:""}}},o=(r(160),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:"colored-section overflow-hidden bg-"+t.color+" py-12 md:py-24 lg:py-48",attrs:{id:t.id}},[r("div",{staticClass:"container"},[r("div",{staticClass:"flex flex-wrap justify-center lg:justify-end"},[r("div",{class:"w-full lg:w-1/2 text-"+t.textColor},[t.header?r("h2",{staticClass:"text-4xl uppercase"},[t._v(t._s(t.header))]):t._e(),t._v(" "),r("div",{staticClass:"text-xl"},[t._t("default")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},158:function(t,e,r){var n=r(6),o=r(21),l=r(9),c=r(159),d="["+c+"]",v=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(t,e,r){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),v=o[t]=d?e(_):c[t];r&&(o[r]=v),n(n.P+n.F*d,"String",o)},_=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},159:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},160:function(t,e,r){"use strict";var n=r(153);r.n(n).a},161:function(t,e,r){(e=r(41)(!1)).push([t.i,".colored-section{position:relative;z-index:10}",""]),t.exports=e},162:function(t,e,r){"use strict";var n=r(154);r.n(n).a},163:function(t,e,r){(e=r(41)(!1)).push([t.i,".github,.twitter{fill:#bababa}.Cookie--dark-lime{background:#111!important;color:#fff!important;padding:1em!important}.Cookie--dark-lime .Cookie__button:hover{background:#27a844!important}.Cookie--dark-lime .Cookie__button{background:#27a844!important;padding:.5em!important;color:#fff!important;border-radius:0!important}",""]),t.exports=e},164:function(t,e,r){"use strict";var n={props:{textColor:{type:String,default:"black"}}},o=r(19),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:"text-"+this.textColor+" z-50 absolute w-full"},[this._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container pt-4"},[r("nav",{staticClass:"flex flex-wrap justify-between uppercase"},[r("div",[r("a",{attrs:{href:"/",title:"Wanderer.ai"}},[t._v("\n            Wanderer.ai\n        ")])]),t._v(" "),r("div",{staticClass:"flex justify-between"},[r("a",{attrs:{href:"/story"}},[t._v("Story")]),t._v(" "),r("a",{staticClass:"pl-4",attrs:{href:"/pricing"}},[t._v("Pricing")]),t._v(" "),r("a",{staticClass:"pl-4",attrs:{href:"/faq"}},[t._v("FAQ")]),t._v(" "),r("a",{staticClass:"pl-4",attrs:{href:"/imprint"}},[t._v("Imprint")])])])])}],!1,null,null,null);e.a=component.exports},165:function(t,e,r){"use strict";var n={components:{ColoredSection:r(157).a},props:{color:{type:String,default:"white"},textColor:{type:String,default:"black"}}},o=(r(162),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("colored-section",{attrs:{color:t.color,textColor:t.textColor}},[r("div",{},[r("a",{attrs:{href:"https://wanderer.ai/"}},[t._v("\n        © 2020 Wanderer.ai\n      ")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"https://steampixel.de/en/"}},[t._v("\n        This is a SteamPixel project\n      ")]),t._v(" "),r("br"),t._v(" "),r("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/wanderer_ai",title:"Twitter link"}},[t._v("\n        Twitter\n      ")]),t._v(" "),r("br"),t._v(" "),r("a",{staticClass:"github",attrs:{href:"https://github.com/wanderer-ai",title:"Github link"}},[t._v("\n        GitHub\n      ")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"/imprint"}},[t._v("Imprint")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"/privacy-policy"}},[t._v("Privacy Policy")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"/license"}},[t._v("License")])])])],1)}),[],!1,null,null,null);e.a=component.exports},166:function(t,e,r){"use strict";var n=r(155);r.n(n).a},167:function(t,e,r){(e=r(41)(!1)).push([t.i,'.round-header{z-index:999}.round-header,.round-header--circle{display:inline-block;position:relative}.round-header--circle{text-decoration:none;border-style:none;border-radius:100%;outline:none;text-align:center;padding:3rem;max-width:300px}.round-header--circle:before{content:"";display:inline-block;vertical-align:middle;padding-top:100%}.round-header--text{display:inline-block;position:relative;vertical-align:middle}.round-header--center{height:0;width:0;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.round-header--edge{position:relative;transition:all .3s ease-in-out;width:1000px;height:0;border-width:2px;border-style:dashed;transform-origin:top left}',""]),t.exports=e},168:function(t,e,r){"use strict";r(156);var n={props:{header:{type:String,default:""},color:{type:String,default:"green"},edgeCount:{type:Number,default:3},edgeAngle:{type:Number,default:190}}},o=(r(166),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:"pt-24 pb-12 md:py-24"},[r("div",{staticClass:"container text-center"},[r("div",{staticClass:"relative round-header"},[r("div",{staticClass:"round-header--center"},t._l(t.edgeCount,(function(e){return r("div",{key:e,class:"round-header--edge border-"+t.color,style:"transform: rotate("+e*t.edgeAngle+"deg)"})})),0),t._v(" "),r("span",{class:"text-4xl round-header--circle bg-"+t.color+" hover:bg-"+t.color+"-700 "},[t.header?r("span",{class:"round-header--text text-white"},[t._v(t._s(t.header))]):t._e()])])])])}),[],!1,null,null,null);e.a=component.exports},169:function(t,e,r){var content=r(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("1dcf4771",content,!0,{sourceMap:!1})},170:function(t,e,r){"use strict";var n=r(169);r.n(n).a},171:function(t,e,r){(e=r(41)(!1)).push([t.i,'.round-button{z-index:999}.round-button,.round-button--circle{display:inline-block;position:relative}.round-button--circle{text-decoration:none;border-style:none;border-radius:100%;outline:none;cursor:pointer;text-align:center;padding:0;box-shadow:0 0 10px 0 #303030}.round-button--circle:before{content:"";display:inline-block;vertical-align:middle;padding-top:100%}.round-button--text{display:inline-block;position:relative;vertical-align:middle;max-width:90%}.grow-on-hover{transition:all .3s ease-in-out}.grow-on-hover:active,.grow-on-hover:focus,.grow-on-hover:hover{transform:scale(1.1)}.round-button--center{height:0;width:0;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.round-button--edge{position:relative;transition:all .3s ease-in-out;width:1000px;height:0;border-width:2px;border-style:dashed;transform-origin:top left}',""]),t.exports=e},175:function(t,e,r){"use strict";r(156);var n={props:{url:{type:String,default:""},bgColor:{type:String,default:"green"},textColor:{type:String,default:"white"},label:{type:String,default:""},target:{type:String,default:"_self"},edgeCount:{type:Number,default:3},edgeAngle:{type:Number,default:150}}},o=(r(170),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative round-button"},[r("div",{staticClass:"round-button--center"},t._l(t.edgeCount,(function(e){return r("div",{key:e,class:"round-button--edge border-"+t.bgColor,style:"transform: rotate("+e*t.edgeAngle+"deg)"})})),0),t._v(" "),r("a",{class:"grow-on-hover text-xl round-button--circle bg-"+t.bgColor+" hover:bg-"+t.bgColor+"-700 ",attrs:{href:t.url,target:t.target}},[r("span",{class:"round-button--text text-"+t.textColor},[t._v(t._s(t.label))])])])}),[],!1,null,null,null);e.a=component.exports},183:function(t,e,r){"use strict";r.r(e);var n=r(168),o=r(164),l=r(165),c={components:{LinkButton:r(175).a}},d=r(19),v=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"plans overflow-hidden bg-white bg-h-full bg-no-repeat bg-left"},[e("div",{},[e("div",{staticClass:"container"},[e("div",{staticClass:"-px-3 flex flex-wrap justify-center lg:justify-start"},[e("div",{staticClass:"px-3 mb-6 w-full lg:w-1/2"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"absolute bg-grey opacity-50 h-full w-full rounded-xl"}),this._v(" "),e("div",{staticClass:"relative p-6 lg:p-12"},[e("h2",{staticClass:"uppercase text-2xl"},[this._v("💕 Free")]),this._v(" "),this._m(0),this._v(" "),e("link-button",{staticClass:"mt-6",attrs:{edgeCount:2,edgeAngle:110,url:"https://wanderer.ai/builder/","bg-color":"red","text-color":"white",label:"Build now"}})],1)])]),this._v(" "),this._m(1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-lg"},[r("ul",[r("li",[t._v("✅ No "),r("strong",[t._v("registration")])]),t._v(" "),r("li",[t._v("✅ "),r("strong",[t._v("Build")]),t._v(" bots on Wanderer.ai")]),t._v(" "),r("li",[t._v("✅ "),r("strong",[t._v("Run")]),t._v(" bots on Wanderer.ai")]),t._v(" "),r("li",[t._v("✅ "),r("strong",[t._v("Download")]),t._v(" your bots")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-3 mb-6 w-full lg:w-1/2"},[r("div",{staticClass:"relative"},[r("div",{staticClass:"absolute bg-grey opacity-50 h-full w-full rounded-xl"}),t._v(" "),r("div",{staticClass:"relative p-6 lg:p-12"},[r("h2",{staticClass:"uppercase text-2xl"},[t._v("👑 Professional")]),t._v(" "),r("div",{staticClass:"text-lg"},[r("ul",[r("li",[t._v("✅ No "),r("strong",[t._v("registration")])]),t._v(" "),r("li",[t._v("✅ "),r("strong",[t._v("Build")]),t._v(" bots on Wanderer.ai")]),t._v(" "),r("li",[t._v("✅ "),r("strong",[t._v("Run")]),t._v(" bots on Wanderer.ai")]),t._v(" "),r("li",[t._v("✅ "),r("strong",[t._v("Download")]),t._v(" your bots")]),t._v(" "),r("li",[t._v("✅ "),r("strong",[t._v("Website and App")]),t._v(" integration")])])])])])])}],!1,null,null,null).exports,f={components:{PageHero:n.a,AppNav:o.a,AppFooter:l.a,Plans:v}},h=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-nav"),this._v(" "),e("page-hero",{attrs:{color:"yellow",header:"Pricing"}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"container"},[e("plans")],1),this._v(" "),e("div",{staticClass:"separator-bottom-right seperator-down separator-white"}),this._v(" "),e("app-footer",{attrs:{color:"yellow",textColor:"white"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container narrow content"},[e("p",[this._v("\n      This software is open source but it is not completely free.\n      That means that you have to purchase a license if you plan to run the botbuilder or single chatbots on your own website or inside your apps.\n      Use the botbuilder and the chatbots for free as long as you use them with the Wanderer.ai domain.\n    ")]),this._v(" "),e("p",[this._v("\n      The pricing model is not very clear right now.\n      But I want to keep it simple. So you have to purchase a license code for each domain or App on which one or more bots are running.\n    ")])])}],!1,null,null,null);e.default=h.exports}}]);