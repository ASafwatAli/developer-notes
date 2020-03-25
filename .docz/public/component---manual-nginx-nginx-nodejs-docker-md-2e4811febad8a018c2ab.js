(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{"6MVV":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Nginx/Nginx-Nodejs-Docker.md"}});var p={_frontmatter:i},c=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(o.b)(c,a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"docker-container-with-nginx-and-nodejs"},"Docker container with Nginx and Nodejs"),Object(o.b)("p",null,"First create a directory for both ",Object(o.b)("inlineCode",{parentName:"p"},"nginx")," and ",Object(o.b)("inlineCode",{parentName:"p"},"nodejs"),"."),Object(o.b)("p",null,"Within the Node folder, create a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," that contains the following to expose an app running on a particular port:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"FROM mhart/alpine-node\n# Pretend to copy the node app entry\n# from current folder\nCOPY index.js .\n# Expose the port that it is running on\nEXPOSE 3000\n# Run node - chances are you want pm2 here\nCMD node index.js\n")),Object(o.b)("p",null,"Then we can build with ",Object(o.b)("inlineCode",{parentName:"p"},"docker built -t foo/node .")),Object(o.b)("p",null,"After the build, run the container with port 3000 exposed using ",Object(o.b)("inlineCode",{parentName:"p"},"docker run -d -p 3000:3000 --name node-app foo/node"),"."),Object(o.b)("p",null,"First, we can test the Nginx latest container container using ",Object(o.b)("inlineCode",{parentName:"p"},"docker run --rm -p 8000:80 nginx")," to test out nginx:latest. This just removes the container after running."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"nginx")," folder, we can create ",Object(o.b)("inlineCode",{parentName:"p"},"default.conf")," file to overwrite the initial one."),Object(o.b)("p",null,"If settings are not defined below, Nginx will use the default values."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# config\nserver {\n    location / {\n        # host name first\n        proxy_set_header Host $host;\n        # extra headers for host IP address\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        # passing protocol used (http | https)\n        proxy_set_header X-Forwarded-Proto $scheme;\n        # where to proxy reqs to\n        proxy_pass http://app:3000;\n    }\n}\n")),Object(o.b)("p",null,"For the Docker file."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"FROM nginx\nCOPY default.cong /etc/nginx/conf.d/\n")),Object(o.b)("p",null,"Then build out this file using ",Object(o.b)("inlineCode",{parentName:"p"},"docker built -t foo/nginx ."),"."),Object(o.b)("p",null,"Running it: ",Object(o.b)("inlineCode",{parentName:"p"},"docker run -p 8000:80 --link node-app:app --name nginx-proxy foo/nginx")),Object(o.b)("p",null,"Since we expose 3000 for the node-app, we do not need to redo that."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Nginx/Nginx-Nodejs-Docker.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-nginx-nginx-nodejs-docker-md-2e4811febad8a018c2ab.js.map