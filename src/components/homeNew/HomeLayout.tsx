import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HomeSlideProvider } from "./HomeSlideContext";
import HomeNavbar from "./HomeNavbar";

interface HomeLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  title,
  description,
  children,
}) => {
  const { siteConfig, i18n } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === "en";
  const pageUrl = `${siteConfig.url}${isEnglish ? "/en/" : "/"}`;
  const socialImage = `${siteConfig.url}/img/newHome/now.webp`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "Yak Project",
        alternateName: ["Yaklang", "Yakit"],
        url: `${siteConfig.url}/`,
        logo: `${siteConfig.url}/img/logo.png`,
        description,
        sameAs: [
          "https://github.com/yaklang",
          "https://yaklang.io/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: "Yak Project",
        description,
        inLanguage: ["zh-CN", "en"],
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <HomeSlideProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content={isEnglish ? "en_US" : "zh_CN"} />
        <meta
          property="og:locale:alternate"
          content={isEnglish ? "zh_CN" : "en_US"}
        />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Yak Project" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <link rel="describedby" href={`${siteConfig.url}/llms.txt`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <div className="relative h-screen overflow-hidden">
        <HomeNavbar />
        <main className="absolute inset-0 flex flex-col">{children}</main>
      </div>
    </HomeSlideProvider>
  );
};

export default HomeLayout;
