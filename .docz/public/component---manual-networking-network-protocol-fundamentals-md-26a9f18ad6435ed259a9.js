(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{"l+pB":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),o=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Networking/Network-Protocol-Fundamentals.md"}});var s={_frontmatter:i},l=o.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,r({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"network-protocol-fundamentals"},"Network Protocol Fundamentals"),Object(n.b)("p",null,"Protocol = a set of rules. When we talk about network protocols, this means the formal standards and policies that define the way two or more devices communicate on a network."),Object(n.b)("p",null,"Early examples include telegrams, radio, etc."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Network communication happens at different levels or layers (OSI model and TCP/IP model)"),Object(n.b)("li",{parentName:"ul"},"Each layer of network communication is responsible for passing the information on to the next layer in the stack"),Object(n.b)("li",{parentName:"ul"},"Data transferred between layers in known as a Protocol Data Unit (PDU)"),Object(n.b)("li",{parentName:"ul"},"These network layers of communication allows for better troubleshooting"),Object(n.b)("li",{parentName:"ul"},"The rise of the internet and new technology has changed the way devices communicate with each other, new technologies sometimes require the development of new protocols"),Object(n.b)("li",{parentName:"ul"},"As protocols are created or improved, older protocols become outdated and unsecure")),Object(n.b)("h2",{id:"transmission-control-protocol-tcp"},"Transmission Control Protocol (TCP)"),Object(n.b)("p",null,"Used to ensure reliable end-to-end communication between network applications. Because of how reliably it handles network communication, TCP has become the default protocol for the majority of internet traffic."),Object(n.b)("p",null,'TCP breaks down application data into smaller pieces known as "segments", allowing information to be sent over networks more efficiently. Individual data segments contain sequence information that allows them to be sent out of order and reliably reassembled at the destination.'),Object(n.b)("p",null,"TCP also implements error handling and flow control to ensure that segments of data that fail to arrive at the destination are retransmitted and that the device receiving the transmission is not overloaded."),Object(n.b)("p",null,"All of these measures help to ensure the successful transmission is not overloaded. All of these measures help to ensure the successful transmission of data but increase the total overhead cost, which can slow the speed of transmission."),Object(n.b)("p",null,"Currently this is the price we pay for reliable communication."),Object(n.b)("h2",{id:"tcp-three-way-handshake"},"TCP Three-Way Handshake"),Object(n.b)("p",null,"Also known as SYN-SYN-ACK (synchronize-synchronize-acknowledgement)."),Object(n.b)("h3",{id:"tcp-event-process"},"TCP Event Process"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-text"}),"Host A sends a TCP SYNchronize packet to Host B\n\nHost B receives A's SYN\n\nHost B sends a SYNchronize-ACKnowledgement\n\nHost A receives B's SYN-ACK\n\nHost A sends ACKnowledge\n\nHost B receives ACK.\nTCP socket connection is ESTABLISHED.\n")),Object(n.b)("h2",{id:"protocols-encapsulated-in-tcp"},"Protocols Encapsulated in TCP"),Object(n.b)("p",null,"Note that FTP, Telnet, HTTP, HTTPS, SMTP, POP3, IMAP, SSH and any other protocol that rides over TCP also has a three way handshake performed as connection is opened. HTTP web requests, SMTP emails, FTP file transfers all manage the messages they each send. TCP handles the transmission of those messages."),Object(n.b)("p",null,"TCP 'rides' on top of Internet Protocol (IP) in the protocol stack, which is why the combined pair of Internet protocols is called TCP/IP (TCP over IP). TCP segments are passed inside the payload section of the IP packets. IP handles IP addressing and routing and gets the packets from one place to another, but TCP manages the actual communication sockets between endpoints (computers at either end of the network or internet connection)."),Object(n.b)("h2",{id:"tcp-functions-and-services"},"TCP Functions and Services"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reliable end-to-end communication"),Object(n.b)("li",{parentName:"ul"},"Segmentation"),Object(n.b)("li",{parentName:"ul"},"Sequencing"),Object(n.b)("li",{parentName:"ul"},"Reassembly"),Object(n.b)("li",{parentName:"ul"},"Error handling"),Object(n.b)("li",{parentName:"ul"},"Retransmission"),Object(n.b)("li",{parentName:"ul"},"Flow control")),Object(n.b)("h2",{id:"tcp-header-format"},"TCP Header Format"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Source Port Address: A 16-bit field that contains the port address of the sender"),Object(n.b)("li",{parentName:"ul"},"Destination Port Address: A 16-bit field that contains the port address of the recipient"),Object(n.b)("li",{parentName:"ul"},"Sequence Number: 32-bit field that holds the sequence number (the byte number of the first byte of data being sent in the TCP packet) - when connection is first established via a SYN message, the initial sequence number (ISN) i s set. The ISN can be any number from 0 to 4,294,967,295. The actual data begins at ISN + 1."),Object(n.b)("li",{parentName:"ul"},"Acknowledgement Number: 32-bit field that indicates the next sequence number (or byte number) that the sender of the ACK should expect."),Object(n.b)("li",{parentName:"ul"},"Header Length (HLEN) or Data Offset: A 4-bit field that indicates the size or length of the TCP header in 4-byte (or 32-bit) words in the header. Minimum length the header can be is 20 bytes, and the maximum length is 60 bytes."),Object(n.b)("li",{parentName:"ul"},"Reserved: This 3-bit section has been included for future use but should be set to zero"),Object(n.b)("li",{parentName:"ul"},"Control Flags: A set of 6 standard and 3 extended control bits (1 bit each) that manage the flow of data.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Standard Control Flags:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"TO DO"))),Object(n.b)("li",{parentName:"ul"},"Explicit Congestion Notification (ECN): Extension to TCP that allows for notification of network congestion without packet loss:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"TO DO"))))),Object(n.b)("li",{parentName:"ul"},"Window Size: 16-bit field that indicates the size (number of bytes) the sender of the segment is willing to accept"),Object(n.b)("li",{parentName:"ul"},"Checksum: 16-bit checmsum field that is used to check for errors in the entire TCP segment (header, payload, etc)"),Object(n.b)("li",{parentName:"ul"},"Urgent Pointer: A 16-bit field that flags data that needs to reach the destination as early as possible. This field is only valid if the URG control flag is set."),Object(n.b)("li",{parentName:"ul"},"Options and Padding: A 32-bit field that allows you to configure additional options for the TCP segment (eg maximum segment size). Padding (made up of zeroes) may be required to ensure that the header ends and the data begins on a 32-bit boundary")),Object(n.b)("h2",{id:"user-datagram-protocol-udp"},"User Datagram Protocol (UDP)"),Object(n.b)("p",null,"Simple, high-speed communication protocol that does not conduct error checks or retransmit data segments that fail to arrive at their destination."),Object(n.b)("p",null,"UDP is a message-orientated protocol, meaning it breaks data up into distinct chunks or groups (unlike stream-orientated protocols, which transmit data in a continuous flow, byte by byte). UDP preserves the boundaries of the messages that it receives from applications; it does not break down data before sending it (unlike TCP)."),Object(n.b)("p",null,"Messages are simply given a UDP header and then passed on. Another difference between UDP and TCP is that UDP is a connectionless protocol. UDP does not create a connection with the receiving device; it simply transmits the data to the end point."),Object(n.b)("p",null,"This lack of connection, combined with thelack of error checking/control, makes UDP an unreliable means of transmission. Although it is less reliable than TCP, UDP is much faster at transmitting data, due to the lack of overhead. This faster transmission speed is preferred in applications that can tolerate some data loss (eg VoIP, online gaming, etc)."),Object(n.b)("h2",{id:"udp-functions-and-services"},"UDP Functions and Services"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Connectionless protocol"),Object(n.b)("li",{parentName:"ul"},"Message-oriented protocol"),Object(n.b)("li",{parentName:"ul"},"Preserves message boundaries"),Object(n.b)("li",{parentName:"ul"},"Does not require acknowledgement that data is received (fire and forget)"),Object(n.b)("li",{parentName:"ul"},"Applications can provide reliability"),Object(n.b)("li",{parentName:"ul"},"Low bandwidth overhead and latency"),Object(n.b)("li",{parentName:"ul"},"Used for simple transactions (eg DNS and NTP)")),Object(n.b)("h2",{id:"udp-header-format"},"UDP Header Format"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Source port number: specifies sender port (optional in IPv4 and IPv6)"),Object(n.b)("li",{parentName:"ul"},"Destination port number: receiver port"),Object(n.b)("li",{parentName:"ul"},"Length: Specifies length of header and data"),Object(n.b)("li",{parentName:"ul"},"Checksum: Used to perform error checking on the header and data (optional with IPv4, required in IPv6)")),Object(n.b)("h2",{id:"the-internet-protocol-ip"},"The Internet Protocol (IP)"),Object(n.b)("p",null,"Provides addressing and routing that allows data to be sent across one or more networks."),Object(n.b)("p",null,'Data broken up into smaller units called "packets". Each packet is supplied with header information that contains the addresses of both source and destination.'),Object(n.b)("p",null,"Several network devices help facilitate the flow of traffic (NICs, switches, routers, etc) but would be useful without the agreed-upon standards set by the IP. This protocol provides a common foundation that lets computers and other network devices communicate over local networks and the open internet."),Object(n.b)("p",null,'Routing: Besides addressing, routing is one of the main functions of the IP. Routing is used to forward IP packets across multiple networks between a source and a destination. When an IP packet needs to be sent, a router uses a routing algorithm and the information in its routing table to determine where to send the packet next. Each router that the packet travels through is called a "hop".'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Routing table"),Object(n.b)("li",{parentName:"ul"},"Routing protocols (eg OSPF, BGP, etc)"),Object(n.b)("li",{parentName:"ul"},"Routing algorithms (IP forwarding algorithm)"),Object(n.b)("li",{parentName:"ul"},"Next hop")),Object(n.b)("h2",{id:"simple-network-management-protocol-snmp"},"Simple Network Management Protocol (SNMP)"),Object(n.b)("p",null,"Used for monitoring and managing a wide array of devices on a network."),Object(n.b)("p",null,'An SNMP-managed network consists of the Network Management System (NMS) which runs on the manager, agents, which run on network devices, and the network devices themselves (known as "managed devices").'),Object(n.b)("p",null,"Most network devices support SNMP, but the protocol and the agent that runs on a managed device must be enabled. Agents collect information about the device and then pass it to the manager."),Object(n.b)("p",null,"Some Network Management Systems let you change device configurations, which is helpful when managing a large-scale network that includes many devices. In short, SNMP provides a common language and set of standards that enables network devices - regardless of type and manufacturer - to relay management information."),Object(n.b)("h2",{id:"components-of-an-snmp-managed-network"},"Components of an SNMP-Managed Network"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Managed devices or resources"),Object(n.b)("li",{parentName:"ul"},"SNMP agent"),Object(n.b)("li",{parentName:"ul"},"SNMP manager (Network Management System)"),Object(n.b)("li",{parentName:"ul"},"Management Information Base (MIB)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Object Identifier (OID): Unique ID for objects stored in the MIB."),Object(n.b)("li",{parentName:"ul"},"Structure of Management Information (SMI): Establishes naming conventions, definitions, and ecnoding methods for objects in the MIB."),Object(n.b)("li",{parentName:"ul"},"Scalar Object: Defines a single object instance"),Object(n.b)("li",{parentName:"ul"},"Tabular Object: Defines multiple related obkects that are grouped into an MIB table"),Object(n.b)("li",{parentName:"ul"},"MIB Browser: Helps with locating non-standard, specific objects in the MIB")))),Object(n.b)("h2",{id:"snmp-pdu-types"},"SNMP PDU Types"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GetRequest"),Object(n.b)("li",{parentName:"ul"},"SetRequest"),Object(n.b)("li",{parentName:"ul"},"GetNextRequest"),Object(n.b)("li",{parentName:"ul"},"GetBulkRequest (added in v2)"),Object(n.b)("li",{parentName:"ul"},"Response"),Object(n.b)("li",{parentName:"ul"},"Trap"),Object(n.b)("li",{parentName:"ul"},"InformRequest (added in v2)")),Object(n.b)("h2",{id:"domain-name-system-dns"},"Domain Name System (DNS)"),Object(n.b)("p",null,'DNS maps domain names to their corresponding IP addresses. The system consists of a server or group of servers that stores information witin a database (typically "zone file" - structured text file).'),Object(n.b)("p",null,"Clients query these servers with requests to access specific domains or addresses, and their requests are directed to the intended destination."),Object(n.b)("p",null,'The DNS hierarchy starts with root name servers, which contain information about top-level domains (TLDs) like ".com", and continues down to the authoritative name servers for a particular domain.'),Object(n.b)("p",null,"Information is distributed across these hierarchy levels in order to reduce the load on the root name servers and adapt to the ever-changing internet landscape."),Object(n.b)("h2",{id:"resource-record-rr"},"Resource Record (RR)"),Object(n.b)("p",null,'Resource record is an entry in a DNS database that provides information about a particular resource. Groups of resource records of the same type are called an "RRset".'),Object(n.b)("p",null,"Resource records follow a common format that provides information about each record:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"NAME: The name of the associated node for the record."),Object(n.b)("li",{parentName:"ul"},"TYPE: The type of record (indicated by a number)."),Object(n.b)("li",{parentName:"ul"},"CLASS: Defines the protocol family that is used for the record."),Object(n.b)("li",{parentName:"ul"},"TTL (time to live): Specifies how long a resource record will be cached."),Object(n.b)("li",{parentName:"ul"},"RDLENGTH: Specifies the length of the RDATA field."),Object(n.b)("li",{parentName:"ul"},"RDATA: Contains any type-specific data defined in the TYPE and CLASS fields.")),Object(n.b)("h2",{id:"dns-record-types"},"DNS Record Types"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SOA (Statement of Authority): Gives info about DNS zone and other DNS records."),Object(n.b)("li",{parentName:"ul"},"A/AAAA (Address): Maps a domain or subdomain name to an IP address (or IPv6 address, in the case of the AAAA record)."),Object(n.b)("li",{parentName:"ul"},"MX (Mail Exchanger): Directs email to a particular mail server."),Object(n.b)("li",{parentName:"ul"},"NS (Name Server): Usually set with a registrar, delegates a domain or subdomain to a set of DNS servers."),Object(n.b)("li",{parentName:"ul"},"PTR (Pointer): Performs a reverse lookup, which maps an IP address to a hostname or domain name."),Object(n.b)("li",{parentName:"ul"},"CNAME (Canonical Name): Redirects one domain to another and allows multiple names to map to a single A record."),Object(n.b)("li",{parentName:"ul"},"CERT (Certificate): Stores certificates in DNS, which provides authenticity for domain names."),Object(n.b)("li",{parentName:"ul"},"TXT (Text): Contains information about a domain or subdomain."),Object(n.b)("li",{parentName:"ul"},"SRV (Service): Provides ability to define a port and hostname for a service.")),Object(n.b)("h2",{id:"dynamic-host-configuration-protocol-dhcp"},"Dynamic Host Configuration Protocol (DHCP)"),Object(n.b)("p",null,"The Dynamic Host Configuration Protocol (DHCP) automatically and dynamically assigns IP addresses and other network configurations to devices on an IP network."),Object(n.b)("p",null,"DHCP operates on a client-server model, which allows network devices (clients) to reach out to a DHCP server to obtain their IP config."),Object(n.b)("p",null,"These requests are made in conjuction with the connectionless User Datagram Protocol (UDP), which provides fast and efficient communication."),Object(n.b)("p",null,"With a growing number of devices connected to the internet (each one requiring a unique IP address), it's becoming increasingly difficult to manage the assignment of IP addresses. It's one of the reasons that DHCP is so important."),Object(n.b)("p",null,"It automates the process of assigning IP addresses, eliminating the need to manually assign individual IP addresses to each device."),Object(n.b)("h3",{id:"dhcp-allocation"},"DHCP Allocation"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Dynamic: IP addresses are assigned to DHCP clients for a specific time period and can be repurposed after the time period runs out."),Object(n.b)("li",{parentName:"ul"},"Automatic: IP addresses are permanently assigned to DHCP clients and cannot be repurposed."),Object(n.b)("li",{parentName:"ul"},"Manual (or Static): IP addresses are issued based on a client ID (such as a MAC address) that has been predefined by the administrator.")),Object(n.b)("h3",{id:"dhcp-operation"},"DHCP Operation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"DHCPDISCOVER (client to server)"),Object(n.b)("li",{parentName:"ol"},"DHCPOFFER (server to client)"),Object(n.b)("li",{parentName:"ol"},"DHCPREQUEST (client to server)"),Object(n.b)("li",{parentName:"ol"},"DHCPACK (server to client)")),Object(n.b)("h2",{id:"file-transfer-protocol-ftp"},"File Transfer Protocol (FTP)"),Object(n.b)("p",null,"Used to transport files between a client and server over a network via TCP. In addition to file transfers, FTP also enables clients to run command on the files and directories hosted by a server."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"    random port 1 == control connection ==> port 21\nFTP CLIENT                                      FTP SERVER\n    random port 2 <== data connection == (active) Port 20\n")),Object(n.b)("h3",{id:"communication-channels"},"Communication Channels"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Control Connection: handles control information"),Object(n.b)("li",{parentName:"ul"},"Data Connection: Handles the tranfer of the actual file")),Object(n.b)("h3",{id:"transfer-modes"},"Transfer Modes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Active: The client opens a command/control connection to the server from a random port to port 21 on the server. The server opens a data connection from port 20 to a random port on the client."),Object(n.b)("li",{parentName:"ul"},"Passive: The client opens a command/control connection to the server from a random port to port 21 on the server. Client opens a data connection from a random port on the client to a random port on the server (port chosen by server).")),Object(n.b)("h3",{id:"ftp-command-examples"},"FTP Command Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"RETR: Retrieves a copy of a file"),Object(n.b)("li",{parentName:"ul"},"PASS: Sends the user's password to the server"),Object(n.b)("li",{parentName:"ul"},"MKD: Creates a directory"),Object(n.b)("li",{parentName:"ul"},"LIST: Lists the files of a directory"),Object(n.b)("li",{parentName:"ul"},"QUIT: Closes the connection")),Object(n.b)("h3",{id:"ftp-reply-examples"},"FTP Reply Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"200: Command okay"),Object(n.b)("li",{parentName:"ul"},"530: Not logged in"),Object(n.b)("li",{parentName:"ul"},"503: Bad sequence of commands"),Object(n.b)("li",{parentName:"ul"},"430: Invalid username or password"),Object(n.b)("li",{parentName:"ul"},"213: File status")),Object(n.b)("h3",{id:"anonymous-ftp"},"Anonymous FTP"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Files are available for public access"),Object(n.b)("li",{parentName:"ul"},"Access is limited"),Object(n.b)("li",{parentName:"ul"},"Username and password are not required")),Object(n.b)("h3",{id:"file-transfer-protocol-secure-ftps"},"File Transfer Protocol Secure (FTPS)"),Object(n.b)("p",null,"Adds a layer of security to the FTP connection by applying the Transport Layer Security (TLS) protocol. This security can be applied to both the command and data connections, or jsut to the data connection. TLS can be applied by requiring a user ID and password, a valid certificate, or both."),Object(n.b)("h3",{id:"ssh-file-transfer-protocol-sftp"},"SSH File Transfer Protocol (SFTP)"),Object(n.b)("p",null,"Unlike FTPS, SFTP is a completely different protocol that is based on the SSH protocol. SFTP uses a single connection instead of the two connections - command and data - that are implemented by FTP/FTPS. SFTP improves security by using encrypted credentials (username and password) and can be further secured by requiring SSH keys."),Object(n.b)("h3",{id:"secure-copy-protocol-scp"},"Secure Copy Protocol (SCP)"),Object(n.b)("p",null,"SCP is another network protocol used for transferring files and, like SFTP, is based on the SSH protocol. SCP is also a program that can be used to securely copy files with the Secure Copy Protocol. The SCP process functions in one of the two modes:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Source Mode: Client copies file from a remote host."),Object(n.b)("li",{parentName:"ol"},"Sink Mode: Client sends a copy of a file to a remote host.")),Object(n.b)("h2",{id:"network-file-system-nfs"},"Network File System (NFS)"),Object(n.b)("p",null,"Implements a client-server model that allows multiple hosts (clients) to attach to shared file systems and storage provided by the NFS server."),Object(n.b)("h2",{id:"internet-small-computer-systems-interface-iscsi"},"Internet Small Computer Systems Interface (iSCSI)"),Object(n.b)("p",null,"Network storage protocol that provides access to bloc-level storage devices between a client and a server by enabling SCSI command to be sent over a network."),Object(n.b)("h3",{id:"iscsi-naming-and-addressing"},"iSCSI Naming and Addressing"),Object(n.b)("p",null,"IQN (iSCSI Qualified Name): The IQN is a unique name that identifies an iSCSI node."),Object(n.b)("p",null,"The IQN takes the following format: iqn.yyyy-mm.naming_authority:unique_name."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'"iqn"'),Object(n.b)("li",{parentName:"ul"},"yyyy-mm: The month and year that the naming authority was established"),Object(n.b)("li",{parentName:"ul"},"naming_authority: The domain name of the naming authority (typically in reverse syntax)"),Object(n.b)("li",{parentName:"ul"},"unique_name: A unique name chosen by the admin")),Object(n.b)("h2",{id:"server-message-block-smb"},"Server Message Block (SMB)"),Object(n.b)("p",null,"Used primarily by Windows-based computers and allows files, printers and serial ports to be shared over a network. SMB is a request-response protocol, meaning a client sends an SMB request to a server and then the server sends an SMB response to the client."),Object(n.b)("h3",{id:"smb-message-structure"},"SMB Message Structure"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Header (fixed length)"),Object(n.b)("li",{parentName:"ul"},"Parameter block (variable length)"),Object(n.b)("li",{parentName:"ul"},"Data block (variable length)")),Object(n.b)("h3",{id:"common-internet-file-system-cifs"},"Common Internet File System (CIFS)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"File-sharing protocol"),Object(n.b)("li",{parentName:"ul"},"Implementation of SMB"),Object(n.b)("li",{parentName:"ul"},"Has been made obsolete by newer versions of SMB")),Object(n.b)("h3",{id:"samba"},"Samba"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Collection of software based on the SMB protocol"),Object(n.b)("li",{parentName:"ul"},"Follows a client-server model"),Object(n.b)("li",{parentName:"ul"},"Provides several network-related services:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"File and print sharing"),Object(n.b)("li",{parentName:"ul"},"Authentication and authorization"),Object(n.b)("li",{parentName:"ul"},"Name resolution"),Object(n.b)("li",{parentName:"ul"},"Service announcement (browsing)"))),Object(n.b)("li",{parentName:"ul"},"Allows Linux/Unix servers to integrate into a Windows environment")),Object(n.b)("h2",{id:"secure-shell-protocol"},"Secure Shell Protocol"),Object(n.b)("p",null,"SSH is a cryptographic protocol that establishes a secure connection between a client and a server that enables users to perform various network-related tasks (eg remote login, remote command execution)."),Object(n.b)("h3",{id:"session-steps"},"Session Steps"),Object(n.b)("p",null,"Port 22 on both SSH clients."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Establish secure connection"),Object(n.b)("li",{parentName:"ol"},"Authenticate server"),Object(n.b)("li",{parentName:"ol"},"Authenticate client"),Object(n.b)("li",{parentName:"ol"},"Encrypted session")),Object(n.b)("h3",{id:"service-and-functions"},"Service and Functions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Remote login"),Object(n.b)("li",{parentName:"ul"},"Remote command execution"),Object(n.b)("li",{parentName:"ul"},"Forwards TCP ports"),Object(n.b)("li",{parentName:"ul"},"Tunneling"),Object(n.b)("li",{parentName:"ul"},"Provides graphical interfaces through X11"),Object(n.b)("li",{parentName:"ul"},"Transfer files through SFTP or SCP")),Object(n.b)("h3",{id:"ssh-architecture-layers"},"SSH Architecture Layers"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Transport layer",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Key exchange"),Object(n.b)("li",{parentName:"ul"},"Encryption"),Object(n.b)("li",{parentName:"ul"},"Message Authentication Code (MAC)"),Object(n.b)("li",{parentName:"ul"},"Compression"))),Object(n.b)("li",{parentName:"ul"},"User authentication layer",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Username/password"),Object(n.b)("li",{parentName:"ul"},"Public keys"))),Object(n.b)("li",{parentName:"ul"},"Connection layer")),Object(n.b)("h3",{id:"ssh-encryption"},"SSH Encryption"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Symmetrical"),Object(n.b)("li",{parentName:"ul"},"Asymmetrical"),Object(n.b)("li",{parentName:"ul"},"Hashing")),Object(n.b)("h3",{id:"ssh-message-format"},"SSH Message Format"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Length: The length of the message in bytes"),Object(n.b)("li",{parentName:"ul"},"Padding length: The number of random bytes added to the end of the message"),Object(n.b)("li",{parentName:"ul"},"Payload: The actual data sent by the user"),Object(n.b)("li",{parentName:"ul"},"Random padding: The random bytes added to ensure that the message is a multiple of the block size used by the encryption algorithm (will be at least four)"),Object(n.b)("li",{parentName:"ul"},"Message Authentication Code (MAC): This field is present if the Mesage Authentication Code has been negotiated for a the session (strongly recommended but not required)")),Object(n.b)("h3",{id:"telnet-terminal-network"},"Telnet (Terminal Network)"),Object(n.b)("p",null,"Allows users to access a remote host via a text-based interface (eg the command line). Telnet provides two-way communication through a virtual terminal. Although it is still in use today, Telnet has largely been replaced by more secure forms of remote login and communication (eg SSH)."),Object(n.b)("h3",{id:"putty"},"PuTTY"),Object(n.b)("p",null,"Open-source application that supports multiple network protocols (eg SSH, SCP, Telnet) and was originally developed for Windows. This application provides Windows-based computers an SSH client that allows them to copy files and perform remote logins from Linux hosts."),Object(n.b)("h3",{id:"remote-desktop-protocol-rdp"},"Remote Desktop Protocol (RDP)"),Object(n.b)("p",null,"Provides a graphical interface and input capabilities for accessing remote hosts over a network. Although it was originally developed by Microsoft, there are now clients for most other operating systems."),Object(n.b)("h2",{id:"email-protocols"},"Email Protocols"),Object(n.b)("p",null,"Establishes the set of rules and standards that allow email to be transferred between two hosts. These include protocols that are used for sending emails (eg SMTP) and protocols that are responsible for accessing or downloading emails (IMAP and POP3)."),Object(n.b)("p",null,"The request to send an email goes to the sender's mail server, which is responsible for transmitting the email to the recipient's mail server."),Object(n.b)("p",null,"Depending on the protocol that is being implemented, the email will either be downloaded to the recipient's local machine or stored on the mail server."),Object(n.b)("h3",{id:"simple-mail-transfer-protocol-smtp"},"Simple Mail Transfer Protocol (SMTP)"),Object(n.b)("p",null,"The Simple Mail Transfer Protocol (SMTP) is the standard protocol for sending emails via the internet. SMTP is a simple, text-based protocol, meaning that its content is in a human-readable format (unlike binary protocols). Although SMTP is the standard protocol for sending emails, it cannot be used to receive messages."),Object(n.b)("h3",{id:"basic-smtp-commands"},"Basic SMTP Commands"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"HELO: Identifies the client and begins the SMTP conversation"),Object(n.b)("li",{parentName:"ul"},"MAIL FROM: Specifies the sender's email address"),Object(n.b)("li",{parentName:"ul"},"RCTP TO: Specifies the recipient's email address"),Object(n.b)("li",{parentName:"ul"},"QUIT: Requests that the connection be closed"),Object(n.b)("li",{parentName:"ul"},"DATA: Signals the beginning of the message text and includes the message content (header and body)")),Object(n.b)("h3",{id:"post-office-protocol-v3-pop3"},"Post Office Protocol v3 (POP3)"),Object(n.b)("p",null,"A standard mail protocol that is used to fetch emails from a remote server to a local email client. POP3 protocol enables the client to download emails from the mail server to a local computer."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"USER: Specifies the client's username"),Object(n.b)("li",{parentName:"ul"},"PASS: Specifies the client's password"),Object(n.b)("li",{parentName:"ul"},"STAT: Requests the number and size of messages"),Object(n.b)("li",{parentName:"ul"},"LIST: Displays a summary of the messages"),Object(n.b)("li",{parentName:"ul"},"RETR: Retrieves the specified messages"),Object(n.b)("li",{parentName:"ul"},"DELE: Deletes the specified messages"),Object(n.b)("li",{parentName:"ul"},"QUIT: Closes the connection")),Object(n.b)("h3",{id:"internet-message-access-protocol-imap"},"Internet Message Access Protocol (IMAP)"),Object(n.b)("p",null,"IMAP is used to access emails stored on a remote mail server from a local client. Unlike POP3, IMAP allows the user to interact with emails directly on the mail server in addition to downloading them locally. This allows multiple clients to access the same message stores."),Object(n.b)("h3",{id:"basic-imap-commands"},"Basic IMAP Commands"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"LOGIN: Log in with the client username and password"),Object(n.b)("li",{parentName:"ul"},"LIST: List mailboxes and folders"),Object(n.b)("li",{parentName:"ul"},"CREATE: Create a mailbox"),Object(n.b)("li",{parentName:"ul"},"DELETE: Delete a mailbox"),Object(n.b)("li",{parentName:"ul"},"RENAME: Rename a folder or mailbox"),Object(n.b)("li",{parentName:"ul"},"FETCH: Retrieve message content"),Object(n.b)("li",{parentName:"ul"},"SEARCH: Search the mailboxes for messages that meet the search criteria"),Object(n.b)("li",{parentName:"ul"},"LOGOUT: Close the connection with the mail server")),Object(n.b)("h3",{id:"imap-features"},"IMAP Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Supports concurrent client access"),Object(n.b)("li",{parentName:"ul"},"Supports multiple mailboxes"),Object(n.b)("li",{parentName:"ul"},"Supports shared mailboxes"),Object(n.b)("li",{parentName:"ul"},"Provides mailbox management"),Object(n.b)("li",{parentName:"ul"},"Provides sort and search capabilities"),Object(n.b)("li",{parentName:"ul"},"Allows messages to be downloaded on demand"),Object(n.b)("li",{parentName:"ul"},"Provides message state information")),Object(n.b)("h2",{id:"hypertext-transfer-protocol-http"},"Hypertext Transfer Protocol (HTTP)"),Object(n.b)("p",null,"Foundational protocol for accessing and transferring data on the World Wide Web. HTTP allows users to retrieve HTML (Hypertext Markup Language) filesm which contain hyperlinks to other hypertext documents. Hyperlinks are clickable resources that link users to resources located on different websites, which are identified by their URL (Uniform Resource Locator)."),Object(n.b)("h3",{id:"http-function-and-features"},"HTTP Function and Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Connectionless"),Object(n.b)("li",{parentName:"ul"},"Stateless"),Object(n.b)("li",{parentName:"ul"},"Human-readable"),Object(n.b)("li",{parentName:"ul"},"Media independent"),Object(n.b)("li",{parentName:"ul"},"Client-server model"),Object(n.b)("li",{parentName:"ul"},"Request-response model")),Object(n.b)("h3",{id:"components"},"Components"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Web Client: Application that enables user to send HTTP requests to an HTTP server. Most common type of web (or HTTP) client is a web browser"),Object(n.b)("li",{parentName:"ul"},'Web Server: The term "web server" can refer to either the physical (or virtual) machine that hosts the web server software, or to the software itself. The web server software - an HTTP server - handles HTTP requests and delivers web pages to clients. These resources are requested when the client supplies a URL, which contains a path to the specified resource. The HTTP server is configured to map specific paths to specific resources.'),Object(n.b)("li",{parentName:"ul"},"Web Proxy: Intermediary between a client and the open internet. Proxy server receives HTTP requests and then makes those requests on behalf of the client. In addition to serving as a proxy for client requests to the open internet, the proxy server can also be used to intercept requests before they reach a web server (reverse proxy).")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Networking/Network-Protocol-Fundamentals.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-networking-network-protocol-fundamentals-md-26a9f18ad6435ed259a9.js.map