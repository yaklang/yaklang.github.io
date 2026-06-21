/*
 * src/utils/search/indexer.ts
 *
 * 内容包下载、解压、分词与倒排构建。
 * 全部在 Web Worker 内执行, 主线程只接收进度与最终就绪信号。
 *
 * 流程:
 *   1. fetch /site-content/latest.zip (SW 已缓存则命中本地)
 *   2. fflate.unzipSync 解出 INDEX.ndjson + 每篇 md/mdx 正文
 *   3. 清洗 markdown -> 纯文本, 分词(中文 bigram + 英文/代码 token)
 *   4. 统计 TF, 聚合全局 postings(含 df), 写入 IndexedDB
 *
 * 关键词: search index, tokenize, bigram, postings, fflate unzip
 */
import { unzipSync } from "fflate";
import type {
  IndexEntry,
  IndexedDoc,
  PostingEntry,
  SearchSource,
} from "./types";

// 极小停用词集: 只过滤明显无信息量的高频项, 避免误伤专业术语
const STOPWORDS = new Set<string>([
  // 中文虚词/助词
  "我们", "你们", "他们", "可以", "一个", "一种", "这个", "那个", "这是",
  "就是", "为了", "什么", "怎么", "这样", "那样", "已经", "现在", "如果",
  // 英文常见停用词
  "the", "and", "for", "with", "that", "this", "from", "are", "was", "were",
  "you", "your", "have", "has", "had", "not", "but", "all", "can", "will",
]);

// 抽取 token 的正则:
//   - [a-z0-9_]+ : 英文/数字/下划线(代码符号如 codec_EncoderToHex 整体保留)
//   - [\u4e00-\u9fa5]+ : 连续中文(CJK 基本区)
// 不区分大小写, 后续统一小写。
// 多语言扩展(日韩等)如需可在此扩展字符区间。
const TOKEN_RE = /[a-z0-9_]+|[\u4e00-\u9fa5]+/gi;

// 提取 token: 英文小写后过滤停用词与单字符(英文 1 字符区分度太低);
// 中文段先整体保留供 bigram 处理, bigram 阶段才过滤。
function extractRawTokens(text: string): string[] {
  const out: string[] = [];
  let m: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(text)) !== null) {
    const tok = m[0];
    if (/[\u4e00-\u9fa5]/.test(tok)) {
      out.push(tok); // 中文段, 交给 bigram
    } else {
      const lower = tok.toLowerCase();
      if (lower.length >= 2 && !STOPWORDS.has(lower)) {
        out.push(lower);
      }
    }
  }
  return out;
}

// 对一个 token 数组(已含英文词与中文段)做最终分词:
//   - 英文 token 直接返回
//   - 中文段做 2-gram 滑窗; 单字则保留为 1-gram(bigram 会漏掉单字术语命中)
//   - bigram 不进停用词过滤(2 字组合通常都有信息量)
//
// 导出供 query.ts 复用: 建库与查询必须用同一份分词逻辑, 否则 term 对不上。
export function tokenize(text: string): string[] {
  const raw = extractRawTokens(text);
  const out: string[] = [];
  for (const tok of raw) {
    if (/[\u4e00-\u9fa5]/.test(tok)) {
      if (tok.length === 1) {
        out.push(tok);
      } else {
        for (let i = 0; i < tok.length - 1; i++) {
          out.push(tok.slice(i, i + 2));
        }
        // 末尾单字也保留, 让单字搜索能命中
        out.push(tok.slice(tok.length - 1));
      }
    } else {
      out.push(tok);
    }
  }
  return out;
}

