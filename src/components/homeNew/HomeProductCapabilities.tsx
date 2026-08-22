import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  irifyIcon,
  irifyWordmark,
  memfitIcon,
  memfitWordmark,
  yakitIcon,
  yakitLabelMark,
  yakIcon,
  yaklangLabelMark,
  yaklangWordmark,
  yakitWordmark,
} from "./productIcons";
import {
  HOME_CONTAINER_CLASS,
  HOME_SECTION_CENTER_CLASS,
} from "./homeSectionLayout";
import ClickStack, { ClickStackHandle } from "./ClickStack";
import { useLoadWhenHomeSlide } from "./useLoadWhenHomeSlide";

// =========================================================
// 数据模型
// =========================================================
type ProductKey = "yaklang" | "yakit" | "memfit" | "irify";
type MediaKind = "video" | "image";

type Feature = {
  title: string;
  desc: string;
};

type MediaItem = {
  name: string;
  src: string;
};

type Product = {
  key: ProductKey;
  label: string;
  logo: ReactElement;
  /** 完整字标（有则替代圆形图标+文字） */
  wordmark?: ReactElement;
  /** 标题字标（保留圆形图标，替换文字） */
  labelMark?: ReactElement;
  /** 标题字标高度类名 */
  labelMarkClassName?: string;
  description: string;
  features: Feature[];
  /** 右侧图标+标题品牌色 */
  accent: string;
  /** 视频/图片舞台区背景 */
  bg: string;
  /** yaklang / yakit：视频堆叠；memfit / irify：图片堆叠 */
  mediaKind: MediaKind;
  media: MediaItem[];
};

type ProductBase = Omit<Product, "description" | "features" | "media"> & {
  description: string;
  featureKeys: { titleKey: string; descKey: string }[];
  mediaSrc: string[];
};

const getProductBase = (t: (key: string) => string): ProductBase[] => [
  {
    key: "yakit",
    label: "Yakit",
    logo: yakitIcon,
    wordmark: yakitWordmark,
    labelMark: yakitLabelMark,
    description: "HomeProductCapabilities.products.yakit.description",
    featureKeys: [
      {
        titleKey: "HomeProductCapabilities.products.yakit.features.0.title",
        descKey: "HomeProductCapabilities.products.yakit.features.0.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.yakit.features.1.title",
        descKey: "HomeProductCapabilities.products.yakit.features.1.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.yakit.features.2.title",
        descKey: "HomeProductCapabilities.products.yakit.features.2.desc",
      },
    ],
    mediaSrc: [
      "img/newHome/Yakit MITM - Web Fuzzer 快速演示.mp4",
      "img/newHome/插件使用.mp4",
    ],
    accent: "#F28C45",
    bg: "img/home-optimized/products/yakit_bg.webp",
    mediaKind: "video",
  },
  {
    key: "yaklang",
    label: "Yaklang",
    logo: yakIcon,
    wordmark: yaklangWordmark,
    labelMark: yaklangLabelMark,
    labelMarkClassName: "h-[12px] sm:h-[14px]",
    description: "HomeProductCapabilities.products.yaklang.description",
    featureKeys: [
      {
        titleKey: "HomeProductCapabilities.products.yaklang.features.0.title",
        descKey: "HomeProductCapabilities.products.yaklang.features.0.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.yaklang.features.1.title",
        descKey: "HomeProductCapabilities.products.yaklang.features.1.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.yaklang.features.2.title",
        descKey: "HomeProductCapabilities.products.yaklang.features.2.desc",
      },
    ],
    mediaSrc: [
      "img/newHome/YakRunner代码提示补全执行.mp4",
      "img/newHome/Yaklang 使用AI进行代码修改和编辑.mp4",
    ],
    accent: "#FF7B00",
    bg: "img/home-optimized/products/yaklang_bg.webp",
    mediaKind: "video",
  },
  {
    key: "memfit",
    label: "Memfit",
    logo: memfitIcon,
    wordmark: memfitWordmark,
    description: "HomeProductCapabilities.products.memfit.description",
    featureKeys: [
      {
        titleKey: "HomeProductCapabilities.products.memfit.features.0.title",
        descKey: "HomeProductCapabilities.products.memfit.features.0.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.memfit.features.1.title",
        descKey: "HomeProductCapabilities.products.memfit.features.1.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.memfit.features.2.title",
        descKey: "HomeProductCapabilities.products.memfit.features.2.desc",
      },
    ],
    mediaSrc: [
      "img/home-optimized/products/memft1.webp",
      "img/home-optimized/products/memft2.webp",
      "img/home-optimized/products/memfit3.webp",
    ],
    accent: "var(--Colors-Use-Main---memfit-Primary)",
    bg: "img/home-optimized/products/memfit_bg.webp",
    mediaKind: "image",
  },
  {
    key: "irify",
    label: "IRify",
    logo: irifyIcon,
    wordmark: irifyWordmark,
    description: "HomeProductCapabilities.products.irify.description",
    featureKeys: [
      {
        titleKey: "HomeProductCapabilities.products.irify.features.0.title",
        descKey: "HomeProductCapabilities.products.irify.features.0.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.irify.features.1.title",
        descKey: "HomeProductCapabilities.products.irify.features.1.desc",
      },
      {
        titleKey: "HomeProductCapabilities.products.irify.features.2.title",
        descKey: "HomeProductCapabilities.products.irify.features.2.desc",
      },
    ],
    mediaSrc: [
      "img/home-optimized/products/irify1.webp",
      "img/home-optimized/products/irify2.webp",
      "img/home-optimized/products/irify3.webp",
    ],
    accent: "#6A4AA0",
    bg: "img/home-optimized/products/irify_bg.webp",
    mediaKind: "image",
  },
];

