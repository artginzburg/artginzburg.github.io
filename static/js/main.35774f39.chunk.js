(this["webpackJsonpartginzburg.github.io"]=this["webpackJsonpartginzburg.github.io"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"}}')},24:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(16),o=n.n(a),i=n(5),s=n(2),l=(n(24),n(1));function h(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{className:"header__links",children:[Object(l.jsx)(i.b,{to:"/",className:"header__logo",children:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433"}),Object(l.jsx)("ul",{className:"header__navigation",children:Object(l.jsx)(i.b,{to:"/portfolio",className:"header__link",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"})})]})})}var u=n(14),j=n(19),b=n.p+"static/media/avatar.665f1a88.jpg";function f(e){return{"--link-color":e}}var d=n(6),m=n(15),g="abcdefghijklmnopqrstuvwxyz0123456789",O=g.length;function x(e){for(var t=[],n=0;n<e;)t.push(g.charAt(Math.floor(Math.random()*O))),n++;return t}function p(e){return Array(Math.trunc(e)).fill()}function v(e){return Math.floor(Math.random()*e)}n(34);var _="\u7995",N=30,w=function(e,t){for(var n=[],r=0;r<t;)n.push(x(e)),r++;return n}(N,N);function k(e,t,n){var r,c=(r=e,r.reduce((function(e,t){return e.length>t.length?e:t}),"")).length,a=c>t?c:t,o=c>n?c:n,i=function(e,t){return p(t).map((function(){return p(e)}))}(a,o);return e.forEach((function(e,t){i=function(e,t,n,r,c,a){for(var o=Math.random()>.5,i=!o||Math.random()>.5,s=v(o?c-r+1:c-1),l=v(i?a-r+1:a-1),h=e.split(""),u=[],j=l,b=s,f=j,d=0;d<a;d++){var m=h[d-j],g=n[d];if(g)if(m&&f===d){if(i)g[b]="".concat(t).concat(_).concat(m);else for(var O=0;O<h.length;O++){var x=h[O];g[b++]="".concat(t).concat(_).concat(x)}u.push(g),o&&b++,i&&f++}else u.push(g)}return u}(e,t,i,c,a,o)})),i}function M(e,t){var n=Object(m.a)(e);if(!t)return n;for(var r=Math.floor(n.length/2)-Math.floor(t.length/2),c=0,a=r;a<r+t.length;a++){var o=t[c];o&&o.split(_)[1].trim()&&(n[a]=o),c++}return n}function z(e){var t=e.words,n=function(){var e=Object(r.useState)([0,0]),t=Object(d.a)(e,2),n=t[0],c=t[1];function a(){c([window.innerWidth,window.innerHeight])}return Object(r.useLayoutEffect)((function(){return window.addEventListener("resize",a),a(),function(){window.removeEventListener("resize",a)}}),[]),n}(),c=Object(d.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)(w),s=Object(d.a)(i,2),h=s[0],u=s[1],j=Object(r.useCallback)((function(){var e=o>a,n=e?a/40:a/60,r=e?o/52:o/85;u(function(e,t){for(var n=Object(m.a)(e),r=Math.floor(n.length/2)-Math.floor(t.length/2),c=0,a=r;a<r+t.length;a++){var o=n[a],i=t[c];n[a]=M(o,i),c++}return n}(w,k(t,n>N?N:n,r>N?N:r)))}),[o,a,t]);return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=Object(r.useRef)();Object(r.useEffect)((function(){clearTimeout(n.current),n.current=setTimeout(e,t)}),[e,t])}(j),Object(l.jsx)("div",{className:"hiddenWords",onDoubleClick:j,children:h.map((function(e,t){return Object(l.jsx)("p",{className:"hiddenWords__char",children:e.map((function(e,n){if(1===e.length)return e;var r=e.split(_),c=Object(d.a)(r,2),a=c[0],o=c[1];return Object(l.jsx)("span",{id:"char-".concat(a),className:"hiddenWords__char-active",children:o},"".concat(t).concat(n))}))},t)}))})}n(35);var y={github:f("#83278f"),telegram:f("#28aaea")};function E(){return Object(l.jsxs)("section",{className:"home",children:[Object(l.jsx)(z,{words:["develop","software",j.a.name]}),Object(l.jsx)("img",{src:b,className:"home__logo",alt:"avatar"}),Object(l.jsx)("p",{className:"home__text",children:"\u042f \u0410\u0440\u0442, \u043f\u0438\u0448\u0443 \u043a\u043e\u0434"}),Object(l.jsxs)("nav",{className:"home__buttons",children:[Object(l.jsxs)("a",{className:"home__button",href:"https://github.com/artginzburg",target:"_blank",rel:"noopener noreferrer",style:y.github,children:[Object(l.jsx)("span",{className:"home__button-icon",children:Object(l.jsx)(u.a,{})}),Object(l.jsx)("p",{className:"home__button-text",children:"\u041a\u043e\u0434"})]}),Object(l.jsxs)("a",{className:"home__button",href:"https://t.me/ginzart",target:"_blank",rel:"noopener noreferrer",style:y.telegram,children:[Object(l.jsx)("span",{className:"home__button-icon",children:Object(l.jsx)(u.b,{})}),Object(l.jsx)("p",{className:"home__button-text",children:"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c"})]})]})]})}n(36);function C(){return Object(l.jsx)("section",{className:"portfolio",children:Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{className:"portfolio__subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://artginzburg.github.io/CASProject/",target:"_blank",rel:"noreferrer",children:"3d school map"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://deeplomka.nomoredomains.club",target:"_blank",rel:"noreferrer",children:"Movies Explorer"})})]})]})})}var S=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("main",{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",children:Object(l.jsx)(E,{})}),Object(l.jsx)(s.a,{path:"/portfolio",children:Object(l.jsx)(C,{})})]})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};n(37);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{basename:"",children:Object(l.jsx)(S,{})})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.35774f39.chunk.js.map