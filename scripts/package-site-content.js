#!/usr/bin/env node
/*
 * package-site-content.js
 *
 * 把 Docusaurus 站点当前状态下的 docs/ + products/ + blog/ 内容源打包成 zip,
 * 上传到阿里云 OSS, 供后续构建搜索系统使用。
 *
 * 关键设计: zip 内每个内容文件的路径就编码了它的 source 与 relPath,
 * 解压后凭顶层目录名(docs/products/blog) + 相对路径即可复原 source/relPath,
 * 再套用本文件内的 path 推导规则即可恢复对应的网站 URL。
 *
 * 顶层文件:
 *   - INDEX.json     全量索引, 含路由规则与所有 entry(entries 按 source->relPath 排序, 稳定可 diff)
 *   - INDEX.ndjson   每行一个 entry 的 JSON, 方便流式建索引
 *   - MANIFEST.txt   纯文本说明, 方便人类阅读
 *   - docs/...       原始 md/mdx, 相对路径保留扩展名
 *   - products/...   原始 md/mdx
 *   - blog/...       原始 md
 *
 * CLI:
 *   node scripts/package-site-content.js <outputDir>
 *       通过环境变量 ZIP_NAME 指定输出 zip 文件名(必填)。
 *       outputDir 下会产出 <ZIP_NAME>, 并把 INDEX.json/INDEX.ndjson/MANIFEST.txt
 *       也复制一份到 outputDir 顶层(便于 CI 作为 artifact 单独上传)。
 *       stdout 末尾打印: SUMMARY count=N zip=<abs path> sizeBytes=...
 *
 *   node scripts/package-site-content.js --selftest
 *       在临时目录构造最小 fake 站点, 验证 path/url 推导正确, 不写任何外部文件。
 *
 * 约束: 仅使用 Node 内置模块, 零第三方依赖。
 */
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// 站点固定元信息(与 docusaurus.config.js 对齐)
const SITE_URL = "https://yaklang.com";
const BASE_URL = "/";
const SOURCES = ["docs", "products", "blog"];
// 每个 source 对应的 routeBasePath(用于 path 推导)
const ROUTING = {
  docs: { routeBasePath: "/docs" },
  products: { routeBasePath: "/products" },
  blog: { routeBasePath: "/blog" },
};

// 仅收 md/mdx 作为内容文件; _ 开头的 Docusaurus 元数据(如 _category_.json)跳过
const CONTENT_EXT = new Set([".md", ".mdx"]);

// ---------- frontmatter 解析(稳健, 失败降级为空对象, 绝不抛错) ----------
function parseFrontmatter(text) {
  // 仅识别 ---\n ... \n--- 边界, YAML 字段够用即可
  const head = text.slice(0, Math.min(text.length, 64 * 1024));
  const m = head.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { raw: null, data: {} };
  const raw = m[1];
  const data = {};
  const lines = raw.split(/\r?\n/);
  for (const line of lines) {
    if (line === "" || line.startsWith("#")) continue;
    // 只支持单行 key: value, value 可能带引号
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val === "") {
      data[key] = "";
      continue;
    }
    // 去引号
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    // 数组 [a, b, c]
    if (val.startsWith("[") && val.endsWith("]")) {
      const inner = val.slice(1, -1).trim();
      if (inner === "") {
        data[key] = [];
      } else {
        data[key] = inner
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""))
          .filter((s) => s !== "");
      }
      continue;
    }
    data[key] = val;
  }
  return { raw, data };
}

