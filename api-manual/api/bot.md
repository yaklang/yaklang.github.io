# bot

|函数名|函数描述/介绍|
|:------|:--------|
| [bot.FromEnv](#fromenv) ||
| [bot.New](#new) ||
| [bot.ding](#ding) ||
| [bot.webhook](#webhook) ||
| [bot.webhookWithSecret](#webhookwithsecret) ||
| [bot.workwx](#workwx) ||


## 函数定义
### FromEnv

#### 详细描述


#### 定义

`FromEnv() *Client`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Client` |   |


### New

#### 详细描述


#### 定义

`New(opts ...ConfigOpt) *Client`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Client` |   |


### ding

#### 详细描述


#### 定义

`ding(webhook string, key string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### webhook

#### 详细描述


#### 定义

`webhook(webhook string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### webhookWithSecret

#### 详细描述


#### 定义

`webhookWithSecret(webhook string, key string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### workwx

#### 详细描述


#### 定义

`workwx(webhook string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


