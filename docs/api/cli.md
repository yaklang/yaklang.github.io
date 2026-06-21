# cli {#library-cli}

`cli` 库用于把 yak 脚本变成带参数的命令行工具/插件：声明参数类型、默认值、校验与帮助信息，运行时从命令行或 Yakit 插件界面读取输入。它同时驱动 Yakit 插件的参数表单（含 UI Schema 布局）。

典型使用场景：

- 声明参数：`cli.String` / `cli.Int` / `cli.Bool` / `cli.Float` / `cli.Text` 取基础类型，`cli.Url(s)` / `cli.Host(s)` / `cli.Port(s)` / `cli.Net` 取网络相关参数，`cli.File` / `cli.FileNames` / `cli.YakitPlugin` 取文件与插件，`cli.Json` 取结构化对象。
- 参数选项：`cli.setRequired` / `cli.setDefault` / `cli.setHelp` / `cli.setVerboseName` / `cli.setCliGroup` / `cli.setShortName` 等修饰每个参数；`cli.check()` 在声明完成后做必填校验。
- 界面与表单：`cli.setJsonSchema` + `cli.setUISchema` / `cli.uiGroups` / `cli.uiField` 定义 Yakit 插件参数表单的分组与布局，`cli.UI` / `cli.when*` 控制联动显隐。

与相邻库的关系：`cli` 是脚本的"输入层"，与 `yakit`（输出/界面）一上一下，二者共同把一个 yak 脚本封装成完整的 Yakit 插件。

快速上手（声明参数 - 校验 - 读取）：

```yak
cli.SetCliName("scan-tool")                                   // 程序名(在 --help 中展示)
// 用 setDefault 给默认值: 命令行未传该参数时取默认值, 便于本地演示与运行
target = cli.String("target", cli.setRequired(true), cli.setDefault("yaklang.com"))
port = cli.Int("port", cli.setDefault(443))                   // 整数参数
verbose = cli.Bool("verbose")                                 // 开关参数: 带 --verbose 即 true
cli.check()                                                   // 校验必填参数(缺失会打印帮助并退出)

println("target:", target, "port:", port, "verbose:", verbose)
assert target == "yaklang.com" && port == 443, "defaults should be read when no CLI args"
// 真实运行: yak scan.yak --target example.com --port 80 --verbose
```

