# dyn


|成员函数|函数描述/介绍|
|:------|:--------|
 | [dyn.Eval](#dyneval) |  |
 | [dyn.IsYakFunc](#dynisyakfunc) |  |
 | [dyn.LoadVarFromFile](#dynloadvarfromfile) |  |
 | [dyn.params](#dynparams) |  |




 



## 函数定义

### dyn.Eval



#### 定义：

`func (v1: interface {}) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### dyn.IsYakFunc



#### 定义：

`func (v1: interface {}) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### dyn.LoadVarFromFile



#### 定义：

`func (v1: string, v2: string, v3 ...func yakEvalConfigOpt(v1: *yak.yakEvalConfig) ) return([]*yak.yakVariable, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | []yak.yakEvalConfigOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []*yak.yakVariable |   |
| r1 | error |   |


### dyn.params



#### 定义：

`func (v1: map[string]interface {}) return(func yakEvalConfigOpt(v1: *yak.yakEvalConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | map[string]interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func yakEvalConfigOpt(v1: *yak.yakEvalConfig)  |   |





