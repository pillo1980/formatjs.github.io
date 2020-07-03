(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{162:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return p}));var r=n(1),a=n(9),l=(n(0),n(176)),o={id:"intl-listformat",title:"Intl.ListFormat"},i={id:"polyfills/intl-listformat",title:"Intl.ListFormat",description:"A spec-compliant polyfill for Intl.ListFormat fully tested by the [official ECMAScript Conformance test suite](https://github.com/tc39/test262)",source:"@site/docs/polyfills/intl-listformat.md",permalink:"/docs/polyfills/intl-listformat",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-listformat.md",sidebar:"docs",previous:{title:"Intl.RelativeTimeFormat",permalink:"/docs/polyfills/intl-relativetimeformat"},next:{title:"Intl.DisplayNames",permalink:"/docs/polyfills/intl-displaynames"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Tests",id:"tests",children:[]}],s={rightToc:c};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A spec-compliant polyfill for Intl.ListFormat fully tested by the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-listformat"}),Object(l.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-listformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(l.b)("img",Object(r.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-listformat",alt:"size"}))),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @formatjs/intl-listformat\n")),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("p",null,"If you're supporting IE11-, this requires ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),"."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"To use the polyfill, just import it to make sure that a fully functional Intl.ListFormat is available in your environment:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-listformat/polyfill';\n")),Object(l.b)("p",null,"If Intl.ListFormat already exists, the polyfill will not be loaded."),Object(l.b)("p",null,"To load locale data, you can include them on demand:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import '@formatjs/intl-listformat/polyfill';\nimport '@formatjs/intl-listformat/locale-data/en'; // Add locale data for en\nimport '@formatjs/intl-listformat/locale-data/de'; // Add locale data for de\n")),Object(l.b)("p",null,"If you want to polyfill all locales (e.g for Node):"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-listformat/polyfill-locales';\n")),Object(l.b)("h2",{id:"tests"},"Tests"),Object(l.b)("p",null,"This library is fully ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/ListFormat"}),"test262"),"-compliant."))}p.isMDXComponent=!0},176:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return b}));var r=n(0),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a.a.createContext({}),p=function(t){var e=a.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i({},e,{},t)),n},m=function(t){var e=p(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},u=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,b=m["".concat(o,".").concat(u)]||m[u]||f[u]||l;return n?a.a.createElement(b,i({ref:e},s,{components:n})):a.a.createElement(b,i({ref:e},s))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);