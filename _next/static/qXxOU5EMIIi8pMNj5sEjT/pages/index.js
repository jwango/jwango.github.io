(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"37xM":function(e,t,n){"use strict";var a=n("rePB"),i=n("q1tI"),r=n.n(i),c=n("YFqc"),o=n.n(c);function l(e,t){return"".concat(t," ").concat(e[t])}var s=n("isJ9"),u=n("9Pro"),f=n.n(u),p=r.a.createElement;var d=function(e){var t=e.title,n=e.description,a=e.pubDate,i=e.link,c=e.loading,u={guid:e.guid,title:t||"",description:n||"",pubDate:a||"",link:i||"#"};return p("li",{className:l(f.a,"feed-item")},c?function(){var e=l(f.a,"feed-item--loading");return p(r.a.Fragment,null,p("h3",{className:e},"\xa0"),p("p",{className:e},p("span",{className:e}),p("span",{className:e}),p("span",{className:e})),p("span",{className:e}),p("br",null))}():function(e){var t="".concat(e.link,"[id]"),n="".concat(e.link).concat(e.guid);return p(r.a.Fragment,null,p("h3",null,p(o.a,{href:t,as:n},p("a",null,e.title))),p("p",null,p(o.a,{href:t,as:n},p("a",null,e.description))),p(s.a,{dateTime:e.pubDate}),p("br",null))}(u))},g=r.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n,a){var i=(t||[]).length==a,r=e.filter((function(e){return!e.loading}));return t&&t.length>0?{page:n+1,items:r.concat(t),loading:!1,hasMore:i}:{items:r,loading:!1,hasMore:i}}t.a=function(e){var t=e.batchSize,n=e.getMoreFunc,a=e.initialItems,c=e.customKey;t=t||5;var o=Object(i.useState)({items:a,batchSize:t,page:0,loading:!1,hasMore:a.length===t}),l=o[0],s=o[1];return Object(i.useEffect)((function(){if(a){var e=b([],a,0,l.batchSize);s(v({batchSize:l.batchSize},e))}}),[c]),g(r.a.Fragment,null,g("section",null,g("ul",{className:"feed"},l.items.map((function(e){return g(d,{loading:!!e.loading,title:e.title,link:e.link,description:e.description,pubDate:e.pubDate,guid:e.id,key:e.id})})))),function(e,t,n){if(e||!t)return null;return g("button",{className:"btn--secondary btn--flat",onClick:n},"More Content")}(l.loading,l.hasMore,(function(){if(!l.loading){s(v({},l,{items:l.items.concat([{loading:!0}]),loading:!0})),n(l.page,l.batchSize).then((function(e){var t=b(l.items,e,l.page,l.batchSize);s(v({},l,{},t))}),(function(e){throw s(v({},l,{items:l.items.slice(0,-1),loading:!1,hasMore:!0})),e}))}})))}},"9Pro":function(e,t,n){e.exports={"feed-item--loading":"feed-item_feed-item--loading__1xqeB","feed-item":"feed-item_feed-item__enNXN"}},P0rp:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a,i=n("rePB"),r=n("q1tI"),c=n.n(r),o=n("xtLS"),l=n.n(o),s=c.a.createElement,u=function(e){return s("svg",e,s("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))};u.defaultProps={"'data-prefix'":"fas","'data-icon'":"times",className:"svg-inline--fa fa-times fa-w-11",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"};var f=function(e){return s("svg",e,s("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}))};f.defaultProps={"'data-prefix'":"fas","'data-icon'":"exclamation-triangle",className:"svg-inline--fa fa-exclamation-triangle fa-w-18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"};var p=function(e){return s("svg",e,s("path",{fill:"currentColor",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}))};p.defaultProps={"'data-prefix'":"fas","'data-icon'":"file-excel",className:"svg-inline--fa fa-file-excel fa-w-12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"};var d=function(e){return s("svg",e,s("path",{fill:"currentColor",d:"M432 320h-32a16 16 0 0 0-16 16v112H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 0 0 0 34L157.67 377a24 24 0 0 0 34 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 0 0-24-24z"}))};d.defaultProps={"'data-prefix'":"fas","'data-icon'":"external-link-alt",className:"svg-inline--fa fa-external-link-alt fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};var g={TIMES:"times",EXCLAMATION_TRIANGLE:"exclamation-triangle",EXCEL:"excel",EXT_LINK_ALT:"ext-link-alt"},m=(a={},Object(i.a)(a,g.TIMES,u),Object(i.a)(a,g.EXCLAMATION_TRIANGLE,f),Object(i.a)(a,g.EXCEL,p),Object(i.a)(a,g.EXT_LINK_ALT,d),a);t.b=function(e){var t=e.name,n=e.baseline,a=void 0!==n&&n,i=e.className,r=void 0===i?"":i,c=m[t];if(!c)return null;var o=r?r.split(" "):[];return o.push(l.a["svg-icon"]),a&&o.push(l.a["svg-baseline"]),s("span",{className:o.join(" ")},s(c,null))}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return h}));var a=n("o0o1"),i=n.n(a),r=n("q1tI"),c=n.n(r),o=n("nOHt"),l=n("yHON"),s=n.n(l),u=n("P0rp"),f=n("8BxL"),p=n("37xM"),d=n("8LCN"),g=c.a.createElement,m=10;function v(e,t){var n=t.reduce((function(t,n,a){return n!==e&&(t&&(t+="+"),t+=n),t}),"");return n&&(n="?tags=".concat(n)),"/"+n}function b(e,t,n,a){var i=e*t;return Promise.resolve(a.posts.filter((function(e){return 0===n.length||n.some((function(t){return e.tags.includes(t)}))})).sort((function(e,t){return s()(e.publishDate,t.publishDate)})).filter((function(e,n){return n>=i&&n<i+t})).map((function(e){return{id:e.guid,title:e.title,description:e.description,pubDate:e.publishDate,link:"/posts/"}})))}var h=!0;t.default=Object(o.withRouter)((function(e){var t=e.router,n=e.publicUrl,a=e.postsMetadata,c=e.iconNames,o=e.defaultItems,l=t.query.tags||"",s=l?l.split(/ /g):[],h=Object(r.useState)({items:o,key:null}),w=h[0],O=h[1];return Object(r.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(b(0,m,s,a));case 2:e=t.sent,O({items:e,key:l});case 4:case"end":return t.stop()}}),null,null,null,Promise)}()}),[l]),g(r.Fragment,null,g(f.a,{title:"jwango",description:"programming, woodworking, and more",keywords:"blog, react, woodworking, programming, jwango",baseUrl:n,relUrl:"/"}),g("header",null,function(e,t){return e.map((function(e,n,a){return g(d.a,{key:e},g("a",{href:v(e,a)},g(u.b,{name:t.TIMES,baseline:!0})),"\xa0",e)}))}(s,c)),g(p.a,{batchSize:m,getMoreFunc:function(e,t){return b(e,t,s,a)},initialItems:w.items,customKey:w.key}))}))},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xtLS:function(e,t,n){e.exports={"svg-icon":"icon_svg-icon__12S81","svg-baseline":"icon_svg-baseline__32nqL"}},yHON:function(e,t,n){var a=n("yNUO");e.exports=function(e,t){var n=a(e).getTime(),i=a(t).getTime();return n>i?-1:n<i?1:0}}},[["vlRD",0,1,2,3,4]]]);