import { Injectable } from '@nestjs/common';
import { Grant, IGrantService } from '../interfaces/grant.service.interface';

@Injectable()
export class GrantsService implements IGrantService<any> {
  getGrantsByCredentials(credentials: any): Grant[] {
    return [];
  }

  getUsersWithGrant(grant: Grant): string[] {
    return [];
  }

  getUsersWithGrants(grants: Grant[]): string[] {
    return [];
  }
}
