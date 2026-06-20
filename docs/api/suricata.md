# suricata

|函数名|函数描述/介绍|
|:------|:--------|
| [suricata.DeleteSuricataRuleByID](#deletesuricatarulebyid) |DeleteSuricataRuleByID 根据规则 ID 从本地规则数据库中删除一条 Suricata 规则 在 yak 中通过 suricata.DeleteSuricataRuleByID 调用 参数: - id: 规则在数据库中的 ID 返回值: - 错误信息，删除失败时非 nil|
| [suricata.LoadSuricataToDatabase](#loadsuricatatodatabase) |LoadSuricataToDatabase 解析 Suricata 规则文本并将其保存到本地规则数据库 在 yak 中通过 suricata.LoadSuricataToDatabase 调用 参数: - raw: Suricata 规则文本，可包含多条规则 返回值: - 错误信息，解析失败时非 ...|
| [suricata.NewSuricataMatcher](#newsuricatamatcher) |NewSuricataMatcher 基于单条 Suricata 规则创建一个流量匹配器，用于判断数据包是否命中该规则 在 yak 中通过 suricata.NewSuricataMatcher 调用 参数: - r: 单条 Suricata 规则对象(通常来自 suricata.ParseSuri...|
| [suricata.NewSuricataMatcherGroup](#newsuricatamatchergroup) |NewSuricataMatcherGroup 创建一个 Suricata 规则匹配器组，可批量加载规则并对数据包进行匹配 在 yak 中通过 suricata.NewSuricataMatcherGroup 调用 参数: - opt: 可选配置项，如 suricata.groupCallback ...|
| [suricata.ParseSuricata](#parsesuricata) |ParseSuricata 解析 Suricata 规则文本，返回结构化的规则对象列表 在 yak 中通过 suricata.ParseSuricata 调用 参数: - raw: Suricata 规则文本，可包含一条或多条规则 - envs: 可选的环境变量定义，格式为 &#34;NAME=value&#34;...|
| [suricata.TrafficGenerator](#trafficgenerator) |NewChaosMaker 创建一个流量生成器(ChaosMaker)，可根据 Suricata 规则生成对应的模拟攻击流量 在 yak 中通过 suricata.TrafficGenerator 调用 返回值: - 流量生成器对象|
| [suricata.YieldRules](#yieldrules) |YieldRules 从本地规则库中读取全部规则，以 channel 形式逐条返回 在 yak 中通过 suricata.YieldRules 调用，依赖本地规则数据库 返回值: - 一个只读 channel，逐条产出规则存储对象|
| [suricata.YieldRulesByKeyword](#yieldrulesbykeyword) |YieldRulesByKeyword 按关键词(以及可选协议)从本地规则库中检索匹配的规则，以 channel 形式返回 在 yak 中通过 suricata.YieldRulesByKeyword 调用，依赖本地规则数据库 参数: - keywords: 检索关键词，多个关键词可用逗号分隔 - ...|
| [suricata.YieldSuricataRulesByKeywords](#yieldsuricatarulesbykeywords) |YieldSuricataRulesByKeywords 按关键词检索类型为 suricata 的规则，以 channel 形式返回 在 yak 中通过 suricata.YieldSuricataRulesByKeywords 调用，依赖本地规则数据库 参数: - keywords: 检索关键词，...|
| [suricata.groupCallback](#groupcallback) |groupCallback 设置规则匹配器组在命中规则时触发的回调函数 在 yak 中通过 suricata.groupCallback 调用 参数: - cb: 命中回调，接收命中的数据包与对应规则 返回值: - 一个 suricata.NewSuricataMatcherGroup 可接收的配置...|


## 函数定义
### DeleteSuricataRuleByID

#### 详细描述
DeleteSuricataRuleByID 根据规则 ID 从本地规则数据库中删除一条 Suricata 规则

在 yak 中通过 suricata.DeleteSuricataRuleByID 调用

参数:

  - id: 规则在数据库中的 ID



返回值:

  - 错误信息，删除失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：按 ID 删除规则
err = suricata.DeleteSuricataRuleByID(1)
``````````````


#### 定义

`DeleteSuricataRuleByID(id int64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | 规则在数据库中的 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，删除失败时非 nil |


### LoadSuricataToDatabase

#### 详细描述
LoadSuricataToDatabase 解析 Suricata 规则文本并将其保存到本地规则数据库

在 yak 中通过 suricata.LoadSuricataToDatabase 调用

参数:

  - raw: Suricata 规则文本，可包含多条规则



返回值:

  - 错误信息，解析失败时非 nil(单条保存失败仅记录告警)




Example:

``````````````yak
// 该示例为示意性用法：导入规则到本地库
err = suricata.LoadSuricataToDatabase(`alert tcp any any -> any any (msg:"x"; content:"a"; sid:1;)`)
``````````````


#### 定义

`LoadSuricataToDatabase(raw string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | Suricata 规则文本，可包含多条规则 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，解析失败时非 nil(单条保存失败仅记录告警) |


### NewSuricataMatcher

#### 详细描述
NewSuricataMatcher 基于单条 Suricata 规则创建一个流量匹配器，用于判断数据包是否命中该规则

在 yak 中通过 suricata.NewSuricataMatcher 调用

参数:

  - r: 单条 Suricata 规则对象(通常来自 suricata.ParseSuricata)



返回值:

  - 流量匹配器对象




Example:

``````````````yak
// 该示例为示意性用法：用单条规则创建匹配器
rules = suricata.ParseSuricata(`alert tcp any any -> any any (msg:"x"; content:"a"; sid:1;)`)~
matcher = suricata.NewSuricataMatcher(rules[0])
println(matcher != nil)
``````````````


#### 定义

`NewSuricataMatcher(r *surirule.Rule) *match.Matcher`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*surirule.Rule` | 单条 Suricata 规则对象(通常来自 suricata.ParseSuricata) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*match.Matcher` | 流量匹配器对象 |


### NewSuricataMatcherGroup

#### 详细描述
NewSuricataMatcherGroup 创建一个 Suricata 规则匹配器组，可批量加载规则并对数据包进行匹配

在 yak 中通过 suricata.NewSuricataMatcherGroup 调用

参数:

  - opt: 可选配置项，如 suricata.groupCallback 设置命中回调



返回值:

  - 规则匹配器组对象




Example:

``````````````yak
// 该示例为示意性用法：创建匹配器组并设置命中回调

	group = suricata.NewSuricataMatcherGroup(suricata.groupCallback(func(packet, matchedRule) {
	    println("matched:", matchedRule.Message)
	}))

println(group != nil)
``````````````


#### 定义

`NewSuricataMatcherGroup(opt ...match.GroupOption) *match.Group`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opt | `...match.GroupOption` | 可选配置项，如 suricata.groupCallback 设置命中回调 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*match.Group` | 规则匹配器组对象 |


### ParseSuricata

#### 详细描述
ParseSuricata 解析 Suricata 规则文本，返回结构化的规则对象列表

在 yak 中通过 suricata.ParseSuricata 调用

参数:

  - raw: Suricata 规则文本，可包含一条或多条规则

  - envs: 可选的环境变量定义，格式为 &#34;NAME=value&#34;，用于替换规则中的 $NAME 占位符



返回值:

  - 解析得到的规则对象列表

  - 错误信息，解析失败时非 nil




Example:

``````````````yak
rule = `alert tcp any any -> any any (msg:"test rule"; content:"hello"; sid:1000001;)`
rules, err = suricata.ParseSuricata(rule)
assert err == nil, "should parse suricata rule"
println(len(rules))   // OUT: 1
assert rules[0].Message == "test rule", "rule message should be parsed"
``````````````


#### 定义

`ParseSuricata(raw string, envs ...string) ([]*surirule.Rule, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | Suricata 规则文本，可包含一条或多条规则 |
| envs | `...string` | 可选的环境变量定义，格式为 &#34;NAME=value&#34;，用于替换规则中的 $NAME 占位符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*surirule.Rule` | 解析得到的规则对象列表 |
| r2 | `error` | 错误信息，解析失败时非 nil |


### TrafficGenerator

#### 详细描述
NewChaosMaker 创建一个流量生成器(ChaosMaker)，可根据 Suricata 规则生成对应的模拟攻击流量

在 yak 中通过 suricata.TrafficGenerator 调用

返回值:

  - 流量生成器对象




Example:

``````````````yak
// 该示例为示意性用法：创建流量生成器
maker = suricata.TrafficGenerator()
println(maker != nil)
``````````````


#### 定义

`TrafficGenerator() *ChaosMaker`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ChaosMaker` | 流量生成器对象 |


### YieldRules

#### 详细描述
YieldRules 从本地规则库中读取全部规则，以 channel 形式逐条返回

在 yak 中通过 suricata.YieldRules 调用，依赖本地规则数据库

返回值:

  - 一个只读 channel，逐条产出规则存储对象




Example:

``````````````yak
// 该示例为示意性用法：遍历本地规则库

	for rule = range suricata.YieldRules() {
	    println(rule.Name)
	}
``````````````


#### 定义

`YieldRules() chan *rule.Storage`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *rule.Storage` | 一个只读 channel，逐条产出规则存储对象 |


### YieldRulesByKeyword

#### 详细描述
YieldRulesByKeyword 按关键词(以及可选协议)从本地规则库中检索匹配的规则，以 channel 形式返回

在 yak 中通过 suricata.YieldRulesByKeyword 调用，依赖本地规则数据库

参数:

  - keywords: 检索关键词，多个关键词可用逗号分隔

  - protos: 可选的协议过滤，如 &#34;tcp&#34;、&#34;http&#34;



返回值:

  - 一个只读 channel，逐条产出匹配的规则存储对象




Example:

``````````````yak
// 该示例为示意性用法：按关键词检索规则

	for rule = range suricata.YieldRulesByKeyword("redis", "tcp") {
	    println(rule.Name)
	}
``````````````


#### 定义

`YieldRulesByKeyword(keywords string, protos ...string) chan *rule.Storage`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `string` | 检索关键词，多个关键词可用逗号分隔 |
| protos | `...string` | 可选的协议过滤，如 &#34;tcp&#34;、&#34;http&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *rule.Storage` | 一个只读 channel，逐条产出匹配的规则存储对象 |


### YieldSuricataRulesByKeywords

#### 详细描述
YieldSuricataRulesByKeywords 按关键词检索类型为 suricata 的规则，以 channel 形式返回

在 yak 中通过 suricata.YieldSuricataRulesByKeywords 调用，依赖本地规则数据库

参数:

  - keywords: 检索关键词，多个关键词可用逗号分隔

  - protos: 可选的协议过滤，如 &#34;tcp&#34;、&#34;http&#34;



返回值:

  - 一个只读 channel，逐条产出匹配的 suricata 规则存储对象




Example:

``````````````yak
// 该示例为示意性用法：检索 suricata 规则

	for rule = range suricata.YieldSuricataRulesByKeywords("trojan") {
	    println(rule.Name)
	}
``````````````


#### 定义

`YieldSuricataRulesByKeywords(keywords string, protos ...string) chan *rule.Storage`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `string` | 检索关键词，多个关键词可用逗号分隔 |
| protos | `...string` | 可选的协议过滤，如 &#34;tcp&#34;、&#34;http&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *rule.Storage` | 一个只读 channel，逐条产出匹配的 suricata 规则存储对象 |


### groupCallback

#### 详细描述
groupCallback 设置规则匹配器组在命中规则时触发的回调函数

在 yak 中通过 suricata.groupCallback 调用

参数:

  - cb: 命中回调，接收命中的数据包与对应规则



返回值:

  - 一个 suricata.NewSuricataMatcherGroup 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置命中回调

	group = suricata.NewSuricataMatcherGroup(suricata.groupCallback(func(packet, matchedRule) {
	    println("matched:", matchedRule.Message)
	}))
``````````````


#### 定义

`groupCallback(cb func(packet gopacket.Packet, match *surirule.Rule)) match.GroupOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(packet gopacket.Packet, match *surirule.Rule)` | 命中回调，接收命中的数据包与对应规则 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `match.GroupOption` | 一个 suricata.NewSuricataMatcherGroup 可接收的配置选项 |


