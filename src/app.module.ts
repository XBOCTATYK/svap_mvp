import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { LocalJsonSource } from './config/sources/LocalJsonSource';
import { RepositoryModule } from './repository/repository.module';

const CONFIG_PATH = './config';
const DEFAULT_ENV = 'development';

const ConfigDynamicModule = ConfigModule.register({
  global: true,
  sources: [
    new LocalJsonSource({ path: CONFIG_PATH, configName: 'main' }),
    new LocalJsonSource({
      path: CONFIG_PATH,
      configName: process.env.NODE_ENV || DEFAULT_ENV,
    }),
    new LocalJsonSource({ path: CONFIG_PATH, configName: '.secrets' }),
  ],
});

@Module({
  imports: [ConfigDynamicModule, AuthModule, RepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
