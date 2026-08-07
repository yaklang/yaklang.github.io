import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import {
  useHomeSlideActions,
  useHomeSlideIndex,
} from "./HomeSlideContext";
import HomeHero from "./HomeHero";
import HomeDownload from "./HomeDownload";
import HomeProductCapabilities from "./HomeProductCapabilities";
import HomeOpenSource from "./HomeOpenSource";
import HomeMilestones from "./HomeMilestones";
import HomeTestimonialsCTA from "./HomeTestimonialsCTA";
import HomeFooter from "./HomeFooter";
import HomeFakeScrollbar from "./HomeFakeScrollbar";
import { HOME_SCROLL_MS } from "./homeMotion";

const SECTION_IDS = [
  "home-hero",
  "home-download",
  "home-capabilities",
  "home-opensource",
] as const;

const SLIDE_COUNT = SECTION_IDS.length + 1; // +1: 末屏自由滚动区
const FREE_SCROLL_INDEX = SLIDE_COUNT - 1;
/** 宽屏且高度足够时才整屏切换；高度不足则自由滚动 */
const FULLSCREEN_SNAP_MQ = "(min-width: 1024px) and (min-height: 800px)";

/** 内层标记区域还能继续滚时，交给内层，不触发 Swiper 切屏 */
const canScrollNested = (target: EventTarget | null, deltaY: number) => {
  let el = target as HTMLElement | null;
  while (el) {
    if (el.hasAttribute("data-milestones-scroll")) {
      if (el.dataset.milestonesReady !== "true") return false;
      if (deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) {
        return true;
      }
      if (deltaY < 0 && el.scrollTop > 1) return true;
      return false;
    }
    if (el.hasAttribute("data-home-free-scroll")) {
      if (deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) {
        return true;
      }
      if (deltaY < 0 && el.scrollTop > 1) return true;
      return false;
    }
    if (el.classList.contains("home-page-swiper")) break;
    el = el.parentElement;
  }
  return false;
};

const slideShellClass =
  "box-border !flex h-full w-full items-stretch justify-center";

/** 末屏可滚高度折算成「额外屏数」，用于滚动条总行程 */
const getLastExtraPages = (free: HTMLElement | null) => {
  if (!free) return 0;
  const overflow = free.scrollHeight - free.clientHeight;
  if (overflow <= 1) return 0;
  return overflow / Math.max(1, free.clientHeight);
};

const FreeScrollHome: React.FC = () => {
  const { setActiveIndex, registerSwiper } = useHomeSlideActions();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToSection = useCallback(
    (index: number) => {
      const el = sectionRefs.current[index];
      const root = scrollerRef.current;
      if (!el || !root) return;
      setActiveIndex(index);
      root.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    },
    [setActiveIndex],
  );

  useEffect(() => {
    registerSwiper(scrollToSection);
    return () => registerSwiper(null);
  }, [registerSwiper, scrollToSection]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = sectionRefs.current.findIndex((el) => el === visible.target);
        if (idx >= 0) setActiveIndex(idx);
      },
      { root, threshold: [0.35, 0.55, 0.75] },
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [setActiveIndex]);

  const sectionClass =
    "box-border flex w-full min-h-0 items-stretch justify-center";

  return (
    <div
      ref={scrollerRef}
      data-home-snap="0"
      className="home-new-scroller h-full w-full overflow-x-hidden overflow-y-auto overscroll-y-contain"
    >
      <section
        id={SECTION_IDS[0]}
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="box-border flex h-full min-h-full w-full items-stretch justify-center"
      >
        <HomeHero />
      </section>
      <section
        id={SECTION_IDS[1]}
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className={sectionClass}
      >
        <HomeDownload />
      </section>
      <section
        id={SECTION_IDS[2]}
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className={sectionClass}
      >
        <HomeProductCapabilities />
      </section>
      <section
        id={SECTION_IDS[3]}
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className={sectionClass}
      >
        <HomeOpenSource />
      </section>
      <section
        id="home-milestones"
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className={sectionClass}
      >
        <HomeMilestones />
      </section>
      <section
        id="home-testimonials"
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}
        className={sectionClass}
      >
        <HomeTestimonialsCTA />
      </section>
      <HomeFooter />
    </div>
  );
};

