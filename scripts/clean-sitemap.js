#!/usr/bin/env node
/*
 * 构建后清理 sitemap：从所有 sitemap.xml 移除被标记 noindex 的 URL。
 *
 * 为什么独立成脚本：geo-metadata-plugin 在 postBuild 标记 noindex（写到 HTML），
 * 但 Docusaurus 的 sitemap 插件在 geo 插件 *之后* 才生成 sitemap.xml，
 * 所以插件里清不掉。本脚本在 `docusaurus build` 完全结束后运行，
 * 此时 sitemap 已生成、noindex 已落 HTML，可可靠清理。
 *
 * 结果：未翻译的英文回退页（zh 内容 + noindex）从 sitemap 移除，
 * 已翻译为英文、可索引的 en 页保留在 sitemap 中。
 */
const fs = require("node:fs");
const path = require("node:path");

const BUILD_DIR = path.join(__dirname, "..", "build");

function walkFiles(root, predicate) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) return walkFiles(full, predicate);
    return entry.isFile() && predicate(entry.name) ? [full] : [];
  });
}

function routeFromPath(absBuild, file) {
  const rel = path.relative(absBuild, file).split(path.sep).join("/");
  if (rel === "index.html") return "/";
  return "/" + rel.replace(/\/index\.html$/, "");
}

if (!fs.existsSync(BUILD_DIR)) process.exit(0);

// 收集 noindex 页对应的路由
const noindexRoutes = new Set();
for (const file of walkFiles(BUILD_DIR, (n) => n === "index.html")) {
  const html = fs.readFileSync(file, "utf8");
  if (/name="robots"[^>]*content="[^"]*noindex/i.test(html)) {
    noindexRoutes.add((routeFromPath(BUILD_DIR, file) || "/").replace(/\/+$/, "") || "/");
  }
}

if (!noindexRoutes.size) {
  console.log("[clean-sitemap] no noindex pages found; nothing to do");
  process.exit(0);
}

let changed = 0;
let removed = 0;
for (const sitemap of walkFiles(BUILD_DIR, (n) => n === "sitemap.xml")) {
  const xml = fs.readFileSync(sitemap, "utf8");
  const cleaned = xml.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/);
    if (!loc) return block;
    let pathname;
    try {
      // decodeURIComponent：URL.pathname 不解码 %20 等，会导致带空格/中文的
      // URL（如 /en/products/legacy/Web%20Fuzzer/fuzz）与文件路由不匹配而漏删。
      pathname = decodeURIComponent(new URL(loc[1]).pathname).replace(/\/+$/, "") || "/";
    } catch {
      return block;
    }
    if (noindexRoutes.has(pathname)) {
      removed++;
      return "";
    }
    return block;
  });
  if (cleaned !== xml) {
    fs.writeFileSync(sitemap, cleaned);
    changed++;
  }
}
console.log(
  `[clean-sitemap] cleaned ${changed} sitemap(s), removed ${removed} noindex URL(s)`
);
