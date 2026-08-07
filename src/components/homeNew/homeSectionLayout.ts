/** 顶部导航栏高度（px），整屏可用区域 = 视口高度 − 此值 */
export const HOME_NAVBAR_HEIGHT = 80;

/**
 * 首页统一版心：
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
 * 整屏区块：在可用区域内垂直居中标题+内容。
 * 顶栏为浮层；外层 flex-1 + justify-center 做视觉居中。
 * 高度不够时上下至少保留 40px 间距。
 */
export const HOME_SECTION_CENTER_CLASS =
  "flex min-h-0 flex-1 flex-col justify-center py-[40px] pt-[80px]";

/** @deprecated 改用 HOME_SECTION_CENTER_CLASS */
export const HOME_SECTION_TOP_CLASS = "pt-[120px]";
