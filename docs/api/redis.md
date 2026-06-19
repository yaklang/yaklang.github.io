# redis

|函数名|函数描述/介绍|
|:------|:--------|
| [redis.New](#new) |New 创建一个 Redis 客户端，可通过配置选项指定地址、认证、超时等参数 参数: - r: 可选配置，例如 redis.addr、redis.host、redis.port、redis.password、redis.timeoutSeconds 返回值: - Redis 客户端对象，可调用 G...|
| [redis.addr](#addr) |addr 是一个 Redis 客户端配置选项，用于以 host:port 形式同时设置主机与端口 参数: - a: Redis 服务器地址，格式为 host:port 返回值: - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New|
| [redis.host](#host) |host 是一个 Redis 客户端配置选项，用于设置 Redis 服务器主机地址 参数: - h: Redis 服务器主机地址 返回值: - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New|
| [redis.password](#password) |password 是一个 Redis 客户端配置选项，用于设置认证密码 参数: - a: 认证密码 返回值: - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New|
| [redis.port](#port) |port 是一个 Redis 客户端配置选项，用于设置 Redis 服务器端口 参数: - h: Redis 服务器端口，默认 6379 返回值: - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New|
| [redis.retry](#retry) |retry 是一个 Redis 客户端配置选项，用于设置连接的最大重试次数 参数: - a: 最大重试次数 返回值: - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New|
| [redis.timeoutSeconds](#timeoutseconds) |timeoutSeconds 是一个 Redis 客户端配置选项，用于设置连接与读写超时（单位：秒） 参数: - d: 超时时间，单位为秒 返回值: - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New|
| [redis.username](#username) |username 是一个 Redis 客户端配置选项，用于设置认证用户名（Redis 6.0+ ACL） 参数: - a: 认证用户名 返回值: - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New|


## 函数定义
### New

#### 详细描述
New 创建一个 Redis 客户端，可通过配置选项指定地址、认证、超时等参数

参数:

  - r: 可选配置，例如 redis.addr、redis.host、redis.port、redis.password、redis.timeoutSeconds



返回值:

  - Redis 客户端对象，可调用 Get/Set/Publish/Subscribe 等方法




Example:

``````````````yak
// 创建 Redis 客户端并读写键值，依赖 Redis 服务，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.timeoutSeconds(5))
defer client.Close()
client.Set("key", "value")~
val = client.Get("key")~
println(val)
``````````````


#### 定义

`New(r ...redisConfigOpt) *redisClient`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `...redisConfigOpt` | 可选配置，例如 redis.addr、redis.host、redis.port、redis.password、redis.timeoutSeconds |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*redisClient` | Redis 客户端对象，可调用 Get/Set/Publish/Subscribe 等方法 |


### addr

#### 详细描述
addr 是一个 Redis 客户端配置选项，用于以 host:port 形式同时设置主机与端口

参数:

  - a: Redis 服务器地址，格式为 host:port



返回值:

  - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New




Example:

``````````````yak
// 以 host:port 形式创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"))
defer client.Close()
``````````````


#### 定义

`addr(a string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` | Redis 服务器地址，格式为 host:port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |


### host

#### 详细描述
host 是一个 Redis 客户端配置选项，用于设置 Redis 服务器主机地址

参数:

  - h: Redis 服务器主机地址



返回值:

  - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New




Example:

``````````````yak
// 指定 Redis 主机与端口创建客户端，此处仅作示意
client = redis.New(redis.host("127.0.0.1"), redis.port(6379))
defer client.Close()
``````````````


#### 定义

`host(h string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` | Redis 服务器主机地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |


### password

#### 详细描述
password 是一个 Redis 客户端配置选项，用于设置认证密码

参数:

  - a: 认证密码



返回值:

  - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New




Example:

``````````````yak
// 指定密码创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.password("123456"))
defer client.Close()
``````````````


#### 定义

`password(a string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` | 认证密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |


### port

#### 详细描述
port 是一个 Redis 客户端配置选项，用于设置 Redis 服务器端口

参数:

  - h: Redis 服务器端口，默认 6379



返回值:

  - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New




Example:

``````````````yak
// 指定 Redis 端口创建客户端，此处仅作示意
client = redis.New(redis.host("127.0.0.1"), redis.port(6380))
defer client.Close()
``````````````


#### 定义

`port(h int) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `int` | Redis 服务器端口，默认 6379 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |


### retry

#### 详细描述
retry 是一个 Redis 客户端配置选项，用于设置连接的最大重试次数

参数:

  - a: 最大重试次数



返回值:

  - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New




Example:

``````````````yak
// 设置连接重试次数创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.retry(5))
defer client.Close()
``````````````


#### 定义

`retry(a int) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `int` | 最大重试次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |


### timeoutSeconds

#### 详细描述
timeoutSeconds 是一个 Redis 客户端配置选项，用于设置连接与读写超时（单位：秒）

参数:

  - d: 超时时间，单位为秒



返回值:

  - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New




Example:

``````````````yak
// 设置超时创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.timeoutSeconds(5))
defer client.Close()
``````````````


#### 定义

`timeoutSeconds(d int) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `int` | 超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |


### username

#### 详细描述
username 是一个 Redis 客户端配置选项，用于设置认证用户名（Redis 6.0+ ACL）

参数:

  - a: 认证用户名



返回值:

  - 一个 Redis 客户端配置选项，作为可变参数传入 redis.New




Example:

``````````````yak
// 指定用户名与密码创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.username("default"), redis.password("123456"))
defer client.Close()
``````````````


#### 定义

`username(a string) redisConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` | 认证用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |


