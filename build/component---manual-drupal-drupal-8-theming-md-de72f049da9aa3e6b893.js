(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{ltqB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var i=a("/FXl"),n=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Drupal/Drupal-8-Theming.md"}});var l={_frontmatter:r},s=n.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(s,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"drupal-8-theming"},"Drupal 8 Theming"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#drupal-8-theming"}),"Drupal 8 Theming"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#themeinfoyml"}),"THEME.info.yml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#themetheme"}),"THEME.theme")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#templates"}),"Templates")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#themenamelibrariesyml-file"}),"THEMENAME.libraries.yml file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#themenamebreakpointsyml-file"}),"THEMENAME.breakpoints.yml file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#config-directory"}),"config/","*"," directory")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#describing-the-theme-with-an-info-file"}),"Describing the theme with an info file"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#generating-an-info-file"}),"Generating an info file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#editing-the-file"}),"Editing the file")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#twig-cache"}),"Twig Cache")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#regions"}),"Regions"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#confirmation-that-it-is-working"}),"Confirmation that it is working")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#suggestions-added-by-hooks"}),'Suggestions added by "hooks"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#themetheme-proprocessing"}),"THEME.theme proprocessing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#custom-twig-functions"}),"Custom Twig functions"))))),Object(i.b)("h2",{id:"themeinfoyml"},"THEME.info.yml"),Object(i.b)("p",null,"THEMENAME.info.yml file"),Object(i.b)("p",null,"Defines required meta-data for a theme and provides additional optional settings used by Drupal's theme layer."),Object(i.b)("p",null,"This is the only required file for a theme. The name of this file determines the value of THEMENAME."),Object(i.b)("p",null,"Example: themes/icecream/icecream.info.yml"),Object(i.b)("h2",{id:"themetheme"},"THEME.theme"),Object(i.b)("p",null,"THEMENAME.theme file"),Object(i.b)("p",null,"A PHP file that contains conditional logic, and handles preprocessing of variables before they are output via template files."),Object(i.b)("p",null,"Example: themes/icecream/icecream.theme"),Object(i.b)("h2",{id:"templates"},"Templates"),Object(i.b)("p",null,"templates/.html.twig files"),Object(i.b)("p",null,"Twig template files provide HTML markup and very basic presentation logic. Template files in a theme generally follow a specific naming convention and are used to override the default markup output by Drupal. Twig template files are required to be placed within the templates/ sub-directory and may be organized into any number of sub-folders from there."),Object(i.b)("h2",{id:"themenamelibrariesyml-file"},"THEMENAME.libraries.yml file"),Object(i.b)("p",null,"Define CSS and JavaScript libraries that can be loaded by your theme. All CSS and JavaScript should be added to the page via an asset library."),Object(i.b)("p",null,"Example: themes/icecream/icecream.libraries.yml"),Object(i.b)("h2",{id:"themenamebreakpointsyml-file"},"THEMENAME.breakpoints.yml file"),Object(i.b)("p",null,"Defines the responsive design breakpoints used by your theme for Drupal."),Object(i.b)("p",null,"Example: themes/icecream/icecream.breakpoints.yml"),Object(i.b)("h2",{id:"config-directory"},"config/","*"," directory"),Object(i.b)("p",null,"Some themes may contain additional configuration for Drupal. A common example is image styles used by your theme. This optional configuration is located in files within the config/ directory."),Object(i.b)("p",null,"Example: themes/icecream/config/schema/icecream.schema.yml"),Object(i.b)("h2",{id:"describing-the-theme-with-an-info-file"},"Describing the theme with an info file"),Object(i.b)("h3",{id:"generating-an-info-file"},"Generating an info file"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"drupal generate:theme")," will walk you through theme setup."),Object(i.b)("h3",{id:"editing-the-file"},"Editing the file"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{}),"# THEMENAME.info.yml file for Ice Cream example theme.\nname: Ice Cream\ntype: theme\nbase theme: classy\ndescription: 'A great theme for warm summer days.'\npackage: Custom\ncore: 8.x\n")),Object(i.b)("p",null,"For a complete list of keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"name (required) The human readable name of your theme, displayed in Drupal's UI when administrators are browsing the list of available themes"),Object(i.b)("li",{parentName:"ul"},"type (required) Tell Drupal what type of project this is. Required, and will always be set to 'theme' for a Theme."),Object(i.b)("li",{parentName:"ul"},"description A short one-line description used in the UI when listing your theme."),Object(i.b)("li",{parentName:"ul"},"package The package your theme belongs in; used for grouping projects together."),Object(i.b)("li",{parentName:"ul"},"core (required) The version of Drupal core that your theme is compatible with. Required; for Drupal 8 themes this will likely always just be '8.x'."),Object(i.b)("li",{parentName:"ul"},'base theme (default = Stable) The machine name of an installed theme to be used as a base theme. If no base theme is set, then the core base theme "Stable" will be used. Classy is the other base theme alternative provided in core. If no base theme should be used, enter "false" as a value for this key.')),Object(i.b)("p",null,"See more ",Object(i.b)("a",o({parentName:"p"},{href:"https://www.drupal.org/node/2349827"}),"here")),Object(i.b)("h2",{id:"twig-cache"},"Twig Cache"),Object(i.b)("p",null,"Ensure you disable the cache to enable updates on reloads/save changes."),Object(i.b)("h2",{id:"regions"},"Regions"),Object(i.b)("p",null,"Regions are areas of a page into which content can be placed. Content is assigned to regions via blocks. If you think of blocks as the base elements that can be used to compose a page, then regions provide the containers within the page where an administrator can place blocks. Regions give your site layout, and your markup its structure."),Object(i.b)("p",null,"Regions are defined by themes. Since the theme ultimately controls the layout of a page, it must also specify the set of regions that an administrator is allowed to place content into, and how those regions are represented in the HTML markup of the page. A header region might be rendered as an HTML ",Object(i.b)("inlineCode",{parentName:"p"},"<header>")," and a left sidebar might be an ",Object(i.b)("inlineCode",{parentName:"p"},"<aside>")," or a ",Object(i.b)("inlineCode",{parentName:"p"},"<div>")," depending on the requirements of the theme."),Object(i.b)("h3",{id:"confirmation-that-it-is-working"},"Confirmation that it is working"),Object(i.b)("p",null,"Navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Structure > Block")," layout (admin/structure/block) to confirm that Drupal is now using your regions. Region names shown in block layout UI."),Object(i.b)("p",null,"If we now edit ",Object(i.b)("inlineCode",{parentName:"p"},"page.html.twig"),"..."),Object(i.b)("p",null,"Displaying regions in your page.html.twig template."),Object(i.b)("p",null,"If you haven't already, you'll need to override the default page.html.twig file since we'll be modifying it. Learn more about overriding template files."),Object(i.b)("p",null,"Adding the metadata to your THEMENAME.info.yml file above has automatically introduced new variables that you can access in your page.html.twig template. These contain the content of whatever blocks have been placed into each region. The names correspond with the array keys you used in your THEMENAME.info.yml file."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"content: 'Content'")," corresponds with ",Object(i.b)("inlineCode",{parentName:"p"},"{{ page.content }}")," and ",Object(i.b)("inlineCode",{parentName:"p"},"sidebar_first: 'Sidebar first'")," corresponds with ",Object(i.b)("inlineCode",{parentName:"p"},"{{ page.sidebar_first }}")),Object(i.b)("p",null,"Now, just adjust the markup in your page.html.twig template to accommodate your new regions."),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{}),'<div class="layout-content">{{ page.content }}</div>\n')),Object(i.b)("p",null,"Tip: When printing regions in your template that are not guaranteed to have content, it's a good idea to wrap them in some conditional logic. This way you won't end up with empty container elements in your output. This is a key part of creating responsive themes."),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{}),'{% if page.sidebar_first %}\n  <aside class="layout-sidebar-first" role="complementary">\n    {{ page.sidebar_first }}\n  </aside>\n{% endif %}\n')),Object(i.b)("h2",{id:"suggestions-added-by-hooks"},'Suggestions added by "hooks"'),Object(i.b)("p",null,"Theme hook suggestions are provided by one of three hooks. Both modules and themes can add or remove suggestions from the list."),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{}),"hook_theme_suggestions_HOOK(array $variables)\nhook_theme_suggestions_alter(array &$suggestions, array $variables, $hook)\nhook_theme_suggestions_HOOK_alter(array &$suggestions, array $variables)\n")),Object(i.b)("p",null,"For example, if you wanted to use a different template to display nodes for users who are logged in to your site you might add a theme hook suggestion via your theme that makes it so the template node--authenticated.html.twig is added to the list, and thus used, for all logged in users."),Object(i.b)("h2",{id:"themetheme-proprocessing"},"THEME.theme proprocessing"),Object(i.b)("p",null,"Preprocess functions allow Drupal themes to manipulate the variables that are used in Twig template files by using PHP functions to preprocess data before it is exposed to each template. All of the dynamic content available to theme developers within a Twig template file is exposed through a preprocess function. Understanding how preprocess functions work, and the role they play, is important for both module developers and theme developers."),Object(i.b)("p",null,"Some examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"template_preprocess(&$variables, $hook): Creates a default set of variables for all theme hooks with template implementations. Provided by Drupal Core."),Object(i.b)("li",{parentName:"ul"},"template_preprocess_HOOK(&$variables): Should be implemented by the module that registers the theme hook, to set up default variables."),Object(i.b)("li",{parentName:"ul"},"MODULE_preprocess(&$variables, $hook): hook_preprocess() is invoked on all implementing modules."),Object(i.b)("li",{parentName:"ul"},"MODULE_preprocess_HOOK(&$variables): hook_preprocess_HOOK() is invoked on all implementing modules, so that modules that didn't define the theme hook can alter the variables."),Object(i.b)("li",{parentName:"ul"},"ENGINE_engine_preprocess(&$variables, $hook): Allows the theme engine to set necessary variables for all theme hooks with template implementations."),Object(i.b)("li",{parentName:"ul"},"ENGINE_engine_preprocess_HOOK(&$variables): Allows the theme engine to set necessary variables for the particular theme hook."),Object(i.b)("li",{parentName:"ul"},"THEME_preprocess(&$variables, $hook): Allows the theme to set necessary variables for all theme hooks with template implementations."),Object(i.b)("li",{parentName:"ul"},"THEME_preprocess_HOOK(&$variables): Allows the theme to set necessary variables specific to the particular theme hook.")),Object(i.b)("h2",{id:"custom-twig-functions"},"Custom Twig functions"),Object(i.b)("p",null,"If you want to look up Drupal-specific Twig functions on api.drupal.org, you will need to search for the corresponding PHP callable. You can find the corresponding method in ",Object(i.b)("inlineCode",{parentName:"p"},"core/lib/Drupal/Core/Template/TwigExtension.php")," inside the method: public function getFunctions()."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Drupal/Drupal-8-Theming.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-drupal-drupal-8-theming-md-de72f049da9aa3e6b893.js.map