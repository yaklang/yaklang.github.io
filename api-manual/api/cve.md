# cve

|函数名|函数描述/介绍|
|:------|:--------|
| [cve.AICompleteFields](#aicompletefields) |CVEAICompleteFields uses AI to complete missing CVE fields like translations Usage:   - cve.AICompleteFields() - use default settings   - cve.AIComple...|
| [cve.Download](#download) |DownLoad 从NVD下载CVE json数据到本地 |
| [cve.Export](#export) |ExportCVE exports all CVE entries to a JSONL file Each line is a JSON object representing a CVE entry |
| [cve.GetCVE](#getcve) ||
| [cve.Import](#import) |ImportCVE imports CVE entries from a JSONL file Each line should be a JSON object representing a CVE entry |
| [cve.LoadCVE](#loadcve) |LoadCVE 从本地的CVE json数据加载构造数据库 |
| [cve.NewStatistics](#newstatistics) ||
| [cve.Query](#query) ||
| [cve.QueryEx](#queryex) ||
| [cve.after](#after) ||
| [cve.aiConcurrent](#aiconcurrent) |WithCVEAIConcurrent sets the number of concurrent workers for AI completion |
| [cve.before](#before) ||
| [cve.cpe](#cpe) ||
| [cve.cve](#cve) ||
| [cve.cwe](#cwe) ||
| [cve.parseToCpe](#parsetocpe) ||
| [cve.product](#product) ||
| [cve.score](#score) ||
| [cve.severity](#severity) ||
| [cve.testLimit](#testlimit) |WithCVETestLimit sets the maximum number of CVEs to process (for testing) |
| [cve.vendor](#vendor) ||


## 函数定义
### AICompleteFields

#### 详细描述
CVEAICompleteFields uses AI to complete missing CVE fields like translations
Usage:
  - cve.AICompleteFields() - use default settings
  - cve.AICompleteFields(ai.type(&#34;openai&#34;)) - specify AI type
  - cve.AICompleteFields(cve.aiConcurrent(10)) - use 10 concurrent workers
  - cve.AICompleteFields(cve.testLimit(5)) - only process 5 CVEs for testing
  - cve.AICompleteFields(cve.aiConcurrent(10), cve.testLimit(5), ai.type(&#34;openai&#34;))


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


### Download

#### 详细描述
DownLoad 从NVD下载CVE json数据到本地


#### 定义

`Download(dir string, cached bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` |   |
| cached | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Export

#### 详细描述
ExportCVE exports all CVE entries to a JSONL file
Each line is a JSON object representing a CVE entry


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


### GetCVE

#### 详细描述


#### 定义

`GetCVE(cve string) *cveresources.CVE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cve | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*cveresources.CVE` |   |


### Import

#### 详细描述
ImportCVE imports CVE entries from a JSONL file
Each line should be a JSON object representing a CVE entry


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


### LoadCVE

#### 详细描述
LoadCVE 从本地的CVE json数据加载构造数据库


#### 定义

`LoadCVE(fileDir string, DbPath string, years ...int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileDir | `string` |   |
| DbPath | `string` |   |
| years | `...int` |   |


### NewStatistics

#### 详细描述


#### 定义

`NewStatistics(source string) *Statistics`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| source | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Statistics` |   |


### Query

#### 详细描述


#### 定义

`Query(db *gorm.DB, opts ...CVEOption) chan *cveresources.CVE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` |   |
| opts | `...CVEOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *cveresources.CVE` |   |


### QueryEx

#### 详细描述


#### 定义

`QueryEx(i ...any) chan *cveresources.CVE`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *cveresources.CVE` |   |


### after

#### 详细描述


#### 定义

`after(year int, data ...int) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| year | `int` |   |
| data | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### aiConcurrent

#### 详细描述
WithCVEAIConcurrent sets the number of concurrent workers for AI completion


#### 定义

`aiConcurrent(n int) CVEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEAICompleteOption` |   |


### before

#### 详细描述


#### 定义

`before(year int, data ...int) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| year | `int` |   |
| data | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### cpe

#### 详细描述


#### 定义

`cpe(c string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### cve

#### 详细描述


#### 定义

`cve(id string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### cwe

#### 详细描述


#### 定义

`cwe(cwe string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cwe | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### parseToCpe

#### 详细描述


#### 定义

`parseToCpe(cpe string) (*CPE, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cpe | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*CPE` |   |
| r2 | `error` |   |


### product

#### 详细描述


#### 定义

`product(p string, v ...string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |
| v | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### score

#### 详细描述


#### 定义

`score(score float64) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| score | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### severity

#### 详细描述


#### 定义

`severity(level string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| level | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


### testLimit

#### 详细描述
WithCVETestLimit sets the maximum number of CVEs to process (for testing)


#### 定义

`testLimit(n int) CVEAICompleteOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEAICompleteOption` |   |


### vendor

#### 详细描述


#### 定义

`vendor(v string) CVEOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CVEOption` |   |


