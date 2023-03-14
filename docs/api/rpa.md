# rpa


|成员函数|函数描述/介绍|
|:------|:--------|
 | [rpa.Bruteforce](#rpabruteforce) |  |
 | [rpa.Start](#rpastart) |  |
 | [rpa.blackDomain](#rpablackdomain) |  |
 | [rpa.bruteButtonElement](#rpabrutebuttonelement) |  |
 | [rpa.bruteCaptchaElement](#rpabrutecaptchaelement) |  |
 | [rpa.brutePassElement](#rpabrutepasselement) |  |
 | [rpa.brutePassword](#rpabrutepassword) |  |
 | [rpa.bruteUserElement](#rpabruteuserelement) |  |
 | [rpa.bruteUserPassPath](#rpabruteuserpasspath) |  |
 | [rpa.bruteUsername](#rpabruteusername) |  |
 | [rpa.click](#rpaclick) |  |
 | [rpa.depth](#rpadepth) |  |
 | [rpa.headers](#rpaheaders) |  |
 | [rpa.input](#rpainput) |  |
 | [rpa.maxUrl](#rpamaxurl) |  |
 | [rpa.proxy](#rpaproxy) |  |
 | [rpa.select](#rpaselect) |  |
 | [rpa.strictUrl](#rpastricturl) |  |
 | [rpa.timeout](#rpatimeout) |  |
 | [rpa.whiteDomain](#rpawhitedomain) |  |




 



## 函数定义

### rpa.Bruteforce



#### 详细描述



#### 定义：

`func rpa.Bruteforce(v1: string, v2 ...bruteforce.ConfigOpt) return (r0: string, r1: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...bruteforce.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `string` |   |


 
### rpa.Start



#### 详细描述



#### 定义：

`func rpa.Start(v1: string, v2 ...core.ConfigOpt) return (r0: chan core.RequestIf, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...core.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan core.RequestIf` |   |
| r1 | `error` |   |


 
### rpa.blackDomain



#### 详细描述



#### 定义：

`func rpa.blackDomain(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### rpa.bruteButtonElement



#### 详细描述



#### 定义：

`func rpa.bruteButtonElement(v1: string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.bruteCaptchaElement



#### 详细描述



#### 定义：

`func rpa.bruteCaptchaElement(v1: string, v2: string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.brutePassElement



#### 详细描述



#### 定义：

`func rpa.brutePassElement(v1: string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.brutePassword



#### 详细描述



#### 定义：

`func rpa.brutePassword(v1 ...string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.bruteUserElement



#### 详细描述



#### 定义：

`func rpa.bruteUserElement(v1: string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.bruteUserPassPath



#### 详细描述



#### 定义：

`func rpa.bruteUserPassPath(v1 ...string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.bruteUsername



#### 详细描述



#### 定义：

`func rpa.bruteUsername(v1 ...string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.click



#### 详细描述



#### 定义：

`func rpa.click(v1: string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.depth



#### 详细描述



#### 定义：

`func rpa.depth(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### rpa.headers



#### 详细描述



#### 定义：

`func rpa.headers(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### rpa.input



#### 详细描述



#### 定义：

`func rpa.input(v1: string, v2: string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.maxUrl



#### 详细描述



#### 定义：

`func rpa.maxUrl(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### rpa.proxy



#### 详细描述



#### 定义：

`func rpa.proxy(v1: string, v2 ...string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### rpa.select



#### 详细描述



#### 定义：

`func rpa.select(v1: string, v2: string) return (r0: func ConfigOpt(v1: *bruteforce.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bruteforce.Config) ` |   |


 
### rpa.strictUrl



#### 详细描述



#### 定义：

`func rpa.strictUrl(v1: bool) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### rpa.timeout



#### 详细描述



#### 定义：

`func rpa.timeout(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### rpa.whiteDomain



#### 详细描述



#### 定义：

`func rpa.whiteDomain(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 


