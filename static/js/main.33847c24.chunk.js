(this["webpackJsonpartginzburg.github.io"]=this["webpackJsonpartginzburg.github.io"]||[]).push([[0],{27:function(t,e,a){},28:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var i=a(1),r=a.n(i),n=a(17),s=a.n(n),o=a(6),c=(a(24),a(25),a(2)),l=a(3);function u(t,e){var a=Object(i.useState)((function(){try{var a=localStorage[t];return a?JSON.parse(a):e}catch(i){return console.log(i),e}})),r=Object(l.a)(a,2),n=r[0],s=r[1],o=Object(i.useCallback)((function(e){localStorage[t]=JSON.stringify(e),s(e)}),[t]);return function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=Object(i.useRef)();Object(i.useEffect)((function(){r.current=e}),[e]),Object(i.useEffect)((function(){if(a&&a.addEventListener){var e=function(t){return r.current(t)};return a.addEventListener(t,e),function(){a.removeEventListener(t,e)}}}),[t,a])}("storage",Object(i.useCallback)((function(a){a.key===t&&s(a.newValue?JSON.parse(a.newValue):e)}),[t,e])),[n,o]}var d={en:{titles:{main:"Developer from Moscow",portfolio:"Developer's portfolio"},home_text:"Arthur, builds impressive yet functional websites, APIs, CLI tools, apps.",notFound:{subtitle:"Page not found",back:"Back"},links:{github:"Code",telegram:"Let's work"},routes:{main:"Art Ginzburg",portfolio:"Portfolio",life:"Life"},portfolio:{frontend:"Front-end",cli:"CLI",apps:"Apps",backend:"Back-end"},badges:{npm:"NPM downloads",github:"GitHub stars"},countries:["Bulgaria","Finland","Spain","France","Ukraine","Cyprus","Italy","Abkhazia","Thailand","Israel","Croatia","Russia"],life:{story:"Story",education:"Education",texts:{countries:function(t){return"I've been to ".concat(t," to bring you the user experience learned from the architecture, culture, and urban planning of many cities. Technical knowledge is just half of the package.")},stats:["But let's step aside from that to take a look at what I do for fun. Mainly, it's either playing these","or taking ",". Also,","of my life was dedicated to watching these ","Moving further with the stats, I spent "," coding since August 29 2021."],links:{steam:"Computer games",instagram:"Photos",mustapp:"Movies",practicum:"Yandex.Praktikum",ibdp:"International Baccalaureate\xae (IB) Diploma Programme (DP)"},education:{practicum:{dates:" | Jan, 2021 - Oct, 2021",faculty:"Web-Developer ",project:"Portfolio"},ibdp:{dates:" | Sep, 2018 - Jun, 2020",faculty:"Film \xb7 Computer Science \xb7 Business & Management ",project:"CAS Project"}}}},listLastWord:", and"},ru:{titles:{main:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0438\u0437 \u041c\u043e\u0441\u043a\u0432\u044b",portfolio:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"},home_text:"\u0410\u0440\u0442\u0443\u0440 \u2014 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u044f\u044e\u0449\u0438\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044b, API, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b.",notFound:{subtitle:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430",back:"\u041d\u0430\u0437\u0430\u0434"},links:{github:"\u041a\u043e\u0434",telegram:"\u041f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c?"},routes:{main:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433",portfolio:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",life:"\u041b\u0430\u0439\u0444"},portfolio:{frontend:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434",cli:"\u041a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b",apps:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",backend:"\u0411\u044d\u043a\u0435\u043d\u0434"},badges:{npm:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441 NPM",github:"\u0417\u0432\u0451\u0437\u0434\u044b \u043d\u0430 GitHub"},countries:["\u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044e","\u0424\u0438\u043d\u043b\u044f\u043d\u0434\u0438\u044e","\u0418\u0441\u043f\u0430\u043d\u0438\u044e","\u0424\u0440\u0430\u043d\u0446\u0438\u044e","\u0423\u043a\u0440\u0430\u0438\u043d\u0443","\u041a\u0438\u043f\u0440","\u0418\u0442\u0430\u043b\u0438\u044e","\u0410\u0431\u0445\u0430\u0437\u0438\u044e","\u0422\u0430\u0439\u043b\u0430\u043d\u0434","\u0418\u0437\u0440\u0430\u0438\u043b\u044c","\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044e","\u0420\u043e\u0441\u0441\u0438\u044e"],life:{story:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f",education:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",texts:{countries:function(t){return"\u042f \u043f\u043e\u0441\u0435\u0442\u0438\u043b ".concat(t,", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u0432\u0435\u0437\u0442\u0438 \u0432\u0430\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043e\u043f\u044b\u0442, \u043f\u043e\u0447\u0435\u0440\u043f\u043d\u0443\u0442\u044b\u0439 \u0438\u0437 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b, \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b \u0438 \u0443\u0440\u0431\u0430\u043d\u0438\u0441\u0442\u0438\u043a\u0438 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0433\u043e\u0440\u043e\u0434\u043e\u0432. \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u043d\u0430\u043d\u0438\u044f \u2014 \u043b\u0438\u0448\u044c \u043f\u043e\u043b\u0434\u0435\u043b\u0430.")},stats:["\u041d\u043e \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0442\u0441\u0442\u0443\u043f\u0438\u043c \u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0432\u0437\u0433\u043b\u044f\u043d\u0435\u043c \u043d\u0430 \u0442\u043e, \u043a\u0430\u043a \u042f \u0440\u0430\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u044d\u0442\u0438","\u0438 \u0434\u0435\u043b\u0430\u0442\u044c ",". \u041a\u0441\u0442\u0430\u0442\u0438,","\u043c\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438 \u0431\u044b\u043b\u0438 \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0443 \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 ","\u0414\u0432\u0438\u0433\u0430\u044f\u0441\u044c \u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u043e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0435, \u042f \u043f\u0440\u043e\u0432\u0451\u043b \u0437\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c "," \u0441 29-\u0433\u043e \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2021."],links:{steam:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u044b\u0445 \u0438\u0433\u0440",instagram:"\u0421\u043d\u0438\u043c\u043a\u0438",mustapp:"\u0424\u0438\u043b\u044c\u043c\u043e\u0432",practicum:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c",ibdp:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u0430\u044f \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0411\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442\u0430\xae (IB DP)"},education:{practicum:{dates:" | \u044f\u043d\u0432. 2021 - \u043e\u043a\u0442. 2021",faculty:"\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a ",project:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"},ibdp:{dates:" | \u0441\u0435\u043d. 2018 - \u044f\u043d\u0432. 2020",faculty:"\u0424\u0438\u043b\u044c\u043c \xb7 \u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u0430\u044f \u041d\u0430\u0443\u043a\u0430 \xb7 \u0411\u0438\u0437\u043d\u0435\u0441 & \u041c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442 ",project:"CAS \u041f\u0440\u043e\u0435\u043a\u0442"}}}},listLastWord:" \u0438"}},h=a(0),b=Object(i.createContext)();function g(t){var e=t.children,a=u("language",navigator.language.includes("ru")?"ru":"en"),i=Object(l.a)(a,1)[0],r={localization:d[i],state:a};return Object(h.jsx)(b.Provider,{value:r,children:e})}function f(){var t=Object(i.useContext)(b);if(void 0===t)throw new Error("useLanguage must be used within a LanguageProvider");return t}var p=a(7),m=function(t){return t.filter(Boolean).join(" ")},j=function(t){return{className:m(t)}};a(27);function _(){var t=f(),e=Object(l.a)(t.state,2),a=e[0],r=e[1];var n="ru"===a,s=Object(i.useState)(n),o=Object(l.a)(s,2),c=o[0],u=o[1];var d={onClick:function(t){r(t.target.innerText.toLowerCase())},onMouseEnter:function(t){a!==t.target.innerText.toLowerCase()&&u(!n)},onMouseLeave:function(t){a!==t.target.innerText.toLowerCase()&&u(n)},type:"button"};return Object(h.jsxs)("div",Object(p.a)(Object(p.a)({},j(["header__language",c&&"header__language_moved"])),{},{children:[Object(h.jsx)("button",Object(p.a)(Object(p.a)(Object(p.a)({},j(["header__language-button","en"===a&&"header__language-button_selected"])),d),{},{children:"EN"})),Object(h.jsx)("button",Object(p.a)(Object(p.a)(Object(p.a)({},j(["header__language-button","ru"===a&&"header__language-button_selected"])),d),{},{children:"RU"}))]}))}a(28);function x(){var t=f().localization;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("nav",{className:"header__links",children:[Object(h.jsx)(o.c,{exact:!0,to:"/",className:"header__logo",activeClassName:"header__logo_active",children:t.routes.main}),Object(h.jsxs)("ul",{className:"header__navigation",children:[Object(h.jsx)(o.c,{to:"/portfolio",className:"header__link",activeClassName:"header__link_active",children:t.routes.portfolio}),Object(h.jsx)(o.c,{to:"/life",className:"header__link",activeClassName:"header__link_active",children:t.routes.life})]})]}),Object(h.jsx)(_,{})]})}var O=a(16),v=a.p+"static/media/avatar.027bee14.jpg",k=function(t){var e=f().localization;Object(i.useEffect)((function(){document.title="".concat(e.routes.main," \xb7 ").concat(t)}),[e.routes.main,t])},w=a(10),y="abcdefghijklmnopqrstuvwxyz0123456789",N=y.length;function M(t){for(var e=[],a=0;a<t;)e.push(y.charAt(Math.floor(Math.random()*N))),a++;return e}function z(t){return Array(Math.trunc(t)).fill()}function S(t){return Math.floor(Math.random()*t)}a(37);var C="\u7995",P=30,B=function(t,e){for(var a=[],i=0;i<e;)a.push(M(t)),i++;return a}(P,P);function E(t,e,a){var i,r=(i=t,i.reduce((function(t,e){return t.length>e.length?t:e}),"")).length,n=r>e?r:e,s=r>a?r:a,o=function(t,e){return z(e).map((function(){return z(t)}))}(n,s);return t.forEach((function(t,e){o=function(t,e,a,i,r,n){for(var s=Math.random()>.5,o=!s||Math.random()>.5,c=S(s?r-i+1:r-1),l=S(o?n-i+1:n-1),u=t.split(""),d=[],h=l,b=c,g=h,f=0;f<n;f++){var p=u[f-h],m=a[f];if(m)if(p&&g===f){if(o)m[b]="".concat(e).concat(C).concat(p);else for(var j=0;j<u.length;j++){var _=u[j];m[b++]="".concat(e).concat(C).concat(_)}d.push(m),s&&b++,o&&g++}else d.push(m)}return d}(t,e,o,r,n,s)})),o}function L(t,e){var a=Object(w.a)(t);if(!e)return a;for(var i=Math.floor(a.length/2)-Math.floor(e.length/2),r=0,n=i;n<i+e.length;n++){var s=e[r];s&&s.split(C)[1].trim()&&(a[n]=s),r++}return a}var R=Object(i.memo)((function(t){var e=t.words,a=function(){var t=Object(i.useState)([0,0]),e=Object(l.a)(t,2),a=e[0],r=e[1];function n(){r((function(t){var e=[window.innerWidth,window.innerHeight];return Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])>100?e:t}))}return Object(i.useLayoutEffect)((function(){return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n)}}),[]),a}(),r=Object(l.a)(a,2),n=r[0],s=r[1],o=Object(i.useState)(B),c=Object(l.a)(o,2),u=c[0],d=c[1],b=Object(i.useRef)();return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=Object(i.useRef)();Object(i.useEffect)((function(){clearTimeout(a.current),a.current=setTimeout(t,e)}),[t,e])}(Object(i.useCallback)((function(){var t=function(t){var e=t.getBoundingClientRect();return{width:e.width/P,height:e.height/P}}(b.current),a={horizontally:Math.round(n/t.width),vertically:Math.round(s/t.height)},i=a.horizontally,r=a.vertically;d(function(t,e){for(var a=Object(w.a)(t),i=Math.floor(a.length/2)-Math.floor(e.length/2),r=0,n=i;n<i+e.length;n++){var s=a[n],o=e[r];a[n]=L(s,o),r++}return a}(B,E(e,i>P?P:i,r>P?P:r)))}),[n,s,e]),300),Object(h.jsx)("div",{ref:b,className:"hiddenWords",children:u.map((function(t,e){return Object(h.jsx)("p",{className:"hiddenWords__char",children:t.map((function(t,a){if(1===t.length)return t;var i=t.split(C),r=Object(l.a)(i,2),n=r[0],s=r[1];return Object(h.jsx)("span",{id:"char-".concat(n),className:"hiddenWords__char-active",children:s},"".concat(e).concat(a))}))},e)}))})})),I=R,F=(a(38),["develop","software","ginzburg"]);function T(){var t=f().localization;return k(t.titles.main),Object(h.jsxs)("section",{className:"home",children:[Object(h.jsx)(I,{words:F}),Object(h.jsx)("img",{src:v,className:"home__logo",alt:"avatar"}),Object(h.jsx)("p",{className:"home__text",children:t.home_text}),Object(h.jsxs)("nav",{className:"home__buttons",children:[Object(h.jsxs)("a",{className:"home__button",href:"https://github.com/artginzburg",target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)("span",{className:"home__button-icon",children:Object(h.jsx)(O.a,{})}),Object(h.jsx)("p",{className:"home__button-text",children:t.links.github})]}),Object(h.jsxs)("a",{className:"home__button",href:"https://t.me/ginzart",target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)("span",{className:"home__button-icon",children:Object(h.jsx)(O.b,{})}),Object(h.jsx)("p",{className:"home__button-text",children:t.links.telegram})]})]}),Object(h.jsx)(o.b,{to:"/portfolio",className:"home__description",children:"Express.js, MongoDB, React"})]})}var A=a.p+"static/media/middleclick.33340f83.png",D=a.p+"static/media/otptotray.c1e8dd46.png",W=a.p+"static/media/sudotouchid.b6d57707.png",J=a.p+"static/media/powerchime.88506f7d.png",H=a.p+"static/media/CASProject.b4a31113.png",Y=a.p+"static/media/how-to-learn.1eeddd35.png",q=a.p+"static/media/movies-explorer-frontend.66a6b2ce.png",G=a.p+"static/media/russian-travel.f9846228.png",U=[{title:"2FA to Tray",subtitle:"Swift & JS",image:D,year:2020,link:"https://2fatotray.unicornplatform.page",category:"apps",description:{en:"One-time password manager for mac OS, which, despite its simplicity, has almost passed into the daily top of Product Hunt",ru:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u0445 \u043f\u0430\u0440\u043e\u043b\u0435\u0439 \u0434\u043b\u044f macOS, \u043a\u043e\u0442\u043e\u0440\u044b\u0439, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0441\u0432\u043e\u044e \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0443, \u043f\u043e\u0447\u0442\u0438 \u043f\u0440\u043e\u0448\u0451\u043b \u0432 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0442\u043e\u043f Product Hunt"},downloads:"https://img.shields.io/github/downloads/artginzburg/2fatotray/total",stars:"https://img.shields.io/github/stars/artginzburg/2fatotray"},{title:"MiddleClick",subtitle:"Objective-C",image:A,year:2019,link:"https://github.com/artginzburg/MiddleClick-Catalina",category:"apps",description:{en:"\uf8ff Middleclick with three-finger click/tap for MacBook trackpad and Magic Mouse.",ru:'\uf8ff "\u041a\u043b\u0438\u043a \u043a\u043e\u043b\u0451\u0441\u0438\u043a\u043e\u043c" \u0442\u0440\u0435\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438 \u0434\u043b\u044f \u0442\u0440\u0435\u043a\u043f\u0430\u0434\u0430 \u0438 Magic Mouse'},downloads:"https://img.shields.io/github/downloads/artginzburg/middleclick-catalina/total",stars:"https://img.shields.io/github/stars/artginzburg/middleclick-catalina"},{title:"sudo-touchid",subtitle:"Raw Shellscript",image:W,year:2021,link:"https://git.io/sudotouchid",category:"cli",description:{en:"Script for automating the use of Touch ID instead of a password on the command line",ru:"\u0421\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f TouchID \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u0440\u043e\u043b\u044f \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435"},downloads:"https://img.shields.io/github/downloads/artginzburg/sudo-touchid/total",stars:"https://img.shields.io/github/stars/artginzburg/sudo-touchid"},{title:"barhide",subtitle:"Raw Shellscript",year:2019,link:"https://git.io/barhide",category:"cli",description:{en:"Hiding extra icons from the Menu Bar",ru:"\u0421\u043a\u0440\u044b\u0442\u0438\u0435 \u043b\u0438\u0448\u043d\u0438\u0445 \u0438\u043a\u043e\u043d\u043e\u043a \u0438\u0437 Menu Bar"},downloads:"https://img.shields.io/github/downloads/artginzburg/barhide/total",stars:"https://img.shields.io/github/stars/artginzburg/barhide"},{title:"powerchime",subtitle:"Raw Shellscript",image:J,year:2019,link:"https://git.io/nochime",category:"cli",description:{en:"Switching the sound of the charging cable connection",ru:"\uf8ff \u0422\u043e\u0442 \u0441\u0430\u043c\u044b\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c \u0437\u0432\u0443\u043a\u0430 \u0437\u0430\u0440\u044f\u0434\u043a\u0438 \u0434\u043b\u044f MacBook \ud83d\udd0a"},downloads:"https://img.shields.io/github/downloads/artginzburg/powerchime/total",stars:"https://img.shields.io/github/stars/artginzburg/powerchime"},{title:"wifi-pass",subtitle:"Raw Shellscript",year:2019,link:"https://git.io/wifi-pass",category:"cli",description:{en:"Fast sharing of Wi-Fi passwords",ru:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0448\u0435\u0440\u0438\u043d\u0433 \u043f\u0430\u0440\u043e\u043b\u0435\u0439 Wi-Fi"},stars:"https://img.shields.io/github/stars/artginzburg/wifi-pass"},{title:"Movies Explorer",subtitle:"React Hooks & MongoDB",image:q,year:2021,link:"https://deeplomka.nomoredomains.club",category:"frontend",description:{en:"Diploma for 100/100 points while studying at Yandex.Practicum",ru:"\u0414\u0438\u043f\u043b\u043e\u043c \u043d\u0430 100/100 \u0431\u0430\u043b\u043b\u043e\u0432 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 Yandex.Practicum"}},{title:"Mesto",subtitle:"React Hooks & MongoDB (Webpack, Babel, Express)",image:a.p+"static/media/react-mesto-auth.34269dc2.png",year:2021,link:"https://artginzburg-learning.github.io/react-mesto-auth/",category:"frontend",description:{en:"The first full-fledged educational React project with authorization (6th course of Yandex.Practicum)",ru:"\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0435\u0431\u043d\u044b\u0439 React-\u043f\u0440\u043e\u0435\u043a\u0442 \u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0435\u0439 (6-\u0439 \u043a\u0443\u0440\u0441 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430)"}},{title:"Travelling in Russia",subtitle:"CSS & BEM",image:G,year:2020,link:"https://artginzburg-learning.github.io/russian-travel/",category:"frontend",description:{en:"Educational project, 2nd course of Yandex.Practicum",ru:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, 2-\u0439 \u043a\u0443\u0440\u0441 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430"}},{title:"How to Learn",subtitle:"CSS & BEM",image:Y,year:2020,link:"https://artginzburg-learning.github.io/how-to-learn/",category:"frontend",description:{en:"Educational project, 1st course of Yandex.Practicum",ru:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, 1-\u0439 \u043a\u0443\u0440\u0441 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430"}},{title:"3D School Map",subtitle:"Raw JS",image:H,year:2019,link:"https://artginzburg.github.io/CASProject/",category:"frontend",description:{en:"Interactive map of the school building, the first independent frontend project",ru:"\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0448\u043a\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0434\u0430\u043d\u0438\u044f, \u043f\u0435\u0440\u0432\u044b\u0439 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u043f\u0440\u043e\u0435\u043a\u0442"}},{title:"Flight Notifier",subtitle:"Node.JS & Telegraf",year:2021,link:"https://github.com/artginzburg/flightnotifier",category:"backend",description:{en:"Telegram bot for notifications about takeoffs and landings of private planes",ru:"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c-\u0431\u043e\u0442 \u0434\u043b\u044f \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043e \u0432\u0437\u043b\u0451\u0442\u0430\u0445 \u0438 \u043f\u043e\u0441\u0430\u0434\u043a\u0430\u0445 \u0447\u0430\u0441\u0442\u043d\u044b\u0445 \u0441\u0430\u043c\u043e\u043b\u0451\u0442\u043e\u0432"}},{title:"sigcheck",subtitle:"Express & Puppeteer",year:2021,link:"https://github.com/artginzburg/sigcheck",category:"backend",description:{en:"Backend of electronic signature verification for NBKI",ru:"\u0411\u044d\u043a\u0435\u043d\u0434 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u041d\u0411\u041a\u0418"}}],V={mustapp:{hoursMovies:595.7,hoursSeries:1e3},steam:{hours:2979.7,gamesPlayed:76},github:{totalRepos:28}};V.mustapp.total=V.mustapp.hoursMovies+V.mustapp.hoursSeries;var K={birthday:new Date("25 Mar 2002")};K.ms=new Date-K.birthday,K.hours=K.ms/1e3/60/60;a(39);var Q="style=flat-square&color=".concat("ddd","&labelColor=").concat("ddd");function X(t){var e=t.project,a=f(),i=Object(l.a)(a.state,1)[0];return Object(h.jsxs)("li",{className:"project",children:[Object(h.jsxs)("a",{className:"project__link",href:e.link,target:"_blank",rel:"noreferrer",children:[e.image&&Object(h.jsx)("div",{className:"project__image-scroller",children:Object(h.jsx)("div",{className:"project__image-container",children:Object(h.jsx)("img",{className:"project__image",src:e.image,alt:e.title})})}),Object(h.jsxs)("div",{className:"project__container",children:[Object(h.jsx)("p",{className:"project__title",children:e.title}),Object(h.jsx)("p",{className:"project__year",children:e.year})]})]}),Object(h.jsx)("p",{className:"project__subtitle",children:e.subtitle}),Object(h.jsx)("p",{className:"project__text",children:e.description[i]}),(e.downloads||e.stars)&&Object(h.jsxs)("div",{className:"project__badges",children:[e.downloads&&Object(h.jsx)("img",{src:"".concat(e.downloads,"?").concat(Q,"&label=\u25bc"),alt:"".concat(e.title," downloads")}),e.stars&&Object(h.jsx)("img",{src:"".concat(e.stars,"?").concat(Q,"&label=\u2605"),alt:"".concat(e.title," stars")})]})]})}a(40);var Z,$=(Z="category",U.reduce((function(t,e){var a=e[Z];return t[a]||(t[a]=[]),t[a].push(e),t}),{}));function tt(){var t=f().localization;return k(t.titles.portfolio),Object(h.jsxs)("section",{className:"portfolio",children:[Object(h.jsxs)("div",{className:"portfolio__stats",children:[Object(h.jsx)("a",{href:"https://www.npmjs.com/~artginzburg",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"https://img.shields.io/endpoint?url=https://artginzburg.runkit.io/npmstalk/branches/master/artginzburg&style=flat-square&labelColor=rgba(0,0,0,0)&color=000&label=".concat(t.badges.npm),alt:t.badges.npm,className:"portfolio__stats-badge"})}),Object(h.jsx)("a",{href:"https://github.com/artginzburg",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"https://img.shields.io/github/stars/artginzburg?style=flat-square&labelColor=rgba(0,0,0,0)&color=000&logo=github&label=".concat(t.badges.github),alt:t.badges.github,className:"portfolio__stats-badge"})})]}),Object.keys($).map((function(e,a){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{className:"portfolio__subtitle",children:t.portfolio[e]}),Object(h.jsx)("ul",{className:"portfolio__projects",children:$[e].map((function(t,e){return Object(h.jsx)(X,{project:t},e)}))})]},a)})),Object(h.jsxs)("p",{className:"portfolio__quantity",children:[U.length," of ",V.github.totalRepos," projects listed here"]})]})}function et(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=Math.pow(10,e);return Math.floor(t*a)/a}a(41);var at={films:et(V.mustapp.total/K.hours*100),games:et(V.steam.hours/K.hours*100)};function it(){var t=f().localization,e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", and",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return"".concat(t.slice(0,-1).join("".concat(a," "))).concat(e," ").concat(t.slice(-1))}(function(t){for(var e,a=Object(w.a)(t),i=a.length;0!==i;){e=Math.floor(Math.random()*i),i--;var r=[a[e],a[i]];a[i]=r[0],a[e]=r[1]}return a}(t.countries),t.listLastWord);return Object(h.jsxs)("section",{className:"life",children:[Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{className:"life__subtitle",children:t.life.story}),Object(h.jsx)("p",{className:"life__text",children:t.life.texts.countries(e)}),Object(h.jsxs)("p",{className:"life__text",children:[t.life.texts.stats[0]," ",V.steam.gamesPlayed," ",Object(h.jsx)("a",{href:"https://steamcommunity.com/id/artginzburg",target:"_blank",rel:"noreferrer",className:"life__link",children:t.life.texts.links.steam})," ","(",at.games,"%) ",t.life.texts.stats[1],Object(h.jsx)("a",{href:"https://www.instagram.com/art.ginzburg/",target:"_blank",rel:"noreferrer",className:"life__link",children:t.life.texts.links.instagram}),t.life.texts.stats[2]," ",at.films,"% ",t.life.texts.stats[3],Object(h.jsx)("a",{href:"https://mustapp.com/@artginzburg",target:"_blank",rel:"noreferrer",className:"life__link",children:t.life.texts.links.mustapp}),"."]}),Object(h.jsxs)("p",{className:"life__text",children:[t.life.texts.stats[4],Object(h.jsx)("a",{href:"https://wakatime.com/@artginzburg",target:"_blank",rel:"noreferrer",className:"life__link",children:Object(h.jsx)("img",{alt:"Total time coded",src:"https://wakatime.com/badge/user/992f2c32-f468-4d6e-a817-ac32f0029edf.svg",className:"life__badge"})}),t.life.texts.stats[5]]})]}),Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{className:"life__subtitle",children:t.life.education}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:"life__text",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("a",{href:"https://praktikum.yandex.ru",target:"_blank",rel:"noreferrer",className:"life__link",children:t.life.texts.links.practicum}),t.life.texts.education.practicum.dates]}),Object(h.jsxs)("p",{children:[t.life.texts.education.practicum.faculty,Object(h.jsx)("a",{href:"https://github.com/artginzburg/yandex.praktikum-portfolio",target:"_blank",rel:"noreferrer",className:"life__link life__link_button",children:t.life.texts.education.practicum.project})]})]}),Object(h.jsxs)("li",{className:"life__text",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("a",{href:"https://www.ibo.org/programmes/diploma-programme/",target:"_blank",rel:"noreferrer",className:"life__link",children:t.life.texts.links.ibdp}),t.life.texts.education.ibdp.dates]}),Object(h.jsxs)("p",{children:[t.life.texts.education.ibdp.faculty,Object(h.jsx)("a",{href:"https://artginzburg.github.io/CASProject/",target:"_blank",rel:"noreferrer",className:"life__link life__link_button",children:t.life.texts.education.ibdp.project})]})]})]})]})]})}a(42);function rt(){var t=f().localization;return Object(h.jsxs)("main",{className:"notfound",children:[Object(h.jsx)("h1",{className:"notfound__title",children:"404"}),Object(h.jsx)("h2",{className:"notfound__subtitle",children:t.notFound.subtitle}),Object(h.jsx)("nav",{className:"notfound__navigation",children:Object(h.jsx)(o.b,{to:"/",className:"notfound__link",children:t.notFound.back})})]})}var nt=function(){return Object(h.jsxs)(g,{children:[Object(h.jsx)(x,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{exact:!0,path:"/",component:T}),Object(h.jsx)(c.a,{path:"/portfolio",component:tt}),Object(h.jsx)(c.a,{path:"/life",component:it}),Object(h.jsx)(c.a,{component:rt})]})})]})},st=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(e){var a=e.getCLS,i=e.getFID,r=e.getFCP,n=e.getLCP,s=e.getTTFB;a(t),i(t),r(t),n(t),s(t)}))};a(43);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(o.a,{basename:"",children:Object(h.jsx)(nt,{})})}),document.getElementById("root")),st()}},[[44,1,2]]]);
//# sourceMappingURL=main.33847c24.chunk.js.map