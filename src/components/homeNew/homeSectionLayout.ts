/** 顶部导航栏高度（px），整屏可用区域 = 视口高度 − 此值 */
export const HOME_NAVBAR_HEIGHT = 80;

/**
 * 首页统一版心（老样式，勿改动，首页走 rem 等比缩放的旧设计）：
 * - < 756px：左右留白 20px，中间 fill
 * - 756px–1023px：左右留白 40px，中间 fill
 * - 1024px–1359px：左右留白 80px，中间 fill
 * - 1360px–1439px：固定 1152px 居中
 * - 1440px–1679px：固定 1280px 居中
 * - ≥ 1680px：固定 1440px 居中
 */
export const HOME_CONTAINER_CLASS =
  "mx-auto box-border w-full px-[20px] min-[756px]:px-[40px] min-[1024px]:px-[80px] min-[1360px]:max-w-[1152px] min-[1360px]:px-0 min-[1440px]:max-w-[1280px] min-[1680px]:max-w-[1440px]";

/**
 * 文档/博客页版心（新样式）：
 * - < 756px：左右留白 20px，中间 fill
 * - ≥ 756px：内容最大 1440px 居中，左右最小留白 10px；
 *   视口不足 1460px 时按 calc(100% - 20px) 自动铺开，超过则展开为 1440px 居中
 * 与 docs-layout.scss / blog.scss 的 shell 版心保持一致。
 */
export const DOCS_CONTAINER_CLASS =
  "mx-auto box-border w-full px-[20px] min-[756px]:max-w-[min(1440px,calc(100%_-_40px))] min-[756px]:px-0";

/**
 * 整屏区块：在可用区域内垂直居中标题+内容。
 * 顶栏为浮层；外层 flex-1 + justify-center 做视觉居中。
 * 高度不够时上下至少保留 40px 间距。
 */
export const HOME_SECTION_CENTER_CLASS =
  "flex min-h-0 flex-1 flex-col justify-center py-[40px] pt-[80px]";

/** @deprecated 改用 HOME_SECTION_CENTER_CLASS */
export const HOME_SECTION_TOP_CLASS = "pt-[120px]";
