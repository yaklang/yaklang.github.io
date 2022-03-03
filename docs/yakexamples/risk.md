---
sidebar_position: 3
---

#新建一个dnslog
```azure
server,token,err = risk.NewDNSLogDomain()

println("dns server addr: ",server)
println("dns server check token:", token)
```

上述代码执行结果
```azure
dns server addr:  kdxpxbvuzf.dnstunnel.run
dns server check token: kdxpxbvuzf
```
#查询dnslog接收
```azure
//这里我使用上面的dnstoken  kdxpxbvuzf
dump(risk.CheckDNSLogByToken("kdxpxbvuzf"))
```
结果如下
```azure
([]interface {}) (len=2 cap=2) {
 ([]*tpb.DNSLogEvent) <nil>,
 (interface {}) <nil>
}
```
```azure
//我这边通过ping 来触发dns请求  ping -c 1 kdxpxbvuzf.dnstunnel.run
//然后在进行查询 获得结果如下
([]interface {}) (len=2 cap=2) {
 ([]*tpb.DNSLogEvent) (len=2 cap=2) {
  (*tpb.DNSLogEvent)(0xc00020c140)(Type:"A" Token:"kdxpxbvuzf" Domain:"kdxpxbvuzf.dnstunnel.run" RemoteAddr:"172.253.6.2:36684" RemoteIP:"172.253.6.2" RemotePort:36684 Raw:";; opcode: QUERY, status: NOERROR, id: 4197\n;; flags: cd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;kdxpxbvuzf.dnstunnel.run.\tIN\t A\n\n;; ADDITIONAL SECTION:\n\n;; OPT PSEUDOSECTION:\n; EDNS: version 0; flags: do; udp: 1400\n; SUBNET: 111.198.29.0/24/0\n" Timestamp:1646278342),
  (*tpb.DNSLogEvent)(0xc00020c1e0)(Type:"A" Token:"kdxpxbvuzf" Domain:"kdxpxbvuzf.dnstunnel.run" RemoteAddr:"173.194.171.4:54616" RemoteIP:"173.194.171.4" RemotePort:54616 Raw:";; opcode: QUERY, status: NOERROR, id: 4934\n;; flags: cd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;kdxpxbvuzf.dnstunnel.run.\tIN\t A\n\n;; ADDITIONAL SECTION:\n\n;; OPT PSEUDOSECTION:\n; EDNS: version 0; flags: do; udp: 1400\n; SUBNET: 111.198.29.0/24/0\n" Timestamp:1646278343)
 },
 (interface {}) <nil>
}
所以可以通过判断CheckDNSLogByToken返回来的DNSLogEvent数量来进行判断dns是否触发
```
