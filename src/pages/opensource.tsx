import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useTranslation } from "react-i18next";
import {
  OPEN_SOURCE_PROJECTS,
  OpenSourceCards,
} from "@site/src/components/OpenSource";

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
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const siteUrl = siteConfig.url || "https://yaklang.com";
  const pageUrl = `${siteUrl}/opensource`;

  const pageTitle = t("OpenSourcePage.pageTitle");
  const pageDesc = t("OpenSourcePage.pageDesc");

  // 内部相对链接(如 YakLab 指向站内 /Yaklab/...)在 JSON-LD 里需补成绝对地址。
  const absUrl = (u: string) => (/^https?:\/\//.test(u) ? u : `${siteUrl}${u}`);

  // JSON-LD：用 ItemList 描述全部开源项目，提升搜索引擎对结构化内容的理解，利于收录。
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("OpenSourcePage.title"),
    description: pageDesc,
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
    <Layout
      wrapperClassName="os-page-layout"
      title={pageTitle}
      description={pageDesc}
    >
      <Head>
        <meta name="keywords" content={KEYWORDS} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <main className="os-page">
        <header className="os-page__hero">
          <p className="os-page__eyebrow">{t("OpenSourcePage.eyebrow")}</p>
          <h1 className={`os-page__title ${isEn ? "font-['Crimson_Text'] !text-[48px] sm:!text-[56px]" : "font-['Noto_Serif_SC'] !text-[40px] sm:!text-[48px]"}`}>{t("OpenSourcePage.title")}</h1>
          <p className={`os-page__lead ${isEn ? "font-['Crimson_Text'] !text-[24px]" : "font-['Noto_Serif_SC'] !text-[16px]"}`}>
            {t("OpenSourcePage.lead")}
          </p>
        </header>
        <section className="os-page__grid" aria-label={t("OpenSourcePage.listAriaLabel")}>
          <OpenSourceCards variant="page" />
        </section>
      </main>
    </Layout>
  );
}
