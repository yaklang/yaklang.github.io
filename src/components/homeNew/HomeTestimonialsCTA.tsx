import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Tooltip } from "antd";
import LiquidAscii from "./LiquidAscii";
import { HOME_CONTAINER_CLASS } from "./homeSectionLayout";
import { useLoadWhenHomeSlide } from "./useLoadWhenHomeSlide";

const highlightYak = (text: string) => {
  const parts = text.split(/(Yak)/gi);
  return parts.map((part, i) =>
    /^Yak$/i.test(part) ? (
      <span
        key={i}
        className="text-[color:var(--Colors-Use-Main---web-Primary)]"
      >
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
};

type Segment = {
  text: string;
  highlight: boolean;
};

type TestimonialData = {
  name: string;
  img: string;
  segments: Segment[];
};

type AppraiseItem = {
  name: string;
  img: string;
  appraise: React.ReactNode;
  /** 完整评价文案，供省略 tip 使用 */
  quoteText: string;
};

const toArray = (node: React.ReactNode): React.ReactNode[] => {
  if (Array.isArray(node)) return node;
  return node == null ? [] : [node];
};

/** 检测文本是否因 truncate / line-clamp 被截断（一次性检测，不持续监听） */
const useIsOverflowing = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      setOverflowing(
        el.scrollWidth > el.clientWidth + 1 ||
          el.scrollHeight > el.clientHeight + 1,
      );
    };

    // 首次检测 + 宽度变化时再检测一次后即断开
    check();
    const ro = new ResizeObserver(() => {
      check();
      ro.disconnect();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, overflowing };
};

const TESTIMONIAL_IMAGES: Record<string, string> = {
  t0: require("@site/static/img/home-optimized/testimonials/t0.webp").default,
  t1: require("@site/static/img/home-optimized/testimonials/t1.webp").default,
  t2: require("@site/static/img/home-optimized/testimonials/t2.webp").default,
  t3: require("@site/static/img/home-optimized/testimonials/t3.webp").default,
  t4: require("@site/static/img/home-optimized/testimonials/t4.webp").default,
  t5: require("@site/static/img/home-optimized/testimonials/t5.webp").default,
  t6: require("@site/static/img/home-optimized/testimonials/t6.webp").default,
  t7: require("@site/static/img/home-optimized/testimonials/t7.webp").default,
  t8: require("@site/static/img/home-optimized/testimonials/t8.webp").default,
  t9: require("@site/static/img/home-optimized/testimonials/t9.webp").default,
  t10: require("@site/static/img/home-optimized/testimonials/t10.webp").default,
  t11: require("@site/static/img/home-optimized/testimonials/t11.webp").default,
  t12: require("@site/static/img/home-optimized/testimonials/t12.webp").default,
  t13: require("@site/static/img/home-optimized/testimonials/t13.webp").default,
  t14: require("@site/static/img/home-optimized/testimonials/t14.webp").default,
  t15: require("@site/static/img/home-optimized/testimonials/t15.webp").default,
  t16: require("@site/static/img/home-optimized/testimonials/t16.webp").default,
  t17: require("@site/static/img/home-optimized/testimonials/t17.webp").default,
  t18: require("@site/static/img/home-optimized/testimonials/t18.webp").default,
  t19: require("@site/static/img/home-optimized/testimonials/t19.webp").default,
};

const TESTIMONIAL_KEYS = Object.keys(TESTIMONIAL_IMAGES).sort(
  (a, b) => Number(a.slice(1)) - Number(b.slice(1)),
);

const resolveTestimonials = (t: any): TestimonialData[] => {
  return TESTIMONIAL_KEYS.map((key) => ({
    name: t(`HomeTestimonialsCTA.testimonials.${key}.name`),
    img: TESTIMONIAL_IMAGES[key],
    segments: t(`HomeTestimonialsCTA.testimonials.${key}.segments`, {
      returnObjects: true,
    }) as Segment[],
  }));
};

const buildAppraiseItem = (data: TestimonialData): AppraiseItem => {
  return {
    name: data.name,
    img: data.img,
    quoteText: data.segments.map((seg) => seg.text).join(""),
    appraise: data.segments.map((seg, index) =>
      seg.highlight ? (
        <span key={index} className="appraise-content-key-point">
          {seg.text}
        </span>
      ) : (
        <React.Fragment key={index}>{seg.text}</React.Fragment>
      ),
    ),
  };
};

/** 保证每行有足够卡片，无缝滚动不露空 */
const ensureRowItems = (items: AppraiseItem[], min = 6): AppraiseItem[] => {
  if (!items.length) return [];
  const out = [...items];
  while (out.length < min) {
    out.push(...items);
  }
  return out;
};

const QuoteBody: React.FC<{
  appraise: React.ReactNode;
  textRef?: React.RefObject<HTMLParagraphElement | null>;
}> = ({ appraise, textRef }) => {
  const contentNodes = toArray(appraise);

  return (
    <p
      ref={textRef}
      className="m-0 overflow-hidden text-left font-['PingFang_SC'] text-[16px] leading-[24px] tracking-[0.1px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] [&_.appraise-content-key-point]:bg-transparent [&_.appraise-content-key-point]:text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
    >
      <span aria-hidden>“</span>
      {contentNodes.map((child, i) => {
        if (React.isValidElement(child) && child.type === "br") {
          return " ";
        }
        if (
          React.isValidElement(child) &&
          (child.props as { className?: string })?.className ===
            "appraise-content-key-point"
        ) {
          const elProps = child.props as { children: React.ReactNode };
          return <span key={i}>{elProps.children}</span>;
        }
        return <span key={i}>{child}</span>;
      })}
      <span aria-hidden>”</span>
    </p>
  );
};

const TestimonialCard: React.FC<AppraiseItem & { shouldLoadImages: boolean }> = ({
  name,
  img,
  appraise,
  quoteText,
  shouldLoadImages,
}) => {
  const { ref: nameRef, overflowing: nameOverflow } =
    useIsOverflowing<HTMLSpanElement>();
  const { ref: quoteRef, overflowing: quoteOverflow } =
    useIsOverflowing<HTMLParagraphElement>();

  return (
    <article className="box-border flex h-[160px] w-[280px] shrink-0 flex-col overflow-hidden border-0 border-r border-solid border-r-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] transition-colors duration-200 hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] sm:h-[240px] sm:w-[320px] lg:w-[360px] xl:w-[400px]">
      <div className="flex shrink-0 items-center gap-[12px] border-0 border-b border-solid border-b-[var(--Colors-Use-Main---Gold-Focus)] px-[24px] py-[12px] sm:px-[40px] sm:pb-[20px] sm:pt-[20px]">
        <img
          src={shouldLoadImages ? img : undefined}
          alt=""
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="h-[32px] w-[32px] shrink-0 rounded-full object-cover sm:h-[40px] sm:w-[40px]"
        />
        <div className="flex min-w-0 flex-col gap-[2px]">
          <Tooltip title={nameOverflow ? name : undefined}>
            <span
              ref={nameRef}
              className="block truncate font-['PingFang_SC'] text-[14px] font-medium leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
            >
              {name}
            </span>
          </Tooltip>
          <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.5px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]">
            @yaklang.io
          </span>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden px-[24px] py-[12px] sm:px-[40px] sm:pb-[24px] sm:pt-[24px]">
        <Tooltip
          title={quoteOverflow ? quoteText : undefined}
          styles={{ root: { maxWidth: "min(480px, calc(100vw - 32px))" } }}
          classNames={{ root: "home-testimonial-tooltip" }}
        >
          <div className="min-h-0">
            <QuoteBody appraise={appraise} textRef={quoteRef} />
          </div>
        </Tooltip>
      </div>
    </article>
  );
};

