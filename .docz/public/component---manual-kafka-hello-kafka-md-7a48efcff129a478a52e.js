(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{fjG4:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kafka/Hello-Kafka.md"}});var i={_frontmatter:c},s=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hello-kafka"},"Hello Kafka"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://medium.com/big-data-engineering/hello-kafka-world-the-complete-guide-to-kafka-with-docker-and-python-f788e2588cfc"}),"Getting started with Kafka")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/SOHU-Co/kafka-node"}),"Kafka Node Github")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/wurstmeister/kafka-docker"}),"Original Kafka Docker Github"))),Object(a.b)("h2",{id:"getting-started-with-nodejs"},"Getting Started with Nodejs"),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"git clone https://github.com/wurstmeister/kafka-docker.git")," to clone wurstmeister's repo."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Make sure you have both Docker and Docker Compose installed."),Object(a.b)("h2",{id:"docker-composing"},"Docker Composing"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"docker-compose up -d\ndocker-compose scale kafka=3\n# to see processes\ndocker-compose ps\n# teardown\ndocker-compose stop\n")),Object(a.b)("h2",{id:"consumeproducing-from-within-docker-container"},"Consume/Producing from within Docker Container"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"# from your terminal run:\ndocker exec -i -t -u root $(docker ps | grep docker_kafka | cut -d' ' -f1) /bin/bash\n# $(docker ps | grep docker_kafka | cut -d' ' -f1) - Will return the docker process ID of the Kafka Docker running so you can access it\n\n# create topic1 and topic2 for our examples\n$KAFKA_HOME/bin/kafka-topics.sh --create --partitions 4 --bootstrap-server localhost:9092 --topic topic1\n$KAFKA_HOME/bin/kafka-topics.sh --create --partitions 4 --bootstrap-server localhost:9092 --topic topic2\n\n# optional: create a consumer\n$KAFKA_HOME/bin/kafka-console-consumer.sh --from-beginning --bootstrap-server localhost:9092 --topic=topic1\n\n# optional: create a producer\n$KAFKA_HOME/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic=topic1\n")),Object(a.b)("p",null,"Note: We use ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:9092")," here instead of ",Object(a.b)("inlineCode",{parentName:"p"},"kafka:9092")," for our Node Kafka scripts."),Object(a.b)("p",null,"When sending messages as a producer, note that we are latching onto particular partitions in the Node app and so only messages that head to a particular partition will be consumed."),Object(a.b)("h2",{id:"node-kafka"},"Node Kafka"),Object(a.b)("p",null,"Start a new project and install and prep the files we need:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"yarn init -y\nyarn add node-kafka\ntouch consumer.js producer.js\n")),Object(a.b)("h2",{id:"producer"},"Producer"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"var kafka = require('kafka-node'),\n  Producer = kafka.Producer,\n  KeyedMessage = kafka.KeyedMessage,\n  client = new kafka.KafkaClient(),\n  producer = new Producer(client),\n  km = new KeyedMessage('key', 'message'),\n  payloads = [\n    { topic: 'topic1', messages: 'hi', partition: 0 },\n    { topic: 'topic2', messages: ['hello', 'world', km] },\n  ];\nproducer.on('ready', function() {\n  producer.send(payloads, function(err, data) {\n    console.log(data);\n  });\n});\n\nproducer.on('error', function(err) {});\n")),Object(a.b)("h2",{id:"consumer"},"Consumer"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"var kafka = require('kafka-node'),\n  Consumer = kafka.Consumer,\n  client = new kafka.KafkaClient(),\n  consumer = new Consumer(\n    client,\n    [{ topic: 'topic1', partition: 0 }, { topic: 'topic2', partition: 1 }],\n    {\n      autoCommit: false,\n    },\n  );\n")),Object(a.b)("h2",{id:"running-it-altogether"},"Running it altogether"),Object(a.b)("p",null,"Ensure that you've created ",Object(a.b)("inlineCode",{parentName:"p"},"topic1")," and ",Object(a.b)("inlineCode",{parentName:"p"},"topic2")," from within the Docker container."),Object(a.b)("p",null,"Once created, we can run ",Object(a.b)("inlineCode",{parentName:"p"},"node consumer.js")," in one terminal to listen for those topics on particular partitions and ",Object(a.b)("inlineCode",{parentName:"p"},"node producer.js")," to fire off some notifications."),Object(a.b)("p",null,"All the received events on the consumer will then log to the terminal."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kafka/Hello-Kafka.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kafka-hello-kafka-md-7a48efcff129a478a52e.js.map