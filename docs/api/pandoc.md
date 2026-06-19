# pandoc

|函数名|函数描述/介绍|
|:------|:--------|
| [pandoc.SimpleConvertMarkdownFileToDocx](#simpleconvertmarkdownfiletodocx) |SimpleConvertMarkdownFileToDocx 将 Markdown 文件转换为 docx 文件 依赖本地安装的 pandoc 工具，使用默认上下文，转换结果输出到 Yakit 临时目录 参数: - md: 输入的 Markdown 文件路径 返回值: - 生成的 docx 文件路径...|
| [pandoc.SimpleConvertMarkdownFileToDocxContext](#simpleconvertmarkdownfiletodocxcontext) |SimpleConvertMarkdownFileToDocxContext 将 Markdown 文件转换为 docx 文件（带上下文） 依赖本地安装的 pandoc 工具，转换结果输出到 Yakit 临时目录 参数: - ctx: 上下文对象，用于控制取消与超时 - md: 输入的 Markdo...|
| [pandoc.SimpleCoverMD2Word](#simplecovermd2word) ||


## 函数定义
### SimpleConvertMarkdownFileToDocx

#### 详细描述
SimpleConvertMarkdownFileToDocx 将 Markdown 文件转换为 docx 文件

依赖本地安装的 pandoc 工具，使用默认上下文，转换结果输出到 Yakit 临时目录

参数:

  - md: 输入的 Markdown 文件路径



返回值:

  - 生成的 docx 文件路径

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地安装 pandoc 并提供真实 markdown 文件
outputFile, err = pandoc.SimpleConvertMarkdownFileToDocx("filename.md")
if err != nil { die(err) }
println(outputFile)
``````````````


#### 定义

`SimpleConvertMarkdownFileToDocx(md string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| md | `string` | 输入的 Markdown 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的 docx 文件路径 |
| r2 | `error` | 错误信息 |


### SimpleConvertMarkdownFileToDocxContext

#### 详细描述
SimpleConvertMarkdownFileToDocxContext 将 Markdown 文件转换为 docx 文件（带上下文）

依赖本地安装的 pandoc 工具，转换结果输出到 Yakit 临时目录

参数:

  - ctx: 上下文对象，用于控制取消与超时

  - md: 输入的 Markdown 文件路径



返回值:

  - 生成的 docx 文件路径

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地安装 pandoc 并提供真实 markdown 文件
ctx = context.Background()
result, err = pandoc.SimpleConvertMarkdownFileToDocxContext(ctx, "filename.md")
if err != nil { die(err) }
println(result)
``````````````


#### 定义

`SimpleConvertMarkdownFileToDocxContext(ctx context.Context, md string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象，用于控制取消与超时 |
| md | `string` | 输入的 Markdown 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的 docx 文件路径 |
| r2 | `error` | 错误信息 |


### SimpleCoverMD2Word

#### 详细描述
暂无描述

#### 定义

`SimpleCoverMD2Word(ctx context.Context, inputFile string, outputFile string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |  |
| inputFile | `string` |  |
| outputFile | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


