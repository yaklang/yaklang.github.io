import React, { ReactElement, useEffect, useState } from "react";
import { Dropdown, message } from "antd";
import { useMemoizedFn } from "ahooks";
import { useTranslation } from "react-i18next";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { LoadingIcon, SureIcon } from "../HomeIcon";
import { detectDownloadPlatform } from "../../utils/yakitDownload";
import { yakitIcon, yakIcon, memfitIcon, irifyIcon, memfitBrandIcon, irifyBrandIcon } from "./productIcons";
import HomePartnerMarquee from "./HomePartnerMarquee";
import { useHomeTheme } from "./HomeThemeContext";
import {
  HOME_CONTAINER_CLASS,
  HOME_SECTION_CENTER_CLASS,
} from "./homeSectionLayout";

/** 大屏：内容左侧；随视口变窄平滑移到屏幕右侧 */
const FLOWER_WIDE = 1280;
const FLOWER_NARROW = 640;
/** 与原先 ASCII fontSize=6.5 时的视觉宽度对齐（原图 705×822） */
const FLOWER_WIDTH_AT_LARGE = 560;
const FLOWER_FONT_REF = 6.5;

const DownloadFlowerBg = () => {
  const { theme } = useHomeTheme();
  const isDark = theme === "dark";
  const flowerBg = useBaseUrl("img/newHome/flower-bg.png");
  const flowerBgDark = useBaseUrl("img/newHome/flower-bg-dark.png");
  const flowerSrc = isDark ? flowerBgDark : flowerBg;
  const [layout, setLayout] = useState({
    left: 0,
    width: FLOWER_WIDTH_AT_LARGE,
    opacity: 0.65,
    ready: false,
  });

  useEffect(() => {
    // resize 期间用 rAF 合并，避免拖动窗口时高频 setState 造成卡顿
    let rafId = null;
    const update = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const w = window.innerWidth;
        const t = Math.min(
          1,
          Math.max(0, (FLOWER_WIDE - w) / (FLOWER_WIDE - FLOWER_NARROW)),
        );
        // t=0 大屏：锚在下载内容左缘；t=1 小屏：锚在视口右侧外
        const leftLarge = w / 2 - 200;
        const leftSmall = w * 1.12;
        const fontSize = 6.5 + (3.2 - 6.5) * t;
        setLayout({
          left: leftLarge + (leftSmall - leftLarge) * t,
          width: FLOWER_WIDTH_AT_LARGE * (fontSize / FLOWER_FONT_REF),
          opacity: 0.68 + (0.55 - 0.68) * t,
          ready: true,
        });
      });
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-transparent select-none"
    >
      <img
        src={flowerSrc}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="absolute top-1/2 m-0 h-auto -translate-x-full -translate-y-1/2"
        style={{
          left: layout.left,
          width: layout.width,
          opacity: layout.ready ? layout.opacity : 0,
        }}
      />
    </div>
  );
};

const axios = require("axios");

const DOWNLOAD_ARROW_PATH =
  "M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M8 12L12 16L16 12M12 16L12 4";

type OsIconKind = "mac" | "linux" | "win";

const PlatformOsIcon: React.FC<{ os: OsIconKind }> = ({ os }) => {
  const { theme } = useHomeTheme();
  const isDark = theme === "dark";
  const greySrc = useBaseUrl(`img/newHome/os/${os}-grey.svg`);
  const colorSrc = useBaseUrl(`img/newHome/os/${os}-color.svg`);

  return (
    <span className="relative inline-flex h-[20px] w-[20px] shrink-0">
      <img
        src={greySrc}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="h-full w-full transition-opacity duration-200 group-hover:opacity-0"
      />
      {isDark ? (
        <span
          aria-hidden
          className="absolute inset-0 bg-[var(--Colors-Neutral-100)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 [mask-image:var(--os-icon-mask)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:var(--os-icon-mask)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
          style={
            {
              ["--os-icon-mask" as string]: `url(${greySrc})`,
            } as React.CSSProperties
          }
        />
      ) : (
        <img
          src={colorSrc}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      )}
    </span>
  );
};

const DownloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d={DOWNLOAD_ARROW_PATH}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CopyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M5.33341 4.66667V10C5.33341 10.7364 5.93037 11.3333 6.66675 11.3333H10.6667M5.33341 4.66667V3.33333C5.33341 2.59695 5.93037 2 6.66675 2H9.72394C9.90075 2 10.0703 2.07024 10.1953 2.19526L13.1382 5.13807C13.2632 5.2631 13.3334 5.43266 13.3334 5.60948V10C13.3334 10.7364 12.7365 11.3333 12.0001 11.3333H10.6667M5.33341 4.66667H4.66675C3.56218 4.66667 2.66675 5.5621 2.66675 6.66667V12.6667C2.66675 13.403 3.2637 14 4.00008 14H8.66675C9.77132 14 10.6667 13.1046 10.6667 12V11.3333"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PlusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M9.5 4.5L6 8L2.5 4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type TabKey = "yakit" | "yaklang" | "memfit" | "irify";
type DownloadableTabKey = "yakit" | "irify" | "memfit";

const TABS: {
  key: TabKey;
  label: string;
  icon: ReactElement;
  /** 产品区大图标；未设则复用 tab icon */
  brandIcon?: ReactElement;
  description: string;
}[] = [
  {
    key: "yakit",
    label: "Yakit",
    icon: yakitIcon,
    description: "HomeDownload.tabs.yakitDesc",
  },
  {
    key: "yaklang",
    label: "Yaklang",
    icon: yakIcon,
    description: "HomeDownload.tabs.yaklangDesc",
  },
  {
    key: "memfit",
    label: "Memfit AI",
    icon: memfitIcon,
    brandIcon: memfitBrandIcon,
    description: "HomeDownload.tabs.memfitDesc",
  },
  {
    key: "irify",
    label: "IRify",
    icon: irifyIcon,
    brandIcon: irifyBrandIcon,
    description: "HomeDownload.tabs.irifyDesc",
  },
];

/** Tab active / 产品强调色 */
const TAB_ACCENT: Record<TabKey, string> = {
  yakit: "var(--Colors-Use-Main---web-Primary)",
  yaklang: "var(--Colors-Use-Main---web-Primary)",
  memfit: "var(--Colors-Use-Main---memfit-Primary)",
  irify: "#6A4AA0",
};

type PlatformRow = {
  key: string;
  os: string;
  arch: string;
  osIcon: OsIconKind;
  url: string;
};

const DOWNLOAD_PLATFORMS: PlatformRow[] = [
  {
    key: "macIntel",
    os: "MacOS",
    arch: "(Intel)",
    osIcon: "mac",
    url: "darwin-x64.dmg",
  },
  {
    key: "macApple",
    os: "MacOS",
    arch: "(Apple Silicon)",
    osIcon: "mac",
    url: "darwin-arm64.dmg",
  },
  {
    key: "linux",
    os: "Linux",
    arch: "",
    osIcon: "linux",
    url: "linux-amd64.AppImage",
  },
  {
    key: "windows",
    os: "Windows",
    arch: "",
    osIcon: "win",
    url: "windows-amd64.exe",
  },
  {
    key: "linuxArm64",
    os: "Linux",
    arch: "(Arm64)",
    osIcon: "linux",
    url: "linux-arm64.AppImage",
  },
];

const PRODUCT_DOWNLOAD_CONFIG: Record<
  DownloadableTabKey,
  {
    getVersionUrl: () => string;
    productName: string;
    buildUrl: (version: string, file: string) => string;
  }
