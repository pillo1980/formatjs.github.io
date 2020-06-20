(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),l=(a(0),a(176)),i={id:"intl-datetimeformat",title:"Intl.DateTimeFormat"},o={id:"polyfills/intl-datetimeformat",title:"Intl.DateTimeFormat",description:"A spec-compliant polyfill/ponyfill for Intl.DateTimeFormat fully tested by the [official ECMAScript Conformance test suite](https://github.com/tc39/test262)",source:"@site/docs/polyfills/intl-datetimeformat.md",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-datetimeformat.md",sidebar:"docs",previous:{title:"Intl.NumberFormat (ES2020)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Ponyfill",id:"ponyfill",children:[]},{value:"Polyfill",id:"polyfill",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]}]},{value:"Tests",id:"tests",children:[]}],m={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A spec-compliant polyfill/ponyfill for Intl.DateTimeFormat fully tested by the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"}))),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @formatjs/intl-datetimeformat\n")),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("p",null,"This package requires the following capabilities:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat")))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("h3",{id:"ponyfill"},"Ponyfill"),Object(l.b)("p",null,"To use the ponyfill, import it along with its data:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import IntlDateTimeFormat from '@formatjs/intl-datetimeformat';\n// locale-data for zh\nIntlDateTimeFormat.__addLocaleData(\n  require('@formatjs/intl-datetimeformat/dist/locale-data/zh.json')\n);\n\n// locale-data for en\nIntlDateTimeFormat.__addLocaleData(\n  require('@formatjs/intl-datetimeformat/dist/locale-data/en.json')\n);\n")),Object(l.b)("h3",{id:"polyfill"},"Polyfill"),Object(l.b)("p",null,"To use the polyfill, just import it to make sure that a fully functional Intl.DateTimeFormat is available in your environment:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill';\nimport '@formatjs/intl-datetimeformat/dist/locale-data/de'; // Add locale data for de\n")),Object(l.b)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),Object(l.b)("p",null,"We provide 2 pre-processed IANA Timezone:"),Object(l.b)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill';\nimport '@formatjs/intl-datetimeformat/dist/add-all-tz.js';\n")),Object(l.b)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill';\nimport '@formatjs/intl-datetimeformat/dist/add-golden-tz.js';\n")),Object(l.b)("h2",{id:"tests"},"Tests"),Object(l.b)("p",null,"This library is fully ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"}),"test262"),"-compliant."))}s.isMDXComponent=!0},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),s=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||l;return a?r.a.createElement(d,o({ref:t},m,{components:a})):r.a.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);