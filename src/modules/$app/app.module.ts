import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { InitModule } from '../$init/init.module';

@Module({
    modules: [InitModule]
})
export class ApplicationModule implements NestModule {
    public configure (consumer: MiddlewaresConsumer): void {

    }
}