# suricata

|函数名|函数描述/介绍|
|:------|:--------|
| [suricata.LoadSuricataToDatabase](#loadsuricatatodatabase) ||
| [suricata.NewSuricataMatcher](#newsuricatamatcher) ||
| [suricata.NewSuricataMatcherGroup](#newsuricatamatchergroup) ||
| [suricata.ParseSuricata](#parsesuricata) ||
| [suricata.TrafficGenerator](#trafficgenerator) ||
| [suricata.YieldRules](#yieldrules) ||
| [suricata.YieldRulesByKeyword](#yieldrulesbykeyword) ||
| [suricata.YieldSuricataRulesByKeywords](#yieldsuricatarulesbykeywords) ||
| [suricata.groupCallback](#groupcallback) ||


## 函数定义
### LoadSuricataToDatabase

#### 详细描述


#### 定义

`LoadSuricataToDatabase(raw string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### NewSuricataMatcher

#### 详细描述


#### 定义

`NewSuricataMatcher(r *rule.Rule) *Matcher`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*rule.Rule` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Matcher` |   |


### NewSuricataMatcherGroup

#### 详细描述


#### 定义

`NewSuricataMatcherGroup(opt ...GroupOption) *Group`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opt | `...GroupOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Group` |   |


### ParseSuricata

#### 详细描述


#### 定义

`ParseSuricata(data string, envs ...string) ([]*Rule, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |
| envs | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*Rule` |   |
| r2 | `error` |   |


### TrafficGenerator

#### 详细描述


#### 定义

`TrafficGenerator() *ChaosMaker`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ChaosMaker` |   |


### YieldRules

#### 详细描述


#### 定义

`YieldRules() chan *rule.Storage`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *rule.Storage` |   |


### YieldRulesByKeyword

#### 详细描述


#### 定义

`YieldRulesByKeyword(keywords string, protos ...string) chan *rule.Storage`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `string` |   |
| protos | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *rule.Storage` |   |


### YieldSuricataRulesByKeywords

#### 详细描述


#### 定义

`YieldSuricataRulesByKeywords(keywords string, protos ...string) chan *rule.Storage`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `string` |   |
| protos | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *rule.Storage` |   |


### groupCallback

#### 详细描述


#### 定义

`groupCallback(cb func(packet gopacket.Packet, match *rule.Rule)) GroupOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(packet gopacket.Packet, match *rule.Rule)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GroupOption` |   |


