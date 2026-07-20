"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  PackageCheck,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const outputList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const outputLine: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

type ProductKey = "Yakit" | "Yaklang" | "IRify" | "Memfit";
type PlatformId = "macos" | "windows" | "linux" | "web" | "releases";

type DownloadAsset = {
  label: string;
  file: string;
};

type PlatformSpec = {
  id: PlatformId;
  label: string;
  prompt: string;
  output: string[];
  result: string;
  command?: string;
  href?: string;
  assets?: DownloadAsset[];
};

type Guarantee = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ProductSpec = {
  title: string;
  description: string;
  installUrl: string;
  platforms: PlatformSpec[];
  guarantees: Guarantee[];
};

const PRODUCTS: Record<ProductKey, ProductSpec> = {
  Yakit: {
    title: "安装 Yakit，开始使用 Yak Project。",
    description: "选择你的系统，直接获取包含 Yaklang 引擎的最新版桌面客户端。",
    installUrl: "/products/legacy/download_and_install",
    platforms: [
      {
        id: "macos",
        label: "macOS",
        prompt: "download yakit --platform macos",
        assets: [
          { label: "Apple Silicon", file: "darwin-arm64.dmg" },
          { label: "Intel", file: "darwin-x64.dmg" },
        ],
        output: ["准备 Yakit 最新稳定版 · macOS", "提供 Apple Silicon 与 Intel 安装包", "Yakit 已内置 Yaklang 运行环境"],
        result: "下载后打开 DMG，将 Yakit 拖入 Applications",
      },
      {
        id: "windows",
        label: "Windows",
        prompt: "download yakit --platform windows",
        assets: [{ label: "x86_64", file: "windows-amd64.exe" }],
        output: ["准备 Yakit 最新稳定版 · Windows x86_64", "支持 Windows 10 / 11", "Yakit 已内置 Yaklang 运行环境"],
        result: "运行安装程序并按向导完成安装",
      },
      {
        id: "linux",
        label: "Linux",
        prompt: "download yakit --platform linux",
        assets: [
          { label: "x86_64", file: "linux-amd64.AppImage" },
          { label: "ARM64", file: "linux-arm64.AppImage" },
        ],
        output: ["准备 Yakit 最新稳定版 · Linux", "提供 x86_64 与 ARM64 AppImage", "兼容统信 UOS、麒麟等国产系统"],
        result: "赋予 AppImage 执行权限后即可启动",
      },
    ],
    guarantees: [
      { icon: ShieldCheck, title: "持续更新", text: "稳定发布安全能力与引擎更新，客户端会自动检测可用的新版本。" },
      { icon: Terminal, title: "内置 Yak 引擎", text: "安装 Yakit 即可获得完整 Yaklang 运行环境，无需额外配置。" },
      { icon: PackageCheck, title: "跨平台一致", text: "macOS、Windows 与 Linux 使用统一界面和能力体系。" },
    ],
  },
  Yaklang: {
    title: "一行命令，安装 Yaklang。",
    description: "面向网络安全的 CDSL 编程语言，可独立用于终端、自动化与 CI 环境。",
    installUrl: "/docs/startup",
    platforms: [
      {
        id: "macos",
        label: "macOS",
        prompt: "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)",
        command: "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)",
        output: ["自动检测 macOS 与处理器架构", "下载最新 Yak 二进制", "完成命令行环境配置"],
        result: "运行 yak version 验证安装",
      },
      {
        id: "linux",
        label: "Linux",
        prompt: "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)",
        command: "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)",
        output: ["自动检测 Linux 发行版与架构", "下载最新 Yak 二进制", "安装到系统命令路径"],
        result: "运行 yak version 验证安装",
      },
      {
        id: "windows",
        label: "Windows",
        prompt: "yak.exe install",
        command: "powershell (new-object System.Net.WebClient).DownloadFile('https://oss-qn.yaklang.com/yak/latest/yak_windows_amd64.exe','yak.exe'); yak.exe install",
        output: ["下载 Windows 版 Yak 安装器", "完成二进制安装与环境配置", "注册 yak 命令"],
        result: "重新打开终端并运行 yak version",
      },
      {
        id: "releases",
        label: "Releases",
        prompt: "open github.com/yaklang/yaklang/releases",
        href: "https://github.com/yaklang/yaklang/releases",
        output: ["浏览全部预编译二进制", "获取历史版本与发布说明", "适合 CI、容器与离线部署"],
        result: "选择对应系统与架构的发布资产",
      },
    ],
    guarantees: [
      { icon: Terminal, title: "一行安装", text: "安装脚本自动识别平台与架构，并完成命令行环境配置。" },
      { icon: ShieldCheck, title: "完全开源", text: "Yaklang 核心遵循 AGPL-3.0，源码与发行资产公开可查。" },
      { icon: PackageCheck, title: "可独立部署", text: "适用于本地终端、自动化任务、容器与持续集成环境。" },
    ],
  },
  IRify: {
    title: "进入 IRify，审计真实代码。",
    description: "基于 SSA IR 的多语言代码安全分析平台，结合 SAST 与 AI 双引擎。",
    installUrl: "https://ssa.to",
    platforms: [
      {
        id: "web",
        label: "Web",
        prompt: "open https://ssa.to",
        href: "https://ssa.to",
        output: ["打开 IRify 在线代码审计平台", "使用 SyntaxFlow 描述漏洞模式", "通过 SAST + AI 双引擎分析代码"],
        result: "创建项目并导入待审计代码",
      },
    ],
    guarantees: [
      { icon: ShieldCheck, title: "多语言支持", text: "覆盖 Java、Golang、PHP、JavaScript 等主流语言与框架。" },
      { icon: Terminal, title: "SyntaxFlow", text: "用贴近漏洞描述的 DSL 编写可复用、可解释的检测规则。" },
      { icon: PackageCheck, title: "AI 双引擎", text: "传统静态分析与大模型协同，提升真实漏洞检出效率。" },
    ],
  },
  Memfit: {
    title: "让 Memfit 执行安全任务。",
    description: "由 Yaklang 驱动的安全工作 Agent，将规划、执行与验证组织为完整工作流。",
    installUrl: "https://memfit.ai",
    platforms: [
      {
        id: "web",
        label: "Web",
        prompt: "open https://memfit.ai",
        href: "https://memfit.ai",
        output: ["进入 Memfit AI 工作空间", "组合 Plan-Execute 与 ReAct 双引擎", "调用 Yaklang 全栈安全能力"],
        result: "创建任务并交给 Agent 执行",
      },
    ],
    guarantees: [
      { icon: Terminal, title: "双引擎架构", text: "宏观规划与微观执行递归协同，适应复杂安全任务。" },
      { icon: ShieldCheck, title: "Yaklang 驱动", text: "直接调用 Yaklang 安全工具链，行动可解释且可复现。" },
      { icon: PackageCheck, title: "能力可评测", text: "结合真实安全基准，对任务结果进行持续验证与评估。" },
    ],
  },
};

