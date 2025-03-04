#  使用规则管理新功能，进行新年的第一场代码审计！   
原创 Yak  Yak Project   2025-01-02 17:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
大家好，这里是上二休一的超级开心牛  
  
![](/articles/wechat2md-07e0331bde864646e79458f6fbb4e246.png)  
  
先祝大家2025新年快乐！  
  
  
新年新气象，YAK的新功能大家都用过了吗？  
  
来，试试看⬇️  
  
![](/articles/wechat2md-15188eeeaf0c79d60b92b341f1486886.other)  
  
![](/articles/wechat2md-87bed022cea10e2f623911cf357bf60b.png)  
  
![](/articles/wechat2md-87d2062736c750c295cfea92af0e377e.png)  
  
以下为该功能的大致一览。  
  
![](/articles/wechat2md-39462bc8fc476cf1c212f538e47870a2.png)  
  
该模块可以分为两个部分，组别为规则的组管理，右边为规则的详细信息。  
  
![](/articles/wechat2md-884c81c06c77048b6b3d032340c27b8b.png)  
  
**组**  
除了方便管理规则外，主要作用是**在代码扫描中会按组选取规则进行扫描**  
  
![](/articles/wechat2md-ecf8ef08ccd317d5af6eb4e00fe262f6.png)  
  
目前有内置一些基础的组，也可根据自己需求新建规则组。  
  
**右侧规则详细信息**  
中，包含着许多  
需要我们在创建规则的时候填写的信息。  
  
可能有些师傅已经熟悉如何使用Yak在命令行下创建规则了，而使用Yakit创建规则会有一些区别。接下来将为大家介绍规则的创建、调试以及相关的管理。  
  
![](/articles/wechat2md-f42d0fb31aaddc22271fa7c626463762.png)  
  
创建规则功能的按钮在右上角，如图:  
  
![](/articles/wechat2md-6fd1997bd84b52bab9ccccbacc93b532.png)  
  
![](/articles/wechat2md-a861b4176e02fc17380c455193c6e3b0.png)  
  
![](/articles/wechat2md-43ef255f1090fbef3a9d6511b1320b93.png)  
  
一个完整的规则一般包含三个部分：规则描述、规则内容和规则输出。  
  
如图:  
  
![](/articles/wechat2md-81db05aead00a22218496dfa41cd8eab.png)  
#### 规则描述  
  
规则描述对于一个规则是必要的，它能够表示一个规则的目的、漏洞等级、已经审计出的漏洞类型或者是CVE编号等信息。它由Desc语句中的键值对表示，一些有效的内置键值对如下: 

| **描述字段**                                                 | **简介**                                                     | **示例**                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------------------- |
| title                                                        | 规则的标题。                                                 | title: "Check Direct Path Travel Vulnerability For Java" |
| title_zh                                                     | 规则的中文标题。                                             | title_zh: "检测Java直接路径穿越漏洞",                    |
| type \| purpose                                              | 规则的目的，包括:漏洞、审计、配置、安全热点。                | type: vuln,                                              |
| description \| desc \| note                                  | 规则的介绍，主要简要介绍该规则的作用。dscription一般使用heredoc语言，以便具备足够强的文本表述能力。 | desc: <<<TEXT跨站脚本攻击（XSS）是一种常见的......TEXT,  |
| level \| severity \| sev                                     | 风险等级，用来描述该规则审计到的漏洞的风险。包括：关键、高危、中危、低危、信息。 | level:high,                                              |
| cve                                                          | CVE编号，如果该规则用于审计CVE漏洞，那么可以填写该内容。     | cve:"CVE-2024-22234",                                    |
| risk \| risk_type                                            | 风险类型。用来描述规则审计漏洞的风险类型，比如:SQL注入、XSS、命令执行等。 | risk:"rce",                                              |
| lib \| allow_include \| as_library \| as_lib \| library_name | 作为被导入的规则的名称。写了这个字段后，那么该规则就允许被其它规则调用。 | lib: "java-command-exec-sink",                           |

值得一提的是，使用Yakit创建规则，则无须指定title和descritor。规则默认使用规则名称作为title,使用左边的描述输入的内容作为descriptor。因而我们创建规则的时候，要着重去填  
**type、level与risk**。  
<<<<<<< HEAD
- **type**  
  
