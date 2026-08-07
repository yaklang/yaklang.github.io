import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Popover } from "antd";
import { useTranslation } from "react-i18next";
import SearchButton from "../SearchButton";
import { useHomeTheme } from "./HomeThemeContext";
import { useHomeLanguage } from "./useHomeLanguage";

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

const WechatIcon = (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden
  >
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
  </svg>
);

const XIcon = (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    aria-hidden
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.263 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const BilibiliIcon = (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden
  >
    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.62h4.693l2.174-2.08a1.31 1.31 0 0 1 .946-.387c.347 0 .653.138.92.387.267.25.373.551.373.907 0 .355-.106.656-.373.893l-1.2 1.313zm-.853 2.56H6.987c-.747.038-1.36.29-1.84.76-.48.47-.76 1.07-.8 1.787v6.24c.04.72.32 1.32.8 1.787.48.47 1.093.72 1.84.76h9.973c.747-.04 1.36-.29 1.84-.76.48-.47.76-1.07.8-1.787v-6.24c-.04-.72-.32-1.317-.8-1.787-.48-.47-1.093-.722-1.84-.76zM9.333 10.16c.373 0 .693.124.96.373.267.25.4.556.4.92v2.347c0 .373-.133.68-.4.946a1.31 1.31 0 0 1-.96.4c-.373 0-.693-.133-.96-.4a1.31 1.31 0 0 1-.4-.946V11.44c0-.364.133-.67.4-.92.267-.249.587-.373.96-.373zm5.334 0c.373 0 .693.124.96.373.267.25.4.556.4.92v2.347c0 .373-.133.68-.4.946a1.31 1.31 0 0 1-.96.4c-.373 0-.693-.133-.96-.4a1.31 1.31 0 0 1-.4-.946V11.44c0-.364.133-.67.4-.92.267-.249.587-.373.96-.373z" />
  </svg>
);

const YoutubeIcon = (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden
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
    aria-hidden
  >
    <path
      d="M10 14.1667C12.3012 14.1667 14.1667 12.3012 14.1667 10C14.1667 7.69881 12.3012 5.83333 10 5.83333C7.69881 5.83333 5.83333 7.69881 5.83333 10C5.83333 12.3012 7.69881 14.1667 10 14.1667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2.5V3.33333M10 16.6667V17.5M3.33333 10H2.5M17.5 10H16.6667M4.8217 4.8217L5.41667 5.41667M14.5833 14.5833L15.1783 15.1783M4.8217 15.1783L5.41667 14.5833M14.5833 5.41667L15.1783 4.8217"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type FooterLinkItem = {
  labelKey: string;
  to?: string;
  href?: string;
};

type FooterGroup = {
  titleKey: string;
  items: FooterLinkItem[];
};

const getFooterLinks = (t: (key: string) => string): FooterGroup[] => [
  {
    titleKey: "HomeFooter.sections.opensource",
    items: [
      { labelKey: "HomeFooter.links.irify", href: "https://ssa.to" },
      {
        labelKey: "HomeFooter.links.javaJive",
        href: "https://yaklang.io/javajive/",
      },
      {
        labelKey: "HomeFooter.links.hackSkills",
        href: "https://skills.hackbenchmark.com",
      },
      { labelKey: "HomeFooter.links.yakLab", to: "/Yaklab/vulinbox/" },
      {
        labelKey: "HomeFooter.links.hackBenchmark",
        href: "https://hackbenchmark.com",
      },
      { labelKey: "HomeFooter.links.memfit", href: "https://memfit.ai" },
    ],
  },
  {
    titleKey: "HomeFooter.sections.docs",
    items: [
      { labelKey: "HomeFooter.links.yakDocs", to: "/docs/intro" },
      { labelKey: "HomeFooter.links.apiManual", to: "/docs/intro" },
      { labelKey: "HomeFooter.links.yakitManual", to: "/products/intro" },
      { labelKey: "HomeFooter.links.techBlog", to: "/blog" },
      { labelKey: "HomeFooter.links.yakLabHandbook", to: "/Yaklab/vulinbox/" },
    ],
  },
  {
    titleKey: "HomeFooter.sections.community",
    items: [
      { labelKey: "HomeFooter.links.aboutUs", to: "/team" },
      { labelKey: "HomeFooter.links.partners", to: "/cooperativePartner" },
      { labelKey: "HomeFooter.links.techBlog", to: "/blog" },
      { labelKey: "HomeFooter.links.downloads", to: "/download" },
    ],
  },
];

/** 与 Header 圆形图标按钮一致 */
const iconBtnClass =
  "inline-flex h-[32px] w-[32px] shrink-0 cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] p-0 text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] no-underline transition-colors duration-200 hover:bg-[var(--Colors-Use-Main---Gold-Focus)] hover:text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]";

/** 与 Header 语言切换一致 */
const langBtnClass =
  "inline-flex cursor-pointer items-center border-none bg-transparent p-0 font-['PingFang_SC'] text-[14px] font-normal leading-[20px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)]";

const socialIconClass = iconBtnClass;

const linkClass =
  "font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)]";

const metaClass =
  "font-['PingFang_SC'] text-[12px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Disable)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)]";

const FooterLinkEl: React.FC<FooterLinkItem> = ({ labelKey, to, href }) => {
  const { t } = useTranslation();
  if (to) {
    return (
      <Link className={linkClass} to={to}>
        {t(labelKey)}
      </Link>
    );
  }
  return (
    <a
      className={linkClass}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t(labelKey)}
    </a>
  );
};

const SocialRow: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center">
      <a
        href="https://github.com/yaklang"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("HomeFooter.aria.github")}
        className={`${socialIconClass} mr-[8px]`}
      >
        <GithubIcon />
      </a>
      <Popover
        classNames={{ root: "wechat-code-popover" }}
        content={
          <div className="flex flex-col items-center gap-[8px] p-[4px]">
            <img
              src="/img/wechat.jpg"
              alt={t("HomeFooter.aria.wechatPop")}
              className="h-[140px] w-[140px] object-contain"
            />
            <span className="text-[12px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]">
              {t("HomeFooter.aria.wechatScan")}
            </span>
          </div>
        }
      >
        <button
          type="button"
          aria-label={t("HomeFooter.aria.wechat")}
          className={`${socialIconClass} mr-[8px]`}
        >
          {WechatIcon}
        </button>
      </Popover>
      <a
        href="https://space.bilibili.com/437503777?spm_id_from=333.788.upinfo.head.click"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bilibili"
        className={socialIconClass}
      >
        {BilibiliIcon}
      </a>
    </div>
  );
};

