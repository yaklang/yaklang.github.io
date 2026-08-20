import React, { useEffect, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLocation } from "@docusaurus/router";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { useHomeSlideIndex } from "./HomeSlideContext";
import { HOME_SCROLL_MS } from "./homeMotion";
import { useHomeTheme } from "./HomeThemeContext";
import { useHomeLanguage } from "./useHomeLanguage";
import SearchButton from "../SearchButton";
import {
  HOME_CONTAINER_CLASS,
  DOCS_CONTAINER_CLASS,
} from "./homeSectionLayout";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { OpenSourceMegaMenu } from "@site/src/theme/NavbarItem/OpenSourceNavbarItem";
import { OPEN_SOURCE_PROJECTS } from "@site/src/components/OpenSource";

const ChevronDownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
  >
    <path
      d="M11 0.5L5.75 5.75L0.5 0.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75M15.75 9C15.75 5.27208 12.7279 2.25 9 2.25M15.75 9H2.25M9 15.75C5.27208 15.75 2.25 12.7279 2.25 9M9 15.75C10.2426 15.75 11.25 12.7279 11.25 9C11.25 5.27208 10.2426 2.25 9 2.25M9 15.75C7.75736 15.75 6.75 12.7279 6.75 9C6.75 5.27208 7.75736 2.25 9 2.25M2.25 9C2.25 5.27208 5.27208 2.25 9 2.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden
  >
    <path
      d="M10 3C9.07174 3.92826 8.55025 5.18724 8.55025 6.5C8.55025 7.81275 9.07174 9.07174 10 10C10.9283 10.9283 12.1872 11.4497 13.5 11.4497C14.8128 11.4497 16.0717 10.9283 17 10C17 11.3845 16.5895 12.7378 15.8203 13.889C15.0511 15.0401 13.9579 15.9373 12.6788 16.4672C11.3997 16.997 9.99224 17.1356 8.63437 16.8655C7.2765 16.5954 6.02922 15.9287 5.05026 14.9497C4.07129 13.9708 3.4046 12.7235 3.13451 11.3656C2.86441 10.0078 3.00303 8.6003 3.53285 7.32121C4.06266 6.04213 4.95987 4.94888 6.11101 4.17971C7.26215 3.41054 8.61553 3 10 3Z"
      fill="currentColor"
    />
  </svg>
);

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 2C10.5523 2 11 2.44772 11 3V4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55228 9 4V3C9 2.44772 9.44772 2 10 2Z"
      fill="currentColor"
    />
    <path
      d="M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
      fill="currentColor"
    />
    <path
      d="M13.5356 14.9497L14.2427 15.6568C14.6332 16.0473 15.2664 16.0473 15.6569 15.6568C16.0474 15.2663 16.0474 14.6331 15.6569 14.2426L14.9498 13.5355C14.5593 13.145 13.9261 13.145 13.5356 13.5355C13.1451 13.926 13.1451 14.5592 13.5356 14.9497Z"
      fill="currentColor"
    />
    <path
      d="M15.6568 4.34309C16.0473 4.73362 16.0473 5.36678 15.6568 5.75731L14.9497 6.46441C14.5592 6.85494 13.926 6.85494 13.5355 6.46441C13.145 6.07389 13.145 5.44072 13.5355 5.0502L14.2426 4.34309C14.6331 3.95257 15.2663 3.95257 15.6568 4.34309Z"
      fill="currentColor"
    />
    <path
      d="M17 11C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H16C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H17Z"
      fill="currentColor"
    />
    <path
      d="M10 15C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V16C9 15.4477 9.44772 15 10 15Z"
      fill="currentColor"
    />
    <path
      d="M5.05031 6.46443C5.44083 6.85496 6.074 6.85496 6.46452 6.46443C6.85505 6.07391 6.85505 5.44074 6.46452 5.05022L5.75742 4.34311C5.36689 3.95259 4.73373 3.95259 4.3432 4.34311C3.95268 4.73363 3.95268 5.3668 4.3432 5.75732L5.05031 6.46443Z"
      fill="currentColor"
    />
    <path
      d="M6.46443 14.9497L5.75732 15.6568C5.3668 16.0473 4.73363 16.0473 4.34311 15.6568C3.95259 15.2663 3.95259 14.6331 4.34311 14.2426L5.05022 13.5355C5.44074 13.145 6.07391 13.145 6.46443 13.5355C6.85496 13.926 6.85496 14.5592 6.46443 14.9497Z"
      fill="currentColor"
    />
    <path
      d="M4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H4Z"
      fill="currentColor"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path
      d="M9.99219 1.49024C5.16211 1.48828 1.25 5.39844 1.25 10.2246C1.25 14.041 3.69727 17.2852 7.10547 18.4766C7.56445 18.5918 7.49414 18.2656 7.49414 18.043V16.5293C4.84375 16.8398 4.73633 15.0859 4.55859 14.793C4.19922 14.1797 3.34961 14.0234 3.60352 13.7305C4.20703 13.4199 4.82227 13.8086 5.53516 14.8613C6.05078 15.625 7.05664 15.4961 7.56641 15.3691C7.67773 14.9102 7.91602 14.5 8.24414 14.1816C5.49805 13.6895 4.35352 12.0137 4.35352 10.0215C4.35352 9.05469 4.67188 8.16602 5.29688 7.44922C4.89844 6.26758 5.33398 5.25586 5.39258 5.10547C6.52734 5.00391 7.70703 5.91797 7.79883 5.99024C8.44336 5.81641 9.17969 5.72461 10.0039 5.72461C10.832 5.72461 11.5703 5.82031 12.2207 5.99609C12.4414 5.82813 13.5352 5.04297 14.5898 5.13867C14.6465 5.28906 15.0723 6.27734 14.6973 7.44336C15.3301 8.16211 15.6523 9.0586 15.6523 10.0273C15.6523 12.0234 14.5 13.7012 11.7461 14.1855C12.2051 14.6387 12.4902 15.2676 12.4902 15.9629V18.1602C12.5059 18.3359 12.4902 18.5098 12.7832 18.5098C16.2422 17.3438 18.7324 14.0762 18.7324 10.2266C18.7324 5.39844 14.8184 1.49024 9.99219 1.49024Z"
      fill="currentColor"
    />
  </svg>
);

