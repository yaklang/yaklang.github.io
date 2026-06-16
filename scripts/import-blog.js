#!/usr/bin/env node
/*
 * One-shot importer: convert the WeChat article corpus under
 * yaklang-ai-training-materials/yak-project-public into standard
 * Docusaurus blog posts, copy referenced images, and generate
 * authors.yml + tags.yml.
 *
 * Idempotent: it wipes generated blog posts (YYYY-MM-DD-NNN.md) and the
 * static/blog-img directory before regenerating.
 */
const fs = require("fs");
const path = require("path");

const repo = path.resolve(__dirname, "..");
const SRC = "/Users/v1ll4n/Projects/yaklang-ai-training-materials/yak-project-public";
const SRC_STATIC = path.join(SRC, "static");
const BLOG_DIR = path.join(repo, "blog");
const IMG_DIR = path.join(repo, "static", "blog-img");

// Article numbers to skip: non-technical / PR / lifestyle noise.
const EXCLUDE = new Set([
  "058", // 国企数智化转型新闻
  "070", // 成魔成仙营销
  "077", // 科技成果鉴定会 PR
  "100", // "我们在一起了" 生活类
  "126", // 企业安全建设软文
  "173", // 极客大挑战 PR
  "274", // 职业鸡汤
  "276", // 高考志愿
  "277", // 官网升级公告
]);

// Topic tag rules: each rule = { key, keywords: [...] }.
// A post may match multiple topics. Year tag is always added.
const TOPIC_RULES = [
  { key: "code-audit", keywords: ["IRify", "SSA", "SyntaxFlow", "Syntax-flow", "Syntaxflow", "代码审计", "反编译", "污点", "静态", "Source Sink", "WebShell"] },
  { key: "ai", keywords: ["AI", "Al ", "Memfit", "RAG", "Agent", "AIForge", "帕鲁", "智能"] },
  { key: "traffic", keywords: ["MITM", "劫持", "流量", "TUN", "抓包", "Websocket", "websocket"] },
  { key: "webfuzzer", keywords: ["Fuzzer", "Fuzz", "Fuzztag", "爆破", "Repeater", "Intruder", "Match Extract"] },
  { key: "java-sec", keywords: ["Java", "反序列化", "yso", "JNDI", "字节码", "Shiro", "Fastjson", "FastJson", "t3", "T3", "IIOP", "ldap", "Weblogic", "weblogic", "序列化", "内存马"] },
  { key: "hotpatch", keywords: ["热加载", "Mock 热加载", "全局热加载"] },
  { key: "range", keywords: ["靶场", "Vulinbox", "通关", "CTF", "HTB", "BountyHunter", "夺舍"] },
  { key: "crypto", keywords: ["国密", "加密", "验签", "DES", "AES", "证书", "签名"] },
  { key: "vuln-plugin", keywords: ["POC", "PoC", "Poc", "Nuclei", "nuclei", "CVE", "插件", "扫描", "XSS", "SQL", "SSRF", "RCE", "log4j", "Log4j", "ThinkPHP", "未授权", "重定向", "走私", "越权", "目录遍历", "文件上传"] },
];

const YEAR_LABELS = {
  "2021": "2021 年",
  "2022": "2022 年",
  "2023": "2023 年",
  "2024": "2024 年",
  "2025": "2025 年",
  "2026": "2026 年",
};

const TOPIC_LABELS = {
  "code-audit": { label: "代码审计", description: "IRify / SSA / SyntaxFlow 静态代码分析与代码审计实战" },
  "ai": { label: "AI", description: "AI 安全 Agent、Memfit 记忆、RAG 与智能化能力" },
  "traffic": { label: "流量分析", description: "MITM 劫持、TUN、流量分析与协作渗透" },
  "webfuzzer": { label: "WebFuzzer", description: "Web Fuzzer、Fuzztag 与爆破测试" },
  "java-sec": { label: "Java 安全", description: "Java 反序列化、字节码、协议分析与利用" },
  "hotpatch": { label: "热加载", description: "Yakit / WebFuzzer / MITM 热加载技巧" },
  "range": { label: "靶场实战", description: "Vulinbox 与各类靶场通关实战" },
  "crypto": { label: "加密对抗", description: "国密、前端加密、验签与证书相关对抗" },
  "vuln-plugin": { label: "漏洞检测与插件", description: "POC、Nuclei、CVE、被动扫描与插件开发" },
};

