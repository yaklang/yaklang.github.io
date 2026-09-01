#!/usr/bin/env node

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const buildDir = path.resolve(process.argv[2] || "build");
const siteOrigin = "https://yaklang.com";
const indexNowKey = "629c41a3116dedbbf450b884f9d0d242";

function walkFiles(root, predicate) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) return walkFiles(full, predicate);
    return entry.isFile() && predicate(entry.name) ? [full] : [];
  });
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1] || "";
}

function normalizePathname(value) {
  const pathname = decodeURIComponent(new URL(value, siteOrigin).pathname);
  return pathname.replace(/\/+$/, "") || "/";
}

function routeForFile(file) {
  const relative = path.relative(buildDir, file).split(path.sep).join("/");
  return normalizePathname(
    relative === "index.html" ? "/" : `/${relative.replace(/\/index\.html$/, "")}`,
  );
}

function findMeta(html, key, value) {
  return (html.match(/<meta\b[^>]*>/gi) || []).find(
    (tag) => attribute(tag, key).toLowerCase() === value.toLowerCase(),
  );
}

function findLink(html, rel) {
  return (html.match(/<link\b[^>]*>/gi) || []).find((tag) =>
    attribute(tag, "rel")
      .toLowerCase()
      .split(/\s+/)
      .includes(rel.toLowerCase()),
  );
}

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:[a-z]+|#\d+|#x[\da-f]+);/gi, " ")
    .replace(/\s+/g, " ");
}

assert.ok(fs.existsSync(buildDir), `missing build directory: ${buildDir}`);
const htmlFiles = walkFiles(buildDir, (name) => name === "index.html");
assert.ok(htmlFiles.length > 0, "build contains no HTML pages");

const pages = new Map();
const noindexRoutes = new Set();
let jsonLdCount = 0;
for (const file of htmlFiles) {
  const route = routeForFile(file);
  const html = fs.readFileSync(file, "utf8");
  pages.set(route, html);
  const definedEntityIds = new Set();

  const robots = findMeta(html, "name", "robots");
  if (robots && /\bnoindex\b/i.test(attribute(robots, "content"))) {
    noindexRoutes.add(route);
  }

  for (const match of html.matchAll(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    let structuredData;
    assert.doesNotThrow(() => {
      structuredData = JSON.parse(match[1]);
    }, `invalid JSON-LD on ${route}`);
    const pending = [structuredData];
    while (pending.length > 0) {
      const value = pending.pop();
      if (!value || typeof value !== "object") continue;
      if (!Array.isArray(value) && value["@type"] && value["@id"]) {
        assert.ok(
          !definedEntityIds.has(value["@id"]),
          `duplicate JSON-LD entity ${value["@id"]} on ${route}`,
        );
        definedEntityIds.add(value["@id"]);
      }
      pending.push(...(Array.isArray(value) ? value : Object.values(value)));
    }
    jsonLdCount += 1;
  }
}

const sitemapLocs = new Set();
const sitemapAlternates = new Set();
const sitemapFiles = walkFiles(buildDir, (name) => name === "sitemap.xml");
assert.ok(sitemapFiles.length >= 2, "expected a sitemap for both locales");
for (const file of sitemapFiles) {
  const xml = fs.readFileSync(file, "utf8").replace(/&amp;/g, "&");
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    sitemapLocs.add(normalizePathname(match[1]));
  }
  for (const tag of xml.match(/<xhtml:link\b[^>]*>/gi) || []) {
    const href = attribute(tag, "href");
    if (href) sitemapAlternates.add(normalizePathname(href));
  }
}

for (const route of noindexRoutes) {
  assert.ok(!sitemapLocs.has(route), `noindex route is listed in sitemap: ${route}`);
  assert.ok(
    !sitemapAlternates.has(route),
    `noindex route is advertised as a sitemap alternate: ${route}`,
  );
  const html = pages.get(route);
  assert.ok(
    !(html.match(/<link\b[^>]*>/gi) || []).some(
      (tag) => attribute(tag, "rel") === "alternate" && attribute(tag, "hreflang"),
    ),
    `noindex route still advertises hreflang alternates: ${route}`,
  );
}

