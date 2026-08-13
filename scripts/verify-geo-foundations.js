const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

assert.match(read("static/robots.txt"), /Sitemap: https:\/\/yaklang\.com\/sitemap\.xml/);
assert.match(read("static/robots.txt"), /User-agent: GPTBot\s+Allow: \//);
assert.match(read("static/llms.txt"), /^# Yak Project/m);

const config = read("docusaurus.config.js");
assert.match(config, /"@type": "Organization"/);
assert.match(config, /"@type": "WebSite"/);
assert.match(config, /"og:image"/);
assert.match(read("src/theme/Root.tsx"), /docusaurusI18n\.currentLocale/);

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

console.log("GEO foundation checks passed.");