> 共 64 个函数、12 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| uiPosDefault | `cli.UISchemaFieldClassName` | &#34;&#34; |
| uiPosHorizontal | `cli.UISchemaFieldClassName` | &#34;json-schema-row-form&#34; |
| uiWidgetCheckbox | `cli.UISchemaWidgetType` | &#34;checkbox&#34; |
| uiWidgetFile | `cli.UISchemaWidgetType` | &#34;file&#34; |
| uiWidgetFiles | `cli.UISchemaWidgetType` | &#34;files&#34; |
| uiWidgetFolder | `cli.UISchemaWidgetType` | &#34;folder&#34; |
| uiWidgetPassword | `cli.UISchemaWidgetType` | &#34;password&#34; |
| uiWidgetRadio | `cli.UISchemaWidgetType` | &#34;radio&#34; |
| uiWidgetSelect | `cli.UISchemaWidgetType` | &#34;select&#34; |
| uiWidgetTable | `cli.UISchemaWidgetType` | &#34;table&#34; |
| uiWidgetTextarea | `cli.UISchemaWidgetType` | &#34;textarea&#34; |
| uiWidgetUpdown | `cli.UISchemaWidgetType` | &#34;updown&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [cli.Args](#args) | - | `[]string` | 返回传给当前脚本的命令行参数列表（导出名为 cli.Args） |
| [cli.SetCliName](#setcliname) | `name string` | - | 设置此命令行程序的名称 |
| [cli.SetDoc](#setdoc) | `document string` | - | 设置此命令行程序的文档 |
| [cli.check](#check) | - | - | 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法 |
| [cli.hideGroup](#hidegroup) | `group string` | `UIParams` | 当条件满足时隐藏指定参数分组的 UI 规则（导出名为 cli.hideGroup） |
| [cli.setCliGroup](#setcligroup) | `group string` | `SetCliExtraParam` | 是一个选项函数，设置参数的分组 |
| [cli.setDefault](#setdefault) | `i any` | `SetCliExtraParam` | 是一个选项函数，设置参数的默认值 |
| [cli.setHelp](#sethelp) | `i string` | `SetCliExtraParam` | 是一个选项函数，设置参数的帮助信息 |
| [cli.setMultipleSelect](#setmultipleselect) | `multiSelect bool` | `SetCliExtraParam` | 是一个选项函数，设置参数是否可以多选 |
| [cli.setPluginEnv](#setpluginenv) | `key string` | `SetCliExtraParam` | 是一个选项函数，设置参数从插件环境中取值 |
| [cli.setRequired](#setrequired) | `t bool` | `SetCliExtraParam` | 是一个选项函数，设置参数是否必须 |
| [cli.setSelectOption](#setselectoption) | `name string, value string` | `SetCliExtraParam` | 是一个选项函数，设置参数的下拉框选项 |
| [cli.setShortName](#setshortname) | `shortName string` | `SetCliExtraParam` | 是一个选项函数，设置参数的短名称 |
| [cli.setVerboseName](#setverbosename) | `verboseName string` | `SetCliExtraParam` | 是一个选项函数，设置参数的中文名 |
| [cli.setYakitPayload](#setyakitpayload) | `b bool` | `SetCliExtraParam` | 是一个选项函数，设置参数建议值为Yakit payload的字典名列表 |
| [cli.showGroup](#showgroup) | `group string` | `UIParams` | 当条件满足时显示指定参数分组的 UI 规则（导出名为 cli.showGroup） |
| [cli.uiFieldComponentStyle](#uifieldcomponentstyle) | `css map[string]any` | `UISchemaFieldParams` | 是一个选项参数,用于指定UISchema中的CSS样式 |
| [cli.uiFieldPosition](#uifieldposition) | `position UISchemaFieldClassName` | `UISchemaFieldParams` | 是一个选项参数,用于指定UISchema中的字段位置,默认为垂直排列 |
| [cli.uiFieldWidget](#uifieldwidget) | `widget UISchemaWidgetType` | `UISchemaFieldParams` | 是一个选项参数,用于指定UISchema中的字段使用的组件 |
| [cli.uiGlobalFieldPosition](#uiglobalfieldposition) | `style UISchemaFieldClassName` | `UISchemaParams` | 是一个选项参数,用于指定UISchema中全局的字段位置,默认为垂直排列 |
| [cli.when](#when) | `expression string` | `UIParams` | 构造一个基于表达式的 UI 联动条件（导出名为 cli.when） |
| [cli.whenDefault](#whendefault) | - | `UIParams` | 构造一个默认（兜底）UI 联动条件（导出名为 cli.whenDefault） |
| [cli.whenEqual](#whenequal) | `param string, value string` | `UIParams` | 构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual） |
| [cli.whenFalse](#whenfalse) | `param string` | `UIParams` | 构造一个“当指定布尔参数为假时”的 UI 联动条件（导出名为 cli.whenFalse） |
| [cli.whenNotEqual](#whennotequal) | `param string, value string` | `UIParams` | whenEqual 构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual） |
| [cli.whenTrue](#whentrue) | `param string` | `UIParams` | 构造一个“当指定布尔参数为真时”的 UI 联动条件（导出名为 cli.whenTrue） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [cli.Bool](#bool) | `name string, opts ...SetCliExtraParam` | `bool` | 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Double](#double) | `name string, opts ...SetCliExtraParam` | `float64` | 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.File](#file) | `name string, opts ...SetCliExtraParam` | `[]byte` | 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型 |
| [cli.FileNames](#filenames) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型 |
| [cli.FileOrContent](#fileorcontent) | `name string, opts ...SetCliExtraParam` | `[]byte` | 获取对应名称的命令行参数 |
| [cli.Float](#float) | `name string, opts ...SetCliExtraParam` | `float64` | 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.FolderName](#foldername) | `name string, opts ...SetCliExtraParam` | `string` | 获取对应名称的命令行参数，获得选中的文件夹路径，并返回 string 类型 |
| [cli.HTTPPacket](#httppacket) | `name string, opts ...SetCliExtraParam` | `string` | 获取对应名称的命令行参数，并将其转换为 string 类型返回 |
| [cli.Have](#have) | `name string, opts ...SetCliExtraParam` | `bool` | 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Host](#host) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Hosts](#hosts) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Int](#int) | `name string, opts ...SetCliExtraParam` | `int` | 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
| [cli.IntSlice](#intslice) | `name string, options ...SetCliExtraParam` | `[]int` | 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割并尝试转换为 int 类型返回 []int 类型 |
| [cli.Integer](#integer) | `name string, opts ...SetCliExtraParam` | `int` | 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
| [cli.Json](#json) | `name string, opts ...SetCliExtraParam` | `map[string]any` | 获取对应名称的命令行参数, 与cli.JsonSchema一起使用以构建复杂参数 |
| [cli.LineDict](#linedict) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数 |
| [cli.Net](#net) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Network](#network) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Port](#port) | `name string, opts ...SetCliExtraParam` | `[]int` | 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型 |
| [cli.Ports](#ports) | `name string, opts ...SetCliExtraParam` | `[]int` | 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型 |
| [cli.String](#string) | `name string, opts ...SetCliExtraParam` | `string` | 获取对应名称的命令行参数，并将其转换为 string 类型返回 |
| [cli.StringSlice](#stringslice) | `name string, options ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割返回 []string 类型 |
| [cli.Text](#text) | `name string, opts ...SetCliExtraParam` | `string` | 获取对应名称的命令行参数，并将其转换为 string 类型返回 |
| [cli.UI](#ui) | `opts ...UIParams` | - | 用于组合一组 UI 联动规则，仅在 Yakit 图形化中生效（导出名为 cli.UI） |
| [cli.Url](#url) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型 |
| [cli.Urls](#urls) | `name string, opts ...SetCliExtraParam` | `[]string` | 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型 |
| [cli.YakCode](#yakcode) | `name string, opts ...SetCliExtraParam` | `string` | 获取对应名称的命令行参数，并将其转换为 string 类型返回 |
| [cli.YakitPlugin](#yakitplugin) | `options ...SetCliExtraParam` | `[]string` | 获取名称为 yakit-plugin-file 的命令行参数 |
| [cli.help](#help) | `w ...io.Writer` | - | 用于输出命令行程序的帮助信息 |
| [cli.hideParams](#hideparams) | `params ...string` | `UIParams` | 当条件满足时隐藏指定参数的 UI 规则（导出名为 cli.hideParams） |
| [cli.setJsonSchema](#setjsonschema) | `schema string, uis ...*UISchema` | `SetCliExtraParam` | 是一个选项参数,用于在cli.Json中使用JsonSchema构建复杂参数 |
| [cli.setUISchema](#setuischema) | `params ...UISchemaParams` | `*UISchema` | 是一个选项参数,用于对JsonSchema设置的参数进行图形化的调整 |
| [cli.showParams](#showparams) | `params ...string` | `UIParams` | 当条件满足时显示指定参数的 UI 规则（导出名为 cli.showParams） |
| [cli.uiField](#uifield) | `name string, widthPercent float64, opts ...UISchemaFieldParams` | `*uiSchemaField` | 是一个选项参数,用于指定UISchema中的一个字段 |
| [cli.uiFieldGroups](#uifieldgroups) | `groups ...uiSchemaGroup` | `UISchemaFieldParams` | 是一个选项参数,用于设置UISchema中字段的嵌套组 |
| [cli.uiGroup](#uigroup) | `fields ...uiSchemaField` | `*uiSchemaGroup` | 是一个选项参数,用于指定UISchema中的一个分组,接收多个字段(cli.Field),同一分组的字段会放在一行 |
| [cli.uiGroups](#uigroups) | `groups ...uiSchemaGroup` | `UISchemaParams` | 是一个选项参数,用于指定UISchema中的字段整体分组,接受多个分组(cli.uiGroup) |
| [cli.uiTableField](#uitablefield) | `name string, width float64, opts ...UISchemaFieldParams` | `*uiSchemaField` | 是一个选项参数,用于指定UISchema中的一个表格字段 |

## 函数详情

### Args {#args}

```go
Args() []string
```

返回传给当前脚本的命令行参数列表（导出名为 cli.Args）
即运行 yak 脚本时跟在脚本名之后的原始位置参数

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 命令行参数字符串切片 |

**示例**

``````````````yak
args = cli.Args()
println(typeof(args).String())   // OUT: []string
assert typeof(args).String() == "[]string", "cli.Args should return a string slice"
assert len(args) >= 0, "args length should be non-negative"
``````````````

---

### SetCliName {#setcliname}

```go
SetCliName(name string)
```

设置此命令行程序的名称
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 命令行程序名称 |

**示例**

``````````````yak
// 关键词: cli.SetCliName, 设置命令行程序名(在 --help / 校验失败时展示)
cli.SetCliName("example-tools")
cli.help() // Usage 行会显示 example-tools, help 不会退出进程
``````````````

---

### SetDoc {#setdoc}

```go
SetDoc(document string)
```

设置此命令行程序的文档
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| document | `string` | 程序文档说明 |

**示例**

``````````````yak
// 关键词: cli.SetDoc, 设置程序文档说明(在 --help / 校验失败时展示)
cli.SetDoc("example-tools is a tool for example")
cli.help() // 该文档会出现在帮助信息中
``````````````

---

### check {#check}

```go
check()
```

用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法

**示例**

``````````````yak
// 关键词: cli.check, 校验必填参数
cli.SetCliName("demo-tool")
// 真实脚本里必填参数缺省时 cli.check() 会打印帮助并退出(os.Exit);
// 这里给必填参数同时设置默认值, 使校验通过、便于演示读取流程
target = cli.String("target", cli.setRequired(true), cli.setDefault("yaklang.com"))
cli.check() // 必填参数已满足, 校验通过, 继续执行
println("target:", target) // 预期输出: target: yaklang.com
assert target == "yaklang.com", "required param with default passes the check"
``````````````

---

### hideGroup {#hidegroup}

```go
hideGroup(group string) UIParams
```

当条件满足时隐藏指定参数分组的 UI 规则（导出名为 cli.hideGroup）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| group | `string` | 参数分组名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.hideGroup, 条件满足时隐藏某分组(仅图形化)
cli.UI(cli.whenFalse("adv"), cli.hideGroup("advanced"))
println("hide-group rule registered")
``````````````

---

### setCliGroup {#setcligroup}

```go
setCliGroup(group string) SetCliExtraParam
```

是一个选项函数，设置参数的分组

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| group | `string` | 参数分组名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setCliGroup, 把多个参数归入同一分组(仅 Yakit 图形化布局)
host = cli.String("host", cli.setCliGroup("common"), cli.setDefault("127.0.0.1"))
port = cli.Int("port", cli.setCliGroup("common"), cli.setDefault(80))
println("host:", host, "port:", port) // 预期输出: host: 127.0.0.1 port: 80
assert host == "127.0.0.1" && port == 80, "group only affects UI layout"
``````````````

---

### setDefault {#setdefault}

```go
setDefault(i any) SetCliExtraParam
```

是一个选项函数，设置参数的默认值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 参数默认值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setDefault, 为参数设置默认值
target = cli.String("target", cli.setDefault("yaklang.com"))
println("target:", target) // 未传 --target 时取默认值: yaklang.com
assert target == "yaklang.com", "setDefault provides the fallback value"
``````````````

---

### setHelp {#sethelp}

```go
setHelp(i string) SetCliExtraParam
```

是一个选项函数，设置参数的帮助信息
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 参数帮助信息 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setHelp, 设置参数帮助说明(在 --help 中展示)
host = cli.String("host", cli.setHelp("target host or ip"), cli.setDefault("127.0.0.1"))
println("host:", host) // 预期输出: host: 127.0.0.1
assert host == "127.0.0.1", "setHelp only affects help text, not the value"
``````````````

---

### setMultipleSelect {#setmultipleselect}

```go
setMultipleSelect(multiSelect bool) SetCliExtraParam
```

是一个选项函数，设置参数是否可以多选
此选项仅在`cli.StringSlice`中生效

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| multiSelect | `bool` | 是否允许多选 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setMultipleSelect, 允许多选(仅对 cli.StringSlice 生效, 图形化)
targets = cli.StringSlice("targets", cli.setMultipleSelect(true), cli.setDefault("a,b"))
println(targets) // 预期: ["a", "b"]
assert len(targets) == 2, "multiple-select only affects the UI"
``````````````

---

### setPluginEnv {#setpluginenv}

```go
setPluginEnv(key string) SetCliExtraParam
```

是一个选项函数，设置参数从插件环境中取值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 插件环境变量的键 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setPluginEnv, 让参数从插件环境变量(数据库)中取值
apiKey = cli.String("key", cli.setPluginEnv("api-key"))
println("api key from plugin env:", apiKey) // 环境中存在该 key 时取其值, 否则为空
// 无法本地验证: 真实取值依赖已写入插件环境数据库的记录
``````````````

---

### setRequired {#setrequired}

```go
setRequired(t bool) SetCliExtraParam
```

是一个选项函数，设置参数是否必须

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `bool` | 是否为必填参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setRequired, 声明参数为必填
// 注意: 必填参数缺省且无默认值时, cli.check() 会打印帮助并退出进程(os.Exit)
// 这里同时给默认值, 演示读取过程而不触发退出
token = cli.String("token", cli.setRequired(true), cli.setDefault("demo-token"))
println("token:", token) // 预期输出: token: demo-token
assert token == "demo-token", "a required param with a default is satisfied"
``````````````

---

### setSelectOption {#setselectoption}

```go
setSelectOption(name string, value string) SetCliExtraParam
```

是一个选项函数，设置参数的下拉框选项
此选项仅在`cli.StringSlice`中生效

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 下拉框选项显示名 |
| value | `string` | 下拉框选项值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setSelectOption, 为下拉框增加可选项(仅对 cli.StringSlice 生效, 图形化)
targets = cli.StringSlice("targets", cli.setSelectOption("选项A", "a"), cli.setDefault("a"))
println(targets) // 预期: ["a"]
assert len(targets) == 1, "select option only affects the UI dropdown"
``````````````

---

### setShortName {#setshortname}

```go
setShortName(shortName string) SetCliExtraParam
```

是一个选项函数，设置参数的短名称

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| shortName | `string` | 参数短名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setShortName, 设置参数短名, 命令行可用 -t 代替 --target
target = cli.String("target", cli.setShortName("t"), cli.setDefault("yaklang.com"))
println("target:", target) // 预期输出: target: yaklang.com
assert target == "yaklang.com", "short name adds a -t alias"
``````````````

---

### setVerboseName {#setverbosename}

```go
setVerboseName(verboseName string) SetCliExtraParam
```

是一个选项函数，设置参数的中文名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| verboseName | `string` | 参数中文名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setVerboseName, 设置参数中文名(仅 Yakit 图形化展示)
target = cli.String("target", cli.setVerboseName("目标"), cli.setDefault("yaklang.com"))
println("target:", target) // 预期输出: target: yaklang.com
assert target == "yaklang.com", "verbose name only changes the UI label"
``````````````

---

### setYakitPayload {#setyakitpayload}

```go
setYakitPayload(b bool) SetCliExtraParam
```

是一个选项函数，设置参数建议值为Yakit payload的字典名列表

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否启用 Yakit payload 建议值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setYakitPayload, 提示该参数可用 Yakit 字典(仅图形化建议值)
dictName = cli.String("dictName", cli.setYakitPayload(true), cli.setDefault("top100"))
println("dictName:", dictName) // 预期输出: dictName: top100
assert dictName == "top100", "payload hint only affects UI suggestion"
``````````````

---

### showGroup {#showgroup}

```go
showGroup(group string) UIParams
```

当条件满足时显示指定参数分组的 UI 规则（导出名为 cli.showGroup）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| group | `string` | 参数分组名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.showGroup, 条件满足时显示某分组(仅图形化)
cli.UI(cli.whenTrue("adv"), cli.showGroup("advanced"))
println("show-group rule registered")
``````````````

---

### uiFieldComponentStyle {#uifieldcomponentstyle}

```go
uiFieldComponentStyle(css map[string]any) UISchemaFieldParams
```

是一个选项参数,用于指定UISchema中的CSS样式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| css | `map[string]any` | CSS 样式 map |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UISchemaFieldParams` | 字段选项 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(
	            cli.uiField("name", 0.5),
	            cli.uiField("password", 0.5, cli.uiFieldWidget(cli.uiWidgetPassword)),
	        ),
	        cli.uiGroup(cli.uiField(
	            "telephone",
	            1,
	            cli.uiFieldComponentStyle({"width": "50%"}),
	        )),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### uiFieldPosition {#uifieldposition}

```go
uiFieldPosition(position UISchemaFieldClassName) UISchemaFieldParams
```

是一个选项参数,用于指定UISchema中的字段位置,默认为垂直排列

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| position | `UISchemaFieldClassName` | 字段位置，如 cli.uiPosDefault、cli.uiPosHorizontal |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UISchemaFieldParams` | 字段选项 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(
	            cli.uiField("name", 0.5),
	            cli.uiField("password", 0.5, cli.uiFieldWidget(cli.uiWidgetPassword)),
	        ),
	        cli.uiGroup(cli.uiField("telephone", 1, cli.uiFieldPosition(cli.uiPosHorizontal))),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### uiFieldWidget {#uifieldwidget}

```go
uiFieldWidget(widget UISchemaWidgetType) UISchemaFieldParams
```

是一个选项参数,用于指定UISchema中的字段使用的组件

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| widget | `UISchemaWidgetType` | 组件类型，如 cli.uiWidgetPassword、cli.uiWidgetTable |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UISchemaFieldParams` | 字段选项 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(
	            cli.uiField("name", 0.5),
	            cli.uiField("password", 0.5, cli.uiFieldWidget(cli.uiWidgetPassword)),
	        ),
	        cli.uiGroup(cli.uiField("telephone", 1)),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### uiGlobalFieldPosition {#uiglobalfieldposition}

```go
uiGlobalFieldPosition(style UISchemaFieldClassName) UISchemaParams
```

是一个选项参数,用于指定UISchema中全局的字段位置,默认为垂直排列

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| style | `UISchemaFieldClassName` | 全局字段位置，如 cli.uiPosDefault、cli.uiPosHorizontal |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UISchemaParams` | UISchema 选项 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGlobalFieldPosition(cli.uiPosHorizontal)),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### when {#when}

```go
when(expression string) UIParams
```

构造一个基于表达式的 UI 联动条件（导出名为 cli.when）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| expression | `string` | 条件表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.when, 基于表达式的联动条件(仅图形化)
cli.UI(cli.when("threads > 10"), cli.showParams("warning"))
println("when-expression rule registered")
``````````````

---

### whenDefault {#whendefault}

```go
whenDefault() UIParams
```

构造一个默认（兜底）UI 联动条件（导出名为 cli.whenDefault）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.whenDefault, 兜底联动条件(其他条件都不满足时, 仅图形化)
cli.UI(cli.whenDefault(), cli.hideGroup("advanced"))
println("when-default rule registered")
``````````````

---

### whenEqual {#whenequal}

```go
whenEqual(param string, value string) UIParams
```

构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| param | `string` | 参数名 |
| value | `string` | 比较值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.whenEqual, 当某参数等于指定值时触发(仅图形化)
cli.UI(cli.whenEqual("mode", "advanced"), cli.showGroup("advanced"))
println("when-equal rule registered")
``````````````

---

### whenFalse {#whenfalse}

```go
whenFalse(param string) UIParams
```

构造一个“当指定布尔参数为假时”的 UI 联动条件（导出名为 cli.whenFalse）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| param | `string` | 参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.whenFalse, 当某布尔参数为假时触发(仅图形化)
cli.UI(cli.whenFalse("adv"), cli.hideGroup("advanced"))
println("when-false rule registered")
``````````````

---

### whenNotEqual {#whennotequal}

```go
whenNotEqual(param string, value string) UIParams
```

whenEqual 构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| param | `string` | 参数名 |
| value | `string` | 比较值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.whenEqual, 当某参数等于指定值时触发(仅图形化)
cli.UI(cli.whenEqual("mode", "advanced"), cli.showGroup("advanced"))
println("when-equal rule registered")
``````````````

---

### whenTrue {#whentrue}

```go
whenTrue(param string) UIParams
```

构造一个“当指定布尔参数为真时”的 UI 联动条件（导出名为 cli.whenTrue）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| param | `string` | 参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.whenTrue, 当某布尔参数为真时触发(仅图形化)
cli.UI(cli.whenTrue("adv"), cli.showGroup("advanced"))
println("when-true rule registered")
``````````````

---

## 可变参数函数详情

### Bool {#bool}

```go
Bool(name string, opts ...SetCliExtraParam) bool
```

获取对应名称的命令行参数，并将其转换为 bool 类型返回

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项，如 cli.setHelp 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 参数对应的 bool 值（传入该 flag 时为 true） |

**示例**

``````````````yak
// 关键词: cli.Bool, 开关型参数
// 开关型参数不需要值: 命令行带 --verbose 即为 true, 不带则为 false
verbose = cli.Bool("verbose")
println("verbose:", verbose) // 预期输出(未传参数时): verbose: false
assert verbose == false, "flag defaults to false when not provided"
``````````````

---

### Double {#double}

```go
Double(name string, opts ...SetCliExtraParam) float64
```

获取对应名称的命令行参数，并将其转换为 float 类型返回

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 参数对应的浮点值 |

**示例**

``````````````yak
// 关键词: cli.Double, cli.Float 的别名
ratio = cli.Double("ratio", cli.setDefault(1.5))
println("ratio:", ratio) // 预期输出: ratio: 1.5
assert ratio == 1.5, "Double is an alias of cli.Float"
``````````````

---

### File {#file}

```go
File(name string, opts ...SetCliExtraParam) []byte
```

获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 文件内容字节 |

**示例**

``````````````yak
// 关键词: cli.File, 读取参数指向的文件内容
p = file.Join(os.TempDir(), "yak-cli-file-demo.txt")
file.Save(p, "hello yak")~ // 先准备一个文件, 真实使用时由命令行传入路径
content = cli.File("cfg", cli.setDefault(p))
println("content:", string(content)) // 预期输出: content: hello yak
assert string(content) == "hello yak", "should read the file content"
file.Remove(p)
``````````````

---

### FileNames {#filenames}

```go
FileNames(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 文件路径列表 |

**示例**

``````````````yak
// 关键词: cli.FileNames, 解析逗号分隔的多个文件路径(仅切割路径, 不读取内容)
names = cli.FileNames("files", cli.setDefault("/etc/passwd,/etc/hosts"))
println(names) // 预期: ["/etc/passwd", "/etc/hosts"]
assert len(names) == 2, "should split file names by comma"
``````````````

---

### FileOrContent {#fileorcontent}

```go
FileOrContent(name string, opts ...SetCliExtraParam) []byte
```

获取对应名称的命令行参数
根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 文件内容或原始内容字节 |

**示例**

``````````````yak
// 关键词: cli.FileOrContent, 传入路径则读文件, 否则把值本身当作内容
// 传入的不是存在的路径时, 原样作为内容返回
data = cli.FileOrContent("data", cli.setDefault("inline-content"))
println("data:", string(data)) // 预期输出: data: inline-content
assert string(data) == "inline-content", "non-path value is used as content directly"
``````````````

---

### Float {#float}

```go
Float(name string, opts ...SetCliExtraParam) float64
```

获取对应名称的命令行参数，并将其转换为 float 类型返回

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 参数对应的浮点值 |

**示例**

``````````````yak
// 关键词: cli.Float, 浮点数参数
percent = cli.Float("percent", cli.setDefault(0.5))
println("percent:", percent) // 预期输出: percent: 0.5
assert percent == 0.5, "should return the default float"
``````````````

---

### FolderName {#foldername}

```go
FolderName(name string, opts ...SetCliExtraParam) string
```

获取对应名称的命令行参数，获得选中的文件夹路径，并返回 string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 文件夹路径 |

**示例**

``````````````yak
// 关键词: cli.FolderName, 文件夹路径参数
folder = cli.FolderName("folder", cli.setDefault("/tmp"))
println("folder:", folder) // 预期输出: folder: /tmp
assert folder == "/tmp", "should return the folder path"
``````````````

---

### HTTPPacket {#httppacket}

```go
HTTPPacket(name string, opts ...SetCliExtraParam) string
```

获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 参数对应的字符串值 |

**示例**

``````````````yak
// 关键词: cli.HTTPPacket, 独立运行时等价 cli.String, 仅 Yakit 中展示为 HTTP 报文输入框
packet = cli.HTTPPacket("req", cli.setDefault("GET / HTTP/1.1\r\nHost: yaklang.com\r\n\r\n"))
println(packet) // 默认值即一段 HTTP 报文
assert packet.Contains("GET /"), "should return the default packet"
``````````````

---

### Have {#have}

```go
Have(name string, opts ...SetCliExtraParam) bool
```

获取对应名称的命令行参数，并将其转换为 bool 类型返回

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项，如 cli.setHelp 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 参数对应的 bool 值（传入该 flag 时为 true） |

**示例**

``````````````yak
// 关键词: cli.Have, cli.Bool 的别名
hasDebug = cli.Have("debug")
println("hasDebug:", hasDebug) // 预期输出: hasDebug: false
assert hasDebug == false, "Have is an alias of cli.Bool"
``````````````

---

### Host {#host}

```go
Host(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析后的主机 IP 列表 |

**示例**

``````````````yak
// 关键词: cli.Host, cli.Hosts 的别名
hosts = cli.Host("hosts", cli.setDefault("127.0.0.1"))
println(hosts) // 预期: ["127.0.0.1"]
assert len(hosts) == 1, "Host is an alias of cli.Hosts"
``````````````

---

### Hosts {#hosts}

```go
Hosts(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析后的主机 IP 列表 |

**示例**

``````````````yak
// 关键词: cli.Hosts, 解析 CIDR 网段 / 逗号分隔为主机 IP 列表
hosts = cli.Hosts("hosts", cli.setDefault("192.168.0.0/30,172.17.0.1"))
println(hosts) // 192.168.0.0/30 段内的 IP 加上 172.17.0.1
assert len(hosts) >= 2, "cidr should be expanded into multiple hosts"
``````````````

---

### Int {#int}

```go
Int(name string, opts ...SetCliExtraParam) int
```

获取对应名称的命令行参数，并将其转换为 int 类型返回

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 参数对应的整数值 |

**示例**

``````````````yak
// 关键词: cli.Int, 整数参数
port = cli.Int("port", cli.setDefault(80))
println("port:", port) // 预期输出: port: 80
assert port == 80, "should return the default int"
``````````````

---

### IntSlice {#intslice}

```go
IntSlice(name string, options ...SetCliExtraParam) []int
```

获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割并尝试转换为 int 类型返回 []int 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]int` | 整数列表 |

**示例**

``````````````yak
// 关键词: cli.IntSlice, 逗号分隔的整数列表
ports = cli.IntSlice("ports", cli.setDefault("80,443,8080"))
println(ports) // 预期: [80, 443, 8080]
assert len(ports) == 3, "should parse three ints"
``````````````

---

### Integer {#integer}

```go
Integer(name string, opts ...SetCliExtraParam) int
```

获取对应名称的命令行参数，并将其转换为 int 类型返回

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 参数对应的整数值 |

**示例**

``````````````yak
// 关键词: cli.Integer, cli.Int 的别名
port = cli.Integer("port", cli.setDefault(443))
println("port:", port) // 预期输出: port: 443
assert port == 443, "Integer is an alias of cli.Int"
``````````````

---

### Json {#json}

```go
Json(name string, opts ...SetCliExtraParam) map[string]any
```

获取对应名称的命令行参数, 与cli.JsonSchema一起使用以构建复杂参数
详情参考:
1. https&#58;//json-schema.org/docs
2. https&#58;//rjsf-team.github.io/react-jsonschema-form/

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项，通常配合 cli.setJsonSchema 使用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` | 解析后的 JSON 对象（map） |

**示例**

``````````````yak
// 关键词: cli.Json, 解析 JSON 参数为 map
// 独立运行时按 JSON 字符串解析; 在 Yakit 图形化中可配合 cli.setJsonSchema 渲染复杂表单
info = cli.Json("info", cli.setDefault(`{"name": "Chuck", "age": 18}`))
println("name:", info["name"]) // 预期输出: name: Chuck
assert info["name"] == "Chuck", "should parse the json default value"
``````````````

---

### LineDict {#linedict}

```go
LineDict(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数
根据其传入的值尝试读取其对应文件内容，如果无法读取则作为字符串，最后根据换行符切割，返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 按行切割后的字符串列表 |

**示例**

``````````````yak
// 关键词: cli.LineDict, 传文件则按行读取, 否则把内容按换行切割
lines = cli.LineDict("dict", cli.setDefault("admin\nroot\nguest"))
println(lines) // 预期: ["admin", "root", "guest"]
assert len(lines) == 3, "content should be split into lines"
``````````````

---

### Net {#net}

```go
Net(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析后的主机 IP 列表 |

**示例**

``````````````yak
// 关键词: cli.Net, cli.Hosts 的别名
hosts = cli.Net("hosts", cli.setDefault("10.0.0.2"))
println(hosts) // 预期: ["10.0.0.2"]
assert len(hosts) == 1, "Net is an alias of cli.Hosts"
``````````````

---

### Network {#network}

```go
Network(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析后的主机 IP 列表 |

**示例**

``````````````yak
// 关键词: cli.Network, cli.Hosts 的别名
hosts = cli.Network("hosts", cli.setDefault("10.0.0.1"))
println(hosts) // 预期: ["10.0.0.1"]
assert len(hosts) == 1, "Network is an alias of cli.Hosts"
``````````````

---

### Port {#port}

```go
Port(name string, opts ...SetCliExtraParam) []int
```

获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]int` | 解析后的端口列表 |

**示例**

``````````````yak
// 关键词: cli.Port, cli.Ports 的别名
ports = cli.Port("ports", cli.setDefault("80,443"))
println(ports) // 预期: [80, 443]
assert len(ports) == 2, "Port is an alias of cli.Ports"
``````````````

---

### Ports {#ports}

```go
Ports(name string, opts ...SetCliExtraParam) []int
```

获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]int` | 解析后的端口列表 |

**示例**

``````````````yak
// 关键词: cli.Ports, 解析端口范围/列表为 []int
ports = cli.Ports("ports", cli.setDefault("10086-10088,23333"))
println(ports) // 预期: [10086, 10087, 10088, 23333]
assert len(ports) == 4, "range and list should be expanded"
``````````````

---

### String {#string}

```go
String(name string, opts ...SetCliExtraParam) string
```

获取对应名称的命令行参数，并将其转换为 string 类型返回

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项，如 cli.setRequired、cli.setDefault 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 参数对应的字符串值 |

**示例**

``````````````yak
// 关键词: cli.String, 字符串参数
// setDefault 提供默认值, 命令行未传 --target 时取默认值
target = cli.String("target", cli.setDefault("yaklang.com"))
println("target:", target) // 预期输出: target: yaklang.com
assert target == "yaklang.com", "should fall back to default value"
``````````````

---

### StringSlice {#stringslice}

```go
StringSlice(name string, options ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 字符串列表 |

**示例**

``````````````yak
// 关键词: cli.StringSlice, 逗号分隔的字符串列表
targets = cli.StringSlice("targets", cli.setDefault("yaklang.com,example.com"))
println(targets) // 预期: ["yaklang.com", "example.com"]
assert len(targets) == 2, "should split by comma"
``````````````

---

### Text {#text}

```go
Text(name string, opts ...SetCliExtraParam) string
```

获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为文本框形式

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 参数对应的字符串值 |

**示例**

``````````````yak
// 关键词: cli.Text, 等价 cli.String, 仅 Yakit 中展示为多行文本框
note = cli.Text("note", cli.setDefault("hello yak"))
println("note:", note) // 预期输出: note: hello yak
assert note == "hello yak", "should return the default text"
``````````````

---

### UI {#ui}

```go
UI(opts ...UIParams)
```

用于组合一组 UI 联动规则，仅在 Yakit 图形化中生效（导出名为 cli.UI）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...UIParams` | 一个或多个 UI 联动规则，如 cli.showGroup、cli.whenTrue 等 |

**示例**

``````````````yak
// 关键词: cli.UI, 组合 UI 联动规则(仅 Yakit 图形化生效)
cli.UI(cli.showGroup("advanced"), cli.whenTrue("enableAdvanced"))
println("ui rule registered") // 规则只在图形化界面生效, 独立运行时是空操作
``````````````

---

### Url {#url}

```go
Url(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析后的 URL 列表 |

**示例**

``````````````yak
// 关键词: cli.Url, cli.Urls 的别名
urls = cli.Url("urls", cli.setDefault("yaklang.com"))
println(urls) // 未指定端口时同时给出 http/https 以及 www 变体
assert urls[0] == "https://yaklang.com", "the first url should be the https form"
assert len(urls) >= 1, "Url is an alias of cli.Urls"
``````````````

---

### Urls {#urls}

```go
Urls(name string, opts ...SetCliExtraParam) []string
```

获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析后的 URL 列表 |

**示例**

``````````````yak
// 关键词: cli.Urls, 将逗号分隔的目标解析为标准 URL 列表(会自动补全 www 变体)
urls = cli.Urls("urls", cli.setDefault("yaklang.com:443,example.com:443"))
println(urls) // 端口 443 解析为 https, 并自动补全 www 变体
assert urls[0] == "https://yaklang.com", "port 443 should be parsed as https"
assert len(urls) >= 2, "comma-separated targets should be parsed"
``````````````

---

### YakCode {#yakcode}

```go
YakCode(name string, opts ...SetCliExtraParam) string
```

获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 Yak 代码形式

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 参数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 参数对应的字符串值 |

**示例**

``````````````yak
// 关键词: cli.YakCode, 等价 cli.String, 仅 Yakit 中展示为 Yak 代码编辑器
code = cli.YakCode("code", cli.setDefault(`println("hello")`))
println(code) // 预期输出: println("hello")
assert code.Contains("println"), "should return the default code"
``````````````

---

### YakitPlugin {#yakitplugin}

```go
YakitPlugin(options ...SetCliExtraParam) []string
```

获取名称为 yakit-plugin-file 的命令行参数
根据其传入的值读取其对应文件内容并根据&#34;|&#34;切割并返回 []string 类型，表示各个插件名

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...SetCliExtraParam` | 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 插件名列表 |

**示例**

``````````````yak
// 关键词: cli.YakitPlugin, 读取 yakit-plugin-file 文件并按 | 切割插件名
p = file.Join(os.TempDir(), "yak-cli-plugins.txt")
file.Save(p, "plugin-a|plugin-b|plugin-c")~ // 真实使用时由 Yakit 选择插件后生成
plugins = cli.YakitPlugin(cli.setDefault(p))
println(plugins) // 预期: ["plugin-a", "plugin-b", "plugin-c"]
assert len(plugins) == 3, "should split plugin names by |"
file.Remove(p)
``````````````

---

### help {#help}

```go
help(w ...io.Writer)
```

用于输出命令行程序的帮助信息

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| w | `...io.Writer` | 可选的输出 writer，默认为标准输出 |

**示例**

``````````````yak
// 关键词: cli.help, 打印用法/参数列表
cli.SetCliName("demo-tool")
cli.SetDoc("a demo tool for cli usage")
cli.String("target", cli.setHelp("target host"), cli.setDefault("yaklang.com"))
cli.help() // 把 Usage 和参数说明打印到标准输出, 不会退出进程
``````````````

---

### hideParams {#hideparams}

```go
hideParams(params ...string) UIParams
```

当条件满足时隐藏指定参数的 UI 规则（导出名为 cli.hideParams）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| params | `...string` | 一个或多个参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.hideParams, 条件满足时隐藏指定参数(仅图形化)
cli.UI(cli.whenFalse("adv"), cli.hideParams("threads"))
println("hide-params rule registered")
``````````````

---

### setJsonSchema {#setjsonschema}

```go
setJsonSchema(schema string, uis ...*UISchema) SetCliExtraParam
```

是一个选项参数,用于在cli.Json中使用JsonSchema构建复杂参数
详情参考:
1. https&#58;//json-schema.org/docs
2. https&#58;//rjsf-team.github.io/react-jsonschema-form/

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| schema | `string` | JSON Schema 字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| uis | `...*UISchema` | 可选的 UI Schema |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SetCliExtraParam` | 参数选项函数 |

**示例**

``````````````yak
// 关键词: cli.setJsonSchema, 用 JSON Schema 在 Yakit 中渲染复杂表单
// 独立运行时仍按 JSON 解析; 这里用默认值演示解析过程(图形化中由 schema 驱动表单)
info = cli.Json("info",
    cli.setVerboseName("项目信息"),
    cli.setJsonSchema(`{"type":"object","properties":{"name":{"type":"string"}}}`),
    cli.setDefault(`{"name": "Chuck"}`),
)
println("name:", info["name"]) // 预期输出: name: Chuck
assert info["name"] == "Chuck", "json default should be parsed"
``````````````

---

### setUISchema {#setuischema}

```go
setUISchema(params ...UISchemaParams) *UISchema
```

是一个选项参数,用于对JsonSchema设置的参数进行图形化的调整
详情参考:
1. https&#58;//json-schema.org/docs
2. https&#58;//rjsf-team.github.io/react-jsonschema-form/
3. https&#58;//rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema/

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| params | `...UISchemaParams` | 一个或多个 UISchema 选项，如 cli.uiGroups、cli.uiGlobalFieldPosition |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*UISchema` | UISchema 对象 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(
	            cli.uiField("name", 0.5),
	            cli.uiField("password", 0.5, cli.uiFieldWidget(cli.uiWidgetPassword)),
	        ),
	        cli.uiGroup(cli.uiField("telephone", 1)),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### showParams {#showparams}

```go
showParams(params ...string) UIParams
```

当条件满足时显示指定参数的 UI 规则（导出名为 cli.showParams）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| params | `...string` | 一个或多个参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UIParams` | UI 联动规则 |

**示例**

``````````````yak
// 关键词: cli.showParams, 条件满足时显示指定参数(仅图形化)
cli.UI(cli.whenTrue("adv"), cli.showParams("threads", "timeout"))
println("show-params rule registered")
``````````````

---

### uiField {#uifield}

```go
uiField(name string, widthPercent float64, opts ...UISchemaFieldParams) *uiSchemaField
```

是一个选项参数,用于指定UISchema中的一个字段
第一个参数指定字段名
第二个参数指定这个字段所占的宽度比(0.0-1.0)
接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget)

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名 |
| widthPercent | `float64` | 字段所占宽度比（0.0-1.0） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...UISchemaFieldParams` | 零个或多个字段选项，如 cli.uiFieldWidget、cli.uiFieldGroups |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*uiSchemaField` | 字段对象 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(
	            cli.uiField("name", 0.5),
	            cli.uiField("password", 0.5, cli.uiFieldWidget(cli.uiWidgetPassword)),
	        ),
	        cli.uiGroup(cli.uiField("telephone", 1)),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### uiFieldGroups {#uifieldgroups}

```go
uiFieldGroups(groups ...uiSchemaGroup) UISchemaFieldParams
```

是一个选项参数,用于设置UISchema中字段的嵌套组

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| groups | `...uiSchemaGroup` | 一个或多个嵌套分组（cli.uiGroup） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UISchemaFieldParams` | 字段选项 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A list of tasks","type":"object","required":["title"],"properties":{"title":{"type":"string","title":"Task list title"},"tasks":{"type":"array","title":"Tasks","items":{"type":"object","required":["title"],"properties":{"title":{"type":"string","title":"Title","description":"A sample title"},"details":{"type":"string","title":"Task details","description":"Enter the task details"},"done":{"type":"boolean","title":"Done?","default":false}}}}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(cli.uiField("title", 1)),
	        cli.uiGroup(cli.uiField(
	            "tasks",
	            1,
	            cli.uiFieldGroups(cli.uiGroup(cli.uiField(
	                "items",
	                1,
	                cli.uiFieldGroups(
	                    cli.uiGroup(cli.uiField("title", 1)),
	                    cli.uiGroup(cli.uiField("details", 1, cli.uiFieldWidget(cli.uiWidgetTextarea))),
	                    cli.uiGroup(cli.uiField("done", 1)),
	                ),
	            ))),
	        )),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### uiGroup {#uigroup}

```go
uiGroup(fields ...uiSchemaField) *uiSchemaGroup
```

是一个选项参数,用于指定UISchema中的一个分组,接收多个字段(cli.Field),同一分组的字段会放在一行

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| fields | `...uiSchemaField` | 一个或多个字段（cli.uiField） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*uiSchemaGroup` | 分组对象 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(
	            cli.uiField("name", 0.5),
	            cli.uiField("password", 0.5, cli.uiFieldWidget(cli.uiWidgetPassword)),
	        ),
	        cli.uiGroup(cli.uiField("telephone", 1)),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### uiGroups {#uigroups}

```go
uiGroups(groups ...uiSchemaGroup) UISchemaParams
```

是一个选项参数,用于指定UISchema中的字段整体分组,接受多个分组(cli.uiGroup)

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| groups | `...uiSchemaGroup` | 一个或多个分组（cli.uiGroup） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UISchemaParams` | UISchema 选项 |

**示例**

``````````````yak
info = cli.Json(

	"info",
	cli.setVerboseName("项目信息"),
	cli.setJsonSchema(
	    <<<JSON

{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,

	    cli.setUISchema(cli.uiGroups(
	        cli.uiGroup(
	            cli.uiField("name", 0.5),
	            cli.uiField("password", 0.5, cli.uiFieldWidget(cli.uiWidgetPassword)),
	        ),
	        cli.uiGroup(cli.uiField("telephone", 1)),
	    )),
	),

cli.setRequired(true),
)
cli.check()
``````````````

---

### uiTableField {#uitablefield}

```go
uiTableField(name string, width float64, opts ...UISchemaFieldParams) *uiSchemaField
```

是一个选项参数,用于指定UISchema中的一个表格字段
第一个参数指定字段名
第二个参数指定这个字段所占宽度
接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget)

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名 |
| width | `float64` | 字段所占宽度 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...UISchemaFieldParams` | 零个或多个字段选项，如 cli.uiFieldWidget、cli.uiFieldGroups |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*uiSchemaField` | 表格字段对象 |

**示例**

``````````````yak
args = cli.Json(

	"kv",
	cli.setVerboseName("键值对abc"),
	cli.setJsonSchema(
	    <<<JSON

{"type":"object","properties":{"kvs":{"type":"array","title":"键值对","minItems":1,"items":{"properties":{"key":{"type":"string","title":"键"},"value":{"type":"string","title":"值"}},"require":["key","value"]}}}}
JSON,
cli.setUISchema(

	cli.uiGroups(
	    cli.uiGroup(
	        cli.uiField("kvs", 1, cli.uiFieldWidget(cli.uiWidgetTable), cli.uiFieldGroups(
	            cli.uiGroup(
	                cli.uiField("items", 1, cli.uiFieldGroups(
	                    cli.uiGroup(
	                        cli.uiTableField("key", 100),
	                        cli.uiTableField("value", 100),
	                    )
	                ))
	            )
	        ))
	    )
	)

),

),

	cli.setRequired(true),

)
cli.check()
``````````````

---

