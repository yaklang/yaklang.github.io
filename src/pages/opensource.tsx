import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  OPEN_SOURCE_PROJECTS,
  OpenSourceCards,
} from "@site/src/components/OpenSource";

const PAGE_TITLE = "开源生态 · Yak Project Open Source";
const PAGE_DESC =
  "Yak Project 开源生态总览：IRify(SSA 静态代码分析)、JavaJive(纯 Go Java 工具)、HackSkills(AI Agent 攻防技能库)、YakLab(Vulinbox 漏洞靶场实战手册)、HackBenchmark(AI 安全评测基准)、Memfit AI(智能体架构)。涵盖 Web 安全、代码审计、AI Agent 与漏洞研究的全部开源项目。";
const KEYWORDS = [
  "Yak Project",
  "yaklang",
  "开源",
  "open source",
  "静态代码分析",
  "SSA",
  "ssa.to",
  "IRify",
  "JavaJive",
  "Java 反编译",
  "HackSkills",
  "skills.hackbenchmark.com",
  "YakLab",
  "Vulinbox",
  "漏洞靶场",
  "实战手册",
  "HackBenchmark",
  "hackbenchmark.com",
  "Memfit AI",
  "memfit.ai",
  "AI Agent",
  "代码审计",
  "Web 安全",
].join(", ");

export default function OpenSourcePage() {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url || "https://yaklang.com";
  const pageUrl = `${siteUrl}/opensource`;

  // 内部相对链接(如 YakLab 指向站内 /Yaklab/...)在 JSON-LD 里需补成绝对地址。
  const absUrl = (u: string) => (/^https?:\/\//.test(u) ? u : `${siteUrl}${u}`);

  // JSON-LD：用 ItemList 描述全部开源项目，提升搜索引擎对结构化内容的理解，利于收录。
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yak Project 开源生态",
    description: PAGE_DESC,
    url: pageUrl,
    numberOfItems: OPEN_SOURCE_PROJECTS.length,
    itemListElement: OPEN_SOURCE_PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(p.url),
      item: {
        "@type": "SoftwareSourceCode",
        name: p.name,
        description: p.description,
        url: absUrl(p.url),
        codeRepository: p.repo,
        keywords: p.tags.join(", "),
        author: {
          "@type": "Organization",
          name: "Yak Project",
          url: siteUrl,
        },
      },
    })),
  };

  return (
    <Layout>
      <Head>
        <title>{`${PAGE_TITLE} | ${siteConfig.title}`}</title>
        <meta name="description" content={PAGE_DESC} />
        <meta name="keywords" content={KEYWORDS} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <main className="os-page">
        <header className="os-page__hero">
          <p className="os-page__eyebrow">OPEN SOURCE</p>
          <h1 className="os-page__title">Yak Project 开源生态</h1>
          <p className="os-page__lead">
            从程序语言、静态代码分析到 AI Agent 安全，Yak Project
            将核心能力沉淀为一系列开源项目。点击任意卡片即可在新标签页打开对应站点。
          </p>
        </header>
        <section className="os-page__grid" aria-label="开源项目列表">
          <OpenSourceCards variant="page" />
        </section>
      </main>
    </Layout>
  );
}
