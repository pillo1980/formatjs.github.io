(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(104)),i={id:"testing",title:"Testing with formatjs"},c={unversionedId:"guides/testing",id:"guides/testing",isDocsHomePage:!1,title:"Testing with formatjs",description:"Intl APIs requirements",source:"@site/docs/guides/testing-with-react-intl.md",permalink:"/docs/guides/testing",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/testing-with-react-intl.md",sidebar:"docs",previous:{title:"Bundling with formatjs",permalink:"/docs/guides/bundler-plugins"},next:{title:"Distributing i18n-friendly libraries",permalink:"/docs/guides/distribute-libraries"}},l=[{value:"<code>Intl</code> APIs requirements",id:"intl-apis-requirements",children:[{value:"Mocha",id:"mocha",children:[]}]},{value:"Shallow Rendering",id:"shallow-rendering",children:[{value:"Testing Example Components That Use React Intl",id:"testing-example-components-that-use-react-intl",children:[]}]},{value:"DOM Rendering",id:"dom-rendering",children:[{value:"Helper function",id:"helper-function",children:[]}]},{value:"Enzyme",id:"enzyme",children:[{value:"Helper function",id:"helper-function-1",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Jest",id:"jest",children:[{value:"Snapshot Testing",id:"snapshot-testing",children:[]},{value:"DOM Testing",id:"dom-testing",children:[]}]},{value:"Storybook",id:"storybook",children:[{value:"Intl",id:"intl",children:[]}]},{value:"react-testing-library",id:"react-testing-library",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"intl-apis-requirements"},Object(o.b)("inlineCode",{parentName:"h2"},"Intl")," APIs requirements"),Object(o.b)("p",null,"React Intl uses the built-in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mdn.io/intl"}),Object(o.b)("inlineCode",{parentName:"a"},"Intl")," APIs")," in JavaScript. Make sure your environment satisfy the requirements listed in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/runtime-requirements"}),Object(o.b)("inlineCode",{parentName:"a"},"Intl")," APIs requirements")),Object(o.b)("h3",{id:"mocha"},"Mocha"),Object(o.b)("p",null,"If you're using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mochajs.org/"}),"Mocha")," as your test runner and testing on older JavaScript runtimes, you can load the Intl Polyfill via the CLI or by adding a ",Object(o.b)("inlineCode",{parentName:"p"},"<script>")," in the browser."),Object(o.b)("h4",{id:"command-line"},"Command Line"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"mocha")," and auto-polyfill the runtime if needed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ mocha --recursive test/\n")),Object(o.b)("h4",{id:"browser"},"Browser"),Object(o.b)("p",null,"You can either load the polyfill in the browser from ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," or use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cdn.polyfill.io/v2/docs/"}),"polyfill.io")," service from the Financial Times:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl,Intl.~locale.en-US"><\/script>\n')),Object(o.b)("h2",{id:"shallow-rendering"},"Shallow Rendering"),Object(o.b)("p",null,"React's ",Object(o.b)("inlineCode",{parentName:"p"},"react-addons-test-utils")," package contains a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react/docs/test-utils.html#shallow-rendering"}),"shallow rendering")," feature which you might use to test your app's React components. If a component you're trying to test using ",Object(o.b)("inlineCode",{parentName:"p"},"ReactShallowRenderer")," uses React Intl \u2014 specifically ",Object(o.b)("inlineCode",{parentName:"p"},"injectIntl()")," \u2014 you'll need to do extra setup work because React Intl components expect to be nested inside an ",Object(o.b)("inlineCode",{parentName:"p"},"<IntlProvider>"),"."),Object(o.b)("h3",{id:"testing-example-components-that-use-react-intl"},"Testing Example Components That Use React Intl"),Object(o.b)("p",null,"The following examples will assume ",Object(o.b)("inlineCode",{parentName:"p"},"mocha"),", ",Object(o.b)("inlineCode",{parentName:"p"},"expect"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"expect-jsx")," test framework."),Object(o.b)("h4",{id:"shortdate-basic"},"ShortDate (Basic)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\'\nimport {FormattedDate} from \'react-intl\'\n\nconst ShortDate = props => (\n  <FormattedDate\n    value={props.date}\n    year="numeric"\n    month="short"\n    day="2-digit"\n  />\n)\n\nexport default ShortDate\n')),Object(o.b)("p",null,"Testing the ",Object(o.b)("inlineCode",{parentName:"p"},"<ShortDate>")," example component is no different than testing any other basic component in your app using React's shallow rendering:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import expect from 'expect'\nimport expectJSX from 'expect-jsx'\nimport React from 'react'\nimport {createRenderer} from 'react-addons-test-utils'\nimport {FormattedDate} from 'react-intl'\nimport ShortDate from '../short-date'\n\nexpect.extend(expectJSX)\n\ndescribe('<ShortDate>', function () {\n  it('renders', function () {\n    const renderer = createRenderer()\n    const date = new Date()\n\n    renderer.render(<ShortDate date={date} />)\n    expect(renderer.getRenderOutput()).toEqualJSX(\n      <FormattedDate value={date} year=\"numeric\" month=\"short\" day=\"2-digit\" />\n    )\n  })\n})\n")),Object(o.b)("h2",{id:"dom-rendering"},"DOM Rendering"),Object(o.b)("p",null,"If you use the DOM in your tests, you need to supply the ",Object(o.b)("inlineCode",{parentName:"p"},"IntlProvider")," context to your components using composition:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"let element = ReactTestUtils.renderIntoDocument(\n  <IntlProvider>\n    <MyComponent />\n  </IntlProvider>\n)\n")),Object(o.b)("p",null,"However this means that the ",Object(o.b)("inlineCode",{parentName:"p"},"element")," reference is now pointing to the ",Object(o.b)("inlineCode",{parentName:"p"},"IntlProvider"),' instead of your component. To retrieve a reference to your wrapped component, you can use "refs" with these changes to the code:'),Object(o.b)("p",null,"In your component, remember to add ",Object(o.b)("inlineCode",{parentName:"p"},"{forwardRef: true}")," when calling ",Object(o.b)("inlineCode",{parentName:"p"},"injectIntl()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"class MyComponent extends React.Component {\n  ...\n  myClassFn() { ... }\n}\nexport default injectIntl(MyComponent, {forwardRef: true});\n")),Object(o.b)("p",null,'In your test, add a "ref" to extract the reference to your tested component:'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const element = React.createRef()\nReactTestUtils.renderIntoDocument(\n  <IntlProvider>\n    <MyComponent ref={element} />\n  </IntlProvider>\n)\n")),Object(o.b)("p",null,"You can now access the wrapped component instance from ",Object(o.b)("inlineCode",{parentName:"p"},"element")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"element.current.myClassFn()\n")),Object(o.b)("h3",{id:"helper-function"},"Helper function"),Object(o.b)("p",null,"Since you will have to do this in all your unit tests, you should probably wrap that setup in a ",Object(o.b)("inlineCode",{parentName:"p"},"render")," function like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"function renderWithIntl(element) {\n  let instance\n\n  ReactTestUtils.renderIntoDocument(\n    <IntlProvider>\n      {React.cloneElement(element, {\n        ref: instance,\n      })}\n    </IntlProvider>\n  )\n\n  return instance\n}\n")),Object(o.b)("p",null,"You can now use this in your tests like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const element = React.createRef();\nrenderWithIntl(<MyElement ref={element}>);\nelement.current.myClassFn();\n")),Object(o.b)("h2",{id:"enzyme"},"Enzyme"),Object(o.b)("p",null,"Testing with Enzyme works in a similar fashion as written above. Your ",Object(o.b)("inlineCode",{parentName:"p"},"mount()"),"ed and ",Object(o.b)("inlineCode",{parentName:"p"},"shallow()"),"ed components will need access to the ",Object(o.b)("inlineCode",{parentName:"p"},"intl")," context. Below is a helper function which you can import and use to mount your components which make use of any of React-Intl's library (either ",Object(o.b)("inlineCode",{parentName:"p"},"<Formatted* />")," components or ",Object(o.b)("inlineCode",{parentName:"p"},"format*()")," methods through ",Object(o.b)("inlineCode",{parentName:"p"},"injectIntl"),")."),Object(o.b)("h3",{id:"helper-function-1"},"Helper function"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"/**\n * Components using the react-intl module require access to the intl context.\n * This is not available when mounting single components in Enzyme.\n * These helper functions aim to address that and wrap a valid,\n * English-locale intl context around them.\n */\n\nimport React from 'react'\nimport {IntlProvider} from 'react-intl'\nimport {mount, shallow} from 'enzyme'\n\n// You can pass your messages to the IntlProvider. Optional: remove if unneeded.\nconst messages = require('../locales/en') // en.json\nconst defaultLocale = 'en'\nconst locale = defaultLocale\n\nexport function mountWithIntl(node: React.ReactElement) {\n  return mount(node, {\n    wrappingComponent: IntlProvider,\n    wrappingComponentProps: {\n      locale,\n      defaultLocale,\n      messages,\n    },\n  })\n}\n\nexport function shallowWithIntl(node: React.ReactElement) {\n  return shallow(node, {\n    wrappingComponent: IntlProvider,\n    wrappingComponentProps: {\n      locale,\n      defaultLocale,\n      messages,\n    },\n  })\n}\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Create a file with the above helper in e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"helpers/intl-enzyme-test-helper.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"import")," the methods you need in your tests."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// intl-enzyme-test-helper.js\n\nimport {mountWithIntl} from 'helpers/intl-enzyme-test-helper.js'\n\nconst wrapper = mountWithIntl(<CustomComponent />)\n\nexpect(wrapper.state('foo')).to.equal('bar') // OK\nexpect(wrapper.text()).to.equal('Hello World!') // OK\n")),Object(o.b)("p",null,"Based on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/mirague/c05f4da0d781a9b339b501f1d5d33c37/"}),"this gist"),"."),Object(o.b)("h2",{id:"jest"},"Jest"),Object(o.b)("p",null,"Testing with Jest can be divided into two approaches: snapshot's testing and DOM testing. Snapshot's testing is a relatively new feature and works out of the box. If you'd like DOM testing you need to use Enzyme or React's TestUtils."),Object(o.b)("h3",{id:"snapshot-testing"},"Snapshot Testing"),Object(o.b)("p",null,"Snapshot testing is a new feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. Use either helper function or mock as described below."),Object(o.b)("h4",{id:"helper-function-2"},"Helper function"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react'\nimport renderer from 'react-test-renderer'\nimport {IntlProvider} from 'react-intl'\n\nconst createComponentWithIntl = (children, props = {locale: 'en'}) => {\n  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>)\n}\n\nexport default createComponentWithIntl\n")),Object(o.b)("h4",{id:"usage-1"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react'\nimport createComponentWithIntl from '../../utils/createComponentWithIntl'\nimport AppMain from '../AppMain'\n\ntest('app main should be rendered', () => {\n  const component = createComponentWithIntl(<AppMain />)\n\n  let tree = component.toJSON()\n\n  expect(tree).toMatchSnapshot()\n\n  tree.props.onClick()\n\n  tree = component.toJSON()\n\n  expect(tree).toMatchSnapshot()\n})\n")),Object(o.b)("p",null,"You can find runnable example ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/formatjs/formatjs/tree/master/packages/react-intl/examples/jest-snapshot-testing"}),"here")," and more info about Jest ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/jest/"}),"here"),"."),Object(o.b)("h4",{id:"usage-with-jest--enzyme"},"Usage with Jest & enzyme"),Object(o.b)("p",null,"Jest will automatically mock react-intl, so no any extra implementation is needed, tests should work as is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react'\nimport {shallow} from 'enzyme'\nimport AppMain from '../AppMain'\n\ntest('app main should be rendered', () => {\n  const wrapper = shallow(<AppMain />)\n  expect(wrapper).toMatchSnapshot()\n})\n")),Object(o.b)("h3",{id:"dom-testing"},"DOM Testing"),Object(o.b)("p",null,"If you want use Jest with DOM Testing read more info above in Enzyme section or in offical Jest ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/jest/docs/tutorial-react.html#dom-testing"}),"documentation"),"."),Object(o.b)("h2",{id:"storybook"},"Storybook"),Object(o.b)("h3",{id:"intl"},"Intl"),Object(o.b)("p",null,"If you want to use ",Object(o.b)("inlineCode",{parentName:"p"},"react-intl")," inside of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://storybooks.js.org"}),"Storybook")," you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/truffls/storybook-addon-intl"}),Object(o.b)("inlineCode",{parentName:"a"},"storybook-addon-intl"))," which provides an easy to use wrapper for ",Object(o.b)("inlineCode",{parentName:"p"},"react-intl")," including a locale switcher so you can test your component in all provided languages."),Object(o.b)("h2",{id:"react-testing-library"},"react-testing-library"),Object(o.b)("p",null,"In order to use ",Object(o.b)("inlineCode",{parentName:"p"},"react-intl")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://testing-library.com/docs/react-testing-library/intro"}),Object(o.b)("inlineCode",{parentName:"a"},"react-testing-library"))," together, you should provide some helper function to the testing flow."),Object(o.b)("p",null,"You can check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://testing-library.com/docs/example-react-intl"}),"docs"),"."),Object(o.b)("p",null,"To create a generic solution, We can create a custom ",Object(o.b)("inlineCode",{parentName:"p"},"render")," function using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"wrapper")," option as explained in the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://testing-library.com/docs/react-testing-library/setup"}),"setup")," page.",Object(o.b)("br",{parentName:"p"}),"\n","Our custom ",Object(o.b)("inlineCode",{parentName:"p"},"render")," function can look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// test-utils.js\nimport React from 'react'\nimport {render as rtlRender} from '@testing-library/react'\nimport {IntlProvider} from 'react-intl'\n\nfunction render(ui, {locale = 'pt', ...renderOptions} = {}) {\n  function Wrapper({children}) {\n    return <IntlProvider locale={locale}>{children}</IntlProvider>\n  }\n  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})\n}\n\n// re-export everything\nexport * from '@testing-library/react'\n\n// override render method\nexport {render}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport '@testing-library/jest-dom/extend-expect'\n// We're importing from our own created test-utils and not RTL's\nimport {render, screen} from '../test-utils.js'\nimport {FormattedDate} from 'react-intl'\n\nconst FormatDateView = () => {\n  return (\n    <div data-testid=\"date-display\">\n      <FormattedDate\n        value=\"2019-03-11\"\n        timeZone=\"utc\"\n        day=\"2-digit\"\n        month=\"2-digit\"\n        year=\"numeric\"\n      />\n    </div>\n  )\n}\n\ntest('it should render FormattedDate and have a formated pt date', () => {\n  render(<FormatDateView />)\n  expect(screen.getByTestId('date-display')).toHaveTextContent('11/03/2019')\n})\n")))}p.isMDXComponent=!0}}]);