# cli

|成员函数|函数描述/介绍|
|:------|:--------|
| [cli.Args](#Args) ||
| [cli.Bool](#Bool) ||
| [cli.Double](#Double) ||
| [cli.File](#File) ||
| [cli.FileOrContent](#FileOrContent) ||
| [cli.Float](#Float) ||
| [cli.Have](#Have) ||
| [cli.Host](#Host) ||
| [cli.Hosts](#Hosts) ||
| [cli.Int](#Int) ||
| [cli.Integer](#Integer) ||
| [cli.LineDict](#LineDict) ||
| [cli.Net](#Net) ||
| [cli.Network](#Network) ||
| [cli.Port](#Port) ||
| [cli.Ports](#Ports) ||
| [cli.SetCliName](#SetCliName) ||
| [cli.SetDoc](#SetDoc) ||
| [cli.String](#String) ||
| [cli.StringSlice](#StringSlice) ||
| [cli.Url](#Url) ||
| [cli.Urls](#Urls) ||
| [cli.YakitPlugin](#YakitPlugin) ||
| [cli.check](#check) ||
| [cli.help](#help) ||
| [cli.setDefault](#setDefault) ||
| [cli.setHelp](#setHelp) ||
| [cli.setRequired](#setRequired) ||


## 函数定义
### cli.Args

#### 详细描述


#### 定义

`Args() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.Bool

#### 详细描述


#### 定义

`Bool(name string, opts ...setCliExtraParam) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### cli.Double

#### 详细描述


#### 定义

`Double(name string, opts ...setCliExtraParam) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### cli.File

#### 详细描述


#### 定义

`File(name string, opts ...setCliExtraParam) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### cli.FileOrContent

#### 详细描述


#### 定义

`FileOrContent(name string, opts ...setCliExtraParam) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### cli.Float

#### 详细描述


#### 定义

`Float(name string, opts ...setCliExtraParam) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### cli.Have

#### 详细描述


#### 定义

`Have(name string, opts ...setCliExtraParam) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### cli.Host

#### 详细描述


#### 定义

`Host(name string, opts ...setCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.Hosts

#### 详细描述


#### 定义

`Hosts(name string, opts ...setCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.Int

#### 详细描述


#### 定义

`Int(name string, opts ...setCliExtraParam) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### cli.Integer

#### 详细描述


#### 定义

`Integer(name string, opts ...setCliExtraParam) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### cli.LineDict

#### 详细描述


#### 定义

`LineDict(name string, opts ...setCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.Net

#### 详细描述


#### 定义

`Net(name string, opts ...setCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.Network

#### 详细描述


#### 定义

`Network(name string, opts ...setCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.Port

#### 详细描述


#### 定义

`Port(name string, opts ...setCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### cli.Ports

#### 详细描述


#### 定义

`Ports(name string, opts ...setCliExtraParam) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### cli.SetCliName

#### 详细描述


#### 定义

`SetCliName(name string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |


### cli.SetDoc

#### 详细描述


#### 定义

`SetDoc(document string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| document | `string` |   |


### cli.String

#### 详细描述


#### 定义

`String(name string, opts ...setCliExtraParam) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### cli.StringSlice

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


### cli.Url

#### 详细描述


#### 定义

`Url(name string, opts ...setCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.Urls

#### 详细描述


#### 定义

`Urls(name string, opts ...setCliExtraParam) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...setCliExtraParam` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.YakitPlugin

#### 详细描述


#### 定义

`YakitPlugin() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### cli.check

#### 详细描述


#### 定义

`check()`


### cli.help

#### 详细描述


#### 定义

`help(w ...io.Writer)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `...io.Writer` |   |


### cli.setDefault

#### 详细描述


#### 定义

`setDefault(i any) setCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `setCliExtraParam` |   |


### cli.setHelp

#### 详细描述


#### 定义

`setHelp(i string) setCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `setCliExtraParam` |   |


### cli.setRequired

#### 详细描述


#### 定义

`setRequired(t bool) setCliExtraParam`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `setCliExtraParam` |   |


