import React from "react";
import Head from "@docusaurus/Head";
import { HomeSlideProvider } from "./HomeSlideContext";
import HomeNavbar from "./HomeNavbar";

interface HomeLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <HomeSlideProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="relative h-screen overflow-hidden">
        <HomeNavbar />
        <main className="absolute inset-0 flex flex-col">{children}</main>
      </div>
    </HomeSlideProvider>
  );
};

export default HomeLayout;