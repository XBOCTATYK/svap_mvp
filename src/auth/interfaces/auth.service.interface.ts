import { IdentifyingCredentials } from './credentials';

export interface IAuthService<T> {
  login(credentials: IdentifyingCredentials): Promise<T>;
  verify(credentials: T): Promise<boolean>;
}
