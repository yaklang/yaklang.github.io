# yso


|成员函数|函数描述/介绍|
|:------|:--------|
 | [yso.GenerateClassObjectFromBytes](#ysogenerateclassobjectfrombytes) | 从Bytes中加载Class |
 | [yso.GenerateDNSlogEvilClassObject](#ysogeneratednslogevilclassobject) | 生成一个制定域名的DNSLog恶意类 |
 | [yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject](#ysogeneratemodifytomcatmaxheadersizeevilclassobject) | 生成一个修改Tomcat最大头长度的恶意类 |
 | [yso.GenerateMultiEchoClassObject](#ysogeneratemultiechoclassobject) | 生成一个兼容性Echo回显恶意对象 |
 | [yso.GenerateProcessBuilderExecEvilClassObject](#ysogenerateprocessbuilderexecevilclassobject) | 生成一个ProcessBuilderExec方式的恶意类对象 |
 | [yso.GenerateProcessImplExecEvilClassObject](#ysogenerateprocessimplexecevilclassobject) | 生成一个ProcessImpl执行的恶意类对象 |
 | [yso.GenerateRuntimeExecEvilClassObject](#ysogenerateruntimeexecevilclassobject) | 生成一个RuntimeExec的恶意类 |
 | [yso.GenerateSpringEchoEvilClassObject](#ysogeneratespringechoevilclassobject) | 生成一个SpringEcho恶意类对象&#34;&#34; |
 | [yso.GenerateTcpReverseEvilClassObject](#ysogeneratetcpreverseevilclassobject) | 生成一个TCP反连的恶意类对象 |
 | [yso.GenerateTcpReverseShellEvilClassObject](#ysogeneratetcpreverseshellevilclassobject) | 生成一个TCP反弹Shell的恶意类对象 |
 | [yso.GenerateTomcatEchoClassObject](#ysogeneratetomcatechoclassobject) | 生成一个Tomcat回显恶意类 |
 | [yso.GetAllGadget](#ysogetallgadget) | 获取所有可以生成的工具 Gadget |
 | [yso.GetAllRuntimeExecGadget](#ysogetallruntimeexecgadget) | 获取所有命令执行的 Gadget |
 | [yso.GetAllTemplatesGadget](#ysogetalltemplatesgadget) | 获取所有模版执行的 Gadget |
 | [yso.GetBeanShell1JavaObject](#ysogetbeanshell1javaobject) | 生成 BeanShell1 Java反序列化对象 |
 | [yso.GetClick1JavaObject](#ysogetclick1javaobject) | 生成 Click1 恶意对象 |
 | [yso.GetCommonsBeanutils183NOCCJavaObject](#ysogetcommonsbeanutils183noccjavaobject) | CB183NoCC依赖的Java恶意对象 |
 | [yso.GetCommonsBeanutils192NOCCJavaObject](#ysogetcommonsbeanutils192noccjavaobject) | CB192NOCC的Java恶意对象 |
 | [yso.GetCommonsBeanutils1JavaObject](#ysogetcommonsbeanutils1javaobject) | CB1 |
 | [yso.GetCommonsCollections1JavaObject](#ysogetcommonscollections1javaobject) |  |
 | [yso.GetCommonsCollections2JavaObject](#ysogetcommonscollections2javaobject) |  |
 | [yso.GetCommonsCollections3JavaObject](#ysogetcommonscollections3javaobject) |  |
 | [yso.GetCommonsCollections4JavaObject](#ysogetcommonscollections4javaobject) |  |
 | [yso.GetCommonsCollections5JavaObject](#ysogetcommonscollections5javaobject) |  |
 | [yso.GetCommonsCollections6JavaObject](#ysogetcommonscollections6javaobject) |  |
 | [yso.GetCommonsCollections7JavaObject](#ysogetcommonscollections7javaobject) |  |
 | [yso.GetCommonsCollections8JavaObject](#ysogetcommonscollections8javaobject) |  |
 | [yso.GetCommonsCollectionsK1JavaObject](#ysogetcommonscollectionsk1javaobject) |  |
 | [yso.GetCommonsCollectionsK2JavaObject](#ysogetcommonscollectionsk2javaobject) |  |
 | [yso.GetCommonsCollectionsK3JavaObject](#ysogetcommonscollectionsk3javaobject) |  |
 | [yso.GetCommonsCollectionsK4JavaObject](#ysogetcommonscollectionsk4javaobject) |  |
 | [yso.GetFindGadgetByDNSJavaObject](#ysogetfindgadgetbydnsjavaobject) |  |
 | [yso.GetGadgetNameByFun](#ysogetgadgetnamebyfun) |  |
 | [yso.GetGroovy1JavaObject](#ysogetgroovy1javaobject) |  |
 | [yso.GetJBossInterceptors1JavaObject](#ysogetjbossinterceptors1javaobject) |  |
 | [yso.GetJSON1JavaObject](#ysogetjson1javaobject) |  |
 | [yso.GetJavaObjectFromBytes](#ysogetjavaobjectfrombytes) |  |
 | [yso.GetJavassistWeld1JavaObject](#ysogetjavassistweld1javaobject) |  |
 | [yso.GetJdk7u21JavaObject](#ysogetjdk7u21javaobject) |  |
 | [yso.GetJdk8u20JavaObject](#ysogetjdk8u20javaobject) |  |
 | [yso.GetSimplePrincipalCollectionJavaObject](#ysogetsimpleprincipalcollectionjavaobject) |  |
 | [yso.GetURLDNSJavaObject](#ysogeturldnsjavaobject) |  |
 | [yso.ToBcel](#ysotobcel) |  |
 | [yso.ToBytes](#ysotobytes) |  |
 | [yso.ToJson](#ysotojson) |  |
 | [yso.command](#ysocommand) |  |
 | [yso.dnslogDomain](#ysodnslogdomain) |  |
 | [yso.dump](#ysodump) |  |
 | [yso.evilClassName](#ysoevilclassname) |  |
 | [yso.obfuscationClassConstantPool](#ysoobfuscationclassconstantpool) |  |
 | [yso.springEchoBody](#ysospringechobody) |  |
 | [yso.springHeader](#ysospringheader) |  |
 | [yso.springParam](#ysospringparam) |  |
 | [yso.springRuntimeExecAction](#ysospringruntimeexecaction) |  |
 | [yso.tcpReverseHost](#ysotcpreversehost) |  |
 | [yso.tcpReversePort](#ysotcpreverseport) |  |
 | [yso.tcpReverseToken](#ysotcpreversetoken) |  |
 | [yso.useBase64BytesClass](#ysousebase64bytesclass) |  |
 | [yso.useBytesClass](#ysousebytesclass) |  |
 | [yso.useBytesEvilClass](#ysousebytesevilclass) |  |
 | [yso.useClassMultiEchoTemplate](#ysouseclassmultiechotemplate) |  |
 | [yso.useConstructorExecutor](#ysouseconstructorexecutor) |  |
 | [yso.useDNSLogEvilClass](#ysousednslogevilclass) |  |
 | [yso.useDNSlogTemplate](#ysousednslogtemplate) |  |
 | [yso.useModifyTomcatMaxHeaderSizeTemplate](#ysousemodifytomcatmaxheadersizetemplate) |  |
 | [yso.useMultiEchoEvilClass](#ysousemultiechoevilclass) |  |
 | [yso.useProcessBuilderExecEvilClass](#ysouseprocessbuilderexecevilclass) |  |
 | [yso.useProcessBuilderExecTemplate](#ysouseprocessbuilderexectemplate) |  |
 | [yso.useProcessImplExecEvilClass](#ysouseprocessimplexecevilclass) |  |
 | [yso.useProcessImplExecTemplate](#ysouseprocessimplexectemplate) |  |
 | [yso.useRuntimeExecEvilClass](#ysouseruntimeexecevilclass) |  |
 | [yso.useRuntimeExecTemplate](#ysouseruntimeexectemplate) |  |
 | [yso.useSpringEchoTemplate](#ysousespringechotemplate) |  |
 | [yso.useTcpReverseEvilClass](#ysousetcpreverseevilclass) |  |
 | [yso.useTcpReverseShellEvilClass](#ysousetcpreverseshellevilclass) |  |
 | [yso.useTcpReverseShellTemplate](#ysousetcpreverseshelltemplate) |  |
 | [yso.useTcpReverseTemplate](#ysousetcpreversetemplate) |  |
 | [yso.useTomcatEchoEvilClass](#ysousetomcatechoevilclass) |  |
 | [yso.useTomcatEchoTemplate](#ysousetomcatechotemplate) |  |




 



## 函数定义

### yso.GenerateClassObjectFromBytes

从Bytes中加载Class

#### 详细描述



#### 定义：

`GenerateClassObjectFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateDNSlogEvilClassObject

生成一个制定域名的DNSLog恶意类

#### 详细描述



#### 定义：

`GenerateDNSlogEvilClassObject(domain string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:dnslog生成`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject

生成一个修改Tomcat最大头长度的恶意类

#### 详细描述



#### 定义：

`GenerateModifyTomcatMaxHeaderSizeEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateMultiEchoClassObject

生成一个兼容性Echo回显恶意对象

#### 详细描述



#### 定义：

`GenerateMultiEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateProcessBuilderExecEvilClassObject

生成一个ProcessBuilderExec方式的恶意类对象

#### 详细描述



#### 定义：

`GenerateProcessBuilderExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateProcessImplExecEvilClassObject

生成一个ProcessImpl执行的恶意类对象

#### 详细描述



#### 定义：

`GenerateProcessImplExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateRuntimeExecEvilClassObject

生成一个RuntimeExec的恶意类

#### 详细描述



#### 定义：

`GenerateRuntimeExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateSpringEchoEvilClassObject

生成一个SpringEcho恶意类对象&#34;&#34;

#### 详细描述



#### 定义：

`GenerateSpringEchoEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:spring生成`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateTcpReverseEvilClassObject

生成一个TCP反连的恶意类对象

#### 详细描述



#### 定义：

`GenerateTcpReverseEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateTcpReverseShellEvilClassObject

生成一个TCP反弹Shell的恶意类对象

#### 详细描述



#### 定义：

`GenerateTcpReverseShellEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GenerateTomcatEchoClassObject

生成一个Tomcat回显恶意类

#### 详细描述



#### 定义：

`GenerateTomcatEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javaclassparser.ClassObject` |   |
| r1 | `error` |   |


 
### yso.GetAllGadget

获取所有可以生成的工具 Gadget

#### 详细描述



#### 定义：

`GetAllGadget() []any`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]any` |   |


 
### yso.GetAllRuntimeExecGadget

获取所有命令执行的 Gadget

#### 详细描述



#### 定义：

`GetAllRuntimeExecGadget() []yso.RuntimeExecGadget`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]yso.RuntimeExecGadget` |   |


 
### yso.GetAllTemplatesGadget

获取所有模版执行的 Gadget

#### 详细描述



#### 定义：

`GetAllTemplatesGadget() []yso.TemplatesGadget`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]yso.TemplatesGadget` |   |


 
### yso.GetBeanShell1JavaObject

生成 BeanShell1 Java反序列化对象

#### 详细描述



#### 定义：

`GetBeanShell1JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetClick1JavaObject

生成 Click1 恶意对象

#### 详细描述



#### 定义：

`GetClick1JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsBeanutils183NOCCJavaObject

CB183NoCC依赖的Java恶意对象

#### 详细描述



#### 定义：

`GetCommonsBeanutils183NOCCJavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsBeanutils192NOCCJavaObject

CB192NOCC的Java恶意对象

#### 详细描述



#### 定义：

`GetCommonsBeanutils192NOCCJavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsBeanutils1JavaObject

CB1

#### 详细描述



#### 定义：

`GetCommonsBeanutils1JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections1JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections1JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections2JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections2JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections3JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections3JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections4JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections4JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections5JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections5JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections6JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections6JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections7JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections7JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollections8JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollections8JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollectionsK1JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollectionsK1JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollectionsK2JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollectionsK2JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollectionsK3JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollectionsK3JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetCommonsCollectionsK4JavaObject



#### 详细描述



#### 定义：

`GetCommonsCollectionsK4JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetFindGadgetByDNSJavaObject



#### 详细描述



#### 定义：

`GetFindGadgetByDNSJavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetGadgetNameByFun



#### 详细描述



#### 定义：

`GetGadgetNameByFun(i any) (string, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### yso.GetGroovy1JavaObject



#### 详细描述



#### 定义：

`GetGroovy1JavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetJBossInterceptors1JavaObject



#### 详细描述



#### 定义：

`GetJBossInterceptors1JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetJSON1JavaObject



#### 详细描述



#### 定义：

`GetJSON1JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetJavaObjectFromBytes



#### 详细描述



#### 定义：

`GetJavaObjectFromBytes([]uint8) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetJavassistWeld1JavaObject



#### 详细描述



#### 定义：

`GetJavassistWeld1JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetJdk7u21JavaObject



#### 详细描述



#### 定义：

`GetJdk7u21JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetJdk8u20JavaObject



#### 详细描述



#### 定义：

`GetJdk8u20JavaObject(...yso.GenClassOptionFun) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...yso.GenClassOptionFun` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetSimplePrincipalCollectionJavaObject



#### 详细描述



#### 定义：

`GetSimplePrincipalCollectionJavaObject() (*yso.JavaObject, error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.GetURLDNSJavaObject



#### 详细描述



#### 定义：

`GetURLDNSJavaObject(string) (*yso.JavaObject, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yso.JavaObject` |   |
| r1 | `error` |   |


 
### yso.ToBcel



#### 详细描述



#### 定义：

`ToBcel(i any) (string, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### yso.ToBytes



#### 详细描述



#### 定义：

`ToBytes(i any) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### yso.ToJson



#### 详细描述



#### 定义：

`ToJson(i any) (string, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### yso.command



#### 详细描述



#### 定义：

`command(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.dnslogDomain



#### 详细描述



#### 定义：

`dnslogDomain(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.dump



#### 详细描述



#### 定义：

`dump(i any) (string, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### yso.evilClassName



#### 详细描述



#### 定义：

`evilClassName(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.obfuscationClassConstantPool



#### 详细描述



#### 定义：

`obfuscationClassConstantPool() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.springEchoBody



#### 详细描述



#### 定义：

`springEchoBody() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.springHeader



#### 详细描述



#### 定义：

`springHeader(string, string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.springParam



#### 详细描述



#### 定义：

`springParam(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.springRuntimeExecAction



#### 详细描述



#### 定义：

`springRuntimeExecAction() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.tcpReverseHost



#### 详细描述



#### 定义：

`tcpReverseHost(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.tcpReversePort



#### 详细描述



#### 定义：

`tcpReversePort(int) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.tcpReverseToken



#### 详细描述



#### 定义：

`tcpReverseToken(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useBase64BytesClass



#### 详细描述



#### 定义：

`useBase64BytesClass(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useBytesClass



#### 详细描述



#### 定义：

`useBytesClass([]uint8) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useBytesEvilClass



#### 详细描述



#### 定义：

`useBytesEvilClass([]uint8) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useClassMultiEchoTemplate



#### 详细描述



#### 定义：

`useClassMultiEchoTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useConstructorExecutor



#### 详细描述



#### 定义：

`useConstructorExecutor() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useDNSLogEvilClass



#### 详细描述



#### 定义：

`useDNSLogEvilClass(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useDNSlogTemplate



#### 详细描述



#### 定义：

`useDNSlogTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useModifyTomcatMaxHeaderSizeTemplate



#### 详细描述



#### 定义：

`useModifyTomcatMaxHeaderSizeTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useMultiEchoEvilClass



#### 详细描述



#### 定义：

`useMultiEchoEvilClass() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useProcessBuilderExecEvilClass



#### 详细描述



#### 定义：

`useProcessBuilderExecEvilClass(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useProcessBuilderExecTemplate



#### 详细描述



#### 定义：

`useProcessBuilderExecTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useProcessImplExecEvilClass



#### 详细描述



#### 定义：

`useProcessImplExecEvilClass(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useProcessImplExecTemplate



#### 详细描述



#### 定义：

`useProcessImplExecTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useRuntimeExecEvilClass



#### 详细描述



#### 定义：

`useRuntimeExecEvilClass(string) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useRuntimeExecTemplate



#### 详细描述



#### 定义：

`useRuntimeExecTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useSpringEchoTemplate



#### 详细描述



#### 定义：

`useSpringEchoTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useTcpReverseEvilClass



#### 详细描述



#### 定义：

`useTcpReverseEvilClass(string, int) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useTcpReverseShellEvilClass



#### 详细描述



#### 定义：

`useTcpReverseShellEvilClass(string, int) yso.GenClassOptionFun`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useTcpReverseShellTemplate



#### 详细描述



#### 定义：

`useTcpReverseShellTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useTcpReverseTemplate



#### 详细描述



#### 定义：

`useTcpReverseTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useTomcatEchoEvilClass



#### 详细描述



#### 定义：

`useTomcatEchoEvilClass() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 
### yso.useTomcatEchoTemplate



#### 详细描述



#### 定义：

`useTomcatEchoTemplate() yso.GenClassOptionFun`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func GenClassOptionFun(v1: *yso.ClassConfig) ` |   |


 


