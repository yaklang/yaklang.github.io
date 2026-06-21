# math {#library-math}

`math` 库是 Go 标准库 `math` 的 yak 封装，提供常用数学函数：三角函数、幂与开方、取整、绝对值与 NaN 判断等，用于数值计算场景。

典型使用场景：

- 基础运算：`math.Abs` / `math.Pow` / `math.Pow10` / `math.Sqrt`。
- 取整：`math.Ceil` / `math.Floor` / `math.Round` / `math.RoundToEven`。
- 三角与特殊值：`math.Sin` / `math.Cos` / `math.Tan` / `math.Asin` / `math.Acos` / `math.Atan` / `math.Sinh`，`math.NaN` / `math.IsNaN` 处理非数值。

与相邻库的关系：`math` 是纯计算库、无副作用，常与 `str`（数值转换）、统计/打分类逻辑配合使用。

> 共 17 个函数、7 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| E | `float64` | 2.718282 |
| Ln10 | `float64` | 2.302585 |
| Ln2 | `float64` | 0.693147 |
| Pi | `float64` | 3.141593 |
| Sqrt2 | `float64` | 1.414214 |
| SqrtE | `float64` | 1.648721 |
| SqrtPi | `float64` | 1.772454 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [math.Abs](#abs) | `x float64` | `float64` | 返回x的绝对值 |
| [math.Acos](#acos) | `x float64` | `float64` | 反三角函数 Acos |
| [math.Asin](#asin) | `x float64` | `float64` | 反三角函数 Asin |
| [math.Atan](#atan) | `x float64` | `float64` | 反三角函数 Atan |
| [math.Ceil](#ceil) | `x float64` | `float64` | 返回不小于x的最小整数 |
| [math.Cos](#cos) | `x float64` | `float64` | 三角函数 Cos |
| [math.Floor](#floor) | `x float64` | `float64` | 返回不大于x的最大整数 |
| [math.IsNaN](#isnan) | `x float64` | `bool` | 判断一个数是否是NaN |
| [math.NaN](#nan) | - | `float64` | 返回一个IEEE-574 “非数字”的值 |
| [math.Pow](#pow) | `x float64, y float64` | `float64` | 返回x的y次方 |
| [math.Pow10](#pow10) | `n int` | `float64` | 返回10的n次方 |
| [math.Round](#round) | `x float64` | `float64` | 返回四舍五入到最近的整数 |
| [math.RoundToEven](#roundtoeven) | `x float64` | `float64` | 返回四舍五入到最近的偶整数 |
| [math.Sin](#sin) | `x float64` | `float64` | 三角函数 sin |
| [math.Sinh](#sinh) | `x float64` | `float64` | 双曲正弦函数 |
| [math.Sqrt](#sqrt) | `x float64` | `float64` | 返回一个数的平方根 |
| [math.Tan](#tan) | `x float64` | `float64` | 三角函数 Tan |

## 函数详情

### Abs {#abs}

```go
Abs(x float64) float64
```

返回x的绝对值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的绝对值 |

**示例**

``````````````yak
result = math.Abs(-1)
println(result)   // OUT: 1
assert result == 1.0, "Abs of -1 should be 1"
assert math.Abs(1) == 1.0, "Abs of 1 should be 1"
``````````````

---

### Acos {#acos}

```go
Acos(x float64) float64
```

反三角函数 Acos

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值（区间 [-1, 1]） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的反余弦值（弧度） |

**示例**

``````````````yak
result = math.Acos(1)
println(result)   // OUT: 0
assert result == 0.0, "Acos of 1 should be 0"
``````````````

---

### Asin {#asin}

```go
Asin(x float64) float64
```

反三角函数 Asin

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值（区间 [-1, 1]） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的反正弦值（弧度） |

**示例**

``````````````yak
result = math.Asin(0)
println(result)   // OUT: 0
assert result == 0.0, "Asin of 0 should be 0"
``````````````

---

### Atan {#atan}

```go
Atan(x float64) float64
```

反三角函数 Atan

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的反正切值（弧度） |

**示例**

``````````````yak
result = math.Atan(0)
println(result)   // OUT: 0
assert result == 0.0, "Atan of 0 should be 0"
``````````````

---

### Ceil {#ceil}

```go
Ceil(x float64) float64
```

返回不小于x的最小整数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 向上取整（朝 +Inf）后的结果 |

**示例**

``````````````yak
result = math.Ceil(1.5)
println(result)   // OUT: 2
assert result == 2.0, "Ceil should round up"
assert math.Ceil(-1.5) == -1.0, "Ceil of negative rounds toward +Inf"
``````````````

---

### Cos {#cos}

```go
Cos(x float64) float64
```

三角函数 Cos

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入角度（弧度） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的余弦值 |

**示例**

``````````````yak
result = math.Cos(0)
println(result)   // OUT: 1
assert result == 1.0, "Cos of 0 should be 1"
``````````````

---

### Floor {#floor}

```go
Floor(x float64) float64
```

返回不大于x的最大整数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 向下取整（朝 -Inf）后的结果 |

**示例**

``````````````yak
result = math.Floor(1.5)
println(result)   // OUT: 1
assert result == 1.0, "Floor should round down"
assert math.Floor(-1.5) == -2.0, "Floor of negative rounds toward -Inf"
``````````````

---

### IsNaN {#isnan}

```go
IsNaN(x float64) bool
```

判断一个数是否是NaN

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否为 NaN |

**示例**

``````````````yak
result = math.IsNaN(math.NaN())
println(result)   // OUT: true
assert result == true, "NaN should be detected"
assert math.IsNaN(1) == false, "1 is a number"
``````````````

---

### NaN {#nan}

```go
NaN() float64
```

返回一个IEEE-574 “非数字”的值

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 一个 NaN 浮点值 |

**示例**

``````````````yak
result = math.IsNaN(math.NaN())
println(result)   // OUT: true
assert result == true, "NaN should produce a NaN value"
``````````````

---

### Pow {#pow}

```go
Pow(x float64, y float64) float64
```

返回x的y次方

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 底数 |
| y | `float64` | 指数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的 y 次幂 |

**示例**

``````````````yak
result = math.Pow(2, 3)
println(result)   // OUT: 8
assert result == 8.0, "2 to the power 3 should be 8"
assert math.Pow(2, -1) == 0.5, "2 to the power -1 should be 0.5"
``````````````

---

### Pow10 {#pow10}

```go
Pow10(n int) float64
```

返回10的n次方

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 整数指数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 10 的 n 次幂 |

**示例**

``````````````yak
result = math.Pow10(2)
println(result)   // OUT: 100
assert result == 100.0, "10 to the power 2 should be 100"
assert math.Pow10(3) == 1000.0, "10 to the power 3 should be 1000"
``````````````

---

### Round {#round}

```go
Round(x float64) float64
```

返回四舍五入到最近的整数

存在一些特殊情况：Round(±0) = ±0，Round(±Inf) = ±Inf，Round(NaN) = NaN

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 四舍五入到最近整数的结果 |

**示例**

``````````````yak
result = math.Round(1.5)
println(result)   // OUT: 2
assert result == 2.0, "Round should round half up"
assert math.Round(1.4) == 1.0, "Round should round down below half"
``````````````

---

### RoundToEven {#roundtoeven}

```go
RoundToEven(x float64) float64
```

返回四舍五入到最近的偶整数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 银行家舍入到最近偶整数的结果 |

**示例**

``````````````yak
// 银行家舍入：恰好 .5 时向最近的偶数取整
result = math.RoundToEven(2.5)
println(result)   // OUT: 2
assert result == 2.0, "2.5 rounds to even 2"
assert math.RoundToEven(1.5) == 2.0, "1.5 rounds to even 2"
assert math.RoundToEven(3.5) == 4.0, "3.5 rounds to even 4"
``````````````

---

### Sin {#sin}

```go
Sin(x float64) float64
```

三角函数 sin

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入角度（弧度） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的正弦值 |

**示例**

``````````````yak
result = math.Sin(0)
println(result)   // OUT: 0
assert result == 0.0, "Sin of 0 should be 0"
``````````````

---

### Sinh {#sinh}

```go
Sinh(x float64) float64
```

双曲正弦函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值（弧度） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的双曲正弦值 |

**示例**

``````````````yak
result = math.Sinh(0)
println(result)   // OUT: 0
assert result == 0.0, "Sinh of 0 should be 0"
``````````````

---

### Sqrt {#sqrt}

```go
Sqrt(x float64) float64
```

返回一个数的平方根

如果x &lt; 0，返回NaN

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的平方根；x&lt;0 时为 NaN |

**示例**

``````````````yak
result = math.Sqrt(4)
println(result)   // OUT: 2
assert result == 2.0, "Sqrt of 4 should be 2"
assert math.IsNaN(math.Sqrt(-1)) == true, "Sqrt of negative should be NaN"
``````````````

---

### Tan {#tan}

```go
Tan(x float64) float64
```

三角函数 Tan

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| x | `float64` | 输入角度（弧度） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | x 的正切值 |

**示例**

``````````````yak
result = math.Tan(0)
println(result)   // OUT: 0
assert result == 0.0, "Tan of 0 should be 0"
``````````````

---

