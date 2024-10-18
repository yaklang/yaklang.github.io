# syntaxflow

|函数名|函数描述/介绍|
|:------|:--------|
| [syntaxflow.ExecRule](#execrule) ||
| [syntaxflow.QuerySyntaxFlowRules](#querysyntaxflowrules) ||
| [syntaxflow.withExecDebug](#withexecdebug) ||
| [syntaxflow.withExecTaskID](#withexectaskid) ||


## 函数定义
### ExecRule

#### 详细描述


#### 定义

`ExecRule(r *schema.SyntaxFlowRule, prog *ssaapi.Program, opts ...ExecRuleOption) (*ssaapi.SyntaxFlowResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*schema.SyntaxFlowRule` |   |
| prog | `*ssaapi.Program` |   |
| opts | `...ExecRuleOption` |   |

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


### withExecDebug

#### 详细描述


#### 定义

`withExecDebug(debug ...bool) ExecRuleOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| debug | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ExecRuleOption` |   |


### withExecTaskID

#### 详细描述


#### 定义

`withExecTaskID(taskID string) ExecRuleOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskID | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ExecRuleOption` |   |


