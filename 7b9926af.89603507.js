(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),f=n,d=p["".concat(l,".").concat(f)]||p[f]||b[f]||i;return a?r.a.createElement(d,o(o({ref:t},s),{},{components:a})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),i=(a(0),a(102)),l={id:"intl-datetimeformat",title:"Intl.DateTimeFormat"},o={unversionedId:"polyfills/intl-datetimeformat",id:"polyfills/intl-datetimeformat",isDocsHomePage:!1,title:"Intl.DateTimeFormat",description:"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-datetimeformat.md",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/polyfills/intl-datetimeformat.md",sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ES2020)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Polyfill",id:"polyfill",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]}]},{value:"Tests",id:"tests",children:[]}],s={rightToc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"}))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @formatjs/intl-datetimeformat\n")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"This package requires the following capabilities:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(i.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"polyfill"},"Polyfill"),Object(i.b)("p",null,"To use the polyfill, just import it to make sure that a fully functional Intl.DateTimeFormat is available in your environment:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill';\nimport '@formatjs/intl-datetimeformat/locale-data/de'; // Add locale data for de\n")),Object(i.b)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),Object(i.b)("p",null,"We provide 2 pre-processed IANA Timezone:"),Object(i.b)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill';\nimport '@formatjs/intl-datetimeformat/dist/add-all-tz.js';\n")),Object(i.b)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill';\nimport '@formatjs/intl-datetimeformat/dist/add-golden-tz.js';\n")),Object(i.b)("h2",{id:"tests"},"Tests"),Object(i.b)("p",null,"This library is fully ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"}),"test262"),"-compliant."))}m.isMDXComponent=!0}}]);