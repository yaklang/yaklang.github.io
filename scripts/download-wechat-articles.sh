#!/bin/bash

# 检查是否安装了 wechat2md
if ! command -v wechat2md &> /dev/null; then
    echo "wechat2md 未安装，正在安装..."
    go install github.com/VillanCh/wechat2md@latest
    
    # 再次检查是否安装成功
    if ! command -v wechat2md &> /dev/null; then
        echo "安装 wechat2md 失败，请确保已安装 Go 并设置正确的 GOPATH"
        exit 1
    fi
fi

# 检查参数数量
if [ "$#" -ne 2 ]; then
    echo "使用方法: $0 <输出文件名> <微信文章URL>"
    echo "例如: $0 first-poc.md https://mp.weixin.qq.com/s/xxx"
    exit 1
fi

# 获取参数
OUTPUT_FILE="$1"
ARTICLE_URL="$2"

# 创建必要的目录
mkdir -p articles
mkdir -p static/articles

# 执行 wechat2md 命令
wechat2md --dir articles \
          -o "$OUTPUT_FILE" \
          --abs \
          --static static/articles \
          --link-prefix /articles/ \
          "$ARTICLE_URL"

# 检查命令执行结果
if [ $? -eq 0 ]; then
    echo "转换成功！输出文件：articles/$OUTPUT_FILE"
else
    echo "转换失败，请检查URL是否正确或网络连接是否正常"
fi
