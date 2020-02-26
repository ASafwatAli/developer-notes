(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{"./manual/System-Design/Glossary.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s={},o="wrapper";function r(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(o,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"glossary"},"Glossary"),Object(n.b)("h2",{id:"basics"},"Basics"),Object(n.b)("p",null,"Whenever we are designing a large system, we need to consider a few things:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"What are the different architectural pieces that can be used?"),Object(n.b)("li",{parentName:"ol"},"How do these pieces work with each other?"),Object(n.b)("li",{parentName:"ol"},"How can we best utilize these pieces: what are the right tradeoffs?")),Object(n.b)("p",null,"Investing in scaling before it is needed is generally not a smart business proposition; however, some forethought into the design can save valuable time and resources in the future."),Object(n.b)("h2",{id:"key-characteristics"},"Key Characteristics"),Object(n.b)("p",null,"ScREAM:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Scalability"),Object(n.b)("li",{parentName:"ol"},"Reliability"),Object(n.b)("li",{parentName:"ol"},"Availability"),Object(n.b)("li",{parentName:"ol"},"Efficiency"),Object(n.b)("li",{parentName:"ol"},"Manageability")),Object(n.b)("h2",{id:"scalability"},"Scalability"),Object(n.b)("p",null,"Scalability is the capability of a system, process, or a network to grow and manage increased demand. Any distributed system that can continuously evolve in order to support the growing amount of work is considered to be scalable."),Object(n.b)("p",null,"A system may have to scale because of many reasons like increased data volume or increased amount of work, e.g., number of transactions. A scalable system would like to achieve this scaling without performance loss."),Object(n.b)("p",null,"Good examples of horizontal scaling are Cassandra and MongoDB as they both provide an easy way to scale horizontally by adding more machines to meet growing needs. Similarly, a good example of vertical scaling is MySQL as it allows for an easy way to scale vertically by switching from smaller to bigger machines. However, this process often involves downtime."),Object(n.b)("h2",{id:"reliability"},"Reliability"),Object(n.b)("p",null,"By definition, reliability is the probability a system will fail in a given period. In simple terms, a distributed system is considered reliable if it keeps delivering its services even when one or several of its software or hardware components fail."),Object(n.b)("p",null,"Take the example of a large electronic commerce store (like Amazon), where one of the primary requirement is that any user transaction should never be canceled due to a failure of the machine that is running that transaction. For instance, if a user has added an item to their shopping cart, the system is expected not to lose it. A reliable distributed system achieves this through redundancy of both the software components and data. If the server carrying the user\u2019s shopping cart fails, another server that has the exact replica of the shopping cart should replace it."),Object(n.b)("p",null,"Obviously, redundancy has a cost and a reliable system has to pay that to achieve such resilience for services by eliminating every single point of failure."),Object(n.b)("h2",{id:"efficiency"},"Efficiency"),Object(n.b)("p",null,"To understand how to measure the efficiency of a distributed system, let\u2019s assume we have an operation that runs in a distributed manner and delivers a set of items as result. Two standard measures of its efficiency are the response time (or latency) that denotes the delay to obtain the first item and the throughput (or bandwidth) which denotes the number of items delivered in a given time unit (e.g., a second). The two measures correspond to the following unit costs:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Number of messages globally sent by the nodes of the system regardless of the message size."),Object(n.b)("li",{parentName:"ol"},"Size of messages representing the volume of data exchanges.")),Object(n.b)("p",null,"The complexity of operations supported by distributed data structures (e.g., searching for a specific key in a distributed index) can be characterized as a function of one of these cost units. Generally speaking, the analysis of a distributed structure in terms of 'number of messages' is over-simplistic. It ignores the impact of many aspects, including the network topology, the network load, and its variation, the possible heterogeneity of the software and hardware components involved in data processing and routing, etc. However, it is quite difficult to develop a precise cost model that would accurately take into account all these performance factors; therefore, we have to live with rough but robust estimates of the system behavior."),Object(n.b)("h2",{id:"availability"},"Availability"),Object(n.b)("p",null,"By definition, availability is the time a system remains operational to perform its required function in a specific period. It is a simple measure of the percentage of time that a system, service, or a machine remains operational under normal conditions."),Object(n.b)("h3",{id:"reliability-vs-availability"},"Reliability vs Availability"),Object(n.b)("p",null,"If a system is reliable, it is available. However, if it is available, it is not necessarily reliable. In other words, high reliability contributes to high availability, but it is possible to achieve a high availability even with an unreliable product by minimizing repair time and ensuring that spares are always available when they are needed."),Object(n.b)("h2",{id:"manageability"},"Manageability"),Object(n.b)("p",null,"Ease of operation and maintenance. Things to consider for manageability are:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The ease of diagnosing and understanding problems when they occur"),Object(n.b)("li",{parentName:"ol"},"Ease of making updates or modifications"),Object(n.b)("li",{parentName:"ol"},"How simple the system is to operate (i.e., does it routinely operate without failure or exceptions?)")),Object(n.b)("p",null,"Early detection of faults can decrease or avoid system downtime. For example, some enterprise systems can automatically call a service center (without human intervention) when the system experiences a system fault."),Object(n.b)("h2",{id:"load-balancer"},"Load Balancer"),Object(n.b)("p",null,"Another critical component of any distributed system. It helps to spread the traffic across a cluster of servers to improve responsiveness and availability of applications, websites or databases. LB also keeps track of the status of all the resources while distributing requests. If a server is not available to take new requests or is not responding or has elevated error rate, LB will stop sending traffic to such a server."),Object(n.b)("p",null,"Load balancer typically sits between the client and the server accepting incoming network and application traffic and distributing the traffic across multiple backend servers using various algorithms."),Object(n.b)("p",null,"By balancing app requests, the LB reduces individual server load and prevents one single application from becoming a single point of failure - improving overall application availability and responsiveness."),Object(n.b)("h3",{id:"utilizing-full-scalability-and-redundancy"},"Utilizing full scalability and redundancy"),Object(n.b)("p",null,"To utilize full scalability and redundancy, we can try to balance the load at each layer of the system."),Object(n.b)("p",null,"This could mean before a web server layer, an application server layer and database server layer."),Object(n.b)("h3",{id:"lb-pros"},"LB Pros"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"UX is faster, uninterrupted. Requests are immediately passed on to a more readily available resource."),Object(n.b)("li",{parentName:"ul"},"Less downtime and higher throughput."),Object(n.b)("li",{parentName:"ul"},"Easier for sys admins to handle incoming requests while decreasing wait time for users."),Object(n.b)("li",{parentName:"ul"},"Smart LBs provide predictive analytics to determine traffic bottlenecks and give actionable insights."),Object(n.b)("li",{parentName:"ul"},"SysAdmins experience fewer failed or stressed components.")),Object(n.b)("h3",{id:"lb-algorithms"},"LB Algorithms"),Object(n.b)("p",null,"Health checks are used for load balancers to check for healthy backend servers. If a health check fails, the server is automatically removed from the pool."),Object(n.b)("p",null,"There are a variety of LB methods with different algorithms for different needs:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Least Connection Method")," - directs traffic to server with least active connections."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Least Response Time Method")," - directs to server with the fewest active connections and the lowest average response time"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Least Bandwidth Method")," - This method selects the server that is currently serving the least amount of traffic measured in megabits per second (Mbps)."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Round Robin Method")," \u2014 This method cycles through a list of servers and sends each new request to the next server. When it reaches the end of the list, it starts over at the beginning. It is most useful when the servers are of equal specification and there are not many persistent connections."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Weighted Round Robin Method")," \u2014 The weighted round-robin scheduling is designed to better handle servers with different processing capacities. Each server is assigned a weight (an integer value that indicates the processing capacity). Servers with higher weights receive new connections before those with less weights and servers with higher weights get more connections than those with less weights."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"IP Hash")," \u2014 Under this method, a hash of the IP address of the client is calculated to redirect the request to a server.")),Object(n.b)("h3",{id:"redundant-load-balancers"},"Redundant Load Balancers"),Object(n.b)("p",null,"LB can be a single point of failure, therefore a second load balancer can be connected to the first to form a cluster. In the case that the first LB fails, the second moves from passive to active."),Object(n.b)("h2",{id:"caching"},"Caching"),Object(n.b)("p",null,"Caching enables you to make vastly better use of the resources you already have as well as making otherwise unattainable product requirements feasible."),Object(n.b)("p",null,"Caches take advantage of the locality of reference principle: recently requested data is likely to be requested again."),Object(n.b)("p",null,"They are used in almost every layer of computing: hardware, operating systems, web browsers, web applications, and more."),Object(n.b)("h3",{id:"application-server-cache"},"Application Server Cache"),Object(n.b)("p",null,"Placing a cache directly on a request layer node enables the local storage of response data. Each time a request is made to the service, the node will quickly return local cached data if it exists. If it is not in the cache, the requesting node will query the data from disk. The cache on one request layer node could also be located both in memory (which is very fast) and on the node\u2019s local disk (faster than going to network storage)."),Object(n.b)("p",null,"What happens when you expand this to many nodes? If the request layer is expanded to multiple nodes, it\u2019s still quite possible to have each node host its own cache. However, if your load balancer randomly distributes requests across the nodes, the same request will go to different nodes, thus increasing cache misses. Two choices for overcoming this hurdle are global caches and distributed caches."),Object(n.b)("h3",{id:"content-distribution-network-cdn"},"Content Distribution Network (CDN)"),Object(n.b)("p",null,"CDNs are a kind of cache that comes into play for sites serving large amounts of static media. In a typical CDN setup, a request will first ask the CDN for a piece of static media; the CDN will serve that content if it has it locally available. If it isn\u2019t available, the CDN will query the back-end servers for the file, cache it locally, and serve it to the requesting user."),Object(n.b)("h3",{id:"cache-invalidation"},"Cache Invalidation"),Object(n.b)("h4",{id:"write-through-cache"},"Write-through cache"),Object(n.b)("p",null,"Under this scheme, data is written into the cache and the corresponding database at the same time. The cached data allows for fast retrieval and, since the same data gets written in the permanent storage, we will have complete data consistency between the cache and the storage. Also, this scheme ensures that nothing will get lost in case of a crash, power failure, or other system disruptions."),Object(n.b)("p",null,"Although, write through minimizes the risk of data loss, since every write operation must be done twice before returning success to the client, this scheme has the disadvantage of higher latency for write operations."),Object(n.b)("h4",{id:"write-around-cache"},"Write-around cache"),Object(n.b)("p",null,"This technique is similar to write through cache, but data is written directly to permanent storage, bypassing the cache. This can reduce the cache being flooded with write operations that will not subsequently be re-read, but has the disadvantage that a read request for recently written data will create a \u201ccache miss\u201d and must be read from slower back-end storage and experience higher latency."),Object(n.b)("h4",{id:"write-back-cache"},"Write-back cache"),Object(n.b)("p",null,"Under this scheme, data is written to cache alone and completion is immediately confirmed to the client. The write to the permanent storage is done after specified intervals or under certain conditions. This results in low latency and high throughput for write-intensive applications, however, this speed comes with the risk of data loss in case of a crash or other adverse event because the only copy of the written data is in the cache."),Object(n.b)("h3",{id:"cache-eviction-policies"},"Cache Eviction Policies"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"First In First Out (FIFO): Cache evicts the first block first without any regard to how often or how many times it was accessed before."),Object(n.b)("li",{parentName:"ol"},"Last In First Out (LIFO): The cache evicts the block accessed most recently first without any regard to how often or how many times it was accessed before."),Object(n.b)("li",{parentName:"ol"},"Least Recently Used (LRU): Discards the least recently used items first."),Object(n.b)("li",{parentName:"ol"},"Most Recently Used (MRU): Discards, in contrast to LRU, the most recently used items first."),Object(n.b)("li",{parentName:"ol"},"Least Frequently Used (LFU): Counts how often an item is needed. Those that are used least often are discarded first."),Object(n.b)("li",{parentName:"ol"},"Random Replacement (RR): Randomly selects a candidate item and discards it to make space when necessary.")),Object(n.b)("h2",{id:"shardingpartitioning"},"Sharding/Partitioning"),Object(n.b)("p",null,"Technique to break a big database into smaller parts. It is the process of splitting up a DB/table across multiple machines to improve the manageability, performance, availability, and load balancing of an application."),Object(n.b)("h3",{id:"partitioning-methods"},"Partitioning Methods"),Object(n.b)("h4",{id:"horizontal-partitioning"},"Horizontal Partitioning"),Object(n.b)("p",null,"In this scheme, we put different rows into different tables. The key problem with this approach is that if the value whose range is used for sharding isn\u2019t chosen carefully, then the partitioning scheme will lead to unbalanced servers."),Object(n.b)("p",null,"In the previous example, splitting location based on their zip codes assumes that places will be evenly distributed across the different zip codes. This assumption is not valid as there will be a lot of places in a thickly populated area like Manhattan as compared to its suburb cities."),Object(n.b)("h4",{id:"vertical-partitioning"},"Vertical Partitioning"),Object(n.b)("p",null,"In this scheme, we divide our data to store tables related to a specific feature in their own server. For example, if we are building Instagram like application - where we need to store data related to users, photos they upload, and people they follow - we can decide to place user profile information on one DB server, friend lists on another, and photos on a third server. Vertical partitioning is straightforward to implement and has a low impact on the application."),Object(n.b)("p",null,"The main problem with this approach is that if our application experiences additional growth, then it may be necessary to further partition a feature specific DB across various servers (e.g. it would not be possible for a single server to handle all the metadata queries for 10 billion photos by 140 million users)."),Object(n.b)("h4",{id:"directory-based-partitioning"},"Directory Based Partitioning"),Object(n.b)("p",null,"A loosely coupled approach to work around issues mentioned in the above schemes is to create a lookup service which knows your current partitioning scheme and abstracts it away from the DB access code."),Object(n.b)("p",null,"So, to find out where a particular data entity resides, we query the directory server that holds the mapping between each tuple key to its DB server. This loosely coupled approach means we can perform tasks like adding servers to the DB pool or changing our partitioning scheme without having an impact on the application."),Object(n.b)("h3",{id:"partitioning-criteria"},"Partitioning Criteria"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Key or Hash-based partitioning"),Object(n.b)("li",{parentName:"ol"},"List partitioning"),Object(n.b)("li",{parentName:"ol"},"Round-robin partitioning"),Object(n.b)("li",{parentName:"ol"},"Composite partitioning")),Object(n.b)("h3",{id:"common-sharding-problems"},"Common Sharding Problems"),Object(n.b)("p",null,"On a sharded database there are certain extra constraints on the different operations that can be performed. Most of these constraints are due to the fact that operations across multiple tables or multiple rows in the same table will no longer run on the same server."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Joins and Denormalization: not feasible across servers."),Object(n.b)("li",{parentName:"ol"},"Referential Integrity: dangling references."),Object(n.b)("li",{parentName:"ol"},"Rebalancing: due to data distribution not being uniform or a lot of load on a shard. Rebalancing without incurring downtime is extremely difficult.")),Object(n.b)("h2",{id:"indexes"},"Indexes"),Object(n.b)("p",null,"In databases, sooner or later there comes a time when database performance is no longer satisfactory. One of the very first things you should turn to when that happens is database indexing."),Object(n.b)("p",null,"The goal of creating an index on a particular table in a database is to make it faster to search through the table and find the row or rows that we want. Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records."),Object(n.b)("p",null,"The trick with indexes is that we must carefully consider how users will access the data. In the case of data sets that are many terabytes in size, but have very small payloads (e.g., 1 KB), indexes are a necessity for optimizing data access."),Object(n.b)("p",null,"Finding a small payload in such a large dataset can be a real challenge, since we can\u2019t possibly iterate over that much data in any reasonable time. Furthermore, it is very likely that such a large data set is spread over several physical devices \u2014 this means we need some way to find the correct physical location of the desired data. Indexes are the best way to do this."),Object(n.b)("h3",{id:"indexes-decrease-write-performance"},"Indexes decrease write performance"),Object(n.b)("p",null,"An index can dramatically speed up data retrieval but may itself be large due to the additional keys, which slow down data insertion & update."),Object(n.b)("p",null,"When adding rows or making updates to existing rows for a table with an active index, we not only have to write the data but also have to update the index. This will decrease the write performance."),Object(n.b)("h2",{id:"proxies"},"Proxies"),Object(n.b)("p",null,"A proxy server is an intermediate server between the client and the back-end server. Clients connect to proxy servers to request for a service like a web page, file, connection, etc. In short, a proxy server is a piece of software or hardware that acts as an intermediary for requests from clients seeking resources from other servers."),Object(n.b)("p",null,"Typically used to filter requests, log requests or sometimes transform requests (adding/removing headers, encryption or resource compression)."),Object(n.b)("p",null,"Another advantage is for a proxy server to cache requests."),Object(n.b)("h3",{id:"proxy-server-types"},"Proxy Server Types"),Object(n.b)("p",null,"Basic proxy type is closed off from the open Internet."),Object(n.b)("h4",{id:"1-open-proxy"},"1. Open Proxy"),Object(n.b)("p",null,"Proxy server accessible to any Internet user. There are two famous open proxy types:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Anonymous Proxy - reveals its identity as a server but does not disclose the initial IP address. Though th\u0456s proxy server c\u0430n be d\u0456scovered e\u0430s\u0456ly \u0456t c\u0430n be benef\u0456c\u0456\u0430l for some users \u0430s \u0456t h\u0456des their IP \u0430ddress."),Object(n.b)("li",{parentName:"ol"},"Transparent Proxy - th\u0456s proxy server \u0430g\u0430\u0456n \u0456dent\u0456f\u0456es \u0456tself, \u0430nd w\u0456th the support of HTTP he\u0430ders, the f\u0456rst IP \u0430ddress c\u0430n be v\u0456ewed. The m\u0430\u0456n benef\u0456t of us\u0456ng th\u0456s sort of server \u0456s \u0456ts \u0430b\u0456l\u0456ty to c\u0430che the webs\u0456tes.")),Object(n.b)("h4",{id:"2-reverse-proxy"},"2. Reverse Proxy"),Object(n.b)("p",null,"Reverse Proxy retrieves some resources on behalf of a client from one or more servers. These resources are then returned to the client, appearing as if they originated from the proxy server itself."),Object(n.b)("h2",{id:"redundancy"},"Redundancy"),Object(n.b)("p",null,"Redundancy is the duplication of critical components or functions of a system with the intention of increasing the reliability of the system, usually in the form of a backup or fail-safe, or to improve actual system performance."),Object(n.b)("p",null,"For example, if there is only one copy of a file stored on a single server, then losing that server means losing the file. Since losing data is seldom a good thing, we can create duplicate or redundant copies of the file to solve this problem."),Object(n.b)("p",null,"Redundancy plays a key role in removing the single points of failure in the system and provides backups if needed in a crisis. For example, if we have two instances of a service running in production and one fails, the system can failover to the other one."),Object(n.b)("p",null,"Replication means sharing information to ensure consistency between redundant resources, such as software or hardware components, to improve reliability, fault-tolerance, or accessibility."),Object(n.b)("h2",{id:"sql-vs-nosql"},"SQL vs NoSQL"),Object(n.b)("p",null,"Relational databases are structured and have predefined schemas like phone books that store phone numbers and addresses."),Object(n.b)("p",null,"Non-relational databases are unstructured, distributed, and have a dynamic schema like file folders that hold everything from a person's address and phone number to their Facebook 'likes' and online shopping preferences."),Object(n.b)("h3",{id:"sql"},"SQL"),Object(n.b)("p",null,"Relational databases store data in rows and columns. Each row contains all the information about one entity and each column contains all the separate data points. Some of the most popular relational databases are MySQL, Oracle, MS SQL Server, SQLite, Postgres, and MariaDB."),Object(n.b)("h3",{id:"nosql"},"NoSQL"),Object(n.b)("h4",{id:"key-value-stores"},"Key-Value Stores"),Object(n.b)("p",null,"Data is stored in an array of key-value pairs. The 'key' is an attribute name which is linked to a 'value'. Well-known key-value stores include Redis, Voldemort, and Dynamo."),Object(n.b)("h4",{id:"document-databases"},"Document Databases"),Object(n.b)("p",null,"In these databases, data is stored in documents (instead of rows and columns in a table) and these documents are grouped together in collections. Each document can have an entirely different structure. Document databases include the CouchDB and MongoDB."),Object(n.b)("h4",{id:"wide-column-databases"},"Wide-Column Databases"),Object(n.b)("p",null,"Instead of \u2018tables,\u2019 in columnar databases we have column families, which are containers for rows. Unlike relational databases, we don\u2019t need to know all the columns up front and each row doesn\u2019t have to have the same number of columns. Columnar databases are best suited for analyzing large datasets - big names include Cassandra and HBase."),Object(n.b)("h4",{id:"graph-databases"},"Graph Databases"),Object(n.b)("p",null,"These databases are used to store data whose relations are best represented in a graph. Data is saved in graph structures with nodes (entities), properties (information about the entities), and lines (connections between the entities). Examples of graph database include Neo4J and InfiniteGraph."),Object(n.b)("h3",{id:"high-level-differences-between-sql-and-nosql"},"High Level differences between SQL and NoSQL"),Object(n.b)("h4",{id:"db-storage"},"DB Storage"),Object(n.b)("p",null,"SQL stores data in tables where each row represents an entity and each column represents a data point about that entity."),Object(n.b)("p",null,"NoSQL databases have different data storage models. The main ones are key-value, document, graph, and columnar."),Object(n.b)("h4",{id:"db-schema"},"DB Schema"),Object(n.b)("p",null,"In SQL, each record conforms to a fixed schema, meaning the columns must be decided and chosen before data entry and each row must have data for each column. The schema can be altered later, but it involves modifying the whole database and going offline."),Object(n.b)("p",null,"In NoSQL, schemas are dynamic. Columns can be added on the fly and each 'row' (or equivalent) doesn\u2019t have to contain data for each 'column.'"),Object(n.b)("h4",{id:"db-querying"},"DB Querying"),Object(n.b)("p",null,"SQL databases use SQL (structured query language) for defining and manipulating the data, which is very powerful."),Object(n.b)("p",null,"In a NoSQL database, queries are focused on a collection of documents. Sometimes it is also called UnQL (Unstructured Query Language). Different databases have different syntax for using UnQL."),Object(n.b)("h4",{id:"db-scalability"},"DB Scalability"),Object(n.b)("p",null,"In most common situations, SQL databases are vertically scalable, i.e., by increasing the horsepower (higher Memory, CPU, etc.) of the hardware, which can get very expensive. It is possible to scale a relational database across multiple servers, but this is a challenging and time-consuming process."),Object(n.b)("p",null,"On the other hand, NoSQL databases are horizontally scalable, meaning we can add more servers easily in our NoSQL database infrastructure to handle a lot of traffic."),Object(n.b)("h4",{id:"reliability-or-acid-compliancy-atomicity-consistency-isolation-durability"},"Reliability or ACID Compliancy (Atomicity, Consistency, Isolation, Durability)"),Object(n.b)("p",null,"The vast majority of relational databases are ACID compliant. So, when it comes to data reliability and safe guarantee of performing transactions, SQL databases are still the better bet."),Object(n.b)("p",null,"Most of the NoSQL solutions sacrifice ACID compliance for performance and scalability."),Object(n.b)("h3",{id:"reasons-for-sql"},"Reasons for SQL"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ACID compliance"),Object(n.b)("li",{parentName:"ul"},"Structured and unchanging data")),Object(n.b)("h3",{id:"reasons-for-nosql"},"Reasons for NoSQL"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Prevent data from being the bottleneck (when all other components of the application are fast and seamless)"),Object(n.b)("li",{parentName:"ul"},"Storing large volumes of data that often have little to no structure - a NoSQL database sets no limits on the types of data we can store together and allows us to add new types as the need changes"),Object(n.b)("li",{parentName:"ul"},"Making the most of cloud computing and storage"),Object(n.b)("li",{parentName:"ul"},"Rapid development")),Object(n.b)("h2",{id:"cap-theorem"},"CAP Theorem"),Object(n.b)("p",null,'"Impossible for a distributed software system to simultaneously provide more than two out of three of the following guarantees."'),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Consistency"),Object(n.b)("li",{parentName:"ol"},"Availability"),Object(n.b)("li",{parentName:"ol"},"Partition Tolerance")),Object(n.b)("h3",{id:"examples-of-databases-and-what-they-provide"},"Examples of databases and what they provide"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Availability + Partition Tolerance: Cassandra, CouchDB"),Object(n.b)("li",{parentName:"ul"},"Availability + Consistency: RDBMS"),Object(n.b)("li",{parentName:"ul"},"Consistency + Partition Tolerance: BigTable, MongoDB, HBase")),Object(n.b)("h2",{id:"consistent-hashing"},"Consistent Hashing"),Object(n.b)("h3",{id:"dht"},"DHT"),Object(n.b)("p",null,"Distributed Hash Table (DHT) is one of the fundamental components used in distributed scalable systems. Hash Tables need a key, a value, and a hash function where hash function maps the key to a location where the value is stored."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"index = hashFunction(key)\n")),Object(n.b)("h3",{id:"key--n-issues"},"key % n issues"),Object(n.b)("p",null,"Suppose we are designing a distributed caching system. Given 'n' cache servers, an intuitive hash function would be 'key % n'. It is simple and commonly used. But it has two major drawbacks:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Not horizontally scalable - new cache hosts break all existing mappings."),Object(n.b)("li",{parentName:"ol"},"It may not be load balanced. For a caching system, this translates into some caches becoming hot and saturated while others idle and almost empty.")),Object(n.b)("h3",{id:"what-is-consistent-hashing"},"What is Consistent Hashing"),Object(n.b)("p",null,"Consistent hashing is a very useful strategy for distributed caching system and DHTs. It allows us to distribute data across a cluster in such a way that will minimize reorganization when nodes are added or removed. Hence, the caching system will be easier to scale up or scale down."),Object(n.b)("p",null,"When a hash table is resized, only ",Object(n.b)("inlineCode",{parentName:"p"},"k/n")," keys need to be remapped where ",Object(n.b)("inlineCode",{parentName:"p"},"k")," is the total number of keys and ",Object(n.b)("inlineCode",{parentName:"p"},"n")," the total number of servers."),Object(n.b)("p",null,"Note that in a caching system using the ",Object(n.b)("inlineCode",{parentName:"p"},"modulo")," as the hash function, all keys need to be remapped."),Object(n.b)("h3",{id:"how-does-consistent-hashing-work"},"How Does Consistent Hashing Work"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Given a list of cache servers, hash them to integers in the range."),Object(n.b)("li",{parentName:"ol"},"To map a key to a server:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Hash it to a single integer."),Object(n.b)("li",{parentName:"ul"},"Move clockwise on the ring until finding the first cache it encounters.")))),Object(n.b)("p",null,"That cache is the one that contains the key. See animation below as an example: key1 maps to cache A; key2 maps to cache C."),Object(n.b)("p",null,"To add a new server, say D, keys that were originally residing at C will be split. Some of them will be shifted to D, while other keys will not be touched."),Object(n.b)("p",null,"To remove a cache or, if a cache fails, say A, all keys that were originally mapped to A will fall into B, and only those keys need to be moved to B; other keys will not be affected."),Object(n.b)("p",null,"For load balancing, as we discussed in the beginning, the real data is essentially randomly distributed and thus may not be uniform. It may make the keys on caches unbalanced."),Object(n.b)("p",null,'To handle this issue, we add "virtual replicas" for caches. Instead of mapping each cache to a single point on the ring, we map it to multiple points on the ring, i.e. replicas. This way, each cache is associated with multiple portions of the ring.'),Object(n.b)("p",null,"If the hash function \u201cmixes well,\u201d as the number of replicas increases, the keys will be more balanced."),Object(n.b)("h2",{id:"long-polling-vs-websockets-vs-server-sent-events"},"Long-Polling vs WebSockets vs Server-Sent Events"),Object(n.b)("p",null,"This will cover:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Ajax Polling"),Object(n.b)("li",{parentName:"ol"},"HTTP Long-Polling"),Object(n.b)("li",{parentName:"ol"},"WebSockets"),Object(n.b)("li",{parentName:"ol"},"Server-Sent Events (SSEs)")),Object(n.b)("h3",{id:"ajax-polling"},"Ajax Polling"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The client opens a connection and requests data from the server using regular HTTP."),Object(n.b)("li",{parentName:"ol"},"The requested webpage sends requests to the server at regular intervals (e.g., 0.5 seconds)."),Object(n.b)("li",{parentName:"ol"},"The server calculates the response and sends it back, just like regular HTTP traffic."),Object(n.b)("li",{parentName:"ol"},"The client repeats the above three steps periodically to get updates from the server.")),Object(n.b)("p",null,"The problem with Ajax Polling is that the client has to keep asking the server for any new data. As a result, a lot of responses are empty, creating HTTP overhead."),Object(n.b)("h3",{id:"http-long-polling"},"HTTP Long-Polling"),Object(n.b)("p",null,'This is a variation of the traditional polling technique that allows the server to push information to a client whenever the data is available. With Long-Polling, the client requests information from the server exactly as in normal polling, but with the expectation that the server may not respond immediately. That\u2019s why this technique is sometimes referred to as a "Hanging GET".'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If the server does not have any data available for the client, instead of sending an empty response, the server holds the request and waits until some data becomes available."),Object(n.b)("li",{parentName:"ul"},"Once the data becomes available, a full response is sent to the client. The client then immediately re-request information from the server so that the server will almost always have an available waiting request that it can use to deliver data in response to an event.")),Object(n.b)("p",null,"HTTP Long-Polling Life Cycle:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The client makes an initial request using regular HTTP and then waits for a response."),Object(n.b)("li",{parentName:"ol"},"The server delays its response until an update is available or a timeout has occurred."),Object(n.b)("li",{parentName:"ol"},"When an update is available, the server sends a full response to the client."),Object(n.b)("li",{parentName:"ol"},"The client typically sends a new long-poll request, either immediately upon receiving a response or after a pause to allow an acceptable latency period."),Object(n.b)("li",{parentName:"ol"},"Each Long-Poll request has a timeout. The client has to reconnect periodically after the connection is closed due to timeouts.")),Object(n.b)("h3",{id:"websockets"},"WebSockets"),Object(n.b)("p",null,"WebSocket provides ",Object(n.b)("inlineCode",{parentName:"p"},"full duplex")," communication channels over a TCP connection."),Object(n.b)("p",null,"The client establishes a WebSocket connection through a process known as the WebSocket handshake. If the process succeeds, then the server and client can exchange data in both directions at any time."),Object(n.b)("p",null,"The WebSocket protocol enables communication between a client and a server with lower overheads, facilitating real-time data transfer from and to the server."),Object(n.b)("p",null,"This is made possible by providing a standardized way for the server to send content to the browser without being asked by the client and allowing for messages to be passed back and forth while keeping the connection open. In this way, a two-way (bi-directional) ongoing conversation can take place between a client and a server."),Object(n.b)("h3",{id:"server-sent-events-sses"},"Server-Sent Events (SSEs)"),Object(n.b)("p",null,"Under SSEs the client establishes a persistent and long-term connection with the server."),Object(n.b)("p",null,"The server uses this connection to send data to a client. If the client wants to send data to the server, it would require the use of another technology/protocol to do so."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Client requests data from a server using regular HTTP."),Object(n.b)("li",{parentName:"ol"},"The requested webpage opens a connection to the server."),Object(n.b)("li",{parentName:"ol"},"The server sends the data to the client whenever there\u2019s new information available.")),Object(n.b)("p",null,"SSEs are best when we need real-time traffic from the server to the client or if the server is generating data in a loop and will be sending multiple events to the client."))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/System-Design/Glossary.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-system-design-glossary.101a1afd2417ec7a4a77.js.map