# tools

|函数名|函数描述/介绍|
|:------|:--------|
| [tools.NewBruteUtil](#newbruteutil) |NewBruteUtil 根据指定的服务类型创建一个多目标爆破工具(BruteUtil) 在 yak 中通过 tools.NewBruteUtil 调用，服务类型如 &#34;ssh&#34;、&#34;redis&#34;、&#34;mysql&#34; 等 参数: - t: 爆破目标的服务类型名称 返回值: - 爆破工具对象，可用于对多个目标...|
| [tools.NewPocInvoker](#newpocinvoker) |NewPocInvoker 创建一个 POC 调用器，用于驱动 xray/nuclei 等外部 POC 引擎执行检测 在 yak 中通过 tools.NewPocInvoker 调用 返回值: - POC 调用器对象 - 错误信息，初始化失败时非 nil|


## 函数定义
### NewBruteUtil

#### 详细描述
NewBruteUtil 根据指定的服务类型创建一个多目标爆破工具(BruteUtil)

在 yak 中通过 tools.NewBruteUtil 调用，服务类型如 &#34;ssh&#34;、&#34;redis&#34;、&#34;mysql&#34; 等

参数:

  - t: 爆破目标的服务类型名称



返回值:

  - 爆破工具对象，可用于对多个目标执行口令爆破

  - 错误信息，类型不支持或创建失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：创建 ssh 爆破工具
util = tools.NewBruteUtil("ssh")~
println(util != nil)
``````````````


#### 定义

`NewBruteUtil(t string) (*bruteutils.BruteUtil, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` | 爆破目标的服务类型名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bruteutils.BruteUtil` | 爆破工具对象，可用于对多个目标执行口令爆破 |
| r2 | `error` | 错误信息，类型不支持或创建失败时非 nil |


### NewPocInvoker

#### 详细描述
NewPocInvoker 创建一个 POC 调用器，用于驱动 xray/nuclei 等外部 POC 引擎执行检测

在 yak 中通过 tools.NewPocInvoker 调用

返回值:

  - POC 调用器对象

  - 错误信息，初始化失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：创建 POC 调用器
invoker = tools.NewPocInvoker()~
println(invoker != nil)
``````````````


#### 定义

`NewPocInvoker() (*PocInvoker, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PocInvoker` | POC 调用器对象 |
| r2 | `error` | 错误信息，初始化失败时非 nil |


