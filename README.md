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

Yaklang 是 Yak Project 的内核与起点——一门专为网络安全量身定制的领域编程语言。在 Yak 生态中，Yakit 是图形化平台，IRify 是代码分析系统，而驱动它们的核心引擎正是 Yaklang：它以一个单二进制运行时，把端口扫描、服务扫描、MITM 劫持、HTTP 模糊测试、编解码、反连、协议解析等安全能力封装为可被脚本直接调用的内置函数，让安全从业者用最少的代码完成过去需要多个工具与多个项目才能拼出的工作。

| 项目 | 内容 |
| --- | --- |
| 定位 | 网络安全领域专用编程语言（CDSL），一门图灵完备、强类型 + 动态类型、兼具编译字节码与解释执行的语言 |
| 仓库 | [github.com/yaklang/yaklang](https://github.com/yaklang/yaklang) |
| 许可证 | AGPL-3.0 |
| 运行形式 | 单二进制，`yak script.yak` 执行脚本，`yak -c 'expr'` 执行表达式，跨 macOS / Linux / Windows 交叉编译 |
| 文档入口 | [/docs/intro](https://yaklang.com/docs/intro) |
| 截图 | 【TODO 配图：Yaklang 代码编辑 + 运行结果 + 内置库结构（三连图）】 |

#### 它解决什么问题

安全研发长期存在一个割裂：**安全平台的研发**（用 Golang / Java 建工程）与**安全能力的研发**（写 PoC、写扫描器、写漏洞检测逻辑）被割裂在不同的语言与项目中。一个安全工程师要扫描端口，可能要装 nmap 或调用某个 Python 库；要做模糊测试，可能要自己拼 HTTP 变体；要写 PoC，可能每次都要重写一遍 HTTP 请求与编解码逻辑。每个人实现的方案与指纹库标准并不相同，结果是大量重复造轮子，安全能力散落在各处，无法复用。

Yaklang 的目标就是消除这种割裂，承担「**安全能力融合**」的职责。官方定位明确：「我们目标在提供『一站式』的安全能力基座」——你的 PoC、你的扫描器、你的扫描模块、漏洞扫描算法，都可以用它来解决。作为一门安全领域的 DSL，Yaklang 内置了大量安全领域的函数，让安全能力不再依赖外部工具的拼装，而是成为语言本身的一部分。

#### 语言特性

**一、脚本即能力，开箱即用**

Yaklang 脚本无需 `main()` 函数、无需编译步骤，写完即可运行。单二进制分发，开箱即用，可在 macOS / Linux / Windows 间交叉编译，SYN 扫描等底层能力仅需系统安装 libpcap（Windows 为 npcap）即可使用。语言支持 `var` / `=` / `:=` 变量声明、f-string 插值、`defer` / `recover()` 异常处理、`go func()` 并发与 WaitGroup 同步等现代脚本特性，语法风格对有 Go / Python 经验的开发者十分友好。

**二、内置海量安全领域函数库**

这是 Yaklang 作为 DSL 的核心价值。语言内置了覆盖渗透全流程的标准库，安全工程师不必四处寻找与维护第三方轮子：

- **扫描类**：`synscan`（SYN 端口扫描）、`servicescan`（服务扫描）、`finscan`、`subdomain`（子域名）、`spacengine`（空间测绘引擎）
- **流量类**：`mitm`（中间人劫持）、`http` / `httpool`（HTTP 请求与批量）、`fuzz`（模糊测试）、`poc`（PoC 发包）
- **编解码类**：`codec`（Base64 / Hex / URL / SM2 / SM3 / SM4 等编解码与密码学）
- **目标识别类**：`fp`（指纹识别）、`crawler` / `crawlerx`（爬虫）、`brute`（爆破）
- **基础设施类**：`dnslog` / `dns`、`csrf`、`pcapx`（流量包解析）、`ja3`、`nuclei`（兼容 nuclei 模板扫描）

一个不到 30 行的脚本就能完成端口扫描与服务识别；几行代码就能发起 HTTP 请求并解析响应。

**三、动态类型与强类型并存，编译与解释双模执行**

Yaklang 是动态类型语言，变量类型由赋值内容自动推断，开发者不必显式声明；同时在静态分析层面具备强类型与 SSA 中间表示支撑，使程序分析「天生友好」。脚本既可编译为字节码经 YakVM 栈式执行，也可解释运行，兼顾运行效率与开发灵活性。

**四、热加载与嵌入式执行**

Yaklang 支持热加载与嵌入式执行：脚本可以在渗透的任意环节被动态加载执行（如 Yakit MITM 热加载改包），也可以作为安全能力底座被其他安全产品嵌入调用。这使得 Yaklang 既是独立编程语言，也是可被编排的安全能力运行时。

**五、运行效率极高**

得益于编译字节码与栈式虚拟机执行，Yaklang 的运行效率对标编译型语言。官方给出的性能定位为：

> `Golang ≈ Yaklang ≥ JVM Based Lang >> Python`

#### 架构：编译器五件套

Yaklang 不是一个简单的脚本解释器，而是一套完整的编译器基础设施，自底向上由五个组件构成：

| 编译器组件 | 角色 |
| --- | --- |
| **CDSL Yaklang** | 网络安全领域限定语言本体（语法 / 类型系统 / 运行时） |
| **YakVM** | 网络安全领域限定语言的虚拟机（栈式字节码执行） |
| **YAK SSA** | 静态分析友好的静态单赋值中间表示 |
| **SyntaxFlow** | 语法模式匹配 DSL —— 漏洞特征代码描述语言 |
| **LSP / DSP Server** | 语言服务器协议 + 调试协议服务器（IDE 级开发体验） |

其中 YAK SSA 与 SyntaxFlow 是代码安全分析（IRify）的技术底座，LSP / DSP Server 让 Yaklang 在 Yakit 内置 Yak Runner 与 VSCode 插件中获得补全、跳转定义、参数提示与语法检查等 IDE 级开发体验。这套基础设施也让 Yaklang 的定位不止于「写脚本」，而是「成为安全领域的 Matlab，让黑客编程有一门属于自己的领域母语」。

#### 代码示例

**一行扫描一个 C 段**：

```yak
// 极简获取参数 --target 192.168.1.1/24 --port 22,80,443
scanTarget, scanPorts = cli.String("target"), cli.String("port")
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)
for result = range results {
    println(result.String())
}
```

**几行发起 HTTP 请求**：

```yak
rsp = http.Get("http://example.com")~
http.show(rsp)
```

**内置模糊测试（业内首创的 Fuzztag 可视化）**：

```yak
fReq, err := fuzz.HTTPRequest(`GET /?id={{integer(1-10)}} HTTP/1.1
Host: 127.0.0.1`)
die(err)
fReq = fReq.FuzzGetParams("testValue", "test").FuzzHTTPHeader("User-Agent", "yaklang")
fReq.Show()
```

**中间人劫持**：

```yak
go mitm.Start(8084, mitm.callback(fn(isHttps, url, request, response) {
    if isHttps { println("劫持到一个 HTTPS 流量") }
    http.show(request)
}))
```

#### 成就

Yaklang 自开源以来持续高速迭代，已成为国内安全领域最具影响力的领域编程语言之一：

| 维度 | 数据（截至 2026-07） |
| --- | --- |
| 核心语言仓库提交 | 14,000+ 次 |
| 历史发布版本 | 600+ 个 tag |
| 社区贡献者 | 50+ 人 |
| 学术指导 | 电子科技大学网络空间安全学院 |
| 权威鉴定 | 2024 / 2025 连续两年九位院士鉴定为「国内外首创、国际先进、国内领先」 |
| 国家级荣誉 | 2023 年入选工信部信息通信领域十大科技进展 |
| 正式出版物 | 《CDSL-YAK 网络安全领域编程语言—从入门到实践》 |

#### 安装

```bash
# macOS / Linux 一键安装
bash <(curl -sS -L http://oss-qn.yaklang.com/install-latest-yak.sh)

# Windows
powershell (new-object System.Net.WebClient).DownloadFile('https://oss-qn.yaklang.com/yak/latest/yak_windows_amd64.exe','yak_windows_amd64.exe') && yak_windows_amd64.exe install && del /f yak_windows_amd64.exe

# 验证安装
yak version
```

> SYN 端口扫描等底层能力依赖 libpcap：macOS `brew install libpcap`，Linux `apt install libpcap`，Windows 安装 npcap。
>
> 【TODO 配图：Yaklang 性能对比示意（Golang ≈ Yaklang ≥ JVM Based Lang >> Python）+ 编译器五件套架构图】

### IRify：以 SSA 与人工智能为核心的现代代码安全分析系统

IRify 是 Yak Project 面向代码安全的现代分析系统。它的核心由**两套引擎**构成：一套是**以静态单赋值（SSA）为核、以自研漏洞描述语言 SyntaxFlow 为查询语言的静态分析引擎**；另一套是**以大模型与智能体循环为骨架的人工智能引擎**。两套引擎各自独立、自成体系，可以单独完成代码安全分析；同时又互相赋能、深度结合，AI 直接分析或验证 SSA 形式下的静态分析结果，并在 SyntaxFlow 规则的生成与维护中扮演关键角色。

这意味着 IRify 不是「静态分析为主、AI 为辅」的传统堆叠，也不是「大模型读代码为主、工具为点缀」的另一极端。SSA 引擎保证结果可复现、可验证、可工程化；AI 引擎带来语义理解、规划推理与规模化覆盖；两者结合的部分——AI 直接分析或验证 SSA 静态分析结果、AI 生成与维护 SyntaxFlow 规则——正是 IRify 区别于任何单一范式产品的关键。

IRify 作为独立产品，项目官网为 [ssa.to](https://ssa.to)。（点击可跳转）

| 项目 | 内容 |
| --- | --- |
| 定位 | 以 SSA 与人工智能为核心的现代代码安全分析系统，SSA 引擎与 AI 引擎各自独立、互相深度结合 |
| 发行形态 | 在线 [ssa.to](https://ssa.to) · Yakit IRify 发行版（社区版 / 企业版） |
| 语言支持 | Java / SpringBoot 系列、Golang、PHP、JavaScript / EcmaScript、Python、C；基于标准 eBNF g4 语法文件构建 |
| 站点 / 仓库 | [ssa.to](https://ssa.to) · [github.com/yaklang/yaklang](https://github.com/yaklang/yaklang) · [github.com/yaklang/syntaxflow](https://github.com/yaklang/syntaxflow) |
| 截图 | 【TODO 配图：IRify 编译产物视图 + SyntaxFlow 规则编辑器 + 语法流可视化（三连图）】 |

#### 核心特点

**一、SSA 引擎：以静态单赋值为核、SyntaxFlow 为查询语言的静态分析**

SSA 引擎是 IRify 的可复现底座，采用两阶段架构：第一步将多语言源码编译为统一的静态单赋值（SSA，Static-Single-Assignment）中间表示，并落盘到程序数据库（支持懒加载与懒存储）；第二步使用自研的 SyntaxFlow 对 IR 产物做查询式扫描。这种「编译与分析解耦」的设计，让大型项目的 IR 可以一次编译、多次复用，编译与分析也能在不同机器上分别执行，避免每次扫描都重新解析源码。

SSA 中间表示天然对程序分析友好：它通过 Φ（Phi）节点实现双向数据流分析，支持跨包、跨文件的全局分析与路径敏感分析，并能对闭包做上下文敏感的过程间分析。配合深度关联分析（数据流 + 控制流），SSA 引擎能追踪一条数据从外部输入（source）到危险函数（sink）的完整路径，而不只是孤立地匹配某个函数名。

真正让这套架构「可被安全工程师直接使用」的是 **SyntaxFlow**。它被定位为「高级声明式模式查询语言（Advanced Declarative Pattern Query Language）」，本质上是一门**漏洞描述语言（VDL）——专门用来描述漏洞形态、让规则贴近审计直觉的领域语言**。与 CodeQL 或 Datalog 不同，SyntaxFlow 不需要 import 各种表与库来描述运算特征，使用逻辑更接近人类代码审计的思考方式：直接声明「什么样的代码模式构成一个漏洞」，引擎负责在 IR 上做污点追踪与数据流查询。

一条 SyntaxFlow 规则由三部分构成：规则描述（`desc`，含 `title`、`type`、`level`、`risk`、`cve` 等）、规则内容（查询表达式）、规则输出（`check` / `alert`）。规则通过 `#->`、`-->`、`#>` 等操作符串联使用—定义链（Use-Def Chain），用 `#{include}` / `#{exclude}` / `#{until}` 做过滤，用 `as $var` 捕获节点。这套语法让规则即漏洞模型，可读、可测、可版本管理。SSA 引擎凭借这种确定性，独立承担从规则到结果的全流程分析，其输出稳定、可复现、可追溯，不依赖任何模型推理。

> 【TODO 配图：SSA 两阶段架构图（源码 → SSA IR → SQLite 程序库 → SyntaxFlow 查询 → 审计结果）】

**二、AI 引擎：以大模型与智能体循环为骨架的代码安全分析**

AI 引擎是 IRify 的语义推理层，独立于 SSA 引擎即可工作。它以 ReAct 智能体循环为骨架，在 Yaklang AI 体系中注册了独立的代码安全审计循环类型，桌面端通过两个聚焦模式触达：`code_security_audit`（整工程代码安全审计）与 `ai_skill_audit`（AI 技能驱动分析）。一次完整 AI 审计遵循四阶段流程：项目探索、扫描计划与按类别串行的双阶段审计、逐条验证与证据记录、报告生成与兜底，最终可导出 MD / PDF 报告。

作为独立引擎，AI 引擎直接对源码进行语义理解与安全分析：它能在没有预置规则的情况下识别业务逻辑漏洞、解释代码意图、跨函数还原攻击路径，覆盖那些难以用纯模式匹配描述的语义型风险。这是 SSA 引擎以「规则即漏洞模型」驱动的确定式分析所不易触及的领域，两者因此形成互补而非替代关系。

AI 引擎同样提供从结果到证据的完整链路：审计结论可指向具体代码位置与上下文，并通过 `irify-sast-skill`（MCP 工具 `yak mcp -t ssa`）注入的 SyntaxFlow 语法、约 40 个 NativeCall 与 Source / Source→Sink 模板获得稳定的能力边界，具备「查询语法报错即自愈重试」的兜底机制。

> 【TODO 配图：AI 引擎四阶段流程图（项目探索 → 双阶段扫描 → 逐条验证 → 报告生成）】

**三、双引擎深度结合：AI 直接分析与验证 SSA 静态分析结果，并驱动规则生成与维护**

IRify 真正的差异点在于两套引擎的深度结合——既不是简单的「SAST 先扫、AI 后解释」，也不是「AI 先看、工具补刀」，而是 AI 在直接分析、验证与规则工程化三条链路上与 SSA 体系紧密耦合。

- **AI 直接分析 SSA 形式的静态分析结果**：AI 审计并非凭空推理，而是以 SSA 引擎编译产出的 IR 与已识别的风险产物为输入，对静态分析结果做直接分析与判定——确认是否构成真实可利用路径、收敛误报、补充语义化的风险描述。稳定的 SSA 产物为 AI 提供了可复现的事实底座，AI 的语义判断因此更准、更稳。
- **AI 验证 SSA 静态分析结果**：对于 SSA 引擎依据 SyntaxFlow 规则产出的候选漏洞，AI 可作为验证者介入，结合上下文判断其是否真实成立、利用难度如何，输出带有证据的验证结论，而不是把规则命中的原始结果原样抛给人工。这条「规则粗筛 + AI 验证」的链路，是提升真实漏洞检出率、压低误报的关键。
- **AI 驱动 SyntaxFlow 规则的生成与维护**：聚焦模式 `write_syntaxflow_rule` 在内置规则样例知识包（`syntaxflow-aikb` 文本检索 + `syntaxflow-aikb-rag` 向量检索）上做检索，结合单文件编辑工具链与 SyntaxFlow 编译校验，迭代写出合法的 `.sf` 文件；编辑器右上角的 AI 美化入口（`sf_rule_completion` Forge）则负责把一份 `.sf` 文本按统一规范重新排版。这让规则的产出与长期维护从「手工试错」变为「AI 起草 + 语法自检 + 人工把关」。

这条「SSA 引擎提供可复现的静态分析与规则底座、AI 引擎提供语义理解与验证推理、两者在分析与规则两侧深度耦合」的路线，使 IRify 既具备传统 SAST 的稳定性与可工程化，又具备 AI 时代的语义覆盖与规模化能力。

> 【TODO 配图：双引擎协同图（SSA 引擎 ⇄ AI 引擎，三条结合链路：直接分析 / 验证 / 规则生成维护）】

**四、规则调试系统与扫描稳定性保障**

为了让规则可工程化，IRify 提供了从编写、调试到结果验证的完整工具链，而非「写了规则只能凭运气」。

- **规则编辑器**：基于 Monaco 的 `RuleEditorBox`，内置 SyntaxFlow 语言规范（`SyntaxFlowMonacoSpec`），并能在审计结果页通过 `result_id` 反查命中该结果的那条 `.sf` 规则原文，让「结果 ↔ 规则」双向可追溯。
- **规则调试器**：通过 `useRuleDebug` 驱动的调试会话（`apiSyntaxFlowScan`），支持 `pause` / `resume` / `stop` / `reset`，逐条吐出匹配节点卡片与日志，便于作者逐步确认匹配边界与误报来源。
- **规则管理**：独立「规则管理」页，区分本地规则与在线规则，支持规则分组、批量导入导出、按组在代码扫描中选取规则集；默认规则模板直接链接 [SyntaxFlow 指南](https://ssa.to/syntaxflow-guide/intro)。
- **结果可追溯**：每条审计漏洞（`SSARisk`）携带严重程度、代码定位（`CodeSourceUrl` / `CodeRange` / `CodeFragment`）、所属函数与变量、命中规则（`FromRule`）、CVE / 风险类型与修复建议；右侧详情页展示交互式数据流图，点击节点可跳转源码并对照显示 SSA IR 代码，从「危险函数到漏洞点」的全路径可回溯、可展开。
- **扫描稳定性**：扫描任务具备完整生命周期 API（`StartScan` / `ResumeScan` / `GetScanStatus`），支持断点续扫与状态查询；规则侧以稳定的 SSA 扫描产物为不稳定的 AI 审计提供支撑，目标是「同一项目多次审计输出尽量一致」。报告生成功能（MD / PDF）让结果可沉淀、可复核。

内置规则体量也支撑了这套稳定性：yaklang 引擎通过 `go:embed` 内置 **364 个 `.sf` 规则**，其中 363 个分布在 Java（154，含 Spring）、Golang（103）、PHP（42）、Python（26）、JavaScript / EcmaScript（21）、C（17）六种语言目录，另有 1 个通用规则；这些规则分布在 130 个按语言划分的 CWE 目录中，覆盖 67 个不重复 CWE 编号，并带有 IRify 专属排除策略（`rules_irify_exclude.go`）。

> 【TODO 配图：规则调试器界面（匹配节点卡片 + 日志）+ 审计结果数据流图（节点可跳源码与 IR）】

#### 演示视频脚本

下列脚本用于 IRify 系列宣传视频的拍摄与剪辑，**三段各自独立，每段对应一支小视频**，可单独发布，也可串联成合集。每段包含：目标、建议时长、录屏前准备、分镜清单（含时间码、画面、操作、字幕与解说）、可直接复制的 SyntaxFlow 规则或工程样本、所需素材清单与拍摄注意。

所有录屏一律使用本地脱敏工程或公开靶场源码（如 Vulhub 中可公开引用的项目），严禁出现客户真实代码、真实凭据与未授权的内部资产。

---

##### 片段 1：从源码到 SSA IR，再用 SyntaxFlow 一行表达漏洞规则

**目标**：让观众在 80 秒内看懂 IRify 的两阶段架构——「项目编译为 SSA IR 落库」与「SyntaxFlow 在 IR 上做查询」，建立「编译器级分析、规则贴近审计直觉」的认知。

**建议时长**：70 ~ 80 秒。

**录屏前准备**：

- 启动 IRify 发行版（Yakit 构建变量 `REACT_APP_PLATFORM=irify`），确认侧边栏为紫色主题的「代码审计」组，可见 项目管理、代码审计、代码扫描、规则管理、审计漏洞、Java 反编译。
- 准备一个本地 Java 工程，含一处明显的 JDBC 直接拼接 SQL（示例如下），工程路径形如 `/tmp/irify-demo/sqli`。
- 在「代码审计」页确认新建项目表单可见：项目路径、语言、编译速度（peephole 0~3）、执行类型（query / scan / debug）。
- 预置下方 JDBC SQL 注入 SyntaxFlow 规则，便于粘贴演示。

**分镜清单**：

1. **0~10s｜定位 IRify**：从紫色主题侧边栏点开「代码审计」组，镜头依次扫过 项目管理 / 代码审计 / AI 代码审计 / 代码扫描 / 规则管理 / 审计漏洞，叠加字幕「IRify：以 SSA 为核心的代码安全分析系统」。字幕：「两阶段架构：编译为 SSA IR，再用 SyntaxFlow 查询」。
2. **10~28s｜编译为 SSA IR**：进入「代码审计」页，点击新建项目，拖入 `/tmp/irify-demo/sqli`，语言选 Java，编译速度选「Medium」，执行类型选 `query`；点击编译，展示「SSA 项目编译」过程，并切到本地终端或日志窗口展示 `init ssa database: .../default-yakssa.db`，说明 IR 已落 SQLite 程序库。字幕：「源码编译为 SSA IR，落 SQLite 程序库，可一次编译多次复用」。
3. **28~50s｜一条 SyntaxFlow 查漏洞**：在查询框粘贴下方 JDBC SQL 注入规则，运行；右侧审计结果出现命中，展示 `漏洞详情` 与 `规则编写` 子面板。镜头随后停在「语法流可视化」，展示从危险函数到漏洞点的路径图，点击节点跳转源码并对照显示 SSA IR。字幕：「SyntaxFlow 是漏洞描述语言（VDL），规则即漏洞模型」。
4. **50~66s｜规则三段式结构**：在规则编辑器里展开规则的 `desc`（标题、类型、严重程度、风险类型）、规则内容、`check` / `alert` 输出，逐段高亮说明，强调「声明式、贴近审计直觉、无需 import 各种表」。字幕：「desc / 规则内容 / 输出，三段式结构，可读可测可版本管理」。
5. **66~80s｜收束**：镜头回到两阶段架构示意图（编译 → IR 库 → 查询 → 结果），淡出。字幕：「以 SSA 为核，用 SyntaxFlow 描述漏洞，IRify 让代码审计贴近编译器」。

**可直接复制的本地 Java 工程（JDBC 拼接 SQL 示例）**：

```java
// /tmp/irify-demo/sqli/src/main/java/demo/UserController.java
package demo;

import java.sql.*;

public class UserController {
    public ResultSet findByName(Connection conn, String name) throws SQLException {
        // 漏洞点：外部输入 name 直接拼接到 SQL
        String sql = "SELECT * FROM users WHERE name = '" + name + "'";
        Statement stmt = conn.createStatement();
        return stmt.executeQuery(sql);
    }
}
```

**可直接复制的 SyntaxFlow 规则（JDBC SQL 注入 sink，精简示例）**：

```text
desc(
    title: "JDBC Raw Statement SQL Injection",
    title_zh: "JDBC 直接拼接 SQL 注入",
    type: vuln,
    level: high,
    risk: "sqli",
)

// 1. 捕获 Statement 且未经过 set* 过滤
DriverManager.getConnection().createStatement() as $stmt;
$stmt?{!.set*()} as $checkedStmt;

// 2. 提取 executeXxx 的第一个参数作为 sink
$checkedStmt.execute*(*<slice(start=1)> as $sink);
check $sink;

// 3. 命中外部输入即告警
$sink #{
    include: `* & $entry`,
}-> as $high;
alert $high for {
    message: "发现 JDBC 代码中存在直接可控的 SQL 注入拼接。",
    level: high,
    risk: "sqli",
};
```

**解说要点**：

- IRify 先把项目编译为统一的 SSA 中间表示并落 SQLite 程序库，编译与分析解耦，大型项目可一次编译多次复用。
- SyntaxFlow 是自研的漏洞描述语言（VDL），用贴近审计直觉的语法描述漏洞形态，无需像 CodeQL / Datalog 那样 import 各种表。
- 规则三段式（desc / 内容 / 输出）让规则即漏洞模型，可读、可测、可版本管理。

**所需素材**：

- IRify 侧边栏与代码审计页录屏（新建项目 / 编译 / 查询）。
- SSA 数据库日志截图（`init ssa database`）。
- 语法流可视化录屏（节点跳源码 + IR 对照）。
- 静态配图建议：SSA 两阶段架构图、规则三段式结构图、语法流可视化截图。

**拍摄注意**：

- 编译过程可能耗时，建议剪辑压缩，但必须保留「编译开始 → 编译完成 → IR 落库」的因果连续。
- 语法流可视化镜头须展示「点击节点跳源码」的交互，这是区别于普通 grep 类工具的关键观感。
- 如使用 Vulhub 等公开项目作为样本，请在字幕中注明出处，避免被误认为客户资产。

---

##### 片段 2：AI Native 代码审计与 AI 辅助生成 SyntaxFlow 规则

**目标**：让观众在 80 秒内看懂 IRify 的「AI 全程赋能」——既能让 AI 直接做整工程审计，也能让 AI 生成可执行的 SyntaxFlow 规则，且结果有稳定 SSA 产物兜底。

**建议时长**：70 ~ 80 秒。

**录屏前准备**：

- 启动 IRify 发行版，准备一个已编译为 SSA IR 的本地工程（复用片段 1 的项目即可，确保 IR 已落库）。
- 进入「AI 代码审计」页，确认可见聚焦模式选择（`code_security_audit` 整工程代码审计 / `ai_skill_audit` AI 技能驱动分析）与三步引导（选项目目录、选审计风格、开始审计）。
- 在规则管理页预置一个待美化的粗糙 `.sf` 文件，用于演示 AI 美化（`sf_rule_completion`）与规则自动生成（`write_syntaxflow_rule`）。

**分镜清单**：

1. **0~10s｜AI 审计入口**：进入「AI 代码审计」页，展示 ReAct 智能体对话界面与聚焦模式选择，叠加字幕「IRify AI 代码审计：ReAct 智能体 + 四阶段流程」。字幕：「AI 不只解释结果，而是驱动整个审计循环」。
2. **10~30s｜四阶段审计**：按引导选择已编译项目与 `code_security_audit` 风格，点击「开始审计」；镜头依次展示四个阶段的进度与产物——项目探索、按类别串行的双阶段审计、逐条验证与证据记录、报告生成与兜底。字幕：「探索 → 双阶段扫描 → 逐条验证 → 报告生成，可导出 MD / PDF」。
3. **30~50s｜证据可追溯**：在审计结果中点开一条高风险项，展示其指向的代码位置与 SSA IR 证据，强调「AI 的结论背后有稳定的 SSA/SyntaxFlow 产物支撑」。字幕：「稳定的扫描产物为 AI 审计兜底，结果更准也更稳」。
4. **50~68s｜AI 生成规则**：切到规则编写页，演示 AI 辅助生成——在聚焦模式 `write_syntaxflow_rule` 下输入自然语言需求（例如「检测 Golang 中 `db.QueryRow` 参数来自 `fmt.Sprintf` 的 SQL 注入」），展示检索内置规则样例知识包（`syntaxflow-aikb` + `syntaxflow-aikb-rag`）后迭代生成的 `.sf` 文件，并在 `check-syntaxflow-syntax` 自检通过后填入编辑器。字幕：「AI 在内置知识包上检索，迭代生成并通过语法自检的 `.sf` 规则」。
5. **68~74s｜AI 美化规则**：点开规则编辑器右上角的 AI 美化入口（`sf_rule_completion`），展示一份粗糙 `.sf` 被按统一规范重新排版后的对照。字幕：「编辑器右上角 AI 美化，规则按统一规范重排」。
6. **74~80s｜收束**：镜头回到 AI 审计对话与生成规则并置，淡出。字幕：「SSA/SyntaxFlow 负责可复现定位，AI 负责规划与语义理解」。

**可直接复制的自然语言规则生成指令（用于 `write_syntaxflow_rule`）**：

> 生成一条 Golang 的 SyntaxFlow 规则：检测 `database/sql` 中 `db.QueryRow` 的第一个参数，当它由 `fmt.Sprintf` 拼接且拼接中包含外部输入时，告警 SQL 注入（risk: sqli，level: high）。

**期望 AI 生成的 SyntaxFlow 规则（用于对照与解说，可不完全逐字出镜）**：

```text
desc(
    title: "Golang SQL Injection via fmt.Sprintf",
    title_zh: "Golang fmt.Sprintf 拼接导致的 SQL 注入",
    type: vuln,
    level: high,
    risk: "sqli",
)

<include('golang-database-sql')> as $db;
<include('golang-user-input')> as $input;

// QueryRow 第一个参数的定义链中包含 fmt.Sprintf 拼接
$db.QueryRow(* #-> as $param);
$param & $input as $mid;

check $mid;
alert $mid for {
    message: "Golang 代码中 QueryRow 参数由 fmt.Sprintf 拼接外部输入，存在 SQL 注入。",
    level: high,
    risk: "sqli",
};
```

**解说要点**：

- IRify 的 AI 审计以 ReAct 智能体循环为骨架，四阶段流程可导出 MD / PDF 报告，并非只做结果解释。
- AI 生成的 SyntaxFlow 规则基于内置知识包检索与编译自检，合法率与可用率显著提升。
- 「稳定的 SSA/SyntaxFlow 产物 + 不稳定的纯 AI 审计」互为支撑，是 IRify 区别于裸大模型读代码的关键。

**所需素材**：

- AI 代码审计页录屏（四阶段流程 / 结果证据跳源码与 IR）。
- 规则生成录屏（`write_syntaxflow_rule` 检索 → 生成 → 自检）。
- AI 美化前后对照录屏（`sf_rule_completion`）。
- 静态配图建议：四阶段流程图、AI 规则生成对照图、规则美化前后对照图。

**拍摄注意**：

- 四阶段流程建议用进度条或阶段卡剪辑串联，避免长时间等待 AI 推理。
- AI 生成规则的镜头必须展示「检索 → 生成 → 语法自检」全过程，不得只展示最终 `.sf`。
- 所有审计结论须落在本地脱敏工程上，禁止出现真实客户代码与未授权资产。

---

##### 片段 3：规则调试器与扫描稳定性 —— 让规则可工程化

**目标**：让观众在 70 秒内看懂 IRify 如何让 SyntaxFlow 规则「写得出来、调得明白、扫得稳定」，建立「规则可工程化」的信任。

**建议时长**：60 ~ 70 秒。

**录屏前准备**：

- 启动 IRify 发行版，复用一个已编译为 SSA IR 的本地工程。
- 进入「规则管理」页，确认可见：本地规则 / 在线规则、规则分组、批量导入导出、按组在代码扫描中选取规则集、规则调试入口（`ExecType = debug`）。
- 准备一条待调试的规则（下方「路径穿越」示例），故意保留一处轻微误报边界，便于演示调试与 `include` / `exclude` 收敛。
- 准备一个体现「规则即结果溯源」的已命中漏洞项，演示通过 `result_id` 反查 `.sf` 原文。

**分镜清单**：

1. **0~10s｜规则管理中心**：打开「规则管理」页，展示本地规则 / 在线规则与规则分组，镜头扫过批量导入导出按钮与「按组在代码扫描中选取规则集」的能力。字幕：「规则管理：本地 / 在线、分组、批量迁移、按组扫描」。
2. **10~26s｜规则调试器**：选中待调试规则，执行类型切到 `debug` 触发调试会话（`apiSyntaxFlowScan`）；展示调试器的 `pause` / `resume` / `stop` / `reset` 控件，逐条吐出的匹配节点卡片与日志。字幕：「调试器逐条吐出匹配节点，可暂停 / 继续 / 重置」。
3. **26~42s｜收敛误报**：在编辑器里为规则增加 `#{exclude}` / `#{until}` 过滤，重新调试，展示匹配节点数量减少、误报项消失，强调「规则边界可见、可调」。字幕：「include / exclude / until 让规则边界可调，收敛误报」。
4. **42~56s｜结果 ↔ 规则双向追溯**：切到「审计漏洞」，点开一条命中项，展示右侧 `RuleEditorBox` 通过 `result_id` 反查命中的 `.sf` 原文，并把数据流图、源码、SSA IR 三者并置；点击图节点跳源码。字幕：「结果可反查命中规则，数据流图、源码、IR 三者并置」。
5. **56~64s｜扫描稳定性**：展示扫描任务状态（`StartScan` / `ResumeScan` / `GetScanStatus`）与「只看新增」的扫描对比，强调断点续扫与多次审计一致性；叠加内置规则规模信息（364 条 `.sf` / 67 个不重复 CWE 编号 / 六语言）。字幕：「断点续扫 + 扫描对比 + 364 条内置规则，开箱即用」。
6. **64~70s｜收束**：镜头回到规则编辑器与数据流图并置，淡出。字幕：「从编写到调试到验证，IRify 让 SyntaxFlow 规则可工程化」。

**可直接复制的 SyntaxFlow 规则（路径穿越调试示例）**：

```text
desc(
    title: "Path Traversal via File API",
    title_zh: "文件 API 路径穿越",
    type: vuln,
    level: high,
    risk: "path-traversal",
)

// 捕获常见文件写入 / 读取 sink
(new java.io.FileOutputStream(* as $sink))
#{
    exclude: `* & $sanitized`,
}-> as $hit;

alert $hit for {
    message: "文件写入参数疑似来自外部输入，存在路径穿越风险。",
    level: high,
    risk: "path-traversal",
};
```

**可直接复制的 NativeCall 与过滤片段（用于解说操作符）**：

- Use-Def 链：`$sink #-> as $param`
- 过滤收敛：`#{include: ...}` / `#{exclude: ...}` / `#{until: ...}`
- NativeCall 取值：`<getCallee>` / `<getObject>` / `<getFunc>` / `<fullTypeName>` / `<slice(start=1)>`
- 捕获与告警：`as $var` / `check $var` / `alert $var for { ... }`

**解说要点**：

- 规则调试器支持暂停 / 继续 / 停止 / 重置，逐条吐出匹配节点，让作者能看清规则边界。
- `include` / `exclude` / `until` 让规则可调，误报可收敛，规则工程化有了抓手。
- 审计结果可反查命中规则，数据流图、源码、SSA IR 三者并置，从结果到规则到证据全链可追溯。
- 扫描任务可断点续扫、可对比新增，配合 364 条内置规则（67 个不重复 CWE 编号、六语言），开箱即用。

**所需素材**：

- 规则管理页录屏（分组 / 批量导入导出 / 按组扫描）。
- 规则调试器录屏（`debug` 会话 / 匹配节点卡片 / 日志 / 控件）。
- 审计漏洞页录屏（`result_id` 反查规则 + 数据流图 + 源码 + IR）。
- 静态配图建议：规则调试器截图、结果 ↔ 规则双向追溯截图、内置规则规模统计图。

**拍摄注意**：

- 调试器镜头建议先展示「未过滤时多匹配」，再展示「加 exclude 后收敛」，用数量变化体现「可调」。
- `result_id` 反查规则的镜头须让观众看到「点一条漏洞 → 右侧出现命中它的 `.sf` 原文」的因果链。
- 扫描对比与断点续扫如在该版本尚未完全上线，应以字幕说明「部分能力即将上线」，避免误导。

---

> 【TODO 视频剪辑：IRify 三段各自成片，单支建议 60 ~ 80 秒；如需合集，可串联上述三段并在段间加入紫色品牌过场】
> 【TODO 配图：SSA 两阶段架构图、SyntaxFlow 规则三段式结构图、语法流可视化截图、规则调试器截图、AI 代码审计四阶段流程图，共五张静态截图，用于官网首页与文档页】

---

## Memfit AI：集成知识、记忆与工具的桌面 AI Agent

> **面向专业工作的桌面 AI Agent，统一承载计划、执行、复核与知识沉淀。**

Memfit AI 是基于 Yakit 桌面框架与 Yaklang AI Runtime 构建的独立 AI Agent 应用。统一工作台集成对话、文件、知识库、长期记忆、技能、工具与 MCP 服务。Agent 根据目标生成计划，执行任务与工具调用，在关键节点请求人工确认，并交付文件或结构化结果。

| 维度 | Memfit AI |
| --- | --- |
| 产品定位 | 面向研究、分析与自动化工作的可扩展桌面 AI Agent |
| 工作方式 | 目标 → 计划 / 任务图 → 工具调用 → 人工复核 → 交付物 |
| 上下文入口 | 本地文件、目录、图片、知识库、HTTP Flow、Web Fuzzer 请求等结构化资源 |
| 可积累资产 | 知识库、长期记忆、AI 技能（Forge）、工具、Focus Mode |
| 扩展能力 | Yaklang / YakScript 工具、MCP 服务、插件生态与安全分析能力 |
| 风险控制 | 文件操作权限、人工 / AI / 全自动审查模式、工具风险阈值、任务过程可追踪 |

> 【TODO 配图：Memfit AI 首页全景图。画面同时保留左侧历史记录、中间 Agent 对话与计划、右侧知识 / 技能 / 工具资源栏】

### 核心特点

#### 1. 目标规划与可审阅执行

Memfit AI 将复杂目标转换为计划与任务图，并在 ReAct 循环中搜索工具、读取资源、并发处理子任务和生成 Artifact。计划、任务、工具参数与执行结果均记录在时间线中，支持全过程检查与人工介入。

- **可执行计划**：支持计划生成、任务依赖、并发任务与执行中调整。
- **工具调用可复核**：可选择人工确认、AI 风险判断或全自动执行，并设置风险阈值。
- **权限与风险控制**：文件操作权限、运行时审查与工具禁用均可单独配置。
- **交付物输出**：支持输出文件与 Artifact，并保留完整处理过程。

#### 2. 知识、向量与实体关系联合索引

Memfit AI 的知识库由 Yaklang RAG 引擎驱动。资料导入后，可选择“知识 + 向量”快速索引或增强知识图谱索引。增强索引统一组织实体、关系、知识条目与向量。知识库支持知识、向量、实体关系图和潜在问题视图，并可作为结构化上下文挂载至 Agent。

- 支持多文件导入、分段参数与索引进度管理。
- 支持知识、向量、实体、关系图等不同视角。
- 支持 HNSW 向量检索，并可配置本地 Embedding 服务完成知识索引。
- 支持知识库导入 / 导出，形成可迁移的 `.rag` 资产。

> **部署说明**：知识索引可使用本地 Embedding 服务。模型推理位置与数据路径由用户配置的模型服务决定。

#### 3. 可检索、可管理的长期记忆

Agent 从会话中提取可长期复用、具备独立上下文的信息，包括稳定偏好、项目约束和已验证的工作方法。Memfit AI 使用 C.O.R.E. P.A.C.T. 维度辅助记忆整理，并生成摘要、标签和潜在问题。临时日志与一次性状态保留在会话上下文中。

- 新会话可以检索并复用相关记忆，减少重复交代背景。
- 结合关键词与语义检索定位历史经验；Embedding 不可用时仍可保留非语义检索路径。
- 记忆库提供查看、筛选、搜索与删除入口。
- 记忆与知识库职责分离：前者保存“长期有效的经验和偏好”，后者承载“可查证的资料”。

#### 4. 技能、工具、MCP 与 Yaklang 能力可以组合

Memfit AI 将流程定义与动作执行分别沉淀为可复用资产。AI 技能（Forge）定义任务流程和输出约束，工具执行具体动作，Focus Mode 组织特定场景的 Agent 循环，MCP 将外部服务接入统一工具入口。用户可通过搜索和 `@` 引用按任务组合这些能力。

底层 Yaklang Runtime 提供文件处理、HTTP 请求、数据转换、端口与指纹分析、JWT 分析、代码审计等工具与专业循环。Agent 可接收 HTTP Flow、Web Fuzzer 请求等结构化对象，并基于原始证据继续分析。

> **安全提示**：端口探测、HTTP 测试、漏洞验证等能力只应在明确授权范围内使用；正式演示统一使用本机服务、脱敏流量或专用测试环境。

#### 5. 模型配置与工作资产解耦

Memfit AI 的模型配置与知识、记忆、技能和工具资产彼此解耦。用户可以按任务配置不同的模型服务，工作流与沉淀资产仍留在统一工作台中。产品界面已为 OpenAI、DeepSeek、Gemini、Ollama、Moonshot、通义、OpenRouter、SiliconFlow 等服务提供配置入口，实际可用模型、能力与数据策略以对应服务为准。

### 视频脚本 1：一句话生成可审阅的分析报告

**片名**：`从目标到交付：Memfit AI 生成分析报告`

**时长**：75 ~ 90 秒

**演示重点**：目标规划、文件读取、工具调用、人工确认与文件交付，全过程可检查、可暂停、可审查。

**演示前准备**：

1. 新建空白目录 `memfit-order-demo/`。
2. 放入 `brief.md`：

```markdown
# 异常订单分析要求

- 识别金额、退款率或登录地区明显异常的订单。
- 每条判断必须引用订单号和原始字段。
- 结论按高、中、低风险分组。
- 保留原始数据，仅生成 output/analysis.md。
```

3. 放入 `orders.csv`：

```csv
order_id,user,amount,refund_count,login_region
O-1001,alice,199,0,Shanghai
O-1002,bob,12999,4,Unknown
O-1003,carol,299,0,Beijing
O-1004,dave,8999,3,Unknown
```

4. 在设置中启用文件操作，并将审查方式设为“人工确认”。

**分镜与旁白**：

1. **0 ~ 8 秒｜加载工作上下文**
   - 画面：Memfit AI 首页，拖入 `memfit-order-demo/` 目录；右侧文件资源立即出现。
   - 旁白：“Memfit AI 将文件、任务约束与执行过程放在同一工作空间中。”

2. **8 ~ 20 秒｜提交目标与执行约束**
   - 输入：

```text
读取 @brief.md 和 @orders.csv，分析异常订单并生成 `output/analysis.md`。
先给出计划；任何写文件操作都必须等我确认。保持原始文件不变。
```

   - 画面：Agent 生成计划卡片，包含“读取要求 → 校验数据 → 识别异常 → 生成报告”。
   - 旁白：“Agent 首先生成可检查的执行计划，再按照任务依赖推进工作。”

3. **20 ~ 38 秒｜任务和证据一起推进**
   - 画面：通过计划确认；任务树开始执行。文件读取、数据检查和异常归类依次出现，镜头短暂展示工具参数与引用的订单行。
   - 旁白：“时间线记录每项工具调用、资源输入和中间结果。”

4. **38 ~ 53 秒｜写入前请求人工确认**
   - 画面：创建 `output/analysis.md` 前弹出审查卡片；展开参数，确认目标路径为输出目录且原始 CSV 保持不变，再点击同意。
   - 旁白：“文件写入前展示目标路径与操作参数，由用户完成确认。”

5. **53 ~ 72 秒｜交付物落地**
   - 画面：Artifact 卡片出现，打开 `analysis.md`；报告按风险分组，引用 `O-1002`、`O-1004` 及对应字段。
   - 旁白：“执行结果保存为可继续评审和提交的文件。”

6. **72 ~ 90 秒｜回看完整链路**
   - 画面：快速回拉时间线，计划、任务、工具审查、Artifact 串成一条链；定格产品全景。
   - 字幕：“目标 → 计划 → 工具 → 审查 → 交付物”

**验收标准**：

- 镜头中必须出现一次计划确认和一次写文件确认。
- 最终文件路径必须是 `output/analysis.md`，原始文件修改时间保持不变。
- 报告中的每项判断均需回指 CSV 原始字段。

### 视频脚本 2：把散落资料变成可追溯的知识网络

**片名**：`从资料到知识网络：构建可查询知识库`

**时长**：75 ~ 90 秒

**演示重点**：知识、向量、实体与关系联合索引；Agent 基于已挂载知识库生成可追溯回答。

**演示前准备**：

- `product-overview.md`：写明 Demo 产品的模块、版本与负责人。
- `faq.txt`：写 5 条仅在演示资料中存在的售后规则。
- `incidents.csv`：写 6 条虚构故障，包含日期、模块、原因和解决方案。
- 在其中植入一个可验证的跨文件问题，例如：`Atlas Sync` 模块负责人是“林澈”，最近一次故障原因是“旧版签名缓存未失效”。

**分镜与旁白**：

1. **0 ~ 10 秒｜资料散落**
   - 画面：Finder 中依次选中三份资料，切到 Memfit AI 知识库首页。
   - 旁白：“知识索引将分散资料转换为可检索、可关联、可核对的信息资产。”

2. **10 ~ 27 秒｜创建增强索引**
   - 画面：新建知识库 `Atlas Demo`，拖入三个文件，选择增强知识图谱索引并开始构建；展示实时进度。
   - 旁白：“除了知识与向量，增强模式还会整理实体和关系，为跨文档问题建立连接。”

3. **27 ~ 45 秒｜从列表走到关系图**
   - 画面：依次切换知识、向量、实体和关系图视图；点击 `Atlas Sync`，高亮负责人、故障和解决方案节点。
   - 旁白：“实体关系图呈现跨文档信息连接，并支持回溯具体知识条目。”

4. **45 ~ 65 秒｜把知识库交给 Agent**
   - 输入：

```text
只根据 @Atlas Demo 回答：Atlas Sync 由谁负责？最近一次故障的根因和解决办法是什么？
如果资料没有说明，请明确回答“资料不足”，不要用常识补全。
```

   - 画面：回答列出负责人、根因、解决方案，并展开引用的知识条目。
   - 旁白：“知识库作为结构化资源进入 Agent，上下文有来源，信息不足也有明确边界。”

5. **65 ~ 80 秒｜形成可迁移资产**
   - 画面：打开潜在问题列表；随后导出 `Atlas-Demo.rag`。
   - 旁白：“一次整理，可以继续用于问答、研究和后续 Agent 任务，也可以导出迁移。”

6. **80 ~ 90 秒｜边界字幕**
   - 字幕：“本地 Embedding 可用于索引；模型推理位置取决于模型服务配置。”

**验收标准**：

- 回答必须包含三项可核对事实，并能展开来源。
- 关系图至少展示两种实体和两条有意义的关系。
- 删除资料中某一事实后重新提问，Agent 应回答“资料不足”；可录作花絮或长版补充镜头。

### 视频脚本 3：让稳定偏好跨会话生效

**片名**：`跨会话复用稳定工作偏好`

**时长**：60 ~ 75 秒

**演示重点**：长期约束与偏好形成可管理记忆，在新会话中按相关性取回，并支持查看、搜索与删除。

**演示前准备**：准备一段明确包含“长期偏好”和“一次性状态”的对话。长期偏好为：中文输出、风险使用表格、事实附来源、禁止改写原文件；一次性状态为：“今天 16:00 前先看完临时草稿”。

**分镜与旁白**：

1. **0 ~ 15 秒｜明确长期记忆范围**
   - 输入：

```text
请长期记住我的交付偏好：默认使用中文；风险项用表格；事实结论附来源；
未经确认不要修改原文件。今天 16:00 前先看完临时草稿，这条只对今天有效。
```

   - 画面：对话结束后出现记忆整理状态。
   - 旁白：“记忆整理区分长期偏好与一次性安排，提取具备跨会话价值的信息。”

2. **15 ~ 30 秒｜记忆可见、可查、可删**
   - 画面：进入记忆库，展示摘要、标签和详情；长期偏好被整理，一次性时间要求没有混入长期记忆。
   - 旁白：“系统提炼可复用信息，并在记忆库中提供完整的管理入口。”

3. **30 ~ 52 秒｜新会话验证复用**
   - 画面：新建空白会话，直接上传一份虚构风险清单并输入“整理成评审摘要”。
   - 结果：中文输出、风险表格、来源列出现，并在写原文件前停下。
   - 旁白：“新会话按相关性检索长期偏好，并以当前指令作为最高优先级。”

4. **52 ~ 68 秒｜用户收回控制**
   - 画面：用语义搜索找到“禁止修改原文件”，点击删除；新会话再次测试，画面显示该记忆已从检索上下文中移除。
   - 旁白：“用户可查看、检索和删除长期记忆。”

5. **68 ~ 75 秒｜对比定格**
   - 字幕：“聊天记录保存会话过程；长期记忆保存可复用信息。”

**验收标准**：

- 长期偏好与一次性状态的筛选结果必须不同。
- 第二个会话不能复制第一段提示词，应通过行为体现记忆复用。
- 删除镜头后刷新记忆列表，确保条目确实消失。

### 视频脚本 4：同一个 Agent，组合技能、工具与专业上下文

**片名**：`组合技能、工具与结构化上下文`

**时长**：80 ~ 95 秒

**演示重点**：技能定义工作方法，工具执行具体动作，结构化资源保留专业上下文，Yaklang 与 MCP 提供扩展能力。

**演示前准备**：

1. 在本机启动一个只返回固定 JSON 的演示服务，例如 `http://127.0.0.1:8787/health`。
2. 准备一条已脱敏的 HTTP Flow，响应内容与演示服务一致。
3. 预先创建技能 `Evidence First Review`，要求：先列证据、再给结论；不做未授权外部请求；输出包含请求、响应、风险和建议四部分。
4. 确认 HTTP 请求工具已启用；MCP 设置页准备一个离线演示服务，但主片不依赖第三方网络。

**分镜与旁白**：

1. **0 ~ 14 秒｜展示可复用能力资产**
   - 画面：技能库打开 `Evidence First Review`，快速扫过流程与输出约束；切换工具库搜索 `HTTP`，展示可用工具。
   - 旁白：“工作方法保存为可复用技能，工具负责执行具体动作。”

2. **14 ~ 30 秒｜挂载结构化上下文**
   - 画面：在 Agent 中 `@Evidence First Review`，再添加脱敏 HTTP Flow；资源卡片结构化展示请求与响应。
   - 输入：

```text
使用 @Evidence First Review 分析这条 HTTP Flow；
仅允许访问 http://127.0.0.1:8787/health 复核服务状态，其他网络请求一律禁止。
```

   - 旁白：“HTTP Flow 以结构化资源进入上下文，原始证据和任务约束都被保留下来。”

3. **30 ~ 48 秒｜工具搜索与风险确认**
   - 画面：Agent 搜索并选择 HTTP 工具；调用前显示 URL、方法和风险卡片。确认目标确为 `127.0.0.1` 后点击同意。
   - 旁白：“Agent 自动检索工具，执行前展示访问目标与调用参数供用户确认。”

4. **48 ~ 66 秒｜技能约束输出**
   - 画面：最终结果严格分为请求、响应、风险、建议四部分；证据引用来自 HTTP Flow 与本机复核结果。
   - 旁白：“技能决定工作方法，工具提供新证据，Agent 负责把二者组织成可复查结论。”

5. **66 ~ 82 秒｜扩展能力蒙太奇**
   - 画面：快速切换 MCP 服务配置、Focus Mode、插件中心以及端口 / 风险 / 指纹数据库，每个镜头 2 ~ 3 秒。
   - 旁白：“需要更多能力时，可以继续连接 MCP、编写 YakScript 工具、安装插件，或进入 Yaklang 原生的研发与安全分析场景。”

6. **82 ~ 95 秒｜安全收束**
   - 画面：回到审查卡片与本机地址，定格“Authorized Demo Environment”。
   - 字幕：“专业测试应在明确授权的范围内执行。”

**验收标准**：

- 主片断网后仍能完成，避免把第三方服务稳定性混进产品演示。
- HTTP 工具只能访问 `127.0.0.1`，画面不得出现真实 Cookie、Token 或公网目标。
- 最终输出需完整呈现技能预设的四段结构。

---

> 【TODO 视频剪辑：Memfit AI 四段各自成片；统一使用青绿色 Agent 时间线、蓝色知识网络、暖黄色记忆卡片作为视觉区分】
> 【TODO 配图：Agent 执行全景、知识图谱、长期记忆库、技能 + 工具 + MCP 组合图、结构化 HTTP Flow 分析，共五张静态截图】
