# dyn


|成员函数|函数描述/介绍|
|:------|:--------|
 | [dyn.Eval](#dyneval) |  |
 | [dyn.IsYakFunc](#dynisyakfunc) |  |
 | [dyn.LoadVarFromFile](#dynloadvarfromfile) |  |
 | [dyn.params](#dynparams) |  |




 



## 函数定义

### dyn.Eval



#### 详细描述



#### 定义：

`func dyn.Eval(v1: interface {}) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### dyn.IsYakFunc



#### 详细描述



#### 定义：

`func dyn.IsYakFunc(v1: interface {}) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### dyn.LoadVarFromFile



#### 详细描述



#### 定义：

`func dyn.LoadVarFromFile(v1: string, v2: string, v3 ...[]yak.yakEvalConfigOpt) return (r0: []*yak.yakVariable, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `[]yak.yakEvalConfigOpt /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*yak.yakVariable` |   |
| r1 | `error` |   |


 
### dyn.params



#### 详细描述



#### 定义：

`func dyn.params(v1: map[string]interface {}) return (r0: func yakEvalConfigOpt(v1: *yak.yakEvalConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakEvalConfigOpt(v1: *yak.yakEvalConfig) ` |   |


 


