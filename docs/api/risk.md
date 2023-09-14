# risk

|成员函数|函数描述/介绍|
|:------|:--------|
| [risk.CheckDNSLogByToken](#CheckDNSLogByToken) ||
| [risk.CheckICMPTriggerByLength](#CheckICMPTriggerByLength) ||
| [risk.CheckRandomTriggerByToken](#CheckRandomTriggerByToken) ||
| [risk.CreateRisk](#CreateRisk) ||
| [risk.DeleteRiskByID](#DeleteRiskByID) ||
| [risk.DeleteRiskByTarget](#DeleteRiskByTarget) ||
| [risk.ExtractTokenFromUrl](#ExtractTokenFromUrl) ||
| [risk.HaveReverseRisk](#HaveReverseRisk) ||
| [risk.NewDNSLogDomain](#NewDNSLogDomain) ||
| [risk.NewLocalReverseHTTPSUrl](#NewLocalReverseHTTPSUrl) ||
| [risk.NewLocalReverseHTTPUrl](#NewLocalReverseHTTPUrl) ||
| [risk.NewLocalReverseRMIUrl](#NewLocalReverseRMIUrl) ||
| [risk.NewPublicReverseHTTPSUrl](#NewPublicReverseHTTPSUrl) ||
| [risk.NewPublicReverseHTTPUrl](#NewPublicReverseHTTPUrl) ||
| [risk.NewPublicReverseRMIUrl](#NewPublicReverseRMIUrl) ||
| [risk.NewRandomPortTrigger](#NewRandomPortTrigger) ||
| [risk.NewRisk](#NewRisk) ||
| [risk.NewUnverifiedRisk](#NewUnverifiedRisk) ||
| [risk.RegisterBeforeRiskSave](#RegisterBeforeRiskSave) ||
| [risk.Save](#Save) ||
| [risk.YieldRiskByCreateAt](#YieldRiskByCreateAt) ||
| [risk.YieldRiskByRuntimeId](#YieldRiskByRuntimeId) ||
| [risk.YieldRiskByTarget](#YieldRiskByTarget) ||
| [risk.cve](#cve) ||
| [risk.description](#description) ||
| [risk.details](#details) ||
| [risk.fromYakScript](#fromYakScript) ||
| [risk.ignore](#ignore) ||
| [risk.level](#level) ||
| [risk.parameter](#parameter) ||
| [risk.payload](#payload) ||
| [risk.potential](#potential) ||
| [risk.request](#request) ||
| [risk.response](#response) ||
| [risk.runtimeId](#runtimeId) ||
| [risk.severity](#severity) ||
| [risk.solution](#solution) ||
| [risk.title](#title) ||
| [risk.titleVerbose](#titleVerbose) ||
| [risk.token](#token) ||
| [risk.type](#type) ||
| [risk.typeVerbose](#typeVerbose) ||


## 函数定义
### risk.CheckDNSLogByToken

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


### risk.CheckICMPTriggerByLength

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


### risk.CheckRandomTriggerByToken

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


### risk.CreateRisk

#### 详细描述


#### 定义

`CreateRisk(u string, opts ...RiskParamsOpt) *Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Risk` |   |


### risk.DeleteRiskByID

#### 详细描述


#### 定义

`DeleteRiskByID(id any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `any` |   |


### risk.DeleteRiskByTarget

#### 详细描述


#### 定义

`DeleteRiskByTarget(addr string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |


### risk.ExtractTokenFromUrl

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


### risk.HaveReverseRisk

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


### risk.NewDNSLogDomain

#### 详细描述


#### 定义

`NewDNSLogDomain() (domain string, token string, _ error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| token | `string` |   |
| _ | `error` |   |


### risk.NewLocalReverseHTTPSUrl

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


### risk.NewLocalReverseHTTPUrl

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


### risk.NewLocalReverseRMIUrl

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


### risk.NewPublicReverseHTTPSUrl

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


### risk.NewPublicReverseHTTPUrl

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


### risk.NewPublicReverseRMIUrl

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


### risk.NewRandomPortTrigger

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


### risk.NewRisk

#### 详细描述


#### 定义

`NewRisk(client *YakitClient) func(target string, opts ...yakit.RiskParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| client | `*YakitClient` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(target string, opts ...yakit.RiskParamsOpt)` |   |


### risk.NewUnverifiedRisk

#### 详细描述


#### 定义

`NewUnverifiedRisk(u string, token string, opts ...RiskParamsOpt) (*Risk, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |
| token | `string` |   |
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Risk` |   |
| r2 | `error` |   |


### risk.RegisterBeforeRiskSave

#### 详细描述


#### 定义

`RegisterBeforeRiskSave(f func(*Risk))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*Risk)` |   |


### risk.Save

#### 详细描述


#### 定义

`Save(r *Risk) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*Risk` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### risk.YieldRiskByCreateAt

#### 详细描述


#### 定义

`YieldRiskByCreateAt(timestamp int64) chan *yakit.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestamp | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Risk` |   |


### risk.YieldRiskByRuntimeId

#### 详细描述


#### 定义

`YieldRiskByRuntimeId(runtimeId string) chan *yakit.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Risk` |   |


### risk.YieldRiskByTarget

#### 详细描述


#### 定义

`YieldRiskByTarget(target string) chan *yakit.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *yakit.Risk` |   |


### risk.cve

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


### risk.description

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


### risk.details

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


### risk.fromYakScript

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


### risk.ignore

#### 详细描述


#### 定义

`ignore(i bool) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### risk.level

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


### risk.parameter

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


### risk.payload

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


### risk.potential

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


### risk.request

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


### risk.response

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


### risk.runtimeId

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


### risk.severity

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


### risk.solution

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


### risk.title

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


### risk.titleVerbose

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


### risk.token

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


### risk.type

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


### risk.typeVerbose

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


