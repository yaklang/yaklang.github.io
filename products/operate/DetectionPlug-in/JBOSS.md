---
sidebar_position: 9
---
# JBOSS插件使用

## 1 Jboss JMX-Console未授权访问 漏洞检测

**插件id：**

c0f4a6ac-f47c-44e2-9801-19bf33f16549

**测试过程：**

将测试网站地址输入到该插件扫描目标栏，插件默认端口为80就不用再修改

![](/img/products/yakit/JBOSS-1.png)

插件成功检测到该漏洞

![](/img/products/yakit/JBOSS-2.png)

## 2 JBoss CVE-2013-4810 漏洞检测

**插件id：**

07b23a6b-8c39-47a5-9562-4216f9807535

**测试过程：**

目标中输入ip，在额外参数中设置端口为8081，点击开始执行

![](/img/products/yakit/JBOSS-3.png)

成功检测出漏洞

![](/img/products/yakit/JBOSS-4.png)

## 3 JBoss CVE-2017-7504 漏洞检测

**插件id：**

194f7f18-e0f7-446a-a04e-3ba8ba00b12d

**测试过程：**

将测试网站地址输入到该插件扫描目标栏，并将额外参数修改为80

![](/img/products/yakit/JBOSS-5.png)

插件成功检测出该漏洞

![](/img/products/yakit/JBOSS-6.png)

## 4 JBoss CVE-2017-12149 漏洞检测

**插件id：**

b064afdb-8154-447f-bfe0-6e2c5bc9e1c1

**测试过程：**

在扫描目标处输入ip，额外参数输入端口为8081点击开始执行
成功检测到漏洞存在

![](/img/products/yakit/JBOSS-7.png)

## 5 JBoss JMXInvokerServlet 反序列化 漏洞检测

**插件id：**

b7e56527-0953-4523-8cdd-9e3997020524

**测试过程：**

将测试网站地址输入到该插件扫描目标栏，并将额外参数修改为80
插件成功检测出该漏洞

![](/img/products/yakit/JBOSS-8.png)

## 6 Jboss CVE-2010-1871 漏洞检测

**插件id：**

0ee789d5-b262-4913-8068-c8b6edcb5580

**测试过程：**

将vulfocus靶场ip地址输入到该插件扫描目标栏，并将额外参数修改为靶场端口
插件成功检测出该漏洞

![](/img/products/yakit/JBOSS-9.png)

## 7 JBOSS 默认配置远程代码执行漏洞检测

**插件id：**

Yakit正在努力编写~

**测试过程：**

可以通过上传war包的手法getshell
