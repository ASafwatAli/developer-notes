(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{qXcI:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),l=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Smartling/Smartling-CLI.md"}});var o={_frontmatter:i},c=l.a;function b(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,["components"]);return Object(a.b)(c,r({},o,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"smartling-cli"},"Smartling CLI"),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Action"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"smartling-cli files pull --locale=en-AU"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Pull AU locale translations")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"smartling-cli files push path/to/original/translations.yml"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Push file to be translated")))),Object(a.b)("h2",{id:"pull-command"},"Pull Command"),Object(a.b)("p",null,"The result of the files pulled is that they will written to the folders dictated by the push directory."),Object(a.b)("p",null,"Output file depends purely on the ",Object(a.b)("inlineCode",{parentName:"p"},"smartling.yml")," output:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yml"}),"# (optional) Additional file-specific settings for push and pull commands.\nfiles:\n  # (optional) Special default section will apply configuration to all file\n  # types except files, which URIs match following rules.\n  default:\n    # (optional) Defines pull-specific options.\n    pull:\n      # (optional) Format, which will be used to format file name.\n      #\n      # If not set, then default format will be used or format,\n      # that is set via command line options.\n      format: '{{name .FileURI}}{{with .Locale}}_{{.}}{{end}}{{ext .FileURI}}'\n")),Object(a.b)("p",null,"You can also pass format as a flag ",Object(a.b)("inlineCode",{parentName:"p"},"--format")," but note that there can be issues if regulations are not followed from ",Object(a.b)("a",r({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),"the Golang documentation"),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Smartling/Smartling-CLI.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-smartling-smartling-cli-md-1f0fef9dbedfeb202f98.js.map