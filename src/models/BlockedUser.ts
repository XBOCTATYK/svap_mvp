import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class BlockedUser {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @Column()
  account: User;

  @Column()
  cause: string;

  @Column()
  comment: string;
}
