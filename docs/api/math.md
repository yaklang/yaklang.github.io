# math

|实例名|实例描述|
|:------|:--------|
E|(float64) 2.718282|
Ln10|(float64) 2.302585|
Ln2|(float64) 0.693147|
Pi|(float64) 3.141593|
Sqrt2|(float64) 1.414214|
SqrtE|(float64) 1.648721|
SqrtPi|(float64) 1.772454|

|函数名|函数描述/介绍|
|:------|:--------|
| [math.Abs](#abs) ||
| [math.Acos](#acos) |Acos 反三角函数 Acos 参数: - x: 输入数值（区间 [-1, 1]） 返回值: - x 的反余弦值（弧度）|
| [math.Asin](#asin) |Asin 反三角函数 Asin 参数: - x: 输入数值（区间 [-1, 1]） 返回值: - x 的反正弦值（弧度）|
| [math.Atan](#atan) |Atan 反三角函数 Atan 参数: - x: 输入数值 返回值: - x 的反正切值（弧度）|
| [math.Ceil](#ceil) ||
| [math.Cos](#cos) |Cos 三角函数 Cos 参数: - x: 输入角度（弧度） 返回值: - x 的余弦值|
| [math.Floor](#floor) ||
| [math.IsNaN](#isnan) |IsNaN 判断一个数是否是NaN 参数: - x: 输入数值 返回值: - 是否为 NaN|
| [math.NaN](#nan) |NaN 返回一个IEEE-574 “非数字”的值 返回值: - 一个 NaN 浮点值|
| [math.Pow](#pow) |Pow 返回x的y次方 参数: - x: 底数 - y: 指数 返回值: - x 的 y 次幂|
| [math.Pow10](#pow10) |Pow10 返回10的n次方 参数: - n: 整数指数 返回值: - 10 的 n 次幂|
| [math.Round](#round) ||
| [math.RoundToEven](#roundtoeven) ||
| [math.Sin](#sin) |Sin 三角函数 sin 参数: - x: 输入角度（弧度） 返回值: - x 的正弦值|
| [math.Sinh](#sinh) |Sinh 双曲正弦函数 参数: - x: 输入数值（弧度） 返回值: - x 的双曲正弦值|
| [math.Sqrt](#sqrt) |Sqrt 返回一个数的平方根 如果x &lt; 0，返回NaN 参数: - x: 输入数值 返回值: - x 的平方根；x&lt;0 时为 NaN|
| [math.Tan](#tan) |Tan 三角函数 Tan 参数: - x: 输入角度（弧度） 返回值: - x 的正切值|


## 函数定义
### Abs

#### 详细描述
暂无描述

#### 定义

`Abs(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |  |


### Acos

#### 详细描述
Acos 反三角函数 Acos

参数:

  - x: 输入数值（区间 [-1, 1]）



返回值:

  - x 的反余弦值（弧度）




Example:

``````````````yak
result = math.Acos(1)
println(result)   // OUT: 0
assert result == 0.0, "Acos of 1 should be 0"
``````````````


#### 定义

`Acos(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入数值（区间 [-1, 1]） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的反余弦值（弧度） |


### Asin

#### 详细描述
Asin 反三角函数 Asin

参数:

  - x: 输入数值（区间 [-1, 1]）



返回值:

  - x 的反正弦值（弧度）




Example:

``````````````yak
result = math.Asin(0)
println(result)   // OUT: 0
assert result == 0.0, "Asin of 0 should be 0"
``````````````


#### 定义

`Asin(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入数值（区间 [-1, 1]） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的反正弦值（弧度） |


### Atan

#### 详细描述
Atan 反三角函数 Atan

参数:

  - x: 输入数值



返回值:

  - x 的反正切值（弧度）




Example:

``````````````yak
result = math.Atan(0)
println(result)   // OUT: 0
assert result == 0.0, "Atan of 0 should be 0"
``````````````


#### 定义

`Atan(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的反正切值（弧度） |


### Ceil

#### 详细描述
暂无描述

#### 定义

`Ceil(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |  |


### Cos

#### 详细描述
Cos 三角函数 Cos

参数:

  - x: 输入角度（弧度）



返回值:

  - x 的余弦值




Example:

``````````````yak
result = math.Cos(0)
println(result)   // OUT: 1
assert result == 1.0, "Cos of 0 should be 1"
``````````````


#### 定义

`Cos(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入角度（弧度） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的余弦值 |


### Floor

#### 详细描述
暂无描述

#### 定义

`Floor(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |  |


### IsNaN

#### 详细描述
IsNaN 判断一个数是否是NaN

参数:

  - x: 输入数值



返回值:

  - 是否为 NaN




Example:

``````````````yak
result = math.IsNaN(math.NaN())
println(result)   // OUT: true
assert result == true, "NaN should be detected"
assert math.IsNaN(1) == false, "1 is a number"
``````````````


#### 定义

`IsNaN(x float64) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 NaN |


### NaN

#### 详细描述
NaN 返回一个IEEE-574 “非数字”的值

返回值:

  - 一个 NaN 浮点值




Example:

``````````````yak
result = math.IsNaN(math.NaN())
println(result)   // OUT: true
assert result == true, "NaN should produce a NaN value"
``````````````


#### 定义

`NaN() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 一个 NaN 浮点值 |


### Pow

#### 详细描述
Pow 返回x的y次方

参数:

  - x: 底数

  - y: 指数



返回值:

  - x 的 y 次幂




Example:

``````````````yak
result = math.Pow(2, 3)
println(result)   // OUT: 8
assert result == 8.0, "2 to the power 3 should be 8"
assert math.Pow(2, -1) == 0.5, "2 to the power -1 should be 0.5"
``````````````


#### 定义

`Pow(x float64, y float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 底数 |
| y | `float64` | 指数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的 y 次幂 |


### Pow10

#### 详细描述
Pow10 返回10的n次方

参数:

  - n: 整数指数



返回值:

  - 10 的 n 次幂




Example:

``````````````yak
result = math.Pow10(2)
println(result)   // OUT: 100
assert result == 100.0, "10 to the power 2 should be 100"
assert math.Pow10(3) == 1000.0, "10 to the power 3 should be 1000"
``````````````


#### 定义

`Pow10(n int) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 整数指数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 10 的 n 次幂 |


### Round

#### 详细描述
暂无描述

#### 定义

`Round(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |  |


### RoundToEven

#### 详细描述
暂无描述

#### 定义

`RoundToEven(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |  |


### Sin

#### 详细描述
Sin 三角函数 sin

参数:

  - x: 输入角度（弧度）



返回值:

  - x 的正弦值




Example:

``````````````yak
result = math.Sin(0)
println(result)   // OUT: 0
assert result == 0.0, "Sin of 0 should be 0"
``````````````


#### 定义

`Sin(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入角度（弧度） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的正弦值 |


### Sinh

#### 详细描述
Sinh 双曲正弦函数

参数:

  - x: 输入数值（弧度）



返回值:

  - x 的双曲正弦值




Example:

``````````````yak
result = math.Sinh(0)
println(result)   // OUT: 0
assert result == 0.0, "Sinh of 0 should be 0"
``````````````


#### 定义

`Sinh(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入数值（弧度） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的双曲正弦值 |


### Sqrt

#### 详细描述
Sqrt 返回一个数的平方根

如果x &lt; 0，返回NaN

参数:

  - x: 输入数值



返回值:

  - x 的平方根；x&lt;0 时为 NaN




Example:

``````````````yak
result = math.Sqrt(4)
println(result)   // OUT: 2
assert result == 2.0, "Sqrt of 4 should be 2"
assert math.IsNaN(math.Sqrt(-1)) == true, "Sqrt of negative should be NaN"
``````````````


#### 定义

`Sqrt(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的平方根；x&lt;0 时为 NaN |


### Tan

#### 详细描述
Tan 三角函数 Tan

参数:

  - x: 输入角度（弧度）



返回值:

  - x 的正切值




Example:

``````````````yak
result = math.Tan(0)
println(result)   // OUT: 0
assert result == 0.0, "Tan of 0 should be 0"
``````````````


#### 定义

`Tan(x float64) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `float64` | 输入角度（弧度） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | x 的正切值 |


