// @ts-nocheck
import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const copy = {
  "zh-CN": {
    title: "Yak Project 编辑与更正政策",
    description:
      "了解 Yak Project 技术文档和博客的来源、复现、更新、更正、作者标注与安全边界。",
    intro:
      "本政策说明 Yak Project 如何维护本站的技术文档和博客内容。我们的目标是让读者能够理解结论来自哪里、如何复现，以及发现问题后如何反馈。",
    sections: [
      [
        "内容来源与证据",
        "技术结论应尽量对应到可检查的代码、配置、协议行为、实验过程或公开来源。涉及第三方项目、漏洞或标准时，文章应给出足以定位原始材料的名称或链接。",
      ],
      [
        "复现与适用范围",
        "教程和研究文章应说明必要的环境、关键步骤和适用场景。受版本、平台或实验条件限制的结论，应避免被表达为不受条件约束的普遍事实。",
      ],
      [
        "更新与更正",
        "内容存在事实错误、失效链接或无法复现的步骤时，读者可以通过 Yaklang GitHub 组织公开仓库提交 Issue。维护者会依据可验证证据修订内容；重大修订应在正文中说明变化。",
      ],
      [
        "作者与发布者",
        "当前博客以 Yak Project 技术与安全研发团队作为组织作者。只有在能够核实具体贡献者并获得适当署名信息时，文章才标注个人作者；Yak Project 作为本站发布者。",
      ],
      [
        "安全与授权边界",
        "攻击、扫描、漏洞利用与自动化示例仅用于合法授权、安全研究和防御验证。读者应在自有、靶场或明确授权的环境中复现，并控制数据、并发和影响范围。",
      ],
    ],
    contact: "反馈与更正",
    contactText: "请通过 Yaklang GitHub 组织中的相关仓库提交可复核的问题描述和证据。",
    linkText: "访问 Yaklang GitHub Organization",
  },
  en: {
    title: "Yak Project Editorial and Corrections Policy",
    description:
      "How Yak Project handles sourcing, reproducibility, updates, corrections, attribution, and security boundaries for documentation and technical articles.",
    intro:
      "This policy explains how Yak Project maintains the technical documentation and articles published on this site. Readers should be able to understand where a claim comes from, how to reproduce it, and how to report a problem.",
    sections: [
      [
        "Sources and evidence",
        "Technical claims should point to inspectable code, configuration, protocol behavior, experiments, or public primary sources. References to third-party projects, vulnerabilities, or standards should identify the original material clearly enough to verify it.",
      ],
      [
        "Reproducibility and scope",
        "Tutorials and research articles should state the necessary environment, key steps, and intended use. Results limited by a version, platform, or experimental condition should not be presented as universal facts.",
      ],
      [
        "Updates and corrections",
        "Readers can report factual errors, broken references, or non-reproducible steps through an Issue in the relevant repository under the Yaklang GitHub organization. Maintainers revise content based on verifiable evidence and should disclose material changes in the article.",
      ],
      [
        "Authors and publisher",
        "The blog currently identifies the Yak Project technical and security engineering team as its organizational author. Individual bylines are used only when the contributor and attribution details can be verified. Yak Project is the site publisher.",
      ],
      [
        "Security and authorization",
        "Scanning, exploitation, and automation examples are intended for authorized testing, security research, and defensive validation. Reproduce them only on systems you own, labs, or targets covered by explicit permission, with controlled data, concurrency, and impact.",
      ],
    ],
    contact: "Feedback and corrections",
    contactText:
      "Open an Issue in the relevant repository under the Yaklang GitHub organization and include evidence that maintainers can verify.",
    linkText: "Visit the Yaklang GitHub Organization",
  },
};

export default function EditorialPolicyPage() {
  const { i18n, siteConfig } = useDocusaurusContext();
  const locale = i18n.currentLocale?.startsWith("en") ? "en" : "zh-CN";
  const text = copy[locale];
  const pageUrl = `${siteConfig.url}${locale === "en" ? "/en" : ""}/editorial-policy`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: text.title,
    description: text.description,
    inLanguage: locale,
    dateModified: "2026-08-13",
    about: { "@id": `${siteConfig.url}/#organization` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };

  return (
    <Layout title={text.title} description={text.description}>
      <Head>
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={text.title} />
        <meta name="twitter:description" content={text.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <main className="container margin-vert--xl" style={{ maxWidth: 860 }}>
        <article>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
          {text.sections.map(([heading, body]) => (
            <section key={heading} className="margin-top--lg">
              <h2>{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
          <section className="margin-top--lg">
            <h2>{text.contact}</h2>
            <p>{text.contactText}</p>
            <p>
              <Link to="https://github.com/yaklang">{text.linkText}</Link>
            </p>
          </section>
        </article>
      </main>
    </Layout>
  );
}
