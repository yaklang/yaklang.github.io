/*
 * src/utils/search/query.ts
 *
 * 查询逻辑: 与 indexer 同款分词, 用 TF-IDF 对候选文档打分并排序,
 * 为每条结果生成 snippet(命中文本窗口)。
 *
 * 关键词: search query, tf-idf, snippet highlight
 */
import type { IndexedDoc, PostingEntry, SearchResult } from "./types";

// 复用 indexer 的分词函数(从同目录导入, 避免重复实现导致 query 与 index 不一致)
// 注意: 必须与建库时的 tokenize 行为完全一致, 否则 term 对不上。
import { tokenize } from "./indexer";

// 从 doc.body 中抽取命中 query 的 snippet:
//   - 把 query 中每个原始 token(小写) 在 body 的小写版里搜索第一个出现位置
//   - 取最早的命中位置为中心, 切出 ±radius 字符窗口
//   - 没有命中则返回 doc.snippet(正文前 240 字)
function makeSnippet(doc: IndexedDoc, queryLowerTokens: string[]): string {
  if (queryLowerTokens.length === 0) return doc.snippet;
  const body = doc.body;
  const bodyLower = body.toLowerCase();
  let bestIdx = -1;
  for (const t of queryLowerTokens) {
    const i = bodyLower.indexOf(t);
    if (i >= 0 && (bestIdx < 0 || i < bestIdx)) {
      bestIdx = i;
    }
  }
  if (bestIdx < 0) return doc.snippet;
  const radius = 80;
  const start = Math.max(0, bestIdx - radius);
  const end = Math.min(body.length, bestIdx + radius * 2);
  const window = body.slice(start, end);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < body.length ? "…" : "";
  return prefix + window + suffix;
}

// 主查询函数: terms 已分词过(由 worker 调用前完成, 或在此函数内分词)。
// 这里接收原始 queryText, 内部分词以保证一致性。
//
// 评分(TF-IDF):
//   score(doc) = sum over query_term t of:
//       tf(t, doc) * log10((N + 1) / (df(t) + 1))
//   N = 总文档数(传入)
//
// 取分数 top K, 同时构造 snippet。
export function rankResults(
  queryText: string,
  postings: Map<string, PostingEntry>,
  docs: Map<string, IndexedDoc>,
  totalDocs: number,
  topK = 30
): SearchResult[] {
  const queryTerms = tokenize(queryText);
  if (queryTerms.length === 0) return [];

  // 候选 path -> 累计 score
  const scores = new Map<string, number>();
  const matchedTermsByPath = new Map<string, Set<string>>();
  const N = Math.max(1, totalDocs);

  for (const term of queryTerms) {
    const pe = postings.get(term);
    if (!pe) continue;
    const idf = Math.log10((N + 1) / (pe.df + 1)) + 1; // +1 避免 idf=0
    for (const [path, tf] of Object.entries(pe.postings)) {
      const s = tf * idf;
      scores.set(path, (scores.get(path) || 0) + s);
      let set = matchedTermsByPath.get(path);
      if (!set) {
        set = new Set();
        matchedTermsByPath.set(path, set);
      }
      set.add(term);
    }
  }

  if (scores.size === 0) return [];

  // 转 array 排序
  const arr: { path: string; score: number }[] = [];
  for (const [path, score] of scores) {
    arr.push({ path, score });
  }
  // 命中 query term 数多的优先(覆盖度), 其次绝对分数
  arr.sort((a, b) => {
    const ma = matchedTermsByPath.get(a.path)?.size || 0;
    const mb = matchedTermsByPath.get(b.path)?.size || 0;
    if (mb !== ma) return mb - ma;
    return b.score - a.score;
  });

  // 原 query 子串(用于 snippet 高亮): 取 queryText 中所有连续非空白段小写
  const rawTokens = queryText
    .toLowerCase()
    .split(/\s+/)
    .filter((s) => s.length > 0);

  const out: SearchResult[] = [];
  for (let i = 0; i < arr.length && i < topK; i++) {
    const { path, score } = arr[i];
    const doc = docs.get(path);
    if (!doc) continue;
    out.push({
      path,
      url: doc.url,
      title: doc.title,
      source: doc.source,
      description: doc.description,
      snippet: makeSnippet(doc, rawTokens),
      score,
    });
  }
  return out;
}
