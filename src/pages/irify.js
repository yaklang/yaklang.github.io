import React from "react";
import Layout from "@theme/Layout";
import { IRify } from "../components/IRify";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <Layout
            title={t("SiteMetadata.irify.title")}
            description={t("SiteMetadata.irify.description")}
        >
            <main>
                <IRify />
            </main>
        </Layout>
    );
}
