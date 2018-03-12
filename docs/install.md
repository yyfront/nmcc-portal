# 快速开始

## 本节目标
1. 安装NMCC-CLI。
2. 通过NMCC-CLI命令生成项目。
3. 运行项目。

### 安装 :
通过npm命令全局安装NMCC-CLI。
```
npm install -g nmcc-cli
```

### 生成项目
使用NMCC-CLI的 ``nmcc new <projectName>``命令生成一个项目。

```
# 创建一个基于nest.js的新项目
$ nmcc new my-project
```

### 运行项目
进入项目目录，安装依赖
```
$ cd my-project
$ npm install
```
执行应用本身命令
```
$ npm run start // 本地启动应用
$ npm run build // TypeScript编译
$ npm run e2e   // e2e测试
```