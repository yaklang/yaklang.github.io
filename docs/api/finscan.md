# finscan {#library-finscan}

`finscan` 库实现 FIN 扫描——一种隐蔽的端口扫描技术：向目标端口发送仅置 FIN 标志的 TCP 包，依据是否回 RST 判断端口状态。相比 SYN 扫描更隐蔽，可绕过部分简单防火墙/日志，但对现代系统准确性有限。

典型使用场景：

- 扫描：`finscan.Scan(target, port, opts...)` 对目标端口做 FIN 扫描，返回结果 channel。
- 控制：`finscan.concurrent` / `finscan.rateLimit` 控速，`finscan.excludeHosts` / `finscan.excludePorts` 排除，`finscan.wait` 控制收包等待，`finscan.outputFile` / `finscan.outputPrefix` 落盘。

与相邻库的关系：`finscan` 与 `synscan`（SYN 半开放扫描）同属底层端口探测，需要原始套接字权限；发现开放端口后可交给 `servicescan` 做指纹识别。

> 共 10 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [finscan.concurrent](#concurrent) | `count int` | `finScanOpt` | 设置 FIN 扫描的并发，可以有效控制精准度 |
| [finscan.excludeHosts](#excludehosts) | `hosts string` | `finScanOpt` | 设置 FIN 扫描时需要排除的主机 |
| [finscan.excludePorts](#excludeports) | `ports string` | `finScanOpt` | 设置 FIN 扫描时需要排除的端口 |
| [finscan.initHostFilter](#inithostfilter) | `f string` | `finScanOpt` | 设置 FIN 扫描的初始主机过滤器，仅扫描命中过滤器的主机 |
| [finscan.initPortFilter](#initportfilter) | `f string` | `finScanOpt` | 设置 FIN 扫描的初始端口过滤器，仅扫描命中过滤器的端口 |
| [finscan.outputFile](#outputfile) | `file string` | `finScanOpt` | 设置 FIN 扫描的端口开放结果保存到指定文件 |
| [finscan.outputPrefix](#outputprefix) | `prefix string` | `finScanOpt` | 设置 FIN 扫描结果保存到文件时添加自定义前缀，比如 tcp:// https&#58;// http&#58;// 等，需要配合 outputFile 使用 |
| [finscan.rateLimit](#ratelimit) | `ms int, count int` | `finScanOpt` | 设置 FIN 扫描的发包速率限制(每 count 个数据包延迟 ms 毫秒) |
| [finscan.wait](#wait) | `sec float64` | `finScanOpt` | 设置 FIN 扫描发出 FIN 包后等待回包的最大时间 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [finscan.Scan](#scan) | `target string, port string, opts ...finScanOpt` | `chan *finscan.FinScanResult, error` | 对目标执行 FIN 端口扫描，以 channel 形式流式返回开放端口结果 |

## 函数详情

### concurrent {#concurrent}

```go
concurrent(count int) finScanOpt
```

设置 FIN 扫描的并发，可以有效控制精准度

在 yak 中通过 finscan.concurrent 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| count | `int` | 并发数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 FIN 扫描并发
res = finscan.Scan("192.168.1.1", "1-1000", finscan.concurrent(1000))~
``````````````

---

### excludeHosts {#excludehosts}

```go
excludeHosts(hosts string) finScanOpt
```

设置 FIN 扫描时需要排除的主机

在 yak 中通过 finscan.excludeHosts 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| hosts | `string` | 需要排除的主机表达式，支持 IP、CIDR、范围等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：排除网关地址
res = finscan.Scan("192.168.1.1/24", "80", finscan.excludeHosts("192.168.1.1"))~
``````````````

---

### excludePorts {#excludeports}

```go
excludePorts(ports string) finScanOpt
```

设置 FIN 扫描时需要排除的端口

在 yak 中通过 finscan.excludePorts 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ports | `string` | 需要排除的端口表达式，如 &#34;9100,9200&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：排除指定端口
res = finscan.Scan("192.168.1.1", "1-65535", finscan.excludePorts("9100,9200"))~
``````````````

---

### initHostFilter {#inithostfilter}

```go
initHostFilter(f string) finScanOpt
```

设置 FIN 扫描的初始主机过滤器，仅扫描命中过滤器的主机

在 yak 中通过 finscan.initHostFilter 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `string` | 初始主机过滤表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置初始主机过滤器
res = finscan.Scan("192.168.1.1/24", "80", finscan.initHostFilter("192.168.1.0/24"))~
``````````````

---

### initPortFilter {#initportfilter}

```go
initPortFilter(f string) finScanOpt
```

设置 FIN 扫描的初始端口过滤器，仅扫描命中过滤器的端口

在 yak 中通过 finscan.initPortFilter 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `string` | 初始端口过滤表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置初始端口过滤器
res = finscan.Scan("192.168.1.1", "1-65535", finscan.initPortFilter("80,443"))~
``````````````

---

### outputFile {#outputfile}

```go
outputFile(file string) finScanOpt
```

设置 FIN 扫描的端口开放结果保存到指定文件

在 yak 中通过 finscan.outputFile 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `string` | 结果保存的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：将结果保存到文件
res = finscan.Scan("192.168.1.1", "1-65535", finscan.outputFile("/tmp/open_ports.txt"))~
``````````````

---

### outputPrefix {#outputprefix}

```go
outputPrefix(prefix string) finScanOpt
```

设置 FIN 扫描结果保存到文件时添加自定义前缀，比如 tcp:// https&#58;// http&#58;// 等，需要配合 outputFile 使用

在 yak 中通过 finscan.outputPrefix 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prefix | `string` | 保存到文件时添加的前缀，例如 tcp:// |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：为结果添加前缀
res = finscan.Scan("192.168.1.1", "1-65535", finscan.outputFile("./open_ports.txt"), finscan.outputPrefix("tcp://"))~
``````````````

---

### rateLimit {#ratelimit}

```go
rateLimit(ms int, count int) finScanOpt
```

设置 FIN 扫描的发包速率限制(每 count 个数据包延迟 ms 毫秒)

在 yak 中通过 finscan.rateLimit 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ms | `int` | 延迟毫秒数 |
| count | `int` | 每多少个数据包延迟一次 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：限制发包速率
res = finscan.Scan("192.168.1.1", "1-1000", finscan.rateLimit(10, 5))~
``````````````

---

### wait {#wait}

```go
wait(sec float64) finScanOpt
```

设置 FIN 扫描发出 FIN 包后等待回包的最大时间

在 yak 中通过 finscan.wait 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| sec | `float64` | 等待时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置等待时间
res = finscan.Scan("192.168.1.1", "80,443", finscan.wait(5))~
``````````````

---

## 可变参数函数详情

### Scan {#scan}

```go
Scan(target string, port string, opts ...finScanOpt) (chan *finscan.FinScanResult, error)
```

对目标执行 FIN 端口扫描，以 channel 形式流式返回开放端口结果

在 yak 中通过 finscan.Scan 调用，FIN 扫描具有较好的隐蔽性，依赖网络环境且通常需要相应权限

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 扫描目标，支持 IP、域名、CIDR、逗号分隔等多种写法 |
| port | `string` | 端口表达式，如 &#34;80,443&#34;、&#34;1-65535&#34; |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...finScanOpt` | 可选配置项，如 finscan.concurrent、finscan.wait、finscan.excludePorts 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *finscan.FinScanResult` | 一个只读 channel，逐条产出 FIN 扫描结果 |
| r2 | `error` | 错误信息，启动失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：对目标执行 FIN 端口扫描
res = finscan.Scan("192.168.1.1", "22,80,443", finscan.wait(5))~

	for result = range res {
	    println(result.Host, result.Port)
	}
``````````````

---

