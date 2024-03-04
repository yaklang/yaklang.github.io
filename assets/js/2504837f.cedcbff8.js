"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8968],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,u=m["".concat(c,".").concat(d)]||m[d]||y[d]||i;return t?r.createElement(u,o(o({ref:n},p),{},{components:t})):r.createElement(u,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84080:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={sidebar_position:11},o="\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d/\u8bfb\u53d6",l={unversionedId:"wiki/CommonVulnerabilities/AnyFileDownload",id:"wiki/CommonVulnerabilities/AnyFileDownload",isDocsHomePage:!1,title:"\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d/\u8bfb\u53d6",description:"\u6f0f\u6d1e\u63cf\u8ff0\uff1a",source:"@site/Yaklab/wiki/CommonVulnerabilities/AnyFileDownload.md",sourceDirName:"wiki/CommonVulnerabilities",slug:"/wiki/CommonVulnerabilities/AnyFileDownload",permalink:"/Yaklab/wiki/CommonVulnerabilities/AnyFileDownload",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"teamSidebar",previous:{title:"XSS\u6f0f\u6d1e",permalink:"/Yaklab/wiki/CommonVulnerabilities/xss"},next:{title:"SSRF\u6f0f\u6d1e",permalink:"/Yaklab/wiki/CommonVulnerabilities/SSRF"}},c=[],s={toc:c},p="wrapper";function m(e){let{components:n,...i}=e;return(0,a.yg)(p,(0,r.A)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d\u8bfb\u53d6"},"\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d/\u8bfb\u53d6"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.yg)("p",null,"\u4e00\u4e9b\u7f51\u7ad9\u7531\u4e8e\u4e1a\u52a1\u9700\u6c42\uff0c\u53ef\u80fd\u63d0\u4f9b\u6587\u4ef6\u67e5\u770b\u6216\u4e0b\u8f7d\u7684\u529f\u80fd\uff0c\u5982\u679c\u5bf9\u7528\u6237\u67e5\u770b\u6216\u4e0b\u8f7d\u7684\u6587\u4ef6\u4e0d\u505a\u9650\u5236\uff0c\u5219\u6076\u610f\u7528\u6237\u5c31\u80fd\u591f\u67e5\u770b\u6216\u4e0b\u8f7d\u4efb\u610f\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u662f\u6e90\u4ee3\u7801\u6587\u4ef6\u3001\u654f\u611f\u6587\u4ef6\u7b49\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,a.yg)("p",null,"\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\u5177\u6709\u4e0b\u8f7d\u6587\u4ef6\u7684\u529f\u80fd\u70b9"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(8894).A})),(0,a.yg)("p",null,"\u62fc\u63a5\u60f3\u8981\u8bbf\u95ee\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982../../etc/passwd\u6587\u4ef6\uff0c\u6210\u529f\u8bfb\u53d6\u5230\u8be5\u6587\u4ef6\u5185\u5bb9"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(29269).A})),(0,a.yg)("p",null,"Windows\u7cfb\u7edf\u4e0b\u53ef\u4ee5\u62fc\u63a5\u8bbf\u95ee..",".",".",".",".",".",".",".",".",".",".\\Windows\\win.ini"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(17644).A})),(0,a.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"\u6f0f\u6d1e\u4fee\u590d\u65b9\u6848"),(0,a.yg)("ol",{parentName:"div"},(0,a.yg)("li",{parentName:"ol"},"\u8fc7\u6ee4\u70b9(.)\u4f7f\u7528\u6237\u5728url\u4e2d\u4e0d\u80fd\u56de\u6eaf\u4e0a\u7ea7\u76ee\u5f55\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u6b63\u5219\u4e25\u683c\u5224\u65ad\u7528\u6237\u8f93\u5165\u53c2\u6570\u7684\u683c\u5f0f\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u5c06\u4e0b\u8f7d\u533a\u72ec\u7acb\u51fa\u6765\uff0c\u653e\u5728\u9879\u76ee\u8def\u5f84\u5916\uff0c\u7ed9\u6bcf\u4e2a\u4e0b\u8f7d\u8d44\u6e90\u56fa\u5b9a\u7684URL\uff0c\u800c\u4e0d\u662f\u6240\u6709\u7684\u4e0b\u8f7d\u8d44\u6e90\u90fd\u662f\u7edf\u4e00\u7684URL\uff1a",(0,a.yg)("a",{parentName:"li",href:"http://www.test.com/download?filename=%E6%96%87%E4%BB%B6%E5%90%8D%E3%80%82"},"http://www.test.com/download?filename=\u6587\u4ef6\u540d\u3002"))))))}m.isMDXComponent=!0},8894:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/AnyFileDownload-1-4631ff4b7ac7416a89c2dcd04e534b14.png"},29269:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/AnyFileDownload-2-ef7cb54aec1b8ae558be3424dc678730.png"},17644:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/AnyFileDownload-3-6142e782e6c07893ddd4b5a1cf159372.png"}}]);