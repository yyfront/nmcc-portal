# 命令行介绍
NMCC-CLI提供了一些命令行，例如:

* [new](#new) 
* [generate (or g)](#generate-or-g)
* [update](#update)

## new
`new`命令用于初始化项目, 使用方法 :
```
$ nmcc new <ProjectName>
```
``<ProjectName>``必选，生成项目的名字。
    
创建一个名字为``my-app``的项目，例子 : 
```
$ nmcc new my-app
```

## generate (or g)
`generate`命令用于生成模板代码

使用方法 :
```
$ nmcc generate <name> <type>
```
``<name>``必选，生成模板的名字。

``<type>``生成模板的类型, 可指定如下选项：
    
   * all(默认)
   * module
   * controller
   * component / service
   * middleware
   * pipe
   * gateway
   
例子 :
```
$ nmcc g user
$ nmcc g login controller
```
`nmcc g user`命令将会创建一个user目录，该目录下会生成controller,module, component 模板文件

`nmcc g login controller`命令将会创建一个login目录，该目录下会生成controller模板文件
## update 
`update`命令用于更新底层公共模块

使用方法 : 
   * `$ nmcc update` 
