# app

#### 目录结构
```
└── modules
    └── $app
        └── app.module.ts
```

每一个应用程序都至少有一个module，而app文件定义的``ApplicationModule``就是这个程序的``root module``。

```ts
import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';

@Module({})
export class ApplicationModule implements NestModule {
    public configure (consumer: MiddlewaresConsumer): void {

    }
}
```
当有其他module需要被加载时，我们只需要在app文件中导入其他module。
例如我们有一个``InitModule``、``UserModule``
```ts
import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { InitModule } from '../$init/init.module';
import { UserModule } from '../user/user.module'

@Module({
    modules: [InitModule, UserModule]
})
export class ApplicationModule implements NestModule {
    public configure (consumer: MiddlewaresConsumer): void {

    }
}
```