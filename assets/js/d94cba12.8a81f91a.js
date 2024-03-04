"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9707],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},g=Object.keys(e);for(n=0;n<g.length;n++)a=g[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(n=0;n<g.length;n++)a=g[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),p=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(y.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,g=e.originalType,y=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),N=r,f=d["".concat(y,".").concat(N)]||d[N]||m[N]||g;return a?n.createElement(f,l(l({ref:t},o),{},{components:a})):n.createElement(f,l({ref:t},o))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var g=a.length,l=new Array(g);l[0]=N;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<g;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},21720:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>g,metadata:()=>i,toc:()=>y});var n=a(58168),r=(a(96540),a(15680));const g={},l="bot",i={unversionedId:"api/bot",id:"api/bot",isDocsHomePage:!1,title:"bot",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/bot.md",sourceDirName:"api",slug:"/api/bot",permalink:"/docs/api/bot",editUrl:"https://github.com/yaklang/docs/api/bot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bin",permalink:"/docs/api/bin"},next:{title:"brute",permalink:"/docs/api/brute"}},y=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"FromEnv",id:"fromenv",children:[]},{value:"New",id:"new",children:[]},{value:"ding",id:"ding",children:[]},{value:"webhook",id:"webhook",children:[]},{value:"webhookWithSecret",id:"webhookwithsecret",children:[]},{value:"workwx",id:"workwx",children:[]}]}],p={toc:y},o="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(o,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"bot"},"bot"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#fromenv"},"bot.FromEnv")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#new"},"bot.New")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#ding"},"bot.ding")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#webhook"},"bot.webhook")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#webhookwithsecret"},"bot.webhookWithSecret")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#workwx"},"bot.workwx")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,r.yg)("h3",{id:"fromenv"},"FromEnv"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FromEnv() *Client")),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"*Client")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"new"},"New"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"New(opts ...ConfigOpt) *Client")),(0,r.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"opts"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...ConfigOpt")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"*Client")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"ding"},"ding"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ding(webhook string, key string) ConfigOpt")),(0,r.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"webhook"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"key"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOpt")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"webhook"},"webhook"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"webhook(webhook string) ConfigOpt")),(0,r.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"webhook"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOpt")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"webhookwithsecret"},"webhookWithSecret"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"webhookWithSecret(webhook string, key string) ConfigOpt")),(0,r.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"webhook"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"key"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOpt")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"workwx"},"workwx"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-5"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"workwx(webhook string) ConfigOpt")),(0,r.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"webhook"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOpt")),(0,r.yg)("td",{parentName:"tr",align:"left"})))))}d.isMDXComponent=!0}}]);