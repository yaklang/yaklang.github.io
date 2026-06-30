import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
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

export const OPEN_SOURCE_PROJECTS: OpenSourceProject[] = [
  {
    id: "ssa",
    name: "IRify · SSA 静态代码分析",
    mono: "SSA",
    logo: "/img/opensource/ssa.png",
    accent: "#8b5cf6",
    tagline: "基于 SSA 中间表示的静态代码分析与代码审计平台",
    description:
      "以静态单赋值（SSA）为核心的程序分析引擎，支持多语言源码建模、数据流与控制流分析以及漏洞挖掘，是 Yak 静态代码分析能力的在线门户。",
    url: "https://ssa.to",
    domain: "ssa.to",
    repo: "https://github.com/yaklang/yaklang",
    tags: ["静态分析", "代码审计", "SSA", "IRify"],
  },
  {
    id: "javajive",
    name: "JavaJive",
    mono: "JJ",
    logo: "/img/opensource/javajive.png",
    accent: "#e23b2e",
    tagline: "纯 Go 实现的 Java 工具箱：反编译 / 类解析 / 序列化",
    description:
      "从 yaklang 抽取并裁剪而成的纯 Go Java 工具：反编译 .class/.jar/.war、解析类结构、Java 序列化与 JSON 互转。单二进制、无需 JDK，可交叉编译。",
    url: "https://yaklang.io/javajive/",
    domain: "yaklang.io/javajive",
    repo: "https://github.com/yaklang/javajive",
    tags: ["Go", "Java", "反编译", "序列化"],
  },
  {
    id: "hackskills",
    name: "HackSkills",
    mono: "HS",
    logo: "/img/opensource/hackskills.png",
    accent: "#f59e0b",
    tagline: "面向 AI Agent 的攻防技能知识库",
    description:
      "为 AI Agent 打造的攻防技能库：101 个深度技能，覆盖 Web、API、认证授权、提权、逆向、密码学、AI/LLM 安全等 14 个领域，支持模糊搜索与一键安装。",
    url: "https://skills.hackbenchmark.com",
    domain: "skills.hackbenchmark.com",
    repo: "https://github.com/yaklang/hack-skills",
    tags: ["Agent Skills", "渗透测试", "红队", "知识库"],
  },
  {
    id: "yaklab",
    name: "YakLab",
    mono: "YL",
    logo: "/img/opensource/yaklab.png",
    accent: "#14b8a6",
    tagline: "Web 漏洞靶场实战手册：Vulinbox 通关指南",
    description:
      "Yak 生态的安全实战板块：基于 Vulinbox 漏洞靶场系统化复现与通关 OWASP Top 10、逻辑漏洞与组件漏洞，配合 Yakit 动手实践，沉淀真实场景的 Web 安全技能。",
    url: "/Yaklab/vulinbox/",
    domain: "yaklang.io/Yaklab",
    repo: "https://github.com/yaklang/yaklang",
    tags: ["漏洞靶场", "Vulinbox", "实战手册", "Web 安全"],
  },
  {
    id: "hackbenchmark",
    name: "HackBenchmark",
    mono: "HB",
    logo: "/img/opensource/hackbenchmark.png",
    accent: "#d97706",
    tagline: "前沿 AI Agent 对真实 Web 漏洞的可复现评测基准",
    description:
      "基于 vulinbox 漏洞靶场与 yaklang aireact，对前沿 AI Agent 进行可复现的攻防能力评测：多聚焦模式、多指标量化排行榜。",
    url: "https://hackbenchmark.com",
    domain: "hackbenchmark.com",
    repo: "https://github.com/yaklang/hackbenchmark",
    tags: ["AI 评测", "Benchmark", "漏洞靶场"],
  },
  {
    id: "memfit",
    name: "Memfit AI",
    mono: "MF",
    logo: "/img/opensource/memfit.png",
    accent: "#2563eb",
    tagline: "面向智能体系统的递归式双引擎混合架构",
    description:
      "ReAct 与 Plan-Execute 递归耦合的混合智能体架构，融合宏观战略规划与微观战术执行，由 Yaklang 驱动，可适应任意复杂度的业务场景。",
    url: "https://memfit.ai",
    domain: "memfit.ai",
    repo: "https://github.com/yaklang/yaklang/tree/main/common/ai/aid",
    tags: ["AI Agent", "架构", "ReAct", "Plan-Execute"],
  },
];

const GithubGlyph = (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const ArrowGlyph = (
  <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          {project.tags.map((t) => (
            <span className="os-card__tag" key={t}>
              {t}
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
            <span>源码</span>
          </a>
        )}
      </div>
    </div>
  );
}

export function OpenSourceCards({ variant }: { variant: "menu" | "page" }) {
  return (
    <div className={`os-grid os-grid--${variant}`}>
      {OPEN_SOURCE_PROJECTS.map((p) => (
        <OpenSourceCard key={p.id} project={p} variant={variant} />
      ))}
    </div>
  );
}

export default OpenSourceCards;
