# csrf

|成员函数|函数描述/介绍|
|:------|:--------|
| [csrf.Generate](#generate) ||
| [csrf.https](#https) ||
| [csrf.multipartDefaultValue](#multipartdefaultvalue) ||


## 函数定义
### Generate

#### 详细描述


#### 定义

`Generate(raw any, opts ...csrfConfig) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| opts | `...csrfConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### https

#### 详细描述


#### 定义

`https(b bool) csrfConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `csrfConfig` |   |


### multipartDefaultValue

#### 详细描述


#### 定义

`multipartDefaultValue(b bool) csrfConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `csrfConfig` |   |


