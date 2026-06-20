// @ts-nocheck
import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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
  DownloadOutlined,
  FilePdfOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Yak 品牌主题橙色 (与 custom.scss 的 --base-theme-color 一致)
const YAK_ORANGE = "#ff7d23";

interface DocVersion {
  version: string;
  date: string;
  url: string;
}

const WHITEPAPER_URL =
  "https://oss-qn.yaklang.com/yakit-technical-white-paper.pdf";

// 下载资源页面。
// 将"白皮书下载"与"API 文档存档下载"统一收纳在同一页, 导航 TAB 为"下载资源"。
// 文档存档数据来源: 构建产物 static/docs-versions.json, 由 scripts/gen-docs-versions.js
// 依据 old_versions.txt 生成, 最新版本置顶。
function DownloadContent() {
  const dataUrl = useBaseUrl("/docs-versions.json");
  const [versions, setVersions] = useState<DocVersion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(dataUrl)
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
  }, [dataUrl]);

  const latest = versions.length > 0 ? versions[0] : null;
  const history = versions.length > 1 ? versions.slice(1) : [];

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
      <Title level={2}>下载资源</Title>
      <Paragraph type="secondary">
        这里集中提供 Yaklang / Yakit 相关的可下载资源，包括技术白皮书与各版本
        内置标准库 API 手册归档。
      </Paragraph>

      <Card style={{ marginBottom: 24 }} title="技术白皮书">
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary">Yakit 技术白皮书 (PDF)</Text>
          <Button type="primary" icon={<FilePdfOutlined />} href={WHITEPAPER_URL}>
            &nbsp;下载白皮书
          </Button>
        </Space>
      </Card>

      <Card style={{ marginBottom: 24 }} title="最新 API 文档">
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Space wrap>
            <Button type="primary" icon={<ReadOutlined />}>
              <Link to="/docs/intro" style={{ color: "inherit" }}>
                &nbsp;在线浏览最新文档
              </Link>
            </Button>
            {latest && (
              <Button
                type="primary"
                ghost
                icon={<DownloadOutlined />}
                href={latest.url}
              >
                &nbsp;下载最新文档 (v{latest.version})
              </Button>
            )}
          </Space>
          {latest && (
            <Text type="secondary">
              当前归档最新版本:{" "}
              <Tag color={YAK_ORANGE}>v{latest.version}</Tag>
              {latest.date ? `归档于 ${latest.date}` : null}
            </Text>
          )}
        </Space>
      </Card>

      <Title level={3}>历史版本文档（仅提供 zip 下载）</Title>
      {loading ? (
        <Paragraph type="secondary">加载中...</Paragraph>
      ) : history.length === 0 ? (
        <Empty description="暂无更早的历史版本归档" />
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
                >
                  下载文档 zip
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<Text strong>v{item.version}</Text>}
                description={
                  item.date ? `归档于 ${item.date}` : "Markdown 文档压缩包"
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`下载资源 - ${siteConfig.title}`}
      description="Yaklang / Yakit 技术白皮书与 API 文档历史版本下载"
    >
      <main>
        <ConfigProvider theme={{ token: { colorPrimary: YAK_ORANGE } }}>
          <DownloadContent />
        </ConfigProvider>
      </main>
    </Layout>
  );
}
