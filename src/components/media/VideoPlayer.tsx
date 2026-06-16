import React, { useEffect, useRef, useState } from "react";

type AspectRatio = "16/9" | "16/10" | "4/3" | "auto";

const aspectClass: Record<AspectRatio, string> = {
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  auto: "",
};

interface VideoPlayerProps {
  src: string | string[];
  poster?: string;
  // 自动播放（需 muted 配合浏览器策略）
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  aspect?: AspectRatio;
  objectFit?: "cover" | "contain";
  // true 时整体填满父容器（用于固定高度场景），不使用 aspect 容器
  fill?: boolean;
}

// 统一视频组件：原生 <video> 封装
// - 进入视口才加载（IntersectionObserver），降低首屏负担
// - 支持自动播放循环静音的展示视频，也支持带海报点击播放的演示视频
// - 响应式 aspect 容器，消除固定百分比宽度造成的错位
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className = "",
  aspect = "16/9",
  objectFit = "cover",
  fill = false,
}) => {
  const sources = Array.isArray(src) ? src : [src];
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(autoPlay ? false : false);
  const [started, setStarted] = useState(autoPlay);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "150px", threshold: 0.01 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && autoPlay && videoRef.current) {
      const p = videoRef.current.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [inView, autoPlay]);

  const handlePlayClick = () => {
    setStarted(true);
    setTimeout(() => {
      const p = videoRef.current?.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }, 0);
  };

  const showPoster = !!poster && !autoPlay && !started;
  const wrapperAspect = fill ? "h-full" : aspectClass[aspect];

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl border border-black/5 bg-black/90 shadow-[0_12px_40px_rgba(0,0,0,0.18)] dark:border-white/10 ${wrapperAspect} ${className}`}
    >
      {showPoster ? (
        <button
          type="button"
          onClick={handlePlayClick}
          className="group absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center border-none bg-transparent p-0"
          aria-label="play video"
        >
          <img
            src={poster}
            alt="video poster"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-brand">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      ) : (
        inView && (
          <video
            ref={videoRef}
            className={`h-full w-full ${
              objectFit === "contain" ? "object-contain" : "object-cover"
            }`}
            poster={poster}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted || autoPlay}
            controls={controls}
            playsInline
            preload={autoPlay ? "auto" : "metadata"}
          >
            {sources.map((s) => (
              <source key={s} src={s} />
            ))}
          </video>
        )
      )}
    </div>
  );
};

export default VideoPlayer;
