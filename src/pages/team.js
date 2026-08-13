import React from "react";
import Layout from "@theme/Layout";
import { Team } from "../components/Team";

export default function Home() {
    return (
        <Layout
            wrapperClassName="team-page-layout"
            title="关于 Yak Project：开源网络安全基础设施团队"
            description="了解 Yak Project 团队及其围绕 Yaklang、Yakit、IRify 与安全研发构建的开源网络安全生态。"
        >
            <main>
                <Team />
            </main>
        </Layout>
    );
}