/** Header 同款：语言 / 主题 / GitHub */
const ThemeGithubLang: React.FC<{
  currentLng: string;
  onToggleLanguage: () => void;
  /** 小屏参考图顺序：主题 → GitHub → 语言；桌面与 Header 一致：语言 → 主题 → GitHub */
  order?: "desktop" | "mobile";
  langClassName?: string;
}> = ({ currentLng, onToggleLanguage, order = "desktop", langClassName }) => {
  const { theme, toggleTheme } = useHomeTheme();
  const isDark = theme === "dark";

  const { t } = useTranslation();

  const lang = (
    <button
      type="button"
      onClick={onToggleLanguage}
      aria-label={t("HomeFooter.aria.switchLanguage")}
      className={langClassName ?? `${langBtnClass} mr-[18px]`}
    >
      <GlobeIcon />
      <span className="ml-[4px]">
        {currentLng.startsWith("en") ? "中" : "EN"}
      </span>
    </button>
  );

  const themeBtn = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? t("HomeFooter.aria.switchLightMode")
          : t("HomeFooter.aria.switchDarkMode")
      }
      className={`${iconBtnClass} mr-[8px]`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  const github = (
    <a
      href="https://github.com/yaklang"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className={`${iconBtnClass} mr-[8px]`}
    >
      <GithubIcon />
    </a>
  );

  if (order === "mobile") {
    return (
      <>
        {themeBtn}
        {github}
        {lang}
      </>
    );
  }

  return (
    <>
      {lang}
      {themeBtn}
      {github}
    </>
  );
};

const UtilityTools: React.FC<{
  currentLng: string;
  onToggleLanguage: () => void;
}> = ({ currentLng, onToggleLanguage }) => (
  <div className="flex flex-shrink-0 items-center">
    <ThemeGithubLang
      currentLng={currentLng}
      onToggleLanguage={onToggleLanguage}
      order="desktop"
    />
    <SearchButton />
  </div>
);

/** 小屏底部工具条：与 header 同款圆形按钮样式 */
const MobileUtilityBar: React.FC<{
  currentLng: string;
  onToggleLanguage: () => void;
}> = ({ currentLng, onToggleLanguage }) => (
  <div className="flex w-full items-center justify-between">
    <div className="flex items-center">
      <ThemeGithubLang
        currentLng={currentLng}
        onToggleLanguage={onToggleLanguage}
        order="mobile"
        langClassName={langBtnClass}
      />
    </div>
    <SearchButton />
  </div>
);