const resolveProducts = (t: (key: string) => string): Product[] =>
  getProductBase(t).map((p) => ({
    ...p,
    description: t(p.description),
    features: p.featureKeys.map(({ titleKey, descKey }, i) => ({
      title: t(titleKey),
      desc: t(descKey),
    })),
    media: p.mediaSrc.map((src, i) => ({
      name: t(`HomeProductCapabilities.products.${p.key}.media.${i}`),
      src,
    })),
  }));

const padIndex = (n: number) => String(n).padStart(2, "0");

// =========================================================
// 媒体卡片
// =========================================================
const VideoCard: React.FC<{
  src: string;
  isFront: boolean;
  shouldLoad: boolean;
}> = ({ src, isFront, shouldLoad }) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (shouldLoad && isFront) {
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // 自动播放被浏览器策略阻止，静默忽略
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isFront, shouldLoad]);

  return (
    <video
      ref={ref}
      className="block h-full w-full select-none bg-black object-cover object-top"
      src={shouldLoad && isFront ? src : undefined}
      controls={false}
      playsInline
      preload={shouldLoad && isFront ? "metadata" : "none"}
      muted
      loop
      data-no-stack-cycle={isFront ? "" : undefined}
    />
  );
};

const ImageCard: React.FC<{
  src: string;
  alt: string;
  isFront: boolean;
  shouldLoad: boolean;
}> = ({ src, alt, isFront, shouldLoad }) => (
  <img
    src={shouldLoad && isFront ? src : undefined}
    alt={alt}
    loading="lazy"
    decoding="async"
    fetchPriority="low"
    className="pointer-events-none block h-full w-full select-none object-cover object-center"
    draggable={false}
  />
);

/** 拖拽/滑动切换阈值（px） */
const SWIPE_THRESHOLD = 40;

