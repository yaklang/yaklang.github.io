---
sidebar_position: 3
---

# 【模糊测试】- fuzz

可能是北半球最好用的模糊测试工具包。

很多时候，本扩展包的内容不仅仅可以用于生成模糊测试的 Payload，也可以用于生成批量渲染的 HTTP 请求。

## 为什么会有这个包？fuzz 应该用在哪里？

本身模糊测试并不是一个高深的话题，其实使用场景也非常非常多：

在日常的使用中，我们经常会使用 Burpsuite 的 Intruder 添加自定义字典，批量发送 HTTP 数据包，然后根据测试的结果进行输出点判断。往往这些步骤都是手动进行的，我们的 yak fuzz 模块希望为这种方式提供可编程的实现，帮助大家更容易编写漏洞检测算法，把渗透测试经验，沉淀为可规模化的产品/算法功能。

另一个场景，我们在进行爆破的时候，需要生成字典，例如

```txt
admin1
admin2
admin3
...
admin10
1
2
3
...
10
```

有时候，我们需要扫描某些目标，但是某些情况下，需要调用的文件支持`主机:端口`的形态，我们需要生成目标文件作为别的工具的输入。

等等...

这是一个充满想象力的模块，怎么样使用需要用户极大的发挥自己的想象力。

## 模糊测试字符串

模糊测试字符串的核心函数是

`fn fuzz.Strings(origin: string) []string`

这个函数会把核心的 `{{  }}` 标签转变为需要渲染的内容，例如 `{{int(1-5)}}` 会被渲染为 `[1 2 3 4 5]`

我们的标签是 fuzz 库执行的关键。他其实更像是 `正则` 的逆向，我们规定模糊测试渲染函数和渲染条件，通过执行 `fuzz.Strings` 来获取渲染的结果，以次把一个字符串，变成 N 个字符串。

### QuickStart: 尝试解析一个数字列表

```go
origin := "{{int(1,3,4,80-88)}}"
res := fuzz.Strings(origin)
println("需要模糊渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)

/*
OUTPUT:

需要模糊渲染的字符串为： {{int(1,3,4,80-88)}}
渲染结果为：
([]string) (len=12 cap=12) {
 (string) (len=1) "1",
 (string) (len=1) "3",
 (string) (len=1) "4",
 (string) (len=2) "80",
 (string) (len=2) "81",
 (string) (len=2) "82",
 (string) (len=2) "83",
 (string) (len=2) "84",
 (string) (len=2) "85",
 (string) (len=2) "86",
 (string) (len=2) "87",
 (string) (len=2) "88"
}
*/
```

### fuzz 标签定义以及使用

我们如果想要使用 fuzz 标签，需要明确两个概念，标签的格式是自定义的，目前支持 `{{` 和 `}}` 作为标签的标记，也支持 `__` 和 `__`。

我们以 `{{int()}}` 为例，`int` 代表标签要渲染的具体功能，`()` 括号中的内容是渲染材料，有一些标签需要，有一些标签可以没有，例如 `随机类` 的标签。

在同一个渲染的字符串中，完全相同的标签不会做排列组合，而是被渲染成相同的元素。如果真的需要标签渲染内容完全相同，并且需要分别渲染，可以在标签函数功能后增加一个数字，例如 `{{int1()}}`, `{{int2()}}` 这两个标签同 `{{int()}}` 完全等效，但是可以分别渲染。

#### 标签分级别

一般来说，标签分为两类，优先级不同，编码标签的优先级是最低的。

何为编码标签？

`yak -c 'dump(fuzz.Strings("{{base64enc(aaaaiasdfjklasijldf)}}"))'`

当我们执行上面的代码的时候，我们使用了一个新标签 `base64enc`，这个标签，可以把括号内的内容编码成 `base64`

```go
([]string) (len=1 cap=1) {
 (string) (len=28) "YWFhYWlhc2RmamtsYXNpamxkZg=="
}
```

