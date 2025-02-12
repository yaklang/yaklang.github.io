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
| [cli.Args](#args) ||
| [cli.Bool](#bool) |Bool 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Double](#double) |Double 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.File](#file) |File 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型 |
| [cli.FileNames](#filenames) |FileNames 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型 |
| [cli.FileOrContent](#fileorcontent) |FileOrContent 获取对应名称的命令行参数 根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型 |
| [cli.Float](#float) |Float 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.FolderName](#foldername) |FolderName 获取对应名称的命令行参数，获得选中的文件夹路径，并返回 string 类型 |
| [cli.HTTPPacket](#httppacket) |HTTPPacket 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式 |
| [cli.Have](#have) |Have 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Host](#host) |Host 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Hosts](#hosts) |Hosts 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Int](#int) |Int 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
| [cli.IntSlice](#intslice) |IntSlice 获取对应名称的命令行参数，将其字符串根据&amp;#34;,&amp;#34;切割并尝试转换为 int 类型返回 []int 类型 |
| [cli.Integer](#integer) |Integer 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
| [cli.Json](#json) |Json 获取对应名称的命令行参数, 与cli.JsonSchema一起使用以构建复杂参数 详情参考: 1. https://json-schema.org/docs 2. https://rjsf-team.github.io/react-jsonschema-form/ |
| [cli.LineDict](#linedict) |LineDict 获取对应名称的命令行参数 根据其传入的值尝试读取其对应文件内容，如果无法读取则作为字符串，最后根据换行符切割，返回 []string 类型 |
| [cli.Net](#net) |Net 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Network](#network) |NetWork 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Port](#port) |Port 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;与&amp;#34;-&amp;#34;切割并尝试解析端口并返回 []int 类型 |
| [cli.Ports](#ports) |Ports 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;与&amp;#34;-&amp;#34;切割并尝试解析端口并返回 []int 类型 |
| [cli.SetCliName](#setcliname) |SetCliName 设置此命令行程序的名称 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 |
| [cli.SetDoc](#setdoc) |SetDoc 设置此命令行程序的文档 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 |
| [cli.String](#string) |String 获取对应名称的命令行参数，并将其转换为 string 类型返回 |
| [cli.StringSlice](#stringslice) |StringSlice 获取对应名称的命令行参数，将其字符串根据&amp;#34;,&amp;#34;切割返回 []string 类型 |
| [cli.Text](#text) |Text 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为文本框形式 |
| [cli.UI](#ui) ||
| [cli.Url](#url) |Url 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试将其转换为符合URL格式并返回 []string 类型 |
| [cli.Urls](#urls) |Urls 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试将其转换为符合URL格式并返回 []string 类型 |
| [cli.YakCode](#yakcode) |YakCode 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 Yak 代码形式 |
| [cli.YakitPlugin](#yakitplugin) |YakitPlugin 获取名称为 yakit-plugin-file 的命令行参数 根据其传入的值读取其对应文件内容并根据&amp;#34;|&amp;#34;切割并返回 []string 类型，表示各个插件名 |
| [cli.check](#check) |check 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法 |
| [cli.help](#help) |help 用于输出命令行程序的帮助信息 |
| [cli.hideGroup](#hidegroup) ||
| [cli.hideParams](#hideparams) ||
| [cli.setCliGroup](#setcligroup) |setCliGroup 是一个选项函数，设置参数的分组 |
| [cli.setDefault](#setdefault) |setDefault 是一个选项函数，设置参数的默认值 |
| [cli.setHelp](#sethelp) |setHelp 是一个选项函数，设置参数的帮助信息 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 |
| [cli.setJsonSchema](#setjsonschema) |setJsonSchema 是一个选项参数,用于在cli.Json中使用JsonSchema构建复杂参数 详情参考: 1. https://json-schema.org/docs 2. https://rjsf-team.github.io/react-jsonschema-form/ |
| [cli.setMultipleSelect](#setmultipleselect) |SetMultipleSelect 是一个选项函数，设置参数是否可以多选 此选项仅在`cli.StringSlice`中生效 |
| [cli.setPluginEnv](#setpluginenv) |setPluginEnv 是一个选项函数，设置参数从插件环境中取值 |
| [cli.setRequired](#setrequired) |setRequired 是一个选项函数，设置参数是否必须 |
| [cli.setSelectOption](#setselectoption) |setSelectOption 是一个选项函数，设置参数的下拉框选项 此选项仅在`cli.StringSlice`中生效 |
| [cli.setShortName](#setshortname) |setShortName 是一个选项函数，设置参数的短名称 |
| [cli.setUISchema](#setuischema) |setUISchema 是一个选项参数,用于对JsonSchema设置的参数进行图形化的调整 详情参考: 1. https://json-schema.org/docs 2. https://rjsf-team.github.io/react-jsonschema-form/ 3. https://...|
| [cli.setVerboseName](#setverbosename) |setVerboseName 是一个选项函数，设置参数的中文名 |
| [cli.setYakitPayload](#setyakitpayload) |setYakitPayload 是一个选项函数，设置参数建议值为Yakit payload的字典名列表 |
| [cli.showGroup](#showgroup) ||
| [cli.showParams](#showparams) ||
| [cli.uiField](#uifield) |uiField 是一个选项参数,用于指定UISchema中的一个字段 第一个参数指定字段名 第二个参数指定这个字段所占的宽度比(0.0-1.0) 接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidg...|
| [cli.uiFieldComponentStyle](#uifieldcomponentstyle) |uiFieldComponentStyle 是一个选项参数,用于指定UISchema中的CSS样式 |
| [cli.uiFieldGroups](#uifieldgroups) |uiFieldGroups 是一个选项参数,用于设置UISchema中字段的嵌套组 |
| [cli.uiFieldPosition](#uifieldposition) |uiFieldPosition 是一个选项参数,用于指定UISchema中的字段位置,默认为垂直排列 |
| [cli.uiFieldWidget](#uifieldwidget) |uiFieldWidget 是一个选项参数,用于指定UISchema中的字段使用的组件 |
| [cli.uiGlobalFieldPosition](#uiglobalfieldposition) |uiGlobalFieldPosition 是一个选项参数,用于指定UISchema中全局的字段位置,默认为垂直排列 |
| [cli.uiGroup](#uigroup) |uiGroup 是一个选项参数,用于指定UISchema中的一个分组,接收多个字段(cli.Field),同一分组的字段会放在一行 |
| [cli.uiGroups](#uigroups) |uiGroups 是一个选项参数,用于指定UISchema中的字段整体分组,接受多个分组(cli.uiGroup) |
| [cli.uiTableField](#uitablefield) |uiTableField 是一个选项参数,用于指定UISchema中的一个表格字段 第一个参数指定字段名 第二个参数指定这个字段所占宽度 接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget) |
| [cli.when](#when) ||
| [cli.whenDefault](#whendefault) ||
| [cli.whenEqual](#whenequal) ||
| [cli.whenFalse](#whenfalse) ||
| [cli.whenNotEqual](#whennotequal) ||
| [cli.whenTrue](#whentrue) ||


## 函数定义
### Args

#### 详细描述


#### 定义

`Args() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Bool

#### 详细描述
Bool 获取对应名称的命令行参数，并将其转换为 bool 类型返回
Example:
```
verbose = cli.Bool("verbose") // --verbose 则为true
```

#### 定义

`Bool(name string, opts ...SetCliExtraParam) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Double

#### 详细描述
Double 获取对应名称的命令行参数，并将其转换为 float 类型返回
Example:
```
percent = cli.Double("percent") // --percent 0.5 则 percent 为 0.5
```

#### 定义

`Double(name string, opts ...SetCliExtraParam) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### File

#### 详细描述
File 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型
Example:
```
file = cli.File("file")
// --file /etc/passwd 则 file 为 /etc/passwd 文件中的内容
```

#### 定义

`File(name string, opts ...SetCliExtraParam) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### FileNames

#### 详细描述
FileNames 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型
Example:
```
file = cli.FileNames("file")
// --file /etc/passwd,/etc/hosts 则 file 为 ["/etc/passwd", "/etc/hosts"]
```

#### 定义

`FileNames(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### FileOrContent

#### 详细描述
FileOrContent 获取对应名称的命令行参数
根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型
Example:
```
foc = cli.FileOrContent("foc")
// --foc /etc/passwd 则 foc 为 /etc/passwd 文件中的内容
// --file "asd" 则 file 为 "asd"
```

#### 定义

`FileOrContent(name string, opts ...SetCliExtraParam) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Float

#### 详细描述
Float 获取对应名称的命令行参数，并将其转换为 float 类型返回
Example:
```
percent = cli.Float("percent") // --percent 0.5 则 percent 为 0.5
```

#### 定义

`Float(name string, opts ...SetCliExtraParam) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### FolderName

#### 详细描述
FolderName 获取对应名称的命令行参数，获得选中的文件夹路径，并返回 string 类型
Example:
```
folder = cli.FolderName("folder")
// --folder /etc 则 folder 为 "/etc"
```

#### 定义

`FolderName(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### HTTPPacket

#### 详细描述
HTTPPacket 获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式
Example:
```
target = cli.HTTPPacket("target") // --target yaklang.com 则 target 为 yaklang.com
```

#### 定义

`HTTPPacket(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Have

#### 详细描述
Have 获取对应名称的命令行参数，并将其转换为 bool 类型返回
Example:
```
verbose = cli.Have("verbose") // --verbose 则为true
```

#### 定义

`Have(name string, opts ...SetCliExtraParam) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Host

#### 详细描述
Host 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.Host("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
```

#### 定义

`Host(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Hosts

#### 详细描述
Hosts 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.Hosts("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
```

#### 定义

`Hosts(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Int

#### 详细描述
Int 获取对应名称的命令行参数，并将其转换为 int 类型返回
Example:
```
port = cli.Int("port") // --port 80 则 port 为 80
```

#### 定义

`Int(name string, opts ...SetCliExtraParam) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### IntSlice

#### 详细描述
IntSlice 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割并尝试转换为 int 类型返回 []int 类型
Example:
```
ports = cli.IntSlice("ports")
// --ports 80,443,8080 则 ports 为 [80, 443, 8080]
```

#### 定义

`IntSlice(name string, options ...SetCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| options | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### Integer

#### 详细描述
Integer 获取对应名称的命令行参数，并将其转换为 int 类型返回
Example:
```
port = cli.Integer("port") // --port 80 则 port 为 80
```

#### 定义

`Integer(name string, opts ...SetCliExtraParam) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Json

#### 详细描述
Json 获取对应名称的命令行参数, 与cli.JsonSchema一起使用以构建复杂参数
详情参考:
1. https://json-schema.org/docs
2. https://rjsf-team.github.io/react-jsonschema-form/
Example:
```
info = cli.Json("info",
cli.setVerboseName("项目信息"),
cli.setJsonSchema(<<<JSON
{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,cli.setUISchema()),
)
cli.check()
```

#### 定义

`Json(name string, opts ...SetCliExtraParam) map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |


### LineDict

#### 详细描述
LineDict 获取对应名称的命令行参数
根据其传入的值尝试读取其对应文件内容，如果无法读取则作为字符串，最后根据换行符切割，返回 []string 类型
Example:
```
dict = cli.LineDict("dict")
// --dict /etc/passwd 则 dict 为 /etc/passwd 文件中的逐行的内容
// --dict "asd" 则 dict 为 ["asd"]
```

#### 定义

`LineDict(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Net

#### 详细描述
Net 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.Net("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
```

#### 定义

`Net(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Network

#### 详细描述
NetWork 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.NetWork("hosts")
// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1
```

#### 定义

`Network(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Port

#### 详细描述
Port 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型
Example:
```
ports = cli.Port("ports")
// --ports 10086-10088,23333 则 ports 为 [10086, 10087, 10088, 23333]
```

#### 定义

`Port(name string, opts ...SetCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### Ports

#### 详细描述
Ports 获取对应名称的命令行参数，根据&#34;,&#34;与&#34;-&#34;切割并尝试解析端口并返回 []int 类型
Example:
```
ports = cli.Ports("ports")
// --ports 10086-10088,23333 则 ports 为 [10086, 10087, 10088, 23333]
```

#### 定义

`Ports(name string, opts ...SetCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### SetCliName

#### 详细描述
SetCliName 设置此命令行程序的名称
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示
Example:
```
cli.SetCliName("example-tools")
```

#### 定义

`SetCliName(name string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |


### SetDoc

#### 详细描述
SetDoc 设置此命令行程序的文档
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示
Example:
```
cli.SetDoc("example-tools is a tool for example")
```

#### 定义

`SetDoc(document string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| document | `string` |   |


### String

#### 详细描述
String 获取对应名称的命令行参数，并将其转换为 string 类型返回
Example:
```
target = cli.String("target") // --target yaklang.com 则 target 为 yaklang.com
```

#### 定义

`String(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### StringSlice

#### 详细描述
StringSlice 获取对应名称的命令行参数，将其字符串根据&#34;,&#34;切割返回 []string 类型
Example:
```
targets = cli.StringSlice("targets")
// --targets yaklang.com,google.com 则 targets 为 ["yaklang.com", "google.com"]
```

#### 定义

`StringSlice(name string, options ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| options | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Text

#### 详细描述
Text 获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为文本框形式
Example:
```
target = cli.Text("target") // --target yaklang.com 则 target 为 yaklang.com
```

#### 定义

`Text(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### UI

#### 详细描述


#### 定义

`UI(opts ...UIParams)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...UIParams` |   |


### Url

#### 详细描述
Url 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型
Example:
```
urls = cli.Url("urls")
// --urls yaklang.com:443,google.com:443 则 urls 为 ["https://yaklang.com", "https://google.com"]
```

#### 定义

`Url(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Urls

#### 详细描述
Urls 获取对应名称的命令行参数，根据&#34;,&#34;切割并尝试将其转换为符合URL格式并返回 []string 类型
Example:
```
urls = cli.Urls("urls")
// --urls yaklang.com:443,google.com:443 则 urls 为 ["https://yaklang.com", "https://google.com"]
```

#### 定义

`Urls(name string, opts ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### YakCode

#### 详细描述
YakCode 获取对应名称的命令行参数，并将其转换为 string 类型返回
其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 Yak 代码形式
Example:
```
target = cli.YakCode("target") // --target yaklang.com 则 target 为 yaklang.com
```

#### 定义

`YakCode(name string, opts ...SetCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### YakitPlugin

#### 详细描述
YakitPlugin 获取名称为 yakit-plugin-file 的命令行参数
根据其传入的值读取其对应文件内容并根据&#34;|&#34;切割并返回 []string 类型，表示各个插件名
Example:
```
plugins = cli.YakitPlugin()
// --yakit-plugin-file plugins.txt 则 plugins 为 plugins.txt 文件中的各个插件名
```

#### 定义

`YakitPlugin(options ...SetCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...SetCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### check

#### 详细描述
check 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法
Example:
```
target = cli.String("target", cli.SetRequired(true))
cli.check()
```

#### 定义

`check()`


### help

#### 详细描述
help 用于输出命令行程序的帮助信息
Example:
```
cli.help()
```

#### 定义

`help(w ...io.Writer)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `...io.Writer` |   |


### hideGroup

#### 详细描述


#### 定义

`hideGroup(group string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### hideParams

#### 详细描述


#### 定义

`hideParams(params ...string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### setCliGroup

#### 详细描述
setCliGroup 是一个选项函数，设置参数的分组
Example:
```
cli.String("target", cli.setCliGroup("common"))
cli.Int("port", cli.setCliGroup("common"))
cli.Int("threads", cli.setCliGroup("request"))
cli.Int("retryTimes", cli.setCliGroup("request"))
```

#### 定义

`setCliGroup(group string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setDefault

#### 详细描述
setDefault 是一个选项函数，设置参数的默认值
Example:
```
cli.String("target", cli.SetDefault("yaklang.com"))
```

#### 定义

`setDefault(i any) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setHelp

#### 详细描述
setHelp 是一个选项函数，设置参数的帮助信息
这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示
Example:
```
cli.String("target", cli.SetHelp("target host or ip"))
```

#### 定义

`setHelp(i string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setJsonSchema

#### 详细描述
setJsonSchema 是一个选项参数,用于在cli.Json中使用JsonSchema构建复杂参数
详情参考:
1. https://json-schema.org/docs
2. https://rjsf-team.github.io/react-jsonschema-form/
Example:
```
info = cli.Json("info",
cli.setVerboseName("项目信息"),
cli.setJsonSchema(<<<JSON
{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"name":{"type":"string","title":"Name","default":"Chuck"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}
JSON,cli.setUISchema()),
)
cli.check()
```

#### 定义

`setJsonSchema(schema string, uis ...*UISchema) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| schema | `string` |   |
| uis | `...*UISchema` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setMultipleSelect

#### 详细描述
SetMultipleSelect 是一个选项函数，设置参数是否可以多选
此选项仅在`cli.StringSlice`中生效
Example:
```
cli.StringSlice("targets", cli.SetMultipleSelect(true))
```

#### 定义

`setMultipleSelect(multiSelect bool) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| multiSelect | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setPluginEnv

#### 详细描述
setPluginEnv 是一个选项函数，设置参数从插件环境中取值
Example:
```
cli.String("key", cli.setPluginEnv("api-key"))
```

#### 定义

`setPluginEnv(key string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setRequired

#### 详细描述
setRequired 是一个选项函数，设置参数是否必须
Example:
```
cli.String("target", cli.SetRequired(true))
```

#### 定义

`setRequired(t bool) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setSelectOption

#### 详细描述
setSelectOption 是一个选项函数，设置参数的下拉框选项
此选项仅在`cli.StringSlice`中生效
Example:
```
cli.StringSlice("targets", cli.setSelectOption("下拉框选项", "下拉框值"))
```

#### 定义

`setSelectOption(name string, value string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setShortName

#### 详细描述
setShortName 是一个选项函数，设置参数的短名称
Example:
```
cli.String("target", cli.setShortName("t"))
```
在命令行可以使用`-t`代替`--target`

#### 定义

`setShortName(shortName string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| shortName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setUISchema

#### 详细描述
setUISchema 是一个选项参数,用于对JsonSchema设置的参数进行图形化的调整
详情参考:
1. https://json-schema.org/docs
2. https://rjsf-team.github.io/react-jsonschema-form/
3. https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema/
Example:
```
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
```

#### 定义

`setUISchema(params ...UISchemaParams) *UISchema`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...UISchemaParams` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*UISchema` |   |


### setVerboseName

#### 详细描述
setVerboseName 是一个选项函数，设置参数的中文名
Example:
```
cli.String("target", cli.setVerboseName("目标"))
```

#### 定义

`setVerboseName(verboseName string) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| verboseName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### setYakitPayload

#### 详细描述
setYakitPayload 是一个选项函数，设置参数建议值为Yakit payload的字典名列表
Example:
```
cli.String("dictName", cli.setYakitPayload(true))
```

#### 定义

`setYakitPayload(b bool) SetCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SetCliExtraParam` |   |


### showGroup

#### 详细描述


#### 定义

`showGroup(group string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### showParams

#### 详细描述


#### 定义

`showParams(params ...string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### uiField

#### 详细描述
uiField 是一个选项参数,用于指定UISchema中的一个字段
第一个参数指定字段名
第二个参数指定这个字段所占的宽度比(0.0-1.0)
接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget)
Example:
```
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
```

#### 定义

`uiField(name string, widthPercent float64, opts ...UISchemaFieldParams) *uiSchemaField`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| widthPercent | `float64` |   |
| opts | `...UISchemaFieldParams` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*uiSchemaField` |   |


### uiFieldComponentStyle

#### 详细描述
uiFieldComponentStyle 是一个选项参数,用于指定UISchema中的CSS样式
Example:
```
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
```

#### 定义

`uiFieldComponentStyle(css map[string]any) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| css | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` |   |


### uiFieldGroups

#### 详细描述
uiFieldGroups 是一个选项参数,用于设置UISchema中字段的嵌套组
Example:
```
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
```

#### 定义

`uiFieldGroups(groups ...uiSchemaGroup) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| groups | `...uiSchemaGroup` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` |   |


### uiFieldPosition

#### 详细描述
uiFieldPosition 是一个选项参数,用于指定UISchema中的字段位置,默认为垂直排列
Example:
```
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
```

#### 定义

`uiFieldPosition(position UISchemaFieldClassName) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| position | `UISchemaFieldClassName` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` |   |


### uiFieldWidget

#### 详细描述
uiFieldWidget 是一个选项参数,用于指定UISchema中的字段使用的组件
Example:
```
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
```

#### 定义

`uiFieldWidget(widget UISchemaWidgetType) UISchemaFieldParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| widget | `UISchemaWidgetType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaFieldParams` |   |


### uiGlobalFieldPosition

#### 详细描述
uiGlobalFieldPosition 是一个选项参数,用于指定UISchema中全局的字段位置,默认为垂直排列
Example:
```
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
```

#### 定义

`uiGlobalFieldPosition(style UISchemaFieldClassName) UISchemaParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| style | `UISchemaFieldClassName` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaParams` |   |


### uiGroup

#### 详细描述
uiGroup 是一个选项参数,用于指定UISchema中的一个分组,接收多个字段(cli.Field),同一分组的字段会放在一行
Example:
```
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
```

#### 定义

`uiGroup(fields ...uiSchemaField) *uiSchemaGroup`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `...uiSchemaField` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*uiSchemaGroup` |   |


### uiGroups

#### 详细描述
uiGroups 是一个选项参数,用于指定UISchema中的字段整体分组,接受多个分组(cli.uiGroup)
Example:
```
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
```

#### 定义

`uiGroups(groups ...uiSchemaGroup) UISchemaParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| groups | `...uiSchemaGroup` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UISchemaParams` |   |


### uiTableField

#### 详细描述
uiTableField 是一个选项参数,用于指定UISchema中的一个表格字段
第一个参数指定字段名
第二个参数指定这个字段所占宽度
接下来可以接收零个到多个选项，用于对此字段进行其他的设置,例如内嵌分组(cli.uiFieldGroups)或者指定其部件(cli.uiFieldWidget)
Example:
```
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
```

#### 定义

`uiTableField(name string, width float64, opts ...UISchemaFieldParams) *uiSchemaField`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| width | `float64` |   |
| opts | `...UISchemaFieldParams` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*uiSchemaField` |   |


### when

#### 详细描述


#### 定义

`when(expression string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expression | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### whenDefault

#### 详细描述


#### 定义

`whenDefault() UIParams`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### whenEqual

#### 详细描述


#### 定义

`whenEqual(param string, value string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### whenFalse

#### 详细描述


#### 定义

`whenFalse(param string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### whenNotEqual

#### 详细描述


#### 定义

`whenNotEqual(param string, value string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


### whenTrue

#### 详细描述


#### 定义

`whenTrue(param string) UIParams`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UIParams` |   |


