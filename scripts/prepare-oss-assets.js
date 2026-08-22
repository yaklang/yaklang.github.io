#!/usr/bin/env node

/**
 * Rewrite non-trivial binary assets in a Docusaurus build to immutable OSS URLs.
 *
 * The uploader consumes the generated manifest. Keeping this as a post-build step
 * means future docs/pages inherit the OSS policy without manually maintaining URL
 * constants in React, Sass, Markdown, or generated Docusaurus bundles.
 */

const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");

const DEFAULT_PUBLIC_BASE = "https://aliyun-oss.yaklang.com";
const DEFAULT_OBJECT_PREFIX = "yaklang-website/assets";
const DEFAULT_LARGE_ASSET_BYTES = 100 * 1024;
const MANIFEST_NAME = ".oss-assets-manifest.json";

const ALWAYS_OFFLOAD = new Set([
  ".mp4",
  ".webm",
  ".mov",
  ".m4v",
  ".mp3",
  ".m4a",
  ".wav",
  ".ogg",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf",
]);

const LARGE_BINARY = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".avif",
  ".svg",
  ".ico",
  ".pdf",
  ".zip",
  ".gz",
  ".tgz",
  ".bz2",
  ".xz",
  ".7z",
  ".tar",
  ".wasm",
]);

const REWRITABLE_TEXT = new Set([
  ".html",
  ".css",
  ".js",
  ".mjs",
  ".cjs",
  ".json",
  ".xml",
  ".txt",
  ".webmanifest",
]);

const ASSET_REFERENCE = new RegExp(
  String.raw`(?<![A-Za-z0-9_%~-])(?:https?:\/\/(?:www\.)?(?:yaklang\.com|yaklang\.io))?(?:\/|(?:\.\.\/)+|\.\/)?[^"'\x60()<>\s?#:,;={}\[\]]+?\.(?:mp4|webm|mov|m4v|mp3|m4a|wav|ogg|woff2?|ttf|otf|png|jpe?g|gif|webp|avif|svg|ico|pdf|zip|gz|tgz|bz2|xz|7z|tar|wasm)(?:[?#][^"'\x60()<>\s]*)?`,
  "giu",
);

const QUOTED_ASSET_REFERENCE = new RegExp(
  String.raw`(["'\x60])([^"'\x60\r\n]+?\.(?:mp4|webm|mov|m4v|mp3|m4a|wav|ogg|woff2?|ttf|otf|png|jpe?g|gif|webp|avif|svg|ico|pdf|zip|gz|tgz|bz2|xz|7z|tar|wasm)(?:[?#][^"'\x60\r\n]*)?)\1`,
  "giu",
);

const toPosix = (value) => value.split(path.sep).join("/");

const encodePath = (value) =>
  value
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

const listFiles = (root) => {
  const out = [];
  const visit = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) visit(full);
      else if (entry.isFile()) out.push(full);
    }
  };
  visit(root);
  return out.sort((a, b) => a.localeCompare(b));
};

const sha256File = (file) =>
  crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");

const isEligible = (file, size, threshold) => {
  const ext = path.extname(file).toLowerCase();
  if (ALWAYS_OFFLOAD.has(ext)) return true;
  return size >= threshold && LARGE_BINARY.has(ext);
};

const buildCandidate = (buildDir, file) => {
  const relativePath = toPosix(path.relative(buildDir, file));
  const stats = fs.statSync(file);
  return {
    relativePath,
    file,
    size: stats.size,
    replacements: 0,
  };
};

const safeDecode = (value) => {
  try {
    return decodeURIComponent(value);
  } catch (_error) {
    return value;
  }
};

const decodeJavaScriptPath = (value) =>
  value
    .replace(/\\u\{([0-9a-f]{1,6})\}/giu, (_match, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/\\u([0-9a-f]{4})/giu, (_match, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16)),
    )
    .replace(/\\x([0-9a-f]{2})/giu, (_match, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16)),
    );

