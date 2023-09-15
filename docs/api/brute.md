# brute

|成员函数|函数描述/介绍|
|:------|:--------|
| [brute.GetAvailableBruteTypes](#GetAvailableBruteTypes) ||
| [brute.GetPasswordListFromBruteType](#GetPasswordListFromBruteType) ||
| [brute.GetUsernameListFromBruteType](#GetUsernameListFromBruteType) ||
| [brute.New](#New) ||
| [brute.autoDict](#autoDict) ||
| [brute.bruteHandler](#bruteHandler) ||
| [brute.concurrent](#concurrent) ||
| [brute.concurrentTarget](#concurrentTarget) ||
| [brute.debug](#debug) ||
| [brute.finishingThreshold](#finishingThreshold) ||
| [brute.maxDelay](#maxDelay) ||
| [brute.minDelay](#minDelay) ||
| [brute.okToStop](#okToStop) ||
| [brute.passList](#passList) ||
| [brute.userList](#userList) ||


## 函数定义
### GetAvailableBruteTypes

#### 详细描述


#### 定义

`GetAvailableBruteTypes() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetPasswordListFromBruteType

#### 详细描述


#### 定义

`GetPasswordListFromBruteType(t string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetUsernameListFromBruteType

#### 详细描述


#### 定义

`GetUsernameListFromBruteType(t string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### New

#### 详细描述


#### 定义

`New(typeStr string, opts ...yakBruteOpt) (*yakBruter, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeStr | `string` |   |
| opts | `...yakBruteOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakBruter` |   |
| r2 | `error` |   |


### autoDict

#### 详细描述


#### 定义

`autoDict() yakBruteOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### bruteHandler

#### 详细描述


#### 定义

`bruteHandler(cb func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(c int) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### concurrentTarget

#### 详细描述


#### 定义

`concurrentTarget(c int) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### debug

#### 详细描述


#### 定义

`debug(b bool) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### finishingThreshold

#### 详细描述


#### 定义

`finishingThreshold(i int) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### maxDelay

#### 详细描述


#### 定义

`maxDelay(max int) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### minDelay

#### 详细描述


#### 定义

`minDelay(min int) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### okToStop

#### 详细描述


#### 定义

`okToStop(b bool) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### passList

#### 详细描述


#### 定义

`passList(passes ...string) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| passes | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### userList

#### 详细描述


#### 定义

`userList(users ...string) yakBruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


