(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{"6l98":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/TypeScript/Developers-Guide.md"}});var o={_frontmatter:s},l=r.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(l,i({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"developers-guide-to-typescript"},"Developer's Guide to TypeScript"),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("p",null,"For types, we have all our basic types and we can also have custom types."),Object(a.b)("p",null,"There are two types, ",Object(a.b)("inlineCode",{parentName:"p"},"primitive")," and ",Object(a.b)("inlineCode",{parentName:"p"},"object")," - the ",Object(a.b)("inlineCode",{parentName:"p"},"object")," types itself can be what we define."),Object(a.b)("p",null,"Why do we care? The compiler uses it to search for errors and it allows other engineers to understand what type of data is flowing around."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"interface Todo {\n  id: number;\n  completed: boolean;\n};\n\nconst todo = obj.data as Todo;\n")),Object(a.b)("h2",{id:"declaring-types-examples"},"Declaring types examples"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// array\nlet colors: string[] = ['a', 'b', 'c'];\n\n// class\nclass Car {}\nlet car: Car = new Car();\n\n// object literal\nlet point: { x: number, y: number } = {\n  x: 10,\n  y: 20\n};\n\n// functions\nconst logNumber: (i: number) => void = (i: number) => {\n  console.log(i);\n};\n")),Object(a.b)("p",null,"The object literal gets a bit nasty, but we have ways around this using ",Object(a.b)("inlineCode",{parentName:"p"},"types")," and ",Object(a.b)("inlineCode",{parentName:"p"},"interfaces"),"."),Object(a.b)("h2",{id:"the-any-type"},"The 'any' type"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'const json = \'{"x":10, "y": 20}\';\nconst coordinates = JSON.parse(json); // by default gets any time\n\n// this is the better\nconst coor: { x: number, y: number } = JSON.parse(json);\n')),Object(a.b)("h2",{id:"the-void-and-never-return-types"},"The 'void' and 'never' return types"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// Returns nothing\nconst logger = (message: string): void => console.log(message);\n\n// Never returns\nconst throwError = (message: string): never => throw new Error(message);\n")),Object(a.b)("h2",{id:"interfaces"},"Interfaces"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"interface Vehicle {\n  name: string;\n  year: number;\n  broken: boolean;\n}\n\nconst oldCivic = {\n  name: 'civic',\n  year: 2000,\n  broken: true\n};\n\nconst printVehicle = (vehicle: Vehicle): void => {};\n")),Object(a.b)("h2",{id:"abstract-classes"},"Abstract Classes"),Object(a.b)("p",null,"Good for classes that we only want to use to extend. Think expectation vs reality."),Object(a.b)("p",null,"Abstract classes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Cannot create objects directly"),Object(a.b)("li",{parentName:"ol"},"Only used as a parent class"),Object(a.b)("li",{parentName:"ol"},"Can contain real implementations of some methods"),Object(a.b)("li",{parentName:"ol"},"Can refer to methods that don't exist yet")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"abstract class Examlpe {\n  // promises we will create this func later\n  abstract requireFunc(argA: number): void;\n\n  swap = (a:number) => requireFunc(a);\n}\n")),Object(a.b)("h2",{id:"abstract-classes-vs-interfaces"},"Abstract classes vs Interfaces"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Interfaces promot loose coupling, Abstract/Inheritance is for strong coupling"),Object(a.b)("li",{parentName:"ul"},"Interfaces for very different objects we want to work together, Abstract/Inheritance for when we want to build up a definition of an object")),Object(a.b)("h2",{id:"enums"},"Enums"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"enum Result {\n  Win = 'W',\n  Loss = 'L',\n  Draw = 'D'\n}\n")),Object(a.b)("h2",{id:"generics"},"Generics"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Like function args, but for types in class/function definitions"),Object(a.b)("li",{parentName:"ul"},"Allow us to define the type of a property/argument/return value at a future point"),Object(a.b)("li",{parentName:"ul"},"Used heavily when writing useable code")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"class HoldAnything<TypeOfData> {\n  data: TypeOfData;\n}\n\nconst holdNumber = new HolderAnything<number>();\nconst holdString = new HolderAnything<string>();\n\ninterface Coordinates {\n  x: number;\n  y: number;\n}\n\nconst holdCoordinates = new HolderAnything<Coordinates>();\n\n// TypeOfData can actually be called anything\n// Convention is normally T, but then we go alphabetical order if we need multiple generics\n\nclass holdMultipleAnything<T,U,V> {\n  firstThing: T;\n  secondThing: U;\n  thirdThing: V;\n}\n\nconst holdAllTheThings = new holdMultipleAnything<string, number, Coordinates>();\n")),Object(a.b)("h3",{id:"constraints-with-generics"},"Constraints with Generics"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Cannot call base methods on generics since there is no guarantee without a interface"),Object(a.b)("li",{parentName:"ul"})),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"class Car {\n  print() {\n    console.log('Car');\n  }\n}\n\nclass House {\n  print() {\n    console.log('House');\n  }\n}\n\ninterface Printable {\n  print(): void;\n}\n\nfunction printWhatever<T extends Printable>(el: T) {\n  el.print();\n}\n\nprintWhatever(new Car());\nprintWhatever(new House());\n")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// what you have to do without method overloading\nclass Utility {\n  static function addNumbers(a:number, b: number): number {\n    return a + b;\n  }\n\n  static function addStrings(a:string, b: string): string {\n    return a + \" \" + b;\n  }\n}\nUtility.addNumbers(1,2) // return 2\nUtility.addStrings('Hello','World') // return \"Hello World\"\n\n// method overloading in other languages\nclass Utility {\n  static function add(a:number, b: number): number {\n    return a + b;\n  }\n\n  static function add(a:string, b: string): string {\n    return a + \" \" + b;\n  }\n}\nUtility.add(1,2) // return 2\nUtility.add('Hello','World') // return \"Hello World\"\n\n// method overloading in other typescript\nclass Utility {\n  static function add(a:number, b: number): number;\n  static function add(a:string, b: string): string;\n\n  static function add(a, b) {\n    return a + b;\n  }\n}\nUtility.add(1,2) // return 2\nUtility.add('Hello','World') // return \"HelloWorld\"\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/TypeScript/Developers-Guide.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-type-script-developers-guide-md-8a224ab65b7f8af1e7e0.js.map