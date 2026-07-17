import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Hero24 } from "./hero-24";
import DownloadBlock from "./DownloadBlock";
import "./homepage.scss";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const LINKS = {
  github: "https://github.com/yaklang",
  yaklang: "https://yaklang.com",
  yakDocs: "/docs/intro",
  yakitDocs: "/products/intro",
  irify: "https://ssa.to",
  irifyDocs: "https://ssa.to/docs/intro",
  memfit: "https://memfit.ai",
  memfitDocs: "https://memfit.ai/docs/help/quick-start/installation/",
  hackSkills: "https://skills.hackbenchmark.com",
  hackBenchmark: "https://hackbenchmark.com",
  yaklab: "/Yaklab/vulinbox/",
  blog: "/blog",
  download: "/download",
  team: "/team",
  opensource: "/opensource",
};

// ─── Shared ────────────────────────────────────────────

function SectionHead({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div {...fadeUp}>
      <p className="hp-mono" style={{ color: "var(--hp-orange)" }}>
        {tag}
      </p>
      <h2
        className="hp-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl"
        style={{ lineHeight: 1.2 }}
      >
        {title}
      </h2>
      <p
        className="mt-4 text-sm leading-relaxed"
        style={{ maxWidth: 560, color: "var(--hp-ink-55)" }}
      >
        {desc}
      </p>
    </motion.div>
  );
}

function WatercolorBg(props: Record<string, any>) {
  return (
    <BrowserOnly fallback={<div className="absolute inset-0 bg-[#150d06]" />}>
      {() => {
        const Watercolor =
          require("../react-bits/watercolor").default;
        return <Watercolor {...props} />;
      }}
    </BrowserOnly>
  );
}

function StaggeredTextClient(props: Record<string, any>) {
  return (
    <BrowserOnly fallback={<span>{props.text}</span>}>
      {() => {
        const StaggeredText =
          require("../react-bits/staggered-text").default;
        return <StaggeredText {...props} />;
      }}
    </BrowserOnly>
  );
}

// ─── Hero Block (Hero 24 风格: 左内容右 NeuroNoise 背景) ───

function HeroBlock() {
  return <Hero24 />;
}


// ─── Marquee Block ─────────────────────────────────────

function MarqueeBlock() {
  const words =
    "CDSL-YAK — SSA IR — SYNTAXFLOW — YAK VM — MITM PROXY — WEB FUZZER — PLAN-EXECUTE — REACT ENGINE — MCP PROTOCOL — RAG SYSTEM — ";

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        borderTop: "1px solid var(--hp-line)",
        borderBottom: "1px solid var(--hp-line)",
        background: "var(--hp-card-dark)",
      }}
    >
      <div className="hp-marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="hp-mono px-2"
            style={{ color: "rgba(250,246,239,0.7)" }}
          >
            {words.repeat(3)}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Products Block ────────────────────────────────────

