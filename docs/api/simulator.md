# simulator


|成员函数|函数描述/介绍|
|:------|:--------|
 | [simulator.HttpBruteForce](#simulatorhttpbruteforce) |  |
 | [simulator.captchaImgSelector](#simulatorcaptchaimgselector) |  |
 | [simulator.captchaInputSelector](#simulatorcaptchainputselector) |  |
 | [simulator.captchaMode](#simulatorcaptchamode) |  |
 | [simulator.captchaUrl](#simulatorcaptchaurl) |  |
 | [simulator.exePath](#simulatorexepath) |  |
 | [simulator.extraWaitLoadTime](#simulatorextrawaitloadtime) |  |
 | [simulator.leaklessStatus](#simulatorleaklessstatus) |  |
 | [simulator.loginDetectMode](#simulatorlogindetectmode) |  |
 | [simulator.password](#simulatorpassword) |  |
 | [simulator.passwordList](#simulatorpasswordlist) |  |
 | [simulator.passwordSelector](#simulatorpasswordselector) |  |
 | [simulator.proxy](#simulatorproxy) |  |
 | [simulator.submitButtonSelector](#simulatorsubmitbuttonselector) |  |
 | [simulator.username](#simulatorusername) |  |
 | [simulator.usernameList](#simulatorusernamelist) |  |
 | [simulator.usernameSelector](#simulatorusernameselector) |  |
 | [simulator.wsAddress](#simulatorwsaddress) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`simulator.defaultChangeMode`|`httpbrute.loginDetectMode`| //|
|`simulator.htmlChangeMode`|`httpbrute.loginDetectMode`| //|
|`simulator.leaklessDefault`|`config.LeaklessMode`| //|
|`simulator.leaklessOff`|`config.LeaklessMode`| //|
|`simulator.leaklessOn`|`config.LeaklessMode`| //|
|`simulator.simple`|`map[string]interface {}`| //|
|`simulator.urlChangeMode`|`httpbrute.loginDetectMode`| //|





## 函数定义

### simulator.HttpBruteForce



#### 详细描述



#### 定义：

`func simulator.HttpBruteForce(v1: string, v2 ...httpbrute.BruteConfigOpt) return (r0: chan httpbrute.Result, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...httpbrute.BruteConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan httpbrute.Result` |   |
| r1 | `error` |   |


 
### simulator.captchaImgSelector



#### 详细描述



#### 定义：

`func simulator.captchaImgSelector(v1: string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.captchaInputSelector



#### 详细描述



#### 定义：

`func simulator.captchaInputSelector(v1: string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.captchaMode



#### 详细描述



#### 定义：

`captchaMode(string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.captchaUrl



#### 详细描述



#### 定义：

`captchaUrl(string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.exePath



#### 详细描述



#### 定义：

`func simulator.exePath(v1: string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.extraWaitLoadTime



#### 详细描述



#### 定义：

`func simulator.extraWaitLoadTime(v1: int) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.leaklessStatus



#### 详细描述



#### 定义：

`func simulator.leaklessStatus(v1: config.LeaklessMode) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `config.LeaklessMode` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.loginDetectMode



#### 详细描述



#### 定义：

`func simulator.loginDetectMode(v1: httpbrute.loginDetectMode, v2 ...float64) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `httpbrute.loginDetectMode` |   |
| v2 | `...float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.password



#### 详细描述



#### 定义：

`func simulator.password(v1 ...string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.passwordList



#### 详细描述



#### 定义：

`passwordList([]string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.passwordSelector



#### 详细描述



#### 定义：

`func simulator.passwordSelector(v1: string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.proxy



#### 详细描述



#### 定义：

`func simulator.proxy(v1: string, v2 ...string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.submitButtonSelector



#### 详细描述



#### 定义：

`func simulator.submitButtonSelector(v1: string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.username



#### 详细描述



#### 定义：

`func simulator.username(v1 ...string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.usernameList



#### 详细描述



#### 定义：

`usernameList([]string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.usernameSelector



#### 详细描述



#### 定义：

`func simulator.usernameSelector(v1: string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 
### simulator.wsAddress



#### 详细描述



#### 定义：

`func simulator.wsAddress(v1: string) return (r0: func BruteConfigOpt(v1: *httpbrute.BruteConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BruteConfigOpt(v1: *httpbrute.BruteConfig) ` |   |


 


