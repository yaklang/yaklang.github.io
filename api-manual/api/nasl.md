# nasl


|成员函数|函数描述/介绍|
|:------|:--------|
 | [nasl.QueryAllScripts](#naslqueryallscripts) |  |
 | [nasl.RemoveDatabase](#naslremovedatabase) |  |
 | [nasl.Scan](#naslscan) |  |
 | [nasl.ScanTarget](#naslscantarget) |  |
 | [nasl.UpdateDatabase](#naslupdatedatabase) |  |
 | [nasl.conditions](#naslconditions) |  |
 | [nasl.family](#naslfamily) |  |
 | [nasl.plugin](#naslplugin) |  |
 | [nasl.preference](#naslpreference) |  |
 | [nasl.proxy](#naslproxy) |  |
 | [nasl.riskHandle](#naslriskhandle) |  |




 



## 函数定义

### nasl.QueryAllScripts



#### 详细描述



#### 定义：

`func nasl.QueryAllScripts(v1 ...any) return (r0: []*antlr4nasl.NaslScriptInfo)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*antlr4nasl.NaslScriptInfo` |   |


 
### nasl.RemoveDatabase



#### 详细描述



#### 定义：

`func nasl.RemoveDatabase() return (r0: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### nasl.Scan



#### 详细描述



#### 定义：

`func nasl.Scan(v1: string, v2: string, v3 ...antlr4nasl.NaslScriptConfigOptFunc) return (r0: map[string]any, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...antlr4nasl.NaslScriptConfigOptFunc` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]any` |   |
| r1 | `error` |   |


 
### nasl.ScanTarget



#### 详细描述



#### 定义：

`func nasl.ScanTarget(v1: string, v2 ...antlr4nasl.NaslScriptConfigOptFunc) return (r0: map[string]any, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...antlr4nasl.NaslScriptConfigOptFunc` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]any` |   |
| r1 | `error` |   |


 
### nasl.UpdateDatabase



#### 详细描述



#### 定义：

``func nasl.UpdateDatabase(v1: string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |




 

 
### nasl.conditions



#### 详细描述



#### 定义：

`func nasl.conditions(v1 ...any) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ` |   |


 
### nasl.family



#### 详细描述



#### 定义：

`func nasl.family(v1: string) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ` |   |


 
### nasl.plugin



#### 详细描述



#### 定义：

`func nasl.plugin(v1 ...string) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ` |   |


 
### nasl.preference



#### 详细描述



#### 定义：

`func nasl.preference(v1: any) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ` |   |


 
### nasl.proxy



#### 详细描述



#### 定义：

`func nasl.proxy(v1 ...string) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ` |   |


 
### nasl.riskHandle



#### 详细描述



#### 定义：

`func nasl.riskHandle(v1: func (v1: any) ) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: any) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ` |   |


 


