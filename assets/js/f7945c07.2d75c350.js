"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5722],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92246:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const i={sidebar_position:10},o="10.\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411\uff08JS location.href\uff09",l={unversionedId:"vulinbox/SSRF/10unsafe-redirect-js",id:"vulinbox/SSRF/10unsafe-redirect-js",isDocsHomePage:!1,title:"10.\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411\uff08JS location.href\uff09",description:"\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411\u6f0f\u6d1e\u662f\u4e00\u79cd\u5b58\u5728\u4e8e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u5229\u7528\u8be5\u6f0f\u6d1e\u901a\u8fc7\u6784\u9020\u6076\u610f\u7684 URL \u6765\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230\u6076\u610f\u7f51\u7ad9\u6216\u5185\u5bb9\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u91cd\u5b9a\u5411\u662f\u901a\u8fc7 JavaScript \u7684location.href\u5c5e\u6027\u5b9e\u73b0\u7684\uff0c\u4f7f\u9875\u9762\u5728\u4e00\u5b9a\u65f6\u95f4\u540e\u81ea\u52a8\u8fdb\u884c\u91cd\u5b9a\u5411",source:"@site/Yaklab/vulinbox/SSRF/10unsafe-redirect-js.mdx",sourceDirName:"vulinbox/SSRF",slug:"/vulinbox/SSRF/10unsafe-redirect-js",permalink:"/Yaklab/vulinbox/SSRF/10unsafe-redirect-js",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"teamSidebar",previous:{title:"09.\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411(\u65e0\u9650\u91cd\u5b9a\u5411)",permalink:"/Yaklab/vulinbox/SSRF/09unsafe-redirect-hell"},next:{title:"11.\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411\uff08JS location.replace\uff09",permalink:"/Yaklab/vulinbox/SSRF/11unsafe-basic1"}},c=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u653b\u51fb\u793a\u4f8b\uff1a",id:"\u653b\u51fb\u793a\u4f8b",children:[]},{value:"\u9632\u5fa1\u63aa\u65bd\uff1a",id:"\u9632\u5fa1\u63aa\u65bd",children:[]},{value:"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891",id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891",children:[]}],u={toc:c},s="wrapper";function p(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"10\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411js-locationhref"},"10.\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411\uff08JS location.href\uff09"),(0,a.yg)("p",null,"\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411\u6f0f\u6d1e\u662f\u4e00\u79cd\u5b58\u5728\u4e8e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u5229\u7528\u8be5\u6f0f\u6d1e\u901a\u8fc7\u6784\u9020\u6076\u610f\u7684 URL \u6765\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230\u6076\u610f\u7f51\u7ad9\u6216\u5185\u5bb9\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u91cd\u5b9a\u5411\u662f\u901a\u8fc7 JavaScript \u7684",(0,a.yg)("inlineCode",{parentName:"p"},"location.href"),"\u5c5e\u6027\u5b9e\u73b0\u7684\uff0c\u4f7f\u9875\u9762\u5728\u4e00\u5b9a\u65f6\u95f4\u540e\u81ea\u52a8\u8fdb\u884c\u91cd\u5b9a\u5411"),(0,a.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\u6f0f\u6d1e\u4ee3\u7801\uff0c\u5c55\u793a\u4e86\u4e00\u4e2a\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"location.href"),"\u8fdb\u884c\u91cd\u5b9a\u5411\u7684\u6f0f\u6d1e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Go"},'{\n    DefaultQuery: "redUrl=/redirect/main",\n    Path:         "/redirect/js/basic",\n    Title:        "\u5b8c\u5168\u5f00\u653e\u91cd\u5b9a\u5411\uff08JS location.href\uff09",\n    Handler: func(writer http.ResponseWriter, request *http.Request) {\n        var u = LoadFromGetParams(request, "redUrl")\n        DefaultRender(`\n            <h2>Open Redirect With JS</h2>\n            <a href=` + strconv.Quote(u) + `>Click ME JUMP NOW (3s)</a>\n            <script>\n                setTimeout(function() {\n                    window.location.href = ` + strconv.Quote(u) + `;\n                }, 3000);\n            <\/script>\n        `, writer, request)\n    },\n    RiskDetected: true,\n}\n')),(0,a.yg)("h3",{id:"\u653b\u51fb\u793a\u4f8b"},"\u653b\u51fb\u793a\u4f8b\uff1a"),(0,a.yg)("p",null,"\u653b\u51fb\u8005\u53ef\u4ee5\u6784\u9020\u4e00\u4e2a\u6076\u610f\u94fe\u63a5\uff0c\u5176\u4e2d\u5305\u542b\u6076\u610f\u7684\u91cd\u5b9a\u5411 URL\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"http://127.0.0.1:8787/ssrf/redirect/js/basic?redUrl=http://127.0.0.1:8787/ssrf/flag\n")),(0,a.yg)("h3",{id:"\u9632\u5fa1\u63aa\u65bd"},"\u9632\u5fa1\u63aa\u65bd\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u767d\u540d\u5355\u9a8c\u8bc1\uff1a \u7ef4\u62a4\u4e00\u4e2a\u5408\u6cd5 URL \u7684\u767d\u540d\u5355\uff0c\u53ea\u5141\u8bb8\u91cd\u5b9a\u5411\u5230\u5df2\u77e5\u7684\u53d7\u4fe1\u4efb URL\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u907f\u514d\u76f4\u63a5\u6267\u884c\u7528\u6237\u8f93\u5165\u7684 JavaScript\uff1a \u5c3d\u91cf\u907f\u514d\u76f4\u63a5\u6267\u884c\u7528\u6237\u8f93\u5165\u7684 JavaScript \u4ee3\u7801\uff0c\u7279\u522b\u662f\u5728\u91cd\u5b9a\u5411\u8fc7\u7a0b\u4e2d\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u907f\u514d\u7528\u6237\u63d0\u4f9b\u91cd\u5b9a\u5411 URL\uff1a \u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff0c\u907f\u514d\u76f4\u63a5\u4f7f\u7528\u7528\u6237\u63d0\u4f9b\u7684 URL \u8fdb\u884c\u91cd\u5b9a\u5411\uff0c\u800c\u662f\u4f7f\u7528\u5185\u90e8\u7684\u6807\u8bc6\u7b26\uff0c\u7136\u540e\u5728\u540e\u7aef\u8fdb\u884c\u8f6c\u6362\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5b89\u5168\u7f16\u7801\u5b9e\u8df5\uff1a \u5f00\u53d1\u4eba\u5458\u5e94\u9075\u5faa\u5b89\u5168\u7f16\u7801\u5b9e\u8df5\uff0c\u786e\u4fdd\u5728\u4f7f\u7528 JavaScript \u65f6\u5bf9\u7528\u6237\u8f93\u5165\u8fdb\u884c\u9002\u5f53\u7684\u9a8c\u8bc1\u548c\u7f16\u7801\u3002")),(0,a.yg)("h3",{id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891"},"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891"),(0,a.yg)("video",{src:"/img/yaklab/ssrf/10unsafe-redirect-js.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}))}p.isMDXComponent=!0}}]);