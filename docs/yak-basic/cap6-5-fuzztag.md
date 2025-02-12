# 模糊文本渲染: FuzzTag

# 6.9 模糊文本渲染: FuzzTag

## 6.9.1 什么是FuzzTag

FuzzTag是yaklang内置的一种基于模糊文本生成引擎实现的tag语法，能够灵活地嵌入数据中，实现数据的模糊生成和数据加工。该特性可广泛应用于渗透测试中的fuzz测试过程。yaklang的模板字符串支持fuzztag语法的使用，可以方便的生成测试数据。

## 6.9.2 语法规则

一个合法的FuzzTag由标签边界、标签名、标签数据组成。如`{{int(1-10)}}`，其中`{{`和`}}`标志着标签的开始和结束，int是标签名，1-10是标签参数，在引擎工作时会将标签参数作为参数传递给标签函数，生成数据。int标签用以生成指定范围内的数字。

可以在Yak语言中使用模板字符串观察FuzzTag行为，如：

```Go
dump(x"{{int(1-10)}}")
```

输出：

```Go
([]string) (len=10 cap=10) {
 (string) (len=1) "1",
 (string) (len=1) "2",
 (string) (len=1) "3",
 (string) (len=1) "4",
 (string) (len=1) "5",
 (string) (len=1) "6",
 (string) (len=1) "7",
 (string) (len=1) "8",
 (string) (len=1) "9",
 (string) (len=2) "10"
}
```

示例中使用int标签，传递参数为1-10，生成结果为长度为10的string列表，其元素为string类型的1到10数字。示例中使用1-10作为标签参数，参数由标签函数自主解析，所以每个标签对标签数据格式有着不同的规范，但在设计上是易用性优先如`1-10`比`1,10`更直观。总体上标签参数遵循通用规范，对于多个参数通常是通过|对多个参数拼接构成标签参数。如int标签支持1到3个参数，三个参数含义分别是数字范围，数字长度,步长，其中数字范围是必选参数，数字长度默认为自动，步长默认为1。

测试代码：`fuzztag_test2.yak`

```Go
dump(x"{{int(7-13|2)}}")
dump(x"{{int(7-13|2|2)}}")
```

输出：

```Go
([]string) (len=7 cap=7) {
 (string) (len=2) "07",
 (string) (len=2) "08",
 (string) (len=2) "09",
 (string) (len=2) "10",
 (string) (len=2) "11",
 (string) (len=2) "12",
 (string) (len=2) "13"
}
([]string) (len=4 cap=4) {
 (string) (len=2) "07",
 (string) (len=2) "09",
 (string) (len=2) "11",
 (string) (len=2) "13"
}
```

## 6.9.4 数据嵌入

FuzzTag支持在数据中嵌入，在FuzzTag生成多个字符串时，默认会将每个字符串在原FuzzTag位置做替换，生成多条数据。

测试案例:fuzztag_test3.yak

```Go
dump(x"id={{int(1-5)}}")
```

输出：

```Go
([]string) (len=5 cap=5) {
 (string) (len=4) "id=1",
 (string) (len=4) "id=2",
 (string) (len=4) "id=3",
 (string) (len=4) "id=4",
 (string) (len=4) "id=5"
}
```

## 6.9.5 多标签渲染

如果一段数据中存在了多个FuzzTag，默认渲染行为是将多个FuzzTag的渲染结果进行笛卡尔乘积后嵌入数据中。笛卡尔乘积原理如图：

![img](/yak-basic/cap6-5-1.png)

测试案例:fuzztag_test3.yak

```Go
dump(x"id1={{int(1-2)}}&id2={{int(1-2)}}")
```

输出：

```Go
([]string) (len=4 cap=4) {
 (string) (len=11) "id1=1&id2=1",
 (string) (len=11) "id1=1&id2=2",
 (string) (len=11) "id1=2&id2=1",
 (string) (len=11) "id1=2&id2=2"
}
```

## 6.9.6 同步渲染

有些场景下多个标签之间存在对应关系，如在爆破账号时，字典的用户名列表为root、admin，密码列表为: root_123456、admin_000000，即用户名与密码存在一一对应的关系。这种场景下适合使用同步渲染语法：在两个需要一一对应的标签名后加上相同的label名，如{{int::number(1-3)}} {{int::number(1-3)}}，执行结果为: 11、22、33。

以用户名密码爆破为例（array标签用于将多个参数生成列表），fuzztag_test4.yak：

