import React, {
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

// 统一文档插图：圆角卡片包装 + 居中 + 固定最大宽度 + 点击放大(lightbox)
// 与 memfit-home 的版式保持一致，让全站截图更整齐、更现代
// 关键词: 图片圆角包装, 点击放大, lightbox, 文档插图统一样式

// 等价于 @theme/MDXComponents/Img 的 Props（即原生 img 属性），
// 直接从 React 推导以避免依赖构建期生成的 @theme 类型别名
type Props = React.ComponentProps<"img">;

type ImageLayout = "standard" | "narrow" | "tall";

function getNumericDimension(value: Props["width"]): number {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    return Number.parseFloat(value);
  }
  return 0;
}

function getImageLayout(width: number, height: number): ImageLayout {
  if (width <= 0 || height <= 0) {
    return "standard";
  }
  const ratio = width / height;
  // 竖长图：折叠展示，避免占满整屏
  if ((ratio < 0.9 && height >= 900) || height / width >= 1.45) {
    return "tall";
  }
  // 接近正方形或偏窄：收窄宽度更协调
  if (ratio < 0.95) {
    return "narrow";
  }
  return "standard";
}

export default function MDXImg(props: Props): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState<ImageLayout>(() =>
    getImageLayout(
      getNumericDimension(props.width),
      getNumericDimension(props.height)
    )
  );
  const { className, onLoad, ...imgProps } = props;
  const altText =
    typeof imgProps.alt === "string" && imgProps.alt.length > 0
      ? imgProps.alt
      : "文档插图";

  const handleLoad = useCallback<React.ReactEventHandler<HTMLImageElement>>(
    (event) => {
      const image = event.currentTarget;
      setLayout(getImageLayout(image.naturalWidth, image.naturalHeight));
      onLoad?.(event);
    },
    [onLoad]
  );

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") {
      return undefined;
    }
    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const lightbox =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className="yakdoc-lightbox"
            data-layout={layout}
            role="dialog"
            aria-modal="true"
            aria-label={altText}
            onClick={(event) => {
              if (event.currentTarget === event.target) {
                setIsOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="yakdoc-lightbox__close"
              aria-label="关闭预览"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              decoding="async"
              loading="eager"
              {...imgProps}
              alt={altText}
              className="yakdoc-lightbox__image"
            />
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="yakdoc-figure"
        data-layout={layout}
        aria-label={`点击放大: ${altText}`}
        onClick={() => setIsOpen(true)}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          decoding="async"
          loading="lazy"
          {...imgProps}
          onLoad={handleLoad}
          className={clsx("yakdoc-image", className)}
        />
        {layout === "tall" && (
          <span className="yakdoc-expand-hint" aria-hidden="true">
            <span className="yakdoc-expand-hint__text">长图已折叠</span>
            <span className="yakdoc-expand-hint__button">点击展开</span>
          </span>
        )}
      </button>
      {lightbox}
    </>
  );
}