const LEGACY_FILES: DownloadAsset[] = [
  { label: "Windows 7", file: "windows-legacy-amd64.exe" },
  { label: "Linux x86_64", file: "linux-legacy-amd64.AppImage" },
  { label: "Linux ARM64", file: "linux-legacy-arm64.AppImage" },
  { label: "macOS Intel", file: "darwin-legacy-x64.dmg" },
  { label: "macOS Apple Silicon", file: "darwin-legacy-arm64.dmg" },
];

const productKeys = Object.keys(PRODUCTS) as ProductKey[];

function getYakitUrl(version: string, file: string) {
  return `https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-${file}`;
}

function detectPlatform(): PlatformId {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac") || userAgent.includes("darwin")) return "macos";
  return "linux";
}

function GuaranteeItem({ guarantee }: { guarantee: Guarantee }) {
  const Icon = guarantee.icon;

  return (
    <motion.div variants={item}>
      <Icon className="h-5 w-5" style={{ color: "var(--hp-orange)" }} aria-hidden="true" />
      <h3 className="mt-4 text-sm font-semibold" style={{ color: "var(--hp-ink)" }}>
        {guarantee.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--hp-ink-55)" }}>
        {guarantee.text}
      </p>
    </motion.div>
  );
}

export default function DownloadBlock() {
  const [activeProduct, setActiveProduct] = useState<ProductKey>("Yakit");
  const [activeId, setActiveId] = useState<PlatformId>("macos");
  const [version, setVersion] = useState("");
  const [legacyOpen, setLegacyOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const product = PRODUCTS[activeProduct];
  const active = product.platforms.find((platform) => platform.id === activeId) ?? product.platforms[0];

  useEffect(() => {
    setActiveId(detectPlatform());
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://oss-qn.yaklang.com/yak/latest/yakit-version.txt", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load Yakit version");
        return response.text();
      })
      .then((text) => setVersion(text.split("\n")[0].trim()))
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!product.platforms.some((platform) => platform.id === activeId)) {
      const detected = detectPlatform();
      setActiveId(product.platforms.find((platform) => platform.id === detected)?.id ?? product.platforms[0].id);
    }
  }, [activeId, product]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const copyCommand = async () => {
    if (!active.command) return;

    try {
      await navigator.clipboard.writeText(active.command);
      setCopied(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const selectProduct = (key: ProductKey) => {
    const nextProduct = PRODUCTS[key];
    const detected = detectPlatform();
    setActiveProduct(key);
    setActiveId(nextProduct.platforms.find((platform) => platform.id === detected)?.id ?? nextProduct.platforms[0].id);
    setLegacyOpen(false);
    setCopied(false);
  };

  const renderAction = () => {
    if (active.command) {
      return (
        <button
          type="button"
          onClick={copyCommand}
          className="inline-flex h-9 min-w-[104px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs font-medium text-neutral-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span key="copied" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                已复制
              </motion.span>
            ) : (
              <motion.span key="copy" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-2">
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                复制命令
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      );
    }

    if (active.assets) {
      return (
        <div className="flex flex-wrap justify-end gap-2">
          {active.assets.map((asset) =>
            version ? (
              <a
                key={asset.file}
                href={getYakitUrl(version, asset.file)}
                className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-medium text-neutral-950 transition-opacity hover:opacity-90"
                style={{ background: "var(--hp-orange)" }}
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                {asset.label}
              </a>
            ) : (
              <span key={asset.file} className="inline-flex h-9 items-center rounded-full border border-white/15 px-4 text-xs text-neutral-500">
                正在获取版本
              </span>
            ),
          )}
        </div>
      );
    }

    if (active.href) {
      return (
        <a
          href={active.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-medium text-neutral-950 transition-opacity hover:opacity-90"
          style={{ background: "var(--hp-orange)" }}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          打开
        </a>
      );
    }

    return null;
  };

  const prompt = active.command ?? active.prompt;
  const terminalStyle: CSSProperties = {
    background: "var(--hp-card-dark)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 24px 64px rgba(33, 26, 18, 0.18)",
  };

  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto flex w-full max-w-[1400px] flex-col items-center"
      >
        <motion.h2
          key={`${activeProduct}-title`}
          variants={item}
          className="hp-display max-w-3xl text-center text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ color: "var(--hp-ink)" }}
        >
          {product.title}
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-xl text-center text-base leading-relaxed sm:text-lg" style={{ color: "var(--hp-ink-55)" }}>
          {product.description}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b" style={{ borderColor: "var(--hp-line)" }}>
          {productKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => selectProduct(key)}
              aria-pressed={activeProduct === key}
              className="hp-mono relative cursor-pointer border-0 bg-transparent px-0 pb-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2"
              style={{ color: activeProduct === key ? "var(--hp-orange)" : "var(--hp-ink-55)" }}
            >
              {key}
              {activeProduct === key && <motion.span layoutId="product-active-tab" className="absolute inset-x-0 -bottom-px h-0.5" style={{ background: "var(--hp-orange)" }} />}
            </button>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 w-full max-w-3xl">
          <div className="overflow-hidden rounded-2xl border shadow-xl" style={terminalStyle}>
            <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex shrink-0 gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </span>
                <span className="truncate font-mono text-xs text-neutral-500">{activeProduct.toLowerCase()} · install</span>
              </div>
              <div className="flex max-w-full overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1">
                {product.platforms.map((platform) => (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => setActiveId(platform.id)}
                    aria-pressed={active.id === platform.id}
                    className="relative shrink-0 cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {active.id === platform.id && (
                      <motion.span
                        layoutId="download-active-platform"
                        style={{ borderRadius: 9999 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 bg-white"
                      />
                    )}
                    <span className={`relative z-10 transition-colors ${active.id === platform.id ? "text-neutral-900" : "text-neutral-400 hover:text-white"}`}>
                      {platform.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <p className="min-w-0 break-words font-mono text-sm leading-relaxed text-neutral-100 sm:text-[15px]">
                  <span className="select-none text-neutral-500">$ </span>
                  {prompt}
                  {active.command &&
                    (reduceMotion ? (
                      <span aria-hidden="true" className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100" />
                    ) : (
                      <motion.span
                        aria-hidden="true"
                        className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100"
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
                      />
                    ))}
                </p>
                {renderAction()}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="min-h-[132px] sm:min-h-[120px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.ul
                      key={`${activeProduct}-${active.id}`}
                      variants={outputList}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      className="space-y-2.5 font-mono text-[13px]"
                    >
                      {active.output.map((line) => (
                        <motion.li key={line} variants={outputLine} className="flex items-center gap-2.5 text-neutral-400">
                          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                          <span className="min-w-0 break-words">{line}</span>
                        </motion.li>
                      ))}
                      <motion.li variants={outputLine} className="pt-1.5 text-neutral-100">
                        → {active.result}
                      </motion.li>
                    </motion.ul>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-xs" style={{ color: "var(--hp-ink-55)" }}>
          <span>{activeProduct === "Yakit" ? `v${version || "latest"}` : activeProduct}</span>
          <span aria-hidden="true">·</span>
          <span>{product.platforms.map((platform) => platform.label).join(" / ")}</span>
          <span aria-hidden="true">·</span>
          <span>Yak Project</span>
        </motion.div>

        {activeProduct === "Yakit" ? (
          <>
            <motion.button
              variants={item}
              type="button"
              onClick={() => setLegacyOpen((open) => !open)}
              aria-expanded={legacyOpen}
              className="mt-8 inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent text-sm font-medium transition-colors hover:opacity-60 focus-visible:outline-none focus-visible:ring-2"
              style={{ color: "var(--hp-ink)" }}
            >
              旧系统兼容版本
              <ChevronDown className={`h-4 w-4 transition-transform ${legacyOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </motion.button>
            <AnimatePresence initial={false}>
              {legacyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="w-full max-w-3xl overflow-hidden"
                >
                  <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-3 border-t pt-5" style={{ borderColor: "var(--hp-line)" }}>
                    {LEGACY_FILES.map((asset) =>
                      version ? (
                        <a key={asset.file} href={getYakitUrl(version, asset.file)} className="inline-flex items-center gap-1.5 text-xs font-medium hover:opacity-60" style={{ color: "var(--hp-ink)" }}>
                          <Download className="h-3.5 w-3.5" aria-hidden="true" />
                          {asset.label}
                        </a>
                      ) : (
                        <span key={asset.file} className="text-xs" style={{ color: "var(--hp-ink-55)" }}>
                          {asset.label}
                        </span>
                      ),
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.a
            variants={item}
            href={product.installUrl}
            target={product.installUrl.startsWith("http") ? "_blank" : undefined}
            rel={product.installUrl.startsWith("http") ? "noreferrer" : undefined}
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-60 focus-visible:outline-none focus-visible:ring-2"
            style={{ color: "var(--hp-ink)" }}
          >
            查看完整说明
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        )}

        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {product.guarantees.map((guarantee) => (
            <GuaranteeItem key={`${activeProduct}-${guarantee.title}`} guarantee={guarantee} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