function ProductsBlock() {
  const products = [
    {
      no: "01",
      name: "Yaklang",
      tag: "网络安全领域专用语言",
      desc: "面向网络安全场景设计的 CDSL 与虚拟机引擎，把扫描、流量分析、漏洞验证与自动化编排统一为可编程能力。",
      features: [
        "图灵完备的 CDSL 语言",
        "YakVM 栈式字节码虚拟机",
        "丰富的安全标准库",
        "LSP / DSP 语言服务",
      ],
      href: LINKS.yakDocs,
    },
    {
      no: "02",
      name: "Yakit",
      tag: "ALL-IN-ONE 安全测试平台",
      desc: "由 Yaklang 驱动的交互式安全测试平台，可百分百替代 BurpSuite 的 MITM 劫持平台。",
      features: [
        "MITM 交互式劫持",
        "可视化 Web Fuzzer",
        "MITM 被动扫描 GUI",
        "嵌入式执行 + 热加载",
      ],
      href: LINKS.yakitDocs,
    },
    {
      no: "03",
      name: "IRify",
      tag: "SAST + AI 双引擎代码审计",
      desc: "基于 SSA IR 中间表示的静态代码分析平台，用 SyntaxFlow 一行表达一个漏洞规则。",
      features: [
        "SSA 双向数据流分析",
        "SyntaxFlow 规则引擎",
        "AI 代码审计引擎",
        "Java / Go / PHP / JS 多语言",
      ],
      href: LINKS.irify,
    },
    {
      no: "04",
      name: "Memfit AI",
      tag: "安全领域工作 Agent",
      desc: "ReAct 与 Plan-Execute 递归耦合的混合智能体架构，融合宏观战略规划与微观战术执行。",
      features: [
        "Plan + ReAct 双引擎",
        "工具与 Forges 系统",
        "RAG 知识检索",
        "长期记忆系统",
      ],
      href: LINKS.memfit,
    },
  ];

  return (
    <section id="products" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="PRODUCT ECOSYSTEM — 产品生态"
          title="从安全语言到智能代理的完整产品栈"
          desc="Yaklang 提供统一能力基座，Yakit、IRify 与 Memfit AI 分别服务于安全测试、代码分析和复杂任务执行。"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("/") ? undefined : "_blank"}
              rel={p.href.startsWith("/") ? undefined : "noreferrer"}
              className="hp-card group flex flex-col p-6 sm:p-8"
              style={{ textDecoration: "none", color: "inherit" }}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            >
              <p className="hp-mono" style={{ color: "var(--hp-ink-35)" }}>
                {p.no} / PRODUCT
              </p>
              <h3
                className="hp-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {p.name}
              </h3>
              <p
                className="mt-1 text-sm font-semibold"
                style={{ color: "var(--hp-orange)" }}
              >
                {p.tag}
              </p>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--hp-ink-55)" }}
              >
                {p.desc}
              </p>
              <ul
                className="mt-6 flex flex-col gap-2 pt-5"
                style={{ borderTop: "1px solid var(--hp-line)" }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-[13px]"
                    style={{ color: "var(--hp-ink-70)" }}
                  >
                    <span
                      className="font-mono"
                      style={{ color: "var(--hp-orange)" }}
                    >
                      →
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p
                className="hp-mono mt-auto pt-6"
                style={{ color: "var(--hp-ink-35)", transition: "color 0.25s" }}
              >
                了解更多 ↗
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Showcase Block ────────────────────────────────────

function ShowcaseBlock() {
  const showcases = [
    {
      title: "Yaklang · CDSL 领域语言",
      subtitle: "为网络安全而生的编程语言",
      desc: "图灵完备 · 强类型 + 动态类型 · 编译字节码 · 单二进制跨平台 · 开箱即用",
      code: `# 10 行代码完成 C 段扫描 + CVE 检测
res = synscan.Scan("192.168.1.1/24", "80,443,8080")~
for result in res {
    addr = str.HostPort(result.Host, result.Port)
    poc.HTTP(addr, poc.https(result.Port == 443))~
}`,
      visual: "yaklang",
    },
    {
      title: "Yakit · 安全测试平台",
      subtitle: "BurpSuite 国产化替代",
      desc: "MITM 劫持 · Web Fuzzer · 被动扫描 · 端口扫描 · 反连 · 插件商店 · AI Agent",
      img: "/img/home/third/mitm-1.png",
      visual: "yakit",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="SHOWCASE — 产品演出"
          title="安全能力的最佳实践"
          desc="从一门语言到一个平台，Yak Project 把安全能力融合做成了可被复用的工程基座。"
        />
        <div className="mt-10 flex flex-col gap-4 sm:mt-12">
          {showcases.map((s, i) => (
            <motion.div
              key={s.title}
              className="hp-card overflow-hidden"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2 lg:p-10">
                  <p className="hp-mono" style={{ color: "var(--hp-orange)" }}>
                    {s.subtitle}
                  </p>
                  <h3
                    className="hp-display mt-3 text-xl font-semibold tracking-tight sm:text-2xl"
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--hp-ink-55)" }}
                  >
                    {s.desc}
                  </p>
                  {s.code && (
                    <pre
                      className="mt-6 overflow-x-auto rounded-xl p-4 text-xs leading-relaxed"
                      style={{
                        background: "var(--hp-card-dark)",
                        color: "rgba(250,246,239,0.85)",
                        fontFamily: "var(--hp-font-mono)",
                      }}
                    >
                      <code>{s.code}</code>
                    </pre>
                  )}
                </div>
                <div
                  className="flex items-center justify-center overflow-hidden lg:w-1/2"
                  style={{
                    background: s.img
                      ? "var(--hp-card-dark)"
                      : "linear-gradient(135deg, #170b03, #f96411)",
                    minHeight: 280,
                  }}
                >
                  {s.img ? (
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover"
                      style={{ opacity: 0.9 }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <WatercolorBg
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        speed={0.3}
                        scale={0.6}
                        octaves={3}
                        persistence={0.5}
                        lacunarity={2.0}
                        driftSpeed={0.03}
                        warpSpeed={0.06}
                        color1="#0a0505"
                        color2="#3399dd"
                        colorGain={0.85}
                        saturation={0.9}
                        brightness={0.03}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src="/img/logo.svg"
                          alt="Yaklang"
                          className="h-24 w-24 sm:h-32 sm:w-32"
                          style={{
                            filter:
                              "drop-shadow(0 4px 20px rgba(0,0,0,0.5)) brightness(2)",
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OpenSource Block ──────────────────────────────────

function OpenSourceBlock() {
  const projects = [
    {
      name: "IRify · SSA",
      tag: "CODE ANALYSIS",
      desc: "基于 SSA 中间表示的静态代码分析与代码审计平台。",
      href: LINKS.irify,
    },
    {
      name: "HackSkills",
      tag: "AI SECURITY SKILLS",
      desc: "面向 AI Agent 的攻防技能知识库，101 个深度技能覆盖 14 个安全领域。",
      href: LINKS.hackSkills,
    },
    {
      name: "HackBenchmark",
      tag: "AI BENCHMARK",
      desc: "前沿 AI Agent 对真实 Web 漏洞的可复现评测基准。",
      href: LINKS.hackBenchmark,
    },
    {
      name: "YakLab",
      tag: "VULINBOX",
      desc: "Web 漏洞靶场实战手册：Vulinbox 通关指南。",
      href: LINKS.yaklab,
    },
    {
      name: "Memfit AI",
      tag: "AGENT FRAMEWORK",
      desc: "面向智能体系统的递归式双引擎混合架构。",
      href: LINKS.memfit,
    },
    {
      name: "JavaJive",
      tag: "JAVA TOOLCHAIN",
      desc: "纯 Go 实现的 Java 工具箱：反编译 / 类解析 / 序列化，单二进制、无需 JDK。",
      href: "https://github.com/yaklang/javajive",
    },
  ];

  return (
    <section
      id="opensource"
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="OPEN SOURCE — 开源生态"
          title="让安全知识、技能与评测形成闭环"
          desc="产品之外，我们持续建设面向 AI 时代的知识检索、攻防技能与能力评测基础设施。"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("/") ? undefined : "_blank"}
              rel={p.href.startsWith("/") ? undefined : "noreferrer"}
              className="hp-card group flex flex-col p-6 sm:p-8"
              style={{
                textDecoration: "none",
                color: "inherit",
                minHeight: 240,
              }}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            >
              <p className="hp-mono" style={{ color: "var(--hp-orange)" }}>
                {p.tag}
              </p>
              <h3
                className="hp-display mt-5 text-2xl font-semibold tracking-tight"
              >
                {p.name}
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--hp-ink-55)" }}
              >
                {p.desc}
              </p>
              <p
                className="hp-mono mt-auto pt-8"
                style={{ color: "var(--hp-ink-35)", transition: "color 0.25s" }}
              >
                访问项目 ↗
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Technology Block ──────────────────────────────────

function TechStackBlock() {
  const layers = [
    {
      k: "应用层 / APPLICATION",
      items: [
        "Yakit 安全平台",
        "IRify 代码分析",
        "Memfit AI Agent",
        "安全技能与评测",
      ],
    },
    {
      k: "能力层 / CAPABILITY",
      items: [
        "MITM 引擎",
        "Fuzzing 引擎",
        "SSA 编译器",
        "ReAct 引擎",
        "Plan 引擎",
        "RAG 知识系统",
      ],
    },
    {
      k: "基座层 / FOUNDATION",
      items: [
        "Yaklang CDSL",
        "Yak VM Runtime",
        "SSA IR",
        "SyntaxFlow DSL",
        "MCP Protocol",
      ],
    },
  ];

  return (
    <section id="tech" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="TECHNOLOGY — 技术体系"
          title="一套语言，贯穿安全能力的构建与调用"
          desc="从 Yaklang CDSL、SSA IR 与 SyntaxFlow，到扫描引擎、代码分析和智能代理，能力可以被统一描述、复用与组合。"
        />
        <div className="mt-10 flex flex-col gap-4 sm:mt-12">
          {layers.map((l, i) => (
            <motion.div
              key={l.k}
              className="hp-card-static p-5 sm:p-6 lg:p-7"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            >
              <p className="hp-mono" style={{ color: "var(--hp-ink-35)" }}>
                {l.k}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {l.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-[13px]"
                    style={{
                      border: "1px solid var(--hp-line)",
                      background: "var(--hp-paper)",
                      color: "var(--hp-ink-70)",
                      transition: "all 0.25s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--hp-orange)";
                      el.style.color = "var(--hp-orange)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--hp-line)";
                      el.style.color = "var(--hp-ink-70)";
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative mt-4 overflow-hidden sm:mt-5"
          style={{ height: 160, borderRadius: 20 }}
          {...fadeUp}
        >
          <WatercolorBg
            width="100%"
            height="100%"
            className="absolute inset-0"
            speed={0.4}
            scale={0.5}
            octaves={4}
            persistence={0.55}
            lacunarity={2.1}
            driftSpeed={0.05}
            warpSpeed={0.09}
            color1="#170b03"
            color2="#fc7b1c"
            colorGain={0.85}
            saturation={1}
            brightness={0.02}
          />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 sm:p-5">
            <span className="hp-mono" style={{ color: "rgba(250,246,239,0.5)" }}>
              SECURITY FIELD — 安全能力基座
            </span>
            <span className="hp-mono" style={{ color: "rgba(250,246,239,0.5)" }}>
              WEBGL / WATERCOLOR
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials Block ────────────────────────────────

function TestimonialsBlock() {
  const quotes = [
    {
      name: "ykc",
      org: "长亭科技",
      text: "Yak 创造了足够的可能性，让我们可以在巨人的肩膀上发挥想象力。",
    },
    {
      name: "Alex-null",
      org: "青藤云安全",
      text: "Yak 是目前看到的国内最优秀的安全能力底座。",
    },
    {
      name: "wooluo",
      org: "安全从业者",
      text: "国产渗透中单兵作业工具……代替 BurpSuite 的不二首选。",
    },
    {
      name: "李大壮",
      org: "Xiecat 团队",
      text: "成为安全领域的 Matlab。",
    },
    {
      name: "key@OverSpace",
      org: "安全从业者",
      text: "完成了某种意义上的『大一统』。",
    },
    {
      name: "国产大熊猫",
      org: "生态共建贡献者",
      text: "Yakit 是一款优秀的国产 web 渗透工具……像一位战友陪伴在身边。",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="VOICES — 用户故事"
          title="来自安全社区的声音"
          desc="来自一线安全从业者、安全厂商、开源贡献者的真实评价。"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              className="hp-card-static p-6 sm:p-8"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            >
              <p
                className="text-sm leading-relaxed italic"
                style={{ color: "var(--hp-ink-70)" }}
              >
                「{q.text}」
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    background: "var(--hp-orange)",
                    color: "#fff",
                  }}
                >
                  {q.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold">{q.name}</p>
                  <p className="text-xs" style={{ color: "var(--hp-ink-55)" }}>
                    {q.org}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Timeline Block ────────────────────────────────────

function TimelineBlock() {
  const milestones = [
    {
      year: "2021",
      title: "Yakit 首次开源",
      desc: "一次性导入完整源码，首日即具备 MITM、Web Fuzzer、Codec 等核心能力。",
      star: true,
    },
    {
      year: "2023",
      title: "Yaklang 核心开源 · SyntaxFlow 诞生",
      desc: "Yaklang 核心仓库正式开源，首日即发布 v1.2.0-sp6。SyntaxFlow 漏洞建模 DSL 同年落地。",
      star: true,
    },
    {
      year: "2023",
      title: "工信部十大科技进展",
      desc: "YAK 入选工信部信息通信领域十大科技进展，获国家级科技荣誉。",
      star: true,
    },
    {
      year: "2024",
      title: "CDSL 教材出版 · 院士鉴定",
      desc: "《CDSL-YAK 网络安全领域编程语言》正式出版；九位院士鉴定为「国内外首创、国际先进」。",
      star: true,
    },
    {
      year: "2025",
      title: "AI 元年 · IRify 独立",
      desc: "Yakit AI-Agent 落地、IRify 正式命名、aireact 框架成型。",
      star: true,
    },
    {
      year: "2026",
      title: "产品矩阵成型",
      desc: "IRify AI 代码审计上线、Yakit v1.4.8 发布、Yaklang 累计 14,000+ 提交。",
      star: false,
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="TIMELINE — 开源历程"
          title="从一门语言到一个生态"
          desc="Yak Project 五年持续迭代的关键里程碑。"
        />
        <div className="mt-10 sm:mt-12">
          {milestones.map((m, i) => (
            <motion.div
              key={`${m.year}-${m.title}`}
              className="flex gap-4 sm:gap-6"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`hp-timeline-dot ${m.star ? "hp-timeline-dot-star" : ""}`}
                />
                {i < milestones.length - 1 && (
                  <div className="hp-timeline-line flex-1" style={{ minHeight: 40 }} />
                )}
              </div>
              <div className="pb-8">
                <p
                  className="hp-mono"
                  style={{ color: "var(--hp-orange)" }}
                >
                  {m.year}
                </p>
                <h4 className="mt-1 text-base font-semibold sm:text-lg">
                  {m.title}
                </h4>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: "var(--hp-ink-55)", maxWidth: 560 }}
                >
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Partners Block ────────────────────────────────────

function PartnersBlock() {
  const partners = [
    "亚信安全",
    "奇安信",
    "HackingClub",
    "米斯特安全",
    "云众可信",
    "58",
    "CTstack",
    "E安全",
    "嘶吼",
    "四叶草安全",
    "安全脉搏",
    "智联 SRC",
    "度小满",
    "贝壳",
    "快手",
    "小米",
    "无糖信息",
    "三叶草",
    "c4 安全团队",
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="PARTNERS — 合作伙伴"
          title="与行业共建安全生态"
          desc="来自安全、互联网、金融等领域的合作伙伴，共同推动网络安全基础设施的发展。"
        />
        <div className="mt-10 flex flex-wrap gap-3 sm:mt-12">
          {partners.map((p, i) => (
            <motion.span
              key={p}
              className="rounded-full px-5 py-2.5 text-sm font-medium"
              style={{
                border: "1px solid var(--hp-line)",
                background: "#fffdf9",
                color: "var(--hp-ink-55)",
                transition: "all 0.25s ease",
              }}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 10) * 0.03 }}
              whileHover={{
                borderColor: "rgba(244,90,12,0.5)",
                color: "var(--hp-orange)",
              }}
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Block ───────────────────────────────────────

function AboutBlock() {
  const values = [
    {
      t: "开源优先",
      d: "核心项目持续在 GitHub 开放演进，与社区共同建设。可见、可验证的代码是安全信任的基础。",
    },
    {
      t: "安全融合",
      d: "打破工具壁垒，实现能力互联互通。复杂的安全操作被抽象为可编程、可复用的能力单元。",
    },
    {
      t: "AI 原生",
      d: "让模型不止回答问题，更能调用知识、技能与工具完成任务，把 AI 深度融入安全工作流。",
    },
  ];

  return (
    <section id="about" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionHead
          tag="ABOUT US — 关于我们"
          title="做安全能力融合的长期建设者"
          desc="万径安全是一支以开源为底色的安全技术团队，围绕 Yaklang 持续建设语言、引擎、平台与智能代理。"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              className="hp-card-static p-6 sm:p-8"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            >
              <p className="hp-mono" style={{ color: "var(--hp-orange)" }}>
                {String(i + 1).padStart(2, "0")} /
              </p>
              <h3 className="hp-display mt-3 text-xl font-semibold tracking-tight">
                {v.t}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--hp-ink-55)" }}
              >
                {v.d}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          {...fadeUp}
        >
          <a href={LINKS.team} className="hp-btn-orange">
            了解团队
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="hp-btn-line"
          >
            GitHub ↗
          </a>
          <a href={LINKS.download} className="hp-btn-line">
            下载资源
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Vision Block ──────────────────────────────────────

function VisionBlock() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div
          className="hp-hero-card relative w-full"
          style={{ aspectRatio: "16/8.6" }}
        >
          <WatercolorBg
            width="100%"
            height="100%"
            className="absolute inset-0"
            speed={0.4}
            scale={0.42}
            octaves={4}
            persistence={0.55}
            lacunarity={2.1}
            driftSpeed={0.04}
            warpSpeed={0.07}
            color1="#150a04"
            color2="#ee4d04"
            colorGain={0.8}
            saturation={0.95}
            brightness={0.02}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(95% 90% at 50% 50%, rgba(12,6,3,0.72), rgba(12,6,3,0.22) 70%)",
            }}
          />
          <div className="pointer-events-none relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 px-5 py-16 text-center sm:gap-6 sm:px-8 lg:gap-7">
            <p
              className="hp-mono"
              style={{ color: "rgba(250,246,239,0.5)" }}
            >
              VISION — 愿景
            </p>
            <h2
              className="hp-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl"
              style={{ color: "#faf6ef", lineHeight: 1.35, maxWidth: 720 }}
            >
              <StaggeredTextClient
                text={"做难而正确的事\n让专业安全能力触手可及"}
                segmentBy="chars"
                as="span"
                delay={40}
                duration={0.7}
                direction="bottom"
                blur
                className="whitespace-pre-line"
              />
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "rgba(250,246,239,0.65)",
                maxWidth: 520,
              }}
            >
              把复杂的安全操作沉淀为可编程、可复用、可由 AI
              调用的能力单元，
              持续拓展每一位安全从业者能够完成的事情。
            </p>
            <p
              className="hp-mono"
              style={{ color: "rgba(250,246,239,0.4)" }}
            >
              LANGUAGE · ENGINE · PLATFORM · AGENT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Install Block (安装引导) ──────────────────────────

function InstallBlock() {
  const [copied, setCopied] = useState(false);
  const cmd =
    "bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)";

  const handleCopy = () => {
    navigator.clipboard?.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
        style={{ maxWidth: 1280 }}
        {...fadeUp}
      >
        <p className="hp-mono" style={{ color: "var(--hp-ink-35)" }}>
          QUICK INSTALL — 快速安装
        </p>
        <div
          className="flex items-center gap-3 rounded-full px-5 py-2.5"
          style={{
            background: "var(--hp-card-dark)",
            fontFamily: "var(--hp-font-mono)",
            fontSize: 13,
            color: "rgba(250,246,239,0.85)",
          }}
        >
          <code className="truncate" style={{ maxWidth: 400 }}>
            {cmd}
          </code>
          <button
            onClick={handleCopy}
            className="ml-2 cursor-pointer rounded px-2 py-1 text-xs transition-colors"
            style={{
              background: copied
                ? "var(--hp-orange)"
                : "rgba(250,246,239,0.15)",
              color: "#fff",
              border: "none",
            }}
          >
            {copied ? "✓" : "复制"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────

export function NewHomePage() {
  return (
    <div className="hp-root">
      <HeroBlock />
      <DownloadBlock />
      <MarqueeBlock />
      <ProductsBlock />
      <ShowcaseBlock />
      <OpenSourceBlock />
      <TechStackBlock />
      <TestimonialsBlock />
      <TimelineBlock />
      <PartnersBlock />
      <AboutBlock />
      <InstallBlock />
      <VisionBlock />
    </div>
  );
}
