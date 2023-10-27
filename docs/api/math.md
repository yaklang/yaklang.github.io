# math

|成员函数|函数描述/介绍|
|:------|:--------|
| [math.Abs](#abs) |Abs returns the absolute value of x.

Special cases are:

	Abs(±Inf) = +Inf
	Abs(NaN) = NaN
|
| [math.Ceil](#ceil) |Ceil returns the least integer value greater than or equal to x.

Special cases are:

	Ceil(±0) = ±0
	Ceil(±Inf) = ±Inf
	Ceil(NaN) = NaN
|
| [math.Floor](#floor) |Floor returns the greatest integer value less than or equal to x.

Special cases are:

	Floor(±0) = ±0
	Floor(±Inf) = ±Inf
	Floor(NaN) = NaN
|
| [math.IsNaN](#isnan) |IsNaN reports whether f is an IEEE 754 “not-a-number” value.
|
| [math.NaN](#nan) |NaN returns an IEEE 754 “not-a-number” value.
|
| [math.Pow](#pow) |Pow returns x**y, the base-x exponential of y.

Special cases are (in order):

	Pow(x, ±0) = 1 for any x
	Pow(1, y) = 1 for any y
	Pow(x, 1) = x for ...|
| [math.Pow10](#pow10) |Pow10 returns 10**n, the base-10 exponential of n.

Special cases are:

	Pow10(n) =    0 for n &lt; -323
	Pow10(n) = +Inf for n &gt; 308
|
| [math.Round](#round) |Round returns the nearest integer, rounding half away from zero.

Special cases are:

	Round(±0) = ±0
	Round(±Inf) = ±Inf
	Round(NaN) = NaN
|
| [math.RoundToEven](#roundtoeven) |RoundToEven returns the nearest integer, rounding ties to even.

Special cases are:

	RoundToEven(±0) = ±0
	RoundToEven(±Inf) = ±Inf
	RoundToEven(...|
| [math.Sqrt](#sqrt) |Sqrt returns the square root of x.

Special cases are:

	Sqrt(+Inf) = +Inf
	Sqrt(±0) = ±0
	Sqrt(x &lt; 0) = NaN
	Sqrt(NaN) = NaN
|


## 函数定义
### abs

#### 详细描述
Abs returns the absolute value of x.

Special cases are:

	Abs(±Inf) = +Inf
	Abs(NaN) = NaN


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


### ceil

#### 详细描述
Ceil returns the least integer value greater than or equal to x.

Special cases are:

	Ceil(±0) = ±0
	Ceil(±Inf) = ±Inf
	Ceil(NaN) = NaN


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


### floor

#### 详细描述
Floor returns the greatest integer value less than or equal to x.

Special cases are:

	Floor(±0) = ±0
	Floor(±Inf) = ±Inf
	Floor(NaN) = NaN


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


### isnan

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


### nan

#### 详细描述
NaN returns an IEEE 754 “not-a-number” value.


#### 定义

`NaN() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### pow

#### 详细描述
Pow returns x**y, the base-x exponential of y.

Special cases are (in order):

	Pow(x, ±0) = 1 for any x
	Pow(1, y) = 1 for any y
	Pow(x, 1) = x for any x
	Pow(NaN, y) = NaN
	Pow(x, NaN) = NaN
	Pow(±0, y) = ±Inf for y an odd integer &lt; 0
	Pow(±0, -Inf) = +Inf
	Pow(±0, +Inf) = +0
	Pow(±0, y) = +Inf for finite y &lt; 0 and not an odd integer
	Pow(±0, y) = ±0 for y an odd integer &gt; 0
	Pow(±0, y) = +0 for finite y &gt; 0 and not an odd integer
	Pow(-1, ±Inf) = 1
	Pow(x, +Inf) = +Inf for |x| &gt; 1
	Pow(x, -Inf) = +0 for |x| &gt; 1
	Pow(x, +Inf) = +0 for |x| &lt; 1
	Pow(x, -Inf) = +Inf for |x| &lt; 1
	Pow(+Inf, y) = +Inf for y &gt; 0
	Pow(+Inf, y) = +0 for y &lt; 0
	Pow(-Inf, y) = Pow(-0, -y)
	Pow(x, y) = NaN for finite x &lt; 0 and finite non-integer y


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


### pow10

#### 详细描述
Pow10 returns 10**n, the base-10 exponential of n.

Special cases are:

	Pow10(n) =    0 for n &lt; -323
	Pow10(n) = +Inf for n &gt; 308


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


### round

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


### roundtoeven

#### 详细描述
RoundToEven returns the nearest integer, rounding ties to even.

Special cases are:

	RoundToEven(±0) = ±0
	RoundToEven(±Inf) = ±Inf
	RoundToEven(NaN) = NaN


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


### sqrt

#### 详细描述
Sqrt returns the square root of x.

Special cases are:

	Sqrt(+Inf) = +Inf
	Sqrt(±0) = ±0
	Sqrt(x &lt; 0) = NaN
	Sqrt(NaN) = NaN


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


