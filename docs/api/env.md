# env

|函数名|函数描述/介绍|
|:------|:--------|
| [env.Get](#get) |Get 获取对应键名的环境变量值 ! 已弃用，可以使用 `os.Getenv` 代替 参数: - key: 环境变量名 返回值: - 环境变量的值，不存在时返回空字符串|
| [env.Set](#set) |Set 设置对应键名的环境变量值 ! 已弃用，可以使用 `os.Setenv` 代替 参数: - key: 环境变量名 - value: 要设置的值|


## 函数定义
### Get

#### 详细描述
Get 获取对应键名的环境变量值

! 已弃用，可以使用 `os.Getenv` 代替

参数:

  - key: 环境变量名



返回值:

  - 环境变量的值，不存在时返回空字符串




Example:

``````````````yak
// VARS: 先写入再读取，保证示例确定性
env.Set("YAK_DOC_ENV", "demo")
result = env.Get("YAK_DOC_ENV")
// STDOUT: 打印读取到的值
println(result)   // OUT: demo
// assert: 锁定结论
assert result == "demo", "Get should read the env var just set"
``````````````


#### 定义

`Get(key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 环境变量名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 环境变量的值，不存在时返回空字符串 |


### Set

#### 详细描述
Set 设置对应键名的环境变量值

! 已弃用，可以使用 `os.Setenv` 代替

参数:

  - key: 环境变量名

  - value: 要设置的值




Example:

``````````````yak
// VARS: 设置环境变量后再读回校验
env.Set("YAK_DOC_ENV2", "ok")
result = env.Get("YAK_DOC_ENV2")
// STDOUT: 打印读取到的值
println(result)   // OUT: ok
// assert: 锁定结论
assert result == "ok", "Set should persist the env var"
``````````````


#### 定义

`Set(key string, value string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 环境变量名 |
| value | `string` | 要设置的值 |


