# syntaxflow

|函数名|函数描述/介绍|
|:------|:--------|
| [syntaxflow.ExecRule](#execrule) ||
| [syntaxflow.GetScanStatus](#getscanstatus) |GetScanStatus 查询扫描任务的当前状态    参数:    - ctx: 上下文，用于控制查询的生命周期    - taskId: 要查询的任务ID    - callback: 回调函数，用于处理状态查询结果    返回值:    - error: 如果查询失败则返回错误信息    |
| [syntaxflow.QuerySyntaxFlowRules](#querysyntaxflowrules) ||
| [syntaxflow.ResumeScan](#resumescan) |ResumeScan 恢复之前暂停的扫描任务    参数:    - ctx: 上下文，用于控制扫描任务的生命周期    - taskId: 要恢复的任务ID    - callback: 回调函数，用于处理扫描结果    返回值:    - error: 如果恢复失败则返回错误信息    |
| [syntaxflow.StartScan](#startscan) |StartScan 启动新的SyntaxFlow扫描任务，使用options模式配置扫描参数    参数:    - ctx: 上下文，用于控制扫描任务的生命周期    - callback: 回调函数，用于处理扫描结果    - opts: 可变数量的选项函数，用于配置扫描参数    返回值:  ...|
| [syntaxflow.withCache](#withcache) ||
| [syntaxflow.withContext](#withcontext) ||
| [syntaxflow.withExecDebug](#withexecdebug) ||
| [syntaxflow.withExecTaskID](#withexectaskid) ||
| [syntaxflow.withProcess](#withprocess) ||
| [syntaxflow.withSave](#withsave) ||
| [syntaxflow.withScanProcessCallback](#withscanprocesscallback) ||
| [syntaxflow.withScanPrograms](#withscanprograms) ||
| [syntaxflow.withScanResultCallback](#withscanresultcallback) ||
| [syntaxflow.withSearch](#withsearch) ||


## 函数定义
### ExecRule

#### 详细描述


#### 定义

`ExecRule(r *schema.SyntaxFlowRule, prog *ssaapi.Program, opts ...ssaapi.QueryOption) (*ssaapi.SyntaxFlowResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*schema.SyntaxFlowRule` |   |
| prog | `*ssaapi.Program` |   |
| opts | `...ssaapi.QueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ssaapi.SyntaxFlowResult` |   |
| r2 | `error` |   |


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
```
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
```


#### 定义

`GetScanStatus(ctx context.Context, taskId string, callback ProcessCallback) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| taskId | `string` |   |
| callback | `ProcessCallback` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### QuerySyntaxFlowRules

#### 详细描述


#### 定义

`QuerySyntaxFlowRules(name string, opts ...QueryRulesOption) chan *schema.SyntaxFlowRule`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...QueryRulesOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.SyntaxFlowRule` |   |


### ResumeScan

#### 详细描述
ResumeScan 恢复之前暂停的扫描任务



参数:

  - ctx: 上下文，用于控制扫描任务的生命周期

  - taskId: 要恢复的任务ID

  - callback: 回调函数，用于处理扫描结果



返回值:

  - error: 如果恢复失败则返回错误信息



Example:
```
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
```


#### 定义

`ResumeScan(ctx context.Context, taskId string, opts ...ssaconfig.Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| taskId | `string` |   |
| opts | `...ssaconfig.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


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
```
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
```


#### 定义

`StartScan(ctx context.Context, opts ...ssaconfig.Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| opts | `...ssaconfig.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### withCache

#### 详细描述


#### 定义

`withCache(b ...bool) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withContext

#### 详细描述


#### 定义

`withContext(ctx context.Context) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withExecDebug

#### 详细描述


#### 定义

`withExecDebug(b ...bool) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withExecTaskID

#### 详细描述


#### 定义

`withExecTaskID(taskID string) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskID | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withProcess

#### 详细描述


#### 定义

`withProcess(cb func(float64, string)) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(float64, string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withSave

#### 详细描述


#### 定义

`withSave() ssaapi.QueryOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaapi.QueryOption` |   |


### withScanProcessCallback

#### 详细描述


#### 定义

`withScanProcessCallback(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withScanPrograms

#### 详细描述


#### 定义

`withScanPrograms(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withScanResultCallback

#### 详细描述


#### 定义

`withScanResultCallback(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withSearch

#### 详细描述


#### 定义

`withSearch() ssaapi.QueryOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaapi.QueryOption` |   |


