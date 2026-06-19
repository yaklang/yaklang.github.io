# cve

|函数名|函数描述/介绍|
|:------|:--------|
| [cve.AICompleteFields](#aicompletefields) |CVEAICompleteFields 使用 AI 补全 CVE 缺失字段（如中文翻译，导出名为 cve.AICompleteFields） 参数: - opts: 可选项，如 cve.aiConcurrent、cve.testLimit 或 ai.type 等 AI 配置 返回值: - 错误信息|
| [cve.Download](#download) |DownLoad 从 NVD 下载 CVE json 数据到本地目录（导出名为 cve.Download） 参数: - dir: 下载数据保存目录 - cached: 为 true 时跳过已存在的文件 返回值: - 错误信息|
| [cve.Export](#export) |ExportCVE 将所有 CVE 条目导出为 JSONL 文件（导出名为 cve.Export） 每行是一个表示 CVE 条目的 JSON 对象 参数: - filename: 导出目标文件路径 返回值: - 错误信息|
| [cve.GetCVE](#getcve) |getCVE 按 CVE 编号查询单条 CVE 记录（导出名为 cve.GetCVE） 参数: - cve: CVE 编号，如 CVE-2021-44228 返回值: - 对应的 CVE 记录，未找到时为 nil|
| [cve.Import](#import) |ImportCVE 从 JSONL 文件导入 CVE 条目（导出名为 cve.Import） 每行应为一个表示 CVE 条目的 JSON 对象 参数: - filename: 导入源文件路径 返回值: - 错误信息|
| [cve.LoadCVE](#loadcve) |LoadCVE 从本地 CVE json 数据文件加载并构建 CVE 数据库（导出名为 cve.LoadCVE） 参数: - fileDir: 存放 CVE json 数据文件的目录 - DbPath: 构建出的数据库文件路径 - years: 可选的指定年份，缺省时加载全部|
| [cve.NewStatistics](#newstatistics) |NewStatistics 创建一个 CVE 统计对象，用于汇总指定来源的漏洞统计信息（导出名为 cve.NewStatistics） 参数: - source: 统计数据来源标识 返回值: - CVE 统计对象|
| [cve.Query](#query) |QueryCVEYields 在 CVE 数据库上按条件流式查询 CVE 记录（导出名为 cve.Query） 需要本地 CVE 数据库，通过 cve.cve/cve.vendor/cve.product 等可选项组合过滤条件 参数: - db: CVE 数据库连接 - opts: 查询可选项 返回...|
| [cve.QueryEx](#queryex) |queryEx 使用默认 CVE 数据库按可选项流式查询 CVE（导出名为 cve.QueryEx） 与 cve.Query 类似，但自动获取默认 CVE 数据库连接，无需手动传入 参数: - i: 查询可选项，如 cve.vendor、cve.product 等 返回值: - CVE 记录的流式通...|
| [cve.after](#after) |After 过滤指定日期之后发布的 CVE（导出名为 cve.after） 参数: - year: 年份 - data: 可选的月、日 返回值: - CVE 查询可选项|
| [cve.aiConcurrent](#aiconcurrent) |WithCVEAIConcurrent 设置 AI 补全 CVE 字段时的并发数（导出名为 cve.aiConcurrent） 参数: - n: 并发工作协程数 返回值: - CVE AI 补全可选项|
| [cve.before](#before) |Before 过滤指定日期之前发布的 CVE（导出名为 cve.before） 参数: - year: 年份 - data: 可选的月、日 返回值: - CVE 查询可选项|
| [cve.cpe](#cpe) |CPE 按 CPE 字符串过滤 CVE，支持版本区间写法（导出名为 cve.cpe） 参数: - c: CPE 字符串，版本可使用 [start-end] 区间写法 返回值: - CVE 查询可选项|
| [cve.cve](#cve) |CVE 按 CVE 编号过滤查询（导出名为 cve.cve） 参数: - id: CVE 编号，如 CVE-2021-44228 返回值: - CVE 查询可选项|
| [cve.cwe](#cwe) |CWE 按 CWE 编号过滤 CVE 查询（导出名为 cve.cwe） 参数: - cwe: CWE 编号 返回值: - CVE 查询可选项|
| [cve.parseToCpe](#parsetocpe) ||
| [cve.product](#product) |ProductWithVersion 按产品名（可选版本）过滤 CVE（导出名为 cve.product） 参数: - p: 产品名称 - v: 可选的产品版本 返回值: - CVE 查询可选项|
| [cve.score](#score) |Score 按最低利用评分（CVSS）过滤 CVE（导出名为 cve.score） 参数: - score: 最低评分阈值 返回值: - CVE 查询可选项|
| [cve.severity](#severity) |Severity 按危害等级过滤 CVE（导出名为 cve.severity，支持 high/medium/low） 参数: - level: 危害等级关键字，如 &#34;high&#34;、&#34;medium&#34;、&#34;low&#34; 返回值: - CVE 查询可选项|
| [cve.skipAnyVersion](#skipanyversion) |SkipUnboundedWildcard 设置是否跳过无边界通配的 CPE 匹配（导出名为 cve.skipAnyVersion） 参数: - flag: 为 true 时跳过任意版本（无边界）匹配，减少误报 返回值: - CVE 查询可选项|
| [cve.testLimit](#testlimit) |WithCVETestLimit 限制 AI 补全处理的 CVE 数量，常用于测试（导出名为 cve.testLimit） 参数: - n: 最大处理数量，0 表示不限制 返回值: - CVE AI 补全可选项|
| [cve.vendor](#vendor) |Vendor 按厂商名称过滤 CVE（导出名为 cve.vendor） 参数: - v: 厂商名称 返回值: - CVE 查询可选项|


## 函数定义
### AICompleteFields

#### 详细描述
CVEAICompleteFields 使用 AI 补全 CVE 缺失字段（如中文翻译，导出名为 cve.AICompleteFields）

参数:

  - opts: 可选项，如 cve.aiConcurrent、cve.testLimit 或 ai.type 等 AI 配置



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要 AI 配置与 CVE 数据库
err = cve.AICompleteFields(cve.aiConcurrent(10), cve.testLimit(5))
if err != nil { die(err) }
``````````````


#### 定义

`AICompleteFields(opts ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | 可选项，如 cve.aiConcurrent、cve.testLimit 或 ai.type 等 AI 配置 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Download

#### 详细描述
DownLoad 从 NVD 下载 CVE json 数据到本地目录（导出名为 cve.Download）

参数:

  - dir: 下载数据保存目录

  - cached: 为 true 时跳过已存在的文件



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要网络访问 NVD
err = cve.Download("/tmp/cve-data", true)
if err != nil { die(err) }
``````````````


#### 定义

`Download(dir string, cached bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` | 下载数据保存目录 |
| cached | `bool` | 为 true 时跳过已存在的文件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Export

#### 详细描述
ExportCVE 将所有 CVE 条目导出为 JSONL 文件（导出名为 cve.Export）

每行是一个表示 CVE 条目的 JSON 对象

参数:

  - filename: 导出目标文件路径



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
err = cve.Export("/tmp/cve.jsonl")
if err != nil { die(err) }
``````````````


#### 定义

`Export(filename string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | 导出目标文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### GetCVE

#### 详细描述
getCVE 按 CVE 编号查询单条 CVE 记录（导出名为 cve.GetCVE）

参数:

  - cve: CVE 编号，如 CVE-2021-44228



返回值:

  - 对应的 CVE 记录，未找到时为 nil




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
c = cve.GetCVE("CVE-2021-44228")
if c != nil { println(c.CVE) }
``````````````


#### 定义

`GetCVE(cve string) *cveresources.CVE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cve | `string` | CVE 编号，如 CVE-2021-44228 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*cveresources.CVE` | 对应的 CVE 记录，未找到时为 nil |


### Import

#### 详细描述
ImportCVE 从 JSONL 文件导入 CVE 条目（导出名为 cve.Import）

每行应为一个表示 CVE 条目的 JSON 对象

参数:

  - filename: 导入源文件路径



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
err = cve.Import("/tmp/cve.jsonl")
if err != nil { die(err) }
``````````````


#### 定义

`Import(filename string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | 导入源文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### LoadCVE

#### 详细描述
LoadCVE 从本地 CVE json 数据文件加载并构建 CVE 数据库（导出名为 cve.LoadCVE）

参数:

  - fileDir: 存放 CVE json 数据文件的目录

  - DbPath: 构建出的数据库文件路径

  - years: 可选的指定年份，缺省时加载全部




Example:

``````````````yak
// 示意性示例，需要本地 CVE json 数据
cve.LoadCVE("/tmp/cve-data", "/tmp/cve.db", 2021, 2022)
``````````````


#### 定义

`LoadCVE(fileDir string, DbPath string, years ...int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileDir | `string` | 存放 CVE json 数据文件的目录 |
| DbPath | `string` | 构建出的数据库文件路径 |
| years | `...int` | 可选的指定年份，缺省时加载全部 |


### NewStatistics

#### 详细描述
NewStatistics 创建一个 CVE 统计对象，用于汇总指定来源的漏洞统计信息（导出名为 cve.NewStatistics）

参数:

  - source: 统计数据来源标识



返回值:

  - CVE 统计对象




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
stat = cve.NewStatistics("my-scan")
dump(stat)
``````````````


#### 定义

`NewStatistics(source string) *Statistics`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| source | `string` | 统计数据来源标识 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Statistics` | CVE 统计对象 |


### Query

#### 详细描述
QueryCVEYields 在 CVE 数据库上按条件流式查询 CVE 记录（导出名为 cve.Query）

需要本地 CVE 数据库，通过 cve.cve/cve.vendor/cve.product 等可选项组合过滤条件

参数:

  - db: CVE 数据库连接

  - opts: 查询可选项



返回值:

  - CVE 记录的流式通道




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.vendor("apache"), cve.severity("high")) {
    println(c.CVE)
}
``````````````


#### 定义

`Query(db *gorm.DB, opts ...CVEOption) chan *cveresources.CVE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` | CVE 数据库连接 |
| opts | `...CVEOption` | 查询可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *cveresources.CVE` | CVE 记录的流式通道 |


### QueryEx

#### 详细描述
queryEx 使用默认 CVE 数据库按可选项流式查询 CVE（导出名为 cve.QueryEx）

与 cve.Query 类似，但自动获取默认 CVE 数据库连接，无需手动传入

参数:

  - i: 查询可选项，如 cve.vendor、cve.product 等



返回值:

  - CVE 记录的流式通道




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
for c in cve.QueryEx(cve.vendor("apache")) {
    println(c.CVE)
}
``````````````


#### 定义

`QueryEx(i ...any) chan *cveresources.CVE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 查询可选项，如 cve.vendor、cve.product 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *cveresources.CVE` | CVE 记录的流式通道 |


### after

#### 详细描述
After 过滤指定日期之后发布的 CVE（导出名为 cve.after）

参数:

  - year: 年份

  - data: 可选的月、日



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.after(2021, 1, 1)) {
    println(c.CVE)
}
``````````````


#### 定义

`after(year int, data ...int) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| year | `int` | 年份 |
| data | `...int` | 可选的月、日 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### aiConcurrent

#### 详细描述
WithCVEAIConcurrent 设置 AI 补全 CVE 字段时的并发数（导出名为 cve.aiConcurrent）

参数:

  - n: 并发工作协程数



返回值:

  - CVE AI 补全可选项




Example:

``````````````yak
// 示意性示例，需要 AI 配置与 CVE 数据库
err = cve.AICompleteFields(cve.aiConcurrent(5))
``````````````


#### 定义

`aiConcurrent(n int) CVEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 并发工作协程数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEAICompleteOption` | CVE AI 补全可选项 |


### before

#### 详细描述
Before 过滤指定日期之前发布的 CVE（导出名为 cve.before）

参数:

  - year: 年份

  - data: 可选的月、日



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.before(2020, 12, 31)) {
    println(c.CVE)
}
``````````````


#### 定义

`before(year int, data ...int) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| year | `int` | 年份 |
| data | `...int` | 可选的月、日 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### cpe

#### 详细描述
CPE 按 CPE 字符串过滤 CVE，支持版本区间写法（导出名为 cve.cpe）

参数:

  - c: CPE 字符串，版本可使用 [start-end] 区间写法



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.cpe("cpe:/a:apache:log4j:2.14.1")) {
    println(c.CVE)
}
``````````````


#### 定义

`cpe(c string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `string` | CPE 字符串，版本可使用 [start-end] 区间写法 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### cve

#### 详细描述
CVE 按 CVE 编号过滤查询（导出名为 cve.cve）

参数:

  - id: CVE 编号，如 CVE-2021-44228



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.cve("CVE-2021-44228")) {
    println(c.CVE)
}
``````````````


#### 定义

`cve(id string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` | CVE 编号，如 CVE-2021-44228 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### cwe

#### 详细描述
CWE 按 CWE 编号过滤 CVE 查询（导出名为 cve.cwe）

参数:

  - cwe: CWE 编号



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.cwe("CWE-79")) {
    println(c.CVE)
}
``````````````


#### 定义

`cwe(cwe string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cwe | `string` | CWE 编号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### parseToCpe

#### 详细描述
暂无描述

#### 定义

`parseToCpe(cpe string) (*CPE, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cpe | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*CPE` |  |
| r2 | `error` |  |


### product

#### 详细描述
ProductWithVersion 按产品名（可选版本）过滤 CVE（导出名为 cve.product）

参数:

  - p: 产品名称

  - v: 可选的产品版本



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.product("log4j", "2.14.1")) {
    println(c.CVE)
}
``````````````


#### 定义

`product(p string, v ...string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` | 产品名称 |
| v | `...string` | 可选的产品版本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### score

#### 详细描述
Score 按最低利用评分（CVSS）过滤 CVE（导出名为 cve.score）

参数:

  - score: 最低评分阈值



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.score(9.0)) {
    println(c.CVE)
}
``````````````


#### 定义

`score(score float64) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| score | `float64` | 最低评分阈值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### severity

#### 详细描述
Severity 按危害等级过滤 CVE（导出名为 cve.severity，支持 high/medium/low）

参数:

  - level: 危害等级关键字，如 &#34;high&#34;、&#34;medium&#34;、&#34;low&#34;



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.severity("high")) {
    println(c.CVE)
}
``````````````


#### 定义

`severity(level string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| level | `string` | 危害等级关键字，如 &#34;high&#34;、&#34;medium&#34;、&#34;low&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### skipAnyVersion

#### 详细描述
SkipUnboundedWildcard 设置是否跳过无边界通配的 CPE 匹配（导出名为 cve.skipAnyVersion）

参数:

  - flag: 为 true 时跳过任意版本（无边界）匹配，减少误报



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.product("nginx"), cve.skipAnyVersion(true)) {
    println(c.CVE)
}
``````````````


#### 定义

`skipAnyVersion(flag bool) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| flag | `bool` | 为 true 时跳过任意版本（无边界）匹配，减少误报 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


### testLimit

#### 详细描述
WithCVETestLimit 限制 AI 补全处理的 CVE 数量，常用于测试（导出名为 cve.testLimit）

参数:

  - n: 最大处理数量，0 表示不限制



返回值:

  - CVE AI 补全可选项




Example:

``````````````yak
// 示意性示例，需要 AI 配置与 CVE 数据库
err = cve.AICompleteFields(cve.testLimit(10))
``````````````


#### 定义

`testLimit(n int) CVEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 最大处理数量，0 表示不限制 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEAICompleteOption` | CVE AI 补全可选项 |


### vendor

#### 详细描述
Vendor 按厂商名称过滤 CVE（导出名为 cve.vendor）

参数:

  - v: 厂商名称



返回值:

  - CVE 查询可选项




Example:

``````````````yak
// 示意性示例，需要本地 CVE 数据库
db = cve.GetCVEDatabase()
for c in cve.Query(db, cve.vendor("apache")) {
    println(c.CVE)
}
``````````````


#### 定义

`vendor(v string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `string` | 厂商名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` | CVE 查询可选项 |


