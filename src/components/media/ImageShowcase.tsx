import React, { useState, useCallback, useEffect } from "react";
import { LazyImage } from "./LazyImage";

type AspectRatio = "16/10" | "16/9" | "4/3" | "3/2" | "auto";

const aspectClass: Record<AspectRatio, string> = {
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  auto: "",
};

interface ShowcaseImageProps {
  src: string;
  alt?: string;
  aspect?: AspectRatio;
  // contain 保证截图完整可见且不变形；cover 用于填满裁切
  fit?: "contain" | "cover";
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

// 单张截图展示框：固定宽高比 + 圆角 + 边框阴影，避免不同尺寸图片造成布局错位
export const ShowcaseImage: React.FC<ShowcaseImageProps> = ({
  src,
  alt = "",
  aspect = "16/10",
  fit = "contain",
  className = "",
  priority = false,
  onClick,
}) => {
  return (
    <div
      className={`group relative w-full ${aspectClass[aspect]} overflow-hidden rounded-xl border border-black/5 bg-gradient-to-br from-slate-50 to-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:from-slate-800 dark:to-slate-900 ${
        onClick ? "cursor-zoom-in" : ""
      } ${className}`}
      onClick={onClick}
    >
      <LazyImage
        src={src}
        alt={alt}
        priority={priority}
        className={`w-full h-full ${
          fit === "cover" ? "object-cover" : "object-contain"
        } transition-transform duration-500 group-hover:scale-[1.02]`}
      />
    </div>
  );
};

interface ImageShowcaseProps {
  images: string[];
  alt?: string;
  aspect?: AspectRatio;
  fit?: "contain" | "cover";
  // 是否开启点击放大查看
  lightbox?: boolean;
  className?: string;
}

// 多图画廊：主图 + 缩略图切换 + 可选点击放大（lightbox）
export const ImageShowcase: React.FC<ImageShowcaseProps> = ({
  images,
  alt = "",
  aspect = "16/10",
  fit = "contain",
  lightbox = true,
  className = "",
}) => {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const safeImages = images && images.length > 0 ? images : [];
  const current = safeImages[Math.min(active, safeImages.length - 1)];

  const close = useCallback(() => setZoomed(false), []);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  if (safeImages.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <ShowcaseImage
        src={current}
        alt={alt}
        aspect={aspect}
        fit={fit}
        onClick={lightbox ? () => setZoomed(true) : undefined}
      />

      {safeImages.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {safeImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border bg-slate-50 transition-all dark:bg-slate-800 ${
                i === active
                  ? "border-brand ring-2 ring-brand/40"
                  : "border-black/10 opacity-70 hover:opacity-100 dark:border-white/10"
              }`}
              aria-label={`view image ${i + 1}`}
            >
              <LazyImage
                src={img}
                alt={`${alt} thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {lightbox && zoomed && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <img
            src={current}
            alt={alt}
            className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border-none bg-white/15 text-2xl leading-none text-white hover:bg-white/25"
            aria-label="close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageShowcase;
