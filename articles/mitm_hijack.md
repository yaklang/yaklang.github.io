#  不许动，你被劫持了！   
原创 Yak  Yak Project   2024-11-21 17:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
**“Stop！Yak MITM Open The Door！”**  
  
![](/articles/wechat2md-453a18f9a64ce2de4933ccbf55b2d8d0.png)  
  
  
![](/articles/wechat2md-3c7b63447b178dca759252db58a2f6c2.png)  
  
![](/articles/wechat2md-f621828bf5430c233882a6dd3f300e78.png)  
  
![](/articles/wechat2md-24cd8d46a35dbc5f9da4309774affe8d.png)  
  
**新的HTTP请求**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
对于每个进入MITM的HTTP请求，MITM服务器会启动一个**新的线程**来对其进行处理。  
  
**过滤器**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
之后，流量会先进入过滤器，如下图所示：  
  
![](/articles/wechat2md-d43aabc6d8fb56f590ef43d0d9789eca.png)  
  
![](/articles/wechat2md-aa61d33bccc145da7ede228853cff3e1.png)  
  
**过滤器决定请求是应该被过滤（即自动放行）还是应该继续进入后续的流程。**  
  
对于请求来说，过滤器支持对Hostname（主机名）、URL路径、请求方法进行过滤。  
  
被过滤器过滤的请求会自动放行（直接流向目的服务器/代理服务器），并返回响应，中途不会再经过绝大多数模块（Yakit劫持，内容规则）的处理。  
  
**检测请求方法**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
对于没有过滤的请求，会再单独检查请求方法，对于Connnect请求方法，MITM服务器会特殊处理，而其他方法则进入到下一个模块中。  
  
**内容规则**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
然后，请求会进入内容规则模块的处理，如下图所示：  
  
![](/articles/wechat2md-763bda0a2e16966996bc4d37c6d9c17a.png)  
  
![](/articles/wechat2md-29cd3584b1298b5ada48b25868ccce08.png)  
  
请求会经过每一个处理请求的规则（会优先经过需要替换的规则），并会对该流量进行提前的染色或者添加标签。需要特殊注意的是，**如果某个规则对请求进行了丢弃，就不会再进入后续的流程。**  
  
**方法：hijackRequest**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
接下来，请求会进入插件/热加载中的hijackRequest方法进行处理，**经过处理的请求可能会被丢弃（不会再进入后续的流程）**，或者被修改。  
```
// hijackHTTPRequest 每一个新的 HTTPRequest 将会被这个 HOOK 劫持，
// 劫持后通过 forward(modified) 来把修改后的请求覆盖
// 如果需要屏蔽该数据包，通过 drop() 来屏蔽
hijackHTTPRequest = func(isHttps, url, req, forward /*func(modifiedRequest []byte)*/, drop /*func()*/) {
}
```  
  
**Yakit前端**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
接着，请求会进入到Yakit前端，Yakit前端有三个模式，如下图所示：  
  
![](/articles/wechat2md-9f65f8062cae3ea1c1033691d128b4d5.png)  
  
除了手动劫持以外，**剩下的两个模式都会将请求自动放行（直接流向目的服务器/代理服务器）并记录在History中**。对于手动劫持的请求，用户可以手动为其添加颜色或标签，修改请求，提交数据或丢弃数据，**丢弃数据后不会再进入后续的流程。**  
  
**方法：beforeRequest**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
后续，请求会进入插件/热加载中的beforeRequest方法进行处理，经过处理的请求可能被修改。  
```
// beforeRequest 允许发送数据包前再做一次处理，定义为 func(origin []byte) []byte
beforeRequest = func(req) {
}
```  
  
**全局配置-禁用IP/禁用域名**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
之后，即将发出的请求还会经过系统配置 - 全局配置中的禁用IP/禁用域名，对于禁用的IP或域名，请求会被自动丢弃并且不会再进入后续的流程：  
  
![](/articles/wechat2md-faf116a15689a391bbda8138795acf64.png)  
  
![](/articles/wechat2md-b4fd2ea4f1113cc04b5b41efe587342d.png)  
  
