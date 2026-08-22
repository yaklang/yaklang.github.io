import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// antd v5 在 React 19 下的兼容补丁，必须在应用入口尽早引入
import "@ant-design/v5-patch-for-react-19";
// 全局初始化 react-i18next，保证各页面组件的 useTranslation 可用
import i18n from "../i18n";
// 全局侧边栏搜索过滤(纯前端 DOM 过滤，覆盖所有文档与博客侧边栏)
import SidebarFilter from "./SidebarFilter";
// 全局搜索 worker Provider: 让 worker 在应用根挂载一次,
// 弹窗关闭后仍可后台构建索引, 多个消费者共享同一份状态。
import { SearchWorkerProvider } from "@site/src/utils/search/useSearchClient";
// 新版首页主题 Provider：全站生效，控制 data-theme 属性（亮/暗色）
import { HomeThemeProvider } from "@site/src/components/homeNew/HomeThemeContext";

// 注册前端搜索专用 Service Worker, 缓存 /site-content/latest.zip 等。
// 静默失败: SW 不可用时不影响任何页面功能, 仅搜索可能多消耗一次网络请求。
// 关键词: service worker register, search cache
function useRegisterSearchSw() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    // baseUrl 为 "/", SW 必须在根作用域注册才能拦截 /site-content/*
    const register = () => {
      navigator.serviceWorker
        .register("/sw-search.js", { scope: "/" })
        .catch((err) => {
          // 静默降级: SW 失败不抛错, 仅打 console.warn 便于排查
          // eslint-disable-next-line no-console
          console.warn("[search] service worker register failed:", err);
        });
    };
    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);
}

export default function Root({ children }: { children: React.ReactNode }) {
  const { i18n: docusaurusI18n } = useDocusaurusContext();
  // Docusaurus 在构建期为 /en/ 单独 SSR；同步 locale 才能让 react-i18next
  // 输出英文文案，而不是把中文首页错误标记为 hreflang="en"。
  const locale = docusaurusI18n.currentLocale?.startsWith("en") ? "en" : "zh";
  if (i18n.language !== locale) {
    void i18n.changeLanguage(locale);
  }
  useRegisterSearchSw();
  return (
    <HomeThemeProvider>
      <SearchWorkerProvider>
        <SidebarFilter />
        {children}
      </SearchWorkerProvider>
    </HomeThemeProvider>
  );
}
