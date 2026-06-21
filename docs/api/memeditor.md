# memeditor {#library-memeditor}

`memeditor` 库提供内存中的源码编辑器，把一段源代码包装成可精确定位/读取/修改区间的对象，常用于代码分析结果的范围标注、片段抽取与精准改写。

典型使用场景：

- 创建编辑器：`memeditor.New(sourceCode)` 以源码创建 `*MemEditor`，之后可按行列/偏移定位、读取与编辑代码区间。

与相邻库的关系：`memeditor` 常作为 `ssa`/`syntaxflow`（代码分析）结果的载体，用于把分析定位到的代码区间映射回源文本并做处理。

> 共 1 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [memeditor.New](#new) | `sourceCode string` | `*MemEditor` | NewMemEditor 基于源代码字符串创建内存编辑器（导出名为 memeditor.New） |

## 函数详情

### New {#new}

```go
New(sourceCode string) *MemEditor
```

NewMemEditor 基于源代码字符串创建内存编辑器（导出名为 memeditor.New）

提供按行/按偏移读取、查找、范围定位等文本操作能力，常用于源码分析与代码切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| sourceCode | `string` | 待编辑/分析的源代码文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MemEditor` | 内存编辑器对象，可调用 GetLineCount / GetLine / GetSourceCode 等方法 |

**示例**

``````````````yak
editor = memeditor.New("line1\nline2\nline3")
println(editor.GetLineCount())   // OUT: 3
assert editor.GetLineCount() == 3, "editor should report 3 lines"
line2 = editor.GetLine(2)~
assert line2 == "line2", "GetLine(2) should return the second line"
``````````````

---

