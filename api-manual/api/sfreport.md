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
| [sfreport.ImportSSARiskFromJSON](#importssariskfromjson) ||
| [sfreport.NewReport](#newreport) ||
| [sfreport.withDataflowPath](#withdataflowpath) ||
| [sfreport.withFileContent](#withfilecontent) ||
| [sfreport.withStreamReportType](#withstreamreporttype) ||
| [sfreport.withStreamShowDataflowPath](#withstreamshowdataflowpath) ||
| [sfreport.withStreamShowFileContent](#withstreamshowfilecontent) ||
| [sfreport.withStreamWithFile](#withstreamwithfile) ||


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


### ConvertSingleResultToJSONWithOptions

#### 详细描述


#### 定义

`ConvertSingleResultToJSONWithOptions(result *ssaapi.SyntaxFlowResult, reportType ReportType, showDataflow bool, showFileContent bool, withFile bool) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `*ssaapi.SyntaxFlowResult` |   |
| reportType | `ReportType` |   |
| showDataflow | `bool` |   |
| showFileContent | `bool` |   |
| withFile | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### ConvertSingleResultToSSAResultPartsJSONPayload

#### 详细描述


#### 定义

`ConvertSingleResultToSSAResultPartsJSONPayload(result *ssaapi.SyntaxFlowResult, opts ...StreamPartsOption) (map[string]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `*ssaapi.SyntaxFlowResult` |   |
| opts | `...StreamPartsOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |
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


### withStreamReportType

#### 详细描述


#### 定义

`withStreamReportType(v ReportType) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `ReportType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` |   |


### withStreamShowDataflowPath

#### 详细描述


#### 定义

`withStreamShowDataflowPath(v bool) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` |   |


### withStreamShowFileContent

#### 详细描述


#### 定义

`withStreamShowFileContent(v bool) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` |   |


### withStreamWithFile

#### 详细描述


#### 定义

`withStreamWithFile(v bool) StreamPartsOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StreamPartsOption` |   |


