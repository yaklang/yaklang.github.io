import MDXComponents from "@theme-original/MDXComponents";
import MDXTable from "@site/src/theme/MDXComponents/Table";

// 在保留 Docusaurus 默认 MDX 组件映射(含已 swizzle 的 Img)的基础上，接管 Markdown 表格，
// 为每张表加上“展开/恢复”交互(见 ./Table)。其余组件保持原样。
export default {
  ...MDXComponents,
  table: MDXTable,
};
