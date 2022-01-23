import { IdentifyingCredentials } from './credentials';

export interface IAuthService<T> {
  signUp(credentials: IdentifyingCredentials): Promise<boolean>;
  login(credentials: IdentifyingCredentials): Promise<T>;
  verify(credentials: T): Promise<boolean>;
}
