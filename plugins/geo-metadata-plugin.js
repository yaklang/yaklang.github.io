const fs = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");

const MAX_DESCRIPTION_LENGTH = 180;

// 取源文件最后一次 git 提交时间（ISO 8601），作为结构化数据的 dateModified。
// 不可用（非 git 仓库 / 文件未纳入版本控制）时返回 null，调用方自行跳过。
function gitMtime(siteDir, relPath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
      cwd: siteDir,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    });
    const value = out.trim();
    return value || null;
  } catch {
    return null;
  }
}

function stripMarkdown(value) {
  return value
    .replace(/!?(?:\[([^\]]*)\])\([^)]*\)/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/[*_~>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractDescription(markdown) {
  const content = markdown.replace(/^---[\s\S]*?---\s*/, "");
  const lines = content.split(/\r?\n/);
  const firstHeading = lines.findIndex((line) => /^#\s+/.test(line));
  if (firstHeading === -1) return null;

  const paragraph = [];
  for (const line of lines.slice(firstHeading + 1)) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (paragraph.length) break;
      continue;
    }
    if (/^(#|```|\||[-*+]\s|>)/.test(trimmed)) {
      if (paragraph.length) break;
      continue;
    }
    paragraph.push(trimmed);
  }

  const description = stripMarkdown(paragraph.join(" "));
  if (!description) return null;
  return description.length > MAX_DESCRIPTION_LENGTH
    ? `${description.slice(0, MAX_DESCRIPTION_LENGTH - 1).trimEnd()}…`
    : description;
}

function extractContentDescription(markdown) {
  const content = markdown
    .replace(/^---[\s\S]*?---\s*/, "")
    .replace(/<!--([\s\S]*?)-->/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/~~~[\s\S]*?~~~/g, "");
  const genericLabels = /^(背景|前言|引言|概述|简介|overview|background|introduction)[：:]?$/i;
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((paragraph) =>
      stripMarkdown(
        paragraph
          .split(/\r?\n/)
          .filter((line) => {
            const trimmed = line.trim();
            return (
              trimmed &&
              !/^#{1,6}\s/.test(trimmed) &&
              !/^:::[a-z-]*/i.test(trimmed) &&
              !/^!\[/.test(trimmed) &&
              !/^\|/.test(trimmed)
            );
          })
          .join(" ")
      )
    )
    .filter((paragraph) => paragraph.length >= 12 && !genericLabels.test(paragraph));

  let description = "";
  for (const paragraph of paragraphs) {
    const separator =
      description &&
      !/[。！？.!?]$/.test(description) &&
      !/^[，。！？、；：,.!?;:]/.test(paragraph)
        ? " "
        : "";
    description += `${separator}${paragraph}`;
    if (description.length >= 120) break;
  }

  if (!description) return null;
  if (description.length <= MAX_DESCRIPTION_LENGTH) return description;
  const shortened = description.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  const sentenceEnd = Math.max(
    shortened.lastIndexOf("。"),
    shortened.lastIndexOf("！"),
    shortened.lastIndexOf("？"),
    shortened.lastIndexOf(". "),
    shortened.lastIndexOf("! "),
    shortened.lastIndexOf("? ")
  );
  return `${(sentenceEnd >= 80 ? shortened.slice(0, sentenceEnd + 1) : shortened).trimEnd()}…`;
}

function escapeHtmlAttribute(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceMetaDescription(html, description) {
  const escapedDescription = escapeHtmlAttribute(description);
  const descriptionTag = `<meta data-rh="true" name="description" content="${escapedDescription}">`;
  const ogDescriptionTag = `<meta data-rh="true" property="og:description" content="${escapedDescription}">`;
  const descriptionMatcher = /<meta\b(?=[^>]*\bname="description")[^>]*>/g;
  const ogDescriptionMatcher = /<meta\b(?=[^>]*\bproperty="og:description")[^>]*>/g;

  const hasDescription = descriptionMatcher.test(html);
  descriptionMatcher.lastIndex = 0;
  const hasOgDescription = ogDescriptionMatcher.test(html);
  ogDescriptionMatcher.lastIndex = 0;
  const rewritten = html
    .replace(descriptionMatcher, descriptionTag)
    .replace(ogDescriptionMatcher, ogDescriptionTag);

  if (hasDescription && hasOgDescription) return rewritten;
  const missingTags = `${hasDescription ? "" : descriptionTag}${hasOgDescription ? "" : ogDescriptionTag}`;
  return rewritten.replace("</head>", `${missingTags}</head>`);
}

function decodeHtmlEntities(value) {
  const named = {
    amp: "&",
    quot: '"',
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
  };
  return value.replace(
    /&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi,
    (entity, code) => {
      if (code[0] !== "#") return named[code.toLowerCase()] ?? entity;
      const numeric = code[1].toLowerCase() === "x"
        ? Number.parseInt(code.slice(2), 16)
        : Number.parseInt(code.slice(1), 10);
      return Number.isFinite(numeric) ? String.fromCodePoint(numeric) : entity;
    }
  );
}

function metaContent(html, attribute, value) {
  for (const tag of html.match(/<meta\b[^>]*>/g) || []) {
    const attributeMatch = tag.match(new RegExp(`\\b${attribute}="([^"]*)"`, "i"));
    if (!attributeMatch || attributeMatch[1] !== value) continue;
    return decodeHtmlEntities(tag.match(/\bcontent="([^"]*)"/i)?.[1] || "");
  }
  return "";
}

function appendHeadTag(html, tag) {
  return html.includes("</head>") ? html.replace("</head>", `${tag}</head>`) : `${tag}${html}`;
}

function ensureMeta(html, attribute, value, content) {
  if (!content || metaContent(html, attribute, value)) return html;
  return appendHeadTag(
    html,
    `<meta data-rh="true" ${attribute}="${value}" content="${escapeHtmlAttribute(content)}">`
  );
}

function completeSocialMetadata(html, type = "website") {
  const title = metaContent(html, "property", "og:title");
  const description = metaContent(html, "property", "og:description");
  let result = ensureMeta(html, "property", "og:type", type);
  result = ensureMeta(result, "name", "twitter:title", title);
  result = ensureMeta(result, "name", "twitter:description", description);
  return result;
}

function ensureNoindex(html) {
  const robotsMatcher = /<meta\b(?=[^>]*\bname="robots")[^>]*>/i;
  const robotsTag = '<meta data-rh="true" name="robots" content="noindex, nofollow">';
  return robotsMatcher.test(html)
    ? html.replace(robotsMatcher, robotsTag)
    : appendHeadTag(html, robotsTag);
}

function buildDocumentGraph({ url, title, description, language, segments, dateModified }) {
  const pageUrl = new URL(url);
  const origin = pageUrl.origin;
  const canonicalSegments = pageUrl.pathname.split("/").filter(Boolean);
  const localePrefix =
    language === "en" && canonicalSegments[0] === "en" ? "en" : "";
  const localizedRoot = `${origin}/${localePrefix ? `${localePrefix}/` : ""}`;
  const labels = {
    docs: language === "en" ? "Documentation" : "文档",
    products: language === "en" ? "Yakit Manual" : "Yakit 使用手册",
    Yaklab: "YakLab",
    api: "API",
  };
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: language === "en" ? "Home" : "首页",
      item: localizedRoot,
    },
    ...segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: index === segments.length - 1 ? title : labels[segment] || segment,
      item:
        index === segments.length - 1
          ? url
          : `${origin}/${localePrefix ? `${localePrefix}/` : ""}${segments
              .slice(0, index + 1)
              .join("/")}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${url}#article`,
        headline: title,
        description,
        url,
        inLanguage: language,
        mainEntityOfPage: url,
        author: { "@id": `${origin}/#organization` },
        publisher: { "@id": `${origin}/#organization` },
        isPartOf: { "@id": `${origin}/#website` },
        ...(dateModified ? { datePublished: dateModified, dateModified } : {}),
        // 指向页面主内容容器，便于语音助手/语音搜索摘录关键段落
        speakable: {
          "@type": "WebPageElement",
          cssSelector: ["article", ".theme-doc-markdown", ".markdown", "h1", "h2"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement,
      },
    ],
  };
}

function appendJsonLd(html, value) {
  return appendHeadTag(
    html,
    `<script type="application/ld+json">${JSON.stringify(value).replace(/</g, "\\u003c")}</script>`
  );
}

function updateBlogPostingJsonLd(html, { url, description, dateModified }) {
  return html.replace(
    /(<script\b[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/gi,
    (script, open, json, close) => {
      try {
        const parsed = JSON.parse(json);
        const nodes = parsed?.["@graph"] || [parsed];
        let changed = false;
        for (const node of nodes) {
          const types = Array.isArray(node?.["@type"])
            ? node["@type"]
            : [node?.["@type"]];
          if (!types.includes("BlogPosting")) continue;
          node.description = description;
          if (dateModified) node.dateModified = dateModified;
          node.author = {
            "@type": "Organization",
            "@id": `${new URL(url).origin}/#organization`,
            name: "Yak Project",
            url: "https://github.com/yaklang",
          };
          node.publisher = { "@id": `${new URL(url).origin}/#organization` };
          changed = true;
        }
        return changed
          ? `${open}${JSON.stringify(parsed).replace(/</g, "\\u003c")}${close}`
          : script;
      } catch {
        return script;
      }
    }
  );
}

function removeBreadcrumbJsonLd(html) {
  return html.replace(
    /(<script\b[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/gi,
    (script, open, json, close) => {
      try {
        const parsed = JSON.parse(json);
        if (parsed?.["@type"] === "BreadcrumbList") return "";
        if (!Array.isArray(parsed?.["@graph"])) return script;
        const filtered = parsed["@graph"].filter(
          (node) => node?.["@type"] !== "BreadcrumbList"
        );
        if (filtered.length === parsed["@graph"].length) return script;
        if (!filtered.length) return "";
        parsed["@graph"] = filtered;
        return `${open}${JSON.stringify(parsed).replace(/</g, "\\u003c")}${close}`;
      } catch {
        return script;
      }
    }
  );
}

function containsCjk(text) {
  return (
    typeof text === "string" &&
    /[一-鿿㐀-䶿豈-﫿]/.test(text)
  );
}

// 统计页面正文中的 CJK 字符数：判断英文页是否仍是中文回退内容。
// 优先取 <article>（文档/博客正文），避开侧边栏/页脚里未本地化的中文章节标签。
function bodyCjkCount(html) {
  const region =
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] ||
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ||
    html;
  const text = region
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "");
  const cjk = text.match(/[一-鿿㐀-䶿豈-﫿]/g);
  return cjk ? cjk.length : 0;
}

// 递归收集 .md/.mdx 文件
function walkMarkdownFiles(root) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(full);
    return entry.isFile() && /\.(md|mdx)$/.test(entry.name) ? [full] : [];
  });
}

