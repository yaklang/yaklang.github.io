import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useTranslation } from "react-i18next";
import "./openSource.scss";

// Yak Project 开源生态项目数据。
// 每个项目都对应一个独立站点，卡片点击在新标签页打开，
// 同时这些 <a> 链接在 SSR 阶段即输出到 HTML，保证搜索引擎可抓取（SEO 友好）。
export interface OpenSourceProject {
  id: string;
  name: string;
  /** 卡片左上角字母徽标（无 logo 图标时回退使用） */
  mono: string;
  /** 卡片左上角 LOGO 图标路径（站点相对路径，存在时优先于 mono） */
  logo?: string;
  /** 主题强调色（徽标/标签/hover 描边） */
  accent: string;
  /**首页背景色 */
  bg: string;
  /** 首页边框色 */
  border: string;
  /** 一句话简介 */
  tagline: string;
  /** 较完整的描述 */
  description: string;
  /** 主站点链接（卡片主跳转目标） */
  url: string;
  /** 展示用域名 */
  domain: string;
  /** 源码仓库链接 */
  repo?: string;
  /** 关键词标签 */
  tags: string[];
}

// 完整的中文项目数据，用于 SSR/JSON-LD 及不调用 useTranslation 的页面（如 /opensource）。
export const OPEN_SOURCE_PROJECTS: OpenSourceProject[] = [
  // === Agent Skills 与知识资产 ===
  {
    id: "yak-skills",
    name: "Yak Skills",
    mono: "YS",
    accent: "#f59e0b",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "面向 AI Agent 的 Yaklang 编程与 Yakit 热加载知识库",
    description:
      "每个专题配有可运行的 .yak 示例和验证工具，让 Agent 能够编写、调试和验证 Yaklang 脚本，并处理 MITM、Web Fuzzer、全局热加载等实际场景。",
    url: "https://skills.yaklang.io",
    domain: "skills.yaklang.io",
    repo: "https://github.com/yaklang/yak-skills",
    tags: ["Agent Skills", "Yaklang", "Yakit", "知识库"],
  },
  {
    id: "hackskills",
    name: "HackSkills",
    mono: "HS",
    logo: "/img/opensource/hackskills.png",
    accent: "#f97316",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "面向 AI Agent 的攻防技能库",
    description:
      "覆盖 Web、API、认证授权、提权、逆向、密码学和 AI/LLM 安全等领域，将安全知识整理为可安装、可检索、可组合的标准 Skill。",
    url: "https://skills.hackbenchmark.com",
    domain: "skills.hackbenchmark.com",
    repo: "https://github.com/yaklang/hack-skills",
    tags: ["Agent Skills", "渗透测试", "红队", "知识库"],
  },
  {
    id: "irify-sast-skill",
    name: "IRify SAST Skill",
    mono: "IS",
    accent: "#8b5cf6",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "将 IRify SSA/SyntaxFlow 封装为 AI Agent Skill",
    description:
      "让 Codex、Claude Code、Cursor 等 Agent 能够编译源码、追踪数据流并执行静态安全分析，支持 Java、PHP、JavaScript、Go、Python、C 和 Yak。",
    url: "https://github.com/yaklang/irify-sast-skill",
    domain: "github.com/yaklang/irify-sast-skill",
    repo: "https://github.com/yaklang/irify-sast-skill",
    tags: ["Agent Skill", "SAST", "SSA", "SyntaxFlow"],
  },
  {
    id: "control-theory-skill",
    name: "Control Theory Skill",
    mono: "CT",
    accent: "#06b6d4",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "控制论、系统论和信息论的 Agent 设计方法",
    description:
      "将反馈、稳定性、黑箱实验等概念整理为 Agent 设计方法，为任务规划、工具使用、错误修正和反馈回路设计提供可复用的分析框架。",
    url: "https://github.com/yaklang/control-theory-skill",
    domain: "github.com/yaklang/control-theory-skill",
    repo: "https://github.com/yaklang/control-theory-skill",
    tags: ["Agent Skill", "控制论", "系统设计", "方法论"],
  },
  {
    id: "yaklang-ai-training",
    name: "Yaklang AI Training Materials",
    mono: "YT",
    accent: "#eab308",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "Yaklang 的 AI 知识与示例素材库",
    description:
      "包含标准库用法、实践案例、文章、脚本和评测材料，为 Agent 学习 Yaklang、生成安全脚本和检索语言用法提供结构化参考。",
    url: "https://github.com/yaklang/yaklang-ai-training-materials",
    domain: "github.com/yaklang/yaklang-ai-training-materials",
    repo: "https://github.com/yaklang/yaklang-ai-training-materials",
    tags: ["AI 训练", "RAG", "Yaklang", "素材库"],
  },
  {
    id: "syntaxflow-ai-training",
    name: "SyntaxFlow AI Training Materials",
    mono: "ST",
    accent: "#a855f7",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "面向 SyntaxFlow 的语法与规则素材库",
    description:
      "涵盖 SyntaxFlow 语法、运算符、NativeCall、规则示例、错误处理和 RAG 构建素材，支持 AI 检索 SyntaxFlow 知识并生成规则。",
    url: "https://github.com/yaklang/syntaxflow-ai-training-materials",
    domain: "github.com/yaklang/syntaxflow-ai-training-materials",
    repo: "https://github.com/yaklang/syntaxflow-ai-training-materials",
    tags: ["AI 训练", "RAG", "SyntaxFlow", "规则"],
  },

  // === 评测、代码分析与安全研究 ===
  {
    id: "irify-benchmark",
    name: "IRify Benchmark",
    mono: "IB",
    accent: "#6366f1",
    bg: "var(--Colors-Main---IRify-0)",
    border: "var(--Colors-Use-Main---IRify-Focus)",
    tagline: "面向代码扫描引擎的轻量评测框架",
    description:
      "维护带 Source、Sanitizer、Sink 数据流标注的基准项目，以完整数据流而非单个命中行评估扫描引擎，可用于回归测试、CI 和引擎对比。",
    url: "https://github.com/yaklang/irify-benchmark",
    domain: "github.com/yaklang/irify-benchmark",
    repo: "https://github.com/yaklang/irify-benchmark",
    tags: ["Benchmark", "SAST", "数据流", "评测"],
  },
  {
    id: "syntaxflow-tutorial",
    name: "SyntaxFlow 教程",
    mono: "SF",
    accent: "#7c3aed",
    bg: "var(--Colors-Main---IRify-0)",
    border: "var(--Colors-Use-Main---IRify-Focus)",
    tagline: "SyntaxFlow 从入门到实践的教程与示例",
    description:
      "涵盖 SSA 查询、Use-Def 链、跨过程分析和数据流可视化，帮助安全工程师学习用声明式规则描述漏洞。",
    url: "https://github.com/yaklang/syntaxflow",
    domain: "github.com/yaklang/syntaxflow",
    repo: "https://github.com/yaklang/syntaxflow",
    tags: ["SyntaxFlow", "教程", "SSA", "数据流"],
  },

  // === Yaklang 仓库内的独立模块 ===
  {
    id: "yaklang-ai-agent-runtime",
    name: "Yaklang AI Agent Runtime",
    mono: "AR",
    accent: "#0ea5e9",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "Memfit AI 使用的 Agent 运行时",
    description:
      "包含计划与任务图、ReAct 循环、工具系统、长期记忆、执行审查和专业 Focus Mode，为 Yaklang 生态提供统一的 Agent 编排与安全工具运行基础。",
    url: "https://github.com/yaklang/yaklang/tree/main/common/ai/aid",
    domain: "yaklang/common/ai/aid",
    repo: "https://github.com/yaklang/yaklang/tree/main/common/ai/aid",
    tags: ["AI Agent", "运行时", "ReAct", "Memfit"],
  },
  {
    id: "yak-ssa",
    name: "Yak SSA",
    mono: "YS",
    accent: "#8b5cf6",
    bg: "var(--Colors-Main---IRify-0)",
    border: "var(--Colors-Use-Main---IRify-Focus)",
    tagline: "Yaklang 的 SSA 中间表示与程序分析核心",
    description:
      "包含指令模型、基本块、控制流、Phi、作用域和程序数据库，为多语言代码建模、数据流分析和 IRify 静态分析提供统一程序表示。",
    url: "https://github.com/yaklang/yaklang/tree/main/common/yak/ssa",
    domain: "yaklang/common/yak/ssa",
    repo: "https://github.com/yaklang/yaklang/tree/main/common/yak/ssa",
    tags: ["SSA", "程序分析", "数据流", "IRify"],
  },
  {
    id: "syntaxflow-engine",
    name: "SyntaxFlow Engine",
    mono: "SE",
    accent: "#7c3aed",
    bg: "var(--Colors-Main---IRify-0)",
    border: "var(--Colors-Use-Main---IRify-Focus)",
    tagline: "SyntaxFlow 语法、虚拟机与扫描实现",
    description:
      "将安全规则编译为可执行查询，在 SSA 程序上完成模式匹配与数据流分析。",
    url: "https://github.com/yaklang/yaklang/tree/main/common/syntaxflow",
    domain: "yaklang/common/syntaxflow",
    repo: "https://github.com/yaklang/yaklang/tree/main/common/syntaxflow",
    tags: ["SyntaxFlow", "SAST", "规则引擎", "SSA"],
  },
  {
    id: "minirehs",
    name: "MiniREHS",
    mono: "MR",
    accent: "#ec4899",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "零外部依赖的多正则批量匹配引擎",
    description:
      "采用统一编译、一次扫描和候选验证的处理方式，面向大量规则与网络流量的批量匹配场景，在纯 Go 与可选自带 SIMD 后端之间保持一致结果。",
    url: "https://github.com/yaklang/yaklang/tree/main/common/minirehs",
    domain: "yaklang/common/minirehs",
    repo: "https://github.com/yaklang/yaklang/tree/main/common/minirehs",
    tags: ["正则引擎", "Go", "SIMD", "高性能"],
  },
  {
    id: "yak-sca",
    name: "Yak SCA Engine",
    mono: "SC",
    accent: "#10b981",
    tagline: "Yaklang 软件成分分析模块",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    description:
      "包含 Java、Go、Node.js、Python、PHP、Ruby、Rust 和 C/C++ 等依赖文件解析器及许可证分析，为依赖识别、SBOM、许可证检查和供应链风险分析提供统一基础。",
    url: "https://github.com/yaklang/yaklang/tree/main/common/sca",
    domain: "yaklang/common/sca",
    repo: "https://github.com/yaklang/yaklang/tree/main/common/sca",
    tags: ["SCA", "SBOM", "供应链", "许可证"],
  },
  {
    id: "vulinbox",
    name: "Vulinbox",
    mono: "VB",
    accent: "#ef4444",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "Yaklang 内置 Web 漏洞靶场",
    description:
      "提供 SQL 注入、XSS、SSRF、文件上传、逻辑漏洞和组件漏洞等可复现实例，为 Yakit 实操、插件验证、AI Agent 安全评测和教学提供本地授权目标。",
    url: "/Yaklab/vulinbox/",
    domain: "yaklang.com/Yaklab/vulinbox",
    repo: "https://github.com/yaklang/yaklang/tree/main/common/vulinbox",
    tags: ["漏洞靶场", "Web安全", "教学", "评测"],
  },

  // === 独立工具与工程基础设施 ===
  {
    id: "javajive",
    name: "JavaJive",
    mono: "JJ",
    logo: "/img/opensource/javajive.png",
    accent: "#e23b2e",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "从 Yaklang 抽取的纯 Go Java 工具箱",
    description:
      "支持 .class、.jar、.war 反编译，类结构解析及 Java 序列化与 JSON 互转。无需 JDK、cgo 或原生运行库，可作为单二进制工具使用，也可嵌入其他 Go 项目。",
    url: "https://yaklang.io/javajive/",
    domain: "yaklang.io/javajive",
    repo: "https://github.com/yaklang/javajive",
    tags: ["Go", "Java", "反编译", "序列化"],
  },
  {
    id: "go-llvm",
    name: "go-llvm",
    mono: "GL",
    accent: "#3b82f6",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "面向 LLVM 18 C API 的 Go 封装",
    description:
      "兼容静态链接和动态链接，并提供 JIT 相关接口，为 Yaklang 生态提供可移植、自包含的 LLVM 集成方式，降低运行环境对系统 LLVM 的依赖。",
    url: "https://github.com/yaklang/go-llvm",
    domain: "github.com/yaklang/go-llvm",
    repo: "https://github.com/yaklang/go-llvm",
    tags: ["LLVM", "Go", "JIT", "编译器"],
  },
  {
    id: "memfit-cli",
    name: "Memfit CLI",
    mono: "MC",
    accent: "#2563eb",
    bg: "var(--Colors-Main---memfit-0)",
    border: "var(--Colors-Use-Main---memfit-Focus)",
    tagline: "连接 Yaklang AI HTTP Gateway 的终端 Agent 客户端",
    description:
      "支持会话创建、SSE 事件流、模型设置、审查策略和任务取消，将 Memfit AI 的交互式任务执行能力带到终端，便于自动化流程和远程 Agent 调试。",
    url: "https://github.com/yaklang/yaklang-memfit-cli",
    domain: "github.com/yaklang/yaklang-memfit-cli",
    repo: "https://github.com/yaklang/yaklang-memfit-cli",
    tags: ["CLI", "AI Agent", "Memfit", "SSE"],
  },
  {
    id: "awesome-yak-scripts",
    name: "Awesome Yak Scripts",
    mono: "AY",
    accent: "#f59e0b",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "Yak 脚本集合",
    description:
      "涵盖安全工具、依赖同步、SCA 规则生成、日志分析和插件维护，提供可以直接阅读、运行和改造的 Yaklang 自动化示例。",
    url: "https://github.com/yaklang/awesome-yak-scripts",
    domain: "github.com/yaklang/awesome-yak-scripts",
    repo: "https://github.com/yaklang/awesome-yak-scripts",
    tags: ["Yaklang", "脚本", "自动化", "示例"],
  },
  {
    id: "yaklang-vscode",
    name: "Yaklang VS Code Extension",
    mono: "VS",
    accent: "#007acc",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "Yaklang 与 SyntaxFlow 的 VS Code 扩展",
    description:
      "提供语法高亮、补全、参数提示、诊断、调试和快速运行，将 Yaklang 的 LSP、DSP 和引擎管理能力带入通用代码编辑器。",
    url: "https://marketplace.visualstudio.com/items?itemName=v1ll4n.yak",
    domain: "marketplace.visualstudio.com",
    repo: "https://github.com/yaklang/yaklang-support",
    tags: ["VS Code", "LSP", "SyntaxFlow", "插件"],
  },
  {
    id: "yakit-chrome-extension",
    name: "Yakit Chrome Extension",
    mono: "CE",
    accent: "#22c55e",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "浏览器代理切换与 Yakit 联动 Chrome 扩展",
    description:
      "简化浏览器、系统代理与 Yakit 之间的切换，为 Web 安全测试提供浏览器侧入口。",
    url: "https://github.com/yaklang/yaklang-chrome-extension",
    domain: "github.com/yaklang/yaklang-chrome-extension",
    repo: "https://github.com/yaklang/yaklang-chrome-extension",
    tags: ["Chrome", "代理", "Yakit", "浏览器"],
  },
  {
    id: "pcap",
    name: "pcap",
    mono: "PC",
    accent: "#64748b",
    bg: "var(--Colors-Use-Main---Gold-Bg-Hover)",
    border: "var(--Colors-Use-Main---Gold-Focus)",
    tagline: "工程化封装的 gopacket/pcap fork",
    description:
      "将 libpcap 头文件、静态库和动态库按版本与架构纳入仓库，解决系统 libpcap 版本差异、交叉编译和国产架构适配问题，为 Yaklang 的抓包、扫描与网络栈能力提供稳定依赖。",
    url: "https://github.com/yaklang/pcap",
    domain: "github.com/yaklang/pcap",
    repo: "https://github.com/yaklang/pcap",
    tags: ["pcap", "抓包", "跨架构", "网络栈"],
  },
];

