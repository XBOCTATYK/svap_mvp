import { Module } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/User';
import { UserProfile } from '../models/UserProfile';
import { BlockedUser } from '../models/BlockedUser';
import { Gender } from '../models/Gender';
import { Contact } from '../models/Contact';
import { ContactType } from '../models/ContactType';
import { Grant } from '../models/Grant';
import { GrantType } from '../models/GrantType';
import { RefreshToken } from '../models/RefreshToken';
import { Psycho } from '../models/Psycho';
import { Session } from '../models/Session';
import { UserRepositoryService } from './services/user-repository.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get('db'),
          autoLoadEntities: false,
          entities: [
            User,
            BlockedUser,
            UserProfile,
            Psycho,
            Gender,
            Contact,
            ContactType,
            Grant,
            GrantType,
            RefreshToken,
            Session,
          ],
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    UserRepositoryService,
    {
      provide: 'UserRepository',
      useClass: User,
    },
  ],
  exports: [UserRepositoryService],
})
export class RepositoryModule {}
