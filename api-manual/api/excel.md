# excel

|函数名|函数描述/介绍|
|:------|:--------|
| [excel.ClassifyNodes](#classifynodes) |ClassifyNodes 将解析结果分类 |
| [excel.CreateStyle](#createstyle) |CreateStyle 创建样式 |
| [excel.DeleteSheet](#deletesheet) |DeleteSheet 删除工作表 |
| [excel.InsertImage](#insertimage) |InsertImage 插入图片 |
| [excel.NewFile](#newfile) |CreateExcelFile 创建新的Excel文件 |
| [excel.NewSheet](#newsheet) |NewSheet 创建新工作表 |
| [excel.Parse](#parse) ||
| [excel.Save](#save) |SaveExcelFile 保存Excel文件 |
| [excel.SetCellStyle](#setcellstyle) |SetCellStyle 设置单元格样式 |
| [excel.SetFormula](#setformula) |SetFormula 设置单元格公式 |
| [excel.SetSheetVisible](#setsheetvisible) |SetSheetVisible 设置工作表可见性 |
| [excel.WriteCell](#writecell) |WriteCell 向指定单元格写入数据 |


## 函数定义
### ClassifyNodes

#### 详细描述
ClassifyNodes 将解析结果分类


#### 定义

`ClassifyNodes(nodes []ExcelNode) *ExcelNodeClassifier`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| nodes | `[]ExcelNode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ExcelNodeClassifier` |   |


### CreateStyle

#### 详细描述
CreateStyle 创建样式


#### 定义

`CreateStyle(file *excelize.File, style *excelize.Style) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| style | `*excelize.Style` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |
| r2 | `error` |   |


### DeleteSheet

#### 详细描述
DeleteSheet 删除工作表


#### 定义

`DeleteSheet(file *excelize.File, name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### InsertImage

#### 详细描述
InsertImage 插入图片


#### 定义

`InsertImage(file *excelize.File, sheet string, cell string, picture string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| sheet | `string` |   |
| cell | `string` |   |
| picture | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### NewFile

#### 详细描述
CreateExcelFile 创建新的Excel文件


#### 定义

`NewFile() *excelize.File`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*excelize.File` |   |


### NewSheet

#### 详细描述
NewSheet 创建新工作表


#### 定义

`NewSheet(file *excelize.File, name string) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |
| r2 | `error` |   |


### Parse

#### 详细描述


#### 定义

`Parse(filePath string) ([]ExcelNode, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ExcelNode` |   |
| r2 | `error` |   |


### Save

#### 详细描述
SaveExcelFile 保存Excel文件


#### 定义

`Save(file *excelize.File, path string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SetCellStyle

#### 详细描述
SetCellStyle 设置单元格样式


#### 定义

`SetCellStyle(file *excelize.File, sheet string, hCell string, vCell string, styleID int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| sheet | `string` |   |
| hCell | `string` |   |
| vCell | `string` |   |
| styleID | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SetFormula

#### 详细描述
SetFormula 设置单元格公式


#### 定义

`SetFormula(file *excelize.File, sheet string, cell string, formula string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| sheet | `string` |   |
| cell | `string` |   |
| formula | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SetSheetVisible

#### 详细描述
SetSheetVisible 设置工作表可见性


#### 定义

`SetSheetVisible(file *excelize.File, name string, visible bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| name | `string` |   |
| visible | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### WriteCell

#### 详细描述
WriteCell 向指定单元格写入数据


#### 定义

`WriteCell(file *excelize.File, sheet string, cell string, value any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `*excelize.File` |   |
| sheet | `string` |   |
| cell | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


