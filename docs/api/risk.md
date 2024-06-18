# risk

|成员函数|函数描述/介绍|
|:------|:--------|
| [risk.CheckDNSLogByToken](#checkdnslogbytoken) ||
| [risk.CheckHTTPLogByToken](#checkhttplogbytoken) ||
| [risk.CheckICMPTriggerByLength](#checkicmptriggerbylength) ||
| [risk.CheckRandomTriggerByToken](#checkrandomtriggerbytoken) ||
| [risk.CheckServerReachable](#checkserverreachable) ||
| [risk.CreateRisk](#createrisk) ||
| [risk.DeleteRiskByID](#deleteriskbyid) ||
| [risk.DeleteRiskByTarget](#deleteriskbytarget) ||
| [risk.ExtractTokenFromUrl](#extracttokenfromurl) ||
| [risk.HaveReverseRisk](#havereverserisk) ||
| [risk.NewDNSLogDomain](#newdnslogdomain) ||
| [risk.NewHTTPLog](#newhttplog) ||
| [risk.NewLocalReverseHTTPSUrl](#newlocalreversehttpsurl) ||
| [risk.NewLocalReverseHTTPUrl](#newlocalreversehttpurl) ||
| [risk.NewLocalReverseRMIUrl](#newlocalreversermiurl) ||
| [risk.NewPublicReverseHTTPSUrl](#newpublicreversehttpsurl) ||
| [risk.NewPublicReverseHTTPUrl](#newpublicreversehttpurl) ||
| [risk.NewPublicReverseRMIUrl](#newpublicreversermiurl) ||
| [risk.NewRandomPortTrigger](#newrandomporttrigger) ||
| [risk.NewRisk](#newrisk) ||
| [risk.NewUnverifiedRisk](#newunverifiedrisk) ||
| [risk.RegisterBeforeRiskSave](#registerbeforerisksave) ||
| [risk.Save](#save) ||
| [risk.YieldRiskByCreateAt](#yieldriskbycreateat) ||
| [risk.YieldRiskByRuntimeId](#yieldriskbyruntimeid) ||
| [risk.YieldRiskByTarget](#yieldriskbytarget) ||
| [risk.cve](#cve) ||
| [risk.description](#description) ||
| [risk.details](#details) ||
| [risk.fromYakScript](#fromyakscript) ||
| [risk.ignore](#ignore) ||
| [risk.level](#level) ||
| [risk.parameter](#parameter) ||
| [risk.payload](#payload) ||
| [risk.potential](#potential) ||
| [risk.request](#request) ||
| [risk.response](#response) ||
| [risk.runtimeId](#runtimeid) ||
| [risk.severity](#severity) ||
| [risk.solution](#solution) ||
| [risk.title](#title) ||
| [risk.titleVerbose](#titleverbose) ||
| [risk.token](#token) ||
| [risk.type](#type) ||
| [risk.typeVerbose](#typeverbose) ||


## 函数定义
### CheckDNSLogByToken

#### 详细描述


#### 定义

`CheckDNSLogByToken(token string, timeout ...float64) ([]*tpb.DNSLogEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| timeout | `...float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*tpb.DNSLogEvent` |   |
| r2 | `error` |   |


### CheckHTTPLogByToken

#### 详细描述


#### 定义

`CheckHTTPLogByToken(token string, timeout ...float64) ([]*tpb.HTTPRequestTriggerNotification, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| timeout | `...float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*tpb.HTTPRequestTriggerNotification` |   |
| r2 | `error` |   |


### CheckICMPTriggerByLength

#### 详细描述


#### 定义

`CheckICMPTriggerByLength(i int) (*tpb.ICMPTriggerNotification, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.ICMPTriggerNotification` |   |
| r2 | `error` |   |


### CheckRandomTriggerByToken

#### 详细描述


#### 定义

`CheckRandomTriggerByToken(t string) (*tpb.RandomPortTriggerEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.RandomPortTriggerEvent` |   |
| r2 | `error` |   |


### CheckServerReachable

#### 详细描述


#### 定义

`CheckServerReachable(ctx context.Context, target string, httpCheck bool) (*tpb.CheckServerReachableResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| target | `string` |   |
| httpCheck | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.CheckServerReachableResponse` |   |
| r2 | `error` |   |


### CreateRisk

#### 详细描述


#### 定义

`CreateRisk(u string, opts ...RiskParamsOpt) *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` |   |


### DeleteRiskByID

#### 详细描述


#### 定义

`DeleteRiskByID(id any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `any` |   |


### DeleteRiskByTarget

#### 详细描述


#### 定义

`DeleteRiskByTarget(addr string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |


### ExtractTokenFromUrl

#### 详细描述


#### 定义

`ExtractTokenFromUrl(tokenUrl string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tokenUrl | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### HaveReverseRisk

#### 详细描述


#### 定义

`HaveReverseRisk(token string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### NewDNSLogDomain

#### 详细描述


#### 定义

`NewDNSLogDomain() (domain string, token string, _ error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| token | `string` |   |
| _ | `error` |   |


### NewHTTPLog

#### 详细描述


#### 定义

`NewHTTPLog(i ...any) (domain string, token string, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| token | `string` |   |
| _ | `error` |   |


### NewLocalReverseHTTPSUrl

#### 详细描述


#### 定义

`NewLocalReverseHTTPSUrl(opts ...RiskParamsOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewLocalReverseHTTPUrl

#### 详细描述


#### 定义

`NewLocalReverseHTTPUrl(opts ...RiskParamsOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewLocalReverseRMIUrl

#### 详细描述


#### 定义

`NewLocalReverseRMIUrl(opts ...RiskParamsOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewPublicReverseHTTPSUrl

#### 详细描述


#### 定义

`NewPublicReverseHTTPSUrl(opts ...RiskParamsOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewPublicReverseHTTPUrl

#### 详细描述


#### 定义

`NewPublicReverseHTTPUrl(opts ...RiskParamsOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewPublicReverseRMIUrl

#### 详细描述


#### 定义

`NewPublicReverseRMIUrl(opts ...RiskParamsOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewRandomPortTrigger

#### 详细描述


#### 定义

`NewRandomPortTrigger(opt ...RiskParamsOpt) (token string, addr string, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opt | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| addr | `string` |   |
| _ | `error` |   |


### NewRisk

#### 详细描述


#### 定义

`NewRisk(target string, opts ...yakit.RiskParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...yakit.RiskParamsOpt` |   |


### NewUnverifiedRisk

#### 详细描述


#### 定义

`NewUnverifiedRisk(u string, token string, opts ...RiskParamsOpt) (*schema.Risk, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |
| token | `string` |   |
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` |   |
| r2 | `error` |   |


### RegisterBeforeRiskSave

#### 详细描述


#### 定义

`RegisterBeforeRiskSave(f func(*schema.Risk))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*schema.Risk)` |   |


### Save

#### 详细描述


#### 定义

`Save(r *schema.Risk) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*schema.Risk` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### YieldRiskByCreateAt

#### 详细描述


#### 定义

`YieldRiskByCreateAt(timestamp int64) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestamp | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### YieldRiskByRuntimeId

#### 详细描述


#### 定义

`YieldRiskByRuntimeId(runtimeId string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### YieldRiskByTarget

#### 详细描述


#### 定义

`YieldRiskByTarget(target string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### cve

#### 详细描述


#### 定义

`cve(s string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### description

#### 详细描述


#### 定义

`description(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### details

#### 详细描述


#### 定义

`details(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### fromYakScript

#### 详细描述


#### 定义

`fromYakScript(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### ignore

#### 详细描述


#### 定义

`ignore(r *schema.Risk)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*schema.Risk` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


### level

#### 详细描述


#### 定义

`level(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### parameter

#### 详细描述


#### 定义

`parameter(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### payload

#### 详细描述


#### 定义

`payload(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### potential

#### 详细描述


#### 定义

`potential(i bool) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### request

#### 详细描述


#### 定义

`request(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### response

#### 详细描述


#### 定义

`response(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### runtimeId

#### 详细描述


#### 定义

`runtimeId(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### severity

#### 详细描述


#### 定义

`severity(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### solution

#### 详细描述


#### 定义

`solution(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### title

#### 详细描述


#### 定义

`title(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### titleVerbose

#### 详细描述


#### 定义

`titleVerbose(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### token

#### 详细描述


#### 定义

`token(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### type

#### 详细描述


#### 定义

`type(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### typeVerbose

#### 详细描述


#### 定义

`typeVerbose(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


