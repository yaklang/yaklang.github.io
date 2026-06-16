#!/usr/bin/env node
/*
 * 一次性脚本：将 .md 文件中"代码块/行内代码之外"的花括号 { } 转义为 HTML 实体，
 * 避免 Docusaurus 3 (MDX) 把正文里的 {identifier} / ${var} 当作 JS 表达式求值。
 * 仅处理 .md（CommonMark 文档），不处理 .mdx（可能含合法 JSX 表达式）。
 */
const fs = require("fs");
const path = require("path");

const ROOTS = ["docs", "api-manual", "products", "Yaklab", "articles", "blog", "team"];
const repo = path.resolve(__dirname, "..");

function walk(dir, acc) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, acc);
    else if (name.endsWith(".md")) acc.push(full);
  }
  return acc;
}

// 转义一行中"行内代码之外"的花括号
function escapeOutsideInlineCode(line) {
  let result = "";
  let inCode = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === "`") {
      inCode = !inCode;
      result += ch;
    } else if (!inCode && ch === "{") {
      result += "&#123;";
    } else if (!inCode && ch === "}") {
      result += "&#125;";
    } else {
      result += ch;
    }
  }
  return result;
}

function processFile(file) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  let inFence = false;
  let fenceMarker = "";
  let changed = false;
  // 跳过文件头部的 YAML frontmatter
  let frontMatterEnd = -1;
  if (lines[0] !== undefined && lines[0].trim() === "---") {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === "---") {
        frontMatterEnd = i;
        break;
      }
    }
  }
  const out = lines.map((line, idx) => {
    if (idx <= frontMatterEnd) return line;
    const trimmed = line.trimStart();
    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      if (!inFence) {
        inFence = true;
        fenceMarker = marker;
        return line;
      } else if (marker === fenceMarker) {
        inFence = false;
        fenceMarker = "";
        return line;
      }
      return line;
    }
    if (inFence) return line;
    if (line.includes("{") || line.includes("}")) {
      const escaped = escapeOutsideInlineCode(line);
      if (escaped !== line) changed = true;
      return escaped;
    }
    return line;
  });
  if (changed) {
    fs.writeFileSync(file, out.join("\n"), "utf8");
    return true;
  }
  return false;
}

let count = 0;
const files = [];
for (const r of ROOTS) walk(path.join(repo, r), files);
for (const f of files) {
  if (processFile(f)) {
    count++;
    console.log("escaped: " + path.relative(repo, f));
  }
}
console.log("total escaped files: " + count);
