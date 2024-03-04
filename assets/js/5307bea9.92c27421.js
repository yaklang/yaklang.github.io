"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[2253],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>f});var r=a(96540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},g=Object.keys(t);for(r=0;r<g.length;r++)a=g[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(t);for(r=0;r<g.length;r++)a=g[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},m="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,g=t.originalType,i=t.parentName,p=y(t,["components","mdxType","originalType","parentName"]),m=d(a),o=n,f=m["".concat(i,".").concat(o)]||m[o]||N[o]||g;return a?r.createElement(f,l(l({ref:e},p),{},{components:a})):r.createElement(f,l({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var g=a.length,l=new Array(g);l[0]=o;var y={};for(var i in e)hasOwnProperty.call(e,i)&&(y[i]=e[i]);y.originalType=t,y[m]="string"==typeof t?t:n,l[1]=y;for(var d=2;d<g;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},45676:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>l,default:()=>m,frontMatter:()=>g,metadata:()=>y,toc:()=>i});var r=a(58168),n=(a(96540),a(15680));const g={},l="exec",y={unversionedId:"api/exec",id:"api/exec",isDocsHomePage:!1,title:"exec",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/exec.md",sourceDirName:"api",slug:"/api/exec",permalink:"/docs/api/exec",editUrl:"https://github.com/yaklang/docs/api/exec.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"env",permalink:"/docs/api/env"},next:{title:"facades",permalink:"/docs/api/facades"}},i=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"CheckCrash",id:"checkcrash",children:[]},{value:"Command",id:"command",children:[]},{value:"CommandContext",id:"commandcontext",children:[]},{value:"System",id:"system",children:[]},{value:"SystemBatch",id:"systembatch",children:[]},{value:"SystemContext",id:"systemcontext",children:[]},{value:"WatchOutput",id:"watchoutput",children:[]},{value:"WatchStderr",id:"watchstderr",children:[]},{value:"WatchStdout",id:"watchstdout",children:[]},{value:"callback",id:"callback",children:[]},{value:"concurrent",id:"concurrent",children:[]},{value:"timeout",id:"timeout",children:[]}]}],d={toc:i},p="wrapper";function m(t){let{components:e,...a}=t;return(0,n.yg)(p,(0,r.A)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"exec"},"exec"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#checkcrash"},"exec.CheckCrash")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#command"},"exec.Command")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#commandcontext"},"exec.CommandContext")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#system"},"exec.System")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#systembatch"},"exec.SystemBatch")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#systemcontext"},"exec.SystemContext")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6267\u884c\u7cfb\u7edf\u547d\u4ee4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#watchoutput"},"exec.WatchOutput")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#watchstderr"},"exec.WatchStderr")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#watchstdout"},"exec.WatchStdout")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#callback"},"exec.callback")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#concurrent"},"exec.concurrent")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#timeout"},"exec.timeout")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,n.yg)("h3",{id:"checkcrash"},"CheckCrash"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"CheckCrash(c *exec.Cmd) (bool, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"c"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"*exec.Cmd")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"command"},"Command"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Command(i string) (*exec.Cmd, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"*exec.Cmd")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"commandcontext"},"CommandContext"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"CommandContext(ctx context.Context, s string) (*exec.Cmd, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ctx"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"s"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"*exec.Cmd")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"system"},"System"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"System(i string) ([]byte, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"systembatch"},"SystemBatch"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"SystemBatch(i string, opts ...poolOpt)")),(0,n.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"opts"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"...poolOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"systemcontext"},"SystemContext"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"\u6267\u884c\u7cfb\u7edf\u547d\u4ee4"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-5"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"SystemContext(ctx context.Context, i string) ([]byte, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ctx"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"watchoutput"},"WatchOutput"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-6"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"WatchOutput(i string, timeout float64, f func(raw []byte) bool) error")),(0,n.yg)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timeout"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"float64")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"f"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"func(raw []byte) bool")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"watchstderr"},"WatchStderr"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-7"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"WatchStderr(i string, timeout float64, f func(raw []byte) bool) error")),(0,n.yg)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timeout"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"float64")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"f"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"func(raw []byte) bool")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"watchstdout"},"WatchStdout"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-8"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-8"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"WatchStdout(i string, timeout float64, f func(raw []byte) bool) error")),(0,n.yg)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timeout"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"float64")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"f"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"func(raw []byte) bool")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"callback"},"callback"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-9"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-9"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"callback(f func(string, []byte)) poolOpt")),(0,n.yg)("h4",{id:"\u53c2\u6570-9"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"f"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"func(string, []byte)")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"poolOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"concurrent"},"concurrent"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-10"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-10"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"concurrent(i int) poolOpt")),(0,n.yg)("h4",{id:"\u53c2\u6570-10"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"poolOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"timeout"},"timeout"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-11"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-11"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"timeout(i float64) poolOpt")),(0,n.yg)("h4",{id:"\u53c2\u6570-11"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"i"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"float64")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-10"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"poolOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);