直接使用 `base64enc` 标签，会编码目标字符串，如果配合其他标签使用，同样也会编码成多个不同的字符串，我们看如下的例子

`yak -c 'dump(fuzz.Strings("{{base64enc(aa-{{int(1-10)}})}}"))'`

执行结果为 

```go
([]string) (len=10 cap=10) {
 (string) (len=8) "YWEtMQ==",
 (string) (len=8) "YWEtMg==",
 (string) (len=8) "YWEtMw==",
 (string) (len=8) "YWEtNA==",
 (string) (len=8) "YWEtNQ==",
 (string) (len=8) "YWEtNg==",
 (string) (len=8) "YWEtNw==",
 (string) (len=8) "YWEtOA==",
 (string) (len=8) "YWEtOQ==",
 (string) (len=8) "YWEtMTA="
}
```

上述结果其实是列表 `[aa-1 aa-2 ... aa-7 aa-8 aa-9 aa-10]` 编码 base64 之后的结果。

### 【基础标签】`{{int}}` 渲染整数/端口

这是我们目前接触过的第一个标签，可以把 `1-10,44,80-800` 这种数字范围的端口转变成分别的数字。

1. 例如 `1-10` 变成 `[1 2 3 4 5 6 ... 9 10]`
2. `1-4,7-9` 变成 `[1 2 3 4 7 8 9]`

#### 用途

最常用的用户其实是渲染一个端口，端口组；

当然，如果我们想要爆破密码的时候，生成密码也可以使用这个标签。

#### 别名

我们以 `{{int(1-10)}}` 为例，如下的写法均等效，**不区分大小写**

1. 增加一个数字后缀 `{{int1(1-10)}}`
2. `{{i(1-10)}}` | `{{i1(1-10)}}` | `{{i2(1-10)}}`
3. `{{port(1-10)}}` | ``{{port2(1-10)}}` `
3. `{{integer(1-10)}}` | ``{{integer2(1-10)}}` `

#### 用法用例，疑难杂症

##### 案例一：最简单的用法

我们接触过这个例子，其实非常容易理解

```go
origin := "{{int(1,3,4,80-88)}}"
res := fuzz.Strings(origin)
println("需要模糊渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)

/*
OUTPUT:

需要模糊渲染的字符串为： {{int(1,3,4,80-88)}}
渲染结果为：
([]string) (len=12 cap=12) {
 (string) (len=1) "1",
 (string) (len=1) "3",
 (string) (len=1) "4",
 (string) (len=2) "80",
 (string) (len=2) "81",
 (string) (len=2) "82",
 (string) (len=2) "83",
 (string) (len=2) "84",
 (string) (len=2) "85",
 (string) (len=2) "86",
 (string) (len=2) "87",
 (string) (len=2) "88"
}
*/
```

##### 案例二：重复渲染与独立渲染

基本上所有的标签都支持这个特性，我们作为对比，举下面两个例子，来说明重复渲染和独立渲染究竟是怎么一回事

```go
origin := "{{int(1-5)}}{{int(1-5)}}"
res := fuzz.Strings(origin)
println("需要模糊渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)
```

当我们执行上面的脚本，应该渲染出的内容我们可能会认为是

```txt
11
12
13
14
...
31
32
33
...
53
54
55
```

但是实际上是这样吗？我们执行之后发现

```go
需要模糊渲染的字符串为： {{int(1-5)}}{{int(1-5)}}
渲染结果为：
([]string) (len=5 cap=5) {
 (string) (len=2) "11",
 (string) (len=2) "22",
 (string) (len=2) "33",
 (string) (len=2) "44",
 (string) (len=2) "55"
}
```

这是由于，本质上这个技术是采用字符串替换来操作的，完全相同的标签会被替换成同一个目标，这非常关键。

但是我们如果想，分别渲染，获得我们一开始预期的结果，应该如何操作？

