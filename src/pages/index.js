import React, { useState, useEffect, useLayoutEffect } from "react";
// import clsx from "clsx";
import Layout from "@theme/Layout";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "antd/dist/antd.min.css";
// import styles from "./index.module.css";
// import TypeIt from "typeit-react";
// import Tilt from "react-parallax-tilt";
// import { Typography } from "antd";
// import { DoubleRightOutlined, FireFilled } from "@ant-design/icons";
// import { MainPageContent } from "../components/MainPageContent";
import { HomePage } from "../components/Home";

// const { Paragraph, Text } = Typography;

// function HomepageHeader() {
//     const { siteConfig } = useDocusaurusContext();
//     // 设置 BG
//     const [bg, setBg] = useState();

//     useEffect(() => {
//         var m = require("../particles-bg");
//         setBg(m);
//     }, []);

//     return (
//         <Tilt
//             tiltEnable={true}
//             tiltReverse={false}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//         >
//             <header
//                 className={clsx("hero hero--primary", styles.heroBanner)}
//                 style={{ paddingTop: 8, paddingBottom: 8 }}
//             >
//                 {bg && new bg.default({ type: "circle", bg: true }).render()}
//                 <div className="container" style={{}}>
//                     <Space>
//                         <div style={{ marginRight: 60 }}>
//                             <h1 style={{ fontSize: 40, color: "#fff" }}>
//                                 {siteConfig.title}
//                             </h1>
//                             <p className="hero__subtitle">
//                                 {siteConfig.tagline}
//                             </p>
//                             <div className={styles.buttons}>
//                                 <Link
//                                     className="button button--secondary button--lg"
//                                     to="/docs/intro"
//                                     style={{ width: 400 }}
//                                 >
//                                     <Paragraph style={{ marginBottom: 0 }}>
//                                         <Text
//                                             delete={true}
//                                             style={{ color: "red" }}
//                                         >
//                                             北半球
//                                         </Text>{" "}
//                                         <Text mark={true}>最强</Text> Web
//                                         安全研发脚本语言
//                                     </Paragraph>
//                                 </Link>
//                                 <br />
//                             </div>
//                             <Space style={{ marginTop: 18 }}>
//                                 <div className={styles.buttons}>
//                                     <Button type={"primary"} size={"large"}>
//                                         <Link to={"/docs/intro"}>
//                                             <strong>
//                                                 快速开始 <FireFilled />
//                                             </strong>
//                                         </Link>
//                                     </Button>
//                                 </div>
//                                 <div>
//                                     <Button
//                                         type={"link"}
//                                         size={"large"}
//                                         ghost={true}
//                                         style={{ color: "white" }}
//                                         className={styles.quickStart}
//                                     >
//                                         <Link
//                                             to={
//                                                 "/docs/newforyak/first_servicescan"
//                                             }
//                                         >
//                                             <strong>
//                                                 基础教程 <DoubleRightOutlined />
//                                             </strong>
//                                         </Link>
//                                     </Button>
//                                 </div>
//                             </Space>
//                             <br />
//                             <Space style={{ marginTop: 8 }}>
//                                 for
//                                 <div style={{ minWidth: 110, fontWight: 400 }}>
//                                     <TypeIt
//                                         options={{ loop: true, loopDelay: 0 }}
//                                         getBeforeInit={(ins) => {
//                                             ins.type("黑客")
//                                                 .pause(1200)
//                                                 .delete(2)
//                                                 .type("白帽子")
//                                                 .pause(1200)
//                                                 .delete(3)
//                                                 .type("安全工程师")
//                                                 .pause(1200)
//                                                 .delete(5)
//                                                 .type("安全运营人员")
//                                                 .pause(1200)
//                                                 .delete(6)
//                                                 .type("渗透测试工程师")
//                                                 .pause(1200)
//                                                 .delete(7)
//                                                 .type("安全服务提供商")
//                                                 .pause(1200)
//                                                 .delete(7);
//                                             return ins;
//                                         }}
//                                     />
//                                 </div>
//                             </Space>
//                         </div>
//                         <Image
//                             preview={false}
//                             height={330}
//                             width={330}
//                             src={"/img/yaklogo.png"}
//                         />
//                     </Space>
//                 </div>
//             </header>
//         </Tilt>
//     );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const DesignW = 1920;
    const FontRate = document.body.offsetWidth === 1920 ? 15.875 : 16;

    document.getElementsByTagName("html")[0].style.fontSize =
      (document.body.offsetWidth / DesignW) * FontRate + "px";
    document.getElementsByTagName("body")[0].style.fontSize =
      (document.body.offsetWidth / DesignW) * FontRate + "px";
    setIsShow(true);
    window.addEventListener(
      "onorientationchange" in window ? "orientationchange" : "resize",
      () => {
        document.getElementsByTagName("html")[0].style.fontSize =
          (document.body.offsetWidth / DesignW) * FontRate + "px";
        document.getElementsByTagName("body")[0].style.fontSize =
          (document.body.offsetWidth / DesignW) * FontRate + "px";
      }
    );
  }, []);

  return (
    <>
      {isShow && (
        <Layout
          title={`Yak Language ${siteConfig.title}`}
          description="Web安全能力研发最强语言"
        >
          {/* <HomepageHeader/> */}
          {/* <main> */}
          <HomePage />
          {/*<HomepageFeatures/>*/}
          {/* </main> */}
        </Layout>
      )}
    </>
  );
}
