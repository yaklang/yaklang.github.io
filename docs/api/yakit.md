# yakit

|成员函数|函数描述/介绍|
|:------|:--------|
| [yakit.AutoInitYakit](#AutoInitYakit) ||
| [yakit.DeletePayloadByGroup](#DeletePayloadByGroup) ||
| [yakit.EnableTable](#EnableTable) ||
| [yakit.EnableWebsiteTrees](#EnableWebsiteTrees) ||
| [yakit.Error](#Error) ||
| [yakit.File](#File) ||
| [yakit.GenerateYakitMITMHooksParams](#GenerateYakitMITMHooksParams) ||
| [yakit.GetHomeDir](#GetHomeDir) ||
| [yakit.GetHomeTempDir](#GetHomeTempDir) ||
| [yakit.GetOnlineBaseUrl](#GetOnlineBaseUrl) ||
| [yakit.Info](#Info) ||
| [yakit.InitYakit](#InitYakit) ||
| [yakit.Markdown](#Markdown) ||
| [yakit.NewBarGraph](#NewBarGraph) ||
| [yakit.NewClient](#NewClient) ||
| [yakit.NewHTTPFlowRisk](#NewHTTPFlowRisk) ||
| [yakit.NewLineGraph](#NewLineGraph) ||
| [yakit.NewPieGraph](#NewPieGraph) ||
| [yakit.NewTable](#NewTable) ||
| [yakit.NewWordCloud](#NewWordCloud) ||
| [yakit.Output](#Output) ||
| [yakit.QueryDomainsByDomainKeyword](#QueryDomainsByDomainKeyword) ||
| [yakit.QueryDomainsByNetwork](#QueryDomainsByNetwork) ||
| [yakit.QueryDomainsByTitle](#QueryDomainsByTitle) ||
| [yakit.QueryHTTPFlowsAll](#QueryHTTPFlowsAll) ||
| [yakit.QueryHTTPFlowsByKeyword](#QueryHTTPFlowsByKeyword) ||
| [yakit.QueryHostPortAll](#QueryHostPortAll) ||
| [yakit.QueryHostPortByKeyword](#QueryHostPortByKeyword) ||
| [yakit.QueryHostPortByNetwork](#QueryHostPortByNetwork) ||
| [yakit.QueryHostPortByNetworkAndPort](#QueryHostPortByNetworkAndPort) ||
| [yakit.QueryHostsByDomain](#QueryHostsByDomain) ||
| [yakit.QueryHostsByNetwork](#QueryHostsByNetwork) ||
| [yakit.QueryPortAssetByNetwork](#QueryPortAssetByNetwork) ||
| [yakit.QueryUrlsAll](#QueryUrlsAll) ||
| [yakit.QueryUrlsByKeyword](#QueryUrlsByKeyword) ||
| [yakit.Report](#Report) ||
| [yakit.SaveDomain](#SaveDomain) ||
| [yakit.SaveHTTPFlow](#SaveHTTPFlow) ||
| [yakit.SavePayload](#SavePayload) ||
| [yakit.SavePayloadByFile](#SavePayloadByFile) ||
| [yakit.SavePortFromResult](#SavePortFromResult) ||
| [yakit.SetOnlineBaseUrl](#SetOnlineBaseUrl) ||
| [yakit.SetProgress](#SetProgress) ||
| [yakit.SetProgressEx](#SetProgressEx) ||
| [yakit.StatusCard](#StatusCard) ||
| [yakit.TableData](#TableData) ||
| [yakit.Text](#Text) ||
| [yakit.UpdateOnlineYakitStore](#UpdateOnlineYakitStore) ||
| [yakit.UpdateYakitStore](#UpdateYakitStore) ||
| [yakit.UpdateYakitStoreFromGit](#UpdateYakitStoreFromGit) ||
| [yakit.UpdateYakitStoreLocal](#UpdateYakitStoreLocal) ||
| [yakit.Warn](#Warn) ||


## 函数定义
### AutoInitYakit

#### 详细描述


#### 定义

`AutoInitYakit()`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


### DeletePayloadByGroup

#### 详细描述


#### 定义

`DeletePayloadByGroup(group string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### EnableTable

#### 详细描述


#### 定义

`EnableTable(tableName string, columns []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |   |
| columns | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


### EnableWebsiteTrees

#### 详细描述


#### 定义

`EnableWebsiteTrees(targets string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


### Error

#### 详细描述


#### 定义

`Error(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### File

#### 详细描述


#### 定义

`File(fileName string, desc ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |
| desc | `...any` |   |


### GenerateYakitMITMHooksParams

#### 详细描述


#### 定义

`GenerateYakitMITMHooksParams(method string, url string, opts ...yakhttp.HttpOption) ([]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| url | `string` |   |
| opts | `...yakhttp.HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` |   |
| r2 | `error` |   |


### GetHomeDir

#### 详细描述


#### 定义

`GetHomeDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHomeTempDir

#### 详细描述


#### 定义

`GetHomeTempDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetOnlineBaseUrl

#### 详细描述


#### 定义

`GetOnlineBaseUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Info

#### 详细描述


#### 定义

`Info(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### InitYakit

#### 详细描述


#### 定义

`InitYakit(y *YakitClient)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| y | `*YakitClient` |   |


### Markdown

#### 详细描述


#### 定义

`Markdown(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` |   |


### NewBarGraph

#### 详细描述


#### 定义

`NewBarGraph() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### NewClient

#### 详细描述


#### 定义

`NewClient(addr string) *YakitClient`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitClient` |   |


### NewHTTPFlowRisk

#### 详细描述


#### 定义

`NewHTTPFlowRisk(riskName string, isHttps bool, url string, req []byte, rsp []byte) *YakitHTTPFlowRisk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| riskName | `string` |   |
| isHttps | `bool` |   |
| url | `string` |   |
| req | `[]byte` |   |
| rsp | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitHTTPFlowRisk` |   |


### NewLineGraph

#### 详细描述


#### 定义

`NewLineGraph() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### NewPieGraph

#### 详细描述


#### 定义

`NewPieGraph() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### NewTable

#### 详细描述


#### 定义

`NewTable(head ...string) *YakitTable`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| head | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitTable` |   |


### NewWordCloud

#### 详细描述


#### 定义

`NewWordCloud() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### Output

#### 详细描述


#### 定义

`Output(i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### QueryDomainsByDomainKeyword

#### 详细描述


#### 定义

`QueryDomainsByDomainKeyword(keyword string) (chan *yakit.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Domain` |   |
| r2 | `error` |   |


### QueryDomainsByNetwork

#### 详细描述


#### 定义

`QueryDomainsByNetwork(network string) (chan *yakit.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Domain` |   |
| r2 | `error` |   |


### QueryDomainsByTitle

#### 详细描述


#### 定义

`QueryDomainsByTitle(title string) (chan *yakit.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| title | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Domain` |   |
| r2 | `error` |   |


### QueryHTTPFlowsAll

#### 详细描述


#### 定义

`QueryHTTPFlowsAll() chan *yakit.HTTPFlow`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.HTTPFlow` |   |


### QueryHTTPFlowsByKeyword

#### 详细描述


#### 定义

`QueryHTTPFlowsByKeyword(k string) chan *yakit.HTTPFlow`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.HTTPFlow` |   |


### QueryHostPortAll

#### 详细描述


#### 定义

`QueryHostPortAll() chan string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### QueryHostPortByKeyword

#### 详细描述


#### 定义

`QueryHostPortByKeyword(target string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### QueryHostPortByNetwork

#### 详细描述


#### 定义

`QueryHostPortByNetwork(network string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### QueryHostPortByNetworkAndPort

#### 详细描述


#### 定义

`QueryHostPortByNetworkAndPort(network string, port string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |
| port | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### QueryHostsByDomain

#### 详细描述


#### 定义

`QueryHostsByDomain(keyword string) (chan *yakit.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Host` |   |
| r2 | `error` |   |


### QueryHostsByNetwork

#### 详细描述


#### 定义

`QueryHostsByNetwork(network string) (chan *yakit.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Host` |   |
| r2 | `error` |   |


### QueryPortAssetByNetwork

#### 详细描述


#### 定义

`QueryPortAssetByNetwork(network string) (chan *yakit.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Port` |   |
| r2 | `error` |   |


### QueryUrlsAll

#### 详细描述


#### 定义

`QueryUrlsAll() chan string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### QueryUrlsByKeyword

#### 详细描述


#### 定义

`QueryUrlsByKeyword(k string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### Report

#### 详细描述


#### 定义

`Report(i int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |


### SaveDomain

#### 详细描述


#### 定义

`SaveDomain(domain string, ip ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| ip | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SaveHTTPFlow

#### 详细描述


#### 定义

`SaveHTTPFlow(url string, req *http.Request, rsp *http.Response) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| req | `*http.Request` |   |
| rsp | `*http.Response` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SavePayload

#### 详细描述


#### 定义

`SavePayload(group string, payloads []string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |
| payloads | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SavePayloadByFile

#### 详细描述


#### 定义

`SavePayloadByFile(group string, fileName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |
| fileName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SavePortFromResult

#### 详细描述


#### 定义

`SavePortFromResult(t any, taskNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `any` |   |
| taskNames | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SetOnlineBaseUrl

#### 详细描述


#### 定义

`SetOnlineBaseUrl(u string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |


### SetProgress

#### 详细描述


#### 定义

`SetProgress(f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |


### SetProgressEx

#### 详细描述


#### 定义

`SetProgressEx(id string, f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |
| f | `float64` |   |


### StatusCard

#### 详细描述


#### 定义

`StatusCard(id string, data interface) (id string, data interface)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |
| data | `interface` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |
| data | `interface` |   |


### TableData

#### 详细描述


#### 定义

`TableData(tableName string, data any) *YakitFixedTableData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFixedTableData` |   |


### Text

#### 详细描述


#### 定义

`Text(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### UpdateOnlineYakitStore

#### 详细描述


#### 定义

`UpdateOnlineYakitStore() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### UpdateYakitStore

#### 详细描述


#### 定义

`UpdateYakitStore() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### UpdateYakitStoreFromGit

#### 详细描述


#### 定义

`UpdateYakitStoreFromGit(ctx context.Context, ghUrl string, proxy ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| ghUrl | `string` |   |
| proxy | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### UpdateYakitStoreLocal

#### 详细描述


#### 定义

`UpdateYakitStoreLocal(f string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Warn

#### 详细描述


#### 定义

`Warn(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


