---
sidebar_position: 6
sidebar_label: "模糊生成与随机字符串"
---

# 模糊生成与随机字符串

造数据是安全测试的日常：批量生成 payload、用例、随机口令、测试 ID。Yaklang 提供三套互补的能力：

- **`regen`**：按正则表达式"反向生成"匹配它的字符串（与匹配相反，是造串）。
- **`fuzz.Strings`**：用 **fuzztag**（`{{int(...)}}`、`{{list(...)}}` 等）把一个模板展开成一批字符串，多个 tag 之间取**笛卡尔积**。
- **`str` 随机函数**：`str.RandStr`、`str.RandomUpperAndLower` 等直接产出随机串。

:::danger regen 全量生成会“组合爆炸”
`regen.Generate` 会枚举**所有**匹配结果。`[0-9]{3}` 就是 1000 个，`[a-z]{6}` 则高达 3 亿多。量词写大一点内存就会被打爆。只需要一个样本时务必用 `regen.GenerateOne` / `regen.MustGenerateOne`。
:::

## 分组速查表

| 库 | 函数（含调用形态） | 返回 | 说明 |
| --- | --- | --- | --- |
| regen | `regen.Generate(pattern)` | ([]string, err) | 枚举全部匹配串 |
| regen | `regen.GenerateOne(pattern)` `regen.MustGenerateOne(pattern)` | string | 只生成一个 |
| regen | `regen.GenerateVisibleOne(pattern)` | string | 生成一个（全可见字符） |
| fuzz | `fuzz.Strings(template)` | []string | fuzztag 展开（多 tag 笛卡尔积） |
| str | `str.RandStr(n)` | string | 长度为 n 的随机串 |
| str | `str.RandomUpperAndLower(s)` | string | 随机翻转大小写 |

:::note 随机函数怎么写示例
随机输出每次都不同，断言"具体值"必然不稳定。本页对随机结果一律断言**不变量**——长度、是否匹配某正则、大小写无关比较是否相等——`// OUT:` 标注的也都是这些稳定属性，而不是随机内容本身。
:::

## regen：按正则枚举全部匹配

`regen.Generate` 返回所有能匹配该正则的字符串。对 `*`/`+` 这类无界量词，库会做有限展开（`*` 取 0~1 次、`+` 取 1~2 次），`{n,m}` 则按区间展开。

``````````````yak
// 特性: regen.Generate 按正则枚举全部匹配
// 关键词: regen.Generate, 反向生成
// [0-9]{3} 共 000~999 = 1000 个
nums = regen.Generate(`[0-9]{3}`)~
println(len(nums))   // OUT: 1000

// 选择分支 (cat|dog|fox): 三选一, 全部枚举出来
words = regen.Generate(`(cat|dog|fox)`)~
println(words)       // OUT: [cat dog fox]

assert len(nums) == 1000 && "dog" in words, "exhaustive generation"
``````````````

## regen：只生成一个样本

需要造一个符合格式的样本（用户名、token、随机标识）时，用 `regen.MustGenerateOne`（失败直接 panic）或 `regen.GenerateOne`（返回 error）。`regen.GenerateVisibleOne` 保证结果全是可见字符。

``````````````yak
// 特性: regen.MustGenerateOne / GenerateVisibleOne 生成单个样本
// 关键词: regen.MustGenerateOne, regen.GenerateVisibleOne
// 生成一个形如 user_xxxx 的串(xxxx 为 4 个小写字母)
one = regen.MustGenerateOne(`user_[a-z]{4}`)
// 内容随机, 只能断言“符合格式 + 长度”这类不变量
println(re.Match("^user_[a-z]{4}$", one))  // OUT: true
println(len(one))                          // OUT: 9

// \w{6} 生成 6 个可见字符
vis = regen.GenerateVisibleOne(`\w{6}`)~
println(len(vis))   // OUT: 6
``````````````

## fuzz.Strings：用 fuzztag 展开模板

`fuzz.Strings` 把模板里的 fuzztag 展开成一批字符串。两个最常用的 tag：

