import { Injectable } from '@nestjs/common';
import { IAuthService } from '../interfaces/auth.service.interface';
import { IdentifyingCredentials } from '../interfaces/credentials';
import { PasswordService } from './password.service';
import { UserRepositoryService } from '../../repository/services/user-repository.service';
import { JwtService } from './jwt.service';
import { ConfigService } from '../../config/config.service';

export type AuthCredentials = {
  jwt: string;
};

type TokenConfig = {
  token_secret: string;
};

@Injectable()
export class AuthService implements IAuthService<AuthCredentials> {
  private readonly secret: string;
  constructor(
    private passwordService: PasswordService,
    private userRepositoryService: UserRepositoryService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    this.secret = (this.configService.get('auth') as TokenConfig).token_secret;
  }

  async signUp({ login, password }: IdentifyingCredentials): Promise<boolean> {
    const user = await this.userRepositoryService.findByLogin(login);

    if (user) {
      throw new Error('User exists!');
    }

    const encryptedPassword = await this.passwordService.create(password);
    await this.userRepositoryService.save(login, encryptedPassword);

    return true;
  }

  async login({
    login,
    password,
  }: IdentifyingCredentials): Promise<AuthCredentials> {
    const user = await this.userRepositoryService.findOne(login);

    if (!user) {
      throw new Error('User doesnt exists!');
    }

    const passwordIsVerified = this.passwordService.compare(
      password,
      user.password,
    );

    if (!passwordIsVerified) {
      throw new Error('Incorrect login or password!');
    }

    return this.jwtService.createToken({ login, password }, this.secret);
  }

  async verify({ jwt }: AuthCredentials): Promise<boolean> {
    const tokenInfo = this.jwtService.verifyAndExtractData(
      { jwt },
      this.secret,
    );

    return tokenInfo != null;
  }
}
