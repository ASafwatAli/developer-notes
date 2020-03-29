(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{X3qq:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),s=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/structure.md"}});var r={_frontmatter:i},c=s.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(o.b)(c,a({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Author: Dennis O'Keeffe"),Object(o.b)("h2",{id:"section-react"},"Section: React"),Object(o.b)("h1",{id:"react-structure"},"React Structure"),Object(o.b)("p",null,"The structure of a React component may very down the track, so this document should be updated to reflect this."),Object(o.b)("p",null,"An example of a component tree for makeshift component ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," in ",Object(o.b)("inlineCode",{parentName:"p"},"src/components/PageFormTest"),":"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"Component\n├── Component.mocha.js\n├── Component.puppeteer.js\n├── Component.storybook.js\n├── README.md\n├── DOCS.md\n├── index.js\n└── styles.scss\n")),Object(o.b)("p",null,"In the case of some of these components, there will not be a full suite of these files."),Object(o.b)("h1",{id:"indexjs"},"index.js"),Object(o.b)("p",null,"This is the main component file. With this and the setup for resolvers in webpack, you can require a component by using ",Object(o.b)("inlineCode",{parentName:"p"},"import 'components/ComponentName")," and using the ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," to default as the import for there. Note: this is a change to previous projects."),Object(o.b)("h1",{id:"componentmochajs"},"Component.mocha.js"),Object(o.b)("p",null,"This will be the main mocha + chai + enzyme tests for the file. This file should cover all methods used within the component and thoroughly check rendering."),Object(o.b)("h1",{id:"componentpuppeteerjs"},"Component.puppeteer.js"),Object(o.b)("p",null,"There is an issue for using Istanbul for coverage when also using Puppeteer, so these tests have been separated. Puppeteer tests should be used for UI testing. You can use this is either ",Object(o.b)("inlineCode",{parentName:"p"},"headless")," mode or visually see the tests carried out in the browser."),Object(o.b)("h1",{id:"componentstorybookjs"},"Component.storybook.js"),Object(o.b)("p",null,"This is the storybook file to be imported into Storybook. It is a good idea for the individual, smaller components to develop them while inside of storybook, although not always required."),Object(o.b)("h1",{id:"readmemd"},"README.md"),Object(o.b)("p",null,"Every file should have a README.md file to explain why it exists and what the component is used for. These files are also used by storybook to generate the README for a component."),Object(o.b)("h1",{id:"docsmd"},"DOCS.md"),Object(o.b)("p",null,"This is the documentation markdown file. This is optional and should not be manually created. This is created through a gulp task, although the package that generates the markdown relies on ",Object(o.b)("inlineCode",{parentName:"p"},"esprima")," and esprima cannot handle the bleeding edge tech of React sometimes and will fail to turn out Docblockr comments into the file."),Object(o.b)("h1",{id:"stylesscss"},"styles.scss"),Object(o.b)("p",null,"This is the styles file for the specific component. It should always have a parent wrapper selector to prevent bleeding thorugh to another component. In ",Object(o.b)("inlineCode",{parentName:"p"},"src/styles/main.scss")," there is a ",Object(o.b)("inlineCode",{parentName:"p"},"import 'src/components/**/*.scss")," statement to require all these style files so they too can use the variables and mixins avaiable to us with Sass."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/structure.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-structure-md-ee341dca0fedc3492bd2.js.map