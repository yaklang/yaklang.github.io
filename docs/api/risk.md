# risk

|成员函数|函数描述/介绍|
|:------|:--------|
| [risk.CheckDNSLogByToken](#checkdnslogbytoken) ||
| [risk.CheckICMPTriggerByLength](#checkicmptriggerbylength) ||
| [risk.CheckRandomTriggerByToken](#checkrandomtriggerbytoken) ||
| [risk.CreateRisk](#createrisk) ||
| [risk.DeleteRiskByID](#deleteriskbyid) ||
| [risk.DeleteRiskByTarget](#deleteriskbytarget) ||
| [risk.ExtractTokenFromUrl](#extracttokenfromurl) ||
| [risk.HaveReverseRisk](#havereverserisk) ||
| [risk.NewDNSLogDomain](#newdnslogdomain) ||
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
### checkdnslogbytoken

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


### checkicmptriggerbylength

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


### checkrandomtriggerbytoken

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


### createrisk

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


### deleteriskbyid

#### 详细描述


#### 定义

`DeleteRiskByID(id any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `any` |   |


### deleteriskbytarget

#### 详细描述


#### 定义

`DeleteRiskByTarget(addr string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |


### extracttokenfromurl

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


### havereverserisk

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


### newdnslogdomain

#### 详细描述


#### 定义

`NewDNSLogDomain() (domain string, token string, _ error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| token | `string` |   |
| _ | `error` |   |


### newlocalreversehttpsurl

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


### newlocalreversehttpurl

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


### newlocalreversermiurl

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


### newpublicreversehttpsurl

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


### newpublicreversehttpurl

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


### newpublicreversermiurl

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


### newrandomporttrigger

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


### newrisk

#### 详细描述


#### 定义

`NewRisk(target string, opts ...yakit.RiskParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...yakit.RiskParamsOpt` |   |


### newunverifiedrisk

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


### registerbeforerisksave

#### 详细描述


#### 定义

`RegisterBeforeRiskSave(f func(*Risk))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*Risk)` |   |


### save

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


### yieldriskbycreateat

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


### yieldriskbyruntimeid

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


### yieldriskbytarget

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


### fromyakscript

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

`ignore(i bool) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


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


### runtimeid

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


### titleverbose

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


### typeverbose

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


