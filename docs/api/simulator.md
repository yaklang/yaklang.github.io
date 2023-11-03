# simulator

|成员函数|函数描述/介绍|
|:------|:--------|
| [simulator.HttpBruteForce](#httpbruteforce) ||
| [simulator.captchaImgSelector](#captchaimgselector) ||
| [simulator.captchaInputSelector](#captchainputselector) ||
| [simulator.captchaMode](#captchamode) ||
| [simulator.captchaUrl](#captchaurl) ||
| [simulator.exePath](#exepath) ||
| [simulator.extraWaitLoadTime](#extrawaitloadtime) ||
| [simulator.leaklessStatus](#leaklessstatus) ||
| [simulator.loginDetectMode](#logindetectmode) ||
| [simulator.password](#password) ||
| [simulator.passwordList](#passwordlist) ||
| [simulator.passwordSelector](#passwordselector) ||
| [simulator.proxy](#proxy) ||
| [simulator.submitButtonSelector](#submitbuttonselector) ||
| [simulator.username](#username) ||
| [simulator.usernameList](#usernamelist) ||
| [simulator.usernameSelector](#usernameselector) ||
| [simulator.wsAddress](#wsaddress) ||


## 函数定义
### HttpBruteForce

#### 详细描述


#### 定义

`HttpBruteForce(targetUrl string, opts ...BruteConfigOpt) (chan Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` |   |
| opts | `...BruteConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan Result` |   |
| r2 | `error` |   |


### captchaImgSelector

#### 详细描述


#### 定义

`captchaImgSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### captchaInputSelector

#### 详细描述


#### 定义

`captchaInputSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### captchaMode

#### 详细描述


#### 定义

`captchaMode(mode string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### captchaUrl

#### 详细描述


#### 定义

`captchaUrl(url string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### exePath

#### 详细描述


#### 定义

`exePath(exePath string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| exePath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### extraWaitLoadTime

#### 详细描述


#### 定义

`extraWaitLoadTime(time int) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| time | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### leaklessStatus

#### 详细描述


#### 定义

`leaklessStatus(leakless LeaklessMode) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `LeaklessMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### loginDetectMode

#### 详细描述


#### 定义

`loginDetectMode(mode loginDetectMode, degree ...float64) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `loginDetectMode` |   |
| degree | `...float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### password

#### 详细描述


#### 定义

`password(password ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### passwordList

#### 详细描述


#### 定义

`passwordList(password []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### passwordSelector

#### 详细描述


#### 定义

`passwordSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxy string, details ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` |   |
| details | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### submitButtonSelector

#### 详细描述


#### 定义

`submitButtonSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### username

#### 详细描述


#### 定义

`username(username ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### usernameList

#### 详细描述


#### 定义

`usernameList(username []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### usernameSelector

#### 详细描述


#### 定义

`usernameSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### wsAddress

#### 详细描述


#### 定义

`wsAddress(ws string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ws | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