```Go
dump(x"user={{array::user_password(root|admin)}}&password={{array::user_password(root_123456|admin_000000)}}")
```

输出：

```Go
([]string) (len=2 cap=2) {
 (string) (len=30) "user=root&password=root_123456",
 (string) (len=32) "user=admin&password=admin_000000"
}
```

在一些特殊场景下，如密码需要使用base64编码，可能fuzz脚本为:

```Go
user={{array::user_password(root|admin)}}&password={{base64({{array::user_password(root_123456|admin_000000)}})}}
```

案例中的用户名和密码标签进行了同步，如图

![img](/yak-basic/cap6-5-2.png)

在实际渲染过程中是按照从左向右的顺序执行标签，在执行用户名标签后会检查与之同步的标签，案例中会检查到password标签，再对password标签进行执行，password标签执行后会将执行结果抛给外层base64标签继续执行，最后对所有生成结果按照文本顺序进行拼接，得到渲染结果。

如果将两个标签调换顺序，如：

```Go
password={{base64({{array::user_password(root_123456|admin_000000)}})}}&user={{array::user_password(root|admin)}}
```

![img](/yak-basic/cap6-5-3.png)

那么生成流程将变为base64标签先执行->调用子标签password->调用同步标签username,最后拼接为渲染结果。

上面两个案例看起来很合理，生成数据符合预期，但如果在更复杂场景，例如：

```Go
password={{array(aaa|{{array::user_password(root_123456|admin_000000)}})}}&user={{array::user_password(root|admin)}}
```

按照执行顺序，第一个array标签在执行时，会调用子标签生成root_123456、admin_000000，子标签生成参数aaa|root_123456、aaa|admin_000000，最后array标签生成数据为aaa、root_123456、aaa、admin_000000。所以与user标签同步渲染后的结果为

```Go
password=aaa&user=root
password=root_123456&user=root
password=aaa&user=root
password=admin_000000&user=root
password=aaa&user=admin
password=admin_000000&user=admin
password=aaa&user=admin
password=admin_000000&user=admin
```

如果再调换顺序为：

```Go
user={{array::user_password(root|admin)}}&password={{array(aaa|{{array::user_password(root_123456|admin_000000)}})}}
```

则生成结果变为了

```Go
user=root&password=aaa
user=admin&password=aaa
user=root&password=aaa
user=admin&password=aaa
user=root&password=admin_000000
user=admin&password=admin_000000
```

原因是第一次user标签执行时，通过同步调用了password标签，然后password标签将执行结果抛给外层array，生成了aaa、root_123456，但是user标签只与第一个aaa拼接，生成了`user=root&password=aaa`，第二次执行同理，直到第四次执行，password标签执行结束，但外层array标签缓存了上一次的执行结果`admin_000000`，最后拼接为`user=root&password=admin_000000`、`user=admin&password=admin_000000`。

## 6.9.7 常用标签与列表

前面案例介绍了int、array标签，它们都是用于数据生成，除了这类标签还有一类可以用于数据加工，如base64标签会对标签数据进行base64编码。如：{{base64(yaklang)}}，输出为：eWFrbGFuZw==。以下是全部标签介绍列表：

