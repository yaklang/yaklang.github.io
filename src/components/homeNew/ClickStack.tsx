import React, {
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import gsap from "gsap";
import clsx from "clsx";

export interface ClickStackProps {
  items?: React.ReactNode[];
  /** 水平错位 */
  spreadX?: number;
  /** 垂直错位 */
  spreadY?: number;
  duration?: number;
  ease?: string;
  borderRadius?: number;
  shadowBlur?: number;
  shadowOpacity?: number;
  cardColor?: string;
  visibleCount?: number;
  depthScale?: number;
  depthOpacity?: number;
  className?: string;
  cardClassName?: string;
  onFrontChange?: (index: number) => void;
}

export type ClickStackHandle = {
  cycle: () => void;
  getFrontIndex: () => number;
};

const ClickStack = forwardRef<ClickStackHandle, ClickStackProps>(
  (
    {
      items = [],
      spreadX = 20,
      spreadY = -20,
      duration = 0.35,
      ease = "power3.out",
      borderRadius = 8,
      shadowBlur = 30,
      shadowOpacity = 0.3,
      cardColor = "var(--Colors-Use-Main---Gold-Bg)",
      visibleCount = 5,
      depthScale = 0.08,
      depthOpacity = 0,
      className,
      cardClassName,
      onFrontChange,
    },
    ref,
  ) => {
    const total = items.length;
    const vis = Math.min(visibleCount, Math.max(total, 0));

    const seq = useRef<number[]>([]);
    const busy = useRef(false);
    const nodes = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const onFrontChangeRef = useRef(onFrontChange);
    onFrontChangeRef.current = onFrontChange;

    const cfg = useRef({
      spreadX,
      spreadY,
      depthScale,
      depthOpacity,
      vis,
      duration,
      ease,
    });

    useEffect(() => {
      cfg.current = {
        spreadX,
        spreadY,
        depthScale,
        depthOpacity,
        vis,
        duration,
        ease,
      };
    });

    const emitFront = useCallback(() => {
      const front = seq.current[0];
      if (front != null) onFrontChangeRef.current?.(front);
    }, []);

    const arrange = useCallback((animate: boolean) => {
      const c = cfg.current;
      seq.current.forEach((itemIdx, rank) => {
        const el = nodes.current[itemIdx];
        if (!el) return;

        if (rank >= c.vis) {
          gsap.set(el, { opacity: 0, visibility: "hidden", zIndex: -1 });
          return;
        }

        const target = {
          x: rank * c.spreadX,
          y: rank * c.spreadY,
          scale: 1 - rank * c.depthScale,
          opacity: Math.max(0, 1 - rank * c.depthOpacity),
          visibility: "visible" as const,
          zIndex: c.vis - rank,
          rotation: 0,
        };

        if (animate) {
          gsap.to(el, { ...target, duration: c.duration, ease: c.ease });
        } else {
          gsap.set(el, target);
        }
      });
    }, []);

    // 挂载 / 数量变化后布局；延迟一帧确保 ref 已挂上
    useEffect(() => {
      seq.current = Array.from({ length: total }, (_, i) => i);
      busy.current = false;

      const id = requestAnimationFrame(() => {
        arrange(false);
        emitFront();
        if (containerRef.current) {
          containerRef.current.style.visibility = "visible";
        }
      });

      return () => cancelAnimationFrame(id);
    }, [total, arrange, emitFront]);

    useEffect(() => {
      if (seq.current.length > 0) arrange(false);
    }, [spreadX, spreadY, depthScale, depthOpacity, vis, arrange]);

    useEffect(() => {
      const refs = nodes.current;
      return () => {
        refs.forEach((el) => {
          if (el) gsap.killTweensOf(el);
        });
      };
    }, []);

    const cycle = useCallback(() => {
      if (busy.current || total < 2) return false;
      const frontIdx = seq.current[0];
      const frontEl = nodes.current[frontIdx];
      if (!frontEl) return false;

      busy.current = true;
      const c = cfg.current;

      const release = () => {
        busy.current = false;
        emitFront();
      };

      // 防止动画异常导致 busy 卡死
      const safety = window.setTimeout(release, c.duration * 2000 + 400);

      gsap.to(frontEl, {
        scale: 1.04,
        opacity: 0,
        duration: c.duration * 0.55,
        ease: "power2.in",
        onComplete: () => {
          const moved = seq.current.shift();
          if (moved == null) {
            window.clearTimeout(safety);
            release();
            return;
          }
          seq.current.push(moved);

          const c2 = cfg.current;
          const movedNode = nodes.current[moved];
          if (movedNode) {
            gsap.set(movedNode, {
              opacity: 0,
              visibility: "hidden",
              zIndex: -1,
            });
          }

          seq.current.forEach((idx, rank) => {
            if (idx === moved) return;
            const el = nodes.current[idx];
            if (!el) return;

            if (rank >= c2.vis) {
              gsap.set(el, { opacity: 0, visibility: "hidden", zIndex: -1 });
              return;
            }

            gsap.to(el, {
              x: rank * c2.spreadX,
              y: rank * c2.spreadY,
              scale: 1 - rank * c2.depthScale,
              opacity: Math.max(0, 1 - rank * c2.depthOpacity),
              visibility: "visible",
              zIndex: c2.vis - rank,
              duration: c2.duration * 0.65,
              ease: "power2.out",
            });
          });

          const movedRank = seq.current.indexOf(moved);
          if (movedRank < c2.vis && movedNode) {
            gsap.set(movedNode, {
              x: movedRank * c2.spreadX,
              y: movedRank * c2.spreadY,
              scale: 1 - movedRank * c2.depthScale,
              opacity: 0,
              visibility: "visible",
              zIndex: c2.vis - movedRank,
            });
            gsap.to(movedNode, {
              opacity: Math.max(0, 1 - movedRank * c2.depthOpacity),
              duration: c2.duration * 0.5,
              delay: c2.duration * 0.2,
              ease: "power1.out",
              onComplete: () => {
                window.clearTimeout(safety);
                release();
              },
            });
          } else {
            window.clearTimeout(safety);
            release();
          }
        },
      });

      return true;
    }, [total, emitFront]);

    useImperativeHandle(
      ref,
      () => ({
        cycle: () => {
          cycle();
        },
        getFrontIndex: () => seq.current[0] ?? 0,
      }),
      [cycle],
    );

    const onStackPointerUp = useCallback(
      (e: React.PointerEvent) => {
        // 原生控件 / 明确标记区域不切换
        const t = e.target as HTMLElement;
        if (t.closest("[data-no-stack-cycle], button, a, input, textarea")) {
          return;
        }
        // 视频底部 controls 区域留给浏览器
        if (t.closest("video")) {
          const video = t.closest("video") as HTMLVideoElement;
          const rect = video.getBoundingClientRect();
          if (rect.bottom - e.clientY <= 48) return;
        }
        cycle();
      },
      [cycle],
    );

    if (total === 0) return null;

    return (
      <div
        ref={containerRef}
        onPointerUp={onStackPointerUp}
        className={clsx(
          "relative h-full w-full cursor-pointer overflow-visible",
          className,
        )}
        style={{ visibility: "hidden" }}
        role="group"
        aria-roledescription="carousel"
      >
        {items.map((content, idx) => (
          <div
            key={idx}
            ref={(el) => {
              nodes.current[idx] = el;
            }}
            className={clsx(
              "absolute inset-0 overflow-hidden",
              cardClassName,
            )}
            style={{
              borderRadius,
              background: cardColor,
              boxShadow: `0 ${Math.round(shadowBlur * 0.15)}px ${Math.round(
                shadowBlur * 0.5,
              )}px rgba(0,0,0,${(shadowOpacity * 0.5).toFixed(
                2,
              )}), 0 ${Math.round(shadowBlur * 0.4)}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`,
              willChange: "transform, opacity",
            }}
          >
            {content}
          </div>
        ))}
      </div>
    );
  },
);

ClickStack.displayName = "ClickStack";

export default ClickStack;
