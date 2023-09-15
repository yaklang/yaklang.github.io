# x

|成员函数|函数描述/介绍|
|:------|:--------|
| [x.All](#All) |All returns true if all elements of the iterable are not empty (or if the iterable is empty)|
| [x.Any](#Any) |Any returns true if any element of the iterable is not empty. If the iterable is empty, return False.|
| [x.Chunk](#Chunk) |Chunk creates an array of elements split into groups with the length of size.If array can't be split evenly, the final chunk will bethe remaining element.|
| [x.Contains](#Contains) |Contains returns true if an element is present in a iteratee.|
| [x.ConvertToMap](#ConvertToMap) ||
| [x.Difference](#Difference) |Difference returns the difference between two collections.|
| [x.Drop](#Drop) |Drop creates an array/slice with `n` elements dropped from the beginning.|
| [x.Equal](#Equal) |IsEqual returns if the two objects are equal|
| [x.Every](#Every) |Every returns true if every element is present in a iteratee.|
| [x.Filter](#Filter) ||
| [x.Find](#Find) ||
| [x.Foreach](#Foreach) ||
| [x.ForeachRight](#ForeachRight) ||
| [x.Head](#Head) |Head gets the first element of array.|
| [x.If](#If) ||
| [x.IndexOf](#IndexOf) |IndexOf gets the index at which the first occurrence of value is found in array or return -1if the value cannot be found|
| [x.Intersect](#Intersect) ||
| [x.IsSubset](#IsSubset) |Subset returns true if collection x is a subset of y.|
| [x.Keys](#Keys) |Keys creates an array of the own enumerable map keys or struct field names.|
| [x.Map](#Map) ||
| [x.Max](#Max) ||
| [x.Min](#Min) ||
| [x.Range](#Range) ||
| [x.Reduce](#Reduce) ||
| [x.RemoveRepeat](#RemoveRepeat) |Uniq creates an array with unique values.|
| [x.Reverse](#Reverse) |Reverse transforms an array the first element will become the last,the second element will become the second to last, etc.|
| [x.Shift](#Shift) ||
| [x.Shuffle](#Shuffle) |Shuffle creates an array of shuffled values|
| [x.Some](#Some) |Some returns true if atleast one element is present in an iteratee.|
| [x.Sort](#Sort) |SliceStable sorts the slice x using the provided lessfunction, keeping equal elements in their original order.It panics if x is not a slice.The less function must satisfy the same requirements asthe Interface type's Less method.|
| [x.Subtract](#Subtract) |Subtract returns the subtraction between two collections.|
| [x.Sum](#Sum) |Sum computes the sum of the values in array.|
| [x.Tail](#Tail) |Tail gets all but the first element of array.|
| [x.ToFloat64](#ToFloat64) |ToFloat64 converts any numeric value to float64.|
| [x.ToMap](#ToMap) |ToMap transforms a slice of instances to a Map.[]*Foo => Map<int, *Foo>|
| [x.Values](#Values) |Values creates an array of the own enumerable map values or struct field values.|
| [x.WaitConnect](#WaitConnect) ||
| [x.Zip](#Zip) |Zip returns a list of tuples, where the i-th tuple contains the i-th elementfrom each of the input iterables. The returned list is truncated in lengthto the length of the shortest input iterable.|


## 函数定义
### All

#### 详细描述
All returns true if all elements of the iterable are not empty (or if the iterable is empty)

#### 定义

`All(objs ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| objs | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Any

#### 详细描述
Any returns true if any element of the iterable is not empty. If the iterable is empty, return False.

#### 定义

`Any(objs ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| objs | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Chunk

#### 详细描述
Chunk creates an array of elements split into groups with the length of size.If array can't be split evenly, the final chunk will bethe remaining element.

#### 定义

`Chunk(arr any, size int) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` |   |
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Contains

#### 详细描述
Contains returns true if an element is present in a iteratee.

#### 定义

`Contains(in any, elem any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |
| elem | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ConvertToMap

#### 详细描述


#### 定义

`ConvertToMap(i any) map[string][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string][]string` |   |


### Difference

#### 详细描述
Difference returns the difference between two collections.

#### 定义

`Difference(x any, y any) (any, any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` |   |
| y | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |
| r2 | `any` |   |


### Drop

#### 详细描述
Drop creates an array/slice with `n` elements dropped from the beginning.

#### 定义

`Drop(in any, n int) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Equal

#### 详细描述
IsEqual returns if the two objects are equal

#### 定义

`Equal(expected any, actual any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expected | `any` |   |
| actual | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Every

#### 详细描述
Every returns true if every element is present in a iteratee.

#### 定义

`Every(in any, elements ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |
| elements | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Filter

#### 详细描述


#### 定义

`Filter(i any, fc func(any) bool) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `func(any) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Find

#### 详细描述


#### 定义

`Find(i any, fc func(any) bool) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `func(any) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Foreach

#### 详细描述


#### 定义

`Foreach(i any, fc func(any))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `func(any)` |   |


### ForeachRight

#### 详细描述


#### 定义

`ForeachRight(i any, fc func(any))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `func(any)` |   |


### Head

#### 详细描述
Head gets the first element of array.

#### 定义

`Head(arr any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### If

#### 详细描述


#### 定义

`If(i bool, a any, b any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |
| a | `any` |   |
| b | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### IndexOf

#### 详细描述
IndexOf gets the index at which the first occurrence of value is found in array or return -1if the value cannot be found

#### 定义

`IndexOf(in any, elem any) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |
| elem | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Intersect

#### 详细描述


#### 定义

`Intersect(x any, y any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` |   |
| y | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### IsSubset

#### 详细描述
Subset returns true if collection x is a subset of y.

#### 定义

`IsSubset(x any, y any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` |   |
| y | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Keys

#### 详细描述
Keys creates an array of the own enumerable map keys or struct field names.

#### 定义

`Keys(out any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| out | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Map

#### 详细描述


#### 定义

`Map(i any, fc funkGeneralFuncType) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `funkGeneralFuncType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Max

#### 详细描述


#### 定义

`Max(i any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Min

#### 详细描述


#### 定义

`Min(i any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Range

#### 详细描述


#### 定义

`Range(i int) []any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` |   |


### Reduce

#### 详细描述


#### 定义

`Reduce(i any, fc funkGeneralReduceFuncType, acc any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `funkGeneralReduceFuncType` |   |
| acc | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### RemoveRepeat

#### 详细描述
Uniq creates an array with unique values.

#### 定义

`RemoveRepeat(in any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Reverse

#### 详细描述
Reverse transforms an array the first element will become the last,the second element will become the second to last, etc.

#### 定义

`Reverse(in any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Shift

#### 详细描述


#### 定义

`Shift(i any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Shuffle

#### 详细描述
Shuffle creates an array of shuffled values

#### 定义

`Shuffle(in any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Some

#### 详细描述
Some returns true if atleast one element is present in an iteratee.

#### 定义

`Some(in any, elements ...any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |
| elements | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Sort

#### 详细描述
SliceStable sorts the slice x using the provided lessfunction, keeping equal elements in their original order.It panics if x is not a slice.The less function must satisfy the same requirements asthe Interface type's Less method.

#### 定义

`Sort(x any, less func(i, j int) bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` |   |
| less | `func(i, j int) bool` |   |


### Subtract

#### 详细描述
Subtract returns the subtraction between two collections.

#### 定义

`Subtract(x any, y any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` |   |
| y | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Sum

#### 详细描述
Sum computes the sum of the values in array.

#### 定义

`Sum(arr any) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### Tail

#### 详细描述
Tail gets all but the first element of array.

#### 定义

`Tail(arr any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| arr | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### ToFloat64

#### 详细描述
ToFloat64 converts any numeric value to float64.

#### 定义

`ToFloat64(x any) (float64, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |
| r2 | `bool` |   |


### ToMap

#### 详细描述
ToMap transforms a slice of instances to a Map.[]*Foo => Map<int, *Foo>

#### 定义

`ToMap(in any, pivot string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |
| pivot | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Values

#### 详细描述
Values creates an array of the own enumerable map values or struct field values.

#### 定义

`Values(out any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| out | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### WaitConnect

#### 详细描述


#### 定义

`WaitConnect(addr string, timeout float64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Zip

#### 详细描述
Zip returns a list of tuples, where the i-th tuple contains the i-th elementfrom each of the input iterables. The returned list is truncated in lengthto the length of the shortest input iterable.

#### 定义

`Zip(slice1 any, slice2 any) []Tuple`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice1 | `any` |   |
| slice2 | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]Tuple` |   |


