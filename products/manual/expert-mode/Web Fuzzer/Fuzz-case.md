---
sidebar_position: 21
---

# Fuzz标签与编码标签实际案例

### 1 基本账号/密码Fuzz
方式一：payload模块里面，选择需求的字典，复制Fuzz标签，粘贴到你所需要fuzz的参数处，payload模块的字典可以自行上传保存等操作，payload模块可以理解为一个字典库。

![](/img/products/yakit/fuzz-25.png)

可以看见发送了所有payload数据包。
或者直接插入模糊测试字典标签

![](/img/products/yakit/fuzz-26.png)


![](/img/products/yakit/fuzz-27.png)

方式二：通过{{file:ine(字典路径)}}读取字典Fuzz。如：
插入文件标签

![](/img/products/yakit/fuzz-28.png)

{{file:line(C:\Users\22835\yakit-projects\fuzzDicts-master\userNameDict\top300_lastname.txt)}}

![](/img/products/yakit/fuzz-29.png)

右侧可以看见请求结果。点开高级配置，还可以设置爆破的并发线程数、代理、随机延迟，对于爆破结果的筛选，可以通过正则、状态码、关键词匹配对响应包进行过滤，并且支持正则提取响应数据。

![](/img/products/yakit/fuzz-30.png)

### 2 短信验证码类型Fuzz
常见验证码类型4位无规则数字，或者6位无规则数字
4位数验证码：{{int(0000-9999|4)}}

![](/img/products/yakit/fuzz-31.png)

随机4位数验证码最小0000最大9999 枚举200次 有效4位：{{randint(0000,9999,200|4)}}

![](/img/products/yakit/fuzz-32.png)

6位数验证码：{{int(000000-999999|6)}}

![](/img/products/yakit/fuzz-33.png)

随机6位数验证码最小000000最大999999 枚举200次 有效6位：{{randint(000000,999999,200|6)}}

![](/img/products/yakit/fuzz-34.png)

### 3  学号/工号/手机号类型Fuzz
手机号Fuzz：手机号组成结构（3位网号+4位HLR号+4位的个人代码）
网号固定，HLR和个人代码递归枚举：{{int(133,153,180)}}{{int(0000-9999|4)}}{{int(0000-9999|4)}}

![](/img/products/yakit/fuzz-35.png)

网号固定，HLR和个人代码随机枚举：
{{int(133,153,180)}}{{randint(0000,9999,100|4)}}{{randint(0000,9999,100|4)}}

![](/img/products/yakit/fuzz-36.png)

学号/工号Fuzz：学号/工号组成结构（入学年份+三位系别代码+两位专业代码+三位学生编号）
{{int(2015-2023)}}{{int(000-999|3)}}{{int(00-99|2)}}{{int(000-999|3)}}
同理也可也用{{rangint()}}随机生成几位数值组成相关代码

![](/img/products/yakit/fuzz-37.png)

### 4 MD5 Fuzz
{{md5({{int(000-999|3)}})}}
000-999的3位数MD5加密枚举Fuzz：{{md5({{int(000-999|3)}})}}

![](/img/products/yakit/fuzz-38.png)

嵌套字典MD5加密枚举Fuzz：{{md5({{x(user_top10)}})}}

![](/img/products/yakit/fuzz-39.png)

### 5 Base64 Fuzz
000-999的3位数base64加密枚举Fuzz：{{base64enc({{int(000-999|3)}})}}

![](/img/products/yakit/fuzz-40.png)

嵌套字典base64加密枚举Fuzz：{{base64enc({{x(user_top10)}})}}

![](/img/products/yakit/fuzz-41.png)

### 6  路径/目录 Fuzz
Grafana任意文件读取文列：点击payload模块把payload新增在仓库字典中。

![](/img/products/yakit/fuzz-42.png)

复制fuzz标签

![](/img/products/yakit/fuzz-42.png)

或者直接插入文件标签 按行读取。

![](/img/products/yakit/fuzz-44.png)

payload发送成功，可以看见效果如下。

![](/img/products/yakit/fuzz-45.png)


