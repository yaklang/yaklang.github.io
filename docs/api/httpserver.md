# httpserver

|函数名|函数描述/介绍|
|:------|:--------|
| [httpserver.LocalFileSystemServe](#localfilesystemserve) |LocalFileSystemServe 根据给定的 host 和 port 启动一个用于访问本地文件系统的 HTTP 静态文件服务 参数: - host: 监听主机 - port: 监听端口 - prefix: 访问路径前缀 - localPath: 对外提供服务的本地文件系统目录 - opts:...|
| [httpserver.Serve](#serve) |Serve 根据给定的 host 和 port 启动一个 HTTP 服务，可接收零个到多个选项函数用于设置上下文、回调函数等 参数: - host: 监听主机 - port: 监听端口 - opts: 可选配置，例如 httpserver.handler、httpserver.routeHandle...|
| [httpserver.captchaRouteHandler](#captcharoutehandler) |captchaRouteHandler 用于设置 HTTP 服务器的验证码保护处理函数，会根据路由路径自动添加前缀 &#34;/&#34; 参数: - route: 受验证码保护的路由路径 - timeoutSeconds: 验证码有效期（秒），小于等于 0 时使用默认 30 秒 - handler: 通过验证码后...|
| [httpserver.context](#context) |context 用于设置 HTTP 服务器的上下文，可通过取消上下文来停止服务 参数: - ctx: 上下文对象 返回值: - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve|
| [httpserver.handler](#handler) |handler 用于设置 HTTP 服务器的默认回调函数，会在每次收到（未命中其他路由的）请求时被调用 参数: - cb: 请求处理回调函数，第一个参数为响应写入器，第二个参数为请求对象 返回值: - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve|
| [httpserver.localFileSystemHandler](#localfilesystemhandler) |localFileSystemHandler 是一个 HTTP 服务器配置选项，用于将某个 URL 前缀映射到本地文件系统目录提供静态文件服务 参数: - prefix: URL 访问路径前缀 - dir: 本地文件系统目录 返回值: - 一个 HTTP 服务器配置选项，作为可变参数传入 https...|
| [httpserver.routeHandler](#routehandler) |routeHandler 用于设置 HTTP 服务器的路由处理函数，此函数会根据路由路径自动添加前缀 &#34;/&#34; 参数: - route: 路由路径 - handler: 命中该路由时的处理函数，参数为响应写入器与请求对象 返回值: - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserv...|
| [httpserver.tlsCertAndKey](#tlscertandkey) |tlsCertAndKey 用于设置 HTTP 服务器的 TLS 证书和密钥，一般配合 tls 标准库使用 参数: - crt: 服务器证书（PEM 内容或文件路径） - key: 服务器私钥（PEM 内容或文件路径） - cas: 可选的 CA 证书，用于双向认证 返回值: - 一个 HTTP 服...|
| [httpserver.wsRouteHandler](#wsroutehandler) |wsRouteHandler 用于设置 HTTP 服务器的 WebSocket 路由处理函数，会自动处理 WebSocket 握手升级，并在连接建立后调用处理函数 参数: - route: 路由路径 - handler: WebSocket 连接处理函数，参数为已升级的连接对象 返回值: - 一个 ...|


## 函数定义
### LocalFileSystemServe

#### 详细描述
LocalFileSystemServe 根据给定的 host 和 port 启动一个用于访问本地文件系统的 HTTP 静态文件服务

参数:

  - host: 监听主机

  - port: 监听端口

  - prefix: 访问路径前缀

  - localPath: 对外提供服务的本地文件系统目录

  - opts: 可选配置，例如 httpserver.context



返回值:

  - 错误信息，监听失败或服务异常退出时返回非空




Example:

``````````````yak
err = httpserver.LocalFileSystemServe("127.0.0.1", 8888, "/static", "/var/www/static")
``````````````


#### 定义

`LocalFileSystemServe(host string, port int, prefix string, localPath string, opts ...HttpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 监听主机 |
| port | `int` | 监听端口 |
| prefix | `string` | 访问路径前缀 |
| localPath | `string` | 对外提供服务的本地文件系统目录 |
| opts | `...HttpServerConfigOpt` | 可选配置，例如 httpserver.context |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，监听失败或服务异常退出时返回非空 |


### Serve

#### 详细描述
Serve 根据给定的 host 和 port 启动一个 HTTP 服务，可接收零个到多个选项函数用于设置上下文、回调函数等

参数:

  - host: 监听主机

  - port: 监听端口

  - opts: 可选配置，例如 httpserver.handler、httpserver.routeHandler、httpserver.context



返回值:

  - 错误信息，监听失败或服务异常退出时返回非空




Example:

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))
``````````````


#### 定义

`Serve(host string, port int, opts ...HttpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 监听主机 |
| port | `int` | 监听端口 |
| opts | `...HttpServerConfigOpt` | 可选配置，例如 httpserver.handler、httpserver.routeHandler、httpserver.context |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，监听失败或服务异常退出时返回非空 |


### captchaRouteHandler

#### 详细描述
captchaRouteHandler 用于设置 HTTP 服务器的验证码保护处理函数，会根据路由路径自动添加前缀 &#34;/&#34;

参数:

  - route: 受验证码保护的路由路径

  - timeoutSeconds: 验证码有效期（秒），小于等于 0 时使用默认 30 秒

  - handler: 通过验证码后的处理函数，参数为响应写入器与请求对象



返回值:

  - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve




Example:

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.captchaRouteHandler("/captcha", 30, func(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world"))
}))
``````````````


#### 定义

`captchaRouteHandler(route string, timeoutSeconds float64, handler http.HandlerFunc) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| route | `string` | 受验证码保护的路由路径 |
| timeoutSeconds | `float64` | 验证码有效期（秒），小于等于 0 时使用默认 30 秒 |
| handler | `http.HandlerFunc` | 通过验证码后的处理函数，参数为响应写入器与请求对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |


### context

#### 详细描述
context 用于设置 HTTP 服务器的上下文，可通过取消上下文来停止服务

参数:

  - ctx: 上下文对象



返回值:

  - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve




Example:

``````````````yak
ctx = context.New()
err = httpserver.Serve("127.0.0.1", 8888, httpserver.context(ctx))
``````````````


#### 定义

`context(ctx context.Context) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |


### handler

#### 详细描述
handler 用于设置 HTTP 服务器的默认回调函数，会在每次收到（未命中其他路由的）请求时被调用

参数:

  - cb: 请求处理回调函数，第一个参数为响应写入器，第二个参数为请求对象



返回值:

  - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve




Example:

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))
``````````````


#### 定义

`handler(cb func(rsp http.ResponseWriter, req *http.Request)) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(rsp http.ResponseWriter, req *http.Request)` | 请求处理回调函数，第一个参数为响应写入器，第二个参数为请求对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |


### localFileSystemHandler

#### 详细描述
localFileSystemHandler 是一个 HTTP 服务器配置选项，用于将某个 URL 前缀映射到本地文件系统目录提供静态文件服务

参数:

  - prefix: URL 访问路径前缀

  - dir: 本地文件系统目录



返回值:

  - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve




Example:

``````````````yak
// 提供本地静态文件服务，依赖网络，此处仅作示意
err = httpserver.Serve("127.0.0.1", 8888, httpserver.localFileSystemHandler("/static", "/var/www/static"))
``````````````


#### 定义

`localFileSystemHandler(prefix string, dir string) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` | URL 访问路径前缀 |
| dir | `string` | 本地文件系统目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |


### routeHandler

#### 详细描述
routeHandler 用于设置 HTTP 服务器的路由处理函数，此函数会根据路由路径自动添加前缀 &#34;/&#34;

参数:

  - route: 路由路径

  - handler: 命中该路由时的处理函数，参数为响应写入器与请求对象



返回值:

  - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve




Example:

``````````````yak
err = httpserver.Serve("127.0.0.1", 8888, httpserver.routeHandler("/", func(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world"))
}))
``````````````


#### 定义

`routeHandler(route string, handler http.HandlerFunc) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| route | `string` | 路由路径 |
| handler | `http.HandlerFunc` | 命中该路由时的处理函数，参数为响应写入器与请求对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |


### tlsCertAndKey

#### 详细描述
tlsCertAndKey 用于设置 HTTP 服务器的 TLS 证书和密钥，一般配合 tls 标准库使用

参数:

  - crt: 服务器证书（PEM 内容或文件路径）

  - key: 服务器私钥（PEM 内容或文件路径）

  - cas: 可选的 CA 证书，用于双向认证



返回值:

  - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve




Example:

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignServerCertAndKey(ca, key)
err = httpserver.Serve("127.0.0.1", 8888, httpserver.tlsCertAndKey(cert, sKey))
``````````````


#### 定义

`tlsCertAndKey(crt any, key any, cas ...any) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` | 服务器证书（PEM 内容或文件路径） |
| key | `any` | 服务器私钥（PEM 内容或文件路径） |
| cas | `...any` | 可选的 CA 证书，用于双向认证 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |


### wsRouteHandler

#### 详细描述
wsRouteHandler 用于设置 HTTP 服务器的 WebSocket 路由处理函数，会自动处理 WebSocket 握手升级，并在连接建立后调用处理函数

参数:

  - route: 路由路径

  - handler: WebSocket 连接处理函数，参数为已升级的连接对象



返回值:

  - 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve




Example:

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


#### 定义

`wsRouteHandler(route string, handler WebSocketHandler) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| route | `string` | 路由路径 |
| handler | `WebSocketHandler` | WebSocket 连接处理函数，参数为已升级的连接对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` | 一个 HTTP 服务器配置选项，作为可变参数传入 httpserver.Serve |


