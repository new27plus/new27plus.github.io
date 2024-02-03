---
date: 2024-02-03
author: pengkk27
category:
  - Redis
tag:
  - Redis
  - 环境配置
---

# Redis安装

Redis官网：https://redis.io/

## 一、Redis的作用

在Redis的官网Quick Starts中描述是这样的：

> Redis can be used as a database, cache, streaming engine, message broker, and more. 
>
> Redis可以用做数据库、缓存、引擎流、消息代理等。

此外官网上还描述了很多Redis的一些功能。

但是按照最简单的理解，就是我们可以把这个东西当作一个缓存数据库来用。

## 二、下载安装

### 1. Redis Stack

在Redis官网的 Install 中，有两个选项。一个是 Redis ，另一个是 Redis Stack。

![Redis Install](/assets/images/Redis/redis-install/redis-install.png)

根据在官网中的描述来理解，Redis Stack是一个在原有的 Redis 的基础上增加了一些扩展的东西，更方便开发人员进行使用。

Redis Stack 官网描述：https://redis.io/docs/about/about-stack/

### 2. Redis安装

Redis 提供了不同系统的安装。这里在 Linux Ubuntu 系统下进行安装Redis。

在 Linux 下安装 Redis 只需要以此运行以下的命令即可（这些命令是官网提供的命令）：

```shell
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis
```

### 3. 测试

这一系列安装完成之后，在命令行输入：

```shell
redis-cli -h 127.0.0.1 -p 6379
```

如果安装成功，则就会成功连接到 Redis。之后就可以对 Redis 进行进一步的操作。

![连接Redis](/assets/images/Redis/redis-install/redis-connect.png)

