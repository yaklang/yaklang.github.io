# pandoc {#library-pandoc}

`pandoc` 库提供文档格式转换能力（基于 pandoc），目前主要支持把 Markdown 转换为 Word/docx，常用于把扫描报告、分析结果导出为可分享的文档。

典型使用场景：

- Markdown 转 Word：`pandoc.SimpleConvertMarkdownFileToDocx(md)` 把 Markdown 转为 docx，`pandoc.SimpleCoverMD2Word(ctx, in, out)` 指定输入输出文件转换，带上下文版本支持取消。

与相邻库的关系：`pandoc` 是报告输出工具，常与 `report`（生成 Markdown/HTML 报告）、`file`（落盘）配合，把结果交付为 Word 文档。

> 共 3 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [pandoc.SimpleConvertMarkdownFileToDocx](#simpleconvertmarkdownfiletodocx) | `md string` | `string, error` | 将 Markdown 文件转换为 docx 文件 |
| [pandoc.SimpleConvertMarkdownFileToDocxContext](#simpleconvertmarkdownfiletodocxcontext) | `ctx context.Context, md string` | `string, error` | 将 Markdown 文件转换为 docx 文件（带上下文） |
| [pandoc.SimpleCoverMD2Word](#simplecovermd2word) | `ctx context.Context, inputFile string, outputFile string` | `error` | 将 Markdown 文件转换为 Word(.docx) 文件（导出名为 pandoc.SimpleCoverMD2Word） |

## 函数详情

### SimpleConvertMarkdownFileToDocx {#simpleconvertmarkdownfiletodocx}

```go
SimpleConvertMarkdownFileToDocx(md string) (string, error)
```

将 Markdown 文件转换为 docx 文件

依赖本地安装的 pandoc 工具，使用默认上下文，转换结果输出到 Yakit 临时目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| md | `string` | 输入的 Markdown 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 docx 文件路径 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地安装 pandoc 并提供真实 markdown 文件
outputFile, err = pandoc.SimpleConvertMarkdownFileToDocx("filename.md")
if err != nil { die(err) }
println(outputFile)
``````````````

---

### SimpleConvertMarkdownFileToDocxContext {#simpleconvertmarkdownfiletodocxcontext}

```go
SimpleConvertMarkdownFileToDocxContext(ctx context.Context, md string) (string, error)
```

将 Markdown 文件转换为 docx 文件（带上下文）

依赖本地安装的 pandoc 工具，转换结果输出到 Yakit 临时目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象，用于控制取消与超时 |
| md | `string` | 输入的 Markdown 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 docx 文件路径 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地安装 pandoc 并提供真实 markdown 文件
ctx = context.Background()
result, err = pandoc.SimpleConvertMarkdownFileToDocxContext(ctx, "filename.md")
if err != nil { die(err) }
println(result)
``````````````

---

### SimpleCoverMD2Word {#simplecovermd2word}

```go
SimpleCoverMD2Word(ctx context.Context, inputFile string, outputFile string) error
```

将 Markdown 文件转换为 Word(.docx) 文件（导出名为 pandoc.SimpleCoverMD2Word）

依赖底层 pandoc 程序完成转换

Deprecated: 这是 alpha 阶段接口，建议改用 pandoc.SimpleConvertMarkdownFileToDocxContext 或

pandoc.SimpleConvertMarkdownFileToDocx 以获得更好的体验

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制转换过程的取消与超时 |
| inputFile | `string` | 输入的 Markdown 文件路径 |
| outputFile | `string` | 输出的 Word(.docx) 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（pandoc 不可用或转换失败时返回） |

**示例**

``````````````yak
// 该示例依赖底层 pandoc 程序，仅作用法示意
dir = os.TempDir()
md = file.Join(dir, "demo.md")
out = file.Join(dir, "demo.docx")
file.Save(md, "# Title\n\nhello pandoc")~
err = pandoc.SimpleCoverMD2Word(context.Background(), md, out)
if err != nil { log.error("convert failed: %v", err) }
``````````````

---

