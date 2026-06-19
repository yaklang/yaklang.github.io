# log

|函数名|函数描述/介绍|
|:------|:--------|
| [log.Debug](#debug) |Debug 以 debug(调试)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|
| [log.Error](#error) |Error 以 error(错误)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|
| [log.Info](#info) |Info 以 info(信息)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|
| [log.SetLevel](#setlevel) |setLevel 根据传入的字符串设置日志级别 disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试 参数: - i: 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;...|
| [log.Warn](#warn) |Warn 以 warning(警告)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|
| [log.debug](#debug) |Debug 以 debug(调试)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|
| [log.error](#error) |Error 以 error(错误)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|
| [log.info](#info) |Info 以 info(信息)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|
| [log.setLevel](#setlevel) |setLevel 根据传入的字符串设置日志级别 disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试 参数: - i: 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;...|
| [log.warn](#warn) |Warn 以 warning(警告)级别格式化输出一条日志，日志内容应使用英文 参数: - format: 格式化字符串 - args: 与格式化字符串对应的参数|


## 函数定义
### Debug

#### 详细描述
Debug 以 debug(调试)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 debug 日志(仅副作用，无返回值)
log.Debug("current value is %v", 123)
``````````````


#### 定义

`Debug(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


### Error

#### 详细描述
Error 以 error(错误)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 error 日志(仅副作用，无返回值)
log.Error("failed to connect: %s", "timeout")
``````````````


#### 定义

`Error(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


### Info

#### 详细描述
Info 以 info(信息)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 info 日志(仅副作用，无返回值)
log.Info("server started on port %d", 8080)
``````````````


#### 定义

`Info(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


### SetLevel

#### 详细描述
setLevel 根据传入的字符串设置日志级别

disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试

参数:

  - i: 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;fatal&#34;、&#34;disable&#34;




Example:

``````````````yak
// 把全局日志级别设置为 fatal(仅副作用，无返回值)
log.setLevel("fatal")
``````````````


#### 定义

`SetLevel(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;fatal&#34;、&#34;disable&#34; |


### Warn

#### 详细描述
Warn 以 warning(警告)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 warning 日志(仅副作用，无返回值)
log.Warn("disk usage is high: %d%%", 90)
``````````````


#### 定义

`Warn(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


### debug

#### 详细描述
Debug 以 debug(调试)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 debug 日志(仅副作用，无返回值)
log.Debug("current value is %v", 123)
``````````````


#### 定义

`debug(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


### error

#### 详细描述
Error 以 error(错误)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 error 日志(仅副作用，无返回值)
log.Error("failed to connect: %s", "timeout")
``````````````


#### 定义

`error(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


### info

#### 详细描述
Info 以 info(信息)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 info 日志(仅副作用，无返回值)
log.Info("server started on port %d", 8080)
``````````````


#### 定义

`info(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


### setLevel

#### 详细描述
setLevel 根据传入的字符串设置日志级别

disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试

参数:

  - i: 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;fatal&#34;、&#34;disable&#34;




Example:

``````````````yak
// 把全局日志级别设置为 fatal(仅副作用，无返回值)
log.setLevel("fatal")
``````````````


#### 定义

`setLevel(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;fatal&#34;、&#34;disable&#34; |


### warn

#### 详细描述
Warn 以 warning(警告)级别格式化输出一条日志，日志内容应使用英文

参数:

  - format: 格式化字符串

  - args: 与格式化字符串对应的参数




Example:

``````````````yak
// 输出一条 warning 日志(仅副作用，无返回值)
log.Warn("disk usage is high: %d%%", 90)
``````````````


#### 定义

`warn(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` | 格式化字符串 |
| args | `...any` | 与格式化字符串对应的参数 |