// 从 markdown 文本中提取第一个 # 标题
function extractFirstH1(text) {
  const lines = text.split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trimEnd();
    // 跳过代码块内的 #
    if (line.startsWith("```")) return null;
    const m = line.match(/^#\s+(.+?)\s*#\{.*\}\s*$/); // # foo {#anchor}
    if (m) return m[1].trim();
    const m2 = line.match(/^#\s+(.+?)\s*$/);
    if (m2) return m2[1].trim();
  }
  return null;
}

// 把 relPath 去扩展名, 去除 index 尾, 用于 docs/products 的 path 推导
function deriveDocPath(routeBasePath, relPath) {
  let p = relPath.replace(/\\/g, "/");
  // 去扩展名
  p = p.replace(/\.(md|mdx)$/i, "");
  // index 文件 -> 父目录
  p = p.replace(/\/index$/i, "");
  if (p === "index") p = "";
  // 拼接 routeBasePath
  let pathPart = routeBasePath;
  if (p !== "") {
    pathPart = routeBasePath + "/" + p;
  }
  // 折叠多余斜杠
  return pathPart.replace(/\/+/g, "/");
}

// blog: 文件名形如 YYYY-MM-DD-name.md, 去日期前缀得 name; 否则直接去 .md
function deriveBlogSlugFromFilename(filename) {
  let base = filename.replace(/\.(md|mdx)$/i, "");
  const m = base.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (m) return m[4];
  return base;
}

// 收集某个根目录下所有 md/mdx 文件, 返回相对路径数组(相对 root, 用 / 分隔)
function walkContent(root) {
  const out = [];
  if (!fs.existsSync(root)) return out;
  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (e) {
      return;
    }
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(full);
      } else if (ent.isFile()) {
        const base = ent.name;
        // _ 开头的文件(如 _category_.json, _*.md)是 Docusaurus 元数据/隐藏页, 跳过
        if (base.startsWith("_")) continue;
        const ext = path.extname(base).toLowerCase();
        if (!CONTENT_EXT.has(ext)) continue;
        out.push(path.relative(root, full).replace(/\\/g, "/"));
      }
    }
  }
  walk(root);
  return out;
}

// 为单个文件构造 entry
function buildEntry(source, relPath, absPath) {
  let text = "";
  let size = 0;
  try {
    text = fs.readFileSync(absPath, "utf8");
    size = fs.statSync(absPath).size;
  } catch (e) {
    // 读不到也容错, 用空内容
    text = "";
    size = 0;
  }
  const fm = parseFrontmatter(text);
  const fmData = fm.data || {};
  let sitePath;
  if (source === "blog") {
    const fname = path.basename(relPath);
    if (fmData.slug !== undefined && fmData.slug !== "") {
      let s = String(fmData.slug);
      if (s.startsWith("/")) s = s.slice(1);
      sitePath = "/blog/" + s;
    } else {
      sitePath = "/blog/" + deriveBlogSlugFromFilename(fname);
    }
  } else {
    const routeBasePath = ROUTING[source].routeBasePath;
    if (fmData.slug !== undefined && fmData.slug !== "") {
      let s = String(fmData.slug);
      if (s.startsWith("/")) {
        sitePath = s;
      } else {
        // docs/products 的 slug 是相对 routeBasePath 的(无前导斜杠时)
        // Docusaurus 文档: 文档级 slug 会替换 doc id 的最后一段, 这里按"覆盖完整 path"语义处理
        // (大多数实践 slug 写成完整路径如 api/v1/x)
        sitePath = routeBasePath + "/" + s;
      }
    } else {
      sitePath = deriveDocPath(routeBasePath, relPath);
    }
  }
  // title
  let title = fmData.title || "";
  if (!title) {
    const h1 = extractFirstH1(text);
    if (h1) title = h1;
  }
  if (!title) {
    title = relPath;
  }
  const entry = {
    source,
    relPath,
    path: sitePath,
    url: SITE_URL + sitePath,
    title,
    size,
  };
  // 可选字段(存在才加, 保持 entry 精简)
  if (fmData.description) entry.description = fmData.description;
  if (fmData.slug !== undefined) entry.slug = String(fmData.slug);
  if (Array.isArray(fmData.tags) && fmData.tags.length > 0) entry.tags = fmData.tags;
  if (fmData.date) entry.date = fmData.date;
  return entry;
}

