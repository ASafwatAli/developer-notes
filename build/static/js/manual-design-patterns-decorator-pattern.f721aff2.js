(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"./manual/Design-Patterns/Decorator-Pattern.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s={},i="wrapper";function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(i,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"decorator-pattern"},"Decorator Pattern"),Object(r.b)("p",null,"This is another type of structural pattern."),Object(r.b)("p",null,"The decorator pattern works by creating a decorator class that accepts the base class as an argument to the constructor and then implementing a function that calls to super."),Object(r.b)("p",null,"Intent:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Attach additional responsibilities to an object dynamically. Gives an alternative to subclassing."),Object(r.b)("li",{parentName:"ol"},"Client-specified embellishment of a core object by recursively wrapping it."),Object(r.b)("li",{parentName:"ol"},"Wrapping a gift, putting it in a box, and wrapping the box.")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"interface Pizza {\n  cost(): Number;\n}\n\nclass BasePizza implements Pizza {\n  cost(): Number {\n    return 10;\n  }\n}\n\nabstract class PizzaExtraDecorator implements Pizza {\n  private _pizza: Pizza;\n\n  constructor(pizza: BasePizza) {\n    this._pizza = pizza;\n  }\n\n  cost(): Number {\n    return this._pizza.cost();\n  }\n}\n\nclass ExtraPineappleDecorator extends PizzaExtraDecorator {\n  private _price: Number = 2;\n\n  cost(): Number {\n    return super.cost().valueOf() + this._price.valueOf();\n  }\n}\n\nclass ExtraCheeseDecorator extends PizzaExtraDecorator {\n  private _price: Number = 2.5;\n\n  cost(): Number {\n    return super.cost().valueOf() + this._price.valueOf();\n  }\n}\n\n(function main() {\n  const pizza = new BasePizza();\n  const withPineapple = new ExtraPineappleDecorator(pizza);\n  const withExtraCheese = new ExtraCheeseDecorator(withPineapple);\n  console.log(`Total: $${withExtraCheese.cost()}`);\n})();\n")),Object(r.b)("p",null,"Other alternatives could include creating a christmas tree with actual decorations as a decorator."))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Decorator-Pattern.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-design-patterns-decorator-pattern.101a1afd2417ec7a4a77.js.map