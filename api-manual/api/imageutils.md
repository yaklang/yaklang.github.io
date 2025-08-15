# imageutils

|函数名|函数描述/介绍|
|:------|:--------|
| [imageutils.ExtractImage](#extractimage) |ExtractImage extracts images from various input types, such as io.Reader, []byte, or string. |
| [imageutils.ExtractImageFromFile](#extractimagefromfile) |ExtractImageFromFile extract images from a file path, we can handle some video formats, PDF, and other files that may contain images. |
| [imageutils.context](#context) ||


## 函数定义
### ExtractImage

#### 详细描述
ExtractImage extracts images from various input types, such as io.Reader, []byte, or string.


#### 定义

`ExtractImage(i any) chan *ImageResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *ImageResult` |   |


### ExtractImageFromFile

#### 详细描述
ExtractImageFromFile extract images from a file path,
we can handle some video formats, PDF, and other files that may contain images.


#### 定义

`ExtractImageFromFile(filePath string, options ...ImageExtractorOption) (chan *ImageResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` |   |
| options | `...ImageExtractorOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *ImageResult` |   |
| r2 | `error` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) ImageExtractorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ImageExtractorOption` |   |