// 把 str 作为 zip 内文件写入(简单 STORED 或 DEFLATE 都可, 这里用 DEFLATE)
// 实现: 自带一个最小 zip 写器(无第三方依赖)
// 参考 PKZIP APPNOTE; 仅实现写入 deflate 压缩条目 + central directory。
function createZipWriter() {
  const central = []; // {name, crc32, compMethod, compSize, uncompSize, localHeaderOffset}
  const chunks = [];
  let offset = 0;

  function crc32(buf) {
    // 标准实现
    let c;
    if (!crc32.table) {
      crc32.table = new Uint32Array(256);
      for (let n = 0; n < 256; n++) {
        c = n;
        for (let k = 0; k < 8; k++) {
          c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
        }
        crc32.table[n] = c >>> 0;
      }
    }
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crc32.table[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function push(buf) {
    chunks.push(Buffer.from(buf));
    offset += buf.length;
  }

  function toDosTime(date) {
    // date: Date (UTC ok, 实际 zip 用本地 DOS 时间, 这里统一用 UTC 写入即可, 不影响读取)
    const year = date.getUTCFullYear();
    const dosDate = ((Math.max(1980, year) - 1980) << 9) | ((date.getUTCMonth() + 1) << 5) | date.getUTCDate();
    const dosTime = (date.getUTCHours() << 11) | (date.getUTCMinutes() << 5) | (Math.floor(date.getUTCSeconds() / 2));
    return { dosDate, dosTime };
  }

  function addFile(name, contentBuf, opts) {
    opts = opts || {};
    const data = Buffer.isBuffer(contentBuf) ? contentBuf : Buffer.from(contentBuf);
    const crc = crc32(data);
    let compMethod = 0; // 0=stored
    let compBuf = data;
    if (!opts.store && data.length > 0) {
      try {
        compBuf = zlib.deflateRawSync(data, { level: 6 });
        if (compBuf.length < data.length) {
          compMethod = 8;
        } else {
          compBuf = data;
          compMethod = 0;
        }
      } catch (e) {
        compBuf = data;
        compMethod = 0;
      }
    }
    const nameBuf = Buffer.from(name, "utf8");
    const localHeaderOffset = offset;
    const dt = toDosTime(new Date());

    // local file header
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0);
    lh.writeUInt16LE(20, 4); // version needed
    lh.writeUInt16LE(0x0800, 6); // flags: UTF8 name
    lh.writeUInt16LE(compMethod, 8);
    lh.writeUInt16LE(dt.dosTime, 10);
    lh.writeUInt16LE(dt.dosDate, 12);
    lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(compBuf.length, 18);
    lh.writeUInt32LE(data.length, 22);
    lh.writeUInt16LE(nameBuf.length, 26);
    lh.writeUInt16LE(0, 28); // extra len
    push(lh);
    push(nameBuf);
    push(compBuf);

    central.push({
      name,
      nameBuf,
      crc,
      compMethod,
      compSize: compBuf.length,
      uncompSize: data.length,
      localHeaderOffset,
      dosDate: dt.dosDate,
      dosTime: dt.dosTime,
    });
  }

  function finalize() {
    const cdStart = offset;
    for (const c of central) {
      const cd = Buffer.alloc(46);
      cd.writeUInt32LE(0x02014b50, 0);
      cd.writeUInt16LE(20, 4); // version made by
      cd.writeUInt16LE(20, 6); // version needed
      cd.writeUInt16LE(0x0800, 8); // flags: UTF8 name
      cd.writeUInt16LE(c.compMethod, 10);
      cd.writeUInt16LE(c.dosTime, 12);
      cd.writeUInt16LE(c.dosDate, 14);
      cd.writeUInt32LE(c.crc, 16);
      cd.writeUInt32LE(c.compSize, 20);
      cd.writeUInt32LE(c.uncompSize, 24);
      cd.writeUInt16LE(c.nameBuf.length, 28);
      cd.writeUInt16LE(0, 30); // extra
      cd.writeUInt16LE(0, 32); // comment
      cd.writeUInt16LE(0, 34); // disk number
      cd.writeUInt16LE(0, 36); // internal attrs
      cd.writeUInt32LE(0, 38); // external attrs
      cd.writeUInt32LE(c.localHeaderOffset, 42);
      push(cd);
      push(c.nameBuf);
    }
    const cdSize = offset - cdStart;
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(0x06054b50, 0);
    eocd.writeUInt16LE(0, 4); // disk
    eocd.writeUInt16LE(0, 6); // disk with cd
    eocd.writeUInt16LE(central.length, 8);
    eocd.writeUInt16LE(central.length, 10);
    eocd.writeUInt32LE(cdSize, 12);
    eocd.writeUInt32LE(cdStart, 16);
    eocd.writeUInt16LE(0, 20); // comment len
    push(eocd);
    return Buffer.concat(chunks);
  }

  return { addFile, finalize };
}

function buildManifest(generatedAt, count) {
  return [
    "Yaklang Site Content Package",
    "================================",
    "",
    "site:        " + SITE_URL,
    "generatedAt: " + generatedAt + " (UTC ISO)",
    "baseUrl:     " + BASE_URL,
    "sources:     docs, products, blog (Yaklab and any other dirs excluded)",
    "entryCount:  " + count,
    "",
    "Routing rules (Docusaurus, baseUrl=/):",
    "  docs/     -> " + SITE_URL + ROUTING.docs.routeBasePath + "/<relPath-without-ext>  (index.md -> dir)",
    "  products/ -> " + SITE_URL + ROUTING.products.routeBasePath + "/<relPath-without-ext> (index.md -> dir)",
    "  blog/     -> " + SITE_URL + ROUTING.blog.routeBasePath + "/<filename-without-ext-or-date-prefix>",
    "",
    "frontmatter.slug (if present) overrides the derived path for the entry.",
    "",
    "How to recover URL from a file inside this zip:",
    "  1. Look at the top-level dir of the file: docs | products | blog",
    "  2. For docs/products: path = routeBasePath + '/' + (relPath without .md/.mdx)",
    "     (strip trailing /index)",
    "  3. For blog: path = /blog/ + (filename without .md, without YYYY-MM-DD- prefix)",
    "  4. full url = " + SITE_URL + " + path",
    "  Or just read INDEX.json / INDEX.ndjson for the authoritative mapping.",
    "",
    "INDEX.json    full index with routing meta + sorted entries",
    "INDEX.ndjson  one entry per line, same fields as INDEX.json.entries",
    "",
  ].join("\n");
}

// ---------- 主打包流程 ----------
function packageSite(repoRoot, outputDir, zipName) {
  const entries = [];
  for (const source of SOURCES) {
    const root = path.join(repoRoot, source);
    const rels = walkContent(root);
    for (const rel of rels) {
      const abs = path.join(root, rel);
      const entry = buildEntry(source, rel, abs);
      entries.push(entry);
    }
  }
  // 排序: source -> relPath, 保证稳定可 diff
  entries.sort((a, b) => {
    if (a.source !== b.source) return a.source < b.source ? -1 : 1;
    return a.relPath < b.relPath ? -1 : a.relPath > b.relPath ? 1 : 0;
  });

  const generatedAt = new Date().toISOString();
  const indexJson = {
    site: SITE_URL,
    generatedAt,
    baseUrl: BASE_URL,
    sources: SOURCES,
    routing: ROUTING,
    count: entries.length,
    entries,
  };
  const indexJsonBuf = Buffer.from(JSON.stringify(indexJson, null, 2) + "\n", "utf8");
  const ndjsonLines = entries.map((e) => JSON.stringify(e));
  const ndjsonBuf = Buffer.from(ndjsonLines.join("\n") + "\n", "utf8");
  const manifestBuf = Buffer.from(buildManifest(generatedAt, entries.length), "utf8");

  // 写 zip
  const zw = createZipWriter();
  zw.addFile("INDEX.json", indexJsonBuf);
  zw.addFile("INDEX.ndjson", ndjsonBuf);
  zw.addFile("MANIFEST.txt", manifestBuf);
  for (const e of entries) {
    const abs = path.join(repoRoot, e.source, e.relPath);
    let buf;
    try {
      buf = fs.readFileSync(abs);
    } catch (err) {
      buf = Buffer.from("");
    }
    // zip 内路径: <source>/<relPath> 保留扩展名
    const zipInner = e.source + "/" + e.relPath;
    zw.addFile(zipInner, buf);
  }
  const zipBuf = zw.finalize();

  // 输出
  fs.mkdirSync(outputDir, { recursive: true });
  const zipAbs = path.join(outputDir, zipName);
  fs.writeFileSync(zipAbs, zipBuf);
  // 复制 INDEX/manifest 到 outputDir 顶层
  fs.writeFileSync(path.join(outputDir, "INDEX.json"), indexJsonBuf);
  fs.writeFileSync(path.join(outputDir, "INDEX.ndjson"), ndjsonBuf);
  fs.writeFileSync(path.join(outputDir, "MANIFEST.txt"), manifestBuf);
  // 同时写一份机器可读的 summary 文件, 便于 CI 解析(避免重跑)
  fs.writeFileSync(
    path.join(outputDir, ".summary"),
    `count=${entries.length}\nzip=${zipAbs}\nsizeBytes=${zipBuf.length}\n`,
    "utf8"
  );

  const summary = `SUMMARY count=${entries.length} zip=${zipAbs} sizeBytes=${zipBuf.length}`;
  console.log(summary);
  return { count: entries.length, zipAbs, sizeBytes: zipBuf.length };
}

// ---------- selftest ----------
function runSelftest() {
  const tmp = fs.mkdtempSync(path.join(require("os").tmpdir(), "site-pkg-selftest-"));
  try {
    // 构造最小 fake 站点
    fs.mkdirSync(path.join(tmp, "docs", "api"), { recursive: true });
    fs.mkdirSync(path.join(tmp, "products", "legacy"), { recursive: true });
    fs.mkdirSync(path.join(tmp, "blog"), { recursive: true });

    // docs/api/poc.md  -> /docs/api/poc
    fs.writeFileSync(
      path.join(tmp, "docs", "api", "poc.md"),
      "# poc library\n\ncontent\n"
    );
    // docs/_category_.json  应被跳过
    fs.writeFileSync(
      path.join(tmp, "docs", "_category_.json"),
      JSON.stringify({ label: "x" })
    );
    // docs/api/_category_.json  应被跳过
    fs.writeFileSync(
      path.join(tmp, "docs", "api", "_category_.json"),
      JSON.stringify({ label: "api" })
    );
    // docs/intro.mdx  -> /docs/intro
    fs.writeFileSync(
      path.join(tmp, "docs", "intro.mdx"),
      "---\ntitle: Intro\n---\n\n# Intro\n"
    );
    // products/intro.mdx  -> /products/intro
    fs.writeFileSync(
      path.join(tmp, "products", "intro.mdx"),
      "# Products Intro\n"
    );
    // products/legacy/x.md  -> /products/legacy/x
    fs.writeFileSync(
      path.join(tmp, "products", "legacy", "x.md"),
      "# x\n"
    );
    // blog/2021-12-07-311.md  无 slug -> /blog/311
    fs.writeFileSync(
      path.join(tmp, "blog", "2021-12-07-311.md"),
      "---\ntitle: A\ndate: 2021-12-07\n---\n\nbody\n"
    );
    // blog/2022-01-01-with-slug.md  有 slug -> /blog/<slug>
    fs.writeFileSync(
      path.join(tmp, "blog", "2022-01-01-with-slug.md"),
      "---\ntitle: B\nslug: my-cool-slug\ndate: 2022-01-01\n---\n\nbody\n"
    );
    // blog/no-date.md  -> /blog/no-date
    fs.writeFileSync(
      path.join(tmp, "blog", "no-date.md"),
      "# NoDate\n"
    );

    // 期望 path/url
    const expected = {
      "docs/api/poc.md": { path: "/docs/api/poc", title: "poc library" },
      "docs/intro.mdx": { path: "/docs/intro", title: "Intro" },
      "products/intro.mdx": { path: "/products/intro", title: "Products Intro" },
      "products/legacy/x.md": { path: "/products/legacy/x", title: "x" },
      "blog/2021-12-07-311.md": { path: "/blog/311", title: "A" },
      "blog/2022-01-01-with-slug.md": { path: "/blog/my-cool-slug", title: "B" },
      "blog/no-date.md": { path: "/blog/no-date", title: "NoDate" },
    };

    // 收集 entries
    const got = {};
    for (const source of SOURCES) {
      const root = path.join(tmp, source);
      const rels = walkContent(root);
      for (const rel of rels) {
        const abs = path.join(root, rel);
        const e = buildEntry(source, rel, abs);
        got[e.source + "/" + e.relPath] = { path: e.path, title: e.title, url: e.url };
      }
    }
    let ok = true;
    for (const [k, v] of Object.entries(expected)) {
      const g = got[k];
      if (!g) {
        console.error("SELFTEST FAIL missing entry:", k);
        ok = false;
        continue;
      }
      if (g.path !== v.path) {
        console.error("SELFTEST FAIL path for", k, "expected", v.path, "got", g.path);
        ok = false;
      }
      if (g.title !== v.title) {
        console.error("SELFTEST FAIL title for", k, "expected", v.title, "got", g.title);
        ok = false;
      }
      const expectedUrl = SITE_URL + v.path;
      if (g.url !== expectedUrl) {
        console.error("SELFTEST FAIL url for", k, "expected", expectedUrl, "got", g.url);
        ok = false;
      }
    }
    // _category_.json 必须被跳过
    const skipped = ["docs/_category_.json", "docs/api/_category_.json"];
    for (const s of skipped) {
      const key = s;
      if (got[key]) {
        console.error("SELFTEST FAIL should be skipped:", key);
        ok = false;
      }
    }
    // 也要验证 zip 真的能跑出来
    const outDir = path.join(tmp, "out");
    const res = packageSite(tmp, outDir, "selftest.zip");
    if (!fs.existsSync(res.zipAbs)) {
      console.error("SELFTEST FAIL zip not written:", res.zipAbs);
      ok = false;
    }
    if (res.count !== Object.keys(expected).length) {
      console.error(
        "SELFTEST FAIL count expected",
        Object.keys(expected).length,
        "got",
        res.count
      );
      ok = false;
    }

    if (ok) {
      console.log("SELFTEST OK count=" + res.count);
      return true;
    }
    return false;
  } finally {
    try {
      fs.rmSync(tmp, { recursive: true, force: true });
    } catch (e) {}
  }
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes("--selftest")) {
    const ok = runSelftest();
    process.exit(ok ? 0 : 1);
  }
  const outputDir = argv[0];
  if (!outputDir) {
    console.error("usage: node scripts/package-site-content.js <outputDir>");
    console.error("       env ZIP_NAME must be set");
    process.exit(2);
  }
  const zipName = process.env.ZIP_NAME;
  if (!zipName) {
    console.error("env ZIP_NAME is required");
    process.exit(2);
  }
  const repoRoot = path.resolve(__dirname, "..");
  packageSite(repoRoot, path.resolve(outputDir), zipName);
}

main();
