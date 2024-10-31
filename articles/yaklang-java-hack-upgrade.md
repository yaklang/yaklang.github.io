#  Yak Java-Hack TemplatesImpl 升级
原创 Yak  Yak Project   2024-10-25 17:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
Yaklang里传来，Java-hack升级啦~  
  
隔壁抽鞭子的黑工厂里，牛牛更新了吗~?  
  
![](/articles/wechat2md-1a81b255d0eb25ee0b3db6ccbde33174.png)  
  
![](/articles/wechat2md-64ccd1a8cfa82e7bce38332e033ef4d5.png)  
  
![](/articles/wechat2md-87e553ed4974193fff8083e554f8e32b.png)  
#   
  
**TemplatesImpl 类：**  
TemplatesImpl对象的成员方法有一段类字节码，在反序列化时会加载并实例化这个类。通过构造序列化链使得成功反序列化**包含恶意类的 TemplatesImpl 对象**，从而实现任意代码执行的效果。  
  
**Transformer 类：**  
Transformer 是一个接口，其成员只有一个 transform 方法，参数和返回值都是 Object 类型，用于将一个对象按照某种规则转换为另一个对象。**通过实现类 InvokerTransformer**可以实现对任意对象方法的调用，再通过 ChainedTransformer 可以将多个 Transformer 串联，实现类似链式调用的操作。  
  
通过对比两种方式可以看出，基于TemplatesImpl 类构造的链可以通过修改TemplatesImpl 对象内的字节码，也就是恶意class实现各种功能。而Transformer链需要构造多个Transformer对象实现。  
  
![](/articles/wechat2md-77b69f169364d34e396f0d68bfcd8711.png)  
#   
  
java在序列化一个对象时，会先递归处理成员对象，再序列化这个对象，但在递归过程可能会遇到循环引用的问题，例如：  
```
Object node1 = new Node();
Object node2 = new Node();
node1.Parent = node2;
node2.Child = node1;
```  
  
在序列化node1的时候会先序列化成员Parent，开始序列化对象node2这时又会开始序列化成员Child，开始序列化对象node1......，为了防止递归过程中出现循环引用，每个对象第一次序列化时会生成一个handle值（从0x7e0000开始计数，依次递增），后面再遇到这个对象直接用handle值代替。而且不仅对象有handle，类也有handle，也就是每个类的描述也只会出现一次。  
  
![](/articles/wechat2md-e70b6b7b0d73faab8078d942fd252d9f.png)  
#   
  
所以如果简单的对序列化数据中的对象进行替换，会导致handle table错乱（例如同一个class在不同的序列化数据中的handle值不同）  
  
一种解决方案是在序列化一个模板对象时，把handle table提出来，再在序列化其它transform 链之前把handle table赋值进去，这样就能保证两次序列化中，相同class的handle值相同。另一种办法就是对于一些关键类，即使重复出现也不使用handle值，但这样可能导致序列化数据体积变大。最稳妥的办法就是对替换对象的handle table重构。  
  
最后一个简单的办法就是把所有transform 链都生成，再压缩，压缩后发现可能压缩算法会对这种高度相似的数据采取类似引用数据块的办法，使得压缩率特别高。  
  
![](/articles/wechat2md-7f2f4748f83184e7ad25bb40a9d747fe.png)  
#   
  
加入transform链后，链子数量骤然增多，有些链子还需要搭建jdk环境，显然增加了测试的成本，所以需要写个自动化的测试。也就是需要编写一个java程序作为靶场，这个靶场需要包含所有payload的运行环境。  
  
![](/articles/wechat2md-e77ae6bfdc6d3378d3d11efb338fda12.png)  
##   
  
由于payload涉及的依赖较多，不能一个个手工导入。而ysoserial.jar既然可以生成payload，那必然包含所有payload的依赖，所以可以将ysoserial.jar作为靶场依赖。  
  
![](/articles/wechat2md-357a23024ce02e3214400df28e711d38.png)  
##   
  
