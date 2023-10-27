# x

|成员函数|函数描述/介绍|
|:------|:--------|
| [x.All](#all) |All returns true if all elements of the iterable are not empty (or if the iterable is empty)
|
| [x.Any](#any) |Any returns true if any element of the iterable is not empty. If the iterable is empty, return False.
|
| [x.Chunk](#chunk) |Chunk creates an array of elements split into groups with the length of size.
If array can't be split evenly, the final chunk will be
the remaining el...|
| [x.Contains](#contains) |Contains returns true if an element is present in a iteratee.
|
| [x.ConvertToMap](#converttomap) ||
| [x.Difference](#difference) |Difference returns the difference between two collections.
|
| [x.Drop](#drop) |Drop creates an array/slice with `n` elements dropped from the beginning.
|
| [x.Equal](#equal) |IsEqual returns if the two objects are equal
|
| [x.Every](#every) |Every returns true if every element is present in a iteratee.
|
| [x.Filter](#filter) ||
| [x.Find](#find) ||
| [x.Foreach](#foreach) ||
| [x.ForeachRight](#foreachright) ||
| [x.Head](#head) |Head gets the first element of array.
|
| [x.If](#if) ||
| [x.IndexOf](#indexof) |IndexOf gets the index at which the first occurrence of value is found in array or return -1
if the value cannot be found
|
| [x.Intersect](#intersect) ||
| [x.IsSubset](#issubset) |Subset returns true if collection x is a subset of y.
|
| [x.Keys](#keys) |Keys creates an array of the own enumerable map keys or struct field names.
|
| [x.Map](#map) ||
| [x.Max](#max) ||
| [x.Min](#min) ||
| [x.Range](#range) ||
| [x.Reduce](#reduce) ||
| [x.RemoveRepeat](#removerepeat) |Uniq creates an array with unique values.
|
| [x.Reverse](#reverse) |Reverse transforms an array the first element will become the last,
the second element will become the second to last, etc.
|
| [x.Shift](#shift) ||
| [x.Shuffle](#shuffle) |Shuffle creates an array of shuffled values
|
| [x.Some](#some) |Some returns true if atleast one element is present in an iteratee.
|
| [x.Sort](#sort) |SliceStable sorts the slice x using the provided less
function, keeping equal elements in their original order.
It panics if x is not a slice.

The le...|
| [x.Subtract](#subtract) |Subtract returns the subtraction between two collections.
|
| [x.Sum](#sum) |Sum computes the sum of the values in array.
|
| [x.Tail](#tail) |Tail gets all but the first element of array.
|
| [x.ToFloat64](#tofloat64) |ToFloat64 converts any numeric value to float64.
|
| [x.ToMap](#tomap) |ToMap transforms a slice of instances to a Map.
[]*Foo =&gt; Map&lt;int, *Foo&gt;
|
| [x.Values](#values) |Values creates an array of the own enumerable map values or struct field values.
|
| [x.WaitConnect](#waitconnect) ||
| [x.Zip](#zip) |Zip returns a list of tuples, where the i-th tuple contains the i-th element
from each of the input iterables. The returned list is truncated in lengt...|


## 函数定义
### all

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


### any

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


### chunk

#### 详细描述
Chunk creates an array of elements split into groups with the length of size.
If array can't be split evenly, the final chunk will be
the remaining element.


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


### contains

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


### converttomap

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


### difference

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


### drop

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


### equal

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


### every

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


### filter

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


### find

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


### foreach

#### 详细描述


#### 定义

`Foreach(i any, fc func(any))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `func(any)` |   |


### foreachright

#### 详细描述


#### 定义

`ForeachRight(i any, fc func(any))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| fc | `func(any)` |   |


### head

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


### if

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


### indexof

#### 详细描述
IndexOf gets the index at which the first occurrence of value is found in array or return -1
if the value cannot be found


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


### intersect

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


### issubset

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


### keys

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


### map

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


### max

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


### min

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


### range

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


### reduce

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


### removerepeat

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


### reverse

#### 详细描述
Reverse transforms an array the first element will become the last,
the second element will become the second to last, etc.


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


### shift

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


### shuffle

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


### some

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


### sort

#### 详细描述
SliceStable sorts the slice x using the provided less
function, keeping equal elements in their original order.
It panics if x is not a slice.

The less function must satisfy the same requirements as
the Interface type's Less method.


#### 定义

`Sort(x any, less func(i, j int) bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `any` |   |
| less | `func(i, j int) bool` |   |


### subtract

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


### sum

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


### tail

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


### tofloat64

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


### tomap

#### 详细描述
ToMap transforms a slice of instances to a Map.
[]*Foo =&gt; Map&lt;int, *Foo&gt;


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


### values

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


### waitconnect

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


### zip

#### 详细描述
Zip returns a list of tuples, where the i-th tuple contains the i-th element
from each of the input iterables. The returned list is truncated in length
to the length of the shortest input iterable.


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


