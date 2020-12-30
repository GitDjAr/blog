## linux ip 静态化
#### 1.打开配置文件
>vi /etc/sysconfig/network-scripts/eth0

#### 2.修改配置文件 ，设置固定ip地址 <p style='color:red'>设置BOOTPROTO为static</p>
>BOOTPROTO='static'

#### 3.添加配置文件  
  + dns
  + ip地址
  + 网关
  + 子网掩码 RedHat，不同版本的Linux的配置是不一样的

```
DNS1=192.168.0.1
IPADDR=192.168.1.122
GATEWAY=192.168.1.1
PREFIX=24
```
#### 4.重启
>service notwork restart

[配置静态ip 无网络问题][http://www.baidu.com]