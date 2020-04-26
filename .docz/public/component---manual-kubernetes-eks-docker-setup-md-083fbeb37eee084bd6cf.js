(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{"J/Fz":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return i}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/EKS-Docker-Setup.md"}});var l={_frontmatter:s},c=o.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"eks-docker-setup"},"EKS Docker Setup"),Object(a.b)("p",null,"Pull ubuntu latest image from Docker Hub."),Object(a.b)("h2",{id:"starting-the-image"},"Starting the image"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),'# Start the container\ndocker run -dit -p 8001:8001 -e "AWS_ACCESS_KEY=${AWS_ACCESS_KEY}" -e "AWS_SECRET_KEY=${AWS_SECRET_ACCESS_KEY}" -e "AWS_REGION=ap-southeast-2" --name eks ubuntu /bin/sh\n# Confirm it is running\nsudo docker ps\n# Attach to container\nsudo docker attach eks\n# If you need to copy files to /root\ndocker cp folder/ mycontainer:/root\n')),Object(a.b)("h2",{id:"commit-changes"},"Commit changes"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"sudo docker commit CONTAINER_ID ubuntu:TAG\n")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"If you haven't saved an updated container, follow this to install AWS CLI, Python3, ",Object(a.b)("inlineCode",{parentName:"p"},"aws-iam-authenticator"),", eksctl and kubectl. Note you might need to use ",Object(a.b)("inlineCode",{parentName:"p"},"sudo"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),'apt-get update\n# Get AWS CLI\napt-get install awscli\napt-get install --reinstall groff-base # may be required is aws mentions it\napt-get install curl\n# Install kubectl\ncurl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl\nchmod +x ./kubectl\nmv ./kubectl /usr/local/bin/kubectl\n# Install eksctl\ncurl --silent --location "https://github.com/weaveworks/eksctl/releases/download/latest_release/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp\nmv /tmp/eksctl /usr/local/bin\n# Instal iam-aws-authenticator\ncurl -o aws-iam-authenticator https://amazon-eks.s3-us-west-2.amazonaws.com/1.11.5/2018-12-06/bin/linux/amd64/aws-iam-authenticator\nchmod +x ./aws-iam-authenticator\ncp ./aws-iam-authenticator /usr/bin/aws-iam-authenticator && export PATH=$HOME/bin:$PATH\n# Enable color prompt\nnano ~/.bashrc # uncomment section about bash\n')))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/EKS-Docker-Setup.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-eks-docker-setup-md-083fbeb37eee084bd6cf.js.map