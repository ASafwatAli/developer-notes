(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{DQ9t:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return s})),e.d(n,"default",(function(){return c}));e("1c7q"),e("abGl"),e("gZHo"),e("Fdmb"),e("Ir+3"),e("2mQt"),e("mXGw");var r=e("/FXl"),a=e("TjRS");e("aD51");function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Understanding-This.md"}});var b={_frontmatter:s},l=a.a;function c(t){var n=t.components,e=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,["components"]);return Object(r.b)(l,o({},b,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"**")))))))))),"/"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'Understanding "this" in JavaScript\n')),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"**")))))))))),"/"),Object(r.b)("p",null,'4 ways that "this" takes a value:'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In normal function calls"),Object(r.b)("li",{parentName:"ol"},"Within methods on objects"),Object(r.b)("li",{parentName:"ol"},"Within an object that has been constructed"),Object(r.b)("li",{parentName:"ol"},"A function invoked with .call, .apply, or bind")),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))),"/\nFirst way\n/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))),"/"),Object(r.b)("p",null,'function helloWorld() {\nconsole.log("Hello world!");\n};'),Object(r.b)("p",null,'//"this"in a browser, it\'s the window\n// bit different in node.js'),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))),"/\nSecond way\n/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))),"/"),Object(r.b)("p",null,"//this is done using Node"),Object(r.b)("p",null,'var Portland = {\nbridges: 12,\nairport: 1,\nsoccerTeams: 1,\nlogNumberOfBridges: function() {\nconsole.log("There are " + this.bridges + " bridges in Portland!")\n},\nlogTeams: function() {\nconsole.log(this.soccerTeams);\n}\n}'),Object(r.b)("p",null,"//another way of logteams using this\nfunction logTeams() {\nconsole.log(this.soccerTeams);\n//if the word was just this, it would print all node info\n}"),Object(r.b)("p",null,"Portland.foo = logTeams;"),Object(r.b)("p",null,"Portland.logNumberOfBridges();\nPortland.logTeams();\nPortland.foo();\nlogTeams(); //comes back as undefined"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))),"/\nThird way\n/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))),"/"),Object(r.b)("p",null,"var City = function(name, state) {\nthis.name = name || 'Portland';\nthis.state = state || 'Oregon';\nthis.printMyCityAndState = function() {\nconsole.log(\"My city is \" + this.name + \", and my state is \" + this.state);\n};\n};"),Object(r.b)("p",null,"portland = new City();\nseattle = new City('Seattle', 'Washington');"),Object(r.b)("p",null,"console.log(portland);\nconsole.log(seattle);"),Object(r.b)("p",null,"portland.printMyCityAndState();\nseattle.printMyCityAndState();"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Note: Corresponds to the instance value itself")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Understanding-This.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-understanding-this-md-51d48d612728603e3854.js.map