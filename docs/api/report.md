# report

|函数名|函数描述/介绍|
|:------|:--------|
| [report.New](#new) |NewReport 创建一个空的报告对象，用于构建结构化报告 返回的报告对象可链式设置标题、追加 Markdown、表格、图表等内容，最后可调用 Save 保存 返回值: - 新建的空报告对象|


## 函数定义
### New

#### 详细描述
NewReport 创建一个空的报告对象，用于构建结构化报告

返回的报告对象可链式设置标题、追加 Markdown、表格、图表等内容，最后可调用 Save 保存

返回值:

  - 新建的空报告对象




Example:

``````````````yak
r = report.New()
r.Title("Scan Report")
r.Markdown("# hello report")
println(r.TitleValue)   // OUT: Scan Report
assert len(r.Items) == 1, "report should contain one markdown item"
``````````````


#### 定义

`New() *schema.Report`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Report` | 新建的空报告对象 |


