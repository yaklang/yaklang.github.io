# syntaxflow

|函数名|函数描述/介绍|
|:------|:--------|
| [syntaxflow.ExecRule](#execrule) ||
| [syntaxflow.QuerySyntaxFlowRules](#querysyntaxflowrules) ||
| [syntaxflow.withCache](#withcache) ||
| [syntaxflow.withContext](#withcontext) ||
| [syntaxflow.withExecDebug](#withexecdebug) ||
| [syntaxflow.withExecTaskID](#withexectaskid) ||
| [syntaxflow.withProcess](#withprocess) ||
| [syntaxflow.withSave](#withsave) ||
| [syntaxflow.withSearch](#withsearch) ||


## 函数定义
### ExecRule

#### 详细描述


#### 定义

`ExecRule(r *schema.SyntaxFlowRule, prog *ssaapi.Program, opts ...ssaapi.QueryOption) (*ssaapi.SyntaxFlowResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*schema.SyntaxFlowRule` |   |
| prog | `*ssaapi.Program` |   |
| opts | `...ssaapi.QueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ssaapi.SyntaxFlowResult` |   |
| r2 | `error` |   |


### QuerySyntaxFlowRules

#### 详细描述


#### 定义

`QuerySyntaxFlowRules(name string, opts ...QueryRulesOption) chan *schema.SyntaxFlowRule`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...QueryRulesOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.SyntaxFlowRule` |   |


### withCache

#### 详细描述


#### 定义

`withCache(b ...bool) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withContext

#### 详细描述


#### 定义

`withContext(ctx context.Context) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withExecDebug

#### 详细描述


#### 定义

`withExecDebug(b ...bool) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withExecTaskID

#### 详细描述


#### 定义

`withExecTaskID(taskID string) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskID | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withProcess

#### 详细描述


#### 定义

`withProcess(cb func(float64, string)) QueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(float64, string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `QueryOption` |   |


### withSave

#### 详细描述


#### 定义

`withSave() ssaapi.QueryOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaapi.QueryOption` |   |


### withSearch

#### 详细描述


#### 定义

`withSearch() ssaapi.QueryOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaapi.QueryOption` |   |


