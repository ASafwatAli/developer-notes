(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{bbKw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Architectural-Principles/Policy-And-Level.md"}});var i={_frontmatter:l},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"policy-and-level"},"Policy and Level"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The art of architecture often involves forming regrouped compoonents into an acyclic graph. The nodes of the graph are the components that contain policies at the same level.")),Object(a.b)("p",null,'The "nodes" of the graph are the components that contain policies at the same level. The directed edges are the dependencies between those components. They connect components that are at different levels.'),Object(a.b)("p",null,'In an example where "Translate" has source code dependencies "Read char" and "Write char", the latter two are the lowerst-level policies of the system.'),Object(a.b)("p",null,'"Translate" is the highest-level component in this system because it is the farthest from the inputs and outputs.'),Object(a.b)("h2",{id:"level"},"Level"),Object(a.b)("p",null,'A level is "the distance from the inputs and outputs".\nThe farther a policy is from the system inputs and outputs, the higher the level.'),Object(a.b)("p",null,"The lowest-level are those policies that manage input and output."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Architectural-Principles/Policy-And-Level.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-architectural-principles-policy-and-level-md-594e858f2d20997f9484.js.map