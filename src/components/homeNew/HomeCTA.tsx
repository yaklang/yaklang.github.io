import React from "react";
import { useTranslation } from "react-i18next";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useHomeSlideActions } from "./HomeSlideContext";
import { useHomeTheme } from "./HomeThemeContext";
import { HOME_CONTAINER_CLASS } from "./homeSectionLayout";

const DOWNLOAD_SLIDE_INDEX = 1;

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

const ViewIcon = (
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

const HomeCTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const { goToSlide } = useHomeSlideActions();
  const { theme } = useHomeTheme();
  const isDark = theme === "dark";
  const ctaBg = useBaseUrl("img/newHome/cta-hands-bg.png");
  const ctaBgDark = useBaseUrl("img/newHome/cta-hands-bg-dark.png");

  return (
    <section className="w-full bg-[var(--Colors-Use-Main---Gold-Bg)]">
      <div
        className={`flex h-[400px] w-full flex-col min-[1280px]:h-[min(480px,calc(100vh-160px))] ${HOME_CONTAINER_CLASS}`}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[8px] bg-[var(--Colors-Use-Main---Gold-Bg)]">
          {/*
            Light: cta-hands-bg.png + Gold-Focus
            Dark: cta-hands-bg-dark.png + Gold-Focus（对齐 HomeHero 叠层）
          */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]"
            aria-hidden
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${isDark ? ctaBgDark : ctaBg})`,
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[var(--Colors-Use-Main---Gold-Focus)] opacity-30"
              aria-hidden
            />
          </div>

          <div className="relative z-[1] flex flex-col items-center gap-[24px] px-[8px] py-[40px] text-center sm:gap-[28px] sm:px-[40px] sm:py-[48px] xl:py-[56px]">
            <div className="flex flex-col items-center gap-[16px] sm:gap-[12px]">
              <h2
                className={`m-0 flex flex-col items-center gap-[12px] ${isEn ? "font-['Crimson_Text'] text-[56px]" : "font-['Noto_Serif_SC_Home'] text-[48px]"} font-medium leading-[64px] text-[color:var(--Colors-Neutral-100)]`}
              >
                {t("HomeTestimonialsCTA.ctaTitle")}
                <span
                  className="block h-px w-[48px] bg-[var(--Colors-Use-Basic-White)]/40 sm:hidden"
                  aria-hidden
                />
              </h2>
              <p className="m-0 w-fit max-w-full bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] px-[4px] text-center font-['PingFang_SC'] text-[20px] leading-[28px] text-[color:var(--Colors-Neutral-100)] [box-decoration-break:clone]">
                <span className="sm:hidden">
                  {t("HomeTestimonialsCTA.ctaDescMobile")}
                  <br />
                  {t("HomeTestimonialsCTA.ctaDescMobileLine2")}
                </span>
                <span className="hidden sm:inline">
                  {t("HomeTestimonialsCTA.ctaDescDesktop")}
                </span>
              </p>
            </div>

            <div className="flex w-full max-w-[480px] flex-col items-center justify-center gap-[8px] md:mx-auto md:flex-row">
              <button
                type="button"
                onClick={() => goToSlide(DOWNLOAD_SLIDE_INDEX)}
                className="flex w-full cursor-pointer items-center justify-center gap-[4px] rounded-[4px] border-none bg-[var(--Colors-Neutral-100)] px-[24px] py-[10px] font-['PingFang_SC'] text-[14px] font-medium leading-[24px] tracking-[0.15px] text-[color:var(--Colors-Use-Neutral-Bg)] transition-colors duration-200 hover:bg-[var(--Colors-Use-Main---web-Primary)] md:w-auto"
              >
                {t("HomeTestimonialsCTA.downloadDesktop")}
                {DownLoadIcon}
              </button>
              <Link
                to="/docs/intro"
                className="flex w-full cursor-pointer items-center justify-center gap-[4px] rounded-[4px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] px-[24px] py-[10px] font-['PingFang_SC'] text-[14px] font-medium leading-[24px] tracking-[0.15px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline transition-colors duration-200 hover:bg-[var(--Colors-Use-Neutral-Bg)] hover:text-[color:var(--Colors-Use-Neutral-Text-1-Title)] md:w-auto"
              >
                {t("HomeTestimonialsCTA.viewDocs")}
                <span className="inline-flex text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]">
                  {ViewIcon}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
