#!/bin/bash

set -e

yarn install && yarn build

IMG_NAMEDATE=v1ll4n/yaklang-io-frontend:`date +%Y%m%d`
IMG_NAMELATEST=v1ll4n/yaklang-io-frontend:latest

echo "LATEST Image: " $IMG_NAMELATEST
echo "DATE   Image: " $IMG_NAMEDATE

docker build . -t $IMG_NAMELATEST
docker tag $IMG_NAMELATEST $IMG_NAMEDATE

docker push $IMG_NAMEDATE
docker push $IMG_NAMELATEST