import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './UserProfile';
import { ContactType } from './ContactType';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  @Index({ unique: true })
  id: number;

  @ManyToOne(() => UserProfile, (profile) => profile.id)
  @Index()
  @JoinColumn()
  profile: UserProfile;

  @OneToOne(() => ContactType)
  @JoinColumn()
  type: ContactType;

  @Column()
  value: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updateDate: Date;
}
