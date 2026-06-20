# syntaxflow

|函数名|函数描述/介绍|
|:------|:--------|
| [syntaxflow.ExecRule](#execrule) |ExecRule 在已编译的程序上执行一条 SyntaxFlow 规则（导出名为 syntaxflow.ExecRule） 参数: - r: SyntaxFlow 规则对象 - prog: 已经过 ssa 编译的程序对象 - opts: 查询可选项，如 syntaxflow.withContext ...|
| [syntaxflow.GetScanStatus](#getscanstatus) |GetScanStatus 查询扫描任务的当前状态 参数: - ctx: 上下文，用于控制查询的生命周期 - taskId: 要查询的任务ID - callback: 回调函数，用于处理状态查询结果 返回值: - error: 如果查询失败则返回错误信息|
| [syntaxflow.MergeBeautificationResults](#mergebeautificationresults) |MergeBeautificationResultsForYak 将 AI 生成的描述信息与告警信息合并回 SyntaxFlow 规则内容 导出名为 syntaxflow.MergeBeautificationResults，常用于规则的美化与补全 参数: - descMap: 描述信息映射（map...|
| [syntaxflow.QuerySyntaxFlowRules](#querysyntaxflowrules) |QuerySyntaxFlowRules 按规则名模糊查询内置/已保存的 SyntaxFlow 规则（导出名为 syntaxflow.QuerySyntaxFlowRules） 参数: - name: 规则名关键字，支持模糊匹配，传 &#34;*&#34; 匹配全部 - opts: 可选的数据库查询条件 返回值: ...|
| [syntaxflow.ResumeScan](#resumescan) |ResumeScan 恢复之前暂停的扫描任务 参数: - ctx: 上下文，用于控制扫描任务的生命周期 - taskId: 要恢复的任务ID - opts: 可变数量的选项函数，用于配置扫描参数，如 syntaxflow.withScanResultCallback 返回值: - error: 如果...|
| [syntaxflow.RunSyntaxFlowProjectScanCheck](#runsyntaxflowprojectscancheck) |RunSyntaxFlowProjectScanCheck 查询某个程序的 SyntaxFlow 扫描任务并汇总核对结果 导出名为 syntaxflow.RunSyntaxFlowProjectScanCheck 参数: - programHint: 程序名提示（用于匹配扫描任务关联的程序） - s...|
| [syntaxflow.StartScan](#startscan) |StartScan 启动新的SyntaxFlow扫描任务，使用options模式配置扫描参数 参数: - ctx: 上下文，用于控制扫描任务的生命周期 - callback: 回调函数，用于处理扫描结果 - opts: 可变数量的选项函数，用于配置扫描参数 返回值: - error: 如果启动失败则...|
| [syntaxflow.withCache](#withcache) |QueryWithUseCache 设置 SyntaxFlow 查询是否使用缓存（导出名为 syntaxflow.withCache） 参数: - b: 是否使用缓存，缺省为 true 返回值: - 查询可选项|
| [syntaxflow.withContext](#withcontext) |QueryWithContext 为 SyntaxFlow 查询设置上下文（导出名为 syntaxflow.withContext） 参数: - ctx: 上下文，用于控制查询的取消与超时 返回值: - 查询可选项|
| [syntaxflow.withExecDebug](#withexecdebug) |QueryWithEnableDebug 设置 SyntaxFlow 查询是否开启调试输出（导出名为 syntaxflow.withExecDebug） 参数: - b: 是否开启调试，缺省为 true 返回值: - 查询可选项|
| [syntaxflow.withExecTaskID](#withexectaskid) |QueryWithTaskID 为 SyntaxFlow 查询绑定扫描任务 ID（导出名为 syntaxflow.withExecTaskID） 参数: - taskID: 关联的扫描任务 ID 返回值: - 查询可选项|
| [syntaxflow.withProcess](#withprocess) |QueryWithProcessCallback 为 SyntaxFlow 查询设置进度回调（导出名为 syntaxflow.withProcess） 参数: - cb: 进度回调函数，参数为 (progress 浮点进度, message 进度消息) 返回值: - 查询可选项|
| [syntaxflow.withSave](#withsave) |withSave 让 SyntaxFlow 查询结果以&#34;查询(Query)&#34;类型保存到数据库（导出名为 syntaxflow.withSave） 作为 syntaxflow.ExecRule 等查询接口的可选项，保存后可后续按结果 ID 复查 返回值: - SyntaxFlow 查询可选项|
| [syntaxflow.withScanConcurrency](#withscanconcurrency) |WithScanConcurrency 设置扫描并发数（导出名为 syntaxflow.withScanConcurrency） 参数: - concurrency: 并发执行的规则数量 返回值: - 扫描配置可选项|
| [syntaxflow.withScanProcessCallback](#withscanprocesscallback) |WithProcessCallback 设置扫描进度回调（导出名为 syntaxflow.withScanProcessCallback） 扫描进度变化时触发回调，作为 syntaxflow.StartScan 的可选项使用 参数: - callback: 进度回调函数，参数含任务 ID、状态、进度...|
| [syntaxflow.withScanPrograms](#withscanprograms) |withPrograms 指定本次扫描要覆盖的程序集合（导出名为 syntaxflow.withScanPrograms） 作为 syntaxflow.StartScan 的可选项，限定扫描在指定的已编译程序上进行 参数: - progs: 待扫描的程序集合（已编译程序的列表） 返回值: - 扫描配...|
| [syntaxflow.withScanResultCallback](#withscanresultcallback) |WithScanResultCallback 设置扫描结果回调（导出名为 syntaxflow.withScanResultCallback） 每产生一个扫描结果时触发回调，作为 syntaxflow.StartScan 的可选项使用 参数: - callback: 每产生一个扫描结果时触发的回调函...|
| [syntaxflow.withSearch](#withsearch) |withSearch 让 SyntaxFlow 查询结果以&#34;搜索(Search)&#34;类型保存到数据库（导出名为 syntaxflow.withSearch） 与 syntaxflow.withSave 类似，但结果归类为搜索场景，便于区分用途 返回值: - SyntaxFlow 查询可选项|


## 函数定义
### ExecRule

#### 详细描述
ExecRule 在已编译的程序上执行一条 SyntaxFlow 规则（导出名为 syntaxflow.ExecRule）

参数:

  - r: SyntaxFlow 规则对象

  - prog: 已经过 ssa 编译的程序对象

  - opts: 查询可选项，如 syntaxflow.withContext / syntaxflow.withCache



返回值:

  - SyntaxFlow 执行结果对象

  - 错误信息




Example:

``````````````yak
// 编译代码后执行规则（示意性示例，需要先有 schema.SyntaxFlowRule 对象）
prog = ssa.Parse("a = 1; println(a)")~
// rule 通常来自 syntaxflow.QuerySyntaxFlowRules 的查询结果

	for rule := range syntaxflow.QuerySyntaxFlowRules("*") {
	    result = syntaxflow.ExecRule(rule, prog)~
	    break
	}
``````````````


#### 定义

`ExecRule(r *schema.SyntaxFlowRule, prog *ssaapi.Program, opts ...ssaapi.QueryOption) (*ssaapi.SyntaxFlowResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*schema.SyntaxFlowRule` | SyntaxFlow 规则对象 |
| prog | `*ssaapi.Program` | 已经过 ssa 编译的程序对象 |
| opts | `...ssaapi.QueryOption` | 查询可选项，如 syntaxflow.withContext / syntaxflow.withCache |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ssaapi.SyntaxFlowResult` | SyntaxFlow 执行结果对象 |
| r2 | `error` | 错误信息 |


### GetScanStatus

#### 详细描述
GetScanStatus 查询扫描任务的当前状态



参数:

  - ctx: 上下文，用于控制查询的生命周期

  - taskId: 要查询的任务ID

  - callback: 回调函数，用于处理状态查询结果



返回值:

  - error: 如果查询失败则返回错误信息




Example:

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


#### 定义

`GetScanStatus(ctx context.Context, taskId string, callback ProcessCallback) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制查询的生命周期 |
| taskId | `string` | 要查询的任务ID |
| callback | `ProcessCallback` | 回调函数，用于处理状态查询结果 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 如果查询失败则返回错误信息 |


### MergeBeautificationResults

#### 详细描述
MergeBeautificationResultsForYak 将 AI 生成的描述信息与告警信息合并回 SyntaxFlow 规则内容

导出名为 syntaxflow.MergeBeautificationResults，常用于规则的美化与补全

参数:

  - descMap: 描述信息映射（map[string]any）

  - alertMap: 告警信息映射（map[string]any）

  - ruleContent: 原始规则内容



返回值:

  - 合并美化后的规则内容

  - 错误信息




Example:

``````````````yak
rule = `desc(title: "demo"); sink as $sink;`
merged = syntaxflow.MergeBeautificationResults({}, {}, rule)~
assert str.Contains(merged, "sink"), "merged rule should keep the original content"
``````````````


#### 定义

`MergeBeautificationResults(descMap any, alertMap any, ruleContent string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| descMap | `any` | 描述信息映射（map[string]any） |
| alertMap | `any` | 告警信息映射（map[string]any） |
| ruleContent | `string` | 原始规则内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 合并美化后的规则内容 |
| r2 | `error` | 错误信息 |


### QuerySyntaxFlowRules

#### 详细描述
QuerySyntaxFlowRules 按规则名模糊查询内置/已保存的 SyntaxFlow 规则（导出名为 syntaxflow.QuerySyntaxFlowRules）

参数:

  - name: 规则名关键字，支持模糊匹配，传 &#34;*&#34; 匹配全部

  - opts: 可选的数据库查询条件



返回值:

  - SyntaxFlow 规则对象的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 遍历名称包含 "xss" 的规则
count = 0

	for rule := range syntaxflow.QuerySyntaxFlowRules("xss") {
	    count++
	    if count > 3 { break }
	}

println(count)
``````````````


#### 定义

`QuerySyntaxFlowRules(name string, opts ...QueryRulesOption) chan *schema.SyntaxFlowRule`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 规则名关键字，支持模糊匹配，传 &#34;*&#34; 匹配全部 |
| opts | `...QueryRulesOption` | 可选的数据库查询条件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.SyntaxFlowRule` | SyntaxFlow 规则对象的 channel，可使用 for-range 遍历 |


### ResumeScan

#### 详细描述
ResumeScan 恢复之前暂停的扫描任务



参数:

  - ctx: 上下文，用于控制扫描任务的生命周期

  - taskId: 要恢复的任务ID

  - opts: 可变数量的选项函数，用于配置扫描参数，如 syntaxflow.withScanResultCallback



返回值:

  - error: 如果恢复失败则返回错误信息




Example:

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


#### 定义

`ResumeScan(ctx context.Context, taskId string, opts ...ssaconfig.Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制扫描任务的生命周期 |
| taskId | `string` | 要恢复的任务ID |
| opts | `...ssaconfig.Option` | 可变数量的选项函数，用于配置扫描参数，如 syntaxflow.withScanResultCallback |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 如果恢复失败则返回错误信息 |


### RunSyntaxFlowProjectScanCheck

#### 详细描述
RunSyntaxFlowProjectScanCheck 查询某个程序的 SyntaxFlow 扫描任务并汇总核对结果

导出名为 syntaxflow.RunSyntaxFlowProjectScanCheck

参数:

  - programHint: 程序名提示（用于匹配扫描任务关联的程序）

  - scanOnly: 是否仅统计扫描类型任务

  - limit: 返回任务数量上限



返回值:

  - 项目扫描核对结果（含最近任务 ID、任务列表、Markdown 报告等）

  - 错误信息




Example:

``````````````yak
// 查询某程序最近的扫描任务核对结果（示意性示例，需要已有扫描任务）
result = syntaxflow.RunSyntaxFlowProjectScanCheck("my-program", false, 10)~
dump(result)
``````````````


#### 定义

`RunSyntaxFlowProjectScanCheck(programHint string, scanOnly bool, limit int) (*SyntaxFlowProjectScanCheckResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programHint | `string` | 程序名提示（用于匹配扫描任务关联的程序） |
| scanOnly | `bool` | 是否仅统计扫描类型任务 |
| limit | `int` | 返回任务数量上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SyntaxFlowProjectScanCheckResult` | 项目扫描核对结果（含最近任务 ID、任务列表、Markdown 报告等） |
| r2 | `error` | 错误信息 |


### StartScan

#### 详细描述
StartScan 启动新的SyntaxFlow扫描任务，使用options模式配置扫描参数



参数:

  - ctx: 上下文，用于控制扫描任务的生命周期

  - callback: 回调函数，用于处理扫描结果

  - opts: 可变数量的选项函数，用于配置扫描参数



返回值:

  - error: 如果启动失败则返回错误信息




Example:

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


#### 定义

`StartScan(ctx context.Context, opts ...ssaconfig.Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制扫描任务的生命周期 |
| opts | `...ssaconfig.Option` | 可变数量的选项函数，用于配置扫描参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 如果启动失败则返回错误信息 |


### withCache

#### 详细描述
QueryWithUseCache 设置 SyntaxFlow 查询是否使用缓存（导出名为 syntaxflow.withCache）

参数:

  - b: 是否使用缓存，缺省为 true



返回值:

  - 查询可选项




Example:

``````````````yak
opt = syntaxflow.withCache(true)
println(opt)
``````````````


#### 定义

`withCache(b ...bool) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` | 是否使用缓存，缺省为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` | 查询可选项 |


### withContext

#### 详细描述
QueryWithContext 为 SyntaxFlow 查询设置上下文（导出名为 syntaxflow.withContext）

参数:

  - ctx: 上下文，用于控制查询的取消与超时



返回值:

  - 查询可选项




Example:

``````````````yak
opt = syntaxflow.withContext(context.Background())
println(opt)
``````````````


#### 定义

`withContext(ctx context.Context) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制查询的取消与超时 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` | 查询可选项 |


### withExecDebug

#### 详细描述
QueryWithEnableDebug 设置 SyntaxFlow 查询是否开启调试输出（导出名为 syntaxflow.withExecDebug）

参数:

  - b: 是否开启调试，缺省为 true



返回值:

  - 查询可选项




Example:

``````````````yak
opt = syntaxflow.withExecDebug(true)
println(opt)
``````````````


#### 定义

`withExecDebug(b ...bool) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` | 是否开启调试，缺省为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` | 查询可选项 |


### withExecTaskID

#### 详细描述
QueryWithTaskID 为 SyntaxFlow 查询绑定扫描任务 ID（导出名为 syntaxflow.withExecTaskID）

参数:

  - taskID: 关联的扫描任务 ID



返回值:

  - 查询可选项




Example:

``````````````yak
opt = syntaxflow.withExecTaskID("task-uuid")
println(opt)
``````````````


#### 定义

`withExecTaskID(taskID string) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskID | `string` | 关联的扫描任务 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` | 查询可选项 |


### withProcess

#### 详细描述
QueryWithProcessCallback 为 SyntaxFlow 查询设置进度回调（导出名为 syntaxflow.withProcess）

参数:

  - cb: 进度回调函数，参数为 (progress 浮点进度, message 进度消息)



返回值:

  - 查询可选项




Example:

``````````````yak
opt = syntaxflow.withProcess(func(progress, message) { println(message) })
println(opt)
``````````````


#### 定义

`withProcess(cb func(float64, string)) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(float64, string)` | 进度回调函数，参数为 (progress 浮点进度, message 进度消息) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` | 查询可选项 |


### withSave

#### 详细描述
withSave 让 SyntaxFlow 查询结果以&#34;查询(Query)&#34;类型保存到数据库（导出名为 syntaxflow.withSave）

作为 syntaxflow.ExecRule 等查询接口的可选项，保存后可后续按结果 ID 复查



返回值:

  - SyntaxFlow 查询可选项




Example:

``````````````yak
opt = syntaxflow.withSave()
assert opt != nil, "withSave should return a query option"
``````````````


#### 定义

`withSave() ssaapi.QueryOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaapi.QueryOption` | SyntaxFlow 查询可选项 |


### withScanConcurrency

#### 详细描述
WithScanConcurrency 设置扫描并发数（导出名为 syntaxflow.withScanConcurrency）

参数:

  - concurrency: 并发执行的规则数量



返回值:

  - 扫描配置可选项




Example:

``````````````yak
opt = syntaxflow.withScanConcurrency(10)
println(opt)
``````````````


#### 定义

`withScanConcurrency(concurrency uint32) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrency | `uint32` | 并发执行的规则数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 扫描配置可选项 |


### withScanProcessCallback

#### 详细描述
WithProcessCallback 设置扫描进度回调（导出名为 syntaxflow.withScanProcessCallback）

扫描进度变化时触发回调，作为 syntaxflow.StartScan 的可选项使用



参数:

  - callback: 进度回调函数，参数含任务 ID、状态、进度比例与额外信息



返回值:

  - 扫描配置可选项，可传入 syntaxflow.StartScan




Example:

``````````````yak
opt = syntaxflow.withScanProcessCallback((taskID, status, progress, info) => { println(status) })
assert opt != nil, "withScanProcessCallback should return a scan option"
``````````````


#### 定义

`withScanProcessCallback(callback ProcessCallback) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ProcessCallback` | 进度回调函数，参数含任务 ID、状态、进度比例与额外信息 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` | 扫描配置可选项，可传入 syntaxflow.StartScan |


### withScanPrograms

#### 详细描述
withPrograms 指定本次扫描要覆盖的程序集合（导出名为 syntaxflow.withScanPrograms）

作为 syntaxflow.StartScan 的可选项，限定扫描在指定的已编译程序上进行



参数:

  - progs: 待扫描的程序集合（已编译程序的列表）



返回值:

  - 扫描配置可选项，可传入 syntaxflow.StartScan




Example:

``````````````yak
prog = ssa.Parse(`a = 1; println(a)`)~
opt = syntaxflow.withScanPrograms([prog])
assert opt != nil, "withScanPrograms should return a scan option"
``````````````


#### 定义

`withScanPrograms(progs ssaapi.Programs) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progs | `ssaapi.Programs` | 待扫描的程序集合（已编译程序的列表） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` | 扫描配置可选项，可传入 syntaxflow.StartScan |


### withScanResultCallback

#### 详细描述
WithScanResultCallback 设置扫描结果回调（导出名为 syntaxflow.withScanResultCallback）

每产生一个扫描结果时触发回调，作为 syntaxflow.StartScan 的可选项使用



参数:

  - callback: 每产生一个扫描结果时触发的回调函数



返回值:

  - 扫描配置可选项，可传入 syntaxflow.StartScan




Example:

``````````````yak
opt = syntaxflow.withScanResultCallback((result) => { dump(result) })
assert opt != nil, "withScanResultCallback should return a scan option"
``````````````


#### 定义

`withScanResultCallback(callback ScanResultCallback) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ScanResultCallback` | 每产生一个扫描结果时触发的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` | 扫描配置可选项，可传入 syntaxflow.StartScan |


### withSearch

#### 详细描述
withSearch 让 SyntaxFlow 查询结果以&#34;搜索(Search)&#34;类型保存到数据库（导出名为 syntaxflow.withSearch）

与 syntaxflow.withSave 类似，但结果归类为搜索场景，便于区分用途



返回值:

  - SyntaxFlow 查询可选项




Example:

``````````````yak
opt = syntaxflow.withSearch()
assert opt != nil, "withSearch should return a query option"
``````````````


#### 定义

`withSearch() ssaapi.QueryOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaapi.QueryOption` | SyntaxFlow 查询可选项 |


