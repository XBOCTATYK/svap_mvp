import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { LocalJsonSource } from './config/sources/LocalJsonSource';

@Module({
  imports: [
    ConfigModule.register({
      env: process.env.NODE_ENV || 'development',
      sources: [
        new LocalJsonSource({
          path: './config',
          mainConfigName: 'main',
        }),
      ],
    }),
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: (...args: any[]) => {
        console.log(args);
        return {};
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
