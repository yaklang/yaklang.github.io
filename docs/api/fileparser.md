# fileparser {#library-fileparser}

`fileparser` 库用于从各类文件中解析、提取结构化内容（如文档中的嵌入对象、元数据、内嵌文件等），常用于文件取证与样本分析。

典型使用场景：

- 解析文件：`fileparser.ParseFile(filePath)` 解析给定文件，返回按类型分组的提取结果（`map[string][]File`）。

与相邻库的关系：`fileparser` 是文件内容提取工具，与 `pandoc`（文档转换）、`mimetype`（类型识别）、`file`（文件读写）配合，用于"从文件里挖出有用内容"的取证与分析场景。

> 共 1 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [fileparser.ParseFile](#parsefile) | `filePath string` | `map[string][]types.File, error` | 解析办公文档（Word/Excel/PPT 等）并按元素类型提取其中的内容元素 |

## 函数详情

### ParseFile {#parsefile}

```go
ParseFile(filePath string) (map[string][]types.File, error)
```

解析办公文档（Word/Excel/PPT 等）并按元素类型提取其中的内容元素

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filePath | `string` | 待解析的文档文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string][]types.File` | 按元素类型分组的提取结果（如文本、图片等） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 解析一个 docx 文档，按类型获取其中的元素
elements, err = fileparser.ParseFile("/tmp/demo.docx")

	if err == nil {
	    for typ, items in elements { println(typ, len(items)) }
	}
``````````````

---

