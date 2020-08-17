(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(104)),i={id:"babel-plugin",title:"babel-plugin-react-intl"},l={unversionedId:"tooling/babel-plugin",id:"tooling/babel-plugin",isDocsHomePage:!1,title:"babel-plugin-react-intl",description:"Process string messages for translation from modules that use react-intl, specifically:",source:"@site/docs/tooling/babel-plugin.md",permalink:"/docs/tooling/babel-plugin",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/babel-plugin.md",sidebar:"tooling",previous:{title:"eslint-plugin-formatjs",permalink:"/docs/tooling/linter"},next:{title:"ts-transformer",permalink:"/docs/tooling/ts-transformer"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Via <code>babel.config.json</code> (Recommended)",id:"via-babelconfigjson-recommended",children:[]}]},{value:"Options",id:"options",children:[{value:"<strong><code>moduleSourceName</code></strong>",id:"modulesourcename",children:[]},{value:"<strong><code>overrideIdFn</code></strong>",id:"overrideidfn",children:[]},{value:"<strong><code>idInterpolationPattern</code></strong>",id:"idinterpolationpattern",children:[]},{value:"<strong><code>removeDefaultMessage</code></strong>",id:"removedefaultmessage",children:[]},{value:"<strong><code>extractFromFormatMessageCall</code></strong>",id:"extractfromformatmessagecall",children:[]},{value:"<strong><code>additionalComponentNames</code></strong>",id:"additionalcomponentnames",children:[]},{value:"<strong><code>pragma</code></strong>",id:"pragma",children:[]},{value:"<strong><code>ast</code></strong>",id:"ast",children:[]},{value:"Via Node API",id:"via-node-api",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Process string messages for translation from modules that use react-intl, specifically:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parse and verify that messages are ICU-compliant w/o any syntax issues."),Object(o.b)("li",{parentName:"ul"},"Remove ",Object(o.b)("inlineCode",{parentName:"li"},"description")," from message descriptor to save bytes since it isn't used at runtime."),Object(o.b)("li",{parentName:"ul"},"Option to remove ",Object(o.b)("inlineCode",{parentName:"li"},"defaultMessage")," from message descriptor to save bytes since it isn't used at runtime."),Object(o.b)("li",{parentName:"ul"},"Automatically inject message ID based on specific pattern.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install babel-plugin-react-intl\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This Babel plugin only visits ES6 modules which ",Object(o.b)("inlineCode",{parentName:"strong"},"import")," React Intl.")),Object(o.b)("p",null,"The default message descriptors for the app's default language will be processed from: ",Object(o.b)("inlineCode",{parentName:"p"},"defineMessages()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"defineMessage()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"intl.formatMessage")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<FormattedMessage>"),"; all of which are named exports of the React Intl package."),Object(o.b)("h3",{id:"via-babelconfigjson-recommended"},"Via ",Object(o.b)("inlineCode",{parentName:"h3"},"babel.config.json")," (Recommended)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"babel.config.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": [\n    [\n      "react-intl",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "extractFromFormatMessageCall": true,\n        "ast": true\n      }\n    ]\n  ]\n}\n')),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"modulesourcename"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"moduleSourceName"))),Object(o.b)("p",null,"The ES6 module source name of the React Intl package. Defaults to: ",Object(o.b)("inlineCode",{parentName:"p"},'"react-intl"'),", but can be changed to another name/path to React Intl."),Object(o.b)("h3",{id:"overrideidfn"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"overrideIdFn"))),Object(o.b)("p",null,"A function with the signature ",Object(o.b)("inlineCode",{parentName:"p"},"(id: string, defaultMessage: string, description: string|object) => string")," which allows you to override the ID both in the extracted javascript and messages."),Object(o.b)("h3",{id:"idinterpolationpattern"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"idInterpolationPattern"))),Object(o.b)("p",null,"If certain message descriptors don't have id, this ",Object(o.b)("inlineCode",{parentName:"p"},"pattern")," will be used to automaticallygenerate IDs for them. Default to ",Object(o.b)("inlineCode",{parentName:"p"},"[contenthash:5]"),". See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/webpack/loader-utils#interpolatename"}),"https://github.com/webpack/loader-utils#interpolatename")," for sample patterns."),Object(o.b)("h3",{id:"removedefaultmessage"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"removeDefaultMessage"))),Object(o.b)("p",null,"Remove ",Object(o.b)("inlineCode",{parentName:"p"},"defaultMessage")," field in generated js after extraction."),Object(o.b)("h3",{id:"extractfromformatmessagecall"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"extractFromFormatMessageCall"))),Object(o.b)("p",null,"Opt-in to compile ",Object(o.b)("inlineCode",{parentName:"p"},"intl.formatMessage")," call with the same restrictions, e.g: has to be called with object literal such as ",Object(o.b)("inlineCode",{parentName:"p"},"intl.formatMessage({ id: 'foo', defaultMessage: 'bar', description: 'baz'})")),Object(o.b)("h3",{id:"additionalcomponentnames"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"additionalComponentNames"))),Object(o.b)("p",null,"Additional component names to extract messages from, e.g: ",Object(o.b)("inlineCode",{parentName:"p"},"['FormattedFooBarMessage']"),". ",Object(o.b)("strong",{parentName:"p"},"NOTE"),": By default we check for the fact that ",Object(o.b)("inlineCode",{parentName:"p"},"FormattedMessage")," are imported from ",Object(o.b)("inlineCode",{parentName:"p"},"moduleSourceName")," to make sure variable alias works. This option does not do that so it's less safe."),Object(o.b)("h3",{id:"pragma"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"pragma"))),Object(o.b)("p",null,"parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",Object(o.b)("inlineCode",{parentName:"p"},"project"),". For example with this file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n')),Object(o.b)("p",null,"and with option ",Object(o.b)("inlineCode",{parentName:"p"},'{pragma: "@intl-meta"}'),", we'll parse out ",Object(o.b)("inlineCode",{parentName:"p"},"// @intl-meta project:my-custom-project")," into ",Object(o.b)("inlineCode",{parentName:"p"},"{project: 'my-custom-project'}")," in the result file."),Object(o.b)("h3",{id:"ast"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"ast"))),Object(o.b)("p",null,"Pre-parse ",Object(o.b)("inlineCode",{parentName:"p"},"defaultMessage")," into AST for faster runtime perf. This flag doesn't do anything when ",Object(o.b)("inlineCode",{parentName:"p"},"removeDefaultMessage")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"via-node-api"},"Via Node API"),Object(o.b)("p",null,"The extract message descriptors are available via the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," property on the object returned from Babel's ",Object(o.b)("inlineCode",{parentName:"p"},"transform()")," API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"require('@babel/core').transform('code', {\n  plugins: ['react-intl'],\n}) // => { code, map, ast, metadata['react-intl'].messages, metadata['react-intl'].meta };\n")))}b.isMDXComponent=!0}}]);