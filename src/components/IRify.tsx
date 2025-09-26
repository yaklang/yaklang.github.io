import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { OutlineArrowrightIcon } from "./IRifyIcon";
import { AppleIcon, DownloadIcon, LinuxIcon, WindowsIcon } from "./HomeIcon";

import { useMemoizedFn } from "ahooks";
import { Dropdown, Menu, message } from "antd";

const axios = require("axios");
export interface IRifyProps {}

export const IRify: React.FC<IRifyProps> = (props) => {
  return (
    <div>
      <IRifyPage />
    </div>
  );
};

const FeatureList = [
  {
    title: () => "多语言多框架技术支持",
    img: require("../../static/img/irify/MultipleLanguagesSupported.png")
      .default,
    description: () => (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <span style={{ color: "#6366f1", marginRight: "8px" }}>🔧</span>
          <span>
            编译系统支持
            <strong style={{ color: "#4f46e5" }}>多种编程语言</strong>
            及其生态系统：
          </span>
        </div>
        <div style={{ marginLeft: "24px", color: "#4b5563" }}>
          <span style={{ color: "#ef4444" }}>
            Java <i className="devicon-java-plain colored"></i>
          </span>{" "}
          系列
          <span style={{ color: "#6b7280" }}>
            (包含 Freemarker、SpEL、EL、JSP 等子语言)
          </span>
          、
          <span style={{ color: "#3b82f6" }}>
            Golang <i className="devicon-go-original-wordmark colored"></i>
          </span>
          、
          <span style={{ color: "#8b5cf6" }}>
            PHP <i className="devicon-php-plain colored"></i>
          </span>
          、
          <span style={{ color: "#f59e0b" }}>
            JavaScript/EcmaScript{" "}
            <i className="devicon-javascript-plain colored"></i>
          </span>{" "}
          等， 兼容各语言的主流版本。
        </div>
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#10b981", marginRight: "8px" }}>✨</span>
          <span>
            深度支持{" "}
            <strong style={{ color: "#059669" }}>
              SpringBoot <i className="devicon-spring-plain colored"></i>
            </strong>{" "}
            等常见 Java 开发框架，基于标准 eBNF g4 语法文件构建。
          </span>
        </div>
      </>
    ),
  },
  {
    title: () => "先进的分析技术",
    img: require("../../static/img/irify/AdvancedAnalysisTechniques.png")
      .default,
    description: () => (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <span style={{ color: "#6366f1", marginRight: "8px" }}>🔍</span>
          <span>
            基于<strong style={{ color: "#4f46e5" }}>静态单赋值(SSA)</strong>
            形式，实现了一系列先进分析技术：
          </span>
        </div>
        <div style={{ marginLeft: "24px", color: "#4b5563" }}>
          <div style={{ marginBottom: "4px" }}>
            <span style={{ color: "#3b82f6" }}>• 双向数据流分析</span>：基于 Phi
            函数，支持自顶向下和自底向上的完整分析链路
          </div>
          <div style={{ marginBottom: "4px" }}>
            <span style={{ color: "#8b5cf6" }}>• 全局分析能力</span>
            ：支持跨包/跨文件分析，具备路径敏感的遍历优化
          </div>
          <div style={{ marginBottom: "4px" }}>
            <span style={{ color: "#ef4444" }}>• 深度关联分析</span>
            ：数据流与控制流图(CFG)的深度结合
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
        >
          <span style={{ color: "#10b981", marginRight: "8px" }}>✨</span>
          <span>
            提供
            <strong style={{ color: "#059669" }}>面向对象程序的闭包分析</strong>
            与上下文敏感的过程间分析
          </span>
        </div>
      </>
    ),
  },
  {
    title: () => "IR 数据库与分析规则",
    img: require("../../static/img/irify/IR-DatabaseandAnalysisRule.png")
      .default,
    description: () => (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <span style={{ color: "#6366f1", marginRight: "8px" }}>💾</span>
          <span>
            采用 <strong style={{ color: "#4f46e5" }}>SQLite 结构化存储</strong>
            ，支持懒加载与懒存储机制：
          </span>
        </div>
        <div style={{ marginLeft: "24px", color: "#4b5563" }}>
          <div style={{ marginBottom: "4px" }}>
            <span style={{ color: "#3b82f6" }}>• 高性能数据库</span>
            ：优化的存储结构确保分析性能
          </div>
          <div style={{ marginBottom: "4px" }}>
            <span style={{ color: "#8b5cf6" }}>• SyntaxFlow 分析语言</span>
            ：直接对 IR 编译产物进行扫描
          </div>
          <div style={{ marginBottom: "4px" }}>
            <span style={{ color: "#ef4444" }}>• 规则编写系统</span>
            ：将分析经验转化为可复用规则
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
        >
          <span style={{ color: "#10b981", marginRight: "8px" }}>📚</span>
          <span>
            查看{" "}
            <a href="https://ssa.to/cookbook" style={{ color: "#059669" }}>
              技术文档
            </a>{" "}
            了解详细使用方法
          </span>
        </div>
      </>
    ),
  },
];