// 扫描 i18n/en 译文目录，确定哪些 en 路由"已翻译"（有真实英文译文文件）。
// 用作白名单：只有已翻译的 en docs/blog 页可索引，其余（zh 回退）一律 noindex。
// 新增翻译时只需在 i18n/en/ 放译文文件，无需改代码。
function translatedEnRoutes(siteDir) {
  const routes = new Set();
  const docsPlugins = [
    ["docusaurus-plugin-content-docs", "/en/docs"],
    ["docusaurus-plugin-content-docs-products", "/en/products"],
    ["docusaurus-plugin-content-docs-Yaklab", "/en/Yaklab"],
  ];
  for (const [dir, prefix] of docsPlugins) {
    const root = path.join(siteDir, "i18n", "en", dir, "current");
    if (!fs.existsSync(root)) continue;
    for (const f of walkMarkdownFiles(root)) {
      const rel = path
        .relative(root, f)
        .replace(/\.(md|mdx)$/, "")
        .split(path.sep)
        .join("/");
      routes.add(`${prefix}/${rel}`);
    }
  }
  const blogRoot = path.join(siteDir, "i18n", "en", "docusaurus-plugin-content-blog");
  if (fs.existsSync(blogRoot)) {
    for (const entry of fs.readdirSync(blogRoot)) {
      if (!/\.(md|mdx)$/.test(entry)) continue;
      const md = fs.readFileSync(path.join(blogRoot, entry), "utf8");
      const slug = frontmatterValue(md, "slug");
      if (slug) routes.add(`/en/blog/${slug}`);
    }
  }
  return routes;
}

