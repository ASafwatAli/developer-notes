(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{"./manual/Programming-Languages/Creating-Your-Own-Language.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r={},s="wrapper";function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(s,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"creating-your-own-language"},"Creating Your Own Language"),Object(i.b)("h2",{id:"use-cases"},"Use Cases"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Domain-Specific Languages: Terraform, Gemfiles"),Object(i.b)("li",{parentName:"ol"},"Templating languages: Handlebars, Pug")),Object(i.b)("h2",{id:"usecases-at-sendgrid"},"Usecases at SendGrid"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Drag + Drop editor takes HTML, parses it into an abstract syntax tree (AST) and manipulates it before serializing it back into HTML."),Object(i.b)("li",{parentName:"ul"},"Using it for own bespoke templating language for dynamic email templates."),Object(i.b)("li",{parentName:"ul"},"Sync position in side-by-side editor by breaking HTML into an AST and rewriting the elements with information about their position in the text editor.")),Object(i.b)("h2",{id:"what-is-a-compiler"},"What is a compiler?"),Object(i.b)("p",null,"Something that turns a higher-level language into a lower-level langauge","*","."),Object(i.b)("h2",{id:"todays-example"},"Todays example"),Object(i.b)("p",null,"In this particular example, we will follow the course that builds the language ",Object(i.b)("inlineCode",{parentName:"p"},"Dropbear"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Lisp-like langage"),Object(i.b)("li",{parentName:"ul"},"Leverage existing JavaScript run-time")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"(add 1 2 (subtract 6 3))\n")),Object(i.b)("h2",{id:"inspiration-resources"},"Inspiration Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://norvig.com/lispy.html"}),"https://norvig.com/lispy.html")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://eloquentjavascript.net/12_language.html"}),"https://eloquentjavascript.net/12_language.html")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/jamiebuilds/the-super-tiny-compiler"}),"https://github.com/jamiebuilds/the-super-tiny-compiler"))),Object(i.b)("h2",{id:"stages-of-a-compiler"},"Stages of a Compiler"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Parsing: Take source code and turn it into representation of that code."),Object(i.b)("li",{parentName:"ol"},"Transformation: Take source code and transforms it to do whatever the compiler wants it to do"),Object(i.b)("li",{parentName:"ol"},"Generation: Take the transformed representation and turns it into a new string of code")),Object(i.b)("h2",{id:"parsing"},"Parsing"),Object(i.b)("p",null,"Consists of ",Object(i.b)("inlineCode",{parentName:"p"},"Lexical analysis")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Syntactic analysis"),"."),Object(i.b)("p",null,"Note: Lexing = Lexical analysis."),Object(i.b)("p",null,"Basically: take big string of code and turn it into ",Object(i.b)("inlineCode",{parentName:"p"},"tokens")," where a ",Object(i.b)("inlineCode",{parentName:"p"},"token")," is a small unit of the language."),Object(i.b)("p",null,"How might a lexer work?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Accept input string of code"),Object(i.b)("li",{parentName:"ul"},"Create var for tracking position (like cursor)"),Object(i.b)("li",{parentName:"ul"},"Make an array of tokens"),Object(i.b)("li",{parentName:"ul"},"Write a while loop that iterates through the source code input"),Object(i.b)("li",{parentName:"ul"},"Check each token, see if matches type"),Object(i.b)("li",{parentName:"ul"},"Add it to the array of token")),Object(i.b)("h3",{id:"using-helpers"},"Using helpers"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const isWhitespace = character => /\\s/.test(character);\nconst isNumber = character => /[0-9]/.test(character);\nconst isOperator = character => /[\\+\\-\\*\\/]/.test(character);\n")),Object(i.b)("h3",{id:"turning-strings-to-tokens"},"Turning strings to tokens"),Object(i.b)("p",null,"Note that based on our syntax, we may need to collect multiple characters into a single token ie ",Object(i.b)("inlineCode",{parentName:"p"},"22 + 23")," (which tokenizes as ",Object(i.b)("inlineCode",{parentName:"p"},"['2','2','+','2','3']"),")"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const tokenize = input => {\n  let cursor = 0;\n  const tokens = [];\n\n  while (cursor < input.length) {\n    // Logic here\n    // Example for number helper\n    if (isNumber(character))\n  }\n\n  return tokens;\n};\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Programming-Languages/Creating-Your-Own-Language.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-programming-languages-creating-your-own-language.101a1afd2417ec7a4a77.js.map