# risk


|成员函数|函数描述/介绍|
|:------|:--------|
 | [risk.CheckDNSLogByToken](#riskcheckdnslogbytoken) |  |
 | [risk.CheckICMPTriggerByLength](#riskcheckicmptriggerbylength) | 检查 ICMP 触发器 |
 | [risk.CheckRandomTriggerByToken](#riskcheckrandomtriggerbytoken) | 通过 Token 来查询随机触发器 |
 | [risk.CreateRisk](#riskcreaterisk) |  |
 | [risk.DeleteRiskByID](#riskdeleteriskbyid) |  |
 | [risk.DeleteRiskByTarget](#riskdeleteriskbytarget) |  |
 | [risk.ExtractTokenFromUrl](#riskextracttokenfromurl) | 从 URL 中提取 token |
 | [risk.HaveReverseRisk](#riskhavereverserisk) | 判断一个 Token 的反连是否触发 |
 | [risk.NewDNSLogDomain](#risknewdnslogdomain) |  |
 | [risk.NewLocalReverseHTTPSUrl](#risknewlocalreversehttpsurl) |  |
 | [risk.NewLocalReverseHTTPUrl](#risknewlocalreversehttpurl) |  |
 | [risk.NewLocalReverseRMIUrl](#risknewlocalreversermiurl) |  |
 | [risk.NewPublicReverseHTTPSUrl](#risknewpublicreversehttpsurl) |  |
 | [risk.NewPublicReverseHTTPUrl](#risknewpublicreversehttpurl) |  |
 | [risk.NewPublicReverseRMIUrl](#risknewpublicreversermiurl) |  |
 | [risk.NewRandomPortTrigger](#risknewrandomporttrigger) |  |
 | [risk.NewRisk](#risknewrisk) |  |
 | [risk.NewUnverifiedRisk](#risknewunverifiedrisk) |  |
 | [risk.RegisterBeforeRiskSave](#riskregisterbeforerisksave) |  |
 | [risk.Save](#risksave) |  |
 | [risk.YieldRiskByCreateAt](#riskyieldriskbycreateat) |  |
 | [risk.YieldRiskByRuntimeId](#riskyieldriskbyruntimeid) |  |
 | [risk.YieldRiskByTarget](#riskyieldriskbytarget) |  |
 | [risk.cve](#riskcve) |  |
 | [risk.description](#riskdescription) |  |
 | [risk.details](#riskdetails) |  |
 | [risk.fromYakScript](#riskfromyakscript) |  |
 | [risk.ignore](#riskignore) |  |
 | [risk.level](#risklevel) |  |
 | [risk.parameter](#riskparameter) |  |
 | [risk.payload](#riskpayload) |  |
 | [risk.potential](#riskpotential) |  |
 | [risk.request](#riskrequest) |  |
 | [risk.response](#riskresponse) |  |
 | [risk.runtimeId](#riskruntimeid) |  |
 | [risk.severity](#riskseverity) |  |
 | [risk.solution](#risksolution) |  |
 | [risk.title](#risktitle) |  |
 | [risk.titleVerbose](#risktitleverbose) |  |
 | [risk.token](#risktoken) |  |
 | [risk.type](#risktype) |  |
 | [risk.typeVerbose](#risktypeverbose) |  |




 



## 函数定义

### risk.CheckDNSLogByToken



#### 详细描述



#### 定义：

`CheckDNSLogByToken(token string) ([]*tpb.DNSLogEvent, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*tpb.DNSLogEvent` |   |
| r1 | `error` |   |


 
### risk.CheckICMPTriggerByLength

检查 ICMP 触发器

#### 详细描述



#### 定义：

`CheckICMPTriggerByLength(i int) (*tpb.ICMPTriggerNotification, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*tpb.ICMPTriggerNotification` |   |
| r1 | `error` |   |


 
### risk.CheckRandomTriggerByToken

通过 Token 来查询随机触发器

#### 详细描述



#### 定义：

`CheckRandomTriggerByToken(t string) (*tpb.RandomPortTriggerEvent, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| event | `*tpb.RandomPortTriggerEvent` |   |
| err | `error` |   |


 
### risk.CreateRisk



#### 详细描述



#### 定义：

`CreateRisk(string, ...yakit.RiskParamsOpt) *yakit.Risk`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yakit.Risk` |   |


 
### risk.DeleteRiskByID



#### 详细描述



#### 定义：

``func risk.DeleteRiskByID(v1: any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### risk.DeleteRiskByTarget



#### 详细描述



#### 定义：

``func risk.DeleteRiskByTarget(v1: string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |




 

 
### risk.ExtractTokenFromUrl

从 URL 中提取 token

#### 详细描述



#### 定义：

`ExtractTokenFromUrl(tokenUrl string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.HaveReverseRisk

判断一个 Token 的反连是否触发

#### 详细描述



#### 定义：

`HaveReverseRisk(token string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `boolvendor/github.com/projectdiscovery/fileutil/file.go` |   |


 
### risk.NewDNSLogDomain



#### 详细描述



#### 定义：

`NewDNSLogDomain() (domain string, token string, _ error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `string` |   |
| r2 | `error` |   |


 
### risk.NewLocalReverseHTTPSUrl



#### 详细描述



#### 定义：

`NewLocalReverseHTTPSUrl(...yakit.RiskParamsOpt) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewLocalReverseHTTPUrl



#### 详细描述



#### 定义：

`NewLocalReverseHTTPUrl(...yakit.RiskParamsOpt) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewLocalReverseRMIUrl



#### 详细描述



#### 定义：

`NewLocalReverseRMIUrl(...yakit.RiskParamsOpt) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewPublicReverseHTTPSUrl



#### 详细描述



#### 定义：

`NewPublicReverseHTTPSUrl(...yakit.RiskParamsOpt) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewPublicReverseHTTPUrl



#### 详细描述



#### 定义：

`NewPublicReverseHTTPUrl(...yakit.RiskParamsOpt) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewPublicReverseRMIUrl



#### 详细描述



#### 定义：

`NewPublicReverseRMIUrl(...yakit.RiskParamsOpt) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewRandomPortTrigger



#### 详细描述



#### 定义：

`NewRandomPortTrigger(opt ...RiskParamsOpt) (token string, addr string, _ error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `string` |   |
| r2 | `error` |   |


 
### risk.NewRisk



#### 详细描述



#### 定义：

`NewRisk(target string, opts ...yakit.RiskParamsOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakit.RiskParamsOpt` |   |




 

 
### risk.NewUnverifiedRisk



#### 详细描述



#### 定义：

`NewUnverifiedRisk(string, string, ...yakit.RiskParamsOpt) (*yakit.Risk, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yakit.Risk` |   |
| r1 | `error` |   |


 
### risk.RegisterBeforeRiskSave



#### 详细描述



#### 定义：

``func risk.RegisterBeforeRiskSave(v1: func (v1: *yakit.Risk) )``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *yakit.Risk) ` |   |




 

 
### risk.Save



#### 详细描述



#### 定义：

`Save(r *Risk) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*yakit.Risk` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### risk.YieldRiskByCreateAt



#### 详细描述



#### 定义：

`func risk.YieldRiskByCreateAt(v1: int64) return (r0: chan *yakit.Risk)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Risk` |   |


 
### risk.YieldRiskByRuntimeId



#### 详细描述



#### 定义：

`YieldRiskByRuntimeId(string) chan *yakit.Risk`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Risk` |   |


 
### risk.YieldRiskByTarget



#### 详细描述



#### 定义：

`YieldRiskByTarget(string) chan *yakit.Risk`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Risk` |   |


 
### risk.cve



#### 详细描述



#### 定义：

`cve(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.description



#### 详细描述



#### 定义：

`func risk.description(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.details



#### 详细描述



#### 定义：

`details(any) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.fromYakScript



#### 详细描述



#### 定义：

`fromYakScript(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.ignore



#### 详细描述



#### 定义：

`func risk.ignore(v1: bool) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.level



#### 详细描述



#### 定义：

`level(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.parameter



#### 详细描述



#### 定义：

`parameter(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.payload



#### 详细描述



#### 定义：

`payload(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.potential



#### 详细描述



#### 定义：

`potential(bool) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.request



#### 详细描述



#### 定义：

`request(any) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.response



#### 详细描述



#### 定义：

`response(any) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.runtimeId



#### 详细描述



#### 定义：

`runtimeId(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.severity



#### 详细描述



#### 定义：

`severity(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.solution



#### 详细描述



#### 定义：

`func risk.solution(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.title



#### 详细描述



#### 定义：

`title(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.titleVerbose



#### 详细描述



#### 定义：

`titleVerbose(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.token



#### 详细描述



#### 定义：

`token(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.type



#### 详细描述



#### 定义：

`type(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.typeVerbose



#### 详细描述



#### 定义：

`typeVerbose(string) yakit.RiskParamsOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 


