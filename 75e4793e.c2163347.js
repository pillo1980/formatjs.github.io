(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},108:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},109:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},110:function(e,t,n){"use strict";var a=n(0),r=n(109);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(110),i=n(108),c=n(48),s=n.n(c);const l=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:m,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:u}=Object(o.a)(),[j,O]=Object(a.useState)(c),[g,f]=Object(a.useState)(!1);if(null!=p){const e=d[p];null!=e&&e!==j&&m.some(t=>t.value===e)&&O(e)}const h=e=>{O(e),null!=p&&u(p,e)},N=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},y=()=>{f(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",y)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},m.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===e}),style:g?{}:{outline:"none"},key:e,ref:e=>N.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(N,e.target,e),v(e)},onFocus:()=>h(e),onClick:()=>{h(e),f(!1)},onPointerDown:()=>f(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===j)[0]))}},112:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(107)),i=n(111),c=n(112),s={id:"message-extraction",title:"Message Extraction"},l={unversionedId:"getting-started/message-extraction",id:"getting-started/message-extraction",isDocsHomePage:!1,title:"Message Extraction",description:"Now that you've declared some messages, it's time to extract them.",source:"@site/docs/getting-started/message-extraction.md",permalink:"/docs/getting-started/message-extraction",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-extraction.md",sidebar:"docs",previous:{title:"Message Declaration",permalink:"/docs/getting-started/message-declaration"},next:{title:"Message Distribution",permalink:"/docs/getting-started/message-distribution"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Extraction",id:"extraction",children:[]},{value:"Automatic ID Generation",id:"automatic-id-generation",children:[]},{value:"Translation Management System (TMS) Integration",id:"translation-management-system-tms-integration",children:[]}],m={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you've declared some messages, it's time to extract them."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @formatjs/cli\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D @formatjs/cli\n")))),Object(o.b)("h2",{id:"extraction"},"Extraction"),Object(o.b)("p",null,"Add the following command to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(o.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "extract": "formatjs extract"\n  }\n}\n')),Object(o.b)("p",null,"and execute with ",Object(o.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run extract -- 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn extract 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ID Interpolation Pattern")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Make sure this pattern matches ",Object(o.b)("inlineCode",{parentName:"p"},"idInterpolationPattern")," when you use ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-react-intl")," or ",Object(o.b)("inlineCode",{parentName:"p"},"@formatjs/ts-transformer")," in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://formatjs.io/docs/guides/bundler-plugins"}),"Bundling with formatjs")," or you'll get a ",Object(o.b)("inlineCode",{parentName:"p"},"MISSING_TRANSLATION")," error."))),Object(o.b)("p",null,"Given a file that has the following messages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react'\nimport {FormattedMessage, useIntl, injectIntl} from 'react-intl'\n\nclass PasswordChangeWithIntl extends React.Component {\n  render() {\n    const {intl} = this.props\n    return (\n      <li>\n        <input\n          placeholder={intl.formatMessage({\n            defaultMessage: 'New Password',\n            description: 'placeholder text',\n          })}\n        />\n        <input\n          placeholder={intl.formatMessage({\n            id: 'explicit-id',\n            defaultMessage: 'Confirm Password',\n            description: 'placeholder text',\n          })}\n        />\n      </li>\n    )\n  }\n}\n\nconst PasswordChange = injectIntl(PasswordChangeWithIntl)\n\nexport function List(props) {\n  const intl = useIntl()\n  return (\n    <section>\n      <header>\n        <FormattedMessage\n          defaultMessage=\"Control Panel\"\n          description=\"title of control panel section\"\n        />\n      </header>\n      <ul>\n        <li>\n          <button>\n            <FormattedMessage\n              defaultMessage=\"Delete user {name}\"\n              description=\"Delete button\"\n              values={{\n                name: props.name,\n              }}\n            />\n          </button>\n        </li>\n        <PasswordChange />\n      </ul>\n    </section>\n  )\n}\n")),Object(o.b)("p",null,"running the above command will create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"lang/en.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "hak27d": {\n    "defaultMessage": "Control Panel",\n    "description": "title of control panel section"\n  },\n  "haqsd": {\n    "defaultMessage": "Delete user {name}",\n    "description": "delete button"\n  },\n  "19hjs": {\n    "defaultMessage": "New Password",\n    "description": "placeholder text"\n  },\n  "explicit-id": {\n    "defaultMessage": "Confirm Password",\n    "description": "placeholder text"\n  }\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Message ID")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"During extraction, we'll preserve explicit declared IDs and insert a hash as an ID for messages without. We recommend against explicit IDs since it can cause collision."))),Object(o.b)("h2",{id:"automatic-id-generation"},"Automatic ID Generation"),Object(o.b)("p",null,"Since manual IDs are discouraged, we've provided a ",Object(o.b)("inlineCode",{parentName:"p"},"babel")," plugin and a ",Object(o.b)("inlineCode",{parentName:"p"},"TypeScript")," AST transformer that will automatically insert message IDs in your transpiled code. For more details please visit ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://formatjs.io/docs/guides/bundler-plugins"}),"Bundling with formatjs"),"."),Object(o.b)("h2",{id:"translation-management-system-tms-integration"},"Translation Management System (TMS) Integration"),Object(o.b)("p",null,"The default format generated from ",Object(o.b)("inlineCode",{parentName:"p"},"@formatjs/cli")," might not work with the specific TMS/vendor you're working with. You can specify a custom formatter with ",Object(o.b)("inlineCode",{parentName:"p"},"--format <formatFile>")," that allows you to convert that format into something tailored to your TMS. For example:"),Object(o.b)("p",null,"If your vendor accepts the format like"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "[id]": {\n    "string": "[message]",\n    "comment": "[description]"\n  }\n}\n')),Object(o.b)("p",null,"you can run"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run extract -- \"src/**/*.ts*\" --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format formatter.js\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn extract \"src/**/*.ts*\" --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format formatter.js\n")))),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"formatter.js")," is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"exports.format = function (msgs) {\n  const results = {}\n  for (const [id, msg] of Object.entries(msgs)) {\n    results[id] = {\n      string: msg.defaultMessage,\n      comment: msg.description,\n    }\n  }\n  return results\n}\n")),Object(o.b)("p",null,"We also provide several ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tooling/cli#builtin-formatters"}),"builtin formatters")," to integrate with 3rd party TMSes so feel free to create PRs to add more."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"TMS"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"th"},"--format")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.transifex.com/formats/json/structured-json"}),"Transifex's Structured JSON")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"transifex"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://help.smartling.com/hc/en-us/articles/360008000733-JSON"}),"Smartling ICU JSON")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"smartling"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://lingohub.com/developers/resource-files/json-localization/"}),"Lingohub")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"simple"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://help.phrase.com/help/simple-json"}),"Phrase")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"simple"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://support.crowdin.com/file-formats/chrome-json/"}),"Crowdin Chrome JSON")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"crowdin"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.lokalise.com/en/articles/3229161-structured-json"}),"Lokalise Structured JSON")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lokalise"))))))}p.isMDXComponent=!0}}]);