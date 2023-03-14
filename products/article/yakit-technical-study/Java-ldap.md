---
sidebar_position: 4
---

# Java ldap协议分析

## 什么是ldap
LDAP是Lightweight Directory Access Protocol的缩写，顾名思义，它是指轻量级目录访问协议。这个协议是用于访问目录服务的。目录服务和数据库很类似，但又有着很大的不同之处。数据库设计为方便读写，但目录服务专门进行了读优化的设计，因此不太适合于经常有写操作的数据存储。

目录服务会通过树状结构存储数据，如下图，这样存储的优点就是查询效率高

![](/img/products/yakit/java-ldap.png)

上图这种树状结构，称为目录结构树（Directory Information Tree）(DIT)，树上的每一个节点（不论是叶子节点还是中间的节点），都可以称为条目(Entry)。每个条目都有很多属性(Attribute)，如下图

|  属性   | 别名  | 描述
|  ----  | ----  | ----  |
| Domain Component  | DC | 域组件
| Organizational Unit  | OU | 组织单位
| COMMON NAME  | CN | 姓名

每一个条目都有一个唯一的标识名（distinguished Name ，DN）。如上图的cn=Tux，它的DN就是`cn=Tux,ou=devel,dc=example,dc=com`，DN由多个RND(Relative Distinguished Name)通过逗号分割，如`cn=Tux`是RND，`ou=devel` 也是一个RND。

对象类（ObjectClass）是属性的集合，如图

![](/img/products/yakit/java-class-aggregate.png)

常见的dns服务，windows注册表等都是目录服务

## Java连接ldap流程

![](/img/products/yakit/java-link-idap.png)

通过命名服务，查询ldap，获取到LdapUrlContext，然后继续lookup

![](/img/products/yakit/java-link-idap-lookup.png)

supper:GenericUrlContext

![](/img/products/yakit/java-link-idap-supper.png)

如图，首先执行getRootURLContext

![](/img/products/yakit/java-link-idap-getRootURLContext.png)

然后如图

![](/img/products/yakit/java-link-idap-result.png)

在创建LdapCtx时会认证ldap服务，如果失败，则直接抛异常
通过ldapUrl解析出DN，然后将DN和LdapCtx封装成ResolveResult返回

getResolvedObj获取到的是上一步的LdapCtx，getRemainingName获取到DN

![](/img/products/yakit/java-getRemainingName.png)

p_lookup

![](/img/products/yakit/java-p_lookup.png)

c_lookup（LdapCtx）获取到对象

![](/img/products/yakit/java-c_lookup.png)

doSearchOnce开始搜索

![](/img/products/yakit/java-doSearchOnce.png)
![](/img/products/yakit/java-doSearchOnce-1.png)
![](/img/products/yakit/java-doSearchOnce-2.png)
![](/img/products/yakit/java-doSearchOnce-3.png)

搜索时的filter是(objectClass=*)

## 搜索数据

![](/img/products/yakit/java-search-data.png)

身份认证

![](/img/products/yakit/java-identity-authentication.png)

协议使用LdapV3

build the bind request（认证过程就叫做bind，bind request就是认证请求）

![](/img/products/yakit/java-bind-request.png)

如上图ber是在构造reauthenticate的数据包。可以看见有ASN_xxx，因为LDAP协议使用ASN.1规范进行描述，使用ASN.1 BER编码规范进行传输

身份认证时默认使用ldapv3协议，如果服务端返回状态码不是协议错误，则继续使用ldapv3。认证机制默认使用的是"none"(除此还有anontmous、simple、sasl)

## 解析Ldap Response

继续看c_lookup

![](/img/products/yakit/java-c_lookup-1.png)

这里有两个关键点，一是拿出controls数据，存到respCtls(response control)，二是，如果有javaClassName属性，则调用decodeObject方法，解析出对象

如图

![](/img/products/yakit/java-decodeObject.png)

支持三种情况

1. javaSerializedData
2. javaRemoteLocation
3. javaNamingReference

第三种情况，调用decodeReference方法，生成Reference对象

接着在c_lookup方法中调用DirectoryManager.getObjectInstance，解析Reference对象，，解析时会先从本地加载，如果为null，再通过codebase的地址去加载（需要com.sun.jndi.ldap.object.trustURLCodebase的值为true），导致任意类加载

再看第一种情况，通过helper.getURLClassLoader获取ClassLoader也需要com.sun.jndi.ldap.object.trustURLCodebase的值为true，如图

![](/img/products/yakit/java-ClassLoader.png)

当没有设置url或trustURLCodebase为false时会返回父类加载器(AppClassLoader)，然后再用这个加载器，反序列化javaSerializedData中的数据，这里可以作为反序列化利用，来绕过trstURLCodebase的限制

再看第二种情况javaRemoteLocation可以重新指定一个url，可以是ldap、rmi、iiop等协议，加载资源，支持的全部协议如图（似乎iiop协议可以反序列化）

<div align="center">
    <img src="/img/products/yakit/java-javaRemoteLocation.png" />
</div>

## Java ldap利用方式

1. Reference对象，需要trustURLCodebase
2. 设置javaSerializedData属性，可以反序列化
3. 似乎iiop协议也可以反序列化（不确定）