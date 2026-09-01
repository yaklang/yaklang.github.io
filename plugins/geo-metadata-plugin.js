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

// 取源文件首次提交时间（ISO 8601），作为 TechArticle 的 datePublished。
// 与 gitMtime 同样容错；文件被重命名过时取的是当前路径下的最早提交，
// 对文档场景足够（宁缺毋假：取不到就跳过该字段，不编造日期）。
function gitFirstMtime(siteDir, relPath) {
  try {
    const out = execSync(`git log --format=%cI -- "${relPath}"`, {
      cwd: siteDir,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    });
    const lines = out.trim().split("\n").filter(Boolean);
    const value = lines[lines.length - 1];
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
  // 2021-2022 年旧文的通用开场白：与文章主题无关，逐篇复用（2026-08-31
  // 第三次审计 F-1）。抽摘要时跳过，取第一段主题相关内容。
  const boilerplateIntros =
    /^(Yak是什么|总之Yak是|Yak 是一门|官网地址[:：]|Github地址[:：]|GitHub地址[:：])/;
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
    .filter(
      (paragraph) =>
        paragraph.length >= 12 &&
        !genericLabels.test(paragraph) &&
        !boilerplateIntros.test(paragraph)
    );

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
  const robotsTag = '<meta data-rh="true" name="robots" content="noindex, follow">';
  return robotsMatcher.test(html)
    ? html.replace(robotsMatcher, robotsTag)
    : appendHeadTag(html, robotsTag);
}

function buildDocumentGraph({
  url,
  title,
  description,
  language,
  segments,
  dateModified,
  datePublished,
}) {
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
  // og:title 通常带「| Yak Project」站点后缀，面包屑末项只保留页面名
  const breadcrumbTitle = title.replace(/\s*\|\s*Yak Project\s*$/, "");
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
      name:
        index === segments.length - 1
          ? breadcrumbTitle
          : labels[segment] || segment,
      item:
        index === segments.length - 1
          ? url
          : // 中间层级用带尾斜杠的最终形式，避免线上 nginx 再 301
            `${origin}/${localePrefix ? `${localePrefix}/` : ""}${segments
              .slice(0, index + 1)
              .join("/")}/`,
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
        // datePublished 取源文件首次 git 提交；dateModified 取最后一次提交。
        // 两者均只写可核实值，取不到就整体跳过，不编造日期。
        ...(datePublished ? { datePublished } : {}),
        ...(dateModified ? { dateModified } : {}),
        // Article 富结果硬性字段：默认封面图（绝对 URL，与博客一致）
        image: [`${origin}/img/newHome/now.webp`],
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

// 博客文章面包屑：首页 > 技术博客 > 文章（此前仅文档页有 BreadcrumbList）
function buildBlogBreadcrumbGraph({ url, title, language }) {
  const pageUrl = new URL(url);
  const origin = pageUrl.origin;
  const blogRoot = `${origin}${language === "en" ? "/en" : ""}/blog/`;
  // og:title 带「| Yak Project」站点后缀，面包屑末项只保留文章名（与
  // buildDocumentGraph 的文档面包屑一致；2026-08-31 审计 S5）
  const breadcrumbTitle = title.replace(/\s*\|\s*Yak Project\s*$/, "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: language === "en" ? "Home" : "首页",
            item: `${origin}${language === "en" ? "/en" : ""}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: language === "en" ? "Tech Blog" : "技术博客",
            item: blogRoot,
          },
          { "@type": "ListItem", position: 3, name: breadcrumbTitle, item: url },
        ],
      },
    ],
  };
}

function updateBlogPostingJsonLd(
  html,
  { url, description, dateModified, image, keywords }
) {
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
          // Article 富结果硬性字段：image（绝对 URL）+ keywords（frontmatter tags）
          if (image) node.image = [image];
          if (keywords && keywords.length) node.keywords = keywords;
          // keywords 空占位（Docusaurus 默认输出 []）整体删除，不留给爬虫
          else if (Array.isArray(node.keywords) && !node.keywords.length)
            delete node.keywords;
          // speakable 与文档页对齐（2026-08-31 审计：博客文章页是 AI 最可能
          // 引用的内容，反而缺失 speakable）
          if (!node.speakable) {
            node.speakable = {
              "@type": "WebPageElement",
              cssSelector: ["article", "h1", "h2"],
            };
          }
          // 与 canonical/面包屑终态对齐：Docusaurus 主题输出的 BlogPosting
          // url/@id/mainEntityOfPage 不带尾斜杠，会造成同页两个规范 URL 信号
          if (url) {
            node.url = url;
            node.mainEntityOfPage = url;
            if (node["@id"]) node["@id"] = `${url}#article`;
          }
          // The global graph defines the Organization once. BlogPosting should
          // reference that entity instead of publishing a second, conflicting
          // partial definition with the same @id.
          node.author = { "@id": `${new URL(url).origin}/#organization` };
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

// 博客列表页 schema 修正（2026-08-31 审计 2.5）：
//   1) Docusaurus 主题把 Blog/BlogPosting 的 author 写成 Person "Yak Project"
//      （组织冒充个人），统一改为指向全局 Organization 实体；
//   2) keywords: [] 空占位删除（文章页由 updateBlogPostingJsonLd 处理）。
function fixBlogListJsonLd(html, origin) {
  const organizationRef = { "@id": `${origin}/#organization` };
  return html.replace(
    /(<script\b[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/gi,
    (script, open, json, close) => {
      try {
        const parsed = JSON.parse(json);
        const nodes = parsed?.["@graph"] || [parsed];
        let changed = false;
        // 列表页的 BlogPosting 嵌在 Blog.blogPost[] 里，也要遍历
        const allNodes = nodes.flatMap((node) =>
          Array.isArray(node?.blogPost) ? [node, ...node.blogPost] : [node]
        );
        for (const node of allNodes) {
          const types = Array.isArray(node?.["@type"])
            ? node["@type"]
            : [node?.["@type"]];
          const isBlogNode = types.includes("Blog") || types.includes("BlogPosting");
          if (!isBlogNode) continue;
          // 仅重写「Person "Yak Project"」这种组织冒充个人的写法；
          // 真实个人作者（如有）保持不动。
          if (
            node.author &&
            typeof node.author === "object" &&
            !Array.isArray(node.author) &&
            node.author["@type"] === "Person" &&
            /Yak Project/i.test(node.author.name || "")
          ) {
            node.author = organizationRef;
            changed = true;
          }
          if (Array.isArray(node.keywords) && !node.keywords.length) {
            delete node.keywords;
            changed = true;
          }
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

// 构建 docs/products/Yaklab 路由 → { dateModified, datePublished } 映射。
// dateModified 取 git 最后提交时间（新鲜度信号）；datePublished 取首次提交
// 时间（TechArticle 富结果必填字段）。路由按文件相对路径推导（与
// translatedEnRoutes 一致），文档若用自定义 slug 需自行扩展。
function sourceRouteMeta(siteDir) {
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
      const relToSite = path.relative(siteDir, f);
      const dateModified = gitMtime(siteDir, relToSite);
      const datePublished = gitFirstMtime(siteDir, relToSite);
      if (dateModified || datePublished) {
        map.set(`${prefix}/${rel}`, { dateModified, datePublished });
      }
    }
  }
  return map;
}

// 解析 frontmatter tags 原始值（形如 ["2021", "traffic"]）为数组。
// 纯数字年份标签（"2021" 等）无语义价值（2026-08-31 审计 M2），过滤掉。
function parseFrontmatterTags(raw) {
  if (!raw) return [];
  const quoted = raw.match(/"([^"]*)"/g);
  const values = quoted
    ? quoted.map((value) => value.slice(1, -1)).filter(Boolean)
    : raw
        .replace(/^\[|\]$/g, "")
        .split(",")
        .map((value) => value.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
  return values.filter((value) => !/^\d+$/.test(value));
}

// 构建博客路由 → { datePublished, dateModified, tags } 映射。
// datePublished 取 frontmatter date；dateModified 取 git 最后提交时间；
// tags 供 BlogPosting.keywords（Docusaurus 默认输出空数组）。
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
      tags: parseFrontmatterTags(frontmatterValue(markdown, "tags")),
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
  // 博客列表/归档/标签页：修正 Blog schema 的作者实体与空 keywords
  const isBlogList =
    localizedRoute === "/blog" ||
    /^\/blog\/(page\/\d+|archive|authors|tags)(\/|$)/.test(localizedRoute);
  // 结构化数据日期：docs/products/Yaklab 取源文件 git 首次/最后提交时间；
  // 博客取 blogRouteMeta 中的 dateModified（git 最后提交时间）。
  const sourceMeta =
    (page.sourceMeta && page.sourceMeta.get(localizedRoute)) || null;
  const blogEntry = page.blogMeta && page.blogMeta.get(localizedRoute);
  const dateModified =
    (sourceMeta && sourceMeta.dateModified) ||
    (blogEntry && blogEntry.dateModified) ||
    null;
  const datePublished = sourceMeta ? sourceMeta.datePublished : null;
  // 英文页判定：已翻译（在白名单内）→ 可索引；否则若正文仍以中文为主（CJK>50，
  // 含自定义页 team/irify/enterpriseCollaboration 等未翻译页面）→ noindex。
  // bodyCjkCount 只统计 <article>/<main> 正文，已避开导航/页脚等公共 chrome。
  const needsEnNoindex =
    page.language === "en" &&
    bodyCjkCount(html) > 50 &&
    !(page.translatedRoutes && page.translatedRoutes.has(page.route));
  // 旧版 Yakit 文档（/products/legacy/）：薄内容，英文侧已按未翻译回退
  // noindex，中文侧同步 noindex 统一策略；clean-sitemap 会把这些路由
  // 移出 sitemap 并剥掉指向它们的 hreflang（2026-08-31 审计 [Medium]）。
  const isLegacyDoc = /^\/products\/legacy(\/|$)/.test(localizedRoute);

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
        datePublished,
      })
    );
  }
  if (isBlogPost && page.description) {
    result = updateBlogPostingJsonLd(result, {
      url: page.url,
      description: page.description,
      dateModified,
      // Article 富结果硬性字段：默认 og 图（1920×540，绝对地址）
      image: `${new URL(page.url).origin}/img/newHome/now.webp`,
      keywords: (blogEntry && blogEntry.tags) || [],
    });
    result = appendJsonLd(
      result,
      buildBlogBreadcrumbGraph({
        url: page.url,
        title: page.title,
        language: page.language,
      })
    );
  }
  if (isBlogList) {
    result = fixBlogListJsonLd(result, new URL(page.url).origin);
  }
  if (needsEnNoindex || isLegacyDoc) result = ensureNoindex(result);
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

const { fetchBuildFacts } = require("../scripts/build-facts");

// llms.txt / llms-full.txt 末尾的「Project facts」段：版本、stars、forks、
// 安装包大小等一手统计（2026-08-31 审计 2.1「统计密度低」）。全部来自
// 构建期实时抓取，取不到的项整体省略，不编造。
function buildFactsSection(facts) {
  const lines = [];
  if (facts.yakitVersion) {
    lines.push(
      `- Latest Yakit release: v${facts.yakitVersion} (retrieved ${facts.fetchedAt} at site build time)`
    );
  }
  if (facts.yakit?.stars != null) {
    lines.push(
      `- GitHub stars: yaklang/yakit ${facts.yakit.stars.toLocaleString("en-US")}`
    );
  }
  if (facts.yaklang?.stars != null) {
    lines.push(
      `- GitHub stars: yaklang/yaklang ${facts.yaklang.stars.toLocaleString("en-US")}`
    );
  }
  if (facts.yakit?.forks != null) {
    lines.push(`- GitHub forks: yaklang/yakit ${facts.yakit.forks.toLocaleString("en-US")}`);
  }
  if (facts.assetSizes) {
    const parts = Object.entries(facts.assetSizes).map(
      ([key, mb]) => `${key} ${mb} MB`
    );
    if (parts.length) {
      lines.push(
        `- Yakit v${facts.yakitVersion} installer sizes: ${parts.join(", ")}`
      );
    }
  }
  if (!lines.length) return "";
  return `\n## Project facts\n\n${lines.join("\n")}\n- Releases: https://github.com/yaklang/yakit/releases\n`;
}

// llms-full.txt 附录：docs/products/Yaklab 全量文档索引（标题 + 一句话摘要，
// 摘要优先 frontmatter description，退化为正文首段），外加 API 索引。
// 目标体积 30-60KB：超出预算即截断，保证「full」名副其实又不失控。
function buildDocsAppendix(siteDir, byteBudget = 45000) {
  const sections = [
    ["docs", "Yaklang programming documentation", "https://yaklang.com/docs"],
    ["products", "Yakit user manual", "https://yaklang.com/products"],
    ["Yaklab", "YakLab tutorials", "https://yaklang.com/Yaklab"],
  ];
  const chunks = ["\n## Documentation index (auto-generated at build time)\n"];
  let budget = byteBudget;
  for (const [dir, label, urlPrefix] of sections) {
    const root = path.join(siteDir, dir);
    if (!fs.existsSync(root)) continue;
    // API 参考页数量大、单页信息密度低，排到最后，预算不够就少收
    const files = walkMarkdownFiles(root).sort((a, b) => {
      const api = (f) => (path.relative(root, f).split(path.sep)[0] === "api" ? 1 : 0);
      return api(a) - api(b);
    });
    const sectionLines = [`\n### ${label}\n`];
    for (const file of files) {
      if (budget <= 0) break;
      const rel = path
        .relative(root, file)
        .replace(/\.(md|mdx)$/, "")
        .split(path.sep)
        .join("/");
      const markdown = fs.readFileSync(file, "utf8");
      const title =
        frontmatterValue(markdown, "title") ||
        markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ||
        rel;
      const description = (
        frontmatterValue(markdown, "description") ||
        extractContentDescription(markdown) ||
        ""
      ).slice(0, 120);
      const line = `- [${title}](${urlPrefix}/${rel})${description ? `: ${description}` : ""}`;
      sectionLines.push(line);
      budget -= Buffer.byteLength(line, "utf8") + 1;
    }
    chunks.push(sectionLines.join("\n"));
  }
  return `${chunks.join("\n")}\n`;
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
      const sourceMeta = sourceRouteMeta(context.siteDir);
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
          sourceMeta,
          blogMeta,
          route,
          url,
          title: htmlTitle(html),
          description,
          language: route === "/en" || route.startsWith("/en/") ? "en" : "zh-CN",
        });
        if (enhanced !== html) fs.writeFileSync(outputPath, enhanced);
      }

      // llms.txt / llms-full.txt 追加一手事实（版本/stars/安装包大小）与文档
      // 索引：AI 可直接引用站内统计（2026-08-31 审计 2.1 统计密度、P2-8）。
      // build/ 每次构建都从 static/ 重新拷贝，直接追加即可，无需幂等处理。
      const facts = fetchBuildFacts();
      const factsSection = buildFactsSection(facts);
      const llmsPath = path.join(outDir, "llms.txt");
      if (factsSection && fs.existsSync(llmsPath)) {
        const content = fs.readFileSync(llmsPath, "utf8");
        fs.writeFileSync(llmsPath, `${content.trimEnd()}\n${factsSection}`);
      }
      const llmsFullPath = path.join(outDir, "llms-full.txt");
      if (fs.existsSync(llmsFullPath)) {
        const content = fs.readFileSync(llmsFullPath, "utf8");
        const appendix = `${factsSection}${buildDocsAppendix(context.siteDir)}`;
        fs.writeFileSync(llmsFullPath, `${content.trimEnd()}\n${appendix}`);
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
