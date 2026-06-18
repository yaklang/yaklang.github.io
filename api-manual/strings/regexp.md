---
sidebar_position: 3
sidebar_label: "正则表达式 re / re2"
---

# 正则表达式 re / re2

Yaklang 提供两个正则库：

- **`re`**：基于 Golang 标准 `regexp`（RE2 语法），线性时间、无回溯，**不支持**前瞻/后顾/反向引用等 Perl 扩展。日常匹配、提取、替换都用它。
- **`re2`**：增强引擎，**支持前瞻 `(?=...)`、后顾、反向引用**等高级语法，在需要这些特性时使用。

两者的函数名与用法基本一致，可平滑切换。

:::danger 参数顺序的陷阱（最容易踩）
`re` 库的参数顺序并不统一：

- `re.Match(pattern, corpus)` —— **模式在前**，语料在后。
- `re.Find(corpus, pattern)`、`re.FindAll`、`re.FindSubmatch`、`re.FindGroup`、`re.ReplaceAll(corpus, pattern, repl)` —— **语料在前**，模式在后。

记忆口诀：只有 `Match` 是"模式优先"，其它"查找/替换"类都是"语料优先"。写反了通常**不会报错**，只是默默匹配不到，排查起来很费时。
:::

## 分组速查表

| 分组 | 函数（含调用形态） | 返回 | 说明 |
| --- | --- | --- | --- |
| 判断 | `re.Match(pattern, corpus)` | bool | 是否匹配（注意模式在前） |
| 查找 | `re.Find(corpus, pattern)` `re.FindAll(corpus, pattern)` | string / []string | 取首个 / 全部匹配 |
| 捕获 | `re.FindSubmatch(corpus, pattern)` `re.FindGroup(corpus, pattern)` | []string / map | 取分组（含命名组） |
| 替换 | `re.ReplaceAll(corpus, pattern, repl)` `re.ReplaceAllWithFunc(corpus, pattern, fn)` | string | 静态 / 函数替换 |
| 提取 | `re.ExtractIP(s)` `re.ExtractURL(s)` `re.ExtractEmail(s)` | []string | 内置常用模式 |
| 解析 | `re.Grok(line, rule)` | map | 用 Grok 规则结构化 |
| 编译 | `re.Compile(pattern)` `re.QuoteMeta(s)` | (对象,err) / string | 预编译 / 元字符转义 |
| 高级 | `re2.Compile(pattern)` `re2.FindSubmatch(corpus, pattern)` | … | 支持前瞻等扩展语法 |

## 匹配判断

`re.Match` 只回答"匹不匹配"。再强调一次：它的参数是**模式在前**。

``````````````yak
// 特性: re.Match 判断是否匹配 (模式在前!)
// 关键词: re.Match, 参数顺序
// 第一个参数是模式, 第二个才是被检查的字符串
println(re.Match("^[a-z]+$", "abc"))   // OUT: true
println(re.Match("^[0-9]+$", "abc"))   // OUT: false

assert re.Match("^[a-z]+$", "abc"), "all lowercase matches the pattern"
``````````````

## 查找匹配

`re.Find` 返回首个匹配字符串（无匹配返回空串），`re.FindAll` 返回全部匹配的切片。这两个都是**语料在前**。

``````````````yak
// 特性: re.Find / re.FindAll 查找匹配 (语料在前)
// 关键词: re.Find, re.FindAll
// Find: 取第一个匹配
println(re.Find("id=42&x=7", "[0-9]+"))   // OUT: 42
// FindAll: 取所有匹配, 返回切片
println(re.FindAll("a1 b2 c3", "[0-9]"))  // OUT: [1 2 3]
``````````````

## 分组捕获

这是正则最有价值的部分，但也最容易记混返回结构，务必看清下标含义：

- `re.FindSubmatch` 返回切片：**下标 0 是完整匹配，下标 1 起才是各个分组**。
- `re.FindGroup` 把命名捕获组 `(?P<name>...)` 解析成 map：**键 `"0"` 是完整匹配**，其余键是组名。

``````````````yak
// 特性: re.FindSubmatch / re.FindGroup 捕获分组
// 关键词: re.FindSubmatch, re.FindGroup, 命名捕获组, 下标 0 是完整匹配
// FindSubmatch 返回 [完整匹配, 分组1, 分组2, ...]
sub = re.FindSubmatch("yakit", "yak([a-z]+)")
println(sub)        // OUT: [yakit it]
println(sub[0])     // OUT: yakit
println(sub[1])     // OUT: it

