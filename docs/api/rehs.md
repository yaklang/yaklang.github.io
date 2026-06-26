# rehs {#library-rehs}

`rehs` 库是多正则批量匹配引擎，借鉴 Intel Hyperscan 的"统一编译，一次扫描"模型：把成百上千条正则统一编译为一个不可变的 Group，对输入数据只扫描一次即可返回所有命中，从而避免"几百条正则逐条匹配"造成的 O(正则数 × 数据量) 性能问题。全程零外部依赖，默认 CGO 构建启用自带位并行内核，无 CGO 时自动退化为纯 Go 参考实现，全平台可移植。

典型使用场景：

- 批量编译与匹配：`rehs.BuildGroup` 把一组正则编译为可复用、并发安全的 Group，`group.Match` 判定是否命中，`group.Find` 返回全部命中（含偏移与内容）。
- 存在性快路径：`rehs.existenceOnly` 选项只判"哪些规则命中"而不取精确偏移，走纯位运算快路径换取更高吞吐（适合打标/分流等只需存在性的场景）。
- 命中枚举：`group.MatchedPatterns` / `group.MatchedIndexes` 返回命中的正则集合，`group.Count` 返回命中总次数，`group.Scan` 流式回调。
- 一次性判定：`rehs.MatchAny` 编译后判定数据是否命中任意一条（不复用 Group，适合临时判定）。

与相邻库的关系：`re` / `re2` 是单正则工具（逐条编译、逐条匹配），`rehs` 面向多正则批量场景（一次编译、一次扫描）。`re` 基于标准 RE2（不支持反向引用），`rehs` 同样基于 RE2 自动机方法。当规则量较大时优先用 `rehs`，单条正则匹配仍用 `re`。

快速上手（本地编译与匹配，不出网即可验证）：

```yak
// 把多条正则统一编译为一个 Group
group = rehs.BuildGroup(["admin", "(?i)password", "token=\\w+"])~

// 存在性判定：命中即停，最快
assert group.Match("see admin here"), "should match admin"

// 取全部命中：含正则、偏移与命中文本
for m in group.Find("admin token=abc123") {
    println(m.Pattern, m.From, m.To, m.Value)
}

// 枚举命中的正则集合
pats = group.MatchedPatterns("admin password token=zzz")
assert len(pats) == 3, "should match all three"

// 查看后端信息
info = group.Info()
log.info("backend=%v tier=%v simd=%v patterns=%v", info.Backend, info.Tier, info.SIMD, info.NumPatterns)
group.Close()
```

> 共 8 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [rehs.MatchAny](#matchany) | `patterns any, data any` | `bool, error` | 一次性判定 data 是否命中 patterns 中任意一条正则（导出名为 rehs.MatchAny） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [rehs.BuildGroup](#buildgroup) | `patterns any, opts ...GroupOption` | `*Group, error` | 把一组正则统一编译为可复用、可并发的 Group（导出名为 rehs.BuildGroup） |

## 函数详情

### MatchAny {#matchany}

```go
MatchAny(patterns any, data any) (bool, error)
```

一次性判定 data 是否命中 patterns 中任意一条正则（导出名为 rehs.MatchAny）

内部临时以 existenceOnly 模式编译 Group、扫描后立即释放，不复用编译结果。
适合偶尔一次的快速判定；需对同一组规则反复扫描时请用 rehs.BuildGroup 编译后复用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| patterns | `any` | 正则表达式列表（同 BuildGroup 的 patterns） |
| data | `any` | 待扫描数据，接受 string / []byte / 任意可转字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否至少命中一条正则 |
| r2 | `error` | patterns 无效或编译失败时返回错误 |

**示例：一次性存在性判定**

``````````````yak
ok = rehs.MatchAny(["\\bfoo\\b", "bar"], "a foo b")~
assert ok, "should hit word foo"

ok2 = rehs.MatchAny(["zzz"], "nothing")~
assert ok2 == false, "should not hit"
``````````````

---

## 可变参数函数详情

### BuildGroup {#buildgroup}

```go
BuildGroup(patterns any, opts ...GroupOption) (*Group, error)
```

把一组正则统一编译为可复用、可并发的 Group（导出名为 rehs.BuildGroup）

借鉴 Hyperscan「compile then scan」模型：成百上千条正则一次编译、一次扫描判定哪些命中，
避免逐条全量匹配的 O(N_patterns × N_bytes) 开销。典型场景包括 MITM 流量打标、IOC 批量匹配、
指纹识别规则集。编译后的 Group 不可变、并发安全只读；用毕须 group.Close() 释放资源。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| patterns | `any` | 正则表达式列表，接受 yak 字符串列表，也容忍 []string / []interface{} / 单字符串 |

**可选参数**

可作为可变参数 `opts ...GroupOption` 传入选项；共 6 个可用选项，详见 [GroupOption 选项列表](#option-groupoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Group` | 编译成功的 Group 句柄，提供 Match / Find / Scan 等方法 |
| r2 | `error` | patterns 为空，或任一正则 RE2/regexp2 均无法编译时返回错误 |

**示例：基础用法：编译并判定命中**

``````````````yak
group = rehs.BuildGroup(["admin", "(?i)password", "token=\\w+"])~
data = "see admin token=abc123"
assert group.Match(data), "should match admin or token"
group.Close()
``````````````

**示例：取全部命中（含偏移与内容）**

``````````````yak
group = rehs.BuildGroup(["admin", "token=\\w+"])~

	for m in group.Find("admin token=xyz") {
	    println(m.Index, m.Pattern, m.From, m.To, m.Value)
	}

group.Close()
``````````````

**示例：存在性快路径（更高吞吐）**

``````````````yak
group = rehs.BuildGroup(["secret", "[0-9]{6}"], rehs.existenceOnly())~
assert group.Match("the otp is 123456"), "existence mode should hit"
group.Close()
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：GroupOption {#option-groupoption}

涉及到的函数有：[rehs.BuildGroup](#buildgroup)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `rehs.backend` | `name string` | `GroupOption` | rehsBackend 显式指定匹配后端 |
| `rehs.caseInsensitive` | - | `GroupOption` | rehsCaseInsensitive 启用大小写不敏感匹配 |
| `rehs.dotAll` | - | `GroupOption` | rehsDotAll 让 . 匹配换行符 |
| `rehs.existenceOnly` | - | `GroupOption` | rehsExistenceOnly 只判「哪些规则命中」而不取精确字节偏移 |
| `rehs.minLiteralLen` | `n int` | `GroupOption` | rehsMinLiteralLen 设定必需字面量最小长度阈值 |
| `rehs.multiline` | - | `GroupOption` | rehsMultiline 让 ^ $ 匹配行首行尾 |

