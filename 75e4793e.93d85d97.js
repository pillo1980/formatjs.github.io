(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(104)),o={id:"message-extraction",title:"Message Extraction"},c={unversionedId:"getting-started/message-extraction",id:"getting-started/message-extraction",isDocsHomePage:!1,title:"Message Extraction",description:"Now that you've declared some messages, it's time to extract them.",source:"@site/docs/getting-started/message-extraction.md",permalink:"/docs/getting-started/message-extraction",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/getting-started/message-extraction.md",sidebar:"docs",previous:{title:"Message Declaration",permalink:"/docs/getting-started/message-declaration"},next:{title:"Message Distribution",permalink:"/docs/getting-started/message-distribution"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Extraction",id:"extraction",children:[]},{value:"Automatic ID Generation",id:"automatic-id-generation",children:[]},{value:"Translation Management System (TMS) Integration",id:"translation-management-system-tms-integration",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Now that you've declared some messages, it's time to extract them."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @formatjs/cli\n")),Object(i.b)("h2",{id:"extraction"},"Extraction"),Object(i.b)("p",null,"Add the following command to your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "extract": "formatjs extract"\n  }\n}\n')),Object(i.b)("p",null,"and execute with ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run extract -- 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ID Interpolation Pattern")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure this pattern matches ",Object(i.b)("inlineCode",{parentName:"p"},"idInterpolationPattern")," when you use ",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-react-intl")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@formatjs/ts-transformer")," in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://formatjs.io/docs/guides/bundler-plugins"}),"Bundling with formatjs")," or you'll get a ",Object(i.b)("inlineCode",{parentName:"p"},"MISSING_TRANSLATION")," error."))),Object(i.b)("p",null,"Given a file that has the following messages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport {FormattedMessage, useIntl, injectIntl} from 'react-intl';\n\nclass PasswordChangeWithIntl extends React.Component {\n  render() {\n    const {intl} = this.props;\n    return (\n      <li>\n        <input\n          placeholder={intl.formatMessage({\n            defaultMessage: 'New Password',\n            description: 'placeholder text',\n          })}\n        />\n        <input\n          placeholder={intl.formatMessage({\n            id: 'explicit-id',\n            defaultMessage: 'Confirm Password',\n            description: 'placeholder text',\n          })}\n        />\n      </li>\n    );\n  }\n}\n\nconst PasswordChange = injectIntl(PasswordChangeWithIntl);\n\nexport function List(props) {\n  const intl = useIntl();\n  return (\n    <section>\n      <header>\n        <FormattedMessage\n          defaultMessage=\"Control Panel\"\n          description=\"title of control panel section\"\n        />\n      </header>\n      <ul>\n        <li>\n          <button>\n            <FormattedMessage\n              defaultMessage=\"Delete user {name}\"\n              description=\"Delete button\"\n              values={{\n                name: props.name,\n              }}\n            />\n          </button>\n        </li>\n        <PasswordChange />\n      </ul>\n    </section>\n  );\n}\n")),Object(i.b)("p",null,"running the above command will create a file called ",Object(i.b)("inlineCode",{parentName:"p"},"lang/en.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "hak27d": {\n    "defaultMessage": "Control Panel",\n    "description": "title of control panel section"\n  },\n  "haqsd": {\n    "defaultMessage": "Delete user {name}",\n    "description": "delete button"\n  },\n  "19hjs": {\n    "defaultMessage": "New Password",\n    "description": "placeholder text"\n  },\n  "explicit-id": {\n    "defaultMessage": "Confirm Password",\n    "description": "placeholder text"\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Message ID")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"During extraction, we'll preserve explicit declared IDs and insert a hash as an ID for messages without. We recommend against explicit IDs since it can cause collision."))),Object(i.b)("h2",{id:"automatic-id-generation"},"Automatic ID Generation"),Object(i.b)("p",null,"Since manual IDs are discouraged, we've provided a ",Object(i.b)("inlineCode",{parentName:"p"},"babel")," plugin and a ",Object(i.b)("inlineCode",{parentName:"p"},"TypeScript")," AST transformer that will automatically insert message IDs in your transpiled code. For more details please visit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://formatjs.io/docs/guides/bundler-plugins"}),"Bundling with formatjs"),"."),Object(i.b)("h2",{id:"translation-management-system-tms-integration"},"Translation Management System (TMS) Integration"),Object(i.b)("p",null,"The default format generated from ",Object(i.b)("inlineCode",{parentName:"p"},"@formatjs/cli")," might not work with the specific TMS/vendor you're working with. You can specify a custom formatter with ",Object(i.b)("inlineCode",{parentName:"p"},"--format <formatFile>")," that allows you to convert that format into something tailored to your TMS. For example:"),Object(i.b)("p",null,"If your vendor accepts the format like"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "[id]": {\n    "string": "[message]",\n    "comment": "[description]"\n  }\n}\n')),Object(i.b)("p",null,"you can run"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run extract -- \"src/**/*.ts*\" --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format formatter.js\n")),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"formatter.js")," is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"exports.format = function (msgs) {\n  const results = {};\n  for (const [id, msg] of Object.entries(msgs)) {\n    results[id] = {\n      string: msg.defaultMessage,\n      comment: msg.description,\n    };\n  }\n  return results;\n};\n")),Object(i.b)("p",null,"We also provide several ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tooling/cli#builtin-formatters"}),"builtin formatters")," to integrate with 3rd party TMSes so feel free to create PRs to add more."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"TMS"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"th"},"--format")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.transifex.com/formats/json/structured-json"}),"Transifex's Structured JSON")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"transifex"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://help.smartling.com/hc/en-us/articles/360008000733-JSON"}),"Smartling ICU JSON")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"smartling"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://lingohub.com/developers/resource-files/json-localization/"}),"Lingohub")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"simple"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://help.phrase.com/help/simple-json"}),"Phrase")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"simple"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://support.crowdin.com/file-formats/chrome-json/"}),"Crowdin Chrome JSON")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"crowdin"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.lokalise.com/en/articles/3229161-structured-json"}),"Lokalise Structured JSON")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"lokalise"))))))}b.isMDXComponent=!0}}]);