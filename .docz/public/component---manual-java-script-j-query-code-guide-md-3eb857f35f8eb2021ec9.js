(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{"4OOC":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/jQuery-Code-Guide.md"}});var s={_frontmatter:r},o=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(o,l({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"jquery-cheat-sheet"},"jQuery Cheat Sheet"),Object(a.b)("h2",{id:"jq-1-core"},"JQ-1: Core"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"//jQuery function\n\n$.jQuery( selector [, context] | element | elementArray | jQueryObject ), .jQuery( )\n$.jQuery( html [, owner]  | html, props )\n$.jQuery( fn )\ndef.when(deferreds)\nfnjQuery.sub( )\n$.holdReady( hold )\n\n// jQuery Object Accessors\n\n$.each( fn(index, element) )\nnum.size( ), .length\nstr.selector\nel.context\n$.eq( index )\njQuery.error( str )\n[el],el.get( [index] )\nnum.index( ), .index( selector | element )\n$jQuery.pushStack( elements, [name, args] )\narr.toArray( )\n\n//Interoperability\n\n$jQuery.noConflict( [extreme] )\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"jq-2-jquery-attributes"},"JQ-2: jQuery Attributes"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// Attributes\n\nstr.attr( name | name , value )\n$.attr( name, val | map | name, fn(index, attr) )\n$.removeAttr( name )\n$.prop( name )\n$.removeProp( name )\n\n// Class\n$.addClass( class | fn(index, class) )\nbool.hasClass( class )\n$.removeClass( [class] | fn(index, class) )\n$.toggleClass( class [, switch] | fn(index, class) [, switch] )\n\n// HTML, text\nstr.html( )\n$.html( val | fn(index, html) )\nstr.text( )\n$.text( val | fn(index, html) )\n\n// Value\nstr,arr.val( )\n$.val( val | fn() )\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"jq-3-jquery-selectors"},"JQ-3: jQuery Selectors"),Object(a.b)("h4",{id:"jq-4-basics"},"JQ-4: Basics"),Object(a.b)("p",null,"#","id\nelement\n.class, .class.class"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"selector1, selector2\nHierarchy\nancestor descendant\nparent > child\nprev + next\nprev ~ siblings")),Object(a.b)("h4",{id:"jq-5-basic-filters"},"JQ-5: Basic Filters"),Object(a.b)("p",null,":first\n:last\n:not(selector)\n:even\n:odd\n:eq(index)\n:gt(index)\n:lt(index)\n:header\n:animated\n:focus"),Object(a.b)("h4",{id:"jq-6-content-filters"},"JQ-6: Content Filters"),Object(a.b)("p",null,":contains(text)\n:empty\n:has(selector)\n:parent"),Object(a.b)("h4",{id:"jq-7-visibility-filters"},"JQ-7: Visibility Filters"),Object(a.b)("p",null,":hidden\n:visible"),Object(a.b)("h4",{id:"jq-8-child-filters"},"JQ-8: Child Filters"),Object(a.b)("p",null,":nth-child(expr)\n:first-child\n:last-child\n:only-child"),Object(a.b)("h4",{id:"jq-9-attribute-filters"},"JQ-9: Attribute Filters"),Object(a.b)("p",null,"[attribute][attribute=value]","\n","[attribute!=value][attribute^=value]","\n","[attribute$=value][attribute*=value]","\n","[attribute|=value][attribute~=value]","\n","[attribute][attribute2]"),Object(a.b)("h4",{id:"jq-10-forms"},"JQ-10: Forms"),Object(a.b)("p",null,":input\n:text\n:password\n:radio\n:checkbox\n:submit\n:image\n:reset\n:button\n:file"),Object(a.b)("h4",{id:"jq-11-form-filters"},"JQ-11: Form Filters"),Object(a.b)("p",null,":enabled\n:disabled\n:checked\n:selected"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"jq-12-jquery-traversing"},"JQ-12: jQuery Traversing"),Object(a.b)("h4",{id:"jq-13-filtering"},"JQ-13: Filtering"),Object(a.b)("p",null,"$.eq( index )\n$.first( )\n$.last( )\n$.has( selector ), .has( element )\n$.filter( selector ), .filter( fn(index) )\nbool.is( selector | function(index) | jQuery object | element )1.7*\n$.map( fn(index, element) )\n$.not( selector ), .not( elements ), .not( fn( index ) )\n$.slice( start ","[, end]"," )"),Object(a.b)("h4",{id:"jq-14-tree-traversal"},"JQ-14: Tree traversal"),Object(a.b)("p",null,"$.children( ","[selector]"," )\n$.closest( selector ","[, context]"," | jQuery object | element )\narr.closest( selectors ","[, context]"," )removed\n$.find( selector | jQuery object | element )\n$.next( ","[selector]"," )\n$.nextAll( ","[selector]"," )\n$.nextUntil( ","[selector]"," )\n$.offsetParent( )\n$.parent( ","[selector]"," )\n$.parents( ","[selector]"," )\n$.parentsUntil( ","[selector]"," )\n$.prev( ","[selector]"," )\n$.prevAll( ","[selector]"," )\n$.prevUntil( ","[selector]"," )\n$.siblings( ","[selector]"," )"),Object(a.b)("h4",{id:"jq-15-miscellaneous"},"JQ-15: Miscellaneous"),Object(a.b)("p",null,"$.add( selector ","[, context]"," | elements | html )\n$.andSelf( )\n$.contents( )\n$.end( )"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"jq-16-jquery-ajax"},"JQ-16: jQuery Ajax"),Object(a.b)("p",null,"// GET BACK AND DO THIS!"),Object(a.b)("h2",{id:"jq-17-jquery-css"},"JQ-17: jQuery CSS"),Object(a.b)("h4",{id:"jq-18-css"},"JQ-18: CSS"),Object(a.b)("p",null,"str.css( name )\n$.css( name, val | map | name, fn(index, val) )"),Object(a.b)("h4",{id:"jq-19-positioning"},"JQ-19: Positioning"),Object(a.b)("p",null,"obj.offset( )"),Object(a.b)("p",null,"$.offset( coord | fn( index, coord ) )\n$.offsetParent( )"),Object(a.b)("p",null,"obj.position( )"),Object(a.b)("p",null,"int.scrollTop( )\n$.scrollTop( val )"),Object(a.b)("p",null,"int.scrollLeft( )\n$.scrollLeft( val )"),Object(a.b)("h4",{id:"jq-20-height-and-width"},"JQ-20: Height and Width"),Object(a.b)("p",null,"int.height( )\n$.height( val | fn(index, height ) )"),Object(a.b)("p",null,"int.width( )\n$.width( val | fn(index, height ) )"),Object(a.b)("p",null,"int.innerHeight( )\nint.innerWidth( )"),Object(a.b)("p",null,"int.outerHeight( ","[includeMargin]"," )\n$.outerHeight( val | fn(index, outerHeight ) ) 1.8+"),Object(a.b)("p",null,"int.outerWidth( ","[includeMargin]"," )\n$.outerWidth( val | fn(index, outerWidth ) ) 1.8+"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"jq-21-jquery-manipulation"},"JQ-21: jQuery Manipulation"),Object(a.b)("h4",{id:"jq-22-inserting-inside"},"JQ-22: Inserting Inside"),Object(a.b)("p",null,"$.append( content | fn( index, html ) )\n$.appendTo( target )\n$.prepend( content | fn( index, html ) )\n$.prependTo( target )"),Object(a.b)("h4",{id:"jq-23-inserting-outside"},"JQ-23: Inserting Outside"),Object(a.b)("p",null,"$.after( content | fn() )\n$.before( content | fn() )\n$.insertAfter( target )\n$.insertBefore( target )"),Object(a.b)("h4",{id:"jq-24-inserting-around"},"JQ-24: Inserting Around"),Object(a.b)("p",null,"$.unwrap( )\n$.wrap( wrappingElement | fn )\n$.wrapAll( wrappingElement | fn )\n$.wrapInner( wrappingElement | fn )"),Object(a.b)("h4",{id:"jq-25-replacing"},"JQ-25: Replacing"),Object(a.b)("p",null,"$.replaceWith( content | fn )\n$.replaceAll( selector )"),Object(a.b)("h4",{id:"jq-26-removing"},"JQ-26: Removing"),Object(a.b)("p",null,"$.detach( ","[selector]"," )\n$.empty( )\n$.remove( ","[selector]"," )"),Object(a.b)("h4",{id:"jq-27-copying"},"JQ-27: Copying"),Object(a.b)("p",null,"$.clone( ","[withDataAndEvents]",", ","[deepWithDataAndEvents]"," )"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"jq-28-jquery-events"},"JQ-28: jQuery Events"),Object(a.b)("h4",{id:"jq-29-events"},"JQ-29: Events"),Object(a.b)("h4",{id:"jq-30-page-load"},"JQ-30: Page Load"),Object(a.b)("p",null,"$.ready( fn() )"),Object(a.b)("h4",{id:"jq-31-event-handling"},"JQ-31: Event Handling"),Object(a.b)("p",null,"$.on( events ","[, selector][, data]",", handler )1.7+\n$.on( events-map ","[, selector][, data]"," )1.7+\n$.off( events ","[, selector][, handler]"," )1.7+\n$.off( events-map ","[, selector]"," )1.7+\n$.bind( type ","[, data ]",", fn(eventObj) )\n$.bind( type ","[, data]",", false )\n$.bind( array )\n$.unbind( ","[type][, fn]",")\n$.one( type ","[, data ]",", fn(eventObj) )\n$.trigger( event ","[, data]",")\nobj.triggerHandler( event ","[, data]",")\n$.delegate( selector, type, ","[data]",", handler)\n$.undelegate( [selector, type, ","[handler]","]) | selector, events | namespace )"),Object(a.b)("h4",{id:"jq-32-live-events"},"JQ-32: Live Events"),Object(a.b)("p",null,"$.live( eventType ","[, data]",", fn() )\n$.die( ), .die( ","[eventType][, fn() ]",")"),Object(a.b)("h4",{id:"jq-33-interaction-helpers"},"JQ-33: Interaction Helpers"),Object(a.b)("p",null,"$.hover( fnIn(eventObj), fnOut(eventObj))\n$.toggle( fn(eventObj), fn2(eventObj) ","[, ...]",")"),Object(a.b)("h4",{id:"jq-34-event-helpers"},"JQ-34: Event Helpers"),Object(a.b)("p",null,"function ( ","[data,][fn]"," )\n$.blur,\n.mousedown,\n.change,\n.mouseenter,\n.click,\n.mouseleave,\n.dblclick,\n.mousemove,\n.error,\n.mouseout,\n.focus,\n.mouseover,\n.focusin,\n.mouseup,\n.focusout,\n.resize,\n.keydown,\n.scroll,\n.keypress,\n.select,\n.keyup,\n.submit,\n.load( ","[data,]"," fn ),\n.unload( ","[data,]"," fn )"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"jq-35-jquery-effects"},"JQ-35: jQuery Effects"),Object(a.b)("h4",{id:"jq-36-effect-basics"},"JQ-36: Effect Basics"),Object(a.b)("p",null,"$.show( [ duration ","[, easing][, fn]"," ]  )\n$.hide( [ duration ","[, easing][, fn]"," ]  )\n$.toggle( ","[showOrHide]"," )\n$.toggle( duration ","[, easing][, fn]"," )"),Object(a.b)("h4",{id:"jq-37-sliding"},"JQ-37: Sliding"),Object(a.b)("p",null,"$.slideDown( duration ","[, easing][, fn]"," )\n$.slideUp( duration ","[, easing][, fn]"," )\n$.slideToggle( ","[duration][, easing]"," ","[, fn]"," )"),Object(a.b)("h4",{id:"jq-38-fading"},"JQ-38: Fading"),Object(a.b)("p",null,"$.fadeIn( duration ","[, easing][, fn]"," )\n$.fadeOut( duration ","[, easing][, fn]"," )\n$.fadeTo( ","[duration,]"," opacity ","[, easing][, fn]"," )\n$.fadeToggle( ","[duration,][, easing]"," ","[, fn]"," )"),Object(a.b)("h4",{id:"jq-39-custom"},"JQ-39: Custom"),Object(a.b)("p",null,"$.animate( params ","[, duration][, easing]"," ","[, fn]"," )\n$.animate( params, options )\n$.stop( ","[queue][, clearQueue]"," ","[, jumpToEnd]"," )1.7*\n$.delay( duration ","[, queueName]"," )"),Object(a.b)("hr",null),Object(a.b)("h1",{id:"jq-40-jquery-faq"},"JQ-40: jQuery FAQ"),Object(a.b)("h3",{id:"jq-41-example---how-to-target-something-within-an-anchor-tag"},"JQ-41: Example - How to target something within an anchor tag"),Object(a.b)("p",null,"In the bottom example from NPWS YAC, we are targeting a div within an anchor tag that will allow us to open a map. That being said, we do not want the anchor tag to activate in this example, so we use the ",Object(a.b)("inlineCode",{parentName:"p"},"e.target")," capability to find whether or not we are targeting what we want, and if not - we ensure the href doesn't activate."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"$('.hero .toggle').on('click', function (e) {\n            if ($(e.target).hasClass('geolocation')) {\n                console.log('here');\n                map.$elem.toggleClass('-active').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {\n                    if (!map.map) {\n                        map.initMap();\n                    }\n                });\n\n                if ($('html').hasClass('ie9') || $('html').hasClass('lt-ie9')) {\n                    if (!map.map) {\n                        map.initMap();\n                    }\n                }\n\n                if (map.$elem.hasClass('-active')) {\n                    map.$toggle.text('Close the map');\n                } else {\n                    map.$toggle.text('View the ' + map.title + ' map');\n                }\n\n                return false;\n            } else {\n                e.preventDefault();\n                $(this).parent().toggleClass('-active');\n            }\n        });\n")),Object(a.b)("h3",{id:"jq-42-wait-for-a-transition-to-finish"},"JQ-42: Wait for a transition to finish"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"/* =================================\n  Load JavaScript after Transition\n==================================== */\n\nmap.$elem.toggleClass('-active').one(\"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd\", function () {\n    if (!map.map) {\n        map.initMap();\n    }\n});\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/jQuery-Code-Guide.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-j-query-code-guide-md-3eb857f35f8eb2021ec9.js.map