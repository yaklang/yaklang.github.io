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

`Bruteforce(url string, opts ...ConfigOpt) (string, string)`


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

`Start(url string, opt ...core.ConfigOpt) (chan core.RequestIf, error)`


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

`blackDomain(string) core.ConfigOpt`


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

`bruteButtonElement(string) bruteforce.ConfigOpt`


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

`bruteCaptchaElement(string, string) bruteforce.ConfigOpt`


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

`brutePassElement(string) bruteforce.ConfigOpt`


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

`brutePassword(...string) bruteforce.ConfigOpt`


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

`bruteUserElement(string) bruteforce.ConfigOpt`


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

`bruteUserPassPath(...string) bruteforce.ConfigOpt`


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

`bruteUsername(...string) bruteforce.ConfigOpt`


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

`click(string) bruteforce.ConfigOpt`


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

`depth(int) core.ConfigOpt`


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

`headers(string) core.ConfigOpt`


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

`input(string, string) bruteforce.ConfigOpt`


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

`maxUrl(int) core.ConfigOpt`


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

`proxy(string, ...string) core.ConfigOpt`


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

`select(string, string) bruteforce.ConfigOpt`


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

`strictUrl(bool) core.ConfigOpt`


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

`timeout(int) core.ConfigOpt`


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

`whiteDomain(string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 


