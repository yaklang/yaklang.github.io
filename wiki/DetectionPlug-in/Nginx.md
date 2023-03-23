---
sidebar_position: 12
---
# Nginx插件使用

## 1 Nginx 文件解析漏洞

**插件id：**

Yakit正在努力编写~

**测试过程：**

vulhub测试网站访问上传的图片
http://xx.xx.xx.xx/uploadfiles/nginx.png

![](/img/products/yakit/nginx-1.png)

利用文件解析漏洞进行解析
http://xx.xx.xx.xx/uploadfiles/nginx.png/.php

![](/img/products/yakit/nginx-2.png)

## 2 Nginx CVE-2017-7529 漏洞检测

**插件id：**

f863b7be-9536-4de3-bc94-5800ac2a7010

**测试过程：**

输入ip:端口 点击开始执行
成功检测出漏洞

![](/img/products/yakit/nginx-3.png)

## 3 Nginx 目录遍历漏洞检测

**插件id：**

58587b92-e88c-4557-8f56-23bac605bbe1

**测试过程：**

输入ip:端口 点击开始执行
成功检测出漏洞

![](/img/products/yakit/nginx-4.png)

## 4 Nginx CRLF注入漏洞检测

**插件id：**

Yakit正在努力编写~

**测试过程：**

执行pyload：curl -I http://xx.xx.xx.xx:8080/%0d%0aSet-Cookie:%20a=1

![](/img/products/yakit/nginx-5.png)

## 5 Nginx 空字节任意代码执行漏洞检测

**插件id：**

Yakit正在努力编写~

**测试过程：**

暂无案例
