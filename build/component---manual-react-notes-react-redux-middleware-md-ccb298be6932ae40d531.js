(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{fu8x:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/React-Redux-Middleware.md"}});var l={_frontmatter:c},i=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-with-redux---middleware"},"React with Redux - Middleware"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#react-with-redux---middleware"}),"React with Redux - Middleware"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#redmid-1-overview"}),"REDMID-1: Overview")," - ",Object(a.b)("a",o({parentName:"li"},{href:"#-----redmid-11-component-set-up"}),"---- REDMID-1.1: Component Set up")," - ",Object(a.b)("a",o({parentName:"li"},{href:"#-----redmid-12-controlled-components-and-binding-text"}),"---- REDMID-1.2: Controlled Components and Binding Text"))))),Object(a.b)("h2",{id:"redmid-1-overview"},"REDMID-1: Overview"),Object(a.b)("p",null,"In the last chapter, we saw some main ideas about Redux. Now, we want to create an app. We will have async (like AJAX) calls in this."),Object(a.b)("p",null,"We're going to create a webpage that will search for cities and give back Temp, Pressure and Humidity."),Object(a.b)("p",null,"We will use things like a line chart for the temp etc."),Object(a.b)("p",null,"In general, the components won't make AJAX calls... we want Redux to that for us."),Object(a.b)("h3",{id:"redmid-11-component-set-up"},"REDMID-1.1: Component Set up"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"SearchBar"),Object(a.b)("li",{parentName:"ol"},"App"),Object(a.b)("li",{parentName:"ol"},"ForecastList"),Object(a.b)("li",{parentName:"ol"},"Chart")),Object(a.b)("p",null,"Ensure that within source, you have the folders that you are looking for."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"In containers > SearchBar.js")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'import React, { Component } from \'react\';\n\nexport default class SearchBar extends Component {\n    render() {\n        return (\n            <form className="input-group">\n                <input />\n                <span className="input-group-btn">\n                    <button type="submit" className="btn btn-secondary">\n                        Submit\n                    </button>\n                </span>\n            </form>\n        );\n    }\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"In components > app.js")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport SearchBar from '../containers/SearchBar.js';\n\nexport default class App extends Component {\n    render() {\n        return (\n            <div>\n                <SearchBar />\n            </div>\n        );\n    }\n}\n")),Object(a.b)("h3",{id:"redmid-12-controlled-components-and-binding-text"},"REDMID-1.2: Controlled Components and Binding Text"),Object(a.b)("p",null,"To create the component level state. (not redux)"),Object(a.b)("p",null,'Remember, for event handlers, we need to set the callback function where the callback reference is "this", it will have the wrong context from the render section.'),Object(a.b)("p",null,'You can fix this in the constructor by let the instance of search bar to bind "this" and replace this.onInputChange with this result.'),Object(a.b)("p",null,"The other option sometimes would be to instead of using the constructor, we could us onChange={ () => this.onInputChange }"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"In containers > SearchBar.js")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'import React, { Component } from \'react\'\n\nexport default class SearchBar extends Component {\n\n    contructor(props) {\n        super(props);\n\n        this.state = { term: \'\' };\n\n        this.onInputChage = this.onInputChange.bind(this);\n    }\n\n    onInputChange(event) {\n        console.log(event.target.value);\n        this.setState({ term: event.target.value });\n    }\n\n    render() {\n        return (\n            <form className="input-group">\n                <input\n                    placeholder="Get a 5-day forecast in your favourite cities"\n                    className="form-control"\n                    value={this.state.term}\n                    onChange={this.onInputChange}\n                />\n                <span className="input-group-btn">\n                    <button type="submit" className="btn btn-secondary">Submit</button>\n                </span>\n            </form>\n        )\n    }\n}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/React-Redux-Middleware.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-react-redux-middleware-md-ccb298be6932ae40d531.js.map