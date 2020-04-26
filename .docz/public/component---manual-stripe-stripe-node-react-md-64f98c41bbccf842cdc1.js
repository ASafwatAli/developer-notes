(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{nZLc:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),s=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Stripe-Node-React.md"}});var i={_frontmatter:o},l=s.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(a.b)(l,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"using-stripe-with-nodejs"},"Using Stripe with Node.js"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://stripe.com/docs/payments/payment-intents/migration"}),"Payment Migration Guide")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://stripe.com/docs/payments/payment-intents"}),"Payment Intents")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://stripe.com/docs/js/payment_intents/confirm_card_payment"}),"Stripe.js Docs")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/stripe/react-stripe-elements"}),"React Stripe Elements GitHub"))),Object(a.b)("h2",{id:"intro"},"Intro"),Object(a.b)("p",null,"This will show how to make payments without needing card details to hit the server using Payment Intents. There is two sections to this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Node Express server"),Object(a.b)("li",{parentName:"ol"},"React App")),Object(a.b)("h2",{id:"prereqs"},"Prereqs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ensure you have a Stripe account"),Object(a.b)("li",{parentName:"ul"},"Basic knowledge on Express.js"),Object(a.b)("li",{parentName:"ul"},"Basic knowledge for ",Object(a.b)("inlineCode",{parentName:"li"},"create-react-app"))),Object(a.b)("h2",{id:"1-the-express-server"},"1. The Express Server"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"mkdir server\ncd server\nyarn init -y # skip yarn init with defaults for now\nyarn add express body-parser stripe cors morgan\n")),Object(a.b)("p",null,"Configure the .env file to contain your Stripe key (we're only using the test key for now):"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"SK_TEST_KEY=sk_test...\n")),Object(a.b)("p",null,"Create ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," and add the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"require('dotenv').config();\nconst cors = require('cors');\nconst express = require('express');\nconst stripe = require('stripe')(process.env.SK_TEST_KEY);\n\nconst app = express();\nconst port = 8080;\nconst bodyParser = require('body-parser');\nconst morgan = require('morgan');\n// parse application/json\napp.use(bodyParser.json());\napp.use(cors());\napp.use(morgan('combined'));\n\n\n// basic route create a payment intent\napp.post('/api/v1/create', async (req, res) => {\n  const intent = await stripe.paymentIntents.create({\n    amount: 1099,\n    currency: 'aud',\n    payment_method_types: ['card'],\n  });\n  res.json({ intent: intent.client_secret });\n});\n\napp.post('/api/v1/charge', async (req, res) => {\n  const charge = await stripe.charges.create({\n    amount: 1600,\n    currency: 'aud',\n  });\n  res.json(charge);\n})\n\n// basic route create a setup intent\napp.post('/api/v1/setup-intent', async (req, res) => {\n    payment_method_types: ['card'],\n  });\n  res.json({ intent: intent.client_secret });\n});\n\n// basic route to receive and log a webhook\napp.post('/api/v1/events/webhook', (req, res) => {\n  console.log('@ Webhook received', req.body);\n  res.json({ status: 'success' });\n});\n\napp.listen(port, () =>\n  console.log(`Stripe example app listening on port ${port}!`),\n);\n")),Object(a.b)("p",null,"For testing the webhook URL, we can use the Stripe CLI (unless you want to setup the webhook for your account):"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"stripe listen --forward-to localhost:8080/hooks # listen for events and forward to local URL\nstripe trigger payment_intent.created # trigger a payment_intent.created event\nstripe payment_intents create --amount=100 --currency=usd # create a payment intent from the CLI\n")),Object(a.b)("h2",{id:"2-for-the-react-app"},"2. For the React App"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"npx create-react-app react-stripe\ncd react-stripe\nyarn add axios\n")),Object(a.b)("p",null,"As for the code, you can create ",Object(a.b)("inlineCode",{parentName:"p"},"Stripe.js")," in the main directory and change the ",Object(a.b)("inlineCode",{parentName:"p"},"StripeProvider")," publishable API key with your own."),Object(a.b)("p",null,"We are using axios here to chat to the Express server."),Object(a.b)("p",null,"The code looks as follows:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { render } from 'react-dom';\n\nimport {\n  CardElement,\n  StripeProvider,\n  Elements,\n  injectStripe,\n} from 'react-stripe-elements';\nimport axios from 'axios';\n\nconst handleBlur = () => {\n  console.log('[blur]');\n};\nconst handleChange = change => {\n  console.log('[change]', change);\n};\nconst handleFocus = () => {\n  console.log('[focus]');\n};\nconst handleReady = () => {\n  console.log('[ready]');\n};\n\nconst createOptions = (fontSize: string, padding: ?string) => {\n  return {\n    style: {\n      base: {\n        fontSize,\n        color: '#424770',\n        letterSpacing: '0.025em',\n        fontFamily: 'Source Code Pro, monospace',\n        '::placeholder': {\n          color: '#aab7c4',\n        },\n        ...(padding ? { padding } : {}),\n      },\n      invalid: {\n        color: '#9e2146',\n      },\n    },\n  };\n};\n\nclass _CreatePaymentMethod extends React.Component {\n  state = {\n    error: null,\n    processing: false,\n    message: null,\n  };\n\n  handleSubmit = ev => {\n    ev.preventDefault();\n    if (this.props.stripe && this.props.elements) {\n      this.props.stripe\n        .createPaymentMethod({\n          type: 'card',\n          card: this.props.elements.getElement('card'),\n        })\n        .then(payload => {\n          if (payload.error) {\n            this.setState({\n              error: `Failed to create PaymentMethod: ${payload.error.message}`,\n              processing: false,\n            });\n            console.log('[error]', payload.error);\n          } else {\n            this.setState({\n              message: `Created PaymentMethod: ${payload.paymentMethod.id}`,\n              processing: false,\n            });\n            console.log('[paymentMethod]', payload.paymentMethod);\n          }\n        });\n      this.setState({ processing: true });\n    } else {\n      console.log(\"Stripe.js hasn't loaded yet.\");\n    }\n  };\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          stripe.createPaymentMethod\n          <CardElement\n            onBlur={handleBlur}\n            onChange={handleChange}\n            onFocus={handleFocus}\n            onReady={handleReady}\n            {...createOptions(this.props.fontSize)}\n          />\n        </label>\n        {this.state.error && <div className=\"error\">{this.state.error}</div>}\n        {this.state.message && (\n          <div className=\"message\">{this.state.message}</div>\n        )}\n        <button disabled={this.state.processing}>\n          {this.state.processing ? 'Processing…' : 'Create'}\n        </button>\n      </form>\n    );\n  }\n}\n\nconst CreatePaymentMethod = injectStripe(_CreatePaymentMethod);\n\nclass _HandleCardPayment extends React.Component {\n  state = {\n    clientSecret: null,\n    error: null,\n    disabled: false,\n    succeeded: false,\n    processing: false,\n    message: null,\n  };\n\n  handleSubmit = async ev => {\n    ev.preventDefault();\n    if (this.props.stripe && this.props.elements) {\n      const res = await axios.post('http://localhost:8080/api/v1/create');\n      this.props.stripe\n        .confirmCardPayment(res.data.intent, {\n          payment_method: {\n            card: this.props.elements.getElement('card'),\n          },\n        })\n        .then(payload => {\n          if (payload.error) {\n            this.setState({\n              error: `Charge failed: ${payload.error.message}`,\n              disabled: false,\n            });\n            console.log('[error]', payload.error);\n          } else {\n            this.setState({\n              succeeded: true,\n              message: `Charge succeeded! PaymentIntent is in state: ${payload.paymentIntent.status}`,\n            });\n            console.log('[PaymentIntent]', payload.paymentIntent);\n          }\n        });\n      this.setState({ disabled: true, processing: true });\n    } else {\n      console.log(\"Stripe.js hasn't loaded yet.\");\n    }\n  };\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          stripe.confirmCardPayment\n          <CardElement\n            onBlur={handleBlur}\n            onChange={handleChange}\n            onFocus={handleFocus}\n            onReady={handleReady}\n            {...createOptions(this.props.fontSize)}\n          />\n        </label>\n        {this.state.error && <div className=\"error\">{this.state.error}</div>}\n        {this.state.message && (\n          <div className=\"message\">{this.state.message}</div>\n        )}\n        {!this.state.succeeded && (\n          <button disabled={this.state.disabled}>\n            {this.state.processing ? 'Processing…' : 'Pay'}\n          </button>\n        )}\n      </form>\n    );\n  }\n}\n\nconst HandleCardPayment = injectStripe(_HandleCardPayment);\n\nclass _HandleCardSetup extends React.Component {\n  state = {\n    clientSecret: null,\n    error: null,\n    disabled: false,\n    succeeded: false,\n    processing: false,\n    message: null,\n  };\n\n  handleSubmit = async ev => {\n    ev.preventDefault();\n    if (this.props.stripe && this.props.elements) {\n      const res = await axios.post('http://localhost:8080/api/v1/setup-intent');\n      this.props.stripe\n        .confirmCardSetup(res.data.intent, {\n          payment_method: {\n            card: this.props.elements.getElement('card'),\n          },\n        })\n        .then(payload => {\n          if (payload.error) {\n            this.setState({\n              error: `Setup failed: ${payload.error.message}`,\n              disabled: false,\n            });\n            console.log('[error]', payload.error);\n          } else {\n            this.setState({\n              succeeded: true,\n              message: `Setup succeeded! SetupIntent is in state: ${payload.setupIntent.status}`,\n            });\n            console.log('[SetupIntent]', payload.setupIntent);\n          }\n        });\n      this.setState({ disabled: true, processing: true });\n    } else {\n      console.log(\"Stripe.js hasn't loaded yet.\");\n    }\n  };\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          stripe.confirmCardSetup\n          <CardElement\n            onBlur={handleBlur}\n            onChange={handleChange}\n            onFocus={handleFocus}\n            onReady={handleReady}\n            {...createOptions(this.props.fontSize)}\n          />\n        </label>\n        {this.state.error && <div className=\"error\">{this.state.error}</div>}\n        {this.state.message && (\n          <div className=\"message\">{this.state.message}</div>\n        )}\n        {!this.state.succeeded && (\n          <button disabled={this.state.disabled}>\n            {this.state.processing ? 'Processing…' : 'Setup'}\n          </button>\n        )}\n      </form>\n    );\n  }\n}\n\nconst HandleCardSetup = injectStripe(_HandleCardSetup);\n\nclass Checkout extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',\n    };\n    window.addEventListener('resize', () => {\n      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {\n        this.setState({ elementFontSize: '14px' });\n      } else if (\n        window.innerWidth >= 450 &&\n        this.state.elementFontSize !== '18px'\n      ) {\n        this.setState({ elementFontSize: '18px' });\n      }\n    });\n  }\n\n  render() {\n    const { elementFontSize } = this.state;\n    return (\n      <div className=\"Checkout\">\n        <h1>React Stripe Elements with PaymentIntents</h1>\n        <Elements>\n          <CreatePaymentMethod fontSize={elementFontSize} />\n        </Elements>\n        <Elements>\n          <HandleCardPayment fontSize={elementFontSize} />\n        </Elements>\n        <Elements>\n          <HandleCardSetup fontSize={elementFontSize} />\n        </Elements>\n      </div>\n    );\n  }\n}\n\nconst StripeApp = () => {\n  return (\n    <StripeProvider apiKey=\"pk_test_...\">\n      <Checkout />\n    </StripeProvider>\n  );\n};\n\nexport default StripeApp;\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Stripe-Node-React.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-stripe-node-react-md-64f98c41bbccf842cdc1.js.map