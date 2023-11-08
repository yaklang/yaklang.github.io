# math

|成员函数|函数描述/介绍|
|:------|:--------|
| [math.Abs](#abs) |Abs 返回x的绝对值 |
| [math.Ceil](#ceil) |Ceil 返回不小于x的最小整数 |
| [math.Floor](#floor) |Floor 返回不大于x的最大整数 |
| [math.IsNaN](#isnan) |IsNaN reports whether f is an IEEE 754 “not-a-number” value. |
| [math.NaN](#nan) |NaN returns an IEEE 754 “not-a-number” value. |
| [math.Pow](#pow) |Pow 返回x的y次方 |
| [math.Pow10](#pow10) |Pow10 返回10的n次方 |
| [math.Round](#round) |Round returns the nearest integer, rounding half away from zero.  Special cases are:  	Round(±0) = ±0 	Round(±Inf) = ±Inf 	Round(NaN) = NaN |
| [math.RoundToEven](#roundtoeven) |RoundToEven 返回四舍五入到最近的偶整数 |
| [math.Sqrt](#sqrt) |Sqrt 返回一个数的平方根 如果x &lt; 0，返回NaN |


## 函数定义
### Abs

#### 详细描述
Abs 返回x的绝对值

Example:
```
math.Abs(-1) // 1
math.Abs(1) // 1
```


#### 定义

`Abs(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### Ceil

#### 详细描述
Ceil 返回不小于x的最小整数

Example:
```
math.Ceil(1.5) // 2
math.Ceil(-1.5) // -1
```


#### 定义

`Ceil(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### Floor

#### 详细描述
Floor 返回不大于x的最大整数

Example:
```
math.Floor(1.5) // 1
math.Floor(-1.5) // -2
```


#### 定义

`Floor(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### IsNaN

#### 详细描述
IsNaN reports whether f is an IEEE 754 “not-a-number” value.


#### 定义

`IsNaN(f float64) (is bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| is | `bool` |   |


### NaN

#### 详细描述
NaN returns an IEEE 754 “not-a-number” value.


#### 定义

`NaN() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### Pow

#### 详细描述
Pow 返回x的y次方

Example:
```
math.Pow(2, 3) // 8
math.Pow(2, -1) // 0.5
```


#### 定义

`Pow(x float64, y float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |   |
| y | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### Pow10

#### 详细描述
Pow10 返回10的n次方

Example:
```
math.Pow10(2) // 100
math.Pow10(-1) // 0.1
```


#### 定义

`Pow10(n int) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### Round

#### 详细描述
Round returns the nearest integer, rounding half away from zero.

Special cases are:

	Round(±0) = ±0
	Round(±Inf) = ±Inf
	Round(NaN) = NaN


#### 定义

`Round(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### RoundToEven

#### 详细描述
RoundToEven 返回四舍五入到最近的偶整数

Example:
```
math.RoundToEven(1.5) // 2
math.RoundToEven(2.5) // 2
math.RoundToEven(3.5) // 4
math.RoundToEven(4.5) // 4
```


#### 定义

`RoundToEven(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### Sqrt

#### 详细描述
Sqrt 返回一个数的平方根

如果x &lt; 0，返回NaN

Example:
```
math.Sqrt(4) // 2
math.Sqrt(-1) // NaN
```


#### 定义

`Sqrt(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


