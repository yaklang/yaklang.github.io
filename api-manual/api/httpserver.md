# httpserver

|函数名|函数描述/介绍|
|:------|:--------|
| [httpserver.LocalFileSystemServe](#localfilesystemserve) |LocalFileSystemServe 根据给定的 host 和 port 启动一个 http 服务用于访问本地文件系统  第一个参数为监听主机，第二个参数为监听端口，第三个参数为访问路径前缀，第四个参数为本地文件系统路径，接下来可以接收零个到多个选项函数，用于设置上下文，回调函数等  |
| [httpserver.Serve](#serve) |Serve 根据给定的 host 和 port 启动一个 http 服务，第一个参数为监听主机，第二个参数为监听端口，接下来可以接收零个到多个选项函数，用于设置上下文，回调函数等  |
| [httpserver.captchaRouteHandler](#captcharoutehandler) |captchaRouteHandler 用于设置 HTTP 服务器的验证码处理函数，第一个参数为路由路径，第二个参数为超时时间，第三个参数为处理函数  此函数会根据路由路径自动添加前缀 &amp;#34;/&amp;#34;  |
| [httpserver.context](#context) |context 用于设置 HTTP 服务器的上下文  |
| [httpserver.handler](#handler) |handler 用于设置 HTTP 服务器的回调函数，此函数会在每次收到请求时被调用  此函数的第一个参数为响应回复者结构体，第二个参数为 请求结构体，你可以调用第一个参数中的方法来设置响应头，响应体等  |
| [httpserver.localFileSystemHandler](#localfilesystemhandler) ||
| [httpserver.routeHandler](#routehandler) |routeHandler 用于设置 HTTP 服务器的路由处理函数，第一个参数为路由路径，第二个参数为处理函数  此函数会根据路由路径自动添加前缀 &amp;#34;/&amp;#34;  |
| [httpserver.tlsCertAndKey](#tlscertandkey) |tlsCertAndKey 用于设置 HTTP服务器的 TLS 证书和密钥，第一个参数为证书，第二个参数为密钥，第三个参数为可选的 CA 证书  一般配合tls标准库使用  |


## 函数定义
### LocalFileSystemServe

#### 详细描述
LocalFileSystemServe 根据给定的 host 和 port 启动一个 http 服务用于访问本地文件系统

第一个参数为监听主机，第二个参数为监听端口，第三个参数为访问路径前缀，第四个参数为本地文件系统路径，接下来可以接收零个到多个选项函数，用于设置上下文，回调函数等

Example:
```
err = httpserver.LocalFileSystemServe("127.0.0.1", 8888, "/static", "/var/www/static")
```


#### 定义

`LocalFileSystemServe(host string, port int, prefix string, localPath string, opts ...HttpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| prefix | `string` |   |
| localPath | `string` |   |
| opts | `...HttpServerConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Serve

#### 详细描述
Serve 根据给定的 host 和 port 启动一个 http 服务，第一个参数为监听主机，第二个参数为监听端口，接下来可以接收零个到多个选项函数，用于设置上下文，回调函数等

Example:
```
err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))
```


#### 定义

`Serve(host string, port int, opts ...HttpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| opts | `...HttpServerConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### captchaRouteHandler

#### 详细描述
captchaRouteHandler 用于设置 HTTP 服务器的验证码处理函数，第一个参数为路由路径，第二个参数为超时时间，第三个参数为处理函数

此函数会根据路由路径自动添加前缀 &#34;/&#34;

Example:
```

	err = httpserver.Serve("127.0.0.1", 8888, httpserver.captchaRouteHandler("/captcha", 30, func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello world"))
	}))

```


#### 定义

`captchaRouteHandler(route string, timeoutSeconds float64, handler http.HandlerFunc) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| route | `string` |   |
| timeoutSeconds | `float64` |   |
| handler | `http.HandlerFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


### context

#### 详细描述
context 用于设置 HTTP 服务器的上下文

Example:
```
ctx = context.New()
err = httpserver.Serve("127.0.0.1", httpserver, http.context(ctx))
```


#### 定义

`context(ctx context.Context) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


### handler

#### 详细描述
handler 用于设置 HTTP 服务器的回调函数，此函数会在每次收到请求时被调用

此函数的第一个参数为响应回复者结构体，第二个参数为 请求结构体，你可以调用第一个参数中的方法来设置响应头，响应体等

Example:
```
err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))
```


#### 定义

`handler(cb func(rsp http.ResponseWriter, req *http.Request)) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(rsp http.ResponseWriter, req *http.Request)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


### localFileSystemHandler

#### 详细描述


#### 定义

`localFileSystemHandler(prefix string, dir string) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` |   |
| dir | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


### routeHandler

#### 详细描述
routeHandler 用于设置 HTTP 服务器的路由处理函数，第一个参数为路由路径，第二个参数为处理函数

此函数会根据路由路径自动添加前缀 &#34;/&#34;

Example:
```

	err = httpserver.Serve("127.0.0.1", 8888, httpserver.routeHandler("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello world"))
	}))

```


#### 定义

`routeHandler(route string, handler http.HandlerFunc) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| route | `string` |   |
| handler | `http.HandlerFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


### tlsCertAndKey

#### 详细描述
tlsCertAndKey 用于设置 HTTP服务器的 TLS 证书和密钥，第一个参数为证书，第二个参数为密钥，第三个参数为可选的 CA 证书

一般配合tls标准库使用

Example:
```
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignServerCertAndKey(ca, key)
err = httpserver.Serve("127.0.0.1", 8888, httpserver.tlsCertAndKey(cert, sKey))
```


#### 定义

`tlsCertAndKey(crt any, key any, cas ...any) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` |   |
| key | `any` |   |
| cas | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


