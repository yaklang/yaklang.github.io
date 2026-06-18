# browser

|函数名|函数描述/介绍|
|:------|:--------|
| [browser.Close](#close) ||
| [browser.CloseAll](#closeall) ||
| [browser.Get](#get) ||
| [browser.HaveBrowserInstalled](#havebrowserinstalled) ||
| [browser.List](#list) ||
| [browser.Open](#open) ||
| [browser.controlURL](#controlurl) ||
| [browser.exePath](#exepath) ||
| [browser.headless](#headless) ||
| [browser.id](#id) ||
| [browser.leakless](#leakless) ||
| [browser.noSandBox](#nosandbox) ||
| [browser.proxy](#proxy) ||
| [browser.timeout](#timeout) ||
| [browser.wsAddress](#wsaddress) ||


## 函数定义
### Close

#### 详细描述


#### 定义

`Close(opts ...BrowserOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...BrowserOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### CloseAll

#### 详细描述


#### 定义

`CloseAll()`


### Get

#### 详细描述


#### 定义

`Get(opts ...BrowserOption) (*BrowserInstance, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...BrowserOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*BrowserInstance` |   |
| r2 | `error` |   |


### HaveBrowserInstalled

#### 详细描述


#### 定义

`HaveBrowserInstalled() bool`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### List

#### 详细描述


#### 定义

`List() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Open

#### 详细描述


#### 定义

`Open(opts ...BrowserOption) (*BrowserInstance, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...BrowserOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*BrowserInstance` |   |
| r2 | `error` |   |


### controlURL

#### 详细描述


#### 定义

`controlURL(controlURL string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| controlURL | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### exePath

#### 详细描述


#### 定义

`exePath(exePath string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| exePath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### headless

#### 详细描述


#### 定义

`headless(headless bool) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headless | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### id

#### 详细描述


#### 定义

`id(id string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### leakless

#### 详细描述


#### 定义

`leakless(leakless bool) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### noSandBox

#### 详细描述


#### 定义

`noSandBox(noSandBox bool) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noSandBox | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxyAddress string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxyAddress | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### timeout

#### 详细描述


#### 定义

`timeout(timeout float64) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


### wsAddress

#### 详细描述


#### 定义

`wsAddress(wsAddress string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| wsAddress | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` |   |


