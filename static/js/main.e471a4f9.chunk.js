(this["webpackJsonpartginzburg.github.io"]=this["webpackJsonpartginzburg.github.io"]||[]).push([[0],{20:function(t){t.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"}}')},26:function(t,e,a){},27:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),i=a(17),o=a.n(i),s=a(6),c=a(2),l=a(3);function u(t,e){var a=Object(r.useState)((function(){try{var a=localStorage[t];return a?JSON.parse(a):e}catch(r){return console.log(r),e}})),n=Object(l.a)(a,2),i=n[0],o=n[1],s=Object(r.useCallback)((function(e){localStorage[t]=JSON.stringify(e),o(e)}),[t]);return function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(a&&a.addEventListener){var e=function(t){return n.current(t)};return a.addEventListener(t,e),function(){a.removeEventListener(t,e)}}}),[t,a])}("storage",Object(r.useCallback)((function(a){a.key===t&&o(a.newValue?JSON.parse(a.newValue):e)}),[t,e])),[i,s]}var d={en:{titles:{main:"Developer from Moscow",portfolio:"Developer's portfolio"},home_text:"Arthur, builds impressive yet functional websites.",notFound:{subtitle:"Page not found",back:"Back"},links:{github:"Code",telegram:"Let's work"},routes:{main:"Art Ginzburg",portfolio:"Portfolio",life:"Life"},portfolio:{frontend:"Front-end",cli:"CLI",apps:"Apps",backend:"Back-end"}},ru:{titles:{main:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0438\u0437 \u041c\u043e\u0441\u043a\u0432\u044b",portfolio:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"},home_text:"\u0410\u0440\u0442\u0443\u0440 \u2014 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u044f\u044e\u0449\u0438\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044b.",notFound:{subtitle:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430",back:"\u041d\u0430\u0437\u0430\u0434"},links:{github:"\u041a\u043e\u0434",telegram:"\u041f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c?"},routes:{main:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433",portfolio:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",life:"\u041b\u0430\u0439\u0444"},portfolio:{frontend:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434",cli:"\u041a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b",apps:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",backend:"\u0411\u044d\u043a\u0435\u043d\u0434"}}},h=a(0),b=Object(r.createContext)();function g(t){var e=t.children,a=u("language",navigator.language.includes("ru")?"ru":"en"),r=Object(l.a)(a,1)[0],n={localization:d[r],state:a};return Object(h.jsx)(b.Provider,{value:n,children:e})}function f(){var t=Object(r.useContext)(b);if(void 0===t)throw new Error("useLanguage must be used within a LanguageProvider");return t}var p=a(7),j=function(t){return t.filter(Boolean).join(" ")},m=function(t){return{className:j(t)}};a(26);function _(){var t=f(),e=Object(l.a)(t.state,2),a=e[0],n=e[1];var i="ru"===a,o=Object(r.useState)(i),s=Object(l.a)(o,2),c=s[0],u=s[1];var d={onClick:function(t){n(t.target.innerText.toLowerCase())},onMouseEnter:function(t){a!==t.target.innerText.toLowerCase()&&u(!i)},onMouseLeave:function(t){a!==t.target.innerText.toLowerCase()&&u(i)},type:"button"};return Object(h.jsxs)("div",Object(p.a)(Object(p.a)({},m(["header__language",c&&"header__language_moved"])),{},{children:[Object(h.jsx)("button",Object(p.a)(Object(p.a)(Object(p.a)({},m(["header__language-button","en"===a&&"header__language-button_selected"])),d),{},{children:"EN"})),Object(h.jsx)("button",Object(p.a)(Object(p.a)(Object(p.a)({},m(["header__language-button","ru"===a&&"header__language-button_selected"])),d),{},{children:"RU"}))]}))}a(27);function O(){var t=f().localization;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("nav",{className:"header__links",children:[Object(h.jsx)(s.c,{exact:!0,to:"/",className:"header__logo",activeClassName:"header__logo_active",children:t.routes.main}),Object(h.jsxs)("ul",{className:"header__navigation",children:[Object(h.jsx)(s.c,{to:"/portfolio",className:"header__link",activeClassName:"header__link_active",children:t.routes.portfolio}),Object(h.jsx)(s.c,{to:"/life",className:"header__link",activeClassName:"header__link_active",children:t.routes.life})]})]}),Object(h.jsx)(_,{})]})}var x=a(16),v=a(20),k=a.p+"static/media/avatar.665f1a88.jpg";function w(t){return{"--link-color":t}}var y=function(t){var e=f().localization;Object(r.useEffect)((function(){document.title="".concat(e.routes.main," \xb7 ").concat(t)}),[e.routes.main,t])},N=a(10),z="abcdefghijklmnopqrstuvwxyz0123456789",M=z.length;function C(t){for(var e=[],a=0;a<t;)e.push(z.charAt(Math.floor(Math.random()*M))),a++;return e}function S(t){return Array(Math.trunc(t)).fill()}function E(t){return Math.floor(Math.random()*t)}a(36);var T="\u7995",B=30,L=function(t,e){for(var a=[],r=0;r<e;)a.push(C(t)),r++;return a}(B,B);function P(t,e,a){var r,n=(r=t,r.reduce((function(t,e){return t.length>e.length?t:e}),"")).length,i=n>e?n:e,o=n>a?n:a,s=function(t,e){return S(e).map((function(){return S(t)}))}(i,o);return t.forEach((function(t,e){s=function(t,e,a,r,n,i){for(var o=Math.random()>.5,s=!o||Math.random()>.5,c=E(o?n-r+1:n-1),l=E(s?i-r+1:i-1),u=t.split(""),d=[],h=l,b=c,g=h,f=0;f<i;f++){var p=u[f-h],j=a[f];if(j)if(p&&g===f){if(s)j[b]="".concat(e).concat(T).concat(p);else for(var m=0;m<u.length;m++){var _=u[m];j[b++]="".concat(e).concat(T).concat(_)}d.push(j),o&&b++,s&&g++}else d.push(j)}return d}(t,e,s,n,i,o)})),s}function F(t,e){var a=Object(N.a)(t);if(!e)return a;for(var r=Math.floor(a.length/2)-Math.floor(e.length/2),n=0,i=r;i<r+e.length;i++){var o=e[n];o&&o.split(T)[1].trim()&&(a[i]=o),n++}return a}var R=Object(r.memo)((function(t){var e=t.words,a=function(){var t=Object(r.useState)([0,0]),e=Object(l.a)(t,2),a=e[0],n=e[1];function i(){n([window.innerWidth,window.innerHeight])}return Object(r.useLayoutEffect)((function(){return window.addEventListener("resize",i),i(),function(){window.removeEventListener("resize",i)}}),[]),a}(),n=Object(l.a)(a,2),i=n[0],o=n[1],s=Object(r.useState)(L),c=Object(l.a)(s,2),u=c[0],d=c[1];return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=Object(r.useRef)();Object(r.useEffect)((function(){clearTimeout(a.current),a.current=setTimeout(t,e)}),[t,e])}(Object(r.useCallback)((function(){var t=o>i,a=t?i/40:i/60,r=t?o/52:o/85;d(function(t,e){for(var a=Object(N.a)(t),r=Math.floor(a.length/2)-Math.floor(e.length/2),n=0,i=r;i<r+e.length;i++){var o=a[i],s=e[n];a[i]=F(o,s),n++}return a}(L,P(e,a>B?B:a,r>B?B:r)))}),[o,i,e]),300),Object(h.jsx)("div",{className:"hiddenWords",children:u.map((function(t,e){return Object(h.jsx)("p",{className:"hiddenWords__char",children:t.map((function(t,a){if(1===t.length)return t;var r=t.split(T),n=Object(l.a)(r,2),i=n[0],o=n[1];return Object(h.jsx)("span",{id:"char-".concat(i),className:"hiddenWords__char-active",children:o},"".concat(e).concat(a))}))},e)}))})})),A=R,D=(a(37),{github:w("#83278f"),telegram:w("#28aaea")}),I=["develop","software",v.a.name];function H(){var t=f().localization;return y(t.titles.main),Object(h.jsxs)("section",{className:"home",children:[Object(h.jsx)(A,{words:I}),Object(h.jsx)("img",{src:k,className:"home__logo",alt:"avatar"}),Object(h.jsx)("p",{className:"home__text",children:t.home_text}),Object(h.jsxs)("nav",{className:"home__buttons",children:[Object(h.jsxs)("a",{className:"home__button",href:"https://github.com/artginzburg",target:"_blank",rel:"noopener noreferrer",style:D.github,children:[Object(h.jsx)("span",{className:"home__button-icon",children:Object(h.jsx)(x.a,{})}),Object(h.jsx)("p",{className:"home__button-text",children:t.links.github})]}),Object(h.jsxs)("a",{className:"home__button",href:"https://t.me/ginzart",target:"_blank",rel:"noopener noreferrer",style:D.telegram,children:[Object(h.jsx)("span",{className:"home__button-icon",children:Object(h.jsx)(x.b,{})}),Object(h.jsx)("p",{className:"home__button-text",children:t.links.telegram})]})]})]})}var J,W=[{title:"2FA to Tray",subtitle:"Swift & JS",image:"https://raw.githubusercontent.com/artginzburg/2FAtoTray/main/res/screenshot_full_res.png",year:2020,link:"https://2fatotray.unicornplatform.page",category:"apps",description:{en:"One-time password manager for mac OS, which, despite its simplicity, has almost passed into the daily top of Product Hunt",ru:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u0445 \u043f\u0430\u0440\u043e\u043b\u0435\u0439 \u0434\u043b\u044f macOS, \u043a\u043e\u0442\u043e\u0440\u044b\u0439, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0441\u0432\u043e\u044e \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0443, \u043f\u043e\u0447\u0442\u0438 \u043f\u0440\u043e\u0448\u0451\u043b \u0432 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0442\u043e\u043f Product Hunt"},downloads:"https://img.shields.io/github/downloads/artginzburg/2fatotray/total",stars:"https://img.shields.io/github/stars/artginzburg/2fatotray"},{title:"MiddleClick",subtitle:"Objective-C",image:"https://raw.githubusercontent.com/artginzburg/MiddleClick-Catalina/master/demo.png",year:2019,link:"https://github.com/artginzburg/MiddleClick-Catalina",category:"apps",description:{en:"\uf8ff Middleclick with three-finger click/tap for MacBook trackpad and Magic Mouse.",ru:'\uf8ff "\u041a\u043b\u0438\u043a \u043a\u043e\u043b\u0451\u0441\u0438\u043a\u043e\u043c" \u0442\u0440\u0435\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438 \u0434\u043b\u044f \u0442\u0440\u0435\u043a\u043f\u0430\u0434\u0430 \u0438 Magic Mouse'},downloads:"https://img.shields.io/github/downloads/artginzburg/middleclick-catalina/total",stars:"https://img.shields.io/github/stars/artginzburg/middleclick-catalina"},{title:"sudo-touchid",subtitle:"Raw Shellscript",image:a.p+"static/media/sudotouchid.17a97534.png",year:2021,link:"https://git.io/sudotouchid",category:"cli",description:{en:"Script for automating the use of Touch ID instead of a password on the command line",ru:"\u0421\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f TouchID \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u0440\u043e\u043b\u044f \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435"},downloads:"https://img.shields.io/github/downloads/artginzburg/sudo-touchid/total",stars:"https://img.shields.io/github/stars/artginzburg/sudo-touchid"},{title:"barhide",subtitle:"Raw Shellscript",year:2019,link:"https://git.io/barhide",category:"cli",description:{en:"Hiding extra icons from the Menu Bar",ru:"\u0421\u043a\u0440\u044b\u0442\u0438\u0435 \u043b\u0438\u0448\u043d\u0438\u0445 \u0438\u043a\u043e\u043d\u043e\u043a \u0438\u0437 Menu Bar"},downloads:"https://img.shields.io/github/downloads/artginzburg/barhide/total",stars:"https://img.shields.io/github/stars/artginzburg/barhide"},{title:"powerchime",subtitle:"Raw Shellscript",image:a.p+"static/media/powerchime.ea8bf305.png",year:2019,link:"https://git.io/nochime",category:"cli",description:{en:"Switching the sound of the charging cable connection",ru:"\uf8ff \u0422\u043e\u0442 \u0441\u0430\u043c\u044b\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c \u0437\u0432\u0443\u043a\u0430 \u0437\u0430\u0440\u044f\u0434\u043a\u0438 \u0434\u043b\u044f MacBook \ud83d\udd0a"},downloads:"https://img.shields.io/github/downloads/artginzburg/powerchime/total",stars:"https://img.shields.io/github/stars/artginzburg/powerchime"},{title:"wifi-pass",subtitle:"Raw Shellscript",year:2019,link:"https://git.io/wifi-pass",category:"cli",description:{en:"Fast sharing of Wi-Fi passwords",ru:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0448\u0435\u0440\u0438\u043d\u0433 \u043f\u0430\u0440\u043e\u043b\u0435\u0439 Wi-Fi"},stars:"https://img.shields.io/github/stars/artginzburg/wifi-pass"},{title:"Movies Explorer",subtitle:"React Hooks & MongoDB",year:2021,link:"https://deeplomka.nomoredomains.club",category:"frontend",description:{en:"Diploma for 100/100 points while studying at Yandex.Practicum",ru:"\u0414\u0438\u043f\u043b\u043e\u043c \u043d\u0430 100/100 \u0431\u0430\u043b\u043b\u043e\u0432 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 Yandex.Practicum"}},{title:"Mesto",subtitle:"React Hooks & MongoDB (Webpack, Babel, Express)",year:2021,link:"https://artginzburg-learning.github.io/react-mesto-auth/",category:"frontend",description:{en:"The first full-fledged educational React project with authorization (6th course of Yandex.Practicum)",ru:"\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0435\u0431\u043d\u044b\u0439 React-\u043f\u0440\u043e\u0435\u043a\u0442 \u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0435\u0439 (6-\u0439 \u043a\u0443\u0440\u0441 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430)"}},{title:"Travelling in Russia",subtitle:"CSS & BEM",year:2020,link:"https://artginzburg-learning.github.io/russian-travel/",category:"frontend",description:{en:"Educational project, 2nd course of Yandex.Practicum",ru:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, 2-\u0439 \u043a\u0443\u0440\u0441 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430"}},{title:"How to Learn",subtitle:"CSS & BEM",year:2020,link:"https://artginzburg-learning.github.io/how-to-learn/",category:"frontend",description:{en:"Educational project, 1st course of Yandex.Practicum",ru:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, 1-\u0439 \u043a\u0443\u0440\u0441 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430"}},{title:"3D School Map",subtitle:"Raw JS",year:2019,link:"https://artginzburg.github.io/CASProject/",category:"frontend",description:{en:"Interactive map of the school building, the first independent frontend project",ru:"\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0448\u043a\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0434\u0430\u043d\u0438\u044f, \u043f\u0435\u0440\u0432\u044b\u0439 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u043f\u0440\u043e\u0435\u043a\u0442"}},{title:"Flight Notifier",subtitle:"Node.JS & Telegraf",year:2021,link:"https://github.com/artginzburg/flightnotifier",category:"backend",description:{en:"Telegram bot for notifications about takeoffs and landings of private planes",ru:"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c-\u0431\u043e\u0442 \u0434\u043b\u044f \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043e \u0432\u0437\u043b\u0451\u0442\u0430\u0445 \u0438 \u043f\u043e\u0441\u0430\u0434\u043a\u0430\u0445 \u0447\u0430\u0441\u0442\u043d\u044b\u0445 \u0441\u0430\u043c\u043e\u043b\u0451\u0442\u043e\u0432"}},{title:"sigcheck",subtitle:"Express & Puppeteer",year:2021,link:"https://github.com/artginzburg/sigcheck",category:"backend",description:{en:"Backend of electronic signature verification for NBKI",ru:"\u0411\u044d\u043a\u0435\u043d\u0434 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u041d\u0411\u041a\u0418"}}],q=(a(38),J="category",W.reduce((function(t,e){var a=e[J];return t[a]||(t[a]=[]),t[a].push(e),t}),{}));function Y(){var t=f(),e=t.localization,a=Object(l.a)(t.state,1)[0];return y(e.titles.portfolio),Object(h.jsxs)("section",{className:"portfolio",children:[Object(h.jsxs)("div",{className:"portfolio__stats",children:[Object(h.jsx)("a",{href:"https://www.npmjs.com/~artginzburg",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"https://img.shields.io/endpoint?url=https://artginzburg.runkit.io/npmstalk/branches/master/artginzburg&style=flat-square&labelColor=rgba(0,0,0,0)&color=000&label=NPM%20downloads",alt:"My NPM downloads"})}),Object(h.jsx)("img",{src:"https://img.shields.io/github/stars/artginzburg?style=flat-square&labelColor=rgba(0,0,0,0)&color=000&logo=github&label=GitHub%20stars",alt:"My GitHub stars"})]}),Object.keys(q).map((function(t,r){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{className:"portfolio__subtitle",children:e.portfolio[t]}),Object(h.jsx)("ul",{className:"portfolio__projects",children:q[t].map((function(t,e){return Object(h.jsxs)("li",{className:"portfolio__project",children:[Object(h.jsxs)("a",{className:"portfolio__project-link",href:t.link,target:"_blank",rel:"noreferrer",children:[t.image&&Object(h.jsx)("div",{className:"portfolio__project-image-container",children:Object(h.jsx)("img",{className:"portfolio__project-image",src:t.image,alt:t.title})}),Object(h.jsxs)("div",{className:"portfolio__project-container",children:[Object(h.jsx)("p",{className:"portfolio__project-title",children:t.title}),Object(h.jsx)("p",{className:"portfolio__project-year",children:t.year})]})]}),Object(h.jsx)("p",{className:"portfolio__project-subtitle",children:t.subtitle}),Object(h.jsx)("p",{className:"portfolio__project-text",children:t.description[a]}),(t.downloads||t.stars)&&Object(h.jsxs)("div",{className:"portfolio__project-badges",children:[t.downloads&&Object(h.jsx)("img",{src:"".concat(t.downloads,"?label=\u25bc&style=flat-square&color=ddd&labelColor=ddd"),alt:"".concat(t.title," downloads")}),t.stars&&Object(h.jsx)("img",{src:"".concat(t.stars,"?color=ddd&label=\u2605&style=flat-square&labelColor=ddd"),alt:"".concat(t.title," stars")})]})]},e)}))})]},r)})),Object(h.jsxs)("p",{className:"portfolio__quantity",children:[W.length," of ",28," projects listed here"]})]})}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"and",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return"".concat(t.slice(0,-1).join("".concat(a," "))).concat(a," ").concat(e," ").concat(t.slice(-1))}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=Math.pow(10,e);return Math.floor(t*a)/a}a(39);var V=function(t){for(var e,a=Object(N.a)(t),r=a.length;0!==r;){e=Math.floor(Math.random()*r),r--;var n=[a[e],a[r]];a[r]=n[0],a[e]=n[1]}return a}(["Bulgaria","Finland","Spain","France","Ukraine","Cyprus","Italy","Abkhazia","Thailand","Israel","Croatia","Russia"]),K=595.7,Q=1e3,X=2979.7,Z=76,$=new Date("25 Mar 2002"),tt=(new Date(Date.now())-$)/1e3/60/60,et=U((K+Q)/tt*100),at=U(X/tt*100);function rt(){return Object(h.jsx)("section",{className:"life",children:Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{className:"life__subtitle",children:"Story"}),Object(h.jsxs)("p",{className:"life__text",children:["I've been to ",G(V)," to bring you the user experience learned from the architecture, culture, and urban planning of many cities. Technical knowledge is just half of the package."]}),Object(h.jsxs)("p",{className:"life__text",children:["But let's step aside from that to take a look at what I do for fun. Mainly, it's either playing these ",Z," ",Object(h.jsx)("a",{href:"https://steamcommunity.com/id/artginzburg",target:"_blank",rel:"noreferrer",className:"life__link",children:"Computer games"})," ","(",at,"%) or taking"," ",Object(h.jsx)("a",{href:"https://www.instagram.com/art.ginzburg/",target:"_blank",rel:"noreferrer",className:"life__link",children:"Photos"}),". Also, ",et,"% of my life was dedicated to watching these"," ",Object(h.jsx)("a",{href:"https://mustapp.com/@artginzburg",target:"_blank",rel:"noreferrer",className:"life__link",children:"Movies"}),"."]}),Object(h.jsxs)("p",{className:"life__text",children:["Moving further with the stats, I connected to WakaTime on August 29 2021 and spent"," ",Object(h.jsx)("a",{href:"https://wakatime.com/@artginzburg",target:"_blank",rel:"noreferrer",className:"life__link",children:Object(h.jsx)("img",{alt:"Total time coded",src:"https://wakatime.com/badge/user/992f2c32-f468-4d6e-a817-ac32f0029edf.svg"})})," ","coding since then."]}),Object(h.jsx)("p",{className:"life__text",children:"This website section is not complete 'cause everyone should sleep sometimes..."})]})})}a(40);function nt(){var t=f().localization;return Object(h.jsxs)("main",{className:"notfound",children:[Object(h.jsx)("h1",{className:"notfound__title",children:"404"}),Object(h.jsx)("h2",{className:"notfound__subtitle",children:t.notFound.subtitle}),Object(h.jsx)("nav",{className:"notfound__navigation",children:Object(h.jsx)(s.b,{to:"/",className:"notfound__link",children:t.notFound.back})})]})}var it=function(){return Object(h.jsxs)(g,{children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{exact:!0,path:"/",component:H}),Object(h.jsx)(c.a,{path:"/portfolio",component:Y}),Object(h.jsx)(c.a,{path:"/life",component:rt}),Object(h.jsx)(c.a,{component:nt})]})})]})},ot=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,i=e.getLCP,o=e.getTTFB;a(t),r(t),n(t),i(t),o(t)}))};a(41);o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(s.a,{basename:"",children:Object(h.jsx)(it,{})})}),document.getElementById("root")),ot()}},[[42,1,2]]]);
//# sourceMappingURL=main.e471a4f9.chunk.js.map