// 构建 docs/products/Yaklab 路由 → dateModified 映射（git 最后提交时间）。
// 用于给 TechArticle 注入新鲜度信号。路由按文件相对路径推导（与
// translatedEnRoutes 一致），文档若用自定义 slug 需自行扩展。
function sourceRouteMtime(siteDir) {
  const map = new Map();
  const sections = [
    ["docs", "/docs"],
    ["products", "/products"],
    ["Yaklab", "/Yaklab"],
  ];
  for (const [dir, prefix] of sections) {
    const root = path.join(siteDir, dir);
    if (!fs.existsSync(root)) continue;
    for (const f of walkMarkdownFiles(root)) {
      const rel = path
        .relative(root, f)
        .replace(/\.(md|mdx)$/, "")
        .split(path.sep)
        .join("/");
      const mtime = gitMtime(siteDir, path.relative(siteDir, f));
      if (mtime) map.set(`${prefix}/${rel}`, mtime);
    }
  }
  return map;
}

// 构建博客路由 → { datePublished, dateModified } 映射。
// datePublished 取 frontmatter date；dateModified 取 git 最后提交时间。
function blogRouteMeta(blogRoot, siteDir) {
  const map = new Map();
  if (!fs.existsSync(blogRoot)) return map;
  for (const entry of fs.readdirSync(blogRoot, { withFileTypes: true })) {
    if (!entry.isFile() || !/\.mdx?$/.test(entry.name)) continue;
    const file = path.join(blogRoot, entry.name);
    const markdown = fs.readFileSync(file, "utf8");
    const slug = frontmatterValue(markdown, "slug");
    if (!slug) continue;
    map.set(`/blog/${slug}`, {
      datePublished: frontmatterValue(markdown, "date"),
      dateModified: gitMtime(siteDir, path.relative(siteDir, file)),
    });
  }
  return map;
}

