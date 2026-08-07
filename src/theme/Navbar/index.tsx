// swizzle @theme/Navbar：覆盖 Docusaurus 原生导航栏，所有走 @theme/Layout 的页面都会渲染此组件
import HomeNavbar from "@site/src/components/homeNew/HomeNavbar";

export default function Navbar() {
  return <HomeNavbar />;
}