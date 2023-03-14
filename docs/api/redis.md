# redis


|成员函数|函数描述/介绍|
|:------|:--------|
 | [redis.New](#redisnew) | 启动一个 Redis 客户端 |
 | [redis.addr](#redisaddr) | 设置 Redis 地址 |
 | [redis.host](#redishost) |  |
 | [redis.password](#redispassword) | 设置 Redis 密码 |
 | [redis.port](#redisport) |  |
 | [redis.retry](#redisretry) |  |
 | [redis.timeoutSeconds](#redistimeoutseconds) |  |
 | [redis.username](#redisusername) |  |




 



## 函数定义

### redis.New

启动一个 Redis 客户端

#### 详细描述



#### 定义：

`func redis.New(v1 ...yaklib.redisConfigOpt) return (r0: *yaklib.redisClient)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yaklib.redisConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.redisClient` |   |


 
### redis.addr

设置 Redis 地址

#### 详细描述



#### 定义：

`func redis.addr(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func redisConfigOpt(v1: *yaklib.redisConfig) ` |   |


 
### redis.host



#### 详细描述



#### 定义：

`func redis.host(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func redisConfigOpt(v1: *yaklib.redisConfig) ` |   |


 
### redis.password

设置 Redis 密码

#### 详细描述



#### 定义：

`func redis.password(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func redisConfigOpt(v1: *yaklib.redisConfig) ` |   |


 
### redis.port



#### 详细描述



#### 定义：

`func redis.port(v1: int) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func redisConfigOpt(v1: *yaklib.redisConfig) ` |   |


 
### redis.retry



#### 详细描述



#### 定义：

`func redis.retry(v1: int) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func redisConfigOpt(v1: *yaklib.redisConfig) ` |   |


 
### redis.timeoutSeconds



#### 详细描述



#### 定义：

`func redis.timeoutSeconds(v1: int) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func redisConfigOpt(v1: *yaklib.redisConfig) ` |   |


 
### redis.username



#### 详细描述



#### 定义：

`func redis.username(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func redisConfigOpt(v1: *yaklib.redisConfig) ` |   |


 


