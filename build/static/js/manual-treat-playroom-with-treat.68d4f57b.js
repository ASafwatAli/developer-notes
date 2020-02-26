(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{"./manual/Treat/Playroom-With-Treat.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o={},s="wrapper";function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(s,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"playroom-with-treat"},"Playroom With Treat"),Object(a.b)("p",null,"The basic getting started can be found ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/seek-oss/playroom"}),"on Github")),Object(a.b)("p",null,"The tl;dr is ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add --dev playroom"),", then add ",Object(a.b)("inlineCode",{parentName:"p"},'"playroom:start": "playroom start"')," and ",Object(a.b)("inlineCode",{parentName:"p"},'"playroom:build": "playroom build"')," to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," scripts."),Object(a.b)("h2",{id:"updating-playroomconfigjs"},"Updating playroom.config.js"),Object(a.b)("p",null,"Create the file ",Object(a.b)("inlineCode",{parentName:"p"},"playroom.config.js"),"."),Object(a.b)("p",null,"The working file should look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const TreatPlugin = require('treat/webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\nmodule.exports = {\n  components: './src/components',\n  outputPath: './dist/playroom',\n\n  // Optional:\n  title: 'Playroom',\n  themes: './src/themes/index.js',\n  frameComponent: './src/FrameComponent.js',\n  // widths: [320, 375, 768, 1024],\n  port: 9000,\n  openBrowser: false,\n  webpackConfig: () => ({\n    module: {\n      rules: [\n        {\n          test: /\\.(ts|tsx)$/,\n          include: __dirname,\n          exclude: /node_modules/,\n          use: {\n            loader: require.resolve('babel-loader'),\n            options: {\n              presets: [\n                require.resolve('@babel/preset-env'),\n                require.resolve('@babel/preset-react'),\n                require.resolve('@babel/preset-typescript'),\n              ],\n              plugins: [\n                require.resolve('@babel/plugin-proposal-class-properties'),\n              ],\n            },\n          },\n        },\n        {\n          test: /\\.js$/,\n          include: __dirname,\n          exclude: /node_modules/,\n          use: {\n            loader: require.resolve('babel-loader'),\n            options: {\n              presets: [\n                require.resolve('@babel/preset-env'),\n                require.resolve('@babel/preset-react'),\n              ],\n              plugins: [\n                require.resolve('@babel/plugin-proposal-class-properties'),\n              ],\n            },\n          },\n        },\n      ],\n    },\n    plugins: [\n      new TreatPlugin({\n        outputLoaders: [MiniCssExtractPlugin.loader],\n      }),\n      new MiniCssExtractPlugin(),\n    ],\n  }),\n};\n")),Object(a.b)("h2",{id:"themes-file"},"Themes file"),Object(a.b)("p",null,"An example of the themes filed refernced above:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"export { default as scruffy } from './scruffy/index.js';\nexport { default as daisy } from './daisy/index.js';\n")),Object(a.b)("h2",{id:"frame-component"},"Frame Component"),Object(a.b)("p",null,"The working frame component looks like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import React, { Fragment } from 'react';\nimport * as themes from './themes/treat';\nimport { TreatProvider } from 'react-treat';\n\nexport default ({ theme, children }) => {\n  return (\n    <TreatProvider theme={themes[theme.name]}>\n      <Fragment>{children}</Fragment>\n    </TreatProvider>\n  );\n};\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Treat/Playroom-With-Treat.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-treat-playroom-with-treat.101a1afd2417ec7a4a77.js.map