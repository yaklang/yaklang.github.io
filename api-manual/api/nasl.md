# nasl

|函数名|函数描述/介绍|
|:------|:--------|
| [nasl.QueryAllScripts](#queryallscripts) ||
| [nasl.RemoveDatabase](#removedatabase) ||
| [nasl.Scan](#scan) ||
| [nasl.ScanTarget](#scantarget) ||
| [nasl.UpdateDatabase](#updatedatabase) ||
| [nasl.conditions](#conditions) ||
| [nasl.family](#family) ||
| [nasl.plugin](#plugin) ||
| [nasl.proxy](#proxy) ||
| [nasl.riskHandle](#riskhandle) ||
| [nasl.sourcePaths](#sourcepaths) ||


## 函数定义
### QueryAllScripts

#### 详细描述


#### 定义

`QueryAllScripts(script ...any) []*script_core.NaslScriptInfo`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| script | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*script_core.NaslScriptInfo` |   |


### RemoveDatabase

#### 详细描述


#### 定义

`RemoveDatabase() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Scan

#### 详细描述


#### 定义

`Scan(hosts string, ports string, opts ...NaslScriptConfigOptFunc) chan *NaslKBs`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |   |
| ports | `string` |   |
| opts | `...NaslScriptConfigOptFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *NaslKBs` |   |


### ScanTarget

#### 详细描述


#### 定义

`ScanTarget(target string, opts ...script_core.NaslScriptConfigOptFunc) (chan *script_core.NaslKBs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...script_core.NaslScriptConfigOptFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *script_core.NaslKBs` |   |
| r2 | `error` |   |


### UpdateDatabase

#### 详细描述


#### 定义

`UpdateDatabase(p string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |


### conditions

#### 详细描述


#### 定义

`conditions(script ...any) NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| script | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `NaslScriptConfigOptFunc` |   |


### family

#### 详细描述


#### 定义

`family(family string) NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| family | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `NaslScriptConfigOptFunc` |   |


### plugin

#### 详细描述


#### 定义

`plugin(plugins ...string) NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| plugins | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `NaslScriptConfigOptFunc` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxies ...string) NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `NaslScriptConfigOptFunc` |   |


### riskHandle

#### 详细描述


#### 定义

`riskHandle(f func(any)) NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(any)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `NaslScriptConfigOptFunc` |   |


### sourcePaths

#### 详细描述


#### 定义

`sourcePaths(sourcePath ...string) NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourcePath | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `NaslScriptConfigOptFunc` |   |


