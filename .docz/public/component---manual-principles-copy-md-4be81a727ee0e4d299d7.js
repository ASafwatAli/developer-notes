(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{ns2H:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Principles/Copy.md"}});var s={_frontmatter:r},l=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(l,i({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"copy-json-naming-conventions"},"Copy JSON naming conventions"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Image structure",src:"https://res.cloudinary.com/gitgoodclub/image/upload/w_1228,h_2012/copy-structure.png"})),Object(a.b)("h2",{id:"notes-on-the-schematic-design"},"Notes on the schematic design"),Object(a.b)("p",null,"The aim for this is the have consistent, repeatable rules for naming variables that are use for data."),Object(a.b)("p",null,"An example use case for this structure is to be able to take a ",Object(a.b)("inlineCode",{parentName:"p"},"copy.json")," file and convert it in a CMS schema for something like DatoCMS quickly and reliably."),Object(a.b)("p",null,"The import notes on this at the moment is that the ",Object(a.b)("inlineCode",{parentName:"p"},"maps")," and ",Object(a.b)("inlineCode",{parentName:"p"},"copy")," type definitions are currently subjective."),Object(a.b)("p",null,"My current thought would be that the ",Object(a.b)("inlineCode",{parentName:"p"},"copy")," variable names such as ",Object(a.b)("inlineCode",{parentName:"p"},"title"),", ",Object(a.b)("inlineCode",{parentName:"p"},"subtitle")," etc should follow English literature structure, although I currently do not have a good grasp on whether or not I am missing a lot of depth of the use cases are not the best for the name I have given it. This is arguably the most flexible area since you will have things to name such as form titles etc. These are more just consistent guidelines for the main parts we define on components/sections/pages."),Object(a.b)("p",null,"In the case of ",Object(a.b)("inlineCode",{parentName:"p"},"maps"),", the issue is that I am going off the DatoCMS schema for the others but I have not confirmed if the DatoCMS schema for maps is using ",Object(a.b)("inlineCode",{parentName:"p"},"lat")," and ",Object(a.b)("inlineCode",{parentName:"p"},"lon")," as seperate strings or if they are part of a greater object."),Object(a.b)("p",null,"Obviously there will be more use cases down the track that need to be defined, but being able to keep it consistent with ",Object(a.b)("inlineCode",{parentName:"p"},"type definitions")," as best as possible will mean that we can implement these types into other languages as ",Object(a.b)("inlineCode",{parentName:"p"},"typedefs"),", ",Object(a.b)("inlineCode",{parentName:"p"},"interfaces")," and ",Object(a.b)("inlineCode",{parentName:"p"},"protocols"),"."),Object(a.b)("p",null,"Other problems that may arise is when copy schematics do not match those of DatoCMS for the quick upload. In these cases, a further job down the track such as a GraphQL interim may fix this issue for us, but I have gone with DatoCMS as they follow the schema set at ",Object(a.b)("a",i({parentName:"p"},{href:"http://json-schema.org/"}),"http://json-schema.org/"),"."),Object(a.b)("p",null,"Useful links for us to think about:"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"http://json-schema.org/"}),"http://json-schema.org/"),"\n",Object(a.b)("a",i({parentName:"p"},{href:"https://google.github.io/styleguide/jsoncstyleguide.xml"}),"https://google.github.io/styleguide/jsoncstyleguide.xml")),Object(a.b)("h3",{id:"schematic-levels"},"Schematic levels"),Object(a.b)("p",null,"The last requirement for the schematic is that I do not want to go further than three levels deep. The first level being the defining copy object factor for where the data relates too, the second being the naming conventions set below."),Object(a.b)("p",null,"The obvious break to this rule is when we have an array of objects. When it comes to these arrays of objects, the thought of the ",Object(a.b)("inlineCode",{parentName:"p"},"one-to-many")," relationship is to think of it from an entity relationship point of view and that these individual objects that form the ",Object(a.b)("inlineCode",{parentName:"p"},"many")," will themselves end up their own type on a CMS."),Object(a.b)("p",null,"Example a single component that refers to many users. Each of these users in a CMS will form its own entity and be defined as such."),Object(a.b)("p",null,"Example: type ListPage in the CMS refers to many of type User in the CMS to form the one-to-many relationship."),Object(a.b)("h2",{id:"typed-definitions-below"},"Typed definitions below"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"export default class CopyTypeDefs {\n  // ! Array of objects\n\n  /**\n   * @typedef {Object} Item Example item.\n   * @property {Number} id Identifier for example.\n   */\n\n  /**\n   * ! items: Array<Object>\n   * @type {Item[]} items Item Array.\n   *\n   * @memberof CopyTypeDefs\n   */\n  items = [\n    {\n      id: 1\n    },\n    {\n      id: 2\n    },\n    {\n      id: 3\n    }\n  ];\n\n  // ! Images + videos\n\n  /**\n   * @typedef {Object} Media Media typedef.\n   * @property {String} url The url to find the url.\n   * @property {String} alt The alt string for the media.\n   * @property {String} title The title for the media.\n   */\n\n  /**\n   * ! image\n   * @type {Media} image Example image object.\n   */\n  image = {\n    url: 'https://...',\n    title: 'Unicorns gone wild',\n    alt: 'Unicorns frolicking'\n  };\n\n  /**\n   * ! backgroundImage\n   * @type {Media} backgroundImage Example properties for any background image.\n   */\n  backgroundImage = {\n    url: 'https://...',\n    title: 'Unicorns gone wild background image',\n    alt: 'Unicorns frolicking in the background'\n  };\n\n  /**\n   * ! avatar\n   * @type {Media} avatar Example avatar object for image avatars.\n   */\n  avatar = {\n    url: 'https://...',\n    title: 'Unicorns gone wild',\n    alt: 'Unicorns frolicking'\n  };\n\n  /**\n   * ! logo\n   * @type {Media} avatar Example logo image object.\n   */\n  logo = {\n    url: 'https://...',\n    title: 'Unicorns gone wild',\n    alt: 'Unicorns frolicking'\n  };\n\n  /**\n   * ! video\n   * @type {Media} video Example video object.\n   */\n  video = {\n    url: 'https://...',\n    title: 'Unicorns gone wild',\n    alt: 'Unicorns frolicking'\n  };\n\n  // ! Colours\n  /**\n   * ! color\n   * @type {String} color Hex font color.\n   */\n  color = '#000FFF';\n\n  /**\n   * ! backgroundColor\n   * @type {String} backgroundColor Hex background color.\n   */\n  backgroundColor = '#000FFF';\n\n  // ! Copy\n  /**\n   * ! title\n   * @type {String} title The main title for a component/section.\n   */\n  title = 'Systematic nobis';\n\n  /**\n   * ! subtitle\n   * @type {String} subtitle The second main heading for component/section.\n   */\n  subtitle =\n    'Dolorum fuga nobis sit natus consequatur. Laboriosam sapiente. Natus quos ut.';\n\n  /**\n   * ! body\n   * @type {String} body The main body of text for a component/section.\n   */\n  body =\n    'Nemo tempore natus non accusamus eos placeat nesciunt. et fugit ut odio nisi dol' +\n    'ore non ... (long text)';\n\n  /**\n   * ! description\n   * @type {String} description The description of text for a component/section. Alternative is caption.\n   */\n  description =\n    'Vel et rerum nostrum quia. Dolorum fuga nobis sit natus consequatur.';\n\n  //! Time\n  /**\n   * ! timestamp\n   * @type {Date} timestamp A date object.\n   */\n  timestamp = new Date();\n\n  /**\n   * ! time\n   * @type {String} time A time string.\n   */\n  time = '03:08:02';\n\n  /**\n   * ! date\n   * @type {String} date A date string.\n   */\n  date = '2001-07-06';\n\n  // ! Credit Cards\n  /**\n   * ! cardData\n   * @typedef {Object} Card cardData definition\n   * @property {String} cardType The card type eg. Amex, VISA etc.\n   * @property {String|Number} cardNumber The CC number.\n   * @property {String} cardExpiry The expiry date for a card.\n   * @property {String} [cardholderName] Optional name associated with the card.\n   */\n  /**\n   * @type {Card} cardData The card data.\n   */\n  cardData = {\n    cardType: 'American Express',\n    cardNumber: '4716506247152101',\n    cardExpiry: '03/04',\n    cardholderName: 'D P O’KEEFFE'\n  };\n\n  // ! Maps\n  /**\n   * ! lat\n   * @type {Number} lat Latitude.\n   */\n  lat = -33.8688;\n\n  /**\n   * ! lon\n   * @type {Number} lon Longitude.\n   */\n  lon = 151.2093;\n}\n")),Object(a.b)("h2",{id:"applying-this-to-copyjson"},"Applying this to copy.json"),Object(a.b)("p",null,"For each component that requires it's copy definition, define that into a schema with a unique name on the first level to know where to apply it and have the schema apply from the levels below:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  // onboarding = id for reference component\n  "onboarding": {\n    // second level = where our schema rules start to apply\n    "items": [\n      {\n        "title": "Name",\n        "description": "Hello! Let\'s start with your name.",\n        "value": "name"\n      },\n      {\n        "title": "Email",\n        "description": "Now we need your email to set a login.",\n        "value": "email"\n      },\n      {\n        "title": "Password",\n        "description": "Lastly, let\'s set a password.",\n        "value": "password"\n      }\n    ]\n  },\n  "loginPage": {\n    // second level = where our schema rules start to apply\n    "emailTitle": "Email",\n    "emailPlaceholder": "you@example.com",\n    "passwordTitle": "Password",\n    "ctaButton": "Log in",\n    "forgotPassword": "Forgot password?",\n    "privacyPolicy": "Privacy policy",\n    "backgroundImage": {\n      "url": "https://res.cloudinary.com/gitgoodclub/image/upload/v1537942627/wtb9sg81buutng40ryty.jpg",\n      "title": "Image",\n      "alt": "Image"\n    },\n    "logo": {\n      "url": "https://res.cloudinary.com/gitgoodclub/image/upload/v1537409347/ssv85yzk2echp7rcxe6f.png",\n      "title": "Logo",\n      "alt": "Logo"\n    }\n  },\n  "landingPricing": {\n    // second level = where our schema rules start to apply\n    "title": "Quia ut",\n    "subtitle": "Et perferendis numquam sed blanditiis omnis et.",\n    "image": {\n      "url": "https://res.cloudinary.com/gitgoodclub/image/upload/v1537409347/w5mohkx26mqihiammogk.png",\n      "title": "at",\n      "alt": "tenetur"\n    }\n  }\n}\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Principles/Copy.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-principles-copy-md-4be81a727ee0e4d299d7.js.map