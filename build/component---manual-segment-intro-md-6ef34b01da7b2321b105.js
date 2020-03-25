(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{uQlq:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Segment/Intro.md"}});var o={_frontmatter:c},l=i.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(l,r({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"segmentio"},"SegmentIO"),Object(a.b)("p",null,"Segment IO abstracts the layers of integration from code base to external GUI UI."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("p",null,"Reference can be ",Object(a.b)("a",r({parentName:"p"},{href:"https://segment.com/"}),"found here on the main site"),"."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install the Segment ",Object(a.b)("inlineCode",{parentName:"li"},"js")," module using Kratos."),Object(a.b)("li",{parentName:"ol"},"Add REACT_APP_SEGMENT_KEY to the .env file with the correct key.")),Object(a.b)("h2",{id:"intergration"},"Intergration"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"init()")," function runs a basic command instantiate Segment."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export default class Segment {\n static init() {\n  var analytics = (window.analytics = window.analytics || []);\n  if (!analytics.initialize) {\n   if (analytics.invoked) {\n    window.console &&\n     console.error &&\n     console.error('Segment snippet included twice.');\n   } else {\n    analytics.invoked = !0;\n    analytics.methods = [\n     'trackSubmit',\n     'trackClick',\n     'trackLink',\n     'trackForm',\n     'pageview',\n     'identify',\n     'reset',\n     'group',\n     'track',\n     'ready',\n     'alias',\n     'debug',\n     'page',\n     'once',\n     'off',\n     'on'\n    ];\n    analytics.factory = function(t) {\n     return function() {\n      var e = Array.prototype.slice.call(arguments);\n      e.unshift(t);\n      analytics.push(e);\n      return analytics;\n     };\n    };\n    for (var t = 0; t < analytics.methods.length; t++) {\n     var e = analytics.methods[t];\n     analytics[e] = analytics.factory(e);\n    }\n    analytics.load = function(t, e) {\n     var n = document.createElement('script');\n     n.type = 'text/javascript';\n     n.async = !0;\n     n.src =\n      'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js';\n     var a = document.getElementsByTagName('script')[0];\n     a.parentNode.insertBefore(n, a);\n     analytics._loadOptions = e;\n    };\n    analytics.SNIPPET_VERSION = '4.1.0';\n    analytics.load(process.env.REACT_APP_SEGMENT_KEY);\n    analytics.page();\n   }\n  }\n }\n}\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"The recommendation would be to use the ",Object(a.b)("inlineCode",{parentName:"p"},"js")," module ",Object(a.b)("inlineCode",{parentName:"p"},"Emitter")," to abstract all the logic."),Object(a.b)("p",null,"Using throughout the app can happen through the ",Object(a.b)("inlineCode",{parentName:"p"},"window")," object."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"window.analytics.track('Email Opened', data);\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Segment/Intro.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-segment-intro-md-6ef34b01da7b2321b105.js.map