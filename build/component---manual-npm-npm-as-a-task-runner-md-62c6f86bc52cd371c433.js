(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{"Du/W":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var l=t("/FXl"),a=t("TjRS");t("aD51");function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/npm/NPM-as-a-Task-Runner.md"}});var r={_frontmatter:c},s=a.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,l,a={},b=Object.keys(e);for(l=0;l<b.length;l++)t=b[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(l.b)(s,b({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"NPM as a Task Runner"),Object(l.b)("p",null,"What is a task? Something we need to do."),Object(l.b)("p",null,"Common Tasks"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"run test suite"),Object(l.b)("li",{parentName:"ul"},"compilng Sass/TypeScript/CoffeeScript"),Object(l.b)("li",{parentName:"ul"},"starting a web server"),Object(l.b)("li",{parentName:"ul"},"starting a worker")),Object(l.b)("p",null,"npm tasks are called scripts -> add to 'scripts' in package.json"),Object(l.b)("p",null,'"',Object(l.b)("inlineCode",{parentName:"p"},"<name>"),'": "',Object(l.b)("inlineCode",{parentName:"p"},"<code>"),'"'),Object(l.b)("p",null,"then you can simply go..."),Object(l.b)("p",null,"npm run ",Object(l.b)("inlineCode",{parentName:"p"},"<name>"),"!"),Object(l.b)("p",null,"Types of tasks:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Built-in")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"eg tests etc"),Object(l.b)("li",{parentName:"ul"},"can be run as npm test instead of npm run test")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Arbitrary")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'requires a "run"'),Object(l.b)("li",{parentName:"ul"},"eg npm run compile")),Object(l.b)("p",null,"For getting a project ready to be deployed..."),Object(l.b)("p",null,"in the tests folder... test_dice.js //used in this example"),Object(l.b)("p",null,"mocha is used as a mocha and uglify-js to compile all js files into one."),Object(l.b)("p",null,"Often encouraged to save global test scripts."),Object(l.b)("p",null,"node_modules/.bin/mocha //this is an executable"),Object(l.b)("p",null,"Can run from npm without writing this."),Object(l.b)("p",null,'Change "test": "mocha" in the scripts.'),Object(l.b)("p",null,"now we can go..."),Object(l.b)("p",null,"npm run test //don't even need run since it is built-in"),Object(l.b)("p",null,"//////////////////////////////////////////"),Object(l.b)("p",null,"Creating our own arbitrary scripts"),Object(l.b)("p",null,"We can use the uglify to create an app.js"),Object(l.b)("p",null,"Large, annoying code...\nnode_modules/.bin/uglifyjs src/models/","*"," src/frontend.js -m -c -o build/app.js"),Object(l.b)("p",null,"//m flag reduces some names\n//c combines into single file"),Object(l.b)("p",null,"INSTEAD, CREATE OUR OWN TASK"),Object(l.b)("p",null,'"uglify": "node_modules/.bin/uglifyjs src/models/',"*",' src/frontend.js -m -c -o build/app.js"'),Object(l.b)("p",null,"Now, we can just type:\nnpm run uglify"),Object(l.b)("p",null,"And TADAAAAA!"),Object(l.b)("p",null,"For our css etc."),Object(l.b)("p",null,'"copy-files": "cp src/',Object(l.b)("em",{parentName:"p"},".html build/ & cp src/"),'.css build/"'),Object(l.b)("p",null,"npm run copy-files"),Object(l.b)("p",null,"Now for a single task!"),Object(l.b)("p",null,'"build": "npm run copy-files && npm run uglify" //&& run sequentially, & run in parallel'),Object(l.b)("p",null,"npm help scripts //shows other default scripts"))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/npm/NPM-as-a-Task-Runner.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-npm-npm-as-a-task-runner-md-62c6f86bc52cd371c433.js.map