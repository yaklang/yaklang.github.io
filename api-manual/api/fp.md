# fp

|函数名|函数描述/介绍|
|:------|:--------|
| [fp.GetAllFingerprint](#getallfingerprint) ||
| [fp.MatchRsp](#matchrsp) ||
| [fp.MatchRspByRule](#matchrspbyrule) ||


## 函数定义
### GetAllFingerprint

#### 详细描述


#### 定义

`GetAllFingerprint() chan *schema.GeneralRule`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.GeneralRule` |   |


### MatchRsp

#### 详细描述


#### 定义

`MatchRsp(rsp []byte) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### MatchRspByRule

#### 详细描述


#### 定义

`MatchRspByRule(rsp []byte, rule any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` |   |
| rule | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


