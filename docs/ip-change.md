# Ubuntu IP変更
## 設定
### /etc/netplan に設定ファイルがある
```
cd /etc/netplan
```
### ファイル編集
```
vi 00-installer-config.yaml
```
### 内容
```
network:
  ethernets:
    ens34:
      addresses:
      - 192.168.0.10/24
      nameservers:
        addresses:
          - 8.8.8.8
        search: []
      routes:
      - to: default
        via: 192.168.0.1
  version: 2
```
### 反映
```
netplan apply
```
### 参考 元ファイル(DHCP)
```
cat /etc/netplan/00-installer-config.yaml.bak
```
```
#This is the network config written by 'subiquity'
network:
  ethernets:
    ens34:
      dhcp4: true
   version: 2
```
### 参考

### 広告
[Amazon.co.jp: Ubuntuサーバー徹底入門 eBook : 中島 能和: 本](https://amzn.to/42xtmuB)

