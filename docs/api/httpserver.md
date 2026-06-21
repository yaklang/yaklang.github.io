# httpserver {#library-httpserver}

`httpserver` 库用于在脚本里快速起一个 HTTP/HTTPS 服务端，支持自定义路由、本地文件服务、WebSocket、TLS 与验证码路由，常用于接收回连、托管 PoC 页面、搭建临时测试服务。

典型使用场景：

- 启动服务：`httpserver.Serve(host, port, opts...)` 起服务，`httpserver.LocalFileSystemServe` 直接对外提供本地目录。
- 路由处理：`httpserver.routeHandler` 注册路径处理器，`httpserver.handler` 注册全局处理器，`httpserver.wsRouteHandler` 处理 WebSocket，`httpserver.captchaRouteHandler` 提供验证码路由，`httpserver.localFileSystemHandler` 提供静态目录。
- 传输与上下文：`httpserver.tlsCertAndKey` 配置 HTTPS 证书，`httpserver.context` 控制生命周期。

与相邻库的关系：`httpserver` 是服务端能力，常与 `facades`（多协议恶意服务）、`dnslog`（带外）、`csrf`（托管 PoC）配合，用于接收交互/回连的场景。

> 共 9 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [httpserver.captchaRouteHandler](#captcharoutehandler) | `route string, timeoutSeconds float64, handler http.HandlerFunc` | `HttpServerConfigOpt` | 用于设置 HTTP 服务器的验证码保护处理函数，会根据路由路径自动添加前缀 &#34;/&#34; |
| [httpserver.context](#context) | `ctx context.Context` | `HttpServerConfigOpt` | 用于设置 HTTP 服务器的上下文，可通过取消上下文来停止服务 |
| [httpserver.handler](#handler) | `cb func(rsp http.ResponseWriter, req *http.Request)` | `HttpServerConfigOpt` | 用于设置 HTTP 服务器的默认回调函数，会在每次收到（未命中其他路由的）请求时被调用 |
| [httpserver.localFileSystemHandler](#localfilesystemhandler) | `prefix string, dir string` | `HttpServerConfigOpt` | 是一个 HTTP 服务器配置选项，用于将某个 URL 前缀映射到本地文件系统目录提供静态文件服务 |
| [httpserver.routeHandler](#routehandler) | `route string, handler http.HandlerFunc` | `HttpServerConfigOpt` | 用于设置 HTTP 服务器的路由处理函数，此函数会根据路由路径自动添加前缀 &#34;/&#34; |
| [httpserver.wsRouteHandler](#wsroutehandler) | `route string, handler WebSocketHandler` | `HttpServerConfigOpt` | 用于设置 HTTP 服务器的 WebSocket 路由处理函数，会自动处理 WebSocket 握手升级，并在连接建立后调用处理函数 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [httpserver.LocalFileSystemServe](#localfilesystemserve) | `host string, port int, prefix string, localPath string, opts ...HttpServerConfigOpt` | `error` | 根据给定的 host 和 port 启动一个用于访问本地文件系统的 HTTP 静态文件服务 |
| [httpserver.Serve](#serve) | `host string, port int, opts ...HttpServerConfigOpt` | `error` | 根据给定的 host 和 port 启动一个 HTTP 服务，可接收零个到多个选项函数用于设置上下文、回调函数等 |
| [httpserver.tlsCertAndKey](#tlscertandkey) | `crt any, key any, cas ...any` | `HttpServerConfigOpt` | 用于设置 HTTP 服务器的 TLS 证书和密钥，一般配合 tls 标准库使用 |

## 函数详情

### captchaRouteHandler {#captcharoutehandler}

```go
captchaRouteHandler(route string, timeoutSeconds float64, handler http.HandlerFunc) HttpServerConfigOpt
```

用于设置 HTTP 服务器的验证码保护处理函数，会根据路由路径自动添加前缀 &#34;/&#34;

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| route | `string` | 受验证码保护的路由路径 |
| timeoutSeconds | `float64` | 验证码有效期（秒），小于等于 0 时使用默认 30 秒 |
| handler | `http.HandlerFunc` | 通过验证码后的处理函数，参数为响应写入器与请求对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |

**示例**

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.captchaRouteHandler("/captcha", 30, func(w, r) {
	w.Write([]byte("Hello world"))
}))
``````````````

---

### context {#context}

```go
context(ctx context.Context) HttpServerConfigOpt
```

用于设置 HTTP 服务器的上下文，可通过取消上下文来停止服务

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |

**示例**

``````````````yak
ctx = context.New()
err = httpserver.Serve("127.0.0.1", 8888, httpserver.context(ctx))
``````````````

---

### handler {#handler}

```go
handler(cb func(rsp http.ResponseWriter, req *http.Request)) HttpServerConfigOpt
```

用于设置 HTTP 服务器的默认回调函数，会在每次收到（未命中其他路由的）请求时被调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cb | `func(rsp http.ResponseWriter, req *http.Request)` | 请求处理回调函数，第一个参数为响应写入器，第二个参数为请求对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |

**示例**

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))
``````````````

---

### localFileSystemHandler {#localfilesystemhandler}

```go
localFileSystemHandler(prefix string, dir string) HttpServerConfigOpt
```

是一个 HTTP 服务器配置选项，用于将某个 URL 前缀映射到本地文件系统目录提供静态文件服务

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prefix | `string` | URL 访问路径前缀 |
| dir | `string` | 本地文件系统目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |

**示例**

``````````````yak
// 提供本地静态文件服务，依赖网络，此处仅作示意
err = httpserver.Serve("127.0.0.1", 8888, httpserver.localFileSystemHandler("/static", "/var/www/static"))
``````````````

---

### routeHandler {#routehandler}

```go
routeHandler(route string, handler http.HandlerFunc) HttpServerConfigOpt
```

用于设置 HTTP 服务器的路由处理函数，此函数会根据路由路径自动添加前缀 &#34;/&#34;

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| route | `string` | 路由路径 |
| handler | `http.HandlerFunc` | 命中该路由时的处理函数，参数为响应写入器与请求对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |

**示例**

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.routeHandler("/", func(w, r) {
	w.Write([]byte("Hello world"))
}))
``````````````

---

### wsRouteHandler {#wsroutehandler}

```go
wsRouteHandler(route string, handler WebSocketHandler) HttpServerConfigOpt
```

用于设置 HTTP 服务器的 WebSocket 路由处理函数，会自动处理 WebSocket 握手升级，并在连接建立后调用处理函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| route | `string` | 路由路径 |
| handler | `WebSocketHandler` | WebSocket 连接处理函数，参数为已升级的连接对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |

**示例**

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.wsRouteHandler("/ws", func(conn) {
	rawReq := conn.GetRawRequest() // 获取原始 HTTP 请求
	for {
		messageType, message, err = conn.ReadMessage()
		if err != nil {
			return
		}
		conn.WriteMessage(messageType, message) // echo back
	}
}))
``````````````

---

## 可变参数函数详情

### LocalFileSystemServe {#localfilesystemserve}

```go
LocalFileSystemServe(host string, port int, prefix string, localPath string, opts ...HttpServerConfigOpt) error
```

根据给定的 host 和 port 启动一个用于访问本地文件系统的 HTTP 静态文件服务

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 监听主机 |
| port | `int` | 监听端口 |
| prefix | `string` | 访问路径前缀 |
| localPath | `string` | 对外提供服务的本地文件系统目录 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...HttpServerConfigOpt` | 可选配置，例如 httpserver.context |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，监听失败或服务异常退出时返回非空 |

**示例**

``````````````yak
err = httpserver.LocalFileSystemServe("127.0.0.1", 8888, "/static", "/var/www/static")
``````````````

---

### Serve {#serve}

```go
Serve(host string, port int, opts ...HttpServerConfigOpt) error
```

根据给定的 host 和 port 启动一个 HTTP 服务，可接收零个到多个选项函数用于设置上下文、回调函数等

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 监听主机 |
| port | `int` | 监听端口 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...HttpServerConfigOpt` | 可选配置，例如 httpserver.handler、httpserver.routeHandler、httpserver.context |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，监听失败或服务异常退出时返回非空 |

**示例**

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))
``````````````

---

### tlsCertAndKey {#tlscertandkey}

```go
tlsCertAndKey(crt any, key any, cas ...any) HttpServerConfigOpt
```

用于设置 HTTP 服务器的 TLS 证书和密钥，一般配合 tls 标准库使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| crt | `any` | 服务器证书（PEM 内容或文件路径） |
| key | `any` | 服务器私钥（PEM 内容或文件路径） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| cas | `...any` | 可选的 CA 证书，用于双向认证 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |

**示例**

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignServerCertAndKey(ca, key)
err = httpserver.Serve("127.0.0.1", 8888, httpserver.tlsCertAndKey(cert, sKey))
``````````````

---