function enhanceHtmlForRoute(html, page) {
  const normalizedRoute = page.route.replace(/\/$/, "") || "/";
  const localizedRoute = normalizedRoute.replace(/^\/en(?=\/|$)/, "") || "/";
  const isDocument = /^\/(docs|products|Yaklab)(\/|$)/.test(localizedRoute);
  const isBlogPost =
    /^\/blog\/[^/]+$/.test(localizedRoute) &&
    !/^\/blog\/(archive|authors|tags|page)$/.test(localizedRoute);
  // 结构化数据新鲜度：docs/products/Yaklab 取源文件 git 最后提交时间；
  // 博客取 blogRouteMeta 中的 dateModified（同为 git 最后提交时间）。
  const sourceMtime =
    (page.sourceMtime && page.sourceMtime.get(localizedRoute)) || null;
  const blogEntry = page.blogMeta && page.blogMeta.get(localizedRoute);
  const dateModified = sourceMtime || (blogEntry && blogEntry.dateModified) || null;
  // 英文页判定：已翻译（在白名单内）→ 可索引；否则若正文仍以中文为主（CJK>50，
  // 含自定义页 team/irify/enterpriseCollaboration 等未翻译页面）→ noindex。
  // bodyCjkCount 只统计 <article>/<main> 正文，已避开导航/页脚等公共 chrome。
  const needsEnNoindex =
    page.language === "en" &&
    bodyCjkCount(html) > 50 &&
    !(page.translatedRoutes && page.translatedRoutes.has(page.route));

  let result = page.description
    ? replaceMetaDescription(html, page.description)
    : html;
  // 文档/博客均为文章型内容，og:type 用 article 更贴合语义
  result = completeSocialMetadata(
    result,
    isBlogPost || isDocument ? "article" : "website"
  );

  if (isDocument && page.description) {
    const segments = localizedRoute.split("/").filter(Boolean);
    result = removeBreadcrumbJsonLd(result);
    result = appendJsonLd(
      result,
      buildDocumentGraph({
        url: page.url,
        title: page.title,
        description: page.description,
        language: page.language,
        segments,
        dateModified,
      })
    );
  }
  if (isBlogPost && page.description) {
    result = updateBlogPostingJsonLd(result, {
      url: page.url,
      description: page.description,
      dateModified,
    });
  }
  if (needsEnNoindex) result = ensureNoindex(result);
  return result;
}

function htmlFiles(root) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) return htmlFiles(fullPath);
    return entry.isFile() && entry.name === "index.html" ? [fullPath] : [];
  });
}

