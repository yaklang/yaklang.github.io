# spacengine


|成员函数|函数描述/介绍|
|:------|:--------|
 | [spacengine.FofaQuery](#spacenginefofaquery) | 查询 Fofa 中的数据 |
 | [spacengine.HunterQuery](#spacenginehunterquery) | 新增 Hunter 空间引擎接口 |
 | [spacengine.QuakeQuery](#spacenginequakequery) |  |
 | [spacengine.ShodanQuery](#spacengineshodanquery) |  |
 | [spacengine.ZoomeyeQuery](#spacenginezoomeyequery) |  |
 | [spacengine.maxPage](#spacenginemaxpage) | 【参数】最多筛选多少页？ |
 | [spacengine.maxRecord](#spacenginemaxrecord) | 【参数】最多获取多少条数据？但是由于 limit 的限制，这个数据往往比 maxRecord 多，直到补满当前页 |




 



## 函数定义

### spacengine.FofaQuery

查询 Fofa 中的数据

#### 详细描述



#### 定义：

`func spacengine.FofaQuery(email: string, key: string, filter: string, params ...opt) return (resultChan: chan *spacengine.NetSpaceEngineResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| email | `string` |  认证Email |
| key | `string` |   |
| filter | `string` |  想要筛选的条件 |
| params | `...opt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultChan | `chan *spacengine.NetSpaceEngineResult` |   |
| r1 | `error` |   |


 
### spacengine.HunterQuery

新增 Hunter 空间引擎接口

#### 详细描述



#### 定义：

`func spacengine.HunterQuery(username: string, apikey: string, query: string, opts ...yaklib._spaceEngineConfigOpt) return (r0: chan *spacengine.NetSpaceEngineResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| apikey | `string` |   |
| query | `string` |   |
| opts | `...yaklib._spaceEngineConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *spacengine.NetSpaceEngineResult` |   |
| r1 | `error` |   |


 
### spacengine.QuakeQuery



#### 详细描述



#### 定义：

`func spacengine.QuakeQuery(apiKey: string, filter: string, params ...opt) return (resultChan: chan *spacengine.NetSpaceEngineResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| apiKey | `string` |   |
| filter | `string` |   |
| params | `...opt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultChan | `chan *spacengine.NetSpaceEngineResult` |   |
| r1 | `error` |   |


 
### spacengine.ShodanQuery



#### 详细描述



#### 定义：

`func spacengine.ShodanQuery(apiKey: string, filter: string, params ...yaklib._spaceEngineConfigOpt) return (resultChan: chan *spacengine.NetSpaceEngineResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| apiKey | `string` |   |
| filter | `string` |   |
| params | `...yaklib._spaceEngineConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultChan | `chan *spacengine.NetSpaceEngineResult` |   |
| r1 | `error` |   |


 
### spacengine.ZoomeyeQuery



#### 详细描述



#### 定义：

`func spacengine.ZoomeyeQuery(v1: string, v2: string, v3 ...yaklib._spaceEngineConfigOpt) return (r0: chan *spacengine.NetSpaceEngineResult, r1: error)`


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

【参数】最多筛选多少页？

#### 详细描述



#### 定义：

`func spacengine.maxPage(maxPage: int) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxPage | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### spacengine.maxRecord

【参数】最多获取多少条数据？但是由于 limit 的限制，这个数据往往比 maxRecord 多，直到补满当前页

#### 详细描述



#### 定义：

`func spacengine.maxRecord(maxRecord: int) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxRecord | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 


