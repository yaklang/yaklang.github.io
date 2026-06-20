# str

|函数名|函数描述/介绍|
|:------|:--------|
| [str.AddPrefixLineNumber](#addprefixlinenumber) |AddPrefixLineNumber 为输入文本 i 的每一行加上行号前缀，并返回处理后的字符串。 参数: - i: 输入内容，会被转换为字符串 返回值: - 每行带行号前缀的字符串|
| [str.AddPrefixLineNumberToReader](#addprefixlinenumbertoreader) |AddPrefixLineNumberToReader 读取 i（字符串或 io.Reader）中的文本，为每一行加上行号前缀，并返回一个新的 io.Reader。 参数: - i: 输入内容，可以是字符串，也可以是 io.Reader 返回值: - 每行带行号前缀的 io.Reader|
| [str.CalcOrdinaryTokenCount](#calcordinarytokencount) |CalcOrdinaryTokenCount 计算文本的 token 数量（基于 Qwen BPE 词表），但不对特殊 token 做识别处理。 参数: - text: 待计算的文本 返回值: - token 数量|
| [str.CalcSSDeep](#calcssdeep) |CalcSSDeep 计算并返回一段文本的模糊哈希值 参数: - raw: 待计算的文本字节 返回值: - 模糊哈希字符串，失败返回空字符串|
| [str.CalcSSDeepStability](#calcssdeepstability) |CalcSSDeepStability 使用模糊哈希算法计算多段文本之间的相似度，返回相似度与错误。传入的文本应该为大文本，即长度大于 30 kb。 参数: - req: 两段或多段待比较的大文本字节 返回值: - 相似度，取值范围 0~1 - 错误信息|
| [str.CalcSimHash](#calcsimhash) |CalcSimHash 计算并返回一段文本的 SimHash 值 参数: - raw: 待计算的文本字节 返回值: - SimHash 值|
| [str.CalcSimHashStability](#calcsimhashstability) |CalcSimHashStability 使用 SimHash 算法计算多段文本之间的相似度，返回相似度与错误。 参数: - req: 两段或多段待比较的文本字节 返回值: - 相似度，取值范围 0~1 - 错误信息|
| [str.CalcSimilarity](#calcsimilarity) |CalcSimilarity 计算多段文本之间的相似度，根据最长的文本长度选择不同的算法 如果最长的文本长度小于等于 2000，使用文本子串匹配算法 如果最短的文本长度大于等于 30000，使用模糊哈希算法 如果上述算法出现错误，则使用 SimHash 算法 参数: - raw: 两段或多段待比较的...|
| [str.CalcTextMaxSubStrStability](#calctextmaxsubstrstability) |CalcTextMaxSubStrStability 使用文本子串匹配算法计算多段文本之间的相似度，返回相似度与错误 参数: - raw: 两段或多段待比较的文本字节 返回值: - 相似度，取值范围 0~1 - 错误信息|
| [str.CalcTokenCount](#calctokencount) |CalcTokenCount 计算文本的 token 数量（基于 Qwen BPE 词表），会识别特殊 token（如 &lt;\|im_start\|&gt;、&lt;\|im_end\|&gt;、&lt;\|endoftext\|&gt;）。 常用于大模型上下文预算估算、长文本裁剪等 AI 处理场景。 参数: - text: 待计算的文本 返...|
| [str.Compare](#compare) |Compare 按照ascii码表顺序逐个比较字符串a和b中的每个字符，如果a==b，则返回0，如果a&lt;b，则返回-1，如果a&gt;b，则返回1 参数: - a: 第一个字符串 - b: 第二个字符串 返回值: - 比较结果：相等为0，a&lt;b为-1，a&gt;b为1|
| [str.Contains](#contains) |Contains 判断字符串s是否包含substr 参数: - s: 原始字符串 - substr: 要查找的子串 返回值: - 是否包含该子串（区分大小写）|
| [str.ContainsAny](#containsany) |ContainsAny 判断字符串s是否包含chars中的任意字符 参数: - s: 原始字符串 - chars: 待匹配的字符集合 返回值: - 是否包含其中任意一个字符|
| [str.Count](#count) |Count 返回字符串s中substr出现的次数 参数: - s: 原始字符串 - substr: 要统计的子串 返回值: - 不重叠出现的次数|
| [str.Cut](#cut) |Cut 在 s 中查找第一个 sep，并以其为界把 s 切分为前后两部分。如果找到 sep，则 found 为 true。 参数: - s: 原始字符串 - sep: 分隔符 返回值: - before: sep 之前的部分 - after: sep 之后的部分 - found: 是否找到了 sep|
| [str.CutPrefix](#cutprefix) |CutPrefix 如果 s 以 prefix 开头，则返回去除该前缀后的字符串与 true，否则返回原字符串与 false。 参数: - s: 原始字符串 - prefix: 要去除的前缀 返回值: - after: 去除前缀后的字符串（未命中前缀时为原字符串） - found: 是否命中前缀|
| [str.CutSuffix](#cutsuffix) |CutSuffix 如果 s 以 suffix 结尾，则返回去除该后缀后的字符串与 true，否则返回原字符串与 false。 参数: - s: 原始字符串 - suffix: 要去除的后缀 返回值: - before: 去除后缀后的字符串（未命中后缀时为原字符串） - found: 是否命中后缀|
| [str.DecodeTokens](#decodetokens) |DecodeTokens 将 Qwen BPE token id 列表解码还原为文本，是 EncodeTokens 的逆操作。 参数: - tokens: token id 列表 返回值: - 解码还原后的文本|
| [str.EncodeOrdinaryTokens](#encodeordinarytokens) |EncodeOrdinaryTokens 将文本编码为 Qwen BPE token id 列表（不识别特殊 token）。 参数: - text: 待编码的文本 返回值: - token id 列表|
| [str.EncodeTokens](#encodetokens) |EncodeTokens 将文本编码为 Qwen BPE token id 列表（会识别特殊 token）。 参数: - text: 待编码的文本 返回值: - token id 列表|
| [str.EndsWith](#endswith) |EndsWith / HasSuffix 判断字符串s是否以suffix结尾 参数: - s: 原始字符串 - suffix: 要判断的后缀 返回值: - 是否以该后缀结尾|
| [str.EqualFold](#equalfold) |EqualFold 判断字符串s和t是否相等，忽略大小写 参数: - s: 第一个字符串 - t: 第二个字符串 返回值: - 忽略大小写后是否相等|
| [str.ExtractBodyFromHTTPResponseRaw](#extractbodyfromhttpresponseraw) |ExtractBodyFromHTTPResponseRaw 从原始 HTTP 响应报文中提取 body 参数: - res: 原始 HTTP 响应报文字节 返回值: - 提取出的响应体字节 - 错误信息|
| [str.ExtractChineseIDCards](#extractchineseidcards) |ExtractChineseIDCards 尝试将传入的参数转换为字符串，然后提取字符串中的身份证号 参数: - i: 待提取的内容（string 或 []byte） 返回值: - 提取到的身份证号列表|
| [str.ExtractDomain](#extractdomain) |ExtractDomain 尝试提取字符串中的域名并返回，后续可以接收一个 tryDecode 参数，如果传入 true，则会尝试对输入的文本进行解码(双重URL编码，URL编码，unicode编码，quoted编码) 参数: - i: 任意可转为字符串的输入 - tryDecode: 可选，是否在...|
| [str.ExtractHost](#extracthost) |ExtractHost 尝试从字符串中解析出host和port，并返回host 参数: - raw: 形如 host:port 或 URL 的字符串 返回值: - 解析出的 host，无法解析时返回原字符串|
| [str.ExtractHostPort](#extracthostport) |ExtractHostPort 尝试从字符串中解析出host和port，并返回host:port 参数: - raw: 形如 host:port 或 URL 的字符串 返回值: - 解析出的 host:port，无法解析时返回原字符串|
| [str.ExtractJson](#extractjson) |ExtractJson 尝试提取字符串中的 JSON 并进行修复, 返回中的元素都是Object 参数: - i: 任意可转为字符串的输入 返回值: - 提取并修复后的 JSON 对象字符串数组|
| [str.ExtractJsonWithRaw](#extractjsonwithraw) |ExtractJsonWithRaw 尝试提取字符串中的 JSON 并返回，第一个返回值返回经过修复后的JSON字符串数组，第二个返回值返回原始JSON字符串数组(如果修复失败) 参数: - i: 任意可转为字符串的输入 返回值: - 修复后的 JSON 字符串数组 - 修复失败时的原始 JSON ...|
| [str.ExtractRootDomain](#extractrootdomain) |ExtractRootDomain 尝试提取字符串中的根域名并返回 参数: - i: 任意可转为字符串的输入 返回值: - 提取到的根域名数组|
| [str.ExtractStrContext](#extractstrcontext) |ExtractStrContext 从字符串raw中提取一组关键字res上下文的内容，上下文的长度是512个字符确定。 参数: - raw: 原始字符串 - res: 关键词列表 返回值: - 每个命中关键词周围的上下文文本切片（已去重）|
| [str.ExtractTitle](#extracttitle) |ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回 参数: - i: 任意可转为字符串的 HTML 输入 返回值: - 提取到的标题文本，未找到返回空字符串|
| [str.ExtractURLFromHTTPRequest](#extracturlfromhttprequest) |ExtractURLFromHTTPRequest 从 HTTP 请求结构体中提取 URL，返回URL结构体与错误 参数: - r: HTTP 请求结构体 - https: 是否为 https 协议 返回值: - 解析出的 URL 实例 - 错误信息|
| [str.ExtractURLFromHTTPRequestRaw](#extracturlfromhttprequestraw) |ExtractURLFromHTTPRequestRaw 从原始 HTTP 请求报文中提取 URL，返回URL结构体与错误 参数: - req: 原始 HTTP 请求报文字节 - isHttps: 是否为 https 协议 返回值: - 解析出的 URL 实例 - 错误信息|
| [str.Fields](#fields) |Fields 返回将字符串s按照空白字符（&#39;\t&#39;, &#39;\n&#39;, &#39;\v&#39;, &#39;\f&#39;, &#39;\r&#39;, &#39; &#39;, 0x85, 0xA0）分割的字符串切片 参数: - s: 原始字符串 返回值: - 按连续空白分割后的非空字段切片|
| [str.FilterPorts](#filterports) |FilterPorts 接受两个字符串形式的端口列表作为参数，返回一个新的端口列表， 其中包含了在 `ports1` 中但不在 `ports2` 中的所有端口。 这个函数首先将两个输入字符串解析为端口列表，然后创建一个映射（或集合）来存储 `ports2` 中的所有端口。 然后，它遍历 `ports...|
| [str.FixHTTPRequest](#fixhttprequest) |FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求 参数: - raw: 原始 HTTP 请求报文字节 返回值: - 修复后的 HTTP 请求报文字节|
| [str.FixHTTPResponse](#fixhttpresponse) |FixHTTPResponse 尝试对传入的响应进行修复，并返回修复后的响应，响应体和错误 参数: - raw: 原始 HTTP 响应报文字节 返回值: - rsp: 修复后的完整响应报文 - body: 修复后的响应体 - err: 错误信息|
| [str.Grok](#grok) |Grok 使用 Grok 规则解析字符串并返回解析结果（导出名为 re.Grok） 结果为字段名到取值的映射，可用 .Get(key) 取第一个值；参考 logstash grok 语法 参数: - line: 待解析的原始字符串 - rule: Grok 规则（如 &#34;%{MONTHNUM:mont...|
| [str.HasPrefix](#hasprefix) |StartsWith / HasPrefix 判断字符串s是否以prefix开头 参数: - s: 原始字符串 - prefix: 要判断的前缀 返回值: - 是否以该前缀开头|
| [str.HasSuffix](#hassuffix) |EndsWith / HasSuffix 判断字符串s是否以suffix结尾 参数: - s: 原始字符串 - suffix: 要判断的后缀 返回值: - 是否以该后缀结尾|
| [str.HostPort](#hostport) |HostPort 将 host 和 port 拼接成 host:port 的形式 参数: - host: 主机名或 IP - port: 端口（数字或字符串） 返回值: - 拼接后的 host:port 字符串|
| [str.IPv4ToCClassNetwork](#ipv4tocclassnetwork) |IPv4ToCClassNetwork 尝试从一个 IPv4 地址中获取 C 类网络地址，并返回错误 参数: - s: IPv4 地址字符串 返回值: - network: C 类网段（形如 192.168.0.0/24） - err: 错误信息|
| [str.Index](#index) |Index 返回字符串s中substr第一次出现的位置的索引，如果字符串中不存在substr，则返回-1 参数: - s: 原始字符串 - substr: 要查找的子串 返回值: - 首次出现的下标，未找到返回 -1|
| [str.IndexAny](#indexany) |IndexAny 返回字符串s中chars任意字符首次出现的位置的索引，如果字符串中不存在chars，则返回-1 参数: - s: 原始字符串 - chars: 待匹配的字符集合 返回值: - 任意字符首次出现的下标，未找到返回 -1|
| [str.IndexByte](#indexbyte) |IndexByte 返回字符串s中第一个等于c的字符的索引，如果字符串中不存在c，则返回-1 参数: - s: 原始字符串 - c: 要查找的字节 返回值: - 首次出现的下标，未找到返回 -1|
| [str.Intersect](#intersect) |Intersect / IntersectString 返回两个字符串切片之间的交集 参数: - x: 第一个字符串切片 - y: 第二个字符串切片 返回值: - 同时存在于 x 和 y 中的元素组成的切片|
| [str.IntersectString](#intersectstring) |Intersect / IntersectString 返回两个字符串切片之间的交集 参数: - x: 第一个字符串切片 - y: 第二个字符串切片 返回值: - 同时存在于 x 和 y 中的元素组成的切片|
| [str.IsAlNum](#isalnum) |IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成 参数: - i: 待判断的对象，会被转换为字符串 返回值: - 是否全部由英文字母和数字组成|
| [str.IsAllVisibleASCII](#isallvisibleascii) |IsAllVisibleASCII 判断字符串是否全部由可见的 ASCII 字符（0x20~0x7E）组成 参数: - s: 待判断的字符串 返回值: - 是否全部为可见 ASCII 字符|
| [str.IsAlpha](#isalpha) |IsAlpha 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母组成 参数: - i: 待判断的对象，会被转换为字符串 返回值: - 是否全部由英文字母组成|
| [str.IsAlphaNum](#isalphanum) |IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成 参数: - i: 待判断的对象，会被转换为字符串 返回值: - 是否全部由英文字母和数字组成|
| [str.IsBase64Value](#isbase64value) |IsBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据 参数: - i: 待判断的内容（string 或 []byte） 返回值: - 是否为 Base64 编码数据|
| [str.IsCaptchaField](#iscaptchafield) |IsCaptchaField 尝试将传入的参数转换为字符串，然后猜测其是否是验证码字段 参数: - i: 待判断的字段名（string 或 []byte） 返回值: - 是否为验证码字段|
| [str.IsDigit](#isdigit) |IsDigit 尝试将传入的参数转换为字符串，然后判断其是否都由数字组成 参数: - i: 待判断的对象，会被转换为字符串 返回值: - 是否全部由数字组成|
| [str.IsHtmlResponse](#ishtmlresponse) |IsHtmlResponse 猜测传入的参数是否为原始 HTTP 响应报文 参数: - i: 原始 HTTP 响应（string、[]byte 或 *http.Response） 返回值: - 是否为 HTML 响应|
| [str.IsHttpURL](#ishttpurl) |IsHttpURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https 参数: - v: 待判断的对象，会被转换为字符串 返回值: - 是否为 http(s) 协议的完整 URL|
| [str.IsIPv4](#isipv4) |IsIPv4 判断字符串是否是 IPv4 地址 参数: - raw: 待判断的字符串 返回值: - 是否为 IPv4 地址|
| [str.IsIPv6](#isipv6) |IsIPv6 判断字符串是否是 IPv6 地址 参数: - raw: 待判断的字符串 返回值: - 是否为 IPv6 地址|
| [str.IsJSONPParam](#isjsonpparam) |IsJSONPParam 根据传入的参数名和参数值猜测是否为 JSONP 参数 参数: - key: 参数名 - value: 参数值 返回值: - 是否为 JSONP 参数|
| [str.IsJsonResponse](#isjsonresponse) |IsJsonResponse 尝试将传入的参数转换为字符串，然后猜测传入的参数是否为 JSON 格式的原始 HTTP 响应报文，这是通过判断Content-Type请求头实现的 参数: - i: 原始 HTTP 响应（string、[]byte 或 *http.Response） 返回值: - 是否...|
| [str.IsMD5Value](#ismd5value) |IsMD5Value 尝试将传入的参数转换为字符串，然后猜测其是否是 MD5 编码的数据 参数: - i: 待判断的内容（string 或 []byte） 返回值: - 是否为 MD5 值|
| [str.IsPasswordField](#ispasswordfield) |IsPasswordField 尝试将传入的参数转换为字符串，然后猜测其是否是 password 字段 参数: - i: 待判断的字段名（string 或 []byte） 返回值: - 是否为 password 字段|
| [str.IsPlainBase64Value](#isplainbase64value) |IsPlainBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据，它相比于 IsBase64Value 多了一层判断，即判断 base64 解码后的数据是否为可见字符串 参数: - i: 待判断的内容（string 或 []byte） 返回值: - 是否...|
| [str.IsRedirectParam](#isredirectparam) |IsRedirectParam 根据传入的参数名和参数值猜测是否为重定向参数 参数: - key: 参数名 - value: 参数值 返回值: - 是否为重定向参数|
| [str.IsSQLColumnField](#issqlcolumnfield) |IsSQLColumnField 尝试将传入的参数转换为字符串，然后猜测其是否是 SQL 查询字段 参数: - i: 待判断的字段名（string 或 []byte） 返回值: - 是否为 SQL 查询字段|
| [str.IsSensitiveJson](#issensitivejson) |IsSensitiveJson 尝试将传入的参数转换为字符串，然后猜测其是否为敏感的 JSON 数据 参数: - i: 待判断的内容（string 或 []byte） 返回值: - 是否为敏感 JSON 数据|
| [str.IsSensitiveTokenField](#issensitivetokenfield) |IsSensitiveTokenField 尝试将传入的参数转换为字符串，然后猜测其是否是 token 字段 参数: - i: 待判断的字段名（string 或 []byte） 返回值: - 是否为 token 字段|
| [str.IsServerError](#isservererror) |IsServerError 猜测传入的参数是否为服务器错误 参数: - i: 待判断的内容（string 或 []byte） 返回值: - 是否包含服务器错误特征|
| [str.IsSha256Value](#issha256value) |IsSha256Value 尝试将传入的参数转换为字符串，然后猜测其是否是 SHA256 编码的数据 参数: - i: 待判断的内容（string 或 []byte） 返回值: - 是否为 SHA256 值|
| [str.IsStrongPassword](#isstrongpassword) |IsStrongPassword 判断字符串是否为强密码，强密码的定义为：长度大于8，同时包含特殊字符、小写字母、大写字母、数字 参数: - s: 待检测的密码字符串 返回值: - 是否满足强密码要求|
| [str.IsTLSServer](#istlsserver) |IsTLSServer 尝试访问传入的host，然后判断其是否为 TLS 服务。第一个参数为 host，后面可以传入零个或多个参数，为代理地址 参数: - addr: 目标地址（host:port） - proxies: 可选的一个或多个代理地址 返回值: - 目标是否为 TLS 服务|
| [str.IsUrlParam](#isurlparam) |IsUrlParam 根据传入的参数名和参数值猜测是否为 URL 参数 参数: - key: 参数名 - value: 参数值 返回值: - 是否为 URL 参数|
| [str.IsUrlPath](#isurlpath) |IsUrlPath 根据 value 猜测是否是一个 url path 参数: - v: 待判断的对象，会被转换为字符串 返回值: - 是否为 URL 路径|
| [str.IsUsernameField](#isusernamefield) |IsUsernameField 尝试将传入的参数转换为字符串，然后猜测其是否是 username 字段 参数: - i: 待判断的字段名（string 或 []byte） 返回值: - 是否为 username 字段|
| [str.IsXmlParam](#isxmlparam) |IsXmlParam 根据传入的参数名和参数值猜测是否为 XML 参数 参数: - key: 参数名 - value: 参数值 返回值: - 是否为 XML 参数|
| [str.IsXmlRequest](#isxmlrequest) |IsXmlRequest 猜测传入的参数是否为请求头是 XML 格式的原始 HTTP 请求报文 参数: - i: 原始 HTTP 请求（string、[]byte 或 *http.Request） 返回值: - 是否为 XML 请求|
| [str.IsXmlValue](#isxmlvalue) |IsXmlValue 尝试将传入的参数转换为字符串，然后猜测其是否是 XML 格式的数据 参数: - i: 待判断的内容（string 或 []byte） 返回值: - 是否为 XML 格式数据|
| [str.Join](#join) |Join 将i中的元素用d连接，如果传入的参数不是字符串，会自动将其转为字符串，再将其用d连接。如果连接失败，则会返回i的字符串形式。 参数: - i: 要连接的切片或可迭代对象 - d: 连接用的分隔符 返回值: - 连接后的字符串|
| [str.JsonStringDecode](#jsonstringdecode) |JsonStringDecode 解码一个 JSON 字符串值（一次性版本），去掉首尾引号并还原转义（\n、\t、\uXXXX、\xNN 等）， 返回真实字符串内容。相比 str.Unquote 更容错：遇到非标准/畸形数据会回退返回原始内容而不是报错。 适合处理 jsonstream onFiel...|
| [str.JsonToMap](#jsontomap) |JsonToMap 将 json 字符串 line 解析为 map，保留嵌套结构（对象/数组不会被转为字符串） 单对象时优先用 json.Unmarshal 确保嵌套正确；多对象（如 `{} {}`）时回退到 jstream。 参数: - line: JSON 字符串 返回值: - 解析出的 map...|
| [str.JsonToMapList](#jsontomaplist) |JsonToMapList 将 json 字符串 line 解析为 map 列表，保留嵌套结构（对象/数组不会被转为字符串） 参数: - line: 包含一个或多个 JSON 对象的字符串 返回值: - 解析出的 map 列表|
| [str.LastIndex](#lastindex) |LastIndex 返回字符串s中substr最后一次出现的位置的索引，如果字符串中不存在substr，则返回-1 参数: - s: 原始字符串 - substr: 要查找的子串 返回值: - 最后一次出现的下标，未找到返回 -1|
| [str.LastIndexAny](#lastindexany) |LastIndexAny 返回字符串s中chars任意字符最后一次出现的位置的索引，如果字符串中不存在chars，则返回-1 参数: - s: 原始字符串 - chars: 待匹配的字符集合 返回值: - 任意字符最后一次出现的下标，未找到返回 -1|
| [str.LastIndexByte](#lastindexbyte) |LastIndexByte 返回字符串s中最后一个等于c的字符的索引，如果字符串中不存在c，则返回-1 参数: - s: 原始字符串 - c: 要查找的字节 返回值: - 最后一次出现的下标，未找到返回 -1|
| [str.LowerAndTrimSpace](#lowerandtrimspace) |LowerAndTrimSpace 将字符串raw转换为小写并去除前后空白字符 参数: - raw: 原始字符串 返回值: - 转为小写并去除前后空白后的字符串|
| [str.MatchAllOfGlob](#matchallofglob) |MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果所有的glob模式都匹配成功，则返回 true，否则返回 false 参数: - i: 待匹配的对象，会被转换为字符串 - re: 一个或多个 glob 模式 返回值: - 是否所有 glob 模式都匹配成...|
| [str.MatchAllOfRegexp](#matchallofregexp) |MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果所有的正则表达式都匹配成功，则返回 true，否则返回 false 参数: - i: 待匹配的对象，会被转换为字符串 - re: 一个或多个正则表达式 返回值: - 是否所有正则表达式都匹配成功|
| [str.MatchAllOfSubString](#matchallofsubstring) |MatchAllOfSubString 尝试将 i 转换为字符串，然后判断所有子串 subStr 是否都存在于 i 中，如果都存在则返回 true，否则返回 false，此函数忽略大小写 参数: - i: 待匹配的对象，会被转换为字符串 - subStr: 一个或多个子串 返回值: - 是否所有子串...|
| [str.MatchAnyOfGlob](#matchanyofglob) |MatchAnyOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否则返回 false 参数: - i: 待匹配的对象，会被转换为字符串 - re: 一个或多个 glob 模式 返回值: - 是否有任意 glob 模式匹配成...|
| [str.MatchAnyOfRegexp](#matchanyofregexp) |MatchAnyOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true，否则返回 false 参数: - i: 待匹配的对象，会被转换为字符串 - re: 一个或多个正则表达式 返回值: - 是否有任意正则表达式匹配成功|
| [str.MatchAnyOfSubString](#matchanyofsubstring) |MatchAnyOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i 中则返回 true，否则返回 false，此函数忽略大小写 参数: - i: 待匹配的对象，会被转换为字符串 - subStr: 一个或多个子串 返回...|
| [str.MergeUrlFromHTTPRequest](#mergeurlfromhttprequest) |MergeUrlFromHTTPRequest 将传入的 target 与 原始 HTTP 请求报文中的 URL 进行合并，并返回合并后的 URL 参数: - rawRequest: 原始 HTTP 请求报文字节 - target: 待合并的目标路径或 URL - isHttps: 是否为 http...|
| [str.NewFilter](#newfilter) |NewFilter 创建一个默认的字符串布谷鸟过滤器，布谷鸟过滤器用于判断一个元素是否在一个集合中，它存在极低的假阳性（即说存在的元素实际上不存在），通常这个集合中的元素数量非常大才会使用布谷鸟过滤器。 返回值: - 一个新的字符串过滤器实例|
| [str.NewJSONStringReader](#newjsonstringreader) |NewJSONStringReader 包装一个 JSON 字符串值的 Reader，流式解码其中的转义（\n、\t、\uXXXX、\xNN 等）， 返回去引号、去转义后的真实字符串内容。内部已用 UTF-8 安全读取，遇到非标准/畸形数据会自动回退为原始透传。 常用于 jsonstream 的 o...|
| [str.NewReader](#newreader) |NewReader 基于字符串 s 创建一个只读的 io.Reader，可用于需要 reader 的接口。 参数: - s: 原始字符串 返回值: - 一个从 s 读取数据的 *strings.Reader|
| [str.NewUTF8Reader](#newutf8reader) |NewUTF8Reader 包装一个 Reader，使每次读取都只返回完整的 UTF-8 字符， 避免在按字节/小缓冲读取数据流（如 jsonstream 字段流）时把一个多字节字符（中文等）从中间截断。 参数: - r: 原始的 io.Reader 返回值: - 一个保证按完整 UTF-8 字符返...|
| [str.ParamsGetOr](#paramsgetor) |ParamsGetOr 从 map 中获取 key 对应的值，如果不存在则返回 defaultValue。支持 map[string]string 与 map[string]any。 参数: - i: 源 map（map[string]string 或 map[string]any） - key: ...|
| [str.ParseBytesToHTTPRequest](#parsebytestohttprequest) |ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求 参数: - raw: 原始 HTTP 请求报文字节数组 返回值: - 解析得到的 HTTP 请求对象 - 错误信息，解析失败时返回非空|
| [str.ParseBytesToHTTPResponse](#parsebytestohttpresponse) |ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应 参数: - res: 原始 HTTP 响应报文字节数组 返回值: - 解析得到的 HTTP 响应对象 - 错误信息，解析失败时返回非空|
| [str.ParseStringToCClassHosts](#parsestringtocclasshosts) |ParseStringToCClassHosts 尝试从给定的字符串中解析Host，再将其转为 C 类网段，用,分隔 参数: - targets: 主机字符串（支持范围、CIDR 等） 返回值: - 以逗号分隔的 C 类网段字符串|
| [str.ParseStringToHTTPRequest](#parsestringtohttprequest) |ParseStringToHTTPRequest 将字符串解析为 HTTP 请求 参数: - raw: HTTP 请求报文字符串 返回值: - 解析出的 HTTP 请求结构体 - 错误信息|
| [str.ParseStringToHTTPResponse](#parsestringtohttpresponse) |ParseStringToHTTPResponse 将字符串解析为 HTTP 响应 参数: - res: HTTP 响应报文字符串 返回值: - 解析出的 HTTP 响应结构体 - 错误信息|
| [str.ParseStringToHostPort](#parsestringtohostport) |ParseStringToHostPort 尝试从字符串中解析出host和port，并与错误一起返回 参数: - raw: 形如 host:port 或 URL 的字符串 返回值: - host: 解析出的主机 - port: 解析出的端口 - err: 错误信息|
| [str.ParseStringToHosts](#parsestringtohosts) |ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号、换行分隔，并且会解析 CIDR 网段 参数: - raw: 主机字符串，支持逗号/换行分隔与 CIDR 网段 返回值: - 展开后的主机列表|
| [str.ParseStringToLines](#parsestringtolines) |ParseStringToLines 将字符串按换行符(\n)分割成字符串数组，并去除BOM头和空行 参数: - raw: 原始多行字符串 返回值: - 去除 BOM 头与空行后的行字符串数组|
| [str.ParseStringToPorts](#parsestringtoports) |ParseStringToPorts 将字符串解析成 Port 列表， Port 可以以逗号分隔，并且会解析-分隔的范围 参数: - ports: 端口字符串，支持逗号分隔与短横线范围（如 &#34;80,443,1000-1010&#34;） 返回值: - 解析出的端口整数列表|
| [str.ParseStringToUrls](#parsestringtourls) |ParseStringToUrls 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口 参数: - targets: 一个或多个目标字符串（IP、域名或 host:port） 返回值: - 补全协议与端口后的 URL 列表|
| [str.ParseStringToUrlsWith3W](#parsestringtourlswith3w) |ParseStringToUrlsWith3W 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口，还会补全域名前的 www 前缀 参数: - sub: 一个或多个目标字符串（IP、域名或 host:port） 返回值: - 补全协议、端口与 www 前缀后的 URL 列表|
| [str.ParseStringUrlToUrlInstance](#parsestringurltourlinstance) |ParseStringUrlToUrlInstance 将字符串 url 解析为 URL 结构体并返回错误 参数: - s: 原始 URL 字符串 返回值: - 解析后的 URL 实例 - 错误信息|
| [str.ParseStringUrlToWebsiteRootPath](#parsestringurltowebsiterootpath) |ParseStringUrlToWebsiteRootPath 将字符串 url 解析为其根路径的URL 参数: - url: 原始 URL 字符串 返回值: - 仅保留根路径（去除路径与查询参数）后的 URL 字符串|
| [str.PathJoin](#pathjoin) |PathJoin 将传入的文件路径进行拼接并返回 参数: - elem: 任意数量的路径片段 返回值: - 用系统分隔符拼接后的路径|
| [str.Quote](#quote) |Quote 给字符串 s 加上双引号并转义其中的特殊字符，返回 Go 语法风格的带引号字符串。 参数: - s: 原始字符串 返回值: - 带双引号并完成转义的字符串|
| [str.RandSecret](#randsecret) |RandSecret 返回在所有可见ascii字符表中随机挑选 n 个字符组成的密码字符串，这个密码经过str.IsStrongPassword验证，即为强密码 参数: - n: 生成密码的长度（应大于 8 以满足强密码要求） 返回值: - 满足强密码要求的随机字符串|
| [str.RandStr](#randstr) |RandStringBytes 返回在大小写字母表中随机挑选 n 个字符组成的字符串 参数: - n: 生成字符串的长度 返回值: - 随机字母组成的字符串|
| [str.Random](#random) |RandomUpperAndLower 返回一个随机大小写的字符串 参数: - s: 原始字符串 返回值: - 随机切换字母大小写后的字符串（字母内容不变）|
| [str.RandomUpperAndLower](#randomupperandlower) |RandomUpperAndLower 返回一个随机大小写的字符串 参数: - s: 原始字符串 返回值: - 随机切换字母大小写后的字符串（字母内容不变）|
| [str.RegexpMatch](#regexpmatch) |RegexpMatch 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false 参数: - pattern: 正则表达式 - s: 待匹配的对象，会被转换为字符串 返回值: - 是否匹配成功|
| [str.RemoveDuplicatePorts](#removeduplicateports) |RemoveDuplicatePorts 解析两个字符串形式的端口列表，并使用布谷鸟过滤器进行去重。 这个函数首先创建一个布谷鸟过滤器，然后将两个输入字符串解析为端口列表。 接着，它遍历这两个列表，将每个端口添加到布谷鸟过滤器中，如果这个端口之前没有被添加过， 那么它也会被添加到结果列表中。最后，函...|
| [str.RemoveRepeat](#removerepeat) |RemoveRepeat 移除字符串切片slc中的重复元素 参数: - slc: 原始字符串切片 返回值: - 去除重复元素后的字符串切片（保持原有顺序）|
| [str.RenderTemplate](#rendertemplate) |RenderTemplate 使用 m 中的数据渲染模板字符串 i（基于 Go text/template 语法），渲染失败时返回原始模板。 参数: - i: 模板字符串，例如 &#34;hello {{ .name }}&#34; - m: 模板数据，通常是一个 map 返回值: - 渲染后的字符串（失败时回退为...|
| [str.Repeat](#repeat) |Repeat 返回将字符串s重复count次的字符串 参数: - s: 原始字符串 - count: 重复次数 返回值: - 重复拼接后的字符串|
| [str.Replace](#replace) |Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串 参数: - s: 原始字符串 - old: 要被替换的子串 - new: 替换成的子串 - n: 最多替换的次数（-1 表示全部） 返回值: - 替换后的字符串|
| [str.ReplaceAll](#replaceall) |ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串 参数: - s: 原始字符串 - old: 要被替换的子串 - new: 替换成的子串 返回值: - 替换全部匹配后的字符串|
| [str.ReplaceHTTPPacketBody](#replacehttppacketbody) |ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文 参数: - raw: 原始 HTTP 报文字节数组 - body: 替换后的报文主体内容 - chunk: 是否使用 chunked 传输编码 返回值...|
| [str.ShrinkString](#shrinkstring) |str.ShrinkString 将会把一个字符串压缩成一个设定一个长度下的较短的字符串 参数: - i: 输入内容，会被转换为字符串 - size: 压缩后字符串的目标最大长度 返回值: - 压缩后的字符串，过长部分会用省略号替代|
| [str.Split](#split) |Split 将字符串s按照sep分割成字符串切片 参数: - s: 原始字符串 - sep: 分隔符 返回值: - 分割后的字符串切片|
| [str.SplitAfter](#splitafter) |SplitAfter 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep 参数: - s: 原始字符串 - sep: 分隔符 返回值: - 分割后的字符串切片，每个元素保留结尾的分隔符|
| [str.SplitAfterN](#splitaftern) |SplitAfterN 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep，最多分为n个元素 参数: - s: 原始字符串 - sep: 分隔符 - n: 最多分割出的元素个数 返回值: - 最多n个元素的字符串切片，每个元素保留结尾的分隔符|
| [str.SplitAndTrim](#splitandtrim) |SplitAndTrim 将字符串s按照sep分割成字符串切片，并且去除每个字符串的前后空白字符 参数: - Raw: 原始字符串 - sep: 分隔符 返回值: - 分割并去除空白后的非空字符串切片|
| [str.SplitHTTPHeadersAndBodyFromPacket](#splithttpheadersandbodyfrompacket) |SplitHTTPHeadersAndBodyFromPacket 将传入的 HTTP 报文分割为 headers 和 body，如果传入了hook，则会在每次读取到一行 header 时调用 hook 参数: - raw: 原始 HTTP 报文字节 - hook: 可选的逐行 header 回调函...|
| [str.SplitHostsToPrivateAndPublic](#splithoststoprivateandpublic) |SplitHostsToPrivateAndPublic 将 hosts 按照私有 IP 和公有 IP 分开 参数: - hosts: 一个或多个主机/IP 字符串 返回值: - privs: 私有 IP 列表 - pub: 公有 IP 列表|
| [str.SplitN](#splitn) |SplitN 将字符串s按照sep分割成字符串切片，最多分为n个元素 参数: - s: 原始字符串 - sep: 分隔符 - n: 最多分割出的元素个数 返回值: - 最多n个元素的字符串切片|
| [str.StartsWith](#startswith) |StartsWith / HasPrefix 判断字符串s是否以prefix开头 参数: - s: 原始字符串 - prefix: 要判断的前缀 返回值: - 是否以该前缀开头|
| [str.StringContainsAnyOfSubString](#stringcontainsanyofsubstring) |StringContainsAnyOfSubString 判断字符串s中是否包含subs中的任意一个子串 参数: - s: 原始字符串 - subs: 待匹配的子串切片 返回值: - 是否包含任意一个子串|
| [str.StringSliceContains](#stringslicecontains) |StringSliceContains 判断字符串切片s中是否包含raw，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含 参数: - s: 字符串切片（或可转换为字符串元素的切片） - raw: 待查找的字符串 返回值: - 切片中是否包含该字符串|
| [str.StringSliceContainsAll](#stringslicecontainsall) |StringSliceContainsAll 判断字符串切片s中是否完全包含elements中的所有元素，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含 参数: - s: 字符串切片 - elements: 待检查的一个或多个元素 返回值: - 切片是否包含所有给定元素|
| [str.Subtract](#subtract) |Subtract 返回两个字符串切片的差集 参数: - x: 被减字符串切片 - y: 要减去的字符串切片 返回值: - 存在于 x 但不存在于 y 的元素组成的切片|
| [str.TextReaderSplit](#textreadersplit) |TextReaderSplit 从 io.Reader 流式读取文本，并按分隔符与块大小递归切分，通过 channel 返回文本块 参数: - ctx: 上下文，可用于取消操作 - reader: 提供文本数据的 io.Reader 返回值: - 一个不断产出文本块的 channel|
| [str.TextSplit](#textsplit) |TextSplit 将文本按照分隔符与块大小递归切分为多个文本块 参数: - ctx: 上下文，可用于取消操作 - text: 待切分的文本 返回值: - 切分后的文本块列表|
| [str.Title](#title) |Title 返回字符串s的标题化版本，即所有单词的首字母都是大写的 参数: - s: 原始字符串 返回值: - 每个单词首字母大写后的字符串|
| [str.ToJsonIndentStr](#tojsonindentstr) |ToJsonIndentStr 将v转换为格式化的JSON字符串并返回，如果转换失败，则返回空字符串 参数: - d: 任意可序列化为 JSON 的对象 返回值: - 带缩进的 JSON 字符串，失败返回空字符串|
| [str.ToLower](#tolower) |ToLower 返回字符串s的小写形式 参数: - s: 原始字符串 返回值: - 全部转为小写后的字符串|
| [str.ToLowerSpecial](#tolowerspecial) |ToLowerSpecial 使用指定的字符大小写映射规则 c，把字符串 s 中的所有字符转换为小写。 参数: - c: 特殊大小写规则（如 unicode.TurkishCase） - s: 原始字符串 返回值: - 按指定规则转换为小写后的字符串|
| [str.ToStringSlice](#tostringslice) |ToStringSlice 将任意类型的数据转换为字符串切片 参数: - i: 任意类型的数据 返回值: - 转换得到的字符串切片|
| [str.ToTitle](#totitle) |ToTitle 返回字符串s的标题化版本，其中所有Unicode字母都会被转换为其大写 参数: - s: 原始字符串 返回值: - 全部字母转为大写（Unicode title）后的字符串|
| [str.ToTitleSpecial](#totitlespecial) |ToTitleSpecial 使用指定的字符大小写映射规则 c，把字符串 s 中的所有字符转换为标题形式（Title Case）。 参数: - c: 特殊大小写规则（如 unicode.TurkishCase） - s: 原始字符串 返回值: - 按指定规则转换为标题形式后的字符串|
| [str.ToUpper](#toupper) |ToUpper 返回字符串s的大写形式 参数: - s: 原始字符串 返回值: - 全部转为大写后的字符串|
| [str.ToUpperSpecial](#toupperspecial) |ToUpperSpecial 使用指定的字符大小写映射规则 c，把字符串 s 中的所有字符转换为大写。 参数: - c: 特殊大小写规则（如 unicode.TurkishCase） - s: 原始字符串 返回值: - 按指定规则转换为大写后的字符串|
| [str.ToValidUTF8](#tovalidutf8) |ToValidUTF8 返回将字符串s中无效的UTF-8编码替换为replacement的字符串 参数: - s: 原始字符串 - replacement: 无效 UTF-8 字节序列的替换串 返回值: - 修正后的合法 UTF-8 字符串|
| [str.Trim](#trim) |Trim 返回将字符串s两侧所有包含cutset字符串中的字符都去掉的字符串 参数: - s: 原始字符串 - cutset: 要从两侧去除的字符集合 返回值: - 去除两侧字符后的字符串|
| [str.TrimLeft](#trimleft) |TrimLeft 返回将字符串s左侧所有包含cutset字符串中的字符都去掉的字符串 参数: - s: 原始字符串 - cutset: 要从左侧去除的字符集合 返回值: - 去除左侧字符后的字符串|
| [str.TrimPrefix](#trimprefix) |TrimPrefix 返回将字符串s前缀prefix去掉的字符串 参数: - s: 原始字符串 - prefix: 要去除的前缀 返回值: - 去除前缀后的字符串；若不以prefix开头则原样返回|
| [str.TrimRight](#trimright) |TrimRight 返回将字符串s右侧所有包含cutset字符串中的字符都去掉的字符串 参数: - s: 原始字符串 - cutset: 要从右侧去除的字符集合 返回值: - 去除右侧字符后的字符串|
| [str.TrimSpace](#trimspace) |TrimSpace 返回将字符串s两侧所有的空白字符都去掉的字符串 参数: - s: 原始字符串 返回值: - 去除两侧空白字符后的字符串|
| [str.TrimSuffix](#trimsuffix) |TrimSuffix 返回将字符串s后缀suffix去掉的字符串 参数: - s: 原始字符串 - suffix: 要去除的后缀 返回值: - 去除后缀后的字符串；若不以suffix结尾则原样返回|
| [str.Unquote](#unquote) |Unquote 把一个带引号的字符串（双引号、单引号或反引号）还原为原始字符串，失败时返回错误。 参数: - s: 带引号的字符串 返回值: - 去除引号并反转义后的字符串 - 错误信息|
| [str.UrlJoin](#urljoin) |UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误 参数: - origin: 基础 URL - paths: 一个或多个待拼接的路径片段 返回值: - newURL: 拼接后的新 URL - err: 错误信息|
| [str.VersionCompare](#versioncompare) |VersionCompare 泛用形的版本比较,传入(p1,p2 string), p1&gt;p2返回1,nil, p1&lt;p2返回-1,nil, p1==p2返回0,nil, 比较失败返回 -2,err 参数: - v1: 第一个版本号字符串 - v2: 第二个版本号字符串 返回值: - 比较结果：v1...|
| [str.VersionEqual](#versionequal) |VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false 参数: - v1: 第一个版本号字符串 - v2: 第二个版本号字符串 返回值: - v1 是否等于 v2|
| [str.VersionGreater](#versiongreater) |VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false 参数: - v1: 第一个版本号字符串 - v2: 第二个版本号字符串 返回值: - v1 是否大于 v2|
| [str.VersionGreaterEqual](#versiongreaterequal) |VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false 参数: - v1: 第一个版本号字符串 - v2: 第二个版本号字符串 返回值: - v1 是否大于等于 v2|
| [str.VersionLess](#versionless) |VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false 参数: - v1: 第一个版本号字符串 - v2: 第二个版本号字符串 返回值: - v1 是否小于 v2|
| [str.VersionLessEqual](#versionlessequal) |VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false 参数: - v1: 第一个版本号字符串 - v2: 第二个版本号字符串 返回值: - v1 是否小于等于 v2|
| [str.f](#f) |f 用于对字符串进行格式化 参数: - f: 格式化模板字符串（使用 %s、%d 等占位符） - items: 填充到占位符的参数 返回值: - 格式化后的字符串|


## 函数定义
### AddPrefixLineNumber

#### 详细描述
AddPrefixLineNumber 为输入文本 i 的每一行加上行号前缀，并返回处理后的字符串。

参数:

  - i: 输入内容，会被转换为字符串



返回值:

  - 每行带行号前缀的字符串




Example:

``````````````yak
out = str.AddPrefixLineNumber("a\nb\nc")
assert str.Contains(out, "1") && str.Contains(out, "3"), "AddPrefixLineNumber should number every line"
``````````````


#### 定义

`AddPrefixLineNumber(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 输入内容，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 每行带行号前缀的字符串 |


### AddPrefixLineNumberToReader

#### 详细描述
AddPrefixLineNumberToReader 读取 i（字符串或 io.Reader）中的文本，为每一行加上行号前缀，并返回一个新的 io.Reader。

参数:

  - i: 输入内容，可以是字符串，也可以是 io.Reader



返回值:

  - 每行带行号前缀的 io.Reader




Example:

``````````````yak
reader = str.AddPrefixLineNumberToReader("a\nb")
data = io.ReadAll(reader)~
assert str.Contains(string(data), "1"), "AddPrefixLineNumberToReader should add line numbers"
``````````````


#### 定义

`AddPrefixLineNumberToReader(i any) io.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 输入内容，可以是字符串，也可以是 io.Reader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.Reader` | 每行带行号前缀的 io.Reader |


### CalcOrdinaryTokenCount

#### 详细描述
CalcOrdinaryTokenCount 计算文本的 token 数量（基于 Qwen BPE 词表），但不对特殊 token 做识别处理。



参数:

  - text: 待计算的文本



返回值:

  - token 数量




Example:

``````````````yak
n = str.CalcOrdinaryTokenCount("Hello, Yak!")
``````````````


#### 定义

`CalcOrdinaryTokenCount(text string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` | 待计算的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | token 数量 |


### CalcSSDeep

#### 详细描述
CalcSSDeep 计算并返回一段文本的模糊哈希值



参数:

  - raw: 待计算的文本字节



返回值:

  - 模糊哈希字符串，失败返回空字符串




Example:

``````````````yak
str.CalcSSDeep("hello")
``````````````


#### 定义

`CalcSSDeep(raw []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 待计算的文本字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 模糊哈希字符串，失败返回空字符串 |


### CalcSSDeepStability

#### 详细描述
CalcSSDeepStability 使用模糊哈希算法计算多段文本之间的相似度，返回相似度与错误。传入的文本应该为大文本，即长度大于 30 kb。



参数:

  - req: 两段或多段待比较的大文本字节



返回值:

  - 相似度，取值范围 0~1

  - 错误信息




Example:

``````````````yak
p, err = str.CalcSSDeepStability(str.RandStr(100000), str.RandStr(100000))
``````````````


#### 定义

`CalcSSDeepStability(req ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `...[]byte` | 两段或多段待比较的大文本字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 相似度，取值范围 0~1 |
| r2 | `error` | 错误信息 |


### CalcSimHash

#### 详细描述
CalcSimHash 计算并返回一段文本的 SimHash 值



参数:

  - raw: 待计算的文本字节



返回值:

  - SimHash 值




Example:

``````````````yak
str.CalcSimHash("hello")
``````````````


#### 定义

`CalcSimHash(raw []byte) uint64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 待计算的文本字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `uint64` | SimHash 值 |


### CalcSimHashStability

#### 详细描述
CalcSimHashStability 使用 SimHash 算法计算多段文本之间的相似度，返回相似度与错误。



参数:

  - req: 两段或多段待比较的文本字节



返回值:

  - 相似度，取值范围 0~1

  - 错误信息




Example:

``````````````yak
p, err = str.CalcSimHashStability("hello", "hello world") // p = 0.96484375
``````````````


#### 定义

`CalcSimHashStability(req ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `...[]byte` | 两段或多段待比较的文本字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 相似度，取值范围 0~1 |
| r2 | `error` | 错误信息 |


### CalcSimilarity

#### 详细描述
CalcSimilarity 计算多段文本之间的相似度，根据最长的文本长度选择不同的算法

如果最长的文本长度小于等于 2000，使用文本子串匹配算法

如果最短的文本长度大于等于 30000，使用模糊哈希算法

如果上述算法出现错误，则使用 SimHash 算法



参数:

  - raw: 两段或多段待比较的文本字节



返回值:

  - 相似度，取值范围 0~1




Example:

``````````````yak
str.CalcSimilarity("hello", "hello world") // 0.625
``````````````


#### 定义

`CalcSimilarity(raw ...[]byte) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...[]byte` | 两段或多段待比较的文本字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 相似度，取值范围 0~1 |


### CalcTextMaxSubStrStability

#### 详细描述
CalcTextMaxSubStrStability 使用文本子串匹配算法计算多段文本之间的相似度，返回相似度与错误



参数:

  - raw: 两段或多段待比较的文本字节



返回值:

  - 相似度，取值范围 0~1

  - 错误信息




Example:

``````````````yak
p, err = str.CalcTextMaxSubStrStability("hello", "hello world") // p = 0.625
``````````````


#### 定义

`CalcTextMaxSubStrStability(raw ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...[]byte` | 两段或多段待比较的文本字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 相似度，取值范围 0~1 |
| r2 | `error` | 错误信息 |


### CalcTokenCount

#### 详细描述
CalcTokenCount 计算文本的 token 数量（基于 Qwen BPE 词表），会识别特殊 token（如 &lt;|im_start|&gt;、&lt;|im_end|&gt;、&lt;|endoftext|&gt;）。

常用于大模型上下文预算估算、长文本裁剪等 AI 处理场景。



参数:

  - text: 待计算的文本



返回值:

  - token 数量




Example:

``````````````yak
n = str.CalcTokenCount("Hello, Yak!")   // 英文 token 数
n = str.CalcTokenCount("你好，世界")      // 中文 token 数
``````````````


#### 定义

`CalcTokenCount(text string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` | 待计算的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | token 数量 |


### Compare

#### 详细描述
Compare 按照ascii码表顺序逐个比较字符串a和b中的每个字符，如果a==b，则返回0，如果a&lt;b，则返回-1，如果a&gt;b，则返回1

参数:

  - a: 第一个字符串

  - b: 第二个字符串



返回值:

  - 比较结果：相等为0，a&lt;b为-1，a&gt;b为1




Example:

``````````````yak
result = str.Compare("hello yak", "hello yak")
println(result)   // OUT: 0
assert result == 0, "Compare should return 0 for equal strings"
assert str.Compare("hello yak", "hello") == 1, "Compare should return 1 when a > b"
assert str.Compare("hello", "hello yak") == -1, "Compare should return -1 when a < b"
``````````````


#### 定义

`Compare(a string, b string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` | 第一个字符串 |
| b | `string` | 第二个字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 比较结果：相等为0，a&lt;b为-1，a&gt;b为1 |


### Contains

#### 详细描述
Contains 判断字符串s是否包含substr

参数:

  - s: 原始字符串

  - substr: 要查找的子串



返回值:

  - 是否包含该子串（区分大小写）




Example:

``````````````yak
ok = str.Contains("hello yakit", "yak")
println(ok)   // OUT: true
assert ok == true, "Contains should detect substring"
assert str.Contains("hello yakit", "Yak") == false, "Contains is case sensitive"
``````````````


#### 定义

`Contains(s string, substr string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| substr | `string` | 要查找的子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否包含该子串（区分大小写） |


### ContainsAny

#### 详细描述
ContainsAny 判断字符串s是否包含chars中的任意字符

参数:

  - s: 原始字符串

  - chars: 待匹配的字符集合



返回值:

  - 是否包含其中任意一个字符




Example:

``````````````yak
ok = str.ContainsAny("hello yak", "ly")
println(ok)   // OUT: true
assert ok == true, "ContainsAny should match any char present"
assert str.ContainsAny("hello yak", "m") == false, "ContainsAny should fail when none present"
``````````````


#### 定义

`ContainsAny(s string, chars string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| chars | `string` | 待匹配的字符集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否包含其中任意一个字符 |


### Count

#### 详细描述
Count 返回字符串s中substr出现的次数

参数:

  - s: 原始字符串

  - substr: 要统计的子串



返回值:

  - 不重叠出现的次数




Example:

``````````````yak
count = str.Count("hello yak", "l")
println(count)   // OUT: 2
assert count == 2, "Count should count non-overlapping occurrences"
``````````````


#### 定义

`Count(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| substr | `string` | 要统计的子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 不重叠出现的次数 |


### Cut

#### 详细描述
Cut 在 s 中查找第一个 sep，并以其为界把 s 切分为前后两部分。如果找到 sep，则 found 为 true。

参数:

  - s: 原始字符串

  - sep: 分隔符



返回值:

  - before: sep 之前的部分

  - after: sep 之后的部分

  - found: 是否找到了 sep




Example:

``````````````yak
before, after, found = str.Cut("key=value", "=")
println(before, after, found)   // OUT: key value true
assert before == "key" && after == "value" && found, "Cut should split on the separator"
``````````````


#### 定义

`Cut(s string, sep string) (before string, after string, found bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| sep | `string` | 分隔符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| before | `string` | sep 之前的部分 |
| after | `string` | sep 之后的部分 |
| found | `bool` | 是否找到了 sep |


### CutPrefix

#### 详细描述
CutPrefix 如果 s 以 prefix 开头，则返回去除该前缀后的字符串与 true，否则返回原字符串与 false。

参数:

  - s: 原始字符串

  - prefix: 要去除的前缀



返回值:

  - after: 去除前缀后的字符串（未命中前缀时为原字符串）

  - found: 是否命中前缀




Example:

``````````````yak
after, found = str.CutPrefix("https://example.com", "https://")
println(after, found)   // OUT: example.com true
assert after == "example.com" && found, "CutPrefix should strip the prefix"
``````````````


#### 定义

`CutPrefix(s string, prefix string) (after string, found bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| prefix | `string` | 要去除的前缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| after | `string` | 去除前缀后的字符串（未命中前缀时为原字符串） |
| found | `bool` | 是否命中前缀 |


### CutSuffix

#### 详细描述
CutSuffix 如果 s 以 suffix 结尾，则返回去除该后缀后的字符串与 true，否则返回原字符串与 false。

参数:

  - s: 原始字符串

  - suffix: 要去除的后缀



返回值:

  - before: 去除后缀后的字符串（未命中后缀时为原字符串）

  - found: 是否命中后缀




Example:

``````````````yak
before, found = str.CutSuffix("file.txt", ".txt")
println(before, found)   // OUT: file true
assert before == "file" && found, "CutSuffix should strip the suffix"
``````````````


#### 定义

`CutSuffix(s string, suffix string) (before string, found bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| suffix | `string` | 要去除的后缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| before | `string` | 去除后缀后的字符串（未命中后缀时为原字符串） |
| found | `bool` | 是否命中后缀 |


### DecodeTokens

#### 详细描述
DecodeTokens 将 Qwen BPE token id 列表解码还原为文本，是 EncodeTokens 的逆操作。



参数:

  - tokens: token id 列表



返回值:

  - 解码还原后的文本




Example:

``````````````yak
ids = str.EncodeTokens("Hello, Yak!")
text = str.DecodeTokens(ids) // Hello, Yak!
``````````````


#### 定义

`DecodeTokens(tokens []int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tokens | `[]int` | token id 列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解码还原后的文本 |


### EncodeOrdinaryTokens

#### 详细描述
EncodeOrdinaryTokens 将文本编码为 Qwen BPE token id 列表（不识别特殊 token）。



参数:

  - text: 待编码的文本



返回值:

  - token id 列表




Example:

``````````````yak
ids = str.EncodeOrdinaryTokens("Hello, Yak!")
``````````````


#### 定义

`EncodeOrdinaryTokens(text string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` | 待编码的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | token id 列表 |


### EncodeTokens

#### 详细描述
EncodeTokens 将文本编码为 Qwen BPE token id 列表（会识别特殊 token）。



参数:

  - text: 待编码的文本



返回值:

  - token id 列表




Example:

``````````````yak
ids = str.EncodeTokens("Hello, Yak!")
println(len(ids))
``````````````


#### 定义

`EncodeTokens(text string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` | 待编码的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | token id 列表 |


### EndsWith

#### 详细描述
EndsWith / HasSuffix 判断字符串s是否以suffix结尾

参数:

  - s: 原始字符串

  - suffix: 要判断的后缀



返回值:

  - 是否以该后缀结尾




Example:

``````````````yak
ok = str.EndsWith("Hello Yak", "Yak")
println(ok)   // OUT: true
assert ok == true, "EndsWith should match suffix"
assert str.EndsWith("Hello Yak", "Hello") == false, "EndsWith should reject non-suffix"
``````````````


#### 定义

`EndsWith(s string, suffix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| suffix | `string` | 要判断的后缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否以该后缀结尾 |


### EqualFold

#### 详细描述
EqualFold 判断字符串s和t是否相等，忽略大小写

参数:

  - s: 第一个字符串

  - t: 第二个字符串



返回值:

  - 忽略大小写后是否相等




Example:

``````````````yak
ok = str.EqualFold("hello Yak", "HELLO YAK")
println(ok)   // OUT: true
assert ok == true, "EqualFold should ignore case"
``````````````


#### 定义

`EqualFold(s string, t string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 第一个字符串 |
| t | `string` | 第二个字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 忽略大小写后是否相等 |


### ExtractBodyFromHTTPResponseRaw

#### 详细描述
ExtractBodyFromHTTPResponseRaw 从原始 HTTP 响应报文中提取 body



参数:

  - res: 原始 HTTP 响应报文字节



返回值:

  - 提取出的响应体字节

  - 错误信息




Example:

``````````````yak
body, err = str.ExtractBodyFromHTTPResponseRaw(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // body = b"ok"
``````````````


#### 定义

`ExtractBodyFromHTTPResponseRaw(res []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` | 原始 HTTP 响应报文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 提取出的响应体字节 |
| r2 | `error` | 错误信息 |


### ExtractChineseIDCards

#### 详细描述
ExtractChineseIDCards 尝试将传入的参数转换为字符串，然后提取字符串中的身份证号



参数:

  - i: 待提取的内容（string 或 []byte）



返回值:

  - 提取到的身份证号列表




Example:

``````````````yak
str.ExtractChineseIDCards("Your ChineseID is: 110101202008027420?") // ["110101202008027420"]
``````````````


#### 定义

`ExtractChineseIDCards(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的身份证号列表 |


### ExtractDomain

#### 详细描述
ExtractDomain 尝试提取字符串中的域名并返回，后续可以接收一个 tryDecode 参数，如果传入 true，则会尝试对输入的文本进行解码(双重URL编码，URL编码，unicode编码，quoted编码)

参数:

  - i: 任意可转为字符串的输入

  - tryDecode: 可选，是否在提取前尝试解码



返回值:

  - 提取到的域名数组




Example:

``````````````yak
domains = str.ExtractDomain("hello yaklang.com or yaklang.io")
println(len(domains))   // OUT: 2
assert len(domains) == 2, "ExtractDomain should extract both domains"
``````````````


#### 定义

`ExtractDomain(i any, tryDecode ...bool) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意可转为字符串的输入 |
| tryDecode | `...bool` | 可选，是否在提取前尝试解码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的域名数组 |


### ExtractHost

#### 详细描述
ExtractHost 尝试从字符串中解析出host和port，并返回host



参数:

  - raw: 形如 host:port 或 URL 的字符串



返回值:

  - 解析出的 host，无法解析时返回原字符串




Example:

``````````````yak
str.ExtractHost("127.0.0.1:8888") // 127.0.0.1
str.ExtractHost("https://example.com") // example.com
``````````````


#### 定义

`ExtractHost(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 形如 host:port 或 URL 的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解析出的 host，无法解析时返回原字符串 |


### ExtractHostPort

#### 详细描述
ExtractHostPort 尝试从字符串中解析出host和port，并返回host:port



参数:

  - raw: 形如 host:port 或 URL 的字符串



返回值:

  - 解析出的 host:port，无法解析时返回原字符串




Example:

``````````````yak
str.ExtractHostPort("https://127.0.0.1:8888") // 127.0.0.1:8888
str.ExtractHostPort("https://baidu.com") // 127.0.0.1:443
``````````````


#### 定义

`ExtractHostPort(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 形如 host:port 或 URL 的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解析出的 host:port，无法解析时返回原字符串 |


### ExtractJson

#### 详细描述
ExtractJson 尝试提取字符串中的 JSON 并进行修复, 返回中的元素都是Object

参数:

  - i: 任意可转为字符串的输入



返回值:

  - 提取并修复后的 JSON 对象字符串数组




Example:

``````````````yak
objs = str.ExtractJson(`{"hello": "yak"}`)
println(len(objs))   // OUT: 1
assert len(objs) == 1, "ExtractJson should extract one json object"
assert len(str.ExtractJson("hello yak")) == 0, "ExtractJson should return empty when no json present"
``````````````


#### 定义

`ExtractJson(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意可转为字符串的输入 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取并修复后的 JSON 对象字符串数组 |


### ExtractJsonWithRaw

#### 详细描述
ExtractJsonWithRaw 尝试提取字符串中的 JSON 并返回，第一个返回值返回经过修复后的JSON字符串数组，第二个返回值返回原始JSON字符串数组(如果修复失败)

参数:

  - i: 任意可转为字符串的输入



返回值:

  - 修复后的 JSON 字符串数组

  - 修复失败时的原始 JSON 字符串数组




Example:

``````````````yak
fixed, raw = str.ExtractJsonWithRaw(`{"hello": "yak"}`)
println(len(fixed))   // OUT: 1
assert len(fixed) == 1, "ExtractJsonWithRaw should extract one json object"
``````````````


#### 定义

`ExtractJsonWithRaw(i any) ([]string, []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意可转为字符串的输入 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 修复后的 JSON 字符串数组 |
| r2 | `[]string` | 修复失败时的原始 JSON 字符串数组 |


### ExtractRootDomain

#### 详细描述
ExtractRootDomain 尝试提取字符串中的根域名并返回

参数:

  - i: 任意可转为字符串的输入



返回值:

  - 提取到的根域名数组




Example:

``````````````yak
roots = str.ExtractRootDomain("hello www.yaklang.com or www.yaklang.io")
println(len(roots))   // OUT: 2
assert len(roots) == 2, "ExtractRootDomain should extract both root domains"
``````````````


#### 定义

`ExtractRootDomain(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意可转为字符串的输入 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的根域名数组 |


### ExtractStrContext

#### 详细描述
ExtractStrContext 从字符串raw中提取一组关键字res上下文的内容，上下文的长度是512个字符确定。



参数:

  - raw: 原始字符串

  - res: 关键词列表



返回值:

  - 每个命中关键词周围的上下文文本切片（已去重）




Example:

``````````````yak
str.ExtractStrContext("hello yak", ["hello"]) // ["hello yak"]
``````````````


#### 定义

`ExtractStrContext(raw string, res []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 原始字符串 |
| res | `[]string` | 关键词列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 每个命中关键词周围的上下文文本切片（已去重） |


### ExtractTitle

#### 详细描述
ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回

参数:

  - i: 任意可转为字符串的 HTML 输入



返回值:

  - 提取到的标题文本，未找到返回空字符串




Example:

``````````````yak
title = str.ExtractTitle("<title>hello yak</title>")
println(title)   // OUT: hello yak
assert title == "hello yak", "ExtractTitle should read the title tag"
``````````````


#### 定义

`ExtractTitle(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意可转为字符串的 HTML 输入 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 提取到的标题文本，未找到返回空字符串 |


### ExtractURLFromHTTPRequest

#### 详细描述
ExtractURLFromHTTPRequest 从 HTTP 请求结构体中提取 URL，返回URL结构体与错误



参数:

  - r: HTTP 请求结构体

  - https: 是否为 https 协议



返回值:

  - 解析出的 URL 实例

  - 错误信息




Example:

``````````````yak
v, err = http.Raw("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
url, err = str.ExtractURLFromHTTPRequest(v, false)
``````````````


#### 定义

`ExtractURLFromHTTPRequest(r *http.Request, https bool) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*http.Request` | HTTP 请求结构体 |
| https | `bool` | 是否为 https 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` | 解析出的 URL 实例 |
| r2 | `error` | 错误信息 |


### ExtractURLFromHTTPRequestRaw

#### 详细描述
ExtractURLFromHTTPRequestRaw 从原始 HTTP 请求报文中提取 URL，返回URL结构体与错误



参数:

  - req: 原始 HTTP 请求报文字节

  - isHttps: 是否为 https 协议



返回值:

  - 解析出的 URL 实例

  - 错误信息




Example:

``````````````yak
url, err := str.ExtractURLFromHTTPRequestRaw(b"GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", false)
``````````````


#### 定义

`ExtractURLFromHTTPRequestRaw(req []byte, isHttps bool) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `[]byte` | 原始 HTTP 请求报文字节 |
| isHttps | `bool` | 是否为 https 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` | 解析出的 URL 实例 |
| r2 | `error` | 错误信息 |


### Fields

#### 详细描述
Fields 返回将字符串s按照空白字符（&#39;\t&#39;, &#39;\n&#39;, &#39;\v&#39;, &#39;\f&#39;, &#39;\r&#39;, &#39; &#39;, 0x85, 0xA0）分割的字符串切片

参数:

  - s: 原始字符串



返回值:

  - 按连续空白分割后的非空字段切片




Example:

``````````````yak
fields = str.Fields("hello world\nhello yak\tand\vyakit")
println(fields)   // OUT: [hello world hello yak and yakit]
assert len(fields) == 6, "Fields should split on any whitespace run"
assert fields[0] == "hello" && fields[5] == "yakit", "Fields should keep tokens in order"
``````````````


#### 定义

`Fields(s string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 按连续空白分割后的非空字段切片 |


### FilterPorts

#### 详细描述
FilterPorts 接受两个字符串形式的端口列表作为参数，返回一个新的端口列表，

其中包含了在 `ports1` 中但不在 `ports2` 中的所有端口。

这个函数首先将两个输入字符串解析为端口列表，然后创建一个映射（或集合）来存储 `ports2` 中的所有端口。

然后，它遍历 `ports1` 中的每个端口，如果这个端口不在 `ports2` 中，那么它就会被添加到结果列表中。

最后，函数返回结果列表，其中包含了所有只在 `ports1` 中出现的端口。



参数:

  - sourcePorts: 源端口列表字符串

  - excludePorts: 需要排除的端口列表字符串



返回值:

  - 在 sourcePorts 中但不在 excludePorts 中的端口整数列表




Example:

``````````````yak
FilterPorts("1-10", "2-10") // [1]
``````````````


#### 定义

`FilterPorts(sourcePorts string, excludePorts string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourcePorts | `string` | 源端口列表字符串 |
| excludePorts | `string` | 需要排除的端口列表字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 在 sourcePorts 中但不在 excludePorts 中的端口整数列表 |


### FixHTTPRequest

#### 详细描述
FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求



参数:

  - raw: 原始 HTTP 请求报文字节



返回值:

  - 修复后的 HTTP 请求报文字节




Example:

``````````````yak
str.FixHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````


#### 定义

`FixHTTPRequest(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求报文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修复后的 HTTP 请求报文字节 |


### FixHTTPResponse

#### 详细描述
FixHTTPResponse 尝试对传入的响应进行修复，并返回修复后的响应，响应体和错误



参数:

  - raw: 原始 HTTP 响应报文字节



返回值:

  - rsp: 修复后的完整响应报文

  - body: 修复后的响应体

  - err: 错误信息




Example:

``````````````yak
fixedResponse, body, err = str.FixHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=gbk\r\n\r\n<html>你好</html>")
``````````````


#### 定义

`FixHTTPResponse(raw []byte) (rsp []byte, body []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 响应报文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` | 修复后的完整响应报文 |
| body | `[]byte` | 修复后的响应体 |
| _ | `error` | 错误信息 |


### Grok

#### 详细描述
Grok 使用 Grok 规则解析字符串并返回解析结果（导出名为 re.Grok）

结果为字段名到取值的映射，可用 .Get(key) 取第一个值；参考 logstash grok 语法

参数:

  - line: 待解析的原始字符串

  - rule: Grok 规则（如 &#34;%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}&#34;）



返回值:

  - Grok 解析结果对象，解析失败返回空结果，可用 .Get(name) 取值




Example:

``````````````yak
result = re.Grok("04/18-00:59:45.385191", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}")
println(result.Get("month"))   // OUT: 04
assert result.Get("day") == "18", "Grok should capture the day field"
assert result.Get("time") == "00:59:45.385191", "Grok should capture the time field"
``````````````


#### 定义

`Grok(line string, rule string) GrokResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` | 待解析的原始字符串 |
| rule | `string` | Grok 规则（如 &#34;%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrokResult` | Grok 解析结果对象，解析失败返回空结果，可用 .Get(name) 取值 |


### HasPrefix

#### 详细描述
StartsWith / HasPrefix 判断字符串s是否以prefix开头

参数:

  - s: 原始字符串

  - prefix: 要判断的前缀



返回值:

  - 是否以该前缀开头




Example:

``````````````yak
ok = str.StartsWith("Hello Yak", "Hello")
println(ok)   // OUT: true
assert ok == true, "StartsWith should match prefix"
assert str.StartsWith("Hello Yak", "Yak") == false, "StartsWith should reject non-prefix"
``````````````


#### 定义

`HasPrefix(s string, prefix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| prefix | `string` | 要判断的前缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否以该前缀开头 |


### HasSuffix

#### 详细描述
EndsWith / HasSuffix 判断字符串s是否以suffix结尾

参数:

  - s: 原始字符串

  - suffix: 要判断的后缀



返回值:

  - 是否以该后缀结尾




Example:

``````````````yak
ok = str.EndsWith("Hello Yak", "Yak")
println(ok)   // OUT: true
assert ok == true, "EndsWith should match suffix"
assert str.EndsWith("Hello Yak", "Hello") == false, "EndsWith should reject non-suffix"
``````````````


#### 定义

`HasSuffix(s string, suffix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| suffix | `string` | 要判断的后缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否以该后缀结尾 |


### HostPort

#### 详细描述
HostPort 将 host 和 port 拼接成 host:port 的形式



参数:

  - host: 主机名或 IP

  - port: 端口（数字或字符串）



返回值:

  - 拼接后的 host:port 字符串




Example:

``````````````yak
str.HostPort("yaklang.com", 443) // yaklang.com:443
``````````````


#### 定义

`HostPort(host string, port any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 主机名或 IP |
| port | `any` | 端口（数字或字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 拼接后的 host:port 字符串 |


### IPv4ToCClassNetwork

#### 详细描述
IPv4ToCClassNetwork 尝试从一个 IPv4 地址中获取 C 类网络地址，并返回错误



参数:

  - s: IPv4 地址字符串



返回值:

  - network: C 类网段（形如 192.168.0.0/24）

  - err: 错误信息




Example:

``````````````yak
network, err = str.IPv4ToCClassNetwork("192.168.0.1") // network = "192.168.0.0/24", err = nil
``````````````


#### 定义

`IPv4ToCClassNetwork(s string) (network string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | IPv4 地址字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| network | `string` | C 类网段（形如 192.168.0.0/24） |
| err | `error` | 错误信息 |


### Index

#### 详细描述
Index 返回字符串s中substr第一次出现的位置的索引，如果字符串中不存在substr，则返回-1

参数:

  - s: 原始字符串

  - substr: 要查找的子串



返回值:

  - 首次出现的下标，未找到返回 -1




Example:

``````````````yak
idx = str.Index("hello yak", "yak")
println(idx)   // OUT: 6
assert idx == 6, "Index should return the first match position"
assert str.Index("hello world", "yak") == -1, "Index should return -1 when not found"
``````````````


#### 定义

`Index(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| substr | `string` | 要查找的子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 首次出现的下标，未找到返回 -1 |


### IndexAny

#### 详细描述
IndexAny 返回字符串s中chars任意字符首次出现的位置的索引，如果字符串中不存在chars，则返回-1

参数:

  - s: 原始字符串

  - chars: 待匹配的字符集合



返回值:

  - 任意字符首次出现的下标，未找到返回 -1




Example:

``````````````yak
// l 在 "Hello world" 第三个字符首次命中 chars
idx = str.IndexAny("Hello world", "world")
println(idx)   // OUT: 2
assert idx == 2, "IndexAny should locate first matching char"
// chars 中字符都不出现时返回 -1
assert str.IndexAny("Hello World", "Yak") == -1, "IndexAny should return -1 when no char matches"
``````````````


#### 定义

`IndexAny(s string, chars string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| chars | `string` | 待匹配的字符集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 任意字符首次出现的下标，未找到返回 -1 |


### IndexByte

#### 详细描述
IndexByte 返回字符串s中第一个等于c的字符的索引，如果字符串中不存在c，则返回-1

参数:

  - s: 原始字符串

  - c: 要查找的字节



返回值:

  - 首次出现的下标，未找到返回 -1




Example:

``````````````yak
idx = str.IndexByte("hello yak", 'y')
println(idx)   // OUT: 6
assert idx == 6, "IndexByte should return the first byte position"
assert str.IndexByte("hello yak", 'm') == -1, "IndexByte should return -1 when not found"
``````````````


#### 定义

`IndexByte(s string, c byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| c | `byte` | 要查找的字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 首次出现的下标，未找到返回 -1 |


### Intersect

#### 详细描述
Intersect / IntersectString 返回两个字符串切片之间的交集



参数:

  - x: 第一个字符串切片

  - y: 第二个字符串切片



返回值:

  - 同时存在于 x 和 y 中的元素组成的切片




Example:

``````````````yak
str.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]
``````````````


#### 定义

`Intersect(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` | 第一个字符串切片 |
| y | `[]string` | 第二个字符串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 同时存在于 x 和 y 中的元素组成的切片 |


### IntersectString

#### 详细描述
Intersect / IntersectString 返回两个字符串切片之间的交集



参数:

  - x: 第一个字符串切片

  - y: 第二个字符串切片



返回值:

  - 同时存在于 x 和 y 中的元素组成的切片




Example:

``````````````yak
str.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]
``````````````


#### 定义

`IntersectString(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` | 第一个字符串切片 |
| y | `[]string` | 第二个字符串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 同时存在于 x 和 y 中的元素组成的切片 |


### IsAlNum

#### 详细描述
IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成



参数:

  - i: 待判断的对象，会被转换为字符串



返回值:

  - 是否全部由英文字母和数字组成




Example:

``````````````yak
str.IsAlphaNum("abc123") // true
str.IsAlphaNum("abc123!") // false
``````````````


#### 定义

`IsAlNum(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的对象，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否全部由英文字母和数字组成 |


### IsAllVisibleASCII

#### 详细描述
IsAllVisibleASCII 判断字符串是否全部由可见的 ASCII 字符（0x20~0x7E）组成



参数:

  - s: 待判断的字符串



返回值:

  - 是否全部为可见 ASCII 字符




Example:

``````````````yak
str.IsAllVisibleASCII("hello") // true
str.IsAllVisibleASCII("你好")    // false
``````````````


#### 定义

`IsAllVisibleASCII(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待判断的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否全部为可见 ASCII 字符 |


### IsAlpha

#### 详细描述
IsAlpha 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母组成



参数:

  - i: 待判断的对象，会被转换为字符串



返回值:

  - 是否全部由英文字母组成




Example:

``````````````yak
str.IsAlpha("abc") // true
str.IsAlpha("abc123") // false
``````````````


#### 定义

`IsAlpha(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的对象，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否全部由英文字母组成 |


### IsAlphaNum

#### 详细描述
IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成



参数:

  - i: 待判断的对象，会被转换为字符串



返回值:

  - 是否全部由英文字母和数字组成




Example:

``````````````yak
str.IsAlphaNum("abc123") // true
str.IsAlphaNum("abc123!") // false
``````````````


#### 定义

`IsAlphaNum(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的对象，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否全部由英文字母和数字组成 |


### IsBase64Value

#### 详细描述
IsBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据



参数:

  - i: 待判断的内容（string 或 []byte）



返回值:

  - 是否为 Base64 编码数据




Example:

``````````````yak
str.IsBase64Value("MTI=") // true
str.IsBase64Value("123") // false
``````````````


#### 定义

`IsBase64Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 Base64 编码数据 |


### IsCaptchaField

#### 详细描述
IsCaptchaField 尝试将传入的参数转换为字符串，然后猜测其是否是验证码字段



参数:

  - i: 待判断的字段名（string 或 []byte）



返回值:

  - 是否为验证码字段




Example:

``````````````yak
str.IsCaptchaField("captcha") // true
str.IsCaptchaField("code_img") // true
str.IsCaptchaField("id") // false
``````````````


#### 定义

`IsCaptchaField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的字段名（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为验证码字段 |


### IsDigit

#### 详细描述
IsDigit 尝试将传入的参数转换为字符串，然后判断其是否都由数字组成



参数:

  - i: 待判断的对象，会被转换为字符串



返回值:

  - 是否全部由数字组成




Example:

``````````````yak
str.IsDigit("123") // true
str.IsDigit("abc123") // false
``````````````


#### 定义

`IsDigit(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的对象，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否全部由数字组成 |


### IsHtmlResponse

#### 详细描述
IsHtmlResponse 猜测传入的参数是否为原始 HTTP 响应报文



参数:

  - i: 原始 HTTP 响应（string、[]byte 或 *http.Response）



返回值:

  - 是否为 HTML 响应




Example:

``````````````yak
str.IsHtmlResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<html></html>") // true
resp, _ = str.ParseStringToHTTPResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<html></html>")
str.IsHtmlResponse(resp) // true
``````````````


#### 定义

`IsHtmlResponse(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始 HTTP 响应（string、[]byte 或 *http.Response） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 HTML 响应 |


### IsHttpURL

#### 详细描述
IsHttpURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https



参数:

  - v: 待判断的对象，会被转换为字符串



返回值:

  - 是否为 http(s) 协议的完整 URL




Example:

``````````````yak
str.IsHttpURL("http://www.yaklang.com") // true
str.IsHttpURL("www.yaklang.com") // false
``````````````


#### 定义

`IsHttpURL(v any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` | 待判断的对象，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 http(s) 协议的完整 URL |


### IsIPv4

#### 详细描述
IsIPv4 判断字符串是否是 IPv4 地址



参数:

  - raw: 待判断的字符串



返回值:

  - 是否为 IPv4 地址




Example:

``````````````yak
str.IsIPv4("::1") // false
str.IsIPv4("127.0.0.1") // true
``````````````


#### 定义

`IsIPv4(raw string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 待判断的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 IPv4 地址 |


### IsIPv6

#### 详细描述
IsIPv6 判断字符串是否是 IPv6 地址



参数:

  - raw: 待判断的字符串



返回值:

  - 是否为 IPv6 地址




Example:

``````````````yak
str.IsIPv6("::1") // true
str.IsIPv6("127.0.0.1") // false
``````````````


#### 定义

`IsIPv6(raw string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 待判断的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 IPv6 地址 |


### IsJSONPParam

#### 详细描述
IsJSONPParam 根据传入的参数名和参数值猜测是否为 JSONP 参数



参数:

  - key: 参数名

  - value: 参数值



返回值:

  - 是否为 JSONP 参数




Example:

``````````````yak
str.IsJSONPParam("callback","jquery1.0.min.js") // true，因为参数名为常见的 JSONP 参数名，且参数值为常见的JS文件名
str.IsJSONPParam("f","jquery1.0.min.js") // true，因为参数值为常见的 JS 文件名
str.IsJSONPParam("id","1") // false
``````````````


#### 定义

`IsJSONPParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 参数名 |
| value | `string` | 参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 JSONP 参数 |


### IsJsonResponse

#### 详细描述
IsJsonResponse 尝试将传入的参数转换为字符串，然后猜测传入的参数是否为 JSON 格式的原始 HTTP 响应报文，这是通过判断Content-Type请求头实现的



参数:

  - i: 原始 HTTP 响应（string、[]byte 或 *http.Response）



返回值:

  - 是否为 JSON 响应




Example:

``````````````yak
str.IsJsonResponse("HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n{\"code\": 0}") // true
str.IsJsonResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nhello") // false
``````````````


#### 定义

`IsJsonResponse(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始 HTTP 响应（string、[]byte 或 *http.Response） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 JSON 响应 |


### IsMD5Value

#### 详细描述
IsMD5Value 尝试将传入的参数转换为字符串，然后猜测其是否是 MD5 编码的数据



参数:

  - i: 待判断的内容（string 或 []byte）



返回值:

  - 是否为 MD5 值




Example:

``````````````yak
str.IsMD5Value("202cb962ac59075b964b07152d234b70") // true
str.IsMD5Value("123") // false
``````````````


#### 定义

`IsMD5Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 MD5 值 |


### IsPasswordField

#### 详细描述
IsPasswordField 尝试将传入的参数转换为字符串，然后猜测其是否是 password 字段



参数:

  - i: 待判断的字段名（string 或 []byte）



返回值:

  - 是否为 password 字段




Example:

``````````````yak
str.IsPasswordField("password") // true
str.IsPasswordField("pwd") // true
str.IsPasswordField("id") // false
``````````````


#### 定义

`IsPasswordField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的字段名（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 password 字段 |


### IsPlainBase64Value

#### 详细描述
IsPlainBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据，它相比于 IsBase64Value 多了一层判断，即判断 base64 解码后的数据是否为可见字符串



参数:

  - i: 待判断的内容（string 或 []byte）



返回值:

  - 是否为可解码为可见字符串的 Base64 数据




Example:

``````````````yak
str.IsPlainBase64Value("MTI=") // true
str.IsPlainBase64Value("Aw==") // false
``````````````


#### 定义

`IsPlainBase64Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为可解码为可见字符串的 Base64 数据 |


### IsRedirectParam

#### 详细描述
IsRedirectParam 根据传入的参数名和参数值猜测是否为重定向参数



参数:

  - key: 参数名

  - value: 参数值



返回值:

  - 是否为重定向参数




Example:

``````````````yak
str.IsRedirectParam("to","http://www.yaklang.com") // true，因为参数值为完整的 URL
str.IsRedirectParam("target","/index.php") // true，因为参数值为一个 URL 路径而且参数名为常见的跳转的参数名
str.IsRedirectParam("id", "1") // false
``````````````


#### 定义

`IsRedirectParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 参数名 |
| value | `string` | 参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为重定向参数 |


### IsSQLColumnField

#### 详细描述
IsSQLColumnField 尝试将传入的参数转换为字符串，然后猜测其是否是 SQL 查询字段



参数:

  - i: 待判断的字段名（string 或 []byte）



返回值:

  - 是否为 SQL 查询字段




Example:

``````````````yak
str.IsSQLColumnField("sort") // true
str.IsSQLColumnField("order") // true
str.IsSQLColumnField("id") // false
``````````````


#### 定义

`IsSQLColumnField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的字段名（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 SQL 查询字段 |


### IsSensitiveJson

#### 详细描述
IsSensitiveJson  尝试将传入的参数转换为字符串，然后猜测其是否为敏感的 JSON 数据



参数:

  - i: 待判断的内容（string 或 []byte）



返回值:

  - 是否为敏感 JSON 数据




Example:

``````````````yak
str.IsSensitiveJson(`{"password":"123456"}`) // true
str.IsSensitiveJson(`{"uid": 10086}`) // true
str.IsSensitiveJson(`{"id": 1}`) // false
``````````````


#### 定义

`IsSensitiveJson(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为敏感 JSON 数据 |


### IsSensitiveTokenField

#### 详细描述
IsSensitiveTokenField 尝试将传入的参数转换为字符串，然后猜测其是否是 token 字段



参数:

  - i: 待判断的字段名（string 或 []byte）



返回值:

  - 是否为 token 字段




Example:

``````````````yak
str.IsSensitiveTokenField("token") // true
str.IsSensitiveTokenField("access_token") // true
str.IsSensitiveTokenField("id") // false
``````````````


#### 定义

`IsSensitiveTokenField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的字段名（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 token 字段 |


### IsServerError

#### 详细描述
IsServerError 猜测传入的参数是否为服务器错误



参数:

  - i: 待判断的内容（string 或 []byte）



返回值:

  - 是否包含服务器错误特征




Example:

``````````````yak
str.IsServerError(`Fatal error: Uncaught Error: Call to undefined function sum() in F:\xampp\htdocs\test.php:7 Stack trace: #0 {main} thrown in <path> on line 7`) // true，这是PHP报错信息
``````````````


#### 定义

`IsServerError(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否包含服务器错误特征 |


### IsSha256Value

#### 详细描述
IsSha256Value 尝试将传入的参数转换为字符串，然后猜测其是否是 SHA256 编码的数据



参数:

  - i: 待判断的内容（string 或 []byte）



返回值:

  - 是否为 SHA256 值




Example:

``````````````yak
str.IsSha256Value("a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3") // true
str.IsSha256Value("123") // false
``````````````


#### 定义

`IsSha256Value(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 SHA256 值 |


### IsStrongPassword

#### 详细描述
IsStrongPassword 判断字符串是否为强密码，强密码的定义为：长度大于8，同时包含特殊字符、小写字母、大写字母、数字



参数:

  - s: 待检测的密码字符串



返回值:

  - 是否满足强密码要求




Example:

``````````````yak
str.IsStrongPassword("12345678") // false
str.IsStrongPassword("12345678a") // false
str.IsStrongPassword("12345678aA") // false
str.IsStrongPassword("12345678aA!") // true
``````````````


#### 定义

`IsStrongPassword(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待检测的密码字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否满足强密码要求 |


### IsTLSServer

#### 详细描述
IsTLSServer 尝试访问传入的host，然后判断其是否为 TLS 服务。第一个参数为 host，后面可以传入零个或多个参数，为代理地址



参数:

  - addr: 目标地址（host:port）

  - proxies: 可选的一个或多个代理地址



返回值:

  - 目标是否为 TLS 服务




Example:

``````````````yak
str.IsTLSServer("www.yaklang.com:443") // true
str.IsTLSServer("www.yaklang.com:80") // false
``````````````


#### 定义

`IsTLSServer(addr string, proxies ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址（host:port） |
| proxies | `...string` | 可选的一个或多个代理地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 目标是否为 TLS 服务 |


### IsUrlParam

#### 详细描述
IsUrlParam 根据传入的参数名和参数值猜测是否为 URL 参数



参数:

  - key: 参数名

  - value: 参数值



返回值:

  - 是否为 URL 参数




Example:

``````````````yak
str.IsUrlParam("url","http://www.yaklang.com") // true，因为参数名为常见的 URL 参数名，且参数值为完整的URL
str.IsUrlParam("id","1") // false
``````````````


#### 定义

`IsUrlParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 参数名 |
| value | `string` | 参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 URL 参数 |


### IsUrlPath

#### 详细描述
IsUrlPath 根据 value 猜测是否是一个 url path



参数:

  - v: 待判断的对象，会被转换为字符串



返回值:

  - 是否为 URL 路径




Example:

``````````````yak
str.IsUrlPath("/index.php") // true
str.IsUrlPath("index.php") // false
``````````````


#### 定义

`IsUrlPath(v any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` | 待判断的对象，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 URL 路径 |


### IsUsernameField

#### 详细描述
IsUsernameField 尝试将传入的参数转换为字符串，然后猜测其是否是 username 字段



参数:

  - i: 待判断的字段名（string 或 []byte）



返回值:

  - 是否为 username 字段




Example:

``````````````yak
str.IsUsernameField("username") // true
str.IsUsernameField("user") // true
str.IsUsernameField("id") // false
``````````````


#### 定义

`IsUsernameField(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的字段名（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 username 字段 |


### IsXmlParam

#### 详细描述
IsXmlParam 根据传入的参数名和参数值猜测是否为 XML 参数



参数:

  - key: 参数名

  - value: 参数值



返回值:

  - 是否为 XML 参数




Example:

``````````````yak
str.IsXmlParam("xml","<xml></xml>") // true，因为参数名为常见的 XML 参数名，且参数值为 XML 格式的字符串
str.IsXmlParam("X","<xml></xml>") // true，因为参数值为 XML 格式的字符串
str.IsXmlParam("id","1") // false
``````````````


#### 定义

`IsXmlParam(key string, value string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 参数名 |
| value | `string` | 参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 XML 参数 |


### IsXmlRequest

#### 详细描述
IsXmlRequest 猜测传入的参数是否为请求头是 XML 格式的原始 HTTP 请求报文



参数:

  - i: 原始 HTTP 请求（string、[]byte 或 *http.Request）



返回值:

  - 是否为 XML 请求




Example:

``````````````yak
str.IsXmlRequest("POST / HTTP/1.1\r\nContent-Type: application/xml\r\n\r\n<xml></xml>") // true
str.IsXmlRequest("POST / HTTP/1.1\r\nContent-Type: text/html\r\n\r\n<html></html>") // false
``````````````


#### 定义

`IsXmlRequest(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始 HTTP 请求（string、[]byte 或 *http.Request） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 XML 请求 |


### IsXmlValue

#### 详细描述
IsXmlValue 尝试将传入的参数转换为字符串，然后猜测其是否是 XML 格式的数据



参数:

  - i: 待判断的内容（string 或 []byte）



返回值:

  - 是否为 XML 格式数据




Example:

``````````````yak
str.IsXmlValue("<xml></xml>") // true
str.IsXmlValue("<html></html>") // false
``````````````


#### 定义

`IsXmlValue(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的内容（string 或 []byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 XML 格式数据 |


### Join

#### 详细描述
Join 将i中的元素用d连接，如果传入的参数不是字符串，会自动将其转为字符串，再将其用d连接。如果连接失败，则会返回i的字符串形式。

参数:

  - i: 要连接的切片或可迭代对象

  - d: 连接用的分隔符



返回值:

  - 连接后的字符串




Example:

``````````````yak
result = str.Join(["hello", "yak"], " ")
println(result)   // OUT: hello yak
assert result == "hello yak", "Join should join string slice with sep"
assert str.Join([1, 2, 3], " ") == "1 2 3", "Join should stringify non-string elements"
``````````````


#### 定义

`Join(i any, d any) (defaultResult string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 要连接的切片或可迭代对象 |
| d | `any` | 连接用的分隔符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| defaultResult | `string` | 连接后的字符串 |


### JsonStringDecode

#### 详细描述
JsonStringDecode 解码一个 JSON 字符串值（一次性版本），去掉首尾引号并还原转义（\n、\t、\uXXXX、\xNN 等），

返回真实字符串内容。相比 str.Unquote 更容错：遇到非标准/畸形数据会回退返回原始内容而不是报错。

适合处理 jsonstream onField 给出的带引号原始值。



参数:

  - raw: 带引号和转义的 JSON 字符串值



返回值:

  - 去引号、去转义后的真实字符串内容




Example:

``````````````yak
str.JsonStringDecode(`"Hello\nYak"`)            // Hello(换行)Yak
str.JsonStringDecode(`"\u4f60\u597d"`)          // 你好
``````````````


#### 定义

`JsonStringDecode(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 带引号和转义的 JSON 字符串值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去引号、去转义后的真实字符串内容 |


### JsonToMap

#### 详细描述
JsonToMap 将 json 字符串 line 解析为 map，保留嵌套结构（对象/数组不会被转为字符串）

单对象时优先用 json.Unmarshal 确保嵌套正确；多对象（如 `{} {}`）时回退到 jstream。



参数:

  - line: JSON 字符串



返回值:

  - 解析出的 map，解析失败返回 nil




Example:

``````````````yak
str.JsonToMap(`{"a":1,"b":2}`)           // map[a:1 b:2]
str.JsonToMap(`{"b":{},"c":[],"d":{"d1":""}}`)  // 嵌套结构完整保留
``````````````


#### 定义

`JsonToMap(line string) map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` | JSON 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` | 解析出的 map，解析失败返回 nil |


### JsonToMapList

#### 详细描述
JsonToMapList 将 json 字符串 line 解析为 map 列表，保留嵌套结构（对象/数组不会被转为字符串）



参数:

  - line: 包含一个或多个 JSON 对象的字符串



返回值:

  - 解析出的 map 列表




Example:

``````````````yak
str.JsonToMapList(`{"a":1,"b":2} {"c":3, "d":4}`) // [map[a:1 b:2] map[c:3 d:4]]
str.JsonToMapList(`{"a":{"x":1},"b":[]}`)         // [map[a:map[x:1] b:[]]
``````````````


#### 定义

`JsonToMapList(line string) []map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` | 包含一个或多个 JSON 对象的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]any` | 解析出的 map 列表 |


### LastIndex

#### 详细描述
LastIndex 返回字符串s中substr最后一次出现的位置的索引，如果字符串中不存在substr，则返回-1

参数:

  - s: 原始字符串

  - substr: 要查找的子串



返回值:

  - 最后一次出现的下标，未找到返回 -1




Example:

``````````````yak
idx = str.LastIndex("hello yak", "l")
println(idx)   // OUT: 3
assert idx == 3, "LastIndex should return the last match position"
assert str.LastIndex("hello yak", "m") == -1, "LastIndex should return -1 when not found"
``````````````


#### 定义

`LastIndex(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| substr | `string` | 要查找的子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 最后一次出现的下标，未找到返回 -1 |


### LastIndexAny

#### 详细描述
LastIndexAny 返回字符串s中chars任意字符最后一次出现的位置的索引，如果字符串中不存在chars，则返回-1

参数:

  - s: 原始字符串

  - chars: 待匹配的字符集合



返回值:

  - 任意字符最后一次出现的下标，未找到返回 -1




Example:

``````````````yak
idx = str.LastIndexAny("hello yak", "ly")
println(idx)   // OUT: 6
assert idx == 6, "LastIndexAny should return last position of any char"
assert str.LastIndexAny("hello yak", "m") == -1, "LastIndexAny should return -1 when none present"
``````````````


#### 定义

`LastIndexAny(s string, chars string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| chars | `string` | 待匹配的字符集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 任意字符最后一次出现的下标，未找到返回 -1 |


### LastIndexByte

#### 详细描述
LastIndexByte 返回字符串s中最后一个等于c的字符的索引，如果字符串中不存在c，则返回-1

参数:

  - s: 原始字符串

  - c: 要查找的字节



返回值:

  - 最后一次出现的下标，未找到返回 -1




Example:

``````````````yak
idx = str.LastIndexByte("hello yak", 'l')
println(idx)   // OUT: 3
assert idx == 3, "LastIndexByte should return last byte position"
assert str.LastIndexByte("hello yak", 'm') == -1, "LastIndexByte should return -1 when not found"
``````````````


#### 定义

`LastIndexByte(s string, c byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| c | `byte` | 要查找的字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 最后一次出现的下标，未找到返回 -1 |


### LowerAndTrimSpace

#### 详细描述
LowerAndTrimSpace 将字符串raw转换为小写并去除前后空白字符



参数:

  - raw: 原始字符串



返回值:

  - 转为小写并去除前后空白后的字符串




Example:

``````````````yak
str.LowerAndTrimSpace("  Hello  ") // "hello"
``````````````


#### 定义

`LowerAndTrimSpace(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 转为小写并去除前后空白后的字符串 |


### MatchAllOfGlob

#### 详细描述
MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果所有的glob模式都匹配成功，则返回 true，否则返回 false



参数:

  - i: 待匹配的对象，会被转换为字符串

  - re: 一个或多个 glob 模式



返回值:

  - 是否所有 glob 模式都匹配成功




Example:

``````````````yak
str.MatchAllOfGlob("abc", "a*", "?b?", "[a-z]?c") // true
``````````````


#### 定义

`MatchAllOfGlob(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的对象，会被转换为字符串 |
| re | `...string` | 一个或多个 glob 模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否所有 glob 模式都匹配成功 |


### MatchAllOfRegexp

#### 详细描述
MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果所有的正则表达式都匹配成功，则返回 true，否则返回 false



参数:

  - i: 待匹配的对象，会被转换为字符串

  - re: 一个或多个正则表达式



返回值:

  - 是否所有正则表达式都匹配成功




Example:

``````````````yak
str.MatchAllOfRegexp("abc", "a.+", ".?b.?", "\\w{2}c") // true
``````````````


#### 定义

`MatchAllOfRegexp(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的对象，会被转换为字符串 |
| re | `...string` | 一个或多个正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否所有正则表达式都匹配成功 |


### MatchAllOfSubString

#### 详细描述
MatchAllOfSubString 尝试将 i 转换为字符串，然后判断所有子串 subStr 是否都存在于 i 中，如果都存在则返回 true，否则返回 false，此函数忽略大小写



参数:

  - i: 待匹配的对象，会被转换为字符串

  - subStr: 一个或多个子串



返回值:

  - 是否所有子串都存在于 i 中




Example:

``````````````yak
str.MatchAllOfSubString("abc", "a", "b", "c") // true
``````````````


#### 定义

`MatchAllOfSubString(i any, subStr ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的对象，会被转换为字符串 |
| subStr | `...string` | 一个或多个子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否所有子串都存在于 i 中 |


### MatchAnyOfGlob

#### 详细描述
MatchAnyOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否则返回 false



参数:

  - i: 待匹配的对象，会被转换为字符串

  - re: 一个或多个 glob 模式



返回值:

  - 是否有任意 glob 模式匹配成功




Example:

``````````````yak
str.MatchAnyOfGlob("abc", "a*", "??b", "[^a-z]?c") // true
``````````````


#### 定义

`MatchAnyOfGlob(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的对象，会被转换为字符串 |
| re | `...string` | 一个或多个 glob 模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否有任意 glob 模式匹配成功 |


### MatchAnyOfRegexp

#### 详细描述
MatchAnyOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true，否则返回 false



参数:

  - i: 待匹配的对象，会被转换为字符串

  - re: 一个或多个正则表达式



返回值:

  - 是否有任意正则表达式匹配成功




Example:

``````````````yak
str.MatchAnyOfRegexp("abc", "a.+", "Ab.?", ".?bC") // true
``````````````


#### 定义

`MatchAnyOfRegexp(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的对象，会被转换为字符串 |
| re | `...string` | 一个或多个正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否有任意正则表达式匹配成功 |


### MatchAnyOfSubString

#### 详细描述
MatchAnyOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i 中则返回 true，否则返回 false，此函数忽略大小写



参数:

  - i: 待匹配的对象，会被转换为字符串

  - subStr: 一个或多个子串



返回值:

  - 是否存在任意子串于 i 中




Example:

``````````````yak
str.MatchAnyOfSubString("abc", "a", "z", "x") // true
``````````````


#### 定义

`MatchAnyOfSubString(i any, subStr ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的对象，会被转换为字符串 |
| subStr | `...string` | 一个或多个子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否存在任意子串于 i 中 |


### MergeUrlFromHTTPRequest

#### 详细描述
MergeUrlFromHTTPRequest 将传入的 target 与 原始 HTTP 请求报文中的 URL 进行合并，并返回合并后的 URL



参数:

  - rawRequest: 原始 HTTP 请求报文字节

  - target: 待合并的目标路径或 URL

  - isHttps: 是否为 https 协议



返回值:

  - 合并后的 URL 字符串




Example:

``````````````yak
url = str.MergeUrlFromHTTPRequest(b"GET /z HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", "/a/b", true) // url = "https://www.yaklang.com/z/a/b"
``````````````


#### 定义

`MergeUrlFromHTTPRequest(rawRequest []byte, target string, isHttps bool) (newURL string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rawRequest | `[]byte` | 原始 HTTP 请求报文字节 |
| target | `string` | 待合并的目标路径或 URL |
| isHttps | `bool` | 是否为 https 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newURL | `string` | 合并后的 URL 字符串 |


### NewFilter

#### 详细描述
NewFilter 创建一个默认的字符串布谷鸟过滤器，布谷鸟过滤器用于判断一个元素是否在一个集合中，它存在极低的假阳性（即说存在的元素实际上不存在），通常这个集合中的元素数量非常大才会使用布谷鸟过滤器。



返回值:

  - 一个新的字符串过滤器实例




Example:

``````````````yak
f = str.NewFilter()
f.Insert("hello")
f.Exist("hello") // true
``````````````


#### 定义

`NewFilter() *StringFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*StringFilter` | 一个新的字符串过滤器实例 |


### NewJSONStringReader

#### 详细描述
NewJSONStringReader 包装一个 JSON 字符串值的 Reader，流式解码其中的转义（\n、\t、\uXXXX、\xNN 等），

返回去引号、去转义后的真实字符串内容。内部已用 UTF-8 安全读取，遇到非标准/畸形数据会自动回退为原始透传。

常用于 jsonstream 的 onField 回调：字段流给出的是带引号和转义的原始值，用它解码即可拿到真实内容。



参数:

  - r: 提供 JSON 字符串值的 io.Reader



返回值:

  - 一个输出去引号、去转义后真实内容的 io.Reader




Example:

``````````````yak
jsonstream.Extract(`{"content": "Hello\nYak \u4f60\u597d"}`,

	jsonstream.onField("content", func(key, reader, parents) {
	    data = io.ReadAll(str.NewJSONStringReader(reader))~
	    println(string(data)) // Hello(换行)Yak 你好
	}),

)
``````````````


#### 定义

`NewJSONStringReader(r io.Reader) io.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` | 提供 JSON 字符串值的 io.Reader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.Reader` | 一个输出去引号、去转义后真实内容的 io.Reader |


### NewReader

#### 详细描述
NewReader 基于字符串 s 创建一个只读的 io.Reader，可用于需要 reader 的接口。

参数:

  - s: 原始字符串



返回值:

  - 一个从 s 读取数据的 *strings.Reader




Example:

``````````````yak
reader = str.NewReader("hello")
data = io.ReadAll(reader)~
assert string(data) == "hello", "NewReader should provide a reader over the string"
``````````````


#### 定义

`NewReader(s string) *strings.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*strings.Reader` | 一个从 s 读取数据的 *strings.Reader |


### NewUTF8Reader

#### 详细描述
NewUTF8Reader 包装一个 Reader，使每次读取都只返回完整的 UTF-8 字符，

避免在按字节/小缓冲读取数据流（如 jsonstream 字段流）时把一个多字节字符（中文等）从中间截断。



参数:

  - r: 原始的 io.Reader



返回值:

  - 一个保证按完整 UTF-8 字符返回的 io.Reader




Example:

``````````````yak
// 配合 jsonstream 字段流逐块读取中文内容时避免乱码
r = str.NewUTF8Reader(rawReader)
buf = make([]byte, 4)
n, err = r.Read(buf) // buf[:n] 一定是完整的 UTF-8 字符序列
``````````````


#### 定义

`NewUTF8Reader(r io.Reader) io.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` | 原始的 io.Reader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.Reader` | 一个保证按完整 UTF-8 字符返回的 io.Reader |


### ParamsGetOr

#### 详细描述
ParamsGetOr 从 map 中获取 key 对应的值，如果不存在则返回 defaultValue。支持 map[string]string 与 map[string]any。



参数:

  - i: 源 map（map[string]string 或 map[string]any）

  - key: 要获取的键

  - defaultValue: 键不存在时返回的默认值



返回值:

  - 键对应的字符串值，不存在时返回 defaultValue




Example:

``````````````yak
str.ParamsGetOr({"a": "1"}, "a", "2") // 1
str.ParamsGetOr({"a": "1"}, "b", "2") // 2
``````````````


#### 定义

`ParamsGetOr(i any, key string, defaultValue string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 源 map（map[string]string 或 map[string]any） |
| key | `string` | 要获取的键 |
| defaultValue | `string` | 键不存在时返回的默认值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 键对应的字符串值，不存在时返回 defaultValue |


### ParseBytesToHTTPRequest

#### 详细描述
ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求

参数:

  - raw: 原始 HTTP 请求报文字节数组



返回值:

  - 解析得到的 HTTP 请求对象

  - 错误信息，解析失败时返回非空




Example:

``````````````yak
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| reqInst | `*http.Request` | 解析得到的 HTTP 请求对象 |
| err | `error` | 错误信息，解析失败时返回非空 |


### ParseBytesToHTTPResponse

#### 详细描述
ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应

参数:

  - res: 原始 HTTP 响应报文字节数组



返回值:

  - 解析得到的 HTTP 响应对象

  - 错误信息，解析失败时返回非空




Example:

``````````````yak
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
``````````````


#### 定义

`ParseBytesToHTTPResponse(res []byte) (rspInst *http.Response, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` | 原始 HTTP 响应报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*http.Response` | 解析得到的 HTTP 响应对象 |
| err | `error` | 错误信息，解析失败时返回非空 |


### ParseStringToCClassHosts

#### 详细描述
ParseStringToCClassHosts 尝试从给定的字符串中解析Host，再将其转为 C 类网段，用,分隔



参数:

  - targets: 主机字符串（支持范围、CIDR 等）



返回值:

  - 以逗号分隔的 C 类网段字符串




Example:

``````````````yak
str.ParseStringToCClassHosts("192.168.0.1-255") // 192.168.0.0/24
``````````````


#### 定义

`ParseStringToCClassHosts(targets string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` | 主机字符串（支持范围、CIDR 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 以逗号分隔的 C 类网段字符串 |


### ParseStringToHTTPRequest

#### 详细描述
ParseStringToHTTPRequest 将字符串解析为 HTTP 请求



参数:

  - raw: HTTP 请求报文字符串



返回值:

  - 解析出的 HTTP 请求结构体

  - 错误信息




Example:

``````````````yak
req, err = str.ParseStringToHTTPRequest("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````


#### 定义

`ParseStringToHTTPRequest(raw string) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | HTTP 请求报文字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` | 解析出的 HTTP 请求结构体 |
| r2 | `error` | 错误信息 |


### ParseStringToHTTPResponse

#### 详细描述
ParseStringToHTTPResponse 将字符串解析为 HTTP 响应



参数:

  - res: HTTP 响应报文字符串



返回值:

  - 解析出的 HTTP 响应结构体

  - 错误信息




Example:

``````````````yak
res, err := str.ParseStringToHTTPResponse("HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
``````````````


#### 定义

`ParseStringToHTTPResponse(res string) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `string` | HTTP 响应报文字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` | 解析出的 HTTP 响应结构体 |
| r2 | `error` | 错误信息 |


### ParseStringToHostPort

#### 详细描述
ParseStringToHostPort 尝试从字符串中解析出host和port，并与错误一起返回



参数:

  - raw: 形如 host:port 或 URL 的字符串



返回值:

  - host: 解析出的主机

  - port: 解析出的端口

  - err: 错误信息




Example:

``````````````yak
host, port, err = str.ParseStringToHostPort("127.0.0.1:8888") // host = "127.0.0.1", port = 8888, err = nil
host, port, err = str.ParseStringToHostPort("https://example.com") // host = "example.com", port = 443, err = nil
host, port, err = str.ParseStringToHostPort("Hello Yak") // host = "", port = 0, err = error("unknown port for [Hello Yak]")
``````````````


#### 定义

`ParseStringToHostPort(raw string) (host string, port int, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 形如 host:port 或 URL 的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| host | `string` | 解析出的主机 |
| port | `int` | 解析出的端口 |
| err | `error` | 错误信息 |


### ParseStringToHosts

#### 详细描述
ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号、换行分隔，并且会解析 CIDR 网段



参数:

  - raw: 主机字符串，支持逗号/换行分隔与 CIDR 网段



返回值:

  - 展开后的主机列表




Example:

``````````````yak
str.ParseStringToHosts("192.168.0.1/32,127.0.0.1") // ["192.168.0.1", "127.0.0.1"]
``````````````


#### 定义

`ParseStringToHosts(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 主机字符串，支持逗号/换行分隔与 CIDR 网段 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 展开后的主机列表 |


### ParseStringToLines

#### 详细描述
ParseStringToLines 将字符串按换行符(\n)分割成字符串数组，并去除BOM头和空行



参数:

  - raw: 原始多行字符串



返回值:

  - 去除 BOM 头与空行后的行字符串数组




Example:

``````````````yak
str.ParseStringToLines("Hello World\nHello Yak") // ["Hello World", "Hello Yak"]
``````````````


#### 定义

`ParseStringToLines(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 原始多行字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 去除 BOM 头与空行后的行字符串数组 |


### ParseStringToPorts

#### 详细描述
ParseStringToPorts 将字符串解析成 Port 列表， Port 可以以逗号分隔，并且会解析-分隔的范围



参数:

  - ports: 端口字符串，支持逗号分隔与短横线范围（如 &#34;80,443,1000-1010&#34;）



返回值:

  - 解析出的端口整数列表




Example:

``````````````yak
str.ParseStringToPorts("10086-10088,23333") // [10086, 10087, 10088, 23333]
``````````````


#### 定义

`ParseStringToPorts(ports string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` | 端口字符串，支持逗号分隔与短横线范围（如 &#34;80,443,1000-1010&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 解析出的端口整数列表 |


### ParseStringToUrls

#### 详细描述
ParseStringToUrls 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口



参数:

  - targets: 一个或多个目标字符串（IP、域名或 host:port）



返回值:

  - 补全协议与端口后的 URL 列表




Example:

``````````````yak
str.ParseStringToUrls("yaklang.com:443", "https://yaklang.io") // [https://yaklang.com, https://yaklang.io]
``````````````


#### 定义

`ParseStringToUrls(targets ...string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `...string` | 一个或多个目标字符串（IP、域名或 host:port） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 补全协议与端口后的 URL 列表 |


### ParseStringToUrlsWith3W

#### 详细描述
ParseStringToUrlsWith3W 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口，还会补全域名前的 www 前缀



参数:

  - sub: 一个或多个目标字符串（IP、域名或 host:port）



返回值:

  - 补全协议、端口与 www 前缀后的 URL 列表




Example:

``````````````yak
str.ParseStringToUrlsWith3W("yaklang.com:443", "https://yaklang.io") // [https://yaklang.com, https://www.yaklang.com, https://yaklang.io, https://www.yaklang.io]
``````````````


#### 定义

`ParseStringToUrlsWith3W(sub ...string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sub | `...string` | 一个或多个目标字符串（IP、域名或 host:port） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 补全协议、端口与 www 前缀后的 URL 列表 |


### ParseStringUrlToUrlInstance

#### 详细描述
ParseStringUrlToUrlInstance 将字符串 url 解析为 URL 结构体并返回错误



参数:

  - s: 原始 URL 字符串



返回值:

  - 解析后的 URL 实例

  - 错误信息




Example:

``````````````yak
str.ParseStringUrlToUrlInstance("https://yaklang.com/abc?a=1")
``````````````


#### 定义

`ParseStringUrlToUrlInstance(s string) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始 URL 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` | 解析后的 URL 实例 |
| r2 | `error` | 错误信息 |


### ParseStringUrlToWebsiteRootPath

#### 详细描述
ParseStringUrlToWebsiteRootPath 将字符串 url 解析为其根路径的URL



参数:

  - url: 原始 URL 字符串



返回值:

  - 仅保留根路径（去除路径与查询参数）后的 URL 字符串




Example:

``````````````yak
str.ParseStringUrlToWebsiteRootPath("https://yaklang.com/abc?a=1") // https://yaklang.com/
``````````````


#### 定义

`ParseStringUrlToWebsiteRootPath(url string) (newURL string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 原始 URL 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newURL | `string` | 仅保留根路径（去除路径与查询参数）后的 URL 字符串 |


### PathJoin

#### 详细描述
PathJoin 将传入的文件路径进行拼接并返回

参数:

  - elem: 任意数量的路径片段



返回值:

  - 用系统分隔符拼接后的路径




Example:

``````````````yak
// *nix 下使用 / 作为分隔符
p = str.PathJoin("/var", "www", "html")
println(p)   // OUT: /var/www/html
assert p == "/var/www/html", "PathJoin should join path segments"
``````````````


#### 定义

`PathJoin(elem ...string) (newPath string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| elem | `...string` | 任意数量的路径片段 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newPath | `string` | 用系统分隔符拼接后的路径 |


### Quote

#### 详细描述
Quote 给字符串 s 加上双引号并转义其中的特殊字符，返回 Go 语法风格的带引号字符串。

参数:

  - s: 原始字符串



返回值:

  - 带双引号并完成转义的字符串




Example:

``````````````yak
q = str.Quote("hello\nworld")
// 换行被转义为 \n，并加上首尾双引号
println(q)   // OUT: "hello\nworld"
assert q == "\"hello\\nworld\"", "Quote should escape special chars"
``````````````


#### 定义

`Quote(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 带双引号并完成转义的字符串 |


### RandSecret

#### 详细描述
RandSecret 返回在所有可见ascii字符表中随机挑选 n 个字符组成的密码字符串，这个密码经过str.IsStrongPassword验证，即为强密码



参数:

  - n: 生成密码的长度（应大于 8 以满足强密码要求）



返回值:

  - 满足强密码要求的随机字符串




Example:

``````````````yak
str.RandSecret(10)
``````````````


#### 定义

`RandSecret(n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 生成密码的长度（应大于 8 以满足强密码要求） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 满足强密码要求的随机字符串 |


### RandStr

#### 详细描述
RandStringBytes 返回在大小写字母表中随机挑选 n 个字符组成的字符串



参数:

  - n: 生成字符串的长度



返回值:

  - 随机字母组成的字符串




Example:

``````````````yak
str.RandStr(10)
``````````````


#### 定义

`RandStr(n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 生成字符串的长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 随机字母组成的字符串 |


### Random

#### 详细描述
RandomUpperAndLower 返回一个随机大小写的字符串

参数:

  - s: 原始字符串



返回值:

  - 随机切换字母大小写后的字符串（字母内容不变）




Example:

``````````````yak
out = str.RandomUpperAndLower("target")
// 仅大小写变化，小写化后应与原串相同
println(str.ToLower(out))   // OUT: target
assert str.ToLower(out) == "target", "RandomUpperAndLower should only flip letter case"
``````````````


#### 定义

`Random(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 随机切换字母大小写后的字符串（字母内容不变） |


### RandomUpperAndLower

#### 详细描述
RandomUpperAndLower 返回一个随机大小写的字符串

参数:

  - s: 原始字符串



返回值:

  - 随机切换字母大小写后的字符串（字母内容不变）




Example:

``````````````yak
out = str.RandomUpperAndLower("target")
// 仅大小写变化，小写化后应与原串相同
println(str.ToLower(out))   // OUT: target
assert str.ToLower(out) == "target", "RandomUpperAndLower should only flip letter case"
``````````````


#### 定义

`RandomUpperAndLower(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 随机切换字母大小写后的字符串（字母内容不变） |


### RegexpMatch

#### 详细描述
RegexpMatch 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false



参数:

  - pattern: 正则表达式

  - s: 待匹配的对象，会被转换为字符串



返回值:

  - 是否匹配成功




Example:

``````````````yak
str.RegexpMatch("^[a-z]+$", "abc") // true
``````````````


#### 定义

`RegexpMatch(pattern string, s any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 正则表达式 |
| s | `any` | 待匹配的对象，会被转换为字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否匹配成功 |


### RemoveDuplicatePorts

#### 详细描述
RemoveDuplicatePorts 解析两个字符串形式的端口列表，并使用布谷鸟过滤器进行去重。

这个函数首先创建一个布谷鸟过滤器，然后将两个输入字符串解析为端口列表。

接着，它遍历这两个列表，将每个端口添加到布谷鸟过滤器中，如果这个端口之前没有被添加过，

那么它也会被添加到结果列表中。最后，函数返回结果列表，其中包含两个输入字符串中的所有唯一端口。



参数:

  - ports1: 第一个端口列表字符串

  - ports2: 第二个端口列表字符串



返回值:

  - 两个端口列表合并去重后的端口整数列表




Example:

``````````````yak
RemoveDuplicatePorts("10086-10088,23333", "10086,10089,23333") // [10086, 10087, 10088, 23333, 10089]
``````````````


#### 定义

`RemoveDuplicatePorts(ports1 string, ports2 string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports1 | `string` | 第一个端口列表字符串 |
| ports2 | `string` | 第二个端口列表字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 两个端口列表合并去重后的端口整数列表 |


### RemoveRepeat

#### 详细描述
RemoveRepeat 移除字符串切片slc中的重复元素



参数:

  - slc: 原始字符串切片



返回值:

  - 去除重复元素后的字符串切片（保持原有顺序）




Example:

``````````````yak
str.RemoveRepeat(["hello", "yak", "hello"]) // ["hello", "yak"]
``````````````


#### 定义

`RemoveRepeat(slc []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slc | `[]string` | 原始字符串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 去除重复元素后的字符串切片（保持原有顺序） |


### RenderTemplate

#### 详细描述
RenderTemplate 使用 m 中的数据渲染模板字符串 i（基于 Go text/template 语法），渲染失败时返回原始模板。

参数:

  - i: 模板字符串，例如 &#34;hello {{ .name }}&#34;

  - m: 模板数据，通常是一个 map



返回值:

  - 渲染后的字符串（失败时回退为原模板内容）




Example:

``````````````yak
out = str.RenderTemplate("hello {{ .name }}", {"name": "yak"})
println(out)   // OUT: hello yak
assert out == "hello yak", "RenderTemplate should fill template variables"
``````````````


#### 定义

`RenderTemplate(i string, m any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 模板字符串，例如 &#34;hello {{ .name }}&#34; |
| m | `any` | 模板数据，通常是一个 map |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 渲染后的字符串（失败时回退为原模板内容） |


### Repeat

#### 详细描述
Repeat 返回将字符串s重复count次的字符串

参数:

  - s: 原始字符串

  - count: 重复次数



返回值:

  - 重复拼接后的字符串




Example:

``````````````yak
result = str.Repeat("hello", 3)
println(result)   // OUT: hellohellohello
assert result == "hellohellohello", "Repeat should repeat the string count times"
``````````````


#### 定义

`Repeat(s string, count int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| count | `int` | 重复次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 重复拼接后的字符串 |


### Replace

#### 详细描述
Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串

参数:

  - s: 原始字符串

  - old: 要被替换的子串

  - new: 替换成的子串

  - n: 最多替换的次数（-1 表示全部）



返回值:

  - 替换后的字符串




Example:

``````````````yak
result = str.Replace("hello yak", "l", "L", 1)
println(result)   // OUT: heLlo yak
assert result == "heLlo yak", "Replace should replace only the first n occurrences"
``````````````


#### 定义

`Replace(s string, old string, new string, n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| old | `string` | 要被替换的子串 |
| new | `string` | 替换成的子串 |
| n | `int` | 最多替换的次数（-1 表示全部） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 替换后的字符串 |


### ReplaceAll

#### 详细描述
ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串

参数:

  - s: 原始字符串

  - old: 要被替换的子串

  - new: 替换成的子串



返回值:

  - 替换全部匹配后的字符串




Example:

``````````````yak
result = str.ReplaceAll("hello yak", "yak", "yakit")
println(result)   // OUT: hello yakit
assert result == "hello yakit", "ReplaceAll should replace all occurrences"
``````````````


#### 定义

`ReplaceAll(s string, old string, new string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| old | `string` | 要被替换的子串 |
| new | `string` | 替换成的子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 替换全部匹配后的字符串 |


### ReplaceHTTPPacketBody

#### 详细描述
ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文

参数:

  - raw: 原始 HTTP 报文字节数组

  - body: 替换后的报文主体内容

  - chunk: 是否使用 chunked 传输编码



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.ReplaceBody(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, "hello yak", false)
``````````````


#### 定义

`ReplaceHTTPPacketBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |
| body | `[]byte` | 替换后的报文主体内容 |
| chunk | `bool` | 是否使用 chunked 传输编码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newHTTPRequest | `[]byte` | 修改后的 HTTP 报文字节数组 |


### ShrinkString

#### 详细描述
str.ShrinkString 将会把一个字符串压缩成一个设定一个长度下的较短的字符串

参数:

  - i: 输入内容，会被转换为字符串

  - size: 压缩后字符串的目标最大长度



返回值:

  - 压缩后的字符串，过长部分会用省略号替代




Example:

``````````````yak
result = str.ShrinkString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 20)
println(result)
/* output: aaaaaaaaaa...aaaaaaaaaa */
``````````````


#### 定义

`ShrinkString(i any, size int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 输入内容，会被转换为字符串 |
| size | `int` | 压缩后字符串的目标最大长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 压缩后的字符串，过长部分会用省略号替代 |


### Split

#### 详细描述
Split 将字符串s按照sep分割成字符串切片

参数:

  - s: 原始字符串

  - sep: 分隔符



返回值:

  - 分割后的字符串切片




Example:

``````````````yak
parts = str.Split("Hello Yak", " ")
println(parts)   // OUT: [Hello Yak]
assert len(parts) == 2, "Split should produce two parts"
assert parts[0] == "Hello" && parts[1] == "Yak", "Split should split by separator"
``````````````


#### 定义

`Split(s string, sep string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| sep | `string` | 分隔符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 分割后的字符串切片 |


### SplitAfter

#### 详细描述
SplitAfter 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep

参数:

  - s: 原始字符串

  - sep: 分隔符



返回值:

  - 分割后的字符串切片，每个元素保留结尾的分隔符




Example:

``````````````yak
parts = str.SplitAfter("Hello-Yak", "-")
println(parts)   // OUT: [Hello- Yak]
assert len(parts) == 2, "SplitAfter should produce two parts"
assert parts[0] == "Hello-" && parts[1] == "Yak", "SplitAfter keeps the separator at element tail"
``````````````


#### 定义

`SplitAfter(s string, sep string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| sep | `string` | 分隔符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 分割后的字符串切片，每个元素保留结尾的分隔符 |


### SplitAfterN

#### 详细描述
SplitAfterN 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep，最多分为n个元素

参数:

  - s: 原始字符串

  - sep: 分隔符

  - n: 最多分割出的元素个数



返回值:

  - 最多n个元素的字符串切片，每个元素保留结尾的分隔符




Example:

``````````````yak
parts = str.SplitAfterN("Hello-Yak-and-World", "-", 2)
println(parts)   // OUT: [Hello- Yak-and-World]
assert len(parts) == 2, "SplitAfterN should cap to n parts"
assert parts[0] == "Hello-" && parts[1] == "Yak-and-World", "SplitAfterN keeps separator and stops at n"
``````````````


#### 定义

`SplitAfterN(s string, sep string, n int) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| sep | `string` | 分隔符 |
| n | `int` | 最多分割出的元素个数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 最多n个元素的字符串切片，每个元素保留结尾的分隔符 |


### SplitAndTrim

#### 详细描述
SplitAndTrim 将字符串s按照sep分割成字符串切片，并且去除每个字符串的前后空白字符



参数:

  - Raw: 原始字符串

  - sep: 分隔符



返回值:

  - 分割并去除空白后的非空字符串切片




Example:

``````````````yak
str.SplitAndTrim(" hello yak ", " ") // ["hello", "yak"]
``````````````


#### 定义

`SplitAndTrim(Raw string, sep string) (targets []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| Raw | `string` | 原始字符串 |
| sep | `string` | 分隔符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| targets | `[]string` | 分割并去除空白后的非空字符串切片 |


### SplitHTTPHeadersAndBodyFromPacket

#### 详细描述
SplitHTTPHeadersAndBodyFromPacket 将传入的 HTTP 报文分割为 headers 和 body，如果传入了hook，则会在每次读取到一行 header 时调用 hook



参数:

  - raw: 原始 HTTP 报文字节

  - hook: 可选的逐行 header 回调函数



返回值:

  - headers: 报文头部字符串

  - body: 报文体字节




Example:

``````````````yak
headers, body = str.SplitHTTPHeadersAndBodyFromPacket(b"GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
``````````````


#### 定义

`SplitHTTPHeadersAndBodyFromPacket(raw []byte, hook ...func(line string)) (headers string, body []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 报文字节 |
| hook | `...func(line string)` | 可选的逐行 header 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `string` | 报文头部字符串 |
| body | `[]byte` | 报文体字节 |


### SplitHostsToPrivateAndPublic

#### 详细描述
SplitHostsToPrivateAndPublic 将 hosts 按照私有 IP 和公有 IP 分开



参数:

  - hosts: 一个或多个主机/IP 字符串



返回值:

  - privs: 私有 IP 列表

  - pub: 公有 IP 列表




Example:

``````````````yak
str.SplitHostsToPrivateAndPublic("127.0.0.1", "8.8.8.8", "10.0.0.1") // ["127.0.0.1", "10.0.0.1"], ["8.8.8.8"]
``````````````


#### 定义

`SplitHostsToPrivateAndPublic(hosts ...string) (privs []string, pub []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `...string` | 一个或多个主机/IP 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| privs | `[]string` | 私有 IP 列表 |
| pub | `[]string` | 公有 IP 列表 |


### SplitN

#### 详细描述
SplitN 将字符串s按照sep分割成字符串切片，最多分为n个元素

参数:

  - s: 原始字符串

  - sep: 分隔符

  - n: 最多分割出的元素个数



返回值:

  - 最多n个元素的字符串切片




Example:

``````````````yak
parts = str.SplitN("Hello-Yak-and-World", "-", 2)
println(parts)   // OUT: [Hello Yak-and-World]
assert len(parts) == 2, "SplitN should cap to n parts"
assert parts[0] == "Hello" && parts[1] == "Yak-and-World", "SplitN should stop splitting at n"
``````````````


#### 定义

`SplitN(s string, sep string, n int) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| sep | `string` | 分隔符 |
| n | `int` | 最多分割出的元素个数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 最多n个元素的字符串切片 |


### StartsWith

#### 详细描述
StartsWith / HasPrefix 判断字符串s是否以prefix开头

参数:

  - s: 原始字符串

  - prefix: 要判断的前缀



返回值:

  - 是否以该前缀开头




Example:

``````````````yak
ok = str.StartsWith("Hello Yak", "Hello")
println(ok)   // OUT: true
assert ok == true, "StartsWith should match prefix"
assert str.StartsWith("Hello Yak", "Yak") == false, "StartsWith should reject non-prefix"
``````````````


#### 定义

`StartsWith(s string, prefix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| prefix | `string` | 要判断的前缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否以该前缀开头 |


### StringContainsAnyOfSubString

#### 详细描述
StringContainsAnyOfSubString 判断字符串s中是否包含subs中的任意一个子串



参数:

  - s: 原始字符串

  - subs: 待匹配的子串切片



返回值:

  - 是否包含任意一个子串




Example:

``````````````yak
str.StringContainsAnyOfSubString("hello yak", ["yak", "world"]) // true
``````````````


#### 定义

`StringContainsAnyOfSubString(s string, subs []string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| subs | `[]string` | 待匹配的子串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否包含任意一个子串 |


### StringSliceContains

#### 详细描述
StringSliceContains 判断字符串切片s中是否包含raw，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含



参数:

  - s: 字符串切片（或可转换为字符串元素的切片）

  - raw: 待查找的字符串



返回值:

  - 切片中是否包含该字符串




Example:

``````````````yak
str.StringSliceContains(["hello", "yak"], "yak") // true
str.StringSliceContains([1, 2, 3], "4") // false
``````````````


#### 定义

`StringSliceContains(s any, raw string) (result bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `any` | 字符串切片（或可转换为字符串元素的切片） |
| raw | `string` | 待查找的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `bool` | 切片中是否包含该字符串 |


### StringSliceContainsAll

#### 详细描述
StringSliceContainsAll 判断字符串切片s中是否完全包含elements中的所有元素，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含



参数:

  - s: 字符串切片

  - elements: 待检查的一个或多个元素



返回值:

  - 切片是否包含所有给定元素




Example:

``````````````yak
str.StringSliceContainsAll(["hello", "yak"], "hello", "yak") // true
str.StringSliceContainsAll(["hello", "yak"], "hello", "yak", "world") // false
``````````````


#### 定义

`StringSliceContainsAll(s []string, elements ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]string` | 字符串切片 |
| elements | `...string` | 待检查的一个或多个元素 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 切片是否包含所有给定元素 |


### Subtract

#### 详细描述
Subtract 返回两个字符串切片的差集



参数:

  - x: 被减字符串切片

  - y: 要减去的字符串切片



返回值:

  - 存在于 x 但不存在于 y 的元素组成的切片




Example:

``````````````yak
str.Subtract(["1", "2", "3"], ["3", "4", "5"]) // ["1", "2"]
``````````````


#### 定义

`Subtract(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` | 被减字符串切片 |
| y | `[]string` | 要减去的字符串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 存在于 x 但不存在于 y 的元素组成的切片 |


### TextReaderSplit

#### 详细描述
TextReaderSplit 从 io.Reader 流式读取文本，并按分隔符与块大小递归切分，通过 channel 返回文本块

参数:
  - ctx: 上下文，可用于取消操作
  - reader: 提供文本数据的 io.Reader

返回值:
  - 一个不断产出文本块的 channel


Example:

``````````````yak
ch = str.TextReaderSplit(context.Background(), str.NewReader("段落一。段落二。"))
for chunk = range ch { println(chunk) }
``````````````


#### 定义

`TextReaderSplit(ctx context.Context, reader io.Reader) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，可用于取消操作 |
| reader | `io.Reader` | 提供文本数据的 io.Reader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | 一个不断产出文本块的 channel |


### TextSplit

#### 详细描述
TextSplit 将文本按照分隔符与块大小递归切分为多个文本块

参数:
  - ctx: 上下文，可用于取消操作
  - text: 待切分的文本

返回值:
  - 切分后的文本块列表


Example:

``````````````yak
chunks = str.TextSplit(context.Background(), "段落一。段落二。段落三。")
assert len(chunks) > 0, "TextSplit should produce chunks"
``````````````


#### 定义

`TextSplit(ctx context.Context, text string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，可用于取消操作 |
| text | `string` | 待切分的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 切分后的文本块列表 |


### Title

#### 详细描述
Title 返回字符串s的标题化版本，即所有单词的首字母都是大写的

参数:

  - s: 原始字符串



返回值:

  - 每个单词首字母大写后的字符串




Example:

``````````````yak
result = str.Title("hello yak")
println(result)   // OUT: Hello Yak
assert result == "Hello Yak", "Title should capitalize each word"
``````````````


#### 定义

`Title(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 每个单词首字母大写后的字符串 |


### ToJsonIndentStr

#### 详细描述
ToJsonIndentStr 将v转换为格式化的JSON字符串并返回，如果转换失败，则返回空字符串

参数:

  - d: 任意可序列化为 JSON 的对象



返回值:

  - 带缩进的 JSON 字符串，失败返回空字符串




Example:

``````````````yak
s = str.ToJsonIndentStr({"hello": "yak"})
// 输出为带缩进的多行 JSON，这里打印是否包含关键字段
println(str.Contains(s, "hello"))   // OUT: true
assert str.Contains(s, "hello") && str.Contains(s, "yak"), "ToJsonIndentStr should serialize keys and values"
``````````````


#### 定义

`ToJsonIndentStr(d any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `any` | 任意可序列化为 JSON 的对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 带缩进的 JSON 字符串，失败返回空字符串 |


### ToLower

#### 详细描述
ToLower 返回字符串s的小写形式

参数:

  - s: 原始字符串



返回值:

  - 全部转为小写后的字符串




Example:

``````````````yak
result = str.ToLower("HELLO YAK")
println(result)   // OUT: hello yak
assert result == "hello yak", "ToLower should lowercase all letters"
``````````````


#### 定义

`ToLower(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 全部转为小写后的字符串 |


### ToLowerSpecial

#### 详细描述
ToLowerSpecial 使用指定的字符大小写映射规则 c，把字符串 s 中的所有字符转换为小写。

参数:

  - c: 特殊大小写规则（如 unicode.TurkishCase）

  - s: 原始字符串



返回值:

  - 按指定规则转换为小写后的字符串




Example:

``````````````yak
out = str.ToLowerSpecial(unicode.TurkishCase, "ABC")
assert str.Contains(out, "a"), "ToLowerSpecial should lowercase with special case rules"
``````````````


#### 定义

`ToLowerSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` | 特殊大小写规则（如 unicode.TurkishCase） |
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 按指定规则转换为小写后的字符串 |


### ToStringSlice

#### 详细描述
ToStringSlice 将任意类型的数据转换为字符串切片



参数:

  - i: 任意类型的数据



返回值:

  - 转换得到的字符串切片




Example:

``````````````yak
str.ToStringSlice("hello") // ["hello"]
str.ToStringSlice([1, 2]) // ["1", "2"]
``````````````


#### 定义

`ToStringSlice(i any) (result []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意类型的数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `[]string` | 转换得到的字符串切片 |


### ToTitle

#### 详细描述
ToTitle 返回字符串s的标题化版本，其中所有Unicode字母都会被转换为其大写

参数:

  - s: 原始字符串



返回值:

  - 全部字母转为大写（Unicode title）后的字符串




Example:

``````````````yak
result = str.ToTitle("hello yak")
println(result)   // OUT: HELLO YAK
assert result == "HELLO YAK", "ToTitle should upper-case all letters"
``````````````


#### 定义

`ToTitle(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 全部字母转为大写（Unicode title）后的字符串 |


### ToTitleSpecial

#### 详细描述
ToTitleSpecial 使用指定的字符大小写映射规则 c，把字符串 s 中的所有字符转换为标题形式（Title Case）。

参数:

  - c: 特殊大小写规则（如 unicode.TurkishCase）

  - s: 原始字符串



返回值:

  - 按指定规则转换为标题形式后的字符串




Example:

``````````````yak
out = str.ToTitleSpecial(unicode.TurkishCase, "abc")
assert str.Contains(out, "A"), "ToTitleSpecial should title-case with special case rules"
``````````````


#### 定义

`ToTitleSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` | 特殊大小写规则（如 unicode.TurkishCase） |
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 按指定规则转换为标题形式后的字符串 |


### ToUpper

#### 详细描述
ToUpper 返回字符串s的大写形式

参数:

  - s: 原始字符串



返回值:

  - 全部转为大写后的字符串




Example:

``````````````yak
result = str.ToUpper("hello yak")
println(result)   // OUT: HELLO YAK
assert result == "HELLO YAK", "ToUpper should uppercase all letters"
``````````````


#### 定义

`ToUpper(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 全部转为大写后的字符串 |


### ToUpperSpecial

#### 详细描述
ToUpperSpecial 使用指定的字符大小写映射规则 c，把字符串 s 中的所有字符转换为大写。

参数:

  - c: 特殊大小写规则（如 unicode.TurkishCase）

  - s: 原始字符串



返回值:

  - 按指定规则转换为大写后的字符串




Example:

``````````````yak
out = str.ToUpperSpecial(unicode.TurkishCase, "abc")
assert str.Contains(out, "A"), "ToUpperSpecial should uppercase with special case rules"
``````````````


#### 定义

`ToUpperSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` | 特殊大小写规则（如 unicode.TurkishCase） |
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 按指定规则转换为大写后的字符串 |


### ToValidUTF8

#### 详细描述
ToValidUTF8 返回将字符串s中无效的UTF-8编码替换为replacement的字符串

参数:

  - s: 原始字符串

  - replacement: 无效 UTF-8 字节序列的替换串



返回值:

  - 修正后的合法 UTF-8 字符串




Example:

``````````````yak
result = str.ToValidUTF8("hello yak", "?")
println(result)   // OUT: hello yak
assert result == "hello yak", "ToValidUTF8 should keep valid input unchanged"
``````````````


#### 定义

`ToValidUTF8(s string, replacement string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| replacement | `string` | 无效 UTF-8 字节序列的替换串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 修正后的合法 UTF-8 字符串 |


### Trim

#### 详细描述
Trim 返回将字符串s两侧所有包含cutset字符串中的字符都去掉的字符串

参数:

  - s: 原始字符串

  - cutset: 要从两侧去除的字符集合



返回值:

  - 去除两侧字符后的字符串




Example:

``````````````yak
result = str.Trim("Hello Yak", "Hk")
println(result)   // OUT: ello Ya
assert result == "ello Ya", "Trim should trim chars in cutset from both sides"
``````````````


#### 定义

`Trim(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| cutset | `string` | 要从两侧去除的字符集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去除两侧字符后的字符串 |


### TrimLeft

#### 详细描述
TrimLeft 返回将字符串s左侧所有包含cutset字符串中的字符都去掉的字符串

参数:

  - s: 原始字符串

  - cutset: 要从左侧去除的字符集合



返回值:

  - 去除左侧字符后的字符串




Example:

``````````````yak
result = str.TrimLeft("Hello Yak", "H")
println(result)   // OUT: ello Yak
assert result == "ello Yak", "TrimLeft should trim leading chars in cutset"
``````````````


#### 定义

`TrimLeft(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| cutset | `string` | 要从左侧去除的字符集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去除左侧字符后的字符串 |


### TrimPrefix

#### 详细描述
TrimPrefix 返回将字符串s前缀prefix去掉的字符串

参数:

  - s: 原始字符串

  - prefix: 要去除的前缀



返回值:

  - 去除前缀后的字符串；若不以prefix开头则原样返回




Example:

``````````````yak
result = str.TrimPrefix("HelloYak", "Hello")
println(result)   // OUT: Yak
assert result == "Yak", "TrimPrefix should drop the prefix"
``````````````


#### 定义

`TrimPrefix(s string, prefix string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| prefix | `string` | 要去除的前缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去除前缀后的字符串；若不以prefix开头则原样返回 |


### TrimRight

#### 详细描述
TrimRight 返回将字符串s右侧所有包含cutset字符串中的字符都去掉的字符串

参数:

  - s: 原始字符串

  - cutset: 要从右侧去除的字符集合



返回值:

  - 去除右侧字符后的字符串




Example:

``````````````yak
result = str.TrimRight("Hello Yak", "k")
println(result)   // OUT: Hello Ya
assert result == "Hello Ya", "TrimRight should trim trailing chars in cutset"
``````````````


#### 定义

`TrimRight(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| cutset | `string` | 要从右侧去除的字符集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去除右侧字符后的字符串 |


### TrimSpace

#### 详细描述
TrimSpace 返回将字符串s两侧所有的空白字符都去掉的字符串

参数:

  - s: 原始字符串



返回值:

  - 去除两侧空白字符后的字符串




Example:

``````````````yak
result = str.TrimSpace(" \t\n Hello Yak \n\t\r\n")
println(result)   // OUT: Hello Yak
assert result == "Hello Yak", "TrimSpace should strip surrounding whitespace"
``````````````


#### 定义

`TrimSpace(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去除两侧空白字符后的字符串 |


### TrimSuffix

#### 详细描述
TrimSuffix 返回将字符串s后缀suffix去掉的字符串

参数:

  - s: 原始字符串

  - suffix: 要去除的后缀



返回值:

  - 去除后缀后的字符串；若不以suffix结尾则原样返回




Example:

``````````````yak
result = str.TrimSuffix("HelloYak", "Yak")
println(result)   // OUT: Hello
assert result == "Hello", "TrimSuffix should drop the suffix"
``````````````


#### 定义

`TrimSuffix(s string, suffix string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |
| suffix | `string` | 要去除的后缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去除后缀后的字符串；若不以suffix结尾则原样返回 |


### Unquote

#### 详细描述
Unquote 把一个带引号的字符串（双引号、单引号或反引号）还原为原始字符串，失败时返回错误。

参数:

  - s: 带引号的字符串



返回值:

  - 去除引号并反转义后的字符串

  - 错误信息




Example:

``````````````yak
raw = str.Unquote("\"hello\\nworld\"")~
assert raw == "hello\nworld", "Unquote should unescape quoted string"
``````````````


#### 定义

`Unquote(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 带引号的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 去除引号并反转义后的字符串 |
| r2 | `error` | 错误信息 |


### UrlJoin

#### 详细描述
UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误



参数:

  - origin: 基础 URL

  - paths: 一个或多个待拼接的路径片段



返回值:

  - newURL: 拼接后的新 URL

  - err: 错误信息




Example:

``````````````yak
newURL, err = str.UrlJoin("https://yaklang.com", "asd", "qwe") // newURL = "https://yaklang.com/asd/qwe", err = nil
newURL, err = str.UrlJoin("https://yaklang.com/zxc", "/asd", "qwe") // newURL = "https://yaklang.com/asd/qwe", err = nil
``````````````


#### 定义

`UrlJoin(origin string, paths ...string) (newURL string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` | 基础 URL |
| paths | `...string` | 一个或多个待拼接的路径片段 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newURL | `string` | 拼接后的新 URL |
| err | `error` | 错误信息 |


### VersionCompare

#### 详细描述
VersionCompare 泛用形的版本比较,传入(p1,p2 string), p1&gt;p2返回1,nil, p1&lt;p2返回-1,nil, p1==p2返回0,nil, 比较失败返回 -2,err



参数:

  - v1: 第一个版本号字符串

  - v2: 第二个版本号字符串



返回值:

  - 比较结果：v1&gt;v2 返回 1，v1&lt;v2 返回 -1，相等返回 0，比较失败返回 -2

  - 错误信息




Example:

``````````````yak
res, err = str.VersionCompare("1.2.0", "1.1.9") // res = 1
``````````````


#### 定义

`VersionCompare(v1 string, v2 string) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` | 第一个版本号字符串 |
| v2 | `string` | 第二个版本号字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 比较结果：v1&gt;v2 返回 1，v1&lt;v2 返回 -1，相等返回 0，比较失败返回 -2 |
| r2 | `error` | 错误信息 |


### VersionEqual

#### 详细描述
VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false



参数:

  - v1: 第一个版本号字符串

  - v2: 第二个版本号字符串



返回值:

  - v1 是否等于 v2




Example:

``````````````yak
str.VersionEqual("3.0", "3.0") // true
str.VersionEqual("3.0", "3.0a") // false
``````````````


#### 定义

`VersionEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` | 第一个版本号字符串 |
| v2 | `string` | 第二个版本号字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | v1 是否等于 v2 |


### VersionGreater

#### 详细描述
VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false



参数:

  - v1: 第一个版本号字符串

  - v2: 第二个版本号字符串



返回值:

  - v1 是否大于 v2




Example:

``````````````yak
str.VersionGreater("1.0.0", "0.9.9") // true
str.VersionGreater("3.0", "2.8.8alpha") // true
``````````````


#### 定义

`VersionGreater(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` | 第一个版本号字符串 |
| v2 | `string` | 第二个版本号字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | v1 是否大于 v2 |


### VersionGreaterEqual

#### 详细描述
VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false



参数:

  - v1: 第一个版本号字符串

  - v2: 第二个版本号字符串



返回值:

  - v1 是否大于等于 v2




Example:

``````````````yak
str.VersionGreaterEqual("1.0.0", "0.9.9") // true
str.VersionGreaterEqual("3.0", "3.0") // true
str.VersionGreaterEqual("3.0", "3.0a") // false
``````````````


#### 定义

`VersionGreaterEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` | 第一个版本号字符串 |
| v2 | `string` | 第二个版本号字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | v1 是否大于等于 v2 |


### VersionLess

#### 详细描述
VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false



参数:

  - v1: 第一个版本号字符串

  - v2: 第二个版本号字符串



返回值:

  - v1 是否小于 v2




Example:

``````````````yak
str.VersionLess("0.9.9", "1.0.0") // true
str.VersionLess("3.0", "3.0a") // true
``````````````


#### 定义

`VersionLess(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` | 第一个版本号字符串 |
| v2 | `string` | 第二个版本号字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | v1 是否小于 v2 |


### VersionLessEqual

#### 详细描述
VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false



参数:

  - v1: 第一个版本号字符串

  - v2: 第二个版本号字符串



返回值:

  - v1 是否小于等于 v2




Example:

``````````````yak
str.VersionLessEqual("0.9.9", "1.0.0") // true
str.VersionLessEqual("3.0", "3.0") // true
str.VersionLessEqual("3.0a", "3.0") // false
``````````````


#### 定义

`VersionLessEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` | 第一个版本号字符串 |
| v2 | `string` | 第二个版本号字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | v1 是否小于等于 v2 |


### f

#### 详细描述
f 用于对字符串进行格式化



参数:

  - f: 格式化模板字符串（使用 %s、%d 等占位符）

  - items: 填充到占位符的参数



返回值:

  - 格式化后的字符串




Example:

``````````````yak
str.f("hello %s", "yak") // hello yak
``````````````


#### 定义

`f(f string, items ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` | 格式化模板字符串（使用 %s、%d 等占位符） |
| items | `...any` | 填充到占位符的参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 格式化后的字符串 |


