# iiop

|函数名|函数描述/介绍|
|:------|:--------|
| [iiop.BindPayload](#bindpayload) ||
| [iiop.InvokePayload](#invokepayload) ||
| [iiop.RebindPayload](#rebindpayload) ||
| [iiop.SendPayload](#sendpayload) ||


## 函数定义
### BindPayload

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


### InvokePayload

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


### RebindPayload

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


### SendPayload

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


