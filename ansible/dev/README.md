# 自动化配置（优化）开发(或者生产）环境

- 开启Bash自动补全(扩展匹配) scop/bash-completion
```
shopt -s extglob
```
- 安装vim/python3/oh-myzsh

## 大数据套件安装源

```
# hadoop
wget https://dlcdn.apache.org/hadoop/common/hadoop-3.3.1/hadoop-3.3.1-aarch64.tar.gz

# zookeeper
wget https://downloads.apache.org/zookeeper/zookeeper-3.7.0/apache-zookeeper-3.7.0-bin.tar.gz

# hbase 安装
# wget http://archive.apache.org/dist/hbase/stable/hbase-2.4.9-src.tar.gz
wget http://mirror.bit.edu.cn/apache/hbase/2.4.9/hbase-2.4.9-client-bin.tar.gz
wget http://mirror.bit.edu.cn/apache/hbase/2.4.9/hbase-2.4.9-bin.tar.gz
```