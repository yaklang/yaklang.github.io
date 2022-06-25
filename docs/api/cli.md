# cli


|成员函数|函数描述/介绍|
|:------|:--------|
 | [cli.Args](#cliargs) | 获取全部的命令行参数，返回结果等同于 `os.Args`&#34; |
 | [cli.Bool](#clibool) | 判断命令行参数是否存在 v1 参数对应的选项？如果 v1 是 `option`，则会检测 `--option` 或者 `-option` 是否存在。要注意，不同于 `cli.String` 等接口，`cli.Bool` 不会判断参数的值，只会检测参数标记是不是存在。 |
 | [cli.Double](#clidouble) | 把函数解析成 `float64` 等价于 `cli.Float64` |
 | [cli.File](#clifile) | 把输入的参数当成文件名来解析 |
 | [cli.FileOrContent](#clifileorcontent) | 把 v1 作为文件名来解析，如果解析失败，则把输入的内容直接变成内容返回 |
 | [cli.Float](#clifloat) | 同 `cli.Double`，把参数内容解析成 float64 |
 | [cli.Have](#clihave) | 同 `cli.Bool`，检测参数是否存在在命令行中 |
 | [cli.Host](#clihost) | 把 v1 对应的命令行参数解析成扫描目标，支持 `192.168.1.1/24,8.8.8.8,baidu.com` 等 IP，IP 段，域名等多种格式 |
 | [cli.Hosts](#clihosts) | 同 `cli.Host` |
 | [cli.Int](#cliint) | 把命令行参数值解析成整数 |
 | [cli.Integer](#cliinteger) | 同 `cli.Int` |
 | [cli.LineDict](#clilinedict) | 把一个字典按行解析 |
 | [cli.Net](#clinet) | 同 `cli.Host` |
 | [cli.Network](#clinetwork) | 同 `cli.Host` |
 | [cli.Port](#cliport) | 把 ports 对应的命令行参数值解析成端口组，或者整数范围 |
 | [cli.Ports](#cliports) | 同 `cli.Port` |
 | [cli.String](#clistring) | 最基础的命令行获取接口，把参数的值解析成字符串 |
 | [cli.StringSlice](#clistringslice) |  |
 | [cli.Url](#cliurl) | 把参数对应的值解析成 url，如果无法精确对应一个 url，将会自动补充 `https://`, `http://`, `www` 等，如果本身参数就是个 url，则会保留原样 |
 | [cli.Urls](#cliurls) |  |
 | [cli.YakitPlugin](#cliyakitplugin) |  |
 | [cli.check](#clicheck) | 检查当前设置的所有参数，如果有不合理的参数（无法确定值），则停止执行，打印出帮助信息 |
 | [cli.setDefault](#clisetdefault) | 为命令行设置默认值，默认值会被强行类型断言为目标类型，不要传错类型就可以！ |
 | [cli.setHelp](#clisethelp) | 使用方法同 `cli.setDefault` 使用，如果某个参数的值为空的话，并且没有默认值，将会展示缺少的参数。 |
 | [cli.setRequired](#clisetrequired) | 设置参数是必须的，如果设置了，参数在没有设置默认值的情况下，并且找不到用户输入，会影响 cli.check 的判断结果 |




 



## 函数定义

### cli.Args

获取全部的命令行参数，返回结果等同于 `os.Args`&#34;

#### 详细描述



#### 定义：

`func cli.Args() return (args: []string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| args | `[]string` |  全部命令行参数 |


 
### cli.Bool

判断命令行参数是否存在 v1 参数对应的选项？如果 v1 是 `option`，则会检测 `--option` 或者 `-option` 是否存在。要注意，不同于 `cli.String` 等接口，`cli.Bool` 不会判断参数的值，只会检测参数标记是不是存在。

#### 详细描述



#### 定义：

`func cli.Bool(paramName: string, extraParams ...cli.setHelp|cli.setDefault) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| paramName | `string` |  参数名：会在会自动检测输入值的参数名，自动带上 `-` 或者 `--` 前缀来检测 |
| extraParams | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |  这个参数是否存在在命令行中 |


 
### cli.Double

把函数解析成 `float64` 等价于 `cli.Float64`

#### 详细描述



#### 定义：

`func cli.Double(param: string, extraParams ...cli.setHelp|cli.setDefault) return (r0: float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |  参数名，自动带上 `--` 或者 `-` 来检测 |
| extraParams | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |  解析成的浮点型值 |


 
### cli.File

把输入的参数当成文件名来解析

#### 详细描述



#### 定义：

`func cli.File(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  文件名 |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |  文件内容 |


 
### cli.FileOrContent

把 v1 作为文件名来解析，如果解析失败，则把输入的内容直接变成内容返回

#### 详细描述



#### 定义：

`func cli.FileOrContent(param: string, v2 ...cli.setHelp|cli.setDefault) return (resultRaw: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |  文件名或文件内容 |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultRaw | `bytes` |   |


 
### cli.Float

同 `cli.Double`，把参数内容解析成 float64

#### 详细描述



#### 定义：

`func cli.Float(param: string, v2 ...cli.setHelp|cli.setDefault) return (r0: float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |  参数名 |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |  参数内容解析的 float64 值 |


 
### cli.Have

同 `cli.Bool`，检测参数是否存在在命令行中

#### 详细描述



#### 定义：

`func cli.Have(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### cli.Host

把 v1 对应的命令行参数解析成扫描目标，支持 `192.168.1.1/24,8.8.8.8,baidu.com` 等 IP，IP 段，域名等多种格式

#### 详细描述



#### 定义：

`func cli.Host(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |  解析成的扫描目标的值，会自动把网段拆开 |


 
### cli.Hosts

同 `cli.Host`

#### 详细描述



#### 定义：

`func cli.Hosts(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  同 `cli.Host` |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |  同 `cli.Host` |


 
### cli.Int

把命令行参数值解析成整数

#### 详细描述



#### 定义：

`func cli.Int(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  参数名称 |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |  解析成的参数值，整数 |


 
### cli.Integer

同 `cli.Int`

#### 详细描述



#### 定义：

`func cli.Integer(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  同 `cli.Int` |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |  同 `cli.Int` |


 
### cli.LineDict

把一个字典按行解析

#### 详细描述



#### 定义：

`func cli.LineDict(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  参数名，字典的文件名 |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |  解析结果，按行解析成 `[]string` |


 
### cli.Net

同 `cli.Host`

#### 详细描述



#### 定义：

`func cli.Net(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  同 `cli.Host` |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |  同 `cli.Host` |


 
### cli.Network

同 `cli.Host`

#### 详细描述



#### 定义：

`func cli.Network(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  同 `cli.Host` |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |  同 `cli.Host` |


 
### cli.Port

把 ports 对应的命令行参数值解析成端口组，或者整数范围

#### 详细描述



#### 定义：

`func cli.Port(ports: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]int` |  解析成的端口组 |


 
### cli.Ports

同 `cli.Port`

#### 详细描述



#### 定义：

`func cli.Ports(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  同 `cli.Port` |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]int` |  同 `cli.Port` |


 
### cli.String

最基础的命令行获取接口，把参数的值解析成字符串

#### 详细描述



#### 定义：

`func cli.String(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  参数的值 `string` |


 
### cli.StringSlice



#### 详细描述



#### 定义：

`func cli.StringSlice(v1: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### cli.Url

把参数对应的值解析成 url，如果无法精确对应一个 url，将会自动补充 `https://`, `http://`, `www` 等，如果本身参数就是个 url，则会保留原样

#### 详细描述



#### 定义：

`func cli.Url(param: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| param | `string` |  需要解析的参数名，支持针对域名，ip:port, ip, url 各种格式的解析，yak 会尽力全的补充 url |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### cli.Urls



#### 详细描述



#### 定义：

`func cli.Urls(v1: string, v2 ...cli.setHelp|cli.setDefault) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...cli.setHelp|cli.setDefault` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### cli.YakitPlugin



#### 详细描述



#### 定义：

`func cli.YakitPlugin() return (r0: []string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### cli.check

检查当前设置的所有参数，如果有不合理的参数（无法确定值），则停止执行，打印出帮助信息

#### 详细描述



#### 定义：

``func cli.check()``

 

 

 
### cli.setDefault

为命令行设置默认值，默认值会被强行类型断言为目标类型，不要传错类型就可以！

#### 详细描述

使用案例如下：

```go
cli.String(&#34;url&#34;, cli.setDefault(&#34;https://example.com&#34;))
```

执行上述代码的时候，如果没有 `--url` 或者 `-url` 参数的话，将会使用默认的 `https://example.com` 作为函数的返回值。

:::caution
注意，如果传入的默认值类型和应该返回的类型不匹配，将会报错！错误提示约为类型断言错误，通过 `defaultValue.(type)` 来实现的。
:::


#### 定义：

`func cli.setDefault(default: any) return (r0: cli.setDefault)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| default | `any` |  命令行默认值 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `cli.setDefault` |   |


 
### cli.setHelp

使用方法同 `cli.setDefault` 使用，如果某个参数的值为空的话，并且没有默认值，将会展示缺少的参数。

#### 详细描述



#### 定义：

`func cli.setHelp(helpText: str) return (r0: cli.setHelp)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| helpText | `str` |  想要默认展示的帮助信息 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `cli.setHelp` |   |


 
### cli.setRequired

设置参数是必须的，如果设置了，参数在没有设置默认值的情况下，并且找不到用户输入，会影响 cli.check 的判断结果

#### 详细描述



#### 定义：

`func cli.setRequired(required: bool) return (r0: func setCliExtraParam(v1: *yaklib.cliExtraParams) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| required | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func setCliExtraParam(v1: *yaklib.cliExtraParams) ` |   |


 


