import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "antd/dist/antd.min.css";
import {EnterpriseCollaborationPage} from "../components/EnterpriseCollaboration"
import '../i18n.js';

export default function EnterpriseCollaboration() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Yak Language ${siteConfig.title}`}
            description="Web安全能力研发最强语言"
        >
            <main>
                <EnterpriseCollaborationPage />
            </main>
        </Layout>
    );
}
