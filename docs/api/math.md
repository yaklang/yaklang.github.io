# math


|成员函数|函数描述/介绍|
|:------|:--------|
 | [math.Abs](#mathabs) |  |
 | [math.Ceil](#mathceil) |  |
 | [math.Floor](#mathfloor) |  |
 | [math.IsNaN](#mathisnan) |  |
 | [math.NaN](#mathnan) |  |
 | [math.Pow](#mathpow) |  |
 | [math.Pow10](#mathpow10) |  |
 | [math.Round](#mathround) |  |
 | [math.RoundToEven](#mathroundtoeven) |  |
 | [math.Sqrt](#mathsqrt) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`math.E`|`float64`| //|
|`math.Ln10`|`float64`| //|
|`math.Ln2`|`float64`| //|
|`math.Pi`|`float64`| //|
|`math.Sqrt2`|`float64`| //|
|`math.SqrtE`|`float64`| //|
|`math.SqrtPi`|`float64`| //|





## 函数定义

### math.Abs



#### 详细描述



#### 定义：

`Abs(x float64) float64  doc:Abs returns the absolute value of x.Special cases are:	Abs(±Inf) = &#43;Inf	Abs(NaN) = NaN`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.Ceil



#### 详细描述



#### 定义：

`Ceil(x float64) float64  doc:Ceil returns the least integer value greater than or equal to x.Special cases are:	Ceil(±0) = ±0	Ceil(±Inf) = ±Inf	Ceil(NaN) = NaN`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.Floor



#### 详细描述



#### 定义：

`Floor(x float64) float64  doc:Floor returns the greatest integer value less than or equal to x.Special cases are:	Floor(±0) = ±0	Floor(±Inf) = ±Inf	Floor(NaN) = NaN`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.IsNaN



#### 详细描述



#### 定义：

`IsNaN(f float64) (is bool)  doc:IsNaN reports whether f is an IEEE 754 ``not-a-number&#39;&#39; value.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### math.NaN



#### 详细描述



#### 定义：

`NaN() float64  doc:NaN returns an IEEE 754 ``not-a-number&#39;&#39; value.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.Pow



#### 详细描述



#### 定义：

`Pow(x, y float64) float64  doc:Pow returns x**y, the base-x exponential of y.Special cases are (in order):	Pow(x, ±0) = 1 for any x	Pow(1, y) = 1 for any y	Pow(x, 1) = x for any x	Pow(NaN, y) = NaN	Pow(x, NaN) = NaN	Pow(±0, y) = ±Inf for y an odd integer &lt; 0	Pow(±0, -Inf) = &#43;Inf	Pow(±0, &#43;Inf) = &#43;0	Pow(±0, y) = &#43;Inf for finite y &lt; 0 and not an odd integer	Pow(±0, y) = ±0 for y an odd integer &gt; 0	Pow(±0, y) = &#43;0 for finite y &gt; 0 and not an odd integer	Pow(-1, ±Inf) = 1	Pow(x, &#43;Inf) = &#43;Inf for |x| &gt; 1	Pow(x, -Inf) = &#43;0 for |x| &gt; 1	Pow(x, &#43;Inf) = &#43;0 for |x| &lt; 1	Pow(x, -Inf) = &#43;Inf for |x| &lt; 1	Pow(&#43;Inf, y) = &#43;Inf for y &gt; 0	Pow(&#43;Inf, y) = &#43;0 for y &lt; 0	Pow(-Inf, y) = Pow(-0, -y)	Pow(x, y) = NaN for finite x &lt; 0 and finite non-integer y`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |
| v2 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.Pow10



#### 详细描述



#### 定义：

`Pow10(n int) float64  doc:Pow10 returns 10**n, the base-10 exponential of n.Special cases are:	Pow10(n) =    0 for n &lt; -323	Pow10(n) = &#43;Inf for n &gt; 308`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.Round



#### 详细描述



#### 定义：

`Round(x float64) float64  doc:Round returns the nearest integer, rounding half away from zero.Special cases are:	Round(±0) = ±0	Round(±Inf) = ±Inf	Round(NaN) = NaN`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.RoundToEven



#### 详细描述



#### 定义：

`RoundToEven(x float64) float64  doc:RoundToEven returns the nearest integer, rounding ties to even.Special cases are:	RoundToEven(±0) = ±0	RoundToEven(±Inf) = ±Inf	RoundToEven(NaN) = NaN`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### math.Sqrt



#### 详细描述



#### 定义：

`Sqrt(x float64) float64  doc:Sqrt returns the square root of x.Special cases are:	Sqrt(&#43;Inf) = &#43;Inf	Sqrt(±0) = ±0	Sqrt(x &lt; 0) = NaN	Sqrt(NaN) = NaN`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 