function escapeYamlDq(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function detectTopics(title) {
  const found = [];
  const lower = title.toLowerCase();
  for (const rule of TOPIC_RULES) {
    for (const kw of rule.keywords) {
      const k = kw.toLowerCase();
      if (lower.includes(k)) {
        found.push(rule.key);
        break;
      }
    }
  }
  return found;
}

function cleanBody(raw) {
  let lines = raw.split("\n");
  let originalUrl = "";

  // drop leading "# title"
  if (lines.length && /^#\s/.test(lines[0])) lines.shift();

  // strip leading metadata lines (blank / 日期 / author / 原创)
  while (lines.length) {
    const t = lines[0].trim();
    if (t === "") {
      lines.shift();
      continue;
    }
    if (/^日期[:：]/.test(t)) {
      const m = t.match(/原文[:：]\s*<?([^>\s]+)>?/);
      if (m) originalUrl = m[1];
      lines.shift();
      continue;
    }
    if (/^author[:：]/i.test(t) || /^原创/.test(t)) {
      lines.shift();
      continue;
    }
    break;
  }

  let body = lines.join("\n");

  // rewrite image paths: static/<hash>.<ext> -> /blog-img/<hash>.<ext>
  const hashes = new Set();
  body = body.replace(/\]\(\s*static\/([^)\s]+)\s*\)/g, (m, p1) => {
    hashes.add(p1);
    return "](/blog-img/" + p1 + ")";
  });

  return { body, originalUrl, hashes };
}

// GFM 自动链接会把"裸 URL + 紧跟的中文"整体当作链接地址，导致 URL 解析失败。
// 在 URL 与紧跟的 CJK/全角字符之间插入空格，仅处理代码块/行内代码之外的内容。
const URL_BEFORE_CJK =
  /(https?:\/\/[A-Za-z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+)(?=[\u3000-\u303f\u3400-\u9fff\uff00-\uffef])/g;

function fixLineOutsideInlineCode(line) {
  let result = "";
  let inCode = false;
  let buf = "";
  const flush = () => {
    if (buf) {
      result += inCode ? buf : buf.replace(URL_BEFORE_CJK, "$1 ");
      buf = "";
    }
  };
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === "`") {
      flush();
      result += ch;
      inCode = !inCode;
    } else {
      buf += ch;
    }
  }
  flush();
  return result;
}

