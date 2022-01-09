import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Gender } from './Gender';
import { Contact } from './Contact';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  @Index({ unique: true })
  id: number;

  @OneToOne(() => User)
  @Index({ unique: true })
  @JoinColumn()
  account: User;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @OneToOne(() => Gender)
  @JoinColumn()
  gender: Gender;

  @Column()
  birthDate: Date;

  @OneToMany(() => Contact, (contact) => contact)
  contacts: Contact[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updateDate: Date;
}
