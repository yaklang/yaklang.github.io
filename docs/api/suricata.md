# suricata


|成员函数|函数描述/介绍|
|:------|:--------|
 | [suricata.LoadSuricataToDatabase](#suricataloadsuricatatodatabase) |  |
 | [suricata.ParseSuricata](#suricataparsesuricata) |  |
 | [suricata.SuricataMatcher](#suricatasuricatamatcher) |  |
 | [suricata.TrafficGenerator](#suricatatrafficgenerator) |  |
 | [suricata.YieldRules](#suricatayieldrules) |  |
 | [suricata.YieldRulesByKeyword](#suricatayieldrulesbykeyword) |  |




 



## 函数定义

### suricata.LoadSuricataToDatabase



#### 详细描述



#### 定义：

`func suricata.LoadSuricataToDatabase(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### suricata.ParseSuricata



#### 详细描述



#### 定义：

`func suricata.ParseSuricata(v1: string, v2 ...string) return (r0: []*rule.Rule, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*rule.Rule` |   |
| r1 | `error` |   |


 
### suricata.SuricataMatcher



#### 详细描述



#### 定义：

`func suricata.SuricataMatcher(v1: *rule.Rule) return (r0: *match.Matcher)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*rule.Rule` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*match.Matcher` |   |


 
### suricata.TrafficGenerator



#### 详细描述



#### 定义：

`func suricata.TrafficGenerator() return (r0: *chaosmaker.ChaosMaker)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*chaosmaker.ChaosMaker` |   |


 
### suricata.YieldRules



#### 详细描述



#### 定义：

`func suricata.YieldRules() return (r0: chan *rule.Storage)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *rule.Storage` |   |


 
### suricata.YieldRulesByKeyword



#### 详细描述



#### 定义：

`func suricata.YieldRulesByKeyword(v1: string, v2 ...string) return (r0: chan *rule.Storage)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *rule.Storage` |   |


 


