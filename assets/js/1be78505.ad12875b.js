(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9514,9601,5992,8610,3089,6103],{38704:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var n=a(67294),l=a(3905),o=a(46291),r=a(84274),s=a(86010),c=a(941),i=a(93783),m=a(77898),d=a(55537),u=a(22122);const b=e=>n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var p=a(24973),h=a(36742),f=a(13919),v=a(18617);const E="menuLinkText_1J2g",g=(e,t)=>"link"===e.type?(0,c.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>g(e,t))),_=(0,n.memo)((function(e){let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(Z,(0,u.Z)({key:t,item:e},a)))))}));function Z(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(N,(0,u.Z)({item:t},a)):n.createElement(k,(0,u.Z)({item:t},a))}function N(e){let{item:t,onItemClick:a,activePath:l,...o}=e;const{items:r,label:i,collapsible:m}=t,d=g(t,l),{collapsed:b,setCollapsed:p,toggleCollapsed:h}=(0,c.uR)({initialState:()=>!!m&&(!d&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const o=(0,c.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a])}({isActive:d,collapsed:b,setCollapsed:p}),n.createElement("li",{className:(0,s.Z)(c.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,u.Z)({className:(0,s.Z)("menu__link",{"menu__link--sublist":m,"menu__link--active":m&&d,[E]:!m}),onClick:m?e=>{e.preventDefault(),h()}:void 0,href:m?"#":void 0},o),i),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.createElement(_,{items:r,tabIndex:b?-1:0,onItemClick:a,activePath:l})))}function k(e){let{item:t,onItemClick:a,activePath:l,...o}=e;const{href:r,label:i}=t,m=g(t,l);return n.createElement("li",{className:(0,s.Z)(c.kM.docs.docSidebarItemLink,"menu__list-item"),key:i},n.createElement(h.Z,(0,u.Z)({className:(0,s.Z)("menu__link",{"menu__link--active":m}),"aria-current":m?"page":void 0,to:r},(0,f.Z)(r)&&{onClick:a},o),(0,f.Z)(r)?i:n.createElement("span",null,i,n.createElement(v.Z,null))))}const w="sidebar_15mo",C="sidebarWithHideableNavbar_267A",y="sidebarHidden_2kNb",S="sidebarLogo_3h0W",I="menu_Bmed",T="menuWithAnnouncementBar_2WvA",D="collapseSidebarButton_1CGd",L="collapseSidebarButtonIcon_3E-R";function B(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,s.Z)("button button--secondary button--outline",D),onClick:t},n.createElement(b,{className:L}))}function x(e){let{path:t,sidebar:a,onCollapse:l,isHidden:o}=e;const r=function(){const{isClosed:e}=(0,c.nT)(),[t,a]=(0,n.useState)(!e);return(0,m.Z)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:i},hideableSidebar:u}=(0,c.LU)(),{isClosed:b}=(0,c.nT)();return n.createElement("div",{className:(0,s.Z)(w,{[C]:i,[y]:o})},i&&n.createElement(d.Z,{tabIndex:-1,className:S}),n.createElement("nav",{className:(0,s.Z)("menu thin-scrollbar",I,{[T]:!b&&r})},n.createElement("ul",{className:(0,s.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(_,{items:a,activePath:t}))),u&&n.createElement(B,{onClick:l}))}const M=e=>{let{toggleSidebar:t,sidebar:a,path:l}=e;return n.createElement("ul",{className:(0,s.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(_,{items:a,activePath:l,onItemClick:()=>t()}))};function A(e){return n.createElement(c.Cv,{component:M,props:e})}const P=n.memo(x),R=n.memo(A);function V(e){const t=(0,i.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(P,e),l&&n.createElement(R,e))}var H=a(69401),F=a(24608),W=a(5977);const U="backToTopButton_35hR",$="backToTopButtonShow_18ls";function z(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const J=function(){const e=(0,W.TH)(),{smoothScrollTop:t,cancelScrollToTop:a}=z(),[l,o]=(0,n.useState)(!1);return(0,m.Z)(((e,t)=>{let{scrollY:n}=e;if(!t)return;const l=n<t.scrollY;if(l||a(),n<300)o(!1);else if(l){const e=document.documentElement.scrollHeight;n+window.innerHeight<e&&o(!0)}else o(!1)}),[e]),n.createElement("button",{className:(0,s.Z)("clean-btn",U,{[$]:l}),type:"button",onClick:()=>t()},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},O={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};var K=a(99105);function Y(e){let{currentDocRoute:t,versionMetadata:a,children:o}=e;const{pluginId:i,version:m}=a,d=t.sidebar,u=d?a.docsSidebars[d]:void 0,[h,f]=(0,n.useState)(!1),[v,E]=(0,n.useState)(!1),g=(0,n.useCallback)((()=>{v&&E(!1),f(!h)}),[v]);return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:m,tag:(0,c.os)(i,m)}},n.createElement("div",{className:O.docPage},n.createElement(J,null),u&&n.createElement("aside",{className:(0,s.Z)(O.docSidebarContainer,{[O.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(O.docSidebarContainer)&&h&&E(!0)}},n.createElement(V,{key:d,sidebar:u,path:t.path,onCollapse:g,isHidden:v}),v&&n.createElement("div",{className:O.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:g,onClick:g},n.createElement(b,{className:O.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,s.Z)(O.docMainContainer,{[O.docMainContainerEnhanced]:h||!u})},n.createElement("div",{className:(0,s.Z)("container padding-top--md padding-bottom--lg",O.docItemWrapper,{[O.docItemWrapperEnhanced]:h})},n.createElement(l.Zo,{components:H.Z},o)))))}const j=function(e){const{route:{routes:t},versionMetadata:a,location:l}=e,r=t.find((e=>(0,W.LX)(l.pathname,e)));return r?n.createElement(n.Fragment,null,n.createElement(K.Z,null,n.createElement("html",{className:a.className})),n.createElement(Y,{currentDocRoute:r,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a}))):n.createElement(F.default,e)}},24608:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var n=a(67294),l=a(84274),o=a(24973);const r=function(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},46463:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(22122),l=a(67294),o=a(86010),r=a(36742),s=a(941),c=a(44996),i=a(13919),m=a(98465),d=a(18617),u=a(19181),b=a(78874),p=a(14294);function h(e){let{to:t,href:a,label:o,prependBaseUrlToHref:s,isBlank:m,...u}=e;const b=(0,c.Z)(t),p=(0,c.Z)(a,{forcePrependBaseUrl:!0});return m?l.createElement("a",(0,n.Z)({className:"footer__link-item"},a?{href:s?p:a}:{to:b},u,{target:"_blank"}),a&&!(0,i.Z)(a)?l.createElement("span",null,o,l.createElement(d.Z,null)):o):l.createElement(r.Z,(0,n.Z)({className:"footer__link-item"},a?{href:s?p:a}:{to:b},u),a&&!(0,i.Z)(a)?l.createElement("span",null,o,l.createElement(d.Z,null)):o)}const f=e=>{let{sources:t,alt:a}=e;return l.createElement(m.Z,{className:"footer__logo",alt:a,sources:t})};const v=function(){const{footer:e}=(0,s.LU)(),{copyright:t,links:a=[],logo:i={}}=e||{},m={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return e?((0,l.useEffect)((()=>{document.onscroll=e=>{if(e.target&&e.target.scrollingElement&&e.target.scrollingElement.scrollTop){const t=document.getElementsByClassName("navbar")[0],a=e.target.scrollingElement.scrollTop>t.offsetHeight;t.style.backgroundColor=a?"#ffffff":"rgba(0,0,0,0)"}}}),[]),l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},l.createElement("div",{className:"div--flex footer__bottom text--center "},l.createElement("div",{className:"footer-logo-copyright-navigation"},i&&(i.src||i.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},i.href?l.createElement(r.Z,{href:i.href,className:"footer-link"},l.createElement(f,{alt:i.alt,sources:m})):l.createElement("div",{className:"footer-link"},l.createElement(f,{alt:i.alt,sources:m}),l.createElement("div",{className:"footer__logo__title"},"Yak"))),t?l.createElement("div",{className:"footer__copyright copyright-style",dangerouslySetInnerHTML:{__html:t}}):null,a&&a.length>0&&l.createElement("div",{className:"link-body"},a.map(((e,t)=>l.createElement(h,(0,n.Z)({key:t,isBlank:0===t},e.items[0])))))),l.createElement("div",{className:"footer-contact-me"},l.createElement("a",{href:"https://github.com/yaklang/yakit",target:"_blank",className:"contact-icon-body"},l.createElement(b.Z,{className:"icon-style github-icon"})),l.createElement("div",{className:"contact-icon-body"},l.createElement(u.Z,{overlayClassName:"wechat-code-popover",content:l.createElement("div",null,l.createElement("img",{src:"/img/wechat.jpg",className:"wechat-code-img"}),l.createElement("div",{className:"wechat-code-title"},"\u5fae\u4fe1\u626b\u7801\u5173\u6ce8\u516c\u4f17\u53f7"))},l.createElement(p.Z,{className:"icon-style wechat-icon"})))))))):null}},41029:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var n=a(22122),l=a(67294),o=a(86010),r=a(24973),s=a(81036),c=a(29189),i=a(85350),m=a(941),d=a(55662),u=a(31839),b=a(93783),p=a(96730),h=a(67892),f=a(55537),v=a(84478),E=a(62670);const g="toggle_2xs0",_="navbarHideable_1VR7",Z="navbarHidden_1FmO",N="navbarSidebarToggle_nWi-",k="navbarSidebarCloseSvg_fJdH",w="right";function C(){return(0,m.LU)().navbar.items}function y(){const{colorMode:{disableSwitch:e}}=(0,m.LU)(),{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=(0,i.Z)();return{isDarkTheme:t,toggle:(0,l.useCallback)((e=>e.target.checked?n():a()),[a,n]),disabled:e}}function S(e){let{sidebarShown:t,toggleSidebar:a}=e;(0,u.Z)(t);const s=C(),i=y(),d=function(e){let{sidebarShown:t,toggleSidebar:a}=e;const n=(0,m.g8)()?.({toggleSidebar:a}),o=(0,m.D9)(n),[r,s]=(0,l.useState)((()=>!1));(0,l.useEffect)((()=>{n&&!o&&s(!0)}),[n,o]);const c=!!n;return(0,l.useEffect)((()=>{c?t||s(!0):s(!1)}),[t,c]),{shown:r,hide:(0,l.useCallback)((()=>{s(!1)}),[]),content:n}}({sidebarShown:t,toggleSidebar:a});return l.createElement("div",{className:"navbar-sidebar"},l.createElement("div",{className:"navbar-sidebar__brand"},l.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&l.createElement(c.Z,{className:N,checked:i.isDarkTheme,onChange:i.toggle}),l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},l.createElement(E.Z,{width:20,height:20,className:k}))),l.createElement("div",{className:(0,o.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":d.shown})},l.createElement("div",{className:"navbar-sidebar__item menu"},l.createElement("ul",{className:"menu__list"},s.map(((e,t)=>l.createElement(h.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t})))))),l.createElement("div",{className:"navbar-sidebar__item menu"},s.length>0&&l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:d.hide},l.createElement(r.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),d.content)))}const I=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,m.LU)(),a=function(){const e=(0,b.Z)(),t="mobile"===e,[a,n]=(0,l.useState)(!1);(0,m.Rb)((()=>{a&&n(!1)}));const o=(0,l.useCallback)((()=>{n((e=>!e))}),[]);return(0,l.useEffect)((()=>{"desktop"===e&&n(!1)}),[e]),{shouldRender:t,toggle:o,shown:a}}(),r=y(),i=(0,p.useActivePlugin)(),{navbarRef:u,isNavbarVisible:E}=(0,d.Z)(e),N=C(),k=N.some((e=>"search"===e.type)),{leftItems:I,rightItems:T}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??w))),rightItems:e.filter((e=>"right"===(e.position??w)))}}(N);return(0,l.useEffect)((()=>{window.addEventListener("beforeunload",(e=>{document.body.scrollIntoView()}))}),[]),l.createElement("nav",{ref:u,className:(0,o.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":a.shown,[_]:e,[Z]:e&&!E})},l.createElement("div",{className:"navbar__inner"},l.createElement("div",{className:"navbar__items"},(N?.length>0||i)&&l.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:a.toggle,onKeyDown:a.toggle},l.createElement(v.Z,null)),l.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),I.map(((e,t)=>l.createElement(h.Z,(0,n.Z)({},e,{key:t}))))),l.createElement("div",{className:"navbar__items navbar__items--right"},T.map(((e,t)=>l.createElement(h.Z,(0,n.Z)({},e,{key:t})))),!r.disabled&&l.createElement(c.Z,{className:g,checked:r.isDarkTheme,onChange:r.toggle}),!k&&l.createElement(s.Z,null))),l.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:a.toggle}),a.shouldRender&&l.createElement(S,{sidebarShown:a.shown,toggleSidebar:a.toggle}))}},48219:(e,t,a)=>{"use strict";a.d(t,{O:()=>d,Z:()=>p});var n=a(22122),l=a(67294),o=a(86010),r=a(36742),s=a(44996),c=a(18617),i=a(13919),m=a(67892);function d(e){let{activeBasePath:t,activeBaseRegex:a,to:o,href:m,label:d,activeClassName:u="",prependBaseUrlToHref:b,isDropdownItem:p,...h}=e;const f=(0,s.Z)(o),v=(0,s.Z)(t),E=(0,s.Z)(m,{forcePrependBaseUrl:!0}),g=d&&m&&!(0,i.Z)(m),_="dropdown__link--active"===u,[Z,N]=(0,l.useState)("");return(0,l.useEffect)((()=>{N(window.location.origin)}),[]),p?l.createElement("a",(0,n.Z)({},m?{href:b?E:`${Z}${m}`}:{isNavLink:!0,activeClassName:h.className?.includes(u)?"":u,href:`${Z}${f}`,to:f,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}:null},h,{target:"_blank",className:`${h.className} diy-link-item`}),g?l.createElement("span",null,d,l.createElement(c.Z,_&&{width:12,height:12})):d):l.createElement(r.Z,(0,n.Z)({},m?{href:b?E:m}:{isNavLink:!0,activeClassName:h.className?.includes(u)?"":u,to:f,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}:null},h,{className:`${h.className} diy-link-item`}),g?l.createElement("span",null,d):d)}function u(e){let{className:t,isDropdownItem:a=!1,...r}=e;const s=l.createElement(d,(0,n.Z)({className:(0,o.Z)(a?"dropdown__link":"navbar__item navbar__link",t),isDropdownItem:a},r));return a?l.createElement("li",null,s):s}function b(e){let{className:t,isDropdownItem:a,...r}=e;return l.createElement("li",{className:"menu__list-item"},l.createElement(d,(0,n.Z)({className:(0,o.Z)("menu__link",t)},r)))}const p=function(e){let{mobile:t=!1,position:a,...o}=e;const r=t?b:u;return l.createElement(r,(0,n.Z)({},o,{activeClassName:o.activeClassName??(0,m.E)(t)}))}},48729:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(22122),l=a(67294),o=a(48219),r=a(96730),s=a(86010),c=a(67892),i=a(941),m=a(18780);function d(e){let{docId:t,label:a,docsPluginId:d,...u}=e;const{activeVersion:b,activeDoc:p}=(0,r.useActiveDocContext)(d),{preferredVersion:h}=(0,i.J)(d),f=(0,r.useLatestVersion)(d),v=function(e,t){const a=e.flatMap((e=>e.docs)),n=a.find((e=>e.id===t));if(!n){const n=a.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,m.uniq)([b,h,f].filter(Boolean)),t),E=(0,c.E)(u.mobile);return l.createElement(o.Z,(0,n.Z)({exact:!0},u,{className:(0,s.Z)(u.className,{[E]:p?.sidebar&&p.sidebar===v.sidebar}),activeClassName:E,label:a??v.id,to:v.path}))}},15391:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(22122),l=a(67294),o=a(48219),r=a(70609),s=a(96730),c=a(941),i=a(24973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:b,...p}=e;const h=(0,s.useActiveDocContext)(a),f=(0,s.useVersions)(a),v=(0,s.useLatestVersion)(a),{preferredVersion:E,savePreferredVersionName:g}=(0,c.J)(a);const _=function(){const e=f.map((e=>{const t=h?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===h?.activeVersion,onClick:()=>{g(e.name)}}}));return[...u,...e,...b]}(),Z=h.activeVersion??E??v,N=t&&_?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):Z.label,k=t&&_?void 0:m(Z).path;return _.length<=1?l.createElement(o.Z,(0,n.Z)({},p,{mobile:t,label:N,to:k,isActive:d?()=>!1:void 0})):l.createElement(r.Z,(0,n.Z)({},p,{mobile:t,label:N,to:k,items:_,isActive:d?()=>!1:void 0}))}},81555:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(22122),l=a(67294),o=a(48219),r=a(96730),s=a(941);function c(e){let{label:t,to:a,docsPluginId:c,...i}=e;const m=(0,r.useActiveVersion)(c),{preferredVersion:d}=(0,s.J)(c),u=(0,r.useLatestVersion)(c),b=m??d??u,p=t??b.label,h=a??(e=>e.docs.find((t=>t.id===e.mainDocId)))(b).path;return l.createElement(o.Z,(0,n.Z)({},i,{label:p,to:h}))}},70609:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(22122),l=a(67294),o=a(86010),r=a(941),s=a(48219),c=a(67892);function i(e,t){return e.some((e=>function(e,t){return!!(0,r.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:a,className:r,...i}=e;const m=(0,l.useRef)(null),d=(0,l.useRef)(null),[u,b]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),l.createElement("div",{ref:m,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===a,"dropdown--show":u})},l.createElement(s.O,(0,n.Z)({className:(0,o.Z)("navbar__link",r)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),b(!u))}}),i.children??i.label),l.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,a)=>l.createElement(c.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:a}))))))}function d(e){let{items:t,className:a,position:m,...d}=e;const u=(0,r.be)(),b=i(t,u),{collapsed:p,toggleCollapsed:h,setCollapsed:f}=(0,r.uR)({initialState:()=>!b});return(0,l.useEffect)((()=>{b&&f(!b)}),[u,b]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":p})},l.createElement(s.O,(0,n.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",a)},d,{onClick:e=>{e.preventDefault(),h()}}),d.children??d.label),l.createElement(r.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},t.map(((e,t)=>l.createElement(c.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const u=function(e){let{mobile:t=!1,...a}=e;const n=t?d:m;return l.createElement(n,a)}},67892:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f,E:()=>h});var n=a(67294),l=a(48219),o=a(70609),r=a(22122),s=a(23264),c=a(52263),i=a(941);const m="iconLanguage_17ys";function d(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:l,...d}=e;const{i18n:{currentLocale:u,locales:b,localeConfigs:p}}=(0,c.Z)(),h=(0,i.l5)();function f(e){return p[e].label}const v=[...a,...b.map((e=>{const t=`pathname://${h.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:f(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...l],E=t?"Languages":f(u);return n.createElement(o.Z,(0,r.Z)({},d,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(s.Z,{className:m}),n.createElement("span",null,E)),items:v}))}var u=a(81036);function b(e){let{mobile:t}=e;return t?null:n.createElement(u.Z,null)}const p={default:()=>l.Z,localeDropdown:()=>d,search:()=>b,dropdown:()=>o.Z,docsVersion:()=>a(81555).Z,docsVersionDropdown:()=>a(15391).Z,doc:()=>a(48729).Z};const h=e=>e?"menu__link--active":"navbar__link--active";function f(e){let{type:t,...a}=e;const l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),o=(e=>{const t=p[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(l);return n.createElement(o,a)}}}]);