- `{{int(1-3)}}`：生成 `1`、`2`、`3`。
- `{{list(a|b|c)}}`：在候选里逐个取值。

``````````````yak
// 特性: fuzz.Strings 展开 int / list fuzztag
// 关键词: fuzz.Strings, fuzztag, int 范围, list 候选
// {{int(1-3)}} 展开为 1,2,3, 拼回模板
ids = fuzz.Strings("id-{{int(1-3)}}")
println(ids)   // OUT: [id-1 id-2 id-3]

// {{list(a|b|c)}} 逐个取候选
items = fuzz.Strings("{{list(a|b|c)}}")
println(items) // OUT: [a b c]
``````````````

## fuzz.Strings：多个 tag 取笛卡尔积（重点）

一个模板里出现多个 fuzztag 时，结果是它们的**笛卡尔积**（所有组合）。这点很关键：tag 一多，结果数量会成倍增长。

``````````````yak
// 特性: fuzz.Strings 多 tag 笛卡尔积
// 关键词: fuzz.Strings, 笛卡尔积, 组合爆炸
// 2 个方法 x 2 个编号 = 4 种组合
combo = fuzz.Strings("{{list(get|post)}}-{{int(1-2)}}")
println(combo)        // OUT: [get-1 post-1 get-2 post-2]
println(len(combo))   // OUT: 4

assert "get-1" in combo && "post-2" in combo, "cartesian product covers all pairs"
``````````````

:::danger 笛卡尔积会迅速膨胀
两个 `{{int(1-100)}}` 放一起就是 1 万条，三个就是 100 万条。用 fuzztag 构造大批量 payload 前，先心算一下组合规模，必要时配合发包侧的并发/数量限制。
:::

## str：随机字符串

`str` 提供轻量的随机串生成。随机值无法断言具体内容，但可以断言长度、大小写无关相等等**稳定属性**。

``````````````yak
// 特性: str.RandStr / str.RandomUpperAndLower 随机串
// 关键词: str.RandStr, str.RandomUpperAndLower
// 固定长度的随机串: 只能断言长度
rs = str.RandStr(8)
println(len(rs))   // OUT: 8

// RandomUpperAndLower 只随机翻转大小写, 字母本身不变
// 所以用 ToLower 抹平大小写后, 一定等于原串
mixed = str.RandomUpperAndLower("abc")
println(str.ToLower(mixed))   // OUT: abc

assert len(rs) == 8 && str.ToLower(mixed) == "abc", "stable invariants of random output"
``````````````

:::tip 测试随机函数的正确姿势
断言随机输出的"具体值"必然 flaky。正确做法是断言**不变量**：长度、是否匹配某个正则、大小写无关比较是否相等。本页 `str.RandStr` 断言长度、`str.RandomUpperAndLower` 用 `str.ToLower` 抹平大小写后比对，都是这个思路；`regen.MustGenerateOne` 则用 `re.Match` 校验"符合格式"。
:::

## str：强随机口令与强度判断

造测试账号、初始口令时常需要"足够强"的随机口令。`str.RandSecret(n)` 生成长度为 n 的强随机口令（长度过小会自动补到安全下限）；`str.IsStrongPassword(s)` 判断口令是否达到强度要求——长度大于 8，且同时包含大写、小写、数字与特殊字符。

``````````````yak
// 特性: str.RandSecret / str.IsStrongPassword 强口令
// 关键词: str.RandSecret, str.IsStrongPassword
// 生成 12 位强随机口令: 内容随机, 只能断言长度
sec = str.RandSecret(12)
println(len(sec))   // OUT: 12

// 强度判断: 同时含大小写/数字/特殊字符且足够长才算强
println(str.IsStrongPassword("YourP@ssw0rd!"))   // OUT: true
println(str.IsStrongPassword("weak"))            // OUT: false

assert len(sec) == 12 && str.IsStrongPassword("YourP@ssw0rd!"), "strong secret invariants"
``````````````