![](/img/products/yakit/fuzz-46.png)

同时目录字典可以千变万化也可以利用{{file}}标签来加载Fuzz。

### 7 重定向并发 Fuzz
渗透测试需求中可能会对某些需求重复发包，或重复生成数据。repeat重复产生空字符串，例如：{{repeat(3)}}，结果为：["", "", ""] 一般用来重复发包，或重复生成数据
重复发送100次数据包：{{repeat(100)}}

![](/img/products/yakit/fuzz-47.png)


![](/img/products/yakit/fuzz-48.png)

### 8 host碰撞 Fuzz
Web Fuzzer 默认请求的是 Request 请求包中的 Host ，除此外也可以在 “高级配置” 中设置 “请求 Host”。
Host 碰撞时请求 Host 与请求包的 Host 不一致，所以需要在 “高级配置” 中指定目标 Host。
如图，指定 Host ，使用外部字典碰撞 Host。

![](/img/products/yakit/fuzz-49.png)

比如我们发现某一漏洞POC 需要批量测试多个目标是否存在漏洞则可以在Host处设置Fuzz标签。
比如在内网中批量测试是否存在Grafana任意文件读取漏洞：
{{host(192.168.3.14/24)}}:{{port(3000)}}：可以看见192.168.3.160:3000存在漏洞。

![](/img/products/yakit/fuzz-50.png)


![](/img/products/yakit/fuzz-51.png)

### 9 反序列化链 Fuzz
新增标签：yso:find_gadget_by_dns、yso:find_gadget_by_bomb，这两个标签可用于探测 Gadget，方便大家进行反序列化漏洞的利用链的探测。
FIND_GADGET_BY_DNS
yso:find_gadget_by_dns(domain)标签用于 dns出网的利用链探测，使用时只需填写一个 dnslog的域名即可，如yso:find_gadget_by_dns(test.dnstunnel.run)。
原理简单来说就是通过URLDNS这条链探测一个Class，通过一些特有的Class来判断是否存在对应的利用链。
FIND_GADGET_BY_BOMB
yso:find_gadget_by_bomb(className)标签可用于不出网的利用链探测，使用时可以使用内置的all参数，all参数会使用一份内置的Class<->Gadget对应表进行探测。
当然也可以手动输入需要探测的Class
如yso:find_gadget_by_bomb(java.util.HashMap)。
原理简单来说就是通过构造反序列化炸弹消耗服务器性能，达到类似sleep(10000)的效果，通过判断响应时间来判断探测的Class是否存在。
测试环境
vulhub中的JBoss 4.x JBossMQ JMS 反序列化漏洞（CVE-2017-7504）
1.使用 yso:find_gadget_by_dns(domain)探测利用链

![](/img/products/yakit/fuzz-52.png)

查看dnslog

![](/img/products/yakit/fuzz-53.png)

从dnslog的返回结果，对比版本号可以很方便的看出。
存在CommonsCollections1/3/5/6/7、CommonsBeanutils2链，同时还探测出了目标的操作系统为linux。
我们再使用Yso-Java-Hack模块进行确认，如下选择CommonsCollections5生成payload进行测试。

![](/img/products/yakit/fuzz-54.png)

发送payload

![](/img/products/yakit/fuzz-55.png)

检查结果，dnslog收到请求，执行成功，结果符合预期。

![](/img/products/yakit/fuzz-56.png)

2.使用 yso:find_gadget_by_bomb(className)探测利用链
构造如下数据包Fuzz yso:find_gadget_by_bomb(all)

![](/img/products/yakit/fuzz-57.png)

通过对响应时间的排序可以发现，其中的几个数据包响应明显不同，同时查看Payload字段发现和yso:find_gadget_by_dns探测结果一致。
自定义检测Class，如java.util.HashMap，该类存在，因此响应时间较长。

![](/img/products/yakit/fuzz-58.png)

检测一个不存在的Class，如java.util.HashMapxx，该类不存在，因此响应正常。

![](/img/products/yakit/fuzz-59.png)

_**ps：探测出来的利用链并非均可利用，如某些利用链有 Jdk 版本要求。**_