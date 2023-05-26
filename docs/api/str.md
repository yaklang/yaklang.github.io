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
 | [str.ExtractDomain](#strextractdomain) |  |
 | [str.ExtractHost](#strextracthost) |  |
 | [str.ExtractJson](#strextractjson) |  |
 | [str.ExtractJsonWithRaw](#strextractjsonwithraw) |  |
 | [str.ExtractRootDomain](#strextractrootdomain) |  |
 | [str.ExtractStrContext](#strextractstrcontext) | 提取 str 的上下文，（前后字符串） |
 | [str.ExtractTitle](#strextracttitle) | 从 HTML 中提取标题 |
 | [str.ExtractURLFromHTTPRequest](#strextracturlfromhttprequest) | 从一个请求对象提取 URL |
 | [str.ExtractURLFromHTTPRequestRaw](#strextracturlfromhttprequestraw) | 从一个原始数据包中提取 URL |
 | [str.Fields](#strfields) | 按空格把字符串分割开 |
 | [str.FixHTTPRequest](#strfixhttprequest) |  |
 | [str.FixHTTPResponse](#strfixhttpresponse) | 修复 HTTPResponse 的 bytes |
 | [str.Grok](#strgrok) | 同 `re.Grok` |
 | [str.HasPrefix](#strhasprefix) | 判断字符串是不是以子串为前缀 |
 | [str.HasSuffix](#strhassuffix) | 判断字符串是否以子字符串为后缀 |
 | [str.HostPort](#strhostport) | 把字符串Host和Port拼接起来 |
 | [str.IPv4ToCClassNetwork](#stripv4tocclassnetwork) | 把一个 IPv4 变成对应的 C段网络 |
 | [str.Index](#strindex) | 判断子字符串在字符串中的位置 |
 | [str.IndexAny](#strindexany) | 判断子字符串中任意一个字符在主串中的位置 |
 | [str.IndexByte](#strindexbyte) | 判断一个 byte 的位置 |
 | [str.IntersectString](#strintersectstring) | 取两个集合的交集 |
 | [str.IsAlNum](#strisalnum) |  |
 | [str.IsAlpha](#strisalpha) |  |
 | [str.IsAlphaNum](#strisalphanum) |  |
 | [str.IsBase64Value](#strisbase64value) | 判断一个值是不是 base64 |
 | [str.IsCaptchaField](#striscaptchafield) | 判断一个参数是不是验证码 |
 | [str.IsDigit](#strisdigit) |  |
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
 | [str.IsTLSServer](#stristlsserver) | 判断地址对应是不是 TLS |
 | [str.IsUrlParam](#strisurlparam) | 判断一个参数是不是 URL |
 | [str.IsUrlPath](#strisurlpath) | 判断一个参数是不是路径？ |
 | [str.IsUsernameField](#strisusernamefield) | 判断一个字段名是不是可能是用户名？ |
 | [str.IsXmlParam](#strisxmlparam) | 判断一个参数是否是 XML 参数 |
 | [str.IsXmlRequest](#strisxmlrequest) | 判断一个请求是不是 XML 请求 |
 | [str.IsXmlValue](#strisxmlvalue) | 判断一个值是不是 XML |
 | [str.Join](#strjoin) |  |
 | [str.JsonStreamToMapList](#strjsonstreamtomaplist) | 把 json 流解析成多个 `map[string]interface{}` |
 | [str.JsonToMap](#strjsontomap) | 把 Json 解析成 `map[string]string` |
 | [str.JsonToMapList](#strjsontomaplist) |  |
 | [str.LastIndex](#strlastindex) | 从后往前匹配最后一个子字符串位置 |
 | [str.LastIndexAny](#strlastindexany) | 子字符串中任何一个字符在主字符串中最后出现的位置 |
 | [str.LastIndexByte](#strlastindexbyte) | 最后一个目标 byte 的位置 |
 | [str.LowerAndTrimSpace](#strlowerandtrimspace) | 把字符串前后空白移除，并变成小写 |
 | [str.MatchAllOfGlob](#strmatchallofglob) | 所有的 glob 规则都被匹配到 |
 | [str.MatchAllOfRegexp](#strmatchallofregexp) | 所有的正则都被匹配到 |
 | [str.MatchAllOfSubString](#strmatchallofsubstring) | 所有的子字符串都被匹配到 |
 | [str.MatchAnyOfGlob](#strmatchanyofglob) | 只要有一条规则被匹配到规则即可 |
 | [str.MatchAnyOfRegexp](#strmatchanyofregexp) | 匹配任何一条正则语句 |
 | [str.MatchAnyOfSubString](#strmatchanyofsubstring) | 包含任何一个子字符串 |
 | [str.MergeUrlFromHTTPRequest](#strmergeurlfromhttprequest) | 根据原始数据包拼接一个新的 URL |
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
 | [str.ReplaceHTTPPacketBody](#strreplacehttppacketbody) | 整体替代一个数据包的 body |
 | [str.Split](#strsplit) | 分割字符串 |
 | [str.SplitAfter](#strsplitafter) | 分割字符串，不移除分隔符 |
 | [str.SplitAfterN](#strsplitaftern) | 分割字符串，不移除分隔符，最多分割成N个块 |
 | [str.SplitAndTrim](#strsplitandtrim) | 分割，并清除每一个部分的前后空白 |
 | [str.SplitHTTPHeadersAndBodyFromPacket](#strsplithttpheadersandbodyfrompacket) | 把数据包的 headers 和 body 进行分离 |
 | [str.SplitHostsToPrivateAndPublic](#strsplithoststoprivateandpublic) |  |
 | [str.SplitN](#strsplitn) | 分割字符串，分割成N块 |
 | [str.StartsWith](#strstartswith) | 判断主字符串是否是子串开头？ |
 | [str.StringContainsAnyOfSubString](#strstringcontainsanyofsubstring) | 判断字符串是否包含任意一个后续 Slice 中的元素？ |
 | [str.StringSliceContains](#strstringslicecontains) |  |
 | [str.StringSliceContainsAll](#strstringslicecontainsall) | 判断一个 Slice 中是否包含后续所有子串？ |
 | [str.Subtract](#strsubtract) | 列表相减 |
 | [str.Title](#strtitle) | 把字符串每个单词首字母大写，变成 Title |
 | [str.ToJsonIndentStr](#strtojsonindentstr) | 把一个对象解析成 Json，并保证 indent 合理 |
 | [str.ToLower](#strtolower) | 把字符串变成小写 |
 | [str.ToLowerSpecial](#strtolowerspecial) | 同 Golang `strings.ToLowerSpecial` |
 | [str.ToStringSlice](#strtostringslice) | 把任意一个数据结构转换成数组 |
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
 | [str.VersionEqual](#strversionequal) |  |
 | [str.VersionGreater](#strversiongreater) |  |
 | [str.VersionGreaterEqual](#strversiongreaterequal) |  |
 | [str.VersionLess](#strversionless) |  |
 | [str.VersionLessEqual](#strversionlessequal) |  |
 | [str.f](#strf) | 相当于 `fmt.Sprintf` |




 



## 函数定义

### str.CalcSSDeep

计算 SSDeep 的 Hash 值

#### 详细描述



#### 定义：

`CalcSSDeep(raw []byte) string`


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

`CalcSSDeepStability(req ...[]byte) (float64, error)  doc:稳定性定义为最远距离 / 最低分数`


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

`CalcSimHash(raw []byte) uint64`


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

`CalcSimHashStability(req ...[]byte) (float64, error)  doc:计算 simhash 稳定性`


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

`CalcSimilarity(raw ...[]byte) float64`


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

`CalcTextMaxSubStrStability(raw ...[]byte) (float64, error)`


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

`Compare(a, b string) int  doc:Compare returns an integer comparing two strings lexicographically.The result will be 0 if a == b, -1 if a &lt; b, and &#43;1 if a &gt; b.Compare is included only for symmetry with package bytes.It is usually clearer and always faster to use the built-instring comparison operators ==, &lt;, &gt;, and so on.`


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

`Contains(s, substr string) bool  doc:Contains reports whether substr is within s.`


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

`ContainsAny(s, chars string) bool  doc:ContainsAny reports whether any Unicode code points in chars are within s.`


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

`Count(s, substr string) int  doc:Count counts the number of non-overlapping instances of substr in s.If substr is an empty string, Count returns 1 &#43; the number of Unicode code points in s.`


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

`EndsWith(s, suffix string) bool  doc:HasSuffix tests whether the string s ends with suffix.`


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

`EqualFold(s, t string) bool  doc:EqualFold reports whether s and t, interpreted as UTF-8 strings,are equal under Unicode case-folding, which is a more generalform of case-insensitivity.`


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

`ExtractBodyFromHTTPResponseRaw(res []byte) ([]byte, error)`


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

`ExtractChineseIDCards(any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ExtractDomain



#### 详细描述



#### 定义：

`ExtractDomain(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ExtractHost



#### 详细描述



#### 定义：

`ExtractHost(raw string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ExtractJson



#### 详细描述



#### 定义：

`ExtractJson(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ExtractJsonWithRaw



#### 详细描述



#### 定义：

`ExtractJsonWithRaw(i any) ([]string, []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |
| r1 | `[]string` |   |


 
### str.ExtractRootDomain



#### 详细描述



#### 定义：

`ExtractRootDomain(i any) []string`


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

`ExtractStrContext(raw []byte, res []string) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| keywords | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ExtractTitle

从 HTML 中提取标题

#### 详细描述



#### 定义：

`ExtractTitle(any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ExtractURLFromHTTPRequest

从一个请求对象提取 URL

#### 详细描述



#### 定义：

`ExtractURLFromHTTPRequest(r *http.Request, https bool) (*url.URL, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `*http.Request` |   |
| isHttps | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*url.URL` |   |
| r1 | `error` |   |


 
### str.ExtractURLFromHTTPRequestRaw

从一个原始数据包中提取 URL

#### 详细描述



#### 定义：

`ExtractURLFromHTTPRequestRaw(req []byte, isHttps bool) (*url.URL, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reqRaw | `bytes` |   |
| isHttps | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*url.URL` |   |
| r1 | `error` |   |


 
### str.Fields

按空格把字符串分割开

#### 详细描述



#### 定义：

`Fields(s string) []string  doc:Fields splits the string s around each instance of one or more consecutive white spacecharacters, as defined by unicode.IsSpace, returning a slice of substrings of s or anempty slice if s contains only white space.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.FixHTTPRequest



#### 详细描述



#### 定义：

`FixHTTPRequest(raw []byte) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### str.FixHTTPResponse

修复 HTTPResponse 的 bytes

#### 详细描述



#### 定义：

`FixHTTPResponse(raw []byte) (rsp []byte, body []byte, _ error)  doc:FixHTTPResponse try its best to fix and present human-readable response`


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

`Grok(string, string) yaklib.GrokResult`


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

`HasPrefix(s, prefix string) bool  doc:HasPrefix tests whether the string s begins with prefix.`


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

`HasSuffix(s, suffix string) bool  doc:HasSuffix tests whether the string s ends with suffix.`


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

`HostPort(host string, port any) string`


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

`IPv4ToCClassNetwork(s string) (string, error)`


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

`Index(s, substr string) int  doc:Index returns the index of the first instance of substr in s, or -1 if substr is not present in s.`


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

`IndexAny(s, chars string) int  doc:IndexAny returns the index of the first instance of any Unicode code pointfrom chars in s, or -1 if no Unicode code point from chars is present in s.`


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

`IndexByte(s string, c byte) int  doc:IndexByte returns the index of the first instance of c in s, or -1 if c is not present in s.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| byte | `byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### str.IntersectString

取两个集合的交集

#### 详细描述



#### 定义：

`IntersectString(x []string, y []string) []string  doc:IntersectString returns the intersection between two collections of string.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |
| v2 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.IsAlNum



#### 详细描述



#### 定义：

`IsAlNum(any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsAlpha



#### 详细描述



#### 定义：

`IsAlpha(any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsAlphaNum



#### 详细描述



#### 定义：

`IsAlphaNum(any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsBase64Value

判断一个值是不是 base64

#### 详细描述



#### 定义：

`IsBase64Value(s string) bool`


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

`IsCaptchaField(key string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsDigit



#### 详细描述



#### 定义：

`IsDigit(any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsHtmlResponse

判断一个 Response 是不是 HTML

#### 详细描述



#### 定义：

`IsHtmlResponse(any) bool`


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

`IsHttpURL(v any) bool  doc:IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https`


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

`IsIPv4(raw string) bool`


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

`IsIPv6(raw string) bool`


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

`IsJSONPParam(key string, value any) bool`


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

`IsJsonResponse(any) bool`


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

`IsMD5Value(s string) bool`


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

`IsPasswordField(key string) bool`


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

`IsPlainBase64Value(s string) bool`


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

`IsRedirectParam(key string, value any) bool  doc:根据 key 的名字猜测是否是用于重定向的参数`


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

`IsSQLColumnField(s string) bool`


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

`IsSensitiveJson(data []byte) bool`


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

`IsSensitiveTokenField(key string) bool`


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

`IsServerError(any) bool`


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

`IsSha256Value(s string) bool`


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

`IsStrongPassword(s string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsTLSServer

判断地址对应是不是 TLS

#### 详细描述



#### 定义：

`IsTLSServer(addr string, proxies ...string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.IsUrlParam

判断一个参数是不是 URL

#### 详细描述



#### 定义：

`IsUrlParam(key string, value any) bool`


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

`IsUrlPath(v any) bool  doc:根据 value 猜测是否是一个 url path`


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

`IsUsernameField(key string) bool`


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

`IsXmlParam(key string, value any) bool`


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

`IsXmlRequest(any) bool`


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

`IsXmlValue(any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Join



#### 详细描述



#### 定义：

`Join(i any, d any) (defaultResult string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.JsonStreamToMapList

把 json 流解析成多个 `map[string]interface{}`

#### 详细描述



#### 定义：

`JsonStreamToMapList(reader io.Reader) []map[string]any`


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

`JsonToMap(line string) map[string]string`


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

`JsonToMapList(line string) []map[string]string`


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

`LastIndex(s, substr string) int  doc:LastIndex returns the index of the last instance of substr in s, or -1 if substr is not present in s.`


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

`LastIndexAny(s, chars string) int  doc:LastIndexAny returns the index of the last instance of any Unicode codepoint from chars in s, or -1 if no Unicode code point from chars ispresent in s.`


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

`LastIndexByte(s string, c byte) int  doc:LastIndexByte returns the index of the last instance of c in s, or -1 if c is not present in s.`


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

`LowerAndTrimSpace(raw string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.MatchAllOfGlob

所有的 glob 规则都被匹配到

#### 详细描述



#### 定义：

`MatchAllOfGlob(
	i any, re ...string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| globRules | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.MatchAllOfRegexp

所有的正则都被匹配到

#### 详细描述



#### 定义：

`MatchAllOfRegexp(
	i any,
	re ...string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexps | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.MatchAllOfSubString

所有的子字符串都被匹配到

#### 详细描述



#### 定义：

`MatchAllOfSubString(i any, re ...string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| subStrs | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.MatchAnyOfGlob

只要有一条规则被匹配到规则即可

#### 详细描述



#### 定义：

`MatchAnyOfGlob(
	i any, re ...string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| globRules | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.MatchAnyOfRegexp

匹配任何一条正则语句

#### 详细描述



#### 定义：

`MatchAnyOfRegexp(
	i any,
	re ...string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexps | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.MatchAnyOfSubString

包含任何一个子字符串

#### 详细描述



#### 定义：

`MatchAnyOfSubString(i any, re ...string) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| subStrs | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.MergeUrlFromHTTPRequest

根据原始数据包拼接一个新的 URL

#### 详细描述



#### 定义：

`MergeUrlFromHTTPRequest(rawRequest []byte, target string, isHttps bool) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reqRaw | `bytes` |   |
| newUrl | `string` |   |
| isHttps | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.NewFilter

创建一个字符串过滤器

#### 详细描述



#### 定义：

`NewFilter() *filter.StringFilter`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*filter.StringFilter` |   |


 
### str.NewReader

创建一个 Reader

#### 详细描述



#### 定义：

`NewReader(string) *strings.Reader`


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

`ParamsGetOr(i map[string]string, keyValue, defaultValue string) string`


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

`ParseBytesToHTTPRequest(raw []byte) (*http.Request, error)`


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

`ParseBytesToHTTPResponse(res []byte) (*http.Response, error)`


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

`ParseStringToCClassHosts(targets string) string`


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

`ParseStringToHTTPRequest(raw string) (*http.Request, error)`


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

`ParseStringToHTTPResponse(res string) (*http.Response, error)`


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

`ParseStringToHostPort(raw string) (host string, port int, err error)`


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

`ParseStringToHosts(raw string) []string`


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

`ParseStringToLines(raw string) []string`


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

`ParseStringToPorts(ports string) []int`


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

`ParseStringToUrls(targets ...string) []string`


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

`ParseStringToUrlsWith3W(sub ...string) []string`


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

`ParseStringUrlToUrlInstance(s string) (*url.URL, error)`


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

`ParseStringUrlToWebsiteRootPath(s string) string`


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

`PathJoin(elem ...string) string  doc:Join joins any number of path elements into a single path,separating them with an OS specific Separator. Empty elementsare ignored. The result is Cleaned. However, if the argumentlist is empty or all its elements are empty, Join returnsan empty string.On Windows, the result will only be a UNC path if the firstnon-empty element is a UNC path.`


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

`RandSecret(n int) string`


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

`RandStr(n int) string`


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

`RegexpMatch(string, any) bool`


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

`RemoveRepeat(slc []string) []string  doc:元素去重`


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

`Repeat(s string, count int) string  doc:Repeat returns a new string consisting of count copies of the string s.It panics if count is negative or ifthe result of (len(s) * count) overflows.`


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

`Replace(s, old, new string, n int) string  doc:Replace returns a copy of the string s with the first nnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the stringand after each UTF-8 sequence, yielding up to k&#43;1 replacementsfor a k-rune string.If n &lt; 0, there is no limit on the number of replacements.`


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

`ReplaceAll(s, old, new string) string  doc:ReplaceAll returns a copy of the string s with allnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the stringand after each UTF-8 sequence, yielding up to k&#43;1 replacementsfor a k-rune string.`


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


 
### str.ReplaceHTTPPacketBody

整体替代一个数据包的 body

#### 详细描述



#### 定义：

`ReplaceHTTPPacketBody(raw []byte, body []byte, chunk bool) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packetRaw | `bytes` |   |
| newBody | `bytes` |   |
| isHttps | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### str.Split

分割字符串

#### 详细描述



#### 定义：

`Split(s, sep string) []string  doc:Split slices s into all substrings separated by sep and returns a slice ofthe substrings between those separators.If s does not contain sep and sep is not empty, Split returns aslice of length 1 whose only element is s.If sep is empty, Split splits after each UTF-8 sequence. If both sand sep are empty, Split returns an empty slice.It is equivalent to SplitN with a count of -1.To split around the first instance of a separator, see Cut.`


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

`SplitAfter(s, sep string) []string  doc:SplitAfter slices s into all substrings after each instance of sep andreturns a slice of those substrings.If s does not contain sep and sep is not empty, SplitAfter returnsa slice of length 1 whose only element is s.If sep is empty, SplitAfter splits after each UTF-8 sequence. Ifboth s and sep are empty, SplitAfter returns an empty slice.It is equivalent to SplitAfterN with a count of -1.`


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

`SplitAfterN(s, sep string, n int) []string  doc:SplitAfterN slices s into substrings after each instance of sep andreturns a slice of those substrings.The count determines the number of substrings to return:  n &gt; 0: at most n substrings; the last substring will be the unsplit remainder.  n == 0: the result is nil (zero substrings)  n &lt; 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for SplitAfter.`


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

`SplitAndTrim(Raw string, sep string) (targets []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| all | `string` |   |
| sep | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.SplitHTTPHeadersAndBodyFromPacket

把数据包的 headers 和 body 进行分离

#### 详细描述



#### 定义：

`SplitHTTPHeadersAndBodyFromPacket(raw []byte, hook ...func(line string)) (string, []byte)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `bytes` |   |
| v2 | `...func(string)` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `bytes` |   |


 
### str.SplitHostsToPrivateAndPublic



#### 详细描述



#### 定义：

`SplitHostsToPrivateAndPublic(hosts ...string) (privs, pub []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |
| r1 | `[]string` |   |


 
### str.SplitN

分割字符串，分割成N块

#### 详细描述



#### 定义：

`SplitN(s, sep string, n int) []string  doc:SplitN slices s into substrings separated by sep and returns a slice ofthe substrings between those separators.The count determines the number of substrings to return:  n &gt; 0: at most n substrings; the last substring will be the unsplit remainder.  n == 0: the result is nil (zero substrings)  n &lt; 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for Split.To split around the first instance of a separator, see Cut.`


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

`StartsWith(s, prefix string) bool  doc:HasPrefix tests whether the string s begins with prefix.`


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

`StringContainsAnyOfSubString(s string, subs []string) bool`


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



#### 详细描述



#### 定义：

`StringSliceContains(s any, raw string) (result bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.StringSliceContainsAll

判断一个 Slice 中是否包含后续所有子串？

#### 详细描述



#### 定义：

`StringSliceContainsAll(o []string, elements ...string) bool  doc:SliceContainsSlick`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slice | `[]string` |   |
| subStrs | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.Subtract

列表相减

#### 详细描述



#### 定义：

`Subtract(x []string, y []string) []string  doc:SubtractString returns the subtraction between two collections of string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |
| v2 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.Title

把字符串每个单词首字母大写，变成 Title

#### 详细描述



#### 定义：

`Title(s string) string  doc:Title returns a copy of the string s with all Unicode letters that begin wordsmapped to their Unicode title case.Deprecated: The rule Title uses for word boundaries does not handle Unicodepunctuation properly. Use golang.org/x/text/cases instead.`


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

`ToJsonIndentStr(any) string`


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

`ToLower(s string) string  doc:ToLower returns s with all Unicode letters mapped to their lower case.`


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

`ToLowerSpecial(c unicode.SpecialCase, s string) string  doc:ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to theirlower case using the case mapping specified by c.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `unicode.SpecialCase` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### str.ToStringSlice

把任意一个数据结构转换成数组

#### 详细描述



#### 定义：

`ToStringSlice(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### str.ToTitle

同 Golang `strings.ToTitle`

#### 详细描述



#### 定义：

`ToTitle(s string) string  doc:ToTitle returns a copy of the string s with all Unicode letters mapped totheir Unicode title case.`


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

`ToTitleSpecial(c unicode.SpecialCase, s string) string  doc:ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to theirUnicode title case, giving priority to the special casing rules.`


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

`ToUpper(s string) string  doc:ToUpper returns s with all Unicode letters mapped to their upper case.`


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

`ToUpperSpecial(c unicode.SpecialCase, s string) string  doc:ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to theirupper case using the case mapping specified by c.`


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

`ToValidUTF8(s, replacement string) string  doc:ToValidUTF8 returns a copy of the string s with each run of invalid UTF-8 byte sequencesreplaced by the replacement string, which may be empty.`


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

`Trim(s, cutset string) string  doc:Trim returns a slice of the string s with all leading andtrailing Unicode code points contained in cutset removed.`


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

`TrimLeft(s, cutset string) string  doc:TrimLeft returns a slice of the string s with all leadingUnicode code points contained in cutset removed.To remove a prefix, use TrimPrefix instead.`


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

`TrimPrefix(s, prefix string) string  doc:TrimPrefix returns s without the provided leading prefix string.If s doesn&#39;t start with prefix, s is returned unchanged.`


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

`TrimRight(s, cutset string) string  doc:TrimRight returns a slice of the string s, with all trailingUnicode code points contained in cutset removed.To remove a suffix, use TrimSuffix instead.`


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

`TrimSpace(s string) string  doc:TrimSpace returns a slice of the string s, with all leadingand trailing white space removed, as defined by Unicode.`


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

`TrimSuffix(s, suffix string) string  doc:TrimSuffix returns s without the provided trailing suffix string.If s doesn&#39;t end with suffix, s is returned unchanged.`


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

`UrlJoin(origin string, paths ...string) (string, error)  doc:https://baidu.com/abc   a?key=valuehttps://baidu.com/abc/a?key=value =&gt; [X] https://baidu.com/abc/a%xxkey=value[X] https://baidu.com/a?key=value`


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


 
### str.VersionEqual



#### 详细描述



#### 定义：

`VersionEqual(v1, v2 string) bool  doc:VersionEqual v1 等于 v2 返回 true`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.VersionGreater



#### 详细描述



#### 定义：

`VersionGreater(v1, v2 string) bool  doc:VersionGreater v1 大于 v2 返回 true`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.VersionGreaterEqual



#### 详细描述



#### 定义：

`VersionGreaterEqual(v1, v2 string) bool  doc:VersionGreaterEqual v1 大于等于 v2 返回 true`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.VersionLess



#### 详细描述



#### 定义：

`VersionLess(v1, v2 string) bool  doc:VersionLess v1 小于 v2 返回true`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.VersionLessEqual



#### 详细描述



#### 定义：

`VersionLessEqual(v1, v2 string) bool  doc:VersionLessEqual v1 小于等于 v2 返回true`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### str.f

相当于 `fmt.Sprintf`

#### 详细描述



#### 定义：

`f(f string, items ...any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strFmt | `string` |   |
| items | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


