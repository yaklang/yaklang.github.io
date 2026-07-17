// @ts-nocheck
"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  Monitor,
  MonitorSmartphone,
  PackageCheck,
  ShieldCheck,
  Terminal,
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

interface PlatformSpec {
  id: string;
  label: string;
  command?: string;
  output?: string[];
  file?: string;
  subFile?: string;
  href?: string;
  external?: boolean;
}

interface ProductSpec {
  tag: string;
  title: string;
  desc: string;
  installUrl: string;
  platforms: PlatformSpec[];
  guarantees?: { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; "aria-hidden"?: boolean }>; title: string; text: string }[];
}

const PRODUCTS: Record<ProductKey, ProductSpec> = {
  Yakit: {
    tag: "下载",
    title: "YAK IDE (Yakit)",
    desc: "由 Yaklang 驱动的交互式网络安全测试平台。安装 Yakit 即获得 Yak 语言运行环境与全部图形化能力。",
    installUrl: "/products/legacy/download_and_install",
    platforms: [
      {
        id: "macos",
        label: "macOS",
        file: "darwin-x64.dmg",
        subFile: "darwin-arm64.dmg",
        output: [
          "下载 Yakit 最新版 · macOS",
          "同时支持 Intel 与 Apple Silicon 芯片",
          "安装后自动集成 Yak 语言运行环境",
        ],
      },
      {
        id: "windows",
        label: "Windows",
        file: "windows-amd64.exe",
        output: [
          "下载 Yakit 最新版 · Windows x86_64",
          "支持 Windows 10 / 11",
          "安装后自动集成 Yak 语言运行环境",
        ],
      },
      {
        id: "linux",
        label: "Linux",
        file: "linux-amd64.AppImage",
        subFile: "linux-arm64.AppImage",
        output: [
          "下载 Yakit 最新版 · Linux",
          "支持 x86_64 与 ARM64 架构",
          "兼容统信 UOS、麒麟等国产系统",
        ],
      },
    ],
    guarantees: [
      {
        icon: ShieldCheck,
        title: "持续更新",
        text: "Yakit 每月发布新版本，自动检测并提醒升级，保证安全能力与时俱进。",
      },
      {
        icon: Terminal,
        title: "内置 Yak 引擎",
        text: "安装 Yakit 即自动配置 Yak 语言运行环境，无需单独安装语言二进制。",
      },
      {
        icon: PackageCheck,
        title: "跨平台一致",
        text: "macOS / Windows / Linux 三端统一界面与能力，团队协同无壁垒。",
      },
    ],
  },
  Yaklang: {
    tag: "命令行",
    title: "Yaklang 语言环境",
    desc: "面向网络安全的 CDSL 领域编程语言。一行命令完成安装，支持 macOS / Linux / Windows。",
    installUrl: "/docs/startup",
    platforms: [
      {
        id: "macos",
        label: "macOS / Linux",
        command: "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)",
        output: [
          "自动检测操作系统与架构",
          "下载并安装最新 Yak 二进制",
          "完成环境变量配置",
        ],
      },
      {
        id: "windows",
        label: "Windows",
        command: "powershell (new-object System.Net.WebClient).DownloadFile('https://oss-qn.yaklang.com/yak/latest/yak_windows_amd64.exe','yak.exe'); yak.exe install",
        output: [
          "下载 Windows 版 Yak 安装器",
          "自动完成安装与环境配置",
          "命令行输入 yak 即可使用",
        ],
      },
      {
        id: "linux",
        label: "GitHub Releases",
        href: "https://github.com/yaklang/yaklang/releases",
        external: true,
        output: [
          "所有预编译二进制资产",
          "包含各平台历史版本",
          "适合 CI / 容器 / 离线部署",
        ],
      },
    ],
    guarantees: [
      {
        icon: Terminal,
        title: "一行安装",
        text: "macOS 与 Linux 只需一条 curl 命令即可将 Yak 安装到 PATH。",
      },
      {
        icon: ShieldCheck,
        title: "完全开源",
        text: "Yaklang 核心遵循 AGPL-3.0 开源，源码托管于 GitHub，接受社区共建。",
      },
      {
        icon: PackageCheck,
        title: "跨平台",
        text: "支持 macOS、Linux、Windows 及统信 UOS、麒麟等国产化系统。",
      },
    ],
  },
  IRify: {
    tag: "在线服务",
    title: "IRify 代码审计平台",
    desc: "兼具 SAST 与 AI 双引擎的代码安全分析系统。支持多语言源码建模、数据流分析与漏洞挖掘。",
    installUrl: "https://ssa.to",
    platforms: [
      {
        id: "linux",
        label: "在线使用",
        href: "https://ssa.to",
        external: true,
        output: [
          "基于 SSA IR 的多语言代码分析",
          "SyntaxFlow 一行表达漏洞规则",
          "SAST + AI 双引擎协同审计",
        ],
      },
    ],
    guarantees: [
      {
        icon: ShieldCheck,
        title: "多语言支持",
        text: "深度支持 Java / SpringBoot、Golang、PHP、JavaScript 等主流语言与框架。",
      },
      {
        icon: Terminal,
        title: "SyntaxFlow",
        text: "自研的语法模式匹配 DSL，用贴近漏洞描述的语法直接编写检测规则。",
      },
      {
        icon: PackageCheck,
        title: "AI 双引擎",
        text: "传统 SAST 与大模型协同，降低误报、提升真实漏洞检出率。",
      },
    ],
  },
  Memfit: {
    tag: "Agent",
    title: "Memfit AI",
    desc: "新一代安全领域工作 Agent。ReAct 与 Plan-Execute 递归耦合，由 Yaklang 驱动。",
    installUrl: "https://memfit.ai",
    platforms: [
      {
        id: "linux",
        label: "访问 memfit.ai",
        href: "https://memfit.ai",
        external: true,
        output: [
          "递归式 Plan-Execute + ReAct 双引擎",
          "调用 Yaklang 全栈安全能力",
          "面向复杂攻防任务的智能体系统",
        ],
      },
    ],
    guarantees: [
      {
        icon: Terminal,
        title: "双引擎架构",
        text: "宏观战略规划与微观战术执行递归耦合，可适应任意复杂度的安全任务。",
      },
      {
        icon: ShieldCheck,
        title: "Yaklang 驱动",
        text: "底层直接调用 Yaklang 的安全工具链，行动可解释、可复现、可评测。",
      },
      {
        icon: PackageCheck,
        title: "能力可评测",
        text: "配合 HackBenchmark 基准，对真实 Web 漏洞做可复现的攻防能力评测。",
      },
    ],
  },
};

