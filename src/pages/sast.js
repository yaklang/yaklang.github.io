import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "antd/dist/antd.min.css";
import { Sast } from "../components/Sast";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    
    return (
        <Layout
            title={`Yak Language ${siteConfig.title}`}
            description="Web安全能力研发最强语言"
        >
            <main>
                <Sast />
            </main>
        </Layout>
    );
}
