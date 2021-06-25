# spacengine


|成员函数|函数描述/介绍|
|:------|:--------|
 | [spacengine.FofaQuery](#spacenginefofaquery) |  |
 | [spacengine.QuakeQuery](#spacenginequakequery) |  |
 | [spacengine.ShodanQuery](#spacengineshodanquery) |  |
 | [spacengine.maxPage](#spacenginemaxpage) |  |
 | [spacengine.maxRecord](#spacenginemaxrecord) |  |




 



## 函数定义

### spacengine.FofaQuery



#### 详细描述



#### 定义：

`func spacengine.FofaQuery(v1: string, v2: string, v3: string, v4 ...yaklib._spaceEngineConfigOpt) return (r0: chan *spacengine.NetSpaceEngineResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |
| v4 | `...yaklib._spaceEngineConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *spacengine.NetSpaceEngineResult` |   |
| r1 | `error` |   |


 
### spacengine.QuakeQuery



#### 详细描述



#### 定义：

`func spacengine.QuakeQuery(v1: string, v2: string, v3 ...yaklib._spaceEngineConfigOpt) return (r0: chan *spacengine.NetSpaceEngineResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yaklib._spaceEngineConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *spacengine.NetSpaceEngineResult` |   |
| r1 | `error` |   |


 
### spacengine.ShodanQuery



#### 详细描述



#### 定义：

`func spacengine.ShodanQuery(v1: string, v2: string, v3 ...yaklib._spaceEngineConfigOpt) return (r0: chan *spacengine.NetSpaceEngineResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yaklib._spaceEngineConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *spacengine.NetSpaceEngineResult` |   |
| r1 | `error` |   |


 
### spacengine.maxPage



#### 详细描述



#### 定义：

`func spacengine.maxPage(v1: int) return (r0: func _spaceEngineConfigOpt(v1: *yaklib._spaceEngineConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _spaceEngineConfigOpt(v1: *yaklib._spaceEngineConfig) ` |   |


 
### spacengine.maxRecord



#### 详细描述



#### 定义：

`func spacengine.maxRecord(v1: int) return (r0: func _spaceEngineConfigOpt(v1: *yaklib._spaceEngineConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _spaceEngineConfigOpt(v1: *yaklib._spaceEngineConfig) ` |   |


 


