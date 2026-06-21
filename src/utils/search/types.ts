/*
 * src/utils/search/types.ts
 *
 * 前端本地搜索的全部共享类型。所有结构都刻意保持"可序列化",
 * 以便 worker 与主线程通过 postMessage 传递, 以及 IndexedDB 直接存取。
 *
 * 关键词: search types, indexed doc, posting list
 */

// 内容来源, 对应打包脚本的 SOURCES = ["docs", "products", "blog"]
export type SearchSource = "docs" | "products" | "blog";

// 内容包元信息, 对应 static/site-content/latest.json
export interface PackageMeta {
  id: string; // 版本标识, 改变即触发重建
  zipName: string;
  generatedAt: string; // ISO 时间
  date?: string;
  count: number;
  sizeBytes: number;
  zipPath: string;
}

// Index entry, 对应 INDEX.ndjson 每行(打包脚本已提供, 这里只声明用到字段)
export interface IndexEntry {
  source: SearchSource;
  relPath: string;
  path: string; // 站点路径, 如 /docs/intro
  url: string; // 完整 URL
  title: string;
  size?: number;
  description?: string;
  slug?: string;
  tags?: string[];
  date?: string;
}

// docs store 中的文档记录(已提取正文、分词前)
export interface IndexedDoc {
  path: string; // keyPath
  source: SearchSource;
  title: string;
  url: string;
  description?: string;
  // 正文前若干字, 用于展示 snippet 与低频关键词的兜底命中
  snippet: string;
  // 完整正文(已去 frontmatter / markdown 符号), 查询时用于 snippet 抽取窗口
  body: string;
}

// postings store 中的倒排条目
export interface PostingEntry {
  // keyPath: term (分词后的词项, 如英文 "poc" 或中文 bigram "漏洞")
  term: string;
  // document frequency: 出现该 term 的文档数
  df: number;
  // path -> term frequency (该 term 在文档中的出现次数)
  // 不存位置, 只存 tf, 体积可控且足够做 TF-IDF 排序
  postings: Record<string, number>;
}

// meta store 中存的版本记录
export interface StoredVersion {
  key: "version"; // 固定 key
  value: PackageMeta;
}

// 单条搜索结果(已排序、已生成 snippet)
export interface SearchResult {
  path: string;
  url: string;
  title: string;
  source: SearchSource;
  description?: string;
  snippet: string;
  score: number;
}

// 主线程 -> worker 的消息
export type WorkerRequest =
  | { type: "ensureIndex"; meta: PackageMeta }
  | { type: "search"; query: string; reqId: number };

// worker -> 主线程的消息
export type WorkerResponse =
  | { type: "indexProgress"; done: number; total: number; currentSource: SearchSource; currentTitle: string }
  | { type: "indexReady"; meta: PackageMeta; rebuilt: boolean }
  | { type: "indexError"; message: string }
  | { type: "searchResults"; reqId: number; results: SearchResult[] }
  | { type: "searchError"; reqId: number; message: string };

// 三种来源在前端的中文展示文案
export const SOURCE_LABEL: Record<SearchSource, string> = {
  docs: "YAK 编程文档",
  products: "Yakit 文档",
  blog: "技术博客",
};

// 进度条上展示的"正在搜索 XXX"短语
export const SOURCE_SEARCHING_LABEL: Record<SearchSource, string> = {
  docs: "正在搜索文档",
  products: "正在搜索 Yakit 文档",
  blog: "正在搜索技术博客",
};