ysoserial.jar在生成CB链183版本的时候是用的192版本的BeanComparator，在构造时将serialVersionUID修改为183版本的。所以靶场中是不存在183版本BeanComparator类的，导致CB183链子失败。而同一个类名不能在默认的class loader中加载多次，所以没法添加183的依赖。解决方法是通过agent，根据不同payload加载不同的BeanComparator类，见下文。  
  
![](/articles/wechat2md-34ed7ac6c5f977ba4460b4576281819e.png)  
##   
  
Jdk7u21和jdk8u20的**jre依赖版本不同**。通过报错信息可以找到问题主要在sun.reflect.annotation.AnnotationInvocationHandler类的更新上，也就是这两条链需要不同版本的AnnotationInvocationHandler类，问题与上面类似。  
  
![](/articles/wechat2md-b6e11d6d9c460e6a667593dabe694bad.png)  
##   
  
javaagent可以拦截类加载过程，可以在类加载时修改或直接替换类。所以可以使用agent实现对不同的gadget加载不同的class。  
  
Java agent的入口函数是premain，会被传入命令行参数和Instrumentation对象  
```
public static void premain(String args,   Instrumentation instrumentation){
    ClassLoggerTransformer transformer   = new ClassLoggerTransformer(args);
      instrumentation.addTransformer(transformer);
   }
```  
  
通过Instrumentation对象可以设置一些类加载的过程，例如案例中addTransformer，追加了一个ClassLoggerTransformer对象，ClassLoggerTransformer对象实现了transform方法，在加载一个类前会把类信息传给transform方法，返回值是经过处理后的类，用于替换原有类。  
```
public byte[] transform(ClassLoader   loader,
                        String   className,
                        Class<?>   classBeingRedefined,
                          ProtectionDomain protectionDomain,
                        byte[] classfileBuffer) throws   IllegalClassFormatException {
    return xxx                        
   }
```  
  
所以可以在transform中拦截类加载过程，将指定类替换为当前payload需要的版本。  
  
![](/articles/wechat2md-372b0d5b222de3dd694f4c414cf77ae1.png)  
#   
  
被templateImpl加载的类需要继承AbstractTranslet接口，实现transform方法。为了解决这个限制，我让templateImpl加载一个类前先加载一个loader（实现了AbstractTranslet接口），再让loader加载目标类。但这个loader就是压倒header的最后一根稻草，导致gadget过大。执行流程如下：  
  
![](/articles/wechat2md-9b8129aadef4d0d1acbcff926b822fd0.png)  
  
为了去掉实现AbstractTranslet接口的限制，又不影响payload大小，可以尝试直接改类的属性，修改class文件，给class增加一个父接口而不实现接口。  
  
测试时发现报错，原因是默认构造函数必须调用supper()或this()方法，之前测试类aa没有显示声明父类，默认父类是java.lang.Object。也就是还需要将java.lang.Object.init 方法的调用改为com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet.init 调用  
  
![](/articles/wechat2md-ccc6c779a88af5ac70310c179547240e.png)  
  
最终成功实例化测试类，得到dnslog回显，反编译后的源码如图  
  
![](/articles/wechat2md-90ab8bd12486daa406cde2c598656f3f.png)  
  
![](/articles/wechat2md-dba49271ce3ba112432e5f27f19fc93e.png)  
#   
  
本文通过 Java Agent 拦截和修改类加载机制，构建了一个 Java 靶场，用于验证和测试各种反序列化 payload。然而，对于更复杂的 Web 环境中的回显测试，仍然需要搭建实际环境进行验证。  
  
文章最后介绍了一个手动修改 class 文件以添加父类的案例，展示了如何在继承抽象类时不实现其所有抽象方法。这证明了 "在继承抽象类时必须实现所有抽象方法" 的规定是在编译期间检测的，而 JVM 在运行时并未对此进行验证（至少在 HotSpot VM 中没有验证）。  
  
  
**END**  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit 视频教程：  
https://space.bilibili.com/437503777Github下载地址：  
https://github.com/yaklang/yakitYakit官网下载地址：  
https://yaklang.com/Yakit安装文档：  
https://yaklang.com/products/download_and_installYakit使用文档：  
https://yaklang.com/products/intro/常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-382b711760574d429c6c8742ecfc1d9b.png)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
  
  
  
