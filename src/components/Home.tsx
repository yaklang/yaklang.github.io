import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button, Dropdown, Menu, message, Popover } from "antd";
import {
  DownloadOutlined,
  DownOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import ReactPlayer from "react-player";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "animate.css";
import { useCreation, useDebounceFn, useGetState, useMemoizedFn } from "ahooks";
import {
  AppleHoverIcon,
  AppleIcon,
  CopyIcon,
  DownloadIcon,
  LinuxHoverIcon,
  LinuxIcon,
  LoadingIcon,
  SureIcon,
  WindowsHoverIcon,
  WindowsIcon,
} from "./HomeIcon";
import { useTranslation } from "react-i18next";

const axios = require("axios");

export interface HomePageProps {}

interface FunctionListInfoProps {
  name: string;
  link: string;
}
interface FunctionDataProps {
  title: string;
  img: string[];
  list: FunctionListInfoProps[];
}
const FunctionData: FunctionDataProps[] = [
  {
    title: "常见安全工具的最佳实践 GUI",
    img: [
      require("../../static/img/home/third/mitm-1.png").default,
      require("../../static/img/home/third/mitm-2.png").default,
      require("../../static/img/home/third/mitm-3.png").default,
    ],
    list: [
      {
        name: "难以复制的 MITM 被动扫描 GUI",
        link: "/products/best-practice/passive-scanning",
      },
      {
        name: "可选择插件执行端口扫描",
        link: "/products/basic/modular-fingerprint-scanning",
      },
      { name: "常见安全工具右键联动", link: "/products/intro" },
    ],
  },
  {
    title: "嵌入式执行并随时热加载",
    img: [require("../../static/img/home/third/hot-loading.png").default],
    list: [
      {
        name: "通过嵌入 Yaklang 脚本来实现 MITM 动态调试流量，随时动态执行代码",
        link: "/products/professional/yakit-in-practice",
      },
    ],
  },
  {
    title: "与BurpS**te 一致的操作流",
    img: [
      require("../../static/img/home/third/permeate-1.png").default,
      require("../../static/img/home/third/permeate-2.png").default,
    ],
    list: [
      {
        name: "劫持 => History => Repeater / Intruder",
        link: "/products/yak-actual-combat-cases/traffic-hijacking",
      },
      {
        name: "与经典渗透测试操作流一致的国研产品",
        link: "/products/yak-actual-combat-cases/traffic-hijacking",
      },
    ],
  },
  {
    title: "独一无二的 Web Fuzzer 与 Fuzz 语法",
    img: [require("../../static/img/home/third/fuzzer.png").default],
    list: [
      {
        name: "使用 fuzz 语法整合并代替 Repeater 与 Intruder",
        link: "/products/web-fuzzer-parsing/more-than-repeater-Intruder",
      },
    ],
  },
  {
    title: "高度插件化",
    img: [
      require("../../static/img/home/third/plugin-1.png").default,
      require("../../static/img/home/third/plugin-2.png").default,
    ],
    list: [
      {
        name: "用户可以在渗透测试任何步骤内执行自定义的 Yaklang 脚本或插件",
        link: "/products/best-practice/mitm-plug",
      },
      {
        name: "插件仓库与插件商店机制为 “社区化” 助力",
        link: "/products/plugins/plugin_type",
      },
    ],
  },
];

interface IntroduceKindProps {
  name: string;
  icon: string;
}
const IntroduceKinds: IntroduceKindProps[] = [
  {
    name: "高效",
    icon: require("../../static/img/home/second/efficent-head.png").default,
  },
  {
    name: "函数级调用",
    icon: require("../../static/img/home/second/function-head.png").default,
  },
  {
    name: "自动补全",
    icon: require("../../static/img/home/second/doc-head.png").default,
  },
  {
    name: "高阶工具",
    icon: require("../../static/img/home/second/tool-head.png").default,
  },
];

const yakEnvironmentConfigureList = {
  "MacOs(Intel/Apple Silicon)": {
    code: "bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)",
  },
  Linux: {
    code: "bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)",
  },
  Windows: {
    code: "powershell (new-object System.Net.WebClient).DownloadFile('https://oss-qn.yaklang.com/yak/latest/yak_windows_amd64.exe','yak_windows_amd64.exe') && yak_windows_amd64.exe install && del /f yak_windows_amd64.exe",
  },
};

export const HomePage: React.FC<HomePageProps> = (props) => {
  const { t } = useTranslation();

  const [kind, setKind] = useState<IntroduceKindProps>({
    name: "高效",
    icon: require("../../static/img/home/second/efficent-head.png").default,
  });
  // 滚动区域变化标识
  const [isScrollUp, setIsScrollUp] = useState<boolean>(false);

  const [kindRate, setKindRate] = useState<number>(0);
  const [isKindRange, setIsKindRange] = useState<boolean>(false);

  const [functionKind, setFunctionKind] = useState<number>(0);
  const [functionRate, isFunctionRate] = useState<number>(0);
  const [isFunctionRange, setIsFunctionRange] = useState<boolean>(false);

  const [currentRatio, setCurrentRatio] = useState<number>(100); // 当前屏幕缩放比例
  const [currentSelectYak, setCurrentSelectYak] = useState<string>(
    "MacOs(Intel/Apple Silicon)"
  );

  const [sureCopy, setSureCopy] = useState<boolean>(false);
  const [loadingCopy, setLoadingCopy] = useState<boolean>(false);

  const oldScrollTop = useRef<number>(0);
  const defDevicePixelRatio = useRef<number>(); // 浏览器默认的比例，系统设置中的缩放比例
  useEffect(() => {
    detectZoom();
    window.addEventListener("resize", detectZoom);
    return () => {
      window.removeEventListener("resize", detectZoom);
    };
  }, []);

  const detectZoom = useDebounceFn(
    () => {
      {
        let ratio = 0,
          screen = window.screen,
          ua = navigator.userAgent.toLowerCase();
        if (window.devicePixelRatio !== undefined) {
          if (!defDevicePixelRatio.current) {
            defDevicePixelRatio.current = window.devicePixelRatio;
          }
          if (window.devicePixelRatio === defDevicePixelRatio.current) {
            ratio = 1; //此时浏览器中的缩放比例为100%
          } else if (
            defDevicePixelRatio.current / window.devicePixelRatio ===
            defDevicePixelRatio.current
          ) {
            ratio = 0.5; // 假如系统设置为2，浏览器缩放为1,此时不应该给ratio=11，应该为其他值，不然动画会显示，展示会有问题
          } else {
            ratio = window.devicePixelRatio;
          }
        } else if (~ua.indexOf("msie")) {
          // 兼容ie11以下
          // @ts-ignore
          if (screen.deviceXDPI && screen.logicalXDPI) {
            // @ts-ignore
            ratio = screen.deviceXDPI / screen.logicalXDPI;
          }
        } else if (
          window.outerWidth !== undefined &&
          window.innerWidth !== undefined
        ) {
          ratio = window.outerWidth / window.innerWidth;
        }
        if (ratio) {
          ratio = Math.round(ratio * 100);
        }
        setCurrentRatio(ratio);
      }
    },
    { wait: 200, leading: true }
  ).run;
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (!e.target) return;
      const target = e.target as Document;
      if (!target.scrollingElement) return;

      const html = target.scrollingElement as HTMLHtmlElement;
      const FontSize = +html.style.fontSize.split("px")[0];
      const scrollTop = html.scrollTop;

      // 判断滚动方向
      setIsScrollUp(oldScrollTop.current >= scrollTop);
      oldScrollTop.current = scrollTop;

      // 第一区域的高度+第二区域的padding-top高度(设计稿高度 )
      const first = (786 / 16) * FontSize;
      // 第二区域paddigTop、paddingBottom、每块区域高度
      const secondPaddingTop = (54 / 16) * FontSize;
      const secondBlock = ((950 - 54 - 200) / 16) * FontSize;
      // 第二区域总高度
      const second = (3143 / 16) * FontSize;
      // 第三区域paddingTop、block、gap
      const thirdPaddingTop = (249 / 16) * FontSize;
      const thirdBlock = (432 / 16) * FontSize;
      const thirdBlockGap = (90 / 16) * FontSize;
      // 第三区域总高度
      const third = (2769 / 16) * FontSize;
      //第二与第三区域可视点高度
      const secondToThird = (480 / 16) * FontSize;
      if (scrollTop <= first) {
        setIsKindRange(false);
        setIsFunctionRange(false);
      }
      if (scrollTop > first && scrollTop < first + second) {
        setIsFunctionRange(scrollTop >= first + second - secondToThird);

        const secondLevel = Math.trunc(
          (scrollTop - first - secondPaddingTop) / secondBlock
        );
        if (secondLevel > 3 || secondLevel < 0) {
          // 超出界限中断，不能使用return，因为后面的if可能会同时触发
        } else {
          if (scrollTop > first + secondPaddingTop) {
            setKindRate(
              ((scrollTop - first - secondPaddingTop) % secondBlock) /
                secondBlock
            );
            setKind(IntroduceKinds[secondLevel]);
            setIsKindRange(true);
          }
        }
      }
      if (
        scrollTop >= first + second - secondToThird &&
        scrollTop < first + second + third
      ) {
        setIsKindRange(scrollTop < first + second);

        const thirdLevel = Math.trunc(
          (scrollTop -
            first -
            second +
            secondToThird -
            thirdPaddingTop +
            thirdBlockGap) /
            (thirdBlock + thirdBlockGap)
        );
        if (thirdLevel > 4 || thirdLevel < 0) {
          // 超出界限中断，不能使用return，因为后面的if可能会同时触发
        } else {
          if (
            scrollTop >
            first + second - secondToThird + thirdPaddingTop - thirdBlockGap
          ) {
            // 这里减法的情况是，总滚动长度减去(第一和第二区域高度、第三区域标题高度)加上(第二区域内第三区域可视高度、一个第三区域块高度里的marginTop)
            isFunctionRate(
              (((scrollTop -
                first -
                second +
                secondToThird -
                thirdPaddingTop +
                thirdBlockGap) %
                (thirdBlock + thirdBlockGap)) -
                thirdBlockGap) /
                thirdBlock
            );
            setFunctionKind(thirdLevel);
            setIsFunctionRange(true);
          }
        }
      }
      if (scrollTop >= first + second + third) {
        setIsKindRange(false);
        setIsFunctionRange(false);
      }
    });
  }, []);

  const onCopyCode = useMemoizedFn((code: string) => {
    setLoadingCopy(true);
    let oInput = document.createElement("input");
    oInput.value = code;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象;
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.remove();
    setTimeout(() => {
      setLoadingCopy(false);
      setSureCopy(true);
      setTimeout(() => {
        setSureCopy(false);
      }, 1000);
    }, 1000);
  });
  const getColourCode = useMemoizedFn((code: string) => {
    let text = "",
      codeArr = code.split("");
    codeArr.forEach((item) => {
      if (item === "<" || item === "/" || item === "-") {
        text += `<span style='color:rgb(137, 221, 255)'>${item}</span>`;
      } else if (item === "(" || item === ")" || item === ":" || item === ".") {
        text += `<span style='color: rgb(199, 146, 234);'>${item}</span>`;
      } else {
        text += item;
      }
    });
    return text;
  });
  const [legacyVisible, setLegacyVisible] = useState<boolean>(false);
  const [version, setVersion] = useState<string>("");
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
      .get(
        "https://oss-qn.yaklang.com/yak/latest/yakit-version.txt"
      )
      .then(async (response) => {
        if (response && response.data && typeof response.data === "string") {
          const yakVersion = (response.data as string).split("\n")[0];
          setVersion(yakVersion);

          await getSize(macOSIntel.url, macOSIntel.key, (size) => {
            setMacOSIntel({ ...macOSIntel, size });
          });
          await getSize(
            macOSAppleSillion.url,
            macOSAppleSillion.key,
            (size) => {
              setMacOSAppleSillion({ ...macOSAppleSillion, size });
            }
          );
          await getSize(Linux.url, Linux.key, (size: number) => {
            setLinux({ ...Linux, size });
          });
          await getSize(Windows.url, Windows.key, (size: number) => {
            setWindows({ ...Windows, size });
          });
        } else {
          message.error("获取yakit版本错误，请刷新页面后重试");
        }
      })
      .catch((error) => {
        message.error("获取yakit版本错误，请刷新页面后重试");
      });
  });
  const getUrl = useMemoizedFn((url: string) => {
    return `https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-${url}`;
  });
  const getSize = useMemoizedFn(
    async (url: string, type: string, callBack: any) => {
      await axios
        .head(getUrl(url))
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
    }
  );

  const onDownload = useMemoizedFn((url: string) => {
    if (!version) {
      message.error("获取yakit版本错误，请刷新页面后重试");
      return;
    }
    const link = getUrl(url);
    window.location.href = link;
  });

  return (
    <>
      <div className="home-container">
        <div className="guide-background-img"></div>
        <div className="guide-body">
          <div className="guide-words-body">
            <div className="guide-words-body-header">
              <span className="guide-words-body-header-orange">CDSL</span>
              <span className="uide-words-body-header-text">-YAK:</span>
              <img
                src={
                  require("../../static/img/home/homeHeadCircular.png").default
                }
                className="header-circle"
              />
              <img
                src={require("../../static/img/home/homeHeadTitle.png").default}
                className="header-title"
              />
            </div>
            <div className="guide-words-body-description">
              {t("为网络安全而生的领域编程语言")}
            </div>
            <div className="guide-body-yak">
              <div className="guide-body-yak-heard">
                <span className="guide-body-yak-heard-text">
                  {t("YAK 语言环境配置")}
                </span>
                <a
                  target="_blank"
                  href="/docs/startup"
                  className="guide-body-yak-heard-tip"
                >
                  {t("搭建教程")}
                </a>
              </div>
              <div className="guide-body-yak-type">
                <div className="guide-body-yak-type-text">
                  {Object.keys(yakEnvironmentConfigureList).map((k) => (
                    <div
                      className={`guide-body-yak-type-text-item ${
                        (k === currentSelectYak &&
                          "guide-body-yak-type-text-item-select") ||
                        ""
                      }`}
                      key={"yakEnvironmentConfigureList" + k}
                      onClick={() => {
                        setCurrentSelectYak(k);
                        getColourCode(
                          yakEnvironmentConfigureList[currentSelectYak].code
                        );
                      }}
                    >
                      {k}
                    </div>
                  ))}
                </div>
                <span className="guide-body-yak-type-code">
                  <span
                    className="guide-body-yak-type-code-ellipsis"
                    dangerouslySetInnerHTML={{
                      __html: `${
                        (currentSelectYak === "Windows" &&
                          yakEnvironmentConfigureList[currentSelectYak].code) ||
                        getColourCode(
                          yakEnvironmentConfigureList[currentSelectYak].code
                        )
                      }`,
                    }}
                  ></span>
                  <div className="guide-body-yak-type-code-copy">
                    {(loadingCopy && (
                      <span className="icon-animation">{LoadingIcon}</span>
                    )) ||
                      (sureCopy && (
                        <span style={{ display: "flex" }}>{SureIcon}</span>
                      )) || (
                        <span
                          className="guide-body-yak-type-code-copy-icon"
                          onClick={() =>
                            onCopyCode(
                              yakEnvironmentConfigureList[currentSelectYak].code
                            )
                          }
                        >
                          {CopyIcon}
                        </span>
                      )}
                  </div>
                </span>
              </div>
              <div className="guide-body-yakit guide-body-yak-heard">
                <span className="guide-body-yak-heard-text">
                  {t("下载YAK IDE (Yakit)")}
                </span>
                <a
                  target="_blank"
                  href="/products/download_and_install"
                  className="guide-body-yak-heard-tip"
                >
                  {t("安装说明")}
                </a>
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
                <span style={{ display: 'block',fontSize :'12px',color:'#999ea8'}}>
                    {t("如果您需要使用Yakit用于商业化目的，请确保你们已经获得官方授权，否则我们将追究您的相关责任。")}
                  </span>
              </div>
            </div>
          </div>
        </div>
        <div
            className={`introduce-body  ${
                (currentRatio !== 100 && "introduce-body-height-auto") || ""
          }`}
        >
          <div className="sticky-content">
            <div
              className="introduce-body-header"
              dangerouslySetInnerHTML={{
                __html: t("网络安全领域的首个DSL", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></div>
            <div className="introduce-body-kinds">
              {IntroduceKinds.map((item, index) => {
                return (
                  <div
                    key={item.name}
                    className={`${
                      kind.name === item.name
                        ? "introduce-body-kinds-opt-selected"
                        : ""
                    } introduce-body-kinds-opt`}
                    onClick={() => {
                      setKind(item);
                      if (currentRatio === 100) {
                        const FontSize: number =
                          +document.documentElement.style.fontSize.split(
                            "px"
                          )[0];
                        let height =
                          ((786 + 54 + 696 * index + 140) / 16) * FontSize;
                        if (index === 3) {
                          height =
                            ((786 + 54 + 696 * index + 50) / 16) * FontSize;
                        }
                        window.scrollTo(0, height);
                      }
                    }}
                  >
                    <img src={item.icon} className="kinds-opt-icon" />
                    <div className="kinds-opt-name">{t(item.name)}</div>
                  </div>
                );
              })}
            </div>

            <div className="introduce-body-imgs">
              <KindModules
                name={kind.name}
                rate={kindRate}
                isRange={isKindRange}
                isScrollUp={isScrollUp}
                currentRatio={currentRatio}
              />
              <img
                src={
                  require("../../static/img/home/second/kind-icon.png").default
                }
                className="imgs-icon"
              />
            </div>
          </div>
        </div>

        <div className="function-body">
          <div
            className="function-body-header"
            dangerouslySetInnerHTML={{
              __html: t("Yakit-CDSL的最佳实践", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></div>
          <div className="function-body-description">
            <div className="function-body-description-body">
              {t(
                "专注于安全领域，使用 DSL 模式提供安全领域能力基座和技术解决方案：漏洞扫描，反连检测，劫持手动测试，特殊协议支持，一应俱全"
              )}
            </div>
          </div>

          <div className="function-body-module">
            {FunctionData.map((item, index) => {
              return (
                <FunctionModule
                  key={item.title}
                  info={item}
                  isReversal={!!(index % 2)}
                  index={index}
                  kind={functionKind}
                  rate={functionRate}
                  isRange={isFunctionRange}
                  isScrollUp={isScrollUp}
                  currentRatio={currentRatio}
                />
              );
            })}
            <img
              src={
                require("../../static/img/home/third/bg-console.png").default
              }
              className="function-body-module-console"
            />
            <img
              src={
                require("../../static/img/home/third/bg-setting.png").default
              }
              className="function-body-module-setting"
            />
          </div>
        </div>
      </div>
      <div className="appraise-body">
        <div className="appraise-body-header">{t("立即体验")}</div>

        <div className="appraise-body-description">
          {t("不管您是行业用户，还是高校学生，Yak 永远是您的好伙伴")}
        </div>

        <div className="appraise-body-btn">
          <DownLoadBtn />
          <CourseDocBtn />
        </div>

        <div style={{ marginTop: 64 }}>
          <AppraiseInfoBody />
        </div>
      </div>
    </>
  );
};

interface downloadInfoProps {
  name: string;
  link: string;
}
const DownLoadBtn = (props) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState<boolean>(false);
  const [version, setVersion] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const downloadList: downloadInfoProps[] = [
    {
      name: "macOS",
      link: "darwin-x64.dmg",
    },
    {
      name: "macOS(Apple Silicon)",
      link: "darwin-arm64.dmg",
    },
    {
      name: "Linux",
      link: "linux-amd64.AppImage",
    },
    {
      name: "Windows",
      link: "windows-amd64.exe",
    },
  ];

  useEffect(() => {
    axios
      .get(
        "https://oss-qn.yaklang.com/yak/latest/yakit-version.txt"
      )
      .then(function (response) {
        if (response && response.data && typeof response.data === "string") {
          const yakVersion = (response.data as string).split("\n")[0];
          setVersion(yakVersion);
        } else {
          setDisabled(true);
          message.error("获取yakit版本错误，请刷新页面后重试");
        }
      })
      .catch(function (error) {
        console.info(error);
      });
  }, []);

  const menu = useCallback(
    (visible: boolean) => {
      return (
        <Menu style={visible ? {} : { visibility: "hidden" }}>
          {downloadList.map((item) => {
            return (
              <Menu.Item key={item.name} disabled={disabled}>
                <a
                  target="_blank"
                  href={`https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-${item.link}`}
                  onClick={() => setVisible(false)}
                >
                  {`${item.name}(${version})`}
                </a>
              </Menu.Item>
            );
          })}
        </Menu>
      );
    },
    [version]
  );

  return (
    <Dropdown
      visible={visible}
      overlay={menu(visible)}
      trigger={["click"]}
      onVisibleChange={(visible) => setVisible(visible)}
    >
      <a className="download-yakit-btn" onClick={(e) => e.preventDefault()}>
        <div className="btn-title">
          <DownloadOutlined className="icon-style" />
          <span className="title-style">{t("下载桌面端")}</span>
        </div>
        <div className="btn-cion">
          <DownOutlined className="icon-style" />
        </div>
      </a>
    </Dropdown>
  );
};
const CourseDocBtn = React.memo((props) => {
  const { t } = useTranslation();
  return (
    <a className="course-doc-btn" href="/products/download_and_install">
      <EyeOutlined className="icon-style" />
      <span className="title-style">{t("查看安装教程")}</span>
    </a>
  );
});

interface KindModulesProps {
  name: string;
  rate: number;
  isRange: boolean;
  isScrollUp: boolean;
  currentRatio: number;
}
const KindModules = (props: KindModulesProps) => {
  const { t } = useTranslation();
  const { name, rate, isRange, isScrollUp, currentRatio } = props;

  const efficent_1 = useRef(null);
  const efficent_2 = useRef(null);
  const efficent_3 = useRef(null);
  const efficent_4 = useRef(null);
  const efficent_1_time = useRef<any>(null);
  const efficent_2_time = useRef<any>(null);
  const efficent_3_time = useRef<any>(null);
  const efficent_4_time = useRef<any>(null);
  const efficent_title = useRef(null);
  const efficent_show = useRef<boolean>(false);

  const function_img = useRef(null);
  const function_blue = useRef(null);
  const function_green = useRef(null);
  const function_yellow = useRef(null);
  const function_icon = useRef(null);
  const function_path = useRef(null);
  const function_img_time = useRef<any>(null);
  const function_blue_time = useRef<any>(null);
  const function_green_time = useRef<any>(null);
  const function_yellow_time = useRef<any>(null);
  const function_icon_time = useRef<any>(null);
  const function_path_time = useRef<any>(null);
  const function_title = useRef(null);
  const function_show = useRef<boolean>(false);

  const doc_img = useRef(null);
  const doc_blue = useRef(null);
  const doc_green = useRef(null);
  const doc_yellow = useRef(null);
  const doc_path = useRef(null);
  const doc_img_time = useRef<any>(null);
  const doc_blue_time = useRef<any>(null);
  const doc_green_time = useRef<any>(null);
  const doc_yellow_time = useRef<any>(null);
  const doc_path_time = useRef<any>(null);
  const doc_title = useRef(null);
  const doc_show = useRef<boolean>(false);

  const tool_img = useRef(null);
  const tool_green = useRef(null);
  const tool_img_time = useRef<any>(null);
  const tool_green_time = useRef<any>(null);
  const tool_title = useRef(null);
  const tool_show = useRef<boolean>(false);

  const showAnimation = (
    div: HTMLDivElement,
    className: string,
    animation: string
  ) => {
    if (div.className.indexOf(`animate__animated ${animation}`) > -1) return;
    div.className = `${className} opacity-1 animate__animated ${animation}`;
  };

  const hideAnimation = (div: HTMLDivElement, className: string) => {
    if (div.className.indexOf(`animate__animated animate__fadeOut`) > -1)
      return;
    div.className = className + " opacity-0 animate__animated animate__fadeOut";
  };
  const hideTitleAnimation = (div: HTMLDivElement, className: string) => {
    if (div.className.indexOf(`animate__animated animate__fadeOutDown`) > -1)
      return;
    div.className =
      className + " opacity-0 animate__animated animate__fadeOutDown";
  };

  const efficentShow = () => {
    if (!efficent_title || !efficent_title.current) return;
    if (!efficent_1 || !efficent_1.current) return;

    efficent_1_time.current = setTimeout(() => {
      if (!efficent_title || !efficent_title.current) return;
      const div_title = efficent_title.current as unknown as HTMLDivElement;
      showAnimation(div_title, "kind-opt-body-title", "animate__fadeInDown");
      if (!efficent_1 || !efficent_1.current) return;
      const div = efficent_1.current as unknown as HTMLDivElement;
      showAnimation(div, "efficent-img-1", "animate__backInLeft");
      efficent_show.current = true;
    }, 50);
    efficent_2_time.current = setTimeout(() => {
      if (!efficent_2 || !efficent_2.current) return;
      const div = efficent_2.current as unknown as HTMLDivElement;
      showAnimation(div, "efficent-img-2", "animate__backInDown");
    }, 100);
    efficent_3_time.current = setTimeout(() => {
      if (!efficent_3 || !efficent_3.current) return;
      const div = efficent_3.current as unknown as HTMLDivElement;
      showAnimation(div, "efficent-img-3", "animate__backInUp");
    }, 200);
    efficent_4_time.current = setTimeout(() => {
      if (!efficent_4 || !efficent_4.current) return;
      const div = efficent_4.current as unknown as HTMLDivElement;
      showAnimation(div, "efficent-img-4", "animate__backInRight");
    }, 300);
  };
  const efficentHide = () => {
    clearTimeout(efficent_1_time.current);
    clearTimeout(efficent_2_time.current);
    clearTimeout(efficent_3_time.current);
    clearTimeout(efficent_4_time.current);

    if (!efficent_1 || !efficent_1.current) return;
    const div_1 = efficent_1.current as unknown as HTMLDivElement;
    hideAnimation(div_1, "efficent-img-1");

    if (!efficent_2 || !efficent_2.current) return;
    const div_2 = efficent_2.current as unknown as HTMLDivElement;
    hideAnimation(div_2, "efficent-img-2");

    if (!efficent_3 || !efficent_3.current) return;
    const div_3 = efficent_3.current as unknown as HTMLDivElement;
    hideAnimation(div_3, "efficent-img-3");

    if (!efficent_4 || !efficent_4.current) return;
    const div_4 = efficent_4.current as unknown as HTMLDivElement;
    hideAnimation(div_4, "efficent-img-4");

    if (!efficent_title || !efficent_title.current) return;
    const div_title = efficent_title.current as unknown as HTMLDivElement;
    hideTitleAnimation(div_title, "kind-opt-body-title");

    efficent_show.current = false;
  };
  const functionShow = () => {
    if (!function_title || !function_title.current) return;
    if (!function_img || !function_img.current) return;

    function_img_time.current = setTimeout(() => {
      if (!function_title || !function_title.current) return;
      const div_title = function_title.current as unknown as HTMLDivElement;
      showAnimation(div_title, "kind-opt-body-title", "animate__fadeInDown");
      if (!function_img || !function_img.current) return;
      const div = function_img.current as unknown as HTMLDivElement;
      showAnimation(div, "function-img-function", "animate__zoomIn");
      function_show.current = true;
    }, 50);
    function_blue_time.current = setTimeout(() => {
      if (!function_blue || !function_blue.current) return;
      const div = function_blue.current as unknown as HTMLDivElement;
      showAnimation(div, "function-img-blue", "animate__zoomIn");
    }, 200);
    function_green_time.current = setTimeout(() => {
      if (!function_green || !function_green.current) return;
      const div = function_green.current as unknown as HTMLDivElement;
      showAnimation(div, "function-img-green", "animate__zoomIn");
    }, 300);
    function_yellow_time.current = setTimeout(() => {
      if (!function_yellow || !function_yellow.current) return;
      const div = function_yellow.current as unknown as HTMLDivElement;
      showAnimation(div, "function-img-yellow", "animate__zoomIn");
    }, 400);
    function_icon_time.current = setTimeout(() => {
      if (!function_icon || !function_icon.current) return;
      const div = function_icon.current as unknown as HTMLDivElement;
      showAnimation(div, "function-img-icon", "animate__zoomIn");
    }, 500);
    function_path_time.current = setTimeout(() => {
      if (!function_path || !function_path.current) return;
      const div = function_path.current as unknown as HTMLDivElement;
      showAnimation(div, "function-img-path", "animate__zoomIn");
    }, 700);
  };
  const functionHide = () => {
    clearTimeout(function_img_time.current);
    clearTimeout(function_blue_time.current);
    clearTimeout(function_green_time.current);
    clearTimeout(function_yellow_time.current);
    clearTimeout(function_icon_time.current);
    clearTimeout(function_path_time.current);

    if (!function_img || !function_img.current) return;
    const div_img = function_img.current as unknown as HTMLDivElement;
    hideAnimation(div_img, "function-img-function");

    if (!function_blue || !function_blue.current) return;
    const div_blue = function_blue.current as unknown as HTMLDivElement;
    hideAnimation(div_blue, "function-img-blue");

    if (!function_green || !function_green.current) return;
    const div_green = function_green.current as unknown as HTMLDivElement;
    hideAnimation(div_green, "function-img-green");

    if (!function_yellow || !function_yellow.current) return;
    const div_yellow = function_yellow.current as unknown as HTMLDivElement;
    hideAnimation(div_yellow, "function-img-yellow");

    if (!function_icon || !function_icon.current) return;
    const div_icon = function_icon.current as unknown as HTMLDivElement;
    hideAnimation(div_icon, "function-img-icon");

    if (!function_path || !function_path.current) return;
    const div_path = function_path.current as unknown as HTMLDivElement;
    hideAnimation(div_path, "function-img-path");

    if (!function_title || !function_title.current) return;
    const div_title = function_title.current as unknown as HTMLDivElement;
    hideTitleAnimation(div_title, "kind-opt-body-title");

    function_show.current = false;
  };
  const docShow = () => {
    if (!doc_title || !doc_title.current) return;
    if (!doc_img || !doc_img.current) return;

    doc_img_time.current = setTimeout(() => {
      if (!doc_title || !doc_title.current) return;
      const div_title = doc_title.current as unknown as HTMLDivElement;
      showAnimation(div_title, "kind-opt-body-title", "animate__fadeInDown");
      if (!doc_img || !doc_img.current) return;
      const div = doc_img.current as unknown as HTMLDivElement;
      showAnimation(div, "doc-img-doc", "animate__zoomIn");
      doc_show.current = true;
    }, 50);
    doc_blue_time.current = setTimeout(() => {
      if (!doc_blue || !doc_blue.current) return;
      const div = doc_blue.current as unknown as HTMLDivElement;
      showAnimation(div, "doc-img-blue", "animate__zoomIn");
    }, 200);
    doc_green_time.current = setTimeout(() => {
      if (!doc_green || !doc_green.current) return;
      const div = doc_green.current as unknown as HTMLDivElement;
      showAnimation(div, "doc-img-green", "animate__zoomIn");
    }, 350);
    doc_yellow_time.current = setTimeout(() => {
      if (!doc_yellow || !doc_yellow.current) return;
      const div = doc_yellow.current as unknown as HTMLDivElement;
      showAnimation(div, "doc-img-yellow", "animate__zoomIn");
    }, 500);
    doc_path_time.current = setTimeout(() => {
      if (!doc_path || !doc_path.current) return;
      const div = doc_path.current as unknown as HTMLDivElement;
      showAnimation(div, "doc-img-path", "animate__zoomIn");
    }, 700);
  };
  const docHide = () => {
    clearTimeout(doc_img_time.current);
    clearTimeout(doc_blue_time.current);
    clearTimeout(doc_green_time.current);
    clearTimeout(doc_yellow_time.current);
    clearTimeout(doc_path_time.current);

    if (!doc_img || !doc_img.current) return;
    const div_img = doc_img.current as unknown as HTMLDivElement;
    hideAnimation(div_img, "doc-img-doc");

    if (!doc_blue || !doc_blue.current) return;
    const div_blue = doc_blue.current as unknown as HTMLDivElement;
    hideAnimation(div_blue, "doc-img-blue");

    if (!doc_green || !doc_green.current) return;
    const div_green = doc_green.current as unknown as HTMLDivElement;
    hideAnimation(div_green, "doc-img-green ");

    if (!doc_yellow || !doc_yellow.current) return;
    const div_yellow = doc_yellow.current as unknown as HTMLDivElement;
    hideAnimation(div_yellow, "doc-img-yellow");

    if (!doc_path || !doc_path.current) return;
    const div_path = doc_path.current as unknown as HTMLDivElement;
    hideAnimation(div_path, "doc-img-path");

    if (!doc_title || !doc_title.current) return;
    const div_title = doc_title.current as unknown as HTMLDivElement;
    hideTitleAnimation(div_title, "kind-opt-body-title");

    doc_show.current = false;
  };
  const toolShow = () => {
    if (!tool_title || !tool_title.current) return;
    if (!tool_img || !tool_img.current) return;

    tool_img_time.current = setTimeout(() => {
      if (!tool_title || !tool_title.current) return;
      const div_title = tool_title.current as unknown as HTMLDivElement;
      showAnimation(div_title, "kind-opt-body-title", "animate__fadeInDown");
      if (!tool_img || !tool_img.current) return;
      const div = tool_img.current as unknown as HTMLDivElement;
      showAnimation(div, "tool-img-tool", "animate__zoomIn");
      tool_show.current = true;
    }, 50);
    tool_green_time.current = setTimeout(() => {
      if (!tool_green || !tool_green.current) return;
      const div = tool_green.current as unknown as HTMLDivElement;
      showAnimation(div, "tool-img-green", "animate__zoomIn");
    }, 200);
  };
  const toolHide = () => {
    clearTimeout(tool_img_time.current);
    clearTimeout(tool_green_time.current);

    if (!tool_img || !tool_img.current) return;
    const div_img = tool_img.current as unknown as HTMLDivElement;
    hideAnimation(div_img, "tool-img-tool");

    if (!tool_green || !tool_green.current) return;
    const div_green = tool_green.current as unknown as HTMLDivElement;
    hideAnimation(div_green, "tool-img-green");

    if (!tool_title || !tool_title.current) return;
    const div_title = tool_title.current as unknown as HTMLDivElement;
    hideTitleAnimation(div_title, "kind-opt-body-title");

    tool_show.current = false;
  };

  useEffect(() => {
    if (currentRatio !== 100) {
      // 网页比例被缩放
      switch (name) {
        case "高效":
          return efficentShow();
        case "函数级调用":
          return functionShow();
        case "自动补全":
          return docShow();
        case "高阶工具":
          return toolShow();
        default:
          break;
      }
    } else {
      if (name === "高效") {
        if (isScrollUp) {
          if (rate <= 0.85 && rate >= 0.05 && isRange && !efficent_show.current)
            efficentShow();
          if ((rate < 0.05 && isRange) || !isRange) efficentHide();
        } else {
          if (rate >= 0.05 && rate <= 0.85 && isRange && !efficent_show.current)
            efficentShow();
          if (rate > 0.85 && isRange) efficentHide();
        }
      }
      if (name === "函数级调用") {
        if (isScrollUp) {
          if (rate <= 0.85 && rate >= 0.05 && isRange && !function_show.current)
            functionShow();
          if (rate < 0.05 && isRange) functionHide();
        } else {
          if (rate >= 0.05 && rate <= 0.85 && isRange && !function_show.current)
            functionShow();
          if (rate > 0.85 && isRange) functionHide();
        }
      }
      if (name === "自动补全") {
        if (isScrollUp) {
          if (rate <= 0.85 && rate >= 0.05 && isRange && !doc_show.current)
            docShow();
          if (rate < 0.05 && isRange) docHide();
        } else {
          if (rate >= 0.05 && rate <= 0.85 && isRange && !doc_show.current)
            docShow();
          if (rate > 0.85 && isRange) docHide();
        }
      }
      if (name === "高阶工具") {
        if (isScrollUp) {
          if (rate <= 0.85 && rate >= 0.05 && isRange && !tool_show.current)
            toolShow();
          if (rate < 0.05 && isRange) toolHide();
        } else {
          if (rate >= 0.05 && rate <= 0.85 && isRange && !tool_show.current)
            toolShow();
          if ((rate > 0.85 && isRange) || !isRange) toolHide();
        }
      }
    }
  }, [name, rate, isRange, isScrollUp, currentRatio]);

  if (name === "高效") {
    return (
      <div className="kind-opt-body">
        <div className="efficent-img">
          <div className="efficent-img-body">
            <div ref={efficent_1} className="efficent-img-1 opacity-0">
              <div className="efficent-img-content">
                <div className="efficent-img-content-title">Golang</div>
                <div className="efficent-img-content-text">
                  Go {t("是谷歌支持的开源编程语言")}
                </div>
              </div>
            </div>

            <div ref={efficent_2} className="efficent-img-2 opacity-0">
              <div className="efficent-img-content">
                <div className="efficent-img-content-title">Yaklang</div>
                <div className="efficent-img-content-text">
                  {t("可能是安全领域最先进的 DSL")} (Domain-Specific Language)
                </div>
                <img
                  src={
                    require("../../static/img/home/second/efficent-1-2.png")
                      .default
                  }
                  className="efficent-1-2"
                />
              </div>
            </div>
            <div ref={efficent_3} className="efficent-img-3 opacity-0">
              <div className="efficent-img-content">
                <div className="efficent-img-content-title">JVM Based Lang</div>
                <div className="efficent-img-content-text">
                  {t("一个高质量的Java 生态教学网站")}
                </div>
                <img
                  src={
                    require("../../static/img/home/second/efficent-2-3.png")
                      .default
                  }
                  className="efficent-2-3"
                />
              </div>
            </div>
            <div ref={efficent_4} className="efficent-img-4 opacity-0">
              <div className="efficent-img-content">
                <div className="efficent-img-content-title">Python</div>
                <div className="efficent-img-content-text">
                  Life is short, use Python.
                </div>
                <img
                  src={
                    require("../../static/img/home/second/efficent-3-4.png")
                      .default
                  }
                  className="efficent-3-4"
                />
              </div>
            </div>
          </div>
          <div className="img-body-filter-bg-blue"></div>
          <div className="img-body-filter-bg-green"></div>
        </div>

        <div className="kind-opt-body-title opacity-0" ref={efficent_title}>
          <div className="kind-opt-body-title-content">
            <span>{t("运行效率极高")}</span>
            <br />
            <span className="content-orange">Runtime Efficent</span>
          </div>
          <div className="kind-opt-body-title-subtitle">{`Golang ≈ Yaklang ≥ JVM Based Lang >> Python`}</div>
        </div>
      </div>
    );
  }

  if (name === "函数级调用") {
    return (
      <div className="kind-opt-body">
        <div className="function-img">
          <div className="function-img-body">
            <img
              ref={function_img}
              src={require("../../static/img/home/second/function.png").default}
              className="function-img-function opacity-0"
            />
            <img
              ref={function_blue}
              src={
                require("../../static/img/home/second/function-blue.png")
                  .default
              }
              className="function-img-blue opacity-0"
            />
            <img
              ref={function_green}
              src={
                require("../../static/img/home/second/function-green.png")
                  .default
              }
              className="function-img-green opacity-0"
            />
            <img
              ref={function_yellow}
              src={
                require("../../static/img/home/second/function-yellow.png")
                  .default
              }
              className="function-img-yellow opacity-0"
            />
            <img
              ref={function_icon}
              src={
                require("../../static/img/home/second/function-icon.png")
                  .default
              }
              className="function-img-icon opacity-0"
            />
            <img
              ref={function_path}
              src={
                require("../../static/img/home/second/function-path.png")
                  .default
              }
              className="function-img-path opacity-0"
            />
          </div>
          <div className="img-body-filter-bg-blue"></div>
          <div className="img-body-filter-bg-green"></div>
        </div>

        <div className="kind-opt-body-title opacity-0" ref={function_title}>
          <div
            className="kind-opt-body-title-content"
            dangerouslySetInnerHTML={{
              __html: t("安全领域的语言集成与函数级调用", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></div>
          <div className="kind-opt-body-title-subtitle">
            {t("使用函数级别的安全能力实现满足特定场景的定制化安全算法")}
          </div>
        </div>
      </div>
    );
  }

  if (name === "自动补全") {
    return (
      <div className="kind-opt-body">
        <div className="doc-img">
          <div className="doc-img-body">
            <img
              ref={doc_img}
              src={require("../../static/img/home/second/doc.png").default}
              className="doc-img-doc opacity-0"
            />
            <img
              ref={doc_blue}
              src={require("../../static/img/home/second/doc-blue.png").default}
              className="doc-img-blue opacity-0"
            />
            <img
              ref={doc_green}
              src={
                require("../../static/img/home/second/doc-green.png").default
              }
              className="doc-img-green opacity-0"
            />
            <img
              ref={doc_yellow}
              src={
                require("../../static/img/home/second/doc-yellow.png").default
              }
              className="doc-img-yellow opacity-0"
            />
            <img
              ref={doc_path}
              src={require("../../static/img/home/second/doc-path.png").default}
              className="doc-img-path opacity-0"
            />
          </div>
          <div className="img-body-filter-bg-blue"></div>
          <div className="img-body-filter-bg-green"></div>
        </div>

        <div className="kind-opt-body-title opacity-0" ref={doc_title}>
          <div
            className="kind-opt-body-title-content"
            dangerouslySetInnerHTML={{
              __html: t("自动补全与完善的教程文档为编写助力", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></div>
          <div className="kind-opt-body-title-subtitle">
            <span>
              <span className="subtitle-doc">/</span>{" "}
              {t("与 vscode 兼容的自动补全插件，辅助用户快速上手")}
            </span>
            <br />
            <span>
              <span className="subtitle-doc">/</span>{" "}
              {t("完善的教程文档提供全面指导")}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (name === "高阶工具") {
    return (
      <div className="kind-opt-body">
        <div className="tool-img">
          <div className="tool-img-body">
            <img
              ref={tool_img}
              src={require("../../static/img/home/second/tool.png").default}
              className="tool-img-tool opacity-0"
            />
            <img
              ref={tool_green}
              src={
                require("../../static/img/home/second/tool-green.png").default
              }
              className="tool-img-green opacity-0"
            />
          </div>
          <div className="img-body-filter-bg-blue"></div>
          <div className="img-body-filter-bg-green"></div>
        </div>

        <div className="kind-opt-body-title opacity-0" ref={tool_title}>
          <div
            className="kind-opt-body-title-content"
            dangerouslySetInnerHTML={{
              __html: t("高阶函数级集成", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></div>
          <div className="kind-opt-body-title-subtitle">
            <span>
              <span className="subtitle-doc">/ </span>
              {t("多协议、反连平台集成")}：
            </span>
            <br />
            <span className="subtitle-tool">
              &nbsp;&nbsp;{t("HTTP / RMI / LDAP 多协议复用")}
            </span>
            <br />
            <span className="subtitle-tool">
              &nbsp;&nbsp;
              {t("TCP 随机端口(专利技术) / ICMP 反连 / 内置 DNSLog API")}
            </span>
            <br />
            <span>
              <span className="subtitle-doc">/ </span>
              {t("MITM 劫持平台集成与热加载结合(专利技术)")}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
};

interface functionModuleProps {
  info: FunctionDataProps;
  isReversal: boolean;
  index: number;
  kind: number;
  rate: number;
  isRange: boolean;
  isScrollUp: boolean;
  currentRatio: number;
}
const FunctionModule = React.memo((props: functionModuleProps) => {
  const { t } = useTranslation();
  const {
    info: { title, img, list },
    isReversal,
    index: moduleIndex,
    kind,
    rate,
    isRange,
    isScrollUp,
    currentRatio,
  } = props;

  const [index, setIndex] = useState<number>(0);

  const imgRef = useRef(null);
  const listRef = useRef(null);
  const img_count = useRef<number>(0);

  const imgStrShow = useMemo<string>(() => {
    return `module-img opacity-1 animate__animated ${
      isReversal ? "animate__fadeInRight" : "animate__fadeInLeft"
    }`;
  }, [isReversal]);
  const listStrShow = useMemo<string>(() => {
    return `module-list opacity-1 animate__animated ${
      isReversal ? "animate__fadeInLeft" : "animate__fadeInRight"
    }`;
  }, [isReversal]);

  const showAnimation = () => {
    if (!imgRef || !imgRef.current) return;
    const div_img = imgRef.current as unknown as HTMLDivElement;
    if (!listRef || !listRef.current) return;
    const div_list = listRef.current as unknown as HTMLDivElement;

    if (
      div_img.className.indexOf(imgStrShow) > -1 ||
      div_list.className.indexOf(listStrShow) > -1
    )
      return;
    div_img.className = imgStrShow;
    div_list.className = listStrShow;
  };

  const hideAnimation = () => {
    if (!imgRef || !imgRef.current) return;
    const div_img = imgRef.current as unknown as HTMLDivElement;
    if (!listRef || !listRef.current) return;
    const div_list = listRef.current as unknown as HTMLDivElement;

    const imgStr = `animate__animated ${
      isReversal ? "animate__fadeOutRight" : "animate__fadeOutLeft"
    }`;
    const listStr = `animate__animated ${
      isReversal ? "animate__fadeOutLeft" : "animate__fadeOutRight"
    }`;

    if (
      div_img.className.indexOf(imgStr) > -1 ||
      div_list.className.indexOf(listStr) > -1
    )
      return;
    div_img.className = `module-img opacity-0 ${imgStr}`;
    div_list.className = `module-list opacity-0 ${listStr}`;
  };

  useEffect(() => {
    if (kind !== moduleIndex) return;
    if (currentRatio !== 100) {
      showAnimation();
    } else {
      if (isScrollUp) {
        if (rate <= 0.85 && rate > 0.1 && isRange && img_count.current === 0) {
          img_count.current = 1;
          showAnimation();
        }
        //   if ((rate <= 0.1 && isRange) || !isRange) {
        //     img_count.current = 0;
        //     hideAnimation();
        //   }
      } else {
        if (rate >= 0.1 && rate < 0.85 && isRange && img_count.current === 0) {
          img_count.current = 1;
          showAnimation();
        }
        //   if ((rate >= 0.85 && isRange) || !isRange) {
        //     img_count.current = 0;
        //     hideAnimation();
        //   }
      }
    }
  }, [kind, rate, isRange, isScrollUp, currentRatio]);
  return (
    <div className="function-module-body">
      {!isReversal ? (
        <div
          className={`module-img ${
            (currentRatio === 100 && "opacity-0") || imgStrShow
          }`}
          ref={imgRef}
        >
          <img src={img[index]} className="module-img-style" />
        </div>
      ) : (
        <div
          className={`module-list ${
            (currentRatio === 100 && "opacity-0") || listStrShow
          }`}
          ref={listRef}
        >
          <div className="module-list-header">{t(title)}</div>

          <div className="module-list-body">
            {list.map((item, i) => {
              if (i === index) {
                return (
                  <div key={i} className="module-list-body-opt-selected">
                    <div className="selected-title">{t(item.name)}</div>
                    <a
                      className="selected-doc-icon"
                      href={item.link}
                      target="_blank"
                    >
                      <ArrowRightOutlined className="icon-style" />
                      <div className="icon-title">{t("查看文档")}</div>
                    </a>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className="module-list-body-opt"
                  onMouseEnter={() => setIndex(i)}
                >
                  {t(item.name)}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {isReversal ? (
        <div
          className={`module-img ${
            (currentRatio === 100 && "opacity-0") || imgStrShow
          }`}
          ref={imgRef}
        >
          <img src={img[index]} className="module-img-style" />
        </div>
      ) : (
        <div
          className={`module-list ${
            (currentRatio === 100 && "opacity-0") || listStrShow
          }`}
          ref={listRef}
        >
          <div className="module-list-header">{t(title)}</div>

          <div className="module-list-body">
            {list.map((item, i) => {
              if (i === index) {
                return (
                  <div key={i} className="module-list-body-opt-selected">
                    <div className="selected-title">{t(item.name)}</div>
                    <a
                      className="selected-doc-icon"
                      href={item.link}
                      target="_blank"
                    >
                      <ArrowRightOutlined className="icon-style" />
                      <div className="icon-title">{t("查看文档")}</div>
                    </a>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className="module-list-body-opt"
                  onMouseEnter={() => setIndex(i)}
                >
                  {t(item.name)}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});

interface AppraiseInfoProps {
  name: string;
  img: string;
  appraise: React.ReactNode;
}
const AppraiseInfoList: AppraiseInfoProps[] = [
  {
    name: "ykc",
    img: require("../../static/img/team/ykc.jpg").default,
    appraise: (
      <>
        安全问题没有绝对的解决范式，但
        <span className="appraise-content-key-point">
          Yak创造了足够的可能性
        </span>
        ，让我们可以
        <span className="appraise-content-key-point">
          在巨人的肩膀上发挥想象力
        </span>
        。其构思的视野和高度值得我们学习与思考。
      </>
    ),
  },
  {
    name: "kio",
    img: require("../../static/img/home/kio.jpeg").default,
    appraise: (
      <>
        Yakit在我心中是一款能够自己改造的安全测试框架，非常适合有一定动手能力的安全从业者利用它去
        <span className="appraise-content-key-point">打造属于自己的利刃</span>。
      </>
    ),
  },
  {
    name: "和你",
    img: require("../../static/img/home/和你.jpeg").default,
    appraise: (
      <>
        Yak这个构思能大量
        <span className="appraise-content-key-point">
          减轻安全从业者的环境配置的负担
        </span>
        ，而且各种插件对于渗透测试工作能够做到很大的优化。祝Yak在国产化安全软件中越做越好。
      </>
    ),
  },
  {
    name: "P0m32Kun",
    img: require("../../static/img/home/P0m32Kun.jpeg").default,
    appraise: (
      <>
        初次接触Yak是在2021年低，那时群里还没有多少人，伴随着开发者们的努力，不断的收集、整理、添加、修改用户提出的各种问题与需求，官网中各种文档逐步完善，Yakit用起来也越来越顺手，渐渐感受到了这是个
        <span className="appraise-content-key-point">有温度的团队</span>
        。<br />
        我开始认为Yakit出现的部分原因是摆脱安全人员使用国外破解软件，但给我印象最深的还是在今年一些紧张的国际形势中。那么多公司带着他们的产品纷纷站队，如果不未雨绸缪，未来的某一天我们会面临相同的境遇。最后
        <span className="appraise-content-key-point">
          希望Yak一如既往的茁壮成长
        </span>
        ，也希望更多的安全从业者
        <span className="appraise-content-key-point">加入国产化的建设中</span>。
      </>
    ),
  },
  {
    name: "18 Xtreme",
    img: require("../../static/img/home/18Xtreme.jpeg").default,
    appraise: (
      <>
        首先不得不提一句，Yakit的作者们是
        <span className="appraise-content-key-point">真的热情又尽责</span>
        ，有啥问题都能得到解答，特别是V神，与他沟通中学到了很多的东西，其次Yakit的模式真的很不错，服务端和控制台分开让小组渗透更方便，最后
        <span className="appraise-content-key-point">祝Yakit越来越好</span>
        ，成为全球最强工具 ！
      </>
    ),
  },
  {
    name: "国产大熊猫",
    img: require("../../static/img/team/国产大熊猫.jpeg").default,
    appraise: (
      <>
        Yakit是一款优秀的
        <span className="appraise-content-key-point">国产web渗透工具</span>
        ，从设计之初就让人爱不释手。作为一名发烧使用者，我可以在每一个使用细节充分的感受到：开发团队对于打造一款贴近渗透人员使用舒适度的匠人精神。从web渗透的前期探测、fuzz参数、poc验证等等，yakit就
        <span className="appraise-content-key-point">像一位战友陪伴在身边</span>
        。
        <br />
        Yakit社区活跃，开发团队充分听取各方面建议，不断的迭代产品，我相信会成为web渗透领域人手一份的攻击利器！
      </>
    ),
  },
  {
    name: "CF_HB",
    img: require("../../static/img/home/CF_HB.jpeg").default,
    appraise: (
      <>
        2022了给大家强烈安利一个
        <span className="appraise-content-key-point">
          令我爱不释手的挖洞神器
        </span>
        ——Yakit。维护的师傅们人又好，技术又强，孜孜不倦地打造新的功能。
        <br />
        Yakit绝对是一个只有你想不到，没有它实现不了的神器。希望Yakit早日替代Burp，这一回我
        <span className="appraise-content-key-point">支持国产神器</span>
        ~Yakit
      </>
    ),
  },
  {
    name: "wooluo",
    img: require("../../static/img/home/wooluo.jpeg").default,
    appraise: (
      <>
        产品设计初衷非常好，作为
        <span className="appraise-content-key-point">
          国产渗透中单兵作业工具
        </span>
        ，把一些实用的插件加到平台中，并且对使用者开放接口，随时可以增加自己所需的插件或规则，同时贴心的兼容了nuclei的规则，是个不可多得的好工具，
        <span className="appraise-content-key-point">
          代替BurpSuite的不二首选
        </span>
        ，推荐使用！
      </>
    ),
  },
  {
    name: "Vanilla",
    img: require("../../static/img/team/Vanilla.jpeg").default,
    appraise: (
      <>
        和V1ll4n表哥相识是因为他早期开发的SIEM，将各种安全能力进行融合，作为一名甲方安全从业者，但是对于他提出的高位安全和低位安全的概念很赞同，后来Yakit横空出世，让我看到了之前SIEM概念的延伸，看到了
        <span className="appraise-content-key-point">更多的可能性</span>
        。通过Yak语言完备的生态和兼容性来解决安全能力建设的问题。随着Yakit安全社区的壮大和更多的同行者参与进来，使得Yakit的功能越来越完善，在我看来
        <span className="appraise-content-key-point">
          Yakit是一个没有上限的安全工具
        </span>
        ，他提供了一个基座，给了安全从业人员
        <span className="appraise-content-key-point">自由发挥的空间</span>
        。最后的最后，V1ll4n这人改Bug贼快，能处。
      </>
    ),
  },
  {
    name: "ttStorm",
    img: require("../../static/img/home/ttStorm.jpeg").default,
    appraise: (
      <>
        选择Yakit的3个理由
        <br />
        1.Yakit颜值超高，简洁的logo，
        <span className="appraise-content-key-point">简洁的界面</span>
        ，完美本身就是强大的证明
        <br />
        2.劳模V神还有一众Yakit大佬还有社区大表哥们，
        <span className="appraise-content-key-point">高强度更新</span>
        ，1天更新18个版本，任何人手里都没有最新版本，Yakit短时间就从烟花成长为一个丰富完善致命的核武器
        <br />
        3.Yak团队是一个友善、富有活力、
        <span className="appraise-content-key-point">具有高度执行力</span>
        的团队，你可以一直相信Yak
        <br />
      </>
    ),
  },
  {
    name: "酒零",
    img: require("../../static/img/home/酒零.jpeg").default,
    appraise: (
      <>
        渗透工具的底层数据融合是安全工具发展的必然趋势，测试工具
        <span className="appraise-content-key-point">可定制化和扩展性</span>
        是每一个高级渗透工程师的基本需求，优秀的界面交互让一个工具能够快速广泛运用的催化剂。对于实现一个
        <span className="appraise-content-key-point">
          覆盖渗透测试全流程工具
        </span>
        ，需要全面了解分析渗透测试过程中的各个阶段。
        然而，这是一个及其庞大且长期的项目，它们需要：
        <br />
        1、熟悉渗透测试流程和交互设计的coder
        <br />
        2、能无条件支持这个项目的company，
        <br />
        3、时刻响应用户需求和建议的Operation
        <br />
        Yaikit项目正是基于这个目的而萌发的，并且拥有着实现这个长期项目的条件，希望大家能够使用它并提出自己的修复和优化建议，
        <span className="appraise-content-key-point">
          让这个项目更完善更优秀
        </span>
        。
      </>
    ),
  },
  {
    name: "key@OverSpace",
    img: require("../../static/img/home/key@OverSpace.jpeg").default,
    appraise: (
      <>
        对于我来说，Yak是一门优秀的融合型语言，它具备极强的安全开发属性，你可以使用它进行高效的安全类脚本、平台、工具的开发；Yak项目方不仅开发了Yak这一门优秀的语言，还很贴心的基于Yak开发了Yakit单兵作战平台提供给安全从业人员使用；Yakit的诞生实际上是
        <span className="appraise-content-key-point">
          完成了某种意义上的“大一统”
        </span>
        ，将诸多能力集于一身，避免了在不同的工具间来回的切换以及相互间的兼容和适配，虽然它并不是BurpSuite的竞品，但它与BurpSuite有着诸多类似功能，却比BurpSuite更加实用，例如Web
        Fuzz功能就做了很好的创新，将真正的Fuzz思想带到了Web安全中，也从某一程度来说减少了很多不必要的字典收集工作。
        <br />
        Yak项目方做了一个很大胆的尝试，这是很多人不敢做的，并且会花费大量的人力投入，这让我十分倾佩，同时也给予我很大的鼓舞。相信Yak、Yakit
        <span className="appraise-content-key-point">
          在未来可以走出属于自己的道路
        </span>
        ，加油，未来可期！
      </>
    ),
  },
  {
    name: "奶权",
    img: require("../../static/img/team/naiquan.jpeg").default,
    appraise: (
      <>
        Yakit是一款非常好用的网络单兵作战工具，其包含了burpsuite使用最频繁的功能，并在此之上做了自己的创新。其中Web
        Fuzzer标签功能
        <span className="appraise-content-key-point">
          极大提高了渗透测试人员的上限
        </span>
        ，使得在渗透测试过程中有更多可能也更加方便。得益于Yakit的基座yaklang的强大实力与和golang相似的语法，用户可以用更简单的代码对mitm进行hook，
        <span className="appraise-content-key-point">
          实现多种多样的插件功能
        </span>
        。
      </>
    ),
  },
  {
    name: "sharecast",
    img: require("../../static/img/home/sharecast.jpeg").default,
    appraise: (
      <>
        Yakit是一款年轻的综合的且具有
        <span className="appraise-content-key-point">
          一线攻防实践经验的平台
        </span>
        ，将出色的攻击实践经验工程化，为一线的攻防人员提供了很大便利，但UI和细节打磨仍需不断提升，希望Yakit越来越好！
      </>
    ),
  },
  {
    name: "影舞者",
    img: require("../../static/img/home/影舞者.jpeg").default,
    appraise: (
      <>
        扫描接口很
        <span className="appraise-content-key-point">便捷</span>，内置的
        <span className="appraise-content-key-point">动态解析Yak脚本</span>
        也很高级，大哥真猛
      </>
    ),
  },
  {
    name: "TimWhite",
    img: require("../../static/img/team/timwhite.png").default,
    appraise: (
      <>
        对于Yakit/Yak这个项目，早期我更多的是好奇Yak这个安全脚本语言的具体实现方式，
        <br />
        但是在使用过程中发现，
        <span className="appraise-content-key-point">
          插件化的设计，Yak内置的安全相关函数配合上Yakit的gui
        </span>
        ，三者相结合是这个项目的亮点。
        <br />
        由于项目发展时间较短，难免存在设计上的bug，但是作者V1ll4n的更新频率高的可怕。
      </>
    ),
  },
  {
    name: "Alex-null",
    img: require("../../static/img/team/Alex-null.jpeg").default,
    appraise: (
      <>
        Yak是目前看到的
        <span className="appraise-content-key-point">
          国内最优秀的安全能力底座
        </span>
        ，花了很多心思在
        <span className="appraise-content-key-point">多源数据异构化</span>
        上，让安全从业人员能真正专注于解决安全问题上。
      </>
    ),
  },
  {
    name: "六月初七",
    img: require("../../static/img/home/六月初七.jpeg").default,
    appraise: (
      <>
        总体来说，很喜欢这款工具，可扫描端口，可探测漏洞，还能爆破口令，
        <span className="appraise-content-key-point">集成了多种功能</span>
        ，使用方便，大大提高了工作效率。Yakit不对标burp，但是具备了burp的好多功能，
        <span className="appraise-content-key-point">
          将常用的渗透测试的功能
        </span>
        集合到一起，一站购齐。师傅们也可以利用Yakit的部分自定义功能打造自己专属的渗透利器。
        <br />
        Yakit做了好多人不敢做的事，也
        <span className="appraise-content-key-point">
          希望Yakit能做到别人做不到事
        </span>
        。
      </>
    ),
  },
  {
    name: "小米粥",
    img: require("../../static/img/home/小米粥.jpeg").default,
    appraise: (
      <>
        在我眼里Yak的意义是远远大于Yakit的，Yakit只不过是Yak对于
        <span className="appraise-content-key-point">
          安全所需场景的功能实现合集
        </span>
        而已，从Yakit的开源一直到现在不断的实现更多的安全需求场景的覆盖，能让我清楚地感觉到Yak确实像当初介绍文档中所说的一直再向安全人员们证明
        <span className="appraise-content-key-point">
          Yak确实是安全领域内最适用的语言
        </span>
        ，也一直让人们期待他真的是可以
        <span className="appraise-content-key-point">成为安全的"基座"</span>
        ，Yakit目前对我来说最惊艳的其实是反连平台的场景扩展，期间也一直在和v神聊关于oast检测模型更多的扩展面，自己当前也有实现并尝试去做一款类似功能产品。在自己项目实现过程当中也会感觉Yakit关于反连这部分的发展方向与自己所做的是在不断地相互验证，也能体会到做一款让自己和别人都满意的产品是一件多么困难的事情，总的来说，我很
        <span className="appraise-content-key-point">
          期待也很希望Yak未来在安全领域能有更多的安全需求场景的覆盖的实现
        </span>
        。
      </>
    ),
  },
  {
    name: "李大壮'",
    img: require("../../static/img/home/李大壮.jpeg").default,
    appraise: (
      <>
        初次接触Yak就被Yak团队的愿景打动了。作为一门安全领域的脚本语言。Yak
        <span className="appraise-content-key-point">集成了常见的安全能力</span>
        ，前段时间测试了一个测试流程，稍加学习，便按照自己的想法快速设计出一套检测流程。作为官方实现的
        Yakit
        提供了很多实用的工具如mitm,codec专项漏洞检测。Yakit目前还处于快速开发状态，微信社区相当活跃
        <span className="appraise-content-key-point">
          许多有趣的技术和想法也在落地
        </span>
        ，官方对于bug修复和功能迭代特别快特别快。由衷祝愿 Yak
        生态和社区越来越强大，
        <span className="appraise-content-key-point">成为安全领域的matlab</span>
        。
      </>
    ),
  },
];

interface AppraiseCardProps {
  info: AppraiseInfoProps;
  isSelected: boolean;
}
const AppraiseCard = React.memo((props: AppraiseCardProps) => {
  const {
    info: { name, img },
    isSelected,
  } = props;

  return (
    <div
      className={`appraise-card ${isSelected ? "appraise-card-selected" : ""}`}
    >
      <img src={img} className="appraise-card-img" />
      <div className="appraise-card-name">{name}</div>
    </div>
  );
});

const AppraiseInfoBody = React.memo(() => {
  const [info, setInfo] = useState<AppraiseInfoProps>({
    name: "ykc",
    img: require("../../static/img/team/ykc.jpg").default,
    appraise:
      "安全问题没有绝对的解决范式，但yak创造了足够的可能性，让我们可以在巨人的肩膀上发挥想象力。其构思的视野和高度值得我们学习与思考。",
  });

  const [swiper, setSwiper] = useState<any>(null);
  const isContent = useRef<boolean>(false);

  // 判断展示评语高度是否溢出
  const [flag, setFlag] = useState<boolean>(false);
  const divRef = useRef(null);

  const jump = useCallback(
    (index: number) => {
      swiper.slideToLoop(index === 0 ? 20 - 1 : index - 1, 1000);
    },
    [swiper]
  );

  return (
    <div className="appraise-info-body">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: false,
        }}
        onSlideChange={(swiper) => {
          setSwiper(swiper);
          if (info.name === AppraiseInfoList[swiper.realIndex].name) return;
          setInfo(AppraiseInfoList[swiper.realIndex]);
          setTimeout(() => {
            if (!divRef || !divRef.current) return;
            const div = divRef.current as unknown as HTMLDivElement;
            setFlag(div.offsetHeight < div.scrollHeight);
          }, 100);
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {AppraiseInfoList.map((item, index) => {
          return (
            <SwiperSlide key={item.name} onClick={() => jump(index)}>
              <AppraiseCard info={item} isSelected={info.name === item.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="appraise-content">
        <div
          className="appraise-content-body"
          onMouseEnter={() => {
            isContent.current = true;
            swiper.autoplay.stop();
          }}
          onMouseLeave={() => {
            isContent.current = false;
            swiper.autoplay.start();
          }}
        >
          <div className="appraise-content-body-header">{info.name}</div>
          <div className="appraise-content-body-comments">
            <div className="comments-div-style">
              <div ref={divRef} className="comments-style">
                {info.appraise}
              </div>
              {flag && (
                <Popover
                  overlayClassName="popover-appraise-comments"
                  placement="top"
                  content={
                    <div className="appraise-comments">{info.appraise}</div>
                  }
                >
                  <div className="comments-ellipsis">...</div>
                </Popover>
              )}
            </div>
            <img
              src={require("../../static/img/home/comma-1.png").default}
              className="comments-up-style"
            />
            <img
              src={require("../../static/img/home/comma-2.png").default}
              className="comments-down-style"
            />
          </div>
        </div>
      </div>

      <div className="propagate-video">
        {/* @ts-ignore */}
        <ReactPlayer
          url={require("../../static/img/home/video.mp4").default}
          loop={true}
          playsinline={true}
          controls={false}
          playing={true}
          volume={0}
          width={"100%"}
          height={"100%"}
          style={{ display: "flex" }}
        />
      </div>
    </div>
  );
});
