# timezone

|函数名|函数描述/介绍|
|:------|:--------|
| [timezone.Get](#get) |Get 返回具有给定名称的时区与错误  如果名称为空字符串 "" 或 "UTC"，LoadLocation 返回 UTC 时区  如果名称为 "Local"，LoadLocation 返回本地时区  否则，该名称被视为 IANA 时区数据库中的一个位置名称，如 "America/New_York" ...|
| [timezone.Now](#now) |Now 根据给定名称的时区返回当前时间结构体  |


## 函数定义
### Get

#### 详细描述
Get 返回具有给定名称的时区与错误

如果名称为空字符串 "" 或 "UTC"，LoadLocation 返回 UTC 时区

如果名称为 "Local"，LoadLocation 返回本地时区

否则，该名称被视为 IANA 时区数据库中的一个位置名称，如 "America/New_York"

Example:
```
loc, err = timezone.Get("Asia/Shanghai")
```


#### 定义

`Get(name string) (*time.Location, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*time.Location` |   |
| r2 | `error` |   |


### Now

#### 详细描述
Now 根据给定名称的时区返回当前时间结构体

Example:
```
now = timezone.Now("Asia/Shanghai")
```


#### 定义

`Now(name string) time.Time`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |


