# db

|实例名|实例描述|
|:------|:--------|
YAKIT_PLUGIN_TYPE_CODEC|(string) &#34;codec&#34;|
YAKIT_PLUGIN_TYPE_MITM|(string) &#34;mitm&#34;|
YAKIT_PLUGIN_TYPE_NUCLEI|(string) &#34;nuclei&#34;|
YAKIT_PLUGIN_TYPE_PACKET_HACK|(string) &#34;packet-hack&#34;|
YAKIT_PLUGIN_TYPE_PORTSCAN|(string) &#34;port-scan&#34;|
YAKIT_PLUGIN_TYPE_YAK|(string) &#34;yak&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [db.CreateTemporaryYakScript](#createtemporaryyakscript) ||
| [db.DelKey](#delkey) ||
| [db.DeletePayloadByGroup](#deletepayloadbygroup) ||
| [db.DeleteYakScriptByName](#deleteyakscriptbyname) ||
| [db.DeleteYakitMenuItemAll](#deleteyakitmenuitemall) ||
| [db.DownloadGeoIP](#downloadgeoip) ||
| [db.GetAllPayloadGroupsName](#getallpayloadgroupsname) ||
| [db.GetKey](#getkey) ||
| [db.GetProjectKey](#getprojectkey) ||
| [db.GetYakitPluginByName](#getyakitpluginbyname) ||
| [db.NewAliveHost](#newalivehost) ||
| [db.OpenDatabase](#opendatabase) ||
| [db.OpenSqliteDatabase](#opensqlitedatabase) ||
| [db.OpenTempSqliteDatabase](#opentempsqlitedatabase) ||
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
| [db.QueryPortsByRuntimeId](#queryportsbyruntimeid) ||
| [db.QueryPortsByTaskName](#queryportsbytaskname) ||
| [db.QueryPortsByUpdatedAt](#queryportsbyupdatedat) ||
| [db.QueryUrlsAll](#queryurlsall) ||
| [db.QueryUrlsByKeyword](#queryurlsbykeyword) ||
| [db.SaveAIYakScript](#saveaiyakscript) ||
| [db.SaveDomain](#savedomain) ||
| [db.SaveHTTPFlowFromNative](#savehttpflowfromnative) ||
| [db.SaveHTTPFlowFromNativeWithType](#savehttpflowfromnativewithtype) ||
| [db.SaveHTTPFlowFromRaw](#savehttpflowfromraw) ||
| [db.SaveHTTPFlowFromRawWithOption](#savehttpflowfromrawwithoption) ||
| [db.SaveHTTPFlowFromRawWithType](#savehttpflowfromrawwithtype) ||
| [db.SaveHTTPFlowInstance](#savehttpflowinstance) ||
| [db.SavePayload](#savepayload) ||
| [db.SavePayloadByFile](#savepayloadbyfile) ||
| [db.SavePortFromResult](#saveportfromresult) ||
| [db.SaveYakitMenuItemByBatchExecuteConfig](#saveyakitmenuitembybatchexecuteconfig) ||
| [db.SaveYakitPlugin](#saveyakitplugin) ||
| [db.ScanResult](#scanresult) ||
| [db.SetKey](#setkey) ||
| [db.SetKeyWithTTL](#setkeywithttl) ||
| [db.SetProjectKey](#setprojectkey) ||
| [db.YieldPayload](#yieldpayload) |YieldPayload means |
| [db.YieldYakScriptAll](#yieldyakscriptall) ||
| [db.saveHTTPFlowWithTags](#savehttpflowwithtags) ||


## 函数定义
### CreateTemporaryYakScript

#### 详细描述


#### 定义

`CreateTemporaryYakScript(t string, code string, suffix ...string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |
| code | `string` |   |
| suffix | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### DelKey

#### 详细描述


#### 定义

`DelKey(k any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |


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


### DeleteYakScriptByName

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


### DeleteYakitMenuItemAll

#### 详细描述


#### 定义

`DeleteYakitMenuItemAll() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### DownloadGeoIP

#### 详细描述


#### 定义

`DownloadGeoIP() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### GetAllPayloadGroupsName

#### 详细描述


#### 定义

`GetAllPayloadGroupsName() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetKey

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


### GetProjectKey

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


### GetYakitPluginByName

#### 详细描述


#### 定义

`GetYakitPluginByName(name string) (*schema.YakScript, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.YakScript` |   |
| r2 | `error` |   |


### NewAliveHost

#### 详细描述


#### 定义

`NewAliveHost(target string, opts ...yakit.AliveHostParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...yakit.AliveHostParamsOpt` |   |


### OpenDatabase

#### 详细描述


#### 定义

`OpenDatabase(dialect string, source string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dialect | `string` |   |
| source | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` |   |
| r2 | `error` |   |


### OpenSqliteDatabase

#### 详细描述


#### 定义

`OpenSqliteDatabase(path string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` |   |
| r2 | `error` |   |


### OpenTempSqliteDatabase

#### 详细描述


#### 定义

`OpenTempSqliteDatabase() (*gorm.DB, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` |   |
| r2 | `error` |   |


### QueryAliveHost

#### 详细描述


#### 定义

`QueryAliveHost(runtimeId string) chan *schema.AliveHost`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AliveHost` |   |


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


### QueryHTTPFlowsByID

#### 详细描述


#### 定义

`QueryHTTPFlowsByID(id ...int64) chan *schema.HTTPFlow`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `...int64` |   |

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


### QueryHostPortByKeyword

#### 详细描述


#### 定义

`QueryHostPortByKeyword(network string) (chan *schema.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Host` |   |
| r2 | `error` |   |


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


### QueryIPCity

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


### QueryIPForIPS

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


### QueryPayloadGroups

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


### QueryPortsByRuntimeId

#### 详细描述


#### 定义

`QueryPortsByRuntimeId(runtimeID string) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeID | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` |   |
| r2 | `error` |   |


### QueryPortsByTaskName

#### 详细描述


#### 定义

`QueryPortsByTaskName(taskName string) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` |   |
| r2 | `error` |   |


### QueryPortsByUpdatedAt

#### 详细描述


#### 定义

`QueryPortsByUpdatedAt(timestamp int64) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestamp | `int64` |   |

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


### SaveAIYakScript

#### 详细描述


#### 定义

`SaveAIYakScript(tool *schema.AIYakTool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `*schema.AIYakTool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


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


### SaveHTTPFlowFromNative

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


### SaveHTTPFlowFromNativeWithType

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


### SaveHTTPFlowFromRaw

#### 详细描述


#### 定义

`SaveHTTPFlowFromRaw(url string, req []byte, rsp []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| req | `[]byte` |   |
| rsp | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SaveHTTPFlowFromRawWithOption

#### 详细描述


#### 定义

`SaveHTTPFlowFromRawWithOption(url string, req []byte, rsp []byte, exOption ...yakit.CreateHTTPFlowOptions) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| req | `[]byte` |   |
| rsp | `[]byte` |   |
| exOption | `...yakit.CreateHTTPFlowOptions` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SaveHTTPFlowFromRawWithType

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


### SaveHTTPFlowInstance

#### 详细描述


#### 定义

`SaveHTTPFlowInstance(flow *schema.HTTPFlow) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| flow | `*schema.HTTPFlow` |   |

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


### SaveYakitMenuItemByBatchExecuteConfig

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


### SaveYakitPlugin

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


### ScanResult

#### 详细描述


#### 定义

`ScanResult(db *gorm.DB, query string, args ...any) ([]map[string]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` |   |
| query | `string` |   |
| args | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]any` |   |
| r2 | `error` |   |


### SetKey

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


### SetKeyWithTTL

#### 详细描述


#### 定义

`SetKeyWithTTL(k any, v any, ttl int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |   |
| v | `any` |   |
| ttl | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SetProjectKey

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


### YieldPayload

#### 详细描述
YieldPayload means


#### 定义

`YieldPayload(raw any, extra ...any) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| extra | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### YieldYakScriptAll

#### 详细描述


#### 定义

`YieldYakScriptAll() chan *schema.YakScript`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.YakScript` |   |


### saveHTTPFlowWithTags

#### 详细描述


#### 定义

`saveHTTPFlowWithTags(tags string) CreateHTTPFlowOptions`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tags | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CreateHTTPFlowOptions` |   |


