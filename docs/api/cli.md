# cli

|成员函数|函数描述/介绍|
|:------|:--------|
| [cli.Args](#args) ||
| [cli.Bool](#bool) ||
| [cli.Double](#double) ||
| [cli.File](#file) ||
| [cli.FileOrContent](#fileorcontent) ||
| [cli.Float](#float) ||
| [cli.Have](#have) ||
| [cli.Host](#host) ||
| [cli.Hosts](#hosts) ||
| [cli.Int](#int) ||
| [cli.Integer](#integer) ||
| [cli.LineDict](#linedict) ||
| [cli.Net](#net) ||
| [cli.Network](#network) ||
| [cli.Port](#port) ||
| [cli.Ports](#ports) ||
| [cli.SetCliName](#setcliname) ||
| [cli.SetDoc](#setdoc) ||
| [cli.String](#string) ||
| [cli.StringSlice](#stringslice) ||
| [cli.Url](#url) ||
| [cli.Urls](#urls) ||
| [cli.YakitPlugin](#yakitplugin) ||
| [cli.check](#check) ||
| [cli.help](#help) ||
| [cli.setDefault](#setdefault) ||
| [cli.setHelp](#sethelp) ||
| [cli.setRequired](#setrequired) ||


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


### FileOrContent

#### 详细描述


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


### Have

#### 详细描述


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


#### 定义

`SetCliName(name string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |


### SetDoc

#### 详细描述


#### 定义

`SetDoc(document string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| document | `string` |   |


### String

#### 详细描述


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


#### 定义

`StringSlice(name string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Url

#### 详细描述


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


### YakitPlugin

#### 详细描述


#### 定义

`YakitPlugin() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### check

#### 详细描述


#### 定义

`check()`


### help

#### 详细描述


#### 定义

`help(w ...io.Writer)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `...io.Writer` |   |


### setDefault

#### 详细描述


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


### setRequired

#### 详细描述


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


