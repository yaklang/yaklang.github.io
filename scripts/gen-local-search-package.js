#!/usr/bin/env node
/*
 * gen-local-search-package.js
 *
 * 本地开发用: 复用 package-site-content.js 的 packageSite() 把当前仓库的
 * docs/ + products/ + blog/ 打包成 static/site-content/latest.zip, 同时写
 * latest.json, 供前端搜索在 dev 模式下同源消费(零 CORS、不依赖 OSS/CI)。
 *
 * 产出文件路径(与 CI 在 master 上回写的路径完全一致, 前端代码无需区分环境):
 *   static/site-content/latest.zip
 *   static/site-content/latest.json
 *
 * 用法:
 *   node scripts/gen-local-search-package.js
 *
 * 该文件被 .gitignore 忽略(dev mock 不污染仓库), 生产版本由 CI 用 git add -f 提交。
 *
 * 关键词: search package, local mock, dev content package
 */
const fs = require("fs");
const path = require("path");

const { packageSite } = require("./package-site-content");

const repoRoot = path.resolve(__dirname, "..");
const outputDir = path.join(repoRoot, "static", "site-content");

const ZIP_NAME = "latest.zip";

function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const res = packageSite(repoRoot, outputDir, ZIP_NAME);

  // 解析 INDEX.json 顶层字段生成 latest.json, 字段与 CI 版本保持一致,
  // 前端用 id 判断是否需要重建索引, generatedAt 用于展示建立时间。
  const indexJsonPath = path.join(outputDir, "INDEX.json");
  const indexJsonRaw = fs.readFileSync(indexJsonPath, "utf8");
  const indexJson = JSON.parse(indexJsonRaw);
  const latest = {
    id: "local-dev",
    zipName: ZIP_NAME,
    generatedAt: indexJson.generatedAt,
    date: indexJson.generatedAt.slice(0, 10),
    count: indexJson.count,
    sizeBytes: res.sizeBytes,
    zipPath: "/site-content/latest.zip",
  };
  fs.writeFileSync(
    path.join(outputDir, "latest.json"),
    JSON.stringify(latest, null, 2) + "\n",
    "utf8"
  );

  // 清理打包过程产物(INDEX.json / INDEX.ndjson / MANIFEST.txt / .summary),
  // 这些是给 CI 流水线用的, 前端搜索只需要 latest.zip + latest.json。
  for (const f of [
    "INDEX.json",
    "INDEX.ndjson",
    "MANIFEST.txt",
    ".summary",
  ]) {
    try {
      fs.unlinkSync(path.join(outputDir, f));
    } catch (e) {
      /* 忽略不存在 */
    }
  }

  console.log(
    `LOCAL PACKAGE count=${res.count} sizeBytes=${res.sizeBytes} -> ${outputDir}`
  );
}

main();
