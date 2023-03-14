---
sidebar_position: 13
---

# 13. 列表类型：用法与内置函数

## 基础使用：使用列表切片操作和 `append`

一个简单的例子如下，这些操作和我们使用 Golang 非常类似，当然切片的计算继承了 Python 的风格：

```go
a = [1, 2]
b = [4, 5, 6]

// 追加
a = append(a, 3) // [1, 2, 3]

// 合并
a = a + b // [1, 2, 3, 4, 5, 6]

// 访问元素,与字符串的索引完全相同
println(a[0]) // 1
println(a[:2]) // [1, 2]
println(a[::-1]) // [6, 5, 4, 3, 2, 1]
```

## 内置方法

同样，yaklang也支持slice的内置方法，可以实现一些很方便的操作，一个完整的例子如下：

```go
a = [1, 2, 3]
// Append / Push: 修改 a 变量的 list 值，追加一个值
a.Append(4)
assert a == [1, 2, 3, 4], sprint(a)

// Length / Len: 获取列表a的长度
assert a.Length() == 4

// Capability / Cap: 获取列表a的容量
assert a.Capability() == 4

// Extend 扩展 slice 长度，把新的数组追加到后面
a.Extend([5, 6])
assert a == [1, 2, 3, 4, 5, 6], sprint(a)

// Pop： 移除最后一个元素
a = [1, 2, 3, 4]
v = a.Pop()
assert a == [1, 2, 3], sprint(a)
assert v == 4, v

// 移除第n个元素，如果越界则移除最后一个
v = a.Pop(1)
assert a == [1, 3], sprint(a)
assert v == 2, v
v = a.Pop(99999)
assert a == [1], sprint(a)
assert v == 3, v
a = [1, 2, 3, 4, 5]
v = a.Pop(-2)
assert a == [1, 3, 4 ,5], sprint(a)
assert v == 2, v
v = a.Pop(-999999)
assert a == [1, 3, 4], sprint(a)
assert v == 5, v

// Insert：在第n个位置插入一个元素
a.Insert(1, 2)
assert a == [1, 2, 3, 4], sprint(a)
a.Insert(999, 5)
assert a == [1, 2, 3, 4, 5], sprint(a)
a.Insert(-1, 999)
assert a == [1, 2, 3, 4, 999, 5], sprint(a)
a.Insert(-9999, 0)
assert a == [0, 1, 2, 3, 4, 999, 5], sprint(a)

// Remove：移除一个元素（判断字面值相等）
a = [1, 2, 1]
a.Remove(1)
assert a == [2, 1], sprint(a)
a.Remove(1)
assert a == [2], sprint(a)

// Shift：从数据开头移除一个元素，相当于Pop(0)
a = [1, 2, 3, 4]
assert a.Shift() == 1
assert a == [2, 3, 4]

// Unshift: 从数据开头插入一个elem元素，相当于Insert(0, elem)
a = [2, 3, 4]
a.Unshift(1)
assert a == [1, 2, 3, 4]

// Reverse：把数组内容倒序
a = [1, 2, 3, 4]
a.Reverse()
assert a == [4, 3, 2, 1], sprint(a)
a = [1, 2, 3, 4, 5]
a.Reverse()
assert a == [5, 4, 3, 2, 1], sprint(a)

// Sort：按字面值排序
a = [4, 1, 3, 2]
a.Sort()
assert a == [1, 2, 3, 4], sprint(a)
a = [4, 1, 3, 2]
a.Sort(true)
assert a == [4, 3, 2, 1], sprint(a)

// Map：会根据提供的函数对列表中的每一个函数做映射，返回映射后的列表
a = [1, 2, 3, 4]
a = a.Map(func (v) {
    return v + 1
})

// Map后的列表会转换为[]var,所以需要先将[2, 3, 4, 5]转换类型后再比较
assert a == [2, 3, 4, 5].GeneralSlice() 

// Filter：会根据提供的函数对列表中的每一个函数做过滤，
// 该函数返回true/false，将返回false的元素筛除，返回过滤后的列表
a = [1, 2, 3, 4]
a = a.Filter(func (v) {
    return v > 2
})
assert a == [3, 4]

// Clear：移除所有元素
a = [1, 2, 3]
a.Clear()
assert a == [], sprint(a)

// Count：计算元素存在的个数
a = [1, 2, 3, 1]
assert a.Count(1) == 2, a.Count(1)
assert a.Count(5) == 0, a.Count(5)

// Index：返回列表中第n个元素，n支持负数表示倒数第n个元素
a = [1, 2, 3, 4]
assert a.Index(0) == 1, a.Index(0)
assert a.Index(2) == 3, a.Index(3)
assert a.Index(9999) == 4, a.Index(9999)
assert a.Index(-1) == 4, a.Index(-1)
assert a.Index(-9999) == 1, a.Index(-9999)

// StringSlice：将列表转换成[]string类型
a = [nil, 1]
assert a.StringSlice() == ["", "1"]

// GeneralSlice：将列表转换成[]var类型
a = [1, 2]
assert typeof(a.GeneralSlice()) == []var
```

## 附录：列表内置方法

|方法名|描述|
|:--------|:----------|
|Append(elem...) / Push(elem...)|在列表末尾追加新的elem元素|
|Pop(n...)|弹出数组/切片的第n个元素,默认为最后一个|
|Insert(n, elem)|在指定位置n插入elem元素|
|Extend(arr) / Merge(arr)|用一个新的列表扩展原列表|
|Length() / Len()|返回列表的长度|
|Capability() / Cap()|返回列表的容量|
|StringSlice()|将列表转换成[]string类型|
|GeneralSlice()|将列表转换成[]var类型(即[]interface{})|
|Shift()|从数据开头移除一个元素，相当于Pop(0)|
|Unshift(elem)|从数据开头插入一个elem元素，相当于Insert(0, elem)|
|Map(func (elem)elem)|会根据提供的函数对列表中的每一个函数做映射，返回映射后的列表|
|Filter(func (elem)bool)|会根据提供的函数对列表中的每一个函数做过滤（该函数返回true/false，将返回false的元素筛除），返回过滤后的列表|
|Remove(elem)|删除在列表中第一次出现的elem元素|
|Reverse()|翻转列表|
|Sort(reverse...)|排序列表，默认为升序，若设置reverse=true，则改为降序|
|Clear()|清空列表|
|Count(elem)|统计elem元素在列表中出现的次数|
|Index(n)|返回列表中第n个元素，n支持负数表示倒数第n个元素|