function IRifyPage() {
  const { t } = useTranslation();
  const [legacyVisible, setLegacyVisible] = useState(false);
  const [version, setVersion] = useState("");
  const [macOSIntel, setMacOSIntel] = useState({
    key: "macOS (Intel)",
    url: "darwin-x64.dmg",
    size: 0,
  });
  const [macOSAppleSillion, setMacOSAppleSillion] = useState({
    key: "macOS (Apple Silicon)",
    url: "darwin-arm64.dmg",
    size: 0,
  });
  const [Linux, setLinux] = useState({
    key: "Linux",
    url: "linux-amd64.AppImage",
    size: 0,
  });
  const [Windows, setWindows] = useState({
    key: "Windows",
    url: "windows-amd64.exe",
    size: 0,
  });
  const [LinuxArm64, setLinuxArm64] = useState({
    key: "Linux (Arm64)",
    url: "linux-arm64.AppImage",
    size: 0,
  });
  useEffect(() => {
    init();
  }, []);
  const init = useMemoizedFn(() => {
    axios
      .get("https://oss-qn.yaklang.com/irify/latest/yakit-version.txt")
      .then(async (response) => {
        if (response && response.data && typeof response.data === "string") {
          const yakVersion = response.data.split("\n")[0];
          setVersion(yakVersion);

          await getSize(macOSIntel.url, yakVersion, (size) => {
            setMacOSIntel({ ...macOSIntel, size });
          });
          await getSize(macOSAppleSillion.url, yakVersion, (size) => {
            setMacOSAppleSillion({ ...macOSAppleSillion, size });
          });
          await getSize(Linux.url, yakVersion, (size) => {
            setLinux({ ...Linux, size });
          });
          await getSize(Windows.url, yakVersion, (size) => {
            setWindows({ ...Windows, size });
          });
        } else {
          message.error("获取irify版本错误，请刷新页面后重试");
        }
      })
      .catch((error) => {
        message.error("获取irify版本错误，请刷新页面后重试");
      });
  });
  const getUrl = useMemoizedFn((url, newVersion = version) => {
    return `https://oss-qn.yaklang.com/irify/${newVersion}/IRify-${newVersion}-${url}`;
  });
  const getSize = useMemoizedFn(async (url, newVersion, callBack) => {
    await axios
      .head(getUrl(url, newVersion))
      .then((response) => {
        if (
          response &&
          response.headers &&
          response.headers["content-length"]
        ) {
          const size =
            Math.ceil(
              (response.headers["content-length"] / 1024 / 1024) * 100
            ) / 100;
          callBack(size);
        } else {
          message.error(`获取yakit-${url}版本大小错误`);
        }
      })
      .catch((error) => {
        message.error(`获取yakit-${url}版本大小错误`);
      });
  });

  const onDownload = useMemoizedFn((url) => {
    if (!version) {
      message.error("获取yakit版本错误，请刷新页面后重试");
      return;
    }
    const link = getUrl(url);
    window.location.href = link;
  });
  return (
    <div className="irify-page">
      <div className="heroBanner">
        <div className="container">
          <h1>
            <div className="title-text_1">{t("编译器级")}</div>
            <div className="title-text_2">SSA IR</div>
            <div className="title-text_1">{t("代码扫描技术")}</div>
          </h1>

          <h2 className="title_subtitle">
            Static-Single-Assignment Bringing Clarity to Code
          </h2>
          <div className="more-buttons">
            <a
              target="_blank"
              href="http://ssa.to/"
              className="more-btn know-more"
            >
              {t("了解更多")}
              <OutlineArrowrightIcon className="right-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="guide-body">
        <div className="guide-words-body">
          <div className="guide-body-yakit guide-body-yak-heard">
            <span className="guide-body-yak-heard-text">
              {t("下载IRIFY IDE (IRify)")}
            </span>
          </div>
          <div className="guide-body-yakit-type">
            <div className="guide-body-yakit-item">
              <div className="guide-body-yakit-item-left">
                <span className="guide-body-yakit-item-left-icon">
                  {AppleIcon}
                </span>
              </div>
              <div className="guide-body-yakit-item-right">
                <div>macOS (Intel / Apple Silicon)</div>
                <div className="guide-body-yakit-item-right-size">
                  {t("版本")}:&nbsp;{version || "-"}&nbsp;(
                  {macOSIntel.size || "-"}
                  &nbsp;MB / {macOSAppleSillion.size || "-"}&nbsp;MB)
                </div>
              </div>

              <div className="download-btn-wrap">
                <div className="download-btn-item-box">
                  <div
                    className="download-btn-item download-btn-item-special"
                    style={{ marginBottom: 4 }}
                    onClick={() => onDownload(macOSIntel.url)}
                  >
                    {t("下载")} Intel {t("芯片")}
                  </div>
                  <div
                    className="download-btn-item download-btn-item-special"
                    onClick={() => onDownload(macOSAppleSillion.url)}
                  >
                    {t("下载")} Apple Silicon {t("芯片")}
                  </div>
                </div>
              </div>
            </div>
            <div className="guide-body-yakit-item">
              <div className="guide-body-yakit-item-left">
                <span className="guide-body-yakit-item-left-icon">
                  {LinuxIcon}
                </span>
              </div>
              <div className="guide-body-yakit-item-right">
                <div>{Linux.key}</div>
                <div className="guide-body-yakit-item-right-size">
                  {t("版本")}:&nbsp;{version || "-"}&nbsp;(
                  {Linux.size || "-"}
                  &nbsp;MB)
                </div>
              </div>
              <div className="download-btn-wrap">
                <div className="download-btn-item-box">
                  <div
                    className="download-btn-item"
                    onClick={() => onDownload(Linux.url)}
                  >
                    {t("下载")}
                  </div>
                </div>
              </div>
            </div>
            <div className="guide-body-yakit-item">
              <div className="guide-body-yakit-item-left">
                <span className="guide-body-yakit-item-left-icon">
                  {WindowsIcon}
                </span>
              </div>
              <div className="guide-body-yakit-item-right">
                <div>{Windows.key}</div>
                <div className="guide-body-yakit-item-right-size">
                  {t("版本")}:&nbsp;{version || "-"}&nbsp;(
                  {Windows.size || "-"}
                  &nbsp;MB)
                </div>
              </div>
              <div className="download-btn-wrap">
                <div className="download-btn-item-box">
                  <div
                    className="download-btn-item"
                    onClick={() => onDownload(Windows.url)}
                  >
                    {t("下载")}
                  </div>
                </div>
              </div>
            </div>
            <div className="guide-body-yakit-item">
              <div className="guide-body-yakit-item-left">
                <span className="guide-body-yakit-item-left-icon">
                  {LinuxIcon}
                </span>
              </div>
              <div className="guide-body-yakit-item-right">
                <div>{LinuxArm64.key}</div>
                <div className="guide-body-yakit-item-right-size">
                  {t("支持统信 UOS、麒麟等国产系统")}
                </div>
              </div>
              <div className="download-btn-wrap">
                <div className="download-btn-item-box">
                  <div
                    className="download-btn-item download-btn-item-special2"
                    onClick={() => onDownload(LinuxArm64.url)}
                  >
                    {t("下载")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="guide-body-yakit-legacy-wrap">
            <Dropdown
              overlayClassName="yakit-legacy-dropdown"
              visible={legacyVisible}
              destroyPopupOnHide={true}
              overlay={
                <Menu>
                  {[
                    {
                      name: "Windows",
                      desc: "支持Win7系统",
                      url: "windows-legacy-amd64.exe",
                    },
                    {
                      name: "Linux-amd",
                      desc: "支持统信UOS、麒麟等国产系统，注意识别系统架构",
                      url: "linux-legacy-amd64.AppImage",
                    },
                    {
                      name: "Linux-arm",
                      desc: "支持统信UOS、麒麟等国产系统，注意识别系统架构",
                      url: "linux-legacy-arm64.AppImage",
                    },
                    {
                      name: "macOS Intel",
                      desc: "支持macOS 10.13和macOS 10.14",
                      url: "darwin-legacy-x64.dmg",
                    },
                    {
                      name: "macOS Apple Silicon",
                      desc: "支持macOS 10.13和macOS 10.14",
                      url: "darwin-legacy-arm64.dmg",
                    },
                  ].map((item) => {
                    return (
                      <Menu.Item key={item.name}>
                        <div
                          className="yakit-legacy-item"
                          onClick={() => {
                            onDownload(item.url);
                            setLegacyVisible(false);
                          }}
                        >
                          <div className="yakit-legacy-item-left">
                            <div className="yakit-legacy-item-name">{`${t(
                              item.name
                            )}`}</div>
                            <div className="yakit-legacy-item-desc">
                              {t(item.desc)}（{version}）
                            </div>
                          </div>
                          <div className="yakit-legacy-item-right">
                            {DownloadIcon}
                          </div>
                        </div>
                      </Menu.Item>
                    );
                  })}
                </Menu>
              }
              trigger={["click"]}
              placement="bottomCenter"
              onVisibleChange={(visible) => setLegacyVisible(visible)}
            >
              <span className="guide-body-yakit-legacy-btn">
                {t("下载兼容版本")}
              </span>
            </Dropdown>
            <span
              style={{ display: "block", fontSize: "12px", color: "#999ea8" }}
            >
              {t(
                "如果您需要使用IRify用于商业化目的，请确保你们已经获得官方授权，否则我们将追究您的相关责任。"
              )}
            </span>
          </div>
          <div className="row feature">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ img, title, description }) {
  return (
    <div className="col col--4 feature-item">
      <div className="text--center">
        <img src={img} width={200} />
      </div>
      <h3 className="feature-title">{title()}</h3>
      <div className="feature-desc">{description()}</div>
    </div>
  );
}
