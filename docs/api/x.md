# x

|函数名|函数描述/介绍|
|:------|:--------|
| [x.All](#all) |All 判断给定的多个值是否全部非空(真值) 参数: - objs: 一个或多个待判断的值 返回值: - 是否全部为非空(真值)|
| [x.Any](#any) |Any 判断给定的多个值中是否至少有一个非空(真值) 参数: - objs: 一个或多个待判断的值 返回值: - 是否至少有一个为非空(真值)|
| [x.Chunk](#chunk) |Chunk 将切片按指定大小分组，最后一组可能不足 size 个元素 参数: - arr: 待分组的切片 - size: 每组的元素个数 返回值: - 分组后的二维切片|
| [x.Contains](#contains) |Contains 判断元素是否存在于集合(切片/数组/map/字符串)中 参数: - in: 源集合 - elem: 要查找的元素 返回值: - 元素是否存在|
| [x.ConvertToMap](#converttomap) |ConvertToMap 将传入的对象转换为 map[string][]string 结构，常用于归一化键值数据 参数: - i: 待转换的对象(map 或结构体) 返回值: - 转换后的 map[string][]string|
| [x.Difference](#difference) |Difference 返回两个集合的差异，分别是仅属于 x 的元素和仅属于 y 的元素 参数: - x: 第一个集合 - y: 第二个集合 返回值: - 仅属于 x 的元素集合 - 仅属于 y 的元素集合|
| [x.Drop](#drop) |Drop 从切片开头丢弃 n 个元素，返回剩余元素组成的新切片 参数: - in: 源切片 - n: 从开头丢弃的元素个数 返回值: - 丢弃后剩余的切片|
| [x.Equal](#equal) |Equal 判断两个对象是否相等(深度比较) 参数: - expected: 期望值 - actual: 实际值 返回值: - 两者是否相等|
| [x.Every](#every) |Every 判断给定的所有元素是否都存在于集合中 参数: - in: 源集合 - elements: 待检查的一个或多个元素 返回值: - 是否所有元素都存在于集合中|
| [x.Filter](#filter) |Filter 遍历集合，仅保留回调函数返回 true 的元素 参数: - i: 待过滤的集合(切片/数组) - fc: 过滤回调，接收元素返回布尔值，true 表示保留 返回值: - 由保留下来的元素组成的新切片|
| [x.Find](#find) |Find 遍历集合，返回第一个使回调函数返回 true 的元素 参数: - i: 待查找的集合(切片/数组) - fc: 判定回调，接收元素返回布尔值 返回值: - 第一个满足条件的元素，未找到返回 nil|
| [x.Foreach](#foreach) |Foreach 从前向后遍历集合，对每个元素执行回调函数(无返回值) 参数: - i: 待遍历的集合(切片/数组) - fc: 对每个元素执行的回调函数 返回值: - 无|
| [x.ForeachRight](#foreachright) |ForeachRight 从后向前遍历集合，对每个元素执行回调函数(无返回值) 参数: - i: 待遍历的集合(切片/数组) - fc: 对每个元素执行的回调函数 返回值: - 无|
| [x.GC](#gc) |GC 主动触发一次垃圾回收并尽量把空闲内存归还操作系统 返回值: - 无|
| [x.GCPercent](#gcpercent) |funkGCPercent 设置 GC 触发阈值百分比并返回旧值（导出名为 x.GCPercent） percent 表示相对上次 GC 后存活堆的增长百分比，越小 GC 越频繁；负值可关闭 GC 参数: - percent: 新的 GC 阈值百分比 返回值: - 设置前的旧阈值百分比|
| [x.Head](#head) |Head 返回切片的第一个元素 参数: - arr: 源切片 返回值: - 切片的第一个元素|
| [x.If](#if) |If 三元条件选择，当条件为真时返回 a，否则返回 b 参数: - i: 条件布尔值 - a: 条件为真时返回的值 - b: 条件为假时返回的值 返回值: - 根据条件选择的值|
| [x.IndexOf](#indexof) |IndexOf 返回元素在切片中第一次出现的下标，未找到返回 -1 参数: - in: 源切片 - elem: 要查找的元素 返回值: - 元素首次出现的下标，未找到为 -1|
| [x.Intersect](#intersect) |Intersect 返回两个集合的交集(同时存在于两个集合中的元素) 参数: - x: 第一个集合 - y: 第二个集合 返回值: - 两个集合的交集|
| [x.IsSubset](#issubset) |IsSubset 判断集合 x 是否为集合 y 的子集 参数: - x: 待判断的子集 - y: 父集合 返回值: - x 是否为 y 的子集|
| [x.Keys](#keys) |Keys 返回 map 的所有键或结构体的所有字段名组成的切片 参数: - out: map 或结构体 返回值: - 键名/字段名切片|
| [x.Map](#map) |Map 遍历集合中的每个元素，使用回调函数处理后返回新的切片 参数: - i: 待遍历的集合(切片/数组) - fc: 处理每个元素的回调函数，接收元素返回新值 返回值: - 由回调返回值组成的新切片|
| [x.Max](#max) |Max 返回数值或字符串切片中的最大值 参数: - i: 数值或字符串切片 返回值: - 切片中的最大元素|
| [x.Min](#min) |Min 返回数值或字符串切片中的最小值 参数: - i: 数值或字符串切片 返回值: - 切片中的最小元素|
| [x.NewEventWatcher](#neweventwatcher) |funkNewEventWatcher 创建一个事件观察器，按时间间隔或累计事件数触发回调（导出名为 x.NewEventWatcher） 参数: - ctx: 上下文，用于控制观察器生命周期 - triggerTime: 触发的时间间隔 - triggerCount: 触发的累计事件数阈值 返回值...|
| [x.NewReducer](#newreducer) |funkNewReducer 创建一个归并器，超过 reduceLimit 条数据时用 handle 把较旧的数据合并（导出名为 x.NewReducer） 常用于把无限增长的历史数据压缩到有限规模 参数: - reduceLimit: 触发归并的数据条数阈值 - handle: 归并函数，接收一组...|
| [x.Range](#range) |Range 创建一个长度为 i 的空接口切片，常用于配合 for-range 生成定长循环 参数: - i: 切片长度 返回值: - 长度为 i 的空接口切片|
| [x.Reduce](#reduce) |Reduce 对集合中的元素从初始累加器开始依次归并为单一结果 参数: - i: 待归并的集合(切片/数组) - fc: 归并回调，接收累加器与当前元素返回新的累加器 - acc: 初始累加器值 返回值: - 归并后的最终结果|
| [x.RemoveRepeat](#removerepeat) |RemoveRepeat 对切片去重，返回仅保留首次出现元素的新切片 参数: - in: 待去重的切片 返回值: - 去重后的切片|
| [x.Retry](#retry) |funkRetry 反复调用 handler，直到 handler 返回 false 或达到最大次数（导出名为 x.Retry） handler 返回 true 表示&#34;继续重试&#34;，返回 false 表示&#34;停止&#34; 参数: - i: 最大重试次数 - handler: 每次重试调用的函数，返回 true...|
| [x.Reverse](#reverse) |Reverse 反转切片中元素的顺序，返回反转后的新切片 参数: - in: 待反转的切片 返回值: - 反转顺序后的切片|
| [x.Shift](#shift) |Shift 返回去掉切片第一个元素后的新切片 参数: - i: 源切片 返回值: - 去掉首元素后的切片|
| [x.Shuffle](#shuffle) |Shuffle 随机打乱切片中元素的顺序，返回打乱后的新切片 参数: - in: 待打乱的切片 返回值: - 打乱顺序后的切片(元素不变)|
| [x.Some](#some) |Some 判断给定的元素中是否至少有一个存在于集合中 参数: - in: 源集合 - elements: 待检查的一个或多个元素 返回值: - 是否至少有一个元素存在于集合中|
| [x.Sort](#sort) |funkSort 使用自定义的 less 比较函数对切片做稳定原地排序（导出名为 x.Sort） less(i, j) 返回 true 表示下标 i 的元素应排在下标 j 之前 参数: - x: 待排序的切片(原地修改) - less: 比较函数，接收两个下标，返回是否 i 应排在 j 前|
| [x.Subtract](#subtract) |Subtract 返回集合 x 中存在但集合 y 中不存在的元素 参数: - x: 源集合 - y: 要排除的集合 返回值: - 仅属于 x 而不属于 y 的元素集合|
| [x.Sum](#sum) |Sum 计算切片中所有数值元素之和 参数: - arr: 数值切片 返回值: - 所有元素之和|
| [x.Tail](#tail) |Tail 返回切片中除第一个元素外的所有元素 参数: - arr: 源切片 返回值: - 除首元素外的切片|
| [x.ToFloat64](#tofloat64) |ToFloat64 将任意数值类型转换为 float64 参数: - x: 待转换的数值 返回值: - 转换后的 float64 值 - 是否转换成功|
| [x.ToMap](#tomap) |ToMap 将一个结构体切片转换为以指定字段值为键的 map 参数: - in: 结构体切片 - pivot: 作为键的结构体字段名 返回值: - 以 pivot 字段值为键、结构体为值的 map|
| [x.Values](#values) |Values 返回 map 的所有值或结构体的所有字段值组成的切片 参数: - out: map 或结构体 返回值: - 值切片|
| [x.WaitConnect](#waitconnect) |WaitConnect 等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动 参数: - addr: 目标地址（host:port） - timeout: 最长等待时间（秒） 返回值: - 错误信息（超时或连接失败时非空）|
| [x.Zip](#zip) |Zip 将两个切片按下标两两组合成元组列表，长度取较短切片 参数: - slice1: 第一个切片 - slice2: 第二个切片 返回值: - 元组列表，每个元组包含两个切片中同下标的元素|


## 函数定义
### All

#### 详细描述
All 判断给定的多个值是否全部非空(真值)

参数:

  - objs: 一个或多个待判断的值



返回值:

  - 是否全部为非空(真值)




Example:

``````````````yak
// VARS: 判断是否全为真值
result = x.All(true, true)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 含假值时返回 false
assert x.All(true, false) == false, "one empty value makes it false"
``````````````


#### 定义

`All(objs ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| objs | `...any` | 一个或多个待判断的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否全部为非空(真值) |


### Any

#### 详细描述
Any 判断给定的多个值中是否至少有一个非空(真值)

参数:

  - objs: 一个或多个待判断的值



返回值:

  - 是否至少有一个为非空(真值)




Example:

``````````````yak
// VARS: 判断是否存在真值
result = x.Any(false, true)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 全为假时返回 false
assert x.Any(false, false) == false, "all-empty input should be false"
``````````````


#### 定义

`Any(objs ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| objs | `...any` | 一个或多个待判断的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否至少有一个为非空(真值) |


### Chunk

#### 详细描述
Chunk 将切片按指定大小分组，最后一组可能不足 size 个元素

参数:

  - arr: 待分组的切片

  - size: 每组的元素个数



返回值:

  - 分组后的二维切片




Example:

``````````````yak
// VARS: 按每组 2 个分组
result = x.Chunk([1, 2, 3, 4, 5], 2)
// assert: 5 个元素分成 3 组
assert len(result) == 3, "5 elements in groups of 2 yields 3 chunks"
``````````````


#### 定义

`Chunk(arr any, size int) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` | 待分组的切片 |
| size | `int` | 每组的元素个数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 分组后的二维切片 |


### Contains

#### 详细描述
Contains 判断元素是否存在于集合(切片/数组/map/字符串)中

参数:

  - in: 源集合

  - elem: 要查找的元素



返回值:

  - 元素是否存在




Example:

``````````````yak
// VARS: 判断元素是否存在
result = x.Contains([1, 2, 3], 2)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 不存在的元素返回 false
assert x.Contains([1, 2, 3], 9) == false, "9 is not in the slice"
``````````````


#### 定义

`Contains(in any, elem any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 源集合 |
| elem | `any` | 要查找的元素 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 元素是否存在 |


### ConvertToMap

#### 详细描述
ConvertToMap 将传入的对象转换为 map[string][]string 结构，常用于归一化键值数据

参数:

  - i: 待转换的对象(map 或结构体)



返回值:

  - 转换后的 map[string][]string




Example:

``````````````yak
// VARS: 转换为字符串列表映射
m = x.ConvertToMap({"k": "v"})
// STDOUT: 打印键对应的值列表
println(m["k"])   // OUT: [v]
// assert: 取出第一个值
assert m["k"][0] == "v", "ConvertToMap should keep the value under its key"
``````````````


#### 定义

`ConvertToMap(i any) map[string][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待转换的对象(map 或结构体) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string][]string` | 转换后的 map[string][]string |


### Difference

#### 详细描述
Difference 返回两个集合的差异，分别是仅属于 x 的元素和仅属于 y 的元素

参数:

  - x: 第一个集合

  - y: 第二个集合



返回值:

  - 仅属于 x 的元素集合

  - 仅属于 y 的元素集合




Example:

``````````````yak
// VARS: 求双向差异
left, right = x.Difference([1, 2, 3, 4], [2, 4])
// STDOUT: 打印仅属于第一个集合的元素
println(left)   // OUT: [1 3]
// assert: 第二个集合没有独有元素
assert len(right) == 0, "no element is unique to the second set"
``````````````


#### 定义

`Difference(x any, y any) (any, any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` | 第一个集合 |
| y | `any` | 第二个集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 仅属于 x 的元素集合 |
| r2 | `any` | 仅属于 y 的元素集合 |


### Drop

#### 详细描述
Drop 从切片开头丢弃 n 个元素，返回剩余元素组成的新切片

参数:

  - in: 源切片

  - n: 从开头丢弃的元素个数



返回值:

  - 丢弃后剩余的切片




Example:

``````````````yak
// VARS: 丢弃开头 2 个元素
result = x.Drop([1, 2, 3, 4], 2)
// STDOUT: 打印结果
println(result)   // OUT: [3 4]
// assert: 剩余 2 个元素
assert len(result) == 2, "drop should remove the first n elements"
``````````````


#### 定义

`Drop(in any, n int) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 源切片 |
| n | `int` | 从开头丢弃的元素个数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 丢弃后剩余的切片 |


### Equal

#### 详细描述
Equal 判断两个对象是否相等(深度比较)

参数:

  - expected: 期望值

  - actual: 实际值



返回值:

  - 两者是否相等




Example:

``````````````yak
// VARS: 比较两个切片
result = x.Equal([1, 2], [1, 2])
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 不同内容不相等
assert x.Equal([1, 2], [1, 3]) == false, "different slices should not be equal"
``````````````


#### 定义

`Equal(expected any, actual any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expected | `any` | 期望值 |
| actual | `any` | 实际值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 两者是否相等 |


### Every

#### 详细描述
Every 判断给定的所有元素是否都存在于集合中

参数:

  - in: 源集合

  - elements: 待检查的一个或多个元素



返回值:

  - 是否所有元素都存在于集合中




Example:

``````````````yak
// VARS: 判断是否全部存在
result = x.Every([1, 2, 3], 1, 2)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 含缺失元素时返回 false
assert x.Every([1, 2, 3], 1, 9) == false, "9 is missing so not every element is present"
``````````````


#### 定义

`Every(in any, elements ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 源集合 |
| elements | `...any` | 待检查的一个或多个元素 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否所有元素都存在于集合中 |


### Filter

#### 详细描述
Filter 遍历集合，仅保留回调函数返回 true 的元素

参数:

  - i: 待过滤的集合(切片/数组)

  - fc: 过滤回调，接收元素返回布尔值，true 表示保留



返回值:

  - 由保留下来的元素组成的新切片




Example:

``````````````yak
// VARS: 仅保留偶数
result = x.Filter([1, 2, 3, 4], func(e) { return e % 2 == 0 })
// STDOUT: 打印结果
println(result)   // OUT: [2 4]
// assert: 过滤后剩 2 个
assert len(result) == 2, "Filter should keep the two even numbers"
``````````````


#### 定义

`Filter(i any, fc func(any) bool) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待过滤的集合(切片/数组) |
| fc | `func(any) bool` | 过滤回调，接收元素返回布尔值，true 表示保留 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 由保留下来的元素组成的新切片 |


### Find

#### 详细描述
Find 遍历集合，返回第一个使回调函数返回 true 的元素

参数:

  - i: 待查找的集合(切片/数组)

  - fc: 判定回调，接收元素返回布尔值



返回值:

  - 第一个满足条件的元素，未找到返回 nil




Example:

``````````````yak
// VARS: 查找第一个大于 1 的元素
result = x.Find([1, 2, 3], func(e) { return e > 1 })
// STDOUT: 打印结果
println(result)   // OUT: 2
// assert: 锁定结论
assert result == 2, "Find should return the first element greater than 1"
``````````````


#### 定义

`Find(i any, fc func(any) bool) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待查找的集合(切片/数组) |
| fc | `func(any) bool` | 判定回调，接收元素返回布尔值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 第一个满足条件的元素，未找到返回 nil |


### Foreach

#### 详细描述
Foreach 从前向后遍历集合，对每个元素执行回调函数(无返回值)

参数:

  - i: 待遍历的集合(切片/数组)

  - fc: 对每个元素执行的回调函数



返回值:

  - 无




Example:

``````````````yak
// VARS: 遍历累加(用闭包收集结果)
sum = 0
x.Foreach([1, 2, 3], func(e) { sum += e })
// STDOUT: 打印累加结果
println(sum)   // OUT: 6
// assert: 锁定结论
assert sum == 6, "Foreach should visit every element"
``````````````


#### 定义

`Foreach(i any, fc func(any))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待遍历的集合(切片/数组) |
| fc | `func(any)` | 对每个元素执行的回调函数 |


### ForeachRight

#### 详细描述
ForeachRight 从后向前遍历集合，对每个元素执行回调函数(无返回值)

参数:

  - i: 待遍历的集合(切片/数组)

  - fc: 对每个元素执行的回调函数



返回值:

  - 无




Example:

``````````````yak
// VARS: 从右向左拼接元素
order = []
x.ForeachRight([1, 2, 3], func(e) { order = append(order, e) })
// STDOUT: 打印访问顺序
println(order)   // OUT: [3 2 1]
// assert: 第一个访问的是最后一个元素
assert order[0] == 3, "ForeachRight should visit from the tail"
``````````````


#### 定义

`ForeachRight(i any, fc func(any))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待遍历的集合(切片/数组) |
| fc | `func(any)` | 对每个元素执行的回调函数 |


### GC

#### 详细描述
GC 主动触发一次垃圾回收并尽量把空闲内存归还操作系统

返回值:

  - 无




Example:

``````````````yak
// 主动触发一次垃圾回收(仅副作用，无返回值)
x.GC()
``````````````


#### 定义

`GC()`


### GCPercent

#### 详细描述
funkGCPercent 设置 GC 触发阈值百分比并返回旧值（导出名为 x.GCPercent）

percent 表示相对上次 GC 后存活堆的增长百分比，越小 GC 越频繁；负值可关闭 GC



参数:

  - percent: 新的 GC 阈值百分比



返回值:

  - 设置前的旧阈值百分比




Example:

``````````````yak
old = x.GCPercent(150)
println(typeof(old).String())   // OUT: int
assert typeof(old).String() == "int", "GCPercent should return the previous percent as int"
x.GCPercent(old)
``````````````


#### 定义

`GCPercent(percent int) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| percent | `int` | 新的 GC 阈值百分比 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 设置前的旧阈值百分比 |


### Head

#### 详细描述
Head 返回切片的第一个元素

参数:

  - arr: 源切片



返回值:

  - 切片的第一个元素




Example:

``````````````yak
// VARS: 取第一个元素
result = x.Head([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: 1
// assert: 锁定结论
assert result == 1, "head should return the first element"
``````````````


#### 定义

`Head(arr any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` | 源切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 切片的第一个元素 |


### If

#### 详细描述
If 三元条件选择，当条件为真时返回 a，否则返回 b

参数:

  - i: 条件布尔值

  - a: 条件为真时返回的值

  - b: 条件为假时返回的值



返回值:

  - 根据条件选择的值




Example:

``````````````yak
// VARS: 条件为真时取第一个值
result = x.If(true, "a", "b")
// STDOUT: 打印结果
println(result)   // OUT: a
// assert: 条件为假时取第二个值
assert x.If(false, "a", "b") == "b", "If should pick the second value when false"
``````````````


#### 定义

`If(i bool, a any, b any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 条件布尔值 |
| a | `any` | 条件为真时返回的值 |
| b | `any` | 条件为假时返回的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 根据条件选择的值 |


### IndexOf

#### 详细描述
IndexOf 返回元素在切片中第一次出现的下标，未找到返回 -1

参数:

  - in: 源切片

  - elem: 要查找的元素



返回值:

  - 元素首次出现的下标，未找到为 -1




Example:

``````````````yak
// VARS: 查找元素下标
result = x.IndexOf([1, 2, 3], 2)
// STDOUT: 打印下标
println(result)   // OUT: 1
// assert: 不存在的元素返回 -1
assert x.IndexOf([1, 2, 3], 9) == -1, "missing element should return -1"
``````````````


#### 定义

`IndexOf(in any, elem any) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 源切片 |
| elem | `any` | 要查找的元素 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 元素首次出现的下标，未找到为 -1 |


### Intersect

#### 详细描述
Intersect 返回两个集合的交集(同时存在于两个集合中的元素)

参数:

  - x: 第一个集合

  - y: 第二个集合



返回值:

  - 两个集合的交集




Example:

``````````````yak
// VARS: 求两个切片的交集
result = x.Intersect([1, 2, 3], [2, 3, 4])
// STDOUT: 打印交集
println(result)   // OUT: [2 3]
// assert: 锁定结论
assert len(result) == 2, "intersection of the two slices has 2 elements"
``````````````


#### 定义

`Intersect(x any, y any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` | 第一个集合 |
| y | `any` | 第二个集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 两个集合的交集 |


### IsSubset

#### 详细描述
IsSubset 判断集合 x 是否为集合 y 的子集

参数:

  - x: 待判断的子集

  - y: 父集合



返回值:

  - x 是否为 y 的子集




Example:

``````````````yak
// VARS: 判断子集关系
result = x.IsSubset([1, 2], [1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 锁定结论
assert result == true, "[1,2] is a subset of [1,2,3]"
``````````````


#### 定义

`IsSubset(x any, y any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` | 待判断的子集 |
| y | `any` | 父集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | x 是否为 y 的子集 |


### Keys

#### 详细描述
Keys 返回 map 的所有键或结构体的所有字段名组成的切片

参数:

  - out: map 或结构体



返回值:

  - 键名/字段名切片




Example:

``````````````yak
// VARS: 取出 map 的键
result = x.Keys({"a": 1})
// STDOUT: 打印键
println(result)   // OUT: [a]
// assert: 单键 map 只有一个键
assert len(result) == 1, "single-key map should have one key"
``````````````


#### 定义

`Keys(out any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| out | `any` | map 或结构体 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 键名/字段名切片 |


### Map

#### 详细描述
Map 遍历集合中的每个元素，使用回调函数处理后返回新的切片

参数:

  - i: 待遍历的集合(切片/数组)

  - fc: 处理每个元素的回调函数，接收元素返回新值



返回值:

  - 由回调返回值组成的新切片




Example:

``````````````yak
// VARS: 把每个元素翻倍
result = x.Map([1, 2, 3], func(e) { return e * 2 })
// STDOUT: 打印结果
println(result)   // OUT: [2 4 6]
// assert: 元素个数不变
assert len(result) == 3, "Map should keep element count"
``````````````


#### 定义

`Map(i any, fc funkGeneralFuncType) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待遍历的集合(切片/数组) |
| fc | `funkGeneralFuncType` | 处理每个元素的回调函数，接收元素返回新值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 由回调返回值组成的新切片 |


### Max

#### 详细描述
Max 返回数值或字符串切片中的最大值

参数:

  - i: 数值或字符串切片



返回值:

  - 切片中的最大元素




Example:

``````````````yak
// VARS: 求切片最大值
result = x.Max([3, 1, 2])
// STDOUT: 打印最大值
println(result)   // OUT: 3
// assert: 锁定结论
assert result == 3, "max of 3,1,2 should be 3"
``````````````


#### 定义

`Max(i any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 数值或字符串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 切片中的最大元素 |


### Min

#### 详细描述
Min 返回数值或字符串切片中的最小值

参数:

  - i: 数值或字符串切片



返回值:

  - 切片中的最小元素




Example:

``````````````yak
// VARS: 求切片最小值
result = x.Min([3, 1, 2])
// STDOUT: 打印最小值
println(result)   // OUT: 1
// assert: 锁定结论
assert result == 1, "min of 3,1,2 should be 1"
``````````````


#### 定义

`Min(i any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 数值或字符串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 切片中的最小元素 |


### NewEventWatcher

#### 详细描述
funkNewEventWatcher 创建一个事件观察器，按时间间隔或累计事件数触发回调（导出名为 x.NewEventWatcher）



参数:

  - ctx: 上下文，用于控制观察器生命周期

  - triggerTime: 触发的时间间隔

  - triggerCount: 触发的累计事件数阈值



返回值:

  - 事件观察器管理对象




Example:

``````````````yak
d = time.ParseDuration("1s")~
w = x.NewEventWatcher(context.Background(), d, 10)
assert w != nil, "event watcher should be created"
``````````````


#### 定义

`NewEventWatcher(ctx context.Context, triggerTime time.Duration, triggerCount int) *utils.EventWatcherManager`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制观察器生命周期 |
| triggerTime | `time.Duration` | 触发的时间间隔 |
| triggerCount | `int` | 触发的累计事件数阈值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*utils.EventWatcherManager` | 事件观察器管理对象 |


### NewReducer

#### 详细描述
funkNewReducer 创建一个归并器，超过 reduceLimit 条数据时用 handle 把较旧的数据合并（导出名为 x.NewReducer）

常用于把无限增长的历史数据压缩到有限规模



参数:

  - reduceLimit: 触发归并的数据条数阈值

  - handle: 归并函数，接收一组字符串并返回合并后的单条字符串



返回值:

  - 归并器对象，可调用 Push 推入数据、GetData 获取当前数据




Example:

``````````````yak
r = x.NewReducer(2, items => str.Join(items, ","))
r.Push("a"); r.Push("b"); r.Push("c")
data = r.GetData()
println(data)
assert len(data) >= 1, "reducer should keep reduced data"
``````````````


#### 定义

`NewReducer(reduceLimit int, handle reducer.ReduceFunction) *reducer.Reducer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reduceLimit | `int` | 触发归并的数据条数阈值 |
| handle | `reducer.ReduceFunction` | 归并函数，接收一组字符串并返回合并后的单条字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*reducer.Reducer` | 归并器对象，可调用 Push 推入数据、GetData 获取当前数据 |


### Range

#### 详细描述
Range 创建一个长度为 i 的空接口切片，常用于配合 for-range 生成定长循环

参数:

  - i: 切片长度



返回值:

  - 长度为 i 的空接口切片




Example:

``````````````yak
// VARS: 创建长度为 3 的切片
result = x.Range(3)
// STDOUT: 打印长度
println(len(result))   // OUT: 3
// assert: 锁定结论
assert len(result) == 3, "Range should create a slice of the given length"
``````````````


#### 定义

`Range(i int) []any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 切片长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` | 长度为 i 的空接口切片 |


### Reduce

#### 详细描述
Reduce 对集合中的元素从初始累加器开始依次归并为单一结果

参数:

  - i: 待归并的集合(切片/数组)

  - fc: 归并回调，接收累加器与当前元素返回新的累加器

  - acc: 初始累加器值



返回值:

  - 归并后的最终结果




Example:

``````````````yak
// VARS: 从 0 开始累加求和
result = x.Reduce([1, 2, 3], func(acc, e) { return acc + e }, 0)
// STDOUT: 打印结果
println(result)   // OUT: 6
// assert: 锁定结论
assert result == 6, "Reduce should sum the slice to 6"
``````````````


#### 定义

`Reduce(i any, fc funkGeneralReduceFuncType, acc any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待归并的集合(切片/数组) |
| fc | `funkGeneralReduceFuncType` | 归并回调，接收累加器与当前元素返回新的累加器 |
| acc | `any` | 初始累加器值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 归并后的最终结果 |


### RemoveRepeat

#### 详细描述
RemoveRepeat 对切片去重，返回仅保留首次出现元素的新切片

参数:

  - in: 待去重的切片



返回值:

  - 去重后的切片




Example:

``````````````yak
// VARS: 去除重复元素
result = x.RemoveRepeat([1, 1, 2, 3, 3])
// STDOUT: 打印结果
println(result)   // OUT: [1 2 3]
// assert: 去重后剩 3 个
assert len(result) == 3, "duplicates should be removed"
``````````````


#### 定义

`RemoveRepeat(in any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 待去重的切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 去重后的切片 |


### Retry

#### 详细描述
funkRetry 反复调用 handler，直到 handler 返回 false 或达到最大次数（导出名为 x.Retry）

handler 返回 true 表示&#34;继续重试&#34;，返回 false 表示&#34;停止&#34;



参数:

  - i: 最大重试次数

  - handler: 每次重试调用的函数，返回 true 继续、false 停止




Example:

``````````````yak
count = 0
x.Retry(10, () => { count++; return count < 3 })
println(count)   // OUT: 3
assert count == 3, "Retry keeps calling while handler returns true"
``````````````


#### 定义

`Retry(i int, handler func() bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 最大重试次数 |
| handler | `func() bool` | 每次重试调用的函数，返回 true 继续、false 停止 |


### Reverse

#### 详细描述
Reverse 反转切片中元素的顺序，返回反转后的新切片

参数:

  - in: 待反转的切片



返回值:

  - 反转顺序后的切片




Example:

``````````````yak
// VARS: 反转切片
result = x.Reverse([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: [3 2 1]
// assert: 首元素变为原末元素
assert result[0] == 3, "reverse should put last element first"
``````````````


#### 定义

`Reverse(in any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 待反转的切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 反转顺序后的切片 |


### Shift

#### 详细描述
Shift 返回去掉切片第一个元素后的新切片

参数:

  - i: 源切片



返回值:

  - 去掉首元素后的切片




Example:

``````````````yak
// VARS: 去掉第一个元素
result = x.Shift([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: [2 3]
// assert: 锁定结论
assert len(result) == 2, "Shift should drop the first element"
``````````````


#### 定义

`Shift(i any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 源切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 去掉首元素后的切片 |


### Shuffle

#### 详细描述
Shuffle 随机打乱切片中元素的顺序，返回打乱后的新切片

参数:

  - in: 待打乱的切片



返回值:

  - 打乱顺序后的切片(元素不变)




Example:

``````````````yak
// VARS: 随机打乱(每次顺序不同)
result = x.Shuffle([1, 2, 3, 4, 5])
// assert: 元素个数不变
assert len(result) == 5, "shuffle should preserve length"
``````````````


#### 定义

`Shuffle(in any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 待打乱的切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 打乱顺序后的切片(元素不变) |


### Some

#### 详细描述
Some 判断给定的元素中是否至少有一个存在于集合中

参数:

  - in: 源集合

  - elements: 待检查的一个或多个元素



返回值:

  - 是否至少有一个元素存在于集合中




Example:

``````````````yak
// VARS: 判断是否存在任意一个
result = x.Some([1, 2, 3], 9, 2)
// STDOUT: 打印结果
println(result)   // OUT: true
// assert: 都不存在时返回 false
assert x.Some([1, 2, 3], 8, 9) == false, "neither 8 nor 9 is present"
``````````````


#### 定义

`Some(in any, elements ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 源集合 |
| elements | `...any` | 待检查的一个或多个元素 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否至少有一个元素存在于集合中 |


### Sort

#### 详细描述
funkSort 使用自定义的 less 比较函数对切片做稳定原地排序（导出名为 x.Sort）

less(i, j) 返回 true 表示下标 i 的元素应排在下标 j 之前



参数:

  - x: 待排序的切片(原地修改)

  - less: 比较函数，接收两个下标，返回是否 i 应排在 j 前




Example:

``````````````yak
arr = [3, 1, 2]
x.Sort(arr, (i, j) => arr[i] < arr[j])
println(arr)   // OUT: [1 2 3]
assert arr[0] == 1 && arr[2] == 3, "Sort should sort the slice ascending in place"
``````````````


#### 定义

`Sort(x any, less func(i, j int) bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` | 待排序的切片(原地修改) |
| less | `func(i, j int) bool` | 比较函数，接收两个下标，返回是否 i 应排在 j 前 |


### Subtract

#### 详细描述
Subtract 返回集合 x 中存在但集合 y 中不存在的元素

参数:

  - x: 源集合

  - y: 要排除的集合



返回值:

  - 仅属于 x 而不属于 y 的元素集合




Example:

``````````````yak
// VARS: 求差集
result = x.Subtract([1, 2, 3, 4], [2, 4])
// STDOUT: 打印结果
println(result)   // OUT: [1 3]
// assert: 锁定结论
assert len(result) == 2, "Subtract should keep elements only in x"
``````````````


#### 定义

`Subtract(x any, y any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` | 源集合 |
| y | `any` | 要排除的集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 仅属于 x 而不属于 y 的元素集合 |


### Sum

#### 详细描述
Sum 计算切片中所有数值元素之和

参数:

  - arr: 数值切片



返回值:

  - 所有元素之和




Example:

``````````````yak
// VARS: 求和
result = x.Sum([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: 6
// assert: 锁定结论
assert result == 6, "sum of 1,2,3 should be 6"
``````````````


#### 定义

`Sum(arr any) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` | 数值切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 所有元素之和 |


### Tail

#### 详细描述
Tail 返回切片中除第一个元素外的所有元素

参数:

  - arr: 源切片



返回值:

  - 除首元素外的切片




Example:

``````````````yak
// VARS: 取除首元素外的部分
result = x.Tail([1, 2, 3])
// STDOUT: 打印结果
println(result)   // OUT: [2 3]
// assert: 锁定结论
assert len(result) == 2, "tail should drop the first element"
``````````````


#### 定义

`Tail(arr any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` | 源切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 除首元素外的切片 |


### ToFloat64

#### 详细描述
ToFloat64 将任意数值类型转换为 float64

参数:

  - x: 待转换的数值



返回值:

  - 转换后的 float64 值

  - 是否转换成功




Example:

``````````````yak
// VARS: 转换数值
v, ok = x.ToFloat64(3)
// STDOUT: 打印转换结果
println(v)   // OUT: 3
// assert: 转换成功
assert ok == true, "integer 3 should convert to float64"
``````````````


#### 定义

`ToFloat64(x any) (float64, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` | 待转换的数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 转换后的 float64 值 |
| r2 | `bool` | 是否转换成功 |


### ToMap

#### 详细描述
ToMap 将一个结构体切片转换为以指定字段值为键的 map

参数:

  - in: 结构体切片

  - pivot: 作为键的结构体字段名



返回值:

  - 以 pivot 字段值为键、结构体为值的 map




Example:

``````````````yak
// 将结构体切片按字段转为 map(需结构体切片，作示意)
m = x.ToMap(users, "Id")
``````````````


#### 定义

`ToMap(in any, pivot string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 结构体切片 |
| pivot | `string` | 作为键的结构体字段名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 以 pivot 字段值为键、结构体为值的 map |


### Values

#### 详细描述
Values 返回 map 的所有值或结构体的所有字段值组成的切片

参数:

  - out: map 或结构体



返回值:

  - 值切片




Example:

``````````````yak
// VARS: 取出 map 的值
result = x.Values({"a": 1})
// STDOUT: 打印值
println(result)   // OUT: [1]
// assert: 单键 map 只有一个值
assert len(result) == 1, "single-key map should have one value"
``````````````


#### 定义

`Values(out any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| out | `any` | map 或结构体 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 值切片 |


### WaitConnect

#### 详细描述
WaitConnect 等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动

参数:

  - addr: 目标地址（host:port）

  - timeout: 最长等待时间（秒）



返回值:

  - 错误信息（超时或连接失败时非空）




Example:

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


#### 定义

`WaitConnect(addr string, timeout float64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址（host:port） |
| timeout | `float64` | 最长等待时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（超时或连接失败时非空） |


### Zip

#### 详细描述
Zip 将两个切片按下标两两组合成元组列表，长度取较短切片

参数:

  - slice1: 第一个切片

  - slice2: 第二个切片



返回值:

  - 元组列表，每个元组包含两个切片中同下标的元素




Example:

``````````````yak
// VARS: 按下标配对
result = x.Zip([1, 2], ["a", "b"])
// assert: 配对数量为较短切片长度
assert len(result) == 2, "zip should pair elements by index"
``````````````


#### 定义

`Zip(slice1 any, slice2 any) []Tuple`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice1 | `any` | 第一个切片 |
| slice2 | `any` | 第二个切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]Tuple` | 元组列表，每个元组包含两个切片中同下标的元素 |


