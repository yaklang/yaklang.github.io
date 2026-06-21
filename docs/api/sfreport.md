# sfreport {#library-sfreport}

`sfreport` 库用于把 SyntaxFlow 代码审计结果转换为报告（JSON/Markdown），并支持数据流路径、源码片段的导出与 SSA 风险的导入导出，是代码审计结果交付的专用工具。

典型使用场景：

- 结果转报告：`sfreport.ConvertSingleResultToJSON` / `sfreport.ConvertSingleResultToJSONWithOptions` 把单个 SyntaxFlow 结果转 JSON，`sfreport.GenerateSSAReportMarkdownForTask` 为审计任务生成 Markdown 报告。
- 导入与定制：`sfreport.NewReport` 创建报告对象，`sfreport.ImportSSARiskFromJSON` 导入 SSA 风险，`sfreport.withDataflowPath` / `sfreport.withFileContent` 控制是否包含数据流路径与源码内容。

与相邻库的关系：`sfreport` 是 `syntaxflow`/`ssa`（代码审计引擎）的报告输出层，与 `risk`（SSA 风险对象）、`report`（通用报告）配合，把审计发现交付为可读报告。

> 共 12 个函数、3 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| IRifyFullReportType | `sfreport.ReportType` | &#34;irify-full&#34; |
| IRifyReactReportType | `sfreport.ReportType` | &#34;irify-react-report&#34; |
| IRifyReportType | `sfreport.ReportType` | &#34;irify&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [sfreport.ConvertSingleResultToJSON](#convertsingleresulttojson) | `result *ssaapi.SyntaxFlowResult, showDataflowPath bool` | `string, error` | 将单个 SyntaxFlow 扫描结果转换为 JSON 报告字符串 |
| [sfreport.ConvertSingleResultToJSONWithOptions](#convertsingleresulttojsonwithoptions) | `result *ssaapi.SyntaxFlowResult, reportType ReportType, showDataflowPath bool, showFileContent bool, withFile bool` | `string, error` | 将单个 SyntaxFlow 扫描结果按指定选项转换为 JSON 报告 |
| [sfreport.GenerateSSAReportMarkdownForTask](#generatessareportmarkdownfortask) | `taskID string, reportName string` | `int, string, error` | 根据扫描任务 ID 在进程内生成 SSA 的 Markdown 报告 |
| [sfreport.withDataflowPath](#withdataflowpath) | `show bool` | `func(*Config)` | 设置报告中是否包含数据流路径（导出名为 sfreport.withDataflowPath） |
| [sfreport.withFileContent](#withfilecontent) | `show bool` | `func(*Config)` | 设置报告中是否包含源码文件内容（导出名为 sfreport.withFileContent） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [sfreport.ConvertSingleResultToSSAResultPartsJSONPayload](#convertsingleresulttossaresultpartsjsonpayload) | `result *ssaapi.SyntaxFlowResult, opts ...StreamPartsOption` | `map[string]any, error` | 将单个 SyntaxFlow 扫描结果转换为分片 JSON 载荷（导出名为 sfreport.ConvertSingleResultToSSAResultPartsJSONPayload） |
| [sfreport.ImportSSARiskFromJSON](#importssariskfromjson) | `ctx context.Context, db *gorm.DB, jsonData []byte, callBacks ...func(string, float64)` | `error` | 从 JSON 报告数据中导入 SSA 风险记录到数据库 |
| [sfreport.NewReport](#newreport) | `reportType ReportType, opts ...Option` | `*Report` | 创建一个 SyntaxFlow 扫描报告对象（导出名为 sfreport.NewReport） |

## 函数详情

### ConvertSingleResultToJSON {#convertsingleresulttojson}

```go
ConvertSingleResultToJSON(result *ssaapi.SyntaxFlowResult, showDataflowPath bool) (string, error)
```

将单个 SyntaxFlow 扫描结果转换为 JSON 报告字符串

导出名为 sfreport.ConvertSingleResultToJSON

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| result | `*ssaapi.SyntaxFlowResult` | SyntaxFlow 扫描结果对象 |
| showDataflowPath | `bool` | 是否在报告中展示数据流路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | JSON 报告字符串（无风险时为空字符串） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// result 来自 ssa/syntaxflow 的扫描结果（示意性示例）
prog = ssa.Parse(code)~
result = prog.SyntaxFlowWithError("sink* as $sink")~
jsonStr = sfreport.ConvertSingleResultToJSON(result, true)~
println(jsonStr)
``````````````

---

### ConvertSingleResultToJSONWithOptions {#convertsingleresulttojsonwithoptions}

```go
ConvertSingleResultToJSONWithOptions(result *ssaapi.SyntaxFlowResult, reportType ReportType, showDataflowPath bool, showFileContent bool, withFile bool) (string, error)
```

将单个 SyntaxFlow 扫描结果按指定选项转换为 JSON 报告

导出名为 sfreport.ConvertSingleResultToJSONWithOptions

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| result | `*ssaapi.SyntaxFlowResult` | SyntaxFlow 扫描结果对象 |
| reportType | `ReportType` | 报告类型 |
| showDataflowPath | `bool` | 是否展示数据流路径 |
| showFileContent | `bool` | 是否展示文件内容 |
| withFile | `bool` | 是否携带文件数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | JSON 报告字符串（无风险时为空字符串） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// result 来自 ssa/syntaxflow 的扫描结果（示意性示例）
prog = ssa.Parse(code)~
result = prog.SyntaxFlowWithError("sink* as $sink")~
jsonStr = sfreport.ConvertSingleResultToJSONWithOptions(result, sfreport.IRifyFullReportType, true, true, true)~
println(jsonStr)
``````````````

---

### GenerateSSAReportMarkdownForTask {#generatessareportmarkdownfortask}

```go
GenerateSSAReportMarkdownForTask(taskID string, reportName string) (int, string, error)
```

根据扫描任务 ID 在进程内生成 SSA 的 Markdown 报告

导出名为 sfreport.GenerateSSAReportMarkdownForTask，行为对齐 gRPC 的 Yak.GenerateSSAReport

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| taskID | `string` | SSA 扫描任务 ID |
| reportName | `string` | 生成的报告名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 报告记录的数据库 ID |
| r2 | `string` | 生成的 Markdown 报告内容 |
| r3 | `error` | 错误信息 |

**示例**

``````````````yak
// 根据已完成的扫描任务生成报告（示意性示例）
id, markdown, err = sfreport.GenerateSSAReportMarkdownForTask("task-uuid", "my-report")
if err != nil { die(err) }
println(markdown)
``````````````

---

### withDataflowPath {#withdataflowpath}

```go
withDataflowPath(show bool) func(*Config)
```

设置报告中是否包含数据流路径（导出名为 sfreport.withDataflowPath）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| show | `bool` | 是否展示数据流路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `func(*Config)` | 报告配置可选项 |

**示例**

``````````````yak
// 用于 ConvertSingleResultToJSONWithOptions 等接口的配置
opt = sfreport.withDataflowPath(true)
println(opt)
``````````````

---

### withFileContent {#withfilecontent}

```go
withFileContent(show bool) func(*Config)
```

设置报告中是否包含源码文件内容（导出名为 sfreport.withFileContent）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| show | `bool` | 是否展示文件内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `func(*Config)` | 报告配置可选项 |

**示例**

``````````````yak
// 用于 ConvertSingleResultToJSONWithOptions 等接口的配置
opt = sfreport.withFileContent(true)
println(opt)
``````````````

---

## 可变参数函数详情

### ConvertSingleResultToSSAResultPartsJSONPayload {#convertsingleresulttossaresultpartsjsonpayload}

```go
ConvertSingleResultToSSAResultPartsJSONPayload(result *ssaapi.SyntaxFlowResult, opts ...StreamPartsOption) (map[string]any, error)
```

将单个 SyntaxFlow 扫描结果转换为分片 JSON 载荷（导出名为 sfreport.ConvertSingleResultToSSAResultPartsJSONPayload）

返回一个字典，包含 json(报告内容)、stats(统计信息)、ok(是否成功)、has_payload(是否含有效载荷)

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| result | `*ssaapi.SyntaxFlowResult` | SyntaxFlow 扫描结果对象 |

**可选参数**

可作为可变参数 `opts ...StreamPartsOption` 传入选项；共 4 个可用选项，详见 [StreamPartsOption 选项列表](#option-streampartsoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` | 包含 json/stats/ok/has_payload 的字典 |
| r2 | `error` | 错误信息（转换失败时返回） |

**示例**

``````````````yak
// result 来自 ssa/syntaxflow 的扫描结果（示意性示例，需要可用的 SSA 程序与规则）
prog = ssa.Parse(code)~
result = prog.SyntaxFlowWithError("sink* as $sink")~
payload = sfreport.ConvertSingleResultToSSAResultPartsJSONPayload(result)~
println(payload["ok"])
``````````````

---

### ImportSSARiskFromJSON {#importssariskfromjson}

```go
ImportSSARiskFromJSON(ctx context.Context, db *gorm.DB, jsonData []byte, callBacks ...func(string, float64)) error
```

从 JSON 报告数据中导入 SSA 风险记录到数据库

导出名为 sfreport.ImportSSARiskFromJSON

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制取消 |
| db | `*gorm.DB` | 目标数据库连接 |
| jsonData | `[]byte` | 报告 JSON 数据（字节） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| callBacks | `...func(string, float64)` | 可选的进度回调，参数为 (message, progress) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 导入此前导出的 SSA 风险报告（示意性示例）
ctx = context.Background()
jsonData = file.ReadFile("ssa_report.json")~
err = sfreport.ImportSSARiskFromJSON(ctx, db.GetGormProjectDatabase(), jsonData)
if err != nil { die(err) }
``````````````

---

### NewReport {#newreport}

```go
NewReport(reportType ReportType, opts ...Option) *Report
```

创建一个 SyntaxFlow 扫描报告对象（导出名为 sfreport.NewReport）

报告对象用于汇总规则、风险、文件等信息并最终序列化为 JSON 或 Markdown

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| reportType | `ReportType` | 报告类型，如 sfreport.IRifyReportType / sfreport.IRifyFullReportType |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...Option` | 报告配置可选项，如 sfreport.withFileContent / sfreport.withDataflowPath |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Report` | 新建的报告对象 |

**示例**

``````````````yak
report = sfreport.NewReport(sfreport.IRifyReportType)
assert report.ReportType == sfreport.IRifyReportType, "report type should match"
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：StreamPartsOption {#option-streampartsoption}

涉及到的函数有：[sfreport.ConvertSingleResultToSSAResultPartsJSONPayload](#convertsingleresulttossaresultpartsjsonpayload)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `sfreport.withStreamReportType` | `v ReportType` | `StreamPartsOption` | 设置流式报告的报告类型 |
| `sfreport.withStreamShowDataflowPath` | `v bool` | `StreamPartsOption` | 设置流式报告是否展示数据流路径 |
| `sfreport.withStreamShowFileContent` | `v bool` | `StreamPartsOption` | 设置流式报告是否展示文件内容 |
| `sfreport.withStreamWithFile` | `v bool` | `StreamPartsOption` | 设置流式报告是否携带文件数据 |

