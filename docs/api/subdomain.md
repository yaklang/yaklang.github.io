# subdomain

|成员函数|函数描述/介绍|
|:------|:--------|
| [subdomain.Scan](#scan) ||
| [subdomain.dnsServer](#dnsserver) ||
| [subdomain.eachQueryTimeout](#eachquerytimeout) ||
| [subdomain.eachSearchTimeout](#eachsearchtimeout) ||
| [subdomain.mainDict](#maindict) ||
| [subdomain.maxDepth](#maxdepth) ||
| [subdomain.recursive](#recursive) ||
| [subdomain.recursiveDict](#recursivedict) ||
| [subdomain.targetConcurrent](#targetconcurrent) ||
| [subdomain.targetTimeout](#targettimeout) ||
| [subdomain.wildcardToStop](#wildcardtostop) ||
| [subdomain.workerConcurrent](#workerconcurrent) ||


## 函数定义
### scan

#### 详细描述


#### 定义

`Scan(target any, opts ...subdomain.ConfigOption) (chan *subdomain.SubdomainResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `any` |   |
| opts | `...subdomain.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *subdomain.SubdomainResult` |   |
| r2 | `error` |   |


### dnsserver

#### 详细描述


#### 定义

`dnsServer(servers []string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### eachquerytimeout

#### 详细描述


#### 定义

`eachQueryTimeout(i float64) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` |   |


### eachsearchtimeout

#### 详细描述


#### 定义

`eachSearchTimeout(i float64) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` |   |


### maindict

#### 详细描述


#### 定义

`mainDict(i any) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` |   |


### maxdepth

#### 详细描述


#### 定义

`maxDepth(d int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### recursive

#### 详细描述


#### 定义

`recursive(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### recursivedict

#### 详细描述


#### 定义

`recursiveDict(i any) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` |   |


### targetconcurrent

#### 详细描述


#### 定义

`targetConcurrent(c int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### targettimeout

#### 详细描述


#### 定义

`targetTimeout(i float64) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` |   |


### wildcardtostop

#### 详细描述


#### 定义

`wildcardToStop(t bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### workerconcurrent

#### 详细描述


#### 定义

`workerConcurrent(c int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


