import { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomeLayout from "@site/src/components/homeNew/HomeLayout";
import HomePageNew from "@site/src/components/homeNew/HomePageNew";

export default function HomeNew() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // 旧首页采用固定 REM 布局（设计基准宽度 ~1232px）。
    // 通过按视口等比缩放根字号，使整页布局在大小屏/移动端等比适配，
    // 因所有尺寸（含 min-width）均为 rem，缩放后不会溢出也不会错位。
    const DESIGN_WIDTH = 1232;
    const applyRootFontSize = () => {
      const w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        DESIGN_WIDTH;
      const fs = w >= DESIGN_WIDTH ? 16 : (16 * w) / DESIGN_WIDTH;
      document.documentElement.style.fontSize = fs + "px";
      document.body.style.fontSize = fs + "px";
    };
    applyRootFontSize();
    const evt =
      "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, applyRootFontSize);
    return () => {
      window.removeEventListener(evt, applyRootFontSize);
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
      title={`Yak Project - ${siteConfig.title}`}
      description="广泛使用的开源网络安全基础设施"
    >
      <HomePageNew />
    </HomeLayout>
  );
}
