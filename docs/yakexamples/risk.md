---
sidebar_position: 130
---

# 漏洞检测：DNSLog

## 新建一个 dnslog

```go
#通过 risk 中的 NewDNSLogDomain 来获取一个二级域名和token 
server,token,err = risk.NewDNSLogDomain()

#token 就是二级域名的字符串
println("dns server addr: ",server)
println("dns server check token:", token)
```

上述代码执行结果

```text
dns server addr:  kdxpxbvuzf.dnstunnel.run
dns server check token: kdxpxbvuzf
```

## 查询 dnslog 接收

```go
#这里我使用上面的 dnstoken  kdxpxbvuzf
#通过函数 CheckDNSLogByToken 以及 token 来查询 dnslog 的结果

dump(risk.CheckDNSLogByToken("kdxpxbvuzf"))
```

结果如下

```text
([]interface {}) (len=2 cap=2) {
 ([]*tpb.DNSLogEvent) <nil>,
 (interface {}) <nil>
}
```

```text
#我这边通过 ping 来触发 dns 请求  ping -c 1 kdxpxbvuzf.dnstunnel.run
#然后在进行查询获得结果如下
([]interface {}) (len=2 cap=2) {
 ([]*tpb.DNSLogEvent) (len=2 cap=2) {
  (*tpb.DNSLogEvent)(0xc00020c140)(Type:"A" Token:"kdxpxbvuzf" Domain:"kdxpxbvuzf.dnstunnel.run" RemoteAddr:"172.253.6.2:36684" RemoteIP:"172.253.6.2" RemotePort:36684 Raw:";; opcode: QUERY, status: NOERROR, id: 4197\n;; flags: cd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;kdxpxbvuzf.dnstunnel.run.\tIN\t A\n\n;; ADDITIONAL SECTION:\n\n;; OPT PSEUDOSECTION:\n; EDNS: version 0; flags: do; udp: 1400\n; SUBNET: 111.198.29.0/24/0\n" Timestamp:1646278342),
  (*tpb.DNSLogEvent)(0xc00020c1e0)(Type:"A" Token:"kdxpxbvuzf" Domain:"kdxpxbvuzf.dnstunnel.run" RemoteAddr:"173.194.171.4:54616" RemoteIP:"173.194.171.4" RemotePort:54616 Raw:";; opcode: QUERY, status: NOERROR, id: 4934\n;; flags: cd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;kdxpxbvuzf.dnstunnel.run.\tIN\t A\n\n;; ADDITIONAL SECTION:\n\n;; OPT PSEUDOSECTION:\n; EDNS: version 0; flags: do; udp: 1400\n; SUBNET: 111.198.29.0/24/0\n" Timestamp:1646278343)
 },
 (interface {}) <nil>
}

#成功获取到反连信息
```

## 如何编写反连服务器脚本

```shell
1、vps 使用 yak bridge --secret [your-pass] 来进行启动 bridge
```

![img.png](../../static/img/yakexample/risk_start_bridge.png)

```go
#通过环境变量来进行配置 yak 脚本链接 bridge
YAK_BRIDGE_ADDR                = "YAK_BRIDGE_ADDR"
YAK_BRIDGE_SECRET              = "YAK_BRIDGE_SECRET"

#yak bridge --secret od686 
os.Setenv(YAK_BRIDGE_SECRET/*type: string*/,"od686" /*type: string*/)
os.Setenv(YAK_BRIDGE_ADDR, "***.**.**.***:64333"/*type: string*/)

#通过 risk 获取到 token 和ip端口
log.setLevel("info")
token, hostPort, err := risk.NewRandomPortTrigger(risk.type("reverse-http"), risk.typeVerbose("RMI反连"), risk.title("test"))
if err != nil {
    log.info(err.Error())
}
    if token == "" {
    log.info("未配置 Yak Bridge 作为公网映射，无法获取随机端口")
}

log.info("host: %s", hostPort/*type ...any*/)
log.info("token: %s",token/*type ...any*/)
```

运行结果如下

```text
[INFO] 2022-03-03 16:32:19 +0800 [yaki-code-3541846741] host: **.**.**.**:56579
[INFO] 2022-03-03 16:32:19 +0800 [yaki-code-3541846741] token: qOeZvvgr
```

```go
//通过risk.CheckRandomTriggerByToken 函数进行查询是否有反连
dump(risk.CheckRandomTriggerByToken("YcEhgllg"))
```

运行结果

```text
([]interface {}) (len=2 cap=2) {
 (*tpb.RandomPortTriggerEvent)(<nil>),
 (*status.Error)(0xc0005ba0e8)(rpc error: code = Unknown desc = empty token port mapped)
}
```

手动访问 http://**.**.**.**:56579/
![img.png](../../static/img/yakexample/risk_access_http.png)

```text
//再次执行 dump(risk.CheckRandomTriggerByToken("YcEhgllg"))
结果如下
([]interface {}) (len=2 cap=2) {
 (*tpb.RandomPortTriggerEvent)(0xc0001b0380)(RemoteAddr:"**.**.**.**:57262" RemoteIP:"**.**.**.**" RemotePort:57262 LocalPort:56579 LocalPortCachedHistoryConnectionCount:5 TriggerTimestamp:1646297435 Timestamp:1646297464),
 (interface {}) <nil>
}
```