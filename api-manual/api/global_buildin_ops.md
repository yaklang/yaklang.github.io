---
sidebar_position: 1
---

# 语法扩展：全局函数表

## 基础内置函数列表

|函数名|函数描述|参数|返回值|用法案例|
|:----|:------|:-----|:-----|:-----|
|append|slice / list 的追加|参数一为一个 Slice，剩余可变参数为想要追加到 slice 中的元素|slice T: 追加元素过后的新 slice|`a=[1,2,3,4];a = append(a, 4,1,2)`|
|copy|slice / list 复制|两个参数，第一个为要复制到的 slice，第二个是源 slice|int复制了几个元素(int)|`a=[1,2,3,4];b=[6,7,8];copy(b, a)`|
|delete|根据 key 删除 map 的某个键值对|第一个参数为需要删除键值对的 map，第二个参数想要删除的 key|-|`a={"abc": 1};delete(a, "abc")`|
|len|用来统计一个对象的长度(chan/slice/map)|需要统计长度的对象|int: 元素的长度|`a=[1,2,3];len(a)`|
|cap|用来统计一个对象的容量(chan/slice/map)：与 len 具体区别请查看 Golang 相关文档|需要统计容量的对象|int: 元素的长度|`a=[1,2,3];cap(a)`|
|make|同Golang的 make，可以用来创建 map / slice / chan|参数一为想要创建的实例的类型，剩余可变参数为容量，大小，长度等|返回值为创建成功的对象|`make([]int); make([]int, 1); make(map[string]string); make(chan var, 1)`|
|close|关闭 chan|参数为想要关闭的 chan 实例|-|`ch=make(chan int, 2); ch<-1; close(ch);`|
|panic|同 Golang `panic`，程序出现大的异常，需要退出脚本|||`panic("Unexpected ERROR!!!")`|
|recover|同 Golang `recover`，配合 defer 使用可以恢复 panic|||`defer fn{err = recover();println(err)}; panic("111")`|
|die|panic 的变种，接收一个参数，这个参数如果是 error 类型（Golang类型）则报错退出脚本|接收一个参数|-|`rsp, err = http.Get("http://baidu.com"); die(err);`|
|fail|基本同 panic，但是可以接收任何参数，使用起来更友好|任何参数|-|`fail(1, 2, 3)`|
|panicf|同 Golang `panic(fmt.Sprintf())` 程序出现大的异常，需要退出脚本|||`a=123; panicf("Error Code: %v", a)`|
|print|同 Golang `fmt.Print`|||`print("To Stdout CONSOLE ....")`|
|printf|同 Golang `fmt.Printf`|||`a="v1ll4n";printf("To Stdout by %v", a)`|
|println|同 Golang `fmt.Println`|||`println("Hello World")`|
|sprint|同 Golang `fmt.Sprint`||返回格式化后的 str|`str = sprint("To Stdout CONSOLE ....")`|
|sprintf|同 Golang `fmt.Sprintf`||返回格式化后的 str|`a="v1ll4n";str = sprintf("To Stdout by %v", a)`|
|sprintln|同 Golang `fmt.Sprintln`||返回格式化后的 str|`str = sprintln("Hello World")`|
|get|获取一个 map 的 key 的值|两个参数，第一个参数为需要操作的 map，第二个参数为 map 的 key|key 的具体值|`a={"abb":123};println(get(a, "abb"))`|
|set|设置 map 的键值对|三个参数，第一个参数为要操作的 map，第二个参数为 map 的 key，第三个参数为 map 的值|-|`a={"abc": "123"};set(a, "abc", "555");println(a) // OUTPUT: map[abc:555]`|
|float|类型转换为 float64|||`float(1)`|
|float64|类型转换为 float64|||`float64(1)`|
|float32|类型转换为 Golang 的 float32|||`float32(1)`|
|int8|类型转换为 int8||||
|int16|类型转换函数||||
|int32|类型转换函数||||
|int64|类型转换函数||||
|int|类型转换函数||||
|uint|类型转换函数||||
|byte|类型转换函数||||
|uint8|类型转换函数||||
|uint16|类型转换函数||||
|uint32|类型转换函数||||
|uint64|类型转换函数||||
|string|类型转换函数||||
|bool|类型转换函数||||
|parseInt|||||
|parseStr/parseString|任意对象转换成 string 类型的值，相当于 `fmt.Sprintf("%v", param)`| 输入任意对象 | 输出这个对象的 string 样子| `println(parseStr(01235))` 输出 `669`|
|parseBool/parseBoolean|字符串转换成 bool 的值，相当于 `strconv.ParseBool(param)`如果解析失败，会返回 `false`| 输入一个字符串(`t/true/T/True/F/False/1/0`均能合理解析)|解析结果为 bool| `println(parseBool("T"));`|
|parseFloat|字符串转换为 float||||
|var|类型转换函数，转换为 Golang 中的 `interface{}`||||
|type|获取一个实例实际的类型|想要查看类型的|返回具体的类型信息，可以直接println查看|`println(type(make(map[string]int, 4)))`|
|max|取所有参数的最大值|输入数字即可，int float 都行|所有参数的最大值|`max(1,23,4,666.1)`|
|min|取参数的最小值|输入数字即可，int float 都行|所有参数的最小值|`min(1,23,4,666.1)`|
|sleep| Sleep 一段时间| 输入想要 sleep 的秒数，支持 float |-|`sleep(1.2) // sleep 1.2 秒`|
|wait| Wait 是 Sleep 的强化版，兼容 Sleep 的功能，同时支持 Wait 一个 `context.Context` | 如果输入数字，则 Sleep 一段时间，如果输入 Context，则 `<-ctx.Done` 等待执行完，也支持针对 `sync.WaitGroup` 和 `sync.SizedWaitGroup` | - | `wait(1);wait(0.5);wait(context.Background());` |
|uuid|随机生成一个 uuid|无参数|返回 UUID 的 string|`print(uuid())`|
|loglevel|设置系统执行日志的级别，默认为 warning | 参数为字符串 `"info" | "warning" | "error" | "debug"` 等 |-|`loglevel("info)`|
|timestamp|获取当前时间戳，同 `time.Now().Unix()`|-|int64 当前时间戳（秒）， |`ts = timestamp()`|
|nanotimestamp|获取当前时间戳，同 `time.Now().UnixNano()`|-|int64 当前时间戳（纳秒）|`nanots = nanotimestamp()`|
|timestampToTime|把当前时间戳转换成 time.Time 对象|参数只有一个，时间戳（int64）|time.Time对象|`dump(timestampToTime(timestamp()))`|
|timestampToDatetime|时间戳转换成可读的时间字符串|参数只有一个，时间戳（int64）|`2006-01-02 15:04:05` 格式的字符串|`print(timestampToDatetime(timestamp()))`|
|datetime|获取当前日期到秒的字符串|-|`2006-01-02 15:04:05` 格式的字符串|`println(datetime())`|
|datetimeToTimestamp|可读时间字符串转换成时间戳(int64)|`2006-01-02 15:04:05` 格式的字符串|返回一个 int64 unix 时间戳|`println(datetimeToTimestamp(datetime()))`|
|date|获取当前日期到天的字符串|-|`2006-01-02` 格式字符串||
|dump|展示实例的详细信息，相当于 println 的强化版，可以展示非常详细的成员信息|无限制输入参数，多个参数均可执行|-|`a = {"abc": 123}; dump(a)`|
|sdump|实例的详细信息输出到字符串，相当于 sprintln 的强化版，可以展示非常详细的成员信息|无限制输入参数，多个参数均可执行|-|`a = {"abc": 123}; println(sdump(a))`|
|assert/assertTrue|确保 `assert(expr, reasons...)` expr 是正确的，否则报错，原因是 reasons 的内容|expr 是一个表达式，reasons 可以任意填内容|-|`expr=1>2;assert(expr, "ERROR")`|
|assertf|`assert` 功能一致，但是可以接收格式化字符串输入|||`expr=1>2; assertf(expr, "ERROR: %v", "1>2")`|
|isEmpty|判断实例是 nil 或者 undefined | 输入想要判断的实例|如果是 nil 或 undefined，返回 true，否则 false| `a,b,c=isEmpty(nil),isEmpty(undefined),isEmpty(111);println(a,b,c)` |
|assertEmpty| 确保实例是 nil 或者 undefined，如果不是，抛出错误|只有一个参数，参数为一个实例，会判断是不是 nil 或者 undefined||`rsp, err = http.Get("http://baidu.com"); assertEmpty(err)`|
|randn|随机生成一个 int|两个参数 randn(min, max) 最小值和最大值均为 int|返回 min 和 max 之间的一个随机整形|`println(randn(1,99))`|
|randstr|随机生成一个字符串|只有一个参数，参数为随机字符串的长度|返回随机生成的字符串|`println(randstr(10))` 输出 `hhisgUZdlN`|
|desc|描述一个对象的结构|参数为想要描述的对象|-|`desc(yourParam)`|
|import|导入一个模块中的某个变量|[`详细定义在这里`](/api-manual/api/dyn#dynimport)|-|`import('file.yak', "abcFunc")`|
|now|同 time.Now ||||
|mkmap|已废弃||||
|mapFrom|已废弃||||
|mapOf|已废弃||||
|mkslice|已废弃||||
|slice|已废弃||||
|sliceFrom|已废弃||||
|sliceOf|已废弃||||
|sub|已废弃||||