"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6237],{15680:(t,e,a)=>{a.d(e,{xA:()=>d,yg:()=>c});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var y=n.createContext({}),p=function(t){var e=n.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(y.Provider,{value:e},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),o=p(a),N=r,c=o["".concat(y,".").concat(N)]||o[N]||m[N]||l;return a?n.createElement(c,g(g({ref:e},d),{},{components:a})):n.createElement(c,g({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=N;var i={};for(var y in e)hasOwnProperty.call(e,y)&&(i[y]=e[y]);i.originalType=t,i[o]="string"==typeof t?t:r,g[1]=i;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},99594:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>g,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=a(58168),r=(a(96540),a(15680));const l={},g="context",i={unversionedId:"api/context",id:"api/context",isDocsHomePage:!1,title:"context",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/context.md",sourceDirName:"api",slug:"/api/context",permalink:"/en/docs/api/context",editUrl:"https://github.com/yaklang/docs/api/context.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"codec",permalink:"/en/docs/api/codec"},next:{title:"crawler",permalink:"/en/docs/api/crawler"}},y=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"Background",id:"background",children:[]},{value:"New",id:"new",children:[]},{value:"Seconds",id:"seconds",children:[]},{value:"WithCancel",id:"withcancel",children:[]},{value:"WithDeadline",id:"withdeadline",children:[]},{value:"WithTimeout",id:"withtimeout",children:[]},{value:"WithTimeoutSeconds",id:"withtimeoutseconds",children:[]},{value:"WithValue",id:"withvalue",children:[]}]}],p={toc:y},d="wrapper";function o(t){let{components:e,...a}=t;return(0,r.yg)(d,(0,n.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"context"},"context"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#background"},"context.Background")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#new"},"context.New")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#seconds"},"context.Seconds")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Seconds \u8fd4\u56de\u4e00\u4e2a\u8d85\u65f6\u65f6\u95f4\u4e3a d \u79d2\u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09  \u5b83\u5b9e\u9645\u662f context.WithTimeoutSeconds \u7684\u522b\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#withcancel"},"context.WithCancel")),(0,r.yg)("td",{parentName:"tr",align:"left"},"WithCancel \u8fd4\u56de\u7ee7\u627f\u81ea parent \u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570  \u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u6216\u8005 parent \u7684\u53d6\u6d88\u51fd\u6570\u65f6\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#withdeadline"},"context.WithDeadline")),(0,r.yg)("td",{parentName:"tr",align:"left"},"WithDeadline \u8fd4\u56de\u7ee7\u627f\u81ea parent \u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570  \u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u6216\u8005\u8d85\u51fa\u6307\u5b9a\u65f6\u95f4\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#withtimeout"},"context.WithTimeout")),(0,r.yg)("td",{parentName:"tr",align:"left"},"WithTimeout \u8fd4\u56de\u7ee7\u627f\u81ea parent \u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570  \u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u6216\u8005\u8d85\u65f6\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#withtimeoutseconds"},"context.WithTimeoutSeconds")),(0,r.yg)("td",{parentName:"tr",align:"left"},"WithTimeoutSeconds \u8fd4\u56de\u8d85\u65f6\u65f6\u95f4\u4e3a d \u79d2\u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#withvalue"},"context.WithValue")),(0,r.yg)("td",{parentName:"tr",align:"left"},"WithValue \u8fd4\u56de\u7ee7\u627f\u81ea parent \uff0c\u540c\u65f6\u989d\u5916\u643a\u5e26\u952e\u503c\u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570  \u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u65f6\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88")))),(0,r.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,r.yg)("h3",{id:"background"},"Background"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Background() context.Context")),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"new"},"New"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"New() context.Context")),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"seconds"},"Seconds"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"Seconds \u8fd4\u56de\u4e00\u4e2a\u8d85\u65f6\u65f6\u95f4\u4e3a d \u79d2\u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09"),(0,r.yg)("p",null,"\u5b83\u5b9e\u9645\u662f context.WithTimeoutSeconds \u7684\u522b\u540d"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ctx = context.Seconds(10)\n")),(0,r.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Seconds(d float64) context.Context")),(0,r.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"d"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"float64")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"withcancel"},"WithCancel"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"WithCancel \u8fd4\u56de\u7ee7\u627f\u81ea parent \u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570"),(0,r.yg)("p",null,"\u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u6216\u8005 parent \u7684\u53d6\u6d88\u51fd\u6570\u65f6\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ctx, cancel = context.WithCancel(context.Background())\ndefer cancel()\n")),(0,r.yg)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"WithCancel(parent context.Context) (context.Context, context.CancelFunc)")),(0,r.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"parent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.CancelFunc")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"withdeadline"},"WithDeadline"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"WithDeadline \u8fd4\u56de\u7ee7\u627f\u81ea parent \u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570"),(0,r.yg)("p",null,"\u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u6216\u8005\u8d85\u51fa\u6307\u5b9a\u65f6\u95f4\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'dur, err = time.ParseDuration("10s")\nafter = time.Now().Add(dur)\nctx, cancel := context.WithDeadline(context.Background(), after)\ndefer cancel()\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"WithDeadline(parent context.Context, t time.Time) (context.Context, context.CancelFunc)")),(0,r.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"parent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"t"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"time.Time")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.CancelFunc")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"withtimeout"},"WithTimeout"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"WithTimeout \u8fd4\u56de\u7ee7\u627f\u81ea parent \u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570"),(0,r.yg)("p",null,"\u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u6216\u8005\u8d85\u65f6\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'dur, err = time.ParseDuration("10s")\nctx, cancel := context.WithTimeout(context.Background(), dur)\ndefer cancel()\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-5"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"WithTimeout(parent context.Context, timeout time.Duration) (context.Context, context.CancelFunc)")),(0,r.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"parent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"timeout"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.CancelFunc")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"withtimeoutseconds"},"WithTimeoutSeconds"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"WithTimeoutSeconds \u8fd4\u56de\u8d85\u65f6\u65f6\u95f4\u4e3a d \u79d2\u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ctx = context.WithTimeoutSeconds(10)\n")),(0,r.yg)("h4",{id:"\u5b9a\u4e49-6"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"WithTimeoutSeconds(d float64) context.Context")),(0,r.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"d"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"float64")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"withvalue"},"WithValue"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"WithValue \u8fd4\u56de\u7ee7\u627f\u81ea parent \uff0c\u540c\u65f6\u989d\u5916\u643a\u5e26\u952e\u503c\u7684 Context \u63a5\u53e3\uff08\u5373\u4e0a\u4e0b\u6587\u63a5\u53e3\uff09\u548c\u53d6\u6d88\u51fd\u6570"),(0,r.yg)("p",null,"\u5f53\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u51fd\u6570\u65f6\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u4f1a\u88ab\u53d6\u6d88"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'ctx = context.WithValue(context.Background(), "key", "value")\nctx.Value("key") // "value"\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-7"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"WithValue(parent context.Context, key any, val any) context.Context")),(0,r.yg)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"parent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"key"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"any")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"val"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"any")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,r.yg)("td",{parentName:"tr",align:"left"})))))}o.isMDXComponent=!0}}]);