# 命令
## new
`new`命令用于初始化项目

使用方法 :
   * `$ nmcc new <name>`
    
例子 : 
   * `$ nmcc new my-app`

`nmcc new my-app`该命令将会创建一个my-app项目

## generate (or g)
`generate`命令用于生成模板代码

使用方法 :
   * `$ nmcc generate <name> <type>`
    
例子 :
   * `$ nmcc g user`
   * `$ nmcc g login controller`

`nmcc g user`命令将会创建一个user目录，该目录下会生成controller,module, component 模板文件

`nmcc g login controller`命令将会创建一个login目录，该目录下会生成controller模板文件

type可指定如下选项 :
   * all(默认)
   * module
   * controller
   * component / service
   * middleware
   * pipe
   * gateway

## update 
`update`命令用于更新底层公共模块

使用方法 : 
   * `$ nmcc update` 
