# cwe

|函数名|函数描述/介绍|
|:------|:--------|
| [cwe.AICompleteFields](#aicompletefields) |AICompleteFields 使用 AI 补全 CWE 缺失字段（如中文翻译，导出名为 cwe.AICompleteFields） 参数: - opts: 可选项，如 cwe.aiConcurrent、cwe.testLimit 或 ai.type 等 AI 配置 返回值: - 错误信息|
| [cwe.Export](#export) |ExportCWE 将所有 CWE 条目导出为 JSONL 文件（导出名为 cwe.Export） 每行是一个表示 CWE 条目的 JSON 对象 参数: - filename: 导出目标文件路径 返回值: - 错误信息|
| [cwe.Get](#get) |getCWE 按 CWE 编号查询单条 CWE 记录（导出名为 cwe.Get，可省略 CWE- 前缀） 参数: - i: CWE 编号，如 &#34;CWE-79&#34; 或 &#34;79&#34; 返回值: - 对应的 CWE 记录，未找到或出错时为 nil|
| [cwe.Import](#import) |ImportCWE 从 JSONL 文件导入 CWE 条目（导出名为 cwe.Import） 每行应为一个表示 CWE 条目的 JSON 对象 参数: - filename: 导入源文件路径 返回值: - 错误信息|
| [cwe.ListAll](#listall) |ListAllCWE 流式返回数据库中所有 CWE 条目（导出名为 cwe.ListAll） 返回值: - CWE 条目的流式通道|
| [cwe.Update](#update) |CWEUpdate 下载并更新本地 CWE 数据库（导出名为 cwe.Update） 参数: - opts: 更新可选项，如 cwe.proxy / cwe.url 返回值: - 错误信息|
| [cwe.aiConcurrent](#aiconcurrent) |WithAIConcurrent 设置 AI 补全 CWE 字段时的并发数（导出名为 cwe.aiConcurrent） 参数: - n: 并发工作协程数 返回值: - CWE AI 补全可选项|
| [cwe.proxy](#proxy) |WithCWEProxy 设置下载 CWE 数据时使用的代理（导出名为 cwe.proxy） 参数: - proxy: 代理地址，如 http://127.0.0.1:8080 返回值: - CWE 更新可选项|
| [cwe.testLimit](#testlimit) |WithTestLimit 限制 AI 补全处理的 CWE 数量，常用于测试（导出名为 cwe.testLimit） 参数: - n: 最大处理数量，0 表示不限制 返回值: - CWE AI 补全可选项|
| [cwe.url](#url) |WithCWEURL 设置 CWE 数据的下载地址（导出名为 cwe.url） 参数: - url: CWE 数据下载 URL 返回值: - CWE 更新可选项|


## 函数定义
### AICompleteFields

#### 详细描述
AICompleteFields 使用 AI 补全 CWE 缺失字段（如中文翻译，导出名为 cwe.AICompleteFields）

参数:

  - opts: 可选项，如 cwe.aiConcurrent、cwe.testLimit 或 ai.type 等 AI 配置



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要 AI 配置与 CWE 数据库
err = cwe.AICompleteFields(cwe.aiConcurrent(10), cwe.testLimit(5))
if err != nil { die(err) }
``````````````


#### 定义

`AICompleteFields(opts ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | 可选项，如 cwe.aiConcurrent、cwe.testLimit 或 ai.type 等 AI 配置 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Export

#### 详细描述
ExportCWE 将所有 CWE 条目导出为 JSONL 文件（导出名为 cwe.Export）

每行是一个表示 CWE 条目的 JSON 对象

参数:

  - filename: 导出目标文件路径



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地 CWE 数据库
err = cwe.Export("/tmp/cwe.jsonl")
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


### Get

#### 详细描述
getCWE 按 CWE 编号查询单条 CWE 记录（导出名为 cwe.Get，可省略 CWE- 前缀）

参数:

  - i: CWE 编号，如 &#34;CWE-79&#34; 或 &#34;79&#34;



返回值:

  - 对应的 CWE 记录，未找到或出错时为 nil




Example:

``````````````yak
// 示意性示例，需要本地 CWE 数据库
c = cwe.Get("CWE-79")
if c != nil { println(c.NameZh) }
``````````````


#### 定义

`Get(i any) *cveresources.CWE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | CWE 编号，如 &#34;CWE-79&#34; 或 &#34;79&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*cveresources.CWE` | 对应的 CWE 记录，未找到或出错时为 nil |


### Import

#### 详细描述
ImportCWE 从 JSONL 文件导入 CWE 条目（导出名为 cwe.Import）

每行应为一个表示 CWE 条目的 JSON 对象

参数:

  - filename: 导入源文件路径



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地 CWE 数据库
err = cwe.Import("/tmp/cwe.jsonl")
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


### ListAll

#### 详细描述
ListAllCWE 流式返回数据库中所有 CWE 条目（导出名为 cwe.ListAll）

返回值:

  - CWE 条目的流式通道




Example:

``````````````yak
// 示意性示例，需要本地 CWE 数据库

	for c in cwe.ListAll() {
	    println(c.CWEString())
	}
``````````````


#### 定义

`ListAll() chan *cveresources.CWE`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *cveresources.CWE` | CWE 条目的流式通道 |


### Update

#### 详细描述
CWEUpdate 下载并更新本地 CWE 数据库（导出名为 cwe.Update）

参数:

  - opts: 更新可选项，如 cwe.proxy / cwe.url



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要网络下载 CWE 数据
err = cwe.Update()
if err != nil { die(err) }
``````````````


#### 定义

`Update(opts ...CWEUpdateOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...CWEUpdateOption` | 更新可选项，如 cwe.proxy / cwe.url |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### aiConcurrent

#### 详细描述
WithAIConcurrent 设置 AI 补全 CWE 字段时的并发数（导出名为 cwe.aiConcurrent）

参数:

  - n: 并发工作协程数



返回值:

  - CWE AI 补全可选项




Example:

``````````````yak
// 示意性示例，需要 AI 配置与 CWE 数据库
err = cwe.AICompleteFields(cwe.aiConcurrent(5))
``````````````


#### 定义

`aiConcurrent(n int) CWEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 并发工作协程数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEAICompleteOption` | CWE AI 补全可选项 |


### proxy

#### 详细描述
WithCWEProxy 设置下载 CWE 数据时使用的代理（导出名为 cwe.proxy）

参数:

  - proxy: 代理地址，如 http://127.0.0.1:8080



返回值:

  - CWE 更新可选项




Example:

``````````````yak
// 示意性示例，需要网络下载 CWE 数据
err = cwe.Update(cwe.proxy("http://127.0.0.1:8080"))
``````````````


#### 定义

`proxy(proxy string) CWEUpdateOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` | 代理地址，如 http://127.0.0.1:8080 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEUpdateOption` | CWE 更新可选项 |


### testLimit

#### 详细描述
WithTestLimit 限制 AI 补全处理的 CWE 数量，常用于测试（导出名为 cwe.testLimit）

参数:

  - n: 最大处理数量，0 表示不限制



返回值:

  - CWE AI 补全可选项




Example:

``````````````yak
// 示意性示例，需要 AI 配置与 CWE 数据库
err = cwe.AICompleteFields(cwe.testLimit(10))
``````````````


#### 定义

`testLimit(n int) CWEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 最大处理数量，0 表示不限制 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEAICompleteOption` | CWE AI 补全可选项 |


### url

#### 详细描述
WithCWEURL 设置 CWE 数据的下载地址（导出名为 cwe.url）

参数:

  - url: CWE 数据下载 URL



返回值:

  - CWE 更新可选项




Example:

``````````````yak
// 示意性示例，需要网络下载 CWE 数据
err = cwe.Update(cwe.url("https://custom-url.com/cwe.zip"))
``````````````


#### 定义

`url(url string) CWEUpdateOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | CWE 数据下载 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEUpdateOption` | CWE 更新可选项 |


