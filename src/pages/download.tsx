// @ts-nocheck
import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  Button,
  Card,
  ConfigProvider,
  Empty,
  List,
  Space,
  Tag,
  Typography,
} from "antd";
import {
  AppstoreOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

import { useTranslation } from "react-i18next";

// 使用新版首页主色 token，与 HomeFooter / 新首页保持一致
const YAK_PRIMARY = "var(--Colors-Use-Main---web-Primary)";

interface DocVersion {
  version: string;
  date: string;
  url: string;
}

interface SitePackage {
  id: string;
  date: string;
  url: string;
  count: number | null;
}

const WHITEPAPER_URL =
  "https://oss-qn.yaklang.com/yakit-technical-white-paper.pdf";

// 下载资源页面。
// 将"白皮书下载"/"API 文档存档下载"/"官网全站打包下载"统一收纳在同一页,
// 导航 TAB 为"下载资源"。
// 文档存档数据来源: 构建产物 static/docs-versions.json, 由 scripts/gen-docs-versions.js
// 依据 old_versions.txt 生成, 最新版本置顶。
// 全站打包数据来源: 构建产物 static/site-packages.json, 由 scripts/gen-site-packages.js
// 依据 old_site_packages.txt 生成, 最新置顶。
function DownloadContent() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const serifTitleClass = isEn
    ? "font-['Crimson_Text']"
    : "font-['Noto_Serif_SC']";
  const docsVersionsUrl = useBaseUrl("/docs-versions.json");
  const sitePackagesUrl = useBaseUrl("/site-packages.json");
  const [versions, setVersions] = useState<DocVersion[]>([]);
  const [packages, setPackages] = useState<SitePackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [pkgLoading, setPkgLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(docsVersionsUrl)
      .then((resp) => (resp.ok ? resp.json() : []))
      .then((data) => {
        if (!cancelled) {
          setVersions(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setVersions([]);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [docsVersionsUrl]);

  useEffect(() => {
    let cancelled = false;
    fetch(sitePackagesUrl)
      .then((resp) => (resp.ok ? resp.json() : []))
      .then((data) => {
        if (!cancelled) {
          setPackages(Array.isArray(data) ? data : []);
          setPkgLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPackages([]);
          setPkgLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [sitePackagesUrl]);

  const latest = versions.length > 0 ? versions[0] : null;
  const history = versions.length > 1 ? versions.slice(1) : [];

  const latestPkg = packages.length > 0 ? packages[0] : null;
  const pkgHistory = packages.length > 1 ? packages.slice(1) : [];

  return (
    <div
      className="container"
      style={{
        maxWidth: 920,
        margin: "0 auto",
        // 导航栏为 position: fixed (高 var(--ifm-navbar-height)), 需让出对应高度避免被遮挡
        paddingTop: "calc(var(--ifm-navbar-height) + 32px)",
        paddingBottom: 64,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <Title level={2} className={`${serifTitleClass} ${isEn ? "!text-[38px]" : ""}`}>{t("DownloadResources.title")}</Title>
      <Paragraph type="secondary">{t("DownloadResources.intro")}</Paragraph>

      <Card
        style={{ marginBottom: 24, background: "var(--Colors-Use-Main---Gold-Bg-Hover)", borderColor: "var(--Colors-Use-Main---Gold-Focus)" }}
        title={t("DownloadResources.whitepaper.title")}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary">{t("DownloadResources.whitepaper.label")}</Text>
          <Button type="primary" icon={<FilePdfOutlined />} href={WHITEPAPER_URL}>
            &nbsp;{t("DownloadResources.whitepaper.cta")}
          </Button>
        </Space>
      </Card>

      <Card
        style={{ marginBottom: 24, background: "var(--Colors-Use-Main---Gold-Bg-Hover)", borderColor: "var(--Colors-Use-Main---Gold-Focus)" }}
        title={t("DownloadResources.latestDocs.title")}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Space wrap>
            <Button type="primary" icon={<ReadOutlined />}>
              <Link to="/docs/intro" style={{ color: "inherit" }}>
                &nbsp;{t("DownloadResources.latestDocs.online")}
              </Link>
            </Button>
            {latest && (
              <Button
                type="primary"
                ghost
                icon={<DownloadOutlined />}
                href={latest.url}
              >
                &nbsp;{t("DownloadResources.latestDocs.download", { version: latest.version })}
              </Button>
            )}
          </Space>
          {latest && (
            <Text type="secondary">
              {t("DownloadResources.latestDocs.current")}:{" "}
              <Tag color={YAK_PRIMARY}>v{latest.version}</Tag>
              {latest.date ? t("DownloadResources.latestDocs.archived", { date: latest.date }) : null}
            </Text>
          )}
        </Space>
      </Card>

      <Card
        style={{ marginBottom: 24, background: "var(--Colors-Use-Main---Gold-Bg-Hover)", borderColor: "var(--Colors-Use-Main---Gold-Focus)" }}
        title={t("DownloadResources.sitePackage.title")}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Paragraph type="secondary" style={{ marginBottom: 0 }}>
            {t("DownloadResources.sitePackage.desc")}
          </Paragraph>
          {latestPkg ? (
            <>
              <Space wrap>
                <Button
                  type="primary"
                  icon={<AppstoreOutlined />}
                  href={latestPkg.url}
                >
                  &nbsp;{t("DownloadResources.sitePackage.latestCta", { id: latestPkg.id })}
                </Button>
              </Space>
              <Text type="secondary">
                {t("DownloadResources.sitePackage.current")}:{" "}
                <Tag color={YAK_PRIMARY}>{latestPkg.id}</Tag>
                {latestPkg.count != null
                  ? t("DownloadResources.sitePackage.count", { count: latestPkg.count }) + " "
                  : ""}
                {latestPkg.date ? t("DownloadResources.sitePackage.archived", { date: latestPkg.date }) : null}
              </Text>
            </>
          ) : (
            <Empty description={t("DownloadResources.sitePackage.empty")} />
          )}
        </Space>
      </Card>

      <Title level={3} className={`${serifTitleClass} ${isEn ? "!text-[32px]" : ""}`}>{t("DownloadResources.historyPackages.title")}</Title>
      {pkgLoading ? (
        <Paragraph type="secondary">{t("DownloadResources.historyPackages.loading")}</Paragraph>
      ) : pkgHistory.length === 0 ? (
        <Empty description={t("DownloadResources.historyPackages.empty")} />
      ) : (
        <List
          dataSource={pkgHistory}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <Button
                  key="dl"
                  type="link"
                  icon={<DownloadOutlined />}
                  href={item.url}
                  className="download-link-button"
                >
                  {t("DownloadResources.downloadZip")}
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<Text strong>{item.id}</Text>}
                description={
                  item.count != null
                    ? `${t("DownloadResources.sitePackage.count", { count: item.count })}${
                        item.date ? `，${t("DownloadResources.sitePackage.archived", { date: item.date })}` : ""
                      }`
                    : item.date
                    ? t("DownloadResources.sitePackage.archived", { date: item.date })
                    : t("DownloadResources.historyDocs.fallbackDesc")
                }
              />
            </List.Item>
          )}
        />
      )}

      <Title level={3} className={`${serifTitleClass} ${isEn ? "!text-[32px]" : ""}`}>{t("DownloadResources.historyDocs.title")}</Title>
      {loading ? (
        <Paragraph type="secondary">{t("DownloadResources.historyDocs.loading")}</Paragraph>
      ) : history.length === 0 ? (
        <Empty description={t("DownloadResources.historyDocs.empty")} />
      ) : (
        <List
          dataSource={history}
          renderItem={(item) => (
            <List.Item
              key={item.version}
              actions={[
                <Button
                  key="dl"
                  type="link"
                  icon={<DownloadOutlined />}
                  href={item.url}
                  className="download-link-button"
                >
                  {t("DownloadResources.downloadDocZip")}
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<Text strong>v{item.version}</Text>}
                description={
                  item.date
                    ? t("DownloadResources.latestDocs.archived", { date: item.date })
                    : t("DownloadResources.historyDocs.fallbackDesc")
                }
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
}

export default function DownloadResources() {
  const { t } = useTranslation();
  return (
    <Layout
      title={t("SiteMetadata.download.title")}
      description={t("SiteMetadata.download.description")}
      wrapperClassName="download-resources-wrapper"
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Yakit",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Windows, macOS, Linux",
            url: "https://yaklang.com/download",
            description:
              t("SiteMetadata.download.schemaDescription"),
            author: {
              "@type": "Organization",
              name: "Yak Project",
              url: "https://yaklang.com",
            },
          })}
        </script>
      </Head>
      <main
        style={{
          background: "var(--Colors-Use-Main---Gold-Bg)",
          minHeight: "100vh",
        }}
      >
        <ConfigProvider theme={{ token: { colorPrimary: YAK_PRIMARY } }}>
          <DownloadContent />
        </ConfigProvider>
      </main>
    </Layout>
  );
}