function frontmatterValue(markdown, key) {
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || "";
  const value = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim();
  return value?.replace(/^(["'])([\s\S]*)\1$/, "$2") || null;
}

function blogDescriptionMap(blogRoot) {
  if (!fs.existsSync(blogRoot)) return new Map();
  const descriptions = new Map();
  for (const entry of fs.readdirSync(blogRoot, { withFileTypes: true })) {
    if (!entry.isFile() || !/\.mdx?$/.test(entry.name)) continue;
    const markdown = fs.readFileSync(path.join(blogRoot, entry.name), "utf8");
    const slug = frontmatterValue(markdown, "slug");
    const description =
      frontmatterValue(markdown, "description") || extractContentDescription(markdown);
    if (slug && description) descriptions.set(`/blog/${slug}`, description);
  }
  return descriptions;
}

function canonicalUrl(html) {
  for (const tag of html.match(/<link\b[^>]*>/g) || []) {
    if (!/\brel="canonical"/i.test(tag)) continue;
    const href = tag.match(/\bhref="([^"]+)"/i)?.[1];
    if (href) return href;
  }
  return "";
}

function htmlTitle(html) {
  return (
    metaContent(html, "property", "og:title") ||
    html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ||
    "Yak Project"
  );
}

function publicRouteForLocale(route, currentLocale, defaultLocale) {
  if (!currentLocale || currentLocale === defaultLocale) return route;
  return `/${currentLocale}${route === "/" ? "" : route}`;
}

function apiDocFiles(apiRoot) {
  return fs.readdirSync(apiRoot, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(apiRoot, entry.name);
    if (entry.isDirectory()) return apiDocFiles(fullPath);
    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
  });
}

module.exports = function geoMetadataPlugin(context) {
  return {
    name: "geo-api-description-plugin",
    async postBuild({ outDir }) {
      const apiRoot = path.join(context.siteDir, "docs", "api");
      const routeDescriptions = blogDescriptionMap(
        path.join(context.siteDir, "blog")
      );

      if (fs.existsSync(apiRoot)) {
        for (const sourcePath of apiDocFiles(apiRoot)) {
          const description = extractDescription(fs.readFileSync(sourcePath, "utf8"));
          if (!description) continue;
          const route = `/docs/api/${path
            .relative(apiRoot, sourcePath)
            .replace(/\.md$/, "")
            .split(path.sep)
            .join("/")}`;
          routeDescriptions.set(route, description);
        }
      }

      const translatedRoutes = translatedEnRoutes(context.siteDir);
      // 路由 → 源文件最后提交时间 / 博客日期元数据，供结构化数据注入 dateModified
      const sourceMtime = sourceRouteMtime(context.siteDir);
      const blogMeta = blogRouteMeta(
        path.join(context.siteDir, "blog"),
        context.siteDir
      );

      for (const outputPath of htmlFiles(outDir)) {
        const relative = path.relative(outDir, outputPath);
        const localeRoute =
          relative === "index.html"
            ? "/"
            : `/${path.dirname(relative).split(path.sep).join("/")}`;
        const route = publicRouteForLocale(
          localeRoute,
          context.i18n?.currentLocale,
          context.i18n?.defaultLocale
        );
        const localizedRoute = route.replace(/^\/en(?=\/|$)/, "") || "/";
        const html = fs.readFileSync(outputPath, "utf8");
        const isEn = route === "/en" || route.startsWith("/en/");
        // 英文页用其渲染后的（已翻译）描述，不覆盖为中文源描述；
        // 否则已翻译的 en 页会被中文描述误判为"未翻译"而 noindex。
        const description = isEn
          ? metaContent(html, "name", "description") ||
            metaContent(html, "property", "og:description")
          : routeDescriptions.get(localizedRoute) ||
            metaContent(html, "name", "description") ||
            metaContent(html, "property", "og:description");
        const url = canonicalUrl(html) || `${context.siteConfig.url}${route}`;
        const enhanced = enhanceHtmlForRoute(html, {
          translatedRoutes,
          sourceMtime,
          blogMeta,
          route,
          url,
          title: htmlTitle(html),
          description,
          language: route === "/en" || route.startsWith("/en/") ? "en" : "zh-CN",
        });
        if (enhanced !== html) fs.writeFileSync(outputPath, enhanced);
      }
    },
  };
};

module.exports.extractDescription = extractDescription;
module.exports.extractContentDescription = extractContentDescription;
module.exports.decodeHtmlEntities = decodeHtmlEntities;
module.exports.replaceMetaDescription = replaceMetaDescription;
module.exports.completeSocialMetadata = completeSocialMetadata;
module.exports.ensureNoindex = ensureNoindex;
module.exports.buildDocumentGraph = buildDocumentGraph;
module.exports.enhanceHtmlForRoute = enhanceHtmlForRoute;
module.exports.publicRouteForLocale = publicRouteForLocale;