type描述了规则的类型，更确切的讲，是规则的目的，也就是这个规则是用来干什么的。我们将规则分为四种类型，包括：漏洞、审计、配置、安全。如果规则没有指定type，那么默认为审计规则。  
<table><colgroup><col width="242"/><col width="294"/><col width="334"/></colgroup><tbody><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;word-break: break-all;" align="left" valign="middle"><p><strong>规则类型</strong></p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p><strong>介绍</strong></p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p><strong>示例</strong></p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>漏洞规则</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>漏洞规则目的专注于寻找代码中的安全漏洞。这可能包括但不限于SQL注入、跨站脚本攻击(XSS)、缓冲区溢出等。漏洞检查的目的是确保代码在部署前没有已知的安全缺陷，从而减少被攻击的风险。</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>type:vuln,</p><p>type:v,</p><p>type:vulnerability,</p><p>type:weak,</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>审计规则</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>审计规则是指对代码进行安全检查和评估，目的是发现潜在的安全问题或不良的编程实践。相较于漏洞规则而言，审计规则并不一定意味着发现了实际的漏洞，但它可以指出可能需要进一步调查或改进的区域。</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>type:audit,</p><p>type:a,</p><p>type:audition,</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>配置规则</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>配置规则目的关注于代码的配置部分，包括但不限于配置文件、环境变量、数据库设置等。配置检查的目的是确保配置项设置得当，不会导致安全漏洞或系统不稳定。</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>type:config,</p><p>type:c,</p><p>type:configuration</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>安全规则</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>安全规则，更精确的讲，应该叫安全热点规则。这个规则相较于漏洞规则更为广泛，它不仅包括寻找代码中的安全漏洞，还包括检查代码的整体安全架构、访问控制、加密措施、身份验证机制等。</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle"><p>type:security,</p><p>type:s,</p><p>type:secure,</p></td></tr></tbody></table>  
- level  
=======
- **type**
type描述了规则的类型，更确切的讲，是规则的目的，也就是这个规则是用来干什么的。我们将规则分为四种类型，包括：漏洞、审计、配置、安全。如果规则没有指定type，那么默认为审计规则。

  | **规则类型** | **介绍**                                                     | **示例**                                       |
  | ------------ | ------------------------------------------------------------ | ---------------------------------------------- |
  | 漏洞规则     | 漏洞规则目的专注于寻找代码中的安全漏洞。这可能包括但不限于SQL注入、跨站脚本攻击(XSS)、缓冲区溢出等。漏洞检查的目的是确保代码在部署前没有已知的安全缺陷，从而减少被攻击的风险。 | type:vuln,type:v,type:vulnerability,type:weak, |
  | 审计规则     | 审计规则是指对代码进行安全检查和评估，目的是发现潜在的安全问题或不良的编程实践。相较于漏洞规则而言，审计规则并不一定意味着发现了实际的漏洞，但它可以指出可能需要进一步调查或改进的区域。 | type:audit,type:a,type:audition,               |
  | 配置规则     | 配置规则目的关注于代码的配置部分，包括但不限于配置文件、环境变量、数据库设置等。配置检查的目的是确保配置项设置得当，不会导致安全漏洞或系统不稳定。 | type:config,type:c,type:configuration          |
  | 安全规则     | 安全规则，更精确的讲，应该叫安全热点规则。这个规则相较于漏洞规则更为广泛，它不仅包括寻找代码中的安全漏洞，还包括检查代码的整体安全架构、访问控制、加密措施、身份验证机制等。 | type:security,type:s,type:secure,              |
- **level**  
>>>>>>> f4538a210d3a0684bb752d3a4648d7bd062fbac4
  
level描述了漏洞的风险等级。风险等级包括:超危,高危，中危，低危和信息。不过这只是从宏观上进行分类，在实践中，你可以使用多种关键字用来表述level。  

| **风险等级** | **示例**                    |
| ------------ | --------------------------- |
| 关键         | level:critical,level:fatal, |
| 高危         | level:high,level:error,     |
| 中危         | level:warning,level:middle, |
| 低位         | level:low,                  |
| 信息         | level:info,                 |
可能你会有疑惑，作为一个规则，只能填写一个固定的level吗？答案显然是否定的，因为level不同于type，决定最后level等级的一定是最后审计出来的结果。举个例子，有一个规则是用来审计命令执行漏洞的，如果确实存在这个漏洞，那么这个漏洞等级确实是高危。但是如果到命令执行的数据流中存在过滤函数，那么其风险等级可能就降到了低危。  
  
所以，作为开头描述信息的level只是起到了一个“兜底”的作用，当审计出的结果没有level的时候，就默认使用这个level。关于审计结果如何修改level，将会在下面的alert语法进行介绍。  
- **Risk**  
  
risk为风险类型，它同level一样，最后的risk也是依赖于alert语法。  
  
一些risk如下：  
<<<<<<< HEAD
<table><colgroup><col width="200"/><col width="200"/></colgroup><tbody><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;word-break: break-all;" align="left" valign="middle" width="266.3333333333333"><p><strong>risk关键字</strong></p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="277"><p><strong>含义</strong></p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>url-redirect</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="287"><p>URL重定向</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>sqli,</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="290"><p>SQL注入</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>xss</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>XSS</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>rce, rce-command</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>命令执行/注入</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>rce-code</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>代码执行/注入</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>lfi, file-read, file-download</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>文件包含/读取/下载</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>file-write, file-upload</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>文件写入/上传</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>xxe</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>XML外部实体攻击</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>unserialize, deserialization</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>反序列化</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>path-traversal</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>路径遍历</p></td></tr><tr style="height:39px;"><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="266.3333333333333"><p>...</p></td><td colspan="1" rowspan="1" style="border-color: rgb(222, 224, 227);font-size: 10pt;padding: 8px;vertical-align: top;" align="left" valign="middle" width="291"><p>...</p></td></tr></tbody></table>  

