/*
 * src/utils/search/worker.ts
 *
 * 搜索 Worker: 主线程与 IDB/索引之间的唯一通道。
 *   - 入口: 通过 `createSearchWorker()` 创建 Worker 实例
 *   - worker 内部 self.onmessage 处理三种请求:
 *       ensureIndex(meta): 检查版本, 必要时下载 zip + 建索引 + 写 IDB
 *       rebuild(meta):    强制清空 IDB 后重跑全流程(用于"重新构建"按钮)
 *       search(query, reqId): 分词 -> 查 IDB postings -> TF-IDF 排序
 *
 * 全流程切成有序阶段(prepare/download/parse/tokenize/store/finalize),
 * 每个阶段都向主线程上报 indexPhase + indexProgress + indexLog,
 * 让 UI 能渲染"准备开始构建 / 正在下载 / 解析内容 / 建立倒排 / 正在存储 / 收尾中"
 * 的细粒度进度、预测耗时与透明日志。
 *
 * 主线程不发 fetch、不碰 IDB, 全部交 worker 处理, 避免阻塞 UI。
 * 主线程把 worker 提升到全局 Provider 单例后, 即使弹窗关闭 worker 仍存活,
 * 后台继续把索引建完, 下次打开直接 ready。
 *
 * 关键词: search worker, postMessage protocol, ensureIndex, phase progress
 */
import { getSearchDb } from "./db";
import {
  buildInvertedIndex,
  fetchPackageZip,
  parsePackageZip,
  tokenize,
} from "./indexer";
import { rankResults } from "./query";
import type {
  IndexLogEntry,
  IndexPhase,
  IndexSummary,
  IndexedDoc,
  PackageMeta,
  PostingEntry,
  WorkerRequest,
  WorkerResponse,
} from "./types";

// ---------- worker 端: 全局状态 ----------
//
// indexingInFlight: 当前正在跑的构建 Promise。search 请求到来时若它非空,
//   会先 await 它, 避免在半建库状态查询。
// totalDocs: 建库后缓存的文档数, 查询时用于 idf。
// lastSummary: 最近一次成功构建的摘要, ready 事件里带回去。
let indexingInFlight: Promise<void> | null = null;
let totalDocs = 0;
let lastSummary: IndexSummary | null = null;

// ---------- worker -> 主线程 的辅助发送函数 ----------

function postFromWorker(msg: WorkerResponse) {
  (self as unknown as Worker).postMessage(msg);
}

function postPhase(phase: IndexPhase, total?: number, detail?: string) {
  postFromWorker({ type: "indexPhase", phase, total, detail });
}

function postProgress(
  phase: IndexPhase,
  done: number,
  total: number,
  extra: {
    currentSource?: IndexedDoc["source"];
    currentTitle?: string;
    elapsedMs?: number;
    etaMs?: number;
  } = {}
) {
  postFromWorker({
    type: "indexProgress",
    phase,
    done,
    total,
    ...extra,
  });
}

function postLog(
  phase: IndexPhase,
  level: IndexLogEntry["level"],
  message: string
) {
  const log: IndexLogEntry = { ts: Date.now(), level, phase, message };
  postFromWorker({ type: "indexLog", log });
}

// 把毫秒格式化为人类可读的"X 秒 / X 分 Y 秒", 用于日志与 UI 预测提示
function fmtDuration(ms: number): string {
  if (!isFinite(ms) || ms < 0) return "未知";
  const s = ms / 1000;
  if (s < 1) return `${Math.round(ms)} 毫秒`;
  if (s < 60) return `${s.toFixed(1)} 秒`;
  const m = Math.floor(s / 60);
  const rs = Math.round(s - m * 60);
  return `${m} 分 ${rs} 秒`;
}
// 导出供单测/主线程复用(主线程格式化已用时间也用同一份逻辑)
// 通过挂到 postFromWorker 上不合适, 单独导出一个全局函数
export const __fmtDuration = fmtDuration;

