const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

assert.match(read("static/robots.txt"), /Sitemap: https:\/\/yaklang\.com\/sitemap\.xml/);
assert.match(read("static/robots.txt"), /User-agent: GPTBot\s+Allow: \//);
assert.match(read("static/robots.txt"), /User-agent: OAI-SearchBot\s+Allow: \//);
assert.match(read("static/llms.txt"), /^# Yak Project/m);
assert.match(read("static/llms.txt"), /\/llms-full\.txt/);
assert.ok(fs.existsSync(path.join(root, "static/llms-full.txt")));
const indexNowKey = "629c41a3116dedbbf450b884f9d0d242";
assert.equal(read(`static/${indexNowKey}.txt`).trim(), indexNowKey);
assert.ok(!fs.existsSync(path.join(root, "static/indexnow-key.txt")));

const config = read("docusaurus.config.js");
assert.match(config, /"@type": "Organization"/);
assert.match(config, /"@type": "WebSite"/);
assert.match(config, /"og:image"/);
assert.match(read("src/theme/Root.tsx"), /docusaurusI18n\.currentLocale/);
assert.match(read("src/pages/index.js"), /t\("SiteMetadata\.home\.title"\)/);
assert.match(read("src/pages/download.tsx"), /t\("SiteMetadata\.download\.title"\)/);
assert.match(read("src/pages/team.js"), /t\("SiteMetadata\.team\.title"\)/);
assert.match(read("src/pages/irify.js"), /t\("SiteMetadata\.irify\.title"\)/);
assert.match(config, /lastmod:\s*"date"/);
// en 路由不再整体排除：已翻译页进入 sitemap，未翻译页由 geo-metadata-plugin
// 标记 noindex 并在 postBuild 从 sitemap 移除。
assert.match(config, /ignorePatterns:\s*\[\]/);
assert.match(config, /WebSite[\s\S]*description:/);
assert.match(read("docs/intro.md"), /^description:/m);
assert.match(read("blog/authors.yml"), /title:\s*Yak Project 技术与安全研发团队/);
assert.ok(fs.existsSync(path.join(root, "src/pages/editorial-policy.tsx")));
assert.match(config, /\/editorial-policy/);
assert.match(read("src/components/homeNew/HomeFooter.tsx"), /to:\s*"\/editorial-policy"/);
for (const post of [
  "2026-05-08-001.md",
  "2026-04-29-002.md",
  "2026-04-24-003.md",
  "2026-04-17-004.md",
  "2026-04-10-005.md",
  "2026-04-03-006.md",
  "2026-03-27-007.md",
  "2026-03-20-008.md",
  "2026-03-18-009.md",
  "2026-03-13-010.md",
]) {
  assert.match(read(`blog/${post}`), /^description:\s*.{40,}$/m);
}
for (const post of [
  "2026-05-08-001.md",
  "2026-04-24-003.md",
  "2026-04-10-005.md",
]) {
  assert.match(read(`blog/${post}`), /^## 内容速览$/m);
  assert.match(read(`blog/${post}`), /^## 常见问题$/m);
}

const metadataPlugin = require("../plugins/geo-metadata-plugin");
assert.equal(
  metadataPlugin.extractDescription("# http {#library-http}\n\nHTTP client library for security testing."),
  "HTTP client library for security testing."
);
assert.equal(
  metadataPlugin.extractDescription("# only a heading"),
  null
);
const rewrittenHead = metadataPlugin.replaceMetaDescription(
  '<meta data-rh="true" name="description" content="library-http}"><meta data-rh="true" property="og:description" content="library-http}">',
  "HTTP client library for security testing."
);
assert.doesNotMatch(rewrittenHead, /library-http}/);
assert.match(rewrittenHead, /property="og:description" content="HTTP client library for security testing\."/);

assert.equal(
  metadataPlugin.extractContentDescription(`---
title: Example
---

# Example

## 背景

背景

本文解释 Yaklang 如何把可复现的安全能力组织成可调用模块。

读者将看到适用场景、实现步骤和验证方法。`),
  "本文解释 Yaklang 如何把可复现的安全能力组织成可调用模块。读者将看到适用场景、实现步骤和验证方法。"
);

const socialHtml = metadataPlugin.completeSocialMetadata(
  '<head><meta property="og:title" content="Yaklang HTTP API"><meta property="og:description" content="HTTP client reference"></head>'
);
assert.match(socialHtml, /property="og:type" content="website"/);
assert.match(socialHtml, /name="twitter:title" content="Yaklang HTTP API"/);
assert.match(socialHtml, /name="twitter:description" content="HTTP client reference"/);
assert.equal(
  metadataPlugin.decodeHtmlEntities("Yaklang &quot;HTTP&quot; &amp; API"),
  'Yaklang "HTTP" & API'
);

const noindexHtml = metadataPlugin.ensureNoindex(
  '<html><head><title>Untranslated page</title></head><body></body></html>'
);
assert.match(noindexHtml, /name="robots" content="noindex, follow"/);

const documentGraph = metadataPlugin.buildDocumentGraph({
  url: "https://yaklang.com/docs/api/http",
  title: "http",
  description: "Yaklang HTTP client API reference.",
  language: "zh-CN",
  segments: ["docs", "api", "http"],
});
assert.equal(documentGraph["@graph"][0]["@type"], "TechArticle");
assert.equal(documentGraph["@graph"][1]["@type"], "BreadcrumbList");
assert.deepEqual(
  documentGraph["@graph"][1].itemListElement.map((item) => item.position),
  [1, 2, 3, 4]
);
const englishDocumentGraph = metadataPlugin.buildDocumentGraph({
  url: "https://yaklang.com/en/docs/intro",
  title: "Yaklang Introduction",
  description: "Yaklang documentation.",
  language: "en",
  segments: ["docs", "intro"],
});
assert.deepEqual(
  englishDocumentGraph["@graph"][1].itemListElement.map((item) => item.item),
  [
    "https://yaklang.com/en/",
    "https://yaklang.com/en/docs",
    "https://yaklang.com/en/docs/intro",
  ]
);

const enhancedDocHtml = metadataPlugin.enhanceHtmlForRoute(
  '<html><head><title>http | Yak Project</title><meta property="og:title" content="http"><meta property="og:description" content="HTTP API"><script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"http"}]}</script></head><body></body></html>',
  {
    route: "/docs/api/http",
    url: "https://yaklang.com/docs/api/http",
    title: "http",
    description: "HTTP API",
    language: "zh-CN",
  }
);
assert.match(enhancedDocHtml, /"@type":"TechArticle"/);
assert.match(enhancedDocHtml, /"position":4/);
assert.equal((enhancedDocHtml.match(/"@type":"BreadcrumbList"/g) || []).length, 1);

const enhancedBlogHtml = metadataPlugin.enhanceHtmlForRoute(
  '<html><head><meta name="description" content="背景"><meta property="og:title" content="Yak Article"><meta property="og:description" content="背景"><script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"Yak Article"}</script></head><body></body></html>',
  {
    route: "/blog/yak-article",
    url: "https://yaklang.com/blog/yak-article",
    title: "Yak Article",
    description: "这是一段可以独立引用的文章摘要。",
    language: "zh-CN",
  }
);
assert.match(enhancedBlogHtml, /name="description" content="这是一段可以独立引用的文章摘要。"/);
assert.match(enhancedBlogHtml, /property="og:type" content="article"/);
assert.match(enhancedBlogHtml, /"author":\{"@id":"https:\/\/yaklang\.com\/#organization"\}/);
assert.doesNotMatch(enhancedBlogHtml, /"author":\{"@type":"Organization"/);

// 未翻译回退页：en 路由、正文（<article> 内）仍以中文为主 → noindex。
const untranslatedHtml = metadataPlugin.enhanceHtmlForRoute(
  `<html><head><meta property="og:title" content="中文文档"><meta property="og:description" content="中文内容"></head><body><article><p>${"这是一段尚未翻译的中文正文内容。".repeat(10)}</p></article></body></html>`,
  {
    route: "/en/docs/intro",
    url: "https://yaklang.com/en/docs/intro",
    title: "中文文档",
    description: "中文内容",
    language: "en",
  }
);
assert.match(untranslatedHtml, /name="robots" content="noindex, follow"/);
assert.equal(
  metadataPlugin.publicRouteForLocale("/docs/intro", "en", "zh-CN"),
  "/en/docs/intro"
);
assert.equal(
  metadataPlugin.publicRouteForLocale("/docs/intro", "zh-CN", "zh-CN"),
  "/docs/intro"
);

console.log("GEO foundation checks passed.");
