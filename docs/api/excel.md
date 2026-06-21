# excel {#library-excel}

`excel` 库基于 excelize 提供 Excel 文件的读写能力，用于把扫描/分析结果导出为表格，或解析已有表格作为输入数据源。

典型使用场景：

- 读取解析：`excel.Parse` / `excel.ParseTableOnly` / `excel.ParseTableFast` 解析表格内容，`excel.ClassifyNodes` 对节点分类。
- 创建写入：`excel.NewFile` 新建工作簿，`excel.NewSheet` / `excel.DeleteSheet` 管理工作表，`excel.WriteCell` / `excel.SetFormula` / `excel.InsertImage` 写入内容，`excel.Save` 保存。
- 样式：`excel.CreateStyle` / `excel.SetCellStyle` / `excel.SetSheetVisible` 控制样式与可见性。

与相邻库的关系：`excel` 是数据导入导出工具，常作为报告/结果落地的一种格式，与 `report`（HTML 报告）、`file`（文件读写）互补。

> 共 14 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [excel.ClassifyNodes](#classifynodes) | `nodes []ExcelNode` | `*ExcelNodeClassifier` | 将 excel.Parse 等解析得到的节点按类型分类（导出名为 excel.ClassifyNodes） |
| [excel.CreateStyle](#createstyle) | `file *excelize.File, style *excelize.Style` | `int, error` | 创建一个单元格样式并返回样式 ID（导出名为 excel.CreateStyle） |
| [excel.DeleteSheet](#deletesheet) | `file *excelize.File, name string` | `error` | 删除指定名称的工作表（导出名为 excel.DeleteSheet） |
| [excel.InsertImage](#insertimage) | `file *excelize.File, sheet string, cell string, picture string` | `error` | 在指定单元格位置插入一张图片（导出名为 excel.InsertImage） |
| [excel.NewFile](#newfile) | - | `*excelize.File` | 创建一个新的 Excel 文件对象（导出名为 excel.NewFile） |
| [excel.NewSheet](#newsheet) | `file *excelize.File, name string` | `int, error` | 在 Excel 文件中创建一个新工作表（导出名为 excel.NewSheet） |
| [excel.Parse](#parse) | `filePath string` | `[]ExcelNode, error` | 解析 Excel 文件，返回所有工作表中的内容节点（导出名为 excel.Parse） |
| [excel.ParseTableFast](#parsetablefast) | `filePath string, maxDataRows int` | `[]ExcelNode, error` | 使用流式 API 高性能解析大型 Excel 文件中的表格（导出名为 excel.ParseTableFast） |
| [excel.ParseTableOnly](#parsetableonly) | `filePath string` | `[]ExcelNode, error` | 仅解析 Excel 文件中的表格与隐藏工作表节点（导出名为 excel.ParseTableOnly） |
| [excel.Save](#save) | `file *excelize.File, path string` | `error` | 将 Excel 文件对象保存到指定路径（导出名为 excel.Save） |
| [excel.SetCellStyle](#setcellstyle) | `file *excelize.File, sheet string, hCell string, vCell string, styleID int` | `error` | 为指定区域的单元格应用样式（导出名为 excel.SetCellStyle） |
| [excel.SetFormula](#setformula) | `file *excelize.File, sheet string, cell string, formula string` | `error` | 设置单元格的公式（导出名为 excel.SetFormula） |
| [excel.SetSheetVisible](#setsheetvisible) | `file *excelize.File, name string, visible bool` | `error` | 设置工作表的可见性（导出名为 excel.SetSheetVisible） |
| [excel.WriteCell](#writecell) | `file *excelize.File, sheet string, cell string, value any` | `error` | 向指定工作表的单元格写入数据（导出名为 excel.WriteCell） |

## 函数详情

### ClassifyNodes {#classifynodes}

```go
ClassifyNodes(nodes []ExcelNode) *ExcelNodeClassifier
```

将 excel.Parse 等解析得到的节点按类型分类（导出名为 excel.ClassifyNodes）

返回的分类器按表格、文本、URL、公式、批注、隐藏表等分别归类，便于后续提取

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| nodes | `[]ExcelNode` | 由 excel.Parse / ParseTableOnly / ParseTableFast 返回的节点切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ExcelNodeClassifier` | 分类器对象，包含 Tables/Texts/URLs/Formulas/Comments/HiddenSheets 等字段 |

**示例**

``````````````yak
path = file.Join(os.TempDir(), "excel_classify_demo.xlsx")
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "Name")~
excel.WriteCell(f, "Sheet1", "A2", "yak")~
excel.Save(f, path)~
nodes = excel.Parse(path)~
cls = excel.ClassifyNodes(nodes)
println(cls.Tables[0].Headers[0])   // OUT: Name
assert cls.Tables[0].Headers[0] == "Name", "ClassifyNodes should group rows into tables with headers"
file.Remove(path)
``````````````

---

### CreateStyle {#createstyle}

```go
CreateStyle(file *excelize.File, style *excelize.Style) (int, error)
```

创建一个单元格样式并返回样式 ID（导出名为 excel.CreateStyle）

返回的样式 ID 可传给 excel.SetCellStyle 应用到单元格

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| style | `*excelize.Style` | 样式对象（*excelize.Style，描述字体、填充、边框等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 样式 ID |
| r2 | `error` | 错误信息（参数非法或创建失败时返回） |

**示例**

``````````````yak
// 示意性示例: style 为 *excelize.Style 样式对象，描述字体/填充/边框等
f = excel.NewFile()
styleID = excel.CreateStyle(f, style)~
excel.SetCellStyle(f, "Sheet1", "A1", "A1", styleID)~
``````````````

---

### DeleteSheet {#deletesheet}

```go
DeleteSheet(file *excelize.File, name string) error
```

删除指定名称的工作表（导出名为 excel.DeleteSheet）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| name | `string` | 要删除的工作表名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（参数非法或删除失败时返回） |

**示例**

``````````````yak
f = excel.NewFile()
excel.NewSheet(f, "Extra")~
excel.DeleteSheet(f, "Extra")~
path = file.Join(os.TempDir(), "excel_deletesheet_demo.xlsx")
excel.Save(f, path)~
println(file.IsExisted(path))   // OUT: true
assert file.IsExisted(path), "DeleteSheet should not break saving the workbook"
file.Remove(path)
``````````````

---

### InsertImage {#insertimage}

```go
InsertImage(file *excelize.File, sheet string, cell string, picture string) error
```

在指定单元格位置插入一张图片（导出名为 excel.InsertImage）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称 |
| cell | `string` | 图片锚定的单元格坐标（如 &#34;A1&#34;） |
| picture | `string` | 图片文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（参数非法或插入失败时返回） |

**示例**

``````````````yak
// 示意性示例: picture 需为本地存在的图片文件路径
f = excel.NewFile()
excel.InsertImage(f, "Sheet1", "A1", "/path/to/logo.png")~
excel.Save(f, file.Join(os.TempDir(), "excel_image_demo.xlsx"))~
``````````````

---

### NewFile {#newfile}

```go
NewFile() *excelize.File
```

创建一个新的 Excel 文件对象（导出名为 excel.NewFile）

新文件默认包含一个名为 Sheet1 的工作表，可继续写入单元格、添加工作表，最后用 excel.Save 保存

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*excelize.File` | Excel 文件对象 |

**示例**

``````````````yak
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "hello")~
path = file.Join(os.TempDir(), "excel_newfile_demo.xlsx")
excel.Save(f, path)~
println(file.IsExisted(path))   // OUT: true
assert file.IsExisted(path), "NewFile + Save should create a workbook on disk"
file.Remove(path)
``````````````

---

### NewSheet {#newsheet}

```go
NewSheet(file *excelize.File, name string) (int, error)
```

在 Excel 文件中创建一个新工作表（导出名为 excel.NewSheet）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| name | `string` | 新工作表名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 新工作表的索引 |
| r2 | `error` | 错误信息（参数非法或创建失败时返回） |

**示例**

``````````````yak
f = excel.NewFile()
idx = excel.NewSheet(f, "Extra")~
println(idx >= 0)   // OUT: true
assert idx >= 0, "NewSheet should return a non-negative sheet index"
``````````````

---

### Parse {#parse}

```go
Parse(filePath string) ([]ExcelNode, error)
```

解析 Excel 文件，返回所有工作表中的内容节点（导出名为 excel.Parse）

返回的节点包含表格、文本、URL、公式、批注等多种类型，可用 excel.ClassifyNodes 进行分类

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filePath | `string` | Excel 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]ExcelNode` | 解析出的内容节点切片 |
| r2 | `error` | 错误信息（文件不存在或解析失败时返回） |

**示例**

``````````````yak
path = file.Join(os.TempDir(), "excel_parse_demo.xlsx")
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "Name")~
excel.WriteCell(f, "Sheet1", "A2", "yak")~
excel.Save(f, path)~
nodes = excel.Parse(path)~
println(len(nodes) > 0)   // OUT: true
assert len(nodes) > 0, "Parse should return content nodes"
file.Remove(path)
``````````````

---

### ParseTableFast {#parsetablefast}

```go
ParseTableFast(filePath string, maxDataRows int) ([]ExcelNode, error)
```

使用流式 API 高性能解析大型 Excel 文件中的表格（导出名为 excel.ParseTableFast）

maxDataRows 控制每个工作表最多存储的数据行数：

  - maxDataRows &lt;= 0: 读取全部行（等价于 excel.ParseTableOnly）

  - maxDataRows &gt; 0: 仅存储前 maxDataRows 行，但仍准确统计总行数（可在 Metadata 的 total_data_rows 中获取）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filePath | `string` | Excel 文件路径 |
| maxDataRows | `int` | 每个工作表最多存储的数据行数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]ExcelNode` | 表格节点切片 |
| r2 | `error` | 错误信息（文件不存在或解析失败时返回） |

**示例**

``````````````yak
path = file.Join(os.TempDir(), "excel_tablefast_demo.xlsx")
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "Name")~
excel.WriteCell(f, "Sheet1", "A2", "yak")~
excel.Save(f, path)~
nodes = excel.ParseTableFast(path, 100)~
println(len(nodes) > 0)   // OUT: true
assert len(nodes) > 0, "ParseTableFast should return table nodes"
file.Remove(path)
``````````````

---

### ParseTableOnly {#parsetableonly}

```go
ParseTableOnly(filePath string) ([]ExcelNode, error)
```

仅解析 Excel 文件中的表格与隐藏工作表节点（导出名为 excel.ParseTableOnly）

跳过逐单元格处理（文本、URL、公式等），在大文件上性能更好；返回结果可直接用于 excel.ClassifyNodes

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filePath | `string` | Excel 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]ExcelNode` | 仅含表格/隐藏表的节点切片 |
| r2 | `error` | 错误信息（文件不存在或解析失败时返回） |

**示例**

``````````````yak
path = file.Join(os.TempDir(), "excel_tableonly_demo.xlsx")
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "Name")~
excel.WriteCell(f, "Sheet1", "A2", "yak")~
excel.Save(f, path)~
nodes = excel.ParseTableOnly(path)~
println(len(nodes) > 0)   // OUT: true
assert len(nodes) > 0, "ParseTableOnly should return table nodes"
file.Remove(path)
``````````````

---

### Save {#save}

```go
Save(file *excelize.File, path string) error
```

将 Excel 文件对象保存到指定路径（导出名为 excel.Save）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| path | `string` | 保存路径（.xlsx） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（参数非法或保存失败时返回） |

**示例**

``````````````yak
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "data")~
path = file.Join(os.TempDir(), "excel_save_demo.xlsx")
excel.Save(f, path)~
println(file.IsExisted(path))   // OUT: true
assert file.IsExisted(path), "Save should write the workbook to disk"
file.Remove(path)
``````````````

---

### SetCellStyle {#setcellstyle}

```go
SetCellStyle(file *excelize.File, sheet string, hCell string, vCell string, styleID int) error
```

为指定区域的单元格应用样式（导出名为 excel.SetCellStyle）

样式 ID 由 excel.CreateStyle 创建

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称 |
| hCell | `string` | 区域左上角单元格坐标 |
| vCell | `string` | 区域右下角单元格坐标 |
| styleID | `int` | 由 excel.CreateStyle 返回的样式 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（参数非法或设置失败时返回） |

**示例**

``````````````yak
// 示意性示例: CreateStyle 需要一个 *excelize.Style 样式对象
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "title")~
styleID = excel.CreateStyle(f, style)~
excel.SetCellStyle(f, "Sheet1", "A1", "A1", styleID)~
``````````````

---

### SetFormula {#setformula}

```go
SetFormula(file *excelize.File, sheet string, cell string, formula string) error
```

设置单元格的公式（导出名为 excel.SetFormula）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称 |
| cell | `string` | 单元格坐标（如 &#34;C2&#34;） |
| formula | `string` | 公式字符串（如 &#34;=B2*2&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（参数非法或设置失败时返回） |

**示例**

``````````````yak
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "B2", 90)~
excel.SetFormula(f, "Sheet1", "C2", "=B2*2")~
path = file.Join(os.TempDir(), "excel_setformula_demo.xlsx")
excel.Save(f, path)~
println(file.IsExisted(path))   // OUT: true
assert file.IsExisted(path), "SetFormula should not break saving the workbook"
file.Remove(path)
``````````````

---

### SetSheetVisible {#setsheetvisible}

```go
SetSheetVisible(file *excelize.File, name string, visible bool) error
```

设置工作表的可见性（导出名为 excel.SetSheetVisible）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| name | `string` | 工作表名称 |
| visible | `bool` | 是否可见，false 表示隐藏 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（参数非法或设置失败时返回） |

**示例**

``````````````yak
f = excel.NewFile()
excel.NewSheet(f, "Extra")~
excel.SetSheetVisible(f, "Extra", false)~
path = file.Join(os.TempDir(), "excel_visible_demo.xlsx")
excel.Save(f, path)~
println(file.IsExisted(path))   // OUT: true
assert file.IsExisted(path), "SetSheetVisible should not break saving the workbook"
file.Remove(path)
``````````````

---

### WriteCell {#writecell}

```go
WriteCell(file *excelize.File, sheet string, cell string, value any) error
```

向指定工作表的单元格写入数据（导出名为 excel.WriteCell）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称（如 &#34;Sheet1&#34;） |
| cell | `string` | 单元格坐标（如 &#34;A1&#34;） |
| value | `any` | 写入的值，支持字符串、数字等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（参数非法或写入失败时返回） |

**示例**

``````````````yak
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "yak")~
path = file.Join(os.TempDir(), "excel_writecell_demo.xlsx")
excel.Save(f, path)~
nodes = excel.Parse(path)~
cls = excel.ClassifyNodes(nodes)
println(cls.Tables[0].Headers[0])   // OUT: yak
assert cls.Tables[0].Headers[0] == "yak", "WriteCell should persist the value into the cell"
file.Remove(path)
``````````````

---

