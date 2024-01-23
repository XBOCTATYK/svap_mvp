import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import bcrypt from 'bcrypt';
import { PasswordService } from './services/password.service';
import { GrantsService } from './services/grants.service';
import { RepositoryModule } from '../repository/repository.module';
import { JwtService } from './services/jwt.service';

@Module({
  imports: [RepositoryModule],
  providers: [
    AuthService,
    PasswordService,
    GrantsService,
    JwtService,
    {
      provide: 'PASSWORD_CRYPT',
      useValue: bcrypt,
    },
  ],
})
export class AuthModule {}