| 标签名                  | 标签别名                              | 标签描述                                                     |
| ----------------------- | ------------------------------------- | ------------------------------------------------------------ |
| array                   | list                                  | 设置一个数组，使用 &#124; 分割，例如：{{array(1&#124;2&#124;3)}}，结果为：[1,2,3]， |
| base64dec               | base64decode, base64d, b64d           | 进行 base64 解码，{{base64dec(YWJj)}} => abc                 |
| base64enc               | base64encode, base64e, base64, b64    | 进行 base64 编码，{{base64enc(abc)}} => YWJj                 |
| base64tohex             | b642h, base642hex                     | 把 Base64 字符串转换为 HEX 编码，{{base64tohex(YWJj)}} => 616263 |
| bmp                     |                                       | 生成一个 bmp 文件头，例如 {{bmp}}                            |
| char                    | c, ch                                 | 生成一个字符，例如：{{char(a-z)}}, 结果为 [a b c ... x y z]  |
| codec                   |                                       | 调用 Yakit Codec 插件                                        |
| codec:line              |                                       | 调用 Yakit Codec 插件，把结果解析成行                        |
| date                    |                                       | 生成一个时间，格式为YYYY-MM-dd，如果指定了格式，将按照指定的格式生成时间 |
| datetime                | time                                  | 生成一个时间，格式为YYYY-MM-dd HH:mm:ss，如果指定了格式，将按照指定的格式生成时间 |
| doubleurldec            | doubleurldecode, durldec, durldecode  | 双重URL解码，{{doubleurldec(%2561%2562%2563)}} => abc        |
| doubleurlenc            | doubleurlencode, durlenc, durl        | 双重URL编码，{{doubleurlenc(abc)}} => %2561%2562%2563        |
| file                    |                                       | 读取文件内容，可以支持多个文件，用竖线分割，{{file(/tmp/1.txt)}} 或 {{file(/tmp/1.txt&#124;/tmp/test.txt)}} |
| file:dir                | filedir                               | 解析文件夹，把文件夹中文件的内容读取出来，读取成数组返回，定义为 {{file:dir(/tmp/test)}} 或 {{file:dir(/tmp/test&#124;/tmp/1)}} |
| file:line               | fileline, file:lines                  | 解析文件名（可以用 &#124; 分割），把文件中的内容按行返回成数组，定义为 {{file:line(/tmp/test.txt)}} 或 {{file:line(/tmp/test.txt&#124;/tmp/1.txt)}} |
| fuzz:password           | fuzz:pass                             | 根据所输入的操作随机生成可能的密码（默认为 root/admin 生成） |
| fuzz:username           | fuzz:user                             | 根据所输入的操作随机生成可能的用户名（默认为 root/admin 生成） |
| gif                     |                                       | 生成 gif 文件头                                              |
| headerauth              |                                       | 用于java web回显payload执行时寻找特征请求                    |
| hexdec                  | hexd, hexdec, hexdecode               | HEX 解码，{{hexdec(616263)}} => abc                          |
| hexenc                  | hex, hexencode                        | HEX 编码，{{hexenc(abc)}} => 616263                          |
| hextobase64             | h2b64, hex2base64                     | 把 HEX 字符串转换为 base64 编码，{{hextobase64(616263)}} => YWJj |
| htmldec                 | htmldecode, htmlunescape              | HTML 解码，{{htmldec(abc)}} => abc                           |
| htmlenc                 | htmlencode, html, htmle, htmlescape   | HTML 实体编码，{{htmlenc(abc)}} => abc                       |
| htmlhexenc              | htmlhex, htmlhexencode, htmlhexescape | HTML 十六进制实体编码，{{htmlhexenc(abc)}} => abc            |
| ico                     |                                       | 生成一个 ico 文件头，例如 {{ico}}                            |
| int                     | port, ports, integer, i, p            | 生成一个整数以及范围，例如 {{int(1,2,3,4,5)}} 生成 1,2,3,4,5 中的一个整数，也可以使用 {{int(1-5)}} 生成 1-5 的整数，也可以使用 {{int(1-5&#124;4)}} 生成 1-5 的整数，但是每个整数都是 4 位数，例如 0001, 0002, 0003, 0004, 0005 |
| jpg                     | jpeg                                  | 生成 jpeg / jpg 文件头                                       |
| lower                   |                                       | 把传入的内容都设置成小写 {{lower(Abc)}} => abc               |
| md5                     |                                       | 进行 md5 编码，{{md5(abc)}} => 900150983cd24fb0d6963f7d28e17f72 |
| network                 | host, hosts, cidr, ip, net            | 生成一个网络地址，例如 {{network(192.168.1.1/24)}} 对应 cidr 192.168.1.1/24 所有地址，可以逗号分隔，例如 {{network(8.8.8.8,192.168.1.1/25,[example.com](http://example.com))}} |
| null                    | nullbyte                              | 生成一个空字节，如果指定了数量，将生成指定数量的空字节 {{null(5)}} 表示生成 5 个空字节 |
| padding:null            | nullpadding, np                       | 使用 \x00 来填充补偿字符串长度不足的问题，{{nullpadding(abc\|5)}} 表示将 abc 填充到长度为 5 的字符串（\x00\x00abc），{{nullpadding(abc\|-5)}} 表示将 abc 填充到长度为 5 的字符串，并且在右边填充 (abc\x00\x00) |
| padding:zero            | zeropadding, zp                       | 使用0来填充补偿字符串长度不足的问题，{{zeropadding(abc\|5)}} 表示将 abc 填充到长度为 5 的字符串（00abc），{{zeropadding(abc\|-5)}} 表示将 abc 填充到长度为 5 的字符串，并且在右边填充 (abc00) |
| payload                 | x                                     | 从数据库加载 Payload, {{payload(pass_top25)}}                |
| png                     |                                       | 生成 PNG 文件头                                              |
| punctuation             | punc                                  | 生成所有标点符号                                             |
| quote                   |                                       | strconv.Quote 转化                                           |
| randint                 | ri, rand:int, randi                   | 随机生成整数，定义为 {{randint(10)}} 生成0-10中任意一个随机数，{{randint(1,50)}} 生成 1-50 任意一个随机数，{{randint(1,50,10)}} 生成 1-50 任意一个随机数，重复 10 次 |
| randomupper             | random:upper, random:lower            | 随机大小写，{{randomupper(abc)}} => aBc                      |
| randstr                 | rand:str, rs, rands                   | 随机生成个字符串，定义为 {{randstr(10)}} 生成长度为 10 的随机字符串，{{randstr(1,30)}} 生成长度为 1-30 为随机字符串，{{randstr(1,30,10)}} 生成 10 个随机字符串，长度为 1-30 |
| rangechar               | range:char, range                     | 按顺序生成一个 range 字符集，例如 {{rangechar(20,7e)}} 生成 0x20 - 0x7e 的字符集 |
| regen                   | re                                    | 使用正则生成所有可能的字符                                   |
| repeat                  |                                       | 重复一个字符串，例如：{{repeat(abc&#124;3)}}，结果为：abcabcabc |
| repeat:range            |                                       | 重复一个字符串，并把重复步骤全都输出出来，例如：{{repeat(abc&#124;3)}}，结果为：['' abc abcabc abcabcabc] |
| repeatstr               | repeat:str                            | 重复字符串，{{repeatstr(abc&#124;3)}} => abcabcabc           |
| sha1                    |                                       | 进行 sha1 编码，{{sha1(abc)}} => a9993e364706816aba3e25717850c26c9cd0d89d |
| sha224                  |                                       | 进行 sha224 编码，{{sha224(abc)}} => 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7 |
| sha256                  |                                       | 进行 sha256 编码，{{sha256(abc)}} => ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad |
| sha384                  |                                       | 进行 sha384 编码，{{sha384(abc)}} => cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |
| sha512                  |                                       | 进行 sha512 编码，{{sha512(abc)}} => ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f |
| sm3                     |                                       | 计算 sm3 哈希值，{{sm3(abc)}} => 66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a3f0b8ddb27d8a7eb3 |
| tiff                    |                                       | 生成一个 tiff 文件头，例如 {{tiff}}                          |
| timestamp               |                                       | 生成一个时间戳，默认单位为秒，可指定单位：s, ms, ns: {{timestamp(s)}} |
| trim                    |                                       | 去除字符串两边的空格，一般配合其他 tag 使用，如：{{trim({{x(dict)}})}} |
| unquote                 |                                       | 把内容进行 strconv.Unquote 转化                              |
| upper                   |                                       | 把传入的内容变成大写 {{upper(abc)}} => ABC                   |
| urldec                  | urldecode, urld                       | URL 强制解码，{{urldec(%61%62%63)}} => abc                   |
| urlenc                  | urlencode, url                        | URL 强制编码，{{urlenc(abc)}} => %61%62%63                   |
| urlescape               | urlesc                                | url 编码(只编码特殊字符)，{{urlescape(abc=)}} => abc%3d      |
| uuid                    |                                       | 生成一个随机的uuid，如果指定了数量，将生成指定数量的uuid     |
| yso:bodyexec            |                                       | 尽力使用 class body exec 的方式生成多个链                    |
| yso:dnslog              |                                       | 生成多个可以触发dnslog的payload，一般用于爆破利用链          |
| yso:exec                |                                       | 生成所有命令执行的payload                                    |
| yso:find_gadget_by_bomb |                                       | 使用一个复杂的序列化对象作为payload，由于反序列化耗时较长，可以用来验证反序列化漏洞，可以用于寻找gadget |
| yso:find_gadget_by_dns  |                                       | 使用dnslog外带目标环境的class信息                            |
| yso:headerecho          |                                       | 尽力使用 header echo 生成多个链                              |
| yso:urldns              |                                       | 使用transform触发指定域名的dns查询，用于验证反序列化漏洞     |