const SwiperHome: React.FC = () => {
  const { setActiveIndex, registerSwiper } = useHomeSlideActions();
  const initialIndex = useHomeSlideIndex();
  const swiperRef = useRef<SwiperClass | null>(null);
  const activeIndexRef = useRef(initialIndex);
  const [activeIndexState, setActiveIndexState] = useState(initialIndex);
  const freeScrollRef = useRef<HTMLDivElement | null>(null);
  const wheelCleanupRef = useRef<(() => void) | null>(null);
  const lastExtraRef = useRef(0);

  const [barProgress, setBarProgress] = useState(0);
  const [thumbRatio, setThumbRatio] = useState(1 / SLIDE_COUNT);

  const syncScrollbar = useCallback((swiper?: SwiperClass | null) => {
    const s = swiper ?? swiperRef.current;
    const free = freeScrollRef.current;
    const extra = getLastExtraPages(free);
    lastExtraRef.current = extra;

    const total = SLIDE_COUNT - 1 + extra;
    const idx = s?.activeIndex ?? activeIndexRef.current;

    let pos = s ? Math.min(1, Math.max(0, s.progress)) * (SLIDE_COUNT - 1) : idx;

    if (idx >= FREE_SCROLL_INDEX && free && extra > 0) {
      const max = free.scrollHeight - free.clientHeight;
      const inner = max > 0 ? free.scrollTop / max : 0;
      pos = SLIDE_COUNT - 1 + inner * extra;
    }

    setBarProgress(total > 0 ? Math.min(1, Math.max(0, pos / total)) : 0);
    setThumbRatio(Math.min(1, 1 / (total + 1)));
  }, []);

  const goTo = useCallback(
    (index: number, speed = HOME_SCROLL_MS) => {
      const swiper = swiperRef.current;
      if (!swiper) return;
      const clamped = Math.max(0, Math.min(SLIDE_COUNT - 1, index));
      swiper.slideTo(clamped, speed);
    },
    [],
  );

  const seekByProgress = useCallback(
    (progress: number) => {
      const swiper = swiperRef.current;
      const free = freeScrollRef.current;
      const extra = getLastExtraPages(free);
      lastExtraRef.current = extra;
      const total = SLIDE_COUNT - 1 + extra;
      const pos = Math.min(1, Math.max(0, progress)) * total;

      if (pos <= SLIDE_COUNT - 1) {
        if (free) free.scrollTop = 0;
        const index = Math.round(pos);
        goTo(index);
        return;
      }

      // 末屏内滚
      goTo(FREE_SCROLL_INDEX, 0);
      requestAnimationFrame(() => {
        const el = freeScrollRef.current;
        if (!el) return;
        const max = Math.max(0, el.scrollHeight - el.clientHeight);
        const inner = extra > 0 ? (pos - (SLIDE_COUNT - 1)) / extra : 0;
        el.scrollTop = inner * max;
        syncScrollbar(swiperRef.current);
      });
    },
    [goTo, syncScrollbar],
  );

  useEffect(() => {
    registerSwiper((index) => goTo(index));
    return () => registerSwiper(null);
  }, [registerSwiper, goTo]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const slide = Number(
      new URLSearchParams(window.location.search).get("slide"),
    );
    if (!Number.isFinite(slide) || slide < 0 || slide >= SLIDE_COUNT) return;
    requestAnimationFrame(() => goTo(slide, 0));
  }, [goTo]);

  useEffect(
    () => () => {
      wheelCleanupRef.current?.();
      wheelCleanupRef.current = null;
    },
    [],
  );

  const bindWheelGuard = (swiper: SwiperClass) => {
    wheelCleanupRef.current?.();
    const el = swiper.el;
    const onWheelCapture = (event: WheelEvent) => {
      if (canScrollNested(event.target, event.deltaY)) {
        swiper.mousewheel?.disable();
      } else {
        swiper.mousewheel?.enable();
      }
    };

    el.addEventListener("wheel", onWheelCapture, {
      capture: true,
      passive: false,
    });
    wheelCleanupRef.current = () => {
      el.removeEventListener("wheel", onWheelCapture, true);
      swiper.mousewheel?.enable();
    };
  };

  // 自由滚动区内滚时同步滚动条（rAF 节流）
  useEffect(() => {
    const free = freeScrollRef.current;
    if (!free) return;
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        syncScrollbar(swiperRef.current);
      });
    };
    free.addEventListener("scroll", onScroll, { passive: true });
    syncScrollbar(swiperRef.current);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      free.removeEventListener("scroll", onScroll);
    };
  }, [syncScrollbar]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Swiper
        className="home-page-swiper home-new-scroller h-full w-full"
        direction="vertical"
        modules={[Mousewheel, Keyboard]}
        slidesPerView={1}
        speed={HOME_SCROLL_MS}
        resistanceRatio={0.35}
        simulateTouch={false}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 18,
          thresholdTime: 320,
          releaseOnEdges: false,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        initialSlide={initialIndex}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          activeIndexRef.current = swiper.activeIndex;
          setActiveIndex(swiper.activeIndex);
          bindWheelGuard(swiper);
          syncScrollbar(swiper);
        }}
        onProgress={(swiper) => {
          syncScrollbar(swiper);
        }}
        onSetTranslate={(swiper) => {
          syncScrollbar(swiper);
        }}
        onSlideChange={(swiper) => {
          const idx = swiper.activeIndex;
          activeIndexRef.current = idx;
          setActiveIndex(idx);
          setActiveIndexState(idx);

          if (idx !== FREE_SCROLL_INDEX && freeScrollRef.current) {
            freeScrollRef.current.scrollTop = 0;
          }
          syncScrollbar(swiper);
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          syncScrollbar(swiper);
        }}
      >
        <style>{`
          .home-page-swiper.swiper {
            overflow: hidden;
          }
          .home-page-swiper > .swiper-wrapper {
            transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1) !important;
          }
          .home-page-swiper > .swiper-wrapper > .swiper-slide {
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
          }
          /* 仅隐藏里程碑内层嵌套滚动条，自由滚动区用浏览器原生滚动条 */
          .home-page-swiper [data-milestones-scroll] {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .home-page-swiper [data-milestones-scroll]::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }
          /* 非自由滚动屏时隐藏原生滚动条 */
          .home-page-swiper [data-home-free-scroll].hide-native-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .home-page-swiper [data-home-free-scroll].hide-native-scrollbar::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }
        `}</style>

        <SwiperSlide id={SECTION_IDS[0]} className={slideShellClass}>
          <HomeHero />
        </SwiperSlide>
        <SwiperSlide id={SECTION_IDS[1]} className={slideShellClass}>
          <HomeDownload />
        </SwiperSlide>
        <SwiperSlide id={SECTION_IDS[2]} className={slideShellClass}>
          <HomeProductCapabilities />
        </SwiperSlide>
        <SwiperSlide id={SECTION_IDS[3]} className={slideShellClass}>
          <HomeOpenSource />
        </SwiperSlide>
        <SwiperSlide
          className="!box-border !h-full !overflow-hidden"
        >
          <div
            ref={(el) => {
              freeScrollRef.current = el;
            }}
            data-home-free-scroll
            className={`h-full w-full overflow-x-hidden overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch] ${
              activeIndexState !== FREE_SCROLL_INDEX ? "hide-native-scrollbar" : ""
            }`}
          >
            <div className="box-border flex w-full min-h-0 items-stretch justify-center pt-[80px] [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
              <HomeMilestones />
            </div>
            <div className="box-border flex w-full min-h-0 items-stretch justify-center [content-visibility:auto] [contain-intrinsic-size:auto_1400px]">
              <HomeTestimonialsCTA />
            </div>
            <div className="[content-visibility:auto] [contain-intrinsic-size:auto_400px]">
              <HomeFooter />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {activeIndexState !== FREE_SCROLL_INDEX && (
        <HomeFakeScrollbar
          progress={barProgress}
          thumbRatio={thumbRatio}
          onSeek={seekByProgress}
        />
      )}
    </div>
  );
};

const HomePageNew: React.FC = () => {
  const [snapEnabled, setSnapEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(FULLSCREEN_SNAP_MQ);
    const sync = () => setSnapEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return snapEnabled ? <SwiperHome /> : <FreeScrollHome />;
};

export default HomePageNew;
