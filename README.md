<<<<<<< HEAD
# 微光筑梦前台

#### 介绍
{**以下是 Gitee 平台说明，您可以替换此简介**
Gitee 是 OSCHINA 推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用 Gitee 实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
=======
# 微光筑梦

## 技术栈
* vue3 + TS + springboot3 + mysql

## 前台
* 首页展示
* 登录界面/注册界面
* 申请志愿记录
* 个人信息(志愿记录，时长等)

## 后台
* 登录界面
* 拦截器
* 用户管理(增删改查)
* 志愿记录审核/管理

## 数据库
### 用户表
* id(主键, 唯一)
* 账号(邮箱)
* 密码(md5)
* ->用户类型表id
* 注册时间
* 状态(0正常, 1删除)
### 登录日志表
* id(主键，唯一)
* ->用户表id
* 登录时间
### 志愿记录表
* id(主键，唯一)
* 课程开始时间
* 课程结束时间
* 申请时间
* 状态(0正常, 1删除, 2审核中, 3审核不通过/封禁)
### 志愿记录人员表
* id(主键，唯一)
* ->志愿记录表id
* ->用户表id


### 用户类型表
* id(主键，唯一)
* 类型(用户，管理员)
>>>>>>> ec9dedd (项目初始化)
