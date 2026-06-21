# syntaxflow {#library-syntaxflow}

`syntaxflow` 库是 yaklang 的代码审计查询引擎，用 SyntaxFlow DSL 在 SSA 程序上做污点追踪与数据流查询，配套规则管理与扫描任务调度，是自动化代码审计的核心。

典型使用场景：

- 执行规则：`syntaxflow.ExecRule(rule, prog, opts...)` 在已编译程序上执行单条规则，`syntaxflow.QuerySyntaxFlowRules` 检索规则库。
- 扫描任务：`syntaxflow.StartScan` / `syntaxflow.ResumeScan` 启动/恢复扫描，`syntaxflow.GetScanStatus` 查询进度，`syntaxflow.RunSyntaxFlowProjectScanCheck` 做项目级扫描检查；配 `syntaxflow.withScanConcurrency` / `syntaxflow.withScanResultCallback` 等控制。

与相邻库的关系：`syntaxflow` 依赖 `ssa`（提供编译后的程序），查询结果经 `sfreport` 出报告、`risk` 记录代码风险，构成完整的代码审计流水线。

> 共 18 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [syntaxflow.GetScanStatus](#getscanstatus) | `ctx context.Context, taskId string, callback ProcessCallback` | `error` | 查询扫描任务的当前状态 |
| [syntaxflow.MergeBeautificationResults](#mergebeautificationresults) | `descMap any, alertMap any, ruleContent string` | `string, error` | MergeBeautificationResultsForYak 将 AI 生成的描述信息与告警信息合并回 SyntaxFlow 规则内容 |
| [syntaxflow.RunSyntaxFlowProjectScanCheck](#runsyntaxflowprojectscancheck) | `programHint string, scanOnly bool, limit int` | `*SyntaxFlowProjectScanCheckResult, error` | 查询某个程序的 SyntaxFlow 扫描任务并汇总核对结果 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [syntaxflow.ExecRule](#execrule) | `r *schema.SyntaxFlowRule, prog *ssaapi.Program, opts ...ssaapi.QueryOption` | `*ssaapi.SyntaxFlowResult, error` | 在已编译的程序上执行一条 SyntaxFlow 规则（导出名为 syntaxflow.ExecRule） |
| [syntaxflow.QuerySyntaxFlowRules](#querysyntaxflowrules) | `name string, opts ...QueryRulesOption` | `chan *schema.SyntaxFlowRule` | 按规则名模糊查询内置/已保存的 SyntaxFlow 规则（导出名为 syntaxflow.QuerySyntaxFlowRules） |
| [syntaxflow.ResumeScan](#resumescan) | `ctx context.Context, taskId string, opts ...ssaconfig.Option` | `error` | 恢复之前暂停的扫描任务 |
| [syntaxflow.StartScan](#startscan) | `ctx context.Context, opts ...ssaconfig.Option` | `error` | 启动新的SyntaxFlow扫描任务，使用options模式配置扫描参数 |

## 函数详情

### GetScanStatus {#getscanstatus}

```go
GetScanStatus(ctx context.Context, taskId string, callback ProcessCallback) error
```

查询扫描任务的当前状态

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制查询的生命周期 |
| taskId | `string` | 要查询的任务ID |
| callback | `ProcessCallback` | 回调函数，用于处理状态查询结果 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 如果查询失败则返回错误信息 |

**示例**

``````````````yak
// 查询扫描任务状态
taskId := "running-task-67890"

	err := syntaxflowscan.GetScanStatus(context.New(), taskId, func(result) {
	    println("任务状态查询:")
	    println("  任务ID:", result.TaskID)
	    println("  当前状态:", result.Status)
	    if result.ExecResult {
	        println("  执行信息:", result.ExecResult.Message)
	    }
	    return nil
	})

die(err)
``````````````

---

### MergeBeautificationResults {#mergebeautificationresults}

```go
MergeBeautificationResults(descMap any, alertMap any, ruleContent string) (string, error)
```

MergeBeautificationResultsForYak 将 AI 生成的描述信息与告警信息合并回 SyntaxFlow 规则内容

导出名为 syntaxflow.MergeBeautificationResults，常用于规则的美化与补全

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| descMap | `any` | 描述信息映射（map[string]any） |
| alertMap | `any` | 告警信息映射（map[string]any） |
| ruleContent | `string` | 原始规则内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 合并美化后的规则内容 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
rule = `desc(title: "demo"); sink as $sink;`
merged = syntaxflow.MergeBeautificationResults({}, {}, rule)~
assert str.Contains(merged, "sink"), "merged rule should keep the original content"
``````````````

---

### RunSyntaxFlowProjectScanCheck {#runsyntaxflowprojectscancheck}

```go
RunSyntaxFlowProjectScanCheck(programHint string, scanOnly bool, limit int) (*SyntaxFlowProjectScanCheckResult, error)
```

查询某个程序的 SyntaxFlow 扫描任务并汇总核对结果

导出名为 syntaxflow.RunSyntaxFlowProjectScanCheck

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| programHint | `string` | 程序名提示（用于匹配扫描任务关联的程序） |
| scanOnly | `bool` | 是否仅统计扫描类型任务 |
| limit | `int` | 返回任务数量上限 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SyntaxFlowProjectScanCheckResult` | 项目扫描核对结果（含最近任务 ID、任务列表、Markdown 报告等） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 查询某程序最近的扫描任务核对结果（示意性示例，需要已有扫描任务）
result = syntaxflow.RunSyntaxFlowProjectScanCheck("my-program", false, 10)~
dump(result)
``````````````

---

## 可变参数函数详情

### ExecRule {#execrule}

```go
ExecRule(r *schema.SyntaxFlowRule, prog *ssaapi.Program, opts ...ssaapi.QueryOption) (*ssaapi.SyntaxFlowResult, error)
```

在已编译的程序上执行一条 SyntaxFlow 规则（导出名为 syntaxflow.ExecRule）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `*schema.SyntaxFlowRule` | SyntaxFlow 规则对象 |
| prog | `*ssaapi.Program` | 已经过 ssa 编译的程序对象 |

**可选参数**

可作为可变参数 `opts ...ssaapi.QueryOption` 传入选项；共 7 个可用选项，详见 [QueryOption 选项列表](#option-queryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ssaapi.SyntaxFlowResult` | SyntaxFlow 执行结果对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 编译代码后执行规则（示意性示例，需要先有 schema.SyntaxFlowRule 对象）
prog = ssa.Parse("a = 1; println(a)")~
// rule 通常来自 syntaxflow.QuerySyntaxFlowRules 的查询结果

	for rule := range syntaxflow.QuerySyntaxFlowRules("*") {
	    result = syntaxflow.ExecRule(rule, prog)~
	    break
	}
``````````````

---

### QuerySyntaxFlowRules {#querysyntaxflowrules}

```go
QuerySyntaxFlowRules(name string, opts ...QueryRulesOption) chan *schema.SyntaxFlowRule
```

按规则名模糊查询内置/已保存的 SyntaxFlow 规则（导出名为 syntaxflow.QuerySyntaxFlowRules）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 规则名关键字，支持模糊匹配，传 &#34;*&#34; 匹配全部 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...QueryRulesOption` | 可选的数据库查询条件 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.SyntaxFlowRule` | SyntaxFlow 规则对象的 channel，可使用 for-range 遍历 |

**示例**

``````````````yak
// 遍历名称包含 "xss" 的规则
count = 0

	for rule := range syntaxflow.QuerySyntaxFlowRules("xss") {
	    count++
	    if count > 3 { break }
	}

println(count)
``````````````

---

### ResumeScan {#resumescan}

```go
ResumeScan(ctx context.Context, taskId string, opts ...ssaconfig.Option) error
```

恢复之前暂停的扫描任务

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制扫描任务的生命周期 |
| taskId | `string` | 要恢复的任务ID |

**可选参数**

可作为可变参数 `opts ...ssaconfig.Option` 传入选项；共 4 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 如果恢复失败则返回错误信息 |

**示例**

``````````````yak
// 恢复之前暂停的扫描任务
taskId := "previous-task-12345"

	err := syntaxflowscan.ResumeScan(context.New(), taskId, func(result) {
	    println("恢复扫描 - 任务ID:", result.TaskID)
	    println("当前状态:", result.Status)
	    if result.Status == "done" {
	        println("扫描已完成！")
	    }
	    return nil
	})

die(err)
``````````````

---

### StartScan {#startscan}

```go
StartScan(ctx context.Context, opts ...ssaconfig.Option) error
```

启动新的SyntaxFlow扫描任务，使用options模式配置扫描参数

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制扫描任务的生命周期 |

**可选参数**

可作为可变参数 `opts ...ssaconfig.Option` 传入选项；共 4 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 如果启动失败则返回错误信息 |

**示例**

``````````````yak
// 基础扫描示例

	err := syntaxflowscan.StartScan(context.New(), func(result) {
	    println("任务ID:", result.TaskID)
	    println("状态:", result.Status)
	    if result.Risks && len(result.Risks) > 0 {
	        for _, risk := range result.Risks {
	            println("发现风险:", risk.Title)
	        }
	    }
	    return nil
	},

	syntaxflowscan.withProgramNames("my-java-project"),
	syntaxflowscan.withRuleNames("sql-injection", "xss"),
	syntaxflowscan.withSeverity("high", "critical"),
	syntaxflowscan.withConcurrency(10),

)
die(err)

// 多程序扫描示例

	err := syntaxflowscan.StartScan(context.New(), func(result) {
	    yakit.Info("扫描进度: %s", result.Status)
	    return nil
	},

	syntaxflowscan.withProgramNames("frontend", "backend", "api"),
	syntaxflowscan.withLanguages("javascript", "java", "go"),
	syntaxflowscan.withKeyword("security"),
	syntaxflowscan.withMemory(true),

)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[syntaxflow.ResumeScan](#resumescan)、[syntaxflow.StartScan](#startscan)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `syntaxflow.withScanConcurrency` | `concurrency uint32` | `Option` | 设置扫描并发数 |
| `syntaxflow.withScanProcessCallback` | `callback ProcessCallback` | `ssaconfig.Option` | WithProcessCallback 设置扫描进度回调 |
| `syntaxflow.withScanPrograms` | `progs ssaapi.Programs` | `ssaconfig.Option` | withPrograms 指定本次扫描要覆盖的程序集合 |
| `syntaxflow.withScanResultCallback` | `callback ScanResultCallback` | `ssaconfig.Option` | 设置扫描结果回调 |

### 2. 类型：QueryOption {#option-queryoption}

涉及到的函数有：[syntaxflow.ExecRule](#execrule)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `syntaxflow.withCache` | `b ...bool` | `QueryOption` | QueryWithUseCache 设置 SyntaxFlow 查询是否使用缓存 |
| `syntaxflow.withContext` | `ctx context.Context` | `QueryOption` | QueryWithContext 为 SyntaxFlow 查询设置上下文 |
| `syntaxflow.withExecDebug` | `b ...bool` | `QueryOption` | QueryWithEnableDebug 设置 SyntaxFlow 查询是否开启调试输出 |
| `syntaxflow.withExecTaskID` | `taskID string` | `QueryOption` | QueryWithTaskID 为 SyntaxFlow 查询绑定扫描任务 ID |
| `syntaxflow.withProcess` | `cb func(float64, string)` | `QueryOption` | QueryWithProcessCallback 为 SyntaxFlow 查询设置进度回调 |
| `syntaxflow.withSave` | - | `ssaapi.QueryOption` | 让 SyntaxFlow 查询结果以&#34;查询(Query)&#34;类型保存到数据库 |
| `syntaxflow.withSearch` | - | `ssaapi.QueryOption` | 让 SyntaxFlow 查询结果以&#34;搜索(Search)&#34;类型保存到数据库 |

