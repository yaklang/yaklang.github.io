---
sidebar_position: 5
sidebar_label: "JSON 处理与流式操作"
---

# JSON 处理与流式操作

`json` 库负责 JSON 的序列化/反序列化与按路径取值；当数据很大、不完整、或像大模型输出那样"一边产生一边到达"时，则用 `jsonstream` 做**流式**解析。本章先讲常规 `json`，再讲进阶的 `jsonstream`。

:::tip dumps 的默认行为
`json.dumps` 默认输出**带 2 空格缩进、键名按字典序排序**的多行 JSON（而不是紧凑单行）。需要自定义缩进用 `json.withIndent(...)`。因此不要对 `dumps` 的输出做逐字符比较，应当 `json.loads` 回来比对值。
:::

## 分组速查表

| 分组 | 函数（含调用形态） | 说明 |
| --- | --- | --- |
| 序列化 | `json.dumps(obj, ...opts)` | 对象转 JSON 字符串（默认带缩进） |
| 反序列化 | `json.loads(str)` | JSON 字符串转对象（有序 map） |
| 取值 | `json.Find(jsonStr, "$.a.b")` `json.FindPath(jsonStr, "$.a.b")` | 用 JSONPath 取嵌套值 |
| 容错提取 | `json.ExtractJSON(rawText)` | 从噪声文本中抠出 JSON |
| dumps 选项 | `json.withIndent(s)` `json.withPrefix(s)` `json.noEscapeHTML()` | 控制 dumps 格式 |
| 流式 | `jsonstream.Extract(str, ...handlers)` `jsonstream.ExtractFromReader(r, ...handlers)` | 边读边解析 |
| 流式回调 | `jsonstream.onObject(fn)` `jsonstream.onField(name, fn)` `jsonstream.onFieldRegexp(pat, fn)` | 注册解析回调 |

## 序列化与反序列化

`json.dumps` 与 `json.loads` 互为逆操作。验证时不比对 `dumps` 的字符串（它默认带缩进、键还会排序），而是 `loads` 回来比对值，更稳健。

``````````````yak
// 特性: json.dumps / json.loads 往返
// 关键词: json.dumps, json.loads
obj = {"name": "yak", "age": 3}

// dumps 默认输出带 2 空格缩进的多行 JSON, 这里不直接断言字符串
text = json.dumps(obj)

// loads 回来比对值, 不依赖 dumps 的具体格式
back = json.loads(text)
println(back["name"])   // OUT: yak
println(back["age"])    // OUT: 3
``````````````

## 读取嵌套结构

`json.loads` 返回的对象可以像 map / 切片一样逐层下标访问，嵌套对象与数组都会被还原成对应结构。

``````````````yak
// 特性: json.loads 读取嵌套对象与数组
// 关键词: json.loads, 嵌套取值
obj = json.loads(`{"user":{"name":"alice","roles":["admin","dev"]}}`)
// 逐层下标: 对象用 ["key"], 数组用 [下标]
println(obj["user"]["name"])        // OUT: alice
println(obj["user"]["roles"][0])    // OUT: admin
println(len(obj["user"]["roles"]))  // OUT: 2
``````````````

## 用 JSONPath 取值：json.Find / json.FindPath（重点）

当只想从一段 JSON 里挑出某个深层的值时，不必先 `loads` 再一层层下标，直接用 `json.Find` 写一条 **JSONPath** 路径即可。`json.FindPath` 与 `json.Find` 等价，是它的别名。

理解三件事就够用了：

1. **路径必须以 `$` 开头**，`$` 代表 JSON 的根。
2. **下钻对象**用 `.key`，例如 `$.user.name`。
3. **取数组元素**用 `[下标]`，例如 `$.user.roles[0]`。

``````````````yak
// 特性: json.Find / json.FindPath 用 JSONPath 取值
// 关键词: json.Find, json.FindPath, JSONPath, $ 开头
data = `{"user":{"name":"alice","roles":["admin","dev"]}}`

// $ 是根, .user.name 一路下钻到字符串
println(json.Find(data, "$.user.name"))       // OUT: alice
// 数组用 [下标] 取元素
println(json.Find(data, "$.user.roles[0]"))   // OUT: admin
// FindPath 是 Find 的别名, 行为完全一致
println(json.FindPath(data, "$.user.name"))   // OUT: alice
// 也可以一次取出整个子对象(返回 map)
println(json.Find(data, "$.user.roles"))      // OUT: [admin dev]
``````````````

下面做个**对照小实验**：故意漏掉开头的 `$`。这时取不到值（返回 `nil`），控制台还会打印一条 error 日志——这正是"路径必须以 `$` 开头"的直接证据。

``````````````yak
// 特性: json.Find 路径不以 $ 开头会失败 (对照实验)
// 关键词: json.Find, JSONPath 必须 $ 开头, 易错点
data = `{"user":{"name":"alice"}}`

// 正确: 以 $ 开头
println(json.Find(data, "$.user.name"))   // OUT: alice
// 错误示范: 漏了 $, 取不到值, 返回 nil(同时会打印一条 error 日志, 属预期)
println(json.Find(data, "user.name"))     // OUT: <nil>
``````````````

