(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{FoXZ:function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return o})),n.d(r,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var t=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Data-Structures/Python.md"}});var u={_frontmatter:o},c=a.a;function s(e){var r=e.components,n=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(t.b)(c,i({},u,n,{components:r,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"python-data-structures"},"Python Data Structures"),Object(t.b)("h2",{id:"array-chunks"},"Array Chunks"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-python"}),"def arrayChunk(arr, size):\n    print(arr)\n    if (size == 0):\n        return []\n    if (len(arr) < size):\n        return [arr]\n    tmp = []\n    chunkedArr = []\n    for i, d in enumerate(arr):\n        tmp.append(d)\n        if (i % size == size - 1 or i == len(arr) - 1):\n            chunkedArr.append(tmp)\n            tmp = []\n    return chunkedArr\n")),Object(t.b)("h2",{id:"palindromes"},"Palindromes"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-python"}),'import re\n\ndef isPalindrome(string):\n    reStr = re.sub("[^a-zA-Z]", "", string).strip().lower()\n    return reStr[::-1] == reStr\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Python.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-data-structures-python-md-0af552fa873027a4e56f.js.map