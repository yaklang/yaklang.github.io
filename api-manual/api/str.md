# str

|函数名|函数描述/介绍|
|:------|:--------|
| [str.AddPrefixLineNumber](#addprefixlinenumber) ||
| [str.AddPrefixLineNumberToReader](#addprefixlinenumbertoreader) ||
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
| [str.ExtractDomain](#extractdomain) |ExtractDomain 尝试提取字符串中的域名并返回，后续可以接收一个 tryDecode 参数，如果传入 true，则会尝试对输入的文本进行解码(双重URL编码，URL编码，unicode编码，quoted编码)  |
| [str.ExtractHost](#extracthost) |ExtractHost 尝试从字符串中解析出host和port，并返回host  |
| [str.ExtractHostPort](#extracthostport) |ExtractHostPort 尝试从字符串中解析出host和port，并返回host:port  |
| [str.ExtractJson](#extractjson) |ExtractJson 尝试提取字符串中的 JSON 并进行修复, 返回中的元素都是Object  |
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
| [str.IsAllVisibleASCII](#isallvisibleascii) ||
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
| [str.NewReader](#newreader) |NewReader returns a new [Reader] reading from s. It is similar to [bytes.NewBufferString] but more efficient and non-writable. |
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
| [str.Quote](#quote) |Quote returns a double-quoted Go string literal representing s. The returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for control charac...|
| [str.RandSecret](#randsecret) |RandSecret 返回在所有可见ascii字符表中随机挑选 n 个字符组成的密码字符串，这个密码经过str.IsStrongPassword验证，即为强密码  |
| [str.RandStr](#randstr) |RandStringBytes 返回在大小写字母表中随机挑选 n 个字符组成的字符串  |
| [str.Random](#random) |RandomUpperAndLower 返回一个随机大小写的字符串  |
| [str.RandomUpperAndLower](#randomupperandlower) |RandomUpperAndLower 返回一个随机大小写的字符串  |
| [str.RegexpMatch](#regexpmatch) |RegexpMatch 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false  |
| [str.RemoveDuplicatePorts](#removeduplicateports) |RemoveDuplicatePorts 解析两个字符串形式的端口列表，并使用布谷鸟过滤器进行去重。  这个函数首先创建一个布谷鸟过滤器，然后将两个输入字符串解析为端口列表。  接着，它遍历这两个列表，将每个端口添加到布谷鸟过滤器中，如果这个端口之前没有被添加过，  那么它也会被添加到结果列表中。最...|
| [str.RemoveRepeat](#removerepeat) |RemoveRepeat 移除字符串切片slc中的重复元素  |
| [str.RenderTemplate](#rendertemplate) ||
| [str.Repeat](#repeat) |Repeat 返回将字符串s重复count次的字符串  |
| [str.Replace](#replace) |Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串  |
| [str.ReplaceAll](#replaceall) |ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串  |
| [str.ReplaceHTTPPacketBody](#replacehttppacketbody) |ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文  |
| [str.ShrinkString](#shrinkstring) |str.ShrinkString 将会把一个字符串压缩成一个设定一个长度下的较短的字符串  |
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
| [str.TextReaderSplit](#textreadersplit) ||
| [str.TextSplit](#textsplit) |核心分割方法|
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
| [str.Unquote](#unquote) |Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes.  (If s is single-qu...|
| [str.UrlJoin](#urljoin) |UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误  |
| [str.VersionCompare](#versioncompare) |VersionCompare 泛用形的版本比较,传入(p1,p2 string), p1&amp;gt;p2返回1,nil, p1&amp;lt;p2返回-1,nil, p1==p2返回0,nil, 比较失败返回 -2,err |
| [str.VersionEqual](#versionequal) |VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false  |
| [str.VersionGreater](#versiongreater) |VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false  |
| [str.VersionGreaterEqual](#versiongreaterequal) |VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false  |
| [str.VersionLess](#versionless) |VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false  |
| [str.VersionLessEqual](#versionlessequal) |VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false  |
| [str.f](#f) |f 用于对字符串进行格式化  |


## 函数定义
### AddPrefixLineNumber

#### 详细描述


#### 定义

`AddPrefixLineNumber(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### AddPrefixLineNumberToReader

#### 详细描述


#### 定义

`AddPrefixLineNumberToReader(i any) io.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.Reader` |   |


### CalcSSDeep

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


### CalcSimHashStability

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


### CalcSimilarity

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


### CalcTextMaxSubStrStability

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


### Compare

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


### Contains

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


### ContainsAny

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


### Count

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


### Cut

#### 详细描述
Cut slices s around the first instance of sep,
returning the text before and after sep.
The found result reports whether sep appears in s.
If sep does not appear in s, cut returns s, &#34;&#34;, false.


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
If s doesn&#39;t start with prefix, CutPrefix returns s, false.
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
If s doesn&#39;t end with suffix, CutSuffix returns s, false.
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


### EqualFold

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


### ExtractBodyFromHTTPResponseRaw

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


### ExtractChineseIDCards

#### 详细描述
ExtractChineseIDCards 尝试将传入的参数转换为字符串，然后提取字符串中的身份证号

Example:
```
str.ExtractChineseIDCards("Your ChineseID is: 110101202008027420?") // ["110101202008027420"]
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
ExtractDomain 尝试提取字符串中的域名并返回，后续可以接收一个 tryDecode 参数，如果传入 true，则会尝试对输入的文本进行解码(双重URL编码，URL编码，unicode编码，quoted编码)

Example:
```
str.ExtractDomain("hello yak") // []
str.ExtractDomain("hello yaklang.com or yaklang.io") // ["yaklang.com", "yaklang.io"]
str.ExtractDomain(`{"message:"%79%61%6b%6c%61%6e%67.com"}`, true) // ["yaklang.com"]
```


#### 定义

`ExtractDomain(i any, tryDecode ...bool) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| tryDecode | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### ExtractHost

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


### ExtractHostPort

#### 详细描述
ExtractHostPort 尝试从字符串中解析出host和port，并返回host:port

Example:
```
str.ExtractHostPort("https://127.0.0.1:8888") // 127.0.0.1:8888
str.ExtractHostPort("https://baidu.com") // 127.0.0.1:443
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
ExtractJson 尝试提取字符串中的 JSON 并进行修复, 返回中的元素都是Object

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


### ExtractJsonWithRaw

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


### ExtractRootDomain

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


### ExtractStrContext

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


### ExtractTitle

#### 详细描述
ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回

Example:
```
str.ExtractTitle("hello yak") // ""
str.ExtractTitle("<title>hello yak</title>") // "hello yak"
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


### ExtractURLFromHTTPRequestRaw

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


### Fields

#### 详细描述
Fields 返回将字符串s按照空白字符（&#39;\t&#39;, &#39;\n&#39;, &#39;\v&#39;, &#39;\f&#39;, &#39;\r&#39;, &#39; &#39;, 0x85, 0xA0）分割的字符串切片

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


### FilterPorts

#### 详细描述
FilterPorts 接受两个字符串形式的端口列表作为参数，返回一个新的端口列表，

其中包含了在 `ports1` 中但不在 `ports2` 中的所有端口。

这个函数首先将两个输入字符串解析为端口列表，然后创建一个映射（或集合）来存储 `ports2` 中的所有端口。

然后，它遍历 `ports1` 中的每个端口，如果这个端口不在 `ports2` 中，那么它就会被添加到结果列表中。

最后，函数返回结果列表，其中包含了所有只在 `ports1` 中出现的端口。

Example:
```
FilterPorts("1-10", "2-10") // [1]
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
str.FixHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
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
fixedResponse, body, err = str.FixHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=gbk\r\n\r\n<html>你好</html>")
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


### HasPrefix

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


### HasSuffix

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


### HostPort

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


### IPv4ToCClassNetwork

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


### Index

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


### IndexAny

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


### IndexByte

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


### Intersect

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


### IntersectString

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


### IsAlNum

#### 详细描述
IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成

Example:
```
str.IsAlphaNum("abc123") // true
str.IsAlphaNum("abc123!") // false
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


### IsAllVisibleASCII

#### 详细描述


#### 定义

`IsAllVisibleASCII(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsAlpha

#### 详细描述
IsAlpha 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母组成

Example:
```
str.IsAlpha("abc") // true
str.IsAlpha("abc123") // false
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
str.IsAlphaNum("abc123") // true
str.IsAlphaNum("abc123!") // false
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
str.IsBase64Value("MTI=") // true
str.IsBase64Value("123") // false
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
str.IsCaptchaField("captcha") // true
str.IsCaptchaField("code_img") // true
str.IsCaptchaField("id") // false
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
str.IsDigit("123") // true
str.IsDigit("abc123") // false
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
str.IsHtmlResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<html></html>") // true
resp, _ = str.ParseStringToHTTPResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<html></html>")
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


### IsIPv6

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


### IsJSONPParam

#### 详细描述
IsJSONPParam 根据传入的参数名和参数值猜测是否为 JSONP 参数

Example:
```
str.IsJSONPParam("callback","jquery1.0.min.js") // true，因为参数名为常见的 JSONP 参数名，且参数值为常见的JS文件名
str.IsJSONPParam("f","jquery1.0.min.js") // true，因为参数值为常见的 JS 文件名
str.IsJSONPParam("id","1") // false
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
str.IsJsonResponse("HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n{\"code\": 0}") // true
str.IsJsonResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nhello") // false
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
str.IsMD5Value("202cb962ac59075b964b07152d234b70") // true
str.IsMD5Value("123") // false
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
str.IsPasswordField("password") // true
str.IsPasswordField("pwd") // true
str.IsPasswordField("id") // false
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
str.IsPlainBase64Value("MTI=") // true
str.IsPlainBase64Value("Aw==") // false
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
str.IsRedirectParam("to","http://www.yaklang.com") // true，因为参数值为完整的 URL
str.IsRedirectParam("target","/index.php") // true，因为参数值为一个 URL 路径而且参数名为常见的跳转的参数名
str.IsRedirectParam("id", "1") // false
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
str.IsSQLColumnField("sort") // true
str.IsSQLColumnField("order") // true
str.IsSQLColumnField("id") // false
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
str.IsSensitiveJson(`{"password":"123456"}`) // true
str.IsSensitiveJson(`{"uid": 10086}`) // true
str.IsSensitiveJson(`{"id": 1}`) // false
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
str.IsSensitiveTokenField("token") // true
str.IsSensitiveTokenField("access_token") // true
str.IsSensitiveTokenField("id") // false
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
str.IsServerError(`Fatal error: Uncaught Error: Call to undefined function sum() in F:\xampp\htdocs\test.php:7 Stack trace: #0 {main} thrown in <path> on line 7`) // true，这是PHP报错信息
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
str.IsSha256Value("a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3") // true
str.IsSha256Value("123") // false
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


### IsTLSServer

#### 详细描述
IsTLSServer 尝试访问传入的host，然后判断其是否为 TLS 服务。第一个参数为 host，后面可以传入零个或多个参数，为代理地址

Example:
```
str.IsTLSServer("www.yaklang.com:443") // true
str.IsTLSServer("www.yaklang.com:80") // false
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
str.IsUrlParam("url","http://www.yaklang.com") // true，因为参数名为常见的 URL 参数名，且参数值为完整的URL
str.IsUrlParam("id","1") // false
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
str.IsUsernameField("username") // true
str.IsUsernameField("user") // true
str.IsUsernameField("id") // false
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
str.IsXmlParam("xml","<xml></xml>") // true，因为参数名为常见的 XML 参数名，且参数值为 XML 格式的字符串
str.IsXmlParam("X","<xml></xml>") // true，因为参数值为 XML 格式的字符串
str.IsXmlParam("id","1") // false
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
str.IsXmlRequest("POST / HTTP/1.1\r\nContent-Type: application/xml\r\n\r\n<xml></xml>") // true
str.IsXmlRequest("POST / HTTP/1.1\r\nContent-Type: text/html\r\n\r\n<html></html>") // false
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
str.IsXmlValue("<xml></xml>") // true
str.IsXmlValue("<html></html>") // false
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


### JsonToMap

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


### JsonToMapList

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


### LastIndex

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


### LastIndexAny

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


### LastIndexByte

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


### LowerAndTrimSpace

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


### MatchAllOfGlob

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


### MatchAllOfRegexp

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


### MatchAllOfSubString

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


### MatchAnyOfGlob

#### 详细描述
MatchAnyOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否则返回 false

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


### MatchAnyOfRegexp

#### 详细描述
MatchAnyOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true，否则返回 false

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


### MatchAnyOfSubString

#### 详细描述
MatchAnyOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i 中则返回 true，否则返回 false，此函数忽略大小写

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


### MergeUrlFromHTTPRequest

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


### NewFilter

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


### NewReader

#### 详细描述
NewReader returns a new [Reader] reading from s.
It is similar to [bytes.NewBufferString] but more efficient and non-writable.


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


### ParseBytesToHTTPRequest

#### 详细描述
ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求

Example:
```
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
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
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
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


### ParseStringToHTTPRequest

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


### ParseStringToHTTPResponse

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


### ParseStringToHostPort

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


### ParseStringToHosts

#### 详细描述
ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号、换行分隔，并且会解析 CIDR 网段

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


### ParseStringToLines

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


### ParseStringToPorts

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


### ParseStringToUrls

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


### ParseStringToUrlsWith3W

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


### ParseStringUrlToUrlInstance

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


### ParseStringUrlToWebsiteRootPath

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


### PathJoin

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


### Quote

#### 详细描述
Quote returns a double-quoted Go string literal representing s. The
returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for
control characters and non-printable characters as defined by
[IsPrint].


#### 定义

`Quote(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


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
str.RandomUpperAndLower("target") // TArGeT
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


### RandomUpperAndLower

#### 详细描述
RandomUpperAndLower 返回一个随机大小写的字符串

Example:
```
str.RandomUpperAndLower("target") // TArGeT
```


#### 定义

`RandomUpperAndLower(s string) string`

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


### RemoveDuplicatePorts

#### 详细描述
RemoveDuplicatePorts 解析两个字符串形式的端口列表，并使用布谷鸟过滤器进行去重。

这个函数首先创建一个布谷鸟过滤器，然后将两个输入字符串解析为端口列表。

接着，它遍历这两个列表，将每个端口添加到布谷鸟过滤器中，如果这个端口之前没有被添加过，

那么它也会被添加到结果列表中。最后，函数返回结果列表，其中包含两个输入字符串中的所有唯一端口。

Example:
```
RemoveDuplicatePorts("10086-10088,23333", "10086,10089,23333") // [10086, 10087, 10088, 23333, 10089]
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


### RenderTemplate

#### 详细描述


#### 定义

`RenderTemplate(i string, m any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| m | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Repeat

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


### Replace

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


### ReplaceAll

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


### ReplaceHTTPPacketBody

#### 详细描述
ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文

Example:
```
poc.ReplaceBody(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, "hello yak", false)
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


### ShrinkString

#### 详细描述
str.ShrinkString 将会把一个字符串压缩成一个设定一个长度下的较短的字符串

Example:
```
result = str.ShrinkString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 20)
println(result)
/* output: aaaaaaaaaa...aaaaaaaaaa */
```


#### 定义

`ShrinkString(i any, size int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Split

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


### SplitAfter

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


### SplitAfterN

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


### SplitAndTrim

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


### SplitHTTPHeadersAndBodyFromPacket

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


### SplitHostsToPrivateAndPublic

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


### SplitN

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


### StartsWith

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


### StringContainsAnyOfSubString

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


### StringSliceContains

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


### StringSliceContainsAll

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


### Subtract

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


### TextReaderSplit

#### 详细描述


#### 定义

`TextReaderSplit(ctx context.Context, reader io.Reader) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| reader | `io.Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |   |


### TextSplit

#### 详细描述
核心分割方法

#### 定义

`TextSplit(ctx context.Context, text string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| text | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Title

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


### ToJsonIndentStr

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


### ToLower

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


### ToTitle

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


### Trim

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


### TrimLeft

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


### TrimPrefix

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


### TrimRight

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


### TrimSpace

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


### TrimSuffix

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


### Unquote

#### 详细描述
Unquote interprets s as a single-quoted, double-quoted,
or backquoted Go string literal, returning the string value
that s quotes.  (If s is single-quoted, it would be a Go
character literal; Unquote returns the corresponding
one-character string. For an empty character literal
Unquote returns the empty string.)


#### 定义

`Unquote(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### UrlJoin

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


### VersionCompare

#### 详细描述
VersionCompare 泛用形的版本比较,传入(p1,p2 string), p1&gt;p2返回1,nil, p1&lt;p2返回-1,nil, p1==p2返回0,nil, 比较失败返回 -2,err


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


### VersionGreater

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


### VersionGreaterEqual

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


### VersionLess

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


### VersionLessEqual

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