**发起请求，接收响应**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
请求会被发往目的服务器/代理服务器，然后接收到对应的响应。  
  
**再次进入过滤器**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
对于响应，会再次进入过滤器，对于响应来说，过滤器支持对Content-Type，文件后缀进行过滤。  
  
![](/articles/wechat2md-aa61d33bccc145da7ede228853cff3e1.png)  
  
**过滤器决定响应是应该被过滤还是应该继续进入后续的流程。**  
  
对于被过滤器过滤的响应，流量不会记录到History中，中途不会再经过绝大多数模块的处理，**只会镜像到插件或热加载中mirrorHTTPFlow方法中。**  
  
**方法：hijackResponse/hijackResponseEX**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
请求与响应会依次进入插件/热加载中的hijackResponseEx，hijackResponse方法。经过处理的响应可能被修改或被丢弃，**被丢弃的流量不会再进入后续的流程。**  
```
// hijackHTTPResponse 每一个新的 HTTPResponse 将会被这个 HOOK 劫持，劫持后通过 forward(modified) 来把修改后的请求覆盖，如果需要屏蔽该数据包，通过 drop() 来屏蔽
hijackHTTPResponse = func(isHttps, url, rsp, forward, drop) {
}

hijackHTTPResponseEx = func(isHttps, url, req, rsp, forward, drop) {
}
```  
```
```  
  
**第二次：内容规则**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
响应会经过每一个处理响应的规则（会优先经过需要替换的规则）并会对该流量进行染色或者添加标签。需要特殊注意的是，**如果某个规则对响应进行了丢弃，就不会再进入后续的流程。**  
  
**可选：再次进入Yakit前端**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
如果首次进入Yakit前端时设置了劫持响应，那么响应会再次进入Yakit前端。Yakit前端有三个模式，除了手动劫持以外，**剩下的两个模式都会将响应自动放行（跳过此流程，继续后续流程）。**对于手动劫持的响应，用户可以手动为其添加颜色或标签，修改响应，提交数据或丢弃数据，**丢弃数据后不会再进入后续的流程。**  
  
**方法：afterRequest**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
后续，响应会进入插件/热加载中的beforeRequest方法进行处理，经过处理的请求可能被修改。  
```
// 在回复给浏览器之前的hook
afterRequest = func(ishttps, oreq/*原始请求*/ ,req/*hiajck修改之后的请求*/ ,orsp/*原始响应*/ ,rsp/*hijack修改后的响应*/){
}
```  
```
```  
  
**创建流量**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
根据最终的请求，响应以及前面标注的颜色，标签创建流量，并准备存储进入数据库。  
  
**第三次：内容规则**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
响应会经过每一个规则，对匹配到对应规则的流量进行染色或者添加标签。  
  
**方法：hijackSaveHTTPFlow**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
后续，流量会进入插件/热加载中的hijackSaveHTTPFlow方法再最后进入数据库之前进行处理，用户可以在此对流量进行修改（修改请求/修改响应/添加标签等）或者丢弃。**丢弃的流量不会存储进数据库中。**  
```
hijackSaveHTTPFlow = func(flow /* *yakit.HTTPFlow */, modify /* func(modified *yakit.HTTPFlow) */, drop/* func() */) {
}
```  
```
```  
  
**流量进入数据库**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
流量在进入数据库之前会等待前序的内容规则/hijackSaveHTTPFlow最多300毫秒，之后若流程完成或超时，都会将非丢弃的流量存储进数据库中。  
  
![](/articles/wechat2md-77d3be52a9fdd5b59875666fdfcc2224.png)  
  
![](/articles/wechat2md-98932c26282bb7a1991c9331fbb46e3f.png)  
  
  
**END**  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit 视频教程：  
https://space.bilibili.com/437503777Github下载地址：  
https://github.com/yaklang/yakitYakit官网下载地址：  
https://yaklang.com/Yakit安装文档：  
https://yaklang.com/products/download_and_installYakit使用文档：  
https://yaklang.com/products/intro/常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-382b711760574d429c6c8742ecfc1d9b.png)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
  
