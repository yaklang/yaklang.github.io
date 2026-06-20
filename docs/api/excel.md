# excel

|函数名|函数描述/介绍|
|:------|:--------|
| [excel.ClassifyNodes](#classifynodes) |ClassifyNodes 将 excel.Parse 等解析得到的节点按类型分类（导出名为 excel.ClassifyNodes） 返回的分类器按表格、文本、URL、公式、批注、隐藏表等分别归类，便于后续提取 参数: - nodes: 由 excel.Parse / ParseTableOnly...|
| [excel.CreateStyle](#createstyle) |CreateStyle 创建一个单元格样式并返回样式 ID（导出名为 excel.CreateStyle） 返回的样式 ID 可传给 excel.SetCellStyle 应用到单元格 参数: - file: Excel 文件对象 - style: 样式对象（*excelize.Style，描述字体...|
| [excel.DeleteSheet](#deletesheet) |DeleteSheet 删除指定名称的工作表（导出名为 excel.DeleteSheet） 参数: - file: Excel 文件对象 - name: 要删除的工作表名称 返回值: - 错误信息（参数非法或删除失败时返回）|
| [excel.InsertImage](#insertimage) |InsertImage 在指定单元格位置插入一张图片（导出名为 excel.InsertImage） 参数: - file: Excel 文件对象 - sheet: 工作表名称 - cell: 图片锚定的单元格坐标（如 &#34;A1&#34;） - picture: 图片文件路径 返回值: - 错误信息（参数非法...|
| [excel.NewFile](#newfile) |NewFile 创建一个新的 Excel 文件对象（导出名为 excel.NewFile） 新文件默认包含一个名为 Sheet1 的工作表，可继续写入单元格、添加工作表，最后用 excel.Save 保存 返回值: - Excel 文件对象|
| [excel.NewSheet](#newsheet) |NewSheet 在 Excel 文件中创建一个新工作表（导出名为 excel.NewSheet） 参数: - file: Excel 文件对象 - name: 新工作表名称 返回值: - 新工作表的索引 - 错误信息（参数非法或创建失败时返回）|
| [excel.Parse](#parse) |Parse 解析 Excel 文件，返回所有工作表中的内容节点（导出名为 excel.Parse） 返回的节点包含表格、文本、URL、公式、批注等多种类型，可用 excel.ClassifyNodes 进行分类 参数: - filePath: Excel 文件路径 返回值: - 解析出的内容节点切片...|
| [excel.ParseTableFast](#parsetablefast) |ParseTableFast 使用流式 API 高性能解析大型 Excel 文件中的表格（导出名为 excel.ParseTableFast） maxDataRows 控制每个工作表最多存储的数据行数： - maxDataRows &lt;= 0: 读取全部行（等价于 excel.ParseTableOn...|
| [excel.ParseTableOnly](#parsetableonly) |ParseTableOnly 仅解析 Excel 文件中的表格与隐藏工作表节点（导出名为 excel.ParseTableOnly） 跳过逐单元格处理（文本、URL、公式等），在大文件上性能更好；返回结果可直接用于 excel.ClassifyNodes 参数: - filePath: Excel ...|
| [excel.Save](#save) |Save 将 Excel 文件对象保存到指定路径（导出名为 excel.Save） 参数: - file: Excel 文件对象 - path: 保存路径（.xlsx） 返回值: - 错误信息（参数非法或保存失败时返回）|
| [excel.SetCellStyle](#setcellstyle) |SetCellStyle 为指定区域的单元格应用样式（导出名为 excel.SetCellStyle） 样式 ID 由 excel.CreateStyle 创建 参数: - file: Excel 文件对象 - sheet: 工作表名称 - hCell: 区域左上角单元格坐标 - vCell: 区域...|
| [excel.SetFormula](#setformula) |SetFormula 设置单元格的公式（导出名为 excel.SetFormula） 参数: - file: Excel 文件对象 - sheet: 工作表名称 - cell: 单元格坐标（如 &#34;C2&#34;） - formula: 公式字符串（如 &#34;=B2*2&#34;） 返回值: - 错误信息（参数非法或设置...|
| [excel.SetSheetVisible](#setsheetvisible) |SetSheetVisible 设置工作表的可见性（导出名为 excel.SetSheetVisible） 参数: - file: Excel 文件对象 - name: 工作表名称 - visible: 是否可见，false 表示隐藏 返回值: - 错误信息（参数非法或设置失败时返回）|
| [excel.WriteCell](#writecell) |WriteCell 向指定工作表的单元格写入数据（导出名为 excel.WriteCell） 参数: - file: Excel 文件对象 - sheet: 工作表名称（如 &#34;Sheet1&#34;） - cell: 单元格坐标（如 &#34;A1&#34;） - value: 写入的值，支持字符串、数字等 返回值: - ...|


## 函数定义
### ClassifyNodes

#### 详细描述
ClassifyNodes 将 excel.Parse 等解析得到的节点按类型分类（导出名为 excel.ClassifyNodes）

返回的分类器按表格、文本、URL、公式、批注、隐藏表等分别归类，便于后续提取



参数:

  - nodes: 由 excel.Parse / ParseTableOnly / ParseTableFast 返回的节点切片



返回值:

  - 分类器对象，包含 Tables/Texts/URLs/Formulas/Comments/HiddenSheets 等字段




Example:

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


#### 定义

`ClassifyNodes(nodes []ExcelNode) *ExcelNodeClassifier`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| nodes | `[]ExcelNode` | 由 excel.Parse / ParseTableOnly / ParseTableFast 返回的节点切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ExcelNodeClassifier` | 分类器对象，包含 Tables/Texts/URLs/Formulas/Comments/HiddenSheets 等字段 |


### CreateStyle

#### 详细描述
CreateStyle 创建一个单元格样式并返回样式 ID（导出名为 excel.CreateStyle）

返回的样式 ID 可传给 excel.SetCellStyle 应用到单元格



参数:

  - file: Excel 文件对象

  - style: 样式对象（*excelize.Style，描述字体、填充、边框等）



返回值:

  - 样式 ID

  - 错误信息（参数非法或创建失败时返回）




Example:

``````````````yak
// 示意性示例: style 为 *excelize.Style 样式对象，描述字体/填充/边框等
f = excel.NewFile()
styleID = excel.CreateStyle(f, style)~
excel.SetCellStyle(f, "Sheet1", "A1", "A1", styleID)~
``````````````


#### 定义

`CreateStyle(file *excelize.File, style *excelize.Style) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| style | `*excelize.Style` | 样式对象（*excelize.Style，描述字体、填充、边框等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 样式 ID |
| r2 | `error` | 错误信息（参数非法或创建失败时返回） |


### DeleteSheet

#### 详细描述
DeleteSheet 删除指定名称的工作表（导出名为 excel.DeleteSheet）



参数:

  - file: Excel 文件对象

  - name: 要删除的工作表名称



返回值:

  - 错误信息（参数非法或删除失败时返回）




Example:

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


#### 定义

`DeleteSheet(file *excelize.File, name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| name | `string` | 要删除的工作表名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（参数非法或删除失败时返回） |


### InsertImage

#### 详细描述
InsertImage 在指定单元格位置插入一张图片（导出名为 excel.InsertImage）



参数:

  - file: Excel 文件对象

  - sheet: 工作表名称

  - cell: 图片锚定的单元格坐标（如 &#34;A1&#34;）

  - picture: 图片文件路径



返回值:

  - 错误信息（参数非法或插入失败时返回）




Example:

``````````````yak
// 示意性示例: picture 需为本地存在的图片文件路径
f = excel.NewFile()
excel.InsertImage(f, "Sheet1", "A1", "/path/to/logo.png")~
excel.Save(f, file.Join(os.TempDir(), "excel_image_demo.xlsx"))~
``````````````


#### 定义

`InsertImage(file *excelize.File, sheet string, cell string, picture string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称 |
| cell | `string` | 图片锚定的单元格坐标（如 &#34;A1&#34;） |
| picture | `string` | 图片文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（参数非法或插入失败时返回） |


### NewFile

#### 详细描述
NewFile 创建一个新的 Excel 文件对象（导出名为 excel.NewFile）

新文件默认包含一个名为 Sheet1 的工作表，可继续写入单元格、添加工作表，最后用 excel.Save 保存



返回值:

  - Excel 文件对象




Example:

``````````````yak
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "hello")~
path = file.Join(os.TempDir(), "excel_newfile_demo.xlsx")
excel.Save(f, path)~
println(file.IsExisted(path))   // OUT: true
assert file.IsExisted(path), "NewFile + Save should create a workbook on disk"
file.Remove(path)
``````````````


#### 定义

`NewFile() *excelize.File`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*excelize.File` | Excel 文件对象 |


### NewSheet

#### 详细描述
NewSheet 在 Excel 文件中创建一个新工作表（导出名为 excel.NewSheet）



参数:

  - file: Excel 文件对象

  - name: 新工作表名称



返回值:

  - 新工作表的索引

  - 错误信息（参数非法或创建失败时返回）




Example:

``````````````yak
f = excel.NewFile()
idx = excel.NewSheet(f, "Extra")~
println(idx >= 0)   // OUT: true
assert idx >= 0, "NewSheet should return a non-negative sheet index"
``````````````


#### 定义

`NewSheet(file *excelize.File, name string) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| name | `string` | 新工作表名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 新工作表的索引 |
| r2 | `error` | 错误信息（参数非法或创建失败时返回） |


### Parse

#### 详细描述
Parse 解析 Excel 文件，返回所有工作表中的内容节点（导出名为 excel.Parse）

返回的节点包含表格、文本、URL、公式、批注等多种类型，可用 excel.ClassifyNodes 进行分类



参数:

  - filePath: Excel 文件路径



返回值:

  - 解析出的内容节点切片

  - 错误信息（文件不存在或解析失败时返回）




Example:

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


#### 定义

`Parse(filePath string) ([]ExcelNode, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` | Excel 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ExcelNode` | 解析出的内容节点切片 |
| r2 | `error` | 错误信息（文件不存在或解析失败时返回） |


### ParseTableFast

#### 详细描述
ParseTableFast 使用流式 API 高性能解析大型 Excel 文件中的表格（导出名为 excel.ParseTableFast）

maxDataRows 控制每个工作表最多存储的数据行数：

  - maxDataRows &lt;= 0: 读取全部行（等价于 excel.ParseTableOnly）

  - maxDataRows &gt; 0: 仅存储前 maxDataRows 行，但仍准确统计总行数（可在 Metadata 的 total_data_rows 中获取）



参数:

  - filePath: Excel 文件路径

  - maxDataRows: 每个工作表最多存储的数据行数



返回值:

  - 表格节点切片

  - 错误信息（文件不存在或解析失败时返回）




Example:

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


#### 定义

`ParseTableFast(filePath string, maxDataRows int) ([]ExcelNode, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` | Excel 文件路径 |
| maxDataRows | `int` | 每个工作表最多存储的数据行数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ExcelNode` | 表格节点切片 |
| r2 | `error` | 错误信息（文件不存在或解析失败时返回） |


### ParseTableOnly

#### 详细描述
ParseTableOnly 仅解析 Excel 文件中的表格与隐藏工作表节点（导出名为 excel.ParseTableOnly）

跳过逐单元格处理（文本、URL、公式等），在大文件上性能更好；返回结果可直接用于 excel.ClassifyNodes



参数:

  - filePath: Excel 文件路径



返回值:

  - 仅含表格/隐藏表的节点切片

  - 错误信息（文件不存在或解析失败时返回）




Example:

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


#### 定义

`ParseTableOnly(filePath string) ([]ExcelNode, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` | Excel 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ExcelNode` | 仅含表格/隐藏表的节点切片 |
| r2 | `error` | 错误信息（文件不存在或解析失败时返回） |


### Save

#### 详细描述
Save 将 Excel 文件对象保存到指定路径（导出名为 excel.Save）



参数:

  - file: Excel 文件对象

  - path: 保存路径（.xlsx）



返回值:

  - 错误信息（参数非法或保存失败时返回）




Example:

``````````````yak
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "data")~
path = file.Join(os.TempDir(), "excel_save_demo.xlsx")
excel.Save(f, path)~
println(file.IsExisted(path))   // OUT: true
assert file.IsExisted(path), "Save should write the workbook to disk"
file.Remove(path)
``````````````


#### 定义

`Save(file *excelize.File, path string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| path | `string` | 保存路径（.xlsx） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（参数非法或保存失败时返回） |


### SetCellStyle

#### 详细描述
SetCellStyle 为指定区域的单元格应用样式（导出名为 excel.SetCellStyle）

样式 ID 由 excel.CreateStyle 创建



参数:

  - file: Excel 文件对象

  - sheet: 工作表名称

  - hCell: 区域左上角单元格坐标

  - vCell: 区域右下角单元格坐标

  - styleID: 由 excel.CreateStyle 返回的样式 ID



返回值:

  - 错误信息（参数非法或设置失败时返回）




Example:

``````````````yak
// 示意性示例: CreateStyle 需要一个 *excelize.Style 样式对象
f = excel.NewFile()
excel.WriteCell(f, "Sheet1", "A1", "title")~
styleID = excel.CreateStyle(f, style)~
excel.SetCellStyle(f, "Sheet1", "A1", "A1", styleID)~
``````````````


#### 定义

`SetCellStyle(file *excelize.File, sheet string, hCell string, vCell string, styleID int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称 |
| hCell | `string` | 区域左上角单元格坐标 |
| vCell | `string` | 区域右下角单元格坐标 |
| styleID | `int` | 由 excel.CreateStyle 返回的样式 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（参数非法或设置失败时返回） |


### SetFormula

#### 详细描述
SetFormula 设置单元格的公式（导出名为 excel.SetFormula）



参数:

  - file: Excel 文件对象

  - sheet: 工作表名称

  - cell: 单元格坐标（如 &#34;C2&#34;）

  - formula: 公式字符串（如 &#34;=B2*2&#34;）



返回值:

  - 错误信息（参数非法或设置失败时返回）




Example:

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


#### 定义

`SetFormula(file *excelize.File, sheet string, cell string, formula string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称 |
| cell | `string` | 单元格坐标（如 &#34;C2&#34;） |
| formula | `string` | 公式字符串（如 &#34;=B2*2&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（参数非法或设置失败时返回） |


### SetSheetVisible

#### 详细描述
SetSheetVisible 设置工作表的可见性（导出名为 excel.SetSheetVisible）



参数:

  - file: Excel 文件对象

  - name: 工作表名称

  - visible: 是否可见，false 表示隐藏



返回值:

  - 错误信息（参数非法或设置失败时返回）




Example:

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


#### 定义

`SetSheetVisible(file *excelize.File, name string, visible bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| name | `string` | 工作表名称 |
| visible | `bool` | 是否可见，false 表示隐藏 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（参数非法或设置失败时返回） |


### WriteCell

#### 详细描述
WriteCell 向指定工作表的单元格写入数据（导出名为 excel.WriteCell）



参数:

  - file: Excel 文件对象

  - sheet: 工作表名称（如 &#34;Sheet1&#34;）

  - cell: 单元格坐标（如 &#34;A1&#34;）

  - value: 写入的值，支持字符串、数字等



返回值:

  - 错误信息（参数非法或写入失败时返回）




Example:

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


#### 定义

`WriteCell(file *excelize.File, sheet string, cell string, value any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` | Excel 文件对象 |
| sheet | `string` | 工作表名称（如 &#34;Sheet1&#34;） |
| cell | `string` | 单元格坐标（如 &#34;A1&#34;） |
| value | `any` | 写入的值，支持字符串、数字等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（参数非法或写入失败时返回） |


