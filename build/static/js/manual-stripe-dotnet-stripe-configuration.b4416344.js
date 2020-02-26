(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{"./manual/Stripe/Dotnet-Stripe-Configuration.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o={},i="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(i,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"configuring-stripe-for-net"},"Configuring Stripe for .NET"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://codebrains.io/integrate-stripe-api-with-asp-net-core-creating-customers/"}),"Setting up Stripe API for Dotnet")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://stripe.com/docs/api?lang=dotnet"}),"Stripe Dotnet API Docs")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio-mac"}),"First Dotnet API")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-3.1&tabs=linux"}),"Setting secrets for a Dotnet project")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface"}),"Interfaces in C#")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://stormpath.com/blog/build-api-service-dotnet-core-twilio-stripe"}),"ASP.NET Core API Service with Twilio, Stripe and Stormpath")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://cmatskas.com/processing-payments-and-being-pci-compliant-with-stripe-js/?utm_content=buffer55d56&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer"}),"Process Payments with Dotnet")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/cmatskas/StripeSample/tree/master/StripeSample"}),"Process Payments with Dotnet Github")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://stripe.com/docs/development#create-charge"}),"Stripe Development Docs")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.toptal.com/asp-dot-net/asp-net-web-api-tutorial"}),"Toptal ASP.NET WebAPI")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://dev.to/integerman/creating-a-net-core-api-3n6d"}),"Dev.To tutorial")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://httpie.org/doc#default-behaviour"}),"HTTPie JSON"))),Object(r.b)("h2",{id:"adding-the-library"},"Adding the library"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"# install stripe\ndotnet add package Stripe.net\n# for reading local env file\n# NOT REQUIRED unless you want to read from .env\ndotnet add package DotNetEnv\n# install required code generation code\nMicrosoft.VisualStudio.Web.CodeGeneration.Design\n# global install scaffolding tool\ndotnet tool install --global dotnet-aspnet-codegenerator\n")),Object(r.b)("h2",{id:"adding-a-dotenv-file"},"Adding a Dotenv file"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"touch .env\n")),Object(r.b)("p",null,"Within the Dotenv file, we need to add your test keys from Stripe's website."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"SK_TEST_KEY= sk_test...\nPK_TEST_KEY=pk_test...\n")),Object(r.b)("h2",{id:"updating-your-settings-file"},"Updating your settings file"),Object(r.b)("p",null,"If you are going to use another method to fetch the variables (ie secrets etc), you could add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"appsettings.json")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  // previous key/values omitted for brevity\n  "Stripe": {\n    "SecretKey": "SK_TEST_KEY", // this will eval to sk_test_... .env\n    "PublishableKey": "PK_TEST_KEY" // this will eval to sk_test_... from .env\n  }\n}\n')),Object(r.b)("p",null,"Make sure to check the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/passing-parameters"}),"docs on passing parameters")," to understand how this works."),Object(r.b)("h2",{id:"add-stripe-config-to-startupcs"},"Add Stripe config to Startup.cs"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-csharp"}),'using Stripe;\nusing DotNetEnv;\n\n// ... code omitted for brevity\n\npublic Startup(IConfiguration configuration)\n{\n    Configuration = configuration;\n    // load .env file\n    DotNetEnv.Env.Load();\n    // set config using env var\n    StripeConfiguration.ApiKey = System.Environment.GetEnvironmentVariable("SK_TEST_KEY");\n}\n')),Object(r.b)("h2",{id:"create-the-model"},"Create the Model"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-cs"}),"// in Models/StripeCharge.cs\nnamespace ChargeApi.Models\n{\n    public class StripeCharge\n    {\n        public long Amount { get; set; }\n        public string Currency { get; set; }\n        public string Source { get; set; }\n        public string ReceiptEmail { get; set; }\n    }\n}\n")),Object(r.b)("h2",{id:"create-the-controller"},"Create the Controller"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-cs"}),'// Controllers/Charge.cs\nusing System.Collections.Generic;\nusing Microsoft.AspNetCore.Mvc;\nusing Stripe;\nusing ChargeApi.Models;\n\nnamespace dotnet_stripe.Controllers\n{\n    [ApiController]\n    [Route("api/charges")]\n    public class ChargesController : Controller\n    {\n        [HttpPost]\n        public Stripe.Charge CreateCharge([FromBody] StripeCharge createOptions)\n        {\n            var options = new ChargeCreateOptions\n            {\n                Amount = createOptions.Amount,\n                Currency = "usd",\n                Source = "tok_visa",\n                ReceiptEmail = "tim.apple@example.com",\n            };\n            var service = new ChargeService();\n            var charge = service.Create(options);\n            return charge;\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"sending-the-request-on-httpie"},"Sending the request on HTTPie"),Object(r.b)("p",null,"Since we are sending back the response from the ",Object(r.b)("inlineCode",{parentName:"p"},"Stripe.Charge")," object, it will be very verbose and not what you want to do in reality for the API."),Object(r.b)("p",null,"Using HTTPie (check resource ","[12]","), we can check for our 200 response with the full JSON body returned by Stripe by calling ",Object(r.b)("inlineCode",{parentName:"p"},"http POST http://localhost:5000/api/charges Amount:=200")," in our console."),Object(r.b)("h2",{id:"check-the-stripe-developer-console"},"Check the Stripe developer console"),Object(r.b)("p",null,"Heading to our Stripe dashboard and checking under ",Object(r.b)("inlineCode",{parentName:"p"},"Developers > Events"),", one can see our payment made for ",Object(r.b)("inlineCode",{parentName:"p"},"US$2.00")," by ",Object(r.b)("inlineCode",{parentName:"p"},'"tim.apple@example.com"'),". Great success!"),Object(r.b)("p",null,"Of course, all those values are coded and not exactly what we want in the real world... but we are connected."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Dotnet-Stripe-Configuration.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-stripe-dotnet-stripe-configuration.101a1afd2417ec7a4a77.js.map