:::danger JSONPath 必须以 $ 开头
路径写成 `"user.name"` 会报错并返回 `nil`，正确写法是 `"$.user.name"`。如果你发现 `json.Find` 总是拿到 `nil`，第一件事就是检查路径开头有没有 `$`。数组取下标用 `[n]`，如 `"$.user.roles[0]"`。
:::

## 自定义缩进

用 `json.withIndent` 控制输出缩进，便于落盘成人类可读的配置文件。

``````````````yak
// 特性: json.dumps + json.withIndent 控制缩进
// 关键词: json.withIndent
// 把缩进设为 4 个空格
pretty = json.dumps({"a": 1, "b": 2}, json.withIndent("    "))
// 缩进输出是多行的, 且包含我们的键值
println(str.Contains(pretty, "\n"))        // OUT: true
println(str.Contains(pretty, "\"a\": 1"))  // OUT: true
``````````````

## 从噪声文本中提取 JSON

日志、报文里常夹杂 JSON 片段。`json.ExtractJSON` 会扫描整段文本、抠出其中的 JSON 并尝试修复，返回原始 JSON 字符串切片（找不到时返回空切片）。

``````````````yak
// 特性: json.ExtractJSON 从噪声文本提取并修复 JSON
// 关键词: json.ExtractJSON, 容错提取
// 从一行混杂日志里抠出 JSON 对象
found = json.ExtractJSON(`log line {"k":"v"} trailing text`)
println(found)        // OUT: [{"k":"v"}]
println(len(found))   // OUT: 1
println(found[0])     // OUT: {"k":"v"}
``````````````

## 进阶：jsonstream 流式解析

当 JSON 很大、不完整、或像大模型输出那样逐字到达时，把整段读进内存再 `loads` 既慢又可能失败。`jsonstream` 支持**边读边解析**，并用回调在对象/字段出现时立即处理。

### onObject：解析出整个对象

``````````````yak
// 特性: jsonstream.Extract + onObject 解析整个对象
// 关键词: jsonstream.Extract, jsonstream.onObject
msg = ""
// onObject 的回调在解析出一个完整对象时被调用, 参数就是该对象(map)
jsonstream.Extract(`{"id":1,"msg":"hello"}`, jsonstream.onObject(func(d) {
    msg = d["msg"]
}))
println(msg)   // OUT: hello
``````````````

### onField：字段级字符流

`jsonstream.onField` 为指定字段注册回调，回调在**独立 goroutine** 中以 `io.Reader` 的形式拿到该字段的原始值。

:::note 字段流给到的是“原始字节”
字符串字段的原始值**带首尾双引号**且保留转义，需要用 `str.Trim(string(raw), "\"")` 去掉引号。若值含 `\n`、`\uXXXX` 等转义（AI 流式输出常见），应改用 `str.JsonStringDecode` 或 `str.NewJSONStringReader` 还原。
:::

``````````````yak
// 特性: jsonstream.onField 字段级字符流(原始值带引号)
// 关键词: jsonstream.onField, io.ReadAll, str.Trim 去引号
content = ""
jsonstream.Extract(`{"company":{"team":{"lead":"Alice"}},"content":"hello stream"}`,
    jsonstream.onField("content", func(key, reader, parents) {
        // reader 是该字段值的字符流, 读完拿到原始字节
        raw = io.ReadAll(reader)~
        // 原始值是 "hello stream"(带引号), 去掉首尾引号
        content = str.Trim(string(raw), `"`)
    }))
println(content)   // OUT: hello stream
``````````````

### 按规则匹配字段：onFieldRegexp

多个回调在并发 goroutine 中执行，共享变量要用 `sync.Mutex` 保护。`jsonstream.Extract` 会等待所有字段 goroutine 结束才返回，所以返回后读结果是安全的。

``````````````yak
// 特性: jsonstream.onFieldRegexp 正则匹配字段(并发回调 + Mutex)
// 关键词: jsonstream.onFieldRegexp, sync.NewMutex, 并发安全
mu = sync.NewMutex()
matched = []
jsonstream.Extract(`{"user_name":"alice","user_email":"a@b.com","admin_role":"root"}`,
    jsonstream.onFieldRegexp("^user_", func(key, reader, parents) {
        io.ReadAll(reader)~
        // 并发回调里改共享变量要加锁
        mu.Lock()
        matched = append(matched, key)
        mu.Unlock()
    }))
// user_name / user_email 命中, admin_role 不命中
println(len(matched))   // OUT: 2
``````````````

### 从 io.Reader 流式解析：ExtractFromReader

最贴近真实场景：数据从网络/管道一端写入，另一端边到边解析。

``````````````yak
// 特性: jsonstream.ExtractFromReader 从数据流边读边解析
// 关键词: jsonstream.ExtractFromReader, io.Pipe, 生产者消费者
// 用管道模拟“一端写入, 一端解析”
r, w = io.Pipe()
go func() {
    w.WriteString(`{"id":1,"msg":"from-stream"}`)
    w.Close()
}()

got = ""
jsonstream.ExtractFromReader(r, jsonstream.onObject(func(d) {
    got = d["msg"]
}))
println(got)   // OUT: from-stream
``````````````
