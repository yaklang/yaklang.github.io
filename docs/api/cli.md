# cli

|函数名|函数描述/介绍|
|:------|:--------|
| [cli.Args](#args) ||
| [cli.Bool](#bool) |Bool 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Double](#double) |Double 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.File](#file) |File 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型 |
| [cli.FileNames](#filenames) |FileNames 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型 |
| [cli.FileOrContent](#fileorcontent) |FileOrContent 获取对应名称的命令行参数 根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型 |
| [cli.Float](#float) |Float 获取对应名称的命令行参数，并将其转换为 float 类型返回 |
| [cli.HTTPPacket](#httppacket) |HTTPPacket 获取对应名称的命令行参数，并将其转换为 string 类型返回 其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式 |
| [cli.Have](#have) |Have 获取对应名称的命令行参数，并将其转换为 bool 类型返回 |
| [cli.Host](#host) |Host 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Hosts](#hosts) |Hosts 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型 |
| [cli.Int](#int) |Int 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
| [cli.Integer](#integer) |Integer 获取对应名称的命令行参数，并将其转换为 int 类型返回 |
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
| [cli.setMultipleSelect](#setmultipleselect) |SetMultipleSelect 是一个选项函数，设置参数是否可以多选 此选项仅在`cli.StringSlice`中生效 |
| [cli.setRequired](#setrequired) |setRequired 是一个选项函数，设置参数是否必须 |
| [cli.setSelectOption](#setselectoption) |setSelectOption 是一个选项函数，设置参数的下拉框选项 此选项仅在`cli.StringSlice`中生效 |
| [cli.setVerboseName](#setverbosename) |setVerboseName 是一个选项函数，设置参数的中文名 |
| [cli.showGroup](#showgroup) ||
| [cli.showParams](#showparams) ||
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
verbose = cli.Bool(&#34;verbose&#34;) // --verbose 则为true
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
percent = cli.Double(&#34;percent&#34;) // --percent 0.5 则 percent 为 0.5
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
file = cli.File(&#34;file&#34;)
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
file = cli.FileNames(&#34;file&#34;)
// --file /etc/passwd,/etc/hosts 则 file 为 [&#34;/etc/passwd&#34;, &#34;/etc/hosts&#34;]
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
foc = cli.FileOrContent(&#34;foc&#34;)
// --foc /etc/passwd 则 foc 为 /etc/passwd 文件中的内容
// --file &#34;asd&#34; 则 file 为 &#34;asd&#34;
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
percent = cli.Float(&#34;percent&#34;) // --percent 0.5 则 percent 为 0.5
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
target = cli.HTTPPacket(&#34;target&#34;) // --target yaklang.com 则 target 为 yaklang.com
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
verbose = cli.Have(&#34;verbose&#34;) // --verbose 则为true
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
Host 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.Host(&#34;hosts&#34;)
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
Hosts 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.Hosts(&#34;hosts&#34;)
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
port = cli.Int(&#34;port&#34;) // --port 80 则 port 为 80
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
port = cli.Integer(&#34;port&#34;) // --port 80 则 port 为 80
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
dict = cli.LineDict(&#34;dict&#34;)
// --dict /etc/passwd 则 dict 为 /etc/passwd 文件中的逐行的内容
// --dict &#34;asd&#34; 则 dict 为 [&#34;asd&#34;]
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
Net 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.Net(&#34;hosts&#34;)
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
NetWork 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试解析CIDR网段并返回 []string 类型
Example:
```
hosts = cli.NetWork(&#34;hosts&#34;)
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
Port 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;与&amp;#34;-&amp;#34;切割并尝试解析端口并返回 []int 类型
Example:
```
ports = cli.Port(&#34;ports&#34;)
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
Ports 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;与&amp;#34;-&amp;#34;切割并尝试解析端口并返回 []int 类型
Example:
```
ports = cli.Ports(&#34;ports&#34;)
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
cli.SetCliName(&#34;example-tools&#34;)
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
cli.SetDoc(&#34;example-tools is a tool for example&#34;)
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
target = cli.String(&#34;target&#34;) // --target yaklang.com 则 target 为 yaklang.com
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
StringSlice 获取对应名称的命令行参数，将其字符串根据&amp;#34;,&amp;#34;切割返回 []string 类型
Example:
```
targets = cli.StringSlice(&#34;targets&#34;)
// --targets yaklang.com,google.com 则 targets 为 [&#34;yaklang.com&#34;, &#34;google.com&#34;]
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
target = cli.Text(&#34;target&#34;) // --target yaklang.com 则 target 为 yaklang.com
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
Url 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试将其转换为符合URL格式并返回 []string 类型
Example:
```
urls = cli.Url(&#34;urls&#34;)
// --urls yaklang.com:443,google.com:443 则 urls 为 [&#34;https://yaklang.com&#34;, &#34;https://google.com&#34;]
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
Urls 获取对应名称的命令行参数，根据&amp;#34;,&amp;#34;切割并尝试将其转换为符合URL格式并返回 []string 类型
Example:
```
urls = cli.Urls(&#34;urls&#34;)
// --urls yaklang.com:443,google.com:443 则 urls 为 [&#34;https://yaklang.com&#34;, &#34;https://google.com&#34;]
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
target = cli.YakCode(&#34;target&#34;) // --target yaklang.com 则 target 为 yaklang.com
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
根据其传入的值读取其对应文件内容并根据&amp;#34;|&amp;#34;切割并返回 []string 类型，表示各个插件名
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
target = cli.String(&#34;target&#34;, cli.SetRequired(true))
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
cli.String(&#34;target&#34;, cli.setCliGroup(&#34;common&#34;))
cli.Int(&#34;port&#34;, cli.setCliGroup(&#34;common&#34;))
cli.Int(&#34;threads&#34;, cli.setCliGroup(&#34;request&#34;))
cli.Int(&#34;retryTimes&#34;, cli.setCliGroup(&#34;request&#34;))
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
cli.String(&#34;target&#34;, cli.SetDefault(&#34;yaklang.com&#34;))
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
cli.String(&#34;target&#34;, cli.SetHelp(&#34;target host or ip&#34;))
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


### setMultipleSelect

#### 详细描述
SetMultipleSelect 是一个选项函数，设置参数是否可以多选
此选项仅在`cli.StringSlice`中生效
Example:
```
cli.StringSlice(&#34;targets&#34;, cli.SetMultipleSelect(true))
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


### setRequired

#### 详细描述
setRequired 是一个选项函数，设置参数是否必须
Example:
```
cli.String(&#34;target&#34;, cli.SetRequired(true))
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
cli.StringSlice(&#34;targets&#34;, cli.setSelectOption(&#34;下拉框选项&#34;, &#34;下拉框值&#34;))
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


### setVerboseName

#### 详细描述
setVerboseName 是一个选项函数，设置参数的中文名
Example:
```
cli.String(&#34;target&#34;, cli.setVerboseName(&#34;目标&#34;))
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


