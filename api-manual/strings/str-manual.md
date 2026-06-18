---
sidebar_position: 2
sidebar_label: "基础内置库 str 手册"
---

# 基础内置库 str 手册

`str` 是 Yaklang 中最常用的字符串库，既覆盖了与 Golang `strings` 对应的通用操作（判断、查找、切割、替换、修剪、大小写），也针对安全研发补充了大量"提取"类函数（从文本中抽域名、主机、端口、标题、JSON 等）。本手册按功能分组讲解最常用的部分，完整的逐函数定义请查阅 **「内置标准库完全手册 → str」**。

:::tip 阅读约定
示例都经过 `yak` 实跑验证。`assert` 用来锁定确定性结论，`println` 用来打印可观察的结果，并在同一行用 `// OUT:` 标注它真实打印了什么——`// OUT:` 后面就是该行的标准输出，可以逐行对照学习。
:::

## 分组速查表

| 分组 | 代表函数（含调用形态） | 说明 |
| --- | --- | --- |
| 判断/谓词 | `str.Contains(s, sub)` `str.HasPrefix(s, p)` `str.EqualFold(a, b)` `str.IsDigit(s)` `str.IsIPv4(s)` | 返回布尔 |
| 查找/定位 | `str.Index(s, sub)` `str.LastIndex(s, sub)` `str.IndexAny(s, chars)` `str.Count(s, sub)` | 返回下标或次数 |
| 切割/连接 | `str.Split(s, sep)` `str.Fields(s)` `str.Cut(s, sep)` `str.Join(list, sep)` `str.ParseStringToLines(s)` | 拆分与拼接 |
| 大小写/标题 | `str.ToUpper(s)` `str.ToLower(s)` `str.Title(s)` | 大小写转换 |
| 修剪 | `str.TrimSpace(s)` `str.Trim(s, cutset)` `str.TrimPrefix(s, p)` `str.TrimSuffix(s, suf)` | 去空白或指定字符 |
| 替换/重复 | `str.Replace(s, old, new, n)` `str.ReplaceAll(s, old, new)` `str.Repeat(s, n)` | 替换与重复 |
| 引用/转义 | `str.Quote(s)` `str.Unquote(s)` | 加引号转义与还原 |
| 安全提取 | `str.ExtractDomain(s)` `str.ExtractTitle(html)` `str.ParseStringToHosts(s)` `str.ParseStringToPorts(s)` | 从文本抽结构化信息 |
| 版本比较 | `str.VersionGreater(a, b)` `str.VersionLess(a, b)` `str.VersionCompare(a, b)` | 语义化版本比较 |

## 判断与谓词

这一组函数返回布尔值，是条件分支里最常用的。注意 `str.HasPrefix` 与 `str.StartsWith`、`str.HasSuffix` 与 `str.EndsWith` 互为别名。

``````````````yak
// 特性: 判断类函数 str.Contains / HasPrefix / EqualFold / IsXxx
// 关键词: str.Contains, str.HasPrefix, str.IsIPv4
// 这些函数只关心“是不是”，返回 true/false，直接拿来当条件用
assert str.Contains("hello world", "world")          // 包含子串
assert str.HasPrefix("https://a.com", "https://")    // 以前缀开头
assert str.HasSuffix("report.txt", ".txt")           // 以后缀结尾
assert str.EqualFold("YAK", "yak")                   // 忽略大小写比较
assert str.IsDigit("12345")                          // 全是数字
assert str.IsIPv4("127.0.0.1")                       // 是合法 IPv4

// 打印几个常见判断的真实结果, 方便直观对照(含反例)
println(str.Contains("hello world", "world"))   // OUT: true
println(str.HasPrefix("https://a.com", "ftp"))  // OUT: false
println(str.IsIPv4("999.1.1.1"))                // OUT: false
``````````````

`assert str.Contains(...)` 这种写法成立，是因为这些函数直接返回布尔，不必再写 `== true`。上面也演示了反例——`HasPrefix(..., "ftp")` 与非法 IP 都返回 `false`，对照着看更容易记住边界。

## 查找与定位

`str.Index` 返回子串首次出现的下标（找不到返回 `-1`，这是最容易忽略的返回值），`str.LastIndex` 返回最后一次，`str.IndexAny` 匹配字符集合中任一字符，`str.Count` 统计出现次数。

