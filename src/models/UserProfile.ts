import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Gender } from './Gender';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @OneToOne(() => User)
  account: User;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  @OneToOne(() => Gender)
  gender: Gender;

  @Column()
  birthDate: Date;
}
