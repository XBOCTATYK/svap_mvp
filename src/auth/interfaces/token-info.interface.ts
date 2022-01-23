export interface ITokenInfo {
  payload: {
    user: string;
    expires: number;
  };
  subscription: string;
}