``````````````yak
// 特性: 查找定位 str.Index / LastIndex / IndexAny / Count
// 关键词: str.Index, str.LastIndex, str.Count, 找不到返回 -1
s = "abcabc"
println(str.Index(s, "c"))        // OUT: 2
println(str.LastIndex(s, "c"))    // OUT: 5
println(str.Count(s, "bc"))       // OUT: 2
println(str.IndexAny(s, "xc"))    // OUT: 2
// 找不到时返回 -1, 不是 0!
println(str.Index(s, "z"))        // OUT: -1

// 用 assert 锁住“找不到返回 -1”这个易错点
assert str.Index(s, "z") == -1, "Index returns -1 when not found"
``````````````

:::danger Index 找不到返回 -1，不是 0
下标 `0` 是"匹配在开头"的合法结果。判断"是否存在"千万不要写 `if str.Index(s, sub) > 0`（会漏掉开头命中的情况），要么用 `>= 0`，要么直接用 `str.Contains`。
:::

## 切割、分割与连接

``````````````yak
// 特性: 切割连接 str.Split / Fields / Cut / Join / ParseStringToLines
// 关键词: str.Split, str.Join, str.Cut, str.Fields
// Split 按分隔符拆成切片
parts = str.Split("a,b,c", ",")
println(parts)        // OUT: [a b c]
println(parts[1])     // OUT: b

// Join 用分隔符把切片连起来
joined = str.Join(["x", "y", "z"], "-")
println(joined)       // OUT: x-y-z

// Fields 按“任意连续空白”拆分, 自动忽略多余空格
fields = str.Fields("  foo   bar baz ")
println(len(fields))  // OUT: 3
println(fields)       // OUT: [foo bar baz]

// Cut 一次返回三个值: 分隔符前、分隔符后、是否命中
before, after, found = str.Cut("k=v", "=")
println(before)       // OUT: k
println(after)        // OUT: v
println(found)        // OUT: true

// ParseStringToLines 按行拆分
lines = str.ParseStringToLines("l1\nl2\nl3")
println(len(lines))   // OUT: 3
``````````````

:::note Cut 比“先 Index 再切片”更安全
`str.Cut(s, sep)` 一次返回 `(before, after, found)`。最后那个 `found` 显式告诉你分隔符到底存不存在——分隔符缺失时 `before` 是整个原串、`after` 为空、`found` 为 `false`，不会出现切片越界。处理 `key=value`、`host:port` 这类成对结构时优先用它。
:::

## 大小写与标题

``````````````yak
// 特性: 大小写 str.ToUpper / ToLower / Title
// 关键词: str.ToUpper, str.ToLower, str.Title
println(str.ToUpper("Yak"))           // OUT: YAK
println(str.ToLower("Yak"))           // OUT: yak
// Title 把每个单词的首字母大写
println(str.Title("hello world"))     // OUT: Hello World
``````````````

## 修剪空白与字符

`str.TrimSpace` 去除首尾空白；`str.Trim` 去除首尾出现的指定字符集合；`str.TrimPrefix` / `str.TrimSuffix` 只在确实存在时去掉指定前后缀。

``````````````yak
// 特性: 修剪 str.TrimSpace / Trim / TrimPrefix / TrimSuffix
// 关键词: str.TrimSpace, str.Trim, str.TrimPrefix
println(str.TrimSpace("  hi  "))                       // OUT: hi
println(str.Trim("##hi##", "#"))                       // OUT: hi
println(str.TrimPrefix("https://a.com", "https://"))   // OUT: a.com
println(str.TrimSuffix("report.txt", ".txt"))          // OUT: report

// 小实验: Trim 是“字符集合”, TrimPrefix 是“整段前缀”, 行为完全不同
// Trim("xxabcxx", "xy") 把首尾的 x 都吃掉(y 没出现也无所谓)
println(str.Trim("xxabcxx", "xy"))                     // OUT: abc
// TrimPrefix 整段不匹配时原样返回(abc 不是以 "xy" 开头)
println(str.TrimPrefix("abc", "xy"))                   // OUT: abc
``````````````

:::danger 别把 Trim 当 TrimPrefix
`str.Trim(s, "abc")` 按**字符集合**处理：把首尾所有出现的 `a`/`b`/`c` 逐个剥掉。`str.TrimPrefix(s, "abc")` 只在 `s` 确实以**整个字符串** `"abc"` 开头时去掉这一段。例如 `str.Trim("cbadef", "abc")` 同样得到 `"def"`，说明它根本不关心顺序。需要"剥掉固定前缀"时永远用 `TrimPrefix`。
:::

## 替换与重复