const HomeFooter: React.FC<{
  /** 非首页场景加顶部 Focus 边框 */
  withTopBorder?: boolean;
}> = ({ withTopBorder = false }) => {
  const { t } = useTranslation();
  const logoSrc = useBaseUrl("img/logo.png");
  const { currentLng, toggleLanguage } = useHomeLanguage();

  const footerLinks = getFooterLinks(t);

  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full bg-[var(--Colors-Use-Main---Gold-Bg)]${
        withTopBorder
          ? " border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)] pt-[20px]"
          : ""
      }`}
    >
      {" "}
      {/* 主内容：与立即体验 / header 同宽 container */}
      <div className="mx-auto box-border w-full px-[16px] md:px-[40px] lg:px-[60px] xl:px-[80px]">
        <div className="flex flex-col gap-[32px] lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-[16px] md:flex-row md:items-start md:justify-between lg:w-[280px] lg:shrink-0 lg:flex-col">
            <div className="flex flex-col gap-[12px]">
              <Link to="/" className="inline-flex w-fit !no-underline">
                <img
                  src={logoSrc}
                  alt="YAK"
                  className="h-[36px] w-auto object-contain"
                />
              </Link>
              <p className="m-0 font-['Noto_Serif_SC'] text-[24px] leading-[32px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)]">
                <span className="text-[color:var(--Colors-Use-Main---web-Primary)]">
                  /
                </span>{" "}
                {t("HomeFooter.slogan")}{" "}
                <span className="text-[color:var(--Colors-Use-Main---web-Primary)]">
                  /
                </span>
              </p>
            </div>
            <div className="md:pt-[4px] lg:pt-[8px]">
              <SocialRow />
            </div>
          </div>

          {/* PC：三列链接整体靠右 */}
          <div className="grid w-full grid-cols-1 gap-[28px] sm:grid-cols-3 sm:gap-[24px] lg:ml-auto lg:w-auto lg:shrink-0 lg:gap-[48px] xl:gap-[80px]">
            {footerLinks.map((group) => (
              <div key={group.titleKey} className="min-w-0 lg:min-w-[160px]">
                <h4 className="m-0 mb-[12px] font-['PingFang_SC'] text-[14px] font-normal leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]">
                  {t(group.titleKey)}
                </h4>
                <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
                  {group.items.map((item) => (
                    <li key={item.labelKey} className="m-0">
                      <FooterLinkEl {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 底栏 */}
      <div className="mt-[40px] border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)] sm:mt-[48px]">
        {/* 小屏：两侧竖线距屏 16px，横线分行 */}
        <div className="mx-[16px] flex flex-col border-0 border-x border-solid border-[var(--Colors-Use-Main---Gold-Focus)] sm:hidden">
          <div className="px-[16px] py-[12px]">
            <span className={metaClass}>
              Copyright © {year} for Yak Project.
            </span>
          </div>
          <div className="border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)] px-[16px] py-[12px]">
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noreferrer"
              className={metaClass}
            >
              {t("HomeFooter.icp")}
            </a>
          </div>
          <div className="border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)] px-[16px] py-[12px]">
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802048712"
              target="_blank"
              rel="noreferrer"
              className={metaClass}
            >
              {t("HomeFooter.police")}
            </a>
          </div>
          <div className="border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)] px-[16px] py-[12px]">
            <MobileUtilityBar
              currentLng={currentLng}
              onToggleLanguage={toggleLanguage}
            />
          </div>
        </div>

        {/* 中屏：两侧竖线距屏 16px；上版权，下三列竖线分割 */}
        <div className="mx-[16px] hidden flex-col border-0 border-x border-solid border-[var(--Colors-Use-Main---Gold-Focus)] sm:flex lg:hidden">
          <div className="px-[16px] py-[14px]">
            <span className={metaClass}>
              Copyright © {year} for Yak Project.
            </span>
          </div>
          <div className="flex min-h-[52px] border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)]">
            <div className="flex min-w-0 flex-1 items-center px-[16px]">
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                rel="noreferrer"
                className="font-['PingFang_SC'] text-[12px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
              >
                {t("HomeFooter.icp")}
              </a>
            </div>
            <div className="flex min-w-0 flex-1 items-center border-0 border-l border-solid border-l-[var(--Colors-Use-Main---Gold-Focus)] px-[16px]">
              <a
                href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802048712"
                target="_blank"
                rel="noreferrer"
                className="font-['PingFang_SC'] text-[12px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
              >
                {t("HomeFooter.police")}
              </a>
            </div>
            <div className="flex shrink-0 items-center border-0 border-l border-solid border-l-[var(--Colors-Use-Main---Gold-Focus)] px-[12px]">
              <UtilityTools
                currentLng={currentLng}
                onToggleLanguage={toggleLanguage}
              />
            </div>
          </div>
        </div>

        {/* PC：全高竖线；版权左，版号+工具右；左右外框距屏约 80px */}
        <div className="hidden w-full lg:flex lg:min-h-[56px] md:px-[40px] lg:px-[60px] xl:px-[80px]">
          <div className="flex shrink-0 items-center border-0 border-l border-solid border-l-[var(--Colors-Use-Main---Gold-Focus)] px-[24px]">
            <span className={metaClass}>
              Copyright © {year} for Yak Project.
            </span>
          </div>
          <div className="min-w-0 flex-1" aria-hidden />
          <div className="flex shrink-0 items-center border-0 border-l border-solid border-l-[var(--Colors-Use-Main---Gold-Focus)] px-[24px]">
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noreferrer"
              className="font-['PingFang_SC'] text-[12px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
            >
              {t("HomeFooter.icp")}
            </a>
          </div>
          <div className="flex shrink-0 items-center border-0 border-l border-solid border-l-[var(--Colors-Use-Main---Gold-Focus)] px-[24px]">
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802048712"
              target="_blank"
              rel="noreferrer"
              className="font-['PingFang_SC'] text-[12px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
            >
              {t("HomeFooter.police")}
            </a>
          </div>
          <div className="flex shrink-0 items-center border-0 border-x border-solid border-[var(--Colors-Use-Main---Gold-Focus)] px-[24px]">
            <UtilityTools
              currentLng={currentLng}
              onToggleLanguage={toggleLanguage}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
