# IRify 录屏剧本

以下三支视频分别介绍 IRify 的静态分析、AI 审计和规则工程化能力。每支可以独立发布，也可以串联为合集。

所有录屏一律使用本地脱敏工程或公开靶场源码。使用公开项目时应在字幕中注明出处。

## 片段 1：从源码到 SSA IR，再用 SyntaxFlow 表达漏洞规则

**目标**：让观众在 80 秒内理解 IRify 的两阶段工作方式：先将项目编译为 SSA IR，再使用 SyntaxFlow 查询。

**建议时长**：70 ~ 80 秒。

### 录屏前准备

- 启动 IRify 发行版（Yakit 构建变量 `REACT_APP_PLATFORM=irify`），确认侧边栏为紫色主题的「代码审计」组，可见项目管理、代码审计、代码扫描、规则管理、审计漏洞、Java 反编译。
- 准备一个本地 Java 工程，含一处明显的 JDBC 直接拼接 SQL，工程路径形如 `/tmp/irify-demo/sqli`。
- 在「代码审计」页确认新建项目表单可见：项目路径、语言、编译速度（peephole 0~3）、执行类型（query / scan / debug）。
- 预置下方 JDBC SQL 注入 SyntaxFlow 规则。

### 分镜清单

1. **0~10s｜定位 IRify**：从紫色主题侧边栏点开「代码审计」组，镜头依次扫过项目管理、代码审计、AI 代码审计、代码扫描、规则管理、审计漏洞。字幕：「IRify：以 SSA 与 AI 为核心的代码安全分析系统」「两阶段分析：编译为 SSA IR，再用 SyntaxFlow 查询」。
2. **10~28s｜编译为 SSA IR**：进入「代码审计」页，点击新建项目，拖入 `/tmp/irify-demo/sqli`，语言选 Java，编译速度选「Medium」，执行类型选 `query`；点击编译，展示「SSA 项目编译」过程，并展示日志 `init ssa database: .../default-yakssa.db`。字幕：「源码编译为 SSA IR，落 SQLite 程序库，可一次编译、多次分析」。
3. **28~50s｜用 SyntaxFlow 查询漏洞**：在查询框粘贴下方 JDBC SQL 注入规则并运行；右侧审计结果出现命中，展示「漏洞详情」与「规则编写」面板。随后展示语法流可视化，点击节点跳转源码并对照 SSA IR。字幕：「SyntaxFlow 用声明式规则描述漏洞并追踪数据流」。
4. **50~66s｜规则三段式结构**：在规则编辑器中依次展示 `desc`、规则内容、`check` / `alert` 输出。字幕：「规则描述、查询内容、检查输出，可读、可测、可版本管理」。
5. **66~80s｜收束**：回到两阶段流程图（编译 → IR 库 → 查询 → 结果）。字幕：「SSA 提供统一程序表示，SyntaxFlow 完成漏洞查询」。

### Java 示例工程

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

### SyntaxFlow 示例规则

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

### 解说要点

- IRify 先把项目编译为统一的 SSA 中间表示并落 SQLite 程序库，编译与分析解耦。
- SyntaxFlow 是面向程序分析的声明式查询语言，用于描述漏洞形态和数据流条件。
- 规则由描述、查询和输出组成，便于测试、调试和版本管理。

### 所需素材

- IRify 侧边栏与代码审计页录屏。
- SSA 数据库日志截图（`init ssa database`）。
- 语法流可视化录屏，包含节点跳转源码与 IR 对照。
- SSA 两阶段流程图、规则三段式结构图、语法流可视化截图。

### 拍摄注意

- 编译过程可以剪辑压缩，但必须保留「编译开始 → 编译完成 → IR 落库」。
- 语法流可视化需要展示点击节点跳转源码的操作。
- 使用公开项目时在字幕中注明出处。

---

## 片段 2：AI 代码审计与 SyntaxFlow 规则生成

**目标**：展示 AI 对整工程代码进行审计，以及根据自然语言需求生成并校验 SyntaxFlow 规则。

**建议时长**：70 ~ 80 秒。

### 录屏前准备

- 启动 IRify 发行版，准备一个已编译为 SSA IR 的本地工程。
- 进入「AI 代码审计」页，确认可见聚焦模式选择（`code_security_audit` / `ai_skill_audit`）和项目选择、审计风格、开始审计三个步骤。
- 在规则管理页预置一个待整理的 `.sf` 文件，用于演示 `sf_rule_completion` 和 `write_syntaxflow_rule`。

### 分镜清单

1. **0~10s｜AI 审计入口**：进入「AI 代码审计」页，展示 Agent 对话界面与聚焦模式选择。字幕：「AI 代码审计：从项目探索到结果交付」。
2. **10~30s｜四阶段审计**：选择已编译项目和 `code_security_audit`，开始审计；依次展示项目探索、分类扫描、逐条验证与证据记录、报告生成。字幕：「探索 → 扫描 → 验证 → 报告，可导出 MD / PDF」。
3. **30~50s｜查看证据**：点开一条高风险项，展示代码位置与 SSA IR 证据。字幕：「审计结论可以回到代码位置和分析证据」。
4. **50~68s｜AI 生成规则**：切到规则编写页，在 `write_syntaxflow_rule` 下输入自然语言需求，展示检索 `syntaxflow-aikb` 与 `syntaxflow-aikb-rag`、生成 `.sf`、执行 `check-syntaxflow-syntax` 的过程。字幕：「检索规则知识、生成规则、执行语法自检」。
5. **68~74s｜整理规则**：点击规则编辑器右上角 AI 入口（`sf_rule_completion`），展示整理前后的格式对比。
6. **74~80s｜收束**：AI 审计结果与生成的 SyntaxFlow 规则并置。字幕：「AI 负责语义分析，SSA 与 SyntaxFlow 提供可复现的程序分析能力」。

