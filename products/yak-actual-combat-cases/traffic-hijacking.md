---
sidebar_position: 2
---
# 使用Yakit进行流量劫持

## 如何使用Yakit进行流量劫持

MITM的功能已经上线了一段时间，但一直没有好好介绍这个功能。在收集了众多用户对此功能的反馈后，推出1.0.10-beta15的版本对MITM的功能与交互进行了优化和升级

## Yakit与 Burp在MITM上的对比

Yakit在使用代理监听端口劫持浏览器所有流量的场景下，已达到**基本覆盖Burp基础功能**的程度，虽然Yakit在MITM上仍有较多功能需要完善，但目前劫持流量、编解码数据包、web fuzzer等功能已能满足正常使用。在爆破和流量转发时使用Yakit和Burp的操作状态和结果如下。

### 进行爆破枚举

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-blasting-enumeration.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>

<center>
<font size="2" color="#888888">使用Yakit进行爆破枚举  </font>
</center>

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/burp-blasting-enumeration.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>

<center>
<font size="2" color="#888888">使用Burp进行爆破枚举</font>
</center>

### 进行流量转发

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-traffic-forwarding.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>

<center>
<font size="2" color="#888888">使用Yakit进行流量转发</font>
</center>


<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/burp-traffic-forwarding.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>

<center>
<font size="2" color="#888888">使用Burp进行流量转发</font>
</center>

可以看到在使用上，Yakit和Burp的差异不大，为了让用户能快速适应Yakit，在保留了Burp的常用操作基础上，对页面进行了人性化的优化，使交互更简洁流畅。从调试的结果来看，Yakit和Burp的结果是一致的，爆破和流量转发场景下，Yakit与Burp的功能性趋于一致。

## MITM功能介绍
### MITM
这个页面简单来说可以查看并编辑劫持数据包、查看最近历史请求数据，也可使用插件对数据包进行分析，目前插件仍在不断地完善中~如对插件有其他个性化的要求，可在“插件商店”对插件的源码进行修改，或自主添加新插件。

![](/img/products/yakit/traffic-mitm.png)

### Http history
查看历史的请求响应数据包并对数据包进行编解码操作，了解请求的详细信息，如需对数据包进行编辑调试，可发送到web fuzzer进行操作。

![](/img/products/yakit/traffic-http-history.png)

###  网站树视角
将历史请求以树结构的形式进行展示，选中域名，可查看该域名对应的数据信息与详情。

![](/img/products/yakit/traffic-site-tree.png)

### Web fuzzer
与Burp的repeater类似，可调试数据包进行漏洞检查。但Yakit提供yak.fuzz语法，在webfuzzer中使用来更灵活地调试数据，比如一次可发送多个请求包进行参数调试。

![](/img/products/yakit/traffic-web-fuzzer.png)
