(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{249:function(t,e,r){"use strict";r.r(e);r(31);var n=r(3),c=r(188),o=r(187),l=r(189),m={components:{AppNav:o.a,AppFooter:l.a,HeaderSection:c.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Wanderer.ai - "+this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@wanderer_ai"},{name:"twitter:title",content:this.article.title},{name:"twitter:description",content:this.article.description},{name:"twitter:image",content:"https://wanderer.ai/blogimages/"+this.article.img}]}}},d=r(30),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("app-nav"),t._v(" "),r("header-section",{attrs:{colorFrom:"blue",colorTo:"blue-dark"}},[r("h1",{staticClass:"uppercase text-6xl text-white mb-4"},[t._v(t._s(t.article.title))])]),t._v(" "),r("div",{staticClass:"container narrow pt-24"},[r("img",{attrs:{src:"/blogimages/"+t.article.img}})]),t._v(" "),r("article",{staticClass:"container narrow content pt-12 pb-48"},[r("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),r("app-footer",{attrs:{colorFrom:"blue",colorTo:"blue-dark"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);