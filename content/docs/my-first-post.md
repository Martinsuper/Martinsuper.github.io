---
title: "我的第一篇文章"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---
# 我的第一篇文章
我的第一篇博客，欢迎大家关注。
Hugo 是一个静态网站生成器，它使用 Go 语言开发。

> 最近部署前端项目的时候感觉很麻烦，每次改好代码都需要手动上传文件到阿里云OSS，今天决定使用 GitHub Actions 自动化打包部署到阿里云 OSS。

## 设置 GitHub 机密变量
> 因为阿里云上传需要 access_key_id、access_key_secret 等敏感信息，这种信息不方法放到仓库或者 workflow 里面，放到 GitHub secrets 里面就比较合适了。

配置如下图

![Description](https://mrtduan.oss-cn-shanghai.aliyuncs.com/blog/b9e0c968-d7f8-4a78-af47-a2023908c4b6.png)

配置 GitHub Actions
![Description](https://mrtduan.oss-cn-shanghai.aliyuncs.com/blog/fc3e98bc-262d-462c-9d7f-52f6cffb2d3e.png)
具体配置如下图：

``` yml
name: Deploy to Aliyun OSS
on:
  push:
    branches:
      - main 
jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'

    - name: Install dependencies
      working-directory: ./seed-vite  
      run: |
          npm install 
          npm run build  
    - name: Install ossutil
      run: |
        curl https://gosspublic.alicdn.com/ossutil/install.sh | sudo bash
    - name: Deploy to OSS
      working-directory: ./seed-vite  
      env:
        OSS_ACCESS_KEY_ID: ${{ secrets.ALIPAY_ACCESS_KEY_ID }}
        OSS_ACCESS_KEY_SECRET: ${{ secrets.ALIPAY_ACCESS_KEY_SECRET }}
        OSS_BUCKET: ${{ secrets.OSS_BUCKET_NAME }}
        OSS_ENDPOINT: ${{ secrets.OSS_ENDPOINT }}
      run: |
        ossutil config -e $OSS_ENDPOINT -i $OSS_ACCESS_KEY_ID -k $OSS_ACCESS_KEY_SECRET
        ossutil cp -rf ./dist oss://$OSS_BUCKET/ --acl public-read
```