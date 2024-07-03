# rpa

|函数名|函数描述/介绍|
|:------|:--------|
| [rpa.Bruteforce](#bruteforce) ||
| [rpa.Start](#start) ||
| [rpa.blackDomain](#blackdomain) ||
| [rpa.bruteButtonElement](#brutebuttonelement) ||
| [rpa.bruteCaptchaElement](#brutecaptchaelement) ||
| [rpa.brutePassElement](#brutepasselement) ||
| [rpa.brutePassword](#brutepassword) ||
| [rpa.bruteUserElement](#bruteuserelement) ||
| [rpa.bruteUserPassPath](#bruteuserpasspath) ||
| [rpa.bruteUsername](#bruteusername) ||
| [rpa.click](#click) ||
| [rpa.depth](#depth) ||
| [rpa.headers](#headers) ||
| [rpa.input](#input) ||
| [rpa.maxUrl](#maxurl) ||
| [rpa.proxy](#proxy) ||
| [rpa.select](#select) ||
| [rpa.strictUrl](#stricturl) ||
| [rpa.timeout](#timeout) ||
| [rpa.whiteDomain](#whitedomain) ||


## 函数定义
### Bruteforce

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


### Start

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


### blackDomain

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


### bruteButtonElement

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


### bruteCaptchaElement

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


### brutePassElement

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


### brutePassword

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


### bruteUserElement

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


### bruteUserPassPath

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


### bruteUsername

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


### click

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


### depth

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


### headers

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


### input

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


### maxUrl

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


### proxy

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


### select

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


### strictUrl

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


### timeout

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


### whiteDomain

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


