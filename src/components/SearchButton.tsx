import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./SearchButton.scss";
import {
  PHASE_LABEL,
  SOURCE_LABEL,
  SOURCE_SEARCHING_LABEL,
} from "@site/src/utils/search/types";
import type {
  IndexLogEntry,
  SearchResult,
  SearchSource,
} from "@site/src/utils/search/types";
import { useSearchClient } from "@site/src/utils/search/useSearchClient";

// 分组顺序与顶部 navbar 一致
const GROUP_ORDER: SearchSource[] = ["docs", "products", "blog"];
// 每组最多展示的条数, 避免长列表撑爆弹窗
const MAX_PER_GROUP = 8;

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

// 毫秒 -> 人类可读时长
function fmtDuration(ms?: number): string {
  if (!ms || !isFinite(ms) || ms < 0) return "";
  const s = ms / 1000;
  if (s < 1) return `${Math.round(ms)} 毫秒`;
  if (s < 60) return `${s.toFixed(1)} 秒`;
  const m = Math.floor(s / 60);
  const rs = Math.round(s - m * 60);
  return `${m} 分 ${rs} 秒`;
}

// 字节数 -> 人类可读
function fmtBytes(n?: number): string {
  if (!n || n < 0) return "";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

// 弹窗中渲染 snippet: 把命中的 query 子串用 <mark> 包起来。
// 这里做最简单的处理: 把 query 按空白切分(中文无空白时整段当一个 token),
// 在 snippet 中按出现位置标记高亮, 避免正则元字符注入。
function HighlightedSnippet({ text, query }: { text: string; query: string }) {
  const needles = useMemo(() => {
    const parts = query
      .toLowerCase()
      .split(/\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length >= 1);
    return Array.from(new Set(parts));
  }, [query]);

  if (needles.length === 0) {
    return <>{text}</>;
  }

  const lower = text.toLowerCase();
  const ranges: Array<[number, number]> = [];
  for (const n of needles) {
    let from = 0;
    while (from <= lower.length) {
      const idx = lower.indexOf(n, from);
      if (idx < 0) break;
      ranges.push([idx, idx + n.length]);
      from = idx + n.length;
    }
  }
  if (ranges.length === 0) return <>{text}</>;
  ranges.sort((a, b) => a[0] - b[0]);

  const merged: Array<[number, number]> = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) {
      last[1] = Math.max(last[1], r[1]);
    } else {
      merged.push([r[0], r[1]]);
    }
  }

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  merged.forEach((r, i) => {
    if (r[0] > cursor) {
      nodes.push(<span key={`t-${i}`}>{text.slice(cursor, r[0])}</span>);
    }
    nodes.push(<mark key={`m-${i}`}>{text.slice(r[0], r[1])}</mark>);
    cursor = r[1];
  });
  if (cursor < text.length) {
    nodes.push(<span key="t-end">{text.slice(cursor)}</span>);
  }
  return <>{nodes}</>;
}

// 日志条目按 level 着色
function logLevelClass(level: IndexLogEntry["level"]): string {
  return `navbar-search-modal__log-line--${level}`;
}

