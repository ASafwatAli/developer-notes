(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{xoG9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Rails-Useful-Tidbits.md"}});var b={_frontmatter:o},i=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,l({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"rails-useful-tidbits"},"Rails Useful Tidbits"),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("h3",{id:"rails-console"},"Rails Console"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Action"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),'app.get "/route"'),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Test a get route")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Model.all"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Get array of model")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Modal.first"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Get first of model")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Model.find(:id)"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Find model by ID")))),Object(a.b)("h3",{id:"decent-exposure"},"Decent Exposure"),Object(a.b)("p",null,"A popular Rails gem helper for creating declarative interfaces in controllers. ",Object(a.b)("a",l({parentName:"p"},{href:"https://github.com/hashrocket/decent_exposure"}),"Link here"),"."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"class ThingsController < ApplicationController\n  # all the follpowing do the same way\n  expose :thing, fetch: ->{ get_thing_some_way_or_another }\n  expose(:thing){ get_thing_some_way_or_another }\n  expose :thing, ->{ get_thing_some_way_or_another }\n  expose :thing, :get_thing_some_way_or_another\nend\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Rails-Useful-Tidbits.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-rails-useful-tidbits-md-6016011fd7d32db32bbe.js.map