> = {
  yakit: {
    getVersionUrl: () =>
      `https://oss-qn.yaklang.com/yak/latest/yakit-version.txt?_=${Date.now()}`,
    productName: "Yakit",
    buildUrl: (version, file) =>
      `https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-${file}`,
  },
  irify: {
    getVersionUrl: () =>
      `https://oss-qn.yaklang.com/irify/latest/yakit-version.txt?_=${Date.now()}`,
    productName: "IRify",
    buildUrl: (version, file) =>
      `https://oss-qn.yaklang.com/irify/${version}/IRify-${version}-${file}`,
  },
  memfit: {
    getVersionUrl: () =>
      `https://oss-qn.yaklang.com/memfit/latest/yakit-version.txt?_=${Date.now()}`,
    productName: "MemfitAI",
    buildUrl: (version, file) =>
      `https://oss-qn.yaklang.com/memfit/${version}/MemfitAI-${version}-${file}`,
  },
};

const isDownloadableTab = (key: TabKey): key is DownloadableTabKey =>
  key === "yakit" || key === "irify" || key === "memfit";

const LEGACY_RELEASE_URL: Record<TabKey, string> = {
  yaklang: "https://github.com/yaklang/yaklang/releases",
  yakit: "https://github.com/yaklang/yakit/releases",
  memfit: "https://github.com/yaklang/yakit/releases",
  irify: "https://github.com/yaklang/yakit/releases",
};

const LEGACY_DOWNLOAD_ITEMS = [
  {
    name: "Windows",
    desc: "HomeDownload.legacyItems.win7",
    url: "windows-legacy-amd64.exe",
  },
  {
    name: "Linux-amd",
    desc: "HomeDownload.legacyItems.uosNote",
    url: "linux-legacy-amd64.AppImage",
  },
  {
    name: "Linux-arm",
    desc: "HomeDownload.legacyItems.uosNote",
    url: "linux-legacy-arm64.AppImage",
  },
  {
    name: "macOS Intel",
    desc: "HomeDownload.legacyItems.oldMac",
    url: "darwin-legacy-x64.dmg",
  },
  {
    name: "macOS Apple Silicon",
    desc: "HomeDownload.legacyItems.oldMac",
    url: "darwin-legacy-arm64.dmg",
  },
];

const LegacyDownloadIcon = DownloadIcon;

const YAK_ENV_OPTIONS = [
  {
    key: "MacOs(Intel/Apple Silicon)",
    label: "MacOs(Intel/Apple Silicon)",
    code: "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)",
  },
  {
    key: "Linux",
    label: "Linux",
    code: "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)",
  },
  {
    key: "Windows",
    label: "Windows",
    code: "powershell (new-object System.Net.WebClient).DownloadFile('https://oss-qn.yaklang.com/yak/latest/yak_windows_amd64.exe','yak_windows_amd64.exe') && yak_windows_amd64.exe install && del /f yak_windows_amd64.exe",
  },
] as const;

type YakEnvKey = (typeof YAK_ENV_OPTIONS)[number]["key"];

const getColourCode = (code: string) => {
  return code
    .split("")
    .map((item) => {
      if (item === "<" || item === "/" || item === "-") {
        return `<span style="color:rgb(137, 221, 255)">${item}</span>`;
      }
      if (item === "(" || item === ")" || item === ":" || item === ".") {
        return `<span style="color:rgb(199, 146, 234)">${item}</span>`;
      }
      return item;
    })
    .join("");
};

