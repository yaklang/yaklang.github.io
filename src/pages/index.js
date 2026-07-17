import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { NewHomePage } from "../components/homepage/NewHomePage";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <>
      <Head>
        <title>Yak Project — 广泛使用的开源网络安全基础设施</title>
        <meta
          name="description"
          content="Yak Project 以 CDSL-YAK 领域编程语言为内核，辐射 Yakit 安全测试平台、IRify 代码审计、Memfit AI 智能体与 JavaJive Java 工具链的完整网络安全技术体系。"
        />
        <meta
          name="keywords"
          content="Yak,Yaklang,Yakit,IRify,SSA,SyntaxFlow,Memfit AI,网络安全,渗透测试,MITM,Web Fuzzer,代码审计,SAST,安全工具,BurpSuite替代,CDSL,领域编程语言,开源安全"
        />
        <meta property="og:title" content="Yak Project — 广泛使用的开源网络安全基础设施" />
        <meta
          property="og:description"
          content="CDSL-YAK 领域编程语言为内核，Yakit 安全测试平台、IRify 代码审计、Memfit AI 智能体——从语言到平台的完整安全技术栈。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yaklang.com" />
        <meta property="og:image" content="https://yaklang.com/img/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yak Project — 开源网络安全基础设施" />
        <meta
          name="twitter:description"
          content="以 CDSL-YAK 为内核的完整网络安全技术体系：Yakit · IRify · Memfit AI · JavaJive"
        />
      </Head>
      {isShow && (
        <Layout
          title={`Yak Project — ${siteConfig.title}`}
          description="广泛使用的开源网络安全基础设施"
        >
          <NewHomePage />
        </Layout>
      )}
    </>
  );
}
