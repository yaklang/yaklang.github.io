# subdomain


|成员函数|函数描述/介绍|
|:------|:--------|
 | [subdomain.Scan](#subdomainscan) |  |
 | [subdomain.dnsServer](#subdomaindnsserver) |  |
 | [subdomain.eachQueryTimeout](#subdomaineachquerytimeout) |  |
 | [subdomain.eachSearchTimeout](#subdomaineachsearchtimeout) |  |
 | [subdomain.mainDict](#subdomainmaindict) |  |
 | [subdomain.maxDepth](#subdomainmaxdepth) |  |
 | [subdomain.recursive](#subdomainrecursive) |  |
 | [subdomain.recursiveDict](#subdomainrecursivedict) |  |
 | [subdomain.targetConcurrent](#subdomaintargetconcurrent) |  |
 | [subdomain.targetTimeout](#subdomaintargettimeout) |  |
 | [subdomain.wildcardToStop](#subdomainwildcardtostop) |  |
 | [subdomain.workerConcurrent](#subdomainworkerconcurrent) |  |




 



## 函数定义

### subdomain.Scan



#### 详细描述



#### 定义：

`func subdomain.Scan(v1: any, v2 ...subdomain.ConfigOption) return (r0: chan *subdomain.SubdomainResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...subdomain.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *subdomain.SubdomainResult` |   |
| r1 | `error` |   |


 
### subdomain.dnsServer



#### 详细描述



#### 定义：

`func subdomain.dnsServer(v1: []string) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.eachQueryTimeout



#### 详细描述



#### 定义：

`func subdomain.eachQueryTimeout(v1: float64) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.eachSearchTimeout



#### 详细描述



#### 定义：

`func subdomain.eachSearchTimeout(v1: float64) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.mainDict



#### 详细描述



#### 定义：

`func subdomain.mainDict(v1: any) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.maxDepth



#### 详细描述



#### 定义：

`func subdomain.maxDepth(v1: int) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.recursive



#### 详细描述



#### 定义：

`func subdomain.recursive(v1: bool) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.recursiveDict



#### 详细描述



#### 定义：

`func subdomain.recursiveDict(v1: any) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.targetConcurrent



#### 详细描述



#### 定义：

`func subdomain.targetConcurrent(v1: int) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.targetTimeout



#### 详细描述



#### 定义：

`func subdomain.targetTimeout(v1: float64) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.wildcardToStop



#### 详细描述



#### 定义：

`func subdomain.wildcardToStop(v1: bool) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 
### subdomain.workerConcurrent



#### 详细描述



#### 定义：

`func subdomain.workerConcurrent(v1: int) return (r0: func ConfigOption(v1: *subdomain.SubdomainScannerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ` |   |


 


