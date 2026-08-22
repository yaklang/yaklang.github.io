import React from "react";
import Layout from "@theme/Layout";
import { Team } from "../components/Team";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <Layout
            wrapperClassName="team-page-layout"
            title={t("SiteMetadata.team.title")}
            description={t("SiteMetadata.team.description")}
        >
            <main>
                <Team />
            </main>
        </Layout>
    );
}
