# aibalance

|函数名|函数描述/介绍|
|:------|:--------|
| [aibalance.Start](#start) |Start starts the AI balance server with options |
| [aibalance.adminPassword](#adminpassword) ||
| [aibalance.config](#config) ||
| [aibalance.host](#host) ||
| [aibalance.port](#port) ||


## 函数定义
### Start

#### 详细描述
Start starts the AI balance server with options


#### 定义

`Start(opts ...StartOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...StartOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### adminPassword

#### 详细描述


#### 定义

`adminPassword(password string) StartOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StartOption` |   |


### config

#### 详细描述


#### 定义

`config(configFile string) StartOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| configFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StartOption` |   |


### host

#### 详细描述


#### 定义

`host(host string) StartOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StartOption` |   |


### port

#### 详细描述


#### 定义

`port(port int) StartOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `StartOption` |   |


