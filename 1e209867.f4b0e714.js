(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},110:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},111:function(e,t,n){"use strict";var r=n(0),a=n(110);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(111),i=n(109),s=n(48),l=n.n(s);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:d,groupId:b}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(o.a)(),[f,O]=Object(r.useState)(s),[g,j]=Object(r.useState)(!1);if(null!=b){const e=p[b];null!=e&&e!==f&&d.some(t=>t.value===e)&&O(e)}const h=e=>{O(e),null!=b&&m(b,e)},v=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},w=()=>{j(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",w)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),y(e)},onFocus:()=>h(e),onClick:()=>{h(e),j(!1)},onPointerDown:()=>j(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},113:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(108)),i=n(112),s=n(113),l={id:"develop",title:"Develop with formatjs"},c={unversionedId:"guides/develop",id:"guides/develop",isDocsHomePage:!1,title:"Develop with formatjs",description:"Aside from a strong focus on facilitating i18n production pipeline, formatjs also aims to improve i18n DevEx with our eslint-plugin-formatjs.",source:"@site/docs/guides/develop.md",slug:"/guides/develop",permalink:"/docs/guides/develop",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/develop.md",version:"current",sidebar:"docs",previous:{title:"Message Distribution",permalink:"/docs/getting-started/message-distribution"},next:{title:"Bundling with formatjs",permalink:"/docs/guides/bundler-plugins"}},u=[{value:"Linter Installation",id:"linter-installation",children:[]},{value:"Error Codes",id:"error-codes",children:[{value:"<code>FORMAT_ERROR</code>",id:"format_error",children:[]},{value:"<code>UNSUPPORTED_FORMATTER</code>",id:"unsupported_formatter",children:[]},{value:"<code>INVALID_CONFIG</code>",id:"invalid_config",children:[]},{value:"<code>MISSING_DATA</code>",id:"missing_data",children:[]},{value:"<code>MISSING_TRANSLATION</code>",id:"missing_translation",children:[]}]}],d={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aside from a strong focus on facilitating i18n production pipeline, ",Object(o.b)("inlineCode",{parentName:"p"},"formatjs")," also aims to improve i18n DevEx with our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/tooling/linter"}),"eslint-plugin-formatjs"),"."),Object(o.b)("h2",{id:"linter-installation"},"Linter Installation"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D eslint-plugin-formatjs eslint\n"))),Object(o.b)(s.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D eslint-plugin-formatjs eslint\n")))),Object(o.b)("p",null,"Then in your eslint config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/no-offset": "error"\n  }\n}\n')),Object(o.b)("p",null,"Head over to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/tooling/linter"}),"eslint-plugin-formatjs")," for more details on our rules."),Object(o.b)("h2",{id:"error-codes"},"Error Codes"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-intl")," is designed to fail fast when there's a configuration issue but fall back to ",Object(o.b)("inlineCode",{parentName:"p"},"defaultLocale")," when there's a translation issues. Below are the list of errors that we emit out that can be caught during testing:"),Object(o.b)("h3",{id:"format_error"},Object(o.b)("inlineCode",{parentName:"h3"},"FORMAT_ERROR")),Object(o.b)("p",null,"Issue when we try to format a sentence but some of the placeholder values are malformed, e.g passing in a ",Object(o.b)("inlineCode",{parentName:"p"},"string")," for a ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," or such."),Object(o.b)("h3",{id:"unsupported_formatter"},Object(o.b)("inlineCode",{parentName:"h3"},"UNSUPPORTED_FORMATTER")),Object(o.b)("p",null,"We trigger this error when a custom format is being declared but there's no corresponding formatter with it. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"intl.formatMessage({\n  defaultMessage: 'the price is {p, number, customCurrency}',\n})\n")),Object(o.b)("p",null,"and there's no formatter for ",Object(o.b)("inlineCode",{parentName:"p"},"customCurrency"),"."),Object(o.b)("h3",{id:"invalid_config"},Object(o.b)("inlineCode",{parentName:"h3"},"INVALID_CONFIG")),Object(o.b)("p",null,"When some config values are misconfigured such as missing ",Object(o.b)("inlineCode",{parentName:"p"},"locale"),"."),Object(o.b)("h3",{id:"missing_data"},Object(o.b)("inlineCode",{parentName:"h3"},"MISSING_DATA")),Object(o.b)("p",null,"When some native Intl APIs don't support certain locales, or missing ",Object(o.b)("inlineCode",{parentName:"p"},"locale-data")," when polyfills are setup. This typically happens when you're running on an older browsers/Node, or try to use newer APIs in browsers that have not supported them."),Object(o.b)("h3",{id:"missing_translation"},Object(o.b)("inlineCode",{parentName:"h3"},"MISSING_TRANSLATION")),Object(o.b)("p",null,"This gets triggered whenever we try to look up a translated message in ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," for a given ",Object(o.b)("inlineCode",{parentName:"p"},"id")," and it's not there, thus falling back to ",Object(o.b)("inlineCode",{parentName:"p"},"defaultMessage"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"verbosity")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This error will be triggered very often since it happens for every message that does not have a translation. Therefore if you do log it remotely there should be throttling in place."))))}b.isMDXComponent=!0}}]);