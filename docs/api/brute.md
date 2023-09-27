# brute

|成员函数|函数描述/介绍|
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
### getavailablebrutetypes

#### 详细描述


#### 定义

`GetAvailableBruteTypes() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### getpasswordlistfrombrutetype

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


### getusernamelistfrombrutetype

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


### new

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


### autodict

#### 详细描述


#### 定义

`autoDict() yakBruteOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakBruteOpt` |   |


### brutehandler

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


### concurrenttarget

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


### finishingthreshold

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


### maxdelay

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


### mindelay

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


### oktostop

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


### passlist

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


### userlist

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


