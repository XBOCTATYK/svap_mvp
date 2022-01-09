export interface IJwtService<T, K> {
  createToken(identity: T): K;
  extractData(token: K): T;
}
