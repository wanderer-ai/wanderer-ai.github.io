(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,e,r){"use strict";r(25),r(26),r(13);var n=r(75);var o=r(103);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(62);var c=r(32),h=(r(27),r(163),{}),f={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in h||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlease make sure you have imported this icon before using it."),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:v(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return Object(c.a)({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?h[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,r=t.height;return Math.max(e,r)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(function(t,r,n){var o=v();return e[n]=o,' id="'.concat(o,'"')})),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(function(t,r,n,o){var l=r||o;return l&&e[l]?"#".concat(e[l]):t})),t},focusable:function(){var t=this.tabindex;return null==t?"false":("string"==typeof t?parseInt(t,10):t)>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var e=0,r=0;this.$children.forEach((function(n){n.outerScale=t.normalizedScale,e=Math.max(e,n.width),r=Math.max(r,n.height)})),this.childrenWidth=e,this.childrenHeight=r,this.$children.forEach((function(t){t.x=(e-t.width)/2,t.y=(r-t.height)/2}))}}else console.warn('Invalid prop: prop "name" is required.')}},render:function(t){if(null===this.name)return t();var e={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},r="vat-".concat(this.id);if(this.title&&(e.attrs["aria-labelledby"]=r),this.raw){var html=this.raw;this.title&&(html='<title id="'.concat(r,'">').concat(function(html){return html.replace(/[<>"&]/g,(function(t){return m[t]||t}))}(this.title),"</title>").concat(html)),e.domProps={innerHTML:html}}var content=this.title?[t("title",{attrs:{id:r}},this.title)]:[];return t("svg",e,this.raw?null:content.concat(this.$slots.default||[].concat(l(this.icon.paths.map((function(path,i){return t("path",{attrs:path,key:"path-".concat(i)})}))),l(this.icon.polygons.map((function(polygon,i){return t("polygon",{attrs:polygon,key:"polygon-".concat(i)})}))))))},register:function(data){for(var t in data){var e=data[t],r=e.paths,n=void 0===r?[]:r,o=e.d,l=e.polygons,c=void 0===l?[]:l,f=e.points;o&&n.push({d:o}),f&&c.push({points:f}),h[t]=d({},e,{paths:n,polygons:c})}},icons:h};function d(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return r.forEach((function(source){for(var e in source)source.hasOwnProperty(e)&&(t[e]=source[e])})),t}var cursor=870711;function v(){return"va-".concat((cursor++).toString(16))}var m={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};var x=f,y=(r(180),r(22)),component=Object(y.a)(x,void 0,void 0,!1,null,null,null);e.a=component.exports},159:function(t,e,r){"use strict";var n=r(158);n.a.register({robot:{width:640,height:512,paths:[{d:"M0 256c0-17.7 14.3-32 32-32h32v192h-32c-17.7 0-32-14.3-32-32v-128zM464 96c44.2 0 80 35.8 80 80v272c0 35.3-28.7 64-64 64h-320c-35.3 0-64-28.7-64-64v-272c0-44.2 35.8-80 80-80h112v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64h112zM256 416v-32h-64v32h64zM224 296c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40zM352 416v-32h-64v32h64zM448 416v-32h-64v32h64zM416 296c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40zM608 224c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-32v-192h32z"}]}});var o={components:{Icon:n.a},props:{textColor:{type:String,default:"black"}}},l=r(22),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"relative z-30 bg-white text-"+this.textColor},[e("div",{staticClass:"container py-4"},[e("nav",{staticClass:"flex flex-wrap justify-between uppercase"},[e("div",[e("a",{attrs:{href:"/",title:"Wanderer.ai"}},[e("icon",{attrs:{name:"robot"}}),this._v(" Wanderer.ai\n        ")],1)]),this._v(" "),this._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-between"},[e("a",{staticClass:"pl-4",attrs:{href:"/builder"}},[this._v("Builder")]),this._v(" "),e("a",{staticClass:"pl-4",attrs:{href:"/story"}},[this._v("Story")]),this._v(" "),e("a",{staticClass:"pl-4",attrs:{href:"/pricing"}},[this._v("Pricing")]),this._v(" "),e("a",{staticClass:"pl-4",attrs:{href:"/faq"}},[this._v("FAQ")])])}],!1,null,null,null);e.a=component.exports},160:function(t,e,r){"use strict";var n={components:{Vertex:r(162).a},props:{id:{type:String,default:""},colorFrom:{type:String,default:"orange"},colorTo:{type:String,default:"yellow"}}},o=(r(178),r(22)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header-section relative"},[e("div",{class:"header-section--clip z-20 relative py-24 bg-gradient-to-br from-"+this.colorFrom+" to-"+this.colorTo},[e("div",{staticClass:"container"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full xl:w-1/2"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"w-full xl:w-1/2 hidden xl:block"},[e("vertex",{staticStyle:{bottom:"0px",right:"-30px"},attrs:{color:"white",edgeCount:3,edgeAngle:312,size:200}})],1)])])]),this._v(" "),e("div",{staticClass:"hidden lg:block"},[e("vertex",{staticClass:"z-10",staticStyle:{bottom:"-200px",left:"100px"},attrs:{color:this.colorTo,edgeCount:3,edgeAngle:100,size:100}})],1)])}),[],!1,null,null,null);e.a=component.exports},161:function(t,e,r){"use strict";var n={components:{Vertex:r(162).a},props:{colorFrom:{type:String,default:"orange"},colorTo:{type:String,default:"yellow"}}},o=(r(182),r(22)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer-section relative"},[e("div",{class:"footer-section--clip z-20 relative py-24 bg-gradient-to-br text-white from-"+this.colorFrom+" to-"+this.colorTo},[e("div",{staticClass:"container"},[e("div",{staticClass:"flex"},[this._m(0),this._v(" "),e("div",{staticClass:"w-full xl:w-1/2 hidden xl:block"},[e("vertex",{staticStyle:{bottom:"-100px",right:"-30px"},attrs:{color:"white",edgeCount:3,startAngle:140,edgeAngle:30,"edge-length":140,size:200}})],1)])])]),this._v(" "),e("vertex",{staticClass:"z-10",staticStyle:{top:"-150px",left:"100px"},attrs:{color:this.colorFrom,edgeCount:4,startAngle:340,edgeAngle:40,size:100}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full xl:w-1/2"},[r("p",{staticClass:"text-3xl mb-8"},[t._v("\n            Stay up to date, follow "),r("a",{staticClass:"underline",attrs:{href:"https://twitter.com/wanderer_ai"}},[t._v("@wanderer_ai")]),t._v(" and read\n            "),r("a",{staticClass:"underline",attrs:{href:"https://twitter.com/dampfpixel"}},[t._v("@dampfpixel's")]),t._v(" chatbot builder\n            "),r("a",{staticClass:"underline",attrs:{href:"https://steampixel.de/en/tag/lets-build-an-open-source-chatbot-builder/"}},[t._v("blog series")]),t._v(".\n            Also watch the "),r("a",{staticClass:"underline",attrs:{href:"https://github.com/wanderer-ai"}},[t._v("git repos")]),t._v(".\n          ")]),t._v(" "),r("div",{},[r("a",{attrs:{href:"https://wanderer.ai/"}},[t._v("\n              © 2021 Wanderer.ai\n            ")]),t._v(",\n\n            "),r("a",{attrs:{href:"https://steampixel.de/en/"}},[t._v("\n              This is a SteamPixel project\n            ")]),t._v(",\n\n            "),r("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/wanderer_ai",title:"Twitter link"}},[t._v("\n              Twitter\n            ")]),t._v(",\n\n            "),r("a",{staticClass:"github",attrs:{href:"https://github.com/wanderer-ai",title:"Github link"}},[t._v("\n              GitHub\n            ")]),t._v(",\n\n            "),r("a",{attrs:{href:"/imprint"}},[t._v("Imprint")]),t._v(",\n\n            "),r("a",{attrs:{href:"/privacy-policy"}},[t._v("Privacy Policy")]),t._v(",\n\n            "),r("a",{attrs:{href:"/license"}},[t._v("License")])])])}],!1,null,null,null);e.a=component.exports},162:function(t,e,r){"use strict";r(163);var n={props:{color:{type:String,default:"green"},size:{type:Number,default:200},edgeLength:{type:Number,default:300},edgeCount:{type:Number,default:3},startAngle:{type:Number,default:0},edgeAngle:{type:Number,default:208}}},o=(r(176),r(22)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vertex"},[r("div",{staticClass:"vertex--center"},t._l(t.edgeCount,(function(e){return r("div",{key:e,class:"vertex--edge border-"+t.color,style:"transform: rotate("+(t.startAngle+e*t.edgeAngle)+"deg); width:"+(t.edgeLength+100*e)+"px;"},[r("div",{class:"vertex--child bg-"+t.color+" ",style:"width:"+.5*t.size+"px;height:"+.5*t.size+"px;"})])})),0),t._v(" "),r("div",{class:"vertex--circle bg-"+t.color+" ",style:"width:"+t.size+"px;height:"+t.size+"px;"})])}),[],!1,null,null,null);e.a=component.exports},163:function(t,e,r){"use strict";var n=r(4),o=r(20),l=r(23),c=r(111),h=r(60),f=r(10),d=r(49).f,v=r(61).f,m=r(9).f,x=r(174).trim,y=n.Number,w=y,_=y.prototype,S="Number"==l(r(78)(_)),C="trim"in String.prototype,k=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(S?f((function(){_.valueOf.call(r)})):"Number"!=l(r))?c(new w(k(e)),r,y):k(e)};for(var z,N=r(7)?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;N.length>A;A++)o(w,z=N[A])&&!o(y,z)&&m(y,z,v(w,z));y.prototype=_,_.constructor=y,r(11)(n,"Number",y)}},165:function(t,e,r){var content=r(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("78c11c62",content,!0,{sourceMap:!1})},166:function(t,e,r){var content=r(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("702663b1",content,!0,{sourceMap:!1})},167:function(t,e,r){var content=r(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("543ac577",content,!0,{sourceMap:!1})},168:function(t,e,r){var content=r(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("4f29a18e",content,!0,{sourceMap:!1})},174:function(t,e,r){var n=r(6),o=r(24),l=r(10),c=r(175),h="["+c+"]",f=RegExp("^"+h+h+"*"),d=RegExp(h+h+"*$"),v=function(t,e,r){var o={},h=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=h?e(m):c[t];r&&(o[r]=f),n(n.P+n.F*h,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(d,"")),t};t.exports=v},175:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},176:function(t,e,r){"use strict";r(165)},177:function(t,e,r){(e=r(47)(!1)).push([t.i,".vertex{display:block;position:absolute}.vertex--circle{text-decoration:none;border-style:none;border-radius:100%;outline:none;position:relative}.vertex--center{height:0;width:0;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.vertex--edge{position:relative;transition:all .3s ease-in-out;height:0;border-width:2px;border-style:dashed;transform-origin:top left}.vertex--child{text-decoration:none;border-style:none;border-radius:100%;outline:none;position:absolute;top:0;right:0;transform:translateX(50%) translateY(-50%)}",""]),t.exports=e},178:function(t,e,r){"use strict";r(166)},179:function(t,e,r){(e=r(47)(!1)).push([t.i,".header-section--clip{-webkit-clip-path:polygon(0 0,100% 0,100% 85%,0 100%);clip-path:polygon(0 0,100% 0,100% 85%,0 100%)}",""]),t.exports=e},180:function(t,e,r){"use strict";r(167)},181:function(t,e,r){(e=r(47)(!1)).push([t.i,".fa-icon{display:inline-block;fill:currentColor}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-spin{-webkit-animation:fa-spin 1s linear 0s infinite;animation:fa-spin 1s linear 0s infinite}.fa-inverse{color:#fff}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=e},182:function(t,e,r){"use strict";r(168)},183:function(t,e,r){(e=r(47)(!1)).push([t.i,".github,.twitter{fill:#bababa}.footer-section--clip{-webkit-clip-path:polygon(0 0,100% 25%,100% 100%,0 100%);clip-path:polygon(0 0,100% 25%,100% 100%,0 100%)}",""]),t.exports=e}}]);