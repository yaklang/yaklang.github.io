import React from "react";
// antd v5 在 React 19 下的兼容补丁，必须在应用入口尽早引入
import "@ant-design/v5-patch-for-react-19";
// 全局初始化 react-i18next，保证各页面组件的 useTranslation 可用
import "../i18n";
// 全局侧边栏搜索过滤(纯前端 DOM 过滤，覆盖所有文档与博客侧边栏)
import SidebarFilter from "./SidebarFilter";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarFilter />
      {children}
    </>
  );
}
