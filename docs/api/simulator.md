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
### httpbruteforce

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


### captchaimgselector

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


### captchainputselector

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


### captchamode

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


### captchaurl

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


### exepath

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


### extrawaitloadtime

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


### leaklessstatus

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


### logindetectmode

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


### passwordlist

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


### passwordselector

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


### submitbuttonselector

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


### usernamelist

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


### usernameselector

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


### wsaddress

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


