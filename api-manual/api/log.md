# log

|函数名|函数描述/介绍|
|:------|:--------|
| [log.Debug](#debug) |Debugf will print when logger&amp;#39;s Level is debug. |
| [log.Error](#error) |Errorf will print only when logger&amp;#39;s Level is error, warn, info or debug. |
| [log.Info](#info) |Infof will print when logger&amp;#39;s Level is info or debug. |
| [log.SetLevel](#setlevel) |loglevel 根据传入的字符串设置日志级别  disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试  |
| [log.Warn](#warn) ||
| [log.debug](#debug) |Debugf will print when logger&amp;#39;s Level is debug. |
| [log.error](#error) |Errorf will print only when logger&amp;#39;s Level is error, warn, info or debug. |
| [log.info](#info) |Infof will print when logger&amp;#39;s Level is info or debug. |
| [log.setLevel](#setlevel) |loglevel 根据传入的字符串设置日志级别  disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试  |
| [log.warn](#warn) ||


## 函数定义
### Debug

#### 详细描述
Debugf will print when logger&#39;s Level is debug.


#### 定义

`Debug(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### Error

#### 详细描述
Errorf will print only when logger&#39;s Level is error, warn, info or debug.


#### 定义

`Error(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### Info

#### 详细描述
Infof will print when logger&#39;s Level is info or debug.


#### 定义

`Info(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### SetLevel

#### 详细描述
loglevel 根据传入的字符串设置日志级别

disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试

Example:
```
loglevel("fatal")
```


#### 定义

`SetLevel(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### Warn

#### 详细描述


#### 定义

`Warn(raw string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |
| args | `...any` |   |


### debug

#### 详细描述
Debugf will print when logger&#39;s Level is debug.


#### 定义

`debug(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### error

#### 详细描述
Errorf will print only when logger&#39;s Level is error, warn, info or debug.


#### 定义

`error(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### info

#### 详细描述
Infof will print when logger&#39;s Level is info or debug.


#### 定义

`info(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### setLevel

#### 详细描述
loglevel 根据传入的字符串设置日志级别

disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试

Example:
```
loglevel("fatal")
```


#### 定义

`setLevel(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### warn

#### 详细描述


#### 定义

`warn(raw string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |
| args | `...any` |   |


