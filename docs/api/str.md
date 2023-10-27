# str

|成员函数|函数描述/介绍|
|:------|:--------|
| [str.CalcSSDeep](#calcssdeep) |CalcSSDeep 计算并返回一段文本的模糊哈希值
Example:
```
str.CalcSSDeep("hello")
```
|
| [str.CalcSSDeepStability](#calcssdeepstability) |CalcSSDeepStability 使用模糊哈希算法计算多段文本之间的相似度，返回相似度与错误。传入的文本应该为大文本，即�...|
| [str.CalcSimHash](#calcsimhash) |CalcSimHash 计算并返回一段文本的 SimHash 值
Example:
```
str.CalcSimHash("hello")
```
|
| [str.CalcSimHashStability](#calcsimhashstability) |CalcSimHashStability 使用 SimHash 算法计算多段文本之间的相似度，返回相似度与错误。
Example:
```
p, err = str.CalcSimHashStab...|
| [str.CalcSimilarity](#calcsimilarity) |CalcSimilarity 计算多段文本之间的相似度，根据最长的文本长度选择不同的算法
如果最长的文本长度小于等于 2000，...|
| [str.CalcTextMaxSubStrStability](#calctextmaxsubstrstability) |CalcTextMaxSubStrStability 使用文本子串匹配算法计算多段文本之间的相似度，返回相似度与错误
Example:
```
p, err = str.Cal...|
| [str.Compare](#compare) |Compare 按照ascii码表顺序逐个比较字符串a和b中的每个字符，如果a==b，则返回0，如果a&lt;b，则返回-1，如果a&gt;b，�...|
| [str.Contains](#contains) |Contains 判断字符串s是否包含substr
Example:
```
str.Contains("hello yakit", "yak") // true
```
|
| [str.ContainsAny](#containsany) |ContainsAny 判断字符串s是否包含chars中的任意字符
Example:
```
str.ContainsAny("hello yak", "ly") // true
str.ContainsAny("hello yak", "...|
| [str.Count](#count) |Count 返回字符串s中substr出现的次数
Example:
```
str.Count("hello yak", "l") // 2
```
|
| [str.EndsWith](#endswith) |EndsWith / HasSuffix 判断字符串s是否以suffix结尾
Example:
```
str.EndsWith("Hello Yak", "Yak") // true
str.EndsWith("Hello Yak", "Hello") //...|
| [str.EqualFold](#equalfold) |EqualFold 判断字符串s和t是否相等，忽略大小写
Example:
```
str.EqualFold("hello Yak", "HELLO YAK") // true
```
|
| [str.ExtractBodyFromHTTPResponseRaw](#extractbodyfromhttpresponseraw) |ExtractBodyFromHTTPResponseRaw 从原始 HTTP 响应报文中提取 body
Example:
```
body, err = str.ExtractBodyFromHTTPResponseRaw(b"HTTP/1.1 200 OK...|
| [str.ExtractChineseIDCards](#extractchineseidcards) ||
| [str.ExtractDomain](#extractdomain) |ExtractDomain 尝试提取字符串中的域名并返回
Example:
```
str.ExtractDomain("hello yak") // []
str.ExtractDomain("hello yaklang.com or yak...|
| [str.ExtractHost](#extracthost) |ExtractHost 尝试从字符串中解析出host和port，并返回host
Example:
```
str.ExtractHost("127.0.0.1:8888") // 127.0.0.1
str.ExtractHost("htt...|
| [str.ExtractJson](#extractjson) |ExtractJson 尝试提取字符串中的 JSON 并进行修复返回
Example:
```
str.ExtractJson("hello yak") // []
str.ExtractJson(`{"hello": "yak"}`)...|
| [str.ExtractJsonWithRaw](#extractjsonwithraw) |ExtractJsonWithRaw 尝试提取字符串中的 JSON 并返回，第一个返回值返回经过修复后的JSON字符串数组，第二个返回值返�...|
| [str.ExtractRootDomain](#extractrootdomain) |ExtractRootDomain 尝试提取字符串中的根域名并返回
Example:
```
str.ExtractRootDomain("hello yak") // []
str.ExtractRootDomain("hello www...|
| [str.ExtractStrContext](#extractstrcontext) |ExtractStrContext 从字符串raw中提取一组关键字res上下文的内容，上下文的长度是512个字符确定。
Example:
```
str.ExtractSt...|
| [str.ExtractTitle](#extracttitle) |ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回
Example:
```
str.ExtractTitle("hello yak") // ""
s...|
| [str.ExtractURLFromHTTPRequest](#extracturlfromhttprequest) |ExtractURLFromHTTPRequest 从 HTTP 请求结构体中提取 URL，返回URL结构体与错误
Example:
```
v, err = http.Raw("GET / HTTP/1.1\r\nHost: ...|
| [str.ExtractURLFromHTTPRequestRaw](#extracturlfromhttprequestraw) |ExtractURLFromHTTPRequestRaw 从原始 HTTP 请求报文中提取 URL，返回URL结构体与错误
Example:
```
url, err := str.ExtractURLFromHTTPReq...|
| [str.Fields](#fields) |Fields 返回将字符串s按照空白字符（'\t', '\n', '\v', '\f', '\r', ' ', 0x85, 0xA0）分割的字符串切片
Example:
```
str.Fields("hello...|
| [str.FixHTTPRequest](#fixhttprequest) |FixHTTPRequest 尝试对传入的请求进行修复，并返回修复后的请求
Example:
```
fixedRequest = str.FixHTTPRequest(b"GET / HTTP/1.1\r\nH...|
| [str.FixHTTPResponse](#fixhttpresponse) |FixHTTPResponse 尝试对传入的响应进行修复，并返回修复后的响应，响应体和错误
Example:
```
fixedResponse, body, err = str.Fi...|
| [str.Grok](#grok) |Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-be...|
| [str.HasPrefix](#hasprefix) |StartsWith / HasPrefix 判断字符串s是否以prefix开头
Example:
```
str.StartsWith("Hello Yak", "Hello") // true
str.StartsWith("Hello Yak", "Ya...|
| [str.HasSuffix](#hassuffix) |EndsWith / HasSuffix 判断字符串s是否以suffix结尾
Example:
```
str.EndsWith("Hello Yak", "Yak") // true
str.EndsWith("Hello Yak", "Hello") //...|
| [str.HostPort](#hostport) |HostPort 将 host 和 port 拼接成 host:port 的形式
Example:
```
str.HostPort("yaklang.com", 443) // yaklang.com:443
```
|
| [str.IPv4ToCClassNetwork](#ipv4tocclassnetwork) |IPv4ToCClassNetwork 尝试从一个 IPv4 地址中获取 C 类网络地址，并返回错误
Example:
```
network, err = str.IPv4ToCClassNetwork("192....|
| [str.Index](#index) |Index 返回字符串s中substr第一次出现的位置的索引，如果字符串中不存在substr，则返回-1
Example:
```
str.Index("hello yak",...|
| [str.IndexAny](#indexany) |IndexAny 返回字符串s中chars任意字符首次出现的位置的索引，如果字符串中不存在chars，则返回-1
Example:
```
str.IndexAny...|
| [str.IndexByte](#indexbyte) |IndexByte 返回字符串s中第一个等于c的字符的索引，如果字符串中不存在c，则返回-1
Example:
```
str.IndexByte("hello yak", '...|
| [str.Intersect](#intersect) |Intersect / IntersectString 返回两个字符串切片之间的交集
Example:
```
str.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]
```
|
| [str.IntersectString](#intersectstring) |Intersect / IntersectString 返回两个字符串切片之间的交集
Example:
```
str.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]
```
|
| [str.IsAlNum](#isalnum) ||
| [str.IsAlpha](#isalpha) ||
| [str.IsAlphaNum](#isalphanum) ||
| [str.IsBase64Value](#isbase64value) ||
| [str.IsCaptchaField](#iscaptchafield) ||
| [str.IsDigit](#isdigit) ||
| [str.IsHtmlResponse](#ishtmlresponse) ||
| [str.IsHttpURL](#ishttpurl) |IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https
|
| [str.IsIPv4](#isipv4) |IsIPv4 判断字符串是否是 IPv4 地址
Example:
```
str.IsIPv4("::1") // false
str.IsIPv4("127.0.0.1") // true
```
|
| [str.IsIPv6](#isipv6) |IsIPv6 判断字符串是否是 IPv6 地址
Example:
```
str.IsIPv6("::1") // true
str.IsIPv6("127.0.0.1") // false
```
|
| [str.IsJSONPParam](#isjsonpparam) ||
| [str.IsJsonResponse](#isjsonresponse) ||
| [str.IsMD5Value](#ismd5value) ||
| [str.IsPasswordField](#ispasswordfield) ||
| [str.IsPlainBase64Value](#isplainbase64value) ||
| [str.IsRedirectParam](#isredirectparam) |根据 key 的名字猜测是否是用于重定向的参数
|
| [str.IsSQLColumnField](#issqlcolumnfield) ||
| [str.IsSensitiveJson](#issensitivejson) ||
| [str.IsSensitiveTokenField](#issensitivetokenfield) ||
| [str.IsServerError](#isservererror) ||
| [str.IsSha256Value](#issha256value) ||
| [str.IsStrongPassword](#isstrongpassword) |IsStrongPassword 判断字符串是否为强密码，强密码的定义为：长度大于8，同时包含特殊字符、小写字母、大写字母、...|
| [str.IsTLSServer](#istlsserver) ||
| [str.IsUrlParam](#isurlparam) ||
| [str.IsUrlPath](#isurlpath) |根据 value 猜测是否是一个 url path
|
| [str.IsUsernameField](#isusernamefield) ||
| [str.IsXmlParam](#isxmlparam) ||
| [str.IsXmlRequest](#isxmlrequest) ||
| [str.IsXmlValue](#isxmlvalue) ||
| [str.Join](#join) |Join 将i中的元素用d连接，如果传入的参数不是字符串，会自动将其转为字符串，再将其用d连接。如果连接失败，�...|
| [str.JsonToMap](#jsontomap) |JsonToMap 将 json 字符串 line 解析为 map
Example:
```
str.JsonToMap(`{"a":1,"b":2}`) // map[a:1 b:2]
```
|
| [str.JsonToMapList](#jsontomaplist) |JsonToMapList 将 json 字符串 line 解析为 map 列表
Example:
```
str.JsonToMapList(`{"a":1,"b":2} {"c":3, "d":4}`) // [map[a:1 b:2] map[c:3 d:4...|
| [str.LastIndex](#lastindex) |LastIndex 返回字符串s中substr最后一次出现的位置的索引，如果字符串中不存在substr，则返回-1
Example:
```
str.LastIndex("...|
| [str.LastIndexAny](#lastindexany) |LastIndexAny 返回字符串s中chars任意字符最后一次出现的位置的索引，如果字符串中不存在chars，则返回-1
Example:
```
st...|
| [str.LastIndexByte](#lastindexbyte) |LastIndexByte 返回字符串s中最后一个等于c的字符的索引，如果字符串中不存在c，则返回-1
Example:
```
str.LastIndexByte("he...|
| [str.LowerAndTrimSpace](#lowerandtrimspace) |LowerAndTrimSpace 将字符串raw转换为小写并去除前后空白字符
Example:
```
str.LowerAndTrimSpace("  Hello  ") // "hello"
```
|
| [str.MatchAllOfGlob](#matchallofglob) |MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果所有的glob模式都匹配成功，则返回 true，否...|
| [str.MatchAllOfRegexp](#matchallofregexp) |MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果所有的正则表达式都匹配成功，则返回 true�...|
| [str.MatchAllOfSubString](#matchallofsubstring) |MatchAllOfSubString 尝试将 i 转换为字符串，然后判断所有子串 subStr 是否都存在于 i 中，如果都存在则返回 true，否则...|
| [str.MatchAnyOfGlob](#matchanyofglob) |MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否...|
| [str.MatchAnyOfRegexp](#matchanyofregexp) |MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true�...|
| [str.MatchAnyOfSubString](#matchanyofsubstring) |MatchAllOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i...|
| [str.MergeUrlFromHTTPRequest](#mergeurlfromhttprequest) |MergeUrlFromHTTPRequest 将传入的 target 与 原始 HTTP 请求报文中的 URL 进行合并，并返回合并后的 URL
Example:
```
url = str.Mer...|
| [str.NewFilter](#newfilter) |NewFilter 创建一个默认的字符串布谷鸟过滤器，布谷鸟过滤器用于判断一个元素是否在一个集合中，它存在极低的�...|
| [str.NewReader](#newreader) |NewReader returns a new Reader reading from s.
It is similar to bytes.NewBufferString but more efficient and read-only.
|
| [str.ParamsGetOr](#paramsgetor) |ParamsGetOr 从 map 中获取 key 对应的值，如果不存在则返回 defaultValue
Example:
```
str.ParamsGetOr({"a": "1"}, "a", "2") // 1
str.Par...|
| [str.ParseBytesToHTTPRequest](#parsebytestohttprequest) |ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求
Example:
```
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.co...|
| [str.ParseBytesToHTTPResponse](#parsebytestohttpresponse) |ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应
Example:
```
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Lengt...|
| [str.ParseStringToCClassHosts](#parsestringtocclasshosts) |ParseStringToCClassHosts 尝试从给定的字符串中解析Host，再将其转为 C 类网段，用,分隔
Example:
```
str.ParseStringToCClassHosts...|
| [str.ParseStringToHTTPRequest](#parsestringtohttprequest) |ParseStringToHTTPRequest 将字符串解析为 HTTP 请求
Example:
```
req, err = str.ParseStringToHTTPRequest("GET / HTTP/1.1\r\nHost: example.com\r...|
| [str.ParseStringToHTTPResponse](#parsestringtohttpresponse) |ParseStringToHTTPResponse 将字符串解析为 HTTP 响应
Example:
```
res, err := str.ParseStringToHTTPResponse("HTTP/1.1 200 OK\r\nContent-Length:...|
| [str.ParseStringToHostPort](#parsestringtohostport) |ParseStringToHostPort 尝试从字符串中解析出host和port，并与错误一起返回
Example:
```
host, port, err = str.ParseStringToHostPort("1...|
| [str.ParseStringToHosts](#parsestringtohosts) |ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号分隔，并且会解析 CIDR 网段
Example:
```
str.ParseStringToHosts("...|
| [str.ParseStringToLines](#parsestringtolines) |ParseStringToLines 将字符串按换行符(\n)分割成字符串数组，并去除BOM头和空行
Example:
```
str.ParseStringToLines("Hello World\nH...|
| [str.ParseStringToPorts](#parsestringtoports) |ParseStringToPorts 将字符串解析成 Port 列表， Port 可以以逗号分隔，并且会解析-分隔的范围
Example:
```
str.ParseStringToPor...|
| [str.ParseStringToUrls](#parsestringtourls) |ParseStringToUrls 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口
Example:
```
str.ParseStringToUrls("yaklang.co...|
| [str.ParseStringToUrlsWith3W](#parsestringtourlswith3w) |ParseStringToUrlsWith3W 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口，还会补全域名前的 www 前缀
Ex...|
| [str.ParseStringUrlToUrlInstance](#parsestringurltourlinstance) |ParseStringUrlToUrlInstance 将字符串 url 解析为 URL 结构体并返回错误
Example:
```
str.ParseStringUrlToUrlInstance("https://yaklang.com/...|
| [str.ParseStringUrlToWebsiteRootPath](#parsestringurltowebsiterootpath) |ParseStringUrlToWebsiteRootPath 将字符串 url 解析为其根路径的URL
Example:
```
str.ParseStringUrlToWebsiteRootPath("https://yaklang.com/abc...|
| [str.PathJoin](#pathjoin) |PathJoin 将传入的文件路径进行拼接并返回
Example:
```
str.PathJoin("/var", "www", "html") // in *unix: "/var/www/html"    in Windows: \v...|
| [str.RandSecret](#randsecret) |RandSecret 返回在所有可见ascii字符表中随机挑选 n 个字符组成的密码字符串，这个密码经过str.IsStrongPassword验证，即...|
| [str.RandStr](#randstr) |RandStringBytes 返回在大小写字母表中随机挑选 n 个字符组成的字符串
Example:
```
str.RandStr(10)
```
|
| [str.RegexpMatch](#regexpmatch) |RegexpMatch 使用正则尝试匹配字符串 s，如果匹配成功返回 true，否则返回 false
Example:
```
str.RegexpMatch("^[a-z]+$", "abc") /...|
| [str.RemoveRepeat](#removerepeat) |RemoveRepeat 移除字符串切片slc中的重复元素
Example:
```
str.RemoveRepeat(["hello", "yak", "hello"]) // ["hello", "yak"]
```
|
| [str.Repeat](#repeat) |Repeat 返回将字符串s重复count次的字符串
Example:
```
str.Repeat("hello", 3) // hellohellohello
```
|
| [str.Replace](#replace) |Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串
Example:
```
str.Replace("hello yak", "l", "L", 1) // heLlo yak
```...|
| [str.ReplaceAll](#replaceall) |ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串
Example:
```
str.ReplaceAll("hello yak", "yak", "yakit") // hello...|
| [str.ReplaceHTTPPacketBody](#replacehttppacketbody) |ReplaceHTTPPacketBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文
|
| [str.Split](#split) |Split 将字符串s按照sep分割成字符串切片
Example:
```
str.Split("Hello Yak", " ") // [Hello", "Yak"]
```
|
| [str.SplitAfter](#splitafter) |SplitAfter 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep
Example:
```
str.SplitAfter("Hello-Yak", "-") // [Hello-...|
| [str.SplitAfterN](#splitaftern) |SplitAfterN 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep，最多分为n个元素
Example:
```
str.SplitAfterN("...|
| [str.SplitAndTrim](#splitandtrim) |SplitAndTrim 将字符串s按照sep分割成字符串切片，并且去除每个字符串的前后空白字符
Example:
```
str.SplitAndTrim(" hello y...|
| [str.SplitHTTPHeadersAndBodyFromPacket](#splithttpheadersandbodyfrompacket) |SplitHTTPHeadersAndBodyFromPacket 将传入的 HTTP 报文分割为 headers 和 body，如果传入了hook，则会在每次读取到一行 header 时...|
| [str.SplitHostsToPrivateAndPublic](#splithoststoprivateandpublic) |SplitHostsToPrivateAndPublic 将 hosts 按照私有 IP 和公有 IP 分开
Example:
```
str.SplitHostsToPrivateAndPublic("127.0.0.1", "8.8.8.8", "10.0...|
| [str.SplitN](#splitn) |SplitN 将字符串s按照sep分割成字符串切片，最多分为n个元素
Example:
```
str.SplitN("Hello-Yak-and-World", "-", 2) // [Hello", "Yak...|
| [str.StartsWith](#startswith) |StartsWith / HasPrefix 判断字符串s是否以prefix开头
Example:
```
str.StartsWith("Hello Yak", "Hello") // true
str.StartsWith("Hello Yak", "Ya...|
| [str.StringContainsAnyOfSubString](#stringcontainsanyofsubstring) |StringContainsAnyOfSubString 判断字符串s中是否包含subs中的任意一个子串
Example:
```
str.StringContainsAnyOfSubString("hello yak", ["...|
| [str.StringSliceContains](#stringslicecontains) |StringSliceContains 判断字符串切片s中是否包含raw，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包...|
| [str.StringSliceContainsAll](#stringslicecontainsall) |StringSliceContainsAll 判断字符串切片s中是否完全包含elements中的所有元素，对于非字符串的切片，会尝试将其元素转�...|
| [str.Subtract](#subtract) |Subtract 返回两个字符串切片的差集
Example:
```
str.Subtract(["1", "2", "3"], ["3", "4", "5"]) // ["1", "2"]
```
|
| [str.Title](#title) |Title 返回字符串s的标题化版本，即所有单词的首字母都是大写的
Example:
```
str.Title("hello yak") // Hello Yak
```
|
| [str.ToJsonIndentStr](#tojsonindentstr) |ToJsonIndentStr 将v转换为格式化的JSON字符串并返回，如果转换失败，则返回空字符串
Example:
```
str.ToJsonIndentStr({"hello"...|
| [str.ToLower](#tolower) |ToLower 返回字符串s的小写形式
Example:
```
str.ToLower("HELLO YAK") // hello yak
```
|
| [str.ToLowerSpecial](#tolowerspecial) |ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to their
lower case using the case mapping specified by c.
|
| [str.ToStringSlice](#tostringslice) |ToStringSlice 将任意类型的数据转换为字符串切片
Example:
```
str.ToStringSlice("hello") // ["hello"]
str.ToStringSlice([1, 2]) // ["1",...|
| [str.ToTitle](#totitle) |ToTitle 返回字符串s的标题化版本，其中所有Unicode字母都会被转换为其大写
Example:
```
str.ToTitle("hello yak") // HELLO YAK
`...|
| [str.ToTitleSpecial](#totitlespecial) |ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to their
Unicode title case, giving priority to the special casing rules...|
| [str.ToUpper](#toupper) |ToUpper 返回字符串s的大写形式
Example:
```
str.ToUpper("hello yak") // HELLO YAK
```
|
| [str.ToUpperSpecial](#toupperspecial) |ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to their
upper case using the case mapping specified by c.
|
| [str.ToValidUTF8](#tovalidutf8) |ToValidUTF8 返回将字符串s中无效的UTF-8编码替换为replacement的字符串
Example:
```

str.ToValidUTF8("hello yak", "?") // hello yak
``...|
| [str.Trim](#trim) |Trim 返回将字符串s两侧所有包含cutset字符串中的字符都去掉的字符串
Example:
```
str.Trim("Hello Yak", "Hk") // ello Ya
str.Tri...|
| [str.TrimLeft](#trimleft) |TrimLeft 返回将字符串s左侧所有包含cutset字符串中的字符都去掉的字符串
Example:
```
str.TrimLeft("Hello Yak", "H") // ello Yak...|
| [str.TrimPrefix](#trimprefix) |TrimPrefix 返回将字符串s前缀prefix去掉的字符串
Example:
```
str.TrimPrefix("Hello Yak", "Hello") //  Yak
str.TrimPrefix("HelloYak", "Hel...|
| [str.TrimRight](#trimright) |TrimRight 返回将字符串s右侧所有包含cutset字符串中的字符都去掉的字符串
Example:
```
str.TrimRight("Hello Yak", "k") // Hello ...|
| [str.TrimSpace](#trimspace) |TrimSpace 返回将字符串s两侧所有的空白字符都去掉的字符串
Example:
```
str.TrimSpace(" \t\n Hello Yak \n\t\r\n") // Hello Yak
```
|
| [str.TrimSuffix](#trimsuffix) |TrimSuffix 返回将字符串s后缀suffix去掉的字符串
Example:
```
str.TrimSuffix("Hello Yak", "ak") // Hello Y
str.TrimSuffix("HelloYak", "Yak...|
| [str.UrlJoin](#urljoin) |UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误
Example:
```
newURL, err = str.UrlJoin("h...|
| [str.VersionEqual](#versionequal) |VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false
Example:
```
str.VersionEqual...|
| [str.VersionGreater](#versiongreater) |VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false
Example:
```
str.VersionGre...|
| [str.VersionGreaterEqual](#versiongreaterequal) |VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false
Example:
```
str...|
| [str.VersionLess](#versionless) |VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false
Example:
```
str.VersionLess("...|
| [str.VersionLessEqual](#versionlessequal) |VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false
Example:
```
str.Ve...|
| [str.f](#f) |f 用于对字符串进行格式化
Example:
```

str.f("hello %s", "yak") // hello yak
```
|


## 函数定义
### calcssdeep

#### 详细描述
CalcSSDeep 计算并返回一段文本的模糊哈希值
Example:
```
str.CalcSSDeep("hello")
```


#### 定义

`CalcSSDeep(raw []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### calcssdeepstability

#### 详细描述
CalcSSDeepStability 使用模糊哈希算法计算多段文本之间的相似度，返回相似度与错误。传入的文本应该为大文本，即长度大于 30 kb。
Example:
```
p, err = str.CalcSSDeepStability(str.RandStr(100000), str.RandStr(100000))
```


#### 定义

`CalcSSDeepStability(req ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |
| r2 | `error` |   |


### calcsimhash

#### 详细描述
CalcSimHash 计算并返回一段文本的 SimHash 值
Example:
```
str.CalcSimHash("hello")
```


#### 定义

`CalcSimHash(raw []byte) uint64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `uint64` |   |


### calcsimhashstability

#### 详细描述
CalcSimHashStability 使用 SimHash 算法计算多段文本之间的相似度，返回相似度与错误。
Example:
```
p, err = str.CalcSimHashStability("hello", "hello world") // p = 0.96484375
```


#### 定义

`CalcSimHashStability(req ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |
| r2 | `error` |   |


### calcsimilarity

#### 详细描述
CalcSimilarity 计算多段文本之间的相似度，根据最长的文本长度选择不同的算法
如果最长的文本长度小于等于 2000，使用文本子串匹配算法
如果最短的文本长度大于等于 30000，使用模糊哈希算法
如果上述算法出现错误，则使用 SimHash 算法
Example:
```
str.CalcSimilarity("hello", "hello world") // 0.625
```


#### 定义

`CalcSimilarity(raw ...[]byte) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### calctextmaxsubstrstability

#### 详细描述
CalcTextMaxSubStrStability 使用文本子串匹配算法计算多段文本之间的相似度，返回相似度与错误
Example:
```
p, err = str.CalcTextMaxSubStrStability("hello", "hello world") // p = 0.625
```


#### 定义

`CalcTextMaxSubStrStability(raw ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |
| r2 | `error` |   |


### compare

#### 详细描述
Compare 按照ascii码表顺序逐个比较字符串a和b中的每个字符，如果a==b，则返回0，如果a&lt;b，则返回-1，如果a&gt;b，则返回1
Example:
```
str.Compare("hello yak", "hello yak") // 0
str.Compare("hello yak", "hello") // 1
str.Compare("hello", "hello yak") // -1
```


#### 定义

`Compare(a string, b string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` |   |
| b | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### contains

#### 详细描述
Contains 判断字符串s是否包含substr
Example:
```
str.Contains("hello yakit", "yak") // true
```


#### 定义

`Contains(s string, substr string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### containsany

#### 详细描述
ContainsAny 判断字符串s是否包含chars中的任意字符
Example:
```
str.ContainsAny("hello yak", "ly") // true
str.ContainsAny("hello yak", "m") // false
```


#### 定义

`ContainsAny(s string, chars string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| chars | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### count

#### 详细描述
Count 返回字符串s中substr出现的次数
Example:
```
str.Count("hello yak", "l") // 2
```


#### 定义

`Count(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### endswith

#### 详细描述
EndsWith / HasSuffix 判断字符串s是否以suffix结尾
Example:
```
str.EndsWith("Hello Yak", "Yak") // true
str.EndsWith("Hello Yak", "Hello") // false
```


#### 定义

`EndsWith(s string, suffix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| suffix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### equalfold

#### 详细描述
EqualFold 判断字符串s和t是否相等，忽略大小写
Example:
```
str.EqualFold("hello Yak", "HELLO YAK") // true
```


#### 定义

`EqualFold(s string, t string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### extractbodyfromhttpresponseraw

#### 详细描述
ExtractBodyFromHTTPResponseRaw 从原始 HTTP 响应报文中提取 body
Example:
```
body, err = str.ExtractBodyFromHTTPResponseRaw(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // body = b"ok"
```


#### 定义

`ExtractBodyFromHTTPResponseRaw(res []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### extractchineseidcards

#### 详细描述


#### 定义

`ExtractChineseIDCards(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractdomain

#### 详细描述
ExtractDomain 尝试提取字符串中的域名并返回
Example:
```
str.ExtractDomain("hello yak") // []
str.ExtractDomain("hello yaklang.com or yaklang.io") // ["yaklang.com", "yaklang.io"]
```


#### 定义

`ExtractDomain(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extracthost

#### 详细描述
ExtractHost 尝试从字符串中解析出host和port，并返回host
Example:
```
str.ExtractHost("127.0.0.1:8888") // 127.0.0.1
str.ExtractHost("https://example.com") // example.com
```


#### 定义

`ExtractHost(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### extractjson

#### 详细描述
ExtractJson 尝试提取字符串中的 JSON 并进行修复返回
Example:
```
str.ExtractJson("hello yak") // []
str.ExtractJson(`{"hello": "yak"}`) // [{"hello": "yak"}]
```


#### 定义

`ExtractJson(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractjsonwithraw

#### 详细描述
ExtractJsonWithRaw 尝试提取字符串中的 JSON 并返回，第一个返回值返回经过修复后的JSON字符串数组，第二个返回值返回原始JSON字符串数组(如果修复失败)
Example:
```
str.ExtractJsonWithRaw("hello yak") // [], []
str.ExtractJsonWithRaw(`{"hello": "yak"}`) // [{"hello": "yak"}], []
```


#### 定义

`ExtractJsonWithRaw(i any) ([]string, []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |
| r2 | `[]string` |   |


### extractrootdomain

#### 详细描述
ExtractRootDomain 尝试提取字符串中的根域名并返回
Example:
```
str.ExtractRootDomain("hello yak") // []
str.ExtractRootDomain("hello www.yaklang.com or www.yaklang.io") // ["yaklang.com", "yaklang.io"]
```


#### 定义

`ExtractRootDomain(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractstrcontext

#### 详细描述
ExtractStrContext 从字符串raw中提取一组关键字res上下文的内容，上下文的长度是512个字符确定。
Example:
```
str.ExtractStrContext("hello yak", ["hello"]) // ["hello yak"]
```


#### 定义

`ExtractStrContext(raw string, res []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |
| res | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extracttitle

#### 详细描述
ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回
Example:
```
str.ExtractTitle("hello yak") // ""
str.ExtractTitle("&lt;title&gt;hello yak&lt;/title&gt;") // "hello yak"
```


#### 定义

`ExtractTitle(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### extracturlfromhttprequest

#### 详细描述
ExtractURLFromHTTPRequest 从 HTTP 请求结构体中提取 URL，返回URL结构体与错误
Example:
```
v, err = http.Raw("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
url, err = str.ExtractURLFromHTTPRequest(v, false)
```


#### 定义

`ExtractURLFromHTTPRequest(r *http.Request, https bool) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*http.Request` |   |
| https | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` |   |
| r2 | `error` |   |


### extracturlfromhttprequestraw

#### 详细描述
ExtractURLFromHTTPRequestRaw 从原始 HTTP 请求报文中提取 URL，返回URL结构体与错误
Example:
```
url, err := str.ExtractURLFromHTTPRequestRaw(b"GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", false)
```


#### 定义

`ExtractURLFromHTTPRequestRaw(req []byte, isHttps bool) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `[]byte` |   |
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` |   |
| r2 | `error` |   |


### fields

#### 详细描述
Fields 返回将字符串s按照空白字符（'\t', '\n', '\v', '\f', '\r', ' ', 0x85, 0xA0）分割的字符串切片
Example:
```
str.Fields("hello world\nhello yak\tand\vyakit") // [hello", "world", "hello", "yak", "and", "yakit"]
```


#### 定义

`Fields(s string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### fixhttprequest

#### 详细描述
FixHTTPRequest 尝试对传入的请求进行修复，并返回修复后的请求
Example:
```
fixedRequest = str.FixHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`FixHTTPRequest(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### fixhttpresponse

#### 详细描述
FixHTTPResponse 尝试对传入的响应进行修复，并返回修复后的响应，响应体和错误
Example:
```
fixedResponse, body, err = str.FixHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=gbk\r\n\r\n&lt;html&gt;你好&lt;/html&gt;")
```


#### 定义

`FixHTTPResponse(raw []byte) (rsp []byte, body []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` |   |
| body | `[]byte` |   |
| _ | `error` |   |


### grok

#### 详细描述
Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。
Example:
```
str.Grok("04/18-00:59:45.385191", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}") // map[HOUR:[00] MINUTE:[59] SECOND:[45.385191] day:[18] month:[04] time:[00:59:45.385191]]
```


#### 定义

`Grok(line string, rule string) GrokResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` |   |
| rule | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrokResult` |   |


### hasprefix

#### 详细描述
StartsWith / HasPrefix 判断字符串s是否以prefix开头
Example:
```
str.StartsWith("Hello Yak", "Hello") // true
str.StartsWith("Hello Yak", "Yak") // false
```


#### 定义

`HasPrefix(s string, prefix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### hassuffix

#### 详细描述
EndsWith / HasSuffix 判断字符串s是否以suffix结尾
Example:
```
str.EndsWith("Hello Yak", "Yak") // true
str.EndsWith("Hello Yak", "Hello") // false
```


#### 定义

`HasSuffix(s string, suffix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| suffix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### hostport

#### 详细描述
HostPort 将 host 和 port 拼接成 host:port 的形式
Example:
```
str.HostPort("yaklang.com", 443) // yaklang.com:443
```


#### 定义

`HostPort(host string, port any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### ipv4tocclassnetwork

#### 详细描述
IPv4ToCClassNetwork 尝试从一个 IPv4 地址中获取 C 类网络地址，并返回错误
Example:
```
network, err = str.IPv4ToCClassNetwork("192.168.0.1") // network = "192.168.0.0/24", err = nil
```


#### 定义

`IPv4ToCClassNetwork(s string) (network string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |
| err | `error` |   |


### index

#### 详细描述
Index 返回字符串s中substr第一次出现的位置的索引，如果字符串中不存在substr，则返回-1
Example:
```
str.Index("hello yak", "yak") // 6
str.Index("hello world", "yak") // -1
```


#### 定义

`Index(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### indexany

#### 详细描述
IndexAny 返回字符串s中chars任意字符首次出现的位置的索引，如果字符串中不存在chars，则返回-1
Example:
```
str.IndexAny("Hello world", "world") // 2，因为l在第三个字符中首次出现
str.IndexAny("Hello World", "Yak") // -1
```


#### 定义

`IndexAny(s string, chars string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| chars | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### indexbyte

#### 详细描述
IndexByte 返回字符串s中第一个等于c的字符的索引，如果字符串中不存在c，则返回-1
Example:
```
str.IndexByte("hello yak", 'y') // 6
str.IndexByte("hello yak", 'm') // -1
```


#### 定义

`IndexByte(s string, c byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| c | `byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### intersect

#### 详细描述
Intersect / IntersectString 返回两个字符串切片之间的交集
Example:
```
str.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]
```


#### 定义

`Intersect(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` |   |
| y | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### intersectstring

#### 详细描述
Intersect / IntersectString 返回两个字符串切片之间的交集
Example:
```
str.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]
```


#### 定义

`IntersectString(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` |   |
| y | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### isalnum

#### 详细描述


#### 定义

`IsAlNum(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isalpha

#### 详细描述


#### 定义

`IsAlpha(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isalphanum

#### 详细描述


#### 定义

`IsAlphaNum(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isbase64value

#### 详细描述


#### 定义

`IsBase64Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### iscaptchafield

#### 详细描述


#### 定义

`IsCaptchaField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isdigit

#### 详细描述


#### 定义

`IsDigit(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ishtmlresponse

#### 详细描述


#### 定义

`IsHtmlResponse(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ishttpurl

#### 详细描述
IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https


#### 定义

`IsHttpURL(v any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isipv4

#### 详细描述
IsIPv4 判断字符串是否是 IPv4 地址
Example:
```
str.IsIPv4("::1") // false
str.IsIPv4("127.0.0.1") // true
```


#### 定义

`IsIPv4(raw string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isipv6

#### 详细描述
IsIPv6 判断字符串是否是 IPv6 地址
Example:
```
str.IsIPv6("::1") // true
str.IsIPv6("127.0.0.1") // false
```


#### 定义

`IsIPv6(raw string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isjsonpparam

#### 详细描述


#### 定义

`IsJSONPParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isjsonresponse

#### 详细描述


#### 定义

`IsJsonResponse(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ismd5value

#### 详细描述


#### 定义

`IsMD5Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ispasswordfield

#### 详细描述


#### 定义

`IsPasswordField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isplainbase64value

#### 详细描述


#### 定义

`IsPlainBase64Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isredirectparam

#### 详细描述
根据 key 的名字猜测是否是用于重定向的参数


#### 定义

`IsRedirectParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issqlcolumnfield

#### 详细描述


#### 定义

`IsSQLColumnField(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issensitivejson

#### 详细描述


#### 定义

`IsSensitiveJson(data []byte) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issensitivetokenfield

#### 详细描述


#### 定义

`IsSensitiveTokenField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isservererror

#### 详细描述


#### 定义

`IsServerError(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issha256value

#### 详细描述


#### 定义

`IsSha256Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isstrongpassword

#### 详细描述
IsStrongPassword 判断字符串是否为强密码，强密码的定义为：长度大于8，同时包含特殊字符、小写字母、大写字母、数字
Example:
```
str.IsStrongPassword("12345678") // false
str.IsStrongPassword("12345678a") // false
str.IsStrongPassword("12345678aA") // false
str.IsStrongPassword("12345678aA!") // true
```


#### 定义

`IsStrongPassword(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### istlsserver

#### 详细描述


#### 定义

`IsTLSServer(addr string, proxies ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isurlparam

#### 详细描述


#### 定义

`IsUrlParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isurlpath

#### 详细描述
根据 value 猜测是否是一个 url path


#### 定义

`IsUrlPath(v any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isusernamefield

#### 详细描述


#### 定义

`IsUsernameField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isxmlparam

#### 详细描述


#### 定义

`IsXmlParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isxmlrequest

#### 详细描述


#### 定义

`IsXmlRequest(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isxmlvalue

#### 详细描述


#### 定义

`IsXmlValue(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### join

#### 详细描述
Join 将i中的元素用d连接，如果传入的参数不是字符串，会自动将其转为字符串，再将其用d连接。如果连接失败，则会返回i的字符串形式。
Example:
```
str.Join([]string{"hello", "yak"}, " ") // hello yak
str.Join([]int{1, 2, 3}, " ") // 1 2 3
```


#### 定义

`Join(i any, d any) (defaultResult string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| d | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| defaultResult | `string` |   |


### jsontomap

#### 详细描述
JsonToMap 将 json 字符串 line 解析为 map
Example:
```
str.JsonToMap(`{"a":1,"b":2}`) // map[a:1 b:2]
```


#### 定义

`JsonToMap(line string) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### jsontomaplist

#### 详细描述
JsonToMapList 将 json 字符串 line 解析为 map 列表
Example:
```
str.JsonToMapList(`{"a":1,"b":2} {"c":3, "d":4}`) // [map[a:1 b:2] map[c:3 d:4]]
```


#### 定义

`JsonToMapList(line string) []map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]string` |   |


### lastindex

#### 详细描述
LastIndex 返回字符串s中substr最后一次出现的位置的索引，如果字符串中不存在substr，则返回-1
Example:
```
str.LastIndex("hello yak", "l") // 3
str.LastIndex("hello yak", "m") // -1
```


#### 定义

`LastIndex(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### lastindexany

#### 详细描述
LastIndexAny 返回字符串s中chars任意字符最后一次出现的位置的索引，如果字符串中不存在chars，则返回-1
Example:
```
str.LastIndexAny("hello yak", "ly") // 6
str.LastIndexAny("hello yak", "m") // -1
```


#### 定义

`LastIndexAny(s string, chars string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| chars | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### lastindexbyte

#### 详细描述
LastIndexByte 返回字符串s中最后一个等于c的字符的索引，如果字符串中不存在c，则返回-1
Example:
```
str.LastIndexByte("hello yak", 'l') // 3
str.LastIndexByte("hello yak", 'm') // -1
```


#### 定义

`LastIndexByte(s string, c byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| c | `byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### lowerandtrimspace

#### 详细描述
LowerAndTrimSpace 将字符串raw转换为小写并去除前后空白字符
Example:
```
str.LowerAndTrimSpace("  Hello  ") // "hello"
```


#### 定义

`LowerAndTrimSpace(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### matchallofglob

#### 详细描述
MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果所有的glob模式都匹配成功，则返回 true，否则返回 false
Example:
```
str.MatchAllOfGlob("abc", "a*", "?b?", "[a-z]?c") // true
```


#### 定义

`MatchAllOfGlob(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchallofregexp

#### 详细描述
MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果所有的正则表达式都匹配成功，则返回 true，否则返回 false
Example:
```
str.MatchAllOfRegexp("abc", "a.+", ".?b.?", "\\w{2}c") // true
```


#### 定义

`MatchAllOfRegexp(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchallofsubstring

#### 详细描述
MatchAllOfSubString 尝试将 i 转换为字符串，然后判断所有子串 subStr 是否都存在于 i 中，如果都存在则返回 true，否则返回 false，此函数忽略大小写
Example:
```
str.MatchAllOfSubString("abc", "a", "b", "c") // true
```


#### 定义

`MatchAllOfSubString(i any, subStr ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| subStr | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchanyofglob

#### 详细描述
MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否则返回 false
Example:
```
str.MatchAnyOfGlob("abc", "a*", "??b", "[^a-z]?c") // true
```


#### 定义

`MatchAnyOfGlob(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchanyofregexp

#### 详细描述
MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true，否则返回 false
Example:
```
str.MatchAnyOfRegexp("abc", "a.+", "Ab.?", ".?bC") // true
```


#### 定义

`MatchAnyOfRegexp(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchanyofsubstring

#### 详细描述
MatchAllOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i 中则返回 true，否则返回 false，此函数忽略大小写
Example:
```
str.MatchAnyOfSubString("abc", "a", "z", "x") // true
```


#### 定义

`MatchAnyOfSubString(i any, subStr ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| subStr | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### mergeurlfromhttprequest

#### 详细描述
MergeUrlFromHTTPRequest 将传入的 target 与 原始 HTTP 请求报文中的 URL 进行合并，并返回合并后的 URL
Example:
```
url = str.MergeUrlFromHTTPRequest(b"GET /z HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", "/a/b", true) // url = "https://www.yaklang.com/z/a/b"
```


#### 定义

`MergeUrlFromHTTPRequest(rawRequest []byte, target string, isHttps bool) (newURL string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rawRequest | `[]byte` |   |
| target | `string` |   |
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newURL | `string` |   |


### newfilter

#### 详细描述
NewFilter 创建一个默认的字符串布谷鸟过滤器，布谷鸟过滤器用于判断一个元素是否在一个集合中，它存在极低的假阳性（即说存在的元素实际上不存在），通常这个集合中的元素数量非常大才会使用布谷鸟过滤器。
Example:
```
f = str.NewFilter()
f.Insert("hello")
f.Exist("hello") // true
```


#### 定义

`NewFilter() *StringFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*StringFilter` |   |


### newreader

#### 详细描述
NewReader returns a new Reader reading from s.
It is similar to bytes.NewBufferString but more efficient and read-only.


#### 定义

`NewReader(s string) *Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reader` |   |


### paramsgetor

#### 详细描述
ParamsGetOr 从 map 中获取 key 对应的值，如果不存在则返回 defaultValue
Example:
```
str.ParamsGetOr({"a": "1"}, "a", "2") // 1
str.ParamsGetOr({"a": "1"}, "b", "2") // 2
```


#### 定义

`ParamsGetOr(i map[string]string, key string, defaultValue string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `map[string]string` |   |
| key | `string` |   |
| defaultValue | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### parsebytestohttprequest

#### 详细描述
ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求
Example:
```
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### parsebytestohttpresponse

#### 详细描述
ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应
Example:
```
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
```


#### 定义

`ParseBytesToHTTPResponse(res []byte) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### parsestringtocclasshosts

#### 详细描述
ParseStringToCClassHosts 尝试从给定的字符串中解析Host，再将其转为 C 类网段，用,分隔
Example:
```
str.ParseStringToCClassHosts("192.168.0.1-255") // 192.168.0.0/24
```


#### 定义

`ParseStringToCClassHosts(targets string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### parsestringtohttprequest

#### 详细描述
ParseStringToHTTPRequest 将字符串解析为 HTTP 请求
Example:
```
req, err = str.ParseStringToHTTPRequest("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`ParseStringToHTTPRequest(raw string) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### parsestringtohttpresponse

#### 详细描述
ParseStringToHTTPResponse 将字符串解析为 HTTP 响应
Example:
```
res, err := str.ParseStringToHTTPResponse("HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
```


#### 定义

`ParseStringToHTTPResponse(res string) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### parsestringtohostport

#### 详细描述
ParseStringToHostPort 尝试从字符串中解析出host和port，并与错误一起返回
Example:
```
host, port, err = str.ParseStringToHostPort("127.0.0.1:8888") // host = "127.0.0.1", port = 8888, err = nil
host, port, err = str.ParseStringToHostPort("https://example.com") // host = "example.com", port = 443, err = nil
host, port, err = str.ParseStringToHostPort("Hello Yak") // host = "", port = 0, err = error("unknown port for [Hello Yak]")
```


#### 定义

`ParseStringToHostPort(raw string) (host string, port int, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| err | `error` |   |


### parsestringtohosts

#### 详细描述
ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号分隔，并且会解析 CIDR 网段
Example:
```
str.ParseStringToHosts("192.168.0.1/32,127.0.0.1") // ["192.168.0.1", "127.0.0.1"]
```


#### 定义

`ParseStringToHosts(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringtolines

#### 详细描述
ParseStringToLines 将字符串按换行符(\n)分割成字符串数组，并去除BOM头和空行
Example:
```
str.ParseStringToLines("Hello World\nHello Yak") // ["Hello World", "Hello Yak"]
```


#### 定义

`ParseStringToLines(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringtoports

#### 详细描述
ParseStringToPorts 将字符串解析成 Port 列表， Port 可以以逗号分隔，并且会解析-分隔的范围
Example:
```
str.ParseStringToPorts("10086-10088,23333") // [10086, 10087, 10088, 23333]
```


#### 定义

`ParseStringToPorts(ports string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### parsestringtourls

#### 详细描述
ParseStringToUrls 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口
Example:
```
str.ParseStringToUrls("yaklang.com:443", "https://yaklang.io") // [https://yaklang.com, https://yaklang.io]
```


#### 定义

`ParseStringToUrls(targets ...string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringtourlswith3w

#### 详细描述
ParseStringToUrlsWith3W 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口，还会补全域名前的 www 前缀
Example:
```
str.ParseStringToUrlsWith3W("yaklang.com:443", "https://yaklang.io") // [https://yaklang.com, https://www.yaklang.com, https://yaklang.io, https://www.yaklang.io]
```


#### 定义

`ParseStringToUrlsWith3W(sub ...string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sub | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringurltourlinstance

#### 详细描述
ParseStringUrlToUrlInstance 将字符串 url 解析为 URL 结构体并返回错误
Example:
```
str.ParseStringUrlToUrlInstance("https://yaklang.com/abc?a=1")
```


#### 定义

`ParseStringUrlToUrlInstance(s string) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` |   |
| r2 | `error` |   |


### parsestringurltowebsiterootpath

#### 详细描述
ParseStringUrlToWebsiteRootPath 将字符串 url 解析为其根路径的URL
Example:
```
str.ParseStringUrlToWebsiteRootPath("https://yaklang.com/abc?a=1") // https://yaklang.com/
```


#### 定义

`ParseStringUrlToWebsiteRootPath(url string) (newURL string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newURL | `string` |   |


### pathjoin

#### 详细描述
PathJoin 将传入的文件路径进行拼接并返回
Example:
```
str.PathJoin("/var", "www", "html") // in *unix: "/var/www/html"    in Windows: \var\www\html
```


#### 定义

`PathJoin(elem ...string) (newPath string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| elem | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newPath | `string` |   |


### randsecret

#### 详细描述
RandSecret 返回在所有可见ascii字符表中随机挑选 n 个字符组成的密码字符串，这个密码经过str.IsStrongPassword验证，即为强密码
Example:
```
str.RandSecret(10)
```


#### 定义

`RandSecret(n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### randstr

#### 详细描述
RandStringBytes 返回在大小写字母表中随机挑选 n 个字符组成的字符串
Example:
```
str.RandStr(10)
```


#### 定义

`RandStr(n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### regexpmatch

#### 详细描述
RegexpMatch 使用正则尝试匹配字符串 s，如果匹配成功返回 true，否则返回 false
Example:
```
str.RegexpMatch("^[a-z]+$", "abc") // true
```


#### 定义

`RegexpMatch(pattern string, s any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |
| s | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### removerepeat

#### 详细描述
RemoveRepeat 移除字符串切片slc中的重复元素
Example:
```
str.RemoveRepeat(["hello", "yak", "hello"]) // ["hello", "yak"]
```


#### 定义

`RemoveRepeat(slc []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slc | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### repeat

#### 详细描述
Repeat 返回将字符串s重复count次的字符串
Example:
```
str.Repeat("hello", 3) // hellohellohello
```


#### 定义

`Repeat(s string, count int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replace

#### 详细描述
Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串
Example:
```
str.Replace("hello yak", "l", "L", 1) // heLlo yak
```


#### 定义

`Replace(s string, old string, new string, n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| old | `string` |   |
| new | `string` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replaceall

#### 详细描述
ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串
Example:
```
str.ReplaceAll("hello yak", "yak", "yakit") // hello yakit
```


#### 定义

`ReplaceAll(s string, old string, new string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| old | `string` |   |
| new | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replacehttppacketbody

#### 详细描述
ReplaceHTTPPacketBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文


#### 定义

`ReplaceHTTPPacketBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newHTTPRequest | `[]byte` |   |


### split

#### 详细描述
Split 将字符串s按照sep分割成字符串切片
Example:
```
str.Split("Hello Yak", " ") // [Hello", "Yak"]
```


#### 定义

`Split(s string, sep string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### splitafter

#### 详细描述
SplitAfter 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep
Example:
```
str.SplitAfter("Hello-Yak", "-") // [Hello-", "Yak"]
```


#### 定义

`SplitAfter(s string, sep string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### splitaftern

#### 详细描述
SplitAfterN 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep，最多分为n个元素
Example:
```
str.SplitAfterN("Hello-Yak-and-World", "-", 2) // [Hello-", "Yak-and-World"]
```


#### 定义

`SplitAfterN(s string, sep string, n int) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### splitandtrim

#### 详细描述
SplitAndTrim 将字符串s按照sep分割成字符串切片，并且去除每个字符串的前后空白字符
Example:
```
str.SplitAndTrim(" hello yak ", " ") // ["hello", "yak"]
```


#### 定义

`SplitAndTrim(Raw string, sep string) (targets []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| Raw | `string` |   |
| sep | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| targets | `[]string` |   |


### splithttpheadersandbodyfrompacket

#### 详细描述
SplitHTTPHeadersAndBodyFromPacket 将传入的 HTTP 报文分割为 headers 和 body，如果传入了hook，则会在每次读取到一行 header 时调用 hook
Example:
```
headers, body = str.SplitHTTPHeadersAndBodyFromPacket(b"GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
```


#### 定义

`SplitHTTPHeadersAndBodyFromPacket(raw []byte, hook ...func(line string)) (headers string, body []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| hook | `...func(line string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `string` |   |
| body | `[]byte` |   |


### splithoststoprivateandpublic

#### 详细描述
SplitHostsToPrivateAndPublic 将 hosts 按照私有 IP 和公有 IP 分开
Example:
```
str.SplitHostsToPrivateAndPublic("127.0.0.1", "8.8.8.8", "10.0.0.1") // ["127.0.0.1", "10.0.0.1"], ["8.8.8.8"]
```


#### 定义

`SplitHostsToPrivateAndPublic(hosts ...string) (privs []string, pub []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| privs | `[]string` |   |
| pub | `[]string` |   |


### splitn

#### 详细描述
SplitN 将字符串s按照sep分割成字符串切片，最多分为n个元素
Example:
```
str.SplitN("Hello-Yak-and-World", "-", 2) // [Hello", "Yak-and-World"]
```


#### 定义

`SplitN(s string, sep string, n int) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### startswith

#### 详细描述
StartsWith / HasPrefix 判断字符串s是否以prefix开头
Example:
```
str.StartsWith("Hello Yak", "Hello") // true
str.StartsWith("Hello Yak", "Yak") // false
```


#### 定义

`StartsWith(s string, prefix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### stringcontainsanyofsubstring

#### 详细描述
StringContainsAnyOfSubString 判断字符串s中是否包含subs中的任意一个子串
Example:
```
str.StringContainsAnyOfSubString("hello yak", ["yak", "world"]) // true
```


#### 定义

`StringContainsAnyOfSubString(s string, subs []string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| subs | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### stringslicecontains

#### 详细描述
StringSliceContains 判断字符串切片s中是否包含raw，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含
Example:
```
str.StringSliceContains(["hello", "yak"], "yak") // true
str.StringSliceContains([1, 2, 3], "4") // false
```


#### 定义

`StringSliceContains(s any, raw string) (result bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `any` |   |
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `bool` |   |


### stringslicecontainsall

#### 详细描述
StringSliceContainsAll 判断字符串切片s中是否完全包含elements中的所有元素，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含
Example:
```
str.StringSliceContainsAll(["hello", "yak"], "hello", "yak") // true
str.StringSliceContainsAll(["hello", "yak"], "hello", "yak", "world") // false
```


#### 定义

`StringSliceContainsAll(s []string, elements ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]string` |   |
| elements | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### subtract

#### 详细描述
Subtract 返回两个字符串切片的差集
Example:
```
str.Subtract(["1", "2", "3"], ["3", "4", "5"]) // ["1", "2"]
```


#### 定义

`Subtract(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` |   |
| y | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### title

#### 详细描述
Title 返回字符串s的标题化版本，即所有单词的首字母都是大写的
Example:
```
str.Title("hello yak") // Hello Yak
```


#### 定义

`Title(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tojsonindentstr

#### 详细描述
ToJsonIndentStr 将v转换为格式化的JSON字符串并返回，如果转换失败，则返回空字符串
Example:
```
str.ToJsonIndentStr({"hello":"yak"}) // {"hello": "yak"}
```


#### 定义

`ToJsonIndentStr(d any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tolower

#### 详细描述
ToLower 返回字符串s的小写形式
Example:
```
str.ToLower("HELLO YAK") // hello yak
```


#### 定义

`ToLower(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tolowerspecial

#### 详细描述
ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to their
lower case using the case mapping specified by c.


#### 定义

`ToLowerSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tostringslice

#### 详细描述
ToStringSlice 将任意类型的数据转换为字符串切片
Example:
```
str.ToStringSlice("hello") // ["hello"]
str.ToStringSlice([1, 2]) // ["1", "2"]
```


#### 定义

`ToStringSlice(i any) (result []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `[]string` |   |


### totitle

#### 详细描述
ToTitle 返回字符串s的标题化版本，其中所有Unicode字母都会被转换为其大写
Example:
```
str.ToTitle("hello yak") // HELLO YAK
```


#### 定义

`ToTitle(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### totitlespecial

#### 详细描述
ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to their
Unicode title case, giving priority to the special casing rules.


#### 定义

`ToTitleSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### toupper

#### 详细描述
ToUpper 返回字符串s的大写形式
Example:
```
str.ToUpper("hello yak") // HELLO YAK
```


#### 定义

`ToUpper(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### toupperspecial

#### 详细描述
ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to their
upper case using the case mapping specified by c.


#### 定义

`ToUpperSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tovalidutf8

#### 详细描述
ToValidUTF8 返回将字符串s中无效的UTF-8编码替换为replacement的字符串
Example:
```

str.ToValidUTF8("hello yak", "?") // hello yak
```


#### 定义

`ToValidUTF8(s string, replacement string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| replacement | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trim

#### 详细描述
Trim 返回将字符串s两侧所有包含cutset字符串中的字符都去掉的字符串
Example:
```
str.Trim("Hello Yak", "Hk") // ello Ya
str.Trim("HelloYakHello", "Hello") // Yak
```


#### 定义

`Trim(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| cutset | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimleft

#### 详细描述
TrimLeft 返回将字符串s左侧所有包含cutset字符串中的字符都去掉的字符串
Example:
```
str.TrimLeft("Hello Yak", "H") // ello Yak
str.TrimLeft("HelloYak", "Hello") // Yak
```


#### 定义

`TrimLeft(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| cutset | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimprefix

#### 详细描述
TrimPrefix 返回将字符串s前缀prefix去掉的字符串
Example:
```
str.TrimPrefix("Hello Yak", "Hello") //  Yak
str.TrimPrefix("HelloYak", "Hello") // Yak
```


#### 定义

`TrimPrefix(s string, prefix string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimright

#### 详细描述
TrimRight 返回将字符串s右侧所有包含cutset字符串中的字符都去掉的字符串
Example:
```
str.TrimRight("Hello Yak", "k") // Hello Ya
str.TrimRight("HelloYak", "Yak") // Hello
```


#### 定义

`TrimRight(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| cutset | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimspace

#### 详细描述
TrimSpace 返回将字符串s两侧所有的空白字符都去掉的字符串
Example:
```
str.TrimSpace(" \t\n Hello Yak \n\t\r\n") // Hello Yak
```


#### 定义

`TrimSpace(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimsuffix

#### 详细描述
TrimSuffix 返回将字符串s后缀suffix去掉的字符串
Example:
```
str.TrimSuffix("Hello Yak", "ak") // Hello Y
str.TrimSuffix("HelloYak", "Yak") // Hello
```


#### 定义

`TrimSuffix(s string, suffix string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| suffix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### urljoin

#### 详细描述
UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误
Example:
```
newURL, err = str.UrlJoin("https://yaklang.com", "asd", "qwe") // newURL = "https://yaklang.com/asd/qwe", err = nil
newURL, err = str.UrlJoin("https://yaklang.com/zxc", "/asd", "qwe") // newURL = "https://yaklang.com/asd/qwe", err = nil
```


#### 定义

`UrlJoin(origin string, paths ...string) (newURL string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| paths | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newURL | `string` |   |
| err | `error` |   |


### versionequal

#### 详细描述
VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false
Example:
```
str.VersionEqual("3.0", "3.0") // true
str.VersionEqual("3.0", "3.0a") // false
```


#### 定义

`VersionEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versiongreater

#### 详细描述
VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false
Example:
```
str.VersionGreater("1.0.0", "0.9.9") // true
str.VersionGreater("3.0", "2.8.8alpha") // true
```


#### 定义

`VersionGreater(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versiongreaterequal

#### 详细描述
VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false
Example:
```
str.VersionGreaterEqual("1.0.0", "0.9.9") // true
str.VersionGreaterEqual("3.0", "3.0") // true
str.VersionGreaterEqual("3.0", "3.0a") // false
```


#### 定义

`VersionGreaterEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versionless

#### 详细描述
VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false
Example:
```
str.VersionLess("0.9.9", "1.0.0") // true
str.VersionLess("3.0", "3.0a") // true
```


#### 定义

`VersionLess(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versionlessequal

#### 详细描述
VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false
Example:
```
str.VersionLessEqual("0.9.9", "1.0.0") // true
str.VersionLessEqual("3.0", "3.0") // true
str.VersionLessEqual("3.0a", "3.0") // false
```


#### 定义

`VersionLessEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### f

#### 详细描述
f 用于对字符串进行格式化
Example:
```

str.f("hello %s", "yak") // hello yak
```


#### 定义

`f(f string, items ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` |   |
| items | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


