# brute

|函数名|函数描述/介绍|
|:------|:--------|
| [brute.GetAvailableBruteTypes](#getavailablebrutetypes) ||
| [brute.GetPasswordListFromBruteType](#getpasswordlistfrombrutetype) ||
| [brute.GetUsernameListFromBruteType](#getusernamelistfrombrutetype) ||
| [brute.New](#new) ||
| [brute.autoDict](#autodict) ||
| [brute.bruteHandler](#brutehandler) ||
| [brute.concurrent](#concurrent) ||
| [brute.concurrentTarget](#concurrenttarget) ||
| [brute.debug](#debug) ||
| [brute.finishingThreshold](#finishingthreshold) ||
| [brute.maxDelay](#maxdelay) ||
| [brute.minDelay](#mindelay) ||
| [brute.okToStop](#oktostop) ||
| [brute.passList](#passlist) ||
| [brute.userList](#userlist) ||


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

`New(typeStr string, opts ...BruteOpt) (*yakBruter, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeStr | `string` |   |
| opts | `...BruteOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakBruter` |   |
| r2 | `error` |   |


### autoDict

#### 详细描述


#### 定义

`autoDict() BruteOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### bruteHandler

#### 详细描述


#### 定义

`bruteHandler(cb func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(c int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### concurrentTarget

#### 详细描述


#### 定义

`concurrentTarget(c int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### debug

#### 详细描述


#### 定义

`debug(b bool) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### finishingThreshold

#### 详细描述


#### 定义

`finishingThreshold(i int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### maxDelay

#### 详细描述


#### 定义

`maxDelay(max int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### minDelay

#### 详细描述


#### 定义

`minDelay(min int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### okToStop

#### 详细描述


#### 定义

`okToStop(b bool) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### passList

#### 详细描述


#### 定义

`passList(passes ...string) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| passes | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


### userList

#### 详细描述


#### 定义

`userList(users ...string) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` |   |


