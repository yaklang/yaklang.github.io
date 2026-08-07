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
} from "./productIcons";
import { HOME_SECTION_CENTER_CLASS } from "./homeSectionLayout";
import ClickStack, { ClickStackHandle } from "./ClickStack";

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
    bg: "img/newHome/yakit_bg.jpg",
    mediaKind: "video",
  },
  {
    key: "yaklang",
    label: "Yaklang",
    logo: yakIcon,
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
    bg: "img/newHome/yaklang_bg.jpg",
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
      "img/newHome/memft1.png",
      "img/newHome/memft2.png",
      "img/newHome/memfit3.png",
    ],
    accent: "var(--Colors-Use-Main---memfit-Primary)",
    bg: "img/newHome/memfit_bg.jpg",
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
      "img/newHome/irify1.png",
      "img/newHome/irify2.png",
      "img/newHome/irify3.png",
    ],
    accent: "#6A4AA0",
    bg: "img/newHome/irify_bg.jpg",
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

/** 无 poster 时用 #t=0.001 让浏览器渲染首帧占位 */
const videoSrcWithFirstFrame = (src: string) =>
  src.includes("#") ? src : `${src}#t=0.001`;

// =========================================================
// 媒体卡片
// =========================================================
const VideoCard: React.FC<{
  src: string;
  isFront: boolean;
}> = ({ src, isFront }) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isFront && ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  }, [isFront]);

  return (
    <video
      ref={ref}
      className="block h-full w-full select-none bg-black object-cover object-top"
      src={videoSrcWithFirstFrame(src)}
      controls={isFront}
      playsInline
      preload="metadata"
      data-no-stack-cycle={isFront ? "" : undefined}
    />
  );
};

const ImageCard: React.FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="pointer-events-none block h-full w-full select-none object-cover object-center"
    draggable={false}
  />
);