function fixBareUrls(body) {
  const lines = body.split("\n");
  let inFence = false;
  let marker = "";
  const out = lines.map((line) => {
    const t = line.trimStart();
    const fence = t.match(/^(`{3,}|~{3,})/);
    if (fence) {
      const mk = fence[1][0];
      if (!inFence) {
        inFence = true;
        marker = mk;
      } else if (mk === marker) {
        inFence = false;
        marker = "";
      }
      return line;
    }
    if (inFence) return line;
    return fixLineOutsideInlineCode(line);
  });
  return out.join("\n");
}

function insertTruncate(body) {
  const lines = body.split("\n");
  let idx = 0;
  // skip leading blanks
  while (idx < lines.length && lines[idx].trim() === "") idx++;
  // consume first content block (until blank line)
  while (idx < lines.length && lines[idx].trim() !== "") idx++;
  const head = lines.slice(0, idx).join("\n");
  const tail = lines.slice(idx).join("\n");
  return head + "\n\n<!-- truncate -->\n" + tail;
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.error("source not found: " + SRC);
    process.exit(1);
  }
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

  // clean previously generated posts (YYYY-MM-DD-NNN.md)
  for (const f of fs.readdirSync(BLOG_DIR)) {
    if (/^\d{4}-\d{2}-\d{2}-\d{3}\.md$/.test(f)) {
      fs.unlinkSync(path.join(BLOG_DIR, f));
    }
  }
  // clean image dir
  if (fs.existsSync(IMG_DIR)) fs.rmSync(IMG_DIR, { recursive: true, force: true });
  fs.mkdirSync(IMG_DIR, { recursive: true });

  const files = fs
    .readdirSync(SRC)
    .filter((f) => /^\d{3}\s\d{4}-\d{2}-\d{2}\s.+\.md$/.test(f))
    .sort();

  const usedYears = new Set();
  const usedTopics = new Set();
  const allHashes = new Set();
  let written = 0;
  let skipped = 0;

  for (const f of files) {
    const m = f.match(/^(\d{3})\s(\d{4}-\d{2}-\d{2})\s(.+)\.md$/);
    if (!m) continue;
    const num = m[1];
    const date = m[2];
    if (EXCLUDE.has(num)) {
      skipped++;
      continue;
    }

    const raw = fs.readFileSync(path.join(SRC, f), "utf8");
    // title from first H1 line (preserves real punctuation)
    const firstLine = raw.split("\n", 1)[0] || "";
    let title = firstLine.replace(/^#\s*/, "").trim();
    if (!title) title = m[3].trim();

    const cleaned = cleanBody(raw);
    const originalUrl = cleaned.originalUrl;
    const hashes = cleaned.hashes;
    const body = fixBareUrls(cleaned.body);
    hashes.forEach((h) => allHashes.add(h));

    const year = date.slice(0, 4);
    usedYears.add(year);
    const topics = detectTopics(title);
    topics.forEach((t) => usedTopics.add(t));
    const tags = [year, ...topics];

    let bodyWithTruncate = insertTruncate(body);
    if (originalUrl) {
      bodyWithTruncate +=
        "\n\n---\n\n> 本文首发于 Yak Project 公众号，[阅读原文](" + originalUrl + ")。\n";
    }

    const fm = [
      "---",
      'title: "' + escapeYamlDq(title) + '"',
      "date: " + date,
      "authors: [yak]",
      "tags: [" + tags.map((t) => '"' + t + '"').join(", ") + "]",
      "slug: p" + num,
      "---",
      "",
    ].join("\n");

    const out = fm + bodyWithTruncate.replace(/\s*$/, "") + "\n";
    const outName = date + "-" + num + ".md";
    fs.writeFileSync(path.join(BLOG_DIR, outName), out, "utf8");
    written++;
  }

  // copy referenced images
  let copied = 0;
  let missing = 0;
  for (const h of allHashes) {
    const src = path.join(SRC_STATIC, h);
    const dst = path.join(IMG_DIR, h);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dst);
      copied++;
    } else {
      missing++;
      console.warn("missing image: " + h);
    }
  }

  // authors.yml
  const authorsYml =
    "yak:\n" +
    "  name: Yak Project\n" +
    "  title: 网络安全垂直语言团队\n" +
    "  url: https://github.com/yaklang\n" +
    "  image_url: https://github.com/yaklang.png\n";
  fs.writeFileSync(path.join(BLOG_DIR, "authors.yml"), authorsYml, "utf8");

  // tags.yml (only emit used tags)
  let tagsYml = "";
  const years = Array.from(usedYears).sort();
  for (const y of years) {
    tagsYml +=
      y +
      ":\n  label: " +
      (YEAR_LABELS[y] || y) +
      "\n  permalink: /year-" +
      y +
      "\n  description: " +
      y +
      " 年发布的技术文章\n";
  }
  for (const key of Object.keys(TOPIC_LABELS)) {
    if (!usedTopics.has(key)) continue;
    const info = TOPIC_LABELS[key];
    tagsYml +=
      key +
      ":\n  label: " +
      info.label +
      "\n  permalink: /topic-" +
      key +
      "\n  description: " +
      info.description +
      "\n";
  }
  fs.writeFileSync(path.join(BLOG_DIR, "tags.yml"), tagsYml, "utf8");

  console.log("posts written: " + written);
  console.log("posts skipped (excluded): " + skipped);
  console.log("images copied: " + copied + ", missing: " + missing);
  console.log("years: " + years.join(", "));
  console.log("topics used: " + Array.from(usedTopics).join(", "));
}

main();