// FindGroup 返回 map: 键 "0" 是完整匹配, 命名组按名字取
g = re.FindGroup("yakit", "yak(?P<rest>[a-z]+)")
println(g)          // OUT: map[0:yakit rest:it]
println(g["0"])     // OUT: yakit
println(g["rest"])  // OUT: it

assert sub[1] == "it" && g["rest"] == "it", "group 1 equals named group rest"
``````````````

:::note 完整匹配总在“第 0 个”
不论 `FindSubmatch`（切片下标 `0`）还是 `FindGroup`（map 键 `"0"`），第 0 个永远是**整个匹配到的串**，你关心的分组要从 `1` / 组名开始取。新手最常见的错误就是把 `sub[0]` 当成第一个分组。
:::

## 替换

`re.ReplaceAll(corpus, pattern, repl)` 做静态替换；`re.ReplaceAllWithFunc(corpus, pattern, fn)` 用回调对每个匹配单独处理，适合脱敏、按值变换等场景。

``````````````yak
// 特性: re.ReplaceAll / re.ReplaceAllWithFunc 替换 (语料在前)
// 关键词: re.ReplaceAll, re.ReplaceAllWithFunc
// 静态替换
println(re.ReplaceAll("yakit is good", "yak([a-z]+)", "yaklang"))  // OUT: yaklang is good

// 函数替换: 回调拿到“当前匹配到的完整子串”, 返回值就是替换结果
// 这里把每一个数字都替换成 #
masked = re.ReplaceAllWithFunc("a1 b2", "[0-9]", func(s) {
    return "#"
})
println(masked)   // OUT: a# b#
``````````````

:::note 回调参数是整个匹配，不是分组
`ReplaceAllWithFunc` 的回调收到的 `s` 是当前匹配到的**完整字符串**。若想在替换时拿到分组，需要在回调内对 `s` 再跑一次 `re.FindSubmatch`。
:::

## 内置提取函数

`re` 内置了一批常用模式的提取函数，省去手写正则。它们都返回切片。

``````````````yak
// 特性: re.ExtractIP / re.ExtractEmail 内置提取
// 关键词: re.ExtractIP, re.ExtractEmail
// 一段文本里所有 IPv4
println(re.ExtractIP("server 10.0.0.1 backup 8.8.8.8"))  // OUT: [10.0.0.1 8.8.8.8]
// 一段文本里所有邮箱
println(re.ExtractEmail("contact zhang.san@example.com now"))  // OUT: [zhang.san@example.com]
``````````````

:::tip ExtractEmail 需要结构完整的邮箱
内置提取用的是相对严格的模式。像 `a@x.com` 这种过短的地址可能不被识别，传入"本地名 + 合理域名"的完整邮箱才能稳定提取——拿不准时先 `println` 出来确认有没有捞到。
:::

## Grok 结构化解析

`re.Grok` 用预定义模式（如 `%{MONTHNUM:month}`）把一行文本结构化成 map，常用于日志解析。

:::note Grok 的每个值是“列表”
`Grok` 返回的 map 里，每个字段的值都是一个**列表**（同名模式可能命中多次），取值要写 `m["month"][0]`，而不是 `m["month"]`。
:::

``````````````yak
// 特性: re.Grok 用 grok 规则结构化文本
// 关键词: re.Grok, 日志解析, 值是列表
m = re.Grok("04/18-00:59:45", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}")
// 注意: 值是列表, 取第 0 个
println(m["month"])      // OUT: [04]
println(m["month"][0])   // OUT: 04
println(m["day"][0])     // OUT: 18

assert m["month"][0] == "04" && m["day"][0] == "18", "month/day parsed correctly"
``````````````

## re2：高级语法（前瞻等）

当模式需要**前瞻/后顾/反向引用**时，标准 `re` 会直接编译报错，此时改用 `re2`。下面用一个"取 `usd` 前面的数字、但不把 `usd` 吃进结果"的前瞻做对照：

``````````````yak
// 特性: re2 支持前瞻 (?=...), 标准 re 不支持
// 关键词: re2.Compile, re2.FindSubmatch, 前瞻 lookahead
// 标准 re 编译前瞻直接报错(返回非 nil 的 error)
_, err = re.Compile("([0-9]+)(?=usd)")
println(err != nil)   // OUT: true

// 同样的模式, re2 可以正常工作
sub = re2.FindSubmatch("price: 100usd", "([0-9]+)(?=usd)")
println(sub[1])       // OUT: 100

assert err != nil, "standard re rejects lookahead syntax"
assert sub[1] == "100", "re2 captures the number before usd"
``````````````
