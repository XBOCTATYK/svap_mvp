import { Module } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/User';
import { UserProfile } from '../models/UserProfile';
import { BlockedUser } from '../models/BlockedUser';
import { Gender } from '../models/Gender';
import { Contact } from '../models/Contact';
import { ContactType } from '../models/ContactType';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get().db,
          autoLoadEntities: false,
          entities: [
            User,
            UserProfile,
            BlockedUser,
            UserProfile,
            Gender,
            Contact,
            ContactType,
          ],
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class RepositoryModule {}
