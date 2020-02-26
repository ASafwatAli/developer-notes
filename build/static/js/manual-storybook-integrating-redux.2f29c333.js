(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{"./manual/Storybook/integrating-redux.md":function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return i});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a={},s="wrapper";function i(e){var o=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(s,Object.assign({},a,t,{components:o,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Author: Dennis O'Keeffe"),Object(r.b)("h2",{id:"section-storybook"},"Section: Storybook"),Object(r.b)("h1",{id:"integrating-redux-with-storybook"},"Integrating Redux with Storybook"),Object(r.b)("p",null,"Ensure that if you wish to use the same ",Object(r.b)("inlineCode",{parentName:"p"},"store")," variable as within the app that you export it as a constant from the appropriate file. See ",Object(r.b)("inlineCode",{parentName:"p"},"import { store } from 'src/App';")," below."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\n// Basic addons\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { linkTo } from '@storybook/addon-links';\n\n// README addons\nimport { withReadme, withDocs } from 'storybook-readme';\nimport PageFormTestReadme from './README.md';\nimport PageFormTestDocs from './DOCS.md';\n\n// Knob addons\nimport { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';\n\n// Backgrounds\nimport backgrounds from '@storybook/addon-backgrounds';\nimport PageFormTest from './index.js';\n\nimport { store } from 'src/App';\nimport { Provider } from 'react-redux';\n\nconst story = () =>\n    storiesOf('Page Form Test')\n        // This is the main decorator to take note of\n        .addDecorator((story) => <Provider store={store}>{story()}</Provider>)\n        .addDecorator(withReadme(PageFormTestReadme))\n        .addDecorator(withKnobs)\n        .addDecorator(\n            backgrounds([\n                { name: 'white', value: '#ffffff', default: true },\n                { name: 'twitter', value: '#00aced' },\n                { name: 'facebook', value: '#3b5998' }\n            ])\n        )\n        .add('Default', () => {\n            return <PageFormTest store={store} />;\n        })\n        .add(\n            'Docs',\n            withDocs(PageFormTestDocs, () => {\n                return (\n                    <WithComments el={'PageFormTest'}>\n                        <PageFormTest />\n                    </WithComments>\n                );\n            })\n        );\n\nexport default story;\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Storybook/integrating-redux.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-storybook-integrating-redux.101a1afd2417ec7a4a77.js.map