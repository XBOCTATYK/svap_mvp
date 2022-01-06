import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RepositoryModule } from './repository/repository.module';
import { Repository } from './repository';

@Module({
  imports: [AuthModule, RepositoryModule],
  controllers: [AppController],
  providers: [AppService, Repository],
})
export class AppModule {}
