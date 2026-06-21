/*
 * src/utils/search/types.ts
 *
 * 前端本地搜索的全部共享类型。所有结构都刻意保持"可序列化",
 * 以便 worker 与主线程通过 postMessage 传递, 以及 IndexedDB 直接存取。
 *
 * 关键词: search types, indexed doc, posting list, index phase
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

// ---------- 索引构建阶段 ----------
//
// 把整条构建链路切成有序阶段, 每个阶段都有中文展示文案与可量化的进度。
// UI 通过 phase 渲染"准备开始构建 / 正在下载 / 解析内容 / 建立倒排 / 正在存储 / 收尾中"。
//
// 阶段顺序:
//   prepare -> download -> parse -> tokenize -> store -> finalize -> ready
//
export type IndexPhase =
  | "prepare" // 准备开始构建(初始化、比对版本)
  | "download" // 下载内容包 zip(可报告字节进度)
  | "parse" // 解压并解析 INDEX.ndjson + 正文
  | "tokenize" // 中文 bigram + 英文 token 分词与倒排统计
  | "store" // 写入 IndexedDB(分批 put)
  | "finalize" // 收尾(写版本、释放中间结构)
  | "ready"; // 完成(不是过程阶段, 仅用于 ready 事件)

// 各阶段的中文展示文案(UI 直接用)
export const PHASE_LABEL: Record<IndexPhase, string> = {
  prepare: "准备开始构建",
  download: "正在下载内容包",
  parse: "正在解析文档",
  tokenize: "正在建立倒排索引",
  store: "正在存储到本地",
  finalize: "收尾中",
  ready: "构建完成",
};

// 三种来源在前端的中文展示文案
export const SOURCE_LABEL: Record<SearchSource, string> = {
  docs: "YAK 编程文档",
  products: "Yakit 文档",
  blog: "技术博客",
};

// 进度条上展示的"正在搜索 XXX"短语(tokenize 阶段按来源细分)
export const SOURCE_SEARCHING_LABEL: Record<SearchSource, string> = {
  docs: "正在索引文档",
  products: "正在索引 Yakit 文档",
  blog: "正在索引技术博客",
};

// 单条索引事件日志(UI 用日志区滚动展示, 让用户对构建过程有完整可见性)
// 每条日志带 level 与可选的耗时/字节信息, 透明度拉满。
export interface IndexLogEntry {
  ts: number; // Date.now() 时间戳
  level: "info" | "warn" | "error";
  phase: IndexPhase;
  message: string;
}

// 主线程 -> worker 的消息
export type WorkerRequest =
  | { type: "ensureIndex"; meta: PackageMeta }
  // 强制重建: 清空 IDB 后重新跑全流程, 用于"重新构建"按钮
  | { type: "rebuild"; meta: PackageMeta }
  | { type: "search"; query: string; reqId: number };

// worker -> 主线程的消息
export type WorkerResponse =
  // 阶段切换: 进入某个 phase, 附带该阶段的预期总量(可能为 0 表示未知)
  | {
      type: "indexPhase";
      phase: IndexPhase;
      // 该阶段总进度分母: download 阶段是 zip 字节数, parse/tokenize 是文档数, store 是写入批次数等
      total?: number;
      // 人类可读的额外说明
      detail?: string;
    }
  // 阶段内进度增量: done/total 单调递增, etaMs 为预测剩余毫秒(可缺省)
  | {
      type: "indexProgress";
      phase: IndexPhase;
      done: number;
      total: number;
      // 当前正在处理的来源(仅 tokenize 阶段有意义)
      currentSource?: SearchSource;
      currentTitle?: string;
      // 已耗时(ms)与预测剩余(ms), 用于 UI 展示"预计 xxx, 已用 xxx"
      elapsedMs?: number;
      etaMs?: number;
    }
  // 日志事件: UI 把它追加到日志区, 让构建过程透明可见
  | { type: "indexLog"; log: IndexLogEntry }
  // 索引就绪
  | {
      type: "indexReady";
      meta: PackageMeta;
      rebuilt: boolean;
      // 本次构建的摘要统计, 用于 UI 展示"已索引 N 篇, 共 M 词项, 耗时 T"
      summary?: IndexSummary;
    }
  | { type: "indexError"; phase?: IndexPhase; message: string }
  | { type: "searchResults"; reqId: number; results: SearchResult[] }
  | { type: "searchError"; reqId: number; message: string };

// 索引就绪时的摘要
export interface IndexSummary {
  docs: number;
  postings: number; // 词项数
  bytesUncompressed: number; // 解压后正文字节(粗略, 用于展示)
  durationMs: number;
  meta: PackageMeta;
}
