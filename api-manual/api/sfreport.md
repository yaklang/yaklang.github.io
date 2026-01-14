# sfreport

|实例名|实例描述|
|:------|:--------|
IRifyFullReportType|(sfreport.ReportType) &#34;irify-full&#34;|
IRifyReactReportType|(sfreport.ReportType) &#34;irify-react-report&#34;|
IRifyReportType|(sfreport.ReportType) &#34;irify&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [sfreport.ConvertSingleResultToJSON](#convertsingleresulttojson) ||
| [sfreport.ImportSSARiskFromJSON](#importssariskfromjson) ||
| [sfreport.NewReport](#newreport) ||
| [sfreport.withDataflowPath](#withdataflowpath) ||
| [sfreport.withFileContent](#withfilecontent) ||


## 函数定义
### ConvertSingleResultToJSON

#### 详细描述


#### 定义

`ConvertSingleResultToJSON(result *ssaapi.SyntaxFlowResult, showDataflow bool) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `*ssaapi.SyntaxFlowResult` |   |
| showDataflow | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### ImportSSARiskFromJSON

#### 详细描述


#### 定义

`ImportSSARiskFromJSON(ctx context.Context, db *gorm.DB, jsonData []byte, callBacks ...func(string, float64)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| db | `*gorm.DB` |   |
| jsonData | `[]byte` |   |
| callBacks | `...func(string, float64)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### NewReport

#### 详细描述


#### 定义

`NewReport(reportType ReportType, opts ...Option) *Report`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reportType | `ReportType` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Report` |   |


### withDataflowPath

#### 详细描述


#### 定义

`withDataflowPath(show bool) func(*Config)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| show | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(*Config)` |   |


### withFileContent

#### 详细描述


#### 定义

`withFileContent(show bool) func(*Config)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| show | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(*Config)` |   |


