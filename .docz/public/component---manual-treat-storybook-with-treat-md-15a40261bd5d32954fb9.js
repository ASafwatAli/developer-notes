(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{x3xh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Treat/Storybook-With-Treat.md"}});var s={_frontmatter:i},c=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(c,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"storybook-with-treat"},"Storybook With Treat"),Object(o.b)("h2",{id:"setting-up-storybook"},"Setting Up Storybook"),Object(o.b)("p",null,"The reference for getting started with ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/"}),"Storybook can be found here"),"."),Object(o.b)("h2",{id:"note-with-mixing-yarn-and-npm"},"Note With Mixing Yarn and NPM"),Object(o.b)("p",null,"If for some reason you are mixing ",Object(o.b)("inlineCode",{parentName:"p"},"npx")," and ",Object(o.b)("inlineCode",{parentName:"p"},"yarn"),", you may run into issues with package versions. If this occurs, troubleshooting may be eased by using Yarn Resolutions ie in package.json add the following:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-json"}),'"resolutions": {\n  "webpack": "4.39.1" // whatever version you want to resolve\n}\n')),Object(o.b)("p",null,"This was a killer when first attempting to setup."),Object(o.b)("h2",{id:"setting-up-configuration"},"Setting Up Configuration"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},".storybook/config.js")," we need to setup Storybook to have the TreatProvider over all the stories:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { configure } from '@storybook/react';\nimport { load, addDecorator } from '@storybook/react';\nimport React from 'react';\nimport { TreatProvider } from 'react-treat';\nimport * as themes from '../src/themes/treat';\nconst themeNames = ['scruffy', 'daisy', 'three', 'four'];\n\n// use this to add the decorator to every story\naddDecorator(storyFn => (\n  <TreatProvider theme={themes['daisy']}>{storyFn()}</TreatProvider>\n));\n// automatically import all files ending in *.stories.js\nconfigure(require.context('../src', true, /\\.stories\\.js$/), module);\n")),Object(o.b)("p",null,"We also need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"TreatPlugin")," into the Webpack build. For that, update ",Object(o.b)("inlineCode",{parentName:"p"},".storybook/webpack.config.js")," to reflect the following:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const path = require('path');\n// your app's webpack.config.js\nconst TreatPlugin = require('treat/webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\nmodule.exports = async ({ config, mode }) => {\n  config.plugins.push(\n    new TreatPlugin({\n      outputLoaders: [MiniCssExtractPlugin.loader],\n    }),\n  );\n  config.plugins.push(new MiniCssExtractPlugin());\n  return config;\n};\n// you can use this file to add your custom webpack plugins, loaders and anything you like.\n// This is just the basic way to add additional webpack configurations.\n// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config\n\n// IMPORTANT\n// When you add this file, we won't add the default configurations which is similar\n// to \"React Create App\". This only has babel loader to load JavaScript.\n")),Object(o.b)("p",null,"Perfecto! Added ",Object(o.b)("inlineCode",{parentName:"p"},'"storybook": "start-storybook -p 6006"')," to your scripts in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and you are ready to go!"))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Treat/Storybook-With-Treat.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-treat-storybook-with-treat-md-15a40261bd5d32954fb9.js.map