function useSwipeNext(onSwipe: () => void) {
  const startRef = useRef({ x: 0, y: 0, active: false });
  const onSwipeRef = useRef(onSwipe);
  onSwipeRef.current = onSwipe;

  // --- Pointer 事件（PC 端鼠标 / 触控板） ---
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    startRef.current = { x: e.clientX, y: e.clientY, active: true };
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!startRef.current.active) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      e.preventDefault();
    }
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!startRef.current.active) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    startRef.current.active = false;
    if (Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      e.stopPropagation();
      onSwipeRef.current();
    }
  }, []);

  // --- 原生 Touch 事件（移动端） ---
  // React 合成 pointermove 在移动端可能被浏览器吞掉或 passive 无法 preventDefault，
  // 用原生 touchmove + { passive: false } 确保水平滑动时阻止页面滚动。
  const touchWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = touchWrapperRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      startRef.current = { x: t.clientX, y: t.clientY, active: true };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!startRef.current.active) return;
      const t = e.touches[0];
      if (!t) return;
      const dx = t.clientX - startRef.current.x;
      const dy = t.clientY - startRef.current.y;
      // 水平滑动占主导时阻止默认滚动
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!startRef.current.active) return;
      const t = e.changedTouches[0];
      startRef.current.active = false;
      if (!t) return;
      const dx = t.clientX - startRef.current.x;
      const dy = t.clientY - startRef.current.y;
      if (Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        onSwipeRef.current();
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return {
    ref: touchWrapperRef,
    onPointerDownCapture: onPointerDown,
    onPointerMoveCapture: onPointerMove,
    onPointerUpCapture: onPointerUp,
  };
}

