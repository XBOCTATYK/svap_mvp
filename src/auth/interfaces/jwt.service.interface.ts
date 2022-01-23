import { ITokenInfo } from './token-info.interface';

export interface IJwtService<T, K> {
  createToken(identity: T, secret: string): K;
  verifyAndExtractData(token: K, secret: string): ITokenInfo;
}