const HomeDownload: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const [activeTab, setActiveTab] = useState<TabKey>("yakit");
  const [sureCopy, setSureCopy] = useState(false);
  const [loadingCopy, setLoadingCopy] = useState(false);
  const [legacyVisible, setLegacyVisible] = useState(false);
  const [yakEnvVisible, setYakEnvVisible] = useState(false);
  const [currentSelectYak, setCurrentSelectYak] = useState<YakEnvKey>(
    "MacOs(Intel/Apple Silicon)",
  );
  const [versionMap, setVersionMap] = useState<
    Partial<Record<DownloadableTabKey, string>>
  >({});
  const [sizeMap, setSizeMap] = useState<
    Partial<Record<DownloadableTabKey, Record<string, number>>>
  >({});
  const activeProduct = TABS.find((t) => t.key === activeTab) ?? TABS[0];
  const activeAccent = TAB_ACCENT[activeTab];
  const activeVersion = isDownloadableTab(activeTab)
    ? versionMap[activeTab] || ""
    : "";
  const activeSizes = isDownloadableTab(activeTab)
    ? sizeMap[activeTab] || {}
    : {};
  const currentYakEnv =
    YAK_ENV_OPTIONS.find((item) => item.key === currentSelectYak) ??
    YAK_ENV_OPTIONS[0];
  const currentYakCodeHtml =
    currentSelectYak === "Windows"
      ? currentYakEnv.code
      : getColourCode(currentYakEnv.code);

  useEffect(() => {
    let cancelled = false;
    detectDownloadPlatform().then((platform) => {
      if (cancelled) return;
      if (platform === "windows") {
        setCurrentSelectYak("Windows");
      } else if (platform === "linux" || platform === "linuxArm64") {
        setCurrentSelectYak("Linux");
      } else {
        setCurrentSelectYak("MacOs(Intel/Apple Silicon)");
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const getSize = useMemoizedFn(
    async (
      product: DownloadableTabKey,
      fileUrl: string,
      version: string,
    ): Promise<number | null> => {
      const config = PRODUCT_DOWNLOAD_CONFIG[product];
      try {
        const response = await axios.head(config.buildUrl(version, fileUrl));
        if (response?.headers?.["content-length"]) {
          return (
            Math.ceil(
              (response.headers["content-length"] / 1024 / 1024) * 100,
            ) / 100
          );
        }
        message.error(
          t("HomeDownload.messages.fetchSizeError", {
            product: config.productName,
            file: fileUrl,
          }),
        );
        return null;
      } catch {
        message.error(
          t("HomeDownload.messages.fetchSizeError", {
            product: config.productName,
            file: fileUrl,
          }),
        );
        return null;
      }
    },
  );

  const initProductDownload = useMemoizedFn(
    async (product: DownloadableTabKey) => {
      if (versionMap[product]) return;

      const config = PRODUCT_DOWNLOAD_CONFIG[product];
      try {
        const response = await axios.get(config.getVersionUrl());
        if (response?.data && typeof response.data === "string") {
          const nextVersion = (response.data as string).split("\n")[0];
          setVersionMap((prev) => ({ ...prev, [product]: nextVersion }));

          const nextSizes: Record<string, number> = {};
          for (const platform of DOWNLOAD_PLATFORMS) {
            const size = await getSize(product, platform.url, nextVersion);
            if (size != null) {
              nextSizes[platform.key] = size;
              setSizeMap((prev) => ({
                ...prev,
                [product]: { ...(prev[product] || {}), ...nextSizes },
              }));
            }
          }
        } else {
          message.error(
            t("HomeDownload.messages.fetchVersionError", {
              product: config.productName,
            }),
          );
        }
      } catch {
        message.error(
          t("HomeDownload.messages.fetchVersionError", {
            product: config.productName,
          }),
        );
      }
    },
  );

  useEffect(() => {
    if (isDownloadableTab(activeTab)) {
      initProductDownload(activeTab);
    }
  }, [activeTab, initProductDownload]);

  useEffect(() => {
    setLegacyVisible(false);
    setYakEnvVisible(false);
  }, [activeTab]);

  // Swiper 会干扰 antd Dropdown 默认的点外关闭，这里用捕获阶段补一层
  useEffect(() => {
    if (!yakEnvVisible && !legacyVisible) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (
        target.closest("[data-home-download-dropdown]") ||
        target.closest("[data-home-download-trigger]")
      ) {
        return;
      }
      setYakEnvVisible(false);
      setLegacyVisible(false);
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [yakEnvVisible, legacyVisible]);

  const onDownload = useMemoizedFn((fileUrl: string) => {
    if (!isDownloadableTab(activeTab)) return;
    const version = versionMap[activeTab];
    if (!version) {
      message.error(
        t("HomeDownload.messages.fetchVersionError", {
          product: PRODUCT_DOWNLOAD_CONFIG[activeTab].productName,
        }),
      );
      return;
    }
    window.location.href = PRODUCT_DOWNLOAD_CONFIG[activeTab].buildUrl(
      version,
      fileUrl,
    );
  });

  const handleCopy = useMemoizedFn(() => {
    if (loadingCopy || sureCopy) return;
    const code = currentYakEnv.code;
    setLoadingCopy(true);
    const oInput = document.createElement("input");
    oInput.value = code;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand("Copy");
    oInput.remove();
    setTimeout(() => {
      setLoadingCopy(false);
      setSureCopy(true);
      setTimeout(() => {
        setSureCopy(false);
      }, 1000);
    }, 1000);
  });

  const yakEnvDropdown = (
    <div
      data-home-download-dropdown="yak-env"
      className="min-w-[240px] rounded-[4px] bg-[var(--Colors-Use-Main---Gold-Bg)] py-[8px] shadow-[0_6px_16px_0_rgba(0,0,0,0.08),0_3px_6px_-4px_rgba(0,0,0,0.12),0_9px_28px_8px_rgba(0,0,0,0.05)]"
    >
      {YAK_ENV_OPTIONS.map((item) => {
        const selected = item.key === currentSelectYak;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => {
              setCurrentSelectYak(item.key);
              setYakEnvVisible(false);
              setLoadingCopy(false);
              setSureCopy(false);
            }}
            className={`flex w-full cursor-pointer items-center border-none px-[16px] py-[8px] text-left text-[14px] leading-[20px] font-['PingFang_SC'] ${
              selected
                ? "bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] text-[color:var(--Colors-Use-Main---web-Primary)]"
                : "bg-transparent text-[color:var(--Colors-Use-Neutral-Text-2-Primary)] hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );

  const legacyDropdown = (
    <div
      data-home-download-dropdown="legacy"
      className="min-w-[280px] rounded-[4px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] shadow-[0_6px_16px_0_rgba(0,0,0,0.08),0_3px_6px_-4px_rgba(0,0,0,0.12),0_9px_28px_8px_rgba(0,0,0,0.05)]"
    >
      {LEGACY_DOWNLOAD_ITEMS.map((item) => (
        <button
          key={item.name}
          type="button"
          onClick={() => {
            onDownload(item.url);
            setLegacyVisible(false);
          }}
          className="group flex w-full cursor-pointer items-center justify-between gap-[10px] border-none px-[20px] py-[8px] text-left bg-[var(--Colors-Use-Main---Gold-Bg)] hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)]"
        >
          <div className="min-w-0 flex-1">
            <div className="text-[16px] font-semibold leading-[22px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC']">
              {item.name}
            </div>
            <div className="mt-[2px] text-[12px] font-normal leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] font-['PingFang_SC']">
              {t(item.desc)}（{activeVersion || "-"}）
            </div>
          </div>
          <span className="invisible inline-flex shrink-0 text-[color:var(--Colors-Use-Main---web-Primary)] group-hover:visible">
            {LegacyDownloadIcon}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <section className="relative box-border flex h-full w-full flex-col overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]">
      <DownloadFlowerBg />

      {/* 标题+下载主体：整组垂直居中；合作方跑马灯贴底 */}
      <div
        className={`relative z-[1] min-h-0 w-full overflow-hidden ${HOME_SECTION_CENTER_CLASS}`}
      >
        <div
          className={`mx-auto flex max-h-full w-full flex-col items-center gap-[12px] overflow-hidden ${HOME_CONTAINER_CLASS}`}
        >
          {/* 标题区 */}
          <div className="flex w-full shrink-0 flex-col items-center gap-[12px]">
            <div
              className={`${isEn ? "font-['Crimson_Text'] text-[36px] sm:text-[56px]" : "font-['Noto_Serif_SC'] text-[28px] sm:text-[48px]"} font-medium leading-[36px] text-[color:var(--Colors-Neutral-100)] sm:leading-[64px]`}
            >
              {t("HomeDownload.title")}
            </div>

            {/* Tab：小屏未选中仅图标，大屏显示文案 */}
            <div className="flex rounded-[8px] bg-[var(--Colors-Use-Main---Gold-Focus)] p-[4px] mb-[40px]">
              {TABS.map((tab) => {
                const selected = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    aria-label={tab.label}
                    className={`flex cursor-pointer items-center gap-[10px] rounded-[4px] border-none px-[10px] py-[6px] transition-colors duration-200 ${
                      selected
                        ? "bg-[var(--Colors-Use-Basic-Background)] text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                        : "bg-transparent text-[color:var(--Colors-Use-Neutral-Text-2-Primary)] hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)]"
                    }`}
                  >
                    <div className="flex items-center gap-[6px] font-['PingFang_SC'] text-[14px] font-normal leading-[20px] tracking-[0.1px]">
                      <span
                        className="inline-flex"
                        style={{
                          color: selected
                            ? TAB_ACCENT[tab.key]
                            : "var(--Colors-Use-Neutral-Text-3-Secondary)",
                        }}
                      >
                        {tab.icon}
                      </span>
                      <span
                        className={selected ? "inline" : "hidden sm:inline"}
                      >
                        {tab.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 产品区 */}
          <div className="flex min-h-0 w-full flex-col items-center gap-[12px] overflow-hidden">
            {/* Logo：品牌标铺满 48×48；单色标用强调色底 + 36×36 白色图标 */}
            <div
              className="flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[48px]"
              style={
                activeProduct.brandIcon
                  ? undefined
                  : { backgroundColor: activeAccent }
              }
            >
              {activeProduct.brandIcon ? (
                <span className="inline-flex h-[48px] w-[48px] items-center justify-center [&_svg]:h-[48px] [&_svg]:w-[48px]">
                  {activeProduct.brandIcon}
                </span>
              ) : (
                <span className="inline-flex h-[36px] w-[36px] items-center justify-center text-[color:var(--Colors-Use-Basic-White)] [&_svg]:h-[36px] [&_svg]:w-[36px]">
                  {activeProduct.icon}
                </span>
              )}
            </div>

            {/* 产品描述 */}
            <div
              className={`text-center ${isEn ? "font-['Crimson_Text'] text-[24px] sm:text-[32px]" : "font-['Noto_Serif_SC'] text-[16px] sm:text-[24px]"} font-medium leading-[24px] sm:leading-[32px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:whitespace-nowrap`}
            >
              <span style={{ color: activeAccent }}>/</span>
              &nbsp;{t(activeProduct.description)}&nbsp;
              <span style={{ color: activeAccent }}>/</span>
            </div>

            {activeTab === "yaklang" ? (
              <>
                {/* 命令行安装块：小屏上下结构，大屏固定 650px 左右结构 */}
                <div className="mx-auto flex w-full flex-col items-stretch overflow-hidden rounded-[8px] border-[1px] border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] sm:w-[650px] sm:flex-row sm:items-center sm:gap-[12px] sm:p-[4px]">
                  <Dropdown
                    open={yakEnvVisible}
                    onOpenChange={setYakEnvVisible}
                    trigger={["click"]}
                    placement="bottomLeft"
                    destroyOnHidden
                    getPopupContainer={() => document.body}
                    popupRender={() => yakEnvDropdown}
                  >
                    <button
                      type="button"
                      data-home-download-trigger="yak-env"
                      className="flex w-full sm:w-auto shrink-0 items-center justify-center gap-[4px] px-[16px] py-[10px] sm:py-[8px] rounded-none sm:rounded-[4px] bg-[var(--Colors-Neutral-100)] border-none cursor-pointer text-[color:var(--Colors-Use-Neutral-Bg)]"
                    >
                      <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] font-['PingFang_SC'] whitespace-nowrap">
                        {t("HomeDownload.yakEnv.setup")}
                      </span>
                      <span
                        className={`inline-flex transition-transform duration-200 ${
                          yakEnvVisible ? "rotate-180" : ""
                        }`}
                      >
                        {ChevronDownIcon}
                      </span>
                    </button>
                  </Dropdown>

                  <div className="relative flex min-w-0 flex-1 items-start sm:items-center gap-[8px] px-[12px] py-[12px] pb-[40px] sm:px-0 sm:py-0 sm:pb-0 sm:pr-[4px]">
                    <code
                      className="min-w-0 flex-1 overflow-hidden whitespace-normal sm:whitespace-nowrap break-all sm:break-normal sm:text-ellipsis text-[13px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] font-['SF_Mono','Menlo','Consolas',monospace] bg-transparent border-0"
                      title={currentYakEnv.code}
                      dangerouslySetInnerHTML={{ __html: currentYakCodeHtml }}
                    />
                    <button
                      type="button"
                      onClick={handleCopy}
                      title={t("HomeDownload.yakEnv.copyTitle")}
                      className="absolute sm:static right-[12px] bottom-[12px] sm:right-auto sm:bottom-auto flex shrink-0 items-center justify-center w-[20px] h-[20px] p-0 rounded-[4px] bg-transparent border-none cursor-pointer text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] hover:text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                    >
                      {loadingCopy ? (
                        <span className="inline-flex animate-spin text-[16px]">
                          {LoadingIcon}
                        </span>
                      ) : sureCopy ? (
                        <span className="inline-flex text-[16px] text-[color:var(--Colors-Use-Main---web-Primary)] [&_path]:fill-current">
                          {SureIcon}
                        </span>
                      ) : (
                        <span className="inline-flex text-[16px]">
                          {CopyIcon}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[12px]">
                  <a
                    href="/docs/startup/"
                    className="flex items-center gap-[4px] py-[3px] border-none bg-transparent cursor-pointer text-[12px] leading-[14px] tracking-[0.5px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] underline font-['PingFang_SC'] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                  >
                    {t("HomeDownload.yakEnv.tutorial")}
                  </a>
                  <div className="w-[1px] h-[12px] bg-[var(--Colors-Use-Main---Gold-Focus)]" />
                  <a
                    href={LEGACY_RELEASE_URL.yaklang}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[4px] py-[3px] border-none bg-transparent cursor-pointer text-[12px] leading-[14px] tracking-[0.5px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] underline font-['PingFang_SC'] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                  >
                    {t("HomeDownload.yakEnv.downloadOld")}
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* 下载区：小屏列表卡 / 大屏固定 560px 三列表格 */}
                <div className="mx-auto w-full max-w-full rounded-[8px] border-[1px] border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] overflow-hidden sm:w-[560px]">
                  {/* 表头 */}
                  <div className="flex bg-[var(--Colors-Use-Main---Gold-Bg-Hover)]">
                    <div className="flex items-center gap-[8px] px-[16px] sm:px-[20px] py-[12px] sm:py-[10px] sm:h-[40px] flex-1 text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC'] sm:border-0 sm:border-solid sm:border-r sm:border-r-[var(--Colors-Use-Main---Gold-Focus)]">
                      {t("HomeDownload.table.package")}{" "}
                      <span className="text-[11px] tracking-[0.5px] leading-[14px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]">
                        {t("HomeDownload.table.latestVersion", {
                          version: activeVersion || "-",
                        })}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center px-[12px] py-[10px] h-[40px] w-[120px] text-[14px] leading-[20px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC']">
                      {t("HomeDownload.table.size")}
                    </div>
                    <div className="hidden sm:flex items-center justify-center px-[12px] py-[10px] h-[40px] w-[72px] text-[14px] leading-[20px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC'] border-0 border-solid border-l border-l-[var(--Colors-Use-Main---Gold-Focus)]">
                      {t("HomeDownload.table.download")}
                    </div>
                  </div>

                  {/* 下载行 */}
                  {DOWNLOAD_PLATFORMS.map((row) => (
                    <div
                      key={row.key}
                      className="flex items-center border-0 border-solid border-t border-[var(--Colors-Use-Main---Gold-Focus)] min-h-[56px] sm:min-h-0 sm:h-[48px] hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] cursor-pointer group"
                      onClick={() => onDownload(row.url)}
                    >
                      {/* 小屏：图标 + 名称/大小纵向；大屏：安装包列 */}
                      <div className="flex items-center gap-[10px] sm:gap-[8px] px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] flex-1 min-w-0 sm:border-0 sm:border-solid sm:border-r sm:border-r-[var(--Colors-Use-Main---Gold-Focus)]">
                        <PlatformOsIcon os={row.osIcon} />
                        <div className="min-w-0 flex flex-col sm:flex-row sm:items-center gap-[2px] sm:gap-0">
                          <span className="text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[24px] tracking-[0.0094em] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] font-['PingFang_SC']">
                            {row.os}
                            {row.arch && (
                              <span className="text-[12px] font-medium leading-[16px] tracking-[0.0417em] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] ml-[4px]">
                                {row.arch}
                              </span>
                            )}
                          </span>
                          <span className="sm:hidden text-[12px] leading-[16px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] font-['PingFang_SC']">
                            {activeSizes[row.key] != null
                              ? `${activeSizes[row.key]} MB`
                              : "-"}
                          </span>
                        </div>
                      </div>

                      {/* 大屏：大小列 */}
                      <div className="hidden sm:flex items-center px-[12px] py-[15px] w-[120px] text-[14px] leading-[20px] tracking-[0.0071em] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] font-['PingFang_SC']">
                        {activeSizes[row.key] != null
                          ? `${activeSizes[row.key]} MB`
                          : "-"}
                      </div>

                      {/* 下载按钮 */}
                      <div className="flex items-center justify-center px-[12px] sm:py-[18px] w-[48px] sm:w-[72px] sm:border-0 sm:border-solid sm:border-l sm:border-l-[var(--Colors-Use-Main---Gold-Focus)]">
                        <button
                          type="button"
                          className="flex items-center justify-center w-[28px] h-[28px] border-none bg-transparent p-0 text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] group-hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                        >
                          {DownloadIcon}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 底部链接 */}
                <div className="flex items-center justify-center gap-[12px] mt-[4px]">
                  <Dropdown
                    open={legacyVisible}
                    onOpenChange={(open) => {
                      if (!isDownloadableTab(activeTab)) return;
                      setLegacyVisible(open);
                    }}
                    trigger={["click"]}
                    placement="bottom"
                    destroyOnHidden
                    getPopupContainer={() => document.body}
                    popupRender={() => legacyDropdown}
                  >
                    <button
                      type="button"
                      data-home-download-trigger="legacy"
                      disabled={!isDownloadableTab(activeTab)}
                      className="flex items-center gap-[4px] py-[3px] border-none bg-transparent cursor-pointer text-[12px] leading-[14px] tracking-[0.5px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] underline font-['PingFang_SC'] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                    >
                      {t("HomeDownload.footer.legacy")}
                      <span
                        className={`inline-flex transition-transform duration-200 ${
                          legacyVisible ? "rotate-180" : ""
                        }`}
                      >
                        {PlusIcon}
                      </span>
                    </button>
                  </Dropdown>
                  <div className="w-[1px] h-[12px] bg-[var(--Colors-Use-Main---Gold-Focus)]" />
                  <a
                    href={LEGACY_RELEASE_URL[activeTab]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[4px] py-[3px] border-none bg-transparent cursor-pointer text-[12px] leading-[14px] tracking-[0.5px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] underline font-['PingFang_SC'] hover:text-[color:var(--Colors-Use-Main---web-Primary)]"
                  >
                    {t("HomeDownload.footer.oldRelease")}
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <HomePartnerMarquee />
    </section>
  );
};

export default HomeDownload;
