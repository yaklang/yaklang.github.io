import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {createPortal} from "react-dom";
import "./SearchButton.scss";
import {
  SOURCE_LABEL,
  SOURCE_SEARCHING_LABEL,
} from "@site/src/utils/search/types";
import {createSearchWorker} from "@site/src/utils/search/worker";
import type {
  PackageMeta,
  SearchResult,
  SearchSource,
  WorkerRequest,
  WorkerResponse,
} from "@site/src/utils/search/types";

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

// 索引/搜索的前端状态机
type IndexState =
  | { kind: "idle" }
  | { kind: "building"; done: number; total: number; currentSource: SearchSource; currentTitle: string }
  | { kind: "ready"; meta: PackageMeta }
  | { kind: "error"; message: string };

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

  // 在原 snippet 中找出所有命中区间(大小写不敏感), 输出带 <mark> 的 React 节点数组
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

  // 合并重叠区间
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

const SearchButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  // 仅在浏览器端通过 portal 渲染弹框，避免 SSR 阶段访问 document。
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [indexState, setIndexState] = useState<IndexState>({ kind: "idle" });
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);

  // worker 单例, 弹窗首次打开时创建
  const workerRef = useRef<Worker | null>(null);
  // 自增 reqId, 用于把异步 search 结果匹配到对应请求(避免旧请求覆盖新结果)
  const reqIdRef = useRef(0);
  // debounce timer
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // 输入框焦点
  const inputRef = useRef<HTMLInputElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 组件卸载时清理 worker 与 timer
  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
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

  // 打开弹窗后聚焦输入框
  useEffect(() => {
    if (open && inputRef.current) {
      // 延后到 portal 渲染完成
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  // 拉取 latest.json 并发起 ensureIndex
  const ensureIndex = useCallback(async () => {
    if (workerRef.current) return; // 已发起过
    let meta: PackageMeta;
    try {
      const resp = await fetch("/site-content/latest.json", { cache: "no-cache" });
      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }
      meta = (await resp.json()) as PackageMeta;
    } catch (err) {
      const message = err && (err as Error).message ? (err as Error).message : String(err);
      setIndexState({
        kind: "error",
        message: `无法加载搜索内容清单 (${message})`,
      });
      return;
    }

    try {
      const w = createSearchWorker();
      workerRef.current = w;
      w.onmessage = (ev: MessageEvent<WorkerResponse>) => {
        const msg = ev.data;
        if (msg.type === "indexProgress") {
          setIndexState({
            kind: "building",
            done: msg.done,
            total: msg.total,
            currentSource: msg.currentSource,
            currentTitle: msg.currentTitle,
          });
        } else if (msg.type === "indexReady") {
          setIndexState({ kind: "ready", meta: msg.meta });
          // 若用户已在等待结果(已输入查询), 立即触发一次搜索
          if (query.trim().length > 0) {
            runSearch(query.trim());
          }
        } else if (msg.type === "indexError") {
          setIndexState({
            kind: "error",
            message: `构建搜索索引失败: ${msg.message}`,
          });
        } else if (msg.type === "searchResults") {
          if (msg.reqId === reqIdRef.current) {
            setResults(msg.results);
            setSearching(false);
          }
        } else if (msg.type === "searchError") {
          if (msg.reqId === reqIdRef.current) {
            setResults([]);
            setSearching(false);
          }
        }
      };
      w.onerror = (e) => {
        setIndexState({
          kind: "error",
          message: `搜索 worker 错误: ${e.message || "unknown"}`,
        });
      };
      const req: WorkerRequest = { type: "ensureIndex", meta };
      w.postMessage(req);
      setIndexState({ kind: "building", done: 0, total: meta.count || 0, currentSource: "docs", currentTitle: "" });
    } catch (err) {
      const message = err && (err as Error).message ? (err as Error).message : String(err);
      setIndexState({
        kind: "error",
        message: `启动搜索失败: ${message}`,
      });
    }
    // query/runSearch 在下面定义, 此处不把它们放进 deps,
    // 否则每次输入都会重建 worker。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 打开弹窗即触发 ensureIndex, 让构建在用户输入前就开始
  useEffect(() => {
    if (open) {
      ensureIndex();
    }
  }, [open, ensureIndex]);

  const runSearch = useCallback((q: string) => {
    const w = workerRef.current;
    if (!w) return;
    if (q.trim().length === 0) {
      setResults([]);
      setSearching(false);
      return;
    }
    reqIdRef.current += 1;
    const reqId = reqIdRef.current;
    setSearching(true);
    const req: WorkerRequest = { type: "search", query: q, reqId };
    w.postMessage(req);
  }, []);

  // 输入 debounce 200ms 后发起搜索
  const onQueryChange = useCallback(
    (value: string) => {
      setQuery(value);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        runSearch(value.trim());
      }, 200);
    },
    [runSearch]
  );

  // 按来源分组的结果, 顺序按 GROUP_ORDER
  const grouped = useMemo(() => {
    const m = new Map<SearchSource, SearchResult[]>();
    for (const r of results) {
      const list = m.get(r.source) || [];
      list.push(r);
      m.set(r.source, list);
    }
    return GROUP_ORDER.map((s) => ({
      source: s,
      items: (m.get(s) || []).slice(0, MAX_PER_GROUP),
    })).filter((g) => g.items.length > 0);
  }, [results]);

  const progressPct = useMemo(() => {
    if (indexState.kind !== "building") return 0;
    const { done, total } = indexState;
    if (!total) return 0;
    return Math.min(100, Math.round((done / total) * 100));
  }, [indexState]);

  // 渲染状态条 / 结果区
  const renderBody = () => {
    // 索引错误态: 显示错误并保留输入框禁用
    if (indexState.kind === "error") {
      return (
        <div
          className="navbar-search-modal__status navbar-search-modal__status-error"
          role="alert"
        >
          {indexState.message}
        </div>
      );
    }

    // 构建中: 显示分阶段进度(满足"正在搜索文档 / Yakit 文档 / 技术博客"的展示需求)
    if (indexState.kind === "building") {
      const label = SOURCE_SEARCHING_LABEL[indexState.currentSource] || "正在搜索";
      const title = indexState.currentTitle || "…";
      const counter = indexState.total
        ? `${indexState.done}/${indexState.total}`
        : "…";
      return (
        <div className="navbar-search-modal__status">
          <div className="navbar-search-modal__status-line">
            <span className="navbar-search-modal__status-spinner" aria-hidden="true" />
            <span>{label}</span>
          </div>
          <div className="navbar-search-modal__status-line">
            <span style={{ marginLeft: 20, color: "var(--ifm-color-emphasis-700)" }}>
              {title}
            </span>
            <span style={{ marginLeft: "auto", color: "var(--ifm-color-emphasis-600)" }}>
              {counter}
            </span>
          </div>
          <div className="navbar-search-modal__progress" aria-hidden="true">
            <div
              className="navbar-search-modal__progress-bar"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      );
    }

    // 就绪态: 渲染结果
    if (indexState.kind !== "ready") return null;
    if (query.trim().length === 0) {
      return (
        <p className="navbar-search-modal__hint">
          输入关键词搜索全部 {SOURCE_LABEL.docs}、{SOURCE_LABEL.products} 与{" "}
          {SOURCE_LABEL.blog}。结果保存在本地，再次搜索无需联网。
        </p>
      );
    }
    if (searching && results.length === 0) {
      return (
        <p className="navbar-search-modal__empty">正在搜索…</p>
      );
    }
    if (results.length === 0) {
      return <p className="navbar-search-modal__empty">没有匹配的文档。</p>;
    }
    return (
      <div className="navbar-search-modal__results">
        {grouped.map((g) => (
          <div className="navbar-search-modal__group" key={g.source}>
            <p className="navbar-search-modal__group-title">
              {SOURCE_LABEL[g.source]}
            </p>
            {g.items.map((r) => (
              <a
                key={r.path}
                className="navbar-search-modal__result"
                href={r.path}
              >
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

  const inputDisabled =
    indexState.kind === "error" || indexState.kind === "building";

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
              indexState.kind === "ready"
                ? "搜索文档、Yakit 手册与技术博客"
                : "正在准备搜索索引…"
            }
            value={query}
            disabled={inputDisabled}
            onChange={(e) => onQueryChange(e.target.value)}
          />
          {renderBody()}
          {indexState.kind === "ready" && (
            <p className="navbar-search-modal__hint">
              索引建立于 {new Date(indexState.meta.generatedAt).toLocaleString()}，共{" "}
              {indexState.meta.count} 篇文档。
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

export default SearchButton;
