# ラズパイでCO2はかる

### mh_z19センサーを利用 
### シリアル設定
rootで
```
sudo su -
raspi-config
```
```
3 Interface Options
                                                                      
　I1 SSH         Enable/disable remote command line access using SSH   
  I2 VNC         Enable/disable graphical remote desktop access        
  I3 SPI         Enable/disable automatic loading of SPI kernel module 
  I4 I2C         Enable/disable automatic loading of I2C kernel module 
○I5 Serial Port Enable/disable shell messages on the serial connection
  I6 1-Wire      Enable/disable one-wire interface                     
  I7 Remote GPIO Enable/disable remote access to GPIO pins             
```
Would you like a login shell to be accessible over serial? で「いいえ」を選択する  
Would you like the serial port hardware to be enabled? で「はい」を選択する  

### 再起動
```
reboot
```

### pip install
```
sudo su -
pip install mh_z19
apt update
apt upgrade
apt install python3-pip
pip install --break-system-packages --user mh_z19
python -m mh_z19
```
### 接続
mh_z19図
接続図

### 温度がとれる
```
pi@raspberrypi:~ $ sudo python -m mh_z19 --all
{"co2": 402, "temperature": 26, "TT": 66, "SS": 0, "UhUl": 13568}
pi@raspberrypi:~ $
```
