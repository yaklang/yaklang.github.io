#  RDP协议探索   
z3r0ne  Yak Project   2024-06-27 17:38  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
![](/articles/wechat2md-af01ed67eafbc4494460e0f9c2c0ddcc.other)  
  
  
“yak的rdp爆破用的是第三方库，经常出各种问题，干脆自己实现一遍吧”  
  
  
  
# **RDP协议**   
远程桌面协议（RDP）：基本连接和图形远程协助用户与远程计算机系统进行交互，通过将图形显示数据从远程计算机传输到用户端，以及将用户的输入命令从用户传输到远程计算机，其中用户的输入命令在远程计算机上被重播。RDP还提供了一个可扩展的传输机制，允许用户计算机上的组件与远程计算机上运行的组件之间进行专门的通信。  
  
  
## **前置知识点**   
RDP协议的实现基于了一些底层协议，这些协议在不同层面上起到不同的作用，了解这些协议有助于理解RDP。  
  
### **TPKT：传输层协议数据单元协议**  
  
TPKT(传输层协议数据单元协议)：由于TCP是一个没有明确边界的数据流，所以提出了TPKT协议，TPKT协议封装了一个包头和一个TPDU（传输层协议数据单元）。  
  
![](/articles/wechat2md-55324d9d99160915d21b9467f3c6f2d0.png)  
  
### **X.224：会话协议**  
  
它也被称为ISO 8073协议，是一个会话层协议，可以用于链接的建立，管理、数据交换、心跳检测等等，下面是一个X.224报文的结构，其中第一个结构LI指Length Indicator，就是报文长度，占一个字节  
  
![](/articles/wechat2md-d77665cdd2744476133dbd5e6e79f29e.png)  
  
  
### **RDP交互分析**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
如下是一次完整的RDP协议的交互过程  
  
![](/articles/wechat2md-a4572b0a4b8e63dd3deb213a02e0ce11.png)  
  
整个流程大概包括：连接协商，基础信息交换，channel连接....    
###  **认证分析**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  

在开始连接之前需要发出Connection Request PDU，服务端响应Connection Response PDU，在这个阶段主要传递一些认证信息，如协商认证方式、cookie(用于负载均衡，现已弃用)等，接下来再根据协商的认证方式开始认证。  
  
在开始认证前需要协商认证方式，如下是 Connection Request PDU结构  
  
![](/articles/wechat2md-3a0f8056a2141770dc7d027eefcf3e5d.png)  
  
tpktHeader就是tpkt头，  
  
x224Crq的长度为7字节，它是一个基于X.224协议的Class Option为0的连接请求TPDU  
  
接下来是routingToken或cookie，两个皆为可选项，但不能同时存在  
  
然后是固定长度的rdpNegReq和rdpCorrelationInfo  
  
总结下就是使用TPKT传输一个X.224协议报文，X.224中储存了cookie、rdpNegReq等信息。  
  
X.224协议的格式定义中，允许一个Variable part和一个User Data，但Data field的长度为固定的8位，而在文档定义中长度指示器的范围是到Variable part，也就是微软的rdp请求中的X.224协议是缺少了一个Data field的。  
  
![](/articles/wechat2md-a4990b77b2cc62e5a4c9e6a1b2244657.png)  
  

## **RDP_NEG_REQ**  
  
  
如下是协商请求的结构，其中requestedProtocols字段表明了客户端支持的协议  
  
![](/articles/wechat2md-5159086244b9225b2de71b63c9b8ed1c.png)  
  
## **RDP_NEG_RSP**  
  
  
在响应报文中选择了一种认证方式，接下来可以使用服务端支持的方式来认证。如下是所有的认证方式。  
  
![](/articles/wechat2md-33d9f6269db23726dfdb3caa849f0ace.png)  
  
## **SSPI：安全支持提供接口**  

SSPI 允许应用程序在不更改安全系统接口的情况下使用计算机或网络上可用的各种安全模型。微软提供了下面这些SSP实现  
- Credential Security Support Provider（CredSSP）  
  
- Microsoft Negotiate  (协商)  
  
- Microsoft NTLM  
  
- Microsoft Kerberos  
  
- Microsoft Digest SSP (HTTP 认证)  
  
- Secure Channel (安全通道)  
  
RDP认证过程可以使用Microsoft Negotiate  
协商认证方式，并采用对应的方式认证（RDP协议只支持上述的Credential Security Support Provider）  
  
  
## **CredSSP： 凭证安全支持提供**
  
如下是一个完整的认证过程  
![](/articles/wechat2md-c52d0218a13dadde0bcbfbf08dbfe586.png)  
  
值得注意的是最后一个用户凭证发送过去后认证过程就结束了，不知道是否认证成功，所以RDP才有了HYBRID_EX认证方式（在CredSSP基础上，返回一个4字节的flag： 成功/失败）  
  