我们可以把渲染的目标修改为其他等效标签，例如 `{{int1(1-5)}}` `{{i(1-5)}}` 等，这样替换就可以独立渲染标签了，这个特性不止本标签适用，其他的标签均可使用。

```go
需要模糊渲染的字符串为： {{int1(1-5)}}{{int(1-5)}}
渲染结果为：
([]string) (len=25 cap=26) {
 (string) (len=2) "11",
 (string) (len=2) "12",
 (string) (len=2) "13",
 (string) (len=2) "14",
 (string) (len=2) "15",
 (string) (len=2) "21",
 (string) (len=2) "22",
 (string) (len=2) "23",
 (string) (len=2) "24",
 (string) (len=2) "25",
 (string) (len=2) "31",
 (string) (len=2) "32",
 (string) (len=2) "33",
 (string) (len=2) "34",
 (string) (len=2) "35",
 (string) (len=2) "41",
 (string) (len=2) "42",
 (string) (len=2) "43",
 (string) (len=2) "44",
 (string) (len=2) "45",
 (string) (len=2) "51",
 (string) (len=2) "52",
 (string) (len=2) "53",
 (string) (len=2) "54",
 (string) (len=2) "55"
}
```

### 【基础标签】`{{net}} / {{host}}` 渲染扫描目标

这个标签本质上和 `str.ParseStringToHosts` 一样，会造成相同的效果，我们会把目标拆分成多个主机，支持网段，域名，IP 等。解析结果都是以 `,` 为分割的。

例如
当我们执行如下代码

```go
origin := "{{net(192.168.1.1/28,example.com,10.3.1.2)}}"
res := fuzz.Strings(origin)
println("需要模糊渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)
```

执行结果为

```go
需要模糊渲染的字符串为： {{net(192.168.1.1/28,example.com,10.3.1.2)}}
渲染结果为：
([]string) (len=18 cap=18) {
 (string) (len=11) "192.168.1.0",
 (string) (len=11) "192.168.1.1",
 (string) (len=11) "192.168.1.2",
 (string) (len=11) "192.168.1.3",
 (string) (len=11) "192.168.1.4",
 (string) (len=11) "192.168.1.5",
 (string) (len=11) "192.168.1.6",
 (string) (len=11) "192.168.1.7",
 (string) (len=11) "192.168.1.8",
 (string) (len=11) "192.168.1.9",
 (string) (len=12) "192.168.1.10",
 (string) (len=12) "192.168.1.11",
 (string) (len=12) "192.168.1.12",
 (string) (len=12) "192.168.1.13",
 (string) (len=12) "192.168.1.14",
 (string) (len=12) "192.168.1.15",
 (string) (len=11) "example.com",
 (string) (len=8) "10.3.1.2"
}
```

#### 别名

别名类似 `{{int(1-10)}}` 的各种别名，`{{net}}` 本身也支持各种别名，他们彼此之间等效，我们以 `{{net(10.3.0.1/24)}}` 为例，如下标签全部等效。

1. `{{n(10.3.0.1/24)}}`
1. `{{host(10.3.0.1/24)}}`
1. `{{net(10.3.0.1/24)}}`
1. `{{network(10.3.0.1/24)}}`

#### 经典案例：配合 `{{int}}` 来使用

当我们需要批量生成一批 URL，我们应该如何做？可以参考如下案例

```go
origin := "http://{{net(176.1.0.1/28,example.com)}}:{{port(8080)}}/admin.php"
res := fuzz.Strings(origin)
println("需要模糊渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)
```

输出结果为

