# tools {#library-tools}

`tools` 库提供一组底层工具构造器，目前包含爆破工具与 PoC 调用器的创建入口，作为更高层安全功能的基础组件。

典型使用场景：

- 构造工具：`tools.NewBruteUtil(type)` 创建底层爆破工具实例，`tools.NewPocInvoker()` 创建 PoC 调用器用于驱动 PoC 执行。

与相邻库的关系：`tools` 偏底层构造，`brute`（爆破框架）、`nuclei`/`httptpl`（PoC 执行）等在更高层提供更易用的封装；一般优先用上层库。

> 共 2 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [tools.NewBruteUtil](#newbruteutil) | `t string` | `*bruteutils.BruteUtil, error` | 根据指定的服务类型创建一个多目标爆破工具(BruteUtil) |
| [tools.NewPocInvoker](#newpocinvoker) | - | `*PocInvoker, error` | 创建一个 POC 调用器，用于驱动 xray/nuclei 等外部 POC 引擎执行检测 |

## 函数详情

### NewBruteUtil {#newbruteutil}

```go
NewBruteUtil(t string) (*bruteutils.BruteUtil, error)
```

根据指定的服务类型创建一个多目标爆破工具(BruteUtil)

在 yak 中通过 tools.NewBruteUtil 调用，服务类型如 &#34;ssh&#34;、&#34;redis&#34;、&#34;mysql&#34; 等

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `string` | 爆破目标的服务类型名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bruteutils.BruteUtil` | 爆破工具对象，可用于对多个目标执行口令爆破 |
| r2 | `error` | 错误信息，类型不支持或创建失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：创建 ssh 爆破工具
util = tools.NewBruteUtil("ssh")~
println(util != nil)
``````````````

---

### NewPocInvoker {#newpocinvoker}

```go
NewPocInvoker() (*PocInvoker, error)
```

创建一个 POC 调用器，用于驱动 xray/nuclei 等外部 POC 引擎执行检测

在 yak 中通过 tools.NewPocInvoker 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PocInvoker` | POC 调用器对象 |
| r2 | `error` | 错误信息，初始化失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：创建 POC 调用器
invoker = tools.NewPocInvoker()~
println(invoker != nil)
``````````````

---

