(this["webpackJsonpartginzburg.github.io"]=this["webpackJsonpartginzburg.github.io"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(8),o=n.n(c),i=(n(14),n(7)),s=n(9),u=n.p+"static/media/avatar.665f1a88.jpg";function h(t){return{"--link-color":t}}var l=n(2),f=n(5),b="abcdefghijklmnopqrstuvwxyz0123456789",j=b.length;function d(t){for(var e=[],n=0;n<t;)e.push(b.charAt(Math.floor(Math.random()*j))),n++;return e}function m(t){return Array(Math.trunc(t)).fill()}n(15);var g=n(0),O="\u7995",p=30,v=function(t,e){for(var n=[],r=0;r<e;r++)n.push(d(t));return n}(p,p);function x(t,e,n){var r=Object(f.a)(t).sort((function(t,e){return e.length-t.length}))[0].length,a=r>e?r:e,c=r>n?r:n,o=function(t,e){return m(e).map((function(){return m(t)}))}(a,c);return t.forEach((function(t,e){for(var n=t.split(""),i=Math.random()>.5,s=!i||Math.random()>.5,u=i?Math.floor(Math.random()*(a-r+1)):Math.floor(Math.random()*(a-1)),h=[],l=s?Math.floor(Math.random()*(c-r+1)):Math.floor(Math.random()*(c-1)),f=u,b=l,j=0;j<c-1;j++){var d=n[j-l],m=o[j];if(d&&b===j){if(s)m[f]="".concat(e).concat(O).concat(d);else for(var g=0;g<n.length;g++){var p=n[g];m[f++]="".concat(e).concat(O).concat(p)}h.push(m),i&&f++,s&&b++}else h.push(m)}o=h})),o}function _(t,e){for(var n=Object(f.a)(t),r=Math.floor(n.length/2)-Math.floor(e.length/2),a=0,c=r;c<r+e.length;c++){var o=e[a];o&&o.split(O)[1].trim()&&(n[c]=o),a++}return n}function M(t){var e=t.words,n=function(){var t=Object(r.useState)([0,0]),e=Object(l.a)(t,2),n=e[0],a=e[1];function c(){a([window.innerWidth,window.innerHeight])}return Object(r.useLayoutEffect)((function(){return window.addEventListener("resize",c),c(),function(){window.removeEventListener("resize",c)}}),[]),n}(),a=Object(l.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(v),s=Object(l.a)(i,2),u=s[0],h=s[1];return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=Object(r.useRef)();Object(r.useEffect)((function(){clearTimeout(n.current),n.current=setTimeout(t,e)}),[t,e])}(Object(r.useCallback)((function(){var t=o>c,n=t?c/40:c/60,r=t?o/52:o/85;h(function(t,e){for(var n=Object(f.a)(t),r=Math.floor(n.length/2)-Math.floor(e.length/2),a=0,c=r;c<r+e.length-1;c++){var o=n[c],i=e[a];n[c]=_(o,i),a++}return n}(v,x(e,n>p?p:n,r>p?p:r)))}),[o,c,e])),Object(g.jsx)("div",{className:"hiddenWords",children:u.map((function(t,e){return Object(g.jsx)("p",{className:"hiddenWords__char",children:t.map((function(t,n){if(1===t.length)return t;var r=t.split(O),a=Object(l.a)(r,2),c=a[0],o=a[1];return Object(g.jsx)("span",{id:"char-".concat(c),className:"hiddenWords__char-active",children:o},"".concat(e).concat(n))}))},e)}))})}n(17);var w={github:h("#6e5494"),telegram:h("#0088cc")};function N(){return Object(g.jsxs)("section",{className:"home",children:[Object(g.jsx)(M,{words:["develop","software",s.a.name]}),Object(g.jsx)("img",{src:u,className:"home__logo",alt:"avatar"}),Object(g.jsx)("p",{children:"\u042f \u0410\u0440\u0442, \u043f\u0438\u0448\u0443 \u043a\u043e\u0434"}),Object(g.jsxs)("nav",{className:"home__buttons",children:[Object(g.jsxs)("a",{className:"home__button",href:"https://github.com/artginzburg",target:"_blank",rel:"noopener noreferrer",style:w.github,children:[Object(g.jsx)("span",{className:"home__button-icon",children:Object(g.jsx)(i.a,{})}),Object(g.jsx)("p",{className:"home__button-text",children:"\u041a\u043e\u0434"})]}),Object(g.jsxs)("a",{className:"home__button",href:"https://t.me/ginzart",target:"_blank",rel:"noopener noreferrer",style:w.telegram,children:[Object(g.jsx)("span",{className:"home__button-icon",children:Object(g.jsx)(i.b,{})}),Object(g.jsx)("p",{className:"home__button-text",children:"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c"})]})]})]})}var z=function(){return Object(g.jsx)("main",{children:Object(g.jsx)(N,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root")),k()},9:function(t){t.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"}}')}},[[18,1,2]]]);
//# sourceMappingURL=main.2da48b82.chunk.js.map