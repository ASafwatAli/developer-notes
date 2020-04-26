(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{"JH+F":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),a=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Docker/docker-cheat-sheet.md"}});var c={_frontmatter:i},l=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(l,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"docker-cheat-sheet"},"Docker Cheat Sheet"),Object(o.b)("h3",{id:"3-parts-of-docker"},"3 Parts of Docker"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Docker Engine"),Object(o.b)("li",{parentName:"ol"},"Compose"),Object(o.b)("li",{parentName:"ol"},"Machine")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"// see versions in shell\ndocker --version\ndocker-compose --version\ndocker-machine --version\n")),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"Open a command-line terminal, and run some Docker commands to verify that Docker is working as expected.\nSome good commands to try are docker version to check that you have the latest release installed, and docker ps and docker run hello-world to verify that Docker is running."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"docker version\ndocker ps\ndocker run hello-world\n")),Object(o.b)("p",null,"To start a Dockerized web server:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"docker run -d -p 80:80 --name webserver nginx\n")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"docker ps")," while your web server is running to see details on the webserver container."),Object(o.b)("h2",{id:"adding-registries"},"Adding registries"),Object(o.b)("p",null,"As an alternative to using Docker Hub to store your public or private images or Docker Trusted Registry, you can use Docker to set up your own insecure registry. Add URLs for insecure registries and registry mirrors on which to host your images."),Object(o.b)("h2",{id:"http-proxy-settings"},"HTTP proxy settings"),Object(o.b)("p",null,"Docker for Mac will detect HTTP/HTTPS Proxy Settings and automatically propagate these to Docker and to your containers. For example, if you set your proxy settings to ",Object(o.b)("a",r({parentName:"p"},{href:"http://proxy.example.com"}),"http://proxy.example.com"),", Docker will use this proxy when pulling containers."),Object(o.b)("h2",{id:"file-sharing"},"File Sharing"),Object(o.b)("p",null,"You can decide which directories on your Mac to share with containers."),Object(o.b)("p",null,"Add a Directory - Click + and navigate to the directory you want to add."),Object(o.b)("p",null,"Click Apply & Restart to make the directory available to containers using Docker’s bind mount (-v) feature."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"There are some limitations on the directories that can be shared:")),Object(o.b)("p",null,"They cannot be a subdirectory of an already shared directory.\nThey cannot already exist inside of Docker."),Object(o.b)("h2",{id:"uninstalling"},"Uninstalling"),Object(o.b)("p",null,"Docker for Mac can also be uninstalled using a command-line terminal:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"(mdfind Docker.app)/Contents/MacOS/Docker --uninstall\n")),Object(o.b)("h2",{id:"autocompletion"},"Autocompletion"),Object(o.b)("p",null,"To activate bash completion, these files need to be copied or symlinked to your bash_completion.d directory. For example, if you use Homebrew:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"cd /usr/local/etc/bash_completion.d\nln -s /Applications/Docker.app/Contents/Resources/etc/docker.bash-completion\nln -s /Applications/Docker.app/Contents/Resources/etc/docker-machine.bash-completion\nln -s /Applications/Docker.app/Contents/Resources/etc/docker-compose.bash-completion\n")),Object(o.b)("h1",{id:"get-started-with-docker-tutorial"},"Get started with Docker tutorial"),Object(o.b)("h2",{id:"show-all-of-your-containers"},"Show all of your containers"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"docker ps -a\n")),Object(o.b)("h2",{id:"how-to-run-images"},"How to run images"),Object(o.b)("p",null,"Breakdown of ",Object(o.b)("inlineCode",{parentName:"p"},"docker run hello-world")),Object(o.b)("p",null,"An image is a filesystem and parameters to use at runtime. It doesn’t have state and never changes. A container is a running instance of an image. When you ran the command, Docker Engine:"),Object(o.b)("p",null,"checked to see if you had the hello-world software image\ndownloaded the image from the Docker Hub (more about the hub later)\nloaded the image into the container and “ran” it\nDepending on how it was built, an image might run a simple, single command and then exit. This is what Hello-World did."),Object(o.b)("p",null,"A Docker image, though, is capable of much more. An image can start software as complex as a database, wait for you (or someone else) to add data, store the data for later use, and then wait for the next person."),Object(o.b)("p",null,"Who built the hello-world software image though? In this case, Docker did but anyone can. Docker Engine lets people (or companies) create and share software through Docker images. Using Docker Engine, you don’t have to worry about whether your computer can run the software in a Docker image — a Docker container can always run it."),Object(o.b)("h2",{id:"find-and-run-the-whalesy-image"},"Find and run the Whalesy Image"),Object(o.b)("h3",{id:"print-random-fortune-cookie-message"},"Print random fortune cookie message"),Object(o.b)("p",null,"$ docker run mendlik/docker-whalesay"),Object(o.b)("h3",{id:"print-custom-message"},"Print custom message"),Object(o.b)("p",null,'$ docker run mendlik/docker-whalesay "Your message"'),Object(o.b)("h3",{id:"lets-see-whats-inside-the-container"},"Let's see what's inside the container"),Object(o.b)("p",null,"$ docker run -it --entrypoint /bin/bash mendlik/docker-whalesay"),Object(o.b)("h2",{id:"see-all-of-your-images"},"See all of your images"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"docker images\n")),Object(o.b)("h1",{id:"create-your-own-image"},"Create your own image"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make directory - this serves as the ",Object(o.b)("inlineCode",{parentName:"li"},"context")," for the build. The context just means it contains all the things you need to build your image."),Object(o.b)("li",{parentName:"ol"},"Change into your new directory"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"touch Dockerfile"))),Object(o.b)("p",null,"Open this file, and add..."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FROM docker/whalesay:latest")),Object(o.b)("p",null,"The FROM keyword tells Docker which image your image is based on. Whalesay is cute and has the cowsay program already, so we’ll start there."),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"RUN apt-get -y update && apt-get install -y fortunes")),Object(o.b)("p",null,"Now, to build..."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"docker build -t docker-whale .")),Object(o.b)("h2",{id:"the-build-process"},"The build process"),Object(o.b)("p",null,"The docker build -t docker-whale . command takes the Dockerfile in the current directory, and builds an image called docker-whale on your local machine. The command takes about a minute and its output looks really long and complex."),Object(o.b)("p",null,"Once it is built, you can run it using the ",Object(o.b)("inlineCode",{parentName:"p"},"docker run <name>")," command! "))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Docker/docker-cheat-sheet.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-docker-docker-cheat-sheet-md-32ca3c51fb6400d9a22c.js.map