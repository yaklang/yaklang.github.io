# iiop

|成员函数|函数描述/介绍|
|:------|:--------|
| [iiop.BindPayload](#BindPayload) ||
| [iiop.InvokePayload](#InvokePayload) ||
| [iiop.RebindPayload](#RebindPayload) ||
| [iiop.SendPayload](#SendPayload) ||


## 函数定义
### iiop.BindPayload

#### 详细描述


#### 定义

`BindPayload(rmi string) PayloadGeneraterFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rmi | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PayloadGeneraterFun` |   |


### iiop.InvokePayload

#### 详细描述


#### 定义

`InvokePayload(backDoor string, cmd string) PayloadGeneraterFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| backDoor | `string` |   |
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PayloadGeneraterFun` |   |


### iiop.RebindPayload

#### 详细描述


#### 定义

`RebindPayload(rmi string) PayloadGeneraterFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rmi | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PayloadGeneraterFun` |   |


### iiop.SendPayload

#### 详细描述


#### 定义

`SendPayload(addr string, sendPayload PayloadGeneraterFun) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| sendPayload | `PayloadGeneraterFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


