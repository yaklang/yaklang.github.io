// 构建期一手事实（版本 / GitHub stars / forks / 安装包大小），供四处消费：
//   1) 首页 hero 统计行与下载表格 SSR 直出（docusaurus.config.js customFields）
//   2) SoftwareApplication schema 的 softwareVersion
//   3) build/llms.txt 与 build/llms-full.txt 的 "Project facts" 段
//   4) Organization schema 可引用统计（间接，经上述消费方）
// 一切网络/格式异常都降级为 null，绝不阻塞构建（与 latest-yakit-version.js 同策略）。
const { execSync } = require("node:child_process");
const { fetchLatestYakitVersion } = require("./latest-yakit-version");

let cached;

// 下载表格五平台（与 HomeDownload.tsx 的 DOWNLOAD_PLATFORMS 一致）
const ASSET_FILES = [
  ["macIntel", "darwin-x64.dmg"],
  ["macApple", "darwin-arm64.dmg"],
  ["linux", "linux-amd64.AppImage"],
  ["windows", "windows-amd64.exe"],
  ["linuxArm64", "linux-arm64.AppImage"],
];

function fetchJson(url) {
  try {
    const out = execSync(`curl -fsS -m 10 -H "Accept: application/vnd.github+json" "${url}"`, {
      encoding: "utf8",
      timeout: 15000,
    });
    return JSON.parse(out);
  } catch {
    return null;
  }
}

function fetchRepoStats(repo) {
  const data = fetchJson(`https://api.github.com/repos/${repo}`);
  if (!data || typeof data.stargazers_count !== "number") return null;
  return {
    stars: data.stargazers_count,
    forks: typeof data.forks_count === "number" ? data.forks_count : null,
  };
}

// OSS 安装包 HEAD 请求取 Content-Length，换算 MB（保留两位）。
// 注意：仅在版本号已知时才可构造 URL。
function fetchAssetSizes(version) {
  if (!version) return null;
  const sizes = {};
  let any = false;
  for (const [key, file] of ASSET_FILES) {
    try {
      const out = execSync(
        `curl -fsSI -m 10 "https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-${file}"`,
        { encoding: "utf8", timeout: 15000 },
      );
      const length = Number(out.match(/content-length:\s*(\d+)/i)?.[1]);
      if (Number.isFinite(length) && length > 0) {
        sizes[key] = Math.ceil((length / 1024 / 1024) * 100) / 100;
        any = true;
      }
    } catch {
      // 单个平台失败跳过，不影响其余
    }
  }
  return any ? sizes : null;
}

function fetchBuildFacts() {
  if (cached !== undefined) return cached;
  const yakitVersion = fetchLatestYakitVersion();
  cached = {
    fetchedAt: new Date().toISOString().slice(0, 10),
    yakitVersion,
    yakit: fetchRepoStats("yaklang/yakit"),
    yaklang: fetchRepoStats("yaklang/yaklang"),
    assetSizes: fetchAssetSizes(yakitVersion),
  };
  return cached;
}

module.exports = { fetchBuildFacts };
