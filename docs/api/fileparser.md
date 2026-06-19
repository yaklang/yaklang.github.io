# fileparser

|函数名|函数描述/介绍|
|:------|:--------|
| [fileparser.ParseFile](#parsefile) |ParseFile 解析办公文档（Word/Excel/PPT 等）并按元素类型提取其中的内容元素 参数: - filePath: 待解析的文档文件路径 返回值: - 按元素类型分组的提取结果（如文本、图片等） - 错误信息|


## 函数定义
### ParseFile

#### 详细描述
ParseFile 解析办公文档（Word/Excel/PPT 等）并按元素类型提取其中的内容元素

参数:

  - filePath: 待解析的文档文件路径



返回值:

  - 按元素类型分组的提取结果（如文本、图片等）

  - 错误信息




Example:

``````````````yak
// 解析一个 docx 文档，按类型获取其中的元素
elements, err = fileparser.ParseFile("/tmp/demo.docx")

	if err == nil {
	    for typ, items in elements { println(typ, len(items)) }
	}
``````````````


#### 定义

`ParseFile(filePath string) (map[string][]types.File, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` | 待解析的文档文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string][]types.File` | 按元素类型分组的提取结果（如文本、图片等） |
| r2 | `error` | 错误信息 |


