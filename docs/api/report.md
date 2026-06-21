# report {#library-report}

`report` 库用于生成结构化的扫描/分析报告，把表格、文字、图表、漏洞等内容组织成一份可渲染的报告对象，常作为扫描类脚本的成果交付。

典型使用场景：

- 创建报告：`report.New()` 创建报告对象，之后向其追加标题、段落、表格、风险等各类区块，最终渲染/保存为可分享的报告。

与相邻库的关系：`report` 是结果交付层，常与 `risk`（漏洞对象）、`db`（数据来源）、`pandoc`（转 Word）、`bot`（推送通知）配合，把扫描结果整理成人可阅读的报告。

> 共 1 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [report.New](#new) | - | `*schema.Report` | NewReport 创建一个空的报告对象，用于构建结构化报告 |

## 函数详情

### New {#new}

```go
New() *schema.Report
```

NewReport 创建一个空的报告对象，用于构建结构化报告

返回的报告对象可链式设置标题、追加 Markdown、表格、图表等内容，最后可调用 Save 保存

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*schema.Report` | 新建的空报告对象 |

**示例**

``````````````yak
r = report.New()
r.Title("Scan Report")
r.Markdown("# hello report")
println(r.TitleValue)   // OUT: Scan Report
assert len(r.Items) == 1, "report should contain one markdown item"
``````````````

---

