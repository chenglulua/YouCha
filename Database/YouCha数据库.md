# YouCha数据库

### **用户表 User：**

userId：用户号；主键；字符串类型；8位随机数字；

uName：用户昵称；字符串类型；

phone：用户电话；字符串类型；

password：密码；字符串类型；6-10位字母和数字组合；使用MD5加密；

### **饮品表Drink：**

drinkId：饮品号；主键；整型

dName：名称；字符串类型

typeId：类别；外键；整型；

details：详情；字符串类型

price：价格；整型；默认中杯价格

img：图片；字符串类型

brix：糖度；布尔类型；不可选0，可选1；无糖noneBrix、五分糖halfBrix、全糖totalBrix

temp：温度；布尔类型；不可选0，可选1；冰ice、常温normal、热hot

extra：小料；布尔类型；不可选0，可选1；珍珠pearl、芋圆taro、红豆ormosia、椰果coconut、布丁pudding；每个1元；

size：规格；布尔类型；不可选0，可选1；中杯middle，大杯large；大杯价格为中杯+2元

evStar：平均星级；外键；整型；1-5级

### **订单表Order：一种饮品对应一条数据（订单记录号），一个订单（订单号）有多条数据**

orderId：订单记录号；主键；整型

oId：订单号；整型

userId：用户号；外键；整型

time：时间；字符串类型

drinkId：饮品号；外键；整型

assId：评价号；外键；整型

oBrix：糖度；字符串类型；无糖none、五分糖half、全糖total

oTemp：温度；字符串类型；冰ice、常温normal、热hot

oExtra：小料；字符串类型；珍珠pearl、芋圆taro、红豆ormosia、椰果coconut、布丁pudding

oSize：规格；字符串类型；中杯middle，大杯large 

num：数量；整型

tPrice：总价；整型；num*price

code：取餐码；字符串类型；日期序号04008

status：订单状态；布尔类型；制作中0，已完成1

### **评价表Assessment：**

assId：评价号；主键；整型

drinkId：饮品号；外键；整型

star：星级；整型；1-5级

### **类型表Type：**

typeId；类型号；主键；整型

tName：类型名称；字符串类型