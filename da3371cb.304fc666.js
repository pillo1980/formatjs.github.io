(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},108:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},109:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},110:function(e,t,a){"use strict";var n=a(0),r=a(109);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(110),i=a(108),c=a(48),l=a.n(c);const s=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:p,groupId:m}=e,{tabGroupChoices:d,setTabGroupChoices:u}=Object(o.a)(),[f,j]=Object(n.useState)(c),[O,h]=Object(n.useState)(!1);if(null!=m){const e=d[m];null!=e&&e!==f&&p.some(t=>t.value===e)&&j(e)}const g=e=>{j(e),null!=m&&u(m,e)},N=[],C=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},y=()=>{h(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",C),window.addEventListener("mousedown",y)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),style:O?{}:{outline:"none"},key:e,ref:e=>N.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(N,e.target,e),C(e)},onFocus:()=>g(e),onClick:()=>{g(e),h(!1)},onPointerDown:()=>h(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===f)[0]))}},112:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),o=(a(0),a(107)),i=a(111),c=a(112),l={id:"cli",title:"CLI"},s={unversionedId:"tooling/cli",id:"tooling/cli",isDocsHomePage:!1,title:"CLI",description:"Installation",source:"@site/docs/tooling/cli.md",permalink:"/docs/tooling/cli",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/cli.md",sidebar:"tooling",next:{title:"eslint-plugin-formatjs",permalink:"/docs/tooling/linter"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Extraction",id:"extraction",children:[{value:"<code>--format [path]</code>",id:"--format-path",children:[]},{value:"<code>--out-file [path]</code>",id:"--out-file-path",children:[]},{value:"<code>--id-interpolation-pattern [pattern]</code>",id:"--id-interpolation-pattern-pattern",children:[]},{value:"<code>--extract-source-location</code>",id:"--extract-source-location",children:[]},{value:"<code>--additional-component-names [comma-separated-names]</code>",id:"--additional-component-names-comma-separated-names",children:[]},{value:"<code>--extract-from-format-message-call</code>",id:"--extract-from-format-message-call",children:[]},{value:"<code>--output-empty-json</code>",id:"--output-empty-json",children:[]},{value:"<code>--ignore [files]</code>",id:"--ignore-files",children:[]},{value:"<code>--throws</code>",id:"--throws",children:[]},{value:"<code>--pragma [pragma]</code>",id:"--pragma-pragma",children:[]}]},{value:"Compilation",id:"compilation",children:[{value:"<code>--format [path]</code>",id:"--format-path-1",children:[]},{value:"<code>--out-file &lt;output&gt;</code>",id:"--out-file-output",children:[]},{value:"<code>--ast</code>",id:"--ast",children:[]}]},{value:"Folder Compilation",id:"folder-compilation",children:[{value:"<code>--format [path]</code>",id:"--format-path-2",children:[]},{value:"<code>--ast</code>",id:"--ast-1",children:[]}]},{value:"Builtin Formatters",id:"builtin-formatters",children:[]},{value:"Custom Formatters",id:"custom-formatters",children:[]},{value:"Node API",id:"node-api",children:[{value:"Extraction",id:"extraction-1",children:[]},{value:"Compilation",id:"compilation-1",children:[]},{value:"Custom Formatter",id:"custom-formatter",children:[]}]}],p={rightToc:b};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @formatjs/cli\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D @formatjs/cli\n")))),Object(o.b)("p",null,"Add the following command to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(o.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "extract": "formatjs extract",\n    "compile": "formatjs compile"\n  }\n}\n')),Object(o.b)("p",null,"We've built ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@formatjs/cli"}),"https://www.npmjs.com/package/@formatjs/cli")," that helps you extract messages from a list of files. It uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tooling/ts-transformer"}),Object(o.b)("inlineCode",{parentName:"a"},"@formatjs/ts-transformer"))," under the hood and should be able to extract messages if you're declaring using 1 of the mechanisms below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {defineMessages, defineMessage} from 'react-intl'\n\ndefineMessages({\n  foo: {\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n})\n\ndefineMessage({\n  id: 'single',\n  defaultMessage: 'single message',\n  description: 'header',\n})\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage id="foo" defaultMessage="foo" description="bar" />\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"function Comp(props) {\n  const {intl} = props\n  return intl.formatMessage({\n    // The whole `intl.formatMessage` is required so we can extract\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  })\n}\n")),Object(o.b)("h2",{id:"extraction"},"Extraction"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"formatjs extract --help\n# Usage: formatjs extract [options] [files...]\n\n# Extract string messages from React components that use react-intl.\n# The input language is expected to be TypeScript or ES2017 with JSX.\n")),Object(o.b)("h3",{id:"--format-path"},Object(o.b)("inlineCode",{parentName:"h3"},"--format [path]")),Object(o.b)("p",null,"Path to a formatter file that controls the shape of JSON file from ",Object(o.b)("inlineCode",{parentName:"p"},"--out-file"),".\nThe formatter file must export a function called ",Object(o.b)("inlineCode",{parentName:"p"},"format")," with the signature"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"type FormatFn = <T = Record<string, MessageDescriptor>>(\n  msgs: Record<string, MessageDescriptor>\n) => T\n")),Object(o.b)("p",null,"This is especially useful to convert from our extracted format to a TMS-specific format."),Object(o.b)("h3",{id:"--out-file-path"},Object(o.b)("inlineCode",{parentName:"h3"},"--out-file [path]")),Object(o.b)("p",null,"The target file path where the plugin will output an aggregated ",Object(o.b)("inlineCode",{parentName:"p"},".json")," file of allthe translations from the ",Object(o.b)("inlineCode",{parentName:"p"},"files")," supplied. This flag will ignore ",Object(o.b)("inlineCode",{parentName:"p"},"--messages-dir")),Object(o.b)("h3",{id:"--id-interpolation-pattern-pattern"},Object(o.b)("inlineCode",{parentName:"h3"},"--id-interpolation-pattern [pattern]")),Object(o.b)("p",null,"If certain message descriptors don't have id, this ",Object(o.b)("inlineCode",{parentName:"p"},"pattern")," will be used to automaticallygenerate IDs for them. Default to ",Object(o.b)("inlineCode",{parentName:"p"},"[contenthash:5]"),". See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/webpack/loader-utils#interpolatename"}),"https://github.com/webpack/loader-utils#interpolatename")," for sample patterns"),Object(o.b)("h3",{id:"--extract-source-location"},Object(o.b)("inlineCode",{parentName:"h3"},"--extract-source-location")),Object(o.b)("p",null,"Whether the metadata about the location of the message in the source file should be extracted. If ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"file"),", ",Object(o.b)("inlineCode",{parentName:"p"},"start"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," fields will exist for each extracted message descriptors. (default: ",Object(o.b)("inlineCode",{parentName:"p"},"false"),")"),Object(o.b)("h3",{id:"--additional-component-names-comma-separated-names"},Object(o.b)("inlineCode",{parentName:"h3"},"--additional-component-names [comma-separated-names]")),Object(o.b)("p",null,"Additional component names to extract messages from, e.g: ",Object(o.b)("inlineCode",{parentName:"p"},"['FormattedFooBarMessage']"),". ",Object(o.b)("strong",{parentName:"p"},"NOTE"),": By default we check for the fact that ",Object(o.b)("inlineCode",{parentName:"p"},"FormattedMessage")," is imported from ",Object(o.b)("inlineCode",{parentName:"p"},"moduleSourceName")," to make sure variable alias works. This option does not do that so it's less safe."),Object(o.b)("h3",{id:"--extract-from-format-message-call"},Object(o.b)("inlineCode",{parentName:"h3"},"--extract-from-format-message-call")),Object(o.b)("p",null,"Opt-in to extract from ",Object(o.b)("inlineCode",{parentName:"p"},"intl.formatMessage")," call with the same restrictions, e.g: has to be called with object literal such as ",Object(o.b)("inlineCode",{parentName:"p"},"intl.formatMessage({ id: 'foo', defaultMessage: 'bar', description: 'baz'})")," (default: ",Object(o.b)("inlineCode",{parentName:"p"},"false"),")"),Object(o.b)("h3",{id:"--output-empty-json"},Object(o.b)("inlineCode",{parentName:"h3"},"--output-empty-json")),Object(o.b)("p",null,"Output file with empty [] if src has no messages. For build systems like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://bazel.build/"}),"bazel")," that relies on specific output mapping, not writing out a file can cause issues. (default: ",Object(o.b)("inlineCode",{parentName:"p"},"false"),")"),Object(o.b)("h3",{id:"--ignore-files"},Object(o.b)("inlineCode",{parentName:"h3"},"--ignore [files]")),Object(o.b)("p",null,"List of glob paths to ",Object(o.b)("strong",{parentName:"p"},"not")," extract translations from."),Object(o.b)("h3",{id:"--throws"},Object(o.b)("inlineCode",{parentName:"h3"},"--throws")),Object(o.b)("p",null,"Whether to throw an exception when we fail to process any file in the batch."),Object(o.b)("h3",{id:"--pragma-pragma"},Object(o.b)("inlineCode",{parentName:"h3"},"--pragma [pragma]")),Object(o.b)("p",null,"Parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",Object(o.b)("inlineCode",{parentName:"p"},"project"),". For example with this file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n')),Object(o.b)("p",null,"and with option ",Object(o.b)("inlineCode",{parentName:"p"},'{pragma: "@intl-meta"}'),", we'll parse out ",Object(o.b)("inlineCode",{parentName:"p"},"// @intl-meta project:my-custom-project")," into ",Object(o.b)("inlineCode",{parentName:"p"},"{project: 'my-custom-project'}")," in the result file."),Object(o.b)("h2",{id:"compilation"},"Compilation"),Object(o.b)("p",null,"Compile extracted file from ",Object(o.b)("inlineCode",{parentName:"p"},"formatjs extract")," to a react-intl consumable\nJSON file. This also does ICU message verification. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/message-distribution"}),"Message Distribution")," for more details."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"formatjs compile --help\n")),Object(o.b)("h3",{id:"--format-path-1"},Object(o.b)("inlineCode",{parentName:"h3"},"--format [path]")),Object(o.b)("p",null,"Path to a formatter file that converts ",Object(o.b)("inlineCode",{parentName:"p"},"<translation_file>")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Record<string, string>")," so we can compile. The file must export a function named ",Object(o.b)("inlineCode",{parentName:"p"},"compile")," with the signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"type CompileFn = <T = Record<string, MessageDescriptor>>(\n  msgs: T\n) => Record<string, string>\n")),Object(o.b)("p",null,"This is especially useful to convert from a TMS-specific format back to react-intl format"),Object(o.b)("h3",{id:"--out-file-output"},Object(o.b)("inlineCode",{parentName:"h3"},"--out-file <output>")),Object(o.b)("p",null,"The target file that contains compiled messages."),Object(o.b)("h3",{id:"--ast"},Object(o.b)("inlineCode",{parentName:"h3"},"--ast")),Object(o.b)("p",null,"Whether to compile message into AST instead of just string. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/guides/advanced-usage"}),"Advanced Usage")),Object(o.b)("h2",{id:"folder-compilation"},"Folder Compilation"),Object(o.b)("p",null,"Batch compile a folder with extracted files from ",Object(o.b)("inlineCode",{parentName:"p"},"formatjs extract")," to a folder containing react-intl consumable JSON files. This also does ICU message verification. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/message-distribution"}),"Message Distribution")," for more details."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"formatjs compile-folder [options] <folder> <outFolder>\n")),Object(o.b)("h3",{id:"--format-path-2"},Object(o.b)("inlineCode",{parentName:"h3"},"--format [path]")),Object(o.b)("p",null,"Path to a formatter file that converts ",Object(o.b)("inlineCode",{parentName:"p"},"<translation_file>")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Record<string, string>")," so we can compile. The file must export a function named ",Object(o.b)("inlineCode",{parentName:"p"},"compile")," with the signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"type CompileFn = <T = Record<string, MessageDescriptor>>(\n  msgs: T\n) => Record<string, string>\n")),Object(o.b)("p",null,"This is especially useful to convert from a TMS-specific format back to react-intl format"),Object(o.b)("h3",{id:"--ast-1"},Object(o.b)("inlineCode",{parentName:"h3"},"--ast")),Object(o.b)("p",null,"Whether to compile message into AST instead of just string. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/guides/advanced-usage"}),"Advanced Usage")),Object(o.b)("h2",{id:"builtin-formatters"},"Builtin Formatters"),Object(o.b)("p",null,"We provide the following built-in formatters to integrate with 3rd party TMSes:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"TMS"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"th"},"--format")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://docs.transifex.com/formats/json/structured-json"}),"Transifex's Structured JSON")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"transifex"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://help.smartling.com/hc/en-us/articles/360008000733-JSON"}),"Smartling ICU JSON")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"smartling"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://lingohub.com/developers/resource-files/json-localization/"}),"Lingohub")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"simple"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://help.phrase.com/help/simple-json"}),"Phrase")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"simple"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://support.crowdin.com/file-formats/chrome-json/"}),"Crowdin Chrome JSON")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"crowdin"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://docs.lokalise.com/en/articles/3229161-structured-json"}),"Lokalise Structured JSON")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lokalise"))))),Object(o.b)("h2",{id:"custom-formatters"},"Custom Formatters"),Object(o.b)("p",null,"You can provide your own formatter by using our interfaces:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {FormatFn, CompileFn, Comparator} from '@formatjs/cli'\n\ninterface VendorJson {}\n\n// [Optional] Format @formatjs/cli structure to vendor's structure\nexport const format: FormatFn<VendorJson> = () => {}\n// [Optional] Format vendor's structure to @formatjs/cli structure\nexport const compile: CompileFn<VendorJson> = () => {}\n// [Optional] Sort the messages in a specific order during serialization\nexport const compareMessages: Comparator = () => {}\n")),Object(o.b)("p",null,"Take a look at our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/formatjs/formatjs/tree/main/packages/cli/src/formatters"}),"builtin formatter code")," for some examples."),Object(o.b)("h2",{id:"node-api"},"Node API"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@formatjs/cli")," can also be consumed programmatically like below:"),Object(o.b)("h3",{id:"extraction-1"},"Extraction"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {extract} from '@formatjs/cli'\n\nconst resultAsString: Promise<string> = extract(files, {\n  idInterpolationPattern: '[sha512:contenthash:base64:6]',\n})\n")),Object(o.b)("h3",{id:"compilation-1"},"Compilation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {compile} from '@formatjs/cli'\n\nconst resultAsString: Promise<string> = compile(files, {\n  ast: true,\n})\n")),Object(o.b)("h3",{id:"custom-formatter"},"Custom Formatter"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {FormatFn, CompileFn, Comparator} from '@formatjs/cli'\n\nexport const format: FormatFn = msgs => msgs\n\n// Sort key reverse alphabetically\nexport const compareMessages = (el1, el2) => {\n  return el1.key < el2.key ? 1 : -1\n}\n\nexport const compile: CompileFn = msgs => {\n  const results: Record<string, string> = {}\n  for (const k in msgs) {\n    results[k] = msgs[k].defaultMessage!\n  }\n  return results\n}\n")))}m.isMDXComponent=!0}}]);