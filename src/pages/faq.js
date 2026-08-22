import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useTranslation } from "react-i18next";

// FAQ 内容自包含：可见问答与 FAQPage JSON-LD 使用同一数据源，
// 保证 schema 文本与页面正文严格一致，避免引用片段与内容不符。
// 事实依据：static/llms.txt、docs/intro、download 页 SoftwareApplication。
const FAQ = {
  zh: {
    title: "常见问题 FAQ",
    description:
      "关于 Yaklang、Yakit、IRify 与 Yak Project 开源生态的常见问题解答：语言定位、产品区别、支持平台、开源地址与下载方式。",
    heading: "常见问题",
    subheading:
      "关于 Yaklang、Yakit 与 Yak Project 生态的常见问题与解答。",
    items: [
      {
        q: "Yaklang 是什么？",
        a: "Yaklang（YAK）是面向网络安全研发的领域专用编程语言（CDSL-YAK），用一门语言统一融合扫描、PoC、漏洞验证、流量分析与安全自动化能力，目标是为安全能力研发提供一站式基座。",
      },
      {
        q: "Yakit 是什么？它和 Yaklang 有什么区别？",
        a: "Yakit 是基于 Yaklang 构建的开源、跨平台网络安全工作台（GUI），面向日常渗透测试与安全协作；Yaklang 是其底层的领域编程语言。两者同属 Yak Project 生态，定位互补。",
      },
      {
        q: "Yakit 支持哪些操作系统？",
        a: "Yakit 支持 Windows、macOS 与 Linux 三大桌面平台，并在官网下载页提供对应的安装包与兼容版本说明。",
      },
      {
        q: "Yak Project 是开源的吗？在哪里获取源码？",
        a: "是的，Yak Project 是开源项目，源码托管在 GitHub 组织 github.com/yaklang，包含 yaklang（语言与运行时）与 yakit（安全工作台）等核心仓库。",
      },
      {
        q: "IRify 是什么？",
        a: "IRify 是基于 YAK SSA 与 SyntaxFlow 的源代码安全分析能力，面向代码审计与漏洞挖掘，提供可复现、可扩展的多语言静态分析。",
      },
      {
        q: "如何下载或安装 Yakit 与 Yaklang？",
        a: "在官网「下载资源」页面可获取 Yakit 安装包、技术白皮书与离线文档包；Yaklang 语言运行时可按项目仓库中的说明进行安装与配置。",
      },
    ],
  },
  en: {
    title: "FAQ",
    description:
      "Frequently asked questions about Yaklang, Yakit, IRify, and the Yak Project open-source ecosystem: language positioning, product differences, supported platforms, source-code location, and downloads.",
    heading: "Frequently Asked Questions",
    subheading:
      "Common questions about Yaklang, Yakit, and the Yak Project ecosystem.",
    items: [
      {
        q: "What is Yaklang?",
        a: "Yaklang (YAK) is a domain-specific programming language (CDSL-YAK) built for cybersecurity engineering. It unifies scanning, proof-of-concept, vulnerability validation, traffic analysis, and security automation in one language, aiming to be a one-stop foundation for security-capability development.",
      },
      {
        q: "What is Yakit and how is it different from Yaklang?",
        a: "Yakit is an open-source, cross-platform cybersecurity workbench (GUI) built on Yaklang for day-to-day penetration testing and security collaboration; Yaklang is the underlying domain language. Both belong to the Yak Project ecosystem and are complementary.",
      },
      {
        q: "Which operating systems does Yakit support?",
        a: "Yakit supports Windows, macOS, and Linux. The website download page provides installers and compatibility notes for each platform.",
      },
      {
        q: "Is Yak Project open source and where is the source code?",
        a: "Yes. Yak Project is open source, hosted on the GitHub organization github.com/yaklang, including the core repositories yaklang (the language and runtime) and yakit (the security workbench).",
      },
      {
        q: "What is IRify?",
        a: "IRify is a source-code security analysis capability built on YAK SSA and SyntaxFlow. It targets code auditing and vulnerability discovery with reproducible, extensible multi-language static analysis.",
      },
      {
        q: "How do I download or install Yakit and Yaklang?",
        a: "The website Downloads page provides Yakit installers, a technical white paper, and offline documentation packages. The Yaklang runtime can be installed and configured following the instructions in the project repository.",
      },
    ],
  },
};

const cardStyle = {
  background: "var(--ifm-background-surface-color, #fff)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "12px",
  padding: "20px 24px",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
};

const linkStyle = {
  color: "var(--ifm-color-primary, #b8860b)",
  textDecoration: "none",
  fontWeight: 600,
};

export default function FaqPage() {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const content = isEn ? FAQ.en : FAQ.zh;
  const localizedPath = (route) => `${isEn ? "/en" : ""}${route}`;

  // FAQPage schema 直接由可见问答数据生成，确保文本一致。
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    datePublished: "2026-08-13",
    dateModified: "2026-08-13",
    mainEntity: content.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <Layout title={content.title} description={content.description}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>
      <main
        style={{
          background: "var(--Colors-Use-Main---Gold-Bg, #faf6ef)",
          minHeight: "calc(100vh - 60px)",
          padding: "64px 24px 96px",
        }}
      >
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
          }}
        >
          <header style={{ marginBottom: "40px", textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                margin: "0 0 12px",
                color: "var(--ifm-font-color-base, #1a1a1a)",
              }}
            >
              {content.heading}
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "var(--ifm-color-emphasis-700, #555)",
                margin: "0",
              }}
            >
              {content.subheading}
            </p>
          </header>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {content.items.map((item, idx) => (
              <section key={idx} style={cardStyle}>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    margin: "0 0 10px",
                    color: "var(--ifm-font-color-base, #1a1a1a)",
                  }}
                >
                  {item.q}
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    margin: "0",
                    color: "var(--ifm-color-emphasis-800, #333)",
                  }}
                >
                  {item.a}
                </p>
              </section>
            ))}
          </div>

          <footer
            style={{
              marginTop: "40px",
              textAlign: "center",
              fontSize: "15px",
              color: "var(--ifm-color-emphasis-700, #555)",
            }}
          >
            <Link to={localizedPath("/download")} style={linkStyle}>
              {isEn ? "Download Yakit" : "下载 Yakit"}
            </Link>
            <span style={{ margin: "0 12px", opacity: 0.4 }}>·</span>
            <Link to={localizedPath("/docs/intro")} style={linkStyle}>
              {isEn ? "Yaklang Docs" : "Yak 编程文档"}
            </Link>
            <span style={{ margin: "0 12px", opacity: 0.4 }}>·</span>
            <Link to={localizedPath("/opensource")} style={linkStyle}>
              {isEn ? "Open Source" : "开源生态"}
            </Link>
          </footer>
        </div>
      </main>
    </Layout>
  );
}
