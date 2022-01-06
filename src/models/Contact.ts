import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserProfile } from './UserProfile';
import { ContactType } from './ContactType';

@Entity()
class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserProfile)
  @Column()
  profile: UserProfile;

  @OneToOne(() => ContactType)
  @Column()
  type: ContactType;

  @Column()
  value: string;
}