type Direction = "left" | "right";

interface InfiniteRowProps {
  items: AppraiseItem[];
  direction: Direction;
  /** 动画时长（秒），越大越慢 */
  duration?: number;
  shouldLoadImages: boolean;
}

const InfiniteRow: React.FC<InfiniteRowProps> = ({
  items,
  direction,
  duration = 48,
  shouldLoadImages,
}) => {
  const track = useMemo(() => [...items, ...items], [items]);
  const animClass =
    direction === "left"
      ? "home-testimonial-marquee-left"
      : "home-testimonial-marquee-right";
  const rowRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    const anim = animRef.current;
    if (!row || !anim) return;
    let visible = true;

    const applyState = () => {
      const hovered = row.matches(":hover");
      if (!visible || hovered) anim.style.animationPlayState = "paused";
      else anim.style.animationPlayState = "running";
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? false;
        applyState();
      },
      { threshold: 0.05 },
    );
    io.observe(row);

    const onEnter = () => applyState();
    const onLeave = () => applyState();
    row.addEventListener("mouseenter", onEnter);
    row.addEventListener("mouseleave", onLeave);

    applyState();
    return () => {
      io.disconnect();
      row.removeEventListener("mouseenter", onEnter);
      row.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className="home-testimonial-row group/row relative w-full overflow-hidden"
    >
      <div
        ref={animRef}
        className={`flex w-max ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((item, idx) => (
          <TestimonialCard
            key={`${direction}-${item.name}-${idx}`}
            {...item}
            shouldLoadImages={shouldLoadImages}
          />
        ))}
      </div>
    </div>
  );
};

const HomeTestimonialsCTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const shouldLoadImages = useLoadWhenHomeSlide(5);

  const TESTIMONIALS = useMemo(
    () => resolveTestimonials(t).map(buildAppraiseItem),
    [t],
  );

  const { rowA, rowB } = useMemo(() => {
    const total = TESTIMONIALS.length;
    const half = Math.ceil(total / 2) || 0;
    return {
      rowA: ensureRowItems(TESTIMONIALS.slice(0, half)),
      rowB: ensureRowItems(
        TESTIMONIALS.slice(half).length
          ? TESTIMONIALS.slice(half)
          : TESTIMONIALS.slice(0, half),
      ),
    };
  }, [TESTIMONIALS]);

  return (
    <section className="flex h-full w-full flex-col items-center overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]">
      <style>{`
        @keyframes home-testimonial-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes home-testimonial-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .home-testimonial-marquee-left {
          animation-name: home-testimonial-marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .home-testimonial-marquee-right {
          animation-name: home-testimonial-marquee-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .home-testimonial-row:hover .home-testimonial-marquee-left,
        .home-testimonial-row:hover .home-testimonial-marquee-right {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-testimonial-marquee-left,
          .home-testimonial-marquee-right {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
        .home-testimonial-tooltip .ant-tooltip-inner {
          max-height: 400px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--Colors-Use-Main---Gold-Border) var(--Colors-Use-Main-Bg);
        }
        .home-testimonial-tooltip .ant-tooltip-inner::-webkit-scrollbar {
          width: 8px;
        }
        .home-testimonial-tooltip .ant-tooltip-inner::-webkit-scrollbar-track {
          background: var(--Colors-Use-Main-Bg);
        }
        .home-testimonial-tooltip .ant-tooltip-inner::-webkit-scrollbar-thumb {
          background: var(--Colors-Use-Main---Gold-Border);
          border-radius: 4px;
        }
      `}</style>

      {/* 标题区：小屏保底高度，避免被双行 marquee 挤没 */}
      <div className="relative min-h-[240px] w-full flex-1 overflow-hidden sm:min-h-0">
        <div
          className="pointer-events-none absolute inset-0 w-full"
          aria-hidden
        >
          <LiquidAscii
            className="h-full w-full"
            width="100%"
            height="100%"
            cellSize={10}
            fillHeight={0.55}
            speed={0.85}
            gravity={-22}
            autoWave
            characters=" 01{}[]<>/=;*#+@"
            color="var(--Colors-Use-Main---Gold-Border)"
            backgroundColor="var(--Colors-Use-Main---Gold-Bg)"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            opacity={0.55}
          />
        </div>

        <div
          className={`pointer-events-none relative z-[1] flex h-full min-h-0 w-full flex-col items-center justify-center gap-[12px] py-[24px] text-center ${HOME_CONTAINER_CLASS}`}
        >
          <h2
            className={`m-0 ${isEn ? "font-['Crimson_Text'] text-[40px] leading-[48px] sm:text-[56px] sm:leading-[64px]" : "font-['Noto_Serif_SC_Home'] text-[36px] leading-[48px] sm:text-[48px] sm:leading-[64px]"} font-medium text-[color:var(--Colors-Neutral-100)]`}
          >
            {/* 小屏：大家都喜 / 欢用 Yak */}
            <span className="inline sm:hidden">
              {highlightYak(t("HomeTestimonialsCTA.titleMobile"))}
              <br />
              {highlightYak(t("HomeTestimonialsCTA.titleMobileLine2"))}
            </span>
            {/* ≥sm：单行 */}
            <span className="hidden sm:inline">
              {highlightYak(t("HomeTestimonialsCTA.titleDesktop"))}
            </span>
          </h2>
          <p className="m-0 max-w-[280px] font-['PingFang_SC'] text-[16px] leading-[24px] text-[color:var(--Colors-Use-Neutral-Text-2-Primary)] sm:max-w-[640px] sm:text-[20px] sm:leading-[28px]">
            {t("HomeTestimonialsCTA.subtitle")}
          </p>
        </div>
      </div>

      {/* 双行 Marquee：横向全屏，贴底部 */}
      {TESTIMONIALS.length > 0 ? (
        <div
          className="w-full shrink-0 border-0 border-y border-solid border-[var(--Colors-Use-Main---Gold-Focus)]"
          aria-label={t("HomeTestimonialsCTA.marqueeAria")}
        >
          <InfiniteRow
            items={rowA}
            direction="left"
            duration={52}
            shouldLoadImages={shouldLoadImages}
          />
          <div
            className="h-px w-full bg-[var(--Colors-Use-Main---Gold-Focus)]"
            aria-hidden
          />
          <InfiniteRow
            items={rowB}
            direction="right"
            duration={56}
            shouldLoadImages={shouldLoadImages}
          />
        </div>
      ) : null}
    </section>
  );
};

export default HomeTestimonialsCTA;
