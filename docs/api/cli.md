# cli

|成员函数|函数描述/介绍|
|:------|:--------|
| [cli.Args](#args) ||
| [cli.Bool](#bool) |Bool 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Check](#check) |check 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法 |
| [cli.Double](#double) |Double 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.File](#file) |File 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型 |
| [cli.FileNames](#filenames) |FileNames 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型 |
| [cli.FileOrContent](#fileorcontent) |FileOrContent 获取对应名称的命令行参数 根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型 |
| [cli.Float](#float) |Float 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.HTTPPacket](#httppacket) |HTTPPacket 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式 |
| [cli.Have](#have) |Have 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Help](#help) |help 用于输出命令行程序的帮助信息 |
| [cli.Host](#host) |Host 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Hosts](#hosts) |Hosts 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Int](#int) |Int 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
| [cli.Integer](#integer) |Integer 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
| [cli.LineDict](#linedict) |LineDict 获取对应名称的命令行参数 根据其传入的值尝试读取其对应文件内容，如果无法读取则作为字符串，最后根据换行符切割，返回 []string 类型 |
| [cli.Net](#net) |Net 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Network](#network) |NetWork 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Port](#port) |Port 获取对应名称的命令行参数，根据","与"-"切割并尝试解析端口并返回 []int 类型 |
| [cli.Ports](#ports) |Ports 获取对应名称的命令行参数，根据","与"-"切割并尝试解析端口并返回 []int 类型 |
| [cli.SetCliGroup](#setcligroup) |setCliGroup 是一个选项函数，设置参数的分组 |
| [cli.SetCliName](#setcliname) |SetCliName 设置此命令行程序的名称 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 |
| [cli.SetDefault](#setdefault) |setDefault 是一个选项函数，设置参数的默认值 |
| [cli.SetDoc](#setdoc) |SetDoc 设置此命令行程序的文档 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 |
| [cli.SetHelp](#sethelp) |setHelp 是一个选项函数，设置参数的帮助信息 这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示 |
| [cli.SetMultipleSelect](#setmultipleselect) |SetMultipleSelect 是一个选项函数，设置参数是否可以多选 此选项仅在`cli.StringSlice`中生效 |
| [cli.SetRequired](#setrequired) |setRequired 是一个选项函数，设置参数是否必须 |
| [cli.SetSelectOption](#setselectoption) |setSelectOption 是一个选项函数，设置参数的下拉框选项 此选项仅在`cli.StringSlice`中生效 |
| [cli.SetVerboseName](#setverbosename) |setVerboseName 是一个选项函数，设置参数的中文名 |
| [cli.String](#string) |String 获取对应名称的命令行参数，并将其转换为 string 类型返回 |
| [cli.StringSlice](#stringslice) |StringSlice 获取对应名称的命令行参数，将其字符串根据","切割返回 []string 类型 |
| [cli.Text](#text) |Text 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为文本框形式 |
| [cli.Url](#url) |Url 获取对应名称的命令行参数，根据","切割并尝试将其转换为符合URL格式并返回 []string 类型 |
| [cli.Urls](#urls) |Urls 获取对应名称的命令行参数，根据","切割并尝试将其转换为符合URL格式并返回 []string 类型 |
| [cli.YakCode](#yakcode) |YakCode 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 Yak 代码形式 |
| [cli.YakitPlugin](#yakitplugin) |YakitPlugin 获取名称为 yakit-plugin-file 的命令行参数 根据其传入的值读取其对应文件内容并根据"|"切割并返回 []string 类型，表示各个插件名 |


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


### Check

#### 详细描述
check 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法
Example:
```
target = cli.String("target", cli.SetRequired(true))
cli.check()
```

#### 定义

`check()`


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


### Help

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


### Host

#### 详细描述
Host 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型
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
Hosts 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型
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
Net 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型
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
NetWork 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型
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
Port 获取对应名称的命令行参数，根据","与"-"切割并尝试解析端口并返回 []int 类型
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
Ports 获取对应名称的命令行参数，根据","与"-"切割并尝试解析端口并返回 []int 类型
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


### SetCliGroup

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


### SetDefault

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


### SetHelp

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


### SetMultipleSelect

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


### SetRequired

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


### SetSelectOption

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


### SetVerboseName

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
StringSlice 获取对应名称的命令行参数，将其字符串根据","切割返回 []string 类型
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


### Url

#### 详细描述
Url 获取对应名称的命令行参数，根据","切割并尝试将其转换为符合URL格式并返回 []string 类型
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
Urls 获取对应名称的命令行参数，根据","切割并尝试将其转换为符合URL格式并返回 []string 类型
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
根据其传入的值读取其对应文件内容并根据"|"切割并返回 []string 类型，表示各个插件名
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


