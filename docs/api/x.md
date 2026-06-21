# x {#library-x}

`x` 库是函数式与集合工具集（funk 风格），提供对切片/映射的 Map/Filter/Reduce、集合运算、聚合统计与常用辅助函数，让数据处理更简洁。

典型使用场景：

- 遍历变换：`x.Map` / `x.Filter` / `x.Reduce` / `x.Foreach` / `x.Find` 处理集合，`x.Chunk` / `x.Reverse` / `x.Shuffle` / `x.Zip` 重组数据。
- 集合运算：`x.Contains` / `x.IndexOf`、`x.Intersect` / `x.Subtract` / `x.Difference` / `x.IsSubset`、`x.RemoveRepeat` 去重。
- 聚合判定：`x.Sum` / `x.Max` / `x.Min`、`x.All` / `x.Any` / `x.Every` / `x.Some`、`x.Keys` / `x.Values` / `x.ToMap`。
- 辅助：`x.If`（三元）、`x.Range`、`x.Retry`（重试）、`x.Sort`、`x.WaitConnect`。

与相邻库的关系：`x` 是通用数据处理工具，无副作用，与 `str`（字符串）、`json`（结构化数据）配合，常用于把扫描/分析结果做整理与统计。

> 共 43 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [x.Chunk](#chunk) | `arr any, size int` | `any` | 将切片按指定大小分组，最后一组可能不足 size 个元素 |
| [x.Contains](#contains) | `in any, elem any` | `bool` | 判断元素是否存在于集合(切片/数组/map/字符串)中 |
| [x.ConvertToMap](#converttomap) | `i any` | `map[string][]string` | 将传入的对象转换为 map[string][]string 结构，常用于归一化键值数据 |
| [x.Difference](#difference) | `x any, y any` | `any, any` | 返回两个集合的差异，分别是仅属于 x 的元素和仅属于 y 的元素 |
| [x.Drop](#drop) | `in any, n int` | `any` | 从切片开头丢弃 n 个元素，返回剩余元素组成的新切片 |
| [x.Equal](#equal) | `expected any, actual any` | `bool` | 判断两个对象是否相等(深度比较) |
| [x.Filter](#filter) | `i any, fc func(any) bool` | `any` | 遍历集合，仅保留回调函数返回 true 的元素 |
| [x.Find](#find) | `i any, fc func(any) bool` | `any` | 遍历集合，返回第一个使回调函数返回 true 的元素 |
| [x.Foreach](#foreach) | `i any, fc func(any)` | - | 从前向后遍历集合，对每个元素执行回调函数(无返回值) |
| [x.ForeachRight](#foreachright) | `i any, fc func(any)` | - | 从后向前遍历集合，对每个元素执行回调函数(无返回值) |
| [x.GC](#gc) | - | - | 主动触发一次垃圾回收并尽量把空闲内存归还操作系统 |
| [x.GCPercent](#gcpercent) | `percent int` | `int` | 设置 GC 触发阈值百分比并返回旧值（导出名为 x.GCPercent） |
| [x.Head](#head) | `arr any` | `any` | 返回切片的第一个元素 |
| [x.If](#if) | `i bool, a any, b any` | `any` | 三元条件选择，当条件为真时返回 a，否则返回 b |
| [x.IndexOf](#indexof) | `in any, elem any` | `int` | 返回元素在切片中第一次出现的下标，未找到返回 -1 |
| [x.Intersect](#intersect) | `x any, y any` | `any` | 返回两个集合的交集(同时存在于两个集合中的元素) |
| [x.IsSubset](#issubset) | `x any, y any` | `bool` | 判断集合 x 是否为集合 y 的子集 |
| [x.Keys](#keys) | `out any` | `any` | 返回 map 的所有键或结构体的所有字段名组成的切片 |
| [x.Map](#map) | `i any, fc funkGeneralFuncType` | `any` | 遍历集合中的每个元素，使用回调函数处理后返回新的切片 |
| [x.Max](#max) | `i any` | `any` | 返回数值或字符串切片中的最大值 |
| [x.Min](#min) | `i any` | `any` | 返回数值或字符串切片中的最小值 |
| [x.NewEventWatcher](#neweventwatcher) | `ctx context.Context, triggerTime time.Duration, triggerCount int` | `*utils.EventWatcherManager` | 创建一个事件观察器，按时间间隔或累计事件数触发回调（导出名为 x.NewEventWatcher） |
| [x.NewReducer](#newreducer) | `reduceLimit int, handle reducer.ReduceFunction` | `*reducer.Reducer` | 创建一个归并器，超过 reduceLimit 条数据时用 handle 把较旧的数据合并（导出名为 x.NewReducer） |
| [x.Range](#range) | `i int` | `[]any` | 创建一个长度为 i 的空接口切片，常用于配合 for-range 生成定长循环 |
| [x.Reduce](#reduce) | `i any, fc funkGeneralReduceFuncType, acc any` | `any` | 对集合中的元素从初始累加器开始依次归并为单一结果 |
| [x.RemoveRepeat](#removerepeat) | `in any` | `any` | 对切片去重，返回仅保留首次出现元素的新切片 |
| [x.Retry](#retry) | `i int, handler func() bool` | - | 反复调用 handler，直到 handler 返回 false 或达到最大次数（导出名为 x.Retry） |
| [x.Reverse](#reverse) | `in any` | `any` | 反转切片中元素的顺序，返回反转后的新切片 |
| [x.Shift](#shift) | `i any` | `any` | 返回去掉切片第一个元素后的新切片 |
| [x.Shuffle](#shuffle) | `in any` | `any` | 随机打乱切片中元素的顺序，返回打乱后的新切片 |
| [x.Sort](#sort) | `x any, less func(i, j int) bool` | - | 使用自定义的 less 比较函数对切片做稳定原地排序（导出名为 x.Sort） |
| [x.Subtract](#subtract) | `x any, y any` | `any` | 返回集合 x 中存在但集合 y 中不存在的元素 |
| [x.Sum](#sum) | `arr any` | `float64` | 计算切片中所有数值元素之和 |
| [x.Tail](#tail) | `arr any` | `any` | 返回切片中除第一个元素外的所有元素 |
| [x.ToFloat64](#tofloat64) | `x any` | `float64, bool` | 将任意数值类型转换为 float64 |
| [x.ToMap](#tomap) | `in any, pivot string` | `any` | 将一个结构体切片转换为以指定字段值为键的 map |
| [x.Values](#values) | `out any` | `any` | 返回 map 的所有值或结构体的所有字段值组成的切片 |
| [x.WaitConnect](#waitconnect) | `addr string, timeout float64` | `error` | 等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动 |
| [x.Zip](#zip) | `slice1 any, slice2 any` | `[]Tuple` | 将两个切片按下标两两组合成元组列表，长度取较短切片 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [x.All](#all) | `objs ...any` | `bool` | 判断给定的多个值是否全部非空(真值) |
| [x.Any](#any) | `objs ...any` | `bool` | 判断给定的多个值中是否至少有一个非空(真值) |
| [x.Every](#every) | `in any, elements ...any` | `bool` | 判断给定的所有元素是否都存在于集合中 |
| [x.Some](#some) | `in any, elements ...any` | `bool` | 判断给定的元素中是否至少有一个存在于集合中 |

## 函数详情

### Chunk {#chunk}

```go
Chunk(arr any, size int) any
```

将切片按指定大小分组，最后一组可能不足 size 个元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| arr | `any` | 待分组的切片 |
| size | `int` | 每组的元素个数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 分组后的二维切片 |

**示例**

``````````````yak
// VARS: 按每组 2 个分组
result = x.Chunk([1, 2, 3, 4, 5], 2)
// assert: 5 个元素分成 3 组
assert len(result) == 3, "5 elements in groups of 2 yields 3 chunks"
``````````````

---

### Contains {#contains}

```go
Contains(in any, elem any) bool
```

判断元素是否存在于集合(切片/数组/map/字符串)中

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 源集合 |
| elem | `any` | 要查找的元素 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 元素是否存在 |

**示例**

``````````````yak
// VARS: 判断元素是否存在
result = x.Contains([1, 2, 3], 2)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 不存在的元素返回 false
assert x.Contains([1, 2, 3], 9) == false, "9 is not in the slice"
``````````````

---

### ConvertToMap {#converttomap}

```go
ConvertToMap(i any) map[string][]string
```

将传入的对象转换为 map[string][]string 结构，常用于归一化键值数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待转换的对象(map 或结构体) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string][]string` | 转换后的 map[string][]string |

**示例**

``````````````yak
// VARS: 转换为字符串列表映射
m = x.ConvertToMap({"k": "v"})
// STDOUT: 打印键对应的值列表
println(m["k"])   // OUT: [v]
// assert: 取出第一个值
assert m["k"][0] == "v", "ConvertToMap should keep the value under its key"
``````````````

---

### Difference {#difference}

```go
Difference(x any, y any) (any, any)
```

返回两个集合的差异，分别是仅属于 x 的元素和仅属于 y 的元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `any` | 第一个集合 |
| y | `any` | 第二个集合 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 仅属于 x 的元素集合 |
| r2 | `any` | 仅属于 y 的元素集合 |

**示例**

``````````````yak
// VARS: 求双向差异
left, right = x.Difference([1, 2, 3, 4], [2, 4])
// STDOUT: 打印仅属于第一个集合的元素
println(left)   // OUT: [1 3]
// assert: 第二个集合没有独有元素
assert len(right) == 0, "no element is unique to the second set"
``````````````

---

### Drop {#drop}

```go
Drop(in any, n int) any
```

从切片开头丢弃 n 个元素，返回剩余元素组成的新切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 源切片 |
| n | `int` | 从开头丢弃的元素个数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 丢弃后剩余的切片 |

**示例**

``````````````yak
// VARS: 丢弃开头 2 个元素
result = x.Drop([1, 2, 3, 4], 2)
// STDOUT: 打印结果
println(result)   // OUT: [3 4]
// assert: 剩余 2 个元素
assert len(result) == 2, "drop should remove the first n elements"
``````````````

---

### Equal {#equal}

```go
Equal(expected any, actual any) bool
```

判断两个对象是否相等(深度比较)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| expected | `any` | 期望值 |
| actual | `any` | 实际值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 两者是否相等 |

**示例**

``````````````yak
// VARS: 比较两个切片
result = x.Equal([1, 2], [1, 2])
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 不同内容不相等
assert x.Equal([1, 2], [1, 3]) == false, "different slices should not be equal"
``````````````

---

### Filter {#filter}

```go
Filter(i any, fc func(any) bool) any
```

遍历集合，仅保留回调函数返回 true 的元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待过滤的集合(切片/数组) |
| fc | `func(any) bool` | 过滤回调，接收元素返回布尔值，true 表示保留 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 由保留下来的元素组成的新切片 |

**示例**

``````````````yak
// VARS: 仅保留偶数
result = x.Filter([1, 2, 3, 4], func(e) { return e % 2 == 0 })
// STDOUT: 打印结果
println(result)   // OUT: [2 4]
// assert: 过滤后剩 2 个
assert len(result) == 2, "Filter should keep the two even numbers"
``````````````

---

### Find {#find}

```go
Find(i any, fc func(any) bool) any
```

遍历集合，返回第一个使回调函数返回 true 的元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待查找的集合(切片/数组) |
| fc | `func(any) bool` | 判定回调，接收元素返回布尔值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 第一个满足条件的元素，未找到返回 nil |

**示例**

``````````````yak
// VARS: 查找第一个大于 1 的元素
result = x.Find([1, 2, 3], func(e) { return e > 1 })
// STDOUT: 打印结果
println(result)   // OUT: 2
// assert: 锁定结论
assert result == 2, "Find should return the first element greater than 1"
``````````````

---

### Foreach {#foreach}

```go
Foreach(i any, fc func(any))
```

从前向后遍历集合，对每个元素执行回调函数(无返回值)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待遍历的集合(切片/数组) |
| fc | `func(any)` | 对每个元素执行的回调函数 |

**示例**

``````````````yak
// VARS: 遍历累加(用闭包收集结果)
sum = 0
x.Foreach([1, 2, 3], func(e) { sum += e })
// STDOUT: 打印累加结果
println(sum)   // OUT: 6
// assert: 锁定结论
assert sum == 6, "Foreach should visit every element"
``````````````

---

### ForeachRight {#foreachright}

```go
ForeachRight(i any, fc func(any))
```

从后向前遍历集合，对每个元素执行回调函数(无返回值)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待遍历的集合(切片/数组) |
| fc | `func(any)` | 对每个元素执行的回调函数 |

**示例**

``````````````yak
// VARS: 从右向左拼接元素
order = []
x.ForeachRight([1, 2, 3], func(e) { order = append(order, e) })
// STDOUT: 打印访问顺序
println(order)   // OUT: [3 2 1]
// assert: 第一个访问的是最后一个元素
assert order[0] == 3, "ForeachRight should visit from the tail"
``````````````

---

### GC {#gc}

```go
GC()
```

主动触发一次垃圾回收并尽量把空闲内存归还操作系统

**示例**

``````````````yak
// 主动触发一次垃圾回收(仅副作用，无返回值)
x.GC()
``````````````

---

### GCPercent {#gcpercent}

```go
GCPercent(percent int) int
```

设置 GC 触发阈值百分比并返回旧值（导出名为 x.GCPercent）

percent 表示相对上次 GC 后存活堆的增长百分比，越小 GC 越频繁；负值可关闭 GC

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| percent | `int` | 新的 GC 阈值百分比 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 设置前的旧阈值百分比 |

**示例**

``````````````yak
old = x.GCPercent(150)
println(typeof(old).String())   // OUT: int
assert typeof(old).String() == "int", "GCPercent should return the previous percent as int"
x.GCPercent(old)
``````````````

---

### Head {#head}

```go
Head(arr any) any
```

返回切片的第一个元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| arr | `any` | 源切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 切片的第一个元素 |

**示例**

``````````````yak
// VARS: 取第一个元素
result = x.Head([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: 1
// assert: 锁定结论
assert result == 1, "head should return the first element"
``````````````

---

### If {#if}

```go
If(i bool, a any, b any) any
```

三元条件选择，当条件为真时返回 a，否则返回 b

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `bool` | 条件布尔值 |
| a | `any` | 条件为真时返回的值 |
| b | `any` | 条件为假时返回的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 根据条件选择的值 |

**示例**

``````````````yak
// VARS: 条件为真时取第一个值
result = x.If(true, "a", "b")
// STDOUT: 打印结果
println(result)   // OUT: a
// assert: 条件为假时取第二个值
assert x.If(false, "a", "b") == "b", "If should pick the second value when false"
``````````````

---

### IndexOf {#indexof}

```go
IndexOf(in any, elem any) int
```

返回元素在切片中第一次出现的下标，未找到返回 -1

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 源切片 |
| elem | `any` | 要查找的元素 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 元素首次出现的下标，未找到为 -1 |

**示例**

``````````````yak
// VARS: 查找元素下标
result = x.IndexOf([1, 2, 3], 2)
// STDOUT: 打印下标
println(result)   // OUT: 1
// assert: 不存在的元素返回 -1
assert x.IndexOf([1, 2, 3], 9) == -1, "missing element should return -1"
``````````````

---

### Intersect {#intersect}

```go
Intersect(x any, y any) any
```

返回两个集合的交集(同时存在于两个集合中的元素)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `any` | 第一个集合 |
| y | `any` | 第二个集合 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 两个集合的交集 |

**示例**

``````````````yak
// VARS: 求两个切片的交集
result = x.Intersect([1, 2, 3], [2, 3, 4])
// STDOUT: 打印交集
println(result)   // OUT: [2 3]
// assert: 锁定结论
assert len(result) == 2, "intersection of the two slices has 2 elements"
``````````````

---

### IsSubset {#issubset}

```go
IsSubset(x any, y any) bool
```

判断集合 x 是否为集合 y 的子集

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `any` | 待判断的子集 |
| y | `any` | 父集合 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | x 是否为 y 的子集 |

**示例**

``````````````yak
// VARS: 判断子集关系
result = x.IsSubset([1, 2], [1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 锁定结论
assert result == true, "[1,2] is a subset of [1,2,3]"
``````````````

---

### Keys {#keys}

```go
Keys(out any) any
```

返回 map 的所有键或结构体的所有字段名组成的切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| out | `any` | map 或结构体 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 键名/字段名切片 |

**示例**

``````````````yak
// VARS: 取出 map 的键
result = x.Keys({"a": 1})
// STDOUT: 打印键
println(result)   // OUT: [a]
// assert: 单键 map 只有一个键
assert len(result) == 1, "single-key map should have one key"
``````````````

---

### Map {#map}

```go
Map(i any, fc funkGeneralFuncType) any
```

遍历集合中的每个元素，使用回调函数处理后返回新的切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待遍历的集合(切片/数组) |
| fc | `funkGeneralFuncType` | 处理每个元素的回调函数，接收元素返回新值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 由回调返回值组成的新切片 |

**示例**

``````````````yak
// VARS: 把每个元素翻倍
result = x.Map([1, 2, 3], func(e) { return e * 2 })
// STDOUT: 打印结果
println(result)   // OUT: [2 4 6]
// assert: 元素个数不变
assert len(result) == 3, "Map should keep element count"
``````````````

---

### Max {#max}

```go
Max(i any) any
```

返回数值或字符串切片中的最大值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 数值或字符串切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 切片中的最大元素 |

**示例**

``````````````yak
// VARS: 求切片最大值
result = x.Max([3, 1, 2])
// STDOUT: 打印最大值
println(result)   // OUT: 3
// assert: 锁定结论
assert result == 3, "max of 3,1,2 should be 3"
``````````````

---

### Min {#min}

```go
Min(i any) any
```

返回数值或字符串切片中的最小值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 数值或字符串切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 切片中的最小元素 |

**示例**

``````````````yak
// VARS: 求切片最小值
result = x.Min([3, 1, 2])
// STDOUT: 打印最小值
println(result)   // OUT: 1
// assert: 锁定结论
assert result == 1, "min of 3,1,2 should be 1"
``````````````

---

### NewEventWatcher {#neweventwatcher}

```go
NewEventWatcher(ctx context.Context, triggerTime time.Duration, triggerCount int) *utils.EventWatcherManager
```

创建一个事件观察器，按时间间隔或累计事件数触发回调（导出名为 x.NewEventWatcher）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制观察器生命周期 |
| triggerTime | `time.Duration` | 触发的时间间隔 |
| triggerCount | `int` | 触发的累计事件数阈值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*utils.EventWatcherManager` | 事件观察器管理对象 |

**示例**

``````````````yak
d = time.ParseDuration("1s")~
w = x.NewEventWatcher(context.Background(), d, 10)
assert w != nil, "event watcher should be created"
``````````````

---

### NewReducer {#newreducer}

```go
NewReducer(reduceLimit int, handle reducer.ReduceFunction) *reducer.Reducer
```

创建一个归并器，超过 reduceLimit 条数据时用 handle 把较旧的数据合并（导出名为 x.NewReducer）

常用于把无限增长的历史数据压缩到有限规模

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| reduceLimit | `int` | 触发归并的数据条数阈值 |
| handle | `reducer.ReduceFunction` | 归并函数，接收一组字符串并返回合并后的单条字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*reducer.Reducer` | 归并器对象，可调用 Push 推入数据、GetData 获取当前数据 |

**示例**

``````````````yak
r = x.NewReducer(2, items => str.Join(items, ","))
r.Push("a"); r.Push("b"); r.Push("c")
data = r.GetData()
println(data)
assert len(data) >= 1, "reducer should keep reduced data"
``````````````

---

### Range {#range}

```go
Range(i int) []any
```

创建一个长度为 i 的空接口切片，常用于配合 for-range 生成定长循环

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 切片长度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]any` | 长度为 i 的空接口切片 |

**示例**

``````````````yak
// VARS: 创建长度为 3 的切片
result = x.Range(3)
// STDOUT: 打印长度
println(len(result))   // OUT: 3
// assert: 锁定结论
assert len(result) == 3, "Range should create a slice of the given length"
``````````````

---

### Reduce {#reduce}

```go
Reduce(i any, fc funkGeneralReduceFuncType, acc any) any
```

对集合中的元素从初始累加器开始依次归并为单一结果

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待归并的集合(切片/数组) |
| fc | `funkGeneralReduceFuncType` | 归并回调，接收累加器与当前元素返回新的累加器 |
| acc | `any` | 初始累加器值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 归并后的最终结果 |

**示例**

``````````````yak
// VARS: 从 0 开始累加求和
result = x.Reduce([1, 2, 3], func(acc, e) { return acc + e }, 0)
// STDOUT: 打印结果
println(result)   // OUT: 6
// assert: 锁定结论
assert result == 6, "Reduce should sum the slice to 6"
``````````````

---

### RemoveRepeat {#removerepeat}

```go
RemoveRepeat(in any) any
```

对切片去重，返回仅保留首次出现元素的新切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 待去重的切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 去重后的切片 |

**示例**

``````````````yak
// VARS: 去除重复元素
result = x.RemoveRepeat([1, 1, 2, 3, 3])
// STDOUT: 打印结果
println(result)   // OUT: [1 2 3]
// assert: 去重后剩 3 个
assert len(result) == 3, "duplicates should be removed"
``````````````

---

### Retry {#retry}

```go
Retry(i int, handler func() bool)
```

反复调用 handler，直到 handler 返回 false 或达到最大次数（导出名为 x.Retry）

handler 返回 true 表示&#34;继续重试&#34;，返回 false 表示&#34;停止&#34;

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 最大重试次数 |
| handler | `func() bool` | 每次重试调用的函数，返回 true 继续、false 停止 |

**示例**

``````````````yak
count = 0
x.Retry(10, () => { count++; return count < 3 })
println(count)   // OUT: 3
assert count == 3, "Retry keeps calling while handler returns true"
``````````````

---

### Reverse {#reverse}

```go
Reverse(in any) any
```

反转切片中元素的顺序，返回反转后的新切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 待反转的切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 反转顺序后的切片 |

**示例**

``````````````yak
// VARS: 反转切片
result = x.Reverse([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: [3 2 1]
// assert: 首元素变为原末元素
assert result[0] == 3, "reverse should put last element first"
``````````````

---

### Shift {#shift}

```go
Shift(i any) any
```

返回去掉切片第一个元素后的新切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 源切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 去掉首元素后的切片 |

**示例**

``````````````yak
// VARS: 去掉第一个元素
result = x.Shift([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: [2 3]
// assert: 锁定结论
assert len(result) == 2, "Shift should drop the first element"
``````````````

---

### Shuffle {#shuffle}

```go
Shuffle(in any) any
```

随机打乱切片中元素的顺序，返回打乱后的新切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 待打乱的切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 打乱顺序后的切片(元素不变) |

**示例**

``````````````yak
// VARS: 随机打乱(每次顺序不同)
result = x.Shuffle([1, 2, 3, 4, 5])
// assert: 元素个数不变
assert len(result) == 5, "shuffle should preserve length"
``````````````

---

### Sort {#sort}

```go
Sort(x any, less func(i, j int) bool)
```

使用自定义的 less 比较函数对切片做稳定原地排序（导出名为 x.Sort）

less(i, j) 返回 true 表示下标 i 的元素应排在下标 j 之前

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `any` | 待排序的切片(原地修改) |
| less | `func(i, j int) bool` | 比较函数，接收两个下标，返回是否 i 应排在 j 前 |

**示例**

``````````````yak
arr = [3, 1, 2]
x.Sort(arr, (i, j) => arr[i] < arr[j])
println(arr)   // OUT: [1 2 3]
assert arr[0] == 1 && arr[2] == 3, "Sort should sort the slice ascending in place"
``````````````

---

### Subtract {#subtract}

```go
Subtract(x any, y any) any
```

返回集合 x 中存在但集合 y 中不存在的元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `any` | 源集合 |
| y | `any` | 要排除的集合 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 仅属于 x 而不属于 y 的元素集合 |

**示例**

``````````````yak
// VARS: 求差集
result = x.Subtract([1, 2, 3, 4], [2, 4])
// STDOUT: 打印结果
println(result)   // OUT: [1 3]
// assert: 锁定结论
assert len(result) == 2, "Subtract should keep elements only in x"
``````````````

---

### Sum {#sum}

```go
Sum(arr any) float64
```

计算切片中所有数值元素之和

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| arr | `any` | 数值切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 所有元素之和 |

**示例**

``````````````yak
// VARS: 求和
result = x.Sum([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: 6
// assert: 锁定结论
assert result == 6, "sum of 1,2,3 should be 6"
``````````````

---

### Tail {#tail}

```go
Tail(arr any) any
```

返回切片中除第一个元素外的所有元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| arr | `any` | 源切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 除首元素外的切片 |

**示例**

``````````````yak
// VARS: 取除首元素外的部分
result = x.Tail([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: [2 3]
// assert: 锁定结论
assert len(result) == 2, "tail should drop the first element"
``````````````

---

### ToFloat64 {#tofloat64}

```go
ToFloat64(x any) (float64, bool)
```

将任意数值类型转换为 float64

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `any` | 待转换的数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 转换后的 float64 值 |
| r2 | `bool` | 是否转换成功 |

**示例**

``````````````yak
// VARS: 转换数值
v, ok = x.ToFloat64(3)
// STDOUT: 打印转换结果
println(v)   // OUT: 3
// assert: 转换成功
assert ok == true, "integer 3 should convert to float64"
``````````````

---

### ToMap {#tomap}

```go
ToMap(in any, pivot string) any
```

将一个结构体切片转换为以指定字段值为键的 map

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 结构体切片 |
| pivot | `string` | 作为键的结构体字段名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 以 pivot 字段值为键、结构体为值的 map |

**示例**

``````````````yak
// 无法本地验证: ToMap 需要结构体切片作为输入, yak 无法内联构造结构体, 需用真实数据
// 将结构体切片按指定字段转为 map(键为该字段的值, 值为对应结构体)
users = getUsersFromSomewhere() // 假设返回结构体切片, 每个元素含 Id 字段
m = x.ToMap(users, "Id") // map: Id 值 -> 结构体
``````````````

---

### Values {#values}

```go
Values(out any) any
```

返回 map 的所有值或结构体的所有字段值组成的切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| out | `any` | map 或结构体 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 值切片 |

**示例**

``````````````yak
// VARS: 取出 map 的值
result = x.Values({"a": 1})
// STDOUT: 打印值
println(result)   // OUT: [1]
// assert: 单键 map 只有一个值
assert len(result) == 1, "single-key map should have one value"
``````````````

---

### WaitConnect {#waitconnect}

```go
WaitConnect(addr string, timeout float64) error
```

等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址（host:port） |
| timeout | `float64` | 最长等待时间（秒） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（超时或连接失败时非空） |

**示例**

``````````````yak
timeout, _ = time.ParseDuration("1m")
ctx, cancel = context.WithTimeout(context.New(), timeout)

	go func() {
	    err = tcp.Serve("127.0.0.1", 8888, tcp.serverCallback(func (conn) {
	    conn.Send("hello world")
	    conn.Close()
	}), tcp.serverContext(ctx))

	    die(err)
	}()

os.WaitConnect("127.0.0.1:8888", 5)~ // 等待tcp服务器启动
conn = tcp.Connect("127.0.0.1", 8888)~
bytes = conn.Recv()~
println(string(bytes))
``````````````

---

### Zip {#zip}

```go
Zip(slice1 any, slice2 any) []Tuple
```

将两个切片按下标两两组合成元组列表，长度取较短切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| slice1 | `any` | 第一个切片 |
| slice2 | `any` | 第二个切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]Tuple` | 元组列表，每个元组包含两个切片中同下标的元素 |

**示例**

``````````````yak
// VARS: 按下标配对
result = x.Zip([1, 2], ["a", "b"])
// assert: 配对数量为较短切片长度
assert len(result) == 2, "zip should pair elements by index"
``````````````

---

## 可变参数函数详情

### All {#all}

```go
All(objs ...any) bool
```

判断给定的多个值是否全部非空(真值)

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| objs | `...any` | 一个或多个待判断的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否全部为非空(真值) |

**示例**

``````````````yak
// VARS: 判断是否全为真值
result = x.All(true, true)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 含假值时返回 false
assert x.All(true, false) == false, "one empty value makes it false"
``````````````

---

### Any {#any}

```go
Any(objs ...any) bool
```

判断给定的多个值中是否至少有一个非空(真值)

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| objs | `...any` | 一个或多个待判断的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否至少有一个为非空(真值) |

**示例**

``````````````yak
// VARS: 判断是否存在真值
result = x.Any(false, true)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 全为假时返回 false
assert x.Any(false, false) == false, "all-empty input should be false"
``````````````

---

### Every {#every}

```go
Every(in any, elements ...any) bool
```

判断给定的所有元素是否都存在于集合中

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 源集合 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| elements | `...any` | 待检查的一个或多个元素 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否所有元素都存在于集合中 |

**示例**

``````````````yak
// VARS: 判断是否全部存在
result = x.Every([1, 2, 3], 1, 2)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 含缺失元素时返回 false
assert x.Every([1, 2, 3], 1, 9) == false, "9 is missing so not every element is present"
``````````````

---

### Some {#some}

```go
Some(in any, elements ...any) bool
```

判断给定的元素中是否至少有一个存在于集合中

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 源集合 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| elements | `...any` | 待检查的一个或多个元素 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否至少有一个元素存在于集合中 |

**示例**

``````````````yak
// VARS: 判断是否存在任意一个
result = x.Some([1, 2, 3], 9, 2)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 都不存在时返回 false
assert x.Some([1, 2, 3], 8, 9) == false, "neither 8 nor 9 is present"
``````````````

---