```txt
需要模糊渲染的字符串为： http://{{net(176.1.0.1/28,example.com)}}:{{port(8080)}}/admin.php
渲染结果为：
([]string) (len=17 cap=18) {
 (string) (len=31) "http://176.1.0.0:8080/admin.php",
 (string) (len=31) "http://176.1.0.1:8080/admin.php",
 (string) (len=31) "http://176.1.0.2:8080/admin.php",
 (string) (len=31) "http://176.1.0.3:8080/admin.php",
 (string) (len=31) "http://176.1.0.4:8080/admin.php",
 (string) (len=31) "http://176.1.0.5:8080/admin.php",
 (string) (len=31) "http://176.1.0.6:8080/admin.php",
 (string) (len=31) "http://176.1.0.7:8080/admin.php",
 (string) (len=31) "http://176.1.0.8:8080/admin.php",
 (string) (len=31) "http://176.1.0.9:8080/admin.php",
 (string) (len=32) "http://176.1.0.10:8080/admin.php",
 (string) (len=32) "http://176.1.0.11:8080/admin.php",
 (string) (len=32) "http://176.1.0.12:8080/admin.php",
 (string) (len=32) "http://176.1.0.13:8080/admin.php",
 (string) (len=32) "http://176.1.0.14:8080/admin.php",
 (string) (len=32) "http://176.1.0.15:8080/admin.php",
 (string) (len=33) "http://example.com:8080/admin.php"
}
```

### 【基础标签】`{{randstr}}` 生成随机字符串

`randstr` 是一个非常常见的渲染模版，这个模版的意思是，生成一个随机字符串，只包含二十六个英文字母大小写，值得注意的是，`{{randstr}}` 的参数有四种不同类型分别如下：

1. `{{randstr(length)}}` 例如：`{{randstr(8)}}` 意思是，生成一个长度是 8 的随机字符串
1. `{{randstr(min,max)}}` 生成一个长度在 `min` 和 `max` 之间的随机字符串，例如 `{{randstr(4,8)}}`
1. `{{randstr(min,max,repeat)}}` 重复 `repeat` 次生成一个 `min` 和 `max` 之间长度的字符串组
1. `{{randstr}}` 例如：`{{randstr}}` 就可以直接被渲染，等效为 `{{randstr(8,8)}}`

#### 别名

我们以 `{{randstr}}` 为例，他的各种别名如下

1. `{{randstr}}`
1. `{{rands}}`
1. `{{rs}}`

#### 使用案例

```go
origin := "randomStr: {{randstr}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)

origin := "randomStr: {{randstr(8)}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)


origin := "randomStr: {{randstr(4,8)}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)


origin := "randomStr: {{randstr(5,7,5)}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)
```

上述的内容，执行的结果为

```go
需要模糊随机渲染的字符串为： randomStr: {{randstr}}
渲染结果为：
([]string) (len=1 cap=1) {
 (string) (len=19) "randomStr: AWHESDJX"
}
需要模糊随机渲染的字符串为： randomStr: {{randstr(8)}}
渲染结果为：
([]string) (len=1 cap=1) {
 (string) (len=19) "randomStr: ybLgYLTx"
}
需要模糊随机渲染的字符串为： randomStr: {{randstr(4,8)}}
渲染结果为：
([]string) (len=1 cap=1) {
 (string) (len=17) "randomStr: GUeSOz"
}
需要模糊随机渲染的字符串为： randomStr: {{randstr(5,7,5)}}
渲染结果为：
([]string) (len=5 cap=5) {
 (string) (len=16) "randomStr: EddRe",
 (string) (len=17) "randomStr: ozAPsC",
 (string) (len=17) "randomStr: VvnVWO",
 (string) (len=16) "randomStr: hXnGv",
 (string) (len=17) "randomStr: RnzgkC"
}
```

### 【基础标签】`{{randint}}` 生成一个随机数字

这个标签和 randstr 用途基本一样，用于生成随机一个整数。

同样的，这个标签分为四种情况

1. `{{randint(max)}}` 生成一个最大值不超过 max 的随机整数
1. `{{randint(min,max)}}` 生成一个最大最小值在 min 和 max 之间的整数
1. `{{randint(min,max,repeat)}}` 生成 `repeat` 个值在 `min` 和 `max`
1. `{{randint}}` 等价于 `{{randint(10)}}`

#### 别名

#### 使用案例

