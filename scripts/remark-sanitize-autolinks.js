/**
 * remark-sanitize-autolinks.js
 *
 * 自动生成的 API 文档(docs/api)正文/表格里常出现裸 URL, 例如:
 *   一个或多个代理地址（如 "http://127.0.0.1:8080"）
 * remark-gfm 会把它识别为 autolink, 并把后面的引号/全角括号并入 URL, 形成
 * `http://127.0.0.1:8080"）` 这种非法 URL; Docusaurus 在 MDX 编译阶段对其执行
 * new URL() 解析时抛错, 直接使整个站点构建失败。
 *
 * 该 remark 插件遍历 mdast, 对 URL 非法(new URL 解析失败)的 link 节点降级为纯文本,
 * 既保留可读文本, 又避免构建崩溃。合法的相对链接/锚点(配合 base 可解析)不受影响。
 *
 * 关键词: MDX autolink 解析失败, docs/api 裸 URL, 构建崩溃修复
 */

// 判断 link 节点的 URL 是否为"被 gfm autolink 误并入相邻字符"的非法 URL。
// 合法 URL/相对链接/锚点只含可打印 ASCII; 一旦出现空白、引号、尖括号、反引号
// 或任意非 ASCII 字符(如被并入的全角括号"）"/中文), 即判定为非法, 需降级为纯文本。
// 注意: Node 的 new URL 对引号过于宽容(会百分号编码而不抛错), 与 Docusaurus 内部
// 更严格的解析器不一致, 因此这里用字符集判断而非 new URL。
function isBadAutolinkUrl(url) {
  if (typeof url !== "string" || url === "") {
    return false;
  }
  return /[\s"'<>`\u0080-\uFFFF]/.test(url);
}

function nodeToText(node) {
  if (!node) {
    return "";
  }
  if (typeof node.value === "string") {
    return node.value;
  }
  if (Array.isArray(node.children)) {
    return node.children.map(nodeToText).join("");
  }
  return "";
}

function walk(node) {
  if (!node || typeof node !== "object" || !Array.isArray(node.children)) {
    return;
  }
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child && child.type === "link" && isBadAutolinkUrl(child.url)) {
      const text = nodeToText(child) || child.url || "";
      node.children[i] = { type: "text", value: text };
      continue;
    }
    walk(child);
  }
}

module.exports = function remarkSanitizeAutolinks() {
  return (tree) => {
    walk(tree);
  };
};
