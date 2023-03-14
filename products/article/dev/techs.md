---
sidebar_position: 1
---

# Yakit 技术选型

## 公开的 gRPC Proto3

Yakit 的开源不只有源码开源，Yakit 与 Yak 最核心的通信接口也完全开源

[Yakit gRPC 全部接口](https://github.com/yaklang/yakit/blob/master/app/protos/grpc.proto)

换句话说，任何人只要了解 Yak 的接口，都可以编写一个 Yakit。

本片文档将会介绍 Yakit gRPC 中重要的 / 复杂的接口设计。
