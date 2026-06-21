/*
 * src/utils/search/useSearchClient.ts
 *
 * 全局搜索客户端: 把 worker 生命周期 + React 状态收敛到一个 Context Provider,
 * 让 worker 不再跟随某个弹窗的挂载/卸载而终止。
 *
 * 关键设计:
 *   - Provider 在应用根挂载一次(Root.tsx), worker 在浏览器端首次需要时创建,
 *     此后即使所有消费者(SearchButton 等)卸载, worker 仍存活, 后台继续建索引。
 *   - SearchButton 只读取状态 + 发请求, 不再持有 worker。
 *   - 错误自恢复: 出错时不销毁 worker, UI 显示错误 + "重新构建"按钮,
 *     点击 rebuild 即可触发新一轮全流程。
 *
 * 关键词: search client, context provider, background index, rebuild
 */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createSearchWorker } from "./worker";
import type {
  IndexLogEntry,
  IndexPhase,
  IndexSummary,
  PackageMeta,
  SearchResult,
  WorkerRequest,
  WorkerResponse,
} from "./types";

// 单条活跃阶段的进度快照(UI 用来渲染进度条 / 预测时间)
export interface PhaseProgress {
  phase: IndexPhase;
  done: number;
  total: number;
  currentSource?: string;
  currentTitle?: string;
  elapsedMs?: number;
  etaMs?: number;
}

// 客户端对外暴露的统一状态
export interface SearchClientState {
  // 索引生命周期阶段: idle 表示尚未启动; building 表示正在跑任一阶段;
  // ready 表示可用; error 表示失败(可重建)。
  status: "idle" | "building" | "ready" | "error";
  // 当前阶段(prepare/download/parse/tokenize/store/finalize)
  phase?: IndexPhase;
  // 当前阶段的进度快照(只在该阶段有可量化进度时存在)
  progress?: PhaseProgress;
  // 已就绪时的索引元信息与摘要
  meta?: PackageMeta;
  summary?: IndexSummary;
  // 错误信息(status === error 时存在)
  errorMessage?: string;
  // 全部日志条目(UI 渲染日志区, 透明可见)
  logs: IndexLogEntry[];
  // 最近一次搜索结果 + 是否在搜索中
  results: SearchResult[];
  searching: boolean;
}

interface SearchClientApi extends SearchClientState {
  // 弹窗打开/激活时调用: 触发 ensureIndex(若未启动)
  ensureIndex: () => void;
  // 强制重建(忽略已有版本, 清库后重跑)
  rebuild: () => void;
  // 发起一次搜索
  search: (query: string) => void;
  // 清空当前搜索结果
  clearResults: () => void;
}

const Ctx = createContext<SearchClientApi | null>(null);

// 限制日志条数避免内存膨胀(足够展示透明度, 又不会爆)
const MAX_LOGS = 200;