```go

origin := "randomInt: {{randint}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)

origin := "randomStr: {{randint(10)}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)


origin := "randomStr: {{randint(4,20)}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)


origin := "randomStr: {{randint(100,233,5)}}"
res := fuzz.Strings(origin)
println("需要模糊随机渲染的字符串为：", origin)
println("渲染结果为：")
dump(res)
```

执行的结果为

```go
需要模糊随机渲染的字符串为： randomInt: {{randint}}
渲染结果为：
([]string) (len=1 cap=1) {
 (string) (len=12) "randomInt: 7"
}
需要模糊随机渲染的字符串为： randomStr: {{randint(10)}}
渲染结果为：
([]string) (len=1 cap=1) {
 (string) (len=12) "randomStr: 2"
}
需要模糊随机渲染的字符串为： randomStr: {{randint(4,20)}}
渲染结果为：
([]string) (len=1 cap=1) {
 (string) (len=12) "randomStr: 5"
}
需要模糊随机渲染的字符串为： randomStr: {{randint(100,233,5)}}
渲染结果为：
([]string) (len=4 cap=4) {
 (string) (len=14) "randomStr: 132",
 (string) (len=14) "randomStr: 202",
 (string) (len=14) "randomStr: 106",
 (string) (len=14) "randomStr: 147"
}
```

### 【基础标签】`{{char}}` 指定生成单个字符

### 【编码标签】`{{md5}} {{sha1}} {{sha256}} {{sha512}}`

相比之下，这类标签更简单，这类标签是把标签内的内容进行编码，当然这类标签我们直到优先级并不高。所以支持标签的嵌套，其实还是非常简单易用的。

```go
for _, origin := range [
    "{{md5({{int(1-3)}})}}",
    "{{sha1({{int(1-3)}})}}",
    "{{sha256({{int(1-3)}})}}",
    "{{sha512({{int(1-3)}})}}",
] {
    res := fuzz.Strings(origin)
    println("需要模糊随机渲染的字符串为：", origin)
    println("渲染结果为：")
    dump(res)
    println("---------------------")
}
```

```go
需要模糊随机渲染的字符串为： {{md5({{int(1-3)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=32) "c4ca4238a0b923820dcc509a6f75849b",
 (string) (len=32) "c81e728d9d4c2f636f067f89cc14862c",
 (string) (len=32) "eccbc87e4b5ce2fe28308fd9f2a7baf3"
}
---------------------
需要模糊随机渲染的字符串为： {{sha1({{int(1-3)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=40) "356a192b7913b04c54574d18c28d46e6395428ab",
 (string) (len=40) "da4b9237bacccdf19c0760cab7aec4a8359010b0",
 (string) (len=40) "77de68daecd823babbb58edb1c8e14d7106e83bb"
}
---------------------
需要模糊随机渲染的字符串为： {{sha256({{int(1-3)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=64) "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
 (string) (len=64) "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35",
 (string) (len=64) "4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"
}
---------------------
需要模糊随机渲染的字符串为： {{sha512({{int(1-3)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=128) "4dff4ea340f0a823f15d3f4f01ab62eae0e5da579ccb851f8db9dfe84c58b2b37b89903a740e1ee172da793a6e79d560e5f7f9bd058a12a280433ed6fa46510a",
 (string) (len=128) "40b244112641dd78dd4f93b6c9190dd46e0099194d5a44257b7efad6ef9ff4683da1eda0244448cb343aa688f5d3efd7314dafe580ac0bcbf115aeca9e8dc114",
 (string) (len=128) "3bafbf08882a2d10133093a1b8433f50563b93c14acd05b79028eb1d12799027241450980651994501423a66c276ae26c43b739bc65c4e16b10c3af6c202aebb"
}
---------------------
```

:::info
编码类的标签优先级都是最低的
:::

### 【编码标签】`{{base64}} {{hex}} {{url}} {{durl}} {{html}} {{htmlhex}}`

