---
date: 2020-07-28
category:
  - Java
tag:
  - Java
  - 环境配置
---

# JDK简单介绍

* JDK Java开发工具包
* JRE Java运行环境
* JVM Java虚拟机

<!--more-->

---

# 下载JDK

这里使用的是JDK 13做演示，其他版本都是一样的。

![Java安装包](/assets/images/JDK_Install/jdk.png)


[Orale官网](https://www.oracle.com/cn/java/technologies/)

[华为开源镜像站](https://repo.huaweicloud.com/java/jdk/)

由于在国内官网的下载速度比较慢，所以建议用华为镜像站来进行下载JDK。但是华为的镜像站里面提供的版本有限。但是常用的 Java 8 和 Java 11 还是有的。

---

# 安装JDK

安装JDK。

这里使用的是安装应用程序进行安装。还有一种下载之后是压缩包的形式。压缩包的版本只需要直接解压即可，这里就不作多的演示。

![2.jpg](/assets/images/JDK_Install/jdk安装1.jpg)

选择JDK所要安装到的文件目录

![3.jpg](/assets/images/JDK_Install/jdk安装2.jpg)

![4.jpg](/assets/images/JDK_Install/jdk安装3.jpg)

![5.jpg](/assets/images/JDK_Install/jdk安装4.jpg)

安装完成

---

# 配置Java环境变量

右击此电脑，点击属性，进入高级系统设置

点击高级下面的环境变量

![8.png](/assets/images/JDK_Install/jdk环境变量配置1.png)

首先新建一个系统变量。

变量名为 **JAVA_HOME**
变量值填入JDK安装的地址，或者压缩包解压之后的地址。

![12.png](/assets/images/JDK_Install/jdk环境变量配置5.png)


然后在下面的系统变量中找到path，双击进入

![9.png](/assets/images/JDK_Install/jdk环境变量配置2.png)

点击新建，将刚才安装JDK的目录复制进去，点击确定
(这里其实是放的JAVA_HOME，这种就要写的内容为`%JAVA_HOME%`当然，这样放也是没有问题的。)


![10.png](/assets/images/JDK_Install/jdk环境变量配置3.png)
在系统变量中点击新建，
变量名为 **classpath**
变量值为 **.%JAVA_HOME%\lib\tools.jar;%JAVA_HOME%\lib\dt.jar**

(在JDK 11之后的没有lib这些东西，可以不用设置。)


![11.png](/assets/images/JDK_Install/jdk环境变量配置4.png)

以上步骤操作完成之后，JDK就算安装完成了。

然后打开命令行测试是否有效。
在命令行或者终端输入
> javac

然后回车，如图显示，即为配置完成

![13.png](/assets/images/JDK_Install/jdk环境变量配置6.png)

接着输入
> java

回车，如图显示即为配置完成


![14.jpg](/assets/images/JDK_Install/jdk环境变量配置7.png)