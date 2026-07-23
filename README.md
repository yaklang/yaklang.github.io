> **本仓库是 Yak Project 官网（[yaklang.com](https://yaklang.com) / [yaklang.io](https://yaklang.io)）的"故事板总稿"。**
> 它既是官网维护者的协作入口（构建方式见末尾「网站维护」），也汇集了 Yak Project 的定位、产品矩阵、Showcase、开源故事时间线、用户故事与权威背书。
> 文中标有 `【TODO 配图：...】` 的位置，是需要补齐的真实素材；产品录屏剧本统一维护在 [`playbooks/`](./playbooks/)。

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

**CDSL 教材已正式出版**：《CDSL-YAK 网络安全领域编程语言—从入门到实践》

> 【TODO 配图：CDSL 教材封面 + 编译器五件套架构图（YakVM / SSA / SyntaxFlow / LSP）】

---

## 产品矩阵

Yak Project 的产品矩阵以 CDSL-YAK 为内核，自底向上覆盖语言、平台、引擎、智能体与工具链五个层次。下方逐节展开每个对外产品；开源生态相关项目汇总于文末。

### Yakit：智能化交互式渗透测试平台

Yakit 是 Yak Project 面向安全从业者的核心桌面平台。它的核心目的，是让安全工程师在同一个工作台里打通「看流量 — 改数据包 — 跑模糊测试 — 写脚本 — 装插件」的完整渗透链路，而不必在 BurpSuite、终端、编辑器、脚本仓库之间反复横跳。它解决的是单兵作战与团队协作中长期存在的三类痛点：**工具割裂**导致上下文反复丢失，**能力难以沉淀**导致经验无法复用，**重复劳动过多**导致同类操作每次重写。为此，Yakit 把 MITM 交互式劫持、Web Fuzzer 可视化模糊测试、被动扫描、端口扫描、爬虫、反连、WebShell 管理、AI Agent 等能力整合进一个开源、免费、跨平台的客户端，并内置 Yaklang 运行时，让安全动作随时可以从「点按钮」切到「写代码」。

支撑这套完整能力的底层是 **Yak CDSL 架构优势**。Yakit 以 CDSL-YAK 领域编程语言为内核，将一门为网络安全量身定制的语言的运行时、调试能力与安全工程流程整合进同一图形化工作台。正因为内核是一门图灵完备的领域语言而非固定的功能集合，Yakit 才能做到「脚本即能力」：任何 GUI 没有覆盖的边角场景，都能用一段 Yaklang 脚本临时解决或固化为插件；任何团队私有的方法论，都能沉淀为可复用、可分发的资产。这也让 Yakit 同时具备 Yaklang 安全能力的图形化最佳实践身份——图形化即效率，插件化即生态，脚本化即无限扩展。

| 项目 | 内容 |
| --- | --- |
| 定位 | 基于 Electron + Yaklang gRPC 引擎构建的交互式应用安全测试 ALL-IN-ONE 平台 |
| 开源 | 2021-10-12 首发，完全开源、完全免费 |
| 仓库 | [github.com/yaklang/yakit](https://github.com/yaklang/yakit) |
| 截图 | 【TODO 配图：Yakit 主界面 + MITM 劫持界面 + Web Fuzzer 界面（三连图）】 |

#### 核心特点

**一、流畅的中间人劫持操作，数据包重放与模糊测试操作流**

Yakit 的 MITM 模块是交互式渗透的核心，提供手动劫持改包与自动放行被动观察两种模式，配合历史流量回溯与可视化 Web Fuzzer，构成一条完整的操作流：劫持到数据包后，可在同一界面完成查看、编辑、重放、批量处理与模糊测试，操作流程流畅高效，无需在多个工具间切换上下文，其特殊的模糊测试系统可以让 Yakit 通过 Fuzztag 语法描述注入点，一行标注即可批量生成变体并观测服务端行为，使模糊测试可视化、可组合。

**二、强大的插件功能与社区支持**

Yakit 拥有贯穿渗透全流程的插件体系，插件商店沉淀了覆盖各类安全场景的数千种插件，从通用扫描、协议处理到专项检测均可即装即用；用户既能在本地运行与调试插件，也能通过插件商店分发与共享，并经审核后发布自有插件以反哺社区。围绕插件与产品，Yakit 形成了活跃的用户交流生态，GitHub Issue 承接缺陷反馈与能力共建，社区讨论与用户互助辅助安全从业者快速上手与沉淀方法论。

**三、使用 CDSL-Yak 语言引擎，以热加载技术解决各类渗透测试边缘场景难题**

Yakit 内置 CDSL-Yak 语言引擎与运行时，并采用热加载技术：用户可以在渗透的任意环节动态加载并执行 Yaklang 脚本，无需重启平台即可对流量与行为做实时改写。这让 GUI 未覆盖的边角场景——流量修改、签名修复、鉴权重算、加解密预处理、自定义协议处理——都能用一段脚本临时解决或固化为插件。脚本即能力，热加载即实时生效，这是 Yakit 区别于固定功能集合类工具的根本所在。

**四、完全重构底层库，特殊优化国密算法等场景，兼容性极强**

Yakit 与底层 Yaklang 引擎对核心库进行了完全重构，针对网络安全实战中的关键场景做了专项优化，尤其在内置国密（SM2 / SM3 / SM4 等）算法支持、编解码链与协议适配等方面进行了强化，满足合规与国产化环境下的加密通信测试需求。同时，Yakit 兼容性极强，跨 macOS / Windows / Linux 一致可用，并兼容统信 UOS、麒麟等国产操作系统，适配单兵作业、团队协作与企业内网等多种部署形态。

### Yaklang：为网络安全而生的领域编程语言

Yaklang 是 Yak Project 的内核与起点，一门专为网络安全而生的领域编程语言。它以单二进制运行时，把端口扫描、服务扫描、MITM 劫持、HTTP 模糊测试、编解码、反连、协议解析等安全能力封装为可被脚本直接调用的内置函数。安全从业者用最少的代码即可完成过去需要多个工具拼装的工作。在 Yak 生态中，Yakit 是图形化平台，IRify 是代码分析系统，驱动它们的核心引擎均为 Yaklang。

| 项目 | 内容 |
| --- | --- |
| 定位 | 网络安全领域专用编程语言（CDSL），一门图灵完备、强类型 + 动态类型、兼具编译字节码与解释执行的语言 |
| 仓库 | [github.com/yaklang/yaklang](https://github.com/yaklang/yaklang) |
| 许可证 | AGPL-3.0 |
| 运行形式 | 单二进制，`yak script.yak` 执行脚本，`yak -c 'expr'` 执行表达式，跨 macOS / Linux / Windows 交叉编译 |
| 文档入口 | [/docs/intro](https://yaklang.com/docs/intro) |
| 截图 | 【TODO 配图：Yaklang 代码编辑 + 运行结果 + 内置库结构（三连图）】 |

#### 它解决什么问题

安全研发长期存在割裂：**安全平台的研发**（用 Golang / Java 建工程）与**安全能力的研发**（写 PoC、写扫描器、写漏洞检测逻辑）分散在不同的语言与项目中。一个安全工程师要扫描端口，要装 nmap 或调用某个 Python 库；要做模糊测试，要自己拼 HTTP 变体；要写 PoC，每次都要重写 HTTP 请求与编解码逻辑。各人实现的方案与指纹库标准不一，重复造轮子，安全能力散落各处，无法复用。

Yaklang 的目标是消除这种割裂，承担「**安全能力融合**」的职责。官方定位明确：「我们目标在提供『一站式』的安全能力基座」——PoC、扫描器、扫描模块、漏洞扫描算法，都可以用它来解决。作为安全领域的 DSL，Yaklang 内置了大量安全领域函数，安全能力直接成为语言本身的一部分，无需依赖外部工具拼装。

#### 语言特性

**一、脚本即能力，开箱即用**

Yaklang 脚本无需 `main()` 函数、无需编译步骤，写完即可运行。单二进制分发，开箱即用，可在 macOS / Linux / Windows 间交叉编译。SYN 扫描等底层能力仅需系统安装 libpcap（Windows 为 npcap）即可使用。语言支持 `var` / `=` / `:=` 变量声明、f-string 插值、`defer` / `recover()` 异常处理、`go func()` 并发与 WaitGroup 同步等现代脚本特性，语法风格对有 Go / Python 经验的开发者十分友好。

**二、内置海量安全领域函数库**

这是 Yaklang 作为 DSL 的核心价值。语言内置了覆盖渗透全流程的标准库，安全工程师无需四处寻找与维护第三方轮子：

- **扫描类**：`synscan`（SYN 端口扫描）、`servicescan`（服务扫描）、`finscan`、`subdomain`（子域名）、`spacengine`（空间测绘引擎）
- **流量类**：`mitm`（中间人劫持）、`http` / `httpool`（HTTP 请求与批量）、`fuzz`（模糊测试）、`poc`（PoC 发包）
- **编解码类**：`codec`（Base64 / Hex / URL / SM2 / SM3 / SM4 等编解码与密码学）
- **目标识别类**：`fp`（指纹识别）、`crawler` / `crawlerx`（爬虫）、`brute`（爆破）
- **基础设施类**：`dnslog` / `dns`、`csrf`、`pcapx`（流量包解析）、`ja3`、`nuclei`（兼容 nuclei 模板扫描）

一个不到 30 行的脚本就能完成端口扫描与服务识别；几行代码就能发起 HTTP 请求并解析响应。

**三、动态类型与强类型并存，编译与解释双模执行**

Yaklang 是动态类型语言，变量类型由赋值内容自动推断，开发者无需显式声明；在静态分析层面具备强类型与 SSA 中间表示支撑，使程序分析「天生友好」。脚本既可编译为字节码经 YakVM 栈式执行，也可解释运行，兼顾运行效率与开发灵活性。

**四、热加载与嵌入式执行**

Yaklang 支持热加载与嵌入式执行：脚本可在渗透的任意环节被动态加载执行（如 Yakit MITM 热加载改包），也可作为安全能力底座被其他安全产品嵌入调用。Yaklang 兼具独立编程语言与可编排安全能力运行时双重身份。

#### 架构：编译器五件套

Yaklang 是一套完整的编译器基础设施，自底向上由五个组件构成：

| 编译器组件 | 角色 |
| --- | --- |
| **CDSL Yaklang** | 网络安全领域限定语言本体（语法 / 类型系统 / 运行时） |
| **YakVM** | 网络安全领域限定语言的虚拟机（栈式字节码执行） |
| **YAK SSA** | 静态分析友好的静态单赋值中间表示 |
| **SyntaxFlow** | 语法模式匹配 DSL —— 漏洞特征代码描述语言 |
| **LSP / DSP Server** | 语言服务器协议 + 调试协议服务器（IDE 级开发体验） |

其中 YAK SSA 与 SyntaxFlow 是代码安全分析（IRify）的技术底座，LSP / DSP Server 让 Yaklang 在 Yakit 内置 Yak Runner 与 VSCode 插件中获得补全、跳转定义、参数提示与语法检查等 IDE 级开发体验。这套基础设施支撑 Yaklang 成为「安全领域的 Matlab，让黑客编程有一门属于自己的领域母语」。

#### 安装

```bash
# macOS / Linux 一键安装
bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)

# Windows
powershell (new-object System.Net.WebClient).DownloadFile('https://oss-qn.yaklang.com/yak/latest/yak_windows_amd64.exe','yak_windows_amd64.exe') && yak_windows_amd64.exe install && del /f yak_windows_amd64.exe

# 验证安装
yak version
```


### IRify：以 SSA 与人工智能为核心的现代代码安全分析系统

IRify 是 Yak Project 面向代码安全的现代分析系统。它的核心由**两套引擎**构成：一套是**以静态单赋值（SSA）为核、以自研漏洞描述语言 SyntaxFlow 为查询语言的静态分析引擎**；另一套是**以大模型与智能体循环为骨架的人工智能引擎**。两套引擎各自独立、自成体系，可以单独完成代码安全分析；同时又互相赋能、深度结合，AI 直接分析或验证 SSA 形式下的静态分析结果，并在 SyntaxFlow 规则的生成与维护中扮演关键角色。

SSA 引擎与 AI 引擎各自独立、自成体系，可以单独完成代码安全分析；两者又互相赋能、深度结合：AI 直接分析或验证 SSA 形式下的静态分析结果，并在 SyntaxFlow 规则的生成与维护中扮演关键角色。

两套引擎分工明确：SSA 引擎保证结果可复现、可验证、可工程化；AI 引擎带来语义理解、规划推理与规模化覆盖。两者结合的部分——AI 直接分析或验证 SSA 静态分析结果、AI 生成与维护 SyntaxFlow 规则——正是 IRify 区别于任何单一范式产品的关键。

IRify 作为独立产品，项目官网为 [ssa.to](https://ssa.to)。（点击可跳转）

| 项目 | 内容 |
| --- | --- |
| 定位 | 以 SSA 与人工智能为核心的现代代码安全分析系统，SSA 引擎与 AI 引擎各自独立、互相深度结合 |
| 发行形态 | 在线 [ssa.to](https://ssa.to) · Yakit IRify 发行版（社区版 / 企业版） |
| 语言支持 | Java / SpringBoot 系列、Golang、PHP、JavaScript / EcmaScript、Python、C；基于标准 eBNF g4 语法文件构建 |
| 站点 / 源码 | [ssa.to](https://ssa.to) · [yaklang/common/yak/ssa](https://github.com/yaklang/yaklang/tree/main/common/yak/ssa) · [yaklang/common/syntaxflow](https://github.com/yaklang/yaklang/tree/main/common/syntaxflow) · [SyntaxFlow 教程](https://github.com/yaklang/syntaxflow) |
| 截图 | 【TODO 配图：IRify 编译产物视图 + SyntaxFlow 规则编辑器 + 语法流可视化（三连图）】 |

#### 核心特点

**一、SSA 引擎：以静态单赋值为核、SyntaxFlow 为查询语言的静态分析**

SSA 引擎是 IRify 的可复现底座，采用两阶段架构：第一步将多语言源码编译为统一的静态单赋值（SSA，Static-Single-Assignment）中间表示，并落盘到程序数据库（支持懒加载与懒存储）；第二步使用自研的 SyntaxFlow 对 IR 产物做查询式扫描。这种「编译与分析解耦」的设计，让大型项目的 IR 可以一次编译、多次复用，编译与分析也能在不同机器上分别执行，避免每次扫描都重新解析源码。

SSA 中间表示天然对程序分析友好：它通过 Φ（Phi）节点实现双向数据流分析，支持跨包、跨文件的全局分析与路径敏感分析，并能对闭包做上下文敏感的过程间分析。配合深度关联分析（数据流 + 控制流），SSA 引擎能追踪一条数据从外部输入（source）到危险函数（sink）的完整路径，远超孤立匹配函数名的精度。

让这套架构「可被安全工程师直接使用」的核心是 **SyntaxFlow**，定位为「高级声明式模式查询语言（Advanced Declarative Pattern Query Language）」，本质上是一门**漏洞描述语言（VDL）——专门用来描述漏洞形态、让规则贴近审计直觉的领域语言**。与 CodeQL 或 Datalog 不同，SyntaxFlow 无需 import 各种表与库来描述运算特征，使用逻辑更接近人类代码审计的思考方式：直接声明「什么样的代码模式构成一个漏洞」，引擎负责在 IR 上做污点追踪与数据流查询。

一条 SyntaxFlow 规则由三部分构成：规则描述（`desc`，含 `title`、`type`、`level`、`risk`、`cve` 等）、规则内容（查询表达式）、规则输出（`check` / `alert`）。规则通过 `#->`、`-->`、`#>` 等操作符串联使用—定义链（Use-Def Chain），用 `#{include}` / `#{exclude}` / `#{until}` 做过滤，用 `as $var` 捕获节点。这套语法让规则即漏洞模型，可读、可测、可版本管理。SSA 引擎凭借这种确定性，独立承担从规则到结果的全流程分析，输出稳定、可复现、可追溯，全流程无需模型推理。

> 【TODO 配图：SSA 两阶段架构图（源码 → SSA IR → SQLite 程序库 → SyntaxFlow 查询 → 审计结果）】

**二、AI 引擎：以大模型与智能体循环为骨架的代码安全分析**

AI 引擎是 IRify 的语义推理层，独立于 SSA 引擎即可工作。它以 ReAct 智能体循环为骨架，在 Yaklang AI 体系中注册了独立的代码安全审计循环类型，桌面端通过两个专注模式触达：`code_security_audit`（整工程代码安全审计）与 `ai_skill_audit`（AI 技能驱动分析）。一次完整 AI 审计遵循四阶段流程：项目探索、扫描计划与按类别串行的双阶段审计、逐条验证与证据记录、报告生成与兜底，最终可导出 MD / PDF 报告。

作为独立引擎，AI 引擎直接对源码进行语义理解与安全分析：在无预置规则的情况下识别业务逻辑漏洞、解释代码意图、跨函数还原攻击路径，覆盖难以用纯模式匹配描述的语义型风险。这类语义型风险正是 SSA 引擎以「规则即漏洞模型」驱动的确定式分析难以触及的领域，两套引擎因此形成互补关系。

AI 引擎同样提供从结果到证据的完整链路：审计结论可指向具体代码位置与上下文，并通过 `irify-sast-skill`（MCP 工具 `yak mcp -t ssa`）注入的 SyntaxFlow 语法、约 40 个 NativeCall 与 Source / Source→Sink 模板获得稳定的能力边界，具备「查询语法报错即自愈重试」的兜底机制。

> 【TODO 配图：AI 引擎四阶段流程图（项目探索 → 双阶段扫描 → 逐条验证 → 报告生成）】

**三、双引擎深度结合：AI 直接分析与验证 SSA 静态分析结果，并驱动规则生成与维护**

IRify 的差异点在于两套引擎的深度结合：AI 在直接分析、验证与规则工程化三条链路上与 SSA 体系紧密耦合。

- **AI 直接分析 SSA 形式的静态分析结果**：AI 审计以 SSA 引擎编译产出的 IR 与已识别的风险产物为输入，对静态分析结果做直接分析与判定——确认是否构成真实可利用路径、收敛误报、补充语义化的风险描述。稳定的 SSA 产物为 AI 提供可复现的事实底座，使 AI 的语义判断更准、更稳。
- **AI 验证 SSA 静态分析结果**：对于 SSA 引擎依据 SyntaxFlow 规则产出的候选漏洞，AI 作为验证者介入，结合上下文判断其是否真实成立、利用难度如何，输出带有证据的验证结论。这条「规则粗筛 + AI 验证」的链路，是提升真实漏洞检出率、压低误报的关键。
- **AI 驱动 SyntaxFlow 规则的生成与维护**：专注模式 `write_syntaxflow_rule` 在内置规则样例知识包（`syntaxflow-aikb` 文本检索 + `syntaxflow-aikb-rag` 向量检索）上做检索，结合单文件编辑工具链与 SyntaxFlow 编译校验，迭代写出合法的 `.sf` 文件；编辑器右上角的 AI 美化入口（`sf_rule_completion` Forge）把一份 `.sf` 文本按统一规范重新排版。规则的产出与长期维护由此从「手工试错」升级为「AI 起草 + 语法自检 + 人工把关」。

这条「SSA 引擎提供可复现的静态分析与规则底座、AI 引擎提供语义理解与验证推理、两者在分析与规则两侧深度耦合」的路线，使 IRify 兼具传统 SAST 的稳定性与可工程化，以及 AI 时代的语义覆盖与规模化能力。

> 【TODO 配图：双引擎协同图（SSA 引擎 ⇄ AI 引擎，三条结合链路：直接分析 / 验证 / 规则生成维护）】

**四、规则调试系统与扫描稳定性保障**

IRify 提供从编写、调试到结果验证的完整工具链，确保规则可工程化。

- **规则编辑器**：基于 Monaco 的 `RuleEditorBox`，内置 SyntaxFlow 语言规范（`SyntaxFlowMonacoSpec`），并能在审计结果页通过 `result_id` 反查命中该结果的那条 `.sf` 规则原文，让「结果 ↔ 规则」双向可追溯。
- **规则调试器**：通过 `useRuleDebug` 驱动的调试会话（`apiSyntaxFlowScan`），支持 `pause` / `resume` / `stop` / `reset`，逐条吐出匹配节点卡片与日志，便于作者逐步确认匹配边界与误报来源。
- **规则管理**：独立「规则管理」页，区分本地规则与在线规则，支持规则分组、批量导入导出、按组在代码扫描中选取规则集；默认规则模板直接链接 [SyntaxFlow 指南](https://ssa.to/syntaxflow-guide/intro)。
- **结果可追溯**：每条审计漏洞（`SSARisk`）携带严重程度、代码定位（`CodeSourceUrl` / `CodeRange` / `CodeFragment`）、所属函数与变量、命中规则（`FromRule`）、CVE / 风险类型与修复建议；右侧详情页展示交互式数据流图，点击节点可跳转源码并对照显示 SSA IR 代码，从「危险函数到漏洞点」的全路径可回溯、可展开。
- **扫描稳定性**：扫描任务具备完整生命周期 API（`StartScan` / `ResumeScan` / `GetScanStatus`），支持断点续扫与状态查询；规则侧以稳定的 SSA 扫描产物为不稳定的 AI 审计提供支撑，目标是「同一项目多次审计输出尽量一致」。报告生成功能（MD / PDF）让结果可沉淀、可复核。

内置规则体量也支撑了这套稳定性：yaklang 引擎通过 `go:embed` 内置 **364 个 `.sf` 规则**，其中 363 个分布在 Java（154，含 Spring）、Golang（103）、PHP（42）、Python（26）、JavaScript / EcmaScript（21）、C（17）六种语言目录，另有 1 个通用规则；这些规则分布在 130 个按语言划分的 CWE 目录中，覆盖 67 个不重复 CWE 编号，并带有 IRify 专属排除策略（`rules_irify_exclude.go`）。

> 【TODO 配图：规则调试器界面（匹配节点卡片 + 日志）+ 审计结果数据流图（节点可跳源码与 IR）】

#### 录屏剧本

IRify 的三支产品演示视频已移至 [playbooks/irify.md](./playbooks/irify.md)，包括 SSA 与 SyntaxFlow、AI 代码审计、规则调试与扫描稳定性。

---

## Memfit AI：面向安全工程师的桌面 AI Agent

Memfit AI 是 Yak Project 面向网络安全领域开发的桌面 AI Agent，主要解决安全工程师在信息整理、流量分析、漏洞研究、代码审计、自动化执行和报告编写中的实际问题。产品优先适配网络安全工作，同时提供文件处理、知识检索、任务规划、工具调用和结果交付等通用 Agent 能力，也可用于研究、分析和日常自动化任务。

Memfit AI 的核心代码位于 [yaklang/common/ai/aid](https://github.com/yaklang/yaklang/tree/main/common/ai/aid)，桌面端与 Yakit 基础设施同源开发，AI 引擎和工具系统复用 Yaklang 语言生态。Yaklang 已有的 HTTP、MITM、模糊测试、端口与指纹识别、编解码、漏洞验证和代码审计能力可以直接提供给 Agent。YakScript、Yakit 插件和 MCP 服务也可以按任务接入，用于处理通用 Agent 难以覆盖的安全场景。

| 维度 | Memfit AI |
| --- | --- |
| 产品定位 | 面向安全工程师全工作流、兼具通用任务能力的垂直桌面 AI Agent |
| 工作方式 | 目标 → 计划 / 任务图 → 工具调用 → 人工复核 → 交付物 |
| 上下文入口 | 本地文件、目录、图片、知识库、HTTP Flow、Web Fuzzer 请求等结构化资源 |
| 可积累资产 | 知识库、长期记忆、AI 技能（Forge）、工具、Focus Mode |
| 核心代码 | [yaklang/common/ai/aid](https://github.com/yaklang/yaklang/tree/main/common/ai/aid) |
| 扩展能力 | Yaklang / YakScript 工具、Yakit 插件、安全分析能力与 MCP 服务 |
| 风险控制 | 文件操作权限、人工 / AI / 全自动审查模式、工具风险阈值、任务过程可追踪 |

> 【TODO 配图：Memfit AI 首页全景图。画面同时保留左侧历史记录、中间 Agent 对话与计划、右侧知识 / 技能 / 工具资源栏】

### 核心特点

#### 1. 面向安全工程师的完整工作过程

Memfit AI 可以处理 HTTP Flow、Web Fuzzer 请求、代码工程、漏洞证据和扫描结果等安全数据，也支持普通文件和目录。安全工程师可以在同一任务中完成资料读取、分析判断、工具验证和报告输出，减少在对话工具、终端、脚本和文档之间切换。产品同时保留通用 Agent 能力，安全工作之外的研究和自动化任务也可以使用。

#### 2. 复用 Yaklang 与 Yakit 生态

Memfit AI 的 AI 引擎、工具系统和安全能力与 Yaklang 共用代码和运行时。Yaklang 内置库、YakScript 脚本和 Yakit 插件可以作为 Agent 工具使用，已有安全能力不需要重新开发。对于动态签名、鉴权重算、私有协议、特殊编码和流量改写等场景，可以通过 Yaklang 脚本补充处理逻辑。

#### 3. 支持复杂任务执行和过程控制

Memfit AI 会将目标拆分为计划和具体任务，按依赖关系调用工具、读取资源和生成结果。计划、工具参数、执行结果和交付物记录在统一时间线中，用户可以查看任务过程并在需要时介入。工具调用支持人工确认、AI 判断和自动执行，并可配置文件权限、风险阈值和禁用工具。

#### 4. 工作资料和方法可以复用

知识库用于管理可查证的资料，长期记忆用于保存稳定偏好、项目约束和工作经验，AI 技能（Forge）用于定义任务流程和输出要求。工具、技能、知识和记忆可以按任务组合，并在后续会话中继续使用。模型服务与这些工作资产相互独立，更换模型不会影响已经保存的资料和流程。

> **安全提示**：端口探测、HTTP 测试、漏洞验证等能力只应在明确授权范围内使用；正式演示统一使用本机服务、脱敏流量或专用测试环境。

### 录屏剧本

Memfit AI 的四支产品演示视频已移至 [playbooks/memfit-ai.md](./playbooks/memfit-ai.md)，包括分析报告、知识网络、长期记忆、技能与工具组合。

---

## 开源项目

Yak Project 除 Yaklang、Yakit、IRify 和 Memfit AI 外，还维护了一组面向安全研发、AI Agent、代码分析和工程交付的开源项目。这些项目包括可安装的 Agent Skills、训练与检索素材、评测工具、Yaklang 仓库内的独立模块、命令行程序和跨平台基础设施。独立项目链接到仓库根目录；位于 Yaklang 单体仓库中的项目直接链接到对应源码目录。以下内容按官网长廊卡片所需的「项目介绍、核心价值、跳转地址」整理。

### Agent Skills 与知识资产

| 项目 | 项目介绍 | 核心价值 | 项目地址 |
| --- | --- | --- | --- |
| **Yak Skills** | 面向 AI Agent 的 Yaklang 编程、Yakit 使用与热加载知识库，每个专题配有可运行的 `.yak` 示例和验证工具。 | 让 Agent 能够编写、调试和验证 Yaklang 脚本，并处理 MITM、Web Fuzzer、全局热加载等实际场景。 | [GitHub](https://github.com/yaklang/yak-skills) · [在线浏览](https://skills.yaklang.io) |
| **HackSkills** | 面向 AI Agent 的攻防技能库，覆盖 Web、API、认证授权、提权、逆向、密码学和 AI 安全等领域。 | 将安全知识整理为可安装、可检索、可组合的标准 Skill，便于 Agent 在授权测试和安全研究中按需加载。 | [GitHub](https://github.com/yaklang/hack-skills) · [在线浏览](https://skills.hackbenchmark.com) |
| **IRify SAST Skill** | 将 IRify 的 SSA 编译器和 SyntaxFlow 查询能力封装为 AI Agent Skill，支持 Java、PHP、JavaScript、Go、Python、C 和 Yak。 | 让 Codex、Claude Code、Cursor 等 Agent 能够编译源码、追踪数据流并执行静态安全分析。 | [GitHub](https://github.com/yaklang/irify-sast-skill) |
| **Control Theory Skill** | 将控制论、系统论和信息论中的反馈、稳定性、黑箱实验等概念整理为 Agent 设计方法。 | 为任务规划、工具使用、错误修正和反馈回路设计提供可复用的分析框架。 | [GitHub](https://github.com/yaklang/control-theory-skill) |
| **Yaklang AI Training Materials** | Yaklang 的 AI 知识与示例素材库，包含标准库用法、实践案例、文章、脚本和评测材料。 | 为 Agent 学习 Yaklang、生成安全脚本和检索语言用法提供结构化参考。 | [GitHub](https://github.com/yaklang/yaklang-ai-training-materials) |
| **SyntaxFlow AI Training Materials** | 面向 SyntaxFlow 的语法、运算符、NativeCall、规则示例、错误处理和 RAG 构建素材。 | 支持 AI 检索 SyntaxFlow 知识、生成规则并完成语法自检与迭代修正。 | [GitHub](https://github.com/yaklang/syntaxflow-ai-training-materials) |

### 评测、代码分析与安全研究

| 项目 | 项目介绍 | 核心价值 | 项目地址 |
| --- | --- | --- | --- |
| **HackBenchmark** | 基于 Vulinbox 与 Yaklang AI Agent 体系设计的网络安全 Agent 可复现评测协议和展示站。当前仓库处于评测协议设计阶段，站点数据用于界面与方法审阅。 | 统一模型、漏洞、专注模式和评测指标，为后续真实安全能力评测提供可复现框架。 | [GitHub](https://github.com/yaklang/hackbenchmark) · [项目站点](https://hackbenchmark.com) |
| **IRify Benchmark** | 面向代码扫描引擎的轻量评测框架，维护带 Source、Sanitizer、Sink 数据流标注的基准项目。 | 以完整数据流而非单个命中行评估扫描引擎，可用于回归测试、CI 和引擎对比。 | [GitHub](https://github.com/yaklang/irify-benchmark) |
| **SyntaxFlow 教程** | SyntaxFlow 从入门到实践的教程与示例项目，涵盖 SSA 查询、Use-Def 链、跨过程分析和数据流可视化。 | 帮助安全工程师学习用声明式规则描述漏洞，并理解 IRify 的静态分析方法。 | [GitHub](https://github.com/yaklang/syntaxflow) |

### Yaklang 仓库内的独立模块

| 项目 | 项目介绍 | 核心价值 | 项目地址 |
| --- | --- | --- | --- |
| **Yaklang AI Agent Runtime** | Memfit AI 使用的 Agent 运行时，包含计划与任务图、ReAct 循环、工具系统、长期记忆、执行审查和专业 Focus Mode。 | 为 Yaklang 生态提供统一的 Agent 编排与安全工具运行基础。 | [yaklang/common/ai/aid](https://github.com/yaklang/yaklang/tree/main/common/ai/aid) |
| **Yak SSA** | Yaklang 的 SSA 中间表示与程序分析核心，包含指令模型、基本块、控制流、Phi、作用域和程序数据库。 | 为多语言代码建模、数据流分析和 IRify 静态分析提供统一程序表示。 | [yaklang/common/yak/ssa](https://github.com/yaklang/yaklang/tree/main/common/yak/ssa) |
| **SyntaxFlow Engine** | SyntaxFlow 的语法、虚拟机、内置规则、数据库、补全和扫描任务实现。 | 将安全规则编译为可执行查询，在 SSA 程序上完成模式匹配与数据流分析。 | [yaklang/common/syntaxflow](https://github.com/yaklang/yaklang/tree/main/common/syntaxflow) |
| **MiniREHS** | 零外部依赖、可移植的多正则批量匹配引擎，采用统一编译、一次扫描和候选验证的处理方式。 | 面向大量规则与网络流量的批量匹配场景，在纯 Go 与可选自带 SIMD 后端之间保持一致结果。 | [yaklang/common/minirehs](https://github.com/yaklang/yaklang/tree/main/common/minirehs) |
| **Yak SCA Engine** | 软件成分分析模块，包含 Java、Go、Node.js、Python、PHP、Ruby、Rust 和 C/C++ 等依赖文件解析器及许可证分析。 | 为依赖识别、SBOM、许可证检查和供应链风险分析提供统一基础。 | [yaklang/common/sca](https://github.com/yaklang/yaklang/tree/main/common/sca) |
| **Vulinbox** | Yaklang 内置的 Web 漏洞靶场，提供 SQL 注入、XSS、SSRF、文件上传、逻辑漏洞和组件漏洞等可复现实例。 | 为 Yakit 实操、插件验证、AI Agent 安全评测和教学提供本地授权目标。 | [yaklang/common/vulinbox](https://github.com/yaklang/yaklang/tree/main/common/vulinbox) · [实战手册](https://yaklang.com/Yaklab/vulinbox/) |

### 独立工具与工程基础设施

| 项目 | 项目介绍 | 核心价值 | 项目地址 |
| --- | --- | --- | --- |
| **JavaJive** | 从 Yaklang 中抽取的纯 Go Java 工具箱，支持 `.class`、`.jar`、`.war` 反编译，类结构解析及 Java 序列化与 JSON 互转。 | 无需 JDK、cgo 或原生运行库，可作为单二进制工具使用，也可嵌入其他 Go 项目。 | [GitHub](https://github.com/yaklang/javajive) · [项目站点](https://yaklang.io/javajive/) |
| **go-llvm** | 面向 LLVM 18 C API 的 Go 封装，兼容静态链接和动态链接，并提供 JIT 相关接口。 | 为 Yaklang 生态提供可移植、自包含的 LLVM 集成方式，降低运行环境对系统 LLVM 的依赖。 | [GitHub](https://github.com/yaklang/go-llvm) |
| **Memfit CLI** | 连接 Yaklang AI HTTP Gateway 的终端 Agent 客户端，支持会话创建、SSE 事件流、模型设置、审查策略和任务取消。 | 将 Memfit AI 的交互式任务执行能力带到终端，便于自动化流程和远程 Agent 调试。 | [GitHub](https://github.com/yaklang/yaklang-memfit-cli) |
| **Awesome Yak Scripts** | Yak 脚本集合，涵盖安全工具、依赖同步、SCA 规则生成、日志分析和插件维护。 | 提供可以直接阅读、运行和改造的 Yaklang 自动化示例。 | [GitHub](https://github.com/yaklang/awesome-yak-scripts) |
| **Yaklang VS Code Extension** | Yaklang 与 SyntaxFlow 的 VS Code 扩展，提供语法高亮、补全、参数提示、诊断、调试和快速运行。 | 将 Yaklang 的 LSP、DSP 和引擎管理能力带入通用代码编辑器。 | [GitHub](https://github.com/yaklang/yaklang-support) · [扩展市场](https://marketplace.visualstudio.com/items?itemName=v1ll4n.yak) |
| **Yakit Chrome Extension** | 用于浏览器代理切换和 Yakit 联动的 Chrome 扩展。 | 简化浏览器、系统代理与 Yakit 之间的切换，为 Web 安全测试提供浏览器侧入口。 | [GitHub](https://github.com/yaklang/yaklang-chrome-extension) |
| **page2img** | 将 PDF、XPS、EPUB 等文档逐页转换为 PNG 或 JPEG 的静态命令行工具。 | 单二进制、跨平台，适合文档预览、OCR 前处理和 Agent 文件分析流程。 | [GitHub](https://github.com/yaklang/page2img) |
| **pcap** | 面向 Go packet capture 项目的跨平台 libpcap 构建与封装。 | 通过锁定并携带 libpcap 降低开发和分发时的系统依赖，支撑 Yaklang 网络数据包能力。 | [GitHub](https://github.com/yaklang/pcap) |

> 官网展示建议：每张卡片使用项目名称、项目介绍和「查看项目」链接；核心价值可作为悬停层或滚动展开内容。Skills、评测研究、独立工具三组可以使用不同标签色，便于在横向滚动中识别。
