(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(s,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},118:function(e,t,n){"use strict";var a=n(0),r=n(119);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(118),s=n(117),i=n(52),c=n.n(i);const l=37,p=39;t.a=function(e){const{lazy:t,block:n,children:i,defaultValue:b,values:d,groupId:m,className:u}=e,{tabGroupChoices:g,setTabGroupChoices:f}=Object(o.a)(),[j,O]=Object(a.useState)(b);if(null!=m){const e=g[m];null!=e&&e!==j&&d.some((t=>t.value===e))&&O(e)}const h=e=>{O(e),null!=m&&f(m,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>h(e),onClick:()=>{h(e)}},t)))),t?Object(a.cloneElement)(i.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},i.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},121:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(116)),s=n(120),i=n(121),c={id:"ts-transformer",title:"ts-transformer"},l={unversionedId:"tooling/ts-transformer",id:"tooling/ts-transformer",isDocsHomePage:!1,title:"ts-transformer",description:"npm version",source:"@site/docs/tooling/ts-transformer.md",slug:"/tooling/ts-transformer",permalink:"/docs/tooling/ts-transformer",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/ts-transformer.md",version:"current",sidebar:"tooling",previous:{title:"babel-plugin-formatjs",permalink:"/docs/tooling/babel-plugin"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Via <code>ts-loader</code>",id:"via-ts-loader",children:[]},{value:"Via <code>ts-jest</code> in <code>jest.config.js</code>",id:"via-ts-jest-in-jestconfigjs",children:[]},{value:"Via <code>ttypescript</code>",id:"via-ttypescript",children:[]},{value:"Via <code>rollup-plugin-typescript2</code>",id:"via-rollup-plugin-typescript2",children:[]}]},{value:"Options",id:"options",children:[{value:"<strong><code>overrideIdFn</code></strong>",id:"overrideidfn",children:[]},{value:"<strong><code>removeDefaultMessage</code></strong>",id:"removedefaultmessage",children:[]},{value:"<strong><code>extractSourceLocation</code></strong>",id:"extractsourcelocation",children:[]},{value:"<strong><code>additionalComponentNames</code></strong>",id:"additionalcomponentnames",children:[]},{value:"<strong><code>additionalFunctionNames</code></strong>",id:"additionalfunctionnames",children:[]},{value:"<strong><code>pragma</code></strong>",id:"pragma",children:[]},{value:"<strong><code>ast</code></strong>",id:"ast",children:[]},{value:"<strong><code>onMsgExtracted(filePath: string, msgs: MessageDescriptor[])</code></strong>",id:"onmsgextractedfilepath-string-msgs-messagedescriptor",children:[]},{value:"<strong><code>onMetaExtracted(filePath: string, meta: Record&lt;string, string&gt;)</code></strong>",id:"onmetaextractedfilepath-string-meta-recordstring-string",children:[]}]}],b={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://badgen.net/npm/v/@formatjs/ts-transformer"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://badgen.net/npm/v/@formatjs/ts-transformer",alt:"npm version"})))),Object(o.b)("p",null,"Process string messages for translation from modules that use react-intl, specifically:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parse and verify that messages are ICU-compliant w/o any syntax issues."),Object(o.b)("li",{parentName:"ul"},"Remove ",Object(o.b)("inlineCode",{parentName:"li"},"description")," from message descriptor to save bytes since it isn't used at runtime."),Object(o.b)("li",{parentName:"ul"},"Option to remove ",Object(o.b)("inlineCode",{parentName:"li"},"defaultMessage")," from message descriptor to save bytes since it isn't used at runtime."),Object(o.b)("li",{parentName:"ul"},"Automatically inject message ID based on specific pattern.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(s.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/ts-transformer\n"))),Object(o.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/ts-transformer\n")))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The default message descriptors for the app's default language will be processed from: ",Object(o.b)("inlineCode",{parentName:"p"},"defineMessages()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"defineMessage()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"intl.formatMessage")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<FormattedMessage>"),"; all of which are named exports of the React Intl package."),Object(o.b)("h3",{id:"via-ts-loader"},"Via ",Object(o.b)("inlineCode",{parentName:"h3"},"ts-loader")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {transform} from '@formatjs/ts-transformer'\n\nmodule.exports = {\n  ...otherConfigs,\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: [\n          {\n            loader: 'ts-loader',\n            options: {\n              getCustomTransformers: () => ({\n                before: [\n                  transform({\n                    overrideIdFn: '[sha512:contenthash:base64:6]',\n                    ast: true,\n                  }),\n                ],\n              }),\n            },\n          },\n        ],\n      },\n    ],\n  },\n}\n")),Object(o.b)("h3",{id:"via-ts-jest-in-jestconfigjs"},"Via ",Object(o.b)("inlineCode",{parentName:"h3"},"ts-jest")," in ",Object(o.b)("inlineCode",{parentName:"h3"},"jest.config.js")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This requires ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest@26.4.0")," or later"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: '@formatjs/ts-transformer/ts-jest-integration',\n            options: {\n              // options\n              overrideIdFn: '[sha512:contenthash:base64:6]',\n              ast: true,\n            },\n          },\n        ],\n      },\n    },\n  },\n}\n")),Object(o.b)("h3",{id:"via-ttypescript"},"Via ",Object(o.b)("inlineCode",{parentName:"h3"},"ttypescript")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "plugins": [\n      {\n        "transform": "@formatjs/ts-transformer",\n        "import": "transform",\n        "type": "config",\n        "overrideIdFn": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  }\n}\n')),Object(o.b)("h3",{id:"via-rollup-plugin-typescript2"},"Via ",Object(o.b)("inlineCode",{parentName:"h3"},"rollup-plugin-typescript2")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// rollup.config.js\nimport typescript from 'rollup-plugin-typescript2'\nimport {transform} from '@formatjs/ts-transformer'\n\nexport default {\n  input: './main.ts',\n\n  plugins: [\n    typescript({\n      transformers: () => ({\n        before: [\n          transform({\n            overrideIdFn: '[sha512:contenthash:base64:6]',\n            ast: true,\n          }),\n        ],\n      }),\n    }),\n  ],\n}\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"overrideidfn"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"overrideIdFn"))),Object(o.b)("p",null,"A function with the signature ",Object(o.b)("inlineCode",{parentName:"p"},"(id: string, defaultMessage: string, description: string|object) => string")," which allows you to override the ID both in the extracted javascript and messages."),Object(o.b)("p",null,"Alternatively, ",Object(o.b)("inlineCode",{parentName:"p"},"overrideIdFn")," can be a template string, which is used only if the message ID is empty."),Object(o.b)("h3",{id:"removedefaultmessage"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"removeDefaultMessage"))),Object(o.b)("p",null,"Remove ",Object(o.b)("inlineCode",{parentName:"p"},"defaultMessage")," field in generated js after extraction."),Object(o.b)("h3",{id:"extractsourcelocation"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"extractSourceLocation"))),Object(o.b)("p",null,"Whether the metadata about the location of the message in the source file should be extracted. If ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"file"),", ",Object(o.b)("inlineCode",{parentName:"p"},"start"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," fields will exist for each extracted message descriptors. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h3",{id:"additionalcomponentnames"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"additionalComponentNames"))),Object(o.b)("p",null,"Additional component names to extract messages from, e.g: ",Object(o.b)("inlineCode",{parentName:"p"},"['FormattedFooBarMessage']"),". ",Object(o.b)("strong",{parentName:"p"},"NOTE"),": By default we check for the fact that ",Object(o.b)("inlineCode",{parentName:"p"},"FormattedMessage")," are imported from ",Object(o.b)("inlineCode",{parentName:"p"},"moduleSourceName")," to make sure variable alias works. This option does not do that so it's less safe."),Object(o.b)("h3",{id:"additionalfunctionnames"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"additionalFunctionNames"))),Object(o.b)("p",null,"Additional function names to extract messages from, e.g: ",Object(o.b)("inlineCode",{parentName:"p"},"['$formatMessage']"),". Use this if you prefer to alias ",Object(o.b)("inlineCode",{parentName:"p"},"formatMessage")," to something shorter like ",Object(o.b)("inlineCode",{parentName:"p"},"$t"),"."),Object(o.b)("h3",{id:"pragma"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"pragma"))),Object(o.b)("p",null,"parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",Object(o.b)("inlineCode",{parentName:"p"},"project"),". For example with this file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n')),Object(o.b)("p",null,"and with option ",Object(o.b)("inlineCode",{parentName:"p"},'{pragma: "@intl-meta"}'),", we'll parse out ",Object(o.b)("inlineCode",{parentName:"p"},"// @intl-meta project:my-custom-project")," into ",Object(o.b)("inlineCode",{parentName:"p"},"{project: 'my-custom-project'}")," in the result file."),Object(o.b)("h3",{id:"ast"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"ast"))),Object(o.b)("p",null,"Pre-parse ",Object(o.b)("inlineCode",{parentName:"p"},"defaultMessage")," into AST for faster runtime perf. This flag doesn't do anything when ",Object(o.b)("inlineCode",{parentName:"p"},"removeDefaultMessage")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"onmsgextractedfilepath-string-msgs-messagedescriptor"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"onMsgExtracted(filePath: string, msgs: MessageDescriptor[])"))),Object(o.b)("p",null,"Callback that gets triggered whenever a message is encountered."),Object(o.b)("h3",{id:"onmetaextractedfilepath-string-meta-recordstring-string"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"onMetaExtracted(filePath: string, meta: Record<string, string>)"))),Object(o.b)("p",null,"Callback that gets triggered whenever a ",Object(o.b)("inlineCode",{parentName:"p"},"pragme")," meta is encountered."),Object(o.b)("p",null,"Take a look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/formatjs/formatjs/blob/main/packages/ts-transformer/examples/compile.ts"}),Object(o.b)("inlineCode",{parentName:"a"},"compile.ts"))," for example in integration."))}d.isMDXComponent=!0}}]);