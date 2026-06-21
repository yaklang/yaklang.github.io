# cve {#library-cve}

`cve` 库提供本地 CVE（通用漏洞披露）数据库的下载、导入、查询与统计能力，便于把指纹识别结果关联到已知漏洞，支撑漏洞情报与版本比对。

典型使用场景：

- 数据管理：`cve.Download` 下载 CVE 数据，`cve.LoadCVE` / `cve.Import` / `cve.Export` 加载导入导出，`cve.AICompleteFields` 用 AI 补全字段。
- 查询：`cve.GetCVE` 按编号取单条，`cve.Query` / `cve.QueryEx` 按条件流式查询，配合 `cve.product` / `cve.vendor` / `cve.cpe` / `cve.score` / `cve.severity` / `cve.after` / `cve.before` 等选项过滤；`cve.parseToCpe` 解析 CPE 串。
- 统计：`cve.NewStatistics` 生成统计视图。

与相邻库的关系：`cve` 与 `cwe`（弱点分类）、`sca`（成分分析）、`servicescan`（指纹/版本识别）协同：识别出产品与版本后，用 `cve` 关联已知漏洞。

> 共 22 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [cve.Download](#download) | `dir string, cached bool` | `error` | 从 NVD 下载 CVE json 数据到本地目录（导出名为 cve.Download） |
| [cve.Export](#export) | `filename string` | `error` | ExportCVE 将所有 CVE 条目导出为 JSONL 文件（导出名为 cve.Export） |
| [cve.GetCVE](#getcve) | `cve string` | `*cveresources.CVE` | 按 CVE 编号查询单条 CVE 记录（导出名为 cve.GetCVE） |
| [cve.Import](#import) | `filename string` | `error` | ImportCVE 从 JSONL 文件导入 CVE 条目（导出名为 cve.Import） |
| [cve.NewStatistics](#newstatistics) | `source string` | `*Statistics` | 创建一个 CVE 统计对象，用于汇总指定来源的漏洞统计信息（导出名为 cve.NewStatistics） |
| [cve.aiConcurrent](#aiconcurrent) | `n int` | `CVEAICompleteOption` | WithCVEAIConcurrent 设置 AI 补全 CVE 字段时的并发数（导出名为 cve.aiConcurrent） |
| [cve.parseToCpe](#parsetocpe) | `cpe string` | `*CPE, error` | 将 CPE 字符串解析为结构化的 CPE 对象（导出名为 cve.parseToCpe） |
| [cve.testLimit](#testlimit) | `n int` | `CVEAICompleteOption` | WithCVETestLimit 限制 AI 补全处理的 CVE 数量，常用于测试（导出名为 cve.testLimit） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [cve.AICompleteFields](#aicompletefields) | `opts ...any` | `error` | 使用 AI 补全 CVE 缺失字段（如中文翻译，导出名为 cve.AICompleteFields） |
| [cve.LoadCVE](#loadcve) | `fileDir string, DbPath string, years ...int` | - | 从本地 CVE json 数据文件加载并构建 CVE 数据库（导出名为 cve.LoadCVE） |
| [cve.Query](#query) | `db *gorm.DB, opts ...CVEOption` | `chan *cveresources.CVE` | QueryCVEYields 在 CVE 数据库上按条件流式查询 CVE 记录（导出名为 cve.Query） |
| [cve.QueryEx](#queryex) | `i ...any` | `chan *cveresources.CVE` | 使用默认 CVE 数据库按可选项流式查询 CVE（导出名为 cve.QueryEx） |

## 函数详情

### Download {#download}

```go
Download(dir string, cached bool) error
```

从 NVD 下载 CVE json 数据到本地目录（导出名为 cve.Download）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| dir | `string` | 下载数据保存目录 |
| cached | `bool` | 为 true 时跳过已存在的文件 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要网络访问 NVD
err = cve.Download("/tmp/cve-data", true)
if err != nil { die(err) }
``````````````

---

### Export {#export}

```go
Export(filename string) error
```

ExportCVE 将所有 CVE 条目导出为 JSONL 文件（导出名为 cve.Export）

每行是一个表示 CVE 条目的 JSON 对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 导出目标文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地 CVE 数据库
err = cve.Export("/tmp/cve.jsonl")
if err != nil { die(err) }
``````````````

---

### GetCVE {#getcve}

```go
GetCVE(cve string) *cveresources.CVE
```

按 CVE 编号查询单条 CVE 记录（导出名为 cve.GetCVE）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cve | `string` | CVE 编号，如 CVE-2021-44228 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*cveresources.CVE` | 对应的 CVE 记录，未找到时为 nil |

**示例**

``````````````yak
// 示意性示例，需要本地 CVE 数据库
c = cve.GetCVE("CVE-2021-44228")
if c != nil { println(c.CVE) }
``````````````

---

### Import {#import}

```go
Import(filename string) error
```

ImportCVE 从 JSONL 文件导入 CVE 条目（导出名为 cve.Import）

每行应为一个表示 CVE 条目的 JSON 对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 导入源文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地 CVE 数据库
err = cve.Import("/tmp/cve.jsonl")
if err != nil { die(err) }
``````````````

---

### NewStatistics {#newstatistics}

```go
NewStatistics(source string) *Statistics
```

创建一个 CVE 统计对象，用于汇总指定来源的漏洞统计信息（导出名为 cve.NewStatistics）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| source | `string` | 统计数据来源标识 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Statistics` | CVE 统计对象 |

**示例**

``````````````yak
// 示意性示例，需要本地 CVE 数据库
stat = cve.NewStatistics("my-scan")
dump(stat)
``````````````

---

### aiConcurrent {#aiconcurrent}

```go
aiConcurrent(n int) CVEAICompleteOption
```

WithCVEAIConcurrent 设置 AI 补全 CVE 字段时的并发数（导出名为 cve.aiConcurrent）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 并发工作协程数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `CVEAICompleteOption` | CVE AI 补全可选项 |

**示例**

``````````````yak
// 示意性示例，需要 AI 配置与 CVE 数据库
err = cve.AICompleteFields(cve.aiConcurrent(5))
``````````````

---

### parseToCpe {#parsetocpe}

```go
parseToCpe(cpe string) (*CPE, error)
```

将 CPE 字符串解析为结构化的 CPE 对象（导出名为 cve.parseToCpe）

同时支持 CPE 2.2（cpe:/...）与 CPE 2.3（cpe:2.3:...）两种格式，解析出

part/vendor/product/version 等字段

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cpe | `string` | CPE 字符串，如 &#34;cpe:/a:apache:http_server:2.4.49&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*CPE` | 解析得到的 CPE 对象，包含 Part/Vendor/Product/Version 等字段 |
| r2 | `error` | 错误信息（输入不是合法 CPE 字符串时返回） |

**示例**

``````````````yak
cpe = cve.parseToCpe("cpe:/a:apache:http_server:2.4.49")~
println(cpe.Vendor + " " + cpe.Product + " " + cpe.Version)
assert cpe.Vendor == "apache", "vendor should be apache"
assert cpe.Product == "http_server", "product should be http_server"
assert cpe.Version == "2.4.49", "version should be 2.4.49"
``````````````

---

### testLimit {#testlimit}

```go
testLimit(n int) CVEAICompleteOption
```

WithCVETestLimit 限制 AI 补全处理的 CVE 数量，常用于测试（导出名为 cve.testLimit）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 最大处理数量，0 表示不限制 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `CVEAICompleteOption` | CVE AI 补全可选项 |

**示例**

``````````````yak
// 示意性示例，需要 AI 配置与 CVE 数据库
err = cve.AICompleteFields(cve.testLimit(10))
``````````````

---

## 可变参数函数详情

### AICompleteFields {#aicompletefields}

```go
AICompleteFields(opts ...any) error
```

使用 AI 补全 CVE 缺失字段（如中文翻译，导出名为 cve.AICompleteFields）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 可选项，如 cve.aiConcurrent、cve.testLimit 或 ai.type 等 AI 配置 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要 AI 配置与 CVE 数据库
err = cve.AICompleteFields(cve.aiConcurrent(10), cve.testLimit(5))
if err != nil { die(err) }
``````````````

---

### LoadCVE {#loadcve}

```go
LoadCVE(fileDir string, DbPath string, years ...int)
```

从本地 CVE json 数据文件加载并构建 CVE 数据库（导出名为 cve.LoadCVE）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| fileDir | `string` | 存放 CVE json 数据文件的目录 |
| DbPath | `string` | 构建出的数据库文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| years | `...int` | 可选的指定年份，缺省时加载全部 |

**示例**

``````````````yak
// 示意性示例，需要本地 CVE json 数据
cve.LoadCVE("/tmp/cve-data", "/tmp/cve.db", 2021, 2022)
``````````````

---

### Query {#query}

```go
Query(db *gorm.DB, opts ...CVEOption) chan *cveresources.CVE
```

QueryCVEYields 在 CVE 数据库上按条件流式查询 CVE 记录（导出名为 cve.Query）

需要本地 CVE 数据库，通过 cve.cve/cve.vendor/cve.product 等可选项组合过滤条件

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| db | `*gorm.DB` | CVE 数据库连接 |

**可选参数**

可作为可变参数 `opts ...CVEOption` 传入选项；共 10 个可用选项，详见 [CVEOption 选项列表](#option-cveoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *cveresources.CVE` | CVE 记录的流式通道 |

**示例**

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()

	for c in cve.Query(db, cve.vendor("apache"), cve.severity("high")) {
	    println(c.CVE)
	}
``````````````

---

### QueryEx {#queryex}

```go
QueryEx(i ...any) chan *cveresources.CVE
```

使用默认 CVE 数据库按可选项流式查询 CVE（导出名为 cve.QueryEx）

与 cve.Query 类似，但自动获取默认 CVE 数据库连接，无需手动传入

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 查询可选项，如 cve.vendor、cve.product 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *cveresources.CVE` | CVE 记录的流式通道 |

**示例**

``````````````yak
// 示意性示例，需要本地 CVE 数据库

	for c in cve.QueryEx(cve.vendor("apache")) {
	    println(c.CVE)
	}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：CVEOption {#option-cveoption}

涉及到的函数有：[cve.Query](#query)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `cve.after` | `year int, data ...int` | `CVEOption` | 过滤指定日期之后发布的 CVE |
| `cve.before` | `year int, data ...int` | `CVEOption` | 过滤指定日期之前发布的 CVE |
| `cve.cpe` | `c string` | `CVEOption` | 按 CPE 字符串过滤 CVE，支持版本区间写法 |
| `cve.cve` | `id string` | `CVEOption` | 按 CVE 编号过滤查询 |
| `cve.cwe` | `cwe string` | `CVEOption` | 按 CWE 编号过滤 CVE 查询 |
| `cve.product` | `p string, v ...string` | `CVEOption` | ProductWithVersion 按产品名（可选版本）过滤 CVE |
| `cve.score` | `score float64` | `CVEOption` | 按最低利用评分（CVSS）过滤 CVE |
| `cve.severity` | `level string` | `CVEOption` | 按危害等级过滤 CVE |
| `cve.skipAnyVersion` | `flag bool` | `CVEOption` | SkipUnboundedWildcard 设置是否跳过无边界通配的 CPE 匹配 |
| `cve.vendor` | `v string` | `CVEOption` | 按厂商名称过滤 CVE |

