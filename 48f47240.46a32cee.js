(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||r;return n?l.a.createElement(d,o(o({ref:t},c),{},{components:n})):l.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},110:function(e,t,n){"use strict";var a=n(0);const l=Object(a.createContext)(void 0);t.a=l},111:function(e,t,n){"use strict";var a=n(0),l=n(110);t.a=function(){const e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(111),i=n(109),o=n(48),s=n.n(o);const c=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:u,groupId:m}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(r.a)(),[f,y]=Object(a.useState)(o),[j,O]=Object(a.useState)(!1);if(null!=m){const e=b[m];null!=e&&e!==f&&u.some(t=>t.value===e)&&y(e)}const h=e=>{y(e),null!=m&&d(m,e)},g=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},w=()=>{O(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",w)},[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),style:j?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),v(e)},onFocus:()=>h(e),onClick:()=>{h(e),O(!1)},onPointerDown:()=>O(!1)},t))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},113:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("div",null,e.children)}},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(2),l=n(6),r=(n(0),n(108)),i=n(112),o=n(113),s={id:"intl-displaynames",title:"Intl.DisplayNames"},c={unversionedId:"polyfills/intl-displaynames",id:"polyfills/intl-displaynames",isDocsHomePage:!1,title:"Intl.DisplayNames",description:"A polyfill for Intl.DisplayNames.",source:"@site/docs/polyfills/intl-displaynames.md",slug:"/polyfills/intl-displaynames",permalink:"/docs/polyfills/intl-displaynames",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-displaynames.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.ListFormat",permalink:"/docs/polyfills/intl-listformat"},next:{title:"Intl.NumberFormat (ES2020)",permalink:"/docs/polyfills/intl-numberformat"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]}],u={rightToc:p};function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A polyfill for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tc39.es/proposal-intl-displaynames"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.DisplayNames")),"."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-displaynames"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-displaynames.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-displaynames",alt:"size"}))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/intl-displaynames\n"))),Object(r.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/intl-displaynames\n")))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"If you're supporting IE11-, this requires ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),"."),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("p",null,"Everything in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-intl-displaynames"}),"https://github.com/tc39/proposal-intl-displaynames"),"."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"simple"},"Simple"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-displaynames/polyfill'\nimport '@formatjs/intl-displaynames/locale-data/en' // locale-data for en\n")),Object(r.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-displaynames/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-displaynames/polyfill')\n  }\n\n  if (Intl.DisplayNames.polyfilled) {\n    switch (locale) {\n      default:\n        await import('@formatjs/intl-displaynames/locale-data/en')\n        break\n      case 'fr':\n        await import('@formatjs/intl-displaynames/locale-data/fr')\n        break\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);