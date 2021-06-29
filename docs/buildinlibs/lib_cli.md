---
sidebar_position: 11
---

# [cli] 从命令行读参数

`cli` 这个包是 yak 处理命令行参数的工具包，用法非常简单，我们根据实例简单看一下这个包如何使用

## 获取所有参数

```go
go 测试命令 yak 26_cliutil.yak --url https://baidu.com --allow-do-sth --number1 123 --floatvar 1.23 --target "192.168.1.1/24,10.1.3.2/28" --target-port "22,3306,80,8080-8082" --urls "leavesongs.com,10.1.3.2" --urls2 "https://www.baidu.com"
```

```go title="26_cliutil.yak"
args = cli.Args()  // 获取所有命令行参数内容
dump(args)         // 展示参数结果
```

上述代码执行之后，会展示所有输入的参数：

```go
([]string) (len=17 cap=32) {
 (string) (len=3) "yak",
 (string) (len=14) "26_cliutil.yak",
 (string) (len=5) "--url",
 (string) (len=17) "https://baidu.com",
 (string) (len=14) "--allow-do-sth",
 (string) (len=9) "--number1",
 (string) (len=3) "123",
 (string) (len=10) "--floatvar",
 (string) (len=4) "1.23",
 (string) (len=8) "--target",
 (string) (len=26) "192.168.1.1/24,10.1.3.2/28",
 (string) (len=13) "--target-port",
 (string) (len=20) "22,3306,80,8080-8082",
 (string) (len=6) "--urls",
 (string) (len=23) "leavesongs.com,10.1.3.2",
 (string) (len=7) "--urls2",
 (string) (len=21) "https://www.baidu.com"
}
```

## cli 处理不同类型的参数值

### `cli.String`： 处理字符串类型参数

```go
// >  yakc clitest.yak --url https://baidu.com
strParam = cli.String("url")  
dump(strParam)
```

通过执行 `dump(strParam)` 可以看到参数类型与值

```go
(string) (len=17) "https://baidu.com"
```


### `cli.Bool`：处理 Bool 类型参数

```go
boolParam = cli.Bool("allow-do-sth")
dump(boolParam)
```

:::caution 注意 

`cli.Bool(paramName)` 不会获取参数的值，只会检测命令行中有没有当前参数，如果有的话，返回值为 `true` 否则为 `false`;

:::

### `cli.Int`：处理整数参数

```go
intParam = cli.Int("number1")
dump(intParam)
```

### `cli.Float`：处理浮点参数

```go
floatParam = cli.Float("floatvar")
dump(floatParam)
```

## cli 处理扩展数据类型

### `cli.Hosts`：处理参数是网段的情况

```go
// --target "192.168.1.1/24,10.1.3.2/28"
netParam = cli.Hosts("target")
dump(netParam)
```

上述脚本执行结果为

```go
/*
展示结果
([]string) (len=272 cap=512) {
 (string) (len=11) "192.168.1.0",
 (string) (len=11) "192.168.1.1",
 ......
 ......
 (string) (len=13) "192.168.1.253",
 (string) (len=13) "192.168.1.254",
 (string) (len=13) "192.168.1.255",
 (string) (len=8) "10.1.3.0",
 ......
 (string) (len=9) "10.1.3.14",
 (string) (len=9) "10.1.3.15"
}
*/
```

### `cli.Ports`：处理扫描端口组参数

```go
// --target-port "22,3306,80,8080-8082"
portParam = cli.Ports("target-port")
dump(portParam)
```

上述脚本执行结果为

```go
([]int) (len=6 cap=8) {
 (int) 22,
 (int) 80,
 (int) 3306,
 (int) 8080,
 (int) 8081,
 (int) 8082
}
```

:::note

本质上执行了 `str.ParseStringToPorts`

:::

### `cli.Urls`：处理目标是 url 的情况

#### 案例一

```go
// --urls "leavesongs.com,10.1.3.2,https://www.baidu.com"
urlParam = cli.Urls("urls")
dump(urlParam)
```

解析结果为 urls

```go
([]string) (len=6 cap=8) {
 (string) (len=22) "https://leavesongs.com",
 (string) (len=26) "https://www.leavesongs.com",
 (string) (len=21) "http://leavesongs.com",
 (string) (len=25) "http://www.leavesongs.com",
 (string) (len=16) "https://10.1.3.2",
 (string) (len=15) "http://10.1.3.2"
}
```

### 案例二

```
// --urls2 "https://www.baidu.com"
println("-----------------------------------------")
urlParam = cli.Urls("urls2")
dump(urlParam)
/*
([]string) (len=1 cap=1) {
 (string) (len=21) "https://www.baidu.com"
}
*/
```
