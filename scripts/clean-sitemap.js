#!/usr/bin/env node

/*
 * Finalize multilingual indexing after every locale has been built.
 *
 * The GEO plugin marks untranslated English fallback pages as noindex during
 * each locale build. Docusaurus generates sitemap and hreflang links separately,
 * so a final cross-locale pass is required to keep those signals consistent:
 * no sitemap or indexable page may advertise a noindex English alternate.
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
  return `/${rel.replace(/\/index\.html$/, "")}`;
}

function normalizedPathname(url) {
  try {
    return (
      decodeURIComponent(new URL(url, "https://yaklang.com").pathname).replace(
        /\/+$/,
        "",
      ) || "/"
    );
  } catch {
    return null;
  }
}

function attribute(tag, name) {
  return (
    tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "i"))?.[1] || ""
  );
}

if (!fs.existsSync(BUILD_DIR)) process.exit(0);

const htmlFiles = walkFiles(BUILD_DIR, (name) => name === "index.html");
const noindexRoutes = new Set();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  if (/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    noindexRoutes.add(normalizedPathname(routeFromPath(BUILD_DIR, file)));
  }
}

let htmlFilesChanged = 0;
let alternateLinksRemoved = 0;
for (const file of htmlFiles) {
  const route = normalizedPathname(routeFromPath(BUILD_DIR, file));
  const original = fs.readFileSync(file, "utf8");
  const cleaned = original.replace(/<link\b[^>]*>/gi, (tag) => {
    if (!/\brel=["']alternate["']/i.test(tag) || !/\bhreflang=/i.test(tag)) {
      return tag;
    }
    const target = normalizedPathname(attribute(tag, "href"));
    if (noindexRoutes.has(route) || (target && noindexRoutes.has(target))) {
      alternateLinksRemoved += 1;
      return "";
    }
    return tag;
  });
  if (cleaned !== original) {
    fs.writeFileSync(file, cleaned);
    htmlFilesChanged += 1;
  }
}

let sitemapFilesChanged = 0;
let sitemapUrlsRemoved = 0;
let sitemapAlternatesRemoved = 0;
for (const sitemap of walkFiles(BUILD_DIR, (name) => name === "sitemap.xml")) {
  const original = fs.readFileSync(sitemap, "utf8");
  const cleaned = original.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (loc && noindexRoutes.has(normalizedPathname(loc))) {
      sitemapUrlsRemoved += 1;
      return "";
    }
    return block.replace(/<xhtml:link\b[^>]*\/?\s*>/gi, (tag) => {
      const target = normalizedPathname(attribute(tag, "href"));
      if (target && noindexRoutes.has(target)) {
        sitemapAlternatesRemoved += 1;
        return "";
      }
      return tag;
    });
  });
  if (cleaned !== original) {
    fs.writeFileSync(sitemap, cleaned);
    sitemapFilesChanged += 1;
  }
}

console.log(
  `[clean-sitemap] noindex=${noindexRoutes.size}, sitemapFiles=${sitemapFilesChanged}, urlsRemoved=${sitemapUrlsRemoved}, sitemapAlternatesRemoved=${sitemapAlternatesRemoved}, htmlFiles=${htmlFilesChanged}, htmlAlternatesRemoved=${alternateLinksRemoved}`,
);
