(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{qG37:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Charges-Vs-Payment-Intent.md"}});var i={_frontmatter:s},c=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"charges-vs-payment-intents"},"Charges vs Payment Intents"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://stripe.com/docs/payments/payment-intents/migration/charges"}),"Stripe Documentation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://stripe.com/docs/payments/setup-intents"}),"Setup Intents"))),Object(a.b)("h2",{id:"how-it-works"},"How it works"),Object(a.b)("p",null,"There are three ways to accept payments on Stripe today:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Stripe Checkout"),Object(a.b)("li",{parentName:"ol"},"Charges API"),Object(a.b)("li",{parentName:"ol"},"Payment Intents API")),Object(a.b)("h2",{id:"stripe-checkout"},"Stripe Checkout"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A prebuilt payment page that you can redirect your customer to for simple purchases and subscriptions. It provides many features, such as Apple Pay, Google Pay, internationalization, and form validation.")),Object(a.b)("h2",{id:"charges-vs-payment-intents-1"},"Charges vs Payment Intents"),Object(a.b)("p",null,"The Charges and Payment Intents APIs let you build custom payment flows and experiences."),Object(a.b)("p",null,"We designed the Payment Intents API to be the unifying API for all Stripe products and payment methods. While we are not deprecating Charges, we plan to focus product development on Payment Intents to make it the foundational Stripe API."),Object(a.b)("h2",{id:"setup-intents"},"Setup Intents"),Object(a.b)("p",null,"Use the Setup Intents API to set up a payment method for future payments. Similar to a payment, but no charge is created."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The goal is to have payment credentials saved and optimized for future payments, meaning the payment method is configured correctly for any scenario. When setting up a card, for example, it may be necessary to authenticate the customer or check the card’s validity with the customer’s bank. Stripe updates the SetupIntent object throughout that process.")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Charges-Vs-Payment-Intent.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-charges-vs-payment-intent-md-8e80cdcfc26876e9fbb1.js.map