import React from "react";
import Link from "@docusaurus/Link";
import {
  OPEN_SOURCE_PROJECTS,
  OpenSourceCards,
} from "@site/src/components/OpenSource";

interface Props {
  label?: string;
  to?: string;
  mobile?: boolean;
  onClick?: () => void;
  // 兼容 docusaurus 透传的其它字段
  [key: string]: unknown;
}

// 自定义导航项："开源" 下拉。
// - 桌面端：hover 展开 mega-menu，内含 Yak Project 全部开源项目的卡片，点击新标签打开。
// - 移动端：在抽屉里以分组列表呈现，每个项目一个外链。
// 所有项目链接都以真实 <a href> 输出（SSR），搜索引擎可抓取，SEO 友好。
export default function OpenSourceNavbarItem({
  label = "开源",
  to = "/opensource",
  mobile = false,
  onClick,
}: Props) {
  if (mobile) {
    return (
      <li className="menu__list-item os-nav-mobile">
        <Link className="menu__link" to={to} onClick={onClick}>
          {label}
        </Link>
        <ul className="menu__list">
          {OPEN_SOURCE_PROJECTS.map((p) => (
            <li className="menu__list-item" key={p.id}>
              <a
                className="menu__link os-nav-mobile__link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer external"
                onClick={onClick}
              >
                <span className="os-nav-mobile__name">{p.name}</span>
                <span className="os-nav-mobile__domain">{p.domain}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <div className="navbar__item dropdown dropdown--hoverable os-nav">
      <Link className="navbar__link" to={to} onClick={onClick}>
        {label}
      </Link>
      <div className="dropdown__menu os-megamenu">
        <div className="os-megamenu__head">
          <div className="os-megamenu__titles">
            <span className="os-megamenu__title">Yak Project 开源生态</span>
            <span className="os-megamenu__subtitle">
              语言、工具与 AI 安全的全部开源项目
            </span>
          </div>
          <Link className="os-megamenu__all" to={to}>
            查看全部 →
          </Link>
        </div>
        <OpenSourceCards variant="menu" />
      </div>
    </div>
  );
}
