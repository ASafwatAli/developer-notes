(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{sKP4:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/JS-RxJS.md"}});var i={_frontmatter:b},l=a.a;function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(l,s({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"rxjs"},"RxJS"),Object(r.b)("h2",{id:"10-a-brief-recap-of-programming-paradigms"},"1.0 A Brief Recap of Programming Paradigms"),Object(r.b)("h3",{id:"procedural-program"},"Procedural Program"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ideas that programs are a sense of functions"),Object(r.b)("li",{parentName:"ul"},"Goes from top to bottom"),Object(r.b)("li",{parentName:"ul"},"Relies heavily on global state, but any line can change the global state"),Object(r.b)("li",{parentName:"ul"},"C being a procedural language"),Object(r.b)("li",{parentName:"ul"},'"Imperative" execution'),Object(r.b)("li",{parentName:"ul"},"Easy to write, difficult to maintain"),Object(r.b)("li",{parentName:"ul"},"Prone to difficult bugs")),Object(r.b)("h3",{id:"object-oriented"},"Object Oriented"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Based around a Primitive: object"),Object(r.b)("li",{parentName:"ul"},"Objects have well defined interfaces"),Object(r.b)("li",{parentName:"ul"},"Localised behaviour"),Object(r.b)("li",{parentName:"ul"},"Objects control state"),Object(r.b)("li",{parentName:"ul"},"Composition"),Object(r.b)("li",{parentName:"ul"},"Code is still imperative - pro AND con! - Still telling the computer EXACTLY what to do."),Object(r.b)("li",{parentName:"ul"},"Can be more verbose")),Object(r.b)("h3",{id:"declarative"},"Declarative"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Describing what you want to happen, but not telling the computer how to do it"),Object(r.b)("li",{parentName:"ul"},"Eg. SQL, Regex, HTML"),Object(r.b)("li",{parentName:"ul"},"Data is self-describing"),Object(r.b)("li",{parentName:"ul"},"As powerful as the interpreter allows"),Object(r.b)("li",{parentName:"ul"},"As limiting as the interpreter allows - You want build a game in SQL etc.")),Object(r.b)("h3",{id:"functional"},"Functional"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What we want to happen but not how"),Object(r.b)("li",{parentName:"ul"},"Little state"),Object(r.b)("li",{parentName:"ul"},"Few side effects"),Object(r.b)("li",{parentName:"ul"},"Easy to reason about"),Object(r.b)("li",{parentName:"ul"},"Composition"),Object(r.b)("li",{parentName:"ul"},"Expressive"),Object(r.b)("li",{parentName:"ul"},"Works great with OO"),Object(r.b)("li",{parentName:"ul"},"Basis in higher math"),Object(r.b)("li",{parentName:"ul"},"Cons to think differently"),Object(r.b)("li",{parentName:"ul"},"Not always the best choice"),Object(r.b)("li",{parentName:"ul"},"No loops, no control logic - Just telling it what we want to happen")),Object(r.b)("h3",{id:"reactive"},"Reactive"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Primitive: Observable"),Object(r.b)("li",{parentName:"ul"},"Instead of describing data in terms of other data, we describe it in terms of streams of events - From this, we create a pipeline such that we certain data changes, a lot is processed and changed - Example: spreadsheets!"),Object(r.b)("li",{parentName:"ul"},"Composition"),Object(r.b)("li",{parentName:"ul"},"Expressive"),Object(r.b)("li",{parentName:"ul"},"Data flows unidirectionally"),Object(r.b)("li",{parentName:"ul"},"Tough to think differently"),Object(r.b)("li",{parentName:"ul"},"Subscriptions help change the data")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const cellC2$ = cellA2$\n  .combineLatest(cellB2$)\n  .map((cells) => cells[0] + cells[1]);\n\ncellC2$.subscribe((value) => {\n  console.log(value);\n});\n")),Object(r.b)("h2",{id:"11-core-reactive-concepts"},"1.1: Core Reactive Concepts"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Core Concept 1: Pull model vs Push model")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'any data sitting there that you "ask" for at some point - example refresh button - manual button trigger - time interval'),Object(r.b)("li",{parentName:"ul"},"observable (stream) which is a reactive data source - produces items over a period of time that will either error, complete, or never complete until a page closes - not telling the stream when to get data, it has inbuilt logic on how to get data - we may transform this data - the display of the data is actually part of the description")),Object(r.b)("p",null,"An an example for a ",Object(r.b)("inlineCode",{parentName:"p"},"pull")," based code, we can think of a window.setInterval() that fires every 5000 seconds."),Object(r.b)("p",null,"An example of a push would be to have a function fire and then the return continutes to filter, flatMap, map and subscribe."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Core Concept 2: Everything is a database")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"mouse movements"),Object(r.b)("li",{parentName:"ul"},"current user"),Object(r.b)("li",{parentName:"ul"},"web requests"),Object(r.b)("li",{parentName:"ul"},"input boxes")),Object(r.b)("h2",{id:"12-comparing-the-autocomplete-function-using-js-vs-rxjs"},"1.2: Comparing the Autocomplete function using JS vs RxJS"),Object(r.b)("p",null,"In the comparison where the ",Object(r.b)("inlineCode",{parentName:"p"},"$title.on('keyup', () => {})")," runs with a promise returned. The query can run into race conditions."),Object(r.b)("p",null,"Also note that every single result also fires."),Object(r.b)("p",null,"The issues:"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"// Fix up and down arrow\n// Stop always querying\n// Getting race condition\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bad ways")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"generally ",Object(r.b)("inlineCode",{parentName:"li"},"if last query == currentTitle return")),Object(r.b)("li",{parentName:"ul"},"using setTimeout to reduce number of queries"),Object(r.b)("li",{parentName:"ul"},"Race condition still happening, but bad attempts may be increasing the timeout - Could also use a current id compared to next query id and then returning before the callback occurs"),Object(r.b)("li",{parentName:"ul"},"A lot of state across the module being changed")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The Rx way")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// npm install rxjs-es for es6\nimport $ from 'jquery';\nimport Rx from 'rxjs/Rx';\n\nconst $title = $('#title');\nconst $results = $('#results');\n\nconst keyUps$ = Rx.Observable.fromEvent($title, \"keyup\");\nconst queries$ = keyUps$\n    .map(e => e.target.value)\n    .distinctUntilChanged()\n    .debounceTime(250)\n    .switchMap(getItems);   // similar to merge, but if new query comes in, discard the old data\n    //.mergeMap(getItems);  // alias for flatMap\n\nqueries$.subscribe(query => {\n    // get rid of the promise will stop race condition\n    $results.empty();\n    $results.append(items.map( r => $(`<li />`).text(r)));\n})\n\n\x3c!-- queries$.subscribe(query => {\n    console.log(e); // prints out event\n    getItems(query)\n        .then(items => {\n            $results.empty();\n            $results.append(items.map( r => $(`<li />`).text(r)));\n        });\n}) --\x3e\n")),Object(r.b)("p",null,"An even better way."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import $ from 'jquery';\nimport Rx from 'rxjs/Rx';\n\nconst $title = $('#title');\nconst $results = $('#results');\n\nRx.Observable.fromEvent($title, 'keyup')\n  .map((e) => e.target.value)\n  .distinctUntilChanged()\n  .debounceTime(500)\n  .switchMap(getItems)\n  .subscribe((items) => {\n    $results.empty();\n    $results.append(items.map((r) => $(`<li />`).text(r)));\n  });\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All the Rx has no external state, whereas the other code does."),Object(r.b)("li",{parentName:"ul"},"Rx doesn't have to wait for us to tell it when to do it.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"3-the-core-of-reactive-extensions"},"3: The Core of Reactive Extensions"),Object(r.b)("h2",{id:"31-obervables-operators-and-subscriptions"},"3.1: Obervables, Operators and Subscriptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Observable: Something that can be observed which produces values"),Object(r.b)("li",{parentName:"ul"},"Operator: It's an operation that modifies the data being pushed in from the observable - They don't produce values in and of themselves, but move them through the pipeline."),Object(r.b)("li",{parentName:"ul"},"Subscriptions: Piece of code that will do something with the values returned by the operators")),Object(r.b)("p",null,"Note, you can model anything in a reactive context by thinking a little bit differently."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web API Request Example")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reactive can still complete, or it can error out and retry.")),Object(r.b)("h2",{id:"32-creating-observables"},"3.2 Creating Observables"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'import Rx from \'rxjs/Rx\';\n\n# promise will always execute - not lazy\nconst promise = new Promise((resolve, reject) => {\n    console.log("In promise");\n    resolve("hey");\n});\n\npromise.then(item => console.log(item));\n\n# this doesn\'t give any output!\n# observables are lazy!\n# won\'t run without a subscription\nconst simple$ = new Rx.Observable(observer => {\n    console.log("Generating observable");\n    setTimeout(() => {\n        observer.next("An items!");\n        setTimeout(() => {\n            observer.next("Another item!");\n            observer.complete();\n        }, 1000);\n    }, 1000);\n});\n\n# creating a subscription\n# first arg is the next function\n# second arg is error\n# third arg is complete\nsimple$.subscribe(\n    item => console.log(`one.next ${item}`),\n    error => console.log(`one.error ${item}`),\n    () => console.log("one.complete")\n);\n\n# Generating observable\n# one.next An item!\n# one.next Another item!\n# one.complete\n\nsetTimeout(() => {\n    simple$.subscribe({\n        next: item => console.log(`two.next ${item}`),\n        error: error => console.log(`two.error ${item}`),\n        complete: () => console.log("two.complete")\n    });\n}, 3000)\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Re-subscribing to an observable allows you to run that generator again")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),'function createInterval(time) {\n    return new Rx.Observable(observer => {\n        let index = 0;\n        let interval = setInterval(() => {\n            observer.next(index++);\n        }, time);\n\n        return () => {\n            // will run when we unsubscribe\n            clearnInterval(interval);\n        };\n    });\n}\n\nfunction createSubscriber(tag) {\n    return {\n        next(item) { console.log(`${tag}.next ${item}`); },\n        error(error) { console.log(`${tag}.error ${error.stack || error }`); },\n        complete() { console.log(`${tag}.complete`); }\n    };\n}\n\nfunction take(observable, amount) {\n    return new Rx.Observable(observer => {\n\n    });\n}\n\n// this is the core of subscriptions\nfunction take(sourceObservable, amount) {\n    return new Rx.Observable(observer => {\n        let count = 0;\n        const subscription = sourceObservable.subscribe({\n            next(item) {\n                observer.next(item);\n                if (++count >= amount) {\n                    observer.complete();\n                }\n            },\n            error(error) { observer.error(error); },\n            complete() { observer.complete(); }\n        });\n\n        return () => subscription.unsubscribe();\n    });\n}\n\nconst everySecond_ = createInterval(1000);\nconst firstFiveSeconds = take(everySecond_, 5);\nconst subscription = everySecond_.subscribe(createSubscriber("one"));\nsetTimeout(() => {\n    subscription.unsubscribe();\n}, 3500);\n')),Object(r.b)("p",null,"This subscription will console.log out forever and ever and ever... - unless, we dispose of a description"),Object(r.b)("p",null,"How do operators come into play?"),Object(r.b)("p",null,"We could run something like ",Object(r.b)("inlineCode",{parentName:"p"},'const subscription = everySecond_.take(3)subscribe(createSubscriber("one"));')),Object(r.b)("p",null,"The steps for it are that it listens for a source and emits a transformation!"),Object(r.b)("h2",{id:"33-built-in-observables"},"3.3: Built in Observables"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'import Rx from \'rxjs/Rx\';\n\n\nRx.Observable.interval(500)\n    .take(5)\n    .subscribe(createSubscriber("interval"));\n\nRx.Observable.timer(1000, 500)\n    .take(3)\n    .subscribe(createSubscriber("timer");\n\n// note, array doesn\'t work - use from\nRx.Observable.of("Hello world!", 42, "whoa")\n    .subscribe(createSubscriber("of"));\n\nRx.Observable.from(["Hello world!", 42, "whoa"])\n    .subscribe(createSubscriber("of"));\n\nRx.Observable.from(generate())\n    .subscribe(createSubscriber("of"));\n\n\nRx.Observable.from("hello world!")\n    .subscribe(createSubscriber("of"));\n\n// it can also take in a generator function!\n\nfunction* generate() {\n    yield 1;\n    yield 5;\n    yield "HEY";\n}\n\nRx.Observable.throw(new Error("Hey"))\n    .subscribe(createSubscriber("error"));\n\n// empty\nRx.Observable.empty()\n    .subscribe(createSubscriber("empty"));\n\n// defer\nlet sideEffect = 0;\nconst defer = Rx.Observable.defer(() => {\n    sideEffect++;\n    return Rx.Obserable.of(sideEffect);\n});\n\ndefer.subscribe(createSubscriber("defer.one"));\ndefer.subscribe(createSubscriber("defer.two"));\ndefer.subscribe(createSubscriber("defer.three"));\n\nRx.Observable.never()\n    .subscribe(createSubscriber("never"));\n\nRx.Observable.range(10, 30)\n    .subscribe(createSubscriber("range"));\n')),Object(r.b)("p",null,"Benefits of the iterable ",Object(r.b)("inlineCode",{parentName:"p"},"from"),"?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For every iterable, we could map every element.")),Object(r.b)("h2",{id:"34-using-rxjs-with-node-jquery-and-promises"},"3.4: Using RxJS with Node, jQuery and Promises"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"Rx.Observable.fromEvent($title, 'keyup')\n  .map((e) => e.target.value)\n  .distinctUntilChanged()\n  .debounceTime(500)\n  .switchMap(getItems)\n  .subscribe((items) => {\n    $results.empty();\n    $results.append(items.map((i) => $('<li />').text(i)));\n  });\n")),Object(r.b)("p",null,"NOTE: Without the subscribe, it will never be subscribed to the dom!"),Object(r.b)("p",null,"If we have the ",Object(r.b)("inlineCode",{parentName:"p"},".take(10)")," - it would complete after taking 10 and then furthermore unsubscribe and be great for performance!"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fromEvent")," calls from ",Object(r.b)("inlineCode",{parentName:"p"},"addEventListener"),", so it can do powerful things like ",Object(r.b)("inlineCode",{parentName:"p"},"keyup")," for those that don't initially support it."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import fs from 'fs';\n\nfs.readdir('./src/server', (err, items) => {\n  if (err) console.log(err);\n  else {\n    console.log(items);\n  }\n});\n\n// alternative\nconst readdir = Rx.Observable.bindNodeCallBack(fs.readdir);\n\nreaddir('./src/server')\n  // mergeMap creates iterable converted from array\n  .mergeMap((files) => Rx.Observable.from(files))\n  .map((file) => `MANIPULATED ${file}`)\n  .subscribe(createSubscriber('readdir'));\n\n// promises\n\nfunction getItem() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('Hello');\n    }, 1000);\n  });\n}\n\nRx.Observable.fromPromise(getItem()).subscribe(createSubscriber('promise'));\n")),Object(r.b)("h2",{id:"35-subjects"},"3.5: Subjects"),Object(r.b)("p",null,"Subjects are another Rx primitive. They are both an observable and a observer! Used to bridge non-reactive code with reactive code."),Object(r.b)("p",null,"Behaviour, replay subjects etc."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Warning"),": you should only really consider them as a last resort when bridging non-reactive and reactive code."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const simple = new Rx.Subject();\n\nsimple.subscribe(createSubscriber('simple'));\n\nsimple.next('Hello');\nsimple.next('World');\nsimple.complete();\n\nconst interval = Rx.Observable.interval(1000).take(5);\nconst intervalSubject = new Rx.Subject();\nintervalSubject.subscribe(interval);\n\nintervalSubject.subscribe(createSubscriber('sub1'));\nintervalSubject.subscribe(createSubscriber('sub2'));\nintervalSubject.subscribe(createSubscriber('sub3'));\n\n// subscribes after three seconds\nsetTimeout(() => {\n  intervalSubject.subscribe(createSubscriber('LOOK AT ME'));\n}, 3000);\n")),Object(r.b)("p",null,"Before, we had to invoke a function that call ",Object(r.b)("inlineCode",{parentName:"p"},"next")," and ",Object(r.b)("inlineCode",{parentName:"p"},"complete"),"."),Object(r.b)("p",null,"In the above example, intervalSubject is acting as a proxy to another observable."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// needs init state parameter\nconst currentUser = new Rx.BehaviorSubject({ isLoggedIn: false });\nconst isLoggedIn = currentUser.map((u) => u.isLoggedIn);\n\ncurrentUser.next({ isLoggedIn: false });\nisLoggedIn.subscribe(createSubscriber('isLoggedIn'));\n\nsetTimeout(() => {\n  currentUser.next({ isLoggedIn: true, name: 'nelson' });\n}, 3000);\n\nsetTimeout(() => {\n  isLogged.subscribe(createSubscription('delayed'));\n}, 1500);\n")),Object(r.b)("p",null,"How do you remember multiple states?"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'const replay = new Rx.ReplaySubject(3);\nreplay.next(1);\nreplay.next(2);\n\nreplay.subscribe(createSubscriber("one"));\n\nreplay.next(3);\nreplay.next(4);\nreplay.next(5);\n\n// this subscription only gets the previous three items\nreplay.subscribe(createSubscriber("two"));\n\nreplay.next(6);\n\n// what you see\none.next 1\none.next 2\none.next 3\none.next 4\none.next 5\ntwo.next 3\ntwo.next 4\ntwo.next 5\none.next 6\ntwo.next 6\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Async Subjects")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),'const apiCall = new Rx.AsyncSubject();\napiCall.next(1);\n\napiCall.subscribe(createSubscriber("one"));\napiCall.next(2);\n\n// only will emit the final item before it is complete\napiCall.complete();\n\n// if you subscribe to it again, that final value will be emitted\nsetTimeout(() => {\n    apiCall.subscribe(createSubscriber("two"));\n}, 2000);\n\n// output\none.next 2\none.complete\ntwo.next 2\ntwo.complete\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Subject Summary")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if you can get around it, don't use subjects unless you have to"),Object(r.b)("li",{parentName:"ul"},"you should use an observable workflow where possible")),Object(r.b)("h2",{id:"36-rxjs-resources-and-documentation"},"3.6: RxJS Resources and Documentation"),Object(r.b)("p",null,"Sources:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://github.com/ReactiveX/rxjs"}),"RxJS Github")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"http://rxmarbles.com/"}),"RxMarbles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"http://jaredforsyth.com/rxvision/examples/playground/"}),"RxVision Playground"))),Object(r.b)("h2",{id:"37-sharing-observable-sequences"},"3.7: Sharing Observable Sequences"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Hot Observable: It will produce events regardless of if you're listening - eg.",Object(r.b)("inlineCode",{parentName:"li"},"fromEvent($title, 'keyup')")),Object(r.b)("li",{parentName:"ul"},"Cold Obserable: Starts once you subscribe - Interval Observables are actually cold observables")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// this example shows when both start from the beginning eg cold\nimport Rx from 'rxjs/Rx';\n\nconst interval = Rx.Observable.interval(1000).take(10);\n\nsetTimeout(() => {\n  interval.subscribe(createSubscriber('one'));\n}, 1200);\n\nsetTimeout(() => {\n  interval.subscribe(createSubscriber('two'));\n}, 3200);\n\n// HOT\n// connectable observable\nimport Rx from 'rxjs/Rx';\n\nconst interval = Rx.Observable.interval(1000)\n  .take(10)\n  .publish();\n\ninterval.connect();\n\nsetTimeout(() => {\n  interval.subscribe(createSubscriber('one'));\n}, 1200);\n\nsetTimeout(() => {\n  interval.subscribe(createSubscriber('two'));\n}, 3200);\n\n// if you connect after a set interval, then it begins executing and sharing the underlying observable\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Why would you want a hot variable?")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// here subscribe console.log runs twice\nconst socket = { on: () => {} };\nconst chatMessage = new Rx.Observable((observable) => {\n  console.log('subscribed');\n  socket.on('chat:message', (message) => observer.next(message));\n});\n\nchatMessage.subscribe(createSubscriber('one'));\nchatMessage.subscribe(createSubscriber('two'));\n\n// without it\n\nconst socket = { on: () => {} };\nconst chatMessage = new Rx.Observable((observable) => {\n  console.log('subscribed');\n  socket.on('chat:message', (message) => observer.next(message));\n}).publish();\n\nchatMessage.connect();\n\nchatMessage.subscribe(createSubscriber('one'));\nchatMessage.subscribe(createSubscriber('two'));\n\n// using publishLast()\nconst simple = new Rx.Observable((observer) => {\n  observer.next('one');\n  observer.next('two');\n  observer.complete();\n});\n\n// always returns the last value\nconst published = simple.publishLast();\n\n// even if we subscribe before connect, both will get the last value\npublished.subscribe(createSubscriber('one'));\npublished.connect();\npublished.subscribe(creaSubscriber('two'));\n\n// using publishReplay()\nconst simple = new Rx.Observable((observer) => {\n  observer.next('one');\n  observer.next('two');\n  observer.next('three');\n\n  return () => console.log('Disposed');\n});\n\n// always returns the last value\nconst published = simple.publishReplay(2);\n\n// even if we subscribe before connect, both will get the last value\n// to dispose without running complete, we need to disconnect by unsubscribing\nconst sub1 = published.subscribe(createSubscriber('one'));\nconst connection = published.connect();\nconst sub2 = published.subscribe(creaSubscriber('two'));\n\nsub1.unsubscribe();\nsub2.unsubscribe();\n\nconnection.unsubscribe();\n")),Object(r.b)("p",null,"Refcount is a way to automatically handle the connection and the unsubscription of a connection observable."),Object(r.b)("p",null,"It will connect to the first subscription and then disconnected on the last unsubscribe."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),'// using refCount()\nconst simple = new Rx.Observable(observer => {\n    observer.next("one");\n    observer.next("two");\n    observer.next("three");\n\n    return () => console.log("Disposed");\n});\n\n// always returns the last value\nconst published = simple.publishReplay(2).refCount();\n\n// even if we subscribe before connect, both will get the last value\n// to dispose without running complete, we need to disconnect by unsubscribing\nconst sub1 = published.subscribe(createSubscriber("one"));\nconst sub2 = published.subscribe(creaSubscriber("two"));\n\nsub1.unsubscribe();\nsub2.unsubscribe();\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"publish().refCount()")," is done so often, that is has been turned in ",Object(r.b)("inlineCode",{parentName:"p"},"share()"),"."),Object(r.b)("p",null,"Taxing processes that you don't want to repeat but you want multiple things to hook into the result, then turn it into a hot subscription."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"40-operators-that-everyone-should-know"},"4.0: Operators that everyone should know"),Object(r.b)("p",null,"Now we will just talk about the different primary operators that you will work with."),Object(r.b)("h2",{id:"41-do--finally--startwith--filter"},"4.1: Do / Finally / StartWith / Filter"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// do => get the next value and pass it back unchanged\n// finally => only completes after the range has completed, runs right at the end of the final value\n// filter => filters out given statement\n// interval => call timeout\n// startWith => set initial value\n\nRx.Observable.range(1, 10)\n  .do((a) => console.log(`From do ${a}`))\n  .map((a) => a * a)\n  .subscribe(createSubscriber('simple'));\n\nRx.Observable.range(1, 10)\n  .finally(() => console.log(`From finally`))\n  .map((a) => a * 2)\n  .subscribe(createSubscriber('finally'));\n\nRx.Observable.range(1, 10)\n  .filter((a) => a < 5)\n  .map((a) => a * 2)\n  .subscribe(createSubscriber('filter'));\n\nRx.Observable.interval(1000)\n  .startWith(-1)\n  .subscribe(createSubscriber('interval'));\n")),Object(r.b)("h2",{id:"42-merge--concat"},"4.2: Merge / Concat"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'// merge - merge many observables togethers\n// concat - this concatenates observables to the end of another, can also take a list of Observables\n\nRx.Observable.interval(1000)\n    .merge(Rx.Observable.interval(500))\n    .take(5)\n    .subscribe(createSubscriber("merge1"));\n\nRx.Observable.merge(\n    Rx.Observable.interval(1000).map(i => `${i} seconds),\n    Rx.Observable.interval(500).map(i => `${i} half seconds))\n    .take(5)\n    .subscribe(createSubscriber(\'merge2\'));\n\n// different events for merged observables\nRx.Observable.merge(\n    socket.on$("login").map(user => processUser(user),\n    socket.on$("logout").map(() => null));\n\nRx.Observable.range(1, 5)\n    .concat(Rx.Observable.range(10,3))\n    .subscribe(createSubscriber("concat1"));\n')),Object(r.b)("h2",{id:"43-map--mergemap--switchmap"},"4.3: Map / MergeMap / SwitchMap"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// map - a projection on every item that comes in\n// mergeMap - select many, does projection and then has another thing that we will work on\n// switchMap - similar to mergeMap but replaces with the latest value if another emission comes in\n\nfunction arrayMap(arr, proj) {\n  let returnArray = [];\n  for (let i of arr) {\n    returnArray.push(proj(item));\n  }\n\n  return returnArray;\n}\n\narrayMap([1, 2, 3], (a) => a * a);\n\n// imagine array of dicts\nconst albums = [{}, {}];\n\nfunction arrayMergeMap(arr, proj) {\n  let returnArray = [];\n  for (let i of arr) {\n    let projArray = proj(item);\n    for (let j of projArray) {\n      returnArray.push(proj(item));\n    }\n  }\n\n  return returnArray;\n}\n\nconst tracks = arrayMergeMap(albums, (album) => album.tracks);\n\nRx.Observable.range(1, 3)\n  .mergeMap((i) =>\n    Rx.Observable.timer(i * 1000).map(() => `After ${i} seconds`)\n  )\n  .subscribe(createSubscriber('mergeMap'));\n\nRx.Observable.fromPromise(getTracks())\n  .mergeMap((tracks) => Rx.Observable.from(tracks))\n  .subscribe(createSubscriber('tracks'));\n\nfunction getTracks() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(['track 1', 'track 2', 'track 3']);\n    }, 1000);\n  });\n}\n\n// synchronous example\nRx.Observable.of('my query')\n  .do(() => console.log('Querying'))\n  .mergeMap((a) => query(a))\n  .do(() => console.log('After querying'))\n  .subscribe(createSubscriber('query'));\n\nfunction query(value) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('This is the resolved value');\n    }, 1000);\n  });\n}\n\n// switch map\n")),Object(r.b)("h2",{id:"44-reduce--scan"},"4.4: Reduce / Scan"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// reducer (acc, value) and works on value - doesn't emit until the completion\n// scan - processes and emits as it comes in\nRx.Observable.range(1, 10)\n  .reduce((acc, value) => acc + value)\n  .subscribe(createSubscriber('reduce'));\n\nRx.Observable.range(1, 10)\n  .scan((acc, value) => acc + value)\n  .subscribe(createSubscriber('scan'));\n")),Object(r.b)("h2",{id:"45-buffer--toarray"},"4.5: Buffer / ToArray"),Object(r.b)("p",null,"There have been some big changes to how ",Object(r.b)("inlineCode",{parentName:"p"},"buffer")," has been used."),Object(r.b)("p",null,"Buffer takes in an observable."),Object(r.b)("p",null,"toArray will convert results into an array. - still has a clean exit if the never() is implemented!"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'Rx.Observable.range(1, 100)\n    .bufferCount(25)\n    .subscribe(createSubscriber("items");\n\n// will take 25 items and pushing them into an array\n\n\nRx.Observable.interval(500)\n    .bufferTime(2000)\n    .subscribe(createSubscriber("bufferTime");\n\n// same behaviour!\n// emitting event causes buffer to flush\nRx.Observable.interval(500)\n    .buffer(Rx.Observable.interval(2000))\n    .subscribe(createSubscriber("buffer");\n\n//\n// toArray\n//\n\nRx.Observable.range(1, 10)\n    .toArray()\n    .subscribe(createSubscriber("range"));\n')),Object(r.b)("h2",{id:"46-first--last--single--skip--take"},"4.6: First / Last / Single / Skip / Take"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const simple = new Rx.Observable((observer) => {\n  console.log('Generating sequence');\n  observer.next(1);\n  observer.next(2);\n  observer.next(3);\n  observer.next(4);\n  observer.complete();\n});\n\nsimple.first().subscribe(createSubscriber('first'));\n\nsimple.last().subscribe(createSubscriber('last'));\n\n// displays 1 & 4\n// if nothing is in there, there are EmptyError(s) thrown\n\n// single.error thrown is more than one error thrown\nsimple.single().subscribe(createSubscriber('single'));\n\n// take and skip won't throw errors\n// take does the first however emissions\n// skip will take the emissions after a number\nsimple.take(2).subscribe(createSubscriber('take'));\n\nsimple.skip(2).subscribe(createSubscriber('skip'));\n\n// 3, 4\nsimple\n  .skip(2)\n  .take(2)\n  .subscribe(createSubscriber('skip'));\n\n// skipWhile / takeWhile\nRx.Observable.interval(500)\n  .skipWhile((i) => i < 4)\n  .takeWhile((i) => i < 10)\n  .subscribe(createSubscriber('skipWhile/takeWhile'));\n\n// what's until and take emissions until\nRx.Observable.interval(500)\n  .skipUntil(Rx.Observable.timer(1000))\n  .takeUntil(Rx.Observable.timer(4000))\n  .subscribe(createSubscriber('skipUntil'));\n")),Object(r.b)("h2",{id:"47-zip--withlatestfrom--combinelatest"},"4.7: Zip / WithLatestFrom / CombineLatest"),Object(r.b)("p",null,"How can we combine observables in different ways?"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"function arrayZip(arr1, arr2, selectorFunc) {\n  const count = Math.min(arr1.length, arr2.length);\n  const results = [];\n\n  for (let i = 0; i < count; i++) {\n    const combined = selector(arr1[i], arr2[i]);\n    results.push(combined);\n  }\n\n  return results;\n}\n\nconst arr1 = [32, 2, 52, 43, 54];\nconst arr2 = [1, 0, 10, 4, 1, 4, 6, 2];\nconst results = arrayZip(arr1, arr2, (left, right) => left * right);\n\nconsole.log(results);\n\n// in RxJS\nRx.Observable.range(1.1)\n  .zip(\n    Rx.Observable.interval(500),\n    (left, right) => `item: ${left}, at ${right * 500}`\n  )\n  .subscribe(createSubscriber('zip'));\n\n// emits value when source emits\n// can also pass (left, right) function like zip as second parameter\nRx.Observable.interval(1000)\n  .withLatestFrom(Rx.Observable.interval(500))\n  .subscribe(createSubscriber('withLatestFrom'));\n\n// emit value if either do\nRx.Observable.interval(1000)\n  .combineLatest(Rx.Observable.interval(500))\n  .subscribe(createSubscriber('withLatestFrom'));\n")),Object(r.b)("h2",{id:"48-error-handling-catch-and-retry"},"4.8: Error Handling Catch and Retry"),Object(r.b)("p",null,"If an error happens, an observer stops emitting and can prevent values from emitting at all. Error handling is very important!"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".catch(error => Rx.Observable.of(error))")," can pass this down as an Observable."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".retry()")," we can pass in with a numeral to ensure that we either keep retrying or retry a certain number of times."))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/JS-RxJS.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-js-rx-js-md-01f268455b38a6a98772.js.map