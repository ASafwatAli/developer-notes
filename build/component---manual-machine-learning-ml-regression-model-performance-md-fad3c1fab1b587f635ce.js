(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{w9zn:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Machine-Learning/ML-Regression-Model-Performance.md"}});var l={_frontmatter:o},s=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"regression-model-performance"},"Regression Model Performance"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#regression-model-performance"}),"Regression Model Performance"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#r-squared-intuition"}),"R-Squared Intuition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#adjusted-r-squared-intuition"}),"Adjusted R-Squared Intuition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#evaluating-regression-models-performance"}),"Evaluating Regression Models Performance")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#interpretting-linear-regressions-coefficients"}),"Interpretting Linear Regressions Coefficients"))))),Object(a.b)("h2",{id:"r-squared-intuition"},"R-Squared Intuition"),Object(a.b)("p",null,"Interesting parameter and most people use it without understanding the underlying principles."),Object(a.b)("p",null,"We spoke about the ",Object(a.b)("inlineCode",{parentName:"p"},"simple linear regression")," model being the result of the ",Object(a.b)("inlineCode",{parentName:"p"},"ordinary least squares")," method. This is also known as ",Object(a.b)("inlineCode",{parentName:"p"},"sum of squares residuals")," and is given as ",Object(a.b)("inlineCode",{parentName:"p"},"SS[res]"),"."),Object(a.b)("p",null,"If we instead took ",Object(a.b)("inlineCode",{parentName:"p"},"SUM(y[i] - y[avg])^2"),", we get the ",Object(a.b)("inlineCode",{parentName:"p"},"total sum of squares SS[tot]"),". To get our regression, we get ",Object(a.b)("inlineCode",{parentName:"p"},"R^2 = 1 - (SS[res]/SS[tot])"),"."),Object(a.b)("p",null,"As you minimize the SS","[res]",", it becomes smaller, and as we get ",Object(a.b)("inlineCode",{parentName:"p"},"1 - (SS[res]/SS[tot])")," we actually start to get closer to 1. The closer we get to 1, the better. Can R^2 be negative? Yes. It can if the SS","[res]"," fits the line worse. In that case it would be better to use the average than the model - although it would be hard to do!"),Object(a.b)("h2",{id:"adjusted-r-squared-intuition"},"Adjusted R-Squared Intuition"),Object(a.b)("p",null,"This is the fun part!"),Object(a.b)("p",null,"Here we have our ",Object(a.b)("inlineCode",{parentName:"p"},"simple linear regression")," regression from before. We, the same concepts apply for multiple linear regression."),Object(a.b)("p",null,"R^2 - goodness of fit. The closer the one, the better - BUT the problem is when we start adding more IVs into the model. What we can look at is whether the R^2 getting better or worse, but because of SS","[res]"," the minimum will never decrease. ",Object(a.b)("strong",{parentName:"p"},"THIS IS IMPORTANT"),"."),Object(a.b)("p",null,"Once you add a new variable, it will affect what the variable looks like. Either the new variable will help minimize the SS","[res]",". If you cannot decress SS","[res]",", the new variable would be zero (unlikely)."),Object(a.b)("p",null,"Therefore, ",Object(a.b)("inlineCode",{parentName:"p"},"R^2")," will never decrease when you add in more variables. That being said, if the IV has zero correlation or causation with the DV, there randomly will be a slight correlation - therefore R^2 might slightly increase even though the variable is not helping the model."),Object(a.b)("p",null,"This is where ",Object(a.b)("inlineCode",{parentName:"p"},"adjusted R^2")," comes in."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"Adj R^2 = 1 - (1-R^2)*((n - 1)/(n - p - 1))\np - number of regressors\nn - sample size\n")),Object(a.b)("p",null,"This formula will penalise you for adding in IVs that have no correlation."),Object(a.b)("h2",{id:"evaluating-regression-models-performance"},"Evaluating Regression Models Performance"),Object(a.b)("p",null,"Reflecting back on the ",Object(a.b)("inlineCode",{parentName:"p"},"Backward Elimination")," process that we used, we actually came to a feeling that we shouldn't have excluded the last value of ",Object(a.b)("inlineCode",{parentName:"p"},"Marketing Spend"),"."),Object(a.b)("p",null,"The problem with the algorithms that we chose and the p value threshhold we chose is that the threshhold is arbitrary."),Object(a.b)("p",null,"What we can actually find at the bottom of those same reports that we used is that it also gives us the values of ",Object(a.b)("inlineCode",{parentName:"p"},"R-squared")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Adjusted R-squared"),"."),Object(a.b)("p",null,"If we observe this as we build our model in code, then we can use the report to help check the goodness of fit."),Object(a.b)("h2",{id:"interpretting-linear-regressions-coefficients"},"Interpretting Linear Regressions Coefficients"),Object(a.b)("p",null,"If we look at the third model and look at the IVs. If we change the IV value, we should be able to tell that DV should correlate in a certain direction."),Object(a.b)("p",null,"The coefficients come under their own heading."),Object(a.b)("p",null,"We should be able to ue logistics just for this. Magnitude can also trip you up. The ",Object(a.b)("inlineCode",{parentName:"p"},"Estimate")," value doesn't really give you more indication. We could alter the value of input and it would change values for ",Object(a.b)("inlineCode",{parentName:"p"},"Estimate")," etc. Think of magnitude in term of units of the IV."),Object(a.b)("p",null,"What the estimate shows that for every unit you increase, the IV would increase by a certain amount."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"THE IMPORTANT PART: THING IN TERMS OF PER UNIT")),Object(a.b)("p",null,"You'll also know that as you take out certain IVs, the actual effect that it brings into the model will also change."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Machine-Learning/ML-Regression-Model-Performance.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-machine-learning-ml-regression-model-performance-md-fad3c1fab1b587f635ce.js.map