(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{wfvZ:function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return o})),n.d(r,"default",(function(){return a}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var t=n("/FXl"),s=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Redis/Redis-Nodejs.md"}});var l={_frontmatter:o},c=s.a;function a(e){var r=e.components,n=function(e,r){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(t.b)(c,i({},l,n,{components:r,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"redis-with-nodejs"},"Redis with Nodejs"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"yarn install redis")," and use the controller. Example controller setup. Use promises to enable sequential optionality."),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const redis = require('redis');\n\nfunction setHashSet(key, field, value) {\n  return new Promise((resolve, reject) => {\n    client.hset(key, field, value, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction getHashSet(key) {\n  return new Promise((resolve, reject) => {\n    client.hvals(key, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction delKey(key) {\n  return new Promise((resolve, reject) => {\n    client.del(key, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction getKeys(key) {\n  return new Promise((resolve, reject) => {\n    client.hkeys(key, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction getValue(key, field) {\n  return new Promise((resolve, reject) => {\n    client.hget(key, field, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction setArray(key, arr) {\n  return new Promise((resolve, reject) => {\n    client.sadd(key, ...arr, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction getArray(key) {\n  return new Promise((resolve, reject) => {\n    client.smembers(key, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction getListLen(key) {\n  return new Promise((resolve, reject) => {\n    client.llen(key, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction pushToListEnd(key) {\n  return new Promise((resolve, reject) => {\n    client.rpush(key, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction popFromListStart(key) {\n  return new Promise((resolve, reject) => {\n    client.lpop(key, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nfunction deleteArrayMember(key, value) {\n  return new Promise((resolve, reject) => {\n    client.srem(key, value, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}\n\nmodule.exports = {\n  setHashSet,\n  getHashSet,\n  getKeys,\n  getValue,\n  setArray,\n  getArray,\n  deleteArrayMember,\n  getListLen,\n  pushToListEnd,\n  popFromListStart\n};\n")))}a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Redis/Redis-Nodejs.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-redis-redis-nodejs-md-8c7a0e4e98ce1eec058a.js.map