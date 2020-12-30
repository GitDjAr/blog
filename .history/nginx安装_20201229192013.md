### nginx 安装
### 首先要安装 PCRE

>安装编译工具及库文件
```
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```

>PCRE 作用是让 Nginx 支持 Rewrite 功能。
```
cd /usr/local/src/

wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
```
>解压安装包:
```
tar zxcf pcre-8.35.tar.gz
```
3、进入安装包目录
>cd pcre-8.35