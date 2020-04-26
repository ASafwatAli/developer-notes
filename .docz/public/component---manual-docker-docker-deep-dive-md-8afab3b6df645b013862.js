(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{"3UY+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Docker/Docker-Deep-Dive.md"}});var c={_frontmatter:i},l=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"docker-deep-dive"},"Docker Deep Dive"),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#docker-deep-dive"}),"Docker Deep Dive")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#docker-basics"}),"Docker Basics"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----working-with-multiple-images"}),"---- Working with Multiple Images")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----packaging-a-customized-container"}),"---- Packaging A Customized Container")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----container-commands"}),"---- Container Commands")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----exposing-ports"}),"---- Exposing ports")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#the-dockerfile-builds-and-network-configuration"}),"The Dockerfile, Builds and Network Configuration"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----user-and-run"}),"---- USER and RUN")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----env"}),"---- ENV")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----cmd-vs-run"}),"---- CMD vs RUN")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----entrypoint"}),"---- ENTRYPOINT")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----expose"}),"---- EXPOSE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----container-volume-management"}),"---- Container Volume Management")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----docker-network-list-and-inspect"}),"---- Docker Network: List and Inspect")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----docker-network-assign-to-containers"}),"---- Docker Network: Assign to Containers")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#docker-commands-and-structures"}),"Docker commands and structures"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----inspect-container-processes"}),"---- Inspect Container Processes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----previous-container-management"}),"---- Previous Container Management")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----controlling-port-exposure-on-containers"}),"---- Controlling Port Exposure on Containers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----naming-containers"}),"---- Naming Containers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----docker-events"}),"---- Docker Events")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----managing-and-removing-base-images"}),"---- Managing and Removing Base Images")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----saving-and-loading-docker-images"}),"---- Saving and Loading Docker Images")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----image-history"}),"---- Image History")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----take-control-of-our-tags"}),"---- Take Control of Our Tags")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----pushing-to-docker-hub"}),"---- Pushing to Docker Hub")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#integration-and-use-cases"}),"Integration and Use Cases"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----building-a-web-farm-for-development-and-testing"}),"---- Building a Web Farm for Development and Testing"))))),Object(a.b)("h2",{id:"docker-basics"},"Docker Basics"),Object(a.b)("h2",{id:"working-with-multiple-images"},"Working with Multiple Images"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# i: interactive, t: tty, d: daemon mode\ndocker run -i -t -d ubuntu:latest /bin/bash\n\n# to attach to the container and edit the container\ndocker attach container_name\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"packaging-a-customized-container"},"Packaging A Customized Container"),Object(a.b)("p",null,"Once you are attached to a container, anytime you create files, it is now part of that container!"),Object(a.b)("p",null,"You can do all of your updates etc."),Object(a.b)("p",null,"From here, we can commit to create a base image."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'docker commit -m "This is a new image" -a "dennis@presentcompany.co" dok/ubusshd:v1\n')),Object(a.b)("p",null,"Once this is commited, it is now put to a base container! Yay!"),Object(a.b)("p",null,"Let's create a simple Dockerfile to give some info about us."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Dockerfile - example Ubuntu example with SSH already installed\nFROM ubuntu:latest\nMAINTAINER okeeffed <dennis@presentcompany.co>\nRUN apt-get update\nRUN apt-get -y install telnet openssh-server\n")),Object(a.b)("p",null,"For building:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'# build a Dockerfile from the current location\ndocker build -t="dok/ubusshdonly:v2" .\n')),Object(a.b)("h2",{id:"container-commands"},"Container Commands"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'top # shows the processes\ndocker logs container_name #shows history for container\ndocker exec container name /bin/cat /etc/profile\n\ndocker run container name /bin/bash -c "while true; do echo HELLO; sleep 1; done"\n')),Object(a.b)("h2",{id:"exposing-ports"},"Exposing ports"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"docker run -d -p 80:80 nginx:latest\n")),Object(a.b)("h2",{id:"the-dockerfile-builds-and-network-configuration"},"The Dockerfile, Builds and Network Configuration"),Object(a.b)("h2",{id:"user-and-run"},"USER and RUN"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Dockerfile based on the latest CentOS 7 image - non-priviledged user entry\nMAINTAINER dok@email.com\nFROM centos:latest\n\nRUN useradd -ms /bin/bash user\nUSER user\n")),Object(a.b)("p",null,"To connect as the root, you just need to start the container and run ",Object(a.b)("inlineCode",{parentName:"p"},"docker exec -u 0 -it sleepy_allen /bin/bash")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Order of Execution")),Object(a.b)("p",null,"We had to run a super user command to add the User. Now let's say we want to run another command."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Dockerfile based on the latest CentOS 7 image - non-priviledged user entry\nMAINTAINER dok@email.com\nFROM centos:latest\n\nRUN useradd -ms /bin/bash user\n\n# this will not give an issue - order of execution MATTERS\nRUN echo 'EXPORT 129.168.0.0/24' >> /etc/exports.list # making up exports.list\n\nUSER user\n\n# below will give an issue - order of execution MATTERS\nRUN echo 'EXPORT 129.168.0.0/24' >> /etc/exports.list # making up exports.list\n")),Object(a.b)("h2",{id:"env"},"ENV"),Object(a.b)("p",null,"Example, let's install Java through the Dockerfile!"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'# Dockerfile based on the latest CentOS 7 image - non-priviledged user entry\nMAINTAINER dok@email.com\nFROM centos:latest\n\nRUN useradd -ms /bin/bash user\n\n# this will not give an issue - order of execution MATTERS\nRUN echo \'EXPORT 129.168.0.0/24\' >> /etc/exports.list # making up exports.list\n\nRUN yum update -y\nRUN yum install -y net-tools wget\n\nRUN cd ~ && wget --no-cookies --no-check-certificate --header "url"\n\nRUN yum localinstall -y ~/java_file.rpm\n\nUSER user\n\nRUN cd ~ && echo "export JAVA_HOME=/usr/java/jdk1.8.0/jre" >> /home/user/.bashrc\n\n# generates env variable for everyone\nENV JAVA_BIN /usr/java/jdk1.8.0/jre/bin\n')),Object(a.b)("h2",{id:"cmd-vs-run"},"CMD vs RUN"),Object(a.b)("p",null,"Command generally sets the default command to run when there is nothing specified when container starts up."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Dockerfile based on the latest CentOS 7 image - non-priviledged user entry\nMAINTAINER dok@email.com\nFROM centos:latest\n\nRUN useradd -ms /bin/bash user\n\nCMD 'echo' 'This is a custom container message'\n\nUSER user\n")),Object(a.b)("h2",{id:"entrypoint"},"ENTRYPOINT"),Object(a.b)("p",null,"The entrypoint itself will ALWAYS be the concrete default application everytime that the container is created."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"CMD")," will only run when there is no argument, whereas ",Object(a.b)("inlineCode",{parentName:"p"},"ENTRYPOINT")," will always run."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'FROM centos:latest\nMAINTAINER dok@email.com\n\nRUN useradd -ms /bin/bash user\n\nENTRYPOINT echo "This command will display this message on EVERY container that is run from it"\n\nUSER user\n')),Object(a.b)("h2",{id:"expose"},"EXPOSE"),Object(a.b)("p",null,"EXPOSE will allow us to expose our ports."),Object(a.b)("p",null,"The follow image will allow us to build a webserver and run it from basics."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'FROM centos:latest\nMAINTAINER dok@email.com\n\nRUN yum update -y\nRUN yum install -y httpd net-tools\n\nRUN echo "This is a custom index file built during the image creation" > /var/www/html/index.html\n\nENTRYPOINT apachectl "-DFOREGROUND"\n')),Object(a.b)("p",null,"However, if we don't expose any ports, then using ",Object(a.b)("inlineCode",{parentName:"p"},"-P")," won't automatically expose those ports. We can still forcably expose ports using `docker run --name apacheweb -d -p 8080:80 container"),Object(a.b)("p",null,"To auto-expose, we can do this..."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'FROM centos:latest\nMAINTAINER dok@email.com\n\nRUN yum update -y\nRUN yum install -y httpd net-tools\n\nRUN echo "This is a custom index file built during the image creation" > /var/www/html/index.html\n\nEXPOSE 80\n\nENTRYPOINT apachectl "-DFOREGROUND"\n')),Object(a.b)("h2",{id:"container-volume-management"},"Container Volume Management"),Object(a.b)("p",null,"How do we work with mounts and file systems?"),Object(a.b)("p",null,"We can mount using ",Object(a.b)("inlineCode",{parentName:"p"},"-v")," for mounting volumes."),Object(a.b)("p",null,"Scenario One: Create a directory at launchtime called ",Object(a.b)("inlineCode",{parentName:"p"},"mydata")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"docker run -it --name voltest1 -v /mydata centos:latest /bin/bash\n# once logged in\ndf -h # shows that there is a mounted file\n\n# back from host OS terminal\ncd /var/lib/docker # will show us the volumes folder\n\n# if we docker inspect the container\n# it will show us the volume and the source\n")),Object(a.b)("p",null,"Once we have things that are mounted, we can access them from the container and anything that we edit in the underlying host, we can see in the container!"),Object(a.b)("p",null,"We can't do this from the Dockerfile, because the base image is designed to be portable."),Object(a.b)("h2",{id:"docker-network-list-and-inspect"},"Docker Network: List and Inspect"),Object(a.b)("p",null,"Thanks to Docker Swarm and Kubernetes, it has become easier to manage the Docker Network."),Object(a.b)("p",null,"When you run a docker instance, it will auto pull the next available address."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# this will list all of the associated networks with the current host\ndocker network ls\n\ndocker network ls --no-trunc # to see the full address\n\ndocker network inspect bridge\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Creating Docker network configs")),Object(a.b)("p",null,"To see things like a ",Object(a.b)("inlineCode",{parentName:"p"},"man")," page for docker, you essential just put dashes between multi-word commands."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"man docker-network-create")," will bring up the network create manual."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"docker network create --subnet 10.1.0.0/24 --gateway 10.1.0.1 mybridge01 # /24 is everything in that network\n\ndocker network ls\n# the new bridge adapter is now there\n\n# to remove the bridge\ndocker network rm mybridge01\n")),Object(a.b)("h2",{id:"docker-network-assign-to-containers"},"Docker Network: Assign to Containers"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# subnet itself can be 10.1.[1-254].[1-254] while ip-range is 10.1.4.[1-254]\n# that is class b and class c respectively\ndocker network create --subnet 10.1.0.0/16 --gateway 10.1.0.1 --ip-range=10.1.4.0/24 --driver=bridge --label=host4network bridge04\n")),Object(a.b)("p",null,"If you then inspect the new above network config, it will have those settings within that inspect config."),Object(a.b)("p",null,"So how do we now use this new network?"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"docker run -it --name nettest1 --net bridge04 --ip 10.1.4.100 centos:latest /bin/bash\n\n# if we docker inspect nettest1 | grep IP we can see the address set at 10.1.4.100\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"docker-commands-and-structures"},"Docker commands and structures"),Object(a.b)("h2",{id:"inspect-container-processes"},"Inspect Container Processes"),Object(a.b)("p",null,"From the outside, we can run ",Object(a.b)("inlineCode",{parentName:"p"},"docker exec")," to get some more details about the container itself."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker exec container_name /bin/ps aux | grep bash")),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"docker top")," to see the top command run on a container."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker top container_name")),Object(a.b)("p",null,"Let's execute a command to install ",Object(a.b)("inlineCode",{parentName:"p"},"sshd"),". We could attach to container and do so, but we have a few options. Instead of attaching, we could do the following:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker exec -i -t container_name /bin/bash")),Object(a.b)("p",null,"This will ensure that the container doesn't stop, but will actually run two instances of ",Object(a.b)("inlineCode",{parentName:"p"},"bash"),". We can verify this by looking at the container processes."),Object(a.b)("p",null,"So far, this can give us a momentary snap shot."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"See the history of previous processes and performances")),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"docker stats")," to see a live set of information for that container."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"dock stats container_name")),Object(a.b)("p",null,"This will keep a view that is constantly updated to see what is going on."),Object(a.b)("h2",{id:"previous-container-management"},"Previous Container Management"),Object(a.b)("p",null,"Just to see the previous containers not running with just their ids, we can run ",Object(a.b)("inlineCode",{parentName:"p"},"docker ps -a -q")),Object(a.b)("p",null,"Of course, for removing older containers, we can ",Object(a.b)("inlineCode",{parentName:"p"},"docker rm")," previous containers."),Object(a.b)("p",null,"We can also remove containers from the ",Object(a.b)("inlineCode",{parentName:"p"},"/var/lib/docker")," folder as the super user. If you do it this way, you want to ensure that you have ",Object(a.b)("inlineCode",{parentName:"p"},"systemctl stop/restart docker")," to ensure that there aren't any issues with Docker."),Object(a.b)("h2",{id:"controlling-port-exposure-on-containers"},"Controlling Port Exposure on Containers"),Object(a.b)("p",null,"In this example, start up a nginx container in daemon mode without remapping the ports."),Object(a.b)("p",null,"Again, we can inspect this container to find the IP etc. We know that we can get anything remapped to the localhost currently because there is no remapping."),Object(a.b)("p",null,"In contrast, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"-P")," to expose the ports and it will auto remap to high port value."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"-p 8080:80")," will be use defining the port that we want to expose it to."),Object(a.b)("p",null,"If we want to define a certain interface eg. localhost..."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker run -itd -p 127.0.01:8081:80 nginx:latest")," would ONLY allow localhost to access this site."),Object(a.b)("h2",{id:"naming-containers"},"Naming Containers"),Object(a.b)("p",null,"To rename containers, we can run ",Object(a.b)("inlineCode",{parentName:"p"},"docker rename currentname newname")," - you can even rename container IDs, although there is likely no point."),Object(a.b)("p",null,"You can also rename running containers!"),Object(a.b)("h2",{id:"docker-events"},"Docker Events"),Object(a.b)("p",null,"How can we monitor certain events?"),Object(a.b)("p",null,"Startup a few containers."),Object(a.b)("p",null,"When we interact with them, certain events are generated."),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"docker events"),", it will begin a program to wait and register certain events."),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"docker events --since '1h'"),", we can then see all the events that have happened in the last hour."),Object(a.b)("p",null,"If we run just ",Object(a.b)("inlineCode",{parentName:"p"},"docker events")," and run a ",Object(a.b)("inlineCode",{parentName:"p"},"dok exec -it mycontainerid /bin/bash")," command, we will then see those events registered. This is useful for debugging and monitoring the entire host."),Object(a.b)("p",null,"We may not care about every event though. What happens if we just care about an attachment?"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker events --filter <keyword>")," can then be used to filter for events we care about."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker events --filter event=attach")),Object(a.b)("p",null,"We can also filter for multiple events with multiple ",Object(a.b)("inlineCode",{parentName:"p"},"--filter event=<event>")),Object(a.b)("h2",{id:"managing-and-removing-base-images"},"Managing and Removing Base Images"),Object(a.b)("p",null,"If you remove an image by name, then if there is a double up of the same ID, it will just remove the named image - however an ID removal will warn you if they share the ID. They only way to remove all of them is to use the force ",Object(a.b)("inlineCode",{parentName:"p"},"-f")," flag."),Object(a.b)("h2",{id:"saving-and-loading-docker-images"},"Saving and Loading Docker Images"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Saving")),Object(a.b)("p",null,"When we pull images, we can pull from local or from Docker Hub. You will use base of an official release usually etc."),Object(a.b)("p",null,"How can we manage our custom images? We can ",Object(a.b)("inlineCode",{parentName:"p"},"tar")," any file and migrate it to another compute etc."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker commit containername centos:mine")),Object(a.b)("p",null,"This will allow us to save the image but remove the containers!"),Object(a.b)("p",null,"We can use"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"docker save --output centos.latest.tar centos:latest\n")),Object(a.b)("p",null,"If you ",Object(a.b)("inlineCode",{parentName:"p"},"ls")," the tar file, it will give you details about the image/container."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Restoring")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker load --input centos.latest.tar")),Object(a.b)("p",null,"If we have ",Object(a.b)("inlineCode",{parentName:"p"},"gzip")," a tar file, we can also load it directly from the ",Object(a.b)("inlineCode",{parentName:"p"},".tar.gz")," file."),Object(a.b)("h2",{id:"image-history"},"Image History"),Object(a.b)("p",null,"How can we get the history of the base image?"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker history imagename")),Object(a.b)("p",null,"This will give us a list of commands etc."),Object(a.b)("h2",{id:"take-control-of-our-tags"},"Take Control of Our Tags"),Object(a.b)("p",null,"Changes in the container is what is kept in storage layering."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker tag imageid mine/centos:v1.0")," - this will create a new image with the repo tag."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker tag mine/centos:v1.0 dok.example.com/centos:v1.0b")," will do the same."),Object(a.b)("h2",{id:"pushing-to-docker-hub"},"Pushing to Docker Hub"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker login --username=name")," throw in the password and you'll be authenticated."),Object(a.b)("p",null,"One authenticated, ",Object(a.b)("inlineCode",{parentName:"p"},"docker push image")),Object(a.b)("p",null,"Of course, to bring it back down, you will hit ",Object(a.b)("inlineCode",{parentName:"p"},"docker pull name")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"integration-and-use-cases"},"Integration and Use Cases"),Object(a.b)("h2",{id:"building-a-web-farm-for-development-and-testing"},"Building a Web Farm for Development and Testing"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Prerequisites")),Object(a.b)("p",null,"So far, we have not had a specific purpose for Docker containers. These following examples are for real world use cases."),Object(a.b)("p",null,"Set up a web farm with two Apache web nodes on port 80 - both sharing one or more file systems."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Part One")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Docker/Docker-Deep-Dive.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-docker-docker-deep-dive-md-8afab3b6df645b013862.js.map