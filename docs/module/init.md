# init

#### 目录结构

```
└── modules
    ├── $app
    └── $init
        ├── init.service.ts
        ├── init.module.ts
        └── providers
                ├── config.provider.ts
                └── util.provider.ts
```
#### InitModule
``InitService``、``ConfigProvider``和``UtilProvider``都属于在应用程序初始化时就应该提供的。
所以，都应该导入``InitModule``中。
```
import { Global, Module } from '@nestjs/common';
import { ConfigProvider } from './providers/config.provider';
import { UtilProvider } from './providers/util.provider';

@Global()
@Module({
    modules: [],
    components: [ConfigProvider, UtilProvider],
    exports: [ConfigProvider, UtilProvider]
})
export class InitModule {
}
```
``ConfigProvider``可以根据不同的环境读取不同的配置文件，并把读取的结果放在全局域中。
```
if (process.env.NODE_ENV === 'production') {
    config = parseConfigFile('prod');
} else {
    config = parseConfigFile();
}

export const ConfigProvider = {
    provide: 'config',
    useValue: config
};
```

``UtilProvider``可以用来放抽象出来的的工具方法，方便复用和维护。
```
export const UtilProvider = {
    provide: 'util',
    useValue: {
        utilFunc: ()=>{
            return true;
        }
    }
};
```
