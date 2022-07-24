# csrf


|成员函数|函数描述/介绍|
|:------|:--------|
 | [csrf.Generate](#csrfgenerate) |  |
 | [csrf.multipartDefaultValue](#csrfmultipartdefaultvalue) |  |




 



## 函数定义

### csrf.Generate



#### 详细描述



#### 定义：

`func csrf.Generate(v1: any, v2 ...yaklib.csrfConfig) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...yaklib.csrfConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### csrf.multipartDefaultValue



#### 详细描述



#### 定义：

`func csrf.multipartDefaultValue(v1: bool) return (r0: func csrfConfig(v1: *yaklib._csrfConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func csrfConfig(v1: *yaklib._csrfConfig) ` |   |


 


