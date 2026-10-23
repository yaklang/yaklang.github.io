# mcp {#library-mcp}

> 共 12 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [mcp.AddServer](#addserver) | `name string, transport string, endpoint string, opts ...Option` | `*ServerInfo, error` | persists a new server in Yakit&#39;s profile registry. It does not |
| [mcp.Connect](#connect) | `name string, opts ...Option` | `*Client, error` | opens an enabled server from the same profile registry used by Yakit. |
| [mcp.DeleteServer](#deleteserver) | `name string, opts ...Option` | `error` | deletes exactly one named server and its tool/bridge caches via |
| [mcp.ListServers](#listservers) | `keyword string, opts ...Option` | `*ServerPage, error` | includes enabled and disabled servers, ordered by name then ID. |
| [mcp.NewClient](#newclient) | `transport string, endpoint string, opts ...Option` | `*Client, error` | connects to stdio, sse or streamable_http and performs initialize. |

## 可变参数函数详情

### AddServer {#addserver}

```go
AddServer(name string, transport string, endpoint string, opts ...Option) (*ServerInfo, error)
```

persists a new server in Yakit&#39;s profile registry. It does not

overwrite an existing name or start a subprocess/network connection.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |
| transport | `string` |  |
| endpoint | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 7 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ServerInfo` |  |
| r2 | `error` |  |

**示例**

``````````````yak
mcp.AddServer("local", "stdio", `python3 "/tmp/my server.py"`, mcp.env({"TOKEN": "value"}))~
page = mcp.ListServers("local")~
dump(page.Servers)
die(mcp.DeleteServer("local"))
``````````````

---

### Connect {#connect}

```go
Connect(name string, opts ...Option) (*Client, error)
```

opens an enabled server from the same profile registry used by Yakit.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 7 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Client` |  |
| r2 | `error` |  |

---

### DeleteServer {#deleteserver}

```go
DeleteServer(name string, opts ...Option) error
```

deletes exactly one named server and its tool/bridge caches via
the existing transactional Yakit operation. A missing name is an error.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 7 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` |  |

---

### ListServers {#listservers}

```go
ListServers(keyword string, opts ...Option) (*ServerPage, error)
```

includes enabled and disabled servers, ordered by name then ID.
The keyword matches public names/types, never credential-bearing fields.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 7 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ServerPage` |  |
| r2 | `error` |  |

---

### NewClient {#newclient}

```go
NewClient(transport string, endpoint string, opts ...Option) (*Client, error)
```

connects to stdio, sse or streamable_http and performs initialize.

For stdio, endpoint is a quoted command line, parsed without invoking a shell.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| transport | `string` |  |
| endpoint | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 7 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Client` |  |
| r2 | `error` |  |

**示例**

``````````````yak
c = mcp.NewClient("streamable_http", "http://127.0.0.1:8080/mcp", mcp.timeout(10))~
defer c.Close()
page = c.ListTools()~
dump(page.Tools)
result = c.CallTool("echo", {"message": "hello"})~
dump(result.Content)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[mcp.AddServer](#addserver)、[mcp.Connect](#connect)、[mcp.DeleteServer](#deleteserver)、[mcp.ListServers](#listservers)、[mcp.NewClient](#newclient)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `mcp.context` | `ctx context.Context` | `Option` |  |
| `mcp.enabled` | `enabled bool` | `Option` |  |
| `mcp.env` | `env map[string]any` | `Option` |  |
| `mcp.headers` | `headers map[string]any` | `Option` |  |
| `mcp.limit` | `limit int` | `Option` |  |
| `mcp.offset` | `offset int` | `Option` |  |
| `mcp.timeout` | `seconds float64` | `Option` |  |

