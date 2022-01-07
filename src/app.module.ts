import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { LocalJsonSource } from './config/sources/LocalJsonSource';
import { RepositoryModule } from './repository/repository.module';

const ConfigDynamicModule = ConfigModule.register({
  global: true,
  sources: [
    new LocalJsonSource({ path: './config', configName: 'main' }),
    new LocalJsonSource({
      path: './config',
      configName: process.env.NODE_ENV || 'development',
    }),
    new LocalJsonSource({ path: './config', configName: '.secrets' }),
  ],
});

@Module({
  imports: [ConfigDynamicModule, AuthModule, RepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
