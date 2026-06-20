# cli

|实例名|实例描述|
|:------|:--------|
uiPosDefault|(cli.UISchemaFieldClassName) &#34;&#34;|
uiPosHorizontal|(cli.UISchemaFieldClassName) &#34;json-schema-row-form&#34;|
uiWidgetCheckbox|(cli.UISchemaWidgetType) &#34;checkbox&#34;|
uiWidgetFile|(cli.UISchemaWidgetType) &#34;file&#34;|
uiWidgetFiles|(cli.UISchemaWidgetType) &#34;files&#34;|
uiWidgetFolder|(cli.UISchemaWidgetType) &#34;folder&#34;|
uiWidgetPassword|(cli.UISchemaWidgetType) &#34;password&#34;|
uiWidgetRadio|(cli.UISchemaWidgetType) &#34;radio&#34;|
uiWidgetSelect|(cli.UISchemaWidgetType) &#34;select&#34;|
uiWidgetTable|(cli.UISchemaWidgetType) &#34;table&#34;|
uiWidgetTextarea|(cli.UISchemaWidgetType) &#34;textarea&#34;|
uiWidgetUpdown|(cli.UISchemaWidgetType) &#34;updown&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [cli.Args](#args) |Args 返回传给当前脚本的命令行参数列表（导出名为 cli.Args） 即运行 yak 脚本时跟在脚本名之后的原始位置参数 返回值: - 命令行参数字符串切片|
| [cli.Bool](#bool) |Bool 获取对应名称的命令行参数，并将其转换为 bool 类型返回 参数: - name: 参数名 - opts: 参数选项，如 cli.setHelp 等 返回值: - 参数对应的 bool 值（传入该 flag 时为 true）|
| [cli.Double](#double) |Double 获取对应名称的命令行参数，并将其转换为 float 类型返回 参数: - name: 参数名 - opts: 参数选项 返回值: - 参数对应的浮点值|
| [cli.File](#file) |File 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 文件内容字节|
| [cli.FileNames](#filenames) |FileNames 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 文件路径列表|
| [cli.FileOrContent](#fileorcontent) |FileOrContent 获取对应名称的命令行参数 根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 文件内容或原始内容字节|
| [cli.Float](#float) |Float 获取对应名称的命令行参数，并将其转换为 float 类型返回 参数: - name: 参数名 - opts: 参数选项 返回值: - 参数对应的浮点值|
| [cli.FolderName](#foldername) |FolderName 获取对应名称的命令行参数，获得选中的文件夹路径，并返回 string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 文件夹路径|
| [cli.HTTPPacket](#httppacket) |HTTPPacket 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式 参数: - name: 参数名 - opts: 参数选项 返回值: - 参数对应的字符串值|
| [cli.Have](#have) |Have 获取对应名称的命令行参数，并将其转换为 bool 类型返回 参数: - name: 参数名 - opts: 参数选项，如 cli.setHelp 等 返回值: - 参数对应的 bool 值（传入该 flag 时为 true）|
| [cli.Host](#host) |Host 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的主机 IP 列表|
| [cli.Hosts](#hosts) |Hosts 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的主机 IP 列表|
| [cli.Int](#int) |Int 获取对应名称的命令行参数，并将其转换为 int 类型返回 参数: - name: 参数名 - opts: 参数选项 返回值: - 参数对应的整数值|
| [cli.IntSlice](#intslice) |IntSlice 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割并尝试转换为 int 类型返回 []int 类型 参数: - name: 参数名 - options: 参数选项 返回值: - 整数列表|
| [cli.Integer](#integer) |Integer 获取对应名称的命令行参数，并将其转换为 int 类型返回 参数: - name: 参数名 - opts: 参数选项 返回值: - 参数对应的整数值|
| [cli.Json](#json) |Json 获取对应名称的命令行参数, 与cli.JsonSchema一起使用以构建复杂参数 详情参考: 1. https://json-schema.org/docs 2. https://rjsf-team.github.io/react-jsonschema-form/|
| [cli.LineDict](#linedict) |LineDict 获取对应名称的命令行参数 根据其传入的值尝试读取其对应文件内容，如果无法读取则作为字符串，最后根据换行符切割，返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 按行切割后的字符串列表|
| [cli.Net](#net) |Net 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的主机 IP 列表|
| [cli.Network](#network) |NetWork 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的主机 IP 列表|
| [cli.Port](#port) |Port 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的端口列表|
| [cli.Ports](#ports) |Ports 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的端口列表|
| [cli.SetCliName](#setcliname) |SetCliName 设置此命令行程序的名称 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 参数: - name: 命令行程序名称 返回值: - 无|
| [cli.SetDoc](#setdoc) |SetDoc 设置此命令行程序的文档 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 参数: - document: 程序文档说明 返回值: - 无|
| [cli.String](#string) |String 获取对应名称的命令行参数，并将其转换为 string 类型返回 参数: - name: 参数名 - opts: 参数选项，如 cli.setRequired、cli.setDefault 等 返回值: - 参数对应的字符串值|
| [cli.StringSlice](#stringslice) |StringSlice 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割返回 []string 类型 参数: - name: 参数名 - options: 参数选项 返回值: - 字符串列表|
| [cli.Text](#text) |Text 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为文本框形式 参数: - name: 参数名 - opts: 参数选项 返回值: - 参数对应的字符串值|
| [cli.UI](#ui) |UI 用于组合一组 UI 联动规则，仅在 Yakit 图形化中生效（导出名为 cli.UI） 参数: - opts: 一个或多个 UI 联动规则，如 cli.showGroup、cli.whenTrue 等 返回值: - 无|
| [cli.Url](#url) |Url 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的 URL 列表|
| [cli.Urls](#urls) |Urls 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型 参数: - name: 参数名 - opts: 参数选项 返回值: - 解析后的 URL 列表|
| [cli.YakCode](#yakcode) |YakCode 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 Yak 代码形式 参数: - name: 参数名 - opts: 参数选项 返回值: - 参数对应的字符串值|
| [cli.YakitPlugin](#yakitplugin) |YakitPlugin 获取名称为 yakit-plugin-file 的命令行参数 根据其传入的值读取其对应文件内容并根据&#34;\|&#34;切割并返回 []string 类型，表示各个插件名 参数: - options: 参数选项 返回值: - 插件名列表|
| [cli.check](#check) |check 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法 参数: - 无 返回值: - 无|
| [cli.help](#help) |help 用于输出命令行程序的帮助信息 参数: - w: 可选的输出 writer，默认为标准输出 返回值: - 无|
| [cli.hideGroup](#hidegroup) |hideGroup 当条件满足时隐藏指定参数分组的 UI 规则（导出名为 cli.hideGroup） 参数: - group: 参数分组名 返回值: - UI 联动规则|
| [cli.hideParams](#hideparams) |hideParams 当条件满足时隐藏指定参数的 UI 规则（导出名为 cli.hideParams） 参数: - params: 一个或多个参数名 返回值: - UI 联动规则|
| [cli.setCliGroup](#setcligroup) |setCliGroup 是一个选项函数，设置参数的分组|
| [cli.setDefault](#setdefault) |setDefault 是一个选项函数，设置参数的默认值 参数: - i: 参数默认值 返回值: - 参数选项函数|
| [cli.setHelp](#sethelp) |setHelp 是一个选项函数，设置参数的帮助信息 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 参数: - i: 参数帮助信息 返回值: - 参数选项函数|
| [cli.setJsonSchema](#setjsonschema) |setJsonSchema 是一个选项参数,用于在cli.Json中使用JsonSchema构建复杂参数 详情参考: 1. https://json-schema.org/docs 2. https://rjsf-team.github.io/react-jsonschema-form/|
| [cli.setMultipleSelect](#setmultipleselect) |SetMultipleSelect 是一个选项函数，设置参数是否可以多选 此选项仅在`cli.StringSlice`中生效 参数: - multiSelect: 是否允许多选 返回值: - 参数选项函数|
| [cli.setPluginEnv](#setpluginenv) |setPluginEnv 是一个选项函数，设置参数从插件环境中取值 参数: - key: 插件环境变量的键 返回值: - 参数选项函数|
| [cli.setRequired](#setrequired) |setRequired 是一个选项函数，设置参数是否必须 参数: - t: 是否为必填参数 返回值: - 参数选项函数|
| [cli.setSelectOption](#setselectoption) |setSelectOption 是一个选项函数，设置参数的下拉框选项 此选项仅在`cli.StringSlice`中生效 参数: - name: 下拉框选项显示名 - value: 下拉框选项值 返回值: - 参数选项函数|
| [cli.setShortName](#setshortname) |setShortName 是一个选项函数，设置参数的短名称|
| [cli.setUISchema](#setuischema) |setUISchema 是一个选项参数,用于对JsonSchema设置的参数进行图形化的调整 详情参考: 1. https://json-schema.org/docs 2. https://rjsf-team.github.io/react-jsonschema-form/ 3. https://...|
| [cli.setVerboseName](#setverbosename) |setVerboseName 是一个选项函数，设置参数的中文名 参数: - verboseName: 参数中文名 返回值: - 参数选项函数|
| [cli.setYakitPayload](#setyakitpayload) |setYakitPayload 是一个选项函数，设置参数建议值为Yakit payload的字典名列表 参数: - b: 是否启用 Yakit payload 建议值 返回值: - 参数选项函数|
| [cli.showGroup](#showgroup) |showGroup 当条件满足时显示指定参数分组的 UI 规则（导出名为 cli.showGroup） 参数: - group: 参数分组名 返回值: - UI 联动规则|
| [cli.showParams](#showparams) |showParams 当条件满足时显示指定参数的 UI 规则（导出名为 cli.showParams） 参数: - params: 一个或多个参数名 返回值: - UI 联动规则|
| [cli.uiField](#uifield) |uiField 是一个选项参数,用于指定UISchema中的一个字段 第一个参数指定字段名 第二个参数指定这个字段所占的宽度比(0.0-1.0) 接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidg...|
| [cli.uiFieldComponentStyle](#uifieldcomponentstyle) |uiFieldComponentStyle 是一个选项参数,用于指定UISchema中的CSS样式|
| [cli.uiFieldGroups](#uifieldgroups) |uiFieldGroups 是一个选项参数,用于设置UISchema中字段的嵌套组|
| [cli.uiFieldPosition](#uifieldposition) |uiFieldPosition 是一个选项参数,用于指定UISchema中的字段位置,默认为垂直排列|
| [cli.uiFieldWidget](#uifieldwidget) |uiFieldWidget 是一个选项参数,用于指定UISchema中的字段使用的组件|
| [cli.uiGlobalFieldPosition](#uiglobalfieldposition) |uiGlobalFieldPosition 是一个选项参数,用于指定UISchema中全局的字段位置,默认为垂直排列|
| [cli.uiGroup](#uigroup) |uiGroup 是一个选项参数,用于指定UISchema中的一个分组,接收多个字段(cli.Field),同一分组的字段会放在一行|
| [cli.uiGroups](#uigroups) |uiGroups 是一个选项参数,用于指定UISchema中的字段整体分组,接受多个分组(cli.uiGroup)|
| [cli.uiTableField](#uitablefield) |uiTableField 是一个选项参数,用于指定UISchema中的一个表格字段 第一个参数指定字段名 第二个参数指定这个字段所占宽度 接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget)|
| [cli.when](#when) |when 构造一个基于表达式的 UI 联动条件（导出名为 cli.when） 参数: - expression: 条件表达式 返回值: - UI 联动规则|
| [cli.whenDefault](#whendefault) |whenDefault 构造一个默认（兜底）UI 联动条件（导出名为 cli.whenDefault） 参数: - 无 返回值: - UI 联动规则|
| [cli.whenEqual](#whenequal) |whenEqual 构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual） 参数: - param: 参数名 - value: 比较值 返回值: - UI 联动规则|
| [cli.whenFalse](#whenfalse) |whenFalse 构造一个“当指定布尔参数为假时”的 UI 联动条件（导出名为 cli.whenFalse） 参数: - param: 参数名 返回值: - UI 联动规则|
| [cli.whenNotEqual](#whennotequal) |whenEqual 构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual） 参数: - param: 参数名 - value: 比较值 返回值: - UI 联动规则|
| [cli.whenTrue](#whentrue) |whenTrue 构造一个“当指定布尔参数为真时”的 UI 联动条件（导出名为 cli.whenTrue） 参数: - param: 参数名 返回值: - UI 联动规则|


## 函数定义
### Args

#### 详细描述
Args 返回传给当前脚本的命令行参数列表（导出名为 cli.Args）
即运行 yak 脚本时跟在脚本名之后的原始位置参数

返回值:
  - 命令行参数字符串切片


Example:

``````````````yak
args = cli.Args()
println(typeof(args).String())   // OUT: []string
assert typeof(args).String() == "[]string", "cli.Args should return a string slice"
assert len(args) >= 0, "args length should be non-negative"
``````````````


#### 定义

`Args() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 命令行参数字符串切片 |


### Bool

#### 详细描述
Bool 获取对应名称的命令行参数，并将其转换为 bool 类型返回
参数:
  - name: 参数名
  - opts: 参数选项，如 cli.setHelp 等

返回值:
  - 参数对应的 bool 值（传入该 flag 时为 true）


Example:

``````````````yak
verbose = cli.Bool("verbose") // --verbose 则为true
``````````````


#### 定义

`Bool(name string, opts ...SetCliExtraParam) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项，如 cli.setHelp 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 参数对应的 bool 值（传入该 flag 时为 true） |


### Double

#### 详细描述
Double 获取对应名称的命令行参数，并将其转换为 float 类型返回
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 参数对应的浮点值


Example:

``````````````yak
percent = cli.Double("percent") // --percent 0.5 则 percent 为 0.5
``````````````


#### 定义

`Double(name string, opts ...SetCliExtraParam) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 参数对应的浮点值 |


### File

#### 详细描述
File 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 文件内容字节


Example:

``````````````yak
file = cli.File("file")
// --file /etc/passwd 则 file 为 /etc/passwd 文件中的内容
``````````````


#### 定义

`File(name string, opts ...SetCliExtraParam) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 文件内容字节 |


### FileNames

#### 详细描述
FileNames 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 文件路径列表


Example:

``````````````yak
file = cli.FileNames("file")
// --file /etc/passwd,/etc/hosts 则 file 为 ["/etc/passwd", "/etc/hosts"]
``````````````


#### 定义

`FileNames(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 文件路径列表 |


### FileOrContent

#### 详细描述
FileOrContent 获取对应名称的命令行参数
根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 文件内容或原始内容字节


Example:

``````````````yak
foc = cli.FileOrContent("foc")
// --foc /etc/passwd 则 foc 为 /etc/passwd 文件中的内容
// --file "asd" 则 file 为 "asd"
``````````````


#### 定义

`FileOrContent(name string, opts ...SetCliExtraParam) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 文件内容或原始内容字节 |


### Float

#### 详细描述
Float 获取对应名称的命令行参数，并将其转换为 float 类型返回
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 参数对应的浮点值


Example:

``````````````yak
percent = cli.Float("percent") // --percent 0.5 则 percent 为 0.5
``````````````


#### 定义

`Float(name string, opts ...SetCliExtraParam) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 参数对应的浮点值 |


### FolderName

#### 详细描述
FolderName 获取对应名称的命令行参数，获得选中的文件夹路径，并返回 string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 文件夹路径


Example:

``````````````yak
folder = cli.FolderName("folder")
// --folder /etc 则 folder 为 "/etc"
``````````````


#### 定义

`FolderName(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 文件夹路径 |


### HTTPPacket

#### 详细描述
HTTPPacket 获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 参数对应的字符串值


Example:

``````````````yak
target = cli.HTTPPacket("target") // --target yaklang.com 则 target 为 yaklang.com
``````````````


#### 定义

`HTTPPacket(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 参数对应的字符串值 |


### Have

#### 详细描述
Have 获取对应名称的命令行参数，并将其转换为 bool 类型返回
参数:
  - name: 参数名
  - opts: 参数选项，如 cli.setHelp 等

返回值:
  - 参数对应的 bool 值（传入该 flag 时为 true）


Example:

``````````````yak
verbose = cli.Have("verbose") // --verbose 则为true
``````````````


#### 定义

`Have(name string, opts ...SetCliExtraParam) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项，如 cli.setHelp 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 参数对应的 bool 值（传入该 flag 时为 true） |


### Host

#### 详细描述
Host 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的主机 IP 列表


Example:

``````````````yak
hosts = cli.Host("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
``````````````


#### 定义

`Host(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析后的主机 IP 列表 |


### Hosts

#### 详细描述
Hosts 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的主机 IP 列表


Example:

``````````````yak
hosts = cli.Hosts("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
``````````````


#### 定义

`Hosts(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析后的主机 IP 列表 |


### Int

#### 详细描述
Int 获取对应名称的命令行参数，并将其转换为 int 类型返回
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 参数对应的整数值


Example:

``````````````yak
port = cli.Int("port") // --port 80 则 port 为 80
``````````````


#### 定义

`Int(name string, opts ...SetCliExtraParam) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 参数对应的整数值 |


### IntSlice

#### 详细描述
IntSlice 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割并尝试转换为 int 类型返回 []int 类型
参数:
  - name: 参数名
  - options: 参数选项

返回值:
  - 整数列表


Example:

``````````````yak
ports = cli.IntSlice("ports")
// --ports 80,443,8080 则 ports 为 [80, 443, 8080]
``````````````


#### 定义

`IntSlice(name string, options ...SetCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| options | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 整数列表 |


### Integer

#### 详细描述
Integer 获取对应名称的命令行参数，并将其转换为 int 类型返回
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 参数对应的整数值


Example:

``````````````yak
port = cli.Integer("port") // --port 80 则 port 为 80
``````````````


#### 定义

`Integer(name string, opts ...SetCliExtraParam) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 参数对应的整数值 |


### Json

#### 详细描述
Json 获取对应名称的命令行参数, 与cli.JsonSchema一起使用以构建复杂参数
详情参考:
1. https://json-schema.org/docs
2. https://rjsf-team.github.io/react-jsonschema-form/

Example:

``````````````yak
info = cli.Json("info",
cli.setVerboseName("项目信息"),
cli.setJsonSchema(<<<JSON
{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,cli.setUISchema()),
)
cli.check()

参数:
  - name: 参数名
  - opts: 参数选项，通常配合 cli.setJsonSchema 使用

返回值:
  - 解析后的 JSON 对象（map）
``````````````


#### 定义

`Json(name string, opts ...SetCliExtraParam) map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项，通常配合 cli.setJsonSchema 使用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` | 解析后的 JSON 对象（map） |


### LineDict

#### 详细描述
LineDict 获取对应名称的命令行参数
根据其传入的值尝试读取其对应文件内容，如果无法读取则作为字符串，最后根据换行符切割，返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 按行切割后的字符串列表


Example:

``````````````yak
dict = cli.LineDict("dict")
// --dict /etc/passwd 则 dict 为 /etc/passwd 文件中的逐行的内容
// --dict "asd" 则 dict 为 ["asd"]
``````````````


#### 定义

`LineDict(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 按行切割后的字符串列表 |


### Net

#### 详细描述
Net 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的主机 IP 列表


Example:

``````````````yak
hosts = cli.Net("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
``````````````


#### 定义

`Net(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析后的主机 IP 列表 |


### Network

#### 详细描述
NetWork 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的主机 IP 列表


Example:

``````````````yak
hosts = cli.NetWork("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
``````````````


#### 定义

`Network(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析后的主机 IP 列表 |


### Port

#### 详细描述
Port 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的端口列表


Example:

``````````````yak
ports = cli.Port("ports")
// --ports 10086-10088,23333 则 ports 为 [10086, 10087, 10088, 23333]
``````````````


#### 定义

`Port(name string, opts ...SetCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 解析后的端口列表 |


### Ports

#### 详细描述
Ports 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的端口列表


Example:

``````````````yak
ports = cli.Ports("ports")
// --ports 10086-10088,23333 则 ports 为 [10086, 10087, 10088, 23333]
``````````````


#### 定义

`Ports(name string, opts ...SetCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 解析后的端口列表 |


### SetCliName

#### 详细描述
SetCliName 设置此命令行程序的名称
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示
参数:
  - name: 命令行程序名称

返回值:
  - 无


Example:

``````````````yak
cli.SetCliName("example-tools")
``````````````


#### 定义

`SetCliName(name string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 命令行程序名称 |


### SetDoc

#### 详细描述
SetDoc 设置此命令行程序的文档
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示
参数:
  - document: 程序文档说明

返回值:
  - 无


Example:

``````````````yak
cli.SetDoc("example-tools is a tool for example")
``````````````


#### 定义

`SetDoc(document string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| document | `string` | 程序文档说明 |


### String

#### 详细描述
String 获取对应名称的命令行参数，并将其转换为 string 类型返回
参数:
  - name: 参数名
  - opts: 参数选项，如 cli.setRequired、cli.setDefault 等

返回值:
  - 参数对应的字符串值


Example:

``````````````yak
target = cli.String("target") // --target yaklang.com 则 target 为 yaklang.com
``````````````


#### 定义

`String(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项，如 cli.setRequired、cli.setDefault 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 参数对应的字符串值 |


### StringSlice

#### 详细描述
StringSlice 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割返回 []string 类型
参数:
  - name: 参数名
  - options: 参数选项

返回值:
  - 字符串列表


Example:

``````````````yak
targets = cli.StringSlice("targets")
// --targets yaklang.com,google.com 则 targets 为 ["yaklang.com", "google.com"]
``````````````


#### 定义

`StringSlice(name string, options ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| options | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 字符串列表 |


### Text

#### 详细描述
Text 获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为文本框形式
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 参数对应的字符串值


Example:

``````````````yak
target = cli.Text("target") // --target yaklang.com 则 target 为 yaklang.com
``````````````


#### 定义

`Text(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 参数对应的字符串值 |


### UI

#### 详细描述
UI 用于组合一组 UI 联动规则，仅在 Yakit 图形化中生效（导出名为 cli.UI）
参数:
  - opts: 一个或多个 UI 联动规则，如 cli.showGroup、cli.whenTrue 等

返回值:
  - 无


Example:

``````````````yak
cli.UI(cli.showGroup("advanced"), cli.whenTrue("enableAdvanced"))
``````````````


#### 定义

`UI(opts ...UIParams)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...UIParams` | 一个或多个 UI 联动规则，如 cli.showGroup、cli.whenTrue 等 |


### Url

#### 详细描述
Url 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的 URL 列表


Example:

``````````````yak
urls = cli.Url("urls")
// --urls yaklang.com:443,google.com:443 则 urls 为 ["https://yaklang.com", "https://google.com"]
``````````````


#### 定义

`Url(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析后的 URL 列表 |


### Urls

#### 详细描述
Urls 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 解析后的 URL 列表


Example:

``````````````yak
urls = cli.Urls("urls")
// --urls yaklang.com:443,google.com:443 则 urls 为 ["https://yaklang.com", "https://google.com"]
``````````````


#### 定义

`Urls(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析后的 URL 列表 |


### YakCode

#### 详细描述
YakCode 获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 Yak 代码形式
参数:
  - name: 参数名
  - opts: 参数选项

返回值:
  - 参数对应的字符串值


Example:

``````````````yak
target = cli.YakCode("target") // --target yaklang.com 则 target 为 yaklang.com
``````````````


#### 定义

`YakCode(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 参数名 |
| opts | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 参数对应的字符串值 |


### YakitPlugin

#### 详细描述
YakitPlugin 获取名称为 yakit-plugin-file 的命令行参数
根据其传入的值读取其对应文件内容并根据&#34;|&#34;切割并返回 []string 类型，表示各个插件名
参数:
  - options: 参数选项

返回值:
  - 插件名列表


Example:

``````````````yak
plugins = cli.YakitPlugin()
// --yakit-plugin-file plugins.txt 则 plugins 为 plugins.txt 文件中的各个插件名
``````````````


#### 定义

`YakitPlugin(options ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...SetCliExtraParam` | 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 插件名列表 |


### check

#### 详细描述
check 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法
参数:
  - 无

返回值:
  - 无


Example:

``````````````yak
target = cli.String("target", cli.SetRequired(true))
cli.check()
``````````````


#### 定义

`check()`


### help

#### 详细描述
help 用于输出命令行程序的帮助信息
参数:
  - w: 可选的输出 writer，默认为标准输出

返回值:
  - 无


Example:

``````````````yak
cli.help()
``````````````


#### 定义

`help(w ...io.Writer)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `...io.Writer` | 可选的输出 writer，默认为标准输出 |


### hideGroup

#### 详细描述
hideGroup 当条件满足时隐藏指定参数分组的 UI 规则（导出名为 cli.hideGroup）
参数:
  - group: 参数分组名

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenFalse("adv"), cli.hideGroup("advanced"))
``````````````


#### 定义

`hideGroup(group string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 参数分组名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### hideParams

#### 详细描述
hideParams 当条件满足时隐藏指定参数的 UI 规则（导出名为 cli.hideParams）
参数:
  - params: 一个或多个参数名

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenFalse("adv"), cli.hideParams("threads"))
``````````````


#### 定义

`hideParams(params ...string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...string` | 一个或多个参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### setCliGroup

#### 详细描述
setCliGroup 是一个选项函数，设置参数的分组

Example:

``````````````yak
cli.String("target", cli.setCliGroup("common"))
cli.Int("port", cli.setCliGroup("common"))
cli.Int("threads", cli.setCliGroup("request"))
cli.Int("retryTimes", cli.setCliGroup("request"))

参数:
  - group: 参数分组名

返回值:
  - 参数选项函数
``````````````


#### 定义

`setCliGroup(group string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 参数分组名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setDefault

#### 详细描述
setDefault 是一个选项函数，设置参数的默认值
参数:
  - i: 参数默认值

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.String("target", cli.SetDefault("yaklang.com"))
``````````````


#### 定义

`setDefault(i any) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 参数默认值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setHelp

#### 详细描述
setHelp 是一个选项函数，设置参数的帮助信息
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示
参数:
  - i: 参数帮助信息

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.String("target", cli.SetHelp("target host or ip"))
``````````````


#### 定义

`setHelp(i string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 参数帮助信息 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setJsonSchema

#### 详细描述
setJsonSchema 是一个选项参数,用于在cli.Json中使用JsonSchema构建复杂参数
详情参考:
1. https://json-schema.org/docs
2. https://rjsf-team.github.io/react-jsonschema-form/

Example:

``````````````yak
info = cli.Json("info",
cli.setVerboseName("项目信息"),
cli.setJsonSchema(<<<JSON
{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,cli.setUISchema()),
)
cli.check()

参数:
  - schema: JSON Schema 字符串
  - uis: 可选的 UI Schema

返回值:
  - 参数选项函数
``````````````


#### 定义

`setJsonSchema(schema string, uis ...*UISchema) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| schema | `string` | JSON Schema 字符串 |
| uis | `...*UISchema` | 可选的 UI Schema |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setMultipleSelect

#### 详细描述
SetMultipleSelect 是一个选项函数，设置参数是否可以多选
此选项仅在`cli.StringSlice`中生效
参数:
  - multiSelect: 是否允许多选

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.StringSlice("targets", cli.SetMultipleSelect(true))
``````````````


#### 定义

`setMultipleSelect(multiSelect bool) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| multiSelect | `bool` | 是否允许多选 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setPluginEnv

#### 详细描述
setPluginEnv 是一个选项函数，设置参数从插件环境中取值
参数:
  - key: 插件环境变量的键

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.String("key", cli.setPluginEnv("api-key"))
``````````````


#### 定义

`setPluginEnv(key string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 插件环境变量的键 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setRequired

#### 详细描述
setRequired 是一个选项函数，设置参数是否必须
参数:
  - t: 是否为必填参数

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.String("target", cli.SetRequired(true))
``````````````


#### 定义

`setRequired(t bool) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` | 是否为必填参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setSelectOption

#### 详细描述
setSelectOption 是一个选项函数，设置参数的下拉框选项
此选项仅在`cli.StringSlice`中生效
参数:
  - name: 下拉框选项显示名
  - value: 下拉框选项值

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.StringSlice("targets", cli.setSelectOption("下拉框选项", "下拉框值"))
``````````````


#### 定义

`setSelectOption(name string, value string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 下拉框选项显示名 |
| value | `string` | 下拉框选项值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setShortName

#### 详细描述
setShortName 是一个选项函数，设置参数的短名称

Example:

``````````````yak
cli.String("target", cli.setShortName("t"))
在命令行可以使用`-t`代替`--target`

参数:
  - shortName: 参数短名称

返回值:
  - 参数选项函数
``````````````


#### 定义

`setShortName(shortName string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| shortName | `string` | 参数短名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setUISchema

#### 详细描述
setUISchema 是一个选项参数,用于对JsonSchema设置的参数进行图形化的调整
详情参考:
1. https://json-schema.org/docs
2. https://rjsf-team.github.io/react-jsonschema-form/
3. https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema/

Example:

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

参数:
  - params: 一个或多个 UISchema 选项，如 cli.uiGroups、cli.uiGlobalFieldPosition

返回值:
  - UISchema 对象
``````````````


#### 定义

`setUISchema(params ...UISchemaParams) *UISchema`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...UISchemaParams` | 一个或多个 UISchema 选项，如 cli.uiGroups、cli.uiGlobalFieldPosition |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*UISchema` | UISchema 对象 |


### setVerboseName

#### 详细描述
setVerboseName 是一个选项函数，设置参数的中文名
参数:
  - verboseName: 参数中文名

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.String("target", cli.setVerboseName("目标"))
``````````````


#### 定义

`setVerboseName(verboseName string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| verboseName | `string` | 参数中文名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### setYakitPayload

#### 详细描述
setYakitPayload 是一个选项函数，设置参数建议值为Yakit payload的字典名列表
参数:
  - b: 是否启用 Yakit payload 建议值

返回值:
  - 参数选项函数


Example:

``````````````yak
cli.String("dictName", cli.setYakitPayload(true))
``````````````


#### 定义

`setYakitPayload(b bool) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用 Yakit payload 建议值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` | 参数选项函数 |


### showGroup

#### 详细描述
showGroup 当条件满足时显示指定参数分组的 UI 规则（导出名为 cli.showGroup）
参数:
  - group: 参数分组名

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenTrue("adv"), cli.showGroup("advanced"))
``````````````


#### 定义

`showGroup(group string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 参数分组名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### showParams

#### 详细描述
showParams 当条件满足时显示指定参数的 UI 规则（导出名为 cli.showParams）
参数:
  - params: 一个或多个参数名

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenTrue("adv"), cli.showParams("threads", "timeout"))
``````````````


#### 定义

`showParams(params ...string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...string` | 一个或多个参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### uiField

#### 详细描述
uiField 是一个选项参数,用于指定UISchema中的一个字段
第一个参数指定字段名
第二个参数指定这个字段所占的宽度比(0.0-1.0)
接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget)

Example:

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

参数:
  - name: 字段名
  - widthPercent: 字段所占宽度比（0.0-1.0）
  - opts: 零个或多个字段选项，如 cli.uiFieldWidget、cli.uiFieldGroups

返回值:
  - 字段对象
``````````````


#### 定义

`uiField(name string, widthPercent float64, opts ...UISchemaFieldParams) *uiSchemaField`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名 |
| widthPercent | `float64` | 字段所占宽度比（0.0-1.0） |
| opts | `...UISchemaFieldParams` | 零个或多个字段选项，如 cli.uiFieldWidget、cli.uiFieldGroups |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*uiSchemaField` | 字段对象 |


### uiFieldComponentStyle

#### 详细描述
uiFieldComponentStyle 是一个选项参数,用于指定UISchema中的CSS样式

Example:

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

参数:
  - css: CSS 样式 map

返回值:
  - 字段选项
``````````````


#### 定义

`uiFieldComponentStyle(css map[string]any) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| css | `map[string]any` | CSS 样式 map |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` | 字段选项 |


### uiFieldGroups

#### 详细描述
uiFieldGroups 是一个选项参数,用于设置UISchema中字段的嵌套组

Example:

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

参数:
  - groups: 一个或多个嵌套分组（cli.uiGroup）

返回值:
  - 字段选项
``````````````


#### 定义

`uiFieldGroups(groups ...uiSchemaGroup) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| groups | `...uiSchemaGroup` | 一个或多个嵌套分组（cli.uiGroup） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` | 字段选项 |


### uiFieldPosition

#### 详细描述
uiFieldPosition 是一个选项参数,用于指定UISchema中的字段位置,默认为垂直排列

Example:

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

参数:
  - position: 字段位置，如 cli.uiPosDefault、cli.uiPosHorizontal

返回值:
  - 字段选项
``````````````


#### 定义

`uiFieldPosition(position UISchemaFieldClassName) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| position | `UISchemaFieldClassName` | 字段位置，如 cli.uiPosDefault、cli.uiPosHorizontal |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` | 字段选项 |


### uiFieldWidget

#### 详细描述
uiFieldWidget 是一个选项参数,用于指定UISchema中的字段使用的组件

Example:

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

参数:
  - widget: 组件类型，如 cli.uiWidgetPassword、cli.uiWidgetTable

返回值:
  - 字段选项
``````````````


#### 定义

`uiFieldWidget(widget UISchemaWidgetType) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| widget | `UISchemaWidgetType` | 组件类型，如 cli.uiWidgetPassword、cli.uiWidgetTable |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` | 字段选项 |


### uiGlobalFieldPosition

#### 详细描述
uiGlobalFieldPosition 是一个选项参数,用于指定UISchema中全局的字段位置,默认为垂直排列

Example:

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

参数:
  - style: 全局字段位置，如 cli.uiPosDefault、cli.uiPosHorizontal

返回值:
  - UISchema 选项
``````````````


#### 定义

`uiGlobalFieldPosition(style UISchemaFieldClassName) UISchemaParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| style | `UISchemaFieldClassName` | 全局字段位置，如 cli.uiPosDefault、cli.uiPosHorizontal |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaParams` | UISchema 选项 |


### uiGroup

#### 详细描述
uiGroup 是一个选项参数,用于指定UISchema中的一个分组,接收多个字段(cli.Field),同一分组的字段会放在一行

Example:

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

参数:
  - fields: 一个或多个字段（cli.uiField）

返回值:
  - 分组对象
``````````````


#### 定义

`uiGroup(fields ...uiSchemaField) *uiSchemaGroup`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `...uiSchemaField` | 一个或多个字段（cli.uiField） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*uiSchemaGroup` | 分组对象 |


### uiGroups

#### 详细描述
uiGroups 是一个选项参数,用于指定UISchema中的字段整体分组,接受多个分组(cli.uiGroup)

Example:

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

参数:
  - groups: 一个或多个分组（cli.uiGroup）

返回值:
  - UISchema 选项
``````````````


#### 定义

`uiGroups(groups ...uiSchemaGroup) UISchemaParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| groups | `...uiSchemaGroup` | 一个或多个分组（cli.uiGroup） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaParams` | UISchema 选项 |


### uiTableField

#### 详细描述
uiTableField 是一个选项参数,用于指定UISchema中的一个表格字段
第一个参数指定字段名
第二个参数指定这个字段所占宽度
接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget)

Example:

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

参数:
  - name: 字段名
  - width: 字段所占宽度
  - opts: 零个或多个字段选项，如 cli.uiFieldWidget、cli.uiFieldGroups

返回值:
  - 表格字段对象
``````````````


#### 定义

`uiTableField(name string, width float64, opts ...UISchemaFieldParams) *uiSchemaField`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名 |
| width | `float64` | 字段所占宽度 |
| opts | `...UISchemaFieldParams` | 零个或多个字段选项，如 cli.uiFieldWidget、cli.uiFieldGroups |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*uiSchemaField` | 表格字段对象 |


### when

#### 详细描述
when 构造一个基于表达式的 UI 联动条件（导出名为 cli.when）
参数:
  - expression: 条件表达式

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.when("threads > 10"), cli.showParams("warning"))
``````````````


#### 定义

`when(expression string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expression | `string` | 条件表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### whenDefault

#### 详细描述
whenDefault 构造一个默认（兜底）UI 联动条件（导出名为 cli.whenDefault）
参数:
  - 无

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenDefault(), cli.hideGroup("advanced"))
``````````````


#### 定义

`whenDefault() UIParams`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### whenEqual

#### 详细描述
whenEqual 构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual）
参数:
  - param: 参数名
  - value: 比较值

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenEqual("mode", "advanced"), cli.showGroup("advanced"))
``````````````


#### 定义

`whenEqual(param string, value string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` | 参数名 |
| value | `string` | 比较值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### whenFalse

#### 详细描述
whenFalse 构造一个“当指定布尔参数为假时”的 UI 联动条件（导出名为 cli.whenFalse）
参数:
  - param: 参数名

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenFalse("adv"), cli.hideGroup("advanced"))
``````````````


#### 定义

`whenFalse(param string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` | 参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### whenNotEqual

#### 详细描述
whenEqual 构造一个“当指定参数等于某值时”的 UI 联动条件（导出名为 cli.whenEqual）
参数:
  - param: 参数名
  - value: 比较值

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenEqual("mode", "advanced"), cli.showGroup("advanced"))
``````````````


#### 定义

`whenNotEqual(param string, value string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` | 参数名 |
| value | `string` | 比较值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


### whenTrue

#### 详细描述
whenTrue 构造一个“当指定布尔参数为真时”的 UI 联动条件（导出名为 cli.whenTrue）
参数:
  - param: 参数名

返回值:
  - UI 联动规则


Example:

``````````````yak
cli.UI(cli.whenTrue("adv"), cli.showGroup("advanced"))
``````````````


#### 定义

`whenTrue(param string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` | 参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` | UI 联动规则 |


