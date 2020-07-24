(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return b}));var r=n(0),l=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=l.a.createContext({}),p=function(t){var e=l.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return l.a.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},u=l.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,b=m["".concat(i,".").concat(u)]||m[u]||f[u]||a;return n?l.a.createElement(b,o(o({ref:e},c),{},{components:n})):l.a.createElement(b,o({ref:e},c))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return p}));var r=n(2),l=n(6),a=(n(0),n(102)),i={id:"intl-listformat",title:"Intl.ListFormat"},o={unversionedId:"polyfills/intl-listformat",id:"polyfills/intl-listformat",isDocsHomePage:!1,title:"Intl.ListFormat",description:"A spec-compliant polyfill for Intl.ListFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-listformat.md",permalink:"/docs/polyfills/intl-listformat",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-listformat.md",sidebar:"polyfills",previous:{title:"Intl.RelativeTimeFormat",permalink:"/docs/polyfills/intl-relativetimeformat"},next:{title:"Intl.DisplayNames",permalink:"/docs/polyfills/intl-displaynames"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Tests",id:"tests",children:[]}],c={rightToc:s};function p(t){var e=t.components,n=Object(l.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A spec-compliant polyfill for Intl.ListFormat fully tested by the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-listformat"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-listformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-listformat",alt:"size"}))),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @formatjs/intl-listformat\n")),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("p",null,"If you're supporting IE11-, this requires ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(a.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"To use the polyfill, just import it to make sure that a fully functional Intl.ListFormat is available in your environment:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-listformat/polyfill';\n")),Object(a.b)("p",null,"If Intl.ListFormat already exists, the polyfill will not be loaded."),Object(a.b)("p",null,"To load locale data, you can include them on demand:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import '@formatjs/intl-listformat/polyfill';\nimport '@formatjs/intl-listformat/locale-data/en'; // Add locale data for en\nimport '@formatjs/intl-listformat/locale-data/de'; // Add locale data for de\n")),Object(a.b)("p",null,"If you want to polyfill all locales (e.g for Node):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-listformat/polyfill-locales';\n")),Object(a.b)("h2",{id:"tests"},"Tests"),Object(a.b)("p",null,"This library is fully ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/ListFormat"}),"test262"),"-compliant."))}p.isMDXComponent=!0}}]);