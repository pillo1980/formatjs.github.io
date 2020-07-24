(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,g=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?a.a.createElement(g,l(l({ref:t},c),{},{components:n})):a.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(102)),o={id:"upgrade-guide-4x",title:"Upgrade Guide (v3 -> v4)"},l={unversionedId:"react-intl/upgrade-guide-4x",id:"react-intl/upgrade-guide-4x",isDocsHomePage:!1,title:"Upgrade Guide (v3 -> v4)",description:"Breaking API Changes",source:"@site/docs/react-intl/upgrade-guide-4.x.md",permalink:"/docs/react-intl/upgrade-guide-4x",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/react-intl/upgrade-guide-4.x.md",sidebar:"api",previous:{title:"Upgrade Guide (v4 -> v5)",permalink:"/docs/react-intl/upgrade-guide-5x"},next:{title:"Upgrade Guide (v2 -> v3)",permalink:"/docs/react-intl/upgrade-guide-3x"}},s=[{value:"Breaking API Changes",id:"breaking-api-changes",children:[]},{value:"Why are we doing those changes?",id:"why-are-we-doing-those-changes",children:[]},{value:"Migrating off embedded HTML in messages",id:"migrating-off-embedded-html-in-messages",children:[]}],c={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"breaking-api-changes"},"Breaking API Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All tags specified must have corresponding values and will throw error if it's missing, e.g:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"new IntlMessageFormat('a<b>strong</b>').format({\n  b: (...chunks) => <strong>{chunks}</strong>,\n});\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We don't allow formatting self-closing tags because we already use ICU ",Object(i.b)("inlineCode",{parentName:"li"},"{placeholder}")," syntax for that."),Object(i.b)("li",{parentName:"ul"},"XML/HTML tags are escaped using apostrophe just like other ICU constructs."),Object(i.b)("li",{parentName:"ul"},"Remove dependency on DOMParser and restrictions on void element like ",Object(i.b)("inlineCode",{parentName:"li"},"<link>"),". This effectively means you don't need to polyfill DOMParser in Node anymore."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FormattedHTMLMessage")," & ",Object(i.b)("inlineCode",{parentName:"li"},"intl.formatHTMLMessage")," have been removed since ",Object(i.b)("inlineCode",{parentName:"li"},"FormattedMessage")," now fully supports embedded HTML tag.")),Object(i.b)("h2",{id:"why-are-we-doing-those-changes"},"Why are we doing those changes?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FormattedHTMLMessage")," & ",Object(i.b)("inlineCode",{parentName:"li"},"intl.formatHTMLMessage")," were originally created when React was fairly new. These components helped ease migration over from raw HTML to JSX. Given that current popularity of React right now and the fact that ",Object(i.b)("inlineCode",{parentName:"li"},"FormattedMessage")," allow rendering embedded HTML tag, this is no longer needed."),Object(i.b)("li",{parentName:"ul"},"Initially during the 1st iteration of embedded HTML support, we allow any tag that doesn\u2019t have a corresponding formatter to be rendered as raw HTML. We\u2019ve received feedbacks internally that allowing embedded HTML tag to be rendered as-is without sanitization is a XSS security risk. Therefore, in order to allow raw HTML tag you have to opt-in by escaping them using apostrophe. We will update our linter to check for this as well.")),Object(i.b)("h2",{id:"migrating-off-embedded-html-in-messages"},"Migrating off embedded HTML in messages"),Object(i.b)("p",null,"In order to restore the old behavior of ",Object(i.b)("inlineCode",{parentName:"p"},"FormattedHTMLMessage")," & ",Object(i.b)("inlineCode",{parentName:"p"},"intl.formatHTMLMessage"),", we suggest you use the rich text format feature as below:"),Object(i.b)("p",null,"Old way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"intl.formatHTMLMessage('This is a <a href=\"foo\">link</a>');\n")),Object(i.b)("p",null,"New way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"intl.formatMessage('This is a <a>link</a>', {\n  a: (...chunks) => sanitizeHTML(`<a href=\"foo\">${chunks.join('')}</a>`),\n});\n")),Object(i.b)("p",null,"This forces developers to always sanitize their rendered HTML & chunks, thus minimizing XSS."))}d.isMDXComponent=!0}}]);