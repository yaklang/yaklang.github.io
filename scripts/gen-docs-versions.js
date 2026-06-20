#!/usr/bin/env node
/*
 * gen-docs-versions.js
 *
 * 由 old_versions.txt(记账文件) 生成供前端读取的 static/docs-versions.json。
 *
 * old_versions.txt 每行格式: 版本<TAB>UTC时间<TAB>zip地址 (空行与 # 开头的注释行忽略)。
 * 文件中最新版本追加在末尾, 输出 JSON 数组按"最新在前"排序: [{version, date, url}]。
 */
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const srcFile = path.join(repoRoot, "old_versions.txt");
const outFile = path.join(repoRoot, "static", "docs-versions.json");

function parse(content) {
  const items = [];
  const lines = content.split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (line === "" || line.startsWith("#")) {
      continue;
    }
    const parts = line.split("\t");
    const version = (parts[0] || "").trim();
    if (version === "") {
      continue;
    }
    const date = (parts[1] || "").trim();
    const url =
      (parts[2] || "").trim() ||
      `https://aliyun-oss.yaklang.com/yak/${version}/yaklang-docs-${version}.zip`;
    items.push({ version, date, url });
  }
  // 文件中最新在末尾, 前端展示需要最新在前
  items.reverse();
  return items;
}

function main() {
  let content = "";
  if (fs.existsSync(srcFile)) {
    content = fs.readFileSync(srcFile, "utf8");
  }
  const items = parse(content);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(items, null, 2) + "\n", "utf8");
  console.log(`generated ${outFile} with ${items.length} version(s)`);
}

main();
