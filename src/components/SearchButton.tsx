import React, {useCallback, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import "./SearchButton.scss";

// 全局导航栏的搜索按钮：点击后弹出搜索弹框。
// 目前弹框内为 TODO 占位，具体搜索逻辑（输入、结果、跳转）后续补充。
// 关键词: navbar search button, search modal, TODO placeholder
const SearchIcon = (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
  </svg>
);

const SearchButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  // 仅在浏览器端通过 portal 渲染弹框，避免 SSR 阶段访问 document。
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const modal = (
    <div
      className="navbar-search-modal"
      role="dialog"
      aria-modal="true"
      aria-label="搜索"
      onClick={close}
    >
      <div
        className="navbar-search-modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="navbar-search-modal__header">
          <span className="navbar-search-modal__title">搜索</span>
          <button
            type="button"
            className="navbar-search-modal__close"
            aria-label="关闭"
            onClick={close}
          >
            ×
          </button>
        </div>
        <div className="navbar-search-modal__body">
          {/* TODO: 在此实现搜索逻辑（输入框、搜索结果、跳转等），目前为占位。 */}
          <input
            className="navbar-search-modal__input"
            type="search"
            placeholder="TODO: 搜索功能待实现"
            disabled
          />
          <p className="navbar-search-modal__todo">
            TODO：搜索功能占位，稍后补充具体实现。
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="navbar-search-button"
        aria-label="搜索"
        title="搜索"
        onClick={() => setOpen(true)}
      >
        {SearchIcon}
        <span className="navbar-search-button__text">搜索</span>
      </button>
      {open && mounted ? createPortal(modal, document.body) : null}
    </>
  );
};

export default SearchButton;
