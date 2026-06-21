# env {#library-env}

`env` 库提供对进程环境变量的读写，用于在脚本中获取配置（如代理、API Key、路径）或临时设置环境。

典型使用场景：

- 读取：`env.Get(key)` 获取环境变量值。
- 设置：`env.Set(key, value)` 设置当前进程的环境变量。

与相邻库的关系：`env` 是最基础的配置入口，常与 `cli`（参数）、`os`（系统信息）配合，用于读取敏感配置而不硬编码到脚本里。

> 共 2 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [env.Get](#get) | `key string` | `string` | 获取对应键名的环境变量值 |
| [env.Set](#set) | `key string, value string` | - | 设置对应键名的环境变量值 |

## 函数详情

### Get {#get}

```go
Get(key string) string
```

获取对应键名的环境变量值

! 已弃用，可以使用 `os.Getenv` 代替

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 环境变量名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 环境变量的值，不存在时返回空字符串 |

**示例**

``````````````yak
// VARS: 先写入再读取，保证示例确定性
env.Set("YAK_DOC_ENV", "demo")
result = env.Get("YAK_DOC_ENV")
// STDOUT: 打印读取到的值
println(result)   // OUT: demo
// assert: 锁定结论
assert result == "demo", "Get should read the env var just set"
``````````````

---

### Set {#set}

```go
Set(key string, value string)
```

设置对应键名的环境变量值

! 已弃用，可以使用 `os.Setenv` 代替

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 环境变量名 |
| value | `string` | 要设置的值 |

**示例**

``````````````yak
// VARS: 设置环境变量后再读回校验
env.Set("YAK_DOC_ENV2", "ok")
result = env.Get("YAK_DOC_ENV2")
// STDOUT: 打印读取到的值
println(result)   // OUT: ok
// assert: 锁定结论
assert result == "ok", "Set should persist the env var"
``````````````

---

