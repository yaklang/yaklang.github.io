# risk


|成员函数|函数描述/介绍|
|:------|:--------|
 | [risk.CheckDNSLogByToken](#riskcheckdnslogbytoken) |  |
 | [risk.CheckICMPTriggerByLength](#riskcheckicmptriggerbylength) | 检查 ICMP 触发器 |
 | [risk.CheckRandomTriggerByToken](#riskcheckrandomtriggerbytoken) | 通过 Token 来查询随机触发器 |
 | [risk.CreateRisk](#riskcreaterisk) |  |
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
 | [risk.Save](#risksave) |  |
 | [risk.details](#riskdetails) |  |
 | [risk.fromYakScript](#riskfromyakscript) |  |
 | [risk.level](#risklevel) |  |
 | [risk.parameter](#riskparameter) |  |
 | [risk.payload](#riskpayload) |  |
 | [risk.request](#riskrequest) |  |
 | [risk.response](#riskresponse) |  |
 | [risk.runtimeId](#riskruntimeid) |  |
 | [risk.severity](#riskseverity) |  |
 | [risk.title](#risktitle) |  |
 | [risk.titleVerbose](#risktitleverbose) |  |
 | [risk.token](#risktoken) |  |
 | [risk.type](#risktype) |  |
 | [risk.typeVerbose](#risktypeverbose) |  |




 



## 函数定义

### risk.CheckDNSLogByToken



#### 详细描述



#### 定义：

`func risk.CheckDNSLogByToken(v1: string) return (r0: []*tpb.DNSLogEvent, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*tpb.DNSLogEvent` |   |
| r1 | `error` |   |


 
### risk.CheckICMPTriggerByLength

检查 ICMP 触发器

#### 详细描述



#### 定义：

`func risk.CheckICMPTriggerByLength(v1: int) return (r0: *tpb.ICMPTriggerNotification, r1: error)`


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

`func risk.CheckRandomTriggerByToken(token: string) return (event: *tpb.RandomPortTriggerEvent, err: error)`


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

`func risk.CreateRisk(v1: string, v2 ...yakit.RiskParamsOpt) return (r0: *yakit.Risk)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakit.RiskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yakit.Risk` |   |


 
### risk.ExtractTokenFromUrl

从 URL 中提取 token

#### 详细描述



#### 定义：

`func risk.ExtractTokenFromUrl(url: string) return (r0: string)`


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

`func risk.HaveReverseRisk(token: string) return (r0: boolvendor/github.com/projectdiscovery/fileutil/file.go)`


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

`func risk.NewDNSLogDomain() return (r0: string, r1: string, r2: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `string` |   |
| r2 | `error` |   |


 
### risk.NewLocalReverseHTTPSUrl



#### 详细描述



#### 定义：

`func risk.NewLocalReverseHTTPSUrl(v1 ...yakit.RiskParamsOpt) return (r0: string)`


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

`func risk.NewLocalReverseHTTPUrl(v1 ...yakit.RiskParamsOpt) return (r0: string)`


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

`func risk.NewLocalReverseRMIUrl(v1 ...yakit.RiskParamsOpt) return (r0: string)`


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

`func risk.NewPublicReverseHTTPSUrl(v1 ...yakit.RiskParamsOpt) return (r0: string)`


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

`func risk.NewPublicReverseHTTPUrl(v1 ...yakit.RiskParamsOpt) return (r0: string)`


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

`func risk.NewPublicReverseRMIUrl(v1 ...yakit.RiskParamsOpt) return (r0: string)`


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

`func risk.NewRandomPortTrigger(v1 ...yakit.RiskParamsOpt) return (r0: string, r1: string, r2: error)`


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

``func risk.NewRisk(v1: string, v2 ...yakit.RiskParamsOpt)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakit.RiskParamsOpt` |   |




 

 
### risk.NewUnverifiedRisk



#### 详细描述



#### 定义：

`func risk.NewUnverifiedRisk(v1: string, v2: string, v3 ...yakit.RiskParamsOpt) return (r0: *yakit.Risk, r1: error)`


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


 
### risk.Save



#### 详细描述



#### 定义：

`func risk.Save(v1: *yakit.Risk) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*yakit.Risk` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### risk.details



#### 详细描述



#### 定义：

`func risk.details(v1: any) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.fromYakScript(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.level



#### 详细描述



#### 定义：

`func risk.level(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.parameter(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.payload(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.request



#### 详细描述



#### 定义：

`func risk.request(v1: any) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.response(v1: any) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.runtimeId(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.severity(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.title(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.titleVerbose(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.token(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.type(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


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

`func risk.typeVerbose(v1: string) return (r0: func RiskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func RiskParamsOpt(v1: *yakit.Risk) ` |   |


 


