import { Injectable } from '@nestjs/common';
import { IAuthService } from '../interfaces/auth.service.interface';
import { IdentifyingCredentials } from '../interfaces/credentials';

type AuthCredentials = {
  jwt: string;
};

@Injectable()
export class AuthService implements IAuthService<AuthCredentials> {
  login(credentials: IdentifyingCredentials): Promise<AuthCredentials> {
    return Promise.resolve(undefined);
  }

  verify(credentials: AuthCredentials): Promise<boolean> {
    return Promise.resolve(false);
  }
}
