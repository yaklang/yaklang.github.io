import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Tooltip } from "antd";
import { useHomeSlideActions } from "./HomeSlideContext";
import LiquidAscii from "./LiquidAscii";

const DOWNLOAD_SLIDE_INDEX = 1;

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
  t0: require("@site/static/img/team/ykc.jpg").default,
  t1: require("@site/static/img/home/kio.jpeg").default,
  t2: require("@site/static/img/home/和你.jpeg").default,
  t3: require("@site/static/img/home/P0m32Kun.jpeg").default,
  t4: require("@site/static/img/home/18Xtreme.jpeg").default,
  t5: require("@site/static/img/team/国产大熊猫.jpeg").default,
  t6: require("@site/static/img/home/CF_HB.jpeg").default,
  t7: require("@site/static/img/home/wooluo.jpeg").default,
  t8: require("@site/static/img/team/Vanilla.jpeg").default,
  t9: require("@site/static/img/home/ttStorm.jpeg").default,
  t10: require("@site/static/img/home/酒零.jpeg").default,
  t11: require("@site/static/img/home/key@OverSpace.jpeg").default,
  t12: require("@site/static/img/team/naiquan.jpeg").default,
  t13: require("@site/static/img/home/sharecast.jpeg").default,
  t14: require("@site/static/img/home/影舞者.jpeg").default,
  t15: require("@site/static/img/team/timwhite.png").default,
  t16: require("@site/static/img/team/Alex-null.jpeg").default,
  t17: require("@site/static/img/home/六月初七.jpeg").default,
  t18: require("@site/static/img/home/小米粥.jpeg").default,
  t19: require("@site/static/img/home/李大壮.jpeg").default,
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

const TestimonialCard: React.FC<AppraiseItem> = ({
  name,
  img,
  appraise,
  quoteText,
}) => {
  const { ref: nameRef, overflowing: nameOverflow } =
    useIsOverflowing<HTMLSpanElement>();
  const { ref: quoteRef, overflowing: quoteOverflow } =
    useIsOverflowing<HTMLParagraphElement>();

  return (
    <article className="box-border flex h-[240px] w-[280px] shrink-0 flex-col overflow-hidden border-0 border-r border-solid border-r-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)] transition-colors duration-200 hover:bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] sm:w-[320px] lg:w-[360px] xl:w-[400px]">
      <div className="flex shrink-0 items-center gap-[12px] border-0 border-b border-solid border-b-[var(--Colors-Use-Main---Gold-Focus)] px-[40px] pb-[20px] pt-[20px]">
        <img
          src={img}
          alt=""
          className="h-[40px] w-[40px] shrink-0 rounded-full object-cover"
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

      <div className="min-h-0 flex-1 overflow-hidden px-[40px] pb-[24px] pt-[24px]">
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
}

const InfiniteRow: React.FC<InfiniteRowProps> = ({
  items,
  direction,
  duration = 48,
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
    <div ref={rowRef} className="home-testimonial-row group/row relative w-full overflow-hidden">
      <div
        ref={animRef}
        className={`flex w-max ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((item, idx) => (
          <TestimonialCard key={`${direction}-${item.name}-${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
};

const HomeTestimonialsCTA: React.FC = () => {
  const { t } = useTranslation();
  const { goToSlide } = useHomeSlideActions();
  const nowBg = useBaseUrl("img/newHome/now.webp");

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
    <section className="flex w-full flex-col items-center overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]">
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

      {/* 标题区：LiquidAscii 代码流体背景 */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 w-full" aria-hidden>
          <LiquidAscii
            className="h-full w-full"
            width="100%"
            height="100%"
            cellSize={14}
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

        <div className="pointer-events-none relative z-[1] mx-auto flex h-full w-full max-w-full flex-col items-center justify-center gap-[12px] px-[18px] text-center sm:px-[40px] xl:container xl:px-[40px] 2xl:px-[80px]">
          <h2 className="m-0 font-['Noto_Serif_SC'] text-[48px] font-medium leading-[64px] text-[color:var(--Colors-Neutral-100)]">
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
          <p className="m-0 max-w-[280px] font-['PingFang_SC'] text-[20px] leading-[28px] text-[color:var(--Colors-Use-Neutral-Text-2-Primary)] sm:max-w-[640px]">
            {t("HomeTestimonialsCTA.subtitle")}
          </p>
        </div>
      </div>

      {/* 双行 Marquee：横向全屏，上左下右 */}
      {TESTIMONIALS.length > 0 ? (
        <div
          className="w-full border-0 border-y border-solid border-[var(--Colors-Use-Main---Gold-Focus)]"
          aria-label={t("HomeTestimonialsCTA.marqueeAria")}
        >
          <InfiniteRow items={rowA} direction="left" duration={52} />
          <div
            className="h-px w-full bg-[var(--Colors-Use-Main---Gold-Focus)]"
            aria-hidden
          />
          <InfiniteRow items={rowB} direction="right" duration={56} />
        </div>
      ) : null}

      {/* 立即体验：全宽居中 */}
      <div className="mx-auto box-border w-full px-[16px] pb-[40px] pt-[40px] sm:px-[18px] md:px-[40px] lg:px-[60px] xl:px-[80px] sm:pt-[48px] xl:pt-[80px]">
        <div className="relative mx-auto w-full overflow-hidden rounded-[8px]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `url(${nowBg}) lightgray 50% / cover no-repeat`,
              opacity: 0.6,
            }}
            aria-hidden
          />

          <div className="mx-auto relative z-[1] flex flex-col items-center gap-[32px] px-[24px] py-[56px] text-center sm:gap-[28px] sm:px-[40px] sm:py-[64px] xl:py-[80px]">
            <div className="flex flex-col items-center gap-[16px] sm:gap-[12px]">
              <h2 className="m-0 flex flex-col items-center gap-[12px] font-['Noto_Serif_SC'] text-[48px] font-medium leading-[64px] text-[color:var(--Colors-Neutral-100)]">
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

export default HomeTestimonialsCTA;
