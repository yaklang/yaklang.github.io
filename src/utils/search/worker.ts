/*
 * src/utils/search/worker.ts
 *
 * 搜索 Worker: 主线程与 IDB/索引之间的唯一通道。
 *   - 入口: 通过 `createSearchClient()` 创建 Worker 实例
 *   - worker 内部 self.onmessage 处理两种请求:
 *       ensureIndex(meta): 检查版本, 必要时下载 zip + 建索引 + 写 IDB
 *       search(query, reqId): 分词 -> 查 IDB postings -> TF-IDF 排序
 *
 * 主线程不发 fetch、不碰 IDB, 全部交 worker 处理, 避免阻塞 UI。
 *
 * 关键词: search worker, postMessage protocol, ensureIndex
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
  IndexedDoc,
  PackageMeta,
  PostingEntry,
  WorkerRequest,
  WorkerResponse,
} from "./types";

// ---------- worker 端: 状态机 ----------
//
// 主线程所有调用都串行进入这个 Promise 队列, 保证 ensureIndex 期间到达的
// search 请求会被暂存, 等 indexReady 后再批量执行, 避免在半建库状态查询。

let indexingInFlight: Promise<void> | null = null;
let totalDocs = 0; // 建库后缓存, 查询时用

async function ensureIndex(meta: PackageMeta): Promise<void> {
  // 已有相同版本则跳过
  const db = getSearchDb();
  const existing = await db.getVersion();
  if (existing && existing.id === meta.id) {
    // 缓存 totalDocs 以便查询时算 idf
    totalDocs = meta.count || 0;
    postFromWorker({
      type: "indexReady",
      meta: existing,
      rebuilt: false,
    });
    return;
  }

  // 下载 + 解压 + 解析
  const zipBytes = await fetchPackageZip(meta.zipPath);
  const { docs } = parsePackageZip(zipBytes);
  // 实际参与索引的 doc 数(meta.count 来自打包期, 这里以解析结果为准)
  totalDocs = docs.length;

  // 建倒排索引, 进度通过 postMessage 增量上报
  const { docs: docsOut, postings } = buildInvertedIndex(docs, (done, total, current) => {
    postFromWorker({
      type: "indexProgress",
      done,
      total,
      currentSource: current.source,
      currentTitle: current.title,
    });
  });

  // 写库(版本写入放在 rebuildAll 内部, 与数据原子性绑定)
  await db.rebuildAll(meta, docsOut as IndexedDoc[], postings as PostingEntry[]);
  postFromWorker({
    type: "indexReady",
    meta,
    rebuilt: true,
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
function postFromWorker(msg: WorkerResponse) {
  (self as unknown as Worker).postMessage(msg);
}

// 仅在真正 worker 上下文里挂 onmessage。
// 主线程 import 本文件做单测时不会触发, 避免污染全局。
// 通过 typeof 检测避免引用主线程不存在的 importScripts 全局。
function isWorkerContext(): boolean {
  return (
    typeof self !== "undefined" &&
    // worker 内 self 是 DedicatedWorkerGlobalScope, 自身就是事件目标
    typeof (self as unknown as { addEventListener?: unknown }).addEventListener === "function"
  );
}

if (isWorkerContext()) {
  self.onmessage = async (ev: MessageEvent<WorkerRequest>) => {
    const req = ev.data;
    try {
      if (req.type === "ensureIndex") {
        // ensureIndex 期间到达的 search 会被下方排队逻辑处理
        // 这里把 indexingInFlight 设为进行中的 Promise, 搜索前会 await 它
        indexingInFlight = ensureIndex(req.meta).catch((err) => {
          postFromWorker({
            type: "indexError",
            message: err && err.message ? err.message : String(err),
          });
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
