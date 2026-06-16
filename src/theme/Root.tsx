import React from "react";
// antd v5 在 React 19 下的兼容补丁，必须在应用入口尽早引入
import "@ant-design/v5-patch-for-react-19";
// 全局初始化 react-i18next，保证各页面组件的 useTranslation 可用
import "../i18n";

export default function Root({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
