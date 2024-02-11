# ZABBIX構築 VMware版

### ダウンロード
[https://www.zabbix.com/jp/download_appliance](https://www.zabbix.com/jp/download_appliance)

### vmdkは変換必要だった
```
vmkfstools -i zabbix-disk1.vmdk.org -d thin zabbix-disk1.vmdk
```
### IPアドレス 一時的に変更
```
ip a add 192.168.0.10/255.255.255.0 dev eth0
ip link set eth0 up
ip r add 192.168.0.10/255.255.255.0 metric 10 via 192.168.0.1 dev eth0
```

### IPアドレス 恒久的に変更
```
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```
```
DEVICE="eth0"
BOOTPROTO=none
NM_CONTROLLED="no"
PERSISTENT_DHCLIENT=1
ONBOOT="yes"
TYPE=Ethernet
IPV4_FAILURE_FATAL=yes
NAME="eth0"
IPADDR=192.168.0.10
PREFIX=24
PEERDNS=no
DNS1=192.168.0.1
DEFROUTE=yes
GATEWAY=192.168.0.1
```

### update
```
dnf update
```

### vmtoolsインストール
```
dnf install open-vm-tools
systemctl enable vmtoolsd
systemctl start vmtoolsd
systemctl status vmtoolsd
```
メモ
```
systemctl list-unit-files -t service
```

### 日本語化
```
dnf install zabbix-web-japanese
```

### GUI
http://192.168.0.1
ユーザ：Admin  
パスワード：zabbix  

User setting
タイムゾーン
言語  
などを設定する

