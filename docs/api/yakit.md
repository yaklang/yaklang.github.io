# yakit

|成员函数|函数描述/介绍|
|:------|:--------|
| [yakit.AutoInitYakit](#autoinityakit) ||
| [yakit.DeletePayloadByGroup](#deletepayloadbygroup) ||
| [yakit.EnableTable](#enabletable) ||
| [yakit.EnableWebsiteTrees](#enablewebsitetrees) ||
| [yakit.Error](#error) ||
| [yakit.File](#file) ||
| [yakit.GenerateYakitMITMHooksParams](#generateyakitmitmhooksparams) ||
| [yakit.GetHomeDir](#gethomedir) ||
| [yakit.GetHomeTempDir](#gethometempdir) ||
| [yakit.GetOnlineBaseUrl](#getonlinebaseurl) ||
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
| [yakit.TableData](#tabledata) ||
| [yakit.Text](#text) ||
| [yakit.UpdateOnlineYakitStore](#updateonlineyakitstore) ||
| [yakit.UpdateYakitStore](#updateyakitstore) ||
| [yakit.UpdateYakitStoreFromGit](#updateyakitstorefromgit) ||
| [yakit.UpdateYakitStoreLocal](#updateyakitstorelocal) ||
| [yakit.Warn](#warn) ||


## 函数定义
### autoinityakit

#### 详细描述


#### 定义

`AutoInitYakit()`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


### deletepayloadbygroup

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


### enabletable

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


### enablewebsitetrees

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


### error

#### 详细描述


#### 定义

`Error(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### file

#### 详细描述


#### 定义

`File(fileName string, desc ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |
| desc | `...any` |   |


### generateyakitmitmhooksparams

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


### gethomedir

#### 详细描述


#### 定义

`GetHomeDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### gethometempdir

#### 详细描述


#### 定义

`GetHomeTempDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### getonlinebaseurl

#### 详细描述


#### 定义

`GetOnlineBaseUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### info

#### 详细描述


#### 定义

`Info(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### inityakit

#### 详细描述


#### 定义

`InitYakit(y *YakitClient)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| y | `*YakitClient` |   |


### markdown

#### 详细描述


#### 定义

`Markdown(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` |   |


### newbargraph

#### 详细描述


#### 定义

`NewBarGraph() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### newclient

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


### newhttpflowrisk

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


### newlinegraph

#### 详细描述


#### 定义

`NewLineGraph() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### newpiegraph

#### 详细描述


#### 定义

`NewPieGraph() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### newtable

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


### newwordcloud

#### 详细描述


#### 定义

`NewWordCloud() *YakitGraph`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` |   |


### output

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


### querydomainsbydomainkeyword

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


### querydomainsbynetwork

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


### querydomainsbytitle

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


### queryhttpflowsall

#### 详细描述


#### 定义

`QueryHTTPFlowsAll() chan *yakit.HTTPFlow`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.HTTPFlow` |   |


### queryhttpflowsbykeyword

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


### queryhostportall

#### 详细描述


#### 定义

`QueryHostPortAll() chan string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### queryhostportbykeyword

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


### queryhostportbynetwork

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


### queryhostportbynetworkandport

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


### queryhostsbydomain

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


### queryhostsbynetwork

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


### queryportassetbynetwork

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


### queryurlsall

#### 详细描述


#### 定义

`QueryUrlsAll() chan string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### queryurlsbykeyword

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


### report

#### 详细描述


#### 定义

`Report(i int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |


### savedomain

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


### savehttpflow

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


### savepayload

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


### savepayloadbyfile

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


### saveportfromresult

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


### setonlinebaseurl

#### 详细描述


#### 定义

`SetOnlineBaseUrl(u string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |


### setprogress

#### 详细描述


#### 定义

`SetProgress(f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |


### setprogressex

#### 详细描述


#### 定义

`SetProgressEx(id string, f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |
| f | `float64` |   |


### statuscard

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


### tabledata

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


### text

#### 详细描述


#### 定义

`Text(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


### updateonlineyakitstore

#### 详细描述


#### 定义

`UpdateOnlineYakitStore() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### updateyakitstore

#### 详细描述


#### 定义

`UpdateYakitStore() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### updateyakitstorefromgit

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


### updateyakitstorelocal

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


### warn

#### 详细描述


#### 定义

`Warn(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` |   |
| items | `...any` |   |


