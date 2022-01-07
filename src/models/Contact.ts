import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserProfile } from './UserProfile';
import { ContactType } from './ContactType';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;

  @OneToOne(() => ContactType)
  @JoinColumn()
  type: ContactType;

  @Column()
  value: string;
}