export function SearchWorkerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<SearchClientState>({
    status: "idle",
    logs: [],
    results: [],
    searching: false,
  });

  // worker 单例 ref(在浏览器端懒创建)
  const workerRef = useRef<Worker | null>(null);
  // 最新 meta(SW 上报就绪时存)
  const metaRef = useRef<PackageMeta | null>(null);
  // 搜索请求 ID 自增
  const reqIdRef = useRef(0);
  // 日志追加 helper(用 setState 的函数式更新避免闭包旧值)
  const appendLog = useCallback((log: IndexLogEntry) => {
    setState((s) => {
      const logs = s.logs.concat(log);
      if (logs.length > MAX_LOGS) {
        logs.splice(0, logs.length - MAX_LOGS);
      }
      return { ...s, logs };
    });
  }, []);

  // 创建 worker 并挂 onmessage。仅做一次。
  const ensureWorker = useCallback((): Worker | null => {
    if (typeof window === "undefined") return null;
    if (workerRef.current) return workerRef.current;
    let w: Worker;
    try {
      w = createSearchWorker();
    } catch (err) {
      const message =
        err && (err as Error).message ? (err as Error).message : String(err);
      setState((s) => ({
        ...s,
        status: "error",
        errorMessage: `无法启动搜索 worker: ${message}`,
      }));
      return null;
    }
    workerRef.current = w;
    w.onmessage = (ev: MessageEvent<WorkerResponse>) => {
      const msg = ev.data;
      switch (msg.type) {
        case "indexPhase":
          setState((s) => ({
            ...s,
            status: "building",
            phase: msg.phase,
            progress: undefined, // 阶段切换时清掉旧进度, 等第一条 indexProgress
            errorMessage: undefined,
          }));
          break;
        case "indexProgress":
          setState((s) => ({
            ...s,
            status: "building",
            phase: msg.phase,
            progress: {
              phase: msg.phase,
              done: msg.done,
              total: msg.total,
              currentSource: msg.currentSource,
              currentTitle: msg.currentTitle,
              elapsedMs: msg.elapsedMs,
              etaMs: msg.etaMs,
            },
          }));
          break;
        case "indexLog":
          appendLog(msg.log);
          break;
        case "indexReady":
          setState((s) => ({
            ...s,
            status: "ready",
            phase: "ready",
            progress: undefined,
            meta: msg.meta,
            summary: msg.summary,
            errorMessage: undefined,
          }));
          // 若用户已在等待搜索结果, 自动回放一次
          if (lastQueryRef.current && lastQueryRef.current.trim().length > 0) {
            doSearch(lastQueryRef.current);
          }
          break;
        case "indexError":
          setState((s) => ({
            ...s,
            status: "error",
            errorMessage: msg.message,
          }));
          break;
        case "searchResults":
          if (msg.reqId === reqIdRef.current) {
            setState((s) => ({
              ...s,
              results: msg.results,
              searching: false,
            }));
          }
          break;
        case "searchError":
          if (msg.reqId === reqIdRef.current) {
            setState((s) => ({
              ...s,
              results: [],
              searching: false,
            }));
          }
          break;
        default:
          break;
      }
    };
    w.onerror = (e) => {
      setState((s) => ({
        ...s,
        status: "error",
        errorMessage: `搜索 worker 异常: ${e.message || "unknown"}`,
      }));
    };
    return w;
  }, [appendLog]);

  // 拉取 latest.json 并发 ensureIndex。仅当 worker 未启动过时执行。
  // 同一 worker 实例下重复调用会被 worker 内部"已有相同版本"逻辑短路。
  const lastQueryRef = useRef<string>("");
  const doSearch = useCallback((query: string) => {
    lastQueryRef.current = query;
    const w = workerRef.current;
    if (!w) return;
    const q = query.trim();
    if (q.length === 0) {
      setState((s) => ({ ...s, results: [], searching: false }));
      return;
    }
    reqIdRef.current += 1;
    const reqId = reqIdRef.current;
    setState((s) => ({ ...s, searching: true }));
    const req: WorkerRequest = { type: "search", query: q, reqId };
    w.postMessage(req);
  }, []);

  const ensureIndex = useCallback(() => {
    const w = ensureWorker();
    if (!w) return;
    // 已在 building/ready 则不重复发(避免重复 ensureIndex 请求)
    setState((s) => {
      if (s.status === "building" || s.status === "ready") return s;
      return { ...s, status: "building", phase: "prepare", progress: undefined };
    });
    // 异步拉 meta
    (async () => {
      let meta: PackageMeta;
      try {
        const resp = await fetch("/site-content/latest.json", {
          cache: "no-cache",
        });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        meta = (await resp.json()) as PackageMeta;
      } catch (err) {
        const message =
          err && (err as Error).message ? (err as Error).message : String(err);
        setState((s) => ({
          ...s,
          status: "error",
          errorMessage: `无法加载搜索内容清单 (${message})`,
        }));
        return;
      }
      metaRef.current = meta;
      const req: WorkerRequest = { type: "ensureIndex", meta };
      w.postMessage(req);
    })();
  }, [ensureWorker]);

  const rebuild = useCallback(() => {
    const w = ensureWorker();
    if (!w) return;
    setState((s) => ({
      ...s,
      status: "building",
      phase: "prepare",
      progress: undefined,
      errorMessage: undefined,
      logs: [], // 重建时清掉旧日志, 让用户清晰看到本次过程
      results: [],
    }));
    (async () => {
      let meta = metaRef.current;
      if (!meta) {
        try {
          const resp = await fetch("/site-content/latest.json", {
            cache: "no-cache",
          });
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
          meta = (await resp.json()) as PackageMeta;
          metaRef.current = meta;
        } catch (err) {
          const message =
            err && (err as Error).message ? (err as Error).message : String(err);
          setState((s) => ({
            ...s,
            status: "error",
            errorMessage: `无法加载搜索内容清单 (${message})`,
          }));
          return;
        }
      }
      const req: WorkerRequest = { type: "rebuild", meta };
      w.postMessage(req);
    })();
  }, [ensureWorker]);

  const clearResults = useCallback(() => {
    setState((s) => ({ ...s, results: [], searching: false }));
  }, []);

  // 卸载时终止 worker(整站关闭场景)
  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  const api: SearchClientApi = useMemo(
    () => ({
      ...state,
      ensureIndex,
      rebuild,
      search: doSearch,
      clearResults,
    }),
    [state, ensureIndex, rebuild, doSearch, clearResults]
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useSearchClient(): SearchClientApi {
  const v = useContext(Ctx);
  if (!v) {
    throw new Error("useSearchClient must be used within SearchWorkerProvider");
  }
  return v;
}
