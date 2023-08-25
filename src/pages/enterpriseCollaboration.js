import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "antd/dist/antd.min.css";
import {EnterpriseCollaborationPage} from "../components/EnterpriseCollaboration";
import "../i18n";
import i18n from 'i18next';

export default function EnterpriseCollaboration() {
    const { siteConfig } = useDocusaurusContext();
    
    useEffect(() => {
        const lng = localStorage.getItem('i18nextLng');
        i18n.changeLanguage(lng, (err, t) => {
            if (err) {
                console.error('Error changing language:', err);
                return;
            }
            // 在语言设置成功后，你可以执行其他操作
            console.log('Language changed to:', lng);
        });
    }, []);

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