const SearchButton: React.FC = () => {
  const client = useSearchClient();
  const [open, setOpen] = useState(false);
  // 仅在浏览器端通过 portal 渲染弹框，避免 SSR 阶段访问 document。
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // 日志区自动滚到底
  const logEndRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 组件卸载时清 debounce timer(worker 由 Provider 持有, 不在这里 terminate)
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // 打开弹窗后聚焦输入框 + 触发 ensureIndex(若未启动)
  useEffect(() => {
    if (open) {
      client.ensureIndex();
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
    return undefined;
    // ensureIndex 内部已幂等, 这里只在 open 切换时触发
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // 日志区滚动到最新
  useEffect(() => {
    if (open && logEndRef.current) {
      logEndRef.current.scrollTop = logEndRef.current.scrollHeight;
    }
  }, [open, client.logs.length]);

  // 输入 debounce 200ms 后发起搜索
  const onQueryChange = (value: string) => {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      client.search(value);
    }, 200);
  };

  // 按来源分组的结果, 顺序按 GROUP_ORDER
  const grouped = useMemo(() => {
    const m = new Map<SearchSource, SearchResult[]>();
    for (const r of client.results) {
      const list = m.get(r.source) || [];
      list.push(r);
      m.set(r.source, list);
    }
    return GROUP_ORDER.map((s) => ({
      source: s,
      items: (m.get(s) || []).slice(0, MAX_PER_GROUP),
    })).filter((g) => g.items.length > 0);
  }, [client.results]);

  // 进度百分比: download/parse/tokenize/store 都用 done/total。
  // download 阶段 total 是字节数(很大), 直接换算成百分比即可。
  const progressPct = useMemo(() => {
    const p = client.progress;
    if (!p) return 0;
    if (!p.total) return 0;
    return Math.min(100, Math.round((p.done / p.total) * 100));
  }, [client.progress]);

  // 当前阶段展示文案
  const phaseLabel = useMemo(() => {
    if (!client.phase) return "";
    if (
      client.phase === "tokenize" &&
      client.progress?.currentSource &&
      SOURCE_SEARCHING_LABEL[client.progress.currentSource as SearchSource]
    ) {
      return SOURCE_SEARCHING_LABEL[client.progress.currentSource as SearchSource];
    }
    return PHASE_LABEL[client.phase] || "";
  }, [client.phase, client.progress]);

  // 阶段副标题(当前处理的文档/字节计数等)
  const phaseSubline = useMemo(() => {
    const p = client.progress;
    if (!p) return "";
    if (client.phase === "download") {
      const totalStr = p.total ? ` / ${fmtBytes(p.total)}` : "";
      return `${fmtBytes(p.done)}${totalStr}`;
    }
    if (client.phase === "tokenize") {
      const title = p.currentTitle ? ` · ${truncate(p.currentTitle, 36)}` : "";
      return `${p.done}/${p.total}${title}`;
    }
    if (p.total) {
      return `${p.done}/${p.total}`;
    }
    return "";
  }, [client.phase, client.progress]);

  // 预测时间提示: 优先 eta, 其次 elapsed; 都没有就空
  const etaLine = useMemo(() => {
    const p = client.progress;
    if (!p) return "";
    const parts: string[] = [];
    if (p.elapsedMs) parts.push(`已用 ${fmtDuration(p.elapsedMs)}`);
    if (p.etaMs && p.etaMs > 0) parts.push(`预计剩余 ${fmtDuration(p.etaMs)}`);
    return parts.join(" · ");
  }, [client.progress]);

  // 构建过程透明日志区: 取最近 30 条, 倒序展示(最新在底部, 配合自动滚)
  const recentLogs = useMemo(() => client.logs.slice(-30), [client.logs]);

  // ---------- 渲染状态条 / 结果区 ----------
  const renderBody = () => {
    // 错误态: 显示错误 + 重新构建按钮
    if (client.status === "error") {
      return (
        <div className="navbar-search-modal__status navbar-search-modal__status-error" role="alert">
          <div className="navbar-search-modal__status-line">
            <span>{client.errorMessage || "未知错误"}</span>
          </div>
          <button
            type="button"
            className="navbar-search-modal__rebuild-btn"
            onClick={() => client.rebuild()}
          >
            重新构建
          </button>
        </div>
      );
    }

    // 构建中: 显示分阶段进度
    if (client.status === "building") {
      return (
        <div className="navbar-search-modal__status">
          <div className="navbar-search-modal__status-line">
            <span className="navbar-search-modal__status-spinner" aria-hidden="true" />
            <span className="navbar-search-modal__status-phase">
              {phaseLabel || "正在准备…"}
            </span>
          </div>
          {(phaseSubline || etaLine) && (
            <div className="navbar-search-modal__status-line navbar-search-modal__status-sub">
              {phaseSubline && <span>{phaseSubline}</span>}
              {etaLine && (
                <span className="navbar-search-modal__status-eta">{etaLine}</span>
              )}
            </div>
          )}
          <div className="navbar-search-modal__progress" aria-hidden="true">
            <div
              className="navbar-search-modal__progress-bar"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="navbar-search-modal__log" role="log" aria-live="polite">
            {recentLogs.map((l, i) => (
              <div key={i} className={`navbar-search-modal__log-line ${logLevelClass(l.level)}`}>
                <span className="navbar-search-modal__log-time">{formatLogTs(l.ts)}</span>
                <span className="navbar-search-modal__log-msg">{l.message}</span>
              </div>
            ))}
            <div ref={logEndRef} />
          </div>
          <div className="navbar-search-modal__status-hint">
            可关闭此弹窗, 构建会在后台继续; 完成后再次打开即可使用搜索。
          </div>
        </div>
      );
    }

    // 就绪态
    if (client.status !== "ready") return null;
    if (query.trim().length === 0) {
      return (
        <>
          <p className="navbar-search-modal__hint">
            输入关键词搜索全部 {SOURCE_LABEL.docs}、{SOURCE_LABEL.products} 与{" "}
            {SOURCE_LABEL.blog}。结果保存在本地，再次搜索无需联网。
          </p>
          {client.summary && (
            <p className="navbar-search-modal__hint navbar-search-modal__hint--muted">
              本地索引: {client.summary.docs} 篇 / {client.summary.postings} 词项,
              构建耗时 {fmtDuration(client.summary.durationMs)}。
              <button
                type="button"
                className="navbar-search-modal__rebuild-link"
                onClick={() => client.rebuild()}
              >
                重新构建
              </button>
            </p>
          )}
        </>
      );
    }
    if (client.searching && client.results.length === 0) {
      return <p className="navbar-search-modal__empty">正在搜索…</p>;
    }
    if (client.results.length === 0) {
      return <p className="navbar-search-modal__empty">没有匹配的文档。</p>;
    }
    return (
      <div className="navbar-search-modal__results">
        {grouped.map((g) => (
          <div className="navbar-search-modal__group" key={g.source}>
            <p className="navbar-search-modal__group-title">{SOURCE_LABEL[g.source]}</p>
            {g.items.map((r) => (
              <a key={r.path} className="navbar-search-modal__result" href={r.path}>
                <p className="navbar-search-modal__result-title">{r.title}</p>
                <p className="navbar-search-modal__result-snippet">
                  <HighlightedSnippet text={r.snippet} query={query.trim()} />
                </p>
              </a>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const inputDisabled = client.status === "error" || client.status === "building";

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
          <input
            ref={inputRef}
            className="navbar-search-modal__input"
            type="search"
            placeholder={
              client.status === "ready"
                ? "搜索文档、Yakit 手册与技术博客"
                : client.status === "building"
                ? `${PHASE_LABEL[client.phase || "prepare"]}…`
                : "正在准备搜索索引…"
            }
            value={query}
            disabled={inputDisabled}
            onChange={(e) => onQueryChange(e.target.value)}
          />
          {renderBody()}
          {client.status === "ready" && client.meta && !client.summary && (
            <p className="navbar-search-modal__hint">
              索引建立于 {new Date(client.meta.generatedAt).toLocaleString()},
              共 {client.meta.count} 篇文档。
            </p>
          )}
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

// ---------- 小工具函数 ----------

function truncate(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n) + "…";
}

function formatLogTs(ts: number): string {
  const d = new Date(ts);
  const pad = (x: number) => String(x).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export default SearchButton;
