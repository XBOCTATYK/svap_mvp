import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { Gender } from './Gender';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
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
}
