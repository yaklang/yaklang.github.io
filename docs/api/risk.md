# risk


|成员函数|函数描述/介绍|
|:------|:--------|
 | [risk.CheckDNSLogByToken](#riskcheckdnslogbytoken) |  |
 | [risk.CheckICMPTriggerByLength](#riskcheckicmptriggerbylength) | 检查 ICMP 触发器 |
 | [risk.CheckRandomTriggerByToken](#riskcheckrandomtriggerbytoken) | 通过 Token 来查询随机触发器 |
 | [risk.ExtractTokenFromUrl](#riskextracttokenfromurl) | 从 URL 中提取 token |
 | [risk.HaveReverseRisk](#riskhavereverserisk) | 判断一个 Token 的反连是否触发 |
 | [risk.NewDNSLogDomain](#risknewdnslogdomain) |  |
 | [risk.NewLocalReverseHTTPSUrl](#risknewlocalreversehttpsurl) | 创建一个本地服务器的 HTTPS(TLS&#43;HTTP)URL（仅 yakit 内生效） |
 | [risk.NewLocalReverseHTTPUrl](#risknewlocalreversehttpurl) | 创建一个本地服务器的 HTTP URL（仅 yakit 内生效） |
 | [risk.NewLocalReverseRMIUrl](#risknewlocalreversermiurl) | 创建一个本地服务器的 RMI URL（仅 yakit 内生效） |
 | [risk.NewPublicReverseHTTPSUrl](#risknewpublicreversehttpsurl) | 创建一个远程服务器的 HTTPS URL（仅 yakit 内生效，并且需要配置 yak bridge） |
 | [risk.NewPublicReverseHTTPUrl](#risknewpublicreversehttpurl) | 创建一个远程服务器的 HTTP URL（仅 yakit 内生效，并且需要配置 yak bridge） |
 | [risk.NewPublicReverseRMIUrl](#risknewpublicreversermiurl) | 创建一个远程服务器的 RMI URL（仅 yakit 内生效，并且需要配置 yak bridge） |
 | [risk.NewRandomPortTrigger](#risknewrandomporttrigger) | 创建个新的随机端口检测记录 |
 | [risk.NewRisk](#risknewrisk) | 创建一个 Risk 记录（可理解为漏洞） |
 | [risk.NewUnverifiedRisk](#risknewunverifiedrisk) | 创建一个 Risk 记录（可理解为漏洞），并标记为没有验证的漏洞 |
 | [risk.Save](#risksave) |  |
 | [risk.details](#riskdetails) | 【参数】：为漏洞设置参数内容，一般传入一个 map[string]interface{} 即可 |
 | [risk.level](#risklevel) | 设置漏洞级别 |
 | [risk.parameter](#riskparameter) | 【参数】：设置漏洞/Risk的出问题的参数名 |
 | [risk.payload](#riskpayload) | 【参数】：设置 Payload |
 | [risk.severity](#riskseverity) | 设置漏洞级别 |
 | [risk.title](#risktitle) | 【参数】：设置漏洞标题（必须） |
 | [risk.titleVerbose](#risktitleverbose) | 【参数】：展示标题 |
 | [risk.token](#risktoken) | 【参数】：设置 reverse_token |
 | [risk.type](#risktype) | 【参数】：必填，设置漏洞类型 |
 | [risk.typeVerbose](#risktypeverbose) | 【参数】：漏洞类型别名 |




 



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

创建一个本地服务器的 HTTPS(TLS&#43;HTTP)URL（仅 yakit 内生效）

#### 详细描述



#### 定义：

`func risk.NewLocalReverseHTTPSUrl(v1 ...yakit.riskParamsOpt) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewLocalReverseHTTPUrl

创建一个本地服务器的 HTTP URL（仅 yakit 内生效）

#### 详细描述



#### 定义：

`func risk.NewLocalReverseHTTPUrl(v1 ...yakit.riskParamsOpt) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewLocalReverseRMIUrl

创建一个本地服务器的 RMI URL（仅 yakit 内生效）

#### 详细描述



#### 定义：

`func risk.NewLocalReverseRMIUrl(v1 ...yakit.riskParamsOpt) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewPublicReverseHTTPSUrl

创建一个远程服务器的 HTTPS URL（仅 yakit 内生效，并且需要配置 yak bridge）

#### 详细描述



#### 定义：

`func risk.NewPublicReverseHTTPSUrl(v1 ...yakit.riskParamsOpt) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewPublicReverseHTTPUrl

创建一个远程服务器的 HTTP URL（仅 yakit 内生效，并且需要配置 yak bridge）

#### 详细描述



#### 定义：

`func risk.NewPublicReverseHTTPUrl(v1 ...yakit.riskParamsOpt) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewPublicReverseRMIUrl

创建一个远程服务器的 RMI URL（仅 yakit 内生效，并且需要配置 yak bridge）

#### 详细描述



#### 定义：

`func risk.NewPublicReverseRMIUrl(v1 ...yakit.riskParamsOpt) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### risk.NewRandomPortTrigger

创建个新的随机端口检测记录

#### 详细描述



#### 定义：

`func risk.NewRandomPortTrigger(riskOpt ...yakit.riskParamsOpt) return (token: string, hostPort: string, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| riskOpt | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| hostPort | `string` |   |
| err | `error` |   |


 
### risk.NewRisk

创建一个 Risk 记录（可理解为漏洞）

#### 详细描述



#### 定义：

`func risk.NewRisk(v1: string, v2 ...yakit.riskParamsOpt) return (r0: *yakit.Risk, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakit.riskParamsOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yakit.Risk` |   |
| r1 | `error` |   |


 
### risk.NewUnverifiedRisk

创建一个 Risk 记录（可理解为漏洞），并标记为没有验证的漏洞

#### 详细描述



#### 定义：

`func risk.NewUnverifiedRisk(v1: string, v2: string, v3 ...yakit.riskParamsOpt) return (r0: *yakit.Risk, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yakit.riskParamsOpt` |   |





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

【参数】：为漏洞设置参数内容，一般传入一个 map[string]interface{} 即可

#### 详细描述



#### 定义：

`func risk.details(v1: any) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.level

设置漏洞级别

#### 详细描述



#### 定义：

`func risk.level(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.parameter

【参数】：设置漏洞/Risk的出问题的参数名

#### 详细描述



#### 定义：

`func risk.parameter(name: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.payload

【参数】：设置 Payload

#### 详细描述



#### 定义：

`func risk.payload(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.severity

设置漏洞级别

#### 详细描述



#### 定义：

`func risk.severity(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.title

【参数】：设置漏洞标题（必须）

#### 详细描述



#### 定义：

`func risk.title(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.titleVerbose

【参数】：展示标题

#### 详细描述



#### 定义：

`func risk.titleVerbose(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.token

【参数】：设置 reverse_token

#### 详细描述



#### 定义：

`func risk.token(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.type

【参数】：必填，设置漏洞类型

#### 详细描述



#### 定义：

`func risk.type(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 
### risk.typeVerbose

【参数】：漏洞类型别名

#### 详细描述



#### 定义：

`func risk.typeVerbose(v1: string) return (r0: func riskParamsOpt(v1: *yakit.Risk) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func riskParamsOpt(v1: *yakit.Risk) ` |   |


 


