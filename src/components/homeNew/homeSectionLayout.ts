/** 顶部导航栏高度（px），整屏可用区域 = 视口高度 − 此值 */
export const HOME_NAVBAR_HEIGHT = 80;

/**
 * 首页统一版心：
 * - < 768px：全宽 + 16px 左右边距
 * - 768px–1023px：全宽 + 20px 左右边距
 * - 1024px–1279px：全宽 + 40px 左右边距
 * - ≥ 1280px：最大 1280px，无额外边距（居中）
 */
export const HOME_CONTAINER_CLASS =
  "mx-auto box-border w-full px-[16px] md:px-[20px] lg:px-[40px] xl:max-w-[1280px] xl:px-[0]";

/**
 * 整屏区块：在可用区域内垂直居中标题+内容。
 * 顶栏为浮层；外层 flex-1 + justify-center 做视觉居中。
 * 高度不够时上下至少保留 40px 间距。
 */
export const HOME_SECTION_CENTER_CLASS =
  "flex min-h-0 flex-1 flex-col justify-center py-[40px]";

/** @deprecated 改用 HOME_SECTION_CENTER_CLASS */
export const HOME_SECTION_TOP_CLASS = "pt-[120px]";