// =========================================================
// 组件
// =========================================================
const HomeProductCapabilities: React.FC = () => {
  const { t } = useTranslation();
  const PRODUCTS = useMemo(() => resolveProducts(t), [t]);
  const [active, setActive] = useState<ProductKey>("yakit");
  const [mediaIndex, setMediaIndex] = useState(0);
  const stackRef = useRef<ClickStackHandle>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsSmallScreen(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
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
      />
    ) : (
      <ImageCard
        key={`${productBase.key}-i-${item.src}-${index}`}
        src={item.src}
        alt={item.name}
      />
    ),
  );

  return (
    <section className="box-border flex h-full w-full flex-col overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)] px-[16px] sm:px-[24px] lg:px-[32px]">
      <div
        className={`mx-auto w-full max-w-[1280px] overflow-hidden ${HOME_SECTION_CENTER_CLASS}`}
      >
        <div className="flex max-h-full min-h-0 w-full flex-col overflow-hidden text-center">
          <div className="mb-[12px] flex shrink-0 flex-col items-center gap-[4px] sm:mb-[24px] sm:gap-[8px]">
            <div className="font-['Noto_Serif_SC'] text-[32px] font-medium leading-[40px] text-[color:var(--Colors-Neutral-100)] sm:text-[48px] sm:leading-[64px]">
              {t("HomeProductCapabilities.title")}
            </div>
            <div className="max-w-full text-left font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-2-Primary)] sm:text-[20px] sm:leading-[28px]">
              {t("HomeProductCapabilities.subtitle")}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[680px] flex-col overflow-hidden rounded-[8px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] sm:max-w-[calc(100vw-80px)] min-[1180px]:max-w-[1280px] min-[1180px]:flex-row">
            <div className="flex min-w-0 flex-1 flex-col">
              <div
                className="flex h-[40px] w-full min-w-0 shrink-0 items-stretch border-0 border-b border-solid border-b-[var(--Colors-Use-Main---Gold-Focus)] sm:h-[44px]"
                role="tablist"
              >
                <div
                  className="hidden min-[1180px]:flex shrink-0 items-center gap-[10px] border-0 border-r border-solid border-r-[var(--Colors-Use-Main---Gold-Focus)] px-[16px]"
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

              {/* 堆叠舞台：视频 / 图片均用 ClickStack */}
              <div className="relative flex items-center justify-center overflow-hidden px-[28px] py-[48px] pr-[64px] pt-[56px] md:px-[40px] md:py-[56px] md:pr-[76px] md:pt-[64px] xl:py-[64px] xl:pt-[72px]">
                <div
                  className="pointer-events-none absolute inset-0 transition-[background] duration-300"
                  style={{
                    background: `url(${stageBg}) lightgray 50% / cover no-repeat`,
                    opacity: 0.6,
                  }}
                  aria-hidden
                />

                {total === 0 ? (
                  <div className="relative z-[1] flex aspect-[16/10] h-[240px] w-auto max-w-full shrink-0 items-center justify-center rounded-[8px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] font-['PingFang_SC'] text-[14px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] sm:h-[300px] md:h-[340px] xl:h-[632px]">
                    {t("HomeProductCapabilities.noDemo")}
                  </div>
                ) : (
                  <div
                    className="relative z-[1] aspect-[16/10] h-[240px] w-auto max-w-full shrink-0 sm:h-[300px] md:h-[340px] xl:h-[632px]"
                    aria-label={`${productBase.label} ${isVideo ? t("HomeProductCapabilities.demoVideo") : t("HomeProductCapabilities.demoScreenshot")}`}
                  >
                    <ClickStack
                      key={active}
                      ref={stackRef}
                      items={stackItems}
                      spreadX={isSmallScreen ? 20 : 40}
                      spreadY={isSmallScreen ? -20 : -40}
                      duration={0.35}
                      ease="power3.out"
                      borderRadius={8}
                      shadowBlur={24}
                      shadowOpacity={0.28}
                      visibleCount={Math.min(3, total)}
                      depthScale={0.06}
                      depthOpacity={0.12}
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

            <aside className="flex max-h-[36%] w-full shrink-0 flex-col justify-between overflow-hidden border-0 border-t border-solid border-t-[var(--Colors-Use-Main---Gold-Focus)] p-[16px] sm:p-[20px] min-[1180px]:max-h-none min-[1180px]:w-[320px] min-[1180px]:max-w-[320px] min-[1180px]:flex-[0_0_320px] min-[1180px]:border-l min-[1180px]:border-t-0 min-[1180px]:border-l-[var(--Colors-Use-Main---Gold-Focus)] min-[1180px]:p-[20px] xl:w-[340px] xl:max-w-[340px] xl:flex-[0_0_340px] xl:p-[24px]">
              <div className="flex min-h-0 flex-col items-start gap-[8px] overflow-hidden sm:gap-[10px]">
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
                <p className="m-0 max-w-full overflow-hidden text-left font-['PingFang_SC'] text-[13px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] sm:text-[15px] sm:leading-[22px] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] min-[1180px]:[-webkit-line-clamp:4]">
                  {productBase.description}
                </p>
              </div>

              <div className="mt-[12px] flex min-h-0 shrink flex-col gap-[10px] overflow-hidden text-left min-[1180px]:mt-[16px] min-[1180px]:gap-[14px] xl:gap-[18px]">
                <h3 className="m-0 shrink-0 font-['Noto_Serif_SC'] text-[20px] font-medium leading-[26px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:text-[24px] sm:leading-[32px] xl:text-[28px] xl:leading-[36px]">
                  {t("HomeProductCapabilities.coreFeatures")}
                </h3>
                <div className="flex min-h-0 flex-col gap-[8px] overflow-hidden sm:gap-[10px] xl:gap-[12px]">
                  {productBase.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="flex shrink-0 flex-col gap-[2px]"
                    >
                      <div className="font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:text-[16px] sm:leading-[22px]">
                        {feat.title}
                      </div>
                      <div className="overflow-hidden font-['PingFang_SC'] text-[12px] leading-[16px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] sm:text-[13px] sm:leading-[18px] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
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