### 自然语言规则生成指令

> 生成一条 Golang 的 SyntaxFlow 规则：检测 `database/sql` 中 `db.QueryRow` 的第一个参数，当它由 `fmt.Sprintf` 拼接且拼接中包含外部输入时，告警 SQL 注入（risk: sqli，level: high）。

### 期望生成的 SyntaxFlow 规则

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

### 解说要点

- AI 审计覆盖项目探索、扫描、验证和报告生成。
- AI 生成 SyntaxFlow 规则时使用规则知识库检索，并执行语法检查。
- SSA 与 SyntaxFlow 结果用于定位代码与复核结论。

### 所需素材

- AI 代码审计页录屏。
- 结果证据跳转源码与 IR 的录屏。
- `write_syntaxflow_rule` 检索、生成、自检录屏。
- `sf_rule_completion` 整理前后对照。
- AI 审计四阶段流程图、AI 规则生成流程图。

### 拍摄注意

- 四阶段流程可以使用阶段卡剪辑串联。
- 规则生成需要展示检索、生成和语法自检，不只展示最终文件。
- 所有审计结论使用本地脱敏工程。

---

## 片段 3：规则调试与扫描稳定性

**目标**：展示 SyntaxFlow 规则从编写、调试到结果验证的过程。

**建议时长**：60 ~ 70 秒。

### 录屏前准备

- 启动 IRify 发行版，复用一个已编译为 SSA IR 的本地工程。
- 进入「规则管理」页，确认可见本地规则、在线规则、规则分组、批量导入导出、规则集选择和调试入口（`ExecType = debug`）。
- 准备一条待调试的路径穿越规则，保留一处轻微误报，用于演示 `include` / `exclude` 收敛。
- 准备一条已命中的漏洞结果，用于演示通过 `result_id` 反查 `.sf` 原文。

### 分镜清单

1. **0~10s｜规则管理**：打开「规则管理」页，展示本地规则、在线规则、规则分组、批量导入导出和规则集选择。字幕：「规则分组、迁移与按组扫描」。
2. **10~26s｜规则调试**：选择待调试规则，以 `debug` 模式执行；展示 `pause` / `resume` / `stop` / `reset` 控件、匹配节点和日志。字幕：「逐条查看匹配结果和执行日志」。
3. **26~42s｜收敛误报**：增加 `#{exclude}` / `#{until}` 过滤后重新调试，展示匹配数量变化。字幕：「通过过滤条件调整规则边界」。
4. **42~56s｜结果与规则追溯**：切到「审计漏洞」，点开命中项，展示通过 `result_id` 反查 `.sf` 原文，并并置数据流图、源码和 SSA IR。字幕：「从漏洞结果回到规则、源码与数据流」。
5. **56~64s｜扫描状态**：展示扫描任务状态、断点续扫和新增结果对比；叠加内置规则规模信息。字幕：「扫描任务可查询、可续扫、可对比」。
6. **64~70s｜收束**：规则编辑器与数据流图并置。字幕：「从规则编写到结果验证」。

### SyntaxFlow 路径穿越示例

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

### NativeCall 与过滤片段

- Use-Def 链：`$sink #-> as $param`
- 过滤收敛：`#{include: ...}` / `#{exclude: ...}` / `#{until: ...}`
- NativeCall 取值：`<getCallee>` / `<getObject>` / `<getFunc>` / `<fullTypeName>` / `<slice(start=1)>`
- 捕获与告警：`as $var` / `check $var` / `alert $var for { ... }`

### 解说要点

- 规则调试器支持暂停、继续、停止和重置，并逐条输出匹配节点。
- `include`、`exclude` 和 `until` 用于调整匹配边界。
- 审计结果可以回到命中规则、数据流图、源码和 SSA IR。
- 扫描任务支持状态查询和断点续扫；规则规模信息以录制版本的实际数据为准。

### 所需素材

- 规则管理页录屏。
- 调试会话、匹配节点和日志录屏。
- 审计漏洞页的规则反查、数据流图、源码和 IR 录屏。
- 规则调试器、结果追溯、内置规则统计图。

### 拍摄注意

- 先展示未过滤的多条匹配，再展示增加过滤后的结果。
- 规则反查镜头需要保留「选择漏洞 → 出现对应规则」的操作过程。
- 尚未上线的扫描对比或断点续扫能力必须在字幕中标注。

## 统一剪辑与静态素材

- 三支视频单支建议 60 ~ 80 秒，可串联并使用紫色品牌过场。
- 静态素材包括 SSA 两阶段流程图、SyntaxFlow 规则结构图、语法流可视化、规则调试器和 AI 代码审计流程图。
