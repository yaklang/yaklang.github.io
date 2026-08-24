// 构建期拉取 Yakit 最新版本号，用于三处一手版本事实：
//   1) 首页下载区 SSR 初始版本（docusaurus.config.js customFields）
//   2) SoftwareApplication schema 的 softwareVersion
//   3) build/llms.txt 的 "Version facts" 行
// 网络/格式异常一律返回 null，绝不阻塞构建。
const { execSync } = require("node:child_process");

let cached;

function fetchLatestYakitVersion() {
  if (cached !== undefined) return cached;
  try {
    const out = execSync(
      'curl -fsS -m 10 "https://oss-qn.yaklang.com/yak/latest/yakit-version.txt"',
      { encoding: "utf8", timeout: 15000 },
    );
    const version = String(out).split("\n")[0].trim();
    cached = /^\d+\.\d+/.test(version) ? version : null;
  } catch {
    cached = null;
  }
  return cached;
}

module.exports = { fetchLatestYakitVersion };
