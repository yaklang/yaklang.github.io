"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6292],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,d=c["".concat(s,".").concat(m)]||c[m]||y[m]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66525:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:9},l="09.\u8fdb\u9636 1\uff1a\u8f93\u51fa\u5b58\u5728\u4e8e HTML \u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u662f\u4e0d\u518d on \u5c5e\u6027\u4e2d(IMG ALT)",i={unversionedId:"vulinbox/XSS/09unsafe-attrjson",id:"vulinbox/XSS/09unsafe-attrjson",isDocsHomePage:!1,title:"09.\u8fdb\u9636 1\uff1a\u8f93\u51fa\u5b58\u5728\u4e8e HTML \u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u662f\u4e0d\u518d on \u5c5e\u6027\u4e2d(IMG ALT)",description:"\u8fd9\u4e2a\u6848\u4f8b\u662f XSS\uff08\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09\u7684\u8fdb\u9636\u5f62\u5f0f\uff0c\u5c55\u793a\u4e86\u4e00\u79cd\u8f93\u51fa\u5b58\u5728\u4e8e HTML \u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u4e0d\u518d on \u5c5e\u6027\u4e2d\u7684\u6f0f\u6d1e\u7c7b\u578b\u3002",source:"@site/Yaklab/vulinbox/XSS/09unsafe-attrjson.mdx",sourceDirName:"vulinbox/XSS",slug:"/vulinbox/XSS/09unsafe-attrjson",permalink:"/en/Yaklab/vulinbox/XSS/09unsafe-attrjson",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"teamSidebar",previous:{title:"08.\u8f93\u51fa\u5b58\u5728\u4e8e HTML \u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u662f\u4e0d\u518d on \u5c5e\u6027\u4e2d(IMG ALT)",permalink:"/en/Yaklab/vulinbox/XSS/08unsafe-attr"},next:{title:"10.\u8fdb\u9636 2\uff1a\u8f93\u51fa\u5b58\u5728\u4e8e HTML \u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u662f\u4e0d\u518d on \u5c5e\u6027\u4e2d(IMG ALT)",permalink:"/en/Yaklab/vulinbox/XSS/10unsafe-b64-json"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u653b\u51fb\u793a\u4f8b\uff1a",id:"\u653b\u51fb\u793a\u4f8b",children:[]},{value:"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891",id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891",children:[]}],u={toc:s},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"09\u8fdb\u9636-1\u8f93\u51fa\u5b58\u5728\u4e8e-html-\u8282\u70b9\u5c5e\u6027\u4e2d\u4f46\u662f\u4e0d\u518d-on-\u5c5e\u6027\u4e2dimg-alt"},"09.\u8fdb\u9636 1\uff1a\u8f93\u51fa\u5b58\u5728\u4e8e HTML \u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u662f\u4e0d\u518d on \u5c5e\u6027\u4e2d(IMG ALT)"),(0,a.yg)("p",null,"\u8fd9\u4e2a\u6848\u4f8b\u662f XSS\uff08\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09\u7684\u8fdb\u9636\u5f62\u5f0f\uff0c\u5c55\u793a\u4e86\u4e00\u79cd\u8f93\u51fa\u5b58\u5728\u4e8e HTML \u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u4e0d\u518d on \u5c5e\u6027\u4e2d\u7684\u6f0f\u6d1e\u7c7b\u578b\u3002"),(0,a.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Go"},'{\n    DefaultQuery: "json={\\"value\\":\\"value=visitor-name\\"}",\n    Path:         "/attr/alt/json",\n    Title:        "\u8fdb\u96361\uff1a\u8f93\u51fa\u5b58\u5728\u4e8eHTML\u8282\u70b9\u5c5e\u6027\u4e2d\uff0c\u4f46\u4e0d\u518don\u5c5e\u6027\u4e2d(IMG ALT)",\n    Handler: func(writer http.ResponseWriter, request *http.Request) {\n        unsafeTemplateRender(writer, request, `<!doctype html>\n<html>\n<head>\n    <title>Example DEMO</title>\n    \x3c!-- ... \u7701\u7565\u5176\u4ed6\u6807\u7b7e ... --\x3e\n</head>\n\n<body>\n<div>\n    Hello Visitor!\n    <br>\n    Here are photo for U! <br>\n    <img style=\'width: 100px\' alt=\'{{.value}}\' src="/static/logo.png" onclick=\'javascript:alert("Welcome CLICK ME!")\'/>\n</div>\n</body>\n</html>`, map[string]any{\n            "value": LoadFromGetJSONParam(request, "json", "value"),\n        })\n        writer.Header().Set("Content-Type", "text/html")\n    },\n    RiskDetected: true,\n}\n')),(0,a.yg)("h3",{id:"\u653b\u51fb\u793a\u4f8b"},"\u653b\u51fb\u793a\u4f8b\uff1a"),(0,a.yg)("p",null,"\u653b\u51fb\u8005\u53ef\u4ee5\u6784\u9020\u4ee5\u4e0b\u6076\u610f URL \u6765\u5229\u7528\u6f0f\u6d1e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"http://127.0.0.1:8787/xss/attr/alt/json?json=%7B%22value%22%3A%22%27+onmouseover%3D%27alert%28123%29%22%7D\n")),(0,a.yg)("p",null,"\u5728\u4e0a\u8ff0\u653b\u51fb\u793a\u4f8b\u4e2d\uff0c\u653b\u51fb\u8005\u901a\u8fc7\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"json"),"\u53c2\u6570\u4e2d\u6ce8\u5165",(0,a.yg)("inlineCode",{parentName:"p"},"%27+onmouseover%3D%27alert%28123%29"),"\uff0c\u5c06\u6076\u610f\u4ee3\u7801\u5d4c\u5165\u5230 ALT \u5c5e\u6027\u4e2d\u3002\u5f53\u7528\u6237\u6d4f\u89c8\u5230\u5305\u542b\u8fd9\u4e2a IMG \u6807\u7b7e\u7684\u9875\u9762\u65f6\uff0c\u9f20\u6807\u60ac\u505c\u5728\u56fe\u50cf\u4e0a\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u6267\u884c\u5d4c\u5165\u7684 JavaScript \u4ee3\u7801\uff0c\u5f39\u51fa\u4e00\u4e2a\u5f39\u7a97\uff0c\u663e\u793a\u201c123\u201d\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u9632\u5fa1\u63aa\u65bd\uff1a")),(0,a.yg)("p",null,"\u8981\u9632\u8303\u8fd9\u79cd\u7c7b\u578b\u7684\u6f0f\u6d1e\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5bf9\u4ece\u7528\u6237\u8f93\u5165\u83b7\u53d6\u7684\u6570\u636e\u8fdb\u884c\u9002\u5f53\u7684\u8f6c\u4e49\u548c\u8fc7\u6ee4\uff0c\u786e\u4fdd\u7528\u6237\u63d0\u4f9b\u7684\u5185\u5bb9\u4e0d\u4f1a\u88ab\u89e3\u91ca\u4e3a HTML \u6216 JavaScript \u4ee3\u7801\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u5b89\u5168\u7684 HTML \u7f16\u7801\u51fd\u6570\u6765\u5b9e\u73b0\u3002"),(0,a.yg)("h3",{id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891"},"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891"),(0,a.yg)("video",{src:"/img/yaklab/xss/09unsafe-attrjson.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}))}c.isMDXComponent=!0}}]);