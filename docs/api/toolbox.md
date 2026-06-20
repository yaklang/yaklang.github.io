# toolbox

|函数名|函数描述/介绍|
|:------|:--------|
| [toolbox.Install](#install) |_install 安装指定的第三方二进制工具（导出名为 toolbox.Install） 从远端下载并安装如 ffmpeg、whisper 等第三方工具到本地 参数: - name: 工具名称，如 &#34;ffmpeg&#34; - options: 可选项，如 toolbox.proxy / toolbox.f...|
| [toolbox.List](#list) |GetAllStatus 列出所有已注册第三方工具的安装状态（导出名为 toolbox.List） 返回值: - 各工具的状态列表（包含名称、是否已安装、版本等） - 错误信息|
| [toolbox.Uninstall](#uninstall) |Uninstall 卸载指定的第三方二进制工具（导出名为 toolbox.Uninstall） 参数: - name: 工具名称，如 &#34;ffmpeg&#34; 返回值: - 错误信息|
| [toolbox.context](#context) |WithContext 设置安装上下文，用于控制取消与超时（导出名为 toolbox.context） 参数: - ctx: 上下文对象 返回值: - 安装可选项|
| [toolbox.force](#force) |WithForce 设置是否强制重新安装（导出名为 toolbox.force） 参数: - force: 为 true 时即使已安装也会重新安装 返回值: - 安装可选项|
| [toolbox.progress](#progress) |WithProgress 设置安装进度回调（导出名为 toolbox.progress） 参数: - progress: 进度回调函数 返回值: - 安装可选项|
| [toolbox.proxy](#proxy) |WithProxy 设置下载代理（导出名为 toolbox.proxy） 参数: - proxy: 代理地址，如 http://127.0.0.1:7890 返回值: - 安装可选项|


## 函数定义
### Install

#### 详细描述
_install 安装指定的第三方二进制工具（导出名为 toolbox.Install）

从远端下载并安装如 ffmpeg、whisper 等第三方工具到本地

参数:

  - name: 工具名称，如 &#34;ffmpeg&#34;

  - options: 可选项，如 toolbox.proxy / toolbox.force / toolbox.context / toolbox.progress



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg")
if err != nil { die(err) }
``````````````


#### 定义

`Install(name string, options ...InstallOptionFunc) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 工具名称，如 &#34;ffmpeg&#34; |
| options | `...InstallOptionFunc` | 可选项，如 toolbox.proxy / toolbox.force / toolbox.context / toolbox.progress |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### List

#### 详细描述
GetAllStatus 列出所有已注册第三方工具的安装状态（导出名为 toolbox.List）

返回值:

  - 各工具的状态列表（包含名称、是否已安装、版本等）

  - 错误信息




Example:

``````````````yak
statusList, err = toolbox.List()
assert err == nil, "toolbox.List should not fail"

	for s in statusList {
	    println(s.Name)
	}
``````````````


#### 定义

`List() ([]*BinaryStatus, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*BinaryStatus` | 各工具的状态列表（包含名称、是否已安装、版本等） |
| r2 | `error` | 错误信息 |


### Uninstall

#### 详细描述
Uninstall 卸载指定的第三方二进制工具（导出名为 toolbox.Uninstall）

参数:

  - name: 工具名称，如 &#34;ffmpeg&#34;



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例
err = toolbox.Uninstall("ffmpeg")
if err != nil { die(err) }
``````````````


#### 定义

`Uninstall(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 工具名称，如 &#34;ffmpeg&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### context

#### 详细描述
WithContext 设置安装上下文，用于控制取消与超时（导出名为 toolbox.context）

参数:

  - ctx: 上下文对象



返回值:

  - 安装可选项




Example:

``````````````yak
// 示意性示例，需要网络下载第三方工具
ctx, cancel = context.WithTimeout(context.Background(), 60 * time.Second)
defer cancel()
err = toolbox.Install("ffmpeg", toolbox.context(ctx))
``````````````


#### 定义

`context(ctx context.Context) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` | 安装可选项 |


### force

#### 详细描述
WithForce 设置是否强制重新安装（导出名为 toolbox.force）

参数:

  - force: 为 true 时即使已安装也会重新安装



返回值:

  - 安装可选项




Example:

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg", toolbox.force(true))
``````````````


#### 定义

`force(force bool) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| force | `bool` | 为 true 时即使已安装也会重新安装 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` | 安装可选项 |


### progress

#### 详细描述
WithProgress 设置安装进度回调（导出名为 toolbox.progress）

参数:

  - progress: 进度回调函数



返回值:

  - 安装可选项




Example:

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg", toolbox.progress(func(p) { println(p) }))
``````````````


#### 定义

`progress(progress ProgressCallback) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progress | `ProgressCallback` | 进度回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` | 安装可选项 |


### proxy

#### 详细描述
WithProxy 设置下载代理（导出名为 toolbox.proxy）

参数:

  - proxy: 代理地址，如 http://127.0.0.1:7890



返回值:

  - 安装可选项




Example:

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg", toolbox.proxy("http://127.0.0.1:7890"))
``````````````


#### 定义

`proxy(proxy string) InstallOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` | 代理地址，如 http://127.0.0.1:7890 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `InstallOptionFunc` | 安装可选项 |


