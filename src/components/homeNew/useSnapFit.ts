import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HOME_NAVBAR_HEIGHT } from "./homeSectionLayout";

/** 平板/桌面且基础高度达标时才进入整屏候选；不达标直接自由滚动 */
const FULLSCREEN_SNAP_MQ = "(min-width: 768px) and (min-height: 800px)";

/**
 * 需要实测内容高度的前 4 屏 slide id。
 * home-hero 为全屏 splash，内容在 min-height:800 下必然放得下，跳过。
 */
const MEASURE_SECTION_IDS = [
  "home-download",
  "home-capabilities",
  "home-opensource",
] as const;

/** SSR 安全的 layoutEffect */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const readPads = (node: HTMLElement) => {
  const style = getComputedStyle(node);
  return {
    top: parseFloat(style.paddingTop) || 0,
    bottom: parseFloat(style.paddingBottom) || 0,
  };
};

/**
 * 读取某个 slide 的内容自然高度。
 * 取 section 内层组件根元素，扣除导航栏/居中区上下 padding（如 HOME_SECTION_CENTER_CLASS
 * 的 pt-[80px]），得到的才是“真正需要占用的内容高度”。
 *
 * 注意：CENTER class 常挂在根下的子节点上，根节点本身无 padding；
 * 若不扣除内层 padding，会把导航留白算进内容高度，导致误判退化为自由滚动。
 */
const measureSlideContentHeight = (id: string): number | null => {
  const el = document.getElementById(id);
  if (!el) return null;
  const inner = (el.firstElementChild as HTMLElement | null) ?? el;
  let { top: padTop, bottom: padBottom } = readPads(inner);

  if (padTop <= 0 && padBottom <= 0) {
    for (const child of Array.from(inner.children) as HTMLElement[]) {
      const pads = readPads(child);
      if (pads.top > 0 || pads.bottom > 0) {
        padTop = pads.top;
        padBottom = pads.bottom;
        break;
      }
    }
  }

  return inner.scrollHeight - padTop - padBottom;
};

/**
 * 决定首页是否使用整屏吸附模式。
 *
 * 在原有媒体查询（宽屏 + min-height:800）之上叠加「真实内容测量」：
 * 仅当所有受测屏的内容自然高度 ≤ (视口高度 − 导航栏 80px) 时才整屏吸附，
 * 任一屏超出则整组退化为自由滚动，避免内容被导航栏遮挡或被裁切。
 *
 * 实现细节：
 * - 权威测量只在自由滚动模式下进行；整屏模式下 slide 被约束为视口高度且
 *   overflow:hidden，scrollHeight 不可信。
 * - 用 ResizeObserver 监听各 section 高度变化，但只在自由滚动模式下生效，
 *   避免整屏模式下的压缩高度触发误判。
 * - 首次用 useLayoutEffect + 多帧延迟，等字体/图片布局稳定后再测量，
 *   避免首屏闪烁和初始误判。
 * - 保留 16px 容差，抵消子像素渲染、边框、滚动条等微小波动。
 */
export function useSnapFit(): boolean {
  const [snapEnabled, setSnapEnabled] = useState(false);
  const snapRef = useRef(false);
  snapRef.current = snapEnabled;

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(FULLSCREEN_SNAP_MQ);
    let rafId = 0;
    let stableTimer: ReturnType<typeof setTimeout> | null = null;

    const scheduleMeasure = (frames = 2) => {
      if (rafId) cancelAnimationFrame(rafId);
      let pending = frames;
      const tick = () => {
        pending -= 1;
        if (pending > 0) {
          rafId = requestAnimationFrame(tick);
          return;
        }
        rafId = 0;
        measure();
      };
      rafId = requestAnimationFrame(tick);
    };

    const measure = () => {
      // 宽度/基础高度不达标 → 自由滚动
      if (!mq.matches) {
        setSnapEnabled(false);
        return;
      }

      // 只有在自由滚动模式下才做权威测量
      if (snapRef.current) return;

      const availableHeight = window.innerHeight - HOME_NAVBAR_HEIGHT;
      const fits = MEASURE_SECTION_IDS.every((id) => {
        const contentHeight = measureSlideContentHeight(id);
        if (contentHeight == null) return true;
        return contentHeight <= availableHeight + 16;
      });
      setSnapEnabled(fits);
    };

    const onResize = () => {
      // 先退回自由滚动，等布局稳定后再复测内容自然高度
      setSnapEnabled(false);
      scheduleMeasure(2);
    };

    // ResizeObserver：只在自由滚动模式下监听各 section 高度变化
    const ro = new ResizeObserver(() => {
      if (snapRef.current) return;
      // 防抖：高度变化后等 100ms 再测，避免频繁切换
      if (stableTimer) clearTimeout(stableTimer);
      stableTimer = setTimeout(() => {
        stableTimer = null;
        measure();
      }, 100);
    });

    MEASURE_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) ro.observe(el);
    });

    // 首次挂载：先等 DOM/字体/图片稳定后再测量
    scheduleMeasure(2);

    mq.addEventListener("change", onResize);
    window.addEventListener("resize", onResize);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (stableTimer) clearTimeout(stableTimer);
      mq.removeEventListener("change", onResize);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  return snapEnabled;
}