CredSSP支持NTLM和Kerberos认证  
  
  
## **NTLM认证**   
先了解下什么是NTLM:
NTLM(NT LAN Manager)的前身是LM(LAN Manager)，他们都是一种hash算法，相较于LM，NTLM（也被称为NT）的安全度更高。  
在windows中一般不会储存明文密码，用户密码将会以NTLM的形式存在，当需要认证时会通过NTLM计算出一个新的NetNTLM，用于网络中传输。因为hash不可逆的特性，通过在网络中使用NetNTLM传输而不是NTLM传输可以保证NTLM不被泄漏，同样的Windows使用NTLM生成NetNTLM而不是原文密码，可以防止密码原文被泄漏。  
NTLM认证有三个流程：协商、挑战、认证，一个通俗的理解是：  
![](/articles/wechat2md-85b1c7f05d83c8bec060474c2c9f12aa.gif)  
  
### **协商**   
客户端：我支持md5、des加密  
服务端：你这几种加密安全度有点低，但也行吧 / 安全度太低，拒绝认证  
### **挑战**  
服务端：给一个随机字符串，用你的密码加密，如果你的加密结果和我的一样，就给你通过  
### **认证** 
客户端：加密好了，给你看看（这里生成的就是NetNTLM）  
整个认证过程对应的Message结构有：NEGOTIATE_MESSAGE、CHALLENGE_MESSAGE、AUTHENTICATE_MESSAGE  
通过yak项目内的bin-parser模块编写协议解析脚本如下：  
  
![](/articles/wechat2md-ff994d8c4d6b91ab8d2d2a2a6dca214d.png)  
## **NTLMv2算法定义**  
如下是官方对NTLMv2 hash计算的定义  
  
![](/articles/wechat2md-1c512935511879648a7fe78203437f34.png)  
  
https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/5e550938-91d4-459f-b67d-75d70009e3f3  
  
下面翻译一下  
  
### **NT算法**  
  
  
使用密码的unicode编码对大写用户名和域名的拼接的unicode的编码进行hmacmd5计算，如  
  
HMAC_MD5( MD4(UNICODE(Passwd)), UNICODE(ConcatenationOf( Uppercase(User), UserDom ) ) )  
### **LM算法** 
同NT算法  
### **NetLM算法**  
NetLM的计算是通过lm对serverChallenge和clientChallenge进行hmacmd5计算，再拼接个clientChallenge（客户端生成随机数），如下：  
hmacmd5(lm,serverChallenge+clientChallenge)+clientChallenge  
clientChallenge的作用是可以让每次生成的NetLM不同   
### **NetNT算法**  
与NetLM类似，不过将clientChallenge从随机数改为了ConcatenationOf(Responserversion, HiResponserversion,  Z(6), Time, ClientChallenge, Z(4), ServerName, Z(4))，可以携带更多信息，如时间戳， 可以验证响应时长。  
## **Kerberos认证**  
Kerberos认证过程中的三个主题有客户端、服务端、KDC  
下面是Kerberos认证的流程  
![](/articles/wechat2md-2dc65d9152ae6812f493ac6fb94bdd0c.png)  
  
在认证时，客户端先向KDC认证并获取到Ticket，使用Ticket就可以访问服务端了。  
  
客户端获取Ticket过程有两步，第一步向AS做身份验证，第二步向TGS申请Ticket。  
  
上面的认证过程中需要解决信任问题，如客户端怎么验证KDC，TGS怎么验证TGT有效性等等。  
  
他们之前主要通过NTLM Hash建立信任，首先KDC有所有机器的NTLM Hash，那么使用对方机器的NTLM Hash加密通信就可以建立信任关系。在KDC中还分为AS和TGS，TGS通过krbtgt Hash建立信任关系  
  
![](/articles/wechat2md-eb1628e5f1bdb723f216f1613ddae477.png)  
  
  
所以如果获得了krbtgt的ntlm hash就可以随意签发tgt（黄金票据），由TGS生成目标机器的Ticket。  
  
server的ntlm hash可以用来签发ticket（白银票据）  
  
  
# **总结**  
现在yak已经支持HYBRID、HYBRID_EX认证方式。  
  
  
**参考**  
  
  
https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdpbcgr/5073f4ed-1e93-45e1-b039-6e30c385867c  
  
T-REC-X.224-199511-I!!PDF-E.pdf  
  
https://datatracker.ietf.org/doc/html/rfc2126#page-15  
  
https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/033d32cc-88f9-4483-9bf2-b273055038ce  
  
https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/9664994d-0784-4659-b85b-83b8d54c2336  
  
https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/b38c36ed-2804-4868-a9ff-8dd3182128e4  
  
  
  
  
**END**  
**YAK官方资源**  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit   
视频教程：  
https://space.bilibili.com/437503777Github  
下载地址：  
https://github.com/yaklang/yakitYakit  
官网下载地址：  
https://yaklang.com/Yakit  
安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-85062b6e6c63b9d9d17d1e2a5ca2ec01.other)  
长按识别添加工作人员
开启Yakit进阶之旅  
![](/articles/wechat2md-14665f86963c7c123b43378ebc55bb0f.other)
  
  
  
