#!/bin/sh
find ./ -name ".DS_Store" -depth -exec rm {} \;
GIT_USER=v1ll4n yarn deploy
