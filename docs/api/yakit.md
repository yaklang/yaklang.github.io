# yakit

|成员函数|函数描述/介绍|
|:------|:--------|
| [yakit.AutoInitYakit](#autoinityakit) ||
| [yakit.DeletePayloadByGroup](#deletepayloadbygroup) ||
| [yakit.EnableTable](#enabletable) ||
| [yakit.EnableText](#enabletext) ||
| [yakit.EnableWebsiteTrees](#enablewebsitetrees) ||
| [yakit.GenerateYakitMITMHooksParams](#generateyakitmitmhooksparams) ||
| [yakit.GetHomeDir](#gethomedir) ||
| [yakit.GetHomeTempDir](#gethometempdir) ||
| [yakit.GetOnlineBaseUrl](#getonlinebaseurl) ||
| [yakit.InitYakit](#inityakit) ||
| [yakit.NewBarGraph](#newbargraph) ||
| [yakit.NewClient](#newclient) ||
| [yakit.NewHTTPFlowRisk](#newhttpflowrisk) ||
| [yakit.NewLineGraph](#newlinegraph) ||
| [yakit.NewPieGraph](#newpiegraph) ||
| [yakit.NewTable](#newtable) ||
| [yakit.NewWordCloud](#newwordcloud) ||
| [yakit.Output](#output) ||
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
| [yakit.SaveDomain](#savedomain) ||
| [yakit.SaveHTTPFlow](#savehttpflow) ||
| [yakit.SavePayload](#savepayload) ||
| [yakit.SavePayloadByFile](#savepayloadbyfile) ||
| [yakit.SavePortFromResult](#saveportfromresult) ||
| [yakit.SetOnlineBaseUrl](#setonlinebaseurl) ||
| [yakit.StatusCard](#statuscard) ||
| [yakit.TableData](#tabledata) ||
| [yakit.TextTabData](#texttabdata) ||
| [yakit.UpdateOnlineYakitStore](#updateonlineyakitstore) ||
| [yakit.UpdateYakitStore](#updateyakitstore) ||
| [yakit.UpdateYakitStoreFromGit](#updateyakitstorefromgit) ||
| [yakit.UpdateYakitStoreLocal](#updateyakitstorelocal) ||
| [yakit.YakitDebug](#yakitdebug) ||
| [yakit.YakitError](#yakiterror) ||
| [yakit.YakitFile](#yakitfile) ||
| [yakit.YakitInfo](#yakitinfo) ||
| [yakit.YakitMarkdown](#yakitmarkdown) ||
| [yakit.YakitReport](#yakitreport) ||
| [yakit.YakitSetProgress](#yakitsetprogress) ||
| [yakit.YakitSetProgressEx](#yakitsetprogressex) ||
| [yakit.YakitTextBlock](#yakittextblock) ||
| [yakit.YakitWarn](#yakitwarn) ||


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

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


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

`GetOnlineBaseUrl() YAK_ONLINE_BASEURL`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `YAK_ONLINE_BASEURL` |   |


### InitYakit

#### 详细描述


#### 定义

`InitYakit(y *YakitClient)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| y | `*YakitClient` |   |


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

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


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


### YakitDebug

#### 详细描述


#### 定义

`Debug(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### YakitError

#### 详细描述


#### 定义

`Error(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### YakitFile

#### 详细描述


#### 定义

`File(fileName string, desc ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |
| desc | `...any` |   |


### YakitInfo

#### 详细描述


#### 定义

`Info(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### YakitMarkdown

#### 详细描述


#### 定义

`Markdown(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` |   |


### YakitReport

#### 详细描述


#### 定义

`Report(i int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |


### YakitSetProgress

#### 详细描述


#### 定义

`SetProgress(f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |


### YakitSetProgressEx

#### 详细描述


#### 定义

`SetProgressEx(id string, f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |
| f | `float64` |   |


### YakitTextBlock

#### 详细描述


#### 定义

`Text(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` |   |


### YakitWarn

#### 详细描述


#### 定义

`Warn(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


