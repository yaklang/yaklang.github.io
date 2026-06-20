# imageutils

|函数名|函数描述/介绍|
|:------|:--------|
| [imageutils.ExtractImage](#extractimage) |ExtractImage 从多种输入（io.Reader、字节、字符串）中提取内嵌的图片 适用于从原始数据流中扫描并还原图片，返回一个图片结果的通道 参数: - i: 输入数据，可为 io.Reader、字节数组或字符串 返回值: - 图片提取结果通道，每个元素为一张提取出的图片|
| [imageutils.ExtractImageFromFile](#extractimagefromfile) |ExtractImageFromFile 从文件路径提取图片，支持视频抽帧、PDF 与图片文档等 内部会先检测文件 MIME 类型，再分别按视频、图片或文档分页方式提取 参数: - filePath: 输入文件路径 - options: 可选项，如 imageutils.context 设置上下文 ...|
| [imageutils.context](#context) |WithCtx 为图片提取设置上下文，用于控制超时与取消（导出名为 imageutils.context） 参数: - ctx: 上下文对象 返回值: - 图片提取可选项|


## 函数定义
### ExtractImage

#### 详细描述
ExtractImage 从多种输入（io.Reader、字节、字符串）中提取内嵌的图片

适用于从原始数据流中扫描并还原图片，返回一个图片结果的通道

参数:

  - i: 输入数据，可为 io.Reader、字节数组或字符串



返回值:

  - 图片提取结果通道，每个元素为一张提取出的图片




Example:

``````````````yak
// 示意性示例，需要提供包含图片的真实数据
raw = file.ReadFile("/tmp/with-images.bin")~

	for result in imageutils.ExtractImage(raw) {
	    println(result.MIMEType)
	}
``````````````


#### 定义

`ExtractImage(i any) chan *ImageResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 输入数据，可为 io.Reader、字节数组或字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *ImageResult` | 图片提取结果通道，每个元素为一张提取出的图片 |


### ExtractImageFromFile

#### 详细描述
ExtractImageFromFile 从文件路径提取图片，支持视频抽帧、PDF 与图片文档等

内部会先检测文件 MIME 类型，再分别按视频、图片或文档分页方式提取

参数:

  - filePath: 输入文件路径

  - options: 可选项，如 imageutils.context 设置上下文



返回值:

  - 图片提取结果通道

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要提供真实的视频/PDF/图片文件
ch, err = imageutils.ExtractImageFromFile("/tmp/demo.pdf")
if err != nil { die(err) }

	for result in ch {
	    println(result.MIMEType)
	}
``````````````


#### 定义

`ExtractImageFromFile(filePath string, options ...ImageExtractorOption) (chan *ImageResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` | 输入文件路径 |
| options | `...ImageExtractorOption` | 可选项，如 imageutils.context 设置上下文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *ImageResult` | 图片提取结果通道 |
| r2 | `error` | 错误信息 |


### context

#### 详细描述
WithCtx 为图片提取设置上下文，用于控制超时与取消（导出名为 imageutils.context）

参数:

  - ctx: 上下文对象



返回值:

  - 图片提取可选项




Example:

``````````````yak
ctx, cancel = context.WithTimeout(context.Background(), 10 * time.Second)
defer cancel()
ch, err = imageutils.ExtractImageFromFile("/tmp/demo.mp4", imageutils.context(ctx))
if err != nil { die(err) }
``````````````


#### 定义

`context(ctx context.Context) ImageExtractorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ImageExtractorOption` | 图片提取可选项 |