type OpenSourceProjectBase = Omit<
  OpenSourceProject,
  "name" | "tagline" | "description" | "tags"
> & {
  nameKey: string;
  taglineKey: string;
  descriptionKey: string;
  tagKeys: string[];
};

const OPEN_SOURCE_PROJECT_BASE: OpenSourceProjectBase[] =
  OPEN_SOURCE_PROJECTS.map((p) => ({
    id: p.id,
    nameKey: `HomeOpenSource.projects.${p.id.replace(/-/g, "_")}.name`,
    mono: p.mono,
    logo: p.logo,
    accent: p.accent,
    bg: p.bg,
    border: p.border,
    taglineKey: `HomeOpenSource.projects.${p.id.replace(/-/g, "_")}.tagline`,
    descriptionKey: `HomeOpenSource.projects.${p.id.replace(
      /-/g,
      "_",
    )}.description`,
    tagKeys: p.tags.map(
      (_, idx) =>
        `HomeOpenSource.projects.${p.id.replace(/-/g, "_")}.tags.${idx}`,
    ),
    url: p.url,
    domain: p.domain,
    repo: p.repo,
  }));

export const resolveOpenSourceProjects = (
  t: (key: string) => string,
): OpenSourceProject[] =>
  OPEN_SOURCE_PROJECT_BASE.map((p) => ({
    id: p.id,
    name: t(p.nameKey),
    mono: p.mono,
    logo: p.logo,
    accent: p.accent,
    bg: p.bg,
    border: p.border,
    tagline: t(p.taglineKey),
    description: t(p.descriptionKey),
    tags: p.tagKeys.map((tag, idx) => t(tag)),
    url: p.url,
    domain: p.domain,
    repo: p.repo,
  }));

