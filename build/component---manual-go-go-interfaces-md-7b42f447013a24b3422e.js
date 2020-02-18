(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{kDse:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Interfaces.md"}});var c={_frontmatter:r},o=i.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(o,l({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"go-tour-interfaces"},"Go Tour Interfaces"),Object(a.b)("p",null,'A type implements an interface by implementing its methods. There is no explicit declaration of intent, no "implements" keyword.'),Object(a.b)("p",null,"Implicit interfaces decouple the definition of an interface from its implementation, which could then appear in any package without prearrangement"),Object(a.b)("p",null,"Under the hood, interface values can be thought of as a tuple of a value and a concrete type:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"(value, type)\n")),Object(a.b)("p",null,"An interface value holds a value of a specific underlying concrete type."),Object(a.b)("p",null,"Calling a method on an interface value executes the method of the same name on its underlying type."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport (\n    "fmt"\n    "math"\n)\n\ntype I interface {\n    M()\n}\n\ntype T struct {\n    S string\n}\n\nfunc (t *T) M() {\n    fmt.Println(t.S)\n}\n\ntype F float64\n\nfunc (f F) M() {\n    fmt.Println(f)\n}\n\nfunc main() {\n    var i I\n\n    i = &T{"Hello"}\n    describe(i)\n    i.M()\n\n    i = F(math.Pi)\n    describe(i)\n    i.M()\n}\n\nfunc describe(i I) {\n    fmt.Printf("(%v, %T)\\n", i, i)\n}\n')),Object(a.b)("h2",{id:"nil-interface-values"},"Nil interface values"),Object(a.b)("p",null,"A nil interface value holds neither value nor concrete type."),Object(a.b)("p",null,"Calling a method on a nil interface is a run-time error because there is no type inside the interface tuple to indicate which concrete method to call."),Object(a.b)("h2",{id:"the-empty-interface"},"The empty interface"),Object(a.b)("p",null,"The interface type that specifies zero methods is known as the empty interface:"),Object(a.b)("p",null,"interface{}\nAn empty interface may hold values of any type. (Every type implements at least zero methods.)"),Object(a.b)("p",null,"Empty interfaces are used by code that handles values of unknown type. For example, fmt.Print takes any number of arguments of type interface{}."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\n\nfunc main() {\n    var i interface{}\n    describe(i)\n\n    i = 42\n    describe(i)\n\n    i = "hello"\n    describe(i)\n}\n\nfunc describe(i interface{}) {\n    fmt.Printf("(%v, %T)\\n", i, i)\n}\n')),Object(a.b)("p",null,"Prints:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"(<nil>, <nil>)\n(42, int)\n(hello, string)\n")),Object(a.b)("h2",{id:"type-assertions"},"Type assertions"),Object(a.b)("p",null,"A type assertion provides access to an interface value's underlying concrete value."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"t := i.(T)")),Object(a.b)("p",null,"This statement asserts that the interface value ",Object(a.b)("inlineCode",{parentName:"p"},"i")," holds the concrete type ",Object(a.b)("inlineCode",{parentName:"p"},"T")," and assigns the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"T")," value to the variable ",Object(a.b)("inlineCode",{parentName:"p"},"t"),"."),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"i")," does not hold a ",Object(a.b)("inlineCode",{parentName:"p"},"T"),", the statement will trigger a panic."),Object(a.b)("p",null,"To test whether an interface value holds a specific type, a type assertion can return two values: the underlying value and a boolean value that reports whether the assertion succeeded."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"t, ok := i.(T)")),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"i")," holds a ",Object(a.b)("inlineCode",{parentName:"p"},"T"),", then ",Object(a.b)("inlineCode",{parentName:"p"},"t")," will be the underlying value and ok will be true."),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"not, ok")," will be false and ",Object(a.b)("inlineCode",{parentName:"p"},"t")," will be the zero value of type ",Object(a.b)("inlineCode",{parentName:"p"},"T"),", and no panic occurs."),Object(a.b)("p",null,"Note the similarity between this syntax and that of reading from a map."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\n\nfunc main() {\n    var i interface{} = "hello"\n\n    s := i.(string)\n    fmt.Println(s)\n\n    s, ok := i.(string)\n    fmt.Println(s, ok)\n\n    f, ok := i.(float64)\n    fmt.Println(f, ok)\n\n    f = i.(float64) // panic\n    fmt.Println(f)\n}\n')),Object(a.b)("h2",{id:"type-switches"},"Type switches"),Object(a.b)("p",null,"A type switch is a construct that permits several type assertions in series."),Object(a.b)("p",null,"A type switch is like a regular switch statement, but the cases in a type switch specify types (not values), and those values are compared against the type of the value held by the given interface value."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),"switch v := i.(type) {\ncase T:\n    // here v has type T\ncase S:\n    // here v has type S\ndefault:\n    // no match; here v has the same type as i\n}\n")),Object(a.b)("p",null,"The declaration in a type switch has the same syntax as a type assertion i.(T), but the specific type T is replaced with the keyword type."),Object(a.b)("p",null,"This switch statement tests whether the interface value i holds a value of type T or S. In each of the T and S cases, the variable v will be of type T or S respectively and hold the value held by i. In the default case (where there is no match), the variable v is of the same interface type and value as i."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\n\nfunc do(i interface{}) {\n    switch v := i.(type) {\n    case int:\n        fmt.Printf("Twice %v is %v\\n", v, v*2)\n    case string:\n        fmt.Printf("%q is %v bytes long\\n", v, len(v))\n    default:\n        fmt.Printf("I don\'t know about type %T!\\n", v)\n    }\n}\n\nfunc main() {\n    do(21)\n    do("hello")\n    do(true)\n}\n')),Object(a.b)("p",null,"Prints:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'Twice 21 is 42\n"hello" is 5 bytes long\nI don\'t know about type bool!\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Interfaces.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-interfaces-md-7b42f447013a24b3422e.js.map