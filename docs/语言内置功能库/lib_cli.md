---
sidebar_position: 11
---

# [cli] 从命令行读参数

> 测试命令 yak data/yak-scripts/cli_quickstart.yak --url https://baidu.com --allow-do-sth --number1 123 --floatvar 1.23 --target "192.168.1.1/24,10.1.3.2/28" --target-port "22,3306,80,8080-8082" --urls "leavesongs.com,10.1.3.2" --urls2 "https://www.baidu.com"

args = cli.Args()  // 获取所有命令行参数内容
dump(args)         // 展示参数结果

println("-----------------------------------------")

## cli 处理基础数据类型

// 可以获取到 --url 的参数内容
// >  yakc clitest.yak --url https://baidu.com
strParam = cli.String("url")  

// 通过执行 dump(strParam) 可以看到参数类型与值
//   (string) (len=17) "https://baidu.com"
dump(strParam)

println("-----------------------------------------")

// 看看参数内有没有 allow-do-sth 的参数
boolParam = cli.Bool("allow-do-sth")
dump(boolParam)

println("-----------------------------------------")

// 解析一个数字
intParam = cli.Int("number1")
dump(intParam)

println("-----------------------------------------")

floatParam = cli.Float("floatvar")
dump(floatParam)

## cli 处理扩展数据类型

### 处理扫描目标
// --target "192.168.1.1/24,10.1.3.2/28"
println("-----------------------------------------")
netParam = cli.Hosts("target")
dump(netParam)

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

### 处理扫描端口
// --target-port "22,3306,80,8080-8082"
println("-----------------------------------------")
portParam = cli.Ports("target-port")
dump(portParam)

/*
// 执行结果
([]int) (len=6 cap=8) {
 (int) 22,
 (int) 80,
 (int) 3306,
 (int) 8080,
 (int) 8081,
 (int) 8082
}
*/

### 处理目标是 url 的情况
// --urls "leavesongs.com,10.1.3.2,https://www.baidu.com"
println("-----------------------------------------")
urlParam = cli.Urls("urls")
dump(urlParam)

/*
// 执行结果为
([]string) (len=6 cap=8) {
 (string) (len=22) "https://leavesongs.com",
 (string) (len=26) "https://www.leavesongs.com",
 (string) (len=21) "http://leavesongs.com",
 (string) (len=25) "http://www.leavesongs.com",
 (string) (len=16) "https://10.1.3.2",
 (string) (len=15) "http://10.1.3.2"
}
*/

// --urls2 "https://www.baidu.com"
println("-----------------------------------------")
urlParam = cli.Urls("urls2")
dump(urlParam)
/*
([]string) (len=1 cap=1) {
 (string) (len=21) "https://www.baidu.com"
}
*/

