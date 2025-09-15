# yakit

|函数名|函数描述/介绍|
|:------|:--------|
| [.](#) ||
| [yakit.AutoInitYakit](#autoinityakit) ||
| [yakit.Code](#code) ||
| [yakit.Debug](#debug) ||
| [yakit.DeletePayloadByGroup](#deletepayloadbygroup) ||
| [yakit.EnableDotGraphTab](#enabledotgraphtab) ||
| [yakit.EnableTable](#enabletable) ||
| [yakit.EnableText](#enabletext) ||
| [yakit.EnableWebsiteTrees](#enablewebsitetrees) ||
| [yakit.Error](#error) ||
| [yakit.File](#file) ||
| [yakit.GenerateYakitMITMHooksParams](#generateyakitmitmhooksparams) ||
| [yakit.GetHomeDir](#gethomedir) ||
| [yakit.GetHomeTempDir](#gethometempdir) ||
| [yakit.Info](#info) ||
| [yakit.InitYakit](#inityakit) ||
| [yakit.Markdown](#markdown) ||
| [yakit.NewBarGraph](#newbargraph) ||
| [yakit.NewClient](#newclient) ||
| [yakit.NewHTTPFlowRisk](#newhttpflowrisk) ||
| [yakit.NewLineGraph](#newlinegraph) ||
| [yakit.NewPieGraph](#newpiegraph) ||
| [yakit.NewTable](#newtable) ||
| [yakit.NewWordCloud](#newwordcloud) ||
| [yakit.ObjToPort](#objtoport) ||
| [yakit.Output](#output) ||
| [yakit.OutputDotGraph](#outputdotgraph) ||
| [yakit.QueryDomainsByDomainKeyword](#querydomainsbydomainkeyword) ||
| [yakit.QueryDomainsByNetwork](#querydomainsbynetwork) ||
| [yakit.QueryDomainsByTitle](#querydomainsbytitle) ||
| [yakit.QueryHTTPFlowsAll](#queryhttpflowsall) ||
| [yakit.QueryHTTPFlowsByKeyword](#queryhttpflowsbykeyword) ||
| [yakit.QueryHostPortAll](#queryhostportall) ||
| [yakit.QueryHostPortByKeyword](#queryhostportbykeyword) ||
| [yakit.QueryHostPortByNetwork](#queryhostportbynetwork) ||
| [yakit.QueryHostPortByNetworkAndPort](#queryhostportbynetworkandport) ||
| [yakit.QueryHostsByDomain](#queryhostsbydomain) ||
| [yakit.QueryHostsByNetwork](#queryhostsbynetwork) ||
| [yakit.QueryPortAssetByNetwork](#queryportassetbynetwork) ||
| [yakit.QueryUrlsAll](#queryurlsall) ||
| [yakit.QueryUrlsByKeyword](#queryurlsbykeyword) ||
| [yakit.Report](#report) ||
| [yakit.SaveDomain](#savedomain) ||
| [yakit.SaveHTTPFlow](#savehttpflow) ||
| [yakit.SavePayload](#savepayload) ||
| [yakit.SavePayloadByFile](#savepayloadbyfile) ||
| [yakit.SavePortFromResult](#saveportfromresult) ||
| [yakit.SetOnlineBaseUrl](#setonlinebaseurl) ||
| [yakit.SetProgress](#setprogress) ||
| [yakit.SetProgressEx](#setprogressex) ||
| [yakit.StatusCard](#statuscard) ||
| [yakit.Stream](#stream) ||
| [yakit.Success](#success) ||
| [yakit.TableData](#tabledata) ||
| [yakit.Text](#text) ||
| [yakit.TextTabData](#texttabdata) ||
| [yakit.UpdateOnlineYakitStore](#updateonlineyakitstore) ||
| [yakit.UpdateYakitStore](#updateyakitstore) ||
| [yakit.UpdateYakitStoreFromGit](#updateyakitstorefromgit) ||
| [yakit.UpdateYakitStoreLocal](#updateyakitstorelocal) ||
| [yakit.Warn](#warn) ||
| [yakit.fileChmodAction](#filechmodaction) ||
| [yakit.fileCreateAction](#filecreateaction) ||
| [yakit.fileDeleteAction](#filedeleteaction) ||
| [yakit.fileFindAction](#filefindaction) ||
| [yakit.fileReadAction](#filereadaction) ||
| [yakit.fileStatusAction](#filestatusaction) ||
| [yakit.fileWriteAction](#filewriteaction) ||


## 函数定义
### 

#### 详细描述


#### 定义

``


### AutoInitYakit

#### 详细描述


#### 定义

`AutoInitYakit()`


### Code

#### 详细描述


#### 定义

`Code(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` |   |


### Debug

#### 详细描述


#### 定义

`Debug(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


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


### EnableDotGraphTab

#### 详细描述


#### 定义

`EnableDotGraphTab(tabName string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |   |


### EnableTable

#### 详细描述


#### 定义

`EnableTable(tableName string, columns []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |   |
| columns | `[]string` |   |


### EnableText

#### 详细描述


#### 定义

`EnableText(tabName string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |   |


### EnableWebsiteTrees

#### 详细描述


#### 定义

`EnableWebsiteTrees(targets string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` |   |


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

`File(fileName string, option ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |
| option | `...any` |   |


### GenerateYakitMITMHooksParams

#### 详细描述


#### 定义

`GenerateYakitMITMHooksParams(method string, url string, opts ...http_struct.HttpOption) ([]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| url | `string` |   |
| opts | `...http_struct.HttpOption` |   |

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

`NewBarGraph(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` |   |

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

`NewLineGraph(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### NewPieGraph

#### 详细描述


#### 定义

`NewPieGraph(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` |   |

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

`NewWordCloud(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### ObjToPort

#### 详细描述


#### 定义

`ObjToPort(t any) (*schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Port` |   |
| r2 | `error` |   |


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


### OutputDotGraph

#### 详细描述


#### 定义

`OutputDotGraph(tabName string, data string) *YakitDotGraphData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |   |
| data | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitDotGraphData` |   |


### QueryDomainsByDomainKeyword

#### 详细描述


#### 定义

`QueryDomainsByDomainKeyword(keyword string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` |   |
| r2 | `error` |   |


### QueryDomainsByNetwork

#### 详细描述


#### 定义

`QueryDomainsByNetwork(network string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` |   |
| r2 | `error` |   |


### QueryDomainsByTitle

#### 详细描述


#### 定义

`QueryDomainsByTitle(title string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| title | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` |   |
| r2 | `error` |   |


### QueryHTTPFlowsAll

#### 详细描述


#### 定义

`QueryHTTPFlowsAll() chan *schema.HTTPFlow`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.HTTPFlow` |   |


### QueryHTTPFlowsByKeyword

#### 详细描述


#### 定义

`QueryHTTPFlowsByKeyword(k string) chan *schema.HTTPFlow`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.HTTPFlow` |   |


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

`QueryHostsByDomain(keyword string) (chan *schema.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Host` |   |
| r2 | `error` |   |


### QueryHostsByNetwork

#### 详细描述


#### 定义

`QueryHostsByNetwork(network string) (chan *schema.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Host` |   |
| r2 | `error` |   |


### QueryPortAssetByNetwork

#### 详细描述


#### 定义

`QueryPortAssetByNetwork(network string) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` |   |
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

`SavePayload(group string, payloadRaw any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |
| payloadRaw | `any` |   |

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

`SavePortFromResult(t any, RuntimeId ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `any` |   |
| RuntimeId | `...string` |   |

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

`StatusCard(id string, data any, tags ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |
| data | `any` |   |
| tags | `...string` |   |


### Stream

#### 详细描述


#### 定义

`Stream(streamType string, streamId string, stream io.Reader, extra ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| streamType | `string` |   |
| streamId | `string` |   |
| stream | `io.Reader` |   |
| extra | `...any` |   |


### Success

#### 详细描述


#### 定义

`Success(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` |   |


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

`Text(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` |   |


### TextTabData

#### 详细描述


#### 定义

`TextTabData(tabName string, data string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |   |
| data | `string` |   |


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


### fileChmodAction

#### 详细描述


#### 定义

`fileChmodAction(chmodMode uint32) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| chmodMode | `uint32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |   |


### fileCreateAction

#### 详细描述


#### 定义

`fileCreateAction(isDir bool, chmodMode uint32) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isDir | `bool` |   |
| chmodMode | `uint32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |   |


### fileDeleteAction

#### 详细描述


#### 定义

`fileDeleteAction(isDir bool) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isDir | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |   |


### fileFindAction

#### 详细描述


#### 定义

`fileFindAction(findMode string, findCondition string, findContent ...string) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| findMode | `string` |   |
| findCondition | `string` |   |
| findContent | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |   |


### fileReadAction

#### 详细描述


#### 定义

`fileReadAction(offset int, length int, unit string, content []byte) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| offset | `int` |   |
| length | `int` |   |
| unit | `string` |   |
| content | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |   |


### fileStatusAction

#### 详细描述


#### 定义

`fileStatusAction(status any) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| status | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |   |


### fileWriteAction

#### 详细描述


#### 定义

`fileWriteAction(length int, mode string, content []byte) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` |   |
| mode | `string` |   |
| content | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |   |


