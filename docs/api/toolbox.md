# toolbox

|函数名|函数描述/介绍|
|:------|:--------|
| [toolbox.Install](#install) ||
| [toolbox.List](#list) ||
| [toolbox.Uninstall](#uninstall) |Uninstall 使用默认管理器卸载二进制文件 |
| [toolbox.context](#context) ||
| [toolbox.force](#force) ||
| [toolbox.progress](#progress) ||
| [toolbox.proxy](#proxy) ||


## 函数定义
### Install

#### 详细描述


#### 定义

`Install(name string, options ...InstallOptionFunc) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| options | `...InstallOptionFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### List

#### 详细描述


#### 定义

`List() ([]*BinaryStatus, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*BinaryStatus` |   |
| r2 | `error` |   |


### Uninstall

#### 详细描述
Uninstall 使用默认管理器卸载二进制文件


#### 定义

`Uninstall(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` |   |


### force

#### 详细描述


#### 定义

`force(force bool) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| force | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` |   |


### progress

#### 详细描述


#### 定义

`progress(progress ProgressCallback) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progress | `ProgressCallback` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxy string) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` |   |


