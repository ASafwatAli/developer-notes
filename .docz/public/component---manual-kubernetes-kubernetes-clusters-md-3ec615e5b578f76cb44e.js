(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{beQv:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Kubernetes-Clusters.md"}});var i={_frontmatter:l},c=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(c,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"running-container-clusters-with-kuberentes"},"Running Container Clusters with Kuberentes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#running-container-clusters-with-kuberentes"}),"Running Container Clusters with Kuberentes"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#intro-to-kubernetes"}),"Intro to Kubernetes"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----kubernetes-architecture"}),"---- Kubernetes Architecture")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----introduction-to-yaml"}),"---- Introduction to YAML")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#kubernetes-setup-and-config"}),"Kubernetes Setup and Config"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----multi-pod-container-replication-controller"}),"---- Multi-Pod (Container) Replication Controller")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----create-and-deploy-service-definitions"}),"---- Create and Deploy Service Definitions")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#logs-scaling-and-recovery"}),"Logs, Scaling and Recovery"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#-----creating-temporary-pods-at-the-command-line"}),"---- Creating Temporary Pods at the Command Line"))))))),Object(a.b)("h2",{id:"intro-to-kubernetes"},"Intro to Kubernetes"),Object(a.b)("p",null,"k8s is an open source container cluster manager."),Object(a.b)("p",null,"Google donated it under the Apache Commons license."),Object(a.b)("p",null,"It's obejctive is to provide a platform for deploying, scaling and operations of application containers across a cluster of hosts."),Object(a.b)("p",null,"Google uses it to run billions of containers a day on Google Cloud."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Components of Kubernetes")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Nodes"),Object(a.b)("li",{parentName:"ul"},"Pods"),Object(a.b)("li",{parentName:"ul"},"Labels"),Object(a.b)("li",{parentName:"ul"},"Selectors"),Object(a.b)("li",{parentName:"ul"},"Controllers"),Object(a.b)("li",{parentName:"ul"},"Services"),Object(a.b)("li",{parentName:"ul"},"Control Page"),Object(a.b)("li",{parentName:"ul"},"API")),Object(a.b)("h2",{id:"kubernetes-architecture"},"Kubernetes Architecture"),Object(a.b)("p",null,"We will end up with one ",Object(a.b)("inlineCode",{parentName:"p"},"Master/Controller")," which can have ",Object(a.b)("em",{parentName:"p"},"n")," Minions, which can have ",Object(a.b)("em",{parentName:"p"},"n")," pods which themselves can container ",Object(a.b)("em",{parentName:"p"},"n")," containers."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Minions (Nodes)")),Object(a.b)("p",null,"These are the physical/virtual container clients. They host the various containers within the cluster."),Object(a.b)("p",null,"Each of them run ",Object(a.b)("inlineCode",{parentName:"p"},"ETCD")," (a key pair management and communication service) - it's how we can keep everything in sync and the ",Object(a.b)("inlineCode",{parentName:"p"},"Kubernetes Proxy"),"."),Object(a.b)("p",null,"Docker must be installed on each of these ",Object(a.b)("inlineCode",{parentName:"p"},"minions")," as well."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Pods")),Object(a.b)("p",null,"One or more containers. These containers are then guarenteed by the ",Object(a.b)("inlineCode",{parentName:"p"},"Master/Controller")," to be located on the same host machine in order to facilitate sharing of resources."),Object(a.b)("p",null,"Pods are assigned unique IPs within each cluster."),Object(a.b)("p",null,"Pods can container definitions of disk volumes or share, and then provide access from those to all the members (containers) within the pod."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Labels")),Object(a.b)("p",null,'Clients can attach "key-value pairs" to any object in the system (like Pods or Minions). The become the labels that identify them in the config and management of them.'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Selectors")),Object(a.b)("p",null,"Label Selectors represent queries that are made against those labels. The resolve to the corresponding matching objects."),Object(a.b)("p",null,"These two items are the primary way that grouping is done in Kubernetes and determine which components that a given operation applies to when indicated."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Controllers")),Object(a.b)("p",null,"These are used in the management of your cluster. Controllers are the mechanism by which your desired configuration state is enforced."),Object(a.b)("p",null,"Controllers manage a set of pods and - depending on the desired configuration state - may engage other controllers to handle replication and scaling (Replication Controller) of X number of containers and pods across the cluster. it is also responsible for replacing any container in a pod that fails (based on the desired state of the cluster)."),Object(a.b)("p",null,'Other controllers that can be engaged include a DaemonSet Controller (enforces a 1 to 1 ratio of pods to minions) and a Job Controller (that runs pods to "completion" such as in batch jobs).'),Object(a.b)("p",null,"Each set of pods any controller manages is determined by the label selectors that are part of its definition."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Services")),Object(a.b)("p",null,"Services allow pods to ",Object(a.b)("inlineCode",{parentName:"p"},"work together")," eg multi-tiered application eg. web layer, db layer etc. are defined by the label selector."),Object(a.b)("p",null,"Kubernetes can then provide service discovery and handle routing with the static IP for each pod as well as load balancing (round robin based) connections to that service among the pods that match the label selector indicated."),Object(a.b)("p",null,"By default, although a service is only exposed inside a cluster, it can also be exposed outside a cluster as needed."),Object(a.b)("h2",{id:"introduction-to-yaml"},"Introduction to YAML"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Yet Another Markup Language"),", although it moved to ",Object(a.b)("inlineCode",{parentName:"p"},"YAML Ain't Markup Language")),Object(a.b)("p",null,"It's a data serialisation format. It's designed to be easy to map to high level languages."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"--- # Our Favourite Movies of All Time\n- The Terminator\n- Star Wars\n")),Object(a.b)("p",null,"It is highly dependent on the dashes and indentations."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"kubernetes-setup-and-config"},"Kubernetes Setup and Config"),Object(a.b)("p",null,"Ensure that for your nodes etc and the control-master that you apt-get/yum install ",Object(a.b)("inlineCode",{parentName:"p"},"ntp")),Object(a.b)("p",null,"We use ",Object(a.b)("inlineCode",{parentName:"p"},"ntp")," for accurate reporting. Ensure for each node you use ",Object(a.b)("inlineCode",{parentName:"p"},"systemctl enable ntpd && sysmctl start ntpd"),"."),Object(a.b)("p",null,"To ensure that they can all communicate, edit the ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/hosts")," file and paste in the IP addresses and names of the minions. That hosts will allow you to ping that minion name."),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"master/controller"),", ",Object(a.b)("inlineCode",{parentName:"p"},"vim /etc/yum.repos.d/virt7-docker-common-release.repo")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"[virt7-docker-common-release]\nname=virt7-docker-common-release\nbaseurl=http://cbs.centos.org/repos/virt7-docker-common-release/x86_64/0s/\ngpgcheck=0\n")),Object(a.b)("p",null,"Then hit ",Object(a.b)("inlineCode",{parentName:"p"},"yum update"),"."),Object(a.b)("p",null,"Ensure ",Object(a.b)("inlineCode",{parentName:"p"},"systemctl status [iptables|firewalld]")," are not running."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"Now to ensure that we can share and communicate values, we will install `etcd` and `kubernetes`.\n\n`yum install -y --enablerepo=virt7-docker-common-release kubernetes docker`\n\n## Install and Configure the Master Controller\n\nFor the master, we want to edit the Kubernetes config file.\n\n__Master Kube Config__\n")),Object(a.b)("p",null,"cd /etc/kubernetes\nvim config"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'In the file, the `KUBE_LOTOSTDERR` we want one, `KUBE_LOG_LEBEL` can be set as 0 for debug, `KUBE_ALLOW_PRIV` can be left as false - it is a way to allow any docker container to run in our kube cluster, but we can learn about this later. `KUBE_MASTER` we want to change to ensure that it binds to an interface that we can communicate with. It will default at localhost, so for this example we would do something like `--master=http://centos-master:8080` where centos-master is what we set up in `/etc/hosts`\n\nWe will then add `KUBE_ETCD_SERVERS="--etcd-servers=http://centos-master:2379"`\n\n__Setting up etcd__\n')),Object(a.b)("p",null,"cd /etc/etcd\nvim etcd.conf"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'In the file, we want to change `ETCD_LISTEN_CLIENT_URLS="http://0.0.0.0:2379"` and the same value in the cluster section for `ETCD_ADVERTISE_CLIENT_URLS`\n\n__Editing the Kubernetes APIServer___\n')),Object(a.b)("p",null,"cd /etc/kubernetes\nvim apiserver"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"Inside, we need to change to the following for the following fields:\n")),Object(a.b)("p",null,'KUBE_API_ADDRESS="--address=0.0.0.0"\nKUBE_API_PORT="--port=8080"\nKUBELET_PORT="--kubelet-port=10250"'),Object(a.b)("p",null,"// for the basic config, we can comment out the KUBE_ADMISSION_CONTROL"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"__systemctl enable___\n\nFinally, we want to enable the following with the command:\n")),Object(a.b)("p",null,'systemctl enable etcd kube-apiserver kube-controller-manager kube-scheduler\nsystemctl start etcd kube-apiserver kube-controller-manager kube-scheduler\nsystemctl status etcd kube-apiserver kube-controller-manager kube-scheduler | grep"(running)" | wc -l'),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"## Install and Configure the Minions\n\nAt this stage, we should be able to see the master controller from the minions.\n\n__Minion Kube Config__\n")),Object(a.b)("p",null,'KUBE_MASTER="--master=',Object(a.b)("a",r({parentName:"p"},{href:"http://centos-master:8080"}),"http://centos-master:8080"),'"'),Object(a.b)("p",null,'// add the following\nKUBE_ETCD_SERVERS="--etcd-server=',Object(a.b)("a",r({parentName:"p"},{href:"http://centos-master:2379"}),"http://centos-master:2379"),'"'),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"__Kublet Config__\n\nEdit the `/etc/kubernetes/kublet` file.\n")),Object(a.b)("p",null,'KUBELET_ADDRESS="--address=0.0.0.0"'),Object(a.b)("p",null,'KUBELET_PORT="--port=102050"'),Object(a.b)("p",null,'KUBELET_HOSTNAME="--hostname-override=centos-minion1"'),Object(a.b)("p",null,'KUBELET_API_SERVER="--api-servers=',Object(a.b)("a",r({parentName:"p"},{href:"http://centos-master:8080"}),"http://centos-master:8080"),'"'),Object(a.b)("p",null,"// comment out pod_infra_container"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"Afterwards, ensure you run the following:\n")),Object(a.b)("p",null,'systemctl enable kube-proxy kubelet docker\nsystemctl start kube-proxy kubelet docker\nsystemctl status kube-proxy kubelet docker | grep "(running)" | wc-l'),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"## Exploring the Environment\n\nWe will use `kubectl` from the command line to control the cluster manager.\n\nMain functions:\n")),Object(a.b)("p",null,"// list of registered nodes for the cluster\nkubectl get nodes"),Object(a.b)("p",null,"// to get help on it\nman kubectl-get"),Object(a.b)("p",null,"// how to get the ip addresses/info\nkubetrl describe nodes"),Object(a.b)("p",null,"// getting the json info\nkubectl get nodes -o jsonpath='{.items","[*]",".status.addresses",'[?(@.type=="ExternalIP")]',".address}'"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"***\n\n## Pods, Tags and Services\n\n## Create and Deploy Pod Definitions\n\nLet's start running containers in pods in our cluster.\n\nFor configuration, you can use both `json` or `yaml` file format. From a definitions standpoint, it may be better for the current input configuration.\n\n`Desired State` for our system is a key concept. It's the only responsibility of Kubernetes to match the defined `desired state`.\n\nOn the master node, `cd Builds` and inside that directory `vim nginx.yaml`\n")),Object(a.b)("p",null,"apiVersion: v1\nkind: Pod\nmetadata:\nname: nginx\nspec:\ncontainers: - name: nginx\nimage: nginx:1.7.9 # this is not the latest - used for a reason\nports: - containerPort: 80"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"If we now use `kubectl get pods`, we should get no pods that are running.\n\nThat will be because there are no containers running on any minions.\n\nRun `kubectl create -f ./nginx.yaml` and we'll get a notification.\n\n`kubectl get pods` should now return results and the minion should now have a container running!\n\n__Describing a pod__\n\n`kubectl describe pod nginx`\n\nThis will tell us a number of things including IDs assigned to the minion, labels if they are assigned, IP etc and info on the containers.\n\nThe events will also describe how the container has gone.\n\n__Accessing the pod from master___\n\nCan we ping that address? No. The reason is that we have no extenal route to that pod. What we can do is run a busy-box image. This will allow us to connect to or test our container.\n")),Object(a.b)("p",null,"// -t is not --tty for kubectl\nkubectl run busybox --image=busybox --restart=Never --tty -i --generator=run-pod/v1"),Object(a.b)("p",null,"// this will spin up the pod called busybox\n// we will then be in the command line for that pod\n// If we have this pod running within the minion\n// we will then have access to other pods on the\n// same environment\nwget -q0- ",Object(a.b)("a",r({parentName:"p"},{href:"http://172.1.0.2"}),"http://172.1.0.2")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"To clean up the system, we can use `kubectl delete pod podName`\n\nFrom the master, we can then see that the pod is no longer running.\n\nWe can also forward temporarily our ports to a remote copy. We can do this with port forward.\n")),Object(a.b)("p",null,"kubectl get pods\nkubectl create -f nginx.yaml\nkubectl get pods # will show the pods"),Object(a.b)("p",null,"// to forward ports\n// & means to run in the background\n// this will return a port above 34000 - otherwise we can specify\nkubectl port-forward nginx :80 &\n// from still in the master\nwget -q0- ",Object(a.b)("a",r({parentName:"p"},{href:"http://localhost:34853"}),"http://localhost:34853")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"## Tags, Labels and Selectors\n\nCreate `nginx-pod-label.yaml`\n")),Object(a.b)("p",null,"apiVersion: v1\nkind: Pod\nmetadata:\nname: nginx\nlabels:\napp: nginx\nspec:\ncontainers: - name: nginx\nimage: nginx:1.7.9 # this is not the latest - used for a reason\nports: - containerPort: 80"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"")),Object(a.b)("p",null,"kubectl create -f nginx-pod-label.yaml\nkubectl get pods # will be running\nkubectl get -l app=nginx"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"If we copy that .yaml file and rename `nginx` to `nginx2`, we can get info just by searching for that name.\n\nIf we also do `kubectl decribe pod -l app=nginx2`, we'd just get the info for that name.\n\n## Deployment State\n\nCreate `nginx-deployment-prod.yaml`\n\nThis will make a number of changes. This will go from a simple pod definition to a deployment production set.\n")),Object(a.b)("p",null,"apiVersion: extensions/v1beta1 # this should now be in v1.3\nkind: Deployment\nmetadata:\nname: nginx-deployment-prod\nspec:\nreplicas: 1\ntemplate: # this will be for the pod replicas\nmetadata:\nlabels:\napp: nginx-deployment-prod\nspec:\ncontainers: - name: nginx\nimage: nginx:1.7.9 # this is not the latest - used for a reason\nports: - containerPort: 80"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"")),Object(a.b)("p",null,"kubectl create -f -nginx-deployent-prod.yaml\nkubectl get pods\n// this will now return the name + the id concatentated to the end!\nkubectl get deployments\n// this will now give us the nginx-deployment-prod with details"),Object(a.b)("p",null,"This seems like we're making it more complex than we need to be... but..."),Object(a.b)("p",null,"Create ",Object(a.b)("inlineCode",{parentName:"p"},"nginx-deployment-dev.yaml")," and just change everything to dev."),Object(a.b)("p",null,"Again, create the .yaml kubectl. It will now show two deployments."),Object(a.b)("p",null,"If we create ",Object(a.b)("inlineCode",{parentName:"p"},"nginx-deployment-dev-update.yaml")," and just change a few things. If we run ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl apply -f nginx-deployment-dev-update.yaml")," and it will update by apply the contents of that to the name deployment cluster."),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe deployments ..."),", we can get the details with things like the ",Object(a.b)("inlineCode",{parentName:"p"},"StrategyType")," etc."),Object(a.b)("h2",{id:"multi-pod-container-replication-controller"},"Multi-Pod (Container) Replication Controller"),Object(a.b)("p",null,"Until now, we have been creating one or more pods either directly or using a file. However, there has only been one container in each of the pods that we've been working with."),Object(a.b)("p",null,"We can use the replication controller to do more than one container in a pod. It will allow us to deploy 1 to n pods of a particular container."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get pods # we will initially have nothing\n\nvim nginx-multi-label.yaml\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"nginx-multi-label.yaml")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: ReplicationController\nmetadata:\n    name: nginx-www\nspec:\n    replicas: 3\n    select:\n        app: nginx\n    template:\n        metadata:\n            name: nginx\n            labels:\n                app: nginx\n            spec:\n                containers:\n                    - name: nginx\n                        image: nginx\n                        ports:\n                        - containerPort: 80\n")),Object(a.b)("p",null,"Ensure that if you're going to do this, start the ",Object(a.b)("inlineCode",{parentName:"p"},"kubelet")," and ",Object(a.b)("inlineCode",{parentName:"p"},"kube-proxy")," on the other nodes."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'kubectl get nodes\n# if everything is on, all three minions should report that they are ready\nkubectl create -f nginx-multi-label.yaml\n# replicationcontroller "nginx-www" created\nkubectl get pods\n# will show the pods\nkubectrl describe replicationcontroller\n# tells us 3 running and 3 pods\nkubectl describe pods\n# it will show all of our pods being happy!\nkubectl get services\n# gives us just the one service\n')),Object(a.b)("p",null,"If we delete a pod, we will still end up having a service! When we create a definition, that defines the expected state of the entire environment!"),Object(a.b)("p",null,"If there is an app error etc. the service will ensure that it gets back to the expected state."),Object(a.b)("h2",{id:"create-and-deploy-service-definitions"},"Create and Deploy Service Definitions"),Object(a.b)("p",null,"Starting to put things together."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get replicationcontrollers\nkubectl get pods\nkubectl get nodes\n")),Object(a.b)("p",null,"Time to use the multicontainer configuration."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"nginx-multi-label.yaml")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: ReplicationController\nmetadata:\n    name: nginx-www\nspec:\n    replicas: 3\n    select:\n        app: nginx\n    template:\n        metadata:\n            name: nginx\n            labels:\n                app: nginx\n            spec:\n                containers:\n                    - name: nginx\n                        image: nginx\n                        ports:\n                        - containerPort: 80\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubectl create -f nginx-multi-label.yaml")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Defining an nginx service")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Service\nmetadata:\n    data: nginx-service\nspec:\n    ports:\n        port: 8080\n        targetPort: 80\n        protocol: TCP\n    selector:\n        app: nginx\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubectl create -f nginx-service.yaml")),Object(a.b)("p",null,"Now, if we run ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl get services"),", we will now have two services."),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe service nginx-service"),", we can see info about and that it is a ClusterIP and that the endpoints are assigned to the minions with Kubernetes managing this."),Object(a.b)("p",null,"So how do we connect?"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubectl run busybox --generator=run-pod/v1 --image=busybox --restart=Never --tty -i")),Object(a.b)("p",null,"Once it is running, we should be able to do ",Object(a.b)("inlineCode",{parentName:"p"},"wget -q0- http://10.254.197.123:8080")),Object(a.b)("p",null,"Now this idea is referring to a cluster of this IP. So now we've tied everything together to have a clustered referred to with just one IP address. We no longer even have to know the other IPs."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"logs-scaling-and-recovery"},"Logs, Scaling and Recovery"),Object(a.b)("h2",{id:"creating-temporary-pods-at-the-command-line"},"Creating Temporary Pods at the Command Line"))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Kubernetes-Clusters.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-kubernetes-clusters-md-3ec615e5b578f76cb44e.js.map