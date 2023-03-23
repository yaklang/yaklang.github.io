---
sidebar_position: 19
---
# ThinkCMF插件使用

## 1 ThinkCMF LFI 漏洞

**插件id：**

ea439f45-c538-417f-8275-f6c8797cd206

**测试过程：**

漏洞版本要求    ThinkCMF: x1.6.0/x2.1.0/x2.2.0-2
github下载版本2.1.1 搭建了环境

![](/img/products/yakit/ThinkCMF-1.png)

直接输入目标ip和端口进行扫描

![](/img/products/yakit/ThinkCMF-2.png)

成功发现漏洞
尝试读取nginx.conf也读取成功

![](/img/products/yakit/ThinkCMF-3.png)

## 2 ThinkCMF write shell 漏洞

**插件id：**

f0b6df54-3536-4d6a-880e-4ce51bb1237a

**测试过程：**

漏洞版本要求    ThinkCMF: x1.6.0/x2.1.0/x2.2.0-2
github下载版本2.1.1 搭建了环境

![](/img/products/yakit/ThinkCMF-4.png)

直接输入目标ip和端口进行扫描
成功发现漏洞

![](/img/products/yakit/ThinkCMF-5.png)

文件写入成功

![](/img/products/yakit/ThinkCMF-6.png)