// 把 markdown 文本清洗为可索引的纯文本:
//   - 去掉 frontmatter (--- ... ---)
//   - 去掉代码块(``` ... ``` 与单行 `code`)
//   - 去掉 markdown 链接/图片语法, 保留链接文本
//   - 去掉标题井号、列表标记等装饰符号
//   - 折叠多余空白
// 返回纯文本(含中文、英文、必要的标点供阅读)。
function cleanMarkdown(raw: string): string {
  let s = raw;
  // 去 frontmatter
  s = s.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/i, "");
  // 去代码块(``` 或 ~~~ 包裹的多行)
  s = s.replace(/```[\s\S]*?```/g, " ");
  s = s.replace(/~~~[\s\S]*?~~~/g, " ");
  // 去行内 code
  s = s.replace(/`[^`]*`/g, " ");
  // 图片 ![alt](url) -> alt
  s = s.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1");
  // 链接 [text](url) -> text
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  // HTML 标签整体去掉
  s = s.replace(/<[^>]+>/g, " ");
  // 标题井号、列表标记、引用标记
  s = s.replace(/^#{1,6}\s+/gm, "");
  s = s.replace(/^\s*[-*+]\s+/gm, "");
  s = s.replace(/^\s*>\s?/gm, "");
  // markdown 强调符号
  s = s.replace(/[*_~]+/g, "");
  // 表格分隔符
  s = s.replace(/\|/g, " ");
  // 折叠空白
  s = s.replace(/\s+/g, " ").trim();
  return s;
}

// 从 zip 解出的 entries 中构造 IndexedDoc(含清洗后正文)
export function buildIndexedDoc(
  entry: IndexEntry,
  bodyRaw: string
): IndexedDoc {
  const body = cleanMarkdown(bodyRaw);
  const snippet = body.slice(0, 240);
  return {
    path: entry.path,
    source: entry.source,
    title: entry.title || entry.path,
    url: entry.url,
    description: entry.description,
    snippet,
    body,
  };
}

// 计算单个 doc 内每个 term 的 tf, 返回 Map<term, count>
function countTf(terms: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const t of terms) {
    m.set(t, (m.get(t) || 0) + 1);
  }
  return m;
}

export interface BuildIndexResult {
  docs: IndexedDoc[];
  postings: PostingEntry[];
}

// 全量构建倒排索引。onProgress 在每处理 BATCH 篇后回调一次, 用于进度展示。
// 为让进度展示更"有感"(用户原话: 正在搜索文档 / Yakit 文档 / 技术博客),
// 回调同时给出当前正在处理的 source 与 title。
export function buildInvertedIndex(
  docs: IndexedDoc[],
  onProgress?: (done: number, total: number, current: IndexedDoc) => void
): BuildIndexResult {
  // term -> Map<path, tf>
  const inv = new Map<string, Map<string, number>>();
  const total = docs.length;
  const PROGRESS_EVERY = 8;

  for (let i = 0; i < total; i++) {
    const doc = docs[i];
    // 标题参与索引并加权: 简单做法是把 title 文本重复若干次(等效 tf ×N)
    const textForIndex = `${doc.title}\n${doc.title}\n${doc.title}\n${doc.description || ""}\n${doc.body}`;
    const terms = tokenize(textForIndex);
    const tf = countTf(terms);
    for (const [term, count] of tf) {
      let bucket = inv.get(term);
      if (!bucket) {
        bucket = new Map();
        inv.set(term, bucket);
      }
      bucket.set(doc.path, count);
    }
    if (onProgress && (i % PROGRESS_EVERY === 0 || i === total - 1)) {
      onProgress(i + 1, total, doc);
    }
  }

  // 转换为 PostingEntry[] 数组, df = bucket.size
  const postings: PostingEntry[] = [];
  for (const [term, bucket] of inv) {
    const postingsMap: Record<string, number> = {};
    for (const [path, tf] of bucket) {
      postingsMap[path] = tf;
    }
    postings.push({ term, df: bucket.size, postings: postingsMap });
  }
  return { docs, postings };
}

// 解析 zip 字节, 返回 (entries, doc)。entries 来自 INDEX.ndjson,
// 正文按 entry.source/entry.relPath 从 zip 内对应文件读取。
export interface ParsedPackage {
  entries: IndexEntry[];
  docs: IndexedDoc[];
}

export function parsePackageZip(zipBytes: Uint8Array): ParsedPackage {
  // unzipSync 返回 { "INDEX.ndjson": Uint8Array, "docs/...": Uint8Array, ... }
  const files = unzipSync(zipBytes);
  // 解析 INDEX.ndjson -> entries
  const ndjsonBytes = files["INDEX.ndjson"];
  if (!ndjsonBytes) {
    throw new Error("INDEX.ndjson not found in package zip");
  }
  const ndjsonText = new TextDecoder("utf-8").decode(ndjsonBytes);
  const entries: IndexEntry[] = [];
  for (const line of ndjsonText.split(/\r?\n/)) {
    const t = line.trim();
    if (!t) continue;
    try {
      entries.push(JSON.parse(t) as IndexEntry);
    } catch (e) {
      // 单行解析失败容错, 跳过
    }
  }

  const docs: IndexedDoc[] = [];
  for (const entry of entries) {
    const zipInner = `${entry.source}/${entry.relPath}`;
    const bodyBytes = files[zipInner];
    if (!bodyBytes) continue;
    const bodyText = new TextDecoder("utf-8").decode(bodyBytes);
    docs.push(buildIndexedDoc(entry, bodyText));
  }
  return { entries, docs };
}

// fetch 内容包 zip, 返回 Uint8Array。失败时抛错由 worker 上报。
export async function fetchPackageZip(zipPath: string): Promise<Uint8Array> {
  const resp = await fetch(zipPath, { cache: "force-cache" });
  if (!resp.ok) {
    throw new Error(`fetch ${zipPath} -> HTTP ${resp.status}`);
  }
  const buf = await resp.arrayBuffer();
  return new Uint8Array(buf);
}

// 供 UI 与单测复用: 把当前处理的 doc 转成"正在搜索 XXX"的展示串。
// 已移到 types.ts 的 SOURCE_SEARCHING_LABEL, 这里仅做 source 校验 helper。
export function isValidSource(s: unknown): s is SearchSource {
  return s === "docs" || s === "products" || s === "blog";
}