const LEGACY_FILES = [
  { id: "windows-legacy", label: "Windows (Win7)", file: "windows-legacy-amd64.exe" },
  { id: "linux-legacy-amd64", label: "Linux amd64 兼容版", file: "linux-legacy-amd64.AppImage" },
  { id: "linux-legacy-arm64", label: "Linux arm64 兼容版", file: "linux-legacy-arm64.AppImage" },
  { id: "macos-legacy-x64", label: "macOS Intel 兼容版", file: "darwin-legacy-x64.dmg" },
  { id: "macos-legacy-arm64", label: "macOS Apple Silicon 兼容版", file: "darwin-legacy-arm64.dmg" },
];

function getYakitUrl(version: string, file: string) {
  return `https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-${file}`;
}

function getOS(): "macos" | "windows" | "linux" {
  if (typeof navigator === "undefined") return "macos";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac") || ua.includes("darwin")) return "macos";
  return "linux";
}

export default function DownloadBlock() {
  const defaultOS = getOS();
  const firstProduct = PRODUCTS.Yakit;
  const defaultActive = firstProduct.platforms.find((p) => p.id === defaultOS) ?? firstProduct.platforms[0];

  const [activeProduct, setActiveProduct] = useState<ProductKey>("Yakit");
  const [activeId, setActiveId] = useState<string>(defaultActive.id);
  const [version, setVersion] = useState("");
  const [sizes, setSizes] = useState<Record<string, number | null>>({});
  const [legacyOpen, setLegacyOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    axios
      .get("https://oss-qn.yaklang.com/yak/latest/yakit-version.txt")
      .then((res) => {
        if (cancelled) return;
        const v = typeof res.data === "string" ? res.data.split("\n")[0].trim() : "";
        setVersion(v);
        Promise.all(
          PRODUCTS.Yakit.platforms.map(async (p) => {
            if (!p.file) return [p.id, null] as [string, null];
            try {
              const resp = await axios.head(getYakitUrl(v, p.file));
              const len = resp.headers["content-length"];
              if (len) {
                const size = Math.ceil((Number(len) / 1024 / 1024) * 100) / 100;
                return [p.id, size] as [string, number];
              }
            } catch {
              // ignore
            }
            return [p.id, null] as [string, null];
          })
        ).then((entries) => {
          if (!cancelled) setSizes(Object.fromEntries(entries));
        });
      })
      .catch(() => {
        // ignore
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const product = PRODUCTS[activeProduct];
  const active = product.platforms.find((p) => p.id === activeId) ?? product.platforms[0];

  // 切换产品时，尝试保留当前 OS；若不存在则选第一个
  useEffect(() => {
    const matching = product.platforms.find((p) => p.id === activeId);
    if (!matching) setActiveId(product.platforms[0].id);
  }, [activeProduct]);

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

  const handleFileDownload = (file: string) => {
    if (!version) return;
    window.location.href = getYakitUrl(version, file);
  };

  const isYakit = activeProduct === "Yakit";
  const isCommand = !!active.command;
  const isLink = !!active.href;

  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center"
      >
        {/* Section header */}
        <motion.span variants={item} className="hp-mono text-xs" style={{ color: "var(--hp-orange)" }}>
          DOWNLOAD
        </motion.span>
        <motion.h2
          variants={item}
          className="hp-display mt-4 max-w-2xl text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          style={{ color: "var(--hp-ink)" }}
        >
          获取 Yak Project 核心产品
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-center text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--hp-ink-55)" }}
        >
          选择对应产品与平台，即可下载安装包或复制一键安装命令。
        </motion.p>

        {/* Product tabs */}
        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-2">
          {(Object.keys(PRODUCTS) as ProductKey[]).map((k) => (
            <button
              key={k}
              onClick={() => {
                setActiveProduct(k);
                setLegacyOpen(false);
              }}
              className="relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
              style={{
                color: activeProduct === k ? "#fff" : "var(--hp-ink, #211a12)",
                border: activeProduct === k ? "none" : "1px solid var(--hp-line, rgba(33,26,18,0.12))",
                background: activeProduct === k ? "var(--hp-orange, #ff7d23)" : "transparent",
              }}
            >
              {k}
            </button>
          ))}
        </motion.div>

        {/* Terminal card */}
        <motion.div variants={item} className="mt-8 w-full max-w-3xl">
          <div
            className="overflow-hidden rounded-2xl shadow-xl"
            style={{
              background: isYakit ? "#1a1512" : "var(--hp-card-dark, #1a1512)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="hidden h-2.5 w-2.5 rounded-full bg-white/20 sm:inline" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </span>
                <span className="font-mono text-xs text-white/40">
                  {product.title.toLowerCase()} · install
                </span>
              </div>
              <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
                {product.platforms.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    aria-pressed={activeId === p.id}
                    className="relative cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {activeId === p.id && (
                      <motion.span
                        layoutId="download-active-tab"
                        style={{ borderRadius: 9999 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 bg-white"
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        activeId === p.id ? "text-neutral-900" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Card body */}
            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  {isCommand ? (
                    <p className="break-words font-mono text-sm leading-relaxed text-neutral-100 sm:text-[15px]">
                      <span className="select-none text-neutral-500">$ </span>
                      {active.command}
                      {reduceMotion ? (
                        <span
                          aria-hidden="true"
                          className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100"
                        />
                      ) : (
                        <motion.span
                          aria-hidden="true"
                          className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100"
                          animate={{ opacity: [1, 1, 0, 0] }}
                          transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
                        />
                      )}
                    </p>
                  ) : (
                    <div className="font-mono text-sm leading-relaxed text-neutral-100 sm:text-[15px]">
                      {isYakit ? (
                        <>
                          <span className="select-none text-neutral-500">$ </span>
                          <span>下载 {active.label} 安装包</span>
                          <div className="mt-1 text-neutral-400">
                            {active.subFile ? (
                              <>
                                Intel: {active.file} / Apple Silicon: {active.subFile}
                              </>
                            ) : (
                              <>文件: {active.file}</>
                            )}
                            {version && (
                              <span className="ml-2 text-neutral-500">
                                · 版本 {version}
                                {sizes[active.id] ? ` · ${sizes[active.id]} MB` : ""}
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="select-none text-neutral-500">$ </span>
                          <span>前往 {active.label}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 gap-2">
                  {isCommand && (
                    <button
                      type="button"
                      onClick={copyCommand}
                      className="inline-flex h-9 min-w-[100px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs font-medium text-neutral-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                          <motion.span
                            key="copied"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2"
                          >
                            <Check className="h-3.5 w-3.5" />
                            已复制
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2"
                          >
                            <Copy className="h-3.5 w-3.5" />
                            复制
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  )}

                  {isYakit ? (
                    <button
                      type="button"
                      onClick={() => handleFileDownload(active.file!)}
                      disabled={!version}
                      className="inline-flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-full px-4 text-xs font-medium text-neutral-900 transition-colors hover:opacity-90 disabled:opacity-50"
                      style={{ background: "var(--hp-orange, #ff7d23)" }}
                    >
                      <Download className="h-3.5 w-3.5" />
                      下载
                    </button>
                  ) : isLink ? (
                    <a
                      href={active.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-medium text-neutral-900 transition-colors hover:opacity-90"
                      style={{ background: "var(--hp-orange, #ff7d23)" }}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      前往
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Output list */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="min-h-[100px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.ul
                      key={active.id}
                      variants={outputList}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      className="space-y-2.5 font-mono text-[13px]"
                    >
                      {(active.output || []).map((line) => (
                        <motion.li key={line} variants={outputLine} className="flex items-center gap-2.5 text-neutral-400">
                          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          <span className="min-w-0 break-words">{line}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Meta line */}
        <motion.div
          variants={item}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-xs"
          style={{ color: "var(--hp-ink-55)" }}
        >
          {isYakit ? (
            <>
              <span>最新版本: {version || "-"}</span>
              <span aria-hidden="true">·</span>
              <span>macOS / Windows / Linux</span>
            </>
          ) : (
            <>
              <span>{product.title}</span>
              <span aria-hidden="true">·</span>
              <a href={product.installUrl} target={product.installUrl.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                安装说明 <ArrowUpRight className="h-3 w-3" />
              </a>
            </>
          )}
        </motion.div>

        {/* Legacy versions (Yakit only) */}
        {isYakit && (
          <motion.div variants={item} className="mt-6 w-full max-w-3xl">
            <button
              type="button"
              onClick={() => setLegacyOpen(!legacyOpen)}
              className="flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors hover:bg-black/5"
              style={{ borderColor: "var(--hp-line, rgba(33,26,18,0.12))", color: "var(--hp-ink-55)" }}
            >
              {legacyOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              下载兼容版本（旧系统）
            </button>
            <AnimatePresence initial={false}>
              {legacyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {LEGACY_FILES.map((l) => (
                      <div
                        key={l.id}
                        className="flex items-center justify-between rounded-xl border p-3"
                        style={{ borderColor: "var(--hp-line, rgba(33,26,18,0.08))" }}
                      >
                        <span className="text-sm" style={{ color: "var(--hp-ink)" }}>
                          {l.label}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleFileDownload(l.file)}
                          disabled={!version}
                          className="rounded-full p-2 text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                          style={{ background: "var(--hp-orange)" }}
                        >
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Guarantees */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {(() => {
            const guarantees: { icon: React.ElementType; title: string; text: string }[] = product.guarantees || [];
            return guarantees.map((point) => {
              const Icon: React.ElementType = point.icon;
              return (
                <motion.div key={point.title} variants={item}>
                  <Icon className="h-5 w-5" style={{ color: "var(--hp-orange)" }} aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold" style={{ color: "var(--hp-ink)" }}>
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--hp-ink-55)" }}>
                    {point.text}
                  </p>
                </motion.div>
              );
            });
          })()}
        </div>
      </motion.div>
    </section>
  );
}
