import React from "react";
import Layout from "@theme/Layout";
import { IRify } from "../components/IRify";

export default function Home() {
    return (
        <Layout
            title="IRify：SSA 驱动的静态代码安全分析"
            description="IRify 基于 YAK SSA 与 SyntaxFlow，为安全团队提供可复现、可扩展的多语言静态代码安全分析能力。"
        >
            <main>
                <IRify />
            </main>
        </Layout>
    );
}
