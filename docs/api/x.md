# x


|成员函数|函数描述/介绍|
|:------|:--------|
 | [x.All](#xall) | 所有元素都存在且为 true |
 | [x.Any](#xany) | 元素中至少有一个为 true |
 | [x.Chunk](#xchunk) | 把集合按数量分组 |
 | [x.Contains](#xcontains) | 集合中是否包含某一个元素 |
 | [x.ConvertToMap](#xconverttomap) | 把一个对象尽可能转换为 map[string][]string |
 | [x.Difference](#xdifference) | 计算两个元素的差分 |
 | [x.Drop](#xdrop) | 丢弃数组 |
 | [x.Equal](#xequal) | 判断两个元素是否相等 |
 | [x.Every](#xevery) |  |
 | [x.Filter](#xfilter) | 使用一个函数 func(i): bool 过滤某数组 |
 | [x.Find](#xfind) | 寻找符合要求的某个元素 |
 | [x.Foreach](#xforeach) | For 循环的函数式编程支持 |
 | [x.ForeachRight](#xforeachright) | 反向 For 循环 |
 | [x.Head](#xhead) | 取第一个元素 |
 | [x.If](#xif) | 类似 SQL 中的 IF 函数 |
 | [x.IndexOf](#xindexof) | 判断元素在数组中的位置 |
 | [x.Intersect](#xintersect) | 计算交集 |
 | [x.IsSubset](#xissubset) | 判断子集关系 |
 | [x.Keys](#xkeys) | 取 Map 的所有 Key |
 | [x.Map](#xmap) | 批处理 |
 | [x.Max](#xmax) | 取最大值 |
 | [x.Min](#xmin) | 取最小值 |
 | [x.Range](#xrange) | 生成一个范围数组/Slice |
 | [x.Reduce](#xreduce) | 函数式编程 Reducer 支持 |
 | [x.RemoveRepeat](#xremoverepeat) | 移除数组/Slice中重复元素 |
 | [x.Reverse](#xreverse) | 数组反向 |
 | [x.Shift](#xshift) | 取出第一个数组元素 |
 | [x.Shuffle](#xshuffle) | 打乱集合顺序 |
 | [x.Some](#xsome) |  |
 | [x.Sort](#xsort) |  |
 | [x.Subtract](#xsubtract) | 集合相减 |
 | [x.Sum](#xsum) | 取和 |
 | [x.Tail](#xtail) | 出去第一个元素之外的所有数组 |
 | [x.ToFloat64](#xtofloat64) | 解析成数字（double/float64） |
 | [x.ToMap](#xtomap) | 数字根据某一个字段生成 Map |
 | [x.Values](#xvalues) | 取 Map 中的 Value |
 | [x.WaitConnect](#xwaitconnect) | 等待一个链接具体多少秒钟 |
 | [x.Zip](#xzip) |  |




 



## 函数定义

### x.All

所有元素都存在且为 true

#### 详细描述



#### 定义：

`All(objs ...any) bool  doc:All returns true if all elements of the iterable are not empty (or if the iterable is empty)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### x.Any

元素中至少有一个为 true

#### 详细描述



#### 定义：

`Any(objs ...any) bool  doc:Any returns true if any element of the iterable is not empty. If the iterable is empty, return False.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### x.Chunk

把集合按数量分组

#### 详细描述



#### 定义：

`Chunk(arr any, size int) any  doc:Chunk creates an array of elements split into groups with the length of size.If array can&#39;t be split evenly, the final chunk will bethe remaining element.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sliceOrigin | `any` |   |
| groupSize | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Contains

集合中是否包含某一个元素

#### 详细描述



#### 定义：

`Contains(in any, elem any) bool  doc:Contains returns true if an element is present in a iteratee.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice | `any` |   |
| element | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### x.ConvertToMap

把一个对象尽可能转换为 map[string][]string

#### 详细描述



#### 定义：

`ConvertToMap(any) map[string][]string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string][]string` |   |


 
### x.Difference

计算两个元素的差分

#### 详细描述



#### 定义：

`Difference(x any, y any) (any, any)  doc:Difference returns the difference between two collections.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |
| r1 | `any` |   |


 
### x.Drop

丢弃数组

#### 详细描述



#### 定义：

`Drop(in any, n int) any  doc:Drop creates an array/slice with `n` elements dropped from the beginning.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice | `any` |   |
| size | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Equal

判断两个元素是否相等

#### 详细描述



#### 定义：

`Equal(expected any, actual any) bool  doc:IsEqual returns if the two objects are equal`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### x.Every



#### 详细描述



#### 定义：

`Every(in any, elements ...any) bool  doc:Every returns true if every element is present in a iteratee.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### x.Filter

使用一个函数 func(i): bool 过滤某数组

#### 详细描述



#### 定义：

`Filter(any, func(any) bool) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice | `any` |   |
| v2 | `func (v1: any) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Find

寻找符合要求的某个元素

#### 详细描述



#### 定义：

`Find(any, func(any) bool) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `func (v1: any) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Foreach

For 循环的函数式编程支持

#### 详细描述



#### 定义：

`Foreach(any, func(any))`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `func (v1: any) ` |   |




 

 
### x.ForeachRight

反向 For 循环

#### 详细描述



#### 定义：

`ForeachRight(any, func(any))`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `func (v1: any) ` |   |




 

 
### x.Head

取第一个元素

#### 详细描述



#### 定义：

`Head(arr any) any  doc:Head gets the first element of array.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.If

类似 SQL 中的 IF 函数

#### 详细描述



#### 定义：

`If(bool, any, any) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| condition | `bool` |   |
| obj1 | `any` |   |
| obj2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.IndexOf

判断元素在数组中的位置

#### 详细描述



#### 定义：

`IndexOf(in any, elem any) int  doc:IndexOf gets the index at which the first occurrence of value is found in array or return -1if the value cannot be found`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### x.Intersect

计算交集

#### 详细描述



#### 定义：

`Intersect(x any, y any) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.IsSubset

判断子集关系

#### 详细描述



#### 定义：

`IsSubset(x any, y any) bool  doc:Subset returns true if collection x is a subset of y.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### x.Keys

取 Map 的所有 Key

#### 详细描述



#### 定义：

`Keys(out any) any  doc:Keys creates an array of the own enumerable map keys or struct field names.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Map

批处理

#### 详细描述



#### 定义：

`Map(any, yaklib.funkGeneralFuncType) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `func funkGeneralFuncType(v1: any) return(any) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Max

取最大值

#### 详细描述



#### 定义：

`Max(i any) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Min

取最小值

#### 详细描述



#### 定义：

`Min(i any) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Range

生成一个范围数组/Slice

#### 详细描述



#### 定义：

`Range(int) []any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]any` |   |


 
### x.Reduce

函数式编程 Reducer 支持

#### 详细描述



#### 定义：

`Reduce(any, yaklib.funkGeneralReduceFuncType, any) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `func funkGeneralReduceFuncType(v1: any, v2: any) return(any) ` |   |
| initValue | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.RemoveRepeat

移除数组/Slice中重复元素

#### 详细描述



#### 定义：

`RemoveRepeat(in any) any  doc:Uniq creates an array with unique values.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Reverse

数组反向

#### 详细描述



#### 定义：

`Reverse(in any) any  doc:Reverse transforms an array the first element will become the last,the second element will become the second to last, etc.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Shift

取出第一个数组元素

#### 详细描述



#### 定义：

`Shift(any) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Shuffle

打乱集合顺序

#### 详细描述



#### 定义：

`Shuffle(in any) any  doc:Shuffle creates an array of shuffled values`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Some



#### 详细描述



#### 定义：

`Some(in any, elements ...any) bool  doc:Some returns true if atleast one element is present in an iteratee.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### x.Sort



#### 详细描述



#### 定义：

`Sort(x any, less func(i, j int) bool)  doc:SliceStable sorts the slice x using the provided lessfunction, keeping equal elements in their original order.It panics if x is not a slice.The less function must satisfy the same requirements asthe Interface type&#39;s Less method.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `func (v1: int, v2: int) return(bool) ` |   |




 

 
### x.Subtract

集合相减

#### 详细描述



#### 定义：

`Subtract(x any, y any) any  doc:Subtract returns the subtraction between two collections.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Sum

取和

#### 详细描述



#### 定义：

`Sum(arr any) float64  doc:Sum computes the sum of the values in array.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### x.Tail

出去第一个元素之外的所有数组

#### 详细描述



#### 定义：

`Tail(arr any) any  doc:Tail gets all but the first element of array.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.ToFloat64

解析成数字（double/float64）

#### 详细描述



#### 定义：

`ToFloat64(x any) (float64, bool)  doc:ToFloat64 converts any numeric value to float64.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |
| r1 | `bool` |   |


 
### x.ToMap

数字根据某一个字段生成 Map

#### 详细描述



#### 定义：

`ToMap(in any, pivot string) any  doc:ToMap transforms a slice of instances to a Map.[]*Foo =&gt; Map&lt;int, *Foo&gt;`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice | `any` |   |
| fieldName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.Values

取 Map 中的 Value

#### 详细描述



#### 定义：

`Values(out any) any  doc:Values creates an array of the own enumerable map values or struct field values.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### x.WaitConnect

等待一个链接具体多少秒钟

#### 详细描述



#### 定义：

`WaitConnect(addr string, timeout float64) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| timeoutSeconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### x.Zip



#### 详细描述



#### 定义：

`Zip(any, any) []funk.Tuple`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]funk.Tuple` |   |


 


