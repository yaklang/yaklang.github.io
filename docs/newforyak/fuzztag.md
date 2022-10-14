---
sidebar_position: 10
---

# Fuzz Tag Playbook

## 单体可用 Fuzztag 速览

|标签名|标签别名|标签描述|
|:-------|:-------|:-------|
|`char`|`c, ch`|生成一个字符，例如：`{{char(a-z)}}`, 结果为 [a b c ... x y z]|
|`repeat`|  |重复一个字符串，例如：<code>{{repeat(abc&#124;3)}}</code>，结果为：abcabcabc|
|`payload`|`x`|从数据库加载 Payload, `{{payload(pass_top25)}}`|
|`array`|`list`|设置一个数组，使用 `&#124;` 分割，例如：<code>{{array(1&#124;2&#124;3)}}</code>，结果为：[1,2,3]，|
|`ico`|  |生成一个 ico 文件头，例如 `{{ico}}`|
|`tiff`|  |生成一个 tiff 文件头，例如 `{{tiff}}`|
|`bmp`|  |生成一个 bmp 文件头，例如 {{bmp}}|
|`gif`|  |生成 gif 文件头|
|`png`|  |生成 PNG 文件头|
|`jpg`|`jpeg`|生成 jpeg / jpg 文件头|
|`punctuation`|`punc`|生成所有标点符号|
|`rangechar`|`range:char, range`|按顺序生成一个 range 字符集，例如 `{{rangechar(20,7e)}}` 生成 0x20 - 0x7e 的字符集|
|`network`|`host, hosts, cidr, ip, net`|生成一个网络地址，例如 `{{network(192.168.1.1/24)}}` 对应 cidr 192.168.1.1/24 所有地址，可以逗号分隔，例如 `{{network(8.8.8.8,192.168.1.1/25,example.com)}}`|
|`int`|`port, ports, integer, i, p`|生成一个整数以及范围，例如 {{int(1,2,3,4,5)}} 生成 1,2,3,4,5 中的一个整数，也可以使用 {{int(1-5)}} 生成 1-5 的整数，也可以使用 <code>{{int(1-5&#124;4)}}</code> 生成 1-5 的整数，但是每个整数都是 4 位数，例如 0001, 0002, 0003, 0004, 0005|
|`randint`|`ri, rand:int, randi`|随机生成整数，定义为 {{randint(10)}} 生成0-10中任意一个随机数，{{randint(1,50)}} 生成 1-50 任意一个随机数，{{randint(1,50,10)}} 生成 1-50 任意一个随机数，重复 10 次|
|`randstr`|`rand:str, rs, rands`|随机生成个字符串，定义为 {{randstr(10)}} 生成长度为 10 的随机字符串，{{randstr(1,30)}} 生成长度为 1-30 为随机字符串，{{randstr(1,30,10)}} 生成 10 个随机字符串，长度为 1-30|
|`file:line`|`fileline, file:lines`|解析文件名（可以用 <code>&#124;</code> 分割），把文件中的内容按行反回成数组，定义为 `{{file:line(/tmp/test.txt)}}` 或 <code>{{file:line(/tmp/test.txt&#124;/tmp/1.txt)}}</code>|
|`file:dir`|`filedir`|解析文件夹，把文件夹中文件的内容读取出来，读取成数组返回，定义为 `{{file:dir(/tmp/test)}}` 或 <code>{{file:dir(/tmp/test&#124;/tmp/1)}}</code>|
|`file`|  |读取文件内容，可以支持多个文件，用竖线分割，`{{file(/tmp/1.txt)}}` 或 <code>{{file(/tmp/1.txt&#124;/tmp/test.txt)}}</code>|
|`codec`|  |调用 Yakit Codec 插件|
|`codec:line`|  |调用 Yakit Codec 插件，把结果解析成行|
|`unquote`|  |把内容进行 strconv.Unquote 转化|
|`quote`|  |strconv.Quote 转化|
|`lower`|  |把传入的内容都设置成小写 {{lower(Abc)}} => abc|
|`upper`|  |把传入的内容变成大写 {{upper(abc)}} => ABC|
|`base64enc`|`base64encode, base64e, base64, b64`|进行 base64 编码，<code>{{base64enc(abc)}}</code> => YWJj|
|`base64dec`|`base64decode, base64d, b64d`|进行 base64 解码，<code>{{base64dec(YWJj)}}</code> => abc|
|`md5`|  |进行 md5 编码，<code>{{md5(abc)}}</code> => 900150983cd24fb0d6963f7d28e17f72|
|`hexenc`|`hex, hexencode`|HEX 编码，<code>{{hexenc(abc)}}</code> => 616263|
|`hexdec`|`hexd, hexdec, hexdecode`|HEX 解码，<code>{{hexdec(616263)}}</code> => abc|
|`sha1`|  |进行 sha1 编码，<code>{{sha1(abc)}}</code> => a9993e364706816aba3e25717850c26c9cd0d89d|
|`sha256`|  |进行 sha256 编码，<code>{{sha256(abc)}}</code> => ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad|
|`sha224`|  ||
|`sha512`|  |进行 sha512 编码，<code>{{sha512(abc)}}</code> => ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f|
|`sha384`|  ||
|`sm3`|  |计算 sm3 哈希值，<code>{{sm3(abc)}}</code> => 66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a3f0b8ddb27d8a7eb3|
|`hextobase64`|`h2b64, hex2base64`|把 HEX 字符串转换为 base64 编码，`{{hextobase64(616263)}}` => YWJj|
|`base64tohex`|`b642h, base642hex`|把 Base64 字符串转换为 HEX 编码，`{{base64tohex(YWJj)}}` => 616263|
|`urlescape`|`urlesc`|url 编码(只编码特殊字符)，`{{urlescape(abc=)}}` => abc%3d|
|`urlenc`|`urlencode, url`|URL 强制编码，`{{urlenc(abc)}}` => %61%62%63|
|`urldec`|`urldecode, urld`|URL 强制解码，`{{urldec(%61%62%63)}}` => abc|
|`doubleurlenc`|`doubleurlencode, durlenc, durl`|双重URL编码，`{{doubleurlenc(abc)}}` => %2561%2562%2563|
|`doubleurldec`|`doubleurldecode, durldec, durldecode`|双重URL解码，`{{doubleurldec(%2561%2562%2563)}}` => abc|
|`htmlenc`|`htmlencode, html, htmle, htmlescape`|HTML 实体编码，`{{htmlenc(abc)}}` => &#97;&#98;&#99;|
|`htmlhexenc`|`htmlhex, htmlhexencode, htmlhexescape`|HTML 十六进制实体编码，`{{htmlhexenc(abc)}}` => &#x61;&#x62;&#x63;|
|`htmldec`|`htmldecode, htmlunescape`|HTML 解码，`{{htmldec(&#97;&#98;&#99;)}}` => abc|
|`repeatstr`|`repeat:str`|重复字符串，<code>{{repeatstr(abc&#124;3)}}</code> => abcabcabc|
|`randomupper`|`random:upper, random:lower`|随机大小写，{{randomupper(abc)}} => aBc|

