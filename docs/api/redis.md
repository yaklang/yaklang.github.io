# redis {#library-redis}

`redis` 库提供 Redis 客户端能力，用于连接 Redis 服务并执行命令，常用于未授权访问检测、数据读取与服务交互测试。

典型使用场景：

- 创建客户端：`redis.New(opts...)` 创建客户端，配 `redis.host` / `redis.port` / `redis.addr` 指定目标，`redis.username` / `redis.password` 提供凭据，`redis.timeoutSeconds` / `redis.retry` 控制连接行为，之后执行 Redis 命令。

与相邻库的关系：`redis` 属于协议交互工具，与 `brute`（口令爆破）、`servicescan`（服务识别）配合，常用于 Redis 未授权/弱口令的检测。

> 共 8 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [redis.addr](#addr) | `a string` | `redisConfigOpt` | 是一个 Redis 客户端配置选项，用于以 host:port 形式同时设置主机与端口 |
| [redis.host](#host) | `h string` | `redisConfigOpt` | 是一个 Redis 客户端配置选项，用于设置 Redis 服务器主机地址 |
| [redis.password](#password) | `a string` | `redisConfigOpt` | 是一个 Redis 客户端配置选项，用于设置认证密码 |
| [redis.port](#port) | `h int` | `redisConfigOpt` | 是一个 Redis 客户端配置选项，用于设置 Redis 服务器端口 |
| [redis.retry](#retry) | `a int` | `redisConfigOpt` | 是一个 Redis 客户端配置选项，用于设置连接的最大重试次数 |
| [redis.timeoutSeconds](#timeoutseconds) | `d int` | `redisConfigOpt` | 是一个 Redis 客户端配置选项，用于设置连接与读写超时（单位：秒） |
| [redis.username](#username) | `a string` | `redisConfigOpt` | 是一个 Redis 客户端配置选项，用于设置认证用户名（Redis 6.0+ ACL） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [redis.New](#new) | `r ...redisConfigOpt` | `*redisClient` | 创建一个 Redis 客户端，可通过配置选项指定地址、认证、超时等参数 |

## 函数详情

### addr {#addr}

```go
addr(a string) redisConfigOpt
```

是一个 Redis 客户端配置选项，用于以 host:port 形式同时设置主机与端口

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| a | `string` | Redis 服务器地址，格式为 host:port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |

**示例**

``````````````yak
// 以 host:port 形式创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"))
defer client.Close()
``````````````

---

### host {#host}

```go
host(h string) redisConfigOpt
```

是一个 Redis 客户端配置选项，用于设置 Redis 服务器主机地址

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `string` | Redis 服务器主机地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |

**示例**

``````````````yak
// 指定 Redis 主机与端口创建客户端，此处仅作示意
client = redis.New(redis.host("127.0.0.1"), redis.port(6379))
defer client.Close()
``````````````

---

### password {#password}

```go
password(a string) redisConfigOpt
```

是一个 Redis 客户端配置选项，用于设置认证密码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| a | `string` | 认证密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |

**示例**

``````````````yak
// 指定密码创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.password("123456"))
defer client.Close()
``````````````

---

### port {#port}

```go
port(h int) redisConfigOpt
```

是一个 Redis 客户端配置选项，用于设置 Redis 服务器端口

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `int` | Redis 服务器端口，默认 6379 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |

**示例**

``````````````yak
// 指定 Redis 端口创建客户端，此处仅作示意
client = redis.New(redis.host("127.0.0.1"), redis.port(6380))
defer client.Close()
``````````````

---

### retry {#retry}

```go
retry(a int) redisConfigOpt
```

是一个 Redis 客户端配置选项，用于设置连接的最大重试次数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| a | `int` | 最大重试次数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |

**示例**

``````````````yak
// 设置连接重试次数创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.retry(5))
defer client.Close()
``````````````

---

### timeoutSeconds {#timeoutseconds}

```go
timeoutSeconds(d int) redisConfigOpt
```

是一个 Redis 客户端配置选项，用于设置连接与读写超时（单位：秒）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `int` | 超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |

**示例**

``````````````yak
// 设置超时创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.timeoutSeconds(5))
defer client.Close()
``````````````

---

### username {#username}

```go
username(a string) redisConfigOpt
```

是一个 Redis 客户端配置选项，用于设置认证用户名（Redis 6.0+ ACL）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| a | `string` | 认证用户名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `redisConfigOpt` | 一个 Redis 客户端配置选项，作为可变参数传入 redis.New |

**示例**

``````````````yak
// 指定用户名与密码创建 Redis 客户端，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.username("default"), redis.password("123456"))
defer client.Close()
``````````````

---

## 可变参数函数详情

### New {#new}

```go
New(r ...redisConfigOpt) *redisClient
```

创建一个 Redis 客户端，可通过配置选项指定地址、认证、超时等参数

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `...redisConfigOpt` | 可选配置，例如 redis.addr、redis.host、redis.port、redis.password、redis.timeoutSeconds |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*redisClient` | Redis 客户端对象，可调用 Get/Set/Publish/Subscribe 等方法 |

**示例**

``````````````yak
// 创建 Redis 客户端并读写键值，依赖 Redis 服务，此处仅作示意
client = redis.New(redis.addr("127.0.0.1:6379"), redis.timeoutSeconds(5))
defer client.Close()
client.Set("key", "value")~
val = client.Get("key")~
println(val)
``````````````

---

