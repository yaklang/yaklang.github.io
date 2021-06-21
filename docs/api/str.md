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



#### 定义：

`func (v1: string, v2: string) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.Contains



#### 定义：

`func (v1: string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.ContainsAny



#### 定义：

`func (v1: string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.Count



#### 定义：

`func (v1: string, v2: string) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.EndsWith



#### 定义：

`func (v1: string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.EqualFold



#### 定义：

`func (v1: string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.Fields



#### 定义：

`func (v1: string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.Grok



#### 定义：

`func (v1: string, v2: string) return(yaklib.GrokResult) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | yaklib.GrokResult |   |


### str.HasPrefix



#### 定义：

`func (v1: string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.HasSuffix



#### 定义：

`func (v1: string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.HostPort



#### 定义：

`func (v1: string, v2: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.IPv4ToCClassNetwork



#### 定义：

`func (v1: string) return(string, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |
| r1 | error |   |


### str.Index



#### 定义：

`func (v1: string, v2: string) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.IndexAny



#### 定义：

`func (v1: string, v2: string) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.IndexByte



#### 定义：

`func (v1: string, v2: uint8) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.IsIPv4



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.IsIPv6



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.IsStrongPassword



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.Join



#### 定义：

`func (v1: []string, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.JsonStreamToMapList



#### 定义：

`func (v1: io.Reader) return([]map[string]interface {}) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []map[string]interface {} |   |


### str.JsonToMap



#### 定义：

`func (v1: string) return(map[string]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | map[string]string |   |


### str.JsonToMapList



#### 定义：

`func (v1: string) return([]map[string]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []map[string]string |   |


### str.LastIndex



#### 定义：

`func (v1: string, v2: string) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.LastIndexAny



#### 定义：

`func (v1: string, v2: string) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.LastIndexByte



#### 定义：

`func (v1: string, v2: uint8) return(int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### str.LowerAndTrimSpace



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.NewFilter



#### 定义：

`func () return(*filter.StringFilter) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *filter.StringFilter |   |


### str.NewReader



#### 定义：

`func (v1: string) return(*strings.Reader) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *strings.Reader |   |


### str.ParamsGetOr



#### 定义：

`func (v1: map[string]string, v2: string, v3: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | map[string]string |   |
| v2 | string |   |
| v3 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ParseStringToHostPort



#### 定义：

`func (v1: string) return(string, int, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |
| r1 | int |   |
| r2 | error |   |


### str.ParseStringToHosts



#### 定义：

`func (v1: string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.ParseStringToLines



#### 定义：

`func (v1: string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.ParseStringToPorts



#### 定义：

`func (v1: string) return([]int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []int |   |


### str.ParseStringToUrls



#### 定义：

`func (v1 ...string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.ParseStringToUrlsWith3W



#### 定义：

`func (v1 ...string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.PathJoin



#### 定义：

`func (v1 ...string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.RandSecret



#### 定义：

`func (v1: int) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.RandStr



#### 定义：

`func (v1: int) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.RegexpMatch



#### 定义：

`func (v1: string, v2: interface {}) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.RemoveRepeat



#### 定义：

`func (v1: []string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.Repeat



#### 定义：

`func (v1: string, v2: int) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.Replace



#### 定义：

`func (v1: string, v2: string, v3: string, v4: int) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | string |   |
| v4 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ReplaceAll



#### 定义：

`func (v1: string, v2: string, v3: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.Split



#### 定义：

`func (v1: string, v2: string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.SplitAfter



#### 定义：

`func (v1: string, v2: string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.SplitAfterN



#### 定义：

`func (v1: string, v2: string, v3: int) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.SplitAndTrim



#### 定义：

`func (v1: string, v2: string) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.SplitN



#### 定义：

`func (v1: string, v2: string, v3: int) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### str.StartsWith



#### 定义：

`func (v1: string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.StringContainsAnyOfSubString



#### 定义：

`func (v1: string, v2: []string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.StringSliceContains



#### 定义：

`func (v1: []string, v2: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.StringSliceContainsAll



#### 定义：

`func (v1: []string, v2 ...string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |
| v2 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### str.Title



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToJsonIndentStr



#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToLower



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToLowerSpecial



#### 定义：

`func (v1: unicode.SpecialCase, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | unicode.SpecialCase |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToTitle



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToTitleSpecial



#### 定义：

`func (v1: unicode.SpecialCase, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | unicode.SpecialCase |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToUpper



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToUpperSpecial



#### 定义：

`func (v1: unicode.SpecialCase, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | unicode.SpecialCase |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.ToValidUTF8



#### 定义：

`func (v1: string, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.Trim



#### 定义：

`func (v1: string, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.TrimLeft



#### 定义：

`func (v1: string, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.TrimPrefix



#### 定义：

`func (v1: string, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.TrimRight



#### 定义：

`func (v1: string, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.TrimSpace



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.TrimSuffix



#### 定义：

`func (v1: string, v2: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### str.f



#### 定义：

`func (v1: string, v2 ...interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | []interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |





