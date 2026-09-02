import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HomeSlideProvider } from "./HomeSlideContext";
import { HomeThemeProvider } from "./HomeThemeContext";
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
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: isEnglish ? "en" : "zh-CN",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: socialImage,
    },
  };

  return (
    <HomeSlideProvider>
      <HomeThemeProvider>
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
          <link rel="canonical" href={pageUrl} />
          <link rel="alternate" hrefLang="zh-CN" href={`${siteConfig.url}/`} />
          <link rel="alternate" hrefLang="en" href={`${siteConfig.url}/en/`} />
          <link rel="alternate" hrefLang="x-default" href={`${siteConfig.url}/`} />
          <link rel="describedby" href={`${siteConfig.url}/llms.txt`} />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Head>
        <div className="relative h-screen overflow-hidden">
          <HomeNavbar />
          <main className="absolute inset-0 flex flex-col">{children}</main>
        </div>
      </HomeThemeProvider>
    </HomeSlideProvider>
  );
};

export default HomeLayout;
