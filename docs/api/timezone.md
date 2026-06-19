# timezone

|函数名|函数描述/介绍|
|:------|:--------|
| [timezone.Get](#get) |Get 返回具有给定名称的时区与错误 如果名称为空字符串 &#34;&#34; 或 &#34;UTC&#34;，LoadLocation 返回 UTC 时区 如果名称为 &#34;Local&#34;，LoadLocation 返回本地时区 否则，该名称被视为 IANA 时区数据库中的一个位置名称，如 &#34;America/New_York&#34; 参数:...|
| [timezone.Now](#now) |Now 根据给定名称的时区返回当前时间结构体 参数: - name: 时区名称，如 &#34;UTC&#34;、&#34;Asia/Shanghai&#34;；名称无效时回退到本地时间 返回值: - 该时区下的当前时间|


## 函数定义
### Get

#### 详细描述
Get 返回具有给定名称的时区与错误

如果名称为空字符串 &#34;&#34; 或 &#34;UTC&#34;，LoadLocation 返回 UTC 时区

如果名称为 &#34;Local&#34;，LoadLocation 返回本地时区

否则，该名称被视为 IANA 时区数据库中的一个位置名称，如 &#34;America/New_York&#34;

参数:

  - name: 时区名称，如 &#34;UTC&#34;、&#34;Local&#34;、&#34;Asia/Shanghai&#34;



返回值:

  - 解析得到的时区对象

  - 名称无效时返回的错误




Example:

``````````````yak
// VARS: 加载上海时区
loc = timezone.Get("Asia/Shanghai")~
// STDOUT: 打印时区名称
println(loc.String())   // OUT: Asia/Shanghai
// assert: 锁定结论
assert loc.String() == "Asia/Shanghai", "Get should load the named location"
``````````````


#### 定义

`Get(name string) (*time.Location, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 时区名称，如 &#34;UTC&#34;、&#34;Local&#34;、&#34;Asia/Shanghai&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*time.Location` | 解析得到的时区对象 |
| r2 | `error` | 名称无效时返回的错误 |


### Now

#### 详细描述
Now 根据给定名称的时区返回当前时间结构体

参数:

  - name: 时区名称，如 &#34;UTC&#34;、&#34;Asia/Shanghai&#34;；名称无效时回退到本地时间



返回值:

  - 该时区下的当前时间




Example:

``````````````yak
// 获取上海时区下的当前时间(结果随运行时刻变化，仅作示意)
now = timezone.Now("Asia/Shanghai")
println(now.String())
``````````````


#### 定义

`Now(name string) time.Time`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 时区名称，如 &#34;UTC&#34;、&#34;Asia/Shanghai&#34;；名称无效时回退到本地时间 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` | 该时区下的当前时间 |


