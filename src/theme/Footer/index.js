/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import HomeFooter from "../../components/homeNew/HomeFooter";

/**
 * 全局 Footer 包装器：
 * - 使用新版 HomeFooter 替换旧版 footer。
 * - HomeThemeProvider 已在 Root.tsx 全局注入，footer 直接使用全局主题状态即可。
 */
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  return <HomeFooter withTopBorder />;
}

export default Footer;