const splitReferenceSuffix = (reference) => {
  const index = reference.search(/[?#]/u);
  return index === -1
    ? { pathPart: reference, suffix: "" }
    : { pathPart: reference.slice(0, index), suffix: reference.slice(index) };
};

const resolveCandidate = (reference, textRelativePath, candidatesByPath) => {
  const { pathPart, suffix } = splitReferenceSuffix(reference);
  const withoutHost = pathPart.replace(
    /^https?:\/\/(?:www\.)?(?:yaklang\.com|yaklang\.io)/iu,
    "",
  );
  const decoded = decodeJavaScriptPath(safeDecode(withoutHost));
  const rootPath = path.posix.normalize(decoded.replace(/^\/+/, ""));
  const relativePath = path.posix.normalize(
    path.posix.join(path.posix.dirname(textRelativePath), decoded),
  );
  const candidate = candidatesByPath.get(rootPath) || candidatesByPath.get(relativePath);
  return candidate ? { candidate, suffix } : null;
};

const ensureIdentity = (candidate, publicBase, objectPrefix) => {
  if (candidate.sha256) return;
  candidate.sha256 = sha256File(candidate.file);
  // OSS SDK keys are raw Unicode paths. Only the public HTTP URL is encoded.
  candidate.objectKey = `${objectPrefix}/${candidate.sha256}/${path.basename(candidate.file)}`;
  candidate.url = `${publicBase}/${encodePath(candidate.objectKey)}`;
};

const prepareBuild = ({
  buildDir,
  checkOnly = false,
  manifestPath = path.join(buildDir, MANIFEST_NAME),
  publicBase = process.env.OSS_PUBLIC_BASE_URL || DEFAULT_PUBLIC_BASE,
  objectPrefix = process.env.OSS_ASSET_PREFIX || DEFAULT_OBJECT_PREFIX,
  threshold = Number(process.env.OSS_LARGE_ASSET_BYTES || DEFAULT_LARGE_ASSET_BYTES),
}) => {
  if (!fs.existsSync(buildDir) || !fs.statSync(buildDir).isDirectory()) {
    throw new Error(`Build directory not found: ${buildDir}`);
  }
  if (!Number.isSafeInteger(threshold) || threshold < 1) {
    throw new Error(`Invalid OSS_LARGE_ASSET_BYTES: ${threshold}`);
  }

  const cleanPublicBase = publicBase.replace(/\/+$/, "");
  const cleanObjectPrefix = objectPrefix.replace(/^\/+|\/+$/g, "");
  const allFiles = listFiles(buildDir).filter(
    (file) => path.resolve(file) !== path.resolve(manifestPath),
  );
  const candidates = allFiles
    .filter((file) => isEligible(file, fs.statSync(file).size, threshold))
    .map((file) => buildCandidate(buildDir, file));
  const candidatesByPath = new Map(
    candidates.map((candidate) => [candidate.relativePath, candidate]),
  );

  const textFiles = allFiles.filter((file) =>
    REWRITABLE_TEXT.has(path.extname(file).toLowerCase()),
  );

  for (const textFile of textFiles) {
    const original = fs.readFileSync(textFile, "utf8");
    const textRelativePath = toPosix(path.relative(buildDir, textFile));
    const rewriteReference = (reference) => {
      const resolved = resolveCandidate(
        reference,
        textRelativePath,
        candidatesByPath,
      );
      if (!resolved) return reference;
      ensureIdentity(resolved.candidate, cleanPublicBase, cleanObjectPrefix);
      resolved.candidate.replacements += 1;
      return `${resolved.candidate.url}${resolved.suffix}`;
    };
    const quotedRewritten = original.replace(
      QUOTED_ASSET_REFERENCE,
      (_match, quote, reference) =>
        `${quote}${rewriteReference(reference)}${quote}`,
    );
    const rewritten = quotedRewritten.replace(ASSET_REFERENCE, rewriteReference);
    if (!checkOnly && rewritten !== original) {
      fs.writeFileSync(textFile, rewritten);
    }
  }

  const assetsByObjectKey = new Map();
  for (const candidate of candidates.filter(({ replacements }) => replacements > 0)) {
    const existing = assetsByObjectKey.get(candidate.objectKey);
    if (existing) {
      existing.replacements += candidate.replacements;
      existing.relativePaths.push(candidate.relativePath);
      continue;
    }
    const { file, ...asset } = candidate;
    assetsByObjectKey.set(candidate.objectKey, {
      ...asset,
      relativePaths: [candidate.relativePath],
      sourceFile: toPosix(path.relative(process.cwd(), file)),
    });
  }
  const assets = [...assetsByObjectKey.values()];

  const manifest = {
    version: 1,
    publicBase: cleanPublicBase,
    objectPrefix: cleanObjectPrefix,
    thresholdBytes: threshold,
    buildDir: toPosix(path.relative(process.cwd(), buildDir)) || ".",
    assetCount: assets.length,
    totalBytes: assets.reduce((sum, asset) => sum + asset.size, 0),
    assets,
  };

  if (!checkOnly) {
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }
  return manifest;
};

const selftest = () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "yak-oss-assets-"));
  try {
    fs.mkdirSync(path.join(root, "img", "new home"), { recursive: true });
    fs.mkdirSync(path.join(root, "fonts"), { recursive: true });
    fs.mkdirSync(path.join(root, "assets", "css"), { recursive: true });
    fs.writeFileSync(path.join(root, "img", "new home", "演示 video.mp4"), "video");
    fs.writeFileSync(path.join(root, "fonts", "site.woff2"), "font");
    fs.writeFileSync(path.join(root, "img", "tiny.png"), "tiny");
    fs.writeFileSync(
      path.join(root, "index.html"),
      '<video src="/img/new%20home/%E6%BC%94%E7%A4%BA%20video.mp4"></video>',
    );
    fs.writeFileSync(
      path.join(root, "assets", "css", "styles.css"),
      'src:url("../../fonts/site.woff2") format("woff2")',
    );
    fs.writeFileSync(
      path.join(root, "bundle.js"),
      'const media="img/new home/\\u6f14\\u793a video.mp4";',
    );

    const manifest = prepareBuild({ buildDir: root, threshold: 8 });
    if (manifest.assetCount !== 2) {
      throw new Error(`expected 2 assets, got ${manifest.assetCount}`);
    }
    const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
    const css = fs.readFileSync(
      path.join(root, "assets", "css", "styles.css"),
      "utf8",
    );
    const js = fs.readFileSync(path.join(root, "bundle.js"), "utf8");
    if (
      !html.includes(DEFAULT_PUBLIC_BASE) ||
      !css.includes(DEFAULT_PUBLIC_BASE) ||
      !js.includes(DEFAULT_PUBLIC_BASE)
    ) {
      throw new Error("expected HTML, CSS, and escaped JS references to be rewritten");
    }
    if (
      html.includes("/img/new%20home/%E6%BC%94%E7%A4%BA%20video.mp4") ||
      css.includes("fonts/site.woff2")
    ) {
      throw new Error("a local asset reference survived rewriting");
    }
    const videoAsset = manifest.assets.find(({ relativePath }) =>
      relativePath.endsWith("演示 video.mp4"),
    );
    if (
      !videoAsset?.objectKey.endsWith("演示 video.mp4") ||
      !videoAsset.url.endsWith("%E6%BC%94%E7%A4%BA%20video.mp4")
    ) {
      throw new Error("OSS keys must stay Unicode while public URLs are encoded");
    }
    if (manifest.assets.some((asset) => asset.relativePaths.includes("img/tiny.png"))) {
      throw new Error("unreferenced small asset should not be offloaded");
    }
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
  process.stdout.write("prepare-oss-assets selftest passed\n");
};

const main = () => {
  const args = process.argv.slice(2);
  if (args.includes("--selftest")) {
    selftest();
    return;
  }
  const checkOnly = args.includes("--check");
  const verbose = args.includes("--verbose");
  const positional = args.filter((arg) => !arg.startsWith("--"));
  const buildDir = path.resolve(positional[0] || "build");
  const manifest = prepareBuild({ buildDir, checkOnly });
  const mib = (manifest.totalBytes / 1024 / 1024).toFixed(2);
  process.stdout.write(
    `${checkOnly ? "Would offload" : "Prepared"} ${manifest.assetCount} referenced assets (${mib} MiB)\n`,
  );
  if (verbose) {
    for (const asset of manifest.assets) {
      process.stdout.write(
        `- ${asset.relativePath} -> ${asset.url} (${asset.relativePaths.length} paths, ${asset.replacements} references)\n`,
      );
    }
  }
};

if (require.main === module) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = { prepareBuild };