// =========================================================
const HomeProductCapabilities: React.FC<{
  /** 自由滚动（非翻页）：640px 以下纵向；sm+ 左右 3:2、左侧撑满、右侧间距收紧 */
  freeScroll?: boolean;
}> = ({ freeScroll = false }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const PRODUCTS = useMemo(() => resolveProducts(t), [t]);
  const [active, setActive] = useState<ProductKey>("yakit");
  const [mediaIndex, setMediaIndex] = useState(0);
  const stackRef = useRef<ClickStackHandle>(null);
  const [stackSpread, setStackSpread] = useState(25);
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldLoadMedia = useLoadWhenHomeSlide(2);

  useEffect(() => {
    const smallMq = window.matchMedia("(max-width: 767px)");
    const largeMq = window.matchMedia("(min-width: 1280px)");
    const sync = () =>
      setStackSpread(largeMq.matches ? 35 : smallMq.matches ? 25 : 30);
    sync();
    smallMq.addEventListener("change", sync);
    largeMq.addEventListener("change", sync);
    return () => {
      smallMq.removeEventListener("change", sync);
      largeMq.removeEventListener("change", sync);
    };
  }, []);

  const productBase = PRODUCTS.find((p) => p.key === active) ?? PRODUCTS[0];
  const media = productBase.media;
  const total = media.length;
  const current = media[mediaIndex] ?? media[0];
  const progressWidth =
    total > 0 ? `${((mediaIndex + 1) / total) * 100}%` : "0%";
  const isVideo = productBase.mediaKind === "video";
  const stageBg = useBaseUrl(productBase.bg);

  useEffect(() => {
    setMediaIndex(0);
  }, [active]);

  const goNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (total <= 1) return;
      stackRef.current?.cycle();
    },
    [total],
  );

  const stackItems = media.map((item, index) =>
    isVideo ? (
      <VideoCard
        key={`${productBase.key}-v-${item.src}-${index}`}
        src={item.src}
        isFront={index === mediaIndex}
        shouldLoad={shouldLoadMedia}
      />
    ) : (
      <ImageCard
        key={`${productBase.key}-i-${item.src}-${index}`}
        src={item.src}
        alt={item.name}
        isFront={index === mediaIndex}
        shouldLoad={shouldLoadMedia}
      />
    ),
  );

  const swipe = useSwipeNext(goNext);

  return (
    <section
      ref={sectionRef}
      className="box-border flex h-full w-full flex-col overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]"
    >
      {/* 与 HomeDownload 一致：外层居中区 + 内层版心 max-h-full，避免翻页屏被 flex-1 拉得过高 */}
      <div
        className={`relative z-[1] min-h-0 w-full overflow-hidden ${HOME_SECTION_CENTER_CLASS}`}
      >
        <div
          className={`mx-auto flex max-h-full w-full flex-col overflow-hidden ${HOME_CONTAINER_CLASS}`}
        >
          <div className="mb-[40px] flex shrink-0 flex-col items-center gap-[4px] sm:mb-[16px] sm:gap-[8px]">
            <div
              className={`${isEn ? "font-['Crimson_Text'] text-[32px] sm:text-[clamp(36px,5vh,56px)]" : "font-['Noto_Serif_SC_Home'] text-[28px] sm:text-[clamp(32px,4.5vh,48px)]"} font-medium leading-[36px] text-[color:var(--Colors-Neutral-100)] sm:leading-[clamp(40px,6vh,64px)]`}
            >
              {t("HomeProductCapabilities.title")}
            </div>
            <div className="max-w-full text-center font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-2-Primary)] sm:text-[clamp(16px,2vh,20px)] sm:leading-[clamp(22px,2.5vh,28px)]">
              {t("HomeProductCapabilities.subtitle")}
            </div>
          </div>

            <div
              className={`mx-auto flex min-h-0 w-full max-w-[680px] max-h-full overflow-hidden rounded-[8px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] sm:max-w-[calc(100vw-32px)] min-[756px]:max-w-[100%]${
                freeScroll
                  ? " flex-col sm:flex-row sm:items-stretch"
                  : " flex-col min-[756px]:flex-row min-[756px]:items-stretch"
              }`}
            >
            <div
              className={`flex min-h-0 min-w-0 flex-col${
                freeScroll
                  ? " flex-1 sm:flex-[3] sm:basis-0 sm:self-stretch"
                  : " flex-1 min-[756px]:flex-[3] min-[756px]:basis-0 min-[756px]:self-stretch"
              }`}
            >
              <div
                className="flex h-[40px] w-full min-w-0 shrink-0 items-stretch border-0 border-b border-solid border-b-[var(--Colors-Use-Main---Gold-Focus)] sm:h-[44px]"
                role="tablist"
              >
                <div
                  className="hidden md:flex shrink-0 items-center gap-[10px] border-0 border-r border-solid border-r-[var(--Colors-Use-Main---Gold-Focus)] px-[16px]"
                  aria-hidden
                >
                  <span className="block h-[12px] w-[12px] rounded-full border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-transparent" />
                  <span className="block h-[12px] w-[12px] rounded-full border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-transparent" />
                  <span className="block h-[12px] w-[12px] rounded-full border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-transparent" />
                </div>

                <div className="grid min-w-0 flex-1 grid-cols-4">
                  {PRODUCTS.map((p) => {
                    const isActive = p.key === active;
                    return (
                      <button
                        key={p.key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActive(p.key)}
                        className={`flex min-w-0 cursor-pointer items-center justify-center border-0 border-r border-solid border-r-[var(--Colors-Use-Main---Gold-Focus)] font-['PingFang_SC'] text-[13px] leading-[18px] tracking-[0.15px] sm:text-[15px] sm:leading-[22px] lg:text-[16px] lg:leading-[24px] transition-colors duration-200 last:border-r-0 px-[4px] sm:px-[10px] lg:px-[20px] ${
                          isActive
                            ? "bg-[var(--Colors-Neutral-100)] text-[color:var(--Colors-Use-Neutral-Bg)]"
                            : "bg-[var(--Colors-Use-Main---Gold-Bg)] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)]"
                        }`}
                      >
                        <span className="max-w-full truncate">{p.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 堆叠舞台：自由滚动 sm+ / 翻页 min-[756px]+ 左侧撑满；窄屏保持纵向 min-h */}
              <div
                className={`relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-[16px] py-[24px] pr-[40px] md:px-[40px] md:py-[40px] md:pr-[76px] lg:py-[32px] xl:py-[48px]${
                  freeScroll
                    ? " min-h-[200px] sm:min-h-0"
                    : " min-h-[200px] sm:min-h-[240px] min-[756px]:min-h-0"
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 transition-[background] duration-300"
                  style={{
                    background: shouldLoadMedia
                      ? `url(${stageBg}) lightgray 50% / cover no-repeat`
                      : "var(--Colors-Use-Main---Gold-Focus)",
                    opacity: 0.6,
                  }}
                  aria-hidden
                />

                {total === 0 ? (
                  <div className="relative z-[1] flex aspect-[3/2] h-auto max-h-full w-full max-w-full shrink-0 items-center justify-center rounded-[8px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] font-['PingFang_SC'] text-[14px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]">
                    {t("HomeProductCapabilities.noDemo")}
                  </div>
                ) : (
                  <div
                    {...swipe}
                    className="relative z-[1] aspect-[3/2] h-auto max-h-full w-full max-w-full shrink-0 cursor-grab active:cursor-grabbing"
                    aria-label={`${productBase.label} ${isVideo ? t("HomeProductCapabilities.demoVideo") : t("HomeProductCapabilities.demoScreenshot")}`}
                  >
                    <ClickStack
                      key={active}
                      ref={stackRef}
                      items={stackItems}
                      spreadX={stackSpread}
                      spreadY={-stackSpread}
                      duration={0.35}
                      ease="power3.out"
                      borderRadius={8}
                      visibleCount={Math.min(3, total)}
                      depthScale={0.06}
                      cardColor="var(--Colors-Use-Main---Gold-Focus)"
                      cardClassName="border border-solid border-[var(--Colors-Use-Main---Gold-Border)]"
                      onFrontChange={(idx) => {
                        setMediaIndex(idx);
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex h-[40px] shrink-0 items-center justify-between gap-[16px] border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)] px-[16px] sm:h-[44px] sm:px-[20px]">
                <div className="flex min-w-0 items-center gap-[8px]">
                  <span className="shrink-0 whitespace-nowrap font-['JetBrains_Mono'] text-[14px] leading-[20px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Disable)]">
                    <span>[</span>{" "}
                    <span className="mr-[12px] ml-[16px] text-[color:var(--Colors-Use-Main---web-Primary)]">
                      {padIndex(total === 0 ? 0 : mediaIndex + 1)}
                    </span>{" "}
                    /{" "}
                    <span className="mr-[12px] ml-[16px]">
                      {padIndex(total)}
                    </span>{" "}
                    <span>]</span>
                  </span>
                  <span
                    className="shrink-0 font-['PingFang_SC'] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]"
                    aria-hidden
                  >
                    ·
                  </span>
                  <span className="truncate font-['PingFang_SC'] text-[14px] leading-[20px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-2-Primary)]">
                    {current?.name ?? "—"}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-[10px]">
                  <div
                    className="relative h-[12px] w-[56px] overflow-hidden rounded-full border border-solid border-[var(--Colors-Use-Main---Gold-Border)] bg-[var(--Colors-Use-Main---Gold-Bg)]"
                    role="progressbar"
                    aria-valuemin={1}
                    aria-valuemax={Math.max(total, 1)}
                    aria-valuenow={total === 0 ? 0 : mediaIndex + 1}
                    aria-label={t("HomeProductCapabilities.itemInfo", {
                      current: mediaIndex + 1,
                      total,
                    })}
                  >
                    <div
                      className="absolute bottom-0 left-0 top-0 rounded-full bg-[var(--Colors-Use-Main---Gold-Focus)] transition-[width] duration-300 ease-out"
                      style={{ width: progressWidth }}
                    />
                  </div>

                  <button
                    type="button"
                    aria-label={
                      isVideo
                        ? t("HomeProductCapabilities.nextVideo")
                        : t("HomeProductCapabilities.nextImage")
                    }
                    title={
                      isVideo
                        ? t("HomeProductCapabilities.nextVideoTitle")
                        : t("HomeProductCapabilities.nextImageTitle")
                    }
                    disabled={total <= 1}
                    onClick={goNext}
                    className="inline-flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent p-0 transition-opacity duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="block h-[12px] w-[12px] rounded-full border border-solid border-[var(--Colors-Use-Main---Gold-Border)] hover:bg-[var(--Colors-Use-Main---Gold-Focus)]" />
                  </button>
                </div>
              </div>
            </div>

            <aside
              className={`flex w-full flex-col overflow-hidden border-0 border-solid p-[20px] lg:w-auto lg:max-w-none lg:p-[40px]${
                freeScroll
                  ? " max-h-[36%] shrink-0 justify-start border-t border-t-[var(--Colors-Use-Main---Gold-Focus)] sm:max-h-none sm:min-w-0 sm:shrink sm:flex-[2] sm:basis-0 sm:justify-between sm:border-l sm:border-t-0 sm:border-l-[var(--Colors-Use-Main---Gold-Focus)] sm:max-lg:p-[16px]"
                  : " max-h-[36%] shrink-0 justify-start border-t border-t-[var(--Colors-Use-Main---Gold-Focus)] min-[756px]:max-h-none min-[756px]:min-w-0 min-[756px]:shrink min-[756px]:flex-[2] min-[756px]:basis-0 min-[756px]:justify-between min-[756px]:border-l min-[756px]:border-t-0 min-[756px]:border-l-[var(--Colors-Use-Main---Gold-Focus)]"
              }`}
            >
              <div
                className={`flex min-h-0 flex-col items-start overflow-visible${
                  freeScroll
                    ? " gap-[6px] sm:gap-[8px]"
                    : " gap-[8px] sm:gap-[10px]"
                }`}
              >
                <div className="flex items-center gap-[10px]">
                  {productBase.wordmark ? (
                    <span
                      className="inline-flex h-[28px] w-auto max-w-full items-center sm:h-[32px] [&_svg]:h-full [&_svg]:w-auto"
                      aria-label={productBase.label}
                    >
                      {productBase.wordmark}
                    </span>
                  ) : (
                    <>
                      <div
                        className="flex h-[28px] w-[28px] shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-[32px] sm:w-[32px]"
                        style={{ backgroundColor: productBase.accent }}
                        aria-hidden
                      >
                        <span className="inline-flex text-[color:var(--Colors-Use-Basic-White)] [&_svg]:h-[16px] [&_svg]:w-[16px] sm:[&_svg]:h-[18px] sm:[&_svg]:w-[18px]">
                          {productBase.logo}
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center font-['PingFang_SC'] text-[18px] font-semibold leading-[26px] sm:text-[22px] sm:leading-[30px]"
                        style={
                          productBase.labelMark
                            ? undefined
                            : { color: productBase.accent }
                        }
                      >
                        {productBase.labelMark ? (
                          <span
                            className={`inline-flex w-auto items-center [&_svg]:h-full [&_svg]:w-auto ${
                              productBase.labelMarkClassName ??
                              "h-[13px] sm:h-[16px]"
                            }`}
                          >
                            {productBase.labelMark}
                          </span>
                        ) : (
                          productBase.label
                        )}
                      </span>
                    </>
                  )}
                </div>
                <p className="m-0 max-w-full overflow-visible text-left font-['PingFang_SC'] text-[13px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] sm:text-[15px] sm:leading-[22px]">
                  {t("HomeProductCapabilities.brandPrefix")}
                  {productBase.description}
                </p>
              </div>

              <div
                className={`flex min-h-0 shrink flex-col overflow-visible text-left${
                  freeScroll
                    ? " mt-[20px] gap-[16px] min-[756px]:mt-[8px] lg:mt-[12px] lg:gap-[24px] xl:mt-[16px] xl:gap-[40px]"
                    : " mt-[40px] gap-[40px] min-[756px]:mt-[12px] xl:mt-[16px]"
                }`}
              >
                <h3
                  className={`m-0 shrink-0 ${isEn ? "font-['Crimson_Text'] text-[28px] sm:text-[32px] 2xl:text-[36px]" : "font-['Noto_Serif_SC_Home'] text-[20px] sm:text-[24px] 2xl:text-[28px]"} font-medium leading-[26px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:leading-[32px] 2xl:leading-[36px]`}
                >
                  {t("HomeProductCapabilities.coreFeatures")}
                </h3>
                <div
                  className={`flex min-h-0 flex-col overflow-visible${
                    freeScroll ? " gap-[12px] lg:gap-[20px]" : " gap-[20px]"
                  }`}
                >
                  {productBase.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="flex shrink-0 flex-col gap-[2px]"
                    >
                      <div className="font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:text-[16px] sm:leading-[22px]">
                        {feat.title}
                      </div>
                      <div className="overflow-visible font-['PingFang_SC'] text-[12px] leading-[16px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] sm:text-[13px] sm:leading-[18px]">
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductCapabilities;
