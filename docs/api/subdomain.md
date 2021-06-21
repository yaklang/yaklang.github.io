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



#### 定义：

`func (v1: interface {}, v2 ...func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) return(chan *subdomain.SubdomainResult, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | []subdomain.ConfigOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | chan *subdomain.SubdomainResult |   |
| r1 | error |   |


### subdomain.dnsServer



#### 定义：

`func (v1: []string) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.eachQueryTimeout



#### 定义：

`func (v1: float64) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.eachSearchTimeout



#### 定义：

`func (v1: float64) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.mainDict



#### 定义：

`func (v1: interface {}) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.maxDepth



#### 定义：

`func (v1: int) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.recursive



#### 定义：

`func (v1: bool) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | bool |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.recursiveDict



#### 定义：

`func (v1: interface {}) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.targetConcurrent



#### 定义：

`func (v1: int) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.targetTimeout



#### 定义：

`func (v1: float64) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.wildcardToStop



#### 定义：

`func (v1: bool) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | bool |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |


### subdomain.workerConcurrent



#### 定义：

`func (v1: int) return(func ConfigOption(v1: *subdomain.SubdomainScannerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *subdomain.SubdomainScannerConfig)  |   |





