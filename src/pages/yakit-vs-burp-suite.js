import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useTranslation } from "react-i18next";

// 竞品对比页（2026-08-31 审计 P1-7）：AI 搜索最高频引用的内容形态之一是
// 「X vs Y」对比表格。可见表格与 FAQPage JSON-LD 使用同一数据源。
// 事实核对基准：官网产品页、GitHub 仓库、Burp Suite 官方定价页（2026-08）。
// 涉及价格/功能演进的内容标注核对日期，避免过期失实。
const COMPARE = {
  zh: {
    title: "Yakit vs Burp Suite：开源渗透测试工作台对比",
    description:
      "Yakit 与 Burp Suite 的功能、许可证、价格与平台对比：MITM、Web Fuzzer、插件生态、脚本语言、协作与 AI 能力。Yakit 是免费开源的跨平台安全工作台，Burp Suite Professional 为商业订阅。",
    heading: "Yakit vs Burp Suite",
    subheading:
      "两款渗透测试工作台的核心差异一览（数据核对于 2026-08，价格以官方页面为准）。",
    table: {
      columns: ["维度", "Yakit", "Burp Suite"],
      rows: [
        ["许可证与价格", "免费开源（AGPL-3.0，$0）", "Community 免费（功能受限）；Professional $499/用户/年"],
        ["形态", "基于 Yaklang 的跨平台桌面客户端（Electron）", "Java 桌面应用"],
        ["平台", "Windows / macOS / Linux（含 Arm64）", "Windows / macOS / Linux"],
        ["MITM 劫持代理", "内置（可视化劫持、HSTS/证书、上游代理、mutations）", "内置（核心功能）"],
        ["请求重放与模糊测试", "Web Fuzzer（含热重载、并发、数据表）", "Repeater + Intruder"],
        ["脚本扩展语言", "Yaklang（安全 DSL，一门语言覆盖扫描/PoC/流量分析）", "BApps（Java/Python/Jython 等扩展模块）"],
        ["插件生态", "内置插件市场，支持热加载", "BApp Store，数百款官方与第三方扩展"],
        ["AI 能力", "内置 AI Agent 编排（安全工作流中直接调用大模型）", "官方 BApp 提供 AI 辅助能力"],
        ["协作与团队", "多人协作引擎、客户端/服务端分离架构", "以单机为主，企业版提供协作能力"],
        ["源码", "github.com/yaklang/yakit（AGPL-3.0，完全开源）", "闭源"],
      ],
    },
    faq: [
      {
        q: "Yakit 可以替代 Burp Suite 吗？",
        a: "日常 Web 渗透的核心工作流（代理抓包、请求重放、模糊测试、编解码、插件扩展）Yakit 均已覆盖，且完全免费开源；从 Burp 迁移的主要差异是扩展生态与部分企业级功能。建议按团队工作流试用评估。",
      },
      {
        q: "Yakit 是免费的吗？Burp Suite 多少钱？",
        a: "Yakit 免费且开源，源码在 github.com/yaklang/yakit。Burp Suite Community 版免费但功能受限，Professional 版为商业订阅（核对于 2026-08，以 PortSwigger 官方定价页为准）。",
      },
      {
        q: "Yakit 和 Burp Suite 在插件扩展上有什么区别？",
        a: "Yakit 插件使用 Yaklang 编写并支持热加载，可在内置插件市场分发；Burp Suite 通过 BApp Store 提供以 Java 等语言编写的 BApps。Yaklang 作为安全 DSL，编写扫描/PoC/流量处理逻辑通常比通用语言更紧凑。",
      },
      {
        q: "两款工具支持哪些操作系统？",
        a: "两者都支持 Windows、macOS 与 Linux。Yakit 在官网下载页额外提供 Linux Arm64 安装包。",
      },
      {
        q: "Yakit 独有的能力有哪些？",
        a: "Yakit 构建在 Yaklang 安全 DSL 之上：一门语言统一扫描、PoC 编写、漏洞验证与流量分析；同时内置 AI Agent 编排，可在安全工作流中直接调用大模型能力；客户端/服务端分离架构支持多人协作。",
      },
    ],
  },
  en: {
    title: "Yakit vs Burp Suite: Open-Source Pentest Workbench Comparison",
    description:
      "Feature, license, pricing, and platform comparison between Yakit and Burp Suite: MITM, Web Fuzzer, plugin ecosystems, scripting, collaboration, and AI capabilities. Yakit is a free, open-source, cross-platform security workbench; Burp Suite Professional is a commercial subscription.",
    heading: "Yakit vs Burp Suite",
    subheading:
      "Key differences between the two penetration-testing workbenches (facts checked 2026-08; see official pricing pages).",
    table: {
      columns: ["Dimension", "Yakit", "Burp Suite"],
      rows: [
        ["License & price", "Free and open source (AGPL-3.0, $0)", "Community edition free (limited); Professional $499/user/year"],
        ["Form factor", "Cross-platform desktop client built on Yaklang (Electron)", "Java desktop application"],
        ["Platforms", "Windows / macOS / Linux (incl. Arm64)", "Windows / macOS / Linux"],
        ["MITM intercepting proxy", "Built-in (visual hijacking, HSTS/certs, upstream proxy, mutations)", "Built-in (core feature)"],
        ["Replay & fuzzing", "Web Fuzzer (hot reload, concurrency, data tables)", "Repeater + Intruder"],
        ["Extension language", "Yaklang (security DSL covering scanning/PoC/traffic analysis)", "BApps (Java/Python/Jython extensions)"],
        ["Plugin ecosystem", "Built-in plugin store with hot loading", "BApp Store with hundreds of extensions"],
        ["AI capabilities", "Built-in AI agent orchestration in security workflows", "AI assistance via official BApps"],
        ["Collaboration", "Multi-user engine, client/server split architecture", "Primarily single-machine; enterprise edition adds collaboration"],
        ["Source code", "github.com/yaklang/yakit (AGPL-3.0, fully open)", "Closed source"],
      ],
    },
    faq: [
      {
        q: "Can Yakit replace Burp Suite?",
        a: "The core day-to-day web pentest workflow (intercepting proxy, request replay, fuzzing, codec, extensions) is covered by Yakit, which is free and open source. The main migration trade-offs are the extension ecosystem and some enterprise features. Evaluate against your team's workflow.",
      },
      {
        q: "Is Yakit free? How much does Burp Suite cost?",
        a: "Yakit is free and open source, with source code at github.com/yaklang/yakit. Burp Suite Community is free but limited; Burp Suite Professional is a commercial subscription (checked 2026-08; see PortSwigger's official pricing page).",
      },
      {
        q: "How do the plugin systems differ?",
        a: "Yakit plugins are written in Yaklang with hot loading and distributed via the built-in plugin store; Burp Suite offers BApps written in Java and other languages via the BApp Store. As a security DSL, Yaklang tends to be more compact than general-purpose languages for scanning, PoC, and traffic-handling logic.",
      },
      {
        q: "Which operating systems are supported?",
        a: "Both support Windows, macOS, and Linux. Yakit additionally offers a Linux Arm64 installer on its download page.",
      },
      {
        q: "What capabilities are unique to Yakit?",
        a: "Yakit is built on the Yaklang security DSL: one language unifying scanning, PoC authoring, vulnerability validation, and traffic analysis. It also ships built-in AI agent orchestration for calling LLMs inside security workflows, and a client/server split architecture supporting multi-user collaboration.",
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

export default function YakitVsBurpSuitePage() {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const content = isEn ? COMPARE.en : COMPARE.zh;
  const localizedPath = (route) => `${isEn ? "/en" : ""}${route}`;

  // FAQPage schema 直接由可见问答数据生成，确保文本一致
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    datePublished: "2026-08-31",
    mainEntity: content.faq.map((item) => ({
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
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
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

          <section style={cardStyle}>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                <thead>
                  <tr>
                    {content.table.columns.map((column) => (
                      <th
                        key={column}
                        style={{
                          textAlign: "left",
                          padding: "10px 12px",
                          border: "1px solid rgba(0,0,0,0.10)",
                          background: "rgba(0,0,0,0.03)",
                          color: "var(--ifm-font-color-base, #1a1a1a)",
                        }}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.table.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          style={{
                            padding: "10px 12px",
                            border: "1px solid rgba(0,0,0,0.10)",
                            color: "var(--ifm-color-emphasis-800, #333)",
                            fontWeight: cellIdx === 0 ? 600 : 400,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            {content.faq.map((item, idx) => (
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
            <Link to={localizedPath("/products/intro")} style={linkStyle}>
              {isEn ? "Yakit Manual" : "Yakit 使用手册"}
            </Link>
            <span style={{ margin: "0 12px", opacity: 0.4 }}>·</span>
            <Link to={localizedPath("/faq")} style={linkStyle}>
              {isEn ? "FAQ" : "常见问题"}
            </Link>
          </footer>
        </div>
      </main>
    </Layout>
  );
}
