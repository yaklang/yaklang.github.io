# env

|函数名|函数描述/介绍|
|:------|:--------|
| [env.Get](#get) |Get 获取对应键名的环境变量值  ! 已弃用，可以使用 `os.Getenv` 代替  |
| [env.Set](#set) |Set 设置对应键名的环境变量值  ! 已弃用，可以使用 `os.Setenv` 代替  |


## 函数定义
### Get

#### 详细描述
Get 获取对应键名的环境变量值

! 已弃用，可以使用 `os.Getenv` 代替

Example:
```
env.Get("PATH")
```


#### 定义

`Get(key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Set

#### 详细描述
Set 设置对应键名的环境变量值

! 已弃用，可以使用 `os.Setenv` 代替

Example:
```
env.Set("YAK_PROXY", "http://127.0.0.1:10808")
```


#### 定义

`Set(key string, value string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |


