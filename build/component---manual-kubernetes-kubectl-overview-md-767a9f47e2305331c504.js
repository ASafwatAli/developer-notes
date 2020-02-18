(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{xkvD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),b=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Kubectl-Overview.md"}});var c={_frontmatter:r},i=b.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(i,l({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"kubectl-overview"},"Kubectl Overview"),Object(n.b)("h2",{id:"tldr"},"tl;dr"),Object(n.b)("h3",{id:"resources"},"Resources"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reference"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Resource"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"pod"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Pods")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"svc"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Services")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"ns"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Namespaces")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"rs"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Replica Sets")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"deployment"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Deployments")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Cluster nodes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"sc"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Storage Class")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"pvc"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Persistent Volume Claim")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"secrets"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Secrets")))),Object(n.b)("h3",{id:"actions"},"Actions"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Action"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"get"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Get resource"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get pods")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"describe"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Describe resource"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl describe node ",Object(n.b)("inlineCode",{parentName:"td"},"<NODE>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"delete"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Delete resource"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl delete pod ",Object(n.b)("inlineCode",{parentName:"td"},"<POD>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"create"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Create resource"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl create ns ",Object(n.b)("inlineCode",{parentName:"td"},"<NAMESPACE>"))))),Object(n.b)("h2",{id:"setting-config"},"Setting config"),Object(n.b)("p",null,"Example exporting to set the correct ",Object(n.b)("inlineCode",{parentName:"p"},"KUBECONFIG"),"."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-shell"}),"export KUBECONFIG=~/.kube/eksctl/clusters/cluster\n")),Object(n.b)("h2",{id:"base-fetching"},"Base fetching"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Action"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Rolebindings"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get rolebinds --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>")," --selector=",Object(n.b)("inlineCode",{parentName:"td"},"<selector>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Pods"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get pods --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>")," --selector=",Object(n.b)("inlineCode",{parentName:"td"},"<selector>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Deployments"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get deployments --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>")," --selector=",Object(n.b)("inlineCode",{parentName:"td"},"<selector>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Services"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get svc --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>")," --selector=",Object(n.b)("inlineCode",{parentName:"td"},"<selector>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Replica Sets"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get replicasets --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>")," --selector=",Object(n.b)("inlineCode",{parentName:"td"},"<selector>"))))),Object(n.b)("h2",{id:"all"},"All"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Action"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Get rolebindings"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get all --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>")," --selector=k8s-app=kubernetes-dashboard")))),Object(n.b)("h2",{id:"rolebindings"},"Rolebindings"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Action"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Get rolebindings"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get rolebindings --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Describe rolebindings"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl describe rolebindings --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Describe rolebindings for service"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl describe rolebindings ",Object(n.b)("inlineCode",{parentName:"td"},"<service account>")," --namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<namespace>"))))),Object(n.b)("h2",{id:"namespaces"},"Namespaces"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Action"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Create namespace"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl create namespace ",Object(n.b)("inlineCode",{parentName:"td"},"<NAMESPACE>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Get namespace"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"kubectl get namespace")))),Object(n.b)("h2",{id:"services"},"Services"),Object(n.b)("p",null,"To do"),Object(n.b)("h2",{id:"pods"},"Pods"),Object(n.b)("p",null,"To do"),Object(n.b)("h2",{id:"deployments"},"Deployments"),Object(n.b)("h2",{id:"replica-sets"},"Replica Sets"))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Kubectl-Overview.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-kubectl-overview-md-767a9f47e2305331c504.js.map