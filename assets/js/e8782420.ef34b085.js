"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7769],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>N});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),y=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=y(e.components);return a.createElement(p.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),o=y(r),f=n,N=o["".concat(p,".").concat(f)]||o[f]||m[f]||l;return r?a.createElement(N,i(i({ref:t},d),{},{components:r})):a.createElement(N,i({ref:t},d))}));function N(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[o]="string"==typeof e?e:n,i[1]=g;for(var y=2;y<l;y++)i[y]=r[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35031:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={},i="rdp",g={unversionedId:"api/rdp",id:"api/rdp",isDocsHomePage:!1,title:"rdp",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/rdp.md",sourceDirName:"api",slug:"/api/rdp",permalink:"/docs/api/rdp",editUrl:"https://github.com/yaklang/docs/api/rdp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"poc",permalink:"/docs/api/poc"},next:{title:"re",permalink:"/docs/api/re"}},p=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"Login",id:"login",children:[]},{value:"Version",id:"version",children:[]}]}],y={toc:p},d="wrapper";function o(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"rdp"},"rdp"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#login"},"rdp.Login")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#version"},"rdp.Version")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,n.yg)("h3",{id:"login"},"Login"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Login(ip string, domain string, user string, password string, port int) (_ bool, err error)")),(0,n.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ip"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"domain"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"user"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"password"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"port"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"_"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"err"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"version"},"Version"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Version(addr string, timeout time.Duration) (_ string, _ []string, finalResult error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"addr"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timeout"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"time.Duration")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"_"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"_"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"finalResult"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}o.isMDXComponent=!0}}]);