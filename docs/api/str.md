# str


|成员函数|函数描述/介绍|
|:------|:--------|
 | [str.Compare](#strcompare) |  |
 | [str.Contains](#strcontains) |  |
 | [str.ContainsAny](#strcontainsany) |  |
 | [str.Count](#strcount) |  |
 | [str.EndsWith](#strendswith) |  |
 | [str.EqualFold](#strequalfold) |  |
 | [str.Fields](#strfields) |  |
 | [str.Grok](#strgrok) |  |
 | [str.HasPrefix](#strhasprefix) |  |
 | [str.HasSuffix](#strhassuffix) |  |
 | [str.HostPort](#strhostport) |  |
 | [str.IPv4ToCClassNetwork](#stripv4tocclassnetwork) |  |
 | [str.Index](#strindex) |  |
 | [str.IndexAny](#strindexany) |  |
 | [str.IndexByte](#strindexbyte) |  |
 | [str.IsIPv4](#strisipv4) |  |
 | [str.IsIPv6](#strisipv6) |  |
 | [str.IsStrongPassword](#strisstrongpassword) |  |
 | [str.Join](#strjoin) |  |
 | [str.JsonStreamToMapList](#strjsonstreamtomaplist) |  |
 | [str.JsonToMap](#strjsontomap) |  |
 | [str.JsonToMapList](#strjsontomaplist) |  |
 | [str.LastIndex](#strlastindex) |  |
 | [str.LastIndexAny](#strlastindexany) |  |
 | [str.LastIndexByte](#strlastindexbyte) |  |
 | [str.LowerAndTrimSpace](#strlowerandtrimspace) |  |
 | [str.NewFilter](#strnewfilter) |  |
 | [str.NewReader](#strnewreader) |  |
 | [str.ParamsGetOr](#strparamsgetor) |  |
 | [str.ParseStringToHostPort](#strparsestringtohostport) |  |
 | [str.ParseStringToHosts](#strparsestringtohosts) |  |
 | [str.ParseStringToLines](#strparsestringtolines) |  |
 | [str.ParseStringToPorts](#strparsestringtoports) |  |
 | [str.ParseStringToUrls](#strparsestringtourls) |  |
 | [str.ParseStringToUrlsWith3W](#strparsestringtourlswith3w) |  |
 | [str.PathJoin](#strpathjoin) |  |
 | [str.RandSecret](#strrandsecret) |  |
 | [str.RandStr](#strrandstr) |  |
 | [str.RegexpMatch](#strregexpmatch) |  |
 | [str.RemoveRepeat](#strremoverepeat) |  |
 | [str.Repeat](#strrepeat) |  |
 | [str.Replace](#strreplace) |  |
 | [str.ReplaceAll](#strreplaceall) |  |
 | [str.Split](#strsplit) |  |
 | [str.SplitAfter](#strsplitafter) |  |
 | [str.SplitAfterN](#strsplitaftern) |  |
 | [str.SplitAndTrim](#strsplitandtrim) |  |
 | [str.SplitN](#strsplitn) |  |
 | [str.StartsWith](#strstartswith) |  |
 | [str.StringContainsAnyOfSubString](#strstringcontainsanyofsubstring) |  |
 | [str.StringSliceContains](#strstringslicecontains) |  |
 | [str.StringSliceContainsAll](#strstringslicecontainsall) |  |
 | [str.Title](#strtitle) |  |
 | [str.ToJsonIndentStr](#strtojsonindentstr) |  |
 | [str.ToLower](#strtolower) |  |
 | [str.ToLowerSpecial](#strtolowerspecial) |  |
 | [str.ToTitle](#strtotitle) |  |
 | [str.ToTitleSpecial](#strtotitlespecial) |  |
 | [str.ToUpper](#strtoupper) |  |
 | [str.ToUpperSpecial](#strtoupperspecial) |  |
 | [str.ToValidUTF8](#strtovalidutf8) |  |
 | [str.Trim](#strtrim) |  |
 | [str.TrimLeft](#strtrimleft) |  |
 | [str.TrimPrefix](#strtrimprefix) |  |
 | [str.TrimRight](#strtrimright) |  |
 | [str.TrimSpace](#strtrimspace) |  |
 | [str.TrimSuffix](#strtrimsuffix) |  |
 | [str.f](#strf) |  |




 



## 函数定义

### str.Compare



#### 详细描述



#### 定义：

`func str.Compare(v1: string, v2: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.Contains



#### 详细描述



#### 定义：

`func str.Contains(v1: string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.ContainsAny



#### 详细描述



#### 定义：

`func str.ContainsAny(v1: string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Count



#### 详细描述



#### 定义：

`func str.Count(v1: string, v2: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.EndsWith



#### 详细描述



#### 定义：

`func str.EndsWith(v1: string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.EqualFold



#### 详细描述



#### 定义：

`func str.EqualFold(v1: string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Fields



#### 详细描述



#### 定义：

`func str.Fields(v1: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.Grok



#### 详细描述



#### 定义：

`func str.Grok(v1: string, v2: string) return (r0: yaklib.GrokResult)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `yaklib.GrokResult` |   |


 
### str.HasPrefix



#### 详细描述



#### 定义：

`func str.HasPrefix(v1: string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.HasSuffix



#### 详细描述



#### 定义：

`func str.HasSuffix(v1: string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.HostPort



#### 详细描述



#### 定义：

`func str.HostPort(v1: string, v2: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.IPv4ToCClassNetwork



#### 详细描述



#### 定义：

`func str.IPv4ToCClassNetwork(v1: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### str.Index



#### 详细描述



#### 定义：

`func str.Index(v1: string, v2: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.IndexAny



#### 详细描述



#### 定义：

`func str.IndexAny(v1: string, v2: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.IndexByte



#### 详细描述



#### 定义：

`func str.IndexByte(v1: string, v2: byte) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.IsIPv4



#### 详细描述



#### 定义：

`func str.IsIPv4(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsIPv6



#### 详细描述



#### 定义：

`func str.IsIPv6(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsStrongPassword



#### 详细描述



#### 定义：

`func str.IsStrongPassword(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Join



#### 详细描述



#### 定义：

`func str.Join(v1: []string, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.JsonStreamToMapList



#### 详细描述



#### 定义：

`func str.JsonStreamToMapList(v1: io.Reader) return (r0: []map[string]any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]map[string]any` |   |


 
### str.JsonToMap



#### 详细描述



#### 定义：

`func str.JsonToMap(v1: string) return (r0: map[string]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]string` |   |


 
### str.JsonToMapList



#### 详细描述



#### 定义：

`func str.JsonToMapList(v1: string) return (r0: []map[string]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]map[string]string` |   |


 
### str.LastIndex



#### 详细描述



#### 定义：

`func str.LastIndex(v1: string, v2: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.LastIndexAny



#### 详细描述



#### 定义：

`func str.LastIndexAny(v1: string, v2: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.LastIndexByte



#### 详细描述



#### 定义：

`func str.LastIndexByte(v1: string, v2: byte) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.LowerAndTrimSpace



#### 详细描述



#### 定义：

`func str.LowerAndTrimSpace(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.NewFilter



#### 详细描述



#### 定义：

`func str.NewFilter() return (r0: *filter.StringFilter)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*filter.StringFilter` |   |


 
### str.NewReader



#### 详细描述



#### 定义：

`func str.NewReader(v1: string) return (r0: *strings.Reader)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*strings.Reader` |   |


 
### str.ParamsGetOr



#### 详细描述



#### 定义：

`func str.ParamsGetOr(v1: map[string]string, v2: string, v3: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ParseStringToHostPort



#### 详细描述



#### 定义：

`func str.ParseStringToHostPort(v1: string) return (r0: string, r1: int, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `int` |   |
| r2 | `error` |   |


 
### str.ParseStringToHosts



#### 详细描述



#### 定义：

`func str.ParseStringToHosts(v1: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ParseStringToLines



#### 详细描述



#### 定义：

`func str.ParseStringToLines(v1: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ParseStringToPorts



#### 详细描述



#### 定义：

`func str.ParseStringToPorts(v1: string) return (r0: []int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]int` |   |


 
### str.ParseStringToUrls



#### 详细描述



#### 定义：

`func str.ParseStringToUrls(v1 ...string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ParseStringToUrlsWith3W



#### 详细描述



#### 定义：

`func str.ParseStringToUrlsWith3W(v1 ...string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.PathJoin



#### 详细描述



#### 定义：

`func str.PathJoin(v1 ...string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.RandSecret



#### 详细描述



#### 定义：

`func str.RandSecret(v1: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.RandStr



#### 详细描述



#### 定义：

`func str.RandStr(v1: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.RegexpMatch



#### 详细描述



#### 定义：

`func str.RegexpMatch(v1: string, v2: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.RemoveRepeat



#### 详细描述



#### 定义：

`func str.RemoveRepeat(v1: []string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.Repeat



#### 详细描述



#### 定义：

`func str.Repeat(v1: string, v2: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.Replace



#### 详细描述



#### 定义：

`func str.Replace(v1: string, v2: string, v3: string, v4: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |
| v4 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ReplaceAll



#### 详细描述



#### 定义：

`func str.ReplaceAll(v1: string, v2: string, v3: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.Split



#### 详细描述



#### 定义：

`func str.Split(v1: string, v2: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitAfter



#### 详细描述



#### 定义：

`func str.SplitAfter(v1: string, v2: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitAfterN



#### 详细描述



#### 定义：

`func str.SplitAfterN(v1: string, v2: string, v3: int) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitAndTrim



#### 详细描述



#### 定义：

`func str.SplitAndTrim(v1: string, v2: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitN



#### 详细描述



#### 定义：

`func str.SplitN(v1: string, v2: string, v3: int) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.StartsWith



#### 详细描述



#### 定义：

`func str.StartsWith(v1: string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.StringContainsAnyOfSubString



#### 详细描述



#### 定义：

`func str.StringContainsAnyOfSubString(v1: string, v2: []string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.StringSliceContains



#### 详细描述



#### 定义：

`func str.StringSliceContains(v1: []string, v2: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.StringSliceContainsAll



#### 详细描述



#### 定义：

`func str.StringSliceContainsAll(v1: []string, v2 ...string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Title



#### 详细描述



#### 定义：

`func str.Title(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToJsonIndentStr



#### 详细描述



#### 定义：

`func str.ToJsonIndentStr(v1: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToLower



#### 详细描述



#### 定义：

`func str.ToLower(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToLowerSpecial



#### 详细描述



#### 定义：

`func str.ToLowerSpecial(v1: unicode.SpecialCase, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `unicode.SpecialCase` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToTitle



#### 详细描述



#### 定义：

`func str.ToTitle(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToTitleSpecial



#### 详细描述



#### 定义：

`func str.ToTitleSpecial(v1: unicode.SpecialCase, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `unicode.SpecialCase` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToUpper



#### 详细描述



#### 定义：

`func str.ToUpper(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToUpperSpecial



#### 详细描述



#### 定义：

`func str.ToUpperSpecial(v1: unicode.SpecialCase, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `unicode.SpecialCase` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToValidUTF8



#### 详细描述



#### 定义：

`func str.ToValidUTF8(v1: string, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.Trim



#### 详细描述



#### 定义：

`func str.Trim(v1: string, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimLeft



#### 详细描述



#### 定义：

`func str.TrimLeft(v1: string, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimPrefix



#### 详细描述



#### 定义：

`func str.TrimPrefix(v1: string, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimRight



#### 详细描述



#### 定义：

`func str.TrimRight(v1: string, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimSpace



#### 详细描述



#### 定义：

`func str.TrimSpace(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimSuffix



#### 详细描述



#### 定义：

`func str.TrimSuffix(v1: string, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.f



#### 详细描述



#### 定义：

`func str.f(v1: string, v2 ...any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


