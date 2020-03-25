(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{y1Lw:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Principles/Communications.md"}});var i={_frontmatter:l},b=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(b,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"communications"},"Communications"),Object(a.b)("p",null,"This should cover things like logging, tracing etc."),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://medium.freecodecamp.org/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472"}),"This article is a great reference.")),Object(a.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#communications"}),"Communications"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#table-of-contents"}),"Table of contents")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#logging"}),"Logging"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#console-logging-in-the-browser"}),"Console logging in the browser")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#practical-usage"}),"Practical usage"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#logging-keys"}),"Logging keys")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#example-class"}),"Example Class")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#other-tips-and-gotchas"}),"Other tips and gotchas"))))),Object(a.b)("h2",{id:"logging"},"Logging"),Object(a.b)("h3",{id:"console-logging-in-the-browser"},"Console logging in the browser"),Object(a.b)("p",null,"We have a few methods we can use with ",Object(a.b)("inlineCode",{parentName:"p"},"console")," to help us be more proficient on how we log:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),".log\n.info\n.warn\n.error\n.table\n.time(key)\n.group\n.groupEnd\n.trace\n.assert\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Guidelines:")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When going through a process across files and functions, attempt to use group to log the process."),Object(a.b)("li",{parentName:"ol"},"Assertions may also become handy when ",Object(a.b)("inlineCode",{parentName:"li"},"if/else")," logic is involved for logging purposes."),Object(a.b)("li",{parentName:"ol"},"Ensure these logs only show when running in a certain environment (ie not in production mode).")),Object(a.b)("h2",{id:"practical-usage"},"Practical usage"),Object(a.b)("p",null,"These are more guidelines that take influence from languages like Objective-C and personal decisions."),Object(a.b)("h3",{id:"logging-keys"},"Logging keys"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Key"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Error"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"!"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.error('! description', error);")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Warning"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"?"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.warn('? description');")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Functions"),Object(a.b)("td",r({parentName:"tr"},{align:null}),">"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.group('> fileName.functionName');")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Instance methods"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.group('- className.methodName');")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Static methods"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"+"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.group('+ className.staticMethodName');")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Debug level 1"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"#"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.log('# importantDebugMessage');")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Debug level 2"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"##"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.log('## moreImportantDebugMessage');")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Debug level 3"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"###"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.log('### mostImportantDebugMessage');")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Event"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"@"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.log('@ analyticsEndpoint:', data);")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Success"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"$"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"console.log('$ message');")))),Object(a.b)("h3",{id:"example-class"},"Example Class"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, {Component} from 'react';\nimport Emitter from 'common/Emitter';\nimport Config from 'src/app.json';\nimport Waypoint from 'react-waypoint';\n\n/**\n * Render the ComponentALLandingFive component\n *\n * @class ComponentALLandingFive\n * @extends {Component}\n */\nclass ComponentALLandingFive extends Component {\n    /**\n     * Handle primary button click event.\n     *\n     * @memberof ComponentALLandingFive\n     */\n    handlePrimaryClick = e => {\n        console.group('- ComponentALLandingFive.handlePrimaryClick');\n        Emitter.emit('event', {\n            event: 'ComponentALLandingFive.handlePrimaryClick',\n            e: e.target,\n            data: {\n                href: '/'\n            }\n        });\n\n        if (Config.debug) {\n            e.preventDefault();\n            console.warn('? Debug mode: early return');\n            console.groupEnd();\n            return;\n        }\n\n        const {router} = this.props;\n        router.push(Config.baseUrl + '/test');\n        console.groupEnd();\n    }\n\n    /**\n     * Handle secondary button click event.\n     *\n     * @memberof ComponentALLandingFive\n     */\n    handleSecondaryClick = e => {\n        console.group('- ComponentALLandingFive.handleSecondaryClick');\n        Emitter.emit('event', {\n            event: 'ComponentALLandingFive.handleSecondaryClick',\n            e: e.target,\n            data: {\n                href: '/'\n            }\n        });\n\n        if (Config.debug) {\n            e.preventDefault();\n            console.warn('? Debug mode: early return');\n            console.groupEnd();\n            return;\n        }\n\n        const {router} = this.props;\n        router.push(Config.baseUrl + '/test');\n        console.groupEnd();\n    }\n\n    /**\n     * Handle component enter event.\n     *\n     * @memberof ComponentALLandingFive\n     */\n    handleWaypointEnter = e => {\n        console.log('- ComponentALLandingFive.handleWaypointEnter');\n        Emitter.emit('event', {event: 'ComponentALLandingFive.handleWaypointEnter'});\n    }\n\n    /**\n     * Handle component exit event.\n     *\n     * @memberof ComponentALLandingFive\n     */\n    handleWaypointExit = e => {\n        console.log('- ComponentALLandingFive.handleWaypointExit');\n        Emitter.emit('event', {event: 'ComponentALLandingFive.handleWaypointExit'});\n    }\n\n    /**\n     * Render ComponentALLandingFive component\n     * @memberof ComponentALLandingFive\n     * @var {function} render Render ComponentALLandingFive component\n     * @returns {Object} component\n     */\n    render() {\n        // omitted for brevity\n    }\n}\n\nexport default ComponentALLandingFive;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:"),' In the below gif, the "analytics" logs come from the Emitter module class.'),Object(a.b)("p",null,Object(a.b)("img",{alt:"Example in action",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1539219876/gifAnalytics.gif"})),Object(a.b)("h2",{id:"other-tips-and-gotchas"},"Other tips and gotchas"),Object(a.b)("p",null,"If there is a possibility of an early return or error when logging and using groups, ensure that you adequately close the group off properly. If you cannot ensure that a group will close (ie entering a zone, mouse hover etc may not exit) then avoid the use of a group for that event and rely more on logs."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Principles/Communications.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-principles-communications-md-b370a10a07b49d57b908.js.map