const COMMUNITY_LINKS = [
  { label: "HomeNavbar.community.aboutUs", to: "/team" },
  { label: "HomeNavbar.community.partners", to: "/cooperativePartner" },
  { label: "HomeNavbar.community.techBlog", to: "/blog" },
  { label: "HomeNavbar.community.yakLabManual", to: "/Yaklab/yaklab" },
  { label: "HomeNavbar.community.downloads", to: "/download" },
];

const NAV_LINKS: {
  label: string;
  to: string;
  dropdown?: "opensource" | "community";
}[] = [
  { label: "HomeNavbar.nav.yakDocs", to: "/docs/intro" },
  { label: "HomeNavbar.nav.yakitManual", to: "/products/intro" },
  {
    label: "HomeNavbar.nav.opensource",
    to: "/opensource",
    dropdown: "opensource",
  },
  { label: "HomeNavbar.nav.community", to: "", dropdown: "community" },
];

const HomeNavbar: React.FC = () => {
  const { t } = useTranslation();
  const activeSlideIndex = useHomeSlideIndex();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  // 首页走老样式版心，文档/博客等其它页面用新版心（与 shell 对齐）
  const containerClass = isHomePage ? HOME_CONTAINER_CLASS : DOCS_CONTAINER_CLASS;
  const logoSrc = useBaseUrl("img/logo.png");
  const { currentLng, toggleLanguage } = useHomeLanguage();
  const { theme, toggleTheme } = useHomeTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSourceOpen, setOpenSourceOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [mobileOpenSourceOpen, setMobileOpenSourceOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  /** 移动端自由滚动时 Hero 滚走进度 0~1，用于控制背景层 scaleY */
  const [scrollProgress, setScrollProgress] = useState(0);
  /** 是否整屏模式（PC 宽屏） */
  const [isSnapMode, setIsSnapMode] = useState(false);
  /**
   * 保证组件首次挂载时背景层统一从 scaleY(0) 起始，
   * 这样即使初始就在非 Hero 屏，也能触发从上到下的展开动画。
   */
  const [bgReady, setBgReady] = useState(false);
  /**
   * 整屏/自由滚动模式切换时，暂时禁用背景层 transition，
   * 避免从小屏切到大屏时背景色缓慢变化。
   */
  const [modeTransitioning, setModeTransitioning] = useState(false);
  /** 桌面导航内容是否放不下，需要切换到菜单按钮 */
  const [collapsed, setCollapsed] = useState(false);
  const [measureReady, setMeasureReady] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  /** 完整桌面内容所需宽度（语言不变时固定），避免 collapsed 后 nav 隐藏无法测量 */
  const neededWidthRef = useRef(0);

  // 根据内容宽度自适应：左侧导航 + 右侧工具 > header 可用宽度时切换为菜单
  useEffect(() => {
    const header = headerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!header || !left || !right) return;

    // 仅在未折叠时测量完整内容宽度（此时桌面导航可见）
    if (!collapsed && neededWidthRef.current === 0) {
      neededWidthRef.current = left.scrollWidth + right.scrollWidth + 24;
    }

    const check = () => {
      const available = header.clientWidth;
      // 屏幕宽度小于 834px 或内容放不下时，都切换为菜单
      const tooNarrow = window.innerWidth < 834;
      setCollapsed(tooNarrow || neededWidthRef.current > available);
    };

    check();
    setMeasureReady(true);

    const ro = new ResizeObserver(check);
    ro.observe(header);
    return () => ro.disconnect();
  }, [collapsed]);

  // 语言切换后重置测量值并展开导航，下一帧重新测量
  useEffect(() => {
    neededWidthRef.current = 0;
    setCollapsed(false);
  }, [currentLng]);

  // 检测是否整屏模式
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 800px)");
    const sync = () => setIsSnapMode(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // 首屏统一从 scaleY(0) 开始，下一帧再按真实状态变化，触发从上到下的展开动画
  useEffect(() => {
    const raf = requestAnimationFrame(() => setBgReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // 模式切换时短暂禁用背景层 transition，下一帧再恢复（跳过首次挂载）
  const isFirstSnapRender = useRef(true);
  useEffect(() => {
    if (isFirstSnapRender.current) {
      isFirstSnapRender.current = false;
      return;
    }
    setModeTransitioning(true);
    const raf = requestAnimationFrame(() => setModeTransitioning(false));
    return () => cancelAnimationFrame(raf);
  }, [isSnapMode]);

  // 非整屏模式：监听滚动进度，Hero 完全滚走时 progress=1
  useEffect(() => {
    const scroller = document.querySelector(".home-new-scroller");

    // scroll/resize 都是高频事件，用 rAF 合并到下一帧再 setState，避免每帧重渲染
    let rafId = null;
    const schedule = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!scroller) return;
        const heroHeight = scroller.clientHeight;
        const scrollTop = scroller.scrollTop;
        const progress = Math.min(1, Math.max(0, scrollTop / heroHeight));
        setScrollProgress(progress);
      });
    };

    if (!isHomePage || isSnapMode) {
      // 整屏模式下：当前 slide 即代表滚动位置，离开 Hero 时视为 progress=1
      setScrollProgress(isSnapMode && activeSlideIndex > 0 ? 1 : 0);
      return;
    }

    if (!scroller) return;

    // 首次同步计算一次
    {
      const heroHeight = scroller.clientHeight;
      const scrollTop = scroller.scrollTop;
      const progress = Math.min(1, Math.max(0, scrollTop / heroHeight));
      setScrollProgress(progress);
    }
    scroller.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      scroller.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [isHomePage, isSnapMode, activeSlideIndex]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    // resize 期间用 rAF 合并，避免高频触发
    let rafId = null;
    const onResize = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!collapsed) {
          setMobileOpen(false);
        }
      });
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [collapsed]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileOpenSourceOpen(false);
    setMobileCommunityOpen(false);
  };

  // 与整屏切换同时长，避免首屏切走时导航「拖更久」造成体感不一致
  const surfaceMs = HOME_SCROLL_MS;

  // 文字颜色：统一使用非 Hero 样式
  const textColor = "text-[color:var(--Colors-Use-Neutral-Text-1-Title)]";
  const btnBg = "bg-[var(--Colors-Use-Main---Gold-Bg-Hover)]";
  const btnBorder = "border-[1px] border-solid border-[var(--Colors-Use-Main---Gold-Focus)]";
  const btnColor = "text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]";
  const btnBgHover = "hover:bg-[var(--Colors-Use-Main---Gold-Focus)]";
  const btnHover = "hover:text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]";
  /** 开源 / 社区资源下拉箭头默认色 */
  const dropdownIconColor = "text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]";

  const navTriggerClass = `group cursor-pointer inline-flex items-center gap-[6px] px-[10px] py-[6px] font-sans font-normal tracking-[0.1px] text-[14px] ${textColor} leading-[20px] border-none bg-transparent transition-colors ease-in-out`;
  const navColorStyle = {
    transitionDuration: `${surfaceMs}ms`,
  } as const;

  return (
    <>
      <style>{`
        /* 小屏默认隐藏桌面导航、显示菜单按钮，避免 JS 测量前的闪现 */
        @media (max-width: 833px) {
          [data-nav-desktop] { display: none !important; }
          [data-nav-mobile] { display: flex !important; }
        }
      `}</style>
      <header ref={headerRef} className="sticky top-0 z-[200] w-full h-[80px] relative overflow-hidden">
        {/* 背景层：始终使用 Gold-Bg 颜色 */}
        <div
          className="absolute inset-0 bg-[var(--Colors-Use-Main---Gold-Bg)]"
        />
        {/* 边框层：始终显示底部线条 */}
        <div
          className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-[var(--Colors-Use-Main---Gold-Focus)] pointer-events-none"
        />
        {/* 内容层（相对定位，确保内容在背景和边框之上） */}
        <div className={`relative flex items-center justify-between h-full ${containerClass}`}>
          <div ref={leftRef} className="flex items-center min-w-0">
            <Link className="inline-flex flex-shrink-0 mr-[24px]" to="/">
              <img
                src={logoSrc}
                alt="YAK"
                className="w-[99px] h-[36px] object-contain"
              />
            </Link>
            <nav data-nav-desktop className={`items-center gap-[8px] ${!measureReady || collapsed ? "hidden" : "flex"}`}>
              {NAV_LINKS.map((link) => {
                if (link.dropdown === "opensource") {
                  return (
                    <Dropdown
                      key={link.label}
                      open={openSourceOpen}
                      onOpenChange={setOpenSourceOpen}
                      trigger={["hover"]}
                      placement="bottom"
                      mouseEnterDelay={0.1}
                      mouseLeaveDelay={0.15}
                      getPopupContainer={() => document.body}
                      popupRender={() => (
                        <div className="os-megamenu os-megamenu--antd">
                          <OpenSourceMegaMenu to={link.to || "/opensource"} />
                        </div>
                      )}
                    >
                      <button
                        type="button"
                        style={navColorStyle}
                        className={`${navTriggerClass} ${
                          openSourceOpen
                            ? "text-[color:var(--Colors-Use-Main---web-Primary)]"
                            : ""
                        }`}
                      >
                        <span
                          className={
                            openSourceOpen
                              ? ""
                              : "group-hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                          }
                        >
                          {t(link.label)}
                        </span>
                        <span
                          className={`flex-shrink-0 inline-flex transition-transform duration-200 ${
                            openSourceOpen
                              ? "rotate-180 text-[color:var(--Colors-Use-Main---web-Primary)]"
                              : `${dropdownIconColor} group-hover:text-[color:var(--Colors-Use-Main---web-Primary)]`
                          }`}
                        >
                          {ChevronDownIcon}
                        </span>
                      </button>
                    </Dropdown>
                  );
                }

                if (link.dropdown === "community") {
                  return (
                    <Dropdown
                      key={link.label}
                      open={communityOpen}
                      onOpenChange={setCommunityOpen}
                      trigger={["hover"]}
                      placement="bottom"
                      mouseEnterDelay={0.1}
                      mouseLeaveDelay={0.15}
                      getPopupContainer={() => document.body}
                      popupRender={() => (
                        <div className="min-w-[160px] rounded-[8px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] shadow-[0_6px_16px_0_rgba(0,0,0,0.08),0_3px_6px_-4px_rgba(0,0,0,0.12)] overflow-hidden">
                          {COMMUNITY_LINKS.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => setCommunityOpen(false)}
                              className="flex items-center px-[16px] py-[8px] text-[14px] leading-[20px] tracking-[0.1px] font-['PingFang_SC'] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] hover:text-[color:var(--Colors-Use-Main---web-Primary)] transition-colors duration-200"
                            >
                              {t(item.label)}
                            </Link>
                          ))}
                        </div>
                      )}
                    >
                      <button
                        type="button"
                        style={navColorStyle}
                        className={`${navTriggerClass} ${
                          communityOpen
                            ? "text-[color:var(--Colors-Use-Main---web-Primary)]"
                            : ""
                        }`}
                      >
                        <span
                          className={
                            communityOpen
                              ? ""
                              : "group-hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                          }
                        >
                          {t(link.label)}
                        </span>
                        <span
                          className={`flex-shrink-0 inline-flex transition-transform duration-200 ${
                            communityOpen
                              ? "rotate-180 text-[color:var(--Colors-Use-Main---web-Primary)]"
                              : `${dropdownIconColor} group-hover:text-[color:var(--Colors-Use-Main---web-Primary)]`
                          }`}
                        >
                          {ChevronDownIcon}
                        </span>
                      </button>
                    </Dropdown>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    style={navColorStyle}
                    className={`group inline-flex items-center gap-[6px] px-[10px] py-[6px] font-sans font-normal tracking-[0.1px] text-[14px] ${textColor} leading-[20px] !no-underline transition-colors ease-in-out`}
                    to={link.to}
                  >
                    <span className="group-hover:text-[color:var(--Colors-Use-Main---web-Primary)]">
                      {t(link.label)}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div ref={rightRef} data-nav-desktop className={`items-center flex-shrink-0 ${!measureReady || collapsed ? "hidden" : "flex"}`}>
            <div
              style={navColorStyle}
              className={`inline-flex items-center ${textColor} font-['PingFang_SC'] font-normal tracking-[0.1px] text-[14px] leading-[20px] cursor-pointer mr-[18px] transition-colors ease-in-out hover:text-[color:var(--Colors-Use-Main---web-Primary)]`}
              aria-label={t("HomeNavbar.aria.switchLanguage")}
              onClick={toggleLanguage}
            >
              {GlobeIcon}
              <span className="ml-[4px]">
                {currentLng.startsWith("en") ? "中" : "EN"}
              </span>
            </div>

            <div
              style={navColorStyle}
              className={`inline-flex items-center justify-center w-[32px] h-[32px] rounded-full transition-colors ease-in-out cursor-pointer mr-[8px] ${btnBg} ${btnBorder} ${btnColor} ${btnBgHover}`}
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? t("HomeNavbar.aria.switchLightMode")
                  : t("HomeNavbar.aria.switchDarkMode")
              }
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </div>

            <a
              href="https://github.com/yaklang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={navColorStyle}
              className={`inline-flex items-center justify-center w-[32px] h-[32px] rounded-full transition-colors ease-in-out cursor-pointer mr-[8px] no-underline ${btnBg} ${btnBorder} ${btnColor} ${btnHover} ${btnBgHover}`}
            >
              <GithubIcon />
            </a>
            <SearchButton />
          </div>
          <div data-nav-mobile className={`items-center ${collapsed ? "flex" : "hidden"}`}>
            <button
              style={navColorStyle}
              className={`inline-flex items-center justify-center w-[40px] h-[40px] mr-[10px] border-none rounded cursor-pointer transition-colors ease-in-out bg-transparent ${textColor}`}
              type="button"
              aria-label={
                mobileOpen
                  ? t("HomeNavbar.aria.closeMenu")
                  : t("HomeNavbar.aria.openMenu")
              }
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
            <SearchButton />
          </div>
        </div>
      </header>

      {/* 小屏全屏菜单 */}
      {mobileOpen ? (
        <div className={`fixed inset-0 z-[300] flex flex-col bg-[var(--Colors-Use-Main---Gold-Bg)] ${collapsed ? "flex" : "hidden"}`}>
          <div className={`flex items-center justify-between h-[80px] shrink-0 ${containerClass}`}>
            <Link
              className="inline-flex flex-shrink-0"
              to="/"
              onClick={closeMobile}
            >
              <img
                src={logoSrc}
                alt="YAK"
                className="w-[99px] h-[36px] object-contain"
              />
            </Link>
            <div className="flex items-center gap-[12px]">
              <button
                type="button"
                aria-label={t("HomeNavbar.aria.closeMenu")}
                onClick={closeMobile}
                className="inline-flex items-center justify-center w-[40px] h-[40px] border-none bg-transparent cursor-pointer text-[color:var(--Colors-Use-Neutral-Text-1-Title)] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
              >
                <CloseOutlined />
              </button>
              <SearchButton />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {NAV_LINKS.map((link) => {
              if (link.dropdown === "opensource") {
                return (
                  <div key={link.label} className="border-0">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpenSourceOpen((v) => !v);
                        setMobileCommunityOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-[28px] py-[16px] text-[18px] leading-[26px] font-['PingFang_SC'] border-none cursor-pointer text-left rounded-[8px] transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)] ${
                        mobileOpenSourceOpen
                          ? "bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] text-[color:var(--Colors-Use-Main---web-Primary)]"
                          : "bg-transparent text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                      }`}
                    >
                      <span>{t(link.label)}</span>
                      <span
                        className={`inline-flex transition-transform duration-200 text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]${
                          mobileOpenSourceOpen ? "rotate-180" : ""
                        }`}
                      >
                        {ChevronDownIcon}
                      </span>
                    </button>
                    {mobileOpenSourceOpen ? (
                      <div className="flex flex-col gap-[4px] pb-[8px]">
                        {OPEN_SOURCE_PROJECTS.map((project) => (
                          <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobile}
                            className="flex flex-col px-[48px] py-[12px] !no-underline rounded-[6px] hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)]"
                          >
                            <span className="text-[18px] leading-[26px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC']">
                              {project.name}
                            </span>
                            <span className="mt-[2px] text-[16px] leading-[24px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] font-['PingFang_SC']">
                              {project.domain}
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              if (link.dropdown === "community") {
                return (
                  <div key={link.label} className="border-0">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileCommunityOpen((v) => !v);
                        setMobileOpenSourceOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-[28px] py-[16px] text-[18px] leading-[26px] font-['PingFang_SC'] border-none cursor-pointer text-left rounded-[8px] transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)] ${
                        mobileCommunityOpen
                          ? "bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] text-[color:var(--Colors-Use-Main---web-Primary)]"
                          : "bg-transparent text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                      }`}
                    >
                      <span>{t(link.label)}</span>
                      <span
                        className={`inline-flex transition-transform duration-200 text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]${
                          mobileCommunityOpen ? "rotate-180" : ""
                        }`}
                      >
                        {ChevronDownIcon}
                      </span>
                    </button>
                    {mobileCommunityOpen ? (
                      <div className="flex flex-col gap-[4px] pb-[8px]">
                        {COMMUNITY_LINKS.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeMobile}
                            className="flex flex-col text-[16px] px-[48px] py-[12px] !no-underline rounded-[6px] hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] hover:text-[color:var(--Colors-Use-Neutral-Text-1-Title)] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC']"
                          >
                            {t(item.label)}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={closeMobile}
                  className="flex px-[28px] py-[16px] text-[18px] leading-[26px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC'] !no-underline hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                >
                  {t(link.label)}
                </Link>
              );
            })}
          </nav>

          <div className="shrink-0 px-[32px] pb-[calc(20px+env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                closeMobile();
              }}
              className="flex w-full items-center gap-[8px] py-[16px] border-0 border-solid border-t border-t-[var(--Colors-Use-Main---Gold-Focus)] bg-transparent cursor-pointer text-[16px] leading-[24px] font-medium text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC'] pl-[0px] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
            >
              <span className="inline-flex">{GlobeIcon}</span>
              {currentLng.startsWith("en") ? "中" : "EN"}
            </button>
            <a
              href="https://github.com/yaklang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-[8px] py-[16px] border-0 border-solid border-t border-t-[var(--Colors-Use-Main---Gold-Focus)] !no-underline text-[16px] leading-[24px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC'] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
            >
              <span className="inline-flex">
                <GithubIcon />
              </span>
              GitHub
            </a>
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                closeMobile();
              }}
              className="flex w-full items-center gap-[8px] py-[16px] border-0 border-solid border-t border-t-[var(--Colors-Use-Main---Gold-Focus)] bg-transparent cursor-pointer text-[16px] leading-[24px] font-medium text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC'] pl-[0px] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
            >
              <span className="inline-flex">
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </span>
              {theme === "dark"
                ? t("HomeNavbar.theme.lightMode")
                : t("HomeNavbar.theme.darkMode")}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HomeNavbar;
