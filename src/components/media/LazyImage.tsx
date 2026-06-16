import React, {
  useState,
  useEffect,
  useRef,
  type CSSProperties,
} from "react";

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
  placeholder?: string;
  onLoad?: () => void;
  // 首屏关键图片直接加载，跳过 IntersectionObserver
  priority?: boolean;
  draggable?: boolean;
}

// 懒加载图片组件
// - 使用 IntersectionObserver 实现进入视口再加载
// - 加载完成前显示骨架占位，避免布局跳动/错位
// - priority 用于首屏关键图片，立即加载
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = "",
  className = "",
  style = {},
  loading = "lazy",
  placeholder,
  onLoad,
  priority = false,
  draggable = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "120px", threshold: 0.01 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [priority]);

  // src 变化时重置加载状态（用于 hover 切换截图等场景）
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-slate-100 dark:bg-slate-800 animate-pulse"
          style={{
            backgroundImage: placeholder ? `url(${placeholder})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        draggable={draggable}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={style}
        loading={loading}
        onLoad={handleLoad}
        decoding="async"
      />
    </div>
  );
};

interface LazyBackgroundImageProps {
  imageUrl: string;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  priority?: boolean;
}

// 懒加载背景图组件，用于 background-image 的延迟加载
export const LazyBackgroundImage: React.FC<LazyBackgroundImageProps> = ({
  imageUrl,
  className = "",
  style = {},
  children,
  priority = false,
}) => {
  const [isInView, setIsInView] = useState(priority);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "120px", threshold: 0.01 }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={divRef}
      className={className}
      style={{
        ...style,
        backgroundImage: isInView ? `url(${imageUrl})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default LazyImage;
