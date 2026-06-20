# memeditor

|函数名|函数描述/介绍|
|:------|:--------|
| [memeditor.New](#new) |NewMemEditor 基于源代码字符串创建内存编辑器（导出名为 memeditor.New） 提供按行/按偏移读取、查找、范围定位等文本操作能力，常用于源码分析与代码切片 参数: - sourceCode: 待编辑/分析的源代码文本 返回值: - 内存编辑器对象，可调用 GetLineCount...|


## 函数定义
### New

#### 详细描述
NewMemEditor 基于源代码字符串创建内存编辑器（导出名为 memeditor.New）

提供按行/按偏移读取、查找、范围定位等文本操作能力，常用于源码分析与代码切片



参数:

  - sourceCode: 待编辑/分析的源代码文本



返回值:

  - 内存编辑器对象，可调用 GetLineCount / GetLine / GetSourceCode 等方法




Example:

``````````````yak
editor = memeditor.New("line1\nline2\nline3")
println(editor.GetLineCount())   // OUT: 3
assert editor.GetLineCount() == 3, "editor should report 3 lines"
line2 = editor.GetLine(2)~
assert line2 == "line2", "GetLine(2) should return the second line"
``````````````


#### 定义

`New(sourceCode string) *MemEditor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourceCode | `string` | 待编辑/分析的源代码文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MemEditor` | 内存编辑器对象，可调用 GetLineCount / GetLine / GetSourceCode 等方法 |


