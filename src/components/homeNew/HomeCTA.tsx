import React from "react";
import { useTranslation } from "react-i18next";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useHomeSlideActions } from "./HomeSlideContext";
import { HOME_CONTAINER_CLASS } from "./homeSectionLayout";

const DOWNLOAD_SLIDE_INDEX = 1;

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
  const nowBg = useBaseUrl("img/newHome/now.webp");

  return (
    <section className="w-full bg-[var(--Colors-Use-Main---Gold-Bg)] py-[40px]">
      <div
        className={`flex w-full flex-col ${HOME_CONTAINER_CLASS}`}
        style={{ maxHeight: "min(480px, calc(100vh - 80px - 80px))" }}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[8px]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `url(${nowBg}) lightgray 50% / cover no-repeat`,
              opacity: 0.6,
            }}
            aria-hidden
          />

          <div className="relative z-[1] flex flex-col items-center gap-[24px] px-[8px] py-[40px] text-center sm:gap-[28px] sm:px-[40px] sm:py-[48px] xl:py-[56px]">
            <div className="flex flex-col items-center gap-[16px] sm:gap-[12px]">
              <h2
                className={`m-0 flex flex-col items-center gap-[12px] ${isEn ? "font-['Crimson_Text'] text-[56px]" : "font-['Noto_Serif_SC'] text-[48px]"} font-medium leading-[64px] text-[color:var(--Colors-Neutral-100)]`}
              >
                {t("HomeTestimonialsCTA.ctaTitle")}
                <span
                  className="block h-px w-[48px] bg-[var(--Colors-Use-Basic-White)]/40 sm:hidden"
                  aria-hidden
                />
              </h2>
              <p className="m-0 text-center font-['PingFang_SC'] text-[20px] leading-[28px] text-[color:var(--Colors-Neutral-100)]">
                <span className="sm:hidden">
                  {t("HomeTestimonialsCTA.ctaDescMobile")}
                  <br />
                  {t("HomeTestimonialsCTA.ctaDescMobileLine2")}
                </span>
                <span className="hidden sm:inline whitespace-nowrap">
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
                className="flex w-full cursor-pointer items-center justify-center gap-[4px] rounded-[4px] bg-[var(--Colors-Use-Basic-Background)] px-[24px] py-[10px] font-['PingFang_SC'] text-[14px] font-medium leading-[24px] tracking-[0.15px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline transition-colors duration-200 hover:bg-[var(--Colors-Use-Neutral-Bg)] hover:text-[color:var(--Colors-Use-Neutral-Text-1-Title)] md:w-auto"
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
