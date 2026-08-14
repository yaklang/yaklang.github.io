import MDXComponents from "@theme-original/MDXComponents";
import MDXTable from "@site/src/theme/MDXComponents/Table";

// 在保留 Docusaurus 默认 MDX 组件映射（含已 swizzle 的 Img）的基础上，
// 为 Markdown 表格增加符合 Figma 的边框与横向滚动包装。
export default {
  ...MDXComponents,
  table: MDXTable,
};