#### 规则内容    
=======

| **risk关键字**                | **含义**           |
| ----------------------------- | ------------------ |
| url-redirect                  | URL重定向          |
| sqli,                         | SQL注入            |
| xss                           | XSS                |
| rce, rce-command              | 命令执行/注入      |
| rce-code                      | 代码执行/注入      |
| lfi, file-read, file-download | 文件包含/读取/下载 |
| file-write, file-upload       | 文件写入/上传      |
| xxe                           | XML外部实体攻击    |
| unserialize, deserialization  | 反序列化           |
| path-traversal                | 路径遍历           |
| ...                           | ...                |
#### 规则内容  
>>>>>>> f4538a210d3a0684bb752d3a4648d7bd062fbac4
  
规则的内容由一堆审计语句组成，不同类型的规则内容的写法都有一定的范式。现在可以通过规则管理功能查看现在拥有的内置规则是如何写的。关于这块内容，我们后续也会写一篇文章，分享不同类型内置规则的常见写法。  
#### 规则输出  
  
使用check语法根据审计语句的结果来断言和输出相应的信息，或者通过 alert 来告诉报告生成器需要重点关注的或者有漏洞的变量信息。  
  
其中alert语法会修正规则描述的level和risk。  
  
以下面这个路径穿越漏洞规则为例:

```
desc(
    title: "Check Path Travel Vulnerability For Java",
    title_zh: "检测Java路径穿越漏洞",
    type: vuln,
    level: mid,
    risk: "path-traversal",
    desc: <<<TEXT
路径穿越漏洞（也称为目录遍历漏洞）允许攻击者通过操纵输入参数，访问或执行服务器上的任意文件。在Java应用中，这种漏洞通常出现在未对用户输入进行适当验证或清理的情况下，导致攻击者可以读取敏感文件或执行任意代码。为了防范这种漏洞，应严格验证和清理所有用户输入，确保它们仅指向预期的文件或目录。
TEXT
)

<include('java-spring-param')> as $source;
<include('java-servlet-param')> as $source;
<include('java-write-filename-sink')> as  $sink;
<include('java-read-filename-sink')> as  $sink;
<include('java-filename_filter')> as  $filter;

check $source;
check $sink;
check $filter;

$sink #{
    until:`<self> & $source`,
    exclude:`<self>?{opcode:call}?{!<self> & $source}?{!<self> & $sink}`
}->as $high;

alert $high for {
    message: "检测到直接路径穿越漏洞。",
    level: high,
};

$sink #{
    until:`<self> & $source`,
    exclude:`<self>?{opcode: call && <self><getCaller> & $filter}`
}->as $low;

alert $low for {
    message: "检测到路径穿越漏洞，但是数据流上有过滤函数。",
    level: low,
};
```
  
规则描述的默认level为mid,但是当规则检测到路径穿越漏洞的数据流从source到sink中间没有任何过滤的时候，alert语法将level修正为high；当检测到数据流有filter的时候，将level修正为low。因此规则具体的level只有在具体运行时才能知道。  
  
![](/articles/wechat2md-98054c0d8247731b18a6c6e068a8b900.png)  
  
现在，在创建完规则后，可以直接选择项目进行规则调试。如下图：  
  
![](/articles/wechat2md-daae1a8511d8e581cea875a76dc37e17.png)  
  
但是，调试功能还可以有更好的效果。目前只能够调试规则,在未来，也将会支持规则和项目能够在同一个页面修改的调试，就避免了对项目进行重新编译。  
  
![](/articles/wechat2md-118ec6e31ab1db10ee9bf04c504a7131.png)  
  
现在支持对规则进行分组，更加方便的管理规则。值得一提的是，对于每个规则，在创建的时候会进行默认分组。默认的分组为语言、规则类型与默认漏洞等级。如图：  
  
![](/articles/wechat2md-75392ff9bbb07cc7c5586abe915e3384.png)  
  
![](/articles/wechat2md-46b34471ae8699da842fdd510409b81f.png)  
  
新的代码审计规则管理功能已经上线，现在编写一条SyntaxFlow规则更为方便!同时，编写规则的时候务需准确填写规则的描述信息，因为引擎会根据描述信息自动生成规则的默认分组。也欢迎各位社区的伙伴去编写SyntaxFlow规则，并反馈你遇到的问题！  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit   
视频教程：  
https://space.bilibili.com/437503777  
Github下载地址：  
https://github.com/yaklang/yakit  
Yakit官网下载地址：  
https://yaklang.com/  
Yakit安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ 
  
![](/articles/wechat2md-382b711760574d429c6c8742ecfc1d9b.png)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
  
