# yso

|成员函数|函数描述/介绍|
|:------|:--------|
| [yso.GenerateClassObjectFromBytes](#generateclassobjectfrombytes) ||
| [yso.GenerateDNSlogEvilClassObject](#generatednslogevilclassobject) |dnslog生成
|
| [yso.GenerateHeaderEchoClassObject](#generateheaderechoclassobject) ||
| [yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject](#generatemodifytomcatmaxheadersizeevilclassobject) ||
| [yso.GenerateMultiEchoClassObject](#generatemultiechoclassobject) ||
| [yso.GenerateProcessBuilderExecEvilClassObject](#generateprocessbuilderexecevilclassobject) ||
| [yso.GenerateProcessImplExecEvilClassObject](#generateprocessimplexecevilclassobject) ||
| [yso.GenerateRuntimeExecEvilClassObject](#generateruntimeexecevilclassobject) ||
| [yso.GenerateSleepClassObject](#generatesleepclassobject) ||
| [yso.GenerateSpringEchoEvilClassObject](#generatespringechoevilclassobject) |spring生成
|
| [yso.GenerateTcpReverseEvilClassObject](#generatetcpreverseevilclassobject) ||
| [yso.GenerateTcpReverseShellEvilClassObject](#generatetcpreverseshellevilclassobject) ||
| [yso.GenerateTomcatEchoClassObject](#generatetomcatechoclassobject) ||
| [yso.GetAllGadget](#getallgadget) ||
| [yso.GetAllRuntimeExecGadget](#getallruntimeexecgadget) ||
| [yso.GetAllTemplatesGadget](#getalltemplatesgadget) ||
| [yso.GetBeanShell1JavaObject](#getbeanshell1javaobject) ||
| [yso.GetClick1JavaObject](#getclick1javaobject) ||
| [yso.GetCommonsBeanutils183NOCCJavaObject](#getcommonsbeanutils183noccjavaobject) ||
| [yso.GetCommonsBeanutils192NOCCJavaObject](#getcommonsbeanutils192noccjavaobject) ||
| [yso.GetCommonsBeanutils1JavaObject](#getcommonsbeanutils1javaobject) ||
| [yso.GetCommonsCollections1JavaObject](#getcommonscollections1javaobject) ||
| [yso.GetCommonsCollections2JavaObject](#getcommonscollections2javaobject) ||
| [yso.GetCommonsCollections3JavaObject](#getcommonscollections3javaobject) ||
| [yso.GetCommonsCollections4JavaObject](#getcommonscollections4javaobject) ||
| [yso.GetCommonsCollections5JavaObject](#getcommonscollections5javaobject) ||
| [yso.GetCommonsCollections6JavaObject](#getcommonscollections6javaobject) ||
| [yso.GetCommonsCollections7JavaObject](#getcommonscollections7javaobject) ||
| [yso.GetCommonsCollections8JavaObject](#getcommonscollections8javaobject) ||
| [yso.GetCommonsCollectionsK1JavaObject](#getcommonscollectionsk1javaobject) ||
| [yso.GetCommonsCollectionsK2JavaObject](#getcommonscollectionsk2javaobject) ||
| [yso.GetCommonsCollectionsK3JavaObject](#getcommonscollectionsk3javaobject) ||
| [yso.GetCommonsCollectionsK4JavaObject](#getcommonscollectionsk4javaobject) ||
| [yso.GetFindGadgetByDNSJavaObject](#getfindgadgetbydnsjavaobject) ||
| [yso.GetGadgetNameByFun](#getgadgetnamebyfun) ||
| [yso.GetGroovy1JavaObject](#getgroovy1javaobject) ||
| [yso.GetJBossInterceptors1JavaObject](#getjbossinterceptors1javaobject) ||
| [yso.GetJSON1JavaObject](#getjson1javaobject) ||
| [yso.GetJavaObjectFromBytes](#getjavaobjectfrombytes) ||
| [yso.GetJavassistWeld1JavaObject](#getjavassistweld1javaobject) ||
| [yso.GetJdk7u21JavaObject](#getjdk7u21javaobject) ||
| [yso.GetJdk8u20JavaObject](#getjdk8u20javaobject) ||
| [yso.GetSimplePrincipalCollectionJavaObject](#getsimpleprincipalcollectionjavaobject) ||
| [yso.GetURLDNSJavaObject](#geturldnsjavaobject) ||
| [yso.LoadClassFromBCEL](#loadclassfrombcel) ||
| [yso.LoadClassFromBase64](#loadclassfrombase64) ||
| [yso.LoadClassFromBytes](#loadclassfrombytes) ||
| [yso.ToBcel](#tobcel) ||
| [yso.ToBytes](#tobytes) ||
| [yso.ToJson](#tojson) ||
| [yso.command](#command) ||
| [yso.dnslogDomain](#dnslogdomain) ||
| [yso.dump](#dump) ||
| [yso.evilClassName](#evilclassname) |公共参数
|
| [yso.obfuscationClassConstantPool](#obfuscationclassconstantpool) ||
| [yso.springEchoBody](#springechobody) ||
| [yso.springHeader](#springheader) ||
| [yso.springParam](#springparam) ||
| [yso.springRuntimeExecAction](#springruntimeexecaction) ||
| [yso.tcpReverseHost](#tcpreversehost) ||
| [yso.tcpReversePort](#tcpreverseport) ||
| [yso.tcpReverseToken](#tcpreversetoken) ||
| [yso.useBase64BytesClass](#usebase64bytesclass) ||
| [yso.useBytesClass](#usebytesclass) ||
| [yso.useBytesEvilClass](#usebytesevilclass) |生成自定义Class
|
| [yso.useClassMultiEchoTemplate](#useclassmultiechotemplate) |MultiEcho
|
| [yso.useConstructorExecutor](#useconstructorexecutor) ||
| [yso.useDNSLogEvilClass](#usednslogevilclass) ||
| [yso.useDNSlogTemplate](#usednslogtemplate) |dnslog参数
|
| [yso.useHeaderEchoEvilClass](#useheaderechoevilclass) ||
| [yso.useHeaderEchoTemplate](#useheaderechotemplate) |HeaderEchoClass
|
| [yso.useHeaderParam](#useheaderparam) ||
| [yso.useModifyTomcatMaxHeaderSizeTemplate](#usemodifytomcatmaxheadersizetemplate) |ModifyTomcatMaxHeaderSize
|
| [yso.useMultiEchoEvilClass](#usemultiechoevilclass) ||
| [yso.useProcessBuilderExecEvilClass](#useprocessbuilderexecevilclass) ||
| [yso.useProcessBuilderExecTemplate](#useprocessbuilderexectemplate) |ProcessBuilderExec 参数
|
| [yso.useProcessImplExecEvilClass](#useprocessimplexecevilclass) ||
| [yso.useProcessImplExecTemplate](#useprocessimplexectemplate) |ProcessImplExec 参数
|
| [yso.useRuntimeExecEvilClass](#useruntimeexecevilclass) ||
| [yso.useRuntimeExecTemplate](#useruntimeexectemplate) |RuntimeExec 参数
|
| [yso.useSleepEvilClass](#usesleepevilclass) ||
| [yso.useSleepTemplate](#usesleeptemplate) |SleepClass
|
| [yso.useSleepTime](#usesleeptime) ||
| [yso.useSpringEchoTemplate](#usespringechotemplate) |spring参数
|
| [yso.useTcpReverseEvilClass](#usetcpreverseevilclass) ||
| [yso.useTcpReverseShellEvilClass](#usetcpreverseshellevilclass) ||
| [yso.useTcpReverseShellTemplate](#usetcpreverseshelltemplate) |生成tcp反弹shell
|
| [yso.useTcpReverseTemplate](#usetcpreversetemplate) |生成tcp反连
|
| [yso.useTomcatEchoEvilClass](#usetomcatechoevilclass) ||
| [yso.useTomcatEchoTemplate](#usetomcatechotemplate) |Tomcat回显
|


## 函数定义
### generateclassobjectfrombytes

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


### generatednslogevilclassobject

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


### generateheaderechoclassobject

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


### generatemodifytomcatmaxheadersizeevilclassobject

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


### generatemultiechoclassobject

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


### generateprocessbuilderexecevilclassobject

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


### generateprocessimplexecevilclassobject

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


### generateruntimeexecevilclassobject

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


### generatesleepclassobject

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


### generatespringechoevilclassobject

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


### generatetcpreverseevilclassobject

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


### generatetcpreverseshellevilclassobject

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


### generatetomcatechoclassobject

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


### getallgadget

#### 详细描述


#### 定义

`GetAllGadget() []any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` |   |


### getallruntimeexecgadget

#### 详细描述


#### 定义

`GetAllRuntimeExecGadget() []RuntimeExecGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]RuntimeExecGadget` |   |


### getalltemplatesgadget

#### 详细描述


#### 定义

`GetAllTemplatesGadget() []TemplatesGadget`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]TemplatesGadget` |   |


### getbeanshell1javaobject

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


### getclick1javaobject

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


### getcommonsbeanutils183noccjavaobject

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


### getcommonsbeanutils192noccjavaobject

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


### getcommonsbeanutils1javaobject

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


### getcommonscollections1javaobject

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


### getcommonscollections2javaobject

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


### getcommonscollections3javaobject

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


### getcommonscollections4javaobject

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


### getcommonscollections5javaobject

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


### getcommonscollections6javaobject

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


### getcommonscollections7javaobject

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


### getcommonscollections8javaobject

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


### getcommonscollectionsk1javaobject

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


### getcommonscollectionsk2javaobject

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


### getcommonscollectionsk3javaobject

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


### getcommonscollectionsk4javaobject

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


### getfindgadgetbydnsjavaobject

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


### getgadgetnamebyfun

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


### getgroovy1javaobject

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


### getjbossinterceptors1javaobject

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


### getjson1javaobject

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


### getjavaobjectfrombytes

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


### getjavassistweld1javaobject

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


### getjdk7u21javaobject

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


### getjdk8u20javaobject

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


### getsimpleprincipalcollectionjavaobject

#### 详细描述


#### 定义

`GetSimplePrincipalCollectionJavaObject() (*JavaObject, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |
| r2 | `error` |   |


### geturldnsjavaobject

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


### loadclassfrombcel

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


### loadclassfrombase64

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


### loadclassfrombytes

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


### tobcel

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


### tobytes

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


### tojson

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


### command

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


### dnslogdomain

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


### dump

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


### evilclassname

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


### obfuscationclassconstantpool

#### 详细描述


#### 定义

`obfuscationClassConstantPool() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### springechobody

#### 详细描述


#### 定义

`springEchoBody() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### springheader

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


### springparam

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


### springruntimeexecaction

#### 详细描述


#### 定义

`springRuntimeExecAction() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### tcpreversehost

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


### tcpreverseport

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


### tcpreversetoken

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


### usebase64bytesclass

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


### usebytesclass

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


### usebytesevilclass

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


### useclassmultiechotemplate

#### 详细描述
MultiEcho


#### 定义

`useClassMultiEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useconstructorexecutor

#### 详细描述


#### 定义

`useConstructorExecutor() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usednslogevilclass

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


### usednslogtemplate

#### 详细描述
dnslog参数


#### 定义

`useDNSlogTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useheaderechoevilclass

#### 详细描述


#### 定义

`useHeaderEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useheaderechotemplate

#### 详细描述
HeaderEchoClass


#### 定义

`useHeaderEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useheaderparam

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


### usemodifytomcatmaxheadersizetemplate

#### 详细描述
ModifyTomcatMaxHeaderSize


#### 定义

`useModifyTomcatMaxHeaderSizeTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usemultiechoevilclass

#### 详细描述


#### 定义

`useMultiEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useprocessbuilderexecevilclass

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


### useprocessbuilderexectemplate

#### 详细描述
ProcessBuilderExec 参数


#### 定义

`useProcessBuilderExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useprocessimplexecevilclass

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


### useprocessimplexectemplate

#### 详细描述
ProcessImplExec 参数


#### 定义

`useProcessImplExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### useruntimeexecevilclass

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


### useruntimeexectemplate

#### 详细描述
RuntimeExec 参数


#### 定义

`useRuntimeExecTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usesleepevilclass

#### 详细描述


#### 定义

`useSleepEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usesleeptemplate

#### 详细描述
SleepClass


#### 定义

`useSleepTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usesleeptime

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


### usespringechotemplate

#### 详细描述
spring参数


#### 定义

`useSpringEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usetcpreverseevilclass

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


### usetcpreverseshellevilclass

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


### usetcpreverseshelltemplate

#### 详细描述
生成tcp反弹shell


#### 定义

`useTcpReverseShellTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usetcpreversetemplate

#### 详细描述
生成tcp反连


#### 定义

`useTcpReverseTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usetomcatechoevilclass

#### 详细描述


#### 定义

`useTomcatEchoEvilClass() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


### usetomcatechotemplate

#### 详细描述
Tomcat回显


#### 定义

`useTomcatEchoTemplate() GenClassOptionFun`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GenClassOptionFun` |   |


