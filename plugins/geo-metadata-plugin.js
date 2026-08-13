const fs = require("node:fs");
const path = require("node:path");

const MAX_DESCRIPTION_LENGTH = 180;

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
      if (!fs.existsSync(apiRoot)) return;

      for (const sourcePath of apiDocFiles(apiRoot)) {
        const description = extractDescription(fs.readFileSync(sourcePath, "utf8"));
        if (!description) continue;
        const route = path
          .relative(apiRoot, sourcePath)
          .replace(/\.md$/, "")
          .split(path.sep);
        const outputPath = path.join(outDir, "docs", "api", ...route, "index.html");
        if (!fs.existsSync(outputPath)) continue;
        const html = fs.readFileSync(outputPath, "utf8");
        fs.writeFileSync(outputPath, replaceMetaDescription(html, description));
      }
    },
  };
};

module.exports.extractDescription = extractDescription;
module.exports.replaceMetaDescription = replaceMetaDescription;
