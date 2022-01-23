import { Injectable } from '@nestjs/common';
import { IJwtService } from '../interfaces/jwt.service.interface';
import { IdentifyingCredentials } from '../interfaces/credentials';
import { AuthCredentials } from './auth.service';
import { ITokenInfo } from '../interfaces/token-info.interface';
import crypto from 'crypto-js';
import { base64 } from '../../lib/base64';

@Injectable()
export class JwtService
  implements IJwtService<IdentifyingCredentials, AuthCredentials>
{
  createToken(
    { login }: IdentifyingCredentials,
    secret: string,
  ): AuthCredentials {
    const header = JSON.stringify({
      alg: 'HS256',
      typ: 'JWT',
    });

    const payload = JSON.stringify({
      user: login,
      expires: Date.now() + 900000,
    });

    const headerBase64 = base64.encode(header);
    const payloadBase64 = base64.encode(payload);
    const signature = crypto
      .HmacSHA256(`${headerBase64}.${payloadBase64}`, secret)
      .toString();

    return {
      jwt: `${headerBase64}.${payloadBase64}.${signature}`,
    };
  }

  verifyAndExtractData(
    token: AuthCredentials,
    secret: string,
  ): ITokenInfo | null {
    const [header, payload, signature] = token.jwt.split('.');

    const expectedSignature = crypto
      .HmacSHA256(`${header}.${payload}`, secret)
      .toString();

    if (expectedSignature !== signature) {
      return null;
    }

    return {
      payload: JSON.parse(crypto.enc.Base64.parse(payload).toString()),
      subscription: signature,
    };
  }
}