// 把字节数格式化为 "1.2 MB"
function fmtBytes(n: number): string {
  if (!isFinite(n) || n < 0) return "未知";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

// ---------- 核心构建流程 ----------
//
// force=true 表示强制重建(忽略版本匹配, 先清库再走全流程)。
// 全程通过 postPhase/postProgress/postLog 把每一步透明上报。
async function buildIndex(
  meta: PackageMeta,
  force: boolean
): Promise<void> {
  const tStart = Date.now();
  const db = getSearchDb();

  // --- 阶段 1: prepare ---
  postPhase("prepare", undefined, "比对本地版本");
  postLog("prepare", "info", `目标版本: ${meta.id} (${meta.zipName})`);
  if (!force) {
    const existing = await db.getVersion();
    if (existing && existing.id === meta.id) {
      totalDocs = meta.count || 0;
      lastSummary = null;
      postLog(
        "prepare",
        "info",
        `本地已有相同版本(${existing.id}), 跳过构建`
      );
      postFromWorker({
        type: "indexReady",
        meta: existing,
        rebuilt: false,
        summary: undefined,
      });
      return;
    }
    if (existing) {
      postLog(
        "prepare",
        "info",
        `本地版本 ${existing.id} 已过期, 将重新构建`
      );
    } else {
      postLog("prepare", "info", "本地无索引, 首次构建");
    }
  } else {
    postLog("prepare", "warn", "收到重新构建请求, 清空本地索引");
    await db.clearAll();
  }
  postLog("prepare", "info", `预计处理 ${meta.count} 篇文档 / ${fmtBytes(meta.sizeBytes)}`);

  // --- 阶段 2: download ---
  postPhase("download", meta.sizeBytes || 0, "下载内容包 zip");
  const tDownloadStart = Date.now();
  postLog("download", "info", `开始下载 ${meta.zipPath}`);
  let lastByteReport = 0;
  let lastByteReportTs = tDownloadStart;
  let totalReceived = 0;
  let totalSize: number | null = meta.sizeBytes || null;
  const zipBytes = await fetchPackageZip(
    meta.zipPath,
    (received, total) => {
      totalReceived = received;
      totalSize = total;
      const now = Date.now();
      // 控制上报频率: 至少间隔 150ms, 否则主线程 setState 太频繁
      if (now - lastByteReportTs < 150 && received < (total ?? Infinity)) {
        return;
      }
      const dt = (now - lastByteReportTs) / 1000;
      const speed =
        dt > 0 ? (received - lastByteReport) / dt : 0; // bytes/sec
      lastByteReport = received;
      lastByteReportTs = now;
      const elapsedMs = now - tDownloadStart;
      const etaMs =
        total && speed > 0 ? ((total - received) / speed) * 1000 : undefined;
      postProgress("download", received, total ?? received, {
        elapsedMs,
        etaMs,
      });
      // 偶尔打一条网速日志(只在有 total 且每完成 25% 时打)
      if (total && speed > 0) {
        const pct = received / total;
        const shouldLog =
          pct >= 0.25 && pct < 0.27 ||
          pct >= 0.5 && pct < 0.52 ||
          pct >= 0.75 && pct < 0.77;
        if (shouldLog) {
          postLog(
            "download",
            "info",
            `已下载 ${fmtBytes(received)} / ${fmtBytes(total)} (${fmtBytes(speed)}/s)`
          );
        }
      }
    }
  );
  const downloadMs = Date.now() - tDownloadStart;
  postProgress(
    "download",
    totalReceived,
    totalSize ?? totalReceived,
    { elapsedMs: downloadMs, etaMs: 0 }
  );
  postLog(
    "download",
    "info",
    `下载完成: ${fmtBytes(totalReceived)}, 耗时 ${fmtDuration(downloadMs)}`
  );

  // --- 阶段 3: parse ---
  postPhase("parse", 0, "解压并解析 markdown 正文");
  const tParseStart = Date.now();
  postLog("parse", "info", "解压 zip 并解析 INDEX.ndjson");
  const { docs } = parsePackageZip(zipBytes, (done, total) => {
    postProgress("parse", done, total, {
      elapsedMs: Date.now() - tParseStart,
    });
  });
  const parseMs = Date.now() - tParseStart;
  totalDocs = docs.length;
  postLog(
    "parse",
    "info",
    `解析完成: ${docs.length} 篇文档, 耗时 ${fmtDuration(parseMs)}`
  );
  if (docs.length === 0) {
    throw new Error("解析得到 0 篇文档, 内容包可能损坏");
  }

  // --- 阶段 4: tokenize (中文 bigram + 英文 token + 倒排统计) ---
  // 这是 CPU 密集阶段, 用 docs.length 作为进度分母。
  postPhase("tokenize", docs.length, "中文 bigram + 英文 token 分词");
  const tIndexStart = Date.now();
  postLog("tokenize", "info", "开始建立倒排索引(分词中)");
  const { docs: docsOut, postings } = buildInvertedIndex(
    docs,
    (done, total, current) => {
      const elapsedMs = Date.now() - tIndexStart;
      const etaMs =
        done > 0 ? (elapsedMs / done) * (total - done) : undefined;
      postProgress("tokenize", done, total, {
        currentSource: current.source,
        currentTitle: current.title,
        elapsedMs,
        etaMs,
      });
    }
  );
  const indexMs = Date.now() - tIndexStart;
  postLog(
    "tokenize",
    "info",
    `索引建立完成: ${postings.length} 个词项, 耗时 ${fmtDuration(indexMs)}`
  );

  // --- 阶段 5: store (写 IndexedDB) ---
  // db.rebuildAll 现在按 docs(50%) -> postings(45%) -> version(5%) 分段上报进度,
  // worker 把它的 done/total 直接转发, 进度条能从 0 平滑推到 100。
  // total 取 docs+postings 数量, 与 db.rebuildAll 内部刻度一致。
  const storeTotal = Math.max(1, docsOut.length + postings.length);
  postPhase(
    "store",
    storeTotal,
    `写入 ${docsOut.length} 篇文档 + ${postings.length} 个词项`
  );
  const tStoreStart = Date.now();
  postLog("store", "info", "开始写入本地数据库(IndexedDB)");
  let lastStoreReportTs = tStoreStart;
  await db.rebuildAll(
    meta,
    docsOut as IndexedDoc[],
    postings as PostingEntry[],
    (done, total) => {
      const now = Date.now();
      // 限制上报频率, 至少间隔 100ms, 避免 setState 风暴
      if (now - lastStoreReportTs < 100 && done < total) return;
      lastStoreReportTs = now;
      const elapsedMs = now - tStoreStart;
      const etaMs =
        done > 0 ? (elapsedMs / done) * (total - done) : undefined;
      postProgress("store", done, total, {
        elapsedMs,
        etaMs,
      });
    }
  );
  const storeMs = Date.now() - tStoreStart;
  postProgress("store", storeTotal, storeTotal, {
    elapsedMs: storeMs,
    etaMs: 0,
  });
  postLog(
    "store",
    "info",
    `存储完成, 耗时 ${fmtDuration(storeMs)}`
  );

  // --- 阶段 6: finalize ---
  postPhase("finalize", undefined, "收尾: 校验版本、释放中间结构");
  // 重新读一次版本, 确认写入成功
  const verify = await db.getVersion();
  if (!verify || verify.id !== meta.id) {
    throw new Error("版本校验失败: 写入后读回的版本与目标不一致");
  }
  const totalMs = Date.now() - tStart;
  lastSummary = {
    docs: docsOut.length,
    postings: postings.length,
    bytesUncompressed: totalReceived,
    durationMs: totalMs,
    meta,
  };
  postLog(
    "finalize",
    "info",
    `构建完成: 共 ${docsOut.length} 篇 / ${postings.length} 词项, 总耗时 ${fmtDuration(totalMs)}`
  );

  postFromWorker({
    type: "indexReady",
    meta,
    rebuilt: true,
    summary: lastSummary,
  });
}

async function runSearch(query: string, reqId: number): Promise<void> {
  const db = getSearchDb();
  const queryTerms = tokenize(query);
  if (queryTerms.length === 0) {
    postFromWorker({ type: "searchResults", reqId, results: [] });
    return;
  }
  const postings = await db.getPostings(queryTerms);
  if (postings.size === 0) {
    postFromWorker({ type: "searchResults", reqId, results: [] });
    return;
  }
  // 候选 path 集合
  const candPaths = new Set<string>();
  for (const pe of postings.values()) {
    for (const p of Object.keys(pe.postings)) candPaths.add(p);
  }
  const docs = await db.getDocs(Array.from(candPaths));
  const results = rankResults(query, postings, docs, totalDocs || docs.size);
  postFromWorker({ type: "searchResults", reqId, results });
}

// ---------- worker 入口 ----------

// 仅在真正 worker 上下文里挂 onmessage。
// 主线程 import 本文件做单测时不会触发, 避免污染全局。
function isWorkerContext(): boolean {
  return (
    typeof self !== "undefined" &&
    typeof (self as unknown as { addEventListener?: unknown }).addEventListener === "function"
  );
}

if (isWorkerContext()) {
  self.onmessage = async (ev: MessageEvent<WorkerRequest>) => {
    const req = ev.data;
    try {
      if (req.type === "ensureIndex" || req.type === "rebuild") {
        const force = req.type === "rebuild";
        // indexingInFlight 让并发到达的 search 请求等待
        indexingInFlight = buildIndex(req.meta, force).catch((err) => {
          const message =
            err && (err as Error).message ? (err as Error).message : String(err);
          postLog("finalize", "error", `构建失败: ${message}`);
          postFromWorker({ type: "indexError", message });
        }).finally(() => {
          indexingInFlight = null;
        });
        await indexingInFlight;
      } else if (req.type === "search") {
        // 等待正在进行的索引构建完成
        if (indexingInFlight) {
          await indexingInFlight.catch(() => {});
        }
        await runSearch(req.query, req.reqId);
      }
    } catch (err) {
      const message = err && (err as Error).message ? (err as Error).message : String(err);
      if (req.type === "search") {
        postFromWorker({ type: "searchError", reqId: req.reqId, message });
      } else {
        postFromWorker({ type: "indexError", message });
      }
    }
  };
}

// ---------- 主线程端: 客户端封装 ----------

// 由 webpack 5 的 worker URL 语法生成独立 chunk。
// Docusaurus 3 已是 webpack 5, 该语法无需额外配置。
export function createSearchWorker(): Worker {
  return new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });
}
