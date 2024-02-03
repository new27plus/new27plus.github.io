---
date: 2024-02-03
author: pengkk27
category:
  - Redis
tag:
  - Redis
  - 入门教程
---
# Redis 简单使用（数据结构存储）

通过命令行连接到Redis之后，就可以用Redis来存储和读取数据。

> 这里使用命令行的方式来操作。方便理解学习Reids。之后可以使用图形化界面来操作。

## 一、存储字符串

Redis中存储数据为键值对的模式，前面是key，后面是value。

Redis 字符串存储字节序列。

```shell
# 存储了一个键为bike:1，值为 Process 134 的键值对。
SET bike:1 "Process 134"
```

![设置值](/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/Set-key-value.png)

```shell
# 读取键为 bike:1 的值
GET bike:1
```

![读取值](/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/get-key-value.png)

## 二、存储对象

除了这种单独的键值对，Redis还可以存储和访问对象类型。

Reids中存储对象使用哈希表的方式来存储，和直接的存储字符串不同，是使用 `HSET`来存储。

```shell
HSET bike:1 model Deimos brand Ergonom type 'Enduro bikes' price 4972
```

这条命令运行之前，需要将上次一存储的`bike:1`这条数据先删除，否则会报错。

这条命令的分析如下：

* `HSET`表示这是一个使用散列表存储的命令；
* `bike:1`表示这条存储所对应的键；
* 后面的数据为两两一组：
  * `model Deimos`：key为`model`, value为`Deimos`
  * `brand Ergonom`：key为`brand`, value为`Ergonom`
  * `type 'Enduro bikes'`：key为``type`, value为`'Enduro bikes'`
  * `price 4972`：key为``price`, value为`4972`

![存储对象](/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/HSET-key-value.png)

相对的，读取这些数据的时候需要使用的命令为`HGET`，或 `HGETALL`

```shell
HGETALL bike:1
```

`HGETALL`是读取所有的数据，将所有的数据都获取出来：

![获取所有](/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/HGETALL.png)

如果是要读取对应值的数据，则需要这样输入命令（在后面加上需要读取的key的名称）：

```shell
HGET bike:1 model
```

![获取对象单独的数据](/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/HGET.png)