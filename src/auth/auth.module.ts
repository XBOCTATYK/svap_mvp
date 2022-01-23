import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import bcrypt from 'bcrypt';
import { PasswordService } from './services/password.service';
import { GrantsService } from './services/grants.service';

@Module({
  providers: [
    AuthService,
    PasswordService,
    GrantsService,
    {
      provide: 'PASSWORD_CRYPT',
      useValue: bcrypt,
    },
  ],
})
export class AuthModule {}
