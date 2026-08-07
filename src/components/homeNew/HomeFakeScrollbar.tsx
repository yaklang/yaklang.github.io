import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  progress: number;
  thumbRatio: number;
  onSeek: (progress: number) => void;
  className?: string;
};

/**
 * 模拟滚动条：与 Swiper 整屏进度同步，可点击轨道 / 拖拽拇指跳转。
 */
const HomeFakeScrollbar: React.FC<Props> = ({
  progress,
  thumbRatio,
  onSeek,
  className = "",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [dragging, setDragging] = useState(false);

  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

  const ratioToProgress = useCallback(
    (clientY: number) => {
      const track = trackRef.current;
      if (!track) return 0;
      const rect = track.getBoundingClientRect();
      const thumbH = Math.max(24, rect.height * clamp01(thumbRatio));
      const travel = Math.max(1, rect.height - thumbH);
      const y = clientY - rect.top - thumbH / 2;
      return clamp01(y / travel);
    },
    [thumbRatio],
  );

  const seekFromEvent = useCallback(
    (clientY: number) => {
      onSeek(ratioToProgress(clientY));
    },
    [onSeek, ratioToProgress],
  );

  useEffect(() => {
    if (!dragging) return;

    const onMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      event.preventDefault();
      seekFromEvent(event.clientY);
    };
    const onUp = () => {
      draggingRef.current = false;
      setDragging(false);
    };

    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, seekFromEvent]);

  const safeRatio = clamp01(thumbRatio);
  const thumbH = `${Math.max(safeRatio * 100, 8)}%`;
  const travel = Math.max(0, 1 - safeRatio);
  const thumbTop = `${clamp01(progress) * travel * 100}%`;

  return (
    <div
      ref={trackRef}
      role="scrollbar"
      aria-orientation="vertical"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamp01(progress) * 100)}
      className={`pointer-events-auto absolute right-0 top-0 z-[120] flex h-full w-[8px] justify-center ${className}`}
      onPointerDown={(event) => {
        if ((event.target as HTMLElement).dataset.thumb === "1") return;
        event.preventDefault();
        seekFromEvent(event.clientY);
      }}
    >
      {/* 颜色对齐 src/css/custom.scss 全局滚动条 */}
      <div
        className="relative h-full w-full"
        style={{ background: "var(--Colors-Use-Main-Bg)" }}
      >
        <div
          data-thumb="1"
          className={`absolute left-0 w-full rounded-[4px] ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            height: thumbH,
            top: thumbTop,
            background: "var(--Colors-Use-Main---Gold-Border)",
            transition: dragging ? "none" : "top 120ms linear",
          }}
          onPointerDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            draggingRef.current = true;
            setDragging(true);
            seekFromEvent(event.clientY);
          }}
        />
      </div>
    </div>
  );
};

export default HomeFakeScrollbar;
