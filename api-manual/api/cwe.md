# cwe

|函数名|函数描述/介绍|
|:------|:--------|
| [cwe.AICompleteFields](#aicompletefields) |AICompleteFields uses AI to complete missing CWE fields like translations Usage:   - cwe.AICompleteFields() - use default settings   - cwe.AICompleteF...|
| [cwe.Export](#export) |ExportCWE exports all CWE entries to a JSONL file Each line is a JSON object representing a CWE entry |
| [cwe.Get](#get) ||
| [cwe.Import](#import) |ImportCWE imports CWE entries from a JSONL file Each line should be a JSON object representing a CWE entry |
| [cwe.ListAll](#listall) |ListAllCWE returns a channel that yields all CWE entries from the database |
| [cwe.Update](#update) |CWEUpdate downloads and updates the CWE database Usage: cwe.Update() or cwe.Update(cwe.proxy(&amp;#34;http://127.0.0.1:8080&amp;#34;), cwe.url(&amp;#34;https://cu...|
| [cwe.aiConcurrent](#aiconcurrent) |WithAIConcurrent sets the number of concurrent workers for AI completion |
| [cwe.proxy](#proxy) |WithCWEProxy sets the proxy for CWE download |
| [cwe.testLimit](#testlimit) |WithTestLimit sets the maximum number of CWEs to process (for testing) |
| [cwe.url](#url) |WithCWEURL sets the URL for CWE download |


## 函数定义
### AICompleteFields

#### 详细描述
AICompleteFields uses AI to complete missing CWE fields like translations
Usage:
  - cwe.AICompleteFields() - use default settings
  - cwe.AICompleteFields(ai.type(&#34;openai&#34;)) - specify AI type
  - cwe.AICompleteFields(cwe.aiConcurrent(10)) - use 10 concurrent workers
  - cwe.AICompleteFields(cwe.testLimit(5)) - only process 5 CWEs for testing
  - cwe.AICompleteFields(cwe.aiConcurrent(10), cwe.testLimit(5), ai.type(&#34;openai&#34;))


#### 定义

`AICompleteFields(opts ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Export

#### 详细描述
ExportCWE exports all CWE entries to a JSONL file
Each line is a JSON object representing a CWE entry


#### 定义

`Export(filename string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Get

#### 详细描述


#### 定义

`Get(i any) *cveresources.CWE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*cveresources.CWE` |   |


### Import

#### 详细描述
ImportCWE imports CWE entries from a JSONL file
Each line should be a JSON object representing a CWE entry


#### 定义

`Import(filename string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### ListAll

#### 详细描述
ListAllCWE returns a channel that yields all CWE entries from the database


#### 定义

`ListAll() chan *cveresources.CWE`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *cveresources.CWE` |   |


### Update

#### 详细描述
CWEUpdate downloads and updates the CWE database
Usage: cwe.Update() or cwe.Update(cwe.proxy(&#34;http://127.0.0.1:8080&#34;), cwe.url(&#34;https://custom-url.com/cwe.zip&#34;))


#### 定义

`Update(opts ...CWEUpdateOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...CWEUpdateOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### aiConcurrent

#### 详细描述
WithAIConcurrent sets the number of concurrent workers for AI completion


#### 定义

`aiConcurrent(n int) CWEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEAICompleteOption` |   |


### proxy

#### 详细描述
WithCWEProxy sets the proxy for CWE download


#### 定义

`proxy(proxy string) CWEUpdateOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEUpdateOption` |   |


### testLimit

#### 详细描述
WithTestLimit sets the maximum number of CWEs to process (for testing)


#### 定义

`testLimit(n int) CWEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEAICompleteOption` |   |


### url

#### 详细描述
WithCWEURL sets the URL for CWE download


#### 定义

`url(url string) CWEUpdateOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CWEUpdateOption` |   |


