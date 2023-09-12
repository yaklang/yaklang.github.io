# log

|成员函数|函数描述/介绍|
|:------|:--------|
| [log.debug](#debug) |Debugf will print when logger's Level is debug.|
| [log.error](#error) |Errorf will print only when logger's Level is error, warn, info or debug.|
| [log.info](#info) |Infof will print when logger's Level is info or debug.|
| [log.setLevel](#setLevel) ||
| [log.warn](#warn) ||


## 函数定义
### log.debug

#### 详细描述
Debugf will print when logger's Level is debug.

#### 定义

`debug(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### log.error

#### 详细描述
Errorf will print only when logger's Level is error, warn, info or debug.

#### 定义

`error(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### log.info

#### 详细描述
Infof will print when logger's Level is info or debug.

#### 定义

`info(format string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| format | `string` |   |
| args | `...any` |   |


### log.setLevel

#### 详细描述


#### 定义

`setLevel(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### log.warn

#### 详细描述


#### 定义

`warn(raw string, args ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |
| args | `...any` |   |


