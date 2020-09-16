/*! For license information please see 2.93789cf2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{110:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},111:function(e,t,a){"use strict";var n=a(0),r=a(110);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(124),o=a(115),l=a(119),s=a(8);const i="light",u="dark",d=e=>e===u?u:i,m=()=>s.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):i,h=e=>{try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}};var f=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(o.a)(),[t,a]=Object(n.useState)(m),r=Object(n.useCallback)(()=>{a(i),h(i)},[]),c=Object(n.useCallback)(()=>{a(u),h(u)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",d(t))},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(d(e))}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?u:i)})},[]),{isDarkTheme:t===u,setLightTheme:r,setDarkTheme:c}},b=a(149);var v=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=f();return r.a.createElement(b.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var p=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var g=()=>{const{announcementBar:e}=Object(o.a)().siteConfig.themeConfig,[t,a]=Object(n.useState)(!0),r=Object(n.useCallback)(()=>{localStorage.setItem("docusaurus.announcement.dismiss","true"),a(!0)},[]);return Object(n.useEffect)(()=>{if(!e)return;const{id:t}=e;let n=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;localStorage.setItem("docusaurus.announcement.id",t),r&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(r||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},k=a(110);var E=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=p(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=g();return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)},O=a(109),y=a(111),j=a(50),C=a.n(j);var w=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(o.a)(),{content:t,backgroundColor:a,textColor:n,isCloseable:c}=e,{isAnnouncementBarClosed:l,closeAnnouncementBar:s}=Object(y.a)();return!t||c&&l?null:r.a.createElement("div",{className:C.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},r.a.createElement("div",{className:Object(O.a)(C.a.announcementBarContent,{[C.a.announcementBarCloseable]:c}),dangerouslySetInnerHTML:{__html:t}}),c?r.a.createElement("button",{type:"button",className:C.a.announcementBarClose,onClick:s,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},_=a(2),S=a(117),N=a(22),T=a(122),L=a(150);function M(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var I=a(151);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function x(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var A=r.a.forwardRef((function(e,t){var a=B(Object(n.useState)((function(){return x()?"\u2318":"Ctrl"})),2),c=a[0],o=a[1];return Object(n.useEffect)((function(){x()&&o("\u2318")}),[]),r.a.createElement("button",D({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement(I.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===c?r.a.createElement(M,null):c),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))}));let R=null;function U({hit:e,children:t}){return r.a.createElement(S.a,{to:e.url},t)}function V({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(L.a)();return r.a.createElement(S.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function X(e){const{siteMetadata:t}=Object(o.a)(),{withBaseUrl:s}=Object(l.b)(),i=Object(T.useHistory)(),u=Object(n.useRef)(null),[d,m]=Object(n.useState)(!1),[h,f]=Object(n.useState)(null),b=Object(n.useCallback)(()=>R?Promise.resolve():Promise.all([a.e(47).then(a.bind(null,268)),Promise.all([a.e(0),a.e(48)]).then(a.bind(null,267)),a.e(0).then(a.t.bind(null,107,7))]).then(([{DocSearchModal:e}])=>{R=e}),[]),v=Object(n.useCallback)(()=>{b().then(()=>{m(!0)})},[b,m]),p=Object(n.useCallback)(()=>{m(!1)},[m]),g=Object(n.useCallback)(e=>{b().then(()=>{m(!0),f(e.key)})},[b,m,f]),k=Object(n.useRef)({navigate({suggestionUrl:e}){i.push(e)}}).current,E=Object(n.useRef)(e=>e.map(e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:s(`${t.pathname}${t.hash}`)}})).current,O=Object(n.useMemo)(()=>e=>r.a.createElement(V,Object(_.a)({},e,{onClose:p})),[p]),y=Object(n.useCallback)(e=>(e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e),[t.docusaurusVersion]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,c,o])}({isOpen:d,onOpen:v,onClose:p,onInput:g,searchButtonRef:u}),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${e.appId}-dsn.algolia.net`,crossOrigin:!0})),r.a.createElement(A,{onTouchStart:b,onFocus:b,onMouseOver:b,onClick:v,ref:u}),d&&Object(N.createPortal)(r.a.createElement(R,Object(_.a)({onClose:p,initialScrollY:window.scrollY,initialQuery:h,navigator:k,transformItems:E,hitComponent:U,resultsFooterComponent:O,transformSearchClient:y},e)),document.body))}var F=function(){const{siteConfig:e}=Object(o.a)();return r.a.createElement(X,e.themeConfig.algolia)},H=a(187),K=a.n(H),$=a(51),Y=a.n($);const q=({icon:e,style:t})=>r.a.createElement("span",{className:Object(O.a)(Y.a.toggle,Y.a.dark),style:t},e),G=({icon:e,style:t})=>r.a.createElement("span",{className:Object(O.a)(Y.a.toggle,Y.a.light),style:t},e);var W=function(e){const{siteConfig:{themeConfig:{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:n,lightIconStyle:c}}}},isClient:l}=Object(o.a)();return r.a.createElement(K.a,Object(_.a)({disabled:!l,icons:{checked:r.a.createElement(q,{icon:t,style:a}),unchecked:r.a.createElement(G,{icon:n,style:c})}},e))},z=a(135);var J=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},Q=a(153);var Z=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[o,l]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(T.useLocation)(),[m,h]=J(d.hash);return Object(Q.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return c(!1),a(!1),void l(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;o&&t>=o?a(!1):t+i<n&&a(!0),l(t)},[o,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&c(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},ee=a(154),te=a(155),ae=a(156),ne=a(52),re=a.n(ne),ce=a(145);const oe={default:()=>ce.a,docsVersion:()=>a(191).default,docsVersionDropdown:()=>a(195).default};function le({type:e,...t}){const a=((e="default")=>{const t=oe[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(a,t)}var se=function(){const{siteConfig:{themeConfig:{navbar:{title:e="",items:t=[],hideOnScroll:a=!1}={},colorMode:{disableSwitch:c=!1}={}}},isClient:l}=Object(o.a)(),[s,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:m,setLightTheme:h,setDarkTheme:f}=Object(z.a)(),{navbarRef:b,isNavbarVisible:v}=Z(a),{logoLink:p,logoLinkProps:g,logoImageUrl:k,logoAlt:E}=Object(ae.a)();Object(ee.a)(s);const y=Object(n.useCallback)(()=>{i(!0)},[i]),j=Object(n.useCallback)(()=>{i(!1)},[i]),C=Object(n.useCallback)(e=>e.target.checked?f():h(),[h,f]),w=Object(te.a)();Object(n.useEffect)(()=>{w===te.b.desktop&&i(!1)},[w]);const{leftItems:N,rightItems:T}=function(e){return{leftItems:e.filter(e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")}),rightItems:e.filter(e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")})}}(t);return r.a.createElement("nav",{ref:b,className:Object(O.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[re.a.navbarHideable]:a,[re.a.navbarHidden]:!v})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:y,onKeyDown:y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(S.a,Object(_.a)({className:"navbar__brand",to:p},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:Object(O.a)("navbar__title",{[re.a.hideLogoText]:u})},e)),N.map((e,t)=>r.a.createElement(le,Object(_.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},T.map((e,t)=>r.a.createElement(le,Object(_.a)({},e,{key:t}))),!c&&r.a.createElement(W,{className:re.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:m,onChange:C}),r.a.createElement(F,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:j}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(S.a,Object(_.a)({className:"navbar__brand",onClick:j,to:p},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&s&&r.a.createElement(W,{"aria-label":"Dark mode toggle in sidebar",checked:m,onChange:C})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(le,Object(_.a)({mobile:!0},e,{onClick:j,key:t}))))))))},ie=a(53),ue=a.n(ie);function de({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const o=Object(l.a)(e),s=Object(l.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(S.a,Object(_.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?s:t}:{to:o},c),a)}const me=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var he=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:s=[],logo:i={}}=n||{},u=Object(l.a)(i.src);return n?r.a.createElement("footer",{className:Object(O.a)("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(de,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:ue.a.footerLogoLink},r.a.createElement(me,{alt:i.alt,url:u})):r.a.createElement(me,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(54);function fe({children:e}){return r.a.createElement(v,null,r.a.createElement(E,null,e))}t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:s},url:i}=t,{children:u,title:d,noFooter:m,description:h,image:f,keywords:b,permalink:v}=e,p=d?`${d} | ${n}`:n,g=f||s,k=Object(l.a)(g,{absolute:!0}),E=Object(l.a)(a);return r.a.createElement(fe,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),a&&r.a.createElement("link",{rel:"shortcut icon",href:E}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),g&&r.a.createElement("meta",{property:"og:image",content:k}),g&&r.a.createElement("meta",{property:"twitter:image",content:k}),g&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),v&&r.a.createElement("meta",{property:"og:url",content:i+v}),v&&r.a.createElement("link",{rel:"canonical",href:i+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(w,null),r.a.createElement(se,null),r.a.createElement("div",{className:"main-wrapper"},u),!m&&r.a.createElement(he,null))}},135:function(e,t,a){"use strict";var n=a(0),r=a(149);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},145:function(e,t,a){"use strict";var n,r=a(2),c=a(0),o=a.n(c),l=a(109),s=a(117),i=a(119);var u=function(){if(void 0!==n)return n;var e=!1,t={get passive(){e=!0}},a=function(){};return window.addEventListener("t",a,t),window.removeEventListener("t",a,t),n=e,e},d=c.useLayoutEffect,m=function(e){var t=Object(c.useRef)(e);return d((function(){t.current=e})),t},h=["mousedown","touchstart"],f=function(e){if("touchstart"===e)return u()?{passive:!0}:void 0};var b=function(e,t){var a=m(t);Object(c.useEffect)((function(){if(t){var n=function(t){e.current&&a.current&&!e.current.contains(t.target)&&a.current(t)};return h.forEach((function(e){document.addEventListener(e,n,f(e))})),function(){h.forEach((function(e){document.removeEventListener(e,n,f(e))}))}}}),[!t])};function v({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:c,activeClassName:l="navbar__link--active",prependBaseUrlToHref:u,...d}){const m=Object(i.a)(a),h=Object(i.a)(e),f=Object(i.a)(n,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:u?f:n}:{isNavLink:!0,activeClassName:l,to:m,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(h)}:null},d),c)}function p({items:e,position:t,className:a,...n}){const s=o.a.useRef(null),i=o.a.useRef(null),[u,d]=Object(c.useState)(!1);function m(e){if(e){var t,a;const e=null==i||null===(t=i.current)||void 0===t||null===(a=t.firstChild)||void 0===a?void 0:a.firstChild;e&&e.focus()}d(e)}b(s,()=>m(!1));const h=(e,t=!1)=>Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?o.a.createElement("div",{ref:s,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},o.a.createElement(v,Object(r.a)({className:h(a)},n,{onClick:n.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{("Enter"===e.key&&!n.to||"Tab"===e.key)&&(e.preventDefault(),m(!0))}}),n.label),o.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map(({className:t,...a},n)=>o.a.createElement("li",{key:n},o.a.createElement(v,Object(r.a)({onKeyDown:t=>{n===e.length-1&&"Tab"===t.key&&(t.preventDefault(),m(!1))},activeClassName:"dropdown__link--active",className:h(t,!0)},a)))))):o.a.createElement(v,Object(r.a)({className:h(a)},n))}function g({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>Object(l.a)("menu__link",{"menu__link--sublist":t},e);return e?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(v,Object(r.a)({className:c(a,!0)},n),n.label),o.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>o.a.createElement("li",{className:"menu__list-item",key:a},o.a.createElement(v,Object(r.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:n.onClick})))))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(v,Object(r.a)({className:c(a)},n)))}t.a=function({mobile:e=!1,...t}){const a=e?g:p;return o.a.createElement(a,t)}},149:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},150:function(e,t,a){"use strict";var n=a(122),r=a(8),c=a(115);t.a=function(){const e=Object(n.useHistory)(),t=Object(n.useLocation)(),{siteConfig:{baseUrl:a}={}}=Object(c.a)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}}},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},152:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},153:function(e,t,a){"use strict";var n=a(0),r=a(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0})),t),a}},154:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},155:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,c]=Object(n.useState)(t);return Object(n.useEffect)(()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){c(t())}},[]),a}},156:function(e,t,a){"use strict";var n=a(115),r=a(135),c=a(119),o=a(126);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(c.a)(e.href||"/");let l={};e.target?l={target:e.target}:Object(o.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(c.a)(s),logoAlt:e.alt}}},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(152)),s=m(a(7)),i=m(a(188)),u=m(a(189)),d=a(190);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},190:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},191:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(2),r=a(0),c=a.n(r),o=a(145),l=a(127);function s({label:e,to:t,docsPluginId:a,...r}){const s=Object(l.useActiveVersion)(a),i=Object(l.useLatestVersion)(a),u=null!=s?s:i,d=null!=e?e:u.label,m=null!=t?t:(e=>e.docs.find(t=>t.id===e.mainDocId))(u).path;return c.a.createElement(o.a,Object(n.a)({},r,{label:d,to:m}))}},195:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(2),r=a(0),c=a.n(r),o=a(145),l=a(127);const s=e=>e.docs.find(t=>t.id===e.mainDocId);function i({mobile:e,docsPluginId:t,...a}){var r;const i=Object(l.useActiveDocContext)(t),u=Object(l.useVersions)(t),d=Object(l.useLatestVersion)(t);const m=null!==(r=i.activeVersion)&&void 0!==r?r:d,h=e?"Versions":m.label,f=e?void 0:s(m).path;return c.a.createElement(o.a,Object(n.a)({},a,{mobile:e,label:h,to:f,items:function(){if(!(u.length<=2))return u.map(e=>{const t=(null==i?void 0:i.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==i?void 0:i.activeVersion)}})}()}))}}}]);