这几个编码标签对应 `codec` \([点击这里查看具体函数](./编码解码)\) 这个包中的各个函数

#### 定义说明

1. `{{base64(txt)}}` 把 txt 进行 base64 编码，等价于 `codec.EncodeBase64`
1. `{{hex(txt)}}` 把 txt 编码成 hex，等价于 `codec.EncodeToHex`
1. `{{url(txt)}}` 把 txt 进行 URL 编码，等价于 `codec.EncodeUrl`
1. `{{durl(txt)}}` 把 txt 进行双 URL 编码，等价于 `codec.DoubleEncodeUrl`
1. `{{html(txt)}}` 把 txt 进行 html 实体编码，等价于 `codec.EncodeHtml`
1. `{{htmlhex(txt)}}` 把 txt 进行 html 实体编码(HEX)，等价于 `codec.EncodeHtmlHex`


#### 使用案例

```go
for _, origin := range [
    "{{base64({{int(1000-1002)}})}}",
    "{{hex({{int(1000-1002)}})}}",
    "{{url({{int(1000-1002)}})}}",
    "{{durl({{int(1000-1002)}})}}",
    "{{html({{int(1000-1002)}})}}",
    "{{htmlhex({{int(1000-1002)}})}}",
] {
    res := fuzz.Strings(origin)
    println("需要模糊随机渲染的字符串为：", origin)
    println("渲染结果为：")
    dump(res)
    println("---------------------")
}
```

为了展示嵌套的效果，我们针对 `[1000 1001 1002]` 这三个数字分别进行编码。

```go
需要模糊随机渲染的字符串为： {{base64({{int(1000-1002)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=8) "MTAwMA==",
 (string) (len=8) "MTAwMQ==",
 (string) (len=8) "MTAwMg=="
}
---------------------
需要模糊随机渲染的字符串为： {{hex({{int(1000-1002)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=8) "31303030",
 (string) (len=8) "31303031",
 (string) (len=8) "31303032"
}
---------------------
需要模糊随机渲染的字符串为： {{url({{int(1000-1002)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=12) "%31%30%30%30",
 (string) (len=12) "%31%30%30%31",
 (string) (len=12) "%31%30%30%32"
}
---------------------
需要模糊随机渲染的字符串为： {{durl({{int(1000-1002)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=20) "%2531%2530%2530%2530",
 (string) (len=20) "%2531%2530%2530%2531",
 (string) (len=20) "%2531%2530%2530%2532"
}
---------------------
需要模糊随机渲染的字符串为： {{html({{int(1000-1002)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=20) "&#49;&#48;&#48;&#48;",
 (string) (len=20) "&#49;&#48;&#48;&#49;",
 (string) (len=20) "&#49;&#48;&#48;&#50;"
}
---------------------
需要模糊随机渲染的字符串为： {{htmlhex({{int(1000-1002)}})}}
渲染结果为：
([]string) (len=3 cap=3) {
 (string) (len=24) "&#x31;&#x30;&#x30;&#x30;",
 (string) (len=24) "&#x31;&#x30;&#x30;&#x31;",
 (string) (len=24) "&#x31;&#x30;&#x30;&#x32;"
}
---------------------
```

## Fuzz HTTP 请求

这是一个非常神奇的功能，在上一大节中，我们了解了 fuzz 的最基础 `fuzz.Strings` 这个函数的基本操作。但是在实际操作中，只会使用 strings 其实还不够，我们经常需要针对 HTTP 请求进行 Fuzz，在这个时候，不同的 Payload 才是 Fuzz 的重头戏。

所以在这一节，我们讲着重讲解 `fuzz` 这个模块是如何支持 HTTP 请求的。

### 如何构筑可以用于 Fuzz 的请求？

### 我们可以 Fuzz HTTP 请求的哪些部分？

### 超好用的链式 API

### Fuzz 方法支持字符串的模糊测试与生成

### 如何批量发起 Fuzz 过的请求？

### 案例：如何自动化寻找网站输入点？