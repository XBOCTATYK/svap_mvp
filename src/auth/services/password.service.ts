import { IPasswordService } from '../interfaces/password.service.interface';
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '../../config/config.service';

interface IPasswordEncryptOptions {
  password_salt: string;
}

@Injectable()
export class PasswordService implements IPasswordService<string> {
  private passwordCrypt: typeof bcrypt;
  private configService: ConfigService;
  private authOptions: IPasswordEncryptOptions;

  constructor(
    @Inject('PASSWORD_CRYPT') passwordCrypt,
    configService: ConfigService,
  ) {
    this.passwordCrypt = passwordCrypt;
    this.configService = configService;
    this.authOptions = this.configService.get(
      'auth',
    ) as IPasswordEncryptOptions;
  }

  compare(password: string, encrypted: string): Promise<boolean> {
    return this.passwordCrypt.compare(password, encrypted);
  }

  create(password: string): Promise<string> {
    return this.passwordCrypt.hash(password, this.authOptions.password_salt);
  }
}
