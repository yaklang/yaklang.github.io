# suricata {#library-suricata}

`suricata` 库提供 Suricata 规则的解析、匹配与流量生成能力，可加载 IDS 规则对数据包做匹配，或据规则生成"混沌流量"用于检测设备验证，常用于流量检测与 IDS/IPS 规则研究。

典型使用场景：

- 规则解析与匹配：`suricata.ParseSuricata(raw)` 解析规则，`suricata.NewSuricataMatcher` / `suricata.NewSuricataMatcherGroup` 创建匹配器对数据包匹配。
- 规则库：`suricata.LoadSuricataToDatabase` 入库，`suricata.YieldRules` / `suricata.YieldRulesByKeyword` 检索规则。
- 流量生成：`suricata.TrafficGenerator()` 创建 ChaosMaker，据规则生成符合特征的流量（用于验证检测能力）。

与相邻库的关系：`suricata` 与 `pcapx`（抓包/造包）配合做流量层匹配与生成，是流量侧检测与红蓝对抗的工具。

> 共 10 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [suricata.DeleteSuricataRuleByID](#deletesuricatarulebyid) | `id int64` | `error` | 根据规则 ID 从本地规则数据库中删除一条 Suricata 规则 |
| [suricata.LoadSuricataToDatabase](#loadsuricatatodatabase) | `raw string` | `error` | 解析 Suricata 规则文本并将其保存到本地规则数据库 |
| [suricata.NewSuricataMatcher](#newsuricatamatcher) | `r *surirule.Rule` | `*match.Matcher` | 基于单条 Suricata 规则创建一个流量匹配器，用于判断数据包是否命中该规则 |
| [suricata.TrafficGenerator](#trafficgenerator) | - | `*ChaosMaker` | NewChaosMaker 创建一个流量生成器(ChaosMaker)，可根据 Suricata 规则生成对应的模拟攻击流量 |
| [suricata.YieldRules](#yieldrules) | - | `chan *rule.Storage` | 从本地规则库中读取全部规则，以 channel 形式逐条返回 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [suricata.NewSuricataMatcherGroup](#newsuricatamatchergroup) | `opt ...match.GroupOption` | `*match.Group` | 创建一个 Suricata 规则匹配器组，可批量加载规则并对数据包进行匹配 |
| [suricata.ParseSuricata](#parsesuricata) | `raw string, envs ...string` | `[]*surirule.Rule, error` | 解析 Suricata 规则文本，返回结构化的规则对象列表 |
| [suricata.YieldRulesByKeyword](#yieldrulesbykeyword) | `keywords string, protos ...string` | `chan *rule.Storage` | 按关键词(以及可选协议)从本地规则库中检索匹配的规则，以 channel 形式返回 |
| [suricata.YieldSuricataRulesByKeywords](#yieldsuricatarulesbykeywords) | `keywords string, protos ...string` | `chan *rule.Storage` | 按关键词检索类型为 suricata 的规则，以 channel 形式返回 |

## 函数详情

### DeleteSuricataRuleByID {#deletesuricatarulebyid}

```go
DeleteSuricataRuleByID(id int64) error
```

根据规则 ID 从本地规则数据库中删除一条 Suricata 规则

在 yak 中通过 suricata.DeleteSuricataRuleByID 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `int64` | 规则在数据库中的 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，删除失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：按 ID 删除规则
err = suricata.DeleteSuricataRuleByID(1)
``````````````

---

### LoadSuricataToDatabase {#loadsuricatatodatabase}

```go
LoadSuricataToDatabase(raw string) error
```

解析 Suricata 规则文本并将其保存到本地规则数据库

在 yak 中通过 suricata.LoadSuricataToDatabase 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | Suricata 规则文本，可包含多条规则 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，解析失败时非 nil(单条保存失败仅记录告警) |

**示例**

``````````````yak
// 该示例为示意性用法：导入规则到本地库
err = suricata.LoadSuricataToDatabase(`alert tcp any any -> any any (msg:"x"; content:"a"; sid:1;)`)
``````````````

---

### NewSuricataMatcher {#newsuricatamatcher}

```go
NewSuricataMatcher(r *surirule.Rule) *match.Matcher
```

基于单条 Suricata 规则创建一个流量匹配器，用于判断数据包是否命中该规则

在 yak 中通过 suricata.NewSuricataMatcher 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `*surirule.Rule` | 单条 Suricata 规则对象(通常来自 suricata.ParseSuricata) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*match.Matcher` | 流量匹配器对象 |

**示例**

``````````````yak
// 该示例为示意性用法：用单条规则创建匹配器
rules = suricata.ParseSuricata(`alert tcp any any -> any any (msg:"x"; content:"a"; sid:1;)`)~
matcher = suricata.NewSuricataMatcher(rules[0])
println(matcher != nil)
``````````````

---

### TrafficGenerator {#trafficgenerator}

```go
TrafficGenerator() *ChaosMaker
```

NewChaosMaker 创建一个流量生成器(ChaosMaker)，可根据 Suricata 规则生成对应的模拟攻击流量

在 yak 中通过 suricata.TrafficGenerator 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ChaosMaker` | 流量生成器对象 |

**示例**

``````````````yak
// 该示例为示意性用法：创建流量生成器
maker = suricata.TrafficGenerator()
println(maker != nil)
``````````````

---

### YieldRules {#yieldrules}

```go
YieldRules() chan *rule.Storage
```

从本地规则库中读取全部规则，以 channel 形式逐条返回

在 yak 中通过 suricata.YieldRules 调用，依赖本地规则数据库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *rule.Storage` | 一个只读 channel，逐条产出规则存储对象 |

**示例**

``````````````yak
// 该示例为示意性用法：遍历本地规则库

	for rule = range suricata.YieldRules() {
	    println(rule.Name)
	}
``````````````

---

## 可变参数函数详情

### NewSuricataMatcherGroup {#newsuricatamatchergroup}

```go
NewSuricataMatcherGroup(opt ...match.GroupOption) *match.Group
```

创建一个 Suricata 规则匹配器组，可批量加载规则并对数据包进行匹配

在 yak 中通过 suricata.NewSuricataMatcherGroup 调用

**可选参数**

可作为可变参数 `opt ...match.GroupOption` 传入选项；共 1 个可用选项，详见 [GroupOption 选项列表](#option-groupoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*match.Group` | 规则匹配器组对象 |

**示例**

``````````````yak
// 该示例为示意性用法：创建匹配器组并设置命中回调

	group = suricata.NewSuricataMatcherGroup(suricata.groupCallback(func(packet, matchedRule) {
	    println("matched:", matchedRule.Message)
	}))

println(group != nil)
``````````````

---

### ParseSuricata {#parsesuricata}

```go
ParseSuricata(raw string, envs ...string) ([]*surirule.Rule, error)
```

解析 Suricata 规则文本，返回结构化的规则对象列表

在 yak 中通过 suricata.ParseSuricata 调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | Suricata 规则文本，可包含一条或多条规则 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| envs | `...string` | 可选的环境变量定义，格式为 &#34;NAME=value&#34;，用于替换规则中的 $NAME 占位符 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*surirule.Rule` | 解析得到的规则对象列表 |
| r2 | `error` | 错误信息，解析失败时非 nil |

**示例**

``````````````yak
rule = `alert tcp any any -> any any (msg:"test rule"; content:"hello"; sid:1000001;)`
rules, err = suricata.ParseSuricata(rule)
assert err == nil, "should parse suricata rule"
println(len(rules))   // OUT: 1
assert rules[0].Message == "test rule", "rule message should be parsed"
``````````````

---

### YieldRulesByKeyword {#yieldrulesbykeyword}

```go
YieldRulesByKeyword(keywords string, protos ...string) chan *rule.Storage
```

按关键词(以及可选协议)从本地规则库中检索匹配的规则，以 channel 形式返回

在 yak 中通过 suricata.YieldRulesByKeyword 调用，依赖本地规则数据库

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keywords | `string` | 检索关键词，多个关键词可用逗号分隔 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| protos | `...string` | 可选的协议过滤，如 &#34;tcp&#34;、&#34;http&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *rule.Storage` | 一个只读 channel，逐条产出匹配的规则存储对象 |

**示例**

``````````````yak
// 该示例为示意性用法：按关键词检索规则

	for rule = range suricata.YieldRulesByKeyword("redis", "tcp") {
	    println(rule.Name)
	}
``````````````

---

### YieldSuricataRulesByKeywords {#yieldsuricatarulesbykeywords}

```go
YieldSuricataRulesByKeywords(keywords string, protos ...string) chan *rule.Storage
```

按关键词检索类型为 suricata 的规则，以 channel 形式返回

在 yak 中通过 suricata.YieldSuricataRulesByKeywords 调用，依赖本地规则数据库

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keywords | `string` | 检索关键词，多个关键词可用逗号分隔 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| protos | `...string` | 可选的协议过滤，如 &#34;tcp&#34;、&#34;http&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *rule.Storage` | 一个只读 channel，逐条产出匹配的 suricata 规则存储对象 |

**示例**

``````````````yak
// 该示例为示意性用法：检索 suricata 规则

	for rule = range suricata.YieldSuricataRulesByKeywords("trojan") {
	    println(rule.Name)
	}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：GroupOption {#option-groupoption}

涉及到的函数有：[suricata.NewSuricataMatcherGroup](#newsuricatamatchergroup)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `suricata.groupCallback` | `cb func(packet gopacket.Packet, match *surirule.Rule)` | `match.GroupOption` | 设置规则匹配器组在命中规则时触发的回调函数 |

