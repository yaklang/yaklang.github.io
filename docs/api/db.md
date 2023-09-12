# db

|成员函数|函数描述/介绍|
|:------|:--------|
| [db.CreateTemporaryYakScript](#CreateTemporaryYakScript) ||
| [db.DelKey](#DelKey) ||
| [db.DeletePayloadByGroup](#DeletePayloadByGroup) ||
| [db.DeleteYakScriptByName](#DeleteYakScriptByName) ||
| [db.DeleteYakitMenuItemAll](#DeleteYakitMenuItemAll) ||
| [db.DownloadGeoIP](#DownloadGeoIP) ||
| [db.GetKey](#GetKey) ||
| [db.GetProjectKey](#GetProjectKey) ||
| [db.GetYakitPluginByName](#GetYakitPluginByName) ||
| [db.NewAliveHost](#NewAliveHost) ||
| [db.QueryAliveHost](#QueryAliveHost) ||
| [db.QueryDomainsByDomainKeyword](#QueryDomainsByDomainKeyword) ||
| [db.QueryDomainsByNetwork](#QueryDomainsByNetwork) ||
| [db.QueryDomainsByTitle](#QueryDomainsByTitle) ||
| [db.QueryHTTPFlowsAll](#QueryHTTPFlowsAll) ||
| [db.QueryHTTPFlowsByID](#QueryHTTPFlowsByID) ||
| [db.QueryHTTPFlowsByKeyword](#QueryHTTPFlowsByKeyword) ||
| [db.QueryHostPortByKeyword](#QueryHostPortByKeyword) ||
| [db.QueryHostPortByNetwork](#QueryHostPortByNetwork) ||
| [db.QueryHostsByDomain](#QueryHostsByDomain) ||
| [db.QueryIPCity](#QueryIPCity) ||
| [db.QueryIPForIPS](#QueryIPForIPS) ||
| [db.QueryPayloadGroups](#QueryPayloadGroups) ||
| [db.QueryPortsByTaskName](#QueryPortsByTaskName) ||
| [db.QueryPortsByUpdatedAt](#QueryPortsByUpdatedAt) ||
| [db.QueryUrlsAll](#QueryUrlsAll) ||
| [db.QueryUrlsByKeyword](#QueryUrlsByKeyword) ||
| [db.SaveDomain](#SaveDomain) ||
| [db.SaveHTTPFlowFromNative](#SaveHTTPFlowFromNative) ||
| [db.SaveHTTPFlowFromNativeWithType](#SaveHTTPFlowFromNativeWithType) ||
| [db.SaveHTTPFlowFromRaw](#SaveHTTPFlowFromRaw) ||
| [db.SaveHTTPFlowFromRawWithType](#SaveHTTPFlowFromRawWithType) ||
| [db.SavePayload](#SavePayload) ||
| [db.SavePayloadByFile](#SavePayloadByFile) ||
| [db.SavePortFromResult](#SavePortFromResult) ||
| [db.SaveYakitMenuItemByBatchExecuteConfig](#SaveYakitMenuItemByBatchExecuteConfig) ||
| [db.SaveYakitPlugin](#SaveYakitPlugin) ||
| [db.SetKey](#SetKey) ||
| [db.SetProjectKey](#SetProjectKey) ||
| [db.YieldYakScriptAll](#YieldYakScriptAll) ||


## 函数定义
### db.CreateTemporaryYakScript

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


### db.DelKey

#### 详细描述


#### 定义

`DelKey(k any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |


### db.DeletePayloadByGroup

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


### db.DeleteYakScriptByName

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


### db.DeleteYakitMenuItemAll

#### 详细描述


#### 定义

`DeleteYakitMenuItemAll() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### db.DownloadGeoIP

#### 详细描述


#### 定义

`DownloadGeoIP() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### db.GetKey

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


### db.GetProjectKey

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


### db.GetYakitPluginByName

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


### db.NewAliveHost

#### 详细描述


#### 定义

`NewAliveHost(target string, opts ...yakit.AliveHostParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...yakit.AliveHostParamsOpt` |   |


### db.QueryAliveHost

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


### db.QueryDomainsByDomainKeyword

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


### db.QueryDomainsByNetwork

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


### db.QueryDomainsByTitle

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


### db.QueryHTTPFlowsAll

#### 详细描述


#### 定义

`QueryHTTPFlowsAll() chan *yakit.HTTPFlow`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.HTTPFlow` |   |


### db.QueryHTTPFlowsByID

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


### db.QueryHTTPFlowsByKeyword

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


### db.QueryHostPortByKeyword

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


### db.QueryHostPortByNetwork

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


### db.QueryHostsByDomain

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


### db.QueryIPCity

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


### db.QueryIPForIPS

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


### db.QueryPayloadGroups

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


### db.QueryPortsByTaskName

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


### db.QueryPortsByUpdatedAt

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


### db.QueryUrlsAll

#### 详细描述


#### 定义

`QueryUrlsAll() chan string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### db.QueryUrlsByKeyword

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


### db.SaveDomain

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


### db.SaveHTTPFlowFromNative

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


### db.SaveHTTPFlowFromNativeWithType

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


### db.SaveHTTPFlowFromRaw

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


### db.SaveHTTPFlowFromRawWithType

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


### db.SavePayload

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


### db.SavePayloadByFile

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


### db.SavePortFromResult

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


### db.SaveYakitMenuItemByBatchExecuteConfig

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


### db.SaveYakitPlugin

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


### db.SetKey

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


### db.SetProjectKey

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


### db.YieldYakScriptAll

#### 详细描述


#### 定义

`YieldYakScriptAll() chan *yakit.YakScript`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.YakScript` |   |