const criticalRoutes = [
  "/",
  "/en",
  "/docs/intro",
  "/en/docs/intro",
  "/products/intro",
  "/en/products/intro",
  "/faq",
  "/en/faq",
  "/editorial-policy",
  "/en/editorial-policy",
  "/download",
  "/en/download",
  "/yakit-vs-burp-suite",
  "/en/yakit-vs-burp-suite",
];

for (const route of criticalRoutes) {
  const html = pages.get(route);
  assert.ok(html, `missing critical page: ${route}`);
  assert.ok(!noindexRoutes.has(route), `critical page is noindex: ${route}`);
  assert.match(html, /<title\b[^>]*>[^<]{3,}<\/title>/i, `missing title: ${route}`);
  assert.ok(attribute(findMeta(html, "name", "description") || "", "content"), `missing description: ${route}`);
  assert.ok(attribute(findMeta(html, "property", "og:title") || "", "content"), `missing og:title: ${route}`);
  assert.ok(attribute(findMeta(html, "property", "og:description") || "", "content"), `missing og:description: ${route}`);
  assert.ok(attribute(findMeta(html, "name", "twitter:title") || "", "content"), `missing twitter:title: ${route}`);
  assert.ok(attribute(findMeta(html, "name", "twitter:description") || "", "content"), `missing twitter:description: ${route}`);

  const canonical = attribute(findLink(html, "canonical") || "", "href");
  assert.ok(canonical, `missing canonical: ${route}`);
  const canonicalUrl = new URL(canonical);
  assert.equal(canonicalUrl.origin, siteOrigin, `wrong canonical origin: ${route}`);
  assert.equal(normalizePathname(canonical), route, `wrong canonical path: ${route}`);

  const htmlLang = attribute(html.match(/<html\b[^>]*>/i)?.[0] || "", "lang");
  assert.equal(htmlLang, route === "/en" || route.startsWith("/en/") ? "en" : "zh-CN", `wrong html lang: ${route}`);

  if (route === "/en" || route.startsWith("/en/")) {
    const text = visibleText(html);
    const cjkCount = (text.match(/[\u3400-\u9fff]/g) || []).length;
    assert.ok(
      cjkCount / Math.max(text.length, 1) < 0.1,
      `English critical page still contains too much Chinese (${cjkCount} chars): ${route}`,
    );
  }
}

const robots = fs.readFileSync(path.join(buildDir, "robots.txt"), "utf8");
assert.match(robots, /User-agent:\s*OAI-SearchBot[\s\S]*?Allow:\s*\//);
assert.match(robots, /Sitemap:\s*https:\/\/yaklang\.com\/sitemap\.xml/);
assert.match(robots, /Sitemap:\s*https:\/\/yaklang\.com\/en\/sitemap\.xml/);

for (const file of ["llms.txt", "llms-full.txt", "llm.txt"]) {
  assert.ok(fs.statSync(path.join(buildDir, file)).size > 100, `${file} is missing or empty`);
}
assert.match(fs.readFileSync(path.join(buildDir, "llms.txt"), "utf8"), /\/llms-full\.txt/);
assert.equal(
  fs.readFileSync(path.join(buildDir, `${indexNowKey}.txt`), "utf8").trim(),
  indexNowKey,
  "IndexNow key file must be reachable at /{key}.txt",
);

assert.ok(jsonLdCount >= criticalRoutes.length, "too few JSON-LD graphs in generated output");
console.log(
  `[verify-built-seo] pages=${pages.size}, noindex=${noindexRoutes.size}, sitemapUrls=${sitemapLocs.size}, jsonLd=${jsonLdCount}, critical=${criticalRoutes.length}`,
);
