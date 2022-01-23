export interface IPasswordService<T> {
  create(password: string): Promise<T>;
  compare(password: string, encrypted: string): Promise<boolean>;
}
