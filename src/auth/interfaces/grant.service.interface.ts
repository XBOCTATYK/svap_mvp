export interface Grant {
  id: string;
  name: string;
}

export interface IGrantService<T> {
  getGrantsByCredentials(credentials: T): Grant[];
  getUsersWithGrant(grant: Grant): string[];
  getUsersWithGrants(grants: Grant[]): string[];
}
