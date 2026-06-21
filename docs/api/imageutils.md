# imageutils {#library-imageutils}

`imageutils` 库提供图像提取能力，从各种输入（文件、字节、文档、PDF 等）中抽取图片，常用于多模态 AI 预处理、文档取证与 OCR 前置处理。

典型使用场景：

- 提取图片：`imageutils.ExtractImage(i)` 从任意输入抽取图片流，`imageutils.ExtractImageFromFile` 从文件抽取（可配 `imageutils.context` 控制取消）。

与相邻库的关系：`imageutils` 抽出的图片常交给 AI 多模态（`ai` 的 VisionChat）、`ffmpeg`（视频帧）、`fileparser`（文件解析）等后续处理。

> 共 3 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [imageutils.ExtractImage](#extractimage) | `i any` | `chan *ImageResult` | 从多种输入（io.Reader、字节、字符串）中提取内嵌的图片 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [imageutils.ExtractImageFromFile](#extractimagefromfile) | `filePath string, options ...ImageExtractorOption` | `chan *ImageResult, error` | 从文件路径提取图片，支持视频抽帧、PDF 与图片文档等 |

## 函数详情

### ExtractImage {#extractimage}

```go
ExtractImage(i any) chan *ImageResult
```

从多种输入（io.Reader、字节、字符串）中提取内嵌的图片

适用于从原始数据流中扫描并还原图片，返回一个图片结果的通道

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 输入数据，可为 io.Reader、字节数组或字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *ImageResult` | 图片提取结果通道，每个元素为一张提取出的图片 |

**示例**

``````````````yak
// 示意性示例，需要提供包含图片的真实数据
raw = file.ReadFile("/tmp/with-images.bin")~

	for result in imageutils.ExtractImage(raw) {
	    println(result.MIMEType)
	}
``````````````

---

## 可变参数函数详情

### ExtractImageFromFile {#extractimagefromfile}

```go
ExtractImageFromFile(filePath string, options ...ImageExtractorOption) (chan *ImageResult, error)
```

从文件路径提取图片，支持视频抽帧、PDF 与图片文档等

内部会先检测文件 MIME 类型，再分别按视频、图片或文档分页方式提取

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| filePath | `string` | 输入文件路径 |

**可选参数**

可作为可变参数 `options ...ImageExtractorOption` 传入选项；共 1 个可用选项，详见 [ImageExtractorOption 选项列表](#option-imageextractoroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *ImageResult` | 图片提取结果通道 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要提供真实的视频/PDF/图片文件
ch, err = imageutils.ExtractImageFromFile("/tmp/demo.pdf")
if err != nil { die(err) }

	for result in ch {
	    println(result.MIMEType)
	}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：ImageExtractorOption {#option-imageextractoroption}

涉及到的函数有：[imageutils.ExtractImageFromFile](#extractimagefromfile)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `imageutils.context` | `ctx context.Context` | `ImageExtractorOption` | WithCtx 为图片提取设置上下文，用于控制超时与取消 |

