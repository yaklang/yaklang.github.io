# servicescan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [servicescan.Scan](#servicescanscan) |  |
 | [servicescan.ScanFromSpaceEngine](#servicescanscanfromspaceengine) |  |
 | [servicescan.ScanFromSynResult](#servicescanscanfromsynresult) |  |
 | [servicescan.ScanOne](#servicescanscanone) |  |
 | [servicescan.active](#servicescanactive) |  |
 | [servicescan.all](#servicescanall) |  |
 | [servicescan.concurrent](#servicescanconcurrent) |  |
 | [servicescan.maxProbes](#servicescanmaxprobes) |  |
 | [servicescan.maxProbesConcurrent](#servicescanmaxprobesconcurrent) |  |
 | [servicescan.nmapRarityMax](#servicescannmapraritymax) |  |
 | [servicescan.nmapRule](#servicescannmaprule) |  |
 | [servicescan.proto](#servicescanproto) |  |
 | [servicescan.service](#servicescanservice) |  |
 | [servicescan.web](#servicescanweb) |  |
 | [servicescan.webRule](#servicescanwebrule) |  |




 



## 函数定义

### servicescan.Scan



#### 详细描述



#### 定义：

`func servicescan.Scan(v1: string, v2: string, v3 ...fp.ConfigOption) return (r0: chan *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...fp.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.ScanFromSpaceEngine



#### 详细描述



#### 定义：

`func servicescan.ScanFromSpaceEngine(v1: any, v2 ...fp.ConfigOption) return (r0: chan *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...fp.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.ScanFromSynResult



#### 详细描述



#### 定义：

`func servicescan.ScanFromSynResult(v1: any, v2 ...fp.ConfigOption) return (r0: chan *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...fp.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.ScanOne



#### 详细描述



#### 定义：

`func servicescan.ScanOne(v1: string, v2: int, v3 ...fp.ConfigOption) return (r0: *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `...fp.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.active



#### 详细描述



#### 定义：

`func servicescan.active(v1: bool) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.all



#### 详细描述



#### 定义：

`func servicescan.all() return (r0: func ConfigOption(v1: *fp.Config) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.concurrent



#### 详细描述



#### 定义：

`func servicescan.concurrent(v1: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.maxProbes



#### 详细描述



#### 定义：

`func servicescan.maxProbes(v1: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.maxProbesConcurrent



#### 详细描述



#### 定义：

`func servicescan.maxProbesConcurrent(v1: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.nmapRarityMax



#### 详细描述



#### 定义：

`func servicescan.nmapRarityMax(v1: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.nmapRule



#### 详细描述



#### 定义：

`func servicescan.nmapRule(v1: any) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.proto



#### 详细描述



#### 定义：

`func servicescan.proto(v1 ...any) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.service



#### 详细描述



#### 定义：

`func servicescan.service() return (r0: func ConfigOption(v1: *fp.Config) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.web



#### 详细描述



#### 定义：

`func servicescan.web() return (r0: func ConfigOption(v1: *fp.Config) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.webRule



#### 详细描述



#### 定义：

`func servicescan.webRule(v1: any) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 


