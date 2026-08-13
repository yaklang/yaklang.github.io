import { useEffect } from "react";
import HomeLayout from "@site/src/components/homeNew/HomeLayout";
import HomePageNew from "@site/src/components/homeNew/HomePageNew";
import { useTranslation } from "react-i18next";

export default function HomeNew() {
  const { t } = useTranslation();
  useEffect(() => {
    // 旧首页采用固定 REM 布局（设计基准宽度 ~1232px）。
    // 通过按视口等比缩放根字号，使整页布局在大小屏/移动端等比适配，
    // 因所有尺寸（含 min-width）均为 rem，缩放后不会溢出也不会错位。
    const DESIGN_WIDTH = 1232;
    const computeFontSize = () => {
      const w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        DESIGN_WIDTH;
      return w >= DESIGN_WIDTH ? 16 : (16 * w) / DESIGN_WIDTH;
    };
    // 首次同步设置，避免首屏闪烁
    const fs0 = computeFontSize();
    document.documentElement.style.fontSize = fs0 + "px";
    document.body.style.fontSize = fs0 + "px";
    // resize 期间用 rAF 合并多次事件，避免拖动窗口时高频改根字号
    // 引发整页 rem 布局反复 reflow 造成卡顿
    let rafId = null;
    const applyRootFontSize = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const fs = computeFontSize();
        document.documentElement.style.fontSize = fs + "px";
        document.body.style.fontSize = fs + "px";
      });
    };
    const evt =
      "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, applyRootFontSize, { passive: true });
    return () => {
      window.removeEventListener(evt, applyRootFontSize);
      if (rafId != null) cancelAnimationFrame(rafId);
      // 离开首页时恢复默认根字号，避免影响文档等其它页面
      document.documentElement.style.fontSize = "";
      document.body.style.fontSize = "";
    };
  }, []);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
    document.getElementsByTagName("body")[0].style.scrollBehavior = "smooth";
  }, []);
  useEffect(() => {
    window.onbeforeunload = () => {
      document.getElementsByTagName("html")[0].style.scrollBehavior = "auto";
      document.getElementsByTagName("body")[0].style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <HomeLayout
      title={t("SiteMetadata.home.title")}
      description={t("SiteMetadata.home.description")}
    >
      <HomePageNew />
    </HomeLayout>
  );
}