const GithubGlyph = (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const ArrowGlyph = (
  <svg
    viewBox="0 0 20 20"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h11M11 6l6 6-6 6" transform="translate(-1 -4)" />
  </svg>
);

interface CardProps {
  project: OpenSourceProject;
  variant: "menu" | "page";
}

// 采用 "stretched link" 模式：卡片本身是 <div>，标题为覆盖整卡的真实 <a>，
// 源码链接是另一个真实 <a>（z-index 更高）。这样既能整卡点击新标签打开，
// 又能让两个外链都以真实 <a href> 输出到 HTML，对搜索引擎友好。
function OpenSourceCard({ project, variant }: CardProps) {
  const { t } = useTranslation();
  const logoSrc = useBaseUrl(project.logo ?? "");
  return (
    <div
      className={`os-card os-card--${variant}`}
      style={{ ["--os-accent" as string]: project.accent }}
    >
      <div className="os-card__top">
        {project.logo ? (
          <img
            className="os-card__logo"
            src={logoSrc}
            alt={`${project.name} logo`}
            loading="lazy"
            decoding="async"
            width={variant === "page" ? 58 : 44}
            height={variant === "page" ? 58 : 44}
          />
        ) : (
          <span className="os-card__mono" aria-hidden="true">
            {project.mono}
          </span>
        )}
        <div className="os-card__heading">
          <a
            className="os-card__name os-card__stretch"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer external"
            title={`${project.name} — ${project.domain}`}
          >
            {project.name}
          </a>
          <span className="os-card__domain">{project.domain}</span>
        </div>
        <span className="os-card__open" aria-hidden="true">
          {ArrowGlyph}
        </span>
      </div>
      <p className="os-card__desc">
        {variant === "page" ? project.description : project.tagline}
      </p>
      <div className="os-card__footer">
        <div className="os-card__tags">
          {project.tags.map((tag, idx) => (
            <span className="os-card__tag" key={`${tag}-${idx}`}>
              {t(tag, { defaultValue: tag })}
            </span>
          ))}
        </div>
        {project.repo && variant === "page" && (
          <a
            className="os-card__repo"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer external"
          >
            {GithubGlyph}
            <span>
              {t("HomeOpenSource.sourceCode", { defaultValue: "源码" })}
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

export function OpenSourceCards({
  variant,
  limit,
}: {
  variant: "menu" | "page";
  limit?: number;
}) {
  const { t } = useTranslation();
  const projects = resolveOpenSourceProjects(t);
  const visible = limit ? projects.slice(0, limit) : projects;
  return (
    <div className={`os-grid os-grid--${variant}`}>
      {visible.map((p) => (
        <OpenSourceCard key={p.id} project={p} variant={variant} />
      ))}
    </div>
  );
}

export default OpenSourceCards;
