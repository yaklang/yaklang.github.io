"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4927],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>g});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||y[m]||i;return r?t.createElement(g,l(l({ref:n},s),{},{components:r})):t.createElement(g,l({ref:n},s))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42397:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const i={sidebar_position:3},l="03.\u4e0d\u5b89\u5168\u7684\u8fc7\u6ee4\u5bfc\u81f4 XSS",o={unversionedId:"vulinbox/XSS/03unsafe-nocase",id:"vulinbox/XSS/03unsafe-nocase",isDocsHomePage:!1,title:"03.\u4e0d\u5b89\u5168\u7684\u8fc7\u6ee4\u5bfc\u81f4 XSS",description:"\u5982\u679c\u4e0d\u5b89\u5168\u5730\u8fc7\u6ee4\u8f93\u5165\uff0c\u7279\u522b\u662f\u5bf9``\u6807\u7b7e\u7684\u4e0d\u5b89\u5168\u8fc7\u6ee4\uff0c\u53ef\u80fd\u5bfc\u81f4 XSS\uff08\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09\u6f0f\u6d1e\u3002XSS \u653b\u51fb\u662f\u4e00\u79cd\u5229\u7528\u7f51\u9875\u5e94\u7528\u7a0b\u5e8f\u672a\u6b63\u786e\u8fc7\u6ee4\u6216\u8f6c\u4e49\u7528\u6237\u8f93\u5165\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u6076\u610f\u811a\u672c\u6ce8\u5165\u5230\u7f51\u9875\u4e2d\u5e76\u5728\u7528\u6237\u6d4f\u89c8\u5668\u4e0a\u6267\u884c\u7684\u653b\u51fb\u3002",source:"@site/Yaklab/vulinbox/XSS/03unsafe-nocase.mdx",sourceDirName:"vulinbox/XSS",slug:"/vulinbox/XSS/03unsafe-nocase",permalink:"/Yaklab/vulinbox/XSS/03unsafe-nocase",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"teamSidebar",previous:{title:"02.\u76f4\u63a5\u62fc\u63a5\u5bfc\u81f4 XSS \u6ce8\u5165",permalink:"/Yaklab/vulinbox/XSS/02unsafe-echo"},next:{title:"04.XSS: \u5b58\u5728\u4e8e JS \u4ee3\u7801\u4e2d(\u5b57\u7b26\u4e32\u4e2d)",permalink:"/Yaklab/vulinbox/XSS/04unsafe-instr"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u653b\u51fb\u793a\u4f8b\uff1a",id:"\u653b\u51fb\u793a\u4f8b",children:[]},{value:"\u9632\u5fa1\u63aa\u65bd\uff1a",id:"\u9632\u5fa1\u63aa\u65bd",children:[]},{value:"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891",id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891",children:[]}],c={toc:p},s="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(s,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"03\u4e0d\u5b89\u5168\u7684\u8fc7\u6ee4\u5bfc\u81f4-xss"},"03.\u4e0d\u5b89\u5168\u7684\u8fc7\u6ee4\u5bfc\u81f4 XSS"),(0,a.yg)("p",null,"\u5982\u679c\u4e0d\u5b89\u5168\u5730\u8fc7\u6ee4\u8f93\u5165\uff0c\u7279\u522b\u662f\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"<script>"),"\u6807\u7b7e\u7684\u4e0d\u5b89\u5168\u8fc7\u6ee4\uff0c\u53ef\u80fd\u5bfc\u81f4 XSS\uff08\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09\u6f0f\u6d1e\u3002XSS \u653b\u51fb\u662f\u4e00\u79cd\u5229\u7528\u7f51\u9875\u5e94\u7528\u7a0b\u5e8f\u672a\u6b63\u786e\u8fc7\u6ee4\u6216\u8f6c\u4e49\u7528\u6237\u8f93\u5165\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u6076\u610f\u811a\u672c\u6ce8\u5165\u5230\u7f51\u9875\u4e2d\u5e76\u5728\u7528\u6237\u6d4f\u89c8\u5668\u4e0a\u6267\u884c\u7684\u653b\u51fb\u3002"),(0,a.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Go"},'func(writer http.ResponseWriter, request *http.Request) {\n    var name = request.URL.Query().Get("name")\n    scriptRegex := regexp.MustCompile("(?i)<script>")\n    name = scriptRegex.ReplaceAllString(name, "")\n    scriptEndRegex := regexp.MustCompile("(?i)<\/script>")\n    name = scriptEndRegex.ReplaceAllString(name, "")\n    writer.Write([]byte(fmt.Sprintf(`<html>Hello %v</html>`, name)))\n')),(0,a.yg)("h3",{id:"\u653b\u51fb\u793a\u4f8b"},"\u653b\u51fb\u793a\u4f8b\uff1a"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u53cc\u5199",(0,a.yg)("inlineCode",{parentName:"p"},"<script>"),"\u6807\u7b7e\u7684\u65b9\u5f0f\u6765\u7ed5\u8fc7\uff0c\u8fd9\u6837\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"<script>"),"\u6807\u7b7e\u88ab\u8fc7\u6ee4\u6389\uff0c\u5269\u4e0b\u7684\u7ec4\u5408\u8d77\u6765\u521a\u597d\u5f62\u6210\u4e00\u4e2a\u5b8c\u6574\u7684 payload\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},'http://127.0.0.1:8787/xss/replace/nocase?name=<scr<script>ipt>alert("hello yakit")</scr<\/script>ipt>\n#\u8fc7\u6ee4\u540e\u53d8\u6210\n<script>alert("Hello Yakit")<\/script>\n')),(0,a.yg)("p",null,"\u5229\u7528 iframe \u6807\u7b7e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"http://127.0.0.1:8787/xss/replace/nocase?name=<iframe src=\"javascript:alert('Hello Yakit')\">\n")),(0,a.yg)("h3",{id:"\u9632\u5fa1\u63aa\u65bd"},"\u9632\u5fa1\u63aa\u65bd\uff1a"),(0,a.yg)("p",null,"\u8981\u9632\u6b62\u6b64\u7c7b XSS \u653b\u51fb\uff0c\u4e0d\u5e94\u4ec5\u4ec5\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"<script>"),"\u6807\u7b7e\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"<\/script>"),"\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4\u3002\u6b63\u786e\u7684\u505a\u6cd5\u662f\u5bf9\u7528\u6237\u8f93\u5165\u8fdb\u884c\u5168\u9762\u7684\u8f93\u5165\u9a8c\u8bc1\u548c\u8f93\u51fa\u7f16\u7801\u3002\u5177\u4f53\u63aa\u65bd\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8f93\u5165\u9a8c\u8bc1\uff1a \u5bf9\u7528\u6237\u8f93\u5165\u8fdb\u884c\u9a8c\u8bc1\uff0c\u53ea\u63a5\u53d7\u7b26\u5408\u7279\u5b9a\u683c\u5f0f\u548c\u7c7b\u578b\u7684\u6570\u636e\u3002\u62d2\u7edd\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u6216 HTML \u6807\u7b7e\u7684\u8f93\u5165\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u8f93\u51fa\u7f16\u7801\uff1a \u5728\u5c06\u7528\u6237\u8f93\u5165\u663e\u793a\u5728\u7f51\u9875\u4e0a\u4e4b\u524d\uff0c\u8fdb\u884c\u9002\u5f53\u7684\u8f93\u51fa\u7f16\u7801\uff0c\u5c06\u7279\u6b8a\u5b57\u7b26\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684 HTML \u5b9e\u4f53\uff0c\u4ee5\u9632\u6b62\u6076\u610f\u811a\u672c\u7684\u6267\u884c\u3002\u53ef\u4ee5\u4f7f\u7528\u5408\u9002\u7684\u7f16\u7801\u51fd\u6570\uff0c\u5982\u5728 Python \u4e2d\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"li"},"html.escape"),"\u3002"),(0,a.yg)("li",{parentName:"ul"},"CSP\uff1a \u4f7f\u7528\u5185\u5bb9\u5b89\u5168\u7b56\u7565\uff08CSP\uff09\u6765\u9650\u5236\u7f51\u9875\u4e2d\u52a0\u8f7d\u7684\u8d44\u6e90\uff0c\u53ea\u5141\u8bb8\u4ece\u6307\u5b9a\u6e90\u52a0\u8f7d\u5185\u5bb9\uff0c\u6709\u52a9\u4e8e\u51cf\u5c11 XSS \u653b\u51fb\u7684\u6210\u529f\u7387\u3002")),(0,a.yg)("h3",{id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891"},"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891"),(0,a.yg)("video",{src:"/img/yaklab/xss/03unsafe-nocase.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}))}u.isMDXComponent=!0}}]);