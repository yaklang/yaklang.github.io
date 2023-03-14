# brute


|成员函数|函数描述/介绍|
|:------|:--------|
 | [brute.GetAvailableBruteTypes](#brutegetavailablebrutetypes) | 获取当前模块支持的所有的爆破类型 |
 | [brute.GetPasswordListFromBruteType](#brutegetpasswordlistfrombrutetype) | 根据服务获取服务对应的密码列表 |
 | [brute.GetUsernameListFromBruteType](#brutegetusernamelistfrombrutetype) | 根据服务获取服务对应的用户列表 |
 | [brute.New](#brutenew) | 新建一个爆破执行期 |
 | [brute.bruteHandler](#brutebrutehandler) |  |
 | [brute.concurrent](#bruteconcurrent) |  |
 | [brute.concurrentTarget](#bruteconcurrenttarget) |  |
 | [brute.debug](#brutedebug) |  |
 | [brute.finishingThreshold](#brutefinishingthreshold) | 停止爆破的阈值 |
 | [brute.maxDelay](#brutemaxdelay) |  |
 | [brute.minDelay](#brutemindelay) |  |
 | [brute.okToStop](#bruteoktostop) | 如果爆破出结果就停止 |
 | [brute.passList](#brutepasslist) | 设置密码列表 |
 | [brute.userList](#bruteuserlist) |  |




 



## 函数定义

### brute.GetAvailableBruteTypes

获取当前模块支持的所有的爆破类型

#### 详细描述



#### 定义：

`func brute.GetAvailableBruteTypes() return (r0: []string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### brute.GetPasswordListFromBruteType

根据服务获取服务对应的密码列表

#### 详细描述



#### 定义：

`func brute.GetPasswordListFromBruteType(bruteType: string) return (list: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bruteType | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| list | `[]string` |   |


 
### brute.GetUsernameListFromBruteType

根据服务获取服务对应的用户列表

#### 详细描述



#### 定义：

`func brute.GetUsernameListFromBruteType(bruteType: string) return (list: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bruteType | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| list | `[]string` |   |


 
### brute.New

新建一个爆破执行期

#### 详细描述



#### 定义：

`func brute.New(bruteType: string, bruteParams ...yakBruteOpt) return (r0: *tools.yakBruter, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bruteType | `string` |   |
| bruteParams | `...yakBruteOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*tools.yakBruter` |   |
| r1 | `error` |   |


 
### brute.bruteHandler



#### 详细描述



#### 定义：

`func brute.bruteHandler(v1: func (v1: *bruteutils.BruteItem) return(*bruteutils.BruteItemResult) ) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *bruteutils.BruteItem) return(*bruteutils.BruteItemResult) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.concurrent



#### 详细描述



#### 定义：

`func brute.concurrent(v1: int) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.concurrentTarget



#### 详细描述



#### 定义：

`func brute.concurrentTarget(v1: int) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.debug



#### 详细描述



#### 定义：

`func brute.debug(v1: bool) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.finishingThreshold

停止爆破的阈值

#### 详细描述



#### 定义：

`func brute.finishingThreshold(v1: int) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.maxDelay



#### 详细描述



#### 定义：

`func brute.maxDelay(v1: int) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.minDelay



#### 详细描述



#### 定义：

`func brute.minDelay(v1: int) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.okToStop

如果爆破出结果就停止

#### 详细描述



#### 定义：

`func brute.okToStop(v1: bool) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.passList

设置密码列表

#### 详细描述



#### 定义：

`func brute.passList(v1 ...string) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 
### brute.userList



#### 详细描述



#### 定义：

`func brute.userList(v1 ...string) return (r0: func yakBruteOpt(v1: *tools.yakBruter) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakBruteOpt(v1: *tools.yakBruter) ` |   |


 


