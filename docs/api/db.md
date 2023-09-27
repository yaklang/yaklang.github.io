# db

|成员函数|函数描述/介绍|
|:------|:--------|
| [db.CreateTemporaryYakScript](#createtemporaryyakscript) ||
| [db.DelKey](#delkey) ||
| [db.DeletePayloadByGroup](#deletepayloadbygroup) ||
| [db.DeleteYakScriptByName](#deleteyakscriptbyname) ||
| [db.DeleteYakitMenuItemAll](#deleteyakitmenuitemall) ||
| [db.DownloadGeoIP](#downloadgeoip) ||
| [db.GetKey](#getkey) ||
| [db.GetProjectKey](#getprojectkey) ||
| [db.GetYakitPluginByName](#getyakitpluginbyname) ||
| [db.NewAliveHost](#newalivehost) ||
| [db.QueryAliveHost](#queryalivehost) ||
| [db.QueryDomainsByDomainKeyword](#querydomainsbydomainkeyword) ||
| [db.QueryDomainsByNetwork](#querydomainsbynetwork) ||
| [db.QueryDomainsByTitle](#querydomainsbytitle) ||
| [db.QueryHTTPFlowsAll](#queryhttpflowsall) ||
| [db.QueryHTTPFlowsByID](#queryhttpflowsbyid) ||
| [db.QueryHTTPFlowsByKeyword](#queryhttpflowsbykeyword) ||
| [db.QueryHostPortByKeyword](#queryhostportbykeyword) ||
| [db.QueryHostPortByNetwork](#queryhostportbynetwork) ||
| [db.QueryHostsByDomain](#queryhostsbydomain) ||
| [db.QueryIPCity](#queryipcity) ||
| [db.QueryIPForIPS](#queryipforips) ||
| [db.QueryPayloadGroups](#querypayloadgroups) ||
| [db.QueryPortsByTaskName](#queryportsbytaskname) ||
| [db.QueryPortsByUpdatedAt](#queryportsbyupdatedat) ||
| [db.QueryUrlsAll](#queryurlsall) ||
| [db.QueryUrlsByKeyword](#queryurlsbykeyword) ||
| [db.SaveDomain](#savedomain) ||
| [db.SaveHTTPFlowFromNative](#savehttpflowfromnative) ||
| [db.SaveHTTPFlowFromNativeWithType](#savehttpflowfromnativewithtype) ||
| [db.SaveHTTPFlowFromRaw](#savehttpflowfromraw) ||
| [db.SaveHTTPFlowFromRawWithType](#savehttpflowfromrawwithtype) ||
| [db.SavePayload](#savepayload) ||
| [db.SavePayloadByFile](#savepayloadbyfile) ||
| [db.SavePortFromResult](#saveportfromresult) ||
| [db.SaveYakitMenuItemByBatchExecuteConfig](#saveyakitmenuitembybatchexecuteconfig) ||
| [db.SaveYakitPlugin](#saveyakitplugin) ||
| [db.SetKey](#setkey) ||
| [db.SetProjectKey](#setprojectkey) ||
| [db.YieldYakScriptAll](#yieldyakscriptall) ||


## 函数定义
### createtemporaryyakscript

#### 详细描述


#### 定义

`CreateTemporaryYakScript(t string, code string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |
| code | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### delkey

#### 详细描述


#### 定义

`DelKey(k any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |


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


### deleteyakscriptbyname

#### 详细描述


#### 定义

`DeleteYakScriptByName(i string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### deleteyakitmenuitemall

#### 详细描述


#### 定义

`DeleteYakitMenuItemAll() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### downloadgeoip

#### 详细描述


#### 定义

`DownloadGeoIP() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### getkey

#### 详细描述


#### 定义

`GetKey(k any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### getprojectkey

#### 详细描述


#### 定义

`GetProjectKey(k any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### getyakitpluginbyname

#### 详细描述


#### 定义

`GetYakitPluginByName(name string) (*yakit.YakScript, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakit.YakScript` |   |
| r2 | `error` |   |


### newalivehost

#### 详细描述


#### 定义

`NewAliveHost(target string, opts ...yakit.AliveHostParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...yakit.AliveHostParamsOpt` |   |


### queryalivehost

#### 详细描述


#### 定义

`QueryAliveHost(runtimeId string) chan *yakit.AliveHost`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.AliveHost` |   |


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


### queryhttpflowsbyid

#### 详细描述


#### 定义

`QueryHTTPFlowsByID(id ...int64) chan *yakit.HTTPFlow`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `...int64` |   |

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


### queryhostportbykeyword

#### 详细描述


#### 定义

`QueryHostPortByKeyword(network string) (chan *yakit.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Host` |   |
| r2 | `error` |   |


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


### queryipcity

#### 详细描述


#### 定义

`QueryIPCity(ip string) (*geo.City, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.City` |   |
| r2 | `error` |   |


### queryipforips

#### 详细描述


#### 定义

`QueryIPForIPS(ip string) (*geo.ISP, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.ISP` |   |
| r2 | `error` |   |


### querypayloadgroups

#### 详细描述


#### 定义

`QueryPayloadGroups(group string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### queryportsbytaskname

#### 详细描述


#### 定义

`QueryPortsByTaskName(taskName string) (chan *yakit.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Port` |   |
| r2 | `error` |   |


### queryportsbyupdatedat

#### 详细描述


#### 定义

`QueryPortsByUpdatedAt(timestamp int64) (chan *yakit.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestamp | `int64` |   |

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


### savehttpflowfromnative

#### 详细描述


#### 定义

`SaveHTTPFlowFromNative(url string, req *http.Request, rsp *http.Response) error`

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


### savehttpflowfromnativewithtype

#### 详细描述


#### 定义

`SaveHTTPFlowFromNativeWithType(url string, req *http.Request, rsp *http.Response, typeStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| req | `*http.Request` |   |
| rsp | `*http.Response` |   |
| typeStr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### savehttpflowfromraw

#### 详细描述


#### 定义

`SaveHTTPFlowFromRaw(url string, req []byte, rsp []byte, typeStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| req | `[]byte` |   |
| rsp | `[]byte` |   |
| typeStr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### savehttpflowfromrawwithtype

#### 详细描述


#### 定义

`SaveHTTPFlowFromRawWithType(url string, req []byte, rsp []byte, typeStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| req | `[]byte` |   |
| rsp | `[]byte` |   |
| typeStr | `string` |   |

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


### saveyakitmenuitembybatchexecuteconfig

#### 详细描述


#### 定义

`SaveYakitMenuItemByBatchExecuteConfig(raw any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### saveyakitplugin

#### 详细描述


#### 定义

`SaveYakitPlugin(scriptName string, typeStr string, content any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scriptName | `string` |   |
| typeStr | `string` |   |
| content | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### setkey

#### 详细描述


#### 定义

`SetKey(k any, v any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### setprojectkey

#### 详细描述


#### 定义

`SetProjectKey(k any, v any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### yieldyakscriptall

#### 详细描述


#### 定义

`YieldYakScriptAll() chan *yakit.YakScript`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.YakScript` |   |


