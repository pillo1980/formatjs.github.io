(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return n?l.a.createElement(f,i(i({ref:t},s),{},{components:n})):l.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},110:function(e,t,n){"use strict";var a=n(0),l=n(111);t.a=function(){const e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,n){"use strict";var a=n(0);const l=Object(a.createContext)(void 0);t.a=l},112:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(110),o=n(109),i=n(48),c=n.n(i);const s=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:u,groupId:b,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:d}=Object(r.a)(),[y,O]=Object(a.useState)(i),[j,h]=Object(a.useState)(!1);if(null!=b){const e=f[b];null!=e&&e!==y&&u.some((t=>t.value===e))&&O(e)}const v=e=>{O(e),null!=b&&d(b,e)},g=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},N=()=>{h(!1)};return Object(a.useEffect)((()=>(window.addEventListener("keydown",w),window.addEventListener("mousedown",N),()=>{window.removeEventListener("keydown",w),window.removeEventListener("mousedown",N)})),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===e}),style:j?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),w(e)},onFocus:()=>v(e),onClick:()=>{v(e),h(!1)},onPointerDown:()=>h(!1)},t)))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===y))[0]))}},113:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("div",null,e.children)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),l=n(6),r=(n(0),n(108)),o=n(112),i=n(113),c={id:"intl-locale",title:"Intl.Locale"},s={unversionedId:"polyfills/intl-locale",id:"polyfills/intl-locale",isDocsHomePage:!1,title:"Intl.Locale",description:"A spec-compliant polyfill/ponyfill for Intl.Locale tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-locale.md",slug:"/polyfills/intl-locale",permalink:"/docs/polyfills/intl-locale",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-locale.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.DateTimeFormat (ESNext)",permalink:"/docs/polyfills/intl-datetimeformat"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Tests",id:"tests",children:[]}],u={rightToc:p};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A spec-compliant polyfill/ponyfill for Intl.Locale tested by the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-locale"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-locale.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-locale",alt:"size"}))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/intl-locale\n"))),Object(r.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/intl-locale\n")))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/polyfills/intl-getcanonicallocales"}),"polyfill")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/polyfills/intl-locale"}),"polyfill"),".")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"simple"},"Simple"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-locale/polyfill'\n")),Object(r.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-locale/should-polyfill'\nasync function polyfill() {\n  // This platform already supports Intl.Locale\n  if (shouldPolyfill()) {\n    await import('@formatjs/intl-locale/polyfill')\n  }\n}\n")),Object(r.b)("h2",{id:"tests"},"Tests"),Object(r.b)("p",null,"This library is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/Locale"}),"test262"),"-compliant."))}b.isMDXComponent=!0}}]);