# simulator

|成员函数|函数描述/介绍|
|:------|:--------|
| [simulator.HttpBruteForce](#HttpBruteForce) ||
| [simulator.captchaImgSelector](#captchaImgSelector) ||
| [simulator.captchaInputSelector](#captchaInputSelector) ||
| [simulator.captchaMode](#captchaMode) ||
| [simulator.captchaUrl](#captchaUrl) ||
| [simulator.exePath](#exePath) ||
| [simulator.extraWaitLoadTime](#extraWaitLoadTime) ||
| [simulator.leaklessStatus](#leaklessStatus) ||
| [simulator.loginDetectMode](#loginDetectMode) ||
| [simulator.password](#password) ||
| [simulator.passwordList](#passwordList) ||
| [simulator.passwordSelector](#passwordSelector) ||
| [simulator.proxy](#proxy) ||
| [simulator.submitButtonSelector](#submitButtonSelector) ||
| [simulator.username](#username) ||
| [simulator.usernameList](#usernameList) ||
| [simulator.usernameSelector](#usernameSelector) ||
| [simulator.wsAddress](#wsAddress) ||


## 函数定义
### simulator.HttpBruteForce

#### 详细描述


#### 定义

`HttpBruteForce(urlStr string, opts ...BruteConfigOpt) (chan Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...BruteConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan Result` |   |
| r2 | `error` |   |


### simulator.captchaImgSelector

#### 详细描述


#### 定义

`captchaImgSelector(captchaImgSelector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| captchaImgSelector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.captchaInputSelector

#### 详细描述


#### 定义

`captchaInputSelector(captchaSelector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| captchaSelector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.captchaMode

#### 详细描述


#### 定义

`captchaMode(captchaMode string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| captchaMode | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.captchaUrl

#### 详细描述


#### 定义

`captchaUrl(captchaUrl string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| captchaUrl | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.exePath

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


### simulator.extraWaitLoadTime

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


### simulator.leaklessStatus

#### 详细描述


#### 定义

`leaklessStatus(leakless config.LeaklessMode) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `config.LeaklessMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.loginDetectMode

#### 详细描述


#### 定义

`loginDetectMode(detectMode loginDetectMode, degree ...float64) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| detectMode | `loginDetectMode` |   |
| degree | `...float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.password

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


### simulator.passwordList

#### 详细描述


#### 定义

`passwordList(passwords []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| passwords | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.passwordSelector

#### 详细描述


#### 定义

`passwordSelector(passwordSelector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| passwordSelector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.proxy

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


### simulator.submitButtonSelector

#### 详细描述


#### 定义

`submitButtonSelector(buttonSelector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| buttonSelector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.username

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


### simulator.usernameList

#### 详细描述


#### 定义

`usernameList(usernames []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| usernames | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.usernameSelector

#### 详细描述


#### 定义

`usernameSelector(usernameSelector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| usernameSelector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### simulator.wsAddress

#### 详细描述


#### 定义

`wsAddress(wsAddress string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| wsAddress | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


