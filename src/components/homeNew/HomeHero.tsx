import React, { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { useTranslation } from "react-i18next";
import { useHomeSlideActions } from "./HomeSlideContext";
import { HOME_CONTAINER_CLASS } from "./homeSectionLayout";

const DOWNLOAD_SLIDE_INDEX = 1;
/** 每张背景停留时长 */
const BG_HOLD_MS = 5500;
/** 淡入淡出时长 */
const BG_FADE_MS = 2200;

/** 已压缩 jpg（约 80–165KB），慢网按需加载当前/下一帧 */
const HERO_BG_IMAGES = [
  "img/newHome/01.webp",
  "img/newHome/02.webp",
  "img/newHome/03.webp",
] as const;

const DownLoadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M0.75 10.7499L0.75 11.5833C0.75 12.964 1.86929 14.0833 3.25 14.0833L11.5833 14.0833C12.964 14.0833 14.0833 12.964 14.0833 11.5833L14.0833 10.7499M4.08333 7.41659L7.41667 10.7499L10.75 7.41659M7.41667 10.7499L7.41667 0.749919"
      stroke="currentColor"
      strokeWidth="1.5"
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

const HomeHero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const { goToSlide } = useHomeSlideActions();
  const bg0 = useBaseUrl(HERO_BG_IMAGES[0]);
  const bg1 = useBaseUrl(HERO_BG_IMAGES[1]);
  const bg2 = useBaseUrl(HERO_BG_IMAGES[2]);
  const bgSrcs = [bg0, bg1, bg2];
  const [activeBg, setActiveBg] = useState(0);
  /** 已挂载过的帧，避免首屏同时请求三张图 */
  const [mountedBg, setMountedBg] = useState(() => new Set([0]));

  // 离开视口后暂停轮播，避免切屏时仍触发背景图状态更新
  useEffect(() => {
    const el = document.getElementById("home-hero");
    if (!el) return;

    let timer = 0;
    const start = () => {
      if (timer) return;
      timer = window.setInterval(() => {
        setActiveBg((prev) => (prev + 1) % bgSrcs.length);
      }, BG_HOLD_MS);
    };
    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = 0;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start();
        else stop();
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, [bgSrcs.length]);

  useEffect(() => {
    setMountedBg((prev) => {
      if (prev.has(activeBg)) return prev;
      const next = new Set(prev);
      next.add(activeBg);
      return next;
    });
    const nextIndex = (activeBg + 1) % bgSrcs.length;
    const img = new Image();
    img.src = bgSrcs[nextIndex];
    img.onload = () => {
      setMountedBg((prev) => {
        if (prev.has(nextIndex)) return prev;
        const next = new Set(prev);
        next.add(nextIndex);
        return next;
      });
    };
  }, [activeBg, bgSrcs]);

  const actions = (
    <div className="flex w-full flex-col items-center justify-center gap-[8px] md:mx-auto md:w-auto md:flex-row">
      <button
        type="button"
        onClick={() => goToSlide(DOWNLOAD_SLIDE_INDEX)}
        className="flex w-full cursor-pointer items-center justify-center gap-[4px] whitespace-nowrap rounded-[4px] border-none bg-[var(--Colors-Neutral-100)] px-[24px] py-[10px] font-['PingFang_SC'] text-[18px] font-medium leading-[26px] tracking-[0.15px] text-[color:var(--Colors-Use-Neutral-Bg)] transition-colors duration-200 hover:bg-[var(--Colors-Use-Main---web-Primary)] hover:text-[color:var(--Colors-Use-Main---web-On-Primary)] md:w-auto"
      >
        {t("HomeHero.downloadDesktop")}
        {DownLoadIcon}
      </button>
      <Link
        to="/docs/intro"
        className="flex w-full cursor-pointer items-center justify-center gap-[4px] whitespace-nowrap rounded-[4px] bg-[var(--Colors-Use-Basic-Background)] px-[24px] py-[10px] font-['PingFang_SC'] text-[18px] font-medium leading-[26px] tracking-[0.15px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline transition-colors duration-200 hover:bg-[var(--Colors-Use-Neutral-Bg)] hover:text-[color:var(--Colors-Use-Neutral-Text-1-Title)] md:w-auto"
      >
        {t("HomeHero.viewDocs")}
        <span className="inline-flex text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]">
          {viewIcon}
        </span>
      </Link>
    </div>
  );

  return (
    <section className="relative box-border flex h-full w-full flex-col items-center justify-center overflow-hidden py-[24px] [contain:paint] [transform:translateZ(0)]">
      {/* 背景：三图循环淡入淡出（按需挂载，减少慢网并发） */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[var(--Colors-Use-Main---Gold-Bg)]"
        aria-hidden
      >
        {bgSrcs.map((src, index) =>
          mountedBg.has(index) ? (
            <div
              key={src}
              className="absolute inset-0"
              style={{
                background: `url(${src}) var(--Colors-Use-Main---Gold-Bg) 50% / cover no-repeat`,
                opacity: index === activeBg ? 0.6 : 0,
                transition: `opacity ${BG_FADE_MS}ms ease-in-out`,
              }}
            />
          ) : null,
        )}
      </div>

      <div
        className={`relative z-[1] min-h-0 w-full text-left sm:text-center ${HOME_CONTAINER_CLASS}`}
      >
        <div
          className={`mb-[12px] font-['Crimson_Text'] font-semibold tracking-[0px] text-[color:var(--Colors-Use-Main---web-Primary)] sm:mb-[20px] ${isEn ? "text-[64px] leading-[56px] sm:text-[clamp(56px,8vh,96px)] sm:leading-[clamp(56px,8vh,96px)]" : "text-[72px] leading-[60px] sm:text-[clamp(64px,9vh,96px)] sm:leading-[clamp(64px,9vh,96px)]"}`}
        >
          Yak Project
        </div>
        <div
          className={`mb-[16px] ${isEn ? "font-['Crimson_Text'] text-[32px] sm:text-[clamp(36px,6vh,72px)]" : "font-['Noto_Serif_SC'] text-[32px] sm:text-[clamp(36px,5.5vh,64px)]"} font-semibold leading-[44px] tracking-[0px] text-[color:var(--Colors-Neutral-100)] sm:mb-[clamp(12px,2vh,28px)] sm:leading-[clamp(44px,8vh,96px)]`}
        >
          {t("HomeHero.title")}
        </div>
        <div
          className={`mt-[8px] ${isEn ? "font-['Crimson_Text'] text-[12px] sm:text-[clamp(14px,2.5vh,28px)]" : "font-['Noto_Serif_SC'] text-[12px] sm:text-[clamp(14px,2vh,20px)]"} font-normal leading-[18px] tracking-[0px] text-[color:var(--Colors-Neutral-100)] sm:mt-[clamp(8px,1.5vh,20px)] sm:leading-[clamp(18px,2.5vh,28px)] md:mb-[clamp(24px,4vh,60px)]`}
        >
          {t("HomeHero.subtitle")}
        </div>

        {/* ≥md：跟在文案下方 */}
        <div className="hidden md:block">{actions}</div>
      </div>

      {/* 小屏：贴底，距底部 20px */}
      {/* 小屏：贴底，距底部 20px */}
      <div
        className={`absolute inset-x-0 bottom-[20px] z-[1] md:hidden ${HOME_CONTAINER_CLASS}`}
      >
        <div className="mx-auto w-full max-w-[480px]">{actions}</div>
      </div>
    </section>
  );
};

export default HomeHero;
