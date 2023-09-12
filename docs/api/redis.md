# redis

|成员函数|函数描述/介绍|
|:------|:--------|
| [redis.New](#New) ||
| [redis.addr](#addr) ||
| [redis.host](#host) ||
| [redis.password](#password) ||
| [redis.port](#port) ||
| [redis.retry](#retry) ||
| [redis.timeoutSeconds](#timeoutSeconds) ||
| [redis.username](#username) ||


## 函数定义
### redis.New

#### 详细描述


#### 定义

`New(r ...redisConfigOpt) *redisClient`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `...redisConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*redisClient` |   |


### redis.addr

#### 详细描述


#### 定义

`addr(a string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` |   |


### redis.host

#### 详细描述


#### 定义

`host(h string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` |   |


### redis.password

#### 详细描述


#### 定义

`password(a string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` |   |


### redis.port

#### 详细描述


#### 定义

`port(h int) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` |   |


### redis.retry

#### 详细描述


#### 定义

`retry(a int) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` |   |


### redis.timeoutSeconds

#### 详细描述


#### 定义

`timeoutSeconds(d int) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` |   |


### redis.username

#### 详细描述


#### 定义

`username(a string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` |   |


