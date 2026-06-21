/*
 * src/utils/search/db.ts
 *
 * IndexedDB 封装: 纯裸 IDB API, 零依赖。
 *
 * Schema (DB: yak-search-db, version 1):
 *   - meta     { key: 'version', value: PackageMeta }     用于判断是否需要重建
 *   - docs     keyPath=path                               IndexedDoc[]
 *   - postings keyPath=term                               PostingEntry[]
 *
 * 关键词: indexeddb, search store, batch write
 */
import type {
  IndexedDoc,
  PackageMeta,
  PostingEntry,
  StoredVersion,
} from "./types";

const DB_NAME = "yak-search-db";
const DB_VERSION = 1;
const STORE_META = "meta";
const STORE_DOCS = "docs";
const STORE_POSTINGS = "postings";

// 单事务批量写入的分片大小, 太大会撑爆 transaction, 太小则慢
const BATCH_SIZE = 200;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains(STORE_DOCS)) {
        db.createObjectStore(STORE_DOCS, { keyPath: "path" });
      }
      if (!db.objectStoreNames.contains(STORE_POSTINGS)) {
        db.createObjectStore(STORE_POSTINGS, { keyPath: "term" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Promise 包装: 一个 transaction 提交后再解析
function txDone(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error("transaction aborted"));
  });
}

// 单库的批量写入: 清空 + 分片 put, 返回 Promise
// onWritten: 每完成一个 BATCH_SIZE 分片后回调一次累计已写入数
async function clearAndBatch<T>(
  db: IDBDatabase,
  storeName: string,
  items: T[],
  onWritten?: (written: number) => void
): Promise<void> {
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.clear();
  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const slice = items.slice(i, i + BATCH_SIZE);
    for (const it of slice) {
      store.put(it as unknown as Record<string, unknown>);
    }
    // 该分片已入队, 上报累计写入数(注意: put 是异步, 但 IDB 事务内顺序保证)
    if (onWritten) onWritten(Math.min(items.length, i + BATCH_SIZE));
  }
  await txDone(tx);
}

export class SearchDb {
  private dbPromise: Promise<IDBDatabase> | null = null;

  private getDb(): Promise<IDBDatabase> {
    if (!this.dbPromise) {
      this.dbPromise = openDb();
    }
    return this.dbPromise;
  }

  async getVersion(): Promise<PackageMeta | null> {
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_META, "readonly");
      const store = tx.objectStore(STORE_META);
      const req = store.get("version");
      req.onsuccess = () => {
        const rec = req.result as StoredVersion | undefined;
        resolve(rec ? rec.value : null);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async setVersion(meta: PackageMeta): Promise<void> {
    const db = await this.getDb();
    const tx = db.transaction(STORE_META, "readwrite");
    tx.objectStore(STORE_META).put({ key: "version", value: meta } as StoredVersion);
    await txDone(tx);
  }

// 全量重建: 清空三库后批量写入。失败时调用方应回滚展示态, 不应清掉旧索引。
  // 这里采用"先清旧库再写新库"的策略: 524 篇量级写入 < 1s, 中断风险可接受;
  // 若对原子性有更高要求可先写到临时库再 rename, 但 IDB 不直接支持 rename,
  // 实现复杂度收益不划算。
  //
  // onProgress: 写入进度回调, done/total 取值按"子阶段"映射:
  //   docs 占 50% (0 ~ total*0.5)
  //   postings 占 45% (total*0.5 ~ total*0.95)
  //   setVersion 占 5% (total*0.95 ~ total)
  // 这样 worker 的 store 阶段进度条能从 0 平滑推到 100, 不会卡在 0。
  async rebuildAll(
    meta: PackageMeta,
    docs: IndexedDoc[],
    postings: PostingEntry[],
    onProgress?: (done: number, total: number) => void
  ): Promise<void> {
    const db = await this.getDb();
    // 用 docs+postings 数量作为 total 量纲, 让进度条有实际刻度
    const total = Math.max(1, docs.length + postings.length);
    const DOCS_END = Math.floor(total * 0.5);
    const POSTINGS_END = Math.floor(total * 0.95);

    // docs 段(0% ~ 50%): 清空 + 分片 put, 每批上报一次
    await clearAndBatch(db, STORE_DOCS, docs, (written) => {
      if (onProgress) {
        const done = Math.min(DOCS_END, Math.round((written / Math.max(1, docs.length)) * DOCS_END));
        onProgress(done, total);
      }
    });
    // postings 段(50% ~ 95%)
    await clearAndBatch(db, STORE_POSTINGS, postings, (written) => {
      if (onProgress) {
        const ratio = written / Math.max(1, postings.length);
        const done = DOCS_END + Math.round(ratio * (POSTINGS_END - DOCS_END));
        onProgress(Math.min(POSTINGS_END, done), total);
      }
    });
    // version 段(95% ~ 100%)
    if (onProgress) onProgress(POSTINGS_END, total);
    await this.setVersion(meta);
    if (onProgress) onProgress(total, total);
  }

  async clearAll(): Promise<void> {
    const db = await this.getDb();
    const names = [STORE_META, STORE_DOCS, STORE_POSTINGS];
    const tx = db.transaction(names, "readwrite");
    for (const n of names) tx.objectStore(n).clear();
    await txDone(tx);
  }

  // 取多个 term 的 postings (查询时用)。返回 Map<term, PostingEntry>,
  // 缺失的 term 不在 Map 中(视为不存在该词项)。
  async getPostings(terms: string[]): Promise<Map<string, PostingEntry>> {
    if (terms.length === 0) return new Map();
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_POSTINGS, "readonly");
      const store = tx.objectStore(STORE_POSTINGS);
      const out = new Map<string, PostingEntry>();
      let pending = terms.length;
      if (pending === 0) {
        resolve(out);
        return;
      }
      for (const term of terms) {
        const req = store.get(term);
        req.onsuccess = () => {
          const rec = req.result as PostingEntry | undefined;
          if (rec) out.set(term, rec);
          pending -= 1;
          if (pending === 0) resolve(out);
        };
        req.onerror = () => {
          pending -= 1;
          if (pending === 0) resolve(out);
        };
      }
    });
  }

  // 按 path 批量取文档记录
  async getDocs(paths: string[]): Promise<Map<string, IndexedDoc>> {
    if (paths.length === 0) return new Map();
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_DOCS, "readonly");
      const store = tx.objectStore(STORE_DOCS);
      const out = new Map<string, IndexedDoc>();
      let pending = paths.length;
      if (pending === 0) {
        resolve(out);
        return;
      }
      for (const p of paths) {
        const req = store.get(p);
        req.onsuccess = () => {
          const rec = req.result as IndexedDoc | undefined;
          if (rec) out.set(p, rec);
          pending -= 1;
          if (pending === 0) resolve(out);
        };
        req.onerror = () => {
          pending -= 1;
          if (pending === 0) resolve(out);
        };
      }
    });
  }
}

// 单例: 全应用共享一个 IDB 连接(及 worker), 避免重复 openDb
let _db: SearchDb | null = null;
export function getSearchDb(): SearchDb {
  if (!_db) _db = new SearchDb();
  return _db;
}
