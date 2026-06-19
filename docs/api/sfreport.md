# sfreport

|实例名|实例描述|
|:------|:--------|
IRifyFullReportType|(sfreport.ReportType) &#34;irify-full&#34;|
IRifyReactReportType|(sfreport.ReportType) &#34;irify-react-report&#34;|
IRifyReportType|(sfreport.ReportType) &#34;irify&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [sfreport.ConvertSingleResultToJSON](#convertsingleresulttojson) ||
| [sfreport.ConvertSingleResultToJSONWithOptions](#convertsingleresulttojsonwithoptions) ||
| [sfreport.ConvertSingleResultToSSAResultPartsJSONPayload](#convertsingleresulttossaresultpartsjsonpayload) ||
| [sfreport.GenerateSSAReportMarkdownForTask](#generatessareportmarkdownfortask) |GenerateSSAReportMarkdownForTask 根据扫描任务 ID 在进程内生成 SSA 的 Markdown 报告 导出名为 sfreport.GenerateSSAReportMarkdownForTask，行为对齐 gRPC 的 Yak.GenerateSSAReport 参...|
| [sfreport.ImportSSARiskFromJSON](#importssariskfromjson) |ImportSSARiskFromJSON 从 JSON 报告数据中导入 SSA 风险记录到数据库 导出名为 sfreport.ImportSSARiskFromJSON 参数: - ctx: 上下文，用于控制取消 - db: 目标数据库连接 - jsonData: 报告 JSON 数据（字节） -...|
| [sfreport.NewReport](#newreport) |NewReport 创建一个 SyntaxFlow 扫描报告对象（导出名为 sfreport.NewReport） 报告对象用于汇总规则、风险、文件等信息并最终序列化为 JSON 或 Markdown 参数: - reportType: 报告类型，如 sfreport.IRifyReportType...|
| [sfreport.withDataflowPath](#withdataflowpath) |WithDataflowPath 设置报告中是否包含数据流路径（导出名为 sfreport.withDataflowPath） 参数: - show: 是否展示数据流路径 返回值: - 报告配置可选项|
| [sfreport.withFileContent](#withfilecontent) |WithFileContent 设置报告中是否包含源码文件内容（导出名为 sfreport.withFileContent） 参数: - show: 是否展示文件内容 返回值: - 报告配置可选项|
| [sfreport.withStreamReportType](#withstreamreporttype) |WithStreamReportType 设置流式报告的报告类型（导出名为 sfreport.withStreamReportType） 参数: - v: 报告类型，如 sfreport.IRifyReportType 返回值: - 流式报告可选项|
| [sfreport.withStreamShowDataflowPath](#withstreamshowdataflowpath) |WithStreamShowDataflowPath 设置流式报告是否展示数据流路径（导出名为 sfreport.withStreamShowDataflowPath） 参数: - v: 是否展示数据流路径 返回值: - 流式报告可选项|
| [sfreport.withStreamShowFileContent](#withstreamshowfilecontent) |WithStreamShowFileContent 设置流式报告是否展示文件内容（导出名为 sfreport.withStreamShowFileContent） 参数: - v: 是否展示文件内容 返回值: - 流式报告可选项|
| [sfreport.withStreamWithFile](#withstreamwithfile) |WithStreamWithFile 设置流式报告是否携带文件数据（导出名为 sfreport.withStreamWithFile） 参数: - v: 是否携带文件数据 返回值: - 流式报告可选项|


## 函数定义
### ConvertSingleResultToJSON

#### 详细描述
暂无描述

#### 定义

`ConvertSingleResultToJSON(result *ssaapi.SyntaxFlowResult, showDataflow bool) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `*ssaapi.SyntaxFlowResult` |  |
| showDataflow | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### ConvertSingleResultToJSONWithOptions

#### 详细描述
暂无描述

#### 定义

`ConvertSingleResultToJSONWithOptions(result *ssaapi.SyntaxFlowResult, reportType ReportType, showDataflow bool, showFileContent bool, withFile bool) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `*ssaapi.SyntaxFlowResult` |  |
| reportType | `ReportType` |  |
| showDataflow | `bool` |  |
| showFileContent | `bool` |  |
| withFile | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### ConvertSingleResultToSSAResultPartsJSONPayload

#### 详细描述
暂无描述

#### 定义

`ConvertSingleResultToSSAResultPartsJSONPayload(result *ssaapi.SyntaxFlowResult, opts ...StreamPartsOption) (map[string]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `*ssaapi.SyntaxFlowResult` |  |
| opts | `...StreamPartsOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |  |
| r2 | `error` |  |


### GenerateSSAReportMarkdownForTask

#### 详细描述
GenerateSSAReportMarkdownForTask 根据扫描任务 ID 在进程内生成 SSA 的 Markdown 报告

导出名为 sfreport.GenerateSSAReportMarkdownForTask，行为对齐 gRPC 的 Yak.GenerateSSAReport

参数:

  - taskID: SSA 扫描任务 ID

  - reportName: 生成的报告名称



返回值:

  - 报告记录的数据库 ID

  - 生成的 Markdown 报告内容

  - 错误信息




Example:

``````````````yak
// 根据已完成的扫描任务生成报告（示意性示例）
id, markdown, err = sfreport.GenerateSSAReportMarkdownForTask("task-uuid", "my-report")
if err != nil { die(err) }
println(markdown)
``````````````


#### 定义

`GenerateSSAReportMarkdownForTask(taskID string, reportName string) (int, string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskID | `string` | SSA 扫描任务 ID |
| reportName | `string` | 生成的报告名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 报告记录的数据库 ID |
| r2 | `string` | 生成的 Markdown 报告内容 |
| r3 | `error` | 错误信息 |


### ImportSSARiskFromJSON

#### 详细描述
ImportSSARiskFromJSON 从 JSON 报告数据中导入 SSA 风险记录到数据库

导出名为 sfreport.ImportSSARiskFromJSON

参数:

  - ctx: 上下文，用于控制取消

  - db: 目标数据库连接

  - jsonData: 报告 JSON 数据（字节）

  - callBacks: 可选的进度回调，参数为 (message, progress)



返回值:

  - 错误信息




Example:

``````````````yak
// 导入此前导出的 SSA 风险报告（示意性示例）
ctx = context.Background()
jsonData = file.ReadFile("ssa_report.json")~
err = sfreport.ImportSSARiskFromJSON(ctx, db.GetGormProjectDatabase(), jsonData)
if err != nil { die(err) }
``````````````


#### 定义

`ImportSSARiskFromJSON(ctx context.Context, db *gorm.DB, jsonData []byte, callBacks ...func(string, float64)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制取消 |
| db | `*gorm.DB` | 目标数据库连接 |
| jsonData | `[]byte` | 报告 JSON 数据（字节） |
| callBacks | `...func(string, float64)` | 可选的进度回调，参数为 (message, progress) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### NewReport

#### 详细描述
NewReport 创建一个 SyntaxFlow 扫描报告对象（导出名为 sfreport.NewReport）

报告对象用于汇总规则、风险、文件等信息并最终序列化为 JSON 或 Markdown

参数:

  - reportType: 报告类型，如 sfreport.IRifyReportType / sfreport.IRifyFullReportType

  - opts: 报告配置可选项，如 sfreport.withFileContent / sfreport.withDataflowPath



返回值:

  - 新建的报告对象




Example:

``````````````yak
report = sfreport.NewReport(sfreport.IRifyReportType)
assert report.ReportType == sfreport.IRifyReportType, "report type should match"
``````````````


#### 定义

`NewReport(reportType ReportType, opts ...Option) *Report`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reportType | `ReportType` | 报告类型，如 sfreport.IRifyReportType / sfreport.IRifyFullReportType |
| opts | `...Option` | 报告配置可选项，如 sfreport.withFileContent / sfreport.withDataflowPath |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Report` | 新建的报告对象 |


### withDataflowPath

#### 详细描述
WithDataflowPath 设置报告中是否包含数据流路径（导出名为 sfreport.withDataflowPath）

参数:

  - show: 是否展示数据流路径



返回值:

  - 报告配置可选项




Example:

``````````````yak
// 用于 ConvertSingleResultToJSONWithOptions 等接口的配置
opt = sfreport.withDataflowPath(true)
println(opt)
``````````````


#### 定义

`withDataflowPath(show bool) func(*Config)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| show | `bool` | 是否展示数据流路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(*Config)` | 报告配置可选项 |


### withFileContent

#### 详细描述
WithFileContent 设置报告中是否包含源码文件内容（导出名为 sfreport.withFileContent）

参数:

  - show: 是否展示文件内容



返回值:

  - 报告配置可选项




Example:

``````````````yak
// 用于 ConvertSingleResultToJSONWithOptions 等接口的配置
opt = sfreport.withFileContent(true)
println(opt)
``````````````


#### 定义

`withFileContent(show bool) func(*Config)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| show | `bool` | 是否展示文件内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(*Config)` | 报告配置可选项 |


### withStreamReportType

#### 详细描述
WithStreamReportType 设置流式报告的报告类型（导出名为 sfreport.withStreamReportType）

参数:

  - v: 报告类型，如 sfreport.IRifyReportType



返回值:

  - 流式报告可选项




Example:

``````````````yak
opt = sfreport.withStreamReportType(sfreport.IRifyReportType)
println(opt)
``````````````


#### 定义

`withStreamReportType(v ReportType) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `ReportType` | 报告类型，如 sfreport.IRifyReportType |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` | 流式报告可选项 |


### withStreamShowDataflowPath

#### 详细描述
WithStreamShowDataflowPath 设置流式报告是否展示数据流路径（导出名为 sfreport.withStreamShowDataflowPath）

参数:

  - v: 是否展示数据流路径



返回值:

  - 流式报告可选项




Example:

``````````````yak
opt = sfreport.withStreamShowDataflowPath(true)
println(opt)
``````````````


#### 定义

`withStreamShowDataflowPath(v bool) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` | 是否展示数据流路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` | 流式报告可选项 |


### withStreamShowFileContent

#### 详细描述
WithStreamShowFileContent 设置流式报告是否展示文件内容（导出名为 sfreport.withStreamShowFileContent）

参数:

  - v: 是否展示文件内容



返回值:

  - 流式报告可选项




Example:

``````````````yak
opt = sfreport.withStreamShowFileContent(true)
println(opt)
``````````````


#### 定义

`withStreamShowFileContent(v bool) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` | 是否展示文件内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` | 流式报告可选项 |


### withStreamWithFile

#### 详细描述
WithStreamWithFile 设置流式报告是否携带文件数据（导出名为 sfreport.withStreamWithFile）

参数:

  - v: 是否携带文件数据



返回值:

  - 流式报告可选项




Example:

``````````````yak
opt = sfreport.withStreamWithFile(true)
println(opt)
``````````````


#### 定义

`withStreamWithFile(v bool) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` | 是否携带文件数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` | 流式报告可选项 |


