# rpa

|成员函数|函数描述/介绍|
|:------|:--------|
| [rpa.Bruteforce](#Bruteforce) ||
| [rpa.Start](#Start) ||
| [rpa.blackDomain](#blackDomain) ||
| [rpa.bruteButtonElement](#bruteButtonElement) ||
| [rpa.bruteCaptchaElement](#bruteCaptchaElement) ||
| [rpa.brutePassElement](#brutePassElement) ||
| [rpa.brutePassword](#brutePassword) ||
| [rpa.bruteUserElement](#bruteUserElement) ||
| [rpa.bruteUserPassPath](#bruteUserPassPath) ||
| [rpa.bruteUsername](#bruteUsername) ||
| [rpa.click](#click) ||
| [rpa.depth](#depth) ||
| [rpa.headers](#headers) ||
| [rpa.input](#input) ||
| [rpa.maxUrl](#maxUrl) ||
| [rpa.proxy](#proxy) ||
| [rpa.select](#select) ||
| [rpa.strictUrl](#strictUrl) ||
| [rpa.timeout](#timeout) ||
| [rpa.whiteDomain](#whiteDomain) ||


## 函数定义
### rpa.Bruteforce

#### 详细描述


#### 定义

`Bruteforce(url string, opts ...ConfigOpt) (string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opts | `...ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `string` |   |


### rpa.Start

#### 详细描述


#### 定义

`Start(url string, opt ...core.ConfigOpt) (chan core.RequestIf, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opt | `...core.ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan core.RequestIf` |   |
| r2 | `error` |   |


### rpa.blackDomain

#### 详细描述


#### 定义

`blackDomain(matchStr string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchStr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.bruteButtonElement

#### 详细描述


#### 定义

`bruteButtonElement(element string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.bruteCaptchaElement

#### 详细描述


#### 定义

`bruteCaptchaElement(element string, pic string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` |   |
| pic | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.brutePassElement

#### 详细描述


#### 定义

`brutePassElement(element string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.brutePassword

#### 详细描述


#### 定义

`brutePassword(password ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.bruteUserElement

#### 详细描述


#### 定义

`bruteUserElement(element string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.bruteUserPassPath

#### 详细描述


#### 定义

`bruteUserPassPath(filepath ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.bruteUsername

#### 详细描述


#### 定义

`bruteUsername(username ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.click

#### 详细描述


#### 定义

`click(selector string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.depth

#### 详细描述


#### 定义

`depth(depth int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.headers

#### 详细描述


#### 定义

`headers(s string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.input

#### 详细描述


#### 定义

`input(selector string, inputStr string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |
| inputStr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.maxUrl

#### 详细描述


#### 定义

`maxUrl(count int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.proxy

#### 详细描述


#### 定义

`proxy(url string, userinfo ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| userinfo | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.select

#### 详细描述


#### 定义

`select(selector string, item string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |
| item | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.strictUrl

#### 详细描述


#### 定义

`strictUrl(status bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| status | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.timeout

#### 详细描述


#### 定义

`timeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rpa.whiteDomain

#### 详细描述


#### 定义

`whiteDomain(matchStr string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchStr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


