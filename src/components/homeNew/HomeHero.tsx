import React, { useEffect, useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import { useTranslation } from "react-i18next";
import { useHomeSlideActions } from "./HomeSlideContext";
import { useHomeTheme } from "./HomeThemeContext";
import { HOME_CONTAINER_CLASS } from "./homeSectionLayout";

const DOWNLOAD_SLIDE_INDEX = 1;
/** 首屏右侧背景视频（按原比例贴右，左侧 Focus 底色） */
const HERO_BG_VIDEO = "img/home-optimized/hero/ascii-magic-47.mp4";
const HERO_BG_POSTER = "img/home-optimized/hero/ascii-magic-47-poster.webp";

const DownLoadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M8 12L12 16L16 12M12 16L12 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const viewIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M14.1667 14.1666V5.83325H5.83333M14.1667 5.83325L5.83333 14.1666"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** 标题黑底高亮块（对齐设计稿） */
const titleMarkClass =
  "inline bg-[var(--Colors-Neutral-100)] px-[0.12em] text-[color:var(--Colors-Use-Neutral-Bg)] box-decoration-clone";

const HomeHero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const { goToSlide } = useHomeSlideActions();
  const { theme } = useHomeTheme();
  // 构建期一手统计（GitHub API，SSR 直出）：供 AI 搜索引擎引用站内 stars
  // 等数字（2026-08-31 审计 2.1「首页无可引用数字」）。取不到则整行省略。
  const { siteConfig } = useDocusaurusContext();
  const buildFacts = (siteConfig.customFields as
    | {
        buildFacts?: {
          yakit?: { stars?: number; forks?: number } | null;
          yaklang?: { stars?: number } | null;
          yakitVersion?: string | null;
        };
      }
    | undefined)?.buildFacts;
  const formatCount = (value?: number) =>
    typeof value === "number" ? value.toLocaleString("en-US") : null;
  const isDark = theme === "dark";
  const bgVideo = useBaseUrl(HERO_BG_VIDEO);
  const bgPoster = useBaseUrl(HERO_BG_POSTER);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // 海报立即可见；动画等首屏完成并进入空闲期后再取，省流量模式/减弱动画时不取。
  useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (
      connection?.saveData ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let idleId: number | undefined;
    let timerId: number | undefined;
    const idleWindow = window as unknown as {
      requestIdleCallback?: (
        callback: () => void,
        options?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const scheduleTimer = () => {
      timerId = window.setTimeout(() => setShouldLoadVideo(true), 1200);
    };
    const schedule = () => {
      if (idleWindow.requestIdleCallback) {
        idleId = idleWindow.requestIdleCallback(() => setShouldLoadVideo(true), {
          timeout: 2500,
        });
      } else {
        scheduleTimer();
      }
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) {
        idleWindow.cancelIdleCallback?.(idleId);
      }
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  // 离开视口暂停，回到视口再播
  useEffect(() => {
    const el = document.getElementById("home-hero");
    const video = videoRef.current;
    if (!el || !video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoadVideo]);

  const actions = (
    <div className="flex w-full flex-col items-stretch gap-[8px] sm:w-auto sm:flex-row sm:items-center sm:justify-start">
      <button
        type="button"
        onClick={() => goToSlide(DOWNLOAD_SLIDE_INDEX)}
        className="flex w-full cursor-pointer items-center justify-center gap-[4px] whitespace-nowrap rounded-[4px] border-none bg-[var(--Colors-Neutral-100)] px-[24px] py-[10px] font-['PingFang_SC'] text-[20px] font-medium leading-[28px] tracking-[0.15px] text-[color:var(--Colors-Use-Neutral-Bg)] transition-colors duration-200 hover:bg-[var(--Colors-Use-Main---web-Primary)] hover:text-[color:var(--Colors-Use-Main---web-On-Primary)] sm:w-auto sm:text-[18px] sm:leading-[26px]"
      >
        {t("HomeHero.downloadDesktop")}
        {DownLoadIcon}
      </button>
      <Link
        to="/docs/intro"
        className="flex w-full cursor-pointer items-center justify-center gap-[4px] whitespace-nowrap rounded-[4px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] px-[24px] py-[10px] font-['PingFang_SC'] text-[20px] font-medium leading-[28px] tracking-[0.15px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline transition-colors duration-200 hover:bg-[var(--Colors-Use-Neutral-Bg)] hover:text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:w-auto sm:text-[18px] sm:leading-[26px]"
      >
        {t("HomeHero.viewDocs")}
        <span className="inline-flex text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]">
          {viewIcon}
        </span>
      </Link>
    </div>
  );

  return (
    <section className="relative box-border flex h-full w-full flex-col items-stretch justify-center overflow-hidden py-[24px] [contain:paint] [transform:translateZ(0)]">
      {/*
        对齐 Figma「首页- light」banner：
        1) 底色 Gold-Bg (#F9F6EF)
        2) 媒体全幅 cover 贴右（避免 contain 露出竖缝）
        3) 全幅 Gold-Focus (#F0EAD6) opacity 0.3 压在媒体上
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]"
        aria-hidden
      >
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-right opacity-30 ${
            isDark ? "lg:opacity-60" : "lg:opacity-100"
          }`}
          src={shouldLoadVideo ? bgVideo : undefined}
          poster={bgPoster}
          autoPlay={shouldLoadVideo}
          muted
          loop
          playsInline
          preload="none"
        />
        <div
          className="absolute inset-0 bg-[var(--Colors-Use-Main---Gold-Focus)] opacity-30"
          aria-hidden
        />
      </div>

      <div
        className={`relative z-[1] min-h-0 w-full text-left ${HOME_CONTAINER_CLASS}`}
      >
        {/* Figma：Crimson Text 96/96 · Primary */}
        <div
          className={`mb-[12px] font-['Crimson_Text'] font-semibold tracking-[0px] text-[color:var(--Colors-Use-Main---web-Primary)] sm:mb-[12px] text-[96px] leading-[80px] sm:text-[clamp(64px,8vh,96px)] sm:leading-[clamp(64px,8vh,96px)]`}
        >
          Yak Project
        </div>

        {/* Figma mobile 393：Noto Serif SC SemiBold 36/56；desktop 64/96 */}
        <h1
          className={`m-0 mb-[12px] max-w-[20em] ${isEn ? "font-['Crimson_Text']" : "font-['Noto_Serif_SC_Home']"} text-[36px] font-semibold leading-[56px] tracking-[0px] text-[color:var(--Colors-Neutral-100)] sm:mb-[12px] sm:text-[clamp(36px,5vh,64px)] sm:leading-[clamp(48px,7.5vh,96px)]`}
        >
          <span className="block">
            {t("HomeHero.titleBefore")}
            <span className={titleMarkClass}>
              {t("HomeHero.titleHighlight1")}
            </span>
          </span>
          <span className="block">
            <span className={titleMarkClass}>
              {t("HomeHero.titleHighlight2")}
            </span>
          </span>
        </h1>

        {/* Figma：PingFang SC 20/28 */}
        <div className="mt-[8px] font-['PingFang_SC'] text-[20px] font-normal leading-[28px] text-[color:var(--Colors-Neutral-100)] sm:mt-[12px] sm:text-[18px] sm:leading-[28px]">
          {t("HomeHero.subtitle")}
        </div>

        {/* GEO：完整产品定义句（SSR 直出），供 AI 搜索引擎首屏摘录 */}
        <p className="m-0 mb-[8px] max-w-[46em] font-['PingFang_SC'] text-[16px] font-normal leading-[26px] text-[color:var(--Colors-Neutral-100)] opacity-90 sm:mb-[12px] sm:text-[15px] sm:leading-[24px] md:mb-[40px]">
          {t("HomeHero.definition")}
        </p>

        {/* GEO：可引用统计行（构建期 GitHub API 一手数据，SSR 直出）。
            语言无关的数字表达，中英文均适用；任一项缺失即整行不渲染。 */}
        {formatCount(buildFacts?.yakit?.stars) ? (
          <p className="m-0 mb-[8px] flex flex-wrap items-center gap-x-[8px] gap-y-[4px] font-['JetBrains_Mono',ui-monospace,monospace] text-[13px] font-normal leading-[20px] tracking-[0.5px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] opacity-80 sm:mb-[12px] md:mb-[28px]">
            <span>
              ★ {formatCount(buildFacts?.yakit?.stars)}{" "}
              {isEn ? "stars" : "星"}
            </span>
            {formatCount(buildFacts?.yakit?.forks) ? (
              <>
                <span aria-hidden className="opacity-40">
                  /
                </span>
                <span>
                  {formatCount(buildFacts?.yakit?.forks)}{" "}
                  {isEn ? "forks" : "Forks"}
                </span>
              </>
            ) : null}
            {buildFacts?.yakitVersion ? (
              <>
                <span aria-hidden className="opacity-40">
                  /
                </span>
                <span>
                  {isEn ? "Latest release" : "最新版本"} v
                  {buildFacts.yakitVersion}
                </span>
              </>
            ) : null}
            <span aria-hidden className="opacity-40">
              /
            </span>
            <a
              href="https://github.com/yaklang"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-[color:var(--Colors-Use-Neutral-Text-1-Title)] underline decoration-[color:var(--Colors-Use-Main---web-Primary)] underline-offset-4 transition-colors duration-200 hover:!text-[color:var(--Colors-Use-Main---web-Primary)]"
            >
              100% {isEn ? "open source" : "开源"}
            </a>
          </p>
        ) : null}

        <div className="hidden sm:block">{actions}</div>
      </div>

      <div
        className={`absolute inset-x-0 bottom-[20px] z-[1] sm:hidden ${HOME_CONTAINER_CLASS}`}
      >
        {actions}
      </div>
    </section>
  );
};

export default HomeHero;
