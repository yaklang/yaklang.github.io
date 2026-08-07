import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Team } from "../components/Team";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    
    return (
        <Layout
            wrapperClassName="team-page-layout"
            title={`Yak Language ${siteConfig.title}`}
            description="Web安全能力研发最强语言"
        >
            <main>
                <Team />
            </main>
        </Layout>
    );
}
