# yso

|成员函数|函数描述/介绍|
|:------|:--------|
| [yso.GenerateClassObjectFromBytes](#GenerateClassObjectFromBytes) ||
| [yso.GenerateDNSlogEvilClassObject](#GenerateDNSlogEvilClassObject) |dnslog生成|
| [yso.GenerateHeaderEchoClassObject](#GenerateHeaderEchoClassObject) ||
| [yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject](#GenerateModifyTomcatMaxHeaderSizeEvilClassObject) ||
| [yso.GenerateMultiEchoClassObject](#GenerateMultiEchoClassObject) ||
| [yso.GenerateProcessBuilderExecEvilClassObject](#GenerateProcessBuilderExecEvilClassObject) ||
| [yso.GenerateProcessImplExecEvilClassObject](#GenerateProcessImplExecEvilClassObject) ||
| [yso.GenerateRuntimeExecEvilClassObject](#GenerateRuntimeExecEvilClassObject) ||
| [yso.GenerateSleepClassObject](#GenerateSleepClassObject) ||
| [yso.GenerateSpringEchoEvilClassObject](#GenerateSpringEchoEvilClassObject) |spring生成|
| [yso.GenerateTcpReverseEvilClassObject](#GenerateTcpReverseEvilClassObject) ||
| [yso.GenerateTcpReverseShellEvilClassObject](#GenerateTcpReverseShellEvilClassObject) ||
| [yso.GenerateTomcatEchoClassObject](#GenerateTomcatEchoClassObject) ||
| [yso.GetAllGadget](#GetAllGadget) ||
| [yso.GetAllRuntimeExecGadget](#GetAllRuntimeExecGadget) ||
| [yso.GetAllTemplatesGadget](#GetAllTemplatesGadget) ||
| [yso.GetBeanShell1JavaObject](#GetBeanShell1JavaObject) ||
| [yso.GetClick1JavaObject](#GetClick1JavaObject) ||
| [yso.GetCommonsBeanutils183NOCCJavaObject](#GetCommonsBeanutils183NOCCJavaObject) ||
| [yso.GetCommonsBeanutils192NOCCJavaObject](#GetCommonsBeanutils192NOCCJavaObject) ||
| [yso.GetCommonsBeanutils1JavaObject](#GetCommonsBeanutils1JavaObject) ||
| [yso.GetCommonsCollections1JavaObject](#GetCommonsCollections1JavaObject) ||
| [yso.GetCommonsCollections2JavaObject](#GetCommonsCollections2JavaObject) ||
| [yso.GetCommonsCollections3JavaObject](#GetCommonsCollections3JavaObject) ||
| [yso.GetCommonsCollections4JavaObject](#GetCommonsCollections4JavaObject) ||
| [yso.GetCommonsCollections5JavaObject](#GetCommonsCollections5JavaObject) ||
| [yso.GetCommonsCollections6JavaObject](#GetCommonsCollections6JavaObject) ||
| [yso.GetCommonsCollections7JavaObject](#GetCommonsCollections7JavaObject) ||
| [yso.GetCommonsCollections8JavaObject](#GetCommonsCollections8JavaObject) ||
| [yso.GetCommonsCollectionsK1JavaObject](#GetCommonsCollectionsK1JavaObject) ||
| [yso.GetCommonsCollectionsK2JavaObject](#GetCommonsCollectionsK2JavaObject) ||
| [yso.GetCommonsCollectionsK3JavaObject](#GetCommonsCollectionsK3JavaObject) ||
| [yso.GetCommonsCollectionsK4JavaObject](#GetCommonsCollectionsK4JavaObject) ||
| [yso.GetFindGadgetByDNSJavaObject](#GetFindGadgetByDNSJavaObject) ||
| [yso.GetGadgetNameByFun](#GetGadgetNameByFun) ||
| [yso.GetGroovy1JavaObject](#GetGroovy1JavaObject) ||
| [yso.GetJBossInterceptors1JavaObject](#GetJBossInterceptors1JavaObject) ||
| [yso.GetJSON1JavaObject](#GetJSON1JavaObject) ||
| [yso.GetJavaObjectFromBytes](#GetJavaObjectFromBytes) ||
| [yso.GetJavassistWeld1JavaObject](#GetJavassistWeld1JavaObject) ||
| [yso.GetJdk7u21JavaObject](#GetJdk7u21JavaObject) ||
| [yso.GetJdk8u20JavaObject](#GetJdk8u20JavaObject) ||
| [yso.GetSimplePrincipalCollectionJavaObject](#GetSimplePrincipalCollectionJavaObject) ||
| [yso.GetURLDNSJavaObject](#GetURLDNSJavaObject) ||
| [yso.LoadClassFromBCEL](#LoadClassFromBCEL) ||
| [yso.LoadClassFromBase64](#LoadClassFromBase64) ||
| [yso.LoadClassFromBytes](#LoadClassFromBytes) ||
| [yso.ToBcel](#ToBcel) ||
| [yso.ToBytes](#ToBytes) ||
| [yso.ToJson](#ToJson) ||
| [yso.command](#command) ||
| [yso.dnslogDomain](#dnslogDomain) ||
| [yso.dump](#dump) ||
| [yso.evilClassName](#evilClassName) |公共参数|
| [yso.obfuscationClassConstantPool](#obfuscationClassConstantPool) ||
| [yso.springEchoBody](#springEchoBody) ||
| [yso.springHeader](#springHeader) ||
| [yso.springParam](#springParam) ||
| [yso.springRuntimeExecAction](#springRuntimeExecAction) ||
| [yso.tcpReverseHost](#tcpReverseHost) ||
| [yso.tcpReversePort](#tcpReversePort) ||
| [yso.tcpReverseToken](#tcpReverseToken) ||
| [yso.useBase64BytesClass](#useBase64BytesClass) ||
| [yso.useBytesClass](#useBytesClass) ||
| [yso.useBytesEvilClass](#useBytesEvilClass) |生成自定义Class|
| [yso.useClassMultiEchoTemplate](#useClassMultiEchoTemplate) |MultiEcho|
| [yso.useConstructorExecutor](#useConstructorExecutor) ||
| [yso.useDNSLogEvilClass](#useDNSLogEvilClass) ||
| [yso.useDNSlogTemplate](#useDNSlogTemplate) |dnslog参数|
| [yso.useHeaderEchoEvilClass](#useHeaderEchoEvilClass) ||
| [yso.useHeaderEchoTemplate](#useHeaderEchoTemplate) |HeaderEchoClass|
| [yso.useHeaderParam](#useHeaderParam) ||
| [yso.useModifyTomcatMaxHeaderSizeTemplate](#useModifyTomcatMaxHeaderSizeTemplate) |ModifyTomcatMaxHeaderSize|
| [yso.useMultiEchoEvilClass](#useMultiEchoEvilClass) ||
| [yso.useProcessBuilderExecEvilClass](#useProcessBuilderExecEvilClass) ||
| [yso.useProcessBuilderExecTemplate](#useProcessBuilderExecTemplate) |ProcessBuilderExec 参数|
| [yso.useProcessImplExecEvilClass](#useProcessImplExecEvilClass) ||
| [yso.useProcessImplExecTemplate](#useProcessImplExecTemplate) |ProcessImplExec 参数|
| [yso.useRuntimeExecEvilClass](#useRuntimeExecEvilClass) ||
| [yso.useRuntimeExecTemplate](#useRuntimeExecTemplate) |RuntimeExec 参数|
| [yso.useSleepEvilClass](#useSleepEvilClass) ||
| [yso.useSleepTemplate](#useSleepTemplate) |SleepClass|
| [yso.useSleepTime](#useSleepTime) ||
| [yso.useSpringEchoTemplate](#useSpringEchoTemplate) |spring参数|
| [yso.useTcpReverseEvilClass](#useTcpReverseEvilClass) ||
| [yso.useTcpReverseShellEvilClass](#useTcpReverseShellEvilClass) ||
| [yso.useTcpReverseShellTemplate](#useTcpReverseShellTemplate) |生成tcp反弹shell|
| [yso.useTcpReverseTemplate](#useTcpReverseTemplate) |生成tcp反连|
| [yso.useTomcatEchoEvilClass](#useTomcatEchoEvilClass) ||
| [yso.useTomcatEchoTemplate](#useTomcatEchoTemplate) |Tomcat回显|


## 函数定义
### yso.GenerateClassObjectFromBytes

#### 详细描述


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


### yso.GenerateDNSlogEvilClassObject

#### 详细描述
dnslog生成

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


### yso.GenerateHeaderEchoClassObject

#### 详细描述


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


### yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject

#### 详细描述


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


### yso.GenerateMultiEchoClassObject

#### 详细描述


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


### yso.GenerateProcessBuilderExecEvilClassObject

#### 详细描述


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


### yso.GenerateProcessImplExecEvilClassObject

#### 详细描述


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


### yso.GenerateRuntimeExecEvilClassObject

#### 详细描述


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


### yso.GenerateSleepClassObject

#### 详细描述


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


### yso.GenerateSpringEchoEvilClassObject

#### 详细描述
spring生成

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


### yso.GenerateTcpReverseEvilClassObject

#### 详细描述


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


### yso.GenerateTcpReverseShellEvilClassObject

#### 详细描述


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


### yso.GenerateTomcatEchoClassObject

#### 详细描述


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


### yso.GetAllGadget

#### 详细描述


#### 定义

`GetAllGadget() []any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` |   |


### yso.GetAllRuntimeExecGadget

#### 详细描述


#### 定义

`GetAllRuntimeExecGadget() []RuntimeExecGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]RuntimeExecGadget` |   |


### yso.GetAllTemplatesGadget

#### 详细描述


#### 定义

`GetAllTemplatesGadget() []TemplatesGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]TemplatesGadget` |   |


### yso.GetBeanShell1JavaObject

#### 详细描述


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


### yso.GetClick1JavaObject

#### 详细描述


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


### yso.GetCommonsBeanutils183NOCCJavaObject

#### 详细描述


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


### yso.GetCommonsBeanutils192NOCCJavaObject

#### 详细描述


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


### yso.GetCommonsBeanutils1JavaObject

#### 详细描述


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


### yso.GetCommonsCollections1JavaObject

#### 详细描述


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


### yso.GetCommonsCollections2JavaObject

#### 详细描述


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


### yso.GetCommonsCollections3JavaObject

#### 详细描述


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


### yso.GetCommonsCollections4JavaObject

#### 详细描述


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


### yso.GetCommonsCollections5JavaObject

#### 详细描述


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


### yso.GetCommonsCollections6JavaObject

#### 详细描述


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


### yso.GetCommonsCollections7JavaObject

#### 详细描述


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


### yso.GetCommonsCollections8JavaObject

#### 详细描述


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


### yso.GetCommonsCollectionsK1JavaObject

#### 详细描述


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


### yso.GetCommonsCollectionsK2JavaObject

#### 详细描述


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


### yso.GetCommonsCollectionsK3JavaObject

#### 详细描述


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


### yso.GetCommonsCollectionsK4JavaObject

#### 详细描述


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


### yso.GetFindGadgetByDNSJavaObject

#### 详细描述


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


### yso.GetGadgetNameByFun

#### 详细描述


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


### yso.GetGroovy1JavaObject

#### 详细描述


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


### yso.GetJBossInterceptors1JavaObject

#### 详细描述


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


### yso.GetJSON1JavaObject

#### 详细描述


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


### yso.GetJavaObjectFromBytes

#### 详细描述


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


### yso.GetJavassistWeld1JavaObject

#### 详细描述


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


### yso.GetJdk7u21JavaObject

#### 详细描述


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


### yso.GetJdk8u20JavaObject

#### 详细描述


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


### yso.GetSimplePrincipalCollectionJavaObject

#### 详细描述


#### 定义

`GetSimplePrincipalCollectionJavaObject() (*JavaObject, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### yso.GetURLDNSJavaObject

#### 详细描述


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


### yso.LoadClassFromBCEL

#### 详细描述


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


### yso.LoadClassFromBase64

#### 详细描述


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


### yso.LoadClassFromBytes

#### 详细描述


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


### yso.ToBcel

#### 详细描述


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


### yso.ToBytes

#### 详细描述


#### 定义

`ToBytes(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### yso.ToJson

#### 详细描述


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


### yso.command

#### 详细描述


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


### yso.dnslogDomain

#### 详细描述


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


### yso.dump

#### 详细描述


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


### yso.evilClassName

#### 详细描述
公共参数

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


### yso.obfuscationClassConstantPool

#### 详细描述


#### 定义

`obfuscationClassConstantPool() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.springEchoBody

#### 详细描述


#### 定义

`springEchoBody() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.springHeader

#### 详细描述


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


### yso.springParam

#### 详细描述


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


### yso.springRuntimeExecAction

#### 详细描述


#### 定义

`springRuntimeExecAction() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.tcpReverseHost

#### 详细描述


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


### yso.tcpReversePort

#### 详细描述


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


### yso.tcpReverseToken

#### 详细描述


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


### yso.useBase64BytesClass

#### 详细描述


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


### yso.useBytesClass

#### 详细描述


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


### yso.useBytesEvilClass

#### 详细描述
生成自定义Class

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


### yso.useClassMultiEchoTemplate

#### 详细描述
MultiEcho

#### 定义

`useClassMultiEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useConstructorExecutor

#### 详细描述


#### 定义

`useConstructorExecutor() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useDNSLogEvilClass

#### 详细描述


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


### yso.useDNSlogTemplate

#### 详细描述
dnslog参数

#### 定义

`useDNSlogTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useHeaderEchoEvilClass

#### 详细描述


#### 定义

`useHeaderEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useHeaderEchoTemplate

#### 详细描述
HeaderEchoClass

#### 定义

`useHeaderEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useHeaderParam

#### 详细描述


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


### yso.useModifyTomcatMaxHeaderSizeTemplate

#### 详细描述
ModifyTomcatMaxHeaderSize

#### 定义

`useModifyTomcatMaxHeaderSizeTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useMultiEchoEvilClass

#### 详细描述


#### 定义

`useMultiEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useProcessBuilderExecEvilClass

#### 详细描述


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


### yso.useProcessBuilderExecTemplate

#### 详细描述
ProcessBuilderExec 参数

#### 定义

`useProcessBuilderExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useProcessImplExecEvilClass

#### 详细描述


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


### yso.useProcessImplExecTemplate

#### 详细描述
ProcessImplExec 参数

#### 定义

`useProcessImplExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useRuntimeExecEvilClass

#### 详细描述


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


### yso.useRuntimeExecTemplate

#### 详细描述
RuntimeExec 参数

#### 定义

`useRuntimeExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useSleepEvilClass

#### 详细描述


#### 定义

`useSleepEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useSleepTemplate

#### 详细描述
SleepClass

#### 定义

`useSleepTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useSleepTime

#### 详细描述


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


### yso.useSpringEchoTemplate

#### 详细描述
spring参数

#### 定义

`useSpringEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useTcpReverseEvilClass

#### 详细描述


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


### yso.useTcpReverseShellEvilClass

#### 详细描述


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


### yso.useTcpReverseShellTemplate

#### 详细描述
生成tcp反弹shell

#### 定义

`useTcpReverseShellTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useTcpReverseTemplate

#### 详细描述
生成tcp反连

#### 定义

`useTcpReverseTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useTomcatEchoEvilClass

#### 详细描述


#### 定义

`useTomcatEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### yso.useTomcatEchoTemplate

#### 详细描述
Tomcat回显

#### 定义

`useTomcatEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