``````````````yak
// 特性: 替换重复 str.Replace / ReplaceAll / Repeat
// 关键词: str.ReplaceAll, str.Replace, str.Repeat
// ReplaceAll 全部替换
println(str.ReplaceAll("a-a-a", "a", "b"))       // OUT: b-b-b
// Replace 的第 4 个参数 n 限制替换次数, n=1 只替换第一个
println(str.Replace("a-a-a", "a", "b", 1))       // OUT: b-a-a
// Repeat 重复 n 次
println(str.Repeat("ab", 3))                     // OUT: ababab
``````````````

`str.Replace` 的最后一个参数 `n` 控制替换次数：传 `-1` 等价于 `ReplaceAll`（全部替换），传正数则只替换前 `n` 个。需要"只改第一个"时这个参数很关键。

## 引用与转义

`str.Quote` 给字符串加引号并把不可见字符转义（如制表符变成字面量 `\t`），`str.Unquote` 是其逆操作。注意 **`str.Unquote` 返回 `(string, error)`**，建议用 `~` 处理错误。

``````````````yak
// 特性: 引用转义 str.Quote / Unquote
// 关键词: str.Quote, str.Unquote, 波浪号处理 error
// Quote 把真实制表符转义成字面量 \t, 并加上外层引号
quoted = str.Quote("a\tb")
println(quoted)                // OUT: "a\tb"

// Unquote 返回 (string, error), 用 ~ 自动处理错误, 还原回真正的制表符
restored = str.Unquote(quoted)~
assert restored == "a\tb"
println(restored == "a\tb")    // OUT: true
``````````````

## 安全场景：从文本中提取

这是 `str` 区别于通用字符串库的特色：直接从一段噪声文本里抽出域名、主机、端口、标题等结构化信息，非常适合处理扫描结果、报文与日志。**这些提取函数大多返回切片**（一段文本里可能有多个目标）。

``````````````yak
// 特性: 安全提取 str.ExtractDomain / ExtractTitle / ParseStringToHosts / ParseStringToPorts
// 关键词: str.ExtractDomain, str.ParseStringToHosts, str.ParseStringToPorts
// ExtractDomain 返回域名“列表”(可能同时含根域名与子域名)
domains = str.ExtractDomain("visit http://www.example.com/path now")
println(domains)                       // OUT: [example.com www.example.com]
assert "www.example.com" in domains    // 用 in 判断是否包含目标

// ParseStringToHosts 把逗号/CIDR 等写法展开为主机列表
hosts = str.ParseStringToHosts("192.168.1.1,192.168.1.2")
println(len(hosts))                    // OUT: 2

// ParseStringToPorts 支持逗号与区间, 展开为端口列表
ports = str.ParseStringToPorts("80,443,8000-8002")
println(ports)                         // OUT: [80 443 8000 8001 8002]
println(len(ports))                    // OUT: 5

// ExtractTitle 从 HTML 中解析 <title> 文本(返回单个字符串)
println(str.ExtractTitle("<html><title>Hello</title></html>"))  // OUT: Hello
``````````````

:::tip 提取类函数大多返回列表
像 `str.ExtractDomain` / `str.ParseStringToHosts` / `str.ParseStringToPorts` 返回的都是**切片**，不要按"单个字符串"来接。用 `len()` 判断有没有结果、用 `in` 判断是否包含某个目标；而像 `str.ExtractTitle` 这种"逻辑上只有一个"的才返回单值——拿不准时先 `println` 出来看一眼类型。
:::

## 版本号比较

处理组件指纹、CVE 影响范围时常需要比较版本号。`str` 提供了语义化版本比较，能正确处理 `1.2.0 > 1.1.9` 这种"按段比较"而非字典序的情况。

``````````````yak
// 特性: 版本比较 str.VersionGreater / VersionLess
// 关键词: str.VersionGreater, str.VersionLess, 语义化版本
// 按“段”比较: 1.2.0 比 1.1.9 新
println(str.VersionGreater("1.2.0", "1.1.9"))   // OUT: true
println(str.VersionLess("1.0.0", "1.0.1"))      // OUT: true

// 对照小实验: 朴素的字符串比较会得出错误结论
// 1.10.0 实际比 1.9.0 新, 但字符串逐字符比较把 "1.1" 看成小于 "1.9"
println("1.10.0" > "1.9.0")                      // OUT: false
println(str.VersionGreater("1.10.0", "1.9.0"))   // OUT: true
``````````````

:::note 别用字符串大小比较版本号
版本号 `1.10.0` 实际比 `1.9.0` 新，但按字符串逐字符比较时 `"1.1..." < "1.9..."`，结论相反。涉及版本判断一律用 `str.VersionGreater` / `str.VersionLess` / `str.VersionCompare`。
:::
