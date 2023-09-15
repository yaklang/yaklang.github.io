# sca

|成员函数|函数描述/介绍|
|:------|:--------|
| [sca.ScanContainerFromContext](#ScanContainerFromContext) ||
| [sca.ScanFilesystem](#ScanFilesystem) ||
| [sca.ScanImageFromContext](#ScanImageFromContext) ||
| [sca.ScanImageFromFile](#ScanImageFromFile) ||
| [sca.analyzers](#analyzers) ||
| [sca.concurrent](#concurrent) ||
| [sca.endpoint](#endpoint) ||
| [sca.scanMode](#scanMode) ||


## 函数定义
### ScanContainerFromContext

#### 详细描述


#### 定义

`ScanContainerFromContext(containerID string, opts ...ScanOption) (pkgs []*dxtypes.Package, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| containerID | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| pkgs | `[]*dxtypes.Package` |   |
| err | `error` |   |


### ScanFilesystem

#### 详细描述


#### 定义

`ScanFilesystem(p string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### ScanImageFromContext

#### 详细描述


#### 定义

`ScanImageFromContext(imageID string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| imageID | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### ScanImageFromFile

#### 详细描述


#### 定义

`ScanImageFromFile(path string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### analyzers

#### 详细描述


#### 定义

`analyzers(a ...analyzer.TypAnalyzer) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `...analyzer.TypAnalyzer` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(n int) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


### endpoint

#### 详细描述


#### 定义

`endpoint(endpoint string) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| endpoint | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


### scanMode

#### 详细描述


#### 定义

`scanMode(mode analyzer.ScanMode) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `analyzer.ScanMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


