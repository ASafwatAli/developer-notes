(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{O5DT:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var s=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/CSS/RSCSS-Code-Guide.md"}});var i={_frontmatter:l},c=a.a;function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(s.b)(c,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"rscss-cheat-sheet"},"RSCSS CHEAT SHEET"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-cheat-sheet"}),"RSCSS CHEAT SHEET"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-1-naming-components"}),"RSCSS-1: Naming Components")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-2-naming-elements"}),"RSCSS-2: Naming Elements")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-3-element-selectors"}),"RSCSS-3: Element Selectors")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-4-multiple-words"}),"RSCSS-4: Multiple Words")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-5-avoid-tag-selectors"}),"RSCSS-5: Avoid Tag Selectors")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-6-variants"}),"RSCSS-6: Variants")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-7-naming-variants"}),"RSCSS-7: Naming Variants")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-8-element-variants"}),"RSCSS-8: Element Variants")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-9-nested-components"}),"RSCSS-9: Nested Components")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-10-simplifying-nested-components"}),"RSCSS-10: Simplifying Nested Components")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-11-layouts"}),"RSCSS-11: Layouts")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-12-avoid-positioning-properties"}),"RSCSS-12: Avoid positioning properties")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-13-fixed-dimensions"}),"RSCSS-13: Fixed Dimensions")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-14-define-position-in-parents"}),"RSCSS-14: Define Position in Parents")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-15-helpers"}),"RSCSS-15: Helpers")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-16-naming-helpers"}),"RSCSS-16: Naming Helpers")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-17-organising-helpers"}),"RSCSS-17: Organising Helpers")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-18-css-structure"}),"RSCSS-18: CSS Structure")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-19-one-component-per-file"}),"RSCSS-19: One Component Per File")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-20-avoid-overnesting"}),"RSCSS-20: Avoid Overnesting")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-21-pitfalls"}),"RSCSS-21: Pitfalls")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-22-bleeding-through-nested-components"}),"RSCSS-22: Bleeding Through Nested Components")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",r({parentName:"li"},{href:"#rscss-23-apprehensions"}),"RSCSS-23: Apprehensions"))))),Object(s.b)("h2",{id:"rscss-1-naming-components"},"RSCSS-1: Naming Components"),Object(s.b)("p",null,"Components will be named with at least two words, separated by a dash. Examples of components:"),Object(s.b)("p",null,"A like button (.like-button)\nA search form (.search-form)\nA news article card (.article-card)"),Object(s.b)("h2",{id:"rscss-2-naming-elements"},"RSCSS-2: Naming Elements"),Object(s.b)("p",null,"Each component may have elements. They should have classes that are only one word."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".search-form {\n    > .field {\n        /* ... */\n    }\n    > .action {\n        /* ... */\n    }\n}\n")),Object(s.b)("h2",{id:"rscss-3-element-selectors"},"RSCSS-3: Element Selectors"),Object(s.b)("p",null,"Prefer to use the > child selector whenever possible. This prevents bleeding through nested components, and performs better than descendant selectors."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".article-card {\n    .title {\n        /* okay */\n    }\n    > .author {\n        /* ✓ better */\n    }\n}\n")),Object(s.b)("h2",{id:"rscss-4-multiple-words"},"RSCSS-4: Multiple Words"),Object(s.b)("p",null,"For those that need two or more words, concatenate them without dashes or underscores."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".profile-box {\n    > .firstname {\n        /* ... */\n    }\n    > .lastname {\n        /* ... */\n    }\n    > .avatar {\n        /* ... */\n    }\n}\n")),Object(s.b)("h2",{id:"rscss-5-avoid-tag-selectors"},"RSCSS-5: Avoid Tag Selectors"),Object(s.b)("p",null,"Use classnames whenever possible. Tag selectors are fine, but they may come at a small performance penalty and may not be as descriptive."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".article-card {\n    > h3 {\n        /* ✗ avoid */\n    }\n    > .name {\n        /* ✓ better */\n    }\n}\n")),Object(s.b)("h2",{id:"rscss-6-variants"},"RSCSS-6: Variants"),Object(s.b)("p",null,"Components may have variants. Elements may have variants, too."),Object(s.b)("p",null,"eg."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".search-form\n.search-form .-prefixed\n.search-form .-compact\n")),Object(s.b)("h2",{id:"rscss-7-naming-variants"},"RSCSS-7: Naming Variants"),Object(s.b)("p",null,"Classnames for variants will be prefixed by a dash (-)."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{}),".like-button {\n  &.-wide { /* ... */ }\n  &.-short { /* ... */ }\n  &.-disabled { /* ... */ }\n}\n")),Object(s.b)("h2",{id:"rscss-8-element-variants"},"RSCSS-8: Element Variants"),Object(s.b)("p",null,"Elements may also have variants."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".shopping-card {\n    > .title {\n        /* ... */\n    }\n    > .title.-small {\n        /* ... */\n    }\n}\n")),Object(s.b)("p",null,"Dash prefixes"),Object(s.b)("p",null,"Dashes are the preferred prefix for variants."),Object(s.b)("p",null,"It prevents ambiguity with elements.\nA CSS class can only start with a letter, ","_"," or -.\nDashes are easier to type than underscores.\nIt kind of resembles switches in UNIX commands (gcc -O2 -Wall -emit-last)."),Object(s.b)("h2",{id:"rscss-9-nested-components"},"RSCSS-9: Nested Components"),Object(s.b)("p",null,"Sometimes it's necessary to nest components. Here are some guidelines for doing that."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-html"}),"<div class='article-link'>\n  <div class='vote-box'>\n    ...\n  </div>\n  <h3 class='title'>...</h3>\n  <p class='meta'>...</p>\n</div>\n")),Object(s.b)("p",null,"A component may need to appear a certain way when nested in another component. Avoid modifying the nested component by reaching into it from the containing component."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".article-header {\n    > .vote-box > .up {\n        /* ✗ avoid this */\n    }\n}\n")),Object(s.b)("p",null,"Instead, prefer to add a variant to the nested component and apply it from the containing component."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-html"}),"<div class='article-header'>\n  <div class='vote-box -highlight'>\n    ...\n  </div>\n  ...\n</div>\n")),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".vote-box {\n    &.-highlight > .up {\n        /* ... */\n    }\n}\n")),Object(s.b)("h2",{id:"rscss-10-simplifying-nested-components"},"RSCSS-10: Simplifying Nested Components"),Object(s.b)("p",null,"Sometimes, when nesting components, your markup can get dirty:"),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-html"}),"<div class='search-form'>\n  <input class='input' type='text'>\n  <button class='search-button -red -large'></button>\n</div>\nYou can simplify this by using your CSS preprocessor's @extend mechanism:\n\n<div class='search-form'>\n  <input class='input' type='text'>\n  <button class='submit'></button>\n</div>\n")),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".search-form {\n    > .submit {\n        @extend .search-button;\n        @extend .search-button.-red;\n        @extend .search-button.-large;\n    }\n}\n")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"rscss-11-layouts"},"RSCSS-11: Layouts"),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-html"}),'<div class="recipe-item">\n    <div class="recipe-list">\n    </div>\n</div>\n')),Object(s.b)("h2",{id:"rscss-12-avoid-positioning-properties"},"RSCSS-12: Avoid positioning properties"),Object(s.b)("p",null,"Components should be made in a way that they're reusable in different contexts. Avoid putting these properties in components:"),Object(s.b)("p",null,"Positioning (position, top, left, right, bottom)\nFloats (float, clear)\nMargins (margin)\nDimensions (width, height) ","*"),Object(s.b)("h2",{id:"rscss-13-fixed-dimensions"},"RSCSS-13: Fixed Dimensions"),Object(s.b)("p",null,"Exception to these would be elements that have fixed width/heights, such as avatars and logos."),Object(s.b)("h2",{id:"rscss-14-define-position-in-parents"},"RSCSS-14: Define Position in Parents"),Object(s.b)("p",null,"If you need to define these, try to define them in whatever context they will be in. In this example below, notice that the widths and floats are applied on the list component, not the component itself."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".article-list {\n    & {\n        @include clearfix;\n    }\n\n    > .article-card {\n        width: 33.3%;\n        float: left;\n    }\n}\n\n.article-card {\n    & {\n        /* ... */\n    }\n    > .image {\n        /* ... */\n    }\n    > .title {\n        /* ... */\n    }\n    > .category {\n        /* ... */\n    }\n}\n")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"rscss-15-helpers"},"RSCSS-15: Helpers"),Object(s.b)("p",null,"For general-purpose classes meant to override values, put them in a separate file and name them beginning with an underscore. They are typically things that are tagged with !important. Use them very sparingly."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),"._unmargin {\n    margin: 0 !important;\n}\n._center {\n    text-align: center !important;\n}\n._pull-left {\n    float: left !important;\n}\n._pull-right {\n    float: right !important;\n}\n")),Object(s.b)("h2",{id:"rscss-16-naming-helpers"},"RSCSS-16: Naming Helpers"),Object(s.b)("p",null,"Prefix classnames with an underscore. This will make it easy to differentiate them from modifiers defined in the component. Underscores also look a bit ugly which is an intentional side effect: using too many helpers should be discouraged."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-html"}),"<div class='order-graphs -slim _unmargin'>\n</div>\n")),Object(s.b)("h2",{id:"rscss-17-organising-helpers"},"RSCSS-17: Organising Helpers"),Object(s.b)("p",null,"Place all helpers in one file called helpers. While you can separate them into multiple files, it's very preferrable to keep your number of helpers to a minimum."),Object(s.b)("hr",null),Object(s.b)("h2",{id:"rscss-18-css-structure"},"RSCSS-18: CSS Structure"),Object(s.b)("h2",{id:"rscss-19-one-component-per-file"},"RSCSS-19: One Component Per File"),Object(s.b)("p",null,"For each component, place them in their own file."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),"/* css/components/search-form.scss */\n.search-form {\n    > .button {\n        /* ... */\n    }\n    > .field {\n        /* ... */\n    }\n    > .label {\n        /* ... */\n    }\n\n    // variants\n    &.-small {\n        /* ... */\n    }\n    &.-wide {\n        /* ... */\n    }\n}\n")),Object(s.b)("p",null,"Use glob matching"),Object(s.b)("p",null,"In sass-rails and stylus, this makes including all of them easy:"),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),"@import 'components/*';\n")),Object(s.b)("h2",{id:"rscss-20-avoid-overnesting"},"RSCSS-20: Avoid Overnesting"),Object(s.b)("p",null,"Use no more than 1 level of nesting. It's easy to get lost with too much nesting."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),"/* ✗ Avoid: 3 levels of nesting */\n.image-frame {\n    > .description {\n        /* ... */\n\n        > .icon {\n            /* ... */\n        }\n    }\n}\n\n/* ✓ Better: 2 levels */\n.image-frame {\n    > .description {\n        /* ... */\n    }\n    > .description > .icon {\n        /* ... */\n    }\n}\n")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"rscss-21-pitfalls"},"RSCSS-21: Pitfalls"),Object(s.b)("h2",{id:"rscss-22-bleeding-through-nested-components"},"RSCSS-22: Bleeding Through Nested Components"),Object(s.b)("p",null,"Be careful about nested components with elements sharing the same name as elements in its container."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-html"}),"<article class='article-link'>\n <div class='vote-box'>\n    <button class='up'></button>\n    <button class='down'></button>\n    <span class='count'>4</span>\n  </div>\n\n  <h3 class='title'>Article title</h3>\n  <p class='count'>3 votes</p>\n</article>\n")),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".article-link {\n    > .title {\n        /* ... */\n    }\n    > .count {\n        /* ... (!!!) */\n    }\n}\n\n.vote-box {\n    > .up {\n        /* ... */\n    }\n    > .down {\n        /* ... */\n    }\n    > .count {\n        /* ... */\n    }\n}\n")),Object(s.b)("p",null,"In this case, if .article-link > .count did not have the > (child) selector, it will also apply to the .vote-box .count element. This is one of the reasons why child selectors are preferred."),Object(s.b)("hr",null),Object(s.b)("h2",{id:"rscss-23-apprehensions"},"RSCSS-23: Apprehensions"),Object(s.b)("p",null,"Some people may have apprehensions to these conventions, such as:"),Object(s.b)("p",null,'"But dashes suck"'),Object(s.b)("p",null,"You're free to omit them and just use regular words, but keep the rest of the ideas in place (components, elements, variants)."),Object(s.b)("p",null,'"But I can\'t think of 2 words!"'),Object(s.b)("p",null,"Some components will only need one word to express their purpose, such as alert. In these cases, consider that using some suffixes will make it clearer that it's a block-level element:"),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-css"}),".alert-box.alert-card .alert-block Or for inlines: .link-button .link-span;\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/RSCSS-Code-Guide.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-css-rscss-code-guide-md-6b92b105267c49c6fed4.js.map