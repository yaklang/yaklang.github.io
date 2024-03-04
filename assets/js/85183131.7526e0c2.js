"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3957],{15680:(n,e,t)=>{t.d(e,{xA:()=>c,yg:()=>y});var i=t(96540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=i.createContext({}),o=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):g(g({},e),n)),t},c=function(n){var e=o(n.components);return i.createElement(l.Provider,{value:e},n.children)},u="mdxType",x={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),u=o(t),s=r,y=u["".concat(l,".").concat(s)]||u[s]||x[s]||a;return t?i.createElement(y,g(g({ref:e},c),{},{components:t})):i.createElement(y,g({ref:e},c))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,g=new Array(a);g[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p[u]="string"==typeof n?n:r,g[1]=p;for(var o=2;o<a;o++)g[o]=t[o];return i.createElement.apply(null,g)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},58710:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>g,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=t(58168),r=(t(96540),t(15680));const a={sidebar_position:12},g="Nginx\u63d2\u4ef6\u4f7f\u7528",p={unversionedId:"wiki/DetectionPlug-in/Nginx",id:"wiki/DetectionPlug-in/Nginx",isDocsHomePage:!1,title:"Nginx\u63d2\u4ef6\u4f7f\u7528",description:"1 Nginx \u6587\u4ef6\u89e3\u6790\u6f0f\u6d1e",source:"@site/Yaklab/wiki/DetectionPlug-in/Nginx.md",sourceDirName:"wiki/DetectionPlug-in",slug:"/wiki/DetectionPlug-in/Nginx",permalink:"/Yaklab/wiki/DetectionPlug-in/Nginx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"teamSidebar",previous:{title:"WebLogic\u63d2\u4ef6\u4f7f\u7528",permalink:"/Yaklab/wiki/DetectionPlug-in/WebLogic"},next:{title:"Thinkphp\u63d2\u4ef6\u4f7f\u7528",permalink:"/Yaklab/wiki/DetectionPlug-in/Thinkphp"}},l=[{value:"1 Nginx \u6587\u4ef6\u89e3\u6790\u6f0f\u6d1e",id:"1-nginx-\u6587\u4ef6\u89e3\u6790\u6f0f\u6d1e",children:[]},{value:"2 Nginx CVE-2017-7529 \u6f0f\u6d1e\u68c0\u6d4b",id:"2-nginx-cve-2017-7529-\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"3 Nginx \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b",id:"3-nginx-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"4 Nginx CRLF\u6ce8\u5165\u6f0f\u6d1e\u68c0\u6d4b",id:"4-nginx-crlf\u6ce8\u5165\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"5 Nginx \u7a7a\u5b57\u8282\u4efb\u610f\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u68c0\u6d4b",id:"5-nginx-\u7a7a\u5b57\u8282\u4efb\u610f\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u68c0\u6d4b",children:[]}],o={toc:l},c="wrapper";function u(n){let{components:e,...a}=n;return(0,r.yg)(c,(0,i.A)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"nginx\u63d2\u4ef6\u4f7f\u7528"},"Nginx\u63d2\u4ef6\u4f7f\u7528"),(0,r.yg)("h2",{id:"1-nginx-\u6587\u4ef6\u89e3\u6790\u6f0f\u6d1e"},"1 Nginx \u6587\u4ef6\u89e3\u6790\u6f0f\u6d1e"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,"vulhub\u6d4b\u8bd5\u7f51\u7ad9\u8bbf\u95ee\u4e0a\u4f20\u7684\u56fe\u7247\n",(0,r.yg)("a",{parentName:"p",href:"http://xx.xx.xx.xx/uploadfiles/nginx.png"},"http://xx.xx.xx.xx/uploadfiles/nginx.png")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(84842).A})),(0,r.yg)("p",null,"\u5229\u7528\u6587\u4ef6\u89e3\u6790\u6f0f\u6d1e\u8fdb\u884c\u89e3\u6790\n",(0,r.yg)("a",{parentName:"p",href:"http://xx.xx.xx.xx/uploadfiles/nginx.png/.php"},"http://xx.xx.xx.xx/uploadfiles/nginx.png/.php")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(99073).A})),(0,r.yg)("h2",{id:"2-nginx-cve-2017-7529-\u6f0f\u6d1e\u68c0\u6d4b"},"2 Nginx CVE-2017-7529 \u6f0f\u6d1e\u68c0\u6d4b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"f863b7be-9536-4de3-bc94-5800ac2a7010"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,"\u8f93\u5165ip:\u7aef\u53e3 \u70b9\u51fb\u5f00\u59cb\u6267\u884c\n\u6210\u529f\u68c0\u6d4b\u51fa\u6f0f\u6d1e"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(77944).A})),(0,r.yg)("h2",{id:"3-nginx-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b"},"3 Nginx \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"58587b92-e88c-4557-8f56-23bac605bbe1"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,"\u8f93\u5165ip:\u7aef\u53e3 \u70b9\u51fb\u5f00\u59cb\u6267\u884c\n\u6210\u529f\u68c0\u6d4b\u51fa\u6f0f\u6d1e"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(26935).A})),(0,r.yg)("h2",{id:"4-nginx-crlf\u6ce8\u5165\u6f0f\u6d1e\u68c0\u6d4b"},"4 Nginx CRLF\u6ce8\u5165\u6f0f\u6d1e\u68c0\u6d4b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,"\u6267\u884cpyload\uff1acurl -I ",(0,r.yg)("a",{parentName:"p",href:"http://xx.xx.xx.xx:8080/%0d%0aSet-Cookie:%20a=1"},"http://xx.xx.xx.xx:8080/%0d%0aSet-Cookie:%20a=1")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(81358).A})),(0,r.yg)("h2",{id:"5-nginx-\u7a7a\u5b57\u8282\u4efb\u610f\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u68c0\u6d4b"},"5 Nginx \u7a7a\u5b57\u8282\u4efb\u610f\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u68c0\u6d4b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,"\u6682\u65e0\u6848\u4f8b"))}u.isMDXComponent=!0},84842:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/nginx-1-9d900bb2931682906a81b86440f597ea.png"},99073:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/nginx-2-094e3eb7d54fb971c3d3cda90fb16dda.png"},77944:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/nginx-3-23397bcd3957dcc4400dcb6f5a1babe8.png"},26935:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/nginx-4-b33e4aac29b93b769112561ff237c218.png"},81358:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/nginx-5-1f6b6b9db9722aa0a711c52e3bf6a782.png"}}]);