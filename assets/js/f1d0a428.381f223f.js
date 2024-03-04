"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8257],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||y[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39265:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const a={sidebar_position:6},i="6. \u5b57\u7b26\u4e32\uff1a% \u683c\u5f0f\u5316\u8bed\u6cd5",l={unversionedId:"yak-basic/string-percent-format",id:"yak-basic/string-percent-format",isDocsHomePage:!1,title:"6. \u5b57\u7b26\u4e32\uff1a% \u683c\u5f0f\u5316\u8bed\u6cd5",description:"\u5728 Yak \u5b57\u7b26\u4e32\u7f16\u5199\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\uff0c\u6700\u57fa\u672c\u7684\u7528\u6cd5\u662f\u5c06\u4e00\u4e2a\u503c\u63d2\u5165\u5230\u4e00\u4e2a\u6709\u5b57\u7b26\u4e32\u683c\u5f0f\u7b26 %s \u7684\u5b57\u7b26\u4e32\u4e2d\u3002\u4ec5\u4ec5\u901a\u8fc7 % \u5c31\u53ef\u4ee5\u628a\u9700\u8981\u683c\u5f0f\u5316\u7684\u5b57\u7b26\u4e32\u548c\u9700\u8981\u63d2\u5165\u7684\u503c\u8fdb\u884c\u5173\u8054\uff08\u7c7b\u4f3c Python\uff09;",source:"@site/docs/yak-basic/6-string-percent-format.md",sourceDirName:"yak-basic",slug:"/yak-basic/string-percent-format",permalink:"/docs/yak-basic/string-percent-format",editUrl:"https://github.com/yaklang/docs/yak-basic/6-string-percent-format.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. \u5b57\u7b26\u4e32\uff1a\u5b57\u8282\u5e8f\u5217\uff08bytes\uff09",permalink:"/docs/yak-basic/string-b-prefix"},next:{title:"7. \u5b57\u7b26\u4e32\uff1a\u6a21\u7248\u5b57\u7b26\u4e32\u8bed\u6cd5 f-string",permalink:"/docs/yak-basic/string-template"}},c=[],p={toc:c},s="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(s,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"6-\u5b57\u7b26\u4e32-\u683c\u5f0f\u5316\u8bed\u6cd5"},"6. \u5b57\u7b26\u4e32\uff1a% \u683c\u5f0f\u5316\u8bed\u6cd5"),(0,o.yg)("p",null,"\u5728 Yak \u5b57\u7b26\u4e32\u7f16\u5199\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\uff0c\u6700\u57fa\u672c\u7684\u7528\u6cd5\u662f\u5c06\u4e00\u4e2a\u503c\u63d2\u5165\u5230\u4e00\u4e2a\u6709\u5b57\u7b26\u4e32\u683c\u5f0f\u7b26 %s \u7684\u5b57\u7b26\u4e32\u4e2d\u3002\u4ec5\u4ec5\u901a\u8fc7 % \u5c31\u53ef\u4ee5\u628a\u9700\u8981\u683c\u5f0f\u5316\u7684\u5b57\u7b26\u4e32\u548c\u9700\u8981\u63d2\u5165\u7684\u503c\u8fdb\u884c\u5173\u8054\uff08\u7c7b\u4f3c Python\uff09;"),(0,o.yg)("p",null,"\u6700\u57fa\u7840\u7684\u4f7f\u7528\u5982\u4e0b\uff1a",(0,o.yg)("inlineCode",{parentName:"p"},'"Hello String Formatter: %s" % "Element"'),"\uff0c\u5f53\u7136\u4ed6\u7684\u6548\u679c\u548c Golang \u4e2d fmt.Sprintf(tmp, items...) \u662f\u4e00\u81f4\u7684\uff1b"),(0,o.yg)("p",null,"\u5b9e\u9645\u4e0a\uff0cYak \u4e2d\u5bf9\u8fd9\u79cd\u8bed\u6cd5\u7684\u652f\u6301\u5168\u9762\uff1a\u5927\u5bb6\u53ef\u4ee5\u50cf\u4e0b\u9762\u7684\u5185\u5bb9\u4e00\u6837\u4f7f\u7528 string \u7684\u5b9a\u4e49\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'println("Hello %v" % "World")\n/* Hello World */\n\nprintln("Hello %v + %v" % ["World", "Yaklang"])\n/* Hello World + Yaklang */\n\nprintln("Hello %v" % "World")\n/* Hello World */\n\nprintln("Hello %v + %05d" % ["World", 4])\n/* Hello World + 00004 */\n')))}u.isMDXComponent=!0}}]);