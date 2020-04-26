(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{kWs6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/React-Context.md"}});var c={_frontmatter:l},i=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-context"},"React Context"),Object(a.b)("h2",{id:"basic-introduction"},"Basic Introduction"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"System"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Props"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Get data from a parent component to a direct child component")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Context"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Gets data from a parent omponent to any nested child component")))),Object(a.b)("h2",{id:"an-app-with-context"},"An App with Context"),Object(a.b)("p",null,"A basic app where we want to pass context of things like language everywhere."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"class App extends Component {\n    state = {langauge: 'english'};\n\n    onLanguageChange = language => this.setState({language});\n\n    render() {\n        // return elements with onClick to change state\n    }\n}\n")),Object(a.b)("h2",{id:"getting-data-out-of-context"},"Getting Data Out of Context"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create context file"),Object(a.b)("li",{parentName:"ol"},"Set contextType as static property to class"),Object(a.b)("li",{parentName:"ol"},"Consume from this.context"),Object(a.b)("li",{parentName:"ol"},"Update the context using the ",Object(a.b)("inlineCode",{parentName:"li"},"Provider"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// context/language/index.js\nimport React from 'react';\n\n// creating context with default 'english'\nexport default React.createContext('english');\n\n// inside of a component \nimport LanguageContext from 'path/to/file';\nexport default class Button extends React.Component {\n    static contextType = LanguageContext;\n\n    render() {\n        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';\n        return <button>{text}</button>\n    }\n}\n")),Object(a.b)("p",null,"To update the context, from a higher provider we could set..."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"class App extends Component {\n    state = {langauge: 'english'};\n\n    onLanguageChange = language => this.setState({language});\n\n    render() {\n        // return elements with onClick to change state\n        <LanguageContext.Provider value={this.state.language}>\n           <ChildThatContainsButton>\n        </LanguageContext.Provider>\n    }\n}\n")),Object(a.b)("h3",{id:"gotchas-around-context"},"Gotchas Around Context"),Object(a.b)("p",null,"The big gotcha with the context is dealing with the value prop given to the provider."),Object(a.b)("h2",{id:"alternative-consumption-of-data-with-consumers"},"Alternative Consumption of Data with Consumers"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// context/language/index.js\nimport React from 'react';\n\n// creating context with default 'english'\nexport default React.createContext('english');\n\n// inside of a component \nimport LanguageContext from 'path/to/file';\nexport default class Button extends React.Component {\n    render() {\n        return <button>\n            <LanguageContext.Consumer>\n              {value => value === 'english' ? 'Submit' : 'Voorleggen'}\n           </LanguageContext.Consumer>\n        </button>\n    }\n}\n")),Object(a.b)("h3",{id:"using-multiple-consumers"},"Using Multiple Consumers"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// context/language/index.js\nimport React from 'react';\n\n// creating context with default 'english'\nexport default React.createContext('english');\n\n// inside of a component \nimport LanguageContext from 'path/to/file';\nexport default class Button extends React.Component {\n    render() {\n        return <button>\n            <ColorContext.Consumer>\n            {color => {\n                <LanguageContext.Consumer>\n                    {value => value === 'english' ? 'Submit' : 'Voorleggen'}\n                </LanguageContext.Consumer>  \n            }}\n           </ColorContext.Consumer>\n        </button>\n    }\n}\n")),Object(a.b)("h2",{id:"context-vs-redux"},"Context vs Redux"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Redux"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Context"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Excellent documentation"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"No need for extra lib")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Well-known for design patterns"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Hard to build a 'store' component with cross cutting concerns")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Tremendous amount of open source libs"),Object(a.b)("td",r({parentName:"tr"},{align:null}))))))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/React-Context.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-react-context-md-e8e5a9c0766bce200e34.js.map