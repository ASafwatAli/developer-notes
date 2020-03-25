(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{rzll:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Spring-Stripe-Configuration.md"}});var o={_frontmatter:p},s=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,i({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"java-spring-stripe-configuration"},"Java Spring Stripe Configuration"),Object(r.b)("p",null,'In this short example, we are going to "Hello, World!" a Stripe charge!'),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://docs.dennisokeeffe.com/manual-java-gradle-intro"}),"Gradle Intro Docs")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://spring.io/guides/gs/rest-service/"}),"Spring Guide to Rest Services")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://stripe.com/docs/api"}),"Stripe API")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://stackabuse.com/stripe-integration-with-java-spring-for-payment-processing/"}),"Stripe with Spring")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/stripe/stripe-java#usage"}),"Stripe Github Java Usage")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/ResponseEntity.html"}),"Spring ResponseEntity")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.tutorialspoint.com/spring_boot/spring_boot_service_components.htm"}),"Tutorials Point: Service Components")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://gist.github.com/fteychene/1e5c30fc86d7623084d0"}),"Basic Spring Boot Gitignore file"))),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-shell"}),"mkdir hello-spring-stripe && cd hello-spring-stripe\nmkdir -p src/main/java/stripe\ntouch build.gradle src/main/java/stripe/StripeCharge.java src/main/java/stripe/StripeChageController.java src/main/java/stripe/Application.java .env\n# init gradle\ngradle wrapper\n")),Object(r.b)("h2",{id:"setup-buildgradle"},"Setup build.gradle"),Object(r.b)("p",null,"Add the following for Stripe + Spring:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-java"}),"buildscript {\n    repositories {\n        mavenCentral()\n    }\n    dependencies {\n        classpath(\"org.springframework.boot:spring-boot-gradle-plugin:2.2.1.RELEASE\")\n    }\n}\n\napply plugin: 'java'\napply plugin: 'eclipse'\napply plugin: 'idea'\napply plugin: 'org.springframework.boot'\napply plugin: 'io.spring.dependency-management'\n\nbootJar {\n    baseName = 'hello-spring-jar'\n    version =  '0.1.0'\n}\n\nrepositories {\n    mavenCentral()\n}\n\nsourceCompatibility = 1.8\ntargetCompatibility = 1.8\n\ndependencies {\n    compile(\"com.stripe:stripe-java:16.5.1\")\n    compile(\"org.springframework.boot:spring-boot-starter-web\")\n    compile(\"io.github.cdimascio:java-dotenv:5.1.3\")\n    testCompile('org.springframework.boot:spring-boot-starter-test')\n}\n")),Object(r.b)("h2",{id:"set-up-dotenv-file"},"Set up dotenv file"),Object(r.b)("p",null,'We are using a local dotenv file for this "Hello, World!" level example.'),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-shell"}),"# required\nSK_TEST_KEY=sk_...\n# not required\nPK_TEST_KEY=pk_...\n")),Object(r.b)("h2",{id:"setting-up-the-main-application"},"Setting up the main application"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/stripe/Application.java"),", add the following:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-java"}),"package stripecharge;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class Application {\n\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}\n")),Object(r.b)("h2",{id:"setting-up-the-model"},"Setting up the model"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/stripe/StripeCharge.java"),":"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-java"}),'package stripecharge;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class StripeCharge {\n\n  private final long amount;\n  private final String receiptEmail;\n  private final String source;\n  private final String currency;\n\n  public StripeCharge(long amount, String receiptEmail) {\n    this.amount = amount;\n    this.source = "tok_visa";\n    this.currency = "usd";\n    this.receiptEmail = receiptEmail;\n  }\n\n  public Map<String, Object> getCharge() {\n    Map<String, Object> params = new HashMap<String, Object>();\n    params.put("amount", this.amount);\n    params.put("currency", this.currency);\n    // source should obtained with Stripe.js\n    params.put("source", this.source);\n    params.put(\n      "description",\n      "My First Test Charge (created for API docs)"\n    );\n    params.put("receipt_email",this.receiptEmail);\n    return params;\n  }\n}\n')),Object(r.b)("h2",{id:"setting-up-the-controller"},"Setting up the controller"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/stripe/StripeChargeController.java"),":"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-java"}),'package stripecharge;\n\n// NOTE: RequestMapping + RequestParam not required for this demo\n// but kept in for reference purposes if wanted to play around later\nimport java.util.concurrent.atomic.AtomicLong;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.RestController;\nimport io.github.cdimascio.dotenv.Dotenv;\nimport com.stripe.Stripe;\nimport com.stripe.exception.StripeException;\nimport com.stripe.model.Charge;\nimport com.stripe.net.RequestOptions;\n\n@RestController\n@RequestMapping("/api")\npublic class StripeChargeController {\n\n  @PostMapping("/charge")\n  public ResponseEntity<String> createCharge(@RequestBody StripeCharge stripeCharge) {\n    try {\n      // for demonstrations sake, using .env file\n      Dotenv dotenv = Dotenv.load();\n\n      // creating the charge\n      Stripe.apiKey = dotenv.get("SK_TEST_KEY");\n      Charge charge = Charge.create(stripeCharge.getCharge());\n      System.out.println(charge);\n      return new ResponseEntity<String>("Success", HttpStatus.CREATED);\n    } catch (StripeException e) {\n      e.printStackTrace();\n      return new ResponseEntity<String>("Failure", HttpStatus.INTERNAL_SERVER_ERROR);\n\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"build-run-and-ping"},"Build, Run and Ping"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"./gradlew build")," to build to project or ",Object(r.b)("inlineCode",{parentName:"p"},"./gradlew bootRun")," to build and run."),Object(r.b)("p",null,"Once the project is running, we can ping ",Object(r.b)("inlineCode",{parentName:"p"},"http POST http://localhost:8080/api/charge amount:=200 receiptEmail=hello@example.com")," (using HTTPie) and we get a response like the following:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-s"}),"HTTP/1.1 201\nContent-Length: 7\nContent-Type: application/json;charset=UTF-8\nDate: Sun, 12 Jan 2020 03:33:10 GMT\n\nSuccess\n")),Object(r.b)("p",null,"Check your Stripe Dashboard under ",Object(r.b)("inlineCode",{parentName:"p"},"Developer > Events")," and you'll see we have successfully made a payment! Hooray!"))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Spring-Stripe-Configuration.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-spring-stripe-configuration-md-4c053309201d38e2fd9c.js.map