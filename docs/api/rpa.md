# rpa


|成员函数|函数描述/介绍|
|:------|:--------|
 | [rpa.Start](#rpastart) |  |
 | [rpa.black_domain](#rpablack_domain) |  |
 | [rpa.depth](#rpadepth) |  |
 | [rpa.headers](#rpaheaders) |  |
 | [rpa.max_url](#rpamax_url) |  |
 | [rpa.proxy](#rpaproxy) |  |
 | [rpa.strict_url](#rpastrict_url) |  |
 | [rpa.timeout](#rpatimeout) |  |
 | [rpa.white_domain](#rpawhite_domain) |  |




 



## 函数定义

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


 
### rpa.black_domain



#### 详细描述



#### 定义：

`func rpa.black_domain(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
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


 
### rpa.max_url



#### 详细描述



#### 定义：

`func rpa.max_url(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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


 
### rpa.strict_url



#### 详细描述



#### 定义：

`func rpa.strict_url(v1: bool) return (r0: func ConfigOpt(v1: *core.Config) )`


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


 
### rpa.white_domain



#### 详细描述



#### 定义：

`func rpa.white_domain(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 


