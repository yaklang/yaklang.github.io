# str


|成员函数|函数描述/介绍|
|:------|:--------|
 | [str.CalcSSDeep](#strcalcssdeep) | 计算 SSDeep 的 Hash 值 |
 | [str.CalcSSDeepStability](#strcalcssdeepstability) | 计算多个文本的 SSDeep 平均相似度，0-1.0，越大越稳定（相似） |
 | [str.CalcSimHash](#strcalcsimhash) | 计算 SimHash 的值 |
 | [str.CalcSimHashStability](#strcalcsimhashstability) | 计算多个值 SimHash 的相似度 |
 | [str.CalcSimilarity](#strcalcsimilarity) | 计算多个文本的相似度（综合） |
 | [str.CalcTextMaxSubStrStability](#strcalctextmaxsubstrstability) | 计算文本相似度（SQLMap 文本相似度算法） |
 | [str.Compare](#strcompare) | 比较字符串 |
 | [str.Contains](#strcontains) | 字符串中是否包含一个子串 |
 | [str.ContainsAny](#strcontainsany) | 字符串中包含字串的任何一个字符 |
 | [str.Count](#strcount) | 字符串中包含多少个字串？ |
 | [str.EndsWith](#strendswith) | 判断字符串是否以子串为结尾 |
 | [str.EqualFold](#strequalfold) | 判断忽略大小写字符串是否相等？ |
 | [str.ExtractBodyFromHTTPResponseRaw](#strextractbodyfromhttpresponseraw) | 从 response bytes 中提取 body |
 | [str.ExtractChineseIDCards](#strextractchineseidcards) | 提取内容中的身份证号 |
 | [str.ExtractStrContext](#strextractstrcontext) | 提取 str 的上下文，（前后字符串） |
 | [str.Fields](#strfields) | 按空格把字符串分割开 |
 | [str.FixHTTPResponse](#strfixhttpresponse) | 修复 HTTPResponse 的 bytes |
 | [str.Grok](#strgrok) | 同 `re.Grok` |
 | [str.HasPrefix](#strhasprefix) | 判断字符串是不是以子串为前缀 |
 | [str.HasSuffix](#strhassuffix) | 判断字符串是否以子字符串为后缀 |
 | [str.HostPort](#strhostport) | 把字符串Host和Port拼接起来 |
 | [str.IPv4ToCClassNetwork](#stripv4tocclassnetwork) | 把一个 IPv4 变成对应的 C段网络 |
 | [str.Index](#strindex) | 判断子字符串在字符串中的位置 |
 | [str.IndexAny](#strindexany) | 判断子字符串中任意一个字符在主串中的位置 |
 | [str.IndexByte](#strindexbyte) | 判断一个 byte 的位置 |
 | [str.IsBase64Value](#strisbase64value) | 判断一个值是不是 base64 |
 | [str.IsCaptchaField](#striscaptchafield) | 判断一个参数是不是验证码 |
 | [str.IsHtmlResponse](#strishtmlresponse) | 判断一个 Response 是不是 HTML |
 | [str.IsHttpURL](#strishttpurl) | 判断 URL 是不是 http(s)://  |
 | [str.IsIPv4](#strisipv4) | 判断一个字符串是不是 IPv4 |
 | [str.IsIPv6](#strisipv6) | 判断一个字符串是不是 IPv6 |
 | [str.IsJSONPParam](#strisjsonpparam) | 判断 JSONP 参数 |
 | [str.IsJsonResponse](#strisjsonresponse) | 判断请求是不是 JSON 请求 |
 | [str.IsMD5Value](#strismd5value) | 判断有没有参数是 MD5 值的 |
 | [str.IsPasswordField](#strispasswordfield) | 判断是否是密码字段 |
 | [str.IsPlainBase64Value](#strisplainbase64value) | 判断Base64的结果是不是都是可见字符 |
 | [str.IsRedirectParam](#strisredirectparam) | 判断参数是不是可能是 Redirect 参数 |
 | [str.IsSQLColumnField](#strissqlcolumnfield) | 判断字段名是不是 SQL 列名 |
 | [str.IsSensitiveJson](#strissensitivejson) | 判断是否是敏感 JSON（Key:Value） |
 | [str.IsSensitiveTokenField](#strissensitivetokenfield) | 判断是不是敏感 Token/AC/SecretKey |
 | [str.IsServerError](#strisservererror) | 判断是否有服务器常见错误 |
 | [str.IsSha256Value](#strissha256value) | 判断是否是一个可能的 SHA256 值 |
 | [str.IsStrongPassword](#strisstrongpassword) | 判断一个密码是不是强密码 |
 | [str.IsTLSServer](#stristlsserver) | 判断一个地址是不是 TLS |
 | [str.IsUrlParam](#strisurlparam) | 判断一个参数是不是 URL |
 | [str.IsUrlPath](#strisurlpath) | 判断一个参数是不是路径？ |
 | [str.IsUsernameField](#strisusernamefield) | 判断一个字段名是不是可能是用户名？ |
 | [str.IsXmlParam](#strisxmlparam) | 判断一个参数是否是 XML 参数 |
 | [str.IsXmlRequest](#strisxmlrequest) | 判断一个请求是不是 XML 请求 |
 | [str.IsXmlValue](#strisxmlvalue) | 判断一个值是不是 XML |
 | [str.Join](#strjoin) | Join 一个字符串，把 slice 中拼成字符串，使用 seperator 作为分隔符 |
 | [str.JsonStreamToMapList](#strjsonstreamtomaplist) | 把 json 流解析成多个 `map[string]interface{}` |
 | [str.JsonToMap](#strjsontomap) | 把 Json 解析成 `map[string]string` |
 | [str.JsonToMapList](#strjsontomaplist) |  |
 | [str.LastIndex](#strlastindex) | 从后往前匹配最后一个子字符串位置 |
 | [str.LastIndexAny](#strlastindexany) | 子字符串中任何一个字符在主字符串中最后出现的位置 |
 | [str.LastIndexByte](#strlastindexbyte) | 最后一个目标 byte 的位置 |
 | [str.LowerAndTrimSpace](#strlowerandtrimspace) | 把字符串前后空白移除，并变成小写 |
 | [str.NewFilter](#strnewfilter) | 创建一个字符串过滤器 |
 | [str.NewReader](#strnewreader) | 创建一个 Reader |
 | [str.ParamsGetOr](#strparamsgetor) | 从 `map[string]string` 中获取参数 |
 | [str.ParseBytesToHTTPRequest](#strparsebytestohttprequest) | 把 bytes 解析成 *http.Request |
 | [str.ParseBytesToHTTPResponse](#strparsebytestohttpresponse) | 把 bytes 解析成 *http.Response |
 | [str.ParseStringToCClassHosts](#strparsestringtocclasshosts) | 把网络段的字符串变为整理后的 C 段主机 |
 | [str.ParseStringToHTTPRequest](#strparsestringtohttprequest) | 把字符串解析为 *http.Request |
 | [str.ParseStringToHTTPResponse](#strparsestringtohttpresponse) |  |
 | [str.ParseStringToHostPort](#strparsestringtohostport) | 把字符串解析成 host 和 port |
 | [str.ParseStringToHosts](#strparsestringtohosts) | 把字符串解析成 hosts，字符串可以是逗号分割的网段/域名/ip地址 |
 | [str.ParseStringToLines](#strparsestringtolines) | 把一个字符串按行解析 |
 | [str.ParseStringToPorts](#strparsestringtoports) | 把字符串解析成多个端口，逗号分隔 |
 | [str.ParseStringToUrls](#strparsestringtourls) | 把字符串（域名/IP/URL）解析成可能的 URL（如果是域名，不自动补充 WWW 前缀） |
 | [str.ParseStringToUrlsWith3W](#strparsestringtourlswith3w) | 把字符串（域名/IP/URL）解析成可能的 URL（如果是域名，自动补充 WWW 前缀） |
 | [str.ParseStringUrlToUrlInstance](#strparsestringurltourlinstance) | 把 URL 解析成 *url.URL |
 | [str.ParseStringUrlToWebsiteRootPath](#strparsestringurltowebsiterootpath) |  |
 | [str.PathJoin](#strpathjoin) | 把 path 进行拼接 |
 | [str.RandSecret](#strrandsecret) | 生成一个随机密码 |
 | [str.RandStr](#strrandstr) | 生成一个随机字符串 |
 | [str.RegexpMatch](#strregexpmatch) | 使用正则匹配 |
 | [str.RemoveRepeat](#strremoverepeat) | 移除 slice 中重复元素 |
 | [str.Repeat](#strrepeat) | 重复字符串 |
 | [str.Replace](#strreplace) | 字符串替换（次数） |
 | [str.ReplaceAll](#strreplaceall) | 字符串替换，全部 |
 | [str.Split](#strsplit) | 分割字符串 |
 | [str.SplitAfter](#strsplitafter) | 分割字符串，不移除分隔符 |
 | [str.SplitAfterN](#strsplitaftern) | 分割字符串，不移除分隔符，最多分割成N个块 |
 | [str.SplitAndTrim](#strsplitandtrim) | 分割，并清除每一个部分的前后空白 |
 | [str.SplitN](#strsplitn) | 分割字符串，分割成N块 |
 | [str.StartsWith](#strstartswith) | 判断主字符串是否是子串开头？ |
 | [str.StringContainsAnyOfSubString](#strstringcontainsanyofsubstring) | 判断字符串是否包含任意一个后续 Slice 中的元素？ |
 | [str.StringSliceContains](#strstringslicecontains) | 判断一个 Slice 中是否包含一个子字符串？ |
 | [str.StringSliceContainsAll](#strstringslicecontainsall) | 判断一个 Slice 中是否包含后续所有子串？ |
 | [str.Title](#strtitle) | 把字符串每个单词首字母大写，变成 Title |
 | [str.ToJsonIndentStr](#strtojsonindentstr) | 把一个对象解析成 Json，并保证 indent 合理 |
 | [str.ToLower](#strtolower) | 把字符串变成小写 |
 | [str.ToLowerSpecial](#strtolowerspecial) | 同 Golang `strings.ToLowerSpecial` |
 | [str.ToTitle](#strtotitle) | 同 Golang `strings.ToTitle` |
 | [str.ToTitleSpecial](#strtotitlespecial) | 同 Golang `strings.ToTitleSpecial` |
 | [str.ToUpper](#strtoupper) | 把字符串变成全大写 |
 | [str.ToUpperSpecial](#strtoupperspecial) | 同 Golang `strings.ToUpperSpecial` |
 | [str.ToValidUTF8](#strtovalidutf8) | 把字符串中不安全的UTF8字符替换掉，避免 panic |
 | [str.Trim](#strtrim) | 把字符串前后任何包含子字符串中字符移除 |
 | [str.TrimLeft](#strtrimleft) | 移除左边的某些字符 |
 | [str.TrimPrefix](#strtrimprefix) | 移除某个前缀 |
 | [str.TrimRight](#strtrimright) | 移除右边的某些字符 |
 | [str.TrimSpace](#strtrimspace) | 移除前后空白字符 |
 | [str.TrimSuffix](#strtrimsuffix) | 移除后缀 |
 | [str.UrlJoin](#strurljoin) | URL Join，可以拼接 URL Path |
 | [str.f](#strf) | 相当于 `fmt.Sprintf` |




 



## 函数定义

### str.CalcSSDeep

计算 SSDeep 的 Hash 值

#### 详细描述



#### 定义：

`func str.CalcSSDeep(v1: bytes) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.CalcSSDeepStability

计算多个文本的 SSDeep 平均相似度，0-1.0，越大越稳定（相似）

#### 详细描述



#### 定义：

`func str.CalcSSDeepStability(v1 ...bytes) return (r0: float64, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |
| r1 | `error` |   |


 
### str.CalcSimHash

计算 SimHash 的值

#### 详细描述



#### 定义：

`func str.CalcSimHash(v1: bytes) return (r0: uint64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `uint64` |   |


 
### str.CalcSimHashStability

计算多个值 SimHash 的相似度

#### 详细描述



#### 定义：

`func str.CalcSimHashStability(v1 ...bytes) return (r0: float64, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |
| r1 | `error` |   |


 
### str.CalcSimilarity

计算多个文本的相似度（综合）

#### 详细描述



#### 定义：

`func str.CalcSimilarity(v1 ...bytes) return (r0: float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### str.CalcTextMaxSubStrStability

计算文本相似度（SQLMap 文本相似度算法）

#### 详细描述



#### 定义：

`func str.CalcTextMaxSubStrStability(v1 ...bytes) return (r0: float64, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |
| r1 | `error` |   |


 
### str.Compare

比较字符串

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

字符串中是否包含一个子串

#### 详细描述



#### 定义：

`func str.Contains(all: string, sub: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.ContainsAny

字符串中包含字串的任何一个字符

#### 详细描述



#### 定义：

`func str.ContainsAny(all: string, chars: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| chars | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Count

字符串中包含多少个字串？

#### 详细描述



#### 定义：

`func str.Count(all: string, sub: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.EndsWith

判断字符串是否以子串为结尾

#### 详细描述



#### 定义：

`func str.EndsWith(all: string, sub: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.EqualFold

判断忽略大小写字符串是否相等？

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


 
### str.ExtractBodyFromHTTPResponseRaw

从 response bytes 中提取 body

#### 详细描述



#### 定义：

`func str.ExtractBodyFromHTTPResponseRaw(rsp: bytes) return (body: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| body | `bytes` |   |
| r1 | `error` |   |


 
### str.ExtractChineseIDCards

提取内容中的身份证号

#### 详细描述



#### 定义：

`func str.ExtractChineseIDCards(v1: any) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ExtractStrContext

提取 str 的上下文，（前后字符串）

#### 详细描述



#### 定义：

`func str.ExtractStrContext(v1: bytes, keywords: []string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| keywords | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.Fields

按空格把字符串分割开

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


 
### str.FixHTTPResponse

修复 HTTPResponse 的 bytes

#### 详细描述



#### 定义：

`func str.FixHTTPResponse(response: bytes) return (rsp: bytes, body: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| response | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `bytes` |   |
| body | `bytes` |   |
| r2 | `error` |   |


 
### str.Grok

同 `re.Grok`

#### 详细描述



#### 定义：

`func str.Grok(content: string, grokRule: string) return (r0: yaklib.GrokResult)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `string` |   |
| grokRule | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `yaklib.GrokResult` |   |


 
### str.HasPrefix

判断字符串是不是以子串为前缀

#### 详细描述



#### 定义：

`func str.HasPrefix(all: string, sub: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.HasSuffix

判断字符串是否以子字符串为后缀

#### 详细描述



#### 定义：

`func str.HasSuffix(all: string, sub: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.HostPort

把字符串Host和Port拼接起来

#### 详细描述



#### 定义：

`func str.HostPort(host: string, port: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.IPv4ToCClassNetwork

把一个 IPv4 变成对应的 C段网络

#### 详细描述



#### 定义：

`func str.IPv4ToCClassNetwork(ip: string) return (network: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |
| r1 | `error` |   |


 
### str.Index

判断子字符串在字符串中的位置

#### 详细描述



#### 定义：

`func str.Index(all: string, sub: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.IndexAny

判断子字符串中任意一个字符在主串中的位置

#### 详细描述



#### 定义：

`func str.IndexAny(all: string, sub: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.IndexByte

判断一个 byte 的位置

#### 详细描述



#### 定义：

`func str.IndexByte(all: string, byte: byte) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| byte | `byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.IsBase64Value

判断一个值是不是 base64

#### 详细描述



#### 定义：

`func str.IsBase64Value(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsCaptchaField

判断一个参数是不是验证码

#### 详细描述



#### 定义：

`func str.IsCaptchaField(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsHtmlResponse

判断一个 Response 是不是 HTML

#### 详细描述



#### 定义：

`func str.IsHtmlResponse(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsHttpURL

判断 URL 是不是 http(s):// 

#### 详细描述



#### 定义：

`func str.IsHttpURL(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsIPv4

判断一个字符串是不是 IPv4

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

判断一个字符串是不是 IPv6

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


 
### str.IsJSONPParam

判断 JSONP 参数

#### 详细描述



#### 定义：

`func str.IsJSONPParam(v1: string, v2: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsJsonResponse

判断请求是不是 JSON 请求

#### 详细描述



#### 定义：

`func str.IsJsonResponse(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsMD5Value

判断有没有参数是 MD5 值的

#### 详细描述



#### 定义：

`func str.IsMD5Value(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsPasswordField

判断是否是密码字段

#### 详细描述



#### 定义：

`func str.IsPasswordField(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsPlainBase64Value

判断Base64的结果是不是都是可见字符

#### 详细描述



#### 定义：

`func str.IsPlainBase64Value(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsRedirectParam

判断参数是不是可能是 Redirect 参数

#### 详细描述



#### 定义：

`func str.IsRedirectParam(v1: string, v2: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsSQLColumnField

判断字段名是不是 SQL 列名

#### 详细描述



#### 定义：

`func str.IsSQLColumnField(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsSensitiveJson

判断是否是敏感 JSON（Key:Value）

#### 详细描述



#### 定义：

`func str.IsSensitiveJson(v1: bytes) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsSensitiveTokenField

判断是不是敏感 Token/AC/SecretKey

#### 详细描述



#### 定义：

`func str.IsSensitiveTokenField(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsServerError

判断是否有服务器常见错误

#### 详细描述



#### 定义：

`func str.IsServerError(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsSha256Value

判断是否是一个可能的 SHA256 值

#### 详细描述



#### 定义：

`func str.IsSha256Value(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsStrongPassword

判断一个密码是不是强密码

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


 
### str.IsTLSServer

判断一个地址是不是 TLS

#### 详细描述



#### 定义：

`func str.IsTLSServer(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsUrlParam

判断一个参数是不是 URL

#### 详细描述



#### 定义：

`func str.IsUrlParam(v1: string, v2: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsUrlPath

判断一个参数是不是路径？

#### 详细描述



#### 定义：

`func str.IsUrlPath(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsUsernameField

判断一个字段名是不是可能是用户名？

#### 详细描述



#### 定义：

`func str.IsUsernameField(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsXmlParam

判断一个参数是否是 XML 参数

#### 详细描述



#### 定义：

`func str.IsXmlParam(v1: string, v2: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsXmlRequest

判断一个请求是不是 XML 请求

#### 详细描述



#### 定义：

`func str.IsXmlRequest(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsXmlValue

判断一个值是不是 XML

#### 详细描述



#### 定义：

`func str.IsXmlValue(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Join

Join 一个字符串，把 slice 中拼成字符串，使用 seperator 作为分隔符

#### 详细描述



#### 定义：

`func str.Join(strSlice: []string, seperator: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strSlice | `[]string` |   |
| seperator | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.JsonStreamToMapList

把 json 流解析成多个 `map[string]interface{}`

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

把 Json 解析成 `map[string]string`

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

从后往前匹配最后一个子字符串位置

#### 详细描述



#### 定义：

`func str.LastIndex(all: string, sub: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.LastIndexAny

子字符串中任何一个字符在主字符串中最后出现的位置

#### 详细描述



#### 定义：

`func str.LastIndexAny(all: string, sub: string) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.LastIndexByte

最后一个目标 byte 的位置

#### 详细描述



#### 定义：

`func str.LastIndexByte(all: string, byte: byte) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| byte | `byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.LowerAndTrimSpace

把字符串前后空白移除，并变成小写

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

创建一个字符串过滤器

#### 详细描述



#### 定义：

`func str.NewFilter() return (r0: *filter.StringFilter)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*filter.StringFilter` |   |


 
### str.NewReader

创建一个 Reader

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

从 `map[string]string` 中获取参数

#### 详细描述



#### 定义：

`func str.ParamsGetOr(params: map[string]string, key: string, defaulValue: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `map[string]string` |   |
| key | `string` |   |
| defaulValue | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ParseBytesToHTTPRequest

把 bytes 解析成 *http.Request

#### 详细描述



#### 定义：

`func str.ParseBytesToHTTPRequest(v1: bytes) return (r0: *http.Request, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Request` |   |
| r1 | `error` |   |


 
### str.ParseBytesToHTTPResponse

把 bytes 解析成 *http.Response

#### 详细描述



#### 定义：

`func str.ParseBytesToHTTPResponse(v1: bytes) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### str.ParseStringToCClassHosts

把网络段的字符串变为整理后的 C 段主机

#### 详细描述



#### 定义：

`func str.ParseStringToCClassHosts(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ParseStringToHTTPRequest

把字符串解析为 *http.Request

#### 详细描述



#### 定义：

`func str.ParseStringToHTTPRequest(v1: string) return (r0: *http.Request, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Request` |   |
| r1 | `error` |   |


 
### str.ParseStringToHTTPResponse



#### 详细描述



#### 定义：

`func str.ParseStringToHTTPResponse(v1: string) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### str.ParseStringToHostPort

把字符串解析成 host 和 port

#### 详细描述



#### 定义：

`func str.ParseStringToHostPort(v1: string) return (host: string, port: int, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| r2 | `error` |   |


 
### str.ParseStringToHosts

把字符串解析成 hosts，字符串可以是逗号分割的网段/域名/ip地址

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

把一个字符串按行解析

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

把字符串解析成多个端口，逗号分隔

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

把字符串（域名/IP/URL）解析成可能的 URL（如果是域名，不自动补充 WWW 前缀）

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

把字符串（域名/IP/URL）解析成可能的 URL（如果是域名，自动补充 WWW 前缀）

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


 
### str.ParseStringUrlToUrlInstance

把 URL 解析成 *url.URL

#### 详细描述



#### 定义：

`func str.ParseStringUrlToUrlInstance(v1: string) return (r0: *url.URL, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*url.URL` |   |
| r1 | `error` |   |


 
### str.ParseStringUrlToWebsiteRootPath



#### 详细描述



#### 定义：

`func str.ParseStringUrlToWebsiteRootPath(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.PathJoin

把 path 进行拼接

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

生成一个随机密码

#### 详细描述



#### 定义：

`func str.RandSecret(length: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` |  随机密码长度 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.RandStr

生成一个随机字符串

#### 详细描述



#### 定义：

`func str.RandStr(length: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` |  随机字符串长度 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.RegexpMatch

使用正则匹配

#### 详细描述



#### 定义：

`func str.RegexpMatch(regexpPattern: string, content: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| regexpPattern | `string` |   |
| content | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.RemoveRepeat

移除 slice 中重复元素

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

重复字符串

#### 详细描述



#### 定义：

`func str.Repeat(strContent: string, count: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strContent | `string` |  想要重复的字符串 |
| count | `int` |  重复次数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.Replace

字符串替换（次数）

#### 详细描述



#### 定义：

`func str.Replace(raw: string, old: string, new: string, matchTimes: int) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |  原始字符串 |
| old | `string` |  想要匹配的旧字符串 |
| new | `string` |  想要替换的新字符串 |
| matchTimes | `int` |  匹配次数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ReplaceAll

字符串替换，全部

#### 详细描述



#### 定义：

`func str.ReplaceAll(raw: string, old: string, new: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |  全部字符串 |
| old | `string` |   |
| new | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.Split

分割字符串

#### 详细描述



#### 定义：

`func str.Split(all: string, sep: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sep | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitAfter

分割字符串，不移除分隔符

#### 详细描述



#### 定义：

`func str.SplitAfter(all: string, sep: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sep | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitAfterN

分割字符串，不移除分隔符，最多分割成N个块

#### 详细描述



#### 定义：

`func str.SplitAfterN(all: string, sep: string, n: int) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sep | `string` |   |
| n | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitAndTrim

分割，并清除每一个部分的前后空白

#### 详细描述



#### 定义：

`func str.SplitAndTrim(all: string, sep: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sep | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitN

分割字符串，分割成N块

#### 详细描述



#### 定义：

`func str.SplitN(all: string, sep: string, n: int) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sep | `string` |   |
| n | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.StartsWith

判断主字符串是否是子串开头？

#### 详细描述



#### 定义：

`func str.StartsWith(all: string, sub: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.StringContainsAnyOfSubString

判断字符串是否包含任意一个后续 Slice 中的元素？

#### 详细描述



#### 定义：

`func str.StringContainsAnyOfSubString(all: string, subStrs: []string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| subStrs | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.StringSliceContains

判断一个 Slice 中是否包含一个子字符串？

#### 详细描述



#### 定义：

`func str.StringSliceContains(slice: []string, sub: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice | `[]string` |   |
| sub | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.StringSliceContainsAll

判断一个 Slice 中是否包含后续所有子串？

#### 详细描述



#### 定义：

`func str.StringSliceContainsAll(slice: []string, subStrs ...string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice | `[]string` |   |
| subStrs | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Title

把字符串每个单词首字母大写，变成 Title

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

把一个对象解析成 Json，并保证 indent 合理

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

把字符串变成小写

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

同 Golang `strings.ToLowerSpecial`

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

同 Golang `strings.ToTitle`

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

同 Golang `strings.ToTitleSpecial`

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

把字符串变成全大写

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

同 Golang `strings.ToUpperSpecial`

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

把字符串中不安全的UTF8字符替换掉，避免 panic

#### 详细描述



#### 定义：

`func str.ToValidUTF8(originStr: string, replaced: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originStr | `string` |  原字符串 |
| replaced | `string` |  想要替换成的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.Trim

把字符串前后任何包含子字符串中字符移除

#### 详细描述



#### 定义：

`func str.Trim(origin: string, subs: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| subs | `string` |  想要移除的子字符集合 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimLeft

移除左边的某些字符

#### 详细描述



#### 定义：

`func str.TrimLeft(origin: string, subs: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| subs | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimPrefix

移除某个前缀

#### 详细描述



#### 定义：

`func str.TrimPrefix(origin: string, prefix: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| prefix | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimRight

移除右边的某些字符

#### 详细描述



#### 定义：

`func str.TrimRight(origin: string, subs: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| subs | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.TrimSpace

移除前后空白字符

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

移除后缀

#### 详细描述



#### 定义：

`func str.TrimSuffix(origin: string, suffix: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| suffix | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.UrlJoin

URL Join，可以拼接 URL Path

#### 详细描述



#### 定义：

`func str.UrlJoin(v1: string, v2 ...string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### str.f

相当于 `fmt.Sprintf`

#### 详细描述



#### 定义：

`func str.f(strFmt: string, items ...any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strFmt | `string` |   |
| items | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


