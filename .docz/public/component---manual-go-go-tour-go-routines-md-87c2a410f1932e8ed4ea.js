(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{"7Ez9":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Tour-Go-Routines.md"}});var l={_frontmatter:i},u=a.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(u,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"go-tour---goroutines"},"Go Tour - Goroutines"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"goroutine")," is a lightweight thread managed by the Go runtime."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-golang"}),"go f(x, y, z)\n")),Object(o.b)("p",null,"...starts a new goroutine running"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-golang"}),"f(x, y, z)\n")),Object(o.b)("p",null,"The evaluation of f, x, y, and z happens in the current goroutine and the execution of f happens in the new goroutine."),Object(o.b)("p",null,"Goroutines run in the same address space, so access to shared memory must be synchronized. The sync package provides useful primitives, although you won't need them much in Go as there are other primitives. (See the next slide.)"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc say(s string) {\n    for i := 0; i < 5; i++ {\n        time.Sleep(100 * time.Millisecond)\n        fmt.Println(s)\n    }\n}\n\nfunc main() {\n    go say("world")\n    say("hello")\n}\n')),Object(o.b)("p",null,"Output:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-shell"}),"world\nhello\nhello\nworld\nworld\nhello\nhello\nworld\nworld\nhello\n")),Object(o.b)("p",null,"Note that what enables the ",Object(o.b)("inlineCode",{parentName:"p"},"goroutine")," in the above function to run is the ",Object(o.b)("inlineCode",{parentName:"p"},"time.Sleep")," function. Without it, the main go routine executes ",Object(o.b)("inlineCode",{parentName:"p"},"say('hello')")," and exits before the ",Object(o.b)("inlineCode",{parentName:"p"},"go say('world')")," runs."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Tour-Go-Routines.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-tour-go-routines-md-87c2a410f1932e8ed4ea.js.map