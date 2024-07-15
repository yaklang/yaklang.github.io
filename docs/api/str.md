# str

|函数名|函数描述/介绍|
|:------|:--------|
| [str.CalcSSDeep](#calcssdeep) |CalcSSDeep 计算并返回一段文本的模糊哈希值  |
| [str.CalcSSDeepStability](#calcssdeepstability) |CalcSSDeepStability 使用模糊哈希算法计算多段文本之间的相似度，返回相似度与错误。传入的文本应该为大文本，即长度大于 30 kb。  |
| [str.CalcSimHash](#calcsimhash) |CalcSimHash 计算并返回一段文本的 SimHash 值  |
| [str.CalcSimHashStability](#calcsimhashstability) |CalcSimHashStability 使用 SimHash 算法计算多段文本之间的相似度，返回相似度与错误。  |
| [str.CalcSimilarity](#calcsimilarity) |CalcSimilarity 计算多段文本之间的相似度，根据最长的文本长度选择不同的算法  如果最长的文本长度小于等于 2000，使用文本子串匹配算法  如果最短的文本长度大于等于 30000，使用模糊哈希算法  如果上述算法出现错误，则使用 SimHash 算法  |
| [str.CalcTextMaxSubStrStability](#calctextmaxsubstrstability) |CalcTextMaxSubStrStability 使用文本子串匹配算法计算多段文本之间的相似度，返回相似度与错误  |
| [str.Compare](#compare) |Compare 按照ascii码表顺序逐个比较字符串a和b中的每个字符，如果a==b，则返回0，如果a&amp;lt;b，则返回-1，如果a&amp;gt;b，则返回1  |
| [str.Contains](#contains) |Contains 判断字符串s是否包含substr  |
| [str.ContainsAny](#containsany) |ContainsAny 判断字符串s是否包含chars中的任意字符  |
| [str.Count](#count) |Count 返回字符串s中substr出现的次数  |
| [str.Cut](#cut) |Cut slices s around the first instance of sep, returning the text before and after sep. The found result reports whether sep appears in s. If sep does...|
| [str.CutPrefix](#cutprefix) |CutPrefix returns s without the provided leading prefix string and reports whether it found the prefix. If s doesn&amp;#39;t start with prefix, CutPrefix ...|
| [str.CutSuffix](#cutsuffix) |CutSuffix returns s without the provided ending suffix string and reports whether it found the suffix. If s doesn&amp;#39;t end with suffix, CutSuffix ret...|
| [str.EndsWith](#endswith) |EndsWith / HasSuffix 判断字符串s是否以suffix结尾  |
| [str.EqualFold](#equalfold) |EqualFold 判断字符串s和t是否相等，忽略大小写  |
| [str.ExtractBodyFromHTTPResponseRaw](#extractbodyfromhttpresponseraw) |ExtractBodyFromHTTPResponseRaw 从原始 HTTP 响应报文中提取 body  |
| [str.ExtractChineseIDCards](#extractchineseidcards) |ExtractChineseIDCards 尝试将传入的参数转换为字符串，然后提取字符串中的身份证号  |
| [str.ExtractDomain](#extractdomain) |ExtractDomain 尝试提取字符串中的域名并返回  |
| [str.ExtractHost](#extracthost) |ExtractHost 尝试从字符串中解析出host和port，并返回host  |
| [str.ExtractHostPort](#extracthostport) |ExtractHostPort 尝试从字符串中解析出host和port，并返回host:port  |
| [str.ExtractJson](#extractjson) |ExtractJson 尝试提取字符串中的 JSON 并进行修复返回  |
| [str.ExtractJsonWithRaw](#extractjsonwithraw) |ExtractJsonWithRaw 尝试提取字符串中的 JSON 并返回，第一个返回值返回经过修复后的JSON字符串数组，第二个返回值返回原始JSON字符串数组(如果修复失败)  |
| [str.ExtractRootDomain](#extractrootdomain) |ExtractRootDomain 尝试提取字符串中的根域名并返回  |
| [str.ExtractStrContext](#extractstrcontext) |ExtractStrContext 从字符串raw中提取一组关键字res上下文的内容，上下文的长度是512个字符确定。  |
| [str.ExtractTitle](#extracttitle) |ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回  |
| [str.ExtractURLFromHTTPRequest](#extracturlfromhttprequest) |ExtractURLFromHTTPRequest 从 HTTP 请求结构体中提取 URL，返回URL结构体与错误  |
| [str.ExtractURLFromHTTPRequestRaw](#extracturlfromhttprequestraw) |ExtractURLFromHTTPRequestRaw 从原始 HTTP 请求报文中提取 URL，返回URL结构体与错误  |
| [str.Fields](#fields) |Fields 返回将字符串s按照空白字符（&amp;#39;\t&amp;#39;, &amp;#39;\n&amp;#39;, &amp;#39;\v&amp;#39;, &amp;#39;\f&amp;#39;, &amp;#39;\r&amp;#39;, &amp;#39; &amp;#39;, 0x85, 0xA0）分割的字符串切片  |
| [str.FilterPorts](#filterports) |FilterPorts 接受两个字符串形式的端口列表作为参数，返回一个新的端口列表，  其中包含了在 `ports1` 中但不在 `ports2` 中的所有端口。  这个函数首先将两个输入字符串解析为端口列表，然后创建一个映射（或集合）来存储 `ports2` 中的所有端口。  然后，它遍历 `po...|
| [str.FixHTTPRequest](#fixhttprequest) |FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求  |
| [str.FixHTTPResponse](#fixhttpresponse) |FixHTTPResponse 尝试对传入的响应进行修复，并返回修复后的响应，响应体和错误  |
| [str.Grok](#grok) |Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。  |
| [str.HasPrefix](#hasprefix) |StartsWith / HasPrefix 判断字符串s是否以prefix开头  |
| [str.HasSuffix](#hassuffix) |EndsWith / HasSuffix 判断字符串s是否以suffix结尾  |
| [str.HostPort](#hostport) |HostPort 将 host 和 port 拼接成 host:port 的形式  |
| [str.IPv4ToCClassNetwork](#ipv4tocclassnetwork) |IPv4ToCClassNetwork 尝试从一个 IPv4 地址中获取 C 类网络地址，并返回错误  |
| [str.Index](#index) |Index 返回字符串s中substr第一次出现的位置的索引，如果字符串中不存在substr，则返回-1  |
| [str.IndexAny](#indexany) |IndexAny 返回字符串s中chars任意字符首次出现的位置的索引，如果字符串中不存在chars，则返回-1  |
| [str.IndexByte](#indexbyte) |IndexByte 返回字符串s中第一个等于c的字符的索引，如果字符串中不存在c，则返回-1  |
| [str.Intersect](#intersect) |Intersect / IntersectString 返回两个字符串切片之间的交集  |
| [str.IntersectString](#intersectstring) |Intersect / IntersectString 返回两个字符串切片之间的交集  |
| [str.IsAlNum](#isalnum) |IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成  |
| [str.IsAlpha](#isalpha) |IsAlpha 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母组成  |
| [str.IsAlphaNum](#isalphanum) |IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成  |
| [str.IsBase64Value](#isbase64value) |IsBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据  |
| [str.IsCaptchaField](#iscaptchafield) |IsCaptchaField 尝试将传入的参数转换为字符串，然后猜测其是否是验证码字段  |
| [str.IsDigit](#isdigit) |IsDigit 尝试将传入的参数转换为字符串，然后判断其是否都由数字组成  |
| [str.IsHtmlResponse](#ishtmlresponse) |IsHtmlResponse 猜测传入的参数是否为原始 HTTP 响应报文  |
| [str.IsHttpURL](#ishttpurl) |IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https |
| [str.IsIPv4](#isipv4) |IsIPv4 判断字符串是否是 IPv4 地址  |
| [str.IsIPv6](#isipv6) |IsIPv6 判断字符串是否是 IPv6 地址  |
| [str.IsJSONPParam](#isjsonpparam) |IsJSONPParam 根据传入的参数名和参数值猜测是否为 JSONP 参数  |
| [str.IsJsonResponse](#isjsonresponse) |IsJsonResponse 尝试将传入的参数转换为字符串，然后猜测传入的参数是否为 JSON 格式的原始 HTTP 响应报文，这是通过判断Content-Type请求头实现的  |
| [str.IsMD5Value](#ismd5value) |IsMD5Value 尝试将传入的参数转换为字符串，然后猜测其是否是 MD5 编码的数据  |
| [str.IsPasswordField](#ispasswordfield) |IsPasswordField 尝试将传入的参数转换为字符串，然后猜测其是否是 password 字段  |
| [str.IsPlainBase64Value](#isplainbase64value) |IsPlainBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据，它相比于 IsBase64Value 多了一层判断，即判断 base64 解码后的数据是否为可见字符串  |
| [str.IsRedirectParam](#isredirectparam) |IsRedirectParam 根据传入的参数名和参数值猜测是否为重定向参数  |
| [str.IsSQLColumnField](#issqlcolumnfield) |IsSQLColumnField 尝试将传入的参数转换为字符串，然后猜测其是否是 SQL 查询字段  |
| [str.IsSensitiveJson](#issensitivejson) |IsSensitiveJson  尝试将传入的参数转换为字符串，然后猜测其是否为敏感的 JSON 数据  |
| [str.IsSensitiveTokenField](#issensitivetokenfield) |IsSensitiveTokenField 尝试将传入的参数转换为字符串，然后猜测其是否是 token 字段  |
| [str.IsServerError](#isservererror) |IsServerError 猜测传入的参数是否为服务器错误  |
| [str.IsSha256Value](#issha256value) |IsSha256Value 尝试将传入的参数转换为字符串，然后猜测其是否是 SHA256 编码的数据  |
| [str.IsStrongPassword](#isstrongpassword) |IsStrongPassword 判断字符串是否为强密码，强密码的定义为：长度大于8，同时包含特殊字符、小写字母、大写字母、数字  |
| [str.IsTLSServer](#istlsserver) |IsTLSServer 尝试访问传入的host，然后判断其是否为 TLS 服务。第一个参数为 host，后面可以传入零个或多个参数，为代理地址  |
| [str.IsUrlParam](#isurlparam) |IsUrlParam 根据传入的参数名和参数值猜测是否为 URL 参数  |
| [str.IsUrlPath](#isurlpath) |根据 value 猜测是否是一个 url path |
| [str.IsUsernameField](#isusernamefield) |IsUsernameField 尝试将传入的参数转换为字符串，然后猜测其是否是 username 字段  |
| [str.IsXmlParam](#isxmlparam) |IsXmlParam 根据传入的参数名和参数值猜测是否为 XML 参数  |
| [str.IsXmlRequest](#isxmlrequest) |IsXmlRequest 猜测传入的参数是否为请求头是 XML 格式的原始 HTTP 请求报文  |
| [str.IsXmlValue](#isxmlvalue) |IsXmlValue 尝试将传入的参数转换为字符串，然后猜测其是否是 XML 格式的数据  |
| [str.Join](#join) |Join 将i中的元素用d连接，如果传入的参数不是字符串，会自动将其转为字符串，再将其用d连接。如果连接失败，则会返回i的字符串形式。  |
| [str.JsonToMap](#jsontomap) |JsonToMap 将 json 字符串 line 解析为 map  |
| [str.JsonToMapList](#jsontomaplist) |JsonToMapList 将 json 字符串 line 解析为 map 列表  |
| [str.LastIndex](#lastindex) |LastIndex 返回字符串s中substr最后一次出现的位置的索引，如果字符串中不存在substr，则返回-1  |
| [str.LastIndexAny](#lastindexany) |LastIndexAny 返回字符串s中chars任意字符最后一次出现的位置的索引，如果字符串中不存在chars，则返回-1  |
| [str.LastIndexByte](#lastindexbyte) |LastIndexByte 返回字符串s中最后一个等于c的字符的索引，如果字符串中不存在c，则返回-1  |
| [str.LowerAndTrimSpace](#lowerandtrimspace) |LowerAndTrimSpace 将字符串raw转换为小写并去除前后空白字符  |
| [str.MatchAllOfGlob](#matchallofglob) |MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果所有的glob模式都匹配成功，则返回 true，否则返回 false  |
| [str.MatchAllOfRegexp](#matchallofregexp) |MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果所有的正则表达式都匹配成功，则返回 true，否则返回 false  |
| [str.MatchAllOfSubString](#matchallofsubstring) |MatchAllOfSubString 尝试将 i 转换为字符串，然后判断所有子串 subStr 是否都存在于 i 中，如果都存在则返回 true，否则返回 false，此函数忽略大小写  |
| [str.MatchAnyOfGlob](#matchanyofglob) |MatchAnyOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否则返回 false  |
| [str.MatchAnyOfRegexp](#matchanyofregexp) |MatchAnyOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true，否则返回 false  |
| [str.MatchAnyOfSubString](#matchanyofsubstring) |MatchAnyOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i 中则返回 true，否则返回 false，此函数忽略大小写  |
| [str.MergeUrlFromHTTPRequest](#mergeurlfromhttprequest) |MergeUrlFromHTTPRequest 将传入的 target 与 原始 HTTP 请求报文中的 URL 进行合并，并返回合并后的 URL  |
| [str.NewFilter](#newfilter) |NewFilter 创建一个默认的字符串布谷鸟过滤器，布谷鸟过滤器用于判断一个元素是否在一个集合中，它存在极低的假阳性（即说存在的元素实际上不存在），通常这个集合中的元素数量非常大才会使用布谷鸟过滤器。  |
| [str.NewReader](#newreader) |NewReader returns a new Reader reading from s. It is similar to bytes.NewBufferString but more efficient and non-writable. |
| [str.ParamsGetOr](#paramsgetor) |ParamsGetOr 从 map 中获取 key 对应的值，如果不存在则返回 defaultValue  |
| [str.ParseBytesToHTTPRequest](#parsebytestohttprequest) |ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求  |
| [str.ParseBytesToHTTPResponse](#parsebytestohttpresponse) |ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应  |
| [str.ParseStringToCClassHosts](#parsestringtocclasshosts) |ParseStringToCClassHosts 尝试从给定的字符串中解析Host，再将其转为 C 类网段，用,分隔  |
| [str.ParseStringToHTTPRequest](#parsestringtohttprequest) |ParseStringToHTTPRequest 将字符串解析为 HTTP 请求  |
| [str.ParseStringToHTTPResponse](#parsestringtohttpresponse) |ParseStringToHTTPResponse 将字符串解析为 HTTP 响应  |
| [str.ParseStringToHostPort](#parsestringtohostport) |ParseStringToHostPort 尝试从字符串中解析出host和port，并与错误一起返回  |
| [str.ParseStringToHosts](#parsestringtohosts) |ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号、换行分隔，并且会解析 CIDR 网段  |
| [str.ParseStringToLines](#parsestringtolines) |ParseStringToLines 将字符串按换行符(\n)分割成字符串数组，并去除BOM头和空行  |
| [str.ParseStringToPorts](#parsestringtoports) |ParseStringToPorts 将字符串解析成 Port 列表， Port 可以以逗号分隔，并且会解析-分隔的范围  |
| [str.ParseStringToUrls](#parsestringtourls) |ParseStringToUrls 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口  |
| [str.ParseStringToUrlsWith3W](#parsestringtourlswith3w) |ParseStringToUrlsWith3W 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口，还会补全域名前的 www 前缀  |
| [str.ParseStringUrlToUrlInstance](#parsestringurltourlinstance) |ParseStringUrlToUrlInstance 将字符串 url 解析为 URL 结构体并返回错误  |
| [str.ParseStringUrlToWebsiteRootPath](#parsestringurltowebsiterootpath) |ParseStringUrlToWebsiteRootPath 将字符串 url 解析为其根路径的URL  |
| [str.PathJoin](#pathjoin) |PathJoin 将传入的文件路径进行拼接并返回  |
| [str.RandSecret](#randsecret) |RandSecret 返回在所有可见ascii字符表中随机挑选 n 个字符组成的密码字符串，这个密码经过str.IsStrongPassword验证，即为强密码  |
| [str.RandStr](#randstr) |RandStringBytes 返回在大小写字母表中随机挑选 n 个字符组成的字符串  |
| [str.Random](#random) |RandomUpperAndLower 返回一个随机大小写的字符串  |
| [str.RegexpMatch](#regexpmatch) |RegexpMatch 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false  |
| [str.RemoveDuplicatePorts](#removeduplicateports) |RemoveDuplicatePorts 解析两个字符串形式的端口列表，并使用布谷鸟过滤器进行去重。  这个函数首先创建一个布谷鸟过滤器，然后将两个输入字符串解析为端口列表。  接着，它遍历这两个列表，将每个端口添加到布谷鸟过滤器中，如果这个端口之前没有被添加过，  那么它也会被添加到结果列表中。最...|
| [str.RemoveRepeat](#removerepeat) |RemoveRepeat 移除字符串切片slc中的重复元素  |
| [str.Repeat](#repeat) |Repeat 返回将字符串s重复count次的字符串  |
| [str.Replace](#replace) |Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串  |
| [str.ReplaceAll](#replaceall) |ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串  |
| [str.ReplaceHTTPPacketBody](#replacehttppacketbody) |ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文  |
| [str.Split](#split) |Split 将字符串s按照sep分割成字符串切片  |
| [str.SplitAfter](#splitafter) |SplitAfter 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep  |
| [str.SplitAfterN](#splitaftern) |SplitAfterN 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep，最多分为n个元素  |
| [str.SplitAndTrim](#splitandtrim) |SplitAndTrim 将字符串s按照sep分割成字符串切片，并且去除每个字符串的前后空白字符  |
| [str.SplitHTTPHeadersAndBodyFromPacket](#splithttpheadersandbodyfrompacket) |SplitHTTPHeadersAndBodyFromPacket 将传入的 HTTP 报文分割为 headers 和 body，如果传入了hook，则会在每次读取到一行 header 时调用 hook  |
| [str.SplitHostsToPrivateAndPublic](#splithoststoprivateandpublic) |SplitHostsToPrivateAndPublic 将 hosts 按照私有 IP 和公有 IP 分开  |
| [str.SplitN](#splitn) |SplitN 将字符串s按照sep分割成字符串切片，最多分为n个元素  |
| [str.StartsWith](#startswith) |StartsWith / HasPrefix 判断字符串s是否以prefix开头  |
| [str.StringContainsAnyOfSubString](#stringcontainsanyofsubstring) |StringContainsAnyOfSubString 判断字符串s中是否包含subs中的任意一个子串  |
| [str.StringSliceContains](#stringslicecontains) |StringSliceContains 判断字符串切片s中是否包含raw，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含  |
| [str.StringSliceContainsAll](#stringslicecontainsall) |StringSliceContainsAll 判断字符串切片s中是否完全包含elements中的所有元素，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含  |
| [str.Subtract](#subtract) |Subtract 返回两个字符串切片的差集  |
| [str.Title](#title) |Title 返回字符串s的标题化版本，即所有单词的首字母都是大写的  |
| [str.ToJsonIndentStr](#tojsonindentstr) |ToJsonIndentStr 将v转换为格式化的JSON字符串并返回，如果转换失败，则返回空字符串  |
| [str.ToLower](#tolower) |ToLower 返回字符串s的小写形式  |
| [str.ToLowerSpecial](#tolowerspecial) |ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to their lower case using the case mapping specified by c. |
| [str.ToStringSlice](#tostringslice) |ToStringSlice 将任意类型的数据转换为字符串切片  |
| [str.ToTitle](#totitle) |ToTitle 返回字符串s的标题化版本，其中所有Unicode字母都会被转换为其大写  |
| [str.ToTitleSpecial](#totitlespecial) |ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to their Unicode title case, giving priority to the special casing rules...|
| [str.ToUpper](#toupper) |ToUpper 返回字符串s的大写形式  |
| [str.ToUpperSpecial](#toupperspecial) |ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to their upper case using the case mapping specified by c. |
| [str.ToValidUTF8](#tovalidutf8) |ToValidUTF8 返回将字符串s中无效的UTF-8编码替换为replacement的字符串  |
| [str.Trim](#trim) |Trim 返回将字符串s两侧所有包含cutset字符串中的字符都去掉的字符串  |
| [str.TrimLeft](#trimleft) |TrimLeft 返回将字符串s左侧所有包含cutset字符串中的字符都去掉的字符串  |
| [str.TrimPrefix](#trimprefix) |TrimPrefix 返回将字符串s前缀prefix去掉的字符串  |
| [str.TrimRight](#trimright) |TrimRight 返回将字符串s右侧所有包含cutset字符串中的字符都去掉的字符串  |
| [str.TrimSpace](#trimspace) |TrimSpace 返回将字符串s两侧所有的空白字符都去掉的字符串  |
| [str.TrimSuffix](#trimsuffix) |TrimSuffix 返回将字符串s后缀suffix去掉的字符串  |
| [str.UrlJoin](#urljoin) |UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误  |
| [str.VersionCompare](#versioncompare) |VersionCompare 泛用形的版本比较,传入(p1,p2 string), p1&amp;gt;p2返回1,nil, p1&amp;lt;p2返回-1,nil, p1==p2返回0,nil, 比较失败返回 -2,err |
| [str.VersionEqual](#versionequal) |VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false  |
| [str.VersionGreater](#versiongreater) |VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false  |
| [str.VersionGreaterEqual](#versiongreaterequal) |VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false  |
| [str.VersionLess](#versionless) |VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false  |
| [str.VersionLessEqual](#versionlessequal) |VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false  |
| [str.f](#f) |f 用于对字符串进行格式化  |


## 函数定义
### CalcSSDeep

#### 详细描述
CalcSSDeep 计算并返回一段文本的模糊哈希值

Example:
```
str.CalcSSDeep(&#34;hello&#34;)
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


### CalcSSDeepStability

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


### CalcSimHash

#### 详细描述
CalcSimHash 计算并返回一段文本的 SimHash 值

Example:
```
str.CalcSimHash(&#34;hello&#34;)
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


### CalcSimHashStability

#### 详细描述
CalcSimHashStability 使用 SimHash 算法计算多段文本之间的相似度，返回相似度与错误。

Example:
```
p, err = str.CalcSimHashStability(&#34;hello&#34;, &#34;hello world&#34;) // p = 0.96484375
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


### CalcSimilarity

#### 详细描述
CalcSimilarity 计算多段文本之间的相似度，根据最长的文本长度选择不同的算法

如果最长的文本长度小于等于 2000，使用文本子串匹配算法

如果最短的文本长度大于等于 30000，使用模糊哈希算法

如果上述算法出现错误，则使用 SimHash 算法

Example:
```
str.CalcSimilarity(&#34;hello&#34;, &#34;hello world&#34;) // 0.625
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


### CalcTextMaxSubStrStability

#### 详细描述
CalcTextMaxSubStrStability 使用文本子串匹配算法计算多段文本之间的相似度，返回相似度与错误

Example:
```
p, err = str.CalcTextMaxSubStrStability(&#34;hello&#34;, &#34;hello world&#34;) // p = 0.625
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


### Compare

#### 详细描述
Compare 按照ascii码表顺序逐个比较字符串a和b中的每个字符，如果a==b，则返回0，如果a&amp;lt;b，则返回-1，如果a&amp;gt;b，则返回1

Example:
```
str.Compare(&#34;hello yak&#34;, &#34;hello yak&#34;) // 0
str.Compare(&#34;hello yak&#34;, &#34;hello&#34;) // 1
str.Compare(&#34;hello&#34;, &#34;hello yak&#34;) // -1
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


### Contains

#### 详细描述
Contains 判断字符串s是否包含substr

Example:
```
str.Contains(&#34;hello yakit&#34;, &#34;yak&#34;) // true
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


### ContainsAny

#### 详细描述
ContainsAny 判断字符串s是否包含chars中的任意字符

Example:
```
str.ContainsAny(&#34;hello yak&#34;, &#34;ly&#34;) // true
str.ContainsAny(&#34;hello yak&#34;, &#34;m&#34;) // false
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


### Count

#### 详细描述
Count 返回字符串s中substr出现的次数

Example:
```
str.Count(&#34;hello yak&#34;, &#34;l&#34;) // 2
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


### Cut

#### 详细描述
Cut slices s around the first instance of sep,
returning the text before and after sep.
The found result reports whether sep appears in s.
If sep does not appear in s, cut returns s, &amp;#34;&amp;#34;, false.


#### 定义

`Cut(s string, sep string) (before string, after string, found bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| before | `string` |   |
| after | `string` |   |
| found | `bool` |   |


### CutPrefix

#### 详细描述
CutPrefix returns s without the provided leading prefix string
and reports whether it found the prefix.
If s doesn&amp;#39;t start with prefix, CutPrefix returns s, false.
If prefix is the empty string, CutPrefix returns s, true.


#### 定义

`CutPrefix(s string, prefix string) (after string, found bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| after | `string` |   |
| found | `bool` |   |


### CutSuffix

#### 详细描述
CutSuffix returns s without the provided ending suffix string
and reports whether it found the suffix.
If s doesn&amp;#39;t end with suffix, CutSuffix returns s, false.
If suffix is the empty string, CutSuffix returns s, true.


#### 定义

`CutSuffix(s string, suffix string) (before string, found bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| suffix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| before | `string` |   |
| found | `bool` |   |


### EndsWith

#### 详细描述
EndsWith / HasSuffix 判断字符串s是否以suffix结尾

Example:
```
str.EndsWith(&#34;Hello Yak&#34;, &#34;Yak&#34;) // true
str.EndsWith(&#34;Hello Yak&#34;, &#34;Hello&#34;) // false
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


### EqualFold

#### 详细描述
EqualFold 判断字符串s和t是否相等，忽略大小写

Example:
```
str.EqualFold(&#34;hello Yak&#34;, &#34;HELLO YAK&#34;) // true
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


### ExtractBodyFromHTTPResponseRaw

#### 详细描述
ExtractBodyFromHTTPResponseRaw 从原始 HTTP 响应报文中提取 body

Example:
```
body, err = str.ExtractBodyFromHTTPResponseRaw(b&#34;HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok&#34;) // body = b&#34;ok&#34;
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


### ExtractChineseIDCards

#### 详细描述
ExtractChineseIDCards 尝试将传入的参数转换为字符串，然后提取字符串中的身份证号

Example:
```
str.ExtractChineseIDCards(&#34;Your ChineseID is: 110101202008027420?&#34;) // [&#34;110101202008027420&#34;]
```


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


### ExtractDomain

#### 详细描述
ExtractDomain 尝试提取字符串中的域名并返回

Example:
```
str.ExtractDomain(&#34;hello yak&#34;) // []
str.ExtractDomain(&#34;hello yaklang.com or yaklang.io&#34;) // [&#34;yaklang.com&#34;, &#34;yaklang.io&#34;]
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


### ExtractHost

#### 详细描述
ExtractHost 尝试从字符串中解析出host和port，并返回host

Example:
```
str.ExtractHost(&#34;127.0.0.1:8888&#34;) // 127.0.0.1
str.ExtractHost(&#34;https://example.com&#34;) // example.com
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


### ExtractHostPort

#### 详细描述
ExtractHostPort 尝试从字符串中解析出host和port，并返回host:port

Example:
```
str.ExtractHostPort(&#34;https://127.0.0.1:8888&#34;) // 127.0.0.1:8888
str.ExtractHostPort(&#34;https://baidu.com&#34;) // 127.0.0.1:443
```


#### 定义

`ExtractHostPort(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### ExtractJson

#### 详细描述
ExtractJson 尝试提取字符串中的 JSON 并进行修复返回

Example:
```
str.ExtractJson(&#34;hello yak&#34;) // []
str.ExtractJson(`{&#34;hello&#34;: &#34;yak&#34;}`) // [{&#34;hello&#34;: &#34;yak&#34;}]
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


### ExtractJsonWithRaw

#### 详细描述
ExtractJsonWithRaw 尝试提取字符串中的 JSON 并返回，第一个返回值返回经过修复后的JSON字符串数组，第二个返回值返回原始JSON字符串数组(如果修复失败)

Example:
```
str.ExtractJsonWithRaw(&#34;hello yak&#34;) // [], []
str.ExtractJsonWithRaw(`{&#34;hello&#34;: &#34;yak&#34;}`) // [{&#34;hello&#34;: &#34;yak&#34;}], []
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


### ExtractRootDomain

#### 详细描述
ExtractRootDomain 尝试提取字符串中的根域名并返回

Example:
```
str.ExtractRootDomain(&#34;hello yak&#34;) // []
str.ExtractRootDomain(&#34;hello www.yaklang.com or www.yaklang.io&#34;) // [&#34;yaklang.com&#34;, &#34;yaklang.io&#34;]
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


### ExtractStrContext

#### 详细描述
ExtractStrContext 从字符串raw中提取一组关键字res上下文的内容，上下文的长度是512个字符确定。

Example:
```
str.ExtractStrContext(&#34;hello yak&#34;, [&#34;hello&#34;]) // [&#34;hello yak&#34;]
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


### ExtractTitle

#### 详细描述
ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回

Example:
```
str.ExtractTitle(&#34;hello yak&#34;) // &#34;&#34;
str.ExtractTitle(&#34;&lt;title&gt;hello yak&lt;/title&gt;&#34;) // &#34;hello yak&#34;
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


### ExtractURLFromHTTPRequest

#### 详细描述
ExtractURLFromHTTPRequest 从 HTTP 请求结构体中提取 URL，返回URL结构体与错误

Example:
```
v, err = http.Raw(&#34;GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n&#34;)
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


### ExtractURLFromHTTPRequestRaw

#### 详细描述
ExtractURLFromHTTPRequestRaw 从原始 HTTP 请求报文中提取 URL，返回URL结构体与错误

Example:
```
url, err := str.ExtractURLFromHTTPRequestRaw(b&#34;GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n&#34;, false)
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


### Fields

#### 详细描述
Fields 返回将字符串s按照空白字符（&amp;#39;\t&amp;#39;, &amp;#39;\n&amp;#39;, &amp;#39;\v&amp;#39;, &amp;#39;\f&amp;#39;, &amp;#39;\r&amp;#39;, &amp;#39; &amp;#39;, 0x85, 0xA0）分割的字符串切片

Example:
```
str.Fields(&#34;hello world\nhello yak\tand\vyakit&#34;) // [hello&#34;, &#34;world&#34;, &#34;hello&#34;, &#34;yak&#34;, &#34;and&#34;, &#34;yakit&#34;]
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


### FilterPorts

#### 详细描述
FilterPorts 接受两个字符串形式的端口列表作为参数，返回一个新的端口列表，

其中包含了在 `ports1` 中但不在 `ports2` 中的所有端口。

这个函数首先将两个输入字符串解析为端口列表，然后创建一个映射（或集合）来存储 `ports2` 中的所有端口。

然后，它遍历 `ports1` 中的每个端口，如果这个端口不在 `ports2` 中，那么它就会被添加到结果列表中。

最后，函数返回结果列表，其中包含了所有只在 `ports1` 中出现的端口。

Example:
```
FilterPorts(&#34;1-10&#34;, &#34;2-10&#34;) // [1]
```


#### 定义

`FilterPorts(sourcePorts string, excludePorts string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourcePorts | `string` |   |
| excludePorts | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### FixHTTPRequest

#### 详细描述
FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求

Example:
```
str.FixHTTPRequest(b&#34;GET / HTTP/1.1\r\nHost: example.com\r\n\r\n&#34;)
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


### FixHTTPResponse

#### 详细描述
FixHTTPResponse 尝试对传入的响应进行修复，并返回修复后的响应，响应体和错误

Example:
```
fixedResponse, body, err = str.FixHTTPResponse(b&#34;HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=gbk\r\n\r\n&lt;html&gt;你好&lt;/html&gt;&#34;)
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


### Grok

#### 详细描述
Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。

Example:
```
str.Grok(&#34;04/18-00:59:45.385191&#34;, &#34;%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}&#34;) // map[HOUR:[00] MINUTE:[59] SECOND:[45.385191] day:[18] month:[04] time:[00:59:45.385191]]
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


### HasPrefix

#### 详细描述
StartsWith / HasPrefix 判断字符串s是否以prefix开头

Example:
```
str.StartsWith(&#34;Hello Yak&#34;, &#34;Hello&#34;) // true
str.StartsWith(&#34;Hello Yak&#34;, &#34;Yak&#34;) // false
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


### HasSuffix

#### 详细描述
EndsWith / HasSuffix 判断字符串s是否以suffix结尾

Example:
```
str.EndsWith(&#34;Hello Yak&#34;, &#34;Yak&#34;) // true
str.EndsWith(&#34;Hello Yak&#34;, &#34;Hello&#34;) // false
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


### HostPort

#### 详细描述
HostPort 将 host 和 port 拼接成 host:port 的形式

Example:
```
str.HostPort(&#34;yaklang.com&#34;, 443) // yaklang.com:443
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


### IPv4ToCClassNetwork

#### 详细描述
IPv4ToCClassNetwork 尝试从一个 IPv4 地址中获取 C 类网络地址，并返回错误

Example:
```
network, err = str.IPv4ToCClassNetwork(&#34;192.168.0.1&#34;) // network = &#34;192.168.0.0/24&#34;, err = nil
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


### Index

#### 详细描述
Index 返回字符串s中substr第一次出现的位置的索引，如果字符串中不存在substr，则返回-1

Example:
```
str.Index(&#34;hello yak&#34;, &#34;yak&#34;) // 6
str.Index(&#34;hello world&#34;, &#34;yak&#34;) // -1
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


### IndexAny

#### 详细描述
IndexAny 返回字符串s中chars任意字符首次出现的位置的索引，如果字符串中不存在chars，则返回-1

Example:
```
str.IndexAny(&#34;Hello world&#34;, &#34;world&#34;) // 2，因为l在第三个字符中首次出现
str.IndexAny(&#34;Hello World&#34;, &#34;Yak&#34;) // -1
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


### IndexByte

#### 详细描述
IndexByte 返回字符串s中第一个等于c的字符的索引，如果字符串中不存在c，则返回-1

Example:
```
str.IndexByte(&#34;hello yak&#34;, &#39;y&#39;) // 6
str.IndexByte(&#34;hello yak&#34;, &#39;m&#39;) // -1
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


### Intersect

#### 详细描述
Intersect / IntersectString 返回两个字符串切片之间的交集

Example:
```
str.Intersect([&#34;1&#34;, &#34;2&#34;, &#34;3&#34;], [&#34;3&#34;, &#34;4&#34;, &#34;5&#34;]) // [&#34;3&#34;]
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


### IntersectString

#### 详细描述
Intersect / IntersectString 返回两个字符串切片之间的交集

Example:
```
str.Intersect([&#34;1&#34;, &#34;2&#34;, &#34;3&#34;], [&#34;3&#34;, &#34;4&#34;, &#34;5&#34;]) // [&#34;3&#34;]
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


### IsAlNum

#### 详细描述
IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成

Example:
```
str.IsAlphaNum(&#34;abc123&#34;) // true
str.IsAlphaNum(&#34;abc123!&#34;) // false
```


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


### IsAlpha

#### 详细描述
IsAlpha 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母组成

Example:
```
str.IsAlpha(&#34;abc&#34;) // true
str.IsAlpha(&#34;abc123&#34;) // false
```


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


### IsAlphaNum

#### 详细描述
IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成

Example:
```
str.IsAlphaNum(&#34;abc123&#34;) // true
str.IsAlphaNum(&#34;abc123!&#34;) // false
```


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


### IsBase64Value

#### 详细描述
IsBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据

Example:
```
str.IsBase64Value(&#34;MTI=&#34;) // true
str.IsBase64Value(&#34;123&#34;) // false
```


#### 定义

`IsBase64Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsCaptchaField

#### 详细描述
IsCaptchaField 尝试将传入的参数转换为字符串，然后猜测其是否是验证码字段

Example:
```
str.IsCaptchaField(&#34;captcha&#34;) // true
str.IsCaptchaField(&#34;code_img&#34;) // true
str.IsCaptchaField(&#34;id&#34;) // false
```


#### 定义

`IsCaptchaField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsDigit

#### 详细描述
IsDigit 尝试将传入的参数转换为字符串，然后判断其是否都由数字组成

Example:
```
str.IsDigit(&#34;123&#34;) // true
str.IsDigit(&#34;abc123&#34;) // false
```


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


### IsHtmlResponse

#### 详细描述
IsHtmlResponse 猜测传入的参数是否为原始 HTTP 响应报文

Example:
```
str.IsHtmlResponse(&#34;HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n&lt;html&gt;&lt;/html&gt;&#34;) // true
resp, _ = str.ParseStringToHTTPResponse(&#34;HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n&lt;html&gt;&lt;/html&gt;&#34;)
str.IsHtmlResponse(resp) // true
```


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


### IsHttpURL

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


### IsIPv4

#### 详细描述
IsIPv4 判断字符串是否是 IPv4 地址

Example:
```
str.IsIPv4(&#34;::1&#34;) // false
str.IsIPv4(&#34;127.0.0.1&#34;) // true
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


### IsIPv6

#### 详细描述
IsIPv6 判断字符串是否是 IPv6 地址

Example:
```
str.IsIPv6(&#34;::1&#34;) // true
str.IsIPv6(&#34;127.0.0.1&#34;) // false
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


### IsJSONPParam

#### 详细描述
IsJSONPParam 根据传入的参数名和参数值猜测是否为 JSONP 参数

Example:
```
str.IsJSONPParam(&#34;callback&#34;,&#34;jquery1.0.min.js&#34;) // true，因为参数名为常见的 JSONP 参数名，且参数值为常见的JS文件名
str.IsJSONPParam(&#34;f&#34;,&#34;jquery1.0.min.js&#34;) // true，因为参数值为常见的 JS 文件名
str.IsJSONPParam(&#34;id&#34;,&#34;1&#34;) // false
```


#### 定义

`IsJSONPParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsJsonResponse

#### 详细描述
IsJsonResponse 尝试将传入的参数转换为字符串，然后猜测传入的参数是否为 JSON 格式的原始 HTTP 响应报文，这是通过判断Content-Type请求头实现的

Example:
```
str.IsJsonResponse(&#34;HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n{\&#34;code\&#34;: 0}&#34;) // true
str.IsJsonResponse(&#34;HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nhello&#34;) // false
```


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


### IsMD5Value

#### 详细描述
IsMD5Value 尝试将传入的参数转换为字符串，然后猜测其是否是 MD5 编码的数据

Example:
```
str.IsMD5Value(&#34;202cb962ac59075b964b07152d234b70&#34;) // true
str.IsMD5Value(&#34;123&#34;) // false
```


#### 定义

`IsMD5Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsPasswordField

#### 详细描述
IsPasswordField 尝试将传入的参数转换为字符串，然后猜测其是否是 password 字段

Example:
```
str.IsPasswordField(&#34;password&#34;) // true
str.IsPasswordField(&#34;pwd&#34;) // true
str.IsPasswordField(&#34;id&#34;) // false
```


#### 定义

`IsPasswordField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsPlainBase64Value

#### 详细描述
IsPlainBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据，它相比于 IsBase64Value 多了一层判断，即判断 base64 解码后的数据是否为可见字符串

Example:
```
str.IsPlainBase64Value(&#34;MTI=&#34;) // true
str.IsPlainBase64Value(&#34;Aw==&#34;) // false
```


#### 定义

`IsPlainBase64Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsRedirectParam

#### 详细描述
IsRedirectParam 根据传入的参数名和参数值猜测是否为重定向参数

Example:
```
str.IsRedirectParam(&#34;to&#34;,&#34;http://www.yaklang.com&#34;) // true，因为参数值为完整的 URL
str.IsRedirectParam(&#34;target&#34;,&#34;/index.php&#34;) // true，因为参数值为一个 URL 路径而且参数名为常见的跳转的参数名
str.IsRedirectParam(&#34;id&#34;, &#34;1&#34;) // false
```


#### 定义

`IsRedirectParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsSQLColumnField

#### 详细描述
IsSQLColumnField 尝试将传入的参数转换为字符串，然后猜测其是否是 SQL 查询字段

Example:
```
str.IsSQLColumnField(&#34;sort&#34;) // true
str.IsSQLColumnField(&#34;order&#34;) // true
str.IsSQLColumnField(&#34;id&#34;) // false
```


#### 定义

`IsSQLColumnField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsSensitiveJson

#### 详细描述
IsSensitiveJson  尝试将传入的参数转换为字符串，然后猜测其是否为敏感的 JSON 数据

Example:
```
str.IsSensitiveJson(`{&#34;password&#34;:&#34;123456&#34;}`) // true
str.IsSensitiveJson(`{&#34;uid&#34;: 10086}`) // true
str.IsSensitiveJson(`{&#34;id&#34;: 1}`) // false
```


#### 定义

`IsSensitiveJson(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsSensitiveTokenField

#### 详细描述
IsSensitiveTokenField 尝试将传入的参数转换为字符串，然后猜测其是否是 token 字段

Example:
```
str.IsSensitiveTokenField(&#34;token&#34;) // true
str.IsSensitiveTokenField(&#34;access_token&#34;) // true
str.IsSensitiveTokenField(&#34;id&#34;) // false
```


#### 定义

`IsSensitiveTokenField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsServerError

#### 详细描述
IsServerError 猜测传入的参数是否为服务器错误

Example:
```
str.IsServerError(`Fatal error: Uncaught Error: Call to undefined function sum() in F:\xampp\htdocs\test.php:7 Stack trace: #0 {main} thrown in &lt;path&gt; on line 7`) // true，这是PHP报错信息
```


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


### IsSha256Value

#### 详细描述
IsSha256Value 尝试将传入的参数转换为字符串，然后猜测其是否是 SHA256 编码的数据

Example:
```
str.IsSha256Value(&#34;a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3&#34;) // true
str.IsSha256Value(&#34;123&#34;) // false
```


#### 定义

`IsSha256Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsStrongPassword

#### 详细描述
IsStrongPassword 判断字符串是否为强密码，强密码的定义为：长度大于8，同时包含特殊字符、小写字母、大写字母、数字

Example:
```
str.IsStrongPassword(&#34;12345678&#34;) // false
str.IsStrongPassword(&#34;12345678a&#34;) // false
str.IsStrongPassword(&#34;12345678aA&#34;) // false
str.IsStrongPassword(&#34;12345678aA!&#34;) // true
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


### IsTLSServer

#### 详细描述
IsTLSServer 尝试访问传入的host，然后判断其是否为 TLS 服务。第一个参数为 host，后面可以传入零个或多个参数，为代理地址

Example:
```
str.IsTLSServer(&#34;www.yaklang.com:443&#34;) // true
str.IsTLSServer(&#34;www.yaklang.com:80&#34;) // false
```


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


### IsUrlParam

#### 详细描述
IsUrlParam 根据传入的参数名和参数值猜测是否为 URL 参数

Example:
```
str.IsUrlParam(&#34;url&#34;,&#34;http://www.yaklang.com&#34;) // true，因为参数名为常见的 URL 参数名，且参数值为完整的URL
str.IsUrlParam(&#34;id&#34;,&#34;1&#34;) // false
```


#### 定义

`IsUrlParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsUrlPath

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


### IsUsernameField

#### 详细描述
IsUsernameField 尝试将传入的参数转换为字符串，然后猜测其是否是 username 字段

Example:
```
str.IsUsernameField(&#34;username&#34;) // true
str.IsUsernameField(&#34;user&#34;) // true
str.IsUsernameField(&#34;id&#34;) // false
```


#### 定义

`IsUsernameField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsXmlParam

#### 详细描述
IsXmlParam 根据传入的参数名和参数值猜测是否为 XML 参数

Example:
```
str.IsXmlParam(&#34;xml&#34;,&#34;&lt;xml&gt;&lt;/xml&gt;&#34;) // true，因为参数名为常见的 XML 参数名，且参数值为 XML 格式的字符串
str.IsXmlParam(&#34;X&#34;,&#34;&lt;xml&gt;&lt;/xml&gt;&#34;) // true，因为参数值为 XML 格式的字符串
str.IsXmlParam(&#34;id&#34;,&#34;1&#34;) // false
```


#### 定义

`IsXmlParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsXmlRequest

#### 详细描述
IsXmlRequest 猜测传入的参数是否为请求头是 XML 格式的原始 HTTP 请求报文

Example:
```
str.IsXmlRequest(&#34;POST / HTTP/1.1\r\nContent-Type: application/xml\r\n\r\n&lt;xml&gt;&lt;/xml&gt;&#34;) // true
str.IsXmlRequest(&#34;POST / HTTP/1.1\r\nContent-Type: text/html\r\n\r\n&lt;html&gt;&lt;/html&gt;&#34;) // false
```


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


### IsXmlValue

#### 详细描述
IsXmlValue 尝试将传入的参数转换为字符串，然后猜测其是否是 XML 格式的数据

Example:
```
str.IsXmlValue(&#34;&lt;xml&gt;&lt;/xml&gt;&#34;) // true
str.IsXmlValue(&#34;&lt;html&gt;&lt;/html&gt;&#34;) // false
```


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


### Join

#### 详细描述
Join 将i中的元素用d连接，如果传入的参数不是字符串，会自动将其转为字符串，再将其用d连接。如果连接失败，则会返回i的字符串形式。

Example:
```
str.Join([]string{&#34;hello&#34;, &#34;yak&#34;}, &#34; &#34;) // hello yak
str.Join([]int{1, 2, 3}, &#34; &#34;) // 1 2 3
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


### JsonToMap

#### 详细描述
JsonToMap 将 json 字符串 line 解析为 map

Example:
```
str.JsonToMap(`{&#34;a&#34;:1,&#34;b&#34;:2}`) // map[a:1 b:2]
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


### JsonToMapList

#### 详细描述
JsonToMapList 将 json 字符串 line 解析为 map 列表

Example:
```
str.JsonToMapList(`{&#34;a&#34;:1,&#34;b&#34;:2} {&#34;c&#34;:3, &#34;d&#34;:4}`) // [map[a:1 b:2] map[c:3 d:4]]
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


### LastIndex

#### 详细描述
LastIndex 返回字符串s中substr最后一次出现的位置的索引，如果字符串中不存在substr，则返回-1

Example:
```
str.LastIndex(&#34;hello yak&#34;, &#34;l&#34;) // 3
str.LastIndex(&#34;hello yak&#34;, &#34;m&#34;) // -1
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


### LastIndexAny

#### 详细描述
LastIndexAny 返回字符串s中chars任意字符最后一次出现的位置的索引，如果字符串中不存在chars，则返回-1

Example:
```
str.LastIndexAny(&#34;hello yak&#34;, &#34;ly&#34;) // 6
str.LastIndexAny(&#34;hello yak&#34;, &#34;m&#34;) // -1
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


### LastIndexByte

#### 详细描述
LastIndexByte 返回字符串s中最后一个等于c的字符的索引，如果字符串中不存在c，则返回-1

Example:
```
str.LastIndexByte(&#34;hello yak&#34;, &#39;l&#39;) // 3
str.LastIndexByte(&#34;hello yak&#34;, &#39;m&#39;) // -1
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


### LowerAndTrimSpace

#### 详细描述
LowerAndTrimSpace 将字符串raw转换为小写并去除前后空白字符

Example:
```
str.LowerAndTrimSpace(&#34;  Hello  &#34;) // &#34;hello&#34;
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


### MatchAllOfGlob

#### 详细描述
MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果所有的glob模式都匹配成功，则返回 true，否则返回 false

Example:
```
str.MatchAllOfGlob(&#34;abc&#34;, &#34;a*&#34;, &#34;?b?&#34;, &#34;[a-z]?c&#34;) // true
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


### MatchAllOfRegexp

#### 详细描述
MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果所有的正则表达式都匹配成功，则返回 true，否则返回 false

Example:
```
str.MatchAllOfRegexp(&#34;abc&#34;, &#34;a.+&#34;, &#34;.?b.?&#34;, &#34;\\w{2}c&#34;) // true
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


### MatchAllOfSubString

#### 详细描述
MatchAllOfSubString 尝试将 i 转换为字符串，然后判断所有子串 subStr 是否都存在于 i 中，如果都存在则返回 true，否则返回 false，此函数忽略大小写

Example:
```
str.MatchAllOfSubString(&#34;abc&#34;, &#34;a&#34;, &#34;b&#34;, &#34;c&#34;) // true
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


### MatchAnyOfGlob

#### 详细描述
MatchAnyOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否则返回 false

Example:
```
str.MatchAnyOfGlob(&#34;abc&#34;, &#34;a*&#34;, &#34;??b&#34;, &#34;[^a-z]?c&#34;) // true
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


### MatchAnyOfRegexp

#### 详细描述
MatchAnyOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true，否则返回 false

Example:
```
str.MatchAnyOfRegexp(&#34;abc&#34;, &#34;a.+&#34;, &#34;Ab.?&#34;, &#34;.?bC&#34;) // true
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


### MatchAnyOfSubString

#### 详细描述
MatchAnyOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i 中则返回 true，否则返回 false，此函数忽略大小写

Example:
```
str.MatchAnyOfSubString(&#34;abc&#34;, &#34;a&#34;, &#34;z&#34;, &#34;x&#34;) // true
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


### MergeUrlFromHTTPRequest

#### 详细描述
MergeUrlFromHTTPRequest 将传入的 target 与 原始 HTTP 请求报文中的 URL 进行合并，并返回合并后的 URL

Example:
```
url = str.MergeUrlFromHTTPRequest(b&#34;GET /z HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n&#34;, &#34;/a/b&#34;, true) // url = &#34;https://www.yaklang.com/z/a/b&#34;
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


### NewFilter

#### 详细描述
NewFilter 创建一个默认的字符串布谷鸟过滤器，布谷鸟过滤器用于判断一个元素是否在一个集合中，它存在极低的假阳性（即说存在的元素实际上不存在），通常这个集合中的元素数量非常大才会使用布谷鸟过滤器。

Example:
```
f = str.NewFilter()
f.Insert(&#34;hello&#34;)
f.Exist(&#34;hello&#34;) // true
```


#### 定义

`NewFilter() *StringFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*StringFilter` |   |


### NewReader

#### 详细描述
NewReader returns a new Reader reading from s.
It is similar to bytes.NewBufferString but more efficient and non-writable.


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


### ParamsGetOr

#### 详细描述
ParamsGetOr 从 map 中获取 key 对应的值，如果不存在则返回 defaultValue

Example:
```
str.ParamsGetOr({&#34;a&#34;: &#34;1&#34;}, &#34;a&#34;, &#34;2&#34;) // 1
str.ParamsGetOr({&#34;a&#34;: &#34;1&#34;}, &#34;b&#34;, &#34;2&#34;) // 2
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


### ParseBytesToHTTPRequest

#### 详细描述
ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求

Example:
```
req, err := str.ParseBytesToHTTPRequest(b&#34;GET / HTTP/1.1\r\nHost: example.com\r\n\r\n&#34;)
```


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| reqInst | `*http.Request` |   |
| err | `error` |   |


### ParseBytesToHTTPResponse

#### 详细描述
ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应

Example:
```
res, err := str.ParseBytesToHTTPResponse(b&#34;HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok&#34;)
```


#### 定义

`ParseBytesToHTTPResponse(res []byte) (rspInst *http.Response, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*http.Response` |   |
| err | `error` |   |


### ParseStringToCClassHosts

#### 详细描述
ParseStringToCClassHosts 尝试从给定的字符串中解析Host，再将其转为 C 类网段，用,分隔

Example:
```
str.ParseStringToCClassHosts(&#34;192.168.0.1-255&#34;) // 192.168.0.0/24
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


### ParseStringToHTTPRequest

#### 详细描述
ParseStringToHTTPRequest 将字符串解析为 HTTP 请求

Example:
```
req, err = str.ParseStringToHTTPRequest(&#34;GET / HTTP/1.1\r\nHost: example.com\r\n\r\n&#34;)
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


### ParseStringToHTTPResponse

#### 详细描述
ParseStringToHTTPResponse 将字符串解析为 HTTP 响应

Example:
```
res, err := str.ParseStringToHTTPResponse(&#34;HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok&#34;)
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


### ParseStringToHostPort

#### 详细描述
ParseStringToHostPort 尝试从字符串中解析出host和port，并与错误一起返回

Example:
```
host, port, err = str.ParseStringToHostPort(&#34;127.0.0.1:8888&#34;) // host = &#34;127.0.0.1&#34;, port = 8888, err = nil
host, port, err = str.ParseStringToHostPort(&#34;https://example.com&#34;) // host = &#34;example.com&#34;, port = 443, err = nil
host, port, err = str.ParseStringToHostPort(&#34;Hello Yak&#34;) // host = &#34;&#34;, port = 0, err = error(&#34;unknown port for [Hello Yak]&#34;)
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


### ParseStringToHosts

#### 详细描述
ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号、换行分隔，并且会解析 CIDR 网段

Example:
```
str.ParseStringToHosts(&#34;192.168.0.1/32,127.0.0.1&#34;) // [&#34;192.168.0.1&#34;, &#34;127.0.0.1&#34;]
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


### ParseStringToLines

#### 详细描述
ParseStringToLines 将字符串按换行符(\n)分割成字符串数组，并去除BOM头和空行

Example:
```
str.ParseStringToLines(&#34;Hello World\nHello Yak&#34;) // [&#34;Hello World&#34;, &#34;Hello Yak&#34;]
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


### ParseStringToPorts

#### 详细描述
ParseStringToPorts 将字符串解析成 Port 列表， Port 可以以逗号分隔，并且会解析-分隔的范围

Example:
```
str.ParseStringToPorts(&#34;10086-10088,23333&#34;) // [10086, 10087, 10088, 23333]
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


### ParseStringToUrls

#### 详细描述
ParseStringToUrls 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口

Example:
```
str.ParseStringToUrls(&#34;yaklang.com:443&#34;, &#34;https://yaklang.io&#34;) // [https://yaklang.com, https://yaklang.io]
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


### ParseStringToUrlsWith3W

#### 详细描述
ParseStringToUrlsWith3W 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口，还会补全域名前的 www 前缀

Example:
```
str.ParseStringToUrlsWith3W(&#34;yaklang.com:443&#34;, &#34;https://yaklang.io&#34;) // [https://yaklang.com, https://www.yaklang.com, https://yaklang.io, https://www.yaklang.io]
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


### ParseStringUrlToUrlInstance

#### 详细描述
ParseStringUrlToUrlInstance 将字符串 url 解析为 URL 结构体并返回错误

Example:
```
str.ParseStringUrlToUrlInstance(&#34;https://yaklang.com/abc?a=1&#34;)
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


### ParseStringUrlToWebsiteRootPath

#### 详细描述
ParseStringUrlToWebsiteRootPath 将字符串 url 解析为其根路径的URL

Example:
```
str.ParseStringUrlToWebsiteRootPath(&#34;https://yaklang.com/abc?a=1&#34;) // https://yaklang.com/
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


### PathJoin

#### 详细描述
PathJoin 将传入的文件路径进行拼接并返回

Example:
```
str.PathJoin(&#34;/var&#34;, &#34;www&#34;, &#34;html&#34;) // in *unix: &#34;/var/www/html&#34;    in Windows: \var\www\html
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


### RandSecret

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


### RandStr

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


### Random

#### 详细描述
RandomUpperAndLower 返回一个随机大小写的字符串

Example:
```
str.RandomUpperAndLower(&#34;target&#34;) // TArGeT
```


#### 定义

`Random(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### RegexpMatch

#### 详细描述
RegexpMatch 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false

Example:
```
str.RegexpMatch(&#34;^[a-z]+$&#34;, &#34;abc&#34;) // true
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


### RemoveDuplicatePorts

#### 详细描述
RemoveDuplicatePorts 解析两个字符串形式的端口列表，并使用布谷鸟过滤器进行去重。

这个函数首先创建一个布谷鸟过滤器，然后将两个输入字符串解析为端口列表。

接着，它遍历这两个列表，将每个端口添加到布谷鸟过滤器中，如果这个端口之前没有被添加过，

那么它也会被添加到结果列表中。最后，函数返回结果列表，其中包含两个输入字符串中的所有唯一端口。

Example:
```
RemoveDuplicatePorts(&#34;10086-10088,23333&#34;, &#34;10086,10089,23333&#34;) // [10086, 10087, 10088, 23333, 10089]
```


#### 定义

`RemoveDuplicatePorts(ports1 string, ports2 string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports1 | `string` |   |
| ports2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### RemoveRepeat

#### 详细描述
RemoveRepeat 移除字符串切片slc中的重复元素

Example:
```
str.RemoveRepeat([&#34;hello&#34;, &#34;yak&#34;, &#34;hello&#34;]) // [&#34;hello&#34;, &#34;yak&#34;]
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


### Repeat

#### 详细描述
Repeat 返回将字符串s重复count次的字符串

Example:
```
str.Repeat(&#34;hello&#34;, 3) // hellohellohello
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


### Replace

#### 详细描述
Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串

Example:
```
str.Replace(&#34;hello yak&#34;, &#34;l&#34;, &#34;L&#34;, 1) // heLlo yak
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


### ReplaceAll

#### 详细描述
ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串

Example:
```
str.ReplaceAll(&#34;hello yak&#34;, &#34;yak&#34;, &#34;yakit&#34;) // hello yakit
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


### ReplaceHTTPPacketBody

#### 详细描述
ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文

Example:
```
poc.ReplaceBody(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, &#34;hello yak&#34;, false)
```


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


### Split

#### 详细描述
Split 将字符串s按照sep分割成字符串切片

Example:
```
str.Split(&#34;Hello Yak&#34;, &#34; &#34;) // [Hello&#34;, &#34;Yak&#34;]
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


### SplitAfter

#### 详细描述
SplitAfter 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep

Example:
```
str.SplitAfter(&#34;Hello-Yak&#34;, &#34;-&#34;) // [Hello-&#34;, &#34;Yak&#34;]
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


### SplitAfterN

#### 详细描述
SplitAfterN 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep，最多分为n个元素

Example:
```
str.SplitAfterN(&#34;Hello-Yak-and-World&#34;, &#34;-&#34;, 2) // [Hello-&#34;, &#34;Yak-and-World&#34;]
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


### SplitAndTrim

#### 详细描述
SplitAndTrim 将字符串s按照sep分割成字符串切片，并且去除每个字符串的前后空白字符

Example:
```
str.SplitAndTrim(&#34; hello yak &#34;, &#34; &#34;) // [&#34;hello&#34;, &#34;yak&#34;]
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


### SplitHTTPHeadersAndBodyFromPacket

#### 详细描述
SplitHTTPHeadersAndBodyFromPacket 将传入的 HTTP 报文分割为 headers 和 body，如果传入了hook，则会在每次读取到一行 header 时调用 hook

Example:
```
headers, body = str.SplitHTTPHeadersAndBodyFromPacket(b&#34;GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n&#34;)
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


### SplitHostsToPrivateAndPublic

#### 详细描述
SplitHostsToPrivateAndPublic 将 hosts 按照私有 IP 和公有 IP 分开

Example:
```
str.SplitHostsToPrivateAndPublic(&#34;127.0.0.1&#34;, &#34;8.8.8.8&#34;, &#34;10.0.0.1&#34;) // [&#34;127.0.0.1&#34;, &#34;10.0.0.1&#34;], [&#34;8.8.8.8&#34;]
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


### SplitN

#### 详细描述
SplitN 将字符串s按照sep分割成字符串切片，最多分为n个元素

Example:
```
str.SplitN(&#34;Hello-Yak-and-World&#34;, &#34;-&#34;, 2) // [Hello&#34;, &#34;Yak-and-World&#34;]
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


### StartsWith

#### 详细描述
StartsWith / HasPrefix 判断字符串s是否以prefix开头

Example:
```
str.StartsWith(&#34;Hello Yak&#34;, &#34;Hello&#34;) // true
str.StartsWith(&#34;Hello Yak&#34;, &#34;Yak&#34;) // false
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


### StringContainsAnyOfSubString

#### 详细描述
StringContainsAnyOfSubString 判断字符串s中是否包含subs中的任意一个子串

Example:
```
str.StringContainsAnyOfSubString(&#34;hello yak&#34;, [&#34;yak&#34;, &#34;world&#34;]) // true
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


### StringSliceContains

#### 详细描述
StringSliceContains 判断字符串切片s中是否包含raw，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含

Example:
```
str.StringSliceContains([&#34;hello&#34;, &#34;yak&#34;], &#34;yak&#34;) // true
str.StringSliceContains([1, 2, 3], &#34;4&#34;) // false
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


### StringSliceContainsAll

#### 详细描述
StringSliceContainsAll 判断字符串切片s中是否完全包含elements中的所有元素，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含

Example:
```
str.StringSliceContainsAll([&#34;hello&#34;, &#34;yak&#34;], &#34;hello&#34;, &#34;yak&#34;) // true
str.StringSliceContainsAll([&#34;hello&#34;, &#34;yak&#34;], &#34;hello&#34;, &#34;yak&#34;, &#34;world&#34;) // false
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


### Subtract

#### 详细描述
Subtract 返回两个字符串切片的差集

Example:
```
str.Subtract([&#34;1&#34;, &#34;2&#34;, &#34;3&#34;], [&#34;3&#34;, &#34;4&#34;, &#34;5&#34;]) // [&#34;1&#34;, &#34;2&#34;]
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


### Title

#### 详细描述
Title 返回字符串s的标题化版本，即所有单词的首字母都是大写的

Example:
```
str.Title(&#34;hello yak&#34;) // Hello Yak
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


### ToJsonIndentStr

#### 详细描述
ToJsonIndentStr 将v转换为格式化的JSON字符串并返回，如果转换失败，则返回空字符串

Example:
```
str.ToJsonIndentStr({&#34;hello&#34;:&#34;yak&#34;}) // {&#34;hello&#34;: &#34;yak&#34;}
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


### ToLower

#### 详细描述
ToLower 返回字符串s的小写形式

Example:
```
str.ToLower(&#34;HELLO YAK&#34;) // hello yak
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


### ToLowerSpecial

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


### ToStringSlice

#### 详细描述
ToStringSlice 将任意类型的数据转换为字符串切片

Example:
```
str.ToStringSlice(&#34;hello&#34;) // [&#34;hello&#34;]
str.ToStringSlice([1, 2]) // [&#34;1&#34;, &#34;2&#34;]
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


### ToTitle

#### 详细描述
ToTitle 返回字符串s的标题化版本，其中所有Unicode字母都会被转换为其大写

Example:
```
str.ToTitle(&#34;hello yak&#34;) // HELLO YAK
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


### ToTitleSpecial

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


### ToUpper

#### 详细描述
ToUpper 返回字符串s的大写形式

Example:
```
str.ToUpper(&#34;hello yak&#34;) // HELLO YAK
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


### ToUpperSpecial

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


### ToValidUTF8

#### 详细描述
ToValidUTF8 返回将字符串s中无效的UTF-8编码替换为replacement的字符串

Example:
```

str.ToValidUTF8(&#34;hello yak&#34;, &#34;?&#34;) // hello yak
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


### Trim

#### 详细描述
Trim 返回将字符串s两侧所有包含cutset字符串中的字符都去掉的字符串

Example:
```
str.Trim(&#34;Hello Yak&#34;, &#34;Hk&#34;) // ello Ya
str.Trim(&#34;HelloYakHello&#34;, &#34;Hello&#34;) // Yak
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


### TrimLeft

#### 详细描述
TrimLeft 返回将字符串s左侧所有包含cutset字符串中的字符都去掉的字符串

Example:
```
str.TrimLeft(&#34;Hello Yak&#34;, &#34;H&#34;) // ello Yak
str.TrimLeft(&#34;HelloYak&#34;, &#34;Hello&#34;) // Yak
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


### TrimPrefix

#### 详细描述
TrimPrefix 返回将字符串s前缀prefix去掉的字符串

Example:
```
str.TrimPrefix(&#34;Hello Yak&#34;, &#34;Hello&#34;) //  Yak
str.TrimPrefix(&#34;HelloYak&#34;, &#34;Hello&#34;) // Yak
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


### TrimRight

#### 详细描述
TrimRight 返回将字符串s右侧所有包含cutset字符串中的字符都去掉的字符串

Example:
```
str.TrimRight(&#34;Hello Yak&#34;, &#34;k&#34;) // Hello Ya
str.TrimRight(&#34;HelloYak&#34;, &#34;Yak&#34;) // Hello
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


### TrimSpace

#### 详细描述
TrimSpace 返回将字符串s两侧所有的空白字符都去掉的字符串

Example:
```
str.TrimSpace(&#34; \t\n Hello Yak \n\t\r\n&#34;) // Hello Yak
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


### TrimSuffix

#### 详细描述
TrimSuffix 返回将字符串s后缀suffix去掉的字符串

Example:
```
str.TrimSuffix(&#34;Hello Yak&#34;, &#34;ak&#34;) // Hello Y
str.TrimSuffix(&#34;HelloYak&#34;, &#34;Yak&#34;) // Hello
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


### UrlJoin

#### 详细描述
UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误

Example:
```
newURL, err = str.UrlJoin(&#34;https://yaklang.com&#34;, &#34;asd&#34;, &#34;qwe&#34;) // newURL = &#34;https://yaklang.com/asd/qwe&#34;, err = nil
newURL, err = str.UrlJoin(&#34;https://yaklang.com/zxc&#34;, &#34;/asd&#34;, &#34;qwe&#34;) // newURL = &#34;https://yaklang.com/asd/qwe&#34;, err = nil
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


### VersionCompare

#### 详细描述
VersionCompare 泛用形的版本比较,传入(p1,p2 string), p1&amp;gt;p2返回1,nil, p1&amp;lt;p2返回-1,nil, p1==p2返回0,nil, 比较失败返回 -2,err


#### 定义

`VersionCompare(v1 string, v2 string) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |
| r2 | `error` |   |


### VersionEqual

#### 详细描述
VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false

Example:
```
str.VersionEqual(&#34;3.0&#34;, &#34;3.0&#34;) // true
str.VersionEqual(&#34;3.0&#34;, &#34;3.0a&#34;) // false
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


### VersionGreater

#### 详细描述
VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false

Example:
```
str.VersionGreater(&#34;1.0.0&#34;, &#34;0.9.9&#34;) // true
str.VersionGreater(&#34;3.0&#34;, &#34;2.8.8alpha&#34;) // true
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


### VersionGreaterEqual

#### 详细描述
VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false

Example:
```
str.VersionGreaterEqual(&#34;1.0.0&#34;, &#34;0.9.9&#34;) // true
str.VersionGreaterEqual(&#34;3.0&#34;, &#34;3.0&#34;) // true
str.VersionGreaterEqual(&#34;3.0&#34;, &#34;3.0a&#34;) // false
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


### VersionLess

#### 详细描述
VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false

Example:
```
str.VersionLess(&#34;0.9.9&#34;, &#34;1.0.0&#34;) // true
str.VersionLess(&#34;3.0&#34;, &#34;3.0a&#34;) // true
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


### VersionLessEqual

#### 详细描述
VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false

Example:
```
str.VersionLessEqual(&#34;0.9.9&#34;, &#34;1.0.0&#34;) // true
str.VersionLessEqual(&#34;3.0&#34;, &#34;3.0&#34;) // true
str.VersionLessEqual(&#34;3.0a&#34;, &#34;3.0&#34;) // false
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

str.f(&#34;hello %s&#34;, &#34;yak&#34;) // hello yak
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


