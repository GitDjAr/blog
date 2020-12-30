# linux 使用

### 下载 wget 

#### 用于post get 请求

```
yum -y install wget
```

#### 使用wget 下载node
```
wget https://npm.taobao.org/mirrors/node/v14.15.3/node-v14.15.3-linux-x64.tar.xz
```
#### 解压  node指定文件
```
tar -xvf node-v14.15.3-linux-x64.tar.xz
```
#### node重命名 nodejs
``` 
mv node-v14.15.3-linux-x64 nodejs
```
#### 进入解压目的bin中 ---我这里解压到根目录
##### 查看是否安装成功
```
cd /nodejs/bin
./node -v
```

#### 配置软连接(映射到全局使用) ---
因为我的nodejs在根目录,就直接/nodejs/bin/node & /nodejs/bin/npm
```
ln  -s /nodejs/bin/node /usr/local/bin
ln  -s /nodejs/bin/npm /usr/local/bin
```
