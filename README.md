> **本仓库是 Yak Project 官网（[yaklang.com](https://yaklang.com) / [yaklang.io](https://yaklang.io)）的"故事板总稿"。**
> 它既是官网维护者的协作入口（构建方式见末尾「网站维护」），也汇集了 Yak Project 的定位、产品矩阵、Showcase、开源故事时间线、用户故事与权威背书。
> 文中标有 `【TODO 配图：...】` / `【TODO 视频剪辑：...】` 的位置，是需要补齐的真实素材，欢迎向运营同学提 PR。

---

# 🛡️ Yak Project

### 广泛使用的开源网络安全基础设施

<p align="center">
  <!-- TODO 配图：Yak Project 品牌主视觉（横向 hero banner，建议用 logo.svg + 品牌橙 #ff7d23 渐变背景） -->
  <img src="static/img/logo.svg" alt="Yak Project Logo" width="220" />
</p>

<p align="center">
  <strong>"让世界更安全，让安全更简单"</strong><br/>
  团队口号：做难且正确的事
</p>

<p align="center">
  <a href="https://github.com/yaklang/yaklang"><img alt="Yaklang Stars" src="https://img.shields.io/github/stars/yaklang/yaklang?style=social"/></a>
  <a href="https://github.com/yaklang/yakit"><img alt="Yakit Stars" src="https://img.shields.io/github/stars/yaklang/yakit?style=social"/></a>
  <a href="https://github.com/yaklang/yaklang/releases"><img alt="Yaklang Release" src="https://img.shields.io/github/release/yaklang/yaklang.svg"/></a>
  <a href="https://github.com/yaklang/yaklang/releases"><img alt="Yaklang Downloads" src="https://img.shields.io/github/downloads/yaklang/yaklang/total.svg"/></a>
  <a href="https://github.com/yaklang/yaklang/blob/main/LICENSE.md"><img alt="License" src="https://img.shields.io/badge/license-AGPL%20v3-%23ff7d23.svg"/></a>
  <a href="https://yaklang.com"><img alt="Site" src="https://img.shields.io/badge/site-yaklang.com-%233399dd.svg"/></a>
</p>

---

## ✨ Hero：Yak Project 是什么

**Yak Project 是广泛使用的开源网络安全基础设施。**

它不是一个单一工具，而是一套**以「CDSL-YAK 领域编程语言」为内核、向外辐射出 GUI 平台、静态分析引擎、安全智能体、Java 工具链、漏洞靶场、AI 评测基准的完整技术体系**。从底层虚拟机 `YakVM`、静态单赋值 `YAK SSA`、漏洞建模语言 `SyntaxFlow`，到顶层的安全从业者日常使用的图形化工具，Yak Project 把"安全能力融合"做成了可被复用的工程基座。

> 「**安全融合势在必行**」—— Yak 的起点不是再做一把"瑞士军刀"，而是去搭一块**让安全能力可以像积木一样被组合、被复用、被分发**的底层基建。
>
> 「**做难且正确的事**」—— 团队口号。

**几个硬指标**（持续更新中）：

| 维度 | 数据 |
| --- | --- |
| 核心语言仓库提交 | 14,000+ 次（截至 2026-07） |
| Yakit 桌面端提交 | 8,400+ 次 |
| 历史发布版本 | 600+ 个 tag |
| 社区贡献者 | 50+ 人 |
| 学术指导 | 电子科技大学网络空间安全学院 |
| 权威鉴定 | 2024 / 2025 连续两年九位院士鉴定为「国内外首创、国际先进、国内领先」 |
| 国家级荣誉 | 2023 年入选工信部信息通信领域十大科技进展 |

> 【TODO 配图：Yak Project 技术体系全景图（建议把 YakVM / SSA / SyntaxFlow / Yaklang 放底层，Yakit / IRify / Memfit AI / JavaJive 放上层产品层）】

---

## 🧬 副 Hero：CDSL-YAK，为网络安全而生的领域编程语言

<p align="center">
  <strong>CDSL-YAK · Cybersecurity Domain Specific Language</strong><br/>
  <em>"可能是安全领域最先进的领域编程语言（DSL）"</em>
</p>

**CDSL（Cybersecurity Domain Specific Language，网络安全领域专用编程语言）** 是 Yaklang 团队提出并被业界沿用的核心理念：与其用通用语言一次次重复"造安全工具的轮子"，不如直接为安全场景量身定制一门**图灵完备、强类型 + 动态类型、兼具编译字节码与解释执行**的编程语言。

Yaklang 是 CDSL 理念的首个完整落地，包含一整套自研的编译器基础设施：

| 编译器组件 | 角色 |
| --- | --- |
| **CDSL Yaklang** | 网络安全领域限定语言本体（语法 / 类型系统 / 运行时） |
| **YakVM** | 网络安全领域限定语言的虚拟机（栈式字节码执行） |
| **YAK SSA** | 静态分析友好的静态单赋值中间表示 |
| **SyntaxFlow** | 语法模式匹配 DSL —— 漏洞特征代码描述语言 |
| **LSP / DSP Server** | 语言服务器协议 + 调试协议服务器（IDE 级开发体验） |

**为什么 CDSL 比通用语言更适合做安全？**

- ✅ **简洁**：用最少的代码描述漏洞扫描、流量劫持、模糊测试这些安全高频场景；
- ✅ **易用**：脚本即能力，单二进制、开箱即用，可跨 macOS / Linux / Windows 交叉编译；
- ✅ **灵活**：支持热加载、嵌入式执行，可作为其他安全产品的"能力底座"被调用；
- ✅ **可维护**：语法由上下文无关文法定义，IDE 友好，便于长期工程化；
- ✅ **可靠**：强类型 + SSA 中间表示让程序分析"天生友好"。

> 技术对比：`Golang ≈ Yaklang ≥ JVM Based Lang >> Python`
>
> Yak 的目标——成为安全领域的 **"Matlab"**，让"黑客编程"有一门属于自己的领域母语。

📚 **CDSL 教材已正式出版**：《CDSL-YAK 网络安全领域编程语言—从入门到实践》

> 【TODO 配图：CDSL 教材封面 + 编译器五件套架构图（YakVM / SSA / SyntaxFlow / LSP）】

---

## 🧩 产品矩阵

Yak Project 的产品矩阵以 CDSL-YAK 为内核，自底向上覆盖**语言 → 平台 → 引擎 → 智能体 → 工具链**五个层次。下面是四个对外产品（与开源生态的关系见文末「开源生态」一节）。

### 1️⃣ Yakit · 智能化交互式网络安全测试平台

> **"安全融合"理念落地的图形化单兵作战平台，Yaklang 安全能力的最佳 GUI 实践。**

| 项目 | 内容 |
| --- | --- |
| 定位 | 基于 Electron + Yaklang gRPC 引擎构建的交互式应用安全测试 ALL-IN-ONE 平台 |
| 开源 | 2021-10-12 首发，完全开源、完全免费 |
| 能力 | MITM 交互式劫持 · Web Fuzzer 模糊测试 · 被动扫描 · 端口扫描 · 爬虫 · 反连 · WebShell · BAS · 插件商店 · 空间引擎 · AI Agent |
| 仓库 | [github.com/yaklang/yakit](https://github.com/yaklang/yakit) |
| 截图 | 【TODO 配图：Yakit 主界面 + MITM 劫持界面 + Web Fuzzer 界面（三连图）】 |

核心亮点：
- 🥇 **可百分百替代 BurpSuite 的 MITM 劫持平台**，操作流与 Repeater / Intruder 一致；
- 🎯 **难以复制的 MITM 被动扫描 GUI**——劫持即扫描；
- ⚡ **嵌入式执行 + 热加载**：可在渗透的任何步骤动态执行 Yaklang 脚本调试流量；
- 🧪 **全球第一个可视化的 Web 模糊测试工具**——Web Fuzzer + Fuzztag 语法；
- 🧩 **高度插件化**：插件商店 + 本地仓库，覆盖渗透全流程。

### 2️⃣ IRify · 兼具 SAST 与 AI 双引擎的代码安全分析系统

> **"Static-Single-Assignment Bringing Clarity to Code"——编译器级 SSA IR 代码扫描技术。**

| 项目 | 内容 |
| --- | --- |
| 定位 | 以 SSA 为核心的程序分析引擎 + 多语言代码审计平台，兼具 SAST 与 AI 双引擎 |
| 首次落地 | 2023-07 SSA MVP；2023-12 SyntaxFlow；2025-03 正式命名 IRify；2026-05 Irify AI 代码审计上线 |
| 引擎 | YAK SSA + SyntaxFlow 漏洞建模语言 + SQLite IR 数据库 |
| 语言支持 | Java / SpringBoot 系列、Golang、PHP、JavaScript、Freemarker / SpEL / EL / JSP |
| 站点 | [ssa.to](https://ssa.to) · [github.com/yaklang/yaklang](https://github.com/yaklang/yaklang) |
| 截图 | 【TODO 配图：IRify 扫描结果 + SyntaxFlow 规则编辑器（双图）】 |

核心亮点：
- 🔬 **先进分析技术**：SSA + 双向数据流 + 控制流分析 + 全局分析 + 闭包分析；
- 📜 **SyntaxFlow 规则语言**：用贴近"漏洞描述"的语法直接表达检测规则；
- 🤖 **AI 双引擎**：2026 年加入 AI 代码审计，传统 SAST + 大模型协同定位真漏洞。

### 3️⃣ Memfit AI · 新一代安全领域工作 Agent

> **ReAct 与 Plan-Execute 递归耦合的混合智能体架构，融合宏观战略规划与微观战术执行。**

| 项目 | 内容 |
| --- | --- |
| 定位 | 面向智能体系统的递归式双引擎混合架构，由 Yaklang 驱动 |
| 首次落地 | 2025-08 aireact 框架成型；后续衍生出 `-memfit` 发行版 |
| 架构 | 宏观 Plan-Execute 战略规划 + 微观 ReAct 战术执行，递归耦合 |
| 站点 | [memfit.ai](https://memfit.ai) · [github.com/yaklang/yaklang/tree/main/common/ai/aid](https://github.com/yaklang/yaklang/tree/main/common/ai/aid) |
| 截图 | 【TODO 配图：Memfit AI Agent 执行轨迹（Plan / Execute / ReAct 分层视图）】 |

核心亮点：
- 🧠 **递归式双引擎**：复杂任务可被逐层分解，战略层与战术层互相驱动；
- 🔧 **工具原生**：内置 Yaklang 全栈安全能力作为可调用工具；
- 📊 **可评测**：配合 HackBenchmark 基准，对真实 Web 漏洞做可复现的攻防评测。

### 4️⃣ JavaJive · 业界领先的工业可用 Java 代码反编译器

> **纯 Go 实现的 Java 工具箱：反编译 / 类解析 / 序列化，单二进制、无需 JDK。**

| 项目 | 内容 |
| --- | --- |
| 定位 | 从 yaklang 抽取并裁剪而成的纯 Go Java 工具链 |
| 能力 | 反编译 `.class` / `.jar` / `.war` · 解析类结构 · Java 序列化与 JSON 互转 |
| 特性 | 单二进制、无需 JDK、可交叉编译，工业级可用 |
| 仓库 | [github.com/yaklang/javajive](https://github.com/yaklang/javajive) |
| 截图 | 【TODO 配图：JavaJive 反编译 .jar 的效果对比图（JD-GUI vs JavaJive）】 |

---

## 🎬 产品 Showcase（演出安排）

> 以下产品均需在官网首页做"演出"展示，**Yaklang 与 Yakit 为必演项目**。

### 🎤 必演一：Yaklang（语言全景演出）

CDSL-YAK 是整个生态的灵魂，演出要回答三个问题：**这门语言是什么 / 它能做什么 / 为什么它比通用语言更适合做安全。**

| 演出片段 | 素材建议 |
| --- | --- |
| **60 秒语言全景** | 【TODO 视频剪辑：复用首页现成素材 `https://oss-qn.yaklang.com/yak_quick_view_1.5.mp4`（Yak 全景视频），剪 60s 精华版】 |
| **代码即能力** | 演示用 10 行 Yaklang 完成"扫描一个 C 段 + 检测一个 CVE + 反连回显"全流程； |
| **热加载调试流量** | MITM 中右键一段流量 → 嵌入 Yaklang 脚本实时改包； |
| **SyntaxFlow 一行查漏洞** | 用一条 SyntaxFlow 表达式从 SpringBoot 源码里捞出某个 SQL 注入 sink； |
| **跨平台单二进制** | macOS / Linux / Windows / 国产化（统信 UOS、麒麟）一键安装。 |

> 安装命令（演出 / 文档通用）：
>
> ```bash
> # MacOS / Linux
> bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)
>
> # Windows
> powershell (new-object System.Net.WebClient).DownloadFile('https://oss-qn.yaklang.com/yak/latest/yak_windows_amd64.exe','yak_windows_amd64.exe') && yak_windows_amd64.exe install && del /f yak_windows_amd64.exe
> ```

### 🎤 必演二：Yakit（平台能力演出）

Yakit 是 CDSL 的"最佳实践"演出，要让安全从业者 30 秒内相信"这就是 BurpSuite 的国产化替代"。

| 演出片段 | 素材建议 |
| --- | --- |
| **MITM 交互式劫持** | 劫持 → History → Repeater / Intruder，操作流对标 BurpSuite；【TODO 配图：使用 `imgs/yakit-mitm.png`】 |
| **MITM 被动扫描 GUI** | 劫持即扫描，无需额外配置；【TODO 视频剪辑：被动扫描实时发现漏洞 GIF】 |
| **Web Fuzzer + Fuzztag** | 用 `{{int(1-100)}}` 这类 Fuzztag 语法做可视化模糊测试；【TODO 配图：`imgs/webfuzzer.png` + `imgs/fuzztag.png`】 |
| **反连与协议复用** | 反弹 shell、内网穿透 bridge 模式；【TODO 配图：`imgs/reverse.png`】 |
| **插件商店** | 一键安装社区插件，覆盖渗透全流程； |
| **AI Agent（v1.4 新能力）** | 在 Yakit 内直接调度 AI 完成任务规划与执行。 |

### 🎤 选演：IRify / Memfit AI

| 产品 | 演出核心 | 素材建议 |
| --- | --- | --- |
| IRify | "用 SyntaxFlow 一行表达一个漏洞规则" + "SAST × AI 双引擎协同" | 【TODO 视频剪辑：导入一个真实 Java 项目，3 分钟扫出注入类漏洞的过程】 |
| Memfit AI | "战略层规划 + 战术层执行"双引擎递归拆解一个复杂攻防任务 | 【TODO 视频剪辑：给 Memfit 一个模糊目标，展示它自动拆解 → 调用 Yaklang 工具 → 完成攻击的全过程】 |

---

## 📜 故事板：开源故事 Timeline

> 以下时间线综合自 yaklang / yakit 两仓库的真实 git 历史，以及官网 Team 页的权威背书。
> 标记 ⭐ 的是建议在官网 Timeline 页重点呈现的"大新闻"节点。

### 🌱 起源：从"安全融合"理念到一门语言（2021 之前）

- **理念萌芽**：核心团队达成共识——「**安全融合势在必行**」。与其继续做"再多一把瑞士军刀"，不如做一些**底层的安全融合、做一些基建**。
- **学术支撑**：电子科技大学网络空间安全研究院（张小松教授团队）成为 YAK 架构和思想的策源地，承担核心团队培养。
- **公司化运营**：四维创智（北京）科技发展有限公司，品牌名**万径安全**（2013 成立），使命"让世界更安全，让安全更简单"，以「**AI+YAK**」为企业核心战略。

> 创始人寄语：
> 「我希望他成为像 **Matlab** 一样的领域垂直语言，希望他成为『黑客编程』的代名词之一。」
> 「**做难且正确的事。**」

### 🚀 阶段一：Yakit 开源，国产化 BurpSuite 挑战者（2021）

- **2021-10-12** ⭐ **Yakit 首次开源**——一次性导入完整源码（commit `c71c3a9e "Yakit Source Code"`），首日即具备 MITM、Web Fuzzer、Codec、端口扫描、插件等核心能力。
- **2021-10-20** 首个公开 Tag **v1.0.8** 发布。
- **2021-11-12** 首个稳定版 **v1.0.9** 正式发布（历经 beta2 ~ beta8 + patch1）。
- **2021 Q4** 完成插件商店、网站结构树（crawler）、Linux x64 编译支持，CI 自动发布到 GitHub Release。

### 🧱 阶段二：Yakit 成熟 + Yaklang 引擎开源（2022 ~ 2023 上半年）

- **2022-08-19** Yakit 进入 **v1.1** 系列。
- **2022 全年** 补齐反连服务器、Java 反序列化、企业版雏形（2022-10-22 首次企业版 CI）、Teamserver 双模式。
- **2023-04-21** Yakit 进入 **v1.2** 系列。

### 🎯 阶段三：Yaklang 核心开源元年（2023）

- **2023-05-04** ⭐⭐ **Yaklang 核心仓库正式开源**——首提交 `47ab1423 "Init Commit for Yaklang Core"`，**首日即发布 `v1.2.0-sp6`**。开源第一天即带入 MITM / Crawlerx / Fuzz / Synscan / Chaosmaker / YakVM 等完整模块，CDSL 理念从第一天就是核心叙事。
- **2023-05-11** 首个正式 patch 版本 **v1.2.1**。
- **2023-07-28** SSA MVP 首次实现（`feat(SSA MVP) implement simple dataflow control`）——为日后 IRify 打下地基。
- **2023-11-28** LSP 语言服务器首次落地（`feat(grpc): language server basic for yak runner`）。
- **2023-12-14** ⭐ **SyntaxFlow 首次落地**（`syntaxflow ops`）——Yak 自研的漏洞特征建模 DSL 诞生。
- **2023 全年** yaklang 仓库 3,105 次提交，yakit 仓库 1,875 次提交。

### 🏆 阶段四：国家级荣誉 + 院士鉴定（2023 ~ 2025）

- **2023** ⭐⭐⭐ **YAK 入选工信部信息通信领域十大科技进展**（国家级科技荣誉）。
- **2024** ⭐⭐⭐ **YAK 教材《CDSL-YAK 网络安全领域编程语言—从入门到实践》正式出版**。
- **2024 / 2025** ⭐⭐⭐ **连续两年，YAK 被九位院士鉴定为「国内外首创、国际先进、国内领先水平」，具有完全自主知识产权。**

### ⚙️ 阶段五：编译器基础设施成熟（2024）

- **2024-01-05** Yaklang 进入 **v1.3.0**。
- **2024-03-14** AI 能力首次合入（`add glm` / `merge ai proj structure`）。
- **2024-04-18** LSP 支持 Find Reference / Definition（IDE 级体验完善）。
- **2024-04-23** SyntaxFlow 重构，进入生产可用阶段。
- **2024-04-28** Cybertunnel（反向连接基础设施）首次出现。
- **2024-06-21** ⭐ Yakit 衍生出 **ce（社区版）/ ee（企业版）双线发布**。
- **2024 全年** yaklang 4,277 次提交、yakit 2,182 次提交（双仓库历史峰值）。

### 🤖 阶段六：AI 元年（2025）

- **2025-01-10** Yakit 进入 **v1.4 系列**，确立月度发布节奏。
- **2025-02-10** MCP（Model Context Protocol）服务首次加入（`add mcp base`）。
- **2025-03-12** ⭐ **Yakit AI-Agent 功能页面落地**（AI Agent 正式进入 Yakit 主线）。
- **2025-03-27** ⭐ **IRify 正式命名**（`fix name sast to irify`），从 sast 模块独立。
- **2025-05-07** 新版 Java 反编译器（JavaJive 的前身）进入 Yakit。
- **2025-07-02 / 2025-08-12** ⭐ **AI Agent / aireact 框架成型**——Memfit AI 的技术底座。
- **2025-09-26** Yakit 知识库（KnowledgeBase）上线。
- **2025 全年** yaklang 4,342 次提交、yakit 1,982 次提交。

### 🚀 阶段七：产品矩阵成型（2026）

- **2026-05-29** ⭐ **Irify AI 代码审计**正式进入 Yakit（`Feature/irify/ai code audit new`）——IRify 升级为 SAST + AI 双引擎。
- **2026-07-03 / 07-11** Yakit 最新系列 **v1.4.8** 发布，渲染端跨入 **v2.x**（最新 `v2.07.13-render`）。
- **2026-07-13** Yaklang 最新 **v1.4.8-beta4** 发布，IM Bot 远程控制（`imcontrol`）模块上线。
- **至今（2026-07）**：Yaklang 累计 14,000+ 提交 / 600+ tag；Yakit 累计 8,400+ 提交 / 343 tag / 51 贡献者 / 84 个功能模块。

> 【TODO 配图：把上面 7 个阶段做成一条横向 timeline 视觉长图，每个阶段一张代表图 + 一个里程碑 tag】

### 🤝 大新闻与活动素材（待补齐）

> 以下是建议补充到 Timeline / 新闻墙的真实事件，**需要运营同学补充配图、链接、日期**。

- 🏅 **2023 工信部信息通信领域十大科技进展** ——【TODO 配图：获奖证书 / 颁奖现场照片】
- 📚 **2024 CDSL-YAK 教材出版** ——【TODO 配图：教材封面（已有 `static/img/team/teachingmaterials.png`）+ 新书发布会照片】
- 🎖️ **2024 / 2025 九位院士鉴定** ——【TODO 配图：鉴定会现场照片 / 鉴定意见扫描件 / 九位院士名单】
- 🎤 **Yak 线下交流 / Meetup** ——【TODO 配图：往届 Yak 用户见面会、技术沙龙、高校巡讲照片；TODO 视频剪辑：活动回顾短片】
- 🚀 **大型发布会**（万径千机 / IRify / Memfit AI 发布）——【TODO 配图：发布会主视觉 + 现场照片；TODO 视频剪辑：发布会 high light】
- 🏆 **张小松教授荣誉**：2020 第二届全国创新争先奖、2017 国家网络安全优秀人才奖、国家重点研发计划网络空间安全专项首席科学家 ——【TODO 配图：获奖证书】
- 🌐 **生态合作**：能源、金融、运营商等多行业落地 ——【TODO 配图：行业落地案例（脱敏）】
- 🎮 **社区活动**：KCon / 护网 / HackingClub / CTF 战队合作 ——【TODO 配图：大会展位、演讲照片】

---

## 💬 用户故事

> 以下评价节选自官网首页"立即体验"区块的 20 条真实用户反馈（原文位于 `src/components/Home.tsx`）。完整版本待整理为独立"用户故事"专题页。

| 用户 | 身份 / 背景 | 原话摘录 |
| --- | --- | --- |
| **ykc** | 长亭科技 | 「Yak 创造了足够的可能性，让我们可以在巨人的肩膀上发挥想象力。」 |
| **P0m32Kun** | 安全从业者（2021 年底接触 Yak） | 「初次接触 Yak 是在 2021 年底……渐渐感受到了这是个有温度的团队……希望更多的安全从业者加入国产化的建设中。」 |
| **国产大熊猫** | 生态共建贡献者 | 「Yakit 是一款优秀的国产 web 渗透工具……像一位战友陪伴在身边。」 |
| **wooluo** | 安全从业者 | 「国产渗透中单兵作业工具……代替 BurpSuite 的不二首选。」 |
| **Alex-null** | 青藤云安全 | 「Yak 是目前看到的国内最优秀的安全能力底座。」 |
| **小米粥** | 安全从业者 | 「Yakit 确实是安全领域内最适用的语言……成为安全的『基座』。」 |
| **李大壮** | Xiecat 团队 | 「成为安全领域的 Matlab。」 |
| **key@OverSpace** | 安全从业者 | 「完成了某种意义上的『大一统』。」 |

> 【TODO 配图：8 位代表性用户头像 + 身份徽章，做成"用户故事墙"】
> 【TODO 内容：补充更多深度用户故事（企业落地案例、CTF 战队使用、高校教学案例），每篇 300~500 字】

### 🌟 团队与共建者

**核心团队**（[官网 Team 页](https://yaklang.com/team)）：
- **v1ll4n / VillanCh**（项目作者，成都）· **sucre**（万径安全）· **奶权**（米斯特安全）· **f1ys0ar**（中科院博士）· **yuqi** · **small_j** · **z3r0ne** · **nonight**

**生态共建杰出贡献成员**：
- TimWhite · **ykc**（长亭科技）· **Alex-null**（青藤云安全）· 国产大熊猫 · **剑思庭**（工业安全红队 IRTeam 联合创始人）· HoAd · 斑马 · **shangzeng**（金融安全）· **李大壮**（Xiecat 团队）

**特别顾问**：
- **张小松**（电子科技大学长江学者特聘教授，2020 第二届全国创新争先奖、2017 国家网络安全优秀人才奖）
- **phith0n**（Vulhub 创始人）· **翠花哥哥**（青藤）· **LuoyinFeng**（Roblox）· **HT.Zhang**（郑州大学）· **程昊**（首席法律顾问）

**特别致谢**：
- 🎓 电子科技大学网络空间安全研究院 —— YAK 架构和思想的策源地
- 🏢 亚信安全 —— 企业安全与生态合作
- 💚 **ProjectDiscovery** —— 无私的 MIT 开源精神，为 Yak 提供 nuclei 漏洞检测能力
- 💚 **Vulhub** —— 无私的漏洞靶场基础设施提供者
- 🏴 **CNSS** —— 优秀的 CTF 战队，为 Yak 安全能力构建提供灵感

### 🤝 合作伙伴（Logo Wall）

> 以下 20 家合作伙伴 Logo 已沉淀在 `src/components/CooperativePartner.tsx`，可直接用于官网合作伙伴墙。

亚信安全 · 奇安信 · HackingClub · 米斯特安全 · 云众可信 · 58 · CTstack · E安全 · 嘶吼 · 四叶草安全 · 安全脉搏 · 智联 SRC · 度小满 · 贝壳 · 快手 · 小米 · 无糖信息 · 三叶草 · c4 安全团队

> 【TODO 配图：合作伙伴 Logo 墙（横向滚动或网格布局）】

---

## 🌍 开源生态全景

Yak Project 的开源生态不止上面四个产品，还包含以下协同子项目（数据源：`src/components/OpenSource.tsx`）：

| 项目 | 一句话 | 站点 / 仓库 |
| --- | --- | --- |
| **IRify · SSA** | 基于 SSA 中间表示的静态代码分析与代码审计平台 | [ssa.to](https://ssa.to) · [yaklang/yaklang](https://github.com/yaklang/yaklang) |
| **JavaJive** | 纯 Go 实现的 Java 工具箱：反编译 / 类解析 / 序列化 | [yaklang.io/javajive](https://yaklang.io/javajive/) · [yaklang/javajive](https://github.com/yaklang/javajive) |
| **HackSkills** | 面向 AI Agent 的攻防技能知识库（101 个深度技能 / 14 个领域） | [skills.hackbenchmark.com](https://skills.hackbenchmark.com) · [yaklang/hack-skills](https://github.com/yaklang/hack-skills) |
| **YakLab** | Web 漏洞靶场实战手册：Vulinbox 通关指南 | [/Yaklab/vulinbox/](/Yaklab/vulinbox/) · [yaklang/yaklang](https://github.com/yaklang/yaklang) |
| **HackBenchmark** | 前沿 AI Agent 对真实 Web 漏洞的可复现评测基准 | [hackbenchmark.com](https://hackbenchmark.com) · [yaklang/hackbenchmark](https://github.com/yaklang/hackbenchmark) |
| **Memfit AI** | 面向智能体系统的递归式双引擎混合架构 | [memfit.ai](https://memfit.ai) · [yaklang/yaklang/common/ai/aid](https://github.com/yaklang/yaklang/tree/main/common/ai/aid) |

---

## 🎨 品牌视觉规范

供运营同学做配图、Banner、海报时统一参照。

| 项目 | 数值 / 路径 |
| --- | --- |
| **品牌主色（蓝）** | `#3399dd`（衍生：dark `#238cd2` / darkest `#1b6da3` / light `#4aa5e1` / lightest `#79bce9`） |
| **品牌强调色（橙）** | `#ff7d23` |
| **Logo（矢量）** | `static/img/logo.svg` |
| **Logo（位图）** | `static/img/logo.png` |
| **页脚 Logo** | `static/img/footerLogo.svg` |
| **favicon** | `static/img/favicon.ico` |
| **开源子项目徽标** | `static/img/opensource/{ssa,javajive,hackskills,yaklab,hackbenchmark,memfit}.png` |
| **教材封面** | `static/img/team/teachingmaterials.png` |
| **万径安全品牌图** | `static/img/team/MegaVector.png` |

**官方 Slogan 库**（按场景选用）：

- 「**让世界更安全，让安全更简单**」—— 万径安全使命
- 「**做难且正确的事**」—— 团队口号
- 「**为网络安全而生的领域编程语言**」—— CDSL-YAK 主标
- 「**网络安全领域的首个 DSL**」—— CDSL 定位
- 「**可能是安全领域最先进的 DSL**」—— 技术对标
- 「**Static-Single-Assignment Bringing Clarity to Code**」—— IRify 副标
- 「**AI+YAK**」—— 万径安全核心战略

---

## 🛠️ 网站维护（给官网维护者）

本仓库是基于 [Docusaurus 3](https://docusaurus.io/) 构建的多语言（`zh-CN` / `en`）官网，部署于 [yaklang.com](https://yaklang.com) / [yaklang.io](https://yaklang.io)。

### 目录速览

| 目录 | 内容 |
| --- | --- |
| `docs/` | Yak 编程语言文档（语言基础 + 内置库 + API + AI 编程） |
| `products/` | Yakit 使用手册（chapter-1 ~ chapter-5 + legacy 旧版） |
| `Yaklab/` | Vulinbox 漏洞靶场实战手册 |
| `blog/` | 技术博客（200+ 篇） |
| `team/` | 团队页源 md（intro / devtalk / contact） |
| `src/pages/` | 顶级路由页（index / irify / opensource / team / cooperativePartner / download / enterpriseCollaboration） |
| `src/components/` | React 组件（Home / Team / IRify / OpenSource / CooperativePartner / MainPageContent） |
| `static/img/` | 所有品牌素材与产品截图 |

### 关键素材文件（修改产品信息时优先查这里）

1. `src/components/OpenSource.tsx` —— 开源生态项目结构化数据（产品矩阵）
2. `src/components/Team.tsx` L403-407 —— 公司定位 + 三大权威奖项原句
3. `src/components/Home.tsx` L1917-2263 —— 20 条用户评价
4. `src/components/CooperativePartner.tsx` —— 合作伙伴 logo 清单
5. `team/devtalk.md` —— 开源故事 / 初心
6. `docs/intro.md` —— Yak 语言定位原文
7. `products/intro.mdx` —— Yakit 定位原文
8. `tailwind.config.js` + `src/css/custom.scss` —— 品牌色定义

### 本地启动

```bash
# 安装依赖
yarn install

# 本地开发（默认 zh-CN）
yarn start

# 英文本地预览
yarn start --locale en

# 构建生产产物
yarn build
```

### 常用入口链接

- Yak 编程文档：[/docs/intro](https://yaklang.com/docs/intro)
- Yakit 使用手册：[/products/intro](https://yaklang.com/products/intro)
- 技术博客：[/blog](https://yaklang.com/blog)
- 开源生态：[/opensource](https://yaklang.com/opensource)
- 关于我们：[/team](https://yaklang.com/team)
- 合作伙伴：[/cooperativePartner](https://yaklang.com/cooperativePartner)
- 下载资源：[/download](https://yaklang.com/download)
- 技术白皮书：[yakit-technical-white-paper.pdf](https://oss-qn.yaklang.com/yakit-technical-white-paper.pdf)

---

## 📄 License

Yak Project 核心代码遵循 **GNU Affero General Public License v3 (AGPL-3.0)** —— 严格且具有传染性，提供网络服务的源代码必须开源。详见各仓库的 `LICENSE.md`。

本官网仓库内容（文档、文案、配图）版权所有 © Yak Project。

<footer>
  Copyright © Yak Project · 京ICP备17047700号-3 · 京公网安备11010802048712号
</footer>
